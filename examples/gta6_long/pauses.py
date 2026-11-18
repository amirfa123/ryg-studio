import json,subprocess
W=[w for w in json.load(open('words_orig.json'))['words'] if w.get('type','word')=='word']
P=[("6?",2.3,0.8),("hours.",20.6,1.3),("players?",39.1,0.8),("Pack.",51.5,1.3),("hundred?",55.9,1.0),("now.",76.7,1.3),
   ("know...",95.7,0.6),("car.",104.7,1.3),("down...",125.8,0.7),("play.",131.6,1.3),("you...",153.2,1.2),("luck.",163.0,1.3),
   ("wasted?",170.8,1.0),("6?",183.8,0.8),("money.",189.2,1.3),("do.",216.1,1.3),("checklist:",220.2,0.5),("waiting.",244.0,0.4)]
import numpy as np
A=np.frombuffer(subprocess.run(['ffmpeg','-loglevel','error','-i','vo_raw.mp3','-f','s16le','-ac','1','-ar','44100','-'],capture_output=True).stdout,np.int16).astype(float)/32768
def quiet(a,b):
    best=None
    for t in np.arange(a,b,0.005):
        i=int(t*44100);e=np.sqrt((A[i-660:i+660]**2).mean())
        if best is None or e<best[0]:best=(e,t)
    return round(best[1],3),best[0]
cuts=[]
for txt,st,gap in P:
    i=[k for k,w in enumerate(W) if w['text']==txt and abs(w['start']-st)<0.3];assert len(i)==1,(txt,i);i=i[0]
    q,e=quiet(max(W[i]['start']+0.2,W[i]['end']-0.5),W[i+1]['start']+0.08);print(txt,q,round(e,4));cuts.append((q,gap))
cuts.sort()
# new words
out=[];off=0;ci=0
for w in W:
    while ci<len(cuts) and w['start']>=cuts[ci][0]:off+=cuts[ci][1];ci+=1
    out.append({**w,'start':round(w['start']+off,3),'end':round(w['end']+off,3)})
json.dump({'words':out},open('words_raw.json','w'))
# chapter starts (new time) = start of first word of each chapter
CH=[("What",0),("First",21.5),("Now,",52.4),("So",77.6),("Who",105.6),("Next...",132.8),("Now",163.9),("You",190.0),("So",216.9)]
starts=[]
for txt,st in CH:
    i=[k for k,w in enumerate(W) if w['text']==txt and abs(w['start']-st)<0.3][0];starts.append(out[i]['start'])
json.dump({'cuts':cuts,'starts':starts,'end':out[-1]['end']},open('timing.json','w'),indent=1)
# audio
segs=[];prev=0;parts=[];fl=''
for k,(c,gap) in enumerate(cuts):
    fl+=f"[0:a]atrim={prev}:{c},asetpts=PTS-STARTPTS[s{k}];anullsrc=r=44100:cl=mono,atrim=0:{gap}[z{k}];";parts+=[f"[s{k}]",f"[z{k}]"];prev=c
fl+=f"[0:a]atrim={prev},asetpts=PTS-STARTPTS[s{len(cuts)}];";parts.append(f"[s{len(cuts)}]")
fl+=''.join(parts)+f"concat=n={len(parts)}:v=0:a=1[o]"
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','vo_raw.mp3','-filter_complex',fl.replace('[0:a]','[a0]',0),'-map','[o]','-ar','44100','-ac','1','vo.wav'],check=True)
print(json.dumps({'starts':starts,'end':out[-1]['end']}))

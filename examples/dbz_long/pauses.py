import json,subprocess
W=[w for w in json.load(open('words_orig.json'))['words'] if w.get('type','word')=='word']
P=[("fighter?",2.4,0.8),("go.",16.72,0.6),("inside?",25.4,1.0),("guess...",62.64,1.4),("pancake.",82.08,0.8),("get?",85.68,0.6),("it.",111.12,0.8),("Earth?",125.92,0.6),("Guess...",128.16,1.4),("show?",143.12,0.8),("that.",150.24,0.8),("fly?",152.56,0.8),("cyclist...",175.44,0.6),("done.",182.8,0.8),("from?",188.16,0.8),("alive.",214.28,0.8),("planet?",234.8,0.8),("apart...",237.84,1.4),("buster.",243.52,0.8)]
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
CH=[("What",0),("Chapter",17.52),("But",39.52),("So",58.64),("Chapter",83.2),("Chapter",111.76),("Want",124.0),("Chapter",151.04),("Chapter",183.84),("But",215.12),("So,",244.48)]
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

import json,subprocess
W=[w for w in json.load(open('words_orig.json'))['words'] if w.get('type','word')=='word']
P=[("Games?",1.68,0.8),("go.",18.88,0.6),("move?",39.2,0.6),("it...",40.4,1.4),("else.",54.24,0.6),("first...",71.16,1.4),("trouble.",83.68,0.6),("it?",85.6,0.6),("drink.",100.4,0.7),("Fast.",106.4,0.4),("dangerous.",134.16,0.7),("smoke?",143.68,0.4),("guess...",144.88,1.4),("ground.",164.28,0.7),("adult?",176.56,0.4),("Guess...",177.68,1.4),("can.",200.08,0.7),("them?",207.12,0.6),("Nope.",210.64,0.4),("it.",230.24,0.8),("part.",234.2,0.6),("So...",250.48,0.6)]
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
CH=[("Could",0),("Chapter",19.6),("Chapter",55.12),("So",84.6),("Chapter",101.12),("Chapter",135.2),("Chapter",165.12),("Chapter",200.72),("So,",230.92)]
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

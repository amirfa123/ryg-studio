# usage: python3 examples/series_line/sfx_line.py w_line_<p> <TT>
import sys,json,re;sys.path.insert(0,'.')
from sfxlib import *
d,TT=sys.argv[1],float(sys.argv[2])
W=[w for w in json.load(open(f'{d}/words_raw.json'))['words'] if w.get('type','word')=='word']
wd=[re.sub(r"[^a-z']","",w['text'].lower()) for w in W]
st=lambda w:W[wd.index(w)]['start']
there,which,thats,andd,hit=st('there'),st('which'),st("that's"),st('and'),st('hit')
num=W[wd.index('are')+1]['start'];cmpw=W[wd.index('and')-1]['start'];pctw=W[wd.index('only')+1]['start']
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
m=Mix(TT,7)
m.put(shimmer(),0.05,0.35);m.put(pop(600),0.1,0.3);m.put(ooh(),1.6,0.2)
m.put(whoosh(0.6),there-0.15,0.45);m.put(slidewhistle(True,1.0),there+0.1,0.25)
for k in range(10):m.put(tick(),num+k*0.11,0.3)
m.put(airhorn(0.8),num+1.1,0.3);m.put(pop(800),num+1.15,0.35)
m.put(whoosh(0.5),which-0.1,0.4);m.put(pop(700),which+0.2,0.35)
for k in range(int((thats-which-0.6)/0.18)):m.put(tick(),which+0.35+k*0.18,0.2)
m.put(ding(1046),thats-0.45,0.3)
m.put(whoosh(0.5),thats-0.1,0.4);m.put(pop(900),thats+0.05,0.35);m.put(vineboom(),cmpw,0.45);m.put(ding(1318),cmpw+0.2,0.25)
m.put(whoosh(0.6),andd-0.1,0.4);m.put(shimmer(),andd+0.1,0.3);m.put(pop(600),pctw,0.35);m.put(recordscratch(),pctw+0.6,0.3);m.put(sadtrombone(),hit-1.5,0.25);m.put(bruhnote(),hit-1.3,0.25)
m.put(whoosh(0.5),hit-0.1,0.4);m.put(pop(1000),hit+0.15,0.35);m.put(ooh(),hit+0.4,0.25);m.put(bloop(1.2),hit+0.9,0.35);m.put(bloop(1.4),hit+1.5,0.35)
m.save(f'{d}/sfx.wav')

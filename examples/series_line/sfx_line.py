# usage: python3 examples/series_line/sfx_line.py w_line_<p> '<json from node tt.js>'
import sys,json,re;sys.path.insert(0,'.')
from sfxlib import *
d=sys.argv[1];J=json.loads(sys.argv[2]) if sys.argv[2].strip().startswith('{') else {'TT':float(sys.argv[2])};TT=J['TT']
W=[w for w in json.load(open(f'{d}/words_raw.json'))['words'] if w.get('type','word')=='word']
wd=[re.sub(r"[^a-z']","",w['text'].lower()) for w in W]
st=lambda w:W[wd.index(w)]['start']
there,which,thats,andd,hit=st('there'),st('which'),st("that's"),st('and'),st('hit')
num=W[wd.index('are')+1]['start'];io=wd.index('only');ia=wd.index('around',io);s6=W[min(ia+1,len(W)-1)]['start'];cta=st('comment') if 'comment' in wd else hit;cmpw=W[wd.index('and')-1]['start'];pctw=W[wd.index('only')+1]['start']
SP_,DL_=J.get('voSplit',1e9),J.get('voDelay',0)
sh=lambda v:v+DL_ if v>=SP_-0.02 else v
cta,hit=sh(cta),sh(hit)
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
m.put(whoosh(0.6),andd-0.1,0.4);m.put(shimmer(),andd+0.1,0.3);m.put(pop(600),pctw,0.35);m.put(recordscratch(),pctw+0.6,0.3);m.put(sadtrombone(),s6-1.3,0.25);m.put(bruhnote(),s6-1.1,0.25)
m.put(whoosh(0.5),s6-0.1,0.4)
for k in range(4):m.put(pop(700+k*120),s6+0.1+k*0.09,0.3)
m.put(ding(1175),cta,0.25)
m.put(whoosh(0.5),hit-0.1,0.4);m.put(pop(1000),hit+0.15,0.35);m.put(ooh(),hit+0.4,0.25);m.put(bloop(1.2),hit+0.9,0.35);m.put(bloop(1.4),hit+1.5,0.35)
# roll call: soft rising pop for every NEW name passing, light 'ooh' every ~5 s (no dead air)
if 'rollStart' in J:
    rs,re_,nn,pn,pl=J['rollStart'],J['rollEnd'],J['nNew'],J['paceNew'],J['paceLead']
    m.put(ooh(),rs+0.2,0.2);tt0=rs+pl
    for k in range(max(0,nn-1)):m.put(pop(600+(k%6)*70),tt0+k*pn+pn*0.5,0.14)
    for q in range(int((re_-rs)//5)):m.put(ooh(),rs+5*(q+1),0.12)
    m.put(whoosh(0.5),re_-0.1,0.35);m.put(ding(1175),re_+0.2,0.25)
m.save(f'{d}/sfx.wav')

import sys;sys.path.insert(0,'.')
from sfxlib import *
def hiss(d=0.8):x=tt(d);n=nz(d);return (n-lp(n,8))*0.3*np.minimum(1,x/0.08)*np.minimum(1,(d-x)/0.2)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def drip():x=tt(0.25);return np.sin(2*np.pi*(1400-2600*x)*x)*env(0.25,0.002,22)*0.7
def pump(d):
    out=np.zeros(int(SR*d))
    for k in range(int(d/0.3)):
        s=squish(0.18)*0.6;i=int(k*0.3*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def breath(d=1.0):x=tt(d);return lp(nz(d),8)*0.6*np.sin(np.pi*x/d)
w=sys.argv[1]
if w=='snake':
    m=Mix(21.0,93)
    m.put(hiss(1.0),0.6,0.2);m.put(pop(700),2.6,0.26);m.put(hiss(0.8),19.6,0.2)
    m.put(whoosh(0.5),4.4,0.45);m.put(recordscratch(),4.5,0.28);m.put(bonk(),4.65,0.3)
    m.put(pop(650),5.8,0.26);m.put(ding(1046),6.75,0.2);m.put(pop(760),6.8,0.26)
    m.put(whoosh(0.5),7.95,0.45);m.put(pop(700),9.1,0.26);m.put(stretch(0.7),10.6,0.18);m.put(boing(),10.75,0.26);m.put(pop(760),10.6,0.24)
    m.put(whoosh(0.5),11.4,0.45)
    for k in range(9):m.put(squish(0.2),11.8+k*0.42,0.16)
    m.put(pop(650),11.75,0.24);m.put(shimmer(),13.6,0.18);m.put(pop(700),14.45,0.26);m.put(slide(900,300,0.4),14.6,0.16)
    m.put(whoosh(0.5),16.05,0.45);m.put(munch(),17.0,0.25);m.put(vineboom(),17.5,0.32);m.put(ooh(),18.0,0.22);m.put(pop(760),18.2,0.26)
    m.put(whoosh(0.5),19.35,0.45)
    m.save('w_snake/sfx.wav')
if w=='nose':
    m=Mix(19.65,94)
    m.put(wind(2.6),0.0,0.18);m.put(wind(1.7),17.95,0.18)
    m.put(whoosh(0.5),2.55,0.45);m.put(chatter(0.7),2.75,0.22);m.put(pop(700),3.6,0.26);m.put(ding(1046),3.7,0.18)
    m.put(whoosh(0.5),4.8,0.45);m.put(slide(300,1100,1.2),5.1,0.16);m.put(bloop(1.2),5.9,0.25);m.put(pop(650),7.0,0.26)
    m.put(whoosh(0.5),8.7,0.45);m.put(wind(3.4),8.8,0.25);m.put(pop(700),8.85,0.26);m.put(pump(1.4),10.45,0.25);m.put(airhorn(0.5),11.1,0.2);m.put(drip(),11.75,0.35);m.put(bonk(),11.8,0.22)
    m.put(whoosh(0.5),12.15,0.45);m.put(breath(1.2),12.4,0.22);m.put(pop(650),12.7,0.24);m.put(pop(760),13.65,0.24);m.put(shimmer(),14.4,0.2);m.put(vineboom(),14.5,0.3);m.put(drip(),14.95,0.35)
    m.put(whoosh(0.5),15.0,0.45);m.put(breath(1.3),15.3,0.28);m.put(squish(0.4),16.95,0.18);m.put(pop(700),16.4,0.26);m.put(ding(1318),17.6,0.18)
    m.put(whoosh(0.5),17.9,0.45)
    m.save('w_nose/sfx.wav')
if w=='bfriday':
    m=Mix(19.6,95)
    m.put(pop(700),0.4,0.2);m.put(pop(760),0.7,0.2);m.put(pop(650),1.0,0.2)
    m.put(whoosh(0.5),3.2,0.45);m.put(pop(700),3.4,0.26)
    for k in range(14):m.put(tick(),4.3+k*0.15,0.2)
    m.put(chaching(),6.45,0.3);m.put(airhorn(0.7),6.5,0.22);m.put(ooh(),6.7,0.2)
    m.put(whoosh(0.5),7.2,0.45)
    for k in range(4):m.put(tick(),7.9+k,0.3);m.put(chaching(),7.95+k,0.18)
    m.put(whoosh(0.5),11.45,0.45);m.put(pop(700),11.6,0.26);m.put(slidewhistle(True,2.5),12.9,0.2);m.put(wind(2.6),13.0,0.2);m.put(pop(760),14.0,0.24)
    m.put(whoosh(0.5),15.95,0.45);m.put(pop(650),16.15,0.22);m.put(vineboom(),16.9,0.32);m.put(bruhnote(),17.4,0.2)
    m.put(whoosh(0.5),17.9,0.45);m.put(pop(700),18.4,0.2)
    m.save('w_bfriday/sfx.wav')

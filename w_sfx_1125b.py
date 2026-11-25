import sys;sys.path.insert(0,'.')
from sfxlib import *
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def clicks(d,rate=0.12):
    out=np.zeros(int(SR*d))
    for k in range(int(d/rate)):
        s=tick();i=int(k*rate*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def breathe(d=1.0):x=tt(d);return lp(nz(d),8)*np.sin(np.pi*x/d)**1.5*0.9
def purr(d):x=tt(d);return lp(nz(d),3)*(0.5+0.5*np.sin(2*np.pi*25*x))*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)*1.6
def stamp():x=tt(0.25);return (lp(nz(0.25),6)*1.2+np.sin(2*np.pi*110*x))*env(0.25,0.001,22)
def knead(d,rate=0.3):
    out=np.zeros(int(SR*d))
    for k in range(int(d/rate)):
        s=lp(nz(0.09),4)*env(0.09,0.004,40)*0.8;i=int(k*rate*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
w=sys.argv[1]
if w=='streams':
    m=Mix(21.2,261)
    m.put(clicks(4.2,0.18),0.1,0.12);m.put(pop(700),2.0,0.24)
    m.put(whoosh(0.5),4.2,0.45);for_k=[m.put(pop(500+k*60),4.5+k*0.28,0.14) for k in range(8)]
    m.put(slide(300,1300,1.6),5.3,0.16);m.put(vineboom(),6.95,0.34);m.put(airhorn(0.6),7.0,0.16);m.put(pop(760),7.9,0.24)
    m.put(whoosh(0.5),9.1,0.45);m.put(clicks(2.5,0.07),9.3,0.14);m.put(boing(),9.95,0.2);m.put(pop(650),10.6,0.22);m.put(boing(),11.25,0.2)
    m.put(dundun(),11.85,0.28);m.put(ding(1318),12.0,0.16)
    m.put(whoosh(0.5),13.45,0.45);m.put(slide(400,1400,1.6),13.9,0.14);m.put(pop(760),14.1,0.22);m.put(bruhnote(),15.7,0.2)
    m.put(whoosh(0.5),15.85,0.45);m.put(recordscratch(),16.05,0.26);m.put(wind(3.4),16.1,0.22);m.put(slide(1400,300,1.2),16.1,0.14)
    m.put(pop(700),17.2,0.22);m.put(growl(0.9),18.2,0.2);m.put(ooh(),18.4,0.18);m.put(pop(760),18.3,0.22)
    m.put(whoosh(0.5),19.35,0.45);m.put(clicks(1.6,0.18),19.6,0.12)
    m.save('w_streams/sfx.wav')
if w=='breath':
    m=Mix(20.05,262)
    for k in range(int(20.05/2.0)+1):
        if k*2.0<2.5 or k*2.0>18.2:m.put(breathe(0.9),k*2.0,0.16)
    m.put(wind(2.5),0.0,0.12)
    m.put(whoosh(0.5),2.4,0.45);m.put(pop(700),3.0,0.2);m.put(ding(1046),4.0,0.16);m.put(bloop(1.0),5.15,0.24);m.put(shimmer(0.9),5.2,0.18)
    m.put(whoosh(0.5),6.6,0.45);m.put(breathe(1.6),7.0,0.24);m.put(slide(1200,300,1.0),7.35,0.14);m.put(wind(2.0),7.2,0.2);m.put(recordscratch(),8.35,0.22)
    m.put(whoosh(0.5),9.15,0.45);m.put(pop(650),9.45,0.2);m.put(slide(300,900,1.6),9.6,0.12)
    for k in range(6):m.put(bloop(0.8+k*0.1),11.2+k*0.05,0.18)
    m.put(vineboom(),11.3,0.3)
    m.put(whoosh(0.5),12.4,0.45);m.put(breathe(1.2),12.6,0.22);m.put(boing(),13.0,0.24);m.put(ooh(),13.75,0.18);m.put(pop(760),13.6,0.22)
    m.put(whoosh(0.5),14.55,0.45);m.put(slidewhistle(False,1.6),14.9,0.16);m.put(pop(700),15.0,0.2);m.put(dundun(),16.2,0.22);m.put(breathe(0.8),16.3,0.16)
    m.put(whoosh(0.5),18.15,0.45)
    m.save('w_breath/sfx.wav')
if w=='knead':
    m=Mix(18.25,263)
    m.put(knead(2.5,0.3),0.0,0.07);m.put(purr(2.5),0.0,0.05)
    m.put(whoosh(0.5),2.35,0.3);m.put(pop(700),2.8,0.22)
    for k in range(4):m.put(pop(900+k*120),2.9+k*0.15,0.16)
    m.put(squish(0.5),4.7,0.2);m.put(boing(),5.3,0.18);m.put(bloop(1.2),5.9,0.2);m.put(ding(1318),6.2,0.16)
    m.put(whoosh(0.5),7.2,0.3);m.put(purr(3.0),7.35,0.08);m.put(knead(3.0,0.22),7.35,0.06);m.put(shimmer(0.8),8.3,0.18);m.put(ooh(),9.4,0.16)
    m.put(recordscratch(),10.38,0.3);m.put(dundun(),10.55,0.24)
    m.put(whoosh(0.5),11.6,0.3);m.put(pop(650),11.8,0.2);m.put(shimmer(1.0),12.7,0.2);m.put(bruhnote(),13.0,0.16)
    m.put(whoosh(0.5),13.65,0.3);
    for k in range(3):m.put(stamp(),14.2+k*0.55,0.3)
    m.put(vineboom(),15.6,0.3);m.put(knead(2.5,0.22),13.9,0.05)
    m.put(whoosh(0.5),16.4,0.3);m.put(knead(1.7,0.3),16.55,0.07);m.put(purr(1.7),16.55,0.05)
    m.save('w_knead/sfx.wav')

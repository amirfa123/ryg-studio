import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.35);return (lp(nz(0.35),6)*1.2+np.sin(2*np.pi*70*x))*env(0.35,0.001,14)
def tick():x=tt(0.04);return np.sin(2*np.pi*2400*x)*env(0.04,0.001,80)
def splash(d=0.7):x=tt(d);return (lp(nz(d),2)*0.9+nz(d)*0.25)*env(d,0.004,5)
def beat():x=tt(0.3);return np.sin(2*np.pi*55*x)*env(0.3,0.002,16)*1.2
def roar(d):x=tt(d);return (lp(nz(d),9)*1.6+np.sin(2*np.pi*60*x)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.25)
def fire(d):x=tt(d);return (lp(nz(d),5)*1.4+lp(nz(d),40)*0.4*(np.random.rand(len(x))>0.995))*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)
def jingle(d=0.9):
    out=np.zeros(int(SR*d))
    for k in range(9):
        s=int(SR*k*0.09);x=tt(0.25);v=(np.sin(2*np.pi*(3200+300*(k%3))*x)+0.5*np.sin(2*np.pi*5100*x))*env(0.25,0.001,22)*0.4
        out[s:s+len(v)]+=v[:max(0,len(out)-s)]
    return out
w=sys.argv[1]
if w=='ice':
    T=20.5;m=Mix(T,601)
    m.put(wind(3.2),0.05,0.06);m.put(shimmer(0.6),1.0,0.1);m.put(pop(700),0.2,0.15)
    m.put(whoosh(0.5),3.2,0.45);m.put(slide(300,900,2.0),3.5,0.1)
    for k in range(7):m.put(bloop(),3.5+k*0.3,0.12)
    m.put(vineboom(),4.75,0.3);m.put(pop(760),4.75,0.2)
    m.put(whoosh(0.5),5.85,0.45);m.put(slide(250,800,1.8),6.2,0.1);m.put(pop(700),6.3,0.2);m.put(squish(0.6),7.6,0.2);m.put(bloop(),7.7,0.18);m.put(ding(1318),7.55,0.14)
    m.put(whoosh(0.5),8.5,0.45);m.put(splash(0.8),8.65,0.2)
    for tt0 in (8.72,9.43,9.89):m.put(pop(720),tt0,0.2)
    m.put(ooh(),10.0,0.13);m.put(splash(0.7),10.75,0.22)
    m.put(whoosh(0.5),11.4,0.45);m.put(slide(900,250,1.5),11.8,0.1);m.put(pop(700),12.6,0.2);m.put(sadtrombone(),12.9,0.18)
    m.put(whoosh(0.5),13.65,0.45);m.put(ding(2093,0.4),14.0,0.12);m.put(ding(2349,0.4),14.25,0.1)
    m.put(recordscratch(),15.6,0.22);m.put(pop(700),15.7,0.2);m.put(ding(1568),16.7,0.15);m.put(pop(760),16.85,0.2)
    m.put(whoosh(0.5),18.75,0.45);m.put(wind(1.6),18.9,0.06)
    m.save('w_ice/sfx.wav')
if w=='breath':
    T=20.0;m=Mix(T,602)
    m.put(shimmer(0.6),1.0,0.1);m.put(pop(700),0.2,0.15);m.put(wind(3.5),0.1,0.04)
    m.put(whoosh(0.5),3.85,0.45);m.put(splash(0.6),3.95,0.25)
    for k in range(6):m.put(bloop(),4.2+k*0.35,0.12)
    for k in range(21):m.put(tick(),4.1+k*0.1,0.12)
    m.put(pop(700),5.6,0.2);m.put(ding(1318),6.2,0.12)
    m.put(whoosh(0.5),6.3,0.45)
    tb=6.6;k=0
    while tb<9.5:m.put(beat(),tb,0.3);tb+=0.55-0.3*min(1,k/8);k+=1
    m.put(dundun(),7.3,0.22);m.put(ding(1568),8.6,0.13);m.put(pop(760),9.55,0.2)
    m.put(whoosh(0.5),9.5,0.4);m.put(splash(0.9),9.62,0.35);m.put(airhorn(0.5),9.8,0.13)
    m.put(whoosh(0.5),10.85,0.45);m.put(slidewhistle(False,0.5),11.0,0.16);m.put(splash(0.8),11.42,0.35);m.put(bonk(),11.45,0.24)
    for k in range(5):m.put(beat(),12.0+k*(0.7+0.12*k),0.28)
    m.put(pop(700),12.75,0.2);m.put(pop(760),13.9,0.2)
    m.put(whoosh(0.5),15.05,0.45);m.put(slide(800,200,2.8),15.3,0.08)
    for k in range(4):m.put(bloop(),15.4+k*0.6,0.1)
    for k in range(26):m.put(tick(),15.3+k*0.1,0.1)
    m.put(vineboom(),16.9,0.3);m.put(ooh(),17.4,0.12)
    m.put(whoosh(0.5),18.2,0.45);m.put(wind(1.6),18.4,0.04)
    m.save('w_breath/sfx.wav')
if w=='santa':
    T=20.85;m=Mix(T,603)
    m.put(wind(4.0),0.05,0.06);m.put(jingle(),0.3,0.18);m.put(pop(700),0.2,0.15)
    m.put(whoosh(0.5),4.1,0.45);m.put(pop(720),4.35,0.2)
    for k in range(16):m.put(tick(),5.4+k*0.1,0.12)
    m.put(vineboom(),7.0,0.3)
    m.put(whoosh(0.5),8.05,0.45);m.put(jingle(),8.2,0.14);m.put(roar(2.8),8.2,0.03)
    for k in range(17):m.put(pop(500+k*30),8.5+k*0.1,0.06)
    m.put(chaching(),10.25,0.16)
    m.put(whoosh(0.5),10.95,0.45);m.put(pop(700),11.2,0.2);m.put(slide(400,1200,1.0),11.9,0.1);m.put(whoosh(0.6),12.4,0.4);m.put(ding(1318),12.9,0.13)
    m.put(whoosh(0.5),13.15,0.45);m.put(wind(2.9),13.3,0.08);m.put(recordscratch(),13.85,0.2);m.put(slide(200,1600,1.6),13.6,0.1);m.put(airhorn(0.6),14.6,0.14)
    m.put(whoosh(0.5),16.1,0.45);m.put(fire(2.9),16.3,0.1);m.put(dundun(),17.3,0.22);m.put(pop(760),18.2,0.2);m.put(pop(700),16.3,0.18)
    m.put(whoosh(0.5),19.05,0.45);m.put(jingle(),19.4,0.12)
    m.save('w_santa/sfx.wav')

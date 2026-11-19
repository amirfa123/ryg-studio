import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def click():x=tt(0.04);return lp(nz(0.04),3)*env(0.04,0.0005,90)*0.8
def splash(d=1.0):x=tt(d);return lp(nz(d),4)*env(d,0.003,4)*1.6+lp(nz(d),60)*env(d,0.002,10)*1.2
def engine(d):x=tt(d);f=70+50*np.minimum(1,x/1.2);ph=2*np.pi*np.cumsum(f)/SR;return (np.sign(np.sin(ph))*0.3+np.sin(ph)*0.4)*np.minimum(1,x/0.1)*np.minimum(1,(d-x)/0.2)*0.6
def bubbles(d=1.2):
    o=np.zeros(int(SR*d))
    for k in range(9):
        b=bloop(0.6+0.8*np.random.rand());st=int(np.random.rand()*(len(o)-len(b)));o[st:st+len(b)]+=b*0.5
    return o
which=sys.argv[1]
if which=='sink':
    m=Mix(21.7,11)
    m.put(shimmer(),0.05,0.4);m.put(dundun(),1.9,0.35)
    m.put(whoosh(0.5),3.2,0.45);m.put(splash(1.0),3.3,0.5);m.put(bubbles(1.4),4.5,0.5);m.put(tick(),4.6,0.5);m.put(tick(),5.6,0.5);m.put(pop(500),4.9,0.4)
    m.put(whoosh(0.5),6.62,0.4);m.put(slide(500,200,0.8),6.9,0.4);m.put(bubbles(1.0),7.2,0.4);m.put(thud(),8.9,0.45);m.put(thud(),9.3,0.4);m.put(vineboom(),9.7,0.45)
    m.put(whoosh(0.5),10.7,0.4);m.put(pop(700),12.4,0.5);m.put(ding(1046),12.7,0.3);m.put(pop(800),13.6,0.5);m.put(ding(1175),13.9,0.3);m.put(pop(900),14.56,0.5);m.put(ding(1318),14.86,0.3);m.put(airhorn(0.6),14.9,0.25)
    m.put(whoosh(0.5),15.4,0.4);m.put(splash(0.8),15.5,0.35);m.put(recordscratch(),15.9,0.35);m.put(ooh(),16.6,0.3)
    m.put(whoosh(0.5),17.4,0.4)
    for k in range(5):m.put(splash(0.35),17.6+k*0.45,0.25)
    m.put(boing(),18.7,0.35)
    m.put(whoosh(0.6),19.95,0.4);m.put(pop(600),21.2,0.3)
    m.save('w_sink/sfx.wav')
if which=='ramp':
    m=Mix(21.0,12)
    m.put(engine(3.6),0.2,0.12);m.put(honk(),2.2,0.35)
    m.put(whoosh(0.6),3.95,0.45);m.put(engine(3.0),4.0,0.2);m.put(slidewhistle(True,1.2),4.4,0.3)
    m.put(whoosh(0.5),7.05,0.4);m.put(slidewhistle(True,0.8),7.4,0.3);m.put(slidewhistle(False,0.8),8.3,0.3);m.put(ding(1046),9.3,0.35)
    m.put(whoosh(0.8),9.6,0.5);m.put(airhorn(0.8),10.3,0.3);m.put(vineboom(),10.6,0.45);m.put(ooh(),12.2,0.3);m.put(chaching(),13.4,0.25);m.put(thud(),14.0,0.45)
    m.put(whoosh(0.5),14.55,0.4);m.put(bonk(),16.1,0.45);m.put(sadtrombone(),16.3,0.25);m.put(ding(1318),16.2,0.3)
    m.put(whoosh(0.5),17.25,0.4);m.put(boing(),17.5,0.35);m.put(bruhnote(),18.2,0.3)
    m.put(whoosh(0.6),19.35,0.4);m.put(engine(1.4),19.5,0.1)
    m.save('w_ramp/sfx.wav')
if which=='brain':
    m=Mix(20.0,13)
    m.put(shimmer(),0.05,0.4);m.put(pop(600),0.3,0.3);m.put(ooh(),2.4,0.25)
    m.put(whoosh(0.5),5.4,0.45);m.put(shimmer(),5.6,0.5);m.put(pop(900),5.7,0.4)
    for k in range(6):m.put(pop(1000+150*k),5.9+k*0.2,0.25)
    m.put(whoosh(0.5),7.15,0.4);m.put(slide(300,1200,1.6),7.6,0.35);m.put(vineboom(),8.9,0.45);m.put(slidewhistle(False,0.7),11.2,0.3)
    m.put(whoosh(0.5),12.5,0.4)
    for k in range(3):m.put(tick(),12.6+k*0.85,0.6);m.put(ding(880+220*k),12.65+k*0.85,0.25)
    m.put(airhorn(0.8),13.9,0.3)
    m.put(whoosh(0.5),15.3,0.4);m.put(click(),15.7,0.7);m.put(ding(1318),15.75,0.3);m.put(recordscratch(),16.9,0.35);m.put(bruhnote(),17.6,0.35);m.put(sadtrombone(),17.9,0.2)
    m.put(whoosh(0.6),18.45,0.4);m.put(pop(600),19.6,0.3)
    m.save('w_brain/sfx.wav')

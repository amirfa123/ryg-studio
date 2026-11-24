import sys;sys.path.insert(0,'.')
from sfxlib import *
def engine(d,f0=70,f1=110):x=tt(d);f=np.linspace(f0,f1,len(x));s=np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.2+lp(nz(d),40)*0.5;return s*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def glitch(d=0.4):x=tt(d);return np.sign(np.sin(2*np.pi*(300+900*(np.floor(x*30)%3))*x))*0.3*env(d,0.002,5)
def heartbeat():x=tt(0.5);return (np.sin(2*np.pi*55*x)*env(0.5,0.003,18)+np.roll(np.sin(2*np.pi*50*x)*env(0.5,0.003,18),int(0.18*SR))*0.7)
def thud():x=tt(0.4);return (np.sin(2*np.pi*60*x*np.exp(-x*3))*env(0.4,0.002,9)+lp(nz(0.4),5)*env(0.4,0.001,20)*0.5)
def crack():x=tt(0.5);return lp(nz(0.5),2)*env(0.5,0.001,10)*0.9
def alarm(d):x=tt(d);return np.sin(2*np.pi*(700+250*np.sign(np.sin(2*np.pi*3.5*x)))*x)*0.35*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.1)
def chew(d):
    out=np.zeros(int(SR*d))
    for k in range(int(d/0.33)):
        s=squish(0.15)*0.6;i=int(k*0.33*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def spin(d):x=tt(d);return lp(nz(d),30)*(0.5+0.5*np.sin(2*np.pi*(0.4+x*0.25)*x*2))*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.3)*1.3
def notes(d,seed=1):
    out=np.zeros(int(SR*d));rng=np.random.default_rng(seed);fs=[523,659,784,880,1046]
    for k in range(int(d*3)):
        s=ding(fs[rng.integers(5)],0.3)*0.5;i=int(k/3*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
w=sys.argv[1]
if w=='scooter':
    m=Mix(21.45,91)
    m.put(engine(4.0,90,120),0.0,0.14);m.put(engine(1.7,90,120),19.75,0.14)
    m.put(whoosh(0.5),0.5,0.4);m.put(pop(700),0.9,0.26);m.put(glitch(),2.9,0.3);m.put(recordscratch(),3.0,0.28)
    m.put(whoosh(0.5),3.9,0.45);m.put(pop(650),4.25,0.26);m.put(pop(760),4.85,0.26)
    for k in range(10):m.put(tick(),5.5+k*0.09,0.2)
    m.put(chaching(),6.4,0.25);m.put(bonk(),6.5,0.3)
    m.put(whoosh(0.5),7.45,0.45);m.put(wind(2.3),7.6,0.14);m.put(slide(800,300,0.4),7.7,0.18);m.put(slide(300,900,1.0),8.3,0.18);m.put(ding(1046),9.1,0.2)
    m.put(whoosh(0.5),9.8,0.45);m.put(engine(4.2,100,150),9.9,0.13);m.put(stretch(2.5),10.6,0.15);m.put(vineboom(),13.1,0.32)
    m.put(whoosh(0.5),14.05,0.45);m.put(airhorn(0.7),14.3,0.22);m.put(wind(2.4),14.3,0.14);m.put(ooh(),15.0,0.25)
    m.put(whoosh(0.5),16.6,0.45);m.put(engine(3.0,110,220),16.75,0.13);m.put(pop(700),17.0,0.26);m.put(slidewhistle(False,0.8),18.2,0.24);m.put(pop(760),18.25,0.26);m.put(ding(1318),18.9,0.18)
    m.put(whoosh(0.5),19.7,0.45)
    m.save('w_scooter/sfx.wav')
if w=='earworm':
    m=Mix(18.35,92)
    m.put(notes(2.4,1),0.0,0.18);m.put(notes(1.8,1),16.55,0.18)
    m.put(whoosh(0.5),2.35,0.45);m.put(squish(0.6),2.7,0.25);m.put(pop(650),2.75,0.26);m.put(boing(),3.4,0.24)
    m.put(whoosh(0.5),3.8,0.45)
    for k in range(9):m.put(pop(500+k*60),4.3+k*0.078,0.22)
    m.put(bruhnote(),5.05,0.22);m.put(pop(700),5.95,0.26)
    m.put(whoosh(0.5),6.9,0.45);m.put(ding(1046),7.9,0.18);m.put(slide(300,1100,0.6),8.3,0.18);m.put(pop(760),9.1,0.26)
    m.put(whoosh(0.5),9.55,0.45);m.put(notes(2.6,3),9.7,0.14);m.put(pop(650),10.9,0.26);m.put(recordscratch(),11.65,0.28)
    m.put(whoosh(0.5),12.25,0.45);m.put(pop(700),12.4,0.26);m.put(dundun(),12.85,0.24);m.put(pop(760),13.6,0.26);m.put(chew(1.05),13.55,0.3)
    m.put(stretch(1.2),14.6,0.15);m.put(pop(650),15.2,0.24);m.put(bonk(),15.15,0.22);m.put(poof(),15.85,0.32);m.put(vineboom(),15.9,0.3)
    m.put(whoosh(0.5),16.45,0.45)
    m.save('w_earworm/sfx.wav')
if w=='gravity':
    m=Mix(21.65,93)
    for k in range(7):m.put(whoosh(0.25),0.15+k*0.6,0.3)
    for k in range(3):m.put(whoosh(0.25),20.25+k*0.6,0.3)
    m.put(pop(700),1.2,0.24);m.put(pop(700),2.6,0.24)
    m.put(whoosh(0.5),4.25,0.45);m.put(pop(650),4.5,0.24);m.put(dundun(),6.45,0.26);m.put(crack(),6.5,0.4);m.put(thud(),6.5,0.45);m.put(pop(760),6.55,0.26);m.put(stretch(0.8),6.7,0.15)
    m.put(whoosh(0.5),7.4,0.45);m.put(pop(650),7.6,0.26);m.put(honk(),8.0,0.24);m.put(pop(760),8.3,0.26);m.put(ding(1046),8.9,0.2)
    m.put(whoosh(0.5),9.3,0.45)
    for k in range(5):m.put(heartbeat(),9.5+k*0.62,0.3)
    m.put(slide(900,250,1.0),10.9,0.18);m.put(pop(650),10.45,0.22)
    m.put(whoosh(0.5),12.52,0.45);m.put(slidewhistle(False,0.7),12.7,0.24);m.put(thud(),13.35,0.45)
    m.put(whoosh(0.5),13.8,0.45);m.put(spin(3.0),13.9,0.35);m.put(pop(700),14.9,0.24);m.put(pop(760),16.3,0.26)
    m.put(whoosh(0.5),16.85,0.45);m.put(alarm(2.9),17.15,0.2);m.put(vineboom(),17.2,0.32);m.put(crack(),17.25,0.4);m.put(pop(700),18.4,0.24);m.put(bonk(),18.9,0.3);m.put(sadtrombone(),19.0,0.24)
    m.put(whoosh(0.5),19.95,0.45)
    m.save('w_gravity/sfx.wav')

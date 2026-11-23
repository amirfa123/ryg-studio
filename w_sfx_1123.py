import sys;sys.path.insert(0,'.')
from sfxlib import *
def splashy(d=0.6):x=tt(d);return (lp(nz(d),6)*0.9+lp(nz(d),2)*0.4)*env(d,0.004,6)
def lap(d):x=tt(d);return lp(nz(d),60)*(0.5+0.5*np.sin(2*np.pi*0.77*x))*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)*1.5
def bark():x=tt(0.2);f=250+500*np.exp(-x*9);return (np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.35+lp(nz(0.2),4)*0.4)*env(0.2,0.004,14)
def chop(d):x=tt(d);return lp(nz(d),20)*(0.5+0.5*np.sign(np.sin(2*np.pi*13*x)))*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)*1.4
def engine(d,f0=70,f1=110):x=tt(d);f=np.linspace(f0,f1,len(x));s=np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.2+lp(nz(d),40)*0.5;return s*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def keys(d):
    out=np.zeros(int(SR*d));rng=np.random.default_rng(3)
    for k in range(int(d*9)):
        i=int((k/9+rng.random()*0.04)*SR);s=lp(nz(0.03),3)*env(0.03,0.0005,90)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def hum(d):x=tt(d);return (np.sin(2*np.pi*60*x)*0.25+lp(nz(d),80)*0.4)*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)
def heartbeat():x=tt(0.5);return (np.sin(2*np.pi*55*x)*env(0.5,0.003,18)+np.roll(np.sin(2*np.pi*50*x)*env(0.5,0.003,18),int(0.18*SR))*0.7)
def hiss(d):x=tt(d);return lp(nz(d),2)*np.minimum(1,x/0.05)*np.exp(-x*2.5)*0.8
def bubbles(d):
    out=np.zeros(int(SR*d));rng=np.random.default_rng(5)
    for k in range(int(d*14)):
        i=int(rng.random()*(d-0.1)*SR);b=bloop(1.2+rng.random()*0.8)*0.5
        if i+len(b)<len(out):out[i:i+len(b)]+=b
    return out
which=sys.argv[1]
if which=='dog':
    m=Mix(20.95,81)
    m.put(lap(20.9),0.0,0.22)
    m.put(splashy(0.5),0.3,0.3);m.put(pop(700),1.0,0.28);m.put(bloop(),2.6,0.3);m.put(splashy(0.4),2.0,0.25);m.put(splashy(0.4),3.3,0.25)
    m.put(whoosh(0.5),3.9,0.45);m.put(engine(1.8,90,130),4.0,0.3);m.put(airhorn(0.6),4.15,0.22);m.put(pop(650),4.12,0.28);m.put(bark(),4.5,0.4);m.put(bark(),4.75,0.35);m.put(splashy(0.4),4.05,0.3)
    m.put(whoosh(0.5),5.62,0.45);m.put(pop(600),5.92,0.28);m.put(ding(1046),6.05,0.2);m.put(pop(800),6.7,0.2);m.put(pop(700),8.75,0.28);m.put(bark(),9.0,0.35);m.put(pop(760),9.5,0.28);m.put(shimmer(),9.55,0.2)
    m.put(whoosh(0.5),10.35,0.45);m.put(chop(3.4),10.45,0.32);m.put(pop(650),10.5,0.26);m.put(boing(),10.6,0.24);m.put(splashy(0.7),11.3,0.4)
    m.put(pop(700),11.78,0.26);m.put(slidewhistle(False,0.9),11.8,0.22);m.put(splashy(0.9),12.75,0.45);m.put(vineboom(),12.8,0.32)
    m.put(whoosh(0.5),13.7,0.45);m.put(pop(620),13.95,0.28);m.put(pop(760),14.8,0.28);m.put(ding(1318),14.95,0.2)
    m.put(whoosh(0.5),15.55,0.45);m.put(pop(700),15.8,0.3)
    for k,tt0 in enumerate([16.2,16.9,17.6,18.3]):m.put(splashy(0.35),tt0,0.28)
    m.put(ooh(),18.55,0.3);m.put(ding(1568),18.6,0.2);m.put(pop(700),18.55,0.25)
    m.put(whoosh(0.5),19.28,0.45);m.put(splashy(0.4),20.0,0.22)
    m.save('w_dog/sfx.wav')
if which=='eyes':
    m=Mix(19.1,82)
    m.put(hum(19.0),0.0,0.07);m.put(keys(3.8),0.0,0.18);m.put(pop(700),1.6,0.26);m.put(slide(400,900,0.3),2.2,0.15)
    m.put(whoosh(0.5),3.75,0.45);m.put(pop(650),4.6,0.25)
    for k in range(15):m.put(tick(),4.6+k*0.133,0.22)
    m.put(ding(1046),6.6,0.18)
    m.put(whoosh(0.5),6.8,0.45);m.put(keys(3.4),6.9,0.16);m.put(recordscratch(),8.65,0.3);m.put(slide(1000,300,0.6),8.75,0.2);m.put(dundun(),9.6,0.25);m.put(pop(600),9.6,0.25)
    m.put(whoosh(0.5),10.28,0.45);m.put(wind(1.6),10.4,0.25);m.put(stretch(0.8),10.6,0.15);m.put(bonk(),11.2,0.3)
    m.put(whoosh(0.5),11.9,0.45);m.put(pop(700),12.5,0.25)
    for k in range(18):m.put(tick(),12.3+k*0.105,0.18)
    m.put(ding(880),14.1,0.18)
    m.put(whoosh(0.5),14.2,0.45);m.put(pop(650),14.7,0.25);m.put(slide(900,250,1.6),15.0,0.15);m.put(sadtrombone(),16.3,0.26);m.put(pop(700),16.4,0.25)
    m.put(whoosh(0.5),17.22,0.45);m.put(keys(1.7),17.4,0.22)
    m.save('w_eyes/sfx.wav')
if which=='space':
    m=Mix(17.1,83)
    m.put(hum(3.5),0.0,0.05);m.put(hum(1.7),15.4,0.05)
    for k in range(3):m.put(ding(1760,0.25),0.1+k*1.1,0.1)
    m.put(pop(700),1.45,0.25);m.put(bruhnote(),1.5,0.26);m.put(ding(1760,0.25),16.5,0.1)
    m.put(whoosh(0.5),3.25,0.45);m.put(hiss(1.2),3.35,0.22);m.put(poof(),3.7,0.3);m.put(bonk(),4.15,0.3);m.put(pop(650),4.3,0.26)
    m.put(whoosh(0.5),4.9,0.45);m.put(pop(700),5.2,0.26);m.put(wind(1.7),5.35,0.18);m.put(pop(600),5.9,0.24)
    m.put(whoosh(0.5),7.15,0.45);m.put(bubbles(1.8),7.7,0.2);m.put(pop(650),8.4,0.26);m.put(ding(1318),8.45,0.18)
    m.put(whoosh(0.5),9.46,0.45);m.put(pop(700),9.7,0.26);m.put(stretch(0.9),9.8,0.15);m.put(pop(760),10.6,0.26);m.put(boing(),10.62,0.25)
    m.put(whoosh(0.5),11.28,0.45)
    for k in range(4):m.put(heartbeat(),11.9+k*0.9,0.3-k*0.05)
    for k in range(16):m.put(tick(),11.9+k*0.18,0.16)
    m.put(slidewhistle(False,0.6),14.4,0.22);m.put(sadtrombone(),14.75,0.26)
    m.put(whoosh(0.5),15.32,0.45)
    m.save('w_space/sfx.wav')

import sys;sys.path.insert(0,'.')
from sfxlib import *
def flaps(d,rate=9):
    out=np.zeros(int(SR*d));
    for k in range(int(d*rate)):
        i=int(k/rate*SR);s=lp(nz(0.07),8)*env(0.07,0.003,40)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def gobble():x=tt(0.5);f=300+120*np.sin(2*np.pi*14*x);return np.sin(2*np.pi*np.cumsum(f)/SR)*(0.5+0.5*np.sign(np.sin(2*np.pi*12*x)))*env(0.5,0.01,4)*0.6
def birds(d):x=tt(d);return lp(nz(d),30)*0.15*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)
def crickets(d):x=tt(d);return np.sin(2*np.pi*4200*x)*(np.sin(2*np.pi*30*x)>0.6)*(np.sin(2*np.pi*0.9*x)>0)*0.12
def rumble(d):x=tt(d);return lp(nz(d),60)*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.3)*1.3
def crack():x=tt(0.4);return lp(nz(0.4),2)*env(0.4,0.001,18)*1.2
def boom():x=tt(1.2);return (lp(nz(1.2),80)*1.5+np.sin(2*np.pi*45*x)*0.8)*env(1.2,0.004,4)
def waves(d):x=tt(d);return lp(nz(d),12)*(0.6+0.4*np.sin(2*np.pi*0.4*x))*np.minimum(1,x/0.5)*np.minimum(1,(d-x)/0.5)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def clink():x=tt(0.3);return (np.sin(2*np.pi*2600*x)+0.5*np.sin(2*np.pi*3900*x))*env(0.3,0.001,14)*0.5
def chalk(d):x=tt(d);return lp(nz(d),3)*(0.5+0.5*np.sin(2*np.pi*7*x))*0.5
which=sys.argv[1]
if which=='turkey':
    m=Mix(20.0,91)
    m.put(birds(2.4),0.0,0.25);m.put(birds(1.7),18.3,0.25);m.put(gobble(),1.0,0.4);m.put(pop(700),1.0,0.22)
    m.put(whoosh(0.5),2.25,0.45);m.put(airhorn(0.6),2.45,0.22);m.put(flaps(2.2,10),2.9,0.4);m.put(whoosh(0.6),3.4,0.4);m.put(pop(650),3.0,0.24)
    m.put(whoosh(0.5),4.9,0.45);m.put(flaps(3.2,12),5.0,0.3);m.put(wind(3.0),5.1,0.22);m.put(pop(700),5.6,0.24)
    for k in range(12):m.put(tick(),5.6+k*0.15,0.16)
    m.put(ding(1318),7.4,0.2);m.put(pop(760),7.4,0.26);m.put(ooh(),7.5,0.24);m.put(pop(600),6.6,0.22)
    m.put(whoosh(0.5),8.2,0.45);m.put(crickets(1.9),8.3,0.25);m.put(pop(650),8.6,0.24);m.put(ding(784,0.6),9.0,0.12)
    m.put(whoosh(0.5),10.05,0.45);m.put(recordscratch(),10.2,0.3);m.put(pop(700),10.7,0.24);m.put(clink(),10.9,0.25)
    m.put(whoosh(0.5),11.8,0.45);m.put(pop(650),12.2,0.24);m.put(flaps(2.6,14),12.3,0.35)
    for tt0 in [12.6,13.3,14.0]:m.put(boing(),tt0,0.18)
    m.put(sadtrombone(),15.0,0.26);m.put(pop(700),15.1,0.22)
    m.put(whoosh(0.5),15.65,0.45);m.put(bonk(),16.6,0.32);m.put(slide(900,300,0.4),16.2,0.15);m.put(bruhnote(),17.4,0.24)
    m.put(whoosh(0.5),18.2,0.45)
    m.save('w_turkey/sfx.wav')
if which=='moon':
    m=Mix(22.15,92)
    m.put(waves(3.2),0.0,0.25);m.put(waves(1.9),20.3,0.25);m.put(dundun(),0.3,0.24);m.put(pop(700),1.6,0.22)
    m.put(whoosh(0.5),3.0,0.45);m.put(rumble(2.5),3.1,0.25)
    for k in range(14):m.put(tick(),3.3+k*0.15,0.14)
    m.put(pop(650),3.9,0.24);m.put(slide(300,900,0.4),4.3,0.18);m.put(pop(760),4.4,0.22)
    m.put(whoosh(0.5),5.55,0.45);m.put(waves(2.6),5.6,0.4);m.put(pop(700),5.8,0.24);m.put(airhorn(0.5),6.7,0.2);m.put(boom(),7.4,0.3)
    m.put(whoosh(0.5),8.1,0.45);m.put(recordscratch(),8.25,0.3);m.put(pop(650),8.5,0.22);m.put(crack(),9.3,0.35);m.put(crack(),9.7,0.3)
    m.put(whoosh(0.5),10.3,0.45);m.put(rumble(4.6),10.4,0.22)
    for k in range(16):m.put(tick(),10.5+k*0.155,0.14)
    m.put(crack(),12.6,0.3);m.put(vineboom(),13.0,0.32);m.put(boom(),13.05,0.3);m.put(pop(700),13.6,0.22)
    m.put(whoosh(0.6),15.1,0.45);m.put(shimmer(1.0),15.3,0.25);m.put(ooh(),15.6,0.26);m.put(pop(650),15.4,0.22)
    m.put(whoosh(0.5),17.05,0.45);m.put(pop(700),17.3,0.22)
    for k,tt0 in enumerate([17.5,17.9,18.4,18.8,19.3,19.7]):m.put(whoosh(0.4),tt0,0.3);m.put(boom(),tt0+0.35,0.18)
    m.put(whoosh(0.5),20.3,0.45)
    m.save('w_moon/sfx.wav')
if which=='dessert':
    m=Mix(22.6,93)
    m.put(chatter(2.4),0.0,0.1);m.put(chatter(1.7),20.9,0.1);m.put(growl(0.6),1.25,0.3);m.put(pop(700),1.3,0.2)
    m.put(whoosh(0.5),2.35,0.45);m.put(squish(0.5),2.7,0.25);m.put(slide(400,900,0.8),2.7,0.15);m.put(bruhnote(),3.5,0.24);m.put(pop(650),2.7,0.22)
    m.put(whoosh(0.5),4.3,0.45);m.put(slide(900,500,0.5),4.45,0.2);m.put(shimmer(0.9),4.95,0.25);m.put(vineboom(),4.95,0.3);m.put(clink(),5.0,0.2)
    m.put(whoosh(0.5),6.0,0.45);m.put(pop(600),6.3,0.22);m.put(slide(800,250,2.6),7.0,0.12);m.put(pop(700),7.3,0.22);m.put(sadtrombone(),9.1,0.24)
    m.put(whoosh(0.5),10.35,0.45);m.put(ding(1318),11.0,0.22);m.put(slide(300,1200,0.9),11.0,0.16);m.put(pop(760),11.4,0.24);m.put(chaching(),12.25,0.24);m.put(pop(800),12.2,0.24)
    m.put(whoosh(0.5),13.92,0.45);m.put(chalk(1.2),14.3,0.15);m.put(pop(650),14.3,0.22);m.put(ding(1046),15.2,0.15);m.put(ooh(),16.0,0.24)
    m.put(whoosh(0.5),17.35,0.45);m.put(munch(),17.9,0.3);m.put(munch(),18.55,0.3);m.put(munch(),19.2,0.3);m.put(munch(),19.85,0.3);m.put(pop(700),18.6,0.22)
    m.put(whoosh(0.5),20.85,0.45)
    m.save('w_dessert/sfx.wav')

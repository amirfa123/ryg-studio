import sys;sys.path.insert(0,'.')
from sfxlib import *
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def crunch():
    out=np.zeros(int(SR*0.45))
    for k in range(7):
        d=0.06;x=tt(d);s=(nz(d)-lp(nz(d),4))*env(d,0.001,60)*(1-k*0.1);i=int(k*0.05*SR)
        out[i:i+len(s)]+=s
    return out*1.4
def snap():x=tt(0.15);return (lp(nz(0.15),3)*0.8+np.sin(2*np.pi*180*x)*0.6)*env(0.15,0.001,35)
def alarm(d):x=tt(d);f=np.where((x*4)%1<0.5,880,660);return np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.15*np.minimum(1,(d-x)/0.05)
def flutter(d):x=tt(d);return lp(nz(d),6)*(0.5+0.5*np.sin(2*np.pi*22*x))*np.sin(np.pi*x/d)*0.9
def heartbeat(d):
    out=np.zeros(int(SR*d))
    for k in range(int(d/0.5)):
        for o,gn in [(0,1),(0.14,0.7)]:
            s=thud()*gn;i=int((k*0.5+o)*SR)
            if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
def steps(d,rate=0.16):
    out=np.zeros(int(SR*d))
    for k in range(int(d/rate)):
        s=lp(nz(0.07),5)*env(0.07,0.001,50);i=int(k*rate*SR)
        if i+len(s)<len(out):out[i:i+len(s)]+=s
    return out
w=sys.argv[1]
if w=='gatorbite':
    m=Mix(18.95,251)
    for k in range(4):m.put(snap(),0.0+1.4*k+0.33,0.32)
    m.put(pop(700),2.4,0.26)
    m.put(whoosh(0.5),5.25,0.45);m.put(slide(300,1300,1.3),5.6,0.16)
    for k in range(10):m.put(tick(),5.6+k*0.13,0.2)
    m.put(vineboom(),7.0,0.34);m.put(airhorn(0.6),7.05,0.18)
    m.put(whoosh(0.5),7.8,0.45);m.put(pop(650),8.05,0.24);m.put(pop(800),8.6,0.26);m.put(ooh(),9.05,0.2)
    m.put(whoosh(0.5),9.85,0.45);m.put(growl(0.8),10.0,0.22);m.put(crunch(),10.62,0.4);m.put(bonk(),10.66,0.24)
    m.put(whoosh(0.5),11.95,0.45);m.put(recordscratch(),12.08,0.28);m.put(pop(700),13.0,0.24);m.put(ding(1318),14.0,0.18);m.put(bruhnote(),13.95,0.18)
    m.put(whoosh(0.5),14.75,0.45);m.put(stretch(0.6),15.0,0.16);m.put(boing(),15.5,0.28);m.put(pop(760),15.1,0.24);m.put(ding(1046),16.1,0.18)
    m.put(whoosh(0.5),17.15,0.45);m.put(snap(),18.6,0.3)
    m.save('w_gatorbite/sfx.wav')
if w=='butterfly':
    m=Mix(17.75,252)
    m.put(heartbeat(3.2),0.0,0.1);m.put(flutter(1.4),1.6,0.18);m.put(pop(700),2.1,0.24)
    m.put(whoosh(0.5),3.2,0.45);m.put(bonk(),4.32,0.26);m.put(alarm(1.1),4.45,0.16);m.put(dundun(),4.6,0.22)
    m.put(bloop(0.7),5.4,0.3);m.put(bloop(1.2),5.8,0.3);m.put(bloop(0.9),6.3,0.3);m.put(vineboom(),6.1,0.3)
    m.put(whoosh(0.5),7.0,0.45);m.put(pop(650),7.25,0.24);m.put(slide(400,1200,1.0),7.4,0.14);m.put(ding(1046),8.6,0.18)
    m.put(whoosh(0.5),9.7,0.45);m.put(steps(1.1),9.8,0.18);m.put(pop(760),9.85,0.24);m.put(airhorn(0.5),10.9,0.2);m.put(whoosh(0.3),11.0,0.35)
    m.put(whoosh(0.5),11.55,0.45);m.put(slidewhistle(False,0.7),12.3,0.2);m.put(squish(0.5),13.15,0.28)
    m.put(whoosh(0.5),13.9,0.45);m.put(flutter(1.8),14.1,0.2);m.put(heartbeat(1.8),14.1,0.1);m.put(ooh(),14.6,0.2);m.put(shimmer(),14.65,0.18)
    m.put(whoosh(0.5),15.9,0.45);m.put(heartbeat(1.6),16.1,0.1)
    m.save('w_butterfly/sfx.wav')
if w=='rings':
    m=Mix(19.45,253)
    m.put(shimmer(1.2),0.3,0.22);m.put(pop(700),2.2,0.24)
    m.put(whoosh(0.5),3.25,0.45);m.put(wind(4.0),3.4,0.15);m.put(ding(1318),6.4,0.2);m.put(recordscratch(),5.0,0.22)
    m.put(whoosh(0.5),7.6,0.45);m.put(slide(300,1100,1.6),8.7,0.16);m.put(vineboom(),10.3,0.32);m.put(ooh(),10.6,0.2)
    m.put(whoosh(0.5),11.9,0.45);m.put(shimmer(1.0),12.8,0.22);m.put(ding(1568),13.1,0.16)
    m.put(whoosh(0.5),14.6,0.45);m.put(wind(2.8),14.8,0.22);m.put(dundun(),15.9,0.22);m.put(bruhnote(),16.7,0.18)
    m.put(whoosh(0.5),17.6,0.45);m.put(shimmer(1.0),18.3,0.18)
    m.save('w_rings/sfx.wav')

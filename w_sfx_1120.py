import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def click():x=tt(0.04);return lp(nz(0.04),3)*env(0.04,0.0005,90)*0.8
def rotor(d):
    x=tt(d);n=lp(nz(d),20);chop=0.5+0.5*np.sign(np.sin(2*np.pi*11*x));return n*chop*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)*1.4
def beep():x=tt(0.15);return np.sign(np.sin(2*np.pi*880*x))*env(0.15,0.002,10)*0.25
def boom(d=1.6):x=tt(d);return (lp(nz(d),3)*1.8+np.sin(2*np.pi*np.cumsum(60*np.exp(-x*2)+25)/SR))*env(d,0.004,2.6)
def hum(d):x=tt(d);return (np.sin(2*np.pi*120*x)+0.5*np.sin(2*np.pi*240*x))*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)*0.25
which=sys.argv[1]
if which=='heli':
    m=Mix(19.7,21)
    m.put(rotor(3.4),0.05,0.25);m.put(dundun(),1.0,0.35)
    m.put(whoosh(0.6),3.4,0.45);m.put(rotor(3.9),3.6,0.3);m.put(whoosh(0.8),4.1,0.4);m.put(airhorn(0.6),6.2,0.25)
    m.put(whoosh(0.5),7.5,0.4);m.put(beep(),8.1,0.4);m.put(beep(),8.5,0.4);m.put(honk(),8.2,0.3);m.put(slide(400,1400,0.5),8.6,0.3)
    m.put(whoosh(0.5),9.3,0.4);m.put(click(),9.6,0.5);m.put(slide(300,900,1.8),9.7,0.2);m.put(tick(),10.5,0.4);m.put(tick(),11.5,0.4);m.put(pop(500),11.9,0.35)
    m.put(whoosh(0.5),12.55,0.4);m.put(hum(2.4),12.8,0.4);m.put(vineboom(),13.6,0.45);m.put(sting(),13.7,0.3)
    m.put(whoosh(0.5),15.1,0.4);m.put(rotor(2.4),15.3,0.15);m.put(boing(),16.2,0.3);m.put(recordscratch(),17.1,0.35);m.put(bruhnote(),17.5,0.3)
    m.put(whoosh(0.6),17.8,0.4);m.put(rotor(1.8),17.9,0.2)
    m.save('w_heli/sfx.wav')
if which=='thumb':
    m=Mix(20.3,22)
    for k in range(10):m.put(click(),0.3+k*0.35,0.4)
    m.put(shimmer(),0.05,0.3);m.put(pop(600),2.2,0.3)
    m.put(whoosh(0.5),3.8,0.45);m.put(pop(700),4.3,0.4);m.put(stretch(1.2),4.9,0.25);m.put(pop(800),5.9,0.4);m.put(ding(1046),6.1,0.3)
    m.put(whoosh(0.5),7.45,0.4)
    for k in range(18):m.put(click(),7.6+k*0.075,0.5)
    m.put(slidewhistle(True,0.8),7.8,0.25);m.put(bonk(),8.6,0.3)
    m.put(whoosh(0.5),8.9,0.4);m.put(squish(0.8),9.5,0.4);m.put(sting(),10.0,0.3);m.put(bonk(),11.3,0.4);m.put(sadtrombone(),11.5,0.25)
    m.put(whoosh(0.5),12.45,0.4);m.put(recordscratch(),12.6,0.35);m.put(vineboom(),13.95,0.45);m.put(pop(900),14.4,0.3)
    m.put(whoosh(0.5),15.2,0.4);m.put(pop(700),16.35,0.4);m.put(ding(1046),16.4,0.3);m.put(pop(800),16.9,0.4);m.put(ding(1175),16.96,0.3);m.put(pop(900),17.9,0.4);m.put(ding(1318),17.96,0.3);m.put(ooh(),18.1,0.25)
    m.put(whoosh(0.6),18.6,0.4)
    for k in range(4):m.put(click(),19.3+k*0.25,0.35)
    m.save('w_thumb/sfx.wav')
if which=='neutron':
    m=Mix(20.35,23)
    m.put(shimmer(),0.05,0.4);m.put(hum(3.4),0.1,0.3);m.put(ooh(),2.1,0.25)
    m.put(whoosh(0.5),3.5,0.45);m.put(thud(),5.1,0.45);m.put(slide(200,1600,2.2),5.4,0.25);m.put(chaching(),7.5,0.25);m.put(vineboom(),7.45,0.35)
    m.put(whoosh(0.5),7.9,0.4);m.put(stretch(1.5),8.9,0.3);m.put(slidewhistle(False,1.2),9.1,0.3);m.put(squish(0.5),10.3,0.45);m.put(pop(1200),10.45,0.4)
    m.put(whoosh(0.5),10.9,0.4);m.put(hum(2.6),11.4,0.35);m.put(dundun(),12.4,0.4);m.put(beep(),13.1,0.35);m.put(beep(),13.45,0.35);m.put(beep(),13.75,0.35)
    m.put(boom(1.9),14.05,0.22);m.put(airhorn(0.6),14.4,0.2)
    m.put(whoosh(0.5),16.2,0.4);m.put(pop(500),16.6,0.35);m.put(slide(300,1800,1.2),17.2,0.3);m.put(recordscratch(),17.6,0.3);m.put(ooh(),18.2,0.25)
    m.put(whoosh(0.6),18.75,0.4);m.put(shimmer(),19.6,0.3)
    m.save('w_neutron/sfx.wav')

import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def flip():return lp(nz(0.08),6)*env(0.08,0.002,40)*0.8
def heartbeat():return thud()*0.8
def snore(d=0.9):x=tt(d);return lp(nz(d),30)*np.sin(np.pi*x/d)**2*(0.5+0.5*np.sin(2*np.pi*28*x))*1.2
def click():x=tt(0.04);return lp(nz(0.04),3)*env(0.04,0.0005,90)*0.8
def splash(d=1.0):x=tt(d);return lp(nz(d),4)*env(d,0.003,4)*1.6+lp(nz(d),60)*env(d,0.002,10)*1.2
def wind2(d):return wind(d)
w=sys.argv[1]
if w=='night':
    m=Mix(21.7,11)
    m.put(shimmer(),0.05,0.4)
    for k in range(10):m.put(click(),0.3+k*0.37,0.5)
    m.put(airhorn(),1.6,0.35);m.put(pop(),1.65,0.4)
    m.put(whoosh(0.6),4.4,0.45);m.put(bloop(),4.55,0.4);m.put(slide(500,200,0.9),5.0,0.45);m.put(stretch(0.9),5.1,0.3)
    for k in range(10):m.put(bloop(0.7+0.05*k),5.5+k*0.27,0.25)
    m.put(ding(1318),7.35,0.4)
    m.put(whoosh(0.6),8.4,0.45);m.put(rewind(1.2) if False else slide(400,1600,1.2),8.6,0.35)
    for k in range(12):m.put(tick(),8.6+k*0.1,0.6)
    m.put(dundun(),9.0,0.4)
    m.put(whoosh(0.6),10.0,0.45);m.put(ding(1568,0.4),10.5,0.4);m.put(bonk(),11.5,0.7);m.put(recordscratch(),11.62,0.5)
    m.put(sadtrombone(),12.4,0.35)
    m.put(whoosh(0.6),13.8,0.45);for_=None
    for k in range(4):m.put(click(),14.0+k*0.25,0.5)
    m.put(slidewhistle(False,0.6),14.85,0.4);m.put(snore(),15.3,0.6);m.put(snore(),16.2,0.6)
    m.put(boing(),17.0,0.5);m.put(pop(900),17.05,0.4)
    m.put(whoosh(0.6),17.6,0.45);m.put(vineboom(),17.75,0.55);m.put(bruhnote(),18.0,0.5);m.put(pop(),18.4,0.4)
    m.put(whoosh(0.6),19.9,0.45);m.put(shimmer(),20.1,0.35)
    m.save('w_allnighter/sfx.wav')
if w=='dive':
    m=Mix(22.4,12)
    m.put(wind(4.5),0.05,0.18);m.put(shimmer(),0.05,0.35);m.put(bruhnote(),2.5,0.45)
    m.put(whoosh(0.6),4.6,0.45);m.put(slide(300,1200,0.8),4.9,0.4);m.put(pop(),5.3,0.4)
    m.put(whoosh(0.8),6.45,0.5);m.put(slidewhistle(False,1.2),6.6,0.4);m.put(wind(3.9),6.55,0.3)
    for k in range(9):m.put(tick(),6.8+k*0.38,0.5)
    m.put(dundun(),8.0,0.35)
    m.put(whoosh(0.6),10.4,0.45);m.put(bloop(),11.0,0.4);m.put(thud(),11.9,0.5);m.put(bonk(),11.92,0.5);m.put(recordscratch(),12.3,0.45)
    m.put(whoosh(0.8),13.7,0.5);m.put(slidewhistle(False,0.8),13.9,0.4);m.put(splash(1.2),14.75,0.45);m.put(thud(),14.75,0.5);m.put(vineboom(),14.8,0.35)
    m.put(thud(),15.0,0.35)
    m.put(whoosh(0.6),15.95,0.45);m.put(wind(2.8),16.0,0.15);m.put(ooh(),16.6,0.6);m.put(pop(),17.0,0.4)
    m.put(whoosh(0.6),18.85,0.45);m.put(slide(200,900,0.6),19.0,0.4);m.put(bonk(),19.6,0.4);m.put(ding(1318),20.0,0.45);m.put(chaching(),20.05,0.0)
    m.put(whoosh(0.6),20.75,0.45);m.put(wind(1.6),20.8,0.15)
    m.save('w_tower_dive/sfx.wav')
if w=='elon':
    m=Mix(22.35,13)
    m.put(shimmer(),0.05,0.4);m.put(pop(),1.1,0.3)
    m.put(whoosh(0.6),3.3,0.45);m.put(slide(300,1500,2.0),3.9,0.35)
    for k in range(14):m.put(tick(),3.9+k*0.15,0.45)
    m.put(chaching(),6.0,0.55);m.put(vineboom(),6.05,0.45)
    m.put(whoosh(0.6),6.7,0.45)
    for k in range(18):m.put(click(),6.9+k*0.11+0.02*np.sin(k),0.4)
    m.put(pop(800),6.95,0.4);m.put(whoosh(0.5),8.75,0.4)
    for k in range(10):m.put(flip(),9.0+k*0.25,0.7)
    m.put(dundun(),10.6,0.35)
    m.put(whoosh(0.6),11.45,0.45)
    for k in range(9):m.put(chaching(),11.65+k*0.25,0.25)
    m.put(recordscratch(),14.05,0.5);m.put(sadtrombone(),14.4,0.35)
    m.put(whoosh(0.6),16.05,0.45);m.put(slidewhistle(True,2.8),16.4,0.3);m.put(ding(1318),18.6,0.4);m.put(airhorn(),19.4,0.3);m.put(pop(),19.45,0.4)
    m.put(whoosh(0.6),20.65,0.45);m.put(shimmer(),20.8,0.35)
    m.save('w_elon_money/sfx.wav')

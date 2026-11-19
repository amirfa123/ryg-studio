import sys;sys.path.insert(0,'.')
from sfxlib import *
def splash(d=1.0):x=tt(d);return lp(nz(d),4)*env(d,0.003,4)*1.6+lp(nz(d),60)*env(d,0.002,10)*1.2
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def snip():x=tt(0.12);return lp(nz(0.12),2)*env(0.12,0.0005,60)*0.9+np.sin(2*np.pi*3200*x)*env(0.12,0.0005,80)*0.3
def heartbeat():x=tt(0.5);return np.sin(2*np.pi*55*x)*env(0.5,0.003,18)*1.0
which=sys.argv[1]
if which=='fingers':  # CU c1 4.4 c2 6.08 c3 11.88 tire 15.44 c4 16.68 c5 19.32 TT 21.0
    m=Mix(21.0,21)
    m.put(splash(0.8),0.05,0.3);m.put(pop(600),0.3,0.3);m.put(boing(),1.7,0.3)
    m.put(recordscratch(),2.9,0.35);m.put(pop(500),3.05,0.35);m.put(bonk(),3.4,0.3)
    m.put(whoosh(0.5),4.3,0.4)
    for k in range(5):m.put(tick(),4.6+k*0.28,0.5)
    m.put(ding(1046),5.5,0.3)
    m.put(whoosh(0.5),5.98,0.4)
    for k in range(4):m.put(pop(900+120*k),6.5+k*0.45,0.25)
    m.put(slide(900,300,0.8),8.3,0.3);m.put(squish(0.6),9.7,0.35);m.put(vineboom(),10.4,0.45)
    m.put(whoosh(0.5),11.78,0.4);m.put(splash(0.5),12.6,0.25);m.put(bloop(1.2),13.1,0.3);m.put(bloop(0.9),13.6,0.3);m.put(ding(1318),14.4,0.3)
    m.put(whoosh(0.5),15.35,0.4);m.put(pop(700),15.5,0.4);m.put(ooh(),15.9,0.25)
    m.put(whoosh(0.5),16.58,0.4);m.put(snip(),17.2,0.5);m.put(snip(),17.45,0.4);m.put(sadtrombone(),18.4,0.22)
    m.put(whoosh(0.6),19.25,0.4);m.put(splash(0.6),20.4,0.2)
    m.save('w_fingers/sfx.wav')
if which=='sun':  # c1 3.2 c2 9.76 cE 11.28 c3 13.68 c4 17.36 c5 20.16 TT 21.8
    m=Mix(21.8,22)
    m.put(wind(1.5),0.0,0.15);m.put(shimmer(),0.1,0.35);m.put(pop(600),0.35,0.3);m.put(ooh(),1.0,0.2)
    m.put(poof(),2.4,0.4);m.put(whoosh(0.6),3.1,0.4)
    for k in range(8):m.put(tick(),3.6+k*0.7,0.5)
    m.put(dundun(),5.4,0.35);m.put(whoosh(0.6),7.2,0.35);m.put(ding(880),8.7,0.3)
    m.put(recordscratch(),9.6,0.35);m.put(whoosh(0.5),9.7,0.4);m.put(vineboom(),10.3,0.45)
    m.put(whoosh(0.8),11.2,0.45);m.put(slidewhistle(False,0.9),12.0,0.3);m.put(boing(),12.9,0.25)
    m.put(whoosh(0.5),13.6,0.4);m.put(wind(3.0),13.7,0.25);m.put(teeth(1.4),14.4,0.3);m.put(slide(1200,300,1.6),14.2,0.25);m.put(bruhnote(),16.4,0.3)
    m.put(whoosh(0.5),17.3,0.4);m.put(bloop(1.0),17.9,0.3);m.put(bloop(0.8),18.4,0.3);m.put(ding(1318),18.6,0.3);m.put(airhorn(0.6),19.0,0.22)
    m.put(whoosh(0.6),20.1,0.4);m.put(shimmer(),21.0,0.25)
    m.save('w_sun/sfx.wav')
if which=='hunger':  # c1 3.6 c2 6.48 cH 8.4 c3 11.68 cF 13.76 c4 15.92 cW 19.44 c5 22.0 TT 23.6
    m=Mix(23.6,23)
    m.put(dundun(),0.1,0.35);m.put(pop(600),0.35,0.3);m.put(ooh(),2.6,0.2)
    m.put(whoosh(0.5),3.5,0.4);m.put(pop(700),4.0,0.35);m.put(pop(800),4.4,0.35);m.put(pop(900),4.8,0.35);m.put(ding(1046),5.4,0.3)
    m.put(whoosh(0.5),6.4,0.4);m.put(pop(700),6.6,0.4);m.put(heartbeat(),7.0,0.4);m.put(heartbeat(),7.6,0.4)
    m.put(whoosh(0.5),8.3,0.4);m.put(pop(800),8.5,0.4);m.put(wind(2.8),8.5,0.25);m.put(teeth(1.5),9.4,0.3)
    m.put(whoosh(0.5),11.6,0.4);m.put(pop(900),11.8,0.4);m.put(splash(0.8),12.2,0.35);m.put(bloop(1.1),12.9,0.3)
    m.put(whoosh(0.5),13.7,0.4);m.put(pop(1000),13.9,0.4);m.put(munch(),14.6,0.4);m.put(chaching(),15.1,0.2)
    m.put(whoosh(0.5),15.85,0.4)
    for k in range(4):m.put(slide(300,700+150*k,0.4),16.1+k*0.2,0.2)
    m.put(recordscratch(),17.3,0.35);m.put(vineboom(),17.55,0.45)
    m.put(ding(1318),19.5,0.35);m.put(airhorn(0.7),19.8,0.22);m.put(ooh(),20.6,0.2)
    m.put(whoosh(0.6),21.9,0.4);m.put(pop(600),23.0,0.25)
    m.save('w_hunger/sfx.wav')

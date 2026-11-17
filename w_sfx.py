import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def flip():return lp(nz(0.08),6)*env(0.08,0.002,40)*0.8
def rumble(d):x=tt(d);return lp(nz(d),220)*6*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)
def engine(d):x=tt(d);f=70+50*np.minimum(1,x/1.2);ph=2*np.pi*np.cumsum(f)/SR;return (np.sign(np.sin(ph))*0.3+np.sin(ph*2)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.3)
def buzz(d):x=tt(d);return np.sin(2*np.pi*(220+30*np.sin(2*np.pi*7*x))*x)*0.15*(0.6+0.4*np.sin(2*np.pi*1.3*x))
def siren(d):x=tt(d);f=700+300*np.sign(np.sin(2*np.pi*2*x));return np.sin(2*np.pi*np.cumsum(f)/SR)*0.35*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.1)
def heartbeat():return thud()*0.8
def snore(d=0.9):x=tt(d);return lp(nz(d),30)*np.sin(np.pi*x/d)**2*(0.5+0.5*np.sin(2*np.pi*28*x))*1.2
def roar(d=1.1):return growl(d)*1.3
def steam(d=1.2):x=tt(d);return lp(nz(d),2)*np.sin(np.pi*x/d)*0.5
which=sys.argv[1]
if which=='gta':
    m=Mix(21.92,7)
    m.put(shimmer(),0.05,0.4);m.put(bloop(0.8),2.9,0.6)
    m.put(whoosh(0.6),4.0,0.5);m.put(pop(),4.15,0.5);m.put(whoosh(0.6),5.0,0.45);m.put(thud(),5.6,1.0);m.put(rumble(0.5),5.6,0.3);m.put(pop(800),5.65,0.5);m.put(bloop(),5.7,0.5)
    m.put(whoosh(0.6),6.72,0.5);m.put(engine(2.8),6.85,0.45);m.put(slide(300,1300,2.2),7.1,0.5);m.put(ding(1318),8.4,0.45)
    m.put(whoosh(0.6),9.6,0.5);m.put(pop(),9.75,0.5)
    for k in range(8):m.put(tick(),10.0+k*0.3,0.7)
    m.put(flip(),11.4,0.9);m.put(pop(700),11.6,0.5);m.put(sting(),13.1,0.6);m.put(thud(),13.15,0.6)
    m.put(whoosh(0.6),14.12,0.5);m.put(pop(),14.25,0.5);m.put(snore(),14.6,0.5);m.put(snore(),15.8,0.5)
    for k in range(10):m.put(tick(),15.0+k*0.16,0.6)
    m.put(pop(900),15.9,0.5);m.put(whoosh(0.6),17.07,0.5);m.put(buzz(2.6),17.7,0.6);m.put(squish(0.5),18.05,0.7);m.put(thud(),18.5,0.7)
    m.put(whoosh(0.6),20.02,0.5);m.put(sting(),20.15,0.6);m.put(bloop(0.7),21.1,0.4)
    m.save('w_gta_download/sfx.wav')
if which=='mad':
    m=Mix(20.4,8)
    m.put(shimmer(),0.05,0.4);m.put(sting(),1.9,0.4);m.put(pop(),2.2,0.4)
    m.put(whoosh(0.6),3.15,0.5);m.put(siren(1.6),3.5,0.5);m.put(slide(200,900,0.6),4.3,0.5);m.put(bloop(),5.2,0.5)
    for k in range(10):m.put(bloop(0.6+0.1*(k%3)),5.3+k*0.17,0.3)
    m.put(whoosh(0.6),7.07,0.5)
    for k in range(6):m.put(heartbeat(),7.3+k*0.455,0.8)
    m.put(stretch(0.6),8.3,0.5);m.put(pop(),8.4,0.4)
    m.put(whoosh(0.6),9.92,0.5);m.put(steam(1.3),10.9,0.6);m.put(ding(1568,0.6),10.6,0.3)
    m.put(whoosh(0.6),12.02,0.5);m.put(squish(0.6),12.4,0.5);m.put(pop(400),12.6,0.6);m.put(thud(),13.0,0.4)
    m.put(whoosh(0.6),14.02,0.5);m.put(roar(1.2),15.0,0.9);m.put(rumble(1.0),15.0,0.3)
    m.put(whoosh(0.5),16.77,0.4);m.put(sting(),16.95,0.5);m.put(pop(800),17.6,0.5)
    m.put(whoosh(0.6),18.55,0.5);m.put(bloop(0.7),18.7,0.4)
    m.save('w_so_mad/sfx.wav')
if which=='jup':
    m=Mix(20.4,9)
    m.put(shimmer(),0.05,0.4);m.put(sting(),2.0,0.5);m.put(pop(500),2.05,0.5);m.put(pop(),3.15,0.4)
    m.put(slide(500,200,0.5),3.75,0.5);m.put(whoosh(0.6),4.25,0.5);m.put(wind(1.8),4.3,0.25)
    m.put(whoosh(0.6),5.95,0.5);m.put(bloop(),6.2,0.5);m.put(thud(),7.6,1.0);m.put(stretch(0.7),7.65,0.5);m.put(pop(400),7.75,0.5)
    m.put(whoosh(0.6),9.55,0.5);m.put(rumble(2.4),9.6,0.25)
    k=0;tt0=9.8
    while tt0<11.9:m.put(tick(),tt0,0.6);k+=1;tt0=9.8+2.1*(1-np.exp(-k*0.12))/(1-np.exp(-0.12*20))*1.0
    m.put(whoosh(0.6),11.95,0.5);m.put(pop(),12.1,0.4);m.put(teeth(0.35,30),13.0,0.8);m.put(thud(),13.05,0.7);m.put(pop(900),13.1,0.4)
    m.put(whoosh(0.6),14.9,0.5);m.put(shimmer(1.0),15.0,0.5);m.put(ding(1318),16.3,0.45);m.put(shimmer(),16.35,0.5);m.put(bloop(1.2),17.0,0.4)
    m.put(whoosh(0.6),18.65,0.5);m.put(slide(200,900,0.5),18.75,0.5);m.put(bloop(0.7),19.4,0.6)
    m.save('w_jupiter/sfx.wav')

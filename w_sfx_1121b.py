import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def click():x=tt(0.08);return (lp(nz(0.08),3)*0.7+np.sin(2*np.pi*1400*x)*0.5)*env(0.08,0.0005,70)
def snore(d=1.4):x=tt(d);a=np.sin(np.pi*x/d)**2;return (lp(nz(d),30)*0.8+0.3*np.sign(np.sin(2*np.pi*np.cumsum(70+20*x/d)/SR))*0.25)*a
def yawn(d=0.9):x=tt(d);f=420-200*x/d;return np.sin(2*np.pi*np.cumsum(f)/SR)*np.sin(np.pi*x/d)**1.5*0.35+lp(nz(d),20)*np.sin(np.pi*x/d)*0.2
def bubbles(d=1.0,n=8,seed=3):
    o=np.zeros(int(d*SR));rg=np.random.default_rng(seed)
    for k in range(n):
        b=bloop(0.8+rg.random()*1.2)*0.5;i=int(rg.random()*(len(o)-len(b)));o[i:i+len(b)]+=b
    return o
def rumble(d):x=tt(d);return lp(nz(d),80)*1.8*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.4)
def creakm(d=0.8):x=tt(d);f=140+40*np.sin(2*np.pi*2*x);return np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.12*np.sin(np.pi*x/d)
def crunch():return lp(nz(0.18),2)*env(0.18,0.002,18)*0.8
def splash():d=0.5;return lp(nz(d),2)*env(d,0.003,7)*0.9
which=sys.argv[1]
if which=='sleepy':
    m=Mix(19.7,51)
    m.put(shimmer(),0.05,0.2);m.put(yawn(1.0),1.2,0.35)
    m.put(whoosh(0.5),2.95,0.45);m.put(pop(650),3.3,0.35);m.put(dundun(),3.8,0.3)
    m.put(whoosh(0.5),4.85,0.4);m.put(recordscratch(),4.95,0.3);m.put(pop(600),5.15,0.35);m.put(slide(300,900,0.9),6.2,0.18);m.put(pop(750),6.95,0.35);m.put(slide(300,900,0.8),7.0,0.15);m.put(ding(1318),7.5,0.3)
    m.put(whoosh(0.5),7.85,0.4);m.put(vineboom(),8.35,0.42)
    for k in range(7):m.put(pop(500+k*90),8.5+k*0.44,0.3)
    for k in range(8):m.put(munch(),9.0+k*0.45,0.3)
    for k in range(20):m.put(tick(),9.4+k*0.1,0.25)
    m.put(ding(1568),11.4,0.3);m.put(ooh(),11.45,0.28)
    m.put(whoosh(0.5),12.35,0.4);m.put(click(),13.4,0.45);m.put(bloop(0.7),13.55,0.3);m.put(pop(700),14.1,0.3)
    m.put(whoosh(0.6),14.98,0.4);m.put(slidewhistle(False,0.9),15.35,0.25);m.put(pop(650),16.3,0.3);m.put(snore(1.3),16.0,0.35);m.put(snore(1.3),17.4,0.3)
    m.put(whoosh(0.6),17.85,0.4);m.put(shimmer(),18.3,0.15)
    m.save('w_sleepy/sfx.wav')
if which=='bear':
    m=Mix(20.5,52)
    m.put(shimmer(),0.05,0.2);m.put(growl(0.7),0.9,0.2);m.put(ooh(),1.45,0.22)
    m.put(whoosh(0.5),2.76,0.45);m.put(squish(0.5),3.3,0.35);m.put(slide(400,700,0.8),3.6,0.15);m.put(pop(650),4.3,0.35);m.put(bonk(),4.55,0.3)
    m.put(whoosh(0.5),5.0,0.4);m.put(slide(1400,300,0.4),5.2,0.25);m.put(thud(),5.6,0.45);m.put(creakm(0.8),5.6,0.3)
    for k in range(14):m.put(tick(),6.4+k*0.07,0.25)
    m.put(boing(),6.55,0.35);m.put(airhorn(0.6),7.4,0.2);m.put(pop(800),7.45,0.3)
    m.put(whoosh(0.5),8.18,0.4);m.put(squish(0.6),9.0,0.3);m.put(pop(700),9.2,0.25);m.put(recordscratch(),10.5,0.3);m.put(pop(650),10.6,0.35)
    m.put(whoosh(0.5),11.24,0.4);m.put(shimmer(1.0),11.5,0.25);m.put(pop(700),12.3,0.35);m.put(pop(800),12.9,0.35);m.put(vineboom(),13.7,0.42)
    m.put(whoosh(0.5),14.66,0.4);m.put(click(),14.8,0.4)
    for k in range(5):m.put(tick(),15.0+k*0.5,0.12)
    m.put(pop(700),16.5,0.35);m.put(ding(1318),16.55,0.25);m.put(pop(600),17.5,0.35);m.put(bruhnote(),17.6,0.3)
    m.put(whoosh(0.6),18.66,0.4);m.put(growl(0.7),19.3,0.18)
    m.save('w_bear/sfx.wav')
if which=='trench':
    m=Mix(19.9,53)
    m.put(shimmer(),0.05,0.2);m.put(splash(),1.6,0.35);m.put(bubbles(1.2,10),1.7,0.3)
    m.put(whoosh(0.5),2.95,0.45);m.put(pop(650),3.6,0.3);m.put(slide(900,250,1.6),3.3,0.2)
    for k in range(15):m.put(tick(),3.2+k*0.1,0.2)
    m.put(rumble(1.2),5.6,0.3);m.put(vineboom(),6.5,0.42);m.put(pop(800),7.6,0.3);m.put(ding(1318),8.3,0.25)
    m.put(whoosh(0.5),9.1,0.4);m.put(bubbles(1.5,12,5),9.3,0.3);m.put(pop(700),10.6,0.35);m.put(recordscratch(),11.0,0.3);m.put(sadtrombone(),12.9,0.3)
    m.put(whoosh(0.6),13.75,0.4);m.put(rumble(1.5),13.9,0.35);m.put(dundun(),15.8,0.3)
    for k in range(4):m.put(thud(),15.9+k*0.32,0.3)
    m.put(crunch(),17.2,0.4);m.put(bonk(),17.35,0.3)
    m.put(whoosh(0.6),18.2,0.4);m.put(bubbles(1.2,8,7),18.5,0.25)
    m.save('w_trench/sfx.wav')
import subprocess,os
f=f'w_{which}/sfx.wav';subprocess.run(['ffmpeg','-y','-loglevel','error','-i',f,'-af','volume=0.85',f+'.tmp.wav']);os.replace(f+'.tmp.wav',f)

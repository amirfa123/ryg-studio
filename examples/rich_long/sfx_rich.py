import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def engine(d):x=tt(d);f=70+50*np.minimum(1,x/1.2);ph=2*np.pi*np.cumsum(f)/SR;return (np.sign(np.sin(ph))*0.3+np.sin(ph*2)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.3)
def prop(d):x=tt(d);ph=2*np.pi*np.cumsum(55+5*np.sin(2*np.pi*0.5*x))/SR;return lp(np.sign(np.sin(ph))*0.4,6)*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)
def crunch():return thud()*0.8+(lp(nz(0.4),3)*env(0.4,0.001,10)*0.8)
def step():x=tt(0.08);return lp(nz(0.08),12)*env(0.08,0.001,50)*0.9
def siren(d):x=tt(d);f=700+250*np.sin(2*np.pi*1.6*x);return np.sin(2*np.pi*np.cumsum(f)/SR)*0.25*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.3)
def bubble():return bloop(1.6)*0.6
S=[0,30.48,57.24,89.4,115,141.68,160.88,193,211.8,234.12]
m=Mix(260.7,11)
def P(c,t,snd,gn):m.put(snd,S[c]+t,gn)
def Wh(c,t,gn=0.4):P(c,t,whoosh(0.5),gn)
def card(c):Wh(c,0.0,0.45);P(c,0.1,sting(),0.35)
# C0 intro
P(0,0.05,shimmer(),0.4);P(0,2.1,chaching(),0.4)
Wh(0,3.7);P(0,3.9,pop(),0.4);P(0,7.7,pop(800),0.45);P(0,8.0,recordscratch(),0.0)
Wh(0,10.3);[P(0,10.4+i*0.25,pop(500+i*80),0.35) for i in range(5)];P(0,12.6,pop(900),0.4);[P(0,12.8+i*0.1,tick(),0.4) for i in range(6)];P(0,14.2,slide(300,1100,1.6),0.3)
Wh(0,17.1);[P(0,17.4+i*0.22,pop(500+i*70),0.35) for i in range(7)];P(0,19.9,vineboom(),0.45);P(0,21.7,boing(),0.35)
Wh(0,23.6);[P(0,23.7+i*0.5,tick(),0.5) for i in range(3)];P(0,25.0,slide(400,1600,2.2),0.25);P(0,27.2,chaching(),0.4)
Wh(0,28.1);P(0,28.2,airhorn(),0.35);[P(0,28.3+i*0.35,step(),0.4) for i in range(6)]
# C1 cash
card(1);Wh(1,3.2);P(1,3.4,pop(),0.4);P(1,5.4,slide(300,1200,2.6),0.25);P(1,8.0,ding(1568),0.35)
Wh(1,9.2);P(1,9.3,siren(3.6),0.3);P(1,9.4,dundun(),0.35);P(1,10.4,bonk(),0.35)
Wh(1,12.9);[P(1,13.3+i*0.3,pop(500+i*120),0.35) for i in range(3)];[P(1,13.6+i*0.5,tick(),0.5) for i in range(3)]
P(1,15.2,vineboom(),0.5);P(1,15.3,slidewhistle(False,0.9),0.3);P(1,16.9,sadtrombone(),0.35)
Wh(1,17.7);P(1,17.9,pop(),0.4);P(1,18.9,bruhnote(),0.3);P(1,20.1,ding(1318),0.35)
Wh(1,21.2);[P(1,22.0+i*0.25,step(),0.3) for i in range(4)];P(1,24.3,chaching(),0.45);P(1,24.5,ding(1568),0.3)
# C2 cars
card(2);P(2,0.1,engine(7.2),0.3);P(2,2.1,pop(),0.35);P(2,5.6,honk(),0.35)
Wh(2,7.4);P(2,7.6,pop(),0.4);P(2,9.7,chaching(),0.45);[P(2,11.3+i*0.5,tick(),0.5) for i in range(5)]
Wh(2,14.0);P(2,14.1,boing(),0.35);P(2,15.15,recordscratch(),0.45)
Wh(2,16.6);[P(2,16.8+i*0.12,tick(),0.35) for i in range(8)];P(2,19.8,pop(),0.35);P(2,21.8,vineboom(),0.5);[P(2,22.0+i*0.08,pop(400+i*30),0.2) for i in range(16)]
Wh(2,23.7);P(2,23.7,engine(1.7),0.3);P(2,23.9,bruhnote(),0.35)
Wh(2,25.4);P(2,25.5,pop(),0.4);P(2,27.0,bonk(),0.35);P(2,29.9,shimmer(),0.4);P(2,30.0,ding(1568),0.3)
# C3 racing
card(3);P(3,0.1,engine(4.5),0.35);P(3,2.2,ding(1318),0.3)
Wh(3,4.6);P(3,4.7,engine(5.8),0.2);P(3,7.5,chaching(),0.45)
Wh(3,10.6);P(3,10.65,thud(),0.35);P(3,11.4,crunch(),0.5);P(3,11.45,bonk(),0.35);P(3,11.9,chaching(),0.4)
Wh(3,13.0);P(3,13.4,pop(400),0.4);P(3,15.6,pop(900),0.4);P(3,16.8,airhorn(),0.35)
Wh(3,18.4);[P(3,19.0+i*0.7,ding(1046+i*262),0.3) for i in range(3)]
Wh(3,22.0);P(3,22.0,engine(3.6),0.25);P(3,22.6,slide(400,1400,2.4),0.2);P(3,23.6,ooh(),0.3)
# C4 upgrade
card(4);[P(4,0.3+i*0.4,step(),0.3) for i in range(10)];P(4,2.6,dundun(),0.35)
Wh(4,4.6);P(4,4.7,shimmer(),0.45);P(4,5.6,chaching(),0.4)
Wh(4,8.7);P(4,9.6,pop(),0.4);[P(4,10.9+i*0.22,tick(),0.4) for i in range(18)];P(4,13.4,ding(1568),0.35)
Wh(4,16.2);P(4,16.3,recordscratch(),0.0);[P(4,16.8+i*0.5,tick(),0.5) for i in range(5)];P(4,17.0,boing(),0.3)
P(4,19.7,vineboom(),0.5);P(4,19.8,chaching(),0.4);P(4,20.6,ooh(),0.35)
Wh(4,22.1);P(4,22.2,shimmer(),0.45);P(4,23.9,ding(1760),0.3)
# C5 pilot
card(5);P(5,0.1,prop(8.6),0.35);P(5,3.0,pop(),0.35)
Wh(5,8.7);P(5,8.7,prop(3.0),0.15);[P(5,9.1+i*0.6,slidewhistle(False,0.5),0.3) for i in range(3)];[P(5,10.5+i*0.6,thud(),0.3) for i in range(3)];[P(5,10.6+i*0.6,ding(1318),0.25) for i in range(3)]
Wh(5,11.8);P(5,11.8,prop(3.0),0.35);P(5,11.9,whoosh(1.0),0.4);P(5,11.9,pop(700),0.35);P(5,12.7,pop(900),0.35);P(5,13.6,boing(),0.35)
Wh(5,14.8);P(5,14.9,pop(),0.4);P(5,15.5,ding(1046),0.3);[P(5,15.9+i*0.12,pop(500+i*40),0.25) for i in range(12)];P(5,17.4,chaching(),0.4)
# C6 vaults
card(6);P(6,2.3,dundun(),0.35);P(6,3.9,pop(),0.35)
Wh(6,5.9);P(6,6.2,slide(150,90,1.4),0.4);P(6,7.6,thud(),0.4);P(6,7.7,shimmer(),0.45);P(6,8.0,airhorn(),0.3);P(6,9.6,slide(300,1300,2.6),0.25);P(6,12.2,chaching(),0.45)
Wh(6,13.0);[P(6,13.2+i*0.25,tick(),0.45) for i in range(16)];P(6,15.4,ding(1568),0.35)
Wh(6,17.3);[P(6,17.4+i*0.3,pop(600+i*100),0.35) for i in range(5)];P(6,19.3,airhorn(),0.4);P(6,19.4,chaching(),0.4)
Wh(6,20.6);[P(6,20.7+i*0.22,step(),0.35) for i in range(8)];P(6,21.0,engine(1.4),0.2);P(6,22.4,recordscratch(),0.45);P(6,22.5,siren(4.4),0.3);[P(6,24.0+i*0.25,pop(500+i*150),0.35) for i in range(4)];P(6,25.8,vineboom(),0.45)
Wh(6,26.9);P(6,27.0,pop(),0.4);P(6,28.0,bonk(),0.35);P(6,29.9,slidewhistle(False,0.9),0.35);P(6,30.1,sadtrombone(),0.35)
# C7 bonus
card(7);P(7,3.1,pop(),0.4);P(7,5.3,bonk(),0.4);P(7,5.4,bruhnote(),0.3)
P(7,6.4,pop(800),0.4);P(7,8.4,siren(2.4),0.2);P(7,9.2,bonk(),0.4)
P(7,11.0,pop(600),0.4);[P(7,11.3+i*0.5,bubble(),0.3) for i in range(6)];P(7,14.6,bonk(),0.4);P(7,14.7,sadtrombone(),0.3)
P(7,15.7,dundun(),0.35)
# C8 savings
card(8);[P(8,2.6+i*0.5,ding(1568+i*100,0.4),0.3) for i in range(4)];P(8,2.45,pop(),0.35)
Wh(8,4.7);P(8,4.8,pop(500),0.4);P(8,7.9,pop(700),0.4);P(8,9.6,pop(900),0.4);P(8,10.0,chaching(),0.35)
Wh(8,11.2);P(8,12.4,thud(),0.4);P(8,13.2,bonk(),0.4);P(8,15.0,dundun(),0.35)
Wh(8,16.6);[P(8,17.2+i*0.5,tick(),0.45) for i in range(5)];P(8,19.6,vineboom(),0.5);P(8,19.7,chaching(),0.4);P(8,20.4,ooh(),0.35)
# C9 outro
P(9,0.05,shimmer(),0.4);Wh(9,3.9);[P(9,t,pop(500+i*150),0.4) for i,t in enumerate([3.9,5.9,7.4,11.1])];P(9,11.2,ding(1568),0.35)
Wh(9,12.8);P(9,12.9,slide(300,1500,2.7),0.25);[P(9,13.0+i*0.5,pop(700+i*80),0.3) for i in range(5)];P(9,15.6,airhorn(),0.4);P(9,15.7,chaching(),0.4)
Wh(9,16.5);P(9,16.6,pop(),0.35);Wh(9,19.2);P(9,19.3,dundun(),0.3);P(9,23.1,sadtrombone(),0.35)
Wh(9,24.2);P(9,24.3,ding(1318),0.35);P(9,24.5,boing(),0.3)
m.save('w_rich/sfx.wav')

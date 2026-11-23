import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def step():return lp(nz(0.08),12)*env(0.08,0.001,50)*0.9
def chomp():a=thud()*0.6;b=lp(nz(0.15),4)*env(0.15,0.001,30)*0.9;a[:len(b)]+=b;return a
def hiss(d=1.2):x=tt(d);return nz(d)*0.25*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.3)
def buzz(d=1.5):x=tt(d);f=230+25*np.sin(2*np.pi*3*x);ph=2*np.pi*np.cumsum(f)/SR;return ((ph/np.pi)%2-1)*0.18*(0.7+0.3*np.sin(2*np.pi*11*x))*np.minimum(1,x/0.1)*np.minimum(1,(d-x)/0.2)
def heartbeat():return thud()*0.7
def splash():return lp(nz(0.6),6)*env(0.6,0.01,5)*1.0
def slither(d):x=tt(d);return lp(nz(d),20)*0.5*(0.6+0.4*np.sin(2*np.pi*4*x))*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)
def crickets(d):x=tt(d);return np.sin(2*np.pi*4200*x)*(np.sin(2*np.pi*18*x)>0.3)*(np.sin(2*np.pi*0.9*x)>0)*0.08
S=[0,32.1,69.26,101.02,144.22,174.5,206.1,232.18,255.94]
m=Mix(281.2,7)
def P(c,t,snd,gn):m.put(snd,S[c]+t,gn)
def Wh(c,t,gn=0.4):P(c,t,whoosh(0.5),gn)
def card(c):Wh(c,0.0,0.45);P(c,0.1,sting(),0.35)
# C0 intro
P(0,0.1,dundun(),0.35);[P(0,0.3+i*0.33,step(),0.3) for i in range(12)]
Wh(0,4.5);P(0,6.0,chomp(),0.5);P(0,6.05,vineboom(),0.4);P(0,6.2,splash(),0.3)
Wh(0,7.9);P(0,8.6,munch(),0.5);P(0,8.9,bloop(0.7),0.35)
Wh(0,10.5);P(0,10.7,dundun(),0.3)
Wh(0,12.4);P(0,13.2,hiss(1.3),0.45);P(0,13.3,recordscratch(),0.35)
Wh(0,16.3);[P(0,19.7+i*0.5,pop(500+i*120),0.4) for i in range(4)];P(0,20.0,ding(1318),0.3)
Wh(0,22.3);[P(0,25.0+i*0.3,pop(600+i*80),0.35) for i in range(6)];P(0,28.0,ooh(),0.3);P(0,30.3,airhorn(),0.35)
# C1 gator bite
card(1);P(1,2.6,chomp(),0.35);P(1,4.6,ooh(),0.0);[P(1,4.6+i*0.2,pop(700+i*100),0.3) for i in range(3)]
Wh(1,7.1);P(1,8.75,chomp(),0.5);P(1,8.8,vineboom(),0.4);P(1,9.0,slide(300,1200,2.0),0.2)
Wh(1,11.3);P(1,11.6,slide(200,900,1.2),0.25);P(1,12.9,ding(1568),0.3);P(1,14.2,slide(200,700,0.8),0.25);P(1,17.0,slide(200,350,0.5),0.25);P(1,17.7,sadtrombone(),0.35)
Wh(1,19.3);P(1,20.9,thud(),0.35);P(1,22.1,boing(),0.3)
Wh(1,23.6);P(1,24.7,thud(),0.4);P(1,25.0,ding(1318),0.3)
Wh(1,27.8);P(1,28.8,dundun(),0.3);P(1,30.0,boing(),0.35);P(1,30.7,bruhnote(),0.3)
Wh(1,31.5);[P(1,31.7+i*0.18,step(),0.3) for i in range(22)];P(1,35.4,slidewhistle(False,0.8),0.3)
# C2 gator odds
Wh(2,0.0,0.3);[P(2,0.3+i*0.4,step(),0.3) for i in range(7)]
Wh(2,3.5);[P(2,4.0+i*0.1,tick(),0.3) for i in range(26)];P(2,6.6,ding(1318),0.3)
Wh(2,7.1);[P(2,7.3+i*0.1,pop(500+(i%5)*60),0.18) for i in range(40)];P(2,10.6,pop(),0.4);P(2,12.3,dundun(),0.35);P(2,14.4,vineboom(),0.4)
Wh(2,17.7);P(2,17.9,thud(),0.45);P(2,18.0,ding(1046),0.3)
Wh(2,19.3);P(2,19.7,bonk(),0.3);P(2,22.0,splash(),0.3);P(2,22.1,pop(),0.35);P(2,25.2,munch(),0.4);P(2,25.3,pop(),0.35)
Wh(2,26.4);[P(2,27.0+i*0.33,step(),0.3) for i in range(7)];P(2,29.5,ding(1568),0.3)
# C3 python
card(3);P(3,0.2,slither(5.0),0.3);P(3,4.1,thud(),0.4);P(3,4.15,recordscratch(),0.3)
Wh(3,5.4);[P(3,6.0+i*0.05,pop(400+(i%7)*50),0.12) for i in range(60)];P(3,8.1,vineboom(),0.4)
Wh(3,9.9);P(3,10.1,slither(3.0),0.25);P(3,11.6,ooh(),0.35)
Wh(3,13.2);P(3,14.6,pop(),0.35);P(3,15.6,ding(1046),0.25)
Wh(3,18.1);P(3,18.4,bonk(),0.3);[P(3,19.0+i*0.62,heartbeat(),0.4) for i in range(4)];[P(3,21.6+i*1.4,heartbeat(),0.4) for i in range(3)];P(3,23.8,dundun(),0.35)
Wh(3,25.3);P(3,25.5,hiss(1.4),0.3);P(3,26.5,crickets(2.5),0.4)
Wh(3,29.0);P(3,30.3,pop(500),0.4);P(3,32.7,pop(700),0.4);[P(3,33.6+i*0.2,pop(900),0.25) for i in range(5)];P(3,37.8,pop(900),0.4);P(3,38.0,ding(1568),0.35)
Wh(3,39.4);[P(3,39.6+i*0.25,step(),0.3) for i in range(4)];P(3,40.8,hiss(1.0),0.45);P(3,40.9,recordscratch(),0.35);P(3,41.2,slidewhistle(False,0.6),0.3)
# C4 shark
card(4);P(4,0.3,wind(4.5),0.2);P(4,3.0,dundun(),0.45)
Wh(4,5.0);[P(4,6.5+i*0.3,pop(600+i*100),0.35) for i in range(3)];[P(4,9.3+i*0.25,tick(),0.45) for i in range(12)]
P(4,12.3,vineboom(),0.45);[P(4,12.35+i*0.012*30,pop(800),0.08) for i in range(20)];P(4,13.2,ooh(),0.3);P(4,15.2,bonk(),0.3);P(4,16.8,pop(),0.35)
Wh(4,19.8);P(4,20.3,pop(),0.35);Wh(4,21.5);P(4,21.7,splash(),0.3);P(4,22.6,pop(700),0.3);P(4,24.0,pop(900),0.3)
Wh(4,25.5);P(4,26.6,dundun(),0.35);P(4,28.4,ding(1318),0.35);P(4,28.5,bruhnote(),0.25)
# C5 cat
card(5);[P(5,0.3+i*0.35,step(),0.25) for i in range(6)];P(5,3.5,ooh(),0.25);P(5,5.9,recordscratch(),0.45)
Wh(5,7.4);P(5,8.2,slide(1400,400,2.0),0.25);P(5,10.0,thud(),0.4);P(5,11.0,squish(1.2),0.35)
Wh(5,13.8);[P(5,14.6+i*0.07,pop(500+(i%6)*70),0.15) for i in range(40)];P(5,20.2,dundun(),0.35);P(5,22.8,vineboom(),0.4)
Wh(5,25.2);[P(5,25.4+i*0.33,step(),0.3) for i in range(5)];P(5,27.0,hiss(1.2),0.5);P(5,27.4,whoosh(0.3),0.45);P(5,27.5,bonk(),0.35);P(5,28.6,sadtrombone(),0.35)
# C6 bees
card(6);P(6,0.5,dundun(),0.35)
Wh(6,2.5);[P(6,3.0+i*0.25,pop(500+i*90),0.35) for i in range(4)];P(6,7.0,bonk(),0.3);P(6,8.0,bonk(),0.3);P(6,9.0,bonk(),0.3);[P(6,9.6+i*0.2,tick(),0.4) for i in range(9)]
P(6,11.5,vineboom(),0.45);P(6,11.6,buzz(2.8),0.4);[P(6,14.6+i*0.06,tick(),0.3) for i in range(28)];P(6,16.4,dundun(),0.3)
Wh(6,20.6);P(6,20.7,buzz(5.3),0.35);P(6,21.5,whoosh(0.3),0.4);P(6,22.4,whoosh(0.3),0.4);P(6,23.7,airhorn(),0.3)
# C7 bigfoot
card(7);P(7,0.2,crickets(6.8),0.5);P(7,0.4,wind(6.5),0.15);[P(7,0.4+i*0.5,step(),0.3) for i in range(12)];P(7,4.6,dundun(),0.45)
Wh(7,6.9);P(7,8.6,pop(),0.35);P(7,9.0,boing(),0.3);P(7,10.5,pop(),0.3)
Wh(7,12.1);P(7,14.2,pop(500),0.4);P(7,14.9,pop(600),0.4);P(7,15.4,pop(700),0.4);P(7,16.2,thud(),0.45)
P(7,17.4,crickets(1.2),0.4);P(7,18.6,recordscratch(),0.35);P(7,18.8,bruhnote(),0.3);P(7,19.6,slidewhistle(False,2.0),0.25);P(7,22.0,vineboom(),0.4)
# C8 verdict
P(8,0.1,shimmer(),0.35);P(8,4.3,dundun(),0.3);P(8,5.3,airhorn(),0.3)
Wh(8,6.5);P(8,7.6,pop(500),0.35);P(8,8.4,pop(600),0.35);P(8,9.2,pop(700),0.35);P(8,11.8,ding(1318),0.3);P(8,13.6,pop(800),0.35);P(8,15.8,pop(900),0.35);P(8,16.6,buzz(2.0),0.3)
Wh(8,19.5);[P(8,19.7+i*0.4,step(),0.3) for i in range(6)];P(8,22.2,splash(),0.3);P(8,22.9,chomp(),0.45);P(8,23.0,recordscratch(),0.3);P(8,23.6,boing(),0.3);P(8,24.4,ding(1568),0.3)
m.save('w_animals/sfx.wav')

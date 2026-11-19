import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def engine(d):x=tt(d);f=70+50*np.minimum(1,x/1.2);ph=2*np.pi*np.cumsum(f)/SR;return (np.sign(np.sin(ph))*0.3+np.sin(ph*2)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.3)
def moto(d):x=tt(d);f=110+60*np.minimum(1,x/0.8)+8*np.sin(2*np.pi*3*x);ph=2*np.pi*np.cumsum(f)/SR;return lp(np.sign(np.sin(ph))*0.4+np.sin(ph*3)*0.2,4)*np.minimum(1,x/0.15)*np.minimum(1,(d-x)/0.3)
def crunch():return thud()*0.8+np.concatenate([lp(nz(0.5),3)*env(0.5,0.001,10)*0.8,np.zeros(int(0.0*SR))])[:int(0.4*SR)]
def splash(d=0.9):x=tt(d);return lp(nz(d),4)*np.minimum(1,x/0.01)*np.exp(-x*4)*1.0
def scrape(d=1.0):x=tt(d);return lp(nz(d),2)*(0.5+0.5*np.sin(2*np.pi*13*x))*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.2)*0.5
def step():x=tt(0.08);return lp(nz(0.08),12)*env(0.08,0.001,50)*0.9
S=[0,29.4,66.64,105.02,131.84,161.16,197.32,225.84,256.64]
m=Mix(279.0,7)
def P(c,t,snd,gn):m.put(snd,S[c]+t,gn)
def Wh(c,t,gn=0.4):P(c,t,whoosh(0.5),gn)
def card(c):Wh(c,0.0,0.45);P(c,0.1,sting(),0.4)
# ---- C0 intro
P(0,0.05,shimmer(),0.4);P(0,2.1,pop(),0.5)
Wh(0,3.4);P(0,3.4,engine(2.6),0.3);P(0,4.4,slidewhistle(True),0.35)
Wh(0,6.0);P(0,6.1,pop(800),0.4);Wh(0,7.2);P(0,7.3,wind(1.7),0.2)
Wh(0,9.0);P(0,9.6,boing(),0.4);P(0,9.8,ding(1318),0.3)
Wh(0,10.7);P(0,11.6,airhorn(),0.35);P(0,12.6,pop(),0.4)
Wh(0,13.9);[P(0,14.2+i*0.25,pop(500+i*90),0.4) for i in range(6)];P(0,15.6,ding(1568),0.3)
Wh(0,18.5);P(0,19.6,vineboom(),0.45);[P(0,20.2+i*0.12,tick(),0.4) for i in range(6)]
Wh(0,22.1);P(0,22.4,ding(1046),0.35);P(0,24.7,bonk(),0.45);P(0,24.8,dundun(),0.35)
Wh(0,26.6);[P(0,26.8+i*0.33,step(),0.4) for i in range(8)]
# ---- C1 ramp
card(1);P(1,0,engine(2.3),0.25);Wh(1,2.3);P(1,2.3,engine(3.6),0.35);P(1,3.3,slidewhistle(True),0.35);P(1,5.85,thud(),0.4);P(1,6.0,honk(),0.35)
Wh(1,7.0);P(1,8.3,pop(),0.45);P(1,9.7,pop(900),0.4);[P(1,10.2+i*0.66,tick(),0.6) for i in range(3)]
Wh(1,12.2);P(1,12.6,slide(300,1200,3.0),0.25);P(1,15.6,ding(1568),0.35);P(1,16.6,ooh(),0.35);P(1,16.6,airhorn(),0.3)
Wh(1,18.5);P(1,18.5,wind(3.7),0.15);P(1,20.25,recordscratch(),0.45)
Wh(1,22.2);P(1,22.4,slidewhistle(False),0.35);P(1,24.0,crunch(),0.5);P(1,24.05,bonk(),0.35);P(1,24.9,dundun(),0.35)
Wh(1,26.5);P(1,26.5,engine(5.0),0.3);P(1,29.0,pop(),0.4);P(1,30.1,thud(),0.25);P(1,30.0,ding(1318),0.3)
Wh(1,31.5);P(1,32.2,vineboom(),0.45);P(1,32.6,ooh(),0.3);P(1,33.6,pop(),0.35)
# ---- C2 roof
card(2);P(2,0.3,wind(2.2),0.15);Wh(2,2.6);P(2,3.3,slidewhistle(False),0.4);P(2,4.5,boing(),0.45);P(2,4.6,pop(400),0.35)
Wh(2,6.5);P(2,7.0,recordscratch(),0.45);P(2,8.3,bruhnote(),0.4);P(2,8.6,dundun(),0.3)
Wh(2,9.7);P(2,11.4,pop(),0.45);P(2,12.6,pop(800),0.4);P(2,14.0,vineboom(),0.5);P(2,16.0,slidewhistle(False,1.6),0.3);P(2,17.6,thud(),0.4)
Wh(2,19.2);P(2,20.6,crunch(),0.45);P(2,20.65,bonk(),0.35)
Wh(2,21.6);P(2,22.7,slidewhistle(False,0.5),0.3);P(2,23.3,thud(),0.45);P(2,24.7,slidewhistle(False,0.5),0.3);P(2,25.3,boing(),0.4)
Wh(2,27.0);P(2,28.2,whoosh(0.6),0.35);P(2,28.9,thud(),0.3);P(2,29.0,whoosh(0.8),0.35);P(2,29.9,ding(1318),0.3);P(2,30.6,pop(),0.4)
Wh(2,32.4);P(2,32.6,ding(1046),0.3);P(2,35.7,sadtrombone(),0.4);P(2,35.75,bonk(),0.4)
# ---- C3 bail out
card(3);P(3,0,engine(2.9),0.3);Wh(3,2.9);P(3,2.9,engine(2.7),0.3);P(3,3.4,whoosh(0.5),0.4);P(3,3.9,thud(),0.3);P(3,4.95,ding(1568),0.35)
Wh(3,5.6);P(3,5.65,recordscratch(),0.45)
Wh(3,7.8);P(3,7.9,engine(2.0),0.3);P(3,9.0,ding(1318),0.3);P(3,10.0,whoosh(0.6),0.4);P(3,10.4,dundun(),0.35)
Wh(3,13.0);P(3,13.6,slidewhistle(False,1.8),0.3);P(3,14.3,vineboom(),0.5);P(3,16.7,scrape(1.2),0.35);P(3,17.9,bonk(),0.4)
Wh(3,19.2);P(3,19.2,engine(2.2),0.15);P(3,21.4,whoosh(0.5),0.3);P(3,22.0,boing(),0.35);[P(3,t,pop(700+i*100),0.35) for i,t in enumerate([20.6,21.5,22.2])]
Wh(3,23.6);P(3,24.4,sadtrombone(),0.4);P(3,24.45,bonk(),0.35)
# ---- C4 wheelie
card(4);P(4,0,moto(2.7),0.3);Wh(4,2.7);P(4,2.7,moto(3.9),0.35);P(4,3.6,slidewhistle(True,0.5),0.35);P(4,4.1,airhorn(),0.3)
Wh(4,6.6);P(4,7.6,pop(),0.45);P(4,9.0,pop(900),0.4);[P(4,9.0+i*0.66,tick(),0.6) for i in range(3)]
Wh(4,11.1);[P(4,11.1+i*0.08,tick(),0.3) for i in range(24)];P(4,13.0,ding(1568),0.35);P(4,13.2,airhorn(),0.35);P(4,14.4,pop(),0.4)
Wh(4,17.1);P(4,17.1,moto(3.2),0.3);P(4,18.7,ding(1318),0.3)
Wh(4,20.3);P(4,20.3,moto(1.6),0.3);P(4,21.6,recordscratch(),0.4);P(4,22.0,slidewhistle(False,0.6),0.35);P(4,22.6,crunch(),0.45);P(4,22.65,bonk(),0.4)
Wh(4,24.1);P(4,25.0,vineboom(),0.45);P(4,25.2,ooh(),0.3)
# ---- C5 skyscraper
card(5);P(5,0.3,wind(3.4),0.18);Wh(5,3.8);P(5,4.0,bloop(),0.35);P(5,4.7,bloop(1.3),0.35)
Wh(5,6.1);P(5,6.15,recordscratch(),0.45);P(5,7.0,thud(),0.35);P(5,7.4,bonk(),0.35)
Wh(5,8.7);P(5,9.2,splash(0.6),0.25);P(5,10.9,splash(0.4),0.4);P(5,10.95,bonk(),0.35)
Wh(5,13.1);P(5,15.0,pop(),0.4);P(5,15.6,slidewhistle(False,1.8),0.3);P(5,17.4,splash(),0.4);P(5,18.4,ding(1318),0.3)
Wh(5,20.4);P(5,20.6,slide(300,1100,1.0),0.3);P(5,21.7,vineboom(),0.45)
Wh(5,23.6);P(5,23.7,wind(1.9),0.25);P(5,23.8,slidewhistle(False,1.8),0.3);P(5,25.6,crunch(),0.5);P(5,25.7,dundun(),0.35)
Wh(5,26.9);P(5,27.6,whoosh(0.8),0.35);P(5,28.4,wind(2.6),0.18);P(5,29.4,pop(),0.4);P(5,31.0,splash(0.5),0.3);P(5,31.05,ding(1568),0.3)
Wh(5,33.0);P(5,33.8,sadtrombone(),0.4);P(5,33.85,bonk(),0.35)
# ---- C6 skydive
card(6);P(6,0,wind(14.3),0.22);P(6,5.9,recordscratch(),0.4)
Wh(6,7.6);P(6,7.7,pop(),0.4);[P(6,10.4+i*0.1,tick(),0.3) for i in range(16)];P(6,12.0,ding(1568),0.3);P(6,12.4,pop(800),0.4);P(6,13.4,bonk(),0.4);P(6,13.45,dundun(),0.3)
Wh(6,14.3);P(6,14.3,wind(4.5),0.25);[P(6,14.6+i*0.1,tick(),0.35) for i in range(16)];P(6,16.2,ding(1318),0.3);P(6,17.6,vineboom(),0.4)
Wh(6,18.8);P(6,18.8,slidewhistle(False,1.4),0.35);P(6,20.2,boing(),0.5);P(6,20.25,thud(),0.3);P(6,20.6,ding(1046),0.3)
Wh(6,22.0);P(6,22.1,airhorn(),0.35);P(6,22.2,ooh(),0.3)
Wh(6,23.6);P(6,24.4,poof(),0.5);P(6,25.8,dundun(),0.35);P(6,25.85,bonk(),0.3)
# ---- C7 sprint
card(7);[P(7,0.2+i*0.3,step(),0.35) for i in range(9)];Wh(7,2.9);[P(7,2.9+i*0.26,step(),0.4) for i in range(12)];P(7,4.4,airhorn(),0.3)
Wh(7,6.2);P(7,6.3,recordscratch(),0.4)
Wh(7,8.0);[P(7,8.0+i*0.22,step(),0.4) for i in range(32)];P(7,11.4,ding(1568),0.3);P(7,12.2,pop(),0.4)
Wh(7,15.1);[P(7,15.8+i*0.24,tick(),0.5) for i in range(10)];P(7,18.2,sadtrombone(),0.35)
Wh(7,18.8);[P(7,18.8+i*(0.3+i*0.02),step(),0.35) for i in range(9)];P(7,20.2,bruhnote(),0.35)
Wh(7,21.9);P(7,22.2,slide(300,900,2.8),0.25);P(7,24.0,pop(),0.4);P(7,25.0,slidewhistle(False,0.6),0.3);P(7,26.2,slide(300,900,1.4),0.25);P(7,27.7,ding(1568),0.35);P(7,27.8,chaching(),0.3)
# ---- C8 final
P(8,0.05,sting(),0.4);[P(8,1.0+i*0.15,pop(500+i*80),0.4) for i in range(6)];[P(8,2.0+i*0.07,tick(),0.35) for i in range(60)];P(8,6.4,vineboom(),0.5);P(8,6.5,ooh(),0.3)
P(8,7.2,ding(1318),0.35);P(8,9.6,ding(1568),0.35);[P(8,11.9+i*0.2,bonk(),0.3) for i in range(4)];P(8,13.1,sadtrombone(),0.45)
Wh(8,14.2);P(8,14.5,pop(),0.4);P(8,15.6,bonk(),0.4);P(8,15.65,bruhnote(),0.35)
Wh(8,17.7);P(8,18.0,shimmer(),0.4);P(8,18.4,airhorn(),0.3);P(8,19.6,ding(1318),0.3);P(8,20.4,chaching(),0.3)
m.save('w_stunts/sfx.wav')

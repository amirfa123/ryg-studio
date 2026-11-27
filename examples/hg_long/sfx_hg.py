import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def step():return lp(nz(0.08),12)*env(0.08,0.001,50)*0.9
def rustle(d=0.4):x=tt(d);return lp(nz(d),3)*np.sin(np.pi*x/d)**2*(0.5+0.5*np.abs(np.sin(2*np.pi*11*x)))*0.9
def crackle(d):
  out=lp(nz(d),20)*0.25*np.minimum(1,tt(d)/0.3)*np.minimum(1,(d-tt(d))/0.3);r=np.random.default_rng(7)
  for i in range(int(d*18)):
    a=int(r.random()*(len(out)-800));out[a:a+400]+=lp(nz(400/SR),2)*env(400/SR,0.0005,90)*(0.4+0.6*r.random())
  return out
def roar(d):x=tt(d);return lp(nz(d),12)*1.3*np.minimum(1,x/0.6)*np.minimum(1,(d-x)/0.4)
def buzz(d,f=210):x=tt(d);ff=f+15*np.sin(2*np.pi*5*x);return (np.sign(np.sin(2*np.pi*np.cumsum(ff)/SR))*0.12+np.sin(2*np.pi*np.cumsum(ff*2)/SR)*0.1)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)
def stream(d):x=tt(d);return lp(nz(d),6)*(0.5+0.3*np.sin(2*np.pi*0.9*x))*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.4)*0.6
def splash():return lp(nz(0.6),6)*env(0.6,0.01,5)*1.0
def bubbles(d):
  out=np.zeros(int(SR*d));r=np.random.default_rng(3)
  for i in range(int(d*12)):
    s=bloop(0.6+r.random()*0.8)*0.4;a=int(r.random()*(len(out)-len(s)));out[a:a+len(s)]+=s
  return out
def whirr(d):x=tt(d);f=120+80*x/d;return (np.sin(2*np.pi*np.cumsum(f)/SR)*0.3+lp(nz(d),15)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)
def heartbeat():return thud()*0.6
def gong():x=tt(1.6);return (np.sin(2*np.pi*110*x)+0.5*np.sin(2*np.pi*163*x)+0.3*np.sin(2*np.pi*247*x))*env(1.6,0.003,2.5)*0.5
S=[0,21.0,59.12,90.6,108.42,143.6,176.02,214.12,246.12]
m=Mix(272.0,21)
def P(c,t,snd,gn):m.put(snd,S[c]+t,gn)
def Wh(c,t,gn=0.4):P(c,t,whoosh(0.5),gn)
def card(c):Wh(c,0.0,0.45);P(c,0.1,sting(),0.35)
def guess(c,t0,t1):
  n=int((t1-t0)/0.5)
  for i in range(n):P(c,t0+i*0.5,tick(),0.3)
# C0 intro
P(0,0.1,dundun(),0.35);P(0,0.3,wind(3.0),0.15);Wh(0,3.3);P(0,4.6,recordscratch(),0.3);Wh(0,6.0);[P(0,6.1+i*0.43,step(),0.3) for i in range(7)]
Wh(0,9.0);[P(0,9.1+i*0.03,pop(500+(i%12)*40),0.12) for i in range(48)];P(0,13.4,ding(1318),0.35);P(0,13.6,vineboom(),0.4)
Wh(0,14.8);[P(0,15.4+i*0.3,pop(500+i*100),0.4) for i in range(5)];P(0,18.1,shimmer(),0.35);Wh(0,19.3);P(0,19.4,airhorn(),0.35)
# C1 countdown
card(1);Wh(1,2.3,0.3);P(1,2.4,whirr(1.5),0.4);P(1,3.9,thud(),0.4)
[P(1,4.2+i*0.18,tick(),0.25) for i in range(60)];P(1,6.1,recordscratch(),0.3);P(1,7.6,bonk(),0.35)
Wh(1,9.4);P(1,11.4,shimmer(),0.4);[P(1,12.2+i*0.5,pop(600+i*120),0.35) for i in range(4)]
P(1,15.0,gong(),0.45);P(1,15.0,airhorn(),0.3);[P(1,15.1+i*0.12,step(),0.25) for i in range(28)]
P(1,18.6,pop(800),0.3);guess(1,20.9,23.4);[P(1,19.6+i*0.18,pop(900+i*100),0.3) for i in range(3)]
Wh(1,23.4,0.45);[P(1,23.5+i*0.17,step(),0.35) for i in range(25)];P(1,25.6,rustle(0.4),0.5);P(1,25.65,pop(1200),0.35)
Wh(1,27.8);P(1,28.0,ding(1046),0.3);P(1,30.4,pop(700),0.35);P(1,31.0,pop(900),0.35)
Wh(1,32.6);P(1,32.8,thud(),0.45);P(1,32.85,bonk(),0.3);P(1,33.7,sadtrombone(),0.3)
# C2 rule of threes
card(2);[P(2,0.1+i*0.43,step(),0.3) for i in range(6)];Wh(2,2.7);P(2,2.8,dundun(),0.35)
Wh(2,5.0);[P(2,t,pop(600+k*150),0.4) for k,t in enumerate([6.0,7.6,10.0,12.0])];P(2,14.0,pop(700),0.3);guess(2,15.9,18.4)
P(2,18.4,ding(1318),0.35);P(2,19.6,vineboom(),0.4);Wh(2,20.8);[P(2,20.9+i*0.25,tick(),0.3) for i in range(7)]
Wh(2,22.7);P(2,22.9,slide(900,300,1.6),0.25);P(2,23.3,bonk(),0.3);P(2,25.3,slidewhistle(False),0.25);P(2,26.8,recordscratch(),0.25)
Wh(2,28.0);P(2,28.6,wind(2.6),0.2);P(2,28.6,heartbeat(),0.3);P(2,29.5,heartbeat(),0.3);P(2,30.4,heartbeat(),0.3)
# C3 water
P(3,0,stream(17.8),0.25);P(3,0.6,pop(900),0.3);Wh(3,2.2);[P(3,2.3+i*0.43,step(),0.3) for i in range(12)];P(3,3.8,shimmer(),0.25);[P(3,5.7+i*0.18,pop(500+i*60),0.25) for i in range(5)]
Wh(3,7.7);P(3,7.8,ding(1046),0.3);P(3,8.8,bonk(),0.35);P(3,9.0,splash(),0.2)
Wh(3,10.5);P(3,10.6,squish(0.6),0.4);P(3,11.7,bloop(0.8),0.35);P(3,12.6,bruhnote(),0.3)
Wh(3,14.1);P(3,14.1,crackle(3.7),0.4);P(3,14.2,bubbles(3.5),0.25);[P(3,14.3+i*0.105,tick(),0.15) for i in range(20)];P(3,16.4,ding(1568),0.35)
# C4 night
card(4);P(4,0.2,wind(5.0),0.2);P(4,2.4,slide(700,200,2.2),0.2);P(4,4.5,sting(),0.3)
Wh(4,5.3);P(4,5.35,chatter(1.2),0.4);P(4,5.4,wind(1.2),0.25)
Wh(4,6.6);P(4,6.8,slide(600,200,3.4),0.2);P(4,10.1,dundun(),0.35)
Wh(4,11.6);P(4,11.7,chatter(1.0),0.35);P(4,12.6,pop(600),0.3);P(4,14.2,pop(500),0.3);P(4,14.3,wind(1.3),0.2)
Wh(4,15.6);[P(4,16.8+i*0.5,slide(500,250,0.4),0.15) for i in range(6)];P(4,17.6,recordscratch(),0.25)
Wh(4,20.3);[P(4,20.5+i*0.35,rustle(0.35),0.4) for i in range(17)];P(4,23.6,shimmer(),0.25)
Wh(4,26.7);P(4,26.8,bruhnote(),0.3);P(4,27.8,ding(1318),0.35)
Wh(4,29.0);P(4,29.1,pop(700),0.35);P(4,31.9,dundun(),0.35);P(4,30,wind(5.0),0.15)
# C5 fire
card(5);[P(5,0.1+i*0.43,step(),0.3) for i in range(6)]
Wh(5,2.7,0.5);P(5,2.8,roar(3.4),0.35);P(5,3.0,crackle(3.2),0.5);P(5,4.6,dundun(),0.3)
Wh(5,6.2);P(5,6.6,pop(600),0.35);P(5,8.3,pop(800),0.35);guess(5,9.8,12.3);P(5,12.3,vineboom(),0.4)
Wh(5,13.5);P(5,14.6,poof(),0.3);P(5,14.9,pop(700),0.3);P(5,16.0,pop(800),0.3);P(5,17.0,bonk(),0.3)
Wh(5,18.3);P(5,18.4,wind(1.6),0.25)
Wh(5,20.0);P(5,20.0,roar(4.8),0.3);P(5,20.0,crackle(4.8),0.45);[P(5,21.8+i*0.25,step(),0.3) for i in range(12)];P(5,22.3,slide(400,900,0.4),0.25)
Wh(5,24.8);P(5,25.0,dundun(),0.3);P(5,26.0,crackle(4.5),0.4);P(5,26.0,slide(300,1200,4.0),0.15);P(5,30.5,recordscratch(),0.25)
# C6 wasps
card(6);P(6,0,buzz(2.7),0.3)
Wh(6,2.7);P(6,2.8,buzz(2.6,260),0.3);P(6,3.9,dundun(),0.35)
Wh(6,5.4);P(6,5.4,buzz(4.1),0.4);P(6,6.9,recordscratch(),0.25)
Wh(6,9.5);P(6,9.6,buzz(1.0,280),0.2);guess(6,13.0,15.2)
Wh(6,15.2);[P(6,16.8+i*0.1,pop(800+i*50),0.3) for i in range(10)];P(6,17.6,ding(1046),0.3)
Wh(6,19.1);[P(6,19.15+i*0.05,tick(),0.2) for i in range(25)];P(6,20.4,vineboom(),0.4)
Wh(6,21.3);P(6,21.4,buzz(1.0,300),0.25);P(6,22.6,heartbeat(),0.35);P(6,23.4,dundun(),0.3)
Wh(6,25.2);P(6,25.2,buzz(3.9),0.35);P(6,27.2,bonk(),0.35)
Wh(6,29.1);P(6,29.2,splash(),0.35);P(6,29.3,bubbles(3.0),0.3);P(6,29.5,buzz(2.9,240),0.25)
Wh(6,32.4,0.5);P(6,32.4,buzz(5.7,230),0.4);[P(6,32.5+i*0.17,step(),0.3) for i in range(33)]
# C7 berries
card(7);Wh(7,2.5);P(7,2.8,growl(0.9),0.4);[P(7,2.6+i*0.5,step(),0.3) for i in range(5)];P(7,4.2,pop(700),0.3)
Wh(7,5.9);P(7,6.0,rustle(0.4),0.4);[P(7,6.2+i*0.18,pop(900+i*100),0.3) for i in range(3)]
Wh(7,7.6);[P(7,7.8+i*0.3,pop(1400+i*80),0.2) for i in range(8)]
P(7,10.5,recordscratch(),0.35);P(7,11.8,ding(1046),0.3);P(7,12.8,bonk(),0.3)
Wh(7,14.4);P(7,14.5,dundun(),0.35);P(7,16.8,vineboom(),0.4)
Wh(7,19.2);P(7,20.9,ding(1318),0.3);P(7,23.0,sadtrombone(),0.3)
Wh(7,26.5);P(7,26.6,sting(),0.3);P(7,27.6,slidewhistle(False),0.25);P(7,29.9,bonk(),0.3)
# C8 verdict
P(8,0.1,dundun(),0.35);Wh(8,2.3);P(8,4.5,pop(600),0.35);P(8,5.9,bonk(),0.35)
Wh(8,7.0);[P(8,7.8+i*1.15,ding(1046+i*130),0.3) for i in range(4)]
Wh(8,13.0);[P(8,t,pop(700+k*150),0.35) for k,t in enumerate([13.0,14.5,15.7])];P(8,16.8,slide(300,1200,1.7),0.2);P(8,18.6,airhorn(),0.3)
Wh(8,20.2);[P(8,21.0+i*0.18,pop(900+i*100),0.3) for i in range(3)];P(8,23.5,shimmer(),0.35);P(8,24.0,ooh(),0.3)
m.save('w_hg/sfx.wav')

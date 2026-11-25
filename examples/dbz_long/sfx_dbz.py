import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def step():return lp(nz(0.08),12)*env(0.08,0.001,50)*0.9
def splash():return lp(nz(0.6),6)*env(0.6,0.01,5)*1.0
def heartbeat():return thud()*0.7
def punch():a=thud()*0.5;b=lp(nz(0.09),3)*env(0.09,0.001,40)*0.9;a[:len(b)]+=b;return a
def hum(d):x=tt(d);f=110+40*x/d;return (np.sin(2*np.pi*np.cumsum(f)/SR)*0.4+np.sin(2*np.pi*np.cumsum(f*2.01)/SR)*0.2+lp(nz(d),20)*0.3)*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.2)
def beam(d):x=tt(d);f=420+60*np.sin(2*np.pi*30*x);return (np.sin(2*np.pi*np.cumsum(f)/SR)*0.25+lp(nz(d),8)*0.5)*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.15)
def boom(d=2.0):x=tt(d);return (lp(nz(d),3)*1.6+np.sin(2*np.pi*np.cumsum(60*np.exp(-x*2)+30)/SR)*0.8)*env(d,0.005,2.2)
def rocket(d):x=tt(d);return lp(nz(d),5)*1.2*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.05)
def creak(d=0.7):x=tt(d);f=140+40*np.sin(2*np.pi*3*x);return np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.12*np.sin(np.pi*x/d)
def rotor(d):x=tt(d);return lp(nz(d),8)*(0.5+0.5*np.sin(2*np.pi*6*x))**2*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.3)*1.2
def bubbles(d):
  out=np.zeros(int(SR*d));r=np.random.default_rng(3)
  for i in range(int(d*14)):
    s=bloop(0.6+r.random()*0.8)*0.4;a=int(r.random()*(len(out)-len(s)));out[a:a+len(s)]+=s
  return out
def zap():x=tt(0.25);return np.sin(2*np.pi*np.cumsum(1800*np.exp(-x*12)+200)/SR)*env(0.25,0.001,10)*0.5
S=[0,18.92,41.92,61.04,87.8,117.76,130.0,160.64,195.64,228.52,260.88]
m=Mix(288.1,11)
def P(c,t,snd,gn):m.put(snd,S[c]+t,gn)
def Wh(c,t,gn=0.4):P(c,t,whoosh(0.5),gn)
def card(c):Wh(c,0.0,0.45);P(c,0.1,sting(),0.35)
# C0 intro
P(0,0.1,dundun(),0.35);[P(0,0.25+i*0.3,punch(),0.22) for i in range(13)];P(0,1.3,whoosh(0.3),0.3)
Wh(0,4.1);P(0,4.4,thud(),0.45);P(0,4.5,creak(),0.4)
Wh(0,5.3);[P(0,5.5+i*0.225,punch(),0.25) for i in range(9)];P(0,6.3,vineboom(),0.4)
Wh(0,7.5);P(0,7.6,wind(1.0),0.25)
Wh(0,8.5);P(0,8.6,hum(0.5),0.35);P(0,8.95,beam(1.1),0.4)
Wh(0,10.0);[P(0,10.6+i*0.35,pop(500+i*100),0.4) for i in range(5)];P(0,14.7,ding(1318),0.3);P(0,17.3,airhorn(),0.35)
# C1 gravity room
card(1);[P(1,0.1+i*0.32,step(),0.3) for i in range(8)]
Wh(1,2.5,0.3);[P(1,4.4+i*0.07,tick(),0.25) for i in range(20)];P(1,5.8,dundun(),0.35)
Wh(1,6.5,0.3);[P(1,7.0+i*0.15,step(),0.3) for i in range(4)];[P(1,8.0+i*0.2,pop(700+i*100),0.3) for i in range(3)]
Wh(1,9.6);P(1,10.0,thud(),0.5);P(1,10.1,creak(0.9),0.4);P(1,10.2,slide(200,900,3.0),0.15);P(1,13.1,ding(1046),0.3)
Wh(1,13.9);P(1,14.75,thud(),0.5);P(1,14.8,boing(),0.25)
Wh(1,15.8);P(1,16.0,creak(),0.35)
Wh(1,17.1);P(1,17.3,pop(),0.35);P(1,19.6,slide(200,800,2.0),0.2);[P(1,21.0+i*0.15,pop(600+i*80),0.3) for i in range(5)];P(1,21.8,vineboom(),0.35)
# C2 blood
Wh(2,0.0,0.3);[P(2,0.2+i*0.7,heartbeat(),0.45) for i in range(4)]
Wh(2,2.4);[P(2,3.0+i*0.62,heartbeat(),0.35) for i in range(6)];P(2,6.6,slidewhistle(False,1.2),0.3);[P(2,7.6+i*0.9,heartbeat(),0.3) for i in range(3)]
Wh(2,10.1);P(2,10.2,rotor(4.0),0.25);P(2,12.4,bruhnote(),0.3)
Wh(2,14.3);P(2,14.6,slide(200,600,0.8),0.25);P(2,16.9,slide(200,800,1.2),0.25);P(2,17.2,whoosh(0.6),0.3);P(2,18.3,recordscratch(),0.3)
# C3 rocket sled
P(3,0.1,dundun(),0.3);[P(3,1.2+i*0.1,pop(400+i*30),0.15) for i in range(6)];[P(3,4.0+i*0.8,tick(),0.45) for i in range(3)]
Wh(3,6.3);P(3,6.4,rocket(3.7),0.4);P(3,10.1,splash(),0.35);P(3,10.12,thud(),0.45);P(3,10.6,slide(200,1000,1.8),0.2);P(3,13.7,vineboom(),0.45);P(3,13.75,ooh(),0.3)
Wh(3,15.0);P(3,15.2,tick(),0.4);P(3,16.9,pop(),0.35);P(3,17.4,dundun(),0.3)
Wh(3,20.4);P(3,20.6,creak(),0.35);P(3,23.45,bonk(),0.35);P(3,24.8,squish(0.5),0.4);P(3,24.85,sadtrombone(),0.3)
# C4 strength
card(4);P(4,1.0,boing(),0.2)
Wh(4,3.8);P(4,4.0,dundun(),0.3);P(4,5.0,ooh(),0.25)
Wh(4,7.3);P(4,8.6,thud(),0.3);P(4,9.2,creak(1.2),0.35);P(4,10.6,thud(),0.4);P(4,10.9,airhorn(),0.3);P(4,11.85,pop(),0.35);P(4,12.2,ding(1318),0.3)
Wh(4,13.7);P(4,13.9,pop(),0.35);P(4,15.0,stretch(1.4),0.3);P(4,16.5,vineboom(),0.4)
Wh(4,18.3);P(4,20.2,stretch(1.6),0.25);P(4,20.6,ding(1046),0.25);P(4,22.6,thud(),0.35)
Wh(4,25.1);P(4,25.4,slide(200,1100,2.0),0.25);P(4,27.4,bonk(),0.35)
# C5 punch
card(5);[P(5,0.25+i*0.25,punch(),0.3) for i in range(34)];P(5,4.4,slide(300,1000,0.8),0.2);P(5,6.9,slide(300,1200,1.3),0.2)
Wh(5,8.9,0.5);P(5,9.6,thud(),0.4);P(5,9.62,vineboom(),0.35)
# C6 shrimp + sound
P(6,0.1,sting(),0.3);P(6,0.8,pop(),0.3);P(6,3.5,bonk(),0.3);[P(6,4.8+i*0.67,tick(),0.45) for i in range(3)]
Wh(6,6.7);P(6,6.9,airhorn(),0.3);P(6,7.0,bubbles(4.0),0.15);P(6,9.7,slide(300,1300,0.9),0.2)
Wh(6,11.7);P(6,12.3,punch(),0.4);P(6,12.32,zap(),0.3);P(6,13.9,bubbles(2.2),0.35);P(6,16.2,thud(),0.45);P(6,16.22,zap(),0.4);P(6,16.7,bonk(),0.3);P(6,17.0,ding(1318),0.3)
Wh(6,18.7);P(6,19.0,slide(200,400,0.6),0.2);P(6,19.4,slide(200,500,0.6),0.2);P(6,20.3,slide(200,1600,1.3),0.25)
Wh(6,22.6);P(6,24.0,vineboom(),0.45)
Wh(6,26.8);[P(6,27.0+i*0.15,punch(),0.2) for i in range(12)];P(6,27.2,thud(),0.35);P(6,29.0,bruhnote(),0.35)
# C7 flying
card(7);P(7,0.2,wind(3.0),0.25)
Wh(7,3.2);P(7,3.5,whoosh(1.0),0.3);P(7,5.6,slide(300,700,0.5),0.25);P(7,6.3,ding(1046),0.25)
Wh(7,7.6);[P(7,7.8+i*0.7,whoosh(0.4),0.2) for i in range(9)];P(7,10.4,pop(),0.35)
Wh(7,14.3);P(7,14.5,slide(200,500,0.5),0.2);P(7,14.8,slide(200,800,0.8),0.2);P(7,15.8,sadtrombone(),0.3)
Wh(7,16.7);P(7,16.8,rotor(16.4),0.3);P(7,17.9,pop(),0.3);P(7,21.0,ding(1318),0.25);P(7,23.6,pop(),0.3);[P(7,23.6+i*0.5,step(),0.2) for i in range(6)];P(7,26.9,airhorn(),0.3);[P(7,26.9+i*0.1,tick(),0.18) for i in range(27)];P(7,28.2,ding(1568),0.3);P(7,31.0,ooh(),0.3)
# C8 energy
card(8);P(8,0.2,hum(2.4),0.35)
Wh(8,2.7);P(8,3.2,beam(0.8),0.25);P(8,4.0,bruhnote(),0.3);[P(8,4.3+i*0.2,pop(700+i*100),0.3) for i in range(3)]
Wh(8,5.8);P(8,6.4,shimmer(1.2),0.35);P(8,7.3,ding(1318),0.3)
Wh(8,9.1);[P(8,9.4+i*0.135,pop(450+(i%5)*60),0.25) for i in range(15)];P(8,10.6,ding(1046),0.25);P(8,14.0,pop(),0.35);P(8,16.0,ding(1568),0.3)
Wh(8,17.4);[P(8,17.7+i*0.12,thud(),0.12) for i in range(27)];P(8,21.0,dundun(),0.35)
Wh(8,23.1);P(8,23.3,hum(0.8),0.35);P(8,24.0,beam(1.6),0.45);P(8,25.0,boom(2.5),0.3);P(8,25.05,vineboom(),0.3)
Wh(8,27.6);P(8,27.75,recordscratch(),0.3);P(8,29.0,shimmer(),0.25);[P(8,30.6+i*0.83,heartbeat(),0.35) for i in range(3)]
# C9 E=mc2
P(9,0.1,recordscratch(),0.4)
Wh(9,2.3);P(9,2.6,ding(1046),0.3);[P(9,4.2+i*0.35,tick(),0.35) for i in range(5)];P(9,6.4,ding(1568),0.3)
Wh(9,8.6);P(9,9.4,shimmer(2.0),0.35);P(9,11.7,slide(200,1400,2.2),0.22);P(9,13.9,vineboom(),0.4)
Wh(9,14.9);P(9,15.1,boom(1.5),0.3);P(9,16.2,airhorn(),0.3)
Wh(9,18.3);P(9,18.5,dundun(),0.3);P(9,21.4,pop(),0.3);[P(9,23.4+i*0.8,tick(),0.45) for i in range(3)]
Wh(9,25.7);[P(9,25.9+i*0.07,pop(500+(i%6)*70),0.12) for i in range(16)];P(9,26.2,vineboom(),0.45);P(9,26.3,ooh(),0.3)
Wh(9,27.9);P(9,29.2,thud(),0.4);P(9,29.3,sadtrombone(),0.3)
# C10 verdict
Wh(10,0.0,0.3);P(10,0.2,dundun(),0.3)
Wh(10,3.3);P(10,3.5,bonk(),0.3);P(10,5.8,ding(1318),0.3);P(10,8.6,bonk(),0.3);P(10,11.8,pop(400),0.4)
Wh(10,15.2);[P(10,15.6+i*1.0,thud(),0.25) for i in range(3)];P(10,16.4,ding(1046),0.3)
Wh(10,18.1);P(10,18.25,pop(500),0.35);P(10,18.9,pop(600),0.35);P(10,19.45,pop(700),0.35);P(10,19.95,pop(800),0.35)
Wh(10,20.7);P(10,21.0,shimmer(),0.3);P(10,21.1,airhorn(),0.25)
Wh(10,23.7);P(10,24.2,bonk(),0.35);P(10,24.4,boing(),0.3);[P(10,24.6+i*0.3,step(),0.25) for i in range(9)]
m.save('w_dbz/sfx.wav')

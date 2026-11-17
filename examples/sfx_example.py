from sfxlib import *
def screech(d=0.7):
    x=tt(d);f=2400-900*x/d+120*np.sin(2*np.pi*23*x);y=np.sin(2*np.pi*np.cumsum(f)/SR)*0.5+lp(nz(d),3)*0.35;return y*np.minimum(1,x/0.02)*np.minimum(1,(d-x)/0.15)*0.8
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def rumble(d):x=tt(d);return lp(nz(d),220)*6*np.minimum(1,x/0.6)*np.minimum(1,(d-x)/0.4)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def rewind(d):x=tt(d);f=600+1800*(x/d);return (np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*0.15+lp(nz(d),4)*0.3)*np.sin(np.pi*x/d)
def flip():return lp(nz(0.08),6)*env(0.08,0.002,40)*0.8
# Earth stop
m=Mix(17.3,3)
m.put(shimmer(),0.05,0.6);m.put(wind(3.8),0.1,0.08);m.put(screech(0.8),3.92,0.9);m.put(thud(),4.0,0.8);m.put(sting(),4.1,0.5)
m.put(slide(300,1400,0.5),4.95,0.8);m.put(whoosh(0.9),5.0,1.0);m.put(pop(),5.05,0.5)
m.put(wind(4.3),5.95,0.3);m.put(whoosh(0.6),6.0,0.7);m.put(ding(1318),9.2,0.4)
m.put(squish(0.7),10.4,0.7);m.put(squish(0.6),11.1,0.8);m.put(bloop(),11.15,0.6)
for k in range(5):m.put(flip(),13.2+k*0.38,0.9)
m.put(ding(784),13.35,0.35);m.put(bloop(0.7),14.5,0.5)
m.put(whoosh(0.8),15.6,0.8);m.put(thud(),16.45,1.0);m.put(pop(800),16.5,0.4)
m.save('spin/sfx.wav')
# Black hole
m=Mix(19.9,4)
m.put(rumble(19.8),0.05,0.5);m.put(shimmer(),0.05,0.5);m.put(growl(1.2),3.0,0.35);m.put(sting(),3.6,0.5)
m.put(pop(400),5.4,0.6);m.put(pop(900),6.8,0.4)
m.put(stretch(1.6),7.7,1.0);m.put(slide(200,900,1.0),7.75,0.6);m.put(squish(0.8),8.6,0.5)
m.put(ding(1046),10.95,0.4);m.put(shimmer(),11.0,0.5)
m.put(whoosh(0.8),12.5,0.6)
d=12.6;tau=lambda t:(1-np.exp(-(t-12.52)*0.75))/0.75
k=0
while True:
    # tick each time clock-hand phase crosses a step
    k+=1;tt0=12.52-np.log(1-k*0.35*0.75)/0.75 if k*0.35*0.75<1 else 99
    if tt0>18.1:break
    m.put(tick(),tt0,0.8)
m.put(sting(),16.65,0.4)
m.put(rewind(1.5),18.2,0.9);m.put(pop(700),19.75,0.4)
m.save('bh/sfx.wav')

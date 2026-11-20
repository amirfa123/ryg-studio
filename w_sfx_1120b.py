import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def click():x=tt(0.04);return lp(nz(0.04),3)*env(0.04,0.0005,90)*0.8
def step():x=tt(0.12);return lp(nz(0.12),12)*env(0.12,0.002,40)*0.9
def boom(d=1.6):x=tt(d);return (lp(nz(d),3)*1.8+np.sin(2*np.pi*np.cumsum(60*np.exp(-x*2)+25)/SR))*env(d,0.004,2.6)
def hum(d,f=70):x=tt(d);return (np.sin(2*np.pi*f*x)+0.5*np.sin(2*np.pi*f*2*x)+0.3*np.sign(np.sin(2*np.pi*f*0.5*x)))*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.2)*0.25
def hic():x=tt(0.18);return (np.sin(2*np.pi*np.cumsum(500+700*np.exp(-x*30))/SR)*0.6+lp(nz(0.18),4)*0.5)*env(0.18,0.002,28)
def fizz(d):x=tt(d);return hp(nz(d))*0.25*(0.6+0.4*np.sin(2*np.pi*13*x)**2)*np.minimum(1,x/0.1)*np.minimum(1,(d-x)/0.2) if 'hp' in globals() else lp(nz(d),1)*0.15*np.minimum(1,x/0.1)*np.minimum(1,(d-x)/0.2)
def meow():x=tt(0.5);f=520+260*np.sin(np.pi*x/0.5);return (np.sin(2*np.pi*np.cumsum(f)/SR)+0.4*np.sin(4*np.pi*np.cumsum(f)/SR))*env(0.5,0.03,5)*0.5
which=sys.argv[1]
if which=='car':
    m=Mix(21.45,31)
    m.put(hum(2.6),0.05,0.3);m.put(shimmer(),0.1,0.25)
    m.put(whoosh(0.5),2.6,0.45);m.put(slide(150,520,0.6),2.65,0.3);m.put(thud(),3.25,0.45);m.put(bonk(),3.27,0.35);m.put(recordscratch(),3.55,0.35)
    m.put(whoosh(0.5),4.0,0.4);m.put(pop(600),4.35,0.4);m.put(vineboom(),5.35,0.42);m.put(pop(900),5.4,0.3)
    m.put(whoosh(0.5),6.25,0.4);m.put(pop(700),6.75,0.4);m.put(wind(1.6),6.6,0.15)
    for k in range(6):m.put(bloop(1+k*0.1),8.4+k*0.06,0.25)
    m.put(pop(800),8.5,0.35);m.put(slide(300,1100,0.5),8.9,0.3);m.put(poof(),9.4,0.4);m.put(whoosh(0.7),9.42,0.45)
    m.put(whoosh(0.5),10.25,0.4);m.put(pop(650),10.75,0.4);m.put(thud(),12.4,0.4);m.put(click(),12.62,0.6);m.put(dundun(),12.7,0.35);m.put(pop(900),12.62,0.3)
    m.put(whoosh(0.5),14.35,0.4)
    for k in range(9):m.put(step(),14.7+k*0.3,0.35)
    m.put(pop(700),15.9,0.4);m.put(ding(1046),16.3,0.3)
    m.put(whoosh(0.5),17.15,0.4);m.put(pop(600),17.3,0.35);m.put(boom(1.9),18.55,0.3);m.put(airhorn(0.6),18.75,0.2);m.put(click(),19.3,0.7);m.put(bonk(),19.3,0.25)
    m.put(whoosh(0.6),19.85,0.4);m.put(hum(1.4),20.05,0.3)
    m.save('w_car/sfx.wav')
if which=='hic':
    m=Mix(20.3,32)
    m.put(hic(),0.02,0.45);m.put(hic(),1.27,0.45);m.put(shimmer(),0.1,0.2)
    m.put(whoosh(0.5),2.35,0.45);m.put(pop(600),2.75,0.4);m.put(pop(800),3.4,0.4);m.put(boing(),4.84,0.35);m.put(hic(),4.86,0.3)
    m.put(whoosh(0.5),5.85,0.4);m.put(wind(1.4),6.1,0.3);m.put(slide(200,700,0.9),6.15,0.25);m.put(pop(700),6.0,0.35)
    m.put(whoosh(0.5),8.05,0.4);m.put(pop(800),8.4,0.35);m.put(slide(300,900,0.8),8.3,0.2);m.put(thud(),9.12,0.45);m.put(vineboom(),9.14,0.35)
    m.put(whoosh(0.5),10.25,0.4);m.put(hic(),10.4,0.35);m.put(pop(900),10.5,0.3);m.put(hic(),11.52,0.5);m.put(recordscratch(),11.0,0.25)
    m.put(whoosh(0.5),12.35,0.4);m.put(pop(650),12.45,0.35)
    for k in range(4):m.put(munch(),12.5+k*0.33,0.35)
    m.put(pop(800),13.6,0.35);m.put(fizz(2.0),13.6,0.4);m.put(hic(),14.6,0.35);m.put(hic(),15.4,0.3)
    m.put(whoosh(0.5),15.55,0.4);m.put(dundun(),15.75,0.35)
    for k in range(3):m.put(hic(),16.2+k*0.9,0.35)
    m.put(slide(300,1500,0.8),16.9,0.25);m.put(ding(1318),17.65,0.3);m.put(ooh(),17.8,0.25)
    m.put(whoosh(0.6),18.55,0.4);m.put(hic(),19.05,0.4)
    m.save('w_hic/sfx.wav')
if which=='cat':
    m=Mix(18.3,33)
    m.put(shimmer(),0.05,0.25);m.put(meow(),1.5,0.35)
    m.put(whoosh(0.5),2.7,0.45);m.put(pop(650),3.3,0.4);m.put(slide(400,700,0.8),3.7,0.2);m.put(ding(1175),4.7,0.3)
    m.put(whoosh(0.5),5.45,0.4);m.put(wind(4.4),5.6,0.2);m.put(stretch(0.6),6.0,0.3);m.put(pop(800),6.05,0.3)
    m.put(whoosh(0.7),7.1,0.45);m.put(slidewhistle(True,0.7),7.15,0.25);m.put(pop(900),7.15,0.3)
    m.put(whoosh(0.7),8.5,0.45);m.put(pop(700),8.55,0.3);m.put(ooh(),9.65,0.25)
    m.put(whoosh(0.5),10.05,0.4);m.put(stretch(0.8),10.4,0.25);m.put(pop(650),10.6,0.4);m.put(pop(800),11.7,0.35);m.put(vineboom(),12.2,0.4);m.put(pop(900),12.7,0.3)
    m.put(whoosh(0.5),14.05,0.4);m.put(pop(700),14.3,0.35);m.put(slide(900,300,0.5),14.45,0.2);m.put(squish(0.4),14.95,0.4);m.put(boing(),15.0,0.3)
    m.put(whoosh(0.6),16.55,0.4);m.put(meow(),17.3,0.3)
    m.save('w_cat/sfx.wav')

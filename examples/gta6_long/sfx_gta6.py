import sys;sys.path.insert(0,'.')
from sfxlib import *
def thud():x=tt(0.4);return np.sin(2*np.pi*np.cumsum(90*np.exp(-x*6)+40)/SR)*env(0.4,0.002,9)*1.2+lp(nz(0.4),25)*env(0.4,0.002,20)
def tick():x=tt(0.05);return np.sin(2*np.pi*2000*x)*env(0.05,0.0005,120)*0.6
def engine(d):x=tt(d);f=70+50*np.minimum(1,x/1.2);ph=2*np.pi*np.cumsum(f)/SR;return (np.sign(np.sin(ph))*0.3+np.sin(ph*2)*0.3)*np.minimum(1,x/0.2)*np.minimum(1,(d-x)/0.3)
def siren(d):x=tt(d);f=700+300*np.sign(np.sin(2*np.pi*2*x));return np.sin(2*np.pi*np.cumsum(f)/SR)*0.35*np.minimum(1,x/0.05)*np.minimum(1,(d-x)/0.1)
def snore(d=0.9):x=tt(d);return lp(nz(d),30)*np.sin(np.pi*x/d)**2*(0.5+0.5*np.sin(2*np.pi*28*x))*1.2
def chop(d):x=tt(d);return lp(nz(d),60)*3*(0.5+0.5*np.sign(np.sin(2*np.pi*11*x)))*np.minimum(1,x/0.4)*np.minimum(1,(d-x)/0.4)
m=Mix(265.0,11)
W=lambda t,gn=0.4:m.put(whoosh(0.5),t,gn)
# ---- C1
m.put(shimmer(),0.05,0.4);m.put(pop(),2.4,0.5)
W(4.0);[m.put(pop(500+300*(i%3)),4.3+i*0.31,0.3) for i in range(12)];m.put(vineboom(),5.7,0.55)
W(8.6);[m.put(tick(),8.7+i*0.36,0.5) for i in range(4)];m.put(recordscratch(),10.15,0.5);[m.put(pop(400),10.4+k*0.35,0.5) for k in range(2)]
W(12.4);m.put(ding(1318),12.6,0.3);W(15.3);m.put(pop(900),15.4,0.4);W(17.9);m.put(slide(400,1100,0.3),18.0,0.4);m.put(pop(),19.2,0.4);m.put(chaching(),20.6,0.45)
# ---- C2 (23.0)
W(23.0);m.put(sting(),23.1,0.45);W(26.6);[m.put(tick(),26.7+i*0.25,0.6) for i in range(7)];m.put(dundun(),28.3,0.55);m.put(pop(),29.9,0.5)
W(31.9);[m.put(ding(1046+i*80,0.4),33.15+i*0.55,0.3) for i in range(6)]
W(36.4);m.put(pop(),37.2,0.5);m.put(ding(1318,0.5),37.5,0.3);m.put(pop(),38.6,0.5);m.put(ding(1568,0.5),38.9,0.3)
W(40.7);m.put(sadtrombone(),43.2,0.45);m.put(bonk(),43.6,0.5)
W(45.4);m.put(chaching(),46.5,0.45);m.put(chaching(),48.3,0.45)
W(50.4);m.put(poof(),52.3,0.6);m.put(shimmer(),52.4,0.5);m.put(pop(),53.3,0.4)
# ---- C3 (56.0)
W(56.0);m.put(sting(),56.1,0.45);W(58.8);m.put(pop(),58.8,0.5);m.put(pop(800),60.0,0.5);[m.put(tick(),60.8+i*0.3,0.6) for i in range(4)]
W(62.0);m.put(slide(200,1400,1.7),62.1,0.35);m.put(vineboom(),63.8,0.6)
W(64.8);[m.put(tick(),64.9+i*0.04*3,0.35) for i in range(14)];m.put(ding(1046),65.5,0.3)
W(67.2);[m.put(snore(),67.6+i*1.3,0.45) for i in range(3)];m.put(tick(),69.0,0.3)
W(72.0);m.put(recordscratch(),72.6,0.5);m.put(whoosh(0.4),73.5,0.3);m.put(bonk(),75.3,0.5)
W(77.8);[m.put(whoosh(0.35),78.4+i*0.45,0.3) for i in range(5)];[m.put(pop(300),78.95+i*0.45,0.4) for i in range(5)];m.put(airhorn(),81.7,0.45)
# ---- C4 (83.5)
W(83.5);m.put(sting(),83.6,0.4);m.put(engine(2.8),83.5,0.25);W(86.3);m.put(pop(),87.1,0.4);m.put(pop(),88.1,0.4);m.put(pop(800),89.1,0.4)
W(90.2);m.put(engine(3.4),90.2,0.3);W(93.6);m.put(chatter(0.6),94.5,0.2);W(96.9);m.put(engine(3.3),96.9,0.25)
W(100.2);m.put(growl(0.9),103.2,0.45);[m.put(bloop(0.5),103.3+i*0.28,0.35) for i in range(8)];m.put(boing(),103.7,0.45);m.put(ooh(),104.9,0.35)
W(106.5);m.put(pop(),106.8,0.4);m.put(slide(300,900,1.0),108.0,0.35);m.put(dundun(),108.8,0.5)
W(110.4);m.put(engine(3.0),110.4,0.35);m.put(whoosh(0.6),111.2,0.45);m.put(honk(),111.5,0.4)
# ---- C5 (113.5)
W(113.5);m.put(sting(),113.6,0.4);W(115.6);m.put(pop(),115.7,0.5);m.put(bonk(),116.3,0.45);m.put(pop(),117.1,0.5);m.put(pop(900),117.5,0.5);m.put(ding(1568),119.2,0.3)
W(122.7);m.put(siren(2.4),122.7,0.35);W(125.1);[m.put(pop(500+i*60),125.2+i*0.3,0.4) for i in range(6)]
W(127.9);[m.put(slide(500,900,0.25),128.4+i*0.8,0.25) for i in range(4)]
W(131.9);m.put(bonk(),134.4,0.5);m.put(sadtrombone(),135.5,0.45);W(136.5);m.put(ding(1318),138.4,0.3)
# ---- C6 (142.6)
W(142.6);m.put(sting(),142.7,0.4);m.put(siren(2.2),142.6,0.3);W(144.9);m.put(poof(),146.9,0.6);m.put(recordscratch(),147.0,0.45);m.put(dundun(),148.3,0.5)
W(149.5);[m.put(pop(600+i*100),152.9+i*0.8,0.5) for i in range(3)];[m.put(ding(1046+i*200,0.4),153.0+i*0.8,0.25) for i in range(3)]
W(156.0);[m.put(tick(),158.0+i*0.05,0.35) for i in range(7)];[m.put(tick(),159.0+i*0.05,0.35) for i in range(7)];[m.put(tick(),159.6+i*0.05,0.35) for i in range(7)]
W(160.7);m.put(pop(),162.2,0.5);[m.put(tick(),163.6+i*0.66,0.7) for i in range(3)]
W(165.6);[m.put(poof(),165.6+k*0.22,0.35) for k in range(5)];m.put(poof(),166.6,0.5);m.put(whoosh(0.4),167.9,0.3)
W(169.0);m.put(chop(7.2),169.0,0.3);m.put(siren(7.0),169.1,0.18);[m.put(pop(700+i*80),170.2+i*0.25,0.4) for i in range(6)];m.put(vineboom(),172.6,0.55);m.put(bruhnote(),174.5,0.45)
# ---- C7 (176.2)
W(176.2);m.put(sting(),176.3,0.4);m.put(chaching(),177.6,0.45);W(180.6);m.put(pop(),182.8,0.5);m.put(pop(),183.6,0.5)
W(185.7);m.put(slidewhistle(False),185.75,0.45);m.put(vineboom(),186.0,0.5);W(187.9);m.put(chaching(),189.6,0.45);m.put(ding(1318),190.8,0.3)
W(192.1);m.put(bonk(),193.0,0.45);W(195.7);m.put(shimmer(),195.8,0.45);m.put(vineboom(),199.2,0.5);m.put(pop(),200.1,0.4)
W(201.7);m.put(ding(1568),202.2,0.35);m.put(chaching(),202.5,0.4)
# ---- C8 (205.4)
W(205.4);m.put(sting(),205.5,0.4);W(208.6);[m.put(pop(500+i*100),t,0.45) for i,t in enumerate([209.8,210.0,211.0,211.2])];[m.put(whoosh(0.3),212.3+i*0.22,0.25) for i in range(6)]
W(214.6);m.put(engine(2.7),214.6,0.3);m.put(boing(),217.3,0.4);m.put(thud(),218.0,0.6);m.put(bonk(),218.05,0.4)
W(219.5);[m.put(munch(),221.7+i*0.25,0.4) for i in range(7)];m.put(slide(300,700,1.5),221.8,0.25)
W(224.5);[m.put(ding(1046+i*150,0.4),224.8+i*0.55,0.3) for i in range(3)];m.put(boing(),226.7,0.45)
W(227.7);m.put(slide(300,1200,1.6),228.0,0.3);W(230.6);[m.put(pop(500+i*90),230.7+i*0.18,0.35) for i in range(5)]
# ---- C9 (233.7)
W(233.7);m.put(sting(),233.8,0.4);W(239.0);[m.put(ding(1046+i*130,0.45),t,0.35) for i,t in enumerate([239.2,241.6,243.4,244.7,247.5])];m.put(chaching(),248.6,0.45)
W(250.3);[m.put(tick(),250.4+i*0.25,0.25) for i in range(28)];m.put(pop(),252.5,0.5);m.put(ding(1568),255.3,0.3)
W(257.3);m.put(munch(),257.8,0.45);m.put(ding(1318),258.8,0.3);W(260.1);m.put(shimmer(1.0),263.0,0.45);m.put(airhorn(),263.1,0.35)
m.save('w_gta6/sfx.wav')

import numpy as np,wave
SR=44100
class Mix:
    def __init__(s,T,seed=1):s.T=T;s.N=int(SR*T);s.out=np.zeros(s.N);s.mus=np.zeros(s.N);s.t=np.arange(s.N)/SR;s.rng=np.random.default_rng(seed)
    def put(s,x,at,g=1.0,mus=False):
        b=s.mus if mus else s.out;i=int(at*SR)
        if i>=s.N or i<0:return
        n=min(len(x),s.N-i);b[i:i+n]+=x[:n]*g
    def bed(s,gates=()):
        b=0.3;ch=[[261.6,329.6,392.0],[220.0,261.6,329.6],[174.6,220.0,261.6],[196.0,246.9,293.7]];bs=[65.4,55.0,43.65,49.0];i=0;tm=0
        while tm<s.T:
            bar=(i//8)%4;st=i%8;x=tt(0.3);s.put(np.sin(2*np.pi*ch[bar][[0,1,2,1,0,1,2,1][st]]*2*x)*np.exp(-x*13)*0.1,tm,1,True)
            if st%4==0:s.put(np.sin(2*np.pi*bs[bar]*2*tt(0.4))*np.exp(-tt(0.4)*6)*0.22,tm,1,True)
            tm+=b;i+=1
        g=np.ones(s.N)
        for a,b2,v in gates:g[(s.t>a)&(s.t<b2)]=v
        s.mus*=lp(g,3000)*np.minimum(1,s.t/0.5)*np.minimum(1,(s.T-s.t)/0.25)
    def save(s,fn):
        m=s.out*0.8+s.mus*0.5;m=m/np.abs(m).max()*0.8;w=wave.open(fn,'wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((m*32767).astype(np.int16).tobytes());w.close()
_r=np.random.default_rng(5)
tt=lambda d:np.arange(int(d*SR))/SR
lp=lambda x,k:np.convolve(x,np.ones(k)/k,'same')
nz=lambda d:_r.standard_normal(int(d*SR))
def env(d,a=0.005,dec=8):x=tt(d);return np.minimum(1,x/a)*np.exp(-dec*x)
def whoosh(d=0.5):x=tt(d);n=nz(d);m=np.linspace(0,1,len(x));return (lp(n,40)*(1-m)+lp(n,6)*m)*np.sin(np.pi*x/d)**2*1.3
def pop(f=600):x=tt(0.12);return np.sin(2*np.pi*np.cumsum(f*(1+2*np.exp(-x*60)))/SR)*env(0.12,0.002,30)
def bloop(p=1):x=tt(0.22);return np.sin(2*np.pi*np.cumsum((200+700*(1-np.exp(-x*25)))*p)/SR)*env(0.22,0.002,11)
def ding(f=1046.5,d=0.8):x=tt(d);return (np.sin(2*np.pi*f*x)+0.4*np.sin(4*np.pi*f*x))*env(d,0.002,5)*0.5
def shimmer(d=0.7):x=tt(d);return sum(np.sin(2*np.pi*f*x) for f in(1318,1760,2637))*env(d,0.02,3)*0.2
def munch():return lp(nz(0.11),5)*env(0.11,0.004,28)*0.9
def squish(d=0.5):x=tt(d);return lp(nz(d),14)*np.sin(np.pi*x/d)**2*(0.6+0.4*np.sin(2*np.pi*9*x))*1.2
def growl(d=0.9,echo=False):
    x=tt(d);f=55+18*np.sin(2*np.pi*3.1*x)+10*np.sin(2*np.pi*7.3*x);ph=2*np.pi*np.cumsum(f)/SR
    y=(np.sign(np.sin(ph))*0.4+np.sin(ph)*0.6)*(0.55+0.45*np.sin(2*np.pi*11*x+np.sin(2*np.pi*2*x)*3));y=lp(y,18)*np.sin(np.pi*x/d)**0.7*2.2+lp(nz(d),60)*np.sin(np.pi*x/d)*1.5
    if echo:
        z=np.zeros(len(y)+int(0.6*SR));z[:len(y)]+=y
        for k,dl in enumerate((0.18,0.36,0.54)):i=int(dl*SR);z[i:i+len(y)]+=y*0.5**(k+1)
        return z
    return y
def wind(d):x=tt(d);return lp(nz(d),50)*(0.6+0.4*np.sin(2*np.pi*0.7*x))*np.minimum(1,x/0.3)*np.minimum(1,(d-x)/0.3)*2.5
def chatter(d=0.8):
    y=np.zeros(int(d*SR));c=lp(nz(0.012),1)*env(0.012,0.0005,200)
    for k in range(int(d/0.06)):i=int(k*0.06*SR);y[i:i+len(c)]+=c*0.7
    return y
def stretch(d):x=tt(d);f=90+60*x/d;e=np.minimum(1,x/0.1)*np.minimum(1,(d-x)/0.2);return (np.sin(2*np.pi*np.cumsum(f)/SR+0.4*np.sin(2*np.pi*7*x))*0.5+lp(nz(d),30)*0.5)*e
def slide(f0=300,f1=1200,d=0.35):x=tt(d);return np.sin(2*np.pi*np.cumsum(np.linspace(f0,f1,len(x)))/SR)*np.sin(np.pi*x/d)*0.35
def poof():x=tt(0.5);return lp(nz(0.5),10)*env(0.5,0.02,6)*1.5
def sting():x=tt(0.5);return (np.sin(2*np.pi*233*x)+np.sin(2*np.pi*277*x))*env(0.5,0.005,5)*0.4

def teeth(d=1.0,rate=15):
    y=np.zeros(int(d*SR));x=tt(0.03)
    for k in range(int(d*rate)):
        c=(lp(nz(0.03),1)*0.6+np.sin(2*np.pi*(2300 if k%2 else 3100)*x)*0.7+np.sin(2*np.pi*900*x)*0.3)*env(0.03,0.0004,170);i=int((k/rate+_r.uniform(0,0.008))*SR)
        if i+len(c)<len(y):y[i:i+len(c)]+=c*_r.uniform(0.7,1.0)
    return y

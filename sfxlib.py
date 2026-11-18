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

# ---------- MEME-STYLE SFX (original synthesized versions, copyright-safe) ----------
def _rev(x,taps=((0.05,0.5),(0.11,0.35),(0.19,0.22),(0.31,0.12))):
    y=np.concatenate([x,np.zeros(int(0.5*SR))])
    for d,g in taps:i=int(d*SR);y[i:i+len(x)]+=x*g
    return y
def vineboom():
    """deep 'boom' hit for dramatic reveals / punchlines"""
    x=tt(1.2);f=55*np.exp(-x*1.5)+38;y=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-x*2.6)+0.5*np.tanh(3*np.sin(2*np.pi*np.cumsum(f*2)/SR))*np.exp(-x*5)
    y+=lp(nz(1.2),30)*np.exp(-x*20)*0.6;return _rev(y*1.2)
def recordscratch():
    """DJ record scratch for 'wait, what?' moments"""
    d=0.45;x=tt(d);sp=np.sin(2*np.pi*3.2*x);n=lp(nz(d),2)*(0.4+0.6*np.abs(sp));f=300+900*np.abs(sp);return (n*0.7+np.sin(2*np.pi*np.cumsum(f)/SR)*0.25)*np.sin(np.pi*x/d)
def airhorn(d=0.9):
    """party air horn (3 quick blasts) for hype moments"""
    out=np.zeros(int(SR*(d+0.6)))
    for k,(st,ln) in enumerate([(0,0.16),(0.22,0.16),(0.44,d-0.44)]):
        x=tt(ln);y=sum(np.sign(np.sin(2*np.pi*f*x))*a for f,a in ((440,0.5),(554,0.35),(659,0.3)));y=lp(y,6)*np.minimum(1,x/0.01)*np.minimum(1,(ln-x)/0.03)
        i=int(st*SR);out[i:i+len(y)]+=y*0.5
    return out
def sadtrombone():
    """wah-wah-wah-waaah fail sound"""
    out=np.zeros(int(SR*2.4));notes=[(0,0.38,311),(0.42,0.38,294),(0.84,0.38,277),(1.26,1.0,262)]
    for st,ln,f in notes:
        x=tt(ln);vib=1+0.02*np.sin(2*np.pi*6*x)*(x>0.3);ph=2*np.pi*np.cumsum(f*vib)/SR;y=(np.sin(ph)+0.5*np.sin(2*ph)+0.3*np.sin(3*ph))*np.minimum(1,x/0.03)*np.minimum(1,(ln-x)/0.08)
        y*=0.6+0.4*np.sin(np.pi*np.minimum(1,x/0.15));i=int(st*SR);out[i:i+len(y)]+=y*0.35
    return out
def bonk():
    """cartoon bonk on the head"""
    x=tt(0.35);return (np.sin(2*np.pi*np.cumsum(900*np.exp(-x*8)+300)/SR)*0.7+np.sin(2*np.pi*1650*x)*0.3)*env(0.35,0.001,14)
def chaching():
    """cash register 'cha-ching' for money moments"""
    a=lp(nz(0.12),3)*env(0.12,0.001,40)*0.6;x=tt(0.9);b=(np.sin(2*np.pi*2093*x)+0.6*np.sin(2*np.pi*3136*x)+0.3*np.sin(2*np.pi*4186*x))*env(0.9,0.002,4)*0.4
    out=np.zeros(int(SR*1.1));out[:len(a)]+=a;i=int(0.12*SR);out[i:i+len(b)]+=b;return out
def dundun():
    """dramatic 'dun dun DUNNN' sting"""
    out=np.zeros(int(SR*2.2))
    for st,ln,f in [(0,0.25,98),(0.3,0.25,92.5),(0.62,1.5,87.3)]:
        x=tt(ln);ph=2*np.pi*f*x;y=np.tanh(2*(np.sin(ph)+0.6*np.sin(2*ph)+0.4*np.sin(3*ph)+0.3*np.sin(1.5*ph)))*np.exp(-x*(4 if ln<1 else 1.6))*np.minimum(1,x/0.005)
        i=int(st*SR);out[i:i+len(y)]+=y*0.45
    return out
def boing():
    """springy cartoon boing"""
    x=tt(0.6);f=180+120*np.sin(2*np.pi*14*x)*np.exp(-x*5);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(0.6,0.002,5)*0.6
def slidewhistle(up=True,d=0.6):
    """slide whistle going up (or down) for jumps/falls"""
    x=tt(d);f=np.linspace(500,1800,len(x)) if up else np.linspace(1800,500,len(x));return np.sin(2*np.pi*np.cumsum(f)/SR)*np.sin(np.pi*x/d)*0.4*(1+0.05*np.sin(2*np.pi*7*x))
def honk():
    """clown/car horn honk"""
    x=tt(0.3);ph=2*np.pi*370*x;return lp(np.sign(np.sin(ph))+0.5*np.sign(np.sin(1.5*ph)),5)*np.minimum(1,x/0.01)*np.minimum(1,(0.3-x)/0.04)*0.35
def ooh():
    """crowd 'ooooh' reaction (synth choir)"""
    d=1.4;x=tt(d);y=sum(np.sin(2*np.pi*f*(1+0.004*k)*x+k) for k,f in enumerate((220,277,330,247,311)))
    y=lp(y*(0.6+0.4*np.sin(2*np.pi*5*x)),20);fm=1-0.15*x/d;return y*np.minimum(1,x/0.15)*np.minimum(1,(d-x)/0.4)*0.15
def bruhnote():
    """low deadpan 'bruh'-style vocal-ish grunt (synth, not a sample)"""
    x=tt(0.5);f=110-25*x;ph=2*np.pi*np.cumsum(f)/SR;y=np.tanh(3*np.sin(ph))*(0.6+0.4*np.sin(2*np.pi*28*x));return lp(y,12)*np.minimum(1,x/0.02)*np.minimum(1,(0.5-x)/0.15)*0.6

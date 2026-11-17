const TT=17.3,BGS={space:'radial-gradient(circle at 50% 40%,#1A2350,#05070F 75%)',sky:'linear-gradient(#5DB7FF,#BFE6FF 70%,#E8F6FF)',day:'linear-gradient(#FFB347,#FFE08A 45%,#BFE6FF)'};
const guy=makeYRG();const holder=new THREE.Group();guy.root.position.y=-1.1;holder.add(guy.root);
function proj(v,cam){const p=v.clone().project(cam);return [(p.x+1)/2*W,(1-p.y)/2*H]}
// ---------- Globe scene ----------
const S=new THREE.Scene();lights(S);const R=3;
const tc=document.createElement('canvas');tc.width=1024;tc.height=512;{const c=tc.getContext('2d');c.fillStyle='#3E86DE';c.fillRect(0,0,1024,512);c.fillStyle='#5CC25A';
  for(let i=0;i<26;i++){const x=hash(i*3.3)*1024,y=60+hash(i*5.9)*390,rx=40+hash(i*1.7)*110,ry=25+hash(i*8.1)*70;c.beginPath();c.ellipse(x,y,rx,ry,hash(i)*3,0,7);c.fill()}
  }
const tex=new THREE.CanvasTexture(tc);tex.colorSpace=THREE.SRGBColorSpace;
const globe=new THREE.Group();S.add(globe);const gg=new THREE.SphereGeometry(R,72,48);gg.rotateX(Math.PI/2);
part(globe,gg,new THREE.MeshToonMaterial({map:tex,gradientMap:toon(0).gradientMap}),[0,0,0],[1,1,1],[0,0,0],0.03);
const trees=[];for(const [ph,s,kind] of [[0.05,1,0],[-0.25,0.8,0],[0.62,1.1,0],[-0.6,1,1],[0.95,0.9,0],[-0.95,1.2,0],[1.3,1,1],[-1.3,0.9,0],[0.35,0.7,0],[-0.42,0.6,0]]){
  const a=new THREE.Group();a.position.set(-Math.sin(ph)*R,Math.cos(ph)*R,0.2-hash(ph*9)*0.5);a.rotation.z=ph;globe.add(a);const b=new THREE.Group();a.add(b);
  if(kind===0){part(b,cap(0.06,0.4),toon(0x8A5A2B),[0,0.25,0],[s,s,s]);part(b,SPH,toon(0x3FA34D),[0,0.75*s,0],[0.32*s,0.4*s,0.32*s])}
  else{part(b,new THREE.BoxGeometry(0.6,0.45,0.5),toon(0xFFF1D6),[0,0.22*s,0],[s,s,s]);part(b,new THREE.ConeGeometry(0.5,0.35,4),toon(0xD9534F),[0,0.62*s,0],[s,s,s],[0,Math.PI/4,0])}
  trees.push(b)}
{const n=500,p=new Float32Array(n*3);for(let i=0;i<n;i++){p[i*3]=(hash(i*1.1)-0.5)*60;p[i*3+1]=(hash(i*2.3)-0.5)*70;p[i*3+2]=-25}const ge=new THREE.BufferGeometry();ge.setAttribute('position',new THREE.BufferAttribute(p,3));S.add(new THREE.Points(ge,new THREE.PointsMaterial({color:0xffffff,size:3,sizeAttenuation:false})))}
const camS=new THREE.PerspectiveCamera(30,W/H,0.1,80);const START={p:[0,2.6,15],l:[0,2.6,0]};
const w=0.16,PH=0.3,GS=0.75,OFF=1.1*GS;
function rotAt(t){if(t<3.9)return -w*t;if(t<4.1){const d=t-3.9;return -w*(3.9+d-d*d/0.4)}return -w*4.0}
function onGlobe(phi,rot,lift=0,tilt=0){const a=phi+rot,rr=R+OFF+lift;holder.position.set(-Math.sin(a)*rr,Math.cos(a)*rr,0.6);holder.rotation.set(0,0,a+tilt)}
function globeShot(rot,cam,shake=0){globe.rotation.z=rot;S.add(holder);holder.scale.setScalar(GS);for(const [i,b] of trees.entries())b.rotation.z=shake*Math.sin(i+shake*40)*0.5;bg.style.background=BGS.space;camS.position.set(...cam.p);camS.lookAt(...cam.l);r.render(S,camS)}
// ---------- Flying scene ----------
const F=new THREE.Scene();lights(F);const camF=new THREE.PerspectiveCamera(30,W/H,0.1,60);camF.position.set(0,0,9);camF.lookAt(0,0,0);
const clouds=[];for(let i=0;i<9;i++){const c=new THREE.Group();const z=-7+hash(i*4.4)*8;c.position.set(0,(hash(i*7.1)-0.5)*9,z);F.add(c);for(let j=0;j<4;j++)part(c,SPH,toon(0xffffff),[j*0.55-0.8,Math.sin(j*2)*0.15,0],[0.55+0.2*hash(i+j),0.4+0.15*hash(j*3+i),0.4],[0,0,0],0.02);clouds.push({c,sp:1+hash(i*9.9)*1.5,o:hash(i*2.7)*20})}
// ---------- Day scene ----------
const D=new THREE.Scene();lights(D);part(D,new THREE.CircleGeometry(16,64),toon(0xC9B26A),[0,0,0],[1,1,1],[-Math.PI/2,0,0],0);
for(const [x,z,s] of [[-2.6,-1.5,1],[2.9,-2.4,1.3],[-3.4,1.2,0.8],[3.6,0.8,0.9]])part(D,SPH,toon(0xB89A55),[x,0.12*s,z],[0.5*s,0.25*s,0.5*s],[0,0,0],0.012);
const camD=new THREE.PerspectiveCamera(30,W/H,0.1,60);camD.position.set(0,2.4,13);camD.lookAt(0,1.5,0);
// ---------- 2D bits ----------
function stars(t){for(let i=0;i<90;i++){g.fillStyle=`rgba(255,255,255,${0.3+0.6*Math.abs(Math.sin(t*2+i))})`;g.beginPath();g.arc(hash(i*3.1)*W,hash(i*7.7)*H,1.5+hash(i)*2.5,0,7);g.fill()}}
function speedo(v){const s=Math.round(v/10)*10;g.save();g.translate(W/2,250);g.fillStyle='rgba(10,12,25,0.85)';rr(-330,-85,660,170,40);g.fill();g.strokeStyle='#FFD23F';g.lineWidth=6;g.stroke();txt(s.toLocaleString('en-US'),40,-6,104,{stroke:0,align:'right'});txt('MPH',70,8,56,{stroke:0,fill:'#FFD23F',align:'left'});g.restore()}
function hstreaks(t,a){g.save();g.lineCap='round';for(let i=0;i<40;i++){const y=hash(i*3.7)*H,len=120+hash(i*5.1)*300,x=((hash(i*9.3)*W- t*(2600+hash(i)*1800))%(W+600)+W+600)%(W+600)-300;g.strokeStyle=`rgba(255,255,255,${a*(0.3+0.5*hash(i*2.2))})`;g.lineWidth=4+hash(i*8)*6;g.beginPath();g.moveTo(x,y);g.lineTo(x+len,y);g.stroke()}g.restore()}
function arrow(x0,y0,x1,y1,c,wd=26){const a=Math.atan2(y1-y0,x1-x0);g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=wd+14;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1-Math.cos(a)*30,y1-Math.sin(a)*30);g.stroke();g.strokeStyle=c;g.lineWidth=wd;g.stroke();
  g.translate(x1,y1);g.rotate(a);g.beginPath();g.moveTo(16,0);g.lineTo(-52,-44);g.lineTo(-52,44);g.closePath();g.lineJoin='round';g.lineWidth=12;g.strokeStyle='#111';g.stroke();g.fillStyle=c;g.fill();g.restore()}
function oceanGlobe(t,k){const cx=W/2,cy=880,R2=390;stars(t);g.save();g.shadowColor='rgba(110,180,255,0.6)';g.shadowBlur=50;g.fillStyle='#5CC25A';g.beginPath();g.arc(cx,cy,R2,0,7);g.fill();g.restore();
  g.save();g.beginPath();g.arc(cx,cy,R2,0,7);g.clip();g.fillStyle='#4A9A48';for(let i=0;i<14;i++){g.beginPath();g.ellipse(cx+(hash(i*2.1)-0.5)*700,cy+(hash(i*4.3)-0.5)*500,40+hash(i)*60,20+hash(i*7)*30,0,0,7);g.fill()}
  // equator ocean draining
  g.globalAlpha=1-k;g.fillStyle='#3E86DE';g.fillRect(cx-R2,cy-R2*0.78,2*R2,R2*1.56);g.globalAlpha=1;
  g.fillStyle='#5CC25A';for(let i=0;i<9;i++){g.beginPath();g.ellipse(cx+(hash(i*6.6)-0.5)*640,cy+(hash(i*1.9)-0.5)*560,60+hash(i*3)*80,30+hash(i*5)*40,hash(i)*3,0,7);g.fill()}
  // pole caps of water growing
  const hc=R2*(0.22+0.55*ease(k));g.fillStyle='#3E86DE';for(const s of [-1,1]){g.beginPath();const y0=cy+s*R2,y1=cy+s*(R2-hc);g.moveTo(cx-R2,y0);for(let x=-R2;x<=R2;x+=10)g.lineTo(cx+x,y1+Math.sin(x*0.03+t*9*s)*14*(0.3+k));g.lineTo(cx+R2,y0);g.closePath();g.fill()}
  g.fillStyle='#E9F4FF';g.fillRect(cx-R2,cy-R2,2*R2,R2*0.12);g.fillRect(cx-R2,cy+R2*0.88,2*R2,R2*0.12);g.restore();
  g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(cx,cy,R2,0,7);g.stroke();
  g.setLineDash([18,14]);g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=5;g.beginPath();g.moveTo(cx-R2,cy);g.lineTo(cx+R2,cy);g.stroke();g.setLineDash([]);
  txt('EQUATOR',cx+R2-110,cy-28,30,{sw:8,w:800});txt('NORTH POLE',cx,cy-R2-44,34,{sw:9,w:800});txt('SOUTH POLE',cx,cy+R2+44,34,{sw:9,w:800});
  const a=easeOut(seg(t,10.6,11.2)),wob=Math.sin(t*10)*8;if(a>0){g.save();g.globalAlpha=a;for(const [dx,s] of [[-150,-1],[150,-1],[-150,1],[150,1]])arrow(cx+dx,cy+s*40,cx+dx*1.1,cy+s*(40+170*a)+s*wob,'#7FD3FF');g.restore()}}
function calendar(t,m){const M=['JAN','FEB','MAR','APR','MAY','JUN'];g.save();g.translate(W/2,330);const flip=(m%1),cur=Math.min(5,Math.floor(m));g.fillStyle='rgba(0,0,0,0.3)';rr(-190,-110,380,250,30);g.fill();g.fillStyle='#fff';rr(-200,-120,400,250,30);g.fill();g.lineWidth=7;g.strokeStyle='#111';g.stroke();
  g.fillStyle='#E8453C';rr(-200,-120,400,80,30);g.fill();g.fillRect(-200,-70,400,30);g.stroke();txt('DAY 1',0,-80,44,{stroke:0});txt(M[cur],0,50,120,{stroke:0,fill:'#111'});
  if(cur<5&&flip>0.6){const k=(flip-0.6)/0.4;g.save();g.scale(1,1-k);g.fillStyle='#f4f4f4';rr(-200,-40,400,170,20);g.fill();g.strokeStyle='#111';g.stroke();g.restore()}g.restore()}
function sun(t,x,y,R2){g.save();g.translate(x,y);g.rotate(t*0.6);g.fillStyle='rgba(255,210,63,0.35)';for(let i=0;i<12;i++){g.rotate(Math.PI/6);g.beginPath();g.moveTo(-28,R2*0.9);g.lineTo(0,R2*1.6);g.lineTo(28,R2*0.9);g.fill()}g.restore();
  const gl=g.createRadialGradient(x,y,R2*0.5,x,y,R2*2.4);gl.addColorStop(0,'rgba(255,240,150,0.7)');gl.addColorStop(1,'rgba(255,240,150,0)');g.fillStyle=gl;g.fillRect(0,0,W,H);g.fillStyle='#FFE14D';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(x,y,R2,0,7);g.fill();g.stroke()}
function sweatAt(t,x,y){for(let i=0;i<6;i++){const ph=(t*1.3+i/6)%1,a=-Math.PI/2+(i/5-0.5)*2.4;g.fillStyle=`rgba(140,215,255,${1-ph})`;g.beginPath();g.arc(x+Math.cos(a)*(120+ph*140),y+Math.sin(a)*(120+ph*140)+ph*60,10,0,7);g.fill()}}
const E0=new THREE.Scene();
const OPEN=(t,blink)=>({mouth:'smile',blink,look:t>1.9&&t<3.4?-0.3:0,lookY:t>1.9&&t<3.4?-0.6:0});
window.render=function(t){g.clearRect(0,0,W,H);const blink=(t%2.9)<0.1;
  if(t<5.9){const rot=rotAt(t);let o=OPEN(t,blink),lift=0,tilt=0,shake=t>3.95&&t<4.8?Math.exp(-(t-3.95)*4)*0.6:0;let cam=START;
    if(t>=3.95){const k=seg(t,3.95,4.25);o={mouth:'o',wide:true,mouthSize:1.3,brow:0.03,look:0.6,armL:[0.28+1.4*k,0],armR:[0.28+1.6*k,0.3*k]};tilt=-0.35*easeOut(k)-0.04*Math.sin(t*30)*(1-seg(t,4.3,4.9))}
    if(t<4.9)onGlobe(PH,rot,0,tilt);
    if(t>=4.9){const u=seg(t,4.9,5.9),a=PH+rot;onGlobe(PH,rot,0,0);const bx=holder.position.x,by=holder.position.y;holder.position.set(bx+u*7.5*easeOut(u),by+u*2.2,0.6);holder.rotation.set(0,0,a-0.35-u*5);o={mouth:'o',wide:true,mouthSize:1.6,armL:[2.8,0.2],armR:[2.8,-0.2],legL:[0.6,0.4,0],legR:[-0.2,0.2,0]}}
    if(t>4.9)cam={p:[START.p[0]+1.0*ease(seg(t,4.9,5.9)),2.6,15],l:[0.8*ease(seg(t,4.9,5.9)),2.6,0]};
    guy.pose(o);globeShot(rot,cam,shake);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,3.0,3.3));if(a>0){g.save();g.globalAlpha=a;txt('WHAT WOULD HAPPEN IF',W/2,215,62,{sw:15});txt('THE EARTH SUDDENLY',W/2,310,84,{fill:'#FFD23F',sw:20});txt('STOPPED SPINNING?',W/2,410,84,{fill:'#FFD23F',sw:20});g.restore()}
    comic('SCREEECH!',W*0.5,560,118,t,3.95,{life:0.9,rot:-0.06,fill:'#FF5A3C'});pill('THE GROUND STOPS...',W/2,330,50,'#fff','#111',t,4.0,4.85);pill('...YOU DON\'T',W/2,330,56,'#FFD23F','#111',t,4.95,5.85);comic('WHOA!',W*0.74,700,110,t,5.05,{life:0.7,rot:0.1,fill:'#fff'});
    if(t>3.95&&t<4.25){g.save();g.translate(Math.sin(t*90)*14,0);g.restore()}flash(t,3.95,0.12)}
  else if(t<10.3){const k=seg(t,5.9,10.3);bg.style.background=BGS.sky;for(const c of clouds){c.c.position.x=((7-((t*4*c.sp+c.o)%16))+16)%16-8}
    F.add(holder);holder.scale.setScalar(1);holder.position.set(Math.sin(t*2.1)*0.15,0.2+Math.sin(t*3.3)*0.12,0);holder.rotation.set(0,0,-Math.PI/2+0.08*Math.sin(t*4));
    guy.pose({mouth:t<7.9?'o':'grin',wide:true,mouthSize:1.4,armL:[2.95,0.1+0.1*Math.sin(t*9)],armR:[2.95,-0.1-0.1*Math.cos(t*9)],legL:[0.15+0.12*Math.sin(t*12),0.2,0],legR:[-0.1-0.12*Math.sin(t*12),0.2,0],blink:false,brow:0.02});
    r.render(F,camF);hstreaks(t,0.75);speedo(Math.min(1000,1000*easeOut(seg(t,6.0,9.2))));
    pill('AT THE EQUATOR',W/2,430,46,'#fff','#111',t,6.1,7.6);pill('EAST →',W/2,430,56,'#FFD23F','#111',t,7.7,8.9);pill('FASTER THAN A JET',W/2,430,44,'#FF5A3C','#fff',t,9.0,10.25);comic('WHEEE!',W*0.28,1150,110,t,8.0,{life:0.9,rot:-0.1,fill:'#fff'});flash(t,5.9,0.2)}
  else if(t<12.95){bg.style.background=BGS.space;r.render(E0,camF);const k=seg(t,10.5,12.7);oceanGlobe(t,k);pill('OCEANS RUSH TO THE POLES',W/2,250,46,'#7FD3FF','#111',t,10.4,12.9);comic('SLOSH!',W*0.76,560,110,t,11.1,{life:0.8,rot:0.12,fill:'#fff'});flash(t,10.3,0.2)}
  else if(t<15.55){bg.style.background=BGS.day;D.add(holder);holder.scale.setScalar(1);holder.position.set(0,1.1,0);holder.rotation.set(0,0,0);const k=seg(t,12.95,15.55);
    guy.pose({mouth:t<14.4?'flat':'o',mouthSize:1.2,brow:-0.02+0.04*seg(t,14.3,14.6),lookY:0.7,look:0.5,headPitch:-0.25,blink:false,armR:[0.45,0],armL:[0.45,0],squash:0.03*Math.sin(t*2)});
    camD.position.set(0,2.4,lerp(13,11.5,k));camD.lookAt(0,1.5,0);r.render(D,camD);sun(t,W*0.82,230,95);const hp=proj(new THREE.Vector3(0,2.0,0),camD);sweatAt(t,hp[0],hp[1]);
    calendar(t,Math.min(5.99,5.99*easeOut(seg(t,13.2,15.2))));pill('1 DAY = 6 MONTHS',W/2,560,56,'#FFD23F','#111',t,13.3,15.5);comic('STILL DAY?!',W*0.3,1180,90,t,14.5,{life:1.0,rot:-0.08,fill:'#fff'});flash(t,12.95,0.2)}
  else{const rot=-w*(t-TT),u=seg(t,15.6,16.45);let lift=u<1?lerp(7,0,u*u):0;const land=seg(t,16.45,17.0);
    onGlobe(PH,rot,lift,0);let o;if(u<1)o={mouth:'o',wide:true,armL:[2.7,0],armR:[2.7,0],legL:[0.3,0.5,0],legR:[0.1,0.3,0]};else{const b=Math.sin(land*Math.PI)*(1-land);o={...OPEN(t-TT,blink),mouth:land<0.5?'grin':'smile',squash:0.12*b,armL:[0.28+0.8*(1-ease(seg(t,16.45,17.1))),0],armR:[0.28+0.8*(1-ease(seg(t,16.45,17.1))),0]}}
    guy.pose(o);const k=ease(seg(t,15.55,16.8));globeShot(rot,{p:mix([0,4.5,20],START.p,k),l:mix([0,2.2,0],START.l,k)},0);comic('THUD!',W*0.3,700,110,t,16.45,{life:0.6,rot:-0.1,fill:'#fff'});flash(t,15.55,0.15)}
  const vg=g.createRadialGradient(W/2,H/2,H*0.35,W/2,H/2,H*0.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.3)');g.fillStyle=vg;g.fillRect(0,0,W,H);captions(t)};
function mix(p,q,c){return p.map((v,i)=>lerp(v,q[i],c))}

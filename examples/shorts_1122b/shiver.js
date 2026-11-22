// ===== Why do you shiver when you're cold? (body/everyday) =====
const TT=21.05;
const CU={c1:3.2,c2:5.68,c3:9.0,c4:12.25,c5:16.85,c6:19.28};
guy.outfit({beanie:1,bandana:1});
const SNOWBG='linear-gradient(#5D7FB8 0%,#9DB8DE 50%,#DCE8F6 100%)';
// ---- snowy park ----
const N={S:new THREE.Scene()};lights(N.S);N.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
N.shot=(p,l,b=SNOWBG)=>{N.cam.position.set(...p);N.cam.lookAt(...l);setBG(b);r.setClearColor(0,0);r.render(N.S,N.cam)};
N.S.fog=new THREE.Fog(0xC9D8EE,20,70);
part(N.S,new THREE.PlaneGeometry(300,300),toon(0xF2F6FC),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<26;i++){const x=(hash(i*3.1)-0.5)*40,z=-4-hash(i*5.3)*30;part(N.S,SPH,toon(0xFFFFFF),[x,-0.2,z],[1.5+hash(i)*2,0.7,1.2+hash(i*2)],[0,hash(i)*3,0],0.01)}
for(let i=0;i<22;i++){const x=(hash(i*7.7)-0.5)*44,z=-6-hash(i*2.3)*28;if(Math.abs(x)<3&&z>-9)continue;const p=new THREE.Group();p.position.set(x,0,z);const s=1+hash(i*9)*0.8;p.scale.setScalar(s);N.S.add(p);
  part(p,cap(0.18,1.0),toon(0x6B4426),[0,0.5,0]);for(let k=0;k<3;k++){part(p,new THREE.ConeGeometry(1.3-k*0.32,1.5,10),toon(0x1F5B45),[0,1.4+k*0.85,0],[1,1,1],[0,0,0],0.015);part(p,new THREE.ConeGeometry(0.9-k*0.25,0.5,10),toon(0xFFFFFF),[0,1.95+k*0.85,0],[1,1,1],[0,0,0],0)}}
// bench + lamp post
const BN=new THREE.Group();BN.position.set(-2.4,0,-1.2);N.S.add(BN);part(BN,new THREE.BoxGeometry(2.4,0.1,0.6),toon(0x9C6B3E),[0,0.55,0],[1,1,1],[0,0,0],0.01);part(BN,new THREE.BoxGeometry(2.4,0.5,0.08),toon(0x9C6B3E),[0,0.9,-0.28],[1,1,1],[0,0,0],0.01);part(BN,new THREE.BoxGeometry(2.4,0.08,0.62),toon(0xFFFFFF),[0,0.62,0],[1,1,1],[0,0,0],0);for(const x of [-1,1])part(BN,new THREE.BoxGeometry(0.08,0.55,0.5),toon(0x2A2A35),[x,0.27,0],[1,1,1],[0,0,0],0);
const LP=new THREE.Group();LP.position.set(2.3,0,-1.8);N.S.add(LP);part(LP,cap(0.06,3.4),toon(0x2A2A35),[0,1.8,0]);part(LP,SPH,basic(0xFFE7A0),[0,3.6,0],[0.25,0.3,0.25],[0,0,0],0.01);part(LP,new THREE.ConeGeometry(0.35,0.25,12),toon(0x2A2A35),[0,3.95,0],[1,1,1],[0,0,0],0.006);
// snowman (generic)
const SM=new THREE.Group();SM.position.set(4.6,0,-3.5);N.S.add(SM);part(SM,SPH,toon(0xFFFFFF),[0,0.7,0],[0.75,0.7,0.75],[0,0,0],0.015);part(SM,SPH,toon(0xFFFFFF),[0,1.65,0],[0.5,0.48,0.5],[0,0,0],0.015);part(SM,SPH,toon(0xFFFFFF),[0,2.3,0],[0.34,0.33,0.34],[0,0,0],0.012);part(SM,new THREE.ConeGeometry(0.06,0.35,10),toon(0xFF8A2B),[0,2.3,0.45],[1,1,1],[PI/2,0,0],0.004);for(const s of [-1,1])part(SM,SPH,basic(0x111111),[s*0.11,2.4,0.3],[0.04,0.04,0.04],[0,0,0],0);
// falling snow
const SNN=600,snowPos=new Float32Array(SNN*3);const snowG=new THREE.BufferGeometry();snowG.setAttribute('position',new THREE.BufferAttribute(snowPos,3));
const SNOW=new THREE.Points(snowG,new THREE.PointsMaterial({color:0xffffff,size:7,sizeAttenuation:false,transparent:true,opacity:0.9}));N.S.add(SNOW);
function snow(tau){for(let i=0;i<SNN;i++){const h=9;let y=(hash(i*1.3)*h-tau*(0.6+0.4*hash(i*2.1)))%h;if(y<0)y+=h;snowPos[i*3]=(hash(i*3.7)-0.5)*18+0.3*Math.sin(tau+i);snowPos[i*3+1]=y;snowPos[i*3+2]=(hash(i*5.9)-0.5)*14}snowG.attributes.position.needsUpdate=true}
const SHAKE=(t,a=0.025)=>a*Math.sin(t*67)+a*0.6*Math.sin(t*41+1);
function shiverGuy(t,o={}){N.S.add(holder);holder.position.set(0.1+SHAKE(t),SHAKE(t+3,0.012),0.6);holder.rotation.set(0,0.12,SHAKE(t+7,0.02));holder.scale.setScalar(1);
  guy.pose({reachL:[-0.32,1.18,0.48],reachR:[0.32,1.12,0.5],mouth:(Math.floor(t*12)%2)?'teeth':'o',mouthSize:0.5,blink:BLINK(t),headRoll:SHAKE(t+11,0.04),...o})}
// ---- 2D ----
function brain(t,a){if(a<=0)return;g.save();g.globalAlpha=a;g.fillStyle='#1E2A4A';g.fillRect(0,0,W,H);
  const cx=W/2,cy=820,sc=easeOut(a);g.translate(cx,cy);g.scale(sc,sc);
  g.fillStyle='#FF9DB8';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.ellipse(0,0,360,260,0,0,7);g.fill();g.stroke();
  g.strokeStyle='#D96A8C';g.lineWidth=10;g.lineCap='round';for(let i=0;i<7;i++){g.beginPath();const y=-180+i*55;g.moveTo(-300+Math.abs(i-3)*30,y);for(let k=0;k<6;k++)g.quadraticCurveTo(-250+k*100+Math.abs(i-3)*20,y+(k%2?40:-40),-200+k*100+Math.abs(i-3)*20,y);g.stroke()}
  g.fillStyle='#E07A98';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(250,170,110,70,-0.2,0,7);g.fill();g.stroke();
  const pulse=1+0.15*Math.sin(t*8);g.fillStyle='#FFB347';g.beginPath();g.arc(0,150,34*pulse,0,7);g.fill();g.stroke();g.restore();
  // thermostat dial
  const k=pop(t,3.9);if(k>0){g.save();g.globalAlpha=a;g.translate(W/2,1250);g.scale(k,k);g.fillStyle='#F4F4F8';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,130,0,7);g.fill();g.stroke();
    g.strokeStyle='#3FA9FF';g.lineWidth=20;g.beginPath();g.arc(0,0,95,PI*0.75,PI*1.5);g.stroke();g.strokeStyle='#FF4A4A';g.beginPath();g.arc(0,0,95,PI*1.5,PI*2.25);g.stroke();
    const ang=PI*1.5-0.6*seg(t,4.6,5.4);g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(ang)*80,Math.sin(ang)*80);g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,0,14,0,7);g.fill();g.restore();
    g.save();g.globalAlpha=a;g.strokeStyle='#FFB347';g.lineWidth=8;g.setLineDash([16,12]);g.beginPath();g.moveTo(W/2,970);g.lineTo(W/2,1110);g.stroke();g.restore()}
  txt('YOUR BRAIN\'S',W/2,330,66,{sw:13});txt('THERMOSTAT',W/2,420,90,{fill:'#FFB347',sw:18})}
function thermo(x,y,f){g.save();g.translate(x,y);g.fillStyle='#F4F4F8';g.strokeStyle='#111';g.lineWidth=10;rr(-34,-260,68,300,34);g.fill();g.stroke();g.beginPath();g.arc(0,70,58,0,7);g.fill();g.stroke();
  g.fillStyle='#3FA9FF';g.beginPath();g.arc(0,70,42,0,7);g.fill();const h=lerp(240,90,f);rr(-16,40-h,32,h,16);g.fill();for(let i=0;i<6;i++){g.fillStyle='#111';g.fillRect(18,-220+i*40,16,6)}g.restore()}
function bolt(x0,y0,x1,y1,t,c='#FFE14D'){g.save();g.strokeStyle='#111';g.lineWidth=16;g.lineJoin='round';const pts=[];const n=6;for(let i=0;i<=n;i++){const k=i/n;pts.push([lerp(x0,x1,k)+(i%2?1:-1)*(i&&i<n?26:0)*Math.sin(t*20+i),lerp(y0,y1,k)])}
  g.beginPath();pts.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.strokeStyle=c;g.lineWidth=8;g.stroke();g.restore()}
function fibers(x,y,R,t,a){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);g.fillStyle='#3A0E1E';g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle='#FFD23F';g.lineWidth=8;g.stroke();
  g.save();g.beginPath();g.arc(0,0,R-12,0,7);g.clip();const sq=0.18*Math.abs(Math.sin(t*22));for(let i=0;i<7;i++){const yy=-R+40+i*((2*R-80)/6);const len=R*1.7*(1-sq);g.fillStyle=i%2?'#E2445E':'#C8304A';g.strokeStyle='#111';g.lineWidth=6;rr(-len/2,yy-22,len,44,22);g.fill();g.stroke();
    g.strokeStyle='rgba(255,255,255,0.35)';g.lineWidth=4;for(let k=-3;k<=3;k++){g.beginPath();g.moveTo(k*len/8,yy-14);g.lineTo(k*len/8,yy+14);g.stroke()}}g.restore();
  for(const s of [-1,1]){g.save();g.translate(s*(R+60),0);g.scale(s,1);arrowMini(0,0,t);g.restore()}g.restore()}
function arrowMini(x,y,t){const k=Math.sin(t*22)>0?1:-1;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(-30*k,-26);g.lineTo(26*k,0);g.lineTo(-30*k,26);g.closePath();g.fill();g.stroke()}
function heatWaves(x,y,t,a){if(a<=0)return;g.save();g.globalAlpha=a;const gr=g.createRadialGradient(x,y,40,x,y,420);gr.addColorStop(0,'rgba(255,140,60,0.45)');gr.addColorStop(1,'rgba(255,140,60,0)');g.fillStyle=gr;g.fillRect(x-450,y-450,900,900);
  g.strokeStyle='rgba(255,110,40,0.85)';g.lineWidth=10;g.lineCap='round';for(let i=0;i<6;i++){const xx=x-260+i*104,ph=((t*0.9+i*0.27)%1);const yy=y+200-ph*520;g.globalAlpha=a*Math.sin(ph*PI);g.beginPath();for(let k=0;k<=20;k++){const q=k/20;g.lineTo(xx+18*Math.sin(q*PI*3+t*6),yy-q*160)}g.stroke()}g.restore()}
function meter(t,t0){const a=easeOut(seg(t,t0,t0+0.3));if(a<=0)return;g.save();g.globalAlpha=a;panel(W/2,330,940,230,'rgba(10,12,25,0.9)','#FF8A2B',30);
  txt('HEAT',140,270,44,{stroke:0,fill:'#FF8A2B',align:'left'});const f=lerp(0.2,1,easeOut(seg(t,t0+0.9,t0+2.4)));bar(330,245,560,52,f,'#FF8A2B');
  const k=seg(t,t0+1.5,t0+1.8);g.globalAlpha=a*(1-k);txt('RESTING ×1',W/2,370,40,{stroke:0,fill:'#aaa'});g.globalAlpha=a*k;txt('SHIVERING: UP TO ×5',W/2,370,44,{stroke:0,fill:'#fff'});g.restore()}
// ---- opening ----
const C0={p:[1.2,2.1,9.2],l:[0.1,1.25,0]};
function openScene(t){snow(t);shiverGuy(t)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;SNOW.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));N.shot(mix(C0.p,[1.0,2.0,8.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOU',W/2,215,90,{sw:18});txt('SHIVER',W/2,350,150,{fill:'#7FD3FF',sw:28});txt('WHEN YOU\'RE COLD?',W/2,480,76,{sw:15});g.restore();
    comic('BRRR!',W*0.27,1150,96,t,1.5,{life:1.3,rot:-0.1,fill:'#7FD3FF'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();brain(t,easeOut(seg(t,CU.c1,CU.c1+0.35)));pill('HYPOTHALAMUS',W/2,1610,58,'#FFB347','#111',t,4.3,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);snow(t);const u=t-CU.c2;shiverGuy(t,{mouth:'o',mouthSize:0.7,wide:t>7.4});N.shot([3.0,2.4,7.4],[0.3,1.5,0.4]);
    thermo(W*0.18,700,seg(t,5.8,6.9));txt('COOLING',W*0.18,950,44,{fill:'#7FD3FF',sw:9});
    const [hx,hy]=proj(new THREE.Vector3(0.1,2.25,0.6),N.cam);const [lx,ly]=proj(new THREE.Vector3(-0.6,1.0,0.8),N.cam);const [rx,ry]=proj(new THREE.Vector3(0.75,1.0,0.8),N.cam);
    if(t>7.3){bolt(hx,hy,lx,ly,t);bolt(hx,hy,rx,ry,t+1)}pill('BRAIN → MUSCLES',W/2,330,60,'#FFE14D','#111',t,7.3,CU.c3);comic('ZAP',W*0.8,700,84,t,7.4,{life:0.8,rot:0.1,fill:'#FFE14D'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);snow(t);shiverGuy(t,{});const a=pop(t,9.15);N.shot([-2.0,2.0,7.6],[-0.45,1.4,0.6]);
    fibers(W*0.32,600,210,t,clamp(a));pill('TIGHTEN',W*0.32,890,46,'#E2445E','#fff',t,9.4,10.4);pill('RELAX',W*0.32,890,46,'#7FD3FF','#111',t,10.4,10.9);pill('MANY TIMES A SECOND',W/2,1660,52,'#FFD23F','#111',t,10.9,CU.c4);
    comic('BZZZ',W*0.22,620,84,t,10.2,{life:1.0,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);snow(t);shiverGuy(t,{mouth:t>14?'grin':'o',mouthSize:0.6});N.shot([1.2,2.3,8.8],[0.1,1.6,0.6],'linear-gradient(#6E7FB8 0%,#C9A8D6 55%,#FFD9B8 100%)');
    const [gx,gy]=proj(new THREE.Vector3(0.1,1.2,0.6),N.cam);heatWaves(gx,gy,t,easeOut(seg(t,12.6,13.2)));meter(t,12.5);comic('TOASTY',W*0.75,1150,82,t,14.6,{life:1.1,rot:0.1,fill:'#FF8A2B'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);snow(t);shiverGuy(t,{mouth:(Math.floor(t*14)%2)?'teeth':'o',mouthSize:0.6,wide:true,blink:false});N.shot([0.45,2.05,3.0],[0.08,1.82,0.6]);
    comic('CHATTER',W*0.28,560,80,t,17.1,{life:0.9,rot:-0.12,fill:'#7FD3FF'});comic('CHATTER',W*0.72,700,80,t,17.7,{life:0.9,rot:0.12,fill:'#fff'});pill('SHIVERING JAW!',W/2,330,60,'#7FD3FF','#111',t,17.9,CU.c6)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));N.shot(mix([2.2,2.6,11],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};

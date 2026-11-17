const TT=19.9;bg.style.background='radial-gradient(circle at 50% 62%,#1B1440,#05040C 70%)';
const guy=makeYRG();const holder=new THREE.Group();guy.root.position.y=-1.1;holder.add(guy.root);
function proj(v,cam){const p=v.clone().project(cam);return [(p.x+1)/2*W,(1-p.y)/2*H]}
const S=new THREE.Scene();lights(S);S.add(holder);
const BH=new THREE.Group();S.add(BH);BH.add(new THREE.Mesh(new THREE.SphereGeometry(1.2,48,32),basic(0x000000)));
const dc=document.createElement('canvas');dc.width=dc.height=512;{const c=dc.getContext('2d'),gr=c.createRadialGradient(256,256,256*0.36,256,256,256);gr.addColorStop(0,'rgba(255,255,235,1)');gr.addColorStop(0.15,'rgba(255,220,120,1)');gr.addColorStop(0.45,'rgba(255,140,40,0.9)');gr.addColorStop(0.75,'rgba(200,50,30,0.5)');gr.addColorStop(1,'rgba(120,20,40,0)');c.fillStyle=gr;c.fillRect(0,0,512,512);
  c.globalCompositeOperation='destination-out';for(let i=0;i<40;i++){c.strokeStyle=`rgba(0,0,0,${0.15+0.25*hash(i)})`;c.lineWidth=2+hash(i*3)*6;c.beginPath();c.arc(256,256,100+hash(i*7)*150,0,7);c.stroke()}}
const dtex=new THREE.CanvasTexture(dc);dtex.colorSpace=THREE.SRGBColorSpace;
const disk=new THREE.Mesh(new THREE.RingGeometry(1.3,4.6,128,1),new THREE.MeshBasicMaterial({map:dtex,transparent:true,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0.78}));
{const uv=disk.geometry.attributes.uv,pos=disk.geometry.attributes.position;for(let i=0;i<uv.count;i++){uv.setXY(i,pos.getX(i)/9.2+0.5,pos.getY(i)/9.2+0.5)}}
disk.rotation.x=-Math.PI/2+0.2;BH.add(disk);
const ringM=new THREE.MeshBasicMaterial({color:0xFFE6A0,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});const ring=new THREE.Mesh(new THREE.TorusGeometry(1.27,0.06,12,96),ringM);BH.add(ring);
const halo=new THREE.Mesh(new THREE.RingGeometry(1.25,2.0,96),new THREE.MeshBasicMaterial({map:dtex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:0.8}));
{const uv=halo.geometry.attributes.uv,pos=halo.geometry.attributes.position;for(let i=0;i<uv.count;i++)uv.setXY(i,pos.getX(i)/4.6*0.75+0.5,pos.getY(i)/4.6*0.75+0.5)}BH.add(halo);
{const n=700,p=new Float32Array(n*3);for(let i=0;i<n;i++){p[i*3]=(hash(i*1.1)-0.5)*120;p[i*3+1]=(hash(i*2.3)-0.5)*160;p[i*3+2]=-40}const ge=new THREE.BufferGeometry();ge.setAttribute('position',new THREE.BufferAttribute(p,3));S.add(new THREE.Points(ge,new THREE.PointsMaterial({color:0xffffff,size:3,sizeAttenuation:false})))}
const cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
const mats=[];guy.root.traverse(o=>{if(o.isMesh&&o.material&&o.material.isMeshToonMaterial&&!mats.find(m=>m.m===o.material))mats.push({m:o.material,c:o.material.color.clone()})});
const RED=new THREE.Color(0xC0201A);function redden(k){for(const {m,c} of mats){m.color.copy(c).lerp(RED,0.75*k).multiplyScalar(1-0.35*k)}}
// states
const BS=0.8,C0={p:[0,3.0,13],l:[0,2.4,0]};
function openSt(t){const ph=2*Math.PI*t/TT;return {pos:[0.35+0.12*Math.sin(ph*2),2.55+0.12*Math.sin(ph*3),2.5],sx:1,sy:1,rz:0.08*Math.sin(ph*2),cam:C0,red:0,
  pose:{armL:[0.9+0.12*Math.sin(ph*4),0.2],armR:[0.9+0.12*Math.cos(ph*4),0.2],legL:[0.25+0.1*Math.sin(ph*3),0.35,0],legR:[0.05-0.1*Math.sin(ph*3),0.25,0],mouth:'smile',lookY:-0.35,look:0.1,headPitch:0.1}}}
function flail(t,amp=1,f=1){return {armL:[2.5+0.4*amp*Math.sin(t*11*f),0.2],armR:[2.5+0.4*amp*Math.cos(t*10*f),-0.2],legL:[0.3+0.25*amp*Math.sin(t*9*f),0.5,0],legR:[-0.1-0.25*amp*Math.sin(t*9*f),0.4,0]}}
const SY=3.0;
function pullSt(t){const k=ease(seg(t,2.9,7.6));const o=openSt(2.9);const p=[lerp(o.pos[0],0,k),lerp(o.pos[1],2.0,k),lerp(2.5,1.8,k)];
  return {pos:p,sx:1,sy:1+0.12*seg(t,6.0,7.6),rz:0.06*Math.sin(t*3),cam:{p:mix(C0.p,[1.0,2.3,8.5],k),l:mix(C0.l,[p[0],p[1]-0.2,p[2]],k)},red:0,pose:{...(t<3.5?o.pose:flail(t,seg(t,3.5,4.0))),mouth:'o',wide:true,mouthSize:1.3,brow:0.03,lookY:-0.5}}}
function stretchSt(t){const k=ease(seg(t,7.65,9.4)),sy=1.12+(SY-1.12)*k+0.08*Math.sin(t*7)*k,sx=1/Math.sqrt(sy);const top=2.0+1.3*BS;// keep head fixed
  const c=ease(seg(t,7.65,9.0));return {pos:[0,top-1.3*BS*sy+0.02,1.8],sx,sy,rz:0.05*Math.sin(t*2.5),cam:{p:mix([1.0,2.3,8.5],[0.8,1.2,21],c),l:mix([0,1.8,1.8],[0,0.5,1.8],c)},red:0,pose:{...flail(t,0.7),mouth:t<10.9?'teeth':'o',teethGap:0.35,wide:true,mouthSize:1.5,brow:0.03}}}
const T4=12.52;function farSt(t){const d=t-T4,a=1.1,y=lerp(0,1,Math.exp(-d*a));const sy=SY-0.6*seg(t,T4,13.5),cH=1.3*BS*sy;
  const tau=(1-Math.exp(-d*0.75))/0.75+T4;return {pos:[0,1.15+1.1*BS*sy*0.0+cH*0.0+lerp(1.55,4.3,y)-0.0,1.8],sx:1/Math.sqrt(sy),sy,rz:0.05*Math.sin(tau*2.5),cam:{p:mix([0.8,1.2,21],[0,3.8,30],ease(seg(t,T4,13.6))),l:mix([0,0.5,1.8],[0,0.9,0],ease(seg(t,T4,13.6)))},red:ease(seg(t,13.3,17.5)),
    pose:{...flail(tau,0.7),mouth:'o',wide:true,mouthSize:1.5,brow:0.03},tau}}
function mixSt(A,B,u){return {pos:mix(A.pos,B.pos,u),sx:lerp(A.sx,B.sx,u),sy:lerp(A.sy,B.sy,u),rz:lerp(A.rz,B.rz,u),cam:{p:mix(A.cam.p,B.cam.p,u),l:mix(A.cam.l,B.cam.l,u)},red:lerp(A.red,B.red,u),pose:u<0.6?A.pose:B.pose}}
function apply(s,blink){holder.position.set(...s.pos);holder.scale.set(BS*s.sx,BS*s.sy,BS*s.sx);holder.rotation.set(0,0,s.rz);guy.pose({...s.pose,blink});redden(s.red);cam.position.set(...s.cam.p);cam.lookAt(...s.cam.l);ring.lookAt(cam.position);halo.lookAt(cam.position);disk.rotation.z+=0;r.render(S,cam)}
function arrow(x0,y0,x1,y1,c,wd=26){const a=Math.atan2(y1-y0,x1-x0),hl=wd*1.9;g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=wd+14;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1-Math.cos(a)*hl*0.6,y1-Math.sin(a)*hl*0.6);g.stroke();g.strokeStyle=c;g.lineWidth=wd;g.stroke();
  g.translate(x1,y1);g.rotate(a);g.beginPath();g.moveTo(hl*0.3,0);g.lineTo(-hl,-hl*0.85);g.lineTo(-hl,hl*0.85);g.closePath();g.lineJoin='round';g.lineWidth=12;g.strokeStyle='#111';g.stroke();g.fillStyle=c;g.fill();g.restore()}
function clock(t,ang,lab){g.save();g.translate(W/2,300);g.fillStyle='rgba(10,12,25,0.85)';g.strokeStyle='#FFD23F';g.lineWidth=7;g.beginPath();g.arc(0,0,105,0,7);g.fill();g.stroke();for(let i=0;i<12;i++){const a=i/12*Math.PI*2;g.strokeStyle='#fff';g.lineWidth=5;g.beginPath();g.moveTo(Math.sin(a)*80,-Math.cos(a)*80);g.lineTo(Math.sin(a)*92,-Math.cos(a)*92);g.stroke()}
  g.strokeStyle='#FF5A3C';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(ang)*78,-Math.cos(ang)*78);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,10,0,7);g.fill();g.restore()}
const E=()=>0;
window.render=function(t){g.clearRect(0,0,W,H);const blink=(t%3.1)<0.1;disk.rotation.z=-t*0.35;let s;
  if(t<2.9)s=openSt(t);else if(t<7.65)s=pullSt(t);else if(t<T4)s=stretchSt(t);else if(t<18.2)s=farSt(t);
  else{const u=ease(seg(t,18.2,19.75)),F=farSt(18.2);s=mixSt(F,openSt(t-TT),u);if(u>=1)s=openSt(t-TT)}
  apply(s,blink&&(t<2.9||t>19.75));
  if(t<2.9){const a=easeOut(seg(t,0,0.3))*(1-seg(t,2.55,2.85));if(a>0){g.save();g.globalAlpha=a;txt('WHAT WOULD HAPPEN IF YOU',W/2,215,58,{sw:15});txt('FELL INTO',W/2,310,84,{fill:'#FFD23F',sw:20});txt('A BLACK HOLE?',W/2,410,92,{fill:'#FFD23F',sw:20});g.restore()}}
  else if(t<7.65){const ft=new THREE.Vector3(s.pos[0],s.pos[1]-1.1*BS*s.sy,s.pos[2]),hd=new THREE.Vector3(s.pos[0],s.pos[1]+1.3*BS*s.sy,s.pos[2]);const fp=proj(ft,cam),hp=proj(hd,cam);
    const a1=easeOut(seg(t,5.4,5.8)),a2=easeOut(seg(t,6.8,7.1)),pul=1+0.06*Math.sin(t*14);
    if(a1>0){g.save();g.globalAlpha=a1;arrow(fp[0],fp[1]+30,fp[0],fp[1]+30+260*a1*pul,'#FF5A3C',34);txt('STRONG PULL',fp[0]+(fp[0]<W/2?250:-250),fp[1]+170,44,{fill:'#FF5A3C',sw:12});g.restore()}
    if(a2>0){g.save();g.globalAlpha=a2;arrow(Math.min(W-90,hp[0]+390),hp[1]+150,Math.min(W-90,hp[0]+390),hp[1]+150+90*a2,'#FFD23F',18);txt('WEAK',Math.min(W-90,hp[0]+390),hp[1]+110,40,{fill:'#FFD23F',sw:11});g.restore()}
    pill('GETTING CLOSER...',W/2,250,48,'#fff','#111',t,3.0,5.3);comic('UH OH',W*0.72,520,96,t,3.6,{life:1.2,rot:0.1,fill:'#fff'});flash(t,2.9,0.15)}
  else if(t<T4){comic('STREEETCH!',W/2,560,112,t,7.75,{life:1.4,rot:-0.06,fill:'#FFD23F'});pill('LIKE A NOODLE',W/2,250,52,'#fff','#111',t,8.3,9.7);
    if(t>10.9){const a=easeOut(seg(t,10.9,11.2)),sc=0.85+0.15*backOut(seg(t,10.9,11.25));g.save();g.globalAlpha=a*(1-seg(t,12.3,12.5));g.translate(W/2,300);g.scale(sc,sc);g.rotate(-0.04);g.fillStyle='rgba(0,0,0,0.3)';rr(-418,-62,840,130,65);g.fill();g.fillStyle='#FFD23F';rr(-420,-70,840,130,65);g.fill();g.lineWidth=8;g.strokeStyle='#111';g.stroke();txt('SPAGHETTIFICATION',0,-4,66,{stroke:0,fill:'#111'});g.restore()}
    pill('REAL SCIENCE WORD',W/2,440,40,'#fff','#111',t,9.85,10.85);flash(t,7.65,0.12)}
  else if(t<18.2){const tau=s.tau;clock(t,(tau-T4)*3.2);pill('TO SOMEONE FAR AWAY',W/2,470,44,'#fff','#111',t,12.6,15.1);pill('SLOWING DOWN...',W/2,470,50,'#FF8A3C','#111',t,15.2,16.55);pill('FROZEN AT THE EDGE',W/2,470,50,'#7FD3FF','#111',t,16.65,18.15);
    if(t>16.65){const a=easeOut(seg(t,16.65,16.9))*(1-seg(t,18.0,18.2));g.save();g.globalAlpha=a*0.9;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;for(const x of [W-190,W-120]){rr(x,640,46,130,10);g.fill();g.stroke()}g.restore()}flash(t,T4,0.15)}
  else if(t<19.75){g.save();for(let i=0;i<8;i++){const y=((hash(i*5.3)*H+t*2200*(1+hash(i)))%H);g.fillStyle=`rgba(255,255,255,${0.12+0.18*hash(i*2)})`;g.fillRect(0,y,W,4+hash(i*9)*14)}g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;g.translate(110,250);for(const dx of [0,60]){g.beginPath();g.moveTo(dx+60,-40);g.lineTo(dx,0);g.lineTo(dx+60,40);g.closePath();g.fill();g.stroke()}g.restore();txt('REWIND',350,250,56,{sw:14})}
  const vg=g.createRadialGradient(W/2,H/2,H*0.35,W/2,H/2,H*0.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.35)');g.fillStyle=vg;g.fillRect(0,0,W,H);captions(t)};
function mix(p,q,c){return p.map((v,i)=>lerp(v,q[i],c))}

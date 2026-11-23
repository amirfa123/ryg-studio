// ===== Could a dog really rescue you at sea like in GTA 6? (pop culture + GTA 6) =====
const TT=20.95;
const CU={c1:4.0,c2:5.72,c3:10.45,c4:13.8,c5:15.64,c6:19.38};
guy.outfit({snapback:1,chain:1});
const SKY='linear-gradient(#3B1C6E 0%,#9A3D8F 30%,#FF6F7D 58%,#FFB36B 80%,#FFD9A0 100%)';
// ---------- shared sea world ----------
const SEA={S:new THREE.Scene()};lights(SEA.S);SEA.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
SEA.shot=(p,l)=>{SEA.cam.position.set(...p);SEA.cam.lookAt(...l);setBG(SKY);r.setClearColor(0,0);r.render(SEA.S,SEA.cam)};
const WATER=toon(0x1F8EC4);part(SEA.S,new THREE.PlaneGeometry(600,400),WATER,[0,0,0],[1,1,1],[-PI/2,0,0],0);
const FOAM=[];for(let i=0;i<70;i++){const m=part(SEA.S,new THREE.PlaneGeometry(1.2+hash(i)*1.6,0.07),basic(0xBFEFFF),[(hash(i*3.1)-0.5)*60,0.02,-2-hash(i*7.7)*40],[1,1,1],[-PI/2,0,0],0);FOAM.push(m)}
// distant shore (right side, far)
const SHORE=new THREE.Group();SEA.S.add(SHORE);SHORE.position.set(0,0,-60);
part(SHORE,new THREE.BoxGeometry(400,0.6,10),toon(0xF2D59A),[0,0.1,0],[1,1,1],[0,0,0],0);for(let k=-20;k<20;k++)palm(SHORE,k*6+hash(k)*2,-1,1.6,0.15,hash(k*3)*6);
for(let k=0;k<12;k++)part(SHORE,new THREE.BoxGeometry(5,6+hash(k)*14,4),toon([0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF][k%4]),[-40+k*8,4,-8],[1,1,1],[0,0,0],0.02);
// ---------- dog builder (faces +x) ----------
function makeDog(col,dark,big=1,shades=false){const d=new THREE.Group();const B=toon(col),D=toon(dark),K=basic(0x111111),V=toon(0xFF6A1F),VS=toon(0xFFE14D);const c=new THREE.Group();c.scale.setScalar(big);d.add(c);
  part(c,SPH,B,[0,0.55,0],[0.56,0.3,0.28],[0,0,0],0.014);
  const head=new THREE.Group();head.position.set(0.55,0.86,0);c.add(head);
  part(head,SPH,B,[0,0,0],[0.23,0.22,0.22],[0,0,0],0.012);part(head,SPH,B,[0.2,-0.05,0],[0.15,0.1,0.12],[0,0,0],0.01);part(head,SPH,K,[0.34,-0.02,0],[0.04,0.035,0.045],[0,0,0],0);
  part(head,SPH,toon(0xE85A6A),[0.24,-0.14,0],[0.06,0.02,0.05],[0,0,0],0.004);
  for(const s of [-1,1]){part(head,SPH,D,[-0.02,0.04,s*0.2],[0.08,0.16,0.05],[s*0.3,0,0.3],0.008);if(!shades){part(head,SPH,basic(0xffffff),[0.15,0.07,s*0.09],[0.045,0.05,0.03],[0,0,0],0);part(head,SPH,K,[0.18,0.07,s*0.095],[0.025,0.03,0.02],[0,0,0],0)}}
  if(shades){for(const s of [-1,1])part(head,SPH,toon(0x15151C),[0.17,0.08,s*0.09],[0.03,0.06,0.08],[0,0,0],0.004);part(head,new THREE.BoxGeometry(0.02,0.02,0.2),K,[0.19,0.09,0],[1,1,1],[0,0,0],0)}
  const legs=[];for(const [x,z] of [[0.32,0.16],[0.32,-0.16],[-0.32,0.16],[-0.32,-0.16]]){const lg=new THREE.Group();lg.position.set(x,0.45,z);c.add(lg);part(lg,cap(0.075,0.3),B,[0,-0.2,0],[1,1,1],[0,0,0],0.008);part(lg,SPH,D,[0.03,-0.42,0],[0.09,0.05,0.08],[0,0,0],0.006);legs.push(lg)}
  const tail=new THREE.Group();tail.position.set(-0.52,0.68,0);c.add(tail);part(tail,cap(0.05,0.32),B,[-0.08,0.15,0],[1,1,1],[0,0,0.5],0.008);
  // rescue vest + handle
  const vest=new THREE.Group();c.add(vest);part(vest,SPH,V,[0.04,0.58,0],[0.38,0.31,0.3],[0,0,0],0.012);part(vest,SPH,VS,[0.04,0.58,0],[0.385,0.06,0.305],[0,0,0],0);
  const handle=part(vest,new THREE.TorusGeometry(0.1,0.028,8,18,PI),toon(0x222230),[0.04,0.87,0],[1,1,1],[0,0,0],0.006);
  return {d,head,legs,tail,vest,big}}
function dogPose(dg,t,mode){// mode: 'sit','stand','swim','leap'
  const L=dg.legs;dg.tail.rotation.z=0.3*Math.sin(t*12);
  if(mode==='swim'){for(let i=0;i<4;i++)L[i].rotation.z=0.7*Math.sin(t*9+(i%2?PI:0)+(i>1?PI/2:0))}
  else if(mode==='leap'){L[0].rotation.z=1.0;L[1].rotation.z=1.0;L[2].rotation.z=-1.0;L[3].rotation.z=-1.0}
  else if(mode==='sit'){L[0].rotation.z=0;L[1].rotation.z=0;L[2].rotation.z=1.3;L[3].rotation.z=1.3}
  else for(const l of L)l.rotation.z=0;
  dg.head.rotation.z=mode==='sit'?0.1*Math.sin(t*3):0}
const DOG1=makeDog(0x1C1A1E,0x0E0C10,1.25,true);// Newfoundland, shades
const DOG2=makeDog(0xF1C27D,0xC99A55,1.0,false);// Labrador
// ---------- props ----------
function makeBoat(){const b=new THREE.Group();const R=toon(0xE84B3C),Wt=toon(0xF7F7F7);
  part(b,new THREE.BoxGeometry(4.2,0.7,1.8),Wt,[0,0.2,0],[1,1,1],[0,0,0],0.016);part(b,new THREE.ConeGeometry(0.9,1.4,4),Wt,[2.7,0.2,0],[1,0.5,1.3],[0,PI/4,-PI/2],0.016);
  part(b,new THREE.BoxGeometry(4.25,0.18,1.85),R,[0,0.45,0],[1,1,1],[0,0,0],0.008);part(b,new THREE.BoxGeometry(1.4,0.9,1.3),Wt,[-0.9,1.0,0],[1,1,1],[0,0,0],0.012);part(b,new THREE.BoxGeometry(1.42,0.3,1.32),toon(0x7FD3FF),[-0.9,1.2,0],[1,1,1],[0,0,0],0);
  part(b,cap(0.03,1.0),toon(0x333333),[-1.2,1.9,0]);part(b,SPH,basic(0xFF3030),[-1.2,2.45,0],[0.08,0.08,0.08],[0,0,0],0);return b}
const BOAT=makeBoat();SEA.S.add(BOAT);
function makeHeli(){const h=new THREE.Group();const O=toon(0xFF7A1A),Wt=toon(0xF4F4F4),K=toon(0x22222C);
  part(h,SPH,O,[0,0,0],[1.4,0.8,0.8],[0,0,0],0.016);part(h,SPH,toon(0x8FD8FF),[0.9,0.15,0],[0.6,0.5,0.62],[0,0,0],0.01);part(h,new THREE.BoxGeometry(0.06,0.6,0.02),Wt,[0,0,0.79],[1,1,1],[0,0,0],0);
  part(h,cap(0.16,2.2),O,[-2.2,0.2,0],[1,1,1],[0,0,PI/2-0.08],0.012);part(h,new THREE.BoxGeometry(0.4,0.8,0.08),Wt,[-3.4,0.55,0],[1,1,1],[0,0,0],0.008);
  for(const z of [-0.6,0.6]){part(h,cap(0.04,1.8),K,[0,-1.0,z],[1,1,1],[0,0,PI/2],0);part(h,cap(0.03,0.3),K,[0.4,-0.8,z]);part(h,cap(0.03,0.3),K,[-0.4,-0.8,z])}
  part(h,cap(0.06,0.3),K,[0,0.9,0]);const rot=new THREE.Group();rot.position.set(0,1.08,0);h.add(rot);for(let k=0;k<4;k++)part(rot,new THREE.BoxGeometry(3.8,0.04,0.22),K,[0,0,0],[1,1,1],[0,k*PI/2,0],0);
  part(h,new THREE.BoxGeometry(0.9,0.8,0.02),toon(0x15151C),[0,-0.05,0.8],[1,1,1],[0,0,0],0);h.userData.rot=rot;return h}
const HELI=makeHeli();SEA.S.add(HELI);
// beach scene
const BEACH={S:new THREE.Scene()};lights(BEACH.S);BEACH.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
BEACH.shot=(p,l)=>{BEACH.cam.position.set(...p);BEACH.cam.lookAt(...l);setBG('linear-gradient(#4FB8FF,#9BDCFF 55%,#E9F7FF)');r.setClearColor(0,0);r.render(BEACH.S,BEACH.cam)};
part(BEACH.S,new THREE.PlaneGeometry(200,60),toon(0xF4DDA4),[0,0,10],[1,1,1],[-PI/2,0,0],0);part(BEACH.S,new THREE.PlaneGeometry(200,100),toon(0x2BA6D9),[0,0.01,-70],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<4;i++)part(BEACH.S,new THREE.PlaneGeometry(200,0.25),basic(0xFFFFFF),[0,0.02,-20.4-i*3],[1,1,1],[-PI/2,0,0],0);
const TOWER=new THREE.Group();TOWER.position.set(-3.6,0,-4);BEACH.S.add(TOWER);for(const [x,z] of [[-0.8,-0.8],[0.8,-0.8],[-0.8,0.8],[0.8,0.8]])part(TOWER,cap(0.07,2.2),toon(0xFFFFFF),[x,1.1,z]);
part(TOWER,new THREE.BoxGeometry(2.0,0.15,2.0),toon(0xFFFFFF),[0,2.3,0],[1,1,1],[0,0,0],0.01);part(TOWER,new THREE.BoxGeometry(2.0,1.2,0.1),toon(0xE84B3C),[0,2.95,0.95],[1,1,1],[0,0,0],0.01);part(TOWER,new THREE.ConeGeometry(1.6,0.8,4),toon(0xE84B3C),[0,4.0,0],[1,1,1],[0,PI/4,0],0.012);
for(let i=0;i<3;i++)palm(BEACH.S,4+i*2.5,-6-i*1.5,1.4,0.15,i);
const UMB=new THREE.Group();UMB.position.set(3.2,0,-2.4);BEACH.S.add(UMB);part(UMB,cap(0.04,2.2),toon(0xEEEEEE),[0,1.1,0]);part(UMB,new THREE.ConeGeometry(1.3,0.5,12),toon(0xFFD23F),[0,2.3,0],[1,1,1],[0,0,0],0.01);
// ---------- 2D helpers ----------
function splash(x,y,t,t0,s=1){const d=t-t0;if(d<0||d>0.9)return;g.save();for(let i=0;i<16;i++){const a=-PI*hash(i*2.7),sp=(220+hash(i*5.3)*380)*s;const px=x+Math.cos(a)*sp*d,py=y+Math.sin(a)*sp*d+900*d*d;g.globalAlpha=1-d/0.9;g.fillStyle=i%3?'#E8FBFF':'#8FDFFF';g.strokeStyle='#0E4B70';g.lineWidth=4;g.beginPath();g.arc(px,py,(16+hash(i)*14)*s,0,7);g.fill();g.stroke()}g.restore()}
function ripples(x,y,t,n=3){g.save();for(let k=0;k<n;k++){const ph=((t*0.9+k/n)%1+1)%1;g.globalAlpha=0.7*(1-ph);g.strokeStyle='#E8FBFF';g.lineWidth=6;g.beginPath();g.ellipse(x,y,60+ph*220,(60+ph*220)*0.22,0,0,7);g.stroke()}g.restore()}
function italyPill(t,t0,t1){if(t<t0||t>t1)return;const a=easeOut(seg(t,t0,t0+0.25))*(1-seg(t,t1-0.2,t1)),sc=0.85+0.15*backOut(seg(t,t0,t0+0.3));g.save();g.globalAlpha=a;g.translate(W/2,330);g.scale(sc,sc);
  g.fillStyle='rgba(0,0,0,0.3)';rr(-250,-58,500,128,40);g.fill();g.fillStyle='#fff';rr(-250,-64,500,128,40);g.fill();g.strokeStyle='#111';g.lineWidth=7;g.stroke();
  const cs=['#1FA34A','#FFFFFF','#E23B3B'];for(let i=0;i<3;i++){g.fillStyle=cs[i];g.fillRect(-220+i*36,-36,36,72)}g.strokeRect(-220,-36,108,72);txt('ITALY',60,0,76,{stroke:0,fill:'#111'});g.restore()}
function distBar(t,f){panel(W/2,300,860,170,'rgba(10,12,25,0.85)','#5BE37A',36);txt('SHORE',200,300,46,{stroke:0,fill:'#5BE37A',align:'left'});bar(390,272,420,56,f,'#5BE37A');txt(Math.round(lerp(200,0,f))+' M',W-150,300,46,{stroke:0,fill:'#fff',align:'right'})}
// ---------- opening: Guy treading water, panicking ----------
const C0={p:[0.6,1.6,9.0],l:[0,0.75,0]};
function seaOnly(){BOAT.visible=false;HELI.visible=false;DOG1.d.visible=false;DOG2.d.visible=false;SEA.S.add(holder);holder.visible=true;holder.scale.setScalar(1);for(const f of FOAM)f.visible=true}
function openScene(t){seaOnly();holder.position.set(0,-1.0+0.06*Math.sin(t*2*PI/1.3),0);holder.rotation.set(0,0.15*Math.sin(t*2*PI/2.6),0.05*Math.sin(t*2*PI/1.3));
  guy.pose({armL:[2.3+0.55*Math.sin(t*2*PI/0.52),0.2],armR:[2.3+0.55*Math.sin(t*2*PI/0.52+PI),-0.2],mouth:'o',mouthSize:0.9,wide:true,blink:false,look:0.5*Math.sin(t*2*PI/2.6),headRoll:0.08*Math.sin(t*2*PI/1.3)})}
function seaUI(t,x,y){ripples(x,y,t)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;holder.rotation.order='YXZ';DOG1.d.children[0].rotation.z=0;DOG2.d.children[0].rotation.z=0;HELI.userData.rot.rotation.y=t*25;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));SEA.shot(mix(C0.p,[0.4,1.45,7.6],k),C0.l);const [px,py]=proj(new THREE.Vector3(0,0,0),SEA.cam);ripples(px,py,t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD A DOG',W/2,190,84,{sw:16});txt('RESCUE YOU AT SEA',W/2,290,76,{sw:15});txt('LIKE IN GTA 6?',W/2,410,112,{fill:'#FFD23F',sw:22});g.restore();
    comic('HELP!',W*0.76,720,96,t,1.0,{life:1.1,rot:0.12,fill:'#FF4A4A'});comic('BLUB!',W*0.24,1180,80,t,2.6,{life:0.9,rot:-0.12,fill:'#7FD3FF'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;seaOnly();holder.visible=false;BOAT.visible=true;DOG1.d.visible=true;BOAT.add(DOG1.d);DOG1.d.position.set(1.6,0.55,0);DOG1.d.rotation.set(0,0,0);dogPose(DOG1,t,'stand');
    const bx=lerp(9,1.5,easeOut(seg(t,CU.c1,CU.c2)));BOAT.position.set(bx,0.05*Math.sin(t*5),0);BOAT.rotation.set(0.04*Math.sin(t*4),PI,0.03*Math.sin(t*5));
    SEA.shot([bx-2.2,2.6,13.5],[bx-0.9,1.2,0]);const [px,py]=proj(new THREE.Vector3(bx-2.6,0,0),SEA.cam);splash(px,py,t,CU.c1+0.05,0.7);splash(px,py,t,CU.c1+0.6,0.6);
    pill('YES!',W/2,330,110,'#5BE37A','#111',t,4.1,CU.c2);comic('WOOF!',W*0.3,760,96,t,4.5,{life:0.9,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const u=t-CU.c2;BEACH.S.add(holder);holder.visible=true;holder.position.set(0,0,-0.6);holder.rotation.set(0,0,0);
    BEACH.S.add(DOG1.d);BEACH.S.add(DOG2.d);DOG1.d.visible=DOG2.d.visible=true;DOG1.d.position.set(-1.05,0,0.7);DOG1.d.rotation.set(0,-PI/2+0.5,0);DOG2.d.position.set(1.05,0,0.8);DOG2.d.rotation.set(0,-PI/2-0.5,0);dogPose(DOG1,t,'sit');dogPose(DOG2,t+0.4,'sit');
    DOG1.d.children[0].rotation.z=0.25;DOG2.d.children[0].rotation.z=0.25;
    const salute=t>6.7&&t<8.2;guy.pose({armL:salute?[2.4,0.0]:[0.35,0],armR:[0.35,0],bendL:salute?1.6:0,mouth:'grin',blink:BLINK(t),look:t<8.6?0:(t<9.4?-0.6:0.6),headYaw:t<8.6?0:(t<9.4?0.35:-0.35),jump:0.01*Math.sin(t*2.4)});
    const k=ease(seg(t,CU.c2,CU.c3));BEACH.shot(mix([0,2.6,13.2],[0,2.3,11.2],k),[0,1.15,0]);
    italyPill(t,5.9,8.3);
    const tag=(dg,s,t0,col)=>{if(t<t0)return;const p=new THREE.Vector3();dg.head.getWorldPosition(p);const [x,y]=proj(p.add(new THREE.Vector3(0,0.55,0)),BEACH.cam);pill(s,x,y,44,col,'#111',t,t0,CU.c3)};
    tag(DOG1,'NEWFOUNDLAND',8.75,'#FFD23F');tag(DOG2,'LABRADOR',9.5,'#7FE0D6');comic('WOOF!',W*0.2,1120,70,t,9.0,{life:0.7,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const u=t-CU.c3;seaOnly();holder.visible=false;BOAT.visible=true;HELI.visible=true;DOG1.d.visible=true;DOG2.d.visible=true;
    BOAT.position.set(3.6,0.05*Math.sin(t*5),-2);BOAT.rotation.set(0,PI,0.03*Math.sin(t*5));HELI.position.set(-2.6,5.6+0.12*Math.sin(t*3),-3);HELI.rotation.set(0,0.35,0.04*Math.sin(t*2));
    // Labrador leaps from boat 10.6 -> lands 11.3
    SEA.S.add(DOG2.d);{const f=seg(t,10.55,11.3);const x0=3.6-1.5,x1=1.0;const y=f<=0?1.05:(f<1?1.05+2.0*Math.sin(PI*f)-1.5*f:-0.45+0.03*Math.sin(t*6));DOG2.d.position.set(f<=0?x0:lerp(x0,x1,Math.min(1,f)),y,-1.6);DOG2.d.rotation.set(0,PI,f>0&&f<1?-0.5+f*0.9:0);dogPose(DOG2,t,f>0&&f<1?'leap':(f>=1?'swim':'stand'))}
    // Newfoundland leaps from helicopter 11.8 -> lands 12.75
    SEA.S.add(DOG1.d);{const f=seg(t,11.75,12.75);const y=f<=0?4.55:(f<1?lerp(4.55,-0.6,f*f):-0.6+0.03*Math.sin(t*6));DOG1.d.position.set(-2.4+(f>0?0.8*Math.min(1,f):0),y,-2.2);DOG1.d.rotation.set(0,0.3,f>0&&f<1?-0.6:0);dogPose(DOG1,t,f>0&&f<1?'leap':(f>=1?'swim':'stand'))}
    SEA.shot([0.6,2.6,25],[0.6,2.3,-2]);
    const [sx,sy]=proj(new THREE.Vector3(1.0,0,-1.6),SEA.cam);splash(sx,sy,t,11.3,0.9);const [hx,hy]=proj(new THREE.Vector3(-2.2,0,-2.2),SEA.cam);splash(hx,hy,t,12.75,1.2);
    pill('FROM BOATS',W/2,330,64,'#FFFFFF','#111',t,10.5,11.7);pill('…AND HELICOPTERS!',W/2,330,64,'#FF7A1A','#111',t,11.75,CU.c4);comic('SPLASH!',W*0.62,1080,88,t,12.75,{life:0.9,rot:0.1,fill:'#7FD3FF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);seaOnly();holder.visible=false;DOG1.d.visible=true;SEA.S.add(DOG1.d);const x=lerp(-0.8,0.6,seg(t,CU.c4,CU.c5));DOG1.d.position.set(x,-0.6+0.03*Math.sin(t*6),0);DOG1.d.rotation.set(0,-0.45,0);dogPose(DOG1,t,'swim');
    SEA.shot([x-0.3,1.9,6.6],[x+0.2,0.35,0]);const hp=new THREE.Vector3();DOG1.vest.children[2].getWorldPosition(hp);const [hx,hy]=proj(hp,SEA.cam);const [wx,wy]=proj(new THREE.Vector3(x-0.8,0,0),SEA.cam);ripples(wx,wy,t,2);
    if(t>14.25){const a=easeOut(seg(t,14.25,14.5));g.save();g.globalAlpha=a;arrow(hx+260,hy-300,hx+40,hy-50,'#FFD23F',24);g.restore()}
    pill('RESCUE VEST',W/2,330,64,'#FF6A1F','#fff',t,13.95,14.8);pill('+ HANDLE',W/2,330,72,'#FFD23F','#111',t,14.8,CU.c5);comic('GRAB HERE',W*0.68,700,62,t,14.9,{life:0.7,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);seaOnly();DOG1.d.visible=true;const f=ease(seg(t,15.9,19.0));const X=lerp(-4,6,f);
    holder.add(DOG1.d);DOG1.d.position.set(0,0.42+0.02*Math.sin(t*6),0.72);DOG1.d.rotation.set(0,-PI/2,0);dogPose(DOG1,t,'swim');
    holder.position.set(X,-0.85+0.04*Math.sin(t*5),0);holder.rotation.set(0.28,PI/2,0);
    const grab=seg(t,15.65,15.95);const hl=[0.12,lerp(1.2,1.5,grab),lerp(0.4,0.78,grab)],hr=[-0.12,lerp(1.2,1.5,grab),lerp(0.4,0.78,grab)];
    const happy=t>18.4;guy.pose({reachL:hl,reachR:hr,poleL:[1,-0.3,-0.2],poleR:[-1,-0.3,-0.2],mouth:happy?'grin':'o',mouthSize:0.7,wide:!happy,blink:BLINK(t),jump:0});
    SHORE.position.set(0,0,-60);const cx=X+0.45;SEA.shot([cx,2.2,8.6],[cx,0.75,0]);
    const [wx,wy]=proj(new THREE.Vector3(X+1.6,0,0),SEA.cam);splash(wx,wy,t,16.2,0.4);splash(wx,wy,t,16.9,0.4);splash(wx,wy,t,17.6,0.4);splash(wx,wy,t,18.3,0.4);
    if(t>15.8)distBar(t,f);comic('GRAB!',W*0.25,760,90,t,15.8,{life:0.8,rot:-0.12,fill:'#FFD23F'});pill('SAVED!',W/2,560,96,'#5BE37A','#111',t,18.55,CU.c6);comic('PADDLE PADDLE',W*0.5,1170,64,t,16.6,{life:1.3,rot:-0.05,fill:'#7FD3FF'})}
  else{holder.remove(DOG1.d);openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.2));SEA.shot(mix([1.6,2.3,10.6],C0.p,k),C0.l);const [px,py]=proj(new THREE.Vector3(0,0,0),SEA.cam);ripples(px,py,t-TT);flash(t,CU.c6,0.15)}
  vignette();captions(t)};

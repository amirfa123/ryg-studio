// ===== Can a turkey actually fly? (wildcard/animals, Thanksgiving week) =====
const TT=20.0;
const CU={c1:2.34,c2:4.98,c3:8.27,c4:10.12,c5:11.88,c6:15.72,c7:18.28};
guy.outfit({snapforward:1});
// ---------- original turkey builder ----------
function makeTurkey(o={}){const T={root:new THREE.Group()};const B=toon(o.body||0x5A3A22),D=toon(o.dark||0x3A2414),R=toon(0xD3242E),Y=toon(0xF2B33D),L=toon(0xC88A4A);
  const big=o.fat||1;T.body=new THREE.Group();T.root.add(T.body);
  part(T.body,SPH,B,[0,0.62,0],[0.42*big,0.4*big,0.5*big],[0,0,0],0.018);
  part(T.body,SPH,o.farm?toon(0xF4F1EA):toon(0x6B4428),[0,0.56,0.22*big],[0.3*big,0.3*big,0.28],[0,0,0],0);
  // tail fan
  T.tail=new THREE.Group();T.tail.position.set(0,0.75,-0.38*big);T.body.add(T.tail);
  for(let i=0;i<9;i++){const a=(i-4)/4*1.2;const f=new THREE.Group();f.rotation.set(0,0,a);T.tail.add(f);part(f,SPH,i%2?D:(o.farm?toon(0xE8E4DA):toon(0x8A5A30)),[0,0.42,0],[0.11,0.42,0.03],[0,0,0],0.01);if(!o.farm)part(f,SPH,toon(0xE8D2A8),[0,0.8,0.01],[0.1,0.06,0.03],[0,0,0],0)}
  T.tail.rotation.x=-0.25;T.tail.scale.setScalar(o.fan===0?0.55:1);
  // wings
  T.wings=[];for(const s of [-1,1]){const w=new THREE.Group();w.position.set(s*0.36*big,0.72,0.02);T.body.add(w);const inner=new THREE.Group();w.add(inner);part(inner,SPH,D,[s*0.32*(o.wing||1),0,0],[0.36*(o.wing||1),0.06,0.26*(o.wing||1)],[0,0,0],0.012);for(let k=0;k<4;k++)part(inner,SPH,o.farm?toon(0xDCD7CC):toon(0x2A1A10),[s*(0.5+k*0.06)*(o.wing||1),-0.01,-0.12+k*0.08],[0.14*(o.wing||1),0.03,0.05],[0,s*0.3,0],0);w.userData.s=s;T.wings.push(w)}
  // neck + head
  T.neck=new THREE.Group();T.neck.position.set(0,0.85,0.3*big);T.body.add(T.neck);part(T.neck,cap(0.07,0.32),o.farm?toon(0xF4F1EA):toon(0x7FA6D8),[0,0.2,0.03],[1,1,1],[0.25,0,0],0.008);
  T.head=new THREE.Group();T.head.position.set(0,0.42,0.1);T.neck.add(T.head);part(T.head,SPH,toon(0x8FB6E8),[0,0,0],[0.11,0.11,0.12],[0,0,0],0.01);part(T.head,new THREE.ConeGeometry(0.04,0.12,10),Y,[0,-0.01,0.16],[1,1,1],[PI/2,0,0],0.006);
  part(T.head,SPH,R,[0.02,-0.12,0.08],[0.045,0.11,0.045],[0,0,0],0.006);part(T.head,SPH,R,[0,0.02,0.19],[0.025,0.08,0.025],[0.4,0,0],0);
  for(const s of [-1,1]){part(T.head,SPH,toon(0xffffff),[s*0.07,0.03,0.07],[0.03,0.03,0.02],[0,0,0],0);part(T.head,SPH,basic(0x111111),[s*0.08,0.03,0.085],[0.016,0.016,0.01],[0,0,0],0)}
  // legs
  T.legs=[];for(const s of [-1,1]){const l=new THREE.Group();l.position.set(s*0.14,0.32,0.02);T.body.add(l);part(l,cap(0.035,0.3),L,[0,-0.15,0]);for(const a of [-0.5,0,0.5])part(l,cap(0.015,0.12),L,[Math.sin(a)*0.06,-0.31,Math.cos(a)*0.06],[1,1,1],[PI/2,a,0],0);T.legs.push(l)}
  T.flap=(t,amp=1,sp=14)=>{const a=Math.sin(t*sp);for(const w of T.wings){w.rotation.y=0;w.rotation.z=w.userData.s*(0.15+amp*(0.7+0.6*a));w.rotation.x=-0.2*amp}};
  T.fold=()=>{for(const w of T.wings){w.rotation.set(0,w.userData.s*1.35,w.userData.s*-0.08)}};
  T.walk=(t,sp=8)=>{T.legs[0].rotation.x=0.5*Math.sin(t*sp);T.legs[1].rotation.x=-0.5*Math.sin(t*sp);T.neck.position.z=0.3*big+0.06*Math.sin(t*sp*2)};
  T.stand=()=>{T.legs[0].rotation.x=0;T.legs[1].rotation.x=0};T.tuck=()=>{T.legs[0].rotation.x=-1.2;T.legs[1].rotation.x=-1.2};
  T.fold();return T}
// ---------- autumn forest set ----------
const F={S:new THREE.Scene()};lights(F.S);F.cam=new THREE.PerspectiveCamera(32,W/H,0.1,400);
F.shot=(p,l,bgc)=>{F.cam.position.set(...p);F.cam.lookAt(...l);setBG(bgc||'linear-gradient(#FF9A5C 0%,#FFC27A 45%,#FFE3B0 100%)');r.setClearColor(0,0);r.render(F.S,F.cam)};
part(F.S,new THREE.CircleGeometry(120,64),toon(0x8FA845),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<60;i++)part(F.S,SPH,toon([0xE8541E,0xF2A01E,0xC8361A][i%3]),[(hash(i*2.3)-0.5)*30,0.02,(hash(i*4.1)-0.5)*30],[0.16,0.02,0.1],[0,i,0],0);
function tree(x,z,s=1,col=0xE8741E){const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(s);F.S.add(tr);part(tr,cap(0.28,3.0),toon(0x6B4228),[0,1.6,0],[1,1,1],[0,0,0],0.012);
  for(let k=0;k<5;k++)part(tr,SPH,toon(k%2?col:0xF2A01E),[Math.cos(k*1.3)*0.9,3.6+0.4*(k%3),Math.sin(k*1.3)*0.9],[1.3,1.0,1.3],[0,0,0],0.016);return tr}
for(const [x,z,s,c] of [[-5,-6,1.3,0xE8541E],[5.5,-7,1.5,0xC8361A],[-9,-12,1.8,0xF2A01E],[9,-13,1.6,0xE8541E],[0,-16,2.0,0xC8361A],[-14,-4,1.4,0xE8741E],[14,-3,1.4,0xF2A01E],[-20,-20,2.2,0xE8541E],[20,-22,2.2,0xC8361A]])tree(x,z,s,c);
// roost tree with a long branch (right side)
const RT=new THREE.Group();RT.position.set(3.2,0,-2.2);F.S.add(RT);part(RT,cap(0.32,4.6),toon(0x5E3A22),[0,2.4,0],[1,1,1],[0,0,0],0.012);part(RT,cap(0.12,2.6),toon(0x5E3A22),[-1.3,3.4,0.2],[1,1,1],[0,0,PI/2-0.08],0.008);
for(let k=0;k<6;k++)part(RT,SPH,toon(k%2?0xC8361A:0xE8741E),[Math.cos(k*1.1)*1.2,5.3+0.5*(k%2),Math.sin(k*1.1)*1.0],[1.5,1.1,1.5],[0,0,0],0.016);
const BR=new THREE.Vector3(3.2-2.0,3.52,-2.0); // branch roost point
// moon (night)
const MOON=part(F.S,new THREE.CircleGeometry(4,40),basic(0xFFF4C8),[-30,48,-120],[1,1,1],[0,0,0],0);MOON.visible=false;
const WT=makeTurkey();F.S.add(WT.root);
// ---------- farm set ----------
const FM={S:new THREE.Scene()};lights(FM.S);FM.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
FM.shot=(p,l)=>{FM.cam.position.set(...p);FM.cam.lookAt(...l);setBG('linear-gradient(#6EC6FF,#BDE8FF 60%,#E8F7FF)');r.setClearColor(0,0);r.render(FM.S,FM.cam)};
part(FM.S,new THREE.CircleGeometry(80,48),toon(0xC9A35A),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(FM.S,new THREE.CircleGeometry(80,48),toon(0x7DBA4A),[0,0.003,-40],[1,1,1],[-PI/2,0,0],0);
// barn
const BN=new THREE.Group();BN.position.set(-3.5,0,-8);FM.S.add(BN);part(BN,new THREE.BoxGeometry(5,3.6,3.5),toon(0xC2302A),[0,1.8,0],[1,1,1],[0,0,0],0.02);part(BN,new THREE.CylinderGeometry(0.01,3.1,1.6,4,1),toon(0x6B2420),[0,4.4,0],[1.15,1,0.8],[0,PI/4,0],0.02);
part(BN,new THREE.BoxGeometry(1.8,2.4,0.1),toon(0xF4ECD8),[0,1.2,1.76],[1,1,1],[0,0,0],0.01);part(BN,new THREE.BoxGeometry(1.6,0.12,0.12),toon(0xC2302A),[0,1.2,1.82],[1,1,1],[0,0,PI/5],0);part(BN,new THREE.BoxGeometry(1.6,0.12,0.12),toon(0xC2302A),[0,1.2,1.82],[1,1,1],[0,0,-PI/5],0);
// fence
for(let i=-6;i<=6;i++)part(FM.S,new THREE.BoxGeometry(0.14,1.0,0.14),toon(0xF4ECD8),[i*1.1,0.5,-3.2],[1,1,1],[0,0,0],0.006);for(const y of [0.45,0.85])part(FM.S,new THREE.BoxGeometry(14,0.1,0.08),toon(0xF4ECD8),[0,y,-3.2],[1,1,1],[0,0,0],0);
// hay bale
part(FM.S,new THREE.CylinderGeometry(0.6,0.6,1.0,24),toon(0xE8C468),[3.0,0.6,-1.8],[1,1,1],[0,0,PI/2],0.012);
const FT=makeTurkey({farm:1,body:0xF4F1EA,dark:0xE0DACB,fat:1.45,wing:0.8});FT.root.scale.setScalar(1.05);FM.S.add(FT.root);
// ---------- kitchen table set (teal kitchen, different from Nov 21 dining room) ----------
const K={S:new THREE.Scene()};lights(K.S);K.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
K.shot=(p,l)=>{K.cam.position.set(...p);K.cam.lookAt(...l);setBG('linear-gradient(#155E63,#2A8C8C)');r.setClearColor(0,0);r.render(K.S,K.cam)};
part(K.S,new THREE.PlaneGeometry(30,30),toon(0xEDE4D0),[0,0,0],[1,1,1],[-PI/2,0,0],0);for(let i=-6;i<6;i++)for(let j=-6;j<6;j++)if((i+j)%2===0)part(K.S,new THREE.PlaneGeometry(0.98,0.98),toon(0x2A8C8C),[i+0.5,0.003,j+0.5],[1,1,1],[-PI/2,0,0],0);
part(K.S,new THREE.PlaneGeometry(30,10),toon(0x7FD1C4),[0,5,-3],[1,1,1],[0,0,0],0);for(let i=0;i<8;i++)part(K.S,new THREE.BoxGeometry(1.0,0.9,0.5),toon(0xF4F0E6),[-3.6+i*1.05,3.3,-2.7],[1,1,1],[0,0,0],0.012);
const KT=new THREE.Group();KT.position.set(0,0,0.5);K.S.add(KT);part(KT,new THREE.BoxGeometry(2.6,0.12,1.4),toon(0xF2B33D),[0,1.12,0],[1,1,1],[0,0,0],0.012);for(const [x,z] of [[-1.15,-0.55],[1.15,-0.55],[-1.15,0.55],[1.15,0.55]])part(KT,new THREE.BoxGeometry(0.1,1.1,0.1),toon(0xB37A1E),[x,0.55,z],[1,1,1],[0,0,0],0.006);
const KTOP=1.18;part(KT,new THREE.CylinderGeometry(0.5,0.44,0.04,32),toon(0xffffff),[0,KTOP+0.02,0.15],[1,1,1],[0,0,0],0.006);
const ROAST=new THREE.Group();ROAST.position.set(0,KTOP+0.04,0.15);ROAST.scale.setScalar(0.62);KT.add(ROAST);part(ROAST,SPH,toon(0xB8682A),[0,0.27,0],[0.42,0.26,0.32],[0,0,0],0.02);part(ROAST,SPH,toon(0xD08A3E),[0,0.36,0.02],[0.3,0.12,0.22],[0,0,0],0);
for(const s of [-1,1]){part(ROAST,SPH,toon(0xA85C24),[s*0.3,0.22,0.22],[0.14,0.12,0.18],[0.4,0,0],0.01);part(ROAST,cap(0.035,0.12),toon(0xFFF6E6),[s*0.34,0.27,0.38],[1,1,1],[1.1,0,0],0)}
const KCH=new THREE.Group();KCH.position.set(0,0,-0.75);K.S.add(KCH);{const m=toon(0xE8541E);part(KCH,new THREE.BoxGeometry(1.2,0.14,1.0),m,[0,0.7,0],[1,1,1],[0,0,0],0.012);part(KCH,new THREE.BoxGeometry(1.2,1.5,0.12),m,[0,1.4,-0.5],[1,1,1],[0,0,0],0.012);for(const [x,z] of [[-0.5,-0.42],[0.5,-0.42],[-0.5,0.42],[0.5,0.42]])part(KCH,new THREE.BoxGeometry(0.1,0.7,0.1),m,[x,0.35,z],[1,1,1],[0,0,0],0.006)}
mkProp('fork',p=>{part(p,cap(0.018,0.32),toon(0xD8DCE4),[0,0.16,0]);for(const x of [-0.03,0,0.03])part(p,cap(0.008,0.08),toon(0xD8DCE4),[x,0.36,0])});
// ---------- 2D helpers ----------
function speedPanel(x,y,v){panel(x,y,620,200,'rgba(10,12,25,0.88)','#FFB13D',40);txt(String(Math.round(v)),x-60,y,120,{stroke:0,fill:'#fff',align:'right'});txt('MPH',x-30,y+14,60,{stroke:0,fill:'#FFB13D',align:'left'});}
function bird2D(x,y,s,col,lab,wing){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=9;
  g.fillStyle=col;g.beginPath();g.ellipse(0,0,150,120,0,0,7);g.fill();g.stroke();
  g.fillStyle='#8FB6E8';g.beginPath();g.ellipse(120,-130,40,40,0,0,7);g.fill();g.stroke();g.fillStyle='#D3242E';g.beginPath();g.ellipse(132,-88,14,30,0,0,7);g.fill();g.stroke();
  g.fillStyle='#F2B33D';g.beginPath();g.moveTo(158,-135);g.lineTo(190,-125);g.lineTo(158,-118);g.closePath();g.fill();g.stroke();
  g.fillStyle='#3A2414';g.beginPath();g.ellipse(-20,-10,95*wing,48*wing,-0.25,0,7);g.fill();g.stroke();
  g.strokeStyle='#C88A4A';g.lineWidth=12;g.beginPath();g.moveTo(-30,110);g.lineTo(-40,190);g.moveTo(30,110);g.lineTo(35,190);g.stroke();g.restore();
  txt(lab,x,y+260*s,54,{fill:'#fff',sw:12})}
function drum2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.rotate(-0.5);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=10;g.fillStyle='#FFF6E6';g.beginPath();g.arc(-10,150,26,0,7);g.arc(14,160,24,0,7);g.fill();g.stroke();g.fillRect(-14,40,28,120);g.strokeRect(-14,40,28,120);
  g.fillStyle='#B8682A';g.beginPath();g.ellipse(0,-30,90,115,0,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.35)';g.beginPath();g.ellipse(-30,-60,22,40,-0.3,0,7);g.fill();g.restore()}
function wing2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=10;g.fillStyle='#C9874A';g.beginPath();g.moveTo(-60,0);g.quadraticCurveTo(0,-50,60,-10);g.quadraticCurveTo(30,30,-60,0);g.fill();g.stroke();g.restore()}
function scale2D(cx,cy,tilt,t){g.save();g.translate(cx,cy);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=12;g.fillStyle='#8E6BFF';g.beginPath();g.moveTo(-90,260);g.lineTo(90,260);g.lineTo(20,0);g.lineTo(-20,0);g.closePath();g.fill();g.stroke();
  g.rotate(tilt);g.fillStyle='#FFD23F';rr(-380,-26,760,40,18);g.fill();g.stroke();
  for(const s of [-1,1]){g.save();g.translate(s*330,0);g.rotate(-tilt);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,0);g.lineTo(-90,140);g.moveTo(0,0);g.lineTo(90,140);g.stroke();g.fillStyle='#E9EEF6';g.lineWidth=10;g.beginPath();g.ellipse(0,150,130,32,0,0,7);g.fill();g.stroke();
    if(s<0)drum2D(0,40,0.95);else wing2D(0,110,0.9);g.restore()}
  g.fillStyle='#fff';g.beginPath();g.arc(0,0,22,0,7);g.fill();g.stroke();g.restore()}
function sweat(x,y,t){for(let i=0;i<3;i++){const ph=((t*1.5+i/3)%1);g.save();g.globalAlpha=1-ph;g.fillStyle='#8FD8FF';g.strokeStyle='#1E5F8A';g.lineWidth=4;const xx=x+(i-1)*50+(i-1)*ph*40,yy=y+ph*60;g.beginPath();g.moveTo(xx,yy-22);g.quadraticCurveTo(xx+14,yy,xx,yy+10);g.quadraticCurveTo(xx-14,yy,xx,yy-22);g.fill();g.stroke();g.restore()}}
// ---------- opening: forest clearing, guy + wild turkey side by side ----------
const C0={p:[0.9,2.3,9.4],l:[0.6,1.45,0]};
function openScene(t){MOON.visible=false;putGuy(F.S,-0.4,0,0,0.35);const b=0.5+0.5*Math.sin(t*2*PI/2.5);
  guy.pose({armL:[0.5,0.2],armR:[1.3+0.15*b,-0.3],bendR:0.9,bendL:0.3,mouth:'smile',blink:BLINK(t),look:0.7,headYaw:0.45,headRoll:0.05*Math.sin(t*2*PI/2.5)});
  WT.root.position.set(1.35,0,0.3);WT.root.rotation.set(0,-0.55+0.08*Math.sin(t*2*PI/1.25),0);WT.fold();WT.stand();WT.neck.rotation.x=0.12*Math.sin(t*2*PI/0.625);WT.tail.scale.setScalar(1)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.order='XYZ';
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));F.shot(mix(C0.p,[0.8,2.2,8.5],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('CAN A TURKEY',W/2,210,96,{sw:18});txt('ACTUALLY',W/2,330,96,{sw:18});txt('FLY?',W/2,470,170,{fill:'#FFB13D',sw:30});g.restore();
    comic('GOBBLE',W*0.76,1130,74,t,1.0,{life:1.1,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);MOON.visible=false;const u=t-CU.c1;const up=ease(seg(t,3.0,4.9));
    putGuy(F.S,-0.4,0,0,0.5);guy.pose({armL:[2.3,0.1],armR:[2.3,-0.1],bendL:0.2,bendR:0.2,mouth:'o',mouthSize:1.5,wide:true,blink:false,headPitch:-0.35-0.2*up,jump:0.03*Math.abs(Math.sin(u*9))});
    WT.root.position.set(1.4+1.2*up,3.2*up*up,0.3-1.5*up);WT.root.rotation.set(-0.35*up,-0.7,0);WT.flap(t,seg(t,2.7,3.0),16);if(up>0.05)WT.tuck();else WT.stand();
    F.shot([2.4,0.7,7.0],[0.9,2.2,0]);comic('YES!',W*0.27,560,140,t,2.45,{life:1.2,rot:-0.12,fill:'#5BE37A'});comic('FLAP FLAP',W*0.7,1120,70,t,3.0,{life:1.2,rot:0.1,fill:'#fff'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);MOON.visible=false;const u=t-CU.c2,k=seg(t,CU.c2,CU.c3);
    // turkey zooms across sky, guy runs below trying to keep up
    const tx=-8+u*6.0,lag=lerp(0.2,1.6,k);WT.root.position.set(tx,2.9+0.2*Math.sin(u*3),2.5);WT.root.rotation.set(-0.15,PI/2,0);WT.flap(t,1,18);WT.tuck();
    putGuy(F.S,tx-0.4-lag,0,2.5,PI/2);guy.pose(run(t,{mouth:'o',wide:true,headPitch:-0.25}));
    F.shot([tx-0.9,2.2,13.8],[tx-0.9,1.8,2.5]);speedPanel(W/2,1650,lerp(0,55,ease(seg(t,5.6,7.4))));
    if(t>7.4)pill('UP TO 55 MPH!',W/2,470,58,'#FFB13D','#111',t,7.4,CU.c3);comic('ZOOM!',W*0.74,640,96,t,5.6,{life:0.9,rot:0.12,fill:'#FFD23F'});comic('WAIT UP!',W*0.3,1150,66,t,6.6,{life:1.0,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);MOON.visible=true;const k=seg(t,CU.c3,CU.c4);
    WT.root.position.set(BR.x,BR.y,BR.z);WT.root.rotation.set(0,0.4,0);WT.fold();WT.tuck();WT.neck.rotation.x=0.5*ease(seg(t,8.8,9.4));
    putGuy(F.S,0.2,0,0.6,0.5);guy.pose({armL:[0.3,0],armR:[0.6,0.6],bendR:1.4,mouth:'o',mouthSize:0.8,blink:false,headPitch:-0.5,look:0.4,lookY:0.8});
    F.shot([lerp(-1.2,-1.5,k),1.5,lerp(11.0,10.3,k)],[0.6,2.35,-0.8],'linear-gradient(#0E1440 0%,#2A2468 55%,#5A3A7A 100%)');
    pill('SLEEPS IN TREES',W/2,1650,64,'#BFE6FF','#111',t,8.6,CU.c4);
    for(let i=0;i<3;i++){const ph=((t*0.7+i/3)%1);const [zx,zy]=proj(new THREE.Vector3(BR.x+0.2,BR.y+1.0,BR.z),F.cam);g.save();g.globalAlpha=Math.sin(ph*PI);txt('Z',zx+ph*90+i*8,zy-ph*180,48+i*14,{fill:'#BFE6FF',sw:10});g.restore()}}
  else if(t<CU.c5){flash(t,CU.c4,0.15);const k=seg(t,CU.c4,CU.c5);
    putGuy(K.S,0,0.78,-0.68,0);props.fork.visible=true;props.fork.position.set(0.32,0.9,0.62);props.fork.rotation.set(0.2,0,-0.3);
    guy.pose({...SIT,armL:[0.4,0.6],armR:[0.35,0.5],bendL:0.6,bendR:0.6,reachR:[-0.34,0.82,0.7],mouth:'o',mouthSize:0.9,wide:t>10.9,blink:false,lookY:-0.5,headPitch:0.25});
    K.shot([lerp(1.6,1.2,k),2.9,lerp(5.9,5.3,k)],[0,1.72,0.3]);comic('WAIT...',W/2,250,100,t,10.2,{life:1.6,fill:'#fff'});
    const [px,py]=proj(new THREE.Vector3(0,1.6,0.65),K.cam);if(t>10.6){g.save();g.globalAlpha=easeOut(seg(t,10.6,10.9));arrow(px+260,py-220,px+80,py-40,'#FF4A4A',20);g.restore()}comic('THIS ONE?',W*0.74,py-300,62,t,10.7,{life:1.2,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const u=t-CU.c5,k=seg(t,CU.c5,CU.c6);
    // farm turkey tries to take off: big flaps, tiny hops
    const hop=Math.max(0,Math.sin((u-0.6)*PI/0.7));const tries=u>0.6&&u<3.3;FT.root.position.set(0.75,tries?0.12*hop:0,0.4);FT.root.rotation.set(0,-0.25,0);
    if(tries){FT.flap(t,0.9,20);FT.tuck()}else{FT.fold();FT.stand()}if(u>3.3)FT.neck.rotation.x=0.35;else FT.neck.rotation.x=0;
    putGuy(FM.S,-1.35,0,0.2,0.45);guy.pose({armL:[0.7,0.6],armR:[0.7,0.6],bendL:1.6,bendR:1.6,mouth:u>3.3?'teeth':'smile',teethGap:0.3,blink:BLINK(t),look:0.8,headYaw:0.4});
    FM.shot([lerp(0.3,0.0,k),2.0,lerp(9.4,8.6,k)],[-0.05,1.3,0]);
    const [fx,fy]=proj(new THREE.Vector3(0.75,1.8,0.4),FM.cam);if(tries)sweat(fx+40,fy-60,t);
    pill('BRED TO BE HEAVY',W/2,330,62,'#F4F1EA','#111',t,12.2,CU.c6);comic('HOP',fx-140,fy+120,70,t,12.6,{life:0.5,rot:-0.1,fill:'#fff'});comic('HOP',fx+160,fy+90,70,t,13.3,{life:0.5,rot:0.1,fill:'#fff'});comic('NOPE.',W*0.5,560,110,t,15.1,{life:0.7,fill:'#FF4A4A'})}
  else if(t<CU.c7){clear3d();setBG('linear-gradient(#FFE3B8,#FFB27A)');flash(t,CU.c6,0.15);const tilt=-0.32*backOut(seg(t,16.1,16.7));
    scale2D(W/2,860,tilt,t);txt('DRUMSTICK',W*0.25,1210,52,{fill:'#fff',sw:12});txt('WING',W*0.76,1110,52,{fill:'#fff',sw:12});
    panel(W/2,330,900,150);txt('TOO MUCH DRUMSTICK',W/2,300,60,{stroke:0,fill:'#FFB13D'});txt('NOT ENOUGH WING',W/2,368,46,{stroke:0});comic('CLUNK',W*0.24,560,80,t,16.6,{life:0.8,rot:-0.12,fill:'#FF4A4A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.2));F.shot(mix([2.2,2.8,7.6],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};

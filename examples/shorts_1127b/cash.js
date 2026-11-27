// ===== What would a million GTA dollars weigh in real cash? (pop culture + GTA 6 / money) =====
const TT=20.55;
const CU={c1:3.7,c2:6.3,c3:9.2,c4:11.85,c5:14.7,c6:17.05,c7:18.95};
// outfit set by w_lib (snapback+chain+shades)
const C=scene('city');
// ---------- stage props ----------
const ST=scene('stage');
const BILLM=toon(0x6FBF6A),BAND=toon(0xF5F0D0),DARK=toon(0x3F8A45);
function bundle(p,x,y,z,ry=0){const b=new THREE.Group();b.position.set(x,y,z);b.rotation.y=ry;p.add(b);part(b,new THREE.BoxGeometry(0.62,0.1,0.27),BILLM,[0,0.05,0],[1,1,1],[0,0,0],0.006);part(b,new THREE.BoxGeometry(0.1,0.104,0.274),BAND,[0,0.05,0],[1,1,1],[0,0,0],0);return b}
// table + kitchen scale + single bill
const TBL=stageProp('tbl',p=>{part(p,new THREE.BoxGeometry(4.2,0.14,2.0),toon(0x8C5E36),[0,1.0,0],[1,1,1],[0,0,0],0.015);for(const [x,z] of [[-1.9,-0.8],[1.9,-0.8],[-1.9,0.8],[1.9,0.8]])part(p,cap(0.06,0.95),toon(0x6B4426),[x,0.5,z]);
  part(p,new THREE.PlaneGeometry(40,40),toon(0x3A2A18),[0,0,0],[1,1,1],[-PI/2,0,0],0)});
const KS=stageProp('ks',p=>{part(p,new THREE.BoxGeometry(0.9,0.22,0.8),toon(0xF4F4F8),[0,0.11,0],[1,1,1],[0,0,0],0.03);part(p,new THREE.CylinderGeometry(0.42,0.42,0.04,32),toon(0xC9CDD6),[0,0.26,-0.02],[1,1,1],[0,0,0],0.01);part(p,new THREE.CylinderGeometry(0.06,0.06,0.04,12),toon(0x9AA0AA),[0,0.23,-0.02])});
const kscr=canvasTex(256,96);{const m=part(KS,new THREE.PlaneGeometry(0.46,0.16),new THREE.MeshBasicMaterial({map:kscr.tx}),[0,0.13,0.405],[1,1,1],[0,0,0],0)}
function kRead(s,col='#5BFF8A'){const c=kscr.ctx;c.fillStyle='#14202A';c.fillRect(0,0,256,96);c.fillStyle=col;c.font='900 62px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText(s,128,52);kscr.tx.needsUpdate=true}
const BILL=new THREE.Group();ST.S.add(BILL);part(BILL,new THREE.BoxGeometry(0.62,0.008,0.27),BILLM,[0,0,0],[1,1,1],[0,0,0],0.004);part(BILL,new THREE.CylinderGeometry(0.07,0.07,0.01,20),DARK,[0,0.002,0],[1,1,1],[0,0,0],0);for(const s of [-1,1])part(BILL,new THREE.BoxGeometry(0.06,0.01,0.06),DARK,[s*0.24,0.002,s*0.08],[1,1,1],[0,0,0],0);
// grid of 100 bundles (10k bills)
const GRID=new THREE.Group();ST.S.add(GRID);const gb=[];for(let i=0;i<100;i++){const L=Math.floor(i/20),k=i%20;gb.push(bundle(GRID,-1.35+(k%5)*0.66,1.07+L*0.1,-0.55+Math.floor(k/5)*0.3))}
// backpack on guy (parented to up)
mkProp('pack',p=>{part(p,new THREE.BoxGeometry(0.75,0.85,0.4),toon(0x2A2A35),[0,1.2,-0.62],[1,1,1],[0,0,0],0.06);part(p,new THREE.BoxGeometry(0.6,0.35,0.12),toon(0x3A3A48),[0,1.0,-0.85],[1,1,1],[0,0,0],0.03);for(const s of [-1,1])part(p,new THREE.BoxGeometry(0.08,0.7,0.06),toon(0x1A1A22),[s*0.28,1.3,-0.4],[1,1,1],[0.25,0,0],0.01);
  part(p,new THREE.BoxGeometry(0.62,0.12,0.27),BILLM,[0,1.66,-0.62],[1,1,1],[0,0,0.1],0.006)});
// pallet cube of $1 bills
const PAL=new THREE.Group();ST.S.add(PAL);part(PAL,new THREE.BoxGeometry(1.9,0.18,1.9),toon(0xB4843A),[0,0.09,0],[1,1,1],[0,0,0],0.01);
for(let y=0;y<9;y++)for(let i=0;i<3;i++)for(let j=0;j<6;j++)bundle(PAL,-0.62+i*0.62,0.18+y*0.1,-0.8+j*0.31+0.03*(y%2),0);
part(PAL,new THREE.BoxGeometry(1.92,0.9,0.02),new THREE.MeshToonMaterial({color:0xffffff,transparent:true,opacity:0.18,gradientMap:GM}),[0,0.63,0.97],[1,1,1],[0,0,0],0);
const pscr=canvasTex(320,110);part(PAL,new THREE.PlaneGeometry(1.1,0.38),new THREE.MeshBasicMaterial({map:pscr.tx,transparent:true}),[0,1.35,0.2],[1,1,1],[0,0,0],0);
{const c=pscr.ctx;c.fillStyle='#FFD23F';c.beginPath();c.roundRect(4,4,312,102,22);c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke();c.fillStyle='#111';c.font='900 64px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText('1,000 KG',160,58);pscr.tx.needsUpdate=true}
function stageAll(on){TBL.visible=on.tbl||false;KS.visible=on.ks||false;BILL.visible=on.bill||false;GRID.visible=on.grid||false;PAL.visible=on.pal||false}
// ---------- 2D ----------
function counter(x,y,v,label,col='#5BE37A'){panel(x,y,700,170,'rgba(10,12,25,0.88)',col,30);txt(label,x,y-44,40,{fill:col,sw:10});txt(v,x,y+26,86,{fill:'#fff',sw:16})}
function statue(x,y,s,a){if(a<=0)return;g.save();g.globalAlpha=a;g.translate(x,y);g.scale(s,s);g.fillStyle='#5FB3A1';g.strokeStyle='#111';g.lineWidth=6;
  // pedestal
  g.fillStyle='#C9BFA8';g.beginPath();g.moveTo(-70,0);g.lineTo(70,0);g.lineTo(52,-240);g.lineTo(-52,-240);g.closePath();g.fill();g.stroke();g.fillRect(-60,-260,120,20);g.strokeRect(-60,-260,120,20);
  g.fillStyle='#5FB3A1';g.beginPath();g.moveTo(-38,-260);g.lineTo(38,-260);g.lineTo(26,-430);g.lineTo(32,-470);g.lineTo(-26,-470);g.lineTo(-30,-430);g.closePath();g.fill();g.stroke();
  g.beginPath();g.arc(0,-492,22,0,7);g.fill();g.stroke();for(let i=0;i<7;i++){const an=-PI+i*PI/6;g.beginPath();g.moveTo(Math.cos(an)*18,-500+Math.sin(an)*18);g.lineTo(Math.cos(an)*44,-500+Math.sin(an)*44);g.lineWidth=7;g.stroke()}
  g.lineWidth=6;g.beginPath();g.moveTo(20,-460);g.lineTo(34,-560);g.lineTo(48,-556);g.lineTo(36,-456);g.closePath();g.fill();g.stroke();g.fillStyle='#FFB84A';g.beginPath();g.ellipse(41,-578,12,22,0,0,7);g.fill();g.stroke();g.restore()}
function cashStack(x,y,hpx,w=46){g.save();g.fillStyle='#6FBF6A';g.strokeStyle='#111';g.lineWidth=6;g.fillRect(x-w/2,y-hpx,w,hpx);g.strokeRect(x-w/2,y-hpx,w,hpx);g.strokeStyle='rgba(0,0,0,0.25)';g.lineWidth=2;for(let yy=y-12;yy>y-hpx;yy-=14){g.beginPath();g.moveTo(x-w/2,yy);g.lineTo(x+w/2,yy);g.stroke()}g.restore()}
// ---------- opening (loop): neon street, guy fanning cash ----------
const C0={p:[3.2,2.0,4.4],l:[0,1.45,-3.6]};
function openScene(t){C.mood('sunset');C.cop.c.visible=false;putGuy(C.S,0,0.18,-3.6,0.35);props.cash.visible=true;props.cash.position.set(0.38,1.0,0.42);
  guy.pose({...idle(t),armR:[0.5,-0.9],bendR:1.2,armL:[0.35+0.05*Math.sin(t*2*PI/(TT/8)),0],mouth:'grin',headYaw:-0.1,jump:0.015*Math.sin(t*2*PI/(TT/12))});C.car.c.position.set(-30,0,-0.6);C.car.c.rotation.y=0;C.car.spin(0)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();stageAll({});holder.rotation.order='XYZ';
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));C.shot(mix(C0.p,[2.8,1.9,3.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT WOULD',W/2,190,84,{sw:16});txt('$1,000,000',W/2,310,140,{fill:'#5BE37A',sw:26});txt('OF GTA CASH WEIGH?',W/2,430,84,{fill:'#FFD23F',sw:18});g.restore();
    pill('IN REAL LIFE',W/2,560,50,'#FF3DA6','#fff',t,1.9,CU.c1)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);setBG('gold');stageAll({tbl:1,ks:1,bill:1});KS.position.set(0.3,1.07,0.1);const drop=easeOut(seg(t,4.2,4.7));BILL.position.set(0.3,lerp(2.4,1.37,drop),0.08);BILL.rotation.set(0.25*(1-drop)*Math.sin(t*9),0.4,0.2*(1-drop));
    kRead(drop>=1?'1 g':'0 g');putGuy(ST.S,-0.9,0,-1.4,0.35);guy.pose({...idle(t),armL:[0.3,0],armR:[1.2,-0.5],bendR:1.4,headYaw:0.5,headPitch:0.35,look:0.5,lookY:-0.6,mouth:'o',mouthSize:0.6});
    ST.shot([0.9,2.7,5.6],[-0.3,1.45,0]);if(t>4.75){const p=proj(new THREE.Vector3(0.3,1.2,0.5),ST.cam);const s=pop(t,4.75);g.save();g.translate(p[0],p[1]-330);g.scale(s,s);txt('1 GRAM',0,0,90,{fill:'#FFD23F',sw:18});g.restore()}
    pill('= A PAPERCLIP',W/2,330,60,'#3FF0FF','#111',t,5.2,CU.c2);comic('PLINK',W*0.72,620,90,t,4.7,{life:0.7,rot:0.1,fill:'#5BE37A'})}
  else if(t<CU.c4){flash(t,CU.c2,0.15);setBG('gold');stageAll({tbl:1,grid:1});const n=Math.round(lerp(0,100,ease(seg(t,6.5,8.9))));gb.forEach((b,i)=>{b.visible=i<n;b.position.y=1.07+Math.floor(i/20)*0.1+(i===n-1?0.08:0)});
    if(t<CU.c3){putGuy(ST.S,1.0,0,-1.5,-0.25);guy.pose({...idle(t),armL:[1.0,0.4],armR:[1.0,0.4],bendL:0.6,bendR:0.6,mouth:'grin',headYaw:-0.4,look:-0.5});ST.shot([0.7,4.0,8.2],[0.3,1.2,0]);
      counter(W/2,330,(n*100).toLocaleString('en-US')+' BILLS','$100 BILLS');comic('STACK IT',W*0.3,1640,84,t,7.0,{life:0.9,rot:-0.08,fill:'#FFD23F'})}
    else{GRID.visible=false;props.pack.visible=true;const u=t-CU.c3;const wk=Math.sin(u*7);putGuy(ST.S,lerp(1.4,-0.6,seg(t,CU.c3,CU.c4)),0,1.4,-PI/2-0.35);guy.pose({...walk(u,7),armL:[0.3,0.5],armR:[0.3,0.5],bendL:0.9,bendR:0.9,mouth:'grin'});
      ST.shot([0.6,2.3,9.4],[0.2,1.4,1.4]);flash(t,CU.c3,0.12);txtA('≈ 10 KG',W/2,330,130,pop(t,9.5),{fill:'#5BE37A',sw:24});pill('EASY CARRY',W/2,470,56,'#FFFFFF','#111',t,10.4,CU.c4);
      comic('ZIP!',W*0.7,700,90,t,9.35,{life:0.6,rot:0.1,fill:'#3FF0FF'})}}
  else if(t<CU.c5){flash(t,CU.c4,0.15);setBG('red');stageAll({pal:1});TBL.visible=true;TBL.children.forEach((c,i)=>c.visible=i===TBL.children.length-1);
    const land=13.2,dy=t<land?lerp(6,0,seg(t,12.4,land)**2):0;PAL.position.set(0.5,dy,0);const sh=t>land&&t<land+0.4?0.06*Math.sin(t*90):0;
    putGuy(ST.S,-1.0,0,0.6,0.35);const hit=t>land;guy.pose({...idle(t),armL:[hit?2.6:0.4,0],armR:[hit?2.6:0.4,0],mouth:'o',mouthSize:hit?1.2:0.7,wide:true,blink:false,jump:hit&&t<land+0.4?0.12:0,lookY:t<land?0.8:0});
    ST.shot([1.2+sh,2.8,9.4],[-0.1,1.3,0]);counter(W/2,320,'1,000,000','$1 BILLS','#FF4A4A');comic('THUD!',W*0.5,820,130,t,land,{life:0.9,rot:-0.06,fill:'#FFD23F'});
    pill('A FULL TON',W/2,1640,70,'#FF4A4A','#fff',t,13.6,CU.c5);TBL.children.forEach(c=>c.visible=true);TBL.visible=false}
  else if(t<CU.c6){flash(t,CU.c5,0.15);setBG('linear-gradient(#4FB8FF,#9BDCFF 55%,#E9F7FF)');clear3d();
    // 2D comparison: stack of a million $1 bills vs statue
    const gy=1520;g.fillStyle='#4FB860';g.fillRect(0,gy,W,H-gy);g.fillStyle='#2E86DE';g.fillRect(0,gy+20,W,60);
    const sc=1100/109;const hS=easeOut(seg(t,14.9,16.2))*109*sc;statue(W*0.32,gy,93*sc/580,easeOut(seg(t,14.8,15.1)));cashStack(W*0.7,gy,hS,70);
    if(t>15.2)txtA('93 M',W*0.32,gy-93*sc-60,60,seg(t,15.2,15.5),{fill:'#fff',sw:12});txtA((Math.round(hS/sc))+' M',W*0.7,gy-hS-60,66,1,{fill:'#5BE37A',sw:14});
    g.save();g.strokeStyle='#FF4A4A';g.lineWidth=6;g.setLineDash([18,12]);if(t>16.2){g.beginPath();g.moveTo(W*0.12,gy-93*sc);g.lineTo(W*0.9,gy-93*sc);g.stroke()}g.restore();
    // tiny guy at base for scale
    g.save();g.fillStyle='#FFD84A';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.arc(W*0.86,gy-14,9,0,7);g.fill();g.stroke();g.fillStyle='#2FB5A8';g.fillRect(W*0.86-8,gy-5,16,5);g.restore();
    comic('TALLER!',W*0.3,390,110,t,16.25,{life:0.8,rot:-0.06,fill:'#FFD23F'});pill('109 M OF CASH',W/2,1640,64,'#5BE37A','#111',t,15.5,CU.c6)}
  else if(t<CU.c7){flash(t,CU.c6,0.15);C.mood('night');C.cop.c.visible=true;const u=t-CU.c6;
    C.car.c.position.set(-30,0,-0.6);putGuy(C.S,lerp(2,0.8,seg(t,CU.c6,CU.c7)),0,0.6,-PI/2);guy.pose({...run(u*0.35),armL:[1.2,-1.0],armR:[1.2,-1.0],bendL:0.3,bendR:0.3,mouth:'teeth',teethGap:0.5});
    stageAll({});C.S.add(PAL);PAL.visible=true;PAL.position.set(holder.position.x+1.6,0,0.6);PAL.scale.setScalar(0.8);
    C.cop.c.position.set(lerp(9,6.2,ease(seg(t,CU.c6,CU.c7))),0,0.4);C.cop.c.rotation.y=PI;const on=((t*4)%1)<0.5;C.copR.color.setHex(on?0xFF2A2A:0x551010);C.copB.color.setHex(on?0x10204A:0x2A6BFF);
    C.shot([-6,2.6,4],[4,1.0,0.4]);comic('NOPE.',W*0.3,520,120,t,17.7,{life:1.0,rot:-0.1,fill:'#FF4A4A'});pill('WANTED: SLOW',W/2,1640,60,'#FF4A4A','#fff',t,17.4,CU.c7);
    ST.S.add(PAL);PAL.scale.setScalar(1)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c7,TT-0.1));C.shot(mix([4.2,2.4,5.6],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};

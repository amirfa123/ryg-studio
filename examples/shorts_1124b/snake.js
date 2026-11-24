// ===== Do snakes really unhinge their jaws, like the GTA 6 pet snake? (pop culture + GTA 6 / animals) =====
const TT=21.0;
const CU={c1:4.5,c2:8.05,c3:11.5,c4:16.15,c5:19.42};
guy.outfit({bandana:1,shades:1});
// ---------- snake builder (segments of spheres + head; head faces +z) ----------
function makeSnake(n,sp,r0,c1,c2){const o={g:new THREE.Group(),segs:[],n,sp,r0};
  for(let i=0;i<n;i++){const k=i/(n-1);const r=r0*(i<3?0.8+0.07*i:1-0.75*Math.pow(k,2.2));const m=part(o.g,SPH,toon(i%4<2?c1:c2),[0,0,0],[r,r,r],[0,0,0],0.006);m.userData.r=r;o.segs.push(m)}
  const hd=new THREE.Group();o.g.add(hd);o.head=hd;const HM=toon(c1);
  part(hd,SPH,HM,[0,0.02,0.05],[r0*1.25,r0*0.8,r0*1.7],[0,0,0],0.008);part(hd,SPH,toon(c2),[0,-0.03,0.05],[r0*1.15,r0*0.55,r0*1.6],[0,0,0],0.006);
  for(const s of [-1,1]){part(hd,SPH,toon(0xFFF3A0),[s*r0*0.8,r0*0.45,r0*0.6],[r0*0.32,r0*0.32,r0*0.32],[0,0,0],0.004);part(hd,SPH,basic(0x111111),[s*r0*0.98,r0*0.5,r0*0.72],[r0*0.12,r0*0.22,r0*0.12],[0,0,0],0)}
  o.tongue=new THREE.Group();o.tongue.position.set(0,-0.01,r0*1.7);hd.add(o.tongue);const TM=toon(0xE0304A);part(o.tongue,new THREE.BoxGeometry(r0*0.12,r0*0.06,r0*0.9),TM,[0,0,r0*0.45],[1,1,1],[0,0,0],0);for(const s of [-1,1])part(o.tongue,new THREE.BoxGeometry(r0*0.08,r0*0.05,r0*0.4),TM,[s*r0*0.09,0,r0*1.0],[1,1,1],[0,s*0.5,0],0);
  o.place=(fn,t,look)=>{for(let i=0;i<n;i++){const p=fn(i);o.segs[i].position.set(p[0],p[1],p[2])}const p0=new THREE.Vector3(...fn(0)),p1=new THREE.Vector3(...fn(1));const d=p0.clone().sub(p1).normalize();hd.position.copy(p0.clone().addScaledVector(d,r0*0.9));
    if(look)hd.lookAt(new THREE.Vector3(...look));else hd.lookAt(p0.clone().addScaledVector(d,3));const fl=((t*1.7)%1);o.tongue.scale.z=fl<0.35?Math.sin(fl/0.35*PI):0.01};
  return o}
// ---------- scene 1: neon street at sunset with the pet snake ----------
const SN1=makeSnake(30,0.08,0.1,0x3E8E3A,0xD8C24A);
function petPath(t){return i=>{const s=i*0.075;const neck=Math.max(0,1-i/7);return [-0.12+s*0.85,0.18+SN1.segs[i].userData.r+0.55*neck*neck+0.02*Math.sin(t*3),-2.75+s*0.12+0.2*Math.sin(s*3.2-t*2.5)*(1-neck)]}}
function openScene(t){const C=scene('city');C.mood('sunset');C.car.c.visible=false;C.cop.c.visible=false;if(!SN1.g.parent)C.S.add(SN1.g);SN1.g.visible=true;
  C.S.add(holder);holder.visible=true;holder.position.set(0.75,0.18,-4.1);holder.rotation.set(0,-0.45,0);holder.scale.setScalar(1);
  guy.pose(idle(t,{mouth:'grin',headPitch:0.22,headYaw:-0.2,armL:[0.35,0],armR:[0.25,-0.2]}));SN1.place(petPath(t),t,[1.2,1.4,5.0]);return C}
const C0={p:[1.4,1.5,5.4],l:[0.25,0.95,-3.3]};
// ---------- scene 3: rubber band demo (training room) ----------
const RB={S:new THREE.Scene()};lights(RB.S);RB.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(RB.S,new THREE.PlaneGeometry(30,30),toon(0xE9DCC0),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(RB.S,new THREE.PlaneGeometry(30,12),toon(0x2E8F7A),[0,6,-3],[1,1,1],[0,0,0],0);
part(RB.S,new THREE.BoxGeometry(30,0.5,0.1),toon(0x23705F),[0,0.25,-2.95],[1,1,1],[0,0,0],0);
{const bt=canvasTex(512,320);const c=bt.ctx;c.fillStyle='#1F3B33';c.fillRect(0,0,512,320);c.strokeStyle='#F4F0E0';c.lineWidth=8;c.lineCap='round';
  c.beginPath();c.moveTo(150,260);c.lineTo(240,70);c.moveTo(362,260);c.lineTo(272,70);c.stroke();c.strokeStyle='#FF8FB1';c.lineWidth=10;c.beginPath();c.moveTo(240,70);for(let k=1;k<=6;k++)c.lineTo(240+k*32/6,70+(k%2?-14:14));c.stroke();
  c.fillStyle='#F4F0E0';c.font='900 40px Inter';c.textAlign='center';c.fillText('JAW = 2 BONES',256,305);
  part(RB.S,new THREE.BoxGeometry(3.3,2.1,0.1),toon(0x6B4426),[-2.2,2.9,-2.9],[1,1,1],[0,0,0],0.01);part(RB.S,new THREE.PlaneGeometry(3.1,1.9),new THREE.MeshBasicMaterial({map:bt.tx}),[-2.2,2.9,-2.84],[1,1,1],[0,0,0],0)}
part(RB.S,new THREE.BoxGeometry(1.0,1.1,0.6),toon(0xC9A27A),[2.4,0.55,-2.3],[1,1,1],[0,0,0],0.01);part(RB.S,new THREE.CylinderGeometry(0.25,0.3,0.45,16),toon(0x9A6A3B),[2.4,1.33,-2.3],[1,1,1],[0,0,0],0.01);for(let k=0;k<5;k++)part(RB.S,SPH,toon(k%2?0x3DBA6A:0x2E9E5B),[2.4+Math.cos(k*1.3)*0.22,1.75+0.1*hash(k),-2.3+Math.sin(k*1.3)*0.18],[0.22,0.3,0.22],[0,0,0],0.01);
const BAND=new THREE.Group();guy.up.add(BAND);BAND.visible=false;const BONEM=toon(0xF4EEDC);
const BL=part(BAND,cap(0.05,0.44),BONEM,[0,0,0],[1,1,1],[0,0,PI/2],0.006),BR2=part(BAND,cap(0.05,0.44),BONEM,[0,0,0],[1,1,1],[0,0,PI/2],0.006);
const KL=part(BAND,SPH,BONEM,[0,0,0],[0.075,0.075,0.075],[0,0,0],0.004),KR=part(BAND,SPH,BONEM,[0,0,0],[0.075,0.075,0.075],[0,0,0],0.004);
const LIG=part(BAND,new THREE.CylinderGeometry(1,1,1,16),toon(0xFF6FA0),[0,0,0],[1,1,1],[0,0,PI/2],0);
function bandPose(t,sx,o={}){BAND.visible=true;const y=1.33,z=0.62;BL.position.set(sx-0.2,y,z);BR2.position.set(-sx+0.2,y,z);KL.position.set(sx-0.43,y,z);KR.position.set(-sx+0.43,y,z);
  const len=Math.max(0.02,2*(sx-0.45));LIG.position.set(0,y,z);LIG.scale.set(lerp(0.045,0.022,clamp(len)),len,lerp(0.045,0.022,clamp(len)));
  guy.pose({reachL:[sx,y-0.02,z],reachR:[-sx,y-0.02,z],poleL:[1,-1,0],poleR:[-1,-1,0],blink:BLINK(t),mouth:'teeth',teethGap:0.4,...o})}
// ---------- scene 5: swamp python with a big meal ----------
const SN2=makeSnake(40,0.1,0.12,0x5A4A2A,0xC9A86A);const BULGE=18;
function pyPath(t){return i=>{const s=i*0.1;let r=SN2.segs[i].userData.r;return [6.7+0.35*Math.sin(s*1.6-0.4+0.15*Math.sin(t)),0.0+r*0.9,2.4-s*0.95]}}
{for(let i=BULGE-3;i<=BULGE+3;i++){const k=1-Math.abs(i-BULGE)/4;const r=SN2.segs[i].userData.r*(1+1.6*Math.sin(k*PI/2));SN2.segs[i].scale.setScalar(r);SN2.segs[i].userData.r=r}}
// ---------- 2D: skull from below ----------
function skullBelow(cx,cy,S,spread,hl,t){g.save();g.translate(cx,cy);g.scale(S,S);
  g.fillStyle='#BFC6CF';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(0,-330);g.bezierCurveTo(120,-320,190,-60,200,160);g.lineTo(-200,160);g.bezierCurveTo(-190,-60,-120,-320,0,-330);g.fill();g.stroke();
  g.fillStyle='#9EA7B2';g.beginPath();g.ellipse(0,40,70,120,0,0,7);g.fill();
  const tip=12+spread*150;
  for(const s of [-1,1]){const on=hl===s||hl===2;g.lineCap='round';g.strokeStyle='#111';g.lineWidth=58;g.beginPath();g.moveTo(s*230,250);g.quadraticCurveTo(s*(250+spread*40),-80,s*tip,-300);g.stroke();
    g.strokeStyle=on?'#FFD23F':'#F4EEDC';g.lineWidth=40;g.stroke();g.fillStyle='#F4EEDC';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(s*230,250,38,0,7);g.fill();g.stroke()}
  // ligament spring
  g.strokeStyle='#111';g.lineWidth=26;g.lineJoin='round';const zz=()=>{g.beginPath();g.moveTo(-tip,-300);const n=8;for(let k=1;k<n;k++)g.lineTo(-tip+2*tip*k/n,-300+(k%2?-18:18));g.lineTo(tip,-300)};zz();g.stroke();g.strokeStyle='#FF6FA0';g.lineWidth=14;zz();g.stroke();g.restore()}
// ---------- 2D: top-view swallowing walk ----------
function walkDiagram(t){g.fillStyle='#E8C98A';g.fillRect(0,0,W,H);for(let i=0;i<40;i++){g.fillStyle='rgba(160,120,60,0.25)';g.beginPath();g.arc(hash(i)*W,hash(i*3)*H,6+hash(i*5)*12,0,7);g.fill()}
  const steps=Math.floor(clamp((t-11.75)/0.42,0,10));const ph=(t-11.75)/0.42-steps;const mouthY=760,eggY0=520;const prog=clamp((steps+easeOut(clamp(ph*2)))/9);
  const eggY=lerp(eggY0,1300,prog);const cx=W/2;
  // body (bulge where egg is)
  g.strokeStyle='#111';g.lineWidth=200;g.lineCap='round';g.beginPath();g.moveTo(cx,mouthY+60);g.bezierCurveTo(cx,1300,cx-120,1600,cx+60,2000);g.stroke();g.strokeStyle='#3E8E3A';g.lineWidth=184;g.stroke();
  for(let k=0;k<6;k++){g.fillStyle='#D8C24A';g.beginPath();g.ellipse(cx+(k%2?30:-30),mouthY+180+k*170,26,40,0,0,7);g.fill()}
  if(eggY>mouthY+40){g.fillStyle='#111';g.beginPath();g.ellipse(cx,eggY,128,150,0,0,7);g.fill();g.fillStyle='#4FA34A';g.beginPath();g.ellipse(cx,eggY,118,140,0,0,7);g.fill()}
  // head + jaw halves (alternate)
  const L=(steps%2===0)?-1:1;const fw=Math.sin(clamp(ph)*PI);
  for(const s of [-1,1]){const fwd=(s===L?fw:0)*70;g.save();g.translate(cx+s*118,mouthY-20-fwd);g.rotate(s*0.12);g.fillStyle=t>11.6&&s===L?'#FFD23F':'#F4EEDC';g.strokeStyle='#111';g.lineWidth=8;rr(-26,-180,52,260,26);g.fill();g.stroke();g.restore()}
  g.fillStyle='#3E8E3A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(cx,mouthY+10,150,120,0,PI,0);g.lineTo(cx+150,mouthY+70);g.lineTo(cx-150,mouthY+70);g.closePath();g.fill();g.stroke();
  for(const s of [-1,1]){g.fillStyle='#FFF3A0';g.beginPath();g.arc(cx+s*80,mouthY-30,24,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.ellipse(cx+s*84,mouthY-30,7,16,0,0,7);g.fill()}
  if(eggY<=mouthY+40){g.fillStyle='#FFFDF4';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(cx,eggY,110,140,0,0,7);g.fill();g.stroke();g.fillStyle='#E9E2CC';g.beginPath();g.ellipse(cx-35,eggY-40,25,35,-0.3,0,7);g.fill()}
  return {L,ph}}
function teethInset(x,y,R,a,t){if(a<=0)return;g.save();g.globalAlpha=a;g.translate(x,y);g.scale(a,a);g.fillStyle='#F7D9DE';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.save();g.beginPath();g.arc(0,0,R-6,0,7);g.clip();
  g.fillStyle='#E07A8C';g.fillRect(-R,R*0.25,2*R,R);for(let k=-3;k<=3;k++){const bx=k*62;g.fillStyle='#FFFDF4';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(bx-22,R*0.28);g.quadraticCurveTo(bx-10,-R*0.3,bx+34,-R*0.42);g.quadraticCurveTo(bx+8,-R*0.1,bx+20,R*0.28);g.closePath();g.fill();g.stroke()}
  g.restore();g.restore();}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();BAND.visible=false;SN1.g.visible=false;SN2.g.visible=false;holder.visible=true;
  if(t<CU.c1){const C=openScene(t);const k=ease(seg(t,0.1,CU.c1));C.shot(mix(C0.p,[1.0,1.3,4.4],k),mix(C0.l,[0.0,0.85,-3.0],k));
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('DO SNAKES REALLY',W/2,190,84,{sw:16});txt('UNHINGE',W/2,300,130,{fill:'#7CFF6B',sw:24});txt('THEIR JAWS?',W/2,420,100,{sw:20});g.restore();
    pill('LIKE THE GTA 6 PET SNAKE',W/2,1240,50,'#FF3DA6','#fff',t,2.55,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('teal');const zoom=lerp(1.0,1.12,ease(seg(t,CU.c1,CU.c2)));
    skullBelow(W/2,900,zoom,0,t>6.7?(t<7.1?-1:t<7.5?1:2):0,t);
    if(t<6.0){const a=easeOut(seg(t,CU.c1,CU.c1+0.25))*(1-seg(t,5.7,6.0));txtA('UNHINGE?',W/2,330,120,a,{fill:'#FFD23F',sw:22});if(t>4.6){g.save();g.globalAlpha=a;cross(W/2,330,2.6);g.restore()}}
    comic('NOPE!',W*0.72,620,130,t,4.6,{life:0.9,rot:0.14,fill:'#FF4A4A'});
    pill('LOWER JAW',W/2,330,84,'#FFFFFF','#111',t,5.75,6.7);pill('2 SEPARATE BONES',W/2,330,72,'#FFD23F','#111',t,6.75,CU.c2);
    if(t>5.75){const a=fade(t,5.75,CU.c2);arrow(160,1150,330,1050,'#FFD23F',18);arrow(920,1150,750,1050,'#FFD23F',18);txtA('L',150,1210,70,a,{fill:'#FFD23F'});txtA('R',930,1210,70,a,{fill:'#FFD23F'})}}
  else if(t<CU.c3){flash(t,CU.c2,0.15);RB.S.add(holder);holder.position.set(0,0,0.5);holder.rotation.set(0,0,0);holder.scale.setScalar(1);
    const sp=easeOut(seg(t,10.6,11.25));const wob=0.02*Math.sin(t*30)*seg(t,10.6,10.9)*(1-seg(t,11.0,11.4));bandPose(t,0.46+0.42*sp+wob,{wide:sp>0.3,mouth:sp>0.3?'o':'grin',mouthSize:0.7});
    const k=ease(seg(t,CU.c2,CU.c3));RB.cam.position.set(lerp(1.4,0.6,k),lerp(2.3,2.1,k),lerp(7.4,6.4,k));RB.cam.lookAt(0,1.55,0.4);setBG('#2E8F7A');r.setClearColor(0,0);r.render(RB.S,RB.cam);
    pill('STRETCHY LIGAMENT',W/2,330,70,'#FF6FA0','#fff',t,9.1,10.55);pill('SPREAD APART',W/2,330,84,'#FFD23F','#111',t,10.6,CU.c3);
    comic('BOING!',W*0.26,620,100,t,10.75,{life:0.8,rot:-0.12,fill:'#FF8FB1'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();const st=walkDiagram(t);
    if(t>11.75&&t<13.6){pill(st.L<0?'LEFT SIDE':'RIGHT SIDE',W/2,330,78,'#FFD23F','#111',t,11.75,13.6)}
    if(t>12.3)comic('WALK!',W*0.76,560,90,t,12.35,{life:0.8,rot:0.12,fill:'#7CFF6B'});
    const ia=easeOut(seg(t,13.6,13.95));teethInset(W*0.7,560,250,ia,t);pill('HOOK TEETH',W/2,330,84,'#FFFFFF','#111',t,14.45,CU.c4);
    if(t>14.6){const a=fade(t,14.6,CU.c4);g.save();g.globalAlpha=a;arrow(W*0.7+150,560-40,W*0.7-150,560-40,'#7CFF6B',16);g.restore();txtA('ONLY ONE WAY: IN',W*0.7,860,46,a,{fill:'#fff'})}}
  else if(t<CU.c5){flash(t,CU.c4,0.15);const S=scene('swamp');for(const a of S.gators)a.visible=false;if(!SN2.g.parent)S.S.add(SN2.g);SN2.g.visible=true;SN2.place(pyPath(t),t);
    S.S.add(holder);holder.position.set(5.75,0,2.6);holder.rotation.set(0,0.55,0);holder.scale.setScalar(1);const pt=t>17.4;
    guy.pose(idle(t,{mouth:t>17.55?'o':'grin',mouthSize:0.8,wide:t>17.55,armR:pt?[1.25,-1.0]:[0.3,0],headYaw:0.35,brow:t>17.55?0.02:0}));
    const k=ease(seg(t,CU.c4,CU.c5));S.shot([lerp(7.6,7.3,k),lerp(2.8,2.5,k),lerp(10.6,9.8,k)],[6.25,0.05,1.2]);
    const hp=SN2.head.position,bp=SN2.segs[BULGE].position;const [hx,hy]=proj(hp,S.cam),[bx,by]=proj(bp,S.cam);
    if(t>17.5){const a=fade(t,17.5,CU.c5);const hw=proj(new THREE.Vector3(hp.x+0.17,hp.y,hp.z),S.cam)[0]-proj(new THREE.Vector3(hp.x-0.17,hp.y,hp.z),S.cam)[0];
      g.save();g.globalAlpha=a;g.strokeStyle='#FFD23F';g.lineWidth=10;g.beginPath();g.arc(hx,hy,60,0,7);g.stroke();g.strokeStyle='#FF3DA6';g.beginPath();g.arc(bx,by,125,0,7);g.stroke();g.restore();
      txtA('HEAD',hx,hy-100,52,a,{fill:'#FFD23F'});txtA('DINNER',bx,by-170,52,a,{fill:'#FF8FC8'})}
    pill('WIDER THAN ITS HEAD!',W/2,1250,70,'#FFD23F','#111',t,18.2,CU.c5);comic('GULP',W*0.75,620,100,t,17.0,{life:0.8,rot:0.12,fill:'#7CFF6B'})}
  else{const C=openScene(t-TT);const k=ease(seg(t,CU.c5,TT-0.25));C.shot(mix([3.6,2.4,6.0],C0.p,k),mix([0.3,1.2,-3.4],C0.l,k));flash(t,CU.c5,0.15)}
  vignette();captions(t)};

// ===== How strong is an alligator's bite, the thing eating everyone in GTA 6? (pop culture + GTA 6 / animals) =====
const TT=18.95;
const CU={c1:5.35,c2:7.9,c3:9.95,c4:12.05,c5:14.85,c6:17.25};
guy.outfit({snapforward:1,shades:1});
const SW=scene('swamp');SW.S.fog.color.set(0xC98A7A);
// ---- original cartoon gator with moving jaw + legs ----
function mkGator(sc){const a=new THREE.Group();sc.add(a);const D=toon(0x2F5A22),L=toon(0x7E9F45),Wt=toon(0xF4F0D8);
  part(a,SPH,D,[0,0.32,0],[1.25,0.32,0.5],[0,0,0],0.012);
  for(let k=0;k<6;k++)part(a,new THREE.ConeGeometry(0.07,0.16,4),L,[0.9-k*0.36,0.62,0],[1,1,1],[0,0,0],0.004);
  const tail=new THREE.Group();tail.position.set(-1.1,0.3,0);a.add(tail);part(tail,new THREE.ConeGeometry(0.3,1.8,10),D,[-0.85,0,0],[1,0.55,1],[0,0,PI/2],0.01);
  const head=new THREE.Group();head.position.set(1.15,0.36,0);a.add(head);
  const up=new THREE.Group();head.add(up);part(up,new THREE.BoxGeometry(1.1,0.18,0.46),D,[0.5,0.06,0],[1,1,1],[0,0,0],0.012);
  for(const s of [-1,1]){part(up,SPH,Wt,[0.12,0.2,s*0.15],[0.1,0.1,0.1],[0,0,0],0.006);part(up,SPH,basic(0x111111),[0.18,0.21,s*0.15],[0.045,0.065,0.045],[0,0,0],0);for(let k=0;k<6;k++)part(up,new THREE.ConeGeometry(0.03,0.08,4),Wt,[0.2+k*0.15,-0.06,s*0.2],[1,1,1],[PI,0,0],0)}
  const lo=new THREE.Group();head.add(lo);part(lo,new THREE.BoxGeometry(1.05,0.12,0.42),L,[0.48,-0.08,0],[1,1,1],[0,0,0],0.012);
  for(const s of [-1,1])for(let k=0;k<5;k++)part(lo,new THREE.ConeGeometry(0.028,0.07,4),Wt,[0.25+k*0.16,-0.0,s*0.18],[1,1,1],[0,0,0],0);
  const legs=[];for(const [x,z] of [[0.75,0.42],[0.75,-0.42],[-0.65,0.42],[-0.65,-0.42]]){const l=new THREE.Group();l.position.set(x,0.25,z);a.add(l);part(l,cap(0.09,0.22),D,[0,-0.12,0],[1,1,1],[0,0,0],0.008);part(l,SPH,D,[0.08,-0.24,0],[0.14,0.05,0.1],[0,0,0],0.006);legs.push(l)}
  return {a,tail,head,up,lo,legs,anim(t,open=0,gait=0,sp=10){up.rotation.z=open*0.45;lo.rotation.z=-open*0.15;tail.rotation.y=0.25*Math.sin(t*(gait?sp:3));legs.forEach((l,i)=>l.rotation.z=gait*0.7*Math.sin(t*sp+(i%3?PI:0)))}}}
const GZ=mkGator(SW.S);
// shell prop (empty cartoon shell) + fragments
const SHELL=new THREE.Group();GZ.head.add(SHELL);SHELL.position.set(0.72,0.0,0);
part(SHELL,new THREE.SphereGeometry(1,20,10,0,PI*2,0,PI/2),toon(0x8A6A2E),[0,-0.02,0],[0.2,0.15,0.2],[0,0,0],0.008);
part(SHELL,new THREE.CylinderGeometry(0.21,0.21,0.03,20),toon(0xD8C27A),[0,-0.03,0],[1,1,1],[0,0,0],0.006);
for(let k=0;k<6;k++){const a2=k/6*PI*2;part(SHELL,new THREE.CylinderGeometry(0.045,0.045,0.02,6),toon(0xB89A4E),[Math.cos(a2)*0.11,0.1,Math.sin(a2)*0.11],[1,1,1],[Math.sin(a2)*0.5,0,-Math.cos(a2)*0.5],0)}
part(SHELL,new THREE.CylinderGeometry(0.05,0.05,0.02,6),toon(0xB89A4E),[0,0.155,0],[1,1,1],[0,0,0],0);
const FR=[];{const fg=new THREE.Group();SW.S.add(fg);for(let k=0;k<10;k++){const m=part(fg,new THREE.TetrahedronGeometry(0.07+0.03*hash(k)),toon(k%2?0x8A6A2E:0xD8C27A),[0,0,0],[1,1,1],[0,0,0],0.004);m.userData.v=[(hash(k*3)-0.5)*3,1.5+hash(k*5)*2,(hash(k*7)-0.5)*3];FR.push(m)}FR.g=fg}
// rubber band around the snout
const BAND=new THREE.Group();GZ.head.add(BAND);BAND.position.set(0.72,0.005,0);BAND.rotation.set(0,PI/2,0);
part(BAND,new THREE.TorusGeometry(1,0.12,10,36),toon(0xFF5FA2),[0,0,0],[0.27,0.18,1],[0,0,0],0.004);
// ---- opening scene ----
const C0={p:[5.0,2.1,15.0],l:[1.15,0.8,2.8]};
function openScene(t){GZ.a.visible=true;GZ.a.position.set(2.3,-0.18,3.6);GZ.a.rotation.set(0,PI-0.35,0);const snap=Math.max(0,Math.sin(t*2*PI/1.4));GZ.anim(t,0.15+0.75*snap*snap,0,3);
  SHELL.visible=false;BAND.visible=false;FR.g.visible=false;putGuy(SW.S,0,0.51,2.1,0.55);
  guy.pose({armL:[0.55,0.1],armR:[0.55,-0.1],bendL:0.6,bendR:0.6,blink:BLINK(t),mouth:'o',mouthSize:0.6,wide:true,look:0.5,lookY:-0.4,headYaw:0.35,headPitch:0.15,jump:0.01*Math.sin(t*2*PI/1.4)});
  SW.gators.forEach((g2,i)=>{g2.position.y=-0.5+0.04*Math.sin(t*2*PI/1.4+i)});
  return snap}
const DUSK='linear-gradient(#3B1E5E 0%,#A8467A 40%,#FF8A5B 72%,#FFC977 100%)';
function swampShot(p,l){SW.shot(p,l);setBG(DUSK)}
// ---- 2D: bite gauge ----
function gauge(cx,cy,R,v,t){g.save();g.translate(cx,cy);g.lineCap='round';g.strokeStyle='#111';g.lineWidth=70;g.beginPath();g.arc(0,0,R,PI,2*PI);g.stroke();
  const segs=[['#5BE37A',0,0.4],['#FFD23F',0.4,0.7],['#FF4A4A',0.7,1]];for(const [c,a,b] of segs){g.strokeStyle=c;g.lineWidth=50;g.beginPath();g.arc(0,0,R,PI+a*PI,PI+b*PI);g.stroke()}
  for(let k=0;k<=4;k++){const a=PI+k/4*PI;txt(String(k*500),Math.cos(a)*(R-110),Math.sin(a)*(R-110),40,{sw:8})}
  const a=PI+clamp(v/2000)*PI+0.03*Math.sin(t*40)*clamp(v/2000-0.97,0,1)*30;g.strokeStyle='#111';g.lineWidth=30;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*(R-40),Math.sin(a)*(R-40));g.stroke();g.strokeStyle='#fff';g.lineWidth=16;g.stroke();
  g.fillStyle='#111';g.beginPath();g.arc(0,0,40,0,7);g.fill();g.fillStyle='#FF4A4A';g.beginPath();g.arc(0,0,26,0,7);g.fill();g.restore()}
function jawIcon(x,y,s,open,t){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=10;g.lineJoin='round';
  g.save();g.rotate(-open*0.5);g.fillStyle='#3E7A2E';g.beginPath();g.moveTo(-160,0);g.lineTo(200,-10);g.lineTo(210,-50);g.lineTo(-120,-90);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';for(let k=0;k<8;k++){g.beginPath();g.moveTo(-90+k*36,-4);g.lineTo(-74+k*36,24);g.lineTo(-58+k*36,-4);g.fill();g.stroke()}
  g.fillStyle='#fff';g.beginPath();g.arc(-60,-80,24,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(-54,-80,10,0,7);g.fill();g.restore();
  g.fillStyle='#7E9F45';g.beginPath();g.moveTo(-160,10);g.lineTo(200,10);g.lineTo(190,50);g.lineTo(-140,60);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';for(let k=0;k<8;k++){g.beginPath();g.moveTo(-80+k*36,12);g.lineTo(-64+k*36,-14);g.lineTo(-48+k*36,12);g.fill();g.stroke()}g.restore()}
// ---- 2D: bars ----
function bigBar(x,y,w,h,f,col,label,val){g.save();g.fillStyle='rgba(0,0,0,0.4)';rr(x,y,w,h,24);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke();const hh=(h-12)*clamp(f);if(hh>2){g.fillStyle=col;rr(x+6,y+h-6-hh,w-12,hh,18);g.fill()}g.restore();txt(label,x+w/2,y+h+70,64,{sw:12});txt(val,x+w/2,y+h-12-hh-50,58,{fill:'#FFD23F',sw:12})}
// ---- 2D: muscle diagram ----
function muscleDiagram(t,t0){const cx=W/2,cy=930;g.save();g.translate(cx,cy);g.strokeStyle='#111';g.lineWidth=12;g.lineJoin='round';
  // skull side view
  g.fillStyle='#F4EEDC';g.beginPath();g.moveTo(-330,-40);g.quadraticCurveTo(-300,-210,-120,-200);g.lineTo(380,-80);g.lineTo(390,-20);g.lineTo(-200,10);g.closePath();g.fill();g.stroke();
  g.fillStyle='#E9E1C8';g.beginPath();g.moveTo(-320,20);g.lineTo(380,20);g.lineTo(370,70);g.lineTo(-260,110);g.closePath();g.fill();g.stroke();
  g.fillStyle='#fff';for(let k=0;k<9;k++){g.beginPath();g.moveTo(-120+k*55,8);g.lineTo(-100+k*55,40);g.lineTo(-80+k*55,8);g.fill();g.stroke()}
  g.fillStyle='#111';g.beginPath();g.arc(-150,-120,32,0,7);g.fill();
  // big closing muscle
  const p1=0.94+0.06*Math.sin(t*14);g.fillStyle='#E0404A';g.beginPath();g.ellipse(-210,-10,150*p1,110*p1,-0.5,0,7);g.fill();g.stroke();
  g.strokeStyle='rgba(255,255,255,0.5)';g.lineWidth=6;for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(-300,-60+k*25);g.lineTo(-120,30+k*25);g.stroke()}
  // tiny opening muscle
  const sm=seg(t,t0+1.2,t0+1.5);g.strokeStyle='#111';g.lineWidth=10;g.fillStyle='#7FB2FF';g.beginPath();g.ellipse(-345,70,28,16,0.6,0,7);g.fill();g.stroke();
  g.restore();
  const a1=fade(t,t0+0.15,CU.c5+0.3);txtA('CLOSE',cx-210,cy-230,80,a1,{fill:'#FF6A6A',sw:16});arrowA(cx-60,cy-250,cx-150,cy-90,'#FF6A6A',a1);
  const a2=fade(t,t0+1.3,CU.c5+0.3);txtA('OPEN',cx-330,cy+260,70,a2,{fill:'#9CC4FF',sw:14});arrowA(cx-320,cy+200,cx-345,cy+100,'#9CC4FF',a2);
  if(t>t0+1.3)txtA('TINY!',cx+180,cy+250,90,a2*pop(t,t0+1.9),{fill:'#FFD23F',sw:18})}
function arrowA(x0,y0,x1,y1,c,a){if(a<=0)return;g.save();g.globalAlpha=a;arrow(x0,y0,x1,y1,c,18);g.restore()}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;SW.gators.forEach(a=>a.visible=true);
  if(t<CU.c1){const snap=openScene(t);const k=ease(seg(t,0.1,CU.c1));swampShot(mix(C0.p,[4.3,1.8,13.4],k),mix(C0.l,[1.2,0.8,2.8],k));
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW STRONG IS AN',W/2,190,78,{sw:16});txt("ALLIGATOR'S",W/2,300,118,{fill:'#7CFF6B',sw:24});txt('BITE?',W/2,425,140,{fill:'#FFD23F',sw:26});g.restore();
    pill('THE GTA 6 PLAYER-EATER',W/2,1240,52,'#FF3DA6','#fff',t,2.4,CU.c1-0.05);if(t>1.3)comic('SNAP!',W*0.76,640,96,t,1.3+1.4*Math.floor((t-1.3)/1.4),{life:0.5,rot:0.15,fill:'#7CFF6B'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('red');const v=2000*easeOut(seg(t,5.6,7.0));
    gauge(W/2,1000,330,v,t);txt(Math.round(v).toLocaleString('en-US'),W/2,1110,120,{fill:'#FFD23F',sw:22});txt('POUNDS OF FORCE',W/2,1220,58,{sw:12});
    const op=t<6.9?0.5+0.4*Math.sin(t*6):Math.max(0,0.9-(t-6.9)*6);jawIcon(W/2,520,0.95,op,t);
    comic('2,000!',W*0.5,330,120,t,7.0,{life:0.85,rot:-0.06,fill:'#FF6A6A'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('teal');const k1=easeOut(seg(t,8.0,8.6)),k2=easeOut(seg(t,8.55,9.3));
    bigBar(170,520,300,640,0.09*k1,'#FFD23F','YOU','~170 LB');bigBar(610,520,300,640,1.0*k2,'#5BE37A','GATOR','2,000 LB');
    txt('10×',W/2,370,150,{fill:'#FFD23F',sw:26});if(t>9.0)comic('WOW',W*0.5,1290,90,t,9.0,{life:0.8,rot:0.1,fill:'#FF8FC8'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);openScene(t);SW.gators.forEach(a=>a.visible=true);
    GZ.a.position.set(2.3,-0.05,3.6);GZ.a.rotation.set(0,0.35,0);holder.visible=false;const tc=10.62;const op=t<tc?easeOut(seg(t,CU.c3,10.35)):Math.max(0,0.05*Math.sin((t-tc)*40)*(1-seg(t,tc,tc+0.4)));GZ.anim(t,op*1.1,0,3);
    SHELL.visible=t<tc;FR.g.visible=t>=tc;if(t>=tc){const d=t-tc;GZ.head.updateWorldMatrix(true,false);const o=new THREE.Vector3(0.72,0.05,0).applyMatrix4(GZ.head.matrixWorld);
      FR.forEach((m,i)=>{const v=m.userData.v;m.position.set(o.x+v[0]*d,Math.max(-0.1,o.y+v[1]*d-4.9*d*d),o.z+v[2]*d);m.rotation.set(d*8+i,d*6,i)})}
    guy.pose({armL:[1.2,0.4],armR:[1.2,-0.4],bendL:0.9,bendR:0.9,blink:false,mouth:t>tc?'o':'grin',mouthSize:0.9,wide:t>tc,headYaw:0.45,headPitch:0.1,look:0.6,brow:t>tc?0.03:0});
    const hp=new THREE.Vector3();GZ.head.getWorldPosition(hp);const k=ease(seg(t,CU.c3,CU.c4));swampShot([hp.x+lerp(0.9,0.6,k),hp.y+lerp(0.7,0.5,k),hp.z+lerp(4.4,3.6,k)],[hp.x+0.55,hp.y+0.1,hp.z]);
    pill('TURTLE SHELL',W/2,330,80,'#FFFFFF','#111',t,10.1,tc+0.1);comic('CRUNCH!',W*0.5,560,140,t,tc,{life:1.2,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();setBG('blue');muscleDiagram(t,CU.c4);
    pill('BUT...',W/2,330,90,'#FFD23F','#111',t,CU.c4,13.0);pill('JAW-OPENING MUSCLES',W/2,330,64,'#FFFFFF','#111',t,13.0,CU.c5)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);openScene(t);SHELL.visible=false;BAND.visible=true;
    GZ.a.position.set(7.2,0,1.2);GZ.a.rotation.set(0,PI,0);SW.gators.forEach(a=>a.visible=false);const strain=t>15.4?0.06*Math.abs(Math.sin(t*9)):0;GZ.anim(t,strain,0,3);GZ.tail.rotation.y=0.4*Math.sin(t*5);
    putGuy(SW.S,4.75,0,1.6,0.6);const ta=t>16.0;
    guy.pose(idle(t,{armL:ta?[1.9,0.2]:[0.35,0],armR:ta?[1.9,-0.2]:[0.35,0],bendL:ta?0.3:0,bendR:ta?0.3:0,mouth:'grin',headYaw:0.25,look:0.4}));
    const k=ease(seg(t,CU.c5,CU.c6));swampShot([lerp(6.9,6.4,k),lerp(2.0,1.7,k),lerp(14.2,13.0,k)],[6.1,0.8,1.2]);
    pill('RUBBER BAND = DONE',W/2,330,66,'#FF5FA2','#fff',t,15.1,CU.c6);comic('BOING!',W*0.25,620,100,t,15.5,{life:0.8,rot:-0.12,fill:'#FF8FC8'});if(t>16.1)comic('EASY',W*0.75,700,90,t,16.1,{life:0.9,rot:0.12,fill:'#7CFF6B'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.2));swampShot(mix([6.4,2.8,17.0],C0.p,k),mix([1.4,1.0,2.8],C0.l,k));flash(t,CU.c6,0.15)}
  vignette();captions(t)};

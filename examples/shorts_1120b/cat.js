// ===== How do cats always land on their feet? (wildcard / animals) =====
const TT=18.3;
const CU={c1:2.75,c2:5.5,c3:10.1,c4:14.1,c5:16.6};
guy.outfit({beanie:1});
// ---- original backyard set ----
const G={S:new THREE.Scene()};lights(G.S);G.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
G.shot=(p,l)=>{G.cam.position.set(...p);G.cam.lookAt(...l);setBG('linear-gradient(#5FC3FF,#A8E2FF 55%,#E8F8FF)');r.setClearColor(0,0);r.render(G.S,G.cam)};
part(G.S,new THREE.PlaneGeometry(200,200),toon(0x6CC24A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<60;i++)part(G.S,new THREE.CircleGeometry(0.2+hash(i)*0.3,10),toon(0x5DB03E),[(hash(i*3)-0.5)*20,0.01,(hash(i*7)-0.5)*10],[1,1,1],[-PI/2,0,0],0);
// house wall + window
part(G.S,new THREE.BoxGeometry(30,6,0.3),toon(0xA9D8F0),[0,3,-6],[1,1,1],[0,0,0],0.02);for(let k=0;k<12;k++)part(G.S,new THREE.BoxGeometry(30,0.04,0.32),toon(0x8CC2DE),[0,0.4+k*0.5,-5.98],[1,1,1],[0,0,0],0);
part(G.S,new THREE.BoxGeometry(1.8,1.4,0.1),toon(0xFFF6D8),[-3.4,3.0,-5.8],[1,1,1],[0,0,0],0.01);part(G.S,new THREE.BoxGeometry(1.6,1.2,0.12),toon(0x5A86B8),[-3.4,3.0,-5.78],[1,1,1],[0,0,0],0);
// wooden fence along z=-1.5
const FW=toon(0xC9925A),FW2=toon(0xB37E4A);
for(let i=-14;i<=14;i++)part(G.S,new THREE.BoxGeometry(0.34,1.6,0.08),i%2?FW:FW2,[i*0.38,0.8,-1.5],[1,1,1],[0,0,0],0.008);
for(const y of [0.4,1.2])part(G.S,new THREE.BoxGeometry(11,0.12,0.06),FW2,[0,y,-1.56],[1,1,1],[0,0,0],0.006);
part(G.S,new THREE.BoxGeometry(11,0.08,0.22),FW2,[0,1.62,-1.5],[1,1,1],[0,0,0],0.006);
// tree + bushes + flowers
const TR=new THREE.Group();TR.position.set(3.8,0,-3.2);G.S.add(TR);part(TR,cap(0.28,3.2),toon(0x7A4E2A),[0,1.7,0]);for(let k=0;k<5;k++)part(TR,SPH,toon(k%2?0x3DA84C:0x4FBF5A),[Math.cos(k*1.3)*0.9,3.6+0.4*hash(k),Math.sin(k*1.3)*0.6],[1.3,1.0,1.1],[0,0,0],0.015);
for(let k=0;k<7;k++){const x=-5+k*1.6;part(G.S,SPH,toon(0x3F9E48),[x,0.35,-1.1],[0.55,0.45,0.35],[0,0,0],0.01);for(let j=0;j<3;j++)part(G.S,SPH,basic([0xFF5E8A,0xFFE14D,0xFFFFFF][(k+j)%3]),[x-0.3+j*0.3,0.62+0.1*hash(k+j),-0.85],[0.07,0.07,0.07],[0,0,0],0)}
// low step + ruler for the 30 cm shot (at x=8)
part(G.S,new THREE.BoxGeometry(0.9,0.3,0.7),toon(0xD9D2C4),[8.0,0.15,0],[1,1,1],[0,0,0],0.01);
{const {ctx,tx}=canvasTex(128,512);ctx.fillStyle='#FFD23F';ctx.fillRect(0,0,128,512);ctx.fillStyle='#111';for(let i=0;i<=30;i++){const y=512-i*512/32;ctx.fillRect(0,y-2,i%10==0?90:i%5==0?60:36,4)}ctx.font='900 30px Inter';ctx.fillText('30',70,512-30*16+34);ctx.fillText('20',70,512-20*16+34);ctx.fillText('10',70,512-10*16+34);
  part(G.S,new THREE.BoxGeometry(0.12,0.32,0.03),tmat(0xffffff,tx),[8.55,0.16,0.3],[1,1,1],[0,-0.3,0],0.004)}
// ---- original cartoon cat ----
const OR=toon(0xF29A38),ST=toon(0xC96A1E),WH=toon(0xFFF4E0),PK=toon(0xFF9AB0),BK=basic(0x111111);
function makeCat(){const root=new THREE.Group(),F=new THREE.Group(),B=new THREE.Group();root.add(F);root.add(B);
  part(F,SPH,OR,[0.17,0,0],[0.24,0.17,0.17],[0,0,0],0.008);part(F,SPH,WH,[0.26,-0.04,0],[0.13,0.12,0.13],[0,0,0],0);
  const hd=new THREE.Group();hd.position.set(0.42,0.12,0);F.add(hd);part(hd,SPH,OR,[0,0,0],[0.15,0.13,0.15],[0,0,0],0.008);part(hd,SPH,WH,[0.1,-0.04,0],[0.07,0.05,0.09],[0,0,0],0);part(hd,SPH,PK,[0.145,-0.01,0],[0.02,0.015,0.025],[0,0,0],0);
  for(const s of [-1,1]){part(hd,new THREE.ConeGeometry(0.05,0.1,4),OR,[0.01,0.13,s*0.08],[1,1,1],[s*0.25,0,0],0.006);part(hd,new THREE.ConeGeometry(0.03,0.06,4),PK,[0.03,0.125,s*0.08],[1,1,1],[s*0.25,0,0],0);
    part(hd,SPH,basic(0x9BE36B),[0.115,0.035,s*0.055],[0.03,0.035,0.03],[0,0,0],0.004);part(hd,SPH,BK,[0.135,0.035,s*0.058],[0.012,0.028,0.012],[0,0,0],0);
    for(let k=0;k<2;k++)part(hd,cap(0.003,0.12),basic(0xffffff),[0.13,-0.02+k*0.02,s*0.1],[1,1,1],[PI/2-s*(0.1-k*0.15),0,0],0)}
  part(hd,SPH,ST,[-0.02,0.1,0],[0.08,0.03,0.04],[0,0,0],0);
  const legs=[];const mkLeg=(par,x,z)=>{const l=new THREE.Group();l.position.set(x,-0.08,z);par.add(l);part(l,cap(0.045,0.16),OR,[0,-0.1,0]);part(l,SPH,WH,[0.02,-0.2,0],[0.055,0.035,0.05],[0,0,0],0.004);legs.push(l);return l};
  const fl=[mkLeg(F,0.24,0.08),mkLeg(F,0.24,-0.08)];
  part(B,SPH,OR,[-0.17,0,0],[0.24,0.17,0.17],[0,0,0],0.008);for(let k=0;k<3;k++)part(B,SPH,ST,[-0.08-k*0.12,0.13,0],[0.035,0.06,0.13],[0,0,0],0);part(F,SPH,ST,[0.12,0.13,0],[0.035,0.06,0.13],[0,0,0],0);
  const bl=[mkLeg(B,-0.26,0.08),mkLeg(B,-0.26,-0.08)];
  const tail=new THREE.Group();tail.position.set(-0.38,0.05,0);B.add(tail);const tsegs=[];let par=tail;for(let k=0;k<5;k++){const s=new THREE.Group();s.position.set(k?-0.09:0,0,0);par.add(s);part(s,cap(0.035,0.08),k===4?ST:OR,[-0.045,0,0],[1,1,1],[0,0,PI/2]);tsegs.push(s);par=s}
  return {root,F,B,hd,fl,bl,tsegs,
    pose(o={}){F.rotation.set(o.fRoll||0,0,o.bend||0);B.rotation.set(o.bRoll||0,0,-(o.bend||0));const ft=o.tuckF||0,bt=o.tuckB||0;fl.forEach(l=>l.rotation.z=o.fLeg!==undefined?o.fLeg:ft*1.2);bl.forEach(l=>l.rotation.z=o.bLeg!==undefined?o.bLeg:-bt*1.0);
      const sw=o.tail||0;tsegs.forEach((s,i)=>{s.rotation.z=(o.tailUp!==undefined?o.tailUp:0.35)+0.0;s.rotation.y=sw*(0.2+i*0.05)});hd.rotation.set(0,o.headYaw||0,o.headTilt||0)}}}
const cat=makeCat();G.S.add(cat.root);
function catAt(x,y,z,ry=0,roll=0,s=1.3){cat.root.position.set(x,y,z);cat.root.rotation.set(roll,ry,0);cat.root.scale.setScalar(s)}
const C0={p:[1.4,2.1,9.8],l:[0.05,1.45,-0.6]};
function openScene(t){catAt(0.9,2.05,-1.5,0.5);cat.pose({tail:Math.sin(t*2*PI/1.525),headYaw:0.6,headTilt:0.1});putGuy(G.S,-0.55,0,0.35,0.35);guy.pose(idle(t,{look:0.5,lookY:0.7,headPitch:-0.35,headYaw:0.4,jump:0.01*Math.sin(t*2*PI/2.2),armL:[0.3,0],armR:[0.3,0]}))}
// ---- 2D diagrams ----
function catHead2D(x,y,s,rot,t){g.save();g.translate(x,y);g.scale(s,s);g.save();g.rotate(rot);g.fillStyle='#F29A38';g.strokeStyle='#111';g.lineWidth=10;
  for(const sx of [-1,1]){g.beginPath();g.moveTo(sx*120,-170);g.lineTo(sx*230,-330);g.lineTo(sx*260,-110);g.closePath();g.fill();g.stroke()}
  g.beginPath();g.ellipse(0,0,300,250,0,0,7);g.fill();g.stroke();
  g.fillStyle='#C96A1E';for(let k=-1;k<=1;k++){g.beginPath();g.ellipse(k*60,-200,22,50,0,0,7);g.fill()}
  // cutaway window with inner ear
  g.fillStyle='#2A1848';g.beginPath();g.arc(140,10,120,0,7);g.fill();g.stroke();
  g.strokeStyle='#FF9AB0';g.lineWidth=16;for(const [a,r0] of [[0,60],[PI/2,60],[PI,60]]){g.beginPath();g.arc(140+Math.cos(a)*35,-10+Math.sin(a)*15,r0*0.6,0,PI*1.5);g.stroke()}
  g.strokeStyle='#3FF0FF';g.lineWidth=12;g.beginPath();for(let i=0;i<40;i++){const a=i*0.4,rr2=8+i*1.3;g.lineTo(150+Math.cos(a)*rr2,70+Math.sin(a)*rr2*0.7)}g.stroke();
  g.restore();
  // level bubble that stays level (unrotated)
  g.fillStyle='#BFEAFF';g.strokeStyle='#111';g.lineWidth=8;rr(-160,300,320,70,35);g.fill();g.stroke();g.fillStyle='#5BE37A';g.beginPath();g.arc(-rot*400,335,24,0,7);g.fill();g.stroke();
  g.restore()}
function spine2D(x,y,s,t,k){g.save();g.translate(x,y);g.scale(s,s);const n=20;const pts=[];for(let i=0;i<n;i++){const u=i/(n-1);pts.push([lerp(-380,380,u),Math.sin(u*PI*2+t*3)*90*k+Math.sin(u*PI)*-60])}
  g.strokeStyle='#111';g.lineWidth=40;g.lineCap='round';g.beginPath();pts.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.strokeStyle='#FFF4E0';g.lineWidth=24;g.stroke();
  for(const p of pts){g.fillStyle='#FFF4E0';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.ellipse(p[0],p[1],20,30,0,0,7);g.fill();g.stroke()}g.restore()}
function bone2D(x,y,s,rot){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle='#FFF4E0';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();rr(-110,-18,220,36,18);g.fill();g.stroke();for(const sx of [-1,1])for(const sy of [-1,1]){g.beginPath();g.arc(sx*110,sy*16,24,0,7);g.fill();g.stroke()}g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();cat.root.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));G.shot(mix(C0.p,[1.5,2.05,8.9],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW DO CATS',W/2,220,92,{sw:19});txt('ALWAYS LAND',W/2,340,104,{fill:'#FFD23F',sw:22});txt('ON THEIR FEET?',W/2,460,96,{fill:'#FF8A3D',sw:20});g.restore();
    comic('MEOW',W*0.78,820,80,t,1.5,{life:1.0,rot:0.1,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('teal');flash(t,CU.c1,0.15);const s=backOut(seg(t,CU.c1,CU.c1+0.45));const rot=0.45*Math.sin((t-CU.c1)*2.2)*seg(t,3.6,4.0);
    catHead2D(W/2,980,1.3*s,rot,t);
    if(t>3.3){const k=pop(t,3.3);g.save();g.translate(W*0.74,640);g.scale(k,k);panel(0,0,330,90,'#FF9AB0','#111',45);txt('INNER EAR',0,4,44,{stroke:0,fill:'#111'});g.restore()}
    if(t>4.7){arrow(W*0.86,1300,W*0.86,1050,'#5BE37A',22);txt('UP',W*0.86,1000,60,{fill:'#5BE37A',sw:12})}
    panel(W/2,330,820,150);txt('A BUILT-IN LEVEL',W/2,300,64,{stroke:0,fill:'#3FF0FF'});txt('IT ALWAYS KNOWS WHICH WAY IS UP',W/2,362,38,{stroke:0})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const k=seg(t,CU.c2,CU.c3);const y=lerp(3.6,1.15,k);
    const bend=0.4*ease(seg(t,5.95,6.6))*(1-ease(seg(t,9.5,10.0)));const fR=lerp(PI,0,ease(seg(t,7.1,8.15))),bR=lerp(PI,0,ease(seg(t,8.55,9.6)));
    catAt(0.3,y,0.6,0.15,0,1.6);cat.pose({fRoll:fR,bRoll:bR,bend,tuckF:seg(t,7.0,7.3)*(1-seg(t,8.1,8.4)),tuckB:seg(t,8.5,8.7)*(1-seg(t,9.5,9.8)),tail:Math.sin(t*6)*0.8,tailUp:0.6,headYaw:0});
    putGuy(G.S,-1.6,0,-0.4,0.6);guy.pose({reachL:[0.32,1.8,0.38],reachR:[-0.32,1.8,0.38],mouth:'o',mouthSize:0.7,wide:true,look:0.6,lookY:0.3,blink:BLINK(t)});
    G.shot([1.8,y+0.5,9.2],[0.35,y+0.05,0.3]);
    pill('SLOW-MO',W*0.22,1640,44,'#FF4A4A','#fff',t,CU.c2+0.1,CU.c3);
    if(t>6.0&&t<7.1)pill('BEND IN THE MIDDLE',W/2,330,56,'#FFD23F','#111',t,6.0,7.1);
    if(t>=7.1&&t<8.5)pill('1. SPIN THE FRONT',W/2,330,60,'#3FF0FF','#111',t,7.1,8.5);
    if(t>=8.5)pill('2. SWING THE BACK',W/2,330,60,'#FF8A3D','#111',t,8.5,CU.c3);
    comic('WHOOSH',W*0.72,620,72,t,7.3,{life:0.8,rot:0.1,fill:'#fff'});comic('TWIST',W*0.28,700,72,t,8.7,{life:0.8,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c4){clear3d();setBG('blue');flash(t,CU.c3,0.15);const s=backOut(seg(t,CU.c3,CU.c3+0.45));
    spine2D(W/2,850,1.05*s,t,0.5+0.5*seg(t,10.4,10.9));
    if(t>10.6){const k=pop(t,10.6);g.save();g.translate(W/2,640);g.scale(k,k);panel(0,0,560,90,'#FFF4E0','#111',45);txt('SUPER BENDY SPINE',0,4,44,{stroke:0,fill:'#111'});g.restore()}
    if(t>11.7){const k=pop(t,11.7);const fy=1180+18*Math.sin(t*4);bone2D(W/2,fy,1.1*k,0.15*Math.sin(t*3));g.save();g.setLineDash([16,14]);g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.ellipse(W/2,fy,220*k,90*k,0,0,7);g.stroke();g.restore();
      pill('FLOATING COLLARBONE',W/2,1310,46,'#5BE37A','#111',t,12.2,CU.c4);pill('(NOT LOCKED TO THE SHOULDER)',W/2,1500,36,'#fff','#111',t,12.7,CU.c4)}
    panel(W/2,330,820,150);txt('THE SECRET',W/2,300,64,{stroke:0,fill:'#FFD23F'});txt('THEIR BODY CAN TWIST IN HALF',W/2,362,40,{stroke:0})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);const dt=seg(t,14.45,14.95);const x=lerp(7.95,8.5,dt),y=lerp(0.63,0.33,dt)+0.3*Math.sin(dt*PI);
    catAt(x,y,0,0.1,0,1.1);cat.pose({tail:Math.sin(t*4)*0.5,tailUp:0.6,fLeg:dt>0&&dt<1?-0.6:0,bLeg:dt>0&&dt<1?0.6:0,headYaw:-0.2});
    putGuy(G.S,7.0,0,-1.1,0.7);guy.pose({...SIT,sitY:-0.62,legL:[1.5,1.9,0],legR:[1.5,1.9,0],armL:[0.4,0.4],armR:[0.4,-0.2],mouth:'grin',look:0.6,lookY:-0.4,headYaw:0.4,headPitch:0.25,blink:BLINK(t)});
    G.shot([9.0,1.5,6.2],[8.2,0.65,-0.2]);
    comic('PLOP',W*0.66,1150,84,t,14.95,{life:0.9,rot:0.08,fill:'#fff'});
    pill('NEEDS ~30 CM TO FLIP',W/2,330,56,'#FFD23F','#111',t,14.3,CU.c5)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c5,TT-0.25));G.shot(mix([3.2,2.5,11],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};

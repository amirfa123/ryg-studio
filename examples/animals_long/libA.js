// ===== animals lib (copied builders) =====
function mkGator(sc){const a=new THREE.Group();sc.add(a);const D=toon(0x2F5A22),L=toon(0x7E9F45),Wt=toon(0xF4F0D8);
  part(a,SPH,D,[0,0.32,0],[1.25,0.32,0.5],[0,0,0],0.012);
  for(let k=0;k<6;k++)part(a,new THREE.ConeGeometry(0.07,0.16,4),L,[0.9-k*0.36,0.62,0],[1,1,1],[0,0,0],0.004);
  const tail=new THREE.Group();tail.position.set(-1.1,0.3,0);a.add(tail);part(tail,new THREE.ConeGeometry(0.3,1.8,10),D,[-0.85,0,0],[1,0.55,1],[0,0,PI/2],0.01);
  const head=new THREE.Group();head.position.set(1.15,0.36,0);a.add(head);
  const up=new THREE.Group();head.add(up);part(up,new THREE.BoxGeometry(1.1,0.18,0.46),D,[0.5,0.06,0],[1,1,1],[0,0,0],0.012);
  for(const s of [-1,1]){part(up,SPH,Wt,[0.12,0.2,s*0.15],[0.1,0.1,0.1],[0,0,0],0.006);part(up,SPH,basic(0x111111),[0.18,0.21,s*0.15],[0.045,0.065,0.045],[0,0,0],0);for(let k=0;k<6;k++)part(up,new THREE.ConeGeometry(0.03,0.08,4),Wt,[0.2+k*0.15,-0.06,s*0.2],[1,1,1],[PI,0,0],0)}
  const lo=new THREE.Group();head.add(lo);part(lo,new THREE.BoxGeometry(1.05,0.12,0.42),L,[0.48,-0.08,0],[1,1,1],[0,0,0],0.012);
  const legs=[];for(const [x,z] of [[0.75,0.42],[0.75,-0.42],[-0.65,0.42],[-0.65,-0.42]]){const l=new THREE.Group();l.position.set(x,0.25,z);a.add(l);part(l,cap(0.09,0.22),D,[0,-0.12,0],[1,1,1],[0,0,0],0.008);part(l,SPH,D,[0.08,-0.24,0],[0.14,0.05,0.1],[0,0,0],0.006);legs.push(l)}
  return {a,tail,head,up,lo,legs,anim(t,open=0,gait=0,sp=10){up.rotation.z=open*0.45;lo.rotation.z=-open*0.15;tail.rotation.y=0.25*Math.sin(t*(gait?sp:3));legs.forEach((l,i)=>l.rotation.z=gait*0.7*Math.sin(t*sp+(i%3?PI:0)))}}}
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
// ---------- python (segmented, path-driven) ----------
function makePython(n=46,r=0.14){const g0=new THREE.Group();const T=toon(0xC9A66B),D=toon(0x5A3E22),segs=[];
  for(let i=0;i<n;i++){const s=part(g0,SPH,(Math.floor(i/3)%2)?D:T,[0,0,0],[1,1,1],[0,0,0],0.008);const k=i<n-8?1:1-(i-(n-8))/10;s.userData.r=r*k;s.scale.setScalar(r*k);segs.push(s)}
  const head=new THREE.Group();g0.add(head);part(head,SPH,T,[0.1,0,0],[0.26,0.13,0.17],[0,0,0],0.01);part(head,SPH,D,[0.12,0.07,0],[0.18,0.05,0.1],[0,0,0],0);
  for(const s of [-1,1]){part(head,SPH,toon(0xFFE14D),[0.2,0.06,s*0.1],[0.04,0.04,0.035],[0,0,0],0.004);part(head,SPH,basic(0x111111),[0.225,0.065,s*0.105],[0.015,0.03,0.015],[0,0,0],0)}
  const tongue=part(head,new THREE.BoxGeometry(0.22,0.015,0.03),basic(0xE2304A),[0.4,-0.02,0],[1,1,1],[0,0,0],0);
  // path: f(u) u in [0,1] (0=head) -> [x,y,z]
  return {g:g0,segs,head,tongue,set(f,t=0){const n=segs.length;for(let i=0;i<n;i++){const p=f(i/(n-1));segs[i].position.set(p[0],p[1]+segs[i].userData.r,p[2])}
    const a=f(0),b=f(0.02);head.position.set(a[0],a[1]+r,a[2]);head.rotation.set(0,-Math.atan2(a[2]-b[2],a[0]-b[0]),0);tongue.visible=Math.sin(t*9)>0.3;tongue.scale.x=0.5+0.5*Math.abs(Math.sin(t*9))}}}
// ---------- shark ----------
function makeShark(){const s=new THREE.Group();const Gr=toon(0x6F84A0),Wh=toon(0xEDEFF3),K=basic(0x111111);
  part(s,SPH,Gr,[0,0,0],[1.6,0.42,0.46],[0,0,0],0.014);part(s,SPH,Wh,[0.25,-0.14,0],[1.3,0.28,0.4],[0,0,0],0);
  part(s,new THREE.ConeGeometry(0.32,0.75,4),Gr,[0.1,0.55,0],[1,1,0.25],[0,0,-0.35],0.01);
  for(const z of [-1,1])part(s,new THREE.ConeGeometry(0.22,0.7,4),Gr,[0.45,-0.25,z*0.45],[1,1,0.25],[z*1.1,0,-0.9],0.008);
  const tail=new THREE.Group();tail.position.set(-1.45,0,0);s.add(tail);part(tail,new THREE.ConeGeometry(0.22,0.6,4),Gr,[-0.35,0,0],[1,1,0.5],[0,0,PI/2],0.008);
  part(tail,new THREE.ConeGeometry(0.18,0.8,4),Gr,[-0.65,0.32,0],[1,1,0.25],[0,0,0.55],0.008);part(tail,new THREE.ConeGeometry(0.15,0.55,4),Gr,[-0.6,-0.24,0],[1,1,0.25],[0,0,PI-0.6],0.008);
  for(const z of [-1,1]){part(s,SPH,K,[1.15,0.08,z*0.25],[0.05,0.05,0.03],[0,0,0],0)}
  for(let k=0;k<3;k++)for(const z of [-1,1])part(s,new THREE.BoxGeometry(0.02,0.18,0.02),toon(0x4E6078),[0.75-k*0.08,0.02,z*0.36],[1,1,1],[0,0,0],0);
  part(s,new THREE.BoxGeometry(0.4,0.02,0.36),toon(0x3B4A5E),[1.2,-0.2,0],[1,1,1],[0,0,0.15],0);
  return {s,tail,anim(t,sp=4){tail.rotation.y=0.35*Math.sin(t*sp);s.children[0].rotation.y=0}}}
// ---------- bee ----------
function makeBee(){const b=new THREE.Group();const Y=toon(0xFFC72E),K=toon(0x1B1B22);part(b,SPH,Y,[0,0,0],[0.16,0.12,0.12],[0,0,0],0.006);for(const x of [-0.05,0.05])part(b,SPH,K,[x,0,0],[0.025,0.125,0.125],[0,0,0],0);part(b,SPH,K,[0.16,0.02,0],[0.07,0.07,0.07],[0,0,0],0.004);
  part(b,new THREE.ConeGeometry(0.02,0.07,6),K,[-0.18,0,0],[1,1,1],[0,0,PI/2],0);const wings=[];for(const z of [-1,1]){const w=new THREE.Group();w.position.set(0,0.1,z*0.04);b.add(w);part(w,SPH,new THREE.MeshBasicMaterial({color:0xE8F8FF,transparent:true,opacity:0.75}),[0,0.02,z*0.1],[0.08,0.01,0.12],[0,0,0],0);wings.push(w)}
  return {b,wings,anim(t){wings.forEach((w,i)=>w.rotation.x=(i?1:-1)*(0.2+0.6*Math.abs(Math.sin(t*60))))}}}
// ---------- beach scene: sand + clear water with a sea floor ----------
BUILD.beach=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(400,60),toon(0xF2D59A),[0,0.05,32],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(400,0.5),toon(0xFFFFFF),[0,0.07,2.1],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(400,300),toon(0xC9B07A),[0,-2.6,-140],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<40;i++)part(S,SPH,toon(i%2?0x8C7B5A:0x6F8F5A),[(hash(i)-0.5)*60,-2.6,-4-hash(i*3)*30],[0.6+hash(i*7),0.3,0.5],[0,0,0],0.006);
  // slope from sand down to floor
  part(S,new THREE.PlaneGeometry(400,6),toon(0xE2C487),[0,-1.25,-0.6],[1,1,1],[-PI/2+0.45,0,0],0);
  const wm=new THREE.MeshToonMaterial({color:0x2EC4C9,transparent:true,opacity:0.55,gradientMap:GM,depthWrite:false});o.water=part(S,new THREE.PlaneGeometry(400,300),wm,[0,0,-148],[1,1,1],[-PI/2,0,0],0);o.wm=wm;
  for(let i=0;i<30;i++)part(S,new THREE.PlaneGeometry(1+hash(i)*2,0.06),basic(0xDDFBFB),[(hash(i*3)-0.5)*60,0.02,-2-hash(i*7)*30],[1,1,1],[-PI/2,0,0],0);
  for(let k=-8;k<8;k++)palm(S,k*6+2,10+hash(k)*3,1.2,0.2,k);
  const tower=new THREE.Group();tower.position.set(-7,0,6);S.add(tower);for(const [x,z] of [[-0.8,-0.8],[0.8,-0.8],[-0.8,0.8],[0.8,0.8]])part(tower,cap(0.07,2.4),toon(0xF4F4F8),[x,1.2,z]);part(tower,new THREE.BoxGeometry(2.2,1.3,2.0),toon(0xFF5E5E),[0,3.0,0],[1,1,1],[0,0,0],0.015);part(tower,new THREE.BoxGeometry(2.6,0.15,2.4),toon(0xF4F4F8),[0,3.75,0],[1,1,1],[0,0,0],0.01);
  const board=new THREE.Group();S.add(board);part(board,SPH,toon(0x3FF0FF),[0,0,0],[1.1,0.05,0.3],[0,0,0],0.01);part(board,SPH,toon(0xFF3DA6),[0,0.02,0],[1.0,0.03,0.05],[0,0,0],0);o.board=board;
  o.shark=makeShark();S.add(o.shark.s);o.fin=o.shark;
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('day');r.render(o.S,o.cam)};return o};
// ---------- 2D icons ----------
function gator2D(x,y,s,open=0){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#4E8A2E';
  g.beginPath();g.moveTo(-120,10);g.quadraticCurveTo(-60,-30,20,-22);g.lineTo(20,22);g.quadraticCurveTo(-60,30,-120,10);g.fill();g.stroke();
  g.save();g.translate(20,0);g.rotate(-open*0.5);g.beginPath();g.moveTo(0,-22);g.lineTo(90,-12);g.quadraticCurveTo(100,-4,90,0);g.lineTo(0,0);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';for(let i=0;i<5;i++){g.beginPath();g.moveTo(14+i*15,0);g.lineTo(20+i*15,8);g.lineTo(26+i*15,0);g.fill()}
  g.fillStyle='#fff';g.beginPath();g.arc(14,-24,9,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(16,-24,4,0,7);g.fill();g.restore();
  g.save();g.translate(20,0);g.rotate(open*0.15);g.fillStyle='#7EAF4A';g.beginPath();g.moveTo(0,0);g.lineTo(86,2);g.quadraticCurveTo(92,10,84,14);g.lineTo(0,22);g.closePath();g.fill();g.stroke();g.restore();
  g.fillStyle='#4E8A2E';for(const lx of [-80,-10]){rr(lx,14,18,26,6);g.fill();g.stroke()}g.restore()}
function snake2D(x,y,s,t=0){g.save();g.translate(x,y);g.scale(s,s);g.lineCap='round';g.lineJoin='round';const P=[];for(let i=0;i<=30;i++){const u=i/30;P.push([-110+u*200,Math.sin(u*9+t*4)*22*(1-u*0.3)])}
  g.strokeStyle='#111';g.lineWidth=40;g.beginPath();P.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.strokeStyle='#C9A66B';g.lineWidth=28;g.stroke();g.strokeStyle='#5A3E22';g.lineWidth=14;g.setLineDash([18,22]);g.stroke();g.setLineDash([]);
  const h=P[30];g.fillStyle='#C9A66B';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.ellipse(h[0]+14,h[1],30,20,0,0,7);g.fill();g.stroke();g.fillStyle='#FFE14D';g.beginPath();g.arc(h[0]+24,h[1]-7,6,0,7);g.fill();g.fillStyle='#111';g.fillRect(h[0]+23,h[1]-11,3,8);
  g.strokeStyle='#E2304A';g.lineWidth=5;g.beginPath();g.moveTo(h[0]+42,h[1]+4);g.lineTo(h[0]+62,h[1]+4);g.lineTo(h[0]+70,h[1]-2);g.moveTo(h[0]+62,h[1]+4);g.lineTo(h[0]+70,h[1]+10);g.stroke();g.restore()}
function shark2D(x,y,s,t=0,flip=false){g.save();g.translate(x,y);g.scale(flip?-s:s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#6F84A0';
  g.beginPath();g.moveTo(120,0);g.quadraticCurveTo(60,-48,-60,-20);g.lineTo(-110,-50+6*Math.sin(t*8));g.lineTo(-96,0);g.lineTo(-110,46+6*Math.sin(t*8));g.lineTo(-60,18);g.quadraticCurveTo(40,40,120,0);g.fill();g.stroke();
  g.beginPath();g.moveTo(10,-36);g.lineTo(-20,-90);g.lineTo(-40,-26);g.fill();g.stroke();g.fillStyle='#EDEFF3';g.beginPath();g.moveTo(118,4);g.quadraticCurveTo(40,32,-40,14);g.quadraticCurveTo(40,12,118,4);g.fill();
  g.fillStyle='#111';g.beginPath();g.arc(78,-10,6,0,7);g.fill();g.restore()}
function cat2D(x,y,s,angry=0){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#F29A38';
  g.beginPath();g.ellipse(-20,20,70,44,0,0,7);g.fill();g.stroke();g.beginPath();g.moveTo(-86,10);g.quadraticCurveTo(-140,-30+angry*-30,-110,-70-angry*20);g.lineWidth=16;g.strokeStyle='#111';g.stroke();g.lineWidth=8;g.strokeStyle='#F29A38';g.stroke();g.lineWidth=6;g.strokeStyle='#111';
  g.beginPath();g.arc(50,-20,46,0,7);g.fill();g.stroke();for(const s2 of [-1,1]){g.beginPath();g.moveTo(50+s2*14,-58);g.lineTo(50+s2*40,-80);g.lineTo(50+s2*42,-40);g.fill();g.stroke()}
  for(const s2 of [-1,1]){g.fillStyle='#9BE36B';g.beginPath();g.ellipse(50+s2*18,-24,9,angry?5:11,0,0,7);g.fill();g.stroke();g.fillStyle='#111';g.fillRect(50+s2*18-2,-32,4,16)}
  if(angry){g.fillStyle='#fff';g.beginPath();g.moveTo(40,0);g.lineTo(44,14);g.lineTo(48,0);g.moveTo(52,0);g.lineTo(56,14);g.lineTo(60,0);g.fill()}g.fillStyle='#FF9AB0';g.beginPath();g.arc(50,-6,5,0,7);g.fill();g.restore()}
function bee2D(x,y,s,t=0){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='rgba(230,248,255,0.9)';const f=Math.abs(Math.sin(t*40));for(const k of [-1,1]){g.beginPath();g.ellipse(k*8-4,-38,18,30*(0.6+0.4*f),k*0.5,0,7);g.fill();g.stroke()}
  g.fillStyle='#FFC72E';g.beginPath();g.ellipse(0,0,50,34,0,0,7);g.fill();g.stroke();g.fillStyle='#1B1B22';for(const xx of [-14,10])g.fillRect(xx,-32,12,64);g.beginPath();g.arc(48,-4,20,0,7);g.fill();g.beginPath();g.moveTo(-50,0);g.lineTo(-72,0);g.lineTo(-50,8);g.fill();
  g.fillStyle='#fff';g.beginPath();g.arc(54,-10,6,0,7);g.fill();g.restore()}
function person2D(x,y,s,col='#3FF0FF'){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=col;g.beginPath();g.arc(0,-26,14,0,7);g.fill();rr(-16,-10,32,40,12);g.fill();g.restore()}
function skull2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#F4F0E6';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(0,-8,34,PI*0.95,PI*0.05);g.lineTo(22,28);g.lineTo(-22,28);g.closePath();g.fill();g.stroke();g.fillStyle='#111';for(const s2 of [-1,1]){g.beginPath();g.arc(s2*13,-6,9,0,7);g.fill()}g.beginPath();g.moveTo(0,8);g.lineTo(-5,16);g.lineTo(5,16);g.fill();g.restore()}
function hosp2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;rr(-60,-60,120,120,22);g.fill();g.stroke();g.fillStyle='#FF4A4A';g.fillRect(-14,-42,28,84);g.fillRect(-42,-14,84,28);g.restore()}
function riskMeter(x,y,w,f,label,col){g.save();txt(label,x-w/2,y-82,40,{align:'left',sw:10});const gr=g.createLinearGradient(x-w/2,0,x+w/2,0);gr.addColorStop(0,'#5BE37A');gr.addColorStop(0.5,'#FFD23F');gr.addColorStop(1,'#FF4A4A');g.fillStyle=gr;g.strokeStyle='#111';g.lineWidth=8;rr(x-w/2,y-18,w,36,18);g.fill();g.stroke();
  const px=x-w/2+w*clamp(f);g.fillStyle='#fff';g.beginPath();g.moveTo(px,y-24);g.lineTo(px-18,y-52);g.lineTo(px+18,y-52);g.closePath();g.fill();g.stroke();g.restore()}
function fogLayer(a){g.save();g.globalAlpha=a;const gr=g.createLinearGradient(0,H*0.3,0,H);gr.addColorStop(0,'rgba(200,220,210,0)');gr.addColorStop(1,'rgba(200,220,210,0.7)');g.fillStyle=gr;g.fillRect(0,0,W,H);g.restore()}
function torch(x,y,a){g.save();g.globalCompositeOperation='source-over';const gr=g.createRadialGradient(x,y,40,x,y,520);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,`rgba(0,0,10,${0.82*a})`);g.fillStyle=gr;g.fillRect(0,0,W,H);g.restore()}
// ---------- shared chapter helpers ----------
guy.outfit({snapback:1,shades:1,capColor:0x2E9E5B});
const CARDS=[['ALLIGATOR',(x,y,s,t)=>gator2D(x+10,y,0.85*s,0.3+0.3*Math.sin(t*4))],['PYTHON',(x,y,s,t)=>snake2D(x-10,y,0.85*s,t)],['SHARK',(x,y,s,t)=>shark2D(x,y,0.85*s,t)],['HOUSE CAT',(x,y,s,t)=>cat2D(x,y+10,0.9*s,1)],['BEES',(x,y,s,t)=>bee2D(x,y,1.1*s,t)],['BIGFOOT?',(x,y,s,t)=>bigfoot2D(x,y,0.8*s)]];
function card(x,y,i,a,t,col='#3FF0FF',hide=false){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);panel(0,0,270,300,'rgba(10,12,25,0.88)',col,28);g.restore();
  if(hide){txt('?',x,y-20,150*a,{fill:col,sw:20})}else CARDS[i][1](x,y-30*a,a,t);txt(hide?'???':CARDS[i][0],x,y+110*a,40*a,{sw:10})}
function bigfoot2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#4A3424';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(-50,110);g.lineTo(-58,10);g.quadraticCurveTo(-80,-40,-40,-70);g.quadraticCurveTo(-30,-130,0,-128);g.quadraticCurveTo(30,-130,40,-70);g.quadraticCurveTo(80,-40,58,10);g.lineTo(50,110);g.lineTo(14,110);g.lineTo(6,40);g.lineTo(-6,40);g.lineTo(-14,110);g.closePath();g.fill();g.stroke();
  for(let i=0;i<10;i++){g.beginPath();g.moveTo(-50+i*10,-40+hash(i)*20);g.lineTo(-46+i*10,-30+hash(i)*20);g.stroke()}g.fillStyle='#FFE14D';for(const s2 of [-1,1]){g.beginPath();g.arc(s2*14,-98,6,0,7);g.fill()}g.restore()}
function chapterQ(t,t0,t1,n,q){chapterCard(t,t0,t1,n,q)}

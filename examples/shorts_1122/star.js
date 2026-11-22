// ===== What happens when a shooting star hits the atmosphere? (wildcard/space) =====
const TT=20.0;
const CU={c1:3.5,c2:7.2,c3:10.24,c4:12.1,c5:14.92,c6:18.4};
guy.outfit({snapforward:1,capColor:0x7C5CFF});
function starField(S,R,n,seed,up=false){const pos=[];for(let i=0;i<n;i++){let x=hash(i*1.7+seed)-0.5,y=hash(i*2.9+seed)-0.5,z=hash(i*4.3+seed)-0.5;if(up)y=Math.abs(y)+0.02;const l=Math.hypot(x,y,z);pos.push(x/l*R,y/l*R,z/l*R)}
  const gm=new THREE.BufferGeometry();gm.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));const m=new THREE.PointsMaterial({color:0xffffff,size:2.2,sizeAttenuation:false});const p=new THREE.Points(gm,m);S.add(p);return p}
// ---- night hill set ----
const N={S:new THREE.Scene()};lights(N.S);N.S.children.filter(c=>c.isLight).forEach(l=>l.intensity*=0.55);
N.cam=new THREE.PerspectiveCamera(34,W/H,0.1,400);N.shot=(p,l)=>{N.cam.position.set(...p);N.cam.lookAt(...l);setBG('linear-gradient(#03051A 0%,#0E1240 45%,#2A2470 80%,#4B3A8C 100%)');r.setClearColor(0,0);r.render(N.S,N.cam)};
starField(N.S,150,500,1,true);
part(N.S,SPH,toon(0x1F4A33),[0,-30,0],[30,30,30],[0,0,0],0);part(N.S,SPH,toon(0x173826),[-30,-36,-40],[40,40,40],[0,0,0],0);part(N.S,SPH,toon(0x1A3D2B),[40,-40,-50],[45,45,45],[0,0,0],0);
for(let i=0;i<14;i++){const a=-1.2+i*0.18,rad=9+hash(i)*5;const x=Math.sin(a)*rad,z=-Math.cos(a)*rad;const y=-30+Math.sqrt(Math.max(0,900-x*x-z*z));part(N.S,new THREE.ConeGeometry(0.7,2.4,8),toon(0x0F2E1F),[x,y+1.0,z],[1,1,1],[0,0,0],0.01);part(N.S,cap(0.12,0.5),toon(0x3A2A1E),[x,y-0.1,z])}
// blanket
part(N.S,new THREE.BoxGeometry(1.8,0.03,1.3),toon(0xE0574F),[-0.2,0.015,0.6],[1,1,1],[0,0.2,0],0);for(let k=0;k<4;k++)part(N.S,new THREE.BoxGeometry(1.8,0.035,0.1),toon(0xFFD23F),[-0.2,0.02,0.2+k*0.28],[1,1,1],[0,0.2,0],0);
// telescope on tripod
const TEL=new THREE.Group();TEL.position.set(1.1,0,0.1);N.S.add(TEL);{const K=toon(0x2A2A35);for(let k=0;k<3;k++){const a=k/3*PI*2;part(TEL,cap(0.025,1.2),K,[Math.cos(a)*0.22,0.55,Math.sin(a)*0.22],[1,1,1],[Math.sin(a)*0.35,0,-Math.cos(a)*0.35],0)}
  const tube=new THREE.Group();tube.position.set(0,1.15,0);tube.rotation.set(0,0,0.75);TEL.add(tube);part(tube,new THREE.CylinderGeometry(0.1,0.12,1.1,18),toon(0xF4F4F8),[0,0.2,0],[1,1,1],[0,0,0],0.01);part(tube,new THREE.CylinderGeometry(0.125,0.125,0.12,18),toon(0x7C5CFF),[0,0.72,0],[1,1,1],[0,0,0],0.006);part(tube,new THREE.CylinderGeometry(0.04,0.04,0.15,12),K,[0,-0.38,0],[1,1,1],[0,0,0],0)}
// ---- space set ----
const P={S:new THREE.Scene()};lights(P.S);P.cam=new THREE.PerspectiveCamera(34,W/H,0.1,600);P.shot=(p,l)=>{P.cam.position.set(...p);P.cam.lookAt(...l);setBG('linear-gradient(#000008,#05071E)');r.setClearColor(0,0);r.render(P.S,P.cam)};
starField(P.S,300,900,7);
const EARTH=new THREE.Group();EARTH.position.set(0,-26,-6);P.S.add(EARTH);part(EARTH,SPH,toon(0x1E6FD9),[0,0,0],[22,22,22],[0,0,0],0);
for(let i=0;i<16;i++){const a=hash(i*3.1)*PI*2,b=(hash(i*5.7)-0.3)*1.4;part(EARTH,SPH,toon(i%3?0x3DBA6A:0xE9D7A0),[Math.cos(a)*Math.cos(b)*21.6,Math.sin(b)*21.6,Math.sin(a)*Math.cos(b)*21.6],[3+hash(i)*3,1.2,2+hash(i*2)*3],[a,b,0],0)}
for(let i=0;i<10;i++){const a=hash(i*9.1)*PI*2,b=hash(i*2.3)*1.2;part(EARTH,SPH,basic(0xFFFFFF,{transparent:true,opacity:0.85}),[Math.cos(a)*Math.cos(b)*22.3,Math.sin(b)*22.3,Math.sin(a)*Math.cos(b)*22.3],[2.5,0.4,1.4],[a,b,0],0)}
const ATM=part(EARTH,SPH,new THREE.MeshBasicMaterial({color:0x6FD3FF,transparent:true,opacity:0.22,depthWrite:false}),[0,0,0],[23.2,23.2,23.2],[0,0,0],0);
const SPECK=new THREE.Group();P.S.add(SPECK);part(SPECK,new THREE.DodecahedronGeometry(0.09,0),toon(0x8A8178),[0,0,0],[1,0.8,0.9],[0.3,0.5,0],0.006);
const GLOW=part(SPECK,SPH,new THREE.MeshBasicMaterial({color:0xFFB347,transparent:true,opacity:0.0,depthWrite:false}),[0,0,0],[0.15,0.15,0.15],[0,0,0],0);
const TRAIL=new THREE.Mesh(new THREE.ConeGeometry(0.11,6,16,1,true),new THREE.MeshBasicMaterial({color:0xFFE08A,transparent:true,opacity:0.0,depthWrite:false,side:THREE.DoubleSide}));TRAIL.position.set(0,3.0,0);SPECK.add(TRAIL);
GLOW.material.blending=THREE.AdditiveBlending;TRAIL.material.blending=THREE.AdditiveBlending;
// ---- 2D ----
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function streak2D(x0,y0,ang,len,f,w=10){// f: 0..1 progress of the head
  const hx=x0+Math.cos(ang)*len*f,hy=y0+Math.sin(ang)*len*f,tl=Math.min(len*f,len*0.45);const tx=hx-Math.cos(ang)*tl,ty=hy-Math.sin(ang)*tl;const gr=g.createLinearGradient(tx,ty,hx,hy);gr.addColorStop(0,'rgba(255,240,200,0)');gr.addColorStop(1,'rgba(255,250,230,0.95)');
  g.save();g.lineCap='round';g.strokeStyle=gr;g.lineWidth=w;g.beginPath();g.moveTo(tx,ty);g.lineTo(hx,hy);g.stroke();g.fillStyle='#fff';g.shadowColor='#FFD27A';g.shadowBlur=30;g.beginPath();g.arc(hx,hy,w*0.9,0,7);g.fill();g.restore()}
function loopStreaks(t){// periodic streaks for the opening (period 4 s divides into TT loop via t-TT)
  for(let k=0;k<2;k++){const ph=((t/2+k*0.5)%1+1)%1;if(ph<0.35)streak2D(W*(0.15+0.5*k),160+120*k,0.45,700,ph/0.35,8)}}
function magnifier(x,y,R,a,t){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);g.fillStyle='#0B0F2A';g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle='#C9CDD6';g.lineWidth=8;g.stroke();
  g.save();g.beginPath();g.arc(0,0,R-10,0,7);g.clip();g.fillStyle='#8A8178';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();for(let i=0;i<9;i++){const b=i/9*PI*2+t*0.6,rr_=R*0.38*(0.8+0.25*hash(i*3.3));g.lineTo(Math.cos(b)*rr_,Math.sin(b)*rr_)}g.closePath();g.fill();g.stroke();
  g.fillStyle='#A69C92';g.beginPath();g.arc(-R*0.1,-R*0.1,R*0.1,0,7);g.fill();g.restore();g.strokeStyle='#111';g.lineWidth=30;g.lineCap='round';g.beginPath();g.moveTo(R*0.72,R*0.72);g.lineTo(R*1.25,R*1.25);g.stroke();g.strokeStyle='#7C5CFF';g.lineWidth=18;g.stroke();g.restore()}
function speedPanel(v){panel(W/2,330,800,190,'rgba(10,8,30,0.9)','#FFB347',34);txt(Math.round(v)+' KM/S',W/2,312,104,{stroke:0,fill:'#FFB347'});txt('≈ '+Math.round(v*3600).toLocaleString('en-US')+' KM/H',W/2,390,40,{stroke:0,fill:'#fff'})}
function altitude(t){const x0=170,y0=1330,top=380,km=y=>lerp(y0,top,y/120);g.save();
  const gr=g.createLinearGradient(0,top,0,y0);gr.addColorStop(0,'#05061A');gr.addColorStop(0.55,'#1C2C7A');gr.addColorStop(1,'#6FB8FF');g.fillStyle=gr;g.fillRect(0,top-200,W,y0-top+200);
  g.fillStyle='#2E7A3E';g.strokeStyle='#111';g.lineWidth=8;g.fillRect(0,y0,W,H-y0);g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  g.strokeStyle='rgba(255,255,255,0.6)';g.lineWidth=4;g.beginPath();g.moveTo(x0,y0);g.lineTo(x0,top);g.stroke();for(const k of [0,20,40,60,80,100,120]){const y=km(k);g.beginPath();g.moveTo(x0-14,y);g.lineTo(x0+14,y);g.stroke();txt(k+' KM',x0-20,y,34,{align:'right',sw:7})}
  // mountain + jet
  g.fillStyle='#8C8C9E';g.beginPath();g.moveTo(250,y0);g.lineTo(380,km(8.8));g.lineTo(520,y0);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.moveTo(380,km(8.8));g.lineTo(355,km(6.5));g.lineTo(405,km(6.5));g.closePath();g.fill();
  const jx=640+40*Math.sin(t);g.fillStyle='#F4F4F8';rr(jx-60,km(11)-12,120,24,12);g.fill();g.stroke();txt('PLANES ~11 KM',jx+60,km(11)-56,40,{sw:9});
  // 100 km line
  const a=easeOut(seg(t,CU.c3+0.2,CU.c3+0.6));g.save();g.globalAlpha=a;g.setLineDash([22,14]);g.strokeStyle='#FFB347';g.lineWidth=8;g.beginPath();g.moveTo(x0+20,km(100));g.lineTo(W-40,km(100));g.stroke();g.setLineDash([]);
  txt('METEORS GLOW',W/2+70,km(100)-110,60,{fill:'#FFB347',sw:12});txt('~100 KM UP',W/2+70,km(100)-45,60,{fill:'#FFB347',sw:12});txt('WHERE SPACE BEGINS',W/2+70,km(100)+55,40,{sw:8});g.restore();
  const f=ease(seg(t,CU.c3,CU.c3+0.9));streak2D(W-120,km(118),PI*0.62,km(100)-km(118)+90,f,12);g.restore()}
function inset(x,y,R,t,a){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);g.fillStyle='#08061E';g.strokeStyle='#111';g.lineWidth=14;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle='#FFB347';g.lineWidth=7;g.stroke();
  g.save();g.beginPath();g.arc(0,0,R-8,0,7);g.clip();g.rotate(-0.6);
  const gl=g.createRadialGradient(0,0,10,0,0,R*0.7);gl.addColorStop(0,'rgba(255,255,240,1)');gl.addColorStop(0.3,'rgba(255,200,90,0.9)');gl.addColorStop(1,'rgba(255,90,40,0)');g.fillStyle=gl;g.beginPath();g.ellipse(-R*0.1,0,R*0.75,R*0.45,0,0,7);g.fill();
  for(let i=0;i<10;i++){const yy=(hash(i)-0.5)*R*0.9,xx=R-((t*500+i*70)%(R*2));g.strokeStyle='rgba(180,220,255,0.7)';g.lineWidth=5;g.beginPath();g.moveTo(xx,yy);g.lineTo(xx+60,yy);g.stroke()}
  g.fillStyle='#6E655C';g.beginPath();g.arc(-R*0.25,0,R*0.12,0,7);g.fill();g.restore();g.restore()}
// ---- opening: hill at night, pointing at the sky beside the telescope ----
const C0={p:[3.6,2.2,11.0],l:[0.5,1.3,0]};
function openScene(t){putGuy(N.S,-0.1,0,0.5,0.25);guy.pose({armL:[0.35,0],armR:[2.75+0.06*Math.sin(t*2*PI/2),0.35],mouth:'grin',blink:BLINK(t),lookY:0.7,look:0.2,headPitch:-0.3,jump:0.012*Math.sin(t*2*PI)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.set(0,0,0);holder.visible=true;SPECK.visible=false;SPECK.scale.setScalar(1);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));N.shot(mix(C0.p,[3.3,2.1,10.2],k),C0.l);loopStreaks(t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT HAPPENS WHEN',W/2,520,74,{sw:15});txt('A SHOOTING STAR',W/2,620,88,{fill:'#FFD27A',sw:18});txt('HITS THE AIR?',W/2,735,96,{sw:20});g.restore();
    comic('WOW',W*0.24,1160,84,t,1.5,{life:1.1,rot:-0.1,fill:'#FFD27A'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;putGuy(P.S,0,0.6+0.08*Math.sin(t*1.5),0,0.3+0.1*Math.sin(t*0.7));
    guy.pose({armL:[1.3+0.3*Math.sin(t*2),0.2],armR:[1.3+0.3*Math.sin(t*2+1.5),-0.2],legL:[0.3+0.2*Math.sin(t*1.8),0.5,0],legR:[-0.1+0.2*Math.sin(t*1.8+1),0.6,0],mouth:'o',mouthSize:0.7,wide:true,look:lerp(-0.8,0.8,seg(t,4.0,6.0)),blink:false,tilt:0.08*Math.sin(t)});
    SPECK.visible=true;SPECK.position.set(lerp(-2.2,2.2,seg(t,3.8,6.6)),1.9,0.9);GLOW.material.opacity=0;TRAIL.material.opacity=0;
    P.shot([0.9,1.4,7.4],[0.35,1.1,0]);magnifier(W*0.7,430,150,pop(t,5.2),t);pill('GRAIN OF SAND',W*0.7,660,48,'#FFD27A','#111',t,5.6,CU.c2);comic('TINY!',W*0.24,520,80,t,6.3,{life:0.8,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const k=seg(t,CU.c2,CU.c3);holder.visible=false;SPECK.scale.setScalar(5);SPECK.visible=true;const sp=new THREE.Vector3(lerp(-5.5,-3.6,ease(k)),lerp(8.5,-2.4,ease(k)),-1);SPECK.position.copy(sp);SPECK.rotation.set(0,0,-0.13);
    GLOW.material.opacity=0.95;GLOW.material.color.setHex(0xFFF0B0);TRAIL.material.opacity=0.4+0.4*k;P.shot([0,3,24],[-4,2.5,-1]);speedPanel(lerp(0,70,ease(seg(t,7.4,9.3))));pill('UP TO',W/2,180,40,'#fff','#111',t,7.4,CU.c3);
    comic('ZOOOM',W*0.72,900,84,t,8.0,{life:1.1,rot:0.1,fill:'#FFB347'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('#05061A');altitude(t)}
  else if(t<CU.c5){flash(t,CU.c4,0.15);// looks through the telescope
    putGuy(N.S,0.55,0,0.1,PI/2+0.25);guy.pose({reachL:[0.18,1.55,0.42],reachR:[-0.18,1.45,0.4],mouth:'o',mouthSize:0.6,blink:false,lookY:0.4,headPitch:-0.15});
    N.shot([-2.6,1.6,7.0],[0.8,1.5,0]);const f=seg(t,12.2,13.6);streak2D(W*0.05,200,0.32,1200,f,16);inset(W*0.68,640,220,t,pop(t,12.9));
    pill('GLOWING HOT AIR',W*0.62,920,48,'#FFB347','#111',t,13.4,CU.c5);comic('WHOA',W*0.24,1150,80,t,13.9,{life:0.9,rot:-0.1,fill:'#FFD27A'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);// makes a wish, then learns the truth
    const wish=t<16.4;putGuy(N.S,-0.1,0,0.5,0.1);guy.pose(wish?{reachL:[0.05,1.45,0.38],reachR:[-0.05,1.45,0.38],blink:true,mouth:'smile',headPitch:-0.2}:{armL:[0.4,0],armR:[0.4,0],mouth:'o',mouthSize:1.0,wide:true,lookY:0.8,headPitch:-0.35,blink:false});
    N.shot([0.7,1.9,3.6],[-0.1,1.9,0.5]);const f=seg(t,15.0,16.6);streak2D(W*0.9,180,PI-0.4,1000,f,12);
    if(t>16.55){const k=seg(t,16.55,17.3);g.save();g.globalAlpha=1-k;g.fillStyle='#FFE9B0';for(let i=0;i<10;i++){const a=i/10*PI*2;g.beginPath();g.arc(W*0.9+Math.cos(PI-0.4)*1000*1+Math.cos(a)*k*90-930,180+Math.sin(PI-0.4)*1000+Math.sin(a)*k*90-380,10*(1-k)+2,0,7);g.fill()}g.restore()}
    pill('MAKE A WISH',W/2,330,56,'#FFD27A','#111',t,15.1,16.4);pill('VAPORIZED!',W/2,330,64,'#FF6A5E','#111',t,16.6,CU.c6);comic('POOF',W*0.3,560,90,t,16.6,{life:1.0,rot:-0.1,fill:'#fff'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));N.shot(mix([4.6,3.0,13.5],C0.p,k),C0.l);loopStreaks(t-TT);flash(t,CU.c6,0.15)}
  vignette();captions(t)};

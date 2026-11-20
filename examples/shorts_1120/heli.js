// ===== Could you outrun a police helicopter like in GTA? (crazy what-if + GTA 6) =====
const TT=19.7;
const CU={c1:3.5,c2:7.62,c3:9.4,c4:12.66,c5:15.18,c6:17.9};
guy.outfit({snapback:1,capColor:0xFF3DA6,chain:1,shades:1});
const C=scene('city');C.car.body[3].visible=false;C.car.color&&C.car.color(0x3FF0FF);
// ---- original police-style helicopter ----
const HELI=new THREE.Group();C.S.add(HELI);
const HB=toon(0x1E2A4A),HW=toon(0xF2F2F2);
part(HELI,SPH,HB,[0,0,0],[1.5,0.85,0.85],[0,0,0],0.02);
part(HELI,SPH,new THREE.MeshToonMaterial({color:0x8FD8FF,transparent:true,opacity:0.7,gradientMap:GM}),[0.95,0.1,0],[0.7,0.6,0.7],[0,0,0],0.015);
part(HELI,new THREE.BoxGeometry(2.0,0.14,1.72),HW,[-0.1,-0.2,0],[1,1,1],[0,0,0],0);
part(HELI,cap(0.16,3.0),HB,[-2.6,0.25,0],[1,1,1],[0,0,PI/2-0.06],0.015);
part(HELI,new THREE.BoxGeometry(0.5,0.9,0.12),HB,[-4.1,0.7,0],[1,1,1],[0,0,-0.3],0.012);
const TROT=new THREE.Group();TROT.position.set(-4.15,0.75,0.12);HELI.add(TROT);for(let k=0;k<2;k++)part(TROT,new THREE.BoxGeometry(0.08,1.0,0.03),toon(0x222230),[0,0,0],[1,1,1],[0,0,k*PI/2],0);
for(const s of [-1,1]){part(HELI,cap(0.05,2.6),toon(0x222230),[0,-1.05,s*0.65],[1,1,1],[0,0,PI/2],0.006);for(const x of [-0.5,0.5])part(HELI,cap(0.04,0.35),toon(0x222230),[x,-0.85,s*0.6],[1,1,1],[s*0.3,0,0],0)}
part(HELI,cap(0.08,0.35),toon(0x222230),[0,0.95,0]);
const ROT=new THREE.Group();ROT.position.set(0,1.15,0);HELI.add(ROT);for(let k=0;k<4;k++){const b=new THREE.Group();b.rotation.y=k*PI/2;ROT.add(b);part(b,new THREE.BoxGeometry(4.2,0.04,0.28),toon(0x2A2A35),[2.1,0,0],[1,1,1],[0,0,0],0.004)}
const LR=basic(0xFF2A2A),LB=basic(0x2A6BFF);part(HELI,SPH,LR,[0.2,-0.95,0.35],[0.1,0.08,0.1],[0,0,0],0);part(HELI,SPH,LB,[0.2,-0.95,-0.35],[0.1,0.08,0.1],[0,0,0],0);
// searchlight cone
const BEAM=new THREE.Mesh(new THREE.ConeGeometry(2.2,14,32,1,true),new THREE.MeshBasicMaterial({color:0xFFF6C0,transparent:true,opacity:0.18,side:THREE.DoubleSide,depthWrite:false}));BEAM.position.set(0.8,-8,0);HELI.add(BEAM);
const SPOT=new THREE.Mesh(new THREE.CircleGeometry(2.2,40),new THREE.MeshBasicMaterial({color:0xFFF6C0,transparent:true,opacity:0.35,depthWrite:false}));SPOT.rotation.x=-PI/2;C.S.add(SPOT);
// sand bar under the far bridge (keys scene) for the GTA hide gag
const K=scene('keys');part(K.S,SPH,toon(0xF2D59A),[100,-0.25,21],[6.0,0.5,4.0],[0,0,0],0.02);{const BR2=toon(0xD9D2C4);part(K.S,new THREE.BoxGeometry(30,0.6,3.4),BR2,[100,3.2,20.4],[1,1,1],[0,0,0],0.02);part(K.S,new THREE.BoxGeometry(30,0.3,0.15),BR2,[100,3.65,22.0],[1,1,1],[0,0,0],0.01);for(const x of [96,104])part(K.S,new THREE.BoxGeometry(0.8,3.2,2.6),toon(0xC4BCAE),[x,1.5,20.4],[1,1,1],[0,0,0],0.015);for(let i=-6;i<=6;i++)part(K.S,new THREE.BoxGeometry(0.6,0.12,0.2),basic(0xFFD23F),[100+i*2.4,2.85,22.1],[1,1,1],[0,0,0],0)}
const KH=HELI.clone();K.S.add(KH);KH.traverse(o=>{if(o.geometry&&o.geometry.type==='ConeGeometry')o.visible=false});
function heliAt(h,x,y,z,ry=0,tilt=0,t=0){h.position.set(x,y,z);h.rotation.set(0,ry,tilt);const rot=h===HELI?ROT:h.children.find(c=>c.position.y>1.1&&c.children.length===4);if(rot)rot.rotation.y=t*28;}
function lightsBlink(t){const on=(((t*3)%1)+1)%1<0.5;LR.color.setHex(on?0xFF2A2A:0x551010);LB.color.setHex(on?0x10204A:0x2A6BFF);C.copR&&C.copR.color.setHex(on?0xFF2A2A:0x551010);C.copB&&C.copB.color.setHex(on?0x10204A:0x2A6BFF)}
function seatGuy(t,o={}){const c=C.car.c;const p=new THREE.Vector3(-0.35,0.55,0).applyEuler(c.rotation).add(c.position);putGuy(C.S,p.x,p.y,p.z,PI/2+c.rotation.y);holder.rotation.z=0;guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'o',mouthSize:0.7,...o})}
const C0={p:[10.8,2.4,15.5],l:[8.5,2.7,0.6]};
function openScene(t){C.mood('night');lightsBlink(t);BEAM.visible=SPOT.visible=true;const c=C.car.c;c.visible=true;c.position.set(8.5,0,1.6);c.rotation.set(0,0,0);C.car.spin&&C.car.spin(0);
  seatGuy(t,{look:-0.5,lookY:0.6,headPitch:-0.25,jump:0.01*Math.sin(t*2*PI/1.75)});
  const sx=8.1+0.4*Math.sin(t*2*PI/3.5);heliAt(HELI,sx-1.2,5.0+0.15*Math.sin(t*2*PI/1.75),-1.5,0.0,0.05,t);SPOT.position.set(sx-0.4,0.03,1.6)}
function speedo(v,y=330,lab='KM/H'){g.save();g.translate(W/2,y);panel(0,0,640,170);txt(Math.round(v).toString(),60,-4,110,{stroke:0,align:'right'});txt(lab,90,10,60,{stroke:0,fill:'#FFD23F',align:'left'});g.restore()}
function streaks(t,a=0.6){g.save();g.lineCap='round';for(let i=0;i<30;i++){const y=hash(i*3.7)*H*0.75+H*0.1,len=160+hash(i*5.1)*300,x=W-(((hash(i*9.3)*W+t*(2600+hash(i)*1400))%(W+600)))+300;g.strokeStyle=`rgba(255,255,255,${a*(0.25+0.5*hash(i*2.2))})`;g.lineWidth=5+hash(i*8)*6;g.beginPath();g.moveTo(x,y);g.lineTo(x+len,y);g.stroke()}g.restore()}
function heliIcon(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#1E2A4A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.ellipse(0,0,60,34,0,0,7);g.fill();g.stroke();g.fillStyle='#8FD8FF';g.beginPath();g.ellipse(30,-4,22,18,0,0,7);g.fill();g.stroke();g.fillStyle='#1E2A4A';g.fillRect(-120,-8,70,14);g.strokeRect(-120,-8,70,14);
  g.strokeStyle='#222';g.lineWidth=8;const w=110*Math.abs(Math.cos(t*30));g.beginPath();g.moveTo(-w,-48);g.lineTo(w,-48);g.stroke();g.beginPath();g.moveTo(0,-34);g.lineTo(0,-48);g.stroke();g.restore()}
function carTop(x,y,s,rot,col='#3FF0FF'){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=6;rr(-34,-18,68,36,10);g.fill();g.stroke();g.fillStyle='#1d1d24';rr(-8,-14,22,28,5);g.fill();g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();C.cop.c.visible=false;K.car.c.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));C.shot(mix(C0.p,[10.4,2.3,14.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU OUTRUN',W/2,215,80,{sw:17});txt('A POLICE HELICOPTER',W/2,320,84,{fill:'#FFD23F',sw:18});txt('LIKE IN GTA?',W/2,430,100,{fill:'#3FF0FF',sw:21});g.restore();
    comic('UH OH',W*0.24,1150,84,t,2.0,{life:1.3,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c2){C.mood('sunset');lightsBlink(t);BEAM.visible=SPOT.visible=false;C.car.c.visible=false;const k=seg(t,CU.c1,CU.c2);const x=lerp(-60,10,k);
    heliAt(HELI,x,6.5+0.2*Math.sin(t*3),0.6,0,0.22,t);C.shot([x-1,5.0,17],[x+0.3,5.4,0.6]);streaks(t,0.6);flash(t,CU.c1,0.15);
    speedo(lerp(0,250,Math.min(1,Math.pow(seg(t,CU.c1+0.3,7.3),0.7))),360);pill('CRUISING SPEED',W/2,540,52,'#FFD23F','#111',t,CU.c1+0.6,CU.c2);
    comic('WHOOSH!',W*0.72,1180,90,t,CU.c1+0.25,{life:1.0,rot:0.08,fill:'#fff'});comic('250!',W*0.3,1000,110,t,6.2,{life:1.1,rot:-0.08})}
  else if(t<CU.c3){clear3d();setBG('blue');flash(t,CU.c2,0.15);
    // overhead street grid
    g.fillStyle='#24305A';g.fillRect(60,600,W-120,980);g.fillStyle='#3A4A80';for(let i=0;i<4;i++)for(let j=0;j<4;j++)rr(110+i*235,650+j*230,185,180,18),g.fill();
    const k=seg(t,CU.c2+0.1,CU.c3-0.2);
    const path=[[85,1555],[85,1325],[320,1325],[320,1095],[555,1095],[555,865],[790,865],[790,625],[1000,625]];
    // traffic lights at corners
    for(let i=1;i<path.length-1;i++){const red=((t*2+i)%2)<1.2;g.fillStyle=red?'#FF3B3B':'#4CFF6B';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(path[i][0]+28,path[i][1]-28,16,0,7);g.fill();g.stroke()}
    // car crawls the zigzag (stops at reds)
    const segs=path.length-1,ck=Math.min(segs-0.001,k*segs*0.45),ci=Math.floor(ck),cu=ck-ci;const pa=path[ci],pb=path[ci+1];carTop(lerp(pa[0],pb[0],cu),lerp(pa[1],pb[1],cu),1,Math.atan2(pb[1]-pa[1],pb[0]-pa[0]));
    g.save();g.setLineDash([20,14]);g.strokeStyle='#FFD23F';g.lineWidth=8;g.beginPath();g.moveTo(85,1555);g.lineTo(lerp(85,1000,easeOut(k)),lerp(1555,625,easeOut(k)));g.stroke();g.restore();
    heliIcon(lerp(85,1000,easeOut(k)),lerp(1555,625,easeOut(k))-30,0.8,t);
    panel(W/2,330,800,150);txt('NO TRAFFIC LIGHTS',W/2,300,64,{stroke:0,fill:'#FFD23F'});txt('IT JUST FLIES STRAIGHT',W/2,362,44,{stroke:0});
    comic('BEEP BEEP',W*0.3,1640,64,t,CU.c2+0.5,{life:1.0,rot:-0.06,fill:'#FF3B3B'})}
  else if(t<CU.c4){C.mood('sunset');lightsBlink(t);BEAM.visible=SPOT.visible=false;C.car.c.visible=false;flash(t,CU.c3,0.15);
    putGuy(C.S,6,0.18,4.4,0.3);guy.pose({armL:[0.35,0.1],armR:[0.35,0.1],look:0.25*Math.sin(t*3),lookY:0.4,headPitch:-0.2,mouth:'o',mouthSize:0.6,blink:BLINK(t),jump:0.01*Math.sin(t*5)});
    const z=ease(seg(t,CU.c3,CU.c3+2.2));C.cam.fov=lerp(30,10,z);C.cam.updateProjectionMatrix();C.shot([lerp(14,40,0),lerp(9,30,0),lerp(26,60,0)],[6,1.3,4.4]);C.cam.fov=30;C.cam.updateProjectionMatrix();
    // camera viewfinder overlay
    g.save();g.strokeStyle='rgba(255,255,255,0.9)';g.lineWidth=8;const m=140;for(const [x,y,dx,dy] of [[m,600,1,1],[W-m,600,-1,1],[m,1500,1,-1],[W-m,1500,-1,-1]]){g.beginPath();g.moveTo(x,y+dy*90);g.lineTo(x,y);g.lineTo(x+dx*90,y);g.stroke()}
    g.lineWidth=5;g.beginPath();g.moveTo(W/2-60,1050);g.lineTo(W/2+60,1050);g.moveTo(W/2,990);g.lineTo(W/2,1110);g.stroke();
    if((t*2%1)<0.6){g.fillStyle='#FF2A2A';g.beginPath();g.arc(m+40,680,16,0,7);g.fill()}txt('REC',m+110,682,40,{sw:8,align:'left'});
    txt('ZOOM '+Math.round(lerp(1,30,z))+'×',W-m-10,682,44,{sw:9,align:'right',fill:'#3FF0FF'});txt('RANGE 1.6 KM',W/2,1450,48,{sw:10,fill:'#FFD23F'});g.restore();
    panel(W/2,330,800,150);txt('ZOOM CAMERA',W/2,300,64,{stroke:0,fill:'#3FF0FF'});txt('SEES YOU FROM 1+ MILE',W/2,362,44,{stroke:0});
    comic('GULP',W*0.75,850,80,t,CU.c3+2.4,{life:0.9,rot:0.08,fill:'#fff'})}
  else if(t<CU.c5){C.mood('night');lightsBlink(t);BEAM.visible=SPOT.visible=false;C.car.c.visible=false;flash(t,CU.c4,0.15);
    putGuy(C.S,-4,0.18,-2.5,0.1);guy.pose({legL:[1.1,1.6,0],legR:[1.1,1.6,0],sitY:-0.32,armL:[0.8,0.2],armR:[0.8,-0.2],bendL:1.2,bendR:1.2,mouth:'teeth',teethGap:0.2,look:0.3*Math.sin(t*4),blink:BLINK(t)});
    const cp=[-1.5,2.0,6.5],cl=[-4,0.9,-3];C.shot(cp,cl);
    const th=seg(t,CU.c4+0.9,CU.c4+1.3);
    if(th>0){g.save();g.globalAlpha=th;g.fillStyle='rgba(20,10,80,0.86)';g.fillRect(0,0,W,H);
      const p=proj(new THREE.Vector3(-4,0.8,-2.5),C.cam);const gr=g.createRadialGradient(p[0],p[1],10,p[0],p[1],300);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(0.25,'rgba(255,230,80,0.95)');gr.addColorStop(0.55,'rgba(255,90,40,0.8)');gr.addColorStop(1,'rgba(255,40,120,0)');g.fillStyle=gr;g.beginPath();g.ellipse(p[0],p[1],260,330,0,0,7);g.fill();
      for(let i=0;i<H;i+=8){g.fillStyle='rgba(0,0,0,0.12)';g.fillRect(0,i,W,3)}txt('HEAT CAM',150,682,48,{sw:9,align:'left',fill:'#FF8A3D'});g.restore();
      comic('FOUND YOU',W/2,p[1]-380,84,t,CU.c4+1.4,{life:1.1,fill:'#FFD23F'})}
    panel(W/2,330,800,150);txt('HEAT CAMERA',W/2,300,64,{stroke:0,fill:'#FF8A3D'});txt('HIDING IN THE DARK? NOPE',W/2,362,44,{stroke:0})}
  else if(t<CU.c6){clear3d();setBG('day');flash(t,CU.c5,0.15);
    putGuy(K.S,100.6,0.25,20.6,0.25);guy.pose({...SIT,armL:[0.5,0.2],armR:[2.2,-0.2],bendL:0.6,bendR:0.4,mouth:'grin',look:0.3,blink:BLINK(t),jump:0.01*Math.sin(t*4)});
    const hx=lerp(80,120,seg(t,CU.c5+0.2,CU.c6-0.1));heliAt(KH,hx,7.0,10,0,0.15,t);K.shot([103,1.3,34],[100.4,1.75,20]);
    g.save();g.globalAlpha=easeOut(seg(t,CU.c5,CU.c5+0.3));panel(W/2,330,720,150,'rgba(10,12,25,0.85)','#3FF0FF');txt('IN THE GAME',W/2,300,64,{stroke:0,fill:'#3FF0FF'});txt('HIDE UNDER A BRIDGE',W/2,362,44,{stroke:0});g.restore();
    comic('???',W*0.7,700,100,t,CU.c5+1.0,{life:1.2,rot:0.1,fill:'#fff'});
    if(t>CU.c5+1.9){pill('REAL LIFE: NOT A CHANCE',W/2,560,50,'#FF4A4A','#fff',t,CU.c5+1.9,CU.c6)}}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));C.shot(mix([13,4,19],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};

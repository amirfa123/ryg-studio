// ===== What would happen if you hugged a polar bear? (wildcard/animals) =====
const TT=20.5;
const CU={c1:2.86,c2:5.1,c3:8.28,c4:11.34,c5:14.76,c6:18.76};
guy.outfit({beanie:1});
// ---- arctic set ----
const A={S:new THREE.Scene()};lights(A.S);A.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
A.shot=(p,l,bgc)=>{A.cam.position.set(...p);A.cam.lookAt(...l);setBG(bgc||'linear-gradient(#7FB8F0 0%,#BFE0FF 55%,#EAF6FF 100%)');r.setClearColor(0,0);r.render(A.S,A.cam)};
part(A.S,new THREE.PlaneGeometry(200,80),toon(0xEAF4FF),[0,0,-10],[1,1,1],[-PI/2,0,0],0);
part(A.S,new THREE.PlaneGeometry(200,40),toon(0x2C5F9E),[0,-0.02,-45],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<14;i++){const x=-40+i*7+hash(i)*3,h=3+hash(i*3)*5;part(A.S,new THREE.BoxGeometry(5+hash(i*7)*3,h,3),toon(i%2?0xD6ECFF:0xC2E0FA),[x,h/2-0.3,-32-hash(i*5)*6],[1,1,1],[0,hash(i)*0.6-0.3,0],0.02)}
for(let i=0;i<9;i++)part(A.S,new THREE.CylinderGeometry(1.2+hash(i)*1.5,1.4+hash(i)*1.5,0.3,7),toon(0xF4FAFF),[-30+i*8,0.05,-46-hash(i*2)*6],[1,1,1],[0,i,0],0.01);
for(let i=0;i<22;i++){const x=(hash(i*1.7)-0.5)*40,z=-3-hash(i*3.3)*18;part(A.S,SPH,toon(0xF7FBFF),[x,0,z],[0.5+hash(i)*1.4,0.25+hash(i*2)*0.5,0.5+hash(i*4)],[0,0,0],0.01)}
for(let i=0;i<6;i++){const x=-8+i*3.4,z=-6-hash(i*9)*4;part(A.S,new THREE.BoxGeometry(0.9,0.7+hash(i)*0.6,0.9),toon(0xBFE6FF),[x,0.35,z],[1,1,1],[0.1,i,0.1],0.01)}
// ---- original polar bear ----
function mkBear(){const b=new THREE.Group();const F=toon(0xF5F1E4),F2=toon(0xE9E2CC),K=toon(0x15151C);
  part(b,SPH,F,[0,1.2,0],[1.55,0.88,0.85],[0,0,0],0.025);part(b,SPH,F,[-0.9,1.15,0],[0.95,0.85,0.82],[0,0,0],0.025);
  part(b,SPH,F,[1.15,1.35,0],[0.75,0.8,0.72],[0,0,0.2],0.02);
  const hd=new THREE.Group();hd.position.set(1.85,1.6,0);b.add(hd);b.userData.hd=hd;
  part(hd,SPH,F,[0,0,0],[0.5,0.44,0.44],[0,0,0],0.02);part(hd,SPH,F2,[0.42,-0.1,0],[0.3,0.2,0.24],[0,0,0],0.015);part(hd,SPH,K,[0.7,-0.05,0],[0.08,0.07,0.1],[0,0,0],0);
  for(const s of [-1,1]){part(hd,SPH,K,[0.3,0.12,s*0.2],[0.05,0.06,0.05],[0,0,0],0);part(hd,SPH,F,[-0.1,0.38,s*0.27],[0.12,0.11,0.07],[0,0,0],0.012);part(hd,SPH,toon(0x3A3A44),[-0.08,0.38,s*0.29],[0.06,0.055,0.03],[0,0,0],0)}
  const jaw=new THREE.Group();jaw.position.set(0.3,-0.22,0);hd.add(jaw);b.userData.jaw=jaw;part(jaw,SPH,F2,[0.15,0,0],[0.25,0.07,0.18],[0,0,0],0.01);
  b.userData.legs=[];for(const [x,z] of [[1.1,0.45],[1.1,-0.45],[-1.1,0.45],[-1.1,-0.45]]){const l=new THREE.Group();l.position.set(x,0.95,z);b.add(l);part(l,cap(0.26,0.6),F,[0,-0.45,0],[1,1,1],[0,0,0],0.02);part(l,SPH,F2,[0.08,-0.9,0],[0.32,0.13,0.3],[0,0,0],0.015);b.userData.legs.push(l)}
  part(b,SPH,F,[-1.75,1.35,0],[0.16,0.14,0.14],[0,0,0],0.01);
  b.userData.fur=new THREE.Group();b.add(b.userData.fur);for(let i=0;i<36;i++){const u=hash(i*2.1)*PI*2,v=hash(i*3.7)*PI*0.7+0.15;part(b.userData.fur,SPH,F,[Math.cos(u)*Math.sin(v)*1.48,1.2+Math.cos(v)*0.85,Math.sin(u)*Math.sin(v)*0.82],[0.16,0.07,0.16],[u,v,0],0)}
  return b}
const BEAR=mkBear();A.S.add(BEAR);BEAR.position.set(0,0,0);
function bearPose(t,o={}){BEAR.position.set(o.x??0,o.y??0,o.z??0);BEAR.rotation.set(0,o.ry??0,o.rz??0);const ph=t*(o.walk||0);
  BEAR.userData.legs.forEach((l,i)=>l.rotation.z=(o.walk?0.35*Math.sin(ph+(i%3?PI:0)):0));BEAR.userData.hd.rotation.set(o.hroll||0,o.hyaw||0,(o.hpitch||0)+0.04*Math.sin(t*1.6));BEAR.userData.jaw.rotation.z=-(o.jaw||0);
  const br=1+0.012*Math.sin(t*2*PI/2.05);const S0=0.62;BEAR.scale.set(S0,S0*br,S0)}
// seesaw
const SS=new THREE.Group();SS.position.set(30,0,0);A.S.add(SS);part(SS,new THREE.CylinderGeometry(0.0,0.9,1.2,4),toon(0x8C5E36),[0,0.6,0],[1,1,1],[0,PI/4,0],0.012);
const PLK=new THREE.Group();PLK.position.set(0,1.25,0);SS.add(PLK);part(PLK,new THREE.BoxGeometry(6.4,0.22,1.3),toon(0xD9A066),[0,0,0],[1,1,1],[0,0,0],0.015);for(const s of [-1,1])part(PLK,new THREE.BoxGeometry(0.15,0.3,1.35),toon(0x8C5E36),[s*2.2,0.02,0],[1,1,1],[0,0,0],0.01);
// ---- 2D helpers ----
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function snow(t,n=60){g.save();g.fillStyle='rgba(255,255,255,0.85)';for(let i=0;i<n;i++){const x=(hash(i*1.3)*W+30*Math.sin(t*0.8+i))%W,y=((hash(i*2.9)*H+t*(80+hash(i)*90))%H);g.beginPath();g.arc(x,y,4+hash(i*5)*6,0,7);g.fill()}g.restore()}
function hairs(cx,cy,t,k1,k2,k3){g.save();g.beginPath();g.arc(cx,cy,430,0,7);g.clip();g.fillStyle='#CDEBFF';g.fillRect(cx-440,cy-440,880,880);
  // black skin
  g.fillStyle='#16161C';g.fillRect(cx-440,cy+180,880,300);g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(cx-440,cy+180);g.lineTo(cx+440,cy+180);g.stroke();
  // hair tubes
  for(let i=0;i<5;i++){const x=cx-320+i*160,sw=6*Math.sin(t*1.5+i);g.save();g.translate(x,cy+190);g.rotate(-0.12+0.05*i+sw*0.01);
    g.fillStyle='rgba(255,255,255,0.55)';rr(-34,-560,68,560,34);g.fill();g.strokeStyle='#5E8FB8';g.lineWidth=7;g.stroke();
    g.fillStyle=k2>0?`rgba(190,225,255,${0.9*k2})`:'rgba(0,0,0,0)';rr(-13,-530,26,520,13);g.fill();if(k2>0){g.strokeStyle=`rgba(80,130,170,${k2})`;g.lineWidth=4;g.stroke()}g.restore()}
  // light rays
  if(k1>0){for(let i=0;i<4;i++){const x=cx-260+i*170,u=((t*0.8+i*0.25)%1);g.strokeStyle=`rgba(255,220,80,${k1})`;g.lineWidth=10;g.beginPath();g.moveTo(x+60,cy-420);g.lineTo(x+60-u*40,cy-420+u*580);g.stroke()}}
  g.restore();g.strokeStyle='#111';g.lineWidth=18;g.beginPath();g.arc(cx,cy,430,0,7);g.stroke();g.strokeStyle='#C9D3E0';g.lineWidth=8;g.stroke()}
function thermal(cx,cy,t,k){g.save();rr(cx-470,cy-560,940,1120,40);g.clip();const gr=g.createLinearGradient(0,cy-560,0,cy+560);gr.addColorStop(0,'#1A0B4A');gr.addColorStop(1,'#2A1B78');g.fillStyle=gr;g.fillRect(cx-470,cy-560,940,1120);
  // ground
  g.fillStyle='#22105E';g.fillRect(cx-470,cy+260,940,300);
  // bear (cold, barely visible)
  g.fillStyle='#2E2390';g.beginPath();g.ellipse(cx+90,cy+80,300,170,0,0,7);g.fill();g.beginPath();g.ellipse(cx+360,cy-30,110,90,0,0,7);g.fill();for(const x of [-120,-30,180,280])g.fillRect(cx+x,cy+150,60,140);
  g.save();g.shadowColor='#FFD23F';g.shadowBlur=30;g.fillStyle='#FFB13D';g.beginPath();g.arc(cx+455,cy-20,16,0,7);g.fill();g.fillStyle='#FF7A3D';g.beginPath();g.arc(cx+390,cy-55,9,0,7);g.fill();g.restore();
  // you (hot)
  const hg=g.createRadialGradient(cx-260,cy+20,20,cx-260,cy+20,240);hg.addColorStop(0,'#FFFFFF');hg.addColorStop(0.3,'#FFE14D');hg.addColorStop(0.65,'#FF6A2B');hg.addColorStop(1,'#C21E56');g.fillStyle=hg;
  g.beginPath();g.arc(cx-260,cy-170,80,0,7);g.fill();g.beginPath();g.ellipse(cx-260,cy+90,150,180,0,0,7);g.fill();g.fillRect(cx-330,cy+200,50,90);g.fillRect(cx-240,cy+200,50,90);
  g.restore();g.strokeStyle='#111';g.lineWidth=12;rr(cx-470,cy-560,940,1120,40);g.stroke();
  // viewfinder UI
  g.strokeStyle='#fff';g.lineWidth=8;for(const [sx,sy] of [[-1,-1],[1,-1],[-1,1],[1,1]]){g.beginPath();g.moveTo(cx+sx*420,cy+sy*450);g.lineTo(cx+sx*420,cy+sy*510);g.lineTo(cx+sx*360,cy+sy*510);g.stroke()}
  if(Math.floor(t*2)%2===0){g.fillStyle='#FF3B3B';g.beginPath();g.arc(cx-370,cy-460,16,0,7);g.fill()}txt('REC',cx-310,cy-460,36,{stroke:0,align:'left'});txt('IR CAM',cx+330,cy-460,36,{stroke:0,fill:'#FFD23F'});
  const sg=g.createLinearGradient(0,cy-300,0,cy+300);sg.addColorStop(0,'#fff');sg.addColorStop(0.3,'#FFE14D');sg.addColorStop(0.6,'#FF6A2B');sg.addColorStop(1,'#1A0B4A');g.fillStyle=sg;g.fillRect(cx+405,cy-300,30,600);txt('HOT',cx+420,cy-335,26,{stroke:0});txt('COLD',cx+420,cy+335,26,{stroke:0})}
// ---- poses ----
const C0={p:[1.2,2.3,11.0],l:[0.0,1.15,0]};
function openScene(t){bearPose(t,{x:0.75,z:-1.3,ry:-1.3,hyaw:0.25});putGuy(A.S,-0.75,0,1.0,0.45);
  guy.pose({armL:[1.35+0.08*Math.sin(t*2*PI/1.025),0.25],armR:[1.35+0.08*Math.sin(t*2*PI/1.025+1),0.25],mouth:'grin',blink:BLINK(t),look:0.5,headYaw:0.25,jump:0.02*Math.abs(Math.sin(t*2*PI/1.025))})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();SS.visible=false;BEAR.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));A.shot(mix(C0.p,[1.1,2.2,10.2],k),C0.l);snow(t,40);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF YOU',W/2,210,92,{sw:18});txt('HUGGED A',W/2,330,110,{fill:'#fff',sw:22});txt('POLAR BEAR?',W/2,465,130,{fill:'#7FD3FF',sw:25});g.restore();
    comic('AWW',W*0.24,1150,80,t,1.4,{life:1.0,rot:-0.1,fill:'#FF8FB1'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const k=seg(t,CU.c1,CU.c2);bearPose(t,{x:0,z:0,ry:0,hyaw:0.5,hpitch:-0.1});
    putGuy(A.S,0.15,0.04,-0.95,0);guy.pose({reachL:[0.6,1.25,0.62],reachR:[-0.6,1.25,0.62],mouth:'grin',blink:BLINK(t),brow:0.02,jump:0.04*Math.abs(Math.sin(t*5))});
    A.shot([lerp(1.0,0.5,k),2.3,lerp(7.6,6.8,k)],[0.1,1.25,-0.3]);snow(t,30);
    if(t>3.6){const f=ease(seg(t,3.6,4.4));g.save();g.setLineDash([24,18]);g.strokeStyle='#FF6A5E';g.lineWidth=12;g.beginPath();g.ellipse(W/2,1060,lerp(0,380,f),95,0,0,7);g.stroke();g.restore()}
    pill("ARMS DON'T REACH!",W/2,380,62,'#FF6A5E','#111',t,4.3,CU.c2);comic('SQUISH',W*0.78,1180,70,t,3.3,{life:0.9,rot:0.1,fill:'#fff'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const k=seg(t,CU.c2,CU.c3);SS.visible=true;const drop=ease(seg(t,5.5,6.5)),ang=lerp(0.0,-0.32,drop)*(1+0.08*Math.exp(-(t-6.5)*5)*Math.sin((t-6.5)*20)*(t>6.5?1:0));
    PLK.rotation.z=-ang;const ex=new THREE.Vector3(-2.4,0.11,0).applyEuler(PLK.rotation).add(PLK.position).add(SS.position),gy=new THREE.Vector3(2.5,0.11,0).applyEuler(PLK.rotation).add(PLK.position).add(SS.position);
    const by=t<6.5?lerp(4.5,0,ease(seg(t,5.2,5.6))):0;bearPose(t,{x:ex.x,y:ex.y-0.95+0.95*0+by*(t<5.6?1:0)-0.0,z:0,ry:0,rz:-ang,hyaw:0.6,jaw:0.2});BEAR.position.y=ex.y+0.02+(t<5.6?lerp(5,0,ease(seg(t,5.2,5.6))):0);
    const fly=t>6.5?Math.max(0,Math.sin(Math.min(PI,(t-6.5)*2.2)))*1.6:0;putGuy(A.S,gy.x,gy.y+0.2+fly,gy.z+0.1,-0.3);guy.pose({...SIT,armL:[2.3,0.2],armR:[2.3,-0.2],mouth:'o',mouthSize:1.1,wide:true,blink:false,brow:0.04});
    A.shot([30+lerp(1.2,0.4,k),3.2,19],[30,2.2,0]);snow(t,30);
    const wv=lerp(0,700,ease(seg(t,6.4,7.4)));panel(W/2,340,780,190,'rgba(10,20,40,0.88)','#7FD3FF',36);txt('POLAR BEAR',W/2,290,40,{stroke:0,fill:'#7FD3FF'});txt(Math.round(wv)+' KG',W/2,365,90,{stroke:0});
    if(t>7.4)pillS('≈ 10 PEOPLE!',W/2,1620,56,'#FFD23F');comic('BOING',W*0.72,1100,80,t,6.55,{life:0.9,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);bearPose(t,{x:0,z:0,ry:0,hyaw:0.3});
    const sink=ease(seg(t,8.9,9.6))*0.12;putGuy(A.S,0.15,0.04,-0.95,0);guy.pose({reachL:[0.58,1.22-sink,0.64+sink],reachR:[-0.58,1.22-sink,0.64+sink],mouth:t>10.6?'o':'grin',mouthSize:0.9,wide:t>10.6,blink:BLINK(t),look:0.0,lookY:-0.6,headPitch:0.25});
    A.shot([lerp(1.1,0.8,k),2.1,lerp(4.4,3.9,k)],[0.15,1.35,-0.5]);snow(t,20);
    comic('FLUFF',W*0.25,1150,76,t,9.2,{life:0.9,rot:-0.1,fill:'#fff'});pill('NOT WHITE?!',W/2,380,72,'#FFD23F','#111',t,10.6,CU.c4)}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#0E2A4A,#1E5A8A)');flash(t,CU.c4,0.15);const s=backOut(seg(t,CU.c4,CU.c4+0.4));g.save();g.translate(W/2,880);g.scale(s,s);hairs(0,0,t,seg(t,11.5,12.2),ease(seg(t,12.8,13.3)),0);g.restore();
    if(t>12.3){const k=pop(t,12.3);g.save();g.translate(W*0.24,520);g.scale(k,k);pillS('CLEAR',0,0,50,'#fff');g.restore()}
    if(t>12.9){const k=pop(t,12.9);g.save();g.translate(W*0.76,520);g.scale(k,k);pillS('HOLLOW',0,0,50,'#BFE6FF');g.restore()}
    if(t>13.7){const k=pop(t,13.7);g.save();g.translate(W/2,1210);g.scale(k,k);pillS('BLACK SKIN',0,0,56,'#FFD23F');g.restore()}
    panel(W/2,250,820,130);txt('ZOOM: POLAR BEAR FUR',W/2,250,52,{stroke:0,fill:'#7FD3FF'})}
  else if(t<CU.c6){clear3d();setBG('linear-gradient(#10141F,#232B3D)');flash(t,CU.c5,0.15);const s=lerp(0.92,1.0,ease(seg(t,CU.c5,CU.c6)));g.save();g.translate(W/2,900);g.scale(s,s);thermal(0,0,t,1);g.restore();
    if(t>16.5){const k=pop(t,16.5);g.save();g.translate(W*0.3,1580);g.scale(k,k);pillS('YOU: GLOWING',0,0,46,'#FF8A3D');g.restore()}
    if(t>17.5){const k=pop(t,17.5);g.save();g.translate(W*0.72,1690);g.scale(k,k);pillS('BEAR: ALMOST INVISIBLE',0,0,42,'#9C8CFF');g.restore()}
    panel(W/2,250,780,130);txt('HEAT CAMERA',W/2,250,58,{stroke:0,fill:'#FFD23F'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));A.shot(mix([2.2,3.0,12.5],C0.p,k),C0.l);snow(t-TT,40);flash(t,CU.c6,0.15)}
  vignette();captions(t)};

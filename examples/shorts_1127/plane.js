// ===== Could you really land a plane on a highway like in GTA? (crazy what-if + GTA 6) =====
const TT=20.6;
const CU={c1:3.35,c2:5.95,c3:10.3,c4:14.85,c5:18.95};
guy.outfit({snapback:1,capColor:0xFF5A3C,shades:1});
// ---------- highway world ----------
const HW={S:new THREE.Scene()};lights(HW.S);HW.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);
part(HW.S,new THREE.PlaneGeometry(800,400),toon(0x7FA65A),[0,-0.01,0],[1,1,1],[-PI/2,0,0],0);
part(HW.S,new THREE.PlaneGeometry(800,12.4),toon(0x3B3A4A),[0,0.005,0],[1,1,1],[-PI/2,0,0],0);
part(HW.S,new THREE.PlaneGeometry(800,12.4),toon(0x3B3A4A),[0,0.005,-14.2],[1,1,1],[-PI/2,0,0],0);
part(HW.S,new THREE.PlaneGeometry(800,1.6),toon(0xC9B48A),[0,0.006,-7.1],[1,1,1],[-PI/2,0,0],0);
for(const z of [-5.9,5.9,-8.3,-20.1])part(HW.S,new THREE.PlaneGeometry(800,0.18),basic(0xF4F4F4),[0,0.012,z],[1,1,1],[-PI/2,0,0],0);
// far skyline
const pal=[0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF,0xFFB38A,0x8FD0FF];
for(let i=0;i<70;i++){const w=5+hash(i*3.3)*6,h=6+hash(i*7.7)*26;part(HW.S,new THREE.BoxGeometry(w,h,5),toon(pal[i%6]),[-220+i*7,h/2,-70-hash(i*2.2)*20],[1,1,1],[0,0,0],0.02)}
// scrolling group (period 20)
const SCR=new THREE.Group();HW.S.add(SCR);
for(let i=-14;i<14;i++){for(const z of [-1.95,1.95,-12.25,-16.15])part(SCR,new THREE.PlaneGeometry(2.0,0.16),basic(0xFFFFFF),[i*5,0.014,z],[1,1,1],[-PI/2,0,0],0)}
for(let k=-7;k<7;k++){palm(SCR,k*20+3,27,1.6,0.14,k);palm(SCR,k*20+13,29,1.4,0.2,k*2);palm(SCR,k*20+8,-23,1.5,0.16,k*3);palm(SCR,k*20+1,-7.1,1.2,0.1,k*5)}
function scroll(x){SCR.position.x=-(((x%20)+20)%20)}
// traffic on far carriageway
const cars=[makeCar(0x3FF0FF),makeCar(0xFFD23F),makeCar(0xB59CFF)];cars.forEach(c=>{HW.S.add(c.c)});
function traffic(t){cars.forEach((c,i)=>{c.c.position.set(((-t*14+i*23)%70+70)%70-35,0,-11.2-(i%2)*4.1);c.c.rotation.set(0,PI,0);c.spin(t*20)})}
// power lines (cross the road)
const PW=new THREE.Group();HW.S.add(PW);const POLE=toon(0x6B5A48);
for(const z of [11,-25]){part(PW,cap(0.22,10.5),POLE,[0,5.4,z]);part(PW,new THREE.BoxGeometry(0.3,0.25,3.4),POLE,[0,10.3,z],[1,1,1],[PI/2,0,PI/2],0.01)}
const WIRE=toon(0x1C1C24),WIREHOT=basic(0xFF2A2A);const wires=[];
for(const dz of [-1.4,0,1.4]){const pts=[];for(let k=0;k<=24;k++){const u=k/24,z=lerp(11,-25,u);pts.push(new THREE.Vector3(dz,10.3-3.2*4*u*(1-u),z))}
  const m=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),48,0.045,6),WIRE);PW.add(m);wires.push(m)}
function hotWires(on){wires.forEach(w=>{w.material=on?WIREHOT:WIRE;w.scale.set(1,1,1)})}
// ---------- the plane (original low-wing 2-seater) ----------
function makePlane(){const P=new THREE.Group();const Wb=toon(0xF4F4F8),R=toon(0xFF5A3C),K=toon(0x22222C),Gs=new THREE.MeshToonMaterial({color:0xBFEFFF,transparent:true,opacity:0.22,gradientMap:GM,depthWrite:false});
  part(P,new THREE.BoxGeometry(4.0,0.85,1.5),Wb,[1.0,1.32,0],[1,1,1],[0,0,0],0.02);
  part(P,new THREE.BoxGeometry(4.04,0.16,1.54),R,[1.0,1.42,0],[1,1,1],[0,0,0],0);
  part(P,SPH,Wb,[3.15,1.3,0],[0.95,0.45,0.72],[0,0,0],0.02);
  part(P,new THREE.ConeGeometry(0.62,4.6,16),Wb,[-3.2,1.45,0],[1,1,0.8],[0,0,PI/2],0.02);
  part(P,new THREE.BoxGeometry(1.1,1.5,0.12),R,[-5.0,2.25,0],[1,1,1],[0,0,-0.25],0.015);
  part(P,new THREE.BoxGeometry(1.0,0.1,3.6),Wb,[-5.0,1.5,0],[1,1,1],[0,0,0],0.015);
  part(P,new THREE.BoxGeometry(1.7,0.16,11),Wb,[0.9,0.95,0],[1,1,1],[0,0,0],0.02);
  for(const s of [-1,1])part(P,new THREE.BoxGeometry(1.72,0.18,0.9),R,[0.9,0.95,s*5.1],[1,1,1],[0,0,0],0.01);
  const cnp=part(P,new THREE.BoxGeometry(2.3,0.8,1.32),Gs,[0.85,2.12,0],[1,1,1],[0,0,0],0);cnp.renderOrder=5;
  
  const prop=new THREE.Group();prop.position.set(4.12,1.3,0);P.add(prop);part(prop,SPH,R,[0,0,0],[0.22,0.2,0.2],[0,0,0],0.01);for(const s of [-1,1])part(prop,new THREE.BoxGeometry(0.06,0.95,0.16),K,[0.02,s*0.5,0],[1,1,1],[0,0,0],0.008);
  const blur=part(prop,new THREE.CircleGeometry(1.0,32),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.12,depthWrite:false,side:THREE.DoubleSide}),[0.05,0,0],[1,1,1],[0,PI/2,0],0);
  const wheels=[];for(const [x,z] of [[3.0,0],[0.7,1.5],[0.7,-1.5]]){part(P,cap(0.05,0.5),K,[x,0.6,z]);const w=new THREE.Group();w.position.set(x,0.32,z);P.add(w);part(w,new THREE.CylinderGeometry(0.32,0.32,0.22,20),K,[0,0,0],[1,1,1],[PI/2,0,0],0.01);wheels.push(w)}
  const seat=new THREE.Group();seat.position.set(0.75,0.86,0);P.add(seat);
  return {P,prop,blur,wheels,seat}}
const pl=makePlane();HW.S.add(pl.P);
function pilot(t,o={}){pl.seat.add(holder);holder.position.set(0,0,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.85);
  guy.pose({...SIT,armL:[1.25,0.15],armR:[1.25,-0.15],bendL:0.7,bendR:0.7,blink:BLINK(t),mouth:'grin',...o})}
function spinProp(t,on=1){pl.prop.rotation.x=on?t*9:PI/2;pl.blur.visible=!!on}
function shot(p,l,up=[0,1,0]){HW.cam.up.set(...up);HW.cam.position.set(...p);HW.cam.lookAt(...l);r.setClearColor(0,0);r.render(HW.S,HW.cam)}
const SUNSET='linear-gradient(#2A0E5A 0%,#7B2B8F 30%,#FF5E8A 58%,#FFB36B 78%,#FFD58A 100%)';
// ---------- 2D ----------
function gauge(x,y,R,v,vmax,col){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.92)';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle=col;g.lineWidth=7;g.beginPath();g.arc(0,0,R-6,0,7);g.stroke();
  const a0=PI*0.75,a1=PI*2.25;g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.18)';g.lineWidth=22;g.beginPath();g.arc(0,0,R*0.72,a0,a1);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,0,R*0.72,a0,a0+(a1-a0)*clamp(v/vmax));g.stroke();
  const a=a0+(a1-a0)*clamp(v/vmax);g.strokeStyle='#FF4A4A';g.lineWidth=9;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.62,Math.sin(a)*R*0.62);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();
  g.restore();txt(Math.round(v)+'',x,y+R*0.42,R*0.42,{stroke:0,fill:'#fff'});txt('KM/H',x,y+R*0.75,R*0.17,{stroke:0,fill:col})}
function dimArrow(x0,x1,y,label,col){g.save();g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.moveTo(x0,y);g.lineTo(x1,y);g.stroke();g.strokeStyle=col;g.lineWidth=8;g.stroke();
  for(const [x,d] of [[x0,1],[x1,-1]]){g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(x,y);g.lineTo(x+d*40,y-24);g.lineTo(x+d*40,y+24);g.closePath();g.fill();g.stroke();g.fillRect(x-4,y-50,8,100)}g.restore();if(label)txt(label,(x0+x1)/2,y-70,84,{fill:col,sw:18})}
// ---------- opening (also the loop end) ----------
const C0={p:[19.5,8.4,24.5],l:[-0.6,3.4,0]};
function openScene(t){setBG(SUNSET);pl.P.position.set(0,3.0+0.15*Math.sin(t*2*PI/(TT/4)),0);pl.P.rotation.set(0.04*Math.sin(t*2*PI/(TT/3)),0,0.03);spinProp(t);
  pilot(t,{armL:[2.6+0.25*Math.sin(t*2*PI/(TT/16)),0.5],bendL:0.5,headYaw:0.5,look:0.4});scroll(t*12);traffic(t);PW.position.x=-200}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;hotWires(false);PW.position.x=-200;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));shot(mix(C0.p,[18.6,8.0,23.2],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU LAND',W/2,190,92,{sw:18});txt('A PLANE ON A',W/2,295,92,{sw:18});txt('HIGHWAY?',W/2,420,140,{fill:'#FFD23F',sw:26});g.restore();
    pill('LIKE IN GTA 6',W/2,560,50,'#FF3DA6','#fff',t,1.9,CU.c1)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);setBG('linear-gradient(#3A1460,#C2337A 60%,#FF8F6B)');const u=t-CU.c1;pl.P.position.set(0,3.0,0);pl.P.rotation.set(0.05*Math.sin(u*9),0,0.04*Math.sin(u*5));spinProp(t,0);scroll(t*12);traffic(t);
    const sh=0.03*Math.sin(t*41);pilot(t,{mouth:'o',mouthSize:1.0,wide:true,blink:false,armL:[1.4,0.1],armR:[1.4,-0.1],bendL:0.9,bendR:0.9,headYaw:0.25*Math.sin(u*3),brow:1});
    const k=ease(seg(t,CU.c1,CU.c2));shot([lerp(7.0,6.2,k)+sh,6.0,lerp(2.6,2.0,k)],[0.8,4.75,0]);
    const blink=(t*3%1)<0.55;if(blink){g.fillStyle='rgba(255,40,40,0.18)';g.fillRect(0,0,W,H)}
    pill('⚠ ENGINE FAILURE',W/2,300,62,blink?'#FF2A2A':'#8E1B2E','#fff',t,3.5,CU.c2);
    pill('REAL PILOTS DO IT',W/2,1640,58,'#FFD23F','#111',t,4.3,CU.c2);comic('UH OH!',W*0.72,620,110,t,3.9,{life:1.2,rot:0.1,fill:'#FF7AC2'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);setBG('#7FA65A');pl.P.position.set(0,0,0);pl.P.rotation.set(0,0,0);spinProp(t);pl.wheels.forEach(w=>w.rotation.z=-t*8);scroll(t*4);traffic(t);
    pilot(t,{armL:[1.25,0.15],armR:[1.25,-0.15]});const k=ease(seg(t,CU.c2,CU.c3));const h=lerp(44,40,k);shot([0.8,h,0],[0.8,0,0],[1,0,0]);
    const L=proj(new THREE.Vector3(0.9,1.0,5.5),HW.cam),R2=proj(new THREE.Vector3(0.9,1.0,-5.5),HW.cam);
    if(t>7.45){const a=seg(t,7.45,7.8);dimArrow(lerp((L[0]+R2[0])/2,L[0],a),lerp((L[0]+R2[0])/2,R2[0],a),L[1]-330,a>0.9?'11 M':'',  '#FFD23F')}
    if(t>9.0){for(let i=0;i<3;i++){const z=3.67-i*3.67;const p=proj(new THREE.Vector3(-6,0,z),HW.cam);const tt0=9.0+i*0.25;if(t>tt0){const s=pop(t,tt0);g.save();g.translate(p[0],p[1]+380);g.scale(s,s);
      g.fillStyle='rgba(63,240,255,0.25)';g.fillRect(-(L[0]-R2[0])/6+8,-900,(L[0]-R2[0])/3-16,1000);g.restore();txtA('LANE '+(i+1),p[0],p[1]+430,50,s,{fill:'#3FF0FF',sw:12})}}}
    if(t>9.6)pill('= 3 LANES!',W/2,1640,70,'#3FF0FF','#111',t,9.6,CU.c3);comic('WIDE LOAD',W*0.5,330,96,t,6.3,{life:1.1,rot:-0.06,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);setBG(SUNSET);const td=11.05;const y=t<td?lerp(2.6,0,ease(seg(t,CU.c3,td))):0.04*Math.max(0,Math.sin((t-td)*12))*(1-seg(t,td,td+0.6));
    pl.P.position.set(0,y,0);pl.P.rotation.set(0,0,t<td?0.08:0.08*(1-seg(t,td,td+0.35)));spinProp(t);pl.wheels.forEach(w=>w.rotation.z=t<td?0:-t*14);scroll(t*12);traffic(t);
    pilot(t,{mouth:t<td?'o':'grin',wide:t<td,headYaw:0.15});const k=ease(seg(t,CU.c3,CU.c4));shot([lerp(-1.0,3.0,k),2.6,lerp(25,23,k)],[1.4,2.2,0]);
    if(t>td&&t<td+1.4){const p=proj(new THREE.Vector3(0.7,0.2,1.5),HW.cam);for(let i=0;i<6;i++){const d=(t-td)*1.6+i*0.12;g.fillStyle=`rgba(255,255,255,${clamp(0.75-d*0.5)})`;g.beginPath();g.arc(p[0]-d*260-i*30,p[1]-d*60,40+d*90,0,7);g.fill()}}
    gauge(W/2,1690,150,t<12.9?lerp(0,90,easeOut(seg(t,11.3,13.1))):90,160,'#3FF0FF');
    pill('≈ HIGHWAY SPEED',W/2,330,62,'#FFD23F','#111',t,11.9,CU.c4);comic('SKRRT!',W*0.7,700,110,t,td,{life:0.9,rot:0.12,fill:'#FF7AC2'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);setBG(SUNSET);const u=t-CU.c4;const up=easeOut(seg(t,17.25,18.7));
    pl.P.position.set(0,3.0+up*7.2,0);pl.P.rotation.set(0,0,0.06+up*0.55*(1-seg(t,18.4,18.95)));spinProp(t);scroll(t*12);traffic(t);
    PW.position.x=42-u*11;const hot=t>16.3;hotWires(hot);
    pilot(t,{mouth:t>16.6?'o':'smile',mouthSize:1.1,wide:t>16.6,blink:false,armL:[t>17.2?1.7:1.25,0.1],armR:[t>17.2?1.7:1.25,-0.1]});
    shot([-21,7.5+up*6,6.5],[8,5.0+up*6,0]);
    if(hot){const p=proj(new THREE.Vector3(PW.position.x,7.4,0),HW.cam);const s=pop(t,16.3);g.save();g.translate(p[0],p[1]);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=22;g.beginPath();g.arc(0,0,130,0,7);g.stroke();g.strokeStyle='#FF2A2A';g.lineWidth=12;g.stroke();g.restore();txtA('!',p[0],p[1]-190,130,s,{fill:'#FF2A2A',sw:22})}
    pill('HARD TO SEE',W/2,1640,64,'#FF2A2A','#fff',t,16.4,CU.c5);comic('PULL UP!',W*0.5,330,120,t,17.3,{life:1.2,rot:-0.05,fill:'#FFD23F'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c5,TT-0.1));shot(mix([21,9,26.5],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};

// ===== Stunts long-form extras (16:9) =====
guy.outfit({snapback:1,chain:1,shades:1});
// ---- city ramps (takeoff at x=0, landing ramp at x=LX) ----
function rampSet(C){if(C.ramps)return C.ramps;const gp=new THREE.Group();C.S.add(gp);const RM=toon(0xF2B33D),ST=toon(0xD94A3A);
  const tk=new THREE.Group();gp.add(tk);// takeoff: wedge rising toward +x
  const sh=new THREE.Shape();sh.moveTo(-3,0);sh.lineTo(3,0);sh.lineTo(3,1.6);sh.closePath();const geo=new THREE.ExtrudeGeometry(sh,{depth:2.4,bevelEnabled:false});geo.translate(0,0,-1.2);
  part(tk,geo,RM,[0,0,0],[1,1,1],[0,0,0],0.02);for(let i=0;i<4;i++)part(tk,new THREE.BoxGeometry(0.2,0.02,2.42),ST,[-2.2+i*1.5,(i*1.5+0.8)/6*1.6+0.03,0],[1,1,1],[0,0,Math.atan2(1.6,6)],0);
  const ld=new THREE.Group();gp.add(ld);const sh2=new THREE.Shape();sh2.moveTo(-4,0);sh2.lineTo(-4,1.9);sh2.lineTo(5,0);sh2.closePath();const g2=new THREE.ExtrudeGeometry(sh2,{depth:2.6,bevelEnabled:false});g2.translate(0,0,-1.3);part(ld,g2,RM,[0,0,0],[1,1,1],[0,0,0],0.02);
  C.ramps={gp,tk,ld};return C.ramps}
// ---- motorbike ----
function makeBike(col=0x3FF0FF){const b=new THREE.Group();const F=toon(col),K=toon(0x1d1d24),S=toon(0xBFC3CC);const wheels=[];
  for(const x of [-0.75,0.75]){const w=new THREE.Group();w.position.set(x,0.36,0);b.add(w);part(w,new THREE.TorusGeometry(0.3,0.08,10,24),K,[0,0,0],[1,1,1],[0,0,0],0.008);part(w,new THREE.CylinderGeometry(0.2,0.2,0.06,16),S,[0,0,0],[1,1,1],[PI/2,0,0],0.004);for(let k=0;k<3;k++)part(w,new THREE.BoxGeometry(0.4,0.03,0.03),S,[0,0,0],[1,1,1],[0,0,k*PI/3],0);wheels.push(w)}
  part(b,new THREE.BoxGeometry(0.9,0.32,0.3),F,[0.05,0.72,0],[1,1,1],[0,0,0.12],0.015);part(b,new THREE.BoxGeometry(0.7,0.12,0.3),K,[-0.35,0.86,0],[1,1,1],[0,0,0],0.01);
  part(b,new THREE.BoxGeometry(0.4,0.3,0.26),toon(0x4A4D58),[-0.05,0.48,0],[1,1,1],[0,0,0],0.01);part(b,cap(0.035,0.7),S,[0.62,0.68,0],[1,1,1],[0,0,-0.4],0.004);
  part(b,cap(0.03,0.6),K,[0.76,1.0,0],[1,1,1],[PI/2,0,0],0.004);part(b,SPH,basic(0xFFF2B0),[0.86,0.85,0],[0.08,0.08,0.1],[0,0,0],0);part(b,cap(0.03,0.6),S,[-0.45,0.45,0.18],[1,1,1],[0,0,1.3],0.004);
  return {b,wheels,spin(a){for(const w of wheels)w.rotation.z=-a}}}
// ---- rooftop scene: 5-floor building at origin, street in front ----
BUILD.roof=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(400,200),toon(0x3A3550),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(S,new THREE.PlaneGeometry(400,7),toon(0x2E2B40),[0,0.01,9],[1,1,1],[-PI/2,0,0],0);
  for(let i=-30;i<30;i++)part(S,new THREE.PlaneGeometry(1.6,0.14),basic(0xFFD23F),[i*3.2,0.02,9],[1,1,1],[-PI/2,0,0],0);
  const FH=3.0,NF=5,BW=10,BD=8;o.FH=FH;o.top=FH*NF;const tx=winTex(7,0.5);tx.repeat.set(4,NF);
  part(S,new THREE.BoxGeometry(BW,FH*NF,BD),tmat(0x7FE0D6,tx),[0,FH*NF/2,0],[1,1,1],[0,0,0],0.02);
  for(let f=1;f<NF;f++)part(S,new THREE.BoxGeometry(BW+0.2,0.12,BD+0.2),toon(0xEDE2CC),[0,f*FH,0],[1,1,1],[0,0,0],0);
  part(S,new THREE.BoxGeometry(BW+0.3,0.5,BD+0.3),toon(0xEDE2CC),[0,FH*NF+0.25,0],[1,1,1],[0,0,0],0.01);part(S,new THREE.BoxGeometry(BW-0.4,0.06,BD-0.4),toon(0x6D6A80),[0,FH*NF+0.49,0],[1,1,1],[0,0,0],0);
  for(const [x,z] of [[-3,-2],[2.5,-2.5]]){part(S,new THREE.BoxGeometry(1.4,1.0,1.2),toon(0xC9CDD6),[x,FH*NF+1.0,z],[1,1,1],[0,0,0],0.01);part(S,new THREE.CylinderGeometry(0.4,0.4,0.05,16),toon(0x4A4D58),[x,FH*NF+1.52,z],[1,1,1],[0,0,0],0)}
  const pal=[0xFF8FB1,0xFFD27F,0xB59CFF,0xFFB38A,0x8FD0FF];for(let i=0;i<16;i++){const x=-60+i*8+(i>=7&&i<=8?40:0);if(Math.abs(x)<8)continue;const h=8+hash(i*3.1)*18,w=6;const t2=winTex(i+20);t2.repeat.set(3,Math.round(h/3));part(S,new THREE.BoxGeometry(w,h,6),tmat(pal[i%5],t2),[x,h/2,-6-hash(i)*6],[1,1,1],[0,0,0],0.02)}
  for(let k=-8;k<8;k++)palm(S,k*7+3.5,5.0,1.15,0.15,k);
  o.ledge=new THREE.Group();o.ledge.position.set(14,0,6);S.add(o.ledge);part(o.ledge,new THREE.BoxGeometry(3,2.2,2),toon(0xE7A9C0),[0,1.1,0],[1,1,1],[0,0,0],0.02);part(o.ledge,new THREE.BoxGeometry(3.1,0.15,2.1),toon(0xEDE2CC),[0,2.27,0],[1,1,1],[0,0,0],0);
  // crash mat (hidden by default)
  o.mat=new THREE.Group();o.mat.visible=false;S.add(o.mat);part(o.mat,new THREE.BoxGeometry(3,0.6,2.6),toon(0x2E86DE),[0,0.3,0],[1,1,1],[0,0,0],0.03);part(o.mat,new THREE.BoxGeometry(3.02,0.08,2.62),toon(0xFFD23F),[0,0.45,0],[1,1,1],[0,0,0],0);
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('day');r.render(o.S,o.cam)};return o};
// ---- bay: ocean, tall tower on a pier at x=0, cliff at x=-40 ----
BUILD.bay=()=>{const S=new THREE.Scene();lights(S);const o={S};
  o.water=part(S,new THREE.PlaneGeometry(800,600),toon(0x2EA8C9),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<120;i++)part(S,new THREE.PlaneGeometry(1.4+hash(i)*2.4,0.08),basic(0xBFF6F6),[(hash(i*3)-0.5)*160,0.02,(hash(i*7)-0.5)*120],[1,1,1],[-PI/2,0,0],0);
  const TH=60;o.TH=TH;const tx=winTex(3,0.6);tx.repeat.set(3,20);part(S,new THREE.BoxGeometry(8,TH,8),tmat(0xB8D8F0,tx),[0,TH/2,-6],[1,1,1],[0,0,0],0.02);
  part(S,new THREE.BoxGeometry(8.4,0.6,8.4),toon(0xEDE2CC),[0,TH+0.3,-6],[1,1,1],[0,0,0],0.01);
  // diving board sticking out toward +z
  part(S,new THREE.BoxGeometry(1.2,0.18,4),toon(0xF4F4F8),[0,TH+0.5,-0.2],[1,1,1],[0,0,0],0.01);part(S,new THREE.BoxGeometry(1.24,0.06,4.02),toon(0xFF3DA6),[0,TH+0.62,-0.2],[1,1,1],[0,0,0],0);
  part(S,new THREE.BoxGeometry(14,1,14),toon(0x9A8F80),[0,0.3,-6],[1,1,1],[0,0,0],0.01);
  for(const [x,z,h] of [[-30,-30,26],[-18,-36,18],[22,-34,34],[34,-28,20],[46,-40,30],[-44,-40,22]]){const t2=winTex(x+99);t2.repeat.set(3,Math.round(h/3));part(S,new THREE.BoxGeometry(7,h,7),tmat(hash(x)<0.5?0xFF8FB1:0xFFD27F,t2),[x,h/2,z],[1,1,1],[0,0,0],0.02)}
  o.splash=new THREE.Group();S.add(o.splash);for(let k=0;k<14;k++){const a=k/14*PI*2;part(o.splash,SPH,toon(0xE9FBFF),[Math.cos(a)*0.6,0,Math.sin(a)*0.6],[0.25,0.6,0.25],[Math.sin(a)*0.5,0,-Math.cos(a)*0.5],0)}o.splash.visible=false;
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('day');r.render(o.S,o.cam)};return o};
// ---- highway (long straight, for wheelie + sprint) ----
BUILD.hwy=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(1200,300),toon(0xD9B77A),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(S,new THREE.PlaneGeometry(1200,8),toon(0x3A3850),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=-200;i<200;i++)part(S,new THREE.PlaneGeometry(1.8,0.16),basic(0xFFFFFF),[i*3.6,0.02,0],[1,1,1],[-PI/2,0,0],0);for(const z of [-3.8,3.8])part(S,new THREE.PlaneGeometry(1200,0.14),basic(0xFFD23F),[0,0.02,z],[1,1,1],[-PI/2,0,0],0);
  for(let k=-60;k<60;k++){palm(S,k*10+2,-7,1.2,0.12+0.1*hash(k),k);if(hash(k*7)<0.6){const c=part(S,SPH,toon(0x4E9A4A),[k*10+6,0.5,8+hash(k)*4],[1.2,0.8,1.0],[0,0,0],0.01)}}
  for(let k=-30;k<30;k++){const h=part(S,new THREE.ConeGeometry(14+hash(k)*8,10+hash(k*3)*12,6),toon(0xC98B6A),[k*24,4,-60-hash(k*5)*20],[1,1,1],[0,hash(k),0],0)}
  const sg=new THREE.Group();sg.position.set(30,0,-5.5);S.add(sg);part(sg,cap(0.08,4),toon(0x8A8F99),[0,2,0]);part(sg,new THREE.BoxGeometry(2.6,1.3,0.1),toon(0x2E9E5B),[0,4.4,0],[1,1,1],[0,0,0],0.01);
  o.bike=makeBike(0xFF3D7F);o.piv=new THREE.Group();S.add(o.piv);o.piv.add(o.bike.b);o.bike.b.position.set(0.75,0,0);o.piv.visible=false;
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);o.shot=(p,l,bgk='day')=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG(bgk);r.render(o.S,o.cam)};return o};
// rider on bike: put guy on the bike group (bike faces +x)
function rider(B,t,o={}){B.b.add(holder);holder.position.set(-0.3,0.55,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.62);guy.pose({...SIT,reachL:[0.2,1.25,0.6],reachR:[-0.2,1.25,0.6],blink:BLINK(t),mouth:'grin',...o})}
// ---- 2D helpers ----
function speedo(x,y,R,v,max,unit,label){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.88)';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  g.strokeStyle='#3FF0FF';g.lineWidth=R*0.09;g.beginPath();g.arc(0,0,R*0.82,PI*0.75,PI*0.75+PI*1.5*clamp(v/max));g.stroke();
  const a=PI*0.75+PI*1.5*clamp(v/max);g.strokeStyle='#FF3DA6';g.lineWidth=R*0.07;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.7,Math.sin(a)*R*0.7);g.stroke();g.restore();
  txt(String(Math.round(v)),x,y+R*0.42,R*0.42,{sw:10});txt(unit,x,y+R*0.72,R*0.17,{stroke:0,fill:'#3FF0FF'});if(label)txt(label,x,y-R-34,R*0.2,{sw:8})}
function hpBar(x,y,w,f,label='HEALTH'){g.save();g.fillStyle='rgba(0,0,0,0.55)';rr(x,y,w,46,12);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();const c=f>0.5?'#5BE37A':f>0.25?'#FFD23F':'#FF4A4A';if(f>0){g.fillStyle=c;rr(x+6,y+6,Math.max(20,(w-12)*clamp(f)),34,8);g.fill()}g.restore();txt(label,x+w/2,y-26,30,{sw:8})}
function verdict(t,t0,ok,label,vx=W*0.5){if(t<t0)return;const a=pop(t,t0,0.35);g.save();g.translate(vx,H*0.47);g.rotate(-0.08);g.scale(1.5-0.5*clamp(a),1.5-0.5*clamp(a));g.globalAlpha=clamp(a*1.5);const c=ok?'#5BE37A':'#FF4A4A';
  g.fillStyle='rgba(10,12,25,0.85)';rr(-420,-110,840,220,30);g.fill();g.strokeStyle=c;g.lineWidth=16;g.stroke();g.restore();if(a>0.2){txtA(label,vx,H*0.47+8,ok?84:110,clamp(a),{fill:c,sw:18})}}
function floorCut(x,yb,fw,fh,n,col='#7FE0D6'){g.save();for(let i=0;i<n;i++){const y=yb-(i+1)*fh;g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=6;g.fillRect(x,y,fw,fh);g.strokeRect(x,y,fw,fh);g.fillStyle='#FFF2B0';for(let k=0;k<3;k++)g.fillRect(x+fw*0.14+k*fw*0.28,y+fh*0.25,fw*0.16,fh*0.4)}g.restore()}
function stickFig(x,y,s,rot=0){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(0,-34,16,0,7);g.fill();g.stroke();g.fillStyle='#14939A';rr(-16,-18,32,40,10);g.fill();g.stroke();g.restore()}
function cloud(x,y,s,a=1){g.save();g.globalAlpha=a;g.fillStyle='#fff';g.translate(x,y);g.scale(s,s);for(const [cx,cy,cr] of [[-60,10,45],[0,-10,60],[60,10,45],[20,25,40],[-25,25,40]]){g.beginPath();g.arc(cx,cy,cr,0,7);g.fill()}g.restore()}
const BGS2={sky:'linear-gradient(#2F6FD8 0%,#5EA8F0 50%,#BFE6FF 100%)',hi:'linear-gradient(#0B1E5A 0%,#2F6FD8 60%,#8FCBFF 100%)'};
// ramp jump path: takeoff group at TX, landing group at LX (z=1.6). u: 0..1 over approach+flight+rollout
function placeRamps(C,TX=-6,LX=20){const R=rampSet(C);R.gp.visible=true;R.tk.position.set(TX,0,1.6);R.ld.position.set(LX,0,1.6);R.ld.visible=true;return R}
function jumpPose(TX,LX,x,peak=6){const ang=Math.atan2(1.6,6);const x0=TX+3,y0=1.6,x1=LX+0.5,y1=1.9*(1-(x1-(LX-4))/9);
  if(x<TX-3)return [x,0,0];if(x<x0){const k=(x-(TX-3))/6;return [x,1.6*k,ang]}
  if(x<x1){const k=(x-x0)/(x1-x0);const y=lerp(y0,y1,k)+peak*4*k*(1-k);const dy=(y1-y0)+peak*4*(1-2*k);return [x,y,Math.atan2(dy,x1-x0)*0.9]}
  if(x<LX+5){const k=(x-(LX-4))/9;return [x,1.9*(1-k),-Math.atan2(1.9,9)]}return [x,0,0]}
function stuntIcon(k,x,y,s,col='#FFD23F'){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.lineCap='round';g.strokeStyle='#111';g.lineWidth=8;g.fillStyle=col;
  const car=(cx,cy,r=0)=>{g.save();g.translate(cx,cy);g.rotate(r);g.fillStyle='#FF3D7F';rr(-40,-18,80,26,8);g.fill();g.stroke();rr(-20,-34,40,18,6);g.fill();g.stroke();g.fillStyle='#222';for(const wx of [-24,24]){g.beginPath();g.arc(wx,10,10,0,7);g.fill();g.stroke()}g.restore()};
  if(k===0){g.fillStyle=col;g.beginPath();g.moveTo(-90,60);g.lineTo(-20,60);g.lineTo(-20,30);g.closePath();g.fill();g.stroke();car(30,-20,-0.3);g.setLineDash([10,12]);g.beginPath();g.moveTo(-20,25);g.quadraticCurveTo(10,-50,60,-40);g.stroke();g.setLineDash([])}
  else if(k===1){g.fillStyle='#7FE0D6';g.fillRect(-60,-30,70,95);g.strokeRect(-60,-30,70,95);stickFig(-25,-34,0.9);g.strokeStyle='#FF4A4A';g.lineWidth=10;g.beginPath();g.moveTo(45,-40);g.lineTo(45,50);g.stroke();g.beginPath();g.moveTo(28,32);g.lineTo(45,52);g.lineTo(62,32);g.stroke()}
  else if(k===2){car(-25,20);stickFig(45,0,0.8,0.9);g.strokeStyle='#fff';g.lineWidth=6;for(let i=0;i<3;i++){g.beginPath();g.moveTo(-90,0+i*14);g.lineTo(-70,0+i*14);g.stroke()}}
  else if(k===3){g.save();g.rotate(-0.45);g.fillStyle='#3FF0FF';rr(-40,-14,80,20,8);g.fill();g.stroke();g.fillStyle='#222';for(const wx of [-38,38]){g.beginPath();g.arc(wx,14,20,0,7);g.fill();g.stroke()}g.restore()}
  else if(k===4){g.fillStyle='#B8D8F0';g.fillRect(-30,-70,44,120);g.strokeRect(-30,-70,44,120);g.fillStyle='#2EA8C9';g.fillRect(-90,50,180,26);g.strokeRect(-90,50,180,26);stickFig(40,-20,0.7,PI)}
  else if(k===5){g.fillStyle='#E9EBF0';g.beginPath();g.ellipse(-20,-40,60,14,0,0,7);g.fill();g.stroke();g.beginPath();g.moveTo(-30,-40);g.lineTo(-50,-70);g.lineTo(-10,-40);g.closePath();g.fill();g.stroke();stickFig(30,30,0.8,1.2)}
  else if(k===6){stickFig(-10,20,1.1,0.3);g.fillStyle='#FFD23F';g.beginPath();g.moveTo(40,-60);g.lineTo(20,0);g.lineTo(42,0);g.lineTo(28,55);g.lineTo(70,-15);g.lineTo(48,-15);g.lineTo(62,-60);g.closePath();g.fill();g.stroke()}
  g.restore()}
function driver(car,t,o={}){car.c.add(holder);holder.position.set(-0.35,0.32,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.82);guy.pose({...SIT,reachL:[0.18,1.15,0.55],reachR:[-0.18,1.15,0.55],blink:BLINK(t),mouth:'grin',...o})}
function shake(t,t0,amp=0.25,d=0.6){const k=t-t0;if(k<0||k>d)return [0,0];const a=amp*(1-k/d);return [a*Math.sin(k*70),a*Math.cos(k*55)]}
function field2D(x,y,w,h,a=1){g.save();g.globalAlpha=a;g.fillStyle='#3DBA6A';g.strokeStyle='#111';g.lineWidth=6;g.fillRect(x,y,w,h);g.strokeRect(x,y,w,h);g.strokeStyle='rgba(255,255,255,0.85)';g.lineWidth=4;for(let i=1;i<10;i++){g.beginPath();g.moveTo(x+w*i/10,y+6);g.lineTo(x+w*i/10,y+h-6);g.stroke()}g.fillStyle='#2E9E5B';g.fillRect(x,y,w*0.06,h);g.fillRect(x+w*0.94,y,w*0.06,h);g.restore()}
function car2D(cx,cy,r=0,s=1,col='#FF3D7F'){g.save();g.translate(cx,cy);g.rotate(r);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;g.fillStyle=col;rr(-50,-22,100,30,8);g.fill();g.stroke();rr(-24,-42,48,22,6);g.fill();g.stroke();g.fillStyle='#222';for(const wx of [-30,30]){g.beginPath();g.arc(wx,10,12,0,7);g.fill();g.stroke()}g.restore()}
function bone(x,y,s,broken=0){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFF8E8';g.strokeStyle='#111';g.lineWidth=7;
  const knobs=(ex)=>{for(const sy of [-1,1]){g.beginPath();g.arc(ex,sy*16,22,0,7);g.fill();g.stroke()}};
  if(!broken){rr(-110,-14,220,28,10);g.fill();g.stroke();knobs(-115);knobs(115)}
  else{for(const sd of [-1,1]){g.save();g.translate(sd*(10+broken*16),0);g.rotate(sd*0.25*broken);g.beginPath();g.moveTo(0,-14);g.lineTo(sd*105,-14);g.lineTo(sd*105,14);g.lineTo(0,14);g.lineTo(sd*-8,4);g.lineTo(sd*6,-4);g.closePath();g.fill();g.stroke();knobs(sd*110);g.restore()}}
  g.restore()}
const rollPivot=new THREE.Group();
function rollAt(sc,x,y,z,rz,ry=PI/2,s=1){sc.add(rollPivot);rollPivot.add(holder);rollPivot.position.set(x,y+0.7*s,z);rollPivot.rotation.set(0,0,0);rollPivot.rotateZ(rz);holder.position.set(0,-0.7*s,0);holder.rotation.set(0,ry,0);holder.scale.setScalar(s)}
const CURL={legL:[1.6,2.2,0],legR:[1.6,2.2,0],armL:[1.6,0],armR:[1.6,0],bendL:1.4,bendR:1.4,mouth:'grin'};
// sky scene: clouds that scroll upward past a falling guy
BUILD.sky=()=>{const S=new THREE.Scene();lights(S);const o={S};o.clouds=[];const CM=toon(0xFFFFFF);
  for(let i=0;i<16;i++){const c=new THREE.Group();S.add(c);for(let k=0;k<5;k++)part(c,SPH,CM,[(k-2)*0.9,0.3*hash(i*3+k),0.4*hash(k+i)],[1.1+0.4*hash(k*7+i),0.8,0.9],[0,0,0],0);c.userData={x:(hash(i*5.1)-0.5)*26,z:-4-hash(i*2.7)*14,y0:hash(i*9.3)*40};o.clouds.push(c)}
  o.scroll=(v)=>{for(const c of o.clouds){const y=((c.userData.y0+v)%40+40)%40-20;c.position.set(c.userData.x,y,c.userData.z)}};
  // landing net in a field (ground at y=-60 relative region) built separately
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);o.shot=(p,l,bgk)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG(bgk||BGS2.sky);r.render(o.S,o.cam)};return o};
BUILD.field=()=>{const S=new THREE.Scene();lights(S);const o={S};part(S,new THREE.PlaneGeometry(600,400),toon(0x6FBF5A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<30;i++)part(S,SPH,toon(0x4E9A4A),[(hash(i*3)-0.5)*200,0.8,-30-hash(i*7)*80],[2.4,1.6,2.0],[0,0,0],0.01);
  const NW=30;const geo=new THREE.PlaneGeometry(NW,NW,24,24);geo.rotateX(-PI/2);o.netGeo=geo;o.netBase=geo.attributes.position.array.slice();o.net=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0xFFFFFF,wireframe:true}));o.net.position.set(0,4,0);S.add(o.net);
  o.netFill=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0x3FA0FF,transparent:true,opacity:0.25,side:THREE.DoubleSide,depthWrite:false}));o.net.add(o.netFill);
  o.poles=new THREE.Group();S.add(o.poles);for(const [x,z] of [[-15,-15],[15,-15],[-15,15],[15,15]]){part(o.poles,cap(0.3,4.2),toon(0xD94A3A),[x,2.1,z]);part(o.poles,new THREE.CylinderGeometry(0.6,0.6,1.4,12),toon(0xBFC3CC),[x,0.7,z],[1,1,1],[0,0,0],0.01)}
  o.sag=(d,cx=0,cz=0)=>{const p=geo.attributes.position.array,b=o.netBase;for(let i=0;i<p.length;i+=3){const x=b[i],z=b[i+2];const ex=Math.max(0,1-Math.pow(x/(NW/2),2)),ez=Math.max(0,1-Math.pow(z/(NW/2),2));p[i+1]=-d*ex*ez*Math.exp(-((x-cx)**2+(z-cz)**2)/120)}geo.attributes.position.needsUpdate=true};
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('day');r.render(o.S,o.cam)};return o};
const SKYDIVE=(t)=>({armL:[1.7+0.08*Math.sin(t*9),0.3],armR:[1.7+0.08*Math.cos(t*8),-0.3],legL:[0.5,0.7,0],legR:[0.5,0.7,0],bendL:0.6,bendR:0.6,blink:BLINK(t)});
function fallGuy(sc,x,y,z){putGuy(sc,x,y,z,0);holder.rotation.set(PI/2-0.25,0,0)}
function altim(x,y,v){panel(x,y,460,130);txt(Math.round(v).toLocaleString('en-US')+' m',x,y+8,76,{fill:'#3FF0FF',stroke:0});txt('ALTITUDE',x,y-86,30,{sw:8})}
function stopwatch(x,y,R,sec){g.save();g.translate(x,y);g.fillStyle='#F4F4F8';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.fillStyle='#111';g.fillRect(-14,-R-30,28,24);
  g.fillStyle='rgba(255,61,166,0.35)';g.beginPath();g.moveTo(0,0);g.arc(0,0,R*0.85,-PI/2,-PI/2+PI*2*((sec%60)/60));g.fill();g.strokeStyle='#E23B3B';g.lineWidth=8;const a=-PI/2+PI*2*((sec%60)/60);g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.8,Math.sin(a)*R*0.8);g.stroke();g.restore();
  const m=Math.floor(sec/60),s=Math.floor(sec%60);txt(m+':'+String(s).padStart(2,'0'),x,y+R+60,64,{sw:12})}

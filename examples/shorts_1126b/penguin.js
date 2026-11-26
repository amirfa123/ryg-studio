// ===== Why don't penguins' feet freeze on the ice? (wildcard/animals) =====
const TT=20.7;
const CU={c1:2.95,c2:5.4,c3:9.72,c4:12.7,c5:15.18,c6:16.76,c7:19.0};
guy.outfit({beanie:1});
// ---- ice world ----
const IC={S:new THREE.Scene()};lights(IC.S);IC.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);IC.S.fog=new THREE.Fog(0xDDEFFF,30,90);
part(IC.S,new THREE.PlaneGeometry(300,300),toon(0xEAF6FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<10;i++){const x=(hash(i*3.3)-0.5)*60,z=-14-hash(i*5.1)*30,s=2+hash(i*7.7)*5;part(IC.S,new THREE.ConeGeometry(s,s*1.4,5),toon(i%2?0xCDE9FF:0xB5DCFA),[x,s*0.6,z],[1,1,1],[0,hash(i)*3,0],0.03)}
for(let i=0;i<16;i++){part(IC.S,new THREE.CircleGeometry(0.6+hash(i)*1.4,20),toon(0xD3ECFF),[(hash(i*2.1)-0.5)*24,0.01,(hash(i*4.4)-0.5)*16],[1.6,1,1],[-PI/2,0,0],0)}
function makePenguin(){const p=new THREE.Group();const B=toon(0x1E2433),Wt=toon(0xFFFFFF),O=toon(0xFF9A2E),Y=toon(0xFFD54A);const body=new THREE.Group();p.add(body);
  part(body,SPH,B,[0,0.55,0],[0.36,0.5,0.32],[0,0,0],0.02);part(body,SPH,Wt,[0,0.5,0.1],[0.29,0.42,0.25],[0,0,0],0);
  part(body,SPH,B,[0,1.08,0.02],[0.22,0.21,0.21],[0,0,0],0.015);for(const s of [-1,1]){part(body,SPH,Wt,[s*0.08,1.1,0.17],[0.08,0.08,0.05],[0,0,0],0);part(body,SPH,toon(0x111111),[s*0.085,1.12,0.215],[0.03,0.035,0.02],[0,0,0],0);part(body,SPH,Y,[s*0.17,1.0,0.1],[0.05,0.07,0.05],[0,0,0],0)}
  part(body,new THREE.ConeGeometry(0.05,0.18,12),O,[0,1.05,0.26],[1,1,1],[PI/2,0,0],0.006);
  const fl=[];for(const s of [-1,1]){const f=new THREE.Group();f.position.set(s*0.33,0.75,0);body.add(f);part(f,SPH,B,[s*0.04,-0.22,0],[0.06,0.28,0.14],[0,0,s*0.15],0.01);fl.push(f)}
  const ft=[];for(const s of [-1,1]){const f=new THREE.Group();f.position.set(s*0.13,0.04,0.08);p.add(f);part(f,SPH,O,[0,0,0.06],[0.1,0.04,0.15],[0,0,0],0.008);ft.push(f)}
  return {p,body,fl,ft,waddle(t,sp=6,a=1){body.rotation.z=0.12*a*Math.sin(t*sp);ft[0].position.y=0.04+0.05*a*Math.max(0,Math.sin(t*sp));ft[1].position.y=0.04+0.05*a*Math.max(0,-Math.sin(t*sp));fl[0].rotation.z=-0.2*a*Math.abs(Math.sin(t*sp));fl[1].rotation.z=0.2*a*Math.abs(Math.sin(t*sp))},
    flap(t,a){fl[0].rotation.z=-a*(0.8+0.4*Math.sin(t*18));fl[1].rotation.z=a*(0.8+0.4*Math.sin(t*18))},reset(){body.rotation.set(0,0,0);body.position.set(0,0,0);ft.forEach((f,i)=>f.position.y=0.04);fl.forEach(f=>f.rotation.z=0)}}}
const PG=makePenguin();IC.S.add(PG.p);const COL=[];for(let i=0;i<7;i++){const q=makePenguin();IC.S.add(q.p);q.p.visible=false;COL.push(q)}
function iceShot(p,l){IC.cam.position.set(...p);IC.cam.lookAt(...l);setBG('linear-gradient(#7CC4FF 0%,#BFE3FF 55%,#F2FAFF 100%)');r.setClearColor(0,0);r.render(IC.S,IC.cam)}
function snow(t){g.save();g.fillStyle='rgba(255,255,255,0.9)';for(let i=0;i<70;i++){const x=(hash(i*3.7)*W+Math.sin(t*0.8+i)*30+W)%W,y=((hash(i*9.1)*H+t*(80+hash(i)*90))%H);g.beginPath();g.arc(x,y,3+hash(i*2)*5,0,7);g.fill()}g.restore()}
function colony(on){COL.forEach((q,i)=>{q.p.visible=on;q.p.position.set(-4.5+i*1.4+hash(i)*0.4,0,-2.5-hash(i*3)*3);q.p.rotation.y=(hash(i*5)-0.5)*1.2;q.p.scale.setScalar(0.9+hash(i*7)*0.25)})}
// 2D penguin (thermal + diagrams)
function penguin2D(x,y,s,thermal,t){g.save();g.translate(x,y);g.scale(s,s);const gr=g.createLinearGradient(0,-300,0,300);if(thermal){gr.addColorStop(0,'#FFE14D');gr.addColorStop(0.35,'#FF6A2B');gr.addColorStop(0.7,'#D0283A');gr.addColorStop(0.86,'#6A3DFF');gr.addColorStop(1,'#2A7BFF')}else{gr.addColorStop(0,'#1E2433');gr.addColorStop(1,'#1E2433')}
  g.fillStyle=gr;g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(0,-170,95,90,0,0,7);g.fill();g.stroke();g.beginPath();g.ellipse(0,40,170,230,0,0,7);g.fill();g.stroke();
  g.beginPath();g.ellipse(-185,10,40,130,0.25,0,7);g.fill();g.stroke();g.beginPath();g.ellipse(185,10,40,130,-0.25,0,7);g.fill();g.stroke();
  g.fillStyle=thermal?'#2A7BFF':'#FF9A2E';for(const sx of [-1,1]){g.beginPath();g.ellipse(sx*65,275,70,24,0,0,7);g.fill();g.stroke()}
  g.fillStyle=thermal?'#FFE14D':'#FF9A2E';g.beginPath();g.moveTo(70,-175);g.lineTo(140,-160);g.lineTo(70,-145);g.closePath();g.fill();g.stroke();g.restore()}
function vessels(x,y,h,t,showVein,heat){g.save();const top=y-h/2,bot=y+h/2;
  for(const [vx,col,dir] of [[x-70,'#E8394A',1],[x+70,'#3F7BFF',-1]]){if(dir<0&&!showVein)continue;g.fillStyle='rgba(255,255,255,0.12)';rr(vx-46,top,92,h,46);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke();
    g.save();rr(vx-40,top+6,80,h-12,40);g.clip();for(let i=0;i<14;i++){const k=(((i/14)+dir*t*0.35)%1+1)%1;const yy=top+k*h;const warm=dir>0?1-k*0.85:0.15+(1-k)*0.85*(heat?1:0.2);
      const c=dir>0?`rgb(${Math.round(lerp(120,240,warm))},${Math.round(lerp(80,57,warm))},${Math.round(lerp(255,74,warm))})`:`rgb(${Math.round(lerp(63,230,warm*0.8))},${Math.round(lerp(123,70,warm*0.5))},${Math.round(lerp(255,120,warm))})`;
      g.fillStyle=c;g.beginPath();g.ellipse(vx,yy,26,18,0,0,7);g.fill();g.strokeStyle='rgba(0,0,0,0.5)';g.lineWidth=4;g.stroke()}g.restore()}
  if(heat>0){for(let i=0;i<5;i++){const yy=top+h*(0.15+i*0.17);const k=((t*1.5+i*0.2)%1);g.save();g.globalAlpha=heat*(1-k*0.3);arrow(x-30+k*10,yy,x+30+k*10,yy,'#FFB000',14);g.restore()}}
  g.restore()}
function cellChar(x,y,R,col,face='smile'){g.save();g.translate(x,y);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.25)';g.beginPath();g.arc(0,0,R*0.55,0,7);g.fill();
  g.fillStyle='#111';for(const s of [-1,1]){g.beginPath();g.arc(s*R*0.3,-R*0.15,R*0.1,0,7);g.fill()}g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.arc(0,R*0.1,R*0.3,0.2,PI-0.2);g.stroke();g.restore()}
function flame(x,y,s,t){g.save();g.translate(x,y);g.scale(s*(1+0.06*Math.sin(t*20)),s);g.fillStyle='#FF6A2B';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,-70);g.bezierCurveTo(40,-30,50,10,0,40);g.bezierCurveTo(-50,10,-40,-30,0,-70);g.fill();g.stroke();
  g.fillStyle='#FFE14D';g.beginPath();g.moveTo(0,-30);g.bezierCurveTo(20,-10,22,15,0,30);g.bezierCurveTo(-22,15,-20,-10,0,-30);g.fill();g.restore()}
function thermo(x,y,s,f,label){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;rr(-28,-220,56,240,28);g.fill();g.stroke();g.beginPath();g.arc(0,40,50,0,7);g.fill();g.stroke();
  g.fillStyle='#3FA8FF';g.beginPath();g.arc(0,40,38,0,7);g.fill();const hh=190*f;g.fillRect(-14,20-hh,28,hh);g.strokeStyle='#111';g.lineWidth=4;for(let i=0;i<6;i++){g.beginPath();g.moveTo(28,-190+i*36);g.lineTo(10,-190+i*36);g.stroke()}g.restore()}
function battery(x,y,w,h,f){g.save();g.fillStyle='rgba(10,12,25,0.85)';g.strokeStyle='#111';g.lineWidth=10;rr(x-w/2,y-h/2,w,h,24);g.fill();g.stroke();g.fillStyle='#111';rr(x+w/2,y-h*0.2,26,h*0.4,8);g.fill();
  g.fillStyle='#5BE37A';const n=Math.round(5*f);for(let i=0;i<n;i++)g.fillRect(x-w/2+18+i*(w-36)/5,y-h/2+18,(w-36)/5-12,h-36);g.restore()}
// ---- scenes ----
const P0=[0.5,1.7,9.0],L0=[0.4,1.15,0];
function openScene(t){colony(false);PG.reset();PG.p.visible=true;PG.p.position.set(1.15,0,0.5);PG.p.rotation.set(0,-0.5,0);PG.p.scale.setScalar(1.1);PG.waddle(t,2*PI/1.0,0.5);
  IC.S.add(holder);holder.position.set(-0.3,0,0);holder.rotation.set(0,0.35,0);holder.scale.setScalar(1);
  guy.pose({armL:[0.45,-0.2],armR:[0.45,-0.2],bendL:1.3,bendR:1.3,blink:BLINK(t),mouth:'teeth',teethGap:0.2,jump:0.006*Math.sin(t*2*PI*10),headRoll:0.03*Math.sin(t*2*PI*5),look:0.6,headYaw:0.25})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();PG.p.visible=true;holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));iceShot(mix(P0,[0.5,1.6,8.0],k),L0);snow(t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt("WHY DON'T PENGUINS'",W/2,200,74,{sw:16});txt('FEET FREEZE',W/2,305,118,{fill:'#7FD3FF',sw:24});txt('ON THE ICE?',W/2,420,100,{fill:'#FFD23F',sw:22});g.restore();
    comic('BRRR!',W*0.27,1650,100,t,1.4,{life:1.3,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('radial-gradient(circle at 50% 45%,#141032,#05040F 80%)');flash(t,CU.c1,0.15);
    penguin2D(W/2,860,1.35,true,t);g.save();g.strokeStyle='#fff';g.lineWidth=8;for(const [x,y,sx,sy] of [[90,180,1,1],[W-90,180,-1,1],[90,1720,1,-1],[W-90,1720,-1,-1]]){g.beginPath();g.moveTo(x,y+sy*80);g.lineTo(x,y);g.lineTo(x+sx*80,y);g.stroke()}g.restore();
    if(Math.sin(t*6)>0){g.fillStyle='#FF2A2A';g.beginPath();g.arc(150,250,18,0,7);g.fill()}txt('THERMAL CAM',330,250,44,{stroke:0,fill:'#fff'});
    const gb=g.createLinearGradient(0,500,0,1250);gb.addColorStop(0,'#FFE14D');gb.addColorStop(0.5,'#D0283A');gb.addColorStop(1,'#2A7BFF');g.fillStyle=gb;rr(W-150,500,50,750,25);g.fill();txt('WARM',W-125,460,30,{stroke:0});txt('COLD',W-125,1290,30,{stroke:0});
    pill('BUILT-IN HEAT SWAP',W/2,1660,58,'#FFB000','#111',t,3.9,CU.c2)}
  else if(t<CU.c3){clear3d();setBG('radial-gradient(circle at 50% 40%,#3A1A4A,#12081E 80%)');flash(t,CU.c2,0.15);
    penguin2D(W*0.5,330,0.55,false,t);g.save();g.strokeStyle='#FFD23F';g.lineWidth=8;g.setLineDash([16,12]);g.beginPath();g.moveTo(W*0.5-36,480);g.lineTo(W/2-150,560);g.moveTo(W*0.5-36,480);g.lineTo(W/2+150,560);g.stroke();g.restore();
    vessels(W/2,940,720,t,t>6.9,0);
    if(t>5.5){txtA('WARM ↓',W/2-250,760,52,seg(t,5.5,5.8),{fill:'#FF6A6A',sw:12});txtA('38°C',W/2-250,830,44,seg(t,5.6,5.9),{fill:'#fff',sw:10})}
    if(t>7.9){txtA('COLD ↑',W/2+250,1100,52,seg(t,7.9,8.2),{fill:'#7FB0FF',sw:12})}
    pill('SIDE BY SIDE',W/2,1660,56,'#FFFFFF','#111',t,7.2,CU.c3);comic('WHOOSH',W*0.78,600,70,t,6.1,{life:0.8,rot:0.1,fill:'#FF6A6A'})}
  else if(t<CU.c4){clear3d();setBG('radial-gradient(circle at 50% 50%,#5A1830,#1A0610 80%)');flash(t,CU.c3,0.15);
    vessels(W/2,700,560,t*0.6,true,easeOut(seg(t,9.9,10.4)));
    const k=seg(t,10.2,11.2);const fx=lerp(W/2-170,W/2+170,ease(k)),fy=1150-Math.sin(k*PI)*90;cellChar(W/2-200,1220,95,'#E8394A');cellChar(W/2+200,1220,95,'#5C8BFF');flame(fx,fy,1.2,t);
    pill('HANDS OVER ITS HEAT',W/2,300,56,'#FFB000','#111',t,9.9,CU.c4);comic('HERE YOU GO!',W*0.5,1650,72,t,10.3,{life:1.0,rot:-0.05,fill:'#FFD23F'})}
  else if(t<CU.c5){colony(false);PG.reset();PG.p.position.set(0.4,0,0.6);PG.p.rotation.set(0,-0.3,0);PG.p.scale.setScalar(1.1);PG.waddle(t,4,0.25);
    IC.S.add(holder);holder.position.set(-0.9,0,-0.6);holder.rotation.set(0,0.45,0);guy.pose(idle(t,{headPitch:0.35,lookY:-1,look:0.5,headYaw:0.3,mouth:'o',mouthSize:0.6,armL:[0.25,0],armR:[0.6,-0.4],bendR:1.2}));
    iceShot(mix([2.2,0.9,4.6],[1.9,0.8,4.0],seg(t,CU.c4,CU.c5)),[0.1,0.2,0.3]);snow(t);flash(t,CU.c4,0.15);
    const a=pop(t,13.2);g.save();g.translate(W*0.82,620);g.scale(a,a);thermo(0,0,1.2,0.18*seg(t,13.2,14.2),'');g.restore();
    pill('JUST ABOVE 0°C',W/2,300,62,'#7FD3FF','#111',t,13.6,CU.c5);comic('TOES!',W*0.3,640,90,t,13.0,{life:0.8,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c6){colony(true);PG.reset();PG.p.position.set(1.2,0,0.6);PG.p.rotation.set(0,-0.6,0);PG.p.scale.setScalar(1.05);COL.forEach((q,i)=>q.waddle(t+i,3,0.15));
    IC.S.add(holder);holder.position.set(-0.6,0,0.8);holder.rotation.set(0,0.4,0);guy.pose(idle(t,{armL:[2.5,0.3],bendL:0.3,mouth:'grin'}));
    iceShot(mix([2.5,3.2,11.5],[2.0,3.0,10.5],seg(t,CU.c5,CU.c6)),[0,1.0,-0.8]);snow(t);flash(t,CU.c5,0.15);
    battery(W/2,360,420,170,easeOut(seg(t,15.4,16.4)));pill('ENERGY SAVED',W/2,530,54,'#5BE37A','#111',t,15.4,CU.c6)}
  else if(t<CU.c7){colony(false);PG.reset();const k=seg(t,CU.c6,18.9);PG.p.position.set(lerp(-4,4,k),0.3,1.2);PG.p.rotation.set(0,PI/2,0);PG.body.rotation.x=PI/2-0.15;PG.body.position.set(0,0.0,0);PG.flap(t,0.5);
    IC.S.add(holder);holder.position.set(0.2,0,-0.6);holder.rotation.set(0,0.1,0);const wv=Math.sin(t*10);guy.pose({armL:[0.3,0],armR:[2.6,0],bendR:0.5+0.3*wv,mouth:'grin',blink:BLINK(t),look:lerp(-0.8,0.8,k),headYaw:lerp(-0.4,0.4,k)});
    iceShot([0.4,1.2,7.2],[0.2,0.9,0]);snow(t);flash(t,CU.c6,0.15);
    pill('NEVER FREEZES',W/2,300,62,'#FFFFFF','#111',t,17.0,CU.c7);if(t>17.3)check(W*0.15,300,1.1*pop(t,17.3));comic('WHEEE!',W*0.5,1650,110,t,17.1,{life:1.0,rot:0.08,fill:'#7FD3FF'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c7,TT-0.1));iceShot(mix([0.9,1.9,10.2],P0,k),L0);snow(tt);flash(t,CU.c7,0.15)}
  vignette();captions(t)};

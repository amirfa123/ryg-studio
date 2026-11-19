// ===== Chapter 1: ramp jump (global 29.4 - 66.64) =====
const T0=29.4,TT=37.24;
const SUNSET='radial-gradient(circle at 72% 58%,#FFF0A0 0,#FFD27A 5%,rgba(255,180,107,0) 12%),'+BGS.sunset;
function flatArc(x,xa,xb,ya,peak){// from (xa,ya) to (xb,0)
  const k=clamp((x-xa)/(xb-xa));const y=lerp(ya,0,k)+peak*4*k*(1-k);const dy=-ya+peak*4*(1-2*k);return [y,Math.atan2(dy,xb-xa)*0.9]}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<2.3){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,6,40);const x=-14+t*5;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(t*10);driver(C.car,t);
    C.shot([x+3,2.2,10],[x+3,1.2,0]);chapterCard(t,0.05,2.25,1,'THE RAMP JUMP');flash(t,0,0.2)}
  else if(t<7.0){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,-6,20);R.ld.visible=false;const u=t-2.3;const x=-20+u*18;
    let y=0,rz=0;if(x>=-9&&x<-3){const [a,b,c]=jumpPose(-6,20,x);y=b;rz=c}else if(x>=-3&&x<44){[y,rz]=flatArc(x,-3,44,1.6,10)}else if(x>=44){const k=x-44;y=Math.abs(Math.sin(k*1.2))*0.4*Math.exp(-k*0.5);rz=0}
    C.car.c.position.set(x,y,1.6);C.car.c.rotation.set(0,0,rz);C.car.spin(t*24);driver(C.car,t,{mouth:x>-3&&x<44?'o':'grin',wide:x>-3&&x<44,mouthSize:1.3});
    C.shot([x-6,3+y*0.6,20+y*0.4],[x+3,1.5+y*0.7,0]);pill('IN GTA',W/2,110,56,'#FF3DA6','#fff',t,2.4,6.95);comic('WHEEE!',W*0.62,H*0.3,110,t,3.9,{life:1.4,rot:-0.08});comic('DRIVE AWAY!',W*0.5,H*0.3,100,t,6.0,{life:1.3,rot:0.05,fill:'#5BE37A'});flash(t,2.3,0.2)}
  else if(t<12.2){clear3d();setBG('blue');txtA('HOW FAR CAN A',W/2,H*0.2,64,easeOut(seg(t,7.05,7.4)),{});txtA('REAL CAR FLY?',W/2,H*0.31,104,easeOut(seg(t,7.3,7.7)),{fill:'#FFD23F',sw:20});
    const gy=H*0.72;g.save();g.fillStyle='#2E2B40';g.fillRect(0,gy,W,H-gy);g.restore();g.save();g.fillStyle='#F2B33D';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(120,gy);g.lineTo(330,gy);g.lineTo(330,gy-70);g.closePath();g.fill();g.stroke();g.restore();
    car2D(300,gy-92,-0.32,1.0);g.save();g.setLineDash([16,16]);g.strokeStyle='rgba(255,255,255,0.7)';g.lineWidth=8;g.beginPath();g.moveTo(340,gy-90);g.quadraticCurveTo(900,gy-460,1700,gy);g.stroke();g.restore();
    txtA('?',1180,gy-120,200,pop(t,8.3),{fill:'#fff',sw:28});txtA('TAKE A GUESS!',W*0.62,H*0.48,70,pop(t,9.7),{fill:'#3FF0FF',sw:14});
    if(t>10.2){const n=3-Math.floor((t-10.2)/0.66);if(n>0){const ph=((t-10.2)%0.66)/0.66;txtA(String(n),W*0.86,H*0.48,180*(1.2-0.2*ph),1-ph*0.6,{fill:'#FFD23F',sw:26})}}flash(t,7.0,0.2)}
  else if(t<18.5){clear3d();setBG('#2A6FBF');const gy=H*0.74;const k=ease(seg(t,12.6,15.6));const X0=200,X1=1720;
    field2D(X0+60,gy+18,X1-X0-60,110,easeOut(seg(t,16.4,16.9)));g.save();g.fillStyle='rgba(20,20,40,0.6)';g.fillRect(0,gy,W,18);g.restore();
    g.save();g.fillStyle='#F2B33D';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(X0-140,gy);g.lineTo(X0+60,gy);g.lineTo(X0+60,gy-60);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(X1-80,gy-70);g.lineTo(X1-80,gy);g.lineTo(X1+120,gy);g.closePath();g.fill();g.stroke();g.restore();
    const px=lerp(X0+60,X1-40,k),py=gy-60-(-60*k)-340*4*k*(1-k);g.save();g.setLineDash([12,14]);g.strokeStyle='rgba(255,255,255,0.6)';g.lineWidth=6;g.beginPath();for(let i=0;i<=40;i++){const kk=k*i/40;const xx=lerp(X0+60,X1-40,kk),yy=gy-60+60*kk-340*4*kk*(1-kk);i?g.lineTo(xx,yy):g.moveTo(xx,yy)}g.stroke();g.restore();
    car2D(px,py-28,Math.atan2(60-340*4*(1-2*k),X1-X0-100),1.1,'#FFB33D');panel(W*0.18,H*0.14,460,140);txt(Math.round(101*k)+' m',W*0.18,H*0.14+6,100,{fill:'#FFD23F',stroke:0});
    pill('2011 RECORD JUMP',W*0.18,H*0.27,46,'#fff','#111',t,12.4,18.45);comic('A WHOLE FOOTBALL FIELD!',W/2,H*0.52,84,t,16.6,{life:1.9,rot:-0.03,fill:'#5BE37A'});flash(t,12.2,0.2)}
  else if(t<22.2){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,-6,20);R.ld.visible=false;const x=10+(t-18.5)*1.2;const [y,rz]=flatArc(x,-3,44,1.6,10);
    C.car.c.position.set(x,y,1.6);C.car.c.rotation.set(0,0,rz);C.car.spin(t*4);driver(C.car,t,{mouth:t>20.2?'o':'grin',wide:t>20.2,mouthSize:1.4});C.shot([x+2,y+1.2,7.5],[x,y+0.9,1.6]);
    pill('FLYING = EASY',W/2,110,56,'#5BE37A','#111',t,18.6,20.2);pill('LANDING = THE PROBLEM',W/2,110,56,'#FF4A4A','#fff',t,20.25,22.15);comic('SLOW-MO',W*0.18,H*0.3,70,t,18.7,{life:3.3,rot:-0.1,fill:'#3FF0FF'});flash(t,18.5,0.2)}
  else if(t<26.5){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;if(C.ramps)C.ramps.gp.visible=false;const ti=24.0;let x,y,rz=0;
    if(t<ti){const k=seg(t,22.2,ti);x=lerp(-6,8,k);y=lerp(7,0,k*k);rz=-0.25*k}else{x=8+0.4*easeOut(seg(t,ti,ti+0.3));y=Math.max(0,0.25*Math.sin((t-ti)*14)*Math.exp(-(t-ti)*6));rz=0.05*Math.sin((t-ti)*20)*Math.exp(-(t-ti)*4)}
    C.car.c.position.set(x,y,1.6);C.car.c.rotation.set(0,0,rz);C.car.spin(t<ti?t*20:0);driver(C.car,t,{mouth:'o',wide:true,mouthSize:t>ti?1.7:1.2,headPitch:t>ti?0.2:0});
    const [sx,sy]=shake(t,ti,0.35,0.7);C.shot([4+sx,3.4+sy,19],[x*0.4+3+sx,y*0.75+1.4+sy,0]);pill('FLAT GROUND',W/2,110,56,'#fff','#111',t,22.3,26.45);
    if(t>ti){comic('CRUNCH!',W*0.5,H*0.33,140,t,ti,{life:1.4,rot:-0.08,fill:'#FF4A4A'});pill('SPEED STOPS INSTANTLY',W/2,H*0.62,46,'#FF4A4A','#fff',t,ti+0.9,26.45)}flash(t,ti,0.15);flash(t,22.2,0.2)}
  else if(t<31.5){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,-6,20);const u=t-26.5;const x=-14+u*9;const [px,py,pr]=jumpPose(-6,20,x,5);
    C.car.c.position.set(px,py,1.6);C.car.c.rotation.set(0,0,pr);C.car.spin(t*18);driver(C.car,t,{mouth:'grin'});const cx=clamp(px+5,-2,16);C.shot([cx,5.2,25],[cx,3.0,0]);
    pill('REAL STUNT DRIVERS',W/2,110,54,'#FFD23F','#111',t,26.6,31.45);if(t>29.0&&t<31.2){const p=proj(new THREE.Vector3(20,2.2,1.6),C.cam);pill('LANDING RAMP',p[0],p[1]-110,40,'#3FF0FF','#111',t,29.0,31.15);arrow(p[0],p[1]-80,p[0],p[1]-10,'#3FF0FF',18)}
    comic('GENTLE!',W*0.3,H*0.4,100,t,30.0,{life:1.4,rot:0.06,fill:'#5BE37A'});flash(t,26.5,0.2)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,-6,20);C.car.c.position.set(28,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(0);
    putGuy(C.S,24.6,0.0,2.9,0.4);guy.pose(t>32.6?{...idle(t),mouth:'grin',armL:[2.5,0],armR:[2.5,0],jump:Math.abs(Math.sin((t-32.6)*5))*0.15}:idle(t,{mouth:'smile'}));C.shot([27.2,2.5,14],[27.4,1.4,1.8]);
    verdict(t,32.2,true,'SURVIVABLE*',W*0.64);txtA('*WITH A PERFECT LANDING RAMP',W*0.64,H*0.62,44,easeOut(seg(t,33.6,34.0)),{fill:'#fff',sw:10});hpBar(W*0.06,H*0.1,380,0.85);flash(t,31.5,0.2)}
  vignette();cap16(t+T0)};

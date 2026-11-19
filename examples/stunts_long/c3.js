// ===== Chapter 3: bail out (global 105.02 - 131.84) =====
const T0=105.02,TT=26.82;
function cityMat(C){if(C.mat)return C.mat;const m=new THREE.Group();C.S.add(m);part(m,new THREE.BoxGeometry(4,0.5,2.4),toon(0x2E86DE),[0,0.25,0],[1,1,1],[0,0,0],0.03);part(m,new THREE.BoxGeometry(4.02,0.07,2.42),toon(0xFFD23F),[0,0.4,0],[1,1,1],[0,0,0],0);C.mat=m;return m}
function rolling(x0,x1,k){return {x:lerp(x0,x1,easeOut(k)),rz:-PI*2*2*easeOut(k)}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();guy.outfit(t>=19.2&&t<23.6?{hardhat:1}:{snapback:1,chain:1,shades:1});
  const C=scene('city');if(C.ramps)C.ramps.gp.visible=false;C.cop.c.visible=false;if(C.mat)C.mat.visible=false;
  if(t<2.9){C.mood('night');const x=-10+t*8;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(t*18);driver(C.car,t,{mouth:'grin'});C.shot([x+5,1.8,9],[x+1,1.1,1.6]);
    chapterCard(t,0.05,2.85,3,'JUMPING OUT OF A MOVING CAR');flash(t,0,0.2)}
  else if(t<5.6){C.mood('night');const u=t-2.9;const x=-4+u*9;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(t*18);const tj=3.4,tg=3.9,tu=4.9;
    if(t<tj){driver(C.car,t,{mouth:'grin'})}
    else{C.S.add(holder);holder.scale.setScalar(1);let gx,gy,gz,o;const xj=-4+(tj-2.9)*9;
      if(t<tg){const k=seg(t,tj,tg);gx=xj+k*3.5;gy=0.4+0.8*Math.sin(PI*k);gz=lerp(1.6,3.4,k);o={armL:[2.3,0],armR:[2.3,0],legL:[0.6,0.6,0],legR:[-0.3,0.6,0],mouth:'grin'};holder.rotation.set(0,PI/2,0)}
      else if(t<tu){const k=seg(t,tg,tu);const r=rolling(xj+3.5,xj+7.5,k);rollAt(C.S,r.x,0.1,3.4,r.rz);guy.pose(CURL);gx=null}
      else{gx=xj+7.5;gy=0;gz=3.4;o=idle(t,{mouth:'grin',armL:[2.4,0.3],armR:[0.4,0]});holder.rotation.set(0,0.4,0)}
      if(gx!==null){holder.position.set(gx,gy,gz);guy.pose(o)}}
    C.shot([6,2.8,17],[6,1.3,2]);pill('IN GTA',W/2,110,56,'#FF3DA6','#fff',t,3.0,5.55);comic('COOL!',W*0.7,H*0.35,110,t,4.95,{life:0.7,rot:0.08,fill:'#3FF0FF'});flash(t,2.9,0.2)}
  else if(t<7.8){C.mood('night');C.car.c.position.set(1.5,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(0);C.S.add(holder);holder.scale.setScalar(1);holder.position.set(1.0,1.5,3.9);holder.rotation.set(0,PI/2,0);
    guy.pose({armL:[2.3,0],armR:[2.3,0],legL:[0.6,0.6,0],legR:[-0.3,0.6,0],mouth:'o',mouthSize:0.8,blink:false});const a=(t-5.6)*0.35;C.shot([1.2+Math.sin(a)*10,2.2,3.0+Math.cos(a)*10],[1.0,1.9,3.0]);
    g.fillStyle='rgba(20,30,80,0.25)';g.fillRect(0,0,W,H);txtA('BUT THINK ABOUT IT...',W/2,H*0.18,80,easeOut(seg(t,5.7,6.1)),{fill:'#FFD23F',sw:16});pill('PAUSED',W*0.88,H*0.08,40,'#fff','#111',t,5.65,7.75);flash(t,5.6,0.2)}
  else if(t<13.0){clear3d();setBG('blue');const gy=H*0.7;g.fillStyle='#3A3850';g.fillRect(0,gy,W,H-gy);for(let i=0;i<14;i++){const xx=((i*180-(t*900))%(W+200)+W+200)%(W+200)-100;g.fillStyle='#FFD23F';g.fillRect(xx,gy+60,90,10)}
    const lv=t>10.0;car2D(W*0.36,gy-30,0,2.0);if(lv){const k=seg(t,10.0,11.0);stickFig(W*0.36+60+k*140,gy-60-60*Math.sin(PI*clamp(k)),1.5,k*2)}
    for(let i=0;i<4;i++){g.strokeStyle='rgba(255,255,255,0.7)';g.lineWidth=6;g.beginPath();g.moveTo(W*0.36-160-i*30,gy-60+i*14);g.lineTo(W*0.36-240-i*30,gy-60+i*14);g.stroke()}
    speedo(W*0.78,H*0.36,150,100*clamp(seg(t,7.9,9.0)),160,'KM/H','CAR');if(lv){pill('YOUR BODY: 100 KM/H TOO',W*0.42,H*0.2,52,'#FF4A4A','#fff',t,10.4,12.95);arrow(W*0.36+250,gy-160,W*0.36+520,gy-160,'#FF4A4A',22)}flash(t,7.8,0.2)}
  else if(t<19.2){clear3d();setBG('red');const x=W*0.16,yb=H*0.92,fw=170,fh=52;floorCut(x,yb,fw,fh,13,'#B59CFF');const a=easeOut(seg(t,13.1,13.5));
    const fy=lerp(yb-13*fh-10,yb-10,clamp(Math.pow(seg(t,13.6,15.4),2)));stickFig(x+fw+90,fy,1.1,t>13.6?t*3:0);arrow(x+fw+190,yb-13*fh+30,x+fw+190,yb-30,'#FFD23F',16);
    panel(W*0.66,H*0.32,900,300);txtA('HITTING THE ROAD AT 100 KM/H',W*0.66,H*0.25,48,a,{});txtA('= FALLING 13 STORIES',W*0.66,H*0.36,80,easeOut(seg(t,14.3,14.7)),{fill:'#FFD23F',sw:16});
    if(t>16.7){const b=easeOut(seg(t,16.7,17.1));g.save();g.globalAlpha=b;g.fillStyle='#3A3850';g.strokeStyle='#111';g.lineWidth=6;rr(W*0.42,H*0.6,900,140,20);g.fill();g.stroke();g.strokeStyle='#C9CDD6';g.lineWidth=4;for(let i=0;i<20;i++){const xx=W*0.44+hash(i)*840,yy=H*0.62+hash(i*3)*100;g.beginPath();g.moveTo(xx,yy);g.lineTo(xx+60,yy+4);g.stroke()}g.restore();
      txtA('+ SLIDING ON ROUGH ASPHALT',W*0.66,H*0.6+70,52,b,{fill:'#fff',sw:12});comic('OUCH',W*0.88,H*0.55,90,t,17.9,{life:1.2,rot:0.1,fill:'#FF4A4A'})}flash(t,13.0,0.2)}
  else if(t<23.6){C.mood('sunset');const m=cityMat(C);m.visible=true;m.position.set(2.6,0.18,3.6);const x=-1.2+(t-19.2)*0.35;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(t*1.5);
    const tj=21.4;if(t<tj)driver(C.car,t,{mouth:'smile'});else{C.S.add(holder);holder.scale.setScalar(1);const k=seg(t,tj,tj+0.6);holder.position.set(lerp(x-0.35,2.4,k),lerp(0.6,0.68,k)+0.5*Math.sin(PI*k),lerp(1.6,3.6,k));holder.rotation.set(0,0.6,0);
      guy.pose(k<1?{armL:[1.8,0],armR:[1.8,0],legL:[0.5,0.5,0],legR:[0.2,0.5,0],mouth:'grin'}:{...SIT,sitY:-0.3,armL:[2.2,0],armR:[2.2,0],mouth:'grin',blink:BLINK(t)})}
    C.shot([1.5,2.4,11.5],[1.2,1.0,2.6]);pill('MOVIE STUNT DOUBLES',W/2,110,54,'#FFD23F','#111',t,19.3,23.55);
    pill('AT A CRAWL',W*0.26,H*0.22,46,'#fff','#111',t,20.6,23.55);if(t>20.6)speedo(W*0.08,H*0.24,80,5,160,'KM/H');pill('PADDING',W*0.8,H*0.3,46,'#fff','#111',t,21.5,23.55);pill('SOFT MATS',W*0.8,H*0.42,46,'#3FF0FF','#111',t,22.2,23.55);flash(t,19.2,0.2)}
  else{C.mood('night');C.car.c.position.set(4.5,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(0);putGuy(C.S,-2.4,0.18,-3.1,0.3);guy.pose(idle(t,{mouth:'o',mouthSize:0.5,headYaw:0.45*Math.sin(t*7),armL:[0.4,0],armR:[0.4,0]}));
    C.shot([-0.6,1.9,8],[-0.6,1.3,-3]);verdict(t,24.4,false,'NO WAY',W*0.64);flash(t,23.6,0.2)}
  vignette();cap16(t+T0)};

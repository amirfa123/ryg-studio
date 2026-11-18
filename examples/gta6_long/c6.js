// ===== Chapter 6: the cops (global 142.6 - 176.2) =====
const T0=142.6,TT=33.6;
function heli(C){if(C.heli)return C.heli;const h=new THREE.Group();C.S.add(h);const B=toon(0x1E2A44),Wt=toon(0xF2F2F2);part(h,SPH,B,[0,0,0],[1.2,0.75,0.75],[0,0,0],0.02);part(h,SPH,new THREE.MeshToonMaterial({color:0x7FD3FF,transparent:true,opacity:0.7,gradientMap:GM}),[0.75,0.1,0],[0.5,0.45,0.55],[0,0,0],0.01);
  part(h,cap(0.12,2.2),B,[-2.0,0.15,0],[1,1,1],[0,0,PI/2],0.012);part(h,new THREE.BoxGeometry(0.1,0.7,0.5),Wt,[-3.1,0.4,0],[1,1,1],[0,0,0],0.01);for(const z of [-0.55,0.55])part(h,cap(0.04,1.6),toon(0x2A2A35),[0,-0.85,z],[1,1,1],[0,0,PI/2]);
  const rot=new THREE.Group();rot.position.set(0,0.85,0);h.add(rot);part(rot,new THREE.BoxGeometry(5.2,0.04,0.25),toon(0x2A2A35),[0,0,0],[1,1,1],[0,0,0],0.006);part(rot,new THREE.BoxGeometry(0.25,0.04,5.2),toon(0x2A2A35),[0,0,0],[1,1,1],[0,0,0],0.006);
  const lr=basic(0xFF2A2A);part(h,SPH,lr,[0,-0.7,0],[0.12,0.08,0.12],[0,0,0],0);
  const cone=new THREE.Mesh(new THREE.ConeGeometry(2.2,9,32,1,true),new THREE.MeshBasicMaterial({color:0xFFF6B0,transparent:true,opacity:0.22,depthWrite:false,side:THREE.DoubleSide}));cone.position.set(0,-4.8,0);h.add(cone);
  C.heli={h,rot,lr};return C.heli}
function sirenPip(x,y,s,on,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#22222C';g.strokeStyle='#111';g.lineWidth=6;rr(-46,10,92,26,8);g.fill();g.stroke();const c=on?((t*6+x)%2<1?'#FF2A2A':'#2A6BFF'):'#4A4D58';g.fillStyle=c;g.beginPath();g.arc(0,10,40,PI,0);g.closePath();g.fill();g.stroke();if(on){g.fillStyle='rgba(255,255,255,0.6)';g.beginPath();g.arc(-12,-6,10,0,7);g.fill()}g.restore()}
function poofs(t,t0,x,y){const d=t-t0;if(d<0||d>0.6)return;for(let i=0;i<10;i++){const a=i/10*PI*2;g.fillStyle=`rgba(255,255,255,${0.9*(1-d/0.6)})`;g.beginPath();g.arc(x+Math.cos(a)*d*260,y+Math.sin(a)*d*200,40*(1-d/0.8),0,7);g.fill()}}
function copLights(C,t){const on=(t*4%1)<0.5;C.copR.color.set(on?0xFF2A2A:0x551010);C.copB.color.set(on?0x1A2A55:0x2A6BFF);g.fillStyle=on?'rgba(255,40,40,0.10)':'rgba(40,90,255,0.10)';g.fillRect(0,0,W,H)}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();guy.outfit({snapback:1,chain:1,shades:1});
  if(t<2.3){const C=scene('city');C.mood('night');C.car.c.position.set(-30,0,-1.2);C.cop.c.visible=true;C.cop.c.position.set(3.5,0,-1.0);C.cop.c.rotation.y=0;C.cop.spin(0);putGuy(C.S,0,0.18,-3.3,0.3);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,look:0.8,headYaw:0.4}));
    C.shot([1.5,2.0,8.5],[1.5,1.4,-2.5]);copLights(C,t);chapterCard(t,0.05,2.25,5,'THE COPS');flash(t,0,0.2)}
  else if(t<6.9){const C=scene('city');C.mood('night');C.car.c.position.set(-30,0,-1.2);const there=t>4.3;C.cop.c.visible=there;C.cop.c.position.set(2.6,0,-1.0);C.cop.c.rotation.y=PI;C.cop.spin(0);putGuy(C.S,-1.5,0.18,-3.3,0.2);
    guy.pose(idle(t,{mouth:there?'o':'smile',wide:there,mouthSize:1.4,headYaw:there?-0.5:0}));C.shot([-0.5,2.2,9.5],[0.3,1.3,-2.5]);if(there)copLights(C,t);const pp=proj(new THREE.Vector3(2.6,1,-1),C.cam);poofs(t,4.3,pp[0],pp[1]);
    pill('OLDER GAMES',W/2,110,56,'#9AA0AA','#111',t,2.4,6.85);comic('THEY JUST KNEW?!',W*0.5,H*0.28,80,t,4.4,{life:1.3,rot:0.04,fill:'#fff'});
    if(t>5.7){const a=pop(t,5.7,0.25);g.save();g.translate(W/2,H*0.5);g.rotate(-0.12);g.scale(1.6-0.6*a,1.6-0.6*a);g.globalAlpha=clamp(a);g.strokeStyle='#FF4A4A';g.lineWidth=14;rr(-330,-80,660,160,20);g.stroke();g.restore();txtA('NOT ANYMORE',W/2,H*0.5,100,clamp(a),{fill:'#FF4A4A',sw:18})}flash(t,2.3,0.2)}
  else if(t<13.4){clear3d();setBG('blue');pill('COPS ONLY COME IF...',W/2,120,56,'#FFD23F','#111',t,7.3,13.35);
    const items=[[eyeIcon,'SOMEONE SEES IT',10.3],[phoneIcon,'SOMEONE REPORTS IT',11.1],[camIcon,'A CAMERA CATCHES IT',11.9]];
    items.forEach(([fn,lab,tk],i)=>{if(t<tk)return;const x=W*(0.2+i*0.3),y=H*0.47,s=pop(t,tk);g.save();g.globalAlpha=1;g.fillStyle='rgba(255,255,255,0.12)';g.beginPath();g.arc(x,y,150*s,0,7);g.fill();g.restore();fn(x,y,1.6*s,t);txtA(lab,x,H*0.72,44,clamp(s),{sw:10})});
    if(t<10.3){txt('?',W/2,H*0.5,200,{fill:'#fff',sw:30})}flash(t,6.9,0.2)}
  else if(t<18.1){const S=scene('stage');stageOnly();setBG('#E9E2CF');putGuy(S.S,-3.0,0,0,0.25);guy.pose(idle(t,{mouth:'flat',armL:[0.3,0],armR:[0.3,0]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    g.save();g.strokeStyle='#111';g.lineWidth=8;g.strokeRect(W*0.12,H*0.13,W*0.25,H*0.74);for(let i=0;i<5;i++){g.fillStyle='rgba(0,0,0,0.15)';g.fillRect(W*0.12,H*0.13+i*H*0.16,W*0.25,4)}g.restore();
    const px=W*0.66;g.save();g.fillStyle='#FFFDF4';g.strokeStyle='#111';g.lineWidth=8;rr(px-430,H*0.13,860,H*0.74,24);g.fill();g.stroke();g.fillStyle='#E23B3B';rr(px-430,H*0.13,860,110,24);g.fill();g.restore();txt('SUSPECT PROFILE',px,H*0.13+58,60,{sw:12});
    const F=[['CLOTHES','TEAL TRACKSUIT',15.4],['HAIR','SHORT & DARK',16.4],['CAR','PINK COUPE',17.0]];F.forEach(([k,v,tk],i)=>{const y=H*0.42+i*130;txt(k+':',px-380,y,50,{align:'left',fill:'#111',stroke:0});if(t>tk){const n=Math.floor(clamp((t-tk)/0.35)*v.length);txt(v.slice(0,n),px-70,y,50,{align:'left',fill:'#E23B3B',stroke:0})}g.fillStyle='rgba(0,0,0,0.15)';g.fillRect(px-80,y+34,450,4)});
    flash(t,13.4,0.2)}
  else if(t<23.0){const S=scene('stage');stageOnly();setBG('neon');putGuy(S.S,2.4,0,0,-0.4);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,lookY:0.8,look:-0.5,headPitch:-0.2,headRoll:0.1,reachR:[0.05,1.62,0.42],poleR:[-1,-0.3,0.3]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    txt('SMARTEST ESCAPE?',W*0.36,H*0.22,90,{fill:'#fff',sw:18});if(t>19.6)txt('GUESS!',W*0.36,H*0.42,130*pop(t,19.6),{fill:'#FFD23F',sw:24});
    if(t>21.0){const n=3-Math.floor((t-21.0)/0.66);if(n>0){const ph=((t-21.0)%0.66)/0.66;txtA(String(n),W*0.36,H*0.68,220*(1.2-0.2*ph),1-ph*0.6,{fill:'#3FF0FF',sw:30})}}flash(t,18.1,0.2)}
  else if(t<26.4){const C=scene('city');C.mood('night');C.cop.c.visible=false;C.car.c.position.set(1.5,0,-1.2);C.car.c.rotation.y=0;C.car.spin(0);C.car.color(t<24.0?0xFF3D7F:0x3F7BFF);
    const OF=[{snapback:1,chain:1,shades:1},{beanie:1},{bandana:1,shades:1},{headphones:1},{snapforward:1}];const oi=t<24.0?Math.min(4,Math.floor((t-23.0)/0.22)):4;guy.outfit(OF[oi]);
    let gx=-2.0,gz=-3.3,o=idle(t,{mouth:'grin'});if(t>25.3){const k=ease(seg(t,25.3,25.8));gx=lerp(-2.0,-4.0,k);gz=lerp(-3.3,-4.3,k);o=k<1?walk(t,10):{legL:[1.3,2.1,0],legR:[1.3,2.1,0],sitY:-0.5,armL:[0.6,0],armR:[0.6,0],mouth:'flat',blink:BLINK(t),look:0.8*Math.sin(t*2)}}
    putGuy(C.S,gx,0.18,gz,t>25.3?0:0.3);guy.pose(o);C.shot([-1.0,2.4,8.5],[-1.2,1.1,-3]);
    const pg=proj(new THREE.Vector3(-2,1.2,-3.3),C.cam),pc=proj(new THREE.Vector3(1.5,0.8,-1.2),C.cam);for(let k=0;k<5;k++)poofs(t,23.0+k*0.22,pg[0],pg[1]);poofs(t,24.0,pc[0],pc[1]);
    pill('CHANGE YOUR OUTFIT',W/2,110,54,'#FFD23F','#111',t,23.0,23.95);pill('SWAP YOUR CAR',W/2,110,54,'#3FF0FF','#111',t,24.0,25.25);pill('LIE LOW',W/2,110,54,'#5BE37A','#111',t,25.3,26.35);flash(t,23.0,0.15)}
  else{const C=scene('city');C.mood('night');C.car.c.position.set(-30,0,-1.2);C.cop.c.visible=true;C.cop.c.position.set(5,0,-0.9);C.cop.c.rotation.y=PI;C.cop.spin(0);const H1=heli(C);H1.h.visible=true;H1.h.position.set(0.5+Math.sin(t*0.7)*0.8,6.2+Math.sin(t*1.3)*0.2,-2.6);H1.h.rotation.set(0.05*Math.sin(t),0.3,0);H1.rot.rotation.y=t*25;H1.lr.color.set((t*3%1)<0.5?0xFF2A2A:0x441010);
    putGuy(C.S,0.4,0.18,-3.0,0);guy.pose({mouth:'o',wide:true,mouthSize:1.3,lookY:1,headPitch:-0.45,armL:[0.6+0.1*Math.sin(t*9),0],armR:[0.6+0.1*Math.cos(t*9),0],blink:false,jump:0.02*Math.sin(t*20)});
    C.shot([0.3,3.4,15.5],[0.3,3.7,-3]);copLights(C,t);
    panel(W*0.79,H*0.16,560,170);txt('WANTED LEVEL',W*0.79,H*0.11,38,{stroke:0,fill:'#FFD23F'});for(let i=0;i<6;i++){const tk=27.6+i*0.25;sirenPip(W*0.79-210+i*84,H*0.19,0.75*(t>tk?pop(t,tk):1),t>tk,t)}
    comic('SIX!',W*0.22,H*0.3,140,t,30.0,{life:0.9,rot:-0.1,fill:'#FF4A4A'});comic('GOOD LUCK.',W*0.26,H*0.45,100,t,31.9,{life:1.7,rot:-0.05,fill:'#fff'});flash(t,26.4,0.2)}
  vignette();cap16(t+T0)};

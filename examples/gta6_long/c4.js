// ===== Chapter 4: where are you going? (global 83.5 - 113.5) =====
const T0=83.5,TT=30.0;
const KEYSBG='radial-gradient(circle at 70% 70%,#FFF0A0 0,#FFD27A 4%,rgba(255,180,107,0) 10%),linear-gradient(#3A1C7A 0%,#B04A9A 40%,#FF8A7A 70%,#FFD58A 100%)';
function driver(car,t,o={}){car.c.add(holder);holder.position.set(-0.35,0.32,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.82);guy.pose({...SIT,reachL:[0.18,1.15,0.55],reachR:[-0.18,1.15,0.55],blink:BLINK(t),mouth:'grin',...o})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<2.8){const K=scene('keys');bg.style.background=KEYSBG;const x=-20+t*9;K.car.c.position.set(x,1.78,0.6);K.car.c.rotation.y=0;K.car.spin(t*14);driver(K.car,t);K.shot([x-4,9,24],[x+2,1,-4]);chapterCard(t,0.05,2.75,3,'WHERE ARE YOU GOING?');flash(t,0,0.2)}
  else if(t<6.7){clear3d();setBG('blue');const a=easeOut(seg(t,2.85,3.3));leonida(W*0.4,H*0.5,1.65*(0.92+0.08*a),a);
    txtA('LEONIDA',W*0.36,H*0.36,96,easeOut(seg(t,3.5,3.8)),{fill:'#FFD23F',sw:20});pill('A MADE-UP STATE',W*0.78,H*0.36,48,'#fff','#111',t,4.6,6.65);pill('BASED ON FLORIDA',W*0.78,H*0.52,48,'#FF3DA6','#fff',t,5.6,6.65);flash(t,2.8,0.2)}
  else if(t<10.1){const C=scene('city');C.mood('night');C.cop.c.visible=false;const x=-10+(t-6.7)*7;C.car.c.position.set(x,0,1.6);C.car.c.rotation.y=0;C.car.spin(t*16);driver(C.car,t);C.shot([x+5.5,1.8,8.5],[x,1.1,0]);
    pill('VICE CITY',W/2,110,64,'#FF3DA6','#fff',t,7.0,10.05);pill('NEON, MIAMI-STYLE',W/2,210,40,'#3FF0FF','#111',t,8.2,10.05);flash(t,6.7,0.2)}
  else if(t<13.4){const S=scene('swamp');S.gators.forEach(a=>a.position.y=-0.8);putGuy(S.S,0,0.51,1.6,0);guy.pose(idle(t,{headYaw:0.5*Math.sin(t*1.2),look:0.6*Math.sin(t*1.2),mouth:'smile',armL:[0.5,0],armR:[0.5,0]}));
    const k=ease(seg(t,10.1,13.4));S.shot(mix([3.5,2.6,9.5],[2.2,2.2,8.0],k),[0,1.3,0]);pill('GRASSRIVERS',W/2,110,64,'#5BE37A','#111',t,10.2,13.35);pill('INSPIRED BY THE EVERGLADES',W/2,210,40,'#fff','#111',t,11.8,13.35);flash(t,10.1,0.2)}
  else if(t<16.7){const K=scene('keys');bg.style.background=KEYSBG;const x=-6+(t-13.4)*9;K.car.c.position.set(x,1.78,0.6);K.car.c.rotation.y=0;K.car.spin(t*14);driver(K.car,t);K.shot([x-14,26,30],[x+8,0,-12]);
    pill('THE LEONIDA KEYS',W/2,110,60,'#3FF0FF','#111',t,13.5,16.65);pill('A LONG CHAIN OF ISLANDS',W/2,210,40,'#fff','#111',t,15.1,16.65);flash(t,13.4,0.2)}
  else if(t<23.0){const S=scene('swamp');S.gators.forEach((a,i)=>{const tk=19.8+i*0.28;a.position.y=lerp(-0.8,0.14,easeOut(seg(t,tk,tk+0.5)))+0.02*Math.sin(t*2+i)});
    putGuy(S.S,0,0.51,1.6,0);const sc=t>20.2;const j=sc?Math.abs(Math.sin((t-20.2)*7))*0.28*Math.exp(-(t-20.2)*0.6):0;
    guy.pose(sc?{mouth:'o',wide:true,mouthSize:1.6,armL:[2.5,0],armR:[2.5,0],bendL:0.4,bendR:0.4,jump:j,legL:[0.3*j*3,0.4*j*3,0],legR:[-0.2*j*3,0.4*j*3,0]}:idle(t,{mouth:'smile',headYaw:0.3}));
    const k=ease(seg(t,16.7,23));S.shot(mix([0,4.0,10.5],[0,4.8,11.0],k),[0,0.7,-0.6]);const n=Math.max(0,Math.min(8,Math.floor((t-19.8)/0.28)+1));
    pill('IF YOU SAW THE TRAILERS...',W/2,110,48,'#fff','#111',t,16.8,19.7);if(n>0){panel(W*0.84,H*0.14,420,120);txt('GATORS: '+n,W*0.84,H*0.14+4,60,{fill:'#5BE37A',stroke:0})}
    comic('LOTS!',W*0.26,H*0.3,130,t,21.4,{life:1.5,rot:-0.1,fill:'#FFD23F'});flash(t,16.7,0.2)}
  else if(t<26.9){clear3d();setBG('neon');const a1=pop(t,23.3),a2=easeOut(seg(t,24.5,25.6));const s1=260,s2=s1*Math.sqrt(1+1.3*a2);
    const bx=W*0.5,by=H*0.78;g.save();g.fillStyle='rgba(255,61,166,0.85)';g.strokeStyle='#111';g.lineWidth=10;if(a2>0){rr(bx-40,by-s2,s2,s2,20);g.fill();g.stroke()}g.fillStyle='#3FF0FF';if(a1>0){g.translate(bx-40-s1-30,by);g.scale(a1,a1);rr(0,-s1,s1,s1,20);g.fill();g.stroke()}g.restore();
    if(a1>0.5)txt('GTA V',bx-40-s1/2-30,by-s1/2,58,{sw:12});if(a2>0.3)txt('GTA 6',bx-40+s2/2,by-s2/2,80,{sw:16});comic('2× BIGGER+',W*0.5,H*0.12,110,t,25.3,{life:1.6,rot:-0.04});pill('REPORTED',W*0.85,H*0.3,40,'#fff','#111',t,24.0,26.85);flash(t,23.0,0.2)}
  else{const C=scene('city');C.mood('night');C.cop.c.visible=false;const x=-14+(t-26.9)*16;C.car.c.position.set(x,0,1.6);C.car.c.rotation.y=0;C.car.spin(t*30);driver(C.car,t,{headPitch:-0.1});C.shot([2,1.0,6.5],[-1,1.0,0]);
    comic('FAST CAR!',W*0.5,H*0.2,120,t,28.0,{life:1.9,rot:0.05});flash(t,26.9,0.2)}
  vignette();cap16(t+T0)};

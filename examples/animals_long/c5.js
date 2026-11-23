// ===== Chapter 4: cat (global 174.5 - 206.1) =====
const T0=174.5,TT=31.6;
const CT=makeCat();CT.root.scale.setScalar(1.5);
const HOSP=new Set(),SURG=new Set();{let i=0;while(HOSP.size<57){HOSP.add(Math.floor(hash(i*3.7+2)*193));i++}const arr=[...HOSP];for(let k=0;k<38;k++)SURG.add(arr[k])}
function carSet(t,night=true){const C=scene('city');C.mood(night?'night':'sunset');if(!night)bg.style.background=SUNSET;C.cop.c.visible=false;C.car.c.position.set(4,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(0);C.car.color(0x3FF0FF);C.car.c.add(CT.root);CT.root.position.set(-0.2,1.47,0);CT.root.rotation.set(0,-PI/2,0);return C}
function toothCut(t){const x0=W*0.1,x1=W*0.9;g.save();g.fillStyle='#FFD9B0';g.fillRect(x0,H*0.42,x1-x0,H*0.12);g.fillStyle='#F2A88A';g.fillRect(x0,H*0.54,x1-x0,H*0.14);g.fillStyle='#E9E2CC';g.fillRect(x0,H*0.68,x1-x0,H*0.12);g.strokeStyle='#111';g.lineWidth=6;g.strokeRect(x0,H*0.42,x1-x0,H*0.38);
  txt('SKIN',x0+90,H*0.48,36,{sw:8});txt('MUSCLE',x0+110,H*0.61,36,{sw:8});txt('TENDON / JOINT',x0+170,H*0.74,36,{sw:8});
  const d=easeOut(seg(t,8.2,10.4));const tx=W*0.55,ty=lerp(H*0.12,H*0.62,d);g.fillStyle='#FFFDF4';g.beginPath();g.moveTo(tx-60,ty-260);g.lineTo(tx+60,ty-260);g.lineTo(tx,ty+60);g.closePath();g.fill();g.stroke();
  const n=Math.floor(40*seg(t,11.0,13.6));for(let i=0;i<n;i++){const a=hash(i*2.1)*PI,r=40+hash(i*3.3)*220*seg(t,11.0,13.6);const bx=tx+Math.cos(a)*r*1.4,by=H*0.7+Math.sin(a)*r*0.25;g.fillStyle='#7BD34B';g.beginPath();g.ellipse(bx,by,12,7,a,0,7);g.fill();g.lineWidth=3;g.stroke()}g.restore()}
function calendar(x,y,s,t,t0){const a=pop(t,t0);if(t<t0)return;g.save();g.translate(x,y);g.scale(s*a,s*a);panel(0,0,560,380,'#FFFFFF','#111',24);g.fillStyle=RED;rr(-280,-190,560,80,24);g.fill();txt('THIS WEEK',0,-150,46,{stroke:0});
  const days='MTWTFSS';for(let i=0;i<7;i++){const cx=-225+i*75,cy=10;txt(days[i],cx,cy-50,32,{fill:'#111',stroke:0});g.fillStyle='#EEE';rr(cx-30,cy-20,60,60,10);g.fill();if(t>t0+0.3+i*0.12){g.strokeStyle=RED;g.lineWidth=8;g.beginPath();g.moveTo(cx-22,cy-12);g.lineTo(cx+22,cy+32);g.moveTo(cx+22,cy-12);g.lineTo(cx-22,cy+32);g.stroke()}}
  txt('RUINED',0,130,64,{fill:RED,stroke:0});g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<7.5){const C=carSet(t);const stare=t>5.9;CT.pose({tail:stare?0:0.3*Math.sin(t*2),tailUp:0.35,headYaw:stare?-0.9:0.2*Math.sin(t)});
    putGuy(C.S,7.6,0,4.2,-0.5);guy.pose({...idle(t),mouth:stare?'o':'grin',wide:stare,armR:[stare?0.3:1.5,stare?0:-0.6],bendR:stare?0:0.3,jump:stare?0:0.04*Math.abs(Math.sin(t*12))});
    if(t<5.9)C.shot([9.5,3.2,11.5],[5.0,1.3,2.0]);else C.shot([5.6,2.2,5.6],[3.8,1.6,1.6]);
    chapterCard(t,0.05,2.1,4,'THE CAT');pill('THE CAR-GUARD CAT MEME',W/2,110,56,PINK,'#fff',t,2.2,5.85);comic('HAHA!',W*0.8,H*0.3,90,t,3.5,{life:2,rot:0.08,fill:GOLD});pill("DON'T LAUGH TOO FAST",W/2,110,56,RED,'#fff',t,5.95,7.45)}
  else if(t<13.9){clear3d();setBG('#3A1830');txtA('TEETH LIKE TINY NEEDLES',W/2,100,68,pop(t,7.55),{fill:GOLD,sw:14});toothCut(t);if(t>11.0)txtA('BACTERIA',W*0.82,H*0.33,56,pop(t,11.0),{fill:'#9DFF6B',sw:12});comic('DEEP!',W*0.3,H*0.28,100,t,10.0,{life:1.4,fill:RED});flash(t,7.5,0.2)}
  else if(t<25.3){clear3d();setBG('blue');txtA('MAYO CLINIC STUDY: 193 HAND BITES',W/2,100,60,pop(t,13.95),{fill:GOLD,sw:14});
    const cols=25,n=Math.floor(193*seg(t,14.6,17.4));for(let i=0;i<n;i++){const x=W*0.07+(i%cols)*42,y=H*0.3+Math.floor(i/cols)*64;const h=HOSP.has(i)&&t>20.2,su=SURG.has(i)&&t>22.7;person2D(x,y,1.0,su?RED:h?GOLD:'rgba(255,255,255,0.8)')}
    if(t>20.2){hosp2D(W*0.83,H*0.33,0.9*pop(t,20.2));txtA('1 IN 3',W*0.83,H*0.5,80,pop(t,20.3),{fill:GOLD,sw:16});txtA('HOSPITALIZED',W*0.83,H*0.57,44,pop(t,20.3),{fill:GOLD,sw:10})}
    if(t>22.7){txtA('2 OF 3',W*0.83,H*0.68,80,pop(t,22.8),{fill:RED,sw:16});txtA('NEEDED SURGERY',W*0.83,H*0.75,44,pop(t,22.8),{fill:RED,sw:10})}flash(t,13.9,0.2)}
  else{const C=carSet(t);const k=easeOut(seg(t,25.4,27.0)),hiss=t>27.0,back=easeOut(seg(t,27.1,27.6));CT.pose({tail:hiss?1:0.2,tailUp:hiss?1.1:0.35,headYaw:-0.9,headTilt:hiss?0.2:0});CT.root.position.y=1.47+(hiss?0.06*Math.abs(Math.sin(t*20)):0);
    putGuy(C.S,lerp(lerp(0.2,2.5,k),0.8,back),0,3.0,PI/2-0.2);guy.pose({...(k<1&&!hiss?walk(t,5):idle(t)),mouth:hiss?'o':'grin',wide:hiss,armL:[hiss?2.5:0.9,hiss?0:-0.9],armR:[hiss?2.6:0.9,hiss?0:-0.9],bendL:hiss?0:0.6,bendR:hiss?0:0.6});
    C.shot([0.8,3.0,11.5],[2.9,1.2,2.2]);comic('HISSSS!',W*0.22,H*0.2,120,t,27.0,{life:1.6,rot:-0.06,fill:'#FF9AB0'});comic('SWIPE!',W*0.3,H*0.34,100,t,27.4,{life:1.0,rot:0.1,fill:RED});calendar(W*0.8,H*0.34,0.75,t,28.6);flash(t,25.3,0.2)}
  vignette();cap16(t+T0)};

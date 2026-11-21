// ===== Chapter 4: step 4, jewelry + supercar wish list (global 115.00 - 141.68) =====
const T0=115.00,TT=26.68;
function wishList(t,t0,n){const x=W*0.62,y=H*0.5;g.save();g.translate(x,y);g.rotate(0.03);g.fillStyle='rgba(0,0,0,0.3)';rr(-330,-400,680,820,24);g.fill();g.fillStyle='#FFFDF4';g.strokeStyle='#111';g.lineWidth=8;rr(-340,-410,680,820,24);g.fill();g.stroke();
  g.fillStyle='#8C5E36';rr(-120,-440,240,60,14);g.fill();g.stroke();g.restore();txt('WISH LIST',x,y-320,56,{fill:'#111',stroke:0});
  for(let i=0;i<18;i++){const col=i%2,row=Math.floor(i/2);const cx=x-160+col*320,cy=y-230+row*62;const on=t>t0+i*0.22;g.save();g.globalAlpha=on?1:0.25;car2D(cx-60,cy,0,0.6,['#FFD23F','#FF3DA6','#3FF0FF','#B59CFF','#FF8A2B','#9DFF6B'][i%6]);g.restore();
    txt('#'+(i+1),cx+50,cy+4,30,{fill:'#111',stroke:0});if(on)check(cx+110,cy,0.45)}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<4.6){const C=scene('city');C.mood('night');C.cop.c.visible=false;C.car.c.position.set(-30,0,1.6);const u=Math.max(0,t-0.3);putGuy(C.S,-4+u*1.6,0.18,-3.2,PI/2-0.3);guy.pose(walk(t,8,{mouth:'smile'}));
    C.neons.forEach((m,i)=>m.color.setHSL(((i*0.21)+0.05*t)%1,1,0.6));C.shot([-1.5+u*1.3,1.7,6.5],[-2.5+u*1.6,1.6,-4]);chapterCard(t,0.05,2.45,4,'THE BIG UPGRADE');pill('THINGS GET SERIOUS',W/2,120,56,PINK,'#fff',t,2.6,4.55);flash(t,0,0.2)}
  else if(t<8.7){putGuy(IN.S,40,0,0.9,PI);guy.pose(idle(t,{mouth:'o',mouthSize:0.8,headPitch:0.25,lookY:-0.4,armL:[0.4,0],armR:[0.4,0]}));GEMS.forEach((m,i)=>m.rotation.y=t*1.5+i);
    const k=ease(seg(t,4.6,8.7));IN.shot(mix([46.5,2.4,4.6],[45.5,2.2,3.8],k),[40.3,1.3,-1.0],'#1A1030');
    for(let i=0;i<5;i++)sparkle(W*(0.25+i*0.13),H*(0.45+0.05*Math.sin(i*2)),0.8+0.3*Math.sin(t*5+i),0.5+0.5*Math.sin(t*6+i*1.7));
    pill('JEWELRY STORES',W/2,110,56,GOLD,'#111',t,4.7,8.65);if(t>5.6){const s=pop(t,5.6);g.save();g.translate(W*0.76,H*0.72);g.scale(s,s);panel(0,0,640,200,'rgba(10,12,25,0.92)',GREEN,30);txt('PER JOB',0,-50,34,{stroke:0});txt('$10K – $25K',0,30,90,{fill:GREEN,stroke:0});g.restore()}flash(t,4.6,0.2)}
  else if(t<16.2){clear3d();setBG('pink');wishList(t,10.9,18);
    const S=null;txtA('RANDY',W*0.2,H*0.3,90,pop(t,9.6),{fill:GOLD,sw:18});txtA('CAR COLLECTOR',W*0.2,H*0.4,44,pop(t,9.8),{sw:10});
    if(t>13.4){const s=pop(t,13.4);g.save();g.translate(W*0.2,H*0.62);g.scale(s,s);panel(0,0,480,170,'rgba(10,12,25,0.92)',GREEN,26);txt('$30,000+',0,-6,84,{fill:GREEN,stroke:0});txt('EACH',0,58,34,{stroke:0});g.restore()}flash(t,8.7,0.2)}
  else if(t<19.7){const S=scene('stage');stageOnly();setBG('gold');putGuy(S.S,-3.2,0,0,0.35);guy.pose(idle(t,{mouth:'o',mouthSize:0.6,reachR:[-0.15,1.55,0.45],headPitch:-0.1,lookY:0.3,armL:[0.3,0]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    panel(W*0.62,H*0.42,900,260);txt('18  ×  $30,000  =',W*0.55,H*0.425,76,{stroke:0});txt('?',W*0.79,H*0.43,110*(1+0.08*Math.sin(t*8)),{fill:GOLD});comic('GUESS!',W*0.62,H*0.72,100,t,17.0,{life:2.7,rot:0.08,fill:GOLD});flash(t,16.2,0.2)}
  else if(t<22.1){clear3d();setBG('gold');const k=easeOut(seg(t,19.7,20.9));bigNum(moneyStr(540000*k)+'+',W/2,H*0.45,190,pop(t,19.7),GREEN);txtA('MORE THAN HALF A MILLION!',W/2,H*0.68,70,pop(t,20.6),{fill:'#fff',sw:16});bills(t,19.75,W/2,H*0.45,30);flash(t,19.7,0.35)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;C.car.c.position.set(2.2,0,-1.0);C.car.c.rotation.set(0,0.3,0);C.car.color(0xFFC21A);C.car.spin(0);
    putGuy(C.S,-1.2,0.18,-3.2,0.45);guy.pose(idle(t,{mouth:'grin',armR:[1.2,-0.6],armL:[0.3,0],headYaw:0.4}));const k=ease(seg(t,22.1,26.68));C.shot(mix([3.5,1.4,7.5],[1.2,2.0,8.5],k),[1.0,1.0,-1.5]);
    for(let i=0;i<6;i++)sparkle(W*(0.45+0.08*i),H*(0.45+0.08*Math.sin(i*3)),1.0,0.5+0.5*Math.sin(t*7+i*2));comic('WAY SHINIER',W*0.62,H*0.22,100,t,23.9,{life:2.6,rot:0.05,fill:GOLD});flash(t,22.1,0.2)}
  vignette();cap16(t+T0)};

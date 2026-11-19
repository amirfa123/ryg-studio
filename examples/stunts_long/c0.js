// ===== Chapter 0: intro (global 0 - 29.4) =====
const T0=0,TT=29.4;
const SUNSET='radial-gradient(circle at 72% 58%,#FFF0A0 0,#FFD27A 5%,rgba(255,180,107,0) 12%),'+BGS.sunset;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.4){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;if(C.ramps)C.ramps.gp.visible=false;C.car.c.position.set(2.6,0,-1.0);C.car.c.rotation.set(0,0,0);C.car.spin(0);C.cop.c.visible=false;
    putGuy(C.S,-0.6,0.18,-3.1,0.2);guy.pose(idle(t,{mouth:t>2.2?'o':'smile',mouthSize:0.8,armR:[0.3,0],armL:[0.3,0]}));
    const k=ease(seg(t,0,3.4));C.shot(mix([0.4,2.6,13.5],[0.0,1.9,8.8],k),mix([0.4,2.3,-3],[0.0,1.7,-3],k));
    titleBlock(easeOut(seg(t,0.05,0.4))*(1-seg(t,3.1,3.38)),'COULD YOU SURVIVE','REAL-LIFE GTA STUNTS?',110);
    comic('?!',W*0.62,H*0.5,120,t,2.1,{life:1.2,rot:0.15,fill:'#fff'});flash(t,0,0.25)}
  else if(t<6.0){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=placeRamps(C,-6,20);holder.parent&&holder.parent.remove(holder);
    const x=-16+(t-3.4)*15;const [px,py,pr]=jumpPose(-6,20,x,5);C.car.c.position.set(px,py,1.6);C.car.c.rotation.set(0,0,pr);C.car.spin(t*20);
    C.shot([4,3.5,24],[4,2.5,0]);pill('LAUNCH A CAR',W/2,110,56,'#FF3DA6','#fff',t,3.5,5.95);flash(t,3.4,0.2)}
  else if(t<7.2){const S=scene('roof');putGuy(S.S,0,S.top+0.5,3.6,0);guy.pose(idle(t,{mouth:'o',mouthSize:0.8,headPitch:0.35,lookY:-0.6,armL:[0.6,0],armR:[0.6,0]}));S.shot([5,S.top+2.2,12],[0,S.top+1.0,3]);
    pill('FALL OFF A ROOF',W/2,110,56,'#3FF0FF','#111',t,6.05,7.15);flash(t,6.0,0.2)}
  else if(t<9.0){const B=scene('bay');B.splash.visible=false;putGuy(B.S,0,B.TH+0.62,1.2,0);guy.pose(idle(t,{mouth:'o',mouthSize:1.1,wide:true,headPitch:0.3,armL:[1.2,0],armR:[1.2,0]}));
    const k=ease(seg(t,7.2,9.0));B.shot(mix([6,B.TH+2.2,10],[34,B.TH*0.55,70],k),mix([0,B.TH+1.0,1],[0,B.TH*0.72,0],k));pill('DIVE OFF A SKYSCRAPER',W/2,110,56,'#FFD23F','#111',t,7.25,8.95);flash(t,7.2,0.2)}
  else if(t<10.7){const S=scene('stage');stageOnly();setBG('teal');const up=easeOut(seg(t,9.2,9.7));putGuy(S.S,-2.6,0,0,0.3);
    guy.pose(up<1?{...idle(t),mouth:'o',mouthSize:0.6,sitY:-0.5*(1-up),legL:[1.3*(1-up),2.0*(1-up),0],legR:[1.3*(1-up),2.0*(1-up),0]}:idle(t,{mouth:'grin',armL:[2.4,0],armR:[2.4,0]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    hpBar(W*0.48,H*0.4,620,lerp(0.08,1,easeOut(seg(t,9.3,10.2))));comic('BACK UP!',W*0.69,H*0.62,110,t,9.6,{life:1.1,rot:-0.06,fill:'#5BE37A'});flash(t,9.0,0.2)}
  else if(t<13.9){const C=scene('city');C.mood('night');if(C.ramps)C.ramps.gp.visible=false;C.cop.c.visible=false;C.car.c.position.set(3.2,0,-1.0);C.car.c.rotation.set(0,0,0);C.car.spin(0);
    const ch=t>11.8;putGuy(C.S,0,0.18,-3.1,0);guy.pose(ch?{...idle(t),mouth:'grin',armL:[2.6,0.2*Math.sin(t*10)],armR:[2.6,-0.2*Math.sin(t*10)],jump:Math.abs(Math.sin((t-11.8)*6))*0.25}:idle(t,{mouth:'smile'}));
    const k=ease(seg(t,10.7,13.9));C.shot(mix([-2,1.6,9],[0.5,2.0,7.5],k),[0,1.4,-3]);pill('GTA 6',W/2,120,90,'#FF3DA6','#fff',t,10.8,13.85);pill('OUT TODAY',W/2,240,54,'#3FF0FF','#111',t,11.6,13.85);
    comic('LET\'S TEST IT!',W*0.72,H*0.55,90,t,12.6,{life:1.3,rot:0.06});flash(t,10.7,0.2)}
  else if(t<18.5){clear3d();setBG('neon');txtA('6 FAMOUS STUNTS',W/2,140,96,easeOut(seg(t,13.95,14.3)),{fill:'#FFD23F',sw:20});
    for(let i=0;i<6;i++){const tk=14.2+i*0.25,a=pop(t,tk);if(t<tk)continue;const cx=W*(0.2+(i%3)*0.3),cy=H*(0.37+Math.floor(i/3)*0.28);g.save();g.translate(cx,cy);g.scale(a,a);panel(0,0,400,250,'rgba(255,255,255,0.12)','#3FF0FF',30);g.restore();stuntIcon(i,cx,cy,1.5*a);txtA('#'+(i+1),cx-160,cy-90,44,a,{fill:'#fff',sw:10})}
    pill('REAL PHYSICS',W/2,H*0.835,52,'#5BE37A','#111',t,15.6,18.45);flash(t,13.9,0.2)}
  else if(t<22.1){const S=scene('stage');stageOnly();setBG('blue');putGuy(S.S,-3.2,0,0,0.4);guy.pose(idle(t,{mouth:'o',mouthSize:0.6,lookY:0.6,look:0.4,reachR:[0.05,1.62,0.42],poleR:[-1,-0.3,0.3]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    panel(W*0.62,H*0.45,900,460);txt('SURVIVED',W*0.62,H*0.29,70,{fill:'#FFD23F',sw:14});const q=t>19.6;txt(q?'? / 6':'0 / 6',W*0.62,H*0.45,170*(q?pop(t,19.6):1),{sw:24});
    for(let i=0;i<6;i++){const x=W*0.62-300+i*120;g.save();g.fillStyle='rgba(255,255,255,0.15)';g.beginPath();g.arc(x,H*0.585,40,0,7);g.fill();g.restore();txt('?',x,H*0.585+4,54,{sw:10})}flash(t,18.5,0.2)}
  else if(t<26.6){clear3d();setBG('red');const a=easeOut(seg(t,22.2,22.6)),b=easeOut(seg(t,24.5,24.9));
    if(a>0){g.save();g.globalAlpha=a;panel(W*0.27,H*0.47,700,520,'rgba(10,30,15,0.85)','#5BE37A');g.restore();check(W*0.27,H*0.36,2.6*pop(t,22.4));txtA('PEOPLE HAVE',W*0.27,H*0.55,60,a,{});txtA('DONE IT',W*0.27,H*0.63,60,a,{fill:'#5BE37A'})}
    if(b>0){g.save();g.globalAlpha=b;panel(W*0.73,H*0.47,700,520,'rgba(40,8,10,0.85)','#FF4A4A');g.restore();cross(W*0.73,H*0.36,2.6*pop(t,24.7));txtA('INSTANT',W*0.73,H*0.55,60,b,{});txtA('GAME OVER',W*0.73,H*0.63,60,b,{fill:'#FF4A4A'})}
    txtA('VS',W/2,H*0.47,90,b,{fill:'#FFD23F',sw:18});flash(t,22.1,0.2)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;if(C.ramps)C.ramps.gp.visible=false;C.cop.c.visible=false;C.car.c.position.set(-30,0,1.6);const u=t-26.6;
    putGuy(C.S,-2+u*2.6,0.18,-3.1,PI/2);guy.pose(walk(t,9,{mouth:'grin'}));C.shot([-1+u*2.6,1.8,8.5],[-0.5+u*2.6,1.3,-3]);
    comic('LET\'S GO!',W*0.5,H*0.25,120,t,26.8,{life:2.2,rot:-0.05});flash(t,26.6,0.2)}
  vignette();cap16(t+T0)};

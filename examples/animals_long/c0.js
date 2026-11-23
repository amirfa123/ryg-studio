// ===== Chapter 0: intro (global 0 - 32.1) =====
const T0=0,TT=32.1;
const SW=scene('swamp');const GZ=mkGator(SW.S);GZ.a.visible=false;
const CT=makeCat();CT.root.scale.setScalar(1.5);
const BE=scene('beach');
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;GZ.a.visible=false;
  if(t<4.6){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;C.car.c.position.set(9,0,1.6);C.car.c.rotation.set(0,0,0);C.car.c.remove(CT.root);
    const x=-1+t*0.35;putGuy(C.S,x,0.18,-3.2,0.35);guy.pose(walk(t,6,{mouth:'smile',look:0.3}));C.shot([x+1.5,1.9,6.5+t*0.2],[x,1.4,-3.0]);
    titleBlock(easeOut(seg(t,0.1,0.5))*(1-seg(t,4.3,4.6)),'COULD THE ANIMALS OF GTA 6','ACTUALLY KILL YOU?',130)}
  else if(t<8.0){const k=t-4.6;GZ.a.visible=true;const lunge=easeOut(seg(t,5.6,6.1));GZ.a.position.set(lerp(-3.5,-1.9,lunge),lerp(-0.35,-0.05,lunge),2.0);GZ.a.rotation.set(0,0.1,0);GZ.anim(t,lunge>0.5?0.2+0.8*Math.abs(Math.sin(t*9)):0.1,0,3);
    const back=easeOut(seg(t,6.0,6.5));putGuy(SW.S,lerp(-0.2,0.6,back),0.51+0.22*Math.sin(PI*seg(t,6.0,6.5)),1.8,-0.9);guy.pose({...idle(t),mouth:'o',wide:t>6,armL:[t>6?2.4:0.4,0],armR:[t>6?2.4:0.4,0],legL:[back>0&&back<1?0.6:0,0.3,0],look:-0.6});
    SW.gators.forEach((g2,i)=>g2.position.y=-0.25+0.04*Math.sin(t*2+i));SW.shot([2.2,3.4,12.0],[-0.6,0.9,1.8]);comic('CHOMP!',W*0.3,H*0.3,120,t,6.0,{life:1.6,rot:-0.1,fill:'#9DFF6B'});pill('ALLIGATORS',W/2,110,56,GREEN,'#111',t,4.7,7.95);flash(t,4.6,0.2)}
  else if(t<10.6){clear3d();setBG('teal');const k=seg(t,8.0,10.6);snake2D(W/2,H*0.5,3.4,t);
    pill('PET PYTHON',W/2,120,56,GOLD,'#111',t,8.05,10.55);comic('GULP!',W*0.75,H*0.25,110,t,8.6,{life:1.6,rot:0.1});flash(t,8.0,0.2)}
  else if(t<12.5){holder.visible=true;const S=BE.shark;S.s.visible=true;const a=t*1.2;S.s.position.set(Math.cos(a)*3.5,-0.25,-6+Math.sin(a)*2.5);S.s.rotation.set(0,-a-PI/2,0);S.anim(t,6);BE.board.position.set(2.5,0.12,3.5);BE.board.rotation.set(0,0.4,0);
    putGuy(BE.S,0,0.05,2.6,0.0);guy.pose({...idle(t),mouth:'o',mouthSize:0.6,look:0,lookY:-0.2,headYaw:PI*0.0});holder.rotation.y=PI;BE.shot([3.0,3.6,9.5],[0,0.3,-3]);pill('SHARKS',W/2,110,56,CYAN,'#111',t,10.65,12.45);flash(t,10.6,0.2)}
  else if(t<16.4){const C=scene('city');C.mood('night');C.cop.c.visible=false;C.car.c.position.set(4,0,1.6);C.car.c.rotation.set(0,0,0);C.car.spin(0);C.car.color(0x3FF0FF);C.car.c.add(CT.root);CT.root.position.set(-0.2,1.47,0);CT.root.rotation.set(0,PI/2,0);
    const hiss=t>13.2;CT.pose({fLeg:0,bLeg:0,tail:hiss?1:0.2*Math.sin(t*3),tailUp:hiss?1.1:0.35,headTilt:hiss?0.2:0});CT.root.position.y=1.47+(hiss?0.08*Math.abs(Math.sin(t*20)):0);
    const back=easeOut(seg(t,13.3,13.8));putGuy(C.S,lerp(4.0,4.6,back),0,lerp(3.3,4.6,back),PI);guy.pose({...(t<13.2?walk(t,6):idle(t)),mouth:'o',wide:hiss,armL:[hiss?2.5:1.0,0],armR:[hiss?2.5:1.0,0]});
    C.shot([9.2,3.0,10.8],[4.2,1.3,2.0]);comic('HISSSS!',W*0.62,H*0.25,120,t,13.2,{life:2.6,rot:-0.06,fill:'#FF9AB0'});pill('CAR-GUARD CAT',W/2,110,56,PINK,'#fff',t,12.55,16.35);flash(t,12.5,0.2)}
  else if(t<22.4){clear3d();setBG('blue');const a=easeOut(seg(t,16.4,17.0));leonida(W*0.5,H*0.52,1.6*a,a);txtA('FLORIDA',W*0.38,H*0.25,72,pop(t,17.0),{fill:GOLD,sw:16});
    const pins=[[W*0.47,H*0.45,0,19.7],[W*0.56,H*0.62,1,20.2],[W*0.67,H*0.78,2,20.7],[W*0.38,H*0.38,3,21.2]];
    for(const [x,y,i,tk] of pins){if(t<tk)continue;const s=pop(t,tk);g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='rgba(10,12,25,0.9)';g.strokeStyle='#FFD23F';g.lineWidth=6;g.beginPath();g.arc(0,0,78,0,7);g.fill();g.stroke();g.restore();CARDS[i][1](x,y,0.55*s,t)}
    txtA('REAL ONES!',W*0.8,H*0.2,70,pop(t,20.0),{fill:GREEN,sw:14});flash(t,16.4,0.2)}
  else{clear3d();setBG('neon');txtA('WHICH ONES COULD REALLY TAKE YOU DOWN?',W/2,H*0.14,64,easeOut(seg(t,22.45,22.8)),{fill:GOLD,sw:16});
    for(let i=0;i<6;i++){const tk=25.0+i*0.3;card(W*(0.11+i*0.156),H*0.52,i,pop(t,tk),t,i===5?PINK:'#3FF0FF',i===4||i===5)}
    if(t>28.0){const k=pop(t,28.0);g.save();g.translate(W*(0.11+5*0.156),H*0.8);g.scale(k,k);pill('MAYBE NOT REAL',0,0,34,PINK,'#fff',t,28.0,40);g.restore()}
    txtA('6 ANIMALS',W/2,H*0.86,72,pop(t,26.8)*(t<28?1:0),{fill:CYAN,sw:14});comic("LET'S GO!",W/2,H*0.86,120,t,30.3,{life:1.8,fill:GREEN});flash(t,22.4,0.2)}
  vignette();cap16(t+T0)};

// ===== Chapter 2: step 2, cars for Moses (global 57.24 - 89.40) =====
const T0=57.24,TT=32.16;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<7.4){const C=scene('city');C.mood('day');C.cop.c.visible=false;if(C.ramps)C.ramps.gp.visible=false;const x=-20+t*6.5;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.color(0x7FB3FF);C.car.spin(t*14);driver(C.car,t,{mouth:'grin'});
    C.shot([x+2.5,2.2,9.5],[x+0.5,1.1,1.6]);chapterCard(t,0.05,2.0,2,'CARS FOR CASH');pill('EARLY GAME',W/2,120,56,CYAN,'#111',t,2.1,7.35);
    if(t>4.6)comic('SELL TO MOSES',W*0.72,H*0.3,70,t,5.6,{life:1.7,rot:0.05,fill:GOLD});flash(t,0,0.2)}
  else if(t<14.0){clear3d();setBG('teal');const s1=pop(t,7.6);car2D(W*0.25,H*0.42,0,3.2*s1,'#7FB3FF');txtA('OLDER, LOW-KEY CAR',W*0.25,H*0.66,44,s1,{sw:10});
    arrow(W*0.4,H*0.42,W*0.52,H*0.42,GOLD,22);if(t>9.7){const s=pop(t,9.7);g.save();g.translate(W*0.68,H*0.42);g.scale(s,s);moneyPanel(0,0,1000,'ABOUT',GREEN,420);g.restore()}
    if(t>11.3){const s=pop(t,11.3);stopwatch(W*0.68,H*0.72,70*s,(t-11.3)*3);txtA('EVERY ~2 MIN',W*0.73,H*0.72,44,s,{align:'left',sw:10})}flash(t,7.4,0.2)}
  else if(t<16.6){const S=scene('stage');stageOnly();setBG('pink');putGuy(S.S,0,0,0,0);const sc=t>15.1;
    guy.pose(idle(t,{mouth:sc?'o':'grin',wide:sc,mouthSize:1.2,armL:sc?[0.9,0]:[2.4,0.2*Math.sin(t*9)],armR:sc?[0.9,0]:[2.4,-0.2*Math.sin(t*9)],jump:sc?0:0.15*Math.abs(Math.sin(t*7))}));S.shot([0,1.4,8],[0,1.1,0]);
    comic('SOUNDS GREAT...',W*0.5,H*0.2,90,t,14.1,{life:1.1,rot:-0.05,fill:GREEN});comic('UNTIL YOU DO THE MATH',W*0.5,H*0.2,80,t,15.2,{life:1.4,rot:0.04,fill:RED});flash(t,14.0,0.2)}
  else if(t<23.7){clear3d();setBG('blue');panel(W/2,H*0.25,1300,170);txt('$1,000,000  ÷  $1,000  =',W*0.42,H*0.255,72,{stroke:0});
    if(t<21.8){txt('?',W*0.74,H*0.26,110*(1+0.08*Math.sin(t*8)),{fill:GOLD,stroke:0});comic('GUESS!',W*0.8,H*0.6,90,t,19.8,{life:2.0,rot:0.1,fill:GOLD})}
    else{const n=Math.round(1000*easeOut(seg(t,21.8,23.4)));txt('1,000',W*0.745,H*0.26,84*pop(t,21.8),{fill:GOLD,stroke:0});carGrid(W*0.5-40*17,H*0.38,40,25,n,28,14)}
    flash(t,16.6,0.2);if(t>21.8)flash(t,21.8,0.2)}
  else if(t<25.4){const C=scene('city');C.mood('night');C.cop.c.visible=false;const x=10+(t-23.7)*7;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.color(0xB59CFF);C.car.spin(t*14);
    driver(C.car,t,{mouth:'o',mouthSize:0.5,headPitch:0.15});C.shot([x+4,1.8,6.5],[x,1.2,1.6]);comic('THAT\'S A LOT OF DRIVING',W*0.5,H*0.22,80,t,23.8,{life:1.6,rot:-0.04});flash(t,23.7,0.2)}
  else{clear3d();setBG('neon');const items=[['STARTER',GREEN,25.6],['GOOD STUFF',GOLD,29.9]];
    panel(W*0.27,H*0.45,560,420,'rgba(10,12,25,0.9)',GREEN,36);car2D(W*0.27,H*0.4,0,2.6*pop(t,25.5),'#7FB3FF');txtA('STARTER',W*0.27,H*0.6,64,pop(t,26.3),{fill:GREEN,sw:14});
    txtA('NOT THE PLAN',W*0.27,H*0.74,56,pop(t,27.0),{fill:RED,sw:12});
    arrow(W*0.47,H*0.45,W*0.57,H*0.45,GOLD,24);
    for(let i=0;i<3;i++){const x=W*(0.66+i*0.11),y=H*0.45,u=t>29.9;lockIcon2(x,y-20,0.9,u?GREEN:'#9AA0AA');if(u)sparkle(x+50,y-90,1.2,1-seg(t,30.8,31.4))}
    txtA('UNLOCK THE GOOD STUFF',W*0.77,H*0.66,46,pop(t,29.9),{fill:GOLD,sw:11});flash(t,25.4,0.2)}
  vignette();cap16(t+T0)};

// ===== Chapter 6: step 6, bank vaults (global 160.88 - 193.00) =====
const T0=160.88,TT=32.12;
function copLights(C,t){const on=(t*4%1)<0.5;C.copR.color.set(on?0xFF2A2A:0x551010);C.copB.color.set(on?0x1A2A55:0x2A6BFF);C.alarm.color.set(on?0xFF2A2A:0x551010);g.fillStyle=on?'rgba(255,40,40,0.10)':'rgba(40,90,255,0.10)';g.fillRect(0,0,W,H)}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<5.9){const C=scene('city');C.mood('night');C.cop.c.visible=false;C.car.c.position.set(-30,0,1.6);C.alarm.color.set(0x551010);putGuy(C.S,-14,0.18,-2.6,PI);
    guy.pose(idle(t,{mouth:t>2.2?'o':'smile',mouthSize:0.8,headPitch:0.3,lookY:-0.5}));const k=ease(seg(t,0,5.9));C.shot(mix([-10.5,2.0,8.5],[-11.5,1.9,7.0],k),[-14,2.3,-5]);
    chapterCard(t,0.05,2.15,6,'THE JACKPOT');if(t>2.2){pill('BIGGEST PAYDAY?',W/2,120,60,GOLD,'#111',t,2.25,5.85);comic('?',W*0.72,H*0.42,170,t,3.9,{life:2.0,rot:0.1,fill:'#fff'})}flash(t,0,0.2)}
  else if(t<13.0){const op=easeOut(seg(t,6.2,7.6));DOOR.rotation.y=-1.9*op;putGuy(IN.S,80.8,0,1.6,PI+0.25);guy.pose(idle(t,{mouth:op>0.5?'grin':'o',wide:op>0.5,mouthSize:1.0,armL:op>0.6?[2.4,0.2]:[0.3,0],armR:op>0.6?[2.4,-0.2]:[0.3,0],jump:op>0.9?0.1*Math.abs(Math.sin(t*6)):0}));
    const k=ease(seg(t,5.9,13));IN.shot(mix([86,2.8,8.5],[84,2.4,7.0],k),[80,1.6,-1.5],'#1A1A24');pill('BANK VAULTS',W/2,110,60,GOLD,'#111',t,6.0,12.95);
    if(t>7.8)pill('LATE CHAPTER 4',W*0.2,H*0.26,44,CYAN,'#111',t,7.8,12.95);
    if(t>9.6){const v=200000*easeOut(seg(t,9.6,12.2));g.save();g.translate(W*0.74,H*0.78);moneyPanel(0,0,v,'UP TO ABOUT',GREEN,620);g.restore()}flash(t,5.9,0.2)}
  else if(t<17.3){clear3d();setBG('blue');const u=t-13;stopwatch(W*0.3,H*0.48,190,Math.min(300,u*90));txtA('~5 MINUTES',W*0.62,H*0.4,110,pop(t,15.4),{fill:GOLD,sw:20});txtA('ONCE YOU KNOW THE ROUTE',W*0.62,H*0.56,48,pop(t,13.4),{sw:11});flash(t,13.0,0.2)}
  else if(t<20.6){clear3d();setBG('gold');for(let i=0;i<5;i++){const tk=17.4+i*0.3;if(t<tk)continue;vaultIcon(W*(0.18+i*0.16),H*0.32,1.3*pop(t,tk))}
    const v=1e6*easeOut(seg(t,17.6,19.3));counterBar(W/2,H*0.66,v,1e6,GREEN);if(t>19.4){comic('MILLIONAIRE!',W/2,H*0.13,110,t,19.4,{life:1.2,rot:-0.04,fill:GREEN})}flash(t,17.3,0.2)}
  else if(t<26.9){const C=scene('city');C.mood('night');C.car.c.position.set(-30,0,1.6);C.cop.c.visible=true;const u=t-20.6;const caught=t>22.4;
    C.cop.c.position.set(caught?-7:2-u*5,0,-1.0);C.cop.c.rotation.y=PI;C.cop.spin(caught?0:t*20);putGuy(C.S,-13.5+Math.min(u,1.8)*1.7,0.18,-3.2,PI/2);props.cash.visible=true;props.cash.position.set(0.05,1.12,0.6);
    if(t<22.4)guy.pose(run(t,{reachL:[0.16,1.14,0.58],reachR:[-0.14,1.18,0.62],mouth:'grin'}));else guy.pose(idle(t,{reachL:[0.16,1.14,0.58],reachR:[-0.14,1.18,0.62],mouth:'o',wide:true,mouthSize:1.3,headYaw:0.6}));
    C.shot([-8.5,2.0,7.5],[-10,1.3,-2.5]);if(caught)copLights(C,t);
    if(t>23.6)pill('A CATCH...',W/2,110,56,RED,'#fff',t,20.7,23.55);
    for(let i=0;i<4;i++){const tk=24.0+i*0.25;sirenPip(W*(0.35+i*0.1),H*0.18,1.3,t>tk,t)}if(t>25.8)comic('INSTANTLY!',W*0.5,H*0.36,100,t,25.8,{life:1.1,rot:0.06,fill:RED});flash(t,20.6,0.2)}
  else{clear3d();setBG('red');pill('REMEMBER STEP 1',W/2,120,60,GOLD,'#111',t,27.0,32.1);bag2D(W*0.3,H*0.5,2.2*pop(t,27.0));
    const k=easeOut(seg(t,29.9,30.9));panel(W*0.66,H*0.5,700,230);txt('THE LOOT',W*0.66,H*0.42,44,{stroke:0});txt(moneyStr(200000*(1-k)),W*0.66,H*0.53,110,{fill:k>=1?RED:GREEN,stroke:0});
    if(t>28.0)pill('BUSTED',W*0.3,H*0.8,64,'#111',CYAN,t,28.0,32.1);if(t>29.9){slashOver(W*0.3,H*0.5,300,260,easeOut(seg(t,29.9,30.3)));comic('GONE!',W*0.66,H*0.75,100,t,30.1,{life:1.9,rot:-0.08,fill:RED})}flash(t,26.9,0.2)}
  vignette();cap16(t+T0)};

// ===== Chapter 0: intro (global 0 - 30.48) =====
const T0=0,TT=30.48;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.7){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;C.car.c.position.set(2.8,0,-1.0);C.car.c.rotation.set(0,0,0);C.car.color(0xFF3D7F);C.car.spin(0);
    putGuy(C.S,-0.6,0.18,-3.1,0.25);guy.pose(idle(t,{mouth:t>2.2?'grin':'smile',armR:[0.3,0],armL:[0.3,0]}));
    const k=ease(seg(t,0,3.7));C.shot(mix([0.4,2.6,13.5],[0.2,1.9,8.6],k),mix([0.6,2.3,-3],[0.4,1.7,-3],k));
    titleBlock(easeOut(seg(t,0.05,0.4))*(1-seg(t,3.4,3.68)),'HOW DO YOU GET','RICH FAST IN GTA 6?',110);
    comic('$$$',W*0.66,H*0.55,110,t,2.1,{life:1.3,rot:0.12,fill:GREEN});flash(t,0,0.25)}
  else if(t<10.3){const R=scene('room');tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,w,h);gr.addColorStop(0,'#12082E');gr.addColorStop(1,'#3A1670');c.fillStyle=gr;c.fillRect(0,0,w,h);c.font='900 58px Inter';c.textAlign='center';c.fillStyle='#fff';c.fillText('BANK: $0',w/2,h/2-10);c.fillStyle='#5BE37A';c.font='900 40px Inter';c.fillText('GOAL: $1,000,000',w/2,h/2+60)});
    putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:t>8?'o':'smile',mouthSize:0.7,headPitch:-0.05});
    if(t<7.7){const k=ease(seg(t,3.7,7.7));R.shot(mix([1.8,3.6,7.6],[1.2,3.3,6.6],k),[0,1.7,-2.5])}else R.shot([0.9,2.0,-2.2],[0,1.35,1.8]);
    pill('OUT FOR 2 DAYS',W/2,110,56,PINK,'#fff',t,3.9,10.25);
    if(t>7.7){const a=pop(t,7.7);g.save();g.translate(W*0.5,H*0.3);g.scale(a,a);panel(0,0,1080,150,'rgba(255,255,255,0.95)','#111',75);txt('HOW DO I MAKE MY FIRST $1M?',0,6,62,{fill:'#111',stroke:0});g.restore()}flash(t,3.7,0.2)}
  else if(t<17.1){clear3d();setBG('blue');
    const cols=[PINK,CYAN,GOLD,'#9DFF6B',PINK];for(let i=0;i<5;i++){const tk=10.4+i*0.25;if(t<tk)continue;const s=pop(t,tk);guidePage(W*(0.14+i*0.09),H*0.42+(i%2)*40,1.0*s,(i-2)*0.12,cols[i])}
    txtA('EARLY PLAYER GUIDES',W*0.32,H*0.82,50,easeOut(seg(t,10.6,11.0)),{fill:GOLD,sw:12});
    if(t>12.6){const s=pop(t,12.6);calc(W*0.72,H*0.4,1.3*s);comic('CRUNCH!',W*0.84,H*0.2,70,t,12.8,{life:1.0,rot:0.1})}
    if(t>14.2){const k=easeOut(seg(t,14.2,16.0));g.save();g.globalAlpha=0.95;panel(W/2,H*0.62,1500,190,'rgba(10,12,25,0.9)',GOLD,40);g.restore();txt('BROKE',W*0.27,H*0.62,60,{fill:RED,sw:12});txt('RICH',W*0.73,H*0.62,60,{fill:GREEN,sw:12});
      arrow(W*0.36,H*0.62,lerp(W*0.37,W*0.63,k),H*0.62,GOLD,22)}flash(t,10.3,0.2)}
  else if(t<23.6){clear3d();setBG('neon');txtA('7 STEPS',W/2,150,100,easeOut(seg(t,17.15,17.5)),{fill:GOLD,sw:20});
    stepRoad(t,17.4,['DON\'T LOSE IT','CARS','RACING','UPGRADE','PILOT','VAULTS','SAVINGS'],t>19.9?5:-1);
    if(t>19.9){const pp=W*0.1+W*0.8*5/6;comic('BIGGEST PAYDAY',pp,H*0.75,52,t,19.9,{life:3.6,rot:-0.05,fill:GOLD})}
    if(t>21.7){const s=pop(t,21.7);g.save();g.translate(W*0.5,H*0.79);g.scale(s,s);pill('1 ROUND YELLOW GUY',0,0,48,CYAN,'#111',t,21.7,23.55);g.restore()}flash(t,17.1,0.2)}
  else if(t<28.1){const S=scene('stage');stageOnly();setBG('gold');putGuy(S.S,-3.0,0,0,0.35);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,armR:[0.3,0],armL:[0.3,0],reachR:[-0.15,1.55,0.45],headPitch:-0.1,lookY:0.3}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const v=t<25.0?0:1e6*easeOut(seg(t,25.0,27.2));counterBar(W*0.6,H*0.47,v,1e6,GREEN,'HOW FAST?');stopwatch(W*0.88,H*0.2,90,(t-23.6)*10);
    comic('?',W*0.43,H*0.25,140,t,24.0,{life:3.8,rot:0.1,fill:'#fff'});flash(t,23.6,0.2)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;C.car.c.position.set(-30,0,1.6);const u=t-28.1;
    putGuy(C.S,-2+u*2.6,0.18,-3.1,PI/2);guy.pose(walk(t,9,{mouth:'grin'}));C.shot([-1+u*2.6,1.8,8.5],[-0.5+u*2.6,1.3,-3]);
    comic('LET\'S GET THAT MONEY!',W*0.5,H*0.25,100,t,28.2,{life:2.3,rot:-0.04,fill:GREEN});flash(t,28.1,0.2)}
  vignette();cap16(t+T0)};

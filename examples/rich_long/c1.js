// ===== Chapter 1: step 1, protect your cash (global 30.48 - 57.24) =====
const T0=30.48,TT=26.76;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.2){const C=scene('city');C.mood('day');C.cop.c.visible=false;C.car.c.position.set(-6,0,1.6);C.car.spin(0);atmScreen(C,'WELCOME','INSERT CASH');putGuy(C.S,6.5,0.18,-3.3,0.2);
    guy.pose(idle(t,{mouth:'smile',armL:[0.3,0],armR:[0.3,0]}));C.shot([6.8,2.0,6.5],[7.5,1.5,-3.5]);chapterCard(t,0.05,3.15,1,'DON\'T LOSE WHAT YOU HAVE');flash(t,0,0.2)}
  else if(t<9.2){const S=scene('stage');stageOnly();setBG('teal');putGuy(S.S,-3.2,0,0,0.35);props.cash.visible=true;props.cash.position.set(0.05,1.12,0.6);
    guy.pose(idle(t,{reachL:[0.16,1.14,0.58],reachR:[-0.14,1.18,0.62],mouth:'grin',headPitch:0.2,lookY:-0.5}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const f=t<5.4?0:easeOut(seg(t,5.4,8.0));panel(W*0.62,H*0.42,880,330);txt('POCKET CASH',W*0.62,H*0.3,48,{fill:'#fff',stroke:0});txt(moneyStr(20000*f),W*0.62,H*0.41,110,{fill:GREEN,stroke:0});bar(W*0.62-380,H*0.5,760,40,f,f>=1?RED:GREEN);
    if(t>8.0){const s=pop(t,8.0);g.save();g.translate(W*0.88,H*0.26);g.rotate(0.15);g.scale(s,s);pill('MAX',0,0,60,RED,'#fff',t,8.0,9.2);g.restore()}flash(t,3.2,0.2)}
  else if(t<12.9){const C=scene('city');C.mood('night');C.car.c.position.set(-30,0,1.6);C.cop.c.visible=true;C.cop.c.position.set(3.0,0,-1.0);C.cop.c.rotation.y=PI;C.cop.spin(0);putGuy(C.S,0,0.18,-3.3,0.3);
    const on=(t*4%1)<0.5;C.copR.color.set(on?0xFF2A2A:0x551010);C.copB.color.set(on?0x1A2A55:0x2A6BFF);
    guy.pose(idle(t,{mouth:'o',mouthSize:1.2,wide:true,armL:[2.7,0.3],armR:[2.7,-0.3],bendL:0.4,bendR:0.4}));C.shot([1.2,1.9,7.5],[1.2,1.3,-2.5]);
    g.fillStyle=on?'rgba(255,40,40,0.10)':'rgba(40,90,255,0.10)';g.fillRect(0,0,W,H);
    pill('WASTED',W*0.32,120,64,'#111',RED,t,9.4,12.85);pill('BUSTED',W*0.68,120,64,'#111',CYAN,t,10.4,12.85);flash(t,9.2,0.2)}
  else if(t<15.2){clear3d();setBG('red');txtA('HOW MUCH DO YOU KEEP?',W/2,170,84,easeOut(seg(t,12.95,13.3)),{fill:GOLD,sw:18});
    ['100%','50%','0%'].forEach((o,i)=>{const tk=13.3+i*0.3;if(t<tk)return;const s=pop(t,tk);g.save();g.translate(W*(0.25+i*0.25),H*0.52);g.scale(s,s);panel(0,0,340,240,'rgba(255,255,255,0.12)','#fff',30);g.restore();txt(o,W*(0.25+i*0.25),H*0.53,96*s,{sw:18})});
    stopwatch(W*0.5,H*0.77,70,(t-12.9));flash(t,12.9,0.2)}
  else if(t<17.7){clear3d();setBG('red');const k=easeOut(seg(t,15.2,16.2));panel(W/2,H*0.4,900,300);txt('IN YOUR POCKET',W/2,H*0.3,46,{fill:GOLD,stroke:0});txt(moneyStr(20000*(1-k)),W/2,H*0.43,140,{fill:k>=1?RED:'#fff',stroke:0});
    bills(t,15.25,W/2,H*0.42,28);bigNum('ZERO.',W/2,H*0.75,150,pop(t,15.2),RED);comic('GONE!',W*0.78,H*0.65,90,t,16.9,{life:0.9,rot:0.1,fill:RED});flash(t,15.2,0.3)}
  else if(t<21.2){const S=scene('stage');stageOnly();setBG('blue');putGuy(S.S,2.6,0,0,-0.4);
    const pt=easeOut(seg(t,17.9,18.3));guy.pose(idle(t,{armL:[0.3+1.2*pt,0.2*pt],armR:[0.3,0],mouth:t>20.1?'grin':'smile',headYaw:-0.25}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const a=pop(t,17.8);g.save();g.translate(W*0.36,H*0.45);g.rotate(-0.04);g.scale(a,a);panel(0,0,860,380,'rgba(10,12,25,0.9)',GOLD,36);txt('RULE #1',0,-110,60,{fill:GOLD,stroke:0});txt('BANK IT.',0,20,140,{fill:'#fff',stroke:0});g.restore();
    pill('BORING...',W*0.2,H*0.82,50,'#9AA0AA','#111',t,18.9,21.15);pill('...BUT HUGE',W*0.5,H*0.82,50,GREEN,'#111',t,20.1,21.15);flash(t,17.7,0.2)}
  else{const C=scene('city');C.mood('day');C.cop.c.visible=false;C.car.c.position.set(-6,0,1.6);const dep=t>24.3;const k=easeOut(seg(t,24.3,25.6));atmScreen(C,dep?'BALANCE':'DEPOSIT?',dep?moneyStr(20000*k):'$20,000',dep?'#5BE37A':'#3FF0FF');
    putGuy(C.S,9.5,0.18,-3.55,PI-0.55);props.cash.visible=!dep;props.cash.position.set(0.05,1.25,0.75);
    guy.pose(idle(t,{reachL:dep?undefined:[0.12,1.25,0.72],reachR:dep?undefined:[-0.12,1.25,0.74],armL:dep?[2.5,0.2]:[0.3,0],armR:dep?[2.5,-0.2]:[0.3,0],mouth:dep?'grin':'smile'}));
    const kk=ease(seg(t,21.2,26.76));C.shot(mix([6.2,2.1,1.6],[6.9,2.0,0.8],kk),[9.7,1.5,-4.1]);
    if(dep)check(W*0.78,H*0.3,2.2*pop(t,24.4));comic('SAFE!',W*0.62,H*0.22,90,t,24.6,{life:2.0,rot:0.08,fill:GREEN});flash(t,21.2,0.2)}
  vignette();cap16(t+T0)};

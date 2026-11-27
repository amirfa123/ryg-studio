// ===== Chapter 2: rule of threes (global 59.12 - 90.6) =====
const T0=59.12,TT=31.48;
function cardsRow(t,hl,dim,y=H*0.5){const ts=[6.0,7.6,10.0,12.0];for(let i=0;i<4;i++)threeCard(W*(0.17+i*0.22),y,i,pop(t,ts[i])*1.15,hl===i,dim&&hl!==i?dim:0)}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';
  if(t<2.7){const F=scene('forest');forestReset(F);F.tick(t);const x=lerp(-7,-3,seg(t,0,2.7));props.pack.visible=true;putGuy(F.S,x,0,3.2,PI/2);guy.pose(walk(t,7));F.shot([x+2,1.8,10.5],[x+1.5,1.2,2]);chapterCard(t,0.05,2.65,2,'THE RULE OF THREES')}
  else if(t<5.0){clear3d();setBG('teal');const a=pop(t,2.8);txtA('3',W/2,H*0.42,380*a,a,{fill:GOLD,sw:40});txtA('THE RULE OF THREES',W/2,H*0.75,80,pop(t,3.4),{sw:16});flash(t,2.7,0.2)}
  else if(t<13.8){clear3d();setBG('teal');txtA('HOW LONG YOU CAN LAST WITHOUT...',W/2,120,64,pop(t,5.1),{fill:CYAN,sw:14});cardsRow(t,-1,0);flash(t,5.0,0.15)}
  else if(t<18.4){clear3d();setBG('teal');txtA('WHAT DO PEOPLE WORRY ABOUT FIRST?',W/2,120,64,pop(t,13.9),{fill:GOLD,sw:14});cardsRow(t,-1,0.85);guessBeat(t,15.9,18.35,W/2,H*0.5)}
  else if(t<20.8){clear3d();setBG('teal');cardsRow(t,3,0.6);stamp('LEAST URGENT',W*0.83,H*0.82,56,RED,t,19.6);txtA('FOOD!',W/2,120,90,pop(t,18.4),{fill:GREEN,sw:18});flash(t,18.4,0.15)}
  else if(t<22.7){clear3d();setBG('blue');const a=pop(t,20.85);drop2D(W*0.36,H*0.47,2.6*a);clockFace(W*0.62,H*0.47,150*a,(t-20.8)*3,((t-20.8)*240)%60);txtA('WATER = THE REAL CLOCK',W/2,H*0.13,80,pop(t,21.0),{fill:CYAN,sw:16});flash(t,20.8,0.15)}
  else if(t<28.0){clear3d();setBG('blue');const f=lerp(1,0.86,easeOut(seg(t,22.9,24.8)));bodyWater(W*0.3,H*0.5,1.35,f,'');bigNum('-2%',W*0.3,H*0.12,100,pop(t,23.3),RED);
    hbar2(W*0.68,H*0.38,520,lerp(1,0.55,easeOut(seg(t,25.3,26.8))),CYAN,'THINKING','',pop(t,25.2));hbar2(W*0.68,H*0.6,520,lerp(1,0.55,easeOut(seg(t,25.8,27.3))),GOLD,'STRENGTH','',pop(t,25.7));
    if(t>26.8)stamp('SLIPPING',W*0.68,H*0.8,56,RED,t,26.8);flash(t,22.7,0.15)}
  else{const A=scene('arena');resetRivals(A);A.rivals.forEach(r=>r.visible=false);putGuy(A.S,-8,0,26,0.5);props.pack.visible=true;guy.pose({...heavyPose(t,1),mouth:'o',mouthSize:0.6,blink:false});A.shot([-5.5,1.6,31.5],[-7.6,0.9,26]);
    pill('DAY 3',W*0.2,H*0.18,70,RED,'#fff',t,28.1,31.45);comic('PANT...',W*0.72,H*0.3,90,t,28.6,{life:1.4,rot:0.1,fill:GOLD});comic('PANT...',W*0.76,H*0.45,80,t,30.0,{life:1.3,rot:-0.1,fill:GOLD});flash(t,28.0,0.15)}
  vignette();cap16(t+T0)};

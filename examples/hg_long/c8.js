// ===== Chapter 7: verdict + outro (global 246.12 - 272.0) =====
const T0=246.12,TT=25.88;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';
  if(t<2.3){const A=scene('arena');resetRivals(A);putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t));const k=ease(seg(t,0,2.3));A.shot(mix([18,14,24],[10,8,22],k),[0,1,2]);titleBlock(easeOut(seg(t,0.1,0.4)),'SO...','COULD YOU WIN?',150)}
  else if(t<7.0){clear3d();setBG('neon');txtA("HERE'S THE SURPRISE",W/2,110,70,pop(t,2.4),{fill:CYAN,sw:14});const a=pop(t,4.5);muscle2D(W*0.3,H*0.55,1.3*a,1);if(t>5.9)cross(W*0.32,H*0.52,2.4*pop(t,5.9));
    txtA('THE WINNERS',W*0.68,H*0.42,80,pop(t,4.6),{sw:16});txtA("AREN'T THE STRONGEST",W*0.68,H*0.56,64,pop(t,5.7),{fill:GOLD,sw:14});flash(t,2.3,0.15)}
  else if(t<13.0){const F=scene('forest');forestReset(F);F.tick(t);props.pack.visible=true;putGuy(F.S,6.2,0,1.7,0.3);guy.pose(idle(t,{mouth:'grin',look:0.5}));F.shot([4.6,1.7,8.2],[6.0,1.1,0.8]);
    checklist(W*0.06,H*0.24,['STAY HIDDEN','FIND WATER EARLY','STAY WARM AT NIGHT','DODGE THE BIG DANGERS'],t,7.8,1.15);flash(t,7.0,0.15)}
  else if(t<20.2){clear3d();setBG('neon');const ks=[13.0,14.5,15.7];const lab=['DAY 1','NIGHT 1','FIRE 1'];for(let i=0;i<3;i++){const a=pop(t,ks[i]);if(a>0){g.save();g.translate(W*(0.25+i*0.25),H*0.2);g.scale(a,a);panel(0,0,320,110,'rgba(10,12,25,0.9)',GREEN,26);g.restore();check(W*(0.25+i*0.25)-100,H*0.2,0.7*a);txt(lab[i],W*(0.25+i*0.25)+30,H*0.2,52*a,{sw:12})}}
    oddsGrid(W/2,H*0.56,62,17,1,t-13.0,easeOut(seg(t,16.8,18.5)));if(t>18.6)stamp('BETTER ODDS!',W*0.5,H*0.86,62,GREEN,t,18.6,0);flash(t,13.0,0.15)}
  else{const A=scene('arena');resetRivals(A);A.rivals.forEach(r=>r.visible=false);putGuy(A.S,-2.2,0,6.0,0.35);props.pack.visible=true;guy.pose(idle(t,{reachR:[-0.12,1.52,0.36],poleR:[-1,-0.5,0],look:0.4,mouth:t>23.5?'grin':'o',mouthSize:0.35}));A.shot([1.6,2.0,13.5],[0.4,1.5,3.5]);
    pill('WHAT WOULD YOU GRAB FIRST?',W/2,H*0.14,62,GOLD,'#111',t,20.4,25.85);if(t>23.5)pill('TELL ME IN THE COMMENTS',W/2,H*0.82-60,52,CYAN,'#111',t,23.5,25.85);qmarks(W*0.72,H*0.4,t,21.0);flash(t,20.2,0.15)}
  vignette();cap16(t+T0)};

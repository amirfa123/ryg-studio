// ===== Chapter 0: intro (global 0 - 21.0) =====
const T0=0,TT=21.0;
const DANG=[['THIRST',(x,y,s,t)=>drop2D(x,y,0.9*s)],['COLD',(x,y,s,t)=>thermo(x+10,y+30,0.42*s,33)],['FIRE',(x,y,s,t)=>flame2D(x,y+20,0.8*s,t)],['WASPS',(x,y,s,t)=>bee2D(x,y,1.0*s,t)],['BERRIES',(x,y,s,t)=>berries2D(x,y+10,0.85*s)]];
function dCard(x,y,i,a,t){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);panel(0,0,280,320,'rgba(10,12,25,0.9)',[BLUE,CYAN,ORANGE,GOLD,PURPLE][i],28);g.restore();DANG[i][1](x,y-40*a,a,t);txt(DANG[i][0],x,y+110*a,42*a,{sw:10})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';
  if(t<3.3){const A=scene('arena');resetRivals(A);putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{headYaw:0.3*Math.sin(t)}));const k=ease(seg(t,0,3.3));A.shot(mix([0,16,34],[0,7,22],k),[0,1,2]);
    titleBlock(easeOut(seg(t,0.1,0.5))*(1-seg(t,3.0,3.3)),'COULD YOU ACTUALLY WIN','THE HUNGER GAMES?',130)}
  else if(t<6.0){const A=scene('arena');resetRivals(A);putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{headYaw:0.6*Math.sin((t-3.3)*1.6),mouth:'o',mouthSize:0.5}));const k=ease(seg(t,3.3,6.0));A.shot(mix([1.6,1.9,4.8],[1.2,1.8,5.6],k),[0,1.3,10]);
    pill('NOT A MOVIE',W*0.24,H*0.22,60,'#FFFFFF','#111',t,3.4,4.5);pill('REAL LIFE!',W*0.76,H*0.22,64,RED,'#fff',t,4.6,5.95);flash(t,3.3,0.15)}
  else if(t<9.0){const F=scene('forest');forestReset(F);F.tick(t);const x=lerp(-6,-1,seg(t,6,9));putGuy(F.S,x,0,3.0,PI/2-0.2);guy.pose(walk(t,7,{headYaw:0.4*Math.sin(t*1.5)}));F.shot([x+1.5,2.0,11.5],[x+0.8,1.3,2],'day');
    pill('NOTHING BUT YOUR WITS',W/2,H*0.16,64,GOLD,'#111',t,6.6,8.95);flash(t,6.0,0.15)}
  else if(t<14.8){clear3d();setBG('neon');const hi=t>13.3?17:-1;oddsGrid(W/2,H*0.4,78,hi,1,t-9.1,easeOut(seg(t,13.4,13.9)));
    txtA('48 TRIBUTES',W/2,110,80,pop(t,10.0),{fill:CYAN,sw:16});if(t>13.6){const a=pop(t,13.6);g.save();g.translate(W*0.5,H*0.74);g.scale(a,a);panel(0,0,560,170,'rgba(10,12,25,0.92)',GOLD,30);g.restore();bigNum('1 IN 48',W*0.5,H*0.74,110,a,GOLD)}flash(t,9.0,0.2)}
  else if(t<19.3){clear3d();setBG('red');txtA('WHAT TAKES YOU OUT FIRST?',W/2,130,80,pop(t,14.9),{fill:GOLD,sw:16});for(let i=0;i<5;i++)dCard(W*(0.14+i*0.18),H*0.52,i,pop(t,15.4+i*0.3),t);
    if(t>18.1)txtA('...AND HOW TO BEAT IT',W/2,H*0.82,60,pop(t,18.1),{fill:GREEN,sw:14});flash(t,14.8,0.2)}
  else{const A=scene('arena');resetRivals(A);putGuy(A.S,0,0.16,10,0);guy.pose({...idle(t),armL:[2.6,0.3],armR:[2.6,-0.3],mouth:'grin',jump:0.05*Math.abs(Math.sin(t*8))});A.shot([0.8,1.6,16.5],[0,1.4,10]);
    comic("LET'S GO!",W/2,H*0.25,140,t,19.4,{life:1.6,fill:GREEN});flash(t,19.3,0.15)}
  vignette();cap16(t+T0)};

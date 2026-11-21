// ===== Chapter 7: bonus round, what not to waste time on (global 193.00 - 211.80) =====
const T0=193.00,TT=18.8;
function card(x,y,title,col,a,draw,crossK){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);panel(0,0,520,600,'rgba(10,12,25,0.9)',col,34);g.restore();g.save();g.translate(x,y-60);g.scale(a*1.7,a*1.7);draw();g.restore();txtA(title,x,y+200,48,a,{fill:col,sw:10});if(crossK>0)cross(x,y-60,2.4*backOut(clamp(crossK)))}
function wallet(){g.fillStyle='#8C5E36';g.strokeStyle='#111';g.lineWidth=7;rr(-110,-70,220,140,18);g.fill();g.stroke();g.fillStyle='#5BC26A';g.fillRect(-60,-90,90,40);g.strokeRect(-60,-90,90,40);txt('$200',0,10,56,{fill:GOLD,sw:10})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.0){const S=scene('stage');stageOnly();setBG('neon');putGuy(S.S,0,0,0,0);guy.pose(idle(t,{mouth:'smile',armL:[0.9,-0.3],armR:[0.9,0.3],headYaw:0.15*Math.sin(t*3)}));S.shot([0,1.4,8],[0,1.1,0]);
    chapterCard(t,0.05,2.95,'BONUS','DON\'T WASTE YOUR TIME');flash(t,0,0.2)}
  else{clear3d();setBG('neon');const xs=[W*0.2,W*0.5,W*0.8];
    card(xs[0],H*0.47,'MUGGING',GOLD,pop(t,3.1),wallet,seg(t,5.3,5.6));
    card(xs[1],H*0.47,'TOWING ATMs',CYAN,pop(t,6.4),()=>{towTruck2D(40,-10,0.75);snail(0,95,0.5)},seg(t,9.2,9.5));
    card(xs[2],H*0.47,'TREASURE DIVING',PINK,pop(t,11.0),()=>{diver2D(0,-10,0.9,t)},seg(t,14.6,14.9));
    if(t>8.4&&t<11){const on=(t*4%1)<0.5;sirenPip(xs[1],H*0.12,1.4,true,t)}
    if(t>15.7){const s=pop(t,15.7);g.save();g.translate(W/2,H*0.83);g.scale(s,s);pill('SKIP THESE FOR SPEED',0,0,56,RED,'#fff',t,15.7,18.8);g.restore()}flash(t,3.0,0.2)}
  vignette();cap16(t+T0)};

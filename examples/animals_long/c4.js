// ===== Chapter 3: shark (global 144.22 - 174.5) =====
const T0=144.22,TT=30.28;
const BE=scene('beach');
function globe2D(x,y,R,a=1){g.save();g.globalAlpha=a;g.fillStyle='#2E7FD6';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.stroke();g.save();g.beginPath();g.arc(x,y,R,0,7);g.clip();g.fillStyle='#5DCB72';
  for(const [cx,cy,rx,ry] of [[-0.45,-0.35,0.32,0.22],[-0.3,0.25,0.16,0.34],[0.15,-0.4,0.22,0.18],[0.25,0.05,0.18,0.3],[0.55,-0.25,0.3,0.2],[0.65,0.45,0.18,0.12]]){g.beginPath();g.ellipse(x+cx*R,y+cy*R,rx*R,ry*R,0,0,7);g.fill()}g.restore();g.restore()}
function foot2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.ellipse(0,0,46,90,0.1,0,7);g.fill();g.stroke();for(let i=0;i<5;i++){g.beginPath();g.arc(-30+i*15,-88+Math.abs(i-1)*6,10-i,0,7);g.fill();g.stroke()}g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;BE.wm.color.set(0x2EC4C9);BE.wm.opacity=0.55;
  const S=BE.shark;
  if(t<5.1){const a=t*0.9;S.s.position.set(Math.cos(a)*3.2,t<2.2?-0.3:-0.9,-5+Math.sin(a)*2.2);S.s.rotation.set(0,-a-PI/2,0);S.anim(t,6);
    if(t<2.2){BE.board.position.set(1.5,0.12,3.5);BE.board.rotation.set(0,0.4,0);putGuy(BE.S,-0.5,0.05,3.0,PI);guy.pose(idle(t));BE.shot([3.5,5.2,9.0],[0,0,-2])}
    else{BE.board.position.set(0,0.04,-5);BE.board.rotation.set(0,PI/2,0);putGuy(BE.S,0,0.12,-5,0.3);guy.pose({...idle(t),armL:[1.4,0],armR:[1.4,0],legL:[0,0,0.15],legR:[0,0,0.15],mouth:'o',mouthSize:0.5,look:-0.5,lookY:-0.7,jump:0.02*Math.sin(t*2)});BE.shot([6.0,3.6,3.5],[0,0.4,-5])}
    chapterCard(t,0.05,2.2,3,'THE SHARK');pill('SCARIEST REPUTATION',W/2,110,56,RED,'#fff',t,2.3,5.05);comic('DUN DUN...',W*0.78,H*0.3,90,t,3.0,{life:2.0,rot:-0.06,fill:CYAN})}
  else if(t<12.3){clear3d();setBG('blue');globe2D(W/2,H*0.52,250,pop(t,5.15));txtA('UNPROVOKED BITES',W/2,110,72,pop(t,5.3),{fill:GOLD,sw:16});txtA('WHOLE WORLD · ONE YEAR',W/2,190,46,pop(t,6.0),{sw:10});
    if(t>9.3){const n=t<12.1?Math.floor(10+hash(Math.floor(t*12))*990):65;const p=1+0.05*Math.sin(t*14);panel(W/2,H*0.52,420,200,'rgba(10,12,25,0.85)',GOLD,30);txt('?',W/2,H*0.52+6,130*p,{fill:GOLD,stroke:0});pill('GUESS!',W/2,H*0.76,56,GOLD,'#111',t,9.3,12.3)}
    else for(let i=0;i<3;i++)txtA('?',W*(0.25+i*0.25),H*(0.5+0.04*Math.sin(t*3+i)),120,pop(t,6.5+i*0.3),{fill:GOLD,sw:18});flash(t,5.1,0.15)}
  else if(t<19.9){clear3d();setBG('blue');globe2D(W*0.3,H*0.52,250);for(let i=0;i<65;i++){if(t<12.3+i*0.012)continue;const a=hash(i*3.3)*PI*2,r=hash(i*1.9)**0.5*220;const red=i<9&&t>15.2;g.fillStyle=red?RED:'#fff';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.arc(W*0.3+Math.cos(a)*r,H*0.52+Math.sin(a)*r,red?13:9,0,7);g.fill();g.stroke()}
    txtA('65',W*0.68,H*0.36,220,pop(t,12.35),{fill:GOLD,sw:28});txtA('IN THE ENTIRE WORLD',W*0.68,H*0.52,52,pop(t,13.4),{sw:12});if(t>15.2)txtA('9 FATAL',W*0.68,H*0.66,80,pop(t,15.2),{fill:RED,sw:16});
    if(t>16.6){const k=easeOut(seg(t,16.8,17.8));g.save();g.translate(W*0.68,H*0.82);g.fillStyle='rgba(10,12,25,0.9)';g.strokeStyle='#111';g.lineWidth=6;rr(-360,-50,720,100,40);g.fill();g.stroke();txt('U.S. ≈ 4 IN 10 BITES',0,4,50,{fill:CYAN,stroke:0});g.restore()}
    comic('THAT\'S IT?!',W*0.86,H*0.2,70,t,13.2,{life:1.6,rot:0.1,fill:GREEN});flash(t,12.3,0.25)}
  else if(t<21.6){clear3d();setBG('blue');leonida(W*0.5,H*0.53,1.6,1);txtA('FLORIDA LED THE U.S.',W/2,110,72,pop(t,19.95),{fill:GOLD,sw:16});shark2D(W*0.66,H*0.66,0.9*pop(t,20.3),t);flash(t,19.9,0.2)}
  else if(t<25.6){BE.wm.color.set(0x7A8A5A);BE.wm.opacity=0.82;const a=t*1.4;S.s.position.set(-0.5+Math.cos(a)*1.6,-1.1,-6+Math.sin(a)*1.0);S.s.rotation.set(0,-a-PI/2,0);S.anim(t,6);
    BE.board.position.set(0,0.04,-5);BE.board.rotation.set(0,PI/2,0);putGuy(BE.S,0,0.12,-5,0.3);guy.pose({...idle(t),armL:[1.4,0],armR:[1.4,0],mouth:'smile',jump:0.02*Math.sin(t*2)});BE.shot([5.5,3.0,2.5],[0,0.3,-5]);
    pill('SURFERS',W*0.2,H*0.2,52,CYAN,'#111',t,21.65,25.55);pill('FEET & LEGS',W*0.5,H*0.2,52,GOLD,'#111',t,22.6,25.55);pill('MURKY WATER',W*0.8,H*0.2,52,'#B59C6A','#111',t,24.0,25.55);if(t>22.6)foot2D(W*0.84,H*0.6,0.9*pop(t,22.7));flash(t,21.6,0.2)}
  else{clear3d();setBG('teal');const a=pop(t,25.6),b=pop(t,27.5);
    g.save();g.translate(W*0.3,H*0.5);g.scale(a,a);panel(0,0,600,420,'rgba(10,12,25,0.9)',RED,34);txt('SCARY?',0,-110,80,{fill:'#fff',stroke:0});g.restore();if(t>26.6){txtA('YES',W*0.3,H*0.56,140,pop(t,26.6),{fill:RED,sw:20})}
    if(t>27.5){g.save();g.translate(W*0.7,H*0.5);g.scale(b,b);panel(0,0,600,420,'rgba(10,12,25,0.9)',GREEN,34);txt('LIKELY?',0,-110,80,{fill:'#fff',stroke:0});g.restore();if(t>28.4)txtA('NOT REALLY',W*0.7,H*0.56,78,pop(t,28.4),{fill:GREEN,sw:18})}flash(t,25.6,0.2)}
  vignette();cap16(t+T0)};

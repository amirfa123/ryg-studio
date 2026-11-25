// ===== Chapter 5b: E = mc^2 (global 228.52 - 260.88) =====
const T0=228.52,TT=32.36;
function space(t){setBG('radial-gradient(circle at 50% 50%,#1A1F4A,#05060F 75%)');g.save();for(let i=0;i<90;i++){g.globalAlpha=0.4+0.6*Math.abs(Math.sin(t*1.5+i));g.fillStyle='#fff';g.beginPath();g.arc(W*hash(i*3.7),H*hash(i*9.1),1+hash(i)*2.5,0,7);g.fill()}g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;
  if(t<2.4){grMood(false,t);screen(1,'#3FF0FF');stand(GR.S,0,0,0,0.2);guy.pose(idle(t,{mouth:'o',mouthSize:0.8,wide:true,armL:[0.9,0],armR:[0.9,0],bendL:0.6,bendR:0.6}));grShot([1.8,1.7,5.6],[0,1.25,0]);
    comic('WAIT...',W*0.72,H*0.3,120,t,0.15,{life:2.2,rot:0.08,fill:'#FFD23F'});txtA('IT GETS CRAZIER',W*0.24,H*0.55,70,pop(t,0.9),{fill:CYAN,sw:16})}
  else if(t<8.7){clear3d();setBG('neon');eqn(W/2,H*0.48,1.0,pop(t,2.6));if(t>6.3){txtA('MASS = ENERGY',W/2,H*0.85-30,80,pop(t,6.4),{fill:GOLD,sw:16})}txtA("EINSTEIN'S FAMOUS EQUATION",W/2,H*0.1,56,pop(t,2.5),{sw:12});flash(t,2.4,0.15)}
  else if(t<15.0){clear3d();space(t);const k=ease(seg(t,9.4,11.6));dotsGuy(W*0.3,H*0.6,1.6,k,t);txtA('ALL OF YOU → PURE ENERGY',W*0.3,H*0.14,58,pop(t,8.8),{fill:CYAN,sw:14});
    if(t>11.6){const v=Math.round(1500*easeOut(seg(t,11.7,13.9)));panel(W*0.72,H*0.5,640,260,'rgba(10,12,25,0.9)',GOLD,30);txt(v.toLocaleString('en-US'),W*0.72,H*0.46,130,{stroke:0,fill:GOLD});txt('MEGATONS',W*0.72,H*0.58,52,{stroke:0,fill:'#fff'})}flash(t,8.7,0.15)}
  else if(t<18.4){clear3d();setBG('red');txtA('BIGGEST BOMB EVER TESTED',W*0.3,H*0.14,52,pop(t,15.05),{sw:12});mushroom2D(W*0.16,H*0.68,0.9*pop(t,15.1),t);
    hbar2(W*0.38,H*0.42,800,50/1500,'#FF9A50','BOMB','~50 MT',seg(t,15.3,15.8));hbar2(W*0.38,H*0.62,800,1,'#FFD23F','YOU','~1,500 MT',seg(t,15.8,17.0));txtA('30×!',W*0.6,H*0.8,110,pop(t,16.2),{fill:'#fff',sw:20});flash(t,15.0,0.15)}
  else if(t<25.8){clear3d();space(t);earth2D(W*0.4,H*0.55,250,t*0.05);txtA('COULD YOU BLOW UP A PLANET?',W/2,H*0.12,72,pop(t,18.5),{fill:GOLD,sw:16});
    if(t>21.3)txtA('HOW MANY OF YOU?',W*0.76,H*0.32,64,pop(t,21.4),{fill:CYAN,sw:14});guessBeat(t,23.4,25.8,W*0.76,H*0.6);flash(t,18.4,0.15)}
  else if(t<28.0){clear3d();space(t);earth2D(W*0.5,H*0.55,230,t*0.05);const n=Math.floor(160*clamp(seg(t,25.9,27.0)));for(let i=0;i<n;i++){const a=i/160*PI*2*3+hash(i)*0.2,rr0=280+(i%3)*28+hash(i*3)*14;g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=2;g.beginPath();g.arc(W*0.5+Math.cos(a)*rr0*1.2,H*0.55+Math.sin(a)*rr0*0.95,7,0,7);g.fill();g.stroke()}
    txtA('35 TRILLION',W/2,H*0.14,130,pop(t,26.2),{fill:GOLD,sw:24});txtA('OF YOU!',W*0.86,H*0.55,70,pop(t,26.8),{sw:14});flash(t,25.8,0.25)}
  else{grMood(false,t);screen(1,'#3FF0FF');stand(GR.S,0,0,0,0.2);guy.pose(idle(t,{armL:[0.75,-0.5],armR:[0.75,-0.5],bendL:1.2,bendR:1.2,twistL:-1,twistR:1,mouth:'smile',headRoll:0.12}));grShot([2.4,1.8,7.0],[0,1.2,0]);if(t>29.2){const a=pop(t,29.2,0.35);g.save();g.translate(W/2,H*0.17);g.rotate(-0.04);g.scale(1.4-0.4*clamp(a),1.4-0.4*clamp(a));g.globalAlpha=clamp(a*1.5);g.fillStyle='rgba(10,12,25,0.85)';rr(-560,-100,1120,200,30);g.fill();g.strokeStyle=RED;g.lineWidth=16;g.stroke();g.restore();txtA('NOT A PLANET BUSTER',W/2,H*0.17,92,clamp(a),{fill:RED,sw:18})}flash(t,28.0,0.15)}
  vignette();cap16(t+T0)};

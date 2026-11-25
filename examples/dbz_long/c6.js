// ===== Chapter 3b: mantis shrimp + speed of sound (global 130.0 - 160.64) =====
const T0=130.0,TT=30.64;
const SEA='linear-gradient(#0B6E8A 0%,#0A4C6E 55%,#062B44 100%)';
function seaBits(t){g.save();for(let i=0;i<24;i++){const ph=((t*0.12+hash(i*3.1))%1);g.globalAlpha=0.25;g.fillStyle='#BFF6FF';g.beginPath();g.arc(W*hash(i*7.3),H*(1-ph),4+hash(i)*8,0,7);g.fill()}g.restore();
  g.save();g.fillStyle='#D9B56A';g.beginPath();g.moveTo(0,H*0.86);for(let x=0;x<=W;x+=60)g.lineTo(x,H*0.86+10*Math.sin(x*0.01));g.lineTo(W,H);g.lineTo(0,H);g.closePath();g.fill();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;
  if(t<6.8){clear3d();setBG('neon');txtA('FASTEST PUNCH ON EARTH?',W/2,120,84,pop(t,0.1),{fill:GOLD,sw:18});
    if(t<4.8){g.save();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;rr(W/2-150,H*0.62,300,220,10);g.fill();g.stroke();g.fillStyle='#C9CDD6';rr(W/2-450,H*0.7,300,140,10);g.fill();g.stroke();rr(W/2+150,H*0.74,300,100,10);g.fill();g.stroke();g.restore();
      txtA('1',W/2,H*0.72,90,1,{fill:'#111',stroke:0});txtA('?',W/2,H*0.44,220,pop(t,0.8),{fill:'#fff',sw:28});
      if(t>3.2){silhouette(W*0.25,H*0.52,1.3*pop(t,3.2),'#3FF0FF');cross(W*0.25,H*0.48,1.8*pop(t,3.5));txtA('NOT A HUMAN',W*0.25,H*0.27,56,pop(t,3.5),{fill:RED,sw:12})}}
    else guessBeat(t,4.8,6.8,W/2,H*0.55)}
  else if(t<11.8){clear3d();setBG(SEA);seaBits(t);const a=easeOut(seg(t,6.85,7.4));shrimp2D(W*0.45,H*0.55,1.7*a,t,0);pill('MANTIS SHRIMP',W/2,H*0.16,72,PINK,'#fff',t,7.0,11.75);
    if(t>9.6)speedo(W*0.85,H*0.5,150,23*easeOut(seg(t,9.7,10.6)),30,'M/S','CLUB STRIKE');comic('TA-DA!',W*0.2,H*0.3,90,t,7.0,{life:1.0,rot:-0.1,fill:'#FFD23F'});flash(t,6.8,0.2)}
  else if(t<18.8){clear3d();setBG(SEA);seaBits(t);const st=t<12.3?0:t<12.36?seg(t,12.3,12.36):1-0.8*seg(t,12.5,13.2);shrimp2D(W*0.3,H*0.58,1.1,t,st);const crack=t>16.6;snail2D(W*0.72,H*0.66,1.3,crack?1:0);
    if(t>12.3&&t<12.6){g.save();g.strokeStyle='#fff';g.lineWidth=8;for(let i=0;i<5;i++){g.beginPath();g.moveTo(W*0.5,H*(0.5+i*0.04));g.lineTo(W*0.6,H*(0.5+i*0.04));g.stroke()}g.restore()}
    const bb=seg(t,13.9,14.6),col=seg(t,16.0,16.4);if(bb>0&&col<1){for(let i=0;i<14;i++){const a=hash(i*2.7)*PI*2,rr0=(20+hash(i*5)*90)*(1-col);g.save();g.globalAlpha=clamp(bb*2)*(1-col);g.strokeStyle='#E8FBFF';g.lineWidth=5;g.fillStyle='rgba(220,250,255,0.35)';g.beginPath();g.arc(W*0.64+Math.cos(a)*rr0,H*0.6+Math.sin(a)*rr0,(10+hash(i)*24)*(1-col*0.9),0,7);g.fill();g.stroke();g.restore()}
      txtA('BUBBLES',W*0.62,H*0.3,60,bb*(1-col),{fill:'#BFF6FF',sw:12})}
    if(t>16.2&&t<16.5){const k=seg(t,16.2,16.5);g.save();g.globalAlpha=1-k;g.fillStyle='#FFFFFF';g.beginPath();g.arc(W*0.64,H*0.6,60+300*k,0,7);g.fill();g.restore()}
    comic('BANG!',W*0.64,H*0.3,120,t,16.25,{life:1.0,rot:0.1,fill:'#FFD23F'});comic('WHACK!',W*0.55,H*0.35,100,t,12.32,{life:0.9,rot:-0.1,fill:'#FF3DA6'});pill('HIT #2!',W*0.8,H*0.18,60,GOLD,'#111',t,17.0,18.75);flash(t,11.8,0.15)}
  else if(t<22.7){clear3d();setBG('neon');txtA('SPEED OF SOUND?',W/2,120,84,pop(t,18.85),{fill:GOLD,sw:18});
    hbar2(W*0.3,H*0.38,1100,10/343,'#3FF0FF','BOXER','10 m/s',seg(t,19.0,19.6));hbar2(W*0.3,H*0.56,1100,23/343,'#FF3DA6','SHRIMP','23 m/s',seg(t,19.4,20.0));hbar2(W*0.3,H*0.74,1100,1,'#FFD23F','SOUND','343 m/s',seg(t,20.3,21.6));flash(t,18.8,0.15)}
  else if(t<26.9){clear3d();setBG('gold');const a=pop(t,24.0);txtA('34×',W/2,H*0.48,360*clamp(a),a,{fill:'#fff',sw:40});txtA('FASTER THAN A BOXER',W/2,H*0.78,72,pop(t,25.0),{fill:'#111',stroke:0});txtA('YOUR FIST WOULD NEED TO GO...',W/2,H*0.14,64,pop(t,22.75),{sw:14});flash(t,22.7,0.15)}
  else{grMood(false,t);screen(1,'#3FF0FF');stand(GR.S,0,0,0,0.4);guy.pose(punchPose(t,0.3,{mouth:'o',mouthSize:0.7,wide:true}));grShot([2.6,1.8,7.4],[0.2,1.2,0]);
    g.save();g.fillStyle='rgba(10,12,25,0.85)';rr(W*0.62,H*0.25,600,420,30);g.fill();g.strokeStyle=RED;g.lineWidth=12;g.stroke();g.restore();bone(W*0.62+300,H*0.25+190,1.6*pop(t,27.2),1);txtA('TORN APART',W*0.62+300,H*0.25+350,64,pop(t,27.7),{fill:RED,sw:14});
    txtA('NOPE.',W*0.2,H*0.3,110,pop(t,29.0),{fill:'#fff',sw:20});flash(t,26.9,0.15)}
  vignette();cap16(t+T0)};

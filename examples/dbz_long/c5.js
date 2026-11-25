// ===== Chapter 3: the punch (global 117.76 - 130.0) =====
const T0=117.76,TT=12.24;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;const G=gymExtras();G.bar.visible=false;G.bag.visible=true;
  if(t<8.9){const rate=0.5,ph=t*2*PI/rate;G.bag.rotation.set(0.1*Math.abs(Math.sin(ph-0.6)),0,0.03*Math.sin(ph));putGuy(G.S,0,0,0.25,0);guy.pose(punchPose(t,rate));
    if(t<2.3){G.shot([5.6,2.3,5.0],[0,1.3,0.8]);chapterCard(t,0.05,2.25,3,'THE PUNCH')}
    else{const k=ease(seg(t,2.3,8.9));G.shot(mix([8.6,2.1,1.8],[7.4,2.0,1.4],k),[0,1.05,0.85]);
      speedo(W*0.82,H*0.3,150,t>4.4?10*easeOut(seg(t,4.4,5.2))+0.4*Math.sin(t*20):0,15,'M/S','FIST SPEED');
      if(t>6.9){panel(W*0.82,H*0.68,460,150,'rgba(10,12,25,0.9)',PINK,30);txt(Math.round(5000*easeOut(seg(t,6.9,8.2))).toLocaleString('en-US')+' N',W*0.82,H*0.68,84,{stroke:0,fill:PINK})}
      pill('ELITE BOXER',W*0.2,110,56,GOLD,'#111',t,2.4,8.85);comic('POW!',W*0.4,H*0.3,100,t,3.2,{life:0.5,rot:-0.1,fill:'#FFD23F'});comic('BAM!',W*0.45,H*0.36,100,t,5.7,{life:0.5,rot:0.1,fill:'#FF3DA6'});flash(t,2.3,0.12)}}
  else{clear3d();setBG('pink');const k=seg(t,9.0,9.6),y=lerp(-H*0.3,H*0.58,k*k);const [sx,sy]=shake(t,9.6,30,0.6);g.save();g.translate(sx,sy);
    g.fillStyle='rgba(0,0,0,0.25)';g.beginPath();g.ellipse(W/2,H*0.74,260*k,40*k,0,0,7);g.fill();weight2D(W/2,y,1.6,'500 KG');g.restore();
    comic('WHAM!',W*0.25,H*0.3,130,t,9.62,{life:1.4,rot:-0.12,fill:'#FFD23F'});txtA('≈ HALF A TONNE',W/2,H*0.14,90,pop(t,9.4),{fill:'#fff',sw:18});
    txtA('FOR AN INSTANT',W*0.76,H*0.36,56,pop(t,11.3),{fill:GOLD,sw:12});flash(t,8.9,0.15)}
  vignette();cap16(t+T0)};

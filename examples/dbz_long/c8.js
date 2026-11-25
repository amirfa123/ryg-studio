// ===== Chapter 5: the energy blast (global 195.64 - 228.52) =====
const T0=195.64,TT=32.88;
function fatBlock(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFE58A';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(-40,-20);g.lineTo(0,-40);g.lineTo(40,-20);g.lineTo(40,20);g.lineTo(0,40);g.lineTo(-40,20);g.closePath();g.fill();g.stroke();g.fillStyle='#FFF4C2';g.beginPath();g.moveTo(-40,-20);g.lineTo(0,-40);g.lineTo(40,-20);g.lineTo(0,0);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();g.restore()}
function candle(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#F4F0E0';g.strokeStyle='#111';g.lineWidth=7;rr(-40,-20,80,200,10);g.fill();g.stroke();const f=1+0.1*Math.sin(t*13);g.fillStyle='#FFB020';g.beginPath();g.moveTo(0,-110*f);g.quadraticCurveTo(36,-50,0,-26);g.quadraticCurveTo(-36,-50,0,-110*f);g.fill();g.stroke();g.fillStyle='#FFF2A0';g.beginPath();g.ellipse(0,-50,10,18,0,0,7);g.fill();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;
  if(t<2.7){grMood(false,t);screen(1,'#7FE8FF');stand(GR.S,0,0,0,0.3);guy.pose(chargePose(t));auraOn(GR.S,0,0,0,t,easeOut(seg(t,0.2,0.8)));const k=ease(seg(t,0,2.7));grShot(mix([3.2,1.8,8.4],[2.4,1.6,6.6],k),[0,1.1,0]);chapterCard(t,0.05,2.6,5,'THE ENERGY BLAST')}
  else if(t<5.9){grMood(false,t);screen(1,'#7FE8FF');stand(GR.S,-1.5,0,0,PI/2);guy.pose(blastPose(t,easeOut(seg(t,2.8,3.2)),{mouth:t>4.0?'o':'teeth',mouthSize:0.6}));const fz=t>3.2?0.6+0.3*Math.sin(t*30)*(1-seg(t,3.8,4.4)):0;beamOn(GR.S,-0.6,1.35,0,PI/2,fz*(1-seg(t,4.0,4.4)),t,0.6);
    grShot([0.6,1.8,8.8],[0.3,1.2,0]);if(t>4.3)for(let i=0;i<3;i++)txtA('?',W*(0.55+i*0.06),H*(0.3-0.04*Math.sin(t*3+i)),110,pop(t,4.3+i*0.2),{fill:GOLD,sw:16});comic('fzzt...',W*0.55,H*0.45,70,t,4.0,{life:1.0,rot:0.1,fill:'#9AA0AA'});
    txtA('WHERE WOULD THE ENERGY COME FROM?',W*0.6,H*0.72,56,pop(t,2.8),{sw:14});flash(t,2.7,0.15)}
  else if(t<9.2){clear3d();setBG('neon');silhouette(W/2,H*0.62,2.2,'#FFCC2E');auraGlow2D(W/2,H*0.75,200,t,clamp(seg(t,6.4,7.2)));txtA("YOU'RE ALREADY",W/2,H*0.14,72,pop(t,6.0),{sw:16});txtA('CARRYING IT',W/2,H*0.26,96,pop(t,7.3),{fill:CYAN,sw:18});flash(t,5.9,0.15)}
  else if(t<17.5){clear3d();setBG('teal');const n=Math.floor(15*clamp(seg(t,9.4,11.4)));for(let i=0;i<n;i++){const r0=Math.floor(i/5),c=i%5;fatBlock(W*0.2+c*95+(r0%2)*45,H*0.75-r0*70,1.15)}
    txtA('15 KG OF BODY FAT',W*0.3,H*0.2,70,pop(t,10.6),{fill:'#FFE58A',sw:16});
    if(t>14.0){panel(W*0.74,H*0.5,600,300,'rgba(10,12,25,0.9)',GOLD,30);txt('≈ 9',W*0.74,H*0.45,130,{stroke:0,fill:GOLD});txt('CALORIES PER GRAM',W*0.74,H*0.6,44,{stroke:0,fill:'#fff'})}
    if(t>16.0)txtA('PACKED!',W*0.74,H*0.2,90,pop(t,16.0),{fill:GREEN,sw:18});flash(t,9.2,0.15)}
  else if(t<23.2){clear3d();setBG('red');const n=Math.floor(27*clamp(seg(t,17.7,21.0)));for(let i=0;i<n;i++){const c=i%9,r0=Math.floor(i/9);tnt2D(W*0.14+c*100,H*0.8-r0*130,0.9*pop(t,17.7+i*0.12))}
    const v=Math.round(135*clamp(seg(t,17.7,21.0)));panel(W*0.78,H*0.36,520,200,'rgba(10,12,25,0.9)',RED,30);txt(v+' KG',W*0.78,H*0.33,100,{stroke:0,fill:RED});txt('OF TNT',W*0.78,H*0.43,48,{stroke:0,fill:'#fff'});
    txtA('SAME ENERGY AS...',W*0.4,H*0.14,64,pop(t,17.6),{sw:14});flash(t,17.5,0.15)}
  else if(t<27.7){const R=scene('rocky');const ex=seg(t,25.0,27.6);R.boulder.visible=t<25.0;R.boulder.position.set(-6,3.2,0);R.explode(ex,[-6,3.2,0]);R.fireball.visible=t>24.9&&t<26.8;const fk=seg(t,24.9,26.8);R.fireball.position.set(-6,3.2,0);R.fireball.scale.setScalar(1+8*easeOut(fk));R.fireball.material.opacity=0.95*(1-fk);
    putGuy(R.S,3.0,0,0,-PI/2);const bk=easeOut(seg(t,23.5,24.0));guy.pose(blastPose(t,bk));auraOn(R.S,3.0,0,0,t,1);beamOn(R.S,2.1,1.35,0,-PI/2,t<25.6?lerp(0,7.4,easeOut(seg(t,24.0,24.9))):0,t,1.2);
    const [sx,sy]=shake(t,25.0,0.6,1.2);R.shot([4.0+sx,2.6+sy,15.5],[-1.6,2.4,0]);comic('KA-BOOM!',W*0.32,H*0.28,150,t,25.05,{life:1.8,rot:-0.08,fill:'#FFD23F'});txtA('ALL AT ONCE?',W*0.72,H*0.16,72,pop(t,23.3)*(1-seg(t,24.8,25.0)),{fill:CYAN,sw:16});flash(t,23.2,0.15);flash(t,25.0,0.25)}
  else{clear3d();setBG('blue');txtA("YOU JUST CAN'T.",W/2,H*0.16,96,pop(t,27.75),{fill:RED,sw:18});candle(W*0.32,H*0.56,1.3*pop(t,29.0),t);heart(W*0.68,H*0.56,1.9*(1+0.1*Math.max(0,Math.sin(t*2*PI*1.2)))*pop(t,30.6),'#E23B3B');
    txtA('BURNS SLOWLY',W*0.32,H*0.86-30,56,pop(t,29.4),{fill:GOLD,sw:12});txtA('KEEPS YOU ALIVE',W*0.68,H*0.86-30,56,pop(t,30.9),{fill:'#FF8A8A',sw:12});flash(t,27.7,0.15)}
  vignette();cap16(t+T0)};

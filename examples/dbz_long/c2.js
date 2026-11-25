// ===== Chapter 1b: blood (global 41.92 - 61.04) =====
const T0=41.92,TT=19.12;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;SCALE.visible=false;
  if(t<2.5){clear3d();setBG('red');const b=1+0.1*Math.max(0,Math.sin(t*2*PI*1.4));heart(W/2,H*0.55,3.2*b*pop(t,0.05),'#E23B3B');
    txtA('THE REAL KILLER:',W/2,H*0.17,64,pop(t,0.1),{sw:14});txtA('YOUR BLOOD',W/2,H*0.3,110,pop(t,1.1),{fill:'#FF6A6A',sw:20})}
  else if(t<10.2){clear3d();setBG('blue');const flow=1-seg(t,6.6,8.2);g.save();g.translate(-48,-135);g.scale(0.75,0.75);bodyDiagram(t,1,flow);g.restore();
    const gv=lerp(1,6,easeOut(seg(t,6.6,8.4)));gauge(W*0.74,H*0.42,170,gv,10,gv>4?'#FF4A4A':'#5BE37A','GRAVITY');
    if(t<6.6){txtA('HEART PUMPS UP',W*0.74,H*0.78,62,pop(t,3.2),{fill:GREEN,sw:14});g.save();g.globalAlpha=clamp(pop(t,3.2));arrow(W*0.5,H*0.55,W*0.5,H*0.3,GREEN,30);g.restore()}
    else{txtA('BLOOD SINKS DOWN',W*0.74,H*0.78,62,pop(t,7.6),{fill:RED,sw:14});g.save();g.globalAlpha=clamp(pop(t,7.6));arrow(W*0.5,H*0.45,W*0.5,H*0.8,RED,30);g.restore()}
    flash(t,2.5,0.15)}
  else if(t<14.4){const sp=t*2.4;RIG.rotation.y=sp;POD.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.98,0);holder.rotation.set(0,PI,0);holder.scale.setScalar(0.9);
    const bo=seg(t,12.2,13.4);guy.pose({...SIT,armL:[0.25,0],armR:[0.25,0],mouth:bo>0.3?'o':'teeth',mouthSize:0.5,wide:bo<0.5,blink:bo>0.8,headPitch:0.3*bo,headRoll:0.2*bo});
    CF.cam.position.set(0,5.5,15.5);CF.cam.lookAt(0,1.2,0);setBG('#222838');r.setClearColor(0,0);r.render(CF.S,CF.cam);
    const gv=lerp(1,6,easeOut(seg(t,10.4,13.2)));gauge(W*0.85,H*0.25,130,gv,10,gv>4?'#FF4A4A':'#5BE37A','');tunnel(bo*0.9);
    pill('CENTRIFUGE TEST',W*0.25,110,52,CYAN,'#111',t,10.3,12.0);if(t>12.4)txtA('BLACKOUT AT 4–6 G',W/2,H*0.5,90,pop(t,12.4),{fill:'#fff',sw:18});flash(t,10.2,0.15)}
  else{clear3d();setBG('neon');txtA('HOW MANY G CAN YOU TAKE?',W/2,120,76,pop(t,14.45),{fill:GOLD,sw:16});const S=1050/12;
    hbar2(W*0.3,H*0.36,1050,5/12,'#5BE37A','UNTRAINED','~5 G',seg(t,14.6,15.4));
    hbar2(W*0.3,H*0.56,1050,9/12,'#3FF0FF','FIGHTER PILOT','~9 G',seg(t,16.8,18.2));if(t>17.0){jet2D(W*0.3+1050*9/12*clamp(seg(t,16.8,18.2))-60,H*0.56-80,0.5)}
    hbar2(W*0.3,H*0.76,1050,1,'#FF4A4A','THE SHOW','100 G?!',seg(t,18.3,18.9));
    flash(t,14.4,0.15)}
  vignette();cap16(t+T0)};

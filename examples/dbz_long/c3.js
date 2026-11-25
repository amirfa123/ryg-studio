// ===== Chapter 1c: the most g ever survived (global 61.04 - 87.8) =====
const T0=61.04,TT=26.76;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;SCALE.visible=false;
  if(t<6.4){clear3d();setBG('gold');txtA('THE MOST G A HUMAN',W/2,H*0.14,70,pop(t,0.1),{sw:16});txtA('HAS EVER SURVIVED?',W/2,H*0.25,90,pop(t,0.6),{fill:GOLD,sw:18});
    const v=t<4.0?50+45*Math.sin(t*3.1)+0*t:50+48*Math.sin(t*9);if(t<4.0){txtA('?',W/2,H*0.6,260*(1+0.06*Math.sin(t*6)),pop(t,1.2),{fill:'#fff',sw:30})}else guessBeat(t,4.0,6.4,W/2,H*0.6);
    pill('TAKE A GUESS...',W/2,H*0.84,56,PINK,'#fff',t,3.8,6.35)}
  else if(t<15.1){const S=scene('sled');const k=seg(t,6.4,10.1);let x=-62+68*k*k;const st=easeOut(seg(t,10.1,10.45));if(t>10.1)x=6+2.2*st;S.sled.position.set(x,0,0);S.flame.visible=t<10.1;S.flame.scale.set(1+0.15*Math.sin(t*40),1,1);
    S.splash(seg(t,10.1,11.3),x);S.sled.add(holder);holder.rotation.order='XYZ';holder.position.set(-0.3,0.82,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.8);
    const jolt=t>10.1?Math.exp(-(t-10.1)*5):0;guy.pose({...SIT,armL:[0.35,-0.2],armR:[0.35,-0.2],mouth:t>10.1?'o':'teeth',mouthSize:0.7,wide:t>10.1,blink:false,headPitch:0.6*jolt*Math.sin((t-10.1)*25)});
    const cx=t<10.1?x+3.0:8.2,[sx,sy]=shake(t,10.1,0.35,0.8);S.shot([cx-1+sx,2.2+sy,8.5],[cx-2.5,1.0,0]);
    pill('1954',W*0.15,110,64,GOLD,'#111',t,6.5,15.05);pill('ROCKET SLED',W*0.4,110,56,'#fff','#111',t,8.6,15.05);
    if(t<10.1)speedo(W*0.85,H*0.3,140,lerp(0,1000,k*k),1000,'KM/H','');comic('SPLOOSH!',W*0.6,H*0.3,110,t,10.15,{life:1.2,rot:-0.08,fill:'#7FD3FF'});
    if(t>10.6){const gv=lerp(0,46,easeOut(seg(t,10.6,12.4)));gauge(W*0.85,H*0.32,150,gv,50,'#FF4A4A','')}
    if(t>13.6)txtA('46 G!',W*0.5,H*0.62,200,pop(t,13.7),{fill:RED,sw:30});flash(t,6.4,0.15);flash(t,10.1,0.12)}
  else if(t<20.5){clear3d();setBG('blue');const a=pop(t,15.15);stopwatch(W*0.28,H*0.42,170*a,0.3);txtA('A SPLIT SECOND',W*0.28,H*0.8,64,pop(t,15.6),{fill:GOLD,sw:14});
    if(t>16.8){const b=pop(t,16.9);eyeIcon(W*0.72,H*0.42,2.4*b);g.save();g.globalAlpha=0.55*clamp(seg(t,17.4,18.2));g.fillStyle='#E01818';g.beginPath();g.ellipse(W*0.72,H*0.42,130*b,80*b,0,0,7);g.fill();g.restore();
      txtA('BLINDED FOR A WHILE',W*0.72,H*0.8,58,pop(t,18.8),{fill:'#FF6A6A',sw:14})}flash(t,15.1,0.15)}
  else{grMood(false,t);screen(100,'#FF4A4A');stand(GR.S,0,0,0,PI/2);guy.pose(heavyPose(t,1,{headPitch:0.3}));const k=ease(seg(t,20.5,26.7));grShot(mix([5.8,1.6,4.5],[4.6,1.2,3.2],k),[0,0.7,0]);
    txtA('HOURS OF PUSH-UPS?',W*0.28,H*0.18,64,pop(t,20.7)*(1-seg(t,23.2,23.4)),{fill:GOLD,sw:14});
    if(t>23.4){txtA('NOT TRAINING',W*0.27,H*0.18,72,pop(t,23.45),{fill:RED,sw:16});cross(W*0.27,H*0.32,1.0*pop(t,23.6))}
    if(t>24.5){pancake2D(W*0.78,H*0.55,1.2*pop(t,24.6));comic('SPLAT!',W*0.78,H*0.36,100,t,24.8,{life:1.5,rot:-0.1,fill:'#FFD23F'})}flash(t,20.5,0.15)}
  vignette();cap16(t+T0)};

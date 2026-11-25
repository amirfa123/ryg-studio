// ===== Chapter 1: the gravity room (global 18.92 - 41.92) =====
const T0=18.92,TT=23.0;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;SCALE.visible=false;
  if(t<2.6){grMood(false,t);screen(1,'#3FF0FF');const x=lerp(4.2,0.6,seg(t,0,2.4));stand(GR.S,x,0,0.6,-PI/2+0.3);guy.pose(t<2.4?walk(t,7,{mouth:'smile'}):idle(t));grShot([1.0,2.6,10.5],[0.6,1.6,-1]);
    chapterCard(t,0.05,2.5,1,'THE GRAVITY ROOM')}
  else if(t<6.6){grMood(false,t);const gv=Math.round(lerp(1,100,easeOut(seg(t,4.4,5.8))));screen(gv,gv>50?'#FF4A4A':'#3FF0FF');stand(GR.S,0.6,0,0.6,-0.5);guy.pose(idle(t,{headYaw:-0.4,look:-0.6,mouth:gv>50?'o':'smile',mouthSize:0.5}));
    const k=ease(seg(t,2.6,6.6));grShot(mix([4.6,2.0,9.0],[3.4,2.2,7.4],k),[-1.0,1.8,-1]);pill("100× EARTH'S GRAVITY",W/2,H*0.8,58,GOLD,'#111',t,4.6,6.55);flash(t,2.6,0.15)}
  else if(t<9.7){grMood(false,t);screen(100,'#FF4A4A');SCALE.visible=true;const st=easeOut(seg(t,7.0,7.6));stand(GR.S,lerp(1.4,0,st),0.16*st,lerp(0.4,0,st),0.25);guy.pose(t<7.6?walk(t,7):idle(t,{mouth:'o',mouthSize:0.5,lookY:-0.5}));grShot([2.2,1.9,7.4],[-0.1,1.1,0]);
    panel(W*0.78,H*0.36,420,170,'rgba(10,12,25,0.9)','#5BE37A',30);txt('70 KG',W*0.78,H*0.36,96,{stroke:0,fill:'#5BE37A'});pill('STEP INSIDE?',W*0.22,H*0.62,56,CYAN,'#111',t,6.7,9.65);
    if(t>8.0)for(let i=0;i<3;i++)txtA('?',W*(0.6+i*0.05),H*(0.22-0.04*Math.sin(t*3+i)),100,pop(t,8.0+i*0.2),{fill:GOLD,sw:16})}
  else if(t<14.0){grMood(false,t);screen(100,'#FF4A4A');SCALE.visible=true;const f=easeOut(seg(t,9.75,10.2));stand(GR.S,0,0.16,0,0.25);guy.pose(heavyPose(t,f));
    const sh=0.03*Math.sin(t*60)*(1-seg(t,10.2,10.8));grShot([2.2+sh,1.9,7.4],[-0.1,1.0+sh,0]);const [fx,fy]=proj(new THREE.Vector3(0,0.0,0.4),GR.cam);cracks(fx,fy+40,130,f,3);
    const v=lerp(70,7000,easeOut(seg(t,10.2,13.2)));panel(W*0.76,H*0.36,560,170,'rgba(10,12,25,0.9)','#FF4A4A',30);txt(Math.round(v).toLocaleString('en-US')+' KG',W*0.76,H*0.36,96,{stroke:0,fill:'#FF4A4A'});
    pill('= 7 TONNES',W*0.76,H*0.55,60,GOLD,'#111',t,13.1,13.95);if(f>0.5)sweat(W*0.5+120,H*0.3,t);comic('CREAK!',W*0.24,H*0.66,90,t,10.1,{life:0.8,rot:-0.12,fill:'#FF7A1A'});flash(t,9.7,0.15)}
  else if(t<15.9){setBG('day');SAW.add(holder);holder.rotation.order='XYZ';holder.scale.setScalar(1);guy.pose({...SIT,armL:[0.3,0],armR:[0.3,0],mouth:'o',mouthSize:0.6,wide:true,blink:BLINK(t),look:0.6});
    const tilt=0.14*easeOut(seg(t,14.2,14.8))+0.02*Math.sin((t-14)*9)*Math.exp(-(t-14.6)*2.5)*(t>14.6?1:0);SAW.children.forEach((c,i)=>{if(i>0)c.rotation.z=tilt});
    holder.rotation.set(0,0.2,tilt);holder.position.set(-2.25*Math.cos(tilt),0.6-2.25*Math.sin(tilt)+0.47*(1-Math.cos(tilt)),0);ELE.position.set(1.75*Math.cos(tilt),1.14+1.75*Math.sin(tilt),0);ELE.rotation.set(0,PI,-tilt);
    SV.cam.position.set(0.1,2.4,15);SV.cam.lookAt(0.1,1.7,0);r.setClearColor(0,0);r.render(SV.S,SV.cam);pill('HEAVIER THAN AN ELEPHANT',W/2,110,60,GOLD,'#111',t,14.1,15.85);comic('THUD!',W*0.28,H*0.66,90,t,14.75,{life:0.8,rot:-0.1,fill:'#FF7A1A'});flash(t,14.0,0.15)}
  else if(t<17.2){grMood(false,t);screen(100,'#FF4A4A');stand(GR.S,0,0,0,PI/2);guy.pose(heavyPose(t,1,{headPitch:0.35}));grShot([5.6,1.1,3.0],[0,0.7,0]);txtA("CAN'T STAND UP",W*0.25,H*0.22,70,pop(t,16.0),{fill:RED,sw:16});flash(t,15.9,0.15)}
  else{clear3d();setBG('teal');const a=pop(t,17.25);armIcon(W*0.33,H*0.45,1.5*a);
    const v=lerp(3.5,350,easeOut(seg(t,19.6,21.6)));panel(W*0.33,H*0.72,560,150,'rgba(10,12,25,0.9)',GOLD,30);txt('ARM: '+Math.round(v)+' KG',W*0.33,H*0.72,76,{stroke:0,fill:GOLD});
    txtA('YOUR ARM ALONE',W*0.33,H*0.17,72,pop(t,18.9),{sw:16});
    for(let i=0;i<5;i++){const s=pop(t,21.0+i*0.15);if(s>0)silhouette(W*(0.62+i*0.075),H*0.5,0.9*s,['#FFCC2E','#3FF0FF','#FF3DA6','#5BE37A','#FFB020'][i])}
    txtA('= 5 PEOPLE!',W*0.77,H*0.72,80,pop(t,21.8),{fill:GREEN,sw:16});flash(t,17.2,0.2)}
  vignette();cap16(t+T0)};

// ===== Chapter 0: intro (global 0 - 18.92) =====
const T0=0,TT=18.92;
function topicCard(x,y,i,a,t){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);panel(0,0,300,330,'rgba(10,12,25,0.9)',['#3FF0FF','#FFD23F','#FF3DA6','#5BE37A','#7FE8FF'][i],30);g.restore();
  const s=a;if(i===0){gauge(x,y-30*s,95*s,100,100,'#FF4A4A','')}else if(i===1){weight2D(x,y-30*s,0.55*s,'511')}else if(i===2){txtA('POW!',x,y-34*s,92*s,a,{fill:'#FF3DA6',sw:16})}else if(i===3){bird2D(x,y-20*s,0.42*s,t)}else{auraGlow2D(x,y-30*s,90*s,t,a);txtA('⚡',x,y-30*s,90*s,a,{fill:'#7FE8FF',sw:10})}
  txtA(['GRAVITY','STRENGTH','PUNCH','FLYING','ENERGY'][i],x,y+118*s,40*s,a,{sw:10})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;
  if(t<4.2){grMood(false,t);screen(1,'#3FF0FF');stand(GR.S,0,0,0,0.35);guy.pose(punchPose(t));const k=ease(seg(t,0,4.2));grShot(mix([3.0,2.0,8.4],[2.1,1.7,6.4],k),[0,1.15,0]);
    {const a=easeOut(seg(t,0.1,0.5))*(1-seg(t,3.9,4.2));txtA('WHAT WOULD HAPPEN IF YOU',W/2,110,56,a,{sw:14});txtA('TRAINED LIKE A DRAGON BALL FIGHTER?',W/2,200,80,a,{fill:GOLD,sw:18})}
    comic('HYAH!',W*0.78,H*0.55,90,t,1.3,{life:0.8,rot:0.12,fill:'#FF7A1A'});comic('HUP!',W*0.22,H*0.6,80,t,2.6,{life:0.7,rot:-0.12,fill:'#3FF0FF'})}
  else if(t<5.4){const f=easeOut(seg(t,4.3,4.7));grMood(false,t);screen(100,'#FF4A4A');stand(GR.S,0,0,0,0.3);guy.pose(heavyPose(t,f));grShot([2.6,2.0,8.4],[-0.2,0.9,0]);const [fx,fy]=proj(new THREE.Vector3(0,0.0,0.3),GR.cam);cracks(fx,fy+30,110,f,2);
    pill('100× GRAVITY',W/2,110,60,RED,'#fff',t,4.25,5.35);flash(t,4.2,0.15)}
  else if(t<7.6){const R=scene('rocky');R.boulder.visible=true;R.boulder.position.set(-6,3.2,0);R.fireball.visible=false;R.explode(0,[0,0,0]);putGuy(R.S,-0.85,0,0,-PI/2);guy.pose(punchPose(t,0.45));
    const [sx,sy]=shake(t,6.3,0.35,0.7);R.shot([1.8+sx,2.3+sy,10.5],[-2.6,1.9,0]);comic('POW!',W*0.36,H*0.3,130,t,6.3,{life:1.0,rot:-0.1,fill:'#FFD23F'});pill('MOUNTAIN PUNCHES',W/2,110,60,GOLD,'#111',t,5.45,7.55);flash(t,5.4,0.15)}
  else if(t<8.6){const S=scene('sky');S.scroll(t*6);flyGuy(S.S,0,0,0,PI/2);guy.pose(FLY(t));S.shot([1.2,1.0,8.5],[0.2,0.3,0]);pill('FLYING',W/2,110,60,GREEN,'#111',t,7.65,8.55);flash(t,7.6,0.15)}
  else if(t<10.1){grMood(false,t);screen(1,'#7FE8FF');stand(GR.S,-1.5,0,0,PI/2);const k=easeOut(seg(t,8.9,9.3));guy.pose(blastPose(t,k));auraOn(GR.S,-1.5,0,0,t,1);beamOn(GR.S,-0.6,1.35,0,PI/2,10*k,t);grShot([0.8,1.8,9.5],[0.6,1.2,0]);
    pill('ENERGY BLASTS',W/2,110,60,CYAN,'#111',t,8.65,10.05);comic('FWOOSH!',W*0.7,H*0.28,100,t,9.0,{life:1.0,rot:0.08,fill:'#7FE8FF'});flash(t,8.6,0.15)}
  else{clear3d();setBG('neon');txtA('HOW MUCH COULD A REAL BODY DO?',W/2,140,76,easeOut(seg(t,10.15,10.5)),{fill:GOLD,sw:16});
    for(let i=0;i<5;i++)topicCard(W*(0.14+i*0.18),H*0.52,i,pop(t,10.6+i*0.35),t);
    if(t>14.7){const a=pop(t,14.7);txtA('THE ANSWER AT THE END...',W/2,H*0.79,60,a*(1-seg(t,17.0,17.3)),{fill:CYAN,sw:14})}
    comic("LET'S GO!",W/2,H*0.79,120,t,17.3,{life:1.7,fill:GREEN});flash(t,10.1,0.2)}
  vignette();cap16(t+T0)};

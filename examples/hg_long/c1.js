// ===== Chapter 1: the countdown (global 21.0 - 59.12) =====
const T0=21.0,TT=38.12;
function cdN(t){return Math.round(lerp(60,0,seg(t,4.2,15.0)))}
function rise(A,k){A.plates[0].position.y=lerp(-2.1,0,k);return lerp(-1.94,0.16,k)}
function runRivals(A,k,t){A.rivals.forEach((rv,i)=>{const a=PI/2+(i+1)/12*PI*2;const rd=lerp(10,3.6+0.6*hash(i),clamp(k*(0.8+0.4*hash(i*3))));rv.position.set(Math.cos(a)*rd,0.16*(1-k)+0.12*Math.abs(Math.sin(t*12+i))*(k>0&&k<1?1:0),Math.sin(a)*rd)})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';const A=scene('arena');A.plates[0].position.y=0;resetRivals(A);
  if(t<2.3){const y=rise(A,0);putGuy(A.S,0,y,10,PI);guy.pose(idle(t));A.shot([3.5,1.4,16],[0,0.6,10]);chapterCard(t,0.05,2.25,1,'THE COUNTDOWN')}
  else if(t<4.2){const k=easeOut(seg(t,2.4,3.9));const y=rise(A,k);putGuy(A.S,0,y,10,PI);guy.pose(idle(t,{mouth:'o',mouthSize:0.5,wide:true}));A.shot([3.0,1.3,15.5],[0,lerp(0.2,1.2,k),10]);comic('WHIRRR',W*0.75,H*0.3,80,t,2.6,{life:1.2,rot:0.1,fill:CYAN});flash(t,2.3,0.15)}
  else if(t<6.1){putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{headYaw:-0.3}));A.shot([0,9,24],[0,0.5,3]);countdown2D(W/2,H*0.2,cdN(t),pop(t,4.25),1.3);flash(t,4.2,0.15)}
  else if(t<9.4){putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{lookY:-0.8,mouth:'o',mouthSize:0.45}));A.shot([2.2,0.7,13.2],[0,0.35,10]);countdown2D(W*0.86,H*0.14,cdN(t),1,0.8);
    pill("DON'T STEP OFF EARLY!",W*0.38,H*0.2,62,RED,'#fff',t,6.3,9.35);if(t>7.6){cross(W*0.18,H*0.5,1.6*pop(t,7.6))}flash(t,6.1,0.15)}
  else if(t<14.7){putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{headYaw:0}));const k=ease(seg(t,9.4,14.0));A.shot(mix([1.5,2.4,14.5],[5.5,3.2,11.5],k),mix([0,1.8,6],[0,1.4,1],k));countdown2D(W*0.86,H*0.14,cdN(t),1,0.8);
    pill('GOLDEN HORN',W*0.5,H*0.16,64,GOLD,'#111',t,10.6,12.0);pill('BACKPACKS',W*0.25,H*0.72,54,ORANGE,'#fff',t,12.2,14.6);pill('FOOD',W*0.5,H*0.72,54,GREEN,'#111',t,13.2,14.6);pill('WEAPONS',W*0.72,H*0.72,54,RED,'#fff',t,13.7,14.6);flash(t,9.4,0.15)}
  else if(t<18.5){const k=seg(t,15.0,18.4);runRivals(A,k,t);putGuy(A.S,0,0.16,10,PI);guy.pose(idle(t,{mouth:'o',mouthSize:0.6,wide:true}));A.shot([0,12,26],[0,0,3]);countdown2D(W/2,H*0.14,cdN(t),1,0.9);
    if(t>15.0)comic('GO!',W/2,H*0.42,170,t,15.0,{life:1.0,fill:RED});pill('RUN FOR THE GOOD STUFF?',W/2,H*0.72,60,'#FFFFFF','#111',t,15.8,18.45);flash(t,14.7,0.15)}
  else if(t<23.4){runRivals(A,1,t);putGuy(A.S,0,0.16,10,PI*1.1);guy.pose(idle(t,{reachR:[-0.12,1.52,0.36],poleR:[-1,-0.5,0],headPitch:-0.1,look:0.5,lookY:0.4,mouth:'o',mouthSize:0.35}));A.shot([-1.6,1.9,5.2],[0,1.45,10]);
    pill("WHAT'S THE SMART MOVE?",W/2,H*0.14,62,CYAN,'#111',t,18.6,20.8);guessBeat(t,20.9,23.35,W*0.82,H*0.42);qmarks(W*0.12,H*0.42,t,19.6);flash(t,18.5,0.15)}
  else if(t<27.8){runRivals(A,1,t);const k=seg(t,23.4,27.8);const z=lerp(10,22,k),x=lerp(0,2.4,k);const got=t>25.6;props.pack.visible=got;A.near.visible=!got;A.near.position.set(1.4,0,15.6);putGuy(A.S,x,t<23.7?0.16:0,z,0.15);guy.pose(run(t,{mouth:'grin'}));
    A.shot([x+9,3.2,z-1],[x,1.0,z+1]);pill('RUN AWAY!',W*0.3,H*0.16,70,GREEN,'#111',t,23.5,25.4);pill('GRAB THE CLOSEST BAG',W*0.5,H*0.16,62,ORANGE,'#fff',t,25.5,27.75);if(got)comic('YOINK!',W*0.62,H*0.4,90,t,25.6,{life:0.9,fill:GOLD});flash(t,23.4,0.2)}
  else if(t<32.6){clear3d();setBG('teal');txtA('RULE #1',W/2,H*0.2,70,pop(t,27.9),{fill:CYAN,sw:14});txtA("DON'T GET HURT ON DAY ONE",W/2,H*0.36,92,pop(t,29.6),{fill:GOLD,sw:18});
    hosp2D(W*0.32,H*0.62,1.3*pop(t,30.4));bone(W*0.62,H*0.62,1.4*pop(t,31.0),0);flash(t,27.8,0.2)}
  else{const F=scene('forest');forestReset(F);F.tick(t);putGuy(F.S,-1.2,-0.05,3.6,0.5);props.pack.visible=false;guy.pose({...idle(t),...SIT,sitY:-0.6,reachL:[0.2,0.75,0.55],reachR:[-0.2,0.75,0.6],headPitch:0.35,mouth:'teeth',teethGap:0.5});F.shot([2.6,1.6,9.5],[-1,0.7,3.5]);
    comic('OUCH!',W*0.3,H*0.3,110,t,32.8,{life:1.2,rot:-0.1,fill:RED});const [ax,ay]=proj(new THREE.Vector3(-0.85,0.25,4.2),F.cam);if(t>33.0){g.save();g.globalAlpha=0.5+0.3*Math.sin(t*10);g.fillStyle='#FF4A4A';g.beginPath();g.arc(ax,ay,60,0,7);g.fill();g.restore()}
    if(t>33.7){const a=pop(t,33.7);hosp2D(W*0.8,H*0.36,1.0*a);cross(W*0.8,H*0.36,1.6*a)}pill('NO DOCTOR',W*0.8,H*0.6,56,RED,'#fff',t,34.0,38.1);flash(t,32.6,0.15)}
  vignette();cap16(t+T0)};

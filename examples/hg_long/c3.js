// ===== Chapter 3: finding water (global 90.6 - 108.42) =====
const T0=90.6,TT=17.82;
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';const F=scene('forest');forestReset(F);F.tick(t);props.pack.visible=true;
  if(t<2.2){putGuy(F.S,-2,0,4.2,0.2);guy.pose(idle(t,{headYaw:0.7*Math.sin(t*2.2),mouth:'o',mouthSize:0.4}));F.shot([-1.2,1.8,10],[-2,1.3,4]);pill('WHERE IS THE WATER?',W/2,H*0.15,62,CYAN,'#111',t,0.1,2.15);qmarks(W*0.68,H*0.4,t,0.6)}
  else if(t<7.7){const k=seg(t,2.2,7.7);const x=lerp(-9,-1.5,k),z=lerp(5,0.2,k);putGuy(F.S,x,0,z,Math.atan2(7.5,-4.8));guy.pose(walk(t,7,{headYaw:t>3.8&&t<5.1?0.6:0}));F.shot([x-1,3.2,z+8.5],[x+2.5,0.8,z-2]);
    pill('FOLLOW THE LAND DOWNHILL',W/2,H*0.14,58,GREEN,'#111',t,2.3,3.75);pill('LISTEN FOR RUNNING WATER',W/2,H*0.14,58,CYAN,'#111',t,3.8,5.2);pill('GREEN PLANTS + ANIMAL TRACKS',W/2,H*0.14,58,GOLD,'#111',t,5.25,7.65);
    if(t>3.8&&t<5.2){for(let i=0;i<3;i++){const p=((t*1.5+i/3)%1);g.save();g.globalAlpha=1-p;g.strokeStyle=CYAN;g.lineWidth=8;g.beginPath();g.arc(W*0.82,H*0.5,40+p*120,-0.8,0.8);g.stroke();g.restore()}}
    if(t>5.6){for(let i=0;i<5;i++){const a=pop(t,5.7+i*0.18);if(a<=0)continue;g.save();g.translate(W*(0.12+i*0.07),H*(0.78-i*0.04));g.scale(a,a);g.fillStyle='#3A2A1A';g.beginPath();g.ellipse(0,0,14,18,0,0,7);g.fill();for(let k2=0;k2<4;k2++){g.beginPath();g.arc(-15+k2*10,-22,6,0,7);g.fill()}g.restore()}}flash(t,2.2,0.15)}
  else if(t<10.5){putGuy(F.S,-0.5,0,-2.15,PI);guy.pose({...idle(t),...KNEEL,reachL:[0.25,0.9,0.55],reachR:[-0.25,0.9,0.55],headPitch:0.3,mouth:'grin'});F.shot([1.8,1.3,-8.0],[-0.5,0.8,-2.2]);
    pill('FOUND A STREAM!',W*0.5,H*0.14,62,CYAN,'#111',t,7.8,8.75);if(t>8.8){cross(W*0.24,H*0.4,1.8*pop(t,8.8));pill("DON'T GULP IT!",W*0.5,H*0.14,64,RED,'#fff',t,8.8,10.45)}flash(t,7.7,0.15)}
  else if(t<14.1){clear3d();setBG('teal');germs2D(W*0.36,H*0.47,260,t,pop(t,10.6));txtA('GERMS',W*0.72,H*0.38,110,pop(t,11.7),{fill:GREEN,sw:20});txtA('= SICK FOR DAYS',W*0.72,H*0.56,70,pop(t,12.6),{fill:'#fff',sw:14});flash(t,10.5,0.15)}
  else{putGuy(F.S,1.3,0.2,1.6,PI/2);guy.pose({...idle(t),...SIT,reachR:[-0.2,1.0,0.5],headYaw:0.2,mouth:'smile'});F.steamOn(t,1);F.boil(t,1);F.shot([5.2,2.0,5.6],[2.4,0.9,1.4]);
    const sec=Math.min(60,Math.round(lerp(0,60,seg(t,14.3,16.4))));stopwatch(W*0.82,H*0.33,120*pop(t,14.2),sec);pill('BOIL 1 FULL MINUTE',W*0.4,H*0.14,62,ORANGE,'#fff',t,14.2,17.8);
    if(t>16.4){check(W*0.82,H*0.62,1.5*pop(t,16.4));txtA('SAFE!',W*0.82,H*0.75,64,pop(t,16.5),{fill:GREEN,sw:14})}flash(t,14.1,0.15)}
  vignette();cap16(t+T0)};

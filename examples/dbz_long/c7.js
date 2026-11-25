// ===== Chapter 4: could you fly? (global 160.64 - 195.64) =====
const T0=160.64,TT=35.0;
const HELI=makeHeli();
function pedal(t,o={}){const s=Math.sin(t*6);return {...SIT,legL:[1.2+0.35*s,1.3-0.35*s,0],legR:[1.2-0.35*s,1.3+0.35*s,0],reachL:[0.25,1.05,0.42],reachR:[-0.25,1.05,0.42],poleL:[1,-0.4,0],poleR:[-1,-0.4,0],mouth:'teeth',blink:BLINK(t),...o}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;
  if(t<3.3){const S=scene('sky');S.scroll(t*6);flyGuy(S.S,0,0,0,PI/2);guy.pose(FLY(t));S.shot([1.6,1.4,8.8],[0.2,0.3,0]);chapterCard(t,0.05,3.2,4,'COULD YOU FLY?')}
  else if(t<7.7){clear3d();setBG(BGS2.sky);const cx=W*0.42,cy=H*0.42;silhouette(cx,cy+40,1.6,'#FFCC2E');
    const a1=pop(t,3.5);if(t>3.5){for(let i=0;i<5;i++){const ph=((t*1.5+i/5)%1);g.save();g.globalAlpha=clamp(a1)*(1-ph);arrow(cx-240+i*120,cy+180+ph*70,cx-240+i*120,cy+250+ph*70,'#FFFFFF',14);g.restore()}txtA('PUSH AIR DOWN',cx,H*0.8,54,a1,{fill:'#fff',sw:12})}
    if(t>5.6){g.save();g.globalAlpha=clamp(pop(t,5.6));arrow(cx+330,cy+120,cx+330,cy-200,GREEN,40);arrow(cx+480,cy-200,cx+480,cy+120,RED,40);g.restore();txtA('LIFT',cx+330,cy-250,54,pop(t,5.6),{fill:GREEN,sw:12});txtA('WEIGHT',cx+480,cy+170,54,pop(t,5.8),{fill:RED,sw:12});txtA('MUST BE EQUAL',W*0.78,H*0.14,60,pop(t,6.3),{fill:GOLD,sw:14})}flash(t,3.3,0.15)}
  else if(t<14.4){clear3d();setBG(BGS2.sky);bird2D(W*0.4,H*0.52,2.2*pop(t,7.75),t);if(t>8.6){txtA('GIANT CHEST MUSCLES',W*0.4,H*0.12,64,pop(t,8.7),{fill:PINK,sw:14});arrow(W*0.4+150,H*0.22,W*0.4+30,H*0.5,PINK,22)}
    if(t>10.4){panel(W*0.8,H*0.5,460,240,'rgba(10,12,25,0.9)',GOLD,30);txt('HEAVIEST',W*0.8,H*0.42,44,{stroke:0,fill:'#fff'});txt('≈ 20 KG',W*0.8,H*0.54,90,{stroke:0,fill:GOLD})}flash(t,7.7,0.15)}
  else if(t<16.8){clear3d();setBG('neon');txtA('YOU vs THE HEAVIEST BIRD',W/2,120,72,pop(t,14.45),{fill:GOLD,sw:16});
    hbar2(W*0.3,H*0.42,1000,20/70,'#C9A27A','BIRD','20 KG',seg(t,14.5,15.0));hbar2(W*0.3,H*0.62,1000,1,'#FFCC2E','YOU','70 KG',seg(t,14.8,15.6));txtA('3× HEAVIER+',W/2,H*0.82,90,pop(t,15.8),{fill:RED,sw:18});flash(t,14.4,0.15)}
  else{const F=scene('field');F.net.visible=false;F.poles.visible=false;F.S.add(HELI);HELI.userData.spin(t*3.5);const up=ease(seg(t,26.6,28.8))*3.0;HELI.position.set(0,up+0.02*Math.sin(t*3)*(up>0.1?1:0),0);
    HELI.add(holder);holder.rotation.order='XYZ';holder.position.set(-0.3,0.42,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);guy.pose(pedal(t));
    if(t<20.8){const k=ease(seg(t,16.8,20.8));F.shot(mix([24,10,28],[20,8,23],k),[0,1.2,0]);pill('2013',W*0.15,110,64,GOLD,'#111',t,16.9,20.75);pill('PEDAL-POWERED HELICOPTER',W*0.55,110,56,'#fff','#111',t,17.9,20.75);flash(t,16.8,0.15)}
    else if(t<23.5){F.shot([0.01,36,10],[0,0,0]);const a=pop(t,21.0);g.save();g.globalAlpha=clamp(a);g.strokeStyle='#FFD23F';g.lineWidth=10;g.setLineDash([24,16]);const [x1,y1]=proj(new THREE.Vector3(-11.6,0,8.6),F.cam),[x2]=proj(new THREE.Vector3(11.6,0,8.6),F.cam);g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y1);g.stroke();g.restore();
      txtA('AS WIDE AS A FOOTBALL FIELD',W/2,H*0.1,64,a,{fill:GOLD,sw:14});flash(t,20.8,0.15)}
    else if(t<26.6){F.shot([5.8,1.9,0.4],[-0.2,1.15,0]);sweat(W*0.56,H*0.3,t);pill('SUPER-FIT CYCLIST',W*0.25,110,56,CYAN,'#111',t,23.6,26.55);flash(t,23.5,0.15)}
    else{const k=ease(seg(t,26.6,33.2));F.shot(mix([16,2.2,20],[14,3.2,17],k),[0,1.8+up*0.6,0]);if(t>26.8){stopwatch(W*0.12,H*0.3,100,lerp(0,64,clamp(seg(t,26.9,29.6))));altim(W*0.85,H*0.18,up)}
      pill('64 SECONDS!',W/2,H*0.14,64,GOLD,'#111',t,28.2,30.9);pill('THE BEST HUMAN MUSCLES HAVE EVER DONE',W*0.44,H*0.14,52,'#fff','#111',t,31.0,33.2);comic('LIFT-OFF!',W*0.62,H*0.36,100,t,26.9,{life:1.4,rot:-0.08,fill:'#5BE37A'});flash(t,26.6,0.15)}}
  vignette();cap16(t+T0)};

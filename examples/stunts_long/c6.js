// ===== Chapter 6: no parachute (global 197.32 - 225.84) =====
const T0=197.32,TT=28.52;
function chuteIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FF3DA6';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.arc(0,0,90,PI,0);g.closePath();g.fill();g.stroke();g.fillStyle='#FFD23F';g.beginPath();g.arc(0,0,90,PI*1.33,PI*1.66);g.lineTo(0,0);g.closePath();g.fill();g.stroke();
  g.lineWidth=4;for(const dx of [-85,-30,30,85]){g.beginPath();g.moveTo(dx,0);g.lineTo(0,110);g.stroke()}stickFig(0,140,0.9);g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  const K=scene('sky');K.scroll(t*14);
  const skyShot=(o,cam,look,bgk)=>{fallGuy(K.S,0,0,0);guy.pose(o);K.shot(cam,look,bgk)};
  if(t<4.0){skyShot({...SKYDIVE(t),mouth:'grin'},[4.5,-3.5,5.5],[0.4,0,0.3],BGS2.hi);chapterCard(t,0.05,3.95,6,'NO PARACHUTE');altim(W*0.84,H*0.16,7600-t*40);flash(t,0,0.2)}
  else if(t<7.6){const a=(t-4)*0.12;skyShot({...SKYDIVE(t),mouth:t>5.9?'o':'smile',mouthSize:1.2,wide:t>5.9},[-4.5+a*3,-3.2,5.5],[-0.3,0,0.3],BGS2.hi);
    txtA('SURELY THIS IS IMPOSSIBLE...',W/2,H*0.14,70,easeOut(seg(t,4.1,4.5)),{fill:'#fff',sw:14});comic('RIGHT?',W*0.24,H*0.42,110,t,5.9,{life:1.6,rot:0.08,fill:'#FFD23F'});altim(W*0.14,H*0.84,7440-(t-4)*55);flash(t,4.0,0.2)}
  else if(t<14.3){clear3d();setBG(BGS2.hi);for(let i=0;i<8;i++)cloud(((hash(i)*W*1.2+i*240)%(W+300))-150,((hash(i*3)*H-t*260)%(H+300)+H+300)%(H+300)-150,1.2+hash(i*5),0.5);
    pill('2016',W*0.5,H*0.12,70,'#FFD23F','#111',t,7.7,14.25);const v=7600*easeOut(seg(t,10.4,12.0));if(t>10.0){panel(W*0.32,H*0.44,640,220);txt(Math.round(v).toLocaleString('en-US')+' m',W*0.32,H*0.44+12,110,{fill:'#3FF0FF',stroke:0})}txtA('JUMP HEIGHT',W*0.32,H*0.3,40,easeOut(seg(t,10.0,10.3)),{sw:10});
    if(t>12.4){const s=pop(t,12.4);chuteIcon(W*0.74,H*0.38,1.4*s);if(t>13.4){cross(W*0.74,H*0.46,3.0*pop(t,13.4))}txtA('NO PARACHUTE',W*0.74,H*0.75,64,easeOut(seg(t,13.0,13.3)),{fill:'#FF4A4A',sw:14})}flash(t,7.6,0.2)}
  else if(t<18.8){skyShot({...SKYDIVE(t),mouth:'o',mouthSize:0.8},[3.5,-4.5,5.5],[0.6,0,0.3],BGS2.sky);K.scroll(t*30);
    const sec=120*ease(seg(t,14.6,16.2));stopwatch(W*0.16,H*0.4,120,sec);txtA('≈ 2 MINUTES',W*0.16,H*0.72,48,easeOut(seg(t,16.0,16.3)),{fill:'#FFD23F',sw:10});
    speedo(W*0.84,H*0.42,140,190*clamp(seg(t,16.2,17.6)),250,'KM/H','FALL SPEED');flash(t,14.3,0.2)}
  else if(t<22.0){const F=scene('field');const tl2=20.2;let y,d=0;if(t<tl2){const k=seg(t,18.8,tl2);y=lerp(30,4.2,k)}else{const u=t-tl2;d=3.2*Math.exp(-u*2.2)*Math.cos(u*6)+1.0*(1-Math.exp(-u*3));y=4.2-d-0.1+(u>0?0:0)}
    F.sag(Math.max(0,d));putGuy(F.S,0,y,0,0);if(t<tl2){holder.rotation.set(PI/2-0.25,0,0);guy.pose({...SKYDIVE(t),mouth:'o',wide:true,mouthSize:1.3})}else{holder.rotation.set(PI/2,0,0);guy.pose({armL:[1.9,0],armR:[1.9,0],legL:[0.3,0.2,0],legR:[0.3,0.2,0],mouth:'o',mouthSize:1.0})}
    F.shot([15,11,24],[0,3.5,0]);if(t>18.9){const p=proj(new THREE.Vector3(0,4,15),F.cam);pill('GIANT NET',W*0.5,H*0.1,56,'#3FF0FF','#111',t,18.9,21.95);txtA('30 m WIDE',p[0],p[1]+60,56,easeOut(seg(t,20.6,20.9)),{fill:'#FFD23F',sw:12})}
    comic('BOING!',W*0.66,H*0.35,110,t,tl2,{life:1.1,rot:0.08});flash(t,18.8,0.2)}
  else if(t<23.6){const F=scene('field');F.sag(1.0);putGuy(F.S,19,0,12+(t-22)*0.8,0.3);guy.pose(walk(t,8,{mouth:'grin',armR:[2.6,0.3*Math.sin(t*8)]}));F.shot([23,2.2,22],[19.5,1.3,12.5]);
    comic('HE WALKED AWAY!',W*0.62,H*0.25,100,t,22.1,{life:1.5,rot:-0.05,fill:'#5BE37A'});flash(t,22.0,0.2)}
  else{const F=scene('field');const g0=24.4;const vis=t<g0;F.net.visible=vis;F.poles.visible=vis;F.sag(1.0);holder.parent&&holder.parent.remove(holder);F.shot([22,16,34],[0,3,0]);
    if(!vis){const pp=proj(new THREE.Vector3(0,4,0),F.cam);const d=t-g0;if(d<0.6)for(let i=0;i<12;i++){const a=i/12*PI*2;g.fillStyle=`rgba(255,255,255,${0.9*(1-d/0.6)})`;g.beginPath();g.arc(pp[0]+Math.cos(a)*d*400,pp[1]+Math.sin(a)*d*240,50*(1-d/0.8),0,7);g.fill()}}
    pill('WITHOUT THE NET?',W/2,H*0.1,56,'#fff','#111',t,23.7,28.45);if(t>25.8)verdict(t,25.8,false,'NO SURVIVING IT');flash(t,23.6,0.2)}
  vignette();cap16(t+T0)};

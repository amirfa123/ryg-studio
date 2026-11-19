// ===== Chapter 4: wheelie (global 131.84 - 161.16) =====
const T0=131.84,TT=29.32;
function bal(x,y,v){panel(x,y,520,120);const w=420;g.save();g.translate(x-w/2,y+10);const gr=g.createLinearGradient(0,0,w,0);gr.addColorStop(0,'#FF4A4A');gr.addColorStop(0.3,'#FFD23F');gr.addColorStop(0.45,'#5BE37A');gr.addColorStop(0.55,'#5BE37A');gr.addColorStop(0.7,'#FFD23F');gr.addColorStop(1,'#FF4A4A');g.fillStyle=gr;rr(0,0,w,26,13);g.fill();
  g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=5;const px=w*clamp(v);g.beginPath();g.moveTo(px,-6);g.lineTo(px-14,-30);g.lineTo(px+14,-30);g.closePath();g.fill();g.stroke();g.restore();txt('BALANCE',x,y-34,30,{stroke:0,fill:'#fff'})}
function odo(x,y,v){panel(x,y,700,200);const s=typeof v==='string'?v:Math.floor(v).toString().padStart(3,'0');for(let i=0;i<3;i++){g.fillStyle='#F4F4F8';g.strokeStyle='#111';g.lineWidth=6;rr(x-250+i*130,y-70,110,140,14);g.fill();g.stroke();txt(s[i],x-195+i*130,y+4,110,{fill:'#111',stroke:0})}txt('KM',x+200,y+6,80,{fill:'#FFD23F',sw:12})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  const Hy=scene('hwy');Hy.piv.visible=true;Hy.piv.rotation.set(0,0,0);
  if(t<2.7){const x=-10+t*10;Hy.piv.position.set(x,0,1.6);Hy.bike.spin(t*20);rider(Hy.bike,t);Hy.shot([x+4,1.8,8],[x+1,0.9,1.6]);chapterCard(t,0.05,2.65,4,'THE ENDLESS WHEELIE');flash(t,0,0.2)}
  else if(t<6.6){const x=-10+t*12;const a=0.55*easeOut(seg(t,3.6,4.1))+0.04*Math.sin(t*5)*seg(t,4.1,4.5);Hy.piv.position.set(x,0,1.6);Hy.piv.rotation.z=a;Hy.bike.spin(t*24);rider(Hy.bike,t,{mouth:'grin',headPitch:-0.1});
    Hy.shot([x+2,2.0,10],[x+1,1.1,1.6]);pill('IN GTA',W/2,110,56,'#FF3DA6','#fff',t,2.8,6.55);comic('WHEELIE!',W*0.7,H*0.3,110,t,4.1,{life:1.4,rot:0.06});pill('THE WHOLE HIGHWAY...',W/2,H*0.8,44,'#fff','#111',t,5.0,6.55);flash(t,2.7,0.2)}
  else if(t<11.1){clear3d();setBG('neon');Hy.piv.visible=false;txtA('HOW FAR ON ONE WHEEL?',W/2,H*0.2,84,easeOut(seg(t,6.7,7.1)),{fill:'#FFD23F',sw:18});odo(W/2,H*0.48,t<7.6?'000':'???');
    txtA('GUESS!',W*0.25,H*0.75,100,pop(t,9.0),{fill:'#3FF0FF',sw:20});if(t>9.0){const n=3-Math.floor((t-9.0)/0.66);if(n>0){const ph=((t-9.0)%0.66)/0.66;txtA(String(n),W*0.75,H*0.75,170*(1.2-0.2*ph),1-ph*0.6,{fill:'#FFD23F',sw:26})}}flash(t,6.6,0.2)}
  else if(t<17.1){clear3d();setBG('#1B5FA8');Hy.piv.visible=false;const v=331*ease(seg(t,11.1,13.0));odo(W/2,H*0.36,v);
    const gy=H*0.72;g.fillStyle='#3A3850';g.fillRect(0,gy,W,90);for(let i=0;i<12;i++){g.fillStyle='#fff';g.fillRect(((i*180-t*700)%W+W)%W,gy+40,90,10)}stuntIcon(3,W*0.5,gy-20,1.6);
    comic('NON-STOP!',W*0.78,H*0.58,100,t,13.2,{life:3.6,rot:-0.08,fill:'#5BE37A'});pill('WORLD RECORD · 1991',W*0.26,H*0.6,48,'#FFD23F','#111',t,14.4,17.05);flash(t,11.1,0.2)}
  else if(t<20.3){const x=-20+(t-17.1)*11;const wob=0.08*Math.sin(t*3.1)+0.05*Math.sin(t*7.3);Hy.piv.position.set(x,0,1.6);Hy.piv.rotation.z=0.6+wob;Hy.bike.spin(t*24);rider(Hy.bike,t,{mouth:'o',mouthSize:0.6,headPitch:-0.15});
    Hy.shot([x+0.5,1.5,9],[x+0.3,1.2,1.6]);bal(W*0.22,H*0.16,0.5+wob*2.5);pill('THE DANGER?',W*0.7,H*0.13,52,'#fff','#111',t,17.2,18.6);pill('BALANCE',W*0.7,H*0.13,60,'#5BE37A','#111',t,18.7,20.25);flash(t,17.1,0.2)}
  else if(t<24.1){const tf=21.8,td=22.6;const x0=10;let ang,x;if(t<tf){ang=0.6+1.0*Math.pow(seg(t,20.3,tf),2);x=x0+(t-20.3)*5}else{x=x0+1.5*5;ang=lerp(1.6,0.15,easeOut(seg(t,tf,td)))}
    const fk=t>tf?easeOut(seg(t,tf,td)):0;Hy.piv.position.set(x+1.0*fk,0.3*fk,1.6-0.4*fk);Hy.piv.rotation.set(-PI/2*fk,0,ang);Hy.bike.spin(t<tf?t*20:t*6);
    if(t<tf+0.15)rider(Hy.bike,t,{mouth:'o',wide:true,mouthSize:1.4,armL:[2.4,0],armR:[2.4,0]});else{Hy.S.add(holder);holder.scale.setScalar(1);const k=seg(t,tf+0.15,tf+0.6);holder.position.set(x-0.6-0.8*k,lerp(1.2,0,k*k),2.6);holder.rotation.set(0,0.6,0);guy.pose(k<1?{armL:[2.5,0],armR:[2.5,0],legL:[0.9,0.4,0],legR:[0.9,0.4,0],mouth:'o',wide:true,mouthSize:1.5}:{...SIT,sitY:-0.5,legL:[1.2,0.3,0],legR:[1.2,0.3,0],armL:[0.7,0],armR:[0.7,0],mouth:'o',mouthSize:1.2,wide:true,blink:BLINK(t)})}
    const [sx,sy]=shake(t,td,0.2,0.5);Hy.shot([x+1+sx,2.4+sy,12.5],[x+0.5,1.3,1.8]);bal(W*0.22,H*0.16,0.5+0.5*seg(t,20.3,tf));pill('LEAN BACK TOO FAR...',W*0.7,H*0.13,48,'#FF4A4A','#fff',t,20.4,24.05);
    comic('WHOA!',W*0.6,H*0.35,110,t,21.6,{life:1.0,rot:0.08});comic('BONK!',W*0.45,H*0.55,110,t,td,{life:1.2,rot:-0.1,fill:'#FF4A4A'});flash(t,td,0.12);flash(t,20.3,0.2)}
  else{const x=40;Hy.piv.position.set(x,0,1.6);Hy.bike.spin(0);Hy.S.add(holder);putGuy(Hy.S,x-1.2,0,3.0,0.5);guy.pose(t>25.2?{...idle(t),mouth:'grin',armR:[2.6,0],armL:[0.4,0]}:idle(t,{mouth:'smile'}));
    Hy.shot([x+0.4,1.9,11],[x+0.8,1.0,2]);verdict(t,25.0,true,'SURVIVABLE*',W*0.64);txtA('*IF YOU TRAIN FOR YEARS',W*0.64,H*0.62,46,easeOut(seg(t,26.3,26.7)),{fill:'#fff',sw:10});flash(t,24.1,0.2)}
  vignette();cap16(t+T0)};

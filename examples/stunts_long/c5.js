// ===== Chapter 5: skyscraper dive (global 161.16 - 197.32) =====
const T0=161.16,TT=36.16;
const flail=(t,o={})=>({armL:[2.3+0.5*Math.sin(t*14),0.4*Math.sin(t*11)],armR:[2.3+0.5*Math.cos(t*13),-0.4*Math.sin(t*12)],legL:[0.5*Math.sin(t*10),0.4,0],legR:[-0.5*Math.sin(t*10),0.4,0],mouth:'o',wide:true,mouthSize:1.5,...o});
const PENCIL={armL:[3.05,0],armR:[3.05,0],legL:[0,0,0],legR:[0,0,0],mouth:'o',mouthSize:0.6};
function mols(x,y,w,h,n,sp,t,push=0,col='#7FD3FF'){g.save();g.beginPath();g.rect(x,y,w,h);g.clip();for(let i=0;i<n;i++)for(let j=0;j<Math.round(n*h/w);j++){let cx=x+(i+0.5)*w/n+Math.sin(t*3+i*1.7+j)*sp,cy=y+(j+0.5)*w/n+Math.cos(t*2.6+i+j*2.3)*sp;
  if(push){const dx=cx-(x+w/2);const near=Math.exp(-Math.pow((cy-y)/(h*0.5),2));cx+=Math.sign(dx)*push*near*60}g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.arc(cx,cy,w/n*0.36,0,7);g.fill();g.stroke()}g.restore();g.strokeStyle='#111';g.lineWidth=6;g.strokeRect(x,y,w,h)}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  holder.visible=true;const B=scene('bay');B.splash.visible=false;const TOP=B.TH+0.62;
  if(t<3.8){putGuy(B.S,0,TOP,0.9,0);guy.pose(idle(t,{mouth:'smile',headPitch:0.3,lookY:-0.5}));const k=ease(seg(t,0,3.8));B.shot(mix([30,TOP-30,60],[7,TOP+2,11],k),mix([0,TOP-20,0],[0,TOP+0.9,0.5],k));
    chapterCard(t,0.05,3.75,5,'DIVING OFF A SKYSCRAPER');flash(t,0,0.2)}
  else if(t<6.1){putGuy(B.S,0,TOP,1.1,0);guy.pose(idle(t,{mouth:'smile',reachR:[0.05,1.62,0.42],poleR:[-1,-0.3,0.3],lookY:0.5,look:0.4}));B.shot([4,TOP+1.2,7],[0,TOP+1.0,1]);
    g.save();g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=6;for(const [cx,cy,r] of [[W*0.62,H*0.42,18],[W*0.66,H*0.34,26]]){g.beginPath();g.arc(cx,cy,r,0,7);g.fill();g.stroke()}g.beginPath();g.ellipse(W*0.78,H*0.2,260,110,0,0,7);g.fill();g.stroke();g.restore();
    txtA('WATER IS SOFT...',W*0.78,H*0.19,52,easeOut(seg(t,4.0,4.3)),{fill:'#2E86DE',sw:0,stroke:0});txtA('RIGHT?',W*0.78,H*0.26,46,easeOut(seg(t,4.7,5.0)),{fill:'#111',stroke:0});flash(t,3.8,0.2)}
  else if(t<8.7){clear3d();setBG('teal');txtA("WATER CAN'T SQUISH",W/2,H*0.13,80,easeOut(seg(t,6.2,6.6)),{fill:'#FFD23F',sw:16});const p=easeOut(seg(t,6.9,7.8));
    const bw=520,bh=440,by=H*0.3;// air box: piston squeezes
    const ah=bh*(1-0.55*p);mols(W*0.27-bw/2,by+bh-ah,bw,ah,6,10,t,0,'#E9EBF0');g.fillStyle='#8A8F99';g.fillRect(W*0.27-bw/2,by+bh-ah-30,bw,30);arrow(W*0.27,by-60+(bh-ah),W*0.27,by+(bh-ah)-40,'#5BE37A',18);txt('AIR',W*0.27,by+bh+60,56,{});txtA('SQUISHES',W*0.27,by+bh+120,44,p,{fill:'#5BE37A',sw:10});
    mols(W*0.73-bw/2,by,bw,bh,9,2,t,0);g.fillStyle='#8A8F99';g.fillRect(W*0.73-bw/2,by-30,bw,30);arrow(W*0.73,by-130,W*0.73,by-40,'#FF4A4A',18);txt('WATER',W*0.73,by+bh+60,56,{});txtA("WON'T BUDGE",W*0.73,by+bh+120,44,p,{fill:'#FF4A4A',sw:10});flash(t,6.1,0.2)}
  else if(t<13.1){clear3d();setBG('blue');const bw=760,bh=420,by=H*0.36;const fast=t>10.4;const k=seg(t,fast?10.4:8.8,fast?10.9:10.2);
    for(const [cx,lab,on] of [[W*0.27,'SLOW',!fast],[W*0.73,'FAST',fast]]){const kk=on?k:(cx<W/2?1:0);mols(cx-bw/4-10,by,bw/2+20,bh,8,2,t,(cx<W/2)?kk:0);stickFig(cx,lerp(by-120,by+(cx<W/2?150:20),kk),1.5,PI);txt(lab,cx,by-170,60,{fill:cx<W/2?'#5BE37A':'#FF4A4A',sw:12})}
    txtA('WATER MOVES ASIDE',W*0.27,by+bh+70,42,easeOut(seg(t,9.6,9.9)),{fill:'#fff',sw:10});if(fast){txtA('NO TIME TO MOVE!',W*0.73,by+bh+70,46,easeOut(seg(t,11.0,11.3)),{fill:'#FF4A4A',sw:10});comic('SLAP!',W*0.86,by+60,90,t,10.9,{life:1.1,rot:0.1,fill:'#FFD23F'})}flash(t,8.7,0.2)}
  else if(t<20.4){clear3d();setBG(BGS2.sky);const sea=H*0.86;g.fillStyle='#2EA8C9';g.fillRect(0,sea,W,H-sea);const ch=440,cx=W*0.2;g.fillStyle='#8A6A4A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(cx-260,sea);g.lineTo(cx-260,sea-ch);g.lineTo(cx+40,sea-ch);g.lineTo(cx+80,sea-ch*0.6);g.lineTo(cx+60,sea);g.closePath();g.fill();g.stroke();
    const fk=clamp(Math.pow(seg(t,15.6,17.4),2));stickFig(cx+90,lerp(sea-ch-10,sea-10,fk),1.4,fk>0?PI*fk:0);txtA('59 m',cx-110,sea-ch/2,70,easeOut(seg(t,15.0,15.3)),{fill:'#fff',sw:14});
    pill('HIGHEST CLIFF JUMP EVER',W*0.62,H*0.16,52,'#FFD23F','#111',t,13.2,20.35);if(t>16.6){speedo(W*0.66,H*0.5,170,120*clamp(seg(t,16.6,18.4)),160,'KM/H','HITTING THE WATER')}if(fk>=1)comic('SPLASH',cx+90,sea-80,80,t,17.4,{life:1.2,rot:-0.1,fill:'#fff'});flash(t,13.1,0.2)}
  else if(t<23.6){clear3d();setBG(BGS2.sky);const sea=H*0.86;g.fillStyle='#2EA8C9';g.fillRect(0,sea,W,H-sea);const sc=3.6;const ch=200,a=easeOut(seg(t,20.6,21.6));
    g.fillStyle='#8A6A4A';g.strokeStyle='#111';g.lineWidth=6;g.fillRect(W*0.3-80,sea-ch,160,ch);g.strokeRect(W*0.3-80,sea-ch,160,ch);txt('CLIFF',W*0.3,sea-ch-40,44,{});
    const th=ch*sc*a;g.fillStyle='#B8D8F0';g.fillRect(W*0.62-90,sea-th,180,th);g.strokeRect(W*0.62-90,sea-th,180,th);g.fillStyle='#FFF2B0';for(let y=sea-th+20;y<sea-20;y+=40)for(let k=0;k<3;k++)g.fillRect(W*0.62-70+k*50,y,30,22);
    if(a>0.9){txtA('3-4× TALLER',W*0.84,H*0.4,80,pop(t,21.7),{fill:'#FFD23F',sw:16});stickFig(W*0.62,sea-th-8,1.0)}flash(t,20.4,0.2)}
  else if(t<26.9){const ti=25.6;let y=TOP,o=flail(t);if(t<ti){const k=seg(t,23.7,ti);y=lerp(TOP,0.2,k*k)}else{y=-3;o=flail(t)}putGuy(B.S,0,y,2.4,0);holder.visible=t<ti;guy.pose(o);B.splash.visible=t>=ti;B.splash.position.set(0,0,2.4);B.splash.scale.setScalar(1+3*easeOut(seg(t,ti,ti+0.4)));
    const cy=Math.max(4,y+1);const [sx,sy]=shake(t,ti,0.6,0.7);B.shot([10+sx,cy+2+sy,18],[0,cy-1+sy,2.4]);pill('FROM 200 METERS UP',W/2,110,52,'#fff','#111',t,23.7,25.55);speedo(W*0.12,H*0.5,110,t<ti?190*seg(t,23.7,ti):0,250,'KM/H');
    if(t>=ti){g.fillStyle='rgba(140,140,150,'+(0.75*easeOut(seg(t,ti,ti+0.2)))+')';g.fillRect(0,0,W,H);for(let i=0;i<70;i++){g.fillStyle='rgba(90,90,100,0.5)';g.beginPath();g.arc(hash(i)*W,hash(i*3)*H,6+hash(i*7)*14,0,7);g.fill()}
      txtA('= CONCRETE',W/2,H*0.45,140,pop(t,ti+0.1),{fill:'#FF4A4A',sw:24})}flash(t,ti,0.15);flash(t,23.6,0.2)}
  else if(t<33.0){holder.visible=true;const ti=31.0;let y;if(t<27.6)y=TOP;else{const k=seg(t,27.6,ti);y=lerp(TOP,-1.5,k*k)}putGuy(B.S,0,y,2.4,0);guy.pose(t<27.6?idle(t,{mouth:'smile'}):PENCIL);holder.visible=y>-1.4;
    B.splash.visible=t>ti&&t<ti+1.0;B.splash.position.set(0,0,2.4);B.splash.scale.setScalar(0.6*(1-seg(t,ti+0.3,ti+1.0)));const cy=Math.max(3,y+1);B.shot([7,cy+1,13],[0,cy-0.5,2.4]);
    pill('FEET FIRST',W*0.78,H*0.25,52,'#5BE37A','#111',t,27.3,32.95);pill('TOES POINTED',W*0.78,H*0.37,52,'#fff','#111',t,28.5,32.95);if(t>29.4){g.save();g.translate(W*0.78,H*0.5);g.rotate(-0.3);const s=pop(t,29.4);g.scale(s,s);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=6;g.fillRect(-120,-16,200,32);g.strokeRect(-120,-16,200,32);g.fillStyle='#F2C9A0';g.beginPath();g.moveTo(80,-16);g.lineTo(130,0);g.lineTo(80,16);g.closePath();g.fill();g.stroke();g.fillStyle='#FF8FB1';g.fillRect(-150,-16,30,32);g.strokeRect(-150,-16,30,32);g.restore();txtA('LIKE A PENCIL',W*0.78,H*0.6,46,pop(t,29.6),{fill:'#FFD23F',sw:10})}
    comic('SLICE!',W*0.4,H*0.55,100,t,ti,{life:1.2,rot:-0.06,fill:'#3FF0FF'});flash(t,26.9,0.2)}
  else{holder.visible=true;putGuy(B.S,0,TOP,0.6,0);guy.pose(idle(t,{mouth:'o',mouthSize:0.5,headYaw:0.45*Math.sin(t*7),armL:[0.4,0],armR:[0.4,0]}));B.shot([3.5,TOP+1.4,9],[2.0,TOP+0.9,0.6]);verdict(t,33.8,false,'NOPE',W*0.64);flash(t,33.0,0.2)}
  vignette();cap16(t+T0)};

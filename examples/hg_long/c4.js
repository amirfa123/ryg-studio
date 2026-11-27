// ===== Chapter 3: the first night (global 108.42 - 143.6) =====
const T0=108.42,TT=35.18;
guy.outfit({beanie:1});
function moon2D(x,y,R){g.save();g.fillStyle='#FFF4C8';g.shadowColor='#FFF4C8';g.shadowBlur=40;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.restore();g.save();g.fillStyle='rgba(200,190,150,0.5)';for(const [a,b,c] of [[-0.3,-0.2,0.18],[0.3,0.25,0.12],[0.1,-0.45,0.1]]){g.beginPath();g.arc(x+a*R,y+b*R,c*R,0,7);g.fill()}g.restore()}
function starsBG(t){for(let i=0;i<60;i++){g.fillStyle=`rgba(255,255,255,${0.4+0.6*Math.abs(Math.sin(t*2+i))})`;g.fillRect(hash(i*3.3)*W,hash(i*7.1)*H*0.5,3,3)}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';const F=scene('forest');forestReset(F);F.tick(t);
  if(t<2.4){props.pack.visible=true;putGuy(F.S,-1,0,3.5,0.3);guy.pose(idle(t));F.shot([1.5,2.0,11],[-0.5,1.3,2],'dusk');chapterCard(t,0.05,2.35,3,'THE FIRST NIGHT')}
  else if(t<5.3){props.pack.visible=true;putGuy(F.S,-1,0,3.5,0.3);guy.pose(idle(t,{lookY:0.6,headPitch:-0.2}));const k=seg(t,3.0,4.8);F.shot([1.5,2.0,11],[-0.5,2.2,2],k<0.5?'dusk':'night');if(k<0.5){g.fillStyle=`rgba(10,10,40,${k*0.6})`;g.fillRect(0,0,W,H)}
    pill('SUN GOES DOWN',W/2,H*0.14,60,ORANGE,'#fff',t,2.5,4.4);pill('COLD. FAST.',W/2,H*0.14,64,CYAN,'#111',t,4.5,5.28);flash(t,2.4,0.15)}
  else if(t<6.6){putGuy(F.S,-1,0,3.5,0.1);guy.pose(shiverPose(t));F.shot([0.2,1.8,7.2],[-1,1.4,3.5],'night');comic('BRRR!',W*0.72,H*0.3,120,t,5.35,{life:1.2,rot:0.1,fill:CYAN});flash(t,5.3,0.15)}
  else if(t<11.6){clear3d();setBG('blue');const v=lerp(37,34.2,easeOut(seg(t,6.8,10.2)));thermo(W*0.36,H*0.6,1.5,v);bigNum(v.toFixed(1)+'°C',W*0.66,H*0.42,140,pop(t,6.8),v<35?CYAN:'#fff');
    pill('HYPOTHERMIA',W*0.66,H*0.66,72,BLUE,'#fff',t,10.1,11.55);txtA('CORE TEMPERATURE',W/2,110,64,pop(t,6.7),{sw:14});flash(t,6.6,0.15)}
  else if(t<15.6){putGuy(F.S,-1,0,3.5,0.1);guy.pose(shiverPose(t,{mouth:t>14.2?'o':'teeth',mouthSize:0.4}));F.shot([1.4,1.9,8.5],[0.2,1.3,3.5],'night');
    pill('SHIVERING',W*0.78,H*0.25,56,CYAN,'#111',t,11.7,15.55);pill('FINGERS STOP WORKING',W*0.74,H*0.42,56,BLUE,'#fff',t,12.6,15.55);pill('FOGGY BRAIN',W*0.78,H*0.59,56,PURPLE,'#fff',t,14.2,15.55);if(t>14.2)fogLayer(0.35*seg(t,14.2,15));flash(t,11.6,0.15)}
  else if(t<20.3){clear3d();setBG('night');starsBG(t);g.fillStyle='#3A5A3A';g.fillRect(W*0.1,H*0.62,W*0.8,H*0.22);g.strokeStyle='#111';g.lineWidth=8;g.strokeRect(W*0.1,H*0.62,W*0.8,H*0.22);txt('COLD GROUND',W*0.5,H*0.78,52,{fill:'#BFE7FF',sw:12});
    g.fillStyle='#FFCC2E';rr(W*0.3,H*0.5,W*0.4,H*0.12,40);g.fill();g.stroke();g.fillStyle='#14A0A8';rr(W*0.42,H*0.5,W*0.2,H*0.12,30);g.fill();g.stroke();
    heatArrows(W*0.5,H*0.6,W*0.36,t,easeOut(seg(t,16.8,17.6)),easeOut(seg(t,19.0,19.8)));txtA('HEAT LOSS',W/2,110,70,pop(t,15.7),{fill:RED,sw:14});if(t>17.6)pill('MUCH FASTER!',W*0.82,H*0.5,52,RED,'#fff',t,17.6,20.25);if(t>19.4)txtA('AIR',W*0.5,H*0.3,48,pop(t,19.4),{sw:10});flash(t,15.6,0.15)}
  else if(t<26.7){const p=seg(t,23.6,26.2);lieGuy(F.S,-3,0.62,1.6,0);guy.pose(idle(t,{mouth:'smile',look:0.3}));F.cover.visible=true;F.cover.children.forEach(m=>m.visible=m.userData.k<p);const k=ease(seg(t,20.3,26.7));F.shot(mix([1.5,2.6,6.5],[0,3.0,5.5],k),[-3,0.5,1.4],'night');
    pill('THICK BED OF DRY LEAVES',W/2,H*0.14,58,ORANGE,'#fff',t,20.4,22.3);pill('GET OFF THE GROUND',W/2,H*0.14,58,GREEN,'#111',t,22.35,23.6);pill('PILE LEAVES ON TOP',W/2,H*0.14,58,GOLD,'#111',t,23.65,26.65);flash(t,20.3,0.15)}
  else if(t<29.0){lieGuy(F.S,-3,0.62,1.6,0);guy.pose(idle(t,{mouth:t>27.8?'grin':'o',mouthSize:0.4,look:0.4}));F.cover.visible=true;F.cover.children.forEach(m=>m.visible=true);F.shot([0.8,2.0,4.2],[-3,0.6,1.2],'night');
    comic('LOOKS SILLY...',W*0.28,H*0.22,80,t,26.8,{life:1.1,rot:-0.08,fill:GOLD});if(t>27.8){check(W*0.78,H*0.3,1.4*pop(t,27.8));txtA('IT WORKS!',W*0.78,H*0.48,70,pop(t,27.9),{fill:GREEN,sw:14})}flash(t,26.7,0.15)}
  else{clear3d();setBG('night');starsBG(t);moon2D(W*0.84,H*0.2,80);threeCard(W*0.24,H*0.52,1,pop(t,29.1)*1.3,1,0);txtA('3 HOURS WITHOUT SHELTER',W*0.65,H*0.42,62,pop(t,29.6),{fill:ORANGE,sw:14});
    txtA('= WHY NIGHT ONE',W*0.66,H*0.56,62,pop(t,31.9),{sw:14});txtA('IS SO DANGEROUS',W*0.66,H*0.67,62,pop(t,32.6),{fill:RED,sw:14});flash(t,29.0,0.15)}
  vignette();cap16(t+T0)};

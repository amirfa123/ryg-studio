// ===== Chapter 5: tracker jackers (global 176.02 - 214.12) =====
const T0=176.02,TT=38.1;
function wasp2D(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;const f=Math.abs(Math.sin(t*40));g.fillStyle='rgba(230,248,255,0.85)';for(const k of [-1,1]){g.beginPath();g.ellipse(k*14-8,-42,16,36*(0.6+0.4*f),k*0.5,0,7);g.fill();g.stroke()}
  g.fillStyle='#FFD21F';g.beginPath();g.ellipse(-30,6,46,26,0,0,7);g.fill();g.stroke();g.fillStyle='#1B1B22';for(const xx of [-52,-34,-16])g.fillRect(xx,-18,9,46);g.fillStyle='#FFD21F';g.beginPath();g.ellipse(26,0,22,18,0,0,7);g.fill();g.stroke();
  g.fillStyle='#1B1B22';g.beginPath();g.arc(56,-4,18,0,7);g.fill();g.fillStyle='#FF3030';g.beginPath();g.arc(62,-10,7,0,7);g.fill();g.fillStyle='#1B1B22';g.beginPath();g.moveTo(-76,6);g.lineTo(-104,10);g.lineTo(-76,16);g.fill();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;holder.rotation.order='XYZ';const F=scene('forest');forestReset(F);F.tick(t);props.pack.visible=true;
  if(t<2.7){F.swarmAt(t,[-4,3.2,-1],1.6);putGuy(F.S,1,0,3,-0.3);guy.pose(idle(t));F.shot([2.5,2.4,11],[-0.8,2.0,0]);chapterCard(t,0.05,2.65,5,'THE TRACKER JACKERS')}
  else if(t<5.4){clear3d();setBG('red');const a=pop(t,2.8);wasp2D(W*0.36,H*0.48+12*Math.sin(t*4),3.0*a,t);txtA('GENETICALLY ENGINEERED',W*0.7,H*0.4,58,pop(t,3.0),{fill:'#fff',sw:12});txtA('KILLER WASPS',W*0.7,H*0.55,92,pop(t,3.9),{fill:GOLD,sw:18});flash(t,2.7,0.15)}
  else if(t<9.5){const k=ease(seg(t,5.4,9.5));F.swarmAt(t,[lerp(-5,-1.4,k),lerp(3,1.9,k),lerp(-1,2.6,k)],lerp(1.6,1.1,k));putGuy(F.S,1,0,3,-0.6);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,wide:true,armL:[0.7,0.5],armR:[0.7,-0.5],headYaw:-0.4}));F.shot([3.2,1.9,9.5],[-0.5,1.6,2]);
    pill('SOUNDS MADE UP?',W*0.5,H*0.14,58,'#FFFFFF','#111',t,5.5,6.9);pill('REAL BEES ARE SCARY ENOUGH',W*0.5,H*0.14,58,GOLD,'#111',t,7.0,9.45);comic('BZZZZ',W*0.24,H*0.35,90,t,6.0,{life:1.5,rot:-0.12,fill:GOLD});flash(t,5.4,0.15)}
  else if(t<15.2){clear3d();setBG('neon');bee2D(W*0.5,H*0.32,1.8*pop(t,9.6),t);txtA('HOW MANY STINGS',W/2,H*0.58,80,pop(t,10.0),{sw:16});txtA('TO KILL AN ADULT?',W/2,H*0.7,80,pop(t,10.6),{fill:GOLD,sw:16});
    if(t>13.0){g.fillStyle='rgba(18,8,46,0.75)';g.fillRect(0,0,W,H);guessBeat(t,13.0,15.15,W/2,H*0.47)}flash(t,9.5,0.15)}
  else if(t<19.1){clear3d();setBG('neon');scale2D(W*0.3,H*0.5,2.4*pop(t,15.3),'1 LB');txtA('=',W*0.48,H*0.5,140,pop(t,16.6),{sw:20});for(let i=0;i<10;i++){const a=pop(t,16.8+i*0.1);if(a>0)bee2D(W*(0.58+(i%5)*0.075),H*(0.42+Math.floor(i/5)*0.16),0.55*a,t+i)}
    txtA('~10 STINGS PER POUND',W/2,H*0.18,76,pop(t,17.6),{fill:GOLD,sw:16});flash(t,15.2,0.15)}
  else if(t<21.3){clear3d();setBG('neon');const v=Math.round(lerp(0,1500,easeOut(seg(t,19.15,20.4))));silhouette(W*0.3,H*0.58,2.2,'#2A2A40');stingDots(W*0.3,H*0.56,340,380,Math.round(v/6),t);bigNum(v.toLocaleString('en-US')+(t>20.4?'+':''),W*0.66,H*0.45,170,1,RED);
    txtA('WELL OVER A THOUSAND',W*0.66,H*0.66,58,pop(t,20.0),{sw:12});flash(t,19.1,0.15)}
  else if(t<25.2){clear3d();setBG('red');bee2D(W*0.3,H*0.45,2.2*pop(t,21.4),t);txtA('ALLERGIC?',W*0.68,H*0.36,100,pop(t,21.5),{fill:GOLD,sw:18});txtA('1 STING',W*0.68,H*0.54,90,pop(t,22.6),{sw:16});txtA('CAN BE DEADLY',W*0.68,H*0.68,70,pop(t,23.4),{fill:RED,sw:14});
    if(t>23.4)hosp2D(W*0.3,H*0.78,0.8*pop(t,23.4));flash(t,21.3,0.15)}
  else if(t<29.1){F.swarmAt(t,[-10.5,1.8,1.5],1.2);putGuy(F.S,-9.2,0,2.0,-PI/2);guy.pose(idle(t,{armL:[1.4,0.3],armR:[1.4,-0.3],mouth:'o',mouthSize:0.6,headYaw:0.3}));F.shot([-6,2.2,8.5],[-12,1.0,1]);
    pill('JUMP IN THE LAKE?',W/2,H*0.14,60,CYAN,'#111',t,25.3,27.15);if(t>27.2){cross(W*0.3,H*0.45,2.0*pop(t,27.2));pill("DON'T!",W/2,H*0.14,70,RED,'#fff',t,27.2,29.05)}flash(t,25.2,0.15)}
  else if(t<32.4){clear3d();setBG('blue');lakeDiagram(W/2,H*0.45,1100,620,t,t>30.0?1:0);flash(t,29.1,0.15)}
  else{const k=seg(t,32.4,38.1);const x=lerp(4,-14,k);F.swarmAt(t,[x+3.2+0.4*Math.sin(t*2),1.7,3.4],1.1);putGuy(F.S,x,0,3.4,-PI/2);guy.pose(run(t,{reachL:t>33.0?[0.14,1.6,0.34]:undefined,reachR:t>33.0?[-0.14,1.6,0.34]:undefined}));F.shot([x-1.5,1.9,11.5],[x+0.5,1.3,3]);
    pill('COVER YOUR FACE',W*0.22,H*0.14,54,GOLD,'#111',t,32.5,38.05);pill('RUN STRAIGHT',W*0.5,H*0.14,54,GREEN,'#111',t,34.2,38.05);pill('AS FAR AS YOU CAN',W*0.78,H*0.14,54,CYAN,'#111',t,35.9,38.05);flash(t,32.4,0.15)}
  vignette();cap16(t+T0)};

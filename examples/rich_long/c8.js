// ===== Chapter 8: step 7, family savings (global 211.80 - 234.12) =====
const T0=211.80,TT=22.32;
const PIG=stageProp('pig',gr=>{const tb=new THREE.Group();table(tb,2.4);gr.add(tb);const p=new THREE.Group();p.position.set(0,1.05,0);p.scale.setScalar(0.9);piggy(p);gr.add(p);gr.userData.pig=p});
function coin(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=GOLD;g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(0,0,30,0,7);g.fill();g.stroke();txt('$',0,3,36,{fill:'#8A5A00',stroke:0});g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<4.7){const S=scene('stage');stageOnly();PIG.visible=true;PIG.position.set(0.9,0,0);PIG.rotation.y=-0.3;setBG('pink');putGuy(S.S,-1.0,0,0.5,0.6);
    guy.pose(idle(t,{reachR:[-0.25,1.55,0.6],armL:[0.3,0],mouth:'grin',headYaw:0.5,lookY:-0.3}));S.shot([0.2,2.0,7.5],[0.2,1.3,0]);
    for(let i=0;i<4;i++){const d=(t-2.6-i*0.5);if(d>0&&d<0.6){const p=proj(new THREE.Vector3(0.9,2.3-d*1.6,0),S.cam);coin(p[0],p[1],1.0)}}
    chapterCard(t,0.05,2.35,7,'THE SAVINGS TRICK');if(t>2.4)pill('FAMILY SAVINGS',W/2,120,56,PINK,'#fff',t,2.45,4.65);PIG.visible=true;flash(t,0,0.2)}
  else if(t<11.2){clear3d();setBG('teal');tierStep(W*0.2,H*0.45,'$5,000','BANK LIMIT UP',pop(t,4.8),GREEN);tierStep(W*0.5,H*0.45,'$10,000','BIGGER LIMIT',pop(t,7.9),CYAN);tierStep(W*0.8,H*0.45,'$100,000','+ DISCOUNTS',pop(t,9.6),GOLD);
    if(t>6.2)arrow(W*0.2,H*0.7,W*0.2,H*0.62,GREEN,22);if(t>8.4)arrow(W*0.335,H*0.45,W*0.365,H*0.45,'#fff',18);if(t>9.8)arrow(W*0.635,H*0.45,W*0.665,H*0.45,'#fff',18);flash(t,4.7,0.2)}
  else if(t<16.6){clear3d();setBG('red');txtA('THE TWIST',W/2,130,80,pop(t,11.3),{fill:GOLD,sw:16});
    panel(W/2,H*0.52,560,440,'rgba(10,12,25,0.9)',PINK,34);lockIcon2(W/2,H*0.5,1.6*pop(t,12.4),PINK);
    arrow(W*0.12,H*0.52,W*0.32,H*0.52,GREEN,26);txtA('IN',W*0.21,H*0.44,50,1,{fill:GREEN,sw:10});
    arrow(W*0.68,H*0.52,W*0.88,H*0.52,'#9AA0AA',26);txtA('OUT',W*0.78,H*0.44,50,1,{fill:'#9AA0AA',sw:10});if(t>13.2)cross(W*0.78,H*0.52,2.0*pop(t,13.2));
    txtA('LOCKED FOR GOOD',W/2,H*0.86,60,pop(t,15.0),{fill:PINK,sw:13});flash(t,11.2,0.2)}
  else{const S=scene('stage');stageOnly();PIG.visible=true;PIG.position.set(-3.6,0,0);PIG.rotation.y=0.4;setBG('gold');putGuy(S.S,-2.0,0,0.6,0.5);
    guy.pose(idle(t,{mouth:t>19.6?'grin':'o',mouthSize:0.7,armL:t>19.6?[2.5,0.2]:[0.3,0],armR:t>19.6?[2.5,-0.2]:[0.3,0]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const r=t<19.6?0:easeOut(seg(t,19.6,20.8));panel(W*0.66,H*0.42,820,300);txt('FINAL GOAL',W*0.66,H*0.31,46,{fill:GOLD,stroke:0});
    if(t<19.6)txt('?',W*0.66,H*0.44,140*(1+0.08*Math.sin(t*8)),{fill:'#fff',stroke:0});else txt(moneyStr(2e6*r),W*0.66,H*0.44,110,{fill:GREEN,stroke:0});bar(W*0.66-360,H*0.52,720,30,r,GREEN);
    if(t>19.6)bills(t,19.65,W*0.66,H*0.4,24);flash(t,16.6,0.2)}
  vignette();cap16(t+T0)};

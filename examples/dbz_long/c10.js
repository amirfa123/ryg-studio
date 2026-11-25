// ===== Chapter 6: verdict + outro (global 260.88 - end) =====
const T0=260.88,TT=28.0;
const FLEX2=(t)=>({armL:[1.5,0],armR:[1.5,0],bendL:1.9+0.15*Math.sin(t*5),bendR:1.9+0.15*Math.sin(t*5+1),curlL:1,curlR:1,mouth:'grin',blink:BLINK(t),legL:[0,0,0,0.12],legR:[0,0,0,-0.12]});
function row(y,a,label,res,col,kind,t){if(a<=0)return;g.save();g.globalAlpha=clamp(a*1.5);g.fillStyle='rgba(10,12,25,0.85)';rr(W*0.1,y-62,W*0.8,124,26);g.fill();g.strokeStyle=col;g.lineWidth=8;g.stroke();g.restore();
  txtA(label,W*0.14,y,56,a,{align:'left',sw:12});txtA(res,W*0.66,y,56,a,{fill:col,sw:12});if(kind==='x')cross(W*0.85,y,0.9*clamp(a));else if(kind==='ok')check(W*0.85,y,0.9*clamp(a));else lockIcon(W*0.85,y+10,0.6*clamp(a),0)}
function moon2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFE58A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.arc(0,0,60,0.6,PI*2-0.6);g.quadraticCurveTo(10,0,Math.cos(0.6)*60,Math.sin(0.6)*60);g.closePath();g.fill();g.stroke();g.restore()}
function apple2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#E23B3B';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.arc(-22,6,44,0,7);g.arc(22,6,44,0,7);g.fill();g.beginPath();g.arc(-22,6,44,PI*0.6,PI*1.6);g.stroke();g.beginPath();g.arc(22,6,44,-PI*0.6,PI*0.4);g.stroke();g.fillStyle='#4CC26A';g.beginPath();g.ellipse(14,-50,22,10,-0.5,0,7);g.fill();g.stroke();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;SCALE.visible=false;
  if(t<3.4){grMood(false,t);screen(1,'#3FF0FF');stand(GR.S,0,0,0,0.25);guy.pose(idle(t,{mouth:'smile'}));const k=ease(seg(t,0,3.4));grShot(mix([4.2,2.4,10.5],[3.0,2.0,8.0],k),[0,1.2,0]);
    txtA('SO... WHAT WOULD HAPPEN?',W/2,130,84,pop(t,0.1),{fill:GOLD,sw:18})}
  else if(t<15.3){clear3d();setBG('neon');txtA('THE VERDICT',W/2,90,76,pop(t,3.45),{fill:GOLD,sw:16});
    row(H*0.27,pop(t,3.5),'GRAVITY ROOM','FLATTENED',RED,'x',t);row(H*0.43,pop(t,5.8),'BEST PUNCH','~½ TONNE',GREEN,'ok',t);row(H*0.59,pop(t,8.6),'FLYING','GIANT MACHINE',RED,'x',t);row(H*0.75,pop(t,11.8),'ENERGY BLAST','LOCKED AWAY',GOLD,'lock',t);flash(t,3.4,0.15)}
  else if(t<18.2){const G=gymExtras();G.bag.visible=false;G.bar.visible=true;const up=0.5+0.5*Math.sin((t-15.3)*3.2-PI/2);const by=lerp(0.42,0.92,up);G.bar.position.set(0,by,0.62);putGuy(G.S,0,0,0,0);const sq=1-up;
    guy.pose({reachL:[0.55,by,0.62],reachR:[-0.55,by,0.62],poleL:[1,0,-0.3],poleR:[-1,0,-0.3],legL:[0.9*sq,1.5*sq,-0.6*sq,0.22],legR:[0.9*sq,1.5*sq,-0.6*sq,-0.22],jump:-0.34*sq,mouth:'grin',blink:BLINK(t)});G.shot([3.4,1.9,6.6],[0,0.9,0.4]);
    txtA('THE GOOD NEWS?',W*0.25,H*0.16,64,pop(t,15.35),{fill:GOLD,sw:14});if(t>16.4)pill('REAL TRAINING WORKS',W*0.72,H*0.2,60,GREEN,'#111',t,16.4,18.15);flash(t,15.3,0.15)}
  else if(t<20.8){clear3d();setBG('teal');const xs=[0.2,0.4,0.6,0.8],ts=[18.25,18.9,19.45,19.95],labs=['LIFT','RUN','SLEEP','EAT WELL'];
    for(let i=0;i<4;i++){const a=pop(t,ts[i]);if(a<=0)continue;g.save();g.translate(W*xs[i],H*0.48);g.scale(a,a);panel(0,0,330,380,'rgba(10,12,25,0.9)',[GOLD,CYAN,'#B9A8FF',RED][i],30);g.restore();
      if(i===0)weight2D(W*xs[i],H*0.45,0.6*a,'');else if(i===1)stickFig(W*xs[i],H*0.5,3.4*a,0.3*Math.sin(t*10));else if(i===2)moon2D(W*xs[i],H*0.44,1.3*a);else apple2D(W*xs[i],H*0.45,1.3*a);txtA(labs[i],W*xs[i],H*0.48+130*a,52,a,{sw:12})}flash(t,18.2,0.15)}
  else if(t<23.8){grMood(false,t);screen(1,'#5BE37A');stand(GR.S,0,0,0,0.25);guy.pose(FLEX2(t));const k=ease(seg(t,20.8,23.8));grShot(mix([2.6,1.8,7.2],[2.0,1.7,6.0],k),[0,1.2,0]);pill('YOUR BODY ADAPTS',W*0.74,H*0.3,60,GREEN,'#111',t,21.0,23.75);flash(t,20.8,0.15)}
  else{grMood(false,t);screen(100,'#FF4A4A');const k=seg(t,24.6,27.4);stand(GR.S,lerp(0,4.5,k),0,0.5,k>0?PI/2:0.25);guy.pose(k>0&&k<1?walk(t,7,{armR:[2.4,0.2*Math.sin(t*10)],mouth:'grin'}):idle(t,{armR:[2.4,0.2*Math.sin(t*10)],mouth:'grin'}));grShot([2.0,2.2,9.5],[-0.6,1.6,0]);
    const [sx,sy]=proj(new THREE.Vector3(-2.6,2.7,-3.84),GR.cam);cross(sx,sy,2.2*pop(t,24.2));comic('SKIP THIS PART!',W*0.3,H*0.72,96,t,24.4,{life:3.2,rot:-0.06,fill:'#FFD23F'});
    const fo=seg(t,27.2,28.0);if(fo>0){g.fillStyle=`rgba(0,0,0,${fo})`;g.fillRect(0,0,W,H)}flash(t,23.8,0.15)}
  vignette();cap16(t+T0)};

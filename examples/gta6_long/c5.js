// ===== Chapter 5: who are you playing as? (global 113.5 - 142.6) =====
const T0=113.5,TT=29.1;
const SUNSET='radial-gradient(circle at 72% 58%,#FFF0A0 0,#FFD27A 5%,rgba(255,180,107,0) 12%),'+BGS.sunset;
function card(x,y,s,col,name,hi=0,grey=0){g.save();g.translate(x,y);g.scale(s,s);if(hi){g.shadowColor='#FFD23F';g.shadowBlur=50*hi}g.fillStyle=grey?'#555A66':col;g.strokeStyle='#111';g.lineWidth=10;rr(-170,-230,340,460,30);g.fill();g.stroke();g.shadowBlur=0;
  g.fillStyle='rgba(0,0,0,0.25)';rr(-140,-200,280,300,20);g.fill();g.save();g.beginPath();rr(-140,-200,280,300,20);g.clip();silhouette(0,40,1.1,grey?'#2A2D35':'#1B1240');g.restore();txt('?',0,-60,90,{fill:'#fff',sw:14});g.restore();
  g.save();g.translate(x,y);g.scale(s,s);txt(name,0,165,64,{sw:14});g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<2.1){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.car.c.position.set(-6,0,-1.2);C.car.c.rotation.y=0;C.car.spin(0);C.cop.c.visible=false;
    putGuy(C.S,2.2,0.18,-3.2,-0.3);guy.pose(idle(t,{mouth:'smile',headYaw:0.2}));C.shot([3.5,1.8,6.5],[1.6,1.6,-3.2]);chapterCard(t,0.05,2.05,4,'WHO ARE YOU PLAYING AS?');flash(t,0,0.2)}
  else if(t<9.2){clear3d();setBG('neon');const two=t>3.6;
    if(!two){txt('1',W/2,H*0.48,320*pop(t,2.2),{fill:'#FFD23F',sw:40});if(t>2.8)cross(W/2,H*0.48,2.6*pop(t,2.8))}
    else{card(W*0.3,H*0.47,pop(t,3.6),'#3FF0FF','JASON');card(W*0.7,H*0.47,pop(t,4.0),'#FF8FB1','LUCIA');if(t>4.2){txt('2',W/2,H*0.14,150*pop(t,3.7),{fill:'#FFD23F',sw:26})}
      if(t>5.7){heart(W/2,H*0.47,1.6*pop(t,5.7)*(1+0.06*Math.sin(t*8)))}pill('A CRIMINAL COUPLE',W/2,H*0.8,50,'#fff','#111',t,5.7,7.3);pill('MODERN BONNIE & CLYDE',W/2,H*0.8,50,'#FF3DA6','#fff',t,7.35,9.15)}flash(t,2.1,0.2)}
  else if(t<11.6){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.car.c.position.set(-30,0,-1.2);C.cop.c.visible=false;const on=(t*4%1)<0.5;C.alarm.color.set(on?0xFF2A2A:0x661111);
    const u=t-9.2;putGuy(C.S,-14+u*3.2,0.18,-4.2,PI/2);guy.pose(run(t));C.shot([-10.5,2.6,8.5],[-12.6,2.0,-4.5]);
    g.fillStyle=`rgba(255,40,40,${on?0.18:0})`;g.fillRect(0,0,W,H);comic('HEIST GONE WRONG!',W*0.5,H*0.14,90,t,9.5,{life:2.1,rot:-0.04,fill:'#FF4A4A'});flash(t,9.2,0.2)}
  else if(t<14.4){clear3d();setBG('blue');leonida(W*0.45,H*0.5,1.55,1);const pins=[[-180,-150],[60,-170],[200,-40],[150,170],[-40,-60],[100,40]].map(([x,y])=>[W*0.45+x*1.55,H*0.5+y*1.55]);
    g.save();g.strokeStyle='#E23B3B';g.lineWidth=7;for(let i=1;i<pins.length;i++){const k=clamp((t-11.9-i*0.3)/0.3);if(k<=0)continue;const [a,b]=[pins[i-1],pins[i]];g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(lerp(a[0],b[0],k),lerp(a[1],b[1],k));g.stroke()}g.restore();
    pins.forEach(([x,y],i)=>{const tk=11.7+i*0.3;if(t<tk)return;const s=pop(t,tk);g.fillStyle='#E23B3B';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,16*s,0,7);g.fill();g.stroke()});
    pill('A STATEWIDE CONSPIRACY',W/2,110,56,'#E23B3B','#fff',t,11.8,14.35);flash(t,11.6,0.2)}
  else if(t<18.4){clear3d();setBG('neon');const side=Math.floor((t-14.9)/0.8)%2;const hiL=t>14.9&&side===0?1:0,hiR=t>14.9&&side===1?1:0;card(W*0.27,H*0.5,0.85+0.07*hiL,'#3FF0FF','JASON',hiL);card(W*0.73,H*0.5,0.85+0.07*hiR,'#FF8FB1','LUCIA',hiR);
    const a=t*3;g.save();g.translate(W/2,H*0.5);g.rotate(a);for(const s of [0,PI]){g.save();g.rotate(s);g.strokeStyle='#111';g.lineWidth=34;g.beginPath();g.arc(0,0,110,0.2,PI-0.4);g.stroke();g.strokeStyle='#FFD23F';g.lineWidth=20;g.stroke();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();const ex=Math.cos(PI-0.4)*110,ey=Math.sin(PI-0.4)*110;g.moveTo(ex-40,ey-10);g.lineTo(ex+10,ey-40);g.lineTo(ex+16,ey+26);g.closePath();g.fill();g.stroke();g.restore()}g.restore();
    pill('SWITCH ANYTIME',W/2,H*0.1,58,'#FFD23F','#111',t,14.9,18.35);pill('FROM EARLY PREVIEWS',W/2,H*0.8,40,'#fff','#111',t,16.6,18.35);flash(t,14.4,0.2)}
  else if(t<23.0){clear3d();setBG('red');const br=t>20.9,out=t>22.0;const sh=br&&!out?Math.sin(t*60)*6:0;
    heart(W*0.33+sh,H*0.48,2.6,br?'#555A66':'#FF3D7F');heart(W*0.67,H*0.48,2.6,out?'#555A66':'#FF3D7F');
    g.save();g.strokeStyle=out?'#555':'#C9CDD6';g.lineWidth=12;for(let i=0;i<6;i++){g.beginPath();g.ellipse(W*0.33+120+i*48,H*0.48,26,16,0,0,7);g.stroke()}g.restore();
    if(br){g.save();g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(W*0.33,H*0.36);g.lineTo(W*0.31,H*0.44);g.lineTo(W*0.35,H*0.5);g.lineTo(W*0.32,H*0.58);g.stroke();g.restore()}
    pill('SHARED MISSIONS',W/2,H*0.12,56,'#fff','#111',t,18.5,22.95);if(out){comic('BOTH OUT!',W/2,H*0.8,120,t,22.0,{life:1.0,rot:-0.05,fill:'#FF4A4A'})}flash(t,18.4,0.2)}
  else{const S=scene('stage');stageOnly();setBG('teal');putGuy(S.S,-2.3,0,0,0.35);const k=easeOut(seg(t,23.1,23.5));
    guy.pose(idle(t,{armL:[0.3+1.9*k,0],armR:[0.3,0],bendL:0.9*k,mouth:'grin',jump:0.02*Math.sin(t*3)}));S.shot([0,1.3,9.5],[0,1.1,0]);
    pill('PROTECT YOUR PARTNER',W*0.62,H*0.18,56,'#FFD23F','#111',t,23.4,29.05);
    if(t>24.9){const a=easeOut(seg(t,24.9,25.3));g.save();g.globalAlpha=a;panel(W*0.62,H*0.55,820,300);g.restore();if(a>0.5){txt('RELATIONSHIP',W*0.62,H*0.45,48,{stroke:0});const v=0.5+0.42*Math.sin((t-24.9)*1.6);bar(W*0.62-340,H*0.53,680,60,1,'#2A2D35');
      const gr=g.createLinearGradient(W*0.62-340,0,W*0.62+340,0);gr.addColorStop(0,'#FF4A4A');gr.addColorStop(0.5,'#FFD23F');gr.addColorStop(1,'#5BE37A');g.fillStyle=gr;rr(W*0.62-332,H*0.53+8,664,44,22);g.fill();heart(W*0.62-320+640*v,H*0.53+30,0.8);
      txt('ROCKY',W*0.62-280,H*0.65,36,{stroke:0,fill:'#FF8A8A'});txt('SOLID',W*0.62+280,H*0.65,36,{stroke:0,fill:'#8AF0A0'})}}
    flash(t,23.0,0.2)}
  vignette();cap16(t+T0)};

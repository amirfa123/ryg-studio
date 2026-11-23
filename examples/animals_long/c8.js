// ===== Chapter 7: verdict + outro (global 255.94 - 281.2) =====
const T0=255.94,TT=25.26;
const SW=scene('swamp');const GZ=mkGator(SW.S);
function gameTV(R,t,over){tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#24402E');gr.addColorStop(1,'#7DB04E');c.fillStyle=gr;c.fillRect(0,0,w,h);c.fillStyle='#2C4A1E';const x=w*0.3+40*Math.sin(t*2);c.beginPath();c.ellipse(x,h*0.7,120,30,0,0,7);c.fill();c.fillRect(x+100,h*0.66,90,22);
  c.fillStyle='#FFCC2E';c.beginPath();c.arc(w*0.7,h*0.6,26,0,7);c.fill();c.fillStyle='#14907E';c.fillRect(w*0.7-24,h*0.64,48,46);
  if(over){c.fillStyle='rgba(0,0,0,0.55)';c.fillRect(0,0,w,h);c.font='900 72px Inter';c.textAlign='center';c.fillStyle='#FF4A4A';c.fillText('GAME OVER',w/2,h/2+24)}})}
function row(y,i,lab,col,a,ic){if(a<=0.01)return;g.save();g.globalAlpha=clamp(a*2);g.fillStyle='rgba(10,12,25,0.85)';rr(W*0.12,y-58,W*0.76,116,26);g.fill();g.strokeStyle=col;g.lineWidth=6;g.stroke();g.restore();CARDS[i][1](W*0.2,y,0.55*clamp(a),0);txt(CARDS[i][0],W*0.3,y,48,{align:'left',sw:10});txt(lab,W*0.84,y,48,{align:'right',fill:col,sw:10})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;GZ.a.visible=false;
  if(t<6.6){const R=scene('room');gameTV(R,t,t>4.3&&(t%1.1)<0.8);clockDraw(R,9,30+t);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:t>4.3?'o':'smile',headPitch:-0.05,jump:t>4.3?0.03*Math.abs(Math.sin(t*10)):0});
    const k=ease(seg(t,0,6.6));R.shot(mix([2.2,3.9,7.4],[1.4,3.6,6.4],k),[0,1.6,-2.5]);
    titleBlock(easeOut(seg(t,0.1,0.5))*(1-seg(t,4.0,4.3)),'SO, COULD THE ANIMALS OF GTA 6','ACTUALLY KILL YOU?',110);
    if(t>4.3){txtA('IN THE GAME?',W*0.25,H*0.2,72,pop(t,4.35),{fill:'#fff',sw:16});txtA('ALL THE TIME!',W*0.75,H*0.2,80,pop(t,5.3),{fill:RED,sw:16})}}
  else if(t<19.6){clear3d();setBG('neon');txtA('IN REAL LIFE',W/2,100,80,pop(t,6.65),{fill:GOLD,sw:16});
    const rare=GOLD;const P2=(tk)=>t<tk?0:pop(t,tk);row(H*0.25,0,'VERY RARE',rare,P2(7.6),0);row(H*0.38,1,'VERY RARE',rare,P2(8.4),0);row(H*0.51,2,'VERY RARE',rare,P2(9.2),0);
    row(H*0.64,3,'DOCTOR VISIT','#FF9AB0',P2(13.6),0);row(H*0.77,4,'REAL DANGER',RED,P2(15.8),0);
    pill('KEEP YOUR DISTANCE',W/2,H*0.9,46,CYAN,'#111',t,11.8,13.5);if(t>16.6){const p=1+0.05*Math.sin(t*12);g.save();g.translate(W*0.5,H*0.77);g.scale(p,p);g.strokeStyle=RED;g.lineWidth=10;rr(-W*0.39,-64,W*0.78,128,30);g.stroke();g.restore()}flash(t,6.6,0.2)}
  else{GZ.a.visible=true;const peek=easeOut(seg(t,22.2,22.8));GZ.a.position.set(3.4,lerp(-0.7,-0.2,peek),3.0);GZ.a.rotation.set(0,PI,0);GZ.anim(t,t>23.2?0.3+0.3*Math.sin(t*8):0,0,3);
    const walkIn=seg(t,19.6,21.8),back=easeOut(seg(t,22.9,23.5));putGuy(SW.S,0,0.51+0.18*Math.sin(PI*seg(t,22.9,23.5)),lerp(lerp(1.0,3.1,walkIn),2.2,back),0);
    guy.pose({...(walkIn>0&&walkIn<1?walk(t,5):idle(t)),mouth:t>22.8?'o':'smile',wide:t>22.8,armL:[t>22.8?2.4:0.3,0],armR:[t>22.8?2.4:0.3,0],look:0,lookY:t>21.8&&t<22.8?-0.8:0,headPitch:t>21.8&&t<22.8?0.35:0});
    SW.shot([5.0,3.2,12.5],[0.6,1.3,3.0]);pill('CHECK THE SWAMP FIRST',W/2,110,56,GREEN,'#111',t,20.6,25.2);comic('NOPE!',W*0.72,H*0.3,120,t,23.0,{life:2.2,rot:-0.08,fill:RED});flash(t,19.6,0.2)}
  vignette();cap16(t+T0)};

// ===== Chapter 1b: how often do gators get people (global 69.26 - 101.02) =====
const T0=69.26,TT=31.76;
const SW=scene('swamp');const GZ=mkGator(SW.S);
const RED31=new Set();{let k=0,i=0;while(RED31.size<31){RED31.add(Math.floor(hash(i*7.31+1)*500));i++}}
function sign2D(x,y,s,l1,l2,a){if(a<=0)return;g.save();g.translate(x,y);g.scale(s*a,s*a);g.fillStyle='#8C5E36';g.strokeStyle='#111';g.lineWidth=8;g.fillRect(-14,40,28,200);g.strokeRect(-14,40,28,200);g.fillStyle='#FFE14D';rr(-300,-110,600,190,20);g.fill();g.stroke();g.fillStyle='#111';rr(-286,-96,572,162,14);g.lineWidth=4;g.stroke();
  txt(l1,0,-48,40,{fill:'#111',stroke:0});txt(l2,0,22,40,{fill:'#C0392B',stroke:0});g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;GZ.a.visible=true;
  SW.gators.forEach((g2,i)=>g2.position.y=-0.25+0.04*Math.sin(t*2+i));
  if(t<3.6){GZ.a.position.set(3.2,-0.12,1.2);GZ.a.rotation.set(0,PI+0.4,0);GZ.anim(t,0.2,0,3);putGuy(SW.S,0,0.51,lerp(3.0,1.6,seg(t,0,3)),0.2);guy.pose({...walk(t,5),mouth:'o',mouthSize:0.5,look:0.6,headYaw:0.4});
    SW.shot([-3.5,4.5,11],[0.2,0.4,0.5]);pill('HOW OFTEN DO GATORS GET PEOPLE?',W/2,110,52,GOLD,'#111',t,0.1,3.55)}
  else if(t<7.2){clear3d();setBG('blue');leonida(W*0.5,H*0.53,1.6,1);const n=Math.floor(260*easeOut(seg(t,4.0,6.6)));
    const FP=new Path2D('M-260,-200 L120,-210 C150,-205 170,-190 185,-170 C210,-120 230,-40 240,30 C250,110 225,170 190,205 C165,230 135,226 118,200 C80,140 60,80 20,40 C-20,0 -60,-60 -110,-95 C-160,-130 -230,-140 -260,-150 Z');let m=0;for(let i=0;m<n&&i<4000;i++){const px=(hash(i*3.1)-0.5)*520,py=(hash(i*5.7)-0.5)*440;if(!g.isPointInPath(FP,px,py))continue;m++;const x=W*0.5+px*1.6,y=H*0.53+py*1.6;g.fillStyle='#2F5A22';g.strokeStyle='#111';g.lineWidth=2;g.beginPath();g.ellipse(x,y,9,5,hash(i)*3,0,7);g.fill();g.stroke()}
    const v=1.3e6*easeOut(seg(t,4.0,6.6));panel(W*0.79,H*0.22,560,170,'rgba(10,12,25,0.9)',GREEN,30);txt(Math.round(v).toLocaleString('en-US'),W*0.79,H*0.2,86,{fill:GREEN,stroke:0});txt('ALLIGATORS',W*0.79,H*0.27,36,{stroke:0});flash(t,3.6,0.2)}
  else if(t<17.8){clear3d();setBG('neon');const tl2=seg(t,7.2,11.2);txtA('RECORDED ATTACKS SINCE 1948',W/2,110,64,easeOut(seg(t,7.25,7.6)),{fill:GOLD,sw:14});
    const cols=50,cw=26,x0=W/2-cols*cw/2+cw/2,y0=H*0.3;const n=Math.floor(500*tl2);
    for(let i=0;i<n;i++){const red=RED31.has(i)&&t>12.2;const x=x0+(i%cols)*cw,y=y0+Math.floor(i/cols)*cw;const s=red?(1+0.3*Math.max(0,1-(t-12.4)*2)):1;g.fillStyle=red?RED:'rgba(255,255,255,0.75)';g.beginPath();g.arc(x,y,(red?12:9)*s,0,7);g.fill();if(red){g.strokeStyle='#111';g.lineWidth=3;g.stroke()}}
    if(t<14.4){txtA('~500',W*0.3,H*0.74,110,pop(t,10.6),{fill:'#fff',sw:18});txtA('ATTACKS',W*0.3,H*0.84,46,pop(t,10.6),{sw:10});
    if(t>12.2){txtA('31',W*0.7,H*0.74,110,pop(t,12.3),{fill:RED,sw:18});txtA('FATAL',W*0.7,H*0.84,46,pop(t,12.3),{fill:RED,sw:10})}}
    if(t>14.4){const a=pop(t,14.4);g.save();g.globalAlpha=0.9;g.fillStyle='rgba(8,8,20,0.75)';g.fillRect(0,H*0.66,W,H*0.24);g.restore();txtA('31 IN 75+ YEARS',W/2,H*0.77,110,a,{fill:GOLD,sw:20})}flash(t,7.2,0.2)}
  else if(t<19.4){clear3d();setBG('teal');gator2D(W*0.5,H*0.55,2.2,0.2);verdict(t,17.85,true,'REAL, BUT RARE');flash(t,17.8,0.2)}
  else if(t<26.5){clear3d();setBG('swamp');txtA('MOST INCIDENTS = RISKY BEHAVIOR',W/2,110,62,pop(t,19.45),{fill:GOLD,sw:14});
    const a=pop(t,22.0),b=pop(t,25.2);if(t<22.0){g.save();g.translate(W/2,H*0.52);g.scale(pop(t,19.6),pop(t,19.6));g.fillStyle=GOLD;g.strokeStyle='#111';g.lineWidth=14;g.lineJoin='round';g.beginPath();g.moveTo(0,-170);g.lineTo(190,150);g.lineTo(-190,150);g.closePath();g.fill();g.stroke();txt('!',0,40,220,{fill:'#111',stroke:0});g.restore()}
    if(t>22.0){g.save();g.translate(W*0.3,H*0.52);g.scale(a,a);panel(0,0,560,420,'rgba(10,12,25,0.85)',CYAN,30);g.fillStyle='#2EC4C9';g.fillRect(-240,10,480,120);person2D(-40,30,2.2,'#FFCC2E');gator2D(140,60,0.8,0.5);txt('SWIMMING HERE',0,-120,48,{sw:10});g.restore();cross(W*0.3+250,H*0.52-190,1.4*a)}
    if(t>25.2){g.save();g.translate(W*0.7,H*0.52);g.scale(b,b);panel(0,0,560,420,'rgba(10,12,25,0.85)',CYAN,30);gator2D(-60,60,1.2,0.9);g.fillStyle='#E8A33D';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(160,10,30,0,7);g.fill();g.stroke();txt('FEEDING',0,-120,48,{sw:10});g.restore();cross(W*0.7+250,H*0.52-190,1.4*b)}flash(t,19.4,0.2)}
  else{GZ.a.position.set(-3.6,-0.12,1.0);GZ.a.rotation.set(0,0.4,0);GZ.anim(t,0.15,0,3);const k=seg(t,27.0,29.5);putGuy(SW.S,0,0.51,lerp(1.2,3.0,k),k>0&&k<1?0:0.1);
    guy.pose({...(k>0&&k<1?walk(t,6):idle(t)),mouth:'grin',armR:[t>29.4?2.6:0.3,0],bendR:t>29.4?0.4:0});SW.shot([2.5,3.0,10.5],[-0.5,1.0,1.5]);
    sign2D(W*0.24,H*0.26,1.0,'STAY OUT OF THE SWAMP','NEVER FEED A GATOR',pop(t,26.6));flash(t,26.5,0.2)}
  vignette();cap16(t+T0)};

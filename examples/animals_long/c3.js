// ===== Chapter 2: python (global 101.02 - 144.22) =====
const T0=101.02,TT=43.2;
const SW=scene('swamp');const PY=makePython(52,0.15);SW.S.add(PY.g);
// a log for the python to coil around
const LOG=new THREE.Group();SW.S.add(LOG);part(LOG,cap(0.35,2.6),toon(0x6B4A2E),[0,0.35,0],[1,1,1],[0,0,PI/2],0.012);LOG.position.set(-2.5,0,5.0);
const slither=(x0,z0,len,t,sp=1.4)=>u=>[x0-u*len+t*sp*0,0,z0+0.35*Math.sin(u*14-t*5)*(0.4+0.6*u)];
const coilPath=(cx,cz,t)=>u=>{if(u<0.12){const k=u/0.12;return [cx+0.9*(1-k)*0+0.55,0.55+0.5*(1-k),cz+0.3*k*Math.sin(t*2)]}const a=(u-0.12)*28,rr2=0.55+0.04*Math.sin(a);return [cx+Math.cos(a)*rr2,0.02+(u-0.12)*0.9*Math.max(0,Math.sin(a*0.5)),cz+Math.sin(a)*rr2]};
function lungs2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FF8FB1';g.strokeStyle='#111';g.lineWidth=8;for(const k of [-1,1]){g.beginPath();g.ellipse(k*70,20,60,110,k*0.15,0,7);g.fill();g.stroke()}g.fillStyle='#E8E8F0';rr(-14,-130,28,110,10);g.fill();g.stroke();g.restore()}
function heartBeat(x,y,s,t,rate){const b=1+0.12*Math.max(0,Math.sin(t*rate*PI*2))**8;heart(x,y,s*b,'#FF3D7F')}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;PY.g.visible=true;LOG.visible=false;
  SW.gators.forEach((g2,i)=>g2.position.y=-0.6);
  if(t<5.5){const x0=-6+t*1.3;PY.set(u=>[x0-u*6,0,5.0+0.35*Math.sin(u*14-t*5)*(0.4+0.6*u)],t);holder.visible=false;SW.shot([x0-1.5,2.6,11.5],[x0-2.4,0.2,5.0]);
    chapterCard(t,0.05,2.2,2,'THE PYTHON');pill('ORIGINALLY FROM SOUTHEAST ASIA',W/2,110,50,GOLD,'#111',t,2.4,5.45);if(t>4.0)verdict(t,4.1,false,'INVASIVE');}
  else if(t<10.0){clear3d();setBG('swamp');txtA('THE EVERGLADES',W/2,110,72,pop(t,5.55),{fill:GOLD,sw:16});const n=Math.floor(60*easeOut(seg(t,6.0,9.0)));
    for(let i=0;i<n;i++){const x=W*(0.08+0.84*hash(i*2.3)),y=H*(0.3+0.5*hash(i*4.1));snake2D(x,y,0.38,t+i)}
    if(t>8.1){const a=pop(t,8.1);g.save();g.translate(W/2,H*0.55);g.scale(a,a);panel(0,0,860,200,'rgba(10,12,25,0.9)',GREEN,30);txt('TENS OF THOUSANDS',0,8,84,{fill:GREEN,stroke:0});g.restore()}flash(t,5.5,0.2)}
  else if(t<13.3){const L=5.5;PY.set(u=>[2.75-u*L,0,5.0+0.05*Math.sin(u*20)],t);putGuy(SW.S,3.7,0,5.3,-0.4);guy.pose({...idle(t),mouth:'o',wide:true,look:-0.8,lookY:-0.4,headYaw:-0.4,armL:[2.5,0],armR:[2.5,0]});
    SW.shot([0.6,3.4,15.5],[0.6,0.7,5.0]);const p0=proj(new THREE.Vector3(-2.75,0.1,5.9),SW.cam),p1=proj(new THREE.Vector3(2.75,0.1,5.9),SW.cam);
    g.save();g.strokeStyle='#111';g.lineWidth=14;g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.stroke();g.strokeStyle=GOLD;g.lineWidth=8;g.stroke();g.restore();txt('18+ FEET',(p0[0]+p1[0])/2,p0[1]+60,80,{fill:GOLD,sw:16});
    comic('WHOA!',W*0.8,H*0.22,100,t,11.6,{life:1.5,rot:0.1});flash(t,10.0,0.2)}
  else if(t<18.2){clear3d();setBG('blue');txtA('HOW DO THEY KILL?',W/2,110,80,pop(t,13.35),{fill:GOLD,sw:16});lungs2D(W/2,H*0.5,1.5*pop(t,14.6));txtA('SUFFOCATION?',W/2,H*0.77,70,pop(t,15.6),{sw:14});flash(t,13.3,0.2)}
  else if(t<25.4){clear3d();setBG('red');const a=pop(t,18.25);lungs2D(W*0.16,H*0.42,0.8*a);cross(W*0.16,H*0.42,2.0*pop(t,18.4));
    const bp=100*(1-0.5*easeOut(seg(t,21.4,23.8)));heartBeat(W*0.47,H*0.48,2.2*pop(t,19.0),t,bp>60?1.6:0.7);txtA('BLOOD FLOW',W*0.47,H*0.78,64,pop(t,19.6),{fill:'#FF9AB0',sw:14});
    speedo(W*0.8,H*0.45,190,bp,100,'%','BLOOD PRESSURE');if(t>21.4){const sec=Math.min(6,(t-21.4)*2.6);txtA(sec.toFixed(1)+' s',W*0.8,H*0.82,64,1,{fill:GOLD,sw:14})}
    comic('HALF!',W*0.64,H*0.2,100,t,23.8,{life:1.6,fill:RED});pill("HEART CAN'T KEEP UP",W/2,110,52,'#fff','#111',t,23.9,25.35);flash(t,18.2,0.2)}
  else if(t<29.1){LOG.visible=true;PY.set(coilPath(-2.5,5.0,t),t);const k=seg(t,25.4,29);putGuy(SW.S,0.9,0,5.6,-0.9);guy.pose({...idle(t),mouth:'o',mouthSize:0.6,look:-0.6,headYaw:-0.4,armL:[0.6,0],armR:[0.6,0],bendL:1.2,bendR:1.2});
    SW.shot([lerp(2.2,1.0,k),2.4,12.5],[-0.8,0.7,5.0]);pill('SHOULD YOU BE SCARED?',W/2,110,56,GOLD,'#111',t,25.5,29.05);flash(t,25.4,0.2)}
  else if(t<39.5){clear3d();setBG('teal');txtA('EVERGLADES NATIONAL PARK STUDY',W/2,100,58,pop(t,29.15),{fill:GOLD,sw:14});
    const c1=pop(t,30.3),c2=pop(t,32.7),c3=pop(t,37.8);
    if(t>30.3){g.save();g.translate(W*0.2,H*0.48);g.scale(c1,c1);panel(0,0,440,400,'rgba(10,12,25,0.9)',CYAN,30);txt('10',0,-30,170,{fill:CYAN,stroke:0});txt('YEARS',0,110,54,{stroke:0});g.restore()}
    if(t>32.7){g.save();g.translate(W*0.5,H*0.48);g.scale(c2,c2);panel(0,0,440,400,'rgba(10,12,25,0.9)',GOLD,30);txt('5',0,-60,150,{fill:GOLD,stroke:0});txt('STRIKES',0,40,50,{stroke:0});g.fillStyle='#2EC4C9';g.fillRect(-180,110,360,60);for(let i=0;i<5;i++)person2D(-150+i*75,110,1.3,i<Math.floor((t-33.6)*5)?'#FFCC2E':'#888');g.restore()}
    if(t>35.0)txtA('ALL AT BIOLOGISTS IN THE WATER',W*0.5,H*0.86,46,pop(t,35.0),{fill:'#fff',sw:12});
    if(t>37.8){g.save();g.translate(W*0.8,H*0.48);g.scale(c3,c3);panel(0,0,440,400,'rgba(10,12,25,0.9)',GREEN,30);txt('0',0,-30,170,{fill:GREEN,stroke:0});txt('SQUEEZED',0,110,54,{stroke:0});g.restore()}flash(t,29.1,0.2)}
  else{LOG.visible=true;PY.set(coilPath(-2.5,5.0,t),t);const k=easeOut(seg(t,39.6,40.6)),back=easeOut(seg(t,40.8,41.6));const hug=t<40.8;
    putGuy(SW.S,lerp(lerp(1.4,-0.7,k),1.8,back),0,lerp(5.5,6.2,back),-PI/2+0.2);guy.pose({...(hug&&k<1?walk(t,6):idle(t)),mouth:hug?'grin':'o',wide:!hug,armL:[hug?1.4:2.6,hug?-1.0:0],armR:[hug?1.4:2.6,hug?-1.0:0],bendL:hug?0.8:0,bendR:hug?0.8:0});
    SW.shot([0.9,2.6,13.8],[0.0,0.7,5.2]);comic('NOPE!',W*0.72,H*0.25,120,t,40.8,{life:2.2,rot:-0.08,fill:RED});pill("DON'T HUG ONE",W/2,110,56,RED,'#fff',t,39.6,43.2);flash(t,39.5,0.2)}
  vignette();cap16(t+T0)};

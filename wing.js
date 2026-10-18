/* Parametric geometry study, not an aerodynamic or structural simulation. */
(()=>{
 const canvas=document.querySelector('#wing-canvas');if(!canvas)return;
 const ctx=canvas.getContext('2d');if(!ctx)return;
 const toggle=document.querySelector('#motion-toggle'),thicknessInput=document.querySelector('#thickness'),sweepInput=document.querySelector('#sweep');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let running=!reduced.matches,visible=false,angle=.55,pointer={x:0,y:0},width=600,height=300,raf=0,last=0,thickness=.12,sweep=25;
 const ribs=Array.from({length:17},(_,i)=>i/16),chord=Array.from({length:41},(_,i)=>i/40);
 function vertex(x,s,side){const tip=Math.abs(s-.5)*2,c=1.55-.72*tip;const y=5*thickness*(.2969*Math.sqrt(x)-.126*x-.3516*x*x+.2843*x*x*x-.1036*x*x*x*x);return [(x-.5)*c+Math.tan(sweep*Math.PI/180)*2.35*tip,side*y*c+.10*tip*tip,(s-.5)*4.7]}
 function project(p){const ry=angle+pointer.x*.3,rx=-.35+pointer.y*.25;let x=p[0]*Math.cos(ry)+p[2]*Math.sin(ry),z=-p[0]*Math.sin(ry)+p[2]*Math.cos(ry),y=p[1]*Math.cos(rx)-z*Math.sin(rx);z=p[1]*Math.sin(rx)+z*Math.cos(rx);const scale=Math.min(width/7.1,height/3.2)*5.7/(5.7+z);return [width*.43+x*scale,height*.5+y*scale]}
 function line(points,color,weight=1){ctx.beginPath();points.forEach((p,i)=>{const q=project(p);i?ctx.lineTo(...q):ctx.moveTo(...q)});ctx.strokeStyle=color;ctx.lineWidth=weight;ctx.stroke()}
 function label(p,text,dx,dy){const a=project(p);const endX=Math.max(10,Math.min(width-90,a[0]+dx)),endY=Math.max(16,Math.min(height-12,a[1]+dy));ctx.beginPath();ctx.arc(a[0],a[1],2.5,0,2*Math.PI);ctx.fillStyle='#52633d';ctx.fill();ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(endX,endY+5);ctx.strokeStyle='#9aa58b';ctx.lineWidth=.8;ctx.stroke();ctx.font='9px sans-serif';ctx.fillText(text,endX,endY)}
 function draw(){ctx.clearRect(0,0,width,height);ctx.strokeStyle='#e0e3d8';ctx.lineWidth=.5;for(let x=25;x<width;x+=35){ctx.beginPath();ctx.moveTo(x,16);ctx.lineTo(x,height-16);ctx.stroke()}for(let y=20;y<height;y+=35){ctx.beginPath();ctx.moveTo(16,y);ctx.lineTo(width-16,y);ctx.stroke()}for(const s of ribs)line([...chord.map(x=>vertex(x,s,1)),...chord.slice().reverse().map(x=>vertex(x,s,-1))],'#718064',s===0||s===1?1.5:.65);for(const x of [0,.08,.2,.4,.65,.85,1])for(const side of [-1,1])line(ribs.map(s=>vertex(x,s,side)),x===0?'#465a33':'#929d87',x===0?1.7:.6);line([vertex(0,.5,1),vertex(1,.5,1)],'#a27645',1.5);label(vertex(0,.36,1),'BORD D’ATTAQUE',-70,-40);label(vertex(.5,.5,0),'CORDE',32,54);}
 function tick(t){raf=0;if(!running||!visible||document.hidden)return;if(last)angle+=Math.min(t-last,50)*.00008;last=t;draw();raf=requestAnimationFrame(tick)}
 function start(){last=0;if(!raf&&running&&visible&&!document.hidden)raf=requestAnimationFrame(tick)}
 function stop(){cancelAnimationFrame(raf);raf=0;last=0}
 function state(){toggle.textContent=running?'Mettre en pause':'Animer';toggle.setAttribute('aria-pressed',String(running));running?start():stop();draw()}
 new ResizeObserver(()=>{const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=width*d;canvas.height=height*d;ctx.setTransform(d,0,0,d,0,0);draw()}).observe(canvas);
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;visible?start():stop()},{threshold:.05}).observe(canvas);
 toggle.addEventListener('click',()=>{running=!running;state()});
 thicknessInput.addEventListener('input',()=>{thickness=Number(thicknessInput.value)/100;document.querySelector('#thickness-value').value=thicknessInput.value+' %';draw()});
 sweepInput.addEventListener('input',()=>{sweep=Number(sweepInput.value);document.querySelector('#sweep-value').value=sweepInput.value+'°';draw()});
 canvas.addEventListener('pointermove',event=>{if(reduced.matches)return;const r=canvas.getBoundingClientRect();pointer.x=(event.clientX-r.left)/r.width-.5;pointer.y=(event.clientY-r.top)/r.height-.5;if(!running)draw()});
 canvas.addEventListener('pointerleave',()=>{pointer={x:0,y:0};if(!running)draw()});
 reduced.addEventListener('change',event=>{running=!event.matches;pointer={x:0,y:0};state()});
 document.addEventListener('visibilitychange',()=>document.hidden?stop():start());state();
})();

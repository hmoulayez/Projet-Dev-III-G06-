import{G as g,at as x,Q as p,R as y}from"./index-f28092e0.js";class c{constructor(t){let{x:n,y:s,width:i,height:r}=t;this.x=n,this.y=s,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function C(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function b(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),s=n.transform;if(s){let i,r,o,a,h;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),r=+i[0],o=+i[5],a=+i[12],h=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),r=+i[0],o=+i[3],a=+i[4],h=+i[5];else return new c(t);const f=n.transformOrigin,l=t.x-a-(1-r)*parseFloat(f),d=t.y-h-(1-o)*parseFloat(f.slice(f.indexOf(" ")+1)),u=r?t.width/r:e.offsetWidth+1,m=o?t.height/o:e.offsetHeight+1;return new c({x:l,y:d,width:u,height:m})}else return new c(t)}function v(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};const s=e.animate(t,n);return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}const B="cubic-bezier(0.4, 0, 0.2, 1)",M=g()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...x()},setup(e,t){let{slots:n}=t;return p(()=>y(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},n)),{}}});export{c as B,M as V,v as a,C as g,b as n,B as s};

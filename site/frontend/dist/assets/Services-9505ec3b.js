import{G as W,ap as H,aq as X,ar as pe,K as ge,x as be,as as he,r as V,c as h,at as ee,I as Se,w as xe,Q as Y,R as c,au as te,t as ye,av as _e,aw as Ve,E as Ce,ax as ze,ay as ke,T as ue,ah as Te,az as we,H as Pe,aA as Be,M as Re,N as k,aB as Ie,s as Ee,a2 as Me,a4 as Ae,a5 as Oe,a6 as ae,a7 as $,ac as L,ab as T,a9 as _,_ as U,aj as $e,ae as qe,ad as ne,a8 as oe,af as Fe,ag as le,aC as He,aD as je,ak as Ne,al as De}from"./index-32a57a3c.js";import{V as Ge}from"./VContainer-d21b8b7f.js";import{V as Le,c as Ue}from"./VCard-86dcf5b0.js";import{a as We,s as Xe}from"./easing-42b82351.js";import{V as se}from"./index-5e3ecf39.js";function ie(e){const r=Math.abs(e);return Math.sign(e)*(r/((1/.501-2)*(1-r)+1))}function re(e){let{selectedElement:i,containerSize:r,contentSize:u,isRtl:v,currentScrollOffset:o,isHorizontal:l}=e;const t=l?i.clientWidth:i.clientHeight,a=l?i.offsetLeft:i.offsetTop,f=v&&l?u-a-t:a,d=r+o,b=t+f,S=t*.4;return f<=o?o=Math.max(f-S,0):d<=b&&(o=Math.min(o-(d-b-S),u-r)),o}function Ye(e){let{selectedElement:i,containerSize:r,contentSize:u,isRtl:v,isHorizontal:o}=e;const l=o?i.clientWidth:i.clientHeight,t=o?i.offsetLeft:i.offsetTop,a=v&&o?u-t-l/2-r/2:t+l/2-r/2;return Math.min(u-r,Math.max(0,a))}const Ke=Symbol.for("vuetify:v-slide-group"),Je=W()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ke},nextIcon:{type:H,default:"$next"},prevIcon:{type:H,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...X(),...pe({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:r}=i;const{isRtl:u}=ge(),{mobile:v}=be(),o=he(e,e.symbol),l=V(!1),t=V(0),a=V(0),f=V(0),d=h(()=>e.direction==="horizontal"),{resizeRef:b,contentRect:S}=ee(),{resizeRef:m,contentRect:w}=ee(),P=h(()=>o.selected.value.length?o.items.value.findIndex(n=>n.id===o.selected.value[0]):-1),A=h(()=>o.selected.value.length?o.items.value.findIndex(n=>n.id===o.selected.value[o.selected.value.length-1]):-1);if(Se){let n=-1;xe(()=>[o.selected.value,S.value,w.value,d.value],()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{if(S.value&&w.value){const s=d.value?"width":"height";a.value=S.value[s],f.value=w.value[s],l.value=a.value+1<f.value}if(P.value>=0&&m.value){const s=m.value.children[A.value];P.value===0||!l.value?t.value=0:e.centerActive?t.value=Ye({selectedElement:s,containerSize:a.value,contentSize:f.value,isRtl:u.value,isHorizontal:d.value}):l.value&&(t.value=re({selectedElement:s,containerSize:a.value,contentSize:f.value,isRtl:u.value,currentScrollOffset:t.value,isHorizontal:d.value}))}})})}const B=V(!1);let x=0,y=0;function R(n){const s=d.value?"clientX":"clientY";y=(u.value&&d.value?-1:1)*t.value,x=n.touches[0][s],B.value=!0}function I(n){if(!l.value)return;const s=d.value?"clientX":"clientY",g=u.value&&d.value?-1:1;t.value=g*(y+x-n.touches[0][s])}function q(n){const s=f.value-a.value;t.value<0||!l.value?t.value=0:t.value>=s&&(t.value=s),B.value=!1}function C(){b.value&&(b.value[d.value?"scrollLeft":"scrollTop"]=0)}const E=V(!1);function j(n){if(E.value=!0,!(!l.value||!m.value)){for(const s of n.composedPath())for(const g of m.value.children)if(g===s){t.value=re({selectedElement:g,containerSize:a.value,contentSize:f.value,isRtl:u.value,currentScrollOffset:t.value,isHorizontal:d.value});return}}}function z(n){E.value=!1}function N(n){var s;!E.value&&!(n.relatedTarget&&((s=m.value)!=null&&s.contains(n.relatedTarget)))&&p()}function K(n){m.value&&(d.value?n.key==="ArrowRight"?p(u.value?"prev":"next"):n.key==="ArrowLeft"&&p(u.value?"next":"prev"):n.key==="ArrowDown"?p("next"):n.key==="ArrowUp"&&p("prev"),n.key==="Home"?p("first"):n.key==="End"&&p("last"))}function p(n){var s,g,J,Q,Z;if(m.value)if(!n)(s=[...m.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(me=>!me.hasAttribute("disabled"))[0])==null||s.focus();else if(n==="next"){const M=(g=m.value.querySelector(":focus"))==null?void 0:g.nextElementSibling;M?M.focus():p("first")}else if(n==="prev"){const M=(J=m.value.querySelector(":focus"))==null?void 0:J.previousElementSibling;M?M.focus():p("last")}else n==="first"?(Q=m.value.firstElementChild)==null||Q.focus():n==="last"&&((Z=m.value.lastElementChild)==null||Z.focus())}function O(n){const s=t.value+(n==="prev"?-1:1)*a.value;t.value=ye(s,0,f.value-a.value)}const F=h(()=>{let n=t.value>f.value-a.value?-(f.value-a.value)+ie(f.value-a.value-t.value):-t.value;t.value<=0&&(n=ie(-t.value));const s=u.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${s*n}px)`,transition:B.value?"none":"",willChange:B.value?"transform":""}}),D=h(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),G=h(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!v.value;case!0:return l.value||Math.abs(t.value)>0;case"mobile":return v.value||l.value||Math.abs(t.value)>0;default:return!v.value&&(l.value||Math.abs(t.value)>0)}}),ve=h(()=>Math.abs(t.value)>0),fe=h(()=>f.value>Math.abs(t.value)+a.value);return Y(()=>c(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":l.value}],tabindex:E.value||o.selected.value.length?-1:0,onFocus:N},{default:()=>{var n,s,g;return[G.value&&c("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ve.value}],onClick:()=>O("prev")},[((n=r.prev)==null?void 0:n.call(r,D.value))??c(se,null,{default:()=>[c(te,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),c("div",{key:"container",ref:b,class:"v-slide-group__container",onScroll:C},[c("div",{ref:m,class:"v-slide-group__content",style:F.value,onTouchstartPassive:R,onTouchmovePassive:I,onTouchendPassive:q,onFocusin:j,onFocusout:z,onKeydown:K},[(s=r.default)==null?void 0:s.call(r,D.value)])]),G.value&&c("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!fe.value}],onClick:()=>O("next")},[((g=r.next)==null?void 0:g.call(r,D.value))??c(se,null,{default:()=>[c(te,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:O,scrollOffset:t,focus:p}}});const ce=Symbol.for("vuetify:v-tabs"),de=W()({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:H,appendIcon:H,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...X(),..._e(),...Ve({selectedClass:"v-tab--selected"}),...Ce()},setup(e,i){let{slots:r,attrs:u}=i;const{textColorClasses:v,textColorStyles:o}=ze(e,"sliderColor"),l=h(()=>e.direction==="horizontal"),t=V(!1),a=V(),f=V();function d(b){var m,w;let{value:S}=b;if(t.value=S,S){const P=(w=(m=a.value)==null?void 0:m.$el.parentElement)==null?void 0:w.querySelector(".v-tab--selected .v-tab__slider"),A=f.value;if(!P||!A)return;const B=getComputedStyle(P).color,x=P.getBoundingClientRect(),y=A.getBoundingClientRect(),R=l.value?"x":"y",I=l.value?"X":"Y",q=l.value?"right":"bottom",C=l.value?"width":"height",E=x[R],j=y[R],z=E>j?x[q]-y[q]:x[R]-y[R],N=Math.sign(z)>0?l.value?"right":"bottom":Math.sign(z)<0?l.value?"left":"top":"center",p=(Math.abs(z)+(Math.sign(z)<0?x[C]:y[C]))/Math.max(x[C],y[C]),O=x[C]/y[C],F=1.5;We(A,{backgroundColor:[B,""],transform:[`translate${I}(${z}px) scale${I}(${O})`,`translate${I}(${z/F}px) scale${I}(${(p-1)/F+1})`,""],transformOrigin:Array(3).fill(N)},{duration:225,easing:Xe})}}return Y(()=>{const[b]=ke(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return c(Te,ue({_as:"VTab",symbol:ce,ref:a,class:["v-tab"],tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},b,u,{"onGroup:selected":d}),{default:()=>[r.default?r.default():e.title,!e.hideSlider&&c("div",{ref:f,class:["v-tab__slider",v.value],style:o.value},null)]})}),{}}});function Qe(e){return e?e.map(i=>typeof i=="string"?{title:i,value:i}:i):[]}const Ze=W()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...we(),...X()},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:r}=i;const u=Pe(e,"modelValue"),v=h(()=>Qe(e.items)),{densityClasses:o}=Be(e),{backgroundColorClasses:l,backgroundColorStyles:t}=Re(k(e,"bgColor"));return Ie({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),Y(()=>c(Je,{modelValue:u.value,"onUpdate:modelValue":a=>u.value=a,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,l.value],style:[{"--v-tabs-height":Ee(e.height)},t.value],role:"tablist",symbol:ce,mandatory:e.mandatory,direction:e.direction},{default:()=>[r.default?r.default():v.value.map(a=>c(de,ue(a,{key:a.title}),null))]})),{}}}),et={data(){return{tab:null,services:[{titre:"Robes de collection",description:`Vous craquez pour une création disponible ?
Vous n’avez qu’à la commander en nous communiquant vos mensurations.
Nous vous enverrons le formulaire correspondant au modèle choisi.
Vous pouvez évidemment personnaliser le modèle choisi à votre convenance.

Le processus se présente ainsi:

Choix d’un modèle de collection
Prise de contact
Echanges (pour personnalisation éventuelle)
Commande
Conception
Livraison.

Vous obtenez votre tenue entre 14 jours et 1 mois en fonction de notre agenda du moment.`,image:"model3.jpeg"},{titre:"Créations exclusives",description:`Vous souhaitez avoir une création exclusive et unique?
Nous la créerons ensemble.
Je dessinerai et réaliserai pour vous, une création unique selon vos goûts et votre style.

En résumé, le processus se présente ainsi:

Prise de contact
Échanges
Proposition de croquis
Validation de la proposition
Conception
Livraison.

Vous recevrez votre commande entre 14 jours à 02 mois à partir du moment où le modèle est validé, en fonction du modèle commandé, de la disponibilité des matériaux, de l’agenda du moment, etc.`,image:"model2.jpeg"},{titre:"Croquis personnalisés",description:`Vous souhaitez réaliser vous-même votre robe,
mais pas d'idées originales pour la créer?
Nous créons avec vous et pour vous, un modèle originale pour vous.`,image:"model4.jpeg"},{titre:"Transformations de robes",description:`Cette robe de soirée au fond de votre dressing, vous l'adorez n'est-ce pas?
Mais le modèle est désuet, ou vous avez l’impression de l’avoir tellement mise au point de vouloir lui donner un coup de jeune ?
Un renouveau?
Nous modifions votre robe pour que vous aillez l’impression d’en avoir une nouvelle.

Processus:

Prise de contact
Échanges sur la robe à transformer
Proposition de croquis
Validation de la proposition
Expédition
Transformation
Réexpédition`,image:"model5.jpeg"}]}},name:"Services",components:{Entete:Ae,BasDePage:Oe}},tt=e=>(Ne("data-v-ffa1f97b"),e=e(),De(),e),at={class:"corps"},nt=tt(()=>T("br",null,null,-1)),ot={class:"fenetre"},lt=["src"];function st(e,i,r,u,v,o){const l=ae("Entete"),t=ae("BasDePage");return $(),L(U,null,[T("header",null,[c(l)]),T("main",at,[nt,c(Ge,{fluid:"","fill-height":""},{default:_(()=>[c($e,{align:"center",justify:"center"},{default:_(()=>[c(qe,{cols:"12",sm:"8",md:"8.5"},{default:_(()=>[c(Le,{class:"mx-auto"},{default:_(()=>[c(Ze,{modelValue:v.tab,"onUpdate:modelValue":i[0]||(i[0]=a=>v.tab=a),"align-tabs":"center"},{default:_(()=>[($(!0),L(U,null,ne(v.services,a=>($(),oe(de,{value:a.titre,key:a.titre},{default:_(()=>[Fe(le(a.titre),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),c(Ue,null,{default:_(()=>[c(He,{modelValue:v.tab,"onUpdate:modelValue":i[1]||(i[1]=a=>v.tab=a)},{default:_(()=>[($(!0),L(U,null,ne(v.services,a=>($(),oe(je,{value:a.titre,key:a.titre},{default:_(()=>[T("div",ot,[T("p",null,le(a.description),1),T("img",{src:a.image},null,8,lt)])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),T("footer",null,[c(t)])],64)}const vt=Me(et,[["render",st],["__scopeId","data-v-ffa1f97b"]]);export{vt as default};

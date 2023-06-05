import{G as g,az as j,aq as T,E as N,J as R,aA as $,aB as I,N as o,c as p,Q as _,R as t,s as v,ap as z,aE as B,aF as x,aG as P,aH as w,M as q,aI as E,aJ as L,au as O,C as M,O as G,r as b,w as J,a2 as Q,a4 as F,a5 as K,a6 as S,a7 as f,ac as D,ab as m,a9 as r,aK as A,_ as k,ad as H,a8 as U,aL as W,ag as V,af as X}from"./index-ef5d0528.js";import{V as Y,a as Z,c as ee}from"./VCard-9b198136.js";const te=g()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...j(),...T(),...N()},setup(e,u){let{slots:i}=u;const{themeClasses:d}=R(e),{densityClasses:a}=$(e);I({VTimelineDivider:{lineColor:o(e,"lineColor")},VTimelineItem:{density:o(e,"density"),lineInset:o(e,"lineInset")}});const l=p(()=>{const n=e.side?e.side:e.density!=="default"?"end":null;return n&&`v-timeline--side-${n}`}),s=p(()=>{const n=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return n;case"start":return n[0];case"end":return n[1];default:return null}});return _(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},d.value,a.value,l.value],style:{"--v-timeline-line-thickness":v(e.lineThickness)}},i)),{}}}),ne=g()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:z,iconColor:String,lineColor:String,...B(),...x(),...P()},setup(e,u){let{slots:i}=u;const{sizeClasses:d,sizeStyles:a}=w(e,"v-timeline-divider__dot"),{backgroundColorStyles:l,backgroundColorClasses:s}=q(o(e,"dotColor")),{roundedClasses:n}=E(e,"v-timeline-divider__dot"),{elevationClasses:c}=L(e),{backgroundColorClasses:h,backgroundColorStyles:C}=q(o(e,"lineColor"));return I({VIcon:{color:o(e,"iconColor"),icon:o(e,"icon"),size:o(e,"size")}}),_(()=>{var y;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",h.value],style:C.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",c.value,n.value,d.value],style:a.value},[t("div",{class:["v-timeline-divider__inner-dot",s.value,n.value],style:l.value},[((y=i.default)==null?void 0:y.call(i))??(e.icon?t(O,null,null):void 0)])]),t("div",{class:["v-timeline-divider__after",h.value],style:C.value},null)])}),{}}}),ie=g()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:z,iconColor:String,lineInset:[Number,String],...B(),...P(),...x(),...T(),...M()},setup(e,u){let{slots:i}=u;const{dimensionStyles:d}=G(e),a=b(0),l=b();return J(l,s=>{var n;s&&(a.value=((n=s.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:n.getBoundingClientRect().width)??0)},{flush:"post"}),_(()=>{var s,n;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":v(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${v(e.lineInset)})`:v(0)}},[t("div",{class:"v-timeline-item__body",style:d.value},[(s=i.default)==null?void 0:s.call(i)]),t(ne,{ref:l,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((n=i.opposite)==null?void 0:n.call(i))])])}),{}}}),se={data(){return{elements:[{image:"https://storage.cloud.google.com/photokabori/divers/DSC08856.jpg",titre:"Qui sommes nous ?",description:`Kabori Creations est votre partenaire pour les grands événements. Des bals aux mariages en passant par les soirées de cocktails, les galas ou les événements tapis rouge nous travaillons quotidiennement à vous faire vivre un moment magique. Nous sommes une équipe enthousiaste, prête à vous écouter, vous conseiller et vous proposer des créations authentiques.

Officiellement créé en 2022, notre marque inspiration plurielle vous propose des robes d’événements uniques et personnalisées. Notre ambition est de vous garantir des tenues de grande qualité, avec une dose d’élégance et une touche de créativité.`},{image:"https://storage.cloud.google.com/photokabori/Photo%20Polychrome/Maryam/DSC00390.jpg",titre:"Pourquoi existons nous ?",description:`Notre raison d’être est une évidence et une vraie mission de vie: renforcer l’unicité de chaque femme à travers des pièces fortes et distinguées.

Chaque jour, nous travaillons à concevoir des modèles originaux et uniques qui correspondent à des personnes toutes autant uniques. Le pari est de vous donner un sentiment de confiance en soi, de confort et d’unicité tout en étant élégante et glamour.`},{image:"https://storage.cloud.google.com/photokabori/croquis/IMG_7436-min.JPG",titre:"Que faisons nous",description:`Pour réaliser cette ambition, nous prenons le temps de créer avec vous, une atmosphère de confiance et de proximité afin de connaître précisément vos besoins et envies.
Nous les analysons et nous vous proposons des croquis personnalisés qui sont à la croisée de l’événement à célébrer, de votre style vestimentaire et de notre touche de créativité.

Certains modèles vous sont déjà proposés. Il ne reste plus qu’à les réaliser à la juste taille pour vous. Évidemment, ils sont personnalisables.

Cependant, nous réalisons un maximum de 24 exemplaires par modèles, afin de conserver le caractère unique et authentique de la création.`},{image:"",titre:"Rejoignez la Bori Ladies Team",description:`On entend souvent dire qu’il faut assumer son corps, qu’il faut assumer son apparence physique. Ici, nous pensons que nous n’avons pas à l’assumer, mais à l’affirmer. On assume des fautes, des erreurs, des écarts de conduite. On n’assume pas qui on est physiquement, on l’affirme.

Vous êtes magnifiques et incroyablement belles. Comme vous êtes. N’en doutez jamais. Rejoignez la ‘’Bori-Ladies Team’’ et affirmons votre beauté et votre élégance à travers des pièces qui vous ressemblent. Rejoignez une tribu de femmes fortes, confiantes et élégantes.`}]}},name:"Marque",components:{Entete:F,BasDePage:K}},ae={class:"font-weight-light"};function oe(e,u,i,d,a,l){const s=S("Entete"),n=S("BasDePage");return f(),D(k,null,[m("header",null,[t(s)]),m("main",null,[t(A,{src:"model2.jpeg",class:"contain"},{default:r(()=>[t(te,{align:"center"},{default:r(()=>[(f(!0),D(k,null,H(a.elements,c=>(f(),U(ie,{"hide-dot":"",key:c.titre},{opposite:r(()=>[t(W,{src:c.image,"max-width":"200",width:"200"},null,8,["src"])]),default:r(()=>[t(Y,{"max-width":"500"},{default:r(()=>[t(Z,{class:"card-title"},{default:r(()=>[m("h2",ae,V(c.titre),1)]),_:2},1024),t(ee,null,{default:r(()=>[X(V(c.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),m("footer",null,[t(n)])],64)}const ue=Q(se,[["render",oe],["__scopeId","data-v-d556e21b"]]);export{ue as default};
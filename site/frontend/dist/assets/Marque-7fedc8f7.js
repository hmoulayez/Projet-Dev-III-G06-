import{p as g,D as y,aB as j,as as P,G as N,J as h,L as R,aC as $,M as w,aD as L,P as c,c as k,T as C,U as t,s as v,ar as I,aG as z,aH as B,aI as x,aJ as O,O as p,aK as E,aL as M,aw as G,aM as J,E as Q,Q as F,r as D,w as K,a4 as U,a6 as H,a7 as A,a8 as b,a9 as f,ae as S,ad as m,ab as r,aN as W,a0 as V,af as X,aa as Y,aO as Z,ai as T,ah as ee}from"./index-b73cda32.js";import{V as te,a as ie,c as ne}from"./VCard-1229d3b4.js";const se=g({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...y(),...j(),...P(),...N()},"v-timeline"),ae=h()({name:"VTimeline",props:se(),setup(e,u){let{slots:i}=u;const{themeClasses:d}=R(e),{densityClasses:o}=$(e),{rtlClasses:l}=w();L({VTimelineDivider:{lineColor:c(e,"lineColor")},VTimelineItem:{density:c(e,"density"),lineInset:c(e,"lineInset")}});const a=k(()=>{const n=e.side?e.side:e.density!=="default"?"end":null;return n&&`v-timeline--side-${n}`}),s=k(()=>{const n=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return n;case"start":return n[0];case"end":return n[1];default:return null}});return C(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},d.value,o.value,a.value,l.value,e.class],style:[{"--v-timeline-line-thickness":v(e.lineThickness)},e.style]},i)),{}}}),oe=g({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:I,iconColor:String,lineColor:String,...y(),...z(),...B(),...x()},"v-timeline-divider"),le=h()({name:"VTimelineDivider",props:oe(),setup(e,u){let{slots:i}=u;const{sizeClasses:d,sizeStyles:o}=O(e,"v-timeline-divider__dot"),{backgroundColorStyles:l,backgroundColorClasses:a}=p(c(e,"dotColor")),{roundedClasses:s}=E(e,"v-timeline-divider__dot"),{elevationClasses:n}=M(e),{backgroundColorClasses:_,backgroundColorStyles:q}=p(c(e,"lineColor"));return C(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",_.value],style:q.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",n.value,s.value,d.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",a.value,s.value],style:l.value},[i.default?t(J,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(G,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",_.value],style:q.value},null)])),{}}}),re=g({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:I,iconColor:String,lineInset:[Number,String],...y(),...Q(),...x(),...z(),...B(),...P()},"v-timeline-item"),ue=h()({name:"VTimelineItem",props:re(),setup(e,u){let{slots:i}=u;const{dimensionStyles:d}=F(e),o=D(0),l=D();return K(l,a=>{var s;a&&(o.value=((s=a.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:s.getBoundingClientRect().width)??0)},{flush:"post"}),C(()=>{var a,s;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":v(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${v(e.lineInset)})`:v(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:d.value},[(a=i.default)==null?void 0:a.call(i)]),t(le,{ref:l,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((s=i.opposite)==null?void 0:s.call(i))])])}),{}}}),de={data(){return{elements:[{image:"https://storage.cloud.google.com/photokabori/divers/DSC08856.jpg",titre:"Qui sommes nous ?",description:`Kabori Creations est votre partenaire pour les grands événements. Des bals aux mariages en passant par les soirées de cocktails, les galas ou les événements tapis rouge nous travaillons quotidiennement à vous faire vivre un moment magique. Nous sommes une équipe enthousiaste, prête à vous écouter, vous conseiller et vous proposer des créations authentiques.

Officiellement créé en 2022, notre marque inspiration plurielle vous propose des robes d’événements uniques et personnalisées. Notre ambition est de vous garantir des tenues de grande qualité, avec une dose d’élégance et une touche de créativité.`},{image:"https://storage.cloud.google.com/photokabori/Photo%20Polychrome/Maryam/DSC00390.jpg",titre:"Pourquoi existons nous ?",description:`Notre raison d’être est une évidence et une vraie mission de vie: renforcer l’unicité de chaque femme à travers des pièces fortes et distinguées.

Chaque jour, nous travaillons à concevoir des modèles originaux et uniques qui correspondent à des personnes toutes autant uniques. Le pari est de vous donner un sentiment de confiance en soi, de confort et d’unicité tout en étant élégante et glamour.`},{image:"https://storage.cloud.google.com/photokabori/croquis/IMG_7436.JPG",titre:"Que faisons nous",description:`Pour réaliser cette ambition, nous prenons le temps de créer avec vous, une atmosphère de confiance et de proximité afin de connaître précisément vos besoins et envies.
Nous les analysons et nous vous proposons des croquis personnalisés qui sont à la croisée de l’événement à célébrer, de votre style vestimentaire et de notre touche de créativité.

Certains modèles vous sont déjà proposés. Il ne reste plus qu’à les réaliser à la juste taille pour vous. Évidemment, ils sont personnalisables.

Cependant, nous réalisons un maximum de 24 exemplaires par modèles, afin de conserver le caractère unique et authentique de la création.`},{image:"",titre:"Rejoignez la Bori Ladies Team",description:`On entend souvent dire qu’il faut assumer son corps, qu’il faut assumer son apparence physique. Ici, nous pensons que nous n’avons pas à l’assumer, mais à l’affirmer. On assume des fautes, des erreurs, des écarts de conduite. On n’assume pas qui on est physiquement, on l’affirme.

Vous êtes magnifiques et incroyablement belles. Comme vous êtes. N’en doutez jamais. Rejoignez la ‘’Bori-Ladies Team’’ et affirmons votre beauté et votre élégance à travers des pièces qui vous ressemblent. Rejoignez une tribu de femmes fortes, confiantes et élégantes.`}]}},name:"Marque",components:{Entete:H,BasDePage:A}},ce={class:"font-weight-light"};function me(e,u,i,d,o,l){const a=b("Entete"),s=b("BasDePage");return f(),S(V,null,[m("header",null,[t(a)]),m("main",null,[t(W,{src:"model2.jpeg",class:"contain"},{default:r(()=>[t(ae,{align:"center"},{default:r(()=>[(f(!0),S(V,null,X(o.elements,n=>(f(),Y(ue,{"hide-dot":"",key:n.titre},{opposite:r(()=>[t(Z,{src:n.image,"max-width":"200",width:"200"},null,8,["src"])]),default:r(()=>[t(te,{"max-width":"500"},{default:r(()=>[t(ie,{class:"card-title"},{default:r(()=>[m("h2",ce,T(n.titre),1)]),_:2},1024),t(ne,null,{default:r(()=>[ee(T(n.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),m("footer",null,[t(s)])],64)}const ge=U(de,[["render",me],["__scopeId","data-v-7f89ac66"]]);export{ge as default};
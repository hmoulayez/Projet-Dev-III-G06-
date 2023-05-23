import{J as m,b8 as q,b0 as W,D as g,a$ as Y,aX as ee,T as f,U as n,p as h,ax as o,aJ as A,az as B,b1 as ae,aQ as T,G as _,b9 as D,L,ba as p,aK as z,aB as R,b3 as te,b7 as E,au as ne,bb as $,b5 as C,bc as se,E as le,b2 as ie,ay as de,bd as ce,be as re,bf as ue,bg as ve,bh as oe,Q as me,b4 as ge,aA as be,bi as ye,bj as ke,bk as fe,c as P,Z as Ce,$ as he,aE as Ae}from"./index-a5732fb6.js";function V(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return m()({name:t??q(W(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...g()},setup(a,c){let{slots:s}=c;return()=>{var d;return Y(a.tag,{class:[e,a.class],style:a.style},(d=s.default)==null?void 0:d.call(s))}}})}const Ve=m()({name:"VCardActions",props:g(),setup(e,l){let{slots:t}=l;return ee({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}});const Ie=h({start:Boolean,end:Boolean,icon:o,image:String,...g(),...A(),...B(),...ae(),...T(),..._(),...D({variant:"flat"})},"v-avatar"),x=m()({name:"VAvatar",props:Ie(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=L(e),{colorClasses:c,colorStyles:s,variantClasses:d}=p(e),{densityClasses:u}=z(e),{roundedClasses:v}=R(e),{sizeClasses:r,sizeStyles:i}=te(e);return f(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,u.value,v.value,r.value,d.value,e.class],style:[s.value,i.value,e.style]},{default:()=>{var b;return[e.image?n(E,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ne,{key:"icon",icon:e.icon},null):(b=t.default)==null?void 0:b.call(t),$(!1,"v-avatar")]}})),{}}}),Se=V("v-card-subtitle"),Pe=V("v-card-title"),xe=h({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...g(),...A()},"v-card-item"),Be=m()({name:"VCardItem",props:xe(),setup(e,l){let{slots:t}=l;return f(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),d=!!(s||t.append),u=!!(e.title||t.title),v=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(C,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(x,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(Pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),v&&n(Se,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(C,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(x,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Te=V("v-card-text"),_e=h({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...se(),...g(),...A(),...le(),...ie(),...de(),...ce(),...re(),...B(),...ue(),...T(),..._(),...D({variant:"elevated"})},"v-card"),Le=m()({name:"VCard",directives:{Ripple:ve},props:_e(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:c}=L(e),{borderClasses:s}=oe(e),{colorClasses:d,colorStyles:u,variantClasses:v}=p(e),{densityClasses:r}=z(e),{dimensionStyles:i}=me(e),{elevationClasses:b}=ge(e),{loaderClasses:F}=be(e),{locationStyles:J}=ye(e),{positionClasses:M}=ke(e),{roundedClasses:Q}=R(e),y=fe(e,t),j=P(()=>e.link!==!1&&y.isLink.value),k=P(()=>!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value));return f(()=>{const w=j.value?"a":e.tag,G=!!(a.title||e.title),H=!!(a.subtitle||e.subtitle),K=G||H,N=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),X=K||O||N,Z=!!(a.text||e.text);return Ce(n(w,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},c.value,s.value,d.value,r.value,b.value,F.value,M.value,Q.value,v.value,e.class],style:[u.value,i.value,J.value,e.style],href:y.href.value,onClick:k.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[U&&n("div",{key:"image",class:"v-card__image"},[a.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(E,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),X&&n(Be,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Z&&n(Te,{key:"text"},{default:()=>{var S;return[((S=a.text)==null?void 0:S.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),$(k.value,"v-card")]}}),[[he("ripple"),k.value&&e.ripple]])}),{}}});export{Le as V,Pe as a,Ve as b,Te as c};

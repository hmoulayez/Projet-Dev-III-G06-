import{G as f,aS as W,aR as Y,aQ as j,aT as K,aB as M,Q as b,R as n,p as ee,ap as v,az as V,aE as P,aF as ae,aq as x,E as _,aU as B,J as p,aV as T,aA as L,aI as D,aH as te,aL as z,au as ne,aW as R,aX as C,aN as le,aY as ie,C as se,aG as de,aZ as ce,a_ as ue,a$ as re,av as ve,b0 as oe,O as me,aJ as ge,b1 as fe,b2 as be,b3 as ke,b4 as ye,c as A,X as Ce,Z as Ve,b5 as Ie}from"./index-a3d6966a.js";function I(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return f()({name:t??W(Y(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i}},setup(a,c){let{slots:s}=c;return()=>{var d;return j(a.tag,{class:e},(d=s.default)==null?void 0:d.call(s))}}})}const he=K({name:"VCardActions",setup(e,i){let{slots:t}=i;return M({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}});const Ae=ee({start:Boolean,end:Boolean,icon:v,image:String,...V(),...P(),...ae(),...x(),..._(),...B({variant:"flat"})},"v-avatar"),S=f()({name:"VAvatar",props:Ae(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=p(e),{colorClasses:c,colorStyles:s,variantClasses:d}=T(e),{densityClasses:u}=L(e),{roundedClasses:l}=D(e),{sizeClasses:k,sizeStyles:y}=te(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,u.value,l.value,k.value,d.value],style:[s.value,y.value]},{default:()=>{var o;return[e.image?n(z,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ne,{key:"icon",icon:e.icon},null):(o=t.default)==null?void 0:o.call(t),R(!1,"v-avatar")]}})),{}}}),Se=I("v-card-subtitle"),Pe=I("v-card-title"),xe=f()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...V()},setup(e,i){let{slots:t}=i;return b(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon||t.prepend),c=!!(e.appendAvatar||e.appendIcon||t.append),s=!!(e.title||t.title),d=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[a&&n(C,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[((l=t.prepend)==null?void 0:l.call(t))??n(S,null,null)])]}}),n("div",{class:"v-card-item__content"},[s&&n(Pe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),d&&n(Se,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),c&&n(C,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[((l=t.append)==null?void 0:l.call(t))??n(S,null,null)])]}})])}),{}}}),_e=I("v-card-text"),pe=f()({name:"VCard",directives:{Ripple:le},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,..._(),...ie(),...V(),...se(),...de(),...ce(),...ue(),...re(),...P(),...ve(),...x(),...B({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:c}=p(e),{borderClasses:s}=oe(e),{colorClasses:d,colorStyles:u,variantClasses:l}=T(e),{densityClasses:k}=L(e),{dimensionStyles:y}=me(e),{elevationClasses:o}=ge(e),{loaderClasses:E}=fe(e),{locationStyles:F}=be(e),{positionClasses:$}=ke(e),{roundedClasses:G}=D(e),m=ye(e,t),H=A(()=>e.link!==!1&&m.isLink.value),g=A(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return b(()=>{const J=H.value?"a":e.tag,N=!!(a.title||e.title),O=!!(a.subtitle||e.subtitle),Q=N||O,X=!!(a.append||e.appendAvatar||e.appendIcon),Z=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=Q||Z||X,U=!!(a.text||e.text);return Ce(n(J,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},c.value,s.value,d.value,k.value,o.value,E.value,$.value,G.value,l.value],style:[u.value,y.value,F.value],href:m.href.value,onClick:g.value&&m.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[q&&n(C,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var r;return[n("div",{class:"v-card__image"},[((r=a.image)==null?void 0:r.call(a))??n(z,null,null)])]}}),n(Ie,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(xe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),U&&n(_e,{key:"text"},{default:()=>{var r;return[((r=a.text)==null?void 0:r.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(he,null,{default:a.actions}),R(g.value,"v-card")]}}),[[Ve("ripple"),g.value&&e.ripple]])}),{}}});export{pe as V,Pe as a,he as b,_e as c};

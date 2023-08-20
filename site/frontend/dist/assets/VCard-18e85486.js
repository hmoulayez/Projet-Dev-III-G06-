import{G as f,aO as N,ar as U,aq as W,p as Y,as as v,aC as V,aH as P,aI as j,at as x,E as _,aP as B,J as T,aQ as p,aD as D,aL as L,aK as ee,Q as y,R as n,ah as R,ax as ae,aR as z,aS as te,aE as ne,aT as b,aU as le,aV as ie,C as se,aJ as de,aW as ce,aX as ue,aY as re,ay as ve,aZ as oe,O as me,aM as ge,a_ as fe,a$ as ye,b0 as ke,b1 as Ce,c as S,X as be,Z as Ve,b2 as Ie}from"./index-f28092e0.js";function I(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return f()({name:t??N(U(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i}},setup(a,c){let{slots:s}=c;return()=>{var d;return W(a.tag,{class:e},(d=s.default)==null?void 0:d.call(s))}}})}const he=Y({start:Boolean,end:Boolean,icon:v,image:String,...V(),...P(),...j(),...x(),..._(),...B({variant:"flat"})},"v-avatar"),A=f()({name:"VAvatar",props:he(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=T(e),{colorClasses:c,colorStyles:s,variantClasses:d}=p(e),{densityClasses:u}=D(e),{roundedClasses:l}=L(e),{sizeClasses:k,sizeStyles:C}=ee(e);return y(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,u.value,l.value,k.value,d.value],style:[s.value,C.value]},{default:()=>{var o;return[e.image?n(R,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ae,{key:"icon",icon:e.icon},null):(o=t.default)==null?void 0:o.call(t),z(!1,"v-avatar")]}})),{}}});const Se=te({name:"VCardActions",setup(e,i){let{slots:t}=i;return ne({VBtn:{variant:"text"}}),y(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ae=I("v-card-subtitle"),Pe=I("v-card-title"),xe=f()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...V()},setup(e,i){let{slots:t}=i;return y(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon||t.prepend),c=!!(e.appendAvatar||e.appendIcon||t.append),s=!!(e.title||t.title),d=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[a&&n(b,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[((l=t.prepend)==null?void 0:l.call(t))??n(A,null,null)])]}}),n("div",{class:"v-card-item__content"},[s&&n(Pe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),d&&n(Ae,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),c&&n(b,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[((l=t.append)==null?void 0:l.call(t))??n(A,null,null)])]}})])}),{}}}),_e=I("v-card-text"),Te=f()({name:"VCard",directives:{Ripple:le},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,..._(),...ie(),...V(),...se(),...de(),...ce(),...ue(),...re(),...P(),...ve(),...x(),...B({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:c}=T(e),{borderClasses:s}=oe(e),{colorClasses:d,colorStyles:u,variantClasses:l}=p(e),{densityClasses:k}=D(e),{dimensionStyles:C}=me(e),{elevationClasses:o}=ge(e),{loaderClasses:E}=fe(e),{locationStyles:O}=ye(e),{positionClasses:$}=ke(e),{roundedClasses:F}=L(e),m=Ce(e,t),H=S(()=>e.link!==!1&&m.isLink.value),g=S(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return y(()=>{const J=H.value?"a":e.tag,Q=!!(a.title||e.title),X=!!(a.subtitle||e.subtitle),Z=Q||X,q=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),G=!!(a.image||e.image),K=Z||w||q,M=!!(a.text||e.text);return be(n(J,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},c.value,s.value,d.value,k.value,o.value,E.value,$.value,F.value,l.value],style:[u.value,C.value,O.value],href:m.href.value,onClick:g.value&&m.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[G&&n(b,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var r;return[n("div",{class:"v-card__image"},[((r=a.image)==null?void 0:r.call(a))??n(R,null,null)])]}}),n(Ie,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),K&&n(xe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&n(_e,{key:"text"},{default:()=>{var r;return[((r=a.text)==null?void 0:r.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(Se,null,{default:a.actions}),z(g.value,"v-card")]}}),[[Ve("ripple"),g.value&&e.ripple]])}),{}}});export{Te as V,Pe as a,Ae as b,Se as c,A as d,_e as e};
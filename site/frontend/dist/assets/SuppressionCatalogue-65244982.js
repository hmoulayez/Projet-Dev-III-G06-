import{a2 as h,a3 as l,b6 as b,a5 as g,a6 as c,a7 as a,ac as n,ab as e,R as d,_ as p,ad as v,ag as f,ak as k,al as S}from"./index-a61ff514.js";const B={data(){return{models:[]}},mounted(){this.recupModels()},methods:{recupModels(){l.get("https://serveur.kaboricreations.com/prod").then(t=>{this.models=t.data}).catch(t=>{console.error("Erreur lors de la récupération de la liste des modèles :",t)})},supprimerModel(t){l.delete(`https://serveur.kaboricreations.com/prod/${t}`).then(s=>{this.models=this.models.filter(r=>r.nom!==t)}).catch(s=>{console.error(s)})}},name:"SuppressionCatalogue",components:{EnteteAdmin:b,BasDePage:g}},C=t=>(k("data-v-20ea1662"),t=t(),S(),t),x={class:"tableau"},y=C(()=>e("thead",null,[e("tr",null,[e("th",null,"Nom Modèles"),e("th")])],-1)),E={class:"td-nom"},M={class:"td-button"},D=["onClick"];function I(t,s,r,$,u,i){const _=c("EnteteAdmin"),m=c("BasDePage");return a(),n(p,null,[e("header",null,[d(_)]),e("div",null,[e("table",x,[y,e("tbody",null,[(a(!0),n(p,null,v(u.models,o=>(a(),n("tr",{key:o.id},[e("td",E,f(o.nom),1),e("td",M,[e("button",{onClick:A=>i.supprimerModel(o.nom),class:"button-table"},"Supprimer",8,D)])]))),128))])])]),e("footer",null,[d(m)])],64)}const P=h(B,[["render",I],["__scopeId","data-v-20ea1662"]]);export{P as default};

import{a2 as C,a3 as r,b6 as x,a5 as y,a6 as h,a7 as d,ac as u,ab as t,R as _,_ as c,ad as m,ag as n,X as g,an as b,ao as f,ak as k,al as A}from"./index-1f7e914e.js";const E={data(){return{commandes:[],statuts:[]}},mounted(){this.recupCommandes(),this.recupStatuts()},methods:{recupCommandes(){r.get("http://localhost:3000/commandes").then(e=>{this.commandes=e.data}).catch(e=>{console.error("Erreur lors de la récupération de la liste des commandes :",e)})},publierTexte(e){console.log(e.id);const a={id:e.id,descriptionAdmin:e.descriptionAdmin};r.put("http://localhost:3000/commandes",a).then(s=>{console.log(s.data)}).catch(s=>{console.log(s)})},recupStatuts(){r.get("http://localhost:3000/statuts").then(e=>{this.statuts=e.data}).catch(e=>{console.error("Erreur lors de la récupération de la liste des collections :",e)})},envoyerStatut(e){console.log(e.id),console.log(this.selectedStatut);const a={id:e.id,statut:this.selectedStatut};r.put("http://localhost:3000/commandes/statut/",a).then(s=>{console.log(s.data)}).catch(s=>{console.log(s)})}},name:"SuppressionCatalogue",components:{EnteteAdmin:x,BasDePage:y}},B=e=>(k("data-v-6a978ed9"),e=e(),A(),e),D=B(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Nom"),t("th",null,"Mail"),t("th",null,"Produit"),t("th",null,"Comentaire"),t("th",null,"Prix"),t("th",null,"Statut"),t("th",null,"Changer Statut")])],-1)),P=["onUpdate:modelValue"],I=["onClick"],V=["onChange"],M=["value"];function N(e,a,s,T,i,p){const S=h("EnteteAdmin"),v=h("BasDePage");return d(),u(c,null,[t("header",null,[_(S)]),t("table",null,[D,t("tbody",null,[(d(!0),u(c,null,m(i.commandes,l=>(d(),u("tr",{key:l.id},[t("td",null,n(l.id),1),t("td",null,n(l.client),1),t("td",null,n(l.emailclient),1),t("td",null,n(l.produit),1),t("td",null,[g(t("input",{type:"text","onUpdate:modelValue":o=>l.descriptionAdmin=o,placeholder:"Entrez le texte"},null,8,P),[[b,l.descriptionAdmin]]),t("button",{onClick:o=>p.publierTexte(l)},"Publier",8,I)]),t("td",null,n(l.prix),1),t("td",null,n(l.statut),1),t("td",null,[g(t("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.selectedStatut=o),onChange:o=>p.envoyerStatut(l),class:"custom-select"},[(d(!0),u(c,null,m(i.statuts,o=>(d(),u("option",{key:o.nom,value:o.nom},n(o.nom),9,M))),128))],40,V),[[f,e.selectedStatut]])])]))),128))])]),t("footer",null,[_(v)])],64)}const w=C(E,[["render",N],["__scopeId","data-v-6a978ed9"]]);export{w as default};

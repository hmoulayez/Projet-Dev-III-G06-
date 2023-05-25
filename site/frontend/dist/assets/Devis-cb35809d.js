import{a2 as h,a5 as f,a4 as y,a3 as c,a6 as u,a7 as r,ac as l,ab as e,R as p,am as D,X as d,an as m,ao as g,_ as q,ad as E,ai as b,ag as x,ak as V,al as B}from"./index-a3d6966a.js";const M={name:"Devis",components:{BasDePage:f,Entete:y},data(){return{nom:"",email:"",modele:"",remarque:"",models:[],demandeEnvoyee:!1}},mounted(){this.recupModels()},methods:{recupModels(){c.get("http://localhost:3000/prod/").then(t=>{this.models=t.data.map(o=>o.nom)}).catch(t=>{console.error("Erreur lors de la récupération de la liste des modèles:",t)})},envoyerDemandeDevis(){const t={nom:this.nom,email:this.email,modele:this.modele,remarque:this.remarque};c.post("http://localhost:3000/devis",t).then(()=>{console.log("Demande de devis envoyée !"),this.nom="",this.email="",this.modele="",this.remarque="",this.demandeEnvoyee=!0}).catch(o=>{console.error("Erreur lors de l'envoi de la demande de devis :",o)})}}},n=t=>(V("data-v-2a103dc1"),t=t(),B(),t),S={class:"devis-formulaire"},k={class:"corps"},w={class:"container"},I=n(()=>e("h1",{class:"form-title"},"Formulaire de devis",-1)),N={class:"form-group"},P=n(()=>e("label",{for:"nom"},"Nom et Prénom :",-1)),U={class:"form-group"},C=n(()=>e("label",{for:"email"},"Email :",-1)),F={class:"form-group"},R=n(()=>e("label",{for:"modele"},"Modèle :",-1)),L={class:"form-group"},T=n(()=>e("label",{for:"remarque"},"Remarque :",-1)),X=n(()=>e("button",{type:"submit",class:"btn btn-envoyer"},"Envoyer",-1)),j={key:0,class:"message-succes"};function z(t,o,A,G,a,i){const _=u("Entete"),v=u("BasDePage");return r(),l("div",S,[e("header",null,[p(_)]),e("main",k,[e("div",w,[I,e("form",{onSubmit:o[4]||(o[4]=D((...s)=>i.envoyerDemandeDevis&&i.envoyerDemandeDevis(...s),["prevent"])),class:"my-4"},[e("div",N,[P,d(e("input",{type:"text",class:"form-control",id:"nom",name:"nom","onUpdate:modelValue":o[0]||(o[0]=s=>a.nom=s),autocomplete:"on",required:""},null,512),[[m,a.nom]])]),e("div",U,[C,d(e("input",{type:"email",class:"form-control",id:"email",name:"email","onUpdate:modelValue":o[1]||(o[1]=s=>a.email=s),autocomplete:"on",required:""},null,512),[[m,a.email]])]),e("div",F,[R,d(e("select",{class:"form-control",id:"modele",name:"modele","onUpdate:modelValue":o[2]||(o[2]=s=>a.modele=s),autocomplete:"on",required:""},[(r(!0),l(q,null,E(a.models,s=>(r(),l("option",{key:s},x(s),1))),128))],512),[[g,a.modele]])]),e("div",L,[T,d(e("textarea",{class:"form-control",id:"remarque",name:"remarque",rows:"4","onUpdate:modelValue":o[3]||(o[3]=s=>a.remarque=s),autocomplete:"on"},null,512),[[m,a.remarque]])]),X],32),a.demandeEnvoyee?(r(),l("div",j," Demande de devis envoyée avec succès ! ")):b("",!0)])]),e("footer",null,[p(v)])])}const J=h(M,[["render",z],["__scopeId","data-v-2a103dc1"]]);export{J as default};

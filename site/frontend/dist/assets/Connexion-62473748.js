import{a2 as w,a4 as x,a5 as g,a6 as p,a7 as a,ac as d,ab as o,R as u,ag as r,am as v,X as c,an as m,ai as _,af as b,ak as C,al as y}from"./index-a61ff514.js";const P={name:"LoginPage",components:{Entete:x,BasDePage:g},data(){return{mode:"connexion",email:"",password:"",confirmPassword:""}},methods:{switchMode(){this.mode=this.mode==="connexion"?"creation":"connexion"},submitForm(){this.mode==="connexion"?this.performConnexion():this.performInscription()},performConnexion(){},performInscription(){this.password,this.confirmPassword}}},l=i=>(C("data-v-69824950"),i=i(),y(),i),V={class:"corps"},k={class:"login-page"},I={class:"login-container"},S={class:"login-title"},B={class:"form-group"},M=l(()=>o("label",{for:"email"},"Adresse email :",-1)),D={key:0,class:"form-group"},E=l(()=>o("label",{for:"password"},"Mot de passe :",-1)),N={key:1,class:"form-group"},q=l(()=>o("label",{for:"confirmPassword"},"Confirmer le mot de passe :",-1)),F={type:"submit",class:"btn-primary btn-login"},U={class:"signup-link"};function z(i,s,T,j,e,t){const f=p("Entete"),h=p("BasDePage");return a(),d("div",null,[o("header",null,[u(f)]),o("main",V,[o("div",k,[o("div",I,[o("h1",S,r(e.mode==="connexion"?"Connexion":"Inscription"),1),o("form",{class:"login-form",onSubmit:s[3]||(s[3]=v((...n)=>t.submitForm&&t.submitForm(...n),["prevent"]))},[o("div",B,[M,c(o("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=n=>e.email=n),required:""},null,512),[[m,e.email]])]),e.mode==="connexion"||e.mode==="creation"?(a(),d("div",D,[E,c(o("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=n=>e.password=n),required:""},null,512),[[m,e.password]])])):_("",!0),e.mode==="creation"?(a(),d("div",N,[q,c(o("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":s[2]||(s[2]=n=>e.confirmPassword=n),required:""},null,512),[[m,e.confirmPassword]])])):_("",!0),o("button",F,r(e.mode==="connexion"?"Se connecter":"Créer un compte"),1)],32),o("div",U,[o("p",null,[b(r(e.mode==="connexion"?"Vous n'avez pas de compte ?":"Vous avez déjà un compte ?")+" ",1),o("a",{href:"#",onClick:s[4]||(s[4]=(...n)=>t.switchMode&&t.switchMode(...n))},r(e.mode==="connexion"?"Créer un compte":"Se connecter"),1)])])])])]),o("footer",null,[u(h)])])}const L=w(P,[["render",z],["__scopeId","data-v-69824950"]]);export{L as default};

import{a2 as w,a4 as x,a5 as g,a6 as p,a7 as a,a8 as d,a9 as e,R as u,af as r,am as v,X as c,an as m,ai as _,ae as b,ak as C,al as y}from"./index-f28092e0.js";import"logo1.png";const P={name:"LoginPage",components:{Entete:x,BasDePage:g},data(){return{mode:"connexion",email:"",password:"",confirmPassword:""}},methods:{switchMode(){this.mode=this.mode==="connexion"?"creation":"connexion"},submitForm(){this.mode==="connexion"?this.performConnexion():this.performInscription()},performConnexion(){},performInscription(){this.password,this.confirmPassword}}},l=i=>(C("data-v-e64d86c2"),i=i(),y(),i),V={class:"login-page"},k={class:"login-container"},I={class:"login-title"},S={class:"form-group"},B=l(()=>e("label",{for:"email"},"Adresse email :",-1)),M={key:0,class:"form-group"},D=l(()=>e("label",{for:"password"},"Mot de passe :",-1)),E={key:1,class:"form-group"},N=l(()=>e("label",{for:"confirmPassword"},"Confirmer le mot de passe :",-1)),q={type:"submit",class:"btn-primary btn-login"},F={class:"signup-link"};function U(i,n,z,T,o,t){const f=p("Entete"),h=p("BasDePage");return a(),d("div",null,[e("header",null,[u(f)]),e("main",null,[e("div",V,[e("div",k,[e("h1",I,r(o.mode==="connexion"?"Connexion":"Inscription"),1),e("form",{class:"login-form",onSubmit:n[3]||(n[3]=v((...s)=>t.submitForm&&t.submitForm(...s),["prevent"]))},[e("div",S,[B,c(e("input",{type:"email",id:"email","onUpdate:modelValue":n[0]||(n[0]=s=>o.email=s),required:""},null,512),[[m,o.email]])]),o.mode==="connexion"||o.mode==="creation"?(a(),d("div",M,[D,c(e("input",{type:"password",id:"password","onUpdate:modelValue":n[1]||(n[1]=s=>o.password=s),required:""},null,512),[[m,o.password]])])):_("",!0),o.mode==="creation"?(a(),d("div",E,[N,c(e("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":n[2]||(n[2]=s=>o.confirmPassword=s),required:""},null,512),[[m,o.confirmPassword]])])):_("",!0),e("button",q,r(o.mode==="connexion"?"Se connecter":"Créer un compte"),1)],32),e("div",F,[e("p",null,[b(r(o.mode==="connexion"?"Vous n'avez pas de compte ?":"Vous avez déjà un compte ?")+" ",1),e("a",{href:"#",onClick:n[4]||(n[4]=(...s)=>t.switchMode&&t.switchMode(...s))},r(o.mode==="connexion"?"Créer un compte":"Se connecter"),1)])])])])]),e("footer",null,[u(h)])])}const L=w(P,[["render",U],["__scopeId","data-v-e64d86c2"]]);export{L as default};

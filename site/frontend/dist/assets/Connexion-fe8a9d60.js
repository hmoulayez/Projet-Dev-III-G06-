import{a2 as w,a4 as x,a5 as g,a6 as p,a7 as a,ac as d,ab as e,R as u,ag as r,am as v,X as c,an as m,ai as _,af as b,ak as C,al as y}from"./index-32a57a3c.js";const P={name:"LoginPage",components:{Entete:x,BasDePage:g},data(){return{mode:"connexion",email:"",password:"",confirmPassword:""}},methods:{switchMode(){this.mode=this.mode==="connexion"?"creation":"connexion"},submitForm(){this.mode==="connexion"?this.performConnexion():this.performInscription()},performConnexion(){},performInscription(){this.password,this.confirmPassword}}},l=i=>(C("data-v-e8963ad0"),i=i(),y(),i),V={class:"corps"},k={class:"login-page"},I={class:"login-container"},S={class:"login-title"},B={class:"form-group"},M=l(()=>e("label",{for:"email"},"Adresse email :",-1)),D={key:0,class:"form-group"},E=l(()=>e("label",{for:"password"},"Mot de passe :",-1)),N={key:1,class:"form-group"},q=l(()=>e("label",{for:"confirmPassword"},"Confirmer le mot de passe :",-1)),F={type:"submit",class:"btn-primary btn-login"},U={class:"signup-link"};function z(i,s,T,j,o,t){const f=p("Entete"),h=p("BasDePage");return a(),d("div",null,[e("header",null,[u(f)]),e("main",V,[e("div",k,[e("div",I,[e("h1",S,r(o.mode==="connexion"?"Connexion":"Inscription"),1),e("form",{class:"login-form",onSubmit:s[3]||(s[3]=v((...n)=>t.submitForm&&t.submitForm(...n),["prevent"]))},[e("div",B,[M,c(e("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=n=>o.email=n),required:""},null,512),[[m,o.email]])]),o.mode==="connexion"||o.mode==="creation"?(a(),d("div",D,[E,c(e("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=n=>o.password=n),required:""},null,512),[[m,o.password]])])):_("",!0),o.mode==="creation"?(a(),d("div",N,[q,c(e("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":s[2]||(s[2]=n=>o.confirmPassword=n),required:""},null,512),[[m,o.confirmPassword]])])):_("",!0),e("button",F,r(o.mode==="connexion"?"Se connecter":"Créer un compte"),1)],32),e("div",U,[e("p",null,[b(r(o.mode==="connexion"?"Vous n'avez pas de compte ?":"Vous avez déjà un compte ?")+" ",1),e("a",{href:"#",onClick:s[4]||(s[4]=(...n)=>t.switchMode&&t.switchMode(...n))},r(o.mode==="connexion"?"Créer un compte":"Se connecter"),1)])])])])]),e("footer",null,[u(h)])])}const L=w(P,[["render",z],["__scopeId","data-v-e8963ad0"]]);export{L as default};

import{a2 as f,a4 as g,a5 as v,a3 as b,a6 as d,a7 as r,ac as l,ab as o,R as u,am as w,X as i,an as c,ai as k,_ as y,aM as x,ak as V,al as E,af as p}from"./index-a73c8552.js";import"logo1.png";const P={name:"Contact",components:{Entete:g,BasDePage:v},data(){return{form:{name:"",email:"",phone:"",message:""},show:!1,success:!1}},methods:{submitForm(){b.post("http://18.192.57.171:3000/contact",this.form).then(a=>{console.log(a),this.show=!0,this.success=!0,this.form.name="",this.form.email="",this.form.phone="",this.form.message=""}).catch(a=>{console.error("Erreur lors de l'envoi du message:",a),this.show=!0,this.success=!1})}}},n=a=>(V("data-v-dba02460"),a=a(),E(),a),C={class:"container",id:"contact"},B={class:"row"},I={class:"col-md-6"},N=n(()=>o("h2",null,"Contactez-nous",-1)),S={class:"form-group"},F=n(()=>o("label",{for:"name"},"Nom et Prénom",-1)),M={class:"form-group"},D=n(()=>o("label",{for:"email"},"Email",-1)),U={class:"form-group"},q=n(()=>o("label",{for:"phone"},"Téléphone ",-1)),T={class:"form-group"},z=n(()=>o("label",{for:"message"},"Message",-1)),R=n(()=>o("button",{type:"submit",class:"btn btn-primary btn-animate btn-white"},"Envoyer",-1)),X=x('<div class="mt-5 follow-us" data-v-dba02460><h4 data-v-dba02460>Suivez-nous sur :</h4><div class="social-media-icons" data-v-dba02460><a href="https://www.facebook.com/kaboricreations" target="_blank" data-v-dba02460><img src="https://storage.cloud.google.com/photokabori/Photo%20Polychrome/images/Facebook_icon.svg.png" alt="facebook logo" data-v-dba02460></a><a href="https://www.instagram.com/kabori_creations/" target="_blank" data-v-dba02460><img src="https://storage.cloud.google.com/photokabori/Photo%20Polychrome/images/insta.png" alt="Instagram logo" data-v-dba02460></a></div></div>',1),j={class:"col-md-6"},A={key:0},G=n(()=>o("h2",null,"Confirmation",-1)),H={key:0,class:"text-success"},J={key:1,class:"text-danger"},K=n(()=>o("div",{class:"col-md-6"},[o("h2",null,"Informations de contact"),o("p",null,[o("i",{class:"fas fa-phone-alt"}),p(" +32 1 23 45 67 89")]),o("p",null,[o("i",{class:"fas fa-envelope"}),p(" info@sitekabori.com")])],-1));function L(a,e,O,Q,s,m){const h=d("Entete"),_=d("BasDePage");return r(),l(y,null,[o("header",null,[u(h)]),o("main",null,[o("div",C,[o("div",B,[o("div",I,[N,o("form",{onSubmit:e[4]||(e[4]=w((...t)=>m.submitForm&&m.submitForm(...t),["prevent"]))},[o("div",S,[F,i(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>s.form.name=t),required:""},null,512),[[c,s.form.name]])]),o("div",M,[D,i(o("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>s.form.email=t),required:""},null,512),[[c,s.form.email]])]),o("div",U,[q,i(o("input",{type:"tel",class:"form-control",id:"phone","onUpdate:modelValue":e[2]||(e[2]=t=>s.form.phone=t)},null,512),[[c,s.form.phone]])]),o("div",T,[z,i(o("textarea",{class:"form-control",id:"message",rows:"5","onUpdate:modelValue":e[3]||(e[3]=t=>s.form.message=t),required:""},null,512),[[c,s.form.message]])]),R],32),X]),o("div",j,[s.show?(r(),l("div",A,[G,s.success?(r(),l("p",H,"Message envoyé avec succès !")):(r(),l("p",J,"Erreur lors de l'envoi du message."))])):k("",!0)]),K])])]),o("footer",null,[u(_)])],64)}const Z=f(P,[["render",L],["__scopeId","data-v-dba02460"]]);export{Z as default};

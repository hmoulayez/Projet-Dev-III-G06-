import{a2 as f,a4 as g,a5 as v,a3 as b,a6 as d,a7 as r,ac as i,ab as o,R as u,am as k,X as l,an as c,ai as w,_ as y,aM as x,ak as V,al as E,af as p}from"./index-b093b079.js";import"logo1.png";const P={name:"Contact",components:{Entete:g,BasDePage:v},data(){return{form:{name:"",email:"",phone:"",message:""},show:!1,success:!1}},methods:{submitForm(){b.post("https://serveur.kaboricreations.com/contact",this.form).then(t=>{console.log(t),this.show=!0,this.success=!0,this.form.name="",this.form.email="",this.form.phone="",this.form.message=""}).catch(t=>{console.error("Erreur lors de l'envoi du message:",t),this.show=!0,this.success=!1})}}},n=t=>(V("data-v-9d69aaa2"),t=t(),E(),t),C={class:"container",id:"contact"},B={class:"row"},I={class:"col-md-6"},N=n(()=>o("h2",null,"Contactez-nous",-1)),S={class:"form-group"},F=n(()=>o("label",{for:"name"},"Nom et Prénom",-1)),M={class:"form-group"},D=n(()=>o("label",{for:"email"},"Email",-1)),U={class:"form-group"},q=n(()=>o("label",{for:"phone"},"Téléphone ",-1)),T={class:"form-group"},z=n(()=>o("label",{for:"message"},"Message",-1)),R=n(()=>o("button",{type:"submit",class:"btn btn-primary btn-animate btn-white"},"Envoyer",-1)),X=x('<div class="mt-5 follow-us" data-v-9d69aaa2><h4 data-v-9d69aaa2>Suivez-nous sur :</h4><div class="social-media-icons" data-v-9d69aaa2><a href="https://www.facebook.com/kaboricreations" target="_blank" data-v-9d69aaa2><img src="https://storage.cloud.google.com/photokabori/Photo%20Polychrome/images/Facebook_icon.svg.png" alt="facebook logo" data-v-9d69aaa2></a><a href="https://www.instagram.com/kabori_creations/" target="_blank" data-v-9d69aaa2><img src="https://storage.cloud.google.com/photokabori/Photo%20Polychrome/images/insta.png" alt="Instagram logo" data-v-9d69aaa2></a></div></div>',1),j={class:"col-md-6"},A={key:0},G=n(()=>o("h2",null,"Confirmation",-1)),H={key:0,class:"text-success"},J={key:1,class:"text-danger"},K=n(()=>o("div",{class:"col-md-6"},[o("h2",null,"Informations de contact"),o("p",null,[o("i",{class:"fas fa-phone-alt"}),p(" +32 1 23 45 67 89")]),o("p",null,[o("i",{class:"fas fa-envelope"}),p(" info@sitekabori.com")])],-1));function L(t,e,O,Q,s,m){const h=d("Entete"),_=d("BasDePage");return r(),i(y,null,[o("header",null,[u(h)]),o("main",null,[o("div",C,[o("div",B,[o("div",I,[N,o("form",{onSubmit:e[4]||(e[4]=k((...a)=>m.submitForm&&m.submitForm(...a),["prevent"]))},[o("div",S,[F,l(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>s.form.name=a),required:""},null,512),[[c,s.form.name]])]),o("div",M,[D,l(o("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>s.form.email=a),required:""},null,512),[[c,s.form.email]])]),o("div",U,[q,l(o("input",{type:"tel",class:"form-control",id:"phone","onUpdate:modelValue":e[2]||(e[2]=a=>s.form.phone=a)},null,512),[[c,s.form.phone]])]),o("div",T,[z,l(o("textarea",{class:"form-control",id:"message",rows:"5","onUpdate:modelValue":e[3]||(e[3]=a=>s.form.message=a),required:""},null,512),[[c,s.form.message]])]),R],32),X]),o("div",j,[s.show?(r(),i("div",A,[G,s.success?(r(),i("p",H,"Message envoyé avec succès !")):(r(),i("p",J,"Erreur lors de l'envoi du message."))])):w("",!0)]),K])])]),o("footer",null,[u(_)])],64)}const Z=f(P,[["render",L],["__scopeId","data-v-9d69aaa2"]]);export{Z as default};

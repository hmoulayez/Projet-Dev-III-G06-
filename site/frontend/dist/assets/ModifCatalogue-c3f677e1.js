import{a2 as x,a3 as d,b6 as C,a5 as P,a6 as h,a7 as u,ac as p,ab as o,R as m,am as y,af as _,X as r,ao as U,_ as a,ad as f,an as i,ag as b,ak as V,al as E}from"./index-1f7e914e.js";const M={data(){return{selectedCollection:"",collections:[],selectedCateg:"",categ:[],model:"",nouveldescription:"",photoUrl1:"",photoUrl2:"",photoUrl3:"",photoUrl4:"",submitted:!1,nouveauPrix:null}},mounted(){this.recupCollections(),this.recupCateg()},methods:{recupCollections(){d.get("http://localhost:3000/collections").then(n=>{this.collections=n.data}).catch(n=>{console.error("Erreur lors de la récupération de la liste des collections :",n)})},recupCateg(){d.get("http://localhost:3000/categ").then(n=>{this.categ=n.data}).catch(n=>{console.error("Erreur lors de la récupération de la liste des catégories :",n)})},submitForm(){const n={nom:this.model,photo1:this.photoUrl1,photo2:this.photoUrl2,photo3:this.photoUrl3,photo4:this.photoUrl4,categ:this.selectedCateg,col:this.selectedCollection,description:this.nouveldescription,prix:this.nouveauPrix};d.post("http://localhost:3000/prod",n).then(t=>{console.log(t.data)}).catch(t=>{console.log(t)})}},name:"ModifCatalogue",components:{EnteteAdmin:C,BasDePage:P}},s=n=>(V("data-v-130d9a92"),n=n(),E(),n),B={class:"form-div"},D=s(()=>o("h1",null,"Nouveau Modèle",-1)),S=["value"],k=s(()=>o("br",null,null,-1)),L=s(()=>o("br",null,null,-1)),N=["value"],R=s(()=>o("br",null,null,-1)),F=s(()=>o("br",null,null,-1)),I=s(()=>o("label",{for:"model"},"Nom model :",-1)),w=s(()=>o("br",null,null,-1)),A=s(()=>o("label",null,"Description :",-1)),z=s(()=>o("br",null,null,-1)),T=s(()=>o("label",{for:"photoUrl1"},"Photo 1 :",-1)),X=s(()=>o("br",null,null,-1)),j=s(()=>o("label",{for:"photoUrl2"},"Photo 2 :",-1)),q=s(()=>o("br",null,null,-1)),G=s(()=>o("label",{for:"photoUrl3"},"Photo 3 :",-1)),H=s(()=>o("br",null,null,-1)),J=s(()=>o("label",{for:"photoUrl4"},"Photo 4 :",-1)),K=s(()=>o("br",null,null,-1)),O=s(()=>o("label",{for:"nouveauPrix"},"Prix :",-1)),Q=s(()=>o("br",null,null,-1)),W=s(()=>o("button",{type:"submit",class:"form-button"},"Envoyer",-1));function Y(n,t,Z,$,l,c){const v=h("EnteteAdmin"),g=h("BasDePage");return u(),p(a,null,[o("header",null,[m(v)]),o("main",null,[o("div",B,[D,o("form",{onSubmit:t[9]||(t[9]=y((...e)=>c.submitForm&&c.submitForm(...e),["prevent"])),class:"form-container"},[o("p",null,[_(" Choisissez une collection "),r(o("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedCollection=e),class:"custom-select"},[(u(!0),p(a,null,f(l.collections,e=>(u(),p("option",{key:e.id,value:e.nom},b(e.nom),9,S))),128))],512),[[U,l.selectedCollection]]),k]),L,o("p",null,[_(" Choisissez une catégorie "),r(o("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.selectedCateg=e),class:"custom-select"},[(u(!0),p(a,null,f(l.categ,e=>(u(),p("option",{key:e.id,value:e.nom},b(e.nom),9,N))),128))],512),[[U,l.selectedCateg]]),R]),F,I,r(o("input",{type:"text",id:"model","onUpdate:modelValue":t[2]||(t[2]=e=>l.model=e),class:"form-input"},null,512),[[i,l.model]]),w,A,r(o("textarea",{id:"nouveldescription","onUpdate:modelValue":t[3]||(t[3]=e=>l.nouveldescription=e),class:"form-text"},null,512),[[i,l.nouveldescription]]),z,T,r(o("input",{type:"text",id:"photoUrl1","onUpdate:modelValue":t[4]||(t[4]=e=>l.photoUrl1=e),placeholder:"URL de la photo",class:"form-input"},null,512),[[i,l.photoUrl1]]),X,j,r(o("input",{type:"text",id:"photoUrl2","onUpdate:modelValue":t[5]||(t[5]=e=>l.photoUrl2=e),placeholder:"URL de la photo",class:"form-input"},null,512),[[i,l.photoUrl2]]),q,G,r(o("input",{type:"text",id:"photoUrl3","onUpdate:modelValue":t[6]||(t[6]=e=>l.photoUrl3=e),placeholder:"URL de la photo",class:"form-input"},null,512),[[i,l.photoUrl3]]),H,J,r(o("input",{type:"text",id:"photoUrl4","onUpdate:modelValue":t[7]||(t[7]=e=>l.photoUrl4=e),placeholder:"URL de la photo",class:"form-input"},null,512),[[i,l.photoUrl4]]),K,O,r(o("input",{type:"number",id:"nouveauPrix","onUpdate:modelValue":t[8]||(t[8]=e=>l.nouveauPrix=e),step:"0.01",min:"0",class:"form-input"},null,512),[[i,l.nouveauPrix]]),Q,W],32)])]),o("footer",null,[m(g)])],64)}const eo=x(M,[["render",Y],["__scopeId","data-v-130d9a92"]]);export{eo as default};

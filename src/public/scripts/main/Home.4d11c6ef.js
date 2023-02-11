import{E as V,a as pe,b as Z,c as X,d as ge,e as ye,f as ee,g as he,h as _e,j as me,v as te,k as fe,l as ae}from"../element-plus/element-plus.8e9467af.js";import{u as q}from"../vuex/vuex.da982c6b.js";import{h as ve,i as ke}from"../header/header.f139d950.js";import{r as S}from"../request/request.3568c0ed.js";import{I as R,a0 as G,o as d,P as H,Q as m,a as p,X as i,c as k,a7 as F,F as B,u as t,U as N,V as O,W,ay as De,az as we,d as P,_ as ne,i as le,R as oe,L as be,a4 as Q,K,$ as Y}from"../@vue/@vue.1f806425.js";import{_ as $e}from"../index-056017f5.js";import"../lodash-es/lodash-es.b450e6da.js";import"../@vueuse/@vueuse.abd1af5c.js";import"../@element-plus/@element-plus.6ecdeb01.js";import"../@popperjs/@popperjs.17badf2b.js";import"../@ctrl/@ctrl.10aa4426.js";import"../dayjs/dayjs.18cc51e8.js";import"../async-validator/async-validator.100fbf61.js";import"../memoize-one/memoize-one.e03be456.js";import"../escape-html/escape-html.11c602e3.js";import"../normalize-wheel-es/normalize-wheel-es.2d9001a5.js";import"../@floating-ui/@floating-ui.0c5c8158.js";import"../axios/axios.6099e67a.js";import"../form-data/form-data.ccf97ba3.js";import"../vue-router/vue-router.925f0083.js";const J=I=>(De("data-v-08506308"),I=I(),we(),I),Ce={class:"new-dialog-c"},Le={class:"new-dialog-item"},Ee=J(()=>p("label",null,"category",-1)),Ve={key:0,class:"new-dialog-item"},xe=J(()=>p("label",null,"oid",-1)),Ie={class:"new-dialog-item"},ze=J(()=>p("label",null,"key",-1)),Se={key:1,class:"new-dialog-item"},Ne=J(()=>p("label",null,"name",-1)),Oe={key:2,class:"new-dialog-item"},Ue=J(()=>p("label",null,"desc",-1)),Pe=["label","value"],Te={class:"dialog-footer"},je=O("Cancel"),He=O("Save"),Be=R({__name:"editDialog",props:{openDialog:{type:Boolean,default:!1},changeDialog:{type:Function,default:()=>{}},newDialogData:{type:Object},saveData:{type:Function,default:()=>{}}},setup(I){var b;const f=I,s=q().state,U=()=>{f.changeDialog(!1)};let C={type:1,key:"",desc:"",name:"",oid:"",haslanguage:((b=s.language)==null?void 0:b.map(o=>({key:o.key,value:""})))||[]},n=G(f.newDialogData||C);const L=o=>{if(n=Object.assign(n,{key:"",name:"",desc:"",oid:""}),o===3){let a=[];s.language.forEach(r=>{a.push({key:r.key,value:""})}),n.haslanguage=a}},h=o=>{},w=()=>{f.changeDialog(!1)},D=()=>{let o=JSON.parse(JSON.stringify(n));if((o.type===1||o.type===2)&&(o.key.trim().length==0||o.name.trim().length==0)){V({message:"key and name is required",type:"error"});return}if(o.type===3&&(o.oid.trim().length==0||o.key.trim().length==0)){V({message:"oid and key is required",type:"error"});return}let a="",r={};if(typeof o.id<"u"&&o.id.length!=0&&(r.id=o.id),o.type===1)a="category",r={...r,key:o.key,name:o.name,desc:o.desc};else if(o.type===2)a="language",r={...r,key:o.key,name:o.name};else{a="data";let _={};if(o.haslanguage.filter(u=>u.value.trim().length!=0).forEach(u=>{_[u.key]=u.value}),_.length==0)return;r={...r,oid:o.oid,key:ve(o.key),..._}}f.saveData&&f.saveData(a,r)};return(o,a)=>{const r=ye,_=pe,u=Z,z=X,T=ge;return d(),H(T,{"custom-class":"new-dialog",modelValue:f.openDialog,"onUpdate:modelValue":a[5]||(a[5]=e=>f.openDialog=e),title:t(n).id&&t(n).id.length!=0?"Edit":"Create",width:"30%","before-close":U},{footer:m(()=>[p("span",Te,[i(z,{onClick:w},{default:m(()=>[je]),_:1}),i(z,{type:"primary",onClick:D},{default:m(()=>[He]),_:1})])]),default:m(()=>[p("div",Ce,[p("div",Le,[Ee,p("section",null,[i(_,{disabled:!!(t(n).id&&t(n).id.length!=0),modelValue:t(n).type,"onUpdate:modelValue":a[0]||(a[0]=e=>t(n).type=e),class:"m-2",placeholder:"Select",onChange:L},{default:m(()=>[(d(),k(B,null,F([{label:"Category",value:1},{label:"Language",value:2},{label:"I18n",value:3}],e=>i(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["disabled","modelValue"])])]),t(n).type==3?(d(),k("div",Ve,[xe,p("section",null,[i(_,{disabled:!!(t(n).id&&t(n).id.length!=0),modelValue:t(n).oid,"onUpdate:modelValue":a[1]||(a[1]=e=>t(n).oid=e),class:"m-2",placeholder:"Select",onChange:h},{default:m(()=>[(d(!0),k(B,null,F(t(s).categoryList.map(e=>({label:e.name,value:e.id})),e=>(d(),H(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["disabled","modelValue"])])])):N("",!0),p("div",Ie,[ze,p("section",null,[i(u,{disabled:!!(t(n).id&&t(n).id.length!=0),modelValue:t(n).key,"onUpdate:modelValue":a[2]||(a[2]=e=>t(n).key=e),placeholder:"Please input"},null,8,["disabled","modelValue"])])]),t(n).type!=3?(d(),k("div",Se,[Ne,p("section",null,[i(u,{modelValue:t(n).name,"onUpdate:modelValue":a[3]||(a[3]=e=>t(n).name=e),placeholder:"Please input"},null,8,["modelValue"])])])):N("",!0),t(n).type==1?(d(),k("div",Oe,[Ue,p("section",null,[i(u,{modelValue:t(n).desc,"onUpdate:modelValue":a[4]||(a[4]=e=>t(n).desc=e),placeholder:"Please input"},null,8,["modelValue"])])])):N("",!0),t(n).type==3?(d(!0),k(B,{key:3},F(t(n).haslanguage,e=>(d(),k("div",{key:e.key,label:e.key,value:e.key,class:"new-dialog-item"},[p("label",null,W(e.key),1),p("section",null,[i(u,{modelValue:e.value,"onUpdate:modelValue":j=>e.value=j,placeholder:"Please input"},null,8,["modelValue","onUpdate:modelValue"])])],8,Pe))),128)):N("",!0)])]),_:1},8,["modelValue","title"])}}});const se=$e(Be,[["__scopeId","data-v-08506308"]]),Fe={class:"i18n-c"},Je={class:"i18n-main-h"},Me={class:"i18n-main-h-r"},We={class:"i18n-main-hr-l"},qe={class:"i18n-main-h-search"},Re={class:"i18n-main-hr-r"},Ae={class:"i18n-h-add"},Ke={class:"i18n-main"},Qe={class:"i18n-r"},Xe=O("Edit"),Ge=O("Remove"),Ye=O("Edit"),Ze=O("Remove"),et=R({__name:"content",props:{getI18nList:Function},setup(I){const f=I,y=q(),s=y.state,U=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;document.documentElement.clientWidth,document.documentElement.clientHeight;const C=P(),n=P(),L=P("");let h=null;const w=l=>{L.value=l,clearTimeout(h),h=setTimeout(()=>{y.dispatch("chaneData",{sk:L.value,searchLoading:!0}).then(()=>{f.getI18nList()})},500)};let D=G({});const b=async l=>{let c=await S({url:`/fire/i18n/language/${l.id}`,method:"delete"});if(c.code==1){V({message:c.message,type:"success"});let g=[];s.language.forEach((v,E)=>{v.id!=l.id&&g.push(v)}),y.dispatch("chaneData",{language:g})}else V({message:c.message,type:"error"})},o=l=>{console.log(l,"12312312"),D=Object.assign(D,{type:2,id:l.id,key:l.key,name:l.name}),u(!0)},a=async l=>{let c=await S({url:`/fire/i18n/data/${l.id}`,method:"delete"});if(c.code==1){V({message:c.message,type:"success"});let g=[];s.list.forEach((v,E)=>{v.id!=l.id&&g.push(v)}),y.dispatch("chaneData",{list:g})}else V({message:c.message,type:"error"})},r=l=>{let c=[];s.language.forEach(g=>{typeof l[g.key]<"u"?c.push({key:g.key,value:l[g.key]}):c.push({key:g.key,value:""})}),D=Object.assign(D,{type:3,id:l.id,oid:l.oid,key:l.key,haslanguage:c}),u(!0)},_=P(!1),u=l=>{_.value=l},z=()=>{D=Object.assign(D,{type:1,id:"",oid:"",key:"",name:""}),_.value=!0},T=async(l,c)=>{let g=await S({url:`/fire/i18n/${l}`+(typeof c.id<"u"?`/${c.id}`:""),method:typeof c.id<"u"?"put":"post",data:JSON.parse(JSON.stringify(c))});if(g.code!=0){let v={};l==="category"?(v.category=s.categoryList,typeof c.id<"u"?v.category.forEach((E,x)=>{E.id===c.id&&(v.category[x]={...E,...g.data})}):v.category.push(g.data)):l==="language"?(v.language=s.language,typeof c.id<"u"?v.language.forEach((E,x)=>{E.id===c.id&&(v.language[x]={...E,...g.data})}):v.language.push(g.data)):s.category==c.oid&&(v.list=s.list,typeof c.id<"u"?v.list.forEach((E,x)=>{E.id===c.id&&(v.list[x]={...E,...g.data})}):v.list.unshift(g.data)),y.dispatch("chaneData",c).then(()=>{u(!1)})}else V({message:g.message,type:"error"})},e=l=>{y.dispatch("chaneData",{pageno:l-1}).then(()=>{f.getI18nList()})},j=()=>{let l=document.documentElement.clientWidth,c=document.documentElement.clientHeight;C.value=l-280;let g=s.num>s.pagesize;n.value=c-125-(g?55:0)};return j(),ne(()=>{j()}),le(()=>{let l=null;window.addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(()=>{j()},200)})}),(l,c)=>{const g=Z,v=Q("Plus"),E=ee,x=X,A=he,ie=fe,ce=_e,de=me,re=te;return d(),k("div",Fe,[p("div",Je,[p("div",Me,[p("div",We,[p("div",qe,[i(g,{modelValue:L.value,"onUpdate:modelValue":c[0]||(c[0]=$=>L.value=$),class:"w-50 m-2",placeholder:"Search",size:"large",onInput:w},null,8,["modelValue"])])]),p("div",Re,[p("div",Ae,[i(x,{type:"primary",size:"large",circle:"",text:"",onClick:z},{default:m(()=>[i(E,null,{default:m(()=>[i(v)]),_:1})]),_:1})])])])]),p("div",Ke,[p("div",Qe,[oe((d(),H(ce,{data:t(s).list,"element-loading-svg":U,class:"custom-loading-svg","element-loading-svg-view-box":"-10, -10, 50, 50",style:be({width:C.value+"px"}),height:n.value},{default:m(()=>[i(A,{fixed:"",prop:"key",label:"key",width:"250"}),(d(!0),k(B,null,F(t(s).language,$=>(d(),H(A,{key:$.id,"data-key":$.key,prop:$.key,label:$.key,width:"300"},{header:m(M=>[i(ie,{"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;",placement:"top"},{reference:m(()=>[O(W($.key),1)]),default:m(()=>[i(x,{link:"",type:"primary",size:"small",onClick:ue=>o($)},{default:m(()=>[Xe]),_:2},1032,["onClick"]),i(x,{link:"",type:"primary",size:"small",onClick:ue=>b($)},{default:m(()=>[Ge]),_:2},1032,["onClick"])]),_:2},1024)]),default:m(M=>[O(W(M.row[$.key]),1)]),_:2},1032,["data-key","prop","label"]))),128)),i(A,{fixed:"right",label:"action",width:"120"},{default:m($=>[i(x,{link:"",type:"primary",size:"small",onClick:M=>r($.row)},{default:m(()=>[Ye]),_:2},1032,["onClick"]),i(x,{link:"",type:"primary",size:"small",onClick:M=>a($.row)},{default:m(()=>[Ze]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","style","height"])),[[re,t(s).searchLoading]]),t(s).num>t(s).pagesize?(d(),H(de,{key:0,"page-size":t(s).pagesize,"page-count":Math.ceil(t(s).num/t(s).pagesize),layout:"prev, pager, next",total:t(s).num,"current-page":t(s).pageno+1,"onUpdate:currentPage":e},null,8,["page-size","page-count","total","current-page"])):N("",!0)])]),_.value?(d(),H(se,{key:0,openDialog:_.value,changeDialog:u,newDialogData:t(D),saveData:T},null,8,["openDialog","newDialogData"])):N("",!0)])}}}),tt=["data-key","onClick","title"],at={className:"i18n-type-i-name"},nt=["onClick"],lt=["onClick"],ot=R({__name:"sidebar",props:{getI18nList:Function},setup(I){const f=I,y=q(),s=y.state,U=P(s.categoryList),C=P(U.value.length==0?"empty-list":""),n=a=>{y.dispatch("chaneData",{category:a,searchLoading:!0}).then(()=>{f.getI18nList()})};let L=G({});const h=async(a,r)=>{let _=await S({url:`/fire/i18n/category/${a.id}`,method:"delete"});if(_.code==1){V({message:_.message,type:"success"});let u=s.categoryList;u.splice(r,1),y.dispatch("chaneData",{categoryList:u})}else V({message:_.message,type:"error"})},w=a=>{L=Object.assign(L,{type:1,key:a.key,id:a.id,name:a.name,desc:a.desx}),b(!0)},D=P(!1),b=a=>{D.value=a},o=async(a,r)=>{let _=await S({url:`/fire/i18n/${a}`+(typeof r.id<"u"?`/${r.id}`:""),method:typeof r.id<"u"?"put":"post",data:JSON.parse(JSON.stringify(r))});if(_.code!=0){let u={};a==="category"&&(u.category=s.categoryList,typeof r.id<"u"?u.category.forEach((z,T)=>{z.id===r.id&&(u.category[T]={...z,..._.data})}):u.category.push(_.data)),y.dispatch("chaneData",r).then(()=>{b(!1)})}else V({message:_.message,type:"error"})};return(a,r)=>{const _=Q("Edit"),u=ee,z=Q("Delete"),T=ae;return d(),k(B,null,[U.value.length!=0?(d(),k("div",{key:0,class:K(["i18n-sidebar",C.value])},[(d(!0),k(B,null,F(t(s).categoryList,(e,j)=>(d(),k("div",{class:K(["i18n-type-i",e.id==t(s).category?"active":""]),key:e.id,"data-key":e.key,onClick:l=>n(e.id),title:e.name},[p("div",at,W(e.name),1),e.key!="common"?(d(),k("div",{key:0,className:"i18n-type-i-edit",onClick:Y(l=>w(e),["stop","prevent"])},[i(u,null,{default:m(()=>[i(_)]),_:1})],8,nt)):N("",!0),e.key!="common"?(d(),k("div",{key:1,className:"i18n-type-i-remove",onClick:Y(l=>h(e,j),["stop","prevent"])},[i(u,null,{default:m(()=>[i(z)]),_:1})],8,lt)):N("",!0)],10,tt))),128))],2)):(d(),k("div",{key:1,class:K(["i18n-sidebar",C.value])},[i(T,{description:"description"})],2)),D.value?(d(),H(se,{key:2,openDialog:D.value,changeDialog:b,newDialogData:t(L),saveData:o},null,8,["openDialog","newDialogData"])):N("",!0)],64)}}}),st={key:0,class:"i18n"},it={key:0,class:"i18n-main"},ct={key:1,class:"i18n-all-empty"},dt=O("Init Data"),rt={key:1,class:"i18n-all-empty"},zt=R({__name:"Home",setup(I){let f=q(),y=f.state;const s=async()=>{let h=await S({url:"/fire/i18n/category",method:"get"}).catch(w=>{throw w});h&&h.list&&h.list.length!=0?f.dispatch("chaneData",{categoryList:h.list,category:h.list[0].id}).then(()=>h):f.dispatch("chaneData",{categoryList:[],category:""}).then(()=>({}))},U=async()=>{let h=await S({url:"/fire/i18n/language",method:"get"}).catch(w=>{throw w});f.dispatch("chaneData",{language:h.list||[]}).then(()=>h)},C=async()=>{let h=V({message:"Loading Data\u2026",grouping:!0,type:"info",duration:0});if(y.category&&y.category.length!=0){let w=await S({url:`/fire/i18n/data/${y.category}`,method:"get",params:{sk:y.sk,pageno:y.pageno,pagesize:y.pagesize}}).catch(b=>{throw b}),D=w.data.map(b=>b);f.dispatch("chaneData",{list:D||[],num:w.page.total,pageno:w.page.pageno,searchLoading:0}).then(()=>(h.close(),D||[]))}else return[]},n=P(!1),L=async()=>{n.value=!0;let h=await S({url:"/fire/i18n/init",method:"post"}).catch(w=>{throw w});f.dispatch("chaneData",{categoryList:[h.data],category:h.data.id}).then(()=>{n.value=!1,V({message:"Success",grouping:!0,type:"success"}),setTimeout(function(){window.location.reload()},1e3)})};return ne(()=>{}),le(async()=>{await s(),await U(),await C(),f.dispatch("chaneData",{loading:!1})}),(h,w)=>{const D=ae,b=X,o=te;return t(y).loading?oe((d(),k("div",rt,null,512)),[[o,t(y).loading]]):(d(),k("div",st,[t(y).categoryList.length!=0?(d(),k("div",it,[i(ke,{refresh:C}),i(ot,{getI18nList:C}),i(et,{getI18nList:C})])):(d(),k("div",ct,[i(D,{description:"Empty Data"}),i(b,{type:"primary",onClick:L,loading:n.value},{default:m(()=>[dt]),_:1},8,["loading"])]))]))}}});export{zt as default};

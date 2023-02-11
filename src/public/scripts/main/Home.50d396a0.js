import{u as P}from"../vuex/vuex.da982c6b.js";import{i as Y}from"../header/header.aca51859.js";import{r as E}from"../request/request.ef74db12.js";import{E as N}from"../element-plus/element-plus.864c745d.js";import{I as M,a0 as H,o as p,P as S,Q as v,a as d,X as c,c as m,a7 as U,F as I,u as a,U as z,V as O,a4 as f,W as q,ay as Z,az as ee,d as B,R as K,ak as Q,K as T,$ as A,_ as te,i as ae}from"../@vue/@vue.1f806425.js";import{_ as le}from"../index-c1f38f4a.js";import"../axios/axios.6099e67a.js";import"../form-data/form-data.ccf97ba3.js";import"../lodash-es/lodash-es.b450e6da.js";import"../@vueuse/@vueuse.abd1af5c.js";import"../@element-plus/@element-plus.6ecdeb01.js";import"../@popperjs/@popperjs.17badf2b.js";import"../@ctrl/@ctrl.10aa4426.js";import"../dayjs/dayjs.18cc51e8.js";import"../async-validator/async-validator.100fbf61.js";import"../memoize-one/memoize-one.e03be456.js";import"../escape-html/escape-html.11c602e3.js";import"../normalize-wheel-es/normalize-wheel-es.2d9001a5.js";import"../@floating-ui/@floating-ui.0c5c8158.js";import"../vue-router/vue-router.925f0083.js";const ne=k=>{if(typeof k>"u"||k.length==0)return k;var _=document.createElement("div");return _.appendChild(document.createTextNode(k)),_.innerHTML},J=k=>(Z("data-v-493259da"),k=k(),ee(),k),oe={class:"new-dialog-c"},se={class:"new-dialog-item"},ie=J(()=>d("label",null,"\u7C7B\u578B",-1)),de={key:0,class:"new-dialog-item"},ce=J(()=>d("label",null,"oid",-1)),re={class:"new-dialog-item"},ue=J(()=>d("label",null,"key",-1)),pe={key:1,class:"new-dialog-item"},ge=J(()=>d("label",null,"name",-1)),ye={key:2,class:"new-dialog-item"},_e=J(()=>d("label",null,"desc",-1)),he=["label","value"],me={class:"dialog-footer"},fe=O("Cancel"),ve=O("Save"),ke=M({__name:"editDialog",props:{openDialog:{type:Boolean,default:!1},changeDialog:{type:Function,default:()=>{}},newDialogData:{type:Object},saveData:{type:Function,default:()=>{}}},setup(k){var C;const _=k,i=P().state,x=()=>{_.changeDialog(!1)};let w={type:1,key:"",desc:"",name:"",oid:"",haslanguage:((C=i.language)==null?void 0:C.map(s=>({key:s.key,value:""})))||[]},n=H(_.newDialogData||w);const L=s=>{if(n=Object.assign(n,{key:"",name:"",desc:"",oid:""}),s===3){let l=[];i.language.forEach(r=>{l.push({key:r.key,value:""})}),n.haslanguage=l}},g=s=>{},D=()=>{_.changeDialog(!1)},b=()=>{let s=JSON.parse(JSON.stringify(n));if((s.type===1||s.type===2)&&(s.key.trim().length==0||s.name.trim().length==0)){N({message:"key and name is required",type:"error"});return}if(s.type===3&&(s.oid.trim().length==0||s.key.trim().length==0)){N({message:"oid and key is required",type:"error"});return}let l="",r={};if(typeof s.id<"u"&&s.id.length!=0&&(r.id=s.id),s.type===1)l="category",r={...r,key:s.key,name:s.name,desc:s.desc};else if(s.type===2)l="language",r={...r,key:s.key,name:s.name};else{l="data";let o={};if(s.haslanguage.filter(t=>t.value.trim().length!=0).forEach(t=>{o[t.key]=t.value}),o.length==0)return;r={...r,oid:s.oid,key:ne(s.key),value:JSON.stringify(o)}}_.saveData&&_.saveData(l,r)};return(s,l)=>{const r=f("el-option"),o=f("el-select"),t=f("el-input"),u=f("el-button"),y=f("el-dialog");return p(),S(y,{"custom-class":"new-dialog",modelValue:_.openDialog,"onUpdate:modelValue":l[5]||(l[5]=e=>_.openDialog=e),title:a(n).id&&a(n).id.length!=0?"\u7F16\u8F91":"\u65B0\u5EFA",width:"30%","before-close":x},{footer:v(()=>[d("span",me,[c(u,{onClick:D},{default:v(()=>[fe]),_:1}),c(u,{type:"primary",onClick:b},{default:v(()=>[ve]),_:1})])]),default:v(()=>[d("div",oe,[d("div",se,[ie,d("section",null,[c(o,{disabled:!!(a(n).id&&a(n).id.length!=0),modelValue:a(n).type,"onUpdate:modelValue":l[0]||(l[0]=e=>a(n).type=e),class:"m-2",placeholder:"Select",onChange:L},{default:v(()=>[(p(),m(I,null,U([{label:"\u5206\u7C7B",value:1},{label:"\u8BED\u79CD",value:2},{label:"\u7FFB\u8BD1",value:3}],e=>c(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["disabled","modelValue"])])]),a(n).type==3?(p(),m("div",de,[ce,d("section",null,[c(o,{disabled:!!(a(n).id&&a(n).id.length!=0),modelValue:a(n).oid,"onUpdate:modelValue":l[1]||(l[1]=e=>a(n).oid=e),class:"m-2",placeholder:"Select",onChange:g},{default:v(()=>[(p(!0),m(I,null,U(a(i).categoryList.map(e=>({label:e.name,value:e.id})),e=>(p(),S(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["disabled","modelValue"])])])):z("",!0),d("div",re,[ue,d("section",null,[c(t,{disabled:!!(a(n).id&&a(n).id.length!=0),modelValue:a(n).key,"onUpdate:modelValue":l[2]||(l[2]=e=>a(n).key=e),placeholder:"Please input"},null,8,["disabled","modelValue"])])]),a(n).type!=3?(p(),m("div",pe,[ge,d("section",null,[c(t,{modelValue:a(n).name,"onUpdate:modelValue":l[3]||(l[3]=e=>a(n).name=e),placeholder:"Please input"},null,8,["modelValue"])])])):z("",!0),a(n).type==1?(p(),m("div",ye,[_e,d("section",null,[c(t,{modelValue:a(n).desc,"onUpdate:modelValue":l[4]||(l[4]=e=>a(n).desc=e),placeholder:"Please input"},null,8,["modelValue"])])])):z("",!0),a(n).type==3?(p(!0),m(I,{key:3},U(a(n).haslanguage,e=>(p(),m("div",{key:e.key,label:e.key,value:e.key,class:"new-dialog-item"},[d("label",null,q(e.key),1),d("section",null,[c(t,{modelValue:e.value,"onUpdate:modelValue":$=>e.value=$,placeholder:"Please input"},null,8,["modelValue","onUpdate:modelValue"])])],8,he))),128)):z("",!0)])]),_:1},8,["modelValue","title"])}}});const R=le(ke,[["__scopeId","data-v-493259da"]]),De={class:"i18n-c"},we={class:"i18n-main-h"},be={class:"i18n-main-h-r"},Ce={class:"i18n-main-hr-l"},$e={class:"i18n-main-h-search"},Ve={class:"i18n-main-hr-r"},Le={class:"i18n-h-add"},xe={class:"i18n-main"},Ee={class:"i18n-r"},Ne=O("\u7F16\u8F91"),Se=O("\u5220\u9664"),ze=M({__name:"content",props:{getI18nList:Function},setup(k){const _=k,h=P(),i=h.state,x=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,w=B("");let n=null;const L=o=>{w.value=o,clearTimeout(n),n=setTimeout(()=>{h.dispatch("chaneData",{sk:w.value,searchLoading:!0}).then(()=>{_.getI18nList()})},500)};let g=H({});const D=async o=>{let t=await E({url:`/fire/i18n/data/${o.id}`,method:"delete"});if(t.code==1){N({message:t.message,type:"success"});let u=[];i.list.forEach((y,e)=>{console.log(o,"zzzzz"),y.id!=o.id&&u.push(y)}),h.dispatch("chaneData",{list:u})}else N({message:t.message,type:"error"})},b=o=>{let t=[];i.language.forEach(u=>{typeof o[u.key]<"u"?t.push({key:u.key,value:o[u.key]}):t.push({key:u.key,value:""})}),g=Object.assign(g,{type:3,id:o.id,oid:o.oid,key:o.key,haslanguage:t}),s(!0)},C=B(!1),s=o=>{C.value=o},l=()=>{g=Object.assign(g,{type:1,id:"",oid:"",key:""}),C.value=!0},r=async(o,t)=>{let u=await E({url:`/fire/i18n/${o}`+(typeof t.id<"u"?`/${t.id}`:""),method:typeof t.id<"u"?"put":"post",data:JSON.parse(JSON.stringify(t))});if(u.code!=0){let y={};o==="category"?(y.category=i.categoryList,typeof t.id<"u"?y.category.forEach((e,$)=>{e.id===t.id&&(y.category[$]={...e,...u.data})}):y.category.push(u.data)):o==="language"?(y.language=i.language,typeof t.id<"u"?y.language.forEach((e,$)=>{e.id===t.id&&(y.language[$]={...e,...u.data})}):y.language.push(u.data)):i.category==t.oid&&(y.list=i.list,typeof t.id<"u"?y.list.forEach((e,$)=>{e.id===t.id&&(y.list[$]={...e,...u.data})}):y.list.unshift(u.data)),h.dispatch("chaneData",t).then(()=>{s(!1)})}else N({message:u.message,type:"error"})};return(o,t)=>{const u=f("el-input"),y=f("Plus"),e=f("el-icon"),$=f("el-button"),F=f("el-table-column"),W=f("el-table"),X=f("el-pagination"),G=Q("loading");return p(),m("div",De,[d("div",we,[d("div",be,[d("div",Ce,[d("div",$e,[c(u,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=V=>w.value=V),class:"w-50 m-2",placeholder:"Search",size:"large",onInput:L},null,8,["modelValue"])])]),d("div",Ve,[d("div",Le,[c($,{type:"primary",size:"large",circle:"",text:"",onClick:l},{default:v(()=>[c(e,null,{default:v(()=>[c(y)]),_:1})]),_:1})])])])]),d("div",xe,[d("div",Ee,[K((p(),S(W,{data:a(i).list,"element-loading-svg":x,class:"custom-loading-svg","element-loading-svg-view-box":"-10, -10, 50, 50"},{default:v(()=>[c(F,{fixed:"",prop:"key",label:"key",width:"300"}),(p(!0),m(I,null,U(a(i).language,V=>(p(),S(F,{key:V.id,"data-key":V.key,prop:V.key,label:V.key,width:"300"},{default:v(j=>[O(q(j.row[V.key]),1)]),_:2},1032,["data-key","prop","label"]))),128)),c(F,{fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:v(V=>[c($,{link:"",type:"primary",size:"small",onClick:j=>b(V.row)},{default:v(()=>[Ne]),_:2},1032,["onClick"]),c($,{link:"",type:"primary",size:"small",onClick:j=>D(V.row)},{default:v(()=>[Se]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[G,a(i).searchLoading]]),a(i).list.length!=0&&a(i).num>(a(i).pageno+1)*a(i).pagesize?(p(),S(X,{key:0,"page-size":a(i).pagesize,"pager-count":a(i).pageno+1,layout:"prev, pager, next",total:a(i).num},null,8,["page-size","pager-count","total"])):z("",!0)])]),C.value?(p(),S(R,{key:0,openDialog:C.value,changeDialog:s,newDialogData:a(g),saveData:r},null,8,["openDialog","newDialogData"])):z("",!0)])}}}),Fe=["data-key","onClick","title"],Ie={className:"i18n-type-i-name"},Be=["onClick"],Oe=["onClick"],Ue=M({__name:"sidebar",props:{getI18nList:Function},setup(k){const _=k,h=P(),i=h.state,x=B(i.categoryList),w=B(x.value.length==0?"empty-list":""),n=l=>{h.dispatch("chaneData",{category:l,searchLoading:!0}).then(()=>{_.getI18nList()})};let L=H({});const g=async(l,r)=>{let o=await E({url:`/fire/i18n/category/${l.id}`,method:"delete"});if(o.code==1){N({message:o.message,type:"success"});let t=i.categoryList;t.splice(r,1),h.dispatch("chaneData",{categoryList:t})}else N({message:o.message,type:"error"})},D=l=>{L=Object.assign(L,{type:1,key:l.key,id:l.id,name:l.name,desc:l.desx}),C(!0)},b=B(!1),C=l=>{b.value=l},s=async(l,r)=>{let o=await E({url:`/fire/i18n/${l}`+(typeof r.id<"u"?`/${r.id}`:""),method:typeof r.id<"u"?"put":"post",data:JSON.parse(JSON.stringify(r))});if(o.code!=0){let t={};l==="category"&&(t.category=i.categoryList,typeof r.id<"u"?t.category.forEach((u,y)=>{u.id===r.id&&(t.category[y]={...u,...o.data})}):t.category.push(o.data)),h.dispatch("chaneData",r).then(()=>{C(!1)})}else N({message:o.message,type:"error"})};return(l,r)=>{const o=f("Edit"),t=f("el-icon"),u=f("Delete"),y=f("el-empty");return p(),m(I,null,[x.value.length!=0?(p(),m("div",{key:0,class:T(["i18n-sidebar",w.value])},[(p(!0),m(I,null,U(a(i).categoryList,(e,$)=>(p(),m("div",{class:T(["i18n-type-i",e.id==a(i).category?"active":""]),key:e.id,"data-key":e.key,onClick:F=>n(e.id),title:e.name},[d("div",Ie,q(e.name),1),d("div",{className:"i18n-type-i-edit",onClick:A(F=>D(e),["stop","prevent"])},[c(t,null,{default:v(()=>[c(o)]),_:1})],8,Be),d("div",{className:"i18n-type-i-remove",onClick:A(F=>g(e,$),["stop","prevent"])},[c(t,null,{default:v(()=>[c(u)]),_:1})],8,Oe)],10,Fe))),128))],2)):(p(),m("div",{key:1,class:T(["i18n-sidebar",w.value])},[c(y,{description:"description"})],2)),b.value?(p(),S(R,{key:2,openDialog:b.value,changeDialog:C,newDialogData:a(L),saveData:s},null,8,["openDialog","newDialogData"])):z("",!0)],64)}}}),Je={key:0,class:"i18n"},Pe={key:0,class:"i18n-main"},Me={key:1,class:"i18n-all-empty"},je=O("\u521D\u59CB\u5316\u6570\u636E"),Te={key:1,class:"i18n-all-empty"},ct=M({__name:"Home",setup(k){let _=P(),h=_.state;const i=async()=>{let g=await E({url:"/fire/i18n/category",method:"get"}).catch(D=>{throw D});g&&g.list&&g.list.length!=0?_.dispatch("chaneData",{categoryList:g.list,category:g.list[0].id}).then(()=>g):_.dispatch("chaneData",{categoryList:[],category:""}).then(()=>({}))},x=async()=>{let g=await E({url:"/fire/i18n/language",method:"get"}).catch(D=>{throw D});_.dispatch("chaneData",{language:g.list||[]}).then(()=>g)},w=async()=>{if(h.category&&h.category.length!=0){let D=(await E({url:`/fire/i18n/data/${h.category}`,method:"get",params:{sk:h.sk,pageno:h.pageno,pagesize:h.pagesize}}).catch(b=>{throw b})).data.map(b=>b);_.dispatch("chaneData",{list:D||[],searchLoading:0}).then(()=>D||[])}else return[]},n=B(!1),L=async()=>{n.value=!0;let g=await E({url:"/fire/i18n/init",method:"post"}).catch(D=>{throw D});_.dispatch("chaneData",{categoryList:[g.data],category:g.data.id}).then(()=>{n.value=!1,w()})};return te(()=>{}),ae(async()=>{await i(),await x(),await w(),_.dispatch("chaneData",{loading:!1})}),(g,D)=>{const b=f("el-empty"),C=f("el-button"),s=Q("loading");return a(h).loading?K((p(),m("div",Te,null,512)),[[s,a(h).loading]]):(p(),m("div",Je,[a(h).categoryList.length!=0?(p(),m("div",Pe,[c(Y),c(Ue,{getI18nList:w}),c(ze,{getI18nList:w})])):(p(),m("div",Me,[c(b,{description:"\u6682\u65E0\u6570\u636E"}),c(C,{type:"primary",onClick:L,loading:n.value},{default:v(()=>[je]),_:1},8,["loading"])]))]))}}});export{ct as default};

import{b as g,c as v,E as d}from"../element-plus/element-plus.8e9467af.js";import{r as f}from"../request/request.3568c0ed.js";import{I as h,d as s,_ as b,c as w,a as e,X as c,Q as y,o as V,V as k,W as x}from"../@vue/@vue.1f806425.js";import"../lodash-es/lodash-es.b450e6da.js";import"../@vueuse/@vueuse.abd1af5c.js";import"../@element-plus/@element-plus.6ecdeb01.js";import"../@popperjs/@popperjs.17badf2b.js";import"../@ctrl/@ctrl.10aa4426.js";import"../dayjs/dayjs.18cc51e8.js";import"../async-validator/async-validator.100fbf61.js";import"../memoize-one/memoize-one.e03be456.js";import"../escape-html/escape-html.11c602e3.js";import"../normalize-wheel-es/normalize-wheel-es.2d9001a5.js";import"../@floating-ui/@floating-ui.0c5c8158.js";import"../axios/axios.6099e67a.js";import"../form-data/form-data.ccf97ba3.js";const E={class:"login"},B={class:"el-card is-always-shadow"},C={class:"el-card__body"},I={class:"login-c"},N=e("h1",null,"i18n",-1),S={class:"login-i login-username"},U={class:"login-i login-password"},L={class:"login-i login-btn"},R=h({__name:"Login",setup(j){const t=s(""),a=s(""),l=s(!1),r=s("submit"),n=s(!0),m=()=>{l.value=!0,n.value=!0,r.value="submit",f({url:"/fire/user/login",method:"post",data:{username:t.value,password:a.value}}).then(o=>{console.log(o,"12312312"),o.code=="0"?d({message:o.message,grouping:!0,type:"error"}):(d({message:"Success",grouping:!0,type:"success"}),localStorage.setItem("jwttoken",o.data.token),window.location.replace(window.location.origin+"/#/home"))}).catch(o=>{d({message:o.message,grouping:!0,type:"error"})}).finally(()=>{l.value=!1,n.value=!1,r.value="submit"})};return b(()=>{l.value==!1&&(n.value=!(t.value.length!=0&&a.value.length!=0))}),(o,i)=>{const p=g,_=v;return V(),w("div",E,[e("div",B,[e("div",C,[e("div",I,[N,e("section",null,[e("div",S,[c(p,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=u=>t.value=u),placeholder:"username"},null,8,["modelValue"])]),e("div",U,[c(p,{modelValue:a.value,"onUpdate:modelValue":i[1]||(i[1]=u=>a.value=u),placeholder:"password",type:"password"},null,8,["modelValue"])]),e("div",L,[c(_,{disabled:n.value,loading:l.value,type:"success",onClick:m},{default:y(()=>[k(x(r.value),1)]),_:1},8,["disabled","loading"])])])])])])])}}});export{R as default};

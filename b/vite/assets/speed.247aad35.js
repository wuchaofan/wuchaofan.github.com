import{g as c}from"./utils.8ea9a6c8.js";import{q as i,b as p,d as u,e as d,o as m,c as _,f as v,t as g,a as f}from"./vendor.2190ba22.js";const S={class:"speed"},y={setup(I){const{time:s=5e3}=i.parse(location.search),t=c(),n=t.length;let r=null;const o=p(t[0]);u(()=>{r=setInterval(()=>{o.value=t[Math.floor(Math.random()*n)]},Number(s)||5e3)}),d(()=>{clearInterval(r)});function l(a){const e=JSON.parse(localStorage.getItem("wordHot")||"{}");e[a]=Number(e[a]||"0")+1,localStorage.setItem("wordHot",JSON.stringify(e))}return(a,e)=>(m(),_("div",S,[v("span",{onClick:e[0]||(e[0]=N=>l(o.value))},g(o.value),1)]))}};f(y).mount("#app");

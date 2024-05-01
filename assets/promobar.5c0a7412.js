import{l as D}from"./index.a394a8ae.js";import{c as H}from"./_commonjsHelpers.de833af9.js";var N=function(s){var i=JSON.parse,r=JSON.stringify,a=window.localStorage,p=i(a.getItem(s))||{};return{get:h,set:x,remove:c,clear:b,exists:O};function y(){a.setItem(s,r(p))}function h(u){return p[u]||null}function x(u,w){p[u]=w,y()}function c(u){delete p[u],y()}function b(){a.removeItem(s)}function O(u){return h(u)!==null}};const I=N("promobar"),j=()=>new Date().getTime(),T=o=>Math.max(o.offsetHeight,o.scrollHeight,o.clientHeight),P=(o,...s)=>(s.forEach(i=>Object.keys(i).forEach(r=>o[r]=i[r])),o),M={content:()=>console.warn("promobar: content is undefined")},$=()=>{let o=document.createElement("div");return o.className="promobar-placeholder",o.style.height="0px",document.body.insertBefore(o,document.body.children[0]),o},z=()=>{let o=document.createElement("style");return document.body.insertBefore(o,document.body.children[0]),o},k=o=>I.set("root",{timestamp:new Date().getTime(),body:o}),C=(o,s)=>i=>{let r=I.get("root"),a=1e3*60*60*24;if(!r)return!0;let p=(i-r.timestamp)/a;return r.body!==s||p>=o},F=o=>o.forEach(s=>{s&&(Array.isArray(s)?s[1]()?s[0].setAttribute("data-promobar","true"):s[0].removeAttribute("data-promobar"):s.setAttribute("data-promobar","true"))}),L=(o,s=null)=>o.style.height=s?`${s}px`:"0px",G=(o,s={})=>{const i=D(),r=P({content:document.getElementById("promobarContent").innerHTML,resize:!0,placeholder:!0,offsets:[],close:Array.prototype.slice.call(document.querySelectorAll(".js-promobarClose")),lifespan:1},s);if(!r.content)return M.content();const a=C(r.lifespan,r.content),p=()=>typeof r.placeholder=="function"?r.placeholder():r.placeholder,y=r.offsets.length>0,h=$(),x=y?z():null,c={active:!1,enabled:a(j()),height:T(o)},b=(t=null)=>{p()?L(h,t):L(h),y&&(F(r.offsets),x.innerHTML=`[data-promobar] { ${t?`transform: translateY(${t}px) }`:"}"}`)},O=()=>{c.enabled&&(c.active=!0,b(c.height),o.classList.add("is-active"),document.body.classList.add("promobar-is-active"),i.emit("show",c))},u=(t=!1)=>{c.enabled&&(c.active=!1,t&&(k(r.content),c.enabled=a(j())),b(),o.classList.remove("is-active"),document.body.classList.remove("promobar-is-active"),i.emit("hide",c))},w=(t=!1)=>{if(!c.enabled)return;let e=T(o);(t||e!==c.height)&&(c.height=e,c.active?b(e):O(),i.emit("update",c))},g=()=>{I.remove("root"),c.enabled=a(j())};return r.resize&&window.addEventListener("resize",t=>w()),r.close.forEach(t=>t.addEventListener("click",e=>{e.preventDefault(),u(),k(r.content),c.enabled=a(j()),i.emit("disabled",c)})),{...i,hide:u,show:O,update:w,reset:g,getState:()=>c}};var E={exports:{}};E.exports;(function(o,s){(function(i,r){var a={};i.PubSub?(a=i.PubSub,console.warn("PubSub already loaded, using existing version")):(i.PubSub=a,r(a)),o!==void 0&&o.exports&&(s=o.exports=a),s.PubSub=a,o.exports=s=a})(typeof window=="object"&&window||H,function(i){var r={},a=-1,p="*";function y(t){var e;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!0;return!1}function h(t){return function(){throw t}}function x(t,e,n){try{t(e,n)}catch(l){setTimeout(h(l),0)}}function c(t,e,n){t(e,n)}function b(t,e,n,l){var f=r[e],d=l?c:x,m;if(Object.prototype.hasOwnProperty.call(r,e))for(m in f)Object.prototype.hasOwnProperty.call(f,m)&&d(f[m],t,n)}function O(t,e,n){return function(){var f=String(t),d=f.lastIndexOf(".");for(b(t,t,e,n);d!==-1;)f=f.substr(0,d),d=f.lastIndexOf("."),b(t,f,e,n);b(t,p,e,n)}}function u(t){var e=String(t),n=!!(Object.prototype.hasOwnProperty.call(r,e)&&y(r[e]));return n}function w(t){for(var e=String(t),n=u(e)||u(p),l=e.lastIndexOf(".");!n&&l!==-1;)e=e.substr(0,l),l=e.lastIndexOf("."),n=u(e);return n}function g(t,e,n,l){t=typeof t=="symbol"?t.toString():t;var f=O(t,e,l),d=w(t);return d?(n===!0?f():setTimeout(f,0),!0):!1}i.publish=function(t,e){return g(t,e,!1,i.immediateExceptions)},i.publishSync=function(t,e){return g(t,e,!0,i.immediateExceptions)},i.subscribe=function(t,e){if(typeof e!="function")return!1;t=typeof t=="symbol"?t.toString():t,Object.prototype.hasOwnProperty.call(r,t)||(r[t]={});var n="uid_"+String(++a);return r[t][n]=e,n},i.subscribeAll=function(t){return i.subscribe(p,t)},i.subscribeOnce=function(t,e){var n=i.subscribe(t,function(){i.unsubscribe(n),e.apply(this,arguments)});return i},i.clearAllSubscriptions=function(){r={}},i.clearSubscriptions=function(e){var n;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&n.indexOf(e)===0&&delete r[n]},i.countSubscriptions=function(e){var n,l,f=0;for(n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&n.indexOf(e)===0){for(l in r[n])f++;break}return f},i.getSubscriptions=function(e){var n,l=[];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&n.indexOf(e)===0&&l.push(n);return l},i.unsubscribe=function(t){var e=function(B){var A;for(A in r)if(Object.prototype.hasOwnProperty.call(r,A)&&A.indexOf(B)===0)return!0;return!1},n=typeof t=="string"&&(Object.prototype.hasOwnProperty.call(r,t)||e(t)),l=!n&&typeof t=="string",f=typeof t=="function",d=!1,m,v,S;if(n){i.clearSubscriptions(t);return}for(m in r)if(Object.prototype.hasOwnProperty.call(r,m)){if(v=r[m],l&&v[t]){delete v[t],d=t;break}if(f)for(S in v)Object.prototype.hasOwnProperty.call(v,S)&&v[S]===t&&(delete v[S],d=!0)}return d}})})(E,E.exports);E.exports;const U=o=>{const s=G(o);setTimeout(s.show,4e3),window.promobar=s};export{U as default};

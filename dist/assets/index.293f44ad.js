(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function aa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ca(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=we(s)?_p(s):ca(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(we(t))return t;if(ce(t))return t}}const Tp=/;(?![^(]*\))/g,bp=/:([^]+)/,Ip=/\/\*.*?\*\//gs;function _p(t){const e={};return t.replace(Ip,"").split(Tp).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function On(t){let e="";if(we(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=On(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=aa(Cp);function Au(t){return!!t||t===""}const Sp=t=>we(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===Nu||!H(t.toString))?JSON.stringify(t,Su,2):String(t),Su=(t,e)=>e&&e.__v_isRef?Su(t,e.value):Ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Du(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!B(e)&&!ku(e)?String(e):e,ie={},Mn=[],ot=()=>{},Dp=()=>!1,xp=/^on[^a-z]/,Jr=t=>xp.test(t),la=t=>t.startsWith("onUpdate:"),Fe=Object.assign,ua=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Np=Object.prototype.hasOwnProperty,Q=(t,e)=>Np.call(t,e),B=Array.isArray,Ln=t=>Zr(t)==="[object Map]",Du=t=>Zr(t)==="[object Set]",H=t=>typeof t=="function",we=t=>typeof t=="string",ha=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",xu=t=>ce(t)&&H(t.then)&&H(t.catch),Nu=Object.prototype.toString,Zr=t=>Nu.call(t),kp=t=>Zr(t).slice(8,-1),ku=t=>Zr(t)==="[object Object]",fa=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vr=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rp=/-(\w)/g,Bn=ei(t=>t.replace(Rp,(e,n)=>n?n.toUpperCase():"")),Op=/\B([A-Z])/g,Zn=ei(t=>t.replace(Op,"-$1").toLowerCase()),Ru=ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),qi=ei(t=>t?`on${Ru(t)}`:""),Is=(t,e)=>!Object.is(t,e),wr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uc;const Mp=()=>Uc||(Uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class Lp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Fp(t,e=dt){e&&e.active&&e.effects.push(t)}const da=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ou=t=>(t.w&Bt)>0,Mu=t=>(t.n&Bt)>0,Pp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},Vp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ou(r)&&!Mu(r)?r.delete(t):e[n++]=r,r.w&=~Bt,r.n&=~Bt}e.length=n}},yo=new WeakMap;let hs=0,Bt=1;const vo=30;let rt;const fn=Symbol(""),wo=Symbol("");class pa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fp(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=Lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Lt=!0,Bt=1<<++hs,hs<=vo?Pp(this):$c(this),this.fn()}finally{hs<=vo&&Vp(this),Bt=1<<--hs,rt=this.parent,Lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&($c(this),this.onStop&&this.onStop(),this.active=!1)}}function $c(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Lt=!0;const Lu=[];function es(){Lu.push(Lt),Lt=!1}function ts(){const t=Lu.pop();Lt=t===void 0?!0:t}function Ge(t,e,n){if(Lt&&rt){let s=yo.get(t);s||yo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=da()),Fu(r)}}function Fu(t,e){let n=!1;hs<=vo?Mu(t)||(t.n|=Bt,n=!Ou(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function Ct(t,e,n,s,r,i){const o=yo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Dr(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?fa(n)&&a.push(o.get("length")):(a.push(o.get(fn)),Ln(t)&&a.push(o.get(wo)));break;case"delete":B(t)||(a.push(o.get(fn)),Ln(t)&&a.push(o.get(wo)));break;case"set":Ln(t)&&a.push(o.get(fn));break}if(a.length===1)a[0]&&Eo(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Eo(da(c))}}function Eo(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Bc(s);for(const s of n)s.computed||Bc(s)}function Bc(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Up=aa("__proto__,__v_isRef,__isVue"),Pu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ha)),$p=ga(),Bp=ga(!1,!0),qp=ga(!0),qc=jp();function jp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)Ge(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){es();const s=Y(this)[e].apply(this,n);return ts(),s}}),t}function ga(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ig:qu:e?Bu:$u).get(s))return s;const o=B(s);if(!t&&o&&Q(qc,r))return Reflect.get(qc,r,i);const a=Reflect.get(s,r,i);return(ha(r)?Pu.has(r):Up(r))||(t||Ge(s,"get",r),e)?a:Oe(a)?o&&fa(r)?a:a.value:ce(a)?t?ju(a):va(a):a}}const Hp=Vu(),Kp=Vu(!0);function Vu(t=!1){return function(n,s,r,i){let o=n[s];if(qn(o)&&Oe(o)&&!Oe(r))return!1;if(!t&&(!xr(r)&&!qn(r)&&(o=Y(o),r=Y(r)),!B(n)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=B(n)&&fa(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?Is(r,o)&&Ct(n,"set",s,r):Ct(n,"add",s,r)),c}}function zp(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ct(t,"delete",e,void 0),s}function Gp(t,e){const n=Reflect.has(t,e);return(!ha(e)||!Pu.has(e))&&Ge(t,"has",e),n}function Wp(t){return Ge(t,"iterate",B(t)?"length":fn),Reflect.ownKeys(t)}const Uu={get:$p,set:Hp,deleteProperty:zp,has:Gp,ownKeys:Wp},Qp={get:qp,set(t,e){return!0},deleteProperty(t,e){return!0}},Yp=Fe({},Uu,{get:Bp,set:Kp}),ma=t=>t,ti=t=>Reflect.getPrototypeOf(t);function or(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&Ge(r,"get",e),Ge(r,"get",i));const{has:o}=ti(r),a=s?ma:n?Ea:_s;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ar(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&Ge(s,"has",t),Ge(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function cr(t,e=!1){return t=t.__v_raw,!e&&Ge(Y(t),"iterate",fn),Reflect.get(t,"size",t)}function jc(t){t=Y(t);const e=Y(this);return ti(e).has.call(e,t)||(e.add(t),Ct(e,"add",t,t)),this}function Hc(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=ti(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Is(e,o)&&Ct(n,"set",t,e):Ct(n,"add",t,e),this}function Kc(t){const e=Y(this),{has:n,get:s}=ti(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ct(e,"delete",t,void 0),i}function zc(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&Ct(t,"clear",void 0,void 0),n}function lr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?ma:t?Ea:_s;return!t&&Ge(a,"iterate",fn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ur(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=Ln(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ma:e?Ea:_s;return!e&&Ge(i,"iterate",c?wo:fn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ot(t){return function(...e){return t==="delete"?!1:this}}function Xp(){const t={get(i){return or(this,i)},get size(){return cr(this)},has:ar,add:jc,set:Hc,delete:Kc,clear:zc,forEach:lr(!1,!1)},e={get(i){return or(this,i,!1,!0)},get size(){return cr(this)},has:ar,add:jc,set:Hc,delete:Kc,clear:zc,forEach:lr(!1,!0)},n={get(i){return or(this,i,!0)},get size(){return cr(this,!0)},has(i){return ar.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:lr(!0,!1)},s={get(i){return or(this,i,!0,!0)},get size(){return cr(this,!0)},has(i){return ar.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ur(i,!1,!1),n[i]=ur(i,!0,!1),e[i]=ur(i,!1,!0),s[i]=ur(i,!0,!0)}),[t,n,e,s]}const[Jp,Zp,eg,tg]=Xp();function ya(t,e){const n=e?t?tg:eg:t?Zp:Jp;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const ng={get:ya(!1,!1)},sg={get:ya(!1,!0)},rg={get:ya(!0,!1)},$u=new WeakMap,Bu=new WeakMap,qu=new WeakMap,ig=new WeakMap;function og(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ag(t){return t.__v_skip||!Object.isExtensible(t)?0:og(kp(t))}function va(t){return qn(t)?t:wa(t,!1,Uu,ng,$u)}function cg(t){return wa(t,!1,Yp,sg,Bu)}function ju(t){return wa(t,!0,Qp,rg,qu)}function wa(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ag(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Fn(t){return qn(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function xr(t){return!!(t&&t.__v_isShallow)}function Hu(t){return Fn(t)||qn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Ku(t){return Sr(t,"__v_skip",!0),t}const _s=t=>ce(t)?va(t):t,Ea=t=>ce(t)?ju(t):t;function zu(t){Lt&&rt&&(t=Y(t),Fu(t.dep||(t.dep=da())))}function Gu(t,e){t=Y(t),t.dep&&Eo(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Gc(t){return lg(t,!1)}function lg(t,e){return Oe(t)?t:new ug(t,e)}class ug{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:_s(e)}get value(){return zu(this),this._value}set value(e){const n=this.__v_isShallow||xr(e)||qn(e);e=n?e:Y(e),Is(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_s(e),Gu(this))}}function hg(t){return Oe(t)?t.value:t}const fg={get:(t,e,n)=>hg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Wu(t){return Fn(t)?t:new Proxy(t,fg)}var Qu;class dg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qu]=!1,this._dirty=!0,this.effect=new pa(e,()=>{this._dirty||(this._dirty=!0,Gu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return zu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qu="__v_isReadonly";function pg(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=ot):(s=t.get,r=t.set),new dg(s,r,i||!r,n)}function Ft(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ni(i,e,n)}return r}function Je(t,e,n,s){if(H(t)){const i=Ft(t,e,n,s);return i&&xu(i)&&i.catch(o=>{ni(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Je(t[i],e,n,s));return r}function ni(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ft(c,null,10,[t,o,a]);return}}gg(t,n,r,s)}function gg(t,e,n,s=!0){console.error(t)}let Cs=!1,To=!1;const ke=[];let gt=0;const Pn=[];let bt=null,sn=0;const Yu=Promise.resolve();let Ta=null;function mg(t){const e=Ta||Yu;return t?e.then(this?t.bind(this):t):e}function yg(t){let e=gt+1,n=ke.length;for(;e<n;){const s=e+n>>>1;As(ke[s])<t?e=s+1:n=s}return e}function ba(t){(!ke.length||!ke.includes(t,Cs&&t.allowRecurse?gt+1:gt))&&(t.id==null?ke.push(t):ke.splice(yg(t.id),0,t),Xu())}function Xu(){!Cs&&!To&&(To=!0,Ta=Yu.then(Zu))}function vg(t){const e=ke.indexOf(t);e>gt&&ke.splice(e,1)}function wg(t){B(t)?Pn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?sn+1:sn))&&Pn.push(t),Xu()}function Wc(t,e=Cs?gt+1:0){for(;e<ke.length;e++){const n=ke[e];n&&n.pre&&(ke.splice(e,1),e--,n())}}function Ju(t){if(Pn.length){const e=[...new Set(Pn)];if(Pn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,s)=>As(n)-As(s)),sn=0;sn<bt.length;sn++)bt[sn]();bt=null,sn=0}}const As=t=>t.id==null?1/0:t.id,Eg=(t,e)=>{const n=As(t)-As(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zu(t){To=!1,Cs=!0,ke.sort(Eg);const e=ot;try{for(gt=0;gt<ke.length;gt++){const n=ke[gt];n&&n.active!==!1&&Ft(n,null,14)}}finally{gt=0,ke.length=0,Ju(),Cs=!1,Ta=null,(ke.length||Pn.length)&&Zu()}}function Tg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ie;p&&(r=n.map(g=>we(g)?g.trim():g)),f&&(r=n.map(Dr))}let a,c=s[a=qi(e)]||s[a=qi(Bn(e))];!c&&i&&(c=s[a=qi(Zn(e))]),c&&Je(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(l,t,6,r)}}function eh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=eh(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Fe(o,i),ce(t)&&s.set(t,o),o)}function si(t,e){return!t||!Jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Zn(e))||Q(t,e))}let Xe=null,th=null;function Nr(t){const e=Xe;return Xe=t,th=t&&t.type.__scopeId||null,e}function bg(t,e=Xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sl(-1);const i=Nr(e);let o;try{o=t(...r)}finally{Nr(i),s._d&&sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ji(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:C,inheritAttrs:b}=t;let L,j;const Z=Nr(t);try{if(n.shapeFlag&4){const ee=r||s;L=pt(u.call(ee,ee,f,i,g,p,C)),j=c}else{const ee=e;L=pt(ee.length>1?ee(i,{attrs:c,slots:a,emit:l}):ee(i,null)),j=e.props?c:Ig(c)}}catch(ee){ys.length=0,ni(ee,t,1),L=dn(_t)}let V=L;if(j&&b!==!1){const ee=Object.keys(j),{shapeFlag:fe}=V;ee.length&&fe&7&&(o&&ee.some(la)&&(j=_g(j,o)),V=qt(V,j))}return n.dirs&&(V=qt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),L=V,Nr(Z),L}const Ig=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jr(n))&&((e||(e={}))[n]=t[n]);return e},_g=(t,e)=>{const n={};for(const s in t)(!la(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Cg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Qc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!si(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Qc(s,o,l):!0:!!o;return!1}function Qc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!si(n,i))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sg=t=>t.__isSuspense;function Dg(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):wg(t)}function xg(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function Er(t,e,n=!1){const s=Ae||Xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const hr={};function Hi(t,e,n){return nh(t,e,n)}function nh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ie){const a=Ae;let c,l=!1,u=!1;if(Oe(t)?(c=()=>t.value,l=xr(t)):Fn(t)?(c=()=>t,s=!0):B(t)?(u=!0,l=t.some(V=>Fn(V)||xr(V)),c=()=>t.map(V=>{if(Oe(V))return V.value;if(Fn(V))return an(V);if(H(V))return Ft(V,a,2)})):H(t)?e?c=()=>Ft(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(t,a,3,[p])}:c=ot,e&&s){const V=c;c=()=>an(V())}let f,p=V=>{f=j.onStop=()=>{Ft(V,a,4)}},g;if(Ds)if(p=ot,e?n&&Je(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const V=Dm();g=V.__watcherHandles||(V.__watcherHandles=[])}else return ot;let C=u?new Array(t.length).fill(hr):hr;const b=()=>{if(!!j.active)if(e){const V=j.run();(s||l||(u?V.some((ee,fe)=>Is(ee,C[fe])):Is(V,C)))&&(f&&f(),Je(e,a,3,[V,C===hr?void 0:u&&C[0]===hr?[]:C,p]),C=V)}else j.run()};b.allowRecurse=!!e;let L;r==="sync"?L=b:r==="post"?L=()=>Be(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),L=()=>ba(b));const j=new pa(c,L);e?n?b():C=j.run():r==="post"?Be(j.run.bind(j),a&&a.suspense):j.run();const Z=()=>{j.stop(),a&&a.scope&&ua(a.scope.effects,j)};return g&&g.push(Z),Z}function Ng(t,e,n){const s=this.proxy,r=we(t)?t.includes(".")?sh(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=Ae;jn(this);const a=nh(r,i.bind(s),n);return o?jn(o):pn(),a}function sh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function an(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))an(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)an(t[n],e);else if(Du(t)||Ln(t))t.forEach(n=>{an(n,e)});else if(ku(t))for(const n in t)an(t[n],e);return t}function kg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ia(()=>{t.isMounted=!0}),ah(()=>{t.isUnmounting=!0}),t}const Qe=[Function,Array],Rg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(t,{slots:e}){const n=Em(),s=kg();let r;return()=>{const i=e.default&&ih(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==_t){o=b;break}}const a=Y(t),{mode:c}=a;if(s.isLeaving)return Ki(o);const l=Yc(o);if(!l)return Ki(o);const u=bo(l,a,s,n);Io(l,u);const f=n.subTree,p=f&&Yc(f);let g=!1;const{getTransitionKey:C}=l.type;if(C){const b=C();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(p&&p.type!==_t&&(!rn(l,p)||g)){const b=bo(p,a,s,n);if(Io(p,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ki(o);c==="in-out"&&l.type!==_t&&(b.delayLeave=(L,j,Z)=>{const V=rh(s,p);V[String(p.key)]=p,L._leaveCb=()=>{j(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=Z})}return o}}},Og=Rg;function rh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function bo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:b,onAppear:L,onAfterAppear:j,onAppearCancelled:Z}=e,V=String(t.key),ee=rh(n,t),fe=(K,Te)=>{K&&Je(K,s,9,Te)},Rt=(K,Te)=>{const le=Te[1];fe(K,Te),B(K)?K.every(He=>He.length<=1)&&le():K.length<=1&&le()},nt={mode:i,persisted:o,beforeEnter(K){let Te=a;if(!n.isMounted)if(r)Te=b||a;else return;K._leaveCb&&K._leaveCb(!0);const le=ee[V];le&&rn(t,le)&&le.el._leaveCb&&le.el._leaveCb(),fe(Te,[K])},enter(K){let Te=c,le=l,He=u;if(!n.isMounted)if(r)Te=L||c,le=j||l,He=Z||u;else return;let lt=!1;const Et=K._enterCb=cs=>{lt||(lt=!0,cs?fe(He,[K]):fe(le,[K]),nt.delayedLeave&&nt.delayedLeave(),K._enterCb=void 0)};Te?Rt(Te,[K,Et]):Et()},leave(K,Te){const le=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return Te();fe(f,[K]);let He=!1;const lt=K._leaveCb=Et=>{He||(He=!0,Te(),Et?fe(C,[K]):fe(g,[K]),K._leaveCb=void 0,ee[le]===t&&delete ee[le])};ee[le]=t,p?Rt(p,[K,lt]):lt()},clone(K){return bo(K,e,n,s)}};return nt}function Ki(t){if(ri(t))return t=qt(t),t.children=null,t}function Yc(t){return ri(t)?t.children?t.children[0]:void 0:t}function Io(t,e){t.shapeFlag&6&&t.component?Io(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ih(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&r++,s=s.concat(ih(o.children,e,a))):(e||o.type!==_t)&&s.push(a!=null?qt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const Tr=t=>!!t.type.__asyncLoader,ri=t=>t.type.__isKeepAlive;function Mg(t,e){oh(t,"a",e)}function Lg(t,e){oh(t,"da",e)}function oh(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ii(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ri(r.parent.vnode)&&Fg(s,e,n,r),r=r.parent}}function Fg(t,e,n,s){const r=ii(e,t,s,!0);ch(()=>{ua(s[e],r)},n)}function ii(t,e,n=Ae,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;es(),jn(n);const a=Je(e,n,t,o);return pn(),ts(),a});return s?r.unshift(i):r.push(i),i}}const kt=t=>(e,n=Ae)=>(!Ds||t==="sp")&&ii(t,(...s)=>e(...s),n),Pg=kt("bm"),Ia=kt("m"),Vg=kt("bu"),Ug=kt("u"),ah=kt("bum"),ch=kt("um"),$g=kt("sp"),Bg=kt("rtg"),qg=kt("rtc");function jg(t,e=Ae){ii("ec",t,e)}function Hg(t,e){const n=Xe;if(n===null)return t;const s=ci(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&an(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Zt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(es(),Je(c,n,8,[t.el,a,t,e]),ts())}}const Kg=Symbol();function zg(t,e,n,s){let r;const i=n&&n[s];if(B(t)||we(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const _o=t=>t?vh(t)?ci(t)||t.proxy:_o(t.parent):null,ms=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_o(t.parent),$root:t=>_o(t.root),$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>t.f||(t.f=()=>ba(t.update)),$nextTick:t=>t.n||(t.n=mg.bind(t.proxy)),$watch:t=>Ng.bind(t)}),zi=(t,e)=>t!==ie&&!t.__isScriptSetup&&Q(t,e),Gg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(zi(s,e))return o[e]=1,s[e];if(r!==ie&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==ie&&Q(n,e))return o[e]=4,n[e];Co&&(o[e]=0)}}const u=ms[e];let f,p;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return zi(r,e)?(r[e]=n,!0):s!==ie&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&Q(t,o)||zi(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(ms,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Co=!0;function Wg(t){const e=_a(t),n=t.proxy,s=t.ctx;Co=!1,e.beforeCreate&&Xc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:C,activated:b,deactivated:L,beforeDestroy:j,beforeUnmount:Z,destroyed:V,unmounted:ee,render:fe,renderTracked:Rt,renderTriggered:nt,errorCaptured:K,serverPrefetch:Te,expose:le,inheritAttrs:He,components:lt,directives:Et,filters:cs}=e;if(l&&Qg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ne=o[ue];H(ne)&&(s[ue]=ne.bind(n))}if(r){const ue=r.call(n,n);ce(ue)&&(t.data=va(ue))}if(Co=!0,i)for(const ue in i){const ne=i[ue],Xt=H(ne)?ne.bind(n,n):H(ne.get)?ne.get.bind(n,n):ot,rr=!H(ne)&&H(ne.set)?ne.set.bind(n):ot,Jt=Am({get:Xt,set:rr});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:ut=>Jt.value=ut})}if(a)for(const ue in a)lh(a[ue],s,n,ue);if(c){const ue=H(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ne=>{xg(ne,ue[ne])})}u&&Xc(u,t,"c");function Ve(ue,ne){B(ne)?ne.forEach(Xt=>ue(Xt.bind(n))):ne&&ue(ne.bind(n))}if(Ve(Pg,f),Ve(Ia,p),Ve(Vg,g),Ve(Ug,C),Ve(Mg,b),Ve(Lg,L),Ve(jg,K),Ve(qg,Rt),Ve(Bg,nt),Ve(ah,Z),Ve(ch,ee),Ve($g,Te),B(le))if(le.length){const ue=t.exposed||(t.exposed={});le.forEach(ne=>{Object.defineProperty(ue,ne,{get:()=>n[ne],set:Xt=>n[ne]=Xt})})}else t.exposed||(t.exposed={});fe&&t.render===ot&&(t.render=fe),He!=null&&(t.inheritAttrs=He),lt&&(t.components=lt),Et&&(t.directives=Et)}function Qg(t,e,n=ot,s=!1){B(t)&&(t=Ao(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=Er(i.from||r,i.default,!0):o=Er(i.from||r):o=Er(i),Oe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xc(t,e,n){Je(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lh(t,e,n,s){const r=s.includes(".")?sh(n,s):()=>n[s];if(we(t)){const i=e[t];H(i)&&Hi(r,i)}else if(H(t))Hi(r,t.bind(n));else if(ce(t))if(B(t))t.forEach(i=>lh(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Hi(r,i,t)}}function _a(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>kr(c,l,o,!0)),kr(c,e,o)),ce(e)&&i.set(e,c),c}function kr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&kr(t,i,n,!0),r&&r.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Yg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yg={data:Jc,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:tn,directives:tn,watch:Jg,provide:Jc,inject:Xg};function Jc(t,e){return e?t?function(){return Fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Xg(t,e){return tn(Ao(t),Ao(e))}function Ao(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function tn(t,e){return t?Fe(Fe(Object.create(null),t),e):e}function Jg(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function Zg(t,e,n,s=!1){const r={},i={};Sr(i,ai,1),t.propsDefaults=Object.create(null),uh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function em(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(si(t.emitsOptions,p))continue;const g=e[p];if(c)if(Q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const C=Bn(p);r[C]=So(c,a,C,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{uh(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=Zn(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=So(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Q(e,f)&&!0)&&(delete i[f],l=!0)}l&&Ct(t,"set","$attrs")}function uh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vr(c))continue;const l=e[c];let u;r&&Q(r,u=Bn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:si(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Y(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=So(r,c,f,l[f],t,!Q(l,f))}}return o}function So(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(jn(r),s=l[n]=c.call(null,e),pn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zn(n))&&(s=!0))}return s}function hh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[p,g]=hh(f,e,!0);Fe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&s.set(t,Mn),Mn;if(B(i))for(let u=0;u<i.length;u++){const f=Bn(i[u]);Zc(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=Bn(u);if(Zc(f)){const p=i[u],g=o[f]=B(p)||H(p)?{type:p}:Object.assign({},p);if(g){const C=nl(Boolean,g.type),b=nl(String,g.type);g[0]=C>-1,g[1]=b<0||C<b,(C>-1||Q(g,"default"))&&a.push(f)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function Zc(t){return t[0]!=="$"}function el(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tl(t,e){return el(t)===el(e)}function nl(t,e){return B(e)?e.findIndex(n=>tl(n,t)):H(e)&&tl(e,t)?0:-1}const fh=t=>t[0]==="_"||t==="$stable",Ca=t=>B(t)?t.map(pt):[pt(t)],tm=(t,e,n)=>{if(e._n)return e;const s=bg((...r)=>Ca(e(...r)),n);return s._c=!1,s},dh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(fh(r))continue;const i=t[r];if(H(i))e[r]=tm(r,i,s);else if(i!=null){const o=Ca(i);e[r]=()=>o}}},ph=(t,e)=>{const n=Ca(e);t.slots.default=()=>n},nm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Sr(e,"_",n)):dh(e,t.slots={})}else t.slots={},e&&ph(t,e);Sr(t.slots,ai,1)},sm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,dh(e,r)),o=e}else e&&(ph(t,e),o={default:1});if(i)for(const a in r)!fh(a)&&!(a in o)&&delete r[a]};function gh(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rm=0;function im(t,e){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=gh(),o=new Set;let a=!1;const c=i.app={_uid:rm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=dn(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ci(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Do(t,e,n,s,r=!1){if(B(t)){t.forEach((p,g)=>Do(p,e&&(B(e)?e[g]:e),n,s,r));return}if(Tr(s)&&!r)return;const i=s.shapeFlag&4?ci(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(we(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):Oe(l)&&(l.value=null)),H(c))Ft(c,a,12,[o,u]);else{const p=we(c),g=Oe(c);if(p||g){const C=()=>{if(t.f){const b=p?Q(f,c)?f[c]:u[c]:c.value;r?B(b)&&ua(b,i):B(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Q(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Be(C,n)):C()}}}const Be=Dg;function om(t){return am(t)}function am(t,e){const n=Mp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ot,insertStaticContent:C}=t,b=(h,d,m,w=null,v=null,_=null,S=!1,I=null,A=!!d.dynamicChildren)=>{if(h===d)return;h&&!rn(h,d)&&(w=ir(h),ut(h,v,_,!0),h=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:E,ref:O,shapeFlag:x}=d;switch(E){case oi:L(h,d,m,w);break;case _t:j(h,d,m,w);break;case Gi:h==null&&Z(d,m,w,S);break;case Ye:lt(h,d,m,w,v,_,S,I,A);break;default:x&1?fe(h,d,m,w,v,_,S,I,A):x&6?Et(h,d,m,w,v,_,S,I,A):(x&64||x&128)&&E.process(h,d,m,w,v,_,S,I,A,Sn)}O!=null&&v&&Do(O,h&&h.ref,_,d||h,!d)},L=(h,d,m,w)=>{if(h==null)s(d.el=a(d.children),m,w);else{const v=d.el=h.el;d.children!==h.children&&l(v,d.children)}},j=(h,d,m,w)=>{h==null?s(d.el=c(d.children||""),m,w):d.el=h.el},Z=(h,d,m,w)=>{[h.el,h.anchor]=C(h.children,d,m,w,h.el,h.anchor)},V=({el:h,anchor:d},m,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,m,w),h=v;s(d,m,w)},ee=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},fe=(h,d,m,w,v,_,S,I,A)=>{S=S||d.type==="svg",h==null?Rt(d,m,w,v,_,S,I,A):Te(h,d,v,_,S,I,A)},Rt=(h,d,m,w,v,_,S,I)=>{let A,E;const{type:O,props:x,shapeFlag:M,transition:U,dirs:z}=h;if(A=h.el=o(h.type,_,x&&x.is,x),M&8?u(A,h.children):M&16&&K(h.children,A,null,w,v,_&&O!=="foreignObject",S,I),z&&Zt(h,null,w,"created"),x){for(const te in x)te!=="value"&&!vr(te)&&i(A,te,null,x[te],_,h.children,w,v,Tt);"value"in x&&i(A,"value",null,x.value),(E=x.onVnodeBeforeMount)&&ft(E,w,h)}nt(A,h,h.scopeId,S,w),z&&Zt(h,null,w,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;se&&U.beforeEnter(A),s(A,d,m),((E=x&&x.onVnodeMounted)||se||z)&&Be(()=>{E&&ft(E,w,h),se&&U.enter(A),z&&Zt(h,null,w,"mounted")},v)},nt=(h,d,m,w,v)=>{if(m&&g(h,m),w)for(let _=0;_<w.length;_++)g(h,w[_]);if(v){let _=v.subTree;if(d===_){const S=v.vnode;nt(h,S,S.scopeId,S.slotScopeIds,v.parent)}}},K=(h,d,m,w,v,_,S,I,A=0)=>{for(let E=A;E<h.length;E++){const O=h[E]=I?Mt(h[E]):pt(h[E]);b(null,O,d,m,w,v,_,S,I)}},Te=(h,d,m,w,v,_,S)=>{const I=d.el=h.el;let{patchFlag:A,dynamicChildren:E,dirs:O}=d;A|=h.patchFlag&16;const x=h.props||ie,M=d.props||ie;let U;m&&en(m,!1),(U=M.onVnodeBeforeUpdate)&&ft(U,m,d,h),O&&Zt(d,h,m,"beforeUpdate"),m&&en(m,!0);const z=v&&d.type!=="foreignObject";if(E?le(h.dynamicChildren,E,I,m,w,z,_):S||ne(h,d,I,null,m,w,z,_,!1),A>0){if(A&16)He(I,d,x,M,m,w,v);else if(A&2&&x.class!==M.class&&i(I,"class",null,M.class,v),A&4&&i(I,"style",x.style,M.style,v),A&8){const se=d.dynamicProps;for(let te=0;te<se.length;te++){const de=se[te],st=x[de],Dn=M[de];(Dn!==st||de==="value")&&i(I,de,st,Dn,v,h.children,m,w,Tt)}}A&1&&h.children!==d.children&&u(I,d.children)}else!S&&E==null&&He(I,d,x,M,m,w,v);((U=M.onVnodeUpdated)||O)&&Be(()=>{U&&ft(U,m,d,h),O&&Zt(d,h,m,"updated")},w)},le=(h,d,m,w,v,_,S)=>{for(let I=0;I<d.length;I++){const A=h[I],E=d[I],O=A.el&&(A.type===Ye||!rn(A,E)||A.shapeFlag&70)?f(A.el):m;b(A,E,O,null,w,v,_,S,!0)}},He=(h,d,m,w,v,_,S)=>{if(m!==w){if(m!==ie)for(const I in m)!vr(I)&&!(I in w)&&i(h,I,m[I],null,S,d.children,v,_,Tt);for(const I in w){if(vr(I))continue;const A=w[I],E=m[I];A!==E&&I!=="value"&&i(h,I,E,A,S,d.children,v,_,Tt)}"value"in w&&i(h,"value",m.value,w.value)}},lt=(h,d,m,w,v,_,S,I,A)=>{const E=d.el=h?h.el:a(""),O=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:M,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),h==null?(s(E,m,w),s(O,m,w),K(d.children,m,O,v,_,S,I,A)):x>0&&x&64&&M&&h.dynamicChildren?(le(h.dynamicChildren,M,m,v,_,S,I),(d.key!=null||v&&d===v.subTree)&&mh(h,d,!0)):ne(h,d,m,O,v,_,S,I,A)},Et=(h,d,m,w,v,_,S,I,A)=>{d.slotScopeIds=I,h==null?d.shapeFlag&512?v.ctx.activate(d,m,w,S,A):cs(d,m,w,v,_,S,A):Oc(h,d,A)},cs=(h,d,m,w,v,_,S)=>{const I=h.component=wm(h,w,v);if(ri(h)&&(I.ctx.renderer=Sn),Tm(I),I.asyncDep){if(v&&v.registerDep(I,Ve),!h.el){const A=I.subTree=dn(_t);j(null,A,d,m)}return}Ve(I,h,d,m,v,_,S)},Oc=(h,d,m)=>{const w=d.component=h.component;if(Cg(h,d,m))if(w.asyncDep&&!w.asyncResolved){ue(w,d,m);return}else w.next=d,vg(w.update),w.update();else d.el=h.el,w.vnode=d},Ve=(h,d,m,w,v,_,S)=>{const I=()=>{if(h.isMounted){let{next:O,bu:x,u:M,parent:U,vnode:z}=h,se=O,te;en(h,!1),O?(O.el=z.el,ue(h,O,S)):O=z,x&&wr(x),(te=O.props&&O.props.onVnodeBeforeUpdate)&&ft(te,U,O,z),en(h,!0);const de=ji(h),st=h.subTree;h.subTree=de,b(st,de,f(st.el),ir(st),h,v,_),O.el=de.el,se===null&&Ag(h,de.el),M&&Be(M,v),(te=O.props&&O.props.onVnodeUpdated)&&Be(()=>ft(te,U,O,z),v)}else{let O;const{el:x,props:M}=d,{bm:U,m:z,parent:se}=h,te=Tr(d);if(en(h,!1),U&&wr(U),!te&&(O=M&&M.onVnodeBeforeMount)&&ft(O,se,d),en(h,!0),x&&Bi){const de=()=>{h.subTree=ji(h),Bi(x,h.subTree,h,v,null)};te?d.type.__asyncLoader().then(()=>!h.isUnmounted&&de()):de()}else{const de=h.subTree=ji(h);b(null,de,m,w,h,v,_),d.el=de.el}if(z&&Be(z,v),!te&&(O=M&&M.onVnodeMounted)){const de=d;Be(()=>ft(O,se,de),v)}(d.shapeFlag&256||se&&Tr(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&Be(h.a,v),h.isMounted=!0,d=m=w=null}},A=h.effect=new pa(I,()=>ba(E),h.scope),E=h.update=()=>A.run();E.id=h.uid,en(h,!0),E()},ue=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,em(h,d.props,w,m),sm(h,d.children,m),es(),Wc(),ts()},ne=(h,d,m,w,v,_,S,I,A=!1)=>{const E=h&&h.children,O=h?h.shapeFlag:0,x=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){rr(E,x,m,w,v,_,S,I,A);return}else if(M&256){Xt(E,x,m,w,v,_,S,I,A);return}}U&8?(O&16&&Tt(E,v,_),x!==E&&u(m,x)):O&16?U&16?rr(E,x,m,w,v,_,S,I,A):Tt(E,v,_,!0):(O&8&&u(m,""),U&16&&K(x,m,w,v,_,S,I,A))},Xt=(h,d,m,w,v,_,S,I,A)=>{h=h||Mn,d=d||Mn;const E=h.length,O=d.length,x=Math.min(E,O);let M;for(M=0;M<x;M++){const U=d[M]=A?Mt(d[M]):pt(d[M]);b(h[M],U,m,null,v,_,S,I,A)}E>O?Tt(h,v,_,!0,!1,x):K(d,m,w,v,_,S,I,A,x)},rr=(h,d,m,w,v,_,S,I,A)=>{let E=0;const O=d.length;let x=h.length-1,M=O-1;for(;E<=x&&E<=M;){const U=h[E],z=d[E]=A?Mt(d[E]):pt(d[E]);if(rn(U,z))b(U,z,m,null,v,_,S,I,A);else break;E++}for(;E<=x&&E<=M;){const U=h[x],z=d[M]=A?Mt(d[M]):pt(d[M]);if(rn(U,z))b(U,z,m,null,v,_,S,I,A);else break;x--,M--}if(E>x){if(E<=M){const U=M+1,z=U<O?d[U].el:w;for(;E<=M;)b(null,d[E]=A?Mt(d[E]):pt(d[E]),m,z,v,_,S,I,A),E++}}else if(E>M)for(;E<=x;)ut(h[E],v,_,!0),E++;else{const U=E,z=E,se=new Map;for(E=z;E<=M;E++){const Ke=d[E]=A?Mt(d[E]):pt(d[E]);Ke.key!=null&&se.set(Ke.key,E)}let te,de=0;const st=M-z+1;let Dn=!1,Fc=0;const ls=new Array(st);for(E=0;E<st;E++)ls[E]=0;for(E=U;E<=x;E++){const Ke=h[E];if(de>=st){ut(Ke,v,_,!0);continue}let ht;if(Ke.key!=null)ht=se.get(Ke.key);else for(te=z;te<=M;te++)if(ls[te-z]===0&&rn(Ke,d[te])){ht=te;break}ht===void 0?ut(Ke,v,_,!0):(ls[ht-z]=E+1,ht>=Fc?Fc=ht:Dn=!0,b(Ke,d[ht],m,null,v,_,S,I,A),de++)}const Pc=Dn?cm(ls):Mn;for(te=Pc.length-1,E=st-1;E>=0;E--){const Ke=z+E,ht=d[Ke],Vc=Ke+1<O?d[Ke+1].el:w;ls[E]===0?b(null,ht,m,Vc,v,_,S,I,A):Dn&&(te<0||E!==Pc[te]?Jt(ht,m,Vc,2):te--)}}},Jt=(h,d,m,w,v=null)=>{const{el:_,type:S,transition:I,children:A,shapeFlag:E}=h;if(E&6){Jt(h.component.subTree,d,m,w);return}if(E&128){h.suspense.move(d,m,w);return}if(E&64){S.move(h,d,m,Sn);return}if(S===Ye){s(_,d,m);for(let x=0;x<A.length;x++)Jt(A[x],d,m,w);s(h.anchor,d,m);return}if(S===Gi){V(h,d,m);return}if(w!==2&&E&1&&I)if(w===0)I.beforeEnter(_),s(_,d,m),Be(()=>I.enter(_),v);else{const{leave:x,delayLeave:M,afterLeave:U}=I,z=()=>s(_,d,m),se=()=>{x(_,()=>{z(),U&&U()})};M?M(_,z,se):se()}else s(_,d,m)},ut=(h,d,m,w=!1,v=!1)=>{const{type:_,props:S,ref:I,children:A,dynamicChildren:E,shapeFlag:O,patchFlag:x,dirs:M}=h;if(I!=null&&Do(I,null,m,h,!0),O&256){d.ctx.deactivate(h);return}const U=O&1&&M,z=!Tr(h);let se;if(z&&(se=S&&S.onVnodeBeforeUnmount)&&ft(se,d,h),O&6)Ep(h.component,m,w);else{if(O&128){h.suspense.unmount(m,w);return}U&&Zt(h,null,d,"beforeUnmount"),O&64?h.type.remove(h,d,m,v,Sn,w):E&&(_!==Ye||x>0&&x&64)?Tt(E,d,m,!1,!0):(_===Ye&&x&384||!v&&O&16)&&Tt(A,d,m),w&&Mc(h)}(z&&(se=S&&S.onVnodeUnmounted)||U)&&Be(()=>{se&&ft(se,d,h),U&&Zt(h,null,d,"unmounted")},m)},Mc=h=>{const{type:d,el:m,anchor:w,transition:v}=h;if(d===Ye){wp(m,w);return}if(d===Gi){ee(h);return}const _=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,A=()=>S(m,_);I?I(h.el,_,A):A()}else _()},wp=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},Ep=(h,d,m)=>{const{bum:w,scope:v,update:_,subTree:S,um:I}=h;w&&wr(w),v.stop(),_&&(_.active=!1,ut(S,h,d,m)),I&&Be(I,d),Be(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Tt=(h,d,m,w=!1,v=!1,_=0)=>{for(let S=_;S<h.length;S++)ut(h[S],d,m,w,v)},ir=h=>h.shapeFlag&6?ir(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Lc=(h,d,m)=>{h==null?d._vnode&&ut(d._vnode,null,null,!0):b(d._vnode||null,h,d,null,null,null,m),Wc(),Ju(),d._vnode=h},Sn={p:b,um:ut,m:Jt,r:Mc,mt:cs,mc:K,pc:ne,pbc:le,n:ir,o:t};let $i,Bi;return e&&([$i,Bi]=e(Sn)),{render:Lc,hydrate:$i,createApp:im(Lc,$i)}}function en({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mh(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Mt(r[i]),a.el=o.el),n||mh(o,a)),a.type===oi&&(a.el=o.el)}}function cm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lm=t=>t.__isTeleport,Ye=Symbol(void 0),oi=Symbol(void 0),_t=Symbol(void 0),Gi=Symbol(void 0),ys=[];let it=null;function Wi(t=!1){ys.push(it=t?null:[])}function um(){ys.pop(),it=ys[ys.length-1]||null}let Ss=1;function sl(t){Ss+=t}function hm(t){return t.dynamicChildren=Ss>0?it||Mn:null,um(),Ss>0&&it&&it.push(t),t}function Qi(t,e,n,s,r,i){return hm(_e(t,e,n,s,r,i,!0))}function fm(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const ai="__vInternal",yh=({key:t})=>t!=null?t:null,br=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Oe(t)||H(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function _e(t,e=null,n=null,s=0,r=null,i=t===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yh(e),ref:e&&br(e),scopeId:th,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return a?(Aa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),Ss>0&&!o&&it&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&it.push(c),c}const dn=dm;function dm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Kg)&&(t=_t),fm(t)){const a=qt(t,e,!0);return n&&Aa(a,n),Ss>0&&!i&&it&&(a.shapeFlag&6?it[it.indexOf(t)]=a:it.push(a)),a.patchFlag|=-2,a}if(Cm(t)&&(t=t.__vccOpts),e){e=pm(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=On(a)),ce(c)&&(Hu(c)&&!B(c)&&(c=Fe({},c)),e.style=ca(c))}const o=we(t)?1:Sg(t)?128:lm(t)?64:ce(t)?4:H(t)?2:0;return _e(t,e,n,s,r,o,i,!0)}function pm(t){return t?Hu(t)||ai in t?Fe({},t):t:null}function qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?mm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yh(a),ref:e&&e.ref?n&&r?B(r)?r.concat(br(e)):[r,br(e)]:br(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function gm(t=" ",e=0){return dn(oi,null,t,e)}function pt(t){return t==null||typeof t=="boolean"?dn(_t):B(t)?dn(Ye,null,t.slice()):typeof t=="object"?Mt(t):dn(oi,null,String(t))}function Mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function Aa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Aa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ai in e)?e._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function mm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=On([e.class,s.class]));else if(r==="style")e.style=ca([e.style,s.style]);else if(Jr(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ft(t,e,n,s=null){Je(t,e,7,[n,s])}const ym=gh();let vm=0;function wm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ym,i={uid:vm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(s,r),emitsOptions:eh(s,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tg.bind(null,i),t.ce&&t.ce(i),i}let Ae=null;const Em=()=>Ae||Xe,jn=t=>{Ae=t,t.scope.on()},pn=()=>{Ae&&Ae.scope.off(),Ae=null};function vh(t){return t.vnode.shapeFlag&4}let Ds=!1;function Tm(t,e=!1){Ds=e;const{props:n,children:s}=t.vnode,r=vh(t);Zg(t,n,r,e),nm(t,s);const i=r?bm(t,e):void 0;return Ds=!1,i}function bm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ku(new Proxy(t.ctx,Gg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?_m(t):null;jn(t),es();const i=Ft(s,t,0,[t.props,r]);if(ts(),pn(),xu(i)){if(i.then(pn,pn),e)return i.then(o=>{rl(t,o,e)}).catch(o=>{ni(o,t,0)});t.asyncDep=i}else rl(t,i,e)}else wh(t,e)}function rl(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Wu(e)),wh(t,n)}let il;function wh(t,e,n){const s=t.type;if(!t.render){if(!e&&il&&!s.render){const r=s.template||_a(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);s.render=il(r,l)}}t.render=s.render||ot}jn(t),es(),Wg(t),ts(),pn()}function Im(t){return new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}})}function _m(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Im(t))},slots:t.slots,emit:t.emit,expose:e}}function ci(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wu(Ku(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ms)return ms[n](t)},has(e,n){return n in e||n in ms}}))}function Cm(t){return H(t)&&"__vccOpts"in t}const Am=(t,e)=>pg(t,e,Ds),Sm=Symbol(""),Dm=()=>Er(Sm),xm="3.2.45",Nm="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,ol=on&&on.createElement("template"),km={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?on.createElementNS(Nm,t):on.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ol.innerHTML=s?`<svg>${t}</svg>`:t;const a=ol.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Om(t,e,n){const s=t.style,r=we(n);if(n&&!r){for(const i in n)xo(s,i,n[i]);if(e&&!we(e))for(const i in e)n[i]==null&&xo(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const al=/\s*!important$/;function xo(t,e,n){if(B(n))n.forEach(s=>xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mm(t,e);al.test(n)?t.setProperty(Zn(s),n.replace(al,""),"important"):t[s]=n}}const cl=["Webkit","Moz","ms"],Yi={};function Mm(t,e){const n=Yi[e];if(n)return n;let s=Bn(e);if(s!=="filter"&&s in t)return Yi[e]=s;s=Ru(s);for(let r=0;r<cl.length;r++){const i=cl[r]+s;if(i in t)return Yi[e]=i}return e}const ll="http://www.w3.org/1999/xlink";function Lm(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ll,e.slice(6,e.length)):t.setAttributeNS(ll,e,n);else{const i=Ap(e);n==null||i&&!Au(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Au(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xn(t,e,n,s){t.addEventListener(e,n,s)}function Pm(t,e,n,s){t.removeEventListener(e,n,s)}function Vm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Um(e);if(s){const l=i[e]=qm(s,r);xn(t,a,l,c)}else o&&(Pm(t,a,o,c),i[e]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function Um(t){let e;if(ul.test(t)){e={};let s;for(;s=t.match(ul);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let Xi=0;const $m=Promise.resolve(),Bm=()=>Xi||($m.then(()=>Xi=0),Xi=Date.now());function qm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(jm(s,n.value),e,5,[s])};return n.value=t,n.attached=Bm(),n}function jm(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const hl=/^on[a-z]/,Hm=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Rm(t,s,r):e==="style"?Om(t,n,s):Jr(e)?la(e)||Vm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Km(t,e,s,r))?Fm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lm(t,e,s,r))};function Km(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hl.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hl.test(e)&&we(n)?!1:e in t}const zm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Og.props;const fl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>wr(e,n):e};function Gm(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wm={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=fl(r);const i=s||r.props&&r.props.type==="number";xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dr(a)),t._assign(a)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",Gm),xn(t,"compositionend",dl),xn(t,"change",dl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=fl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Dr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Qm=["ctrl","shift","alt","meta"],Ym={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qm.some(n=>t[`${n}Key`]&&!e.includes(n))},Xm=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Ym[e[r]];if(i&&i(n,e))return}return t(n,...s)},Jm=Fe({patchProp:Hm},km);let pl;function Zm(){return pl||(pl=om(Jm))}const ey=(...t)=>{const e=Zm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ty(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ty(t){return we(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ny=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ny(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const C=l<<6&192|f;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sy=function(t){const e=Eh(t);return Th.encodeByteArray(e,!0)},Rr=function(t){return sy(t).replace(/\./g,"")},ry=function(t){try{return Th.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ih(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function oy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function ay(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=()=>ay().__FIREBASE_DEFAULTS__,ly=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ry(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return cy()||ly()||uy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hy=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fy=t=>{const e=hy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},dy=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rr(JSON.stringify(n)),Rr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=my,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?yy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gt(r,a,s)}}function yy(t,e){return t.replace(vy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vy=/\{\$([^}]+)}/g;function Or(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gl(i)&&gl(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=1e3,Ey=2,Ty=4*60*60*1e3,by=.5;function ml(t,e=wy,n=Ey){const s=e*Math.pow(n,t),r=Math.round(by*s*(Math.random()-.5)*2);return Math.min(Ty,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class At{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new py;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cy(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_y(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _y(t){return t===nn?void 0:t}function Cy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Sy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Dy=X.INFO,xy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Ny=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=xy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=Dy,this._logHandler=Ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ky=(t,e)=>e.some(n=>t instanceof n);let yl,vl;function Ry(){return yl||(yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oy(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,No=new WeakMap,Ah=new WeakMap,Ji=new WeakMap,Da=new WeakMap;function My(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ch.set(n,t)}).catch(()=>{}),Da.set(e,t),e}function Ly(t){if(No.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});No.set(t,e)}let ko={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return No.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ah.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fy(t){ko=t(ko)}function Py(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Zi(this),e,...n);return Ah.set(s,e.sort?e.sort():[e]),Pt(s)}:Oy().includes(t)?function(...e){return t.apply(Zi(this),e),Pt(Ch.get(this))}:function(...e){return Pt(t.apply(Zi(this),e))}}function Vy(t){return typeof t=="function"?Py(t):(t instanceof IDBTransaction&&Ly(t),ky(t,Ry())?new Proxy(t,ko):t)}function Pt(t){if(t instanceof IDBRequest)return My(t);if(Ji.has(t))return Ji.get(t);const e=Vy(t);return e!==t&&(Ji.set(t,e),Da.set(e,t)),e}const Zi=t=>Da.get(t);function Sh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Uy=["get","getKey","getAll","getAllKeys","count"],$y=["put","add","delete","clear"],eo=new Map;function wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$y.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Uy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return eo.set(e,i),i}Fy(t=>({...t,get:(e,n,s)=>wl(e,n)||t.get(e,n,s),has:(e,n)=>!!wl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ro="@firebase/app",El="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Sa("@firebase/app"),jy="@firebase/app-compat",Hy="@firebase/analytics-compat",Ky="@firebase/analytics",zy="@firebase/app-check-compat",Gy="@firebase/app-check",Wy="@firebase/auth",Qy="@firebase/auth-compat",Yy="@firebase/database",Xy="@firebase/database-compat",Jy="@firebase/functions",Zy="@firebase/functions-compat",ev="@firebase/installations",tv="@firebase/installations-compat",nv="@firebase/messaging",sv="@firebase/messaging-compat",rv="@firebase/performance",iv="@firebase/performance-compat",ov="@firebase/remote-config",av="@firebase/remote-config-compat",cv="@firebase/storage",lv="@firebase/storage-compat",uv="@firebase/firestore",hv="@firebase/firestore-compat",fv="firebase",dv="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="[DEFAULT]",pv={[Ro]:"fire-core",[jy]:"fire-core-compat",[Ky]:"fire-analytics",[Hy]:"fire-analytics-compat",[Gy]:"fire-app-check",[zy]:"fire-app-check-compat",[Wy]:"fire-auth",[Qy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Xy]:"fire-rtdb-compat",[Jy]:"fire-fn",[Zy]:"fire-fn-compat",[ev]:"fire-iid",[tv]:"fire-iid-compat",[nv]:"fire-fcm",[sv]:"fire-fcm-compat",[rv]:"fire-perf",[iv]:"fire-perf-compat",[ov]:"fire-rc",[av]:"fire-rc-compat",[cv]:"fire-gcs",[lv]:"fire-gcs-compat",[uv]:"fire-fst",[hv]:"fire-fst-compat","fire-js":"fire-js",[fv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map,Mo=new Map;function gv(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Mo.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Mo.set(e,t);for(const n of Mr.values())gv(n,t);return!0}function Bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new li("app","Firebase",mv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=dv;function Dh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Oo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(n||(n=dy()),!n)throw Vt.create("no-options");const i=Mr.get(r);if(i){if(Or(n,i.options)&&Or(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const o=new Ay(r);for(const c of Mo.values())o.addComponent(c);const a=new yv(n,s,o);return Mr.set(r,a),a}function xh(t=Oo){const e=Mr.get(t);if(!e&&t===Oo)return Dh();if(!e)throw Vt.create("no-app",{appName:t});return e}function yt(t,e,n){var s;let r=(s=pv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(a.join(" "));return}jt(new At(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebase-heartbeat-database",Ev=1,xs="firebase-heartbeat-store";let to=null;function Nh(){return to||(to=Sh(wv,Ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),to}async function Tv(t){try{return(await Nh()).transaction(xs).objectStore(xs).get(kh(t))}catch(e){if(e instanceof Gt)vn.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Tl(t,e){try{const s=(await Nh()).transaction(xs,"readwrite");return await s.objectStore(xs).put(e,kh(t)),s.done}catch(n){if(n instanceof Gt)vn.warn(n.message);else{const s=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(s.message)}}}function kh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=1024,Iv=30*24*60*60*1e3;class _v{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Av(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Iv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bl(),{heartbeatsToSend:n,unsentEntries:s}=Cv(this._heartbeatsCache.heartbeats),r=Rr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bl(){return new Date().toISOString().substring(0,10)}function Cv(t,e=bv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Il(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Av{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bh()?Ih().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Il(t){return Rr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){jt(new At("platform-logger",e=>new By(e),"PRIVATE")),jt(new At("heartbeat",e=>new _v(e),"PRIVATE")),yt(Ro,El,t),yt(Ro,El,"esm2017"),yt("fire-js","")}Sv("");var Dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,xa=xa||{},P=Dv||self;function Lr(){}function ui(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xv(t){return Object.prototype.hasOwnProperty.call(t,no)&&t[no]||(t[no]=++Nv)}var no="closure_uid_"+(1e9*Math.random()>>>0),Nv=0;function kv(t,e,n){return t.call.apply(t.bind,arguments)}function Rv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=kv:Me=Rv,Me.apply(null,arguments)}function fr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Wt(){this.s=this.s,this.o=this.o}var Ov=0;Wt.prototype.s=!1;Wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ov!=0)&&xv(this)};Wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Na(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _l(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ui(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Mv=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{P.addEventListener("test",Lr,e),P.removeEventListener("test",Lr,e)}catch{}return t}();function Fr(t){return/^[\s\xa0]*$/.test(t)}var Cl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function so(t,e){return t<e?-1:t>e?1:0}function hi(){var t=P.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return hi().indexOf(t)!=-1}function ka(t){return ka[" "](t),t}ka[" "]=Lr;function Lv(t){var e=Vv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Fv=mt("Opera"),Hn=mt("Trident")||mt("MSIE"),Oh=mt("Edge"),Lo=Oh||Hn,Mh=mt("Gecko")&&!(hi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),Pv=hi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function Lh(){var t=P.document;return t?t.documentMode:void 0}var Pr;e:{var ro="",io=function(){var t=hi();if(Mh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Oh)return/Edge\/([\d\.]+)/.exec(t);if(Hn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Pv)return/WebKit\/(\S+)/.exec(t);if(Fv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(io&&(ro=io?io[1]:""),Hn){var oo=Lh();if(oo!=null&&oo>parseFloat(ro)){Pr=String(oo);break e}}Pr=ro}var Vv={};function Uv(){return Lv(function(){let t=0;const e=Cl(String(Pr)).split("."),n=Cl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=so(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||so(r[2].length==0,i[2].length==0)||so(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Fo;if(P.document&&Hn){var Al=Lh();Fo=Al||parseInt(Pr,10)||void 0}else Fo=void 0;var $v=Fo;function Ns(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mh){e:{try{ka(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ns.X.h.call(this)}}De(Ns,Le);var Bv={2:"touch",3:"pen",4:"mouse"};Ns.prototype.h=function(){Ns.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),qv=0;function jv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++qv,this.ba=this.ea=!1}function fi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ra(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Fh(t){const e={};for(const n in t)e[n]=t[n];return e}const Sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ph(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Sl.length;i++)n=Sl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function di(t){this.src=t,this.g={},this.h=0}di.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Po(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Rh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(fi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Oa="closure_lm_"+(1e6*Math.random()|0),ao={};function Vh(t,e,n,s,r){if(s&&s.once)return $h(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vh(t,e[i],n,s,r);return null}return n=Fa(n),t&&t[js]?t.N(e,n,qs(s)?!!s.capture:!!s,r):Uh(t,e,n,!1,s,r)}function Uh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=qs(r)?!!r.capture:!!r,a=La(t);if(a||(t[Oa]=a=new di(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Hv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Mv||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(qh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hv(){function t(n){return e.call(t.src,t.listener,n)}const e=Kv;return t}function $h(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$h(t,e[i],n,s,r);return null}return n=Fa(n),t&&t[js]?t.O(e,n,qs(s)?!!s.capture:!!s,r):Uh(t,e,n,!0,s,r)}function Bh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bh(t,e[i],n,s,r);else s=qs(s)?!!s.capture:!!s,n=Fa(n),t&&t[js]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vo(i,n,s,r),-1<n&&(fi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=La(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vo(e,n,s,r)),(n=-1<t?e[t]:null)&&Ma(n))}function Ma(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[js])Po(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=La(e))?(Po(n,t),n.h==0&&(n.src=null,e[Oa]=null)):fi(t)}}}function qh(t){return t in ao?ao[t]:ao[t]="on"+t}function Kv(t,e){if(t.ba)t=!0;else{e=new Ns(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ma(t),t=n.call(s,e)}return t}function La(t){return t=t[Oa],t instanceof di?t:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fa(t){return typeof t=="function"?t:(t[co]||(t[co]=function(e){return t.handleEvent(e)}),t[co])}function Ie(){Wt.call(this),this.i=new di(this),this.P=this,this.I=null}De(Ie,Wt);Ie.prototype[js]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){Bh(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),Ph(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=dr(o,s,!0,e)&&r}if(o=e.g=t,r=dr(o,s,!0,e)&&r,r=dr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=dr(o,s,!1,e)&&r}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)fi(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function dr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Po(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Pa=P.JSON.stringify;function zv(){var t=Kh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gv{constructor(){this.h=this.g=null}add(e,n){const s=jh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var jh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Wv,t=>t.reset());class Wv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Qv(t){P.setTimeout(()=>{throw t},0)}function Hh(t,e){Uo||Yv(),$o||(Uo(),$o=!0),Kh.add(t,e)}var Uo;function Yv(){var t=P.Promise.resolve(void 0);Uo=function(){t.then(Xv)}}var $o=!1,Kh=new Gv;function Xv(){for(var t;t=zv();){try{t.h.call(t.g)}catch(n){Qv(n)}var e=jh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$o=!1}function pi(t,e){Ie.call(this),this.h=t||1,this.g=e||P,this.j=Me(this.lb,this),this.l=Date.now()}De(pi,Ie);N=pi.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Va(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Va(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){pi.X.M.call(this),Va(this),delete this.g};function Ua(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:P.setTimeout(t,e||0)}function zh(t){t.g=Ua(()=>{t.g=null,t.i&&(t.i=!1,zh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Jv extends Wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zh(this)}M(){super.M(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Wt.call(this),this.h=t,this.g={}}De(ks,Wt);var Dl=[];function Gh(t,e,n,s){Array.isArray(n)||(n&&(Dl[0]=n.toString()),n=Dl);for(var r=0;r<n.length;r++){var i=Vh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wh(t){Ra(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ma(e)},t),t.g={}}ks.prototype.M=function(){ks.X.M.call(this),Wh(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gi(){this.g=!0}gi.prototype.Aa=function(){this.g=!1};function Zv(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ew(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Rn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nw(t,n)+(s?" "+s:"")})}function tw(t,e){t.info(function(){return"TIMEOUT: "+e})}gi.prototype.info=function(){};function nw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Pa(n)}catch{return e}}var In={},xl=null;function mi(){return xl=xl||new Ie}In.Pa="serverreachability";function Qh(t){Le.call(this,In.Pa,t)}De(Qh,Le);function Rs(t){const e=mi();Se(e,new Qh(e))}In.STAT_EVENT="statevent";function Yh(t,e){Le.call(this,In.STAT_EVENT,t),this.stat=e}De(Yh,Le);function $e(t){const e=mi();Se(e,new Yh(e,t))}In.Qa="timingevent";function Xh(t,e){Le.call(this,In.Qa,t),this.size=e}De(Xh,Le);function Hs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){t()},e)}var yi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Jh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $a(){}$a.prototype.h=null;function Nl(t){return t.h||(t.h=t.i())}function Zh(){}var Ks={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ba(){Le.call(this,"d")}De(Ba,Le);function qa(){Le.call(this,"c")}De(qa,Le);var Bo;function vi(){}De(vi,$a);vi.prototype.g=function(){return new XMLHttpRequest};vi.prototype.i=function(){return{}};Bo=new vi;function zs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ks(this),this.O=sw,t=Lo?125:void 0,this.T=new pi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ef}function ef(){this.i=null,this.g="",this.h=!1}var sw=45e3,qo={},Vr={};N=zs.prototype;N.setTimeout=function(t){this.O=t};function jo(t,e,n){t.K=1,t.v=Ei(St(e)),t.s=n,t.P=!0,tf(t,null)}function tf(t,e){t.F=Date.now(),Gs(t),t.A=St(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),uf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ef,t.g=kf(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Jv(Me(t.La,t,t.g),t.N)),Gh(t.S,t.g,"readystatechange",t.ib),e=t.H?Fh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Rs(),Zv(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&It(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=It(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||Lo||this.g&&(this.h.h||this.g.fa()||Ml(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Rs(3):Rs(2)),wi(this);var n=this.g.aa();this.Y=n;t:if(nf(this)){var s=Ml(this.g);t="";var r=s.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),vs(this);var o="";break t}this.h.i=new P.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ew(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(a)){var l=a;break t}}l=null}if(n=l)Rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ho(this,n);else{this.i=!1,this.o=3,$e(12),cn(this),vs(this);break e}}this.P?(sf(this,u,o),Lo&&this.i&&u==3&&(Gh(this.S,this.T,"tick",this.hb),this.T.start())):(Rn(this.j,this.m,o,null),Ho(this,o)),u==4&&cn(this),this.i&&!this.I&&(u==4?Sf(this.l,this):(this.i=!1,Gs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),cn(this),vs(this)}}}catch{}finally{}};function nf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function sf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=rw(t,n),r==Vr){e==4&&(t.o=4,$e(14),s=!1),Rn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==qo){t.o=4,$e(15),Rn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Rn(t.j,t.m,r,null),Ho(t,r);nf(t)&&r!=Vr&&r!=qo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qa(e),e.K=!0,$e(11))):(Rn(t.j,t.m,n,"[Invalid Chunked Response]"),cn(t),vs(t))}N.hb=function(){if(this.g){var t=It(this.g),e=this.g.fa();this.C<e.length&&(wi(this),sf(this,t,e),this.i&&t!=4&&Gs(this))}};function rw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Vr:(n=Number(e.substring(n,s)),isNaN(n)?qo:(s+=1,s+n>e.length?Vr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,cn(this)};function Gs(t){t.V=Date.now()+t.O,rf(t,t.O)}function rf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hs(Me(t.gb,t),e)}function wi(t){t.B&&(P.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tw(this.j,this.A),this.K!=2&&(Rs(),$e(17)),cn(this),this.o=2,vs(this)):rf(this,this.V-t)};function vs(t){t.l.G==0||t.I||Sf(t.l,t)}function cn(t){wi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Va(t.T),Wh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ho(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ko(n.h,t))){if(!t.J&&Ko(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Br(n),Ii(n);else break e;Wa(n),$e(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Hs(Me(n.cb,n),6e3));if(1>=df(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ln(n,11)}else if((t.J||n.g==t)&&Br(n),!Fr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const C=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var i=s.h;i.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ja(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,ae(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Nf(s,s.H?s.ka:null,s.V),o.J){pf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(wi(a),Gs(a)),s.g=o}else Cf(s);0<n.i.length&&_i(n)}else l[0]!="stop"&&l[0]!="close"||ln(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ln(n,7):Ga(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Rs(4)}catch{}}function iw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ui(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ow(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ui(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function of(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ui(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ow(t),s=iw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gn){this.h=e!==void 0?e:t.h,Ur(this,t.j),this.s=t.s,this.g=t.g,$r(this,t.m),this.l=t.l,e=t.i;var n=new Os;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kl(this,n),this.o=t.o}else t&&(n=String(t).match(af))?(this.h=!!e,Ur(this,n[1]||"",!0),this.s=fs(n[2]||""),this.g=fs(n[3]||"",!0),$r(this,n[4]),this.l=fs(n[5]||"",!0),kl(this,n[6]||"",!0),this.o=fs(n[7]||"")):(this.h=!!e,this.i=new Os(null,this.h))}gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ds(e,Rl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ds(e,Rl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ds(n,n.charAt(0)=="/"?uw:lw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ds(n,fw)),t.join("")};function St(t){return new gn(t)}function Ur(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $r(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kl(t,e,n){e instanceof Os?(t.i=e,dw(t.i,t.h)):(n||(e=ds(e,hw)),t.i=new Os(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Ei(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rl=/[#\/\?@]/g,lw=/[#\?:]/g,uw=/[#\?]/g,hw=/[#\?@]/g,fw=/#/g;function Os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qt(t){t.g||(t.g=new Map,t.h=0,t.i&&aw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Os.prototype;N.add=function(t,e){Qt(this),this.i=null,t=ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cf(t,e){Qt(t),e=ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lf(t,e){return Qt(t),e=ns(t,e),t.g.has(e)}N.forEach=function(t,e){Qt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Qt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Qt(this);let e=[];if(typeof t=="string")lf(this,t)&&(e=e.concat(this.g.get(ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Qt(this),this.i=null,t=ns(this,t),lf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function uf(t,e,n){cf(t,e),0<n.length&&(t.i=null,t.g.set(ns(t,e),Na(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dw(t,e){e&&!t.j&&(Qt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(cf(this,s),uf(this,r,n))},t)),t.j=e}var pw=class{constructor(t,e){this.h=t,this.g=e}};function hf(t){this.l=t||gw,P.PerformanceNavigationTiming?(t=P.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(P.g&&P.g.Ga&&P.g.Ga()&&P.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gw=10;function ff(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function df(t){return t.h?1:t.g?t.g.size:0}function Ko(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ja(t,e){t.g?t.g.add(e):t.h=e}function pf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hf.prototype.cancel=function(){if(this.i=gf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Na(t.i)}function Ha(){}Ha.prototype.stringify=function(t){return P.JSON.stringify(t,void 0)};Ha.prototype.parse=function(t){return P.JSON.parse(t,void 0)};function mw(){this.g=new Ha}function yw(t,e,n){const s=n||"";try{of(t,function(r,i){let o=r;qs(r)&&(o=Pa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function vw(t,e){const n=new gi;if(P.Image){const s=new Image;s.onload=fr(pr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=fr(pr,n,s,"TestLoadImage: error",!1,e),s.onabort=fr(pr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=fr(pr,n,s,"TestLoadImage: timeout",!1,e),P.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function pr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ws(t){this.l=t.ac||null,this.j=t.jb||!1}De(Ws,$a);Ws.prototype.g=function(){return new Ti(this.l,this.j)};Ws.prototype.i=function(t){return function(){return t}}({});function Ti(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ka,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Ti,Ie);var Ka=0;N=Ti.prototype;N.open=function(t,e){if(this.readyState!=Ka)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ms(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||P).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=Ka};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qs(this):Ms(this),this.readyState==3&&mf(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Qs(this))};N.Ua=function(t){this.g&&(this.response=t,Qs(this))};N.ga=function(){this.g&&Qs(this)};function Qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ms(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ww=P.JSON.parse;function he(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yf,this.K=this.L=!1}De(he,Ie);var yf="",Ew=/^https?$/i,Tw=["POST","PUT"];N=he.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bo.g(),this.C=this.u?Nl(this.u):Nl(Bo),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ol(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=P.FormData&&t instanceof P.FormData,!(0<=Rh(Tw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ef(this),0<this.B&&((this.K=bw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=Ua(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ol(this,i)}};function bw(t){return Hn&&Uv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof xa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Ol(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vf(t),bi(t)}function vf(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),bi(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bi(this,!0)),he.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?wf(this):this.fb())};N.fb=function(){wf(this)};function wf(t){if(t.h&&typeof xa<"u"&&(!t.C[1]||It(t)!=4||t.aa()!=2)){if(t.v&&It(t)==4)Ua(t.Ha,0,t);else if(Se(t,"readystatechange"),It(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(af)[1]||null;if(!r&&P.self&&P.self.location){var i=P.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ew.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<It(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",vf(t)}}finally{bi(t)}}}}function bi(t,e){if(t.g){Ef(t);const n=t.g,s=t.C[0]?Lr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ef(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(P.clearTimeout(t.A),t.A=null)}function It(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ww(e)}};function Ml(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case yf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tf(t){let e="";return Ra(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function za(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Tf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function us(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bf(t){this.Ca=0,this.i=[],this.j=new gi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=us("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=us("baseRetryDelayMs",5e3,t),this.bb=us("retryDelaySeedMs",1e4,t),this.$a=us("forwardChannelMaxRetries",2,t),this.ta=us("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hf(t&&t.concurrentRequestLimit),this.Fa=new mw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=bf.prototype;N.ma=8;N.G=1;function Ga(t){if(If(t),t.G==3){var e=t.U++,n=St(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ys(t,n),e=new zs(t,t.j,e,void 0),e.K=2,e.v=Ei(St(n)),n=!1,P.navigator&&P.navigator.sendBeacon&&(n=P.navigator.sendBeacon(e.v.toString(),"")),!n&&P.Image&&(new Image().src=e.v,n=!0),n||(e.g=kf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Gs(e)}xf(t)}function Ii(t){t.g&&(Qa(t),t.g.cancel(),t.g=null)}function If(t){Ii(t),t.u&&(P.clearTimeout(t.u),t.u=null),Br(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&P.clearTimeout(t.m),t.m=null)}function _i(t){ff(t.h)||t.m||(t.m=!0,Hh(t.Ja,t),t.C=0)}function Iw(t,e){return df(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Hs(Me(t.Ja,t,e),Df(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new zs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Fh(i),Ph(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_f(this,r,e),n=St(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Ys(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Tf(i)))+"&"+e:this.o&&za(n,this.o,i)),ja(this.h,r),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,jo(r,n,null)):jo(r,n,e),this.G=2}}else this.G==3&&(t?Ll(this,t):this.i.length==0||ff(this.h)||Ll(this))};function Ll(t,e){var n;e?n=e.m:n=t.U++;const s=St(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),Ys(t,s),t.o&&t.s&&za(s,t.o,t.s),n=new zs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=_f(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ja(t.h,n),jo(n,s,e)}function Ys(t,e){t.ia&&Ra(t.ia,function(n,s){ae(e,s,n)}),t.l&&of({},function(n,s){ae(e,s,n)})}function _f(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{yw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Cf(t){t.g||t.u||(t.Z=1,Hh(t.Ia,t),t.A=0)}function Wa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Hs(Me(t.Ia,t),Df(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Af(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Hs(Me(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$e(10),Ii(this),Af(this))};function Qa(t){t.B!=null&&(P.clearTimeout(t.B),t.B=null)}function Af(t){t.g=new zs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=St(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Ys(t,e),t.o&&t.s&&za(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ei(St(e)),n.s=null,n.P=!0,tf(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Ii(this),Wa(this),$e(19))};function Br(t){t.v!=null&&(P.clearTimeout(t.v),t.v=null)}function Sf(t,e){var n=null;if(t.g==e){Br(t),Qa(t),t.g=null;var s=2}else if(Ko(t.h,e))n=e.D,pf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=mi(),Se(s,new Xh(s,n)),_i(t)}else Cf(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Iw(t,e)||s==2&&Wa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ln(t,5);break;case 4:ln(t,10);break;case 3:ln(t,6);break;default:ln(t,2)}}}function Df(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ln(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new gn("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Ur(n,"https"),Ei(n)),vw(n.toString(),s)}else $e(2);t.G=0,t.l&&t.l.va(e),xf(t),If(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function xf(t){if(t.G=0,t.la=[],t.l){const e=gf(t.h);(e.length!=0||t.i.length!=0)&&(_l(t.la,e),_l(t.la,t.i),t.h.i.length=0,Na(t.i),t.i.length=0),t.l.ua()}}function Nf(t,e,n){var s=n instanceof gn?St(n):new gn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$r(s,s.m);else{var r=P.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gn(null,void 0);s&&Ur(i,s),e&&(i.g=e),r&&$r(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),Ys(t,s),s}function kf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new he(new Ws({jb:!0})):new he(t.ra),e.Ka(t.H),e}function Rf(){}N=Rf.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function qr(){if(Hn&&!(10<=Number($v)))throw Error("Environmental error: no available transport.")}qr.prototype.g=function(t,e){return new We(t,e)};function We(t,e){Ie.call(this),this.g=new bf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Fr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}De(We,Ie);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$e(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Nf(t,null,t.V),_i(t)};We.prototype.close=function(){Ga(this.g)};We.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pa(t),t=n);e.i.push(new pw(e.ab++,t)),e.G==3&&_i(e)};We.prototype.M=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,We.X.M.call(this)};function Of(t){Ba.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Of,Ba);function Mf(){qa.call(this),this.status=1}De(Mf,qa);function ss(t){this.g=t}De(ss,Rf);ss.prototype.xa=function(){Se(this.g,"a")};ss.prototype.wa=function(t){Se(this.g,new Of(t))};ss.prototype.va=function(t){Se(this.g,new Mf)};ss.prototype.ua=function(){Se(this.g,"b")};qr.prototype.createWebChannel=qr.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;yi.NO_ERROR=0;yi.TIMEOUT=8;yi.HTTP_ERROR=6;Jh.COMPLETE="complete";Zh.EventType=Ks;Ks.OPEN="a";Ks.CLOSE="b";Ks.ERROR="c";Ks.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.Oa;he.prototype.getLastErrorCode=he.prototype.Ea;he.prototype.getStatus=he.prototype.aa;he.prototype.getResponseJson=he.prototype.Sa;he.prototype.getResponseText=he.prototype.fa;he.prototype.send=he.prototype.da;he.prototype.setWithCredentials=he.prototype.Ka;var _w=function(){return new qr},Cw=function(){return mi()},lo=yi,Aw=Jh,Sw=In,Fl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Dw=Ws,gr=Zh,xw=he;const Pl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Sa("@firebase/firestore");function Vl(){return wn.logLevel}function k(t,...e){if(wn.logLevel<=X.DEBUG){const n=e.map(Ya);wn.debug(`Firestore (${rs}): ${t}`,...n)}}function Dt(t,...e){if(wn.logLevel<=X.ERROR){const n=e.map(Ya);wn.error(`Firestore (${rs}): ${t}`,...n)}}function zo(t,...e){if(wn.logLevel<=X.WARN){const n=e.map(Ya);wn.warn(`Firestore (${rs}): ${t}`,...n)}}function Ya(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Dt(e),new Error(e)}function re(t,e){t||F()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class kw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rw{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new Lf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new xe(e)}}class Ow{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Mw{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Ow(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fw{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Lw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Pw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Kn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ye(0,0))}static max(){return new $(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ls.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ls?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Ls{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const Vw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Ls{construct(e,n,s){return new Re(e,n,s)}static isValidIdentifier(e){return Vw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(oe.fromString(e))}static fromName(e){return new R(oe.fromString(e).popFirst(5))}static empty(){return new R(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new oe(e.slice()))}}function Uw(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=$.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Ht(r,R.empty(),e)}function $w(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ht($.min(),R.empty(),-1)}static max(){return new Ht($.max(),R.empty(),-1)}}function Bw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==qw)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Js(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Xa.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return t==null}function jr(t){return t===0&&1/t==-1/0}function Kw(t){return typeof t=="number"&&Number.isInteger(t)&&!jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(t){if(re(!!t),typeof t=="string"){let e=0;const n=zw.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zn(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uf(t){const e=t.mapValue.fields.__previous_value__;return Vf(e)?Uf(e):e}function Ps(t){const e=Kt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vf(t)?4:Gw(t)?9007199254740991:10:F()}function wt(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ps(t).isEqual(Ps(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Kt(s.timestampValue),o=Kt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return zn(s.bytesValue).isEqual(zn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ge(s.geoPointValue.latitude)===ge(r.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ge(s.integerValue)===ge(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ge(s.doubleValue),o=ge(r.doubleValue);return i===o?jr(i)===jr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Kn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ul(i)!==Ul(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function Vs(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Gn(t,e){if(t===e)return 0;const n=En(t),s=En(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ge(r.integerValue||r.doubleValue),a=ge(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $l(t.timestampValue,e.timestampValue);case 4:return $l(Ps(t),Ps(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=zn(r),a=zn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=J(o[c],a[c]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(ge(r.latitude),ge(i.latitude));return o!==0?o:J(ge(r.longitude),ge(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Gn(o[c],a[c]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===mr.mapValue&&i===mr.mapValue)return 0;if(r===mr.mapValue)return 1;if(i===mr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=J(a[u],l[u]);if(f!==0)return f;const p=Gn(o[a[u]],c[l[u]]);if(p!==0)return p}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function $l(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Kt(t),s=Kt(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Wn(t){return Go(t)}function Go(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Kt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Go(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Go(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function Bl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wo(t){return!!t&&"integerValue"in t}function Ja(t){return!!t&&"arrayValue"in t}function ql(t){return!!t&&"nullValue"in t}function jl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ir(t){return!!t&&"mapValue"in t}function ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _n(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ws(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.position=e,this.inclusive=n}}function Hl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=R.comparator(R.fromName(o.referenceValue),n.key):s=Gn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{}class me extends $f{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Yw(e,n,s):n==="array-contains"?new Zw(e,s):n==="in"?new e0(e,s):n==="not-in"?new t0(e,s):n==="array-contains-any"?new n0(e,s):new me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Xw(e,s):new Jw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gn(n,this.value)):n!==null&&En(this.value)===En(n)&&this.matchesComparison(Gn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ct extends $f{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ct(e,n)}matches(e){return Bf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Bf(t){return t.op==="and"}function Ww(t){return Qw(t)&&Bf(t)}function Qw(t){for(const e of t.filters)if(e instanceof ct)return!1;return!0}function qf(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+Wn(t.value);{const e=t.filters.map(n=>qf(n)).join(",");return`${t.op}(${e})`}}function jf(t,e){return t instanceof me?function(n,s){return s instanceof me&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(t,e):t instanceof ct?function(n,s){return s instanceof ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&jf(i,s.filters[o]),!0):!1}(t,e):void F()}function Hf(t){return t instanceof me?function(e){return`${e.field.canonicalString()} ${e.op} ${Wn(e.value)}`}(t):t instanceof ct?function(e){return e.op.toString()+" {"+e.getFilters().map(Hf).join(" ,")+"}"}(t):"Filter"}class Yw extends me{constructor(e,n,s){super(e,n,s),this.key=R.fromName(s.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xw extends me{constructor(e,n){super(e,"in",n),this.keys=Kf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jw extends me{constructor(e,n){super(e,"not-in",n),this.keys=Kf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>R.fromName(s.referenceValue))}class Zw extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ja(n)&&Vs(n.arrayValue,this.value)}}class e0 extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class t0 extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class n0 extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ja(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vs(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n="asc"){this.field=e,this.dir=n}}function s0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yr(this.root,e,this.comparator,!0)}}class yr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ce.RED,this.left=r!=null?r:Ce.EMPTY,this.right=i!=null?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ce(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zl(this.data.getIterator())}getIteratorFrom(e){return new zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new ve(Re.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ir(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(n)}setAll(e){let n=Re.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ws(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){_n(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(ws(this.value))}}function zf(t){const e=[];return _n(t.fields,(n,s)=>{const r=new Re([n]);if(Ir(s)){const i=zf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,$.min(),$.min(),$.min(),qe.empty(),0)}static newFoundDocument(e,n,s,r){return new Ne(e,1,n,$.min(),s,r,0)}static newNoDocument(e,n){return new Ne(e,2,n,$.min(),$.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,$.min(),$.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Gl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new r0(t,e,n,s,r,i,o)}function Za(t){const e=q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>qf(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ci(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Wn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Wn(s)).join(",")),e.ft=n}return e.ft}function ec(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!s0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kl(t.startAt,e.startAt)&&Kl(t.endAt,e.endAt)}function Qo(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function i0(t,e,n,s,r,i,o,a){return new is(t,e,n,s,r,i,o,a)}function tc(t){return new is(t)}function Wl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ai(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gf(t){return t.collectionGroup!==null}function Un(t){const e=q(t);if(e.dt===null){e.dt=[];const n=Ai(e),s=nc(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Vn(n)),e.dt.push(new Vn(Re.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vn(Re.keyField(),i))}}}return e.dt}function xt(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=Gl(e.path,e.collectionGroup,Un(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Un(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vn(i.field,o))}const s=e.endAt?new Hr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Hr(e.startAt.position,e.startAt.inclusive):null;e._t=Gl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Yo(t,e){e.getFirstInequalityField(),Ai(t);const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xo(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Si(t,e){return ec(xt(t),xt(e))&&t.limitType===e.limitType}function Wf(t){return`${Za(xt(t))}|lt:${t.limitType}`}function Jo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Hf(s)).join(", ")}]`),Ci(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Wn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Wn(s)).join(",")),`Target(${n})`}(xt(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):R.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Un(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Hl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Un(n),s)||n.endAt&&!function(r,i,o){const a=Hl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Un(n),s))}(t,e)}function o0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qf(t){return(e,n)=>{let s=!1;for(const r of Un(t)){const i=a0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function a0(t,e,n){const s=t.field.isKeyField()?R.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Gn(a,c):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function Xf(t){return{integerValue:""+t}}function c0(t,e){return Kw(e)?Xf(e):Yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this._=void 0}}function l0(t,e,n){return t instanceof Kr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Us?Zf(t,e):t instanceof $s?ed(t,e):function(s,r){const i=Jf(s,r),o=Ql(i)+Ql(s.gt);return Wo(i)&&Wo(s.gt)?Xf(o):Yf(s.yt,o)}(t,e)}function u0(t,e,n){return t instanceof Us?Zf(t,e):t instanceof $s?ed(t,e):n}function Jf(t,e){return t instanceof zr?Wo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Kr extends Di{}class Us extends Di{constructor(e){super(),this.elements=e}}function Zf(t,e){const n=td(e);for(const s of t.elements)n.some(r=>wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class $s extends Di{constructor(e){super(),this.elements=e}}function ed(t,e){let n=td(e);for(const s of t.elements)n=n.filter(r=>!wt(r,s));return{arrayValue:{values:n}}}class zr extends Di{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ql(t){return ge(t.integerValue||t.doubleValue)}function td(t){return Ja(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function h0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Us&&s instanceof Us||n instanceof $s&&s instanceof $s?Kn(n.elements,s.elements,wt):n instanceof zr&&s instanceof zr?wt(n.gt,s.gt):n instanceof Kr&&s instanceof Kr}(t.transform,e.transform)}class f0{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xi{}function nd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rc(t.key,at.none()):new Zs(t.key,t.data,at.none());{const n=t.data,s=qe.empty();let r=new ve(Re.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yt(t.key,s,new Ze(r.toArray()),at.none())}}function d0(t,e,n){t instanceof Zs?function(s,r,i){const o=s.value.clone(),a=Xl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yt?function(s,r,i){if(!_r(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(sd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,s){return t instanceof Zs?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=r.value.clone(),l=Jl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Yt?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=Jl(r.fieldTransforms,a,i),l=i.data;return l.setAll(sd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _r(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function p0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jf(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Yl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kn(n,s,(r,i)=>h0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zs extends xi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yt extends xi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Xl(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,u0(o,a,n[r]))}return s}function Jl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,l0(i,o,e))}return s}class rc extends xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g0 extends xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function y0(t){switch(t){default:return F();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function rd(t){if(t===void 0)return Dt("GRPC error has no .code"),y.UNKNOWN;switch(t){case pe.OK:return y.OK;case pe.CANCELLED:return y.CANCELLED;case pe.UNKNOWN:return y.UNKNOWN;case pe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case pe.INTERNAL:return y.INTERNAL;case pe.UNAVAILABLE:return y.UNAVAILABLE;case pe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case pe.NOT_FOUND:return y.NOT_FOUND;case pe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case pe.ABORTED:return y.ABORTED;case pe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case pe.DATA_LOSS:return y.DATA_LOSS;default:return F()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Ee(R.comparator);function Nt(){return v0}const id=new Ee(R.comparator);function ps(...t){let e=id;for(const n of t)e=e.insert(n.key,n);return e}function od(t){let e=id;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function un(){return Ts()}function ad(){return Ts()}function Ts(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const w0=new Ee(R.comparator),E0=new ve(R.comparator);function G(...t){let e=E0;for(const n of t)e=e.add(n);return e}const T0=new ve(J);function cd(){return T0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,er.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ni($.min(),r,cd(),Nt(),G())}}class er{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new er(s,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class ld{constructor(e,n){this.targetId=e,this.Et=n}}class ud{constructor(e,n,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zl{constructor(){this.At=0,this.Rt=tu(),this.bt=Pe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=G(),n=G(),s=G();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new er(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=tu()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class b0{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Nt(),this.qt=eu(),this.Ut=new ve(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Qo(i))if(s===0){const o=new R(i.path);this.Qt(n,o,Ne.newNoDocument(o,$.min()))}else re(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Qo(a.target)){const c=new R(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ne.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ni(e,n,this.Ut,this.Lt,s);return this.Lt=Nt(),this.qt=eu(),this.Ut=new ve(J),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Zl,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ve(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zl),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function eu(){return new Ee(R.comparator)}function tu(){return new Ee(R.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),C0=(()=>({and:"AND",or:"OR"}))();class A0{constructor(e,n){this.databaseId=e,this.wt=n}}function Gr(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hd(t,e){return t.wt?e.toBase64():e.toUint8Array()}function S0(t,e){return Gr(t,e.toTimestamp())}function vt(t){return re(!!t),$.fromTimestamp(function(e){const n=Kt(e);return new ye(n.seconds,n.nanos)}(t))}function ic(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fd(t){const e=oe.fromString(t);return re(md(e)),e}function Zo(t,e){return ic(t.databaseId,e.path)}function uo(t,e){const n=fd(e);if(n.get(1)!==t.databaseId.projectId)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(dd(n))}function ea(t,e){return ic(t.databaseId,e)}function D0(t){const e=fd(t);return e.length===4?oe.emptyPath():dd(e)}function ta(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dd(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nu(t,e,n){return{name:Zo(t,e),fields:n.value.mapValue.fields}}function x0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(re(l===void 0||typeof l=="string"),Pe.fromBase64String(l||"")):(re(l===void 0||l instanceof Uint8Array),Pe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:rd(c.code);return new D(l,c.message||"")}(o);n=new ud(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=uo(t,s.document.name),i=vt(s.document.updateTime),o=s.document.createTime?vt(s.document.createTime):$.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=Ne.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Cr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=uo(t,s.document),i=s.readTime?vt(s.readTime):$.min(),o=Ne.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=uo(t,s.document),i=s.removedTargetIds||[];n=new Cr([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new m0(r),o=s.targetId;n=new ld(o,i)}}return n}function N0(t,e){let n;if(e instanceof Zs)n={update:nu(t,e.key,e.value)};else if(e instanceof rc)n={delete:Zo(t,e.key)};else if(e instanceof Yt)n={update:nu(t,e.key,e.data),updateMask:U0(e.fieldMask)};else{if(!(e instanceof g0))return F();n={verify:Zo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Us)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $s)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zr)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:S0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function k0(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?vt(s.updateTime):vt(r);return i.isEqual($.min())&&(i=vt(r)),new f0(i,s.transformResults||[])}(n,e))):[]}function R0(t,e){return{documents:[ea(t,e.path)]}}function O0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ea(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ea(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return gd(ct.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Nn(u.field),direction:F0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Ci(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function M0(t){let e=D0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=pd(u);return f instanceof ct&&Ww(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Vn(kn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ci(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Hr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Hr(p,f)}(n.endAt)),i0(e,r,o,i,a,"F",c,l)}function L0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kn(e.unaryFilter.field);return me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(e.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kn(e.unaryFilter.field);return me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kn(e.unaryFilter.field);return me.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return me.create(kn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ct.create(e.compositeFilter.filters.map(n=>pd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function F0(t){return I0[t]}function P0(t){return _0[t]}function V0(t){return C0[t]}function Nn(t){return{fieldPath:t.canonicalString()}}function kn(t){return Re.fromServerFormat(t.fieldPath)}function gd(t){return t instanceof me?function(e){if(e.op==="=="){if(jl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NAN"}};if(ql(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NAN"}};if(ql(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(e.field),op:P0(e.op),value:e.value}}}(t):t instanceof ct?function(e){const n=e.getFilters().map(s=>gd(s));return n.length===1?n[0]:{compositeFilter:{op:V0(e.op),filters:n}}}(t):F()}function U0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function md(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&d0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Es(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Es(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ad();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=nd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument($.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(n,s)=>Yl(n,s))&&Kn(this.baseMutations,e.baseMutations,(n,s)=>Yl(n,s))}}class oc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=w0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new oc(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,s,r,i=$.min(),o=$.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.ie=e}}function j0(t){const e=M0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.Je=new K0}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Ht.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class K0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ve(oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Qn(0)}static vn(){return new Qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Es(s.mutation,r,Ze.empty(),ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=un();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ps();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=un();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Nt();const o=Ts(),a=Ts();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Yt)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Es(u.mutation,l,u.mutation.getFieldMask(),ye.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new G0(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ts();let r=new Ee((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ze.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=ad();u.forEach(p=>{if(!i.has(p)){const g=nd(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return R.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(un());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:od(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(s=>{let r=ps();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ps();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new is(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ne.newInvalidDocument(l)))});let o=ps();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Es(l.mutation,c,Ze.empty(),ye.now()),sc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:vt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:j0(s.bundledQuery),readTime:vt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.overlays=new Ee(R.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=un();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=un(),i=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=un(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=un(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new B0(n,s));let i=this.es.get(n);i===void 0&&(i=G(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.ns=new ve(be.ss),this.rs=new ve(be.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new be(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new be(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new R(new oe([])),s=new be(n,e),r=new be(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new R(new oe([])),s=new be(n,e),r=new be(n,e+1);let i=G();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new be(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return R.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||R.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ve(be.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),r=new be(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(J);return n.forEach(r=>{const i=new be(r,0),o=new be(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;R.isDocumentKey(i)||(i=i.child(""));const o=new be(new R(i),0);let a=new ve(J);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new be(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.Es=e,this.docs=new Ee(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let s=Nt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ne.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=Nt();const i=new R(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Bw($w(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){F()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Z0(this)}getSize(e){return T.resolve(this.size)}}class Z0 extends z0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.persistence=e,this.Rs=new os(n=>Za(n),ec),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ac,this.targetCount=0,this.vs=Qn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Qn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xa(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new eE(this),this.indexManager=new H0,this.remoteDocumentCache=function(s){return new J0(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new q0(n),this.Ns=new Q0(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new X0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const r=new nE(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class nE extends jw{constructor(e){super(),this.currentSequenceNumber=e}}class cc{constructor(e){this.persistence=e,this.Fs=new ac,this.$s=null}static Bs(e){return new cc(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=R.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,$.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lc(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Wl(n))return T.resolve(null);let s=xt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Xo(n,null,"F"),s=xt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Xo(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Wl(n)||r.isEqual($.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Vl()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jo(n)),this.Bi(e,o,n,Uw(r,-1)))})}Fi(e,n){let s=new ve(Qf(e));return n.forEach((r,i)=>{sc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Vl()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Jo(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ht.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ee(J),this.Ui=new os(i=>Za(i),ec),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function iE(t,e,n,s){return new rE(t,e,n,s)}async function yd(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function oE(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=T.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(C=>{const b=c.docVersions.get(g);re(b!==null),C.version.compareTo(b)<0&&(u.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),l.addEntry(C)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function vd(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function aE(t,e){const n=q(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Pe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(C,b,L){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=Nt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(cE(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual($.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function cE(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Nt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function lE(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function uE(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new yn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function na(t,e,n){const s=q(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Js(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function su(t,e,n){const s=q(t);let r=$.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=q(a),f=u.Ui.get(l);return f!==void 0?T.resolve(u.qi.get(f)):u.Cs.getTargetData(c,l)}(s,o,xt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:$.min(),n?i:G())).next(a=>(hE(s,o0(e),a),{documents:a,Hi:i})))}function hE(t,e,n){let s=t.Ki.get(e)||$.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class ru{constructor(){this.activeTargetIds=cd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fE{constructor(){this.Lr=new ru,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ru,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);k("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw zo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=pE[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new xw;a.setWithCredentials(!0),a.listenOnce(Aw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case lo.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),i(l);break;case lo.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new D(y.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(C){const b=C.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(p.status);o(new D(g,p.message))}else o(new D(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(y.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=_w(),o=Cw(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Dw({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");k("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new gE({Hr:C=>{f?k("Connection","Not sending because WebChannel is closed:",C):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",C),l.send(C))},Jr:()=>l.close()}),g=(C,b,L)=>{C.listen(b,j=>{try{L(j)}catch(Z){setTimeout(()=>{throw Z},0)}})};return g(l,gr.EventType.OPEN,()=>{f||k("Connection","WebChannel transport opened.")}),g(l,gr.EventType.CLOSE,()=>{f||(f=!0,k("Connection","WebChannel transport closed"),p.io())}),g(l,gr.EventType.ERROR,C=>{f||(f=!0,zo("Connection","WebChannel transport errored:",C),p.io(new D(y.UNAVAILABLE,"The operation could not be completed")))}),g(l,gr.EventType.MESSAGE,C=>{var b;if(!f){const L=C.data[0];re(!!L);const j=L,Z=j.error||((b=j[0])===null||b===void 0?void 0:b.error);if(Z){k("Connection","WebChannel received error:",Z);const V=Z.status;let ee=function(Rt){const nt=pe[Rt];if(nt!==void 0)return rd(nt)}(V),fe=Z.message;ee===void 0&&(ee=y.INTERNAL,fe="Unknown error status: "+V+" with message "+Z.message),f=!0,p.io(new D(ee,fe)),l.close()}else k("Connection","WebChannel received:",L),p.ro(L)}}),g(o,Sw.STAT_EVENT,C=>{C.stat===Fl.PROXY?k("Connection","Detected buffering proxy"):C.stat===Fl.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return new A0(t,!0)}class wd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new wd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new D(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yE extends Ed{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=x0(this.yt,e),s=function(r){if(!("targetChange"in r))return $.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?$.min():i.readTime?vt(i.readTime):$.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=ta(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Qo(a)?{documents:R0(r,a)}:{query:O0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=hd(r,i.resumeToken):i.snapshotVersion.compareTo($.min())>0&&(o.readTime=Gr(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=L0(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=ta(this.yt),n.removeTarget=e,this.Bo(n)}}class vE extends Ed{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=k0(e.writeResults,e.commitTime),s=vt(e.commitTime);return this.listener.Zo(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ta(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>N0(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(y.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class EE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dt(n),this.ou=!1):k("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Cn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c._u.add(4),await tr(c),c.gu.set("Unknown"),c._u.delete(4),await Ri(c)}(this))})}),this.gu=new EE(s,r)}}async function Ri(t){if(Cn(t))for(const e of t.wu)await e(!0)}async function tr(t){for(const e of t.wu)await e(!1)}function Td(t,e){const n=q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),fc(n)?hc(n):as(n).ko()&&uc(n,e))}function bd(t,e){const n=q(t),s=as(n);n.du.delete(e),s.ko()&&Id(n,e),n.du.size===0&&(s.ko()?s.Fo():Cn(n)&&n.gu.set("Unknown"))}function uc(t,e){t.yu.Ot(e.targetId),as(t).zo(e)}function Id(t,e){t.yu.Ot(e),as(t).Ho(e)}function hc(t){t.yu=new b0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),as(t).start(),t.gu.uu()}function fc(t){return Cn(t)&&!as(t).No()&&t.du.size>0}function Cn(t){return q(t)._u.size===0}function _d(t){t.yu=void 0}async function bE(t){t.du.forEach((e,n)=>{uc(t,e)})}async function IE(t,e){_d(t),fc(t)?(t.gu.hu(e),hc(t)):t.gu.set("Unknown")}async function _E(t,e,n){if(t.gu.set("Online"),e instanceof ud&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wr(t,s)}else if(e instanceof Cr?t.yu.Kt(e):e instanceof ld?t.yu.Jt(e):t.yu.jt(e),!n.isEqual($.min()))try{const s=await vd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Pe.EMPTY_BYTE_STRING,c.snapshotVersion)),Id(r,a);const l=new yn(c.target,a,1,c.sequenceNumber);uc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Wr(t,s)}}async function Wr(t,e,n){if(!Js(e))throw e;t._u.add(1),await tr(t),t.gu.set("Offline"),n||(n=()=>vd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ri(t)})}function Cd(t,e){return e().catch(n=>Wr(t,n,e))}async function Oi(t){const e=q(t),n=zt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;CE(e);)try{const r=await lE(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,AE(e,r)}catch(r){await Wr(e,r)}Ad(e)&&Sd(e)}function CE(t){return Cn(t)&&t.fu.length<10}function AE(t,e){t.fu.push(e);const n=zt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ad(t){return Cn(t)&&!zt(t).No()&&t.fu.length>0}function Sd(t){zt(t).start()}async function SE(t){zt(t).eu()}async function DE(t){const e=zt(t);for(const n of t.fu)e.Xo(n.mutations)}async function xE(t,e,n){const s=t.fu.shift(),r=oc.from(s,e,n);await Cd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Oi(t)}async function NE(t,e){e&&zt(t).Yo&&await async function(n,s){if(r=s.code,y0(r)&&r!==y.ABORTED){const i=n.fu.shift();zt(n).Mo(),await Cd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oi(n)}var r}(t,e),Ad(t)&&Sd(t)}async function ou(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=Cn(n);n._u.add(3),await tr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ri(n)}async function kE(t,e){const n=q(t);e?(n._u.delete(2),await Ri(n)):e||(n._u.add(2),await tr(n),n.gu.set("Unknown"))}function as(t){return t.pu||(t.pu=function(e,n,s){const r=q(e);return r.su(),new yE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:bE.bind(null,t),Zr:IE.bind(null,t),Wo:_E.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),fc(t)?hc(t):t.gu.set("Unknown")):(await t.pu.stop(),_d(t))})),t.pu}function zt(t){return t.Iu||(t.Iu=function(e,n,s){const r=q(e);return r.su(),new vE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:SE.bind(null,t),Zr:NE.bind(null,t),tu:DE.bind(null,t),Zo:xE.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Oi(t)):(await t.Iu.stop(),t.fu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new dc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pc(t,e){if(Dt("AsyncQueue",`${e}: ${t}`),Js(t))return new D(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.comparator=e?(n,s)=>e(n,s)||R.comparator(n.key,s.key):(n,s)=>R.comparator(n.key,s.key),this.keyedMap=ps(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new $n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $n;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.Tu=new Ee(R.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Yn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yn(e,n,$n.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.Au=void 0,this.listeners=[]}}class OE{constructor(){this.queries=new os(e=>Wf(e),Si),this.onlineState="Unknown",this.Ru=new Set}}async function ME(t,e){const n=q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new RE),r)try{i.Au=await n.onListen(s)}catch(o){const a=pc(o,`Initialization of query '${Jo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&gc(n)}async function LE(t,e){const n=q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function FE(t,e){const n=q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&gc(n)}function PE(t,e,n){const s=q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function gc(t){t.Ru.forEach(e=>{e.next()})}class VE{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Yn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.key=e}}class xd{constructor(e){this.key=e}}class UE{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=G(),this.mutatedKeys=G(),this.Gu=Qf(e),this.Qu=new $n(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new au,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=sc(this.query,f)?f:null,C=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let L=!1;p&&g?p.data.isEqual(g.data)?C!==b&&(s.track({type:3,doc:g}),L=!0):this.Hu(p,g)||(s.track({type:2,doc:g}),L=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),L=!0):p&&!g&&(s.track({type:1,doc:p}),L=!0,(c||l)&&(a=!0)),L&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(f,p){const g=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(f)-g(p)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Yn(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new au,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=G(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new xd(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Dd(s))}),n}tc(e){this.qu=e.Hi,this.Ku=G();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Yn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class $E{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BE{constructor(e){this.key=e,this.nc=!1}}class qE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new os(a=>Wf(a),Si),this.rc=new Map,this.oc=new Set,this.uc=new Ee(R.comparator),this.cc=new Map,this.ac=new ac,this.hc={},this.lc=new Map,this.fc=Qn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jE(t,e){const n=ZE(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await uE(n.localStore,xt(e));n.isPrimaryClient&&Td(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await HE(n,e,s,a==="current",o.resumeToken)}return r}async function HE(t,e,n,s,r){t._c=(f,p,g)=>async function(C,b,L,j){let Z=b.view.Wu(L);Z.$i&&(Z=await su(C.localStore,b.query,!1).then(({documents:fe})=>b.view.Wu(fe,Z)));const V=j&&j.targetChanges.get(b.targetId),ee=b.view.applyChanges(Z,C.isPrimaryClient,V);return lu(C,b.targetId,ee.Xu),ee.snapshot}(t,f,p,g);const i=await su(t.localStore,e,!0),o=new UE(e,i.Hi),a=o.Wu(i.documents),c=er.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);lu(t,n,l.Xu);const u=new $E(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function KE(t,e){const n=q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Si(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await na(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bd(n.remoteStore,s.targetId),sa(n,s.targetId)}).catch(Xs)):(sa(n,s.targetId),await na(n.localStore,s.targetId,!0))}async function zE(t,e,n){const s=eT(t);try{const r=await function(i,o){const a=q(i),c=ye.now(),l=o.reduce((p,g)=>p.add(g.key),G());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Nt(),C=G();return a.Gi.getEntries(p,l).next(b=>{g=b,g.forEach((L,j)=>{j.isValidDocument()||(C=C.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(b=>{u=b;const L=[];for(const j of o){const Z=p0(j,u.get(j.key).overlayedDocument);Z!=null&&L.push(new Yt(j.key,Z,zf(Z.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,L,o)}).next(b=>{f=b;const L=b.applyToLocalDocumentSet(u,C);return a.documentOverlayCache.saveOverlays(p,b.batchId,L)})}).then(()=>({batchId:f.batchId,changes:od(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ee(J)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await nr(s,r.changes),await Oi(s.remoteStore)}catch(r){const i=pc(r,"Failed to persist write");n.reject(i)}}async function Nd(t,e){const n=q(t);try{const s=await aE(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?re(o.nc):r.removedDocuments.size>0&&(re(o.nc),o.nc=!1))}),await nr(n,s,e)}catch(s){await Xs(s)}}function cu(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&gc(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GE(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ee(R.comparator);o=o.insert(i,Ne.newNoDocument(i,$.min()));const a=G().add(i),c=new Ni($.min(),new Map,new ve(J),o,a);await Nd(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),mc(s)}else await na(s.localStore,e,!1).then(()=>sa(s,e,n)).catch(Xs)}async function WE(t,e){const n=q(t),s=e.batch.batchId;try{const r=await oE(n.localStore,e);Rd(n,s,null),kd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nr(n,r)}catch(r){await Xs(r)}}async function QE(t,e,n){const s=q(t);try{const r=await function(i,o){const a=q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Rd(s,e,n),kd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await nr(s,r)}catch(r){await Xs(r)}}function kd(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Rd(t,e,n){const s=q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function sa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Od(t,s)})}function Od(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(bd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),mc(t))}function lu(t,e,n){for(const s of n)s instanceof Dd?(t.ac.addReference(s.key,e),YE(t,s)):s instanceof xd?(k("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Od(t,s.key)):F()}function YE(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.oc.add(s),mc(t))}function mc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new R(oe.fromString(e)),s=t.fc.next();t.cc.set(s,new BE(n)),t.uc=t.uc.insert(n,s),Td(t.remoteStore,new yn(xt(tc(n.path)),s,2,Xa.at))}}async function nr(t,e,n){const s=q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=lc.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,f=>T.forEach(f.Si,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>T.forEach(f.Di,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Js(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.qi.get(f),g=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(f,C)}}}(s.localStore,i))}async function XE(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await yd(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nr(n,s.ji)}}function JE(t,e){const n=q(t),s=n.cc.get(e);if(s&&s.nc)return G().add(s.key);{let r=G();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function ZE(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GE.bind(null,e),e.sc.Wo=FE.bind(null,e.eventManager),e.sc.wc=PE.bind(null,e.eventManager),e}function eT(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QE.bind(null,e),e}class tT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ki(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return iE(this.persistence,new sE,e.initialUser,this.yt)}yc(e){return new tE(cc.Bs,this.yt)}gc(e){return new fE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XE.bind(null,this.syncEngine),await kE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OE}createDatastore(e){const n=ki(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new mE(r));var r;return function(i,o,a,c){return new wE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>cu(this.syncEngine,a,0),o=iu.C()?new iu:new dE,new TE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new qE(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);k("RemoteStore","RemoteStore shutting down."),n._u.add(5),await tr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e,n){if(!n)throw new D(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sT(t,e,n,s){if(e===!0&&s===!0)throw new D(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uu(t){if(!R.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hu(t){if(R.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mi(t);throw new D(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map;class du{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new du({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new du(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nw;switch(n.type){case"gapi":const s=n.client;return new Mw(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fu.get(e);n&&(k("ComponentProvider","Removing Datastore"),fu.delete(e),n.terminate())}(this),Promise.resolve()}}function rT(t,e,n,s={}){var r;const i=(t=Ut(t,Li))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&zo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=xe.MOCK_USER;else{o=gy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new xe(c)}t._authCredentials=new kw(new Lf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class An{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class $t extends An{constructor(e,n,s){super(e,n,tc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new R(e))}withConverter(e){return new $t(this.firestore,e,this._path)}}function iT(t,e,...n){if(t=tt(t),Md("collection","path",e),t instanceof Li){const s=oe.fromString(e,...n);return hu(s),new $t(t,null,s)}{if(!(t instanceof je||t instanceof $t))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return hu(s),new $t(t.firestore,null,s)}}function ra(t,e,...n){if(t=tt(t),arguments.length===1&&(e=Ff.R()),Md("doc","path",e),t instanceof Li){const s=oe.fromString(e,...n);return uu(s),new je(t,null,new R(s))}{if(!(t instanceof je||t instanceof $t))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return uu(s),new je(t.firestore,t instanceof $t?t.converter:null,new R(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=xe.UNAUTHENTICATED,this.clientId=Ff.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=pc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cT(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await yd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uT(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ou(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ou(e.remoteStore,i)),t.onlineComponents=e}async function uT(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await cT(t,new tT)),t.offlineComponents}async function Ld(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await lT(t,new nT)),t.onlineComponents}function hT(t){return Ld(t).then(e=>e.syncEngine)}async function pu(t){const e=await Ld(t),n=e.eventManager;return n.onListen=jE.bind(null,e.syncEngine),n.onUnlisten=KE.bind(null,e.syncEngine),n}class fT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new wd(this,"async_queue_retry"),this.Wc=()=>{const n=ho();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ho();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ho();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new mn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Js(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=dc.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&F()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function gu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Xn extends Li{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}}function dT(t,e){const n=typeof t=="object"?t:xh(),s=typeof t=="string"?t:e||"(default)",r=Bs(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=fy("firestore");i&&rT(r,...i)}return r}function Fd(t){return t._firestoreClient||Pd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Hw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(Pe.fromBase64String(e))}catch(n){throw new D(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jn(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=/^__.*__$/;class gT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zs(e,this.data,n,this.fieldTransforms)}}class Vd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ud(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class wc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Qr(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ud(this.sa)&&pT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ki(e)}da(e,n,s,r=!1){return new wc({sa:e,methodName:n,fa:s,path:Re.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ec(t){const e=t._freezeSettings(),n=ki(t._databaseId);return new mT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Tc("Data must be an object, but it was:",o,s);const a=$d(s,o);let c,l;if(i.merge)c=new Ze(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=ia(e,f,n);if(!o.contains(p))throw new D(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qd(u,p)||u.push(p)}c=new Ze(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new gT(new qe(a),c,l)}class Pi extends yc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pi}}function vT(t,e,n,s){const r=t.da(1,e,n);Tc("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();_n(s,(c,l)=>{const u=bc(e,c,n);l=tt(l);const f=r.ca(u);if(l instanceof Pi)i.push(u);else{const p=sr(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new Ze(i);return new Vd(o,a,r.fieldTransforms)}function wT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[ia(e,s,n)],c=[r];if(i.length%2!=0)throw new D(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(ia(e,i[p])),c.push(i[p+1]);const l=[],u=qe.empty();for(let p=a.length-1;p>=0;--p)if(!qd(l,a[p])){const g=a[p];let C=c[p];C=tt(C);const b=o.ca(g);if(C instanceof Pi)l.push(g);else{const L=sr(C,b);L!=null&&(l.push(g),u.set(g,L))}}const f=new Ze(l);return new Vd(u,f,o.fieldTransforms)}function ET(t,e,n,s=!1){return sr(n,t.da(s?4:3,e))}function sr(t,e){if(Bd(t=tt(t)))return Tc("Unsupported field value:",e,t),$d(t,e);if(t instanceof yc)return function(n,s){if(!Ud(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=sr(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return c0(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ye.fromDate(n);return{timestampValue:Gr(s.yt,r)}}if(n instanceof ye){const r=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gr(s.yt,r)}}if(n instanceof vc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jn)return{bytesValue:hd(s.yt,n._byteString)};if(n instanceof je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ic(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Mi(n)}`)}(t,e)}function $d(t,e){const n={};return Pf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(t,(s,r)=>{const i=sr(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Bd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof vc||t instanceof Jn||t instanceof je||t instanceof yc)}function Tc(t,e,n){if(!Bd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Mi(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function ia(t,e,n){if((e=tt(e))instanceof Fi)return e._internalPath;if(typeof e=="string")return bc(t,e);throw Qr("Field path arguments must be of type string or ",t,!1,void 0,n)}const TT=new RegExp("[~\\*/\\[\\]]");function bc(t,e,n){if(e.search(TT)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fi(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(y.INVALID_ARGUMENT,a+t+c)}function qd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bT extends jd{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?bc(t,e):e instanceof Fi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _c{}class Hd extends _c{}function _T(t,e,...n){let s=[];e instanceof _c&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ac).length,o=r.filter(a=>a instanceof Cc).length;if(i>1||i>0&&o>0)throw new D(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Cc extends Hd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Cc(e,n,s)}_apply(e){const n=this._parse(e);return Kd(e._query,n),new An(e.firestore,e.converter,Yo(e._query,n))}_parse(e){const n=Ec(e.firestore);return function(r,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){yu(u,l);const p=[];for(const g of u)p.push(mu(a,r,g));f={arrayValue:{values:p}}}else f=mu(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||yu(u,l),f=ET(o,i,u,l==="in"||l==="not-in");return me.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ac extends _c{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ac(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ct.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Kd(i,a),i=Yo(i,a)}(e._query,n),new An(e.firestore,e.converter,Yo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sc extends Hd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vn(r,i);return function(a,c){if(nc(a)===null){const l=Ai(a);l!==null&&zd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new An(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new is(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function CT(t,e="asc"){const n=e,s=Ic("orderBy",t);return Sc._create(s,n)}function mu(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new D(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gf(e)&&n.indexOf("/")!==-1)throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!R.isDocumentKey(s))throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Bl(t,new R(s))}if(n instanceof je)return Bl(t,n._key);throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mi(n)}.`)}function yu(t,e){if(!Array.isArray(t)||t.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(y.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Kd(t,e){if(e.isInequality()){const s=Ai(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new D(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=nc(t);i!==null&&zd(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function zd(t,e,n){if(!n.isEqual(e))throw new D(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class AT{convertValue(e,n="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const s={};return _n(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new vc(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Uf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ps(e));default:return null}}convertTimestamp(e){const n=Kt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);re(md(s));const r=new Fs(s.get(1),s.get(3)),i=new R(s.popFirst(5));return r.isEqual(n)||Dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gd extends jd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ic("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ar extends Gd{data(e={}){return super.data(e)}}class DT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new gs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ar(this._firestore,this._userDataWriter,s.key,s,new gs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:xT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class Wd extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function NT(t,e,n,...s){t=Ut(t,je);const r=Ut(t.firestore,Xn),i=Ec(r);let o;return o=typeof(e=tt(e))=="string"||e instanceof Fi?wT(i,"updateDoc",t._key,e,n,s):vT(i,"updateDoc",t._key,e),Dc(r,[o.toMutation(t._key,at.exists(!0))])}function kT(t){return Dc(Ut(t.firestore,Xn),[new rc(t._key,at.none())])}function RT(t,e){const n=Ut(t.firestore,Xn),s=ra(t),r=ST(t.converter,e);return Dc(n,[yT(Ec(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then(()=>s)}function OT(t,...e){var n,s,r;t=tt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(gu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof je)l=Ut(t.firestore,Xn),u=tc(t._key.path),c={next:f=>{e[o]&&e[o](MT(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ut(t,An);l=Ut(f.firestore,Xn),u=f._query;const p=new Wd(l);c={next:g=>{e[o]&&e[o](new DT(l,p,f,g))},error:e[o+1],complete:e[o+2]},IT(t._query)}return function(f,p,g,C){const b=new oT(C),L=new VE(p,b,g);return f.asyncQueue.enqueueAndForget(async()=>ME(await pu(f),L)),()=>{b.bc(),f.asyncQueue.enqueueAndForget(async()=>LE(await pu(f),L))}}(Fd(l),u,a,c)}function Dc(t,e){return function(n,s){const r=new mn;return n.asyncQueue.enqueueAndForget(async()=>zE(await hT(n),s,r)),r.promise}(Fd(t),e)}function MT(t,e,n){const s=n.docs.get(e._key),r=new Wd(t);return new Gd(t,r,e._key,s,new gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){rs=n})(vv),jt(new At("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xn(new Rw(n.getProvider("auth-internal")),new Fw(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),yt(Pl,"3.8.0",t),yt(Pl,"3.8.0","esm2017")})();var LT="firebase",FT="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(LT,FT,"app");const Qd="@firebase/installations",xc="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=1e4,Xd=`w:${xc}`,Jd="FIS_v2",PT="https://firebaseinstallations.googleapis.com/v1",VT=60*60*1e3,UT="installations",$T="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Tn=new li(UT,$T,BT);function Zd(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep({projectId:t}){return`${PT}/projects/${t}/installations`}function tp(t){return{token:t.token,requestStatus:2,expiresIn:jT(t.expiresIn),creationTime:Date.now()}}async function np(t,e){const s=(await e.json()).error;return Tn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qT(t,{refreshToken:e}){const n=sp(t);return n.append("Authorization",HT(e)),n}async function rp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jT(t){return Number(t.replace("s","000"))}function HT(t){return`${Jd} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ep(t),r=sp(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Jd,appId:t.appId,sdkVersion:Xd},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rp(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:tp(l.authToken)}}else throw await np("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^[cdef][\w-]{21}$/,oa="";function WT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QT(t);return GT.test(n)?n:oa}catch{return oa}}function QT(t){return zT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;function ap(t,e){const n=Vi(t);cp(n,e),YT(n,e)}function cp(t,e){const n=op.get(t);if(!!n)for(const s of n)s(e)}function YT(t,e){const n=XT();n&&n.postMessage({key:t,fid:e}),JT()}let hn=null;function XT(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=t=>{cp(t.data.key,t.data.fid)}),hn}function JT(){op.size===0&&hn&&(hn.close(),hn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firebase-installations-database",eb=1,bn="firebase-installations-store";let fo=null;function Nc(){return fo||(fo=Sh(ZT,eb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bn)}}})),fo}async function Yr(t,e){const n=Vi(t),r=(await Nc()).transaction(bn,"readwrite"),i=r.objectStore(bn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&ap(t,e.fid),e}async function lp(t){const e=Vi(t),s=(await Nc()).transaction(bn,"readwrite");await s.objectStore(bn).delete(e),await s.done}async function Ui(t,e){const n=Vi(t),r=(await Nc()).transaction(bn,"readwrite"),i=r.objectStore(bn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&ap(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t){let e;const n=await Ui(t.appConfig,s=>{const r=tb(s),i=nb(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===oa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tb(t){const e=t||{fid:WT(),registrationStatus:0};return up(e)}function nb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Tn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sb(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rb(t)}:{installationEntry:e}}async function sb(t,e){try{const n=await KT(t,e);return Yr(t.appConfig,n)}catch(n){throw Zd(n)&&n.customData.serverCode===409?await lp(t.appConfig):await Yr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rb(t){let e=await vu(t.appConfig);for(;e.registrationStatus===1;)await ip(100),e=await vu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await kc(t);return s||n}return e}function vu(t){return Ui(t,e=>{if(!e)throw Tn.create("installation-not-found");return up(e)})}function up(t){return ib(t)?{fid:t.fid,registrationStatus:0}:t}function ib(t){return t.registrationStatus===1&&t.registrationTime+Yd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob({appConfig:t,heartbeatServiceProvider:e},n){const s=ab(t,n),r=qT(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xd,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rp(()=>fetch(s,a));if(c.ok){const l=await c.json();return tp(l)}else throw await np("Generate Auth Token",c)}function ab(t,{fid:e}){return`${ep(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(t,e=!1){let n;const s=await Ui(t.appConfig,i=>{if(!hp(i))throw Tn.create("not-registered");const o=i.authToken;if(!e&&ub(o))return i;if(o.requestStatus===1)return n=cb(t,e),i;{if(!navigator.onLine)throw Tn.create("app-offline");const a=fb(i);return n=lb(t,a),a}});return n?await n:s.authToken}async function cb(t,e){let n=await wu(t.appConfig);for(;n.authToken.requestStatus===1;)await ip(100),n=await wu(t.appConfig);const s=n.authToken;return s.requestStatus===0?Rc(t,e):s}function wu(t){return Ui(t,e=>{if(!hp(e))throw Tn.create("not-registered");const n=e.authToken;return db(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lb(t,e){try{const n=await ob(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Yr(t.appConfig,s),n}catch(n){if(Zd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yr(t.appConfig,s)}throw n}}function hp(t){return t!==void 0&&t.registrationStatus===2}function ub(t){return t.requestStatus===2&&!hb(t)}function hb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+VT}function fb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function db(t){return t.requestStatus===1&&t.requestTime+Yd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t){const e=t,{installationEntry:n,registrationPromise:s}=await kc(e);return s?s.catch(console.error):Rc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e=!1){const n=t;return await mb(n),(await Rc(n,e)).token}async function mb(t){const{registrationPromise:e}=await kc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){if(!t||!t.options)throw po("App Configuration");if(!t.name)throw po("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw po(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function po(t){return Tn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="installations",vb="installations-internal",wb=t=>{const e=t.getProvider("app").getImmediate(),n=yb(e),s=Bs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Eb=t=>{const e=t.getProvider("app").getImmediate(),n=Bs(e,fp).getImmediate();return{getId:()=>pb(n),getToken:r=>gb(n,r)}};function Tb(){jt(new At(fp,wb,"PUBLIC")),jt(new At(vb,Eb,"PRIVATE"))}Tb();yt(Qd,xc);yt(Qd,xc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="analytics",bb="firebase_id",Ib="origin",_b=60*1e3,Cb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Sa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ab(t,e){const n=document.createElement("script");n.src=`${dp}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Sb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Db(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await pp(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ze.error(a)}t("config",r,i)}async function xb(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await pp(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ze.error(i)}}function Nb(t,e,n,s){async function r(i,o,a){try{i==="event"?await xb(t,e,n,o,a):i==="config"?await Db(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){ze.error(c)}}return r}function kb(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Nb(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Rb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},et=new li("analytics","Analytics",Ob);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=30,Lb=1e3;class Fb{constructor(e={},n=Lb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gp=new Fb;function Pb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Vb(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Pb(s)},i=Cb.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Ub(t,e=gp,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw et.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw et.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qb;return setTimeout(async()=>{a.abort()},n!==void 0?n:_b),mp({appId:s,apiKey:r,measurementId:i},o,a,e)}async function mp(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=gp){var i;const{appId:o,measurementId:a}=t;try{await $b(s,e)}catch(c){if(a)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Vb(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Bb(l)){if(r.deleteThrottleMetadata(o),a)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ml(n,r.intervalMillis,Mb):ml(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),ze.debug(`Calling attemptFetch again in ${u} millis`),mp(t,f,s,r)}}function $b(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bb(t){if(!(t instanceof Gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jb(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(){if(bh())try{await Ih()}catch(t){return ze.warn(et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ze.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kb(t,e,n,s,r,i,o){var a;const c=Ub(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ze.error(g)),e.push(c);const l=Hb().then(g=>{if(g)return s.getId()}),[u,f]=await Promise.all([c,l]);Rb(i)||Ab(i,u.measurementId),r("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Ib]="firebase",p.update=!0,f!=null&&(p[bb]=f),r("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.app=e}_delete(){return delete bs[this.app.options.appId],Promise.resolve()}}let bs={},Eu=[];const Tu={};let go="dataLayer",Gb="gtag",bu,yp,Iu=!1;function Wb(){const t=[];if(iy()&&t.push("This is a browser extension environment."),oy()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}function Qb(t,e,n){Wb();const s=t.options.appId;if(!s)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(bs[s]!=null)throw et.create("already-exists",{id:s});if(!Iu){Sb(go);const{wrappedGtag:i,gtagCore:o}=kb(bs,Eu,Tu,go,Gb);yp=i,bu=o,Iu=!0}return bs[s]=Kb(t,Eu,Tu,e,bu,go,n),new zb(t)}function Yb(t=xh()){t=tt(t);const e=Bs(t,Xr);return e.isInitialized()?e.getImmediate():Xb(t)}function Xb(t,e={}){const n=Bs(t,Xr);if(n.isInitialized()){const r=n.getImmediate();if(Or(e,n.getOptions()))return r;throw et.create("already-initialized")}return n.initialize({options:e})}function Jb(t,e,n,s){t=tt(t),jb(yp,bs[t.app.options.appId],e,n,s).catch(r=>ze.error(r))}const _u="@firebase/analytics",Cu="0.9.0";function Zb(){jt(new At(Xr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Qb(s,r,n)},"PUBLIC")),jt(new At("analytics-internal",t,"PRIVATE")),yt(_u,Cu),yt(_u,Cu,"esm2017");function t(e){try{const n=e.getProvider(Xr).getImmediate();return{logEvent:(s,r,i)=>Jb(n,s,r,i)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}Zb();const eI={apiKey:"AIzaSyA5TbIsbOQ2s42KXXQAxzFkpo8NJArtiPE",authDomain:"todo-a1d02.firebaseapp.com",projectId:"todo-a1d02",storageBucket:"todo-a1d02.appspot.com",messagingSenderId:"583691435987",appId:"1:583691435987:web:43ff0f4fa5a7a9a9cf7926",measurementId:"G-MG2HM3WECD"},vp=Dh(eI);Yb(vp);const mo=dT(vp);const tI={class:"todo"},nI=_e("div",{class:"title has-text-centered"},"ToDo",-1),sI=["onSubmit"],rI={class:"field is-grouped mb-5"},iI={class:"control is-expanded"},oI={class:"control"},aI=["disabled"],cI={class:"card-content"},lI={class:"content"},uI={class:"columns is-vcentered"},hI={class:"column is-5 has-text-right"},fI=["onClick"],dI=["onClick"],pI={__name:"App",setup(t){const e=iT(mo,"todos"),n=_T(e,CT("date","desc")),s=Gc([]);Ia(()=>{OT(n,c=>{const l=[];c.forEach(u=>{const f={id:u.id,content:u.data().content,done:u.data().done};l.push(f)}),s.value=l})});const r=Gc(""),i=()=>{RT(e,{content:r.value,done:!1,date:Date.now()}),r.value=""},o=async c=>{s.value=s.value.filter(l=>l.id!==c),await kT(ra(mo,"todos",c))},a=c=>{NT(ra(mo,"todos",c),{done:!s.value.find(l=>l.id===c).done})};return(c,l)=>(Wi(),Qi(Ye,null,[_e("div",tI,[nI,_e("form",{onSubmit:Xm(i,["prevent"])},[_e("div",rI,[_e("p",iI,[Hg(_e("input",{class:"input",type:"text",placeholder:"Add a todo","onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u)},null,512),[[Wm,r.value]])]),_e("p",oI,[_e("button",{class:"button is-info",disabled:!r.value}," Add ",8,aI)])])],40,sI)]),(Wi(!0),Qi(Ye,null,zg(s.value,u=>(Wi(),Qi("div",{class:On(["card mb-5",{"has-background-success-light":u.done}])},[_e("div",cI,[_e("div",lI,[_e("div",uI,[_e("div",{class:On(["column",{"has-text-success line-through":u.done}])},Sp(u.content),3),_e("div",hI,[_e("button",{onClick:f=>a(u.id),class:On(["button",u.done?"is-success":"is-light"])}," \u2713 ",10,fI),_e("button",{class:"button is-danger ml-2",onClick:f=>o(u.id)}," \u2717 ",8,dI)])])])])],2))),256))],64))}};ey(pI).mount("#app");

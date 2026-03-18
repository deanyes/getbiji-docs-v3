(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))f(A);new MutationObserver(A=>{for(const D of A)if(D.type==="childList")for(const B of D.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&f(B)}).observe(document,{childList:!0,subtree:!0});function p(A){const D={};return A.integrity&&(D.integrity=A.integrity),A.referrerPolicy&&(D.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?D.credentials="include":A.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function f(A){if(A.ep)return;A.ep=!0;const D=p(A);fetch(A.href,D)}})();function Sm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qo={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Am(){if(Ld)return ai;Ld=1;var r=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function p(f,A,D){var B=null;if(D!==void 0&&(B=""+D),A.key!==void 0&&(B=""+A.key),"key"in A){D={};for(var G in A)G!=="key"&&(D[G]=A[G])}else D=A;return A=D.ref,{$$typeof:r,type:f,key:B,ref:A!==void 0?A:null,props:D}}return ai.Fragment=T,ai.jsx=p,ai.jsxs=p,ai}var Yd;function Em(){return Yd||(Yd=1,qo.exports=Am()),qo.exports}var o=Em(),Lo={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Tm(){if(kd)return nn;kd=1;var r=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),B=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),F=Symbol.iterator;function J(g){return g===null||typeof g!="object"?null:(g=F&&g[F]||g["@@iterator"],typeof g=="function"?g:null)}var yn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tn=Object.assign,cn={};function O(g,j,N){this.props=g,this.context=j,this.refs=cn,this.updater=N||yn}O.prototype.isReactComponent={},O.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},O.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Y(){}Y.prototype=O.prototype;function Z(g,j,N){this.props=g,this.context=j,this.refs=cn,this.updater=N||yn}var L=Z.prototype=new Y;L.constructor=Z,tn(L,O.prototype),L.isPureReactComponent=!0;var hn=Array.isArray;function En(){}var w={H:null,A:null,T:null,S:null},Cn=Object.prototype.hasOwnProperty;function In(g,j,N){var k=N.ref;return{$$typeof:r,type:g,key:j,ref:k!==void 0?k:null,props:N}}function _n(g,j){return In(g.type,j,g.props)}function Wn(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Gn(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(N){return j[N]})}var Dt=/\/+/g;function on(g,j){return typeof g=="object"&&g!==null&&g.key!=null?Gn(""+g.key):j.toString(36)}function yt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(En,En):(g.status="pending",g.then(function(j){g.status==="pending"&&(g.status="fulfilled",g.value=j)},function(j){g.status==="pending"&&(g.status="rejected",g.reason=j)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function E(g,j,N,k,$){var an=typeof g;(an==="undefined"||an==="boolean")&&(g=null);var bn=!1;if(g===null)bn=!0;else switch(an){case"bigint":case"string":case"number":bn=!0;break;case"object":switch(g.$$typeof){case r:case T:bn=!0;break;case V:return bn=g._init,E(bn(g._payload),j,N,k,$)}}if(bn)return $=$(g),bn=k===""?"."+on(g,0):k,hn($)?(N="",bn!=null&&(N=bn.replace(Dt,"$&/")+"/"),E($,j,N,"",function(Ze){return Ze})):$!=null&&(Wn($)&&($=_n($,N+($.key==null||g&&g.key===$.key?"":(""+$.key).replace(Dt,"$&/")+"/")+bn)),j.push($)),1;bn=0;var Pn=k===""?".":k+":";if(hn(g))for(var wn=0;wn<g.length;wn++)k=g[wn],an=Pn+on(k,wn),bn+=E(k,j,N,an,$);else if(wn=J(g),typeof wn=="function")for(g=wn.call(g),wn=0;!(k=g.next()).done;)k=k.value,an=Pn+on(k,wn++),bn+=E(k,j,N,an,$);else if(an==="object"){if(typeof g.then=="function")return E(yt(g),j,N,k,$);throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return bn}function U(g,j,N){if(g==null)return g;var k=[],$=0;return E(g,k,"","",function(an){return j.call(N,an,$++)}),k}function I(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(N){(g._status===0||g._status===-1)&&(g._status=1,g._result=N)},function(N){(g._status===0||g._status===-1)&&(g._status=2,g._result=N)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var fn=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Tn={map:U,forEach:function(g,j,N){U(g,function(){j.apply(this,arguments)},N)},count:function(g){var j=0;return U(g,function(){j++}),j},toArray:function(g){return U(g,function(j){return j})||[]},only:function(g){if(!Wn(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return nn.Activity=C,nn.Children=Tn,nn.Component=O,nn.Fragment=p,nn.Profiler=A,nn.PureComponent=Z,nn.StrictMode=f,nn.Suspense=R,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,nn.__COMPILER_RUNTIME={__proto__:null,c:function(g){return w.H.useMemoCache(g)}},nn.cache=function(g){return function(){return g.apply(null,arguments)}},nn.cacheSignal=function(){return null},nn.cloneElement=function(g,j,N){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var k=tn({},g.props),$=g.key;if(j!=null)for(an in j.key!==void 0&&($=""+j.key),j)!Cn.call(j,an)||an==="key"||an==="__self"||an==="__source"||an==="ref"&&j.ref===void 0||(k[an]=j[an]);var an=arguments.length-2;if(an===1)k.children=N;else if(1<an){for(var bn=Array(an),Pn=0;Pn<an;Pn++)bn[Pn]=arguments[Pn+2];k.children=bn}return In(g.type,$,k)},nn.createContext=function(g){return g={$$typeof:B,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:D,_context:g},g},nn.createElement=function(g,j,N){var k,$={},an=null;if(j!=null)for(k in j.key!==void 0&&(an=""+j.key),j)Cn.call(j,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&($[k]=j[k]);var bn=arguments.length-2;if(bn===1)$.children=N;else if(1<bn){for(var Pn=Array(bn),wn=0;wn<bn;wn++)Pn[wn]=arguments[wn+2];$.children=Pn}if(g&&g.defaultProps)for(k in bn=g.defaultProps,bn)$[k]===void 0&&($[k]=bn[k]);return In(g,an,$)},nn.createRef=function(){return{current:null}},nn.forwardRef=function(g){return{$$typeof:G,render:g}},nn.isValidElement=Wn,nn.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:I}},nn.memo=function(g,j){return{$$typeof:x,type:g,compare:j===void 0?null:j}},nn.startTransition=function(g){var j=w.T,N={};w.T=N;try{var k=g(),$=w.S;$!==null&&$(N,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(En,fn)}catch(an){fn(an)}finally{j!==null&&N.types!==null&&(j.types=N.types),w.T=j}},nn.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},nn.use=function(g){return w.H.use(g)},nn.useActionState=function(g,j,N){return w.H.useActionState(g,j,N)},nn.useCallback=function(g,j){return w.H.useCallback(g,j)},nn.useContext=function(g){return w.H.useContext(g)},nn.useDebugValue=function(){},nn.useDeferredValue=function(g,j){return w.H.useDeferredValue(g,j)},nn.useEffect=function(g,j){return w.H.useEffect(g,j)},nn.useEffectEvent=function(g){return w.H.useEffectEvent(g)},nn.useId=function(){return w.H.useId()},nn.useImperativeHandle=function(g,j,N){return w.H.useImperativeHandle(g,j,N)},nn.useInsertionEffect=function(g,j){return w.H.useInsertionEffect(g,j)},nn.useLayoutEffect=function(g,j){return w.H.useLayoutEffect(g,j)},nn.useMemo=function(g,j){return w.H.useMemo(g,j)},nn.useOptimistic=function(g,j){return w.H.useOptimistic(g,j)},nn.useReducer=function(g,j,N){return w.H.useReducer(g,j,N)},nn.useRef=function(g){return w.H.useRef(g)},nn.useState=function(g){return w.H.useState(g)},nn.useSyncExternalStore=function(g,j,N){return w.H.useSyncExternalStore(g,j,N)},nn.useTransition=function(){return w.H.useTransition()},nn.version="19.2.4",nn}var Qd;function Jo(){return Qd||(Qd=1,Lo.exports=Tm()),Lo.exports}var H=Jo();const i0=Sm(H);var Yo={exports:{}},ii={},ko={exports:{}},Qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function zm(){return Xd||(Xd=1,(function(r){function T(E,U){var I=E.length;E.push(U);n:for(;0<I;){var fn=I-1>>>1,Tn=E[fn];if(0<A(Tn,U))E[fn]=U,E[I]=Tn,I=fn;else break n}}function p(E){return E.length===0?null:E[0]}function f(E){if(E.length===0)return null;var U=E[0],I=E.pop();if(I!==U){E[0]=I;n:for(var fn=0,Tn=E.length,g=Tn>>>1;fn<g;){var j=2*(fn+1)-1,N=E[j],k=j+1,$=E[k];if(0>A(N,I))k<Tn&&0>A($,N)?(E[fn]=$,E[k]=I,fn=k):(E[fn]=N,E[j]=I,fn=j);else if(k<Tn&&0>A($,I))E[fn]=$,E[k]=I,fn=k;else break n}}return U}function A(E,U){var I=E.sortIndex-U.sortIndex;return I!==0?I:E.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;r.unstable_now=function(){return D.now()}}else{var B=Date,G=B.now();r.unstable_now=function(){return B.now()-G}}var R=[],x=[],V=1,C=null,F=3,J=!1,yn=!1,tn=!1,cn=!1,O=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function L(E){for(var U=p(x);U!==null;){if(U.callback===null)f(x);else if(U.startTime<=E)f(x),U.sortIndex=U.expirationTime,T(R,U);else break;U=p(x)}}function hn(E){if(tn=!1,L(E),!yn)if(p(R)!==null)yn=!0,En||(En=!0,Gn());else{var U=p(x);U!==null&&yt(hn,U.startTime-E)}}var En=!1,w=-1,Cn=5,In=-1;function _n(){return cn?!0:!(r.unstable_now()-In<Cn)}function Wn(){if(cn=!1,En){var E=r.unstable_now();In=E;var U=!0;try{n:{yn=!1,tn&&(tn=!1,Y(w),w=-1),J=!0;var I=F;try{t:{for(L(E),C=p(R);C!==null&&!(C.expirationTime>E&&_n());){var fn=C.callback;if(typeof fn=="function"){C.callback=null,F=C.priorityLevel;var Tn=fn(C.expirationTime<=E);if(E=r.unstable_now(),typeof Tn=="function"){C.callback=Tn,L(E),U=!0;break t}C===p(R)&&f(R),L(E)}else f(R);C=p(R)}if(C!==null)U=!0;else{var g=p(x);g!==null&&yt(hn,g.startTime-E),U=!1}}break n}finally{C=null,F=I,J=!1}U=void 0}}finally{U?Gn():En=!1}}}var Gn;if(typeof Z=="function")Gn=function(){Z(Wn)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,on=Dt.port2;Dt.port1.onmessage=Wn,Gn=function(){on.postMessage(null)}}else Gn=function(){O(Wn,0)};function yt(E,U){w=O(function(){E(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(E){E.callback=null},r.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Cn=0<E?Math.floor(1e3/E):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(E){switch(F){case 1:case 2:case 3:var U=3;break;default:U=F}var I=F;F=U;try{return E()}finally{F=I}},r.unstable_requestPaint=function(){cn=!0},r.unstable_runWithPriority=function(E,U){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=F;F=E;try{return U()}finally{F=I}},r.unstable_scheduleCallback=function(E,U,I){var fn=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?fn+I:fn):I=fn,E){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=I+Tn,E={id:V++,callback:U,priorityLevel:E,startTime:I,expirationTime:Tn,sortIndex:-1},I>fn?(E.sortIndex=I,T(x,E),p(R)===null&&E===p(x)&&(tn?(Y(w),w=-1):tn=!0,yt(hn,I-fn))):(E.sortIndex=Tn,T(R,E),yn||J||(yn=!0,En||(En=!0,Gn()))),E},r.unstable_shouldYield=_n,r.unstable_wrapCallback=function(E){var U=F;return function(){var I=F;F=U;try{return E.apply(this,arguments)}finally{F=I}}}})(Qo)),Qo}var Vd;function Mm(){return Vd||(Vd=1,ko.exports=zm()),ko.exports}var Xo={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function _m(){if(Zd)return st;Zd=1;var r=Jo();function T(R){var x="https://react.dev/errors/"+R;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)x+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+R+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var f={d:{f:p,r:function(){throw Error(T(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},A=Symbol.for("react.portal");function D(R,x,V){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:C==null?null:""+C,children:R,containerInfo:x,implementation:V}}var B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(R,x){if(R==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,st.createPortal=function(R,x){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(T(299));return D(R,x,null,V)},st.flushSync=function(R){var x=B.T,V=f.p;try{if(B.T=null,f.p=2,R)return R()}finally{B.T=x,f.p=V,f.d.f()}},st.preconnect=function(R,x){typeof R=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,f.d.C(R,x))},st.prefetchDNS=function(R){typeof R=="string"&&f.d.D(R)},st.preinit=function(R,x){if(typeof R=="string"&&x&&typeof x.as=="string"){var V=x.as,C=G(V,x.crossOrigin),F=typeof x.integrity=="string"?x.integrity:void 0,J=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;V==="style"?f.d.S(R,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:C,integrity:F,fetchPriority:J}):V==="script"&&f.d.X(R,{crossOrigin:C,integrity:F,fetchPriority:J,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},st.preinitModule=function(R,x){if(typeof R=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var V=G(x.as,x.crossOrigin);f.d.M(R,{crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&f.d.M(R)},st.preload=function(R,x){if(typeof R=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var V=x.as,C=G(V,x.crossOrigin);f.d.L(R,V,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},st.preloadModule=function(R,x){if(typeof R=="string")if(x){var V=G(x.as,x.crossOrigin);f.d.m(R,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else f.d.m(R)},st.requestFormReset=function(R){f.d.r(R)},st.unstable_batchedUpdates=function(R,x){return R(x)},st.useFormState=function(R,x,V){return B.H.useFormState(R,x,V)},st.useFormStatus=function(){return B.H.useHostTransitionStatus()},st.version="19.2.4",st}var Kd;function jm(){if(Kd)return Xo.exports;Kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(T){console.error(T)}}return r(),Xo.exports=_m(),Xo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Dm(){if(Jd)return ii;Jd=1;var r=Mm(),T=Jo(),p=jm();function f(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function D(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function B(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function G(n){if(n.tag===31){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function R(n){if(D(n)!==n)throw Error(f(188))}function x(n){var t=n.alternate;if(!t){if(t=D(n),t===null)throw Error(f(188));return t!==n?null:n}for(var e=n,l=t;;){var a=e.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){e=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===e)return R(a),n;if(i===l)return R(a),t;i=i.sibling}throw Error(f(188))}if(e.return!==l.return)e=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===e){u=!0,e=a,l=i;break}if(c===l){u=!0,l=a,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,l=a;break}if(c===l){u=!0,l=i,e=a;break}c=c.sibling}if(!u)throw Error(f(189))}}if(e.alternate!==l)throw Error(f(190))}if(e.tag!==3)throw Error(f(188));return e.stateNode.current===e?n:t}function V(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=V(n),t!==null)return t;n=n.sibling}return null}var C=Object.assign,F=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),yn=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),cn=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),hn=Symbol.for("react.suspense"),En=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),In=Symbol.for("react.activity"),_n=Symbol.for("react.memo_cache_sentinel"),Wn=Symbol.iterator;function Gn(n){return n===null||typeof n!="object"?null:(n=Wn&&n[Wn]||n["@@iterator"],typeof n=="function"?n:null)}var Dt=Symbol.for("react.client.reference");function on(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Dt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case tn:return"Fragment";case O:return"Profiler";case cn:return"StrictMode";case hn:return"Suspense";case En:return"SuspenseList";case In:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case yn:return"Portal";case Z:return n.displayName||"Context";case Y:return(n._context.displayName||"Context")+".Consumer";case L:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case w:return t=n.displayName||null,t!==null?t:on(n.type)||"Memo";case Cn:t=n._payload,n=n._init;try{return on(n(t))}catch{}}return null}var yt=Array.isArray,E=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},fn=[],Tn=-1;function g(n){return{current:n}}function j(n){0>Tn||(n.current=fn[Tn],fn[Tn]=null,Tn--)}function N(n,t){Tn++,fn[Tn]=n.current,n.current=t}var k=g(null),$=g(null),an=g(null),bn=g(null);function Pn(n,t){switch(N(an,t),N($,n),N(k,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?fd(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=fd(t),n=sd(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}j(k),N(k,n)}function wn(){j(k),j($),j(an)}function Ze(n){n.memoizedState!==null&&N(bn,n);var t=k.current,e=sd(t,n.type);t!==e&&(N($,n),N(k,e))}function Ke(n){$.current===n&&(j(k),j($)),bn.current===n&&(j(bn),ni._currentValue=I)}var ia,$t;function Yt(n){if(ia===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||"",$t=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+n+$t}var ml=!1;function pl(n,t){if(!n||ml)return"";ml=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(S){var y=S}Reflect.construct(n,[],_)}else{try{_.call()}catch(S){y=S}n.call(_.prototype)}}else{try{throw Error()}catch(S){y=S}(_=n())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),v=c.split(`
`);for(a=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;if(l===s.length||a===v.length)for(l=s.length-1,a=v.length-1;1<=l&&0<=a&&s[l]!==v[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==v[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==v[a]){var z=`
`+s[l].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=l&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?Yt(e):""}function Mu(n,t){switch(n.tag){case 26:case 27:case 5:return Yt(n.type);case 16:return Yt("Lazy");case 13:return n.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return pl(n.type,!1);case 11:return pl(n.type.render,!1);case 1:return pl(n.type,!0);case 31:return Yt("Activity");default:return""}}function ua(n){try{var t="",e=null;do t+=Mu(n,e),e=n,n=n.return;while(n);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hl=Object.prototype.hasOwnProperty,bl=r.unstable_scheduleCallback,nt=r.unstable_cancelCallback,ca=r.unstable_shouldYield,oa=r.unstable_requestPaint,kn=r.unstable_now,_u=r.unstable_getCurrentPriorityLevel,ju=r.unstable_ImmediatePriority,Je=r.unstable_UserBlockingPriority,Ot=r.unstable_NormalPriority,ci=r.unstable_LowPriority,vl=r.unstable_IdlePriority,fa=r.log,oi=r.unstable_setDisableYieldValue,Zt=null,tt=null;function xt(n){if(typeof fa=="function"&&oi(n),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Zt,n)}catch{}}var et=Math.clz32?Math.clz32:Ou,yl=Math.log,Du=Math.LN2;function Ou(n){return n>>>=0,n===0?32:31-(yl(n)/Du|0)|0}var Ie=256,dt=262144,ve=4194304;function Kt(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function We(n,t,e){var l=n.pendingLanes;if(l===0)return 0;var a=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=Kt(l):(u&=c,u!==0?a=Kt(u):e||(e=c&~n,e!==0&&(a=Kt(e))))):(c=l&~i,c!==0?a=Kt(c):u!==0?a=Kt(u):e||(e=l&~n,e!==0&&(a=Kt(e)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:a}function ye(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function fi(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sa(){var n=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),n}function xl(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function xe(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function si(n,t,e,l,a,i){var u=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var c=n.entanglements,s=n.expirationTimes,v=n.hiddenUpdates;for(e=u&~e;0<e;){var z=31-et(e),_=1<<z;c[z]=0,s[z]=-1;var y=v[z];if(y!==null)for(v[z]=null,z=0;z<y.length;z++){var S=y[z];S!==null&&(S.lane&=-536870913)}e&=~_}l!==0&&ra(n,l,0),i!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~t))}function ra(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var l=31-et(t);n.entangledLanes|=t,n.entanglements[l]=n.entanglements[l]|1073741824|e&261930}function da(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var l=31-et(e),a=1<<l;a&t|n[l]&t&&(n[l]|=t),e&=~a}}function ga(n,t){var e=t&-t;return e=(e&42)!==0?1:Sl(e),(e&(n.suspendedLanes|t))!==0?0:e}function Sl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Al(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ma(){var n=U.p;return n!==0?n:(n=window.event,n===void 0?32:Bd(n.type))}function pa(n,t){var e=U.p;try{return U.p=n,t()}finally{U.p=e}}var kt=Math.random().toString(36).slice(2),Qn="__reactFiber$"+kt,it="__reactProps$"+kt,Pt="__reactContainer$"+kt,h="__reactEvents$"+kt,q="__reactListeners$"+kt,P="__reactHandles$"+kt,mn="__reactResources$"+kt,vn="__reactMarker$"+kt;function Xn(n){delete n[Qn],delete n[it],delete n[h],delete n[q],delete n[P]}function Fn(n){var t=n[Qn];if(t)return t;for(var e=n.parentNode;e;){if(t=e[Pt]||e[Qn]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=bd(n);n!==null;){if(e=n[Qn])return e;n=bd(n)}return t}n=e,e=n.parentNode}return null}function Se(n){if(n=n[Qn]||n[Pt]){var t=n.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return n}return null}function ha(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(f(33))}function El(n){var t=n[mn];return t||(t=n[mn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(n){n[vn]=!0}var Wo=new Set,Fo={};function Fe(n,t){Tl(n,t),Tl(n+"Capture",t)}function Tl(n,t){for(Fo[n]=t,n=0;n<t.length;n++)Wo.add(t[n])}var d0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Po={};function g0(n){return hl.call(Po,n)?!0:hl.call($o,n)?!1:d0.test(n)?Po[n]=!0:($o[n]=!0,!1)}function ri(n,t,e){if(g0(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function di(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function ne(n,t,e,l){if(l===null)n.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+l)}}function Rt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nf(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m0(n,t,e){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,t);if(!n.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(n,t,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Ru(n){if(!n._valueTracker){var t=nf(n)?"checked":"value";n._valueTracker=m0(n,t,""+n[t])}}function tf(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),l="";return n&&(l=nf(n)?n.checked?"true":"false":n.value),n=l,n!==e?(t.setValue(n),!0):!1}function gi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var p0=/[\n"\\]/g;function Ct(n){return n.replace(p0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cu(n,t,e,l,a,i,u,c){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),t!=null?u==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+Rt(t)):n.value!==""+Rt(t)&&(n.value=""+Rt(t)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),t!=null?Bu(n,u,Rt(t)):e!=null?Bu(n,u,Rt(e)):l!=null&&n.removeAttribute("value"),a==null&&i!=null&&(n.defaultChecked=!!i),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Rt(c):n.removeAttribute("name")}function ef(n,t,e,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ru(n);return}e=e!=null?""+Rt(e):"",t=t!=null?""+Rt(t):e,c||t===n.value||(n.value=t),n.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=c?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u),Ru(n)}function Bu(n,t,e){t==="number"&&gi(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function zl(n,t,e,l){if(n=n.options,t){t={};for(var a=0;a<e.length;a++)t["$"+e[a]]=!0;for(e=0;e<n.length;e++)a=t.hasOwnProperty("$"+n[e].value),n[e].selected!==a&&(n[e].selected=a),a&&l&&(n[e].defaultSelected=!0)}else{for(e=""+Rt(e),t=null,a=0;a<n.length;a++){if(n[a].value===e){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}t!==null||n[a].disabled||(t=n[a])}t!==null&&(t.selected=!0)}}function lf(n,t,e){if(t!=null&&(t=""+Rt(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+Rt(e):""}function af(n,t,e,l){if(t==null){if(l!=null){if(e!=null)throw Error(f(92));if(yt(l)){if(1<l.length)throw Error(f(93));l=l[0]}e=l}e==null&&(e=""),t=e}e=Rt(t),n.defaultValue=e,l=n.textContent,l===e&&l!==""&&l!==null&&(n.value=l),Ru(n)}function Ml(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var h0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(n,t,e){var l=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":l?n.setProperty(t,e):typeof e!="number"||e===0||h0.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function cf(n,t,e){if(t!=null&&typeof t!="object")throw Error(f(62));if(n=n.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&e[a]!==l&&uf(n,a,l)}else for(var i in t)t.hasOwnProperty(i)&&uf(n,i,t[i])}function Uu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(n){return v0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function te(){}var Gu=null;function Hu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _l=null,jl=null;function of(n){var t=Se(n);if(t&&(n=t.stateNode)){var e=n[it]||null;n:switch(n=t.stateNode,t.type){case"input":if(Cu(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var l=e[t];if(l!==n&&l.form===n.form){var a=l[it]||null;if(!a)throw Error(f(90));Cu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<e.length;t++)l=e[t],l.form===n.form&&tf(l)}break n;case"textarea":lf(n,e.value,e.defaultValue);break n;case"select":t=e.value,t!=null&&zl(n,!!e.multiple,t,!1)}}}var wu=!1;function ff(n,t,e){if(wu)return n(t,e);wu=!0;try{var l=n(t);return l}finally{if(wu=!1,(_l!==null||jl!==null)&&(tu(),_l&&(t=_l,n=jl,jl=_l=null,of(t),n)))for(t=0;t<n.length;t++)of(n[t])}}function ba(n,t){var e=n.stateNode;if(e===null)return null;var l=e[it]||null;if(l===null)return null;e=l[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(f(231,t,typeof e));return e}var ee=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ee)try{var va={};Object.defineProperty(va,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Nu=!1}var Ae=null,qu=null,pi=null;function sf(){if(pi)return pi;var n,t=qu,e=t.length,l,a="value"in Ae?Ae.value:Ae.textContent,i=a.length;for(n=0;n<e&&t[n]===a[n];n++);var u=e-n;for(l=1;l<=u&&t[e-l]===a[i-l];l++);return pi=a.slice(n,1<l?1-l:void 0)}function hi(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function bi(){return!0}function rf(){return!1}function gt(n){function t(e,l,a,i,u){this._reactName=e,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(e=n[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:rf,this.isPropagationStopped=rf,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=gt($e),ya=C({},$e,{view:0,detail:0}),y0=gt(ya),Lu,Yu,xa,yi=C({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xa&&(xa&&n.type==="mousemove"?(Lu=n.screenX-xa.screenX,Yu=n.screenY-xa.screenY):Yu=Lu=0,xa=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Yu}}),df=gt(yi),x0=C({},yi,{dataTransfer:0}),S0=gt(x0),A0=C({},ya,{relatedTarget:0}),ku=gt(A0),E0=C({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=gt(E0),z0=C({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),M0=gt(z0),_0=C({},$e,{data:0}),gf=gt(_0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=O0[n])?!!t[n]:!1}function Qu(){return R0}var C0=C({},ya,{key:function(n){if(n.key){var t=j0[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?D0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(n){return n.type==="keypress"?hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),B0=gt(C0),U0=C({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=gt(U0),G0=C({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),H0=gt(G0),w0=C({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=gt(w0),q0=C({},yi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=gt(q0),Y0=C({},$e,{newState:0,oldState:0}),k0=gt(Y0),Q0=[9,13,27,32],Xu=ee&&"CompositionEvent"in window,Sa=null;ee&&"documentMode"in document&&(Sa=document.documentMode);var X0=ee&&"TextEvent"in window&&!Sa,pf=ee&&(!Xu||Sa&&8<Sa&&11>=Sa),hf=" ",bf=!1;function vf(n,t){switch(n){case"keyup":return Q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Dl=!1;function V0(n,t){switch(n){case"compositionend":return yf(t);case"keypress":return t.which!==32?null:(bf=!0,hf);case"textInput":return n=t.data,n===hf&&bf?null:n;default:return null}}function Z0(n,t){if(Dl)return n==="compositionend"||!Xu&&vf(n,t)?(n=sf(),pi=qu=Ae=null,Dl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!K0[n.type]:t==="textarea"}function Sf(n,t,e,l){_l?jl?jl.push(l):jl=[l]:_l=l,t=ou(t,"onChange"),0<t.length&&(e=new vi("onChange","change",null,e,l),n.push({event:e,listeners:t}))}var Aa=null,Ea=null;function J0(n){ld(n,0)}function xi(n){var t=ha(n);if(tf(t))return n}function Af(n,t){if(n==="change")return t}var Ef=!1;if(ee){var Vu;if(ee){var Zu="oninput"in document;if(!Zu){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Zu=typeof Tf.oninput=="function"}Vu=Zu}else Vu=!1;Ef=Vu&&(!document.documentMode||9<document.documentMode)}function zf(){Aa&&(Aa.detachEvent("onpropertychange",Mf),Ea=Aa=null)}function Mf(n){if(n.propertyName==="value"&&xi(Ea)){var t=[];Sf(t,Ea,n,Hu(n)),ff(J0,t)}}function I0(n,t,e){n==="focusin"?(zf(),Aa=t,Ea=e,Aa.attachEvent("onpropertychange",Mf)):n==="focusout"&&zf()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xi(Ea)}function F0(n,t){if(n==="click")return xi(t)}function $0(n,t){if(n==="input"||n==="change")return xi(t)}function P0(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var St=typeof Object.is=="function"?Object.is:P0;function Ta(n,t){if(St(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),l=Object.keys(t);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var a=e[l];if(!hl.call(t,a)||!St(n[a],t[a]))return!1}return!0}function _f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,t){var e=_f(n);n=0;for(var l;e;){if(e.nodeType===3){if(l=n+e.textContent.length,n<=t&&l>=t)return{node:e,offset:t-n};n=l}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=_f(e)}}function Df(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Df(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Of(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=gi(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=gi(n.document)}return t}function Ku(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var ng=ee&&"documentMode"in document&&11>=document.documentMode,Ol=null,Ju=null,za=null,Iu=!1;function Rf(n,t,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Iu||Ol==null||Ol!==gi(l)||(l=Ol,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),za&&Ta(za,l)||(za=l,l=ou(Ju,"onSelect"),0<l.length&&(t=new vi("onSelect","select",null,t,e),n.push({event:t,listeners:l}),t.target=Ol)))}function Pe(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var Rl={animationend:Pe("Animation","AnimationEnd"),animationiteration:Pe("Animation","AnimationIteration"),animationstart:Pe("Animation","AnimationStart"),transitionrun:Pe("Transition","TransitionRun"),transitionstart:Pe("Transition","TransitionStart"),transitioncancel:Pe("Transition","TransitionCancel"),transitionend:Pe("Transition","TransitionEnd")},Wu={},Cf={};ee&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function nl(n){if(Wu[n])return Wu[n];if(!Rl[n])return n;var t=Rl[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in Cf)return Wu[n]=t[e];return n}var Bf=nl("animationend"),Uf=nl("animationiteration"),Gf=nl("animationstart"),tg=nl("transitionrun"),eg=nl("transitionstart"),lg=nl("transitioncancel"),Hf=nl("transitionend"),wf=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Qt(n,t){wf.set(n,t),Fe(t,[n])}var Si=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Bt=[],Cl=0,$u=0;function Ai(){for(var n=Cl,t=$u=Cl=0;t<n;){var e=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var a=Bt[t];Bt[t++]=null;var i=Bt[t];if(Bt[t++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&Nf(e,a,i)}}function Ei(n,t,e,l){Bt[Cl++]=n,Bt[Cl++]=t,Bt[Cl++]=e,Bt[Cl++]=l,$u|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Pu(n,t,e,l){return Ei(n,t,e,l),Ti(n)}function tl(n,t){return Ei(n,null,null,t),Ti(n)}function Nf(n,t,e){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e);for(var a=!1,i=n.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(a=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,a&&t!==null&&(a=31-et(e),n=i.hiddenUpdates,l=n[a],l===null?n[a]=[t]:l.push(t),t.lane=e|536870912),i):null}function Ti(n){if(50<Ka)throw Ka=0,oo=null,Error(f(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var Bl={};function ag(n,t,e,l){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(n,t,e,l){return new ag(n,t,e,l)}function nc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function le(n,t){var e=n.alternate;return e===null?(e=At(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function qf(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function zi(n,t,e,l,a,i){var u=0;if(l=n,typeof n=="function")nc(n)&&(u=1);else if(typeof n=="string")u=fm(n,e,k.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case In:return n=At(31,e,t,a),n.elementType=In,n.lanes=i,n;case tn:return el(e.children,a,i,t);case cn:u=8,a|=24;break;case O:return n=At(12,e,t,a|2),n.elementType=O,n.lanes=i,n;case hn:return n=At(13,e,t,a),n.elementType=hn,n.lanes=i,n;case En:return n=At(19,e,t,a),n.elementType=En,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z:u=10;break n;case Y:u=9;break n;case L:u=11;break n;case w:u=14;break n;case Cn:u=16,l=null;break n}u=29,e=Error(f(130,n===null?"null":typeof n,"")),l=null}return t=At(u,e,t,a),t.elementType=n,t.type=l,t.lanes=i,t}function el(n,t,e,l){return n=At(7,n,l,t),n.lanes=e,n}function tc(n,t,e){return n=At(6,n,null,t),n.lanes=e,n}function Lf(n){var t=At(18,null,null,0);return t.stateNode=n,t}function ec(n,t,e){return t=At(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var Yf=new WeakMap;function Ut(n,t){if(typeof n=="object"&&n!==null){var e=Yf.get(n);return e!==void 0?e:(t={value:n,source:t,stack:ua(t)},Yf.set(n,t),t)}return{value:n,source:t,stack:ua(t)}}var Ul=[],Gl=0,Mi=null,Ma=0,Gt=[],Ht=0,Ee=null,Jt=1,It="";function ae(n,t){Ul[Gl++]=Ma,Ul[Gl++]=Mi,Mi=n,Ma=t}function kf(n,t,e){Gt[Ht++]=Jt,Gt[Ht++]=It,Gt[Ht++]=Ee,Ee=n;var l=Jt;n=It;var a=32-et(l)-1;l&=~(1<<a),e+=1;var i=32-et(t)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,Jt=1<<32-et(t)+a|e<<a|l,It=i+n}else Jt=1<<i|e<<a|l,It=n}function lc(n){n.return!==null&&(ae(n,1),kf(n,1,0))}function ac(n){for(;n===Mi;)Mi=Ul[--Gl],Ul[Gl]=null,Ma=Ul[--Gl],Ul[Gl]=null;for(;n===Ee;)Ee=Gt[--Ht],Gt[Ht]=null,It=Gt[--Ht],Gt[Ht]=null,Jt=Gt[--Ht],Gt[Ht]=null}function Qf(n,t){Gt[Ht++]=Jt,Gt[Ht++]=It,Gt[Ht++]=Ee,Jt=t.id,It=t.overflow,Ee=n}var ut=null,Bn=null,pn=!1,Te=null,wt=!1,ic=Error(f(519));function ze(n){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _a(Ut(t,n)),ic}function Xf(n){var t=n.stateNode,e=n.type,l=n.memoizedProps;switch(t[Qn]=n,t[it]=l,e){case"dialog":rn("cancel",t),rn("close",t);break;case"iframe":case"object":case"embed":rn("load",t);break;case"video":case"audio":for(e=0;e<Ia.length;e++)rn(Ia[e],t);break;case"source":rn("error",t);break;case"img":case"image":case"link":rn("error",t),rn("load",t);break;case"details":rn("toggle",t);break;case"input":rn("invalid",t),ef(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":rn("invalid",t);break;case"textarea":rn("invalid",t),af(t,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||l.suppressHydrationWarning===!0||cd(t.textContent,e)?(l.popover!=null&&(rn("beforetoggle",t),rn("toggle",t)),l.onScroll!=null&&rn("scroll",t),l.onScrollEnd!=null&&rn("scrollend",t),l.onClick!=null&&(t.onclick=te),t=!0):t=!1,t||ze(n,!0)}function Vf(n){for(ut=n.return;ut;)switch(ut.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:ut=ut.return}}function Hl(n){if(n!==ut)return!1;if(!pn)return Vf(n),pn=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||To(n.type,n.memoizedProps)),e=!e),e&&Bn&&ze(n),Vf(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));Bn=hd(n)}else if(t===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));Bn=hd(n)}else t===27?(t=Bn,qe(n.type)?(n=Do,Do=null,Bn=n):Bn=t):Bn=ut?qt(n.stateNode.nextSibling):null;return!0}function ll(){Bn=ut=null,pn=!1}function uc(){var n=Te;return n!==null&&(bt===null?bt=n:bt.push.apply(bt,n),Te=null),n}function _a(n){Te===null?Te=[n]:Te.push(n)}var cc=g(null),al=null,ie=null;function Me(n,t,e){N(cc,t._currentValue),t._currentValue=e}function ue(n){n._currentValue=cc.current,j(cc)}function oc(n,t,e){for(;n!==null;){var l=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),n===e)break;n=n.return}}function fc(n,t,e,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;n:for(;i!==null;){var c=i;i=a;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),oc(i.return,e,n),l||(u=null);break n}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(f(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),oc(u,e,n),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===n){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function wl(n,t,e,l){n=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=a.type;St(a.pendingProps.value,u.value)||(n!==null?n.push(c):n=[c])}}else if(a===bn.current){if(u=a.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(ni):n=[ni])}a=a.return}n!==null&&fc(t,n,e,l),t.flags|=262144}function _i(n){for(n=n.firstContext;n!==null;){if(!St(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function il(n){al=n,ie=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ct(n){return Zf(al,n)}function ji(n,t){return al===null&&il(n),Zf(n,t)}function Zf(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},ie===null){if(n===null)throw Error(f(308));ie=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else ie=ie.next=t;return e}var ig=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,l){n.push(l)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},ug=r.unstable_scheduleCallback,cg=r.unstable_NormalPriority,Vn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new ig,data:new Map,refCount:0}}function ja(n){n.refCount--,n.refCount===0&&ug(cg,function(){n.controller.abort()})}var Da=null,rc=0,Nl=0,ql=null;function og(n,t){if(Da===null){var e=Da=[];rc=0,Nl=po(),ql={status:"pending",value:void 0,then:function(l){e.push(l)}}}return rc++,t.then(Kf,Kf),t}function Kf(){if(--rc===0&&Da!==null){ql!==null&&(ql.status="fulfilled");var n=Da;Da=null,Nl=0,ql=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function fg(n,t){var e=[],l={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return n.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<e.length;a++)(0,e[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),l}var Jf=E.S;E.S=function(n,t){Rr=kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&og(n,t),Jf!==null&&Jf(n,t)};var ul=g(null);function dc(){var n=ul.current;return n!==null?n:Rn.pooledCache}function Di(n,t){t===null?N(ul,ul.current):N(ul,t.pool)}function If(){var n=dc();return n===null?null:{parent:Vn._currentValue,pool:n}}var Ll=Error(f(460)),gc=Error(f(474)),Oi=Error(f(542)),Ri={then:function(){}};function Wf(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ff(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(te,te),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Pf(n),n;default:if(typeof t.status=="string")t.then(te,te);else{if(n=Rn,n!==null&&100<n.shellSuspendCounter)throw Error(f(482));n=t,n.status="pending",n.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Pf(n),n}throw ol=t,Ll}}function cl(n){try{var t=n._init;return t(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(ol=e,Ll):e}}var ol=null;function $f(){if(ol===null)throw Error(f(459));var n=ol;return ol=null,n}function Pf(n){if(n===Ll||n===Oi)throw Error(f(483))}var Yl=null,Oa=0;function Ci(n){var t=Oa;return Oa+=1,Yl===null&&(Yl=[]),Ff(Yl,n,t)}function Ra(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function Bi(n,t){throw t.$$typeof===F?Error(f(525)):(n=Object.prototype.toString.call(t),Error(f(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function ns(n){function t(m,d){if(n){var b=m.deletions;b===null?(m.deletions=[d],m.flags|=16):b.push(d)}}function e(m,d){if(!n)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function l(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function a(m,d){return m=le(m,d),m.index=0,m.sibling=null,m}function i(m,d,b){return m.index=b,n?(b=m.alternate,b!==null?(b=b.index,b<d?(m.flags|=67108866,d):b):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function u(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function c(m,d,b,M){return d===null||d.tag!==6?(d=tc(b,m.mode,M),d.return=m,d):(d=a(d,b),d.return=m,d)}function s(m,d,b,M){var K=b.type;return K===tn?z(m,d,b.props.children,M,b.key):d!==null&&(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Cn&&cl(K)===d.type)?(d=a(d,b.props),Ra(d,b),d.return=m,d):(d=zi(b.type,b.key,b.props,null,m.mode,M),Ra(d,b),d.return=m,d)}function v(m,d,b,M){return d===null||d.tag!==4||d.stateNode.containerInfo!==b.containerInfo||d.stateNode.implementation!==b.implementation?(d=ec(b,m.mode,M),d.return=m,d):(d=a(d,b.children||[]),d.return=m,d)}function z(m,d,b,M,K){return d===null||d.tag!==7?(d=el(b,m.mode,M,K),d.return=m,d):(d=a(d,b),d.return=m,d)}function _(m,d,b){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=tc(""+d,m.mode,b),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case J:return b=zi(d.type,d.key,d.props,null,m.mode,b),Ra(b,d),b.return=m,b;case yn:return d=ec(d,m.mode,b),d.return=m,d;case Cn:return d=cl(d),_(m,d,b)}if(yt(d)||Gn(d))return d=el(d,m.mode,b,null),d.return=m,d;if(typeof d.then=="function")return _(m,Ci(d),b);if(d.$$typeof===Z)return _(m,ji(m,d),b);Bi(m,d)}return null}function y(m,d,b,M){var K=d!==null?d.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return K!==null?null:c(m,d,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case J:return b.key===K?s(m,d,b,M):null;case yn:return b.key===K?v(m,d,b,M):null;case Cn:return b=cl(b),y(m,d,b,M)}if(yt(b)||Gn(b))return K!==null?null:z(m,d,b,M,null);if(typeof b.then=="function")return y(m,d,Ci(b),M);if(b.$$typeof===Z)return y(m,d,ji(m,b),M);Bi(m,b)}return null}function S(m,d,b,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return m=m.get(b)||null,c(d,m,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case J:return m=m.get(M.key===null?b:M.key)||null,s(d,m,M,K);case yn:return m=m.get(M.key===null?b:M.key)||null,v(d,m,M,K);case Cn:return M=cl(M),S(m,d,b,M,K)}if(yt(M)||Gn(M))return m=m.get(b)||null,z(d,m,M,K,null);if(typeof M.then=="function")return S(m,d,b,Ci(M),K);if(M.$$typeof===Z)return S(m,d,b,ji(d,M),K);Bi(d,M)}return null}function Q(m,d,b,M){for(var K=null,xn=null,X=d,ln=d=0,gn=null;X!==null&&ln<b.length;ln++){X.index>ln?(gn=X,X=null):gn=X.sibling;var Sn=y(m,X,b[ln],M);if(Sn===null){X===null&&(X=gn);break}n&&X&&Sn.alternate===null&&t(m,X),d=i(Sn,d,ln),xn===null?K=Sn:xn.sibling=Sn,xn=Sn,X=gn}if(ln===b.length)return e(m,X),pn&&ae(m,ln),K;if(X===null){for(;ln<b.length;ln++)X=_(m,b[ln],M),X!==null&&(d=i(X,d,ln),xn===null?K=X:xn.sibling=X,xn=X);return pn&&ae(m,ln),K}for(X=l(X);ln<b.length;ln++)gn=S(X,m,ln,b[ln],M),gn!==null&&(n&&gn.alternate!==null&&X.delete(gn.key===null?ln:gn.key),d=i(gn,d,ln),xn===null?K=gn:xn.sibling=gn,xn=gn);return n&&X.forEach(function(Xe){return t(m,Xe)}),pn&&ae(m,ln),K}function W(m,d,b,M){if(b==null)throw Error(f(151));for(var K=null,xn=null,X=d,ln=d=0,gn=null,Sn=b.next();X!==null&&!Sn.done;ln++,Sn=b.next()){X.index>ln?(gn=X,X=null):gn=X.sibling;var Xe=y(m,X,Sn.value,M);if(Xe===null){X===null&&(X=gn);break}n&&X&&Xe.alternate===null&&t(m,X),d=i(Xe,d,ln),xn===null?K=Xe:xn.sibling=Xe,xn=Xe,X=gn}if(Sn.done)return e(m,X),pn&&ae(m,ln),K;if(X===null){for(;!Sn.done;ln++,Sn=b.next())Sn=_(m,Sn.value,M),Sn!==null&&(d=i(Sn,d,ln),xn===null?K=Sn:xn.sibling=Sn,xn=Sn);return pn&&ae(m,ln),K}for(X=l(X);!Sn.done;ln++,Sn=b.next())Sn=S(X,m,ln,Sn.value,M),Sn!==null&&(n&&Sn.alternate!==null&&X.delete(Sn.key===null?ln:Sn.key),d=i(Sn,d,ln),xn===null?K=Sn:xn.sibling=Sn,xn=Sn);return n&&X.forEach(function(xm){return t(m,xm)}),pn&&ae(m,ln),K}function On(m,d,b,M){if(typeof b=="object"&&b!==null&&b.type===tn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case J:n:{for(var K=b.key;d!==null;){if(d.key===K){if(K=b.type,K===tn){if(d.tag===7){e(m,d.sibling),M=a(d,b.props.children),M.return=m,m=M;break n}}else if(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Cn&&cl(K)===d.type){e(m,d.sibling),M=a(d,b.props),Ra(M,b),M.return=m,m=M;break n}e(m,d);break}else t(m,d);d=d.sibling}b.type===tn?(M=el(b.props.children,m.mode,M,b.key),M.return=m,m=M):(M=zi(b.type,b.key,b.props,null,m.mode,M),Ra(M,b),M.return=m,m=M)}return u(m);case yn:n:{for(K=b.key;d!==null;){if(d.key===K)if(d.tag===4&&d.stateNode.containerInfo===b.containerInfo&&d.stateNode.implementation===b.implementation){e(m,d.sibling),M=a(d,b.children||[]),M.return=m,m=M;break n}else{e(m,d);break}else t(m,d);d=d.sibling}M=ec(b,m.mode,M),M.return=m,m=M}return u(m);case Cn:return b=cl(b),On(m,d,b,M)}if(yt(b))return Q(m,d,b,M);if(Gn(b)){if(K=Gn(b),typeof K!="function")throw Error(f(150));return b=K.call(b),W(m,d,b,M)}if(typeof b.then=="function")return On(m,d,Ci(b),M);if(b.$$typeof===Z)return On(m,d,ji(m,b),M);Bi(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,d!==null&&d.tag===6?(e(m,d.sibling),M=a(d,b),M.return=m,m=M):(e(m,d),M=tc(b,m.mode,M),M.return=m,m=M),u(m)):e(m,d)}return function(m,d,b,M){try{Oa=0;var K=On(m,d,b,M);return Yl=null,K}catch(X){if(X===Ll||X===Oi)throw X;var xn=At(29,X,null,m.mode);return xn.lanes=M,xn.return=m,xn}finally{}}}var fl=ns(!0),ts=ns(!1),_e=!1;function mc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function je(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function De(n,t,e){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(An&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Ti(n),Nf(n,null,e),t}return Ei(n,l,t,e),Ti(n)}function Ca(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,da(n,e)}}function hc(n,t){var e=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var a=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?a=i=t:i=i.next=t}else a=i=t;e={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var bc=!1;function Ba(){if(bc){var n=ql;if(n!==null)throw n}}function Ua(n,t,e,l){bc=!1;var a=n.updateQueue;_e=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var s=c,v=s.next;s.next=null,u===null?i=v:u.next=v,u=s;var z=n.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==u&&(c===null?z.firstBaseUpdate=v:c.next=v,z.lastBaseUpdate=s))}if(i!==null){var _=a.baseState;u=0,z=v=s=null,c=i;do{var y=c.lane&-536870913,S=y!==c.lane;if(S?(dn&y)===y:(l&y)===y){y!==0&&y===Nl&&(bc=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var Q=n,W=c;y=t;var On=e;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){_=Q.call(On,_,y);break n}_=Q;break n;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,y=typeof Q=="function"?Q.call(On,_,y):Q,y==null)break n;_=C({},_,y);break n;case 2:_e=!0}}y=c.callback,y!==null&&(n.flags|=64,S&&(n.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(v=z=S,s=_):z=z.next=S,u|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;S=c,c=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);z===null&&(s=_),a.baseState=s,a.firstBaseUpdate=v,a.lastBaseUpdate=z,i===null&&(a.shared.lanes=0),Ue|=u,n.lanes=u,n.memoizedState=_}}function es(n,t){if(typeof n!="function")throw Error(f(191,n));n.call(t)}function ls(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)es(e[n],t)}var kl=g(null),Ui=g(0);function as(n,t){n=pe,N(Ui,n),N(kl,t),pe=n|t.baseLanes}function vc(){N(Ui,pe),N(kl,kl.current)}function yc(){pe=Ui.current,j(kl),j(Ui)}var Et=g(null),Nt=null;function Oe(n){var t=n.alternate;N(Ln,Ln.current&1),N(Et,n),Nt===null&&(t===null||kl.current!==null||t.memoizedState!==null)&&(Nt=n)}function xc(n){N(Ln,Ln.current),N(Et,n),Nt===null&&(Nt=n)}function is(n){n.tag===22?(N(Ln,Ln.current),N(Et,n),Nt===null&&(Nt=n)):Re()}function Re(){N(Ln,Ln.current),N(Et,Et.current)}function Tt(n){j(Et),Nt===n&&(Nt=null),j(Ln)}var Ln=g(0);function Gi(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||_o(e)||jo(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ce=0,en=null,jn=null,Zn=null,Hi=!1,Ql=!1,sl=!1,wi=0,Ga=0,Xl=null,sg=0;function Nn(){throw Error(f(321))}function Sc(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!St(n[e],t[e]))return!1;return!0}function Ac(n,t,e,l,a,i){return ce=i,en=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=n===null||n.memoizedState===null?ks:wc,sl=!1,i=e(l,a),sl=!1,Ql&&(i=cs(t,e,l,a)),us(n),i}function us(n){E.H=Na;var t=jn!==null&&jn.next!==null;if(ce=0,Zn=jn=en=null,Hi=!1,Ga=0,Xl=null,t)throw Error(f(300));n===null||Kn||(n=n.dependencies,n!==null&&_i(n)&&(Kn=!0))}function cs(n,t,e,l){en=n;var a=0;do{if(Ql&&(Xl=null),Ga=0,Ql=!1,25<=a)throw Error(f(301));if(a+=1,Zn=jn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=Qs,i=t(e,l)}while(Ql);return i}function rg(){var n=E.H,t=n.useState()[0];return t=typeof t.then=="function"?Ha(t):t,n=n.useState()[0],(jn!==null?jn.memoizedState:null)!==n&&(en.flags|=1024),t}function Ec(){var n=wi!==0;return wi=0,n}function Tc(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function zc(n){if(Hi){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}Hi=!1}ce=0,Zn=jn=en=null,Ql=!1,Ga=wi=0,Xl=null}function rt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?en.memoizedState=Zn=n:Zn=Zn.next=n,Zn}function Yn(){if(jn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=jn.next;var t=Zn===null?en.memoizedState:Zn.next;if(t!==null)Zn=t,jn=n;else{if(n===null)throw en.alternate===null?Error(f(467)):Error(f(310));jn=n,n={memoizedState:jn.memoizedState,baseState:jn.baseState,baseQueue:jn.baseQueue,queue:jn.queue,next:null},Zn===null?en.memoizedState=Zn=n:Zn=Zn.next=n}return Zn}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(n){var t=Ga;return Ga+=1,Xl===null&&(Xl=[]),n=Ff(Xl,n,t),t=en,(Zn===null?t.memoizedState:Zn.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?ks:wc),n}function qi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ha(n);if(n.$$typeof===Z)return ct(n)}throw Error(f(438,String(n)))}function Mc(n){var t=null,e=en.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var l=en.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Ni(),en.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),l=0;l<n;l++)e[l]=_n;return t.index++,e}function oe(n,t){return typeof t=="function"?t(n):t}function Li(n){var t=Yn();return _c(t,jn,n)}function _c(n,t,e){var l=n.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=e;var a=n.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,l.pending=null}if(i=n.baseState,a===null)n.memoizedState=i;else{t=a.next;var c=u=null,s=null,v=t,z=!1;do{var _=v.lane&-536870913;if(_!==v.lane?(dn&_)===_:(ce&_)===_){var y=v.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),_===Nl&&(z=!0);else if((ce&y)===y){v=v.next,y===Nl&&(z=!0);continue}else _={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(c=s=_,u=i):s=s.next=_,en.lanes|=y,Ue|=y;_=v.action,sl&&e(i,_),i=v.hasEagerState?v.eagerState:e(i,_)}else y={lane:_,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(c=s=y,u=i):s=s.next=y,en.lanes|=_,Ue|=_;v=v.next}while(v!==null&&v!==t);if(s===null?u=i:s.next=c,!St(i,n.memoizedState)&&(Kn=!0,z&&(e=ql,e!==null)))throw e;n.memoizedState=i,n.baseState=u,n.baseQueue=s,l.lastRenderedState=i}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function jc(n){var t=Yn(),e=t.queue;if(e===null)throw Error(f(311));e.lastRenderedReducer=n;var l=e.dispatch,a=e.pending,i=t.memoizedState;if(a!==null){e.pending=null;var u=a=a.next;do i=n(i,u.action),u=u.next;while(u!==a);St(i,t.memoizedState)||(Kn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,l]}function os(n,t,e){var l=en,a=Yn(),i=pn;if(i){if(e===void 0)throw Error(f(407));e=e()}else e=t();var u=!St((jn||a).memoizedState,e);if(u&&(a.memoizedState=e,Kn=!0),a=a.queue,Rc(rs.bind(null,l,a,n),[n]),a.getSnapshot!==t||u||Zn!==null&&Zn.memoizedState.tag&1){if(l.flags|=2048,Vl(9,{destroy:void 0},ss.bind(null,l,a,e,t),null),Rn===null)throw Error(f(349));i||(ce&127)!==0||fs(l,t,e)}return e}function fs(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=en.updateQueue,t===null?(t=Ni(),en.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function ss(n,t,e,l){t.value=e,t.getSnapshot=l,ds(t)&&gs(n)}function rs(n,t,e){return e(function(){ds(t)&&gs(n)})}function ds(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!St(n,e)}catch{return!0}}function gs(n){var t=tl(n,2);t!==null&&vt(t,n,2)}function Dc(n){var t=rt();if(typeof n=="function"){var e=n;if(n=e(),sl){xt(!0);try{e()}finally{xt(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:n},t}function ms(n,t,e,l){return n.baseState=e,_c(n,jn,typeof l=="function"?l:oe)}function dg(n,t,e,l,a){if(Qi(n))throw Error(f(485));if(n=t.action,n!==null){var i={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};E.T!==null?e(!0):i.isTransition=!1,l(i),e=t.pending,e===null?(i.next=t.pending=i,ps(t,i)):(i.next=e.next,t.pending=e.next=i)}}function ps(n,t){var e=t.action,l=t.payload,a=n.state;if(t.isTransition){var i=E.T,u={};E.T=u;try{var c=e(a,l),s=E.S;s!==null&&s(u,c),hs(n,t,c)}catch(v){Oc(n,t,v)}finally{i!==null&&u.types!==null&&(i.types=u.types),E.T=i}}else try{i=e(a,l),hs(n,t,i)}catch(v){Oc(n,t,v)}}function hs(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){bs(n,t,l)},function(l){return Oc(n,t,l)}):bs(n,t,e)}function bs(n,t,e){t.status="fulfilled",t.value=e,vs(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,ps(n,e)))}function Oc(n,t,e){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=e,vs(t),t=t.next;while(t!==l)}n.action=null}function vs(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function ys(n,t){return t}function xs(n,t){if(pn){var e=Rn.formState;if(e!==null){n:{var l=en;if(pn){if(Bn){t:{for(var a=Bn,i=wt;a.nodeType!==8;){if(!i){a=null;break t}if(a=qt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Bn=qt(a.nextSibling),l=a.data==="F!";break n}}ze(l)}l=!1}l&&(t=e[0])}}return e=rt(),e.memoizedState=e.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:t},e.queue=l,e=qs.bind(null,en,l),l.dispatch=e,l=Dc(!1),i=Hc.bind(null,en,!1,l.queue),l=rt(),a={state:t,dispatch:null,action:n,pending:null},l.queue=a,e=dg.bind(null,en,a,i,e),a.dispatch=e,l.memoizedState=n,[t,e,!1]}function Ss(n){var t=Yn();return As(t,jn,n)}function As(n,t,e){if(t=_c(n,t,ys)[0],n=Li(oe)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ha(t)}catch(u){throw u===Ll?Oi:u}else l=t;t=Yn();var a=t.queue,i=a.dispatch;return e!==t.memoizedState&&(en.flags|=2048,Vl(9,{destroy:void 0},gg.bind(null,a,e),null)),[l,i,n]}function gg(n,t){n.action=t}function Es(n){var t=Yn(),e=jn;if(e!==null)return As(t,e,n);Yn(),t=t.memoizedState,e=Yn();var l=e.queue.dispatch;return e.memoizedState=n,[t,l,!1]}function Vl(n,t,e,l){return n={tag:n,create:e,deps:l,inst:t,next:null},t=en.updateQueue,t===null&&(t=Ni(),en.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(l=e.next,e.next=n,n.next=l,t.lastEffect=n),n}function Ts(){return Yn().memoizedState}function Yi(n,t,e,l){var a=rt();en.flags|=n,a.memoizedState=Vl(1|t,{destroy:void 0},e,l===void 0?null:l)}function ki(n,t,e,l){var a=Yn();l=l===void 0?null:l;var i=a.memoizedState.inst;jn!==null&&l!==null&&Sc(l,jn.memoizedState.deps)?a.memoizedState=Vl(t,i,e,l):(en.flags|=n,a.memoizedState=Vl(1|t,i,e,l))}function zs(n,t){Yi(8390656,8,n,t)}function Rc(n,t){ki(2048,8,n,t)}function mg(n){en.flags|=4;var t=en.updateQueue;if(t===null)t=Ni(),en.updateQueue=t,t.events=[n];else{var e=t.events;e===null?t.events=[n]:e.push(n)}}function Ms(n){var t=Yn().memoizedState;return mg({ref:t,nextImpl:n}),function(){if((An&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function _s(n,t){return ki(4,2,n,t)}function js(n,t){return ki(4,4,n,t)}function Ds(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Os(n,t,e){e=e!=null?e.concat([n]):null,ki(4,4,Ds.bind(null,t,n),e)}function Cc(){}function Rs(n,t){var e=Yn();t=t===void 0?null:t;var l=e.memoizedState;return t!==null&&Sc(t,l[1])?l[0]:(e.memoizedState=[n,t],n)}function Cs(n,t){var e=Yn();t=t===void 0?null:t;var l=e.memoizedState;if(t!==null&&Sc(t,l[1]))return l[0];if(l=n(),sl){xt(!0);try{n()}finally{xt(!1)}}return e.memoizedState=[l,t],l}function Bc(n,t,e){return e===void 0||(ce&1073741824)!==0&&(dn&261930)===0?n.memoizedState=t:(n.memoizedState=e,n=Br(),en.lanes|=n,Ue|=n,e)}function Bs(n,t,e,l){return St(e,t)?e:kl.current!==null?(n=Bc(n,e,l),St(n,t)||(Kn=!0),n):(ce&42)===0||(ce&1073741824)!==0&&(dn&261930)===0?(Kn=!0,n.memoizedState=e):(n=Br(),en.lanes|=n,Ue|=n,t)}function Us(n,t,e,l,a){var i=U.p;U.p=i!==0&&8>i?i:8;var u=E.T,c={};E.T=c,Hc(n,!1,t,e);try{var s=a(),v=E.S;if(v!==null&&v(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var z=fg(s,l);wa(n,t,z,_t(n))}else wa(n,t,l,_t(n))}catch(_){wa(n,t,{then:function(){},status:"rejected",reason:_},_t())}finally{U.p=i,u!==null&&c.types!==null&&(u.types=c.types),E.T=u}}function pg(){}function Uc(n,t,e,l){if(n.tag!==5)throw Error(f(476));var a=Gs(n).queue;Us(n,a,t,I,e===null?pg:function(){return Hs(n),e(l)})}function Gs(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:I},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Hs(n){var t=Gs(n);t.next===null&&(t=n.alternate.memoizedState),wa(n,t.next.queue,{},_t())}function Gc(){return ct(ni)}function ws(){return Yn().memoizedState}function Ns(){return Yn().memoizedState}function hg(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=_t();n=je(e);var l=De(t,n,e);l!==null&&(vt(l,t,e),Ca(l,t,e)),t={cache:sc()},n.payload=t;return}t=t.return}}function bg(n,t,e){var l=_t();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Qi(n)?Ls(t,e):(e=Pu(n,t,e,l),e!==null&&(vt(e,n,l),Ys(e,t,l)))}function qs(n,t,e){var l=_t();wa(n,t,e,l)}function wa(n,t,e,l){var a={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Qi(n))Ls(t,a);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,e);if(a.hasEagerState=!0,a.eagerState=c,St(c,u))return Ei(n,t,a,0),Rn===null&&Ai(),!1}catch{}finally{}if(e=Pu(n,t,a,l),e!==null)return vt(e,n,l),Ys(e,t,l),!0}return!1}function Hc(n,t,e,l){if(l={lane:2,revertLane:po(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qi(n)){if(t)throw Error(f(479))}else t=Pu(n,e,l,2),t!==null&&vt(t,n,2)}function Qi(n){var t=n.alternate;return n===en||t!==null&&t===en}function Ls(n,t){Ql=Hi=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function Ys(n,t,e){if((e&4194048)!==0){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,da(n,e)}}var Na={readContext:ct,use:qi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn};Na.useEffectEvent=Nn;var ks={readContext:ct,use:qi,useCallback:function(n,t){return rt().memoizedState=[n,t===void 0?null:t],n},useContext:ct,useEffect:zs,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Yi(4194308,4,Ds.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Yi(4194308,4,n,t)},useInsertionEffect:function(n,t){Yi(4,2,n,t)},useMemo:function(n,t){var e=rt();t=t===void 0?null:t;var l=n();if(sl){xt(!0);try{n()}finally{xt(!1)}}return e.memoizedState=[l,t],l},useReducer:function(n,t,e){var l=rt();if(e!==void 0){var a=e(t);if(sl){xt(!0);try{e(t)}finally{xt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=bg.bind(null,en,n),[l.memoizedState,n]},useRef:function(n){var t=rt();return n={current:n},t.memoizedState=n},useState:function(n){n=Dc(n);var t=n.queue,e=qs.bind(null,en,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:Cc,useDeferredValue:function(n,t){var e=rt();return Bc(e,n,t)},useTransition:function(){var n=Dc(!1);return n=Us.bind(null,en,n.queue,!0,!1),rt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var l=en,a=rt();if(pn){if(e===void 0)throw Error(f(407));e=e()}else{if(e=t(),Rn===null)throw Error(f(349));(dn&127)!==0||fs(l,t,e)}a.memoizedState=e;var i={value:e,getSnapshot:t};return a.queue=i,zs(rs.bind(null,l,i,n),[n]),l.flags|=2048,Vl(9,{destroy:void 0},ss.bind(null,l,i,e,t),null),e},useId:function(){var n=rt(),t=Rn.identifierPrefix;if(pn){var e=It,l=Jt;e=(l&~(1<<32-et(l)-1)).toString(32)+e,t="_"+t+"R_"+e,e=wi++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=sg++,t="_"+t+"r_"+e.toString(32)+"_";return n.memoizedState=t},useHostTransitionStatus:Gc,useFormState:xs,useActionState:xs,useOptimistic:function(n){var t=rt();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Hc.bind(null,en,!0,e),e.dispatch=t,[n,t]},useMemoCache:Mc,useCacheRefresh:function(){return rt().memoizedState=hg.bind(null,en)},useEffectEvent:function(n){var t=rt(),e={impl:n};return t.memoizedState=e,function(){if((An&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}},wc={readContext:ct,use:qi,useCallback:Rs,useContext:ct,useEffect:Rc,useImperativeHandle:Os,useInsertionEffect:_s,useLayoutEffect:js,useMemo:Cs,useReducer:Li,useRef:Ts,useState:function(){return Li(oe)},useDebugValue:Cc,useDeferredValue:function(n,t){var e=Yn();return Bs(e,jn.memoizedState,n,t)},useTransition:function(){var n=Li(oe)[0],t=Yn().memoizedState;return[typeof n=="boolean"?n:Ha(n),t]},useSyncExternalStore:os,useId:ws,useHostTransitionStatus:Gc,useFormState:Ss,useActionState:Ss,useOptimistic:function(n,t){var e=Yn();return ms(e,jn,n,t)},useMemoCache:Mc,useCacheRefresh:Ns};wc.useEffectEvent=Ms;var Qs={readContext:ct,use:qi,useCallback:Rs,useContext:ct,useEffect:Rc,useImperativeHandle:Os,useInsertionEffect:_s,useLayoutEffect:js,useMemo:Cs,useReducer:jc,useRef:Ts,useState:function(){return jc(oe)},useDebugValue:Cc,useDeferredValue:function(n,t){var e=Yn();return jn===null?Bc(e,n,t):Bs(e,jn.memoizedState,n,t)},useTransition:function(){var n=jc(oe)[0],t=Yn().memoizedState;return[typeof n=="boolean"?n:Ha(n),t]},useSyncExternalStore:os,useId:ws,useHostTransitionStatus:Gc,useFormState:Es,useActionState:Es,useOptimistic:function(n,t){var e=Yn();return jn!==null?ms(e,jn,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:Ns};Qs.useEffectEvent=Ms;function Nc(n,t,e,l){t=n.memoizedState,e=e(l,t),e=e==null?t:C({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var qc={enqueueSetState:function(n,t,e){n=n._reactInternals;var l=_t(),a=je(l);a.payload=t,e!=null&&(a.callback=e),t=De(n,a,l),t!==null&&(vt(t,n,l),Ca(t,n,l))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var l=_t(),a=je(l);a.tag=1,a.payload=t,e!=null&&(a.callback=e),t=De(n,a,l),t!==null&&(vt(t,n,l),Ca(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=_t(),l=je(e);l.tag=2,t!=null&&(l.callback=t),t=De(n,l,e),t!==null&&(vt(t,n,e),Ca(t,n,e))}};function Xs(n,t,e,l,a,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ta(e,l)||!Ta(a,i):!0}function Vs(n,t,e,l){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,l),t.state!==n&&qc.enqueueReplaceState(t,t.state,null)}function rl(n,t){var e=t;if("ref"in t){e={};for(var l in t)l!=="ref"&&(e[l]=t[l])}if(n=n.defaultProps){e===t&&(e=C({},e));for(var a in n)e[a]===void 0&&(e[a]=n[a])}return e}function Zs(n){Si(n)}function Ks(n){console.error(n)}function Js(n){Si(n)}function Xi(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Is(n,t,e){try{var l=n.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Lc(n,t,e){return e=je(e),e.tag=3,e.payload={element:null},e.callback=function(){Xi(n,t)},e}function Ws(n){return n=je(n),n.tag=3,n}function Fs(n,t,e,l){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;n.payload=function(){return a(i)},n.callback=function(){Is(t,e,l)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Is(t,e,l),typeof a!="function"&&(Ge===null?Ge=new Set([this]):Ge.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function vg(n,t,e,l,a){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=e.alternate,t!==null&&wl(t,e,a,!0),e=Et.current,e!==null){switch(e.tag){case 31:case 13:return Nt===null?eu():e.alternate===null&&qn===0&&(qn=3),e.flags&=-257,e.flags|=65536,e.lanes=a,l===Ri?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([l]):t.add(l),ro(n,l,a)),!1;case 22:return e.flags|=65536,l===Ri?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([l]):e.add(l)),ro(n,l,a)),!1}throw Error(f(435,e.tag))}return ro(n,l,a),eu(),!1}if(pn)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==ic&&(n=Error(f(422),{cause:l}),_a(Ut(n,e)))):(l!==ic&&(t=Error(f(423),{cause:l}),_a(Ut(t,e))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=Ut(l,e),a=Lc(n.stateNode,l,a),hc(n,a),qn!==4&&(qn=2)),!1;var i=Error(f(520),{cause:l});if(i=Ut(i,e),Za===null?Za=[i]:Za.push(i),qn!==4&&(qn=2),t===null)return!0;l=Ut(l,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=a&-a,e.lanes|=n,n=Lc(e.stateNode,l,n),hc(e,n),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ge===null||!Ge.has(i))))return e.flags|=65536,a&=-a,e.lanes|=a,a=Ws(a),Fs(a,n,e,l),hc(e,a),!1}e=e.return}while(e!==null);return!1}var Yc=Error(f(461)),Kn=!1;function ot(n,t,e,l){t.child=n===null?ts(t,null,e,l):fl(t,n.child,e,l)}function $s(n,t,e,l,a){e=e.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return il(t),l=Ac(n,t,e,u,i,a),c=Ec(),n!==null&&!Kn?(Tc(n,t,a),fe(n,t,a)):(pn&&c&&lc(t),t.flags|=1,ot(n,t,l,a),t.child)}function Ps(n,t,e,l,a){if(n===null){var i=e.type;return typeof i=="function"&&!nc(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,nr(n,t,i,l,a)):(n=zi(e.type,null,l,t,t.mode,a),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!Ic(n,a)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ta,e(u,l)&&n.ref===t.ref)return fe(n,t,a)}return t.flags|=1,n=le(i,l),n.ref=t.ref,n.return=t,t.child=n}function nr(n,t,e,l,a){if(n!==null){var i=n.memoizedProps;if(Ta(i,l)&&n.ref===t.ref)if(Kn=!1,t.pendingProps=l=i,Ic(n,a))(n.flags&131072)!==0&&(Kn=!0);else return t.lanes=n.lanes,fe(n,t,a)}return kc(n,t,e,l,a)}function tr(n,t,e,l){var a=l.children,i=n!==null?n.memoizedState:null;if(n===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,n!==null){for(l=t.child=n.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return er(n,t,i,e,l)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&Di(t,i!==null?i.cachePool:null),i!==null?as(t,i):vc(),is(t);else return l=t.lanes=536870912,er(n,t,i!==null?i.baseLanes|e:e,e,l)}else i!==null?(Di(t,i.cachePool),as(t,i),Re(),t.memoizedState=null):(n!==null&&Di(t,null),vc(),Re());return ot(n,t,a,e),t.child}function qa(n,t){return n!==null&&n.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function er(n,t,e,l,a){var i=dc();return i=i===null?null:{parent:Vn._currentValue,pool:i},t.memoizedState={baseLanes:e,cachePool:i},n!==null&&Di(t,null),vc(),is(t),n!==null&&wl(n,t,l,!0),t.childLanes=a,null}function Vi(n,t){return t=Ki({mode:t.mode,children:t.children},n.mode),t.ref=n.ref,n.child=t,t.return=n,t}function lr(n,t,e){return fl(t,n.child,null,e),n=Vi(t,t.pendingProps),n.flags|=2,Tt(t),t.memoizedState=null,n}function yg(n,t,e){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,n===null){if(pn){if(l.mode==="hidden")return n=Vi(t,l),t.lanes=536870912,qa(null,n);if(xc(t),(n=Bn)?(n=pd(n,wt),n=n!==null&&n.data==="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:Ee!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},e=Lf(n),e.return=t,t.child=e,ut=t,Bn=null)):n=null,n===null)throw ze(t);return t.lanes=536870912,null}return Vi(t,l)}var i=n.memoizedState;if(i!==null){var u=i.dehydrated;if(xc(t),a)if(t.flags&256)t.flags&=-257,t=lr(n,t,e);else if(t.memoizedState!==null)t.child=n.child,t.flags|=128,t=null;else throw Error(f(558));else if(Kn||wl(n,t,e,!1),a=(e&n.childLanes)!==0,Kn||a){if(l=Rn,l!==null&&(u=ga(l,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,tl(n,u),vt(l,n,u),Yc;eu(),t=lr(n,t,e)}else n=i.treeContext,Bn=qt(u.nextSibling),ut=t,pn=!0,Te=null,wt=!1,n!==null&&Qf(t,n),t=Vi(t,l),t.flags|=4096;return t}return n=le(n.child,{mode:l.mode,children:l.children}),n.ref=t.ref,t.child=n,n.return=t,n}function Zi(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(f(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function kc(n,t,e,l,a){return il(t),e=Ac(n,t,e,l,void 0,a),l=Ec(),n!==null&&!Kn?(Tc(n,t,a),fe(n,t,a)):(pn&&l&&lc(t),t.flags|=1,ot(n,t,e,a),t.child)}function ar(n,t,e,l,a,i){return il(t),t.updateQueue=null,e=cs(t,l,e,a),us(n),l=Ec(),n!==null&&!Kn?(Tc(n,t,i),fe(n,t,i)):(pn&&l&&lc(t),t.flags|=1,ot(n,t,e,i),t.child)}function ir(n,t,e,l,a){if(il(t),t.stateNode===null){var i=Bl,u=e.contextType;typeof u=="object"&&u!==null&&(i=ct(u)),i=new e(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},mc(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?ct(u):Bl,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Nc(t,e,u,l),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&qc.enqueueReplaceState(i,i.state,null),Ua(t,l,i,a),Ba(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(n===null){i=t.stateNode;var c=t.memoizedProps,s=rl(e,c);i.props=s;var v=i.context,z=e.contextType;u=Bl,typeof z=="object"&&z!==null&&(u=ct(z));var _=e.getDerivedStateFromProps;z=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||v!==u)&&Vs(t,i,l,u),_e=!1;var y=t.memoizedState;i.state=y,Ua(t,l,i,a),Ba(),v=t.memoizedState,c||y!==v||_e?(typeof _=="function"&&(Nc(t,e,_,l),v=t.memoizedState),(s=_e||Xs(t,e,s,l,y,v,u))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,pc(n,t),u=t.memoizedProps,z=rl(e,u),i.props=z,_=t.pendingProps,y=i.context,v=e.contextType,s=Bl,typeof v=="object"&&v!==null&&(s=ct(v)),c=e.getDerivedStateFromProps,(v=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==_||y!==s)&&Vs(t,i,l,s),_e=!1,y=t.memoizedState,i.state=y,Ua(t,l,i,a),Ba();var S=t.memoizedState;u!==_||y!==S||_e||n!==null&&n.dependencies!==null&&_i(n.dependencies)?(typeof c=="function"&&(Nc(t,e,c,l),S=t.memoizedState),(z=_e||Xs(t,e,z,l,y,S,s)||n!==null&&n.dependencies!==null&&_i(n.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=s,l=z):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(t.flags|=1024),l=!1)}return i=l,Zi(n,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&l?(t.child=fl(t,n.child,null,a),t.child=fl(t,null,e,a)):ot(n,t,e,a),t.memoizedState=i.state,n=t.child):n=fe(n,t,a),n}function ur(n,t,e,l){return ll(),t.flags|=256,ot(n,t,e,l),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(n){return{baseLanes:n,cachePool:If()}}function Vc(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=Mt),n}function cr(n,t,e){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Ln.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,n===null){if(pn){if(a?Oe(t):Re(),(n=Bn)?(n=pd(n,wt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:Ee!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},e=Lf(n),e.return=t,t.child=e,ut=t,Bn=null)):n=null,n===null)throw ze(t);return jo(n)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(Re(),a=t.mode,c=Ki({mode:"hidden",children:c},a),l=el(l,a,e,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Xc(e),l.childLanes=Vc(n,u,e),t.memoizedState=Qc,qa(null,l)):(Oe(t),Zc(t,c))}var s=n.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(Oe(t),t.flags&=-257,t=Kc(n,t,e)):t.memoizedState!==null?(Re(),t.child=n.child,t.flags|=128,t=null):(Re(),c=l.fallback,a=t.mode,l=Ki({mode:"visible",children:l.children},a),c=el(c,a,e,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,fl(t,n.child,null,e),l=t.child,l.memoizedState=Xc(e),l.childLanes=Vc(n,u,e),t.memoizedState=Qc,t=qa(null,l));else if(Oe(t),jo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var v=u.dgst;u=v,l=Error(f(419)),l.stack="",l.digest=u,_a({value:l,source:null,stack:null}),t=Kc(n,t,e)}else if(Kn||wl(n,t,e,!1),u=(e&n.childLanes)!==0,Kn||u){if(u=Rn,u!==null&&(l=ga(u,e),l!==0&&l!==s.retryLane))throw s.retryLane=l,tl(n,l),vt(u,n,l),Yc;_o(c)||eu(),t=Kc(n,t,e)}else _o(c)?(t.flags|=192,t.child=n.child,t=null):(n=s.treeContext,Bn=qt(c.nextSibling),ut=t,pn=!0,Te=null,wt=!1,n!==null&&Qf(t,n),t=Zc(t,l.children),t.flags|=4096);return t}return a?(Re(),c=l.fallback,a=t.mode,s=n.child,v=s.sibling,l=le(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,v!==null?c=le(v,c):(c=el(c,a,e,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,qa(null,l),l=t.child,c=n.child.memoizedState,c===null?c=Xc(e):(a=c.cachePool,a!==null?(s=Vn._currentValue,a=a.parent!==s?{parent:s,pool:s}:a):a=If(),c={baseLanes:c.baseLanes|e,cachePool:a}),l.memoizedState=c,l.childLanes=Vc(n,u,e),t.memoizedState=Qc,qa(n.child,l)):(Oe(t),e=n.child,n=e.sibling,e=le(e,{mode:"visible",children:l.children}),e.return=t,e.sibling=null,n!==null&&(u=t.deletions,u===null?(t.deletions=[n],t.flags|=16):u.push(n)),t.child=e,t.memoizedState=null,e)}function Zc(n,t){return t=Ki({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Ki(n,t){return n=At(22,n,null,t),n.lanes=0,n}function Kc(n,t,e){return fl(t,n.child,null,e),n=Zc(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function or(n,t,e){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t),oc(n.return,t,e)}function Jc(n,t,e,l,a,i){var u=n.memoizedState;u===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:a,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=e,u.tailMode=a,u.treeForkCount=i)}function fr(n,t,e){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=Ln.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,N(Ln,u),ot(n,t,l,e),l=pn?Ma:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&or(n,e,t);else if(n.tag===19)or(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(e=t.child,a=null;e!==null;)n=e.alternate,n!==null&&Gi(n)===null&&(a=e),e=e.sibling;e=a,e===null?(a=t.child,t.child=null):(a=e.sibling,e.sibling=null),Jc(t,!1,a,e,i,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=t.child,t.child=null;a!==null;){if(n=a.alternate,n!==null&&Gi(n)===null){t.child=a;break}n=a.sibling,a.sibling=e,e=a,a=n}Jc(t,!0,e,null,i,l);break;case"together":Jc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function fe(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),Ue|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(wl(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(f(153));if(t.child!==null){for(n=t.child,e=le(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=le(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function Ic(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&_i(n)))}function xg(n,t,e){switch(t.tag){case 3:Pn(t,t.stateNode.containerInfo),Me(t,Vn,n.memoizedState.cache),ll();break;case 27:case 5:Ze(t);break;case 4:Pn(t,t.stateNode.containerInfo);break;case 10:Me(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Oe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?cr(n,t,e):(Oe(t),n=fe(n,t,e),n!==null?n.sibling:null);Oe(t);break;case 19:var a=(n.flags&128)!==0;if(l=(e&t.childLanes)!==0,l||(wl(n,t,e,!1),l=(e&t.childLanes)!==0),a){if(l)return fr(n,t,e);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(Ln,Ln.current),l)break;return null;case 22:return t.lanes=0,tr(n,t,e,t.pendingProps);case 24:Me(t,Vn,n.memoizedState.cache)}return fe(n,t,e)}function sr(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)Kn=!0;else{if(!Ic(n,e)&&(t.flags&128)===0)return Kn=!1,xg(n,t,e);Kn=(n.flags&131072)!==0}else Kn=!1,pn&&(t.flags&1048576)!==0&&kf(t,Ma,t.index);switch(t.lanes=0,t.tag){case 16:n:{var l=t.pendingProps;if(n=cl(t.elementType),t.type=n,typeof n=="function")nc(n)?(l=rl(n,l),t.tag=1,t=ir(null,t,n,l,e)):(t.tag=0,t=kc(null,t,n,l,e));else{if(n!=null){var a=n.$$typeof;if(a===L){t.tag=11,t=$s(null,t,n,l,e);break n}else if(a===w){t.tag=14,t=Ps(null,t,n,l,e);break n}}throw t=on(n)||n,Error(f(306,t,""))}}return t;case 0:return kc(n,t,t.type,t.pendingProps,e);case 1:return l=t.type,a=rl(l,t.pendingProps),ir(n,t,l,a,e);case 3:n:{if(Pn(t,t.stateNode.containerInfo),n===null)throw Error(f(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,pc(n,t),Ua(t,l,null,e);var u=t.memoizedState;if(l=u.cache,Me(t,Vn,l),l!==i.cache&&fc(t,[Vn],e,!0),Ba(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ur(n,t,l,e);break n}else if(l!==a){a=Ut(Error(f(424)),t),_a(a),t=ur(n,t,l,e);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Bn=qt(n.firstChild),ut=t,pn=!0,Te=null,wt=!0,e=ts(t,null,l,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(ll(),l===a){t=fe(n,t,e);break n}ot(n,t,l,e)}t=t.child}return t;case 26:return Zi(n,t),n===null?(e=Sd(t.type,null,t.pendingProps,null))?t.memoizedState=e:pn||(e=t.type,n=t.pendingProps,l=fu(an.current).createElement(e),l[Qn]=t,l[it]=n,ft(l,e,n),lt(l),t.stateNode=l):t.memoizedState=Sd(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return Ze(t),n===null&&pn&&(l=t.stateNode=vd(t.type,t.pendingProps,an.current),ut=t,wt=!0,a=Bn,qe(t.type)?(Do=a,Bn=qt(l.firstChild)):Bn=a),ot(n,t,t.pendingProps.children,e),Zi(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&pn&&((a=l=Bn)&&(l=Wg(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,ut=t,Bn=qt(l.firstChild),wt=!1,a=!0):a=!1),a||ze(t)),Ze(t),a=t.type,i=t.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,To(a,i)?l=null:u!==null&&To(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=Ac(n,t,rg,null,null,e),ni._currentValue=a),Zi(n,t),ot(n,t,l,e),t.child;case 6:return n===null&&pn&&((n=e=Bn)&&(e=Fg(e,t.pendingProps,wt),e!==null?(t.stateNode=e,ut=t,Bn=null,n=!0):n=!1),n||ze(t)),null;case 13:return cr(n,t,e);case 4:return Pn(t,t.stateNode.containerInfo),l=t.pendingProps,n===null?t.child=fl(t,null,l,e):ot(n,t,l,e),t.child;case 11:return $s(n,t,t.type,t.pendingProps,e);case 7:return ot(n,t,t.pendingProps,e),t.child;case 8:return ot(n,t,t.pendingProps.children,e),t.child;case 12:return ot(n,t,t.pendingProps.children,e),t.child;case 10:return l=t.pendingProps,Me(t,t.type,l.value),ot(n,t,l.children,e),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,il(t),a=ct(a),l=l(a),t.flags|=1,ot(n,t,l,e),t.child;case 14:return Ps(n,t,t.type,t.pendingProps,e);case 15:return nr(n,t,t.type,t.pendingProps,e);case 19:return fr(n,t,e);case 31:return yg(n,t,e);case 22:return tr(n,t,e,t.pendingProps);case 24:return il(t),l=ct(Vn),n===null?(a=dc(),a===null&&(a=Rn,i=sc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=e),a=i),t.memoizedState={parent:l,cache:a},mc(t),Me(t,Vn,a)):((n.lanes&e)!==0&&(pc(n,t),Ua(t,null,null,e),Ba()),a=n.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Me(t,Vn,l)):(l=i.cache,Me(t,Vn,l),l!==a.cache&&fc(t,[Vn],e,!0))),ot(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function se(n){n.flags|=4}function Wc(n,t,e,l,a){if((t=(n.mode&32)!==0)&&(t=!1),t){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(wr())n.flags|=8192;else throw ol=Ri,gc}else n.flags&=-16777217}function rr(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Md(t))if(wr())n.flags|=8192;else throw ol=Ri,gc}function Ji(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?sa():536870912,n.lanes|=t,Il|=t)}function La(n,t){if(!pn)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Un(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,l=0;if(t)for(var a=n.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=e,t}function Sg(n,t,e){var l=t.pendingProps;switch(ac(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(t),null;case 1:return Un(t),null;case 3:return e=t.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ue(Vn),wn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(Hl(t)?se(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uc())),Un(t),null;case 26:var a=t.type,i=t.memoizedState;return n===null?(se(t),i!==null?(Un(t),rr(t,i)):(Un(t),Wc(t,a,null,l,e))):i?i!==n.memoizedState?(se(t),Un(t),rr(t,i)):(Un(t),t.flags&=-16777217):(n=n.memoizedProps,n!==l&&se(t),Un(t),Wc(t,a,n,l,e)),null;case 27:if(Ke(t),e=an.current,a=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&se(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Un(t),null}n=k.current,Hl(t)?Xf(t):(n=vd(a,l,e),t.stateNode=n,se(t))}return Un(t),null;case 5:if(Ke(t),a=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&se(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Un(t),null}if(i=k.current,Hl(t))Xf(t);else{var u=fu(an.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[Qn]=t,i[it]=l;n:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break n;for(;u.sibling===null;){if(u.return===null||u.return===t)break n;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;n:switch(ft(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&se(t)}}return Un(t),Wc(t,t.type,n===null?null:n.memoizedProps,t.pendingProps,e),null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==l&&se(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(n=an.current,Hl(t)){if(n=t.stateNode,e=t.memoizedProps,l=null,a=ut,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[Qn]=t,n=!!(n.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||cd(n.nodeValue,e)),n||ze(t,!0)}else n=fu(n).createTextNode(l),n[Qn]=t,t.stateNode=n}return Un(t),null;case 31:if(e=t.memoizedState,n===null||n.memoizedState!==null){if(l=Hl(t),e!==null){if(n===null){if(!l)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(557));n[Qn]=t}else ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Un(t),n=!1}else e=uc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Un(t),null;case 13:if(l=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=Hl(t),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(f(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[Qn]=t}else ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Un(t),a=!1}else a=uc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=l!==null,n=n!==null&&n.memoizedState!==null,e&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),e!==n&&e&&(t.child.flags|=8192),Ji(t,t.updateQueue),Un(t),null);case 4:return wn(),n===null&&yo(t.stateNode.containerInfo),Un(t),null;case 10:return ue(t.type),Un(t),null;case 19:if(j(Ln),l=t.memoizedState,l===null)return Un(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)La(l,!1);else{if(qn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=Gi(n),i!==null){for(t.flags|=128,La(l,!1),n=i.updateQueue,t.updateQueue=n,Ji(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)qf(e,n),e=e.sibling;return N(Ln,Ln.current&1|2),pn&&ae(t,l.treeForkCount),t.child}n=n.sibling}l.tail!==null&&kn()>Pi&&(t.flags|=128,a=!0,La(l,!1),t.lanes=4194304)}else{if(!a)if(n=Gi(i),n!==null){if(t.flags|=128,a=!0,n=n.updateQueue,t.updateQueue=n,Ji(t,n),La(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!pn)return Un(t),null}else 2*kn()-l.renderingStartTime>Pi&&e!==536870912&&(t.flags|=128,a=!0,La(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=kn(),n.sibling=null,e=Ln.current,N(Ln,a?e&1|2:e&1),pn&&ae(t,l.treeForkCount),n):(Un(t),null);case 22:case 23:return Tt(t),yc(),l=t.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(e&536870912)!==0&&(t.flags&128)===0&&(Un(t),t.subtreeFlags&6&&(t.flags|=8192)):Un(t),e=t.updateQueue,e!==null&&Ji(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(t.flags|=2048),n!==null&&j(ul),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),ue(Vn),Un(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Ag(n,t){switch(ac(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return ue(Vn),wn(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ke(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(f(340));ll()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 13:if(Tt(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(f(340));ll()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return j(Ln),null;case 4:return wn(),null;case 10:return ue(t.type),null;case 22:case 23:return Tt(t),yc(),n!==null&&j(ul),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return ue(Vn),null;case 25:return null;default:return null}}function dr(n,t){switch(ac(t),t.tag){case 3:ue(Vn),wn();break;case 26:case 27:case 5:Ke(t);break;case 4:wn();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:j(Ln);break;case 10:ue(t.type);break;case 22:case 23:Tt(t),yc(),n!==null&&j(ul);break;case 24:ue(Vn)}}function Ya(n,t){try{var e=t.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var a=l.next;e=a;do{if((e.tag&n)===n){l=void 0;var i=e.create,u=e.inst;l=i(),u.destroy=l}e=e.next}while(e!==a)}}catch(c){Mn(t,t.return,c)}}function Ce(n,t,e){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&n)===n){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=t;var s=e,v=c;try{v()}catch(z){Mn(a,s,z)}}}l=l.next}while(l!==i)}}catch(z){Mn(t,t.return,z)}}function gr(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{ls(t,e)}catch(l){Mn(n,n.return,l)}}}function mr(n,t,e){e.props=rl(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(l){Mn(n,t,l)}}function ka(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof e=="function"?n.refCleanup=e(l):e.current=l}}catch(a){Mn(n,t,a)}}function Wt(n,t){var e=n.ref,l=n.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(a){Mn(n,t,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){Mn(n,t,a)}else e.current=null}function pr(n){var t=n.type,e=n.memoizedProps,l=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break n;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(a){Mn(n,n.return,a)}}function Fc(n,t,e){try{var l=n.stateNode;Xg(l,n.type,e,t),l[it]=t}catch(a){Mn(n,n.return,a)}}function hr(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&qe(n.type)||n.tag===4}function $c(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||hr(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&qe(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pc(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=te));else if(l!==4&&(l===27&&qe(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(Pc(n,t,e),n=n.sibling;n!==null;)Pc(n,t,e),n=n.sibling}function Ii(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(l!==4&&(l===27&&qe(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Ii(n,t,e),n=n.sibling;n!==null;)Ii(n,t,e),n=n.sibling}function br(n){var t=n.stateNode,e=n.memoizedProps;try{for(var l=n.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ft(t,l,e),t[Qn]=n,t[it]=e}catch(i){Mn(n,n.return,i)}}var re=!1,Jn=!1,no=!1,vr=typeof WeakSet=="function"?WeakSet:Set,at=null;function Eg(n,t){if(n=n.containerInfo,Ao=hu,n=Of(n),Ku(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break n}var u=0,c=-1,s=-1,v=0,z=0,_=n,y=null;t:for(;;){for(var S;_!==e||a!==0&&_.nodeType!==3||(c=u+a),_!==i||l!==0&&_.nodeType!==3||(s=u+l),_.nodeType===3&&(u+=_.nodeValue.length),(S=_.firstChild)!==null;)y=_,_=S;for(;;){if(_===n)break t;if(y===e&&++v===a&&(c=u),y===i&&++z===l&&(s=u),(S=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=S}e=c===-1||s===-1?null:{start:c,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(Eo={focusedElem:n,selectionRange:e},hu=!1,at=t;at!==null;)if(t=at,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,at=n;else for(;at!==null;){switch(t=at,i=t.alternate,n=t.flags,t.tag){case 0:if((n&4)!==0&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)a=n[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,e=t,a=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var Q=rl(e.type,a);n=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(W){Mn(e,e.return,W)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)Mo(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Mo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(f(163))}if(n=t.sibling,n!==null){n.return=t.return,at=n;break}at=t.return}}function yr(n,t,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ge(n,e),l&4&&Ya(5,e);break;case 1:if(ge(n,e),l&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(u){Mn(e,e.return,u)}else{var a=rl(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(a,t,n.__reactInternalSnapshotBeforeUpdate)}catch(u){Mn(e,e.return,u)}}l&64&&gr(e),l&512&&ka(e,e.return);break;case 3:if(ge(n,e),l&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{ls(n,t)}catch(u){Mn(e,e.return,u)}}break;case 27:t===null&&l&4&&br(e);case 26:case 5:ge(n,e),t===null&&l&4&&pr(e),l&512&&ka(e,e.return);break;case 12:ge(n,e);break;case 31:ge(n,e),l&4&&Ar(n,e);break;case 13:ge(n,e),l&4&&Er(n,e),l&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=Cg.bind(null,e),$g(n,e))));break;case 22:if(l=e.memoizedState!==null||re,!l){t=t!==null&&t.memoizedState!==null||Jn,a=re;var i=Jn;re=l,(Jn=t)&&!i?me(n,e,(e.subtreeFlags&8772)!==0):ge(n,e),re=a,Jn=i}break;case 30:break;default:ge(n,e)}}function xr(n){var t=n.alternate;t!==null&&(n.alternate=null,xr(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Xn(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Hn=null,mt=!1;function de(n,t,e){for(e=e.child;e!==null;)Sr(n,t,e),e=e.sibling}function Sr(n,t,e){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Zt,e)}catch{}switch(e.tag){case 26:Jn||Wt(e,t),de(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Jn||Wt(e,t);var l=Hn,a=mt;qe(e.type)&&(Hn=e.stateNode,mt=!1),de(n,t,e),Fa(e.stateNode),Hn=l,mt=a;break;case 5:Jn||Wt(e,t);case 6:if(l=Hn,a=mt,Hn=null,de(n,t,e),Hn=l,mt=a,Hn!==null)if(mt)try{(Hn.nodeType===9?Hn.body:Hn.nodeName==="HTML"?Hn.ownerDocument.body:Hn).removeChild(e.stateNode)}catch(i){Mn(e,t,i)}else try{Hn.removeChild(e.stateNode)}catch(i){Mn(e,t,i)}break;case 18:Hn!==null&&(mt?(n=Hn,gd(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),la(n)):gd(Hn,e.stateNode));break;case 4:l=Hn,a=mt,Hn=e.stateNode.containerInfo,mt=!0,de(n,t,e),Hn=l,mt=a;break;case 0:case 11:case 14:case 15:Ce(2,e,t),Jn||Ce(4,e,t),de(n,t,e);break;case 1:Jn||(Wt(e,t),l=e.stateNode,typeof l.componentWillUnmount=="function"&&mr(e,t,l)),de(n,t,e);break;case 21:de(n,t,e);break;case 22:Jn=(l=Jn)||e.memoizedState!==null,de(n,t,e),Jn=l;break;default:de(n,t,e)}}function Ar(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{la(n)}catch(e){Mn(t,t.return,e)}}}function Er(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{la(n)}catch(e){Mn(t,t.return,e)}}function Tg(n){switch(n.tag){case 31:case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new vr),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new vr),t;default:throw Error(f(435,n.tag))}}function Wi(n,t){var e=Tg(n);t.forEach(function(l){if(!e.has(l)){e.add(l);var a=Bg.bind(null,n,l);l.then(a,a)}})}function pt(n,t){var e=t.deletions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l],i=n,u=t,c=u;n:for(;c!==null;){switch(c.tag){case 27:if(qe(c.type)){Hn=c.stateNode,mt=!1;break n}break;case 5:Hn=c.stateNode,mt=!1;break n;case 3:case 4:Hn=c.stateNode.containerInfo,mt=!0;break n}c=c.return}if(Hn===null)throw Error(f(160));Sr(i,u,a),Hn=null,mt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tr(t,n),t=t.sibling}var Xt=null;function Tr(n,t){var e=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:pt(t,n),ht(n),l&4&&(Ce(3,n,n.return),Ya(3,n),Ce(5,n,n.return));break;case 1:pt(t,n),ht(n),l&512&&(Jn||e===null||Wt(e,e.return)),l&64&&re&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var a=Xt;if(pt(t,n),ht(n),l&512&&(Jn||e===null||Wt(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=n.memoizedState,e===null)if(l===null)if(n.stateNode===null){n:{l=n.type,e=n.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[vn]||i[Qn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),ft(i,l,e),i[Qn]=n,lt(i),l=i;break n;case"link":var u=Td("link","href",a).get(l+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break t}}i=a.createElement(l),ft(i,l,e),a.head.appendChild(i);break;case"meta":if(u=Td("meta","content",a).get(l+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break t}}i=a.createElement(l),ft(i,l,e),a.head.appendChild(i);break;default:throw Error(f(468,l))}i[Qn]=n,lt(i),l=i}n.stateNode=l}else zd(a,n.type,n.stateNode);else n.stateNode=Ed(a,l,n.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?zd(a,n.type,n.stateNode):Ed(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Fc(n,n.memoizedProps,e.memoizedProps)}break;case 27:pt(t,n),ht(n),l&512&&(Jn||e===null||Wt(e,e.return)),e!==null&&l&4&&Fc(n,n.memoizedProps,e.memoizedProps);break;case 5:if(pt(t,n),ht(n),l&512&&(Jn||e===null||Wt(e,e.return)),n.flags&32){a=n.stateNode;try{Ml(a,"")}catch(Q){Mn(n,n.return,Q)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,Fc(n,a,e!==null?e.memoizedProps:a)),l&1024&&(no=!0);break;case 6:if(pt(t,n),ht(n),l&4){if(n.stateNode===null)throw Error(f(162));l=n.memoizedProps,e=n.stateNode;try{e.nodeValue=l}catch(Q){Mn(n,n.return,Q)}}break;case 3:if(du=null,a=Xt,Xt=su(t.containerInfo),pt(t,n),Xt=a,ht(n),l&4&&e!==null&&e.memoizedState.isDehydrated)try{la(t.containerInfo)}catch(Q){Mn(n,n.return,Q)}no&&(no=!1,zr(n));break;case 4:l=Xt,Xt=su(n.stateNode.containerInfo),pt(t,n),ht(n),Xt=l;break;case 12:pt(t,n),ht(n);break;case 31:pt(t,n),ht(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Wi(n,l)));break;case 13:pt(t,n),ht(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&($i=kn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Wi(n,l)));break;case 22:a=n.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,v=re,z=Jn;if(re=v||a,Jn=z||s,pt(t,n),Jn=z,re=v,ht(n),l&8192)n:for(t=n.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(e===null||s||re||Jn||dl(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){s=e=t;try{if(i=s.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var _=s.memoizedProps.style,y=_!=null&&_.hasOwnProperty("display")?_.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(Q){Mn(s,s.return,Q)}}}else if(t.tag===6){if(e===null){s=t;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(Q){Mn(s,s.return,Q)}}}else if(t.tag===18){if(e===null){s=t;try{var S=s.stateNode;a?md(S,!0):md(s.stateNode,!1)}catch(Q){Mn(s,s.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=n.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,Wi(n,e))));break;case 19:pt(t,n),ht(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Wi(n,l)));break;case 30:break;case 21:break;default:pt(t,n),ht(n)}}function ht(n){var t=n.flags;if(t&2){try{for(var e,l=n.return;l!==null;){if(hr(l)){e=l;break}l=l.return}if(e==null)throw Error(f(160));switch(e.tag){case 27:var a=e.stateNode,i=$c(n);Ii(n,i,a);break;case 5:var u=e.stateNode;e.flags&32&&(Ml(u,""),e.flags&=-33);var c=$c(n);Ii(n,c,u);break;case 3:case 4:var s=e.stateNode.containerInfo,v=$c(n);Pc(n,v,s);break;default:throw Error(f(161))}}catch(z){Mn(n,n.return,z)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function zr(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;zr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function ge(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yr(n,t.alternate,t),t=t.sibling}function dl(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:Ce(4,t,t.return),dl(t);break;case 1:Wt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&mr(t,t.return,e),dl(t);break;case 27:Fa(t.stateNode);case 26:case 5:Wt(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}n=n.sibling}}function me(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=n,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:me(a,i,e),Ya(4,i);break;case 1:if(me(a,i,e),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(v){Mn(l,l.return,v)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)es(s[a],c)}catch(v){Mn(l,l.return,v)}}e&&u&64&&gr(i),ka(i,i.return);break;case 27:br(i);case 26:case 5:me(a,i,e),e&&l===null&&u&4&&pr(i),ka(i,i.return);break;case 12:me(a,i,e);break;case 31:me(a,i,e),e&&u&4&&Ar(a,i);break;case 13:me(a,i,e),e&&u&4&&Er(a,i);break;case 22:i.memoizedState===null&&me(a,i,e),ka(i,i.return);break;case 30:break;default:me(a,i,e)}t=t.sibling}}function to(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&ja(e))}function eo(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&ja(n))}function Vt(n,t,e,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mr(n,t,e,l),t=t.sibling}function Mr(n,t,e,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(n,t,e,l),a&2048&&Ya(9,t);break;case 1:Vt(n,t,e,l);break;case 3:Vt(n,t,e,l),a&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&ja(n)));break;case 12:if(a&2048){Vt(n,t,e,l),n=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){Mn(t,t.return,s)}}else Vt(n,t,e,l);break;case 31:Vt(n,t,e,l);break;case 13:Vt(n,t,e,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(n,t,e,l):Qa(n,t):i._visibility&2?Vt(n,t,e,l):(i._visibility|=2,Zl(n,t,e,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&to(u,t);break;case 24:Vt(n,t,e,l),a&2048&&eo(t.alternate,t);break;default:Vt(n,t,e,l)}}function Zl(n,t,e,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=n,u=t,c=e,s=l,v=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(i,u,c,s,a),Ya(8,u);break;case 23:break;case 22:var z=u.stateNode;u.memoizedState!==null?z._visibility&2?Zl(i,u,c,s,a):Qa(i,u):(z._visibility|=2,Zl(i,u,c,s,a)),a&&v&2048&&to(u.alternate,u);break;case 24:Zl(i,u,c,s,a),a&&v&2048&&eo(u.alternate,u);break;default:Zl(i,u,c,s,a)}t=t.sibling}}function Qa(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,l=t,a=l.flags;switch(l.tag){case 22:Qa(e,l),a&2048&&to(l.alternate,l);break;case 24:Qa(e,l),a&2048&&eo(l.alternate,l);break;default:Qa(e,l)}t=t.sibling}}var Xa=8192;function Kl(n,t,e){if(n.subtreeFlags&Xa)for(n=n.child;n!==null;)_r(n,t,e),n=n.sibling}function _r(n,t,e){switch(n.tag){case 26:Kl(n,t,e),n.flags&Xa&&n.memoizedState!==null&&sm(e,Xt,n.memoizedState,n.memoizedProps);break;case 5:Kl(n,t,e);break;case 3:case 4:var l=Xt;Xt=su(n.stateNode.containerInfo),Kl(n,t,e),Xt=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Xa,Xa=16777216,Kl(n,t,e),Xa=l):Kl(n,t,e));break;default:Kl(n,t,e)}}function jr(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function Va(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];at=l,Or(l,n)}jr(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dr(n),n=n.sibling}function Dr(n){switch(n.tag){case 0:case 11:case 15:Va(n),n.flags&2048&&Ce(9,n,n.return);break;case 3:Va(n);break;case 12:Va(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Fi(n)):Va(n);break;default:Va(n)}}function Fi(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];at=l,Or(l,n)}jr(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:Ce(8,t,t.return),Fi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Fi(t));break;default:Fi(t)}n=n.sibling}}function Or(n,t){for(;at!==null;){var e=at;switch(e.tag){case 0:case 11:case 15:Ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ja(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,at=l;else n:for(e=n;at!==null;){l=at;var a=l.sibling,i=l.return;if(xr(l),l===e){at=null;break n}if(a!==null){a.return=i,at=a;break n}at=i}}}var zg={getCacheForType:function(n){var t=ct(Vn),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e},cacheSignal:function(){return ct(Vn).controller.signal}},Mg=typeof WeakMap=="function"?WeakMap:Map,An=0,Rn=null,sn=null,dn=0,zn=0,zt=null,Be=!1,Jl=!1,lo=!1,pe=0,qn=0,Ue=0,gl=0,ao=0,Mt=0,Il=0,Za=null,bt=null,io=!1,$i=0,Rr=0,Pi=1/0,nu=null,Ge=null,$n=0,He=null,Wl=null,he=0,uo=0,co=null,Cr=null,Ka=0,oo=null;function _t(){return(An&2)!==0&&dn!==0?dn&-dn:E.T!==null?po():ma()}function Br(){if(Mt===0)if((dn&536870912)===0||pn){var n=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),Mt=n}else Mt=536870912;return n=Et.current,n!==null&&(n.flags|=32),Mt}function vt(n,t,e){(n===Rn&&(zn===2||zn===9)||n.cancelPendingCommit!==null)&&(Fl(n,0),we(n,dn,Mt,!1)),xe(n,e),((An&2)===0||n!==Rn)&&(n===Rn&&((An&2)===0&&(gl|=e),qn===4&&we(n,dn,Mt,!1)),Ft(n))}function Ur(n,t,e){if((An&6)!==0)throw Error(f(327));var l=!e&&(t&127)===0&&(t&n.expiredLanes)===0||ye(n,t),a=l?Dg(n,t):so(n,t,!0),i=l;do{if(a===0){Jl&&!l&&we(n,t,0,!1);break}else{if(e=n.current.alternate,i&&!_g(e)){a=so(n,t,!1),i=!1;continue}if(a===2){if(i=t,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;n:{var c=n;a=Za;var s=c.current.memoizedState.isDehydrated;if(s&&(Fl(c,u).flags|=256),u=so(c,u,!1),u!==2){if(lo&&!s){c.errorRecoveryDisabledLanes|=i,gl|=i,a=4;break n}i=bt,bt=a,i!==null&&(bt===null?bt=i:bt.push.apply(bt,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Fl(n,0),we(n,t,0,!0);break}n:{switch(l=n,i=a,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:we(l,t,Mt,!Be);break n;case 2:bt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(a=$i+300-kn(),10<a)){if(we(l,t,Mt,!Be),We(l,0,!0)!==0)break n;he=t,l.timeoutHandle=rd(Gr.bind(null,l,e,bt,nu,io,t,Mt,gl,Il,Be,i,"Throttled",-0,0),a);break n}Gr(l,e,bt,nu,io,t,Mt,gl,Il,Be,i,null,-0,0)}}break}while(!0);Ft(n)}function Gr(n,t,e,l,a,i,u,c,s,v,z,_,y,S){if(n.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:te},_r(t,i,_);var Q=(i&62914560)===i?$i-kn():(i&4194048)===i?Rr-kn():0;if(Q=rm(_,Q),Q!==null){he=i,n.cancelPendingCommit=Q(Qr.bind(null,n,t,i,e,l,a,u,c,s,z,_,null,y,S)),we(n,i,u,!v);return}}Qr(n,t,i,e,l,a,u,c,s)}function _g(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var a=e[l],i=a.getSnapshot;a=a.value;try{if(!St(i(),a))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function we(n,t,e,l){t&=~ao,t&=~gl,n.suspendedLanes|=t,n.pingedLanes&=~t,l&&(n.warmLanes|=t),l=n.expirationTimes;for(var a=t;0<a;){var i=31-et(a),u=1<<i;l[i]=-1,a&=~u}e!==0&&ra(n,e,t)}function tu(){return(An&6)===0?(Ja(0),!1):!0}function fo(){if(sn!==null){if(zn===0)var n=sn.return;else n=sn,ie=al=null,zc(n),Yl=null,Oa=0,n=sn;for(;n!==null;)dr(n.alternate,n),n=n.return;sn=null}}function Fl(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Kg(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),he=0,fo(),Rn=n,sn=e=le(n.current,null),dn=t,zn=0,zt=null,Be=!1,Jl=ye(n,t),lo=!1,Il=Mt=ao=gl=Ue=qn=0,bt=Za=null,io=!1,(t&8)!==0&&(t|=t&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=t;0<l;){var a=31-et(l),i=1<<a;t|=n[a],l&=~i}return pe=t,Ai(),e}function Hr(n,t){en=null,E.H=Na,t===Ll||t===Oi?(t=$f(),zn=3):t===gc?(t=$f(),zn=4):zn=t===Yc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,sn===null&&(qn=1,Xi(n,Ut(t,n.current)))}function wr(){var n=Et.current;return n===null?!0:(dn&4194048)===dn?Nt===null:(dn&62914560)===dn||(dn&536870912)!==0?n===Nt:!1}function Nr(){var n=E.H;return E.H=Na,n===null?Na:n}function qr(){var n=E.A;return E.A=zg,n}function eu(){qn=4,Be||(dn&4194048)!==dn&&Et.current!==null||(Jl=!0),(Ue&134217727)===0&&(gl&134217727)===0||Rn===null||we(Rn,dn,Mt,!1)}function so(n,t,e){var l=An;An|=2;var a=Nr(),i=qr();(Rn!==n||dn!==t)&&(nu=null,Fl(n,t)),t=!1;var u=qn;n:do try{if(zn!==0&&sn!==null){var c=sn,s=zt;switch(zn){case 8:fo(),u=6;break n;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var v=zn;if(zn=0,zt=null,$l(n,c,s,v),e&&Jl){u=0;break n}break;default:v=zn,zn=0,zt=null,$l(n,c,s,v)}}jg(),u=qn;break}catch(z){Hr(n,z)}while(!0);return t&&n.shellSuspendCounter++,ie=al=null,An=l,E.H=a,E.A=i,sn===null&&(Rn=null,dn=0,Ai()),u}function jg(){for(;sn!==null;)Lr(sn)}function Dg(n,t){var e=An;An|=2;var l=Nr(),a=qr();Rn!==n||dn!==t?(nu=null,Pi=kn()+500,Fl(n,t)):Jl=ye(n,t);n:do try{if(zn!==0&&sn!==null){t=sn;var i=zt;t:switch(zn){case 1:zn=0,zt=null,$l(n,t,i,1);break;case 2:case 9:if(Wf(i)){zn=0,zt=null,Yr(t);break}t=function(){zn!==2&&zn!==9||Rn!==n||(zn=7),Ft(n)},i.then(t,t);break n;case 3:zn=7;break n;case 4:zn=5;break n;case 7:Wf(i)?(zn=0,zt=null,Yr(t)):(zn=0,zt=null,$l(n,t,i,7));break;case 5:var u=null;switch(sn.tag){case 26:u=sn.memoizedState;case 5:case 27:var c=sn;if(u?Md(u):c.stateNode.complete){zn=0,zt=null;var s=c.sibling;if(s!==null)sn=s;else{var v=c.return;v!==null?(sn=v,lu(v)):sn=null}break t}}zn=0,zt=null,$l(n,t,i,5);break;case 6:zn=0,zt=null,$l(n,t,i,6);break;case 8:fo(),qn=6;break n;default:throw Error(f(462))}}Og();break}catch(z){Hr(n,z)}while(!0);return ie=al=null,E.H=l,E.A=a,An=e,sn!==null?0:(Rn=null,dn=0,Ai(),qn)}function Og(){for(;sn!==null&&!ca();)Lr(sn)}function Lr(n){var t=sr(n.alternate,n,pe);n.memoizedProps=n.pendingProps,t===null?lu(n):sn=t}function Yr(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=ar(e,t,t.pendingProps,t.type,void 0,dn);break;case 11:t=ar(e,t,t.pendingProps,t.type.render,t.ref,dn);break;case 5:zc(t);default:dr(e,t),t=sn=qf(t,pe),t=sr(e,t,pe)}n.memoizedProps=n.pendingProps,t===null?lu(n):sn=t}function $l(n,t,e,l){ie=al=null,zc(t),Yl=null,Oa=0;var a=t.return;try{if(vg(n,a,t,e,dn)){qn=1,Xi(n,Ut(e,n.current)),sn=null;return}}catch(i){if(a!==null)throw sn=a,i;qn=1,Xi(n,Ut(e,n.current)),sn=null;return}t.flags&32768?(pn||l===1?n=!0:Jl||(dn&536870912)!==0?n=!1:(Be=n=!0,(l===2||l===9||l===3||l===6)&&(l=Et.current,l!==null&&l.tag===13&&(l.flags|=16384))),kr(t,n)):lu(t)}function lu(n){var t=n;do{if((t.flags&32768)!==0){kr(t,Be);return}n=t.return;var e=Sg(t.alternate,t,pe);if(e!==null){sn=e;return}if(t=t.sibling,t!==null){sn=t;return}sn=t=n}while(t!==null);qn===0&&(qn=5)}function kr(n,t){do{var e=Ag(n.alternate,n);if(e!==null){e.flags&=32767,sn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){sn=n;return}sn=n=e}while(n!==null);qn=6,sn=null}function Qr(n,t,e,l,a,i,u,c,s){n.cancelPendingCommit=null;do au();while($n!==0);if((An&6)!==0)throw Error(f(327));if(t!==null){if(t===n.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=$u,si(n,e,i,u,c,s),n===Rn&&(sn=Rn=null,dn=0),Wl=t,He=n,he=e,uo=i,co=a,Cr=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Ug(Ot,function(){return Jr(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=E.T,E.T=null,a=U.p,U.p=2,u=An,An|=4;try{Eg(n,t,e)}finally{An=u,U.p=a,E.T=l}}$n=1,Xr(),Vr(),Zr()}}function Xr(){if($n===1){$n=0;var n=He,t=Wl,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=E.T,E.T=null;var l=U.p;U.p=2;var a=An;An|=4;try{Tr(t,n);var i=Eo,u=Of(n.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Df(c.ownerDocument.documentElement,c)){if(s!==null&&Ku(c)){var v=s.start,z=s.end;if(z===void 0&&(z=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(z,c.value.length);else{var _=c.ownerDocument||document,y=_&&_.defaultView||window;if(y.getSelection){var S=y.getSelection(),Q=c.textContent.length,W=Math.min(s.start,Q),On=s.end===void 0?W:Math.min(s.end,Q);!S.extend&&W>On&&(u=On,On=W,W=u);var m=jf(c,W),d=jf(c,On);if(m&&d&&(S.rangeCount!==1||S.anchorNode!==m.node||S.anchorOffset!==m.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var b=_.createRange();b.setStart(m.node,m.offset),S.removeAllRanges(),W>On?(S.addRange(b),S.extend(d.node,d.offset)):(b.setEnd(d.node,d.offset),S.addRange(b))}}}}for(_=[],S=c;S=S.parentNode;)S.nodeType===1&&_.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<_.length;c++){var M=_[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}hu=!!Ao,Eo=Ao=null}finally{An=a,U.p=l,E.T=e}}n.current=t,$n=2}}function Vr(){if($n===2){$n=0;var n=He,t=Wl,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=E.T,E.T=null;var l=U.p;U.p=2;var a=An;An|=4;try{yr(n,t.alternate,t)}finally{An=a,U.p=l,E.T=e}}$n=3}}function Zr(){if($n===4||$n===3){$n=0,oa();var n=He,t=Wl,e=he,l=Cr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$n=5:($n=0,Wl=He=null,Kr(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(Ge=null),Al(e),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Zt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=E.T,a=U.p,U.p=2,E.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{E.T=t,U.p=a}}(he&3)!==0&&au(),Ft(n),a=n.pendingLanes,(e&261930)!==0&&(a&42)!==0?n===oo?Ka++:(Ka=0,oo=n):Ka=0,Ja(0)}}function Kr(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,ja(t)))}function au(){return Xr(),Vr(),Zr(),Jr()}function Jr(){if($n!==5)return!1;var n=He,t=uo;uo=0;var e=Al(he),l=E.T,a=U.p;try{U.p=32>e?32:e,E.T=null,e=co,co=null;var i=He,u=he;if($n=0,Wl=He=null,he=0,(An&6)!==0)throw Error(f(331));var c=An;if(An|=4,Dr(i.current),Mr(i,i.current,u,e),An=c,Ja(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Zt,i)}catch{}return!0}finally{U.p=a,E.T=l,Kr(n,t)}}function Ir(n,t,e){t=Ut(e,t),t=Lc(n.stateNode,t,2),n=De(n,t,2),n!==null&&(xe(n,2),Ft(n))}function Mn(n,t,e){if(n.tag===3)Ir(n,n,e);else for(;t!==null;){if(t.tag===3){Ir(t,n,e);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ge===null||!Ge.has(l))){n=Ut(e,n),e=Ws(2),l=De(t,e,2),l!==null&&(Fs(e,l,t,n),xe(l,2),Ft(l));break}}t=t.return}}function ro(n,t,e){var l=n.pingCache;if(l===null){l=n.pingCache=new Mg;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(e)||(lo=!0,a.add(e),n=Rg.bind(null,n,t,e),t.then(n,n))}function Rg(n,t,e){var l=n.pingCache;l!==null&&l.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Rn===n&&(dn&e)===e&&(qn===4||qn===3&&(dn&62914560)===dn&&300>kn()-$i?(An&2)===0&&Fl(n,0):ao|=e,Il===dn&&(Il=0)),Ft(n)}function Wr(n,t){t===0&&(t=sa()),n=tl(n,t),n!==null&&(xe(n,t),Ft(n))}function Cg(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),Wr(n,e)}function Bg(n,t){var e=0;switch(n.tag){case 31:case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(e=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),Wr(n,e)}function Ug(n,t){return bl(n,t)}var iu=null,Pl=null,go=!1,uu=!1,mo=!1,Ne=0;function Ft(n){n!==Pl&&n.next===null&&(Pl===null?iu=Pl=n:Pl=Pl.next=n),uu=!0,go||(go=!0,Hg())}function Ja(n,t){if(!mo&&uu){mo=!0;do for(var e=!1,l=iu;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-et(42|n)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,nd(l,i))}else i=dn,i=We(l,l===Rn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ye(l,i)||(e=!0,nd(l,i));l=l.next}while(e);mo=!1}}function Gg(){Fr()}function Fr(){uu=go=!1;var n=0;Ne!==0&&Zg()&&(n=Ne);for(var t=kn(),e=null,l=iu;l!==null;){var a=l.next,i=$r(l,t);i===0?(l.next=null,e===null?iu=a:e.next=a,a===null&&(Pl=e)):(e=l,(n!==0||(i&3)!==0)&&(uu=!0)),l=a}$n!==0&&$n!==5||Ja(n),Ne!==0&&(Ne=0)}function $r(n,t){for(var e=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-et(i),c=1<<u,s=a[u];s===-1?((c&e)===0||(c&l)!==0)&&(a[u]=fi(c,t)):s<=t&&(n.expiredLanes|=c),i&=~c}if(t=Rn,e=dn,e=We(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,e===0||n===t&&(zn===2||zn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&nt(l),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||ye(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(l!==null&&nt(l),Al(e)){case 2:case 8:e=Je;break;case 32:e=Ot;break;case 268435456:e=vl;break;default:e=Ot}return l=Pr.bind(null,n),e=bl(e,l),n.callbackPriority=t,n.callbackNode=e,t}return l!==null&&l!==null&&nt(l),n.callbackPriority=2,n.callbackNode=null,2}function Pr(n,t){if($n!==0&&$n!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(au()&&n.callbackNode!==e)return null;var l=dn;return l=We(n,n===Rn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Ur(n,l,t),$r(n,kn()),n.callbackNode!=null&&n.callbackNode===e?Pr.bind(null,n):null)}function nd(n,t){if(au())return null;Ur(n,t,!0)}function Hg(){Jg(function(){(An&6)!==0?bl(ju,Gg):Fr()})}function po(){if(Ne===0){var n=Nl;n===0&&(n=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Ne=n}return Ne}function td(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:mi(""+n)}function ed(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function wg(n,t,e,l,a){if(t==="submit"&&e&&e.stateNode===a){var i=td((a[it]||null).action),u=l.submitter;u&&(t=(t=u[it]||null)?td(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new vi("action","action",null,l,a);n.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ne!==0){var s=u?ed(a,u):new FormData(a);Uc(e,{pending:!0,data:s,method:a.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?ed(a,u):new FormData(a),Uc(e,{pending:!0,data:s,method:a.method,action:i},i,s))},currentTarget:a}]})}}for(var ho=0;ho<Fu.length;ho++){var bo=Fu[ho],Ng=bo.toLowerCase(),qg=bo[0].toUpperCase()+bo.slice(1);Qt(Ng,"on"+qg)}Qt(Bf,"onAnimationEnd"),Qt(Uf,"onAnimationIteration"),Qt(Gf,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(tg,"onTransitionRun"),Qt(eg,"onTransitionStart"),Qt(lg,"onTransitionCancel"),Qt(Hf,"onTransitionEnd"),Tl("onMouseEnter",["mouseout","mouseover"]),Tl("onMouseLeave",["mouseout","mouseover"]),Tl("onPointerEnter",["pointerout","pointerover"]),Tl("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));function ld(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var l=n[e],a=l.event;l=l.listeners;n:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],s=c.instance,v=c.currentTarget;if(c=c.listener,s!==i&&a.isPropagationStopped())break n;i=c,a.currentTarget=v;try{i(a)}catch(z){Si(z)}a.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(c=l[u],s=c.instance,v=c.currentTarget,c=c.listener,s!==i&&a.isPropagationStopped())break n;i=c,a.currentTarget=v;try{i(a)}catch(z){Si(z)}a.currentTarget=null,i=s}}}}function rn(n,t){var e=t[h];e===void 0&&(e=t[h]=new Set);var l=n+"__bubble";e.has(l)||(ad(t,n,2,!1),e.add(l))}function vo(n,t,e){var l=0;t&&(l|=4),ad(e,n,l,t)}var cu="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[cu]){n[cu]=!0,Wo.forEach(function(e){e!=="selectionchange"&&(Lg.has(e)||vo(e,!1,n),vo(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[cu]||(t[cu]=!0,vo("selectionchange",!1,t))}}function ad(n,t,e,l){switch(Bd(t)){case 2:var a=mm;break;case 8:a=pm;break;default:a=Uo}e=a.bind(null,t,e,n),a=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(t,e,{capture:!0,passive:a}):n.addEventListener(t,e,!0):a!==void 0?n.addEventListener(t,e,{passive:a}):n.addEventListener(t,e,!1)}function xo(n,t,e,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Fn(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue n}c=c.parentNode}}l=l.return}ff(function(){var v=i,z=Hu(e),_=[];n:{var y=wf.get(n);if(y!==void 0){var S=vi,Q=n;switch(n){case"keypress":if(hi(e)===0)break n;case"keydown":case"keyup":S=B0;break;case"focusin":Q="focus",S=ku;break;case"focusout":Q="blur",S=ku;break;case"beforeblur":case"afterblur":S=ku;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=H0;break;case Bf:case Uf:case Gf:S=T0;break;case Hf:S=N0;break;case"scroll":case"scrollend":S=y0;break;case"wheel":S=L0;break;case"copy":case"cut":case"paste":S=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=mf;break;case"toggle":case"beforetoggle":S=k0}var W=(t&4)!==0,On=!W&&(n==="scroll"||n==="scrollend"),m=W?y!==null?y+"Capture":null:y;W=[];for(var d=v,b;d!==null;){var M=d;if(b=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||b===null||m===null||(M=ba(d,m),M!=null&&W.push(Wa(d,M,b))),On)break;d=d.return}0<W.length&&(y=new S(y,Q,null,e,z),_.push({event:y,listeners:W}))}}if((t&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",S=n==="mouseout"||n==="pointerout",y&&e!==Gu&&(Q=e.relatedTarget||e.fromElement)&&(Fn(Q)||Q[Pt]))break n;if((S||y)&&(y=z.window===z?z:(y=z.ownerDocument)?y.defaultView||y.parentWindow:window,S?(Q=e.relatedTarget||e.toElement,S=v,Q=Q?Fn(Q):null,Q!==null&&(On=D(Q),W=Q.tag,Q!==On||W!==5&&W!==27&&W!==6)&&(Q=null)):(S=null,Q=v),S!==Q)){if(W=df,M="onMouseLeave",m="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(W=mf,M="onPointerLeave",m="onPointerEnter",d="pointer"),On=S==null?y:ha(S),b=Q==null?y:ha(Q),y=new W(M,d+"leave",S,e,z),y.target=On,y.relatedTarget=b,M=null,Fn(z)===v&&(W=new W(m,d+"enter",Q,e,z),W.target=b,W.relatedTarget=On,M=W),On=M,S&&Q)t:{for(W=Yg,m=S,d=Q,b=0,M=m;M;M=W(M))b++;M=0;for(var K=d;K;K=W(K))M++;for(;0<b-M;)m=W(m),b--;for(;0<M-b;)d=W(d),M--;for(;b--;){if(m===d||d!==null&&m===d.alternate){W=m;break t}m=W(m),d=W(d)}W=null}else W=null;S!==null&&id(_,y,S,W,!1),Q!==null&&On!==null&&id(_,On,Q,W,!0)}}n:{if(y=v?ha(v):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var xn=Af;else if(xf(y))if(Ef)xn=$0;else{xn=W0;var X=I0}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?v&&Uu(v.elementType)&&(xn=Af):xn=F0;if(xn&&(xn=xn(n,v))){Sf(_,xn,e,z);break n}X&&X(n,y,v),n==="focusout"&&v&&y.type==="number"&&v.memoizedProps.value!=null&&Bu(y,"number",y.value)}switch(X=v?ha(v):window,n){case"focusin":(xf(X)||X.contentEditable==="true")&&(Ol=X,Ju=v,za=null);break;case"focusout":za=Ju=Ol=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Rf(_,e,z);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":Rf(_,e,z)}var ln;if(Xu)n:{switch(n){case"compositionstart":var gn="onCompositionStart";break n;case"compositionend":gn="onCompositionEnd";break n;case"compositionupdate":gn="onCompositionUpdate";break n}gn=void 0}else Dl?vf(n,e)&&(gn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(gn="onCompositionStart");gn&&(pf&&e.locale!=="ko"&&(Dl||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&Dl&&(ln=sf()):(Ae=z,qu="value"in Ae?Ae.value:Ae.textContent,Dl=!0)),X=ou(v,gn),0<X.length&&(gn=new gf(gn,n,null,e,z),_.push({event:gn,listeners:X}),ln?gn.data=ln:(ln=yf(e),ln!==null&&(gn.data=ln)))),(ln=X0?V0(n,e):Z0(n,e))&&(gn=ou(v,"onBeforeInput"),0<gn.length&&(X=new gf("onBeforeInput","beforeinput",null,e,z),_.push({event:X,listeners:gn}),X.data=ln)),wg(_,n,v,e,z)}ld(_,t)})}function Wa(n,t,e){return{instance:n,listener:t,currentTarget:e}}function ou(n,t){for(var e=t+"Capture",l=[];n!==null;){var a=n,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ba(n,e),a!=null&&l.unshift(Wa(n,a,i)),a=ba(n,t),a!=null&&l.push(Wa(n,a,i))),n.tag===3)return l;n=n.return}return[]}function Yg(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function id(n,t,e,l,a){for(var i=t._reactName,u=[];e!==null&&e!==l;){var c=e,s=c.alternate,v=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||v===null||(s=v,a?(v=ba(e,i),v!=null&&u.unshift(Wa(e,v,s))):a||(v=ba(e,i),v!=null&&u.push(Wa(e,v,s)))),e=e.return}u.length!==0&&n.push({event:t,listeners:u})}var kg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function ud(n){return(typeof n=="string"?n:""+n).replace(kg,`
`).replace(Qg,"")}function cd(n,t){return t=ud(t),ud(n)===t}function Dn(n,t,e,l,a,i){switch(e){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ml(n,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ml(n,""+l);break;case"className":di(n,"class",l);break;case"tabIndex":di(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":di(n,e,l);break;case"style":cf(n,l,i);break;case"data":if(t!=="object"){di(n,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=mi(""+l),n.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&Dn(n,t,"name",a.name,a,null),Dn(n,t,"formEncType",a.formEncType,a,null),Dn(n,t,"formMethod",a.formMethod,a,null),Dn(n,t,"formTarget",a.formTarget,a,null)):(Dn(n,t,"encType",a.encType,a,null),Dn(n,t,"method",a.method,a,null),Dn(n,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=mi(""+l),n.setAttribute(e,l);break;case"onClick":l!=null&&(n.onclick=te);break;case"onScroll":l!=null&&rn("scroll",n);break;case"onScrollEnd":l!=null&&rn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(f(60));n.innerHTML=e}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}e=mi(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""+l):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":l===!0?n.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,l):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(e,l):n.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(e):n.setAttribute(e,l);break;case"popover":rn("beforetoggle",n),rn("toggle",n),ri(n,"popover",l);break;case"xlinkActuate":ne(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ne(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ne(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ne(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ne(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ne(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ne(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ne(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ne(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=b0.get(e)||e,ri(n,e,l))}}function So(n,t,e,l,a,i){switch(e){case"style":cf(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(f(60));n.innerHTML=e}}break;case"children":typeof l=="string"?Ml(n,l):(typeof l=="number"||typeof l=="bigint")&&Ml(n,""+l);break;case"onScroll":l!=null&&rn("scroll",n);break;case"onScrollEnd":l!=null&&rn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=te);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),t=e.slice(2,a?e.length-7:void 0),i=n[it]||null,i=i!=null?i[e]:null,typeof i=="function"&&n.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,l,a);break n}e in n?n[e]=l:l===!0?n.setAttribute(e,""):ri(n,e,l)}}}function ft(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rn("error",n),rn("load",n);var l=!1,a=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Dn(n,t,i,u,e,null)}}a&&Dn(n,t,"srcSet",e.srcSet,e,null),l&&Dn(n,t,"src",e.src,e,null);return;case"input":rn("invalid",n);var c=i=u=a=null,s=null,v=null;for(l in e)if(e.hasOwnProperty(l)){var z=e[l];if(z!=null)switch(l){case"name":a=z;break;case"type":u=z;break;case"checked":s=z;break;case"defaultChecked":v=z;break;case"value":i=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(f(137,t));break;default:Dn(n,t,l,z,e,null)}}ef(n,i,c,s,v,u,a,!1);return;case"select":rn("invalid",n),l=u=i=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:Dn(n,t,a,c,e,null)}t=i,e=u,n.multiple=!!l,t!=null?zl(n,!!l,t,!1):e!=null&&zl(n,!!l,e,!0);return;case"textarea":rn("invalid",n),i=a=l=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:Dn(n,t,u,c,e,null)}af(n,l,a,i);return;case"option":for(s in e)if(e.hasOwnProperty(s)&&(l=e[s],l!=null))switch(s){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Dn(n,t,s,l,e,null)}return;case"dialog":rn("beforetoggle",n),rn("toggle",n),rn("cancel",n),rn("close",n);break;case"iframe":case"object":rn("load",n);break;case"video":case"audio":for(l=0;l<Ia.length;l++)rn(Ia[l],n);break;case"image":rn("error",n),rn("load",n);break;case"details":rn("toggle",n);break;case"embed":case"source":case"link":rn("error",n),rn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in e)if(e.hasOwnProperty(v)&&(l=e[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Dn(n,t,v,l,e,null)}return;default:if(Uu(t)){for(z in e)e.hasOwnProperty(z)&&(l=e[z],l!==void 0&&So(n,t,z,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&Dn(n,t,c,l,e,null))}function Xg(n,t,e,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,s=null,v=null,z=null;for(S in e){var _=e[S];if(e.hasOwnProperty(S)&&_!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":s=_;default:l.hasOwnProperty(S)||Dn(n,t,S,null,l,_)}}for(var y in l){var S=l[y];if(_=e[y],l.hasOwnProperty(y)&&(S!=null||_!=null))switch(y){case"type":i=S;break;case"name":a=S;break;case"checked":v=S;break;case"defaultChecked":z=S;break;case"value":u=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,t));break;default:S!==_&&Dn(n,t,y,S,l,_)}}Cu(n,u,c,s,v,z,i,a);return;case"select":S=u=c=y=null;for(i in e)if(s=e[i],e.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":S=s;default:l.hasOwnProperty(i)||Dn(n,t,i,null,l,s)}for(a in l)if(i=l[a],s=e[a],l.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":y=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&Dn(n,t,a,i,l,s)}t=c,e=u,l=S,y!=null?zl(n,!!e,y,!1):!!l!=!!e&&(t!=null?zl(n,!!e,t,!0):zl(n,!!e,e?[]:"",!1));return;case"textarea":S=y=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Dn(n,t,c,null,l,a)}for(u in l)if(a=l[u],i=e[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==i&&Dn(n,t,u,a,l,i)}lf(n,y,S);return;case"option":for(var Q in e)if(y=e[Q],e.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":n.selected=!1;break;default:Dn(n,t,Q,null,l,y)}for(s in l)if(y=l[s],S=e[s],l.hasOwnProperty(s)&&y!==S&&(y!=null||S!=null))switch(s){case"selected":n.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:Dn(n,t,s,y,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in e)y=e[W],e.hasOwnProperty(W)&&y!=null&&!l.hasOwnProperty(W)&&Dn(n,t,W,null,l,y);for(v in l)if(y=l[v],S=e[v],l.hasOwnProperty(v)&&y!==S&&(y!=null||S!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:Dn(n,t,v,y,l,S)}return;default:if(Uu(t)){for(var On in e)y=e[On],e.hasOwnProperty(On)&&y!==void 0&&!l.hasOwnProperty(On)&&So(n,t,On,void 0,l,y);for(z in l)y=l[z],S=e[z],!l.hasOwnProperty(z)||y===S||y===void 0&&S===void 0||So(n,t,z,y,l,S);return}}for(var m in e)y=e[m],e.hasOwnProperty(m)&&y!=null&&!l.hasOwnProperty(m)&&Dn(n,t,m,null,l,y);for(_ in l)y=l[_],S=e[_],!l.hasOwnProperty(_)||y===S||y==null&&S==null||Dn(n,t,_,y,l,S)}function od(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vg(){if(typeof performance.getEntriesByType=="function"){for(var n=0,t=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var a=e[l],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&od(u)){for(u=0,c=a.responseEnd,l+=1;l<e.length;l++){var s=e[l],v=s.startTime;if(v>c)break;var z=s.transferSize,_=s.initiatorType;z&&od(_)&&(s=s.responseEnd,u+=z*(s<c?1:(c-v)/(s-v)))}if(--l,t+=8*(i+u)/(a.duration/1e3),n++,10<n)break}}if(0<n)return t/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ao=null,Eo=null;function fu(n){return n.nodeType===9?n:n.ownerDocument}function fd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sd(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function To(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zo=null;function Zg(){var n=window.event;return n&&n.type==="popstate"?n===zo?!1:(zo=n,!0):(zo=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(n){return dd.resolve(null).then(n).catch(Ig)}:rd;function Ig(n){setTimeout(function(){throw n})}function qe(n){return n==="head"}function gd(n,t){var e=t,l=0;do{var a=e.nextSibling;if(n.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(l===0){n.removeChild(a),la(t);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")Fa(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Fa(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[vn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&Fa(n.ownerDocument.body);e=a}while(e);la(t)}function md(n,t){var e=n;n=0;do{var l=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=l}while(e)}function Mo(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Mo(e),Xn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Wg(n,t,e,l){for(;n.nodeType===1;){var a=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[vn])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=qt(n.nextSibling),n===null)break}return null}function Fg(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=qt(n.nextSibling),n===null))return null;return n}function pd(n,t){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=qt(n.nextSibling),n===null))return null;return n}function _o(n){return n.data==="$?"||n.data==="$~"}function jo(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function $g(n,t){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=t;else if(n.data!=="$?"||e.readyState!=="loading")t();else{var l=function(){t(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function qt(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return n}var Do=null;function hd(n){n=n.nextSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(t===0)return qt(n.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}n=n.nextSibling}return null}function bd(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return n;t--}else e!=="/$"&&e!=="/&"||t++}n=n.previousSibling}return null}function vd(n,t,e){switch(t=fu(e),n){case"html":if(n=t.documentElement,!n)throw Error(f(452));return n;case"head":if(n=t.head,!n)throw Error(f(453));return n;case"body":if(n=t.body,!n)throw Error(f(454));return n;default:throw Error(f(451))}}function Fa(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Xn(n)}var Lt=new Map,yd=new Set;function su(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var be=U.d;U.d={f:Pg,r:nm,D:tm,C:em,L:lm,m:am,X:um,S:im,M:cm};function Pg(){var n=be.f(),t=tu();return n||t}function nm(n){var t=Se(n);t!==null&&t.tag===5&&t.type==="form"?Hs(t):be.r(n)}var na=typeof document>"u"?null:document;function xd(n,t,e){var l=na;if(l&&typeof t=="string"&&t){var a=Ct(t);a='link[rel="'+n+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),yd.has(a)||(yd.add(a),n={rel:n,crossOrigin:e,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),ft(t,"link",n),lt(t),l.head.appendChild(t)))}}function tm(n){be.D(n),xd("dns-prefetch",n,null)}function em(n,t){be.C(n,t),xd("preconnect",n,t)}function lm(n,t,e){be.L(n,t,e);var l=na;if(l&&n&&t){var a='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Ct(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Ct(e.imageSizes)+'"]')):a+='[href="'+Ct(n)+'"]';var i=a;switch(t){case"style":i=ta(n);break;case"script":i=ea(n)}Lt.has(i)||(n=C({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),Lt.set(i,n),l.querySelector(a)!==null||t==="style"&&l.querySelector($a(i))||t==="script"&&l.querySelector(Pa(i))||(t=l.createElement("link"),ft(t,"link",n),lt(t),l.head.appendChild(t)))}}function am(n,t){be.m(n,t);var e=na;if(e&&n){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ct(l)+'"][href="'+Ct(n)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ea(n)}if(!Lt.has(i)&&(n=C({rel:"modulepreload",href:n},t),Lt.set(i,n),e.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Pa(i)))return}l=e.createElement("link"),ft(l,"link",n),lt(l),e.head.appendChild(l)}}}function im(n,t,e){be.S(n,t,e);var l=na;if(l&&n){var a=El(l).hoistableStyles,i=ta(n);t=t||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector($a(i)))c.loading=5;else{n=C({rel:"stylesheet",href:n,"data-precedence":t},e),(e=Lt.get(i))&&Oo(n,e);var s=u=l.createElement("link");lt(s),ft(s,"link",n),s._p=new Promise(function(v,z){s.onload=v,s.onerror=z}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ru(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function um(n,t){be.X(n,t);var e=na;if(e&&n){var l=El(e).hoistableScripts,a=ea(n),i=l.get(a);i||(i=e.querySelector(Pa(a)),i||(n=C({src:n,async:!0},t),(t=Lt.get(a))&&Ro(n,t),i=e.createElement("script"),lt(i),ft(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function cm(n,t){be.M(n,t);var e=na;if(e&&n){var l=El(e).hoistableScripts,a=ea(n),i=l.get(a);i||(i=e.querySelector(Pa(a)),i||(n=C({src:n,async:!0,type:"module"},t),(t=Lt.get(a))&&Ro(n,t),i=e.createElement("script"),lt(i),ft(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Sd(n,t,e,l){var a=(a=an.current)?su(a):null;if(!a)throw Error(f(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=ta(e.href),e=El(a).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=ta(e.href);var i=El(a).hoistableStyles,u=i.get(n);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=a.querySelector($a(n)))&&!i._p&&(u.instance=i,u.state.loading=5),Lt.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Lt.set(n,e),i||om(a,n,e,u.state))),t&&l===null)throw Error(f(528,""));return u}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ea(e),e=El(a).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,n))}}function ta(n){return'href="'+Ct(n)+'"'}function $a(n){return'link[rel="stylesheet"]['+n+"]"}function Ad(n){return C({},n,{"data-precedence":n.precedence,precedence:null})}function om(n,t,e,l){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=n.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",e),lt(t),n.head.appendChild(t))}function ea(n){return'[src="'+Ct(n)+'"]'}function Pa(n){return"script[async]"+n}function Ed(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var l=n.querySelector('style[data-href~="'+Ct(e.href)+'"]');if(l)return t.instance=l,lt(l),l;var a=C({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),lt(l),ft(l,"style",a),ru(l,e.precedence,n),t.instance=l;case"stylesheet":a=ta(e.href);var i=n.querySelector($a(a));if(i)return t.state.loading|=4,t.instance=i,lt(i),i;l=Ad(e),(a=Lt.get(a))&&Oo(l,a),i=(n.ownerDocument||n).createElement("link"),lt(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),ft(i,"link",l),t.state.loading|=4,ru(i,e.precedence,n),t.instance=i;case"script":return i=ea(e.src),(a=n.querySelector(Pa(i)))?(t.instance=a,lt(a),a):(l=e,(a=Lt.get(i))&&(l=C({},e),Ro(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),lt(a),ft(a,"link",l),n.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ru(l,e.precedence,n));return t.instance}function ru(n,t,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function Oo(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function Ro(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var du=null;function Td(n,t,e){if(du===null){var l=new Map,a=du=new Map;a.set(e,l)}else a=du,l=a.get(e),l||(l=new Map,a.set(e,l));if(l.has(n))return l;for(l.set(n,null),e=e.getElementsByTagName(n),a=0;a<e.length;a++){var i=e[a];if(!(i[vn]||i[Qn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=n+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function zd(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function fm(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Md(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function sm(n,t,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=ta(l.href),i=t.querySelector($a(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=gu.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=i,lt(i);return}i=t.ownerDocument||t,l=Ad(l),(a=Lt.get(a))&&Oo(l,a),i=i.createElement("link"),lt(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),ft(i,"link",l),e.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=gu.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}var Co=0;function rm(n,t){return n.stylesheets&&n.count===0&&pu(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var l=setTimeout(function(){if(n.stylesheets&&pu(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+t);0<n.imgBytes&&Co===0&&(Co=62500*Vg());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&pu(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>Co?50:800)+t);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function gu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var mu=null;function pu(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,mu=new Map,t.forEach(dm,n),mu=null,gu.call(n))}function dm(n,t){if(!(t.state.loading&4)){var e=mu.get(n);if(e)var l=e.get(null);else{e=new Map,mu.set(n,e);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),l=u)}l&&e.set(null,l)}a=t.instance,u=a.getAttribute("data-precedence"),i=e.get(u)||l,i===l&&e.set(null,a),e.set(u,a),this.count++,l=gu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),t.state.loading|=4}}var ni={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function gm(n,t,e,l,a,i,u,c,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.hiddenUpdates=xl(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function _d(n,t,e,l,a,i,u,c,s,v,z,_){return n=new gm(n,t,e,u,s,v,z,_,c),t=1,i===!0&&(t|=24),i=At(3,null,null,t),n.current=i,i.stateNode=n,t=sc(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:t},mc(i),n}function jd(n){return n?(n=Bl,n):Bl}function Dd(n,t,e,l,a,i){a=jd(a),l.context===null?l.context=a:l.pendingContext=a,l=je(t),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=De(n,l,t),e!==null&&(vt(e,n,t),Ca(e,n,t))}function Od(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function Bo(n,t){Od(n,t),(n=n.alternate)&&Od(n,t)}function Rd(n){if(n.tag===13||n.tag===31){var t=tl(n,67108864);t!==null&&vt(t,n,67108864),Bo(n,67108864)}}function Cd(n){if(n.tag===13||n.tag===31){var t=_t();t=Sl(t);var e=tl(n,t);e!==null&&vt(e,n,t),Bo(n,t)}}var hu=!0;function mm(n,t,e,l){var a=E.T;E.T=null;var i=U.p;try{U.p=2,Uo(n,t,e,l)}finally{U.p=i,E.T=a}}function pm(n,t,e,l){var a=E.T;E.T=null;var i=U.p;try{U.p=8,Uo(n,t,e,l)}finally{U.p=i,E.T=a}}function Uo(n,t,e,l){if(hu){var a=Go(l);if(a===null)xo(n,t,l,bu,e),Ud(n,l);else if(bm(a,n,t,e,l))l.stopPropagation();else if(Ud(n,l),t&4&&-1<hm.indexOf(n)){for(;a!==null;){var i=Se(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Kt(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-et(u);c.entanglements[1]|=s,u&=~s}Ft(i),(An&6)===0&&(Pi=kn()+500,Ja(0))}}break;case 31:case 13:c=tl(i,2),c!==null&&vt(c,i,2),tu(),Bo(i,2)}if(i=Go(l),i===null&&xo(n,t,l,bu,e),i===a)break;a=i}a!==null&&l.stopPropagation()}else xo(n,t,l,null,e)}}function Go(n){return n=Hu(n),Ho(n)}var bu=null;function Ho(n){if(bu=null,n=Fn(n),n!==null){var t=D(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=B(t),n!==null)return n;n=null}else if(e===31){if(n=G(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return bu=n,null}function Bd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_u()){case ju:return 2;case Je:return 8;case Ot:case ci:return 32;case vl:return 268435456;default:return 32}default:return 32}}var wo=!1,Le=null,Ye=null,ke=null,ti=new Map,ei=new Map,Qe=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ud(n,t){switch(n){case"focusin":case"focusout":Le=null;break;case"dragenter":case"dragleave":Ye=null;break;case"mouseover":case"mouseout":ke=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function li(n,t,e,l,a,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Se(t),t!==null&&Rd(t)),n):(n.eventSystemFlags|=l,t=n.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),n)}function bm(n,t,e,l,a){switch(t){case"focusin":return Le=li(Le,n,t,e,l,a),!0;case"dragenter":return Ye=li(Ye,n,t,e,l,a),!0;case"mouseover":return ke=li(ke,n,t,e,l,a),!0;case"pointerover":var i=a.pointerId;return ti.set(i,li(ti.get(i)||null,n,t,e,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ei.set(i,li(ei.get(i)||null,n,t,e,l,a)),!0}return!1}function Gd(n){var t=Fn(n.target);if(t!==null){var e=D(t);if(e!==null){if(t=e.tag,t===13){if(t=B(e),t!==null){n.blockedOn=t,pa(n.priority,function(){Cd(e)});return}}else if(t===31){if(t=G(e),t!==null){n.blockedOn=t,pa(n.priority,function(){Cd(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vu(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=Go(n.nativeEvent);if(e===null){e=n.nativeEvent;var l=new e.constructor(e.type,e);Gu=l,e.target.dispatchEvent(l),Gu=null}else return t=Se(e),t!==null&&Rd(t),n.blockedOn=e,!1;t.shift()}return!0}function Hd(n,t,e){vu(n)&&e.delete(t)}function vm(){wo=!1,Le!==null&&vu(Le)&&(Le=null),Ye!==null&&vu(Ye)&&(Ye=null),ke!==null&&vu(ke)&&(ke=null),ti.forEach(Hd),ei.forEach(Hd)}function yu(n,t){n.blockedOn===t&&(n.blockedOn=null,wo||(wo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vm)))}var xu=null;function wd(n){xu!==n&&(xu=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xu===n&&(xu=null);for(var t=0;t<n.length;t+=3){var e=n[t],l=n[t+1],a=n[t+2];if(typeof l!="function"){if(Ho(l||e)===null)continue;break}var i=Se(e);i!==null&&(n.splice(t,3),t-=3,Uc(i,{pending:!0,data:a,method:e.method,action:l},l,a))}}))}function la(n){function t(s){return yu(s,n)}Le!==null&&yu(Le,n),Ye!==null&&yu(Ye,n),ke!==null&&yu(ke,n),ti.forEach(t),ei.forEach(t);for(var e=0;e<Qe.length;e++){var l=Qe[e];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Qe.length&&(e=Qe[0],e.blockedOn===null);)Gd(e),e.blockedOn===null&&Qe.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var a=e[l],i=e[l+1],u=a[it]||null;if(typeof i=="function")u||wd(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[it]||null)c=u.formAction;else if(Ho(a)!==null)continue}else c=u.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),wd(e)}}}function Nd(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function No(n){this._internalRoot=n}Su.prototype.render=No.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(f(409));var e=t.current,l=_t();Dd(e,l,n,t,null,null)},Su.prototype.unmount=No.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Dd(n.current,2,null,n,null,null),tu(),t[Pt]=null}};function Su(n){this._internalRoot=n}Su.prototype.unstable_scheduleHydration=function(n){if(n){var t=ma();n={blockedOn:null,target:n,priority:t};for(var e=0;e<Qe.length&&t!==0&&t<Qe[e].priority;e++);Qe.splice(e,0,n),e===0&&Gd(n)}};var qd=T.version;if(qd!=="19.2.4")throw Error(f(527,qd,"19.2.4"));U.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(f(188)):(n=Object.keys(n).join(","),Error(f(268,n)));return n=x(t),n=n!==null?V(n):null,n=n===null?null:n.stateNode,n};var ym={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Zt=Au.inject(ym),tt=Au}catch{}}return ii.createRoot=function(n,t){if(!A(n))throw Error(f(299));var e=!1,l="",a=Zs,i=Ks,u=Js;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=_d(n,1,!1,null,null,e,l,null,a,i,u,Nd),n[Pt]=t.current,yo(n),new No(t)},ii.hydrateRoot=function(n,t,e){if(!A(n))throw Error(f(299));var l=!1,a="",i=Zs,u=Ks,c=Js,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(s=e.formState)),t=_d(n,1,!0,t,e??null,l,a,s,i,u,c,Nd),t.context=jd(null),e=t.current,l=_t(),l=Sl(l),a=je(l),a.callback=null,De(e,a,l),e=l,t.current.lanes=e,xe(t,e),Ft(t),n[Pt]=t.current,yo(n),new Su(t)},ii.version="19.2.4",ii}var Id;function Om(){if(Id)return Yo.exports;Id=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(T){console.error(T)}}return r(),Yo.exports=Dm(),Yo.exports}var Rm=Om();const Cm="modulepreload",Bm=function(r){return"/getbiji-docs-v3/"+r},Wd={},un=function(T,p,f){let A=Promise.resolve();if(p&&p.length>0){let B=function(x){return Promise.all(x.map(V=>Promise.resolve(V).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const G=document.querySelector("meta[property=csp-nonce]"),R=(G==null?void 0:G.nonce)||(G==null?void 0:G.getAttribute("nonce"));A=B(p.map(x=>{if(x=Bm(x),x in Wd)return;Wd[x]=!0;const V=x.endsWith(".css"),C=V?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const F=document.createElement("link");if(F.rel=V?"stylesheet":Cm,V||(F.as="script"),F.crossOrigin="",F.href=x,R&&F.setAttribute("nonce",R),document.head.appendChild(F),V)return new Promise((J,yn)=>{F.addEventListener("load",J),F.addEventListener("error",()=>yn(new Error(`Unable to preload CSS for ${x}`)))})}))}function D(B){const G=new Event("vite:preloadError",{cancelable:!0});if(G.payload=B,window.dispatchEvent(G),!G.defaultPrevented)throw B}return A.then(B=>{for(const G of B||[])G.status==="rejected"&&D(G.reason);return T().catch(D)})},Eu={amber:{dark:{bg:"#09090b",sf:"#111114",sfH:"#18181c",bd:"#1e1e24",tx:"#e4e4e7",tx2:"#a1a1aa",txM:"#919199",ac:"#e8a845",acD:"rgba(232,168,69,0.12)",acT:"#fbbf24",cdBg:"#0c0c0f",cdTx:"#c4c4cc",sbBg:"#0c0c0e",hdBg:"rgba(9,9,11,0.85)"},light:{bg:"#fafaf9",sf:"#ffffff",sfH:"#f5f5f4",bd:"#e7e5e4",tx:"#1c1917",tx2:"#57534e",txM:"#706b66",ac:"#96640a",acD:"rgba(150,100,10,0.08)",acT:"#7a5208",cdBg:"#f5f3f0",cdTx:"#2c2520",sbBg:"#f5f5f3",hdBg:"rgba(250,250,249,0.85)"},fonts:{heading:"Instrument Serif",body:"DM Sans",code:"JetBrains Mono"}},editorial:{dark:{bg:"#080c1f",sf:"#0e1333",sfH:"#141940",bd:"#1a2050",tx:"#e8e6f0",tx2:"#b5b1c8",txM:"#9490ae",ac:"#ff6b4a",acD:"rgba(255,107,74,0.1)",acT:"#ff8a70",cdBg:"#0a0e27",cdTx:"#b8b4cc",sbBg:"#0a0e27",hdBg:"rgba(8,12,31,0.9)"},light:{bg:"#f6f4f0",sf:"#ffffff",sfH:"#eeece6",bd:"#ddd9d0",tx:"#1a1716",tx2:"#4a443e",txM:"#706960",ac:"#b83d22",acD:"rgba(184,61,34,0.07)",acT:"#9c3019",cdBg:"#edeae4",cdTx:"#3a3530",sbBg:"#f0ede8",hdBg:"rgba(246,244,240,0.92)"},fonts:{heading:"Cormorant Garamond",body:"Bricolage Grotesque",code:"Fira Code"}}},Um=()=>o.jsx("svg",{width:22,height:22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Gm=()=>o.jsx("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Hm=()=>o.jsx("svg",{width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M22 2L11 13M22 2l-7 20-4-9-9-4z"})});function u0(r){let T="You are a helpful documentation assistant. Answer questions accurately based on the documentation provided below. If the answer isn't in the documentation, say so clearly. Keep answers concise and reference specific sections when possible.";if(r){const p=r.length>1e5?r.slice(0,1e5)+`

[Documentation truncated...]`:r;T+=`

Documentation:
${p}`}return T}async function wm(r,T,p,f){var B,G,R;const A=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${T}`},body:JSON.stringify({model:p,messages:[{role:"system",content:u0(f)},...r.map(x=>({role:x.role,content:x.content}))]})});if(!A.ok){const x=await A.text();throw new Error(`OpenAI API error (${A.status}): ${x}`)}return((R=(G=(B=(await A.json()).choices)==null?void 0:B[0])==null?void 0:G.message)==null?void 0:R.content)||"No response."}async function Nm(r,T,p,f){var B,G;const A=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":T,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:p,max_tokens:1024,system:u0(f),messages:r.map(R=>({role:R.role,content:R.content}))})});if(!A.ok){const R=await A.text();throw new Error(`Anthropic API error (${A.status}): ${R}`)}return((G=(B=(await A.json()).content)==null?void 0:B[0])==null?void 0:G.text)||"No response."}function qm(r){return r==="openai"?"gpt-4o-mini":"claude-sonnet-4-20250514"}function Lm({provider:r,model:T,apiKey:p,context:f}){const[A,D]=H.useState(!1),[B,G]=H.useState([]),[R,x]=H.useState(""),[V,C]=H.useState(!1),[F,J]=H.useState(null),yn=H.useRef(null),tn=H.useRef(null),cn=p||(typeof window<"u"?window.__TOME_AI_API_KEY__:void 0),O=T||qm(r);H.useEffect(()=>{var L;(L=yn.current)==null||L.scrollIntoView({behavior:"smooth"})},[B]),H.useEffect(()=>{A&&setTimeout(()=>{var L;return(L=tn.current)==null?void 0:L.focus()},100)},[A]);const Y=H.useCallback(async()=>{const L=R.trim();if(!L||V||!cn)return;const hn={role:"user",content:L},En=[...B,hn];G(En),x(""),C(!0),J(null);try{let w;r==="openai"?w=await wm(En,cn,O,f):w=await Nm(En,cn,O,f),G(Cn=>[...Cn,{role:"assistant",content:w}])}catch(w){J(w instanceof Error?w.message:"Failed to get response")}finally{C(!1)}},[R,V,B,r,cn,O,f]),Z=H.useCallback(L=>{L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),Y())},[Y]);return A?o.jsxs("div",{"data-testid":"ai-chat-panel",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:380,maxWidth:"calc(100vw - 48px)",height:520,maxHeight:"calc(100vh - 48px)",background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,boxShadow:"0 16px 64px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"var(--font-body)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--tx)"},children:"Ask AI"}),o.jsx("button",{"data-testid":"ai-chat-close",onClick:()=>D(!1),"aria-label":"Close AI chat",style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",padding:4},children:o.jsx(Gm,{})})]}),o.jsxs("div",{style:{flex:1,overflow:"auto",padding:"12px 16px"},children:[!cn&&o.jsxs("div",{"data-testid":"ai-chat-no-key",style:{textAlign:"center",color:"var(--txM)",fontSize:13,padding:"24px 8px",lineHeight:1.6},children:[o.jsx("p",{style:{marginBottom:8,fontWeight:500,color:"var(--tx)"},children:"AI not configured"}),o.jsxs("p",{style:{marginBottom:8},children:["To enable AI chat, set the ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"apiKeyEnv"})," in ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"tome.config.js"})," and provide the environment variable at build time."]}),o.jsxs("p",{style:{fontSize:11.5,color:"var(--txM)"},children:["Example: ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"TOME_AI_KEY=sk-... tome build"})]})]}),B.map((L,hn)=>o.jsx("div",{"data-testid":`ai-chat-message-${L.role}`,style:{marginBottom:12,display:"flex",justifyContent:L.role==="user"?"flex-end":"flex-start"},children:o.jsx("div",{style:{maxWidth:"85%",padding:"8px 12px",borderRadius:10,fontSize:13,lineHeight:1.55,whiteSpace:"pre-wrap",wordBreak:"break-word",background:L.role==="user"?"var(--ac)":"var(--cdBg)",color:L.role==="user"?"#fff":"var(--tx)"},children:L.content})},hn)),V&&o.jsx("div",{"data-testid":"ai-chat-loading",style:{display:"flex",justifyContent:"flex-start",marginBottom:12},children:o.jsx("div",{style:{padding:"8px 12px",borderRadius:10,fontSize:13,background:"var(--cdBg)",color:"var(--txM)"},children:"Thinking..."})}),F&&o.jsx("div",{"data-testid":"ai-chat-error",style:{padding:"8px 12px",borderRadius:8,fontSize:12,background:"rgba(220,50,50,0.1)",color:"#d44",marginBottom:12},children:F}),o.jsx("div",{ref:yn})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderTop:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("input",{ref:tn,"data-testid":"ai-chat-input",value:R,onChange:L=>x(L.target.value),onKeyDown:Z,placeholder:cn?"Ask a question...":"API key required",disabled:!cn,style:{flex:1,background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:8,padding:"8px 12px",color:"var(--tx)",fontSize:13,fontFamily:"var(--font-body)",outline:"none"}}),o.jsx("button",{"data-testid":"ai-chat-send",onClick:Y,disabled:!cn||!R.trim()||V,"aria-label":"Send message",style:{width:34,height:34,borderRadius:8,background:cn&&R.trim()?"var(--ac)":"var(--cdBg)",color:cn&&R.trim()?"#fff":"var(--txM)",border:"none",cursor:cn&&R.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o.jsx(Hm,{})})]})]}):o.jsx("button",{"data-testid":"ai-chat-button",onClick:()=>D(!0),"aria-label":"Open AI chat",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:48,height:48,borderRadius:"50%",background:"var(--ac)",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",transition:"transform 0.15s"},children:o.jsx(Um,{})})}function Ym(r){const T=/^#([0-9a-f]{6})$/i.exec(r.trim());if(!T)return null;const p=parseInt(T[1],16);return[p>>16&255,p>>8&255,p&255]}function km(r,T){const p=Ym(r);if(!p)return null;const[f,A,D]=p,B=`rgba(${f},${A},${D},${T?.12:.08})`,G=T?1.15:.85,R=Math.min(255,Math.round(f*G)),x=Math.min(255,Math.round(A*G)),V=Math.min(255,Math.round(D*G)),C=`rgb(${R},${x},${V})`;return{ac:r,acD:B,acT:C}}const jt=({d:r,size:T=16})=>o.jsx("svg",{width:T,height:T,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:r})}),c0=()=>o.jsx(jt,{d:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"}),Fd=()=>o.jsx(jt,{d:"M9 18l6-6-6-6",size:14}),Vo=()=>o.jsx(jt,{d:"M6 9l6 6 6-6",size:14}),Qm=()=>o.jsx(jt,{d:"M3 12h18M3 6h18M3 18h18",size:20}),Xm=()=>o.jsx(jt,{d:"M18 6L6 18M6 6l12 12",size:18}),$d=()=>o.jsx(jt,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),Pd=()=>o.jsx(jt,{d:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a1 1 0 0 1 1-1v-1a1 1 0 0 1-2 0v1a1 1 0 0 1 1 1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm18-1h-1a1 1 0 0 1 0 2h1a1 1 0 0 1 0-2ZM6.34 6.34a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Zm12.73-2.12-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41ZM6.34 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41Zm12.73 2.12-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41Z"}),n0=()=>o.jsx(jt,{d:"M19 12H5M12 19l-7-7 7-7",size:14}),t0=()=>o.jsx(jt,{d:"M5 12h14M12 5l7 7-7 7",size:14}),Vm=()=>o.jsx(jt,{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",size:13});function Zm(r){const T=new Date(r),f=new Date().getTime()-T.getTime();if(isNaN(f))return"";const A=Math.floor(f/1e3),D=Math.floor(A/60),B=Math.floor(D/60),G=Math.floor(B/24),R=Math.floor(G/30),x=Math.floor(G/365);return A<60?"just now":D<60?`${D} minute${D===1?"":"s"} ago`:B<24?`${B} hour${B===1?"":"s"} ago`:G<30?`${G} day${G===1?"":"s"} ago`:R<12?`${R} month${R===1?"":"s"} ago`:x>=1?`${x} year${x===1?"":"s"} ago`:T.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}let aa=null;const Km="/_pagefind/pagefind.js";async function Jm(){if(aa)return aa;try{return aa=await import(Km),await aa.init(),aa}catch{return null}}let Tu=null;function Im(){return Tu||(Tu=un(()=>import("./theme-BIHI7g3E.js"),[]).catch(()=>null),Tu)}function Wm({appId:r,apiKey:T,indexName:p,onNavigate:f,onClose:A,basePath:D=""}){const[B,G]=H.useState(null),[R,x]=H.useState(!1);H.useEffect(()=>{Im().then(C=>{C&&C.DocSearch?G(()=>C.DocSearch):C&&C.default?G(()=>C.default):x(!0)})},[]);const V=H.useCallback(C=>{try{let J=new URL(C,"http://localhost").pathname;if(D){const yn=D.replace(/\/$/,"");J.startsWith(yn)&&(J=J.slice(yn.length))}return J.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index"}catch{return"index"}},[D]);return R?o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{onClick:C=>C.stopPropagation(),style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Algolia DocSearch is not available. Install @docsearch/react to enable it."})}):B?o.jsx("div",{"data-testid":"algolia-search-modal",children:o.jsx(B,{appId:r,apiKey:T,indexName:p,navigator:{navigate({itemUrl:C}){const F=V(C);f(F)}},hitComponent:({hit:C,children:F})=>o.jsx("a",{href:C.url,onClick:J=>{J.preventDefault();const yn=V(C.url);f(yn)},children:F})})}):o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Loading search..."})})}const Fm=()=>o.jsx(jt,{d:"M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",size:14}),$m=()=>o.jsx(jt,{d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z",size:14}),Pm=()=>o.jsx(jt,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",size:11}),n1={github:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",twitter:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",discord:"M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.028-.07 8.735 8.735 0 01-1.248-.595.05.05 0 01-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085c-.399.232-.813.431-1.249.594a.05.05 0 00-.03.07c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019z",linkedin:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",youtube:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",mastodon:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765 2.79.765.504 1.783.504 5.253c-.005.995-.01 2.19.013 3.44.075 4.21.56 8.354 3.383 9.386 1.302.476 2.418.576 3.317.507 1.628-.125 2.541-.8 2.541-.8l-.054-1.182s-1.163.366-2.47.322c-1.293-.044-2.658-.138-2.867-1.716a3.23 3.23 0 01-.028-.465s1.27.31 2.879.384c.984.045 1.905-.058 2.842-.17zM13 8.59V5.319c0-.67-.17-1.2-.507-1.592-.348-.4-.806-.605-1.373-.605-.656 0-1.154.252-1.486.756L9.2 4.595l-.434-.717c-.332-.504-.83-.756-1.486-.756-.567 0-1.025.204-1.373.605-.338.392-.507.923-.507 1.592V8.59h1.69V5.468c0-.67.285-1.012.855-1.012.63 0 .946.404.946 1.204V7.11h1.682V5.66c0-.8.316-1.204.946-1.204.57 0 .855.342.855 1.012V8.59H13z",bluesky:"M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.724-1.498 2.697-4.29 4.532-5.668C13.855 1.013 16 .638 16 3.14c0 .5-.286 4.2-.454 4.8-.585 2.093-2.716 2.628-4.544 2.305 3.195.564 4.007 2.433 2.25 4.302-3.337 3.548-4.8-1.244-5.252-2.547 0 0-.116-.334-.166-.334h.332C8.166 11.666 8.05 12 8.05 12c-.452 1.303-1.916 6.095-5.252 2.547-1.756-1.869-.946-3.738 2.25-4.302-1.829.323-3.96-.212-4.544-2.305C.336 7.34.05 3.64.05 3.14.05.638 2.195 1.013 3.468 1.948z"},t1=({platform:r,customIcon:T})=>{const p=r==="custom"&&T?T:n1[r];return p?o.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor",children:o.jsx("path",{d:p})}):null},e1={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function l1({entries:r}){const[T,p]=H.useState(r.length<=5),f=T?r:r.slice(0,5);return o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),f.map((A,D)=>o.jsxs("div",{"data-testid":`changelog-entry-${A.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:D<f.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:A.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:A.url?o.jsx("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:A.version}):A.version}),A.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:A.date})]}),A.sections.map(B=>{const G=e1[B.type]||"#6b7280";return o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:G}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:G,fontFamily:"var(--font-code, monospace)"},children:B.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:B.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},B.type)})]},A.version)),!T&&r.length>5&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>p(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer"},children:["Show all ",r.length," releases"]})})]})}function a1(r,T,p){if(T==="index")return[];for(const f of r)if(f.pages.find(D=>D.id===T)){const D=[],B=f.pages[0];return D.push({label:f.section,href:B?B.urlPath:null}),D.push({label:p,href:null}),D}return[]}function i1({config:r,navigation:T,currentPageId:p,pageHtml:f,pageComponent:A,mdxComponents:D,pageTitle:B,pageDescription:G,headings:R,tocEnabled:x=!0,editUrl:V,lastUpdated:C,changelogEntries:F,onNavigate:J,allPages:yn,versioning:tn,currentVersion:cn,i18n:O,currentLocale:Y,docContext:Z,basePath:L="",isDraft:hn,dir:En,overrides:w}){var Kt,We,ye,fi,sa,xl,xe,si,ra,da,ga,Sl,Al,ma,pa,kt,Qn,it,Pt;const Cn=Y||(O==null?void 0:O.defaultLocale)||"en",In=En||((Kt=O==null?void 0:O.localeDirs)==null?void 0:Kt[Cn])||"ltr",_n=In==="rtl",Wn=((We=r.theme)==null?void 0:We.mode)||"auto",[Gn,Dt]=H.useState(()=>{var h;return Wn==="dark"?!0:Wn==="light"?!1:((h=window.matchMedia)==null?void 0:h.call(window,"(prefers-color-scheme: dark)").matches)??!0}),[on,yt]=H.useState(()=>typeof window<"u"&&window.innerWidth<768),[E,U]=H.useState(()=>typeof window<"u"&&window.innerWidth>=768),[I,fn]=H.useState(!1),[Tn,g]=H.useState(!1),[j,N]=H.useState(!1),[k,$]=H.useState(null),[an,bn]=H.useState({}),[Pn,wn]=H.useState(()=>{var h;if(!((h=r.banner)!=null&&h.text))return!0;try{const q=Array.from(r.banner.text).reduce((P,mn)=>(P<<5)-P+mn.charCodeAt(0)|0,0).toString(36);return localStorage.getItem("tome-banner-dismissed")===q}catch{return!1}}),Ze=tn&&cn&&cn!==tn.current,[Ke,ia]=H.useState(T.map(h=>h.section)),$t=H.useRef(null),Yt=H.useRef(null),ml=H.useRef(""),[pl,Mu]=H.useState(()=>typeof window<"u"&&window.innerWidth>1100),ua=((ye=r.theme)==null?void 0:ye.preset)||"amber",hl=((fi=Eu[ua])==null?void 0:fi[Gn?"dark":"light"])||Eu.amber.dark,bl=(sa=r.theme)!=null&&sa.accent?km(r.theme.accent,Gn):null,nt=bl?{...hl,...bl}:hl,ca=((xl=Eu[ua])==null?void 0:xl.fonts)||Eu.amber.fonts,oa={heading:((si=(xe=r.theme)==null?void 0:xe.fonts)==null?void 0:si.heading)||ca.heading,body:((da=(ra=r.theme)==null?void 0:ra.fonts)==null?void 0:da.body)||ca.body,code:((Sl=(ga=r.theme)==null?void 0:ga.fonts)==null?void 0:Sl.code)||ca.code};H.useEffect(()=>{if(Wn!=="auto")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),q=P=>Dt(P.matches);return h.addEventListener("change",q),()=>h.removeEventListener("change",q)},[Wn]),H.useEffect(()=>{document.documentElement.classList.toggle("dark",Gn)},[Gn]),H.useEffect(()=>{const h=()=>{const q=window.innerWidth;Mu(q>1100),yt(q<768)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),H.useEffect(()=>{if(on&&E)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[on,E]),H.useEffect(()=>{var h;(h=$t.current)==null||h.scrollTo(0,0)},[p]),H.useEffect(()=>{const h=$t.current;if(!h)return;const q=P=>{const mn=P.target;mn.tagName==="IMG"&&mn.closest(".tome-content")&&$(mn.src)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[]),H.useEffect(()=>{const h=$t.current;if(!h)return;const q=P=>{const mn=P.target.closest("a");if(!mn)return;const vn=mn.getAttribute("href");if(!vn||vn.startsWith("http://")||vn.startsWith("https://")||vn.startsWith("mailto:")||vn.startsWith("tel:")||vn.startsWith("//")||vn.startsWith("#"))return;P.preventDefault();let Xn=vn.replace(/^\.\//,"").replace(/^\//,"").replace(/\.mdx?$/,"").replace(/\/$/,"");if(L){const Fn=L.replace(/^\//,"").replace(/\/$/,"");Fn&&Xn.startsWith(Fn+"/")?Xn=Xn.slice(Fn.length+1):Fn&&Xn===Fn&&(Xn="index")}Xn||(Xn="index"),J(Xn)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[J,L]),H.useEffect(()=>{if(!k)return;const h=q=>{q.key==="Escape"&&$(null)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[k]);const kn=r.toc,_u=(kn==null?void 0:kn.depth)??3,Je=(kn==null?void 0:kn.enabled)!==!1&&x,Ot=R.filter(h=>h.depth<=_u),[ci,vl]=H.useState("");H.useEffect(()=>{if(!Je||Ot.length<2)return;const h=$t.current;if(!h)return;const q=setTimeout(()=>{const P=[];for(const vn of Ot){const Xn=h.querySelector(`#${CSS.escape(vn.id)}`);Xn&&P.push(Xn)}if(P.length===0)return;const mn=new IntersectionObserver(vn=>{const Xn=vn.filter(Fn=>Fn.isIntersecting).sort((Fn,Se)=>Fn.boundingClientRect.top-Se.boundingClientRect.top);Xn.length>0&&vl(Xn[0].target.id)},{root:h,rootMargin:"0px 0px -80% 0px",threshold:0});for(const vn of P)mn.observe(vn);fa.current=mn},100);return()=>{var P;clearTimeout(q),(P=fa.current)==null||P.disconnect(),fa.current=null}},[p,Je,Ot.map(h=>h.id).join(",")]);const fa=H.useRef(null);H.useEffect(()=>{vl("")},[p]),H.useEffect(()=>{if(!Yt.current||!f)return;const h=f.replace(/<h1[^>]*>[\s\S]*?<\/h1>\s*/,"");h!==ml.current&&(Yt.current.innerHTML=h,ml.current=h)},[f]);const oi=H.useCallback((h,q)=>{h.preventDefault();const P=$t.current;if(!P)return;const mn=P.querySelector(`#${CSS.escape(q)}`);mn&&(mn.scrollIntoView({behavior:"smooth",block:"start"}),vl(q))},[]);H.useEffect(()=>{const h=q=>{(q.metaKey||q.ctrlKey)&&q.key==="k"&&(q.preventDefault(),fn(!0)),q.key==="Escape"&&fn(!1)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]);const Zt=T.flatMap(h=>h.pages),tt=Zt.findIndex(h=>h.id===p),xt=tt>0?Zt[tt-1]:null,et=tt<Zt.length-1?Zt[tt+1]:null,yl=a1(T,p,B),Du=h=>ia(q=>q.includes(h)?q.filter(P=>P!==h):[...q,h]),Ou={"--bg":nt.bg,"--sf":nt.sf,"--sfH":nt.sfH,"--bd":nt.bd,"--tx":nt.tx,"--tx2":nt.tx2,"--txM":nt.txM,"--ac":nt.ac,"--acD":nt.acD,"--acT":nt.acT,"--cdBg":nt.cdBg,"--cdTx":nt.cdTx,"--sbBg":nt.sbBg,"--hdBg":nt.hdBg,"--font-heading":`"${oa.heading}", serif`,"--font-body":`"${oa.body}", sans-serif`,"--font-code":`"${oa.code}", monospace`},Ie=A,dt=(Al=r.banner)==null?void 0:Al.link,ve=dt?dt.startsWith("#")||L&&dt.startsWith(L+"/"):!1;return o.jsxs("div",{dir:In,className:"tome-grain",style:{...Ou,color:"var(--tx)",background:"var(--bg)",fontFamily:"var(--font-body)",minHeight:"100vh",overflow:"hidden"},children:[((ma=r.banner)==null?void 0:ma.text)&&!Pn&&o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"var(--ac)",color:"#fff",padding:"8px 16px",fontSize:13,fontFamily:"var(--font-body)",fontWeight:500,textAlign:"center",width:"100vw",boxSizing:"border-box"},children:[r.banner.link?o.jsx("a",{href:ve&&dt.startsWith("#")?L+"/"+dt.slice(1):dt,...ve?{}:{target:"_blank",rel:"noopener noreferrer"},style:{color:"#fff",textDecoration:"underline"},onClick:ve?h=>{h.preventDefault();const q=L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),P=dt.startsWith("#")?dt.slice(1):dt.replace(new RegExp("^"+q+"/?"),"");J(P||"index")}:void 0,children:r.banner.text}):o.jsx("span",{children:r.banner.text}),r.banner.dismissible!==!1&&o.jsx("button",{onClick:()=>{wn(!0);try{const h=Array.from(r.banner.text).reduce((q,P)=>(q<<5)-q+P.charCodeAt(0)|0,0).toString(36);localStorage.setItem("tome-banner-dismissed",h)}catch{}},"aria-label":"Dismiss banner",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",fontSize:16,lineHeight:1,padding:0,opacity:.8},children:"×"})]}),I&&((pa=r.search)==null?void 0:pa.provider)==="algolia"&&r.search.appId&&r.search.apiKey&&r.search.indexName?o.jsx(Wm,{appId:r.search.appId,apiKey:r.search.apiKey,indexName:r.search.indexName,onNavigate:h=>{J(h),fn(!1)},onClose:()=>fn(!1),basePath:L}):I?o.jsx(u1,{allPages:yn,onNavigate:h=>{J(h),fn(!1)},onClose:()=>fn(!1),mobile:on}):null,o.jsxs("div",{style:{display:"flex",flexDirection:_n?"row-reverse":"row",flex:1,height:(kt=r.banner)!=null&&kt.text&&!Pn?"calc(100vh - 32px)":"100vh"},children:[on&&E&&o.jsx("div",{onClick:()=>U(!1),style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"}}),w!=null&&w.Sidebar?o.jsx(w.Sidebar,{config:r,navigation:T,currentPageId:p,onNavigate:J,mobile:on,sbOpen:E,setSbOpen:U,versioning:tn,currentVersion:cn}):o.jsxs("aside",{style:{width:E?270:0,minWidth:E?270:0,background:"var(--sbBg)",[_n?"borderLeft":"borderRight"]:"1px solid var(--bd)",display:"flex",flexDirection:"column",transition:"width .2s, min-width .2s",overflow:"hidden",...on?{position:"fixed",top:0,[_n?"right":"left"]:0,bottom:0,zIndex:201}:{}},children:[o.jsxs("a",{href:"/getbiji-docs-v3/",style:{padding:"18px 20px",display:"flex",alignItems:"baseline",gap:6,borderBottom:"1px solid var(--bd)",textDecoration:"none",color:"inherit"},children:[o.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:22,fontWeight:700,fontStyle:"italic"},children:r.name}),o.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"var(--ac)",display:"inline-block"}})]}),o.jsx("div",{style:{padding:"12px 14px"},children:o.jsxs("button",{onClick:()=>{fn(!0),on&&U(!1)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 12px",cursor:"pointer",color:"var(--txM)",fontSize:12.5,fontFamily:"var(--font-body)"},children:[o.jsx(c0,{}),o.jsx("span",{style:{flex:1,textAlign:_n?"right":"left"},children:"Search..."}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:9,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"2px 6px"},children:"⌘K"})]})}),o.jsx("nav",{style:{flex:1,overflow:"auto",padding:"4px 10px 20px"},children:T.map(h=>o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("button",{onClick:()=>Du(h.section),style:{display:"flex",alignItems:"center",gap:6,width:"100%",background:"none",border:"none",padding:"8px 10px",cursor:"pointer",borderRadius:2,color:"var(--txM)",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",fontFamily:"var(--font-code)"},children:[Ke.includes(h.section)?o.jsx(Vo,{}):o.jsx(Fd,{}),h.section]}),Ke.includes(h.section)&&o.jsx("div",{style:{[_n?"marginRight":"marginLeft"]:8,[_n?"borderRight":"borderLeft"]:"1px solid var(--bd)",[_n?"paddingRight":"paddingLeft"]:0},children:h.pages.map(q=>{const P=p===q.id;return o.jsxs("button",{onClick:()=>{J(q.id),on&&U(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:_n?"right":"left",background:"none",border:"none",borderRadius:0,[_n?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",padding:"7px 14px",cursor:"pointer",color:P?"var(--ac)":"var(--tx2)",fontSize:13,fontWeight:P?500:400,fontFamily:"var(--font-body)",transition:"all .12s"},children:[q.title,q.badge&&(()=>{const mn={default:{bg:"var(--sf)",text:"var(--tx2)"},info:{bg:"rgba(59,130,246,0.15)",text:"rgb(59,130,246)"},success:{bg:"rgba(34,197,94,0.15)",text:"rgb(34,197,94)"},warning:{bg:"rgba(234,179,8,0.15)",text:"rgb(202,138,4)"},danger:{bg:"rgba(239,68,68,0.15)",text:"rgb(239,68,68)"}},vn=mn[q.badge.variant||"default"]||mn.default;return o.jsx("span",{style:{fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,marginLeft:6,whiteSpace:"nowrap",background:vn.bg,color:vn.text},children:q.badge.text})})()]},q.id)})})]},h.section))}),tn&&on&&o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid var(--bd)",display:"flex",gap:6},children:tn.versions.map(h=>o.jsxs("button",{onClick:()=>{const q=h===tn.current?"index":`${h}/index`;J(q)},style:{flex:1,padding:"3px 0",textAlign:"center",background:h===(cn||tn.current)?"var(--acD)":"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,cursor:"pointer",color:h===(cn||tn.current)?"var(--ac)":"var(--tx2)",fontSize:11,fontFamily:"var(--font-code)",fontWeight:h===tn.current?600:400},children:[h,h===tn.current?" (latest)":""]},h))}),o.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Wn==="auto"?o.jsx("button",{"aria-label":Gn?"Switch to light mode":"Switch to dark mode",onClick:()=>Dt(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:Gn?o.jsx(Pd,{}):o.jsx($d,{})}):o.jsx("div",{}),o.jsxs("span",{style:{fontSize:11,color:"var(--txM)",letterSpacing:.2},children:["Built with ","♡"," by Tome"]}),o.jsx("span",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)"},children:"v0.3.2"})]})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w!=null&&w.Header?o.jsx(w.Header,{config:r,navigation:T,currentPageId:p,onNavigate:J,mobile:on,sbOpen:E,setSbOpen:U,isDark:Gn,setDark:Dt,versioning:tn,currentVersion:cn,i18n:O,currentLocale:Y,onSearchOpen:()=>fn(!0),basePath:L}):o.jsxs("header",{style:{display:"flex",alignItems:"center",gap:on?8:12,padding:on?"8px 12px":"10px 24px",borderBottom:"1px solid var(--bd)",background:"var(--hdBg)",backdropFilter:"blur(12px)",maxWidth:"100vw",overflow:"visible",position:"relative",zIndex:200},children:[o.jsx("button",{"aria-label":E?"Close sidebar":"Open sidebar",onClick:()=>U(!E),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:E?o.jsx(Xm,{}):o.jsx(Qm,{})}),on?o.jsx("span",{style:{fontSize:13,color:"var(--ac)",fontFamily:"var(--font-code)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((Qn=T.flatMap(h=>h.pages).find(h=>h.id===p))==null?void 0:Qn.title)||""}):o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-code)",fontSize:11,color:"var(--txM)",letterSpacing:".03em",flex:1},children:T.map(h=>{const q=h.pages.find(P=>P.id===p);return q?o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{children:h.section}),o.jsx(Fd,{}),o.jsx("span",{style:{color:"var(--ac)"},children:q.title})]},h.section):null})}),r.topNav&&r.topNav.length>0&&!on&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.topNav.map(h=>{const q=h.href.startsWith("#")||L&&h.href.startsWith(L+"/"),P=!q;return o.jsxs("a",{href:q&&h.href.startsWith("#")?L+"/"+h.href.slice(1):h.href,...P?{target:"_blank",rel:"noopener noreferrer"}:{},onClick:q?mn=>{mn.preventDefault();const vn=h.href.startsWith("#")?h.href.slice(1):h.href.replace(new RegExp("^"+L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"/?"),"");J(vn)}:void 0,style:{display:"flex",alignItems:"center",gap:4,color:"var(--txM)",textDecoration:"none",fontSize:12,fontFamily:"var(--font-body)",fontWeight:500,transition:"color .15s"},onMouseOver:mn=>mn.currentTarget.style.color="var(--ac)",onMouseOut:mn=>mn.currentTarget.style.color="var(--txM)",children:[h.label,P&&o.jsx(Pm,{})]},h.label)}),o.jsx("span",{style:{width:1,height:16,background:"var(--bd)"}})]}),r.socialLinks&&r.socialLinks.length>0&&!on&&o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:r.socialLinks.map(h=>o.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer","aria-label":h.label||h.platform,"data-testid":`social-link-${h.platform}`,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--tx2)",cursor:"pointer",transition:"color .15s"},onMouseOver:q=>q.currentTarget.style.color="var(--tx)",onMouseOut:q=>q.currentTarget.style.color="var(--tx2)",children:o.jsx(t1,{platform:h.platform,customIcon:h.icon})},h.url))}),on&&Wn==="auto"&&o.jsx("button",{"aria-label":Gn?"Switch to light mode":"Switch to dark mode",onClick:()=>Dt(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",flexShrink:0},children:Gn?o.jsx(Pd,{}):o.jsx($d,{})}),tn&&!on&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"version-switcher",onClick:()=>g(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)"},children:[o.jsx(Fm,{}),cn||tn.current,o.jsx(Vo,{})]}),Tn&&o.jsx("div",{"data-testid":"version-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:tn.versions.map(h=>o.jsxs("button",{onClick:()=>{g(!1);const q=h===tn.current?"index":`${h}/index`;J(q)},style:{display:"block",width:"100%",textAlign:"left",background:h===(cn||tn.current)?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:h===(cn||tn.current)?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)",fontWeight:h===tn.current?600:400},children:[h,h===tn.current?" (latest)":""]},h))})]}),O&&O.locales.length>1&&!on&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"language-switcher",onClick:()=>N(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)"},children:[o.jsx($m,{}),((it=O.localeNames)==null?void 0:it[Y||O.defaultLocale])||Y||O.defaultLocale,o.jsx(Vo,{})]}),j&&o.jsx("div",{"data-testid":"language-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:O.locales.map(h=>{var Fn;const q=h===(Y||O.defaultLocale),P=((Fn=O.localeNames)==null?void 0:Fn[h])||h,mn=Y||O.defaultLocale;let vn=p;mn!==O.defaultLocale&&p.startsWith(`${mn}/`)&&(vn=p.slice(mn.length+1));const Xn=h===O.defaultLocale?vn:`${h}/${vn}`;return o.jsx("button",{onClick:()=>{N(!1),J(Xn)},style:{display:"block",width:"100%",textAlign:"left",background:q?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:q?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)",fontWeight:q?600:400},children:P},h)})})]})]}),Ze&&o.jsxs("div",{"data-testid":"old-version-banner",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"var(--acD)",borderBottom:"1px solid var(--bd)",padding:"8px 24px",fontSize:13,color:"var(--tx2)"},children:[o.jsxs("span",{children:["You're viewing docs for ",cn,"."]}),o.jsx("button",{onClick:()=>{J("index")},style:{background:"none",border:"none",color:"var(--ac)",cursor:"pointer",fontWeight:600,fontSize:13,fontFamily:"var(--font-body)",textDecoration:"underline"},children:"Switch to latest."})]}),o.jsxs("div",{ref:$t,style:{flex:1,overflow:"auto",display:"flex"},children:[o.jsxs("main",{style:{flex:1,maxWidth:on?"100%":760,padding:on?"24px 16px 60px":"40px 48px 80px",margin:"0 auto",minWidth:0},children:[yl.length>0&&o.jsx("nav",{"aria-label":"Breadcrumbs","data-testid":"breadcrumbs",style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--tx2)",marginBottom:8},children:yl.map((h,q)=>o.jsxs(i0.Fragment,{children:[q>0&&o.jsx("span",{style:{color:"var(--tx2)",opacity:.5},children:"›"}),q<yl.length-1&&h.href!==null?o.jsx("a",{href:h.href,onClick:P=>{P.preventDefault();const mn=T.flatMap(vn=>vn.pages).find(vn=>vn.urlPath===h.href);mn&&J(mn.id)},style:{color:"var(--tx2)",textDecoration:"none",cursor:"pointer"},children:h.label}):o.jsx("span",{style:q===yl.length-1?{color:"var(--tx)"}:void 0,children:h.label})]},q))}),o.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:on?26:38,fontWeight:400,fontStyle:"italic",lineHeight:1.15,marginBottom:8},children:B}),hn&&o.jsx("div",{"data-testid":"draft-banner",style:{background:"#fef3c7",color:"#92400e",padding:"8px 16px",borderRadius:6,fontSize:13,marginBottom:16},children:"Draft — This page is only visible in development"}),G&&o.jsx("p",{style:{fontSize:16,color:"var(--tx2)",lineHeight:1.6,marginBottom:32},children:G}),o.jsx("div",{style:{borderTop:"1px solid var(--bd)",paddingTop:28},children:F&&F.length>0?o.jsx(l1,{entries:F}):Ie?o.jsx("div",{className:"tome-content",children:o.jsx(Ie,{components:D||{}})}):o.jsx("div",{className:"tome-content",ref:Yt})}),w!=null&&w.PageFooter?o.jsx(w.PageFooter,{editUrl:V,lastUpdated:C,currentPageId:p,prev:xt,next:et,onNavigate:J,mobile:on}):o.jsxs(o.Fragment,{children:[(V||C)&&o.jsxs("div",{style:{marginTop:40,display:"flex",flexDirection:on?"column":"row",alignItems:on?"flex-start":"center",justifyContent:"space-between",gap:on?8:16},children:[V&&o.jsx("div",{"data-testid":"edit-page-link",children:o.jsxs("a",{href:V,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,color:"var(--txM)",textDecoration:"none",fontSize:13,fontFamily:"var(--font-body)",transition:"color .15s"},onMouseOver:h=>h.currentTarget.style.color="var(--ac)",onMouseOut:h=>h.currentTarget.style.color="var(--txM)",children:[o.jsx(Vm,{})," Edit this page on GitHub"]})}),C&&o.jsxs("div",{"data-testid":"last-updated",style:{fontSize:12,color:"var(--txM)",fontFamily:"var(--font-body)"},children:["Last updated ",Zm(C)]})]}),o.jsx("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:24,padding:"12px 0"},children:an[p]?o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Thanks for your feedback!"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Was this helpful?"}),o.jsx("button",{onClick:()=>{bn(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"up")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👍"}),o.jsx("button",{onClick:()=>{bn(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"down")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👎"})]})}),o.jsxs("div",{style:{display:"flex",flexDirection:on?"column":"row",justifyContent:"space-between",marginTop:16,paddingTop:24,borderTop:"1px solid var(--bd)",gap:on?12:16},children:[xt?o.jsxs("button",{onClick:()=>J(xt.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[_n?o.jsx(t0,{}):o.jsx(n0,{})," ",xt.title]}):o.jsx("div",{}),et?o.jsxs("button",{onClick:()=>J(et.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[et.title," ",_n?o.jsx(n0,{}):o.jsx(t0,{})]}):o.jsx("div",{})]})]})]}),w!=null&&w.Toc?Je&&Ot.length>=2&&pl&&o.jsx(w.Toc,{headings:Ot,activeHeadingId:ci,onScrollToHeading:oi}):Je&&Ot.length>=2&&pl&&o.jsxs("aside",{"data-testid":"toc-sidebar",style:{width:200,padding:_n?"40px 0 40px 16px":"40px 16px 40px 0",position:"sticky",top:0,alignSelf:"flex-start",flexShrink:0},children:[o.jsx("div",{style:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",color:"var(--txM)",marginBottom:12,fontFamily:"var(--font-code)"},children:"On this page"}),o.jsx("nav",{"aria-label":"Table of contents",style:{[_n?"borderRight":"borderLeft"]:"1px solid var(--bd)",[_n?"paddingRight":"paddingLeft"]:0},children:Ot.map((h,q)=>{const P=ci===h.id;return o.jsx("a",{href:`#${h.id}`,onClick:mn=>oi(mn,h.id),"data-testid":`toc-link-${h.id}`,style:{display:"block",fontSize:12,color:P?"var(--ac)":"var(--txM)",fontWeight:P?500:400,textDecoration:"none",padding:"4px 12px",[_n?"paddingRight":"paddingLeft"]:12+(h.depth-2)*12,lineHeight:1.4,transition:"color .15s, font-weight .15s",[_n?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",[_n?"marginRight":"marginLeft"]:-1},children:h.text},q)})})]})]})]})]}),(w==null?void 0:w.Footer)&&o.jsx(w.Footer,{config:r,navigation:T,currentPageId:p,onNavigate:J}),((Pt=r.ai)==null?void 0:Pt.enabled)&&o.jsx(Lm,{provider:r.ai.provider||"anthropic",model:r.ai.model,apiKey:typeof __TOME_AI_API_KEY__<"u"&&__TOME_AI_API_KEY__?__TOME_AI_API_KEY__:void 0,context:(Z==null?void 0:Z.map(h=>`## ${h.title}
${h.content}`).join(`

`))??yn.map(h=>`- ${h.title}${h.description?": "+h.description:""}`).join(`
`)}),k&&o.jsx("div",{onClick:()=>$(null),style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",cursor:"zoom-out"},children:o.jsx("img",{src:k,alt:"",style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:4,boxShadow:"0 16px 64px rgba(0,0,0,0.4)"}})})]})}function u1({allPages:r,onNavigate:T,onClose:p,mobile:f}){const[A,D]=H.useState(""),[B,G]=H.useState([]),[R,x]=H.useState(0),[V,C]=H.useState(null),F=H.useRef(null),J=H.useRef(void 0);H.useEffect(()=>{Jm().then(O=>C(!!O)),setTimeout(()=>{var O;return(O=F.current)==null?void 0:O.focus()},50)},[]);const yn=H.useCallback(O=>{if(!O.trim())return[];const Y=O.toLowerCase();return r.filter(Z=>Z.title.toLowerCase().includes(Y)||(Z.description||"").toLowerCase().includes(Y)).slice(0,8).map(Z=>({id:Z.id,title:Z.title,excerpt:Z.description}))},[r]),tn=H.useCallback(async O=>{var Z;if(!O.trim()){G([]),x(0);return}const Y=aa;if(Y)try{const L=await Y.search(O),hn=[];for(const En of L.results.slice(0,8)){const w=await En.data(),In=(w.url||"").replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index";hn.push({id:In,title:((Z=w.meta)==null?void 0:Z.title)||In,excerpt:w.excerpt||void 0})}G(hn),x(0);return}catch{}G(yn(O)),x(0)},[yn]);H.useEffect(()=>(J.current&&clearTimeout(J.current),J.current=setTimeout(()=>tn(A),120),()=>{J.current&&clearTimeout(J.current)}),[A,tn]);const cn=H.useCallback(O=>{O.key==="ArrowDown"?(O.preventDefault(),x(Y=>Math.min(Y+1,B.length-1))):O.key==="ArrowUp"?(O.preventDefault(),x(Y=>Math.max(Y-1,0))):O.key==="Enter"&&B.length>0&&(O.preventDefault(),T(B[R].id))},[B,R,T]);return o.jsx("div",{onClick:p,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:f?"stretch":"flex-start",justifyContent:"center",paddingTop:f?0:"12vh"},children:o.jsxs("div",{onClick:O=>O.stopPropagation(),style:{background:"var(--sf)",border:f?"none":"1px solid var(--bd)",borderRadius:f?0:2,width:"100%",maxWidth:f?"100%":520,boxShadow:f?"none":"0 24px 80px rgba(0,0,0,0.4)",overflow:"hidden",display:"flex",flexDirection:"column",...f?{height:"100%"}:{}},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid var(--bd)"},children:[o.jsx(c0,{}),o.jsx("input",{ref:F,value:A,onChange:O=>D(O.target.value),onKeyDown:cn,placeholder:"Search documentation...",style:{flex:1,background:"none",border:"none",outline:"none",color:"var(--tx)",fontSize:15,fontFamily:"var(--font-body)"}}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)",background:"var(--cdBg)",padding:"2px 6px",borderRadius:2,border:"1px solid var(--bd)"},children:"ESC"})]}),B.length>0&&o.jsx("div",{style:{padding:6,maxHeight:f?"none":360,overflow:"auto",flex:f?1:void 0},children:B.map((O,Y)=>o.jsxs("button",{onClick:()=>T(O.id),style:{display:"block",width:"100%",textAlign:"left",background:Y===R?"var(--acD)":"none",border:"none",borderRadius:2,padding:"10px 14px",cursor:"pointer",color:"var(--tx)",fontFamily:"var(--font-body)"},onMouseEnter:()=>x(Y),children:[o.jsx("div",{style:{fontWeight:500,fontSize:14,marginBottom:2},children:O.title}),O.excerpt&&o.jsx("div",{style:{fontSize:12,color:"var(--txM)",lineHeight:1.3},dangerouslySetInnerHTML:{__html:O.excerpt}})]},O.id+Y))}),A&&!B.length&&o.jsx("div",{style:{padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No results found"}),V===!1&&A&&B.length>0&&o.jsx("div",{style:{padding:"6px 18px 10px",fontSize:11,color:"var(--txM)",textAlign:"center"},children:"Showing title matches. Build your site for full-text search."})]})})}function o0(r,T,p){let f=r;T&&f.startsWith(T)&&(f=f.slice(T.length));const A=f.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"").replace(/\/$/,"")||"index";return p.find(B=>B.id===A)?A:null}function c1(r,T,p){const f=p.find(A=>A.id===r);return f?T+f.urlPath:T+"/"+r}function o1(r,T){if(!r||!T)return;const{repo:p,branch:f="main",dir:A=""}=r,D=A?`${A.replace(/\/$/,"")}/`:"";return`https://github.com/${p}/edit/${f}/${D}${T}`}function f1(r,T,p,f,A){var G;const D=A(r,f,p);if(D)return D;const B=T.startsWith("#")?T.slice(1):T;return B&&p.some(R=>R.id===B)?B:((G=p[0])==null?void 0:G.id)||"index"}async function f0(r,T,p){try{const f=T.find(D=>D.id===r),A=await p(r);return f!=null&&f.isMdx&&A.meta?{isMdx:!0,component:A.default,frontmatter:A.meta.frontmatter,headings:A.meta.headings}:A.default?A.isChangelog&&A.changelogEntries?{isMdx:!1,...A.default,changelogEntries:A.changelogEntries}:{isMdx:!1,...A.default}:null}catch(f){return console.error(`Failed to load page: ${r}`,f),null}}function s1(r,T){return(r==null?void 0:r.version)||void 0}const ui={name:"Get笔记帮助中心",basePath:"/getbiji-docs-v3",theme:{preset:"amber",accent:"#333333",mode:"light",fonts:{heading:"Inter",body:"Inter",code:"JetBrains Mono"}},navigation:[{group:"开始使用",pages:["getting-started/download","getting-started/quickstart"]},{group:"用户案例",pages:["use-cases/index"]},{group:"达人推荐",pages:["testimonials/index","testimonials/caojiang","testimonials/muyezhiyue","testimonials/wangshuyi","testimonials/xitongfeilun"]},{group:"开口记",pages:["recording/voice-memo","recording/meeting","recording/classroom","recording/screen-record"]},{group:"随手拍",pages:["recording/photo","recording/book-scan"]},{group:"一键存",pages:["recording/link","recording/import-media"]},{group:"录音增强",pages:["recording/voiceprint","recording/vocabulary","recording/voice-command"]},{group:"知识库",pages:["knowledge-base/create","knowledge-base/upload","knowledge-base/subscribe-live","knowledge-base/subscribe-creator","knowledge-base/add-notes","knowledge-base/share"]},{group:"GetSeed 录音卡",pages:["getseed/index","getseed/quickstart","getseed/device","getseed/liubixiefu","getseed/sprout","getseed/faq"]},{group:"快捷操作",pages:["shortcuts/siri","shortcuts/ios-shortcuts","shortcuts/widget"]},{group:"开发者",pages:["developer/index"]},{group:"常见问题",pages:["faq/index"]},{group:"版本更新",pages:["changelog/index"]}],search:{provider:"local"},toc:{enabled:!0,depth:3},math:!1,strictLinks:!1,lastUpdated:!0,redirects:[]},Ve=[{id:"changelog",filePath:"changelog/index.md",urlPath:"/changelog",frontmatter:{title:"版本更新",hidden:!1,draft:!1},isMdx:!1},{id:"developer",filePath:"developer/index.md",urlPath:"/developer",frontmatter:{title:"开发者",description:"通过 API 把 Get笔记的知识库能力接入你的应用，支持直接调用、Dify、扣子等多种方式",hidden:!1,draft:!1},isMdx:!1},{id:"faq",filePath:"faq/index.md",urlPath:"/faq",frontmatter:{title:"常见问题",description:"使用 Get笔记时遇到问题？这里有最常见问题的解答",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/device",filePath:"getseed/device.md",urlPath:"/getseed/device",frontmatter:{title:"设备指南",description:"GetSeed 录音卡的设备清单、按键说明、指示灯含义、充电方式、参数规格、开关机和重置操作",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/faq",filePath:"getseed/faq.md",urlPath:"/getseed/faq",frontmatter:{title:"常见问题",description:"GetSeed 录音卡的常见问题解答：设备连接、录音使用、充电续航、通话录音、会员权益、隐私安全等",hidden:!1,draft:!1},isMdx:!1},{id:"getseed",filePath:"getseed/index.md",urlPath:"/getseed",frontmatter:{title:"功能说明",description:"GetSeed 录音卡的核心功能介绍：一键 MARK 标记重点、录音中拍照随手记、闪念灵感记录、固件升级",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/liubixiefu",filePath:"getseed/liubixiefu.md",urlPath:"/getseed/liubixiefu",frontmatter:{title:"AI 柳比歇夫记日记",description:"让 AI 自动把你的每一天整理成客观日记，无需手动记录，支持对话补充和长期洞察",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/quickstart",filePath:"getseed/quickstart.md",urlPath:"/getseed/quickstart",frontmatter:{title:"快速使用",description:"GetSeed 录音卡开箱到上手的完整指南：添加设备、开始录音、闪念记录、通话录音、录音同步、生成笔记",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/sprout",filePath:"getseed/sprout.md",urlPath:"/getseed/sprout",frontmatter:{title:"笔记发芽",description:"AI 深度理解你的录音内容，跨领域跨学科生成关联报告，帮你从记录中发现新的认知和连接",hidden:!1,draft:!1},isMdx:!1},{id:"getting-started/download",filePath:"getting-started/download.md",urlPath:"/getting-started/download",frontmatter:{title:"下载安装",description:"Get笔记支持 iOS、Android、微信小程序和网页端，一分钟完成安装，马上开始记笔记",hidden:!1,draft:!1},isMdx:!1},{id:"getting-started/quickstart",filePath:"getting-started/quickstart.md",urlPath:"/getting-started/quickstart",frontmatter:{title:"快速上手",description:"5 分钟学会 Get笔记的四种记笔记方式：语音、会议录音、拍照、保存链接，还能搜索和追加笔记",hidden:!1,draft:!1},isMdx:!1},{id:"index",filePath:"index.md",urlPath:"/",frontmatter:{title:"Get笔记帮助中心",description:"让记笔记，找笔记，用笔记变得简单",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/add-notes",filePath:"knowledge-base/add-notes.md",urlPath:"/knowledge-base/add-notes",frontmatter:{title:"将笔记加入知识库",description:"把已有的录音、文字、图片、链接笔记添加到知识库，统一管理和 AI 搜索",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/create",filePath:"knowledge-base/create.md",urlPath:"/knowledge-base/create",frontmatter:{title:"创建知识库",description:"创建一个知识库，把笔记、文件、直播、博主内容集中管理，支持 AI 搜索和问答",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/share",filePath:"knowledge-base/share.md",urlPath:"/knowledge-base/share",frontmatter:{title:"分享和团队管理",description:"将知识库公开分享或设为团队模式，支持成员管理、权限分配和订阅他人知识库",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/subscribe-creator",filePath:"knowledge-base/subscribe-creator.md",urlPath:"/knowledge-base/subscribe-creator",frontmatter:{title:"订阅博主",description:"订阅抖音博主，新视频自动变笔记，每天早上更新，不错过任何精彩内容",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/subscribe-live",filePath:"knowledge-base/subscribe-live.md",urlPath:"/knowledge-base/subscribe-live",frontmatter:{title:"订阅直播",description:"订阅得到 App 或视频号直播，AI 自动全程记录并生成内容总结和章节纪要",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/upload",filePath:"knowledge-base/upload.md",urlPath:"/knowledge-base/upload",frontmatter:{title:"上传文件",description:"把 PDF、Word、PPT 文件上传到知识库，AI 自动分析内容，支持搜索和问答",hidden:!1,draft:!1},isMdx:!1},{id:"recording/book-scan",filePath:"recording/book-scan.md",urlPath:"/recording/book-scan",frontmatter:{title:"智能拍书",description:"拍下纸质书页自动识别书籍，3 秒变成数字笔记并归类到对应书籍",hidden:!1,draft:!1},isMdx:!1},{id:"recording/classroom",filePath:"recording/classroom.md",urlPath:"/recording/classroom",frontmatter:{title:"课堂录音",description:"上课录音自动转文字，AI 标注考点重点，下课即得一份完整学霸笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/import-media",filePath:"recording/import-media.md",urlPath:"/recording/import-media",frontmatter:{title:"导入音视频",description:"导入手机中已有的录音或视频文件，AI 自动转写文字并整理成结构化笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/link",filePath:"recording/link.md",urlPath:"/recording/link",frontmatter:{title:"链接保存",description:"复制公众号、抖音、B 站、小红书等链接粘贴进来，AI 自动读取内容并生成精华总结笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/meeting",filePath:"recording/meeting.md",urlPath:"/recording/meeting",frontmatter:{title:"会议录音",description:"手机放桌上录音，AI 自动区分发言人并生成会议纪要",hidden:!1,draft:!1},isMdx:!1},{id:"recording/photo",filePath:"recording/photo.md",urlPath:"/recording/photo",frontmatter:{title:"拍照记笔记",description:"拍几张照片，AI 自动识别文字并整理成条理清晰的笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/screen-record",filePath:"recording/screen-record.md",urlPath:"/recording/screen-record",frontmatter:{title:"手机内录",description:"手机在播什么就录什么，后台录制视频、播客、网课的声音，自动转文字生成笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/vocabulary",filePath:"recording/vocabulary.md",urlPath:"/recording/vocabulary",frontmatter:{title:"语音词库",description:"添加专有名词、人名、术语，让 AI 录音转文字更准确",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voice-command",filePath:"recording/voice-command.md",urlPath:"/recording/voice-command",frontmatter:{title:"语音口令",description:"录音时说一句口令词，AI 自动捕捉并标记重点内容",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voice-memo",filePath:"recording/voice-memo.md",urlPath:"/recording/voice-memo",frontmatter:{title:"语音速记",description:"对着手机说话，AI 自动转文字、去口头禅、分段落，说完即得一篇干净笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voiceprint",filePath:"recording/voiceprint.md",urlPath:"/recording/voiceprint",frontmatter:{title:"声纹识别",description:"录入你的声音后，AI 在录音笔记中自动标记你的发言",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/ios-shortcuts",filePath:"shortcuts/ios-shortcuts.md",urlPath:"/shortcuts/ios-shortcuts",frontmatter:{title:"快捷指令",description:"用 iPhone 操作按钮或轻点背面，一按就能打开 Get笔记开始录音",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/siri",filePath:"shortcuts/siri.md",urlPath:"/shortcuts/siri",frontmatter:{title:"Siri 唤起",description:"喊一声 Siri 就能开始录音、写笔记、搜笔记，双手不用碰手机",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/widget",filePath:"shortcuts/widget.md",urlPath:"/shortcuts/widget",frontmatter:{title:"桌面小组件",description:"把 Get笔记放到手机桌面，点一下就能录音、写笔记、搜笔记，不用打开 App",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/caojiang",filePath:"testimonials/caojiang.md",urlPath:"/testimonials/caojiang",frontmatter:{title:"曹将：看完罗振宇跨年演讲，种草了一个软件",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials",filePath:"testimonials/index.md",urlPath:"/testimonials",frontmatter:{title:"达人推荐",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/muyezhiyue",filePath:"testimonials/muyezhiyue.md",urlPath:"/testimonials/muyezhiyue",frontmatter:{title:"暮野之月：得到出品的Get笔记App来了，免费版已够用",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/wangshuyi",filePath:"testimonials/wangshuyi.md",urlPath:"/testimonials/wangshuyi",frontmatter:{title:"王树义老师：得到 Get 笔记 AI 手机应用，好用吗？",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/xitongfeilun",filePath:"testimonials/xitongfeilun.md",urlPath:"/testimonials/xitongfeilun",frontmatter:{title:"系统飞轮：看完罗振宇跨年演讲，种草了一个笔记软件",hidden:!1,draft:!1},isMdx:!1},{id:"use-cases",filePath:"use-cases/index.md",urlPath:"/use-cases",frontmatter:{title:"用户案例",hidden:!1,draft:!1},isMdx:!1}],r1=[{section:"开始使用",pages:[{title:"下载安装",id:"getting-started/download",urlPath:"/getting-started/download"},{title:"快速上手",id:"getting-started/quickstart",urlPath:"/getting-started/quickstart"}]},{section:"用户案例",pages:[{title:"用户案例",id:"use-cases",urlPath:"/use-cases"}]},{section:"达人推荐",pages:[{title:"达人推荐",id:"testimonials",urlPath:"/testimonials"},{title:"曹将：看完罗振宇跨年演讲，种草了一个软件",id:"testimonials/caojiang",urlPath:"/testimonials/caojiang"},{title:"暮野之月：得到出品的Get笔记App来了，免费版已够用",id:"testimonials/muyezhiyue",urlPath:"/testimonials/muyezhiyue"},{title:"王树义老师：得到 Get 笔记 AI 手机应用，好用吗？",id:"testimonials/wangshuyi",urlPath:"/testimonials/wangshuyi"},{title:"系统飞轮：看完罗振宇跨年演讲，种草了一个笔记软件",id:"testimonials/xitongfeilun",urlPath:"/testimonials/xitongfeilun"}]},{section:"开口记",pages:[{title:"语音速记",id:"recording/voice-memo",urlPath:"/recording/voice-memo"},{title:"会议录音",id:"recording/meeting",urlPath:"/recording/meeting"},{title:"课堂录音",id:"recording/classroom",urlPath:"/recording/classroom"},{title:"手机内录",id:"recording/screen-record",urlPath:"/recording/screen-record"}]},{section:"随手拍",pages:[{title:"拍照记笔记",id:"recording/photo",urlPath:"/recording/photo"},{title:"智能拍书",id:"recording/book-scan",urlPath:"/recording/book-scan"}]},{section:"一键存",pages:[{title:"链接保存",id:"recording/link",urlPath:"/recording/link"},{title:"导入音视频",id:"recording/import-media",urlPath:"/recording/import-media"}]},{section:"录音增强",pages:[{title:"声纹识别",id:"recording/voiceprint",urlPath:"/recording/voiceprint"},{title:"语音词库",id:"recording/vocabulary",urlPath:"/recording/vocabulary"},{title:"语音口令",id:"recording/voice-command",urlPath:"/recording/voice-command"}]},{section:"知识库",pages:[{title:"创建知识库",id:"knowledge-base/create",urlPath:"/knowledge-base/create"},{title:"上传文件",id:"knowledge-base/upload",urlPath:"/knowledge-base/upload"},{title:"订阅直播",id:"knowledge-base/subscribe-live",urlPath:"/knowledge-base/subscribe-live"},{title:"订阅博主",id:"knowledge-base/subscribe-creator",urlPath:"/knowledge-base/subscribe-creator"},{title:"将笔记加入知识库",id:"knowledge-base/add-notes",urlPath:"/knowledge-base/add-notes"},{title:"分享和团队管理",id:"knowledge-base/share",urlPath:"/knowledge-base/share"}]},{section:"GetSeed 录音卡",pages:[{title:"功能说明",id:"getseed",urlPath:"/getseed"},{title:"快速使用",id:"getseed/quickstart",urlPath:"/getseed/quickstart"},{title:"设备指南",id:"getseed/device",urlPath:"/getseed/device"},{title:"AI 柳比歇夫记日记",id:"getseed/liubixiefu",urlPath:"/getseed/liubixiefu"},{title:"笔记发芽",id:"getseed/sprout",urlPath:"/getseed/sprout"},{title:"常见问题",id:"getseed/faq",urlPath:"/getseed/faq"}]},{section:"快捷操作",pages:[{title:"Siri 唤起",id:"shortcuts/siri",urlPath:"/shortcuts/siri"},{title:"快捷指令",id:"shortcuts/ios-shortcuts",urlPath:"/shortcuts/ios-shortcuts"},{title:"桌面小组件",id:"shortcuts/widget",urlPath:"/shortcuts/widget"}]},{section:"开发者",pages:[{title:"开发者",id:"developer",urlPath:"/developer"}]},{section:"常见问题",pages:[{title:"常见问题",id:"faq",urlPath:"/faq"}]},{section:"版本更新",pages:[{title:"版本更新",id:"changelog",urlPath:"/changelog"}]}],Zo=null,d1={changelog:()=>un(()=>import("./changelog-Dnlwd_s_.js"),[]),developer:()=>un(()=>import("./developer-Dj2FsQzr.js"),[]),faq:()=>un(()=>import("./faq-DCD_EfHJ.js"),[]),"getseed/device":()=>un(()=>import("./device-CX7-thx_.js"),[]),"getseed/faq":()=>un(()=>import("./faq-Dt-NDoXd.js"),[]),getseed:()=>un(()=>import("./getseed-BVwbNskr.js"),[]),"getseed/liubixiefu":()=>un(()=>import("./liubixiefu-B3VR-UGI.js"),[]),"getseed/quickstart":()=>un(()=>import("./quickstart-DJbqpbZm.js"),[]),"getseed/sprout":()=>un(()=>import("./sprout-BsUHrDLU.js"),[]),"getting-started/download":()=>un(()=>import("./download-Cw7pMjic.js"),[]),"getting-started/quickstart":()=>un(()=>import("./quickstart-xxiOyC2-.js"),[]),index:()=>un(()=>import("./index-BHc--1il.js"),[]),"knowledge-base/add-notes":()=>un(()=>import("./add-notes-CqqPrUai.js"),[]),"knowledge-base/create":()=>un(()=>import("./create-DqwsTxnU.js"),[]),"knowledge-base/share":()=>un(()=>import("./share-CQrDMa_K.js"),[]),"knowledge-base/subscribe-creator":()=>un(()=>import("./subscribe-creator-B9eKVNWf.js"),[]),"knowledge-base/subscribe-live":()=>un(()=>import("./subscribe-live-DqxNgIgm.js"),[]),"knowledge-base/upload":()=>un(()=>import("./upload-SUm7BnUc.js"),[]),"recording/book-scan":()=>un(()=>import("./book-scan-Cjb6VZxJ.js"),[]),"recording/classroom":()=>un(()=>import("./classroom-uE5iQUHd.js"),[]),"recording/import-media":()=>un(()=>import("./import-media-MXnzsZKE.js"),[]),"recording/link":()=>un(()=>import("./link-CzOFEsR8.js"),[]),"recording/meeting":()=>un(()=>import("./meeting-DQt1jAAx.js"),[]),"recording/photo":()=>un(()=>import("./photo-DYiiXLfV.js"),[]),"recording/screen-record":()=>un(()=>import("./screen-record-B8L-So-R.js"),[]),"recording/vocabulary":()=>un(()=>import("./vocabulary-sK0AMRM2.js"),[]),"recording/voice-command":()=>un(()=>import("./voice-command-CrvXELva.js"),[]),"recording/voice-memo":()=>un(()=>import("./voice-memo-CgordwD-.js"),[]),"recording/voiceprint":()=>un(()=>import("./voiceprint-CGvUsKlY.js"),[]),"shortcuts/ios-shortcuts":()=>un(()=>import("./ios-shortcuts-BzOzaQPs.js"),[]),"shortcuts/siri":()=>un(()=>import("./siri-BzkPboaj.js"),[]),"shortcuts/widget":()=>un(()=>import("./widget-DjvEfXCG.js"),[]),"testimonials/caojiang":()=>un(()=>import("./caojiang-D4czfQed.js"),[]),testimonials:()=>un(()=>import("./testimonials-2URYDLCA.js"),[]),"testimonials/muyezhiyue":()=>un(()=>import("./muyezhiyue-lYaLW04F.js"),[]),"testimonials/wangshuyi":()=>un(()=>import("./wangshuyi-DBXzc9tR.js"),[]),"testimonials/xitongfeilun":()=>un(()=>import("./xitongfeilun-BMiCe5c0.js"),[]),"use-cases":()=>un(()=>import("./use-cases-CAC9nCGr.js"),[])};function s0(r){const T=d1[r];return T?T():Promise.resolve({default:null})}const g1=[{id:"changelog",title:"版本更新",content:`# 版本更新

Get笔记 各平台更新记录。

## iOS

### v2.x.x

- 新增课堂录音功能
- 新增语音口令功能
- 优化录音稳定性

[查看完整更新记录](/changelog/ios)

## Android

### v2.x.x

- 新增课堂录音功能
- 新增手机内录功能
- 修复已知问题

[查看完整更新记录](/changelog/android)

## HarmonyOS

### v1.x.x

- 华为鸿蒙版本上线
- 支持核心录音功能

[查看完整更新记录](/changelog/harmonyos)

---

> 💡 想要什么新功能？可以在 App 内反馈给我们。
`},{id:"developer",title:"开发者",content:`
# 开发者

Get笔记提供开放 API，让你把知识库的 AI 搜索和召回能力接入自己的应用。不管你是做聊天机器人、内部知识助手，还是搭配 Dify、扣子等平台使用，都可以快速接入。

> 目前 API 处于**免审公测期**，所有接口可能会调整或优化。公测期间免费使用，正式商业化后可能收费。不建议公测期间用于商业产品。

## 是什么

Get笔记 OpenAPI 提供两个核心能力：

- **知识库搜索**：向知识库提问，AI 会从你的笔记、文件、关注的博主内容中找到答案，支持深度思考模式和流式返回
- **知识库召回**：根据问题召回最相关的内容片段，返回相似度评分，适合做二次加工

你可以通过以下方式使用：

| 接入方式 | 适合谁 | 说明 |
|---------|-------|------|
| 直接调用 API | 有开发能力的用户 | 最灵活，完全自定义 |
| Dify 外部知识库 | Dify 用户 | 作为 Dify 的外部知识源 |
| 扣子插件 | 扣子用户 | 在扣子工作流或 Agent 中调用 |

## 怎么用

### 第一步：获取 API 配置信息

打开 [Get笔记知识库网页版](https://www.biji.com/subject)，点击顶部的「API 设置」按钮，进入配置页面。

![知识库网页版顶部导航栏，右侧显示「API 设置」按钮，点击可打开 API 配置页面](/images/GYUKbFlMAo83gsxZk2nccbTnn0f.png)

你会看到两个关键参数：

- **参数值 1（API Key）**：用于身份验证
- **参数值 2（知识库 ID）**：指定要查询的知识库

![API 配置页面，显示两个参数值：参数值1为 API Key（用于认证），参数值2为知识库 ID（用于指定查询的知识库），每个参数旁有复制按钮](/images/XpT8brRgeolr5txpLhZcXZjqneZ.png)

> 请妥善保管 API Key，不要提交到公开代码仓库。如怀疑泄露，立即重新生成。

### 第二步：调用 API

**基础信息：**

- 接口地址：\`https://open-api.biji.com/getnote/openapi\`
- 认证方式：在请求头中添加 \`Authorization: Bearer {你的API Key}\`
- 频率限制：每秒 2 次请求（QPS），每天 5000 次

**知识库搜索（获取 AI 回答）：**

\`\`\`bash
curl -X POST https://open-api.biji.com/getnote/openapi/knowledge/search \\
  -H "Authorization: Bearer {你的API Key}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "你的问题",
    "topic_ids": ["你的知识库ID"],
    "deep_seek": false,
    "refs": true
  }'
\`\`\`

参数说明：

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| question | string | 是 | 要搜索的问题 |
| topic_ids | string[] | 是 | 知识库 ID 列表（目前支持 1 个） |
| deep_seek | bool | 是 | 是否开启深度思考 |
| refs | bool | 否 | 是否返回引用来源，默认 false |
| history | array | 否 | 对话历史，用于追问 |

流式接口地址为 \`/knowledge/search/stream\`，返回的 \`msg_type\` 含义：

| msg_type | 含义 |
|----------|------|
| 1 | AI 回答内容 |
| 3 | 结束标记 [END] |
| 6 | 处理流程信息 |
| 21 | 深度思考过程（逐字返回） |
| 22 | 思考耗时 |
| 105 | 引用来源数据 |
| 8 | 风控提醒 |
| 0 | 错误信息 |

**知识库召回（获取相关片段）：**

\`\`\`bash
curl -X POST https://open-api.biji.com/getnote/openapi/knowledge/search/recall \\
  -H "Authorization: Bearer {你的API Key}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "你的问题",
    "topic_ids": ["你的知识库ID"],
    "top_k": 10
  }'
\`\`\`

返回结果中每条记录包含：\`title\`（标题）、\`content\`（内容）、\`score\`（相似度评分）、\`type\`（来源类型：FILE / NOTE / BLOGGER）。

### 第三步：选择接入方式

根据你的需求选择合适的接入方式：

#### 在 Dify 中使用

适合已经在用 Dify 搭建 AI 应用的用户。把 Get笔记知识库作为 Dify 的外部知识源。

1. 进入 Dify「知识库」标签页，点击**外部知识库 API** → **添加外部知识库 API**

![Dify 知识库页面，左侧标签栏选中「外部知识库 API」，右上角显示蓝色「添加外部知识库 API」按钮](/images/QzjpbvqchoLc6ixPA1Cc1tgjnmf.png)

2. 填写配置信息：
   - **名称**：建议填「XXX 的 Get笔记知识库」
   - **API Endpoint**：\`https://open-api.biji.com/getnote/openapi/knowledge/dify\`
   - **API Key**：粘贴你的参数值 1

![Dify 添加外部知识库 API 表单，包含名称、API Endpoint 和 API Key 三个输入框，底部有取消和保存按钮](/images/V3eUbiVQqo3tZaxKvA5cDlFinHc.png)

3. 新建外部知识库，选择刚添加的 API，在**外部知识库 ID** 中粘贴参数值 2

![Dify 创建外部知识库页面，下拉菜单选择已添加的外部知识库 API，下方输入框填写外部知识库 ID](/images/BvhLb0916o4UAAxH40JckpIOnQf.png)

4. 测试通过后，就可以在 Dify 的 Agent 中使用这个知识库了

![Dify 知识库召回测试页面，左侧输入测试问题，右侧显示召回结果和相关内容片段](/images/REmbbLe01oajZixUmaicMyCqn3b.png)

#### 在扣子中使用

Get笔记知识库已上架[扣子插件商店](https://www.coze.cn/store/agent?cate_type=recommend)，搜索「Get笔记知识库」即可找到。目前提供召回能力，可配合模型做进一步处理。

![扣子插件商店搜索结果页面，显示「Get笔记知识库」插件卡片，包含插件图标、名称和简介](/images/Qg8Fb4uyCoHVa5xV7ZnchC5an4d.png)

**方式一：在工作流中使用**

1. 进入[扣子工作流](https://www.coze.cn/work_flow)，创建新工作流，添加「开始」节点并设置输入参数（如 Question）

![扣子工作流编辑器，左侧为「开始」节点配置面板，添加了一个名为 Question 的字符串输入参数](/images/C5CTbGoPdotA2CxLIQgcTOXXnQg.png)

2. 添加节点，搜索「Get笔记知识库」插件，选择 **getnote_knowledge_recall** 工具

![扣子工作流添加节点面板，搜索框输入「Get笔记知识库」，搜索结果显示两个工具，第二个为 getnote_knowledge_recall](/images/PNPkbYhypoRkpUx3sL6cf1bhnid.png)

3. 配置参数：**question** 关联开始节点的输入、**Authorization** 填参数值 1、**topic_id** 填参数值 2

![扣子工作流 getnote_knowledge_recall 节点配置面板，显示 question、Authorization、topic_id、top_k 等参数输入框](/images/QgFBbngvSoXEYUx2Ff6cF8LynSb.png)

4. 后续可接模型节点或输出节点，完成工作流搭建

![扣子完整工作流示例，从开始节点到 Get笔记知识库召回节点，再到大模型处理节点，最后到结束输出节点](/images/DM80b3b9SoXBi7x7TSqcB7EUnnc.png)

**方式二：在 Agent 中直接使用插件**

1. 新建 Agent，在「编排」标签页点击「添加插件」

![扣子 Agent 编排页面，左侧显示编排配置区域，技能区域有「添加插件」按钮](/images/K5A8bmw0KowEPLxuiWUcwGI3nhc.png)

2. 搜索「Get笔记知识库」，选择 **getnote_knowledge_recall** 工具

![扣子插件搜索弹窗，输入「Get笔记知识库」后显示搜索结果，列出可用的知识库工具](/images/TpxsbGxIGoG4GAx3p2SchcOvn6r.png)

3. 配置 **Authorization**（参数值 1）和 **topic_id**（参数值 2，需加 Bearer 前缀）

![扣子 Agent 插件参数配置面板，显示 Authorization 和 topic_id 两个输入框，需要填入对应的 API 参数值](/images/IBvRbay9QoXsxXxXenmcKy6unEg.png)

> 填完两个参数后，**必须把参数开关切到关闭状态**（点击滑块按钮），否则每次调用时会要求用户手动输入。

![扣子 Agent 插件参数配置完成状态，Authorization 和 topic_id 旁边的开关滑块已切换到关闭（灰色）状态](/images/PQkCbP42XoROCuxRUJJc7EWTnhg.png)

## 小技巧

- **先用网页版测试**：在知识库网页版直接提问，确认效果满意后再接入 API
- **合理设置 top_k**：召回接口默认返回 10 条结果，如果你的知识库内容少，可以调小这个值减少噪音
- **善用对话历史**：搜索接口支持 \`history\` 参数，传入之前的对话记录可以实现追问效果
- **深度思考按需开启**：\`deep_seek\` 开启后回答更深入但更慢，简单查询可以关闭提速

## 需要帮助？

扫码加入官方交流群，与其他开发者交流：

![Get笔记官方交流群二维码，微信扫码即可加入](/images/NvqGbWNRxo44nxx9UbBclhsZnEb.png)
`},{id:"faq",title:"常见问题",content:`
# 常见问题

遇到问题？先看看这里能不能找到答案。

## 账号相关

### 支持哪些登录方式？

支持三种方式：**手机号**、**微信**、**Apple ID**。注册后登录同一账号，所有设备的数据会自动同步。

### 怎么开通会员？

打开 App → 点击右上角头像 → 进入「会员中心」→ 选择套餐开通。

### 会员和免费版有什么区别？

| | 免费版 | 会员版 |
|---|-------|-------|
| 单次录音时长 | 最长 10 分钟 | 最长 60 分钟 |
| 存储空间 | 30GB | 500GB |
| 知识库数量 | 最多 10 个 | 不限 |
| 声纹识别 | 不支持 | 支持 |
| 语音口令 | 不支持 | 支持 |
| API 使用 | 不支持 | 支持 |

## 录音相关

### 录音突然中断了怎么办？

最常见的原因是你切换到了其他 App，那个 App 抢占了麦克风。解决方法：回到 Get笔记，点「继续录制」即可。

> 小提示：录音时尽量不要切换到其他需要麦克风的 App（比如微信语音通话）。

### 支持哪些语言和方言？

支持**普通话**和 **27 种方言**，包括：粤语、四川话、上海话、武汉话、西安话、南京话、杭州话、天津话等。

### 录音转文字准确吗？

AI 转写准确率在 **95% 以上**。如果你经常说一些专业术语或生僻词，可以通过[语音词库](/recording/vocabulary)提前添加，AI 就能识别得更准。

### 录音文件很大，同步很慢？

长时间录音文件确实比较大。建议在 **Wi-Fi 环境**下同步，速度会快很多。

## 知识库相关

### 知识库能存多少内容？

- **免费版**：最多 10 个知识库，总共 30GB
- **会员版**：不限知识库数量，总共 500GB

### 上传文件支持什么格式？

支持以下格式：

- **PDF** 文件
- **Word** 文件（.doc / .docx）
- **PPT** 文件（.ppt / .pptx）

单个文件最大 **200MB**。

## 数据与安全

### 我的数据安全吗？

所有数据**加密存储**，不会被用于训练 AI 模型。

### 可以导出数据吗？

可以。打开[网页版](https://www.biji.com)，支持导出全部笔记为 HTML 文件。

## 其他问题

### 有桌面版吗？

目前没有桌面客户端。你可以用网页版 [biji.com](https://www.biji.com) 在电脑上使用，体验和 App 基本一致。

### 怎么联系客服？

两种方式：

1. **App 内**：点击右上角头像 → 「帮助与反馈」
2. **邮箱**：发送邮件到 [support@biji.com](mailto:support@biji.com)

---

没有找到你的问题？试试 App 内的「帮助与反馈」，客服会在 24 小时内回复。
`},{id:"getseed/device",title:"设备指南",content:`
# 设备指南

这篇帮你全面了解 GetSeed 录音卡的硬件：包装里有什么、按键怎么用、灯光什么意思、怎么充电。

---

## 设备清单

打开包装，你会看到：

- 1x GetSeed Card（录音卡）
- 1x 磁吸卡套
- 1x 磁吸环
- 1x 充电线
- 1x 录音卡说明书

---

## 基本功能键

录音卡上有两个主要操作区域：MARK 键和录音拨钮。

![GetSeed 录音卡正面功能键示意图，标注了 MARK 键位于中间、录音拨钮位于侧面、指示灯位于顶部的位置](/images/Ly3fb1mBJoZQq7xtp3Rcj1ranve.png)

---

## 指示灯含义

指示灯位于录音卡顶部，通过不同颜色和状态表达当前设备情况。

![指示灯含义对照表，列出不同颜色灯光对应的设备状态说明](/images/TxNcbRRbnozySuxEAskcagIcnAf.png)

---

## 充电

使用包装内的充电线（USB 2.0 磁吸式 Pogo pin 接口），磁吸对准即可充电。

![充电线连接录音卡的示意图，展示磁吸充电接口的对准方式](/images/HZCebDxO7oNLHYxzojac7tAjnAc.png)

- **充电时间**：从 0 到 100% 约 1.5 小时
- **连续录音**：最长约 35 小时
- **待机时长**：最长 60 天

---

## 设备参数

| 参数项 | 规格 |
|--------|------|
| 颜色 | 钛空灰 |
| 尺寸 | 54 × 85.6 × 3.1mm |
| 重量 | 28.4g |
| 存储 | 64GB |
| 麦克风 | 3 个 |
| 收音距离 | 8 米 |
| 电池 | 400mAh |
| 连续录音 | 35 小时 |
| 待机时长 | 60 天 |
| 蓝牙 | v6.1 |
| Wi-Fi | 2.4G |
| 录音模式 | 现场录音 / 通话录音（自动切换） |

---

## 开机 / 关机 / 休眠

### 开机

长按 MARK 键 1 秒，蓝灯亮一秒，设备开机。

### 关机

在录音拨钮**未开启**的状态下，短按 MARK 键 7 次（每次间隔不超过 0.5 秒），红灯亮 1 秒，设备关机。

### 休眠

- 默认 3 小时不使用，设备自动进入休眠（不关机）
- 休眠后短按 MARK 键 1 次可唤醒设备
- 休眠状态可进一步延长续航时间

---

## 强制重启

设备软件崩溃时，按以下步骤操作：

1. 插上 USB 充电线
2. 短按 MARK 键 3 次（每次间隔不超过 0.5 秒）
3. 再长按 3 秒，设备重启

---

## 恢复出厂设置

> **注意**：恢复出厂设置会**清空全部数据**，操作前请确保录音文件已上传完成。

### 方法一：通过录音卡操作

1. 确认录音拨钮处于**关闭**状态
2. 连按 5 下 MARK 键后再长按 5 秒
3. 充电灯熄灭，振动两次，重置成功

### 方法二：通过 App 操作

点击设备 → 进入设备信息页 → 点击底部「断开或解绑」→ 选择「还原所有设置」。
`},{id:"getseed/faq",title:"常见问题",content:`
# 常见问题

遇到问题？先看看这里有没有答案。

---

## 设备连接

### 如何添加设备？

1. 在应用商店搜索「Get笔记」，安装并登录
2. 长按 MARK 键 1 秒开启设备（确保设备不在充电状态）
3. 指示灯亮白灯闪烁，表示已准备好连接

![录音卡指示灯亮白灯闪烁，表示设备已开启等待配对](/images/XWU6b3QwmoKj2vxi8TscXsTanHf.png)

4. 打开 Get笔记 App，点击首页左上角侧边栏，点击「录音卡」，按提示操作连接

![App 侧边栏菜单展示「录音卡」入口，点击进入连接引导页面](/images/QJaKbGqmnobTAFx50nqct1vonNP.png)

5. 按照 添加设备 → 连接 → 连接成功 → 权益自动下发 的流程完成

![设备搜索页面，显示找到的 GetSeed 录音卡，点击开始配对](/images/GTGlbqxmioajWVxpAWocT2iZnjb.png)

![蓝牙配对确认弹窗](/images/DQQWbjSoVo9W3TxlDwCcjqdenDg.png)

![连接成功页面，显示绿色对勾](/images/SINsbmmm0onF9YxZ5xAcq4Q9nHP.png)

![会员权益自动下发通知](/images/TSlobAA9Eo8EkLx7lF9cQ5lInic.png)

![设备信息页，显示录音卡详细信息和连接状态](/images/OTanbYUf0or7bhxujoKcF7HBnHb.png)

### 为什么搜索不到设备？

按以下顺序排查：

1. **检查蓝牙权限**
   - iOS：前往 iPhone「设置」→ 找到 Get笔记 App → 确保蓝牙权限已开启
   - Android：打开手机设置 → 启用 Get笔记 App 的蓝牙和位置权限（Android 12 之前需选择「始终允许」）
2. **确认设备已开启**：短按 MARK 键 1 秒，白灯亮起说明设备已开启
3. **检查电量**：如果没有亮灯，用充电线充电至少 10 分钟再试（充电时紫色指示灯常亮）
4. **靠近手机**：将录音卡放在手机旁边再试

如果以上都试过还不行，扫码联系我们：

![客服二维码，扫码添加获取人工帮助](/images/O1Z7byfrNohminxX7l6chcV4nNa.png)

### 设备连接不上怎么办？

以下是常见的连接问题和解决方法：

- **确认基础条件**：卡片有电，Get笔记 App 升级到 2.4.3 及以上版本
- **休眠唤醒**：卡片默认 3 小时休眠，长按 MARK 键 1 秒唤醒，连接后可在 App 中设置休眠时间
- **鸿蒙手机**：部分机型需先在系统设置 → 蓝牙 → Get-xxxx 进行配对，再去 App 内连接（搜不到设备时可关闭蓝牙再打开）
- **iOS / 华为先配对问题**：如果之前从手机蓝牙设置直接连接过录音卡，需要先在系统蓝牙中「忽略此设备」，再从 App 内连接
- **固件升级后连接不上**：在系统蓝牙中「忽略此设备」或取消配对，再从 App 内重新连接
- **白灯一直闪搜不到**：快速短按 MARK 键 7 下（关机）→ 长按 MARK 键 1 秒（开机）→ 关闭手机蓝牙再打开 → 在 App 中连接
- **多手机切换**：先把之前的手机蓝牙关闭或忽略录音卡设备，再用新手机连接
- **固件升级后等待**：升级成功后卡片需要 3-5 分钟更新，等待完成后即可连接

### 为什么显示的不是录音卡的名称？

连接弹窗可以左右滑动，找到 GetSeed 卡片进行连接。

### 卡片 OTA 升级后没反应？

固件升级成功后，卡片需要 3-5 分钟自行更新。这个过程暂时无法在 App 中查看进度，稍等一会即可。

### Get笔记侧边栏找不到「录音卡」选项？

需要将 Get笔记 App 升级到 2.4.2 及以上版本。

### 怎么知道录音卡连没连上？

进入 Get笔记 App，首页右上角的设备入口：
- **灰色** = 未连接
- **绿色** = 已连接

点击设备名称进入设备信息页，也可以查看连接状态和电量。

![App 首页右上角设备入口显示灰色，表示录音卡未连接](/images/O5aIbtL7to1s58xjX93cxjxunNd.png)

![App 首页右上角设备入口显示绿色，表示录音卡已连接](/images/JMuAbBa5ioUaQfxaVE9cbrKknif.png)

![设备信息页显示电量百分比和电池图标](/images/WtwtbUa3LoMbcmxjdnIcqNrJnLc.png)

### GetSeed 休眠导致无法连接？

长按 MARK 键 1 秒唤醒设备。连接成功后，可以在 App 的设备信息页中修改休眠时间。

### 多蓝牙设备导致找不到卡片？

连接弹窗可以左右滑动，找到 GetSeed 卡片进行连接。

### App 一直显示「未找到设备」？

在手机蓝牙设置中找到「Get」开头的设备，点击「忽略此设备」，然后重新尝试。

### 磁吸导致手机熄屏 / 黑屏？

![磁吸导致手机熄屏问题的解决方案说明图](/images/VBUcbq6pqoEbDNxbDIDccs5MnTe.png)

### 苹果手机从系统蓝牙连接后，App 内连不上？

需要先去系统设置 → 蓝牙 → 忽略 Get-xxxx 的设备，然后从 App 内侧边栏 → 录音卡 重新连接。

### OPPO 手机连接录音卡后微信输入法跳不出来？

在系统设置 → 蓝牙 → 已配对录音卡旁的设置图标 → 关闭「输入设备」「键盘」类选项。

---

## 录音使用

### 可以脱离手机单独使用吗？

**可以**。脱离手机依然可以独立录音，录音文件会在 App 重新连接设备后自动同步。

### 可以录手机通话吗？

**可以**。电话、微信视频、腾讯/钉钉/飞书等线上会议都能录。

- **现场录音** ↔ **通话录音**，智能识别，自动切换
- 现场录音场景：会议、课堂、采访、培训等
- 通话录音场景：电话采访、微信视频、线上会议等

### 戴蓝牙耳机能录音吗？

**不能**。录音卡收集的是外部环境声音或手机听筒声音，无法获取蓝牙耳机中播放的声音。

### 手机录音为什么还需要 GetSeed？

- **盲操一秒开录**：物理按键，不用看屏幕
- **录音不怕打断**：独立运行，手机来电、消息不影响
- **录得更清楚**：3 麦克风 + 8 米收音 + AI 降噪
- **没有电量焦虑**：35 小时连续录音，待机 60 天
- **通话全都能录**：电话、微信、腾讯/钉钉/飞书
- **没网没手机也能录**：64GB 本地存储，录完再同步

### 录完后没看到录音上传？

可能录音卡还在录音中。录音中无法上传文件，结束录音后会自动上传。

### 如何查看录音卡里的录音文件？

录音卡中的文件会在与 App 连接后自动上传同步到手机上，无法直接在录音卡上查看。

### 可以把录音文件传到电脑上吗？

无法直接传到电脑。录音文件会自动同步到 App 并进行 AI 转写生成笔记，笔记支持音频文件导出。

### 内存满了会怎样？

录音卡的音频文件同步到手机后会自动清除，一般不会有内存压力。极限情况下内存满了会提示无法录音。

---

## 充电与续航

### 充电多久能充满？

从 0 到 100% 约 **1.5 小时**。

### 能录多久？

最长连续录音约 **35 小时**，待机最长 **60 天**。

### 充电中能录音吗？

充电过程中**无法开启**录音。录音中插充电线不影响录音，但无法正常充电。

### 如何给录音卡充电？

用包装内的磁吸充电线，Type-C 一端插在充电宝或充电头上即可。

![充电线连接示意图，磁吸端对准录音卡充电接口，Type-C 端插入充电头](/images/UerQbQQ2voFfpBxQ1mecliFGnue.png)

### 充电线丢了怎么办？

可在此链接购买：https://j.youzan.com/by9-yH

### 充满电后灯一直是紫色，没变绿？

手机上显示 100% 就是充满了，可以放心使用。紫灯未变绿是因为在做微小的涓流补电，不影响使用。可以先关蓝牙，重新插拔充电线，等 3-4 分钟一般就会变绿。**以 App 显示的电量为准**。

### 如何查看电量？

在 App 首页点击右上角设备入口 → 点击 Get-XXX → 进入设备信息页查看电量。

---

## 磁吸卡套

### 苹果手机怎么用？

iPhone 12 及以上自带磁吸功能，将卡套对准手机背面直接吸附即可。

![iPhone 背面直接磁吸卡套的示意图，无需额外配件](/images/QXMTbdmpJoSjzfxUs0Tc2c1Cnrb.png)

### 安卓 / 鸿蒙手机怎么用？

撕下磁吸环背胶保护膜，将磁吸环贴在手机背部合适位置，再吸附卡套。

![安卓手机贴上磁吸环后吸附卡套的示意图，展示磁吸环贴附位置](/images/RHDsb1JYpoMX2pxHjeIc81kunSc.png)

### 带手机壳能磁吸吗？

可以。如果手机壳背面有支架会影响磁吸位置，建议更换手机壳，或单独携带录音卡使用。

---

## 防水与安全

### 防水吗？

**不防水**，请避免让设备接触任何液体。

### 录音卡丢了怎么办？

卡片不与自己绑定的设备解绑，别人捡到无法连接使用，数据安全有保障。

实在不放心，可以联系 get-notes@luojilab.com，发送设备 SN 码、手机号等信息登记挂失。

### 隐私怎么保障？

- 笔记不设置公开分享，默认只有自己可见
- 数据严格加密隔离存储
- 数据绑定账号，非本人不可取
- 硬件级防护，严禁外设导出

---

## 会员与权益

### 会员到期后还能继续用吗？

录音卡使用不受影响，可以继续录音。区别在于转写时长：

- **免费用户**：每月 600 分钟免费转写
- **PRO 会员**：每月转写时长不限

### 两台手机可以换着用吗？

可以，但同一时间只能连接一台。切换时需要在 A 手机的蓝牙设置中关闭蓝牙或忽略录音卡设备，B 手机才能连接。

### 配的红绿绳子是干什么的？

可以绑在收纳盒外面，用于加固收纳盒。

### 888 元「马上发芽」礼盒和 699 元标准款有什么区别？

699 元是早鸟价，售完即止。888 元新春版升级为银色科技质感「发芽桶」礼盒，内含可种植的小麦种子，限定「马上发芽」封套，适合新年送礼。

---

## 语言识别

### 支持哪些语言？

支持**中、英、日**混合识别。

中文方言支持广泛，包括：普通话、粤语、吴语、闽南语、客家话、赣语、湘语、晋语，以及中原、西南、冀鲁、江淮、兰银、胶辽、东北、北京、港台等地区官话口音（涵盖河南、陕西、湖北、四川、重庆、云南、贵州、广东、广西、河北、天津、山东、安徽、南京、江苏、杭州、甘肃、宁夏等地区）。

---

## 发芽功能

### 发芽是什么？

AI 帮你把录音笔记进行「扩展」和「联想」。基于你的内容，结合得到平台优质内容和你自己的笔记，自动找出相关的名言、类似的观点或补充背景，帮你把一句话变成一套更有深度的知识。

**举个例子**：你录了曾国藩的「既往不恋，当下不杂」，AI 会告诉你爱因斯坦也说过类似的话，甚至《功夫熊猫》里也有同款金句。帮你发现跨越时空的思想共鸣。

### 使用规则

1. **每天 5 次机会**：每生成一次消耗 1 次，每天 0 点重置，不累计
2. **需要新录音**：每次使用前需要至少有一条新的录音笔记
3. **后台生成**：点击发芽后约 3-5 分钟生成完毕，不用盯着屏幕等，完成后会推送通知

### 罗老师跨年中说的「主动」怎么体验？

「发芽」就是让 AI **主动**了解你，再**主动**告诉你可以了解哪些问题、怎么更好地问 AI。试试先生成一份发芽报告吧。
`},{id:"getseed",title:"功能说明",content:`
# 功能说明

GetSeed 录音卡不只是录音，还能一键标记重点、边录边拍照、快速捕捉灵感。这篇带你了解它的核心功能。

---

## 一键 MARK 标记重点

录音时听到重要内容，按一下 MARK 键就能打上标记。录完之后，AI 自动生成所有标记时刻的重点摘要。

### 怎么用

**第一步：录音中按 MARK 键**

录音进行中，短按录音卡的 MARK 键，标记当前时刻为重点。

![录音卡正面，手指按下 MARK 键，标记当前录音时刻为重点](/images/QSLEbgOKoork4Yx6vaocxaFJnCh.png)

**第二步：查看 MARK 重点摘要**

录音结束后，AI 自动总结所有 MARK 时刻的重点内容，方便快速回顾。

![笔记详情页，展示 AI 自动生成的 MARK 重点摘要列表，每个标记时刻对应一段总结](/images/XfwHbAMoSoyeVCxmWfGcwrIPnHf.png)

长按标记的文字区域，可以复制或删除。

![长按 MARK 摘要文字后弹出操作菜单，包含复制和删除选项](/images/Tzdbbh0FwoAPOBxqAjBcoo83nAd.png)

---

## 录音中拍照 + 随手记

录音不中断的情况下，打开 App 还能拍照、手写笔记，多种信息一起记录。

### 怎么用

**第一步：保持录音卡和 App 连接状态**

录音进行中，打开 Get笔记 App（确保录音卡和 App 已连接）。

**第二步：拍照或写笔记**

- 📷 **拍照**：拍白板、拍 PPT、拍资料
- ✏️ **随手记**：随时写下重点信息
- 🎙️ **录音**：全程持续录制，不中断

![App 录音进行中界面，底部显示拍照和随手记按钮，录音状态持续进行](/images/INPUbWX29oT39Rxm0Kmc8bIFnJc.png)

![录音中拍照操作界面，展示拍摄白板或 PPT 的场景](/images/WPa2bC9YOoIka7xP9TscESxlnyf.png)

**第三步：查看整合后的笔记**

生成笔记后，拍的图片会按时间顺序插入到文字记录中。长按图片或文字区域，可以重新上传图片或编辑文字。

![生成的笔记详情页，文字和图片按时间顺序穿插排列，展示完整的录音+拍照记录](/images/RGSNbtc4hoC2yqxrOaecb9sFn4b.png)

---

## 闪念灵感记录

突然有个想法？长按 MARK 键说出来，松开就自动生成一条笔记。AI 还会帮你润色，去掉口水词。

### 怎么用

**第一步：长按 MARK 键开始说**

在录音开关**关闭**的状态下，长按 MARK 键不放，卡片振动一次，开始录音。边按边说出你的想法。

![录音卡正面，手指长按 MARK 键，指示灯红灯常亮表示正在记录闪念](/images/H31kbaihiopGjZx356acbqEenOg.png)

**第二步：松开按键，自动生成笔记**

松开 MARK 键，卡片振动两次，录音结束。同步到 App 后自动生成闪念笔记，笔记列表中带有 ⚡ 标识。

![笔记列表页面，闪念笔记条目左侧带有闪电标识，与普通录音笔记区分](/images/EMSBb6dI1oiCvexxrsmcB38wn21.png)

**AI 自动润色效果**

AI 会智能润色，去除口水词，还能识别 12 种方言：中文、英语、粤语、四川话、陕西话、河南话、上海话、湖南话、湖北话、安徽话、闽南话、潮汕话。

![方言识别设置界面，展示支持的 12 种语言和方言选项列表](/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.png)

| 润色前 | 润色后 |
|--------|--------|
| ![润色前的闪念笔记，包含口水词和不通顺的口语表达](/images/MO0lbekSioUApbxneGkczecFnzd.png) | ![润色后的闪念笔记，语句通顺流畅，口水词已去除](/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.png) |

---

## 固件升级

固件就是录音卡的「大脑程序」。和手机更新系统一样，GetSeed 也需要偶尔升级固件来获得新功能和优化。

### 怎么用

**第一步：等待升级提示**

打开 Get笔记 App，确保录音卡已通过蓝牙连接。如果有新固件，进入 GetSeed 录音卡详情页时会弹窗提示。

![App 中弹出固件升级提示弹窗，显示新版本号和更新内容，底部有「立即更新」按钮](/images/A4WTb6x4FoPhXxxAeU9cjw9fn7b.png)

**第二步：点击「立即更新」**

点击后，新版本会先传输到录音卡（传输中录音卡红蓝灯交替闪烁），然后自动升级并重启。整个过程大约 3-5 分钟。

![固件升级进度页面，显示传输进度条和当前升级状态](/images/UuTmbvRGaoWXsRxIWKucjjOZn6g.png)

**手动升级方式**

也可以点击页面右上角设备入口，进入设备信息页，点击「固件升级」手动检查更新。

![App 首页右上角设备入口按钮，点击后展示设备列表](/images/OACCbxmM8owKgqxDppVcIFwan3c.png)

![设备信息页，底部显示「固件升级」按钮和当前固件版本号](/images/HNAAbmYKNonB8Dxl6nCcHTLUnpn.png)

### 小技巧

- 升级过程中不要断开连接，耐心等待 3-5 分钟
- 升级完成后录音卡会自动重启
- 建议在录音卡电量充足时进行升级
`},{id:"getseed/liubixiefu",title:"AI 柳比歇夫记日记",content:`
# AI 柳比歇夫记日记

不用动手写，不怕忘记录。AI 自动帮你把每天的录音整理成一份客观、忠实的日记。

---

## 是什么

柳比歇夫是苏联科学家，他用分钟为单位记录时间，坚持了 56 年。马伯庸每天手动记十几条日记，只写客观事实不写感慨。他们证明了一件事：**忠实记录自己，是一项有巨大回报的投资**。

但普通人坚持不下来，不是不够自律，而是记录成本太高。

现在 AI 柳比歇夫帮你解决这个问题——你只需正常生活、正常工作，AI 自动把你的一天整理成日记。

### 日记记什么？

只记录客观事实，不写感悟、不发感慨：
- 今天做了什么
- 每件事花了多久
- 有哪些值得记住的细节

看起来平淡无奇，但积累起来你会发现：
- 你以为自己每天工作 8 小时，实际深度工作可能只有 3 小时
- 你以为自己是夜猫子，数据告诉你早上才是黄金时间
- 你以为那个好想法是在会议室冒出来的，回看记录才发现是跑步时想通的

**看得见的东西才能被管理，被管理的东西才能被优化。**

---

## 适用场景

| 场景 | 怎么帮你 |
|------|----------|
| 日常工作 | 自动记录你参加了什么会、讨论了什么主题、花了多长时间 |
| 学习成长 | 听课、读书、听播客接触的知识和冒出的想法都被自动记录 |
| 灵感捕捉 | 通勤、散步时冒出的念头，按一下 MARK 键就能记上 |
| 时间洞察 | 按周、按月、按年回顾，找到时间黑洞和黄金时段 |
| 年度复盘 | 一年下来清楚看到哪些事花了最多时间，用数据做决策 |
| 生活记录 | 不只记录工作，还记录和朋友聊天、陪家人、独处思考 |

---

## 怎么用

### 第一步：升级 App

将 Get笔记 App 升级到 **2.6.2 及以上版本**。

> AI 柳比歇夫目前仅对 GetSeed 录音卡用户开放，未来会扩大范围。

### 第二步：进入功能入口

在「GetSeed 录音卡」页面，底部助手区域点击「AI 柳比歇夫记日记」入口，进入对话页面。

![GetSeed 录音卡详情页底部，显示「AI 柳比歇夫记日记」入口按钮，点击进入日记功能](/images/J62ObaThqoMobExiiKzcvE0Rnne.png)

### 第三步：正常使用录音卡

日常使用录音卡录音，录完后连接 App 会自动上传并生成笔记。AI 柳比歇夫会自动从笔记中提取信息，整理进当天的日记。

![AI 柳比歇夫日记页面，展示自动从录音笔记中提取的当日活动记录和时间线](/images/IxYEbg9OEo4pQ7xXtjCcDHxgn8L.png)

### 第四步：对话补充日记（可选）

随时通过对话方式补充或更新日记——比如告诉它「下午去跑了半小时步」，它就会帮你记上。

![与 AI 柳比歇夫的对话界面，用户发送文字补充日记内容，AI 回复确认已添加](/images/VSY3bHTYEoHzQ8xKiLxcfqkpnMb.png)

### 第五步：查看日记

每天结束后查看 AI 自动生成的日记，记录了你做了什么、每件事花了多久。

![AI 柳比歇夫生成的完整日记页面，按时间顺序列出当天所有活动和持续时长](/images/V217bylFJouExzxGbJhchIuZnwd.png)

---

## 小技巧

- **结合声纹识别**：AI 能在多人场景中精准识别你的声音，准确记录「你」的一天
- **对话式修改**：日记有误或想补充，直接跟 AI 说就行
- **长期积累**：坚持一段时间后，可以按周、按月、按年进行总结分析，发现自己没察觉的时间模式和行为规律
`},{id:"getseed/quickstart",title:"快速使用",content:`
# 快速使用

拿到 GetSeed 录音卡后，跟着这篇一步步操作，几分钟就能上手。

---

## 认识录音卡按键

先认识一下录音卡上的按键，后面的操作都要用到。

![GetSeed 录音卡正面按键示意图，标注了 MARK 键、录音拨钮和指示灯的位置](/images/QR1CbFUuHoPrBsxTr3YcvZIZn7e.png)

---

## 添加并激活设备

### 第一步：下载 Get笔记 App

在应用商店搜索「Get笔记」，安装并登录。

### 第二步：开启录音卡

长按 MARK 键 1 秒，指示灯亮白灯闪烁，表示录音卡已准备好连接。

![录音卡指示灯亮白灯闪烁，表示设备已开启并等待连接](/images/SgVPbGVZ1oGKGFxTNNbcgr5RnNv.png)

### 第三步：在 App 中连接设备

打开 Get笔记 App，点击首页左上角打开侧边栏，点击「录音卡」，按提示操作连接。连接成功后，指示灯变为白灯常亮。

![App 侧边栏菜单，显示「录音卡」入口选项，点击进入设备连接页面](/images/Ug7pbaDFGoPMdtxpvDhcRfClnme.png)

### 第四步：等待连接完成

按照 添加设备 → 连接 → 连接成功 → 权益自动下发 的流程操作。

![设备添加页面，显示搜索到的 GetSeed 录音卡设备，点击进行配对](/images/IXhUb1NouoMVYux6aAJcNAixnbg.png)

![蓝牙配对确认弹窗，提示用户确认连接 GetSeed 录音卡](/images/IlZkbHUgBo4aO3x8BFlcK6iqnDg.png)

![设备连接成功页面，显示绿色对勾和「连接成功」提示](/images/GmpCbfBnFoqyHPxvFMAc43awnUb.png)

![权益下发页面，显示赠送的 PRO 会员权益信息和有效期](/images/SiZgbJ7fGoesXRxYVbWcIJZZnGh.png)

![设备信息页面，显示录音卡名称、电量、固件版本等详细信息](/images/D7S0bcYlDorWDMxgNjhclExLnDc.png)

首次连接成功后，会员权益会自动下发到当前账户：
- **999 元礼盒款**：赠送 1 年 Get笔记 PRO 会员
- **699 元标准款**：赠送 3 个月 Get笔记 PRO 会员

---

## 开始 / 结束录音

### 开始录音

向上拨动录音开关，红灯长亮，卡片振动 1 次，录音开始。

![录音卡侧面，手指向上拨动录音开关，红色指示灯亮起表示录音已开始](/images/Cve7b9oJ0o56RqxNhc3cB8danUf.png)

### 结束录音

向下回拨录音开关，指示灯熄灭，卡片振动 2 次，录音保存。同步到 App 后自动生成笔记。

![录音卡侧面，手指向下回拨录音开关，指示灯熄灭表示录音已结束](/images/G53QbweBvoYhZKxs5KLcKyuynLN.png)

### 录音中标记重点

录音过程中，单击 MARK 键，标记当前时刻为重点。录完后 AI 自动对标记部分进行总结。

![录音进行中按下 MARK 键，指示灯短暂闪烁表示标记成功](/images/QytjbNUI2oQV8bxSmPmcrqgSnQW.png)

### 离线录音

脱离手机也能独立录音。离线录音的文件会在 App 重新连接设备后自动同步。

> **注意**：充电过程中无法开启录音；录音中插充电线不影响录音，但无法正常充电。

---

## 长按记录闪念

有灵感时，长按 MARK 键快速记录。

### 第一步：确认录音开关已关闭

闪念录音需要在录音开关**关闭**的状态下操作。

![录音卡侧面，录音拨钮处于关闭位置（向下），准备进行闪念记录](/images/VRvMbIgWAo88XGxJnuAcEG97nXg.png)

### 第二步：长按 MARK 键说话

按住 MARK 键不放，卡片振动 1 次，红灯常亮，开始录音。边按边说出你的想法。

### 第三步：松开结束

松开 MARK 键，卡片振动 2 次，录音结束。同步到 App 后自动生成笔记，AI 润色并去除口水词。

---

## 手机通话录音

GetSeed 可以录制手机通话，支持电话、微信视频、腾讯/钉钉/飞书会议。

### 怎么用

1. 手机通话中，将录音卡吸附在手机背面
2. 向上拨动录音开关，开始录音
3. 通话结束后，向下回拨录音开关

**现场录音** ↔ **通话录音**，两种模式智能识别，自动切换，无需手动操作。

支持听筒和扬声器模式录音。

![手机背面吸附 GetSeed 录音卡进行通话录音的示意图](/images/Mxg7bm0UvopUwwxA3XMcnEBZnxg.png)

> **注意**：带蓝牙耳机时无法录到耳机中的声音。

---

## 录音同步上传

### 第一步：连接设备

保持手机蓝牙开启，打开 App，点击首页右上角设备入口进行连接。

![App 首页右上角显示设备连接入口，灰色表示未连接，绿色表示已连接](/images/NxQWbk4ILogPazxN8h0cjccznif.png)

### 第二步：查看同步进度

连接后，点击首页「GetSeed 录音卡」入口，查看正在同步的录音。默认通过蓝牙传输。

![GetSeed 录音卡详情页，显示正在同步的录音文件列表和传输进度](/images/HZdMb95Bpo5Sw9xLJtwckzEsn7g.png)

![录音文件同步进度详情，显示文件大小、传输速度和预计剩余时间](/images/CxFobYVZvoKmOXxQsVIczvo4nih.png)

### 第三步：用 WiFi 快传加速（可选）

传输中点击「快传」按钮，加入设备无线局域网，传输速度更快。

![录音同步页面，「快传」按钮高亮显示，提示可切换到 WiFi 快速传输模式](/images/GQl5bOOxQopYRRxjna5cXVxZnOc.png)

![WiFi 快传连接页面，提示加入 GetSeed 设备的无线局域网](/images/Qp3SbBtYLop2kOx8PaAc0WSdnqT.png)

### 同步完成后

录音文件出现在内容列表中，PRO 会员自动生成笔记。

- **PRO 会员**：无限转写时长
- **非 PRO 会员**：每月 600 分钟免费转写

---

## 生成录音笔记

### 常规录音笔记

拨动开关录制的常规录音，AI 自动转写，智能识别多位发言人，生成结构清晰的总结笔记。

![常规录音笔记详情页，展示 AI 转写的完整文字记录和发言人区分](/images/MxY6b8RBZovTyUxyLjbccpkgnUh.png)

笔记包含多个模块：

| 模块 | 说明 |
|------|------|
| 章节概要 | AI 按主题分段总结 |
| 待办事项 | 自动提取会议中的行动项 |
| 拍图整理 | 录音中拍的照片按时间排列 |

![章节概要模块，按主题分段展示录音内容的摘要总结](/images/V90jbf0n5ouSyJxdNW2cAYBUnGM.png)

![待办事项模块，列出从录音中自动提取的行动项和任务](/images/KAjgbROBuoBBMSxHcqecQiDGnCc.png)

![拍图整理模块，展示录音过程中拍摄的照片按时间顺序排列](/images/Tsm9btdkqoOYoYxN92XcC0IJnWb.png)

### 闪念录音笔记

长按 MARK 键录制的闪念笔记，AI 自动润色，识别方言，去除口水词。

![闪念录音笔记详情页，展示 AI 润色后的精简文字内容](/images/T1OebENXAoEWsFxYVXMcgOa8nue.png)

| 润色前 | 润色后 |
|--------|--------|
| ![润色前的原始转写文字，包含口水词和口语化表达](/images/IyCqb1MQsosLHxxaeskcTtu0nCd.png) | ![润色后的文字，语句通顺，口水词已去除](/images/T1OebENXAoEWsFxYVXMcgOa8nue.png) |

---

## 录音卡绑定其他手机

想把录音卡换到另一台手机使用？按以下步骤操作。

### 第一步：解绑当前手机

进入设备信息页，滑到底部，选择「断开或解绑」→「解绑并清除数据」。

> **重要**：解绑前确保录音卡中的录音文件已全部上传完成。

![设备信息页底部，「断开或解绑」按钮位置](/images/HJkub4wn9onOa9xE9plcIF67nmc.png)

![解绑选项弹窗，显示「断开连接」和「解绑并清除数据」两个选项](/images/Bm3XbkRHWowoMix4gSicPPmWnLz.png)

### 第二步：iOS 用户额外操作

如果是 iPhone，还需要去系统蓝牙设置中，找到录音卡设备，点击「忽略此设备」。

![iPhone 蓝牙设置页面，GetSeed 录音卡设备旁的「忽略此设备」按钮](/images/IiulbeeH0oWioSxawoBcn1CQnBd.png)

### 第三步：在新手机上添加设备

拿另一台手机，按照「添加并激活设备」的流程重新操作即可。

![新手机上 Get笔记 App 的设备添加引导页面](/images/VQhKbb36FoPAqrxVfaScWhHonRd.png)

![新手机连接成功，显示录音卡设备信息和连接状态](/images/KwsabD9mRodbJHxJLlMc35DAnDc.png)
`},{id:"getseed/sprout",title:"笔记发芽",content:`
# 笔记发芽

不只帮你记住，更能帮你「想到」。AI 理解你记录内容的思想内核，跨领域、跨时空，帮你发现意想不到的关联。

---

## 是什么

你每天说的话、开的会、读的书、冒出来的想法，都是种子。

大多数录音产品只负责把种子存起来——录音、转写、存档，笔记越存越多，最后变成信息的坟墓。GetSeed 要做的，是让这些种子**发芽**。

**举个例子**：你用 GetSeed 记录了曾国藩的「既往不恋，当下不杂，未来不迎」。

普通搜索输入「曾国藩」，只会给你更多曾国藩——生平、语录、相关书籍，这是**检索和罗列**。

但「发芽」不同。AI 会理解这句话的思想内核是「活在当下」，然后告诉你：
- 爱因斯坦说过「我从不去想未来，因为它来得已经够快了」
- 《功夫熊猫》里乌龟大师也说过「昨天是历史，明天是谜题，但今天是上帝的礼物」

这是**理解和连接**。你种下一颗种子，它能结出什么果子，就像开盲盒一样充满惊喜。

---

## 适用场景

| 场景 | 怎么帮你 |
|------|----------|
| 金句收藏 | 记录一句触动你的话，发芽报告帮你找到古今中外不同领域的共鸣表达 |
| 读书听课 | 录下听书感想或课堂心得，AI 从你没想到的角度给出跨学科的关联知识 |
| 灵感发散 | 记录一个初步想法，发芽报告从不同维度延展思考，激发更多创意 |
| 会议复盘 | 录完一场讨论，对关键议题发芽，发现其他行业或历史中的类似案例 |
| 日常感悟 | 随口记录生活感触，AI 帮你发现背后更深层的规律和连接 |

---

## 怎么用

### 第一步：进入录音卡详情页

打开 Get笔记 App，首页点击「GetSeed 录音卡」进入录音卡详情页。顶部会展示发芽区域。

![GetSeed 录音卡详情页顶部，显示发芽区域和剩余种子数量，底部有「发芽」按钮](/images/DjkIb888joPRP7xjk4tcgCkKnLe.png)

### 第二步：点击「发芽」生成报告

点击「发芽」按钮，AI 会基于你的新录音笔记生成发芽报告。

![点击「发芽」按钮后的加载页面，提示正在生成发芽报告，预计 3-5 分钟](/images/EtrrbDaNjo4Xzyxnt1JcL6lAn6f.png)

![发芽报告生成完成，展示跨领域的思想关联和延伸内容](/images/EvmHbdv6zoijoZxT9BjcakwEnGg.png)

### 第三步：查看发芽报告

点击右上角「发芽报告」，进入报告列表页查看所有报告详情。

![发芽报告列表页，展示历史生成的所有报告，按时间倒序排列](/images/NyhIbA8dCoGyvSxQSSkcGZ2Qn2f.png)

![发芽报告详情页，展示 AI 基于录音内容生成的跨学科关联分析](/images/Wxrsb4g3AowqcFxDI3JcZvhunjf.png)

### 第四步：单条笔记发芽（可选）

每条录音卡笔记也可以单独发芽。在笔记的「...」更多操作里，点击「笔记发芽」，针对这一条笔记生成专属的发芽报告。

![笔记详情页的更多操作菜单，展示「笔记发芽」选项](/images/Oi4xbbviaod7G8xMzHWcKPnqneR.png)

![单条笔记的发芽报告，针对特定笔记内容生成聚焦的关联分析](/images/Iuo8bqwbvoXHt3xrZUHc9GzVnKe.png)

---

## 使用规则

| 规则 | 说明 |
|------|------|
| 每天 5 颗种子 | 生成一次消耗 1 颗，每天 0 点重置，不累计 |
| 需要新录音 | 每次发芽前需要至少有一条新的录音笔记 |
| 后台生成 | 约 3-5 分钟完成，不用盯着等，完成后推送通知 |
| 单条也消耗 | 单条笔记发芽同样消耗 1 颗种子 |

---

## 小技巧

- **整体发芽 vs 单条发芽**：整体发芽综合多条记录发现深层关联，单条发芽对特别有启发的笔记做聚焦分析
- **不用等结果**：点击发芽后可以去做别的事，报告生成好了会推送通知
- **所有报告集中查看**：生成好的发芽报告都在「发芽报告」入口中统一查看
`},{id:"getting-started/download",title:"下载安装",content:`
# 下载安装

Get笔记可以在手机、电脑、微信里使用。选一个你最方便的方式，装好就能开始记笔记。

## 手机 App（推荐）

手机 App 功能最全，录音、拍照、保存链接都能用。

### iOS（苹果手机）

打开 App Store，搜索「Get笔记」，点击「获取」下载安装。

也可以直接点击链接下载：[前往 App Store](https://apps.apple.com/us/app/id6711334436)

### Android（安卓手机）

打开你手机自带的应用市场（华为、小米、OPPO、vivo 都有），搜索「Get笔记」下载。

也可以直接点击链接下载：[下载 Android 版](https://www.pgyer.com/h6FHmjEJ)

## 微信小程序

不想装 App？在微信里也能用。

1. 打开微信，点击顶部搜索栏
2. 输入「Get笔记」
3. 点击搜索结果中的小程序，直接打开使用

适合临时用一下，比如保存微信里看到的好文章。

## 网页端

在电脑浏览器打开 [biji.com](https://biji.com)，登录账号就能用。

适合在电脑上浏览笔记、批量管理、导入导出。

## 小技巧

- **多端同步**：不管从哪个端记的笔记，登录同一个账号就能自动同步
- **推荐先装手机 App**：手机 App 的录音和拍照功能最好用，建议优先安装
- **微信里快速保存**：看到好文章，直接复制链接到小程序就能保存

---

## 下一步

安装完成后，查看 [快速上手](/getting-started/quickstart) 了解怎么记第一条笔记。
`},{id:"getting-started/quickstart",title:"快速上手",content:`
# 快速上手

Get笔记有四种记笔记的方式：**说给它听、录下会议、拍张照片、粘贴链接**。不管用哪种方式，AI 都会帮你自动整理成一篇干净的笔记。

## 是什么

Get笔记是一个 AI 笔记工具。你只管把信息「扔」进去，AI 帮你整理好。不用手动排版，不用自己总结，录完、拍完、粘贴完就是一篇可以直接用的笔记。

---

## 怎么记笔记

### 方式一：语音速记

最快的记笔记方式——直接说出来，AI 帮你变成文字。

**第一步：点击底部「录音」按钮**

打开 App，在首页底部找到「录音」按钮，点击后选择「语音速记」。

![App 首页底部显示三个按钮：「+ 更多」「录音」「文字」，红色箭头指向中间的录音按钮，点击即可开始语音记录](/images/NYcXboxjOoQGSUxReQ0cdSuNnAV.png)

**第二步：开始说话**

点击红色录音按钮开始录音，屏幕上会显示「请说，我在听...」。你说的话会实时转成文字。

![语音速记录音界面，上方白色区域显示「请说，我在听...」等待语音输入，下方显示录音时长 00:01/30:00，底部有取消、红色暂停和完成三个按钮，红框标注「完成」按钮提示录制完后点击](/images/KiiGb2Sw6o2U0sxozx9cse4nnOf.png)

**第三步：点击「完成」**

说完后点击右下角「完成」，AI 会自动帮你润色文字、加标点、分段落。

> **提示**：免费用户单次可录 10 分钟，会员可录 60 分钟。

---

### 方式二：线下会议录音

开会时打开录音，AI 会自动区分谁在说话，会后还会生成会议纪要。

**第一步：点击「+ 更多」，选择「线下会议录音」**

在首页底部点击「+ 更多」按钮，在弹出菜单中选择「线下会议录音」。

![首页底部红色箭头指向左侧「+ 更多」按钮，点击可展开更多笔记创建方式](/images/D5aUbL37ioCELtxxhICc8dSAnSb.png)

![「更多方式」弹窗菜单，列出五个选项：粘贴链接、拍照、上传图片、线下会议录音（红框标注，标签显示 NEW）、手机内录，每个选项下方有简短说明](/images/JsL0bQ7Cwog0X2xMGcBcplpmnkd.png)

**第二步：开始录音**

把手机放在会议桌上，点击录音按钮。录音过程中会显示计时器。

![会议录音界面，上方显示「请说，我在听...」，底部显示录音时长 00:00/120:00（最长2小时），底部有取消、红色暂停和完成三个按钮](/images/CC5ub6cp6oLsSxxNGNuc78epn1g.png)

**第三步：查看结果**

录完后 AI 会自动处理，生成区分不同发言人的文字记录和会议纪要。

![会议录音转写结果页面，顶部显示三步进度条：文件上传、录音转写、总结纪要。下方按发言人分段展示，每段标注说话人编号（说话人1-5）和时间戳，内容已转为完整文字](/images/RDWwbqxuSoQZsgxtQAmcPvWVn8e.png)

![会议笔记详情页，标题「关于语言表达与解放的讨论」，包含音频播放器和标签，下方有四个切换标签：文字记录、智能总结、章节概要、待办事项（红框标注），展示 AI 生成的会议信息摘要和会议总结](/images/XNckbHqzYoHscnxshKdcO3D7nZd.png)

> **提示**：免费用户可录 1 小时，会员可录 3 小时。

---

### 方式三：拍照 / 上传图片

看到想记录的东西，拍下来或选张照片，AI 帮你把图片内容变成文字笔记。

1. 点击首页底部「+ 更多」
2. 选择「拍照」或「上传图片」
3. 拍摄或选择图片（支持多张）
4. AI 自动识别图片内容，提取文字和重点

适合拍课堂 PPT、会议白板、书本段落、菜单账单。

---

### 方式四：保存链接

看到好文章或好视频，复制链接粘贴进来，AI 帮你提取核心内容。

**第一步：点击「+ 更多」，选择「粘贴链接」**

![「更多方式」弹窗菜单，红框标注第一个选项「粘贴链接」，说明文字：公众号文章、抖音短视频、得到直播回放等，下方还有拍照、上传图片、线下会议录音、导入音视频、手机内录等选项](/images/Cg8ubYt8nonNUWxVUpvcdMySnje.png)

**第二步：粘贴链接，等 AI 处理**

粘贴你复制好的网页链接，AI 会自动读取内容，生成一篇总结笔记。

![链接笔记保存后的首页列表，显示 AI 从链接提取生成的笔记卡片，包含文章标题、AI 提取的摘要和来源信息](/images/HaRcblUfkoJlSnxE3WucbPPdnYc.png)

**支持的链接类型**：微信公众号文章、抖音短视频、B站视频、小红书图文、得到直播回放等。

---

## 怎么找笔记、用笔记

### 搜索笔记

点击首页顶部的搜索框，输入关键词，就能找到你之前记的笔记。

![首页顶部红框标注搜索栏，显示「搜索笔记」占位文字，下方是笔记列表，底部有「+ 更多」「录音」「文字」三个按钮](/images/RygIb7eWqochVYxTVe6cGMl0ncd.png)

![搜索页面，顶部搜索框已输入「ai」，下方显示「向 AI 询问 "ai"」的快捷入口，再下方红框标注搜索结果列表，展示匹配到的笔记标题和内容摘要](/images/N1RabxWgfowpI1xpEzwcUaxzn5e.png)

### AI 助手问答

除了搜索，你还可以直接问 AI 助手。它会翻阅你所有笔记，给出回答。

点击首页顶部「欢迎来到Get笔记」旁边的「聊一聊」按钮，就能进入 AI 对话页面。

![首页顶部红框标注欢迎横幅区域，显示「欢迎来到Get笔记，现在，开始你的灵感之旅吧」文字，右侧有「聊一聊」按钮可进入 AI 助手对话](/images/E7Nlb9sluo6seWxFQ0bcfpWenQg.png)

![AI 助手对话页面，顶部显示「你好，我是你的AI助手」和「你可以这样问我」，下方列出推荐问题：帮我生成周报、整理一周待办、24小时热点等，底部红框标注输入区域，包含深度思考开关和搜索范围选择](/images/NHI8bRRaOoqf5RxiJQDc3DqZnJd.png)

### 追加笔记

已经记过的笔记，还想补充内容？在笔记详情页底部点击「追加笔记」就行。

支持追加文本、语音、图片、链接——所有笔记类型都可以追加。

![笔记详情页底部显示「追加笔记」按钮（红框标注），点击即可对当前笔记补充新内容，页面中展示的是一篇关于 AI Agents 发展趋势的笔记](/images/JnUsbCfdGoleAaxQiM0c1rSWnz0.png)

---

## 小技巧

- **最快上手方式**：先试试语音速记，打开 App 点「录音」说两句就行
- **链接笔记很方便**：刷到好内容，复制链接粘贴进来，再也不怕忘记收藏
- **善用 AI 助手**：记了很多笔记后，直接问 AI「帮我整理本周的学习要点」，它会帮你总结

---

## 下一步

- 了解更多 [录音功能](/recording/voice-memo)
- 探索 [知识库](/knowledge-base/create)
- 查看 [用户案例](/use-cases)
`},{id:"index",title:"Get笔记帮助中心",content:`
# 你好，欢迎来到 Get 笔记

这是属于你的世界。

Get 笔记是一款生长在 AI 时代下的小产品，让记笔记，找笔记，用笔记变得简单。

---

一条上班上学路上的语音记录，一张微信聊天截屏，一篇群里分享的文章，一条干货满满的短视频，三五个人的碰头会，一张刚送到的外卖午餐照片，深更半夜的灵感迸发，小学生稚嫩的作文……

所有这些，在 Get 笔记里，都快速的帮你留下来。

当你的世界从一粒种子，长成一片森林的时候，你会发现，在 AI 的帮助下，你强得可怕。

---

1911 年 12 月 14 日，挪威探险家阿蒙森率领队伍第一个抵达了南极点，击败了几乎同时出发的英国探险家斯科特。

他的成功经验，最后可以总结成一句话：**不管天气好坏，坚持每天前进 30 公里。**

探险是这样，记录也是。

Get 笔记愿和你一起开启一段新旅程，找到自己的"南极点"。

---

## 开始使用

- **[下载安装](/getting-started/download)** — iOS、Android、小程序、网页端
- **[快速上手](/getting-started/quickstart)** — 3 分钟了解核心用法

## 记录笔记

- **[语音速记](/recording/voice-memo)** — 说话变笔记，AI 自动润色
- **[会议录音](/recording/meeting)** — 多人会议，自动识别发言人
- **[课堂录音](/recording/classroom)** — 上课录音，下课出学霸笔记
- **[拍照记笔记](/recording/photo)** — 拍一下，AI 帮你整理
- **[链接保存](/recording/link)** — 文章视频一键保存总结

## 有问题？

查看 [常见问题](/faq)，或打开 App → 我的 → 帮助与反馈
`},{id:"knowledge-base/add-notes",title:"将笔记加入知识库",content:`
# 将笔记加入知识库

把你之前记的笔记加入知识库，统一管理。加入后可以在知识库里搜索这些笔记，也可以问 AI 关于笔记内容的问题。

## 是什么

你在 Get笔记首页已经积累了很多笔记——录音、文字、图片、链接都有。把它们加入知识库后，AI 就能把这些内容和知识库里的其他文件一起分析，帮你更全面地搜索和回答问题。

## 怎么添加

### App 端

#### 方式一：从知识库内添加

**第一步：进入知识库，点击「添加内容」**

打开你的知识库，点击「添加内容」按钮。

![知识库详情页，底部显示「添加内容」按钮，点击可展开添加选项](/images/CsUMbACIvo3II5xFtKacEcYxn8e.png)

**第二步：选择「从已有笔记导入」**

在弹出的选项中，选择「从已有笔记导入」。

![添加内容弹窗，显示多个选项包括「上传文件」「订阅直播/博主」「从已有笔记导入」等，红框标注从已有笔记导入选项](/images/L15ybTVK4o1TPux2W57cC3C9nhd.png)

**第三步：选择笔记，点击确定**

从笔记列表中勾选你要加入的笔记，可以多选，然后点击确定。一次最多可以选中 100 条笔记。

![笔记选择列表页面，每条笔记右侧有勾选框，底部显示已选数量和「确定」按钮](/images/GOjrbvQXAozm27xNgDocM6i5nhn.png)

添加完成后，笔记会出现在知识库内容列表中。

![知识库详情页，已添加的笔记显示在内容列表中，每条笔记显示标题和摘要信息](/images/Lfy9bS8HVoqoYJxK6r2cMirLnbh.png)

#### 方式二：从首页笔记列表添加

你也可以直接在首页的笔记列表中操作：点击笔记右侧的「...」更多操作，选择你想加入的知识库。

![首页笔记列表，点击某条笔记的「...」更多按钮，弹出操作菜单](/images/NHpkbi9FUo6rChxcTNdcglTUnQf.png)

![更多操作菜单中显示「加入知识库」选项，点击后可选择目标知识库](/images/Nv9obxISDoKfx5xseDecOpBYnHb.png)

选择知识库后即可加入。同样的入口也支持将笔记从知识库中移出。

![知识库选择列表，勾选要加入的知识库，已加入的知识库可点击移出](/images/WjjwbgkVPopDtjxBxB8cxY4Engh.png)

### 网页端

**第一步：进入知识库，点击「添加」→「选择已有笔记」**

![网页端知识库详情页，顶部「添加」按钮展开下拉菜单，显示「选择已有笔记」选项](/images/WRjFbKRkNouK2Axpwc1cLQ8hnMh.png)

![下拉菜单展示添加选项，包括上传文件、选择已有笔记等](/images/NFEhbb1UDogEsXxOQakc0L1Rn4j.png)

**第二步：从笔记列表中选择，点击确定**

勾选要添加的笔记后，点击「确定」按钮即可完成添加。一次最多可选 100 条笔记。

![网页端笔记选择弹窗，左侧显示笔记列表带勾选框，底部有「确定」按钮，已选笔记数量实时显示](/images/VjXjb173no0SeRx5B7dcpTvBnVb.png)

## 小技巧

- **一次最多选 100 条**：批量添加时每次上限 100 条笔记，需要添加更多可以分批操作
- **笔记和知识库是同一份**：加入知识库的笔记和首页笔记是同一条，修改或删除会同步生效
- **一条笔记可加入多个知识库**：同一条笔记可以同时存在于不同知识库中
- **移出不会删除笔记**：从知识库移出笔记，只是取消关联，原始笔记还在首页
`},{id:"knowledge-base/create",title:"创建知识库",content:`
# 创建知识库

把相关的内容放在一起，方便查找和管理。比如创建一个「读书笔记」知识库，把所有读书相关的笔记都放进去，以后想找什么直接搜。

## 是什么

知识库就像一个智能文件夹。你可以把笔记、PDF、直播记录、博主视频都丢进去，然后用 AI 搜索、提问，快速找到你要的信息。

普通文件夹只能按名字找，知识库能理解内容——你可以问「上次开会说的那个方案是什么」，AI 会帮你翻出来。

## 怎么创建

### App 端

**第一步：进入知识库页面**

打开 App，点击首页顶部的「更多」入口，进入知识库页面。

![App 首页顶部导航栏，左侧显示「更多」入口按钮，点击可进入知识库等功能页面](/images/ZNMSbuHSqotgUMx3BVCcu74mnBf.png)

**第二步：点击新建**

在知识库页面，点击右上角的「+ 新建」按钮。

![知识库列表页面，右上角显示「+ 新建」按钮，点击即可创建新知识库](/images/SisEb5drPoSjZNxdYnucvVDRnle.png)

**第三步：填写名称，完成创建**

输入知识库名称，点击确定，知识库就创建好了。

![创建知识库弹窗，包含名称输入框和确定按钮，输入知识库名称即可完成创建](/images/EVywbEqXYohPmVx6dz2cQpMtnNb.png)

创建完成后，你可以在知识库详情页编辑名称和描述，也可以开始往里面添加内容。

![知识库详情页，顶部显示知识库名称和描述，下方有「添加内容」按钮，可上传文件、订阅直播和博主、添加已有笔记](/images/TH0GbGRQVo0v62x0boUcTlXXnBd.png)

![知识库编辑页面，可修改知识库名称和描述信息，底部有删除知识库选项](/images/OdfIbtwiNowHydxzWvJc0aY3nte.png)

### 网页端

**第一步：打开 biji.com，点击左侧「知识库」**

![网页端左侧菜单栏，显示「知识库」入口，点击进入知识库管理页面](/images/FURJb7qAEo5jdCxo3WBcWe6wnRb.png)

**第二步：点击「创建知识库」**

![网页端知识库页面，顶部显示「创建知识库」按钮，下方为已有知识库列表](/images/ZWh3bqq8vo3akfxVm8kcdglvnhe.png)

填写名称后即可完成创建。

![创建知识库弹窗，输入知识库名称后点击确定完成创建](/images/Z2XjbqxJVo2iEDxo3w5cwS9znef.png)

如果想编辑或删除知识库，点击知识库卡片上的「...」按钮。

![网页端知识库卡片右上角的「...」更多操作菜单，包含编辑和删除选项](/images/IaEBbj1rVoZafBxge7ic6Iahnge.png)

## 容量限制

| 用户类型 | 知识库数量 | 总容量 |
|----------|-----------|--------|
| 普通用户 | 10 个 | 30 GB |
| PRO 会员 | 不限 | 500 GB |

> 删除知识库会同时删除里面的文件内容，请谨慎操作。知识库中的笔记不会被删除，因为笔记只是「加入」了知识库，原始笔记仍保留在首页。

## 下一步

创建好知识库后，可以往里面添加内容：

- [上传文件](/knowledge-base/upload) — PDF、Word、PPT 一键上传
- [订阅直播](/knowledge-base/subscribe-live) — AI 帮你听直播，自动生成笔记
- [订阅博主](/knowledge-base/subscribe-creator) — 博主发新视频，自动变笔记
- [添加已有笔记](/knowledge-base/add-notes) — 把之前记的笔记加进来
`},{id:"knowledge-base/share",title:"分享和团队管理",content:`
# 分享和团队管理

把知识库分享给别人，或者组建团队一起维护。你可以把知识库公开让所有人看，也可以设为团队模式只让特定的人使用。

## 是什么

每个知识库默认是**私密**状态，只有自己能看到。如果你想让别人也能用你的知识库，需要手动设置分享权限。

**三种模式**：

| 模式 | 说明 |
|------|------|
| 私密 | 只有自己能看（默认） |
| 公开 | 任何人都能通过链接访问 |
| 团队 | 需要申请加入或管理员邀请 |

## 怎么分享

### 公开分享

让任何拿到链接的人都能访问你的知识库。

#### App 端

**第一步：在知识库内，点击右上角分享按钮**

![知识库详情页，右上角显示分享图标按钮，点击进入分享设置](/images/QHofb2B0po5eFwxV3jccsPeZnkc.png)

**第二步：选择「公开」**

![分享设置页面，顶部三个选项切换：私密、公开、团队可见，当前选中「公开」](/images/KD5zb6DfYoit77xs2bLcXD37nAg.png)

**第三步：选择分享方式**

可以通过微信好友、朋友圈、分享海报、复制链接等方式分享出去。

![公开分享页面，下方显示分享方式：微信好友、朋友圈、分享海报、复制链接等](/images/D3SYbrjKBohUChxiiv9c6C8znGd.png)

![分享海报预览页面，显示知识库名称和二维码，可保存到手机相册](/images/Q51RbOJRIoWBKTxDrVecld1inWf.png)

别人打开链接后，可以直接进入知识库浏览、搜索和使用 AI 问答。

![他人通过链接访问的知识库页面，可浏览内容、搜索和使用 AI 功能](/images/VwGnbLgxroJr8qxNOZUcY06Mnsd.png)

#### 网页端

进入知识库，点击右上角「分享」按钮，选择「公开」后复制链接即可。

![网页端分享设置弹窗，可切换私密/公开/团队模式，公开模式下显示分享链接可复制](/images/Y5OpbZny5opHxrxArMRcXRrdnwg.png)

#### 小程序端

在小程序中同样可以分享：进入知识库，点击右上角分享按钮，选择「公开」后通过微信分享。

![小程序端知识库页面，点击右上角分享按钮进入分享设置](/images/YsAWb8XVOoSHALxfwLncVCOfnTe.png)

![小程序分享设置页面，切换为「公开」模式](/images/ZyO9bMXn9os3taxaU9PcEuO5nRh.png)

![小程序公开分享页面，底部显示分享到微信好友、朋友圈等方式](/images/OpyVb6LKqoDos8xQOiycR6P0nfe.png)

![分享海报预览，包含知识库封面和小程序码](/images/Y0PYbEQYtohVg7xTMQJc1k19nEe.png)

![分享完成后他人收到的小程序卡片预览](/images/Pb3Db8L16oEhRnxkOwDcQWn0nQf.png)

### 团队协作

让特定的人一起使用和维护知识库。

#### App 端

**第一步：选择「团队可见」**

在分享设置中选择「团队可见」。

![分享设置页面，选中「团队可见」选项，下方显示成员管理和加入设置](/images/Y5ddb4dreoHRy7xHLxicpyQ5nrf.png)

**第二步：分享链接给团队成员**

将知识库链接通过微信等方式发给团队成员。

![团队分享页面，显示分享方式和邀请链接](/images/UQkSb5GKloob3Cxe2HKc0EmSnld.png)

**第三步：管理成员加入方式**

默认需要管理员审核才能加入。如果想让成员直接加入，可以打开「成员自动加入」开关。

![团队设置页面，显示「成员自动加入」开关，关闭时需管理员审核，打开时成员可直接加入](/images/FGmpbMg08o2EBvxSVsfc69cGnNe.png)

其他成员点击链接后，会看到「申请加入知识库」按钮。管理员审核通过后，知识库会出现在成员的列表中。

![他人通过链接访问的团队知识库页面，显示「申请加入知识库」按钮](/images/KsQdbmbcGo2kNAxRq7WctJuZnfI.png)

#### 审核成员申请

有新成员申请加入时，知识库顶部的成员入口会有红点提醒。

![知识库详情页顶部成员入口显示红点通知，提示有新的加入申请待审核](/images/E4vvbxxc2oWXzix0YjQcxXjhnyd.png)

点击进入成员管理页面，可以同意或拒绝申请。

![成员管理页面，显示待审核的申请列表，每条申请右侧有「同意」和「拒绝」按钮](/images/Z2RHbgy8Cof9dTxVHH5cdJIFned.png)

通过审核的成员可以分配角色：普通成员或管理员。也可以随时将成员移出知识库。

![成员角色设置页面，可将成员设置为「普通成员」或「管理员」，底部有「移出知识库」选项](/images/Lj1ub7ugeoMpXAxB0N5ctQwYnSh.png)

![成员列表页面，显示所有已加入的团队成员、角色和加入时间](/images/QrM3bb1E7oZyEMxsFzFcm4pHnTh.png)

#### 团队角色权限

| 权限 | 成员 | 管理员 | 创建人 |
|------|------|--------|--------|
| 查看、分享、复制内容 | ✅ | ✅ | ✅ |
| 编辑自己的内容 | ✅ | ✅ | ✅ |
| 删除自己的内容 | ✅ | ✅ | ✅ |
| 追加自己的内容 | ✅ | ✅ | ✅ |
| 添加内容 | ❌ | ✅ | ✅ |
| 移出所有内容 | ❌ | ✅ | ✅ |
| 订阅/取消订阅直播和博主 | ❌ | ✅ | ✅ |
| 编辑知识库名称和描述 | ❌ | ✅ | ✅ |
| 审批成员 | ❌ | ✅ | ✅ |
| 修改分享权限 | ❌ | ❌ | ✅ |
| 删除知识库 | ❌ | ❌ | ✅ |

## 订阅别人的知识库

看到别人分享的知识库，你可以订阅到自己的列表里方便随时访问。

### App 端

点击别人分享给你的链接、小程序或海报，进入知识库页面后点击「+ 订阅」。

![他人分享的知识库页面，顶部显示「+ 订阅」按钮，点击即可将知识库加入自己的列表](/images/MfT2bK30XoTJzrx2HtRcWmKpnGh.png)

订阅后的知识库会出现在「我的」知识库列表中。你也可以在「精选」tab 下订阅官方推荐的知识库。

![知识库列表页「精选」标签，展示官方推荐的优质知识库，可点击订阅](/images/B6ahbzjuZokVrmxE78ScLpKHnVe.png)

![已订阅的知识库出现在「我的」知识库列表中](/images/P987bN9gvosMABxmpoKcT0fincg.png)

如果想取消订阅，点击知识库的「...」更多按钮，选择「取消订阅」。

![知识库更多操作菜单，显示「取消订阅」选项](/images/HEUTbVF7noJCbOxwh7NcBBOEnXb.png)

### 网页端

打开别人分享的链接，点击右上角「订阅知识库」。

![网页端他人知识库页面，右上角显示「订阅知识库」按钮](/images/Rl3CbILKDoCYgYxb5rgcnJzhnbw.png)

如果想取消订阅，点击知识库的「...」更多按钮，选择「取消订阅」。

![网页端知识库卡片的「...」菜单，显示「取消订阅」选项](/images/YEkebRi8xoCSHSx12Y9cFnJqnHc.png)

## 小技巧

- **先公开试试**：如果只是想让朋友看看，选「公开」最简单，发个链接就行
- **团队适合长期协作**：如果需要多人一起添加内容和管理，选「团队」模式
- **关闭分享即失效**：把分享权限改回「私密」，之前分享的链接就失效了，别人无法再访问
- **订阅不占容量**：订阅别人的知识库不会占用你自己的存储空间
`},{id:"knowledge-base/subscribe-creator",title:"订阅博主",content:`
# 订阅博主

订阅你喜欢的抖音博主，他们发的新视频会自动变成笔记。不用一个个去看，订阅一次，AI 帮你持续追踪。

## 是什么

把抖音博主的主页链接粘贴到知识库，Get笔记会自动追踪这个博主的最新动态。每当博主发布新视频，AI 会自动分析视频内容，提取重点信息，整理成笔记存到知识库里。

**更新频率**：每天早上 8 点自动更新前一天发布的新视频。

## 怎么订阅

### App 端

**第一步：进入知识库，点击「添加内容」→「订阅直播/博主」**

![知识库详情页，点击底部「添加内容」按钮后弹出选项菜单](/images/GdYSbehsOoY1f8xMPJTcewFBnKu.png)

![添加内容弹窗，显示「上传文件」「订阅直播/博主」等选项](/images/P7a4bZsUvobjj2xDTGecAzjanQd.png)

**第二步：粘贴博主主页链接**

选择「抖音博主」，然后粘贴博主的主页链接。

![订阅页面切换到「抖音博主」标签，下方有链接输入框，粘贴博主主页链接后点击订阅](/images/Umo5bwyyao6THRxRf6Kc8iYanvc.png)

![粘贴链接后显示博主信息预览，包括博主头像和昵称，确认后点击订阅按钮](/images/Vubqb9jPdoWd9JxN5PQcD8YUn6f.png)

**第三步：订阅成功，等待更新**

订阅成功后，Get笔记会每天自动检查博主是否发布了新视频，并将视频内容整理成笔记。

![知识库中已订阅的博主列表，显示博主昵称和最近更新时间](/images/C4SNblJxho6YV2xtY24cVR8Mn8d.png)

![博主视频自动生成的笔记详情，显示视频标题、内容摘要和重点信息](/images/JKFbbgDvUoqEPVxcsUFc4Gjjnac.png)

### 网页端

**第一步：进入知识库，点击「添加」→「订阅直播/博主」**

![网页端知识库详情页，点击顶部「添加」按钮展开菜单](/images/XHisbWv4Co1ozRxqBlDcnqNrn5x.png)

![下拉菜单中选择「订阅直播/博主」选项](/images/QtFNbDhccoeQT4xvzEKc8gkmnsD.png)

**第二步：粘贴博主主页链接，点击订阅**

![网页端订阅弹窗，选择「抖音博主」标签，输入框粘贴博主主页链接](/images/TsUUb270wo9wb4xLIxicCYpMnCf.png)

![粘贴链接后显示博主信息，确认后点击订阅按钮完成操作](/images/Vhtxbtl3NoA4W4xG9tMcy139nsd.png)

## 怎么找到抖音博主的主页链接

1. 打开抖音 App，找到你想订阅的博主
2. 进入博主主页，点击右上角「...」
3. 点击「分享名片」，然后「复制链接」

![抖音博主主页，右上角显示「...」更多操作按钮](/images/Swr0bxOQxoEkY4xj8zCcWNrqnwl.png)

![点击「...」后弹出菜单，显示「分享名片」选项](/images/TyymbmYu3ocgN3xEYZ8cjtyynmh.png)

![分享名片页面，底部显示「复制链接」按钮，点击即可复制博主主页链接](/images/VwKubVTg9oJwCTxtLK8cCVeqnTL.png)

## 小技巧

- **每天自动更新**：订阅后不用手动操作，每天早上 8 点自动更新前一天的新视频
- **适合知识型博主**：对于分享干货知识的博主效果最好，AI 会提取视频中的重点信息
- **批量订阅**：可以在一个知识库里订阅多个博主，集中管理
`},{id:"knowledge-base/subscribe-live",title:"订阅直播",content:`
# 订阅直播

订阅直播，AI 帮你全程记录。不用守着看，事后看笔记就能掌握核心内容。

## 是什么

把直播链接粘贴到知识库里，AI 会自动替你「听」完整场直播，然后生成内容总结和章节纪要。即使错过了直播也没关系，回放一样可以订阅。

**目前支持**：得到 App 直播、视频号直播

**可以订阅的直播类型**：
- 未开始的直播（开播后自动记录）
- 正在进行的直播
- 直播回放

> 已下架的直播和会员专享直播不支持订阅。

## 怎么订阅

### App 端

**第一步：进入知识库，点击「添加内容」→「订阅直播/博主」**

![知识库详情页，点击底部「添加内容」按钮后弹出选项菜单](/images/F0thbTkUDo477xxClbUcTTsDnJV.png)

![添加内容弹窗，显示「上传文件」「订阅直播/博主」等选项，点击「订阅直播/博主」](/images/GjX8bbnU1odteAxel3EckQ9Xnhd.png)

**第二步：粘贴直播链接**

选择直播平台（得到 App 或视频号），然后粘贴你复制好的直播链接。

![订阅直播页面，顶部可切换「得到 App 直播」和「视频号直播」，下方有链接输入框，粘贴直播链接后点击订阅](/images/VRThbz2sKof8cCxzUmzcYrF5nmh.png)

![粘贴链接后显示直播信息预览，确认无误后点击订阅按钮完成订阅](/images/AgM9b7LyAoztD0xU9WDcSmgonyb.png)

**第三步：等待 AI 生成笔记**

订阅成功后，直播结束时 AI 会自动生成内容总结和章节纪要（处理过程大约需要 30-40 分钟）。生成的笔记会出现在知识库内容列表中。

![知识库中已生成的直播笔记，显示直播标题、内容总结和章节纪要，可点击查看完整内容](/images/A03cbM0mxoPmeyx5lHwcweVEnRd.png)

### 网页端

**第一步：进入知识库，点击「添加」→「订阅直播/博主」**

![网页端知识库详情页，点击顶部「添加」按钮展开菜单，选择「订阅直播/博主」](/images/FGJ1bGDSioR9htxlAGmcw2Gmn8c.png)

![下拉菜单中显示「订阅直播/博主」选项](/images/Mrr8bQvxvofvqBxR5a4cldaCnCe.png)

**第二步：粘贴直播链接，点击订阅**

![网页端订阅直播弹窗，选择「得到 App 直播」，下方输入框粘贴直播链接](/images/Vd4bbYiqEoD0CYxK8nDcxtNonJc.png)

![粘贴链接后显示直播信息，点击订阅按钮完成操作](/images/T0dgbLGNconpRfxKyWmcya12nGh.png)

## 怎么找到得到 App 的直播链接

1. 打开得到 App，找到你想订阅的直播
2. 打开直播间，点击分享按钮
3. 点击「复制链接」

![得到 App 直播间页面，底部显示分享按钮，点击后出现分享选项](/images/WLnybtQCDoauLPxRRn0cc5gLn1e.png)

![分享弹窗中显示多种分享方式，底部有「复制链接」按钮](/images/ZgRRbM5looyQF6xr3KKc6X55nlf.png)

![点击复制链接后提示「链接已复制」，可粘贴到 Get笔记中使用](/images/ZcQEboD5uoFTRvx9RXtcuSGZn2Q.png)

## 小技巧

- **提前订阅**：对于未开始的直播，提前订阅好，开播后 AI 会自动开始记录
- **回放也能订阅**：错过了直播没关系，找到回放链接粘贴进来，一样能生成笔记
- **处理需要时间**：直播结束后 AI 需要 30-40 分钟处理，耐心等一下就好
`},{id:"knowledge-base/upload",title:"上传文件",content:`
# 上传文件

把 PDF、Word、PPT 文件传到知识库，AI 帮你读懂里面的内容。上传后可以在知识库里搜索文件内容，也可以问 AI 问题。

## 是什么

知识库支持上传文档文件。上传后 AI 会自动分析文件内容，你可以像搜索笔记一样搜索文件里的内容，也可以直接问 AI「这份报告的结论是什么」之类的问题。

**支持的文件格式**：PDF、Word（.doc、.docx）、PPT（.ppt、.pptx）

**单个文件大小限制**：200 MB

## 怎么上传

### App 端

**第一步：进入知识库，点击「添加内容」**

![知识库详情页，底部显示「添加内容」按钮](/images/HEdKbEeqYoEV2ixqp5icCYx6nmc.png)

**第二步：选择「上传文件」**

在弹出的选项中，选择「上传文件」，然后从手机中选择文件（可多选）。

![添加内容弹窗，显示「上传文件」「订阅直播/博主」「从已有笔记导入」等选项](/images/Lju4bF3wOoVOXYxwi6scqbZln8e.png)

![手机文件选择界面，可浏览和选择 PDF、Word、PPT 等文件进行上传](/images/BBb7b4qo3odfG9xTaLUc2hf3nQc.png)

**第三步：等待 AI 处理**

文件上传后，AI 需要 1-3 分钟进行识别和分析。处理完成后可以搜索文件内容、向 AI 提问。

![文件上传进度页面，显示文件名和上传状态，AI 正在处理分析文件内容](/images/QUpGb7QWfomYYNxZvuWcagLXnNb.png)

你还可以在知识库内创建文件夹，把上传的文件分类管理。

![知识库内文件夹视图，支持新建文件夹对上传文件进行分类整理](/images/K8IDbigaRol1Etxhq8xciv22n6f.png)

![新建文件夹弹窗，输入文件夹名称后点击确定即可创建](/images/ZUW3bImleottyYx8SlQcI3lgnbf.png)

点击具体文件，可以查看文件内容。

![文件详情页，展示 AI 解析后的文件内容，支持全文阅读和搜索](/images/H4mSbh67xoMTLZxrGKqc1vnAndh.png)

![文件内容详情页面，显示文档的完整内容，可滚动阅读](/images/OyUhbWbzvouqU9x9KH0cAUZ6nte.png)

### 网页端

**第一步：进入知识库，点击「添加」→ 直接上传文件**

![网页端知识库详情页，顶部「添加」按钮展开后显示上传文件选项](/images/RB0VbYUKQoMq66xDgcccMo5MnAe.png)

选择文件上传（可多选），支持 PDF、Word、PPT 格式。

![网页端文件选择对话框，可选择多个文件同时上传](/images/MjLGb191vorJ44xE65vc4vMinQe.png)

**第二步：等待 AI 处理**

上传后 AI 需要 1-3 分钟处理文件，处理期间可以继续添加其他文件。

![网页端文件上传列表，显示各文件的处理状态：上传中、处理中、已完成](/images/U8ZubD850obbVaxaNt0c4xAincc.png)

处理完成后，点击文件即可查看内容。

![网页端文件内容详情页，展示 AI 解析后的文档内容](/images/XJHmbFJDdoklqQxVZ4mcBRamnyg.png)

### 小程序端

在微信里也能上传文件到知识库，特别适合上传微信聊天中收到的文件。

**第一步：打开 Get笔记小程序，进入知识库**

点击「更多」按钮，进入知识库页面。

![微信小程序首页，底部显示「更多」按钮，点击进入知识库等功能页面](/images/H2SebWlLNo5RUWxc25hc99K9nVg.png)

**第二步：点击添加按钮，选择「微信文件」**

![小程序知识库页面，点击右下角添加按钮，弹出选项包括「微信文件」](/images/H45tb3TIBoMIoSx3Ge4ceZ8PnNb.png)

从微信聊天记录中选择文件进行上传。

![微信文件选择界面，显示最近聊天中收到的文件列表，可选择上传](/images/YaDrbOFztowhUTx7SKAcB4mKnvf.png)

![文件上传确认页面，显示已选择的文件信息和目标知识库](/images/QMeTb3HcXoWd2YxCYBeclU9znEf.png)

![上传完成后的知识库文件列表，显示刚上传的文件](/images/OpnGbz5I2opzpFxsad3ceZiRnBh.png)

**另一种方式**：在微信中打开一个文件，点击右上角「...」，选择「在小程序工具中打开」→ 选择「Get笔记」，然后选择要加入的知识库即可。

![微信文件预览页面，点击右上角「...」按钮展开更多操作菜单](/images/LW2xb7ckIonvfhxUJmZcjQs6nHh.png)

![操作菜单中选择「在小程序工具中打开」，然后选择 Get笔记小程序](/images/UG1CbYRVXovvOUxJooCcgsINnDp.png)

![Get笔记小程序打开后的添加弹窗，选择目标知识库即可将文件加入](/images/YUIqbjgRTosQXoxZWzfcaEnUnTc.png)

## 容量限制

| 用户类型 | 知识库数量 | 总容量 |
|----------|-----------|--------|
| 普通用户 | 10 个 | 30 GB |
| PRO 会员 | 不限 | 500 GB |

## 小技巧

- **上传不中断**：上传期间可以继续添加其他文件，不影响正常操作
- **用文件夹分类**：上传的文件多了，可以新建文件夹分类管理
- **微信文件直达**：在微信里收到文件，直接通过小程序转存到知识库，不用先下载到手机
`},{id:"recording/book-scan",title:"智能拍书",content:`
# 智能拍书

拍下纸质书页，3 秒变成数字笔记，还会自动归类到对应书籍下。看到好段落、好句子，拍下来就能保存，纸质书的阅读痕迹再也不会丢失。

## 什么时候用

- 读书划线：把书中划线、批注快速数字化保存
- 金句摘录：重要段落、观点一拍即存
- 学术研究：论文、专业书籍内容提取和整理
- 写作素材：积累读书笔记，用 AI 随时查找书中观点

## 怎么用

### 第一步：点「+」，选「智能拍书」

打开 App，点击首页底部「+」按钮，选择「智能拍书」。

![「更多方式」底部弹出面板，列出粘贴链接、拍照、上传图片、线下会议录音、智能拍书、导入音视频、手机内录等选项，「智能拍书」带有 NEW 标签并用红框高亮标注，描述为「对准书页拍一下，自动提取归类到书籍」](/images/FvHHbp50koL0YdxetNscbB76ngh.png)

### 第二步：对着书页拍照

对准书页内容拍摄，AI 会自动矫正角度、去除阴影、优化清晰度。单次最多拍 5 张。

![手机相机拍摄界面，对准一本纸质书的书页内容进行拍照，页面底部显示「重拍」和「使用照片」两个操作按钮](/images/UsFtbm0HPoH8dTxaSL0cOHwrntf.png)

### 第三步：确认书籍信息

AI 会自动识别是哪本书，右侧还会展示最近识别过的书籍。如果识别有误，可以手动搜索或添加。

![拍书预览页面，上方展示 AI 增强后的清晰书页文字，中间显示页码翻页控件和「继续拍」按钮，下方「添加到书籍」区域展示「自动识别书籍」（已勾选）以及最近阅读的书籍封面缩略图，底部提供「原图」和「增强」切换及「下一步」按钮](/images/TR5YbUwnWomziXxLwBYctoKLngg.png)

![AI 自动识别书籍确认页面，上方显示增强后的书页文字内容，下方展示识别结果为《预测之书》（罗振宇编著，新星出版社），配有书籍封面图，底部提供「更换」和「确认」两个按钮](/images/Qdp9bfNp4om9j2xwM1qcnNNSnNb.png)

### 第四步：AI 处理并生成笔记

点下一步，AI 开始提取文字内容，确认书籍信息，生成结构化笔记。

![《预测之书》的读书笔记详情页，顶部显示书籍封面、书名、作者和出版社信息，下方显示「1 条笔记」，笔记卡片内展示 AI 提取的书页文字内容摘要和原始书页缩略图](/images/CijpbVuHToBANlxqoKZc5h7Snpe.png)

笔记会自动归类到对应书籍下，可以继续拍照或查看整理结果。

![AI 助手对话界面，显示「你好，我是你的 AI 助手」欢迎语，提供「合并生成笔记」「按时间轴整理内容」「输出一份 PPT 大纲」「生成问答卡片」等快捷操作，底部已选中《预测之书》（1 条笔记）作为对话的知识范围，旁边有「继续添加」按钮](/images/Qsgzbb0F2oi4v1xJ607cwBu0nmf.png)

### 查看所有读书笔记

首页左上角菜单进入，所有书会以书籍封面的形式展示，点进去可以看这本书的全部笔记。

![侧边栏个人中心页面，显示用户头像和 PRO 会员标识，统计数据（全部笔记、累计天数、连续天数），笔记热力图，以及日历、Get 日报、知识库、书籍等功能入口，「书籍」选项显示 186 本并用红框高亮标注](/images/MwDwb123lobmX7xv7M0cnUfEnLd.png)

![书籍列表页面，顶部显示「共 3713 条笔记 · 来自 186 本书」，以书籍封面网格形式展示所有书籍，包括《预测之书》《财经》《思考，快与慢》《你当像鸟飞往你的山》《北海怪兽》等，每本书下方标注笔记数量](/images/TNa9b48yFoClTAxVPcXcn8g0nCc.png)

## 小技巧

- **光线要好**：光线充足时拍摄效果更好，避免手指遮挡重要文字
- **AI 搜索**：支持通过搜索或 AI 对话快速定位笔记内容
- **查看原文**：可以跳转到对应书籍的章节段落查看原文

> 拍书整理仅限个人学习使用，请尊重版权。
`},{id:"recording/classroom",title:"课堂录音",content:`
# 课堂录音

上课录下来，下课就有一份学霸笔记。老师讲的内容自动转文字，考点重点自动标出来，还能拍 PPT、记要点、传课件。

## 什么时候用

- 大学专业课、公共课：实时记录，考点自动加粗标注
- 讲座分享：学术讲座、技术分享完整保存
- 培训考证：职业培训内容整理，方便反复复习
- 留学生课堂：英文等不同语种实时转写，语言不再是障碍

## 怎么用

### 第一步：打开录音，选「课堂录音」

打开 App，点击首页底部的录音按钮，选择「课堂录音」。

![App 首页笔记列表，展示「高中数学函数复习方法与体系解析」等多条笔记卡片，每条显示授课时间、时长等信息；底部导航栏中央的「录音」按钮被红框高亮标注，左侧为「更多」、右侧为「文字」](/images/Imhvbauyeouj6ZxrPGEcy0qynId.png)

首次使用需要授权麦克风权限，点击红色按钮「开始录音」。老师讲的话会实时转写显示在屏幕上。

![录音模式选择弹窗，顶部插图为老师在黑板前授课，提示语「轻松总结课堂重点，随时回听高效复习」；下方四个模式卡片：语音速记（最长1小时）、多人会议（最长3小时）、手机内录（最长3小时）、课堂录音（最长3小时），其中「课堂录音」被红框选中并打勾；底部为红色圆形开始录音按钮](/images/SU9iblQOpo2LCexZNnBc5tfBnXd.png)

### 第二步：上课时随时补充

录音过程中，底部有三个辅助工具：

![课堂录音进行中界面，标题「新录音」，顶部切换栏有「实时转写」和「课堂资料」两个标签页，当前在实时转写页，显示时间戳 00:01 和转写文字；底部显示录音进度 00:06/60:00 和声波动画，工具栏从左到右依次为「拍重点」「随手记」「传资料」图标按钮，以及暂停按钮和绿色「完成」按钮](/images/NvnhbTt3koBcJ5xR3sTcuUk6n1e.png)

- **拍重点**：随时拍下 PPT 或板书，自动整合进笔记

![课堂资料标签页，按时间戳排列展示三类内容：00:15 拍摄的 PPT 照片（屏幕显示「函数问题破解策略(一)」，老师在旁讲解）；01:00 和 03:05 的随手记文字笔记「函数破解方法」「两个体系，四位一体」；03:26 上传的 PDF 课件（841.9KB）；底部显示录音进度 11:52/60:00 及升级 PRO 提示](/images/MSZkbWR6ToCA1fxAl0hcb8Svn4b.png)

- **随手记**：打几个字记下关键词或自己的想法

![录音处理中界面，顶部三步进度条「文件上传→录音转写→总结纪要」，正在进行录音转写；提示「AI已经开始工作了，大约需要5-10分钟不等」；下方为按说话人区分的逐句转写文本，每段标注说话人编号（说话人1至说话人5）、时间戳和转写内容](/images/MJKvbSTw3oAR2QxWAYLcrw01nzg.png)

- **传资料**：上传老师发的课件 PDF/Word/PPT（最多 3 个文件）

![AI 助手界面，页面中央显示「你好，我是你的AI助手」欢迎语；底部弹出「思考模式」选择面板，三个选项：「自动」（自主规划并搜索，回答更全面）、「深度思考」（深入分析推理，解决复杂问题）、「学习辅导」（引导式提问，帮你真正理解），当前「学习辅导」被选中打勾](/images/Liueb9KXCoyzDyxpo12c9yeRnTb.png)

### 第三步：下课点「完成」

AI 会自动生成课堂笔记：
- 完整的转写内容，按章节分段
- 老师说「这个必考」「期末会考」的地方自动加粗标注
- 数学公式自动转为 LaTeX 标准格式，清晰易读

![AI 生成的课堂笔记详情页，标题「高中数学函数复习方法与体系解析」，可添加到知识库和书籍，标签有「录音笔记」「高中数学」等；音频播放器显示总时长 12:10；下方五个标签页「文字记录｜课堂资料｜智能总结｜重点速览｜追加笔记」，当前在智能总结页，展示课程信息（授课时间、时长12分钟、领域高中数学）和知识精讲「函数问题的重要性与复习策略」](/images/UHvMb3O2to6CRExyCcYcO9vbnMh.png)

## 录制时长

| 用户类型 | 单次时长 | 录制次数 |
|----------|----------|----------|
| 普通用户 | 1 小时 | 不限 |
| PRO 会员 | 3 小时 | 不限 |

## 小技巧

- **学习辅导模式**：笔记生成后，可以开启「学习辅导」模式，AI 会通过提问的方式帮你真正理解知识点
- **课件关联复习**：上传的课件会和录音笔记关联，复习时可以对照查看
`},{id:"recording/import-media",title:"导入音视频",content:`
# 导入音视频

把手机里已有的录音或视频传进来，AI 帮你转成文字并整理成笔记。不用重新录，之前存的语音备忘录、会议录音、课程视频都能直接用。

## 什么时候用

- 语音备忘录：之前随手录的灵感、想法，转成可搜索的文字
- 课程录音：老师的授课录音转写为笔记，方便复习
- 会议录音：上传会议录制文件，快速生成结构化纪要
- 播客 / 访谈：还原对话内容，按时间轴转写文字稿

## 怎么用

### 第一步：点「+」，选「导入音视频」

打开 App，点击首页底部「+」按钮，选择「导入音视频」。

![Get 笔记 App 首页，显示笔记列表和知识库，底部「+ 更多」按钮用红色圆圈标注](/images/OhNPb9htwoIv9gxGtwvcREuOn5U.png)

![「更多方式」底部弹出面板，列出粘贴链接、拍照、上传图片、线下会议录音、导入音视频、手机内录等选项，「导入音视频」带有 NEW 标签并用红框高亮标注，描述为「自动转文字稿，AI智能总结」](/images/XDIYbNoBUoZ24KxwQDfcuIuMnTh.png)

### 第二步：选择文件

可以从相册或本地文件中选择。支持 MP3、M4A、WAV、MP4、MOV、AVI 等常见格式。

![「选择录音文件」弹窗，提示支持 MP3、WAV、M4A、AMR、AAC、AVI、MOV 等格式，单个文件时长不超过 3 小时，提供「从相册选择」「本地文件」「语音备忘录等」三个来源选项](/images/Rk8sb0VYroTnlKxtCpsc0qGbnDe.png)

### 第三步：等 AI 处理

上传后 AI 会自动分析文件内容，选择最合适的模板进行整理。处理时间取决于文件长度，可以先去做别的。

![「导入音视频文件」弹窗，显示已上传的音频文件及「上传成功」状态，下方说明支持会议、课堂讲座、播客素材等类型，并显示转写时长额度信息](/images/HSnmbbeTioy0hixLeOBcC8JYnsb.png)

![AI 正在处理音频，顶部显示「文件上传 → 录音转写 → 总结纪要」三步进度条，下方展示逐句转写的文字内容，带有说话人标识和时间戳](/images/TzTkbRCEkobbTJxE4fycdR6znBg.png)

### 第四步：查看笔记

AI 会生成完整的文字稿和总结笔记。

![iOS 系统文件选择器界面，标题为「最近项目」，列表中显示多个音视频文件（包括录音、录屏、视频等），可选择要导入的文件](/images/PyMjbDeyCoI71IxqO3mcFQdxn6i.png)

![AI 生成的音频笔记详情页，标题为「隋老师视频工作流程值得自媒体和实体老板学习」，显示标签、音频播放器、「文字记录」「智能总结」「章节概要」「待办事项」四个切换标签，当前展示智能总结内容](/images/TD5Sb7XgYoEKl7xmSzrc0VU2nMc.png)

## 从其他 App 导入

### 从 iPhone「语音备忘录」导入

1. 打开「语音备忘录」App，点击某条录音的「...」，选择「分享」

![iPhone 语音备忘录 App 界面，显示录音列表，某条录音的「...」菜单已展开，「分享」选项用红框高亮标注，红色箭头指向该按钮](/images/Vs1RbnO2OoH6bFx8tRXc5azYnqg.png)

2. 在分享列表里选择 Get 笔记。如果没看到，滑到最右边「更多」里找

![iOS 系统分享面板，显示录音文件信息（例会，录音，3.7 MB），应用列表中 Get 笔记图标用红框高亮标注，红色箭头指向该图标](/images/Ecd4bIYaEoGMyzxDZfwcWH1mnqs.png)

### 从微信导入音频

1. 在微信中，点击音频文件的「...」，选择「用其他应用打开」

![微信文件传输助手聊天界面，显示多个文件消息，其中一条音频文件「例会.m4a（3.55MB）」用红框高亮标注](/images/MTMNbeewUo2QlsxrwPwcTrg1nKd.png)

![微信音频播放页面，正在播放「例会.m4a」文件，右侧「...」菜单已展开，显示转发给朋友、星标、收藏、在电脑上打开等选项，「用其他应用打开」按钮用红框高亮标注](/images/BZMkbDNPqok6aNxpAvCcKY0unHG.png)

2. 选择 Get 笔记打开

![iOS 系统分享面板，显示录音文件信息（例会，录音，3.7 MB），应用列表中 Get 笔记图标用红框高亮标注，红色箭头指向该图标](/images/PIR4bO75yoidDTxbifYcKUQUnnI.png)

![Get 笔记 App 已接收导入的音频文件，显示笔记标题和处理状态](/images/DCnKbSt0hoY8kwxvMyxcD4YVnQc.png)

## 网页端也能用

- **首页**：直接点「导入音视频」
- **知识库**：在知识库中添加 → 导入音视频
- **追加笔记**：在已有笔记中追加导入音视频内容

![Get 笔记网页端首页，左侧导航栏显示问一问、首页、标签、知识库入口，右侧「你还可以」区域展示添加图片、添加链接、导入音视频三个功能卡片，「导入音视频」卡片用红框高亮标注](/images/KaDBbX364oGJhvxorTSchDCJnJb.png)

![知识库「添加文件」页面，上方为文件拖放上传区域，下方展示写笔记、选择已有笔记、订阅直播/博主、粘贴链接、上传图片、导入音视频六个功能卡片，「导入音视频」用红框高亮标注](/images/FqEBbCFB9oDC9LxTLggcWigenAb.png)

![笔记「追加笔记」弹窗，提供写笔记、粘贴链接、上传图片、导入音视频四个选项，「导入音视频」用红框高亮标注](/images/CQbdbiwZzopooTxCFwmcL6annhg.png)

## 转写额度

转写时长每月重置，用不完不累计到下个月。PRO 会员到期后自动降为普通额度。

## 小提示

- **后台处理**：文件上传后可以先做别的事，处理完会通知你
- **格式兼容好**：MP3、WAV、M4A、MP4、MOV、AVI 等主流格式都支持
- **多入口上传**：App 端、网页端、知识库都能导入
`},{id:"recording/link",title:"链接保存",content:`
# 链接保存

看到好文章或好视频，复制链接粘贴进来，AI 帮你读完并提取精华。不管是公众号文章、抖音视频、B 站视频还是小红书笔记，把链接粘贴到 Get 笔记，AI 会自动读取内容并生成精华总结。

## 什么时候用

- 刷到一篇好的公众号文章，想保存精华内容
- 看到有用的抖音、B 站视频，想记下要点
- 朋友分享了小红书笔记，想整理其中的干货

## 支持哪些链接

| 类型 | 平台举例 |
|------|----------|
| 图文链接 | 微信公众号文章、小红书图文、公开网页 |
| 视频链接 | 抖音短视频、B 站视频、小红书视频、得到直播回放 |

## 怎么用

### 保存公众号文章

#### 第一步：复制文章链接

在公众号消息列表中，找到想保存的文章，点击进入。

![微信公众号消息列表，箭头指向一篇文章标题，提示点击进入文章详情](/images/LFHkbUqFcoZUDLxARZncQ540n5b.png)

打开文章后，点击右上角「...」按钮。

![公众号文章详情页，右上角「...」按钮用红色箭头标注，旁边显示「点击更多」提示文字](/images/Q7AJbDiTko7TBzxYzygcjyptnQf.png)

在弹出的菜单中，找到并点击「复制链接」。

![微信文章分享菜单弹窗，显示转发给朋友、收藏等操作选项，底部第二排的「复制链接」按钮用红框高亮标注，红色箭头指向该按钮](/images/PDoWbvmmNo7QsGx3ZdNcRAw0nFb.png)

#### 第二步：打开 Get 笔记，粘贴链接

打开 Get 笔记，点击底部的「+」按钮。

![Get 笔记首页，显示笔记列表和知识库，底部「+」按钮用红框高亮标注](/images/RbNpbaJvUoIUrsxCj4scEJmCn6c.png)

在弹出的「更多方式」菜单中，选择「粘贴链接」。

![「更多方式」底部弹出面板，列出粘贴链接、拍照、上传图片、线下会议录音、导入音视频、手机内录等选项，「粘贴链接」用红框高亮标注，描述为「公众号文章、抖音短视频、得到直播回放等」](/images/ROhNbDwZ0ozHKPxB9lMc1trFnVe.png)

进入「生成一条链接笔记」页面，点击「粘贴识别」自动粘贴刚才复制的链接。下方可以添加补充要求，帮助 AI 更好地理解你的需求。

![「生成一条链接笔记」页面，顶部链接输入框中显示「输入链接 或 粘贴识别」，红色箭头指向「粘贴识别」蓝色文字按钮，下方有补充要求输入框和「确定」按钮](/images/CDQkbBesLoTxLQx4THTctjsYn7f.png)

#### 第三步：点确定，等结果

点击「确定」后，AI 开始工作，依次完成链接读取、链接分析和 AI 写笔记。

![AI 正在处理链接，顶部显示「链接读取 → 链接分析 → AI写笔记」三步进度条，下方已开始生成笔记标题「Vidu2.0 AI视频模型发布，性价比优势显著」及结构化内容](/images/OwABbJJKGoFk7Hx8ASIcuAuHnQg.png)

处理完成后，生成完整的笔记详情页，包含标签、原文链接、文章图片和总结内容。

![公众号链接笔记详情页，标题为「Vidu2.0 AI视频模型发布，性价比优势显著」，显示标签（AI链接笔记、Vidu2.0、AI视频模型、价格优势）、原文公众号链接、文章配图及结构化的要点总结](/images/Eiifb52hdotEfgxvMQ3c03XKnff.png)

### 保存抖音短视频

#### 第一步：复制视频链接

打开一个抖音视频，点击右侧的分享按钮。

![抖音视频播放界面，正在播放罗振宇的《文明之旅》视频，右侧分享按钮用红框高亮标注，红色箭头指向该按钮](/images/SRGYb6IA3ozvSDxhVGKcmR7Vnme.png)

在弹出的分享菜单中，点击「分享链接」。

![抖音分享菜单弹窗，显示联系人列表和分享选项（推荐、转发到日常、分享链接等），「分享链接」按钮用红框高亮标注，红色箭头指向该按钮](/images/YlsAbi021oSqR0xFGORckFBhnZe.png)

提示「链接复制成功」，也可以点击「复制链接」再次复制。

![抖音链接复制成功提示，显示完整的分享文案和链接地址，底部「复制链接」按钮用红框高亮标注，旁边有微信、朋友圈、QQ等分享渠道图标](/images/B6aWbxBMwoHEzdx7kPLcSfK4nkc.png)

#### 第二步：粘贴链接到 Get 笔记

打开 Get 笔记，点「+」→「粘贴链接」，粘贴后 AI 会自动识别其中的网址。下方可以添加补充要求。

![「生成一条链接笔记」页面，链接输入框中已粘贴抖音视频链接 https://v.douyin.com/if1coaMR/，下方有补充要求输入框和「确定」按钮](/images/XG0cbL0XQoi3DBxUIGjcotTPnLl.png)

#### 第三步：点确定，等结果

点击「确定」，AI 读取视频内容并生成总结笔记。

![AI 正在处理抖音链接，顶部显示「链接读取 → 链接分析 → AI写笔记」三步进度条，下方已开始生成笔记标题「《文明之旅》公元1046【上】| 双面官僚制」及结构化内容](/images/EWQybRRSIoKLcuxmAVZc2VceneG.png)

处理完成后，进入笔记详情页查看完整内容。

![抖音视频笔记详情页，标题为「《文明之旅》公元1046【上】| 双面官僚制」，显示标签（AI链接笔记、文明之旅、公元1046、张方平）、原始抖音视频链接及结构化的历史知识要点总结](/images/AmDtbc4GcosSV3xwShEce8qhnwg.png)

### 保存小红书图文/视频

小红书视频和图文笔记都支持。

#### 复制视频链接

打开一条小红书视频，点击右下角的分享按钮。

![小红书视频播放界面，一位博主在户外牧场录制英语教学视频，右下角分享按钮用红框高亮标注，红色箭头指向该按钮](/images/DFL5bttSEolJQFx9Zjjc4icunEf.png)

在弹出的「分享至」菜单中，点击「复制链接」。

![小红书「分享至」菜单弹窗，显示私信好友、微信好友等分享渠道，底部第二排「复制链接」按钮用红框高亮标注](/images/YzF2b9YCiocw6bxbUNxcab0GnXc.png)

#### 复制图文链接

打开一条小红书图文笔记，点击右上角的分享按钮。

![小红书图文笔记详情页，显示「中国高血压防治指南（2024年修订版）」内容，右上角分享按钮用红色箭头标注](/images/Y20xboxyXoMe9Sxwuw0cyXUAnQe.png)

在弹出的「分享至」菜单中，点击「复制链接」。

![小红书「分享至」菜单弹窗，显示私信好友、微信好友、朋友圈等分享渠道，底部第二排「复制链接」按钮用红框高亮标注，红色箭头指向该按钮](/images/UhKKbNkCrozrmJxXriUcWuZWnTh.png)

#### 粘贴链接，等结果

打开 Get 笔记，点「+」→「粘贴链接」，粘贴链接后点「确定」。AI 会读取图文/视频内容，如果图片中有文字也会一起识别整理。

![AI 正在处理小红书链接，顶部显示「链接读取 → 链接分析 → AI写笔记」三步进度条，下方已开始生成关于高血压防治指南的结构化笔记内容](/images/KBimb9HHoo0niCxJ80Ic84lqnhd.png)

处理完成后，进入笔记详情页查看完整内容。

![小红书链接笔记详情页，标题为「学习 | 中国高血压防治指南（2024年修订版）」，显示标签（AI链接笔记、高血压指南、医学知识、心血管风险）、原始小红书链接及结构化的医学知识要点总结](/images/FknHbDKoloyUYmxFlMXckedAnBh.png)

### 保存 B 站视频

#### 第一步：复制视频链接

打开一个 B 站视频，点击右侧的分享按钮。

![B 站视频播放界面，正在播放一位 UP 主的视频，右侧分享按钮用红框高亮标注，红色箭头指向该按钮](/images/LEPnbwk5aobKOsx4bRhcpyxvnnd.png)

在弹出的分享菜单中，点击「复制链接」。

![B 站分享菜单弹窗，显示动态、消息、微博、图片分享等选项，「复制链接」按钮用红框高亮标注，红色箭头指向该按钮](/images/PMxDbgNRNoq1CexUiR5cgBK6nLb.png)

#### 第二步：粘贴链接到 Get 笔记

打开 Get 笔记，点「+」→「粘贴链接」，粘贴链接后可添加补充要求（可选），然后点「确定」。

![「生成一条链接笔记」页面，链接输入框中已粘贴 B 站视频链接 https://b23.tv/NByhuly，下方有补充要求输入框和「确定」按钮]`}],m1={};function p1({samples:r}){var f;const[T,p]=H.useState(0);return r.length===0?null:o.jsxs("div",{"data-testid":"code-samples",style:{border:"1px solid var(--bd)",borderRadius:8,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:r.map((A,D)=>o.jsx("button",{onClick:()=>p(D),style:{padding:"8px 16px",fontSize:13,fontWeight:500,background:D===T?"var(--cdBg)":"transparent",color:D===T?"var(--tx)":"var(--tx2)",border:"none",borderBottom:D===T?"2px solid var(--ac)":"2px solid transparent",cursor:"pointer",fontFamily:"var(--font-body)",whiteSpace:"nowrap"},children:A.label},A.language))}),o.jsx("pre",{style:{margin:0,padding:16,background:"var(--cdBg)",overflow:"auto"},children:o.jsx("code",{style:{fontSize:13,fontFamily:"var(--font-code)"},children:(f=r[T])==null?void 0:f.code})})]})}function h1({href:r,title:T,description:p,icon:f,external:A}){const D=A??r.startsWith("http");return o.jsxs("a",{href:r,target:D?"_blank":void 0,rel:D?"noopener noreferrer":void 0,style:{display:"block",padding:"16px 20px",border:"1px solid var(--bd)",borderRadius:8,textDecoration:"none",color:"inherit",background:"var(--sf)",transition:"border-color 0.15s, background 0.15s",cursor:"pointer"},onMouseEnter:B=>{B.currentTarget.style.borderColor="var(--ac)",B.currentTarget.style.background="var(--sfH)"},onMouseLeave:B=>{B.currentTarget.style.borderColor="var(--bd)",B.currentTarget.style.background="var(--sf)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f&&o.jsx("span",{style:{fontSize:18},children:f}),o.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--tx)"},children:T}),o.jsx("span",{style:{marginLeft:"auto",color:"var(--tx2)",fontSize:14},children:D?"↗":"→"})]}),p&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:13,color:"var(--tx2)",lineHeight:1.5},children:p})]})}function b1({columns:r=2,children:T}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginTop:16,marginBottom:16},children:T})}const v1={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function e0(r){return v1[r]||"#6b7280"}function y1({entries:r,initialLimit:T}){const[p,f]=H.useState(!T),A=p?r:r.slice(0,T||r.length);return r.length===0?o.jsx("div",{"data-testid":"changelog-empty",style:{padding:"40px 0",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No changelog entries found."}):o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),A.map((D,B)=>o.jsxs("div",{"data-testid":`changelog-entry-${D.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:B<A.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:D.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:D.url?o.jsx("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:D.version}):D.version}),D.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:D.date})]}),D.sections.map(G=>o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:e0(G.type)}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:e0(G.type),fontFamily:"var(--font-code, monospace)"},children:G.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:G.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},G.type))]},D.version)),!p&&r.length>(T||0)&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>f(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer",transition:"border-color .15s, color .15s"},children:["Show all ",r.length," releases"]})})]})}const l0={info:{color:"#3b82f6",label:"INFO"},warning:{color:"#f59e0b",label:"WARNING"},tip:{color:"var(--ac, #a78bfa)",label:"TIP"},danger:{color:"#ef4444",label:"DANGER"}};function x1({type:r="info",title:T,children:p}){const f=l0[r]||l0.info;return o.jsxs("div",{style:{borderLeft:`3px solid ${f.color}`,background:`${f.color}11`,borderRadius:"0 2px 2px 0",padding:"14px 18px",marginBottom:20},children:[T?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:f.color,fontFamily:"var(--font-code, monospace)"},children:f.label}),o.jsx("span",{style:{fontWeight:600,fontSize:13,color:f.color},children:T})]}):o.jsx("div",{style:{marginBottom:4},children:o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:f.color,fontFamily:"var(--font-code, monospace)"},children:f.label})}),o.jsx("div",{style:{fontSize:14,lineHeight:1.65,color:"var(--tx2)"},children:p})]})}function S1({items:r,children:T}){const[p,f]=H.useState(0);return o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--bd)"},children:r.map((A,D)=>o.jsx("button",{onClick:()=>f(D),style:{padding:"8px 16px",background:"none",border:"none",borderBottom:p===D?"2px solid var(--ac)":"2px solid transparent",color:p===D?"var(--ac)":"var(--txM)",fontWeight:p===D?600:400,fontSize:13,cursor:"pointer",fontFamily:"inherit"},children:A},D))}),o.jsx("div",{style:{padding:"16px 0"},children:T[p]})]})}function A1({title:r,icon:T,href:p,children:f}){const A=o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"20px",transition:"border-color 0.15s",cursor:p?"pointer":"default"},children:[T&&o.jsx("span",{style:{fontSize:24,marginBottom:8,display:"block"},children:T}),o.jsx("div",{style:{fontWeight:600,fontSize:14,marginBottom:4},children:r}),f&&o.jsx("div",{style:{fontSize:13,color:"var(--txM)",lineHeight:1.5},children:f})]});return p?o.jsx("a",{href:p,style:{textDecoration:"none",color:"inherit"},children:A}):A}function E1({cols:r=2,children:T}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginBottom:20},children:T})}function T1({children:r}){return o.jsx("div",{style:{paddingLeft:24,borderLeft:"2px solid var(--bd)",marginBottom:20},children:i0.Children.map(r,(T,p)=>o.jsxs("div",{style:{position:"relative",paddingBottom:20},children:[o.jsx("div",{style:{position:"absolute",left:-33,top:0,width:20,height:20,borderRadius:"50%",background:"var(--ac)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},children:p+1}),o.jsx("div",{style:{paddingLeft:8},children:T})]}))})}function z1({title:r,children:T}){const[p,f]=H.useState(!1);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:8,overflow:"hidden"},children:[o.jsxs("button",{onClick:()=>f(!p),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"12px 16px",background:"var(--sf)",border:"none",cursor:"pointer",fontWeight:500,fontSize:14,color:"var(--tx)",fontFamily:"inherit"},children:[r,o.jsx("span",{style:{transform:p?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"},children:"▾"})]}),p&&o.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",fontSize:14,color:"var(--tx2)",lineHeight:1.65},children:T})]})}const M1={install:{npm:"npm install",yarn:"yarn add",pnpm:"pnpm add",bun:"bun add"},"install -D":{npm:"npm install -D",yarn:"yarn add -D",pnpm:"pnpm add -D",bun:"bun add -d"},uninstall:{npm:"npm uninstall",yarn:"yarn remove",pnpm:"pnpm remove",bun:"bun remove"},run:{npm:"npm run",yarn:"yarn",pnpm:"pnpm",bun:"bun run"},exec:{npm:"npx",yarn:"yarn dlx",pnpm:"pnpm dlx",bun:"bunx"},init:{npm:"npm init",yarn:"yarn init",pnpm:"pnpm init",bun:"bun init"},create:{npm:"npm create",yarn:"yarn create",pnpm:"pnpm create",bun:"bun create"}};function _1(r,T){for(const[p,f]of Object.entries(M1))if(r.startsWith(p+" ")||r===p){const A=r.slice(p.length);return(f[T]||p)+A}return`${T} ${r}`}function j1({command:r}){const[T,p]=H.useState(0),[f,A]=H.useState(!1),D=["npm","yarn","pnpm","bun"],B=_1(r,D[T]);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:16,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto"},children:D.map((G,R)=>o.jsx("button",{onClick:()=>{p(R),A(!1)},style:{padding:"8px 14px",background:"none",border:"none",cursor:"pointer",fontSize:12,fontFamily:"var(--font-code)",fontWeight:R===T?600:400,color:R===T?"var(--ac)":"var(--txM)",borderBottom:R===T?"2px solid var(--ac)":"2px solid transparent",whiteSpace:"nowrap"},children:G},G))}),o.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",background:"var(--cdBg)",gap:8},children:[o.jsx("code",{style:{flex:1,fontFamily:"var(--font-code)",fontSize:13,color:"var(--cdTx)",whiteSpace:"pre",overflowX:"auto"},children:B}),o.jsx("button",{onClick:()=>{var G;(G=navigator.clipboard)==null||G.writeText(B),A(!0),setTimeout(()=>A(!1),2e3)},style:{background:"none",border:"none",cursor:"pointer",color:"var(--txM)",fontSize:12,fontFamily:"var(--font-code)",flexShrink:0},children:f?"✓":"Copy"})]})]})}function D1({name:r,fields:T}){return o.jsxs("div",{style:{marginBottom:16},children:[r&&o.jsx("h4",{style:{fontFamily:"var(--font-code)",fontSize:15,marginBottom:8,color:"var(--tx)"},children:r}),o.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"var(--font-body)"},children:[o.jsx("thead",{children:o.jsx("tr",{style:{borderBottom:"2px solid var(--bd)"},children:["Property","Type","Required","Default","Description"].map(p=>o.jsx("th",{style:{textAlign:"left",padding:"8px 10px",color:"var(--txM)",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:".05em",whiteSpace:"nowrap"},children:p},p))})}),o.jsx("tbody",{children:T.map(p=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--bd)"},children:[o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontWeight:500,color:"var(--tx)"},children:p.name}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--ac)"},children:p.type}),o.jsx("td",{style:{padding:"8px 10px"},children:p.required&&o.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e04040",background:"rgba(224,64,64,0.1)",padding:"2px 6px",borderRadius:2},children:"required"})}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--txM)"},children:p.default||"—"}),o.jsx("td",{style:{padding:"8px 10px",color:"var(--tx2)"},children:p.description||""})]},p.name))})]})})]})}function O1({name:r}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx2)"},children:[o.jsx("span",{style:{opacity:.6},children:"📄"})," ",r]})}function R1({name:r,defaultOpen:T,children:p}){const[f,A]=H.useState(T??!1);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>A(!f),style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx)",fontWeight:500},children:[o.jsx("span",{children:f?"📂":"📁"})," ",r]}),f&&o.jsx("div",{style:{paddingLeft:18,borderLeft:"1px solid var(--bd)",marginLeft:8},children:p})]})}function Io({children:r}){return o.jsx("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"12px 16px",background:"var(--cdBg)",marginBottom:16},children:r})}Io.File=O1;Io.Folder=R1;const C1={Callout:x1,Tabs:S1,Card:A1,CardGroup:E1,Steps:T1,Accordion:z1,ChangelogTimeline:y1,PackageManager:j1,TypeTable:D1,FileTree:Io,CodeSamples:p1,LinkCard:h1,CardGrid:b1},B1=`
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=Fira+Code:wght@400;500;600&display=swap');

  .tome-content h1 { display: none; }
  .tome-content h2 { font-family: var(--font-body); font-size: 1.35em; font-weight: 600; margin-top: 2em; margin-bottom: 0.5em; display: flex; align-items: center; gap: 10px; letter-spacing: 0.01em; }
  .tome-content h2::before { content: "#"; font-family: var(--font-heading); font-size: 1.2em; font-weight: 300; font-style: italic; color: var(--ac); opacity: 0.5; }
  .tome-content h3 { font-family: var(--font-body); font-size: 1.15em; font-weight: 600; margin-top: 1.5em; margin-bottom: 0.5em; }
  .tome-content h4 { font-family: var(--font-body); font-size: 1.05em; font-weight: 600; margin-top: 1.2em; margin-bottom: 0.5em; }
  .tome-content p { color: var(--tx2); line-height: 1.8; margin-bottom: 1em; font-size: 14.5px; }
  .tome-content a { color: var(--ac); text-decoration: none; }
  .tome-content a:hover { text-decoration: underline; }
  .tome-content .heading-anchor { display: none; }
  .tome-content ul, .tome-content ol { color: var(--tx2); padding-inline-start: 1.5em; margin-bottom: 1em; }
  .tome-content li { margin-bottom: 0.3em; line-height: 1.7; }
  .tome-content code { font-family: var(--font-code); font-size: 0.88em; background: var(--cdBg); padding: 0.15em 0.4em; border-radius: 2px; color: var(--ac); }
  .tome-content pre { margin-bottom: 1.2em; border-radius: 2px; overflow-x: auto; border: 1px solid var(--bd); }
  .tome-content pre code { background: none; padding: 1em 1.2em; display: block; font-size: 12.5px; line-height: 1.7; color: var(--cdTx); }
  .tome-content blockquote { border-inline-start: 3px solid var(--ac); padding: 0.5em 1em; margin: 1em 0; background: var(--acD); border-radius: 0 2px 2px 0; }
  .tome-content blockquote p { color: var(--tx2); margin: 0; }
  .tome-content table { width: 100%; border-collapse: collapse; margin-bottom: 1em; }
  .tome-content th, .tome-content td { padding: 0.5em 0.8em; border: 1px solid var(--bd); text-align: start; font-size: 0.9em; }
  .tome-content th { background: var(--sf); font-weight: 600; }
  .tome-content img { max-width: 100%; border-radius: 2px; cursor: zoom-in; }
  .tome-content hr { border: none; border-top: 1px solid var(--bd); margin: 2em 0; }
  .tome-mermaid { margin: 1.2em 0; text-align: center; overflow-x: auto; }
  .tome-mermaid svg { max-width: 100%; height: auto; overflow: visible; }
  .tome-mermaid svg .nodeLabel { overflow: visible; white-space: nowrap; }
  /* Ensure mermaid text meets WCAG AA contrast in light mode */
  /* Mermaid v11 uses foreignObject with inline-styled spans — !important needed */
  html:not(.dark) .tome-mermaid svg .nodeLabel,
  html:not(.dark) .tome-mermaid svg .nodeLabel span,
  html:not(.dark) .tome-mermaid svg .nodeLabel div,
  html:not(.dark) .tome-mermaid svg foreignObject div,
  html:not(.dark) .tome-mermaid svg foreignObject span { color: #1a1a1a !important; }
  html:not(.dark) .tome-mermaid svg .edgeLabel,
  html:not(.dark) .tome-mermaid svg .edgeLabel span { color: #333 !important; }
  html:not(.dark) .tome-mermaid svg text { fill: #1a1a1a !important; }
  html:not(.dark) .tome-mermaid svg .node rect,
  html:not(.dark) .tome-mermaid svg .node polygon { stroke: #555 !important; }
  /* Dark mode: force bright text in mermaid nodes for readability */
  html.dark .tome-mermaid svg .nodeLabel,
  html.dark .tome-mermaid svg .nodeLabel span,
  html.dark .tome-mermaid svg .nodeLabel div,
  html.dark .tome-mermaid svg foreignObject div,
  html.dark .tome-mermaid svg foreignObject span { color: #f0f0f0 !important; }
  html.dark .tome-mermaid svg .edgeLabel,
  html.dark .tome-mermaid svg .edgeLabel span { color: #ddd !important; }
  html.dark .tome-mermaid svg text { fill: #f0f0f0 !important; }

  /* Mobile responsive content */
  @media (max-width: 767px) {
    .tome-content h2 { font-size: 1.2em; margin-top: 1.5em; }
    .tome-content h3 { font-size: 1.05em; }
    .tome-content pre code { font-size: 12px; padding: 0.8em 1em; }
    .tome-content table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .tome-content blockquote { margin: 0.8em 0; }
  }

  /* Selection style */
  ::selection { background: var(--acD); color: var(--ac); }

  /* Scrollbar style */
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--bd); border-radius: 10px; }

  /* Grain overlay */
  .tome-grain::before {
    content: ""; position: fixed; inset: 0; z-index: 9999; pointer-events: none;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-repeat: repeat; background-size: 256px;
  }

  /* ── Expressive code blocks ───────────────────────────── */

  /* Code block wrapper (for titled blocks) */
  .tome-code-block-wrapper { position: relative; margin-bottom: 1.2em; border: 1px solid var(--bd); border-radius: 2px; overflow: hidden; }
  .tome-code-block-wrapper pre { margin-bottom: 0; border: none; border-radius: 0; }
  .tome-code-title {
    font-family: var(--font-code); font-size: 12px; color: var(--tx2);
    background: var(--sf); padding: 6px 12px; border-bottom: 1px solid var(--bd);
    letter-spacing: 0.01em; font-weight: 500;
  }

  /* Line highlighting */
  .tome-content pre .line.tome-line-highlight {
    background: rgba(139, 148, 158, 0.1);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  html.dark .tome-content pre .line.tome-line-highlight {
    background: rgba(200, 210, 220, 0.08);
  }

  /* Diff lines */
  .tome-content pre .line.tome-line-added {
    background: rgba(34, 197, 94, 0.12);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  .tome-content pre .line.tome-line-removed {
    background: rgba(239, 68, 68, 0.12);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  html.dark .tome-content pre .line.tome-line-added { background: rgba(34, 197, 94, 0.15); }
  html.dark .tome-content pre .line.tome-line-removed { background: rgba(239, 68, 68, 0.15); }

  /* Line numbers (CSS counter) */
  .tome-content pre[data-line-numbers] code {
    counter-reset: line;
  }
  .tome-content pre[data-line-numbers] .line::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block; width: 2.5em; margin-inline-end: 1em;
    text-align: end; color: var(--txM); opacity: 0.4;
    font-size: 0.85em; user-select: none;
    border-inline-end: 1px solid var(--bd); padding-inline-end: 0.8em; margin-inline-end: 0.8em;
  }

  /* Word highlighting */
  .tome-word-highlight {
    background: rgba(139, 148, 158, 0.2); border-radius: 2px;
    padding: 1px 3px; margin: 0 -1px;
  }
  html.dark .tome-word-highlight {
    background: rgba(200, 210, 220, 0.15);
  }

  /* Copy button */
  .tome-content pre { position: relative; }
  .tome-copy-btn {
    position: absolute; top: 8px; inset-inline-end: 8px;
    font-family: var(--font-code); font-size: 11px;
    color: var(--tx2); background: var(--sf); border: 1px solid var(--bd);
    padding: 3px 8px; border-radius: 2px; cursor: pointer;
    opacity: 0; transition: opacity 0.15s;
    z-index: 2; line-height: 1.4;
  }
  .tome-content pre:hover .tome-copy-btn,
  .tome-copy-btn:focus { opacity: 1; }
  .tome-copy-btn:hover { background: var(--sfH); }

  /* Shiki dual-theme support */
  .shiki { background: var(--cdBg) !important; }

  /* Dark mode: switch Shiki tokens from light-theme inline colors to --shiki-dark CSS vars */
  html.dark .shiki,
  html.dark .shiki span {
    color: var(--shiki-dark) !important;
  }

  /* Brighten dim comment tokens (github-dark #6A737D is too low-contrast on dark backgrounds) */
  html.dark .shiki span[style*="--shiki-dark:#6A737D"] {
    --shiki-dark: #a0aab5 !important;
  }

  /* Light mode: darken low-contrast github-light tokens for WCAG AA on --cdBg backgrounds */
  html:not(.dark) .shiki span[style*="color:#6A737D"] { color: #57606a !important; }
  html:not(.dark) .shiki span[style*="color:#E36209"] { color: #b35405 !important; }
  html:not(.dark) .shiki span[style*="color:#6F42C1"] { color: #5a32a3 !important; }
  html:not(.dark) .shiki span[style*="color:#22863A"] { color: #1a6e2e !important; }
  html:not(.dark) .shiki span[style*="color:#D73A49"] { color: #b62324 !important; }
  html:not(.dark) .shiki span[style*="color:#005CC5"] { color: #0349b4 !important; }

  /* ── Twoslash type hover tooltips ───────────────────── */
  .twoslash-hover {
    position: relative;
    border-bottom: 1px dotted var(--tx2);
    cursor: help;
  }
  .twoslash-popup-container {
    position: absolute;
    opacity: 0;
    display: none;
    z-index: 10;
    left: 0;
    top: 100%;
    margin-top: 4px;
    padding: 6px 10px;
    background: var(--sf);
    border: 1px solid var(--bd);
    border-radius: 6px;
    font-size: 12px;
    font-family: var(--font-code);
    color: var(--tx);
    white-space: pre-wrap;
    max-width: 500px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
  }
  .twoslash-hover:hover .twoslash-popup-container {
    opacity: 1;
    display: block;
  }
  /* Twoslash error/warning underlines */
  .twoslash-error {
    position: relative;
    background: rgba(239, 68, 68, 0.1);
    border-bottom: 2px wavy rgba(239, 68, 68, 0.6);
  }
  /* Twoslash highlighted identifiers */
  .twoslash-highlighted {
    background: rgba(139, 148, 158, 0.15);
    border-radius: 2px;
    padding: 1px 2px;
  }
  /* Twoslash type annotation line (^?) */
  .twoslash-popup-code .shiki { background: transparent !important; padding: 0; margin: 0; }
  .twoslash-popup-code .shiki code { padding: 0; font-size: 12px; }
  html.dark .twoslash-popup-container {
    background: var(--sf);
    border-color: var(--bd);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`,zu=(ui.basePath||"/").replace(/\/$/,"");function U1(r){return o0(r,zu,Ve)}function Ko(r){return c1(r,zu,Ve)}const r0=f1(window.location.pathname,window.location.hash,Ve,zu,o0),G1=f0(r0,Ve,s0);function H1(){var cn;const[r,T]=H.useState(r0),[p,f]=H.useState(null),[A,D]=H.useState(!0),B=H.useCallback(async(O,Y)=>{D(!0),T(O);const Z=Ko(O);Y!=null&&Y.replace?window.history.replaceState(null,"",Z):window.history.pushState(null,"",Z);const L=await f0(O,Ve,s0);if(f(L),D(!1),!(Y!=null&&Y.skipScroll)){const hn=window.location.hash.slice(1);hn?requestAnimationFrame(()=>{const En=document.getElementById(hn);En&&En.scrollIntoView({behavior:"smooth",block:"start"})}):window.scrollTo(0,0)}},[]);H.useEffect(()=>{const O=window.location.hash.slice(1);if(O&&Ve.some(Y=>Y.id===O)){const Y=Ko(O);window.history.replaceState(null,"",Y),B(O,{replace:!0})}else{const Y=Ko(r);window.history.replaceState(null,"",Y),G1.then(Z=>{f(Z),D(!1)})}},[]),H.useEffect(()=>{const O=()=>{const Y=U1(window.location.pathname);Y&&Y!==r&&B(Y,{replace:!0,skipScroll:!0})};return window.addEventListener("popstate",O),()=>window.removeEventListener("popstate",O)},[r,B]);const G=H.useRef(null),[R,x]=H.useState(()=>{var Y,Z;if(typeof document>"u")return"light";if(document.documentElement.classList.contains("dark"))return"dark";const O=((Y=ui.theme)==null?void 0:Y.mode)||"auto";return O==="dark"?"dark":O==="light"?"light":(Z=window.matchMedia)!=null&&Z.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"});H.useEffect(()=>{const O=new MutationObserver(()=>{const Y=document.documentElement.classList.contains("dark");x(Y?"dark":"light")});return O.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>O.disconnect()},[]),H.useEffect(()=>{const O=document.querySelectorAll(".tome-mermaid[data-mermaid]");if(O.length===0)return;let Y=!1;const Z="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";return(async()=>{try{G.current||(G.current=(await import(Z)).default);const L=G.current;if(Y)return;const hn=R==="dark",En=getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim()||"sans-serif";L.initialize({startOnLoad:!1,theme:hn?"dark":"default",fontFamily:En,flowchart:{padding:15,nodeSpacing:30,rankSpacing:40}});for(let w=0;w<O.length;w++){const Cn=O[w],In=Cn.getAttribute("data-mermaid");if(In)try{const _n=atob(In),{svg:Wn}=await L.render(`tome-mermaid-${w}-${Date.now()}`,_n);Y||(Cn.innerHTML=Wn)}catch(_n){console.warn("[tome] Mermaid render failed:",_n),Cn.textContent="Diagram rendering failed",Cn.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"}}}catch(L){console.warn("[tome] Failed to load mermaid from CDN:",L),O.forEach(hn=>{hn.textContent="Failed to load diagram renderer",hn.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"})}})(),()=>{Y=!0}},[p,A,R]),H.useEffect(()=>{if(A)return;const O=document.querySelectorAll(".tome-content pre"),Y=[];return O.forEach(Z=>{if(Z.querySelector(".tome-copy-btn"))return;const L=document.createElement("button");L.className="tome-copy-btn",L.textContent="Copy",L.addEventListener("click",async()=>{const hn=Z.querySelector("code");if(hn)try{await navigator.clipboard.writeText(hn.textContent||""),L.textContent="Copied!",setTimeout(()=>{L.textContent="Copy"},2e3)}catch{L.textContent="Failed",setTimeout(()=>{L.textContent="Copy"},2e3)}}),Z.appendChild(L),Y.push(L)}),()=>{Y.forEach(Z=>Z.remove())}},[p,A]);const V=Ve.map(O=>({id:O.id,title:O.frontmatter.title,description:O.frontmatter.description})),C=Ve.find(O=>O.id===r),F=s1(C),J=o1(ui.editLink,C==null?void 0:C.filePath),yn=(C==null?void 0:C.locale)||(Zo==null?void 0:Zo.defaultLocale)||"en",tn="ltr";return H.useEffect(()=>{const O=document.querySelectorAll(".tome-math[data-math]").length>0;if(!ui.math&&!O)return;const Y="tome-katex-css";if(document.getElementById(Y))return;const Z=document.createElement("link");Z.id=Y,Z.rel="stylesheet",Z.href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",Z.crossOrigin="anonymous",document.head.appendChild(Z)},[p,A]),H.useEffect(()=>{const O=document.querySelectorAll(".tome-math[data-math]");if(O.length===0)return;let Y=!1;const Z="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs";return(async()=>{try{const L=(await import(Z)).default;if(Y)return;for(const hn of O){const En=hn.getAttribute("data-math");if(En)try{const w=atob(En),Cn=hn.classList.contains("tome-math-block");L.render(w,hn,{displayMode:Cn,throwOnError:!1})}catch(w){console.warn("[tome] KaTeX render failed:",w)}}}catch(L){console.warn("[tome] Failed to load KaTeX from CDN:",L)}})(),()=>{Y=!0}},[p,A]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:B1}),o.jsx(i1,{config:ui,navigation:r1,currentPageId:r,pageHtml:p!=null&&p.isMdx?void 0:A?"":(p==null?void 0:p.html)||"<p>Page not found</p>",pageComponent:p!=null&&p.isMdx?p.component:void 0,mdxComponents:C1,pageTitle:(p==null?void 0:p.frontmatter.title)||(A?"":"Not Found"),pageDescription:p==null?void 0:p.frontmatter.description,headings:(p==null?void 0:p.headings)||[],tocEnabled:(p==null?void 0:p.frontmatter.toc)!==!1,editUrl:J,lastUpdated:C==null?void 0:C.lastUpdated,changelogEntries:p!=null&&p.isMdx||p==null?void 0:p.changelogEntries,onNavigate:B,allPages:V,docContext:g1,versioning:void 0,currentVersion:F,basePath:zu,isDraft:((cn=C==null?void 0:C.frontmatter)==null?void 0:cn.draft)===!0,dir:tn,i18n:void 0,currentLocale:yn,overrides:m1})]})}const a0=document.getElementById("tome-root");a0&&Rm.createRoot(a0).render(o.jsx(H1,{}));

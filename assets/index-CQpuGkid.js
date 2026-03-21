(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))s(A);new MutationObserver(A=>{for(const O of A)if(O.type==="childList")for(const U of O.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&s(U)}).observe(document,{childList:!0,subtree:!0});function p(A){const O={};return A.integrity&&(O.integrity=A.integrity),A.referrerPolicy&&(O.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?O.credentials="include":A.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function s(A){if(A.ep)return;A.ep=!0;const O=p(A);fetch(A.href,O)}})();function S1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qo={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function A1(){if(Ld)return ai;Ld=1;var r=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function p(s,A,O){var U=null;if(O!==void 0&&(U=""+O),A.key!==void 0&&(U=""+A.key),"key"in A){O={};for(var B in A)B!=="key"&&(O[B]=A[B])}else O=A;return A=O.ref,{$$typeof:r,type:s,key:U,ref:A!==void 0?A:null,props:O}}return ai.Fragment=T,ai.jsx=p,ai.jsxs=p,ai}var kd;function j1(){return kd||(kd=1,qo.exports=A1()),qo.exports}var o=j1(),Lo={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function T1(){if(Yd)return tt;Yd=1;var r=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),F=Symbol.iterator;function J(g){return g===null||typeof g!="object"?null:(g=F&&g[F]||g["@@iterator"],typeof g=="function"?g:null)}var bt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nt=Object.assign,ut={};function D(g,M,N){this.props=g,this.context=M,this.refs=ut,this.updater=N||bt}D.prototype.isReactComponent={},D.prototype.setState=function(g,M){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,M,"setState")},D.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function k(){}k.prototype=D.prototype;function Z(g,M,N){this.props=g,this.context=M,this.refs=ut,this.updater=N||bt}var L=Z.prototype=new k;L.constructor=Z,nt(L,D.prototype),L.isPureReactComponent=!0;var pt=Array.isArray;function At(){}var w={H:null,A:null,T:null,S:null},Rt=Object.prototype.hasOwnProperty;function Jt(g,M,N){var Y=N.ref;return{$$typeof:r,type:g,key:M,ref:Y!==void 0?Y:null,props:N}}function zt(g,M){return Jt(g.type,M,g.props)}function Wt(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Gt(g){var M={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(N){return M[N]})}var On=/\/+/g;function ct(g,M){return typeof g=="object"&&g!==null&&g.key!=null?Gt(""+g.key):M.toString(36)}function yn(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(At,At):(g.status="pending",g.then(function(M){g.status==="pending"&&(g.status="fulfilled",g.value=M)},function(M){g.status==="pending"&&(g.status="rejected",g.reason=M)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function j(g,M,N,Y,$){var it=typeof g;(it==="undefined"||it==="boolean")&&(g=null);var ht=!1;if(g===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(g.$$typeof){case r:case T:ht=!0;break;case V:return ht=g._init,j(ht(g._payload),M,N,Y,$)}}if(ht)return $=$(g),ht=Y===""?"."+ct(g,0):Y,pt($)?(N="",ht!=null&&(N=ht.replace(On,"$&/")+"/"),j($,M,N,"",function(Ze){return Ze})):$!=null&&(Wt($)&&($=zt($,N+($.key==null||g&&g.key===$.key?"":(""+$.key).replace(On,"$&/")+"/")+ht)),M.push($)),1;ht=0;var $t=Y===""?".":Y+":";if(pt(g))for(var Ht=0;Ht<g.length;Ht++)Y=g[Ht],it=$t+ct(Y,Ht),ht+=j(Y,M,N,it,$);else if(Ht=J(g),typeof Ht=="function")for(g=Ht.call(g),Ht=0;!(Y=g.next()).done;)Y=Y.value,it=$t+ct(Y,Ht++),ht+=j(Y,M,N,it,$);else if(it==="object"){if(typeof g.then=="function")return j(yn(g),M,N,Y,$);throw M=String(g),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(g,M,N){if(g==null)return g;var Y=[],$=0;return j(g,Y,"","",function(it){return M.call(N,it,$++)}),Y}function W(g){if(g._status===-1){var M=g._result;M=M(),M.then(function(N){(g._status===0||g._status===-1)&&(g._status=1,g._result=N)},function(N){(g._status===0||g._status===-1)&&(g._status=2,g._result=N)}),g._status===-1&&(g._status=0,g._result=M)}if(g._status===1)return g._result.default;throw g._result}var ot=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},jt={map:G,forEach:function(g,M,N){G(g,function(){M.apply(this,arguments)},N)},count:function(g){var M=0;return G(g,function(){M++}),M},toArray:function(g){return G(g,function(M){return M})||[]},only:function(g){if(!Wt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return tt.Activity=C,tt.Children=jt,tt.Component=D,tt.Fragment=p,tt.Profiler=A,tt.PureComponent=Z,tt.StrictMode=s,tt.Suspense=R,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,tt.__COMPILER_RUNTIME={__proto__:null,c:function(g){return w.H.useMemoCache(g)}},tt.cache=function(g){return function(){return g.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(g,M,N){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Y=nt({},g.props),$=g.key;if(M!=null)for(it in M.key!==void 0&&($=""+M.key),M)!Rt.call(M,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&M.ref===void 0||(Y[it]=M[it]);var it=arguments.length-2;if(it===1)Y.children=N;else if(1<it){for(var ht=Array(it),$t=0;$t<it;$t++)ht[$t]=arguments[$t+2];Y.children=ht}return Jt(g.type,$,Y)},tt.createContext=function(g){return g={$$typeof:U,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:O,_context:g},g},tt.createElement=function(g,M,N){var Y,$={},it=null;if(M!=null)for(Y in M.key!==void 0&&(it=""+M.key),M)Rt.call(M,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&($[Y]=M[Y]);var ht=arguments.length-2;if(ht===1)$.children=N;else if(1<ht){for(var $t=Array(ht),Ht=0;Ht<ht;Ht++)$t[Ht]=arguments[Ht+2];$.children=$t}if(g&&g.defaultProps)for(Y in ht=g.defaultProps,ht)$[Y]===void 0&&($[Y]=ht[Y]);return Jt(g,it,$)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(g){return{$$typeof:B,render:g}},tt.isValidElement=Wt,tt.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:W}},tt.memo=function(g,M){return{$$typeof:x,type:g,compare:M===void 0?null:M}},tt.startTransition=function(g){var M=w.T,N={};w.T=N;try{var Y=g(),$=w.S;$!==null&&$(N,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(At,ot)}catch(it){ot(it)}finally{M!==null&&N.types!==null&&(M.types=N.types),w.T=M}},tt.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},tt.use=function(g){return w.H.use(g)},tt.useActionState=function(g,M,N){return w.H.useActionState(g,M,N)},tt.useCallback=function(g,M){return w.H.useCallback(g,M)},tt.useContext=function(g){return w.H.useContext(g)},tt.useDebugValue=function(){},tt.useDeferredValue=function(g,M){return w.H.useDeferredValue(g,M)},tt.useEffect=function(g,M){return w.H.useEffect(g,M)},tt.useEffectEvent=function(g){return w.H.useEffectEvent(g)},tt.useId=function(){return w.H.useId()},tt.useImperativeHandle=function(g,M,N){return w.H.useImperativeHandle(g,M,N)},tt.useInsertionEffect=function(g,M){return w.H.useInsertionEffect(g,M)},tt.useLayoutEffect=function(g,M){return w.H.useLayoutEffect(g,M)},tt.useMemo=function(g,M){return w.H.useMemo(g,M)},tt.useOptimistic=function(g,M){return w.H.useOptimistic(g,M)},tt.useReducer=function(g,M,N){return w.H.useReducer(g,M,N)},tt.useRef=function(g){return w.H.useRef(g)},tt.useState=function(g){return w.H.useState(g)},tt.useSyncExternalStore=function(g,M,N){return w.H.useSyncExternalStore(g,M,N)},tt.useTransition=function(){return w.H.useTransition()},tt.version="19.2.4",tt}var Qd;function Jo(){return Qd||(Qd=1,Lo.exports=T1()),Lo.exports}var H=Jo();const i0=S1(H);var ko={exports:{}},ii={},Yo={exports:{}},Qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function E1(){return Xd||(Xd=1,(function(r){function T(j,G){var W=j.length;j.push(G);t:for(;0<W;){var ot=W-1>>>1,jt=j[ot];if(0<A(jt,G))j[ot]=G,j[W]=jt,W=ot;else break t}}function p(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var G=j[0],W=j.pop();if(W!==G){j[0]=W;t:for(var ot=0,jt=j.length,g=jt>>>1;ot<g;){var M=2*(ot+1)-1,N=j[M],Y=M+1,$=j[Y];if(0>A(N,W))Y<jt&&0>A($,N)?(j[ot]=$,j[Y]=W,ot=Y):(j[ot]=N,j[M]=W,ot=M);else if(Y<jt&&0>A($,W))j[ot]=$,j[Y]=W,ot=Y;else break t}}return G}function A(j,G){var W=j.sortIndex-G.sortIndex;return W!==0?W:j.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;r.unstable_now=function(){return O.now()}}else{var U=Date,B=U.now();r.unstable_now=function(){return U.now()-B}}var R=[],x=[],V=1,C=null,F=3,J=!1,bt=!1,nt=!1,ut=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function L(j){for(var G=p(x);G!==null;){if(G.callback===null)s(x);else if(G.startTime<=j)s(x),G.sortIndex=G.expirationTime,T(R,G);else break;G=p(x)}}function pt(j){if(nt=!1,L(j),!bt)if(p(R)!==null)bt=!0,At||(At=!0,Gt());else{var G=p(x);G!==null&&yn(pt,G.startTime-j)}}var At=!1,w=-1,Rt=5,Jt=-1;function zt(){return ut?!0:!(r.unstable_now()-Jt<Rt)}function Wt(){if(ut=!1,At){var j=r.unstable_now();Jt=j;var G=!0;try{t:{bt=!1,nt&&(nt=!1,k(w),w=-1),J=!0;var W=F;try{n:{for(L(j),C=p(R);C!==null&&!(C.expirationTime>j&&zt());){var ot=C.callback;if(typeof ot=="function"){C.callback=null,F=C.priorityLevel;var jt=ot(C.expirationTime<=j);if(j=r.unstable_now(),typeof jt=="function"){C.callback=jt,L(j),G=!0;break n}C===p(R)&&s(R),L(j)}else s(R);C=p(R)}if(C!==null)G=!0;else{var g=p(x);g!==null&&yn(pt,g.startTime-j),G=!1}}break t}finally{C=null,F=W,J=!1}G=void 0}}finally{G?Gt():At=!1}}}var Gt;if(typeof Z=="function")Gt=function(){Z(Wt)};else if(typeof MessageChannel<"u"){var On=new MessageChannel,ct=On.port2;On.port1.onmessage=Wt,Gt=function(){ct.postMessage(null)}}else Gt=function(){D(Wt,0)};function yn(j,G){w=D(function(){j(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rt=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(j){switch(F){case 1:case 2:case 3:var G=3;break;default:G=F}var W=F;F=G;try{return j()}finally{F=W}},r.unstable_requestPaint=function(){ut=!0},r.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var W=F;F=j;try{return G()}finally{F=W}},r.unstable_scheduleCallback=function(j,G,W){var ot=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ot+W:ot):W=ot,j){case 1:var jt=-1;break;case 2:jt=250;break;case 5:jt=1073741823;break;case 4:jt=1e4;break;default:jt=5e3}return jt=W+jt,j={id:V++,callback:G,priorityLevel:j,startTime:W,expirationTime:jt,sortIndex:-1},W>ot?(j.sortIndex=W,T(x,j),p(R)===null&&j===p(x)&&(nt?(k(w),w=-1):nt=!0,yn(pt,W-ot))):(j.sortIndex=jt,T(R,j),bt||J||(bt=!0,At||(At=!0,Gt()))),j},r.unstable_shouldYield=zt,r.unstable_wrapCallback=function(j){var G=F;return function(){var W=F;F=G;try{return j.apply(this,arguments)}finally{F=W}}}})(Qo)),Qo}var Vd;function z1(){return Vd||(Vd=1,Yo.exports=E1()),Yo.exports}var Xo={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function _1(){if(Zd)return fn;Zd=1;var r=Jo();function T(R){var x="https://react.dev/errors/"+R;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)x+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+R+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var s={d:{f:p,r:function(){throw Error(T(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},A=Symbol.for("react.portal");function O(R,x,V){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:C==null?null:""+C,children:R,containerInfo:x,implementation:V}}var U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(R,x){if(R==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,fn.createPortal=function(R,x){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(T(299));return O(R,x,null,V)},fn.flushSync=function(R){var x=U.T,V=s.p;try{if(U.T=null,s.p=2,R)return R()}finally{U.T=x,s.p=V,s.d.f()}},fn.preconnect=function(R,x){typeof R=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(R,x))},fn.prefetchDNS=function(R){typeof R=="string"&&s.d.D(R)},fn.preinit=function(R,x){if(typeof R=="string"&&x&&typeof x.as=="string"){var V=x.as,C=B(V,x.crossOrigin),F=typeof x.integrity=="string"?x.integrity:void 0,J=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;V==="style"?s.d.S(R,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:C,integrity:F,fetchPriority:J}):V==="script"&&s.d.X(R,{crossOrigin:C,integrity:F,fetchPriority:J,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},fn.preinitModule=function(R,x){if(typeof R=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var V=B(x.as,x.crossOrigin);s.d.M(R,{crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&s.d.M(R)},fn.preload=function(R,x){if(typeof R=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var V=x.as,C=B(V,x.crossOrigin);s.d.L(R,V,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},fn.preloadModule=function(R,x){if(typeof R=="string")if(x){var V=B(x.as,x.crossOrigin);s.d.m(R,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else s.d.m(R)},fn.requestFormReset=function(R){s.d.r(R)},fn.unstable_batchedUpdates=function(R,x){return R(x)},fn.useFormState=function(R,x,V){return U.H.useFormState(R,x,V)},fn.useFormStatus=function(){return U.H.useHostTransitionStatus()},fn.version="19.2.4",fn}var Kd;function M1(){if(Kd)return Xo.exports;Kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(T){console.error(T)}}return r(),Xo.exports=_1(),Xo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function O1(){if(Jd)return ii;Jd=1;var r=z1(),T=Jo(),p=M1();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function O(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function U(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function B(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function R(t){if(O(t)!==t)throw Error(s(188))}function x(t){var n=t.alternate;if(!n){if(n=O(t),n===null)throw Error(s(188));return n!==t?null:t}for(var e=t,l=n;;){var a=e.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){e=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===e)return R(a),t;if(i===l)return R(a),n;i=i.sibling}throw Error(s(188))}if(e.return!==l.return)e=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===e){u=!0,e=a,l=i;break}if(c===l){u=!0,l=a,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,l=a;break}if(c===l){u=!0,l=i,e=a;break}c=c.sibling}if(!u)throw Error(s(189))}}if(e.alternate!==l)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?t:n}function V(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=V(t),n!==null)return n;t=t.sibling}return null}var C=Object.assign,F=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),bt=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Jt=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),Wt=Symbol.iterator;function Gt(t){return t===null||typeof t!="object"?null:(t=Wt&&t[Wt]||t["@@iterator"],typeof t=="function"?t:null)}var On=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===On?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nt:return"Fragment";case D:return"Profiler";case ut:return"StrictMode";case pt:return"Suspense";case At:return"SuspenseList";case Jt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case bt:return"Portal";case Z:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case Rt:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var yn=Array.isArray,j=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ot=[],jt=-1;function g(t){return{current:t}}function M(t){0>jt||(t.current=ot[jt],ot[jt]=null,jt--)}function N(t,n){jt++,ot[jt]=t.current,t.current=n}var Y=g(null),$=g(null),it=g(null),ht=g(null);function $t(t,n){switch(N(it,n),N($,t),N(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sd(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sd(n),t=fd(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(Y),N(Y,t)}function Ht(){M(Y),M($),M(it)}function Ze(t){t.memoizedState!==null&&N(ht,t);var n=Y.current,e=fd(n,t.type);n!==e&&(N($,t),N(Y,e))}function Ke(t){$.current===t&&(M(Y),M($)),ht.current===t&&(M(ht),ti._currentValue=W)}var ia,$n;function kn(t){if(ia===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);ia=n&&n[1]||"",$n=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+t+$n}var ml=!1;function pl(t,n){if(!t||ml)return"";ml=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(S){var y=S}Reflect.construct(t,[],_)}else{try{_.call()}catch(S){y=S}t.call(_.prototype)}}else{try{throw Error()}catch(S){y=S}(_=t())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),b=c.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===b.length)for(l=f.length-1,a=b.length-1;1<=l&&0<=a&&f[l]!==b[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==b[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==b[a]){var E=`
`+f[l].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=l&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?kn(e):""}function zu(t,n){switch(t.tag){case 26:case 27:case 5:return kn(t.type);case 16:return kn("Lazy");case 13:return t.child!==n&&n!==null?kn("Suspense Fallback"):kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return pl(t.type,!1);case 11:return pl(t.type.render,!1);case 1:return pl(t.type,!0);case 31:return kn("Activity");default:return""}}function ua(t){try{var n="",e=null;do n+=zu(t,e),e=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hl=Object.prototype.hasOwnProperty,vl=r.unstable_scheduleCallback,Pt=r.unstable_cancelCallback,ca=r.unstable_shouldYield,oa=r.unstable_requestPaint,kt=r.unstable_now,_u=r.unstable_getCurrentPriorityLevel,Mu=r.unstable_ImmediatePriority,Je=r.unstable_UserBlockingPriority,Dn=r.unstable_NormalPriority,ci=r.unstable_LowPriority,bl=r.unstable_IdlePriority,sa=r.log,oi=r.unstable_setDisableYieldValue,Zn=null,tn=null;function xn(t){if(typeof sa=="function"&&oi(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Zn,t)}catch{}}var nn=Math.clz32?Math.clz32:Du,yl=Math.log,Ou=Math.LN2;function Du(t){return t>>>=0,t===0?32:31-(yl(t)/Ou|0)|0}var We=256,dn=262144,be=4194304;function Kn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ie(t,n,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=Kn(l):(u&=c,u!==0?a=Kn(u):e||(e=c&~t,e!==0&&(a=Kn(e))))):(c=l&~i,c!==0?a=Kn(c):u!==0?a=Kn(u):e||(e=l&~t,e!==0&&(a=Kn(e)))),a===0?0:n!==0&&n!==a&&(n&i)===0&&(i=a&-a,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:a}function ye(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function si(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fa(){var t=be;return be<<=1,(be&62914560)===0&&(be=4194304),t}function xl(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fi(t,n,e,l,a,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,b=t.hiddenUpdates;for(e=u&~e;0<e;){var E=31-nn(e),_=1<<E;c[E]=0,f[E]=-1;var y=b[E];if(y!==null)for(b[E]=null,E=0;E<y.length;E++){var S=y[E];S!==null&&(S.lane&=-536870913)}e&=~_}l!==0&&ra(t,l,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~n))}function ra(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-nn(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|e&261930}function da(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var l=31-nn(e),a=1<<l;a&n|t[l]&n&&(t[l]|=n),e&=~a}}function ga(t,n){var e=n&-n;return e=(e&42)!==0?1:Sl(e),(e&(t.suspendedLanes|n))!==0?0:e}function Sl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Al(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ma(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Ud(t.type))}function pa(t,n){var e=G.p;try{return G.p=t,n()}finally{G.p=e}}var Yn=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Yn,an="__reactProps$"+Yn,Pn="__reactContainer$"+Yn,h="__reactEvents$"+Yn,q="__reactListeners$"+Yn,P="__reactHandles$"+Yn,gt="__reactResources$"+Yn,vt="__reactMarker$"+Yn;function Qt(t){delete t[Yt],delete t[an],delete t[h],delete t[q],delete t[P]}function It(t){var n=t[Yt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Pn]||e[Yt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=vd(t);t!==null;){if(e=t[Yt])return e;t=vd(t)}return n}t=e,e=t.parentNode}return null}function Se(t){if(t=t[Yt]||t[Pn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ha(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function jl(t){var n=t[gt];return n||(n=t[gt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[vt]=!0}var Io=new Set,Fo={};function Fe(t,n){Tl(t,n),Tl(t+"Capture",n)}function Tl(t,n){for(Fo[t]=n,t=0;t<n.length;t++)Io.add(n[t])}var d0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Po={};function g0(t){return hl.call(Po,t)?!0:hl.call($o,t)?!1:d0.test(t)?Po[t]=!0:($o[t]=!0,!1)}function ri(t,n,e){if(g0(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function di(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function te(t,n,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+l)}}function Rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ts(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function m0(t,n,e){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return a.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ru(t){if(!t._valueTracker){var n=ts(t)?"checked":"value";t._valueTracker=m0(t,n,""+t[n])}}function ns(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),l="";return t&&(l=ts(t)?t.checked?"true":"false":t.value),t=l,t!==e?(n.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var p0=/[\n"\\]/g;function Cn(t){return t.replace(p0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cu(t,n,e,l,a,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),n!=null?u==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Rn(n)):t.value!==""+Rn(n)&&(t.value=""+Rn(n)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),n!=null?Uu(t,u,Rn(n)):e!=null?Uu(t,u,Rn(e)):l!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Rn(c):t.removeAttribute("name")}function es(t,n,e,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){Ru(t);return}e=e!=null?""+Rn(e):"",n=n!=null?""+Rn(n):e,c||n===t.value||(t.value=n),t.defaultValue=n}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Ru(t)}function Uu(t,n,e){n==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function El(t,n,e,l){if(t=t.options,n){n={};for(var a=0;a<e.length;a++)n["$"+e[a]]=!0;for(e=0;e<t.length;e++)a=n.hasOwnProperty("$"+t[e].value),t[e].selected!==a&&(t[e].selected=a),a&&l&&(t[e].defaultSelected=!0)}else{for(e=""+Rn(e),n=null,a=0;a<t.length;a++){if(t[a].value===e){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}n!==null||t[a].disabled||(n=t[a])}n!==null&&(n.selected=!0)}}function ls(t,n,e){if(n!=null&&(n=""+Rn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+Rn(e):""}function as(t,n,e,l){if(n==null){if(l!=null){if(e!=null)throw Error(s(92));if(yn(l)){if(1<l.length)throw Error(s(93));l=l[0]}e=l}e==null&&(e=""),n=e}e=Rn(n),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l),Ru(t)}function zl(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var h0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function is(t,n,e){var l=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,e):typeof e!="number"||e===0||h0.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function us(t,n,e){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in n)l=n[a],n.hasOwnProperty(a)&&e[a]!==l&&is(t,a,l)}else for(var i in n)n.hasOwnProperty(i)&&is(t,i,n[i])}function Gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(t){return b0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ne(){}var Bu=null;function Hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _l=null,Ml=null;function cs(t){var n=Se(t);if(n&&(t=n.stateNode)){var e=t[an]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var l=e[n];if(l!==t&&l.form===t.form){var a=l[an]||null;if(!a)throw Error(s(90));Cu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<e.length;n++)l=e[n],l.form===t.form&&ns(l)}break t;case"textarea":ls(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&El(t,!!e.multiple,n,!1)}}}var wu=!1;function os(t,n,e){if(wu)return t(n,e);wu=!0;try{var l=t(n);return l}finally{if(wu=!1,(_l!==null||Ml!==null)&&(nu(),_l&&(n=_l,t=Ml,Ml=_l=null,cs(n),t)))for(n=0;n<t.length;n++)cs(t[n])}}function va(t,n){var e=t.stateNode;if(e===null)return null;var l=e[an]||null;if(l===null)return null;e=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(s(231,n,typeof e));return e}var ee=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ee)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Nu=!1}var Ae=null,qu=null,pi=null;function ss(){if(pi)return pi;var t,n=qu,e=n.length,l,a="value"in Ae?Ae.value:Ae.textContent,i=a.length;for(t=0;t<e&&n[t]===a[t];t++);var u=e-t;for(l=1;l<=u&&n[e-l]===a[i-l];l++);return pi=a.slice(t,1<l?1-l:void 0)}function hi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vi(){return!0}function fs(){return!1}function gn(t){function n(e,l,a,i,u){this._reactName=e,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:fs,this.isPropagationStopped=fs,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),n}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=gn($e),ya=C({},$e,{view:0,detail:0}),y0=gn(ya),Lu,ku,xa,yi=C({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(Lu=t.screenX-xa.screenX,ku=t.screenY-xa.screenY):ku=Lu=0,xa=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),rs=gn(yi),x0=C({},yi,{dataTransfer:0}),S0=gn(x0),A0=C({},ya,{relatedTarget:0}),Yu=gn(A0),j0=C({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=gn(j0),E0=C({},$e,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=gn(E0),_0=C({},$e,{data:0}),ds=gn(_0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=D0[t])?!!n[t]:!1}function Qu(){return R0}var C0=C({},ya,{key:function(t){if(t.key){var n=M0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U0=gn(C0),G0=C({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=gn(G0),B0=C({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),H0=gn(B0),w0=C({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=gn(w0),q0=C({},yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=gn(q0),k0=C({},$e,{newState:0,oldState:0}),Y0=gn(k0),Q0=[9,13,27,32],Xu=ee&&"CompositionEvent"in window,Sa=null;ee&&"documentMode"in document&&(Sa=document.documentMode);var X0=ee&&"TextEvent"in window&&!Sa,ms=ee&&(!Xu||Sa&&8<Sa&&11>=Sa),ps=" ",hs=!1;function vs(t,n){switch(t){case"keyup":return Q0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ol=!1;function V0(t,n){switch(t){case"compositionend":return bs(n);case"keypress":return n.which!==32?null:(hs=!0,ps);case"textInput":return t=n.data,t===ps&&hs?null:t;default:return null}}function Z0(t,n){if(Ol)return t==="compositionend"||!Xu&&vs(t,n)?(t=ss(),pi=qu=Ae=null,Ol=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ms&&n.locale!=="ko"?null:n.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ys(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!K0[t.type]:n==="textarea"}function xs(t,n,e,l){_l?Ml?Ml.push(l):Ml=[l]:_l=l,n=ou(n,"onChange"),0<n.length&&(e=new bi("onChange","change",null,e,l),t.push({event:e,listeners:n}))}var Aa=null,ja=null;function J0(t){ld(t,0)}function xi(t){var n=ha(t);if(ns(n))return t}function Ss(t,n){if(t==="change")return n}var As=!1;if(ee){var Vu;if(ee){var Zu="oninput"in document;if(!Zu){var js=document.createElement("div");js.setAttribute("oninput","return;"),Zu=typeof js.oninput=="function"}Vu=Zu}else Vu=!1;As=Vu&&(!document.documentMode||9<document.documentMode)}function Ts(){Aa&&(Aa.detachEvent("onpropertychange",Es),ja=Aa=null)}function Es(t){if(t.propertyName==="value"&&xi(ja)){var n=[];xs(n,ja,t,Hu(t)),os(J0,n)}}function W0(t,n,e){t==="focusin"?(Ts(),Aa=n,ja=e,Aa.attachEvent("onpropertychange",Es)):t==="focusout"&&Ts()}function I0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xi(ja)}function F0(t,n){if(t==="click")return xi(n)}function $0(t,n){if(t==="input"||t==="change")return xi(n)}function P0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Sn=typeof Object.is=="function"?Object.is:P0;function Ta(t,n){if(Sn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),l=Object.keys(n);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var a=e[l];if(!hl.call(n,a)||!Sn(t[a],n[a]))return!1}return!0}function zs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _s(t,n){var e=zs(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=n&&l>=n)return{node:e,offset:n-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=zs(e)}}function Ms(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ms(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Os(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gi(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=gi(t.document)}return n}function Ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var tg=ee&&"documentMode"in document&&11>=document.documentMode,Dl=null,Ju=null,Ea=null,Wu=!1;function Ds(t,n,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Wu||Dl==null||Dl!==gi(l)||(l=Dl,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ea&&Ta(Ea,l)||(Ea=l,l=ou(Ju,"onSelect"),0<l.length&&(n=new bi("onSelect","select",null,n,e),t.push({event:n,listeners:l}),n.target=Dl)))}function Pe(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var Rl={animationend:Pe("Animation","AnimationEnd"),animationiteration:Pe("Animation","AnimationIteration"),animationstart:Pe("Animation","AnimationStart"),transitionrun:Pe("Transition","TransitionRun"),transitionstart:Pe("Transition","TransitionStart"),transitioncancel:Pe("Transition","TransitionCancel"),transitionend:Pe("Transition","TransitionEnd")},Iu={},Rs={};ee&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function tl(t){if(Iu[t])return Iu[t];if(!Rl[t])return t;var n=Rl[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Rs)return Iu[t]=n[e];return t}var Cs=tl("animationend"),Us=tl("animationiteration"),Gs=tl("animationstart"),ng=tl("transitionrun"),eg=tl("transitionstart"),lg=tl("transitioncancel"),Bs=tl("transitionend"),Hs=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Qn(t,n){Hs.set(t,n),Fe(n,[t])}var Si=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Un=[],Cl=0,$u=0;function Ai(){for(var t=Cl,n=$u=Cl=0;n<t;){var e=Un[n];Un[n++]=null;var l=Un[n];Un[n++]=null;var a=Un[n];Un[n++]=null;var i=Un[n];if(Un[n++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&ws(e,a,i)}}function ji(t,n,e,l){Un[Cl++]=t,Un[Cl++]=n,Un[Cl++]=e,Un[Cl++]=l,$u|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Pu(t,n,e,l){return ji(t,n,e,l),Ti(t)}function nl(t,n){return ji(t,null,null,n),Ti(t)}function ws(t,n,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var a=!1,i=t.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&n!==null&&(a=31-nn(e),t=i.hiddenUpdates,l=t[a],l===null?t[a]=[n]:l.push(n),n.lane=e|536870912),i):null}function Ti(t){if(50<Ka)throw Ka=0,oo=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ul={};function ag(t,n,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,n,e,l){return new ag(t,n,e,l)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function le(t,n){var e=t.alternate;return e===null?(e=An(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Ns(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ei(t,n,e,l,a,i){var u=0;if(l=t,typeof t=="function")tc(t)&&(u=1);else if(typeof t=="string")u=s1(t,e,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Jt:return t=An(31,e,n,a),t.elementType=Jt,t.lanes=i,t;case nt:return el(e.children,a,i,n);case ut:u=8,a|=24;break;case D:return t=An(12,e,n,a|2),t.elementType=D,t.lanes=i,t;case pt:return t=An(13,e,n,a),t.elementType=pt,t.lanes=i,t;case At:return t=An(19,e,n,a),t.elementType=At,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:u=10;break t;case k:u=9;break t;case L:u=11;break t;case w:u=14;break t;case Rt:u=16,l=null;break t}u=29,e=Error(s(130,t===null?"null":typeof t,"")),l=null}return n=An(u,e,n,a),n.elementType=t,n.type=l,n.lanes=i,n}function el(t,n,e,l){return t=An(7,t,l,n),t.lanes=e,t}function nc(t,n,e){return t=An(6,t,null,n),t.lanes=e,t}function qs(t){var n=An(18,null,null,0);return n.stateNode=t,n}function ec(t,n,e){return n=An(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ls=new WeakMap;function Gn(t,n){if(typeof t=="object"&&t!==null){var e=Ls.get(t);return e!==void 0?e:(n={value:t,source:n,stack:ua(n)},Ls.set(t,n),n)}return{value:t,source:n,stack:ua(n)}}var Gl=[],Bl=0,zi=null,za=0,Bn=[],Hn=0,je=null,Jn=1,Wn="";function ae(t,n){Gl[Bl++]=za,Gl[Bl++]=zi,zi=t,za=n}function ks(t,n,e){Bn[Hn++]=Jn,Bn[Hn++]=Wn,Bn[Hn++]=je,je=t;var l=Jn;t=Wn;var a=32-nn(l)-1;l&=~(1<<a),e+=1;var i=32-nn(n)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,Jn=1<<32-nn(n)+a|e<<a|l,Wn=i+t}else Jn=1<<i|e<<a|l,Wn=t}function lc(t){t.return!==null&&(ae(t,1),ks(t,1,0))}function ac(t){for(;t===zi;)zi=Gl[--Bl],Gl[Bl]=null,za=Gl[--Bl],Gl[Bl]=null;for(;t===je;)je=Bn[--Hn],Bn[Hn]=null,Wn=Bn[--Hn],Bn[Hn]=null,Jn=Bn[--Hn],Bn[Hn]=null}function Ys(t,n){Bn[Hn++]=Jn,Bn[Hn++]=Wn,Bn[Hn++]=je,Jn=n.id,Wn=n.overflow,je=t}var un=null,Ct=null,mt=!1,Te=null,wn=!1,ic=Error(s(519));function Ee(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _a(Gn(n,t)),ic}function Qs(t){var n=t.stateNode,e=t.type,l=t.memoizedProps;switch(n[Yt]=t,n[an]=l,e){case"dialog":ft("cancel",n),ft("close",n);break;case"iframe":case"object":case"embed":ft("load",n);break;case"video":case"audio":for(e=0;e<Wa.length;e++)ft(Wa[e],n);break;case"source":ft("error",n);break;case"img":case"image":case"link":ft("error",n),ft("load",n);break;case"details":ft("toggle",n);break;case"input":ft("invalid",n),es(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ft("invalid",n);break;case"textarea":ft("invalid",n),as(n,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||l.suppressHydrationWarning===!0||cd(n.textContent,e)?(l.popover!=null&&(ft("beforetoggle",n),ft("toggle",n)),l.onScroll!=null&&ft("scroll",n),l.onScrollEnd!=null&&ft("scrollend",n),l.onClick!=null&&(n.onclick=ne),n=!0):n=!1,n||Ee(t,!0)}function Xs(t){for(un=t.return;un;)switch(un.tag){case 5:case 31:case 13:wn=!1;return;case 27:case 3:wn=!0;return;default:un=un.return}}function Hl(t){if(t!==un)return!1;if(!mt)return Xs(t),mt=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||To(t.type,t.memoizedProps)),e=!e),e&&Ct&&Ee(t),Xs(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=hd(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=hd(t)}else n===27?(n=Ct,qe(t.type)?(t=Oo,Oo=null,Ct=t):Ct=n):Ct=un?qn(t.stateNode.nextSibling):null;return!0}function ll(){Ct=un=null,mt=!1}function uc(){var t=Te;return t!==null&&(vn===null?vn=t:vn.push.apply(vn,t),Te=null),t}function _a(t){Te===null?Te=[t]:Te.push(t)}var cc=g(null),al=null,ie=null;function ze(t,n,e){N(cc,n._currentValue),n._currentValue=e}function ue(t){t._currentValue=cc.current,M(cc)}function oc(t,n,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===e)break;t=t.return}}function sc(t,n,e,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=a;for(var f=0;f<n.length;f++)if(c.context===n[f]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),oc(i.return,e,t),l||(u=null);break t}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),oc(u,e,t),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function wl(t,n,e,l){t=null;for(var a=n,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=a.type;Sn(a.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(a===ht.current){if(u=a.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ti):t=[ti])}a=a.return}t!==null&&sc(n,t,e,l),n.flags|=262144}function _i(t){for(t=t.firstContext;t!==null;){if(!Sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function il(t){al=t,ie=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function cn(t){return Vs(al,t)}function Mi(t,n){return al===null&&il(t),Vs(t,n)}function Vs(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},ie===null){if(t===null)throw Error(s(308));ie=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ie=ie.next=n;return e}var ig=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},ug=r.unstable_scheduleCallback,cg=r.unstable_NormalPriority,Xt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new ig,data:new Map,refCount:0}}function Ma(t){t.refCount--,t.refCount===0&&ug(cg,function(){t.controller.abort()})}var Oa=null,rc=0,Nl=0,ql=null;function og(t,n){if(Oa===null){var e=Oa=[];rc=0,Nl=po(),ql={status:"pending",value:void 0,then:function(l){e.push(l)}}}return rc++,n.then(Zs,Zs),n}function Zs(){if(--rc===0&&Oa!==null){ql!==null&&(ql.status="fulfilled");var t=Oa;Oa=null,Nl=0,ql=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sg(t,n){var e=[],l={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var a=0;a<e.length;a++)(0,e[a])(n)},function(a){for(l.status="rejected",l.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),l}var Ks=j.S;j.S=function(t,n){Rr=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&og(t,n),Ks!==null&&Ks(t,n)};var ul=g(null);function dc(){var t=ul.current;return t!==null?t:Dt.pooledCache}function Oi(t,n){n===null?N(ul,ul.current):N(ul,n.pool)}function Js(){var t=dc();return t===null?null:{parent:Xt._currentValue,pool:t}}var Ll=Error(s(460)),gc=Error(s(474)),Di=Error(s(542)),Ri={then:function(){}};function Ws(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Is(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(ne,ne),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$s(t),t;default:if(typeof n.status=="string")n.then(ne,ne);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=l}},function(l){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$s(t),t}throw ol=n,Ll}}function cl(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(ol=e,Ll):e}}var ol=null;function Fs(){if(ol===null)throw Error(s(459));var t=ol;return ol=null,t}function $s(t){if(t===Ll||t===Di)throw Error(s(483))}var kl=null,Da=0;function Ci(t){var n=Da;return Da+=1,kl===null&&(kl=[]),Is(kl,t,n)}function Ra(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ui(t,n){throw n.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ps(t){function n(m,d){if(t){var v=m.deletions;v===null?(m.deletions=[d],m.flags|=16):v.push(d)}}function e(m,d){if(!t)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function l(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function a(m,d){return m=le(m,d),m.index=0,m.sibling=null,m}function i(m,d,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<d?(m.flags|=67108866,d):v):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,d,v,z){return d===null||d.tag!==6?(d=nc(v,m.mode,z),d.return=m,d):(d=a(d,v),d.return=m,d)}function f(m,d,v,z){var K=v.type;return K===nt?E(m,d,v.props.children,z,v.key):d!==null&&(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Rt&&cl(K)===d.type)?(d=a(d,v.props),Ra(d,v),d.return=m,d):(d=Ei(v.type,v.key,v.props,null,m.mode,z),Ra(d,v),d.return=m,d)}function b(m,d,v,z){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=ec(v,m.mode,z),d.return=m,d):(d=a(d,v.children||[]),d.return=m,d)}function E(m,d,v,z,K){return d===null||d.tag!==7?(d=el(v,m.mode,z,K),d.return=m,d):(d=a(d,v),d.return=m,d)}function _(m,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=nc(""+d,m.mode,v),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case J:return v=Ei(d.type,d.key,d.props,null,m.mode,v),Ra(v,d),v.return=m,v;case bt:return d=ec(d,m.mode,v),d.return=m,d;case Rt:return d=cl(d),_(m,d,v)}if(yn(d)||Gt(d))return d=el(d,m.mode,v,null),d.return=m,d;if(typeof d.then=="function")return _(m,Ci(d),v);if(d.$$typeof===Z)return _(m,Mi(m,d),v);Ui(m,d)}return null}function y(m,d,v,z){var K=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return K!==null?null:c(m,d,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return v.key===K?f(m,d,v,z):null;case bt:return v.key===K?b(m,d,v,z):null;case Rt:return v=cl(v),y(m,d,v,z)}if(yn(v)||Gt(v))return K!==null?null:E(m,d,v,z,null);if(typeof v.then=="function")return y(m,d,Ci(v),z);if(v.$$typeof===Z)return y(m,d,Mi(m,v),z);Ui(m,v)}return null}function S(m,d,v,z,K){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(v)||null,c(d,m,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case J:return m=m.get(z.key===null?v:z.key)||null,f(d,m,z,K);case bt:return m=m.get(z.key===null?v:z.key)||null,b(d,m,z,K);case Rt:return z=cl(z),S(m,d,v,z,K)}if(yn(z)||Gt(z))return m=m.get(v)||null,E(d,m,z,K,null);if(typeof z.then=="function")return S(m,d,v,Ci(z),K);if(z.$$typeof===Z)return S(m,d,v,Mi(d,z),K);Ui(d,z)}return null}function Q(m,d,v,z){for(var K=null,yt=null,X=d,at=d=0,dt=null;X!==null&&at<v.length;at++){X.index>at?(dt=X,X=null):dt=X.sibling;var xt=y(m,X,v[at],z);if(xt===null){X===null&&(X=dt);break}t&&X&&xt.alternate===null&&n(m,X),d=i(xt,d,at),yt===null?K=xt:yt.sibling=xt,yt=xt,X=dt}if(at===v.length)return e(m,X),mt&&ae(m,at),K;if(X===null){for(;at<v.length;at++)X=_(m,v[at],z),X!==null&&(d=i(X,d,at),yt===null?K=X:yt.sibling=X,yt=X);return mt&&ae(m,at),K}for(X=l(X);at<v.length;at++)dt=S(X,m,at,v[at],z),dt!==null&&(t&&dt.alternate!==null&&X.delete(dt.key===null?at:dt.key),d=i(dt,d,at),yt===null?K=dt:yt.sibling=dt,yt=dt);return t&&X.forEach(function(Xe){return n(m,Xe)}),mt&&ae(m,at),K}function I(m,d,v,z){if(v==null)throw Error(s(151));for(var K=null,yt=null,X=d,at=d=0,dt=null,xt=v.next();X!==null&&!xt.done;at++,xt=v.next()){X.index>at?(dt=X,X=null):dt=X.sibling;var Xe=y(m,X,xt.value,z);if(Xe===null){X===null&&(X=dt);break}t&&X&&Xe.alternate===null&&n(m,X),d=i(Xe,d,at),yt===null?K=Xe:yt.sibling=Xe,yt=Xe,X=dt}if(xt.done)return e(m,X),mt&&ae(m,at),K;if(X===null){for(;!xt.done;at++,xt=v.next())xt=_(m,xt.value,z),xt!==null&&(d=i(xt,d,at),yt===null?K=xt:yt.sibling=xt,yt=xt);return mt&&ae(m,at),K}for(X=l(X);!xt.done;at++,xt=v.next())xt=S(X,m,at,xt.value,z),xt!==null&&(t&&xt.alternate!==null&&X.delete(xt.key===null?at:xt.key),d=i(xt,d,at),yt===null?K=xt:yt.sibling=xt,yt=xt);return t&&X.forEach(function(x1){return n(m,x1)}),mt&&ae(m,at),K}function Ot(m,d,v,z){if(typeof v=="object"&&v!==null&&v.type===nt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case J:t:{for(var K=v.key;d!==null;){if(d.key===K){if(K=v.type,K===nt){if(d.tag===7){e(m,d.sibling),z=a(d,v.props.children),z.return=m,m=z;break t}}else if(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Rt&&cl(K)===d.type){e(m,d.sibling),z=a(d,v.props),Ra(z,v),z.return=m,m=z;break t}e(m,d);break}else n(m,d);d=d.sibling}v.type===nt?(z=el(v.props.children,m.mode,z,v.key),z.return=m,m=z):(z=Ei(v.type,v.key,v.props,null,m.mode,z),Ra(z,v),z.return=m,m=z)}return u(m);case bt:t:{for(K=v.key;d!==null;){if(d.key===K)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){e(m,d.sibling),z=a(d,v.children||[]),z.return=m,m=z;break t}else{e(m,d);break}else n(m,d);d=d.sibling}z=ec(v,m.mode,z),z.return=m,m=z}return u(m);case Rt:return v=cl(v),Ot(m,d,v,z)}if(yn(v))return Q(m,d,v,z);if(Gt(v)){if(K=Gt(v),typeof K!="function")throw Error(s(150));return v=K.call(v),I(m,d,v,z)}if(typeof v.then=="function")return Ot(m,d,Ci(v),z);if(v.$$typeof===Z)return Ot(m,d,Mi(m,v),z);Ui(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(e(m,d.sibling),z=a(d,v),z.return=m,m=z):(e(m,d),z=nc(v,m.mode,z),z.return=m,m=z),u(m)):e(m,d)}return function(m,d,v,z){try{Da=0;var K=Ot(m,d,v,z);return kl=null,K}catch(X){if(X===Ll||X===Di)throw X;var yt=An(29,X,null,m.mode);return yt.lanes=z,yt.return=m,yt}finally{}}}var sl=Ps(!0),tf=Ps(!1),_e=!1;function mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Me(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oe(t,n,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var a=l.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),l.pending=n,n=Ti(t),ws(t,null,e),n}return ji(t,l,n,e),Ti(t)}function Ca(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,da(t,e)}}function hc(t,n){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var a=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?a=i=n:i=i.next=n}else a=i=n;e={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var vc=!1;function Ua(){if(vc){var t=ql;if(t!==null)throw t}}function Ga(t,n,e,l){vc=!1;var a=t.updateQueue;_e=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,b=f.next;f.next=null,u===null?i=b:u.next=b,u=f;var E=t.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==u&&(c===null?E.firstBaseUpdate=b:c.next=b,E.lastBaseUpdate=f))}if(i!==null){var _=a.baseState;u=0,E=b=f=null,c=i;do{var y=c.lane&-536870913,S=y!==c.lane;if(S?(rt&y)===y:(l&y)===y){y!==0&&y===Nl&&(vc=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var Q=t,I=c;y=n;var Ot=e;switch(I.tag){case 1:if(Q=I.payload,typeof Q=="function"){_=Q.call(Ot,_,y);break t}_=Q;break t;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=I.payload,y=typeof Q=="function"?Q.call(Ot,_,y):Q,y==null)break t;_=C({},_,y);break t;case 2:_e=!0}}y=c.callback,y!==null&&(t.flags|=64,S&&(t.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(b=E=S,f=_):E=E.next=S,u|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;S=c,c=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);E===null&&(f=_),a.baseState=f,a.firstBaseUpdate=b,a.lastBaseUpdate=E,i===null&&(a.shared.lanes=0),Ge|=u,t.lanes=u,t.memoizedState=_}}function nf(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ef(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)nf(e[t],n)}var Yl=g(null),Gi=g(0);function lf(t,n){t=pe,N(Gi,t),N(Yl,n),pe=t|n.baseLanes}function bc(){N(Gi,pe),N(Yl,Yl.current)}function yc(){pe=Gi.current,M(Yl),M(Gi)}var jn=g(null),Nn=null;function De(t){var n=t.alternate;N(qt,qt.current&1),N(jn,t),Nn===null&&(n===null||Yl.current!==null||n.memoizedState!==null)&&(Nn=t)}function xc(t){N(qt,qt.current),N(jn,t),Nn===null&&(Nn=t)}function af(t){t.tag===22?(N(qt,qt.current),N(jn,t),Nn===null&&(Nn=t)):Re()}function Re(){N(qt,qt.current),N(jn,jn.current)}function Tn(t){M(jn),Nn===t&&(Nn=null),M(qt)}var qt=g(0);function Bi(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||_o(e)||Mo(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ce=0,lt=null,_t=null,Vt=null,Hi=!1,Ql=!1,fl=!1,wi=0,Ba=0,Xl=null,fg=0;function wt(){throw Error(s(321))}function Sc(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!Sn(t[e],n[e]))return!1;return!0}function Ac(t,n,e,l,a,i){return ce=i,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=t===null||t.memoizedState===null?Yf:wc,fl=!1,i=e(l,a),fl=!1,Ql&&(i=cf(n,e,l,a)),uf(t),i}function uf(t){j.H=Na;var n=_t!==null&&_t.next!==null;if(ce=0,Vt=_t=lt=null,Hi=!1,Ba=0,Xl=null,n)throw Error(s(300));t===null||Zt||(t=t.dependencies,t!==null&&_i(t)&&(Zt=!0))}function cf(t,n,e,l){lt=t;var a=0;do{if(Ql&&(Xl=null),Ba=0,Ql=!1,25<=a)throw Error(s(301));if(a+=1,Vt=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}j.H=Qf,i=n(e,l)}while(Ql);return i}function rg(){var t=j.H,n=t.useState()[0];return n=typeof n.then=="function"?Ha(n):n,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(lt.flags|=1024),n}function jc(){var t=wi!==0;return wi=0,t}function Tc(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Ec(t){if(Hi){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hi=!1}ce=0,Vt=_t=lt=null,Ql=!1,Ba=wi=0,Xl=null}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?lt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Lt(){if(_t===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var n=Vt===null?lt.memoizedState:Vt.next;if(n!==null)Vt=n,_t=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Vt===null?lt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(t){var n=Ba;return Ba+=1,Xl===null&&(Xl=[]),t=Is(Xl,t,n),n=lt,(Vt===null?n.memoizedState:Vt.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?Yf:wc),t}function qi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ha(t);if(t.$$typeof===Z)return cn(t)}throw Error(s(438,String(t)))}function zc(t){var n=null,e=lt.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var l=lt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=Ni(),lt.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),l=0;l<t;l++)e[l]=zt;return n.index++,e}function oe(t,n){return typeof n=="function"?n(t):n}function Li(t){var n=Lt();return _c(n,_t,t)}function _c(t,n,e){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=t.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}n.baseQueue=a=i,l.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{n=a.next;var c=u=null,f=null,b=n,E=!1;do{var _=b.lane&-536870913;if(_!==b.lane?(rt&_)===_:(ce&_)===_){var y=b.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),_===Nl&&(E=!0);else if((ce&y)===y){b=b.next,y===Nl&&(E=!0);continue}else _={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=_,u=i):f=f.next=_,lt.lanes|=y,Ge|=y;_=b.action,fl&&e(i,_),i=b.hasEagerState?b.eagerState:e(i,_)}else y={lane:_,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=y,u=i):f=f.next=y,lt.lanes|=_,Ge|=_;b=b.next}while(b!==null&&b!==n);if(f===null?u=i:f.next=c,!Sn(i,t.memoizedState)&&(Zt=!0,E&&(e=ql,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=f,l.lastRenderedState=i}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Mc(t){var n=Lt(),e=n.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=t;var l=e.dispatch,a=e.pending,i=n.memoizedState;if(a!==null){e.pending=null;var u=a=a.next;do i=t(i,u.action),u=u.next;while(u!==a);Sn(i,n.memoizedState)||(Zt=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,l]}function of(t,n,e){var l=lt,a=Lt(),i=mt;if(i){if(e===void 0)throw Error(s(407));e=e()}else e=n();var u=!Sn((_t||a).memoizedState,e);if(u&&(a.memoizedState=e,Zt=!0),a=a.queue,Rc(rf.bind(null,l,a,t),[t]),a.getSnapshot!==n||u||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,Vl(9,{destroy:void 0},ff.bind(null,l,a,e,n),null),Dt===null)throw Error(s(349));i||(ce&127)!==0||sf(l,n,e)}return e}function sf(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=lt.updateQueue,n===null?(n=Ni(),lt.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function ff(t,n,e,l){n.value=e,n.getSnapshot=l,df(n)&&gf(t)}function rf(t,n,e){return e(function(){df(n)&&gf(t)})}function df(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!Sn(t,e)}catch{return!0}}function gf(t){var n=nl(t,2);n!==null&&bn(n,t,2)}function Oc(t){var n=rn();if(typeof t=="function"){var e=t;if(t=e(),fl){xn(!0);try{e()}finally{xn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:t},n}function mf(t,n,e,l){return t.baseState=e,_c(t,_t,typeof l=="function"?l:oe)}function dg(t,n,e,l,a){if(Qi(t))throw Error(s(485));if(t=n.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};j.T!==null?e(!0):i.isTransition=!1,l(i),e=n.pending,e===null?(i.next=n.pending=i,pf(n,i)):(i.next=e.next,n.pending=e.next=i)}}function pf(t,n){var e=n.action,l=n.payload,a=t.state;if(n.isTransition){var i=j.T,u={};j.T=u;try{var c=e(a,l),f=j.S;f!==null&&f(u,c),hf(t,n,c)}catch(b){Dc(t,n,b)}finally{i!==null&&u.types!==null&&(i.types=u.types),j.T=i}}else try{i=e(a,l),hf(t,n,i)}catch(b){Dc(t,n,b)}}function hf(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){vf(t,n,l)},function(l){return Dc(t,n,l)}):vf(t,n,e)}function vf(t,n,e){n.status="fulfilled",n.value=e,bf(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,pf(t,e)))}function Dc(t,n,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=e,bf(n),n=n.next;while(n!==l)}t.action=null}function bf(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function yf(t,n){return n}function xf(t,n){if(mt){var e=Dt.formState;if(e!==null){t:{var l=lt;if(mt){if(Ct){n:{for(var a=Ct,i=wn;a.nodeType!==8;){if(!i){a=null;break n}if(a=qn(a.nextSibling),a===null){a=null;break n}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ct=qn(a.nextSibling),l=a.data==="F!";break t}}Ee(l)}l=!1}l&&(n=e[0])}}return e=rn(),e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:n},e.queue=l,e=qf.bind(null,lt,l),l.dispatch=e,l=Oc(!1),i=Hc.bind(null,lt,!1,l.queue),l=rn(),a={state:n,dispatch:null,action:t,pending:null},l.queue=a,e=dg.bind(null,lt,a,i,e),a.dispatch=e,l.memoizedState=t,[n,e,!1]}function Sf(t){var n=Lt();return Af(n,_t,t)}function Af(t,n,e){if(n=_c(t,n,yf)[0],t=Li(oe)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ha(n)}catch(u){throw u===Ll?Di:u}else l=n;n=Lt();var a=n.queue,i=a.dispatch;return e!==n.memoizedState&&(lt.flags|=2048,Vl(9,{destroy:void 0},gg.bind(null,a,e),null)),[l,i,t]}function gg(t,n){t.action=n}function jf(t){var n=Lt(),e=_t;if(e!==null)return Af(n,e,t);Lt(),n=n.memoizedState,e=Lt();var l=e.queue.dispatch;return e.memoizedState=t,[n,l,!1]}function Vl(t,n,e,l){return t={tag:t,create:e,deps:l,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ni(),lt.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,n.lastEffect=t),t}function Tf(){return Lt().memoizedState}function ki(t,n,e,l){var a=rn();lt.flags|=t,a.memoizedState=Vl(1|n,{destroy:void 0},e,l===void 0?null:l)}function Yi(t,n,e,l){var a=Lt();l=l===void 0?null:l;var i=a.memoizedState.inst;_t!==null&&l!==null&&Sc(l,_t.memoizedState.deps)?a.memoizedState=Vl(n,i,e,l):(lt.flags|=t,a.memoizedState=Vl(1|n,i,e,l))}function Ef(t,n){ki(8390656,8,t,n)}function Rc(t,n){Yi(2048,8,t,n)}function mg(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ni(),lt.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function zf(t){var n=Lt().memoizedState;return mg({ref:n,nextImpl:t}),function(){if((St&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _f(t,n){return Yi(4,2,t,n)}function Mf(t,n){return Yi(4,4,t,n)}function Of(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Df(t,n,e){e=e!=null?e.concat([t]):null,Yi(4,4,Of.bind(null,n,t),e)}function Cc(){}function Rf(t,n){var e=Lt();n=n===void 0?null:n;var l=e.memoizedState;return n!==null&&Sc(n,l[1])?l[0]:(e.memoizedState=[t,n],t)}function Cf(t,n){var e=Lt();n=n===void 0?null:n;var l=e.memoizedState;if(n!==null&&Sc(n,l[1]))return l[0];if(l=t(),fl){xn(!0);try{t()}finally{xn(!1)}}return e.memoizedState=[l,n],l}function Uc(t,n,e){return e===void 0||(ce&1073741824)!==0&&(rt&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=Ur(),lt.lanes|=t,Ge|=t,e)}function Uf(t,n,e,l){return Sn(e,n)?e:Yl.current!==null?(t=Uc(t,e,l),Sn(t,n)||(Zt=!0),t):(ce&42)===0||(ce&1073741824)!==0&&(rt&261930)===0?(Zt=!0,t.memoizedState=e):(t=Ur(),lt.lanes|=t,Ge|=t,n)}function Gf(t,n,e,l,a){var i=G.p;G.p=i!==0&&8>i?i:8;var u=j.T,c={};j.T=c,Hc(t,!1,n,e);try{var f=a(),b=j.S;if(b!==null&&b(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=sg(f,l);wa(t,n,E,_n(t))}else wa(t,n,l,_n(t))}catch(_){wa(t,n,{then:function(){},status:"rejected",reason:_},_n())}finally{G.p=i,u!==null&&c.types!==null&&(u.types=c.types),j.T=u}}function pg(){}function Gc(t,n,e,l){if(t.tag!==5)throw Error(s(476));var a=Bf(t).queue;Gf(t,a,n,W,e===null?pg:function(){return Hf(t),e(l)})}function Bf(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:W},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oe,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hf(t){var n=Bf(t);n.next===null&&(n=t.alternate.memoizedState),wa(t,n.next.queue,{},_n())}function Bc(){return cn(ti)}function wf(){return Lt().memoizedState}function Nf(){return Lt().memoizedState}function hg(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=_n();t=Me(e);var l=Oe(n,t,e);l!==null&&(bn(l,n,e),Ca(l,n,e)),n={cache:fc()},t.payload=n;return}n=n.return}}function vg(t,n,e){var l=_n();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Qi(t)?Lf(n,e):(e=Pu(t,n,e,l),e!==null&&(bn(e,t,l),kf(e,n,l)))}function qf(t,n,e){var l=_n();wa(t,n,e,l)}function wa(t,n,e,l){var a={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Qi(t))Lf(n,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,c=i(u,e);if(a.hasEagerState=!0,a.eagerState=c,Sn(c,u))return ji(t,n,a,0),Dt===null&&Ai(),!1}catch{}finally{}if(e=Pu(t,n,a,l),e!==null)return bn(e,t,l),kf(e,n,l),!0}return!1}function Hc(t,n,e,l){if(l={lane:2,revertLane:po(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qi(t)){if(n)throw Error(s(479))}else n=Pu(t,e,l,2),n!==null&&bn(n,t,2)}function Qi(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Lf(t,n){Ql=Hi=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function kf(t,n,e){if((e&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,da(t,e)}}var Na={readContext:cn,use:qi,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Na.useEffectEvent=wt;var Yf={readContext:cn,use:qi,useCallback:function(t,n){return rn().memoizedState=[t,n===void 0?null:n],t},useContext:cn,useEffect:Ef,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,ki(4194308,4,Of.bind(null,n,t),e)},useLayoutEffect:function(t,n){return ki(4194308,4,t,n)},useInsertionEffect:function(t,n){ki(4,2,t,n)},useMemo:function(t,n){var e=rn();n=n===void 0?null:n;var l=t();if(fl){xn(!0);try{t()}finally{xn(!1)}}return e.memoizedState=[l,n],l},useReducer:function(t,n,e){var l=rn();if(e!==void 0){var a=e(n);if(fl){xn(!0);try{e(n)}finally{xn(!1)}}}else a=n;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=vg.bind(null,lt,t),[l.memoizedState,t]},useRef:function(t){var n=rn();return t={current:t},n.memoizedState=t},useState:function(t){t=Oc(t);var n=t.queue,e=qf.bind(null,lt,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:Cc,useDeferredValue:function(t,n){var e=rn();return Uc(e,t,n)},useTransition:function(){var t=Oc(!1);return t=Gf.bind(null,lt,t.queue,!0,!1),rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var l=lt,a=rn();if(mt){if(e===void 0)throw Error(s(407));e=e()}else{if(e=n(),Dt===null)throw Error(s(349));(rt&127)!==0||sf(l,n,e)}a.memoizedState=e;var i={value:e,getSnapshot:n};return a.queue=i,Ef(rf.bind(null,l,i,t),[t]),l.flags|=2048,Vl(9,{destroy:void 0},ff.bind(null,l,i,e,n),null),e},useId:function(){var t=rn(),n=Dt.identifierPrefix;if(mt){var e=Wn,l=Jn;e=(l&~(1<<32-nn(l)-1)).toString(32)+e,n="_"+n+"R_"+e,e=wi++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=fg++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bc,useFormState:xf,useActionState:xf,useOptimistic:function(t){var n=rn();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=Hc.bind(null,lt,!0,e),e.dispatch=n,[t,n]},useMemoCache:zc,useCacheRefresh:function(){return rn().memoizedState=hg.bind(null,lt)},useEffectEvent:function(t){var n=rn(),e={impl:t};return n.memoizedState=e,function(){if((St&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}},wc={readContext:cn,use:qi,useCallback:Rf,useContext:cn,useEffect:Rc,useImperativeHandle:Df,useInsertionEffect:_f,useLayoutEffect:Mf,useMemo:Cf,useReducer:Li,useRef:Tf,useState:function(){return Li(oe)},useDebugValue:Cc,useDeferredValue:function(t,n){var e=Lt();return Uf(e,_t.memoizedState,t,n)},useTransition:function(){var t=Li(oe)[0],n=Lt().memoizedState;return[typeof t=="boolean"?t:Ha(t),n]},useSyncExternalStore:of,useId:wf,useHostTransitionStatus:Bc,useFormState:Sf,useActionState:Sf,useOptimistic:function(t,n){var e=Lt();return mf(e,_t,t,n)},useMemoCache:zc,useCacheRefresh:Nf};wc.useEffectEvent=zf;var Qf={readContext:cn,use:qi,useCallback:Rf,useContext:cn,useEffect:Rc,useImperativeHandle:Df,useInsertionEffect:_f,useLayoutEffect:Mf,useMemo:Cf,useReducer:Mc,useRef:Tf,useState:function(){return Mc(oe)},useDebugValue:Cc,useDeferredValue:function(t,n){var e=Lt();return _t===null?Uc(e,t,n):Uf(e,_t.memoizedState,t,n)},useTransition:function(){var t=Mc(oe)[0],n=Lt().memoizedState;return[typeof t=="boolean"?t:Ha(t),n]},useSyncExternalStore:of,useId:wf,useHostTransitionStatus:Bc,useFormState:jf,useActionState:jf,useOptimistic:function(t,n){var e=Lt();return _t!==null?mf(e,_t,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:zc,useCacheRefresh:Nf};Qf.useEffectEvent=zf;function Nc(t,n,e,l){n=t.memoizedState,e=e(l,n),e=e==null?n:C({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var qc={enqueueSetState:function(t,n,e){t=t._reactInternals;var l=_n(),a=Me(l);a.payload=n,e!=null&&(a.callback=e),n=Oe(t,a,l),n!==null&&(bn(n,t,l),Ca(n,t,l))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var l=_n(),a=Me(l);a.tag=1,a.payload=n,e!=null&&(a.callback=e),n=Oe(t,a,l),n!==null&&(bn(n,t,l),Ca(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=_n(),l=Me(e);l.tag=2,n!=null&&(l.callback=n),n=Oe(t,l,e),n!==null&&(bn(n,t,e),Ca(n,t,e))}};function Xf(t,n,e,l,a,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):n.prototype&&n.prototype.isPureReactComponent?!Ta(e,l)||!Ta(a,i):!0}function Vf(t,n,e,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,l),n.state!==t&&qc.enqueueReplaceState(n,n.state,null)}function rl(t,n){var e=n;if("ref"in n){e={};for(var l in n)l!=="ref"&&(e[l]=n[l])}if(t=t.defaultProps){e===n&&(e=C({},e));for(var a in t)e[a]===void 0&&(e[a]=t[a])}return e}function Zf(t){Si(t)}function Kf(t){console.error(t)}function Jf(t){Si(t)}function Xi(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Wf(t,n,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Lc(t,n,e){return e=Me(e),e.tag=3,e.payload={element:null},e.callback=function(){Xi(t,n)},e}function If(t){return t=Me(t),t.tag=3,t}function Ff(t,n,e,l){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;t.payload=function(){return a(i)},t.callback=function(){Wf(n,e,l)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Wf(n,e,l),typeof a!="function"&&(Be===null?Be=new Set([this]):Be.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function bg(t,n,e,l,a){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=e.alternate,n!==null&&wl(n,e,a,!0),e=jn.current,e!==null){switch(e.tag){case 31:case 13:return Nn===null?eu():e.alternate===null&&Nt===0&&(Nt=3),e.flags&=-257,e.flags|=65536,e.lanes=a,l===Ri?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([l]):n.add(l),ro(t,l,a)),!1;case 22:return e.flags|=65536,l===Ri?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([l]):e.add(l)),ro(t,l,a)),!1}throw Error(s(435,e.tag))}return ro(t,l,a),eu(),!1}if(mt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,l!==ic&&(t=Error(s(422),{cause:l}),_a(Gn(t,e)))):(l!==ic&&(n=Error(s(423),{cause:l}),_a(Gn(n,e))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Gn(l,e),a=Lc(t.stateNode,l,a),hc(t,a),Nt!==4&&(Nt=2)),!1;var i=Error(s(520),{cause:l});if(i=Gn(i,e),Za===null?Za=[i]:Za.push(i),Nt!==4&&(Nt=2),n===null)return!0;l=Gn(l,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=a&-a,e.lanes|=t,t=Lc(e.stateNode,l,t),hc(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Be===null||!Be.has(i))))return e.flags|=65536,a&=-a,e.lanes|=a,a=If(a),Ff(a,t,e,l),hc(e,a),!1}e=e.return}while(e!==null);return!1}var kc=Error(s(461)),Zt=!1;function on(t,n,e,l){n.child=t===null?tf(n,null,e,l):sl(n,t.child,e,l)}function $f(t,n,e,l,a){e=e.render;var i=n.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return il(n),l=Ac(t,n,e,u,i,a),c=jc(),t!==null&&!Zt?(Tc(t,n,a),se(t,n,a)):(mt&&c&&lc(n),n.flags|=1,on(t,n,l,a),n.child)}function Pf(t,n,e,l,a){if(t===null){var i=e.type;return typeof i=="function"&&!tc(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,tr(t,n,i,l,a)):(t=Ei(e.type,null,l,n,n.mode,a),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!Wc(t,a)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ta,e(u,l)&&t.ref===n.ref)return se(t,n,a)}return n.flags|=1,t=le(i,l),t.ref=n.ref,t.return=n,n.child=t}function tr(t,n,e,l,a){if(t!==null){var i=t.memoizedProps;if(Ta(i,l)&&t.ref===n.ref)if(Zt=!1,n.pendingProps=l=i,Wc(t,a))(t.flags&131072)!==0&&(Zt=!0);else return n.lanes=t.lanes,se(t,n,a)}return Yc(t,n,e,l,a)}function nr(t,n,e,l){var a=l.children,i=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(l=n.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,n.child=null;return er(t,n,i,e,l)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Oi(n,i!==null?i.cachePool:null),i!==null?lf(n,i):bc(),af(n);else return l=n.lanes=536870912,er(t,n,i!==null?i.baseLanes|e:e,e,l)}else i!==null?(Oi(n,i.cachePool),lf(n,i),Re(),n.memoizedState=null):(t!==null&&Oi(n,null),bc(),Re());return on(t,n,a,e),n.child}function qa(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function er(t,n,e,l,a){var i=dc();return i=i===null?null:{parent:Xt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&Oi(n,null),bc(),af(n),t!==null&&wl(t,n,l,!0),n.childLanes=a,null}function Vi(t,n){return n=Ki({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function lr(t,n,e){return sl(n,t.child,null,e),t=Vi(n,n.pendingProps),t.flags|=2,Tn(n),n.memoizedState=null,t}function yg(t,n,e){var l=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(mt){if(l.mode==="hidden")return t=Vi(n,l),n.lanes=536870912,qa(null,t);if(xc(n),(t=Ct)?(t=pd(t,wn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:je!==null?{id:Jn,overflow:Wn}:null,retryLane:536870912,hydrationErrors:null},e=qs(t),e.return=n,n.child=e,un=n,Ct=null)):t=null,t===null)throw Ee(n);return n.lanes=536870912,null}return Vi(n,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(xc(n),a)if(n.flags&256)n.flags&=-257,n=lr(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Zt||wl(t,n,e,!1),a=(e&t.childLanes)!==0,Zt||a){if(l=Dt,l!==null&&(u=ga(l,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,nl(t,u),bn(l,t,u),kc;eu(),n=lr(t,n,e)}else t=i.treeContext,Ct=qn(u.nextSibling),un=n,mt=!0,Te=null,wn=!1,t!==null&&Ys(n,t),n=Vi(n,l),n.flags|=4096;return n}return t=le(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zi(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function Yc(t,n,e,l,a){return il(n),e=Ac(t,n,e,l,void 0,a),l=jc(),t!==null&&!Zt?(Tc(t,n,a),se(t,n,a)):(mt&&l&&lc(n),n.flags|=1,on(t,n,e,a),n.child)}function ar(t,n,e,l,a,i){return il(n),n.updateQueue=null,e=cf(n,l,e,a),uf(t),l=jc(),t!==null&&!Zt?(Tc(t,n,i),se(t,n,i)):(mt&&l&&lc(n),n.flags|=1,on(t,n,e,i),n.child)}function ir(t,n,e,l,a){if(il(n),n.stateNode===null){var i=Ul,u=e.contextType;typeof u=="object"&&u!==null&&(i=cn(u)),i=new e(l,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qc,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=l,i.state=n.memoizedState,i.refs={},mc(n),u=e.contextType,i.context=typeof u=="object"&&u!==null?cn(u):Ul,i.state=n.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Nc(n,e,u,l),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&qc.enqueueReplaceState(i,i.state,null),Ga(n,l,i,a),Ua(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){i=n.stateNode;var c=n.memoizedProps,f=rl(e,c);i.props=f;var b=i.context,E=e.contextType;u=Ul,typeof E=="object"&&E!==null&&(u=cn(E));var _=e.getDerivedStateFromProps;E=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||b!==u)&&Vf(n,i,l,u),_e=!1;var y=n.memoizedState;i.state=y,Ga(n,l,i,a),Ua(),b=n.memoizedState,c||y!==b||_e?(typeof _=="function"&&(Nc(n,e,_,l),b=n.memoizedState),(f=_e||Xf(n,e,f,l,y,b,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=b),i.props=l,i.state=b,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{i=n.stateNode,pc(t,n),u=n.memoizedProps,E=rl(e,u),i.props=E,_=n.pendingProps,y=i.context,b=e.contextType,f=Ul,typeof b=="object"&&b!==null&&(f=cn(b)),c=e.getDerivedStateFromProps,(b=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==_||y!==f)&&Vf(n,i,l,f),_e=!1,y=n.memoizedState,i.state=y,Ga(n,l,i,a),Ua();var S=n.memoizedState;u!==_||y!==S||_e||t!==null&&t.dependencies!==null&&_i(t.dependencies)?(typeof c=="function"&&(Nc(n,e,c,l),S=n.memoizedState),(E=_e||Xf(n,e,E,l,y,S,f)||t!==null&&t.dependencies!==null&&_i(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,f)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=S),i.props=l,i.state=S,i.context=f,l=E):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(n.flags|=1024),l=!1)}return i=l,Zi(t,n),l=(n.flags&128)!==0,i||l?(i=n.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&l?(n.child=sl(n,t.child,null,a),n.child=sl(n,null,e,a)):on(t,n,e,a),n.memoizedState=i.state,t=n.child):t=se(t,n,a),t}function ur(t,n,e,l){return ll(),n.flags|=256,on(t,n,e,l),n.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(t){return{baseLanes:t,cachePool:Js()}}function Vc(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=zn),t}function cr(t,n,e){var l=n.pendingProps,a=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),u&&(a=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,t===null){if(mt){if(a?De(n):Re(),(t=Ct)?(t=pd(t,wn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:je!==null?{id:Jn,overflow:Wn}:null,retryLane:536870912,hydrationErrors:null},e=qs(t),e.return=n,n.child=e,un=n,Ct=null)):t=null,t===null)throw Ee(n);return Mo(t)?n.lanes=32:n.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(Re(),a=n.mode,c=Ki({mode:"hidden",children:c},a),l=el(l,a,e,null),c.return=n,l.return=n,c.sibling=l,n.child=c,l=n.child,l.memoizedState=Xc(e),l.childLanes=Vc(t,u,e),n.memoizedState=Qc,qa(null,l)):(De(n),Zc(n,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)n.flags&256?(De(n),n.flags&=-257,n=Kc(t,n,e)):n.memoizedState!==null?(Re(),n.child=t.child,n.flags|=128,n=null):(Re(),c=l.fallback,a=n.mode,l=Ki({mode:"visible",children:l.children},a),c=el(c,a,e,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,sl(n,t.child,null,e),l=n.child,l.memoizedState=Xc(e),l.childLanes=Vc(t,u,e),n.memoizedState=Qc,n=qa(null,l));else if(De(n),Mo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var b=u.dgst;u=b,l=Error(s(419)),l.stack="",l.digest=u,_a({value:l,source:null,stack:null}),n=Kc(t,n,e)}else if(Zt||wl(t,n,e,!1),u=(e&t.childLanes)!==0,Zt||u){if(u=Dt,u!==null&&(l=ga(u,e),l!==0&&l!==f.retryLane))throw f.retryLane=l,nl(t,l),bn(u,t,l),kc;_o(c)||eu(),n=Kc(t,n,e)}else _o(c)?(n.flags|=192,n.child=t.child,n=null):(t=f.treeContext,Ct=qn(c.nextSibling),un=n,mt=!0,Te=null,wn=!1,t!==null&&Ys(n,t),n=Zc(n,l.children),n.flags|=4096);return n}return a?(Re(),c=l.fallback,a=n.mode,f=t.child,b=f.sibling,l=le(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,b!==null?c=le(b,c):(c=el(c,a,e,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,qa(null,l),l=n.child,c=t.child.memoizedState,c===null?c=Xc(e):(a=c.cachePool,a!==null?(f=Xt._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=Js(),c={baseLanes:c.baseLanes|e,cachePool:a}),l.memoizedState=c,l.childLanes=Vc(t,u,e),n.memoizedState=Qc,qa(t.child,l)):(De(n),e=t.child,t=e.sibling,e=le(e,{mode:"visible",children:l.children}),e.return=n,e.sibling=null,t!==null&&(u=n.deletions,u===null?(n.deletions=[t],n.flags|=16):u.push(t)),n.child=e,n.memoizedState=null,e)}function Zc(t,n){return n=Ki({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ki(t,n){return t=An(22,t,null,n),t.lanes=0,t}function Kc(t,n,e){return sl(n,t.child,null,e),t=Zc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function or(t,n,e){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),oc(t.return,n,e)}function Jc(t,n,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:a,treeForkCount:i}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=e,u.tailMode=a,u.treeForkCount=i)}function sr(t,n,e){var l=n.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=qt.current,c=(u&2)!==0;if(c?(u=u&1|2,n.flags|=128):u&=1,N(qt,u),on(t,n,l,e),l=mt?za:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&or(t,e,n);else if(t.tag===19)or(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(e=n.child,a=null;e!==null;)t=e.alternate,t!==null&&Bi(t)===null&&(a=e),e=e.sibling;e=a,e===null?(a=n.child,n.child=null):(a=e.sibling,e.sibling=null),Jc(n,!1,a,e,i,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=n.child,n.child=null;a!==null;){if(t=a.alternate,t!==null&&Bi(t)===null){n.child=a;break}t=a.sibling,a.sibling=e,e=a,a=t}Jc(n,!0,e,null,i,l);break;case"together":Jc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function se(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Ge|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(wl(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,e=le(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=le(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function Wc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_i(t)))}function xg(t,n,e){switch(n.tag){case 3:$t(n,n.stateNode.containerInfo),ze(n,Xt,t.memoizedState.cache),ll();break;case 27:case 5:Ze(n);break;case 4:$t(n,n.stateNode.containerInfo);break;case 10:ze(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(De(n),n.flags|=128,null):(e&n.child.childLanes)!==0?cr(t,n,e):(De(n),t=se(t,n,e),t!==null?t.sibling:null);De(n);break;case 19:var a=(t.flags&128)!==0;if(l=(e&n.childLanes)!==0,l||(wl(t,n,e,!1),l=(e&n.childLanes)!==0),a){if(l)return sr(t,n,e);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(qt,qt.current),l)break;return null;case 22:return n.lanes=0,nr(t,n,e,n.pendingProps);case 24:ze(n,Xt,t.memoizedState.cache)}return se(t,n,e)}function fr(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)Zt=!0;else{if(!Wc(t,e)&&(n.flags&128)===0)return Zt=!1,xg(t,n,e);Zt=(t.flags&131072)!==0}else Zt=!1,mt&&(n.flags&1048576)!==0&&ks(n,za,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(t=cl(n.elementType),n.type=t,typeof t=="function")tc(t)?(l=rl(t,l),n.tag=1,n=ir(null,n,t,l,e)):(n.tag=0,n=Yc(null,n,t,l,e));else{if(t!=null){var a=t.$$typeof;if(a===L){n.tag=11,n=$f(null,n,t,l,e);break t}else if(a===w){n.tag=14,n=Pf(null,n,t,l,e);break t}}throw n=ct(t)||t,Error(s(306,n,""))}}return n;case 0:return Yc(t,n,n.type,n.pendingProps,e);case 1:return l=n.type,a=rl(l,n.pendingProps),ir(t,n,l,a,e);case 3:t:{if($t(n,n.stateNode.containerInfo),t===null)throw Error(s(387));l=n.pendingProps;var i=n.memoizedState;a=i.element,pc(t,n),Ga(n,l,null,e);var u=n.memoizedState;if(l=u.cache,ze(n,Xt,l),l!==i.cache&&sc(n,[Xt],e,!0),Ua(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=ur(t,n,l,e);break t}else if(l!==a){a=Gn(Error(s(424)),n),_a(a),n=ur(t,n,l,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=qn(t.firstChild),un=n,mt=!0,Te=null,wn=!0,e=tf(n,null,l,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(ll(),l===a){n=se(t,n,e);break t}on(t,n,l,e)}n=n.child}return n;case 26:return Zi(t,n),t===null?(e=Sd(n.type,null,n.pendingProps,null))?n.memoizedState=e:mt||(e=n.type,t=n.pendingProps,l=su(it.current).createElement(e),l[Yt]=n,l[an]=t,sn(l,e,t),en(l),n.stateNode=l):n.memoizedState=Sd(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ze(n),t===null&&mt&&(l=n.stateNode=bd(n.type,n.pendingProps,it.current),un=n,wn=!0,a=Ct,qe(n.type)?(Oo=a,Ct=qn(l.firstChild)):Ct=a),on(t,n,n.pendingProps.children,e),Zi(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&mt&&((a=l=Ct)&&(l=Ig(l,n.type,n.pendingProps,wn),l!==null?(n.stateNode=l,un=n,Ct=qn(l.firstChild),wn=!1,a=!0):a=!1),a||Ee(n)),Ze(n),a=n.type,i=n.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,To(a,i)?l=null:u!==null&&To(a,u)&&(n.flags|=32),n.memoizedState!==null&&(a=Ac(t,n,rg,null,null,e),ti._currentValue=a),Zi(t,n),on(t,n,l,e),n.child;case 6:return t===null&&mt&&((t=e=Ct)&&(e=Fg(e,n.pendingProps,wn),e!==null?(n.stateNode=e,un=n,Ct=null,t=!0):t=!1),t||Ee(n)),null;case 13:return cr(t,n,e);case 4:return $t(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=sl(n,null,l,e):on(t,n,l,e),n.child;case 11:return $f(t,n,n.type,n.pendingProps,e);case 7:return on(t,n,n.pendingProps,e),n.child;case 8:return on(t,n,n.pendingProps.children,e),n.child;case 12:return on(t,n,n.pendingProps.children,e),n.child;case 10:return l=n.pendingProps,ze(n,n.type,l.value),on(t,n,l.children,e),n.child;case 9:return a=n.type._context,l=n.pendingProps.children,il(n),a=cn(a),l=l(a),n.flags|=1,on(t,n,l,e),n.child;case 14:return Pf(t,n,n.type,n.pendingProps,e);case 15:return tr(t,n,n.type,n.pendingProps,e);case 19:return sr(t,n,e);case 31:return yg(t,n,e);case 22:return nr(t,n,e,n.pendingProps);case 24:return il(n),l=cn(Xt),t===null?(a=dc(),a===null&&(a=Dt,i=fc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=e),a=i),n.memoizedState={parent:l,cache:a},mc(n),ze(n,Xt,a)):((t.lanes&e)!==0&&(pc(t,n),Ga(n,null,null,e),Ua()),a=t.memoizedState,i=n.memoizedState,a.parent!==l?(a={parent:l,cache:l},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),ze(n,Xt,l)):(l=i.cache,ze(n,Xt,l),l!==a.cache&&sc(n,[Xt],e,!0))),on(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fe(t){t.flags|=4}function Ic(t,n,e,l,a){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(wr())t.flags|=8192;else throw ol=Ri,gc}else t.flags&=-16777217}function rr(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zd(n))if(wr())t.flags|=8192;else throw ol=Ri,gc}function Ji(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?fa():536870912,t.lanes|=n,Wl|=n)}function La(t,n){if(!mt)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Ut(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(n)for(var a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=e,n}function Sg(t,n,e){var l=n.pendingProps;switch(ac(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(n),null;case 1:return Ut(n),null;case 3:return e=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ue(Xt),Ht(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Hl(n)?fe(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uc())),Ut(n),null;case 26:var a=n.type,i=n.memoizedState;return t===null?(fe(n),i!==null?(Ut(n),rr(n,i)):(Ut(n),Ic(n,a,null,l,e))):i?i!==t.memoizedState?(fe(n),Ut(n),rr(n,i)):(Ut(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&fe(n),Ut(n),Ic(n,a,t,l,e)),null;case 27:if(Ke(n),e=it.current,a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&fe(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Ut(n),null}t=Y.current,Hl(n)?Qs(n):(t=bd(a,l,e),n.stateNode=t,fe(n))}return Ut(n),null;case 5:if(Ke(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&fe(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Ut(n),null}if(i=Y.current,Hl(n))Qs(n);else{var u=su(it.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[Yt]=n,i[an]=l;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=i;t:switch(sn(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&fe(n)}}return Ut(n),Ic(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&fe(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(t=it.current,Hl(n)){if(t=n.stateNode,e=n.memoizedProps,l=null,a=un,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Yt]=n,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||cd(t.nodeValue,e)),t||Ee(n,!0)}else t=su(t).createTextNode(l),t[Yt]=n,n.stateNode=t}return Ut(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(l=Hl(n),e!==null){if(t===null){if(!l)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Yt]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ut(n),t=!1}else e=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(Tn(n),n):(Tn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ut(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Hl(n),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(s(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Yt]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ut(n),a=!1}else a=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(Tn(n),n):(Tn(n),null)}return Tn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=l!==null,t=t!==null&&t.memoizedState!==null,e&&(l=n.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),Ji(n,n.updateQueue),Ut(n),null);case 4:return Ht(),t===null&&yo(n.stateNode.containerInfo),Ut(n),null;case 10:return ue(n.type),Ut(n),null;case 19:if(M(qt),l=n.memoizedState,l===null)return Ut(n),null;if(a=(n.flags&128)!==0,i=l.rendering,i===null)if(a)La(l,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=Bi(t),i!==null){for(n.flags|=128,La(l,!1),t=i.updateQueue,n.updateQueue=t,Ji(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Ns(e,t),e=e.sibling;return N(qt,qt.current&1|2),mt&&ae(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&kt()>Pi&&(n.flags|=128,a=!0,La(l,!1),n.lanes=4194304)}else{if(!a)if(t=Bi(i),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,Ji(n,t),La(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!mt)return Ut(n),null}else 2*kt()-l.renderingStartTime>Pi&&e!==536870912&&(n.flags|=128,a=!0,La(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,e=qt.current,N(qt,a?e&1|2:e&1),mt&&ae(n,l.treeForkCount),t):(Ut(n),null);case 22:case 23:return Tn(n),yc(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(e&536870912)!==0&&(n.flags&128)===0&&(Ut(n),n.subtreeFlags&6&&(n.flags|=8192)):Ut(n),e=n.updateQueue,e!==null&&Ji(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==e&&(n.flags|=2048),t!==null&&M(ul),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),ue(Xt),Ut(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ag(t,n){switch(ac(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ue(Xt),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(Tn(n),n.alternate===null)throw Error(s(340));ll()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Tn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ll()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return M(qt),null;case 4:return Ht(),null;case 10:return ue(n.type),null;case 22:case 23:return Tn(n),yc(),t!==null&&M(ul),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ue(Xt),null;case 25:return null;default:return null}}function dr(t,n){switch(ac(n),n.tag){case 3:ue(Xt),Ht();break;case 26:case 27:case 5:Ke(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Tn(n);break;case 13:Tn(n);break;case 19:M(qt);break;case 10:ue(n.type);break;case 22:case 23:Tn(n),yc(),t!==null&&M(ul);break;case 24:ue(Xt)}}function ka(t,n){try{var e=n.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var a=l.next;e=a;do{if((e.tag&t)===t){l=void 0;var i=e.create,u=e.inst;l=i(),u.destroy=l}e=e.next}while(e!==a)}}catch(c){Et(n,n.return,c)}}function Ce(t,n,e){try{var l=n.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=n;var f=e,b=c;try{b()}catch(E){Et(a,f,E)}}}l=l.next}while(l!==i)}}catch(E){Et(n,n.return,E)}}function gr(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{ef(n,e)}catch(l){Et(t,t.return,l)}}}function mr(t,n,e){e.props=rl(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){Et(t,n,l)}}function Ya(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(a){Et(t,n,a)}}function In(t,n){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(a){Et(t,n,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){Et(t,n,a)}else e.current=null}function pr(t){var n=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(a){Et(t,t.return,a)}}function Fc(t,n,e){try{var l=t.stateNode;Xg(l,t.type,e,n),l[an]=n}catch(a){Et(t,t.return,a)}}function hr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qe(t.type)||t.tag===4}function $c(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=ne));else if(l!==4&&(l===27&&qe(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Pc(t,n,e),t=t.sibling;t!==null;)Pc(t,n,e),t=t.sibling}function Wi(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(l!==4&&(l===27&&qe(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Wi(t,n,e),t=t.sibling;t!==null;)Wi(t,n,e),t=t.sibling}function vr(t){var n=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);sn(n,l,e),n[Yt]=t,n[an]=e}catch(i){Et(t,t.return,i)}}var re=!1,Kt=!1,to=!1,br=typeof WeakSet=="function"?WeakSet:Set,ln=null;function jg(t,n){if(t=t.containerInfo,Ao=hu,t=Os(t),Ku(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,c=-1,f=-1,b=0,E=0,_=t,y=null;n:for(;;){for(var S;_!==e||a!==0&&_.nodeType!==3||(c=u+a),_!==i||l!==0&&_.nodeType!==3||(f=u+l),_.nodeType===3&&(u+=_.nodeValue.length),(S=_.firstChild)!==null;)y=_,_=S;for(;;){if(_===t)break n;if(y===e&&++b===a&&(c=u),y===i&&++E===l&&(f=u),(S=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=S}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(jo={focusedElem:t,selectionRange:e},hu=!1,ln=n;ln!==null;)if(n=ln,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ln=t;else for(;ln!==null;){switch(n=ln,i=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)a=t[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,a=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var Q=rl(e.type,a);t=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(I){Et(e,e.return,I)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)zo(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,ln=t;break}ln=n.return}}function yr(t,n,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ge(t,e),l&4&&ka(5,e);break;case 1:if(ge(t,e),l&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(u){Et(e,e.return,u)}else{var a=rl(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(a,n,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Et(e,e.return,u)}}l&64&&gr(e),l&512&&Ya(e,e.return);break;case 3:if(ge(t,e),l&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{ef(t,n)}catch(u){Et(e,e.return,u)}}break;case 27:n===null&&l&4&&vr(e);case 26:case 5:ge(t,e),n===null&&l&4&&pr(e),l&512&&Ya(e,e.return);break;case 12:ge(t,e);break;case 31:ge(t,e),l&4&&Ar(t,e);break;case 13:ge(t,e),l&4&&jr(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Cg.bind(null,e),$g(t,e))));break;case 22:if(l=e.memoizedState!==null||re,!l){n=n!==null&&n.memoizedState!==null||Kt,a=re;var i=Kt;re=l,(Kt=n)&&!i?me(t,e,(e.subtreeFlags&8772)!==0):ge(t,e),re=a,Kt=i}break;case 30:break;default:ge(t,e)}}function xr(t){var n=t.alternate;n!==null&&(t.alternate=null,xr(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Bt=null,mn=!1;function de(t,n,e){for(e=e.child;e!==null;)Sr(t,n,e),e=e.sibling}function Sr(t,n,e){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Zn,e)}catch{}switch(e.tag){case 26:Kt||In(e,n),de(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Kt||In(e,n);var l=Bt,a=mn;qe(e.type)&&(Bt=e.stateNode,mn=!1),de(t,n,e),Fa(e.stateNode),Bt=l,mn=a;break;case 5:Kt||In(e,n);case 6:if(l=Bt,a=mn,Bt=null,de(t,n,e),Bt=l,mn=a,Bt!==null)if(mn)try{(Bt.nodeType===9?Bt.body:Bt.nodeName==="HTML"?Bt.ownerDocument.body:Bt).removeChild(e.stateNode)}catch(i){Et(e,n,i)}else try{Bt.removeChild(e.stateNode)}catch(i){Et(e,n,i)}break;case 18:Bt!==null&&(mn?(t=Bt,gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),la(t)):gd(Bt,e.stateNode));break;case 4:l=Bt,a=mn,Bt=e.stateNode.containerInfo,mn=!0,de(t,n,e),Bt=l,mn=a;break;case 0:case 11:case 14:case 15:Ce(2,e,n),Kt||Ce(4,e,n),de(t,n,e);break;case 1:Kt||(In(e,n),l=e.stateNode,typeof l.componentWillUnmount=="function"&&mr(e,n,l)),de(t,n,e);break;case 21:de(t,n,e);break;case 22:Kt=(l=Kt)||e.memoizedState!==null,de(t,n,e),Kt=l;break;default:de(t,n,e)}}function Ar(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{la(t)}catch(e){Et(n,n.return,e)}}}function jr(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{la(t)}catch(e){Et(n,n.return,e)}}function Tg(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new br),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new br),n;default:throw Error(s(435,t.tag))}}function Ii(t,n){var e=Tg(t);n.forEach(function(l){if(!e.has(l)){e.add(l);var a=Ug.bind(null,t,l);l.then(a,a)}})}function pn(t,n){var e=n.deletions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l],i=t,u=n,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(qe(c.type)){Bt=c.stateNode,mn=!1;break t}break;case 5:Bt=c.stateNode,mn=!1;break t;case 3:case 4:Bt=c.stateNode.containerInfo,mn=!0;break t}c=c.return}if(Bt===null)throw Error(s(160));Sr(i,u,a),Bt=null,mn=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tr(n,t),n=n.sibling}var Xn=null;function Tr(t,n){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(n,t),hn(t),l&4&&(Ce(3,t,t.return),ka(3,t),Ce(5,t,t.return));break;case 1:pn(n,t),hn(t),l&512&&(Kt||e===null||In(e,e.return)),l&64&&re&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var a=Xn;if(pn(n,t),hn(t),l&512&&(Kt||e===null||In(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,a=a.ownerDocument||a;n:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[vt]||i[Yt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),sn(i,l,e),i[Yt]=t,en(i),l=i;break t;case"link":var u=Td("link","href",a).get(l+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break n}}i=a.createElement(l),sn(i,l,e),a.head.appendChild(i);break;case"meta":if(u=Td("meta","content",a).get(l+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break n}}i=a.createElement(l),sn(i,l,e),a.head.appendChild(i);break;default:throw Error(s(468,l))}i[Yt]=t,en(i),l=i}t.stateNode=l}else Ed(a,t.type,t.stateNode);else t.stateNode=jd(a,l,t.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?Ed(a,t.type,t.stateNode):jd(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Fc(t,t.memoizedProps,e.memoizedProps)}break;case 27:pn(n,t),hn(t),l&512&&(Kt||e===null||In(e,e.return)),e!==null&&l&4&&Fc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(pn(n,t),hn(t),l&512&&(Kt||e===null||In(e,e.return)),t.flags&32){a=t.stateNode;try{zl(a,"")}catch(Q){Et(t,t.return,Q)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Fc(t,a,e!==null?e.memoizedProps:a)),l&1024&&(to=!0);break;case 6:if(pn(n,t),hn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(Q){Et(t,t.return,Q)}}break;case 3:if(du=null,a=Xn,Xn=fu(n.containerInfo),pn(n,t),Xn=a,hn(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{la(n.containerInfo)}catch(Q){Et(t,t.return,Q)}to&&(to=!1,Er(t));break;case 4:l=Xn,Xn=fu(t.stateNode.containerInfo),pn(n,t),hn(t),Xn=l;break;case 12:pn(n,t),hn(t);break;case 31:pn(n,t),hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 13:pn(n,t),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&($i=kt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 22:a=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,b=re,E=Kt;if(re=b||a,Kt=E||f,pn(n,t),Kt=E,re=b,hn(t),l&8192)t:for(n=t.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(e===null||f||re||Kt||dl(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){f=e=n;try{if(i=f.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var _=f.memoizedProps.style,y=_!=null&&_.hasOwnProperty("display")?_.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(Q){Et(f,f.return,Q)}}}else if(n.tag===6){if(e===null){f=n;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(Q){Et(f,f.return,Q)}}}else if(n.tag===18){if(e===null){f=n;try{var S=f.stateNode;a?md(S,!0):md(f.stateNode,!1)}catch(Q){Et(f,f.return,Q)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,Ii(t,e))));break;case 19:pn(n,t),hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 30:break;case 21:break;default:pn(n,t),hn(t)}}function hn(t){var n=t.flags;if(n&2){try{for(var e,l=t.return;l!==null;){if(hr(l)){e=l;break}l=l.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var a=e.stateNode,i=$c(t);Wi(t,i,a);break;case 5:var u=e.stateNode;e.flags&32&&(zl(u,""),e.flags&=-33);var c=$c(t);Wi(t,c,u);break;case 3:case 4:var f=e.stateNode.containerInfo,b=$c(t);Pc(t,b,f);break;default:throw Error(s(161))}}catch(E){Et(t,t.return,E)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Er(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Er(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ge(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yr(t,n.alternate,n),n=n.sibling}function dl(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ce(4,n,n.return),dl(n);break;case 1:In(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&mr(n,n.return,e),dl(n);break;case 27:Fa(n.stateNode);case 26:case 5:In(n,n.return),dl(n);break;case 22:n.memoizedState===null&&dl(n);break;case 30:dl(n);break;default:dl(n)}t=t.sibling}}function me(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,a=t,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:me(a,i,e),ka(4,i);break;case 1:if(me(a,i,e),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(b){Et(l,l.return,b)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)nf(f[a],c)}catch(b){Et(l,l.return,b)}}e&&u&64&&gr(i),Ya(i,i.return);break;case 27:vr(i);case 26:case 5:me(a,i,e),e&&l===null&&u&4&&pr(i),Ya(i,i.return);break;case 12:me(a,i,e);break;case 31:me(a,i,e),e&&u&4&&Ar(a,i);break;case 13:me(a,i,e),e&&u&4&&jr(a,i);break;case 22:i.memoizedState===null&&me(a,i,e),Ya(i,i.return);break;case 30:break;default:me(a,i,e)}n=n.sibling}}function no(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ma(e))}function eo(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ma(t))}function Vn(t,n,e,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zr(t,n,e,l),n=n.sibling}function zr(t,n,e,l){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(t,n,e,l),a&2048&&ka(9,n);break;case 1:Vn(t,n,e,l);break;case 3:Vn(t,n,e,l),a&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ma(t)));break;case 12:if(a&2048){Vn(t,n,e,l),t=n.stateNode;try{var i=n.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){Et(n,n.return,f)}}else Vn(t,n,e,l);break;case 31:Vn(t,n,e,l);break;case 13:Vn(t,n,e,l);break;case 23:break;case 22:i=n.stateNode,u=n.alternate,n.memoizedState!==null?i._visibility&2?Vn(t,n,e,l):Qa(t,n):i._visibility&2?Vn(t,n,e,l):(i._visibility|=2,Zl(t,n,e,l,(n.subtreeFlags&10256)!==0||!1)),a&2048&&no(u,n);break;case 24:Vn(t,n,e,l),a&2048&&eo(n.alternate,n);break;default:Vn(t,n,e,l)}}function Zl(t,n,e,l,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=t,u=n,c=e,f=l,b=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(i,u,c,f,a),ka(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&2?Zl(i,u,c,f,a):Qa(i,u):(E._visibility|=2,Zl(i,u,c,f,a)),a&&b&2048&&no(u.alternate,u);break;case 24:Zl(i,u,c,f,a),a&&b&2048&&eo(u.alternate,u);break;default:Zl(i,u,c,f,a)}n=n.sibling}}function Qa(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,l=n,a=l.flags;switch(l.tag){case 22:Qa(e,l),a&2048&&no(l.alternate,l);break;case 24:Qa(e,l),a&2048&&eo(l.alternate,l);break;default:Qa(e,l)}n=n.sibling}}var Xa=8192;function Kl(t,n,e){if(t.subtreeFlags&Xa)for(t=t.child;t!==null;)_r(t,n,e),t=t.sibling}function _r(t,n,e){switch(t.tag){case 26:Kl(t,n,e),t.flags&Xa&&t.memoizedState!==null&&f1(e,Xn,t.memoizedState,t.memoizedProps);break;case 5:Kl(t,n,e);break;case 3:case 4:var l=Xn;Xn=fu(t.stateNode.containerInfo),Kl(t,n,e),Xn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Xa,Xa=16777216,Kl(t,n,e),Xa=l):Kl(t,n,e));break;default:Kl(t,n,e)}}function Mr(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Va(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];ln=l,Dr(l,t)}Mr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Or(t),t=t.sibling}function Or(t){switch(t.tag){case 0:case 11:case 15:Va(t),t.flags&2048&&Ce(9,t,t.return);break;case 3:Va(t);break;case 12:Va(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fi(t)):Va(t);break;default:Va(t)}}function Fi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];ln=l,Dr(l,t)}Mr(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ce(8,n,n.return),Fi(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,Fi(n));break;default:Fi(n)}t=t.sibling}}function Dr(t,n){for(;ln!==null;){var e=ln;switch(e.tag){case 0:case 11:case 15:Ce(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ma(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,ln=l;else t:for(e=t;ln!==null;){l=ln;var a=l.sibling,i=l.return;if(xr(l),l===e){ln=null;break t}if(a!==null){a.return=i,ln=a;break t}ln=i}}}var Eg={getCacheForType:function(t){var n=cn(Xt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return cn(Xt).controller.signal}},zg=typeof WeakMap=="function"?WeakMap:Map,St=0,Dt=null,st=null,rt=0,Tt=0,En=null,Ue=!1,Jl=!1,lo=!1,pe=0,Nt=0,Ge=0,gl=0,ao=0,zn=0,Wl=0,Za=null,vn=null,io=!1,$i=0,Rr=0,Pi=1/0,tu=null,Be=null,Ft=0,He=null,Il=null,he=0,uo=0,co=null,Cr=null,Ka=0,oo=null;function _n(){return(St&2)!==0&&rt!==0?rt&-rt:j.T!==null?po():ma()}function Ur(){if(zn===0)if((rt&536870912)===0||mt){var t=dn;dn<<=1,(dn&3932160)===0&&(dn=262144),zn=t}else zn=536870912;return t=jn.current,t!==null&&(t.flags|=32),zn}function bn(t,n,e){(t===Dt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(Fl(t,0),we(t,rt,zn,!1)),xe(t,e),((St&2)===0||t!==Dt)&&(t===Dt&&((St&2)===0&&(gl|=e),Nt===4&&we(t,rt,zn,!1)),Fn(t))}function Gr(t,n,e){if((St&6)!==0)throw Error(s(327));var l=!e&&(n&127)===0&&(n&t.expiredLanes)===0||ye(t,n),a=l?Og(t,n):fo(t,n,!0),i=l;do{if(a===0){Jl&&!l&&we(t,n,0,!1);break}else{if(e=t.current.alternate,i&&!_g(e)){a=fo(t,n,!1),i=!1;continue}if(a===2){if(i=n,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;t:{var c=t;a=Za;var f=c.current.memoizedState.isDehydrated;if(f&&(Fl(c,u).flags|=256),u=fo(c,u,!1),u!==2){if(lo&&!f){c.errorRecoveryDisabledLanes|=i,gl|=i,a=4;break t}i=vn,vn=a,i!==null&&(vn===null?vn=i:vn.push.apply(vn,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Fl(t,0),we(t,n,0,!0);break}t:{switch(l=t,i=a,i){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:we(l,n,zn,!Ue);break t;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(a=$i+300-kt(),10<a)){if(we(l,n,zn,!Ue),Ie(l,0,!0)!==0)break t;he=n,l.timeoutHandle=rd(Br.bind(null,l,e,vn,tu,io,n,zn,gl,Wl,Ue,i,"Throttled",-0,0),a);break t}Br(l,e,vn,tu,io,n,zn,gl,Wl,Ue,i,null,-0,0)}}break}while(!0);Fn(t)}function Br(t,n,e,l,a,i,u,c,f,b,E,_,y,S){if(t.timeoutHandle=-1,_=n.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ne},_r(n,i,_);var Q=(i&62914560)===i?$i-kt():(i&4194048)===i?Rr-kt():0;if(Q=r1(_,Q),Q!==null){he=i,t.cancelPendingCommit=Q(Qr.bind(null,t,n,i,e,l,a,u,c,f,E,_,null,y,S)),we(t,i,u,!b);return}}Qr(t,n,i,e,l,a,u,c,f)}function _g(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var a=e[l],i=a.getSnapshot;a=a.value;try{if(!Sn(i(),a))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function we(t,n,e,l){n&=~ao,n&=~gl,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var a=n;0<a;){var i=31-nn(a),u=1<<i;l[i]=-1,a&=~u}e!==0&&ra(t,e,n)}function nu(){return(St&6)===0?(Ja(0),!1):!0}function so(){if(st!==null){if(Tt===0)var t=st.return;else t=st,ie=al=null,Ec(t),kl=null,Da=0,t=st;for(;t!==null;)dr(t.alternate,t),t=t.return;st=null}}function Fl(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Kg(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),he=0,so(),Dt=t,st=e=le(t.current,null),rt=n,Tt=0,En=null,Ue=!1,Jl=ye(t,n),lo=!1,Wl=zn=ao=gl=Ge=Nt=0,vn=Za=null,io=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var a=31-nn(l),i=1<<a;n|=t[a],l&=~i}return pe=n,Ai(),e}function Hr(t,n){lt=null,j.H=Na,n===Ll||n===Di?(n=Fs(),Tt=3):n===gc?(n=Fs(),Tt=4):Tt=n===kc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,En=n,st===null&&(Nt=1,Xi(t,Gn(n,t.current)))}function wr(){var t=jn.current;return t===null?!0:(rt&4194048)===rt?Nn===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Nn:!1}function Nr(){var t=j.H;return j.H=Na,t===null?Na:t}function qr(){var t=j.A;return j.A=Eg,t}function eu(){Nt=4,Ue||(rt&4194048)!==rt&&jn.current!==null||(Jl=!0),(Ge&134217727)===0&&(gl&134217727)===0||Dt===null||we(Dt,rt,zn,!1)}function fo(t,n,e){var l=St;St|=2;var a=Nr(),i=qr();(Dt!==t||rt!==n)&&(tu=null,Fl(t,n)),n=!1;var u=Nt;t:do try{if(Tt!==0&&st!==null){var c=st,f=En;switch(Tt){case 8:so(),u=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var b=Tt;if(Tt=0,En=null,$l(t,c,f,b),e&&Jl){u=0;break t}break;default:b=Tt,Tt=0,En=null,$l(t,c,f,b)}}Mg(),u=Nt;break}catch(E){Hr(t,E)}while(!0);return n&&t.shellSuspendCounter++,ie=al=null,St=l,j.H=a,j.A=i,st===null&&(Dt=null,rt=0,Ai()),u}function Mg(){for(;st!==null;)Lr(st)}function Og(t,n){var e=St;St|=2;var l=Nr(),a=qr();Dt!==t||rt!==n?(tu=null,Pi=kt()+500,Fl(t,n)):Jl=ye(t,n);t:do try{if(Tt!==0&&st!==null){n=st;var i=En;n:switch(Tt){case 1:Tt=0,En=null,$l(t,n,i,1);break;case 2:case 9:if(Ws(i)){Tt=0,En=null,kr(n);break}n=function(){Tt!==2&&Tt!==9||Dt!==t||(Tt=7),Fn(t)},i.then(n,n);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Ws(i)?(Tt=0,En=null,kr(n)):(Tt=0,En=null,$l(t,n,i,7));break;case 5:var u=null;switch(st.tag){case 26:u=st.memoizedState;case 5:case 27:var c=st;if(u?zd(u):c.stateNode.complete){Tt=0,En=null;var f=c.sibling;if(f!==null)st=f;else{var b=c.return;b!==null?(st=b,lu(b)):st=null}break n}}Tt=0,En=null,$l(t,n,i,5);break;case 6:Tt=0,En=null,$l(t,n,i,6);break;case 8:so(),Nt=6;break t;default:throw Error(s(462))}}Dg();break}catch(E){Hr(t,E)}while(!0);return ie=al=null,j.H=l,j.A=a,St=e,st!==null?0:(Dt=null,rt=0,Ai(),Nt)}function Dg(){for(;st!==null&&!ca();)Lr(st)}function Lr(t){var n=fr(t.alternate,t,pe);t.memoizedProps=t.pendingProps,n===null?lu(t):st=n}function kr(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=ar(e,n,n.pendingProps,n.type,void 0,rt);break;case 11:n=ar(e,n,n.pendingProps,n.type.render,n.ref,rt);break;case 5:Ec(n);default:dr(e,n),n=st=Ns(n,pe),n=fr(e,n,pe)}t.memoizedProps=t.pendingProps,n===null?lu(t):st=n}function $l(t,n,e,l){ie=al=null,Ec(n),kl=null,Da=0;var a=n.return;try{if(bg(t,a,n,e,rt)){Nt=1,Xi(t,Gn(e,t.current)),st=null;return}}catch(i){if(a!==null)throw st=a,i;Nt=1,Xi(t,Gn(e,t.current)),st=null;return}n.flags&32768?(mt||l===1?t=!0:Jl||(rt&536870912)!==0?t=!1:(Ue=t=!0,(l===2||l===9||l===3||l===6)&&(l=jn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Yr(n,t)):lu(n)}function lu(t){var n=t;do{if((n.flags&32768)!==0){Yr(n,Ue);return}t=n.return;var e=Sg(n.alternate,n,pe);if(e!==null){st=e;return}if(n=n.sibling,n!==null){st=n;return}st=n=t}while(n!==null);Nt===0&&(Nt=5)}function Yr(t,n){do{var e=Ag(t.alternate,t);if(e!==null){e.flags&=32767,st=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){st=t;return}st=t=e}while(t!==null);Nt=6,st=null}function Qr(t,n,e,l,a,i,u,c,f){t.cancelPendingCommit=null;do au();while(Ft!==0);if((St&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(i=n.lanes|n.childLanes,i|=$u,fi(t,e,i,u,c,f),t===Dt&&(st=Dt=null,rt=0),Il=n,He=t,he=e,uo=i,co=a,Cr=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gg(Dn,function(){return Jr(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,a=G.p,G.p=2,u=St,St|=4;try{jg(t,n,e)}finally{St=u,G.p=a,j.T=l}}Ft=1,Xr(),Vr(),Zr()}}function Xr(){if(Ft===1){Ft=0;var t=He,n=Il,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=j.T,j.T=null;var l=G.p;G.p=2;var a=St;St|=4;try{Tr(n,t);var i=jo,u=Os(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Ms(c.ownerDocument.documentElement,c)){if(f!==null&&Ku(c)){var b=f.start,E=f.end;if(E===void 0&&(E=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(E,c.value.length);else{var _=c.ownerDocument||document,y=_&&_.defaultView||window;if(y.getSelection){var S=y.getSelection(),Q=c.textContent.length,I=Math.min(f.start,Q),Ot=f.end===void 0?I:Math.min(f.end,Q);!S.extend&&I>Ot&&(u=Ot,Ot=I,I=u);var m=_s(c,I),d=_s(c,Ot);if(m&&d&&(S.rangeCount!==1||S.anchorNode!==m.node||S.anchorOffset!==m.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var v=_.createRange();v.setStart(m.node,m.offset),S.removeAllRanges(),I>Ot?(S.addRange(v),S.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),S.addRange(v))}}}}for(_=[],S=c;S=S.parentNode;)S.nodeType===1&&_.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<_.length;c++){var z=_[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}hu=!!Ao,jo=Ao=null}finally{St=a,G.p=l,j.T=e}}t.current=n,Ft=2}}function Vr(){if(Ft===2){Ft=0;var t=He,n=Il,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=j.T,j.T=null;var l=G.p;G.p=2;var a=St;St|=4;try{yr(t,n.alternate,n)}finally{St=a,G.p=l,j.T=e}}Ft=3}}function Zr(){if(Ft===4||Ft===3){Ft=0,oa();var t=He,n=Il,e=he,l=Cr;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ft=5:(Ft=0,Il=He=null,Kr(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Be=null),Al(e),n=n.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Zn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=j.T,a=G.p,G.p=2,j.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{j.T=n,G.p=a}}(he&3)!==0&&au(),Fn(t),a=t.pendingLanes,(e&261930)!==0&&(a&42)!==0?t===oo?Ka++:(Ka=0,oo=t):Ka=0,Ja(0)}}function Kr(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ma(n)))}function au(){return Xr(),Vr(),Zr(),Jr()}function Jr(){if(Ft!==5)return!1;var t=He,n=uo;uo=0;var e=Al(he),l=j.T,a=G.p;try{G.p=32>e?32:e,j.T=null,e=co,co=null;var i=He,u=he;if(Ft=0,Il=He=null,he=0,(St&6)!==0)throw Error(s(331));var c=St;if(St|=4,Or(i.current),zr(i,i.current,u,e),St=c,Ja(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Zn,i)}catch{}return!0}finally{G.p=a,j.T=l,Kr(t,n)}}function Wr(t,n,e){n=Gn(e,n),n=Lc(t.stateNode,n,2),t=Oe(t,n,2),t!==null&&(xe(t,2),Fn(t))}function Et(t,n,e){if(t.tag===3)Wr(t,t,e);else for(;n!==null;){if(n.tag===3){Wr(n,t,e);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Be===null||!Be.has(l))){t=Gn(e,t),e=If(2),l=Oe(n,e,2),l!==null&&(Ff(e,l,n,t),xe(l,2),Fn(l));break}}n=n.return}}function ro(t,n,e){var l=t.pingCache;if(l===null){l=t.pingCache=new zg;var a=new Set;l.set(n,a)}else a=l.get(n),a===void 0&&(a=new Set,l.set(n,a));a.has(e)||(lo=!0,a.add(e),t=Rg.bind(null,t,n,e),n.then(t,t))}function Rg(t,n,e){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,Dt===t&&(rt&e)===e&&(Nt===4||Nt===3&&(rt&62914560)===rt&&300>kt()-$i?(St&2)===0&&Fl(t,0):ao|=e,Wl===rt&&(Wl=0)),Fn(t)}function Ir(t,n){n===0&&(n=fa()),t=nl(t,n),t!==null&&(xe(t,n),Fn(t))}function Cg(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),Ir(t,e)}function Ug(t,n){var e=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(e=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),Ir(t,e)}function Gg(t,n){return vl(t,n)}var iu=null,Pl=null,go=!1,uu=!1,mo=!1,Ne=0;function Fn(t){t!==Pl&&t.next===null&&(Pl===null?iu=Pl=t:Pl=Pl.next=t),uu=!0,go||(go=!0,Hg())}function Ja(t,n){if(!mo&&uu){mo=!0;do for(var e=!1,l=iu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-nn(42|t)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,td(l,i))}else i=rt,i=Ie(l,l===Dt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ye(l,i)||(e=!0,td(l,i));l=l.next}while(e);mo=!1}}function Bg(){Fr()}function Fr(){uu=go=!1;var t=0;Ne!==0&&Zg()&&(t=Ne);for(var n=kt(),e=null,l=iu;l!==null;){var a=l.next,i=$r(l,n);i===0?(l.next=null,e===null?iu=a:e.next=a,a===null&&(Pl=e)):(e=l,(t!==0||(i&3)!==0)&&(uu=!0)),l=a}Ft!==0&&Ft!==5||Ja(t),Ne!==0&&(Ne=0)}function $r(t,n){for(var e=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-nn(i),c=1<<u,f=a[u];f===-1?((c&e)===0||(c&l)!==0)&&(a[u]=si(c,n)):f<=n&&(t.expiredLanes|=c),i&=~c}if(n=Dt,e=rt,e=Ie(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===n&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Pt(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||ye(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(l!==null&&Pt(l),Al(e)){case 2:case 8:e=Je;break;case 32:e=Dn;break;case 268435456:e=bl;break;default:e=Dn}return l=Pr.bind(null,t),e=vl(e,l),t.callbackPriority=n,t.callbackNode=e,n}return l!==null&&l!==null&&Pt(l),t.callbackPriority=2,t.callbackNode=null,2}function Pr(t,n){if(Ft!==0&&Ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(au()&&t.callbackNode!==e)return null;var l=rt;return l=Ie(t,t===Dt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Gr(t,l,n),$r(t,kt()),t.callbackNode!=null&&t.callbackNode===e?Pr.bind(null,t):null)}function td(t,n){if(au())return null;Gr(t,n,!0)}function Hg(){Jg(function(){(St&6)!==0?vl(Mu,Bg):Fr()})}function po(){if(Ne===0){var t=Nl;t===0&&(t=We,We<<=1,(We&261888)===0&&(We=256)),Ne=t}return Ne}function nd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mi(""+t)}function ed(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function wg(t,n,e,l,a){if(n==="submit"&&e&&e.stateNode===a){var i=nd((a[an]||null).action),u=l.submitter;u&&(n=(n=u[an]||null)?nd(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var c=new bi("action","action",null,l,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ne!==0){var f=u?ed(a,u):new FormData(a);Gc(e,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?ed(a,u):new FormData(a),Gc(e,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var ho=0;ho<Fu.length;ho++){var vo=Fu[ho],Ng=vo.toLowerCase(),qg=vo[0].toUpperCase()+vo.slice(1);Qn(Ng,"on"+qg)}Qn(Cs,"onAnimationEnd"),Qn(Us,"onAnimationIteration"),Qn(Gs,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(ng,"onTransitionRun"),Qn(eg,"onTransitionStart"),Qn(lg,"onTransitionCancel"),Qn(Bs,"onTransitionEnd"),Tl("onMouseEnter",["mouseout","mouseover"]),Tl("onMouseLeave",["mouseout","mouseover"]),Tl("onPointerEnter",["pointerout","pointerover"]),Tl("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wa));function ld(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],a=l.event;l=l.listeners;t:{var i=void 0;if(n)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,b=c.currentTarget;if(c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=b;try{i(a)}catch(E){Si(E)}a.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,b=c.currentTarget,c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=b;try{i(a)}catch(E){Si(E)}a.currentTarget=null,i=f}}}}function ft(t,n){var e=n[h];e===void 0&&(e=n[h]=new Set);var l=t+"__bubble";e.has(l)||(ad(n,t,2,!1),e.add(l))}function bo(t,n,e){var l=0;n&&(l|=4),ad(e,t,l,n)}var cu="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[cu]){t[cu]=!0,Io.forEach(function(e){e!=="selectionchange"&&(Lg.has(e)||bo(e,!1,t),bo(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[cu]||(n[cu]=!0,bo("selectionchange",!1,n))}}function ad(t,n,e,l){switch(Ud(n)){case 2:var a=m1;break;case 8:a=p1;break;default:a=Go}e=a.bind(null,n,e,t),a=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(n,e,{capture:!0,passive:a}):t.addEventListener(n,e,!0):a!==void 0?t.addEventListener(n,e,{passive:a}):t.addEventListener(n,e,!1)}function xo(t,n,e,l,a){var i=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=It(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue t}c=c.parentNode}}l=l.return}os(function(){var b=i,E=Hu(e),_=[];t:{var y=Hs.get(t);if(y!==void 0){var S=bi,Q=t;switch(t){case"keypress":if(hi(e)===0)break t;case"keydown":case"keyup":S=U0;break;case"focusin":Q="focus",S=Yu;break;case"focusout":Q="blur",S=Yu;break;case"beforeblur":case"afterblur":S=Yu;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=H0;break;case Cs:case Us:case Gs:S=T0;break;case Bs:S=N0;break;case"scroll":case"scrollend":S=y0;break;case"wheel":S=L0;break;case"copy":case"cut":case"paste":S=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=gs;break;case"toggle":case"beforetoggle":S=Y0}var I=(n&4)!==0,Ot=!I&&(t==="scroll"||t==="scrollend"),m=I?y!==null?y+"Capture":null:y;I=[];for(var d=b,v;d!==null;){var z=d;if(v=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||v===null||m===null||(z=va(d,m),z!=null&&I.push(Ia(d,z,v))),Ot)break;d=d.return}0<I.length&&(y=new S(y,Q,null,e,E),_.push({event:y,listeners:I}))}}if((n&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&e!==Bu&&(Q=e.relatedTarget||e.fromElement)&&(It(Q)||Q[Pn]))break t;if((S||y)&&(y=E.window===E?E:(y=E.ownerDocument)?y.defaultView||y.parentWindow:window,S?(Q=e.relatedTarget||e.toElement,S=b,Q=Q?It(Q):null,Q!==null&&(Ot=O(Q),I=Q.tag,Q!==Ot||I!==5&&I!==27&&I!==6)&&(Q=null)):(S=null,Q=b),S!==Q)){if(I=rs,z="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(I=gs,z="onPointerLeave",m="onPointerEnter",d="pointer"),Ot=S==null?y:ha(S),v=Q==null?y:ha(Q),y=new I(z,d+"leave",S,e,E),y.target=Ot,y.relatedTarget=v,z=null,It(E)===b&&(I=new I(m,d+"enter",Q,e,E),I.target=v,I.relatedTarget=Ot,z=I),Ot=z,S&&Q)n:{for(I=kg,m=S,d=Q,v=0,z=m;z;z=I(z))v++;z=0;for(var K=d;K;K=I(K))z++;for(;0<v-z;)m=I(m),v--;for(;0<z-v;)d=I(d),z--;for(;v--;){if(m===d||d!==null&&m===d.alternate){I=m;break n}m=I(m),d=I(d)}I=null}else I=null;S!==null&&id(_,y,S,I,!1),Q!==null&&Ot!==null&&id(_,Ot,Q,I,!0)}}t:{if(y=b?ha(b):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var yt=Ss;else if(ys(y))if(As)yt=$0;else{yt=I0;var X=W0}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?b&&Gu(b.elementType)&&(yt=Ss):yt=F0;if(yt&&(yt=yt(t,b))){xs(_,yt,e,E);break t}X&&X(t,y,b),t==="focusout"&&b&&y.type==="number"&&b.memoizedProps.value!=null&&Uu(y,"number",y.value)}switch(X=b?ha(b):window,t){case"focusin":(ys(X)||X.contentEditable==="true")&&(Dl=X,Ju=b,Ea=null);break;case"focusout":Ea=Ju=Dl=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Ds(_,e,E);break;case"selectionchange":if(tg)break;case"keydown":case"keyup":Ds(_,e,E)}var at;if(Xu)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Ol?vs(t,e)&&(dt="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(dt="onCompositionStart");dt&&(ms&&e.locale!=="ko"&&(Ol||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Ol&&(at=ss()):(Ae=E,qu="value"in Ae?Ae.value:Ae.textContent,Ol=!0)),X=ou(b,dt),0<X.length&&(dt=new ds(dt,t,null,e,E),_.push({event:dt,listeners:X}),at?dt.data=at:(at=bs(e),at!==null&&(dt.data=at)))),(at=X0?V0(t,e):Z0(t,e))&&(dt=ou(b,"onBeforeInput"),0<dt.length&&(X=new ds("onBeforeInput","beforeinput",null,e,E),_.push({event:X,listeners:dt}),X.data=at)),wg(_,t,b,e,E)}ld(_,n)})}function Ia(t,n,e){return{instance:t,listener:n,currentTarget:e}}function ou(t,n){for(var e=n+"Capture",l=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=va(t,e),a!=null&&l.unshift(Ia(t,a,i)),a=va(t,n),a!=null&&l.push(Ia(t,a,i))),t.tag===3)return l;t=t.return}return[]}function kg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function id(t,n,e,l,a){for(var i=n._reactName,u=[];e!==null&&e!==l;){var c=e,f=c.alternate,b=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||b===null||(f=b,a?(b=va(e,i),b!=null&&u.unshift(Ia(e,b,f))):a||(b=va(e,i),b!=null&&u.push(Ia(e,b,f)))),e=e.return}u.length!==0&&t.push({event:n,listeners:u})}var Yg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function ud(t){return(typeof t=="string"?t:""+t).replace(Yg,`
`).replace(Qg,"")}function cd(t,n){return n=ud(n),ud(t)===n}function Mt(t,n,e,l,a,i){switch(e){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||zl(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&zl(t,""+l);break;case"className":di(t,"class",l);break;case"tabIndex":di(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":di(t,e,l);break;case"style":us(t,l,i);break;case"data":if(n!=="object"){di(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=mi(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&Mt(t,n,"name",a.name,a,null),Mt(t,n,"formEncType",a.formEncType,a,null),Mt(t,n,"formMethod",a.formMethod,a,null),Mt(t,n,"formTarget",a.formTarget,a,null)):(Mt(t,n,"encType",a.encType,a,null),Mt(t,n,"method",a.method,a,null),Mt(t,n,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=mi(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=ne);break;case"onScroll":l!=null&&ft("scroll",t);break;case"onScrollEnd":l!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=mi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":ft("beforetoggle",t),ft("toggle",t),ri(t,"popover",l);break;case"xlinkActuate":te(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":te(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":te(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":te(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":te(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":te(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":te(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=v0.get(e)||e,ri(t,e,l))}}function So(t,n,e,l,a,i){switch(e){case"style":us(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"children":typeof l=="string"?zl(t,l):(typeof l=="number"||typeof l=="bigint")&&zl(t,""+l);break;case"onScroll":l!=null&&ft("scroll",t);break;case"onScrollEnd":l!=null&&ft("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ne);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),n=e.slice(2,a?e.length-7:void 0),i=t[an]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,l,a);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):ri(t,e,l)}}}function sn(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var l=!1,a=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Mt(t,n,i,u,e,null)}}a&&Mt(t,n,"srcSet",e.srcSet,e,null),l&&Mt(t,n,"src",e.src,e,null);return;case"input":ft("invalid",t);var c=i=u=a=null,f=null,b=null;for(l in e)if(e.hasOwnProperty(l)){var E=e[l];if(E!=null)switch(l){case"name":a=E;break;case"type":u=E;break;case"checked":f=E;break;case"defaultChecked":b=E;break;case"value":i=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,n));break;default:Mt(t,n,l,E,e,null)}}es(t,i,c,f,b,u,a,!1);return;case"select":ft("invalid",t),l=u=i=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:Mt(t,n,a,c,e,null)}n=i,e=u,t.multiple=!!l,n!=null?El(t,!!l,n,!1):e!=null&&El(t,!!l,e,!0);return;case"textarea":ft("invalid",t),i=a=l=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Mt(t,n,u,c,e,null)}as(t,l,a,i);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(l=e[f],l!=null))switch(f){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Mt(t,n,f,l,e,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(l=0;l<Wa.length;l++)ft(Wa[l],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in e)if(e.hasOwnProperty(b)&&(l=e[b],l!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Mt(t,n,b,l,e,null)}return;default:if(Gu(n)){for(E in e)e.hasOwnProperty(E)&&(l=e[E],l!==void 0&&So(t,n,E,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&Mt(t,n,c,l,e,null))}function Xg(t,n,e,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,f=null,b=null,E=null;for(S in e){var _=e[S];if(e.hasOwnProperty(S)&&_!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=_;default:l.hasOwnProperty(S)||Mt(t,n,S,null,l,_)}}for(var y in l){var S=l[y];if(_=e[y],l.hasOwnProperty(y)&&(S!=null||_!=null))switch(y){case"type":i=S;break;case"name":a=S;break;case"checked":b=S;break;case"defaultChecked":E=S;break;case"value":u=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,n));break;default:S!==_&&Mt(t,n,y,S,l,_)}}Cu(t,u,c,f,b,E,i,a);return;case"select":S=u=c=y=null;for(i in e)if(f=e[i],e.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":S=f;default:l.hasOwnProperty(i)||Mt(t,n,i,null,l,f)}for(a in l)if(i=l[a],f=e[a],l.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":y=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&Mt(t,n,a,i,l,f)}n=c,e=u,l=S,y!=null?El(t,!!e,y,!1):!!l!=!!e&&(n!=null?El(t,!!e,n,!0):El(t,!!e,e?[]:"",!1));return;case"textarea":S=y=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Mt(t,n,c,null,l,a)}for(u in l)if(a=l[u],i=e[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==i&&Mt(t,n,u,a,l,i)}ls(t,y,S);return;case"option":for(var Q in e)if(y=e[Q],e.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":t.selected=!1;break;default:Mt(t,n,Q,null,l,y)}for(f in l)if(y=l[f],S=e[f],l.hasOwnProperty(f)&&y!==S&&(y!=null||S!=null))switch(f){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:Mt(t,n,f,y,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in e)y=e[I],e.hasOwnProperty(I)&&y!=null&&!l.hasOwnProperty(I)&&Mt(t,n,I,null,l,y);for(b in l)if(y=l[b],S=e[b],l.hasOwnProperty(b)&&y!==S&&(y!=null||S!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(137,n));break;default:Mt(t,n,b,y,l,S)}return;default:if(Gu(n)){for(var Ot in e)y=e[Ot],e.hasOwnProperty(Ot)&&y!==void 0&&!l.hasOwnProperty(Ot)&&So(t,n,Ot,void 0,l,y);for(E in l)y=l[E],S=e[E],!l.hasOwnProperty(E)||y===S||y===void 0&&S===void 0||So(t,n,E,y,l,S);return}}for(var m in e)y=e[m],e.hasOwnProperty(m)&&y!=null&&!l.hasOwnProperty(m)&&Mt(t,n,m,null,l,y);for(_ in l)y=l[_],S=e[_],!l.hasOwnProperty(_)||y===S||y==null&&S==null||Mt(t,n,_,y,l,S)}function od(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var a=e[l],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&od(u)){for(u=0,c=a.responseEnd,l+=1;l<e.length;l++){var f=e[l],b=f.startTime;if(b>c)break;var E=f.transferSize,_=f.initiatorType;E&&od(_)&&(f=f.responseEnd,u+=E*(f<c?1:(c-b)/(f-b)))}if(--l,n+=8*(i+u)/(a.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ao=null,jo=null;function su(t){return t.nodeType===9?t:t.ownerDocument}function sd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fd(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function To(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eo=null;function Zg(){var t=window.event;return t&&t.type==="popstate"?t===Eo?!1:(Eo=t,!0):(Eo=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(Wg)}:rd;function Wg(t){setTimeout(function(){throw t})}function qe(t){return t==="head"}function gd(t,n){var e=n,l=0;do{var a=e.nextSibling;if(t.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(l===0){t.removeChild(a),la(n);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")Fa(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,Fa(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[vt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&Fa(t.ownerDocument.body);e=a}while(e);la(n)}function md(t,n){var e=t;t=0;do{var l=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=l}while(e)}function zo(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":zo(e),Qt(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Ig(t,n,e,l){for(;t.nodeType===1;){var a=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[vt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function Fg(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=qn(t.nextSibling),t===null))return null;return t}function pd(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=qn(t.nextSibling),t===null))return null;return t}function _o(t){return t.data==="$?"||t.data==="$~"}function Mo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $g(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var l=function(){n(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function qn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Oo=null;function hd(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return qn(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function vd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function bd(t,n,e){switch(n=su(e),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fa(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qt(t)}var Ln=new Map,yd=new Set;function fu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ve=G.d;G.d={f:Pg,r:t1,D:n1,C:e1,L:l1,m:a1,X:u1,S:i1,M:c1};function Pg(){var t=ve.f(),n=nu();return t||n}function t1(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?Hf(n):ve.r(t)}var ta=typeof document>"u"?null:document;function xd(t,n,e){var l=ta;if(l&&typeof n=="string"&&n){var a=Cn(n);a='link[rel="'+t+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),yd.has(a)||(yd.add(a),t={rel:t,crossOrigin:e,href:n},l.querySelector(a)===null&&(n=l.createElement("link"),sn(n,"link",t),en(n),l.head.appendChild(n)))}}function n1(t){ve.D(t),xd("dns-prefetch",t,null)}function e1(t,n){ve.C(t,n),xd("preconnect",t,n)}function l1(t,n,e){ve.L(t,n,e);var l=ta;if(l&&t&&n){var a='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Cn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Cn(e.imageSizes)+'"]')):a+='[href="'+Cn(t)+'"]';var i=a;switch(n){case"style":i=na(t);break;case"script":i=ea(t)}Ln.has(i)||(t=C({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),Ln.set(i,t),l.querySelector(a)!==null||n==="style"&&l.querySelector($a(i))||n==="script"&&l.querySelector(Pa(i))||(n=l.createElement("link"),sn(n,"link",t),en(n),l.head.appendChild(n)))}}function a1(t,n){ve.m(t,n);var e=ta;if(e&&t){var l=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+Cn(l)+'"][href="'+Cn(t)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ea(t)}if(!Ln.has(i)&&(t=C({rel:"modulepreload",href:t},n),Ln.set(i,t),e.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Pa(i)))return}l=e.createElement("link"),sn(l,"link",t),en(l),e.head.appendChild(l)}}}function i1(t,n,e){ve.S(t,n,e);var l=ta;if(l&&t){var a=jl(l).hoistableStyles,i=na(t);n=n||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector($a(i)))c.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":n},e),(e=Ln.get(i))&&Do(t,e);var f=u=l.createElement("link");en(f),sn(f,"link",t),f._p=new Promise(function(b,E){f.onload=b,f.onerror=E}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ru(u,n,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function u1(t,n){ve.X(t,n);var e=ta;if(e&&t){var l=jl(e).hoistableScripts,a=ea(t),i=l.get(a);i||(i=e.querySelector(Pa(a)),i||(t=C({src:t,async:!0},n),(n=Ln.get(a))&&Ro(t,n),i=e.createElement("script"),en(i),sn(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function c1(t,n){ve.M(t,n);var e=ta;if(e&&t){var l=jl(e).hoistableScripts,a=ea(t),i=l.get(a);i||(i=e.querySelector(Pa(a)),i||(t=C({src:t,async:!0,type:"module"},n),(n=Ln.get(a))&&Ro(t,n),i=e.createElement("script"),en(i),sn(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Sd(t,n,e,l){var a=(a=it.current)?fu(a):null;if(!a)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=na(e.href),e=jl(a).hoistableStyles,l=e.get(n),l||(l={type:"style",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=na(e.href);var i=jl(a).hoistableStyles,u=i.get(t);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=a.querySelector($a(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ln.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ln.set(t,e),i||o1(a,t,e,u.state))),n&&l===null)throw Error(s(528,""));return u}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ea(e),e=jl(a).hoistableScripts,l=e.get(n),l||(l={type:"script",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function na(t){return'href="'+Cn(t)+'"'}function $a(t){return'link[rel="stylesheet"]['+t+"]"}function Ad(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function o1(t,n,e,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),sn(n,"link",e),en(n),t.head.appendChild(n))}function ea(t){return'[src="'+Cn(t)+'"]'}function Pa(t){return"script[async]"+t}function jd(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Cn(e.href)+'"]');if(l)return n.instance=l,en(l),l;var a=C({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),en(l),sn(l,"style",a),ru(l,e.precedence,t),n.instance=l;case"stylesheet":a=na(e.href);var i=t.querySelector($a(a));if(i)return n.state.loading|=4,n.instance=i,en(i),i;l=Ad(e),(a=Ln.get(a))&&Do(l,a),i=(t.ownerDocument||t).createElement("link"),en(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),sn(i,"link",l),n.state.loading|=4,ru(i,e.precedence,t),n.instance=i;case"script":return i=ea(e.src),(a=t.querySelector(Pa(i)))?(n.instance=a,en(a),a):(l=e,(a=Ln.get(i))&&(l=C({},e),Ro(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),en(a),sn(a,"link",l),t.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ru(l,e.precedence,t));return n.instance}function ru(t,n,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===n)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function Do(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ro(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var du=null;function Td(t,n,e){if(du===null){var l=new Map,a=du=new Map;a.set(e,l)}else a=du,l=a.get(e),l||(l=new Map,a.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),a=0;a<e.length;a++){var i=e[a];if(!(i[vt]||i[Yt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Ed(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function s1(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function f1(t,n,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=na(l.href),i=n.querySelector($a(a));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gu.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,en(i);return}i=n.ownerDocument||n,l=Ad(l),(a=Ln.get(a))&&Do(l,a),i=i.createElement("link"),en(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),sn(i,"link",l),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=gu.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var Co=0;function r1(t,n){return t.stylesheets&&t.count===0&&pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var l=setTimeout(function(){if(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+n);0<t.imgBytes&&Co===0&&(Co=62500*Vg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Co?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function gu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mu=null;function pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mu=new Map,n.forEach(d1,t),mu=null,gu.call(t))}function d1(t,n){if(!(n.state.loading&4)){var e=mu.get(t);if(e)var l=e.get(null);else{e=new Map,mu.set(t,e);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),l=u)}l&&e.set(null,l)}a=n.instance,u=a.getAttribute("data-precedence"),i=e.get(u)||l,i===l&&e.set(null,a),e.set(u,a),this.count++,l=gu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),n.state.loading|=4}}var ti={$$typeof:Z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function g1(t,n,e,l,a,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.hiddenUpdates=xl(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function _d(t,n,e,l,a,i,u,c,f,b,E,_){return t=new g1(t,n,e,u,f,b,E,_,c),n=1,i===!0&&(n|=24),i=An(3,null,null,n),t.current=i,i.stateNode=t,n=fc(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:n},mc(i),t}function Md(t){return t?(t=Ul,t):Ul}function Od(t,n,e,l,a,i){a=Md(a),l.context===null?l.context=a:l.pendingContext=a,l=Me(n),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=Oe(t,l,n),e!==null&&(bn(e,t,n),Ca(e,t,n))}function Dd(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function Uo(t,n){Dd(t,n),(t=t.alternate)&&Dd(t,n)}function Rd(t){if(t.tag===13||t.tag===31){var n=nl(t,67108864);n!==null&&bn(n,t,67108864),Uo(t,67108864)}}function Cd(t){if(t.tag===13||t.tag===31){var n=_n();n=Sl(n);var e=nl(t,n);e!==null&&bn(e,t,n),Uo(t,n)}}var hu=!0;function m1(t,n,e,l){var a=j.T;j.T=null;var i=G.p;try{G.p=2,Go(t,n,e,l)}finally{G.p=i,j.T=a}}function p1(t,n,e,l){var a=j.T;j.T=null;var i=G.p;try{G.p=8,Go(t,n,e,l)}finally{G.p=i,j.T=a}}function Go(t,n,e,l){if(hu){var a=Bo(l);if(a===null)xo(t,n,l,vu,e),Gd(t,l);else if(v1(a,t,n,e,l))l.stopPropagation();else if(Gd(t,l),n&4&&-1<h1.indexOf(t)){for(;a!==null;){var i=Se(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Kn(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-nn(u);c.entanglements[1]|=f,u&=~f}Fn(i),(St&6)===0&&(Pi=kt()+500,Ja(0))}}break;case 31:case 13:c=nl(i,2),c!==null&&bn(c,i,2),nu(),Uo(i,2)}if(i=Bo(l),i===null&&xo(t,n,l,vu,e),i===a)break;a=i}a!==null&&l.stopPropagation()}else xo(t,n,l,null,e)}}function Bo(t){return t=Hu(t),Ho(t)}var vu=null;function Ho(t){if(vu=null,t=It(t),t!==null){var n=O(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=U(n),t!==null)return t;t=null}else if(e===31){if(t=B(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vu=t,null}function Ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_u()){case Mu:return 2;case Je:return 8;case Dn:case ci:return 32;case bl:return 268435456;default:return 32}default:return 32}}var wo=!1,Le=null,ke=null,Ye=null,ni=new Map,ei=new Map,Qe=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(t,n){switch(t){case"focusin":case"focusout":Le=null;break;case"dragenter":case"dragleave":ke=null;break;case"mouseover":case"mouseout":Ye=null;break;case"pointerover":case"pointerout":ni.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(n.pointerId)}}function li(t,n,e,l,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Se(n),n!==null&&Rd(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),t)}function v1(t,n,e,l,a){switch(n){case"focusin":return Le=li(Le,t,n,e,l,a),!0;case"dragenter":return ke=li(ke,t,n,e,l,a),!0;case"mouseover":return Ye=li(Ye,t,n,e,l,a),!0;case"pointerover":var i=a.pointerId;return ni.set(i,li(ni.get(i)||null,t,n,e,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ei.set(i,li(ei.get(i)||null,t,n,e,l,a)),!0}return!1}function Bd(t){var n=It(t.target);if(n!==null){var e=O(n);if(e!==null){if(n=e.tag,n===13){if(n=U(e),n!==null){t.blockedOn=n,pa(t.priority,function(){Cd(e)});return}}else if(n===31){if(n=B(e),n!==null){t.blockedOn=n,pa(t.priority,function(){Cd(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=Bo(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);Bu=l,e.target.dispatchEvent(l),Bu=null}else return n=Se(e),n!==null&&Rd(n),t.blockedOn=e,!1;n.shift()}return!0}function Hd(t,n,e){bu(t)&&e.delete(n)}function b1(){wo=!1,Le!==null&&bu(Le)&&(Le=null),ke!==null&&bu(ke)&&(ke=null),Ye!==null&&bu(Ye)&&(Ye=null),ni.forEach(Hd),ei.forEach(Hd)}function yu(t,n){t.blockedOn===n&&(t.blockedOn=null,wo||(wo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,b1)))}var xu=null;function wd(t){xu!==t&&(xu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xu===t&&(xu=null);for(var n=0;n<t.length;n+=3){var e=t[n],l=t[n+1],a=t[n+2];if(typeof l!="function"){if(Ho(l||e)===null)continue;break}var i=Se(e);i!==null&&(t.splice(n,3),n-=3,Gc(i,{pending:!0,data:a,method:e.method,action:l},l,a))}}))}function la(t){function n(f){return yu(f,t)}Le!==null&&yu(Le,t),ke!==null&&yu(ke,t),Ye!==null&&yu(Ye,t),ni.forEach(n),ei.forEach(n);for(var e=0;e<Qe.length;e++){var l=Qe[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Qe.length&&(e=Qe[0],e.blockedOn===null);)Bd(e),e.blockedOn===null&&Qe.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var a=e[l],i=e[l+1],u=a[an]||null;if(typeof i=="function")u||wd(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[an]||null)c=u.formAction;else if(Ho(a)!==null)continue}else c=u.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),wd(e)}}}function Nd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function No(t){this._internalRoot=t}Su.prototype.render=No.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var e=n.current,l=_n();Od(e,l,t,n,null,null)},Su.prototype.unmount=No.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Od(t.current,2,null,t,null,null),nu(),n[Pn]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var n=ma();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Qe.length&&n!==0&&n<Qe[e].priority;e++);Qe.splice(e,0,t),e===0&&Bd(t)}};var qd=T.version;if(qd!=="19.2.4")throw Error(s(527,qd,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=x(n),t=t!==null?V(t):null,t=t===null?null:t.stateNode,t};var y1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Zn=Au.inject(y1),tn=Au}catch{}}return ii.createRoot=function(t,n){if(!A(t))throw Error(s(299));var e=!1,l="",a=Zf,i=Kf,u=Jf;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=_d(t,1,!1,null,null,e,l,null,a,i,u,Nd),t[Pn]=n.current,yo(t),new No(n)},ii.hydrateRoot=function(t,n,e){if(!A(t))throw Error(s(299));var l=!1,a="",i=Zf,u=Kf,c=Jf,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),n=_d(t,1,!0,n,e??null,l,a,f,i,u,c,Nd),n.context=Md(null),e=n.current,l=_n(),l=Sl(l),a=Me(l),a.callback=null,Oe(e,a,l),e=l,n.current.lanes=e,xe(n,e),Fn(n),t[Pn]=n.current,yo(t),new Su(n)},ii.version="19.2.4",ii}var Wd;function D1(){if(Wd)return ko.exports;Wd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(T){console.error(T)}}return r(),ko.exports=O1(),ko.exports}var R1=D1();const C1="modulepreload",U1=function(r){return"/getbiji-docs-v3/"+r},Id={},et=function(T,p,s){let A=Promise.resolve();if(p&&p.length>0){let U=function(x){return Promise.all(x.map(V=>Promise.resolve(V).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),R=(B==null?void 0:B.nonce)||(B==null?void 0:B.getAttribute("nonce"));A=U(p.map(x=>{if(x=U1(x),x in Id)return;Id[x]=!0;const V=x.endsWith(".css"),C=V?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const F=document.createElement("link");if(F.rel=V?"stylesheet":C1,V||(F.as="script"),F.crossOrigin="",F.href=x,R&&F.setAttribute("nonce",R),document.head.appendChild(F),V)return new Promise((J,bt)=>{F.addEventListener("load",J),F.addEventListener("error",()=>bt(new Error(`Unable to preload CSS for ${x}`)))})}))}function O(U){const B=new Event("vite:preloadError",{cancelable:!0});if(B.payload=U,window.dispatchEvent(B),!B.defaultPrevented)throw U}return A.then(U=>{for(const B of U||[])B.status==="rejected"&&O(B.reason);return T().catch(O)})},ju={amber:{dark:{bg:"#09090b",sf:"#111114",sfH:"#18181c",bd:"#1e1e24",tx:"#e4e4e7",tx2:"#a1a1aa",txM:"#919199",ac:"#e8a845",acD:"rgba(232,168,69,0.12)",acT:"#fbbf24",cdBg:"#0c0c0f",cdTx:"#c4c4cc",sbBg:"#0c0c0e",hdBg:"rgba(9,9,11,0.85)"},light:{bg:"#fafaf9",sf:"#ffffff",sfH:"#f5f5f4",bd:"#e7e5e4",tx:"#1c1917",tx2:"#57534e",txM:"#706b66",ac:"#96640a",acD:"rgba(150,100,10,0.08)",acT:"#7a5208",cdBg:"#f5f3f0",cdTx:"#2c2520",sbBg:"#f5f5f3",hdBg:"rgba(250,250,249,0.85)"},fonts:{heading:"Instrument Serif",body:"DM Sans",code:"JetBrains Mono"}},editorial:{dark:{bg:"#080c1f",sf:"#0e1333",sfH:"#141940",bd:"#1a2050",tx:"#e8e6f0",tx2:"#b5b1c8",txM:"#9490ae",ac:"#ff6b4a",acD:"rgba(255,107,74,0.1)",acT:"#ff8a70",cdBg:"#0a0e27",cdTx:"#b8b4cc",sbBg:"#0a0e27",hdBg:"rgba(8,12,31,0.9)"},light:{bg:"#f6f4f0",sf:"#ffffff",sfH:"#eeece6",bd:"#ddd9d0",tx:"#1a1716",tx2:"#4a443e",txM:"#706960",ac:"#b83d22",acD:"rgba(184,61,34,0.07)",acT:"#9c3019",cdBg:"#edeae4",cdTx:"#3a3530",sbBg:"#f0ede8",hdBg:"rgba(246,244,240,0.92)"},fonts:{heading:"Cormorant Garamond",body:"Bricolage Grotesque",code:"Fira Code"}}},G1=()=>o.jsx("svg",{width:22,height:22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),B1=()=>o.jsx("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),H1=()=>o.jsx("svg",{width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M22 2L11 13M22 2l-7 20-4-9-9-4z"})});function u0(r){let T="You are a helpful documentation assistant. Answer questions accurately based on the documentation provided below. If the answer isn't in the documentation, say so clearly. Keep answers concise and reference specific sections when possible.";if(r){const p=r.length>1e5?r.slice(0,1e5)+`

[Documentation truncated...]`:r;T+=`

Documentation:
${p}`}return T}async function w1(r,T,p,s){var U,B,R;const A=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${T}`},body:JSON.stringify({model:p,messages:[{role:"system",content:u0(s)},...r.map(x=>({role:x.role,content:x.content}))]})});if(!A.ok){const x=await A.text();throw new Error(`OpenAI API error (${A.status}): ${x}`)}return((R=(B=(U=(await A.json()).choices)==null?void 0:U[0])==null?void 0:B.message)==null?void 0:R.content)||"No response."}async function N1(r,T,p,s){var U,B;const A=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":T,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:p,max_tokens:1024,system:u0(s),messages:r.map(R=>({role:R.role,content:R.content}))})});if(!A.ok){const R=await A.text();throw new Error(`Anthropic API error (${A.status}): ${R}`)}return((B=(U=(await A.json()).content)==null?void 0:U[0])==null?void 0:B.text)||"No response."}function q1(r){return r==="openai"?"gpt-4o-mini":"claude-sonnet-4-20250514"}function L1({provider:r,model:T,apiKey:p,context:s}){const[A,O]=H.useState(!1),[U,B]=H.useState([]),[R,x]=H.useState(""),[V,C]=H.useState(!1),[F,J]=H.useState(null),bt=H.useRef(null),nt=H.useRef(null),ut=p||(typeof window<"u"?window.__TOME_AI_API_KEY__:void 0),D=T||q1(r);H.useEffect(()=>{var L;(L=bt.current)==null||L.scrollIntoView({behavior:"smooth"})},[U]),H.useEffect(()=>{A&&setTimeout(()=>{var L;return(L=nt.current)==null?void 0:L.focus()},100)},[A]);const k=H.useCallback(async()=>{const L=R.trim();if(!L||V||!ut)return;const pt={role:"user",content:L},At=[...U,pt];B(At),x(""),C(!0),J(null);try{let w;r==="openai"?w=await w1(At,ut,D,s):w=await N1(At,ut,D,s),B(Rt=>[...Rt,{role:"assistant",content:w}])}catch(w){J(w instanceof Error?w.message:"Failed to get response")}finally{C(!1)}},[R,V,U,r,ut,D,s]),Z=H.useCallback(L=>{L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),k())},[k]);return A?o.jsxs("div",{"data-testid":"ai-chat-panel",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:380,maxWidth:"calc(100vw - 48px)",height:520,maxHeight:"calc(100vh - 48px)",background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,boxShadow:"0 16px 64px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"var(--font-body)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--tx)"},children:"Ask AI"}),o.jsx("button",{"data-testid":"ai-chat-close",onClick:()=>O(!1),"aria-label":"Close AI chat",style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",padding:4},children:o.jsx(B1,{})})]}),o.jsxs("div",{style:{flex:1,overflow:"auto",padding:"12px 16px"},children:[!ut&&o.jsxs("div",{"data-testid":"ai-chat-no-key",style:{textAlign:"center",color:"var(--txM)",fontSize:13,padding:"24px 8px",lineHeight:1.6},children:[o.jsx("p",{style:{marginBottom:8,fontWeight:500,color:"var(--tx)"},children:"AI not configured"}),o.jsxs("p",{style:{marginBottom:8},children:["To enable AI chat, set the ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"apiKeyEnv"})," in ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"tome.config.js"})," and provide the environment variable at build time."]}),o.jsxs("p",{style:{fontSize:11.5,color:"var(--txM)"},children:["Example: ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"TOME_AI_KEY=sk-... tome build"})]})]}),U.map((L,pt)=>o.jsx("div",{"data-testid":`ai-chat-message-${L.role}`,style:{marginBottom:12,display:"flex",justifyContent:L.role==="user"?"flex-end":"flex-start"},children:o.jsx("div",{style:{maxWidth:"85%",padding:"8px 12px",borderRadius:10,fontSize:13,lineHeight:1.55,whiteSpace:"pre-wrap",wordBreak:"break-word",background:L.role==="user"?"var(--ac)":"var(--cdBg)",color:L.role==="user"?"#fff":"var(--tx)"},children:L.content})},pt)),V&&o.jsx("div",{"data-testid":"ai-chat-loading",style:{display:"flex",justifyContent:"flex-start",marginBottom:12},children:o.jsx("div",{style:{padding:"8px 12px",borderRadius:10,fontSize:13,background:"var(--cdBg)",color:"var(--txM)"},children:"Thinking..."})}),F&&o.jsx("div",{"data-testid":"ai-chat-error",style:{padding:"8px 12px",borderRadius:8,fontSize:12,background:"rgba(220,50,50,0.1)",color:"#d44",marginBottom:12},children:F}),o.jsx("div",{ref:bt})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderTop:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("input",{ref:nt,"data-testid":"ai-chat-input",value:R,onChange:L=>x(L.target.value),onKeyDown:Z,placeholder:ut?"Ask a question...":"API key required",disabled:!ut,style:{flex:1,background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:8,padding:"8px 12px",color:"var(--tx)",fontSize:13,fontFamily:"var(--font-body)",outline:"none"}}),o.jsx("button",{"data-testid":"ai-chat-send",onClick:k,disabled:!ut||!R.trim()||V,"aria-label":"Send message",style:{width:34,height:34,borderRadius:8,background:ut&&R.trim()?"var(--ac)":"var(--cdBg)",color:ut&&R.trim()?"#fff":"var(--txM)",border:"none",cursor:ut&&R.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o.jsx(H1,{})})]})]}):o.jsx("button",{"data-testid":"ai-chat-button",onClick:()=>O(!0),"aria-label":"Open AI chat",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:48,height:48,borderRadius:"50%",background:"var(--ac)",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",transition:"transform 0.15s"},children:o.jsx(G1,{})})}function k1(r){const T=/^#([0-9a-f]{6})$/i.exec(r.trim());if(!T)return null;const p=parseInt(T[1],16);return[p>>16&255,p>>8&255,p&255]}function Y1(r,T){const p=k1(r);if(!p)return null;const[s,A,O]=p,U=`rgba(${s},${A},${O},${T?.12:.08})`,B=T?1.15:.85,R=Math.min(255,Math.round(s*B)),x=Math.min(255,Math.round(A*B)),V=Math.min(255,Math.round(O*B)),C=`rgb(${R},${x},${V})`;return{ac:r,acD:U,acT:C}}const Mn=({d:r,size:T=16})=>o.jsx("svg",{width:T,height:T,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:r})}),c0=()=>o.jsx(Mn,{d:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"}),Fd=()=>o.jsx(Mn,{d:"M9 18l6-6-6-6",size:14}),Vo=()=>o.jsx(Mn,{d:"M6 9l6 6 6-6",size:14}),Q1=()=>o.jsx(Mn,{d:"M3 12h18M3 6h18M3 18h18",size:20}),X1=()=>o.jsx(Mn,{d:"M18 6L6 18M6 6l12 12",size:18}),$d=()=>o.jsx(Mn,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),Pd=()=>o.jsx(Mn,{d:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a1 1 0 0 1 1-1v-1a1 1 0 0 1-2 0v1a1 1 0 0 1 1 1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm18-1h-1a1 1 0 0 1 0 2h1a1 1 0 0 1 0-2ZM6.34 6.34a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Zm12.73-2.12-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41ZM6.34 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41Zm12.73 2.12-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41Z"}),t0=()=>o.jsx(Mn,{d:"M19 12H5M12 19l-7-7 7-7",size:14}),n0=()=>o.jsx(Mn,{d:"M5 12h14M12 5l7 7-7 7",size:14}),V1=()=>o.jsx(Mn,{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",size:13});function Z1(r){const T=new Date(r),s=new Date().getTime()-T.getTime();if(isNaN(s))return"";const A=Math.floor(s/1e3),O=Math.floor(A/60),U=Math.floor(O/60),B=Math.floor(U/24),R=Math.floor(B/30),x=Math.floor(B/365);return A<60?"just now":O<60?`${O} minute${O===1?"":"s"} ago`:U<24?`${U} hour${U===1?"":"s"} ago`:B<30?`${B} day${B===1?"":"s"} ago`:R<12?`${R} month${R===1?"":"s"} ago`:x>=1?`${x} year${x===1?"":"s"} ago`:T.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}let aa=null;const K1="/_pagefind/pagefind.js";async function J1(){if(aa)return aa;try{return aa=await import(K1),await aa.init(),aa}catch{return null}}let Tu=null;function W1(){return Tu||(Tu=et(()=>import("./theme-BIHI7g3E.js"),[]).catch(()=>null),Tu)}function I1({appId:r,apiKey:T,indexName:p,onNavigate:s,onClose:A,basePath:O=""}){const[U,B]=H.useState(null),[R,x]=H.useState(!1);H.useEffect(()=>{W1().then(C=>{C&&C.DocSearch?B(()=>C.DocSearch):C&&C.default?B(()=>C.default):x(!0)})},[]);const V=H.useCallback(C=>{try{let J=new URL(C,"http://localhost").pathname;if(O){const bt=O.replace(/\/$/,"");J.startsWith(bt)&&(J=J.slice(bt.length))}return J.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index"}catch{return"index"}},[O]);return R?o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{onClick:C=>C.stopPropagation(),style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Algolia DocSearch is not available. Install @docsearch/react to enable it."})}):U?o.jsx("div",{"data-testid":"algolia-search-modal",children:o.jsx(U,{appId:r,apiKey:T,indexName:p,navigator:{navigate({itemUrl:C}){const F=V(C);s(F)}},hitComponent:({hit:C,children:F})=>o.jsx("a",{href:C.url,onClick:J=>{J.preventDefault();const bt=V(C.url);s(bt)},children:F})})}):o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Loading search..."})})}const F1=()=>o.jsx(Mn,{d:"M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",size:14}),$1=()=>o.jsx(Mn,{d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z",size:14}),P1=()=>o.jsx(Mn,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",size:11}),tm={github:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",twitter:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",discord:"M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.028-.07 8.735 8.735 0 01-1.248-.595.05.05 0 01-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085c-.399.232-.813.431-1.249.594a.05.05 0 00-.03.07c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019z",linkedin:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",youtube:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",mastodon:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765 2.79.765.504 1.783.504 5.253c-.005.995-.01 2.19.013 3.44.075 4.21.56 8.354 3.383 9.386 1.302.476 2.418.576 3.317.507 1.628-.125 2.541-.8 2.541-.8l-.054-1.182s-1.163.366-2.47.322c-1.293-.044-2.658-.138-2.867-1.716a3.23 3.23 0 01-.028-.465s1.27.31 2.879.384c.984.045 1.905-.058 2.842-.17zM13 8.59V5.319c0-.67-.17-1.2-.507-1.592-.348-.4-.806-.605-1.373-.605-.656 0-1.154.252-1.486.756L9.2 4.595l-.434-.717c-.332-.504-.83-.756-1.486-.756-.567 0-1.025.204-1.373.605-.338.392-.507.923-.507 1.592V8.59h1.69V5.468c0-.67.285-1.012.855-1.012.63 0 .946.404.946 1.204V7.11h1.682V5.66c0-.8.316-1.204.946-1.204.57 0 .855.342.855 1.012V8.59H13z",bluesky:"M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.724-1.498 2.697-4.29 4.532-5.668C13.855 1.013 16 .638 16 3.14c0 .5-.286 4.2-.454 4.8-.585 2.093-2.716 2.628-4.544 2.305 3.195.564 4.007 2.433 2.25 4.302-3.337 3.548-4.8-1.244-5.252-2.547 0 0-.116-.334-.166-.334h.332C8.166 11.666 8.05 12 8.05 12c-.452 1.303-1.916 6.095-5.252 2.547-1.756-1.869-.946-3.738 2.25-4.302-1.829.323-3.96-.212-4.544-2.305C.336 7.34.05 3.64.05 3.14.05.638 2.195 1.013 3.468 1.948z"},nm=({platform:r,customIcon:T})=>{const p=r==="custom"&&T?T:tm[r];return p?o.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor",children:o.jsx("path",{d:p})}):null},em={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function lm({entries:r}){const[T,p]=H.useState(r.length<=5),s=T?r:r.slice(0,5);return o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),s.map((A,O)=>o.jsxs("div",{"data-testid":`changelog-entry-${A.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:O<s.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:A.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:A.url?o.jsx("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:A.version}):A.version}),A.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:A.date})]}),A.sections.map(U=>{const B=em[U.type]||"#6b7280";return o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:B}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:B,fontFamily:"var(--font-code, monospace)"},children:U.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:U.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},U.type)})]},A.version)),!T&&r.length>5&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>p(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer"},children:["Show all ",r.length," releases"]})})]})}function am(r,T,p){if(T==="index")return[];for(const s of r)if(s.pages.find(O=>O.id===T)){const O=[],U=s.pages[0];return O.push({label:s.section,href:U?U.urlPath:null}),O.push({label:p,href:null}),O}return[]}function im({config:r,navigation:T,currentPageId:p,pageHtml:s,pageComponent:A,mdxComponents:O,pageTitle:U,pageDescription:B,headings:R,tocEnabled:x=!0,editUrl:V,lastUpdated:C,changelogEntries:F,onNavigate:J,allPages:bt,versioning:nt,currentVersion:ut,i18n:D,currentLocale:k,docContext:Z,basePath:L="",isDraft:pt,dir:At,overrides:w}){var Kn,Ie,ye,si,fa,xl,xe,fi,ra,da,ga,Sl,Al,ma,pa,Yn,Yt,an,Pn;const Rt=k||(D==null?void 0:D.defaultLocale)||"en",Jt=At||((Kn=D==null?void 0:D.localeDirs)==null?void 0:Kn[Rt])||"ltr",zt=Jt==="rtl",Wt=((Ie=r.theme)==null?void 0:Ie.mode)||"auto",[Gt,On]=H.useState(()=>{var h;return Wt==="dark"?!0:Wt==="light"?!1:((h=window.matchMedia)==null?void 0:h.call(window,"(prefers-color-scheme: dark)").matches)??!0}),[ct,yn]=H.useState(()=>typeof window<"u"&&window.innerWidth<768),[j,G]=H.useState(()=>typeof window<"u"&&window.innerWidth>=768),[W,ot]=H.useState(!1),[jt,g]=H.useState(!1),[M,N]=H.useState(!1),[Y,$]=H.useState(null),[it,ht]=H.useState({}),[$t,Ht]=H.useState(()=>{var h;if(!((h=r.banner)!=null&&h.text))return!0;try{const q=Array.from(r.banner.text).reduce((P,gt)=>(P<<5)-P+gt.charCodeAt(0)|0,0).toString(36);return localStorage.getItem("tome-banner-dismissed")===q}catch{return!1}}),Ze=nt&&ut&&ut!==nt.current,[Ke,ia]=H.useState(T.map(h=>h.section)),$n=H.useRef(null),kn=H.useRef(null),ml=H.useRef(""),[pl,zu]=H.useState(()=>typeof window<"u"&&window.innerWidth>1100),ua=((ye=r.theme)==null?void 0:ye.preset)||"amber",hl=((si=ju[ua])==null?void 0:si[Gt?"dark":"light"])||ju.amber.dark,vl=(fa=r.theme)!=null&&fa.accent?Y1(r.theme.accent,Gt):null,Pt=vl?{...hl,...vl}:hl,ca=((xl=ju[ua])==null?void 0:xl.fonts)||ju.amber.fonts,oa={heading:((fi=(xe=r.theme)==null?void 0:xe.fonts)==null?void 0:fi.heading)||ca.heading,body:((da=(ra=r.theme)==null?void 0:ra.fonts)==null?void 0:da.body)||ca.body,code:((Sl=(ga=r.theme)==null?void 0:ga.fonts)==null?void 0:Sl.code)||ca.code};H.useEffect(()=>{if(Wt!=="auto")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),q=P=>On(P.matches);return h.addEventListener("change",q),()=>h.removeEventListener("change",q)},[Wt]),H.useEffect(()=>{document.documentElement.classList.toggle("dark",Gt)},[Gt]),H.useEffect(()=>{const h=()=>{const q=window.innerWidth;zu(q>1100),yn(q<768)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),H.useEffect(()=>{if(ct&&j)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[ct,j]),H.useEffect(()=>{var h;(h=$n.current)==null||h.scrollTo(0,0)},[p]),H.useEffect(()=>{const h=$n.current;if(!h)return;const q=P=>{const gt=P.target;gt.tagName==="IMG"&&gt.closest(".tome-content")&&$(gt.src)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[]),H.useEffect(()=>{const h=$n.current;if(!h)return;const q=P=>{const gt=P.target.closest("a");if(!gt)return;const vt=gt.getAttribute("href");if(!vt||vt.startsWith("http://")||vt.startsWith("https://")||vt.startsWith("mailto:")||vt.startsWith("tel:")||vt.startsWith("//")||vt.startsWith("#"))return;P.preventDefault();let Qt=vt.replace(/^\.\//,"").replace(/^\//,"").replace(/\.mdx?$/,"").replace(/\/$/,"");if(L){const It=L.replace(/^\//,"").replace(/\/$/,"");It&&Qt.startsWith(It+"/")?Qt=Qt.slice(It.length+1):It&&Qt===It&&(Qt="index")}Qt||(Qt="index"),J(Qt)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[J,L]),H.useEffect(()=>{if(!Y)return;const h=q=>{q.key==="Escape"&&$(null)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[Y]);const kt=r.toc,_u=(kt==null?void 0:kt.depth)??3,Je=(kt==null?void 0:kt.enabled)!==!1&&x,Dn=R.filter(h=>h.depth<=_u),[ci,bl]=H.useState("");H.useEffect(()=>{if(!Je||Dn.length<2)return;const h=$n.current;if(!h)return;const q=setTimeout(()=>{const P=[];for(const vt of Dn){const Qt=h.querySelector(`#${CSS.escape(vt.id)}`);Qt&&P.push(Qt)}if(P.length===0)return;const gt=new IntersectionObserver(vt=>{const Qt=vt.filter(It=>It.isIntersecting).sort((It,Se)=>It.boundingClientRect.top-Se.boundingClientRect.top);Qt.length>0&&bl(Qt[0].target.id)},{root:h,rootMargin:"0px 0px -80% 0px",threshold:0});for(const vt of P)gt.observe(vt);sa.current=gt},100);return()=>{var P;clearTimeout(q),(P=sa.current)==null||P.disconnect(),sa.current=null}},[p,Je,Dn.map(h=>h.id).join(",")]);const sa=H.useRef(null);H.useEffect(()=>{bl("")},[p]),H.useEffect(()=>{if(!kn.current||!s)return;const h=s.replace(/<h1[^>]*>[\s\S]*?<\/h1>\s*/,"");h!==ml.current&&(kn.current.innerHTML=h,ml.current=h)},[s]);const oi=H.useCallback((h,q)=>{h.preventDefault();const P=$n.current;if(!P)return;const gt=P.querySelector(`#${CSS.escape(q)}`);gt&&(gt.scrollIntoView({behavior:"smooth",block:"start"}),bl(q))},[]);H.useEffect(()=>{const h=q=>{(q.metaKey||q.ctrlKey)&&q.key==="k"&&(q.preventDefault(),ot(!0)),q.key==="Escape"&&ot(!1)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]);const Zn=T.flatMap(h=>h.pages),tn=Zn.findIndex(h=>h.id===p),xn=tn>0?Zn[tn-1]:null,nn=tn<Zn.length-1?Zn[tn+1]:null,yl=am(T,p,U),Ou=h=>ia(q=>q.includes(h)?q.filter(P=>P!==h):[...q,h]),Du={"--bg":Pt.bg,"--sf":Pt.sf,"--sfH":Pt.sfH,"--bd":Pt.bd,"--tx":Pt.tx,"--tx2":Pt.tx2,"--txM":Pt.txM,"--ac":Pt.ac,"--acD":Pt.acD,"--acT":Pt.acT,"--cdBg":Pt.cdBg,"--cdTx":Pt.cdTx,"--sbBg":Pt.sbBg,"--hdBg":Pt.hdBg,"--font-heading":`"${oa.heading}", serif`,"--font-body":`"${oa.body}", sans-serif`,"--font-code":`"${oa.code}", monospace`},We=A,dn=(Al=r.banner)==null?void 0:Al.link,be=dn?dn.startsWith("#")||L&&dn.startsWith(L+"/"):!1;return o.jsxs("div",{dir:Jt,className:"tome-grain",style:{...Du,color:"var(--tx)",background:"var(--bg)",fontFamily:"var(--font-body)",minHeight:"100vh",overflow:"hidden"},children:[((ma=r.banner)==null?void 0:ma.text)&&!$t&&o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"var(--ac)",color:"#fff",padding:"8px 16px",fontSize:13,fontFamily:"var(--font-body)",fontWeight:500,textAlign:"center",width:"100vw",boxSizing:"border-box"},children:[r.banner.link?o.jsx("a",{href:be&&dn.startsWith("#")?L+"/"+dn.slice(1):dn,...be?{}:{target:"_blank",rel:"noopener noreferrer"},style:{color:"#fff",textDecoration:"underline"},onClick:be?h=>{h.preventDefault();const q=L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),P=dn.startsWith("#")?dn.slice(1):dn.replace(new RegExp("^"+q+"/?"),"");J(P||"index")}:void 0,children:r.banner.text}):o.jsx("span",{children:r.banner.text}),r.banner.dismissible!==!1&&o.jsx("button",{onClick:()=>{Ht(!0);try{const h=Array.from(r.banner.text).reduce((q,P)=>(q<<5)-q+P.charCodeAt(0)|0,0).toString(36);localStorage.setItem("tome-banner-dismissed",h)}catch{}},"aria-label":"Dismiss banner",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",fontSize:16,lineHeight:1,padding:0,opacity:.8},children:"×"})]}),W&&((pa=r.search)==null?void 0:pa.provider)==="algolia"&&r.search.appId&&r.search.apiKey&&r.search.indexName?o.jsx(I1,{appId:r.search.appId,apiKey:r.search.apiKey,indexName:r.search.indexName,onNavigate:h=>{J(h),ot(!1)},onClose:()=>ot(!1),basePath:L}):W?o.jsx(um,{allPages:bt,onNavigate:h=>{J(h),ot(!1)},onClose:()=>ot(!1),mobile:ct}):null,o.jsxs("div",{style:{display:"flex",flexDirection:zt?"row-reverse":"row",flex:1,height:(Yn=r.banner)!=null&&Yn.text&&!$t?"calc(100vh - 32px)":"100vh"},children:[ct&&j&&o.jsx("div",{onClick:()=>G(!1),style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"}}),w!=null&&w.Sidebar?o.jsx(w.Sidebar,{config:r,navigation:T,currentPageId:p,onNavigate:J,mobile:ct,sbOpen:j,setSbOpen:G,versioning:nt,currentVersion:ut}):o.jsxs("aside",{style:{width:j?270:0,minWidth:j?270:0,background:"var(--sbBg)",[zt?"borderLeft":"borderRight"]:"1px solid var(--bd)",display:"flex",flexDirection:"column",transition:"width .2s, min-width .2s",overflow:"hidden",...ct?{position:"fixed",top:0,[zt?"right":"left"]:0,bottom:0,zIndex:201}:{}},children:[o.jsxs("a",{href:"/",style:{padding:"18px 20px",display:"flex",alignItems:"baseline",gap:6,borderBottom:"1px solid var(--bd)",textDecoration:"none",color:"inherit"},children:[o.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:22,fontWeight:700,fontStyle:"italic"},children:r.name}),o.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"var(--ac)",display:"inline-block"}})]}),o.jsx("div",{style:{padding:"12px 14px"},children:o.jsxs("button",{onClick:()=>{ot(!0),ct&&G(!1)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 12px",cursor:"pointer",color:"var(--txM)",fontSize:12.5,fontFamily:"var(--font-body)"},children:[o.jsx(c0,{}),o.jsx("span",{style:{flex:1,textAlign:zt?"right":"left"},children:"Search..."}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:9,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"2px 6px"},children:"⌘K"})]})}),o.jsx("nav",{style:{flex:1,overflow:"auto",padding:"4px 10px 20px"},children:T.map(h=>o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("button",{onClick:()=>Ou(h.section),style:{display:"flex",alignItems:"center",gap:6,width:"100%",background:"none",border:"none",padding:"8px 10px",cursor:"pointer",borderRadius:2,color:"var(--txM)",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",fontFamily:"var(--font-code)"},children:[Ke.includes(h.section)?o.jsx(Vo,{}):o.jsx(Fd,{}),h.section]}),Ke.includes(h.section)&&o.jsx("div",{style:{[zt?"marginRight":"marginLeft"]:8,[zt?"borderRight":"borderLeft"]:"1px solid var(--bd)",[zt?"paddingRight":"paddingLeft"]:0},children:h.pages.map(q=>{const P=p===q.id;return o.jsxs("button",{onClick:()=>{J(q.id),ct&&G(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:zt?"right":"left",background:"none",border:"none",borderRadius:0,[zt?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",padding:"7px 14px",cursor:"pointer",color:P?"var(--ac)":"var(--tx2)",fontSize:13,fontWeight:P?500:400,fontFamily:"var(--font-body)",transition:"all .12s"},children:[q.title,q.badge&&(()=>{const gt={default:{bg:"var(--sf)",text:"var(--tx2)"},info:{bg:"rgba(59,130,246,0.15)",text:"rgb(59,130,246)"},success:{bg:"rgba(34,197,94,0.15)",text:"rgb(34,197,94)"},warning:{bg:"rgba(234,179,8,0.15)",text:"rgb(202,138,4)"},danger:{bg:"rgba(239,68,68,0.15)",text:"rgb(239,68,68)"}},vt=gt[q.badge.variant||"default"]||gt.default;return o.jsx("span",{style:{fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,marginLeft:6,whiteSpace:"nowrap",background:vt.bg,color:vt.text},children:q.badge.text})})()]},q.id)})})]},h.section))}),nt&&ct&&o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid var(--bd)",display:"flex",gap:6},children:nt.versions.map(h=>o.jsxs("button",{onClick:()=>{const q=h===nt.current?"index":`${h}/index`;J(q)},style:{flex:1,padding:"3px 0",textAlign:"center",background:h===(ut||nt.current)?"var(--acD)":"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,cursor:"pointer",color:h===(ut||nt.current)?"var(--ac)":"var(--tx2)",fontSize:11,fontFamily:"var(--font-code)",fontWeight:h===nt.current?600:400},children:[h,h===nt.current?" (latest)":""]},h))}),o.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Wt==="auto"?o.jsx("button",{"aria-label":Gt?"Switch to light mode":"Switch to dark mode",onClick:()=>On(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:Gt?o.jsx(Pd,{}):o.jsx($d,{})}):o.jsx("div",{}),o.jsxs("span",{style:{fontSize:11,color:"var(--txM)",letterSpacing:.2},children:["Built with ","♡"," by Tome"]}),o.jsx("span",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)"},children:"v0.3.2"})]})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w!=null&&w.Header?o.jsx(w.Header,{config:r,navigation:T,currentPageId:p,onNavigate:J,mobile:ct,sbOpen:j,setSbOpen:G,isDark:Gt,setDark:On,versioning:nt,currentVersion:ut,i18n:D,currentLocale:k,onSearchOpen:()=>ot(!0),basePath:L}):o.jsxs("header",{style:{display:"flex",alignItems:"center",gap:ct?8:12,padding:ct?"8px 12px":"10px 24px",borderBottom:"1px solid var(--bd)",background:"var(--hdBg)",backdropFilter:"blur(12px)",maxWidth:"100vw",overflow:"visible",position:"relative",zIndex:200},children:[o.jsx("button",{"aria-label":j?"Close sidebar":"Open sidebar",onClick:()=>G(!j),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:j?o.jsx(X1,{}):o.jsx(Q1,{})}),ct?o.jsx("span",{style:{fontSize:13,color:"var(--ac)",fontFamily:"var(--font-code)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((Yt=T.flatMap(h=>h.pages).find(h=>h.id===p))==null?void 0:Yt.title)||""}):o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-code)",fontSize:11,color:"var(--txM)",letterSpacing:".03em",flex:1},children:T.map(h=>{const q=h.pages.find(P=>P.id===p);return q?o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{children:h.section}),o.jsx(Fd,{}),o.jsx("span",{style:{color:"var(--ac)"},children:q.title})]},h.section):null})}),r.topNav&&r.topNav.length>0&&!ct&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.topNav.map(h=>{const q=h.href.startsWith("#")||L&&h.href.startsWith(L+"/"),P=!q;return o.jsxs("a",{href:q&&h.href.startsWith("#")?L+"/"+h.href.slice(1):h.href,...P?{target:"_blank",rel:"noopener noreferrer"}:{},onClick:q?gt=>{gt.preventDefault();const vt=h.href.startsWith("#")?h.href.slice(1):h.href.replace(new RegExp("^"+L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"/?"),"");J(vt)}:void 0,style:{display:"flex",alignItems:"center",gap:4,color:"var(--txM)",textDecoration:"none",fontSize:12,fontFamily:"var(--font-body)",fontWeight:500,transition:"color .15s"},onMouseOver:gt=>gt.currentTarget.style.color="var(--ac)",onMouseOut:gt=>gt.currentTarget.style.color="var(--txM)",children:[h.label,P&&o.jsx(P1,{})]},h.label)}),o.jsx("span",{style:{width:1,height:16,background:"var(--bd)"}})]}),r.socialLinks&&r.socialLinks.length>0&&!ct&&o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:r.socialLinks.map(h=>o.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer","aria-label":h.label||h.platform,"data-testid":`social-link-${h.platform}`,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--tx2)",cursor:"pointer",transition:"color .15s"},onMouseOver:q=>q.currentTarget.style.color="var(--tx)",onMouseOut:q=>q.currentTarget.style.color="var(--tx2)",children:o.jsx(nm,{platform:h.platform,customIcon:h.icon})},h.url))}),ct&&Wt==="auto"&&o.jsx("button",{"aria-label":Gt?"Switch to light mode":"Switch to dark mode",onClick:()=>On(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",flexShrink:0},children:Gt?o.jsx(Pd,{}):o.jsx($d,{})}),nt&&!ct&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"version-switcher",onClick:()=>g(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)"},children:[o.jsx(F1,{}),ut||nt.current,o.jsx(Vo,{})]}),jt&&o.jsx("div",{"data-testid":"version-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:nt.versions.map(h=>o.jsxs("button",{onClick:()=>{g(!1);const q=h===nt.current?"index":`${h}/index`;J(q)},style:{display:"block",width:"100%",textAlign:"left",background:h===(ut||nt.current)?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:h===(ut||nt.current)?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)",fontWeight:h===nt.current?600:400},children:[h,h===nt.current?" (latest)":""]},h))})]}),D&&D.locales.length>1&&!ct&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"language-switcher",onClick:()=>N(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)"},children:[o.jsx($1,{}),((an=D.localeNames)==null?void 0:an[k||D.defaultLocale])||k||D.defaultLocale,o.jsx(Vo,{})]}),M&&o.jsx("div",{"data-testid":"language-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:D.locales.map(h=>{var It;const q=h===(k||D.defaultLocale),P=((It=D.localeNames)==null?void 0:It[h])||h,gt=k||D.defaultLocale;let vt=p;gt!==D.defaultLocale&&p.startsWith(`${gt}/`)&&(vt=p.slice(gt.length+1));const Qt=h===D.defaultLocale?vt:`${h}/${vt}`;return o.jsx("button",{onClick:()=>{N(!1),J(Qt)},style:{display:"block",width:"100%",textAlign:"left",background:q?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:q?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)",fontWeight:q?600:400},children:P},h)})})]})]}),Ze&&o.jsxs("div",{"data-testid":"old-version-banner",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"var(--acD)",borderBottom:"1px solid var(--bd)",padding:"8px 24px",fontSize:13,color:"var(--tx2)"},children:[o.jsxs("span",{children:["You're viewing docs for ",ut,"."]}),o.jsx("button",{onClick:()=>{J("index")},style:{background:"none",border:"none",color:"var(--ac)",cursor:"pointer",fontWeight:600,fontSize:13,fontFamily:"var(--font-body)",textDecoration:"underline"},children:"Switch to latest."})]}),o.jsxs("div",{ref:$n,style:{flex:1,overflow:"auto",display:"flex"},children:[o.jsxs("main",{style:{flex:1,maxWidth:ct?"100%":760,padding:ct?"24px 16px 60px":"40px 48px 80px",margin:"0 auto",minWidth:0},children:[yl.length>0&&o.jsx("nav",{"aria-label":"Breadcrumbs","data-testid":"breadcrumbs",style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--tx2)",marginBottom:8},children:yl.map((h,q)=>o.jsxs(i0.Fragment,{children:[q>0&&o.jsx("span",{style:{color:"var(--tx2)",opacity:.5},children:"›"}),q<yl.length-1&&h.href!==null?o.jsx("a",{href:h.href,onClick:P=>{P.preventDefault();const gt=T.flatMap(vt=>vt.pages).find(vt=>vt.urlPath===h.href);gt&&J(gt.id)},style:{color:"var(--tx2)",textDecoration:"none",cursor:"pointer"},children:h.label}):o.jsx("span",{style:q===yl.length-1?{color:"var(--tx)"}:void 0,children:h.label})]},q))}),o.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:ct?26:38,fontWeight:400,fontStyle:"italic",lineHeight:1.15,marginBottom:8},children:U}),pt&&o.jsx("div",{"data-testid":"draft-banner",style:{background:"#fef3c7",color:"#92400e",padding:"8px 16px",borderRadius:6,fontSize:13,marginBottom:16},children:"Draft — This page is only visible in development"}),B&&o.jsx("p",{style:{fontSize:16,color:"var(--tx2)",lineHeight:1.6,marginBottom:32},children:B}),o.jsx("div",{style:{borderTop:"1px solid var(--bd)",paddingTop:28},children:F&&F.length>0?o.jsx(lm,{entries:F}):We?o.jsx("div",{className:"tome-content",children:o.jsx(We,{components:O||{}})}):o.jsx("div",{className:"tome-content",ref:kn})}),w!=null&&w.PageFooter?o.jsx(w.PageFooter,{editUrl:V,lastUpdated:C,currentPageId:p,prev:xn,next:nn,onNavigate:J,mobile:ct}):o.jsxs(o.Fragment,{children:[(V||C)&&o.jsxs("div",{style:{marginTop:40,display:"flex",flexDirection:ct?"column":"row",alignItems:ct?"flex-start":"center",justifyContent:"space-between",gap:ct?8:16},children:[V&&o.jsx("div",{"data-testid":"edit-page-link",children:o.jsxs("a",{href:V,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,color:"var(--txM)",textDecoration:"none",fontSize:13,fontFamily:"var(--font-body)",transition:"color .15s"},onMouseOver:h=>h.currentTarget.style.color="var(--ac)",onMouseOut:h=>h.currentTarget.style.color="var(--txM)",children:[o.jsx(V1,{})," Edit this page on GitHub"]})}),C&&o.jsxs("div",{"data-testid":"last-updated",style:{fontSize:12,color:"var(--txM)",fontFamily:"var(--font-body)"},children:["Last updated ",Z1(C)]})]}),o.jsx("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:24,padding:"12px 0"},children:it[p]?o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Thanks for your feedback!"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Was this helpful?"}),o.jsx("button",{onClick:()=>{ht(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"up")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👍"}),o.jsx("button",{onClick:()=>{ht(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"down")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👎"})]})}),o.jsxs("div",{style:{display:"flex",flexDirection:ct?"column":"row",justifyContent:"space-between",marginTop:16,paddingTop:24,borderTop:"1px solid var(--bd)",gap:ct?12:16},children:[xn?o.jsxs("button",{onClick:()=>J(xn.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[zt?o.jsx(n0,{}):o.jsx(t0,{})," ",xn.title]}):o.jsx("div",{}),nn?o.jsxs("button",{onClick:()=>J(nn.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[nn.title," ",zt?o.jsx(t0,{}):o.jsx(n0,{})]}):o.jsx("div",{})]})]})]}),w!=null&&w.Toc?Je&&Dn.length>=2&&pl&&o.jsx(w.Toc,{headings:Dn,activeHeadingId:ci,onScrollToHeading:oi}):Je&&Dn.length>=2&&pl&&o.jsxs("aside",{"data-testid":"toc-sidebar",style:{width:200,padding:zt?"40px 0 40px 16px":"40px 16px 40px 0",position:"sticky",top:0,alignSelf:"flex-start",flexShrink:0},children:[o.jsx("div",{style:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",color:"var(--txM)",marginBottom:12,fontFamily:"var(--font-code)"},children:"On this page"}),o.jsx("nav",{"aria-label":"Table of contents",style:{[zt?"borderRight":"borderLeft"]:"1px solid var(--bd)",[zt?"paddingRight":"paddingLeft"]:0},children:Dn.map((h,q)=>{const P=ci===h.id;return o.jsx("a",{href:`#${h.id}`,onClick:gt=>oi(gt,h.id),"data-testid":`toc-link-${h.id}`,style:{display:"block",fontSize:12,color:P?"var(--ac)":"var(--txM)",fontWeight:P?500:400,textDecoration:"none",padding:"4px 12px",[zt?"paddingRight":"paddingLeft"]:12+(h.depth-2)*12,lineHeight:1.4,transition:"color .15s, font-weight .15s",[zt?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",[zt?"marginRight":"marginLeft"]:-1},children:h.text},q)})})]})]})]})]}),(w==null?void 0:w.Footer)&&o.jsx(w.Footer,{config:r,navigation:T,currentPageId:p,onNavigate:J}),((Pn=r.ai)==null?void 0:Pn.enabled)&&o.jsx(L1,{provider:r.ai.provider||"anthropic",model:r.ai.model,apiKey:typeof __TOME_AI_API_KEY__<"u"&&__TOME_AI_API_KEY__?__TOME_AI_API_KEY__:void 0,context:(Z==null?void 0:Z.map(h=>`## ${h.title}
${h.content}`).join(`

`))??bt.map(h=>`- ${h.title}${h.description?": "+h.description:""}`).join(`
`)}),Y&&o.jsx("div",{onClick:()=>$(null),style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",cursor:"zoom-out"},children:o.jsx("img",{src:Y,alt:"",style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:4,boxShadow:"0 16px 64px rgba(0,0,0,0.4)"}})})]})}function um({allPages:r,onNavigate:T,onClose:p,mobile:s}){const[A,O]=H.useState(""),[U,B]=H.useState([]),[R,x]=H.useState(0),[V,C]=H.useState(null),F=H.useRef(null),J=H.useRef(void 0);H.useEffect(()=>{J1().then(D=>C(!!D)),setTimeout(()=>{var D;return(D=F.current)==null?void 0:D.focus()},50)},[]);const bt=H.useCallback(D=>{if(!D.trim())return[];const k=D.toLowerCase();return r.filter(Z=>Z.title.toLowerCase().includes(k)||(Z.description||"").toLowerCase().includes(k)).slice(0,8).map(Z=>({id:Z.id,title:Z.title,excerpt:Z.description}))},[r]),nt=H.useCallback(async D=>{var Z;if(!D.trim()){B([]),x(0);return}const k=aa;if(k)try{const L=await k.search(D),pt=[];for(const At of L.results.slice(0,8)){const w=await At.data(),Jt=(w.url||"").replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index";pt.push({id:Jt,title:((Z=w.meta)==null?void 0:Z.title)||Jt,excerpt:w.excerpt||void 0})}B(pt),x(0);return}catch{}B(bt(D)),x(0)},[bt]);H.useEffect(()=>(J.current&&clearTimeout(J.current),J.current=setTimeout(()=>nt(A),120),()=>{J.current&&clearTimeout(J.current)}),[A,nt]);const ut=H.useCallback(D=>{D.key==="ArrowDown"?(D.preventDefault(),x(k=>Math.min(k+1,U.length-1))):D.key==="ArrowUp"?(D.preventDefault(),x(k=>Math.max(k-1,0))):D.key==="Enter"&&U.length>0&&(D.preventDefault(),T(U[R].id))},[U,R,T]);return o.jsx("div",{onClick:p,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:s?"stretch":"flex-start",justifyContent:"center",paddingTop:s?0:"12vh"},children:o.jsxs("div",{onClick:D=>D.stopPropagation(),style:{background:"var(--sf)",border:s?"none":"1px solid var(--bd)",borderRadius:s?0:2,width:"100%",maxWidth:s?"100%":520,boxShadow:s?"none":"0 24px 80px rgba(0,0,0,0.4)",overflow:"hidden",display:"flex",flexDirection:"column",...s?{height:"100%"}:{}},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid var(--bd)"},children:[o.jsx(c0,{}),o.jsx("input",{ref:F,value:A,onChange:D=>O(D.target.value),onKeyDown:ut,placeholder:"Search documentation...",style:{flex:1,background:"none",border:"none",outline:"none",color:"var(--tx)",fontSize:15,fontFamily:"var(--font-body)"}}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)",background:"var(--cdBg)",padding:"2px 6px",borderRadius:2,border:"1px solid var(--bd)"},children:"ESC"})]}),U.length>0&&o.jsx("div",{style:{padding:6,maxHeight:s?"none":360,overflow:"auto",flex:s?1:void 0},children:U.map((D,k)=>o.jsxs("button",{onClick:()=>T(D.id),style:{display:"block",width:"100%",textAlign:"left",background:k===R?"var(--acD)":"none",border:"none",borderRadius:2,padding:"10px 14px",cursor:"pointer",color:"var(--tx)",fontFamily:"var(--font-body)"},onMouseEnter:()=>x(k),children:[o.jsx("div",{style:{fontWeight:500,fontSize:14,marginBottom:2},children:D.title}),D.excerpt&&o.jsx("div",{style:{fontSize:12,color:"var(--txM)",lineHeight:1.3},dangerouslySetInnerHTML:{__html:D.excerpt}})]},D.id+k))}),A&&!U.length&&o.jsx("div",{style:{padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No results found"}),V===!1&&A&&U.length>0&&o.jsx("div",{style:{padding:"6px 18px 10px",fontSize:11,color:"var(--txM)",textAlign:"center"},children:"Showing title matches. Build your site for full-text search."})]})})}function o0(r,T,p){let s=r;T&&s.startsWith(T)&&(s=s.slice(T.length));const A=s.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"").replace(/\/$/,"")||"index";return p.find(U=>U.id===A)?A:null}function cm(r,T,p){const s=p.find(A=>A.id===r);return s?T+s.urlPath:T+"/"+r}function om(r,T){if(!r||!T)return;const{repo:p,branch:s="main",dir:A=""}=r,O=A?`${A.replace(/\/$/,"")}/`:"";return`https://github.com/${p}/edit/${s}/${O}${T}`}function sm(r,T,p,s,A){var B;const O=A(r,s,p);if(O)return O;const U=T.startsWith("#")?T.slice(1):T;return U&&p.some(R=>R.id===U)?U:((B=p[0])==null?void 0:B.id)||"index"}async function s0(r,T,p){try{const s=T.find(O=>O.id===r),A=await p(r);return s!=null&&s.isMdx&&A.meta?{isMdx:!0,component:A.default,frontmatter:A.meta.frontmatter,headings:A.meta.headings}:A.default?A.isChangelog&&A.changelogEntries?{isMdx:!1,...A.default,changelogEntries:A.changelogEntries}:{isMdx:!1,...A.default}:null}catch(s){return console.error(`Failed to load page: ${r}`,s),null}}function fm(r,T){return(r==null?void 0:r.version)||void 0}const ui={name:"Get笔记帮助中心",basePath:"/getbiji-docs-v3",theme:{preset:"amber",accent:"#333333",mode:"light",fonts:{heading:"Inter",body:"Inter",code:"JetBrains Mono"}},navigation:[{group:"开始使用",pages:["getting-started/download","getting-started/quickstart"]},{group:"社区精选",pages:["use-cases/index","testimonials/index"]},{group:"开口记",pages:["recording/voice-memo","recording/meeting","recording/classroom","recording/screen-record"]},{group:"随手拍",pages:["recording/photo","recording/book-scan"]},{group:"一键存",pages:["recording/link","recording/import-media"]},{group:"录音增强",pages:["recording/voiceprint","recording/vocabulary","recording/voice-command"]},{group:"知识库",pages:["knowledge-base/create","knowledge-base/upload","knowledge-base/subscribe-live","knowledge-base/subscribe-creator","knowledge-base/add-notes","knowledge-base/share"]},{group:"GetSeed 录音卡",pages:["getseed/index","getseed/quickstart","getseed/device","getseed/liubixiefu","getseed/sprout","getseed/faq"]},{group:"快捷操作",pages:["shortcuts/siri","shortcuts/ios-shortcuts","shortcuts/widget"]},{group:"开发者",pages:["developer/index","developer/skill"]},{group:"常见问题",pages:["faq/index"]},{group:"版本更新",pages:["changelog/index","changelog/ios","changelog/android","changelog/harmonyos"]}],search:{provider:"local"},toc:{enabled:!0,depth:3},math:!1,strictLinks:!1,lastUpdated:!0,redirects:[]},Ve=[{id:"changelog/android",filePath:"changelog/android.md",urlPath:"/changelog/android",frontmatter:{title:"Android 版本更新",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"changelog/harmonyos",filePath:"changelog/harmonyos.md",urlPath:"/changelog/harmonyos",frontmatter:{title:"HarmonyOS 版本更新",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"changelog",filePath:"changelog/index.md",urlPath:"/changelog",frontmatter:{title:"版本更新",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"changelog/ios",filePath:"changelog/ios.md",urlPath:"/changelog/ios",frontmatter:{title:"iOS 版本更新",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"developer",filePath:"developer/index.md",urlPath:"/developer",frontmatter:{title:"开发者",description:"通过 API 把 Get笔记的知识库能力接入你的应用，支持直接调用、Dify、扣子等多种方式",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"developer/skill",filePath:"developer/skill.md",urlPath:"/developer/skill",frontmatter:{title:"Get笔记 Skill",description:"OpenClaw/小龙虾 Get笔记技能安装使用指南",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"faq",filePath:"faq/index.md",urlPath:"/faq",frontmatter:{title:"常见问题",description:"使用 Get笔记时遇到问题？这里有最常见问题的解答",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed/device",filePath:"getseed/device.md",urlPath:"/getseed/device",frontmatter:{title:"设备指南",description:"GetSeed 录音卡的设备清单、按键说明、指示灯含义、充电方式、参数规格、开关机和重置操作",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed/faq",filePath:"getseed/faq.md",urlPath:"/getseed/faq",frontmatter:{title:"常见问题",description:"GetSeed 录音卡的常见问题解答：设备连接、录音使用、充电续航、通话录音、会员权益、隐私安全等",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed",filePath:"getseed/index.md",urlPath:"/getseed",frontmatter:{title:"功能说明",description:"GetSeed 录音卡的核心功能介绍：一键 MARK 标记重点、录音中拍照随手记、闪念灵感记录、固件升级",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed/liubixiefu",filePath:"getseed/liubixiefu.md",urlPath:"/getseed/liubixiefu",frontmatter:{title:"AI 柳比歇夫记日记",description:"让 AI 自动把你的每一天整理成客观日记，无需手动记录，支持对话补充和长期洞察",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed/quickstart",filePath:"getseed/quickstart.md",urlPath:"/getseed/quickstart",frontmatter:{title:"快速使用",description:"GetSeed 录音卡开箱到上手的完整指南：添加设备、开始录音、闪念记录、通话录音、录音同步、生成笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getseed/sprout",filePath:"getseed/sprout.md",urlPath:"/getseed/sprout",frontmatter:{title:"笔记发芽",description:"AI 深度理解你的录音内容，跨领域跨学科生成关联报告，帮你从记录中发现新的认知和连接",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getting-started/download",filePath:"getting-started/download.md",urlPath:"/getting-started/download",frontmatter:{title:"下载安装",description:"Get笔记支持 iOS、Android、微信小程序和网页端，一分钟完成安装，马上开始记笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"getting-started/quickstart",filePath:"getting-started/quickstart.md",urlPath:"/getting-started/quickstart",frontmatter:{title:"快速上手",description:"5 分钟学会 Get笔记的四种记笔记方式：语音、会议录音、拍照、保存链接，还能搜索和追加笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"index",filePath:"index.md",urlPath:"/",frontmatter:{title:"Get笔记帮助中心",description:"让记笔记，找笔记，用笔记变得简单",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/add-notes",filePath:"knowledge-base/add-notes.md",urlPath:"/knowledge-base/add-notes",frontmatter:{title:"将笔记加入知识库",description:"把已有的录音、文字、图片、链接笔记添加到知识库，统一管理和 AI 搜索",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/create",filePath:"knowledge-base/create.md",urlPath:"/knowledge-base/create",frontmatter:{title:"创建知识库",description:"创建一个知识库，把笔记、文件、直播、博主内容集中管理，支持 AI 搜索和问答",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/share",filePath:"knowledge-base/share.md",urlPath:"/knowledge-base/share",frontmatter:{title:"分享和团队管理",description:"将知识库公开分享或设为团队模式，支持成员管理、权限分配和订阅他人知识库",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/subscribe-creator",filePath:"knowledge-base/subscribe-creator.md",urlPath:"/knowledge-base/subscribe-creator",frontmatter:{title:"订阅博主",description:"订阅抖音博主，新视频自动变笔记，每天早上更新，不错过任何精彩内容",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/subscribe-live",filePath:"knowledge-base/subscribe-live.md",urlPath:"/knowledge-base/subscribe-live",frontmatter:{title:"订阅直播",description:"订阅得到 App 或视频号直播，AI 自动全程记录并生成内容总结和章节纪要",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"knowledge-base/upload",filePath:"knowledge-base/upload.md",urlPath:"/knowledge-base/upload",frontmatter:{title:"上传文件",description:"把 PDF、Word、PPT 文件上传到知识库，AI 自动分析内容，支持搜索和问答",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/book-scan",filePath:"recording/book-scan.md",urlPath:"/recording/book-scan",frontmatter:{title:"智能拍书",description:"拍下纸质书页自动识别书籍，3 秒变成数字笔记并归类到对应书籍",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/classroom",filePath:"recording/classroom.md",urlPath:"/recording/classroom",frontmatter:{title:"课堂录音",description:"上课录音自动转文字，AI 标注考点重点，下课即得一份完整学霸笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/import-media",filePath:"recording/import-media.md",urlPath:"/recording/import-media",frontmatter:{title:"导入音视频",description:"导入手机中已有的录音或视频文件，AI 自动转写文字并整理成结构化笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/link",filePath:"recording/link.md",urlPath:"/recording/link",frontmatter:{title:"链接保存",description:"复制公众号、抖音、B 站、小红书等链接粘贴进来，AI 自动读取内容并生成精华总结笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/meeting",filePath:"recording/meeting.md",urlPath:"/recording/meeting",frontmatter:{title:"会议录音",description:"手机放桌上录音，AI 自动区分发言人并生成会议纪要",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/photo",filePath:"recording/photo.md",urlPath:"/recording/photo",frontmatter:{title:"拍照记笔记",description:"拍几张照片，AI 自动识别文字并整理成条理清晰的笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/screen-record",filePath:"recording/screen-record.md",urlPath:"/recording/screen-record",frontmatter:{title:"手机内录",description:"手机在播什么就录什么，后台录制视频、播客、网课的声音，自动转文字生成笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/vocabulary",filePath:"recording/vocabulary.md",urlPath:"/recording/vocabulary",frontmatter:{title:"语音词库",description:"添加专有名词、人名、术语，让 AI 录音转文字更准确",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/voice-command",filePath:"recording/voice-command.md",urlPath:"/recording/voice-command",frontmatter:{title:"语音口令",description:"录音时说一句口令词，AI 自动捕捉并标记重点内容",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/voice-memo",filePath:"recording/voice-memo.md",urlPath:"/recording/voice-memo",frontmatter:{title:"语音速记",description:"对着手机说话，AI 自动转文字、去口头禅、分段落，说完即得一篇干净笔记",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"recording/voiceprint",filePath:"recording/voiceprint.md",urlPath:"/recording/voiceprint",frontmatter:{title:"声纹识别",description:"录入你的声音后，AI 在录音笔记中自动标记你的发言",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"shortcuts/ios-shortcuts",filePath:"shortcuts/ios-shortcuts.md",urlPath:"/shortcuts/ios-shortcuts",frontmatter:{title:"快捷指令",description:"用 iPhone 操作按钮或轻点背面，一按就能打开 Get笔记开始录音",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"shortcuts/siri",filePath:"shortcuts/siri.md",urlPath:"/shortcuts/siri",frontmatter:{title:"Siri 唤起",description:"喊一声 Siri 就能开始录音、写笔记、搜笔记，双手不用碰手机",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"shortcuts/widget",filePath:"shortcuts/widget.md",urlPath:"/shortcuts/widget",frontmatter:{title:"桌面小组件",description:"把 Get笔记放到手机桌面，点一下就能录音、写笔记、搜笔记，不用打开 App",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"testimonials/caojiang",filePath:"testimonials/caojiang.md",urlPath:"/testimonials/caojiang",frontmatter:{title:"曹将：看完罗振宇跨年演讲，种草了一个软件",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"testimonials",filePath:"testimonials/index.md",urlPath:"/testimonials",frontmatter:{title:"达人推荐",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"testimonials/muyezhiyue",filePath:"testimonials/muyezhiyue.md",urlPath:"/testimonials/muyezhiyue",frontmatter:{title:"暮野之月：得到出品的Get笔记App来了，免费版已够用",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"testimonials/wangshuyi",filePath:"testimonials/wangshuyi.md",urlPath:"/testimonials/wangshuyi",frontmatter:{title:"王树义老师：得到 Get 笔记 AI 手机应用，好用吗？",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"testimonials/xitongfeilun",filePath:"testimonials/xitongfeilun.md",urlPath:"/testimonials/xitongfeilun",frontmatter:{title:"系统飞轮：看完罗振宇跨年演讲，种草了一个笔记软件",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"},{id:"use-cases",filePath:"use-cases/index.md",urlPath:"/use-cases",frontmatter:{title:"用户案例",hidden:!1,draft:!1},isMdx:!1,lastUpdated:"2026-03-19T16:28:39+08:00"}],rm=[{section:"开始使用",pages:[{title:"下载安装",id:"getting-started/download",urlPath:"/getting-started/download"},{title:"快速上手",id:"getting-started/quickstart",urlPath:"/getting-started/quickstart"}]},{section:"社区精选",pages:[{title:"用户案例",id:"use-cases",urlPath:"/use-cases"},{title:"达人推荐",id:"testimonials",urlPath:"/testimonials"}]},{section:"开口记",pages:[{title:"语音速记",id:"recording/voice-memo",urlPath:"/recording/voice-memo"},{title:"会议录音",id:"recording/meeting",urlPath:"/recording/meeting"},{title:"课堂录音",id:"recording/classroom",urlPath:"/recording/classroom"},{title:"手机内录",id:"recording/screen-record",urlPath:"/recording/screen-record"}]},{section:"随手拍",pages:[{title:"拍照记笔记",id:"recording/photo",urlPath:"/recording/photo"},{title:"智能拍书",id:"recording/book-scan",urlPath:"/recording/book-scan"}]},{section:"一键存",pages:[{title:"链接保存",id:"recording/link",urlPath:"/recording/link"},{title:"导入音视频",id:"recording/import-media",urlPath:"/recording/import-media"}]},{section:"录音增强",pages:[{title:"声纹识别",id:"recording/voiceprint",urlPath:"/recording/voiceprint"},{title:"语音词库",id:"recording/vocabulary",urlPath:"/recording/vocabulary"},{title:"语音口令",id:"recording/voice-command",urlPath:"/recording/voice-command"}]},{section:"知识库",pages:[{title:"创建知识库",id:"knowledge-base/create",urlPath:"/knowledge-base/create"},{title:"上传文件",id:"knowledge-base/upload",urlPath:"/knowledge-base/upload"},{title:"订阅直播",id:"knowledge-base/subscribe-live",urlPath:"/knowledge-base/subscribe-live"},{title:"订阅博主",id:"knowledge-base/subscribe-creator",urlPath:"/knowledge-base/subscribe-creator"},{title:"将笔记加入知识库",id:"knowledge-base/add-notes",urlPath:"/knowledge-base/add-notes"},{title:"分享和团队管理",id:"knowledge-base/share",urlPath:"/knowledge-base/share"}]},{section:"GetSeed 录音卡",pages:[{title:"功能说明",id:"getseed",urlPath:"/getseed"},{title:"快速使用",id:"getseed/quickstart",urlPath:"/getseed/quickstart"},{title:"设备指南",id:"getseed/device",urlPath:"/getseed/device"},{title:"AI 柳比歇夫记日记",id:"getseed/liubixiefu",urlPath:"/getseed/liubixiefu"},{title:"笔记发芽",id:"getseed/sprout",urlPath:"/getseed/sprout"},{title:"常见问题",id:"getseed/faq",urlPath:"/getseed/faq"}]},{section:"快捷操作",pages:[{title:"Siri 唤起",id:"shortcuts/siri",urlPath:"/shortcuts/siri"},{title:"快捷指令",id:"shortcuts/ios-shortcuts",urlPath:"/shortcuts/ios-shortcuts"},{title:"桌面小组件",id:"shortcuts/widget",urlPath:"/shortcuts/widget"}]},{section:"开发者",pages:[{title:"开发者",id:"developer",urlPath:"/developer"},{title:"Get笔记 Skill",id:"developer/skill",urlPath:"/developer/skill"}]},{section:"常见问题",pages:[{title:"常见问题",id:"faq",urlPath:"/faq"}]},{section:"版本更新",pages:[{title:"版本更新",id:"changelog",urlPath:"/changelog"},{title:"iOS 版本更新",id:"changelog/ios",urlPath:"/changelog/ios"},{title:"Android 版本更新",id:"changelog/android",urlPath:"/changelog/android"},{title:"HarmonyOS 版本更新",id:"changelog/harmonyos",urlPath:"/changelog/harmonyos"}]}],Zo=null,dm={"changelog/android":()=>et(()=>import("./android-CUfoHb58.js"),[]),"changelog/harmonyos":()=>et(()=>import("./harmonyos-DEnHT68Q.js"),[]),changelog:()=>et(()=>import("./changelog-Cl8qN1c2.js"),[]),"changelog/ios":()=>et(()=>import("./ios-4htrV72r.js"),[]),developer:()=>et(()=>import("./developer-Do8h8irZ.js"),[]),"developer/skill":()=>et(()=>import("./skill-NUcgcdsR.js"),[]),faq:()=>et(()=>import("./faq-DCD_EfHJ.js"),[]),"getseed/device":()=>et(()=>import("./device-DaHzLX-x.js"),[]),"getseed/faq":()=>et(()=>import("./faq-C0yBwND3.js"),[]),getseed:()=>et(()=>import("./getseed-fW6IgAu3.js"),[]),"getseed/liubixiefu":()=>et(()=>import("./liubixiefu-BoFBbaIw.js"),[]),"getseed/quickstart":()=>et(()=>import("./quickstart-CRFVuAZE.js"),[]),"getseed/sprout":()=>et(()=>import("./sprout-Cf5Nn-1D.js"),[]),"getting-started/download":()=>et(()=>import("./download-Cw7pMjic.js"),[]),"getting-started/quickstart":()=>et(()=>import("./quickstart-Op6wuyxm.js"),[]),index:()=>et(()=>import("./index-BHc--1il.js"),[]),"knowledge-base/add-notes":()=>et(()=>import("./add-notes-a-GBInWK.js"),[]),"knowledge-base/create":()=>et(()=>import("./create-D7T-UI4M.js"),[]),"knowledge-base/share":()=>et(()=>import("./share-CSKpk-2L.js"),[]),"knowledge-base/subscribe-creator":()=>et(()=>import("./subscribe-creator-BZbD7fB1.js"),[]),"knowledge-base/subscribe-live":()=>et(()=>import("./subscribe-live-Bg8cqFs5.js"),[]),"knowledge-base/upload":()=>et(()=>import("./upload-CHicdU7G.js"),[]),"recording/book-scan":()=>et(()=>import("./book-scan-DcsUXAxJ.js"),[]),"recording/classroom":()=>et(()=>import("./classroom-IUXNdB6_.js"),[]),"recording/import-media":()=>et(()=>import("./import-media-CkQvXc5s.js"),[]),"recording/link":()=>et(()=>import("./link-B4Z1IQfm.js"),[]),"recording/meeting":()=>et(()=>import("./meeting-CK3NUcSw.js"),[]),"recording/photo":()=>et(()=>import("./photo-Cm3T5Z-h.js"),[]),"recording/screen-record":()=>et(()=>import("./screen-record-cIQzL-5L.js"),[]),"recording/vocabulary":()=>et(()=>import("./vocabulary-CfZc-qlX.js"),[]),"recording/voice-command":()=>et(()=>import("./voice-command-q9GCYctm.js"),[]),"recording/voice-memo":()=>et(()=>import("./voice-memo-uezghAR3.js"),[]),"recording/voiceprint":()=>et(()=>import("./voiceprint-AHmdYUOi.js"),[]),"shortcuts/ios-shortcuts":()=>et(()=>import("./ios-shortcuts-CL6Hwgx6.js"),[]),"shortcuts/siri":()=>et(()=>import("./siri-CPlOPXyy.js"),[]),"shortcuts/widget":()=>et(()=>import("./widget-mJdA5f3z.js"),[]),"testimonials/caojiang":()=>et(()=>import("./caojiang--_LNk75v.js"),[]),testimonials:()=>et(()=>import("./testimonials-BkjFidC1.js"),[]),"testimonials/muyezhiyue":()=>et(()=>import("./muyezhiyue-BTHlL5kS.js"),[]),"testimonials/wangshuyi":()=>et(()=>import("./wangshuyi-qr7zvimH.js"),[]),"testimonials/xitongfeilun":()=>et(()=>import("./xitongfeilun-BMiCe5c0.js"),[]),"use-cases":()=>et(()=>import("./use-cases-BesB7-C3.js"),[])};function f0(r){const T=dm[r];return T?T():Promise.resolve({default:null})}const gm=[{id:"changelog/android",title:"Android 版本更新",content:`
# Android 版本更新

Get笔记 Android 完整版本记录。

---

### v2.6.5
- 复制录音文字记录时，支持选择「原文版」或「AI优化版」
- 录音卡连接体验优化，新增使用说明和故障排查提醒
- 录音卡新增电量说明、指示灯状态说明，低电量时自动提醒充电
- 修复若干已知问题

### v2.6.3
- GetSeed录音卡新增「AI柳比歇夫」日记功能
- 笔记发芽支持对单条录音卡笔记进行"发芽"

### v2.6.1
- 支持「声纹识别」：AI认识你的声音，自动标记
- 新增「语音口令」：说"标记一下"即可标记重点
- 优化「纠错替换」：一键替换纠错

### v2.6.0
**文字记录升级**
- 批量纠错：长按快速查找替换
- AI优化版：智能优化专有名词和口水词
- 说话人筛选：单独查看某人发言

**播放器优化**
- 倍速播放：0.5x-3x
- 跳过空白：自动过滤沉默片段

**笔记管理**
- 多维筛选：按类型、时间等维度筛选笔记
- 标题快改：快速修改笔记标题

### v2.4.9
- 录音卡同步更稳定

### v2.4.4
- WiFi快传优化
- 蓝牙权限引导完善

### v2.4.3
- 蓝牙连接稳定性提升
- 固件升级更顺滑

### v2.4.2
- 支持 Get 笔记录音卡
- 通话、会议也能录
- 一键 Mark 重点
- 支持记录闪念

### v2.4.0
**课堂录音上线**
- 边录边拍PPT/板书
- 支持上传课件
- 多语言识别

**学习辅导模式**
- 全新学习辅导模式上线

### v2.3.8
- 微信一键登录

### v2.3.7
- 最近删除：误删笔记可恢复
- 长按速记：快速创建笔记
- 多语言切换

### v2.3.5
- 录音上传速度优化

### v2.3.4
- 追加笔记数量展示

### v2.3.3
- 手机内录修复

### v2.3.2
- 会议总结金句
- 录音润色
- AI对话分享

### v2.3.0
- 邀请好友奖励
- 更换手机号
- 语音词库

### v2.2.1
- 粤语识别
- 智能拍书相册选取
- 播放按钮优化

### v2.2.0
- 智能拍书
- 书籍视图
- AI读书伙伴

### v2.1.6
- 侧边栏
- 日历热力图
- 标签管理

### v2.1.3
- 会议图片展示
- 表格优化

### v2.1.1
- 视频号下线通知
- 耗电优化
- 知识库文件问AI

### v2.1.0
- 链接分享笔记
- 多图转笔记
- 会议记录优化
- 知识库权限
- 清理缓存

### v2.0.3
- 语音转写优化
- 批量添加图片

### v2.0.2
- 修改文件名
- 跨知识库移动
- 公式排版

### v2.0.0-v2.0.1
**全新AI助手**
- 连续对话
- 得到内容接入
- Get日报自动生成
- 灵活提问

### v1.3.1
- 一键登录
- 海报修复
- 录音进度条

### v1.3.0
- 录音打断优化
- 会议录音快捷方式
- 链接自动识别

### v1.2.9
- 导入音视频
- OCR升级
- 语音词库
- 导出升级

### v1.2.8
- 知识广场
- 自定义封面
- 批量上传

### v1.2.5-v1.2.7
- 笔记分类筛选
- 移动到知识库

### v1.2.2-v1.2.4
- 团队版知识库
- 公众号订阅
- 知识共享

### v1.2.1
- 异常中断优化

### v1.2.0
- 知识库添加笔记
- 搜索优化

### v1.1.9
- 会议录音、手机内录优化

### v1.1.8
- 容量扩充
- 线下会议录音
- 手机内录

### v1.1.7
- DeepSeek-R1
- 多格式文档上传

### v1.1.5
- 个人知识库
- 直播订阅
- 抖音博主订阅

### v1.1.4
- 个人知识库
- 直播订阅
- 抖音博主订阅

### v1.1.2
- 知识库第一版
- 罗振宇学习笔记

### v1.1.1
- M系列电脑适配

### v1.1.0
- 全网搜索
- 搜索历史

### v1.0.8
- 导入导出
- 界面升级

### v1.0.7
- 流程透明
- 异常处理

### v1.0.6
- 笔记分享
- 拍照转笔记

### v1.0.5
- 录音修复

### v1.0.4
- 润色提速

### v1.0.3
- 录音稳定性
- 抖音转录

### v1.0.2
- 排版优化

### v1.0.1
- 正式上线

---

**下载渠道**：应用宝、华为、小米、OPPO、VIVO、荣耀
`},{id:"changelog/harmonyos",title:"HarmonyOS 版本更新",content:`
# HarmonyOS 版本更新

Get笔记 HarmonyOS 完整版本记录。

---

### v2.6.5
- 复制录音文字记录时，支持选择「原文版」或「AI优化版」
- 录音卡连接体验优化，新增使用说明和故障排查提醒
- 录音卡新增电量说明、指示灯状态说明，低电量时自动提醒充电
- 修复若干已知问题

### v2.6.3
- GetSeed录音卡新增「AI柳比歇夫」日记功能
- 笔记发芽支持对单条录音卡笔记进行"发芽"

### v2.6.1
- 支持「声纹识别」：AI认识你的声音，自动标记
- 新增「语音口令」：说"标记一下"即可标记重点
- 优化「纠错替换」：一键替换纠错

### v2.6.0
**文字记录升级**
- 批量纠错：长按快速查找替换
- AI优化版：智能优化专有名词和口水词
- 说话人筛选：单独查看某人发言

**播放器优化**
- 倍速播放：0.5x-3x
- 跳过空白：自动过滤沉默片段

**笔记管理**
- 多维筛选：按类型、时间等维度筛选笔记
- 标题快改：快速修改笔记标题

### v2.4.9
- 录音卡同步更稳定

### v2.4.4
- WiFi快传优化
- 蓝牙权限引导完善

### v2.4.3
- 蓝牙连接稳定性提升
- 固件升级更顺滑

### v2.4.2
- 支持 Get 笔记录音卡
- 通话、会议也能录
- 一键 Mark 重点
- 支持记录闪念

### v2.4.0
**课堂录音上线**
- 边录边拍PPT/板书
- 支持上传课件
- 多语言识别

**学习辅导模式**
- 全新学习辅导模式上线

### v2.3.8
- 微信一键登录

### v2.3.7
- 最近删除：误删笔记可恢复
- 长按速记：快速创建笔记
- 多语言切换

### v2.3.5
- 录音上传速度优化

### v2.3.4
- 追加笔记数量展示

### v2.3.3
- 手机内录修复

### v2.3.2
- 会议总结金句
- 录音润色
- AI对话分享

### v2.3.0
- 邀请好友奖励
- 更换手机号
- 语音词库

### v2.2.1
- 粤语识别
- 智能拍书相册选取
- 播放按钮优化

### v2.2.0
- 智能拍书
- 书籍视图
- AI读书伙伴

### v2.1.6
- 侧边栏
- 日历热力图
- 标签管理

### v2.1.3
- 会议图片展示
- 表格优化

### v2.1.1
- 视频号下线通知
- 耗电优化
- 知识库文件问AI

### v2.1.0
- 链接分享笔记
- 多图转笔记
- 会议记录优化
- 知识库权限
- 清理缓存

### v2.0.3
- 语音转写优化
- 批量添加图片

### v2.0.2
- 修改文件名
- 跨知识库移动
- 公式排版

### v2.0.0-v2.0.1
**全新AI助手**
- 连续对话
- 得到内容接入
- Get日报自动生成
- 灵活提问

### v1.3.1
- 一键登录
- 海报修复
- 录音进度条

### v1.3.0
- 录音打断优化
- 会议录音快捷方式
- 链接自动识别

### v1.2.9
- 导入音视频
- OCR升级
- 语音词库
- 导出升级

### v1.2.8
- 知识广场
- 自定义封面
- 批量上传

### v1.2.6
- 笔记分类筛选
- 移动到知识库
- HarmonyOS 首版上线

---

**下载渠道**：华为应用市场
`},{id:"changelog",title:"版本更新",content:`
# 版本更新

Get笔记 各平台更新记录。

---

## [iOS 版本更新](/getbiji-docs-v3/changelog/ios)

最新版本：v2.6.5 | App Store 下载

---

## [Android 版本更新](/getbiji-docs-v3/changelog/android)

最新版本：v2.6.5 | 应用宝、华为、小米等渠道下载

---

## [HarmonyOS 版本更新](/getbiji-docs-v3/changelog/harmonyos)

最新版本：v2.6.5 | 华为应用市场下载

---

> 💡 想要什么新功能？可以在 App 内反馈给我们。
`},{id:"changelog/ios",title:"iOS 版本更新",content:`
# iOS 版本更新

Get笔记 iOS 完整版本记录。

---

### v2.6.5
- 复制录音文字记录时，支持选择「原文版」或「AI优化版」
- 录音卡连接体验优化，新增使用说明和故障排查提醒
- 录音卡新增电量说明、指示灯状态说明，低电量时自动提醒充电
- 修复若干已知问题

### v2.6.3
- GetSeed录音卡新增「AI柳比歇夫」日记功能
- 笔记发芽支持对单条录音卡笔记进行"发芽"

### v2.6.1
- 支持「声纹识别」：AI认识你的声音，自动标记
- 新增「语音口令」：说"标记一下"即可标记重点
- 优化「纠错替换」：一键替换纠错

### v2.6.0
**文字记录升级**
- 批量纠错：长按快速查找替换
- AI优化版：智能优化专有名词和口水词
- 说话人筛选：单独查看某人发言

**播放器优化**
- 倍速播放：0.5x-3x
- 跳过空白：自动过滤沉默片段

**笔记管理**
- 多维筛选：按类型、时间等维度筛选笔记
- 标题快改：快速修改笔记标题

### v2.4.9
- 录音卡同步更稳定

### v2.4.4
- WiFi快传优化
- 蓝牙权限引导完善

### v2.4.3
- 蓝牙连接稳定性提升
- 固件升级更顺滑

### v2.4.2
- 支持 Get 笔记录音卡
- 通话、会议也能录
- 一键 Mark 重点
- 支持记录闪念

### v2.4.0
**课堂录音上线**
- 边录边拍PPT/板书
- 支持上传课件
- 多语言识别

**学习辅导模式**
- 全新学习辅导模式上线

### v2.3.8
- 微信一键登录

### v2.3.7
- 最近删除：误删笔记可恢复
- 长按速记：快速创建笔记
- 多语言切换

### v2.3.5
- 录音上传速度优化

### v2.3.4
- 追加笔记数量展示

### v2.3.3
- 手机内录修复

### v2.3.2
- 会议总结金句
- 录音润色
- AI对话分享

### v2.3.0
- 邀请好友奖励
- 更换手机号
- 语音词库

### v2.2.1
- 粤语识别
- 智能拍书相册选取
- 播放按钮优化

### v2.2.0
- 智能拍书
- 书籍视图
- AI读书伙伴

### v2.1.6
- 侧边栏
- 日历热力图
- 标签管理

### v2.1.3
- 会议图片展示
- 表格优化

### v2.1.1
- 视频号下线通知
- 耗电优化
- 知识库文件问AI

### v2.1.0
- 链接分享笔记
- 多图转笔记
- 会议记录优化
- 知识库权限
- 清理缓存

### v2.0.3
- 语音转写优化
- 批量添加图片

### v2.0.2
- 修改文件名
- 跨知识库移动
- 公式排版

### v2.0.0-v2.0.1
**全新AI助手**
- 连续对话
- 得到内容接入
- Get日报自动生成
- 灵活提问

### v1.3.1
- 一键登录
- 海报修复
- 录音进度条

### v1.3.0
- 录音打断优化
- 会议录音快捷方式
- 链接自动识别

### v1.2.9
- 导入音视频
- OCR升级
- 语音词库
- 导出升级

### v1.2.8
- 知识广场
- 自定义封面
- 批量上传

### v1.2.5-v1.2.7
- 笔记分类筛选
- 移动到知识库

### v1.2.2-v1.2.4
- 团队版知识库
- 公众号订阅
- 知识共享

### v1.2.1
- 异常中断优化

### v1.2.0
- 知识库添加笔记
- 搜索优化

### v1.1.9
- 会议录音、手机内录优化

### v1.1.8
- 容量扩充
- 线下会议录音
- 手机内录

### v1.1.7
- DeepSeek-R1
- 多格式文档上传

### v1.1.5
- 个人知识库
- 直播订阅
- 抖音博主订阅

### v1.1.4
- 个人知识库
- 直播订阅
- 抖音博主订阅

### v1.1.2
- 知识库第一版
- 罗振宇学习笔记

### v1.1.1
- M系列电脑适配

### v1.1.0
- 全网搜索
- 搜索历史

### v1.0.8
- 导入导出
- 界面升级

### v1.0.7
- 流程透明
- 异常处理

### v1.0.6
- 笔记分享
- 拍照转笔记

### v1.0.5
- 录音修复

### v1.0.4
- 润色提速

### v1.0.3
- 录音稳定性
- 抖音转录

### v1.0.2
- 排版优化

### v1.0.1
- 正式上线

---

**下载渠道**：App Store
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

![知识库网页版顶部导航栏，右侧显示「API 设置」按钮，点击可打开 API 配置页面](/getbiji-docs-v3/images/GYUKbFlMAo83gsxZk2nccbTnn0f.png)

你会看到两个关键参数：

- **参数值 1（API Key）**：用于身份验证
- **参数值 2（知识库 ID）**：指定要查询的知识库

![API 配置页面，显示两个参数值：参数值1为 API Key（用于认证），参数值2为知识库 ID（用于指定查询的知识库），每个参数旁有复制按钮](/getbiji-docs-v3/images/XpT8brRgeolr5txpLhZcXZjqneZ.png)

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

![Dify 知识库页面，左侧标签栏选中「外部知识库 API」，右上角显示蓝色「添加外部知识库 API」按钮](/getbiji-docs-v3/images/QzjpbvqchoLc6ixPA1Cc1tgjnmf.png)

2. 填写配置信息：
   - **名称**：建议填「XXX 的 Get笔记知识库」
   - **API Endpoint**：\`https://open-api.biji.com/getnote/openapi/knowledge/dify\`
   - **API Key**：粘贴你的参数值 1

![Dify 添加外部知识库 API 表单，包含名称、API Endpoint 和 API Key 三个输入框，底部有取消和保存按钮](/getbiji-docs-v3/images/V3eUbiVQqo3tZaxKvA5cDlFinHc.png)

3. 新建外部知识库，选择刚添加的 API，在**外部知识库 ID** 中粘贴参数值 2

![Dify 创建外部知识库页面，下拉菜单选择已添加的外部知识库 API，下方输入框填写外部知识库 ID](/getbiji-docs-v3/images/BvhLb0916o4UAAxH40JckpIOnQf.png)

4. 测试通过后，就可以在 Dify 的 Agent 中使用这个知识库了

![Dify 知识库召回测试页面，左侧输入测试问题，右侧显示召回结果和相关内容片段](/getbiji-docs-v3/images/REmbbLe01oajZixUmaicMyCqn3b.png)

#### 在扣子中使用

Get笔记知识库已上架[扣子插件商店](https://www.coze.cn/store/agent?cate_type=recommend)，搜索「Get笔记知识库」即可找到。目前提供召回能力，可配合模型做进一步处理。

![扣子插件商店搜索结果页面，显示「Get笔记知识库」插件卡片，包含插件图标、名称和简介](/getbiji-docs-v3/images/Qg8Fb4uyCoHVa5xV7ZnchC5an4d.png)

**方式一：在工作流中使用**

1. 进入[扣子工作流](https://www.coze.cn/work_flow)，创建新工作流，添加「开始」节点并设置输入参数（如 Question）

![扣子工作流编辑器，左侧为「开始」节点配置面板，添加了一个名为 Question 的字符串输入参数](/getbiji-docs-v3/images/C5CTbGoPdotA2CxLIQgcTOXXnQg.png)

2. 添加节点，搜索「Get笔记知识库」插件，选择 **getnote_knowledge_recall** 工具

![扣子工作流添加节点面板，搜索框输入「Get笔记知识库」，搜索结果显示两个工具，第二个为 getnote_knowledge_recall](/getbiji-docs-v3/images/PNPkbYhypoRkpUx3sL6cf1bhnid.png)

3. 配置参数：**question** 关联开始节点的输入、**Authorization** 填参数值 1、**topic_id** 填参数值 2

![扣子工作流 getnote_knowledge_recall 节点配置面板，显示 question、Authorization、topic_id、top_k 等参数输入框](/getbiji-docs-v3/images/QgFBbngvSoXEYUx2Ff6cF8LynSb.png)

4. 后续可接模型节点或输出节点，完成工作流搭建

![扣子完整工作流示例，从开始节点到 Get笔记知识库召回节点，再到大模型处理节点，最后到结束输出节点](/getbiji-docs-v3/images/DM80b3b9SoXBi7x7TSqcB7EUnnc.png)

**方式二：在 Agent 中直接使用插件**

1. 新建 Agent，在「编排」标签页点击「添加插件」

![扣子 Agent 编排页面，左侧显示编排配置区域，技能区域有「添加插件」按钮](/getbiji-docs-v3/images/K5A8bmw0KowEPLxuiWUcwGI3nhc.png)

2. 搜索「Get笔记知识库」，选择 **getnote_knowledge_recall** 工具

![扣子插件搜索弹窗，输入「Get笔记知识库」后显示搜索结果，列出可用的知识库工具](/getbiji-docs-v3/images/TpxsbGxIGoG4GAx3p2SchcOvn6r.png)

3. 配置 **Authorization**（参数值 1）和 **topic_id**（参数值 2，需加 Bearer 前缀）

![扣子 Agent 插件参数配置面板，显示 Authorization 和 topic_id 两个输入框，需要填入对应的 API 参数值](/getbiji-docs-v3/images/IBvRbay9QoXsxXxXenmcKy6unEg.png)

> 填完两个参数后，**必须把参数开关切到关闭状态**（点击滑块按钮），否则每次调用时会要求用户手动输入。

![扣子 Agent 插件参数配置完成状态，Authorization 和 topic_id 旁边的开关滑块已切换到关闭（灰色）状态](/getbiji-docs-v3/images/PQkCbP42XoROCuxRUJJc7EWTnhg.png)

## 小技巧

- **先用网页版测试**：在知识库网页版直接提问，确认效果满意后再接入 API
- **合理设置 top_k**：召回接口默认返回 10 条结果，如果你的知识库内容少，可以调小这个值减少噪音
- **善用对话历史**：搜索接口支持 \`history\` 参数，传入之前的对话记录可以实现追问效果
- **深度思考按需开启**：\`deep_seek\` 开启后回答更深入但更慢，简单查询可以关闭提速

## 需要帮助？

扫码加入官方交流群，与其他开发者交流：

![Get笔记官方交流群二维码，微信扫码即可加入](/getbiji-docs-v3/images/NvqGbWNRxo44nxx9UbBclhsZnEb.jpg)
`},{id:"developer/skill",title:"Get笔记 Skill",content:`
# Get笔记 Skill

Get笔记 Skill 让你通过 OpenClaw（小龙虾）AI 助手直接管理笔记和知识库。

## 快速安装

复制以下内容发给小龙虾，即可快速安装：

\`\`\`
请安装 Get笔记 技能，帮我记录和查找笔记。
技能地址：https://clawhub.ai/iswalle/getnote
API Key 获取：https://www.biji.com/openapi
\`\`\`

---

## 常见问题

### 🐛 Bug 类问题

#### 1. 笔记删除后直接彻底删除，未进回收站

让小龙虾将某条笔记删除到回收站，笔记会被彻底删除，回收站为空，存在严重误删风险。

**解决方案**：小龙虾删除的所有笔记都会进入回收站，可以在 Get笔记 App 打开侧边栏，点回收站查看，也可以在回收站选择恢复或者彻底删除。

#### 2. NAS 上安装 Skill 失败，云服务器正常

在 NAS 上安装 Get笔记技能无法成功，换到云服务器则可以正常安装。

**解决方案**：出于安全，建议使用 Mac 设备或者购买云服务版，Get笔记 Skill 本身不限制安装设备。

#### 3. 技能装入 Coze 后持续报 403

将 Skill 部署到扣子（Coze）平台后，调用一直返回 403 错误。

**解决方案**：Coze 等相关平台配置建议参考 [OpenAPI 开发文档](https://www.biji.com/openapi) 调用相关 API，点击"使用文档"Tab。

#### 4. 安装/配置后 API 返回 pong 或者 503 错误

已开通会员、新建 API Key 并填写 Client ID，仍报「API 权限不够」「返回都是 pong 或者返回 503 错误」。

**解决方案**：

这种情况可能是小龙虾开启网络搜索用了错误的 API 配置，建议：

1. 告诉小龙虾：请严格按照 Skill.md 进行 API 调用，详情参考"快速决策"部分
2. 告诉小龙虾卸载"Get笔记"Skill，然后重新安装：\`帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md\`

---

### 💡 日常使用问题

#### 1. 安装/配置流程不会操作，手机能用吗？

关于 OpenClaw 的基础安装配置，可以参考得到 AI 学习圈相关视频教程，安装成功后再配置 Get笔记 Skill。

#### 2. 是否需要会员才能使用

**是的**，Get笔记 Skill 安装后，调用相关能力仅限会员身份的账户使用。

#### 3. Skill 能读取录音卡内容吗？

**可以**读取包含录音卡录音笔记在内的所有笔记内容，也可以理解为您在 App 上看到的所有笔记，都可以读取。

#### 4. Skill 能管理知识库吗？

**可以**通过该 Skill 完成知识库创建、笔记加入或移除等知识库相关的操作，可以试试：

- 把 XX 链接帮我保存到 XX 知识库

#### 5. 能安装到 EasyClaw / Kimi Claw 上吗？

理论上 OpenClaw 衍生的相关云服务都是支持的。

#### 6. 能否一个 OpenClaw 对接两个账号？

**不建议**这么做，因为两个账号之间的安全隔离比较难做。如果真的有需求，建议创建不同的 Agent，并在不同的 Agent 内配置不同的 Get笔记 Skill 对应 API Key。

#### 7. 没有看到官方技能包入口

可以使用以下任意一个方式安装：

- \`请安装 Get笔记 技能，技能地址：https://clawhub.ai/iswalle/getnote\`
- \`帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md\`

#### 8. API Key 安全性

API Key 只会在生成时显示一次，请妥善保管：

- 建议写入小龙虾配置文件内
- 不要提交到公开的代码仓库
- 不要和朋友共享

如果怀疑泄露，请立即登录 [管理后台](https://www.biji.com/openapi)，点击"作废"。

#### 9. Skill 能精准读取所有笔记数据吗？

**可以**读取包含录音卡录音笔记在内的所有笔记内容，也可以读取录音笔记、链接笔记的原始内容，可以试试：

- 帮我查看一下 XX 笔记的原始内容是什么

#### 10. Skill 可以看视频总结功能吗？

**可以**，能够读取所有类型笔记的内容总结，包括上传的音视频生成的笔记。

---

## 官方资源

| 类型 | 地址 |
|-----|------|
| Skill 安装地址 | https://clawhub.ai/iswalle/getnote |
| GitHub（OpenClaw） | https://github.com/iswalle/getnote-openclaw |
| GitHub（MCP） | https://github.com/iswalle/getnote-mcp |
| API Key 管理 | https://www.biji.com/openapi |
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

![GetSeed 录音卡正面功能键示意图，标注了 MARK 键位于中间、录音拨钮位于侧面、指示灯位于顶部的位置](/getbiji-docs-v3/images/Ly3fb1mBJoZQq7xtp3Rcj1ranve.png)

---

## 指示灯含义

指示灯位于录音卡顶部，通过不同颜色和状态表达当前设备情况。

![指示灯含义对照表，列出不同颜色灯光对应的设备状态说明](/getbiji-docs-v3/images/TxNcbRRbnozySuxEAskcagIcnAf.png)

---

## 充电

使用包装内的充电线（USB 2.0 磁吸式 Pogo pin 接口），磁吸对准即可充电。

![充电线连接录音卡的示意图，展示磁吸充电接口的对准方式](/getbiji-docs-v3/images/HZCebDxO7oNLHYxzojac7tAjnAc.png)

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

![录音卡指示灯亮白灯闪烁，表示设备已开启等待配对](/getbiji-docs-v3/images/XWU6b3QwmoKj2vxi8TscXsTanHf.png)

4. 打开 Get笔记 App，点击首页左上角侧边栏，点击「录音卡」，按提示操作连接

![App 侧边栏菜单展示「录音卡」入口，点击进入连接引导页面](/getbiji-docs-v3/images/QJaKbGqmnobTAFx50nqct1vonNP.png)

5. 按照 添加设备 → 连接 → 连接成功 → 权益自动下发 的流程完成

![设备搜索页面，显示找到的 GetSeed 录音卡，点击开始配对](/getbiji-docs-v3/images/GTGlbqxmioajWVxpAWocT2iZnjb.png)

![蓝牙配对确认弹窗](/getbiji-docs-v3/images/DQQWbjSoVo9W3TxlDwCcjqdenDg.png)

![连接成功页面，显示绿色对勾](/getbiji-docs-v3/images/SINsbmmm0onF9YxZ5xAcq4Q9nHP.png)

![会员权益自动下发通知](/getbiji-docs-v3/images/TSlobAA9Eo8EkLx7lF9cQ5lInic.png)

![设备信息页，显示录音卡详细信息和连接状态](/getbiji-docs-v3/images/OTanbYUf0or7bhxujoKcF7HBnHb.png)

### 为什么搜索不到设备？

按以下顺序排查：

1. **检查蓝牙权限**
   - iOS：前往 iPhone「设置」→ 找到 Get笔记 App → 确保蓝牙权限已开启
   - Android：打开手机设置 → 启用 Get笔记 App 的蓝牙和位置权限（Android 12 之前需选择「始终允许」）
2. **确认设备已开启**：短按 MARK 键 1 秒，白灯亮起说明设备已开启
3. **检查电量**：如果没有亮灯，用充电线充电至少 10 分钟再试（充电时紫色指示灯常亮）
4. **靠近手机**：将录音卡放在手机旁边再试

如果以上都试过还不行，扫码联系我们：

![客服二维码，扫码添加获取人工帮助](/getbiji-docs-v3/images/O1Z7byfrNohminxX7l6chcV4nNa.png)

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

![App 首页右上角设备入口显示灰色，表示录音卡未连接](/getbiji-docs-v3/images/O5aIbtL7to1s58xjX93cxjxunNd.png)

![App 首页右上角设备入口显示绿色，表示录音卡已连接](/getbiji-docs-v3/images/JMuAbBa5ioUaQfxaVE9cbrKknif.png)

![设备信息页显示电量百分比和电池图标](/getbiji-docs-v3/images/WtwtbUa3LoMbcmxjdnIcqNrJnLc.png)

### GetSeed 休眠导致无法连接？

长按 MARK 键 1 秒唤醒设备。连接成功后，可以在 App 的设备信息页中修改休眠时间。

### 多蓝牙设备导致找不到卡片？

连接弹窗可以左右滑动，找到 GetSeed 卡片进行连接。

### App 一直显示「未找到设备」？

在手机蓝牙设置中找到「Get」开头的设备，点击「忽略此设备」，然后重新尝试。

### 磁吸导致手机熄屏 / 黑屏？

![磁吸导致手机熄屏问题的解决方案说明图](/getbiji-docs-v3/images/VBUcbq6pqoEbDNxbDIDccs5MnTe.png)

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

![充电线连接示意图，磁吸端对准录音卡充电接口，Type-C 端插入充电头](/getbiji-docs-v3/images/UerQbQQ2voFfpBxQ1mecliFGnue.jpg)

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

![iPhone 背面直接磁吸卡套的示意图，无需额外配件](/getbiji-docs-v3/images/QXMTbdmpJoSjzfxUs0Tc2c1Cnrb.png)

### 安卓 / 鸿蒙手机怎么用？

撕下磁吸环背胶保护膜，将磁吸环贴在手机背部合适位置，再吸附卡套。

![安卓手机贴上磁吸环后吸附卡套的示意图，展示磁吸环贴附位置](/getbiji-docs-v3/images/RHDsb1JYpoMX2pxHjeIc81kunSc.png)

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

![录音卡正面，手指按下 MARK 键，标记当前录音时刻为重点](/getbiji-docs-v3/images/QSLEbgOKoork4Yx6vaocxaFJnCh.png)

**第二步：查看 MARK 重点摘要**

录音结束后，AI 自动总结所有 MARK 时刻的重点内容，方便快速回顾。

![笔记详情页，展示 AI 自动生成的 MARK 重点摘要列表，每个标记时刻对应一段总结](/getbiji-docs-v3/images/XfwHbAMoSoyeVCxmWfGcwrIPnHf.jpg)

长按标记的文字区域，可以复制或删除。

![长按 MARK 摘要文字后弹出操作菜单，包含复制和删除选项](/getbiji-docs-v3/images/Tzdbbh0FwoAPOBxqAjBcoo83nAd.jpg)

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

![App 录音进行中界面，底部显示拍照和随手记按钮，录音状态持续进行](/getbiji-docs-v3/images/INPUbWX29oT39Rxm0Kmc8bIFnJc.jpg)

![录音中拍照操作界面，展示拍摄白板或 PPT 的场景](/getbiji-docs-v3/images/WPa2bC9YOoIka7xP9TscESxlnyf.jpg)

**第三步：查看整合后的笔记**

生成笔记后，拍的图片会按时间顺序插入到文字记录中。长按图片或文字区域，可以重新上传图片或编辑文字。

![生成的笔记详情页，文字和图片按时间顺序穿插排列，展示完整的录音+拍照记录](/getbiji-docs-v3/images/RGSNbtc4hoC2yqxrOaecb9sFn4b.jpg)

---

## 闪念灵感记录

突然有个想法？长按 MARK 键说出来，松开就自动生成一条笔记。AI 还会帮你润色，去掉口水词。

### 怎么用

**第一步：长按 MARK 键开始说**

在录音开关**关闭**的状态下，长按 MARK 键不放，卡片振动一次，开始录音。边按边说出你的想法。

![录音卡正面，手指长按 MARK 键，指示灯红灯常亮表示正在记录闪念](/getbiji-docs-v3/images/H31kbaihiopGjZx356acbqEenOg.png)

**第二步：松开按键，自动生成笔记**

松开 MARK 键，卡片振动两次，录音结束。同步到 App 后自动生成闪念笔记，笔记列表中带有 ⚡ 标识。

![笔记列表页面，闪念笔记条目左侧带有闪电标识，与普通录音笔记区分](/getbiji-docs-v3/images/EMSBb6dI1oiCvexxrsmcB38wn21.jpg)

**AI 自动润色效果**

AI 会智能润色，去除口水词，还能识别 12 种方言：中文、英语、粤语、四川话、陕西话、河南话、上海话、湖南话、湖北话、安徽话、闽南话、潮汕话。

![方言识别设置界面，展示支持的 12 种语言和方言选项列表](/getbiji-docs-v3/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.jpg)

| 润色前 | 润色后 |
|--------|--------|
| ![润色前的闪念笔记，包含口水词和不通顺的口语表达](/getbiji-docs-v3/images/MO0lbekSioUApbxneGkczecFnzd.jpg) | ![润色后的闪念笔记，语句通顺流畅，口水词已去除](/getbiji-docs-v3/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.jpg) |

---

## 固件升级

固件就是录音卡的「大脑程序」。和手机更新系统一样，GetSeed 也需要偶尔升级固件来获得新功能和优化。

### 怎么用

**第一步：等待升级提示**

打开 Get笔记 App，确保录音卡已通过蓝牙连接。如果有新固件，进入 GetSeed 录音卡详情页时会弹窗提示。

![App 中弹出固件升级提示弹窗，显示新版本号和更新内容，底部有「立即更新」按钮](/getbiji-docs-v3/images/A4WTb6x4FoPhXxxAeU9cjw9fn7b.jpg)

**第二步：点击「立即更新」**

点击后，新版本会先传输到录音卡（传输中录音卡红蓝灯交替闪烁），然后自动升级并重启。整个过程大约 3-5 分钟。

![固件升级进度页面，显示传输进度条和当前升级状态](/getbiji-docs-v3/images/UuTmbvRGaoWXsRxIWKucjjOZn6g.jpg)

**手动升级方式**

也可以点击页面右上角设备入口，进入设备信息页，点击「固件升级」手动检查更新。

![App 首页右上角设备入口按钮，点击后展示设备列表](/getbiji-docs-v3/images/OACCbxmM8owKgqxDppVcIFwan3c.png)

![设备信息页，底部显示「固件升级」按钮和当前固件版本号](/getbiji-docs-v3/images/HNAAbmYKNonB8Dxl6nCcHTLUnpn.png)

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

![GetSeed 录音卡详情页底部，显示「AI 柳比歇夫记日记」入口按钮，点击进入日记功能](/getbiji-docs-v3/images/J62ObaThqoMobExiiKzcvE0Rnne.jpg)

### 第三步：正常使用录音卡

日常使用录音卡录音，录完后连接 App 会自动上传并生成笔记。AI 柳比歇夫会自动从笔记中提取信息，整理进当天的日记。

![AI 柳比歇夫日记页面，展示自动从录音笔记中提取的当日活动记录和时间线](/getbiji-docs-v3/images/IxYEbg9OEo4pQ7xXtjCcDHxgn8L.jpg)

### 第四步：对话补充日记（可选）

随时通过对话方式补充或更新日记——比如告诉它「下午去跑了半小时步」，它就会帮你记上。

![与 AI 柳比歇夫的对话界面，用户发送文字补充日记内容，AI 回复确认已添加](/getbiji-docs-v3/images/VSY3bHTYEoHzQ8xKiLxcfqkpnMb.jpg)

### 第五步：查看日记

每天结束后查看 AI 自动生成的日记，记录了你做了什么、每件事花了多久。

![AI 柳比歇夫生成的完整日记页面，按时间顺序列出当天所有活动和持续时长](/getbiji-docs-v3/images/V217bylFJouExzxGbJhchIuZnwd.jpg)

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

![GetSeed 录音卡正面按键示意图，标注了 MARK 键、录音拨钮和指示灯的位置](/getbiji-docs-v3/images/QR1CbFUuHoPrBsxTr3YcvZIZn7e.png)

---

## 添加并激活设备

### 第一步：下载 Get笔记 App

在应用商店搜索「Get笔记」，安装并登录。

### 第二步：开启录音卡

长按 MARK 键 1 秒，指示灯亮白灯闪烁，表示录音卡已准备好连接。

![录音卡指示灯亮白灯闪烁，表示设备已开启并等待连接](/getbiji-docs-v3/images/SgVPbGVZ1oGKGFxTNNbcgr5RnNv.jpg)

### 第三步：在 App 中连接设备

打开 Get笔记 App，点击首页左上角打开侧边栏，点击「录音卡」，按提示操作连接。连接成功后，指示灯变为白灯常亮。

![App 侧边栏菜单，显示「录音卡」入口选项，点击进入设备连接页面](/getbiji-docs-v3/images/Ug7pbaDFGoPMdtxpvDhcRfClnme.png)

### 第四步：等待连接完成

按照 添加设备 → 连接 → 连接成功 → 权益自动下发 的流程操作。

![设备添加页面，显示搜索到的 GetSeed 录音卡设备，点击进行配对](/getbiji-docs-v3/images/IXhUb1NouoMVYux6aAJcNAixnbg.png)

![蓝牙配对确认弹窗，提示用户确认连接 GetSeed 录音卡](/getbiji-docs-v3/images/IlZkbHUgBo4aO3x8BFlcK6iqnDg.png)

![设备连接成功页面，显示绿色对勾和「连接成功」提示](/getbiji-docs-v3/images/GmpCbfBnFoqyHPxvFMAc43awnUb.png)

![权益下发页面，显示赠送的 PRO 会员权益信息和有效期](/getbiji-docs-v3/images/SiZgbJ7fGoesXRxYVbWcIJZZnGh.png)

![设备信息页面，显示录音卡名称、电量、固件版本等详细信息](/getbiji-docs-v3/images/D7S0bcYlDorWDMxgNjhclExLnDc.png)

首次连接成功后，会员权益会自动下发到当前账户：
- **999 元礼盒款**：赠送 1 年 Get笔记 PRO 会员
- **699 元标准款**：赠送 3 个月 Get笔记 PRO 会员

---

## 开始 / 结束录音

### 开始录音

向上拨动录音开关，红灯长亮，卡片振动 1 次，录音开始。

![录音卡侧面，手指向上拨动录音开关，红色指示灯亮起表示录音已开始](/getbiji-docs-v3/images/Cve7b9oJ0o56RqxNhc3cB8danUf.png)

### 结束录音

向下回拨录音开关，指示灯熄灭，卡片振动 2 次，录音保存。同步到 App 后自动生成笔记。

![录音卡侧面，手指向下回拨录音开关，指示灯熄灭表示录音已结束](/getbiji-docs-v3/images/G53QbweBvoYhZKxs5KLcKyuynLN.png)

### 录音中标记重点

录音过程中，单击 MARK 键，标记当前时刻为重点。录完后 AI 自动对标记部分进行总结。

![录音进行中按下 MARK 键，指示灯短暂闪烁表示标记成功](/getbiji-docs-v3/images/QytjbNUI2oQV8bxSmPmcrqgSnQW.png)

### 离线录音

脱离手机也能独立录音。离线录音的文件会在 App 重新连接设备后自动同步。

> **注意**：充电过程中无法开启录音；录音中插充电线不影响录音，但无法正常充电。

---

## 长按记录闪念

有灵感时，长按 MARK 键快速记录。

### 第一步：确认录音开关已关闭

闪念录音需要在录音开关**关闭**的状态下操作。

![录音卡侧面，录音拨钮处于关闭位置（向下），准备进行闪念记录](/getbiji-docs-v3/images/VRvMbIgWAo88XGxJnuAcEG97nXg.png)

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

![手机背面吸附 GetSeed 录音卡进行通话录音的示意图](/getbiji-docs-v3/images/Mxg7bm0UvopUwwxA3XMcnEBZnxg.png)

> **注意**：带蓝牙耳机时无法录到耳机中的声音。

---

## 录音同步上传

### 第一步：连接设备

保持手机蓝牙开启，打开 App，点击首页右上角设备入口进行连接。

![App 首页右上角显示设备连接入口，灰色表示未连接，绿色表示已连接](/getbiji-docs-v3/images/NxQWbk4ILogPazxN8h0cjccznif.png)

### 第二步：查看同步进度

连接后，点击首页「GetSeed 录音卡」入口，查看正在同步的录音。默认通过蓝牙传输。

![GetSeed 录音卡详情页，显示正在同步的录音文件列表和传输进度](/getbiji-docs-v3/images/HZdMb95Bpo5Sw9xLJtwckzEsn7g.png)

![录音文件同步进度详情，显示文件大小、传输速度和预计剩余时间](/getbiji-docs-v3/images/CxFobYVZvoKmOXxQsVIczvo4nih.jpg)

### 第三步：用 WiFi 快传加速（可选）

传输中点击「快传」按钮，加入设备无线局域网，传输速度更快。

![录音同步页面，「快传」按钮高亮显示，提示可切换到 WiFi 快速传输模式](/getbiji-docs-v3/images/GQl5bOOxQopYRRxjna5cXVxZnOc.png)

![WiFi 快传连接页面，提示加入 GetSeed 设备的无线局域网](/getbiji-docs-v3/images/Qp3SbBtYLop2kOx8PaAc0WSdnqT.png)

### 同步完成后

录音文件出现在内容列表中，PRO 会员自动生成笔记。

- **PRO 会员**：无限转写时长
- **非 PRO 会员**：每月 600 分钟免费转写

---

## 生成录音笔记

### 常规录音笔记

拨动开关录制的常规录音，AI 自动转写，智能识别多位发言人，生成结构清晰的总结笔记。

![常规录音笔记详情页，展示 AI 转写的完整文字记录和发言人区分](/getbiji-docs-v3/images/MxY6b8RBZovTyUxyLjbccpkgnUh.jpg)

笔记包含多个模块：

| 模块 | 说明 |
|------|------|
| 章节概要 | AI 按主题分段总结 |
| 待办事项 | 自动提取会议中的行动项 |
| 拍图整理 | 录音中拍的照片按时间排列 |

![章节概要模块，按主题分段展示录音内容的摘要总结](/getbiji-docs-v3/images/V90jbf0n5ouSyJxdNW2cAYBUnGM.jpg)

![待办事项模块，列出从录音中自动提取的行动项和任务](/getbiji-docs-v3/images/KAjgbROBuoBBMSxHcqecQiDGnCc.jpg)

![拍图整理模块，展示录音过程中拍摄的照片按时间顺序排列](/getbiji-docs-v3/images/Tsm9btdkqoOYoYxN92XcC0IJnWb.png)

### 闪念录音笔记

长按 MARK 键录制的闪念笔记，AI 自动润色，识别方言，去除口水词。

![闪念录音笔记详情页，展示 AI 润色后的精简文字内容](/getbiji-docs-v3/images/T1OebENXAoEWsFxYVXMcgOa8nue.png)

| 润色前 | 润色后 |
|--------|--------|
| ![润色前的原始转写文字，包含口水词和口语化表达](/getbiji-docs-v3/images/IyCqb1MQsosLHxxaeskcTtu0nCd.png) | ![润色后的文字，语句通顺，口水词已去除](/getbiji-docs-v3/images/T1OebENXAoEWsFxYVXMcgOa8nue.png) |

---

## 录音卡绑定其他手机

想把录音卡换到另一台手机使用？按以下步骤操作。

### 第一步：解绑当前手机

进入设备信息页，滑到底部，选择「断开或解绑」→「解绑并清除数据」。

> **重要**：解绑前确保录音卡中的录音文件已全部上传完成。

![设备信息页底部，「断开或解绑」按钮位置](/getbiji-docs-v3/images/HJkub4wn9onOa9xE9plcIF67nmc.jpg)

![解绑选项弹窗，显示「断开连接」和「解绑并清除数据」两个选项](/getbiji-docs-v3/images/Bm3XbkRHWowoMix4gSicPPmWnLz.png)

### 第二步：iOS 用户额外操作

如果是 iPhone，还需要去系统蓝牙设置中，找到录音卡设备，点击「忽略此设备」。

![iPhone 蓝牙设置页面，GetSeed 录音卡设备旁的「忽略此设备」按钮](/getbiji-docs-v3/images/IiulbeeH0oWioSxawoBcn1CQnBd.png)

### 第三步：在新手机上添加设备

拿另一台手机，按照「添加并激活设备」的流程重新操作即可。

![新手机上 Get笔记 App 的设备添加引导页面](/getbiji-docs-v3/images/VQhKbb36FoPAqrxVfaScWhHonRd.jpg)

![新手机连接成功，显示录音卡设备信息和连接状态](/getbiji-docs-v3/images/KwsabD9mRodbJHxJLlMc35DAnDc.png)
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

![GetSeed 录音卡详情页顶部，显示发芽区域和剩余种子数量，底部有「发芽」按钮](/getbiji-docs-v3/images/DjkIb888joPRP7xjk4tcgCkKnLe.jpg)

### 第二步：点击「发芽」生成报告

点击「发芽」按钮，AI 会基于你的新录音笔记生成发芽报告。

![点击「发芽」按钮后的加载页面，提示正在生成发芽报告，预计 3-5 分钟](/getbiji-docs-v3/images/EtrrbDaNjo4Xzyxnt1JcL6lAn6f.jpg)

![发芽报告生成完成，展示跨领域的思想关联和延伸内容](/getbiji-docs-v3/images/EvmHbdv6zoijoZxT9BjcakwEnGg.jpg)

### 第三步：查看发芽报告

点击右上角「发芽报告」，进入报告列表页查看所有报告详情。

![发芽报告列表页，展示历史生成的所有报告，按时间倒序排列](/getbiji-docs-v3/images/NyhIbA8dCoGyvSxQSSkcGZ2Qn2f.jpg)

![发芽报告详情页，展示 AI 基于录音内容生成的跨学科关联分析](/getbiji-docs-v3/images/Wxrsb4g3AowqcFxDI3JcZvhunjf.jpg)

### 第四步：单条笔记发芽（可选）

每条录音卡笔记也可以单独发芽。在笔记的「...」更多操作里，点击「笔记发芽」，针对这一条笔记生成专属的发芽报告。

![笔记详情页的更多操作菜单，展示「笔记发芽」选项](/getbiji-docs-v3/images/Oi4xbbviaod7G8xMzHWcKPnqneR.jpg)

![单条笔记的发芽报告，针对特定笔记内容生成聚焦的关联分析](/getbiji-docs-v3/images/Iuo8bqwbvoXHt3xrZUHc9GzVnKe.jpg)

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

![App 首页底部显示三个按钮：「+ 更多」「录音」「文字」，红色箭头指向中间的录音按钮，点击即可开始语音记录](/getbiji-docs-v3/images/NYcXboxjOoQGSUxReQ0cdSuNnAV.png)

**第二步：开始说话**

点击红色录音按钮开始录音，屏幕上会显示「请说，我在听...」。你说的话会实时转成文字。

![语音速记录音界面，上方白色区域显示「请说，我在听...」等待语音输入，下方显示录音时长 00:01/30:00，底部有取消、红色暂停和完成三个按钮，红框标注「完成」按钮提示录制完后点击](/getbiji-docs-v3/images/KiiGb2Sw6o2U0sxozx9cse4nnOf.png)

**第三步：点击「完成」**

说完后点击右下角「完成」，AI 会自动帮你润色文字、加标点、分段落。

> **提示**：免费用户单次可录 10 分钟，会员可录 60 分钟。

---

### 方式二：线下会议录音

开会时打开录音，AI 会自动区分谁在说话，会后还会生成会议纪要。

**第一步：点击「+ 更多」，选择「线下会议录音」**

在首页底部点击「+ 更多」按钮，在弹出菜单中选择「线下会议录音」。

![首页底部红色箭头指向左侧「+ 更多」按钮，点击可展开更多笔记创建方式](/getbiji-docs-v3/images/D5aUbL37ioCELtxxhICc8dSAnSb.png)

![「更多方式」弹窗菜单，列出五个选项：粘贴链接、拍照、上传图片、线下会议录音（红框标注，标签显示 NEW）、手机内录，每个选项下方有简短说明](/getbiji-docs-v3/images/JsL0bQ7Cwog0X2xMGcBcplpmnkd.png)

**第二步：开始录音**

把手机放在会议桌上，点击录音按钮。录音过程中会显示计时器。

![会议录音界面，上方显示「请说，我在听...」，底部显示录音时长 00:00/120:00（最长2小时），底部有取消、红色暂停和完成三个按钮](/getbiji-docs-v3/images/CC5ub6cp6oLsSxxNGNuc78epn1g.png)

**第三步：查看结果**

录完后 AI 会自动处理，生成区分不同发言人的文字记录和会议纪要。

![会议录音转写结果页面，顶部显示三步进度条：文件上传、录音转写、总结纪要。下方按发言人分段展示，每段标注说话人编号（说话人1-5）和时间戳，内容已转为完整文字](/getbiji-docs-v3/images/RDWwbqxuSoQZsgxtQAmcPvWVn8e.png)

![会议笔记详情页，标题「关于语言表达与解放的讨论」，包含音频播放器和标签，下方有四个切换标签：文字记录、智能总结、章节概要、待办事项（红框标注），展示 AI 生成的会议信息摘要和会议总结](/getbiji-docs-v3/images/XNckbHqzYoHscnxshKdcO3D7nZd.png)

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

![「更多方式」弹窗菜单，红框标注第一个选项「粘贴链接」，说明文字：公众号文章、抖音短视频、得到直播回放等，下方还有拍照、上传图片、线下会议录音、导入音视频、手机内录等选项](/getbiji-docs-v3/images/Cg8ubYt8nonNUWxVUpvcdMySnje.jpg)

**第二步：粘贴链接，等 AI 处理**

粘贴你复制好的网页链接，AI 会自动读取内容，生成一篇总结笔记。

![链接笔记保存后的首页列表，显示 AI 从链接提取生成的笔记卡片，包含文章标题、AI 提取的摘要和来源信息](/getbiji-docs-v3/images/HaRcblUfkoJlSnxE3WucbPPdnYc.jpg)

**支持的链接类型**：微信公众号文章、抖音短视频、B站视频、小红书图文、得到直播回放等。

---

## 怎么找笔记、用笔记

### 搜索笔记

点击首页顶部的搜索框，输入关键词，就能找到你之前记的笔记。

![首页顶部红框标注搜索栏，显示「搜索笔记」占位文字，下方是笔记列表，底部有「+ 更多」「录音」「文字」三个按钮](/getbiji-docs-v3/images/RygIb7eWqochVYxTVe6cGMl0ncd.png)

![搜索页面，顶部搜索框已输入「ai」，下方显示「向 AI 询问 "ai"」的快捷入口，再下方红框标注搜索结果列表，展示匹配到的笔记标题和内容摘要](/getbiji-docs-v3/images/N1RabxWgfowpI1xpEzwcUaxzn5e.jpg)

### AI 助手问答

除了搜索，你还可以直接问 AI 助手。它会翻阅你所有笔记，给出回答。

点击首页顶部「欢迎来到Get笔记」旁边的「聊一聊」按钮，就能进入 AI 对话页面。

![首页顶部红框标注欢迎横幅区域，显示「欢迎来到Get笔记，现在，开始你的灵感之旅吧」文字，右侧有「聊一聊」按钮可进入 AI 助手对话](/getbiji-docs-v3/images/E7Nlb9sluo6seWxFQ0bcfpWenQg.png)

![AI 助手对话页面，顶部显示「你好，我是你的AI助手」和「你可以这样问我」，下方列出推荐问题：帮我生成周报、整理一周待办、24小时热点等，底部红框标注输入区域，包含深度思考开关和搜索范围选择](/getbiji-docs-v3/images/NHI8bRRaOoqf5RxiJQDc3DqZnJd.png)

### 追加笔记

已经记过的笔记，还想补充内容？在笔记详情页底部点击「追加笔记」就行。

支持追加文本、语音、图片、链接——所有笔记类型都可以追加。

![笔记详情页底部显示「追加笔记」按钮（红框标注），点击即可对当前笔记补充新内容，页面中展示的是一篇关于 AI Agents 发展趋势的笔记](/getbiji-docs-v3/images/JnUsbCfdGoleAaxQiM0c1rSWnz0.jpg)

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

![知识库详情页，底部显示「添加内容」按钮，点击可展开添加选项](/getbiji-docs-v3/images/CsUMbACIvo3II5xFtKacEcYxn8e.png)

**第二步：选择「从已有笔记导入」**

在弹出的选项中，选择「从已有笔记导入」。

![添加内容弹窗，显示多个选项包括「上传文件」「订阅直播/博主」「从已有笔记导入」等，红框标注从已有笔记导入选项](/getbiji-docs-v3/images/L15ybTVK4o1TPux2W57cC3C9nhd.png)

**第三步：选择笔记，点击确定**

从笔记列表中勾选你要加入的笔记，可以多选，然后点击确定。一次最多可以选中 100 条笔记。

![笔记选择列表页面，每条笔记右侧有勾选框，底部显示已选数量和「确定」按钮](/getbiji-docs-v3/images/GOjrbvQXAozm27xNgDocM6i5nhn.jpg)

添加完成后，笔记会出现在知识库内容列表中。

![知识库详情页，已添加的笔记显示在内容列表中，每条笔记显示标题和摘要信息](/getbiji-docs-v3/images/Lfy9bS8HVoqoYJxK6r2cMirLnbh.jpg)

#### 方式二：从首页笔记列表添加

你也可以直接在首页的笔记列表中操作：点击笔记右侧的「...」更多操作，选择你想加入的知识库。

![首页笔记列表，点击某条笔记的「...」更多按钮，弹出操作菜单](/getbiji-docs-v3/images/NHpkbi9FUo6rChxcTNdcglTUnQf.jpg)

![更多操作菜单中显示「加入知识库」选项，点击后可选择目标知识库](/getbiji-docs-v3/images/Nv9obxISDoKfx5xseDecOpBYnHb.png)

选择知识库后即可加入。同样的入口也支持将笔记从知识库中移出。

![知识库选择列表，勾选要加入的知识库，已加入的知识库可点击移出](/getbiji-docs-v3/images/WjjwbgkVPopDtjxBxB8cxY4Engh.png)

### 网页端

**第一步：进入知识库，点击「添加」→「选择已有笔记」**

![网页端知识库详情页，顶部「添加」按钮展开下拉菜单，显示「选择已有笔记」选项](/getbiji-docs-v3/images/WRjFbKRkNouK2Axpwc1cLQ8hnMh.png)

![下拉菜单展示添加选项，包括上传文件、选择已有笔记等](/getbiji-docs-v3/images/NFEhbb1UDogEsXxOQakc0L1Rn4j.jpg)

**第二步：从笔记列表中选择，点击确定**

勾选要添加的笔记后，点击「确定」按钮即可完成添加。一次最多可选 100 条笔记。

![网页端笔记选择弹窗，左侧显示笔记列表带勾选框，底部有「确定」按钮，已选笔记数量实时显示](/getbiji-docs-v3/images/VjXjb173no0SeRx5B7dcpTvBnVb.png)

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

![App 首页顶部导航栏，左侧显示「更多」入口按钮，点击可进入知识库等功能页面](/getbiji-docs-v3/images/ZNMSbuHSqotgUMx3BVCcu74mnBf.jpg)

**第二步：点击新建**

在知识库页面，点击右上角的「+ 新建」按钮。

![知识库列表页面，右上角显示「+ 新建」按钮，点击即可创建新知识库](/getbiji-docs-v3/images/SisEb5drPoSjZNxdYnucvVDRnle.png)

**第三步：填写名称，完成创建**

输入知识库名称，点击确定，知识库就创建好了。

![创建知识库弹窗，包含名称输入框和确定按钮，输入知识库名称即可完成创建](/getbiji-docs-v3/images/EVywbEqXYohPmVx6dz2cQpMtnNb.png)

创建完成后，你可以在知识库详情页编辑名称和描述，也可以开始往里面添加内容。

![知识库详情页，顶部显示知识库名称和描述，下方有「添加内容」按钮，可上传文件、订阅直播和博主、添加已有笔记](/getbiji-docs-v3/images/TH0GbGRQVo0v62x0boUcTlXXnBd.png)

![知识库编辑页面，可修改知识库名称和描述信息，底部有删除知识库选项](/getbiji-docs-v3/images/OdfIbtwiNowHydxzWvJc0aY3nte.png)

### 网页端

**第一步：打开 biji.com，点击左侧「知识库」**

![网页端左侧菜单栏，显示「知识库」入口，点击进入知识库管理页面](/getbiji-docs-v3/images/FURJb7qAEo5jdCxo3WBcWe6wnRb.png)

**第二步：点击「创建知识库」**

![网页端知识库页面，顶部显示「创建知识库」按钮，下方为已有知识库列表](/getbiji-docs-v3/images/ZWh3bqq8vo3akfxVm8kcdglvnhe.png)

填写名称后即可完成创建。

![创建知识库弹窗，输入知识库名称后点击确定完成创建](/getbiji-docs-v3/images/Z2XjbqxJVo2iEDxo3w5cwS9znef.png)

如果想编辑或删除知识库，点击知识库卡片上的「...」按钮。

![网页端知识库卡片右上角的「...」更多操作菜单，包含编辑和删除选项](/getbiji-docs-v3/images/IaEBbj1rVoZafBxge7ic6Iahnge.png)

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

![知识库详情页，右上角显示分享图标按钮，点击进入分享设置](/getbiji-docs-v3/images/QHofb2B0po5eFwxV3jccsPeZnkc.png)

**第二步：选择「公开」**

![分享设置页面，顶部三个选项切换：私密、公开、团队可见，当前选中「公开」](/getbiji-docs-v3/images/KD5zb6DfYoit77xs2bLcXD37nAg.png)

**第三步：选择分享方式**

可以通过微信好友、朋友圈、分享海报、复制链接等方式分享出去。

![公开分享页面，下方显示分享方式：微信好友、朋友圈、分享海报、复制链接等](/getbiji-docs-v3/images/D3SYbrjKBohUChxiiv9c6C8znGd.png)

![分享海报预览页面，显示知识库名称和二维码，可保存到手机相册](/getbiji-docs-v3/images/Q51RbOJRIoWBKTxDrVecld1inWf.png)

别人打开链接后，可以直接进入知识库浏览、搜索和使用 AI 问答。

![他人通过链接访问的知识库页面，可浏览内容、搜索和使用 AI 功能](/getbiji-docs-v3/images/VwGnbLgxroJr8qxNOZUcY06Mnsd.jpg)

#### 网页端

进入知识库，点击右上角「分享」按钮，选择「公开」后复制链接即可。

![网页端分享设置弹窗，可切换私密/公开/团队模式，公开模式下显示分享链接可复制](/getbiji-docs-v3/images/Y5OpbZny5opHxrxArMRcXRrdnwg.png)

#### 小程序端

在小程序中同样可以分享：进入知识库，点击右上角分享按钮，选择「公开」后通过微信分享。

![小程序端知识库页面，点击右上角分享按钮进入分享设置](/getbiji-docs-v3/images/YsAWb8XVOoSHALxfwLncVCOfnTe.jpg)

![小程序分享设置页面，切换为「公开」模式](/getbiji-docs-v3/images/ZyO9bMXn9os3taxaU9PcEuO5nRh.jpg)

![小程序公开分享页面，底部显示分享到微信好友、朋友圈等方式](/getbiji-docs-v3/images/OpyVb6LKqoDos8xQOiycR6P0nfe.png)

![分享海报预览，包含知识库封面和小程序码](/getbiji-docs-v3/images/Y0PYbEQYtohVg7xTMQJc1k19nEe.png)

![分享完成后他人收到的小程序卡片预览](/getbiji-docs-v3/images/Pb3Db8L16oEhRnxkOwDcQWn0nQf.png)

### 团队协作

让特定的人一起使用和维护知识库。

#### App 端

**第一步：选择「团队可见」**

在分享设置中选择「团队可见」。

![分享设置页面，选中「团队可见」选项，下方显示成员管理和加入设置](/getbiji-docs-v3/images/Y5ddb4dreoHRy7xHLxicpyQ5nrf.png)

**第二步：分享链接给团队成员**

将知识库链接通过微信等方式发给团队成员。

![团队分享页面，显示分享方式和邀请链接](/getbiji-docs-v3/images/UQkSb5GKloob3Cxe2HKc0EmSnld.png)

**第三步：管理成员加入方式**

默认需要管理员审核才能加入。如果想让成员直接加入，可以打开「成员自动加入」开关。

![团队设置页面，显示「成员自动加入」开关，关闭时需管理员审核，打开时成员可直接加入](/getbiji-docs-v3/images/FGmpbMg08o2EBvxSVsfc69cGnNe.jpg)

其他成员点击链接后，会看到「申请加入知识库」按钮。管理员审核通过后，知识库会出现在成员的列表中。

![他人通过链接访问的团队知识库页面，显示「申请加入知识库」按钮](/getbiji-docs-v3/images/KsQdbmbcGo2kNAxRq7WctJuZnfI.jpg)

#### 审核成员申请

有新成员申请加入时，知识库顶部的成员入口会有红点提醒。

![知识库详情页顶部成员入口显示红点通知，提示有新的加入申请待审核](/getbiji-docs-v3/images/E4vvbxxc2oWXzix0YjQcxXjhnyd.jpg)

点击进入成员管理页面，可以同意或拒绝申请。

![成员管理页面，显示待审核的申请列表，每条申请右侧有「同意」和「拒绝」按钮](/getbiji-docs-v3/images/Z2RHbgy8Cof9dTxVHH5cdJIFned.png)

通过审核的成员可以分配角色：普通成员或管理员。也可以随时将成员移出知识库。

![成员角色设置页面，可将成员设置为「普通成员」或「管理员」，底部有「移出知识库」选项](/getbiji-docs-v3/images/Lj1ub7ugeoMpXAxB0N5ctQwYnSh.jpg)

![成员列表页面，显示所有已加入的团队成员、角色和加入时间](/getbiji-docs-v3/images/QrM3bb1E7oZyEMxsFzFcm4pHnTh.png)

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

![他人分享的知识库页面，顶部显示「+ 订阅」按钮，点击即可将知识库加入自己的列表](/getbiji-docs-v3/images/MfT2bK30XoTJzrx2HtRcWmKpnGh.png)

订阅后的知识库会出现在「我的」知识库列表中。你也可以在「精选」tab 下订阅官方推荐的知识库。

![知识库列表页「精选」标签，展示官方推荐的优质知识库，可点击订阅](/getbiji-docs-v3/images/B6ahbzjuZokVrmxE78ScLpKHnVe.jpg)

![已订阅的知识库出现在「我的」知识库列表中](/getbiji-docs-v3/images/P987bN9gvosMABxmpoKcT0fincg.jpg)

如果想取消订阅，点击知识库的「...」更多按钮，选择「取消订阅」。

![知识库更多操作菜单，显示「取消订阅」选项](/getbiji-docs-v3/images/HEUTbVF7noJCbOxwh7NcBBOEnXb.png)

### 网页端

打开别人分享的链接，点击右上角「订阅知识库」。

![网页端他人知识库页面，右上角显示「订阅知识库」按钮](/getbiji-docs-v3/images/Rl3CbILKDoCYgYxb5rgcnJzhnbw.png)

如果想取消订阅，点击知识库的「...」更多按钮，选择「取消订阅」。

![网页端知识库卡片的「...」菜单，显示「取消订阅」选项](/getbiji-docs-v3/images/YEkebRi8xoCSHSx12Y9cFnJqnHc.png)

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

![知识库详情页，点击底部「添加内容」按钮后弹出选项菜单](/getbiji-docs-v3/images/GdYSbehsOoY1f8xMPJTcewFBnKu.png)

![添加内容弹窗，显示「上传文件」「订阅直播/博主」等选项](/getbiji-docs-v3/images/P7a4bZsUvobjj2xDTGecAzjanQd.png)

**第二步：粘贴博主主页链接**

选择「抖音博主」，然后粘贴博主的主页链接。

![订阅页面切换到「抖音博主」标签，下方有链接输入框，粘贴博主主页链接后点击订阅](/getbiji-docs-v3/images/Umo5bwyyao6THRxRf6Kc8iYanvc.png)

![粘贴链接后显示博主信息预览，包括博主头像和昵称，确认后点击订阅按钮](/getbiji-docs-v3/images/Vubqb9jPdoWd9JxN5PQcD8YUn6f.jpg)

**第三步：订阅成功，等待更新**

订阅成功后，Get笔记会每天自动检查博主是否发布了新视频，并将视频内容整理成笔记。

![知识库中已订阅的博主列表，显示博主昵称和最近更新时间](/getbiji-docs-v3/images/C4SNblJxho6YV2xtY24cVR8Mn8d.jpg)

![博主视频自动生成的笔记详情，显示视频标题、内容摘要和重点信息](/getbiji-docs-v3/images/JKFbbgDvUoqEPVxcsUFc4Gjjnac.jpg)

### 网页端

**第一步：进入知识库，点击「添加」→「订阅直播/博主」**

![网页端知识库详情页，点击顶部「添加」按钮展开菜单](/getbiji-docs-v3/images/XHisbWv4Co1ozRxqBlDcnqNrn5x.png)

![下拉菜单中选择「订阅直播/博主」选项](/getbiji-docs-v3/images/QtFNbDhccoeQT4xvzEKc8gkmnsD.png)

**第二步：粘贴博主主页链接，点击订阅**

![网页端订阅弹窗，选择「抖音博主」标签，输入框粘贴博主主页链接](/getbiji-docs-v3/images/TsUUb270wo9wb4xLIxicCYpMnCf.png)

![粘贴链接后显示博主信息，确认后点击订阅按钮完成操作](/getbiji-docs-v3/images/Vhtxbtl3NoA4W4xG9tMcy139nsd.png)

## 怎么找到抖音博主的主页链接

1. 打开抖音 App，找到你想订阅的博主
2. 进入博主主页，点击右上角「...」
3. 点击「分享名片」，然后「复制链接」

![抖音博主主页，右上角显示「...」更多操作按钮](/getbiji-docs-v3/images/Swr0bxOQxoEkY4xj8zCcWNrqnwl.jpg)

![点击「...」后弹出菜单，显示「分享名片」选项](/getbiji-docs-v3/images/TyymbmYu3ocgN3xEYZ8cjtyynmh.jpg)

![分享名片页面，底部显示「复制链接」按钮，点击即可复制博主主页链接](/getbiji-docs-v3/images/VwKubVTg9oJwCTxtLK8cCVeqnTL.jpg)

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

![知识库详情页，点击底部「添加内容」按钮后弹出选项菜单](/getbiji-docs-v3/images/F0thbTkUDo477xxClbUcTTsDnJV.png)

![添加内容弹窗，显示「上传文件」「订阅直播/博主」等选项，点击「订阅直播/博主」](/getbiji-docs-v3/images/GjX8bbnU1odteAxel3EckQ9Xnhd.png)

**第二步：粘贴直播链接**

选择直播平台（得到 App 或视频号），然后粘贴你复制好的直播链接。

![订阅直播页面，顶部可切换「得到 App 直播」和「视频号直播」，下方有链接输入框，粘贴直播链接后点击订阅](/getbiji-docs-v3/images/VRThbz2sKof8cCxzUmzcYrF5nmh.jpg)

![粘贴链接后显示直播信息预览，确认无误后点击订阅按钮完成订阅](/getbiji-docs-v3/images/AgM9b7LyAoztD0xU9WDcSmgonyb.jpg)

**第三步：等待 AI 生成笔记**

订阅成功后，直播结束时 AI 会自动生成内容总结和章节纪要（处理过程大约需要 30-40 分钟）。生成的笔记会出现在知识库内容列表中。

![知识库中已生成的直播笔记，显示直播标题、内容总结和章节纪要，可点击查看完整内容](/getbiji-docs-v3/images/A03cbM0mxoPmeyx5lHwcweVEnRd.jpg)

### 网页端

**第一步：进入知识库，点击「添加」→「订阅直播/博主」**

![网页端知识库详情页，点击顶部「添加」按钮展开菜单，选择「订阅直播/博主」](/getbiji-docs-v3/images/FGJ1bGDSioR9htxlAGmcw2Gmn8c.png)

![下拉菜单中显示「订阅直播/博主」选项](/getbiji-docs-v3/images/Mrr8bQvxvofvqBxR5a4cldaCnCe.jpg)

**第二步：粘贴直播链接，点击订阅**

![网页端订阅直播弹窗，选择「得到 App 直播」，下方输入框粘贴直播链接](/getbiji-docs-v3/images/Vd4bbYiqEoD0CYxK8nDcxtNonJc.png)

![粘贴链接后显示直播信息，点击订阅按钮完成操作](/getbiji-docs-v3/images/T0dgbLGNconpRfxKyWmcya12nGh.png)

## 怎么找到得到 App 的直播链接

1. 打开得到 App，找到你想订阅的直播
2. 打开直播间，点击分享按钮
3. 点击「复制链接」

![得到 App 直播间页面，底部显示分享按钮，点击后出现分享选项](/getbiji-docs-v3/images/WLnybtQCDoauLPxRRn0cc5gLn1e.jpg)

![分享弹窗中显示多种分享方式，底部有「复制链接」按钮](/getbiji-docs-v3/images/ZgRRbM5looyQF6xr3KKc6X55nlf.jpg)

![点击复制链接后提示「链接已复制」，可粘贴到 Get笔记中使用](/getbiji-docs-v3/images/ZcQEboD5uoFTRvx9RXtcuSGZn2Q.jpg)

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

![知识库详情页，底部显示「添加内容」按钮](/getbiji-docs-v3/images/HEdKbEeqYoEV2ixqp5icCYx6nmc.png)

**第二步：选择「上传文件」**

在弹出的选项中，选择「上传文件」，然后从手机中选择文件（可多选）。

![添加内容弹窗，显示「上传文件」「订阅直播/博主」「从已有笔记导入」等选项](/getbiji-docs-v3/images/Lju4bF3wOoVOXYxwi6scqbZln8e.png)

![手机文件选择界面，可浏览和选择 PDF、Word、PPT 等文件进行上传](/getbiji-docs-v3/images/BBb7b4qo3odfG9xTaLUc2hf3nQc.jpg)

**第三步：等待 AI 处理**

文件上传后，AI 需要 1-3 分钟进行识别和分析。处理完成后可以搜索文件内容、向 AI 提问。

![文件上传进度页面，显示文件名和上传状态，AI 正在处理分析文件内容](/getbiji-docs-v3/images/QUpGb7QWfomYYNxZvuWcagLXnNb.jpg)

你还可以在知识库内创建文件夹，把上传的文件分类管理。

![知识库内文件夹视图，支持新建文件夹对上传文件进行分类整理](/getbiji-docs-v3/images/K8IDbigaRol1Etxhq8xciv22n6f.png)

![新建文件夹弹窗，输入文件夹名称后点击确定即可创建](/getbiji-docs-v3/images/ZUW3bImleottyYx8SlQcI3lgnbf.png)

点击具体文件，可以查看文件内容。

![文件详情页，展示 AI 解析后的文件内容，支持全文阅读和搜索](/getbiji-docs-v3/images/H4mSbh67xoMTLZxrGKqc1vnAndh.jpg)

![文件内容详情页面，显示文档的完整内容，可滚动阅读](/getbiji-docs-v3/images/OyUhbWbzvouqU9x9KH0cAUZ6nte.png)

### 网页端

**第一步：进入知识库，点击「添加」→ 直接上传文件**

![网页端知识库详情页，顶部「添加」按钮展开后显示上传文件选项](/getbiji-docs-v3/images/RB0VbYUKQoMq66xDgcccMo5MnAe.jpg)

选择文件上传（可多选），支持 PDF、Word、PPT 格式。

![网页端文件选择对话框，可选择多个文件同时上传](/getbiji-docs-v3/images/MjLGb191vorJ44xE65vc4vMinQe.png)

**第二步：等待 AI 处理**

上传后 AI 需要 1-3 分钟处理文件，处理期间可以继续添加其他文件。

![网页端文件上传列表，显示各文件的处理状态：上传中、处理中、已完成](/getbiji-docs-v3/images/U8ZubD850obbVaxaNt0c4xAincc.png)

处理完成后，点击文件即可查看内容。

![网页端文件内容详情页，展示 AI 解析后的文档内容](/getbiji-docs-v3/images/XJHmbFJDdoklqQxVZ4mcBRamnyg.png)

### 小程序端

在微信里也能上传文件到知识库，特别适合上传微信聊天中收到的文件。

**第一步：打开 Get笔记小程序，进入知识库**

点击「更多」按钮，进入知识库页面。

![微信小程序首页，底部显示「更多」按钮，点击进入知识库等功能页面](/getbiji-docs-v3/images/H2SebWlLNo5RUWxc25hc99K9nVg.jpg)

**第二步：点击添加按钮，选择「微信文件」**

![小程序知识库页面，点击右下角添加按钮，弹出选项包括「微信文件」](/getbiji-docs-v3/images/H45tb3TIBoMIoSx3Ge4ceZ8PnNb.jpg)

从微信聊天记录中选择文件进行上传。

![微信文件选择界面，显示最近聊天中收到的文件列表，可选择上传](/getbiji-docs-v3/images/YaDrbOFztowhUTx7SKAcB4mKnvf.png)

![文件上传确认页面，显示已选择的文件信息和目标知`}],mm={};function pm({samples:r}){var s;const[T,p]=H.useState(0);return r.length===0?null:o.jsxs("div",{"data-testid":"code-samples",style:{border:"1px solid var(--bd)",borderRadius:8,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:r.map((A,O)=>o.jsx("button",{onClick:()=>p(O),style:{padding:"8px 16px",fontSize:13,fontWeight:500,background:O===T?"var(--cdBg)":"transparent",color:O===T?"var(--tx)":"var(--tx2)",border:"none",borderBottom:O===T?"2px solid var(--ac)":"2px solid transparent",cursor:"pointer",fontFamily:"var(--font-body)",whiteSpace:"nowrap"},children:A.label},A.language))}),o.jsx("pre",{style:{margin:0,padding:16,background:"var(--cdBg)",overflow:"auto"},children:o.jsx("code",{style:{fontSize:13,fontFamily:"var(--font-code)"},children:(s=r[T])==null?void 0:s.code})})]})}function hm({href:r,title:T,description:p,icon:s,external:A}){const O=A??r.startsWith("http");return o.jsxs("a",{href:r,target:O?"_blank":void 0,rel:O?"noopener noreferrer":void 0,style:{display:"block",padding:"16px 20px",border:"1px solid var(--bd)",borderRadius:8,textDecoration:"none",color:"inherit",background:"var(--sf)",transition:"border-color 0.15s, background 0.15s",cursor:"pointer"},onMouseEnter:U=>{U.currentTarget.style.borderColor="var(--ac)",U.currentTarget.style.background="var(--sfH)"},onMouseLeave:U=>{U.currentTarget.style.borderColor="var(--bd)",U.currentTarget.style.background="var(--sf)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s&&o.jsx("span",{style:{fontSize:18},children:s}),o.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--tx)"},children:T}),o.jsx("span",{style:{marginLeft:"auto",color:"var(--tx2)",fontSize:14},children:O?"↗":"→"})]}),p&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:13,color:"var(--tx2)",lineHeight:1.5},children:p})]})}function vm({columns:r=2,children:T}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginTop:16,marginBottom:16},children:T})}const bm={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function e0(r){return bm[r]||"#6b7280"}function ym({entries:r,initialLimit:T}){const[p,s]=H.useState(!T),A=p?r:r.slice(0,T||r.length);return r.length===0?o.jsx("div",{"data-testid":"changelog-empty",style:{padding:"40px 0",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No changelog entries found."}):o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),A.map((O,U)=>o.jsxs("div",{"data-testid":`changelog-entry-${O.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:U<A.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:O.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:O.url?o.jsx("a",{href:O.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:O.version}):O.version}),O.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:O.date})]}),O.sections.map(B=>o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:e0(B.type)}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:e0(B.type),fontFamily:"var(--font-code, monospace)"},children:B.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:B.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},B.type))]},O.version)),!p&&r.length>(T||0)&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>s(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer",transition:"border-color .15s, color .15s"},children:["Show all ",r.length," releases"]})})]})}const l0={info:{color:"#3b82f6",label:"INFO"},warning:{color:"#f59e0b",label:"WARNING"},tip:{color:"var(--ac, #a78bfa)",label:"TIP"},danger:{color:"#ef4444",label:"DANGER"}};function xm({type:r="info",title:T,children:p}){const s=l0[r]||l0.info;return o.jsxs("div",{style:{borderLeft:`3px solid ${s.color}`,background:`${s.color}11`,borderRadius:"0 2px 2px 0",padding:"14px 18px",marginBottom:20},children:[T?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:s.color,fontFamily:"var(--font-code, monospace)"},children:s.label}),o.jsx("span",{style:{fontWeight:600,fontSize:13,color:s.color},children:T})]}):o.jsx("div",{style:{marginBottom:4},children:o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:s.color,fontFamily:"var(--font-code, monospace)"},children:s.label})}),o.jsx("div",{style:{fontSize:14,lineHeight:1.65,color:"var(--tx2)"},children:p})]})}function Sm({items:r,children:T}){const[p,s]=H.useState(0);return o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--bd)"},children:r.map((A,O)=>o.jsx("button",{onClick:()=>s(O),style:{padding:"8px 16px",background:"none",border:"none",borderBottom:p===O?"2px solid var(--ac)":"2px solid transparent",color:p===O?"var(--ac)":"var(--txM)",fontWeight:p===O?600:400,fontSize:13,cursor:"pointer",fontFamily:"inherit"},children:A},O))}),o.jsx("div",{style:{padding:"16px 0"},children:T[p]})]})}function Am({title:r,icon:T,href:p,children:s}){const A=o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"20px",transition:"border-color 0.15s",cursor:p?"pointer":"default"},children:[T&&o.jsx("span",{style:{fontSize:24,marginBottom:8,display:"block"},children:T}),o.jsx("div",{style:{fontWeight:600,fontSize:14,marginBottom:4},children:r}),s&&o.jsx("div",{style:{fontSize:13,color:"var(--txM)",lineHeight:1.5},children:s})]});return p?o.jsx("a",{href:p,style:{textDecoration:"none",color:"inherit"},children:A}):A}function jm({cols:r=2,children:T}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginBottom:20},children:T})}function Tm({children:r}){return o.jsx("div",{style:{paddingLeft:24,borderLeft:"2px solid var(--bd)",marginBottom:20},children:i0.Children.map(r,(T,p)=>o.jsxs("div",{style:{position:"relative",paddingBottom:20},children:[o.jsx("div",{style:{position:"absolute",left:-33,top:0,width:20,height:20,borderRadius:"50%",background:"var(--ac)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},children:p+1}),o.jsx("div",{style:{paddingLeft:8},children:T})]}))})}function Em({title:r,children:T}){const[p,s]=H.useState(!1);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:8,overflow:"hidden"},children:[o.jsxs("button",{onClick:()=>s(!p),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"12px 16px",background:"var(--sf)",border:"none",cursor:"pointer",fontWeight:500,fontSize:14,color:"var(--tx)",fontFamily:"inherit"},children:[r,o.jsx("span",{style:{transform:p?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"},children:"▾"})]}),p&&o.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",fontSize:14,color:"var(--tx2)",lineHeight:1.65},children:T})]})}const zm={install:{npm:"npm install",yarn:"yarn add",pnpm:"pnpm add",bun:"bun add"},"install -D":{npm:"npm install -D",yarn:"yarn add -D",pnpm:"pnpm add -D",bun:"bun add -d"},uninstall:{npm:"npm uninstall",yarn:"yarn remove",pnpm:"pnpm remove",bun:"bun remove"},run:{npm:"npm run",yarn:"yarn",pnpm:"pnpm",bun:"bun run"},exec:{npm:"npx",yarn:"yarn dlx",pnpm:"pnpm dlx",bun:"bunx"},init:{npm:"npm init",yarn:"yarn init",pnpm:"pnpm init",bun:"bun init"},create:{npm:"npm create",yarn:"yarn create",pnpm:"pnpm create",bun:"bun create"}};function _m(r,T){for(const[p,s]of Object.entries(zm))if(r.startsWith(p+" ")||r===p){const A=r.slice(p.length);return(s[T]||p)+A}return`${T} ${r}`}function Mm({command:r}){const[T,p]=H.useState(0),[s,A]=H.useState(!1),O=["npm","yarn","pnpm","bun"],U=_m(r,O[T]);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:16,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto"},children:O.map((B,R)=>o.jsx("button",{onClick:()=>{p(R),A(!1)},style:{padding:"8px 14px",background:"none",border:"none",cursor:"pointer",fontSize:12,fontFamily:"var(--font-code)",fontWeight:R===T?600:400,color:R===T?"var(--ac)":"var(--txM)",borderBottom:R===T?"2px solid var(--ac)":"2px solid transparent",whiteSpace:"nowrap"},children:B},B))}),o.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",background:"var(--cdBg)",gap:8},children:[o.jsx("code",{style:{flex:1,fontFamily:"var(--font-code)",fontSize:13,color:"var(--cdTx)",whiteSpace:"pre",overflowX:"auto"},children:U}),o.jsx("button",{onClick:()=>{var B;(B=navigator.clipboard)==null||B.writeText(U),A(!0),setTimeout(()=>A(!1),2e3)},style:{background:"none",border:"none",cursor:"pointer",color:"var(--txM)",fontSize:12,fontFamily:"var(--font-code)",flexShrink:0},children:s?"✓":"Copy"})]})]})}function Om({name:r,fields:T}){return o.jsxs("div",{style:{marginBottom:16},children:[r&&o.jsx("h4",{style:{fontFamily:"var(--font-code)",fontSize:15,marginBottom:8,color:"var(--tx)"},children:r}),o.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"var(--font-body)"},children:[o.jsx("thead",{children:o.jsx("tr",{style:{borderBottom:"2px solid var(--bd)"},children:["Property","Type","Required","Default","Description"].map(p=>o.jsx("th",{style:{textAlign:"left",padding:"8px 10px",color:"var(--txM)",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:".05em",whiteSpace:"nowrap"},children:p},p))})}),o.jsx("tbody",{children:T.map(p=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--bd)"},children:[o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontWeight:500,color:"var(--tx)"},children:p.name}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--ac)"},children:p.type}),o.jsx("td",{style:{padding:"8px 10px"},children:p.required&&o.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e04040",background:"rgba(224,64,64,0.1)",padding:"2px 6px",borderRadius:2},children:"required"})}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--txM)"},children:p.default||"—"}),o.jsx("td",{style:{padding:"8px 10px",color:"var(--tx2)"},children:p.description||""})]},p.name))})]})})]})}function Dm({name:r}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx2)"},children:[o.jsx("span",{style:{opacity:.6},children:"📄"})," ",r]})}function Rm({name:r,defaultOpen:T,children:p}){const[s,A]=H.useState(T??!1);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>A(!s),style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx)",fontWeight:500},children:[o.jsx("span",{children:s?"📂":"📁"})," ",r]}),s&&o.jsx("div",{style:{paddingLeft:18,borderLeft:"1px solid var(--bd)",marginLeft:8},children:p})]})}function Wo({children:r}){return o.jsx("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"12px 16px",background:"var(--cdBg)",marginBottom:16},children:r})}Wo.File=Dm;Wo.Folder=Rm;const Cm={Callout:xm,Tabs:Sm,Card:Am,CardGroup:jm,Steps:Tm,Accordion:Em,ChangelogTimeline:ym,PackageManager:Mm,TypeTable:Om,FileTree:Wo,CodeSamples:pm,LinkCard:hm,CardGrid:vm},Um=`
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
`,Eu=(ui.basePath||"/").replace(/\/$/,"");function Gm(r){return o0(r,Eu,Ve)}function Ko(r){return cm(r,Eu,Ve)}const r0=sm(window.location.pathname,window.location.hash,Ve,Eu,o0),Bm=s0(r0,Ve,f0);function Hm(){var ut;const[r,T]=H.useState(r0),[p,s]=H.useState(null),[A,O]=H.useState(!0),U=H.useCallback(async(D,k)=>{O(!0),T(D);const Z=Ko(D);k!=null&&k.replace?window.history.replaceState(null,"",Z):window.history.pushState(null,"",Z);const L=await s0(D,Ve,f0);if(s(L),O(!1),!(k!=null&&k.skipScroll)){const pt=window.location.hash.slice(1);pt?requestAnimationFrame(()=>{const At=document.getElementById(pt);At&&At.scrollIntoView({behavior:"smooth",block:"start"})}):window.scrollTo(0,0)}},[]);H.useEffect(()=>{const D=window.location.hash.slice(1);if(D&&Ve.some(k=>k.id===D)){const k=Ko(D);window.history.replaceState(null,"",k),U(D,{replace:!0})}else{const k=Ko(r);window.history.replaceState(null,"",k),Bm.then(Z=>{s(Z),O(!1)})}},[]),H.useEffect(()=>{const D=()=>{const k=Gm(window.location.pathname);k&&k!==r&&U(k,{replace:!0,skipScroll:!0})};return window.addEventListener("popstate",D),()=>window.removeEventListener("popstate",D)},[r,U]);const B=H.useRef(null),[R,x]=H.useState(()=>{var k,Z;if(typeof document>"u")return"light";if(document.documentElement.classList.contains("dark"))return"dark";const D=((k=ui.theme)==null?void 0:k.mode)||"auto";return D==="dark"?"dark":D==="light"?"light":(Z=window.matchMedia)!=null&&Z.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"});H.useEffect(()=>{const D=new MutationObserver(()=>{const k=document.documentElement.classList.contains("dark");x(k?"dark":"light")});return D.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>D.disconnect()},[]),H.useEffect(()=>{const D=document.querySelectorAll(".tome-mermaid[data-mermaid]");if(D.length===0)return;let k=!1;const Z="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";return(async()=>{try{B.current||(B.current=(await import(Z)).default);const L=B.current;if(k)return;const pt=R==="dark",At=getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim()||"sans-serif";L.initialize({startOnLoad:!1,theme:pt?"dark":"default",fontFamily:At,flowchart:{padding:15,nodeSpacing:30,rankSpacing:40}});for(let w=0;w<D.length;w++){const Rt=D[w],Jt=Rt.getAttribute("data-mermaid");if(Jt)try{const zt=atob(Jt),{svg:Wt}=await L.render(`tome-mermaid-${w}-${Date.now()}`,zt);k||(Rt.innerHTML=Wt)}catch(zt){console.warn("[tome] Mermaid render failed:",zt),Rt.textContent="Diagram rendering failed",Rt.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"}}}catch(L){console.warn("[tome] Failed to load mermaid from CDN:",L),D.forEach(pt=>{pt.textContent="Failed to load diagram renderer",pt.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"})}})(),()=>{k=!0}},[p,A,R]),H.useEffect(()=>{if(A)return;const D=document.querySelectorAll(".tome-content pre"),k=[];return D.forEach(Z=>{if(Z.querySelector(".tome-copy-btn"))return;const L=document.createElement("button");L.className="tome-copy-btn",L.textContent="Copy",L.addEventListener("click",async()=>{const pt=Z.querySelector("code");if(pt)try{await navigator.clipboard.writeText(pt.textContent||""),L.textContent="Copied!",setTimeout(()=>{L.textContent="Copy"},2e3)}catch{L.textContent="Failed",setTimeout(()=>{L.textContent="Copy"},2e3)}}),Z.appendChild(L),k.push(L)}),()=>{k.forEach(Z=>Z.remove())}},[p,A]);const V=Ve.map(D=>({id:D.id,title:D.frontmatter.title,description:D.frontmatter.description})),C=Ve.find(D=>D.id===r),F=fm(C),J=om(ui.editLink,C==null?void 0:C.filePath),bt=(C==null?void 0:C.locale)||(Zo==null?void 0:Zo.defaultLocale)||"en",nt="ltr";return H.useEffect(()=>{const D=document.querySelectorAll(".tome-math[data-math]").length>0;if(!ui.math&&!D)return;const k="tome-katex-css";if(document.getElementById(k))return;const Z=document.createElement("link");Z.id=k,Z.rel="stylesheet",Z.href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",Z.crossOrigin="anonymous",document.head.appendChild(Z)},[p,A]),H.useEffect(()=>{const D=document.querySelectorAll(".tome-math[data-math]");if(D.length===0)return;let k=!1;const Z="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs";return(async()=>{try{const L=(await import(Z)).default;if(k)return;for(const pt of D){const At=pt.getAttribute("data-math");if(At)try{const w=atob(At),Rt=pt.classList.contains("tome-math-block");L.render(w,pt,{displayMode:Rt,throwOnError:!1})}catch(w){console.warn("[tome] KaTeX render failed:",w)}}}catch(L){console.warn("[tome] Failed to load KaTeX from CDN:",L)}})(),()=>{k=!0}},[p,A]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Um}),o.jsx(im,{config:ui,navigation:rm,currentPageId:r,pageHtml:p!=null&&p.isMdx?void 0:A?"":(p==null?void 0:p.html)||"<p>Page not found</p>",pageComponent:p!=null&&p.isMdx?p.component:void 0,mdxComponents:Cm,pageTitle:(p==null?void 0:p.frontmatter.title)||(A?"":"Not Found"),pageDescription:p==null?void 0:p.frontmatter.description,headings:(p==null?void 0:p.headings)||[],tocEnabled:(p==null?void 0:p.frontmatter.toc)!==!1,editUrl:J,lastUpdated:C==null?void 0:C.lastUpdated,changelogEntries:p!=null&&p.isMdx||p==null?void 0:p.changelogEntries,onNavigate:U,allPages:V,docContext:gm,versioning:void 0,currentVersion:F,basePath:Eu,isDraft:((ut=C==null?void 0:C.frontmatter)==null?void 0:ut.draft)===!0,dir:nt,i18n:void 0,currentLocale:bt,overrides:mm})]})}const a0=document.getElementById("tome-root");a0&&R1.createRoot(a0).render(o.jsx(Hm,{}));

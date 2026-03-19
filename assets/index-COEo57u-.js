(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))s(A);new MutationObserver(A=>{for(const D of A)if(D.type==="childList")for(const B of D.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&s(B)}).observe(document,{childList:!0,subtree:!0});function p(A){const D={};return A.integrity&&(D.integrity=A.integrity),A.referrerPolicy&&(D.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?D.credentials="include":A.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function s(A){if(A.ep)return;A.ep=!0;const D=p(A);fetch(A.href,D)}})();function Sm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qo={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Am(){if(Ld)return ai;Ld=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function p(s,A,D){var B=null;if(D!==void 0&&(B=""+D),A.key!==void 0&&(B=""+A.key),"key"in A){D={};for(var H in A)H!=="key"&&(D[H]=A[H])}else D=A;return A=D.ref,{$$typeof:r,type:s,key:B,ref:A!==void 0?A:null,props:D}}return ai.Fragment=E,ai.jsx=p,ai.jsxs=p,ai}var Yd;function jm(){return Yd||(Yd=1,qo.exports=Am()),qo.exports}var o=jm(),Lo={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Em(){if(kd)return tt;kd=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),F=Symbol.iterator;function J(g){return g===null||typeof g!="object"?null:(g=F&&g[F]||g["@@iterator"],typeof g=="function"?g:null)}var bt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},et=Object.assign,ut={};function O(g,_,N){this.props=g,this.context=_,this.refs=ut,this.updater=N||bt}O.prototype.isReactComponent={},O.prototype.setState=function(g,_){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,_,"setState")},O.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Y(){}Y.prototype=O.prototype;function Z(g,_,N){this.props=g,this.context=_,this.refs=ut,this.updater=N||bt}var L=Z.prototype=new Y;L.constructor=Z,et(L,O.prototype),L.isPureReactComponent=!0;var pt=Array.isArray;function At(){}var w={H:null,A:null,T:null,S:null},Rt=Object.prototype.hasOwnProperty;function Jt(g,_,N){var k=N.ref;return{$$typeof:r,type:g,key:_,ref:k!==void 0?k:null,props:N}}function zt(g,_){return Jt(g.type,_,g.props)}function Wt(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Ut(g){var _={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(N){return _[N]})}var _e=/\/+/g;function ct(g,_){return typeof g=="object"&&g!==null&&g.key!=null?Ut(""+g.key):_.toString(36)}function be(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(At,At):(g.status="pending",g.then(function(_){g.status==="pending"&&(g.status="fulfilled",g.value=_)},function(_){g.status==="pending"&&(g.status="rejected",g.reason=_)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function j(g,_,N,k,$){var at=typeof g;(at==="undefined"||at==="boolean")&&(g=null);var ht=!1;if(g===null)ht=!0;else switch(at){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(g.$$typeof){case r:case E:ht=!0;break;case V:return ht=g._init,j(ht(g._payload),_,N,k,$)}}if(ht)return $=$(g),ht=k===""?"."+ct(g,0):k,pt($)?(N="",ht!=null&&(N=ht.replace(_e,"$&/")+"/"),j($,_,N,"",function(Zn){return Zn})):$!=null&&(Wt($)&&($=zt($,N+($.key==null||g&&g.key===$.key?"":(""+$.key).replace(_e,"$&/")+"/")+ht)),_.push($)),1;ht=0;var $t=k===""?".":k+":";if(pt(g))for(var Gt=0;Gt<g.length;Gt++)k=g[Gt],at=$t+ct(k,Gt),ht+=j(k,_,N,at,$);else if(Gt=J(g),typeof Gt=="function")for(g=Gt.call(g),Gt=0;!(k=g.next()).done;)k=k.value,at=$t+ct(k,Gt++),ht+=j(k,_,N,at,$);else if(at==="object"){if(typeof g.then=="function")return j(be(g),_,N,k,$);throw _=String(g),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ht}function U(g,_,N){if(g==null)return g;var k=[],$=0;return j(g,k,"","",function(at){return _.call(N,at,$++)}),k}function W(g){if(g._status===-1){var _=g._result;_=_(),_.then(function(N){(g._status===0||g._status===-1)&&(g._status=1,g._result=N)},function(N){(g._status===0||g._status===-1)&&(g._status=2,g._result=N)}),g._status===-1&&(g._status=0,g._result=_)}if(g._status===1)return g._result.default;throw g._result}var ot=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},jt={map:U,forEach:function(g,_,N){U(g,function(){_.apply(this,arguments)},N)},count:function(g){var _=0;return U(g,function(){_++}),_},toArray:function(g){return U(g,function(_){return _})||[]},only:function(g){if(!Wt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return tt.Activity=C,tt.Children=jt,tt.Component=O,tt.Fragment=p,tt.Profiler=A,tt.PureComponent=Z,tt.StrictMode=s,tt.Suspense=R,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,tt.__COMPILER_RUNTIME={__proto__:null,c:function(g){return w.H.useMemoCache(g)}},tt.cache=function(g){return function(){return g.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(g,_,N){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var k=et({},g.props),$=g.key;if(_!=null)for(at in _.key!==void 0&&($=""+_.key),_)!Rt.call(_,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&_.ref===void 0||(k[at]=_[at]);var at=arguments.length-2;if(at===1)k.children=N;else if(1<at){for(var ht=Array(at),$t=0;$t<at;$t++)ht[$t]=arguments[$t+2];k.children=ht}return Jt(g.type,$,k)},tt.createContext=function(g){return g={$$typeof:B,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:D,_context:g},g},tt.createElement=function(g,_,N){var k,$={},at=null;if(_!=null)for(k in _.key!==void 0&&(at=""+_.key),_)Rt.call(_,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&($[k]=_[k]);var ht=arguments.length-2;if(ht===1)$.children=N;else if(1<ht){for(var $t=Array(ht),Gt=0;Gt<ht;Gt++)$t[Gt]=arguments[Gt+2];$.children=$t}if(g&&g.defaultProps)for(k in ht=g.defaultProps,ht)$[k]===void 0&&($[k]=ht[k]);return Jt(g,at,$)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(g){return{$$typeof:H,render:g}},tt.isValidElement=Wt,tt.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:W}},tt.memo=function(g,_){return{$$typeof:x,type:g,compare:_===void 0?null:_}},tt.startTransition=function(g){var _=w.T,N={};w.T=N;try{var k=g(),$=w.S;$!==null&&$(N,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(At,ot)}catch(at){ot(at)}finally{_!==null&&N.types!==null&&(_.types=N.types),w.T=_}},tt.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},tt.use=function(g){return w.H.use(g)},tt.useActionState=function(g,_,N){return w.H.useActionState(g,_,N)},tt.useCallback=function(g,_){return w.H.useCallback(g,_)},tt.useContext=function(g){return w.H.useContext(g)},tt.useDebugValue=function(){},tt.useDeferredValue=function(g,_){return w.H.useDeferredValue(g,_)},tt.useEffect=function(g,_){return w.H.useEffect(g,_)},tt.useEffectEvent=function(g){return w.H.useEffectEvent(g)},tt.useId=function(){return w.H.useId()},tt.useImperativeHandle=function(g,_,N){return w.H.useImperativeHandle(g,_,N)},tt.useInsertionEffect=function(g,_){return w.H.useInsertionEffect(g,_)},tt.useLayoutEffect=function(g,_){return w.H.useLayoutEffect(g,_)},tt.useMemo=function(g,_){return w.H.useMemo(g,_)},tt.useOptimistic=function(g,_){return w.H.useOptimistic(g,_)},tt.useReducer=function(g,_,N){return w.H.useReducer(g,_,N)},tt.useRef=function(g){return w.H.useRef(g)},tt.useState=function(g){return w.H.useState(g)},tt.useSyncExternalStore=function(g,_,N){return w.H.useSyncExternalStore(g,_,N)},tt.useTransition=function(){return w.H.useTransition()},tt.version="19.2.4",tt}var Qd;function Jo(){return Qd||(Qd=1,Lo.exports=Em()),Lo.exports}var G=Jo();const ig=Sm(G);var Yo={exports:{}},ii={},ko={exports:{}},Qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Tm(){return Xd||(Xd=1,(function(r){function E(j,U){var W=j.length;j.push(U);t:for(;0<W;){var ot=W-1>>>1,jt=j[ot];if(0<A(jt,U))j[ot]=U,j[W]=jt,W=ot;else break t}}function p(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var U=j[0],W=j.pop();if(W!==U){j[0]=W;t:for(var ot=0,jt=j.length,g=jt>>>1;ot<g;){var _=2*(ot+1)-1,N=j[_],k=_+1,$=j[k];if(0>A(N,W))k<jt&&0>A($,N)?(j[ot]=$,j[k]=W,ot=k):(j[ot]=N,j[_]=W,ot=_);else if(k<jt&&0>A($,W))j[ot]=$,j[k]=W,ot=k;else break t}}return U}function A(j,U){var W=j.sortIndex-U.sortIndex;return W!==0?W:j.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;r.unstable_now=function(){return D.now()}}else{var B=Date,H=B.now();r.unstable_now=function(){return B.now()-H}}var R=[],x=[],V=1,C=null,F=3,J=!1,bt=!1,et=!1,ut=!1,O=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function L(j){for(var U=p(x);U!==null;){if(U.callback===null)s(x);else if(U.startTime<=j)s(x),U.sortIndex=U.expirationTime,E(R,U);else break;U=p(x)}}function pt(j){if(et=!1,L(j),!bt)if(p(R)!==null)bt=!0,At||(At=!0,Ut());else{var U=p(x);U!==null&&be(pt,U.startTime-j)}}var At=!1,w=-1,Rt=5,Jt=-1;function zt(){return ut?!0:!(r.unstable_now()-Jt<Rt)}function Wt(){if(ut=!1,At){var j=r.unstable_now();Jt=j;var U=!0;try{t:{bt=!1,et&&(et=!1,Y(w),w=-1),J=!0;var W=F;try{e:{for(L(j),C=p(R);C!==null&&!(C.expirationTime>j&&zt());){var ot=C.callback;if(typeof ot=="function"){C.callback=null,F=C.priorityLevel;var jt=ot(C.expirationTime<=j);if(j=r.unstable_now(),typeof jt=="function"){C.callback=jt,L(j),U=!0;break e}C===p(R)&&s(R),L(j)}else s(R);C=p(R)}if(C!==null)U=!0;else{var g=p(x);g!==null&&be(pt,g.startTime-j),U=!1}}break t}finally{C=null,F=W,J=!1}U=void 0}}finally{U?Ut():At=!1}}}var Ut;if(typeof Z=="function")Ut=function(){Z(Wt)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ct=_e.port2;_e.port1.onmessage=Wt,Ut=function(){ct.postMessage(null)}}else Ut=function(){O(Wt,0)};function be(j,U){w=O(function(){j(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rt=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(j){switch(F){case 1:case 2:case 3:var U=3;break;default:U=F}var W=F;F=U;try{return j()}finally{F=W}},r.unstable_requestPaint=function(){ut=!0},r.unstable_runWithPriority=function(j,U){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var W=F;F=j;try{return U()}finally{F=W}},r.unstable_scheduleCallback=function(j,U,W){var ot=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ot+W:ot):W=ot,j){case 1:var jt=-1;break;case 2:jt=250;break;case 5:jt=1073741823;break;case 4:jt=1e4;break;default:jt=5e3}return jt=W+jt,j={id:V++,callback:U,priorityLevel:j,startTime:W,expirationTime:jt,sortIndex:-1},W>ot?(j.sortIndex=W,E(x,j),p(R)===null&&j===p(x)&&(et?(Y(w),w=-1):et=!0,be(pt,W-ot))):(j.sortIndex=jt,E(R,j),bt||J||(bt=!0,At||(At=!0,Ut()))),j},r.unstable_shouldYield=zt,r.unstable_wrapCallback=function(j){var U=F;return function(){var W=F;F=U;try{return j.apply(this,arguments)}finally{F=W}}}})(Qo)),Qo}var Vd;function zm(){return Vd||(Vd=1,ko.exports=Tm()),ko.exports}var Xo={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Mm(){if(Zd)return se;Zd=1;var r=Jo();function E(R){var x="https://react.dev/errors/"+R;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)x+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+R+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var s={d:{f:p,r:function(){throw Error(E(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},A=Symbol.for("react.portal");function D(R,x,V){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:C==null?null:""+C,children:R,containerInfo:x,implementation:V}}var B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function H(R,x){if(R==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,se.createPortal=function(R,x){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(E(299));return D(R,x,null,V)},se.flushSync=function(R){var x=B.T,V=s.p;try{if(B.T=null,s.p=2,R)return R()}finally{B.T=x,s.p=V,s.d.f()}},se.preconnect=function(R,x){typeof R=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(R,x))},se.prefetchDNS=function(R){typeof R=="string"&&s.d.D(R)},se.preinit=function(R,x){if(typeof R=="string"&&x&&typeof x.as=="string"){var V=x.as,C=H(V,x.crossOrigin),F=typeof x.integrity=="string"?x.integrity:void 0,J=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;V==="style"?s.d.S(R,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:C,integrity:F,fetchPriority:J}):V==="script"&&s.d.X(R,{crossOrigin:C,integrity:F,fetchPriority:J,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},se.preinitModule=function(R,x){if(typeof R=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var V=H(x.as,x.crossOrigin);s.d.M(R,{crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&s.d.M(R)},se.preload=function(R,x){if(typeof R=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var V=x.as,C=H(V,x.crossOrigin);s.d.L(R,V,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},se.preloadModule=function(R,x){if(typeof R=="string")if(x){var V=H(x.as,x.crossOrigin);s.d.m(R,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:V,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else s.d.m(R)},se.requestFormReset=function(R){s.d.r(R)},se.unstable_batchedUpdates=function(R,x){return R(x)},se.useFormState=function(R,x,V){return B.H.useFormState(R,x,V)},se.useFormStatus=function(){return B.H.useHostTransitionStatus()},se.version="19.2.4",se}var Kd;function _m(){if(Kd)return Xo.exports;Kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),Xo.exports=Mm(),Xo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Dm(){if(Jd)return ii;Jd=1;var r=zm(),E=Jo(),p=_m();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function R(t){if(D(t)!==t)throw Error(s(188))}function x(t){var e=t.alternate;if(!e){if(e=D(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return R(a),t;if(i===l)return R(a),e;i=i.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===n){u=!0,n=a,l=i;break}if(c===l){u=!0,l=a,n=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===n){u=!0,n=i,l=a;break}if(c===l){u=!0,l=i,n=a;break}c=c.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function V(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=V(t),e!==null)return e;t=t.sibling}return null}var C=Object.assign,F=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),bt=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Jt=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),Wt=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=Wt&&t[Wt]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case et:return"Fragment";case O:return"Profiler";case ut:return"StrictMode";case pt:return"Suspense";case At:return"SuspenseList";case Jt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case bt:return"Portal";case Z:return t.displayName||"Context";case Y:return(t._context.displayName||"Context")+".Consumer";case L:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return e=t.displayName||null,e!==null?e:ct(t.type)||"Memo";case Rt:e=t._payload,t=t._init;try{return ct(t(e))}catch{}}return null}var be=Array.isArray,j=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ot=[],jt=-1;function g(t){return{current:t}}function _(t){0>jt||(t.current=ot[jt],ot[jt]=null,jt--)}function N(t,e){jt++,ot[jt]=t.current,t.current=e}var k=g(null),$=g(null),at=g(null),ht=g(null);function $t(t,e){switch(N(at,e),N($,t),N(k,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?sd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=sd(e),t=fd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_(k),N(k,t)}function Gt(){_(k),_($),_(at)}function Zn(t){t.memoizedState!==null&&N(ht,t);var e=k.current,n=fd(e,t.type);e!==n&&(N($,t),N(k,n))}function Kn(t){$.current===t&&(_(k),_($)),ht.current===t&&(_(ht),ti._currentValue=W)}var ia,Fe;function Le(t){if(ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ia=e&&e[1]||"",Fe=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+t+Fe}var ml=!1;function pl(t,e){if(!t||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var y=S}Reflect.construct(t,[],M)}else{try{M.call()}catch(S){y=S}t.call(M.prototype)}}else{try{throw Error()}catch(S){y=S}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),b=c.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===b.length)for(l=f.length-1,a=b.length-1;1<=l&&0<=a&&f[l]!==b[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==b[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==b[a]){var T=`
`+f[l].replace(" at new "," at ");return t.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",t.displayName)),T}while(1<=l&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Le(n):""}function zu(t,e){switch(t.tag){case 26:case 27:case 5:return Le(t.type);case 16:return Le("Lazy");case 13:return t.child!==e&&e!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return pl(t.type,!1);case 11:return pl(t.type.render,!1);case 1:return pl(t.type,!0);case 31:return Le("Activity");default:return""}}function ua(t){try{var e="",n=null;do e+=zu(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hl=Object.prototype.hasOwnProperty,vl=r.unstable_scheduleCallback,Pt=r.unstable_cancelCallback,ca=r.unstable_shouldYield,oa=r.unstable_requestPaint,Yt=r.unstable_now,Mu=r.unstable_getCurrentPriorityLevel,_u=r.unstable_ImmediatePriority,Jn=r.unstable_UserBlockingPriority,De=r.unstable_NormalPriority,ci=r.unstable_LowPriority,bl=r.unstable_IdlePriority,sa=r.log,oi=r.unstable_setDisableYieldValue,Ve=null,te=null;function ye(t){if(typeof sa=="function"&&oi(t),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(Ve,t)}catch{}}var ee=Math.clz32?Math.clz32:Ou,yl=Math.log,Du=Math.LN2;function Ou(t){return t>>>=0,t===0?32:31-(yl(t)/Du|0)|0}var Wn=256,re=262144,bn=4194304;function Ze(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function In(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=Ze(l):(u&=c,u!==0?a=Ze(u):n||(n=c&~t,n!==0&&(a=Ze(n))))):(c=l&~i,c!==0?a=Ze(c):u!==0?a=Ze(u):n||(n=l&~t,n!==0&&(a=Ze(n)))),a===0?0:e!==0&&e!==a&&(e&i)===0&&(i=a&-a,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:a}function yn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function si(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fa(){var t=bn;return bn<<=1,(bn&62914560)===0&&(bn=4194304),t}function xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fi(t,e,n,l,a,i){var u=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,b=t.hiddenUpdates;for(n=u&~n;0<n;){var T=31-ee(n),M=1<<T;c[T]=0,f[T]=-1;var y=b[T];if(y!==null)for(b[T]=null,T=0;T<y.length;T++){var S=y[T];S!==null&&(S.lane&=-536870913)}n&=~M}l!==0&&ra(t,l,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function ra(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ee(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function da(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-ee(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function ga(t,e){var n=e&-e;return n=(n&42)!==0?1:Sl(n),(n&(t.suspendedLanes|e))!==0?0:n}function Sl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Al(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ma(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:Bd(t.type))}function pa(t,e){var n=U.p;try{return U.p=t,e()}finally{U.p=n}}var Ye=Math.random().toString(36).slice(2),kt="__reactFiber$"+Ye,ae="__reactProps$"+Ye,$e="__reactContainer$"+Ye,h="__reactEvents$"+Ye,q="__reactListeners$"+Ye,P="__reactHandles$"+Ye,gt="__reactResources$"+Ye,vt="__reactMarker$"+Ye;function Qt(t){delete t[kt],delete t[ae],delete t[h],delete t[q],delete t[P]}function It(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$e]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vd(t);t!==null;){if(n=t[kt])return n;t=vd(t)}return e}t=n,n=t.parentNode}return null}function Sn(t){if(t=t[kt]||t[$e]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ha(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function jl(t){var e=t[gt];return e||(e=t[gt]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[vt]=!0}var Io=new Set,Fo={};function Fn(t,e){El(t,e),El(t+"Capture",e)}function El(t,e){for(Fo[t]=e,t=0;t<e.length;t++)Io.add(e[t])}var dg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Po={};function gg(t){return hl.call(Po,t)?!0:hl.call($o,t)?!1:dg.test(t)?Po[t]=!0:($o[t]=!0,!1)}function ri(t,e,n){if(gg(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function di(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Pe(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ts(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mg(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ru(t){if(!t._valueTracker){var e=ts(t)?"checked":"value";t._valueTracker=mg(t,e,""+t[e])}}function es(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=ts(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pg=/[\n"\\]/g;function Re(t){return t.replace(pg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cu(t,e,n,l,a,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Oe(e)):t.value!==""+Oe(e)&&(t.value=""+Oe(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Bu(t,u,Oe(e)):n!=null?Bu(t,u,Oe(n)):l!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Oe(c):t.removeAttribute("name")}function ns(t,e,n,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Ru(t);return}n=n!=null?""+Oe(n):"",e=e!=null?""+Oe(e):n,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Ru(t)}function Bu(t,e,n){e==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Tl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+Oe(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function ls(t,e,n){if(e!=null&&(e=""+Oe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Oe(n):""}function as(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(s(92));if(be(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=Oe(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),Ru(t)}function zl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function is(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||hg.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function us(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&is(t,a,l)}else for(var i in e)e.hasOwnProperty(i)&&is(t,i,e[i])}function Uu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(t){return bg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tn(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ml=null,_l=null;function cs(t){var e=Sn(t);if(e&&(t=e.stateNode)){var n=t[ae]||null;t:switch(t=e.stateNode,e.type){case"input":if(Cu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[ae]||null;if(!a)throw Error(s(90));Cu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&es(l)}break t;case"textarea":ls(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Tl(t,!!n.multiple,e,!1)}}}var wu=!1;function os(t,e,n){if(wu)return t(e,n);wu=!0;try{var l=t(e);return l}finally{if(wu=!1,(Ml!==null||_l!==null)&&(eu(),Ml&&(e=Ml,t=_l,_l=Ml=null,cs(e),t)))for(e=0;e<t.length;e++)cs(t[e])}}function va(t,e){var n=t.stateNode;if(n===null)return null;var l=n[ae]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(en)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Nu=!1}var An=null,qu=null,pi=null;function ss(){if(pi)return pi;var t,e=qu,n=e.length,l,a="value"in An?An.value:An.textContent,i=a.length;for(t=0;t<n&&e[t]===a[t];t++);var u=n-t;for(l=1;l<=u&&e[n-l]===a[i-l];l++);return pi=a.slice(t,1<l?1-l:void 0)}function hi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vi(){return!0}function fs(){return!1}function de(t){function e(n,l,a,i,u){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:fs,this.isPropagationStopped=fs,this}return C(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),e}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=de($n),ya=C({},$n,{view:0,detail:0}),yg=de(ya),Lu,Yu,xa,yi=C({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(Lu=t.screenX-xa.screenX,Yu=t.screenY-xa.screenY):Yu=Lu=0,xa=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),rs=de(yi),xg=C({},yi,{dataTransfer:0}),Sg=de(xg),Ag=C({},ya,{relatedTarget:0}),ku=de(Ag),jg=C({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=de(jg),Tg=C({},$n,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=de(Tg),Mg=C({},$n,{data:0}),ds=de(Mg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Og[t])?!!e[t]:!1}function Qu(){return Rg}var Cg=C({},ya,{key:function(t){if(t.key){var e=_g[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bg=de(Cg),Ug=C({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=de(Ug),Hg=C({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),Gg=de(Hg),wg=C({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=de(wg),qg=C({},yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=de(qg),Yg=C({},$n,{newState:0,oldState:0}),kg=de(Yg),Qg=[9,13,27,32],Xu=en&&"CompositionEvent"in window,Sa=null;en&&"documentMode"in document&&(Sa=document.documentMode);var Xg=en&&"TextEvent"in window&&!Sa,ms=en&&(!Xu||Sa&&8<Sa&&11>=Sa),ps=" ",hs=!1;function vs(t,e){switch(t){case"keyup":return Qg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dl=!1;function Vg(t,e){switch(t){case"compositionend":return bs(e);case"keypress":return e.which!==32?null:(hs=!0,ps);case"textInput":return t=e.data,t===ps&&hs?null:t;default:return null}}function Zg(t,e){if(Dl)return t==="compositionend"||!Xu&&vs(t,e)?(t=ss(),pi=qu=An=null,Dl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ms&&e.locale!=="ko"?null:e.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ys(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kg[t.type]:e==="textarea"}function xs(t,e,n,l){Ml?_l?_l.push(l):_l=[l]:Ml=l,e=ou(e,"onChange"),0<e.length&&(n=new bi("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var Aa=null,ja=null;function Jg(t){ld(t,0)}function xi(t){var e=ha(t);if(es(e))return t}function Ss(t,e){if(t==="change")return e}var As=!1;if(en){var Vu;if(en){var Zu="oninput"in document;if(!Zu){var js=document.createElement("div");js.setAttribute("oninput","return;"),Zu=typeof js.oninput=="function"}Vu=Zu}else Vu=!1;As=Vu&&(!document.documentMode||9<document.documentMode)}function Es(){Aa&&(Aa.detachEvent("onpropertychange",Ts),ja=Aa=null)}function Ts(t){if(t.propertyName==="value"&&xi(ja)){var e=[];xs(e,ja,t,Gu(t)),os(Jg,e)}}function Wg(t,e,n){t==="focusin"?(Es(),Aa=e,ja=n,Aa.attachEvent("onpropertychange",Ts)):t==="focusout"&&Es()}function Ig(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xi(ja)}function Fg(t,e){if(t==="click")return xi(e)}function $g(t,e){if(t==="input"||t==="change")return xi(e)}function Pg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xe=typeof Object.is=="function"?Object.is:Pg;function Ea(t,e){if(xe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!hl.call(e,a)||!xe(t[a],e[a]))return!1}return!0}function zs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ms(t,e){var n=zs(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=zs(n)}}function _s(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_s(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ds(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=gi(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gi(t.document)}return e}function Ku(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var t0=en&&"documentMode"in document&&11>=document.documentMode,Ol=null,Ju=null,Ta=null,Wu=!1;function Os(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||Ol==null||Ol!==gi(l)||(l=Ol,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ta&&Ea(Ta,l)||(Ta=l,l=ou(Ju,"onSelect"),0<l.length&&(e=new bi("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=Ol)))}function Pn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rl={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionrun:Pn("Transition","TransitionRun"),transitionstart:Pn("Transition","TransitionStart"),transitioncancel:Pn("Transition","TransitionCancel"),transitionend:Pn("Transition","TransitionEnd")},Iu={},Rs={};en&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function tl(t){if(Iu[t])return Iu[t];if(!Rl[t])return t;var e=Rl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rs)return Iu[t]=e[n];return t}var Cs=tl("animationend"),Bs=tl("animationiteration"),Us=tl("animationstart"),e0=tl("transitionrun"),n0=tl("transitionstart"),l0=tl("transitioncancel"),Hs=tl("transitionend"),Gs=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function ke(t,e){Gs.set(t,e),Fn(e,[t])}var Si=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ce=[],Cl=0,$u=0;function Ai(){for(var t=Cl,e=$u=Cl=0;e<t;){var n=Ce[e];Ce[e++]=null;var l=Ce[e];Ce[e++]=null;var a=Ce[e];Ce[e++]=null;var i=Ce[e];if(Ce[e++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&ws(n,a,i)}}function ji(t,e,n,l){Ce[Cl++]=t,Ce[Cl++]=e,Ce[Cl++]=n,Ce[Cl++]=l,$u|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Pu(t,e,n,l){return ji(t,e,n,l),Ei(t)}function el(t,e){return ji(t,null,null,e),Ei(t)}function ws(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=t.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&e!==null&&(a=31-ee(n),t=i.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),i):null}function Ei(t){if(50<Ka)throw Ka=0,oo=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Bl={};function a0(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(t,e,n,l){return new a0(t,e,n,l)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nn(t,e){var n=t.alternate;return n===null?(n=Se(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Ns(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ti(t,e,n,l,a,i){var u=0;if(l=t,typeof t=="function")tc(t)&&(u=1);else if(typeof t=="string")u=sm(t,n,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Jt:return t=Se(31,n,e,a),t.elementType=Jt,t.lanes=i,t;case et:return nl(n.children,a,i,e);case ut:u=8,a|=24;break;case O:return t=Se(12,n,e,a|2),t.elementType=O,t.lanes=i,t;case pt:return t=Se(13,n,e,a),t.elementType=pt,t.lanes=i,t;case At:return t=Se(19,n,e,a),t.elementType=At,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:u=10;break t;case Y:u=9;break t;case L:u=11;break t;case w:u=14;break t;case Rt:u=16,l=null;break t}u=29,n=Error(s(130,t===null?"null":typeof t,"")),l=null}return e=Se(u,n,e,a),e.elementType=t,e.type=l,e.lanes=i,e}function nl(t,e,n,l){return t=Se(7,t,l,e),t.lanes=n,t}function ec(t,e,n){return t=Se(6,t,null,e),t.lanes=n,t}function qs(t){var e=Se(18,null,null,0);return e.stateNode=t,e}function nc(t,e,n){return e=Se(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ls=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var n=Ls.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ua(e)},Ls.set(t,e),e)}return{value:t,source:e,stack:ua(e)}}var Ul=[],Hl=0,zi=null,za=0,Ue=[],He=0,jn=null,Ke=1,Je="";function ln(t,e){Ul[Hl++]=za,Ul[Hl++]=zi,zi=t,za=e}function Ys(t,e,n){Ue[He++]=Ke,Ue[He++]=Je,Ue[He++]=jn,jn=t;var l=Ke;t=Je;var a=32-ee(l)-1;l&=~(1<<a),n+=1;var i=32-ee(e)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,Ke=1<<32-ee(e)+a|n<<a|l,Je=i+t}else Ke=1<<i|n<<a|l,Je=t}function lc(t){t.return!==null&&(ln(t,1),Ys(t,1,0))}function ac(t){for(;t===zi;)zi=Ul[--Hl],Ul[Hl]=null,za=Ul[--Hl],Ul[Hl]=null;for(;t===jn;)jn=Ue[--He],Ue[He]=null,Je=Ue[--He],Ue[He]=null,Ke=Ue[--He],Ue[He]=null}function ks(t,e){Ue[He++]=Ke,Ue[He++]=Je,Ue[He++]=jn,Ke=e.id,Je=e.overflow,jn=t}var ie=null,Ct=null,mt=!1,En=null,Ge=!1,ic=Error(s(519));function Tn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ma(Be(e,t)),ic}function Qs(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[kt]=t,e[ae]=l,n){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(n=0;n<Wa.length;n++)ft(Wa[n],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),ns(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),as(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||cd(e.textContent,n)?(l.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),l.onScroll!=null&&ft("scroll",e),l.onScrollEnd!=null&&ft("scrollend",e),l.onClick!=null&&(e.onclick=tn),e=!0):e=!1,e||Tn(t,!0)}function Xs(t){for(ie=t.return;ie;)switch(ie.tag){case 5:case 31:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:ie=ie.return}}function Gl(t){if(t!==ie)return!1;if(!mt)return Xs(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Eo(t.type,t.memoizedProps)),n=!n),n&&Ct&&Tn(t),Xs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=hd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ct=hd(t)}else e===27?(e=Ct,qn(t.type)?(t=Do,Do=null,Ct=t):Ct=e):Ct=ie?Ne(t.stateNode.nextSibling):null;return!0}function ll(){Ct=ie=null,mt=!1}function uc(){var t=En;return t!==null&&(he===null?he=t:he.push.apply(he,t),En=null),t}function Ma(t){En===null?En=[t]:En.push(t)}var cc=g(null),al=null,an=null;function zn(t,e,n){N(cc,e._currentValue),e._currentValue=n}function un(t){t._currentValue=cc.current,_(cc)}function oc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function sc(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=a;for(var f=0;f<e.length;f++)if(c.context===e[f]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),oc(i.return,n,t),l||(u=null);break t}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),oc(u,n,t),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function wl(t,e,n,l){t=null;for(var a=e,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=a.type;xe(a.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(a===ht.current){if(u=a.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ti):t=[ti])}a=a.return}t!==null&&sc(e,t,n,l),e.flags|=262144}function Mi(t){for(t=t.firstContext;t!==null;){if(!xe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function il(t){al=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ue(t){return Vs(al,t)}function _i(t,e){return al===null&&il(t),Vs(t,e)}function Vs(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(s(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var i0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},u0=r.unstable_scheduleCallback,c0=r.unstable_NormalPriority,Xt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new i0,data:new Map,refCount:0}}function _a(t){t.refCount--,t.refCount===0&&u0(c0,function(){t.controller.abort()})}var Da=null,rc=0,Nl=0,ql=null;function o0(t,e){if(Da===null){var n=Da=[];rc=0,Nl=po(),ql={status:"pending",value:void 0,then:function(l){n.push(l)}}}return rc++,e.then(Zs,Zs),e}function Zs(){if(--rc===0&&Da!==null){ql!==null&&(ql.status="fulfilled");var t=Da;Da=null,Nl=0,ql=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function s0(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Ks=j.S;j.S=function(t,e){Rr=Yt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&o0(t,e),Ks!==null&&Ks(t,e)};var ul=g(null);function dc(){var t=ul.current;return t!==null?t:Ot.pooledCache}function Di(t,e){e===null?N(ul,ul.current):N(ul,e.pool)}function Js(){var t=dc();return t===null?null:{parent:Xt._currentValue,pool:t}}var Ll=Error(s(460)),gc=Error(s(474)),Oi=Error(s(542)),Ri={then:function(){}};function Ws(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Is(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(tn,tn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$s(t),t;default:if(typeof e.status=="string")e.then(tn,tn);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$s(t),t}throw ol=e,Ll}}function cl(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ol=n,Ll):n}}var ol=null;function Fs(){if(ol===null)throw Error(s(459));var t=ol;return ol=null,t}function $s(t){if(t===Ll||t===Oi)throw Error(s(483))}var Yl=null,Oa=0;function Ci(t){var e=Oa;return Oa+=1,Yl===null&&(Yl=[]),Is(Yl,t,e)}function Ra(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bi(t,e){throw e.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ps(t){function e(m,d){if(t){var v=m.deletions;v===null?(m.deletions=[d],m.flags|=16):v.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function l(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function a(m,d){return m=nn(m,d),m.index=0,m.sibling=null,m}function i(m,d,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<d?(m.flags|=67108866,d):v):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,d,v,z){return d===null||d.tag!==6?(d=ec(v,m.mode,z),d.return=m,d):(d=a(d,v),d.return=m,d)}function f(m,d,v,z){var K=v.type;return K===et?T(m,d,v.props.children,z,v.key):d!==null&&(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Rt&&cl(K)===d.type)?(d=a(d,v.props),Ra(d,v),d.return=m,d):(d=Ti(v.type,v.key,v.props,null,m.mode,z),Ra(d,v),d.return=m,d)}function b(m,d,v,z){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=nc(v,m.mode,z),d.return=m,d):(d=a(d,v.children||[]),d.return=m,d)}function T(m,d,v,z,K){return d===null||d.tag!==7?(d=nl(v,m.mode,z,K),d.return=m,d):(d=a(d,v),d.return=m,d)}function M(m,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=ec(""+d,m.mode,v),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case J:return v=Ti(d.type,d.key,d.props,null,m.mode,v),Ra(v,d),v.return=m,v;case bt:return d=nc(d,m.mode,v),d.return=m,d;case Rt:return d=cl(d),M(m,d,v)}if(be(d)||Ut(d))return d=nl(d,m.mode,v,null),d.return=m,d;if(typeof d.then=="function")return M(m,Ci(d),v);if(d.$$typeof===Z)return M(m,_i(m,d),v);Bi(m,d)}return null}function y(m,d,v,z){var K=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return K!==null?null:c(m,d,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return v.key===K?f(m,d,v,z):null;case bt:return v.key===K?b(m,d,v,z):null;case Rt:return v=cl(v),y(m,d,v,z)}if(be(v)||Ut(v))return K!==null?null:T(m,d,v,z,null);if(typeof v.then=="function")return y(m,d,Ci(v),z);if(v.$$typeof===Z)return y(m,d,_i(m,v),z);Bi(m,v)}return null}function S(m,d,v,z,K){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(v)||null,c(d,m,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case J:return m=m.get(z.key===null?v:z.key)||null,f(d,m,z,K);case bt:return m=m.get(z.key===null?v:z.key)||null,b(d,m,z,K);case Rt:return z=cl(z),S(m,d,v,z,K)}if(be(z)||Ut(z))return m=m.get(v)||null,T(d,m,z,K,null);if(typeof z.then=="function")return S(m,d,v,Ci(z),K);if(z.$$typeof===Z)return S(m,d,v,_i(d,z),K);Bi(d,z)}return null}function Q(m,d,v,z){for(var K=null,yt=null,X=d,lt=d=0,dt=null;X!==null&&lt<v.length;lt++){X.index>lt?(dt=X,X=null):dt=X.sibling;var xt=y(m,X,v[lt],z);if(xt===null){X===null&&(X=dt);break}t&&X&&xt.alternate===null&&e(m,X),d=i(xt,d,lt),yt===null?K=xt:yt.sibling=xt,yt=xt,X=dt}if(lt===v.length)return n(m,X),mt&&ln(m,lt),K;if(X===null){for(;lt<v.length;lt++)X=M(m,v[lt],z),X!==null&&(d=i(X,d,lt),yt===null?K=X:yt.sibling=X,yt=X);return mt&&ln(m,lt),K}for(X=l(X);lt<v.length;lt++)dt=S(X,m,lt,v[lt],z),dt!==null&&(t&&dt.alternate!==null&&X.delete(dt.key===null?lt:dt.key),d=i(dt,d,lt),yt===null?K=dt:yt.sibling=dt,yt=dt);return t&&X.forEach(function(Xn){return e(m,Xn)}),mt&&ln(m,lt),K}function I(m,d,v,z){if(v==null)throw Error(s(151));for(var K=null,yt=null,X=d,lt=d=0,dt=null,xt=v.next();X!==null&&!xt.done;lt++,xt=v.next()){X.index>lt?(dt=X,X=null):dt=X.sibling;var Xn=y(m,X,xt.value,z);if(Xn===null){X===null&&(X=dt);break}t&&X&&Xn.alternate===null&&e(m,X),d=i(Xn,d,lt),yt===null?K=Xn:yt.sibling=Xn,yt=Xn,X=dt}if(xt.done)return n(m,X),mt&&ln(m,lt),K;if(X===null){for(;!xt.done;lt++,xt=v.next())xt=M(m,xt.value,z),xt!==null&&(d=i(xt,d,lt),yt===null?K=xt:yt.sibling=xt,yt=xt);return mt&&ln(m,lt),K}for(X=l(X);!xt.done;lt++,xt=v.next())xt=S(X,m,lt,xt.value,z),xt!==null&&(t&&xt.alternate!==null&&X.delete(xt.key===null?lt:xt.key),d=i(xt,d,lt),yt===null?K=xt:yt.sibling=xt,yt=xt);return t&&X.forEach(function(xm){return e(m,xm)}),mt&&ln(m,lt),K}function Dt(m,d,v,z){if(typeof v=="object"&&v!==null&&v.type===et&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case J:t:{for(var K=v.key;d!==null;){if(d.key===K){if(K=v.type,K===et){if(d.tag===7){n(m,d.sibling),z=a(d,v.props.children),z.return=m,m=z;break t}}else if(d.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Rt&&cl(K)===d.type){n(m,d.sibling),z=a(d,v.props),Ra(z,v),z.return=m,m=z;break t}n(m,d);break}else e(m,d);d=d.sibling}v.type===et?(z=nl(v.props.children,m.mode,z,v.key),z.return=m,m=z):(z=Ti(v.type,v.key,v.props,null,m.mode,z),Ra(z,v),z.return=m,m=z)}return u(m);case bt:t:{for(K=v.key;d!==null;){if(d.key===K)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(m,d.sibling),z=a(d,v.children||[]),z.return=m,m=z;break t}else{n(m,d);break}else e(m,d);d=d.sibling}z=nc(v,m.mode,z),z.return=m,m=z}return u(m);case Rt:return v=cl(v),Dt(m,d,v,z)}if(be(v))return Q(m,d,v,z);if(Ut(v)){if(K=Ut(v),typeof K!="function")throw Error(s(150));return v=K.call(v),I(m,d,v,z)}if(typeof v.then=="function")return Dt(m,d,Ci(v),z);if(v.$$typeof===Z)return Dt(m,d,_i(m,v),z);Bi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(n(m,d.sibling),z=a(d,v),z.return=m,m=z):(n(m,d),z=ec(v,m.mode,z),z.return=m,m=z),u(m)):n(m,d)}return function(m,d,v,z){try{Oa=0;var K=Dt(m,d,v,z);return Yl=null,K}catch(X){if(X===Ll||X===Oi)throw X;var yt=Se(29,X,null,m.mode);return yt.lanes=z,yt.return=m,yt}finally{}}}var sl=Ps(!0),tf=Ps(!1),Mn=!1;function mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _n(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Ei(t),ws(t,null,n),e}return ji(t,l,e,n),Ei(t)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,da(t,n)}}function hc(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?a=i=e:i=i.next=e}else a=i=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var vc=!1;function Ba(){if(vc){var t=ql;if(t!==null)throw t}}function Ua(t,e,n,l){vc=!1;var a=t.updateQueue;Mn=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,b=f.next;f.next=null,u===null?i=b:u.next=b,u=f;var T=t.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==u&&(c===null?T.firstBaseUpdate=b:c.next=b,T.lastBaseUpdate=f))}if(i!==null){var M=a.baseState;u=0,T=b=f=null,c=i;do{var y=c.lane&-536870913,S=y!==c.lane;if(S?(rt&y)===y:(l&y)===y){y!==0&&y===Nl&&(vc=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var Q=t,I=c;y=e;var Dt=n;switch(I.tag){case 1:if(Q=I.payload,typeof Q=="function"){M=Q.call(Dt,M,y);break t}M=Q;break t;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=I.payload,y=typeof Q=="function"?Q.call(Dt,M,y):Q,y==null)break t;M=C({},M,y);break t;case 2:Mn=!0}}y=c.callback,y!==null&&(t.flags|=64,S&&(t.flags|=8192),S=a.callbacks,S===null?a.callbacks=[y]:S.push(y))}else S={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(b=T=S,f=M):T=T.next=S,u|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;S=c,c=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);T===null&&(f=M),a.baseState=f,a.firstBaseUpdate=b,a.lastBaseUpdate=T,i===null&&(a.shared.lanes=0),Un|=u,t.lanes=u,t.memoizedState=M}}function ef(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function nf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)ef(n[t],e)}var kl=g(null),Ui=g(0);function lf(t,e){t=pn,N(Ui,t),N(kl,e),pn=t|e.baseLanes}function bc(){N(Ui,pn),N(kl,kl.current)}function yc(){pn=Ui.current,_(kl),_(Ui)}var Ae=g(null),we=null;function On(t){var e=t.alternate;N(qt,qt.current&1),N(Ae,t),we===null&&(e===null||kl.current!==null||e.memoizedState!==null)&&(we=t)}function xc(t){N(qt,qt.current),N(Ae,t),we===null&&(we=t)}function af(t){t.tag===22?(N(qt,qt.current),N(Ae,t),we===null&&(we=t)):Rn()}function Rn(){N(qt,qt.current),N(Ae,Ae.current)}function je(t){_(Ae),we===t&&(we=null),_(qt)}var qt=g(0);function Hi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mo(n)||_o(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cn=0,nt=null,Mt=null,Vt=null,Gi=!1,Ql=!1,fl=!1,wi=0,Ha=0,Xl=null,f0=0;function wt(){throw Error(s(321))}function Sc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xe(t[n],e[n]))return!1;return!0}function Ac(t,e,n,l,a,i){return cn=i,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?kf:wc,fl=!1,i=n(l,a),fl=!1,Ql&&(i=cf(e,n,l,a)),uf(t),i}function uf(t){j.H=Na;var e=Mt!==null&&Mt.next!==null;if(cn=0,Vt=Mt=nt=null,Gi=!1,Ha=0,Xl=null,e)throw Error(s(300));t===null||Zt||(t=t.dependencies,t!==null&&Mi(t)&&(Zt=!0))}function cf(t,e,n,l){nt=t;var a=0;do{if(Ql&&(Xl=null),Ha=0,Ql=!1,25<=a)throw Error(s(301));if(a+=1,Vt=Mt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}j.H=Qf,i=e(n,l)}while(Ql);return i}function r0(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Ga(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(nt.flags|=1024),e}function jc(){var t=wi!==0;return wi=0,t}function Ec(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Tc(t){if(Gi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Gi=!1}cn=0,Vt=Mt=nt=null,Ql=!1,Ha=wi=0,Xl=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?nt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Lt(){if(Mt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Vt===null?nt.memoizedState:Vt.next;if(e!==null)Vt=e,Mt=t;else{if(t===null)throw nt.alternate===null?Error(s(467)):Error(s(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Vt===null?nt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ga(t){var e=Ha;return Ha+=1,Xl===null&&(Xl=[]),t=Is(Xl,t,e),e=nt,(Vt===null?e.memoizedState:Vt.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?kf:wc),t}function qi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ga(t);if(t.$$typeof===Z)return ue(t)}throw Error(s(438,String(t)))}function zc(t){var e=null,n=nt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ni(),nt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=zt;return e.index++,n}function on(t,e){return typeof e=="function"?e(t):e}function Li(t){var e=Lt();return Mc(e,Mt,t)}function Mc(t,e,n){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=t.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}e.baseQueue=a=i,l.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{e=a.next;var c=u=null,f=null,b=e,T=!1;do{var M=b.lane&-536870913;if(M!==b.lane?(rt&M)===M:(cn&M)===M){var y=b.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),M===Nl&&(T=!0);else if((cn&y)===y){b=b.next,y===Nl&&(T=!0);continue}else M={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=M,u=i):f=f.next=M,nt.lanes|=y,Un|=y;M=b.action,fl&&n(i,M),i=b.hasEagerState?b.eagerState:n(i,M)}else y={lane:M,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=y,u=i):f=f.next=y,nt.lanes|=M,Un|=M;b=b.next}while(b!==null&&b!==e);if(f===null?u=i:f.next=c,!xe(i,t.memoizedState)&&(Zt=!0,T&&(n=ql,n!==null)))throw n;t.memoizedState=i,t.baseState=u,t.baseQueue=f,l.lastRenderedState=i}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function _c(t){var e=Lt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,i=e.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do i=t(i,u.action),u=u.next;while(u!==a);xe(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,l]}function of(t,e,n){var l=nt,a=Lt(),i=mt;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=e();var u=!xe((Mt||a).memoizedState,n);if(u&&(a.memoizedState=n,Zt=!0),a=a.queue,Rc(rf.bind(null,l,a,t),[t]),a.getSnapshot!==e||u||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,Vl(9,{destroy:void 0},ff.bind(null,l,a,n,e),null),Ot===null)throw Error(s(349));i||(cn&127)!==0||sf(l,e,n)}return n}function sf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nt.updateQueue,e===null?(e=Ni(),nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ff(t,e,n,l){e.value=n,e.getSnapshot=l,df(e)&&gf(t)}function rf(t,e,n){return n(function(){df(e)&&gf(t)})}function df(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xe(t,n)}catch{return!0}}function gf(t){var e=el(t,2);e!==null&&ve(e,t,2)}function Dc(t){var e=fe();if(typeof t=="function"){var n=t;if(t=n(),fl){ye(!0);try{n()}finally{ye(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:t},e}function mf(t,e,n,l){return t.baseState=n,Mc(t,Mt,typeof l=="function"?l:on)}function d0(t,e,n,l,a){if(Qi(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};j.T!==null?n(!0):i.isTransition=!1,l(i),n=e.pending,n===null?(i.next=e.pending=i,pf(e,i)):(i.next=n.next,e.pending=n.next=i)}}function pf(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var i=j.T,u={};j.T=u;try{var c=n(a,l),f=j.S;f!==null&&f(u,c),hf(t,e,c)}catch(b){Oc(t,e,b)}finally{i!==null&&u.types!==null&&(i.types=u.types),j.T=i}}else try{i=n(a,l),hf(t,e,i)}catch(b){Oc(t,e,b)}}function hf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){vf(t,e,l)},function(l){return Oc(t,e,l)}):vf(t,e,n)}function vf(t,e,n){e.status="fulfilled",e.value=n,bf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,pf(t,n)))}function Oc(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,bf(e),e=e.next;while(e!==l)}t.action=null}function bf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function yf(t,e){return e}function xf(t,e){if(mt){var n=Ot.formState;if(n!==null){t:{var l=nt;if(mt){if(Ct){e:{for(var a=Ct,i=Ge;a.nodeType!==8;){if(!i){a=null;break e}if(a=Ne(a.nextSibling),a===null){a=null;break e}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ct=Ne(a.nextSibling),l=a.data==="F!";break t}}Tn(l)}l=!1}l&&(e=n[0])}}return n=fe(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:e},n.queue=l,n=qf.bind(null,nt,l),l.dispatch=n,l=Dc(!1),i=Gc.bind(null,nt,!1,l.queue),l=fe(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=d0.bind(null,nt,a,i,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function Sf(t){var e=Lt();return Af(e,Mt,t)}function Af(t,e,n){if(e=Mc(t,e,yf)[0],t=Li(on)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Ga(e)}catch(u){throw u===Ll?Oi:u}else l=e;e=Lt();var a=e.queue,i=a.dispatch;return n!==e.memoizedState&&(nt.flags|=2048,Vl(9,{destroy:void 0},g0.bind(null,a,n),null)),[l,i,t]}function g0(t,e){t.action=e}function jf(t){var e=Lt(),n=Mt;if(n!==null)return Af(e,n,t);Lt(),e=e.memoizedState,n=Lt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Vl(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=nt.updateQueue,e===null&&(e=Ni(),nt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function Ef(){return Lt().memoizedState}function Yi(t,e,n,l){var a=fe();nt.flags|=t,a.memoizedState=Vl(1|e,{destroy:void 0},n,l===void 0?null:l)}function ki(t,e,n,l){var a=Lt();l=l===void 0?null:l;var i=a.memoizedState.inst;Mt!==null&&l!==null&&Sc(l,Mt.memoizedState.deps)?a.memoizedState=Vl(e,i,n,l):(nt.flags|=t,a.memoizedState=Vl(1|e,i,n,l))}function Tf(t,e){Yi(8390656,8,t,e)}function Rc(t,e){ki(2048,8,t,e)}function m0(t){nt.flags|=4;var e=nt.updateQueue;if(e===null)e=Ni(),nt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function zf(t){var e=Lt().memoizedState;return m0({ref:e,nextImpl:t}),function(){if((St&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Mf(t,e){return ki(4,2,t,e)}function _f(t,e){return ki(4,4,t,e)}function Df(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Of(t,e,n){n=n!=null?n.concat([t]):null,ki(4,4,Df.bind(null,e,t),n)}function Cc(){}function Rf(t,e){var n=Lt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&Sc(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function Cf(t,e){var n=Lt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&Sc(e,l[1]))return l[0];if(l=t(),fl){ye(!0);try{t()}finally{ye(!1)}}return n.memoizedState=[l,e],l}function Bc(t,e,n){return n===void 0||(cn&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Br(),nt.lanes|=t,Un|=t,n)}function Bf(t,e,n,l){return xe(n,e)?n:kl.current!==null?(t=Bc(t,n,l),xe(t,e)||(Zt=!0),t):(cn&42)===0||(cn&1073741824)!==0&&(rt&261930)===0?(Zt=!0,t.memoizedState=n):(t=Br(),nt.lanes|=t,Un|=t,e)}function Uf(t,e,n,l,a){var i=U.p;U.p=i!==0&&8>i?i:8;var u=j.T,c={};j.T=c,Gc(t,!1,e,n);try{var f=a(),b=j.S;if(b!==null&&b(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var T=s0(f,l);wa(t,e,T,ze(t))}else wa(t,e,l,ze(t))}catch(M){wa(t,e,{then:function(){},status:"rejected",reason:M},ze())}finally{U.p=i,u!==null&&c.types!==null&&(u.types=c.types),j.T=u}}function p0(){}function Uc(t,e,n,l){if(t.tag!==5)throw Error(s(476));var a=Hf(t).queue;Uf(t,a,e,W,n===null?p0:function(){return Gf(t),n(l)})}function Hf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:W},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Gf(t){var e=Hf(t);e.next===null&&(e=t.alternate.memoizedState),wa(t,e.next.queue,{},ze())}function Hc(){return ue(ti)}function wf(){return Lt().memoizedState}function Nf(){return Lt().memoizedState}function h0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ze();t=_n(n);var l=Dn(e,t,n);l!==null&&(ve(l,e,n),Ca(l,e,n)),e={cache:fc()},t.payload=e;return}e=e.return}}function v0(t,e,n){var l=ze();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(t)?Lf(e,n):(n=Pu(t,e,n,l),n!==null&&(ve(n,t,l),Yf(n,e,l)))}function qf(t,e,n){var l=ze();wa(t,e,n,l)}function wa(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(t))Lf(e,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,n);if(a.hasEagerState=!0,a.eagerState=c,xe(c,u))return ji(t,e,a,0),Ot===null&&Ai(),!1}catch{}finally{}if(n=Pu(t,e,a,l),n!==null)return ve(n,t,l),Yf(n,e,l),!0}return!1}function Gc(t,e,n,l){if(l={lane:2,revertLane:po(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qi(t)){if(e)throw Error(s(479))}else e=Pu(t,n,l,2),e!==null&&ve(e,t,2)}function Qi(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function Lf(t,e){Ql=Gi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yf(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,da(t,n)}}var Na={readContext:ue,use:qi,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Na.useEffectEvent=wt;var kf={readContext:ue,use:qi,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:ue,useEffect:Tf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Yi(4194308,4,Df.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yi(4194308,4,t,e)},useInsertionEffect:function(t,e){Yi(4,2,t,e)},useMemo:function(t,e){var n=fe();e=e===void 0?null:e;var l=t();if(fl){ye(!0);try{t()}finally{ye(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=fe();if(n!==void 0){var a=n(e);if(fl){ye(!0);try{n(e)}finally{ye(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=v0.bind(null,nt,t),[l.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=Dc(t);var e=t.queue,n=qf.bind(null,nt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Cc,useDeferredValue:function(t,e){var n=fe();return Bc(n,t,e)},useTransition:function(){var t=Dc(!1);return t=Uf.bind(null,nt,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=nt,a=fe();if(mt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Ot===null)throw Error(s(349));(rt&127)!==0||sf(l,e,n)}a.memoizedState=n;var i={value:n,getSnapshot:e};return a.queue=i,Tf(rf.bind(null,l,i,t),[t]),l.flags|=2048,Vl(9,{destroy:void 0},ff.bind(null,l,i,n,e),null),n},useId:function(){var t=fe(),e=Ot.identifierPrefix;if(mt){var n=Je,l=Ke;n=(l&~(1<<32-ee(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=wi++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=f0++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Hc,useFormState:xf,useActionState:xf,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Gc.bind(null,nt,!0,n),n.dispatch=e,[t,e]},useMemoCache:zc,useCacheRefresh:function(){return fe().memoizedState=h0.bind(null,nt)},useEffectEvent:function(t){var e=fe(),n={impl:t};return e.memoizedState=n,function(){if((St&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},wc={readContext:ue,use:qi,useCallback:Rf,useContext:ue,useEffect:Rc,useImperativeHandle:Of,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Cf,useReducer:Li,useRef:Ef,useState:function(){return Li(on)},useDebugValue:Cc,useDeferredValue:function(t,e){var n=Lt();return Bf(n,Mt.memoizedState,t,e)},useTransition:function(){var t=Li(on)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ga(t),e]},useSyncExternalStore:of,useId:wf,useHostTransitionStatus:Hc,useFormState:Sf,useActionState:Sf,useOptimistic:function(t,e){var n=Lt();return mf(n,Mt,t,e)},useMemoCache:zc,useCacheRefresh:Nf};wc.useEffectEvent=zf;var Qf={readContext:ue,use:qi,useCallback:Rf,useContext:ue,useEffect:Rc,useImperativeHandle:Of,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Cf,useReducer:_c,useRef:Ef,useState:function(){return _c(on)},useDebugValue:Cc,useDeferredValue:function(t,e){var n=Lt();return Mt===null?Bc(n,t,e):Bf(n,Mt.memoizedState,t,e)},useTransition:function(){var t=_c(on)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ga(t),e]},useSyncExternalStore:of,useId:wf,useHostTransitionStatus:Hc,useFormState:jf,useActionState:jf,useOptimistic:function(t,e){var n=Lt();return Mt!==null?mf(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:zc,useCacheRefresh:Nf};Qf.useEffectEvent=zf;function Nc(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:C({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=ze(),a=_n(l);a.payload=e,n!=null&&(a.callback=n),e=Dn(t,a,l),e!==null&&(ve(e,t,l),Ca(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=ze(),a=_n(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Dn(t,a,l),e!==null&&(ve(e,t,l),Ca(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),l=_n(n);l.tag=2,e!=null&&(l.callback=e),e=Dn(t,l,n),e!==null&&(ve(e,t,n),Ca(e,t,n))}};function Xf(t,e,n,l,a,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,l)||!Ea(a,i):!0}function Vf(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function rl(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=C({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Zf(t){Si(t)}function Kf(t){console.error(t)}function Jf(t){Si(t)}function Xi(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Wf(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Lc(t,e,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Xi(t,e)},n}function If(t){return t=_n(t),t.tag=3,t}function Ff(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;t.payload=function(){return a(i)},t.callback=function(){Wf(e,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Wf(e,n,l),typeof a!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function b0(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&wl(e,n,a,!0),n=Ae.current,n!==null){switch(n.tag){case 31:case 13:return we===null?nu():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Ri?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),ro(t,l,a)),!1;case 22:return n.flags|=65536,l===Ri?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),ro(t,l,a)),!1}throw Error(s(435,n.tag))}return ro(t,l,a),nu(),!1}if(mt)return e=Ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==ic&&(t=Error(s(422),{cause:l}),Ma(Be(t,n)))):(l!==ic&&(e=Error(s(423),{cause:l}),Ma(Be(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Be(l,n),a=Lc(t.stateNode,l,a),hc(t,a),Nt!==4&&(Nt=2)),!1;var i=Error(s(520),{cause:l});if(i=Be(i,n),Za===null?Za=[i]:Za.push(i),Nt!==4&&(Nt=2),e===null)return!0;l=Be(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Lc(n.stateNode,l,t),hc(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Hn===null||!Hn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=If(a),Ff(a,t,n,l),hc(n,a),!1}n=n.return}while(n!==null);return!1}var Yc=Error(s(461)),Zt=!1;function ce(t,e,n,l){e.child=t===null?tf(e,null,n,l):sl(e,t.child,n,l)}function $f(t,e,n,l,a){n=n.render;var i=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return il(e),l=Ac(t,e,n,u,i,a),c=jc(),t!==null&&!Zt?(Ec(t,e,a),sn(t,e,a)):(mt&&c&&lc(e),e.flags|=1,ce(t,e,l,a),e.child)}function Pf(t,e,n,l,a){if(t===null){var i=n.type;return typeof i=="function"&&!tc(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,tr(t,e,i,l,a)):(t=Ti(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Wc(t,a)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(u,l)&&t.ref===e.ref)return sn(t,e,a)}return e.flags|=1,t=nn(i,l),t.ref=e.ref,t.return=e,e.child=t}function tr(t,e,n,l,a){if(t!==null){var i=t.memoizedProps;if(Ea(i,l)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=l=i,Wc(t,a))(t.flags&131072)!==0&&(Zt=!0);else return e.lanes=t.lanes,sn(t,e,a)}return kc(t,e,n,l,a)}function er(t,e,n,l){var a=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,e.child=null;return nr(t,e,i,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Di(e,i!==null?i.cachePool:null),i!==null?lf(e,i):bc(),af(e);else return l=e.lanes=536870912,nr(t,e,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Di(e,i.cachePool),lf(e,i),Rn(),e.memoizedState=null):(t!==null&&Di(e,null),bc(),Rn());return ce(t,e,a,n),e.child}function qa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function nr(t,e,n,l,a){var i=dc();return i=i===null?null:{parent:Xt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&Di(e,null),bc(),af(e),t!==null&&wl(t,e,l,!0),e.childLanes=a,null}function Vi(t,e){return e=Ki({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function lr(t,e,n){return sl(e,t.child,null,n),t=Vi(e,e.pendingProps),t.flags|=2,je(e),e.memoizedState=null,t}function y0(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(mt){if(l.mode==="hidden")return t=Vi(e,l),e.lanes=536870912,qa(null,t);if(xc(e),(t=Ct)?(t=pd(t,Ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:jn!==null?{id:Ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=qs(t),n.return=e,e.child=n,ie=e,Ct=null)):t=null,t===null)throw Tn(e);return e.lanes=536870912,null}return Vi(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(xc(e),a)if(e.flags&256)e.flags&=-257,e=lr(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Zt||wl(t,e,n,!1),a=(n&t.childLanes)!==0,Zt||a){if(l=Ot,l!==null&&(u=ga(l,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,el(t,u),ve(l,t,u),Yc;nu(),e=lr(t,e,n)}else t=i.treeContext,Ct=Ne(u.nextSibling),ie=e,mt=!0,En=null,Ge=!1,t!==null&&ks(e,t),e=Vi(e,l),e.flags|=4096;return e}return t=nn(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Zi(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function kc(t,e,n,l,a){return il(e),n=Ac(t,e,n,l,void 0,a),l=jc(),t!==null&&!Zt?(Ec(t,e,a),sn(t,e,a)):(mt&&l&&lc(e),e.flags|=1,ce(t,e,n,a),e.child)}function ar(t,e,n,l,a,i){return il(e),e.updateQueue=null,n=cf(e,l,n,a),uf(t),l=jc(),t!==null&&!Zt?(Ec(t,e,i),sn(t,e,i)):(mt&&l&&lc(e),e.flags|=1,ce(t,e,n,i),e.child)}function ir(t,e,n,l,a){if(il(e),e.stateNode===null){var i=Bl,u=n.contextType;typeof u=="object"&&u!==null&&(i=ue(u)),i=new n(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},mc(e),u=n.contextType,i.context=typeof u=="object"&&u!==null?ue(u):Bl,i.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Nc(e,n,u,l),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&qc.enqueueReplaceState(i,i.state,null),Ua(e,l,i,a),Ba(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,f=rl(n,c);i.props=f;var b=i.context,T=n.contextType;u=Bl,typeof T=="object"&&T!==null&&(u=ue(T));var M=n.getDerivedStateFromProps;T=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||b!==u)&&Vf(e,i,l,u),Mn=!1;var y=e.memoizedState;i.state=y,Ua(e,l,i,a),Ba(),b=e.memoizedState,c||y!==b||Mn?(typeof M=="function"&&(Nc(e,n,M,l),b=e.memoizedState),(f=Mn||Xf(e,n,f,l,y,b,u))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,pc(t,e),u=e.memoizedProps,T=rl(n,u),i.props=T,M=e.pendingProps,y=i.context,b=n.contextType,f=Bl,typeof b=="object"&&b!==null&&(f=ue(b)),c=n.getDerivedStateFromProps,(b=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==M||y!==f)&&Vf(e,i,l,f),Mn=!1,y=e.memoizedState,i.state=y,Ua(e,l,i,a),Ba();var S=e.memoizedState;u!==M||y!==S||Mn||t!==null&&t.dependencies!==null&&Mi(t.dependencies)?(typeof c=="function"&&(Nc(e,n,c,l),S=e.memoizedState),(T=Mn||Xf(e,n,T,l,y,S,f)||t!==null&&t.dependencies!==null&&Mi(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=S),i.props=l,i.state=S,i.context=f,l=T):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Zi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=sl(e,t.child,null,a),e.child=sl(e,null,n,a)):ce(t,e,n,a),e.memoizedState=i.state,t=e.child):t=sn(t,e,a),t}function ur(t,e,n,l){return ll(),e.flags|=256,ce(t,e,n,l),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(t){return{baseLanes:t,cachePool:Js()}}function Vc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Te),t}function cr(t,e,n){var l=e.pendingProps,a=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),u&&(a=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(a?On(e):Rn(),(t=Ct)?(t=pd(t,Ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:jn!==null?{id:Ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=qs(t),n.return=e,e.child=n,ie=e,Ct=null)):t=null,t===null)throw Tn(e);return _o(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(Rn(),a=e.mode,c=Ki({mode:"hidden",children:c},a),l=nl(l,a,n,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=Xc(n),l.childLanes=Vc(t,u,n),e.memoizedState=Qc,qa(null,l)):(On(e),Zc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)e.flags&256?(On(e),e.flags&=-257,e=Kc(t,e,n)):e.memoizedState!==null?(Rn(),e.child=t.child,e.flags|=128,e=null):(Rn(),c=l.fallback,a=e.mode,l=Ki({mode:"visible",children:l.children},a),c=nl(c,a,n,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,sl(e,t.child,null,n),l=e.child,l.memoizedState=Xc(n),l.childLanes=Vc(t,u,n),e.memoizedState=Qc,e=qa(null,l));else if(On(e),_o(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var b=u.dgst;u=b,l=Error(s(419)),l.stack="",l.digest=u,Ma({value:l,source:null,stack:null}),e=Kc(t,e,n)}else if(Zt||wl(t,e,n,!1),u=(n&t.childLanes)!==0,Zt||u){if(u=Ot,u!==null&&(l=ga(u,n),l!==0&&l!==f.retryLane))throw f.retryLane=l,el(t,l),ve(u,t,l),Yc;Mo(c)||nu(),e=Kc(t,e,n)}else Mo(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,Ct=Ne(c.nextSibling),ie=e,mt=!0,En=null,Ge=!1,t!==null&&ks(e,t),e=Zc(e,l.children),e.flags|=4096);return e}return a?(Rn(),c=l.fallback,a=e.mode,f=t.child,b=f.sibling,l=nn(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,b!==null?c=nn(b,c):(c=nl(c,a,n,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,qa(null,l),l=e.child,c=t.child.memoizedState,c===null?c=Xc(n):(a=c.cachePool,a!==null?(f=Xt._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=Js(),c={baseLanes:c.baseLanes|n,cachePool:a}),l.memoizedState=c,l.childLanes=Vc(t,u,n),e.memoizedState=Qc,qa(t.child,l)):(On(e),n=t.child,t=n.sibling,n=nn(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=n,e.memoizedState=null,n)}function Zc(t,e){return e=Ki({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ki(t,e){return t=Se(22,t,null,e),t.lanes=0,t}function Kc(t,e,n){return sl(e,t.child,null,n),t=Zc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function or(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),oc(t.return,e,n)}function Jc(t,e,n,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a,u.treeForkCount=i)}function sr(t,e,n){var l=e.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=qt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,N(qt,u),ce(t,e,l,n),l=mt?za:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&or(t,n,e);else if(t.tag===19)or(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Hi(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Jc(e,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Hi(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Jc(e,!0,n,null,i,l);break;case"together":Jc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(wl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Mi(t)))}function x0(t,e,n){switch(e.tag){case 3:$t(e,e.stateNode.containerInfo),zn(e,Xt,t.memoizedState.cache),ll();break;case 27:case 5:Zn(e);break;case 4:$t(e,e.stateNode.containerInfo);break;case 10:zn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,xc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?cr(t,e,n):(On(e),t=sn(t,e,n),t!==null?t.sibling:null);On(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(wl(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return sr(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(qt,qt.current),l)break;return null;case 22:return e.lanes=0,er(t,e,n,e.pendingProps);case 24:zn(e,Xt,t.memoizedState.cache)}return sn(t,e,n)}function fr(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!Wc(t,n)&&(e.flags&128)===0)return Zt=!1,x0(t,e,n);Zt=(t.flags&131072)!==0}else Zt=!1,mt&&(e.flags&1048576)!==0&&Ys(e,za,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=cl(e.elementType),e.type=t,typeof t=="function")tc(t)?(l=rl(t,l),e.tag=1,e=ir(null,e,t,l,n)):(e.tag=0,e=kc(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===L){e.tag=11,e=$f(null,e,t,l,n);break t}else if(a===w){e.tag=14,e=Pf(null,e,t,l,n);break t}}throw e=ct(t)||t,Error(s(306,e,""))}}return e;case 0:return kc(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=rl(l,e.pendingProps),ir(t,e,l,a,n);case 3:t:{if($t(e,e.stateNode.containerInfo),t===null)throw Error(s(387));l=e.pendingProps;var i=e.memoizedState;a=i.element,pc(t,e),Ua(e,l,null,n);var u=e.memoizedState;if(l=u.cache,zn(e,Xt,l),l!==i.cache&&sc(e,[Xt],n,!0),Ba(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=ur(t,e,l,n);break t}else if(l!==a){a=Be(Error(s(424)),e),Ma(a),e=ur(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=Ne(t.firstChild),ie=e,mt=!0,En=null,Ge=!0,n=tf(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ll(),l===a){e=sn(t,e,n);break t}ce(t,e,l,n)}e=e.child}return e;case 26:return Zi(t,e),t===null?(n=Sd(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,l=su(at.current).createElement(n),l[kt]=e,l[ae]=t,oe(l,n,t),ne(l),e.stateNode=l):e.memoizedState=Sd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Zn(e),t===null&&mt&&(l=e.stateNode=bd(e.type,e.pendingProps,at.current),ie=e,Ge=!0,a=Ct,qn(e.type)?(Do=a,Ct=Ne(l.firstChild)):Ct=a),ce(t,e,e.pendingProps.children,n),Zi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((a=l=Ct)&&(l=I0(l,e.type,e.pendingProps,Ge),l!==null?(e.stateNode=l,ie=e,Ct=Ne(l.firstChild),Ge=!1,a=!0):a=!1),a||Tn(e)),Zn(e),a=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Eo(a,i)?l=null:u!==null&&Eo(a,u)&&(e.flags|=32),e.memoizedState!==null&&(a=Ac(t,e,r0,null,null,n),ti._currentValue=a),Zi(t,e),ce(t,e,l,n),e.child;case 6:return t===null&&mt&&((t=n=Ct)&&(n=F0(n,e.pendingProps,Ge),n!==null?(e.stateNode=n,ie=e,Ct=null,t=!0):t=!1),t||Tn(e)),null;case 13:return cr(t,e,n);case 4:return $t(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=sl(e,null,l,n):ce(t,e,l,n),e.child;case 11:return $f(t,e,e.type,e.pendingProps,n);case 7:return ce(t,e,e.pendingProps,n),e.child;case 8:return ce(t,e,e.pendingProps.children,n),e.child;case 12:return ce(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,zn(e,e.type,l.value),ce(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,il(e),a=ue(a),l=l(a),e.flags|=1,ce(t,e,l,n),e.child;case 14:return Pf(t,e,e.type,e.pendingProps,n);case 15:return tr(t,e,e.type,e.pendingProps,n);case 19:return sr(t,e,n);case 31:return y0(t,e,n);case 22:return er(t,e,n,e.pendingProps);case 24:return il(e),l=ue(Xt),t===null?(a=dc(),a===null&&(a=Ot,i=fc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),e.memoizedState={parent:l,cache:a},mc(e),zn(e,Xt,a)):((t.lanes&n)!==0&&(pc(t,e),Ua(e,null,null,n),Ba()),a=t.memoizedState,i=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),zn(e,Xt,l)):(l=i.cache,zn(e,Xt,l),l!==a.cache&&sc(e,[Xt],n,!0))),ce(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function fn(t){t.flags|=4}function Ic(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(wr())t.flags|=8192;else throw ol=Ri,gc}else t.flags&=-16777217}function rr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zd(e))if(wr())t.flags|=8192;else throw ol=Ri,gc}function Ji(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?fa():536870912,t.lanes|=e,Wl|=e)}function La(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function S0(t,e,n){var l=e.pendingProps;switch(ac(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),un(Xt),Gt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Gl(e)?fn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,uc())),Bt(e),null;case 26:var a=e.type,i=e.memoizedState;return t===null?(fn(e),i!==null?(Bt(e),rr(e,i)):(Bt(e),Ic(e,a,null,l,n))):i?i!==t.memoizedState?(fn(e),Bt(e),rr(e,i)):(Bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&fn(e),Bt(e),Ic(e,a,t,l,n)),null;case 27:if(Kn(e),n=at.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&fn(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}t=k.current,Gl(e)?Qs(e):(t=bd(a,l,n),e.stateNode=t,fn(e))}return Bt(e),null;case 5:if(Kn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&fn(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}if(i=k.current,Gl(e))Qs(e);else{var u=su(at.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[kt]=e,i[ae]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(oe(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&fn(e)}}return Bt(e),Ic(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&fn(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,Gl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=ie,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[kt]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||cd(t.nodeValue,n)),t||Tn(e,!0)}else t=su(t).createTextNode(l),t[kt]=e,e.stateNode=t}return Bt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Gl(e),n!==null){if(t===null){if(!l)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[kt]=e}else ll(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),t=!1}else n=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(je(e),e):(je(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Bt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Gl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[kt]=e}else ll(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),a=!1}else a=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(je(e),e):(je(e),null)}return je(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Ji(e,e.updateQueue),Bt(e),null);case 4:return Gt(),t===null&&yo(e.stateNode.containerInfo),Bt(e),null;case 10:return un(e.type),Bt(e),null;case 19:if(_(qt),l=e.memoizedState,l===null)return Bt(e),null;if(a=(e.flags&128)!==0,i=l.rendering,i===null)if(a)La(l,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Hi(t),i!==null){for(e.flags|=128,La(l,!1),t=i.updateQueue,e.updateQueue=t,Ji(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Ns(n,t),n=n.sibling;return N(qt,qt.current&1|2),mt&&ln(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Yt()>Pi&&(e.flags|=128,a=!0,La(l,!1),e.lanes=4194304)}else{if(!a)if(t=Hi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ji(e,t),La(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!mt)return Bt(e),null}else 2*Yt()-l.renderingStartTime>Pi&&n!==536870912&&(e.flags|=128,a=!0,La(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Yt(),t.sibling=null,n=qt.current,N(qt,a?n&1|2:n&1),mt&&ln(e,l.treeForkCount),t):(Bt(e),null);case 22:case 23:return je(e),yc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),n=e.updateQueue,n!==null&&Ji(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&_(ul),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),un(Xt),Bt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function A0(t,e){switch(ac(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return un(Xt),Gt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Kn(e),null;case 31:if(e.memoizedState!==null){if(je(e),e.alternate===null)throw Error(s(340));ll()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(je(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ll()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(qt),null;case 4:return Gt(),null;case 10:return un(e.type),null;case 22:case 23:return je(e),yc(),t!==null&&_(ul),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return un(Xt),null;case 25:return null;default:return null}}function dr(t,e){switch(ac(e),e.tag){case 3:un(Xt),Gt();break;case 26:case 27:case 5:Kn(e);break;case 4:Gt();break;case 31:e.memoizedState!==null&&je(e);break;case 13:je(e);break;case 19:_(qt);break;case 10:un(e.type);break;case 22:case 23:je(e),yc(),t!==null&&_(ul);break;case 24:un(Xt)}}function Ya(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var i=n.create,u=n.inst;l=i(),u.destroy=l}n=n.next}while(n!==a)}}catch(c){Tt(e,e.return,c)}}function Cn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=e;var f=n,b=c;try{b()}catch(T){Tt(a,f,T)}}}l=l.next}while(l!==i)}}catch(T){Tt(e,e.return,T)}}function gr(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{nf(e,n)}catch(l){Tt(t,t.return,l)}}}function mr(t,e,n){n.props=rl(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){Tt(t,e,l)}}function ka(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){Tt(t,e,a)}}function We(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Tt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Tt(t,e,a)}else n.current=null}function pr(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Tt(t,t.return,a)}}function Fc(t,e,n){try{var l=t.stateNode;X0(l,t.type,n,e),l[ae]=e}catch(a){Tt(t,t.return,a)}}function hr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qn(t.type)||t.tag===4}function $c(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tn));else if(l!==4&&(l===27&&qn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}function Wi(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&qn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Wi(t,e,n),t=t.sibling;t!==null;)Wi(t,e,n),t=t.sibling}function vr(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);oe(e,l,n),e[kt]=t,e[ae]=n}catch(i){Tt(t,t.return,i)}}var rn=!1,Kt=!1,to=!1,br=typeof WeakSet=="function"?WeakSet:Set,le=null;function j0(t,e){if(t=t.containerInfo,Ao=hu,t=Ds(t),Ku(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var u=0,c=-1,f=-1,b=0,T=0,M=t,y=null;e:for(;;){for(var S;M!==n||a!==0&&M.nodeType!==3||(c=u+a),M!==i||l!==0&&M.nodeType!==3||(f=u+l),M.nodeType===3&&(u+=M.nodeValue.length),(S=M.firstChild)!==null;)y=M,M=S;for(;;){if(M===t)break e;if(y===n&&++b===a&&(c=u),y===i&&++T===l&&(f=u),(S=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=S}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:t,selectionRange:n},hu=!1,le=e;le!==null;)if(e=le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,le=t;else for(;le!==null;){switch(e=le,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Q=rl(n.type,a);t=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(I){Tt(n,n.return,I)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)zo(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function yr(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:gn(t,n),l&4&&Ya(5,n);break;case 1:if(gn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(u){Tt(n,n.return,u)}else{var a=rl(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Tt(n,n.return,u)}}l&64&&gr(n),l&512&&ka(n,n.return);break;case 3:if(gn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{nf(t,e)}catch(u){Tt(n,n.return,u)}}break;case 27:e===null&&l&4&&vr(n);case 26:case 5:gn(t,n),e===null&&l&4&&pr(n),l&512&&ka(n,n.return);break;case 12:gn(t,n);break;case 31:gn(t,n),l&4&&Ar(t,n);break;case 13:gn(t,n),l&4&&jr(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=C0.bind(null,n),$0(t,n))));break;case 22:if(l=n.memoizedState!==null||rn,!l){e=e!==null&&e.memoizedState!==null||Kt,a=rn;var i=Kt;rn=l,(Kt=e)&&!i?mn(t,n,(n.subtreeFlags&8772)!==0):gn(t,n),rn=a,Kt=i}break;case 30:break;default:gn(t,n)}}function xr(t){var e=t.alternate;e!==null&&(t.alternate=null,xr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qt(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ht=null,ge=!1;function dn(t,e,n){for(n=n.child;n!==null;)Sr(t,e,n),n=n.sibling}function Sr(t,e,n){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:Kt||We(n,e),dn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||We(n,e);var l=Ht,a=ge;qn(n.type)&&(Ht=n.stateNode,ge=!1),dn(t,e,n),Fa(n.stateNode),Ht=l,ge=a;break;case 5:Kt||We(n,e);case 6:if(l=Ht,a=ge,Ht=null,dn(t,e,n),Ht=l,ge=a,Ht!==null)if(ge)try{(Ht.nodeType===9?Ht.body:Ht.nodeName==="HTML"?Ht.ownerDocument.body:Ht).removeChild(n.stateNode)}catch(i){Tt(n,e,i)}else try{Ht.removeChild(n.stateNode)}catch(i){Tt(n,e,i)}break;case 18:Ht!==null&&(ge?(t=Ht,gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),la(t)):gd(Ht,n.stateNode));break;case 4:l=Ht,a=ge,Ht=n.stateNode.containerInfo,ge=!0,dn(t,e,n),Ht=l,ge=a;break;case 0:case 11:case 14:case 15:Cn(2,n,e),Kt||Cn(4,n,e),dn(t,e,n);break;case 1:Kt||(We(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mr(n,e,l)),dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:Kt=(l=Kt)||n.memoizedState!==null,dn(t,e,n),Kt=l;break;default:dn(t,e,n)}}function Ar(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{la(t)}catch(n){Tt(e,e.return,n)}}}function jr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{la(t)}catch(n){Tt(e,e.return,n)}}function E0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new br),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new br),e;default:throw Error(s(435,t.tag))}}function Ii(t,e){var n=E0(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=B0.bind(null,t,l);l.then(a,a)}})}function me(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(qn(c.type)){Ht=c.stateNode,ge=!1;break t}break;case 5:Ht=c.stateNode,ge=!1;break t;case 3:case 4:Ht=c.stateNode.containerInfo,ge=!0;break t}c=c.return}if(Ht===null)throw Error(s(160));Sr(i,u,a),Ht=null,ge=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Er(e,t),e=e.sibling}var Qe=null;function Er(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),pe(t),l&4&&(Cn(3,t,t.return),Ya(3,t),Cn(5,t,t.return));break;case 1:me(e,t),pe(t),l&512&&(Kt||n===null||We(n,n.return)),l&64&&rn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Qe;if(me(e,t),pe(t),l&512&&(Kt||n===null||We(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[vt]||i[kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),oe(i,l,n),i[kt]=t,ne(i),l=i;break t;case"link":var u=Ed("link","href",a).get(l+(n.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(c,1);break e}}i=a.createElement(l),oe(i,l,n),a.head.appendChild(i);break;case"meta":if(u=Ed("meta","content",a).get(l+(n.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(c,1);break e}}i=a.createElement(l),oe(i,l,n),a.head.appendChild(i);break;default:throw Error(s(468,l))}i[kt]=t,ne(i),l=i}t.stateNode=l}else Td(a,t.type,t.stateNode);else t.stateNode=jd(a,l,t.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Td(a,t.type,t.stateNode):jd(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Fc(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),pe(t),l&512&&(Kt||n===null||We(n,n.return)),n!==null&&l&4&&Fc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),pe(t),l&512&&(Kt||n===null||We(n,n.return)),t.flags&32){a=t.stateNode;try{zl(a,"")}catch(Q){Tt(t,t.return,Q)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Fc(t,a,n!==null?n.memoizedProps:a)),l&1024&&(to=!0);break;case 6:if(me(e,t),pe(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(Q){Tt(t,t.return,Q)}}break;case 3:if(du=null,a=Qe,Qe=fu(e.containerInfo),me(e,t),Qe=a,pe(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(Q){Tt(t,t.return,Q)}to&&(to=!1,Tr(t));break;case 4:l=Qe,Qe=fu(t.stateNode.containerInfo),me(e,t),pe(t),Qe=l;break;case 12:me(e,t),pe(t);break;case 31:me(e,t),pe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 13:me(e,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($i=Yt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 22:a=t.memoizedState!==null;var f=n!==null&&n.memoizedState!==null,b=rn,T=Kt;if(rn=b||a,Kt=T||f,me(e,t),Kt=T,rn=b,pe(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||f||rn||Kt||dl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){f=n=e;try{if(i=f.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var M=f.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(Q){Tt(f,f.return,Q)}}}else if(e.tag===6){if(n===null){f=e;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(Q){Tt(f,f.return,Q)}}}else if(e.tag===18){if(n===null){f=e;try{var S=f.stateNode;a?md(S,!0):md(f.stateNode,!1)}catch(Q){Tt(f,f.return,Q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ii(t,n))));break;case 19:me(e,t),pe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ii(t,l)));break;case 30:break;case 21:break;default:me(e,t),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(hr(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,i=$c(t);Wi(t,i,a);break;case 5:var u=n.stateNode;n.flags&32&&(zl(u,""),n.flags&=-33);var c=$c(t);Wi(t,c,u);break;case 3:case 4:var f=n.stateNode.containerInfo,b=$c(t);Pc(t,b,f);break;default:throw Error(s(161))}}catch(T){Tt(t,t.return,T)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Tr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function gn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yr(t,e.alternate,e),e=e.sibling}function dl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Cn(4,e,e.return),dl(e);break;case 1:We(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&mr(e,e.return,n),dl(e);break;case 27:Fa(e.stateNode);case 26:case 5:We(e,e.return),dl(e);break;case 22:e.memoizedState===null&&dl(e);break;case 30:dl(e);break;default:dl(e)}t=t.sibling}}function mn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:mn(a,i,n),Ya(4,i);break;case 1:if(mn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(b){Tt(l,l.return,b)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)ef(f[a],c)}catch(b){Tt(l,l.return,b)}}n&&u&64&&gr(i),ka(i,i.return);break;case 27:vr(i);case 26:case 5:mn(a,i,n),n&&l===null&&u&4&&pr(i),ka(i,i.return);break;case 12:mn(a,i,n);break;case 31:mn(a,i,n),n&&u&4&&Ar(a,i);break;case 13:mn(a,i,n),n&&u&4&&jr(a,i);break;case 22:i.memoizedState===null&&mn(a,i,n),ka(i,i.return);break;case 30:break;default:mn(a,i,n)}e=e.sibling}}function eo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&_a(n))}function no(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_a(t))}function Xe(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zr(t,e,n,l),e=e.sibling}function zr(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Xe(t,e,n,l),a&2048&&Ya(9,e);break;case 1:Xe(t,e,n,l);break;case 3:Xe(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_a(t)));break;case 12:if(a&2048){Xe(t,e,n,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){Tt(e,e.return,f)}}else Xe(t,e,n,l);break;case 31:Xe(t,e,n,l);break;case 13:Xe(t,e,n,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Xe(t,e,n,l):Qa(t,e):i._visibility&2?Xe(t,e,n,l):(i._visibility|=2,Zl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&eo(u,e);break;case 24:Xe(t,e,n,l),a&2048&&no(e.alternate,e);break;default:Xe(t,e,n,l)}}function Zl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=n,f=l,b=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(i,u,c,f,a),Ya(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?Zl(i,u,c,f,a):Qa(i,u):(T._visibility|=2,Zl(i,u,c,f,a)),a&&b&2048&&eo(u.alternate,u);break;case 24:Zl(i,u,c,f,a),a&&b&2048&&no(u.alternate,u);break;default:Zl(i,u,c,f,a)}e=e.sibling}}function Qa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:Qa(n,l),a&2048&&eo(l.alternate,l);break;case 24:Qa(n,l),a&2048&&no(l.alternate,l);break;default:Qa(n,l)}e=e.sibling}}var Xa=8192;function Kl(t,e,n){if(t.subtreeFlags&Xa)for(t=t.child;t!==null;)Mr(t,e,n),t=t.sibling}function Mr(t,e,n){switch(t.tag){case 26:Kl(t,e,n),t.flags&Xa&&t.memoizedState!==null&&fm(n,Qe,t.memoizedState,t.memoizedProps);break;case 5:Kl(t,e,n);break;case 3:case 4:var l=Qe;Qe=fu(t.stateNode.containerInfo),Kl(t,e,n),Qe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Xa,Xa=16777216,Kl(t,e,n),Xa=l):Kl(t,e,n));break;default:Kl(t,e,n)}}function _r(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Va(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];le=l,Or(l,t)}_r(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dr(t),t=t.sibling}function Dr(t){switch(t.tag){case 0:case 11:case 15:Va(t),t.flags&2048&&Cn(9,t,t.return);break;case 3:Va(t);break;case 12:Va(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Fi(t)):Va(t);break;default:Va(t)}}function Fi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];le=l,Or(l,t)}_r(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Cn(8,e,e.return),Fi(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Fi(e));break;default:Fi(e)}t=t.sibling}}function Or(t,e){for(;le!==null;){var n=le;switch(n.tag){case 0:case 11:case 15:Cn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_a(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,le=l;else t:for(n=t;le!==null;){l=le;var a=l.sibling,i=l.return;if(xr(l),l===n){le=null;break t}if(a!==null){a.return=i,le=a;break t}le=i}}}var T0={getCacheForType:function(t){var e=ue(Xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ue(Xt).controller.signal}},z0=typeof WeakMap=="function"?WeakMap:Map,St=0,Ot=null,st=null,rt=0,Et=0,Ee=null,Bn=!1,Jl=!1,lo=!1,pn=0,Nt=0,Un=0,gl=0,ao=0,Te=0,Wl=0,Za=null,he=null,io=!1,$i=0,Rr=0,Pi=1/0,tu=null,Hn=null,Ft=0,Gn=null,Il=null,hn=0,uo=0,co=null,Cr=null,Ka=0,oo=null;function ze(){return(St&2)!==0&&rt!==0?rt&-rt:j.T!==null?po():ma()}function Br(){if(Te===0)if((rt&536870912)===0||mt){var t=re;re<<=1,(re&3932160)===0&&(re=262144),Te=t}else Te=536870912;return t=Ae.current,t!==null&&(t.flags|=32),Te}function ve(t,e,n){(t===Ot&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(Fl(t,0),wn(t,rt,Te,!1)),xn(t,n),((St&2)===0||t!==Ot)&&(t===Ot&&((St&2)===0&&(gl|=n),Nt===4&&wn(t,rt,Te,!1)),Ie(t))}function Ur(t,e,n){if((St&6)!==0)throw Error(s(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||yn(t,e),a=l?D0(t,e):fo(t,e,!0),i=l;do{if(a===0){Jl&&!l&&wn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!M0(n)){a=fo(t,e,!1),i=!1;continue}if(a===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;a=Za;var f=c.current.memoizedState.isDehydrated;if(f&&(Fl(c,u).flags|=256),u=fo(c,u,!1),u!==2){if(lo&&!f){c.errorRecoveryDisabledLanes|=i,gl|=i,a=4;break t}i=he,he=a,i!==null&&(he===null?he=i:he.push.apply(he,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Fl(t,0),wn(t,e,0,!0);break}t:{switch(l=t,i=a,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:wn(l,e,Te,!Bn);break t;case 2:he=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(a=$i+300-Yt(),10<a)){if(wn(l,e,Te,!Bn),In(l,0,!0)!==0)break t;hn=e,l.timeoutHandle=rd(Hr.bind(null,l,n,he,tu,io,e,Te,gl,Wl,Bn,i,"Throttled",-0,0),a);break t}Hr(l,n,he,tu,io,e,Te,gl,Wl,Bn,i,null,-0,0)}}break}while(!0);Ie(t)}function Hr(t,e,n,l,a,i,u,c,f,b,T,M,y,S){if(t.timeoutHandle=-1,M=e.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Mr(e,i,M);var Q=(i&62914560)===i?$i-Yt():(i&4194048)===i?Rr-Yt():0;if(Q=rm(M,Q),Q!==null){hn=i,t.cancelPendingCommit=Q(Qr.bind(null,t,e,i,n,l,a,u,c,f,T,M,null,y,S)),wn(t,i,u,!b);return}}Qr(t,e,i,n,l,a,u,c,f)}function M0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!xe(i(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e,n,l){e&=~ao,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var i=31-ee(a),u=1<<i;l[i]=-1,a&=~u}n!==0&&ra(t,n,e)}function eu(){return(St&6)===0?(Ja(0),!1):!0}function so(){if(st!==null){if(Et===0)var t=st.return;else t=st,an=al=null,Tc(t),Yl=null,Oa=0,t=st;for(;t!==null;)dr(t.alternate,t),t=t.return;st=null}}function Fl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,K0(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),hn=0,so(),Ot=t,st=n=nn(t.current,null),rt=e,Et=0,Ee=null,Bn=!1,Jl=yn(t,e),lo=!1,Wl=Te=ao=gl=Un=Nt=0,he=Za=null,io=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-ee(l),i=1<<a;e|=t[a],l&=~i}return pn=e,Ai(),n}function Gr(t,e){nt=null,j.H=Na,e===Ll||e===Oi?(e=Fs(),Et=3):e===gc?(e=Fs(),Et=4):Et=e===Yc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,st===null&&(Nt=1,Xi(t,Be(e,t.current)))}function wr(){var t=Ae.current;return t===null?!0:(rt&4194048)===rt?we===null:(rt&62914560)===rt||(rt&536870912)!==0?t===we:!1}function Nr(){var t=j.H;return j.H=Na,t===null?Na:t}function qr(){var t=j.A;return j.A=T0,t}function nu(){Nt=4,Bn||(rt&4194048)!==rt&&Ae.current!==null||(Jl=!0),(Un&134217727)===0&&(gl&134217727)===0||Ot===null||wn(Ot,rt,Te,!1)}function fo(t,e,n){var l=St;St|=2;var a=Nr(),i=qr();(Ot!==t||rt!==e)&&(tu=null,Fl(t,e)),e=!1;var u=Nt;t:do try{if(Et!==0&&st!==null){var c=st,f=Ee;switch(Et){case 8:so(),u=6;break t;case 3:case 2:case 9:case 6:Ae.current===null&&(e=!0);var b=Et;if(Et=0,Ee=null,$l(t,c,f,b),n&&Jl){u=0;break t}break;default:b=Et,Et=0,Ee=null,$l(t,c,f,b)}}_0(),u=Nt;break}catch(T){Gr(t,T)}while(!0);return e&&t.shellSuspendCounter++,an=al=null,St=l,j.H=a,j.A=i,st===null&&(Ot=null,rt=0,Ai()),u}function _0(){for(;st!==null;)Lr(st)}function D0(t,e){var n=St;St|=2;var l=Nr(),a=qr();Ot!==t||rt!==e?(tu=null,Pi=Yt()+500,Fl(t,e)):Jl=yn(t,e);t:do try{if(Et!==0&&st!==null){e=st;var i=Ee;e:switch(Et){case 1:Et=0,Ee=null,$l(t,e,i,1);break;case 2:case 9:if(Ws(i)){Et=0,Ee=null,Yr(e);break}e=function(){Et!==2&&Et!==9||Ot!==t||(Et=7),Ie(t)},i.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Ws(i)?(Et=0,Ee=null,Yr(e)):(Et=0,Ee=null,$l(t,e,i,7));break;case 5:var u=null;switch(st.tag){case 26:u=st.memoizedState;case 5:case 27:var c=st;if(u?zd(u):c.stateNode.complete){Et=0,Ee=null;var f=c.sibling;if(f!==null)st=f;else{var b=c.return;b!==null?(st=b,lu(b)):st=null}break e}}Et=0,Ee=null,$l(t,e,i,5);break;case 6:Et=0,Ee=null,$l(t,e,i,6);break;case 8:so(),Nt=6;break t;default:throw Error(s(462))}}O0();break}catch(T){Gr(t,T)}while(!0);return an=al=null,j.H=l,j.A=a,St=n,st!==null?0:(Ot=null,rt=0,Ai(),Nt)}function O0(){for(;st!==null&&!ca();)Lr(st)}function Lr(t){var e=fr(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?lu(t):st=e}function Yr(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=ar(n,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=ar(n,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:Tc(e);default:dr(n,e),e=st=Ns(e,pn),e=fr(n,e,pn)}t.memoizedProps=t.pendingProps,e===null?lu(t):st=e}function $l(t,e,n,l){an=al=null,Tc(e),Yl=null,Oa=0;var a=e.return;try{if(b0(t,a,e,n,rt)){Nt=1,Xi(t,Be(n,t.current)),st=null;return}}catch(i){if(a!==null)throw st=a,i;Nt=1,Xi(t,Be(n,t.current)),st=null;return}e.flags&32768?(mt||l===1?t=!0:Jl||(rt&536870912)!==0?t=!1:(Bn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ae.current,l!==null&&l.tag===13&&(l.flags|=16384))),kr(e,t)):lu(e)}function lu(t){var e=t;do{if((e.flags&32768)!==0){kr(e,Bn);return}t=e.return;var n=S0(e.alternate,e,pn);if(n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Nt===0&&(Nt=5)}function kr(t,e){do{var n=A0(t.alternate,t);if(n!==null){n.flags&=32767,st=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=n}while(t!==null);Nt=6,st=null}function Qr(t,e,n,l,a,i,u,c,f){t.cancelPendingCommit=null;do au();while(Ft!==0);if((St&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(i=e.lanes|e.childLanes,i|=$u,fi(t,n,i,u,c,f),t===Ot&&(st=Ot=null,rt=0),Il=e,Gn=t,hn=n,uo=i,co=a,Cr=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,U0(De,function(){return Jr(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,a=U.p,U.p=2,u=St,St|=4;try{j0(t,e,n)}finally{St=u,U.p=a,j.T=l}}Ft=1,Xr(),Vr(),Zr()}}function Xr(){if(Ft===1){Ft=0;var t=Gn,e=Il,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var l=U.p;U.p=2;var a=St;St|=4;try{Er(e,t);var i=jo,u=Ds(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&_s(c.ownerDocument.documentElement,c)){if(f!==null&&Ku(c)){var b=f.start,T=f.end;if(T===void 0&&(T=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(T,c.value.length);else{var M=c.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var S=y.getSelection(),Q=c.textContent.length,I=Math.min(f.start,Q),Dt=f.end===void 0?I:Math.min(f.end,Q);!S.extend&&I>Dt&&(u=Dt,Dt=I,I=u);var m=Ms(c,I),d=Ms(c,Dt);if(m&&d&&(S.rangeCount!==1||S.anchorNode!==m.node||S.anchorOffset!==m.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var v=M.createRange();v.setStart(m.node,m.offset),S.removeAllRanges(),I>Dt?(S.addRange(v),S.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),S.addRange(v))}}}}for(M=[],S=c;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var z=M[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}hu=!!Ao,jo=Ao=null}finally{St=a,U.p=l,j.T=n}}t.current=e,Ft=2}}function Vr(){if(Ft===2){Ft=0;var t=Gn,e=Il,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var l=U.p;U.p=2;var a=St;St|=4;try{yr(t,e.alternate,e)}finally{St=a,U.p=l,j.T=n}}Ft=3}}function Zr(){if(Ft===4||Ft===3){Ft=0,oa();var t=Gn,e=Il,n=hn,l=Cr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ft=5:(Ft=0,Il=Gn=null,Kr(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Hn=null),Al(n),e=e.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(Ve,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=j.T,a=U.p,U.p=2,j.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{j.T=e,U.p=a}}(hn&3)!==0&&au(),Ie(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===oo?Ka++:(Ka=0,oo=t):Ka=0,Ja(0)}}function Kr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_a(e)))}function au(){return Xr(),Vr(),Zr(),Jr()}function Jr(){if(Ft!==5)return!1;var t=Gn,e=uo;uo=0;var n=Al(hn),l=j.T,a=U.p;try{U.p=32>n?32:n,j.T=null,n=co,co=null;var i=Gn,u=hn;if(Ft=0,Il=Gn=null,hn=0,(St&6)!==0)throw Error(s(331));var c=St;if(St|=4,Dr(i.current),zr(i,i.current,u,n),St=c,Ja(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(Ve,i)}catch{}return!0}finally{U.p=a,j.T=l,Kr(t,e)}}function Wr(t,e,n){e=Be(n,e),e=Lc(t.stateNode,e,2),t=Dn(t,e,2),t!==null&&(xn(t,2),Ie(t))}function Tt(t,e,n){if(t.tag===3)Wr(t,t,n);else for(;e!==null;){if(e.tag===3){Wr(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hn===null||!Hn.has(l))){t=Be(n,t),n=If(2),l=Dn(e,n,2),l!==null&&(Ff(n,l,e,t),xn(l,2),Ie(l));break}}e=e.return}}function ro(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new z0;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(lo=!0,a.add(n),t=R0.bind(null,t,e,n),e.then(t,t))}function R0(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ot===t&&(rt&n)===n&&(Nt===4||Nt===3&&(rt&62914560)===rt&&300>Yt()-$i?(St&2)===0&&Fl(t,0):ao|=n,Wl===rt&&(Wl=0)),Ie(t)}function Ir(t,e){e===0&&(e=fa()),t=el(t,e),t!==null&&(xn(t,e),Ie(t))}function C0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ir(t,n)}function B0(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(e),Ir(t,n)}function U0(t,e){return vl(t,e)}var iu=null,Pl=null,go=!1,uu=!1,mo=!1,Nn=0;function Ie(t){t!==Pl&&t.next===null&&(Pl===null?iu=Pl=t:Pl=Pl.next=t),uu=!0,go||(go=!0,G0())}function Ja(t,e){if(!mo&&uu){mo=!0;do for(var n=!1,l=iu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-ee(42|t)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,td(l,i))}else i=rt,i=In(l,l===Ot?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||yn(l,i)||(n=!0,td(l,i));l=l.next}while(n);mo=!1}}function H0(){Fr()}function Fr(){uu=go=!1;var t=0;Nn!==0&&Z0()&&(t=Nn);for(var e=Yt(),n=null,l=iu;l!==null;){var a=l.next,i=$r(l,e);i===0?(l.next=null,n===null?iu=a:n.next=a,a===null&&(Pl=n)):(n=l,(t!==0||(i&3)!==0)&&(uu=!0)),l=a}Ft!==0&&Ft!==5||Ja(t),Nn!==0&&(Nn=0)}function $r(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ee(i),c=1<<u,f=a[u];f===-1?((c&n)===0||(c&l)!==0)&&(a[u]=si(c,e)):f<=e&&(t.expiredLanes|=c),i&=~c}if(e=Ot,n=rt,n=In(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Pt(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||yn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&Pt(l),Al(n)){case 2:case 8:n=Jn;break;case 32:n=De;break;case 268435456:n=bl;break;default:n=De}return l=Pr.bind(null,t),n=vl(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&Pt(l),t.callbackPriority=2,t.callbackNode=null,2}function Pr(t,e){if(Ft!==0&&Ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(au()&&t.callbackNode!==n)return null;var l=rt;return l=In(t,t===Ot?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ur(t,l,e),$r(t,Yt()),t.callbackNode!=null&&t.callbackNode===n?Pr.bind(null,t):null)}function td(t,e){if(au())return null;Ur(t,e,!0)}function G0(){J0(function(){(St&6)!==0?vl(_u,H0):Fr()})}function po(){if(Nn===0){var t=Nl;t===0&&(t=Wn,Wn<<=1,(Wn&261888)===0&&(Wn=256)),Nn=t}return Nn}function ed(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mi(""+t)}function nd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function w0(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var i=ed((a[ae]||null).action),u=l.submitter;u&&(e=(e=u[ae]||null)?ed(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new bi("action","action",null,l,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Nn!==0){var f=u?nd(a,u):new FormData(a);Uc(n,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?nd(a,u):new FormData(a),Uc(n,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var ho=0;ho<Fu.length;ho++){var vo=Fu[ho],N0=vo.toLowerCase(),q0=vo[0].toUpperCase()+vo.slice(1);ke(N0,"on"+q0)}ke(Cs,"onAnimationEnd"),ke(Bs,"onAnimationIteration"),ke(Us,"onAnimationStart"),ke("dblclick","onDoubleClick"),ke("focusin","onFocus"),ke("focusout","onBlur"),ke(e0,"onTransitionRun"),ke(n0,"onTransitionStart"),ke(l0,"onTransitionCancel"),ke(Hs,"onTransitionEnd"),El("onMouseEnter",["mouseout","mouseover"]),El("onMouseLeave",["mouseout","mouseover"]),El("onPointerEnter",["pointerout","pointerover"]),El("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wa));function ld(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,b=c.currentTarget;if(c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=b;try{i(a)}catch(T){Si(T)}a.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,b=c.currentTarget,c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=b;try{i(a)}catch(T){Si(T)}a.currentTarget=null,i=f}}}}function ft(t,e){var n=e[h];n===void 0&&(n=e[h]=new Set);var l=t+"__bubble";n.has(l)||(ad(e,t,2,!1),n.add(l))}function bo(t,e,n){var l=0;e&&(l|=4),ad(n,t,l,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[cu]){t[cu]=!0,Io.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||bo(n,!1,t),bo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,bo("selectionchange",!1,e))}}function ad(t,e,n,l){switch(Bd(e)){case 2:var a=mm;break;case 8:a=pm;break;default:a=Uo}n=a.bind(null,e,n,t),a=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function xo(t,e,n,l,a){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=It(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue t}c=c.parentNode}}l=l.return}os(function(){var b=i,T=Gu(n),M=[];t:{var y=Gs.get(t);if(y!==void 0){var S=bi,Q=t;switch(t){case"keypress":if(hi(n)===0)break t;case"keydown":case"keyup":S=Bg;break;case"focusin":Q="focus",S=ku;break;case"focusout":Q="blur",S=ku;break;case"beforeblur":case"afterblur":S=ku;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Gg;break;case Cs:case Bs:case Us:S=Eg;break;case Hs:S=Ng;break;case"scroll":case"scrollend":S=yg;break;case"wheel":S=Lg;break;case"copy":case"cut":case"paste":S=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=gs;break;case"toggle":case"beforetoggle":S=kg}var I=(e&4)!==0,Dt=!I&&(t==="scroll"||t==="scrollend"),m=I?y!==null?y+"Capture":null:y;I=[];for(var d=b,v;d!==null;){var z=d;if(v=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||v===null||m===null||(z=va(d,m),z!=null&&I.push(Ia(d,z,v))),Dt)break;d=d.return}0<I.length&&(y=new S(y,Q,null,n,T),M.push({event:y,listeners:I}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==Hu&&(Q=n.relatedTarget||n.fromElement)&&(It(Q)||Q[$e]))break t;if((S||y)&&(y=T.window===T?T:(y=T.ownerDocument)?y.defaultView||y.parentWindow:window,S?(Q=n.relatedTarget||n.toElement,S=b,Q=Q?It(Q):null,Q!==null&&(Dt=D(Q),I=Q.tag,Q!==Dt||I!==5&&I!==27&&I!==6)&&(Q=null)):(S=null,Q=b),S!==Q)){if(I=rs,z="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(I=gs,z="onPointerLeave",m="onPointerEnter",d="pointer"),Dt=S==null?y:ha(S),v=Q==null?y:ha(Q),y=new I(z,d+"leave",S,n,T),y.target=Dt,y.relatedTarget=v,z=null,It(T)===b&&(I=new I(m,d+"enter",Q,n,T),I.target=v,I.relatedTarget=Dt,z=I),Dt=z,S&&Q)e:{for(I=Y0,m=S,d=Q,v=0,z=m;z;z=I(z))v++;z=0;for(var K=d;K;K=I(K))z++;for(;0<v-z;)m=I(m),v--;for(;0<z-v;)d=I(d),z--;for(;v--;){if(m===d||d!==null&&m===d.alternate){I=m;break e}m=I(m),d=I(d)}I=null}else I=null;S!==null&&id(M,y,S,I,!1),Q!==null&&Dt!==null&&id(M,Dt,Q,I,!0)}}t:{if(y=b?ha(b):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var yt=Ss;else if(ys(y))if(As)yt=$g;else{yt=Ig;var X=Wg}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?b&&Uu(b.elementType)&&(yt=Ss):yt=Fg;if(yt&&(yt=yt(t,b))){xs(M,yt,n,T);break t}X&&X(t,y,b),t==="focusout"&&b&&y.type==="number"&&b.memoizedProps.value!=null&&Bu(y,"number",y.value)}switch(X=b?ha(b):window,t){case"focusin":(ys(X)||X.contentEditable==="true")&&(Ol=X,Ju=b,Ta=null);break;case"focusout":Ta=Ju=Ol=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Os(M,n,T);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Os(M,n,T)}var lt;if(Xu)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Dl?vs(t,n)&&(dt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(dt="onCompositionStart");dt&&(ms&&n.locale!=="ko"&&(Dl||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Dl&&(lt=ss()):(An=T,qu="value"in An?An.value:An.textContent,Dl=!0)),X=ou(b,dt),0<X.length&&(dt=new ds(dt,t,null,n,T),M.push({event:dt,listeners:X}),lt?dt.data=lt:(lt=bs(n),lt!==null&&(dt.data=lt)))),(lt=Xg?Vg(t,n):Zg(t,n))&&(dt=ou(b,"onBeforeInput"),0<dt.length&&(X=new ds("onBeforeInput","beforeinput",null,n,T),M.push({event:X,listeners:dt}),X.data=lt)),w0(M,t,b,n,T)}ld(M,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=va(t,n),a!=null&&l.unshift(Ia(t,a,i)),a=va(t,e),a!=null&&l.push(Ia(t,a,i))),t.tag===3)return l;t=t.return}return[]}function Y0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function id(t,e,n,l,a){for(var i=e._reactName,u=[];n!==null&&n!==l;){var c=n,f=c.alternate,b=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||b===null||(f=b,a?(b=va(n,i),b!=null&&u.unshift(Ia(n,b,f))):a||(b=va(n,i),b!=null&&u.push(Ia(n,b,f)))),n=n.return}u.length!==0&&t.push({event:e,listeners:u})}var k0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function ud(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(Q0,"")}function cd(t,e){return e=ud(e),ud(t)===e}function _t(t,e,n,l,a,i){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||zl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&zl(t,""+l);break;case"className":di(t,"class",l);break;case"tabIndex":di(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":di(t,n,l);break;case"style":us(t,l,i);break;case"data":if(e!=="object"){di(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=mi(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&_t(t,e,"name",a.name,a,null),_t(t,e,"formEncType",a.formEncType,a,null),_t(t,e,"formMethod",a.formMethod,a,null),_t(t,e,"formTarget",a.formTarget,a,null)):(_t(t,e,"encType",a.encType,a,null),_t(t,e,"method",a.method,a,null),_t(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=mi(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=tn);break;case"onScroll":l!=null&&ft("scroll",t);break;case"onScrollEnd":l!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=mi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":ft("beforetoggle",t),ft("toggle",t),ri(t,"popover",l);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vg.get(n)||n,ri(t,n,l))}}function So(t,e,n,l,a,i){switch(n){case"style":us(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof l=="string"?zl(t,l):(typeof l=="number"||typeof l=="bigint")&&zl(t,""+l);break;case"onScroll":l!=null&&ft("scroll",t);break;case"onScrollEnd":l!=null&&ft("scrollend",t);break;case"onClick":l!=null&&(t.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),i=t[ae]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):ri(t,n,l)}}}function oe(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,i,u,n,null)}}a&&_t(t,e,"srcSet",n.srcSet,n,null),l&&_t(t,e,"src",n.src,n,null);return;case"input":ft("invalid",t);var c=i=u=a=null,f=null,b=null;for(l in n)if(n.hasOwnProperty(l)){var T=n[l];if(T!=null)switch(l){case"name":a=T;break;case"type":u=T;break;case"checked":f=T;break;case"defaultChecked":b=T;break;case"value":i=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:_t(t,e,l,T,n,null)}}ns(t,i,c,f,b,u,a,!1);return;case"select":ft("invalid",t),l=u=i=null;for(a in n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:_t(t,e,a,c,n,null)}e=i,n=u,t.multiple=!!l,e!=null?Tl(t,!!l,e,!1):n!=null&&Tl(t,!!l,n,!0);return;case"textarea":ft("invalid",t),i=a=l=null;for(u in n)if(n.hasOwnProperty(u)&&(c=n[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:_t(t,e,u,c,n,null)}as(t,l,a,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(l=n[f],l!=null))switch(f){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:_t(t,e,f,l,n,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(l=0;l<Wa.length;l++)ft(Wa[l],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in n)if(n.hasOwnProperty(b)&&(l=n[b],l!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,b,l,n,null)}return;default:if(Uu(e)){for(T in n)n.hasOwnProperty(T)&&(l=n[T],l!==void 0&&So(t,e,T,l,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(l=n[c],l!=null&&_t(t,e,c,l,n,null))}function X0(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,f=null,b=null,T=null;for(S in n){var M=n[S];if(n.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=M;default:l.hasOwnProperty(S)||_t(t,e,S,null,l,M)}}for(var y in l){var S=l[y];if(M=n[y],l.hasOwnProperty(y)&&(S!=null||M!=null))switch(y){case"type":i=S;break;case"name":a=S;break;case"checked":b=S;break;case"defaultChecked":T=S;break;case"value":u=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,e));break;default:S!==M&&_t(t,e,y,S,l,M)}}Cu(t,u,c,f,b,T,i,a);return;case"select":S=u=c=y=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":S=f;default:l.hasOwnProperty(i)||_t(t,e,i,null,l,f)}for(a in l)if(i=l[a],f=n[a],l.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":y=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&_t(t,e,a,i,l,f)}e=c,n=u,l=S,y!=null?Tl(t,!!n,y,!1):!!l!=!!n&&(e!=null?Tl(t,!!n,e,!0):Tl(t,!!n,n?[]:"",!1));return;case"textarea":S=y=null;for(c in n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:_t(t,e,c,null,l,a)}for(u in l)if(a=l[u],i=n[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":y=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==i&&_t(t,e,u,a,l,i)}ls(t,y,S);return;case"option":for(var Q in n)if(y=n[Q],n.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":t.selected=!1;break;default:_t(t,e,Q,null,l,y)}for(f in l)if(y=l[f],S=n[f],l.hasOwnProperty(f)&&y!==S&&(y!=null||S!=null))switch(f){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:_t(t,e,f,y,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)y=n[I],n.hasOwnProperty(I)&&y!=null&&!l.hasOwnProperty(I)&&_t(t,e,I,null,l,y);for(b in l)if(y=l[b],S=n[b],l.hasOwnProperty(b)&&y!==S&&(y!=null||S!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(137,e));break;default:_t(t,e,b,y,l,S)}return;default:if(Uu(e)){for(var Dt in n)y=n[Dt],n.hasOwnProperty(Dt)&&y!==void 0&&!l.hasOwnProperty(Dt)&&So(t,e,Dt,void 0,l,y);for(T in l)y=l[T],S=n[T],!l.hasOwnProperty(T)||y===S||y===void 0&&S===void 0||So(t,e,T,y,l,S);return}}for(var m in n)y=n[m],n.hasOwnProperty(m)&&y!=null&&!l.hasOwnProperty(m)&&_t(t,e,m,null,l,y);for(M in l)y=l[M],S=n[M],!l.hasOwnProperty(M)||y===S||y==null&&S==null||_t(t,e,M,y,l,S)}function od(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&od(u)){for(u=0,c=a.responseEnd,l+=1;l<n.length;l++){var f=n[l],b=f.startTime;if(b>c)break;var T=f.transferSize,M=f.initiatorType;T&&od(M)&&(f=f.responseEnd,u+=T*(f<c?1:(c-b)/(f-b)))}if(--l,e+=8*(i+u)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ao=null,jo=null;function su(t){return t.nodeType===9?t:t.ownerDocument}function sd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Eo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var To=null;function Z0(){var t=window.event;return t&&t.type==="popstate"?t===To?!1:(To=t,!0):(To=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(W0)}:rd;function W0(t){setTimeout(function(){throw t})}function qn(t){return t==="head"}function gd(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),la(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Fa(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Fa(n);for(var i=n.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[vt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&Fa(t.ownerDocument.body);n=a}while(n);la(e)}function md(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function zo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zo(n),Qt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function I0(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[vt])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ne(t.nextSibling),t===null)break}return null}function F0(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ne(t.nextSibling),t===null))return null;return t}function pd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ne(t.nextSibling),t===null))return null;return t}function Mo(t){return t.data==="$?"||t.data==="$~"}function _o(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $0(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ne(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Do=null;function hd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ne(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function vd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function bd(t,e,n){switch(e=su(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qt(t)}var qe=new Map,yd=new Set;function fu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var vn=U.d;U.d={f:P0,r:tm,D:em,C:nm,L:lm,m:am,X:um,S:im,M:cm};function P0(){var t=vn.f(),e=eu();return t||e}function tm(t){var e=Sn(t);e!==null&&e.tag===5&&e.type==="form"?Gf(e):vn.r(t)}var ta=typeof document>"u"?null:document;function xd(t,e,n){var l=ta;if(l&&typeof e=="string"&&e){var a=Re(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),yd.has(a)||(yd.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),oe(e,"link",t),ne(e),l.head.appendChild(e)))}}function em(t){vn.D(t),xd("dns-prefetch",t,null)}function nm(t,e){vn.C(t,e),xd("preconnect",t,e)}function lm(t,e,n){vn.L(t,e,n);var l=ta;if(l&&t&&e){var a='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Re(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Re(n.imageSizes)+'"]')):a+='[href="'+Re(t)+'"]';var i=a;switch(e){case"style":i=ea(t);break;case"script":i=na(t)}qe.has(i)||(t=C({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),qe.set(i,t),l.querySelector(a)!==null||e==="style"&&l.querySelector($a(i))||e==="script"&&l.querySelector(Pa(i))||(e=l.createElement("link"),oe(e,"link",t),ne(e),l.head.appendChild(e)))}}function am(t,e){vn.m(t,e);var n=ta;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Re(l)+'"][href="'+Re(t)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=na(t)}if(!qe.has(i)&&(t=C({rel:"modulepreload",href:t},e),qe.set(i,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pa(i)))return}l=n.createElement("link"),oe(l,"link",t),ne(l),n.head.appendChild(l)}}}function im(t,e,n){vn.S(t,e,n);var l=ta;if(l&&t){var a=jl(l).hoistableStyles,i=ea(t);e=e||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector($a(i)))c.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":e},n),(n=qe.get(i))&&Oo(t,n);var f=u=l.createElement("link");ne(f),oe(f,"link",t),f._p=new Promise(function(b,T){f.onload=b,f.onerror=T}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ru(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function um(t,e){vn.X(t,e);var n=ta;if(n&&t){var l=jl(n).hoistableScripts,a=na(t),i=l.get(a);i||(i=n.querySelector(Pa(a)),i||(t=C({src:t,async:!0},e),(e=qe.get(a))&&Ro(t,e),i=n.createElement("script"),ne(i),oe(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function cm(t,e){vn.M(t,e);var n=ta;if(n&&t){var l=jl(n).hoistableScripts,a=na(t),i=l.get(a);i||(i=n.querySelector(Pa(a)),i||(t=C({src:t,async:!0,type:"module"},e),(e=qe.get(a))&&Ro(t,e),i=n.createElement("script"),ne(i),oe(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Sd(t,e,n,l){var a=(a=at.current)?fu(a):null;if(!a)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ea(n.href),n=jl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ea(n.href);var i=jl(a).hoistableStyles,u=i.get(t);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=a.querySelector($a(t)))&&!i._p&&(u.instance=i,u.state.loading=5),qe.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qe.set(t,n),i||om(a,t,n,u.state))),e&&l===null)throw Error(s(528,""));return u}if(e&&l!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=na(n),n=jl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ea(t){return'href="'+Re(t)+'"'}function $a(t){return'link[rel="stylesheet"]['+t+"]"}function Ad(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function om(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),oe(e,"link",n),ne(e),t.head.appendChild(e))}function na(t){return'[src="'+Re(t)+'"]'}function Pa(t){return"script[async]"+t}function jd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Re(n.href)+'"]');if(l)return e.instance=l,ne(l),l;var a=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ne(l),oe(l,"style",a),ru(l,n.precedence,t),e.instance=l;case"stylesheet":a=ea(n.href);var i=t.querySelector($a(a));if(i)return e.state.loading|=4,e.instance=i,ne(i),i;l=Ad(n),(a=qe.get(a))&&Oo(l,a),i=(t.ownerDocument||t).createElement("link"),ne(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),oe(i,"link",l),e.state.loading|=4,ru(i,n.precedence,t),e.instance=i;case"script":return i=na(n.src),(a=t.querySelector(Pa(i)))?(e.instance=a,ne(a),a):(l=n,(a=qe.get(i))&&(l=C({},n),Ro(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),ne(a),oe(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ru(l,n.precedence,t));return e.instance}function ru(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Oo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ro(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var du=null;function Ed(t,e,n){if(du===null){var l=new Map,a=du=new Map;a.set(n,l)}else a=du,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var i=n[a];if(!(i[vt]||i[kt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Td(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function sm(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function zd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function fm(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=ea(l.href),i=e.querySelector($a(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=gu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=i,ne(i);return}i=e.ownerDocument||e,l=Ad(l),(a=qe.get(a))&&Oo(l,a),i=i.createElement("link"),ne(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),oe(i,"link",l),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=gu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Co=0;function rm(t,e){return t.stylesheets&&t.count===0&&pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Co===0&&(Co=62500*V0());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Co?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function gu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mu=null;function pu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mu=new Map,e.forEach(dm,t),mu=null,gu.call(t))}function dm(t,e){if(!(e.state.loading&4)){var n=mu.get(t);if(n)var l=n.get(null);else{n=new Map,mu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}a=e.instance,u=a.getAttribute("data-precedence"),i=n.get(u)||l,i===l&&n.set(null,a),n.set(u,a),this.count++,l=gu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ti={$$typeof:Z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function gm(t,e,n,l,a,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.hiddenUpdates=xl(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Md(t,e,n,l,a,i,u,c,f,b,T,M){return t=new gm(t,e,n,u,f,b,T,M,c),e=1,i===!0&&(e|=24),i=Se(3,null,null,e),t.current=i,i.stateNode=t,e=fc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:e},mc(i),t}function _d(t){return t?(t=Bl,t):Bl}function Dd(t,e,n,l,a,i){a=_d(a),l.context===null?l.context=a:l.pendingContext=a,l=_n(e),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Dn(t,l,e),n!==null&&(ve(n,t,e),Ca(n,t,e))}function Od(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bo(t,e){Od(t,e),(t=t.alternate)&&Od(t,e)}function Rd(t){if(t.tag===13||t.tag===31){var e=el(t,67108864);e!==null&&ve(e,t,67108864),Bo(t,67108864)}}function Cd(t){if(t.tag===13||t.tag===31){var e=ze();e=Sl(e);var n=el(t,e);n!==null&&ve(n,t,e),Bo(t,e)}}var hu=!0;function mm(t,e,n,l){var a=j.T;j.T=null;var i=U.p;try{U.p=2,Uo(t,e,n,l)}finally{U.p=i,j.T=a}}function pm(t,e,n,l){var a=j.T;j.T=null;var i=U.p;try{U.p=8,Uo(t,e,n,l)}finally{U.p=i,j.T=a}}function Uo(t,e,n,l){if(hu){var a=Ho(l);if(a===null)xo(t,e,l,vu,n),Ud(t,l);else if(vm(a,t,e,n,l))l.stopPropagation();else if(Ud(t,l),e&4&&-1<hm.indexOf(t)){for(;a!==null;){var i=Sn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ze(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-ee(u);c.entanglements[1]|=f,u&=~f}Ie(i),(St&6)===0&&(Pi=Yt()+500,Ja(0))}}break;case 31:case 13:c=el(i,2),c!==null&&ve(c,i,2),eu(),Bo(i,2)}if(i=Ho(l),i===null&&xo(t,e,l,vu,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else xo(t,e,l,null,n)}}function Ho(t){return t=Gu(t),Go(t)}var vu=null;function Go(t){if(vu=null,t=It(t),t!==null){var e=D(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=B(e),t!==null)return t;t=null}else if(n===31){if(t=H(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vu=t,null}function Bd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mu()){case _u:return 2;case Jn:return 8;case De:case ci:return 32;case bl:return 268435456;default:return 32}default:return 32}}var wo=!1,Ln=null,Yn=null,kn=null,ei=new Map,ni=new Map,Qn=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ud(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(e.pointerId)}}function li(t,e,n,l,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},e!==null&&(e=Sn(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function vm(t,e,n,l,a){switch(e){case"focusin":return Ln=li(Ln,t,e,n,l,a),!0;case"dragenter":return Yn=li(Yn,t,e,n,l,a),!0;case"mouseover":return kn=li(kn,t,e,n,l,a),!0;case"pointerover":var i=a.pointerId;return ei.set(i,li(ei.get(i)||null,t,e,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ni.set(i,li(ni.get(i)||null,t,e,n,l,a)),!0}return!1}function Hd(t){var e=It(t.target);if(e!==null){var n=D(e);if(n!==null){if(e=n.tag,e===13){if(e=B(n),e!==null){t.blockedOn=e,pa(t.priority,function(){Cd(n)});return}}else if(e===31){if(e=H(n),e!==null){t.blockedOn=e,pa(t.priority,function(){Cd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ho(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);Hu=l,n.target.dispatchEvent(l),Hu=null}else return e=Sn(n),e!==null&&Rd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gd(t,e,n){bu(t)&&n.delete(e)}function bm(){wo=!1,Ln!==null&&bu(Ln)&&(Ln=null),Yn!==null&&bu(Yn)&&(Yn=null),kn!==null&&bu(kn)&&(kn=null),ei.forEach(Gd),ni.forEach(Gd)}function yu(t,e){t.blockedOn===e&&(t.blockedOn=null,wo||(wo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bm)))}var xu=null;function wd(t){xu!==t&&(xu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xu===t&&(xu=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Go(l||n)===null)continue;break}var i=Sn(n);i!==null&&(t.splice(e,3),e-=3,Uc(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function la(t){function e(f){return yu(f,t)}Ln!==null&&yu(Ln,t),Yn!==null&&yu(Yn,t),kn!==null&&yu(kn,t),ei.forEach(e),ni.forEach(e);for(var n=0;n<Qn.length;n++){var l=Qn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&Qn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],u=a[ae]||null;if(typeof i=="function")u||wd(n);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[ae]||null)c=u.formAction;else if(Go(a)!==null)continue}else c=u.action;typeof c=="function"?n[l+1]=c:(n.splice(l,3),l-=3),wd(n)}}}function Nd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function No(t){this._internalRoot=t}Su.prototype.render=No.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,l=ze();Dd(n,l,t,e,null,null)},Su.prototype.unmount=No.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dd(t.current,2,null,t,null,null),eu(),e[$e]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=ma();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&Hd(t)}};var qd=E.version;if(qd!=="19.2.4")throw Error(s(527,qd,"19.2.4"));U.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=x(e),t=t!==null?V(t):null,t=t===null?null:t.stateNode,t};var ym={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Ve=Au.inject(ym),te=Au}catch{}}return ii.createRoot=function(t,e){if(!A(t))throw Error(s(299));var n=!1,l="",a=Zf,i=Kf,u=Jf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Md(t,1,!1,null,null,n,l,null,a,i,u,Nd),t[$e]=e.current,yo(t),new No(e)},ii.hydrateRoot=function(t,e,n){if(!A(t))throw Error(s(299));var l=!1,a="",i=Zf,u=Kf,c=Jf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),e=Md(t,1,!0,e,n??null,l,a,f,i,u,c,Nd),e.context=_d(null),n=e.current,l=ze(),l=Sl(l),a=_n(l),a.callback=null,Dn(n,a,l),n=l,e.current.lanes=n,xn(e,n),Ie(e),t[$e]=e.current,yo(t),new Su(e)},ii.version="19.2.4",ii}var Wd;function Om(){if(Wd)return Yo.exports;Wd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),Yo.exports=Dm(),Yo.exports}var Rm=Om();const Cm="modulepreload",Bm=function(r){return"/getbiji-docs-v3/"+r},Id={},it=function(E,p,s){let A=Promise.resolve();if(p&&p.length>0){let B=function(x){return Promise.all(x.map(V=>Promise.resolve(V).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),R=(H==null?void 0:H.nonce)||(H==null?void 0:H.getAttribute("nonce"));A=B(p.map(x=>{if(x=Bm(x),x in Id)return;Id[x]=!0;const V=x.endsWith(".css"),C=V?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const F=document.createElement("link");if(F.rel=V?"stylesheet":Cm,V||(F.as="script"),F.crossOrigin="",F.href=x,R&&F.setAttribute("nonce",R),document.head.appendChild(F),V)return new Promise((J,bt)=>{F.addEventListener("load",J),F.addEventListener("error",()=>bt(new Error(`Unable to preload CSS for ${x}`)))})}))}function D(B){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=B,window.dispatchEvent(H),!H.defaultPrevented)throw B}return A.then(B=>{for(const H of B||[])H.status==="rejected"&&D(H.reason);return E().catch(D)})},ju={amber:{dark:{bg:"#09090b",sf:"#111114",sfH:"#18181c",bd:"#1e1e24",tx:"#e4e4e7",tx2:"#a1a1aa",txM:"#919199",ac:"#e8a845",acD:"rgba(232,168,69,0.12)",acT:"#fbbf24",cdBg:"#0c0c0f",cdTx:"#c4c4cc",sbBg:"#0c0c0e",hdBg:"rgba(9,9,11,0.85)"},light:{bg:"#fafaf9",sf:"#ffffff",sfH:"#f5f5f4",bd:"#e7e5e4",tx:"#1c1917",tx2:"#57534e",txM:"#706b66",ac:"#96640a",acD:"rgba(150,100,10,0.08)",acT:"#7a5208",cdBg:"#f5f3f0",cdTx:"#2c2520",sbBg:"#f5f5f3",hdBg:"rgba(250,250,249,0.85)"},fonts:{heading:"Instrument Serif",body:"DM Sans",code:"JetBrains Mono"}},editorial:{dark:{bg:"#080c1f",sf:"#0e1333",sfH:"#141940",bd:"#1a2050",tx:"#e8e6f0",tx2:"#b5b1c8",txM:"#9490ae",ac:"#ff6b4a",acD:"rgba(255,107,74,0.1)",acT:"#ff8a70",cdBg:"#0a0e27",cdTx:"#b8b4cc",sbBg:"#0a0e27",hdBg:"rgba(8,12,31,0.9)"},light:{bg:"#f6f4f0",sf:"#ffffff",sfH:"#eeece6",bd:"#ddd9d0",tx:"#1a1716",tx2:"#4a443e",txM:"#706960",ac:"#b83d22",acD:"rgba(184,61,34,0.07)",acT:"#9c3019",cdBg:"#edeae4",cdTx:"#3a3530",sbBg:"#f0ede8",hdBg:"rgba(246,244,240,0.92)"},fonts:{heading:"Cormorant Garamond",body:"Bricolage Grotesque",code:"Fira Code"}}},Um=()=>o.jsx("svg",{width:22,height:22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Hm=()=>o.jsx("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Gm=()=>o.jsx("svg",{width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M22 2L11 13M22 2l-7 20-4-9-9-4z"})});function ug(r){let E="You are a helpful documentation assistant. Answer questions accurately based on the documentation provided below. If the answer isn't in the documentation, say so clearly. Keep answers concise and reference specific sections when possible.";if(r){const p=r.length>1e5?r.slice(0,1e5)+`

[Documentation truncated...]`:r;E+=`

Documentation:
${p}`}return E}async function wm(r,E,p,s){var B,H,R;const A=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${E}`},body:JSON.stringify({model:p,messages:[{role:"system",content:ug(s)},...r.map(x=>({role:x.role,content:x.content}))]})});if(!A.ok){const x=await A.text();throw new Error(`OpenAI API error (${A.status}): ${x}`)}return((R=(H=(B=(await A.json()).choices)==null?void 0:B[0])==null?void 0:H.message)==null?void 0:R.content)||"No response."}async function Nm(r,E,p,s){var B,H;const A=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":E,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:p,max_tokens:1024,system:ug(s),messages:r.map(R=>({role:R.role,content:R.content}))})});if(!A.ok){const R=await A.text();throw new Error(`Anthropic API error (${A.status}): ${R}`)}return((H=(B=(await A.json()).content)==null?void 0:B[0])==null?void 0:H.text)||"No response."}function qm(r){return r==="openai"?"gpt-4o-mini":"claude-sonnet-4-20250514"}function Lm({provider:r,model:E,apiKey:p,context:s}){const[A,D]=G.useState(!1),[B,H]=G.useState([]),[R,x]=G.useState(""),[V,C]=G.useState(!1),[F,J]=G.useState(null),bt=G.useRef(null),et=G.useRef(null),ut=p||(typeof window<"u"?window.__TOME_AI_API_KEY__:void 0),O=E||qm(r);G.useEffect(()=>{var L;(L=bt.current)==null||L.scrollIntoView({behavior:"smooth"})},[B]),G.useEffect(()=>{A&&setTimeout(()=>{var L;return(L=et.current)==null?void 0:L.focus()},100)},[A]);const Y=G.useCallback(async()=>{const L=R.trim();if(!L||V||!ut)return;const pt={role:"user",content:L},At=[...B,pt];H(At),x(""),C(!0),J(null);try{let w;r==="openai"?w=await wm(At,ut,O,s):w=await Nm(At,ut,O,s),H(Rt=>[...Rt,{role:"assistant",content:w}])}catch(w){J(w instanceof Error?w.message:"Failed to get response")}finally{C(!1)}},[R,V,B,r,ut,O,s]),Z=G.useCallback(L=>{L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),Y())},[Y]);return A?o.jsxs("div",{"data-testid":"ai-chat-panel",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:380,maxWidth:"calc(100vw - 48px)",height:520,maxHeight:"calc(100vh - 48px)",background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,boxShadow:"0 16px 64px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"var(--font-body)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--tx)"},children:"Ask AI"}),o.jsx("button",{"data-testid":"ai-chat-close",onClick:()=>D(!1),"aria-label":"Close AI chat",style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",padding:4},children:o.jsx(Hm,{})})]}),o.jsxs("div",{style:{flex:1,overflow:"auto",padding:"12px 16px"},children:[!ut&&o.jsxs("div",{"data-testid":"ai-chat-no-key",style:{textAlign:"center",color:"var(--txM)",fontSize:13,padding:"24px 8px",lineHeight:1.6},children:[o.jsx("p",{style:{marginBottom:8,fontWeight:500,color:"var(--tx)"},children:"AI not configured"}),o.jsxs("p",{style:{marginBottom:8},children:["To enable AI chat, set the ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"apiKeyEnv"})," in ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"tome.config.js"})," and provide the environment variable at build time."]}),o.jsxs("p",{style:{fontSize:11.5,color:"var(--txM)"},children:["Example: ",o.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"TOME_AI_KEY=sk-... tome build"})]})]}),B.map((L,pt)=>o.jsx("div",{"data-testid":`ai-chat-message-${L.role}`,style:{marginBottom:12,display:"flex",justifyContent:L.role==="user"?"flex-end":"flex-start"},children:o.jsx("div",{style:{maxWidth:"85%",padding:"8px 12px",borderRadius:10,fontSize:13,lineHeight:1.55,whiteSpace:"pre-wrap",wordBreak:"break-word",background:L.role==="user"?"var(--ac)":"var(--cdBg)",color:L.role==="user"?"#fff":"var(--tx)"},children:L.content})},pt)),V&&o.jsx("div",{"data-testid":"ai-chat-loading",style:{display:"flex",justifyContent:"flex-start",marginBottom:12},children:o.jsx("div",{style:{padding:"8px 12px",borderRadius:10,fontSize:13,background:"var(--cdBg)",color:"var(--txM)"},children:"Thinking..."})}),F&&o.jsx("div",{"data-testid":"ai-chat-error",style:{padding:"8px 12px",borderRadius:8,fontSize:12,background:"rgba(220,50,50,0.1)",color:"#d44",marginBottom:12},children:F}),o.jsx("div",{ref:bt})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderTop:"1px solid var(--bd)",flexShrink:0},children:[o.jsx("input",{ref:et,"data-testid":"ai-chat-input",value:R,onChange:L=>x(L.target.value),onKeyDown:Z,placeholder:ut?"Ask a question...":"API key required",disabled:!ut,style:{flex:1,background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:8,padding:"8px 12px",color:"var(--tx)",fontSize:13,fontFamily:"var(--font-body)",outline:"none"}}),o.jsx("button",{"data-testid":"ai-chat-send",onClick:Y,disabled:!ut||!R.trim()||V,"aria-label":"Send message",style:{width:34,height:34,borderRadius:8,background:ut&&R.trim()?"var(--ac)":"var(--cdBg)",color:ut&&R.trim()?"#fff":"var(--txM)",border:"none",cursor:ut&&R.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o.jsx(Gm,{})})]})]}):o.jsx("button",{"data-testid":"ai-chat-button",onClick:()=>D(!0),"aria-label":"Open AI chat",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:48,height:48,borderRadius:"50%",background:"var(--ac)",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",transition:"transform 0.15s"},children:o.jsx(Um,{})})}function Ym(r){const E=/^#([0-9a-f]{6})$/i.exec(r.trim());if(!E)return null;const p=parseInt(E[1],16);return[p>>16&255,p>>8&255,p&255]}function km(r,E){const p=Ym(r);if(!p)return null;const[s,A,D]=p,B=`rgba(${s},${A},${D},${E?.12:.08})`,H=E?1.15:.85,R=Math.min(255,Math.round(s*H)),x=Math.min(255,Math.round(A*H)),V=Math.min(255,Math.round(D*H)),C=`rgb(${R},${x},${V})`;return{ac:r,acD:B,acT:C}}const Me=({d:r,size:E=16})=>o.jsx("svg",{width:E,height:E,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:r})}),cg=()=>o.jsx(Me,{d:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"}),Fd=()=>o.jsx(Me,{d:"M9 18l6-6-6-6",size:14}),Vo=()=>o.jsx(Me,{d:"M6 9l6 6 6-6",size:14}),Qm=()=>o.jsx(Me,{d:"M3 12h18M3 6h18M3 18h18",size:20}),Xm=()=>o.jsx(Me,{d:"M18 6L6 18M6 6l12 12",size:18}),$d=()=>o.jsx(Me,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),Pd=()=>o.jsx(Me,{d:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a1 1 0 0 1 1-1v-1a1 1 0 0 1-2 0v1a1 1 0 0 1 1 1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm18-1h-1a1 1 0 0 1 0 2h1a1 1 0 0 1 0-2ZM6.34 6.34a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Zm12.73-2.12-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41ZM6.34 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41Zm12.73 2.12-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41Z"}),tg=()=>o.jsx(Me,{d:"M19 12H5M12 19l-7-7 7-7",size:14}),eg=()=>o.jsx(Me,{d:"M5 12h14M12 5l7 7-7 7",size:14}),Vm=()=>o.jsx(Me,{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",size:13});function Zm(r){const E=new Date(r),s=new Date().getTime()-E.getTime();if(isNaN(s))return"";const A=Math.floor(s/1e3),D=Math.floor(A/60),B=Math.floor(D/60),H=Math.floor(B/24),R=Math.floor(H/30),x=Math.floor(H/365);return A<60?"just now":D<60?`${D} minute${D===1?"":"s"} ago`:B<24?`${B} hour${B===1?"":"s"} ago`:H<30?`${H} day${H===1?"":"s"} ago`:R<12?`${R} month${R===1?"":"s"} ago`:x>=1?`${x} year${x===1?"":"s"} ago`:E.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}let aa=null;const Km="/_pagefind/pagefind.js";async function Jm(){if(aa)return aa;try{return aa=await import(Km),await aa.init(),aa}catch{return null}}let Eu=null;function Wm(){return Eu||(Eu=it(()=>import("./theme-BIHI7g3E.js"),[]).catch(()=>null),Eu)}function Im({appId:r,apiKey:E,indexName:p,onNavigate:s,onClose:A,basePath:D=""}){const[B,H]=G.useState(null),[R,x]=G.useState(!1);G.useEffect(()=>{Wm().then(C=>{C&&C.DocSearch?H(()=>C.DocSearch):C&&C.default?H(()=>C.default):x(!0)})},[]);const V=G.useCallback(C=>{try{let J=new URL(C,"http://localhost").pathname;if(D){const bt=D.replace(/\/$/,"");J.startsWith(bt)&&(J=J.slice(bt.length))}return J.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index"}catch{return"index"}},[D]);return R?o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{onClick:C=>C.stopPropagation(),style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Algolia DocSearch is not available. Install @docsearch/react to enable it."})}):B?o.jsx("div",{"data-testid":"algolia-search-modal",children:o.jsx(B,{appId:r,apiKey:E,indexName:p,navigator:{navigate({itemUrl:C}){const F=V(C);s(F)}},hitComponent:({hit:C,children:F})=>o.jsx("a",{href:C.url,onClick:J=>{J.preventDefault();const bt=V(C.url);s(bt)},children:F})})}):o.jsx("div",{onClick:A,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:o.jsx("div",{style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Loading search..."})})}const Fm=()=>o.jsx(Me,{d:"M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",size:14}),$m=()=>o.jsx(Me,{d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z",size:14}),Pm=()=>o.jsx(Me,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",size:11}),t1={github:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",twitter:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",discord:"M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.028-.07 8.735 8.735 0 01-1.248-.595.05.05 0 01-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085c-.399.232-.813.431-1.249.594a.05.05 0 00-.03.07c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019z",linkedin:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",youtube:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",mastodon:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765 2.79.765.504 1.783.504 5.253c-.005.995-.01 2.19.013 3.44.075 4.21.56 8.354 3.383 9.386 1.302.476 2.418.576 3.317.507 1.628-.125 2.541-.8 2.541-.8l-.054-1.182s-1.163.366-2.47.322c-1.293-.044-2.658-.138-2.867-1.716a3.23 3.23 0 01-.028-.465s1.27.31 2.879.384c.984.045 1.905-.058 2.842-.17zM13 8.59V5.319c0-.67-.17-1.2-.507-1.592-.348-.4-.806-.605-1.373-.605-.656 0-1.154.252-1.486.756L9.2 4.595l-.434-.717c-.332-.504-.83-.756-1.486-.756-.567 0-1.025.204-1.373.605-.338.392-.507.923-.507 1.592V8.59h1.69V5.468c0-.67.285-1.012.855-1.012.63 0 .946.404.946 1.204V7.11h1.682V5.66c0-.8.316-1.204.946-1.204.57 0 .855.342.855 1.012V8.59H13z",bluesky:"M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.724-1.498 2.697-4.29 4.532-5.668C13.855 1.013 16 .638 16 3.14c0 .5-.286 4.2-.454 4.8-.585 2.093-2.716 2.628-4.544 2.305 3.195.564 4.007 2.433 2.25 4.302-3.337 3.548-4.8-1.244-5.252-2.547 0 0-.116-.334-.166-.334h.332C8.166 11.666 8.05 12 8.05 12c-.452 1.303-1.916 6.095-5.252 2.547-1.756-1.869-.946-3.738 2.25-4.302-1.829.323-3.96-.212-4.544-2.305C.336 7.34.05 3.64.05 3.14.05.638 2.195 1.013 3.468 1.948z"},e1=({platform:r,customIcon:E})=>{const p=r==="custom"&&E?E:t1[r];return p?o.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor",children:o.jsx("path",{d:p})}):null},n1={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function l1({entries:r}){const[E,p]=G.useState(r.length<=5),s=E?r:r.slice(0,5);return o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),s.map((A,D)=>o.jsxs("div",{"data-testid":`changelog-entry-${A.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:D<s.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:A.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:A.url?o.jsx("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:A.version}):A.version}),A.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:A.date})]}),A.sections.map(B=>{const H=n1[B.type]||"#6b7280";return o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:H}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:H,fontFamily:"var(--font-code, monospace)"},children:B.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:B.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},B.type)})]},A.version)),!E&&r.length>5&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>p(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer"},children:["Show all ",r.length," releases"]})})]})}function a1(r,E,p){if(E==="index")return[];for(const s of r)if(s.pages.find(D=>D.id===E)){const D=[],B=s.pages[0];return D.push({label:s.section,href:B?B.urlPath:null}),D.push({label:p,href:null}),D}return[]}function i1({config:r,navigation:E,currentPageId:p,pageHtml:s,pageComponent:A,mdxComponents:D,pageTitle:B,pageDescription:H,headings:R,tocEnabled:x=!0,editUrl:V,lastUpdated:C,changelogEntries:F,onNavigate:J,allPages:bt,versioning:et,currentVersion:ut,i18n:O,currentLocale:Y,docContext:Z,basePath:L="",isDraft:pt,dir:At,overrides:w}){var Ze,In,yn,si,fa,xl,xn,fi,ra,da,ga,Sl,Al,ma,pa,Ye,kt,ae,$e;const Rt=Y||(O==null?void 0:O.defaultLocale)||"en",Jt=At||((Ze=O==null?void 0:O.localeDirs)==null?void 0:Ze[Rt])||"ltr",zt=Jt==="rtl",Wt=((In=r.theme)==null?void 0:In.mode)||"auto",[Ut,_e]=G.useState(()=>{var h;return Wt==="dark"?!0:Wt==="light"?!1:((h=window.matchMedia)==null?void 0:h.call(window,"(prefers-color-scheme: dark)").matches)??!0}),[ct,be]=G.useState(()=>typeof window<"u"&&window.innerWidth<768),[j,U]=G.useState(()=>typeof window<"u"&&window.innerWidth>=768),[W,ot]=G.useState(!1),[jt,g]=G.useState(!1),[_,N]=G.useState(!1),[k,$]=G.useState(null),[at,ht]=G.useState({}),[$t,Gt]=G.useState(()=>{var h;if(!((h=r.banner)!=null&&h.text))return!0;try{const q=Array.from(r.banner.text).reduce((P,gt)=>(P<<5)-P+gt.charCodeAt(0)|0,0).toString(36);return localStorage.getItem("tome-banner-dismissed")===q}catch{return!1}}),Zn=et&&ut&&ut!==et.current,[Kn,ia]=G.useState(E.map(h=>h.section)),Fe=G.useRef(null),Le=G.useRef(null),ml=G.useRef(""),[pl,zu]=G.useState(()=>typeof window<"u"&&window.innerWidth>1100),ua=((yn=r.theme)==null?void 0:yn.preset)||"amber",hl=((si=ju[ua])==null?void 0:si[Ut?"dark":"light"])||ju.amber.dark,vl=(fa=r.theme)!=null&&fa.accent?km(r.theme.accent,Ut):null,Pt=vl?{...hl,...vl}:hl,ca=((xl=ju[ua])==null?void 0:xl.fonts)||ju.amber.fonts,oa={heading:((fi=(xn=r.theme)==null?void 0:xn.fonts)==null?void 0:fi.heading)||ca.heading,body:((da=(ra=r.theme)==null?void 0:ra.fonts)==null?void 0:da.body)||ca.body,code:((Sl=(ga=r.theme)==null?void 0:ga.fonts)==null?void 0:Sl.code)||ca.code};G.useEffect(()=>{if(Wt!=="auto")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),q=P=>_e(P.matches);return h.addEventListener("change",q),()=>h.removeEventListener("change",q)},[Wt]),G.useEffect(()=>{document.documentElement.classList.toggle("dark",Ut)},[Ut]),G.useEffect(()=>{const h=()=>{const q=window.innerWidth;zu(q>1100),be(q<768)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),G.useEffect(()=>{if(ct&&j)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[ct,j]),G.useEffect(()=>{var h;(h=Fe.current)==null||h.scrollTo(0,0)},[p]),G.useEffect(()=>{const h=Fe.current;if(!h)return;const q=P=>{const gt=P.target;gt.tagName==="IMG"&&gt.closest(".tome-content")&&$(gt.src)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[]),G.useEffect(()=>{const h=Fe.current;if(!h)return;const q=P=>{const gt=P.target.closest("a");if(!gt)return;const vt=gt.getAttribute("href");if(!vt||vt.startsWith("http://")||vt.startsWith("https://")||vt.startsWith("mailto:")||vt.startsWith("tel:")||vt.startsWith("//")||vt.startsWith("#"))return;P.preventDefault();let Qt=vt.replace(/^\.\//,"").replace(/^\//,"").replace(/\.mdx?$/,"").replace(/\/$/,"");if(L){const It=L.replace(/^\//,"").replace(/\/$/,"");It&&Qt.startsWith(It+"/")?Qt=Qt.slice(It.length+1):It&&Qt===It&&(Qt="index")}Qt||(Qt="index"),J(Qt)};return h.addEventListener("click",q),()=>h.removeEventListener("click",q)},[J,L]),G.useEffect(()=>{if(!k)return;const h=q=>{q.key==="Escape"&&$(null)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[k]);const Yt=r.toc,Mu=(Yt==null?void 0:Yt.depth)??3,Jn=(Yt==null?void 0:Yt.enabled)!==!1&&x,De=R.filter(h=>h.depth<=Mu),[ci,bl]=G.useState("");G.useEffect(()=>{if(!Jn||De.length<2)return;const h=Fe.current;if(!h)return;const q=setTimeout(()=>{const P=[];for(const vt of De){const Qt=h.querySelector(`#${CSS.escape(vt.id)}`);Qt&&P.push(Qt)}if(P.length===0)return;const gt=new IntersectionObserver(vt=>{const Qt=vt.filter(It=>It.isIntersecting).sort((It,Sn)=>It.boundingClientRect.top-Sn.boundingClientRect.top);Qt.length>0&&bl(Qt[0].target.id)},{root:h,rootMargin:"0px 0px -80% 0px",threshold:0});for(const vt of P)gt.observe(vt);sa.current=gt},100);return()=>{var P;clearTimeout(q),(P=sa.current)==null||P.disconnect(),sa.current=null}},[p,Jn,De.map(h=>h.id).join(",")]);const sa=G.useRef(null);G.useEffect(()=>{bl("")},[p]),G.useEffect(()=>{if(!Le.current||!s)return;const h=s.replace(/<h1[^>]*>[\s\S]*?<\/h1>\s*/,"");h!==ml.current&&(Le.current.innerHTML=h,ml.current=h)},[s]);const oi=G.useCallback((h,q)=>{h.preventDefault();const P=Fe.current;if(!P)return;const gt=P.querySelector(`#${CSS.escape(q)}`);gt&&(gt.scrollIntoView({behavior:"smooth",block:"start"}),bl(q))},[]);G.useEffect(()=>{const h=q=>{(q.metaKey||q.ctrlKey)&&q.key==="k"&&(q.preventDefault(),ot(!0)),q.key==="Escape"&&ot(!1)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]);const Ve=E.flatMap(h=>h.pages),te=Ve.findIndex(h=>h.id===p),ye=te>0?Ve[te-1]:null,ee=te<Ve.length-1?Ve[te+1]:null,yl=a1(E,p,B),Du=h=>ia(q=>q.includes(h)?q.filter(P=>P!==h):[...q,h]),Ou={"--bg":Pt.bg,"--sf":Pt.sf,"--sfH":Pt.sfH,"--bd":Pt.bd,"--tx":Pt.tx,"--tx2":Pt.tx2,"--txM":Pt.txM,"--ac":Pt.ac,"--acD":Pt.acD,"--acT":Pt.acT,"--cdBg":Pt.cdBg,"--cdTx":Pt.cdTx,"--sbBg":Pt.sbBg,"--hdBg":Pt.hdBg,"--font-heading":`"${oa.heading}", serif`,"--font-body":`"${oa.body}", sans-serif`,"--font-code":`"${oa.code}", monospace`},Wn=A,re=(Al=r.banner)==null?void 0:Al.link,bn=re?re.startsWith("#")||L&&re.startsWith(L+"/"):!1;return o.jsxs("div",{dir:Jt,className:"tome-grain",style:{...Ou,color:"var(--tx)",background:"var(--bg)",fontFamily:"var(--font-body)",minHeight:"100vh",overflow:"hidden"},children:[((ma=r.banner)==null?void 0:ma.text)&&!$t&&o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"var(--ac)",color:"#fff",padding:"8px 16px",fontSize:13,fontFamily:"var(--font-body)",fontWeight:500,textAlign:"center",width:"100vw",boxSizing:"border-box"},children:[r.banner.link?o.jsx("a",{href:bn&&re.startsWith("#")?L+"/"+re.slice(1):re,...bn?{}:{target:"_blank",rel:"noopener noreferrer"},style:{color:"#fff",textDecoration:"underline"},onClick:bn?h=>{h.preventDefault();const q=L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),P=re.startsWith("#")?re.slice(1):re.replace(new RegExp("^"+q+"/?"),"");J(P||"index")}:void 0,children:r.banner.text}):o.jsx("span",{children:r.banner.text}),r.banner.dismissible!==!1&&o.jsx("button",{onClick:()=>{Gt(!0);try{const h=Array.from(r.banner.text).reduce((q,P)=>(q<<5)-q+P.charCodeAt(0)|0,0).toString(36);localStorage.setItem("tome-banner-dismissed",h)}catch{}},"aria-label":"Dismiss banner",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",fontSize:16,lineHeight:1,padding:0,opacity:.8},children:"×"})]}),W&&((pa=r.search)==null?void 0:pa.provider)==="algolia"&&r.search.appId&&r.search.apiKey&&r.search.indexName?o.jsx(Im,{appId:r.search.appId,apiKey:r.search.apiKey,indexName:r.search.indexName,onNavigate:h=>{J(h),ot(!1)},onClose:()=>ot(!1),basePath:L}):W?o.jsx(u1,{allPages:bt,onNavigate:h=>{J(h),ot(!1)},onClose:()=>ot(!1),mobile:ct}):null,o.jsxs("div",{style:{display:"flex",flexDirection:zt?"row-reverse":"row",flex:1,height:(Ye=r.banner)!=null&&Ye.text&&!$t?"calc(100vh - 32px)":"100vh"},children:[ct&&j&&o.jsx("div",{onClick:()=>U(!1),style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"}}),w!=null&&w.Sidebar?o.jsx(w.Sidebar,{config:r,navigation:E,currentPageId:p,onNavigate:J,mobile:ct,sbOpen:j,setSbOpen:U,versioning:et,currentVersion:ut}):o.jsxs("aside",{style:{width:j?270:0,minWidth:j?270:0,background:"var(--sbBg)",[zt?"borderLeft":"borderRight"]:"1px solid var(--bd)",display:"flex",flexDirection:"column",transition:"width .2s, min-width .2s",overflow:"hidden",...ct?{position:"fixed",top:0,[zt?"right":"left"]:0,bottom:0,zIndex:201}:{}},children:[o.jsxs("a",{href:"/",style:{padding:"18px 20px",display:"flex",alignItems:"baseline",gap:6,borderBottom:"1px solid var(--bd)",textDecoration:"none",color:"inherit"},children:[o.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:22,fontWeight:700,fontStyle:"italic"},children:r.name}),o.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"var(--ac)",display:"inline-block"}})]}),o.jsx("div",{style:{padding:"12px 14px"},children:o.jsxs("button",{onClick:()=>{ot(!0),ct&&U(!1)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 12px",cursor:"pointer",color:"var(--txM)",fontSize:12.5,fontFamily:"var(--font-body)"},children:[o.jsx(cg,{}),o.jsx("span",{style:{flex:1,textAlign:zt?"right":"left"},children:"Search..."}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:9,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"2px 6px"},children:"⌘K"})]})}),o.jsx("nav",{style:{flex:1,overflow:"auto",padding:"4px 10px 20px"},children:E.map(h=>o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("button",{onClick:()=>Du(h.section),style:{display:"flex",alignItems:"center",gap:6,width:"100%",background:"none",border:"none",padding:"8px 10px",cursor:"pointer",borderRadius:2,color:"var(--txM)",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",fontFamily:"var(--font-code)"},children:[Kn.includes(h.section)?o.jsx(Vo,{}):o.jsx(Fd,{}),h.section]}),Kn.includes(h.section)&&o.jsx("div",{style:{[zt?"marginRight":"marginLeft"]:8,[zt?"borderRight":"borderLeft"]:"1px solid var(--bd)",[zt?"paddingRight":"paddingLeft"]:0},children:h.pages.map(q=>{const P=p===q.id;return o.jsxs("button",{onClick:()=>{J(q.id),ct&&U(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:zt?"right":"left",background:"none",border:"none",borderRadius:0,[zt?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",padding:"7px 14px",cursor:"pointer",color:P?"var(--ac)":"var(--tx2)",fontSize:13,fontWeight:P?500:400,fontFamily:"var(--font-body)",transition:"all .12s"},children:[q.title,q.badge&&(()=>{const gt={default:{bg:"var(--sf)",text:"var(--tx2)"},info:{bg:"rgba(59,130,246,0.15)",text:"rgb(59,130,246)"},success:{bg:"rgba(34,197,94,0.15)",text:"rgb(34,197,94)"},warning:{bg:"rgba(234,179,8,0.15)",text:"rgb(202,138,4)"},danger:{bg:"rgba(239,68,68,0.15)",text:"rgb(239,68,68)"}},vt=gt[q.badge.variant||"default"]||gt.default;return o.jsx("span",{style:{fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,marginLeft:6,whiteSpace:"nowrap",background:vt.bg,color:vt.text},children:q.badge.text})})()]},q.id)})})]},h.section))}),et&&ct&&o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid var(--bd)",display:"flex",gap:6},children:et.versions.map(h=>o.jsxs("button",{onClick:()=>{const q=h===et.current?"index":`${h}/index`;J(q)},style:{flex:1,padding:"3px 0",textAlign:"center",background:h===(ut||et.current)?"var(--acD)":"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,cursor:"pointer",color:h===(ut||et.current)?"var(--ac)":"var(--tx2)",fontSize:11,fontFamily:"var(--font-code)",fontWeight:h===et.current?600:400},children:[h,h===et.current?" (latest)":""]},h))}),o.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Wt==="auto"?o.jsx("button",{"aria-label":Ut?"Switch to light mode":"Switch to dark mode",onClick:()=>_e(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:Ut?o.jsx(Pd,{}):o.jsx($d,{})}):o.jsx("div",{}),o.jsxs("span",{style:{fontSize:11,color:"var(--txM)",letterSpacing:.2},children:["Built with ","♡"," by Tome"]}),o.jsx("span",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)"},children:"v0.3.2"})]})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w!=null&&w.Header?o.jsx(w.Header,{config:r,navigation:E,currentPageId:p,onNavigate:J,mobile:ct,sbOpen:j,setSbOpen:U,isDark:Ut,setDark:_e,versioning:et,currentVersion:ut,i18n:O,currentLocale:Y,onSearchOpen:()=>ot(!0),basePath:L}):o.jsxs("header",{style:{display:"flex",alignItems:"center",gap:ct?8:12,padding:ct?"8px 12px":"10px 24px",borderBottom:"1px solid var(--bd)",background:"var(--hdBg)",backdropFilter:"blur(12px)",maxWidth:"100vw",overflow:"visible",position:"relative",zIndex:200},children:[o.jsx("button",{"aria-label":j?"Close sidebar":"Open sidebar",onClick:()=>U(!j),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:j?o.jsx(Xm,{}):o.jsx(Qm,{})}),ct?o.jsx("span",{style:{fontSize:13,color:"var(--ac)",fontFamily:"var(--font-code)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((kt=E.flatMap(h=>h.pages).find(h=>h.id===p))==null?void 0:kt.title)||""}):o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-code)",fontSize:11,color:"var(--txM)",letterSpacing:".03em",flex:1},children:E.map(h=>{const q=h.pages.find(P=>P.id===p);return q?o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{children:h.section}),o.jsx(Fd,{}),o.jsx("span",{style:{color:"var(--ac)"},children:q.title})]},h.section):null})}),r.topNav&&r.topNav.length>0&&!ct&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.topNav.map(h=>{const q=h.href.startsWith("#")||L&&h.href.startsWith(L+"/"),P=!q;return o.jsxs("a",{href:q&&h.href.startsWith("#")?L+"/"+h.href.slice(1):h.href,...P?{target:"_blank",rel:"noopener noreferrer"}:{},onClick:q?gt=>{gt.preventDefault();const vt=h.href.startsWith("#")?h.href.slice(1):h.href.replace(new RegExp("^"+L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"/?"),"");J(vt)}:void 0,style:{display:"flex",alignItems:"center",gap:4,color:"var(--txM)",textDecoration:"none",fontSize:12,fontFamily:"var(--font-body)",fontWeight:500,transition:"color .15s"},onMouseOver:gt=>gt.currentTarget.style.color="var(--ac)",onMouseOut:gt=>gt.currentTarget.style.color="var(--txM)",children:[h.label,P&&o.jsx(Pm,{})]},h.label)}),o.jsx("span",{style:{width:1,height:16,background:"var(--bd)"}})]}),r.socialLinks&&r.socialLinks.length>0&&!ct&&o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:r.socialLinks.map(h=>o.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer","aria-label":h.label||h.platform,"data-testid":`social-link-${h.platform}`,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--tx2)",cursor:"pointer",transition:"color .15s"},onMouseOver:q=>q.currentTarget.style.color="var(--tx)",onMouseOut:q=>q.currentTarget.style.color="var(--tx2)",children:o.jsx(e1,{platform:h.platform,customIcon:h.icon})},h.url))}),ct&&Wt==="auto"&&o.jsx("button",{"aria-label":Ut?"Switch to light mode":"Switch to dark mode",onClick:()=>_e(h=>!h),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",flexShrink:0},children:Ut?o.jsx(Pd,{}):o.jsx($d,{})}),et&&!ct&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"version-switcher",onClick:()=>g(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)"},children:[o.jsx(Fm,{}),ut||et.current,o.jsx(Vo,{})]}),jt&&o.jsx("div",{"data-testid":"version-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:et.versions.map(h=>o.jsxs("button",{onClick:()=>{g(!1);const q=h===et.current?"index":`${h}/index`;J(q)},style:{display:"block",width:"100%",textAlign:"left",background:h===(ut||et.current)?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:h===(ut||et.current)?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)",fontWeight:h===et.current?600:400},children:[h,h===et.current?" (latest)":""]},h))})]}),O&&O.locales.length>1&&!ct&&o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("button",{"data-testid":"language-switcher",onClick:()=>N(h=>!h),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)"},children:[o.jsx($m,{}),((ae=O.localeNames)==null?void 0:ae[Y||O.defaultLocale])||Y||O.defaultLocale,o.jsx(Vo,{})]}),_&&o.jsx("div",{"data-testid":"language-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:O.locales.map(h=>{var It;const q=h===(Y||O.defaultLocale),P=((It=O.localeNames)==null?void 0:It[h])||h,gt=Y||O.defaultLocale;let vt=p;gt!==O.defaultLocale&&p.startsWith(`${gt}/`)&&(vt=p.slice(gt.length+1));const Qt=h===O.defaultLocale?vt:`${h}/${vt}`;return o.jsx("button",{onClick:()=>{N(!1),J(Qt)},style:{display:"block",width:"100%",textAlign:"left",background:q?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:q?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)",fontWeight:q?600:400},children:P},h)})})]})]}),Zn&&o.jsxs("div",{"data-testid":"old-version-banner",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"var(--acD)",borderBottom:"1px solid var(--bd)",padding:"8px 24px",fontSize:13,color:"var(--tx2)"},children:[o.jsxs("span",{children:["You're viewing docs for ",ut,"."]}),o.jsx("button",{onClick:()=>{J("index")},style:{background:"none",border:"none",color:"var(--ac)",cursor:"pointer",fontWeight:600,fontSize:13,fontFamily:"var(--font-body)",textDecoration:"underline"},children:"Switch to latest."})]}),o.jsxs("div",{ref:Fe,style:{flex:1,overflow:"auto",display:"flex"},children:[o.jsxs("main",{style:{flex:1,maxWidth:ct?"100%":760,padding:ct?"24px 16px 60px":"40px 48px 80px",margin:"0 auto",minWidth:0},children:[yl.length>0&&o.jsx("nav",{"aria-label":"Breadcrumbs","data-testid":"breadcrumbs",style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--tx2)",marginBottom:8},children:yl.map((h,q)=>o.jsxs(ig.Fragment,{children:[q>0&&o.jsx("span",{style:{color:"var(--tx2)",opacity:.5},children:"›"}),q<yl.length-1&&h.href!==null?o.jsx("a",{href:h.href,onClick:P=>{P.preventDefault();const gt=E.flatMap(vt=>vt.pages).find(vt=>vt.urlPath===h.href);gt&&J(gt.id)},style:{color:"var(--tx2)",textDecoration:"none",cursor:"pointer"},children:h.label}):o.jsx("span",{style:q===yl.length-1?{color:"var(--tx)"}:void 0,children:h.label})]},q))}),o.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:ct?26:38,fontWeight:400,fontStyle:"italic",lineHeight:1.15,marginBottom:8},children:B}),pt&&o.jsx("div",{"data-testid":"draft-banner",style:{background:"#fef3c7",color:"#92400e",padding:"8px 16px",borderRadius:6,fontSize:13,marginBottom:16},children:"Draft — This page is only visible in development"}),H&&o.jsx("p",{style:{fontSize:16,color:"var(--tx2)",lineHeight:1.6,marginBottom:32},children:H}),o.jsx("div",{style:{borderTop:"1px solid var(--bd)",paddingTop:28},children:F&&F.length>0?o.jsx(l1,{entries:F}):Wn?o.jsx("div",{className:"tome-content",children:o.jsx(Wn,{components:D||{}})}):o.jsx("div",{className:"tome-content",ref:Le})}),w!=null&&w.PageFooter?o.jsx(w.PageFooter,{editUrl:V,lastUpdated:C,currentPageId:p,prev:ye,next:ee,onNavigate:J,mobile:ct}):o.jsxs(o.Fragment,{children:[(V||C)&&o.jsxs("div",{style:{marginTop:40,display:"flex",flexDirection:ct?"column":"row",alignItems:ct?"flex-start":"center",justifyContent:"space-between",gap:ct?8:16},children:[V&&o.jsx("div",{"data-testid":"edit-page-link",children:o.jsxs("a",{href:V,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,color:"var(--txM)",textDecoration:"none",fontSize:13,fontFamily:"var(--font-body)",transition:"color .15s"},onMouseOver:h=>h.currentTarget.style.color="var(--ac)",onMouseOut:h=>h.currentTarget.style.color="var(--txM)",children:[o.jsx(Vm,{})," Edit this page on GitHub"]})}),C&&o.jsxs("div",{"data-testid":"last-updated",style:{fontSize:12,color:"var(--txM)",fontFamily:"var(--font-body)"},children:["Last updated ",Zm(C)]})]}),o.jsx("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:24,padding:"12px 0"},children:at[p]?o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Thanks for your feedback!"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Was this helpful?"}),o.jsx("button",{onClick:()=>{ht(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"up")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👍"}),o.jsx("button",{onClick:()=>{ht(h=>({...h,[p]:!0}));try{localStorage.setItem(`tome-feedback-${p}`,"down")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👎"})]})}),o.jsxs("div",{style:{display:"flex",flexDirection:ct?"column":"row",justifyContent:"space-between",marginTop:16,paddingTop:24,borderTop:"1px solid var(--bd)",gap:ct?12:16},children:[ye?o.jsxs("button",{onClick:()=>J(ye.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[zt?o.jsx(eg,{}):o.jsx(tg,{})," ",ye.title]}):o.jsx("div",{}),ee?o.jsxs("button",{onClick:()=>J(ee.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[ee.title," ",zt?o.jsx(tg,{}):o.jsx(eg,{})]}):o.jsx("div",{})]})]})]}),w!=null&&w.Toc?Jn&&De.length>=2&&pl&&o.jsx(w.Toc,{headings:De,activeHeadingId:ci,onScrollToHeading:oi}):Jn&&De.length>=2&&pl&&o.jsxs("aside",{"data-testid":"toc-sidebar",style:{width:200,padding:zt?"40px 0 40px 16px":"40px 16px 40px 0",position:"sticky",top:0,alignSelf:"flex-start",flexShrink:0},children:[o.jsx("div",{style:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",color:"var(--txM)",marginBottom:12,fontFamily:"var(--font-code)"},children:"On this page"}),o.jsx("nav",{"aria-label":"Table of contents",style:{[zt?"borderRight":"borderLeft"]:"1px solid var(--bd)",[zt?"paddingRight":"paddingLeft"]:0},children:De.map((h,q)=>{const P=ci===h.id;return o.jsx("a",{href:`#${h.id}`,onClick:gt=>oi(gt,h.id),"data-testid":`toc-link-${h.id}`,style:{display:"block",fontSize:12,color:P?"var(--ac)":"var(--txM)",fontWeight:P?500:400,textDecoration:"none",padding:"4px 12px",[zt?"paddingRight":"paddingLeft"]:12+(h.depth-2)*12,lineHeight:1.4,transition:"color .15s, font-weight .15s",[zt?"borderRight":"borderLeft"]:P?"2px solid var(--ac)":"2px solid transparent",[zt?"marginRight":"marginLeft"]:-1},children:h.text},q)})})]})]})]})]}),(w==null?void 0:w.Footer)&&o.jsx(w.Footer,{config:r,navigation:E,currentPageId:p,onNavigate:J}),(($e=r.ai)==null?void 0:$e.enabled)&&o.jsx(Lm,{provider:r.ai.provider||"anthropic",model:r.ai.model,apiKey:typeof __TOME_AI_API_KEY__<"u"&&__TOME_AI_API_KEY__?__TOME_AI_API_KEY__:void 0,context:(Z==null?void 0:Z.map(h=>`## ${h.title}
${h.content}`).join(`

`))??bt.map(h=>`- ${h.title}${h.description?": "+h.description:""}`).join(`
`)}),k&&o.jsx("div",{onClick:()=>$(null),style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",cursor:"zoom-out"},children:o.jsx("img",{src:k,alt:"",style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:4,boxShadow:"0 16px 64px rgba(0,0,0,0.4)"}})})]})}function u1({allPages:r,onNavigate:E,onClose:p,mobile:s}){const[A,D]=G.useState(""),[B,H]=G.useState([]),[R,x]=G.useState(0),[V,C]=G.useState(null),F=G.useRef(null),J=G.useRef(void 0);G.useEffect(()=>{Jm().then(O=>C(!!O)),setTimeout(()=>{var O;return(O=F.current)==null?void 0:O.focus()},50)},[]);const bt=G.useCallback(O=>{if(!O.trim())return[];const Y=O.toLowerCase();return r.filter(Z=>Z.title.toLowerCase().includes(Y)||(Z.description||"").toLowerCase().includes(Y)).slice(0,8).map(Z=>({id:Z.id,title:Z.title,excerpt:Z.description}))},[r]),et=G.useCallback(async O=>{var Z;if(!O.trim()){H([]),x(0);return}const Y=aa;if(Y)try{const L=await Y.search(O),pt=[];for(const At of L.results.slice(0,8)){const w=await At.data(),Jt=(w.url||"").replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index";pt.push({id:Jt,title:((Z=w.meta)==null?void 0:Z.title)||Jt,excerpt:w.excerpt||void 0})}H(pt),x(0);return}catch{}H(bt(O)),x(0)},[bt]);G.useEffect(()=>(J.current&&clearTimeout(J.current),J.current=setTimeout(()=>et(A),120),()=>{J.current&&clearTimeout(J.current)}),[A,et]);const ut=G.useCallback(O=>{O.key==="ArrowDown"?(O.preventDefault(),x(Y=>Math.min(Y+1,B.length-1))):O.key==="ArrowUp"?(O.preventDefault(),x(Y=>Math.max(Y-1,0))):O.key==="Enter"&&B.length>0&&(O.preventDefault(),E(B[R].id))},[B,R,E]);return o.jsx("div",{onClick:p,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:s?"stretch":"flex-start",justifyContent:"center",paddingTop:s?0:"12vh"},children:o.jsxs("div",{onClick:O=>O.stopPropagation(),style:{background:"var(--sf)",border:s?"none":"1px solid var(--bd)",borderRadius:s?0:2,width:"100%",maxWidth:s?"100%":520,boxShadow:s?"none":"0 24px 80px rgba(0,0,0,0.4)",overflow:"hidden",display:"flex",flexDirection:"column",...s?{height:"100%"}:{}},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid var(--bd)"},children:[o.jsx(cg,{}),o.jsx("input",{ref:F,value:A,onChange:O=>D(O.target.value),onKeyDown:ut,placeholder:"Search documentation...",style:{flex:1,background:"none",border:"none",outline:"none",color:"var(--tx)",fontSize:15,fontFamily:"var(--font-body)"}}),o.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)",background:"var(--cdBg)",padding:"2px 6px",borderRadius:2,border:"1px solid var(--bd)"},children:"ESC"})]}),B.length>0&&o.jsx("div",{style:{padding:6,maxHeight:s?"none":360,overflow:"auto",flex:s?1:void 0},children:B.map((O,Y)=>o.jsxs("button",{onClick:()=>E(O.id),style:{display:"block",width:"100%",textAlign:"left",background:Y===R?"var(--acD)":"none",border:"none",borderRadius:2,padding:"10px 14px",cursor:"pointer",color:"var(--tx)",fontFamily:"var(--font-body)"},onMouseEnter:()=>x(Y),children:[o.jsx("div",{style:{fontWeight:500,fontSize:14,marginBottom:2},children:O.title}),O.excerpt&&o.jsx("div",{style:{fontSize:12,color:"var(--txM)",lineHeight:1.3},dangerouslySetInnerHTML:{__html:O.excerpt}})]},O.id+Y))}),A&&!B.length&&o.jsx("div",{style:{padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No results found"}),V===!1&&A&&B.length>0&&o.jsx("div",{style:{padding:"6px 18px 10px",fontSize:11,color:"var(--txM)",textAlign:"center"},children:"Showing title matches. Build your site for full-text search."})]})})}function og(r,E,p){let s=r;E&&s.startsWith(E)&&(s=s.slice(E.length));const A=s.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"").replace(/\/$/,"")||"index";return p.find(B=>B.id===A)?A:null}function c1(r,E,p){const s=p.find(A=>A.id===r);return s?E+s.urlPath:E+"/"+r}function o1(r,E){if(!r||!E)return;const{repo:p,branch:s="main",dir:A=""}=r,D=A?`${A.replace(/\/$/,"")}/`:"";return`https://github.com/${p}/edit/${s}/${D}${E}`}function s1(r,E,p,s,A){var H;const D=A(r,s,p);if(D)return D;const B=E.startsWith("#")?E.slice(1):E;return B&&p.some(R=>R.id===B)?B:((H=p[0])==null?void 0:H.id)||"index"}async function sg(r,E,p){try{const s=E.find(D=>D.id===r),A=await p(r);return s!=null&&s.isMdx&&A.meta?{isMdx:!0,component:A.default,frontmatter:A.meta.frontmatter,headings:A.meta.headings}:A.default?A.isChangelog&&A.changelogEntries?{isMdx:!1,...A.default,changelogEntries:A.changelogEntries}:{isMdx:!1,...A.default}:null}catch(s){return console.error(`Failed to load page: ${r}`,s),null}}function f1(r,E){return(r==null?void 0:r.version)||void 0}const ui={name:"Get笔记帮助中心",basePath:"/getbiji-docs-v3",theme:{preset:"amber",accent:"#333333",mode:"light",fonts:{heading:"Inter",body:"Inter",code:"JetBrains Mono"}},navigation:[{group:"开始使用",pages:["getting-started/download","getting-started/quickstart"]},{group:"社区精选",pages:["use-cases/index","testimonials/index"]},{group:"开口记",pages:["recording/voice-memo","recording/meeting","recording/classroom","recording/screen-record"]},{group:"随手拍",pages:["recording/photo","recording/book-scan"]},{group:"一键存",pages:["recording/link","recording/import-media"]},{group:"录音增强",pages:["recording/voiceprint","recording/vocabulary","recording/voice-command"]},{group:"知识库",pages:["knowledge-base/create","knowledge-base/upload","knowledge-base/subscribe-live","knowledge-base/subscribe-creator","knowledge-base/add-notes","knowledge-base/share"]},{group:"GetSeed 录音卡",pages:["getseed/index","getseed/quickstart","getseed/device","getseed/liubixiefu","getseed/sprout","getseed/faq"]},{group:"快捷操作",pages:["shortcuts/siri","shortcuts/ios-shortcuts","shortcuts/widget"]},{group:"开发者",pages:["developer/index"]},{group:"常见问题",pages:["faq/index"]},{group:"版本更新",pages:["changelog/index"]}],search:{provider:"local"},toc:{enabled:!0,depth:3},math:!1,strictLinks:!1,lastUpdated:!0,redirects:[]},Vn=[{id:"changelog",filePath:"changelog/index.md",urlPath:"/changelog",frontmatter:{title:"版本更新",hidden:!1,draft:!1},isMdx:!1},{id:"developer",filePath:"developer/index.md",urlPath:"/developer",frontmatter:{title:"开发者",description:"通过 API 把 Get笔记的知识库能力接入你的应用，支持直接调用、Dify、扣子等多种方式",hidden:!1,draft:!1},isMdx:!1},{id:"faq",filePath:"faq/index.md",urlPath:"/faq",frontmatter:{title:"常见问题",description:"使用 Get笔记时遇到问题？这里有最常见问题的解答",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/device",filePath:"getseed/device.md",urlPath:"/getseed/device",frontmatter:{title:"设备指南",description:"GetSeed 录音卡的设备清单、按键说明、指示灯含义、充电方式、参数规格、开关机和重置操作",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/faq",filePath:"getseed/faq.md",urlPath:"/getseed/faq",frontmatter:{title:"常见问题",description:"GetSeed 录音卡的常见问题解答：设备连接、录音使用、充电续航、通话录音、会员权益、隐私安全等",hidden:!1,draft:!1},isMdx:!1},{id:"getseed",filePath:"getseed/index.md",urlPath:"/getseed",frontmatter:{title:"功能说明",description:"GetSeed 录音卡的核心功能介绍：一键 MARK 标记重点、录音中拍照随手记、闪念灵感记录、固件升级",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/liubixiefu",filePath:"getseed/liubixiefu.md",urlPath:"/getseed/liubixiefu",frontmatter:{title:"AI 柳比歇夫记日记",description:"让 AI 自动把你的每一天整理成客观日记，无需手动记录，支持对话补充和长期洞察",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/quickstart",filePath:"getseed/quickstart.md",urlPath:"/getseed/quickstart",frontmatter:{title:"快速使用",description:"GetSeed 录音卡开箱到上手的完整指南：添加设备、开始录音、闪念记录、通话录音、录音同步、生成笔记",hidden:!1,draft:!1},isMdx:!1},{id:"getseed/sprout",filePath:"getseed/sprout.md",urlPath:"/getseed/sprout",frontmatter:{title:"笔记发芽",description:"AI 深度理解你的录音内容，跨领域跨学科生成关联报告，帮你从记录中发现新的认知和连接",hidden:!1,draft:!1},isMdx:!1},{id:"getting-started/download",filePath:"getting-started/download.md",urlPath:"/getting-started/download",frontmatter:{title:"下载安装",description:"Get笔记支持 iOS、Android、微信小程序和网页端，一分钟完成安装，马上开始记笔记",hidden:!1,draft:!1},isMdx:!1},{id:"getting-started/quickstart",filePath:"getting-started/quickstart.md",urlPath:"/getting-started/quickstart",frontmatter:{title:"快速上手",description:"5 分钟学会 Get笔记的四种记笔记方式：语音、会议录音、拍照、保存链接，还能搜索和追加笔记",hidden:!1,draft:!1},isMdx:!1},{id:"index",filePath:"index.md",urlPath:"/",frontmatter:{title:"Get笔记帮助中心",description:"让记笔记，找笔记，用笔记变得简单",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/add-notes",filePath:"knowledge-base/add-notes.md",urlPath:"/knowledge-base/add-notes",frontmatter:{title:"将笔记加入知识库",description:"把已有的录音、文字、图片、链接笔记添加到知识库，统一管理和 AI 搜索",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/create",filePath:"knowledge-base/create.md",urlPath:"/knowledge-base/create",frontmatter:{title:"创建知识库",description:"创建一个知识库，把笔记、文件、直播、博主内容集中管理，支持 AI 搜索和问答",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/share",filePath:"knowledge-base/share.md",urlPath:"/knowledge-base/share",frontmatter:{title:"分享和团队管理",description:"将知识库公开分享或设为团队模式，支持成员管理、权限分配和订阅他人知识库",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/subscribe-creator",filePath:"knowledge-base/subscribe-creator.md",urlPath:"/knowledge-base/subscribe-creator",frontmatter:{title:"订阅博主",description:"订阅抖音博主，新视频自动变笔记，每天早上更新，不错过任何精彩内容",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/subscribe-live",filePath:"knowledge-base/subscribe-live.md",urlPath:"/knowledge-base/subscribe-live",frontmatter:{title:"订阅直播",description:"订阅得到 App 或视频号直播，AI 自动全程记录并生成内容总结和章节纪要",hidden:!1,draft:!1},isMdx:!1},{id:"knowledge-base/upload",filePath:"knowledge-base/upload.md",urlPath:"/knowledge-base/upload",frontmatter:{title:"上传文件",description:"把 PDF、Word、PPT 文件上传到知识库，AI 自动分析内容，支持搜索和问答",hidden:!1,draft:!1},isMdx:!1},{id:"recording/book-scan",filePath:"recording/book-scan.md",urlPath:"/recording/book-scan",frontmatter:{title:"智能拍书",description:"拍下纸质书页自动识别书籍，3 秒变成数字笔记并归类到对应书籍",hidden:!1,draft:!1},isMdx:!1},{id:"recording/classroom",filePath:"recording/classroom.md",urlPath:"/recording/classroom",frontmatter:{title:"课堂录音",description:"上课录音自动转文字，AI 标注考点重点，下课即得一份完整学霸笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/import-media",filePath:"recording/import-media.md",urlPath:"/recording/import-media",frontmatter:{title:"导入音视频",description:"导入手机中已有的录音或视频文件，AI 自动转写文字并整理成结构化笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/link",filePath:"recording/link.md",urlPath:"/recording/link",frontmatter:{title:"链接保存",description:"复制公众号、抖音、B 站、小红书等链接粘贴进来，AI 自动读取内容并生成精华总结笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/meeting",filePath:"recording/meeting.md",urlPath:"/recording/meeting",frontmatter:{title:"会议录音",description:"手机放桌上录音，AI 自动区分发言人并生成会议纪要",hidden:!1,draft:!1},isMdx:!1},{id:"recording/photo",filePath:"recording/photo.md",urlPath:"/recording/photo",frontmatter:{title:"拍照记笔记",description:"拍几张照片，AI 自动识别文字并整理成条理清晰的笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/screen-record",filePath:"recording/screen-record.md",urlPath:"/recording/screen-record",frontmatter:{title:"手机内录",description:"手机在播什么就录什么，后台录制视频、播客、网课的声音，自动转文字生成笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/vocabulary",filePath:"recording/vocabulary.md",urlPath:"/recording/vocabulary",frontmatter:{title:"语音词库",description:"添加专有名词、人名、术语，让 AI 录音转文字更准确",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voice-command",filePath:"recording/voice-command.md",urlPath:"/recording/voice-command",frontmatter:{title:"语音口令",description:"录音时说一句口令词，AI 自动捕捉并标记重点内容",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voice-memo",filePath:"recording/voice-memo.md",urlPath:"/recording/voice-memo",frontmatter:{title:"语音速记",description:"对着手机说话，AI 自动转文字、去口头禅、分段落，说完即得一篇干净笔记",hidden:!1,draft:!1},isMdx:!1},{id:"recording/voiceprint",filePath:"recording/voiceprint.md",urlPath:"/recording/voiceprint",frontmatter:{title:"声纹识别",description:"录入你的声音后，AI 在录音笔记中自动标记你的发言",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/ios-shortcuts",filePath:"shortcuts/ios-shortcuts.md",urlPath:"/shortcuts/ios-shortcuts",frontmatter:{title:"快捷指令",description:"用 iPhone 操作按钮或轻点背面，一按就能打开 Get笔记开始录音",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/siri",filePath:"shortcuts/siri.md",urlPath:"/shortcuts/siri",frontmatter:{title:"Siri 唤起",description:"喊一声 Siri 就能开始录音、写笔记、搜笔记，双手不用碰手机",hidden:!1,draft:!1},isMdx:!1},{id:"shortcuts/widget",filePath:"shortcuts/widget.md",urlPath:"/shortcuts/widget",frontmatter:{title:"桌面小组件",description:"把 Get笔记放到手机桌面，点一下就能录音、写笔记、搜笔记，不用打开 App",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/caojiang",filePath:"testimonials/caojiang.md",urlPath:"/testimonials/caojiang",frontmatter:{title:"曹将：看完罗振宇跨年演讲，种草了一个软件",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials",filePath:"testimonials/index.md",urlPath:"/testimonials",frontmatter:{title:"达人推荐",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/muyezhiyue",filePath:"testimonials/muyezhiyue.md",urlPath:"/testimonials/muyezhiyue",frontmatter:{title:"暮野之月：得到出品的Get笔记App来了，免费版已够用",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/wangshuyi",filePath:"testimonials/wangshuyi.md",urlPath:"/testimonials/wangshuyi",frontmatter:{title:"王树义老师：得到 Get 笔记 AI 手机应用，好用吗？",hidden:!1,draft:!1},isMdx:!1},{id:"testimonials/xitongfeilun",filePath:"testimonials/xitongfeilun.md",urlPath:"/testimonials/xitongfeilun",frontmatter:{title:"系统飞轮：看完罗振宇跨年演讲，种草了一个笔记软件",hidden:!1,draft:!1},isMdx:!1},{id:"use-cases",filePath:"use-cases/index.md",urlPath:"/use-cases",frontmatter:{title:"用户案例",hidden:!1,draft:!1},isMdx:!1}],r1=[{section:"开始使用",pages:[{title:"下载安装",id:"getting-started/download",urlPath:"/getting-started/download"},{title:"快速上手",id:"getting-started/quickstart",urlPath:"/getting-started/quickstart"}]},{section:"社区精选",pages:[{title:"用户案例",id:"use-cases",urlPath:"/use-cases"},{title:"达人推荐",id:"testimonials",urlPath:"/testimonials"}]},{section:"开口记",pages:[{title:"语音速记",id:"recording/voice-memo",urlPath:"/recording/voice-memo"},{title:"会议录音",id:"recording/meeting",urlPath:"/recording/meeting"},{title:"课堂录音",id:"recording/classroom",urlPath:"/recording/classroom"},{title:"手机内录",id:"recording/screen-record",urlPath:"/recording/screen-record"}]},{section:"随手拍",pages:[{title:"拍照记笔记",id:"recording/photo",urlPath:"/recording/photo"},{title:"智能拍书",id:"recording/book-scan",urlPath:"/recording/book-scan"}]},{section:"一键存",pages:[{title:"链接保存",id:"recording/link",urlPath:"/recording/link"},{title:"导入音视频",id:"recording/import-media",urlPath:"/recording/import-media"}]},{section:"录音增强",pages:[{title:"声纹识别",id:"recording/voiceprint",urlPath:"/recording/voiceprint"},{title:"语音词库",id:"recording/vocabulary",urlPath:"/recording/vocabulary"},{title:"语音口令",id:"recording/voice-command",urlPath:"/recording/voice-command"}]},{section:"知识库",pages:[{title:"创建知识库",id:"knowledge-base/create",urlPath:"/knowledge-base/create"},{title:"上传文件",id:"knowledge-base/upload",urlPath:"/knowledge-base/upload"},{title:"订阅直播",id:"knowledge-base/subscribe-live",urlPath:"/knowledge-base/subscribe-live"},{title:"订阅博主",id:"knowledge-base/subscribe-creator",urlPath:"/knowledge-base/subscribe-creator"},{title:"将笔记加入知识库",id:"knowledge-base/add-notes",urlPath:"/knowledge-base/add-notes"},{title:"分享和团队管理",id:"knowledge-base/share",urlPath:"/knowledge-base/share"}]},{section:"GetSeed 录音卡",pages:[{title:"功能说明",id:"getseed",urlPath:"/getseed"},{title:"快速使用",id:"getseed/quickstart",urlPath:"/getseed/quickstart"},{title:"设备指南",id:"getseed/device",urlPath:"/getseed/device"},{title:"AI 柳比歇夫记日记",id:"getseed/liubixiefu",urlPath:"/getseed/liubixiefu"},{title:"笔记发芽",id:"getseed/sprout",urlPath:"/getseed/sprout"},{title:"常见问题",id:"getseed/faq",urlPath:"/getseed/faq"}]},{section:"快捷操作",pages:[{title:"Siri 唤起",id:"shortcuts/siri",urlPath:"/shortcuts/siri"},{title:"快捷指令",id:"shortcuts/ios-shortcuts",urlPath:"/shortcuts/ios-shortcuts"},{title:"桌面小组件",id:"shortcuts/widget",urlPath:"/shortcuts/widget"}]},{section:"开发者",pages:[{title:"开发者",id:"developer",urlPath:"/developer"}]},{section:"常见问题",pages:[{title:"常见问题",id:"faq",urlPath:"/faq"}]},{section:"版本更新",pages:[{title:"版本更新",id:"changelog",urlPath:"/changelog"}]}],Zo=null,d1={changelog:()=>it(()=>import("./changelog-BxsIMpOy.js"),[]),developer:()=>it(()=>import("./developer-sGn-9uBl.js"),[]),faq:()=>it(()=>import("./faq-DCD_EfHJ.js"),[]),"getseed/device":()=>it(()=>import("./device-DaHzLX-x.js"),[]),"getseed/faq":()=>it(()=>import("./faq-D-L4zTiv.js"),[]),getseed:()=>it(()=>import("./getseed-Ds9KGXxE.js"),[]),"getseed/liubixiefu":()=>it(()=>import("./liubixiefu-D5mP8jK0.js"),[]),"getseed/quickstart":()=>it(()=>import("./quickstart-awDZEwAV.js"),[]),"getseed/sprout":()=>it(()=>import("./sprout-huDqXZg6.js"),[]),"getting-started/download":()=>it(()=>import("./download-Cw7pMjic.js"),[]),"getting-started/quickstart":()=>it(()=>import("./quickstart-CzdKeqOy.js"),[]),index:()=>it(()=>import("./index-BHc--1il.js"),[]),"knowledge-base/add-notes":()=>it(()=>import("./add-notes-D_15chV-.js"),[]),"knowledge-base/create":()=>it(()=>import("./create-D06oSB17.js"),[]),"knowledge-base/share":()=>it(()=>import("./share-C02rvkWf.js"),[]),"knowledge-base/subscribe-creator":()=>it(()=>import("./subscribe-creator-B2WMz419.js"),[]),"knowledge-base/subscribe-live":()=>it(()=>import("./subscribe-live-jVMiT3jx.js"),[]),"knowledge-base/upload":()=>it(()=>import("./upload-TDS96mFR.js"),[]),"recording/book-scan":()=>it(()=>import("./book-scan-BK4f8pn6.js"),[]),"recording/classroom":()=>it(()=>import("./classroom-moOU0k0J.js"),[]),"recording/import-media":()=>it(()=>import("./import-media-3rdoJ0df.js"),[]),"recording/link":()=>it(()=>import("./link-DcpxC1Eo.js"),[]),"recording/meeting":()=>it(()=>import("./meeting-CK3NUcSw.js"),[]),"recording/photo":()=>it(()=>import("./photo-BTZx8-fG.js"),[]),"recording/screen-record":()=>it(()=>import("./screen-record-NxOUFrcj.js"),[]),"recording/vocabulary":()=>it(()=>import("./vocabulary-CKufbPNI.js"),[]),"recording/voice-command":()=>it(()=>import("./voice-command-CPr5EKAY.js"),[]),"recording/voice-memo":()=>it(()=>import("./voice-memo-BRJk7jNT.js"),[]),"recording/voiceprint":()=>it(()=>import("./voiceprint-B9sSh4_K.js"),[]),"shortcuts/ios-shortcuts":()=>it(()=>import("./ios-shortcuts-JY62-SAa.js"),[]),"shortcuts/siri":()=>it(()=>import("./siri-CPlOPXyy.js"),[]),"shortcuts/widget":()=>it(()=>import("./widget-CZgJxeYQ.js"),[]),"testimonials/caojiang":()=>it(()=>import("./caojiang--_LNk75v.js"),[]),testimonials:()=>it(()=>import("./testimonials-BkjFidC1.js"),[]),"testimonials/muyezhiyue":()=>it(()=>import("./muyezhiyue-B8FJ5BNI.js"),[]),"testimonials/wangshuyi":()=>it(()=>import("./wangshuyi-qr7zvimH.js"),[]),"testimonials/xitongfeilun":()=>it(()=>import("./xitongfeilun-BMiCe5c0.js"),[]),"use-cases":()=>it(()=>import("./use-cases-BesB7-C3.js"),[])};function fg(r){const E=d1[r];return E?E():Promise.resolve({default:null})}const g1=[{id:"changelog",title:"版本更新",content:`
# 版本更新

Get笔记 各平台更新记录。

---

## iOS

### v2.6.5（2026-03-11）🆕
- 复制录音文字记录时，支持选择「原文版」或「AI优化版」
- 录音卡连接体验优化，新增使用说明和故障排查提醒
- 录音卡新增电量说明、指示灯状态说明，低电量时自动提醒充电
- 修复若干已知问题

### v2.6.3 🎉
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

### v2.0.0
**全新AI助手**
- 连续对话
- 得到内容接入
- Get日报自动生成

---

## Android

功能与 iOS 基本同步，持续优化中。

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

![Get笔记官方交流群二维码，微信扫码即可加入](/getbiji-docs-v3/images/NvqGbWNRxo44nxx9UbBclhsZnEb.png)
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

![充电线连接示意图，磁吸端对准录音卡充电接口，Type-C 端插入充电头](/getbiji-docs-v3/images/UerQbQQ2voFfpBxQ1mecliFGnue.png)

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

![笔记详情页，展示 AI 自动生成的 MARK 重点摘要列表，每个标记时刻对应一段总结](/getbiji-docs-v3/images/XfwHbAMoSoyeVCxmWfGcwrIPnHf.png)

长按标记的文字区域，可以复制或删除。

![长按 MARK 摘要文字后弹出操作菜单，包含复制和删除选项](/getbiji-docs-v3/images/Tzdbbh0FwoAPOBxqAjBcoo83nAd.png)

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

![App 录音进行中界面，底部显示拍照和随手记按钮，录音状态持续进行](/getbiji-docs-v3/images/INPUbWX29oT39Rxm0Kmc8bIFnJc.png)

![录音中拍照操作界面，展示拍摄白板或 PPT 的场景](/getbiji-docs-v3/images/WPa2bC9YOoIka7xP9TscESxlnyf.png)

**第三步：查看整合后的笔记**

生成笔记后，拍的图片会按时间顺序插入到文字记录中。长按图片或文字区域，可以重新上传图片或编辑文字。

![生成的笔记详情页，文字和图片按时间顺序穿插排列，展示完整的录音+拍照记录](/getbiji-docs-v3/images/RGSNbtc4hoC2yqxrOaecb9sFn4b.png)

---

## 闪念灵感记录

突然有个想法？长按 MARK 键说出来，松开就自动生成一条笔记。AI 还会帮你润色，去掉口水词。

### 怎么用

**第一步：长按 MARK 键开始说**

在录音开关**关闭**的状态下，长按 MARK 键不放，卡片振动一次，开始录音。边按边说出你的想法。

![录音卡正面，手指长按 MARK 键，指示灯红灯常亮表示正在记录闪念](/getbiji-docs-v3/images/H31kbaihiopGjZx356acbqEenOg.png)

**第二步：松开按键，自动生成笔记**

松开 MARK 键，卡片振动两次，录音结束。同步到 App 后自动生成闪念笔记，笔记列表中带有 ⚡ 标识。

![笔记列表页面，闪念笔记条目左侧带有闪电标识，与普通录音笔记区分](/getbiji-docs-v3/images/EMSBb6dI1oiCvexxrsmcB38wn21.png)

**AI 自动润色效果**

AI 会智能润色，去除口水词，还能识别 12 种方言：中文、英语、粤语、四川话、陕西话、河南话、上海话、湖南话、湖北话、安徽话、闽南话、潮汕话。

![方言识别设置界面，展示支持的 12 种语言和方言选项列表](/getbiji-docs-v3/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.png)

| 润色前 | 润色后 |
|--------|--------|
| ![润色前的闪念笔记，包含口水词和不通顺的口语表达](/getbiji-docs-v3/images/MO0lbekSioUApbxneGkczecFnzd.png) | ![润色后的闪念笔记，语句通顺流畅，口水词已去除](/getbiji-docs-v3/images/ZwsCbmaNnoMHdpx0662cRCgHnCd.png) |

---

## 固件升级

固件就是录音卡的「大脑程序」。和手机更新系统一样，GetSeed 也需要偶尔升级固件来获得新功能和优化。

### 怎么用

**第一步：等待升级提示**

打开 Get笔记 App，确保录音卡已通过蓝牙连接。如果有新固件，进入 GetSeed 录音卡详情页时会弹窗提示。

![App 中弹出固件升级提示弹窗，显示新版本号和更新内容，底部有「立即更新」按钮](/getbiji-docs-v3/images/A4WTb6x4FoPhXxxAeU9cjw9fn7b.png)

**第二步：点击「立即更新」**

点击后，新版本会先传输到录音卡（传输中录音卡红蓝灯交替闪烁），然后自动升级并重启。整个过程大约 3-5 分钟。

![固件升级进度页面，显示传输进度条和当前升级状态](/getbiji-docs-v3/images/UuTmbvRGaoWXsRxIWKucjjOZn6g.png)

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

![GetSeed 录音卡详情页底部，显示「AI 柳比歇夫记日记」入口按钮，点击进入日记功能](/getbiji-docs-v3/images/J62ObaThqoMobExiiKzcvE0Rnne.png)

### 第三步：正常使用录音卡

日常使用录音卡录音，录完后连接 App 会自动上传并生成笔记。AI 柳比歇夫会自动从笔记中提取信息，整理进当天的日记。

![AI 柳比歇夫日记页面，展示自动从录音笔记中提取的当日活动记录和时间线](/getbiji-docs-v3/images/IxYEbg9OEo4pQ7xXtjCcDHxgn8L.png)

### 第四步：对话补充日记（可选）

随时通过对话方式补充或更新日记——比如告诉它「下午去跑了半小时步」，它就会帮你记上。

![与 AI 柳比歇夫的对话界面，用户发送文字补充日记内容，AI 回复确认已添加](/getbiji-docs-v3/images/VSY3bHTYEoHzQ8xKiLxcfqkpnMb.png)

### 第五步：查看日记

每天结束后查看 AI 自动生成的日记，记录了你做了什么、每件事花了多久。

![AI 柳比歇夫生成的完整日记页面，按时间顺序列出当天所有活动和持续时长](/getbiji-docs-v3/images/V217bylFJouExzxGbJhchIuZnwd.png)

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

![录音卡指示灯亮白灯闪烁，表示设备已开启并等待连接](/getbiji-docs-v3/images/SgVPbGVZ1oGKGFxTNNbcgr5RnNv.png)

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

![录音文件同步进度详情，显示文件大小、传输速度和预计剩余时间](/getbiji-docs-v3/images/CxFobYVZvoKmOXxQsVIczvo4nih.png)

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

![常规录音笔记详情页，展示 AI 转写的完整文字记录和发言人区分](/getbiji-docs-v3/images/MxY6b8RBZovTyUxyLjbccpkgnUh.png)

笔记包含多个模块：

| 模块 | 说明 |
|------|------|
| 章节概要 | AI 按主题分段总结 |
| 待办事项 | 自动提取会议中的行动项 |
| 拍图整理 | 录音中拍的照片按时间排列 |

![章节概要模块，按主题分段展示录音内容的摘要总结](/getbiji-docs-v3/images/V90jbf0n5ouSyJxdNW2cAYBUnGM.png)

![待办事项模块，列出从录音中自动提取的行动项和任务](/getbiji-docs-v3/images/KAjgbROBuoBBMSxHcqecQiDGnCc.png)

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

![设备信息页底部，「断开或解绑」按钮位置](/getbiji-docs-v3/images/HJkub4wn9onOa9xE9plcIF67nmc.png)

![解绑选项弹窗，显示「断开连接」和「解绑并清除数据」两个选项](/getbiji-docs-v3/images/Bm3XbkRHWowoMix4gSicPPmWnLz.png)

### 第二步：iOS 用户额外操作

如果是 iPhone，还需要去系统蓝牙设置中，找到录音卡设备，点击「忽略此设备」。

![iPhone 蓝牙设置页面，GetSeed 录音卡设备旁的「忽略此设备」按钮](/getbiji-docs-v3/images/IiulbeeH0oWioSxawoBcn1CQnBd.png)

### 第三步：在新手机上添加设备

拿另一台手机，按照「添加并激活设备」的流程重新操作即可。

![新手机上 Get笔记 App 的设备添加引导页面](/getbiji-docs-v3/images/VQhKbb36FoPAqrxVfaScWhHonRd.png)

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

![GetSeed 录音卡详情页顶部，显示发芽区域和剩余种子数量，底部有「发芽」按钮](/getbiji-docs-v3/images/DjkIb888joPRP7xjk4tcgCkKnLe.png)

### 第二步：点击「发芽」生成报告

点击「发芽」按钮，AI 会基于你的新录音笔记生成发芽报告。

![点击「发芽」按钮后的加载页面，提示正在生成发芽报告，预计 3-5 分钟](/getbiji-docs-v3/images/EtrrbDaNjo4Xzyxnt1JcL6lAn6f.png)

![发芽报告生成完成，展示跨领域的思想关联和延伸内容](/getbiji-docs-v3/images/EvmHbdv6zoijoZxT9BjcakwEnGg.png)

### 第三步：查看发芽报告

点击右上角「发芽报告」，进入报告列表页查看所有报告详情。

![发芽报告列表页，展示历史生成的所有报告，按时间倒序排列](/getbiji-docs-v3/images/NyhIbA8dCoGyvSxQSSkcGZ2Qn2f.png)

![发芽报告详情页，展示 AI 基于录音内容生成的跨学科关联分析](/getbiji-docs-v3/images/Wxrsb4g3AowqcFxDI3JcZvhunjf.png)

### 第四步：单条笔记发芽（可选）

每条录音卡笔记也可以单独发芽。在笔记的「...」更多操作里，点击「笔记发芽」，针对这一条笔记生成专属的发芽报告。

![笔记详情页的更多操作菜单，展示「笔记发芽」选项](/getbiji-docs-v3/images/Oi4xbbviaod7G8xMzHWcKPnqneR.png)

![单条笔记的发芽报告，针对特定笔记内容生成聚焦的关联分析](/getbiji-docs-v3/images/Iuo8bqwbvoXHt3xrZUHc9GzVnKe.png)

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

![「更多方式」弹窗菜单，红框标注第一个选项「粘贴链接」，说明文字：公众号文章、抖音短视频、得到直播回放等，下方还有拍照、上传图片、线下会议录音、导入音视频、手机内录等选项](/getbiji-docs-v3/images/Cg8ubYt8nonNUWxVUpvcdMySnje.png)

**第二步：粘贴链接，等 AI 处理**

粘贴你复制好的网页链接，AI 会自动读取内容，生成一篇总结笔记。

![链接笔记保存后的首页列表，显示 AI 从链接提取生成的笔记卡片，包含文章标题、AI 提取的摘要和来源信息](/getbiji-docs-v3/images/HaRcblUfkoJlSnxE3WucbPPdnYc.png)

**支持的链接类型**：微信公众号文章、抖音短视频、B站视频、小红书图文、得到直播回放等。

---

## 怎么找笔记、用笔记

### 搜索笔记

点击首页顶部的搜索框，输入关键词，就能找到你之前记的笔记。

![首页顶部红框标注搜索栏，显示「搜索笔记」占位文字，下方是笔记列表，底部有「+ 更多」「录音」「文字」三个按钮](/getbiji-docs-v3/images/RygIb7eWqochVYxTVe6cGMl0ncd.png)

![搜索页面，顶部搜索框已输入「ai」，下方显示「向 AI 询问 "ai"」的快捷入口，再下方红框标注搜索结果列表，展示匹配到的笔记标题和内容摘要](/getbiji-docs-v3/images/N1RabxWgfowpI1xpEzwcUaxzn5e.png)

### AI 助手问答

除了搜索，你还可以直接问 AI 助手。它会翻阅你所有笔记，给出回答。

点击首页顶部「欢迎来到Get笔记」旁边的「聊一聊」按钮，就能进入 AI 对话页面。

![首页顶部红框标注欢迎横幅区域，显示「欢迎来到Get笔记，现在，开始你的灵感之旅吧」文字，右侧有「聊一聊」按钮可进入 AI 助手对话](/getbiji-docs-v3/images/E7Nlb9sluo6seWxFQ0bcfpWenQg.png)

![AI 助手对话页面，顶部显示「你好，我是你的AI助手」和「你可以这样问我」，下方列出推荐问题：帮我生成周报、整理一周待办、24小时热点等，底部红框标注输入区域，包含深度思考开关和搜索范围选择](/getbiji-docs-v3/images/NHI8bRRaOoqf5RxiJQDc3DqZnJd.png)

### 追加笔记

已经记过的笔记，还想补充内容？在笔记详情页底部点击「追加笔记」就行。

支持追加文本、语音、图片、链接——所有笔记类型都可以追加。

![笔记详情页底部显示「追加笔记」按钮（红框标注），点击即可对当前笔记补充新内容，页面中展示的是一篇关于 AI Agents 发展趋势的笔记](/getbiji-docs-v3/images/JnUsbCfdGoleAaxQiM0c1rSWnz0.png)

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

![笔记选择列表页面，每条笔记右侧有勾选框，底部显示已选数量和「确定」按钮](/getbiji-docs-v3/images/GOjrbvQXAozm27xNgDocM6i5nhn.png)

添加完成后，笔记会出现在知识库内容列表中。

![知识库详情页，已添加的笔记显示在内容列表中，每条笔记显示标题和摘要信息](/getbiji-docs-v3/images/Lfy9bS8HVoqoYJxK6r2cMirLnbh.png)

#### 方式二：从首页笔记列表添加

你也可以直接在首页的笔记列表中操作：点击笔记右侧的「...」更多操作，选择你想加入的知识库。

![首页笔记列表，点击某条笔记的「...」更多按钮，弹出操作菜单](/getbiji-docs-v3/images/NHpkbi9FUo6rChxcTNdcglTUnQf.png)

![更多操作菜单中显示「加入知识库」选项，点击后可选择目标知识库](/getbiji-docs-v3/images/Nv9obxISDoKfx5xseDecOpBYnHb.png)

选择知识库后即可加入。同样的入口也支持将笔记从知识库中移出。

![知识库选择列表，勾选要加入的知识库，已加入的知识库可点击移出](/getbiji-docs-v3/images/WjjwbgkVPopDtjxBxB8cxY4Engh.png)

### 网页端

**第一步：进入知识库，点击「添加」→「选择已有笔记」**

![网页端知识库详情页，顶部「添加」按钮展开下拉菜单，显示「选择已有笔记」选项](/getbiji-docs-v3/images/WRjFbKRkNouK2Axpwc1cLQ8hnMh.png)

![下拉菜单展示添加选项，包括上传文件、选择已有笔记等](/getbiji-docs-v3/images/NFEhbb1UDogEsXxOQakc0L1Rn4j.png)

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

![App 首页顶部导航栏，左侧显示「更多」入口按钮，点击可进入知识库等功能页面](/getbiji-docs-v3/images/ZNMSbuHSqotgUMx3BVCcu74mnBf.png)

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

![他人通过链接访问的知识库页面，可浏览内容、搜索和使用 AI 功能](/getbiji-docs-v3/images/VwGnbLgxroJr8qxNOZUcY06Mnsd.png)

#### 网页端

进入知识库，点击右上角「分享」按钮，选择「公开」后复制链接即可。

![网页端分享设置弹窗，可切换私密/公开/团队模式，公开模式下显示分享链接可复制](/getbiji-docs-v3/images/Y5OpbZny5opHxrxArMRcXRrdnwg.png)

#### 小程序端

在小程序中同样可以分享：进入知识库，点击右上角分享按钮，选择「公开」后通过微信分享。

![小程序端知识库页面，点击右上角分享按钮进入分享设置](/getbiji-docs-v3/images/YsAWb8XVOoSHALxfwLncVCOfnTe.png)

![小程序分享设置页面，切换为「公开」模式](/getbiji-docs-v3/images/ZyO9bMXn9os3taxaU9PcEuO5nRh.png)

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

![团队设置页面，显示「成员自动加入」开关，关闭时需管理员审核，打开时成员可直接加入](/getbiji-docs-v3/images/FGmpbMg08o2EBvxSVsfc69cGnNe.png)

其他成员点击链接后，会看到「申请加入知识库」按钮。管理员审核通过后，知识库会出现在成员的列表中。

![他人通过链接访问的团队知识库页面，显示「申请加入知识库」按钮](/getbiji-docs-v3/images/KsQdbmbcGo2kNAxRq7WctJuZnfI.png)

#### 审核成员申请

有新成员申请加入时，知识库顶部的成员入口会有红点提醒。

![知识库详情页顶部成员入口显示红点通知，提示有新的加入申请待审核](/getbiji-docs-v3/images/E4vvbxxc2oWXzix0YjQcxXjhnyd.png)

点击进入成员管理页面，可以同意或拒绝申请。

![成员管理页面，显示待审核的申请列表，每条申请右侧有「同意」和「拒绝」按钮](/getbiji-docs-v3/images/Z2RHbgy8Cof9dTxVHH5cdJIFned.png)

通过审核的成员可以分配角色：普通成员或管理员。也可以随时将成员移出知识库。

![成员角色设置页面，可将成员设置为「普通成员」或「管理员」，底部有「移出知识库」选项](/getbiji-docs-v3/images/Lj1ub7ugeoMpXAxB0N5ctQwYnSh.png)

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

![知识库列表页「精选」标签，展示官方推荐的优质知识库，可点击订阅](/getbiji-docs-v3/images/B6ahbzjuZokVrmxE78ScLpKHnVe.png)

![已订阅的知识库出现在「我的」知识库列表中](/getbiji-docs-v3/images/P987bN9gvosMABxmpoKcT0fincg.png)

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

![粘贴链接后显示博主信息预览，包括博主头像和昵称，确认后点击订阅按钮](/getbiji-docs-v3/images/Vubqb9jPdoWd9JxN5PQcD8YUn6f.png)

**第三步：订阅成功，等待更新**

订阅成功后，Get笔记会每天自动检查博主是否发布了新视频，并将视频内容整理成笔记。

![知识库中已订阅的博主列表，显示博主昵称和最近更新时间](/getbiji-docs-v3/images/C4SNblJxho6YV2xtY24cVR8Mn8d.png)

![博主视频自动生成的笔记详情，显示视频标题、内容摘要和重点信息](/getbiji-docs-v3/images/JKFbbgDvUoqEPVxcsUFc4Gjjnac.png)

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

![抖音博主主页，右上角显示「...」更多操作按钮](/getbiji-docs-v3/images/Swr0bxOQxoEkY4xj8zCcWNrqnwl.png)

![点击「...」后弹出菜单，显示「分享名片」选项](/getbiji-docs-v3/images/TyymbmYu3ocgN3xEYZ8cjtyynmh.png)

![分享名片页面，底部显示「复制链接」按钮，点击即可复制博主主页链接](/getbiji-docs-v3/images/VwKubVTg9oJwCTxtLK8cCVeqnTL.png)

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

![订阅直播页面，顶部可切换「得到 App 直播」和「视频号直播」，下方有链接输入框，粘贴直播链接后点击订阅](/getbiji-docs-v3/images/VRThbz2sKof8cCxzUmzcYrF5nmh.png)

![粘贴链接后显示直播信息预览，确认无误后点击订阅按钮完成订阅](/getbiji-docs-v3/images/AgM9b7LyAoztD0xU9WDcSmgonyb.png)

**第三步：等待 AI 生成笔记**

订阅成功后，直播结束时 AI 会自动生成内容总结和章节纪要（处理过程大约需要 30-40 分钟）。生成的笔记会出现在知识库内容列表中。

![知识库中已生成的直播笔记，显示直播标题、内容总结和章节纪要，可点击查看完整内容](/getbiji-docs-v3/images/A03cbM0mxoPmeyx5lHwcweVEnRd.png)

### 网页端

**第一步：进入知识库，点击「添加」→「订阅直播/博主」**

![网页端知识库详情页，点击顶部「添加」按钮展开菜单，选择「订阅直播/博主」](/getbiji-docs-v3/images/FGJ1bGDSioR9htxlAGmcw2Gmn8c.png)

![下拉菜单中显示「订阅直播/博主」选项](/getbiji-docs-v3/images/Mrr8bQvxvofvqBxR5a4cldaCnCe.png)

**第二步：粘贴直播链接，点击订阅**

![网页端订阅直播弹窗，选择「得到 App 直播」，下方输入框粘贴直播链接](/getbiji-docs-v3/images/Vd4bbYiqEoD0CYxK8nDcxtNonJc.png)

![粘贴链接后显示直播信息，点击订阅按钮完成操作](/getbiji-docs-v3/images/T0dgbLGNconpRfxKyWmcya12nGh.png)

## 怎么找到得到 App 的直播链接

1. 打开得到 App，找到你想订阅的直播
2. 打开直播间，点击分享按钮
3. 点击「复制链接」

![得到 App 直播间页面，底部显示分享按钮，点击后出现分享选项](/getbiji-docs-v3/images/WLnybtQCDoauLPxRRn0cc5gLn1e.png)

![分享弹窗中显示多种分享方式，底部有「复制链接」按钮](/getbiji-docs-v3/images/ZgRRbM5looyQF6xr3KKc6X55nlf.png)

![点击复制链接后提示「链接已复制」，可粘贴到 Get笔记中使用](/getbiji-docs-v3/images/ZcQEboD5uoFTRvx9RXtcuSGZn2Q.png)

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

![手机文件选择界面，可浏览和选择 PDF、Word、PPT 等文件进行上传](/getbiji-docs-v3/images/BBb7b4qo3odfG9xTaLUc2hf3nQc.png)

**第三步：等待 AI 处理**

文件上传后，AI 需要 1-3 分钟进行识别和分析。处理完成后可以搜索文件内容、向 AI 提问。

![文件上传进度页面，显示文件名和上传状态，AI 正在处理分析文件内容](/getbiji-docs-v3/images/QUpGb7QWfomYYNxZvuWcagLXnNb.png)

你还可以在知识库内创建文件夹，把上传的文件分类管理。

![知识库内文件夹视图，支持新建文件夹对上传文件进行分类整理](/getbiji-docs-v3/images/K8IDbigaRol1Etxhq8xciv22n6f.png)

![新建文件夹弹窗，输入文件夹名称后点击确定即可创建](/getbiji-docs-v3/images/ZUW3bImleottyYx8SlQcI3lgnbf.png)

点击具体文件，可以查看文件内容。

![文件详情页，展示 AI 解析后的文件内容，支持全文阅读和搜索](/getbiji-docs-v3/images/H4mSbh67xoMTLZxrGKqc1vnAndh.png)

![文件内容详情页面，显示文档的完整内容，可滚动阅读](/getbiji-docs-v3/images/OyUhbWbzvouqU9x9KH0cAUZ6nte.png)

### 网页端

**第一步：进入知识库，点击「添加」→ 直接上传文件**

![网页端知识库详情页，顶部「添加」按钮展开后显示上传文件选项](/getbiji-docs-v3/images/RB0VbYUKQoMq66xDgcccMo5MnAe.png)

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

![微信小程序首页，底部显示「更多」按钮，点击进入知识库等功能页面](/getbiji-docs-v3/images/H2SebWlLNo5RUWxc25hc99K9nVg.png)

**第二步：点击添加按钮，选择「微信文件」**

![小程序知识库页面，点击右下角添加按钮，弹出选项包括「微信文件」](/getbiji-docs-v3/images/H45tb3TIBoMIoSx3Ge4ceZ8PnNb.png)

从微信聊天记录中选择文件进行上传。

![微信文件选择界面，显示最近聊天中收到的文件列表，可选择上传](/getbiji-docs-v3/images/YaDrbOFztowhUTx7SKAcB4mKnvf.png)

![文件上传确认页面，显示已选择的文件信息和目标知识库](/getbiji-docs-v3/images/QMeTb3HcXoWd2YxCYBeclU9znEf.png)

![上传完成后的知识库文件列表，显示刚上传的文件](/getbiji-docs-v3/images/OpnGbz5I2opzpFxsad3ceZiRnBh.png)

**另一种方式**：在微信中打开一个文件，点击右上角「...」，选择「在小程序工具中打开」→ 选择「Get笔记」，然后选择要加入的知识库即可。

![微信文件预览页面，点击右上角「...」按钮展开更多操作菜单](/getbiji-docs-v3/images/LW2xb7ckIonvfhxUJmZcjQs6nHh.png)

![操作菜单中选择「在小程序工具中打开」，然后选择 Get笔记小程序](/getbiji-docs-v3/images/UG1CbYRVXovvOUxJooCcgsINnDp.png)

![Get笔记小程序打开后的添加弹窗，选择目标知识库即可将文件加入](/getbiji-docs-v3/images/YUIqbjgRTosQXoxZWzfcaEnUnTc.png)

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

![「更多方式」底部弹出面板，列出粘贴链接、拍照、上传图片、线下会议录音、智能拍书、导入音视频、手机内录等选项，「智能拍书」带有 NEW 标签并用红框高亮标注，描述为「对准书页拍一下，自动提取归类到书籍」](/getbiji-docs-v3/images/FvHHbp50koL0YdxetNscbB76ngh.png)

### 第二步：对着书页拍照

对准书页内容拍摄，AI 会自动矫正角度、去除阴影、优化清晰度。单次最多拍 5 张。

![手机相机拍摄界面，对准一本纸质书的书页内容进行拍照，页面底部显示「重拍」和「使用照片」两个操作按钮](/getbiji-docs-v3/images/UsFtbm0HPoH8dTxaSL0cOHwrntf.png)

### 第三步：确认书籍信息

AI 会自动识别是哪本书，右侧还会展示最近识别过的书籍。如果识别有误，可以手动搜索或添加。

![拍书预览页面，上方展示 AI 增强后的清晰书页文字，中间显示页码翻页控件和「继续拍」按钮，下方「添加到书籍」区域展示「自动识别书籍」（已勾选）以及最近阅读的书籍封面缩略图，底部提供「原图」和「增强」切换及「下一步」按钮](/getbiji-docs-v3/images/TR5YbUwnWomziXxLwBYctoKLngg.png)

![AI 自动识别书籍确认页面，上方显示增强后的书页文字内容，下方展示识别结果为《预测之书》（罗振宇编著，新星出版社），配有书籍封面图，底部提供「更换」和「确认」两个按钮](/getbiji-docs-v3/images/Qdp9bfNp4om9j2xwM1qcnNNSnNb.png)

### 第四步：AI 处理并生成笔记

点下一步，AI 开始提取文字内容，确认书籍信息，生成结构化笔记。

![《预测之书》的读书笔记详情页，顶部显示书籍封面、书名、作者和出版社信息，下方显示「1 条笔记」，笔记卡片内展示 AI 提取的书页文字内容摘要和原始书页缩略图](/getbiji-docs-v3/images/CijpbVuHToBANlxqoKZc5h7Snpe.png)

笔记会自动归类到对应书籍下，可以继续拍照或查看整理结果。

![AI 助手对话界面，显示「你好，我是你的 AI 助手」欢迎语，提供「合并生成笔记」「按时间轴整理内容」「输出一份 PPT 大纲」「生成问答卡片」等快捷操作，底部已选中《预测之书》（1 条笔记）作为对话的知识范围，旁边有「继续添加」按钮](/getbiji-docs-v3/images/Qsgzbb0F2oi4v1xJ607cwBu0nmf.png)

### 查看所有读书笔记

首页左上角菜单进入，所有书会以书籍封面的形式展示，点进去可以看这本书的全部笔记。

![侧边栏个人中心页面，显示用户头像和 PRO 会员标识，统计数据（全部笔记、累计天数、连续天数），笔记热力图，以及日历、Get 日报、知识库、书籍等功能入口，「书籍」选项显示 186 本并用红框高亮标注](/getbiji-docs-v3/images/MwDwb123lobmX7xv7M0cnUfEnLd.png)

![书籍列表页面，顶部显示「共 3713 条笔记 · 来自 186 本书」，以书籍封面网格形式展示所有书籍，包括《预测之书》《财经》《思考，快与慢》《你当像鸟飞往你的山》《北海怪兽》等，每本书下方标注笔记数量](/getbiji-docs-v3/images/TNa9b48yFoClTAxVPcXcn8g0nCc.png)

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

![App 首页笔记列表，展示「高中数学函数复习方法与体系解析」等多条笔记卡片，每条显示授课时间、时长等信息；底部导航栏中央的「录音」按钮被红框高亮标注，左侧为「更多」、右侧为「文字」](/getbiji-docs-v3/images/Imhvbauyeouj6ZxrPGEcy0qynId.png)

首次使用需要授权麦克风权限，点击红色按钮「开始录音」。老师讲的话会实时转写显示在屏幕上。

![录音模式选择弹窗，顶部插图为老师在黑板前授课，提示语「轻松总结课堂重点，随时回听高效复习」；下方四个模式卡片：语音速记（最长1小时）、多人会议（最长3小时）、手机内录（最长3小时）、课堂录音（最长3小时），其中「课堂录音」被红框选中并打勾；底部为红色圆形开始录音按钮](/getbiji-docs-v3/images/SU9iblQOpo2LCexZNnBc5tfBnXd.png)

### 第二步：上课时随时补充

录音过程中，底部有三个辅助工具：

![课堂录音进行中界面，标题「新录音」，顶部切换栏有「实时转写」和「课堂资料」两个标签页，当前在实时转写页，显示时间戳 00:01 和转写文字；底部显示录音进度 00:06/60:00 和声波动画，工具栏从左到右依次为「拍重点」「随手记」「传资料」图标按钮，以及暂停按钮和绿色「完成」按钮](/getbiji-docs-v3/images/NvnhbTt3koBcJ5xR3sTcuUk6n1e.png)

- **拍重点**：随时拍下 PPT 或板书，自动整合进笔记

![课堂资料标签页，按时间戳排列展示三类内容：00:15 拍摄的 PPT 照片（屏幕显示「函数问题破解策略(一)」，老师在旁讲解）；01:00 和 03:05 的随手记文字笔记「函数破解方法」「两个体系，四位一体」；03:26 上传的 PDF 课件（841.9KB）；底部显示录音进度 11:52/60:00 及升级 PRO 提示](/getbiji-docs-v3/images/MSZkbWR6ToCA1fxAl0hcb8Svn4b.png)

- **随手记**：打几个字记下关键词或自己的想法

![录音处理中界面，顶部三步进度条「文件上传→录音转写→总结纪要」，正在进行录音转写；提示「AI已经开始工作了，大约需要5-10分钟不等」；下方为按说话人区分的逐句转写文本，每段标注说话人编号（说话人1至说话人5）、时间戳和转写内容](/getbiji-docs-v3/images/MJKvbSTw3oAR2QxWAYLcrw01nzg.png)

- **传资料**：上传老师发的课件 PDF/Word/PPT（最多 3 个文件）

![AI 助手界面，页面中央显示「你好，我是你的AI助手」欢迎语；底部弹出「思考模式」选择面板，三个选项：「自动」（自主规划并搜索，回答更全面）、「深度思考」（深入分析推理，解决复杂问题）、「学习辅导」（引导式提问，帮你真正理解），当前「学习辅导」被选中打勾](/getbiji-docs-v3/images/Liueb9KXCoyzDyxpo12c9yeRnTb.png)

### 第三步：下课点「完成」

AI 会自动生成课堂笔记：
- 完整的转写内容，按章节分段
- 老师说「这个必考」「期末会考」的地方自动加粗标注
- 数学公式自动转为 LaTeX 标准格式，清晰易读

![AI 生成的课堂笔记详情页，标题「高中数学函数复习方法与体系解析」，可添加到知识库和书籍，标签有「录音笔记」「高中数学」等；音频播放器显示总时长 12:10；下方五个标签页「文字记录｜课堂资料｜智能总结｜重点速览｜追加笔记」，当前在智能总结页，展示课程信息（授课时间、时长12分钟、领域高中数学）和知识精讲「函数问题的重要性与复习策略」](/getbiji-docs-v3/images/UHvMb3O2to6CRExyCcYcO9vbnMh.png)

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

![Get 笔记 App 首页，显示笔记列表和知识库，底部「+ 更多」按钮用红色圆圈标注](/getbiji-docs-v3/images/OhNPb9htwoIv9gxGtwvcREuOn5U.png)

![「更多方式」底部弹出面板，列出粘贴链接、拍照、上传图片、线下会议录音、导入音视频、手机内录等选项，「导入音视频」带有 NEW 标签并用红框高亮标注，描述为「自动转文字稿，AI智能总结」](/getbiji-docs-v3/images/XDIYbNoBUoZ24KxwQDfcuIuMnTh.png)

### 第二步：选择文件

可以从相册或本地文件中选择。支持 MP3、M4A、WAV、MP4、MOV、AVI 等常见格式。

![「选择录音文件」弹窗，提示支持 MP3、WAV、M4A、AMR、AAC、AVI、MOV 等格式，单个文件时长不超过 3 小时，提供「从相册选择」「本地文件」「语音备忘录等」三个来源选项](/getbiji-docs-v3/images/Rk8sb0VYroTnlKxtCpsc0qGbnDe.png)

### 第三步：等 AI 处理

上传后 AI 会自动分析文件内容，选择最合适的模板进行整理。处理时间取决于文件长度，可以先去做别的。

![「导入音视频文件」弹窗，显示已上传的音频文件及「上传成功」状态，下方说明支持会议、课堂讲座、播客素材等类型，并显示转写时长额度信息](/getbiji-docs-v3/images/HSnmbbeTioy0hixLeOBcC8JYnsb.png)

![AI 正在处理音频，顶部显示「文件上传 → 录音转写 → 总结纪要」三步进度条，下方展示逐句转写的文字内容，带有说话人标识和时间戳](/getbiji-docs-v3/images/TzTkbRCEkobbTJxE4fycdR6znBg.png)

### 第四步：查看笔记

AI 会生成完整的文字稿和总结笔记。

![iOS 系统文件选择器界面，标题为「最近项目」，列表中显示多个音视频文件（包括录音、录屏、视频等），可选择要导入的文件](/getbiji-docs-v3/images/PyMjbDeyCoI71IxqO3mcFQdxn6i.png)

![AI 生成的音频笔记详情页，标题为「隋老师视频工作流程值得自媒体和实体老板学习」，显示标签、音频播放器、「文字记录」「智能总结」「章节概要」「待办事项」四个切换标签，当前展示智能总结内容](/getbiji-docs-v3/images/TD5Sb7XgYoEKl7xmSzrc0VU2nMc.png)

## 从其他 App 导入

### 从 iPhone「语音备忘录」导入

1. 打开「语音备忘录」App，点击某条录音的「...」，选择「分享」

![iPhone 语音备忘录 App 界面，显示录音列表，某条录音的「...」菜单已展开，「分享」选项用红框高亮标注，红色箭头指向该按钮](/getbiji-docs-v3/images/Vs1RbnO2OoH6bFx8tRXc5azYnqg.png)

2. 在分享列表里选择 Get 笔记。如果没看到，滑到最右边「更多」里找

![iOS 系统分享面板，显示录音文件信息（例会，录音，3.7 MB），应用列表中 Get 笔记图标用红框高亮标注，红色箭头指向该图标](/getbiji-docs-v3/images/Ecd4bIYaEoGMyzxDZfwcWH1mnqs.png)

### 从微信导入音频

1. 在微信中，点击音频文件的「...」，选择「用其他应用打开」

![微信文件传输助手聊天界面，显示多个文件消息，其中一条音频文件「例会.m4a（3.55MB）」用红框高亮标注](/getbiji-docs-v3/images/MTMNbeewUo2QlsxrwPwcTrg1nKd.png)

![微信音频播放页面，正在播放「例会.m4a」文件，右侧「...」菜单已展开，显示转发给朋友、星标、收藏、在电脑上打开等选项，「用其他应用打开」按钮用红框高亮标注](/getbiji-docs-v3/images/BZMkbDNPqok6aNxpAvCcKY0unHG.png)

2. 选择 Get 笔记打开

![iOS 系统分享面板，显示录音文件信息（例会，录音，3.7 MB），应用列表中 Get 笔记图标用红框高亮标注，红色箭头指向该图标](/getbiji-docs-v3/images/PIR4bO75yoidDTxbifYcKUQUnnI.png)

![Get 笔记 App 已接收导入的音频文件，显示笔记标题和处理状态](/getbiji-docs-v3/images/DCnKbSt0hoY8kwxvMyxcD4YVnQc.png)

## 网页端也能用

- **首页**：直接点「导入音视频」
- **知识库**：在知识库中添加 → 导入音视频
- **追加笔记**：在已有笔记中追加导入音视频内容

![Get 笔记网页端首页，左侧导航栏显示问一问、首页、标签、知识库入口，右侧「你还可以」区域展示添加图片、添加链接、导入音视频三个功能卡片，「导入音视频」卡片用红框高亮标注](/getbiji-docs-v3/images/KaDBbX364oGJhvxorTSchDCJnJb.png)

![知识库「添加文件」页面，上方为文件拖放上传区域，下方展示写笔记、选择已有笔记、订阅直播/博主、粘贴链接、上传图片、导入音视频六个功能卡片，「导入音视频」用红框高亮标注](/getbiji-docs-v3/images/FqEBbCFB9oDC9LxTLggcWigenAb.png)

![笔记「追加笔记」弹窗，提供写笔记、粘贴链接、上传图片、导入音视频四个选项，「导入音视频」用红框高亮标注](/getbiji-docs-v3/images/CQbdbiwZzopooTxCFwmcL6annhg.png)`}],m1={};function p1({samples:r}){var s;const[E,p]=G.useState(0);return r.length===0?null:o.jsxs("div",{"data-testid":"code-samples",style:{border:"1px solid var(--bd)",borderRadius:8,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:r.map((A,D)=>o.jsx("button",{onClick:()=>p(D),style:{padding:"8px 16px",fontSize:13,fontWeight:500,background:D===E?"var(--cdBg)":"transparent",color:D===E?"var(--tx)":"var(--tx2)",border:"none",borderBottom:D===E?"2px solid var(--ac)":"2px solid transparent",cursor:"pointer",fontFamily:"var(--font-body)",whiteSpace:"nowrap"},children:A.label},A.language))}),o.jsx("pre",{style:{margin:0,padding:16,background:"var(--cdBg)",overflow:"auto"},children:o.jsx("code",{style:{fontSize:13,fontFamily:"var(--font-code)"},children:(s=r[E])==null?void 0:s.code})})]})}function h1({href:r,title:E,description:p,icon:s,external:A}){const D=A??r.startsWith("http");return o.jsxs("a",{href:r,target:D?"_blank":void 0,rel:D?"noopener noreferrer":void 0,style:{display:"block",padding:"16px 20px",border:"1px solid var(--bd)",borderRadius:8,textDecoration:"none",color:"inherit",background:"var(--sf)",transition:"border-color 0.15s, background 0.15s",cursor:"pointer"},onMouseEnter:B=>{B.currentTarget.style.borderColor="var(--ac)",B.currentTarget.style.background="var(--sfH)"},onMouseLeave:B=>{B.currentTarget.style.borderColor="var(--bd)",B.currentTarget.style.background="var(--sf)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s&&o.jsx("span",{style:{fontSize:18},children:s}),o.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--tx)"},children:E}),o.jsx("span",{style:{marginLeft:"auto",color:"var(--tx2)",fontSize:14},children:D?"↗":"→"})]}),p&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:13,color:"var(--tx2)",lineHeight:1.5},children:p})]})}function v1({columns:r=2,children:E}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginTop:16,marginBottom:16},children:E})}const b1={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function ng(r){return b1[r]||"#6b7280"}function y1({entries:r,initialLimit:E}){const[p,s]=G.useState(!E),A=p?r:r.slice(0,E||r.length);return r.length===0?o.jsx("div",{"data-testid":"changelog-empty",style:{padding:"40px 0",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No changelog entries found."}):o.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),A.map((D,B)=>o.jsxs("div",{"data-testid":`changelog-entry-${D.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:B<A.length-1?32:0},children:[o.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:D.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[o.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:D.url?o.jsx("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:D.version}):D.version}),D.date&&o.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:D.date})]}),D.sections.map(H=>o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:ng(H.type)}}),o.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:ng(H.type),fontFamily:"var(--font-code, monospace)"},children:H.type})]}),o.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:H.items.map((R,x)=>o.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:R},x))})]},H.type))]},D.version)),!p&&r.length>(E||0)&&o.jsx("div",{style:{textAlign:"center",marginTop:24},children:o.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>s(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer",transition:"border-color .15s, color .15s"},children:["Show all ",r.length," releases"]})})]})}const lg={info:{color:"#3b82f6",label:"INFO"},warning:{color:"#f59e0b",label:"WARNING"},tip:{color:"var(--ac, #a78bfa)",label:"TIP"},danger:{color:"#ef4444",label:"DANGER"}};function x1({type:r="info",title:E,children:p}){const s=lg[r]||lg.info;return o.jsxs("div",{style:{borderLeft:`3px solid ${s.color}`,background:`${s.color}11`,borderRadius:"0 2px 2px 0",padding:"14px 18px",marginBottom:20},children:[E?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:s.color,fontFamily:"var(--font-code, monospace)"},children:s.label}),o.jsx("span",{style:{fontWeight:600,fontSize:13,color:s.color},children:E})]}):o.jsx("div",{style:{marginBottom:4},children:o.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:s.color,fontFamily:"var(--font-code, monospace)"},children:s.label})}),o.jsx("div",{style:{fontSize:14,lineHeight:1.65,color:"var(--tx2)"},children:p})]})}function S1({items:r,children:E}){const[p,s]=G.useState(0);return o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--bd)"},children:r.map((A,D)=>o.jsx("button",{onClick:()=>s(D),style:{padding:"8px 16px",background:"none",border:"none",borderBottom:p===D?"2px solid var(--ac)":"2px solid transparent",color:p===D?"var(--ac)":"var(--txM)",fontWeight:p===D?600:400,fontSize:13,cursor:"pointer",fontFamily:"inherit"},children:A},D))}),o.jsx("div",{style:{padding:"16px 0"},children:E[p]})]})}function A1({title:r,icon:E,href:p,children:s}){const A=o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"20px",transition:"border-color 0.15s",cursor:p?"pointer":"default"},children:[E&&o.jsx("span",{style:{fontSize:24,marginBottom:8,display:"block"},children:E}),o.jsx("div",{style:{fontWeight:600,fontSize:14,marginBottom:4},children:r}),s&&o.jsx("div",{style:{fontSize:13,color:"var(--txM)",lineHeight:1.5},children:s})]});return p?o.jsx("a",{href:p,style:{textDecoration:"none",color:"inherit"},children:A}):A}function j1({cols:r=2,children:E}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:12,marginBottom:20},children:E})}function E1({children:r}){return o.jsx("div",{style:{paddingLeft:24,borderLeft:"2px solid var(--bd)",marginBottom:20},children:ig.Children.map(r,(E,p)=>o.jsxs("div",{style:{position:"relative",paddingBottom:20},children:[o.jsx("div",{style:{position:"absolute",left:-33,top:0,width:20,height:20,borderRadius:"50%",background:"var(--ac)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},children:p+1}),o.jsx("div",{style:{paddingLeft:8},children:E})]}))})}function T1({title:r,children:E}){const[p,s]=G.useState(!1);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:8,overflow:"hidden"},children:[o.jsxs("button",{onClick:()=>s(!p),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"12px 16px",background:"var(--sf)",border:"none",cursor:"pointer",fontWeight:500,fontSize:14,color:"var(--tx)",fontFamily:"inherit"},children:[r,o.jsx("span",{style:{transform:p?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"},children:"▾"})]}),p&&o.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",fontSize:14,color:"var(--tx2)",lineHeight:1.65},children:E})]})}const z1={install:{npm:"npm install",yarn:"yarn add",pnpm:"pnpm add",bun:"bun add"},"install -D":{npm:"npm install -D",yarn:"yarn add -D",pnpm:"pnpm add -D",bun:"bun add -d"},uninstall:{npm:"npm uninstall",yarn:"yarn remove",pnpm:"pnpm remove",bun:"bun remove"},run:{npm:"npm run",yarn:"yarn",pnpm:"pnpm",bun:"bun run"},exec:{npm:"npx",yarn:"yarn dlx",pnpm:"pnpm dlx",bun:"bunx"},init:{npm:"npm init",yarn:"yarn init",pnpm:"pnpm init",bun:"bun init"},create:{npm:"npm create",yarn:"yarn create",pnpm:"pnpm create",bun:"bun create"}};function M1(r,E){for(const[p,s]of Object.entries(z1))if(r.startsWith(p+" ")||r===p){const A=r.slice(p.length);return(s[E]||p)+A}return`${E} ${r}`}function _1({command:r}){const[E,p]=G.useState(0),[s,A]=G.useState(!1),D=["npm","yarn","pnpm","bun"],B=M1(r,D[E]);return o.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:16,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto"},children:D.map((H,R)=>o.jsx("button",{onClick:()=>{p(R),A(!1)},style:{padding:"8px 14px",background:"none",border:"none",cursor:"pointer",fontSize:12,fontFamily:"var(--font-code)",fontWeight:R===E?600:400,color:R===E?"var(--ac)":"var(--txM)",borderBottom:R===E?"2px solid var(--ac)":"2px solid transparent",whiteSpace:"nowrap"},children:H},H))}),o.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",background:"var(--cdBg)",gap:8},children:[o.jsx("code",{style:{flex:1,fontFamily:"var(--font-code)",fontSize:13,color:"var(--cdTx)",whiteSpace:"pre",overflowX:"auto"},children:B}),o.jsx("button",{onClick:()=>{var H;(H=navigator.clipboard)==null||H.writeText(B),A(!0),setTimeout(()=>A(!1),2e3)},style:{background:"none",border:"none",cursor:"pointer",color:"var(--txM)",fontSize:12,fontFamily:"var(--font-code)",flexShrink:0},children:s?"✓":"Copy"})]})]})}function D1({name:r,fields:E}){return o.jsxs("div",{style:{marginBottom:16},children:[r&&o.jsx("h4",{style:{fontFamily:"var(--font-code)",fontSize:15,marginBottom:8,color:"var(--tx)"},children:r}),o.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"var(--font-body)"},children:[o.jsx("thead",{children:o.jsx("tr",{style:{borderBottom:"2px solid var(--bd)"},children:["Property","Type","Required","Default","Description"].map(p=>o.jsx("th",{style:{textAlign:"left",padding:"8px 10px",color:"var(--txM)",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:".05em",whiteSpace:"nowrap"},children:p},p))})}),o.jsx("tbody",{children:E.map(p=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--bd)"},children:[o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontWeight:500,color:"var(--tx)"},children:p.name}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--ac)"},children:p.type}),o.jsx("td",{style:{padding:"8px 10px"},children:p.required&&o.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e04040",background:"rgba(224,64,64,0.1)",padding:"2px 6px",borderRadius:2},children:"required"})}),o.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--txM)"},children:p.default||"—"}),o.jsx("td",{style:{padding:"8px 10px",color:"var(--tx2)"},children:p.description||""})]},p.name))})]})})]})}function O1({name:r}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx2)"},children:[o.jsx("span",{style:{opacity:.6},children:"📄"})," ",r]})}function R1({name:r,defaultOpen:E,children:p}){const[s,A]=G.useState(E??!1);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>A(!s),style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx)",fontWeight:500},children:[o.jsx("span",{children:s?"📂":"📁"})," ",r]}),s&&o.jsx("div",{style:{paddingLeft:18,borderLeft:"1px solid var(--bd)",marginLeft:8},children:p})]})}function Wo({children:r}){return o.jsx("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"12px 16px",background:"var(--cdBg)",marginBottom:16},children:r})}Wo.File=O1;Wo.Folder=R1;const C1={Callout:x1,Tabs:S1,Card:A1,CardGroup:j1,Steps:E1,Accordion:T1,ChangelogTimeline:y1,PackageManager:_1,TypeTable:D1,FileTree:Wo,CodeSamples:p1,LinkCard:h1,CardGrid:v1},B1=`
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
`,Tu=(ui.basePath||"/").replace(/\/$/,"");function U1(r){return og(r,Tu,Vn)}function Ko(r){return c1(r,Tu,Vn)}const rg=s1(window.location.pathname,window.location.hash,Vn,Tu,og),H1=sg(rg,Vn,fg);function G1(){var ut;const[r,E]=G.useState(rg),[p,s]=G.useState(null),[A,D]=G.useState(!0),B=G.useCallback(async(O,Y)=>{D(!0),E(O);const Z=Ko(O);Y!=null&&Y.replace?window.history.replaceState(null,"",Z):window.history.pushState(null,"",Z);const L=await sg(O,Vn,fg);if(s(L),D(!1),!(Y!=null&&Y.skipScroll)){const pt=window.location.hash.slice(1);pt?requestAnimationFrame(()=>{const At=document.getElementById(pt);At&&At.scrollIntoView({behavior:"smooth",block:"start"})}):window.scrollTo(0,0)}},[]);G.useEffect(()=>{const O=window.location.hash.slice(1);if(O&&Vn.some(Y=>Y.id===O)){const Y=Ko(O);window.history.replaceState(null,"",Y),B(O,{replace:!0})}else{const Y=Ko(r);window.history.replaceState(null,"",Y),H1.then(Z=>{s(Z),D(!1)})}},[]),G.useEffect(()=>{const O=()=>{const Y=U1(window.location.pathname);Y&&Y!==r&&B(Y,{replace:!0,skipScroll:!0})};return window.addEventListener("popstate",O),()=>window.removeEventListener("popstate",O)},[r,B]);const H=G.useRef(null),[R,x]=G.useState(()=>{var Y,Z;if(typeof document>"u")return"light";if(document.documentElement.classList.contains("dark"))return"dark";const O=((Y=ui.theme)==null?void 0:Y.mode)||"auto";return O==="dark"?"dark":O==="light"?"light":(Z=window.matchMedia)!=null&&Z.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"});G.useEffect(()=>{const O=new MutationObserver(()=>{const Y=document.documentElement.classList.contains("dark");x(Y?"dark":"light")});return O.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>O.disconnect()},[]),G.useEffect(()=>{const O=document.querySelectorAll(".tome-mermaid[data-mermaid]");if(O.length===0)return;let Y=!1;const Z="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";return(async()=>{try{H.current||(H.current=(await import(Z)).default);const L=H.current;if(Y)return;const pt=R==="dark",At=getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim()||"sans-serif";L.initialize({startOnLoad:!1,theme:pt?"dark":"default",fontFamily:At,flowchart:{padding:15,nodeSpacing:30,rankSpacing:40}});for(let w=0;w<O.length;w++){const Rt=O[w],Jt=Rt.getAttribute("data-mermaid");if(Jt)try{const zt=atob(Jt),{svg:Wt}=await L.render(`tome-mermaid-${w}-${Date.now()}`,zt);Y||(Rt.innerHTML=Wt)}catch(zt){console.warn("[tome] Mermaid render failed:",zt),Rt.textContent="Diagram rendering failed",Rt.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"}}}catch(L){console.warn("[tome] Failed to load mermaid from CDN:",L),O.forEach(pt=>{pt.textContent="Failed to load diagram renderer",pt.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"})}})(),()=>{Y=!0}},[p,A,R]),G.useEffect(()=>{if(A)return;const O=document.querySelectorAll(".tome-content pre"),Y=[];return O.forEach(Z=>{if(Z.querySelector(".tome-copy-btn"))return;const L=document.createElement("button");L.className="tome-copy-btn",L.textContent="Copy",L.addEventListener("click",async()=>{const pt=Z.querySelector("code");if(pt)try{await navigator.clipboard.writeText(pt.textContent||""),L.textContent="Copied!",setTimeout(()=>{L.textContent="Copy"},2e3)}catch{L.textContent="Failed",setTimeout(()=>{L.textContent="Copy"},2e3)}}),Z.appendChild(L),Y.push(L)}),()=>{Y.forEach(Z=>Z.remove())}},[p,A]);const V=Vn.map(O=>({id:O.id,title:O.frontmatter.title,description:O.frontmatter.description})),C=Vn.find(O=>O.id===r),F=f1(C),J=o1(ui.editLink,C==null?void 0:C.filePath),bt=(C==null?void 0:C.locale)||(Zo==null?void 0:Zo.defaultLocale)||"en",et="ltr";return G.useEffect(()=>{const O=document.querySelectorAll(".tome-math[data-math]").length>0;if(!ui.math&&!O)return;const Y="tome-katex-css";if(document.getElementById(Y))return;const Z=document.createElement("link");Z.id=Y,Z.rel="stylesheet",Z.href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",Z.crossOrigin="anonymous",document.head.appendChild(Z)},[p,A]),G.useEffect(()=>{const O=document.querySelectorAll(".tome-math[data-math]");if(O.length===0)return;let Y=!1;const Z="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs";return(async()=>{try{const L=(await import(Z)).default;if(Y)return;for(const pt of O){const At=pt.getAttribute("data-math");if(At)try{const w=atob(At),Rt=pt.classList.contains("tome-math-block");L.render(w,pt,{displayMode:Rt,throwOnError:!1})}catch(w){console.warn("[tome] KaTeX render failed:",w)}}}catch(L){console.warn("[tome] Failed to load KaTeX from CDN:",L)}})(),()=>{Y=!0}},[p,A]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:B1}),o.jsx(i1,{config:ui,navigation:r1,currentPageId:r,pageHtml:p!=null&&p.isMdx?void 0:A?"":(p==null?void 0:p.html)||"<p>Page not found</p>",pageComponent:p!=null&&p.isMdx?p.component:void 0,mdxComponents:C1,pageTitle:(p==null?void 0:p.frontmatter.title)||(A?"":"Not Found"),pageDescription:p==null?void 0:p.frontmatter.description,headings:(p==null?void 0:p.headings)||[],tocEnabled:(p==null?void 0:p.frontmatter.toc)!==!1,editUrl:J,lastUpdated:C==null?void 0:C.lastUpdated,changelogEntries:p!=null&&p.isMdx||p==null?void 0:p.changelogEntries,onNavigate:B,allPages:V,docContext:g1,versioning:void 0,currentVersion:F,basePath:Tu,isDraft:((ut=C==null?void 0:C.frontmatter)==null?void 0:ut.draft)===!0,dir:et,i18n:void 0,currentLocale:bt,overrides:m1})]})}const ag=document.getElementById("tome-root");ag&&Rm.createRoot(ag).render(o.jsx(G1,{}));

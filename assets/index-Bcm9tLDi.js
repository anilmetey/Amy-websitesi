(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function w_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dd={exports:{}},To={},hd={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function HE(){if(j0)return gt;j0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(U,se,Se){this.props=U,this.context=se,this.refs=A,this.updater=Se||_}S.prototype.isReactComponent={},S.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function R(U,se,Se){this.props=U,this.context=se,this.refs=A,this.updater=Se||_}var I=R.prototype=new y;I.constructor=R,M(I,S.prototype),I.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(U,se,Se){var Ge,Ve={},We=null,le=null;if(se!=null)for(Ge in se.ref!==void 0&&(le=se.ref),se.key!==void 0&&(We=""+se.key),se)D.call(se,Ge)&&!F.hasOwnProperty(Ge)&&(Ve[Ge]=se[Ge]);var fe=arguments.length-2;if(fe===1)Ve.children=Se;else if(1<fe){for(var we=Array(fe),tt=0;tt<fe;tt++)we[tt]=arguments[tt+2];Ve.children=we}if(U&&U.defaultProps)for(Ge in fe=U.defaultProps,fe)Ve[Ge]===void 0&&(Ve[Ge]=fe[Ge]);return{$$typeof:n,type:U,key:We,ref:le,props:Ve,_owner:N.current}}function L(U,se){return{$$typeof:n,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function z(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return se[Se]})}var $=/\/+/g;function Z(U,se){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):se.toString(36)}function W(U,se,Se,Ge,Ve){var We=typeof U;(We==="undefined"||We==="boolean")&&(U=null);var le=!1;if(U===null)le=!0;else switch(We){case"string":case"number":le=!0;break;case"object":switch(U.$$typeof){case n:case e:le=!0}}if(le)return le=U,Ve=Ve(le),U=Ge===""?"."+Z(le,0):Ge,T(Ve)?(Se="",U!=null&&(Se=U.replace($,"$&/")+"/"),W(Ve,se,Se,"",function(tt){return tt})):Ve!=null&&(O(Ve)&&(Ve=L(Ve,Se+(!Ve.key||le&&le.key===Ve.key?"":(""+Ve.key).replace($,"$&/")+"/")+U)),se.push(Ve)),1;if(le=0,Ge=Ge===""?".":Ge+":",T(U))for(var fe=0;fe<U.length;fe++){We=U[fe];var we=Ge+Z(We,fe);le+=W(We,se,Se,we,Ve)}else if(we=g(U),typeof we=="function")for(U=we.call(U),fe=0;!(We=U.next()).done;)We=We.value,we=Ge+Z(We,fe++),le+=W(We,se,Se,we,Ve);else if(We==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return le}function Q(U,se,Se){if(U==null)return U;var Ge=[],Ve=0;return W(U,Ge,"","",function(We){return se.call(Se,We,Ve++)}),Ge}function de(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var ie={current:null},q={transition:null},Y={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:q,ReactCurrentOwner:N};function K(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Q,forEach:function(U,se,Se){Q(U,function(){se.apply(this,arguments)},Se)},count:function(U){var se=0;return Q(U,function(){se++}),se},toArray:function(U){return Q(U,function(se){return se})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=S,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=R,gt.StrictMode=i,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,gt.act=K,gt.cloneElement=function(U,se,Se){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ge=M({},U.props),Ve=U.key,We=U.ref,le=U._owner;if(se!=null){if(se.ref!==void 0&&(We=se.ref,le=N.current),se.key!==void 0&&(Ve=""+se.key),U.type&&U.type.defaultProps)var fe=U.type.defaultProps;for(we in se)D.call(se,we)&&!F.hasOwnProperty(we)&&(Ge[we]=se[we]===void 0&&fe!==void 0?fe[we]:se[we])}var we=arguments.length-2;if(we===1)Ge.children=Se;else if(1<we){fe=Array(we);for(var tt=0;tt<we;tt++)fe[tt]=arguments[tt+2];Ge.children=fe}return{$$typeof:n,type:U.type,key:Ve,ref:We,props:Ge,_owner:le}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},gt.createElement=E,gt.createFactory=function(U){var se=E.bind(null,U);return se.type=U,se},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:u,render:U}},gt.isValidElement=O,gt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:de}},gt.memo=function(U,se){return{$$typeof:h,type:U,compare:se===void 0?null:se}},gt.startTransition=function(U){var se=q.transition;q.transition={};try{U()}finally{q.transition=se}},gt.unstable_act=K,gt.useCallback=function(U,se){return ie.current.useCallback(U,se)},gt.useContext=function(U){return ie.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ie.current.useDeferredValue(U)},gt.useEffect=function(U,se){return ie.current.useEffect(U,se)},gt.useId=function(){return ie.current.useId()},gt.useImperativeHandle=function(U,se,Se){return ie.current.useImperativeHandle(U,se,Se)},gt.useInsertionEffect=function(U,se){return ie.current.useInsertionEffect(U,se)},gt.useLayoutEffect=function(U,se){return ie.current.useLayoutEffect(U,se)},gt.useMemo=function(U,se){return ie.current.useMemo(U,se)},gt.useReducer=function(U,se,Se){return ie.current.useReducer(U,se,Se)},gt.useRef=function(U){return ie.current.useRef(U)},gt.useState=function(U){return ie.current.useState(U)},gt.useSyncExternalStore=function(U,se,Se){return ie.current.useSyncExternalStore(U,se,Se)},gt.useTransition=function(){return ie.current.useTransition()},gt.version="18.3.1",gt}var Y0;function Dp(){return Y0||(Y0=1,hd.exports=HE()),hd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function GE(){if($0)return To;$0=1;var n=Dp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:a.current}}return To.Fragment=t,To.jsx=c,To.jsxs=c,To}var q0;function WE(){return q0||(q0=1,dd.exports=GE()),dd.exports}var P=WE(),xe=Dp();const XE=w_(xe);var uc={},pd={exports:{}},qn={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function jE(){return K0||(K0=1,(function(n){function e(q,Y){var K=q.length;q.push(Y);e:for(;0<K;){var U=K-1>>>1,se=q[U];if(0<a(se,Y))q[U]=Y,q[K]=se,K=U;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var Y=q[0],K=q.pop();if(K!==Y){q[0]=K;e:for(var U=0,se=q.length,Se=se>>>1;U<Se;){var Ge=2*(U+1)-1,Ve=q[Ge],We=Ge+1,le=q[We];if(0>a(Ve,K))We<se&&0>a(le,Ve)?(q[U]=le,q[We]=K,U=We):(q[U]=Ve,q[Ge]=K,U=Ge);else if(We<se&&0>a(le,K))q[U]=le,q[We]=K,U=We;else break e}}return Y}function a(q,Y){var K=q.sortIndex-Y.sortIndex;return K!==0?K:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var Y=t(h);Y!==null;){if(Y.callback===null)i(h);else if(Y.startTime<=q)i(h),Y.sortIndex=Y.expirationTime,e(d,Y);else break;Y=t(h)}}function T(q){if(A=!1,I(q),!M)if(t(d)!==null)M=!0,de(D);else{var Y=t(h);Y!==null&&ie(T,Y.startTime-q)}}function D(q,Y){M=!1,A&&(A=!1,y(E),E=-1),_=!0;var K=g;try{for(I(Y),v=t(d);v!==null&&(!(v.expirationTime>Y)||q&&!z());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var se=U(v.expirationTime<=Y);Y=n.unstable_now(),typeof se=="function"?v.callback=se:v===t(d)&&i(d),I(Y)}else i(d);v=t(d)}if(v!==null)var Se=!0;else{var Ge=t(h);Ge!==null&&ie(T,Ge.startTime-Y),Se=!1}return Se}finally{v=null,g=K,_=!1}}var N=!1,F=null,E=-1,L=5,O=-1;function z(){return!(n.unstable_now()-O<L)}function $(){if(F!==null){var q=n.unstable_now();O=q;var Y=!0;try{Y=F(!0,q)}finally{Y?Z():(N=!1,F=null)}}else N=!1}var Z;if(typeof R=="function")Z=function(){R($)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=$,Z=function(){Q.postMessage(null)}}else Z=function(){S($,0)};function de(q){F=q,N||(N=!0,Z())}function ie(q,Y){E=S(function(){q(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,de(D))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var K=g;g=Y;try{return q()}finally{g=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=g;g=q;try{return Y()}finally{g=K}},n.unstable_scheduleCallback=function(q,Y,K){var U=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?U+K:U):K=U,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=K+se,q={id:p++,callback:Y,priorityLevel:q,startTime:K,expirationTime:se,sortIndex:-1},K>U?(q.sortIndex=K,e(h,q),t(d)===null&&q===t(h)&&(A?(y(E),E=-1):A=!0,ie(T,K-U))):(q.sortIndex=se,e(d,q),M||_||(M=!0,de(D))),q},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(q){var Y=g;return function(){var K=g;g=Y;try{return q.apply(this,arguments)}finally{g=K}}}})(gd)),gd}var Z0;function YE(){return Z0||(Z0=1,md.exports=jE()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function $E(){if(J0)return qn;J0=1;var n=Dp(),e=YE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(a[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function _(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,f){if(s===null||typeof s>"u"||_(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(r,s,l,f,m,x,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=x,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new A(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new A(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new A(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new A(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new A(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new A(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new A(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new A(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new A(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(y,R);S[s]=new A(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(y,R);S[s]=new A(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(y,R);S[s]=new A(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new A(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new A(r,1,!1,r.toLowerCase(),null,!0,!0)});function I(r,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):m.mustUseProperty?r[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?r.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var T=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),q=Symbol.iterator;function Y(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var K=Object.assign,U;function se(r){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var Se=!1;function Ge(r,s){if(!r||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var f=ue}Reflect.construct(r,[],s)}else{try{s.call()}catch(ue){f=ue}r.call(s.prototype)}else{try{throw Error()}catch(ue){f=ue}r()}}catch(ue){if(ue&&f&&typeof ue.stack=="string"){for(var m=ue.stack.split(`
`),x=f.stack.split(`
`),b=m.length-1,B=x.length-1;1<=b&&0<=B&&m[b]!==x[B];)B--;for(;1<=b&&0<=B;b--,B--)if(m[b]!==x[B]){if(b!==1||B!==1)do if(b--,B--,0>B||m[b]!==x[B]){var V=`
`+m[b].replace(" at new "," at ");return r.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",r.displayName)),V}while(1<=b&&0<=B);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?se(r):""}function Ve(r){switch(r.tag){case 5:return se(r.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return r=Ge(r.type,!1),r;case 11:return r=Ge(r.type.render,!1),r;case 1:return r=Ge(r.type,!0),r;default:return""}}function We(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case N:return"Portal";case L:return"Profiler";case E:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case z:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case $:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return s=r.displayName||null,s!==null?s:We(r.type)||"Memo";case de:s=r._payload,r=r._init;try{return We(r(s))}catch{}}return null}function le(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function we(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(r){var s=we(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return m.call(this)},set:function(b){f=""+b,x.call(this,b)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ke(r){r._valueTracker||(r._valueTracker=tt(r))}function ft(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=we(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function Wt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function dt(r,s){var l=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function vt(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function It(r,s){s=s.checked,s!=null&&I(r,"checked",s,!1)}function ht(r,s){It(r,s);var l=fe(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Zt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Zt(r,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function kt(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Zt(r,s,l){(s!=="number"||Wt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var an=Array.isArray;function Nt(r,s,l,f){if(r=r.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<r.length;l++)m=s.hasOwnProperty("$"+r[l].value),r[l].selected!==m&&(r[l].selected=m),m&&f&&(r[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,m=0;m<r.length;m++){if(r[m].value===l){r[m].selected=!0,f&&(r[m].defaultSelected=!0);return}s!==null||r[m].disabled||(s=r[m])}s!==null&&(s.selected=!0)}}function Xt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function X(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(an(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:fe(l)}}function un(r,s){var l=fe(s.value),f=fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function bt(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function k(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?k(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var J,oe=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,m)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=J.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function he(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(r){be.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ee[s]=Ee[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(r)&&Ee[r]?(""+s).trim():s+"px"}function ge(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,m):r[l]=m}}var Pe=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(r,s){if(s){if(Pe[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function De(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ze(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var nt=null,st=null,H=null;function Ce(r){if(r=co(r)){if(typeof nt!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Tl(s),nt(r.stateNode,r.type,s))}}function me(r){st?H?H.push(r):H=[r]:st=r}function Re(){if(st){var r=st,s=H;if(H=st=null,Ce(r),s)for(r=0;r<s.length;r++)Ce(s[r])}}function Fe(r,s){return r(s)}function ve(){}var Qe=!1;function $e(r,s,l){if(Qe)return r(s,l);Qe=!0;try{return Fe(r,s,l)}finally{Qe=!1,(st!==null||H!==null)&&(ve(),Re())}}function Ct(r,s){var l=r.stateNode;if(l===null)return null;var f=Tl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Mt=!1;if(u)try{var En={};Object.defineProperty(En,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Mt=!1}function ci(r,s,l,f,m,x,b,B,V){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(ye){this.onError(ye)}}var rs=!1,Bs=null,ss=!1,as=null,Iu={onError:function(r){rs=!0,Bs=r}};function ol(r,s,l,f,m,x,b,B,V){rs=!1,Bs=null,ci.apply(Iu,arguments)}function ll(r,s,l,f,m,x,b,B,V){if(ol.apply(this,arguments),rs){if(rs){var ue=Bs;rs=!1,Bs=null}else throw Error(t(198));ss||(ss=!0,as=ue)}}function Fn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function zs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ha(r){if(Fn(r)!==r)throw Error(t(188))}function cl(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return Ha(m),r;if(x===f)return Ha(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var b=!1,B=m.child;B;){if(B===l){b=!0,l=m,f=x;break}if(B===f){b=!0,f=m,l=x;break}B=B.sibling}if(!b){for(B=x.child;B;){if(B===l){b=!0,l=x,f=m;break}if(B===f){b=!0,f=x,l=m;break}B=B.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function os(r){return r=cl(r),r!==null?Ga(r):null}function Ga(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ga(r);if(s!==null)return s;r=r.sibling}return null}var ls=e.unstable_scheduleCallback,Wa=e.unstable_cancelCallback,ul=e.unstable_shouldYield,Uu=e.unstable_requestPaint,$t=e.unstable_now,Fu=e.unstable_getCurrentPriorityLevel,Xa=e.unstable_ImmediatePriority,ja=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,G=e.unstable_LowPriority,ce=e.unstable_IdlePriority,te=null,ee=null;function Ie(r){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(te,r,void 0,(r.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Je,Ne=Math.log,Xe=Math.LN2;function Je(r){return r>>>=0,r===0?32:31-(Ne(r)/Xe|0)|0}var lt=64,ut=4194304;function ze(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function xt(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,x=r.pingedLanes,b=l&268435455;if(b!==0){var B=b&~m;B!==0?f=ze(B):(x&=b,x!==0&&(f=ze(x)))}else b=l&~m,b!==0?f=ze(b):x!==0&&(f=ze(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-Le(s),m=1<<l,f|=r[l],s&=~m;return f}function Jt(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,m=r.expirationTimes,x=r.pendingLanes;0<x;){var b=31-Le(x),B=1<<b,V=m[b];V===-1?((B&l)===0||(B&f)!==0)&&(m[b]=Jt(B,s)):V<=s&&(r.expiredLanes|=B),x&=~B}}function Lt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function fn(){var r=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),r}function Oe(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function nn(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Le(s),r[s]=l}function _t(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var m=31-Le(l),x=1<<m;s[m]=0,f[m]=-1,r[m]=-1,l&=~x}}function Cn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-Le(l),m=1<<f;m&s|r[f]&s&&(r[f]|=s),l&=~m}}var pt=0;function Ei(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var lr,Rt,jt,wi,Ut,ui=!1,Ti=[],Ai=null,Cr=null,Rr=null,Ya=new Map,$a=new Map,Pr=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(r,s){switch(r){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ya.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(s.pointerId)}}function qa(r,s,l,f,m,x){return r===null||r.nativeEvent!==x?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=co(s),s!==null&&Rt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),r)}function fM(r,s,l,f,m){switch(s){case"focusin":return Ai=qa(Ai,r,s,l,f,m),!0;case"dragenter":return Cr=qa(Cr,r,s,l,f,m),!0;case"mouseover":return Rr=qa(Rr,r,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return Ya.set(x,qa(Ya.get(x)||null,r,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,$a.set(x,qa($a.get(x)||null,r,s,l,f,m)),!0}return!1}function Pm(r){var s=cs(r.target);if(s!==null){var l=Fn(s);if(l!==null){if(s=l.tag,s===13){if(s=zs(l),s!==null){r.blockedOn=s,Ut(r.priority,function(){jt(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function fl(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Ou(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Ae=f,l.target.dispatchEvent(f),Ae=null}else return s=co(l),s!==null&&Rt(s),r.blockedOn=l,!1;s.shift()}return!0}function Dm(r,s,l){fl(r)&&l.delete(s)}function dM(){ui=!1,Ai!==null&&fl(Ai)&&(Ai=null),Cr!==null&&fl(Cr)&&(Cr=null),Rr!==null&&fl(Rr)&&(Rr=null),Ya.forEach(Dm),$a.forEach(Dm)}function Ka(r,s){r.blockedOn===s&&(r.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dM)))}function Za(r){function s(m){return Ka(m,r)}if(0<Ti.length){Ka(Ti[0],r);for(var l=1;l<Ti.length;l++){var f=Ti[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Ai!==null&&Ka(Ai,r),Cr!==null&&Ka(Cr,r),Rr!==null&&Ka(Rr,r),Ya.forEach(s),$a.forEach(s),l=0;l<Pr.length;l++)f=Pr[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Pr.length&&(l=Pr[0],l.blockedOn===null);)Pm(l),l.blockedOn===null&&Pr.shift()}var Vs=T.ReactCurrentBatchConfig,dl=!0;function hM(r,s,l,f){var m=pt,x=Vs.transition;Vs.transition=null;try{pt=1,ku(r,s,l,f)}finally{pt=m,Vs.transition=x}}function pM(r,s,l,f){var m=pt,x=Vs.transition;Vs.transition=null;try{pt=4,ku(r,s,l,f)}finally{pt=m,Vs.transition=x}}function ku(r,s,l,f){if(dl){var m=Ou(r,s,l,f);if(m===null)tf(r,s,f,hl,l),Rm(r,f);else if(fM(m,r,s,l,f))f.stopPropagation();else if(Rm(r,f),s&4&&-1<uM.indexOf(r)){for(;m!==null;){var x=co(m);if(x!==null&&lr(x),x=Ou(r,s,l,f),x===null&&tf(r,s,f,hl,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else tf(r,s,f,null,l)}}var hl=null;function Ou(r,s,l,f){if(hl=null,r=Ze(f),r=cs(r),r!==null)if(s=Fn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=zs(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return hl=r,null}function Lm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case Xa:return 1;case ja:return 4;case C:case G:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Dr=null,Bu=null,pl=null;function Nm(){if(pl)return pl;var r,s=Bu,l=s.length,f,m="value"in Dr?Dr.value:Dr.textContent,x=m.length;for(r=0;r<l&&s[r]===m[r];r++);var b=l-r;for(f=1;f<=b&&s[l-f]===m[x-f];f++);return pl=m.slice(r,1<f?1-f:void 0)}function ml(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function gl(){return!0}function Im(){return!1}function ei(r){function s(l,f,m,x,b){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var B in r)r.hasOwnProperty(B)&&(l=r[B],this[B]=l?l(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?gl:Im,this.isPropagationStopped=Im,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),s}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=ei(Hs),Ja=K({},Hs,{view:0,detail:0}),mM=ei(Ja),Vu,Hu,Qa,vl=K({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Qa&&(Qa&&r.type==="mousemove"?(Vu=r.screenX-Qa.screenX,Hu=r.screenY-Qa.screenY):Hu=Vu=0,Qa=r),Vu)},movementY:function(r){return"movementY"in r?r.movementY:Hu}}),Um=ei(vl),gM=K({},vl,{dataTransfer:0}),vM=ei(gM),xM=K({},Ja,{relatedTarget:0}),Gu=ei(xM),_M=K({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),yM=ei(_M),SM=K({},Hs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),MM=ei(SM),EM=K({},Hs,{data:0}),Fm=ei(EM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=AM[r])?!!s[r]:!1}function Wu(){return bM}var CM=K({},Ja,{key:function(r){if(r.key){var s=wM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ml(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?TM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(r){return r.type==="keypress"?ml(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ml(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),RM=ei(CM),PM=K({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=ei(PM),DM=K({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),LM=ei(DM),NM=K({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=ei(NM),UM=K({},vl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),FM=ei(UM),kM=[9,13,27,32],Xu=u&&"CompositionEvent"in window,eo=null;u&&"documentMode"in document&&(eo=document.documentMode);var OM=u&&"TextEvent"in window&&!eo,Om=u&&(!Xu||eo&&8<eo&&11>=eo),Bm=" ",zm=!1;function Vm(r,s){switch(r){case"keyup":return kM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function BM(r,s){switch(r){case"compositionend":return Hm(s);case"keypress":return s.which!==32?null:(zm=!0,Bm);case"textInput":return r=s.data,r===Bm&&zm?null:r;default:return null}}function zM(r,s){if(Gs)return r==="compositionend"||!Xu&&Vm(r,s)?(r=Nm(),pl=Bu=Dr=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Om&&s.locale!=="ko"?null:s.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!VM[r.type]:s==="textarea"}function Wm(r,s,l,f){me(f),s=Ml(s,"onChange"),0<s.length&&(l=new zu("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var to=null,no=null;function HM(r){lg(r,0)}function xl(r){var s=$s(r);if(ft(s))return r}function GM(r,s){if(r==="change")return s}var Xm=!1;if(u){var ju;if(u){var Yu="oninput"in document;if(!Yu){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Yu=typeof jm.oninput=="function"}ju=Yu}else ju=!1;Xm=ju&&(!document.documentMode||9<document.documentMode)}function Ym(){to&&(to.detachEvent("onpropertychange",$m),no=to=null)}function $m(r){if(r.propertyName==="value"&&xl(no)){var s=[];Wm(s,no,r,Ze(r)),$e(HM,s)}}function WM(r,s,l){r==="focusin"?(Ym(),to=s,no=l,to.attachEvent("onpropertychange",$m)):r==="focusout"&&Ym()}function XM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return xl(no)}function jM(r,s){if(r==="click")return xl(s)}function YM(r,s){if(r==="input"||r==="change")return xl(s)}function $M(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bi=typeof Object.is=="function"?Object.is:$M;function io(r,s){if(bi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!bi(r[m],s[m]))return!1}return!0}function qm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Km(r,s){var l=qm(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Zm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Zm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Jm(){for(var r=window,s=Wt();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Wt(r.document)}return s}function $u(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function qM(r){var s=Jm(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Zm(l.ownerDocument.documentElement,l)){if(f!==null&&$u(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!r.extend&&x>f&&(m=f,f=x,x=m),m=Km(l,x);var b=Km(l,f);m&&b&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),r.removeAllRanges(),x>f?(r.addRange(s),r.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var KM=u&&"documentMode"in document&&11>=document.documentMode,Ws=null,qu=null,ro=null,Ku=!1;function Qm(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ku||Ws==null||Ws!==Wt(f)||(f=Ws,"selectionStart"in f&&$u(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ro&&io(ro,f)||(ro=f,f=Ml(qu,"onSelect"),0<f.length&&(s=new zu("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=Ws)))}function _l(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Xs={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Zu={},eg={};u&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function yl(r){if(Zu[r])return Zu[r];if(!Xs[r])return r;var s=Xs[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in eg)return Zu[r]=s[l];return r}var tg=yl("animationend"),ng=yl("animationiteration"),ig=yl("animationstart"),rg=yl("transitionend"),sg=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(r,s){sg.set(r,s),o(s,[r])}for(var Ju=0;Ju<ag.length;Ju++){var Qu=ag[Ju],ZM=Qu.toLowerCase(),JM=Qu[0].toUpperCase()+Qu.slice(1);Lr(ZM,"on"+JM)}Lr(tg,"onAnimationEnd"),Lr(ng,"onAnimationIteration"),Lr(ig,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(rg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function og(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,ll(f,s,void 0,r),r.currentTarget=null}function lg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var b=f.length-1;0<=b;b--){var B=f[b],V=B.instance,ue=B.currentTarget;if(B=B.listener,V!==x&&m.isPropagationStopped())break e;og(m,B,ue),x=V}else for(b=0;b<f.length;b++){if(B=f[b],V=B.instance,ue=B.currentTarget,B=B.listener,V!==x&&m.isPropagationStopped())break e;og(m,B,ue),x=V}}}if(ss)throw r=as,ss=!1,as=null,r}function Ht(r,s){var l=s[lf];l===void 0&&(l=s[lf]=new Set);var f=r+"__bubble";l.has(f)||(cg(s,r,2,!1),l.add(f))}function ef(r,s,l){var f=0;s&&(f|=4),cg(l,r,f,s)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ao(r){if(!r[Sl]){r[Sl]=!0,i.forEach(function(l){l!=="selectionchange"&&(QM.has(l)||ef(l,!1,r),ef(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Sl]||(s[Sl]=!0,ef("selectionchange",!1,s))}}function cg(r,s,l,f){switch(Lm(s)){case 1:var m=hM;break;case 4:m=pM;break;default:m=ku}l=m.bind(null,s,l,r),m=void 0,!Mt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?r.addEventListener(s,l,{capture:!0,passive:m}):r.addEventListener(s,l,!0):m!==void 0?r.addEventListener(s,l,{passive:m}):r.addEventListener(s,l,!1)}function tf(r,s,l,f,m){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var B=f.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(b===4)for(b=f.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;b=b.return}for(;B!==null;){if(b=cs(B),b===null)return;if(V=b.tag,V===5||V===6){f=x=b;continue e}B=B.parentNode}}f=f.return}$e(function(){var ue=x,ye=Ze(l),Me=[];e:{var _e=sg.get(r);if(_e!==void 0){var Be=zu,je=r;switch(r){case"keypress":if(ml(l)===0)break e;case"keydown":case"keyup":Be=RM;break;case"focusin":je="focus",Be=Gu;break;case"focusout":je="blur",Be=Gu;break;case"beforeblur":case"afterblur":Be=Gu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=vM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=LM;break;case tg:case ng:case ig:Be=yM;break;case rg:Be=IM;break;case"scroll":Be=mM;break;case"wheel":Be=FM;break;case"copy":case"cut":case"paste":Be=MM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=km}var qe=(s&4)!==0,rn=!qe&&r==="scroll",ne=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var j=ue,ae;j!==null;){ae=j;var Te=ae.stateNode;if(ae.tag===5&&Te!==null&&(ae=Te,ne!==null&&(Te=Ct(j,ne),Te!=null&&qe.push(oo(j,Te,ae)))),rn)break;j=j.return}0<qe.length&&(_e=new Be(_e,je,null,l,ye),Me.push({event:_e,listeners:qe}))}}if((s&7)===0){e:{if(_e=r==="mouseover"||r==="pointerover",Be=r==="mouseout"||r==="pointerout",_e&&l!==Ae&&(je=l.relatedTarget||l.fromElement)&&(cs(je)||je[cr]))break e;if((Be||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(je=l.relatedTarget||l.toElement,Be=ue,je=je?cs(je):null,je!==null&&(rn=Fn(je),je!==rn||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ue),Be!==je)){if(qe=Um,Te="onMouseLeave",ne="onMouseEnter",j="mouse",(r==="pointerout"||r==="pointerover")&&(qe=km,Te="onPointerLeave",ne="onPointerEnter",j="pointer"),rn=Be==null?_e:$s(Be),ae=je==null?_e:$s(je),_e=new qe(Te,j+"leave",Be,l,ye),_e.target=rn,_e.relatedTarget=ae,Te=null,cs(ye)===ue&&(qe=new qe(ne,j+"enter",je,l,ye),qe.target=ae,qe.relatedTarget=rn,Te=qe),rn=Te,Be&&je)t:{for(qe=Be,ne=je,j=0,ae=qe;ae;ae=js(ae))j++;for(ae=0,Te=ne;Te;Te=js(Te))ae++;for(;0<j-ae;)qe=js(qe),j--;for(;0<ae-j;)ne=js(ne),ae--;for(;j--;){if(qe===ne||ne!==null&&qe===ne.alternate)break t;qe=js(qe),ne=js(ne)}qe=null}else qe=null;Be!==null&&ug(Me,_e,Be,qe,!1),je!==null&&rn!==null&&ug(Me,rn,je,qe,!0)}}e:{if(_e=ue?$s(ue):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var et=GM;else if(Gm(_e))if(Xm)et=YM;else{et=XM;var it=WM}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(et=jM);if(et&&(et=et(r,ue))){Wm(Me,et,l,ye);break e}it&&it(r,_e,ue),r==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Zt(_e,"number",_e.value)}switch(it=ue?$s(ue):window,r){case"focusin":(Gm(it)||it.contentEditable==="true")&&(Ws=it,qu=ue,ro=null);break;case"focusout":ro=qu=Ws=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Qm(Me,l,ye);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":Qm(Me,l,ye)}var rt;if(Xu)e:{switch(r){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Gs?Vm(r,l)&&(at="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Om&&l.locale!=="ko"&&(Gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Gs&&(rt=Nm()):(Dr=ye,Bu="value"in Dr?Dr.value:Dr.textContent,Gs=!0)),it=Ml(ue,at),0<it.length&&(at=new Fm(at,r,null,l,ye),Me.push({event:at,listeners:it}),rt?at.data=rt:(rt=Hm(l),rt!==null&&(at.data=rt)))),(rt=OM?BM(r,l):zM(r,l))&&(ue=Ml(ue,"onBeforeInput"),0<ue.length&&(ye=new Fm("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:ue}),ye.data=rt))}lg(Me,s)})}function oo(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Ml(r,s){for(var l=s+"Capture",f=[];r!==null;){var m=r,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Ct(r,l),x!=null&&f.unshift(oo(r,x,m)),x=Ct(r,s),x!=null&&f.push(oo(r,x,m))),r=r.return}return f}function js(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ug(r,s,l,f,m){for(var x=s._reactName,b=[];l!==null&&l!==f;){var B=l,V=B.alternate,ue=B.stateNode;if(V!==null&&V===f)break;B.tag===5&&ue!==null&&(B=ue,m?(V=Ct(l,x),V!=null&&b.unshift(oo(l,V,B))):m||(V=Ct(l,x),V!=null&&b.push(oo(l,V,B)))),l=l.return}b.length!==0&&r.push({event:s,listeners:b})}var eE=/\r\n?/g,tE=/\u0000|\uFFFD/g;function fg(r){return(typeof r=="string"?r:""+r).replace(eE,`
`).replace(tE,"")}function El(r,s,l){if(s=fg(s),fg(r)!==s&&l)throw Error(t(425))}function wl(){}var nf=null,rf=null;function sf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(r){return dg.resolve(null).then(r).catch(rE)}:af;function rE(r){setTimeout(function(){throw r})}function of(r,s){var l=s,f=0;do{var m=l.nextSibling;if(r.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){r.removeChild(m),Za(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Za(s)}function Nr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function hg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ji="__reactFiber$"+Ys,lo="__reactProps$"+Ys,cr="__reactContainer$"+Ys,lf="__reactEvents$"+Ys,sE="__reactListeners$"+Ys,aE="__reactHandles$"+Ys;function cs(r){var s=r[ji];if(s)return s;for(var l=r.parentNode;l;){if(s=l[cr]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=hg(r);r!==null;){if(l=r[ji])return l;r=hg(r)}return s}r=l,l=r.parentNode}return null}function co(r){return r=r[ji]||r[cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function $s(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Tl(r){return r[lo]||null}var cf=[],qs=-1;function Ir(r){return{current:r}}function Gt(r){0>qs||(r.current=cf[qs],cf[qs]=null,qs--)}function zt(r,s){qs++,cf[qs]=r.current,r.current=s}var Ur={},Rn=Ir(Ur),Wn=Ir(!1),us=Ur;function Ks(r,s){var l=r.type.contextTypes;if(!l)return Ur;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=m),m}function Xn(r){return r=r.childContextTypes,r!=null}function Al(){Gt(Wn),Gt(Rn)}function pg(r,s,l){if(Rn.current!==Ur)throw Error(t(168));zt(Rn,s),zt(Wn,l)}function mg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,le(r)||"Unknown",m));return K({},l,f)}function bl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Ur,us=Rn.current,zt(Rn,r),zt(Wn,Wn.current),!0}function gg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=mg(r,s,us),f.__reactInternalMemoizedMergedChildContext=r,Gt(Wn),Gt(Rn),zt(Rn,r)):Gt(Wn),zt(Wn,l)}var ur=null,Cl=!1,uf=!1;function vg(r){ur===null?ur=[r]:ur.push(r)}function oE(r){Cl=!0,vg(r)}function Fr(){if(!uf&&ur!==null){uf=!0;var r=0,s=pt;try{var l=ur;for(pt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}ur=null,Cl=!1}catch(m){throw ur!==null&&(ur=ur.slice(r+1)),ls(Xa,Fr),m}finally{pt=s,uf=!1}}return null}var Zs=[],Js=0,Rl=null,Pl=0,fi=[],di=0,fs=null,fr=1,dr="";function ds(r,s){Zs[Js++]=Pl,Zs[Js++]=Rl,Rl=r,Pl=s}function xg(r,s,l){fi[di++]=fr,fi[di++]=dr,fi[di++]=fs,fs=r;var f=fr;r=dr;var m=32-Le(f)-1;f&=~(1<<m),l+=1;var x=32-Le(s)+m;if(30<x){var b=m-m%5;x=(f&(1<<b)-1).toString(32),f>>=b,m-=b,fr=1<<32-Le(s)+m|l<<m|f,dr=x+r}else fr=1<<x|l<<m|f,dr=r}function ff(r){r.return!==null&&(ds(r,1),xg(r,1,0))}function df(r){for(;r===Rl;)Rl=Zs[--Js],Zs[Js]=null,Pl=Zs[--Js],Zs[Js]=null;for(;r===fs;)fs=fi[--di],fi[di]=null,dr=fi[--di],fi[di]=null,fr=fi[--di],fi[di]=null}var ti=null,ni=null,Yt=!1,Ci=null;function _g(r,s){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function yg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ti=r,ni=Nr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ti=r,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=fs!==null?{id:fr,overflow:dr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,ti=r,ni=null,!0):!1;default:return!1}}function hf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function pf(r){if(Yt){var s=ni;if(s){var l=s;if(!yg(r,s)){if(hf(r))throw Error(t(418));s=Nr(l.nextSibling);var f=ti;s&&yg(r,s)?_g(f,l):(r.flags=r.flags&-4097|2,Yt=!1,ti=r)}}else{if(hf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Yt=!1,ti=r}}}function Sg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ti=r}function Dl(r){if(r!==ti)return!1;if(!Yt)return Sg(r),Yt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!sf(r.type,r.memoizedProps)),s&&(s=ni)){if(hf(r))throw Mg(),Error(t(418));for(;s;)_g(r,s),s=Nr(s.nextSibling)}if(Sg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){ni=Nr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}ni=null}}else ni=ti?Nr(r.stateNode.nextSibling):null;return!0}function Mg(){for(var r=ni;r;)r=Nr(r.nextSibling)}function Qs(){ni=ti=null,Yt=!1}function mf(r){Ci===null?Ci=[r]:Ci.push(r)}var lE=T.ReactCurrentBatchConfig;function uo(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var m=f,x=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(b){var B=m.refs;b===null?delete B[x]:B[x]=b},s._stringRef=x,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Ll(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Eg(r){var s=r._init;return s(r._payload)}function wg(r){function s(ne,j){if(r){var ae=ne.deletions;ae===null?(ne.deletions=[j],ne.flags|=16):ae.push(j)}}function l(ne,j){if(!r)return null;for(;j!==null;)s(ne,j),j=j.sibling;return null}function f(ne,j){for(ne=new Map;j!==null;)j.key!==null?ne.set(j.key,j):ne.set(j.index,j),j=j.sibling;return ne}function m(ne,j){return ne=Wr(ne,j),ne.index=0,ne.sibling=null,ne}function x(ne,j,ae){return ne.index=ae,r?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<j?(ne.flags|=2,j):ae):(ne.flags|=2,j)):(ne.flags|=1048576,j)}function b(ne){return r&&ne.alternate===null&&(ne.flags|=2),ne}function B(ne,j,ae,Te){return j===null||j.tag!==6?(j=ad(ae,ne.mode,Te),j.return=ne,j):(j=m(j,ae),j.return=ne,j)}function V(ne,j,ae,Te){var et=ae.type;return et===F?ye(ne,j,ae.props.children,Te,ae.key):j!==null&&(j.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===de&&Eg(et)===j.type)?(Te=m(j,ae.props),Te.ref=uo(ne,j,ae),Te.return=ne,Te):(Te=nc(ae.type,ae.key,ae.props,null,ne.mode,Te),Te.ref=uo(ne,j,ae),Te.return=ne,Te)}function ue(ne,j,ae,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==ae.containerInfo||j.stateNode.implementation!==ae.implementation?(j=od(ae,ne.mode,Te),j.return=ne,j):(j=m(j,ae.children||[]),j.return=ne,j)}function ye(ne,j,ae,Te,et){return j===null||j.tag!==7?(j=ys(ae,ne.mode,Te,et),j.return=ne,j):(j=m(j,ae),j.return=ne,j)}function Me(ne,j,ae){if(typeof j=="string"&&j!==""||typeof j=="number")return j=ad(""+j,ne.mode,ae),j.return=ne,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return ae=nc(j.type,j.key,j.props,null,ne.mode,ae),ae.ref=uo(ne,null,j),ae.return=ne,ae;case N:return j=od(j,ne.mode,ae),j.return=ne,j;case de:var Te=j._init;return Me(ne,Te(j._payload),ae)}if(an(j)||Y(j))return j=ys(j,ne.mode,ae,null),j.return=ne,j;Ll(ne,j)}return null}function _e(ne,j,ae,Te){var et=j!==null?j.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return et!==null?null:B(ne,j,""+ae,Te);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:return ae.key===et?V(ne,j,ae,Te):null;case N:return ae.key===et?ue(ne,j,ae,Te):null;case de:return et=ae._init,_e(ne,j,et(ae._payload),Te)}if(an(ae)||Y(ae))return et!==null?null:ye(ne,j,ae,Te,null);Ll(ne,ae)}return null}function Be(ne,j,ae,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ne=ne.get(ae)||null,B(j,ne,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return ne=ne.get(Te.key===null?ae:Te.key)||null,V(j,ne,Te,et);case N:return ne=ne.get(Te.key===null?ae:Te.key)||null,ue(j,ne,Te,et);case de:var it=Te._init;return Be(ne,j,ae,it(Te._payload),et)}if(an(Te)||Y(Te))return ne=ne.get(ae)||null,ye(j,ne,Te,et,null);Ll(j,Te)}return null}function je(ne,j,ae,Te){for(var et=null,it=null,rt=j,at=j=0,yn=null;rt!==null&&at<ae.length;at++){rt.index>at?(yn=rt,rt=null):yn=rt.sibling;var Pt=_e(ne,rt,ae[at],Te);if(Pt===null){rt===null&&(rt=yn);break}r&&rt&&Pt.alternate===null&&s(ne,rt),j=x(Pt,j,at),it===null?et=Pt:it.sibling=Pt,it=Pt,rt=yn}if(at===ae.length)return l(ne,rt),Yt&&ds(ne,at),et;if(rt===null){for(;at<ae.length;at++)rt=Me(ne,ae[at],Te),rt!==null&&(j=x(rt,j,at),it===null?et=rt:it.sibling=rt,it=rt);return Yt&&ds(ne,at),et}for(rt=f(ne,rt);at<ae.length;at++)yn=Be(rt,ne,at,ae[at],Te),yn!==null&&(r&&yn.alternate!==null&&rt.delete(yn.key===null?at:yn.key),j=x(yn,j,at),it===null?et=yn:it.sibling=yn,it=yn);return r&&rt.forEach(function(Xr){return s(ne,Xr)}),Yt&&ds(ne,at),et}function qe(ne,j,ae,Te){var et=Y(ae);if(typeof et!="function")throw Error(t(150));if(ae=et.call(ae),ae==null)throw Error(t(151));for(var it=et=null,rt=j,at=j=0,yn=null,Pt=ae.next();rt!==null&&!Pt.done;at++,Pt=ae.next()){rt.index>at?(yn=rt,rt=null):yn=rt.sibling;var Xr=_e(ne,rt,Pt.value,Te);if(Xr===null){rt===null&&(rt=yn);break}r&&rt&&Xr.alternate===null&&s(ne,rt),j=x(Xr,j,at),it===null?et=Xr:it.sibling=Xr,it=Xr,rt=yn}if(Pt.done)return l(ne,rt),Yt&&ds(ne,at),et;if(rt===null){for(;!Pt.done;at++,Pt=ae.next())Pt=Me(ne,Pt.value,Te),Pt!==null&&(j=x(Pt,j,at),it===null?et=Pt:it.sibling=Pt,it=Pt);return Yt&&ds(ne,at),et}for(rt=f(ne,rt);!Pt.done;at++,Pt=ae.next())Pt=Be(rt,ne,at,Pt.value,Te),Pt!==null&&(r&&Pt.alternate!==null&&rt.delete(Pt.key===null?at:Pt.key),j=x(Pt,j,at),it===null?et=Pt:it.sibling=Pt,it=Pt);return r&&rt.forEach(function(VE){return s(ne,VE)}),Yt&&ds(ne,at),et}function rn(ne,j,ae,Te){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:e:{for(var et=ae.key,it=j;it!==null;){if(it.key===et){if(et=ae.type,et===F){if(it.tag===7){l(ne,it.sibling),j=m(it,ae.props.children),j.return=ne,ne=j;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===de&&Eg(et)===it.type){l(ne,it.sibling),j=m(it,ae.props),j.ref=uo(ne,it,ae),j.return=ne,ne=j;break e}l(ne,it);break}else s(ne,it);it=it.sibling}ae.type===F?(j=ys(ae.props.children,ne.mode,Te,ae.key),j.return=ne,ne=j):(Te=nc(ae.type,ae.key,ae.props,null,ne.mode,Te),Te.ref=uo(ne,j,ae),Te.return=ne,ne=Te)}return b(ne);case N:e:{for(it=ae.key;j!==null;){if(j.key===it)if(j.tag===4&&j.stateNode.containerInfo===ae.containerInfo&&j.stateNode.implementation===ae.implementation){l(ne,j.sibling),j=m(j,ae.children||[]),j.return=ne,ne=j;break e}else{l(ne,j);break}else s(ne,j);j=j.sibling}j=od(ae,ne.mode,Te),j.return=ne,ne=j}return b(ne);case de:return it=ae._init,rn(ne,j,it(ae._payload),Te)}if(an(ae))return je(ne,j,ae,Te);if(Y(ae))return qe(ne,j,ae,Te);Ll(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,j!==null&&j.tag===6?(l(ne,j.sibling),j=m(j,ae),j.return=ne,ne=j):(l(ne,j),j=ad(ae,ne.mode,Te),j.return=ne,ne=j),b(ne)):l(ne,j)}return rn}var ea=wg(!0),Tg=wg(!1),Nl=Ir(null),Il=null,ta=null,gf=null;function vf(){gf=ta=Il=null}function xf(r){var s=Nl.current;Gt(Nl),r._currentValue=s}function _f(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function na(r,s){Il=r,gf=ta=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(jn=!0),r.firstContext=null)}function hi(r){var s=r._currentValue;if(gf!==r)if(r={context:r,memoizedValue:s,next:null},ta===null){if(Il===null)throw Error(t(308));ta=r,Il.dependencies={lanes:0,firstContext:r}}else ta=ta.next=r;return s}var hs=null;function yf(r){hs===null?hs=[r]:hs.push(r)}function Ag(r,s,l,f){var m=s.interleaved;return m===null?(l.next=l,yf(s)):(l.next=m.next,m.next=l),s.interleaved=l,hr(r,f)}function hr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var kr=!1;function Sf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function pr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Tt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,hr(r,l)}return m=f.interleaved,m===null?(s.next=s,yf(f)):(s.next=m.next,m.next=s),f.interleaved=s,hr(r,l)}function Ul(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Cn(r,l)}}function Cg(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=b:x=x.next=b,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Fl(r,s,l,f){var m=r.updateQueue;kr=!1;var x=m.firstBaseUpdate,b=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var V=B,ue=V.next;V.next=null,b===null?x=ue:b.next=ue,b=V;var ye=r.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==b&&(B===null?ye.firstBaseUpdate=ue:B.next=ue,ye.lastBaseUpdate=V))}if(x!==null){var Me=m.baseState;b=0,ye=ue=V=null,B=x;do{var _e=B.lane,Be=B.eventTime;if((f&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Be,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var je=r,qe=B;switch(_e=s,Be=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Me=je.call(Be,Me,_e);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,_e=typeof je=="function"?je.call(Be,Me,_e):je,_e==null)break e;Me=K({},Me,_e);break e;case 2:kr=!0}}B.callback!==null&&B.lane!==0&&(r.flags|=64,_e=m.effects,_e===null?m.effects=[B]:_e.push(B))}else Be={eventTime:Be,lane:_e,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(ue=ye=Be,V=Me):ye=ye.next=Be,b|=_e;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;_e=B,B=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ye===null&&(V=Me),m.baseState=V,m.firstBaseUpdate=ue,m.lastBaseUpdate=ye,s=m.shared.interleaved,s!==null){m=s;do b|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);gs|=b,r.lanes=b,r.memoizedState=Me}}function Rg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var fo={},Yi=Ir(fo),ho=Ir(fo),po=Ir(fo);function ps(r){if(r===fo)throw Error(t(174));return r}function Mf(r,s){switch(zt(po,s),zt(ho,r),zt(Yi,fo),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}Gt(Yi),zt(Yi,s)}function ia(){Gt(Yi),Gt(ho),Gt(po)}function Pg(r){ps(po.current);var s=ps(Yi.current),l=w(s,r.type);s!==l&&(zt(ho,r),zt(Yi,l))}function Ef(r){ho.current===r&&(Gt(Yi),Gt(ho))}var qt=Ir(0);function kl(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wf=[];function Tf(){for(var r=0;r<wf.length;r++)wf[r]._workInProgressVersionPrimary=null;wf.length=0}var Ol=T.ReactCurrentDispatcher,Af=T.ReactCurrentBatchConfig,ms=0,Kt=null,dn=null,xn=null,Bl=!1,mo=!1,go=0,cE=0;function Pn(){throw Error(t(321))}function bf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!bi(r[l],s[l]))return!1;return!0}function Cf(r,s,l,f,m,x){if(ms=x,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ol.current=r===null||r.memoizedState===null?hE:pE,r=l(f,m),mo){x=0;do{if(mo=!1,go=0,25<=x)throw Error(t(301));x+=1,xn=dn=null,s.updateQueue=null,Ol.current=mE,r=l(f,m)}while(mo)}if(Ol.current=Hl,s=dn!==null&&dn.next!==null,ms=0,xn=dn=Kt=null,Bl=!1,s)throw Error(t(300));return r}function Rf(){var r=go!==0;return go=0,r}function $i(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Kt.memoizedState=xn=r:xn=xn.next=r,xn}function pi(){if(dn===null){var r=Kt.alternate;r=r!==null?r.memoizedState:null}else r=dn.next;var s=xn===null?Kt.memoizedState:xn.next;if(s!==null)xn=s,dn=r;else{if(r===null)throw Error(t(310));dn=r,r={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},xn===null?Kt.memoizedState=xn=r:xn=xn.next=r}return xn}function vo(r,s){return typeof s=="function"?s(r):s}function Pf(r){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=dn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var b=m.next;m.next=x.next,x.next=b}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var B=b=null,V=null,ue=x;do{var ye=ue.lane;if((ms&ye)===ye)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),f=ue.hasEagerState?ue.eagerState:r(f,ue.action);else{var Me={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(B=V=Me,b=f):V=V.next=Me,Kt.lanes|=ye,gs|=ye}ue=ue.next}while(ue!==null&&ue!==x);V===null?b=f:V.next=B,bi(f,s.memoizedState)||(jn=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=V,l.lastRenderedState=f}if(r=l.interleaved,r!==null){m=r;do x=m.lane,Kt.lanes|=x,gs|=x,m=m.next;while(m!==r)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Df(r){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var b=m=m.next;do x=r(x,b.action),b=b.next;while(b!==m);bi(x,s.memoizedState)||(jn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function Dg(){}function Lg(r,s){var l=Kt,f=pi(),m=s(),x=!bi(f.memoizedState,m);if(x&&(f.memoizedState=m,jn=!0),f=f.queue,Lf(Ug.bind(null,l,f,r),[r]),f.getSnapshot!==s||x||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,xo(9,Ig.bind(null,l,f,m,s),void 0,null),_n===null)throw Error(t(349));(ms&30)!==0||Ng(l,s,m)}return m}function Ng(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Ig(r,s,l,f){s.value=l,s.getSnapshot=f,Fg(s)&&kg(r)}function Ug(r,s,l){return l(function(){Fg(s)&&kg(r)})}function Fg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!bi(r,l)}catch{return!0}}function kg(r){var s=hr(r,1);s!==null&&Li(s,r,1,-1)}function Og(r){var s=$i();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:r},s.queue=r,r=r.dispatch=dE.bind(null,Kt,r),[s.memoizedState,r]}function xo(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function Bg(){return pi().memoizedState}function zl(r,s,l,f){var m=$i();Kt.flags|=r,m.memoizedState=xo(1|s,l,void 0,f===void 0?null:f)}function Vl(r,s,l,f){var m=pi();f=f===void 0?null:f;var x=void 0;if(dn!==null){var b=dn.memoizedState;if(x=b.destroy,f!==null&&bf(f,b.deps)){m.memoizedState=xo(s,l,x,f);return}}Kt.flags|=r,m.memoizedState=xo(1|s,l,x,f)}function zg(r,s){return zl(8390656,8,r,s)}function Lf(r,s){return Vl(2048,8,r,s)}function Vg(r,s){return Vl(4,2,r,s)}function Hg(r,s){return Vl(4,4,r,s)}function Gg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Wg(r,s,l){return l=l!=null?l.concat([r]):null,Vl(4,4,Gg.bind(null,s,r),l)}function Nf(){}function Xg(r,s){var l=pi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function jg(r,s){var l=pi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function Yg(r,s,l){return(ms&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=l):(bi(l,s)||(l=fn(),Kt.lanes|=l,gs|=l,r.baseState=!0),s)}function uE(r,s){var l=pt;pt=l!==0&&4>l?l:4,r(!0);var f=Af.transition;Af.transition={};try{r(!1),s()}finally{pt=l,Af.transition=f}}function $g(){return pi().memoizedState}function fE(r,s,l){var f=Hr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},qg(r))Kg(s,l);else if(l=Ag(r,s,l,f),l!==null){var m=On();Li(l,r,f,m),Zg(l,s,f)}}function dE(r,s,l){var f=Hr(r),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(r))Kg(s,m);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var b=s.lastRenderedState,B=x(b,l);if(m.hasEagerState=!0,m.eagerState=B,bi(B,b)){var V=s.interleaved;V===null?(m.next=m,yf(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}l=Ag(r,s,m,f),l!==null&&(m=On(),Li(l,r,f,m),Zg(l,s,f))}}function qg(r){var s=r.alternate;return r===Kt||s!==null&&s===Kt}function Kg(r,s){mo=Bl=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Zg(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Cn(r,l)}}var Hl={readContext:hi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},hE={readContext:hi,useCallback:function(r,s){return $i().memoizedState=[r,s===void 0?null:s],r},useContext:hi,useEffect:zg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,zl(4194308,4,Gg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return zl(4194308,4,r,s)},useInsertionEffect:function(r,s){return zl(4,2,r,s)},useMemo:function(r,s){var l=$i();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=$i();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=fE.bind(null,Kt,r),[f.memoizedState,r]},useRef:function(r){var s=$i();return r={current:r},s.memoizedState=r},useState:Og,useDebugValue:Nf,useDeferredValue:function(r){return $i().memoizedState=r},useTransition:function(){var r=Og(!1),s=r[0];return r=uE.bind(null,r[1]),$i().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Kt,m=$i();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),_n===null)throw Error(t(349));(ms&30)!==0||Ng(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,zg(Ug.bind(null,f,x,r),[r]),f.flags|=2048,xo(9,Ig.bind(null,f,x,l,s),void 0,null),l},useId:function(){var r=$i(),s=_n.identifierPrefix;if(Yt){var l=dr,f=fr;l=(f&~(1<<32-Le(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=go++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=cE++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},pE={readContext:hi,useCallback:Xg,useContext:hi,useEffect:Lf,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Hg,useMemo:jg,useReducer:Pf,useRef:Bg,useState:function(){return Pf(vo)},useDebugValue:Nf,useDeferredValue:function(r){var s=pi();return Yg(s,dn.memoizedState,r)},useTransition:function(){var r=Pf(vo)[0],s=pi().memoizedState;return[r,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1},mE={readContext:hi,useCallback:Xg,useContext:hi,useEffect:Lf,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Hg,useMemo:jg,useReducer:Df,useRef:Bg,useState:function(){return Df(vo)},useDebugValue:Nf,useDeferredValue:function(r){var s=pi();return dn===null?s.memoizedState=r:Yg(s,dn.memoizedState,r)},useTransition:function(){var r=Df(vo)[0],s=pi().memoizedState;return[r,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1};function Ri(r,s){if(r&&r.defaultProps){s=K({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function If(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:K({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Gl={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=On(),m=Hr(r),x=pr(f,m);x.payload=s,l!=null&&(x.callback=l),s=Or(r,x,m),s!==null&&(Li(s,r,m,f),Ul(s,r,m))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=On(),m=Hr(r),x=pr(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Or(r,x,m),s!==null&&(Li(s,r,m,f),Ul(s,r,m))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=On(),f=Hr(r),m=pr(l,f);m.tag=2,s!=null&&(m.callback=s),s=Or(r,m,f),s!==null&&(Li(s,r,f,l),Ul(s,r,f))}};function Jg(r,s,l,f,m,x,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,b):s.prototype&&s.prototype.isPureReactComponent?!io(l,f)||!io(m,x):!0}function Qg(r,s,l){var f=!1,m=Ur,x=s.contextType;return typeof x=="object"&&x!==null?x=hi(x):(m=Xn(s)?us:Rn.current,f=s.contextTypes,x=(f=f!=null)?Ks(r,m):Ur),s=new s(l,x),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gl,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=x),s}function e0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&Gl.enqueueReplaceState(s,s.state,null)}function Uf(r,s,l,f){var m=r.stateNode;m.props=l,m.state=r.memoizedState,m.refs={},Sf(r);var x=s.contextType;typeof x=="object"&&x!==null?m.context=hi(x):(x=Xn(s)?us:Rn.current,m.context=Ks(r,x)),m.state=r.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(If(r,s,x,l),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Gl.enqueueReplaceState(m,m.state,null),Fl(r,l,m,f),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function ra(r,s){try{var l="",f=s;do l+=Ve(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:s,stack:m,digest:null}}function Ff(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function kf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var gE=typeof WeakMap=="function"?WeakMap:Map;function t0(r,s,l){l=pr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Kl||(Kl=!0,Jf=f),kf(r,s)},l}function n0(r,s,l){l=pr(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){kf(r,s)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){kf(r,s),typeof f!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function i0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new gE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),r=PE.bind(null,r,s,l),s.then(r,r))}function r0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function s0(r,s,l,f,m){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=pr(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var vE=T.ReactCurrentOwner,jn=!1;function kn(r,s,l,f){s.child=r===null?Tg(s,null,l,f):ea(s,r.child,l,f)}function a0(r,s,l,f,m){l=l.render;var x=s.ref;return na(s,m),f=Cf(r,s,l,f,x,m),l=Rf(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~m,mr(r,s,m)):(Yt&&l&&ff(s),s.flags|=1,kn(r,s,f,m),s.child)}function o0(r,s,l,f,m){if(r===null){var x=l.type;return typeof x=="function"&&!sd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,l0(r,s,x,f,m)):(r=nc(l.type,null,f,s,s.mode,m),r.ref=s.ref,r.return=s,s.child=r)}if(x=r.child,(r.lanes&m)===0){var b=x.memoizedProps;if(l=l.compare,l=l!==null?l:io,l(b,f)&&r.ref===s.ref)return mr(r,s,m)}return s.flags|=1,r=Wr(x,f),r.ref=s.ref,r.return=s,s.child=r}function l0(r,s,l,f,m){if(r!==null){var x=r.memoizedProps;if(io(x,f)&&r.ref===s.ref)if(jn=!1,s.pendingProps=f=x,(r.lanes&m)!==0)(r.flags&131072)!==0&&(jn=!0);else return s.lanes=r.lanes,mr(r,s,m)}return Of(r,s,l,f,m)}function c0(r,s,l){var f=s.pendingProps,m=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(aa,ii),ii|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,zt(aa,ii),ii|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,zt(aa,ii),ii|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,zt(aa,ii),ii|=f;return kn(r,s,m,l),s.child}function u0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Of(r,s,l,f,m){var x=Xn(l)?us:Rn.current;return x=Ks(s,x),na(s,m),l=Cf(r,s,l,f,x,m),f=Rf(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~m,mr(r,s,m)):(Yt&&f&&ff(s),s.flags|=1,kn(r,s,l,m),s.child)}function f0(r,s,l,f,m){if(Xn(l)){var x=!0;bl(s)}else x=!1;if(na(s,m),s.stateNode===null)Xl(r,s),Qg(s,l,f),Uf(s,l,f,m),f=!0;else if(r===null){var b=s.stateNode,B=s.memoizedProps;b.props=B;var V=b.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=hi(ue):(ue=Xn(l)?us:Rn.current,ue=Ks(s,ue));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==f||V!==ue)&&e0(s,b,f,ue),kr=!1;var _e=s.memoizedState;b.state=_e,Fl(s,f,b,m),V=s.memoizedState,B!==f||_e!==V||Wn.current||kr?(typeof ye=="function"&&(If(s,l,ye,f),V=s.memoizedState),(B=kr||Jg(s,l,B,f,_e,V,ue))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=V),b.props=f,b.state=V,b.context=ue,f=B):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,bg(r,s),B=s.memoizedProps,ue=s.type===s.elementType?B:Ri(s.type,B),b.props=ue,Me=s.pendingProps,_e=b.context,V=l.contextType,typeof V=="object"&&V!==null?V=hi(V):(V=Xn(l)?us:Rn.current,V=Ks(s,V));var Be=l.getDerivedStateFromProps;(ye=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Me||_e!==V)&&e0(s,b,f,V),kr=!1,_e=s.memoizedState,b.state=_e,Fl(s,f,b,m);var je=s.memoizedState;B!==Me||_e!==je||Wn.current||kr?(typeof Be=="function"&&(If(s,l,Be,f),je=s.memoizedState),(ue=kr||Jg(s,l,ue,f,_e,je,V)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,je,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,je,V)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&_e===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&_e===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=je),b.props=f,b.state=je,b.context=V,f=ue):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&_e===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&_e===r.memoizedState||(s.flags|=1024),f=!1)}return Bf(r,s,l,f,x,m)}function Bf(r,s,l,f,m,x){u0(r,s);var b=(s.flags&128)!==0;if(!f&&!b)return m&&gg(s,l,!1),mr(r,s,x);f=s.stateNode,vE.current=s;var B=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&b?(s.child=ea(s,r.child,null,x),s.child=ea(s,null,B,x)):kn(r,s,B,x),s.memoizedState=f.state,m&&gg(s,l,!0),s.child}function d0(r){var s=r.stateNode;s.pendingContext?pg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&pg(r,s.context,!1),Mf(r,s.containerInfo)}function h0(r,s,l,f,m){return Qs(),mf(m),s.flags|=256,kn(r,s,l,f),s.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Vf(r){return{baseLanes:r,cachePool:null,transitions:null}}function p0(r,s,l){var f=s.pendingProps,m=qt.current,x=!1,b=(s.flags&128)!==0,B;if((B=b)||(B=r!==null&&r.memoizedState===null?!1:(m&2)!==0),B?(x=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),zt(qt,m&1),r===null)return pf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,r=f.fallback,x?(f=s.mode,x=s.child,b={mode:"hidden",children:b},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=ic(b,f,0,null),r=ys(r,f,l,null),x.return=s,r.return=s,x.sibling=r,s.child=x,s.child.memoizedState=Vf(l),s.memoizedState=zf,r):Hf(s,b));if(m=r.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return xE(r,s,b,f,B,m,l);if(x){x=f.fallback,b=s.mode,m=r.child,B=m.sibling;var V={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=V,s.deletions=null):(f=Wr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),B!==null?x=Wr(B,x):(x=ys(x,b,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,b=r.child.memoizedState,b=b===null?Vf(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=r.childLanes&~l,s.memoizedState=zf,f}return x=r.child,r=x.sibling,f=Wr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function Hf(r,s){return s=ic({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Wl(r,s,l,f){return f!==null&&mf(f),ea(s,r.child,null,l),r=Hf(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function xE(r,s,l,f,m,x,b){if(l)return s.flags&256?(s.flags&=-257,f=Ff(Error(t(422))),Wl(r,s,b,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=ic({mode:"visible",children:f.children},m,0,null),x=ys(x,m,b,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&ea(s,r.child,null,b),s.child.memoizedState=Vf(b),s.memoizedState=zf,x);if((s.mode&1)===0)return Wl(r,s,b,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var B=f.dgst;return f=B,x=Error(t(419)),f=Ff(x,f,void 0),Wl(r,s,b,f)}if(B=(b&r.childLanes)!==0,jn||B){if(f=_n,f!==null){switch(b&-b){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|b))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,hr(r,m),Li(f,r,m,-1))}return rd(),f=Ff(Error(t(421))),Wl(r,s,b,f)}return m.data==="$?"?(s.flags|=128,s.child=r.child,s=DE.bind(null,r),m._reactRetry=s,null):(r=x.treeContext,ni=Nr(m.nextSibling),ti=s,Yt=!0,Ci=null,r!==null&&(fi[di++]=fr,fi[di++]=dr,fi[di++]=fs,fr=r.id,dr=r.overflow,fs=s),s=Hf(s,f.children),s.flags|=4096,s)}function m0(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),_f(r.return,s,l)}function Gf(r,s,l,f,m){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function g0(r,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(kn(r,s,f.children,l),f=qt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&m0(r,l,s);else if(r.tag===19)m0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(zt(qt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)r=l.alternate,r!==null&&kl(r)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Gf(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(r=m.alternate,r!==null&&kl(r)===null){s.child=m;break}r=m.sibling,m.sibling=l,l=m,m=r}Gf(s,!0,l,null,x);break;case"together":Gf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xl(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function mr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Wr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Wr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function _E(r,s,l){switch(s.tag){case 3:d0(s),Qs();break;case 5:Pg(s);break;case 1:Xn(s.type)&&bl(s);break;case 4:Mf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;zt(Nl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(zt(qt,qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?p0(r,s,l):(zt(qt,qt.current&1),r=mr(r,s,l),r!==null?r.sibling:null);zt(qt,qt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return g0(r,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),zt(qt,qt.current),f)break;return null;case 22:case 23:return s.lanes=0,c0(r,s,l)}return mr(r,s,l)}var v0,Wf,x0,_0;v0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wf=function(){},x0=function(r,s,l,f){var m=r.memoizedProps;if(m!==f){r=s.stateNode,ps(Yi.current);var x=null;switch(l){case"input":m=dt(r,m),f=dt(r,f),x=[];break;case"select":m=K({},m,{value:void 0}),f=K({},f,{value:void 0}),x=[];break;case"textarea":m=Xt(r,m),f=Xt(r,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=wl)}Ke(l,f);var b;l=null;for(ue in m)if(!f.hasOwnProperty(ue)&&m.hasOwnProperty(ue)&&m[ue]!=null)if(ue==="style"){var B=m[ue];for(b in B)B.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in f){var V=f[ue];if(B=m!=null?m[ue]:void 0,f.hasOwnProperty(ue)&&V!==B&&(V!=null||B!=null))if(ue==="style")if(B){for(b in B)!B.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in V)V.hasOwnProperty(b)&&B[b]!==V[b]&&(l||(l={}),l[b]=V[b])}else l||(x||(x=[]),x.push(ue,l)),l=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,B=B?B.__html:void 0,V!=null&&B!==V&&(x=x||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Ht("scroll",r),x||B===V||(x=[])):(x=x||[]).push(ue,V))}l&&(x=x||[]).push("style",l);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},_0=function(r,s,l,f){l!==f&&(s.flags|=4)};function _o(r,s){if(!Yt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Dn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function yE(r,s,l){var f=s.pendingProps;switch(df(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(s),null;case 1:return Xn(s.type)&&Al(),Dn(s),null;case 3:return f=s.stateNode,ia(),Gt(Wn),Gt(Rn),Tf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Dl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ci!==null&&(td(Ci),Ci=null))),Wf(r,s),Dn(s),null;case 5:Ef(s);var m=ps(po.current);if(l=s.type,r!==null&&s.stateNode!=null)x0(r,s,l,f,m),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Dn(s),null}if(r=ps(Yi.current),Dl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[ji]=s,f[lo]=x,r=(s.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(m=0;m<so.length;m++)Ht(so[m],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":vt(f,x),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Ht("invalid",f);break;case"textarea":X(f,x),Ht("invalid",f)}Ke(l,x),m=null;for(var b in x)if(x.hasOwnProperty(b)){var B=x[b];b==="children"?typeof B=="string"?f.textContent!==B&&(x.suppressHydrationWarning!==!0&&El(f.textContent,B,r),m=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&El(f.textContent,B,r),m=["children",""+B]):a.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Ht("scroll",f)}switch(l){case"input":ke(f),kt(f,x,!0);break;case"textarea":ke(f),bt(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=wl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=k(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=b.createElement(l,{is:f.is}):(r=b.createElement(l),l==="select"&&(b=r,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):r=b.createElementNS(r,l),r[ji]=s,r[lo]=f,v0(r,s,!1,!1),s.stateNode=r;e:{switch(b=De(l,f),l){case"dialog":Ht("cancel",r),Ht("close",r),m=f;break;case"iframe":case"object":case"embed":Ht("load",r),m=f;break;case"video":case"audio":for(m=0;m<so.length;m++)Ht(so[m],r);m=f;break;case"source":Ht("error",r),m=f;break;case"img":case"image":case"link":Ht("error",r),Ht("load",r),m=f;break;case"details":Ht("toggle",r),m=f;break;case"input":vt(r,f),m=dt(r,f),Ht("invalid",r);break;case"option":m=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},m=K({},f,{value:void 0}),Ht("invalid",r);break;case"textarea":X(r,f),m=Xt(r,f),Ht("invalid",r);break;default:m=f}Ke(l,m),B=m;for(x in B)if(B.hasOwnProperty(x)){var V=B[x];x==="style"?ge(r,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&oe(r,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&he(r,V):typeof V=="number"&&he(r,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Ht("scroll",r):V!=null&&I(r,x,V,b))}switch(l){case"input":ke(r),kt(r,f,!1);break;case"textarea":ke(r),bt(r);break;case"option":f.value!=null&&r.setAttribute("value",""+fe(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Nt(r,!!f.multiple,x,!1):f.defaultValue!=null&&Nt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=wl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Dn(s),null;case 6:if(r&&s.stateNode!=null)_0(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ps(po.current),ps(Yi.current),Dl(s)){if(f=s.stateNode,l=s.memoizedProps,f[ji]=s,(x=f.nodeValue!==l)&&(r=ti,r!==null))switch(r.tag){case 3:El(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&El(f.nodeValue,l,(r.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ji]=s,s.stateNode=f}return Dn(s),null;case 13:if(Gt(qt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Yt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mg(),Qs(),s.flags|=98560,x=!1;else if(x=Dl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ji]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Dn(s),x=!1}else Ci!==null&&(td(Ci),Ci=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(qt.current&1)!==0?hn===0&&(hn=3):rd())),s.updateQueue!==null&&(s.flags|=4),Dn(s),null);case 4:return ia(),Wf(r,s),r===null&&ao(s.stateNode.containerInfo),Dn(s),null;case 10:return xf(s.type._context),Dn(s),null;case 17:return Xn(s.type)&&Al(),Dn(s),null;case 19:if(Gt(qt),x=s.memoizedState,x===null)return Dn(s),null;if(f=(s.flags&128)!==0,b=x.rendering,b===null)if(f)_o(x,!1);else{if(hn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(b=kl(r),b!==null){for(s.flags|=128,_o(x,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,r=f,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,r=b.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),s.child}r=r.sibling}x.tail!==null&&$t()>oa&&(s.flags|=128,f=!0,_o(x,!1),s.lanes=4194304)}else{if(!f)if(r=kl(b),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),_o(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!Yt)return Dn(s),null}else 2*$t()-x.renderingStartTime>oa&&l!==1073741824&&(s.flags|=128,f=!0,_o(x,!1),s.lanes=4194304);x.isBackwards?(b.sibling=s.child,s.child=b):(l=x.last,l!==null?l.sibling=b:s.child=b,x.last=b)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=$t(),s.sibling=null,l=qt.current,zt(qt,f?l&1|2:l&1),s):(Dn(s),null);case 22:case 23:return id(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Dn(s),s.subtreeFlags&6&&(s.flags|=8192)):Dn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function SE(r,s){switch(df(s),s.tag){case 1:return Xn(s.type)&&Al(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ia(),Gt(Wn),Gt(Rn),Tf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Ef(s),null;case 13:if(Gt(qt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Qs()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Gt(qt),null;case 4:return ia(),null;case 10:return xf(s.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var jl=!1,Ln=!1,ME=typeof WeakSet=="function"?WeakSet:Set,He=null;function sa(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Qt(r,s,f)}else l.current=null}function Xf(r,s,l){try{l()}catch(f){Qt(r,s,f)}}var y0=!1;function EE(r,s){if(nf=dl,r=Jm(),$u(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var b=0,B=-1,V=-1,ue=0,ye=0,Me=r,_e=null;t:for(;;){for(var Be;Me!==l||m!==0&&Me.nodeType!==3||(B=b+m),Me!==x||f!==0&&Me.nodeType!==3||(V=b+f),Me.nodeType===3&&(b+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)_e=Me,Me=Be;for(;;){if(Me===r)break t;if(_e===l&&++ue===m&&(B=b),_e===x&&++ye===f&&(V=b),(Be=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Be}l=B===-1||V===-1?null:{start:B,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(rf={focusedElem:r,selectionRange:l},dl=!1,He=s;He!==null;)if(s=He,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,He=r;else for(;He!==null;){s=He;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,rn=je.memoizedState,ne=s.stateNode,j=ne.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Ri(s.type,qe),rn);ne.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Qt(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,He=r;break}He=s.return}return je=y0,y0=!1,je}function yo(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&r)===r){var x=m.destroy;m.destroy=void 0,x!==void 0&&Xf(s,l,x)}m=m.next}while(m!==f)}}function Yl(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function jf(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function S0(r){var s=r.alternate;s!==null&&(r.alternate=null,S0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ji],delete s[lo],delete s[lf],delete s[sE],delete s[aE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function M0(r){return r.tag===5||r.tag===3||r.tag===4}function E0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||M0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Yf(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=wl));else if(f!==4&&(r=r.child,r!==null))for(Yf(r,s,l),r=r.sibling;r!==null;)Yf(r,s,l),r=r.sibling}function $f(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for($f(r,s,l),r=r.sibling;r!==null;)$f(r,s,l),r=r.sibling}var wn=null,Pi=!1;function Br(r,s,l){for(l=l.child;l!==null;)w0(r,s,l),l=l.sibling}function w0(r,s,l){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(te,l)}catch{}switch(l.tag){case 5:Ln||sa(l,s);case 6:var f=wn,m=Pi;wn=null,Br(r,s,l),wn=f,Pi=m,wn!==null&&(Pi?(r=wn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(Pi?(r=wn,l=l.stateNode,r.nodeType===8?of(r.parentNode,l):r.nodeType===1&&of(r,l),Za(r)):of(wn,l.stateNode));break;case 4:f=wn,m=Pi,wn=l.stateNode.containerInfo,Pi=!0,Br(r,s,l),wn=f,Pi=m;break;case 0:case 11:case 14:case 15:if(!Ln&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&Xf(l,s,b),m=m.next}while(m!==f)}Br(r,s,l);break;case 1:if(!Ln&&(sa(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){Qt(l,s,B)}Br(r,s,l);break;case 21:Br(r,s,l);break;case 22:l.mode&1?(Ln=(f=Ln)||l.memoizedState!==null,Br(r,s,l),Ln=f):Br(r,s,l);break;default:Br(r,s,l)}}function T0(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new ME),s.forEach(function(f){var m=LE.bind(null,r,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Di(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=r,b=s,B=b;e:for(;B!==null;){switch(B.tag){case 5:wn=B.stateNode,Pi=!1;break e;case 3:wn=B.stateNode.containerInfo,Pi=!0;break e;case 4:wn=B.stateNode.containerInfo,Pi=!0;break e}B=B.return}if(wn===null)throw Error(t(160));w0(x,b,m),wn=null,Pi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(ue){Qt(m,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)A0(s,r),s=s.sibling}function A0(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Di(s,r),qi(r),f&4){try{yo(3,r,r.return),Yl(3,r)}catch(qe){Qt(r,r.return,qe)}try{yo(5,r,r.return)}catch(qe){Qt(r,r.return,qe)}}break;case 1:Di(s,r),qi(r),f&512&&l!==null&&sa(l,l.return);break;case 5:if(Di(s,r),qi(r),f&512&&l!==null&&sa(l,l.return),r.flags&32){var m=r.stateNode;try{he(m,"")}catch(qe){Qt(r,r.return,qe)}}if(f&4&&(m=r.stateNode,m!=null)){var x=r.memoizedProps,b=l!==null?l.memoizedProps:x,B=r.type,V=r.updateQueue;if(r.updateQueue=null,V!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&It(m,x),De(B,b);var ue=De(B,x);for(b=0;b<V.length;b+=2){var ye=V[b],Me=V[b+1];ye==="style"?ge(m,Me):ye==="dangerouslySetInnerHTML"?oe(m,Me):ye==="children"?he(m,Me):I(m,ye,Me,ue)}switch(B){case"input":ht(m,x);break;case"textarea":un(m,x);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?Nt(m,!!x.multiple,Be,!1):_e!==!!x.multiple&&(x.defaultValue!=null?Nt(m,!!x.multiple,x.defaultValue,!0):Nt(m,!!x.multiple,x.multiple?[]:"",!1))}m[lo]=x}catch(qe){Qt(r,r.return,qe)}}break;case 6:if(Di(s,r),qi(r),f&4){if(r.stateNode===null)throw Error(t(162));m=r.stateNode,x=r.memoizedProps;try{m.nodeValue=x}catch(qe){Qt(r,r.return,qe)}}break;case 3:if(Di(s,r),qi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Za(s.containerInfo)}catch(qe){Qt(r,r.return,qe)}break;case 4:Di(s,r),qi(r);break;case 13:Di(s,r),qi(r),m=r.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Zf=$t())),f&4&&T0(r);break;case 22:if(ye=l!==null&&l.memoizedState!==null,r.mode&1?(Ln=(ue=Ln)||ye,Di(s,r),Ln=ue):Di(s,r),qi(r),f&8192){if(ue=r.memoizedState!==null,(r.stateNode.isHidden=ue)&&!ye&&(r.mode&1)!==0)for(He=r,ye=r.child;ye!==null;){for(Me=He=ye;He!==null;){switch(_e=He,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:yo(4,_e,_e.return);break;case 1:sa(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){f=_e,l=_e.return;try{s=f,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){Qt(f,l,qe)}}break;case 5:sa(_e,_e.return);break;case 22:if(_e.memoizedState!==null){R0(Me);continue}}Be!==null?(Be.return=_e,He=Be):R0(Me)}ye=ye.sibling}e:for(ye=null,Me=r;;){if(Me.tag===5){if(ye===null){ye=Me;try{m=Me.stateNode,ue?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Me.stateNode,V=Me.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,B.style.display=pe("display",b))}catch(qe){Qt(r,r.return,qe)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(qe){Qt(r,r.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===r)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===r)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===r)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Di(s,r),qi(r),f&4&&T0(r);break;case 21:break;default:Di(s,r),qi(r)}}function qi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(M0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(he(m,""),f.flags&=-33);var x=E0(r);$f(r,x,m);break;case 3:case 4:var b=f.stateNode.containerInfo,B=E0(r);Yf(r,B,b);break;default:throw Error(t(161))}}catch(V){Qt(r,r.return,V)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function wE(r,s,l){He=r,b0(r)}function b0(r,s,l){for(var f=(r.mode&1)!==0;He!==null;){var m=He,x=m.child;if(m.tag===22&&f){var b=m.memoizedState!==null||jl;if(!b){var B=m.alternate,V=B!==null&&B.memoizedState!==null||Ln;B=jl;var ue=Ln;if(jl=b,(Ln=V)&&!ue)for(He=m;He!==null;)b=He,V=b.child,b.tag===22&&b.memoizedState!==null?P0(m):V!==null?(V.return=b,He=V):P0(m);for(;x!==null;)He=x,b0(x),x=x.sibling;He=m,jl=B,Ln=ue}C0(r)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,He=x):C0(r)}}function C0(r){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ln||Yl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Ln)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Ri(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Rg(s,x,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Rg(s,b,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Za(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||s.flags&512&&jf(s)}catch(_e){Qt(s,s.return,_e)}}if(s===r){He=null;break}if(l=s.sibling,l!==null){l.return=s.return,He=l;break}He=s.return}}function R0(r){for(;He!==null;){var s=He;if(s===r){He=null;break}var l=s.sibling;if(l!==null){l.return=s.return,He=l;break}He=s.return}}function P0(r){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Yl(4,s)}catch(V){Qt(s,l,V)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(V){Qt(s,m,V)}}var x=s.return;try{jf(s)}catch(V){Qt(s,x,V)}break;case 5:var b=s.return;try{jf(s)}catch(V){Qt(s,b,V)}}}catch(V){Qt(s,s.return,V)}if(s===r){He=null;break}var B=s.sibling;if(B!==null){B.return=s.return,He=B;break}He=s.return}}var TE=Math.ceil,$l=T.ReactCurrentDispatcher,qf=T.ReactCurrentOwner,mi=T.ReactCurrentBatchConfig,Tt=0,_n=null,on=null,Tn=0,ii=0,aa=Ir(0),hn=0,So=null,gs=0,ql=0,Kf=0,Mo=null,Yn=null,Zf=0,oa=1/0,gr=null,Kl=!1,Jf=null,zr=null,Zl=!1,Vr=null,Jl=0,Eo=0,Qf=null,Ql=-1,ec=0;function On(){return(Tt&6)!==0?$t():Ql!==-1?Ql:Ql=$t()}function Hr(r){return(r.mode&1)===0?1:(Tt&2)!==0&&Tn!==0?Tn&-Tn:lE.transition!==null?(ec===0&&(ec=fn()),ec):(r=pt,r!==0||(r=window.event,r=r===void 0?16:Lm(r.type)),r)}function Li(r,s,l,f){if(50<Eo)throw Eo=0,Qf=null,Error(t(185));nn(r,l,f),((Tt&2)===0||r!==_n)&&(r===_n&&((Tt&2)===0&&(ql|=l),hn===4&&Gr(r,Tn)),$n(r,f),l===1&&Tt===0&&(s.mode&1)===0&&(oa=$t()+500,Cl&&Fr()))}function $n(r,s){var l=r.callbackNode;Ot(r,s);var f=xt(r,r===_n?Tn:0);if(f===0)l!==null&&Wa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&Wa(l),s===1)r.tag===0?oE(L0.bind(null,r)):vg(L0.bind(null,r)),iE(function(){(Tt&6)===0&&Fr()}),l=null;else{switch(Ei(f)){case 1:l=Xa;break;case 4:l=ja;break;case 16:l=C;break;case 536870912:l=ce;break;default:l=C}l=z0(l,D0.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function D0(r,s){if(Ql=-1,ec=0,(Tt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(la()&&r.callbackNode!==l)return null;var f=xt(r,r===_n?Tn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=tc(r,f);else{s=f;var m=Tt;Tt|=2;var x=I0();(_n!==r||Tn!==s)&&(gr=null,oa=$t()+500,xs(r,s));do try{CE();break}catch(B){N0(r,B)}while(!0);vf(),$l.current=x,Tt=m,on!==null?s=0:(_n=null,Tn=0,s=hn)}if(s!==0){if(s===2&&(m=Lt(r),m!==0&&(f=m,s=ed(r,m))),s===1)throw l=So,xs(r,0),Gr(r,f),$n(r,$t()),l;if(s===6)Gr(r,f);else{if(m=r.current.alternate,(f&30)===0&&!AE(m)&&(s=tc(r,f),s===2&&(x=Lt(r),x!==0&&(f=x,s=ed(r,x))),s===1))throw l=So,xs(r,0),Gr(r,f),$n(r,$t()),l;switch(r.finishedWork=m,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:_s(r,Yn,gr);break;case 3:if(Gr(r,f),(f&130023424)===f&&(s=Zf+500-$t(),10<s)){if(xt(r,0)!==0)break;if(m=r.suspendedLanes,(m&f)!==f){On(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=af(_s.bind(null,r,Yn,gr),s);break}_s(r,Yn,gr);break;case 4:if(Gr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,m=-1;0<f;){var b=31-Le(f);x=1<<b,b=s[b],b>m&&(m=b),f&=~x}if(f=m,f=$t()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*TE(f/1960))-f,10<f){r.timeoutHandle=af(_s.bind(null,r,Yn,gr),f);break}_s(r,Yn,gr);break;case 5:_s(r,Yn,gr);break;default:throw Error(t(329))}}}return $n(r,$t()),r.callbackNode===l?D0.bind(null,r):null}function ed(r,s){var l=Mo;return r.current.memoizedState.isDehydrated&&(xs(r,s).flags|=256),r=tc(r,s),r!==2&&(s=Yn,Yn=l,s!==null&&td(s)),r}function td(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function AE(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!bi(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gr(r,s){for(s&=~Kf,s&=~ql,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Le(s),f=1<<l;r[l]=-1,s&=~f}}function L0(r){if((Tt&6)!==0)throw Error(t(327));la();var s=xt(r,0);if((s&1)===0)return $n(r,$t()),null;var l=tc(r,s);if(r.tag!==0&&l===2){var f=Lt(r);f!==0&&(s=f,l=ed(r,f))}if(l===1)throw l=So,xs(r,0),Gr(r,s),$n(r,$t()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,_s(r,Yn,gr),$n(r,$t()),null}function nd(r,s){var l=Tt;Tt|=1;try{return r(s)}finally{Tt=l,Tt===0&&(oa=$t()+500,Cl&&Fr())}}function vs(r){Vr!==null&&Vr.tag===0&&(Tt&6)===0&&la();var s=Tt;Tt|=1;var l=mi.transition,f=pt;try{if(mi.transition=null,pt=1,r)return r()}finally{pt=f,mi.transition=l,Tt=s,(Tt&6)===0&&Fr()}}function id(){ii=aa.current,Gt(aa)}function xs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,nE(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(df(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Al();break;case 3:ia(),Gt(Wn),Gt(Rn),Tf();break;case 5:Ef(f);break;case 4:ia();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:xf(f.type._context);break;case 22:case 23:id()}l=l.return}if(_n=r,on=r=Wr(r.current,null),Tn=ii=s,hn=0,So=null,Kf=ql=gs=0,Yn=Mo=null,hs!==null){for(s=0;s<hs.length;s++)if(l=hs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var b=x.next;x.next=m,f.next=b}l.pending=f}hs=null}return r}function N0(r,s){do{var l=on;try{if(vf(),Ol.current=Hl,Bl){for(var f=Kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Bl=!1}if(ms=0,xn=dn=Kt=null,mo=!1,go=0,qf.current=null,l===null||l.return===null){hn=1,So=s,on=null;break}e:{var x=r,b=l.return,B=l,V=s;if(s=Tn,B.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,ye=B,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Be=r0(b);if(Be!==null){Be.flags&=-257,s0(Be,b,B,x,s),Be.mode&1&&i0(x,ue,s),s=Be,V=ue;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else je.add(V);break e}else{if((s&1)===0){i0(x,ue,s),rd();break e}V=Error(t(426))}}else if(Yt&&B.mode&1){var rn=r0(b);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),s0(rn,b,B,x,s),mf(ra(V,B));break e}}x=V=ra(V,B),hn!==4&&(hn=2),Mo===null?Mo=[x]:Mo.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ne=t0(x,V,s);Cg(x,ne);break e;case 1:B=V;var j=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(zr===null||!zr.has(ae)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=n0(x,B,s);Cg(x,Te);break e}}x=x.return}while(x!==null)}F0(l)}catch(et){s=et,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function I0(){var r=$l.current;return $l.current=Hl,r===null?Hl:r}function rd(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(gs&268435455)===0&&(ql&268435455)===0||Gr(_n,Tn)}function tc(r,s){var l=Tt;Tt|=2;var f=I0();(_n!==r||Tn!==s)&&(gr=null,xs(r,s));do try{bE();break}catch(m){N0(r,m)}while(!0);if(vf(),Tt=l,$l.current=f,on!==null)throw Error(t(261));return _n=null,Tn=0,hn}function bE(){for(;on!==null;)U0(on)}function CE(){for(;on!==null&&!ul();)U0(on)}function U0(r){var s=B0(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?F0(r):on=s,qf.current=null}function F0(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=yE(l,s,ii),l!==null){on=l;return}}else{if(l=SE(l,s),l!==null){l.flags&=32767,on=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{hn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=r}while(s!==null);hn===0&&(hn=5)}function _s(r,s,l){var f=pt,m=mi.transition;try{mi.transition=null,pt=1,RE(r,s,l,f)}finally{mi.transition=m,pt=f}return null}function RE(r,s,l,f){do la();while(Vr!==null);if((Tt&6)!==0)throw Error(t(327));l=r.finishedWork;var m=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(_t(r,x),r===_n&&(on=_n=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Zl||(Zl=!0,z0(C,function(){return la(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=mi.transition,mi.transition=null;var b=pt;pt=1;var B=Tt;Tt|=4,qf.current=null,EE(r,l),A0(l,r),qM(rf),dl=!!nf,rf=nf=null,r.current=l,wE(l),Uu(),Tt=B,pt=b,mi.transition=x}else r.current=l;if(Zl&&(Zl=!1,Vr=r,Jl=m),x=r.pendingLanes,x===0&&(zr=null),Ie(l.stateNode),$n(r,$t()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Kl)throw Kl=!1,r=Jf,Jf=null,r;return(Jl&1)!==0&&r.tag!==0&&la(),x=r.pendingLanes,(x&1)!==0?r===Qf?Eo++:(Eo=0,Qf=r):Eo=0,Fr(),null}function la(){if(Vr!==null){var r=Ei(Jl),s=mi.transition,l=pt;try{if(mi.transition=null,pt=16>r?16:r,Vr===null)var f=!1;else{if(r=Vr,Vr=null,Jl=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,He=r.current;He!==null;){var x=He,b=x.child;if((He.flags&16)!==0){var B=x.deletions;if(B!==null){for(var V=0;V<B.length;V++){var ue=B[V];for(He=ue;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:yo(8,ye,x)}var Me=ye.child;if(Me!==null)Me.return=ye,He=Me;else for(;He!==null;){ye=He;var _e=ye.sibling,Be=ye.return;if(S0(ye),ye===ue){He=null;break}if(_e!==null){_e.return=Be,He=_e;break}He=Be}}}var je=x.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}He=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,He=b;else e:for(;He!==null;){if(x=He,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:yo(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,He=ne;break e}He=x.return}}var j=r.current;for(He=j;He!==null;){b=He;var ae=b.child;if((b.subtreeFlags&2064)!==0&&ae!==null)ae.return=b,He=ae;else e:for(b=j;He!==null;){if(B=He,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Yl(9,B)}}catch(et){Qt(B,B.return,et)}if(B===b){He=null;break e}var Te=B.sibling;if(Te!==null){Te.return=B.return,He=Te;break e}He=B.return}}if(Tt=m,Fr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(te,r)}catch{}f=!0}return f}finally{pt=l,mi.transition=s}}return!1}function k0(r,s,l){s=ra(l,s),s=t0(r,s,1),r=Or(r,s,1),s=On(),r!==null&&(nn(r,1,s),$n(r,s))}function Qt(r,s,l){if(r.tag===3)k0(r,r,l);else for(;s!==null;){if(s.tag===3){k0(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(zr===null||!zr.has(f))){r=ra(l,r),r=n0(s,r,1),s=Or(s,r,1),r=On(),s!==null&&(nn(s,1,r),$n(s,r));break}}s=s.return}}function PE(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=On(),r.pingedLanes|=r.suspendedLanes&l,_n===r&&(Tn&l)===l&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>$t()-Zf?xs(r,0):Kf|=l),$n(r,s)}function O0(r,s){s===0&&((r.mode&1)===0?s=1:(s=ut,ut<<=1,(ut&130023424)===0&&(ut=4194304)));var l=On();r=hr(r,s),r!==null&&(nn(r,s,l),$n(r,l))}function DE(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),O0(r,l)}function LE(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,m=r.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),O0(r,l)}var B0;B0=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Wn.current)jn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return jn=!1,_E(r,s,l);jn=(r.flags&131072)!==0}else jn=!1,Yt&&(s.flags&1048576)!==0&&xg(s,Pl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Xl(r,s),r=s.pendingProps;var m=Ks(s,Rn.current);na(s,l),m=Cf(null,s,f,r,m,l);var x=Rf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(f)?(x=!0,bl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Sf(s),m.updater=Gl,s.stateNode=m,m._reactInternals=s,Uf(s,f,r,l),s=Bf(null,s,f,!0,x,l)):(s.tag=0,Yt&&x&&ff(s),kn(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Xl(r,s),r=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=IE(f),r=Ri(f,r),m){case 0:s=Of(null,s,f,r,l);break e;case 1:s=f0(null,s,f,r,l);break e;case 11:s=a0(null,s,f,r,l);break e;case 14:s=o0(null,s,f,Ri(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ri(f,m),Of(r,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ri(f,m),f0(r,s,f,m,l);case 3:e:{if(d0(s),r===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,bg(r,s),Fl(s,f,null,l);var b=s.memoizedState;if(f=b.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=ra(Error(t(423)),s),s=h0(r,s,f,l,m);break e}else if(f!==m){m=ra(Error(t(424)),s),s=h0(r,s,f,l,m);break e}else for(ni=Nr(s.stateNode.containerInfo.firstChild),ti=s,Yt=!0,Ci=null,l=Tg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qs(),f===m){s=mr(r,s,l);break e}kn(r,s,f,l)}s=s.child}return s;case 5:return Pg(s),r===null&&pf(s),f=s.type,m=s.pendingProps,x=r!==null?r.memoizedProps:null,b=m.children,sf(f,m)?b=null:x!==null&&sf(f,x)&&(s.flags|=32),u0(r,s),kn(r,s,b,l),s.child;case 6:return r===null&&pf(s),null;case 13:return p0(r,s,l);case 4:return Mf(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=ea(s,null,f,l):kn(r,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ri(f,m),a0(r,s,f,m,l);case 7:return kn(r,s,s.pendingProps,l),s.child;case 8:return kn(r,s,s.pendingProps.children,l),s.child;case 12:return kn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,b=m.value,zt(Nl,f._currentValue),f._currentValue=b,x!==null)if(bi(x.value,b)){if(x.children===m.children&&!Wn.current){s=mr(r,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var B=x.dependencies;if(B!==null){b=x.child;for(var V=B.firstContext;V!==null;){if(V.context===f){if(x.tag===1){V=pr(-1,l&-l),V.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ue.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),_f(x.return,l,s),B.lanes|=l;break}V=V.next}}else if(x.tag===10)b=x.type===s.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=l,B=b.alternate,B!==null&&(B.lanes|=l),_f(b,l,s),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===s){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}kn(r,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,na(s,l),m=hi(m),f=f(m),s.flags|=1,kn(r,s,f,l),s.child;case 14:return f=s.type,m=Ri(f,s.pendingProps),m=Ri(f.type,m),o0(r,s,f,m,l);case 15:return l0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ri(f,m),Xl(r,s),s.tag=1,Xn(f)?(r=!0,bl(s)):r=!1,na(s,l),Qg(s,f,m),Uf(s,f,m,l),Bf(null,s,f,!0,r,l);case 19:return g0(r,s,l);case 22:return c0(r,s,l)}throw Error(t(156,s.tag))};function z0(r,s){return ls(r,s)}function NE(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(r,s,l,f){return new NE(r,s,l,f)}function sd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function IE(r){if(typeof r=="function")return sd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===$)return 11;if(r===Q)return 14}return 2}function Wr(r,s){var l=r.alternate;return l===null?(l=gi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function nc(r,s,l,f,m,x){var b=2;if(f=r,typeof r=="function")sd(r)&&(b=1);else if(typeof r=="string")b=5;else e:switch(r){case F:return ys(l.children,m,x,s);case E:b=8,m|=8;break;case L:return r=gi(12,l,s,m|2),r.elementType=L,r.lanes=x,r;case Z:return r=gi(13,l,s,m),r.elementType=Z,r.lanes=x,r;case W:return r=gi(19,l,s,m),r.elementType=W,r.lanes=x,r;case ie:return ic(l,m,x,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:b=10;break e;case z:b=9;break e;case $:b=11;break e;case Q:b=14;break e;case de:b=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=gi(b,l,s,m),s.elementType=r,s.type=f,s.lanes=x,s}function ys(r,s,l,f){return r=gi(7,r,f,s),r.lanes=l,r}function ic(r,s,l,f){return r=gi(22,r,f,s),r.elementType=ie,r.lanes=l,r.stateNode={isHidden:!1},r}function ad(r,s,l){return r=gi(6,r,null,s),r.lanes=l,r}function od(r,s,l){return s=gi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function UE(r,s,l,f,m){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oe(0),this.expirationTimes=Oe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ld(r,s,l,f,m,x,b,B,V){return r=new UE(r,s,l,B,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=gi(3,null,null,s),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(x),r}function FE(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function V0(r){if(!r)return Ur;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Xn(l))return mg(r,l,s)}return s}function H0(r,s,l,f,m,x,b,B,V){return r=ld(l,f,!0,r,m,x,b,B,V),r.context=V0(null),l=r.current,f=On(),m=Hr(l),x=pr(f,m),x.callback=s??null,Or(l,x,m),r.current.lanes=m,nn(r,m,f),$n(r,f),r}function rc(r,s,l,f){var m=s.current,x=On(),b=Hr(m);return l=V0(l),s.context===null?s.context=l:s.pendingContext=l,s=pr(x,b),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Or(m,s,b),r!==null&&(Li(r,m,b,x),Ul(r,m,b)),b}function sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function G0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function cd(r,s){G0(r,s),(r=r.alternate)&&G0(r,s)}function kE(){return null}var W0=typeof reportError=="function"?reportError:function(r){console.error(r)};function ud(r){this._internalRoot=r}ac.prototype.render=ud.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));rc(r,s,null,null)},ac.prototype.unmount=ud.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;vs(function(){rc(null,r,null,null)}),s[cr]=null}};function ac(r){this._internalRoot=r}ac.prototype.unstable_scheduleHydration=function(r){if(r){var s=wi();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Pr.length&&s!==0&&s<Pr[l].priority;l++);Pr.splice(l,0,r),l===0&&Pm(r)}};function fd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function X0(){}function OE(r,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var ue=sc(b);x.call(ue)}}var b=H0(s,f,r,0,null,!1,!1,"",X0);return r._reactRootContainer=b,r[cr]=b.current,ao(r.nodeType===8?r.parentNode:r),vs(),b}for(;m=r.lastChild;)r.removeChild(m);if(typeof f=="function"){var B=f;f=function(){var ue=sc(V);B.call(ue)}}var V=ld(r,0,!1,null,null,!1,!1,"",X0);return r._reactRootContainer=V,r[cr]=V.current,ao(r.nodeType===8?r.parentNode:r),vs(function(){rc(s,V,l,f)}),V}function lc(r,s,l,f,m){var x=l._reactRootContainer;if(x){var b=x;if(typeof m=="function"){var B=m;m=function(){var V=sc(b);B.call(V)}}rc(s,b,r,m)}else b=OE(l,s,r,m,f);return sc(b)}lr=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ze(s.pendingLanes);l!==0&&(Cn(s,l|1),$n(s,$t()),(Tt&6)===0&&(oa=$t()+500,Fr()))}break;case 13:vs(function(){var f=hr(r,1);if(f!==null){var m=On();Li(f,r,1,m)}}),cd(r,1)}},Rt=function(r){if(r.tag===13){var s=hr(r,134217728);if(s!==null){var l=On();Li(s,r,134217728,l)}cd(r,134217728)}},jt=function(r){if(r.tag===13){var s=Hr(r),l=hr(r,s);if(l!==null){var f=On();Li(l,r,s,f)}cd(r,s)}},wi=function(){return pt},Ut=function(r,s){var l=pt;try{return pt=r,s()}finally{pt=l}},nt=function(r,s,l){switch(s){case"input":if(ht(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var m=Tl(f);if(!m)throw Error(t(90));ft(f),ht(f,m)}}}break;case"textarea":un(r,l);break;case"select":s=l.value,s!=null&&Nt(r,!!l.multiple,s,!1)}},Fe=nd,ve=vs;var BE={usingClientEntryPoint:!1,Events:[co,$s,Tl,me,Re,nd]},wo={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zE={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=os(r),r===null?null:r.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||kE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{te=cc.inject(zE),ee=cc}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BE,qn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(s))throw Error(t(200));return FE(r,s,null,l)},qn.createRoot=function(r,s){if(!fd(r))throw Error(t(299));var l=!1,f="",m=W0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=ld(r,1,!1,null,null,l,!1,f,m),r[cr]=s.current,ao(r.nodeType===8?r.parentNode:r),new ud(s)},qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=os(s),r=r===null?null:r.stateNode,r},qn.flushSync=function(r){return vs(r)},qn.hydrate=function(r,s,l){if(!oc(s))throw Error(t(200));return lc(null,r,s,!0,l)},qn.hydrateRoot=function(r,s,l){if(!fd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",b=W0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=H0(s,null,r,1,l??null,m,!1,x,b),r[cr]=s.current,ao(r),f)for(r=0;r<f.length;r++)l=f[r],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new ac(s)},qn.render=function(r,s,l){if(!oc(s))throw Error(t(200));return lc(null,r,s,!1,l)},qn.unmountComponentAtNode=function(r){if(!oc(r))throw Error(t(40));return r._reactRootContainer?(vs(function(){lc(null,null,r,!1,function(){r._reactRootContainer=null,r[cr]=null})}),!0):!1},qn.unstable_batchedUpdates=nd,qn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!oc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return lc(r,s,l,!1,f)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Q0;function qE(){if(Q0)return pd.exports;Q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),pd.exports=$E(),pd.exports}var ev;function KE(){if(ev)return uc;ev=1;var n=qE();return uc.createRoot=n.createRoot,uc.hydrateRoot=n.hydrateRoot,uc}var ZE=KE();const JE=w_(ZE),Lp=xe.createContext({});function ts(n){const e=xe.useRef(null);return e.current===null&&(e.current=n()),e.current}const QE=typeof window<"u",Jo=QE?xe.useLayoutEffect:xe.useEffect,Mu=xe.createContext(null);function Np(n,e){n.indexOf(e)===-1&&n.push(e)}function nu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Wi=(n,e,t)=>t>e?e:t<n?n:t;let Eu=()=>{};const ns={},T_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),A_=n=>typeof n=="object"&&n!==null,b_=n=>/^0[^.\s]+$/u.test(n);function C_(n){let e;return()=>(e===void 0&&(e=n()),e)}const Zn=n=>n,Qo=(...n)=>n.reduce((e,t)=>i=>t(e(i))),La=(n,e,t)=>{const i=e-n;return i?(t-n)/i:1};class Ip{constructor(){this.subscriptions=[]}add(e){return Np(this.subscriptions,e),()=>nu(this.subscriptions,e)}notify(e,t,i){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](e,t,i);else for(let o=0;o<a;o++){const c=this.subscriptions[o];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oi=n=>n*1e3,Si=n=>n/1e3,Up=(n,e)=>e?n*(1e3/e):0,R_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,e1=1e-7,t1=12;function n1(n,e,t,i,a){let o,c,u=0;do c=e+(t-e)/2,o=R_(c,i,a)-n,o>0?t=c:e=c;while(Math.abs(o)>e1&&++u<t1);return c}function el(n,e,t,i){if(n===e&&t===i)return Zn;const a=o=>n1(o,0,1,n,t);return o=>o===0||o===1?o:R_(a(o),e,i)}const P_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,D_=n=>e=>1-n(1-e),L_=el(.33,1.53,.69,.99),Fp=D_(L_),N_=P_(Fp),I_=n=>n>=1?1:(n*=2)<1?.5*Fp(n):.5*(2-Math.pow(2,-10*(n-1))),kp=n=>1-Math.sin(Math.acos(n)),U_=D_(kp),F_=P_(kp),i1=el(.42,0,1,1),r1=el(0,0,.58,1),k_=el(.42,0,.58,1),s1=n=>Array.isArray(n)&&typeof n[0]!="number",O_=n=>Array.isArray(n)&&typeof n[0]=="number",a1={linear:Zn,easeIn:i1,easeInOut:k_,easeOut:r1,circIn:kp,circInOut:F_,circOut:U_,backIn:Fp,backInOut:N_,backOut:L_,anticipate:I_},o1=n=>typeof n=="string",tv=n=>{if(O_(n)){Eu(n.length===4);const[e,t,i,a]=n;return el(e,t,i,a)}else if(o1(n))return a1[n];return n},fc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l1(n){let e=new Set,t=new Set,i=!1,a=!1;const o=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){o.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,p=!1,v=!1)=>{const _=v&&i?e:t;return p&&o.add(h),_.add(h),h},cancel:h=>{t.delete(h),o.delete(h)},process:h=>{if(c=h,i){a=!0;return}i=!0;const p=e;e=t,t=p,e.forEach(u),e.clear(),i=!1,a&&(a=!1,d.process(h))}};return d}const c1=40;function B_(n,e){let t=!1,i=!0;const a={delta:0,timestamp:0,isProcessing:!1},o=()=>t=!0,c=fc.reduce((I,T)=>(I[T]=l1(o),I),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:_,postRender:M}=c,A=()=>{const I=ns.useManualTiming,T=I?a.timestamp:performance.now();t=!1,I||(a.delta=i?1e3/60:Math.max(Math.min(T-a.timestamp,c1),1)),a.timestamp=T,a.isProcessing=!0,u.process(a),d.process(a),h.process(a),p.process(a),v.process(a),g.process(a),_.process(a),M.process(a),a.isProcessing=!1,t&&e&&(i=!1,n(A))},S=()=>{t=!0,i=!0,a.isProcessing||n(A)};return{schedule:fc.reduce((I,T)=>{const D=c[T];return I[T]=(N,F=!1,E=!1)=>(t||S(),D.schedule(N,F,E)),I},{}),cancel:I=>{for(let T=0;T<fc.length;T++)c[fc[T]].cancel(I)},state:a,steps:c}}const{schedule:At,cancel:Mi,state:Mn,steps:vd}=B_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zn,!0);let Gc;function u1(){Gc=void 0}const zn={now:()=>(Gc===void 0&&zn.set(Mn.isProcessing||ns.useManualTiming?Mn.timestamp:performance.now()),Gc),set:n=>{Gc=n,queueMicrotask(u1)}},z_=n=>e=>typeof e=="string"&&e.startsWith(n),V_=z_("--"),f1=z_("var(--"),Op=n=>f1(n)?d1.test(n.split("/*")[0].trim()):!1,d1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function nv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ka={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Xo={...ka,transform:n=>Wi(0,1,n)},dc={...ka,default:1},Oo=n=>Math.round(n*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h1(n){return n==null}const p1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zp=(n,e)=>t=>!!(typeof t=="string"&&p1.test(t)&&t.startsWith(n)||e&&!h1(t)&&Object.prototype.hasOwnProperty.call(t,e)),H_=(n,e,t)=>i=>{if(typeof i!="string")return i;const[a,o,c,u]=i.match(Bp);return{[n]:parseFloat(a),[e]:parseFloat(o),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},m1=n=>Wi(0,255,n),xd={...ka,transform:n=>Math.round(m1(n))},Cs={test:zp("rgb","red"),parse:H_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+xd.transform(n)+", "+xd.transform(e)+", "+xd.transform(t)+", "+Oo(Xo.transform(i))+")"};function g1(n){let e="",t="",i="",a="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),a=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),a=n.substring(4,5),e+=e,t+=t,i+=i,a+=a),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:a?parseInt(a,16)/255:1}}const ph={test:zp("#"),parse:g1,transform:Cs.transform},tl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Mr=tl("deg"),ir=tl("%"),Ye=tl("px"),v1=tl("vh"),x1=tl("vw"),iv={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},Ta={test:zp("hsl","hue"),parse:H_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+ir.transform(Oo(e))+", "+ir.transform(Oo(t))+", "+Oo(Xo.transform(i))+")"},cn={test:n=>Cs.test(n)||ph.test(n)||Ta.test(n),parse:n=>Cs.test(n)?Cs.parse(n):Ta.test(n)?Ta.parse(n):ph.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Cs.transform(n):Ta.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},_1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Bp))==null?void 0:e.length)||0)+(((t=n.match(_1))==null?void 0:t.length)||0)>0}const G_="number",W_="color",S1="var",M1="var(",rv="${}",E1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Na(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},a=[];let o=0;const u=e.replace(E1,d=>(cn.test(d)?(i.color.push(o),a.push(W_),t.push(cn.parse(d))):d.startsWith(M1)?(i.var.push(o),a.push(S1),t.push(d)):(i.number.push(o),a.push(G_),t.push(parseFloat(d))),++o,rv)).split(rv);return{values:t,split:u,indexes:i,types:a}}function w1(n){return Na(n).values}function X_({split:n,types:e}){const t=n.length;return i=>{let a="";for(let o=0;o<t;o++)if(a+=n[o],i[o]!==void 0){const c=e[o];c===G_?a+=Oo(i[o]):c===W_?a+=cn.transform(i[o]):a+=i[o]}return a}}function T1(n){return X_(Na(n))}const A1=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,b1=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:A1(n);function C1(n){const e=Na(n);return X_(e)(e.values.map((i,a)=>b1(i,e.split[a])))}const Vi={test:y1,parse:w1,createTransformer:T1,getAnimatableNone:C1};function _d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function R1({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let a=0,o=0,c=0;if(!e)a=o=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;a=_d(d,u,n+1/3),o=_d(d,u,n),c=_d(d,u,n-1/3)}return{red:Math.round(a*255),green:Math.round(o*255),blue:Math.round(c*255),alpha:i}}function iu(n,e){return t=>t>0?e:n}const Bt=(n,e,t)=>n+(e-n)*t,yd=(n,e,t)=>{const i=n*n,a=t*(e*e-i)+i;return a<0?0:Math.sqrt(a)},P1=[ph,Cs,Ta],D1=n=>P1.find(e=>e.test(n));function sv(n){const e=D1(n);if(!e)return!1;let t=e.parse(n);return e===Ta&&(t=R1(t)),t}const av=(n,e)=>{const t=sv(n),i=sv(e);if(!t||!i)return iu(n,e);const a={...t};return o=>(a.red=yd(t.red,i.red,o),a.green=yd(t.green,i.green,o),a.blue=yd(t.blue,i.blue,o),a.alpha=Bt(t.alpha,i.alpha,o),Cs.transform(a))},mh=new Set(["none","hidden"]);function L1(n,e){return mh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function N1(n,e){return t=>Bt(n,e,t)}function Vp(n){return typeof n=="number"?N1:typeof n=="string"?Op(n)?iu:cn.test(n)?av:F1:Array.isArray(n)?j_:typeof n=="object"?cn.test(n)?av:I1:iu}function j_(n,e){const t=[...n],i=t.length,a=n.map((o,c)=>Vp(o)(o,e[c]));return o=>{for(let c=0;c<i;c++)t[c]=a[c](o);return t}}function I1(n,e){const t={...n,...e},i={};for(const a in t)n[a]!==void 0&&e[a]!==void 0&&(i[a]=Vp(n[a])(n[a],e[a]));return a=>{for(const o in i)t[o]=i[o](a);return t}}function U1(n,e){const t=[],i={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const o=e.types[a],c=n.indexes[o][i[o]],u=n.values[c]??0;t[a]=u,i[o]++}return t}const F1=(n,e)=>{const t=Vi.createTransformer(e),i=Na(n),a=Na(e);return i.indexes.var.length===a.indexes.var.length&&i.indexes.color.length===a.indexes.color.length&&i.indexes.number.length>=a.indexes.number.length?mh.has(n)&&!a.values.length||mh.has(e)&&!i.values.length?L1(n,e):Qo(j_(U1(i,a),a.values),t):iu(n,e)};function Y_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Bt(n,e,t):Vp(n)(n,e)}const k1=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>At.update(e,t),stop:()=>Mi(e),now:()=>Mn.isProcessing?Mn.timestamp:zn.now()}},$_=(n,e,t=10)=>{let i="";const a=Math.max(Math.round(e/t),2);for(let o=0;o<a;o++)i+=Math.round(n(o/(a-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},ru=2e4;function Hp(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<ru;)e+=t,i=n.next(e);return e>=ru?1/0:e}function O1(n,e=100,t){const i=t({...n,keyframes:[0,e]}),a=Math.min(Hp(i),ru);return{type:"keyframes",ease:o=>i.next(a*o).value/e,duration:Si(a)}}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function gh(n,e){return n*Math.sqrt(1-e*e)}const B1=12;function z1(n,e,t){let i=t;for(let a=1;a<B1;a++)i=i-n(i)/e(i);return i}const Sd=.001;function V1({duration:n=en.duration,bounce:e=en.bounce,velocity:t=en.velocity,mass:i=en.mass}){let a,o,c=1-e;c=Wi(en.minDamping,en.maxDamping,c),n=Wi(en.minDuration,en.maxDuration,Si(n)),c<1?(a=h=>{const p=h*c,v=p*n,g=p-t,_=gh(h,c),M=Math.exp(-v);return Sd-g/_*M},o=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=gh(Math.pow(h,2),c);return(-a(h)+Sd>0?-1:1)*((g-_)*M)/A}):(a=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Sd+p*v},o=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=z1(a,o,u);if(n=oi(n),isNaN(d))return{stiffness:en.stiffness,damping:en.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const H1=["duration","bounce"],G1=["stiffness","damping","mass"];function ov(n,e){return e.some(t=>n[t]!==void 0)}function W1(n){let e={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...n};if(!ov(n,G1)&&ov(n,H1))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),a=i*i,o=2*Wi(.05,1,1-(n.bounce||0))*Math.sqrt(a);e={...e,mass:en.mass,stiffness:a,damping:o}}else{const t=V1({...n,velocity:0});e={...e,...t,mass:en.mass},e.isResolvedFromDuration=!0}return e}function su(n=en.visualDuration,e=en.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:a}=t;const o=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:o},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:_}=W1({...t,velocity:-Si(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*p)),S=c-o,y=Si(Math.sqrt(d/p)),R=Math.abs(S)<5;i||(i=R?en.restSpeed.granular:en.restSpeed.default),a||(a=R?en.restDelta.granular:en.restDelta.default);let I,T,D,N,F,E;if(A<1)D=gh(y,A),N=(M+A*y*S)/D,I=O=>{const z=Math.exp(-A*y*O);return c-z*(N*Math.sin(D*O)+S*Math.cos(D*O))},F=A*y*N+S*D,E=A*y*S-N*D,T=O=>Math.exp(-A*y*O)*(F*Math.sin(D*O)+E*Math.cos(D*O));else if(A===1){I=z=>c-Math.exp(-y*z)*(S+(M+y*S)*z);const O=M+y*S;T=z=>Math.exp(-y*z)*(y*O*z-M)}else{const O=y*Math.sqrt(A*A-1);I=W=>{const Q=Math.exp(-A*y*W),de=Math.min(O*W,300);return c-Q*((M+A*y*S)*Math.sinh(de)+O*S*Math.cosh(de))/O};const z=(M+A*y*S)/O,$=A*y*z-S*O,Z=A*y*S-z*O;T=W=>{const Q=Math.exp(-A*y*W),de=Math.min(O*W,300);return Q*($*Math.sinh(de)+Z*Math.cosh(de))}}const L={calculatedDuration:_&&v||null,velocity:O=>oi(T(O)),next:O=>{if(!_&&A<1){const $=Math.exp(-A*y*O),Z=Math.sin(D*O),W=Math.cos(D*O),Q=c-$*(N*Z+S*W),de=oi($*(F*Z+E*W));return u.done=Math.abs(de)<=i&&Math.abs(c-Q)<=a,u.value=u.done?c:Q,u}const z=I(O);if(_)u.done=O>=v;else{const $=oi(T(O));u.done=Math.abs($)<=i&&Math.abs(c-z)<=a}return u.value=u.done?c:z,u},toString:()=>{const O=Math.min(Hp(L),ru),z=$_($=>L.next(O*$).value,O,30);return O+"ms "+z},toTransition:()=>{}};return L}su.applyToOptions=n=>{const e=O1(n,100,su);return n.ease=e.ease,n.duration=oi(e.duration),n.type="keyframes",n};const X1=5;function q_(n,e,t){const i=Math.max(e-X1,0);return Up(t-n(i),e-i)}function vh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},_=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let A=t*e;const S=v+A,y=c===void 0?S:c(S);y!==S&&(A=y-v);const R=E=>-A*Math.exp(-E/i),I=E=>y+R(E),T=E=>{const L=R(E),O=I(E);g.done=Math.abs(L)<=h,g.value=g.done?y:O};let D,N;const F=E=>{_(g.value)&&(D=E,N=su({keyframes:[g.value,M(g.value)],velocity:q_(I,E,g.value),damping:a,stiffness:o,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let L=!1;return!N&&D===void 0&&(L=!0,T(E),F(E)),D!==void 0&&E>=D?N.next(E-D):(!L&&T(E),g)}}}function j1(n,e,t){const i=[],a=t||ns.mix||Y_,o=n.length-1;for(let c=0;c<o;c++){let u=a(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||Zn:e;u=Qo(d,u)}i.push(u)}return i}function Gp(n,e,{clamp:t=!0,ease:i,mixer:a}={}){const o=n.length;if(Eu(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[o-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=j1(e,i,a),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=La(n[v],n[v+1],p);return u[v](g)};return t?p=>h(Wi(n[0],n[o-1],p)):h}function Y1(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const a=La(0,e,i);n.push(Bt(t,1,a))}}function K_(n){const e=[0];return Y1(e,n.length-1),e}function $1(n,e){return n.map(t=>t*e)}function q1(n,e){return n.map(()=>e||k_).splice(0,n.length-1)}function Bo({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const a=s1(i)?i.map(tv):tv(i),o={done:!1,value:e[0]},c=$1(t&&t.length===e.length?t:K_(e),n),u=Gp(c,e,{ease:Array.isArray(a)?a:q1(e,a)});return{calculatedDuration:n,next:d=>(o.value=u(d),o.done=d>=n,o)}}const K1=n=>n!==null;function wu(n,{repeat:e,repeatType:t="loop"},i,a=1){const o=n.filter(K1),u=a<0||e&&t!=="loop"&&e%2===1?0:o.length-1;return!u||i===void 0?o[u]:i}const Z1={decay:vh,inertia:vh,tween:Bo,keyframes:Bo,spring:su};function Z_(n){typeof n.type=="string"&&(n.type=Z1[n.type])}class Wp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const J1=n=>n/100;class au extends Wp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,a;const{motionValue:t}=this.options;t&&t.updatedAt!==zn.now()&&this.tick(zn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(a=(i=this.options).onStop)==null||a.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Z_(e);const{type:t=Bo,repeat:i=0,repeatDelay:a=0,repeatType:o,velocity:c=0}=e;let{keyframes:u}=e;const d=t||Bo;d!==Bo&&typeof u[0]!="number"&&(this.mixKeyframes=Qo(J1,Y_(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});o==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Hp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+a,this.totalDuration=this.resolvedDuration*(i+1)-a,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:a,mixKeyframes:o,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:A,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-a/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?y<0:y>a;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let I=this.currentTime,T=i;if(v){const E=Math.min(this.currentTime,a)/u;let L=Math.floor(E),O=E%1;!O&&E>=1&&(O=1),O===1&&L--,L=Math.min(L,v+1),!!(L%2)&&(g==="reverse"?(O=1-O,_&&(O-=_/u)):g==="mirror"&&(T=c)),I=Wi(0,1,O)*u}let D;R?(this.delayState.value=p[0],D=this.delayState):D=T.next(I),o&&!R&&(D.value=o(D.value));let{done:N}=D;!R&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return F&&M!==vh&&(D.value=wu(p,this.options,S,this.speed)),A&&A(D.value),F&&this.finish(),D}then(e,t){return this.finished.then(e,t)}get duration(){return Si(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(this.currentTime)}set time(e){e=oi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return q_(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(zn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Si(this.currentTime))}play(){var a,o;if(this.isStopped)return;const{driver:e=k1,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(o=(a=this.options).onPlay)==null||o.call(a);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(zn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Q1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Rs=n=>n*180/Math.PI,xh=n=>{const e=Rs(Math.atan2(n[1],n[0]));return _h(e)},ew={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:xh,rotateZ:xh,skewX:n=>Rs(Math.atan(n[1])),skewY:n=>Rs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},_h=n=>(n=n%360,n<0&&(n+=360),n),lv=xh,cv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),uv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),tw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cv,scaleY:uv,scale:n=>(cv(n)+uv(n))/2,rotateX:n=>_h(Rs(Math.atan2(n[6],n[5]))),rotateY:n=>_h(Rs(Math.atan2(-n[2],n[0]))),rotateZ:lv,rotate:lv,skewX:n=>Rs(Math.atan(n[4])),skewY:n=>Rs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function yh(n){return n.includes("scale")?1:0}function Sh(n,e){if(!n||n==="none")return yh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,a;if(t)i=tw,a=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=ew,a=u}if(!a)return yh(e);const o=i[e],c=a[1].split(",").map(iw);return typeof o=="function"?o(c):c[o]}const nw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Sh(t,e)};function iw(n){return parseFloat(n.trim())}const Oa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ba=new Set([...Oa,"pathRotation"]),fv=n=>n===ka||n===Ye,rw=new Set(["x","y","z"]),sw=Oa.filter(n=>!rw.has(n));function aw(n){const e=[];return sw.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const es={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:i})=>{const a=n.max-n.min;return i==="border-box"?a:a-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:i})=>{const a=n.max-n.min;return i==="border-box"?a:a-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Sh(e,"x"),y:(n,{transform:e})=>Sh(e,"y")};es.translateX=es.x;es.translateY=es.y;const Ls=new Set;let Mh=!1,Eh=!1,wh=!1;function J_(){if(Eh){const n=Array.from(Ls).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const a=aw(i);a.length&&(t.set(i,a),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const a=t.get(i);a&&a.forEach(([o,c])=>{var u;(u=i.getValue(o))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Eh=!1,Mh=!1,Ls.forEach(n=>n.complete(wh)),Ls.clear()}function Q_(){Ls.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Eh=!0)})}function ow(){wh=!0,Q_(),J_(),wh=!1}class Xp{constructor(e,t,i,a,o,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=a,this.element=o,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ls.add(this),Mh||(Mh=!0,At.read(Q_),At.resolveKeyframes(J_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:a}=this;if(e[0]===null){const o=a==null?void 0:a.get(),c=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),a&&o===void 0&&a.set(e[0])}Q1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ls.delete(this)}cancel(){this.state==="scheduled"&&(Ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const lw=n=>n.startsWith("--");function ey(n,e,t){lw(e)?n.style.setProperty(e,t):n.style[e]=t}const cw={};function jp(n,e){const t=C_(n);return()=>cw[e]??t()}const Yp=jp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ty=jp(()=>window.ViewTimeline!==void 0,"viewTimeline"),ny=jp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Io=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,dv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Io([0,.65,.55,1]),circOut:Io([.55,0,1,.45]),backIn:Io([.31,.01,.66,-.59]),backOut:Io([.33,1.53,.69,.99])};function iy(n,e){if(n)return typeof n=="function"?ny()?$_(n,e):"ease-out":O_(n)?Io(n):Array.isArray(n)?n.map(t=>iy(t,e)||dv.easeOut):dv[n]}function uw(n,e,t,{delay:i=0,duration:a=300,repeat:o=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=iy(u,a);Array.isArray(v)&&(p.easing=v);const g={delay:i,duration:a,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:o+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function ry(n){return typeof n=="function"&&"applyToOptions"in n}function fw({type:n,...e}){return ry(n)&&ny()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class sy extends Wp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:a,pseudoElement:o,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!o,this.allowFlatten=c,this.options=e,Eu(typeof e.type!="string");const h=fw(e);this.animation=uw(t,i,a,h,o),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const p=wu(a,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),ey(t,i,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,a;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((a=(i=this.animation).commitStyles)==null||a.call(i))}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return Si(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:a}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Yp()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),Zn):a(this)}}const ay={anticipate:I_,backInOut:N_,circInOut:F_};function dw(n){return n in ay}function hw(n){typeof n.ease=="string"&&dw(n.ease)&&(n.ease=ay[n.ease])}const Md=10;class pw extends sy{constructor(e){hw(e),Z_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:a,element:o,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new au({...c,autoplay:!1}),d=Math.max(Md,zn.now()-this.startTime),h=Wi(0,Md,d-Md),p=u.sample(d).value,{name:v}=this.options;o&&v&&ey(o,v,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const hv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vi.test(n)||n==="0")&&!n.startsWith("url("));function mw(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function gw(n,e,t,i){const a=n[0];if(a===null)return!1;if(e==="display"||e==="visibility")return!0;const o=n[n.length-1],c=hv(a,e),u=hv(o,e);return!c||!u?!1:mw(n)||(t==="spring"||ry(t))&&i}function Th(n){n.duration=0,n.type="keyframes"}const oy=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),vw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function xw(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&vw.test(n[e]))return!0;return!1}const _w=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yw=C_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Sw(n){var v;const{motionValue:e,name:t,repeatDelay:i,repeatType:a,damping:o,type:c,keyframes:u}=n,d=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(d instanceof HTMLElement)&&!(d instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return yw()&&t&&(oy.has(t)||_w.has(t)&&xw(u))&&(t!=="transform"||!p)&&!h&&!i&&a!=="mirror"&&o!==0&&c!=="inertia"}const Mw=40;class Ew extends Wp{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var A,S;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=zn.now();const g={autoplay:e,delay:t,type:i,repeat:a,repeatDelay:o,repeatType:c,name:d,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Xp;this.keyframeResolver=new _(u,(A,S,y)=>this.onKeyframesResolved(A,S,g,!y),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,i,a){var y,R;this.keyframeResolver=void 0;const{name:o,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=i;this.resolvedAt=zn.now();let v=!0;gw(e,o,c,u)||(v=!1,(ns.instantAnimations||!d)&&(p==null||p(wu(e,i,t))),e[0]=e[e.length-1],Th(i),i.repeat=0);const _={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>Mw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},M=v&&!h&&Sw(_),A=(R=(y=_.motionValue)==null?void 0:y.owner)==null?void 0:R.current;let S;if(M)try{S=new pw({..._,element:A})}catch{S=new au(_)}else S=new au(_);S.finished.then(()=>{this.notifyFinished()}).catch(Zn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),ow()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function ly(n,e,t,i=0,a=1){const o=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(o,c):a===1?o*i:u-o*i}const pv=30,ww=n=>!isNaN(parseFloat(n)),zo={current:void 0};class Tw{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var o;const a=zn.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ww(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ip);const i=this.events[e].add(t);return e==="change"?()=>{i(),At.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return zo.current&&zo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,pv);return Up(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Bi(n,e){return new Tw(n,e)}function cy(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function $p(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?cy(t,n):t}const Aw={type:"spring",stiffness:500,damping:25,restSpeed:10},bw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Cw={type:"keyframes",duration:.8},Rw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Pw=(n,{keyframes:e})=>e.length>2?Cw:Ba.has(n)?n.startsWith("scale")?bw(e[1]):Aw:Rw,Dw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Lw(n){for(const e in n)if(!Dw.has(e))return!0;return!1}const qp=(n,e,t,i={},a,o)=>c=>{const u=$p(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-oi(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:o?void 0:a};Lw(u)||Object.assign(p,Pw(n,p)),p.duration&&(p.duration=oi(p.duration)),p.repeatDelay&&(p.repeatDelay=oi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Th(p),p.delay===0&&(v=!0)),(ns.instantAnimations||ns.skipAnimations||a!=null&&a.shouldSkipAnimations||u.skipAnimations)&&(v=!0,Th(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!o&&e.get()!==void 0){const g=wu(p.keyframes,u);if(g!==void 0){At.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new au(p):new Ew(p)},Nw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Iw(n){const e=Nw.exec(n);if(!e)return[,];const[,t,i,a]=e;return[`--${t??i}`,a]}function uy(n,e,t=1){const[i,a]=Iw(n);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const c=o.trim();return T_(c)?parseFloat(c):c}return Op(a)?uy(a,e,t+1):a}function mv(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function Kp(n,e,t,i){if(typeof e=="function"){const[a,o]=mv(i);e=e(t!==void 0?t:n.custom,a,o)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[a,o]=mv(i);e=e(t!==void 0?t:n.custom,a,o)}return e}function Ns(n,e,t){const i=n.getProps();return Kp(i,e,t!==void 0?t:i.custom,n)}const fy=new Set(["width","height","top","left","right","bottom",...Oa]),Ah=n=>Array.isArray(n);function Uw(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Bi(t))}function Fw(n){return Ah(n)?n[n.length-1]||0:n}function kw(n,e){const t=Ns(n,e);let{transitionEnd:i={},transition:a={},...o}=t||{};o={...o,...i};for(const c in o){const u=Fw(o[c]);Uw(n,c,u)}}const An=n=>!!(n&&n.getVelocity);function Ow(n){return!!(An(n)&&n.add)}function bh(n,e){const t=n.getValue("willChange");if(Ow(t))return t.add(e);if(!t&&ns.WillChange){const i=new ns.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Zp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Bw="framerAppearId",dy="data-"+Zp(Bw);function hy(n){return n.props[dy]}function zw({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function py(n,e,{delay:t=0,transitionOverride:i,type:a}={}){let{transition:o,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();o=o?cy(o,d):d;const h=o==null?void 0:o.reduceMotion,p=o==null?void 0:o.skipAnimations;i&&(o=i);const v=[],g=a&&n.animationState&&n.animationState.getState()[a],_=o==null?void 0:o.path;_&&_.animateVisualElement(n,u,o,t,v);for(const M in u){const A=n.getValue(M,n.latestValues[M]??null),S=u[M];if(S===void 0||g&&zw(g,M))continue;const y={delay:t,...$p(o||{},M)};p&&(y.skipAnimations=!0);const R=A.get();if(R!==void 0&&!A.isAnimating()&&!Array.isArray(S)&&S===R&&!y.velocity){At.update(()=>A.set(S));continue}let I=!1;if(window.MotionHandoffAnimation){const N=hy(n);if(N){const F=window.MotionHandoffAnimation(N,M,At);F!==null&&(y.startTime=F,I=!0)}}bh(n,M);const T=h??n.shouldReduceMotion;A.start(qp(M,A,S,T&&fy.has(M)?{type:!1}:y,n,I));const D=A.animation;D&&v.push(D)}if(c){const M=()=>At.update(()=>{c&&kw(n,c)});v.length?Promise.all(v).then(M):M()}return v}function Ch(n,e,t={}){var d;const i=Ns(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(a=t.transitionOverride);const o=i?()=>Promise.all(py(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=a;return Vw(n,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:u}=a;if(u){const[h,p]=u==="beforeChildren"?[o,c]:[c,o];return h().then(()=>p())}else return Promise.all([o(),c(t.delay)])}function Vw(n,e,t=0,i=0,a=0,o=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Ch(d,e,{...c,delay:t+(typeof i=="function"?0:i)+ly(n.variantChildren,d,i,a,o)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function Hw(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const a=e.map(o=>Ch(n,o,t));i=Promise.all(a)}else if(typeof e=="string")i=Ch(n,e,t);else{const a=typeof e=="function"?Ns(n,e,t.custom):e;i=Promise.all(py(n,a,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const Gw={test:n=>n==="auto",parse:n=>n},my=n=>e=>e.test(n),gy=[ka,Ye,ir,Mr,x1,v1,Gw],gv=n=>gy.find(my(n));function Ww(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||b_(n):!0}const Xw=new Set(["brightness","contrast","saturate","opacity"]);function jw(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Bp)||[];if(!i)return n;const a=t.replace(i,"");let o=Xw.has(e)?1:0;return i!==t&&(o*=100),e+"("+o+a+")"}const Yw=/\b([a-z-]*)\(.*?\)/gu,Rh={...Vi,getAnimatableNone:n=>{const e=n.match(Yw);return e?e.map(jw).join(" "):n}},Ph={...Vi,getAnimatableNone:n=>{const e=Vi.parse(n);return Vi.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},vv={...ka,transform:Math.round},$w={rotate:Mr,pathRotation:Mr,rotateX:Mr,rotateY:Mr,rotateZ:Mr,scale:dc,scaleX:dc,scaleY:dc,scaleZ:dc,skew:Mr,skewX:Mr,skewY:Mr,distance:Ye,translateX:Ye,translateY:Ye,translateZ:Ye,x:Ye,y:Ye,z:Ye,perspective:Ye,transformPerspective:Ye,opacity:Xo,originX:iv,originY:iv,originZ:Ye},ou={borderWidth:Ye,borderTopWidth:Ye,borderRightWidth:Ye,borderBottomWidth:Ye,borderLeftWidth:Ye,borderRadius:Ye,borderTopLeftRadius:Ye,borderTopRightRadius:Ye,borderBottomRightRadius:Ye,borderBottomLeftRadius:Ye,width:Ye,maxWidth:Ye,height:Ye,maxHeight:Ye,top:Ye,right:Ye,bottom:Ye,left:Ye,inset:Ye,insetBlock:Ye,insetBlockStart:Ye,insetBlockEnd:Ye,insetInline:Ye,insetInlineStart:Ye,insetInlineEnd:Ye,padding:Ye,paddingTop:Ye,paddingRight:Ye,paddingBottom:Ye,paddingLeft:Ye,paddingBlock:Ye,paddingBlockStart:Ye,paddingBlockEnd:Ye,paddingInline:Ye,paddingInlineStart:Ye,paddingInlineEnd:Ye,margin:Ye,marginTop:Ye,marginRight:Ye,marginBottom:Ye,marginLeft:Ye,marginBlock:Ye,marginBlockStart:Ye,marginBlockEnd:Ye,marginInline:Ye,marginInlineStart:Ye,marginInlineEnd:Ye,fontSize:Ye,backgroundPositionX:Ye,backgroundPositionY:Ye,...$w,zIndex:vv,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:vv},qw={...ou,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:Rh,WebkitFilter:Rh,mask:Ph,WebkitMask:Ph},vy=n=>qw[n],Kw=new Set([Rh,Ph]);function xy(n,e){let t=vy(n);return Kw.has(t)||(t=Vi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Zw=new Set(["auto","none","0"]);function Jw(n,e,t){let i=0,a;for(;i<n.length&&!a;){const o=n[i];typeof o=="string"&&!Zw.has(o)&&Na(o).values.length&&(a=n[i]),i++}if(a&&t)for(const o of e)n[o]=xy(t,a)}class Qw extends Xp{constructor(e,t,i,a,o){super(e,t,i,a,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),Op(v))){const g=uy(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!fy.has(i)||e.length!==2)return;const[a,o]=e,c=gv(a),u=gv(o),d=nv(a),h=nv(o);if(d!==h&&es[i]){this.needsMeasurement=!0;return}if(c!==u)if(fv(c)&&fv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else es[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let a=0;a<e.length;a++)(e[a]===null||Ww(e[a]))&&i.push(a);i.length&&Jw(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=es[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const a=t[t.length-1];a!==void 0&&e.getValue(i,a).jump(a,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const a=e.getValue(t);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,c=i[o];i[o]=es[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Jp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function _y(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const a=document.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n).filter(i=>i!=null)}const Dh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Vo(n){return A_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Ia,cancel:yy}=B_(queueMicrotask,!1),ki={x:!1,y:!1};function Sy(){return ki.x||ki.y}function eT(n){return n==="x"||n==="y"?ki[n]?null:(ki[n]=!0,()=>{ki[n]=!1}):ki.x||ki.y?null:(ki.x=ki.y=!0,()=>{ki.x=ki.y=!1})}function My(n,e){const t=_y(n),i=new AbortController,a={passive:!0,...e,signal:i.signal};return[t,a,()=>i.abort()]}function tT(n){return!(n.pointerType==="touch"||Sy())}function nT(n,e,t={}){const[i,a,o]=My(n,t);return i.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=S=>{h&&(h(S),h=void 0),p()},g=S=>{u=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(S))},_=()=>{u=!0,window.addEventListener("pointerup",g,a),window.addEventListener("pointercancel",g,a)},M=S=>{if(S.pointerType!=="touch"){if(u){d=!0;return}v(S)}},A=S=>{if(!tT(S))return;d=!1;const y=e(c,S);typeof y=="function"&&(h=y,c.addEventListener("pointerleave",M,a))};c.addEventListener("pointerenter",A,a),c.addEventListener("pointerdown",_,a)}),o}const Ey=(n,e)=>e?n===e?!0:Ey(n,e.parentElement):!1,Qp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,iT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rT(n){return iT.has(n.tagName)||n.isContentEditable===!0}const sT=new Set(["INPUT","SELECT","TEXTAREA"]);function aT(n){return sT.has(n.tagName)||n.isContentEditable===!0}const Wc=new WeakSet;function xv(n){return e=>{e.key==="Enter"&&n(e)}}function Ed(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const oT=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=xv(()=>{if(Wc.has(t))return;Ed(t,"down");const a=xv(()=>{Ed(t,"up")}),o=()=>Ed(t,"cancel");t.addEventListener("keyup",a,e),t.addEventListener("blur",o,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function _v(n){return Qp(n)&&!Sy()}const yv=new WeakSet;function lT(n,e,t={}){const[i,a,o]=My(n,t),c=u=>{const d=u.currentTarget;if(!_v(u)||yv.has(u))return;Wc.add(d),t.stopPropagation&&yv.add(u);const h=e(d,u),p={...a,capture:!0},v=(M,A)=>{window.removeEventListener("pointerup",g,p),window.removeEventListener("pointercancel",_,p),Wc.has(d)&&Wc.delete(d),_v(M)&&typeof h=="function"&&h(M,{success:A})},g=M=>{v(M,d===window||d===document||t.useGlobalTarget||Ey(d,M.target))},_=M=>{v(M,!1)};window.addEventListener("pointerup",g,p),window.addEventListener("pointercancel",_,p)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,a),Vo(u)&&(u.addEventListener("focus",h=>oT(h,a)),!rT(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),o}function em(n){return A_(n)&&"ownerSVGElement"in n}const Xc=new WeakMap;let Zr;const wy=(n,e,t)=>(i,a)=>a&&a[0]?a[0][n+"Size"]:em(i)&&"getBBox"in i?i.getBBox()[e]:i[t],cT=wy("inline","width","offsetWidth"),uT=wy("block","height","offsetHeight");function fT({target:n,borderBoxSize:e}){var t;(t=Xc.get(n))==null||t.forEach(i=>{i(n,{get width(){return cT(n,e)},get height(){return uT(n,e)}})})}function dT(n){n.forEach(fT)}function hT(){typeof ResizeObserver>"u"||(Zr=new ResizeObserver(dT))}function pT(n,e){Zr||hT();const t=_y(n);return t.forEach(i=>{let a=Xc.get(i);a||(a=new Set,Xc.set(i,a)),a.add(e),Zr==null||Zr.observe(i)}),()=>{t.forEach(i=>{const a=Xc.get(i);a==null||a.delete(e),a!=null&&a.size||Zr==null||Zr.unobserve(i)})}}const jc=new Set;let Aa;function mT(){Aa=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};jc.forEach(e=>e(n))},window.addEventListener("resize",Aa)}function gT(n){return jc.add(n),Aa||mT(),()=>{jc.delete(n),!jc.size&&typeof Aa=="function"&&(window.removeEventListener("resize",Aa),Aa=void 0)}}function Lh(n,e){return typeof n=="function"?gT(n):pT(n,e)}function Ty(n,e){let t;const i=()=>{const{currentTime:a}=e,c=(a===null?0:a.value)/100;t!==c&&n(c),t=c};return At.preUpdate(i,!0),()=>Mi(i)}function vT(n){return em(n)&&n.tagName==="svg"}function xT(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],a=n[1+t],o=n[2+t],c=n[3+t],u=Gp(a,o,c);return e?u(i):u}const _T=[...gy,cn,Vi],yT=n=>_T.find(my(n)),Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ba=()=>({x:Sv(),y:Sv()}),Mv=()=>({min:0,max:0}),pn=()=>({x:Mv(),y:Mv()}),ST=new WeakMap;function Tu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function jo(n){return typeof n=="string"||Array.isArray(n)}const tm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nm=["initial",...tm];function Au(n){return Tu(n.animate)||nm.some(e=>jo(n[e]))}function Ay(n){return!!(Au(n)||n.variants)}function MT(n,e,t){for(const i in e){const a=e[i],o=t[i];if(An(a))n.addValue(i,a);else if(An(o))n.addValue(i,Bi(a,{owner:n}));else if(o!==a)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(a):c.hasAnimated||c.set(a)}else{const c=n.getStaticValue(i);n.addValue(i,Bi(c!==void 0?c:a,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Nh={current:null},by={current:!1},ET=typeof window<"u";function wT(){if(by.current=!0,!!ET)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nh.current=n.matches;n.addEventListener("change",e),e()}else Nh.current=!1}const Ev=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lu={};function Cy(n){lu=n}function TT(){return lu}class AT{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:a,skipAnimations:o,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=zn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,At.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=o,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Au(t),this.isVariantNode=Ay(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&An(M)&&M.set(h[_])}}mount(e){var t,i;if(this.hasBeenMounted)for(const a in this.initialValues)(t=this.values.get(a))==null||t.jump(this.initialValues[a]),this.latestValues[a]=this.initialValues[a];this.current=e,ST.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(by.current||wT(),this.shouldReduceMotion=Nh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Mi(this.notifyUpdate),Mi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&oy.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,v=new sy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:oi(p)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const i=Ba.has(e);i&&this.onBindTransform&&this.onBindTransform();const a=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&At.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{a(),o&&o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lu){const t=lu[e];if(!t)continue;const{isEnabled:i,Feature:a}=t;if(!this.features[e]&&a&&i(this.props)&&(this.features[e]=new a(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Ev.length;i++){const a=Ev[i];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const o="on"+a,c=e[o];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=MT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Bi(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(T_(i)||b_(i))?i=parseFloat(i):!yT(i)&&Vi.test(t)&&(i=xy(e,t)),this.setBaseTarget(e,An(i)?i.get():i)),An(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var o;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=Kp(this.props,t,(o=this.presenceContext)==null?void 0:o.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!An(a)?a:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ip),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Ia.render(this.render)}}class Ry extends AT{constructor(){super(...arguments),this.KeyframeResolver=Qw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class is{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Py({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function bT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function CT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function wd(n){return n===void 0||n===1}function Ih({scale:n,scaleX:e,scaleY:t}){return!wd(n)||!wd(e)||!wd(t)}function bs(n){return Ih(n)||Dy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Dy(n){return wv(n.x)||wv(n.y)}function wv(n){return n&&n!=="0%"}function cu(n,e,t){const i=n-t,a=e*i;return t+a}function Tv(n,e,t,i,a){return a!==void 0&&(n=cu(n,a,i)),cu(n,t,i)+e}function Uh(n,e=0,t=1,i,a){n.min=Tv(n.min,e,t,i,a),n.max=Tv(n.max,e,t,i,a)}function Ly(n,{x:e,y:t}){Uh(n.x,e.translate,e.scale,e.originPoint),Uh(n.y,t.translate,t.scale,t.originPoint)}const Av=.999999999999,bv=1.0000000000001;function RT(n,e,t,i=!1){var u;const a=t.length;if(!a)return;e.x=e.y=1;let o,c;for(let d=0;d<a;d++){o=t[d],c=o.projectionDelta;const{visualElement:h}=o.options;h&&h.props.style&&h.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(Qi(n.x,-o.scroll.offset.x),Qi(n.y,-o.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Ly(n,c)),i&&bs(o.latestValues)&&Yc(n,o.latestValues,(u=o.layout)==null?void 0:u.layoutBox))}e.x<bv&&e.x>Av&&(e.x=1),e.y<bv&&e.y>Av&&(e.y=1)}function Qi(n,e){n.min+=e,n.max+=e}function Cv(n,e,t,i,a=.5){const o=Bt(n.min,n.max,a);Uh(n,e,t,o,i)}function Rv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Yc(n,e,t){const i=t??n;Cv(n.x,Rv(e.x,i.x),e.scaleX,e.scale,e.originX),Cv(n.y,Rv(e.y,i.y),e.scaleY,e.scale,e.originY)}function Ny(n,e){return Py(CT(n.getBoundingClientRect(),e))}function PT(n,e,t){const i=Ny(n,t),{scroll:a}=e;return a&&(Qi(i.x,a.offset.x),Qi(i.y,a.offset.y)),i}const DT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LT=Oa.length;function NT(n,e,t){let i="",a=!0;for(let c=0;c<LT;c++){const u=Oa[c],d=n[u];if(d===void 0)continue;let h=!0;if(typeof d=="number")h=d===(u.startsWith("scale")?1:0);else{const p=parseFloat(d);h=u.startsWith("scale")?p===1:p===0}if(!h||t){const p=Dh(d,ou[u]);if(!h){a=!1;const v=DT[u]||u;i+=`${v}(${p}) `}t&&(e[u]=p)}}const o=n.pathRotation;return o&&(a=!1,i+=`rotate(${Dh(o,ou.pathRotation)}) `),i=i.trim(),t?i=t(e,a?"":i):a&&(i="none"),i}function im(n,e,t){const{style:i,vars:a,transformOrigin:o}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Ba.has(d)){c=!0;continue}else if(V_(d)){a[d]=h;continue}else{const p=Dh(h,ou[d]);d.startsWith("origin")?(u=!0,o[d]=p):i[d]=p}}if(e.transform||(c||t?i.transform=NT(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=o;i.transformOrigin=`${d} ${h} ${p}`}}function Iy(n,{style:e,vars:t},i,a){const o=n.style;let c;for(c in e)o[c]=e[c];a==null||a.applyProjectionStyles(o,i);for(c in t)o.setProperty(c,t[c])}function Pv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ao={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ye.test(n))n=parseFloat(n);else return n;const t=Pv(n,e.target.x),i=Pv(n,e.target.y);return`${t}% ${i}%`}},IT={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,a=Vi.parse(n);if(a.length>5)return i;const o=Vi.createTransformer(n),c=typeof a[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;a[0+c]/=u,a[1+c]/=d;const h=Bt(u,d,.5);return typeof a[2+c]=="number"&&(a[2+c]/=h),typeof a[3+c]=="number"&&(a[3+c]/=h),o(a)}},Fh={borderRadius:{...Ao,applyTo:[...Jp]},borderTopLeftRadius:Ao,borderTopRightRadius:Ao,borderBottomLeftRadius:Ao,borderBottomRightRadius:Ao,boxShadow:IT};function Uy(n,{layout:e,layoutId:t}){return Ba.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Fh[n]||n==="opacity")}function rm(n,e,t){var c;const i=n.style,a=e==null?void 0:e.style,o={};if(!i)return o;for(const u in i)(An(i[u])||a&&An(a[u])||Uy(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(o[u]=i[u]);return o}function UT(n){return window.getComputedStyle(n)}class FT extends Ry{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}mount(e){Eu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var i;if(Ba.has(t))return(i=this.projection)!=null&&i.isProjecting?yh(t):nw(e,t);{const a=UT(e),o=(V_(t)?a.getPropertyValue(t):a[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ny(e,t)}build(e,t,i){im(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return rm(e,t,i)}}const kT={offset:"stroke-dashoffset",array:"stroke-dasharray"},OT={offset:"strokeDashoffset",array:"strokeDasharray"};function BT(n,e,t=1,i=0,a=!0){n.pathLength=1;const o=a?kT:OT;n[o.offset]=`${-i}`,n[o.array]=`${e} ${t}`}const zT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Fy(n,{attrX:e,attrY:t,attrScale:i,pathLength:a,pathSpacing:o=1,pathOffset:c=0,...u},d,h,p){if(im(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of zT)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),i!==void 0&&(v.scale=i),a!==void 0&&BT(v,a,o,c,!1)}const ky=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Oy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function VT(n,e,t,i){Iy(n,e,void 0,i);for(const a in e.attrs)n.setAttribute(ky.has(a)?a:Zp(a),e.attrs[a])}function By(n,e,t){const i=rm(n,e,t);for(const a in n)if(An(n[a])||An(e[a])){const o=Oa.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;i[o]=n[a]}return i}class HT extends Ry{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ba.has(t)){const i=vy(t);return i&&i.default||0}return t=ky.has(t)?t:Zp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return By(e,t,i)}build(e,t,i){Fy(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,a){VT(e,t,i,a)}mount(e){this.isSVGTag=Oy(e.tagName),super.mount(e)}}const GT=nm.length;function zy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?zy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<GT;t++){const i=nm[t],a=n.props[i];(jo(a)||a===!1)&&(e[i]=a)}return e}function Vy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const WT=[...tm].reverse(),XT=tm.length;function jT(n){return e=>Promise.all(e.map(({animation:t,options:i})=>Hw(n,t,i)))}function YT(n){let e=jT(n),t=Dv(),i=!0,a=!1;const o=h=>(p,v)=>{var _;const g=Ns(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(g){const{transition:M,transitionEnd:A,...S}=g;p={...p,...S,...A}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=zy(n.parent)||{},g=[],_=new Set;let M={},A=1/0;for(let y=0;y<XT;y++){const R=WT[y],I=t[R],T=p[R]!==void 0?p[R]:v[R],D=jo(T),N=R===h?I.isActive:null;N===!1&&(A=y);let F=T===v[R]&&T!==p[R]&&D;if(F&&(i||a)&&n.manuallyAnimateOnMount&&(F=!1),I.protectedKeys={...M},!I.isActive&&N===null||!T&&!I.prevProp||Tu(T)||typeof T=="boolean")continue;if(R==="exit"&&I.isActive&&N!==!0){I.prevResolvedValues&&(M={...M,...I.prevResolvedValues});continue}const E=$T(I.prevProp,T);let L=E||R===h&&I.isActive&&!F&&D||y>A&&D,O=!1;const z=Array.isArray(T)?T:[T];let $=z.reduce(o(R),{});N===!1&&($={});const{prevResolvedValues:Z={}}=I,W={...Z,...$},Q=q=>{L=!0,_.has(q)&&(O=!0,_.delete(q)),I.needsAnimating[q]=!0;const Y=n.getValue(q);Y&&(Y.liveStyle=!1)};for(const q in W){const Y=$[q],K=Z[q];if(M.hasOwnProperty(q))continue;let U=!1;Ah(Y)&&Ah(K)?U=!Vy(Y,K)||E:U=Y!==K,U?Y!=null?Q(q):_.add(q):Y!==void 0&&_.has(q)?Q(q):I.protectedKeys[q]=!0}I.prevProp=T,I.prevResolvedValues=$,I.isActive&&(M={...M,...$}),(i||a)&&n.blockInitialAnimation&&(L=!1);const de=F&&E;L&&(!de||O)&&g.push(...z.map(q=>{const Y={type:R};if(typeof q=="string"&&(i||a)&&!de&&n.manuallyAnimateOnMount&&n.parent){const{parent:K}=n,U=Ns(K,q);if(K.enteringChildren&&U){const{delayChildren:se}=U.transition||{};Y.delay=ly(K.enteringChildren,n,se)}}return{animation:q,options:Y}}))}if(_.size){const y={};if(typeof p.initial!="boolean"){const R=Ns(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(y.transition=R.transition)}_.forEach(R=>{const I=n.getBaseTarget(R),T=n.getValue(R);T&&(T.liveStyle=!0),y[R]=I??null}),g.push({animation:y})}let S=!!g.length;return i&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),i=!1,a=!1,S?e(g):Promise.resolve()}function d(h,p){var g;if(t[h].isActive===p)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Dv(),a=!0}}}function $T(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Vy(e,n):!1}function Ss(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dv(){return{animate:Ss(!0),whileInView:Ss(),whileHover:Ss(),whileTap:Ss(),whileDrag:Ss(),whileFocus:Ss(),exit:Ss()}}function kh(n,e){n.min=e.min,n.max=e.max}function Ni(n,e){kh(n.x,e.x),kh(n.y,e.y)}function Lv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const Hy=1e-4,qT=1-Hy,KT=1+Hy,Gy=.01,ZT=0-Gy,JT=0+Gy;function Vn(n){return n.max-n.min}function QT(n,e,t){return Math.abs(n-e)<=t}function Nv(n,e,t,i=.5){n.origin=i,n.originPoint=Bt(e.min,e.max,n.origin),n.scale=Vn(t)/Vn(e),n.translate=Bt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=qT&&n.scale<=KT||isNaN(n.scale))&&(n.scale=1),(n.translate>=ZT&&n.translate<=JT||isNaN(n.translate))&&(n.translate=0)}function Ho(n,e,t,i){Nv(n.x,e.x,t.x,i?i.originX:void 0),Nv(n.y,e.y,t.y,i?i.originY:void 0)}function Iv(n,e,t,i=0){const a=i?Bt(t.min,t.max,i):t.min;n.min=a+e.min,n.max=n.min+Vn(e)}function eA(n,e,t,i){Iv(n.x,e.x,t.x,i==null?void 0:i.x),Iv(n.y,e.y,t.y,i==null?void 0:i.y)}function Uv(n,e,t,i=0){const a=i?Bt(t.min,t.max,i):t.min;n.min=e.min-a,n.max=n.min+Vn(e)}function uu(n,e,t,i){Uv(n.x,e.x,t.x,i==null?void 0:i.x),Uv(n.y,e.y,t.y,i==null?void 0:i.y)}function Fv(n,e,t,i,a){return n-=e,n=cu(n,1/t,i),a!==void 0&&(n=cu(n,1/a,i)),n}function tA(n,e=0,t=1,i=.5,a,o=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=Bt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Bt(o.min,o.max,i);n===o&&(u-=e),n.min=Fv(n.min,e,t,u,a),n.max=Fv(n.max,e,t,u,a)}function kv(n,e,[t,i,a],o,c){tA(n,e[t],e[i],e[a],e.scale,o,c)}const nA=["x","scaleX","originX"],iA=["y","scaleY","originY"];function Ov(n,e,t,i){kv(n.x,e,nA,t?t.x:void 0,i?i.x:void 0),kv(n.y,e,iA,t?t.y:void 0,i?i.y:void 0)}function Bv(n){return n.translate===0&&n.scale===1}function Wy(n){return Bv(n.x)&&Bv(n.y)}function zv(n,e){return n.min===e.min&&n.max===e.max}function rA(n,e){return zv(n.x,e.x)&&zv(n.y,e.y)}function Vv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Xy(n,e){return Vv(n.x,e.x)&&Vv(n.y,e.y)}function Hv(n){return Vn(n.x)/Vn(n.y)}function Gv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Ji(n){return[n("x"),n("y")]}function sA(n,e,t){let i="";const a=n.x.translate/e.x,o=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((a||o||c)&&(i=`translate3d(${a}px, ${o}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:v,rotateX:g,rotateY:_,skewX:M,skewY:A}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),v&&(i+=`rotate(${v}deg) `),g&&(i+=`rotateX(${g}deg) `),_&&(i+=`rotateY(${_}deg) `),M&&(i+=`skewX(${M}deg) `),A&&(i+=`skewY(${A}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const aA=Jp.length,Wv=n=>typeof n=="string"?parseFloat(n):n,Xv=n=>typeof n=="number"||Ye.test(n);function oA(n,e,t,i,a,o){a?(n.opacity=Bt(0,t.opacity??1,lA(i)),n.opacityExit=Bt(e.opacity??1,0,cA(i))):o&&(n.opacity=Bt(e.opacity??1,t.opacity??1,i));for(let c=0;c<aA;c++){const u=Jp[c];let d=jv(e,u),h=jv(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Xv(d)===Xv(h)?(n[u]=Math.max(Bt(Wv(d),Wv(h),i),0),(ir.test(h)||ir.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Bt(e.rotate||0,t.rotate||0,i))}function jv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const lA=jy(0,.5,U_),cA=jy(.5,.95,Zn);function jy(n,e,t){return i=>i<n?0:i>e?1:t(La(n,e,i))}function uA(n,e,t){const i=An(n)?n:Bi(n);return i.start(qp("",i,e,t)),i.animation}function Yo(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}const fA=(n,e)=>n.depth-e.depth;class dA{constructor(){this.children=[],this.isDirty=!1}add(e){Np(this.children,e),this.isDirty=!0}remove(e){nu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(fA),this.isDirty=!1,this.children.forEach(e)}}function hA(n,e){const t=zn.now(),i=({timestamp:a})=>{const o=a-t;o>=e&&(Mi(i),n(o-e))};return At.setup(i,!0),()=>Mi(i)}function $c(n){return An(n)?n.get():n}class pA{constructor(){this.members=[]}add(e){Np(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const a=i.instance;(!a||a.isConnected===!1)&&!i.snapshot&&(nu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(nu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let i=this.members.indexOf(e)-1;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1&&((t=a.instance)==null?void 0:t.isConnected)!==!1)return this.promote(a),!0}return!1}promote(e,t){var a;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:o}=i.options,{layoutDependency:c}=e.options;(o===void 0||o!==c)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(a=e.root)!=null&&a.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,i,a,o,c;(i=(t=e.options).onExitComplete)==null||i.call(t),(c=(a=e.resumingFrom)==null?void 0:(o=a.options).onExitComplete)==null||c.call(o)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Td=["","X","Y","Z"],mA=1e3;let gA=0;function Ad(n,e,t,i){const{latestValues:a}=e;a[n]&&(t[n]=a[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Yy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=hy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:a,layoutId:o}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",At,!(a||o))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Yy(i)}function $y({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:a}){return class{constructor(c={},u=e==null?void 0:e()){this.id=gA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_A),this.nodes.forEach(TA),this.nodes.forEach(AA),this.nodes.forEach(yA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new dA)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Ip),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=em(c)&&!vT(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;At.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=hA(g,250),qc.hasAnimatedSinceResize&&(qc.hasAnimatedSinceResize=!1,this.nodes.forEach(qv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||DA,{onLayoutAnimationStart:A,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Xy(this.targetLayout,_),R=!v&&g;if(this.options.layoutRoot||this.resumeFrom||R||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...$p(M,"layout"),onPlay:A,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(p,R,I.path)}else v||qv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(MA),this.nodes.forEach(Yv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach($v);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(EA),this.nodes.forEach(wA),this.nodes.forEach(vA),this.nodes.forEach(xA)):this.nodes.forEach($v),this.clearAllSnapshots();const u=zn.now();Mn.delta=Wi(0,1e3/60,u-Mn.timestamp),Mn.timestamp=u,Mn.isProcessing=!0,vd.update.process(Mn),vd.preRender.process(Mn),vd.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ia.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SA),this.sharedNodes.forEach(CA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,At.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Wy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||bs(this.latestValues)||p)&&(a(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),LA(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return pn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(NA))){const{scroll:p}=this.root;p&&(Qi(u.x,p.offset.x),Qi(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=pn();if(Ni(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ni(u,c),Qi(u.x,v.offset.x),Qi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,d){var p,v;const h=d||pn();Ni(h,c);for(let g=0;g<this.path.length;g++){const _=this.path[g];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Qi(h.x,-_.scroll.offset.x),Qi(h.y,-_.scroll.offset.y)),bs(_.latestValues)&&Yc(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return bs(this.latestValues)&&Yc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const u=pn();Ni(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!bs(p.latestValues))continue;let v;p.instance&&(Ih(p.latestValues)&&p.updateSnapshot(),v=pn(),Ni(v,p.measurePageBox())),Ov(u,p.latestValues,(d=p.snapshot)==null?void 0:d.layoutBox,v)}return bs(this.latestValues)&&Ov(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=Mn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pn(),this.targetWithTransforms=pn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ni(this.target,this.layout.layoutBox),Ly(this.target,this.targetDelta)):Ni(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ih(this.parent.latestValues)||Dy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pn(),this.relativeTargetOrigin=pn(),uu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),Ni(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ni(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;RT(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=pn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Lv(this.prevProjectionDelta.x,this.projectionDelta.x),Lv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ho(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Gv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ba(),this.projectionDelta=ba(),this.projectionDeltaWithTransform=ba()}setAnimationOrigin(c,u=!1,d){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},g=ba();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=pn(),M=h?h.source:void 0,A=this.layout?this.layout.source:void 0,S=M!==A,y=this.getStack(),R=!y||y.members.length<=1,I=!!(S&&!R&&this.options.crossfade===!0&&!this.path.some(PA));this.animationProgress=0;let T;const D=d==null?void 0:d.interpolateProjection(c);this.mixTargetDelta=N=>{const F=N/1e3,E=D==null?void 0:D(F);E?(g.x.translate=E.x,g.x.scale=Bt(c.x.scale,1,F),g.x.origin=c.x.origin,g.x.originPoint=c.x.originPoint,g.y.translate=E.y,g.y.scale=Bt(c.y.scale,1,F),g.y.origin=c.y.origin,g.y.originPoint=c.y.originPoint):(Kv(g.x,c.x,F),Kv(g.y,c.y,F)),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),RA(this.relativeTarget,this.relativeTargetOrigin,_,F),T&&rA(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=pn()),Ni(T,this.relativeTarget)),S&&(this.animationValues=v,oA(v,p,this.latestValues,F,I,R)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{qc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Bi(0)),this.motionValue.jump(0,!1),this.currentAnimation=uA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&qy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||pn();const v=Vn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=Vn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ni(u,d),Yc(u,p),Ho(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new pA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Ad("z",c,h,this.animationValues);for(let p=0;p<Td.length;p++)Ad(`rotate${Td[p]}`,c,h,this.animationValues),Ad(`skew${Td[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!bs(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=sA(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in Fh){if(p[M]===void 0)continue;const{correct:A,applyTo:S,isCSSVariable:y}=Fh[M],R=v==="none"?p[M]:A(p[M],h);if(S){const I=S.length;for(let T=0;T<I;T++)c[S[T]]=R}else y?this.options.visualElement.renderState.vars[M]=R:c[M]=R}this.options.layoutId&&(c.pointerEvents=h===this?$c(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Yv),this.root.sharedNodes.clear()}}}function vA(n){n.updateLayout()}function xA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:a}=n.layout,{animationType:o}=n.options,c=e.source!==n.layout.source;if(o==="size")Ji(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Vn(g);g.min=i[v].min,g.max=g.min+_});else if(o==="x"||o==="y"){const v=o==="x"?"y":"x";kh(c?e.measuredBox[v]:e.layoutBox[v],i[v])}else qy(o,e.layoutBox,i)&&Ji(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Vn(i[v]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=ba();Ho(u,i,e.layoutBox);const d=ba();c?Ho(d,n.applyTransform(a,!0),e.measuredBox):Ho(d,i,e.layoutBox);const h=!Wy(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:_}=v;if(g&&_){const M=n.options.layoutAnchor||void 0,A=pn();uu(A,e.layoutBox,g.layoutBox,M);const S=pn();uu(S,i,_.layoutBox,M),Xy(A,S)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=A,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function _A(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function yA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function SA(n){n.clearSnapshot()}function Yv(n){n.clearMeasurements()}function MA(n){n.isLayoutDirty=!0,n.updateLayout()}function $v(n){n.isLayoutDirty=!1}function EA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function wA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function qv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function TA(n){n.resolveTargetDelta()}function AA(n){n.calcProjection()}function bA(n){n.resetSkewAndRotation()}function CA(n){n.removeLeadSnapshot()}function Kv(n,e,t){n.translate=Bt(e.translate,0,t),n.scale=Bt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Zv(n,e,t,i){n.min=Bt(e.min,t.min,i),n.max=Bt(e.max,t.max,i)}function RA(n,e,t,i){Zv(n.x,e.x,t.x,i),Zv(n.y,e.y,t.y,i)}function PA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const DA={duration:.45,ease:[.4,0,.1,1]},Jv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Qv=Jv("applewebkit/")&&!Jv("chrome/")?Math.round:Zn;function ex(n){n.min=Qv(n.min),n.max=Qv(n.max)}function LA(n){ex(n.x),ex(n.y)}function qy(n,e,t){return n==="position"||n==="preserve-aspect"&&!QT(Hv(e),Hv(t),.2)}function NA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const IA=$y({attachResizeListener:(n,e)=>Yo(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bd={current:void 0},Ky=$y({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bd.current){const n=new IA({});n.mount(window),n.setOptions({layoutScroll:!0}),bd.current=n}return bd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bu=xe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function tx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function UA(...n){return e=>{let t=!1;const i=n.map(a=>{const o=tx(a,e);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let a=0;a<i.length;a++){const o=i[a];typeof o=="function"?o():tx(n[a],null)}}}}function FA(...n){return xe.useCallback(UA(...n),n)}class kA extends xe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Vo(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,a=Vo(i)&&i.offsetWidth||0,o=Vo(i)&&i.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=a-u.width-u.left,u.bottom=o-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function OA({children:n,isPresent:e,anchorX:t,anchorY:i,root:a,pop:o}){var g;const c=xe.useId(),u=xe.useRef(null),d=xe.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=xe.useContext(bu),p=o!==!1?((g=n.props)==null?void 0:g.ref)??(n==null?void 0:n.ref):void 0,v=FA(u,p);return xe.useInsertionEffect(()=>{const{width:_,height:M,top:A,left:S,right:y,bottom:R,direction:I}=d.current;if(e||o===!1||!u.current||!_||!M)return;const T=I==="rtl",D=t==="left"?T?`right: ${y}`:`left: ${S}`:T?`left: ${S}`:`right: ${y}`,N=i==="bottom"?`bottom: ${R}`:`top: ${A}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");h&&(F.nonce=h);const E=a??document.head;return E.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${D}px !important;
            ${N}px !important;
          }
        `),()=>{var L;(L=u.current)==null||L.removeAttribute("data-motion-pop-id"),E.contains(F)&&E.removeChild(F)}},[e]),P.jsx(kA,{isPresent:e,childRef:u,sizeRef:d,pop:o,children:o===!1?n:xe.cloneElement(n,{ref:v})})}const BA=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:a,presenceAffectsLayout:o,mode:c,anchorX:u,anchorY:d,root:h})=>{const p=ts(zA),v=xe.useId(),g=xe.useRef(t),_=xe.useRef(i);Jo(()=>{g.current=t,_.current=i});let M=!0,A=xe.useMemo(()=>(M=!1,{id:v,initial:e,isPresent:t,custom:a,onExitComplete:S=>{p.set(S,!0);for(const y of p.values())if(!y)return;i&&i()},register:S=>(p.set(S,!1),()=>{var y;p.delete(S),!g.current&&!p.size&&((y=_.current)==null||y.call(_))})}),[t,p,i]);return o&&M&&(A={...A}),xe.useMemo(()=>{p.forEach((S,y)=>p.set(y,!1))},[t]),xe.useEffect(()=>{!t&&!p.size&&i&&i()},[t]),n=P.jsx(OA,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),P.jsx(Mu.Provider,{value:A,children:n})};function zA(){return new Map}function Zy(n=!0){const e=xe.useContext(Mu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:a}=e,o=xe.useId();xe.useEffect(()=>{if(n)return a(o)},[n]);const c=xe.useCallback(()=>n&&i&&i(o),[o,i,n]);return!t&&i?[!1,c]:[!0]}const hc=n=>n.key||"";function nx(n){const e=[];return xe.Children.forEach(n,t=>{xe.isValidElement(t)&&e.push(t)}),e}const sm=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[p,v]=Zy(c),g=xe.useMemo(()=>nx(n),[n]),_=c&&!p?[]:g.map(hc),M=xe.useRef(!0),A=xe.useRef(g),S=ts(()=>new Map),y=xe.useRef(new Set),[R,I]=xe.useState(g),[T,D]=xe.useState(g);Jo(()=>{M.current=!1,A.current=g;for(let E=0;E<T.length;E++){const L=hc(T[E]);_.includes(L)?(S.delete(L),y.current.delete(L)):S.get(L)!==!0&&S.set(L,!1)}},[T,_.length,_.join("-")]);const N=[];if(g!==R){let E=[...g];for(let L=0;L<T.length;L++){const O=T[L],z=hc(O);_.includes(z)||(E.splice(L,0,O),N.push(O))}return o==="wait"&&N.length&&(E=N),D(nx(E)),I(g),null}const{forceRender:F}=xe.useContext(Lp);return P.jsx(P.Fragment,{children:T.map(E=>{const L=hc(E),O=c&&!p?!1:g===T||_.includes(L),z=()=>{if(y.current.has(L))return;if(S.has(L))y.current.add(L),S.set(L,!0);else return;let $=!0;S.forEach(Z=>{Z||($=!1)}),$&&(F==null||F(),D(A.current),c&&(v==null||v()),i&&i())};return P.jsx(BA,{isPresent:O,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:a,mode:o,root:h,onExitComplete:O?void 0:z,anchorX:u,anchorY:d,children:E},L)})})},Jy=xe.createContext({strict:!1}),ix={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rx=!1;function VA(){if(rx)return;const n={};for(const e in ix)n[e]={isEnabled:t=>ix[e].some(i=>!!t[i])};Cy(n),rx=!0}function Qy(){return VA(),TT()}function HA(n){const e=Qy();for(const t in n)e[t]={...e[t],...n[t]};Cy(e)}const GA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||GA.has(n)}let eS=n=>!fu(n);function WA(n){typeof n=="function"&&(eS=e=>e.startsWith("on")?!fu(e):n(e))}try{WA(require("@emotion/is-prop-valid").default)}catch{}function XA(n,e,t){const i={};for(const a in n)a==="values"&&typeof n.values=="object"||An(n[a])||(eS(a)||t===!0&&fu(a)||!e&&!fu(a)||n.draggable&&a.startsWith("onDrag"))&&(i[a]=n[a]);return i}const Cu=xe.createContext({});function jA(n,e){if(Au(n)){const{initial:t,animate:i}=n;return{initial:t===!1||jo(t)?t:void 0,animate:jo(i)?i:void 0}}return n.inherit!==!1?e:{}}function YA(n){const{initial:e,animate:t}=jA(n,xe.useContext(Cu));return xe.useMemo(()=>({initial:e,animate:t}),[sx(e),sx(t)])}function sx(n){return Array.isArray(n)?n.join(" "):n}const am=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tS(n,e,t){for(const i in e)!An(e[i])&&!Uy(i,t)&&(n[i]=e[i])}function $A({transformTemplate:n},e){return xe.useMemo(()=>{const t=am();return im(t,e,n),Object.assign({},t.vars,t.style)},[e])}function qA(n,e){const t=n.style||{},i={};return tS(i,t,n),Object.assign(i,$A(n,e)),i}function KA(n,e){const t={},i=qA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const nS=()=>({...am(),attrs:{}});function ZA(n,e,t,i){const a=xe.useMemo(()=>{const o=nS();return Fy(o,e,Oy(i),n.transformTemplate,n.style),{...o.attrs,style:{...o.style}}},[e]);if(n.style){const o={};tS(o,n.style,n),a.style={...o,...a.style}}return a}const JA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function om(n){return typeof n!="string"||n.includes("-")?!1:!!(JA.indexOf(n)>-1||/[A-Z]/u.test(n))}function QA(n,e,t,{latestValues:i},a,o=!1,c){const d=(c??om(n)?ZA:KA)(e,i,a,n),h=XA(e,typeof n=="string",o),p=n!==xe.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=xe.useMemo(()=>An(v)?v.get():v,[v]);return xe.createElement(n,{...p,children:g})}function eb({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,a){return{latestValues:tb(t,i,a,n),renderState:e()}}function tb(n,e,t,i){const a={},o=i(n,{});for(const g in o)a[g]=$c(o[g]);let{initial:c,animate:u}=n;const d=Au(n),h=Ay(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Tu(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=Kp(n,g[_]);if(M){const{transitionEnd:A,transition:S,...y}=M;for(const R in y){let I=y[R];if(Array.isArray(I)){const T=p?I.length-1:0;I=I[T]}I!==null&&(a[R]=I)}for(const R in A)a[R]=A[R]}}}return a}const iS=n=>(e,t)=>{const i=xe.useContext(Cu),a=xe.useContext(Mu),o=()=>eb(n,e,i,a);return t?o():ts(o)},nb=iS({scrapeMotionValuesFromProps:rm,createRenderState:am}),ib=iS({scrapeMotionValuesFromProps:By,createRenderState:nS}),rb=Symbol.for("motionComponentSymbol");function sb(n,e,t){const i=xe.useRef(t);xe.useInsertionEffect(()=>{i.current=t});const a=xe.useRef(null);return xe.useCallback(o=>{var u;o&&((u=n.onMount)==null||u.call(n,o)),e&&(o?e.mount(o):e.unmount());const c=i.current;if(typeof c=="function")if(o){const d=c(o);typeof d=="function"&&(a.current=d)}else a.current?(a.current(),a.current=null):c(o);else c&&(c.current=o)},[e])}const rS=xe.createContext({});function Ea(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ab(n,e,t,i,a,o){var I,T;const{visualElement:c}=xe.useContext(Cu),u=xe.useContext(Jy),d=xe.useContext(Mu),h=xe.useContext(bu),p=h.reducedMotion,v=h.skipAnimations,g=xe.useRef(null),_=xe.useRef(!1);i=i||u.renderer,!g.current&&i&&(g.current=i(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:o}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,A=xe.useContext(rS);M&&!M.projection&&a&&(M.type==="html"||M.type==="svg")&&ob(g.current,t,a,A);const S=xe.useRef(!1);xe.useInsertionEffect(()=>{M&&S.current&&M.update(t,d)});const y=t[dy],R=xe.useRef(!!y&&typeof window<"u"&&!((I=window.MotionHandoffIsComplete)!=null&&I.call(window,y))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,y)));return Jo(()=>{_.current=!0,M&&(S.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),R.current&&M.animationState&&M.animationState.animateChanges())}),xe.useEffect(()=>{M&&(!R.current&&M.animationState&&M.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var D;(D=window.MotionHandoffMarkAsComplete)==null||D.call(window,y)}),R.current=!1),M.enteringChildren=void 0)}),M}function ob(n,e,t,i){const{layoutId:a,layout:o,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:sS(n.parent)),n.projection.setOptions({layoutId:a,layout:o,alwaysMeasureLayout:!!c||u&&Ea(u),visualElement:n,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:p})}function sS(n){if(n)return n.options.allowProjection!==!1?n.projection:sS(n.parent)}function Cd(n,{forwardMotionProps:e=!1,type:t}={},i,a){i&&HA(i);const o=t?t==="svg":om(n),c=o?ib:nb;function u(h,p){let v;const g={...xe.useContext(bu),...h,layoutId:lb(h)},{isStatic:_}=g,M=YA(h),A=c(h,_);if(!_&&typeof window<"u"){cb();const S=ub(g);v=S.MeasureLayout,M.visualElement=ab(n,A,g,a,S.ProjectionNode,o)}return P.jsxs(Cu.Provider,{value:M,children:[v&&M.visualElement?P.jsx(v,{visualElement:M.visualElement,...g}):null,QA(n,h,sb(A,M.visualElement,p),A,_,e,o)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=xe.forwardRef(u);return d[rb]=n,d}function lb({layoutId:n}){const e=xe.useContext(Lp).id;return e&&n!==void 0?e+"-"+n:n}function cb(n,e){xe.useContext(Jy).strict}function ub(n){const e=Qy(),{drag:t,layout:i}=e;if(!t&&!i)return{};const a={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(n)||i!=null&&i.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function fb(n,e){if(typeof Proxy>"u")return Cd;const t=new Map,i=(o,c)=>Cd(o,c,n,e),a=(o,c)=>i(o,c);return new Proxy(a,{get:(o,c)=>c==="create"?i:(t.has(c)||t.set(c,Cd(c,void 0,n,e)),t.get(c))})}const db=(n,e)=>e.isSVG??om(n)?new HT(e):new FT(e,{allowProjection:n!==xe.Fragment});class hb extends is{constructor(e){super(e),e.animationState||(e.animationState=YT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Tu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let pb=0;class mb extends is{constructor(){super(...arguments),this.id=pb++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const d=Ns(this.node,c,u);if(d){const{transition:h,transitionEnd:p,...v}=d;for(const g in v)(o=this.node.getValue(g))==null||o.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const a=this.node.animationState.setActive("exit",!e);t&&!e&&a.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const gb={animation:{Feature:hb},exit:{Feature:mb}};function nl(n){return{point:{x:n.pageX,y:n.pageY}}}const vb=n=>e=>Qp(e)&&n(e,nl(e));function Go(n,e,t,i){return Yo(n,e,vb(t),i)}const aS=({current:n})=>n?n.ownerDocument.defaultView:null,ax=(n,e)=>Math.abs(n-e);function xb(n,e){const t=ax(n.x,e.x),i=ax(n.y,e.y);return Math.sqrt(t**2+i**2)}const ox=new Set(["auto","scroll"]);class oS{constructor(e,t,{transformPagePoint:i,contextWindow:a=window,dragSnapToOrigin:o=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=pc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=Rd(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,S=xb(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!S)return;const{point:y}=M,{timestamp:R}=Mn;this.history.push({...y,timestamp:R});const{onStart:I,onMove:T}=this.handlers;A||(I&&I(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,M)},this.handlePointerMove=(M,A)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=A,this.lastMoveEventInfo=pc(A,this.transformPagePoint),At.update(this.updatePoint,!0)},this.handlePointerUp=(M,A)=>{this.end();const{onEnd:S,onSessionEnd:y,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=Rd(M.type==="pointercancel"?this.lastMoveEventInfo:pc(A,this.transformPagePoint),this.history);this.startEvent&&S&&S(M,I),y&&y(M,I)},!Qp(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=a||window;const d=nl(e),h=pc(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=Mn;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,Rd(h,this.history));const _={passive:!0,capture:!0};this.removeListeners=Qo(Go(this.contextWindow,"pointermove",this.handlePointerMove,_),Go(this.contextWindow,"pointerup",this.handlePointerUp,_),Go(this.contextWindow,"pointercancel",this.handlePointerUp,_)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(ox.has(i.overflowX)||ox.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,a=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},o={x:a.x-t.x,y:a.y-t.y};o.x===0&&o.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(e,a),At.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Mi(this.updatePoint)}}function pc(n,e){return e?{point:e(n.point)}:n}function lx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Rd({point:n},e){return{point:n,delta:lx(n,lS(e)),offset:lx(n,_b(e)),velocity:yb(e,.1)}}function _b(n){return n[0]}function lS(n){return n[n.length-1]}function yb(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const a=lS(n);for(;t>=0&&(i=n[t],!(a.timestamp-i.timestamp>oi(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&a.timestamp-i.timestamp>oi(e)*2&&(i=n[1]);const o=Si(a.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const c={x:(a.x-i.x)/o,y:(a.y-i.y)/o};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function Sb(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Bt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Bt(t,n,i.max):Math.min(n,t)),n}function cx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Mb(n,{top:e,left:t,bottom:i,right:a}){return{x:cx(n.x,t,a),y:cx(n.y,e,i)}}function ux(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function Eb(n,e){return{x:ux(n.x,e.x),y:ux(n.y,e.y)}}function wb(n,e){let t=.5;const i=Vn(n),a=Vn(e);return a>i?t=La(e.min,e.max-i,n.min):i>a&&(t=La(n.min,n.max-a,e.min)),Wi(0,1,t)}function Tb(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Oh=.35;function Ab(n=Oh){return n===!1?n=0:n===!0&&(n=Oh),{x:fx(n,"left","right"),y:fx(n,"top","bottom")}}function fx(n,e,t){return{min:dx(n,e),max:dx(n,t)}}function dx(n,e){return typeof n=="number"?n:n[e]||0}const bb=new WeakMap;class Cb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=v=>{t&&this.snapToCursor(nl(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:A}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eT(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji(y=>{let R=this.getAxisMotionValue(y).get()||0;if(ir.test(R)){const{projection:I}=this.visualElement;if(I&&I.layout){const T=I.layout.layoutBox[y];T&&(R=Vn(T)*(parseFloat(R)/100))}}this.originPoint[y]=R}),A&&At.update(()=>A(v,g),!1,!0),bh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:A,onDrag:S}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:y}=g;if(M&&this.currentDirection===null){this.currentDirection=Pb(y),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",g.point,y),this.updateAxis("y",g.point,y),this.visualElement.render(),S&&At.update(()=>S(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new oS(e,{onSessionStart:o,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:i,contextWindow:aS(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,a=t||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!a||!i)return;const{velocity:c}=a;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&At.postRender(()=>u(i,a))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:a}=this.getProps();if(!i||!mc(e,a,this.currentDirection))return;const o=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=Sb(c,this.constraints[e],this.elastic[e])),o.set(c)}resolveConstraints(){var o;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,a=this.constraints;e&&Ea(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=Mb(i.layoutBox,e):this.constraints=!1,this.elastic=Ab(t),a!==this.constraints&&!Ea(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=Tb(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ea(e))return!1;const i=e.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;a.root&&(a.root.scroll=void 0,a.root.updateScroll());const o=PT(i,a.root,this.visualElement.getTransformPagePoint());let c=Eb(a.layout.layoutBox,o);if(t){const u=t(bT(c));this.hasMutatedConstraints=!!u,u&&(c=Py(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:a,dragTransition:o,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ji(p=>{if(!mc(p,t,this.currentDirection))return;let v=d&&d[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const g=a?200:1e6,_=a?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...o,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return bh(this.visualElement,e),i.start(qp(e,i,0,t,this.visualElement,!1))}stopAnimation(){Ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps()[t];return a||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ji(t=>{const{drag:i}=this.getProps();if(!mc(t,i,this.currentDirection))return;const{projection:a}=this.visualElement,o=this.getAxisMotionValue(t);if(a&&a.layout){const{min:c,max:u}=a.layout.layoutBox[t],d=o.get()||0;o.set(e[t]-Bt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ea(t)||!i||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();a[c]=wb({min:d,max:d},this.constraints[c])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ji(c=>{if(!mc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(Bt(d,h,a[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;bb.set(this.visualElement,this);const e=this.visualElement.current,t=Go(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&aT(g);p&&v&&!_&&this.start(h)});let i;const a=()=>{const{dragConstraints:h}=this.getProps();Ea(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),i||(i=Rb(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,c=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),At.read(a);const u=Yo(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ji(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:a=!1,dragConstraints:o=!1,dragElastic:c=Oh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:a,dragConstraints:o,dragElastic:c,dragMomentum:u}}}function hx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function Rb(n,e,t){const i=Lh(n,hx(t)),a=Lh(e,hx(t));return()=>{i(),a()}}function mc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Pb(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Db extends is{constructor(e){super(e),this.removeGroupControls=Zn,this.removeListeners=Zn,this.controls=new Cb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Pd=n=>(e,t)=>{n&&At.update(()=>n(e,t),!1,!0)};class Lb extends is{constructor(){super(...arguments),this.removePointerDownListener=Zn}onPointerDown(e){this.session=new oS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:aS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:a}=this.node.getProps();return{onSessionStart:Pd(e),onStart:Pd(t),onMove:Pd(i),onEnd:(o,c)=>{delete this.session,a&&At.postRender(()=>a(o,c))}}}mount(){this.removePointerDownListener=Go(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Dd=!1;class Nb extends xe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:a}=this.props,{projection:o}=e;o&&(t.group&&t.group.add(o),i&&i.register&&a&&i.register(o),Dd&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:a,isPresent:o}=this.props,{projection:c}=i;return c&&(c.isPresent=o,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Dd=!0,a||e.layoutDependency!==t||t===void 0||e.isPresent!==o?c.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?c.promote():c.relegate()||At.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),Ia.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:a}=e;Dd=!0,a&&(a.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(a),i&&i.deregister&&i.deregister(a))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function cS(n){const[e,t]=Zy(),i=xe.useContext(Lp);return P.jsx(Nb,{...n,layoutGroup:i,switchLayoutGroup:xe.useContext(rS),isPresent:e,safeToRemove:t})}const Ib={pan:{Feature:Lb},drag:{Feature:Db,ProjectionNode:Ky,MeasureLayout:cS}};function px(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const a="onHover"+t,o=i[a];o&&At.postRender(()=>o(e,nl(e)))}class Ub extends is{mount(){const{current:e}=this.node;e&&(this.unmount=nT(e,(t,i)=>(px(this.node,i,"Start"),a=>px(this.node,a,"End"))))}unmount(){}}class Fb extends is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qo(Yo(this.node.current,"focus",()=>this.onFocus()),Yo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mx(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const a="onTap"+(t==="End"?"":t),o=i[a];o&&At.postRender(()=>o(e,nl(e)))}class kb extends is{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=lT(e,(a,o)=>(mx(this.node,o,"Start"),(c,{success:u})=>mx(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Bh=new WeakMap,Ld=new WeakMap,Ob=n=>{const e=Bh.get(n.target);e&&e(n)},Bb=n=>{n.forEach(Ob)};function zb({root:n,...e}){const t=n||document;Ld.has(t)||Ld.set(t,{});const i=Ld.get(t),a=JSON.stringify(e);return i[a]||(i[a]=new IntersectionObserver(Bb,{root:n,...e})),i[a]}function Vb(n,e,t){const i=zb(e);return Bh.set(n,t),i.observe(n),()=>{Bh.delete(n),i.unobserve(n)}}const Hb={some:0,all:1};class Gb extends is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:a="some",once:o}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof a=="number"?a:Hb[a]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,o&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),_=p?v:g;_&&_(h)};this.stopObserver=Vb(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Wb(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Wb({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Xb={inView:{Feature:Gb},tap:{Feature:kb},focus:{Feature:Fb},hover:{Feature:Ub}},jb={layout:{ProjectionNode:Ky,MeasureLayout:cS}},Yb={...gb,...Xb,...Ib,...jb},mn=fb(Yb,db);function du(n){return typeof window>"u"?!1:n?ty():Yp()}const $b=50,gx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),qb=()=>({time:0,x:gx(),y:gx()}),Kb={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function vx(n,e,t,i){const a=t[e],{length:o,position:c}=Kb[e],u=a.current,d=t.time;a.current=Math.abs(n[`scroll${c}`]),a.scrollLength=n[`scroll${o}`]-n[`client${o}`],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=La(0,a.scrollLength,a.current);const h=i-d;a.velocity=h>$b?0:Up(a.current-u,h)}function Zb(n,e,t){vx(n,"x",e,t),vx(n,"y",e,t),e.time=t}function Jb(n,e){const t={x:0,y:0};let i=n;for(;i&&i!==e;)if(Vo(i))t.x+=i.offsetLeft,t.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const a=i.getBoundingClientRect();i=i.parentElement;const o=i.getBoundingClientRect();t.x+=a.left-o.left,t.y+=a.top-o.top}else if(i instanceof SVGGraphicsElement){const{x:a,y:o}=i.getBBox();t.x+=a,t.y+=o;let c=null,u=i.parentNode;for(;!c;)u.tagName==="svg"&&(c=u),u=i.parentNode;i=c}else break;return t}const zh={start:0,center:.5,end:1};function xx(n,e,t=0){let i=0;if(n in zh&&(n=zh[n]),typeof n=="string"){const a=parseFloat(n);n.endsWith("px")?i=a:n.endsWith("%")?n=a/100:n.endsWith("vw")?i=a/100*document.documentElement.clientWidth:n.endsWith("vh")?i=a/100*document.documentElement.clientHeight:n=a}return typeof n=="number"&&(i=e*n),t+i}const Qb=[0,0];function eC(n,e,t,i){let a=Array.isArray(n)?n:Qb,o=0,c=0;return typeof n=="number"?a=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?a=n.split(" "):a=[n,zh[n]?n:"0"]),o=xx(a[0],t,i),c=xx(a[1],e),o-c}const Uo={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},tC={x:0,y:0};function nC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function iC(n,e,t){const{offset:i=Uo.All}=t,{target:a=n,axis:o="y"}=t,c=o==="y"?"height":"width",u=a!==n?Jb(a,n):tC,d=a===n?{width:n.scrollWidth,height:n.scrollHeight}:nC(a),h={width:n.clientWidth,height:n.clientHeight};e[o].offset.length=0;let p=!e[o].interpolate;const v=i.length;for(let g=0;g<v;g++){const _=eC(i[g],h[c],d[c],u[o]);!p&&_!==e[o].interpolatorOffsets[g]&&(p=!0),e[o].offset[g]=_}p&&(e[o].interpolate=Gp(e[o].offset,K_(i),{clamp:!1}),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=Wi(0,1,e[o].interpolate(e[o].current))}function rC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let i=e;for(;i&&i!==n;)t.x.targetOffset+=i.offsetLeft,t.y.targetOffset+=i.offsetTop,i=i.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function sC(n,e,t,i={}){return{measure:a=>{rC(n,i.target,t),Zb(n,t,a),(i.offset||i.target)&&iC(n,t,i)},notify:()=>e(t)}}const ca=new WeakMap,_x=new WeakMap,Nd=new WeakMap,yx=new WeakMap,gc=new WeakMap,Sx=n=>n===document.scrollingElement?window:n;function uS(n,{container:e=document.scrollingElement,trackContentSize:t=!1,...i}={}){if(!e)return Zn;let a=Nd.get(e);a||(a=new Set,Nd.set(e,a));const o=qb(),c=sC(e,n,o,i);if(a.add(c),!ca.has(e)){const d=()=>{for(const g of a)g.measure(Mn.timestamp);At.preUpdate(h)},h=()=>{for(const g of a)g.notify()},p=()=>At.read(d);ca.set(e,p);const v=Sx(e);window.addEventListener("resize",p),e!==document.documentElement&&_x.set(e,Lh(e,p)),v.addEventListener("scroll",p),p()}if(t&&!gc.has(e)){const d=ca.get(e),h={width:e.scrollWidth,height:e.scrollHeight};yx.set(e,h);const p=()=>{const g=e.scrollWidth,_=e.scrollHeight;(h.width!==g||h.height!==_)&&(d(),h.width=g,h.height=_)},v=At.read(p,!0);gc.set(e,v)}const u=ca.get(e);return At.read(u,!1,!0),()=>{var v;Mi(u);const d=Nd.get(e);if(!d||(d.delete(c),d.size))return;const h=ca.get(e);ca.delete(e),h&&(Sx(e).removeEventListener("scroll",h),(v=_x.get(e))==null||v(),window.removeEventListener("resize",h));const p=gc.get(e);p&&(Mi(p),gc.delete(e)),yx.delete(e)}}const aC=[[Uo.Enter,"entry"],[Uo.Exit,"exit"],[Uo.Any,"cover"],[Uo.All,"contain"]],Mx={start:0,end:1};function oC(n){const e=n.trim().split(/\s+/);if(e.length!==2)return;const t=Mx[e[0]],i=Mx[e[1]];if(!(t===void 0||i===void 0))return[t,i]}function lC(n){if(n.length!==2)return;const e=[];for(const t of n)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const i=oC(t);if(!i)return;e.push(i)}else return;return e}function cC(n,e){const t=lC(n);if(!t)return!1;for(let i=0;i<2;i++){const a=t[i],o=e[i];if(a[0]!==o[0]||a[1]!==o[1])return!1}return!0}function lm(n){if(!n)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of aC)if(cC(n,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const Ex=new Map;function wx(n){const e={value:0},t=uS(i=>{e.value=i[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function fS({source:n,container:e,...t}){const{axis:i}=t;n&&(e=n);let a=Ex.get(e);a||(a=new Map,Ex.set(e,a));const o=t.target??"self";let c=a.get(o);c||(c={},a.set(o,c));const u=i+(t.offset??[]).join(",");return c[u]||(t.target&&du(t.target)?lm(t.offset)?c[u]=new ViewTimeline({subject:t.target,axis:i}):c[u]=wx({container:e,...t}):du()?c[u]=new ScrollTimeline({source:e,axis:i}):c[u]=wx({container:e,...t})),c[u]}function uC(n,e){const t=fS(e),i=e.target?lm(e.offset):void 0,a=e.target?du(e.target)&&!!i:du();return n.attachTimeline({timeline:a?t:void 0,...i&&a&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:o=>(o.pause(),Ty(c=>{o.time=o.iterationDuration*c},t))})}function fC(n){return n&&(n.target||n.offset)}function dC(n){return n.length===2}function hC(n,e){return dC(n)||fC(e)?uS(t=>{n(t[e.axis].progress,t)},e):Ty(n,fS(e))}function dS(n,{axis:e="y",container:t=document.scrollingElement,...i}={}){if(!t)return Zn;const a={axis:e,container:t,...i};return typeof n=="function"?hC(n,a):uC(n,a)}const pC=()=>({scrollX:Bi(0),scrollY:Bi(0),scrollXProgress:Bi(0),scrollYProgress:Bi(0)}),Ca=n=>n?!n.current:!1;function Tx(n,e,t,i){return{factory:a=>{let o;const c=()=>{if(Ca(t)||Ca(i)){Ia.read(c);return}o=dS(a,{...e,axis:n,container:(t==null?void 0:t.current)||void 0,target:(i==null?void 0:i.current)||void 0})};return Ia.read(c),()=>{yy(c),o==null||o()}},times:[0,1],keyframes:[0,1],ease:a=>a,duration:1}}function mC(n,e){return typeof window>"u"?!1:n?ty()&&!!lm(e):Yp()}function hS({container:n,target:e,...t}={}){const i=ts(pC);mC(e,t.offset)&&(i.scrollXProgress.accelerate=Tx("x",t,n,e),i.scrollYProgress.accelerate=Tx("y",t,n,e));const a=xe.useRef(null),o=xe.useRef(!1),c=xe.useCallback(()=>(a.current=dS((u,{x:d,y:h})=>{i.scrollX.set(d.current),i.scrollXProgress.set(d.progress),i.scrollY.set(h.current),i.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var u;(u=a.current)==null||u.call(a)}),[n,e,JSON.stringify(t.offset)]);return Jo(()=>{if(o.current=!1,Ca(n)||Ca(e)){o.current=!0;return}else return c()},[c]),xe.useEffect(()=>{if(!o.current)return;let u;const d=()=>{const h=Ca(n),p=Ca(e);!h&&!p&&(u=c())};return Ia.read(d),()=>{yy(d),u==null||u()}},[c]),i}function gC(n){const e=ts(()=>Bi(n)),{isStatic:t}=xe.useContext(bu);if(t){const[,i]=xe.useState(n);xe.useEffect(()=>e.on("change",i),[])}return e}function pS(n,e){const t=gC(e()),i=()=>t.set(e());return i(),Jo(()=>{const a=()=>At.preRender(i,!1,!0),o=n.map(c=>c.on("change",a));return()=>{o.forEach(c=>c()),Mi(i)}}),t}function vC(n){zo.current=[],n();const e=pS(zo.current,n);return zo.current=void 0,e}function cm(n,e,t,i){if(typeof n=="function")return vC(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return xC(n,e,t,i);const c=typeof e=="function"?e:xT(e,t,i),u=Array.isArray(n)?Ax(n,c):Ax([n],([h])=>c(h)),d=Array.isArray(n)?void 0:n.accelerate;return d&&!d.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(i==null?void 0:i.clamp)!==!1&&(u.accelerate={...d,times:e,keyframes:t,isTransformed:!0}),u}function Ax(n,e){const t=ts(()=>[]);return pS(n,()=>{t.length=0;const i=n.length;for(let a=0;a<i;a++)t[a]=n[a].get();return e(t)})}function xC(n,e,t,i){const a=ts(()=>Object.keys(t)),o=ts(()=>({}));for(const c of a)o[c]=cm(n,e,t[c],i);return o}const mS=({onClick:n,className:e="",label:t="Contact Me"})=>P.jsx("button",{onClick:n,type:"button",className:`group relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${e}`,style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",boxShadow:"0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:P.jsx("span",{className:"relative z-10 transition-transform duration-200 group-hover:scale-105",children:t})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="186",_C=0,bx=1,yC=2,Kc=1,SC=2,Fo=3,Is=0,Jn=1,Er=2,Tr=0,Wo=1,Vh=2,Cx=3,Rx=4,MC=5,wa=100,EC=101,wC=102,TC=103,AC=104,bC=200,CC=201,RC=202,PC=203,gS=204,vS=205,DC=206,LC=207,NC=208,IC=209,UC=210,FC=211,kC=212,OC=213,BC=214,Hh=0,Gh=1,Wh=2,$o=3,Xh=4,jh=5,Yh=6,$h=7,xS=0,zC=1,VC=2,rr=0,_S=1,yS=2,SS=3,MS=4,ES=5,wS=6,TS=7,AS=300,Us=301,Ua=302,Id=303,Ud=304,Ru=306,qh=1e3,wr=1001,Kh=1002,bn=1003,HC=1004,vc=1005,Un=1006,Fd=1007,Ps=1008,yi=1009,bS=1010,CS=1011,qo=1012,fm=1013,sr=1014,tr=1015,ar=1016,dm=1017,hm=1018,Ko=1020,RS=35902,PS=35899,DS=1021,LS=1022,zi=1023,br=1026,Ds=1027,NS=1028,pm=1029,Fs=1030,mm=1031,gm=1033,Zc=33776,Jc=33777,Qc=33778,eu=33779,Zh=35840,Jh=35841,Qh=35842,ep=35843,tp=36196,np=37492,ip=37496,rp=37488,sp=37489,hu=37490,ap=37491,op=37808,lp=37809,cp=37810,up=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,xp=37819,_p=37820,yp=37821,Sp=36492,Mp=36494,Ep=36495,wp=36283,Tp=36284,pu=36285,Ap=36286,GC=3200,Px=0,WC=1,Qr="",xi="srgb",mu="srgb-linear",gu="linear",Ft="srgb",kd=7680,XC=519,jC=512,YC=513,$C=514,vm=515,qC=516,KC=517,xm=518,ZC=519,JC=35044,Dx="300 es",nr=2e3,vu=2001;function QC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eR(){const n=xu("canvas");return n.style.display="block",n}const Lx={};function Nx(...n){const e="THREE."+n.shift();console.log(e,...n)}function IS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=IS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Dt(...n){n=IS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Pa(...n){const e=n.join(" ");e in Lx||(Lx[e]=!0,ot(...n))}function tR(n,e,t){return new Promise(function(i,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const nR={[Hh]:Gh,[Wh]:Yh,[Xh]:$h,[$o]:jh,[Gh]:Hh,[Yh]:Wh,[$h]:Xh,[jh]:$o};class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,bp=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function iR(n,e){return(n%e+e)%e}function Bd(n,e,t){return(1-t)*n+t*e}function bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wm=class wm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wm.prototype.isVector2=!0;let wt=wm;class za{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],v=i[a+3],g=o[c+0],_=o[c+1],M=o[c+2],A=o[c+3];if(v!==A||d!==g||h!==_||p!==M){let S=d*g+h*_+p*M+v*A;S<0&&(g=-g,_=-_,M=-M,A=-A,S=-S);let y=1-u;if(S<.9995){const R=Math.acos(S),I=Math.sin(R);y=Math.sin(y*R)/I,u=Math.sin(u*R)/I,d=d*y+g*u,h=h*y+_*u,p=p*y+M*u,v=v*y+A*u}else{d=d*y+g*u,h=h*y+_*u,p=p*y+M*u,v=v*y+A*u;const R=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=R,h*=R,p*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],v=o[c],g=o[c+1],_=o[c+2],M=o[c+3];return e[t]=u*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-u*_,e[t+2]=h*M+p*_+u*g-d*v,e[t+3]=p*M-u*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),v=u(o/2),g=d(i/2),_=d(a/2),M=d(o/2);switch(c){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=i+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(o-h)*_,this._z=(c-a)*_}else if(i>u&&i>v){const _=2*Math.sqrt(1+i-u-v);this._w=(p-d)/_,this._x=.25*_,this._y=(a+c)/_,this._z=(o+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-i-v);this._w=(o-h)/_,this._x=(a+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-i-u);this._w=(c-a)/_,this._x=(o+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-o*d,this._y=a*p+c*d+o*u-i*h,this._z=o*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,a=-a,o=-o,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tm=class Tm{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ix.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ix.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-o*a),v=2*(o*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-o*v,this.z=a+d*v+o*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tm.prototype.isVector3=!0;let re=Tm;const zd=new re,Ix=new za,Am=class Am{constructor(e,t,i,a,o,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h)}set(e,t,i,a,o,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],g=i[2],_=i[5],M=i[8],A=a[0],S=a[3],y=a[6],R=a[1],I=a[4],T=a[7],D=a[2],N=a[5],F=a[8];return o[0]=c*A+u*R+d*D,o[3]=c*S+u*I+d*N,o[6]=c*y+u*T+d*F,o[1]=h*A+p*R+v*D,o[4]=h*S+p*I+v*N,o[7]=h*y+p*T+v*F,o[2]=g*A+_*R+M*D,o[5]=g*S+_*I+M*N,o[8]=g*y+_*T+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*o*p+i*u*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*o,_=h*o-c*d,M=t*v+i*g+a*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(a*h-p*i)*A,e[2]=(u*i-a*c)*A,e[3]=g*A,e[4]=(p*t-a*d)*A,e[5]=(a*o-u*t)*A,e[6]=_*A,e[7]=(i*d-h*t)*A,e[8]=(c*t-i*o)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Pa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vd.makeScale(e,t)),this}rotate(e){return Pa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vd.makeRotation(-e)),this}translate(e,t){return Pa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Am.prototype.isMatrix3=!0;let ct=Am;const Vd=new ct,Ux=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){const n={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ft&&(a.r=Ar(a.r),a.g=Ar(a.g),a.b=Ar(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(a.r=Da(a.r),a.g=Da(a.g),a.b=Da(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Qr?gu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Pa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Pa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mu]:{primaries:e,whitePoint:i,transfer:gu,toXYZ:Ux,fromXYZ:Fx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Ux,fromXYZ:Fx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const yt=rR();function Ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ua;class sR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ua===void 0&&(ua=xu("canvas")),ua.width=e.width,ua.height=e.height;const a=ua.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ua}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Ar(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ar(t[i]/255)*255):t[i]=Ar(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aR=0;class _m{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Hd(a[c].image)):o.push(Hd(a[c]))}else o=Hd(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Hd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let oR=0;const Gd=new re;class Hn extends Os{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=wr,a=wr,o=Un,c=Ps,u=zi,d=yi,h=Hn.DEFAULT_ANISOTROPY,p=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=il(),this.name="",this.source=new _m(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=AS;Hn.DEFAULT_ANISOTROPY=1;const bm=class bm{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],A=d[2],S=d[6],y=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,T=(_+1)/2,D=(y+1)/2,N=(p+g)/4,F=(v+A)/4,E=(M+S)/4;return I>T&&I>D?I<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(I),a=N/i,o=F/i):T>D?T<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(T),i=N/a,o=E/a):D<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(D),i=F/o,a=E/o),this.set(i,a,o,t),this}let R=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(v-A)/R,this.z=(g-p)/R,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bm.prototype.isVector4=!0;let tn=bm;class lR extends Os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Hn(a),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _m(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends lR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class US extends Hn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cR extends Hn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Su=class Su{constructor(e,t,i,a,o,c,u,d,h,p,v,g,_,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h,p,v,g,_,M,A,S)}set(e,t,i,a,o,c,u,d,h,p,v,g,_,M,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=o,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=p,y[10]=v,y[14]=g,y[3]=_,y[7]=M,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/fa.setFromMatrixColumn(e,0).length(),o=1/fa.setFromMatrixColumn(e,1).length(),c=1/fa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const g=c*p,_=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-A*h,t[9]=-u*d,t[2]=A-g*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,A=h*v;t[0]=g+A*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=A+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,A=h*v;t[0]=g-A*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=A-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=_*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=A-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=c*d,_=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+A,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uR,e,fR)}lookAt(e,t,i){const a=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),jr.crossVectors(i,ri),jr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),jr.crossVectors(i,ri)),jr.normalize(),xc.crossVectors(ri,jr),a[0]=jr.x,a[4]=xc.x,a[8]=ri.x,a[1]=jr.y,a[5]=xc.y,a[9]=ri.y,a[2]=jr.z,a[6]=xc.z,a[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],g=i[9],_=i[13],M=i[2],A=i[6],S=i[10],y=i[14],R=i[3],I=i[7],T=i[11],D=i[15],N=a[0],F=a[4],E=a[8],L=a[12],O=a[1],z=a[5],$=a[9],Z=a[13],W=a[2],Q=a[6],de=a[10],ie=a[14],q=a[3],Y=a[7],K=a[11],U=a[15];return o[0]=c*N+u*O+d*W+h*q,o[4]=c*F+u*z+d*Q+h*Y,o[8]=c*E+u*$+d*de+h*K,o[12]=c*L+u*Z+d*ie+h*U,o[1]=p*N+v*O+g*W+_*q,o[5]=p*F+v*z+g*Q+_*Y,o[9]=p*E+v*$+g*de+_*K,o[13]=p*L+v*Z+g*ie+_*U,o[2]=M*N+A*O+S*W+y*q,o[6]=M*F+A*z+S*Q+y*Y,o[10]=M*E+A*$+S*de+y*K,o[14]=M*L+A*Z+S*ie+y*U,o[3]=R*N+I*O+T*W+D*q,o[7]=R*F+I*z+T*Q+D*Y,o[11]=R*E+I*$+T*de+D*K,o[15]=R*L+I*Z+T*ie+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],A=e[7],S=e[11],y=e[15],R=d*_-h*g,I=u*_-h*v,T=u*g-d*v,D=c*_-h*p,N=c*g-d*p,F=c*v-u*p;return t*(A*R-S*I+y*T)-i*(M*R-S*D+y*N)+a*(M*I-A*D+y*F)-o*(M*T-A*N+S*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],c=e[5],u=e[9],d=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-i*(o*p-u*d)+a*(o*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],A=e[13],S=e[14],y=e[15],R=t*u-i*c,I=t*d-a*c,T=t*h-o*c,D=i*d-a*u,N=i*h-o*u,F=a*h-o*d,E=p*A-v*M,L=p*S-g*M,O=p*y-_*M,z=v*S-g*A,$=v*y-_*A,Z=g*y-_*S,W=R*Z-I*$+T*z+D*O-N*L+F*E;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/W;return e[0]=(u*Z-d*$+h*z)*Q,e[1]=(a*$-i*Z-o*z)*Q,e[2]=(A*F-S*N+y*D)*Q,e[3]=(g*N-v*F-_*D)*Q,e[4]=(d*O-c*Z-h*L)*Q,e[5]=(t*Z-a*O+o*L)*Q,e[6]=(S*T-M*F-y*I)*Q,e[7]=(p*F-g*T+_*I)*Q,e[8]=(c*$-u*O+h*E)*Q,e[9]=(i*O-t*$-o*E)*Q,e[10]=(M*N-A*T+y*R)*Q,e[11]=(v*T-p*N-_*R)*Q,e[12]=(u*L-c*z-d*E)*Q,e[13]=(t*z-i*L+a*E)*Q,e[14]=(A*I-M*D-S*R)*Q,e[15]=(p*D-v*I+g*R)*Q,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,d=e.z,h=o*c,p=o*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,h=o+o,p=c+c,v=u+u,g=o*h,_=o*p,M=o*v,A=c*p,S=c*v,y=u*v,R=d*h,I=d*p,T=d*v,D=i.x,N=i.y,F=i.z;return a[0]=(1-(A+y))*D,a[1]=(_+T)*D,a[2]=(M-I)*D,a[3]=0,a[4]=(_-T)*N,a[5]=(1-(g+y))*N,a[6]=(S+R)*N,a[7]=0,a[8]=(M+I)*F,a[9]=(S-R)*F,a[10]=(1-(g+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let c=fa.set(a[0],a[1],a[2]).length();const u=fa.set(a[4],a[5],a[6]).length(),d=fa.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Ii.copy(this);const h=1/c,p=1/u,v=1/d;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=p,Ii.elements[5]*=p,Ii.elements[6]*=p,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,t.setFromRotationMatrix(Ii),i.x=c,i.y=u,i.z=d,this}makePerspective(e,t,i,a,o,c,u=nr,d=!1){const h=this.elements,p=2*o/(t-e),v=2*o/(i-a),g=(t+e)/(t-e),_=(i+a)/(i-a);let M,A;if(d)M=o/(c-o),A=c*o/(c-o);else if(u===nr)M=-(c+o)/(c-o),A=-2*c*o/(c-o);else if(u===vu)M=-c/(c-o),A=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=nr,d=!1){const h=this.elements,p=2/(t-e),v=2/(i-a),g=-(t+e)/(t-e),_=-(i+a)/(i-a);let M,A;if(d)M=1/(c-o),A=c/(c-o);else if(u===nr)M=-2/(c-o),A=-(c+o)/(c-o);else if(u===vu)M=-1/(c-o),A=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Su.prototype.isMatrix4=!0;let sn=Su;const fa=new re,Ii=new sn,uR=new re(0,0,0),fR=new re(1,1,1),jr=new re,xc=new re,ri=new re,kx=new sn,Ox=new za;class ks{constructor(e=0,t=0,i=0,a=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],v=a[2],g=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ox.setFromEuler(this),this.setFromQuaternion(Ox,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class FS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dR=0;const Bx=new re,da=new za,vr=new sn,_c=new re,Co=new re,hR=new re,pR=new za,zx=new re(1,0,0),Vx=new re(0,1,0),Hx=new re(0,0,1),Gx={type:"added"},mR={type:"removed"},ha={type:"childadded",child:null},Wd={type:"childremoved",child:null};class Qn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new re,t=new ks,i=new za,a=new re(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new sn},normalMatrix:{value:new ct}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Vx,e)}rotateZ(e){return this.rotateOnAxis(Hx,e)}translateOnAxis(e,t){return Bx.copy(e).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Vx,e)}translateZ(e){return this.translateOnAxis(Hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Co,_c,this.up):vr.lookAt(_c,Co,this.up),this.quaternion.setFromRotationMatrix(vr),a&&(vr.extractRotation(a.matrixWorld),da.setFromRotationMatrix(vr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gx),ha.child=e,this.dispatchEvent(ha),ha.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mR),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gx),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,hR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,pR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(e.materials,this.material[d]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qn.DEFAULT_UP=new re(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gR={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,i),y=this._getHandJoint(h,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(gR)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function jd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=yt.workingColorSpace){if(e=iR(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=jd(c,o,e+1/3),this.g=jd(c,o,e),this.b=jd(c,o,e-1/3)}return yt.colorSpaceToWorking(this,a),this}setStyle(e,t=xi){function i(o){o!==void 0&&parseFloat(o)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const i=kS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return yt.workingToColorSpace(In.copy(this),e),Math.round(St(In.r*255,0,255))*65536+Math.round(St(In.g*255,0,255))*256+Math.round(St(In.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(In.copy(this),t);const i=In.r,a=In.g,o=In.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(a-o)/v+(a<o?6:0);break;case a:d=(o-i)/v+2;break;case o:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=xi){yt.workingToColorSpace(In.copy(this),e);const t=In.r,i=In.g,a=In.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Sc);const i=Bd(Yr.h,Sc.h,t),a=Bd(Yr.s,Sc.s,t),o=Bd(Yr.l,Sc.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Et;Et.NAMES=kS;class vR extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new re,xr=new re,Yd=new re,_r=new re,pa=new re,ma=new re,Wx=new re,$d=new re,qd=new re,Kd=new re,Zd=new tn,Jd=new tn,Qd=new tn;class Oi{constructor(e=new re,t=new re,i=new re){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ui.subVectors(e,t),a.cross(Ui);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Ui.subVectors(a,t),xr.subVectors(i,t),Yd.subVectors(e,t);const c=Ui.dot(Ui),u=Ui.dot(xr),d=Ui.dot(Yd),h=xr.dot(xr),p=xr.dot(Yd),v=c*h-u*u;if(v===0)return o.set(0,0,0),null;const g=1/v,_=(h*d-u*p)*g,M=(c*p-u*d)*g;return o.set(1-_-M,M,_)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,a,o,c,u,d){return this.getBarycoord(e,t,i,a,_r)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,_r.x),d.addScaledVector(c,_r.y),d.addScaledVector(u,_r.z),d)}static getInterpolatedAttribute(e,t,i,a,o,c){return Zd.setScalar(0),Jd.setScalar(0),Qd.setScalar(0),Zd.fromBufferAttribute(e,t),Jd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Zd,o.x),c.addScaledVector(Jd,o.y),c.addScaledVector(Qd,o.z),c}static isFrontFacing(e,t,i,a){return Ui.subVectors(i,t),xr.subVectors(e,t),Ui.cross(xr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Ui.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;pa.subVectors(a,i),ma.subVectors(o,i),$d.subVectors(e,i);const d=pa.dot($d),h=ma.dot($d);if(d<=0&&h<=0)return t.copy(i);qd.subVectors(e,a);const p=pa.dot(qd),v=ma.dot(qd);if(p>=0&&v<=p)return t.copy(a);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(pa,c);Kd.subVectors(e,o);const _=pa.dot(Kd),M=ma.dot(Kd);if(M>=0&&_<=M)return t.copy(o);const A=_*h-d*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(ma,u);const S=p*M-_*v;if(S<=0&&v-p>=0&&_-M>=0)return Wx.subVectors(o,a),u=(v-p)/(v-p+(_-M)),t.copy(a).addScaledVector(Wx,u);const y=1/(S+A+g);return c=A*y,u=g*y,t.copy(i).addScaledVector(pa,c).addScaledVector(ma,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Fi):Fi.fromBufferAttribute(o,c),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mc.copy(i.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ec.subVectors(this.max,Ro),ga.subVectors(e.a,Ro),va.subVectors(e.b,Ro),xa.subVectors(e.c,Ro),$r.subVectors(va,ga),qr.subVectors(xa,va),Ms.subVectors(ga,xa);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-Ms.z,Ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,Ms.z,0,-Ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-Ms.y,Ms.x,0];return!eh(t,ga,va,xa,Ec)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,ga,va,xa,Ec))?!1:(wc.crossVectors($r,qr),t=[wc.x,wc.y,wc.z],eh(t,ga,va,xa,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new re,new re,new re,new re,new re,new re,new re,new re],Fi=new re,Mc=new rl,ga=new re,va=new re,xa=new re,$r=new re,qr=new re,Ms=new re,Ro=new re,Ec=new re,wc=new re,Es=new re;function eh(n,e,t,i,a){for(let o=0,c=n.length-3;o<=c;o+=3){Es.fromArray(n,o);const u=a.x*Math.abs(Es.x)+a.y*Math.abs(Es.y)+a.z*Math.abs(Es.z),d=e.dot(Es),h=t.dot(Es),p=i.dot(Es);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const ln=new re,Tc=new wt;let xR=0;class Gi extends Os{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=JC,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),a=Kn(a,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class OS extends Gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class BS extends Gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends Gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _R=new rl,Po=new re,th=new re;class Pu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_R.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Po,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(th)),this.expandByPoint(Po.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yR=0;const vi=new sn,nh=new Qn,_a=new re,si=new rl,Do=new rl,Sn=new re;class li extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QC(e)?BS:OS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,i){return vi.makeTranslation(e,t,i),this.applyMatrix4(vi),this}scale(e,t,i){return vi.makeScale(e,t,i),this.applyMatrix4(vi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];si.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Do.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(si.min,Do.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Do.max),si.expandByPoint(Sn)):(si.expandByPoint(Do.min),si.expandByPoint(Do.max))}si.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Sn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Sn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Sn.fromBufferAttribute(u,h),d&&(_a.fromBufferAttribute(e,h),Sn.add(_a)),a=Math.max(a,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let E=0;E<i.count;E++)u[E]=new re,d[E]=new re;const h=new re,p=new re,v=new re,g=new wt,_=new wt,M=new wt,A=new re,S=new re;function y(E,L,O){h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,L),v.fromBufferAttribute(i,O),g.fromBufferAttribute(o,E),_.fromBufferAttribute(o,L),M.fromBufferAttribute(o,O),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const z=1/(_.x*M.y-M.x*_.y);isFinite(z)&&(A.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(z),S.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(z),u[E].add(A),u[L].add(A),u[O].add(A),d[E].add(S),d[L].add(S),d[O].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,L=R.length;E<L;++E){const O=R[E],z=O.start,$=O.count;for(let Z=z,W=z+$;Z<W;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new re,T=new re,D=new re,N=new re;function F(E){D.fromBufferAttribute(a,E),N.copy(D);const L=u[E];I.copy(L),I.sub(D.multiplyScalar(D.dot(L))).normalize(),T.crossVectors(N,L);const z=T.dot(d[E])<0?-1:1;c.setXYZW(E,I.x,I.y,I.z,z)}for(let E=0,L=R.length;E<L;++E){const O=R[E],z=O.start,$=O.count;for(let Z=z,W=z+$;Z<W;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,_=i.count;g<_;g++)i.setXYZ(g,0,0,0);const a=new re,o=new re,c=new re,u=new re,d=new re,h=new re,p=new re,v=new re;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),p.subVectors(c,o),v.subVectors(a,o),p.cross(v),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,o),v.subVectors(a,o),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let A=0,S=d.length;A<S;A++){u.isInterleavedBufferAttribute?_=d[A]*u.data.stride+u.offset:_=d[A]*p;for(let y=0;y<p;y++)g[M++]=h[_++]}return new Gi(g,p,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,i);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(a[d]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],v=o[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new re,SR=new re,MR=new ct;class Jr{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=ih.subVectors(i,t).cross(SR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(ih),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||MR.getNormalMatrix(e),a=this.coplanarPoint(ih).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ER=0;class sl extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Wo,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gS,this.blendDst=vS,this.blendEquation=wa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kd,this.stencilZFail=kd,this.stencilZPass=kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Jr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new wt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new re,rh=new re,Ac=new re,bc=new re;class zS{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){rh.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),bc.copy(this.origin).sub(rh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Ac),u=bc.dot(this.direction),d=-bc.dot(Ac),h=bc.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*d-u,g=c*u-d,M=o*p,v>=0)if(g>=-M)if(g<=M){const A=1/p;v*=A,g*=A,_=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=o,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g=-o,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*o+u)),g=v>0?-o:Math.min(Math.max(-o,-d),o),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-o,-d),o),_=g*(g+2*d)+h):(v=Math.max(0,-(c*o+u)),g=v>0?o:Math.min(Math.max(-o,-d),o),_=-v*v+g*(g+2*d)+h);else g=c>0?-o:o,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(rh).addScaledVector(Ac,g),_}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),a=Sr.dot(Sr)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,a,o){const c=this.origin,u=this.direction,d=u.x,h=u.y,p=u.z,v=e.x-c.x,g=e.y-c.y,_=e.z-c.z,M=t.x-c.x,A=t.y-c.y,S=t.z-c.z,y=i.x-c.x,R=i.y-c.y,I=i.z-c.z,T=Math.abs(d),D=Math.abs(h),N=Math.abs(p);let F,E,L,O,z,$,Z,W,Q,de,ie,q;if(T>=D&&T>=N?(L=d,$=v,Q=M,q=y,d>=0?(F=h,E=p,O=g,z=_,Z=A,W=S,de=R,ie=I):(F=p,E=h,O=_,z=g,Z=S,W=A,de=I,ie=R)):D>=N?(L=h,$=g,Q=A,q=R,h>=0?(F=p,E=d,O=_,z=v,Z=S,W=M,de=I,ie=y):(F=d,E=p,O=v,z=_,Z=M,W=S,de=y,ie=I)):(L=p,$=_,Q=S,q=I,p>=0?(F=d,E=h,O=v,z=g,Z=M,W=A,de=y,ie=R):(F=h,E=d,O=g,z=v,Z=A,W=M,de=R,ie=y)),L===0)return null;const Y=F/L,K=E/L,U=1/L,se=O-Y*$,Se=z-K*$,Ge=Z-Y*Q,Ve=W-K*Q,We=de-Y*q,le=ie-K*q,fe=We*Ve-le*Ge,we=se*le-Se*We,tt=Ge*Se-Ve*se;if(a){if(fe<0||we<0||tt<0)return null}else if((fe<0||we<0||tt<0)&&(fe>0||we>0||tt>0))return null;const ke=fe+we+tt;if(ke===0)return null;const ft=U*(fe*$+we*Q+tt*q);return(ke>0?ft<0:ft>0)?null:this.at(ft/ke,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _u extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=xS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xx=new sn,ws=new zS,Cc=new Pu,jx=new re,Rc=new re,Pc=new re,Dc=new re,sh=new re,Lc=new re,Yx=new re,Nc=new re;class Xi extends Qn{constructor(e=new li,t=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){Lc.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=u[d],v=o[d];p!==0&&(sh.fromBufferAttribute(v,e),c?Lc.addScaledVector(sh,p):Lc.addScaledVector(sh.sub(t),p))}t.add(Lc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(o),ws.copy(e.ray).recast(e.near),!(Cc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Cc,jx)===null||ws.origin.distanceToSquared(jx)>(e.far-e.near)**2))&&(Xx.copy(o).invert(),ws.copy(e.ray).applyMatrix4(Xx),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,v=o.attributes.normal,g=o.groups,_=o.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],y=c[S.materialIndex],R=Math.max(S.start,_.start),I=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let T=R,D=I;T<D;T+=3){const N=u.getX(T),F=u.getX(T+1),E=u.getX(T+2);a=Ic(this,y,e,i,h,p,v,N,F,E),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),A=Math.min(u.count,_.start+_.count);for(let S=M,y=A;S<y;S+=3){const R=u.getX(S),I=u.getX(S+1),T=u.getX(S+2);a=Ic(this,c,e,i,h,p,v,R,I,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],y=c[S.materialIndex],R=Math.max(S.start,_.start),I=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let T=R,D=I;T<D;T+=3){const N=T,F=T+1,E=T+2;a=Ic(this,y,e,i,h,p,v,N,F,E),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),A=Math.min(d.count,_.start+_.count);for(let S=M,y=A;S<y;S+=3){const R=S,I=S+1,T=S+2;a=Ic(this,c,e,i,h,p,v,R,I,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function wR(n,e,t,i,a,o,c,u){let d;if(e.side===Jn?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,e.side===Is,u),d===null)return null;Nc.copy(u),Nc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Nc);return h<t.near||h>t.far?null:{distance:h,point:Nc.clone(),object:n}}function Ic(n,e,t,i,a,o,c,u,d,h){n.getVertexPosition(u,Rc),n.getVertexPosition(d,Pc),n.getVertexPosition(h,Dc);const p=wR(n,e,t,i,Rc,Pc,Dc,Yx);if(p){const v=new re;Oi.getBarycoord(Yx,Rc,Pc,Dc,v),a&&(p.uv=Oi.getInterpolatedAttribute(a,u,d,h,v,new wt)),o&&(p.uv1=Oi.getInterpolatedAttribute(o,u,d,h,v,new wt)),c&&(p.normal=Oi.getInterpolatedAttribute(c,u,d,h,v,new re),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new re,materialIndex:0};Oi.getNormal(Rc,Pc,Dc,g.normal),p.face=g,p.barycoord=v}return p}class TR extends Hn{constructor(e=null,t=1,i=1,a,o,c,u,d,h=bn,p=bn,v,g){super(null,c,u,d,h,p,a,o,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new Pu,AR=new wt(.5,.5),Uc=new re;class VS{constructor(e=new Jr,t=new Jr,i=new Jr,a=new Jr,o=new Jr,c=new Jr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const a=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],v=o[5],g=o[6],_=o[7],M=o[8],A=o[9],S=o[10],y=o[11],R=o[12],I=o[13],T=o[14],D=o[15];if(a[0].setComponents(h-c,_-p,y-M,D-R).normalize(),a[1].setComponents(h+c,_+p,y+M,D+R).normalize(),a[2].setComponents(h+u,_+v,y+A,D+I).normalize(),a[3].setComponents(h-u,_-v,y-A,D-I).normalize(),i)a[4].setComponents(d,g,S,T).normalize(),a[5].setComponents(h-d,_-g,y-S,D-T).normalize();else if(a[4].setComponents(h-d,_-g,y-S,D-T).normalize(),t===nr)a[5].setComponents(h+d,_+g,y+S,D+T).normalize();else if(t===vu)a[5].setComponents(d,g,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=AR.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Uc.x=a.normal.x>0?e.max.x:e.min.x,Uc.y=a.normal.y>0?e.max.y:e.min.y,Uc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $x=new sn,Cp=new zS,Fc=new Pu,kc=new re;class bR extends Qn{constructor(e=new li,t=new HS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(a),Fc.radius+=o,e.ray.intersectsSphere(Fc)===!1)return;$x.copy(a).invert(),Cp.copy(e.ray).applyMatrix4($x);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,v=i.attributes.position;if(h!==null){const g=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let M=g,A=_;M<A;M++){const S=h.getX(M);kc.fromBufferAttribute(v,S),qx(kc,S,d,a,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let M=g,A=_;M<A;M++)kc.fromBufferAttribute(v,M),qx(kc,M,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function qx(n,e,t,i,a,o,c){const u=Cp.distanceSqToPoint(n);if(u<t){const d=new re;Cp.closestPointToPoint(n,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class GS extends Hn{constructor(e=[],t=Us,i,a,o,c,u,d,h,p){super(e,t,i,a,o,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends Hn{constructor(e,t,i=sr,a,o,c,u=bn,d=bn,h,p=br,v=1){if(p!==br&&p!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,a,o,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class CR extends Zo{constructor(e,t=sr,i=Us,a,o,c=bn,u=bn,d,h=br){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,a,o,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class WS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends li{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(v,2));function M(A,S,y,R,I,T,D,N,F,E,L){const O=T/F,z=D/E,$=T/2,Z=D/2,W=N/2,Q=F+1,de=E+1;let ie=0,q=0;const Y=new re;for(let K=0;K<de;K++){const U=K*z-Z;for(let se=0;se<Q;se++){const Se=se*O-$;Y[A]=Se*R,Y[S]=U*I,Y[y]=W,h.push(Y.x,Y.y,Y.z),Y[A]=0,Y[S]=0,Y[y]=N>0?1:-1,p.push(Y.x,Y.y,Y.z),v.push(se/F),v.push(1-K/E),ie+=1}}for(let K=0;K<E;K++)for(let U=0;U<F;U++){const se=g+U+Q*K,Se=g+U+Q*(K+1),Ge=g+(U+1)+Q*(K+1),Ve=g+(U+1)+Q*K;d.push(se,Se,Ve),d.push(Se,Ge,Ve),q+=6}u.addGroup(_,q,L),_+=q,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ym extends li{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];u(a),h(i),p(),this.setAttribute("position",new Gn(o,3)),this.setAttribute("normal",new Gn(o.slice(),3)),this.setAttribute("uv",new Gn(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(R){const I=new re,T=new re,D=new re;for(let N=0;N<t.length;N+=3)_(t[N+0],I),_(t[N+1],T),_(t[N+2],D),d(I,T,D,R)}function d(R,I,T,D){const N=D+1,F=[];for(let E=0;E<=N;E++){F[E]=[];const L=R.clone().lerp(T,E/N),O=I.clone().lerp(T,E/N),z=N-E;for(let $=0;$<=z;$++)$===0&&E===N?F[E][$]=L:F[E][$]=L.clone().lerp(O,$/z)}for(let E=0;E<N;E++)for(let L=0;L<2*(N-E)-1;L++){const O=Math.floor(L/2);L%2===0?(g(F[E][O+1]),g(F[E+1][O]),g(F[E][O])):(g(F[E][O+1]),g(F[E+1][O+1]),g(F[E+1][O]))}}function h(R){const I=new re;for(let T=0;T<o.length;T+=3)I.x=o[T+0],I.y=o[T+1],I.z=o[T+2],I.normalize().multiplyScalar(R),o[T+0]=I.x,o[T+1]=I.y,o[T+2]=I.z}function p(){const R=new re;for(let I=0;I<o.length;I+=3){R.x=o[I+0],R.y=o[I+1],R.z=o[I+2];const T=S(R)/2/Math.PI+.5,D=y(R)/Math.PI+.5;c.push(T,1-D)}M(),v()}function v(){for(let R=0;R<c.length;R+=6){const I=c[R+0],T=c[R+2],D=c[R+4],N=Math.max(I,T,D),F=Math.min(I,T,D);N>.9&&F<.1&&(I<.2&&(c[R+0]+=1),T<.2&&(c[R+2]+=1),D<.2&&(c[R+4]+=1))}}function g(R){o.push(R.x,R.y,R.z)}function _(R,I){const T=R*3;I.x=e[T+0],I.y=e[T+1],I.z=e[T+2]}function M(){const R=new re,I=new re,T=new re,D=new re,N=new wt,F=new wt,E=new wt;for(let L=0,O=0;L<o.length;L+=9,O+=6){R.set(o[L+0],o[L+1],o[L+2]),I.set(o[L+3],o[L+4],o[L+5]),T.set(o[L+6],o[L+7],o[L+8]),N.set(c[O+0],c[O+1]),F.set(c[O+2],c[O+3]),E.set(c[O+4],c[O+5]),D.copy(R).add(I).add(T).divideScalar(3);const z=S(D);A(N,O+0,R,z),A(F,O+2,I,z),A(E,O+4,T,z)}}function A(R,I,T,D){D<0&&R.x===1&&(c[I]=R.x-1),T.x===0&&T.z===0&&(c[I]=D/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function y(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ym(e.vertices,e.indices,e.radius,e.detail)}}class Sm extends ym{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sm(e.radius,e.detail)}}class Du extends li{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,v=e/u,g=t/d,_=[],M=[],A=[],S=[];for(let y=0;y<p;y++){const R=y*g-c;for(let I=0;I<h;I++){const T=I*v-o;M.push(T,-R,0),A.push(0,0,1),S.push(I/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let R=0;R<u;R++){const I=R+h*y,T=R+h*(y+1),D=R+1+h*(y+1),N=R+1+h*y;_.push(I,T,N),_.push(T,D,N)}this.setIndex(_),this.setAttribute("position",new Gn(M,3)),this.setAttribute("normal",new Gn(A,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mm extends li{constructor(e=1,t=.4,i=12,a=48,o=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:o,thetaStart:c,thetaLength:u},i=Math.floor(i),a=Math.floor(a);const d=[],h=[],p=[],v=[],g=new re,_=new re,M=new re;for(let A=0;A<=i;A++){const S=c+A/i*u;for(let y=0;y<=a;y++){const R=y/a*o;_.x=(e+t*Math.cos(S))*Math.cos(R),_.y=(e+t*Math.cos(S))*Math.sin(R),_.z=t*Math.sin(S),h.push(_.x,_.y,_.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),M.subVectors(_,g).normalize(),p.push(M.x,M.y,M.z),v.push(y/a),v.push(A/i)}}for(let A=1;A<=i;A++)for(let S=1;S<=a;S++){const y=(a+1)*A+S-1,R=(a+1)*(A-1)+S-1,I=(a+1)*(A-1)+S,T=(a+1)*A+S;d.push(y,R,T),d.push(R,I,T)}this.setIndex(d),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Fa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(Kx(a))a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Kx(a[0])){const o=[];for(let c=0,u=a.length;c<u;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=Fa(n[t]);for(const a in i)e[a]=i[a]}return e}function Kx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function RR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function XS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const PR={clone:Fa,merge:Bn};var DR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DR,this.fragmentShader=LR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=RR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new Et().setHex(a.value);break;case"v2":this.uniforms[i].value=new wt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new re().fromArray(a.value);break;case"v4":this.uniforms[i].value=new tn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ct().fromArray(a.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class NR extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IR extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UR extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new re,Bc=new za,Ki=new re;class jS extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Oc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new re,Zx=new wt,Jx=new wt;class _i extends jS{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Zx,Jx),t.subVectors(Jx,Zx)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Od*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class YS extends jS{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ya=-90,Sa=1;class FR extends Qn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new _i(ya,Sa,e,t);a.layers=this.layers,this.add(a);const o=new _i(ya,Sa,e,t);o.layers=this.layers,this.add(o);const c=new _i(ya,Sa,e,t);c.layers=this.layers,this.add(c);const u=new _i(ya,Sa,e,t);u.layers=this.layers,this.add(u);const d=new _i(ya,Sa,e,t);d.layers=this.layers,this.add(d);const h=new _i(ya,Sa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===vu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class kR extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Cm=class Cm{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Cm.prototype.isMatrix2=!0;let Qx=Cm;function e_(n,e,t,i){const a=BR(i);switch(t){case DS:return n*e;case NS:return n*e/a.components*a.byteLength;case pm:return n*e/a.components*a.byteLength;case Fs:return n*e*2/a.components*a.byteLength;case mm:return n*e*2/a.components*a.byteLength;case LS:return n*e*3/a.components*a.byteLength;case zi:return n*e*4/a.components*a.byteLength;case gm:return n*e*4/a.components*a.byteLength;case Zc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:case ep:return Math.max(n,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(n,8)*Math.max(e,8)/2;case tp:case np:case rp:case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ip:case hu:case ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sp:case Mp:case Ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wp:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pu:case Ap:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BR(n){switch(n){case yi:case bS:return{byteLength:1,components:1};case qo:case CS:case ar:return{byteLength:2,components:1};case dm:case hm:return{byteLength:2,components:4};case sr:case fm:case tr:return{byteLength:4,components:1};case RS:case PS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $S(){let n=null,e=!1,t=null,i=null;function a(o,c){i=n.requestAnimationFrame(a),t(o,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function zR(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],A=v[_];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const A=v[_];n.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var VR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$R=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v2="gl_FragColor = linearToOutputTexel( gl_FragColor );",x2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_P=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$P=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:VR,alphahash_pars_fragment:HR,alphamap_fragment:GR,alphamap_pars_fragment:WR,alphatest_fragment:XR,alphatest_pars_fragment:jR,aomap_fragment:YR,aomap_pars_fragment:$R,batching_pars_vertex:qR,batching_vertex:KR,begin_vertex:ZR,beginnormal_vertex:JR,bsdfs:QR,iridescence_fragment:e2,bumpmap_pars_fragment:t2,clipping_planes_fragment:n2,clipping_planes_pars_fragment:i2,clipping_planes_pars_vertex:r2,clipping_planes_vertex:s2,color_fragment:a2,color_pars_fragment:o2,color_pars_vertex:l2,color_vertex:c2,common:u2,cube_uv_reflection_fragment:f2,defaultnormal_vertex:d2,displacementmap_pars_vertex:h2,displacementmap_vertex:p2,emissivemap_fragment:m2,emissivemap_pars_fragment:g2,colorspace_fragment:v2,colorspace_pars_fragment:x2,envmap_fragment:_2,envmap_common_pars_fragment:y2,envmap_pars_fragment:S2,envmap_pars_vertex:M2,envmap_physical_pars_fragment:N2,envmap_vertex:E2,fog_vertex:w2,fog_pars_vertex:T2,fog_fragment:A2,fog_pars_fragment:b2,gradientmap_pars_fragment:C2,lightmap_pars_fragment:R2,lights_lambert_fragment:P2,lights_lambert_pars_fragment:D2,lights_pars_begin:L2,lights_toon_fragment:I2,lights_toon_pars_fragment:U2,lights_phong_fragment:F2,lights_phong_pars_fragment:k2,lights_physical_fragment:O2,lights_physical_pars_fragment:B2,lights_fragment_begin:z2,lights_fragment_maps:V2,lights_fragment_end:H2,lightprobes_pars_fragment:G2,logdepthbuf_fragment:W2,logdepthbuf_pars_fragment:X2,logdepthbuf_pars_vertex:j2,logdepthbuf_vertex:Y2,map_fragment:$2,map_pars_fragment:q2,map_particle_fragment:K2,map_particle_pars_fragment:Z2,metalnessmap_fragment:J2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:eP,morphcolor_vertex:tP,morphnormal_vertex:nP,morphtarget_pars_vertex:iP,morphtarget_vertex:rP,normal_fragment_begin:sP,normal_fragment_maps:aP,normal_pars_fragment:oP,normal_pars_vertex:lP,normal_vertex:cP,normalmap_pars_fragment:uP,clearcoat_normal_fragment_begin:fP,clearcoat_normal_fragment_maps:dP,clearcoat_pars_fragment:hP,iridescence_pars_fragment:pP,opaque_fragment:mP,packing:gP,premultiplied_alpha_fragment:vP,project_vertex:xP,dithering_fragment:_P,dithering_pars_fragment:yP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:MP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:wP,shadowmap_vertex:TP,shadowmask_pars_fragment:AP,skinbase_vertex:bP,skinning_pars_vertex:CP,skinning_vertex:RP,skinnormal_vertex:PP,specularmap_fragment:DP,specularmap_pars_fragment:LP,tonemapping_fragment:NP,tonemapping_pars_fragment:IP,transmission_fragment:UP,transmission_pars_fragment:FP,uv_pars_fragment:kP,uv_pars_vertex:OP,uv_vertex:BP,worldpos_vertex:zP,background_vert:VP,background_frag:HP,backgroundCube_vert:GP,backgroundCube_frag:WP,cube_vert:XP,cube_frag:jP,depth_vert:YP,depth_frag:$P,distance_vert:qP,distance_frag:KP,equirect_vert:ZP,equirect_frag:JP,linedashed_vert:QP,linedashed_frag:e3,meshbasic_vert:t3,meshbasic_frag:n3,meshlambert_vert:i3,meshlambert_frag:r3,meshmatcap_vert:s3,meshmatcap_frag:a3,meshnormal_vert:o3,meshnormal_frag:l3,meshphong_vert:c3,meshphong_frag:u3,meshphysical_vert:f3,meshphysical_frag:d3,meshtoon_vert:h3,meshtoon_frag:p3,points_vert:m3,points_frag:g3,shadow_vert:v3,shadow_frag:x3,sprite_vert:_3,sprite_frag:y3},Ue={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},er={basic:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Bn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Bn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Bn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Bn([Ue.lights,Ue.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};er.physical={uniforms:Bn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const zc={r:0,b:0,g:0},S3=new sn,qS=new ct;qS.set(-1,0,0,0,1,0,0,0,1);function M3(n,e,t,i,a,o){const c=new Et(0);let u=a===!0?0:1,d,h,p=null,v=0,g=null;function _(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const T=R.backgroundBlurriness>0;I=e.get(I,T)}return I}function M(R){let I=!1;const T=_(R);T===null?S(c,u):T&&T.isColor&&(S(T,1),I=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(R,I){const T=_(I);T&&(T.isCubeTexture||T.mapping===Ru)?(h===void 0&&(h=new Xi(new al(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Fa(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S3.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(qS),h.material.toneMapped=yt.getTransfer(T.colorSpace)!==Ft,(p!==T||v!==T.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=T,v=T.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Xi(new Du(2,2),new or({name:"BackgroundMaterial",uniforms:Fa(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=yt.getTransfer(T.colorSpace)!==Ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||v!==T.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=T,v=T.version,g=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function S(R,I){R.getRGB(zc,XS(n)),t.buffers.color.setClear(zc.r,zc.g,zc.b,I,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,I=1){c.set(R),u=I,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,S(c,u)},render:M,addToRenderList:A,dispose:y}}function E3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(z,$,Z,W,Q){let de=!1;const ie=v(z,W,Z,$);o!==ie&&(o=ie,h(o.object)),de=_(z,W,Z,Q),de&&M(z,W,Z,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,T(z,$,Z,W),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return n.createVertexArray()}function h(z){return n.bindVertexArray(z)}function p(z){return n.deleteVertexArray(z)}function v(z,$,Z,W){const Q=W.wireframe===!0;let de=i[$.id];de===void 0&&(de={},i[$.id]=de);const ie=z.isInstancedMesh===!0?z.id:0;let q=de[ie];q===void 0&&(q={},de[ie]=q);let Y=q[Z.id];Y===void 0&&(Y={},q[Z.id]=Y);let K=Y[Q];return K===void 0&&(K=g(d()),Y[Q]=K),K}function g(z){const $=[],Z=[],W=[];for(let Q=0;Q<t;Q++)$[Q]=0,Z[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:W,object:z,attributes:{},index:null}}function _(z,$,Z,W){const Q=o.attributes,de=$.attributes;let ie=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){const U=Q[Y];let se=de[Y];if(se===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),U===void 0||U.attribute!==se||se&&U.data!==se.data)return!0;ie++}return o.attributesNum!==ie||o.index!==W}function M(z,$,Z,W){const Q={},de=$.attributes;let ie=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){let U=de[Y];U===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));const se={};se.attribute=U,U&&U.data&&(se.data=U.data),Q[Y]=se,ie++}o.attributes=Q,o.attributesNum=ie,o.index=W}function A(){const z=o.newAttributes;for(let $=0,Z=z.length;$<Z;$++)z[$]=0}function S(z){y(z,0)}function y(z,$){const Z=o.newAttributes,W=o.enabledAttributes,Q=o.attributeDivisors;Z[z]=1,W[z]===0&&(n.enableVertexAttribArray(z),W[z]=1),Q[z]!==$&&(n.vertexAttribDivisor(z,$),Q[z]=$)}function R(){const z=o.newAttributes,$=o.enabledAttributes;for(let Z=0,W=$.length;Z<W;Z++)$[Z]!==z[Z]&&(n.disableVertexAttribArray(Z),$[Z]=0)}function I(z,$,Z,W,Q,de,ie){ie===!0?n.vertexAttribIPointer(z,$,Z,Q,de):n.vertexAttribPointer(z,$,Z,W,Q,de)}function T(z,$,Z,W){A();const Q=W.attributes,de=Z.getAttributes(),ie=$.defaultAttributeValues;for(const q in de){const Y=de[q];if(Y.location>=0){let K=Q[q];if(K===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const U=K.normalized,se=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ge=Se.buffer,Ve=Se.type,We=Se.bytesPerElement,le=Ve===n.INT||Ve===n.UNSIGNED_INT||K.gpuType===fm;if(K.isInterleavedBufferAttribute){const fe=K.data,we=fe.stride,tt=K.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)y(Y.location+ke,fe.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<Y.locationSize;ke++)S(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ke=0;ke<Y.locationSize;ke++)I(Y.location+ke,se/Y.locationSize,Ve,U,we*We,(tt+se/Y.locationSize*ke)*We,le)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)y(Y.location+fe,K.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<Y.locationSize;fe++)S(Y.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let fe=0;fe<Y.locationSize;fe++)I(Y.location+fe,se/Y.locationSize,Ve,U,se*We,se/Y.locationSize*fe*We,le)}}else if(ie!==void 0){const U=ie[q];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(Y.location,U);break;case 3:n.vertexAttrib3fv(Y.location,U);break;case 4:n.vertexAttrib4fv(Y.location,U);break;default:n.vertexAttrib1fv(Y.location,U)}}}}R()}function D(){L();for(const z in i){const $=i[z];for(const Z in $){const W=$[Z];for(const Q in W){const de=W[Q];for(const ie in de)p(de[ie].object),delete de[ie];delete W[Q]}}delete i[z]}}function N(z){if(i[z.id]===void 0)return;const $=i[z.id];for(const Z in $){const W=$[Z];for(const Q in W){const de=W[Q];for(const ie in de)p(de[ie].object),delete de[ie];delete W[Q]}}delete i[z.id]}function F(z){for(const $ in i){const Z=i[$];for(const W in Z){const Q=Z[W];if(Q[z.id]===void 0)continue;const de=Q[z.id];for(const ie in de)p(de[ie].object),delete de[ie];delete Q[z.id]}}}function E(z){for(const $ in i){const Z=i[$],W=z.isInstancedMesh===!0?z.id:0,Q=Z[W];if(Q!==void 0){for(const de in Q){const ie=Q[de];for(const q in ie)p(ie[q].object),delete ie[q];delete Q[de]}delete Z[W],Object.keys(Z).length===0&&delete i[$]}}}function L(){O(),c=!0,o!==a&&(o=a,h(o.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:L,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function w3(n,e,t){let i;function a(d){i=d}function o(d,h){n.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];t.update(g,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function T3(n,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==zi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==yi&&F!==tr&&!E&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ot("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:T,maxSamples:D,samples:N}}function A3(n){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Jr,u=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||i!==0||a;return a=g,i=v.length,_},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,y=n.get(v);if(!a||M===null||M.length===0||o&&!S)o?p(null):h();else{const R=o?0:i,I=R*4;let T=y.clippingState||null;d.value=T,T=p(M,g,I,_);for(let D=0;D!==I;++D)T[D]=t[D];y.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,_,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const y=_+A*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,T=_;I!==A;++I,T+=4)c.copy(v[I]).applyMatrix4(R,u),c.normal.toArray(S,T),S[T+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Ra=4,b3=6,C3=20,R3=256,Lo=new YS,t_=new Et;let ah=null,oh=0,lh=0,ch=!1;const P3=new re,As=new re;class n_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:u=P3}=o;ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,a,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ar,format:zi,colorSpace:mu,depthBuffer:!1},a=i_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D3(o)),this._blurMaterial=N3(o,e,t),this._ggxMaterial=L3(o,e,t)}return a}_compileMaterial(e){const t=new Xi(new li,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,a,o){const d=new _i(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(t_),v.toneMapping=rr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new al,new _u({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,y=!0):(S.color.copy(t_),y=!0);for(let I=0;I<6;I++){const T=I%3;T===0?(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[I],o.y,o.z)):T===1?(d.up.set(0,0,h[I]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[I],o.z)):(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[I]));const D=this._cubeSize;Ma(a,T*D,I>2?D:0,D,D),v.setRenderTarget(a),y&&v.render(A,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Us||e.mapping===Ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Ma(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=h*1.25,_=v*g,{_lodMax:M}=this,A=this._sizeLods[i],S=3*A*(i>M-Ra?i-M+Ra:0),y=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,Ma(o,S,y,3*A,2*A),a.setRenderTarget(o),a.render(u,Lo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=M-i,Ma(e,S,y,3*A,2*A),a.setRenderTarget(e),a.render(u,Lo)}_blur(e,t,i,a){const o=this._pingPongRenderTarget,c=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,c),this._blurPass(o,e,i,i,c)}_blurPass(e,t,i,a,o){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[a];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-i;const p=this._sizeLods[a],v=3*p*(a>this._lodMax-Ra?a-this._lodMax+Ra:0),g=4*(this._cubeSize-p);Ma(t,v,g,3*p,2*p),c.setRenderTarget(t),c.render(d,Lo)}}function D3(n){const e=[],t=[];let i=n;const a=n-Ra+1+b3;for(let o=0;o<a;o++){const c=Math.pow(2,i);e.push(c);const u=1/(c-2),d=-u,h=1+u,p=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,_=3,M=new Float32Array(_*g*v),A=new Float32Array(_*g*v);for(let y=0;y<v;y++){const R=y%3*2/3-1,I=y>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(T,_*g*y);for(let D=0;D<g;D++){const N=p[D*2]*2-1,F=p[D*2+1]*2-1;y===0?As.set(1,F,N):y===1?As.set(-N,1,-F):y===2?As.set(-N,F,1):y===3?As.set(-1,F,-N):y===4?As.set(-N,-1,F):As.set(N,F,-1),As.toArray(A,(y*g+D)*_)}}const S=new li;S.setAttribute("position",new Gi(M,_)),S.setAttribute("outputDirection",new Gi(A,_)),t.push(new Xi(S,null)),i>Ra&&i--}return{lodMeshes:t,sizeLods:e}}function i_(n,e,t){const i=new Hi(n,e,t);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function L3(n,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function N3(n,e,t){return new or({name:"SphericalGaussianBlur",defines:{SAMPLES:C3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function r_(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function s_(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class KS extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new GS(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new al(5,5,5),o=new or({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Tr});o.uniforms.tEquirect.value=t;const c=new Xi(a,o),u=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Un),new FR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function I3(n){let e=new WeakMap,t=new WeakMap,i=null;function a(g,_=!1){return g==null?null:_?c(g):o(g)}function o(g){if(g&&g.isTexture){const _=g.mapping;if(_===Id||_===Ud)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new KS(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),u(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===Id||_===Ud,A=_===Us||_===Ua;if(M||A){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return i===null&&(i=new n_(n)),S=M?i.fromEquirectangular(g,S):i.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const R=g.image;return M&&R&&R.height>0||A&&R&&d(R)?(i===null&&(i=new n_(n)),S=M?i.fromEquirectangular(g):i.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",p),S.texture):null}}}return g}function u(g,_){return _===Id?g.mapping=Us:_===Ud&&(g.mapping=Ua),g}function d(g){let _=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function U3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Pa("WebGLRenderer: "+i+" extension not supported."),a}}}function F3(n,e,t,i){const a={},o=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const _=o.get(g);_&&(e.remove(_),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(_!==null){const R=_.array;A=_.version;for(let I=0,T=R.length;I<T;I+=3){const D=R[I+0],N=R[I+1],F=R[I+2];g.push(D,N,N,F,F,D)}}else{const R=M.array;A=M.version;for(let I=0,T=R.length/3-1;I<T;I+=3){const D=I+0,N=I+1,F=I+2;g.push(D,N,N,F,F,D)}}const S=new(M.count>=65535?BS:OS)(g,1);S.version=A;const y=o.get(v);y&&e.remove(y),o.set(v,S)}function p(v){const g=o.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return o.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function k3(n,e,t){let i;function a(v){i=v}let o,c;function u(v){o=v.type,c=v.bytesPerElement}function d(v,g){n.drawElements(i,g,o,v*c),t.update(g,i,1)}function h(v,g,_){_!==0&&(n.drawElementsInstanced(i,g,o,v*c,_),t.update(g,i,_))}function p(v,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,v,0,_);let A=0;for(let S=0;S<_;S++)A+=g[S];t.update(A,i,1)}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function O3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function B3(n,e,t){const i=new WeakMap,a=new tn;function o(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==v){let O=function(){E.dispose(),i.delete(u),u.removeEventListener("dispose",O)};var _=O;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),A===!0&&(T=2),S===!0&&(T=3);let D=u.attributes.position.count*T,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const F=new Float32Array(D*N*4*v),E=new US(F,D,N,v);E.type=tr,E.needsUpdate=!0;const L=T*4;for(let z=0;z<v;z++){const $=y[z],Z=R[z],W=I[z],Q=D*N*4*z;for(let de=0;de<$.count;de++){const ie=de*L;M===!0&&(a.fromBufferAttribute($,de),F[Q+ie+0]=a.x,F[Q+ie+1]=a.y,F[Q+ie+2]=a.z,F[Q+ie+3]=0),A===!0&&(a.fromBufferAttribute(Z,de),F[Q+ie+4]=a.x,F[Q+ie+5]=a.y,F[Q+ie+6]=a.z,F[Q+ie+7]=0),S===!0&&(a.fromBufferAttribute(W,de),F[Q+ie+8]=a.x,F[Q+ie+9]=a.y,F[Q+ie+10]=a.z,F[Q+ie+11]=W.itemSize===4?a.w:1)}}g={count:v,texture:E,size:new wt(D,N)},i.set(u,g),u.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function z3(n,e,t,i,a){let o=new WeakMap;function c(h){const p=a.render.frame,v=h.geometry,g=e.get(h,v);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const V3={[_S]:"LINEAR_TONE_MAPPING",[yS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[MS]:"ACES_FILMIC_TONE_MAPPING",[wS]:"AGX_TONE_MAPPING",[TS]:"NEUTRAL_TONE_MAPPING",[ES]:"CUSTOM_TONE_MAPPING"};function H3(n,e,t,i,a,o){const c=new Hi(e,t,{type:n,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new li;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const p=new NR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Xi(h,p),g=new YS(-1,1,1,-1,0,1);let _=null,M=null,A=!1,S,y=null,R=[],I=!1;this.setSize=function(T,D){c.setSize(T,D),u!==null&&u.setSize(T,D),d!==null&&d.setSize(T,D);for(let N=0;N<R.length;N++){const F=R[N];F.setSize&&F.setSize(T,D)}},this.setEffects=function(T){R=T,I=R.length>0&&R[0].isRenderPass===!0;const D=c.width,N=c.height;R.length>0&&u===null&&(u=new Hi(D,N,{type:ar,depthBuffer:!1,stencilBuffer:!1}),d=new Hi(D,N,{type:ar,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<R.length;F++){const E=R[F];E.setSize&&E.setSize(D,N)}},this.begin=function(T,D){if(A||T.toneMapping===rr&&R.length===0)return!1;if(y=D,D!==null){const N=D.width,F=D.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return I===!1&&T.setRenderTarget(c),S=T.toneMapping,T.toneMapping=rr,!0},this.hasRenderPass=function(){return I},this.end=function(T,D){T.toneMapping=S,A=!0;let N=c,F=u;for(let E=0;E<R.length;E++){const L=R[E];L.enabled!==!1&&(L.render(T,F,N,D),L.needsSwap!==!1&&(N=F,F=F===u?d:u))}if(_!==T.outputColorSpace||M!==T.toneMapping){_=T.outputColorSpace,M=T.toneMapping,p.defines={},yt.getTransfer(_)===Ft&&(p.defines.SRGB_TRANSFER="");const E=V3[M];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,T.setRenderTarget(y),T.render(v,g),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),p.dispose()}}const ZS=new Hn,Rp=new Zo(1,1),JS=new US,QS=new cR,eM=new GS,a_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let o=a_[a];if(o===void 0&&(o=new Float32Array(a),a_[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(o,u)}return o}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nu(n,e){let t=o_[e];t===void 0&&(t=new Int32Array(e),o_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function G3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function j3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function Y3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;u_.set(i),n.uniformMatrix2fv(this.addr,!1,u_),vn(t,i)}}function $3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;c_.set(i),n.uniformMatrix3fv(this.addr,!1,c_),vn(t,i)}}function q3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;l_.set(i),n.uniformMatrix4fv(this.addr,!1,l_),vn(t,i)}}function K3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function Q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function eD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function iD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function rD(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?(Rp.compareFunction=t.isReversedDepthBuffer()?xm:vm,o=Rp):o=ZS,t.setTexture2D(e||o,a)}function sD(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||QS,a)}function aD(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||eM,a)}function oD(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||JS,a)}function lD(n){switch(n){case 5126:return G3;case 35664:return W3;case 35665:return X3;case 35666:return j3;case 35674:return Y3;case 35675:return $3;case 35676:return q3;case 5124:case 35670:return K3;case 35667:case 35671:return Z3;case 35668:case 35672:return J3;case 35669:case 35673:return Q3;case 5125:return eD;case 36294:return tD;case 36295:return nD;case 36296:return iD;case 35678:case 36198:case 36298:case 36306:case 35682:return rD;case 35679:case 36299:case 36307:return sD;case 35680:case 36300:case 36308:case 36293:return aD;case 36289:case 36303:case 36311:case 36292:return oD}}function cD(n,e){n.uniform1fv(this.addr,e)}function uD(n,e){const t=Va(e,this.size,2);n.uniform2fv(this.addr,t)}function fD(n,e){const t=Va(e,this.size,3);n.uniform3fv(this.addr,t)}function dD(n,e){const t=Va(e,this.size,4);n.uniform4fv(this.addr,t)}function hD(n,e){const t=Va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pD(n,e){const t=Va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mD(n,e){const t=Va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gD(n,e){n.uniform1iv(this.addr,e)}function vD(n,e){n.uniform2iv(this.addr,e)}function xD(n,e){n.uniform3iv(this.addr,e)}function _D(n,e){n.uniform4iv(this.addr,e)}function yD(n,e){n.uniform1uiv(this.addr,e)}function SD(n,e){n.uniform2uiv(this.addr,e)}function MD(n,e){n.uniform3uiv(this.addr,e)}function ED(n,e){n.uniform4uiv(this.addr,e)}function wD(n,e,t){const i=this.cache,a=e.length,o=Nu(t,a);gn(i,o)||(n.uniform1iv(this.addr,o),vn(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Rp:c=ZS;for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c,o[u])}function TD(n,e,t){const i=this.cache,a=e.length,o=Nu(t,a);gn(i,o)||(n.uniform1iv(this.addr,o),vn(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||QS,o[c])}function AD(n,e,t){const i=this.cache,a=e.length,o=Nu(t,a);gn(i,o)||(n.uniform1iv(this.addr,o),vn(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||eM,o[c])}function bD(n,e,t){const i=this.cache,a=e.length,o=Nu(t,a);gn(i,o)||(n.uniform1iv(this.addr,o),vn(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||JS,o[c])}function CD(n){switch(n){case 5126:return cD;case 35664:return uD;case 35665:return fD;case 35666:return dD;case 35674:return hD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return vD;case 35668:case 35672:return xD;case 35669:case 35673:return _D;case 5125:return yD;case 36294:return SD;case 36295:return MD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return wD;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return bD}}class RD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lD(t.type)}}class PD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CD(t.type)}}class DD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function f_(n,e){n.seq.push(e),n.map[e.id]=e}function LD(n,e,t){const i=n.name,a=i.length;for(uh.lastIndex=0;;){const o=uh.exec(i),c=uh.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){f_(t,h===void 0?new RD(u,n,e):new PD(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new DD(u),f_(t,v)),t=v}}}class tu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);LD(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function d_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ND=37297;let ID=0;function UD(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const h_=new ct;function FD(n){yt._getMatrix(h_,yt.workingColorSpace,n);const e=`mat3( ${h_.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case gu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function p_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+UD(n.getShaderSource(e),u)}else return o}function kD(n,e){const t=FD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OD={[_S]:"Linear",[yS]:"Reinhard",[SS]:"Cineon",[MS]:"ACESFilmic",[wS]:"AgX",[TS]:"Neutral",[ES]:"Custom"};function BD(n,e){const t=OD[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vc=new re;function zD(){yt.getLuminanceCoefficients(Vc);const n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function HD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=n.getActiveAttrib(e,a),c=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ko(n){return n!==""}function m_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(n){return n.replace(WD,jD)}const XD=new Map;function jD(n,e){let t=mt[e];if(t===void 0){const i=XD.get(e);if(i!==void 0)t=mt[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pp(t)}const YD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(n){return n.replace(YD,$D)}function $D(n,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function x_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qD={[Kc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function KD(n){return qD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZD={[Us]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function JD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ZD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const QD={[Ua]:"ENVMAP_MODE_REFRACTION"};function eL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":QD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tL={[xS]:"ENVMAP_BLENDING_MULTIPLY",[zC]:"ENVMAP_BLENDING_MIX",[VC]:"ENVMAP_BLENDING_ADD"};function nL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tL[n.combine]||"ENVMAP_BLENDING_NONE"}function iL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rL(n,e,t,i){const a=n.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=KD(t),h=JD(t),p=eL(t),v=nL(t),g=iL(t),_=VD(t),M=HD(o),A=a.createProgram();let S,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ko).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ko).join(`
`),y.length>0&&(y+=`
`)):(S=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),y=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?mt.tonemapping_pars_fragment:"",t.toneMapping!==rr?BD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,kD("linearToOutputTexel",t.outputColorSpace),zD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),c=Pp(c),c=m_(c,t),c=g_(c,t),u=Pp(u),u=m_(u,t),u=g_(u,t),c=v_(c),u=v_(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=R+S+c,T=R+y+u,D=d_(a,a.VERTEX_SHADER,I),N=d_(a,a.FRAGMENT_SHADER,T);a.attachShader(A,D),a.attachShader(A,N),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(z){if(n.debug.checkShaderErrors){const $=a.getProgramInfoLog(A)||"",Z=a.getShaderInfoLog(D)||"",W=a.getShaderInfoLog(N)||"",Q=$.trim(),de=Z.trim(),ie=W.trim();let q=!0,Y=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,A,D,N);else{const K=p_(a,D,"vertex"),U=p_(a,N,"fragment");Dt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+K+`
`+U)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(de===""||ie==="")&&(Y=!1);Y&&(z.diagnostics={runnable:q,programLog:Q,vertexShader:{log:de,prefix:S},fragmentShader:{log:ie,prefix:y}})}a.deleteShader(D),a.deleteShader(N),E=new tu(a,A),L=GD(a,A)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(A,ND)),O},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ID++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=N,this}let sL=0;class aL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oL(e),t.set(e,i)),i}}class oL{constructor(e){this.id=sL++,this.code=e,this.usedTimes=0}}function lL(n){return n===Fs||n===hu||n===pu}function cL(n,e,t,i,a,o){const c=new FS,u=new aL,d=new Set,h=[],p=new Map,v=i.logarithmicDepthBuffer;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,L,O,z,$,Z){const W=z.fog,Q=$.geometry,de=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||de,ie),Y=q&&q.mapping===Ru?q.image.height:null,K=_[E.type];E.precision!==null&&(g=i.getMaxPrecision(E.precision),g!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=U!==void 0?U.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ge,Ve,We,le;if(K){const Ct=er[K];Ge=Ct.vertexShader,Ve=Ct.fragmentShader}else{Ge=E.vertexShader,Ve=E.fragmentShader;const Ct=u.getVertexShaderStage(E),Mt=u.getFragmentShaderStage(E);u.update(E,Ct,Mt),We=Ct.id,le=Mt.id}const fe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),tt=$.isInstancedMesh===!0,ke=$.isBatchedMesh===!0,ft=!!E.map,Wt=!!E.matcap,dt=!!q,vt=!!E.aoMap,It=!!E.lightMap,ht=!!E.bumpMap&&E.wireframe===!1,kt=!!E.normalMap,Zt=!!E.displacementMap,an=!!E.emissiveMap,Nt=!!E.metalnessMap,Xt=!!E.roughnessMap,X=E.anisotropy>0,un=E.clearcoat>0,bt=E.dispersion>0,k=E.retroreflectivity>0,w=E.iridescence>0,J=E.sheen>0,oe=E.transmission>0,he=X&&!!E.anisotropyMap,Ee=un&&!!E.clearcoatMap,be=un&&!!E.clearcoatNormalMap,pe=un&&!!E.clearcoatRoughnessMap,ge=w&&!!E.iridescenceMap,Pe=w&&!!E.iridescenceThicknessMap,Ke=J&&!!E.sheenColorMap,De=J&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,Ze=!!E.specularColorMap,nt=!!E.specularIntensityMap,st=oe&&!!E.transmissionMap,H=oe&&!!E.thicknessMap,Ce=!!E.gradientMap,me=!!E.alphaMap,Re=E.alphaTest>0,Fe=!!E.alphaHash,ve=!!E.extensions;let Qe=rr;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const $e={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Ve,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ke,batchingColor:ke&&$._colorsTexture!==null,instancing:tt,instancingColor:tt&&$.instanceColor!==null,instancingMorph:tt&&$.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:Wt,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:Y,aoMap:vt,lightMap:It,bumpMap:ht,normalMap:kt,displacementMap:Zt,emissiveMap:an,normalMapObjectSpace:kt&&E.normalMapType===WC,normalMapTangentSpace:kt&&E.normalMapType===Px,packedNormalMap:kt&&E.normalMapType===Px&&lL(E.normalMap.format),metalnessMap:Nt,roughnessMap:Xt,anisotropy:X,anisotropyMap:he,clearcoat:un,clearcoatMap:Ee,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:bt,retroreflection:k,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:J,sheenColorMap:Ke,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:Ze,specularIntensityMap:nt,transmission:oe,transmissionMap:st,thicknessMap:H,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Wo&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Fe,combine:E.combine,mapUv:ft&&M(E.map.channel),aoMapUv:vt&&M(E.aoMap.channel),lightMapUv:It&&M(E.lightMap.channel),bumpMapUv:ht&&M(E.bumpMap.channel),normalMapUv:kt&&M(E.normalMap.channel),displacementMapUv:Zt&&M(E.displacementMap.channel),emissiveMapUv:an&&M(E.emissiveMap.channel),metalnessMapUv:Nt&&M(E.metalnessMap.channel),roughnessMapUv:Xt&&M(E.roughnessMap.channel),anisotropyMapUv:he&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(E.sheenRoughnessMap.channel),specularMapUv:Ae&&M(E.specularMap.channel),specularColorMapUv:Ze&&M(E.specularColorMap.channel),specularIntensityMapUv:nt&&M(E.specularIntensityMap.channel),transmissionMapUv:st&&M(E.transmissionMap.channel),thicknessMapUv:H&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(kt||X),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(ft||me),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&kt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:an&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Er,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function S(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)L.push(O),L.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(y(L,E),R(L,E),L.push(n.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function y(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function R(E,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.retroreflection&&c.enable(24),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function I(E){const L=_[E.type];let O;if(L){const z=er[L];O=PR.clone(z.uniforms)}else O=E.uniforms;return O}function T(E,L){let O=p.get(L);return O!==void 0?++O.usedTimes:(O=new rL(n,L,E,a),h.push(O),p.set(L,O)),O}function D(E){if(--E.usedTimes===0){const L=h.indexOf(E);h[L]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function N(E){u.remove(E)}function F(){u.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:T,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:F}}function uL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function a(c,u,d){n.get(c)[u]=d}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function fL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y_(){const n=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,A,S,y){let R=n[e];return R===void 0?(R={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:y},n[e]=R):(R.id=g.id,R.object=g,R.geometry=_,R.material=M,R.materialVariant=c(g),R.groupOrder=A,R.renderOrder=g.renderOrder,R.z=S,R.group=y),e++,R}function d(g,_,M,A,S,y,R){R.reversedDepth===!0&&(S=-S);const I=u(g,_,M,A,S,y);M.transmission>0?i.push(I):M.transparent===!0?a.push(I):t.push(I)}function h(g,_,M,A,S,y){const R=u(g,_,M,A,S,y);M.transmission>0?i.unshift(R):M.transparent===!0?a.unshift(R):t.unshift(R)}function p(g,_){t.length>1&&t.sort(g||fL),i.length>1&&i.sort(_||__),a.length>1&&a.sort(_||__)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:d,unshift:h,finish:v,sort:p}}function dL(){let n=new WeakMap;function e(i,a){const o=n.get(i);let c;return o===void 0?(c=new y_,n.set(i,[c])):a>=o.length?(c=new y_,o.push(c)):c=o[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function hL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new re,color:new Et};break;case"SpotLight":t={position:new re,direction:new re,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function pL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mL=0;function gL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vL(n){const e=new hL,t=pL(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new re);const a=new re,o=new sn,c=new sn;function u(h){let p=0,v=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let _=0,M=0,A=0,S=0,y=0,R=0,I=0,T=0,D=0,N=0,F=0,E=0,L=0,O=0;h.sort(gL);for(let $=0,Z=h.length;$<Z;$++){const W=h[$],Q=W.color,de=W.intensity,ie=W.distance;let q=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Fs?q=W.shadow.map.texture:q=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)p+=Q.r*de,v+=Q.g*de,g+=Q.b*de;else if(W.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(W.sh.coefficients[Y],de);O++}else if(W.isSunLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[M]=U,i.sunShadowMap[M]=q;const se=K.getViewportCount();for(let Se=0;Se<se;Se++)i.sunShadowMatrix[A+Se]=K.getMatrix(Se),i.sunShadowCascade[A+Se]=K._cascadeData[Se];A+=se,M++}i.sun[_]=Y,_++}else if(W.isDirectionalLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.directionalShadow[S]=U,i.directionalShadowMap[S]=q,i.directionalShadowMatrix[S]=W.shadow.matrix,D++}i.directional[S]=Y,S++}else if(W.isSpotLight){const Y=e.get(W);Y.position.setFromMatrixPosition(W.matrixWorld),Y.color.copy(Q).multiplyScalar(de),Y.distance=ie,Y.coneCos=Math.cos(W.angle),Y.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Y.decay=W.decay,i.spot[R]=Y;const K=W.shadow;if(W.map&&(i.spotLightMap[E]=W.map,E++,K.updateMatrices(W),W.castShadow&&L++),i.spotLightMatrix[R]=K.matrix,W.castShadow){const U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.spotShadow[R]=U,i.spotShadowMap[R]=q,F++}R++}else if(W.isRectAreaLight){const Y=e.get(W);Y.color.copy(Q).multiplyScalar(de),Y.halfWidth.set(W.width*.5,0,0),Y.halfHeight.set(0,W.height*.5,0),i.rectArea[I]=Y,I++}else if(W.isPointLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),Y.distance=W.distance,Y.decay=W.decay,W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,U.shadowCameraNear=K.camera.near,U.shadowCameraFar=K.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=q,i.pointShadowMatrix[y]=W.shadow.matrix,N++}i.point[y]=Y,y++}else if(W.isHemisphereLight){const Y=e.get(W);Y.skyColor.copy(W.color).multiplyScalar(de),Y.groundColor.copy(W.groundColor).multiplyScalar(de),i.hemi[T]=Y,T++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=g;const z=i.hash;(z.sunLength!==_||z.directionalLength!==S||z.pointLength!==y||z.spotLength!==R||z.rectAreaLength!==I||z.hemiLength!==T||z.numSunShadows!==M||z.numDirectionalShadows!==D||z.numPointShadows!==N||z.numSpotShadows!==F||z.numSpotMaps!==E||z.numLightProbes!==O)&&(i.sun.length=_,i.directional.length=S,i.spot.length=R,i.rectArea.length=I,i.point.length=y,i.hemi.length=T,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=A,i.sunShadowCascade.length=A,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.directionalShadowMatrix.length=D,i.pointShadow.length=N,i.pointShadowMap.length=N,i.pointShadowMatrix.length=N,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,z.sunLength=_,z.directionalLength=S,z.pointLength=y,z.spotLength=R,z.rectAreaLength=I,z.hemiLength=T,z.numSunShadows=M,z.numDirectionalShadows=D,z.numPointShadows=N,z.numSpotShadows=F,z.numSpotMaps=E,z.numLightProbes=O,i.version=mL++)}function d(h,p){let v=0,g=0,_=0,M=0,A=0,S=0;const y=p.matrixWorldInverse;for(let R=0,I=h.length;R<I;R++){const T=h[R];if(T.isSunLight){const D=i.sun[v];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(y),v++}else if(T.isDirectionalLight){const D=i.directional[g];D.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(y),g++}else if(T.isSpotLight){const D=i.spot[M];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(y),M++}else if(T.isRectAreaLight){const D=i.rectArea[A];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),c.identity(),o.copy(T.matrixWorld),o.premultiply(y),c.extractRotation(o),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),A++}else if(T.isPointLight){const D=i.point[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),_++}else if(T.isHemisphereLight){const D=i.hemi[S];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(y),S++}}}return{setup:u,setupView:d,state:i}}function S_(n){const e=new vL(n),t=[],i=[],a=[];function o(g){v.camera=g,t.length=0,i.length=0,a.length=0}function c(g){t.push(g)}function u(g){i.push(g)}function d(g){a.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function xL(n){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new S_(n),e.set(a,[u])):o>=c.length?(u=new S_(n),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const _L=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SL=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],ML=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],M_=new sn,No=new re,fh=new re;function EL(n,e,t){let i=new VS;const a=new wt,o=new wt,c=new tn,u=new IR,d=new UR,h={},p=t.maxTextureSize,v={[Is]:Jn,[Jn]:Is,[Er]:Er},g=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:_L,fragmentShader:yL}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Xi(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let y=this.type;this.render=function(N,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===SC&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kc);const L=n.getRenderTarget(),O=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Tr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=y!==this.type;Z&&F.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=N.length;W<Q;W++){const de=N[W],ie=de.shadow;if(ie===void 0){ot("WebGLShadowMap:",de,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;a.copy(ie.mapSize);const q=ie.getFrameExtents();a.multiply(q),o.copy(ie.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/q.x),a.x=o.x*q.x,ie.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/q.y),a.y=o.y*q.y,ie.mapSize.y=o.y));const Y=n.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=Y,ie.map===null||Z===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Fo){if(de.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Hi(a.x,a.y,{format:Fs,type:ar,minFilter:Un,magFilter:Un,generateMipmaps:!1}),ie.map.texture.name=de.name+".shadowMap",ie.map.depthTexture=new Zo(a.x,a.y,tr),ie.map.depthTexture.name=de.name+".shadowMapDepth",ie.map.depthTexture.format=br,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=bn,ie.map.depthTexture.magFilter=bn}else de.isPointLight?(ie.map=new KS(a.x),ie.map.depthTexture=new CR(a.x,sr)):(ie.map=new Hi(a.x,a.y),ie.map.depthTexture=new Zo(a.x,a.y,sr)),ie.map.depthTexture.name=de.name+".shadowMap",ie.map.depthTexture.format=br,this.type===Kc?(ie.map.depthTexture.compareFunction=Y?xm:vm,ie.map.depthTexture.minFilter=Un,ie.map.depthTexture.magFilter=Un):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=bn,ie.map.depthTexture.magFilter=bn);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==a.x||ie.map.height!==a.y)&&ie.map.setSize(a.x,a.y);const K=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();de.isPointLight!==!0&&ie.updateMatrices(de,E);for(let U=0;U<K;U++){const se=ie.getCamera(U);if(de.isPointLight){const Se=ie.camera,Ge=ie.matrix,Ve=de.distance||Se.far;Ve!==Se.far&&(Se.far=Ve,Se.updateProjectionMatrix()),No.setFromMatrixPosition(de.matrixWorld),Se.position.copy(No),fh.copy(Se.position),fh.add(SL[U]),Se.up.copy(ML[U]),Se.lookAt(fh),Se.updateMatrixWorld(),Ge.makeTranslation(-No.x,-No.y,-No.z),M_.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(M_,Se.coordinateSystem,Se.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)n.setRenderTarget(ie.map,U),n.clear();else{U===0&&(n.setRenderTarget(ie.map),n.clear());const Se=ie.getViewport(U);c.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),$.viewport(c)}i=ie.getFrustum(U),T(F,E,se,de,this.type)}ie.isPointLightShadow!==!0&&this.type===Fo&&R(ie,E),ie.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(L,O,z)};function R(N,F){const E=e.update(A);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null?N.mapPass=new Hi(a.x,a.y,{format:Fs,type:ar}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value.set(N.map.width,N.map.height),g.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(F,null,E,g,A,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(F,null,E,_,A,null)}function I(N,F,E,L){let O=null;const z=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)O=z;else if(O=E.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=O.uuid,Z=F.uuid;let W=h[$];W===void 0&&(W={},h[$]=W);let Q=W[Z];Q===void 0&&(Q=O.clone(),W[Z]=Q,F.addEventListener("dispose",D)),O=Q}if(O.visible=F.visible,O.wireframe=F.wireframe,L===Fo?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:v[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=n.properties.get(O);$.light=E}return O}function T(N,F,E,L,O){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&O===Fo)&&(!N.frustumCulled||N.intersectsFrustum(i))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),W=N.material;if(Array.isArray(W)){const Q=Z.groups;for(let de=0,ie=Q.length;de<ie;de++){const q=Q[de],Y=W[q.materialIndex];if(Y&&Y.visible){const K=I(N,Y,L,O);N.onBeforeShadow(n,N,F,E,Z,K,q),n.renderBufferDirect(E,null,Z,K,N,q),N.onAfterShadow(n,N,F,E,Z,K,q)}}}else if(W.visible){const Q=I(N,W,L,O);N.onBeforeShadow(n,N,F,E,Z,Q,null),n.renderBufferDirect(E,null,Z,Q,N,null),N.onAfterShadow(n,N,F,E,Z,Q,null)}}const $=N.children;for(let Z=0,W=$.length;Z<W;Z++)T($[Z],F,E,L,O)}function D(N){N.target.removeEventListener("dispose",D);for(const E in h){const L=h[E],O=N.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function wL(n,e){function t(){let H=!1;const Ce=new tn;let me=null;const Re=new tn(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!H&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,ve,Qe,$e,Ct){Ct===!0&&(Fe*=$e,ve*=$e,Qe*=$e),Ce.set(Fe,ve,Qe,$e),Re.equals(Ce)===!1&&(n.clearColor(Fe,ve,Qe,$e),Re.copy(Ce))},reset:function(){H=!1,me=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,Ce=!1,me=null,Re=null,Fe=null;return{setReversed:function(ve){if(Ce!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;const $e=Fe;Fe=null,this.setClear($e)}},getReversed:function(){return Ce},setTest:function(ve){ve?fe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){me!==ve&&!H&&(n.depthMask(ve),me=ve)},setFunc:function(ve){if(Ce&&(ve=nR[ve]),Re!==ve){switch(ve){case Hh:n.depthFunc(n.NEVER);break;case Gh:n.depthFunc(n.ALWAYS);break;case Wh:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case Xh:n.depthFunc(n.EQUAL);break;case jh:n.depthFunc(n.GEQUAL);break;case Yh:n.depthFunc(n.GREATER);break;case $h:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,Ce&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,me=null,Re=null,Fe=null,Ce=!1}}}function a(){let H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Qe=null,$e=null,Ct=null;return{setTest:function(Mt){H||(Mt?fe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!H&&(n.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,En,ci){(me!==Mt||Re!==En||Fe!==ci)&&(n.stencilFunc(Mt,En,ci),me=Mt,Re=En,Fe=ci)},setOp:function(Mt,En,ci){(ve!==Mt||Qe!==En||$e!==ci)&&(n.stencilOp(Mt,En,ci),ve=Mt,Qe=En,$e=ci)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Ct!==Mt&&(n.clearStencil(Mt),Ct=Mt)},reset:function(){H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Qe=null,$e=null,Ct=null}}}const o=new t,c=new i,u=new a,d=new WeakMap,h=new WeakMap;let p={},v={},g={},_=new WeakMap,M=[],A=null,S=!1,y=null,R=null,I=null,T=null,D=null,N=null,F=null,E=new Et(0,0,0),L=0,O=!1,z=null,$=null,Z=null,W=null,Q=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ie=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ie=q>=2);let K=null,U={};const se=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ge=new tn().fromArray(se),Ve=new tn().fromArray(Se);function We(H,Ce,me,Re){const Fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<me;Qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Ce+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ve}const le={};le[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),c.setFunc($o),ht(!1),kt(bx),fe(n.CULL_FACE),vt(Tr);function fe(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function we(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function tt(H,Ce){return g[H]!==Ce?(n.bindFramebuffer(H,Ce),g[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ke(H,Ce){let me=M,Re=!1;if(H){me=_.get(Ce),me===void 0&&(me=[],_.set(Ce,me));const Fe=H.textures;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Qe=Fe.length;ve<Qe;ve++)me[ve]=n.COLOR_ATTACHMENT0+ve;me.length=Fe.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function ft(H){return A!==H?(n.useProgram(H),A=H,!0):!1}const Wt={[wa]:n.FUNC_ADD,[EC]:n.FUNC_SUBTRACT,[wC]:n.FUNC_REVERSE_SUBTRACT};Wt[TC]=n.MIN,Wt[AC]=n.MAX;const dt={[bC]:n.ZERO,[CC]:n.ONE,[RC]:n.SRC_COLOR,[gS]:n.SRC_ALPHA,[UC]:n.SRC_ALPHA_SATURATE,[NC]:n.DST_COLOR,[DC]:n.DST_ALPHA,[PC]:n.ONE_MINUS_SRC_COLOR,[vS]:n.ONE_MINUS_SRC_ALPHA,[IC]:n.ONE_MINUS_DST_COLOR,[LC]:n.ONE_MINUS_DST_ALPHA,[FC]:n.CONSTANT_COLOR,[kC]:n.ONE_MINUS_CONSTANT_COLOR,[OC]:n.CONSTANT_ALPHA,[BC]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(H,Ce,me,Re,Fe,ve,Qe,$e,Ct,Mt){if(H===Tr){S===!0&&(we(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),H!==MC){if(H!==y||Mt!==O){if((R!==wa||D!==wa)&&(n.blendEquation(n.FUNC_ADD),R=wa,D=wa),Mt)switch(H){case Wo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vh:n.blendFunc(n.ONE,n.ONE);break;case Cx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",H);break}else switch(H){case Wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",H);break}I=null,T=null,N=null,F=null,E.set(0,0,0),L=0,y=H,O=Mt}return}Fe=Fe||Ce,ve=ve||me,Qe=Qe||Re,(Ce!==R||Fe!==D)&&(n.blendEquationSeparate(Wt[Ce],Wt[Fe]),R=Ce,D=Fe),(me!==I||Re!==T||ve!==N||Qe!==F)&&(n.blendFuncSeparate(dt[me],dt[Re],dt[ve],dt[Qe]),I=me,T=Re,N=ve,F=Qe),($e.equals(E)===!1||Ct!==L)&&(n.blendColor($e.r,$e.g,$e.b,Ct),E.copy($e),L=Ct),y=H,O=!1}function It(H,Ce){H.side===Er?we(n.CULL_FACE):fe(n.CULL_FACE);let me=H.side===Jn;Ce&&(me=!me),ht(me),H.blending===Wo&&H.transparent===!1?vt(Tr):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Re=H.stencilWrite;u.setTest(Re),Re&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),an(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){z!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),z=H)}function kt(H){H!==_C?(fe(n.CULL_FACE),H!==$&&(H===bx?n.cullFace(n.BACK):H===yC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),$=H}function Zt(H){H!==Z&&(ie&&n.lineWidth(H),Z=H)}function an(H,Ce,me){H?(fe(n.POLYGON_OFFSET_FILL),(W!==Ce||Q!==me)&&(W=Ce,Q=me,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):we(n.POLYGON_OFFSET_FILL)}function Nt(H){H?fe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Xt(H){H===void 0&&(H=n.TEXTURE0+de-1),K!==H&&(n.activeTexture(H),K=H)}function X(H,Ce,me){me===void 0&&(K===null?me=n.TEXTURE0+de-1:me=K);let Re=U[me];Re===void 0&&(Re={type:void 0,texture:void 0},U[me]=Re),(Re.type!==H||Re.texture!==Ce)&&(K!==me&&(n.activeTexture(me),K=me),n.bindTexture(H,Ce||le[H]),Re.type=H,Re.texture=Ce)}function un(){const H=U[K];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function w(){try{n.texSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function J(){try{n.texSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Ee(){try{n.texStorage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function be(){try{n.texStorage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function pe(){try{n.texImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function ge(){try{n.texImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Pe(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function Ke(H,Ce){v[H]!==Ce&&(n.pixelStorei(H,Ce),v[H]=Ce)}function De(H){Ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function Ae(H){Ve.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ve.copy(H))}function Ze(H,Ce){let me=h.get(Ce);me===void 0&&(me=new WeakMap,h.set(Ce,me));let Re=me.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(Ce,H.name),me.set(H,Re))}function nt(H,Ce){const Re=h.get(Ce).get(H);d.get(Ce)!==Re&&(n.uniformBlockBinding(Ce,Re,H.__bindingPointIndex),d.set(Ce,Re))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},K=null,U={},g={},_=new WeakMap,M=[],A=null,S=!1,y=null,R=null,I=null,T=null,D=null,N=null,F=null,E=new Et(0,0,0),L=0,O=!1,z=null,$=null,Z=null,W=null,Q=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:fe,disable:we,bindFramebuffer:tt,drawBuffers:ke,useProgram:ft,setBlending:vt,setMaterial:It,setFlipSided:ht,setCullFace:kt,setLineWidth:Zt,setPolygonOffset:an,setScissorTest:Nt,activeTexture:Xt,bindTexture:X,unbindTexture:un,compressedTexImage2D:bt,compressedTexImage3D:k,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:Pe,updateUBOMapping:Ze,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:be,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:De,viewport:Ae,reset:st}}function TL(n,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,p=new WeakMap,v=new Set;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,w){return M?new OffscreenCanvas(k,w):xu("canvas")}function S(k,w,J){let oe=1;const he=bt(k);if((he.width>J||he.height>J)&&(oe=J/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ee=Math.floor(oe*he.width),be=Math.floor(oe*he.height);g===void 0&&(g=A(Ee,be));const pe=w?A(Ee,be):g;return pe.width=Ee,pe.height=be,pe.getContext("2d").drawImage(k,0,0,Ee,be),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+be+")."),pe}else return"data"in k&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),k;return k}function y(k){return k.generateMipmaps}function R(k){n.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(k,w,J,oe,he,Ee=!1){if(k!==null){if(n[k]!==void 0)return n[k];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),J===n.SHORT&&be&&(pe=be.R16_SNORM_EXT)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),w===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),J===n.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(J===n.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),J===n.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ge=Ee?gu:yt.getTransfer(he);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=ge===Ft?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),J===n.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(k,w){let J;return k?w===null||w===sr||w===Ko?J=n.DEPTH24_STENCIL8:w===tr?J=n.DEPTH32F_STENCIL8:w===qo&&(J=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===sr||w===Ko?J=n.DEPTH_COMPONENT24:w===tr?J=n.DEPTH_COMPONENT32F:w===qo&&(J=n.DEPTH_COMPONENT16),J}function N(k,w){return y(k)===!0||k.isFramebufferTexture&&k.minFilter!==bn&&k.minFilter!==Un?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function F(k){const w=k.target;w.removeEventListener("dispose",F),L(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function E(k){const w=k.target;w.removeEventListener("dispose",E),z(w)}function L(k){const w=i.get(k);if(w.__webglInit===void 0)return;const J=k.source,oe=_.get(J);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(k),Object.keys(oe).length===0&&_.delete(J)}i.remove(k)}function O(k){const w=i.get(k);n.deleteTexture(w.__webglTexture);const J=k.source,oe=_.get(J);delete oe[w.__cacheKey],c.memory.textures--}function z(k){const w=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else n.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)n.deleteFramebuffer(w.__webglFramebuffer[oe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=k.textures;for(let oe=0,he=J.length;oe<he;oe++){const Ee=i.get(J[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(J[oe])}i.remove(k)}let $=0;function Z(){$=0}function W(){return $}function Q(k){$=k}function de(){const k=$;return k>=a.maxTextures&&ot("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+a.maxTextures),$+=1,k}function ie(k){const w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function q(k,w){const J=i.get(k);if(k.isVideoTexture&&X(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&J.__version!==k.version){const oe=k.image;if(oe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{we(J,k,w);return}}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function Y(k,w){const J=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){we(J,k,w);return}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function K(k,w){const J=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){we(J,k,w);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function U(k,w){const J=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&J.__version!==k.version){tt(J,k,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}const se={[qh]:n.REPEAT,[wr]:n.CLAMP_TO_EDGE,[Kh]:n.MIRRORED_REPEAT},Se={[bn]:n.NEAREST,[HC]:n.NEAREST_MIPMAP_NEAREST,[vc]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Fd]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},Ge={[jC]:n.NEVER,[ZC]:n.ALWAYS,[YC]:n.LESS,[vm]:n.LEQUAL,[$C]:n.EQUAL,[xm]:n.GEQUAL,[qC]:n.GREATER,[KC]:n.NOTEQUAL};function Ve(k,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Un||w.magFilter===Fd||w.magFilter===vc||w.magFilter===Ps||w.minFilter===Un||w.minFilter===Fd||w.minFilter===vc||w.minFilter===Ps)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,se[w.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Se[w.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==vc&&w.minFilter!==Ps||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function We(k,w){let J=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",F));const oe=w.source;let he=_.get(oe);he===void 0&&(he={},_.set(oe,he));const Ee=ie(w);if(Ee!==k.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,J=!0),he[Ee].usedTimes++;const be=he[k.__cacheKey];be!==void 0&&(he[k.__cacheKey].usedTimes--,be.usedTimes===0&&O(w)),k.__cacheKey=Ee,k.__webglTexture=he[Ee].texture}return J}function le(k,w,J){return Math.floor(Math.floor(k/J)/w)}function fe(k,w,J,oe){const Ee=k.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,oe,w.data);else{Ee.sort((Ke,De)=>Ke.start-De.start);let be=0;for(let Ke=1;Ke<Ee.length;Ke++){const De=Ee[be],Ae=Ee[Ke],Ze=De.start+De.count,nt=le(Ae.start,w.width,4),st=le(De.start,w.width,4);Ae.start<=Ze+1&&nt===st&&le(Ae.start+Ae.count-1,w.width,4)===nt?De.count=Math.max(De.count,Ae.start+Ae.count-De.start):(++be,Ee[be]=Ae)}Ee.length=be+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ke=0,De=Ee.length;Ke<De;Ke++){const Ae=Ee[Ke],Ze=Math.floor(Ae.start/4),nt=Math.ceil(Ae.count/4),st=Ze%w.width,H=Math.floor(Ze/w.width),Ce=nt,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,st,H,Ce,me,J,oe,w.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function we(k,w,J){let oe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=n.TEXTURE_3D);const he=We(k,w),Ee=w.source;t.bindTexture(oe,k.__webglTexture,n.TEXTURE0+J);const be=i.get(Ee);if(Ee.version!==be.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=yt.getPrimaries(yt.workingColorSpace),Re=w.colorSpace===Qr?null:yt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Qr||me===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,a.maxTextureSize);ge=un(w,ge);const Pe=o.convert(w.format,w.colorSpace),Ke=o.convert(w.type);let De=T(w.internalFormat,Pe,Ke,w.normalized,w.colorSpace,w.isVideoTexture);Ve(oe,w);let Ae;const Ze=w.mipmaps,nt=w.isVideoTexture!==!0,st=be.__version===void 0||he===!0,H=Ee.dataReady,Ce=N(w,ge);if(w.isDepthTexture)De=D(w.format===Ds,w.type),st&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ke,null));else if(w.isDataTexture)if(Ze.length>0){nt&&st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ze[0].width,Ze[0].height);for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Pe,Ke,Ae.data);w.generateMipmaps=!1}else nt?(st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,ge.width,ge.height),H&&fe(w,ge,Pe,Ke)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ke,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,Ze[0].width,Ze[0].height,ge.depth);for(let me=0,Re=Ze.length;me<Re;me++)if(Ae=Ze[me],w.format!==zi)if(Pe!==null)if(nt){if(H)if(w.layerUpdates.size>0){const Fe=e_(Ae.width,Ae.height,w.format,w.type);for(const ve of w.layerUpdates){const Qe=Ae.data.subarray(ve*Fe/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ve,Ae.width,Ae.height,1,Pe,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ke,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,Ae.width,Ae.height,ge.depth,0,Pe,Ke,Ae.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{nt&&st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ze[0].width,Ze[0].height);for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],w.format!==zi?Pe!==null?nt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Ae.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Pe,Ke,Ae.data)}else if(w.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,ge.width,ge.height,ge.depth),H)if(w.layerUpdates.size>0){const me=e_(ge.width,ge.height,w.format,w.type);for(const Re of w.layerUpdates){const Fe=ge.data.subarray(Re*me/ge.data.BYTES_PER_ELEMENT,(Re+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ge.width,ge.height,1,Pe,Ke,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(w.isData3DTexture)nt?(st&&t.texStorage3D(n.TEXTURE_3D,Ce,De,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(w.isFramebufferTexture){if(st)if(nt)t.texStorage2D(n.TEXTURE_2D,Ce,De,ge.width,ge.height);else{let me=ge.width,Re=ge.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,De,me,Re,0,Pe,Ke,null),me>>=1,Re>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Re=>{const Fe=Re.changedElements;for(const ve of v)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Fe=n.RGBA,ve=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,ve,Qe,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(nt&&st){const me=bt(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Ce,De,me.width,me.height)}for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Pe,Ke,Ae):t.texImage2D(n.TEXTURE_2D,me,De,Pe,Ke,Ae);w.generateMipmaps=!1}else if(nt){if(st){const me=bt(ge);t.texStorage2D(n.TEXTURE_2D,Ce,De,me.width,me.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ke,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Pe,Ke,ge);y(w)&&R(oe),be.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function tt(k,w,J){if(w.image.length!==6)return;const oe=We(k,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+J);const Ee=i.get(he);if(he.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+J);const be=yt.getPrimaries(yt.workingColorSpace),pe=w.colorSpace===Qr?null:yt.getPrimaries(w.colorSpace),ge=w.colorSpace===Qr||be===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!Pe&&!Ke?De[ve]=S(w.image[ve],!0,a.maxCubemapSize):De[ve]=Ke?w.image[ve].image:w.image[ve],De[ve]=un(w,De[ve]);const Ae=De[0],Ze=o.convert(w.format,w.colorSpace),nt=o.convert(w.type),st=T(w.internalFormat,Ze,nt,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Ce=Ee.__version===void 0||oe===!0,me=he.dataReady;let Re=N(w,Ae);Ve(n.TEXTURE_CUBE_MAP,w);let Fe;if(Pe){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){Fe=De[ve].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];w.format!==zi?Ze!==null?H?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,$e.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,nt,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,Ze,nt,$e.data)}}}else{if(Fe=w.mipmaps,H&&Ce){Fe.length>0&&Re++;const ve=bt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Ze,nt,De[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,De[ve].width,De[ve].height,0,Ze,nt,De[ve].data);for(let Qe=0;Qe<Fe.length;Qe++){const Ct=Fe[Qe].image[ve].image;H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ct.width,Ct.height,Ze,nt,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Ct.width,Ct.height,0,Ze,nt,Ct.data)}}else{H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,nt,De[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ze,nt,De[ve]);for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ze,nt,$e.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Ze,nt,$e.image[ve])}}}y(w)&&R(n.TEXTURE_CUBE_MAP),Ee.__version=he.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function ke(k,w,J,oe,he,Ee){const be=o.convert(J.format,J.colorSpace),pe=o.convert(J.type),ge=T(J.internalFormat,be,pe,J.normalized,J.colorSpace),Pe=i.get(w),Ke=i.get(J);if(Ke.__renderTarget=w,!Pe.__hasExternalTextures){const De=Math.max(1,w.width>>Ee),Ae=Math.max(1,w.height>>Ee);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,De,Ae,w.depth,0,be,pe,null):t.texImage2D(he,Ee,ge,De,Ae,0,be,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,he,Ke.__webglTexture,0,Nt(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,he,Ke.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(k,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,k),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Ee=D(w.stencilBuffer,he),be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),Ee,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,k)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const Ee=oe[he],be=o.convert(Ee.format,Ee.colorSpace),pe=o.convert(Ee.type),ge=T(Ee.internalFormat,be,pe,Ee.normalized,Ee.colorSpace);Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(k,w,J){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w.depthTexture);const Pe=o.convert(w.depthTexture.format),Ke=o.convert(w.depthTexture.type);let De;w.depthTexture.format===br?De=n.DEPTH_COMPONENT24:w.depthTexture.format===Ds&&(De=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,De,w.width,w.height,0,Pe,Ke,null)}}else q(w.depthTexture,0);const Ee=he.__webglTexture,be=Nt(w),pe=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ge=w.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===br)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else if(w.depthTexture.format===Ds)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(k){const w=i.get(k),J=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){const oe=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)Wt(w.__webglFramebuffer[oe],k,oe);else{const oe=k.texture.mipmaps;oe&&oe.length>0?Wt(w.__webglFramebuffer[0],k,0):Wt(w.__webglFramebuffer,k,0)}else if(J){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=n.createRenderbuffer(),ft(w.__webglDepthbuffer[oe],k,!1);else{const he=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}else{const oe=k.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ft(w.__webglDepthbuffer,k,!1);else{const he=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(k,w,J){const oe=i.get(k);w!==void 0&&ke(oe.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&dt(k)}function It(k){const w=k.texture,J=i.get(k),oe=i.get(w);k.addEventListener("dispose",E);const he=k.textures,Ee=k.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=w.version,c.memory.textures++),Ee){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)J.__webglFramebuffer[pe][ge]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(be)for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=i.get(he[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),c.memory.textures++)}if(k.samples>0&&Xt(k)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Pe=o.convert(ge.format,ge.colorSpace),Ke=o.convert(ge.type),De=T(ge.internalFormat,Pe,Ke,ge.normalized,ge.colorSpace,k.isXRRenderTarget===!0),Ae=Nt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,De,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(J.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(J.__webglFramebuffer[pe][ge],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ke(J.__webglFramebuffer[pe],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(w)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=he[pe],Ke=i.get(Pe);let De=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ke.__webglTexture),Ve(De,Pe),ke(J.__webglFramebuffer,k,Pe,n.COLOR_ATTACHMENT0+pe,De,0),y(Pe)&&R(De)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(pe=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),Ve(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(J.__webglFramebuffer[ge],k,w,n.COLOR_ATTACHMENT0,pe,ge);else ke(J.__webglFramebuffer,k,w,n.COLOR_ATTACHMENT0,pe,0);y(w)&&R(pe),t.unbindTexture()}k.depthBuffer&&dt(k)}function ht(k){const w=k.textures;for(let J=0,oe=w.length;J<oe;J++){const he=w[J];if(y(he)){const Ee=I(k),be=i.get(he).__webglTexture;t.bindTexture(Ee,be),R(Ee),t.unbindTexture()}}}const kt=[],Zt=[];function an(k){if(k.samples>0){if(Xt(k)===!1){const w=k.textures,J=k.width,oe=k.height;let he=n.COLOR_BUFFER_BIT;const Ee=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(k),pe=w.length>1;if(pe)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=k.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ke=i.get(w[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,J,oe,0,0,J,oe,he,n.NEAREST),d===!0&&(kt.length=0,Zt.length=0,kt.push(n.COLOR_ATTACHMENT0+Pe),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(kt.push(Ee),Zt.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ke=i.get(w[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&d){const w=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Nt(k){return Math.min(a.maxSamples,k.samples)}function Xt(k){const w=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(k){const w=c.render.frame;p.get(k)!==w&&(p.set(k,w),k.update())}function un(k,w){const J=k.colorSpace,oe=k.format,he=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||J!==mu&&J!==Qr&&(yt.getTransfer(J)===Ft?(oe!==zi||he!==yi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",J)),w}function bt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=de,this.resetTextureUnits=Z,this.getTextureUnits=W,this.setTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=U,this.rebindTextures=vt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AL(n,e){function t(i,a=Qr){let o;const c=yt.getTransfer(a);if(i===yi)return n.UNSIGNED_BYTE;if(i===dm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===RS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===PS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bS)return n.BYTE;if(i===CS)return n.SHORT;if(i===qo)return n.UNSIGNED_SHORT;if(i===fm)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===tr)return n.FLOAT;if(i===ar)return n.HALF_FLOAT;if(i===DS)return n.ALPHA;if(i===LS)return n.RGB;if(i===zi)return n.RGBA;if(i===br)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===NS)return n.RED;if(i===pm)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===mm)return n.RG_INTEGER;if(i===gm)return n.RGBA_INTEGER;if(i===Zc||i===Jc||i===Qc||i===eu)if(c===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Jh||i===Qh||i===ep)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ep)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tp||i===np||i===ip||i===rp||i===sp||i===hu||i===ap)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===tp||i===np)return c===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ip)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===rp)return o.COMPRESSED_R11_EAC;if(i===sp)return o.COMPRESSED_SIGNED_R11_EAC;if(i===hu)return o.COMPRESSED_RG11_EAC;if(i===ap)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===op||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===op)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_p)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sp||i===Mp||i===Ep)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Sp)return c===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ep)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wp||i===Tp||i===pu||i===Ap)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===wp)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Tp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const bL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new WS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new or({vertexShader:bL,fragmentShader:CL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PL extends Os{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const A=typeof XRWebGLBinding<"u",S=new RL,y={},R=t.getContextAttributes();let I=null,T=null;const D=[],N=[],F=new wt;let E=null,L=null;const O=new _i;O.viewport=new tn;const z=new _i;z.viewport=new tn;const $=[O,z],Z=new kR;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let fe=D[le];return fe===void 0&&(fe=new Xd,D[le]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(le){let fe=D[le];return fe===void 0&&(fe=new Xd,D[le]=fe),fe.getGripSpace()},this.getHand=function(le){let fe=D[le];return fe===void 0&&(fe=new Xd,D[le]=fe),fe.getHandSpace()};function de(le){const fe=N.indexOf(le.inputSource);if(fe===-1)return;const we=D[fe];we!==void 0&&(we.update(le.inputSource,le.frame,h||c),we.dispatchEvent({type:le.type,data:le.inputSource}))}function ie(){a.removeEventListener("select",de),a.removeEventListener("selectstart",de),a.removeEventListener("selectend",de),a.removeEventListener("squeeze",de),a.removeEventListener("squeezestart",de),a.removeEventListener("squeezeend",de),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",q);for(let le=0;le<D.length;le++){const fe=N[le];fe!==null&&(N[le]=null,D[le].disconnect(fe))}W=null,Q=null,S.reset();for(const le in y)delete y[le];if(e.setRenderTarget(I),_=null,g=null,v=null,a=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),L!==null){const le=L.camera;le.fov=L.fov,le.zoom=L.zoom,le.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(le){if(a=le,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",de),a.addEventListener("selectstart",de),a.addEventListener("selectend",de),a.addEventListener("squeeze",de),a.addEventListener("squeezestart",de),a.addEventListener("squeezeend",de),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,tt=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=R.stencil?Ds:br,tt=R.stencil?Ko:sr);const ft={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:o};v=this.getBinding(),g=v.createProjectionLayer(ft),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Hi(g.textureWidth,g.textureHeight,{format:zi,type:yi,depthTexture:new Zo(g.textureWidth,g.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,we),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Hi(_.framebufferWidth,_.framebufferHeight,{format:zi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),We.setContext(a),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(le){for(let fe=0;fe<le.removed.length;fe++){const we=le.removed[fe],tt=N.indexOf(we);tt>=0&&(N[tt]=null,D[tt].disconnect(we))}for(let fe=0;fe<le.added.length;fe++){const we=le.added[fe];let tt=N.indexOf(we);if(tt===-1){for(let ft=0;ft<D.length;ft++)if(ft>=N.length){N.push(we),tt=ft;break}else if(N[ft]===null){N[ft]=we,tt=ft;break}if(tt===-1)break}const ke=D[tt];ke&&ke.connect(we)}}const Y=new re,K=new re;function U(le,fe,we){Y.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(we.matrixWorld);const tt=Y.distanceTo(K),ke=fe.projectionMatrix.elements,ft=we.projectionMatrix.elements,Wt=ke[14]/(ke[10]-1),dt=ke[14]/(ke[10]+1),vt=(ke[9]+1)/ke[5],It=(ke[9]-1)/ke[5],ht=(ke[8]-1)/ke[0],kt=(ft[8]+1)/ft[0],Zt=Wt*ht,an=Wt*kt,Nt=tt/(-ht+kt),Xt=Nt*-ht;if(fe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Xt),le.translateZ(Nt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ke[10]===-1)le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const X=Wt+Nt,un=dt+Nt,bt=Zt-Xt,k=an+(tt-Xt),w=vt*dt/un*X,J=It*dt/un*X;le.projectionMatrix.makePerspective(bt,k,w,J,X,un),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function se(le,fe){fe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(fe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(a===null)return;let fe=le.near,we=le.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(we=S.depthFar)),Z.near=z.near=O.near=fe,Z.far=z.far=O.far=we,(W!==Z.near||Q!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),W=Z.near,Q=Z.far),Z.layers.mask=le.layers.mask|6,O.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const tt=le.parent,ke=Z.cameras;se(Z,tt);for(let ft=0;ft<ke.length;ft++)se(ke[ft],tt);ke.length===2?U(Z,O,z):Z.projectionMatrix.copy(O.projectionMatrix),L===null&&le.isPerspectiveCamera&&(L={camera:le,fov:le.fov,zoom:le.zoom}),Se(le,Z,tt)};function Se(le,fe,we){we===null?le.matrix.copy(fe.matrixWorld):(le.matrix.copy(we.matrixWorld),le.matrix.invert(),le.matrix.multiply(fe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=bp*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(le){d=le,g!==null&&(g.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(le){return y[le]};let Ge=null;function Ve(le,fe){if(p=fe.getViewerPose(h||c),M=fe,p!==null){const we=p.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let tt=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,tt=!0);for(let dt=0;dt<we.length;dt++){const vt=we[dt];let It=null;if(_!==null)It=_.getViewport(vt);else{const kt=v.getViewSubImage(g,vt);It=kt.viewport,dt===0&&(e.setRenderTargetTextures(T,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(T))}let ht=$[dt];ht===void 0&&(ht=new _i,ht.layers.enable(dt),ht.viewport=new tn,$[dt]=ht),ht.matrix.fromArray(vt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(vt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(It.x,It.y,It.width,It.height),dt===0&&(Z.matrix.copy(ht.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),tt===!0&&Z.cameras.push(ht)}const ke=a.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){v=i.getBinding();const dt=v.getDepthInformation(we[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,a.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),v=i.getBinding();for(let dt=0;dt<we.length;dt++){const vt=we[dt].camera;if(vt){let It=y[vt];It||(It=new WS,y[vt]=It);const ht=v.getCameraImage(vt);It.sourceTexture=ht}}}}for(let we=0;we<D.length;we++){const tt=N[we],ke=D[we];tt!==null&&ke!==void 0&&ke.update(tt,fe,h||c)}Ge&&Ge(le,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const We=new $S;We.setAnimationLoop(Ve),this.setAnimationLoop=function(le){Ge=le},this.dispose=function(){}}}const DL=new sn,tM=new ct;tM.set(-1,0,0,0,1,0,0,0,1);function LL(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,XS(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,R,I,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(S,y):y.isMeshLambertMaterial?(o(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(S,y),v(S,y)):y.isMeshPhongMaterial?(o(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(S,y),g(S,y),y.isMeshPhysicalMaterial&&_(S,y,T)):y.isMeshMatcapMaterial?(o(S,y),M(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),A(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,R,I):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),I=R.envMap,T=R.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(DL.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(tM),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,R,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=I*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function NL(n,e,t,i){let a={},o={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,D){const N=D.program;i.uniformBlockBinding(T,N)}function h(T,D){let N=a[T.id];N===void 0&&(S(T),N=p(T),a[T.id]=N,T.addEventListener("dispose",R));const F=D.program;i.updateUBOMapping(T,F);const E=e.render.frame;o[T.id]!==E&&(g(T),o[T.id]=E)}function p(T){const D=v();T.__bindingPointIndex=D;const N=n.createBuffer(),F=T.__size,E=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,N),N}function v(){for(let T=0;T<u;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const D=a[T.id],N=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let E=0,L=N.length;E<L;E++){const O=N[E];if(Array.isArray(O))for(let z=0,$=O.length;z<$;z++)_(O[z],E,z,F);else _(O,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,D,N,F){if(A(T,D,N,F)===!0){const E=T.__offset,L=T.value;if(Array.isArray(L)){let O=0;for(let z=0;z<L.length;z++){const $=L[z],Z=y($);M($,T.__data,O),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,T.__data)}}function M(T,D,N){typeof T=="number"||typeof T=="boolean"?D[0]=T:T.isMatrix3?(D[0]=T.elements[0],D[1]=T.elements[1],D[2]=T.elements[2],D[3]=0,D[4]=T.elements[3],D[5]=T.elements[4],D[6]=T.elements[5],D[7]=0,D[8]=T.elements[6],D[9]=T.elements[7],D[10]=T.elements[8],D[11]=0):ArrayBuffer.isView(T)?D.set(new T.constructor(T.buffer,T.byteOffset,D.length)):T.toArray(D,N)}function A(T,D,N,F){const E=T.value,L=D+"_"+N;if(F[L]===void 0)return typeof E=="number"||typeof E=="boolean"?F[L]=E:ArrayBuffer.isView(E)?F[L]=E.slice():F[L]=E.clone(),!0;{const O=F[L];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return F[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(O.equals(E)===!1)return O.copy(E),!0}}return!1}function S(T){const D=T.uniforms;let N=0;const F=16;for(let L=0,O=D.length;L<O;L++){const z=Array.isArray(D[L])?D[L]:[D[L]];for(let $=0,Z=z.length;$<Z;$++){const W=z[$],Q=Array.isArray(W.value)?W.value:[W.value];for(let de=0,ie=Q.length;de<ie;de++){const q=Q[de],Y=y(q),K=N%F,U=K%Y.boundary,se=K+U;N+=U,se!==0&&F-se<Y.storage&&(N+=F-se),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=N,N+=Y.storage}}}const E=N%F;return E>0&&(N+=F-E),T.__size=N,T.__cache={},this}function y(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",T),D}function R(T){const D=T.target;D.removeEventListener("dispose",R);const N=c.indexOf(D.__bindingPointIndex);c.splice(N,1),n.deleteBuffer(a[D.id]),delete a[D.id],delete o[D.id]}function I(){for(const T in a)n.deleteBuffer(a[T]);c=[],a={},o={}}return{bind:d,update:h,dispose:I}}const IL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function UL(){return Zi===null&&(Zi=new TR(IL,16,16,Fs,ar),Zi.name="DFG_LUT",Zi.minFilter=Un,Zi.magFilter=Un,Zi.wrapS=wr,Zi.wrapT=wr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class FL{constructor(e={}){const{canvas:t=eR(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=yi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const A=_,S=new Set([gm,mm,pm]),y=new Set([yi,sr,qo,Ko,dm,hm]),R=new Uint32Array(4),I=new Int32Array(4),T=new re;let D=null,N=null;const F=[],E=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1,$=null,Z=null,W=null,Q=null;this._outputColorSpace=xi;let de=0,ie=0,q=null,Y=-1,K=null;const U=new tn,se=new tn;let Se=null;const Ge=new Et(0);let Ve=0,We=t.width,le=t.height,fe=1,we=null,tt=null;const ke=new tn(0,0,We,le),ft=new tn(0,0,We,le);let Wt=!1;const dt=new VS;let vt=!1,It=!1;const ht=new sn,kt=new re,Zt=new tn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Xt(){return q===null?fe:1}let X=i;function un(C,G){return t.getContext(C,G)}let bt,k,w,J,oe,he,Ee,be,pe,ge,Pe,Ke,De,Ae,Ze,nt,st,H,Ce,me,Re,Fe,ve;try{const C={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${um}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",En,!1),X===null){const G="webgl2";if(X=un(G,C),X===null)throw un(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),Dt("WebGLRenderer: "+C.message),C}function Qe(){bt=new U3(X),bt.init(),Re=new AL(X,bt),k=new T3(X,bt,e,Re),w=new wL(X,bt),k.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),Z=X.createFramebuffer(),W=X.createFramebuffer(),Q=X.createFramebuffer(),J=new O3(X),oe=new uL,he=new TL(X,bt,w,oe,k,Re,J),Ee=new I3(O),be=new zR(X),Fe=new E3(X,be),pe=new F3(X,be,J,Fe),ge=new z3(X,pe,be,Fe,J),H=new B3(X,k,he),Ze=new A3(oe),Pe=new cL(O,Ee,bt,k,Fe,Ze),Ke=new LL(O,oe),De=new dL,Ae=new xL(bt),st=new M3(O,Ee,w,ge,M,d),nt=new EL(O,ge,k),ve=new NL(X,J,k,w),Ce=new w3(X,bt,J),me=new k3(X,bt,J),J.programs=Pe.programs,O.capabilities=k,O.extensions=bt,O.properties=oe,O.renderLists=De,O.shadowMap=nt,O.state=w,O.info=J}A!==yi&&(L=new H3(A,t.width,t.height,u,a,o));const $e=new PL(O,X);this.xr=$e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(We,le,!1))},this.getSize=function(C){return C.set(We,le)},this.setSize=function(C,G,ce=!0){if($e.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}We=C,le=G,t.width=Math.floor(C*fe),t.height=Math.floor(G*fe),ce===!0&&(t.style.width=C+"px",t.style.height=G+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(We*fe,le*fe).floor()},this.setDrawingBufferSize=function(C,G,ce){We=C,le=G,fe=ce,t.width=Math.floor(C*ce),t.height=Math.floor(G*ce),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(A===yi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(ke)},this.setViewport=function(C,G,ce,te){C.isVector4?ke.set(C.x,C.y,C.z,C.w):ke.set(C,G,ce,te),w.viewport(U.copy(ke).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,G,ce,te){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,G,ce,te),w.scissor(se.copy(ft).multiplyScalar(fe).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(C){w.setScissorTest(Wt=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ce=!0){let te=0;if(C){let ee=!1;if(q!==null){const Ie=q.texture.format;ee=S.has(Ie)}if(ee){const Ie=q.texture.type,Le=y.has(Ie),Ne=st.getClearColor(),Xe=st.getClearAlpha(),Je=Ne.r,lt=Ne.g,ut=Ne.b;Le?(R[0]=Je,R[1]=lt,R[2]=ut,R[3]=Xe,X.clearBufferuiv(X.COLOR,0,R)):(I[0]=Je,I[1]=lt,I[2]=ut,I[3]=Xe,X.clearBufferiv(X.COLOR,0,I))}else te|=X.COLOR_BUFFER_BIT}G&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),$=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),st.dispose(),De.dispose(),Ae.dispose(),oe.dispose(),Ee.dispose(),ge.dispose(),Fe.dispose(),ve.dispose(),Pe.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ol),$e.removeEventListener("sessionend",ll),Fn.stop()};function Ct(C){C.preventDefault(),Nx("WebGLRenderer: Context Lost."),z=!0}function Mt(){Nx("WebGLRenderer: Context Restored."),z=!1;const C=J.autoReset,G=nt.enabled,ce=nt.autoUpdate,te=nt.needsUpdate,ee=nt.type;Qe(),J.autoReset=C,nt.enabled=G,nt.autoUpdate=ce,nt.needsUpdate=te,nt.type=ee}function En(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ci(C){const G=C.target;G.removeEventListener("dispose",ci),rs(G)}function rs(C){Bs(C),oe.remove(C)}function Bs(C){const G=oe.get(C).programs;G!==void 0&&(G.forEach(function(ce){Pe.releaseProgram(ce)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ce,te,ee,Ie){G===null&&(G=an);const Le=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ne=$t(C,G,ce,te,ee);w.setMaterial(te,Le);let Xe=ce.index,Je=1;if(te.wireframe===!0){if(Xe=pe.getWireframeAttribute(ce),Xe===void 0)return;Je=2}const lt=ce.drawRange,ut=ce.attributes.position;let ze=lt.start*Je,xt=(lt.start+lt.count)*Je;Ie!==null&&(ze=Math.max(ze,Ie.start*Je),xt=Math.min(xt,(Ie.start+Ie.count)*Je)),Xe!==null?(ze=Math.max(ze,0),xt=Math.min(xt,Xe.count)):ut!=null&&(ze=Math.max(ze,0),xt=Math.min(xt,ut.count));const Jt=xt-ze;if(Jt<0||Jt===1/0)return;Fe.setup(ee,te,Ne,ce,Xe);let Ot,Lt=Ce;if(Xe!==null&&(Ot=be.get(Xe),Lt=me,Lt.setIndex(Ot)),ee.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*Xt()),Lt.setMode(X.LINES)):Lt.setMode(X.TRIANGLES);else if(ee.isLine){let fn=te.linewidth;fn===void 0&&(fn=1),w.setLineWidth(fn*Xt()),ee.isLineSegments?Lt.setMode(X.LINES):ee.isLineLoop?Lt.setMode(X.LINE_LOOP):Lt.setMode(X.LINE_STRIP)}else ee.isPoints?Lt.setMode(X.POINTS):ee.isSprite&&Lt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const fn=ee._multiDrawStarts,Oe=ee._multiDrawCounts,nn=ee._multiDrawCount,_t=Xe?be.get(Xe).bytesPerElement:1,Cn=oe.get(te).currentProgram.getUniforms();for(let pt=0;pt<nn;pt++)Cn.setValue(X,"_gl_DrawID",pt),Lt.render(fn[pt]/_t,Oe[pt])}else if(ee.isInstancedMesh)Lt.renderInstances(ze,Jt,ee.count);else if(ce.isInstancedBufferGeometry){const fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Oe=Math.min(ce.instanceCount,fn);Lt.renderInstances(ze,Jt,Oe)}else Lt.render(ze,Jt)};function ss(C,G,ce,te){$!==null&&C.isNodeMaterial&&$.setObject(te,C),vt===!0&&Ze.setState(C,ce,!1),C.transparent===!0&&C.side===Er&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,ls(C,G,te),C.side=Is,C.needsUpdate=!0,ls(C,G,te),C.side=Er):ls(C,G,te)}this.compile=function(C,G,ce=null){ce===null&&(ce=C),$!==null&&$.renderStart(C,G,ce),N=Ae.get(ce),N.init(G),E.push(N),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),C!==ce&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights(),$!==null&&$.updateLights(N.state.lightsArray),It=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,It),vt===!0&&Ze.setGlobalState(this.clippingPlanes,G),$!==null&&nt.render(N.state.shadowsArray,ce,G);const te=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Le=0;Le<Ie.length;Le++){const Ne=Ie[Le];ss(Ne,ce,G,ee),te.add(Ne)}else ss(Ie,ce,G,ee),te.add(Ie)}),N=E.pop(),$!==null&&$.renderEnd(),te},this.compileAsync=function(C,G,ce=null){const te=this.compile(C,G,ce);return new Promise(ee=>{function Ie(){if(te.forEach(function(Le){const Xe=oe.get(Le).currentProgram;(Xe===void 0||Xe.isReady())&&te.delete(Le)}),te.size===0){ee(C);return}setTimeout(Ie,10)}bt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let as=null;function Iu(C){as&&as(C)}function ol(){Fn.stop()}function ll(){Fn.start()}const Fn=new $S;Fn.setAnimationLoop(Iu),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(C){as=C,$e.setAnimationLoop(C),C===null?Fn.stop():Fn.start()},$e.addEventListener("sessionstart",ol),$e.addEventListener("sessionend",ll),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(C,G);const ce=$e.enabled===!0&&$e.isPresenting===!0,te=L!==null&&(q===null||ce)&&L.begin(O,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(G),G=$e.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,G,q),N=Ae.get(C,E.length),N.init(G),N.state.textureUnits=he.getTextureUnits(),E.push(N),ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),dt.setFromProjectionMatrix(ht,nr,G.reversedDepth),It=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,It),D=De.get(C,F.length),D.init(),F.push(D),$e.enabled===!0&&$e.isPresenting===!0){const Le=O.xr.getDepthSensingMesh();Le!==null&&zs(Le,G,-1/0,O.sortObjects)}zs(C,G,0,O.sortObjects),D.finish(),$!==null&&$.updateLights(N.state.lightsArray),O.sortObjects===!0&&D.sort(we,tt),Nt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Nt&&st.addToRenderList(D,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const ee=N.state.shadowsArray;if(nt.render(ee,C,G),vt===!0&&Ze.endShadows(),(te&&L.hasRenderPass())===!1){const Le=D.opaque,Ne=D.transmissive;if(N.setupLights(),G.isArrayCamera){const Xe=G.cameras;if(Ne.length>0)for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];cl(Le,Ne,C,ut)}Nt&&st.render(C);for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];Ha(D,C,ut,ut.viewport)}}else Ne.length>0&&cl(Le,Ne,C,G),Nt&&st.render(C),Ha(D,C,G)}q!==null&&ie===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),te&&L.end(O),C.isScene===!0&&C.onAfterRender(O,C,G),Fe.resetDefaultState(),Y=-1,K=null,E.pop(),E.length>0?(N=E[E.length-1],he.setTextureUnits(N.state.textureUnits),vt===!0&&Ze.setGlobalState(O.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?D=F[F.length-1]:D=null,$!==null&&$.renderEnd()};function zs(C,G,ce,te){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(dt)){te&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Le=ge.update(C),Ne=C.material;Ne.visible&&D.push(C,Le,Ne,ce,Zt.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(dt))){const Le=ge.update(C),Ne=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Zt.copy(Le.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Ne)){const Xe=Le.groups;for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je],ze=Ne[ut.materialIndex];ze&&ze.visible&&D.push(C,Le,ze,ce,Zt.z,ut,G)}}else Ne.visible&&D.push(C,Le,Ne,ce,Zt.z,null,G)}}const Ie=C.children;for(let Le=0,Ne=Ie.length;Le<Ne;Le++)zs(Ie[Le],G,ce,te)}function Ha(C,G,ce,te){const{opaque:ee,transmissive:Ie,transparent:Le}=C;N.setupLightsView(ce),vt===!0&&Ze.setGlobalState(O.clippingPlanes,ce),te&&w.viewport(U.copy(te)),ee.length>0&&os(ee,G,ce),Ie.length>0&&os(Ie,G,ce),Le.length>0&&os(Le,G,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function cl(C,G,ce,te){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[te.id]===void 0){const ze=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[te.id]=new Hi(1,1,{generateMipmaps:!0,type:ze?ar:yi,minFilter:Ps,samples:Math.max(4,k.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[te.id],Le=te.viewport||U;Ie.setSize(Le.z*O.transmissionResolutionScale,Le.w*O.transmissionResolutionScale);const Ne=O.getRenderTarget(),Xe=O.getActiveCubeFace(),Je=O.getActiveMipmapLevel();O.setRenderTarget(Ie),O.getClearColor(Ge),Ve=O.getClearAlpha(),Ve<1&&O.setClearColor(16777215,.5),O.clear(),Nt&&st.render(ce);const lt=O.toneMapping;O.toneMapping=rr;const ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),N.setupLightsView(te),vt===!0&&Ze.setGlobalState(O.clippingPlanes,te),os(C,ce,te),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),bt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xt=0,Jt=G.length;xt<Jt;xt++){const Ot=G[xt],{object:Lt,geometry:fn,material:Oe,group:nn}=Ot;if(Oe.side===Er&&Lt.layers.test(te.layers)){const _t=Oe.side;Oe.side=Jn,Oe.needsUpdate=!0,Ga(Lt,ce,te,fn,Oe,nn),Oe.side=_t,Oe.needsUpdate=!0,ze=!0}}ze===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}O.setRenderTarget(Ne,Xe,Je),O.setClearColor(Ge,Ve),ut!==void 0&&(te.viewport=ut),O.toneMapping=lt}function os(C,G,ce){const te=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ie=C.length;ee<Ie;ee++){const Le=C[ee],{object:Ne,geometry:Xe,group:Je}=Le;let lt=Le.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ne.layers.test(ce.layers)&&Ga(Ne,G,ce,Xe,lt,Je)}}function Ga(C,G,ce,te,ee,Ie){$!==null&&ee.isNodeMaterial&&$.setObject(C,ee),C.onBeforeRender(O,G,ce,te,ee,Ie),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(O,G,ce,te,C,Ie),ee.transparent===!0&&ee.side===Er&&ee.forceSinglePass===!1?(ee.side=Jn,ee.needsUpdate=!0,O.renderBufferDirect(ce,G,te,ee,C,Ie),ee.side=Is,ee.needsUpdate=!0,O.renderBufferDirect(ce,G,te,ee,C,Ie),ee.side=Er):O.renderBufferDirect(ce,G,te,ee,C,Ie),C.onAfterRender(O,G,ce,te,ee,Ie)}function ls(C,G,ce){G.isScene!==!0&&(G=an);const te=oe.get(C),ee=N.state.lights,Ie=N.state.shadowsArray,Le=ee.state.version,Ne=Pe.getParameters(C,ee.state,Ie,G,ce,N.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ne);let Je=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=Ee.get(C.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",ci),Je=new Map,te.programs=Je);let ut=Je.get(Xe);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===Le)return ul(C,Ne),ut}else Ne.uniforms=Pe.getUniforms(C),$!==null&&C.isNodeMaterial&&$.build(C,ce,Ne),C.onBeforeCompile(Ne,O),ut=Pe.acquireProgram(Ne,Xe),Je.set(Xe,ut),te.uniforms=Ne.uniforms;const ze=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=Ze.uniform),ul(C,Ne),te.needsLights=Xa(C),te.lightsStateVersion=Le,te.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.sunLights.value=ee.state.sun,ze.sunLightShadows.value=ee.state.sunShadow,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.sunShadowMatrix.value=ee.state.sunShadowMatrix,ze.sunShadowCascade.value=ee.state.sunShadowCascade,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=N.state.lightProbeGridArray.length>0,te.currentProgram=ut,te.uniformsList=null,ut}function Wa(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=tu.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ul(C,G){const ce=oe.get(C);ce.outputColorSpace=G.outputColorSpace,ce.batching=G.batching,ce.batchingColor=G.batchingColor,ce.instancing=G.instancing,ce.instancingColor=G.instancingColor,ce.instancingMorph=G.instancingMorph,ce.skinning=G.skinning,ce.morphTargets=G.morphTargets,ce.morphNormals=G.morphNormals,ce.morphColors=G.morphColors,ce.morphTargetsCount=G.morphTargetsCount,ce.numClippingPlanes=G.numClippingPlanes,ce.numIntersection=G.numClipIntersection,ce.vertexAlphas=G.vertexAlphas,ce.vertexTangents=G.vertexTangents,ce.toneMapping=G.toneMapping}function Uu(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;T.setFromMatrixPosition(G.matrixWorld);for(let ce=0,te=C.length;ce<te;ce++){const ee=C[ce];if(ee.texture!==null&&ee.boundingBox.containsPoint(T))return ee}return null}function $t(C,G,ce,te,ee){G.isScene!==!0&&(G=an),he.resetTextureUnits();const Ie=G.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,Ne=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:yt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Je=Ee.get(te.envMap||Le,Xe),lt=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!ce.morphAttributes.position,xt=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ot=rr;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ot=O.toneMapping);const Lt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,fn=Lt!==void 0?Lt.length:0,Oe=oe.get(te),nn=N.state.lights;if(vt===!0&&(It===!0||C!==K)){const Ut=C===K&&te.id===Y;Ze.setState(te,C,Ut)}let _t=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==nn.state.version||Oe.outputColorSpace!==Ne||ee.isBatchedMesh&&Oe.batching===!1||!ee.isBatchedMesh&&Oe.batching===!0||ee.isBatchedMesh&&Oe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Oe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||ee.isInstancedMesh&&Oe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Oe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Oe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Oe.instancingMorph===!1&&ee.morphTexture!==null||Oe.envMap!==Je||te.fog===!0&&Oe.fog!==Ie||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ze.numPlanes||Oe.numIntersection!==Ze.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==ut||Oe.morphTargets!==ze||Oe.morphNormals!==xt||Oe.morphColors!==Jt||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==fn||!!Oe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Oe.__version=te.version);let Cn=Oe.currentProgram;_t===!0&&(Cn=ls(te,G,ee),$&&te.isNodeMaterial&&$.onUpdateProgram(te,Cn,Oe));let pt=!1,Ei=!1,lr=!1;const Rt=Cn.getUniforms(),jt=Oe.uniforms;if(w.useProgram(Cn.program)&&(pt=!0,Ei=!0,lr=!0),te.id!==Y&&(Y=te.id,Ei=!0),Oe.needsLights){const Ut=Uu(N.state.lightProbeGridArray,ee);Oe.lightProbeGrid!==Ut&&(Oe.lightProbeGrid=Ut,Ei=!0)}if(pt||K!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(X,"projectionMatrix",C.projectionMatrix),Rt.setValue(X,"viewMatrix",C.matrixWorldInverse);const ui=Rt.map.cameraPosition;ui!==void 0&&ui.setValue(X,kt.setFromMatrixPosition(C.matrixWorld)),k.logarithmicDepthBuffer&&Rt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,Ei=!0,lr=!0)}if(Oe.needsLights&&(nn.state.sunShadowMap.length>0&&Rt.setValue(X,"sunShadowMap",nn.state.sunShadowMap,he),nn.state.directionalShadowMap.length>0&&Rt.setValue(X,"directionalShadowMap",nn.state.directionalShadowMap,he),nn.state.spotShadowMap.length>0&&Rt.setValue(X,"spotShadowMap",nn.state.spotShadowMap,he),nn.state.pointShadowMap.length>0&&Rt.setValue(X,"pointShadowMap",nn.state.pointShadowMap,he)),ee.isSkinnedMesh){Rt.setOptional(X,ee,"bindMatrix"),Rt.setOptional(X,ee,"bindMatrixInverse");const Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Rt.setValue(X,"boneTexture",Ut.boneTexture,he))}ee.isBatchedMesh&&(Rt.setOptional(X,ee,"batchingTexture"),Rt.setValue(X,"batchingTexture",ee._matricesTexture,he),Rt.setOptional(X,ee,"batchingIdTexture"),Rt.setValue(X,"batchingIdTexture",ee._indirectTexture,he),Rt.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Rt.setValue(X,"batchingColorTexture",ee._colorsTexture,he));const wi=ce.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&H.update(ee,ce,Cn),(Ei||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,Rt.setValue(X,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=UL()),Ei){if(Rt.setValue(X,"toneMappingExposure",O.toneMappingExposure),Oe.needsLights&&Fu(jt,lr),Ie&&te.fog===!0&&Ke.refreshFogUniforms(jt,Ie),Ke.refreshMaterialUniforms(jt,te,fe,le,N.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.lightProbeGrid){const Ut=Oe.lightProbeGrid;jt.probesSH.value=Ut.texture,jt.probesMin.value.copy(Ut.boundingBox.min),jt.probesMax.value.copy(Ut.boundingBox.max),jt.probesResolution.value.copy(Ut.resolution)}tu.upload(X,Wa(Oe),jt,he)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(tu.upload(X,Wa(Oe),jt,he),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(X,"center",ee.center),Rt.setValue(X,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(X,"normalMatrix",ee.normalMatrix),Rt.setValue(X,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let ui=0,Ti=Ut.length;ui<Ti;ui++){const Ai=Ut[ui];ve.update(Ai,Cn),ve.bind(Ai,Cn)}}return Cn}function Fu(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Xa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,G,ce){const te=oe.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=G,oe.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ce,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const ce=oe.get(C);ce.__webglFramebuffer=G,ce.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ce=0){q=C,de=G,ie=ce;let te=null,ee=!1,Ie=!1;if(C){const Ne=oe.get(C);if(Ne.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Ne.__webglFramebuffer),U.copy(C.viewport),se.copy(C.scissor),Se=C.scissorTest,w.viewport(U),w.scissor(se),w.setScissorTest(Se),Y=-1;return}else if(Ne.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Ne.__hasExternalTextures)he.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ne.__boundDepthTexture!==lt){if(lt!==null&&oe.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Je=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?te=Je[G][ce]:te=Je[G],ee=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?te=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?te=Je[ce]:te=Je,U.copy(C.viewport),se.copy(C.scissor),Se=C.scissorTest}else U.copy(ke).multiplyScalar(fe).floor(),se.copy(ft).multiplyScalar(fe).floor(),Se=Wt;if(ce!==0&&(te=Z),w.bindFramebuffer(X.FRAMEBUFFER,te)&&w.drawBuffers(C,te),w.viewport(U),w.scissor(se),w.setScissorTest(Se),ee){const Ne=oe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,ce)}else if(Ie){const Ne=G;for(let Xe=0;Xe<C.textures.length;Xe++){const Je=oe.get(C.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,ce,Ne)}}else if(C!==null&&ce!==0){const Ne=oe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ne.__webglTexture,ce)}Y=-1};function ja(C){const G=oe.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=k.textureFormatReadable(C.format),G.__typeReadable=k.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,ce,te,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe){w.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Je=C.textures[Ne],lt=Je.format,ut=Je.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const ze=ja(Je);if(ze.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-te&&ce>=0&&ce<=C.height-ee&&X.readPixels(G,ce,te,ee,Re.convert(lt),Re.convert(ut),Ie)}finally{const Je=q!==null?oe.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,G,ce,te,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe)if(G>=0&&G<=C.width-te&&ce>=0&&ce<=C.height-ee){w.bindFramebuffer(X.FRAMEBUFFER,Xe);const Je=C.textures[Ne],lt=Je.format,ut=Je.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const ze=ja(Je);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.bufferData(X.PIXEL_PACK_BUFFER,Ie.byteLength,X.STREAM_READ),X.readPixels(G,ce,te,ee,Re.convert(lt),Re.convert(ut),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Jt=q!==null?oe.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Jt);const Ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tR(X,Ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ie),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(xt),X.deleteSync(Ot),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ce=0){const te=Math.pow(2,-ce),ee=Math.floor(C.image.width*te),Ie=Math.floor(C.image.height*te),Le=G!==null?G.x:0,Ne=G!==null?G.y:0;he.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Le,Ne,ee,Ie),w.unbindTexture()},this.copyTextureToTexture=function(C,G,ce=null,te=null,ee=0,Ie=0){let Le,Ne,Xe,Je,lt,ut,ze,xt,Jt;const Ot=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ce!==null)Le=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,lt=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-ee);Le=Math.floor(Ot.width*jt),Ne=Math.floor(Ot.height*jt),C.isDataArrayTexture?Xe=Ot.depth:C.isData3DTexture?Xe=Math.floor(Ot.depth*jt):Xe=1,Je=0,lt=0,ut=0}te!==null?(ze=te.x,xt=te.y,Jt=te.z):(ze=0,xt=0,Jt=0);const Lt=Re.convert(G.format),fn=Re.convert(G.type);let Oe;G.isData3DTexture?(he.setTexture3D(G,0),Oe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(he.setTexture2DArray(G,0),Oe=X.TEXTURE_2D_ARRAY):(he.setTexture2D(G,0),Oe=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const nn=w.getParameter(X.UNPACK_ROW_LENGTH),_t=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Cn=w.getParameter(X.UNPACK_SKIP_PIXELS),pt=w.getParameter(X.UNPACK_SKIP_ROWS),Ei=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(X.UNPACK_SKIP_ROWS,lt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const lr=C.isDataArrayTexture||C.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const jt=oe.get(C),wi=oe.get(G),Ut=oe.get(jt.__renderTarget),ui=oe.get(wi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Ut.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ti=0;Ti<Xe;Ti++)lr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,ee,ut+Ti),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,oe.get(G).__webglTexture,Ie,Jt+Ti)),X.blitFramebuffer(Je,lt,Le,Ne,ze,xt,Le,Ne,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||oe.has(C)){const jt=oe.get(C),wi=oe.get(G);w.bindFramebuffer(X.READ_FRAMEBUFFER,W),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Q);for(let Ut=0;Ut<Xe;Ut++)lr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.__webglTexture,ee,ut+Ut):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,jt.__webglTexture,ee),Rt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wi.__webglTexture,Ie,Jt+Ut):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wi.__webglTexture,Ie),ee!==0?X.blitFramebuffer(Je,lt,Le,Ne,ze,xt,Le,Ne,X.COLOR_BUFFER_BIT,X.NEAREST):Rt?X.copyTexSubImage3D(Oe,Ie,ze,xt,Jt+Ut,Je,lt,Le,Ne):X.copyTexSubImage2D(Oe,Ie,ze,xt,Je,lt,Le,Ne);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,fn,Ot.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,Ot.data):X.texSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,fn,Ot):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Le,Ne,Lt,fn,Ot.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Ot.width,Ot.height,Lt,Ot.data):X.texSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Le,Ne,Lt,fn,Ot);w.pixelStorei(X.UNPACK_ROW_LENGTH,nn),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_t),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Cn),w.pixelStorei(X.UNPACK_SKIP_ROWS,pt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Ei),Ie===0&&G.generateMipmaps&&X.generateMipmap(Oe),w.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){de=0,ie=0,q=null,w.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const kL=()=>{const n=xe.useRef(null);return xe.useEffect(()=>{const e=n.current;if(!e)return;const t=new vR,i=new _i(60,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=25;const a=new FL({alpha:!0,antialias:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(a.domElement);const o=200,c=new li,u=new Float32Array(o*3),d=new Float32Array(o*3),h=new Et(11927720),p=new Et(7741872),v=new Et(3718648);for(let Z=0;Z<o;Z++){u[Z*3]=(Math.random()-.5)*50,u[Z*3+1]=(Math.random()-.5)*35,u[Z*3+2]=(Math.random()-.5)*30;const W=Z%3===0?h:Z%3===1?p:v;d[Z*3]=W.r,d[Z*3+1]=W.g,d[Z*3+2]=W.b}c.setAttribute("position",new Gi(u,3)),c.setAttribute("color",new Gi(d,3));const g=new HS({size:.28,vertexColors:!0,transparent:!0,opacity:.65,blending:Vh}),_=new bR(c,g);t.add(_);const M=new Mm(8,.08,16,100),A=new _u({color:7741872,wireframe:!0,transparent:!0,opacity:.35}),S=new Xi(M,A);S.rotation.x=Math.PI/3,t.add(S);const y=new Sm(5,1),R=new _u({color:11927720,wireframe:!0,transparent:!0,opacity:.2}),I=new Xi(y,R);t.add(I);let T=0,D=0,N=0,F=0;const E=Z=>{N=(Z.clientX/window.innerWidth-.5)*2,F=(Z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",E,{passive:!0});const L=()=>{e&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",L);let O,z=new OR;const $=()=>{O=requestAnimationFrame($);const Z=z.getElapsedTime();T+=(N-T)*.05,D+=(F-D)*.05,_.rotation.y=Z*.04+T*.2,_.rotation.x=Z*.02-D*.2,S.rotation.z=Z*.15,S.rotation.y=T*.4,S.rotation.x=Math.PI/3+D*.3,I.rotation.y=-Z*.1+T*.3,I.rotation.x=Z*.08-D*.3,i.position.x=T*2,i.position.y=-D*2,i.lookAt(t.position),a.render(t,i)};return $(),()=>{cancelAnimationFrame(O),window.removeEventListener("mousemove",E),window.removeEventListener("resize",L),e&&a.domElement&&e.removeChild(a.domElement),c.dispose(),g.dispose(),M.dispose(),A.dispose(),y.dispose(),R.dispose(),a.dispose()}},[]),P.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80",style:{willChange:"transform"}})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nM=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=xe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:o,iconNode:c,...u},d)=>xe.createElement("svg",{ref:d,...BL,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:nM("lucide",a),...u},[...c.map(([h,p])=>xe.createElement(h,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(n,e)=>{const t=xe.forwardRef(({className:i,...a},o)=>xe.createElement(zL,{ref:o,iconNode:e,className:nM(`lucide-${OL(n)}`,i),...a}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],HL=Vt("Activity",VL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],WL=Vt("ArrowUpRight",GL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],jL=Vt("ArrowUp",XL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],$L=Vt("Box",YL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],KL=Vt("BrainCircuit",qL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],JL=Vt("Briefcase",ZL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],eN=Vt("Calendar",QL);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yu=Vt("Check",tN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],iN=Vt("CircleCheckBig",nN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],iM=Vt("CircleCheck",rN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],E_=Vt("Copy",sN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],oN=Vt("Cpu",aN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],cN=Vt("ExternalLink",lN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],rM=Vt("Github",uN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],dN=Vt("GraduationCap",fN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],sM=Vt("Linkedin",hN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],aM=Vt("Mail",pN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Em=Vt("MapPin",mN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],oM=Vt("Phone",gN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],xN=Vt("Send",vN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],yN=Vt("Server",_N);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],MN=Vt("ShieldCheck",SN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],lM=Vt("Smartphone",EN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],cM=Vt("Sparkles",wN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],AN=Vt("Terminal",TN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],CN=Vt("X",bN),RN={waving:{src:"/Amy-websitesi/anil_waving.jpg",title:"El Sallayan 3D Anıl",label:"👋 El Sallayan 3D",bubble:"Selam! Hoş geldin, Ben Anıl",badgeIcon:"👋"},studio:{src:"/Amy-websitesi/anil_avatar.jpg",title:"Siber Stüdyo Portresi",label:"⚡ Siber Stüdyo 3D",bubble:"Anıl Mete • Full-Stack & 3D",badgeIcon:"⚡"}},PN=({currentModel:n,onSelectModel:e})=>{const t=xe.useRef(null),i=xe.useRef(null),a=xe.useRef(null),[o,c]=xe.useState(!1),u=xe.useRef({x:0,y:0,targetX:0,targetY:0}),d=xe.useRef(null),h=xe.useCallback(()=>{const{x:M,y:A,targetX:S,targetY:y}=u.current,R=M+(S-M)*.12,I=A+(y-A)*.12;if(u.current.x=R,u.current.y=I,i.current&&(i.current.style.transform=`perspective(1000px) rotateX(${R}deg) rotateY(${I}deg) scale3d(1.02, 1.02, 1.02)`),a.current){const T=50+I*3,D=50-R*3;a.current.style.background=`radial-gradient(circle at ${T}% ${D}%, rgba(255,255,255,0.3) 0%, rgba(182,0,168,0.2) 30%, transparent 70%)`}d.current=requestAnimationFrame(h)},[]);xe.useEffect(()=>(d.current=requestAnimationFrame(h),()=>{d.current&&cancelAnimationFrame(d.current)}),[h]);const p=M=>{if(!t.current)return;const A=t.current.getBoundingClientRect(),S=A.left+A.width/2,y=A.top+A.height/2,R=M.clientX-S,I=M.clientY-y,T=R/(A.width/2)*14,D=-(I/(A.height/2))*14;u.current.targetX=D,u.current.targetY=T},v=()=>c(!0),g=()=>{c(!1),u.current.targetX=0,u.current.targetY=0},_=RN[n];return P.jsxs("div",{ref:t,onMouseMove:p,onMouseEnter:v,onMouseLeave:g,className:"relative flex flex-col items-center select-none z-30",style:{perspective:1200},children:[P.jsxs(mn.div,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.3},className:"mb-2 z-40 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16181D]/90 border border-[#B600A8]/60 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-md",children:[P.jsx("span",{className:"text-base animate-bounce",children:_.badgeIcon}),P.jsx("span",{className:"bg-gradient-to-r from-white via-[#D7E2EA] to-[#B600A8] bg-clip-text text-transparent",children:_.bubble})]},`bubble-${n}`),P.jsxs("div",{ref:i,onClick:()=>e(n==="waving"?"studio":"waving"),className:"relative rounded-3xl overflow-visible transition-shadow duration-300 cursor-pointer group",title:"Diğer 3D modele geçmek için tıkla",style:{transformStyle:"preserve-3d",willChange:"transform"},children:[P.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/30 to-[#38bdf8]/20 rounded-full blur-2xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity"}),P.jsx("div",{ref:a,className:"absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-overlay transition-opacity duration-300",style:{opacity:o?1:.45}}),P.jsxs("div",{className:"absolute top-8 -left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-purple-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(45px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(lM,{className:"w-3.5 h-3.5 text-purple-400"}),P.jsx("span",{children:"Flutter & Mobil"})]}),P.jsxs("div",{className:"absolute top-12 -right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-cyan-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(50px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(oN,{className:"w-3.5 h-3.5 text-cyan-400"}),P.jsx("span",{children:"PyTorch AI"})]}),P.jsxs("div",{className:"absolute bottom-8 -right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-[#B600A8]/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(40px) scale(1.05)":"translateZ(15px)"},children:[P.jsx(AN,{className:"w-3.5 h-3.5 text-pink-400"}),P.jsx("span",{children:"ASP.NET Core"})]}),P.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0C] shadow-2xl",children:[P.jsx(sm,{mode:"wait",children:P.jsx(mn.img,{src:_.src,alt:_.title,initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:{duration:.3},className:"w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] xl:w-[400px] max-h-[50vh] sm:max-h-[54vh] object-cover pointer-events-none drop-shadow-[0_25px_60px_rgba(182,0,168,0.35)]"},n)}),P.jsx("div",{className:"absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none"})]})]}),P.jsxs("div",{className:"mt-4 p-1.5 rounded-full bg-[#121316]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-1 z-50 pointer-events-auto",children:[P.jsxs("button",{onClick:M=>{M.stopPropagation(),e("waving")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${n==="waving"?"bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"👋 El Sallayan"}),n==="waving"&&P.jsx(yu,{className:"w-3.5 h-3.5"})]}),P.jsxs("button",{onClick:M=>{M.stopPropagation(),e("studio")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${n==="studio"?"bg-gradient-to-r from-[#7621B0] to-cyan-600 text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"⚡ Stüdyo Modu"}),n==="studio"&&P.jsx(yu,{className:"w-3.5 h-3.5"})]})]})]})},DN=({onOpenContact:n})=>{const[e,t]=xe.useState("waving"),i=a=>{const o=document.getElementById(a);o&&o.scrollIntoView({behavior:"smooth"})};return P.jsxs("section",{className:"relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none",children:[P.jsx(kL,{}),P.jsxs(mn.nav,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.7,delay:0,ease:[.25,.1,.25,1]},className:"w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30 relative",children:[P.jsx("button",{onClick:()=>i("about"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hakkımda"}),P.jsx("button",{onClick:()=>i("services"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hizmetler"}),P.jsx("button",{onClick:()=>i("projects"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Projeler"}),P.jsx("button",{onClick:()=>i("experience"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer hidden sm:block",children:"Deneyim"}),P.jsx("button",{onClick:n,className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"İletişim"})]}),P.jsx("div",{className:"w-full overflow-hidden text-center z-0 pointer-events-none px-4 mt-2 sm:mt-4 md:mt-6 mb-auto pt-1 sm:pt-3",children:P.jsx(mn.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.15,ease:[.25,.1,.25,1]},className:"hero-heading font-black uppercase tracking-tight leading-tight w-full max-w-7xl mx-auto select-none drop-shadow-xl text-[7.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[9.5vw]",children:"SELAM, BEN ANIL"})}),P.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 z-30 bottom-2 sm:bottom-4 md:bottom-5 pointer-events-auto",children:P.jsx(mn.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},children:P.jsx(PN,{currentModel:e,onSelectModel:a=>t(a)})})}),P.jsxs("div",{className:"w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 relative pointer-events-none",children:[P.jsxs(mn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},className:"w-auto max-w-[210px] sm:max-w-[240px] md:max-w-[260px] p-3 sm:p-3.5 rounded-2xl bg-[#121316]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2 pointer-events-auto",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"relative flex h-2.5 w-2.5 flex-shrink-0",children:[P.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),P.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),P.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap",children:"Yeni Projelere Açık"})]}),P.jsxs("p",{className:"text-[11px] sm:text-xs text-[#D7E2EA] font-light leading-snug",children:["Yüksek performanslı ",P.jsx("strong",{className:"font-semibold text-white",children:"mobil"}),", ",P.jsx("strong",{className:"font-semibold text-white",children:"AI"})," ve ",P.jsx("strong",{className:"font-semibold text-white",children:"full-stack"})," sistemler."]}),P.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#D7E2EA]/60 pt-1.5 border-t border-white/5 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1 text-[#D7E2EA]/70",children:[P.jsx(Em,{className:"w-3 h-3 text-[#B600A8]"})," Mersin, TR"]}),P.jsx("span",{className:"text-cyan-400 font-semibold",children:"Flutter • AI"})]})]}),P.jsx(mn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5,ease:[.25,.1,.25,1]},className:"self-end pointer-events-auto",children:P.jsx(mS,{label:"İletişime Geç",onClick:n})})]})]})},dh=[{src:"https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",tag:"3D Web & Uzay",title:"Space Voyage"},{src:"https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",tag:"Full-Stack Kodlama",title:"CodeNest Cloud"},{src:"https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",tag:"Fintech & Dashboard",title:"Vex Ventures"},{src:"https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",tag:"Yapay Zeka & PyTorch",title:"Stellar AI Engine"},{src:"https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",tag:"Mobil Arayüz",title:"ASME Platform"},{src:"https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",tag:"Veri Analizi",title:"Data Transformer"},{src:"https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",tag:"3D Etkileşim",title:"Vitara Studio"},{src:"https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",tag:"Modern Web",title:"Terra Experience"}],hh=[{src:"https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",tag:"Mobil Sağlık",title:"SemptomAI Health"},{src:"https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",tag:"Bulut Mimarisi",title:"BirEmek Cloud"},{src:"https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",tag:"RESTful API",title:"NotTrack Architecture"},{src:"https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",tag:"Klinik Teşhis",title:"Klinik Karar Destek"},{src:"https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",tag:"3D Simülasyon",title:"Orbit 3D System"},{src:"https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",tag:"Yüksek Performans",title:"Luminex Core"},{src:"https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",tag:"Mobil Deneyim",title:"Celestia Mobile"}],LN=()=>P.jsxs("section",{className:"relative w-full overflow-hidden bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12",children:[P.jsx("div",{className:"absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsx("div",{className:"absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsxs("div",{className:"flex flex-col gap-4",children:[P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused]",children:[...dh,...dh,...dh].map((n,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:n.src,alt:n.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#B600A8]",children:n.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:n.title})]})]},`row1-${e}`))})}),P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused]",children:[...hh,...hh,...hh].map((n,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:n.src,alt:n.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-cyan-400",children:n.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:n.title})]})]},`row2-${e}`))})})]})]}),ai=({children:n,delay:e=0,duration:t=.7,x:i=0,y:a=30,className:o="",as:c="div"})=>{const u=mn[c]||mn.div;return P.jsx(u,{initial:{opacity:0,x:i,y:a},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"50px",amount:0},transition:{duration:t,delay:e,ease:[.25,.1,.25,1]},className:o,children:n})},NN=({word:n,progress:e,range:t})=>{const i=cm(e,t,[.2,1]);return P.jsxs("span",{className:"relative inline-block mx-1",children:[P.jsx("span",{className:"invisible",children:n}),P.jsx(mn.span,{style:{opacity:i},className:"absolute left-0 top-0 select-none text-[#D7E2EA]",children:n})]})},IN=({text:n,className:e=""})=>{const t=xe.useRef(null),{scrollYProgress:i}=hS({target:t,offset:["start 0.85","end 0.35"]}),a=n.split(" ");return P.jsx("p",{ref:t,className:`flex flex-wrap justify-center leading-relaxed ${e}`,children:a.map((o,c)=>{const u=c/a.length,d=Math.min(1,u+1/a.length);return P.jsx(NN,{word:o,progress:i,range:[u,d]},c)})})},UN=({onOpenContact:n})=>P.jsxs("section",{id:"about",className:"relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden",children:[P.jsx("div",{className:"absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0",children:P.jsx(ai,{delay:.1,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",alt:"3D Ay İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d"})})}),P.jsx("div",{className:"absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0",children:P.jsx(ai,{delay:.25,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",alt:"3D Dekoratif Obje",className:"w-[100px] sm:w-[140px] md:w-[180px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"1.5s"}})})}),P.jsx("div",{className:"absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0",children:P.jsx(ai,{delay:.15,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",alt:"3D Lego İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"2.5s"}})})}),P.jsx("div",{className:"absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0",children:P.jsx(ai,{delay:.3,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",alt:"3D Grup İkonu",className:"w-[130px] sm:w-[170px] md:w-[220px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"3.5s"}})})}),P.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-4xl text-center",children:[P.jsx(ai,{delay:0,y:40,duration:.7,children:P.jsx("h2",{className:"hero-heading font-black uppercase leading-none tracking-tight select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"HAKKIMDA"})}),P.jsx("div",{className:"h-10 sm:h-14 md:h-16"}),P.jsx("div",{className:"max-w-[700px] px-3 sm:px-6",children:P.jsx(IN,{text:"Mersin Üniversitesi Bilgisayar Mühendisliği öğrencisi ve üretime hazır sistemler kuran full-stack & mobil geliştiriciyim. BirEmek uygulamasını tek mühendis olarak sıfırdan mimarilendirip App Store ve Google Play yayın süreçlerini başarıyla tamamlamaktan, TÜBİTAK onaylı klinik karar destek yapay zeka sistemlerine ve yüksek performanslı ASP.NET Core API'lerine kadar uçtan uca mimariler kuruyorum. Kotlin, Flutter, PyTorch ve temiz kod prensipleriyle kullanıcı odaklı sistemler tasarlıyorum. Birlikte sıra dışı projeler inşa edelim!",className:"font-medium text-center leading-relaxed text-[#D7E2EA] text-base sm:text-lg md:text-xl"})}),P.jsx("div",{className:"h-14 sm:h-18 md:h-20"}),P.jsx(ai,{delay:.2,y:20,children:P.jsx(mS,{label:"İletişime Geç",onClick:n})})]})]}),FN=[{number:"01",title:"Mobil Uygulama Mühendisliği",tagline:"Flutter & Kotlin • App Store & Play Store",description:"Fikir aşamasından market yayın onayına kadar uçtan uca modern mobil mimariler. Özel reaktif arayüz bileşenleri, kararlı veri akışı ve sıfır çökme (crash-free) garantisiyle yüksek performanslı uygulamalar.",icon:lM,accentColor:"#B600A8",gradientText:"from-[#18011F] via-[#B600A8] to-[#7621B0]",deliverables:["App Store Connect & Google Play Console Uçtan Uca Yayın Yönetimi","Flutter & Dart ile Çift Platform (iOS & Android) Tek Kod Tabanı","Kotlin & Jetpack Compose ile Özel Android Arayüz (UI) Mimarisi"],techStack:["Flutter","Kotlin","Jetpack Compose","MVVM","Firebase","REST API"]},{number:"02",title:"Full-Stack & Backend Mimarisi",tagline:"ASP.NET Core • Katmanlı Mimari • Güvenli API",description:"Yüksek ölçekli ve kurumsal standartlarda backend servisleri. Katmanlı mimari desenleri, JWT tabanlı sıkı kimlik doğrulama, Swagger UI dokümantasyonu ve optimize edilmiş ilişkisel veritabanları.",icon:yN,accentColor:"#7621B0",gradientText:"from-[#7621B0] via-[#5B108B] to-[#3B0759]",deliverables:["ASP.NET Core & Entity Framework Core ile Katmanlı RESTful Servisler","JWT Kimlik Doğrulama & Rol Tabanlı Güvenlik Protokolleri","SQL Server & Firebase Gerçek Zamanlı Veritabanı Senkronizasyonu"],techStack:["ASP.NET Core","EF Core","C#","SQL Server","JWT Auth","Swagger UI"]},{number:"03",title:"Yapay Zeka & Sağlık Teknolojileri",tagline:"PyTorch • Derin Öğrenme • Çıkarım Motorları",description:"Python ve PyTorch kullanarak eğitilmiş derin öğrenme modellerinin backend API altyapılarına kesintisiz entegrasyonu. Gerçek zamanlı semptom analiz algoritmaları ve klinik karar destek sistemleri.",icon:KL,accentColor:"#0284C7",gradientText:"from-[#0369A1] via-[#0284C7] to-[#38BDF8]",deliverables:["PyTorch Derin Öğrenme Modelleri ve Yüksek Hızlı Çıkarım Motorları (Inference)","Gerçek Zamanlı Semptom ve Sağlık Verisi Analiz Algoritmaları","Python Yapay Zeka Servislerinin ASP.NET Core Backend ile Kesintisiz İletişimi"],techStack:["Python","PyTorch","Derin Öğrenme","Sağlık Teknolojileri","Veri Analizi"]},{number:"04",title:"3D & Etkileşimli Arayüz Tasarımı",tagline:"Three.js • WebGL • Mikro Etkileşimler",description:"Ziyaretçiyi ilk saniyede etkileyen dinamik 3D web sahneleri, parçacık alanları ve fizik tabanlı mikro etkileşimler. Figma tasarımlarını piksel hassasiyetinde, 60–120 FPS akıcılığında koda dökme.",icon:$L,accentColor:"#9333EA",gradientText:"from-[#9333EA] via-[#A855F7] to-[#C084FC]",deliverables:["Three.js ve WebGL ile Donanım Hızlandırmalı 3D Web Deneyimleri","Framer Motion ile Fizik Tabanlı Akıcı Mikro Animasyonlar","Figma Tasarımlarından Dönüşüm Odaklı ve Mobil Uyumlu UI Geliştirme"],techStack:["Three.js","WebGL","Framer Motion","Tailwind CSS","TypeScript"]},{number:"05",title:"Sistem Optimizasyonu & Temiz Mimari",tagline:"SOLID • Sıfır Çökme • Profiling",description:"Karmaşık kod tabanlarını basitleştirme, performans darboğazlarını giderme ve çökme analizi. Sürdürülebilir, test edilebilir ve SOLID prensiplerine tam uyumlu mühendislik çözümleri.",icon:MN,accentColor:"#059669",gradientText:"from-[#065F46] via-[#059669] to-[#10B981]",deliverables:["SOLID ve Clean Architecture Prensiplerine Dayalı Sürdürülebilir Kod","Kritik Çökme (Crash) Hatalarının Tespiti ve Performans Profiling","Uçtan Uca Test Süreçleri ve Sıfır Hata Odaklı Üretim Dağıtımı"],techStack:["Clean Architecture","SOLID","Postman","Git / GitHub","Profiling"]}],kN=()=>{const[n,e]=xe.useState(null);return P.jsx("section",{id:"services",className:"relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 z-0 shadow-2xl",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-16 sm:space-y-24",children:[P.jsx(ai,{delay:0,y:40,children:P.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]",children:[P.jsx(cM,{className:"w-3.5 h-3.5 text-[#B600A8]"}),P.jsx("span",{children:"Mühendislik & Tasarım Çözümleri"})]}),P.jsx("h2",{className:"text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight select-none",style:{fontSize:"clamp(2.8rem, 10vw, 150px)"},children:"HİZMETLER"}),P.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-[#0C0C0C]/70 font-light leading-relaxed",children:"Mobil uygulamalardan kurumsal API mimarilerine, yapay zeka modellerinden etkileşimli 3D web deneyimlerine kadar uçtan uca sunduğum uzmanlık alanları."})]})}),P.jsx("div",{className:"flex flex-col gap-6 sm:gap-8",children:FN.map((t,i)=>{const a=t.icon,o=n===i;return P.jsx(ai,{delay:i*.08,y:30,children:P.jsxs("div",{onMouseEnter:()=>e(i),onMouseLeave:()=>e(null),className:`group relative p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] border transition-all duration-500 cursor-pointer overflow-hidden ${o?"bg-gradient-to-br from-white via-[#FAF5FF] to-[#F3F4F6] border-purple-300 shadow-2xl -translate-y-1.5":"bg-[#F9FAFB] border-black/10 hover:border-black/20 shadow-sm"}`,children:[P.jsx("div",{className:`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${o?"opacity-30":"opacity-0"}`,style:{backgroundColor:t.accentColor}}),P.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8",children:[P.jsxs("div",{className:"flex items-center lg:flex-col lg:items-start justify-between lg:justify-start gap-4 lg:w-1/4",children:[P.jsx("div",{className:"flex items-baseline gap-3",children:P.jsx("span",{className:`font-black tracking-tight leading-none transition-all duration-300 select-none ${o?`bg-gradient-to-r ${t.gradientText} bg-clip-text text-transparent scale-105`:"text-[#0C0C0C]"}`,style:{fontSize:"clamp(3rem, 7vw, 110px)"},children:t.number})}),P.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110",style:{backgroundColor:o?t.accentColor:"#0C0C0C",color:"#FFFFFF"},children:P.jsx(a,{className:"w-7 h-7"})})]}),P.jsxs("div",{className:"flex-1 space-y-5",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-[#B600A8]",children:t.tagline}),P.jsx("h3",{className:"text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0C0C0C] tracking-tight mt-1",children:t.title})]}),P.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#0C0C0C]/75 font-light leading-relaxed max-w-3xl",children:t.description}),P.jsxs("div",{className:"space-y-2.5 pt-2 border-t border-black/10",children:[P.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-[#0C0C0C]/60",children:"Öne Çıkan Teslimatlar & Standartlar:"}),P.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.deliverables.map((c,u)=>P.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0C0C0C]/85 leading-snug",children:[P.jsx(iM,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{color:t.accentColor}}),P.jsx("span",{children:c})]},u))})]}),P.jsx("div",{className:"flex flex-wrap items-center gap-2 pt-3",children:t.techStack.map(c=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-black/[0.05] border border-black/10 text-xs font-semibold text-[#0C0C0C] transition-colors group-hover:bg-white group-hover:border-black/20",children:c},c))})]}),P.jsx("div",{className:"hidden lg:flex items-center justify-end pl-4",children:P.jsx("div",{className:`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${o?"bg-[#0C0C0C] text-white border-[#0C0C0C] rotate-45 scale-110 shadow-lg":"border-black/20 text-[#0C0C0C]"}`,children:P.jsx(WL,{className:"w-5 h-5"})})})]})]})},t.number)})})]})})},ON=({href:n,onClick:e,className:t="",label:i="Live Project"})=>{const a=P.jsxs(P.Fragment,{children:[P.jsx("span",{children:i}),P.jsx(cN,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),o=`group inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer ${t}`;return n?P.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:o,children:a}):P.jsx("button",{onClick:e,type:"button",className:o,children:a})},Hc=[{number:"01",title:"BirEmek Mobil Uygulaması",category:"Üretim Seviyesi / Tek Mühendis Olarak Uçtan Uca",badge:"App Store & Google Play • Flutter & Cloud Backend",description:"Backend, frontend ve sunucu altyapısı dahil olmak üzere tek başıma tasarlayıp geliştirdiğim ve hem App Store hem Google Play mağazalarında başarıyla yayınladığım canlı mobil iş ve istihdam platformu.",col1Img1:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",col2Img:"/Amy-websitesi/biremek_mockup.jpg",link:"https://github.com/anilmetey"},{number:"02",title:"Klinik Karar Destek Asistanı",category:"TÜBİTAK Teknoloji Yarışması Başarısı",badge:"PyTorch & ASP.NET Core • Health-Tech Yapay Zeka",description:"Veriye dayalı klinik teşhis öngörüleri sunmak amacıyla ASP.NET Core REST API altyapısı ve Python (PyTorch) derin öğrenme çıkarım motoru ile inşa edilen, TÜBİTAK ön değerlendirmesini başarıyla geçen sağlık platformu.",col1Img1:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"},{number:"03",title:"SemptomAI & NotTrack API",category:"Mobil Sağlık & Katmanlı REST Mimarisi",badge:"Gerçek Zamanlı AI & Katmanlı Mimari (JWT/Swagger)",description:"Kullanıcılara anlık semptom analizi sunan 14 haftalık geliştirme döngüsüne sahip mobil sağlık asistanı SemptomAI ve Entity Framework Core katmanlı mimarisiyle inşa edilen JWT kimlik doğrulamalı NotTrack REST API.",col1Img1:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"}],BN=({project:n,index:e,progress:t,range:i,targetScale:a})=>{const o=xe.useRef(null),c=cm(t,i,[1,a]);return P.jsx("div",{ref:o,className:"h-[85vh] flex items-center justify-center sticky top-20 md:top-28",children:P.jsxs(mn.div,{style:{scale:c,top:`${e*24}px`},className:"relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden",children:[P.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[P.jsx("span",{className:"font-black text-white leading-none select-none tracking-tight",style:{fontSize:"clamp(2.4rem, 6vw, 4.5rem)"},children:n.number}),P.jsxs("div",{children:[P.jsxs("div",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-semibold",children:[n.category," • ",n.badge]}),P.jsx("h3",{className:"text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white",children:n.title})]})]}),P.jsx(ON,{label:"Projeyi İncele",href:n.link})]}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch",children:[P.jsxs("div",{className:"md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between",children:[P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(120px, 16vw, 220px)"},children:P.jsx("img",{src:n.col1Img1,alt:`${n.title} detay 1`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})}),P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(150px, 20vw, 320px)"},children:P.jsx("img",{src:n.col1Img2,alt:`${n.title} detay 2`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]}),P.jsx("div",{className:"md:col-span-7 w-full h-full min-h-[220px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",children:P.jsx("img",{src:n.col2Img,alt:`${n.title} ana sunum`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]})]})})},zN=()=>{const n=xe.useRef(null),{scrollYProgress:e}=hS({target:n,offset:["start start","end end"]});return P.jsxs("section",{id:"projects",ref:n,className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28",children:[P.jsx(ai,{delay:0,y:40,children:P.jsx("h2",{className:"hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"PROJELER"})}),P.jsx("div",{className:"relative flex flex-col gap-12 sm:gap-16",children:Hc.map((t,i)=>{const a=1-(Hc.length-1-i)*.03,o=[i*(1/Hc.length),1];return P.jsx(BN,{project:t,index:i,totalCards:Hc.length,progress:e,range:o,targetScale:a},t.number)})})]})},VN=[{company:"BirEmek",role:"Mobil Yazılım Mühendisi",period:"Kas 2025 - Tem 2026",location:"Uzaktan",type:"Üretim Seviyesi / Tek Mühendis",bullets:["BirEmek mobil uygulamasını backend, frontend ve sunucu altyapısı dahil olmak üzere uçtan uca, projedeki tek mühendis olarak tek başıma tasarladım, geliştirdim ve yayına aldım.","Uygulamayı hem App Store hem de Google Play üzerinde yayınladım; App Store Connect teknik inceleme sürecini tek başıma yönettim ve yayını engelleyen kritik çökme (crash) hatalarını giderdim.","Gerçek zamanlı veri akışını ve kararlı uygulama performansını sağlamak için REST API'ler ve backend servisleri geliştirdim ve entegre ettim."],tech:["Flutter","REST API","App Store Connect","Google Play Console","Cloud Architecture"]},{company:"BlueSense",role:"Android Geliştirici Stajyeri",period:"Tem 2025 - Eyl 2025",location:"Staj",type:"Mobil Geliştirme",bullets:["Kotlin ve Jetpack Compose kullanarak özel modern Android arayüz (UI) bileşenleri geliştirdim.","Gerçek zamanlı veri yönetimi için uygulamanın frontend'ini Firebase servisleri ve harici REST API'lerle entegre ettim.","Uçtan uca test süreçlerini tamamladım ve geliştirilen özellikleri doğrudan mühendislik ekibine sundum."],tech:["Kotlin","Jetpack Compose","Android SDK","Firebase","REST API","MVVM"]},{company:"Sca Social",role:"Proje Yönetimi Stajyeri",period:"May 2025 - Haz 2025",location:"Staj",type:"Yönetim & Koordinasyon",bullets:["Yazılım projelerinin planlama, iş takibi ve ekipler arası koordinasyon aşamalarına aktif destek verdim.","Gereksinim analizi ve geliştirme döngüsü sprint süreçlerini takip ettim."],tech:["Agile / Scrum","Proje Yönetimi","Sprint Koordinasyonu"]}],HN=[{category:"Programlama Dilleri",skills:["C#","Kotlin","Dart","Python","Java","SQL","JavaScript","C"]},{category:"Mobil & Arayüz (UI)",skills:["Flutter","Android SDK","Jetpack Compose","MVVM Mimarisi"]},{category:"Backend & API Mimarisi",skills:["ASP.NET Core","Entity Framework Core","RESTful Servisler","JWT Doğrulama","Swagger UI"]},{category:"Veritabanı & Bulut",skills:["SQL Server","MySQL","SQLite","Firebase Cloud"]},{category:"Araçlar & Teknolojiler",skills:["PyTorch (AI)","Git & GitHub","Postman","Visual Studio","Android Studio"]}],GN=()=>P.jsx("section",{id:"experience",className:"relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 z-10 border-t border-white/10",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-20",children:[P.jsx(ai,{delay:0,y:30,children:P.jsxs("div",{className:"text-center space-y-3",children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Kariyer & Geçmiş"}),P.jsx("h2",{className:"hero-heading font-black uppercase tracking-tight select-none",style:{fontSize:"clamp(2.5rem, 8vw, 100px)"},children:"DENEYİM & EĞİTİM"})]})}),P.jsxs("div",{className:"space-y-8",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg sm:text-xl font-bold uppercase text-white tracking-wide border-b border-white/10 pb-4",children:[P.jsx(JL,{className:"w-5 h-5 text-[#B600A8]"}),P.jsx("span",{children:"İş Deneyimi"})]}),P.jsx("div",{className:"grid grid-cols-1 gap-6",children:VN.map((n,e)=>P.jsx(ai,{delay:e*.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-[#B600A8]/40 transition-all duration-300 shadow-xl space-y-5",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("h3",{className:"text-2xl font-black uppercase text-white tracking-tight",children:n.role}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30 font-semibold uppercase",children:n.type})]}),P.jsx("div",{className:"text-base text-white/80 font-medium mt-1",children:n.company})]}),P.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(eN,{className:"w-3.5 h-3.5 text-[#B600A8]"}),n.period]}),P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(Em,{className:"w-3.5 h-3.5 text-cyan-400"}),n.location]})]})]}),P.jsx("ul",{className:"space-y-2.5 pt-2",children:n.bullets.map((t,i)=>P.jsxs("li",{className:"flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed font-light",children:[P.jsx(iN,{className:"w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"}),P.jsx("span",{children:t})]},i))}),P.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-white/5",children:n.tech.map(t=>P.jsx("span",{className:"px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/10 text-white/90",children:t},t))})]})},n.company))})]}),P.jsx(ai,{delay:.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-cyan-500/30 transition-all shadow-xl space-y-4",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg font-bold uppercase text-white tracking-wide",children:[P.jsx(dN,{className:"w-6 h-6 text-cyan-400"}),P.jsx("span",{children:"Eğitim Bilgisi"})]}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold font-mono",children:"2021 - 2026"})]}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("h4",{className:"text-2xl font-black uppercase text-white",children:"Bilgisayar Mühendisliği Lisans"}),P.jsx("p",{className:"text-base text-[#D7E2EA]/90 font-medium",children:"Mersin Üniversitesi • Mühendislik Fakültesi"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/70 font-light leading-relaxed pt-1",children:"Yazılım mimarileri, algoritmalar ve veri yapıları, derin öğrenme temelleri, veritabanı yönetim sistemleri ve modern mobil uygulama geliştirme odaklı kapsamlı lisans eğitimi."})]})]})}),P.jsx(ai,{delay:.3,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] shadow-xl space-y-6",children:[P.jsx("h3",{className:"text-xl font-black uppercase text-white tracking-tight border-b border-white/10 pb-4",children:"Teknik Yetenekler & Araç Seti"}),P.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:HN.map(n=>P.jsxs("div",{className:"space-y-2.5",children:[P.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#B600A8]",children:n.category}),P.jsx("div",{className:"flex flex-wrap gap-2",children:n.skills.map(e=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white hover:border-cyan-400/50 hover:bg-white/[0.08] transition-colors",children:e},e))})]},n.category))})]})})]})}),WN=({isOpen:n,onClose:e})=>{const[t,i]=xe.useState({name:"",email:"",message:""}),[a,o]=xe.useState(!1),[c,u]=xe.useState(null),d=(p,v)=>{navigator.clipboard.writeText(p),u(v),setTimeout(()=>u(null),2e3)},h=p=>{p.preventDefault();const v=encodeURIComponent(`Portfolyo İletişimi - ${t.name}`),g=encodeURIComponent(`İsim: ${t.name}
E-posta: ${t.email}

Mesaj:
${t.message}`);window.location.href=`mailto:anilmetey@gmail.com?subject=${v}&body=${g}`,o(!0),setTimeout(()=>{o(!1),e()},2e3)};return P.jsx(sm,{children:n&&P.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[P.jsx(mn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),P.jsxs(mn.div,{initial:{opacity:0,scale:.94,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"relative w-full max-w-2xl bg-[#121316] border border-[#2A2E35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden z-10",children:[P.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-[#B600A8]/20 via-[#7621B0]/30 to-[#38bdf8]/20 blur-3xl pointer-events-none"}),P.jsx("button",{onClick:e,type:"button",className:"absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",children:P.jsx(CN,{className:"w-6 h-6"})}),P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Birlikte Çalışalım"}),P.jsx("h2",{className:"text-3xl sm:text-4xl font-black uppercase text-white mt-1",children:"Anıl Mete Yıldız"}),P.jsx("p",{className:"text-[#D7E2EA]/70 text-sm sm:text-base mt-1",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici"})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#B600A8]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"mailto:anilmetey@gmail.com",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] flex-shrink-0",children:P.jsx(aM,{className:"w-5 h-5"})}),P.jsxs("div",{className:"overflow-hidden",children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"E-posta"}),P.jsx("div",{className:"text-sm font-medium text-white truncate",children:"anilmetey@gmail.com"})]})]}),P.jsx("button",{onClick:()=>d("anilmetey@gmail.com","email"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:c==="email"?P.jsx(yu,{className:"w-4 h-4 text-emerald-400"}):P.jsx(E_,{className:"w-4 h-4"})})]}),P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#7621B0]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"tel:+905071437410",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#7621B0] flex-shrink-0",children:P.jsx(oM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"Telefon"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"+90 507 143 7410"})]})]}),P.jsx("button",{onClick:()=>d("+905071437410","phone"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:c==="phone"?P.jsx(yu,{className:"w-4 h-4 text-emerald-400"}):P.jsx(E_,{className:"w-4 h-4"})})]}),P.jsxs("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform",children:P.jsx(sM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"LinkedIn"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anıl-mete-yıldız"})]})]}),P.jsxs("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform",children:P.jsx(rM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"GitHub"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anilmetey"})]})]})]}),P.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#D7E2EA]/70 px-1",children:[P.jsx(Em,{className:"w-4 h-4 text-[#B600A8]"}),P.jsx("span",{children:"Mersin, Türkiye • Mersin Üniversitesi Bilgisayar Mühendisliği"})]}),P.jsxs("form",{onSubmit:h,className:"space-y-3 pt-2",children:[P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[P.jsx("input",{type:"text",required:!0,placeholder:"Adınız & Soyadınız",value:t.name,onChange:p=>i({...t,name:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"}),P.jsx("input",{type:"email",required:!0,placeholder:"E-posta Adresiniz",value:t.email,onChange:p=>i({...t,email:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"})]}),P.jsx("textarea",{required:!0,rows:3,placeholder:"Mesajınız veya proje detayınız...",value:t.message,onChange:p=>i({...t,message:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"}),P.jsx("button",{type:"submit",disabled:a,className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white transition-all duration-300 hover:opacity-95 active:scale-95 cursor-pointer shadow-lg",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:a?P.jsxs(P.Fragment,{children:[P.jsx(iM,{className:"w-5 h-5 text-emerald-300"}),P.jsx("span",{children:"İletişim Başlatıldı!"})]}):P.jsxs(P.Fragment,{children:[P.jsx(xN,{className:"w-4 h-4"}),P.jsx("span",{children:"Mesaj Gönder"})]})})]})]})]})]})})},XN=({onComplete:n})=>{const[e,t]=xe.useState(0),[i,a]=xe.useState(!1);xe.useEffect(()=>{const d=.9090909090909091,h=setInterval(()=>{t(p=>{const v=p+d;return v>=100?(clearInterval(h),a(!0),setTimeout(()=>{n()},450),100):v})},20);return()=>clearInterval(h)},[n]);const o=c=>c<25?"HOLOGRAM PROJEKSİYONU BAŞLATILIYOR...":c<55?"3D AVATAR & PARÇACIKLAR YÜKLENİYOR...":c<85?"MOBİL & FULL-STACK MİMARİ BAĞLANIYOR...":"SİSTEM ÇEVRİMİÇİ • HOŞ GELDİNİZ 👋";return P.jsx(sm,{children:!i&&P.jsxs(mn.div,{initial:{opacity:1},exit:{opacity:0,scale:1.08,filter:"blur(8px)"},transition:{duration:.7,ease:[.22,1,.36,1]},className:"fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070708] select-none overflow-hidden",children:[P.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:"linear-gradient(rgba(182, 0, 168, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)",backgroundSize:"40px 40px",perspective:"600px"}}),P.jsxs("div",{className:"absolute top-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),P.jsx("span",{className:"text-red-400 font-bold uppercase tracking-wider",children:"REC // 4K 60FPS"})]}),P.jsx("div",{className:"hidden sm:block",children:"SYSTEM PROTOCOL: ANIL-METE-v2.6"}),P.jsxs("div",{children:["00:00:0",Math.floor(e/10),":",(Math.floor(e*3.7)%60).toString().padStart(2,"0")]})]}),P.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-t border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsx("div",{children:"RESOLUTION: 3840 x 2160 ULTRA HD"}),P.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[P.jsx(HL,{className:"w-3.5 h-3.5 animate-pulse"}),P.jsx("span",{children:"GPU ENGINE: ACTIVE"})]})]}),P.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B600A8]/25 via-[#7621B0]/30 to-cyan-500/20 blur-3xl pointer-events-none"}),P.jsxs("div",{className:"relative mb-6 flex flex-col items-center justify-center z-10",children:[P.jsx(mn.div,{animate:{rotate:360},transition:{repeat:1/0,duration:8,ease:"linear"},className:"absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#B600A8]/50"}),P.jsx(mn.div,{animate:{rotate:-360},transition:{repeat:1/0,duration:12,ease:"linear"},className:"absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/40"}),P.jsxs("div",{className:"relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(182,0,168,0.6)] bg-[#0C0C0C] group",children:[P.jsx("img",{src:"/Amy-websitesi/anil_waving.jpg",alt:"Anıl Mete 3D Avatar Hologram",className:"w-full h-full object-cover scale-105"}),P.jsx(mn.div,{animate:{y:["-100%","200%"]},transition:{repeat:1/0,duration:1.8,ease:"easeInOut"},className:"absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent pointer-events-none"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#B600A8]/30 via-transparent to-cyan-500/10 pointer-events-none"})]}),P.jsx("div",{className:"flex items-center gap-1 mt-4",children:[40,70,95,60,85,50,90,75,45,80,65].map((c,u)=>P.jsx(mn.div,{animate:{height:[`${c*.2}px`,`${c*.4}px`,`${c*.15}px`]},transition:{repeat:1/0,duration:.8+u%3*.2,ease:"easeInOut"},className:"w-1 rounded-full bg-gradient-to-t from-[#B600A8] to-cyan-400 opacity-80",style:{height:`${c*.3}px`}},u))})]}),P.jsxs("div",{className:"text-center space-y-1.5 z-10 px-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest",children:[P.jsx(cM,{className:"w-3 h-3 text-[#B600A8]"}),P.jsx("span",{children:"3D CREATIVE INTRO"})]}),P.jsx("h1",{className:"hero-heading font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl",children:"ANIL METE YILDIZ"}),P.jsx("p",{className:"text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-medium",children:"Bilgisayar Mühendisi • Mobil • Full-Stack • 3D Creator"})]}),P.jsx("div",{className:"mt-6 w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 z-10 shadow-inner",children:P.jsx(mn.div,{className:"h-full rounded-full",style:{width:`${e}%`,background:"linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 70%, #38BDF8 100%)",boxShadow:"0 0 16px rgba(56, 189, 248, 0.8)"}})}),P.jsxs("div",{className:"mt-3 flex flex-col items-center gap-1 z-10 font-mono",children:[P.jsxs("span",{className:"text-sm sm:text-base font-bold text-white tracking-widest",children:["[",Math.floor(e).toString().padStart(3," "),"%]"]}),P.jsx("span",{className:"text-[11px] sm:text-xs text-[#D7E2EA]/60 tracking-wider uppercase",children:o(e)})]}),P.jsx("button",{onClick:()=>{a(!0),n()},type:"button",className:"absolute bottom-16 sm:bottom-20 z-20 text-[11px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-pointer px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md",children:"Girişi Atla [SKIP] →"})]})})};function jN(){const[n,e]=xe.useState(!0),[t,i]=xe.useState(!1),a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return P.jsxs(P.Fragment,{children:[n&&P.jsx(XN,{onComplete:()=>e(!1)}),P.jsxs("div",{className:"relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white overflow-x-clip",children:[P.jsx(DN,{onOpenContact:()=>i(!0)}),P.jsx(LN,{}),P.jsx(UN,{onOpenContact:()=>i(!0)}),P.jsx(kN,{}),P.jsx(zN,{}),P.jsx(GN,{}),P.jsx("footer",{className:"relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-16 text-[#D7E2EA] z-20",children:P.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col gap-10",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-2xl sm:text-3xl font-black uppercase text-white tracking-tight",children:"Bir sonraki projenizi birlikte hayata geçirelim mi?"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/60 mt-1",children:"Mobil uygulama, yapay zeka entegrasyonu veya full-stack mimariler için bana dilediğiniz zaman ulaşabilirsiniz."})]}),P.jsx("button",{onClick:()=>i(!0),className:"px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:"Hemen İletişime Geç"})]}),P.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 text-sm",children:[P.jsxs("div",{children:[P.jsx("div",{className:"font-semibold text-white uppercase tracking-wider text-base",children:"Anıl Mete Yıldız"}),P.jsx("div",{className:"text-xs text-[#D7E2EA]/60 mt-0.5",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici • Mersin, Türkiye"})]}),P.jsxs("div",{className:"flex items-center gap-4 text-[#D7E2EA]/70",children:[P.jsx("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"GitHub",children:P.jsx(rM,{className:"w-5 h-5"})}),P.jsx("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"LinkedIn",children:P.jsx(sM,{className:"w-5 h-5"})}),P.jsx("a",{href:"mailto:anilmetey@gmail.com",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"E-posta Gönder",children:P.jsx(aM,{className:"w-5 h-5"})}),P.jsx("a",{href:"tel:+905071437410",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"Telefon",children:P.jsx(oM,{className:"w-5 h-5"})}),P.jsx("button",{onClick:a,className:"ml-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer",title:"Yukarı Çık",children:P.jsx(jL,{className:"w-4 h-4"})})]})]})]})}),P.jsx(WN,{isOpen:t,onClose:()=>i(!1)})]})]})}JE.createRoot(document.getElementById("root")).render(P.jsx(XE.StrictMode,{children:P.jsx(jN,{})}));

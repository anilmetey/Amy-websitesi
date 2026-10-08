(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function w_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ff={exports:{}},Ta={},hf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function HE(){if(j0)return gt;j0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(U,se,Se){this.props=U,this.context=se,this.refs=A,this.updater=Se||_}S.prototype.isReactComponent={},S.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function R(U,se,Se){this.props=U,this.context=se,this.refs=A,this.updater=Se||_}var I=R.prototype=new y;I.constructor=R,M(I,S.prototype),I.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(U,se,Se){var Ge,Ve={},We=null,le=null;if(se!=null)for(Ge in se.ref!==void 0&&(le=se.ref),se.key!==void 0&&(We=""+se.key),se)D.call(se,Ge)&&!F.hasOwnProperty(Ge)&&(Ve[Ge]=se[Ge]);var de=arguments.length-2;if(de===1)Ve.children=Se;else if(1<de){for(var we=Array(de),tt=0;tt<de;tt++)we[tt]=arguments[tt+2];Ve.children=we}if(U&&U.defaultProps)for(Ge in de=U.defaultProps,de)Ve[Ge]===void 0&&(Ve[Ge]=de[Ge]);return{$$typeof:n,type:U,key:We,ref:le,props:Ve,_owner:L.current}}function N(U,se){return{$$typeof:n,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function z(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return se[Se]})}var $=/\/+/g;function Z(U,se){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):se.toString(36)}function W(U,se,Se,Ge,Ve){var We=typeof U;(We==="undefined"||We==="boolean")&&(U=null);var le=!1;if(U===null)le=!0;else switch(We){case"string":case"number":le=!0;break;case"object":switch(U.$$typeof){case n:case e:le=!0}}if(le)return le=U,Ve=Ve(le),U=Ge===""?"."+Z(le,0):Ge,T(Ve)?(Se="",U!=null&&(Se=U.replace($,"$&/")+"/"),W(Ve,se,Se,"",function(tt){return tt})):Ve!=null&&(O(Ve)&&(Ve=N(Ve,Se+(!Ve.key||le&&le.key===Ve.key?"":(""+Ve.key).replace($,"$&/")+"/")+U)),se.push(Ve)),1;if(le=0,Ge=Ge===""?".":Ge+":",T(U))for(var de=0;de<U.length;de++){We=U[de];var we=Ge+Z(We,de);le+=W(We,se,Se,we,Ve)}else if(we=m(U),typeof we=="function")for(U=we.call(U),de=0;!(We=U.next()).done;)We=We.value,we=Ge+Z(We,de++),le+=W(We,se,Se,we,Ve);else if(We==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return le}function Q(U,se,Se){if(U==null)return U;var Ge=[],Ve=0;return W(U,Ge,"","",function(We){return se.call(Se,We,Ve++)}),Ge}function fe(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var ie={current:null},q={transition:null},Y={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function K(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Q,forEach:function(U,se,Se){Q(U,function(){se.apply(this,arguments)},Se)},count:function(U){var se=0;return Q(U,function(){se++}),se},toArray:function(U){return Q(U,function(se){return se})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=r,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,gt.act=K,gt.cloneElement=function(U,se,Se){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ge=M({},U.props),Ve=U.key,We=U.ref,le=U._owner;if(se!=null){if(se.ref!==void 0&&(We=se.ref,le=L.current),se.key!==void 0&&(Ve=""+se.key),U.type&&U.type.defaultProps)var de=U.type.defaultProps;for(we in se)D.call(se,we)&&!F.hasOwnProperty(we)&&(Ge[we]=se[we]===void 0&&de!==void 0?de[we]:se[we])}var we=arguments.length-2;if(we===1)Ge.children=Se;else if(1<we){de=Array(we);for(var tt=0;tt<we;tt++)de[tt]=arguments[tt+2];Ge.children=de}return{$$typeof:n,type:U.type,key:Ve,ref:We,props:Ge,_owner:le}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},gt.createElement=E,gt.createFactory=function(U){var se=E.bind(null,U);return se.type=U,se},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:u,render:U}},gt.isValidElement=O,gt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:fe}},gt.memo=function(U,se){return{$$typeof:h,type:U,compare:se===void 0?null:se}},gt.startTransition=function(U){var se=q.transition;q.transition={};try{U()}finally{q.transition=se}},gt.unstable_act=K,gt.useCallback=function(U,se){return ie.current.useCallback(U,se)},gt.useContext=function(U){return ie.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ie.current.useDeferredValue(U)},gt.useEffect=function(U,se){return ie.current.useEffect(U,se)},gt.useId=function(){return ie.current.useId()},gt.useImperativeHandle=function(U,se,Se){return ie.current.useImperativeHandle(U,se,Se)},gt.useInsertionEffect=function(U,se){return ie.current.useInsertionEffect(U,se)},gt.useLayoutEffect=function(U,se){return ie.current.useLayoutEffect(U,se)},gt.useMemo=function(U,se){return ie.current.useMemo(U,se)},gt.useReducer=function(U,se,Se){return ie.current.useReducer(U,se,Se)},gt.useRef=function(U){return ie.current.useRef(U)},gt.useState=function(U){return ie.current.useState(U)},gt.useSyncExternalStore=function(U,se,Se){return ie.current.useSyncExternalStore(U,se,Se)},gt.useTransition=function(){return ie.current.useTransition()},gt.version="18.3.1",gt}var Y0;function Dp(){return Y0||(Y0=1,hf.exports=HE()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function GE(){if($0)return Ta;$0=1;var n=Dp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,v={},m=null,_=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)r.call(f,p)&&!a.hasOwnProperty(p)&&(v[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)v[p]===void 0&&(v[p]=f[p]);return{$$typeof:e,type:u,key:m,ref:_,props:v,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=c,Ta.jsxs=c,Ta}var q0;function WE(){return q0||(q0=1,ff.exports=GE()),ff.exports}var P=WE(),xe=Dp();const XE=w_(xe);var uc={},pf={exports:{}},qn={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function jE(){return K0||(K0=1,(function(n){function e(q,Y){var K=q.length;q.push(Y);e:for(;0<K;){var U=K-1>>>1,se=q[U];if(0<o(se,Y))q[U]=Y,q[K]=se,K=U;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],K=q.pop();if(K!==Y){q[0]=K;e:for(var U=0,se=q.length,Se=se>>>1;U<Se;){var Ge=2*(U+1)-1,Ve=q[Ge],We=Ge+1,le=q[We];if(0>o(Ve,K))We<se&&0>o(le,Ve)?(q[U]=le,q[We]=K,U=We):(q[U]=Ve,q[Ge]=K,U=Ge);else if(We<se&&0>o(le,K))q[U]=le,q[We]=K,U=We;else break e}}return Y}function o(q,Y){var K=q.sortIndex-Y.sortIndex;return K!==0?K:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,v=null,m=3,_=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=q)r(h),Y.sortIndex=Y.expirationTime,e(f,Y);else break;Y=t(h)}}function T(q){if(A=!1,I(q),!M)if(t(f)!==null)M=!0,fe(D);else{var Y=t(h);Y!==null&&ie(T,Y.startTime-q)}}function D(q,Y){M=!1,A&&(A=!1,y(E),E=-1),_=!0;var K=m;try{for(I(Y),v=t(f);v!==null&&(!(v.expirationTime>Y)||q&&!z());){var U=v.callback;if(typeof U=="function"){v.callback=null,m=v.priorityLevel;var se=U(v.expirationTime<=Y);Y=n.unstable_now(),typeof se=="function"?v.callback=se:v===t(f)&&r(f),I(Y)}else r(f);v=t(f)}if(v!==null)var Se=!0;else{var Ge=t(h);Ge!==null&&ie(T,Ge.startTime-Y),Se=!1}return Se}finally{v=null,m=K,_=!1}}var L=!1,F=null,E=-1,N=5,O=-1;function z(){return!(n.unstable_now()-O<N)}function $(){if(F!==null){var q=n.unstable_now();O=q;var Y=!0;try{Y=F(!0,q)}finally{Y?Z():(L=!1,F=null)}}else L=!1}var Z;if(typeof R=="function")Z=function(){R($)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=$,Z=function(){Q.postMessage(null)}}else Z=function(){S($,0)};function fe(q){F=q,L||(L=!0,Z())}function ie(q,Y){E=S(function(){q(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,fe(D))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(q){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var K=m;m=Y;try{return q()}finally{m=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=m;m=q;try{return Y()}finally{m=K}},n.unstable_scheduleCallback=function(q,Y,K){var U=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?U+K:U):K=U,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=K+se,q={id:p++,callback:Y,priorityLevel:q,startTime:K,expirationTime:se,sortIndex:-1},K>U?(q.sortIndex=K,e(h,q),t(f)===null&&q===t(h)&&(A?(y(E),E=-1):A=!0,ie(T,K-U))):(q.sortIndex=se,e(f,q),M||_||(M=!0,fe(D))),q},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(q){var Y=m;return function(){var K=m;m=Y;try{return q.apply(this,arguments)}finally{m=K}}}})(gf)),gf}var Z0;function YE(){return Z0||(Z0=1,mf.exports=jE()),mf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function $E(){if(J0)return qn;J0=1;var n=Dp(),e=YE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(i){return f.call(v,i)?!0:f.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,d){if(s===null||typeof s>"u"||_(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,d,g,x,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,R);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,R);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,R);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,s,l,d){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,d)&&(l=null),d||g===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,d=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var T=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),q=Symbol.iterator;function Y(i){return i===null||typeof i!="object"?null:(i=q&&i[q]||i["@@iterator"],typeof i=="function"?i:null)}var K=Object.assign,U;function se(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Se=!1;function Ge(i,s){if(!i||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var d=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){d=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){d=ue}i()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var g=ue.stack.split(`
`),x=d.stack.split(`
`),b=g.length-1,B=x.length-1;1<=b&&0<=B&&g[b]!==x[B];)B--;for(;1<=b&&0<=B;b--,B--)if(g[b]!==x[B]){if(b!==1||B!==1)do if(b--,B--,0>B||g[b]!==x[B]){var V=`
`+g[b].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=b&&0<=B);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?se(i):""}function Ve(i){switch(i.tag){case 5:return se(i.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return i=Ge(i.type,!1),i;case 11:return i=Ge(i.type.render,!1),i;case 1:return i=Ge(i.type,!0),i;default:return""}}function We(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case N:return"Profiler";case E:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Q:return s=i.displayName||null,s!==null?s:We(i.type)||"Memo";case fe:s=i._payload,i=i._init;try{return We(i(s))}catch{}}return null}function le(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function we(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(i){var s=we(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(b){d=""+b,x.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ke(i){i._valueTracker||(i._valueTracker=tt(i))}function dt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=we(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function Wt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ft(i,s){var l=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function vt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=de(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function It(i,s){s=s.checked,s!=null&&I(i,"checked",s,!1)}function ht(i,s){It(i,s);var l=de(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Zt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Zt(i,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function kt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Zt(i,s,l){(s!=="number"||Wt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var on=Array.isArray;function Nt(i,s,l,d){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&d&&(i[l].defaultSelected=!0)}else{for(l=""+de(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,d&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function Xt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function X(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(on(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:de(l)}}function un(i,s){var l=de(s.value),d=de(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function bt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function k(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?k(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var J,ae=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=J.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function he(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function pe(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=pe(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,g):i[l]=g}}var Pe=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(i,s){if(s){if(Pe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function De(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ze(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var nt=null,st=null,H=null;function Ce(i){if(i=ua(i)){if(typeof nt!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Tl(s),nt(i.stateNode,i.type,s))}}function me(i){st?H?H.push(i):H=[i]:st=i}function Re(){if(st){var i=st,s=H;if(H=st=null,Ce(i),s)for(i=0;i<s.length;i++)Ce(s[i])}}function Fe(i,s){return i(s)}function ve(){}var Qe=!1;function $e(i,s,l){if(Qe)return i(s,l);Qe=!0;try{return Fe(i,s,l)}finally{Qe=!1,(st!==null||H!==null)&&(ve(),Re())}}function Ct(i,s){var l=i.stateNode;if(l===null)return null;var d=Tl(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Mt=!1;if(u)try{var En={};Object.defineProperty(En,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Mt=!1}function ci(i,s,l,d,g,x,b,B,V){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(ye){this.onError(ye)}}var rs=!1,Bs=null,ss=!1,os=null,Iu={onError:function(i){rs=!0,Bs=i}};function al(i,s,l,d,g,x,b,B,V){rs=!1,Bs=null,ci.apply(Iu,arguments)}function ll(i,s,l,d,g,x,b,B,V){if(al.apply(this,arguments),rs){if(rs){var ue=Bs;rs=!1,Bs=null}else throw Error(t(198));ss||(ss=!0,os=ue)}}function Fn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function zs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Go(i){if(Fn(i)!==i)throw Error(t(188))}function cl(i){var s=i.alternate;if(!s){if(s=Fn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return Go(g),i;if(x===d)return Go(g),s;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=x;else{for(var b=!1,B=g.child;B;){if(B===l){b=!0,l=g,d=x;break}if(B===d){b=!0,d=g,l=x;break}B=B.sibling}if(!b){for(B=x.child;B;){if(B===l){b=!0,l=x,d=g;break}if(B===d){b=!0,d=x,l=g;break}B=B.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function as(i){return i=cl(i),i!==null?Wo(i):null}function Wo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Wo(i);if(s!==null)return s;i=i.sibling}return null}var ls=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,ul=e.unstable_shouldYield,Uu=e.unstable_requestPaint,$t=e.unstable_now,Fu=e.unstable_getCurrentPriorityLevel,jo=e.unstable_ImmediatePriority,Yo=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,G=e.unstable_LowPriority,ce=e.unstable_IdlePriority,te=null,ee=null;function Ie(i){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(te,i,void 0,(i.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Je,Ne=Math.log,Xe=Math.LN2;function Je(i){return i>>>=0,i===0?32:31-(Ne(i)/Xe|0)|0}var lt=64,ut=4194304;function ze(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function xt(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,g=i.suspendedLanes,x=i.pingedLanes,b=l&268435455;if(b!==0){var B=b&~g;B!==0?d=ze(B):(x&=b,x!==0&&(d=ze(x)))}else b=l&~g,b!==0?d=ze(b):x!==0&&(d=ze(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&g)===0&&(g=d&-d,x=s&-s,g>=x||g===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-Le(s),g=1<<l,d|=i[l],s&=~g;return d}function Jt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var b=31-Le(x),B=1<<b,V=g[b];V===-1?((B&l)===0||(B&d)!==0)&&(g[b]=Jt(B,s)):V<=s&&(i.expiredLanes|=B),x&=~B}}function Lt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function dn(){var i=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),i}function Oe(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function nn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Le(s),i[s]=l}function _t(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-Le(l),x=1<<g;s[g]=0,d[g]=-1,i[g]=-1,l&=~x}}function Cn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-Le(l),g=1<<d;g&s|i[d]&s&&(i[d]|=s),l&=~g}}var pt=0;function Ei(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var lr,Rt,jt,wi,Ut,ui=!1,Ti=[],Ai=null,Cr=null,Rr=null,$o=new Map,qo=new Map,Pr=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(i,s){switch(i){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":$o.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(s.pointerId)}}function Ko(i,s,l,d,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[g]},s!==null&&(s=ua(s),s!==null&&Rt(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function dM(i,s,l,d,g){switch(s){case"focusin":return Ai=Ko(Ai,i,s,l,d,g),!0;case"dragenter":return Cr=Ko(Cr,i,s,l,d,g),!0;case"mouseover":return Rr=Ko(Rr,i,s,l,d,g),!0;case"pointerover":var x=g.pointerId;return $o.set(x,Ko($o.get(x)||null,i,s,l,d,g)),!0;case"gotpointercapture":return x=g.pointerId,qo.set(x,Ko(qo.get(x)||null,i,s,l,d,g)),!0}return!1}function Pm(i){var s=cs(i.target);if(s!==null){var l=Fn(s);if(l!==null){if(s=l.tag,s===13){if(s=zs(l),s!==null){i.blockedOn=s,Ut(i.priority,function(){jt(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function dl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Ou(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Ae=d,l.target.dispatchEvent(d),Ae=null}else return s=ua(l),s!==null&&Rt(s),i.blockedOn=l,!1;s.shift()}return!0}function Dm(i,s,l){dl(i)&&l.delete(s)}function fM(){ui=!1,Ai!==null&&dl(Ai)&&(Ai=null),Cr!==null&&dl(Cr)&&(Cr=null),Rr!==null&&dl(Rr)&&(Rr=null),$o.forEach(Dm),qo.forEach(Dm)}function Zo(i,s){i.blockedOn===s&&(i.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fM)))}function Jo(i){function s(g){return Zo(g,i)}if(0<Ti.length){Zo(Ti[0],i);for(var l=1;l<Ti.length;l++){var d=Ti[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ai!==null&&Zo(Ai,i),Cr!==null&&Zo(Cr,i),Rr!==null&&Zo(Rr,i),$o.forEach(s),qo.forEach(s),l=0;l<Pr.length;l++)d=Pr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Pr.length&&(l=Pr[0],l.blockedOn===null);)Pm(l),l.blockedOn===null&&Pr.shift()}var Vs=T.ReactCurrentBatchConfig,fl=!0;function hM(i,s,l,d){var g=pt,x=Vs.transition;Vs.transition=null;try{pt=1,ku(i,s,l,d)}finally{pt=g,Vs.transition=x}}function pM(i,s,l,d){var g=pt,x=Vs.transition;Vs.transition=null;try{pt=4,ku(i,s,l,d)}finally{pt=g,Vs.transition=x}}function ku(i,s,l,d){if(fl){var g=Ou(i,s,l,d);if(g===null)td(i,s,d,hl,l),Rm(i,d);else if(dM(g,i,s,l,d))d.stopPropagation();else if(Rm(i,d),s&4&&-1<uM.indexOf(i)){for(;g!==null;){var x=ua(g);if(x!==null&&lr(x),x=Ou(i,s,l,d),x===null&&td(i,s,d,hl,l),x===g)break;g=x}g!==null&&d.stopPropagation()}else td(i,s,d,null,l)}}var hl=null;function Ou(i,s,l,d){if(hl=null,i=Ze(d),i=cs(i),i!==null)if(s=Fn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=zs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return hl=i,null}function Lm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case jo:return 1;case Yo:return 4;case C:case G:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Dr=null,Bu=null,pl=null;function Nm(){if(pl)return pl;var i,s=Bu,l=s.length,d,g="value"in Dr?Dr.value:Dr.textContent,x=g.length;for(i=0;i<l&&s[i]===g[i];i++);var b=l-i;for(d=1;d<=b&&s[l-d]===g[x-d];d++);return pl=g.slice(i,1<d?1-d:void 0)}function ml(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function gl(){return!0}function Im(){return!1}function ei(i){function s(l,d,g,x,b){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?gl:Im,this.isPropagationStopped=Im,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),s}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=ei(Hs),Qo=K({},Hs,{view:0,detail:0}),mM=ei(Qo),Vu,Hu,ea,vl=K({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ea&&(ea&&i.type==="mousemove"?(Vu=i.screenX-ea.screenX,Hu=i.screenY-ea.screenY):Hu=Vu=0,ea=i),Vu)},movementY:function(i){return"movementY"in i?i.movementY:Hu}}),Um=ei(vl),gM=K({},vl,{dataTransfer:0}),vM=ei(gM),xM=K({},Qo,{relatedTarget:0}),Gu=ei(xM),_M=K({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),yM=ei(_M),SM=K({},Hs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),MM=ei(SM),EM=K({},Hs,{data:0}),Fm=ei(EM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=AM[i])?!!s[i]:!1}function Wu(){return bM}var CM=K({},Qo,{key:function(i){if(i.key){var s=wM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ml(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?TM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(i){return i.type==="keypress"?ml(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ml(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),RM=ei(CM),PM=K({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=ei(PM),DM=K({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),LM=ei(DM),NM=K({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=ei(NM),UM=K({},vl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),FM=ei(UM),kM=[9,13,27,32],Xu=u&&"CompositionEvent"in window,ta=null;u&&"documentMode"in document&&(ta=document.documentMode);var OM=u&&"TextEvent"in window&&!ta,Om=u&&(!Xu||ta&&8<ta&&11>=ta),Bm=" ",zm=!1;function Vm(i,s){switch(i){case"keyup":return kM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Gs=!1;function BM(i,s){switch(i){case"compositionend":return Hm(s);case"keypress":return s.which!==32?null:(zm=!0,Bm);case"textInput":return i=s.data,i===Bm&&zm?null:i;default:return null}}function zM(i,s){if(Gs)return i==="compositionend"||!Xu&&Vm(i,s)?(i=Nm(),pl=Bu=Dr=null,Gs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Om&&s.locale!=="ko"?null:s.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!VM[i.type]:s==="textarea"}function Wm(i,s,l,d){me(d),s=Ml(s,"onChange"),0<s.length&&(l=new zu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var na=null,ia=null;function HM(i){lg(i,0)}function xl(i){var s=$s(i);if(dt(s))return i}function GM(i,s){if(i==="change")return s}var Xm=!1;if(u){var ju;if(u){var Yu="oninput"in document;if(!Yu){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Yu=typeof jm.oninput=="function"}ju=Yu}else ju=!1;Xm=ju&&(!document.documentMode||9<document.documentMode)}function Ym(){na&&(na.detachEvent("onpropertychange",$m),ia=na=null)}function $m(i){if(i.propertyName==="value"&&xl(ia)){var s=[];Wm(s,ia,i,Ze(i)),$e(HM,s)}}function WM(i,s,l){i==="focusin"?(Ym(),na=s,ia=l,na.attachEvent("onpropertychange",$m)):i==="focusout"&&Ym()}function XM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return xl(ia)}function jM(i,s){if(i==="click")return xl(s)}function YM(i,s){if(i==="input"||i==="change")return xl(s)}function $M(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var bi=typeof Object.is=="function"?Object.is:$M;function ra(i,s){if(bi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(s,g)||!bi(i[g],s[g]))return!1}return!0}function qm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Km(i,s){var l=qm(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Zm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Zm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Jm(){for(var i=window,s=Wt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Wt(i.document)}return s}function $u(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function qM(i){var s=Jm(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Zm(l.ownerDocument.documentElement,l)){if(d!==null&&$u(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,x=Math.min(d.start,g);d=d.end===void 0?x:Math.min(d.end,g),!i.extend&&x>d&&(g=d,d=x,x=g),g=Km(l,x);var b=Km(l,d);g&&b&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),x>d?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var KM=u&&"documentMode"in document&&11>=document.documentMode,Ws=null,qu=null,sa=null,Ku=!1;function Qm(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ku||Ws==null||Ws!==Wt(d)||(d=Ws,"selectionStart"in d&&$u(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),sa&&ra(sa,d)||(sa=d,d=Ml(qu,"onSelect"),0<d.length&&(s=new zu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Ws)))}function _l(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Xs={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Zu={},eg={};u&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function yl(i){if(Zu[i])return Zu[i];if(!Xs[i])return i;var s=Xs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in eg)return Zu[i]=s[l];return i}var tg=yl("animationend"),ng=yl("animationiteration"),ig=yl("animationstart"),rg=yl("transitionend"),sg=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(i,s){sg.set(i,s),a(s,[i])}for(var Ju=0;Ju<og.length;Ju++){var Qu=og[Ju],ZM=Qu.toLowerCase(),JM=Qu[0].toUpperCase()+Qu.slice(1);Lr(ZM,"on"+JM)}Lr(tg,"onAnimationEnd"),Lr(ng,"onAnimationIteration"),Lr(ig,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(rg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function ag(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,ll(d,s,void 0,i),i.currentTarget=null}function lg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],g=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var b=d.length-1;0<=b;b--){var B=d[b],V=B.instance,ue=B.currentTarget;if(B=B.listener,V!==x&&g.isPropagationStopped())break e;ag(g,B,ue),x=V}else for(b=0;b<d.length;b++){if(B=d[b],V=B.instance,ue=B.currentTarget,B=B.listener,V!==x&&g.isPropagationStopped())break e;ag(g,B,ue),x=V}}}if(ss)throw i=os,ss=!1,os=null,i}function Ht(i,s){var l=s[ad];l===void 0&&(l=s[ad]=new Set);var d=i+"__bubble";l.has(d)||(cg(s,i,2,!1),l.add(d))}function ed(i,s,l){var d=0;s&&(d|=4),cg(l,i,d,s)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function aa(i){if(!i[Sl]){i[Sl]=!0,r.forEach(function(l){l!=="selectionchange"&&(QM.has(l)||ed(l,!1,i),ed(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Sl]||(s[Sl]=!0,ed("selectionchange",!1,s))}}function cg(i,s,l,d){switch(Lm(s)){case 1:var g=hM;break;case 4:g=pM;break;default:g=ku}l=g.bind(null,s,l,i),g=void 0,!Mt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),d?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function td(i,s,l,d,g){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var B=d.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(b===4)for(b=d.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;b=b.return}for(;B!==null;){if(b=cs(B),b===null)return;if(V=b.tag,V===5||V===6){d=x=b;continue e}B=B.parentNode}}d=d.return}$e(function(){var ue=x,ye=Ze(l),Me=[];e:{var _e=sg.get(i);if(_e!==void 0){var Be=zu,je=i;switch(i){case"keypress":if(ml(l)===0)break e;case"keydown":case"keyup":Be=RM;break;case"focusin":je="focus",Be=Gu;break;case"focusout":je="blur",Be=Gu;break;case"beforeblur":case"afterblur":Be=Gu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=vM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=LM;break;case tg:case ng:case ig:Be=yM;break;case rg:Be=IM;break;case"scroll":Be=mM;break;case"wheel":Be=FM;break;case"copy":case"cut":case"paste":Be=MM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=km}var qe=(s&4)!==0,rn=!qe&&i==="scroll",ne=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var j=ue,oe;j!==null;){oe=j;var Te=oe.stateNode;if(oe.tag===5&&Te!==null&&(oe=Te,ne!==null&&(Te=Ct(j,ne),Te!=null&&qe.push(la(j,Te,oe)))),rn)break;j=j.return}0<qe.length&&(_e=new Be(_e,je,null,l,ye),Me.push({event:_e,listeners:qe}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Be=i==="mouseout"||i==="pointerout",_e&&l!==Ae&&(je=l.relatedTarget||l.fromElement)&&(cs(je)||je[cr]))break e;if((Be||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(je=l.relatedTarget||l.toElement,Be=ue,je=je?cs(je):null,je!==null&&(rn=Fn(je),je!==rn||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ue),Be!==je)){if(qe=Um,Te="onMouseLeave",ne="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(qe=km,Te="onPointerLeave",ne="onPointerEnter",j="pointer"),rn=Be==null?_e:$s(Be),oe=je==null?_e:$s(je),_e=new qe(Te,j+"leave",Be,l,ye),_e.target=rn,_e.relatedTarget=oe,Te=null,cs(ye)===ue&&(qe=new qe(ne,j+"enter",je,l,ye),qe.target=oe,qe.relatedTarget=rn,Te=qe),rn=Te,Be&&je)t:{for(qe=Be,ne=je,j=0,oe=qe;oe;oe=js(oe))j++;for(oe=0,Te=ne;Te;Te=js(Te))oe++;for(;0<j-oe;)qe=js(qe),j--;for(;0<oe-j;)ne=js(ne),oe--;for(;j--;){if(qe===ne||ne!==null&&qe===ne.alternate)break t;qe=js(qe),ne=js(ne)}qe=null}else qe=null;Be!==null&&ug(Me,_e,Be,qe,!1),je!==null&&rn!==null&&ug(Me,rn,je,qe,!0)}}e:{if(_e=ue?$s(ue):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var et=GM;else if(Gm(_e))if(Xm)et=YM;else{et=XM;var it=WM}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(et=jM);if(et&&(et=et(i,ue))){Wm(Me,et,l,ye);break e}it&&it(i,_e,ue),i==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Zt(_e,"number",_e.value)}switch(it=ue?$s(ue):window,i){case"focusin":(Gm(it)||it.contentEditable==="true")&&(Ws=it,qu=ue,sa=null);break;case"focusout":sa=qu=Ws=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Qm(Me,l,ye);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":Qm(Me,l,ye)}var rt;if(Xu)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Gs?Vm(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Om&&l.locale!=="ko"&&(Gs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Gs&&(rt=Nm()):(Dr=ye,Bu="value"in Dr?Dr.value:Dr.textContent,Gs=!0)),it=Ml(ue,ot),0<it.length&&(ot=new Fm(ot,i,null,l,ye),Me.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=Hm(l),rt!==null&&(ot.data=rt)))),(rt=OM?BM(i,l):zM(i,l))&&(ue=Ml(ue,"onBeforeInput"),0<ue.length&&(ye=new Fm("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:ue}),ye.data=rt))}lg(Me,s)})}function la(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Ml(i,s){for(var l=s+"Capture",d=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Ct(i,l),x!=null&&d.unshift(la(i,x,g)),x=Ct(i,s),x!=null&&d.push(la(i,x,g))),i=i.return}return d}function js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ug(i,s,l,d,g){for(var x=s._reactName,b=[];l!==null&&l!==d;){var B=l,V=B.alternate,ue=B.stateNode;if(V!==null&&V===d)break;B.tag===5&&ue!==null&&(B=ue,g?(V=Ct(l,x),V!=null&&b.unshift(la(l,V,B))):g||(V=Ct(l,x),V!=null&&b.push(la(l,V,B)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var eE=/\r\n?/g,tE=/\u0000|\uFFFD/g;function dg(i){return(typeof i=="string"?i:""+i).replace(eE,`
`).replace(tE,"")}function El(i,s,l){if(s=dg(s),dg(i)!==s&&l)throw Error(t(425))}function wl(){}var nd=null,id=null;function rd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(i){return fg.resolve(null).then(i).catch(rE)}:sd;function rE(i){setTimeout(function(){throw i})}function od(i,s){var l=s,d=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){i.removeChild(g),Jo(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);Jo(s)}function Nr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function hg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ji="__reactFiber$"+Ys,ca="__reactProps$"+Ys,cr="__reactContainer$"+Ys,ad="__reactEvents$"+Ys,sE="__reactListeners$"+Ys,oE="__reactHandles$"+Ys;function cs(i){var s=i[ji];if(s)return s;for(var l=i.parentNode;l;){if(s=l[cr]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=hg(i);i!==null;){if(l=i[ji])return l;i=hg(i)}return s}i=l,l=i.parentNode}return null}function ua(i){return i=i[ji]||i[cr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function $s(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Tl(i){return i[ca]||null}var ld=[],qs=-1;function Ir(i){return{current:i}}function Gt(i){0>qs||(i.current=ld[qs],ld[qs]=null,qs--)}function zt(i,s){qs++,ld[qs]=i.current,i.current=s}var Ur={},Rn=Ir(Ur),Wn=Ir(!1),us=Ur;function Ks(i,s){var l=i.type.contextTypes;if(!l)return Ur;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=s[x];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Xn(i){return i=i.childContextTypes,i!=null}function Al(){Gt(Wn),Gt(Rn)}function pg(i,s,l){if(Rn.current!==Ur)throw Error(t(168));zt(Rn,s),zt(Wn,l)}function mg(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in s))throw Error(t(108,le(i)||"Unknown",g));return K({},l,d)}function bl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ur,us=Rn.current,zt(Rn,i),zt(Wn,Wn.current),!0}function gg(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=mg(i,s,us),d.__reactInternalMemoizedMergedChildContext=i,Gt(Wn),Gt(Rn),zt(Rn,i)):Gt(Wn),zt(Wn,l)}var ur=null,Cl=!1,cd=!1;function vg(i){ur===null?ur=[i]:ur.push(i)}function aE(i){Cl=!0,vg(i)}function Fr(){if(!cd&&ur!==null){cd=!0;var i=0,s=pt;try{var l=ur;for(pt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}ur=null,Cl=!1}catch(g){throw ur!==null&&(ur=ur.slice(i+1)),ls(jo,Fr),g}finally{pt=s,cd=!1}}return null}var Zs=[],Js=0,Rl=null,Pl=0,di=[],fi=0,ds=null,dr=1,fr="";function fs(i,s){Zs[Js++]=Pl,Zs[Js++]=Rl,Rl=i,Pl=s}function xg(i,s,l){di[fi++]=dr,di[fi++]=fr,di[fi++]=ds,ds=i;var d=dr;i=fr;var g=32-Le(d)-1;d&=~(1<<g),l+=1;var x=32-Le(s)+g;if(30<x){var b=g-g%5;x=(d&(1<<b)-1).toString(32),d>>=b,g-=b,dr=1<<32-Le(s)+g|l<<g|d,fr=x+i}else dr=1<<x|l<<g|d,fr=i}function ud(i){i.return!==null&&(fs(i,1),xg(i,1,0))}function dd(i){for(;i===Rl;)Rl=Zs[--Js],Zs[Js]=null,Pl=Zs[--Js],Zs[Js]=null;for(;i===ds;)ds=di[--fi],di[fi]=null,fr=di[--fi],di[fi]=null,dr=di[--fi],di[fi]=null}var ti=null,ni=null,Yt=!1,Ci=null;function _g(i,s){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function yg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ti=i,ni=Nr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ti=i,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ds!==null?{id:dr,overflow:fr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ti=i,ni=null,!0):!1;default:return!1}}function fd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hd(i){if(Yt){var s=ni;if(s){var l=s;if(!yg(i,s)){if(fd(i))throw Error(t(418));s=Nr(l.nextSibling);var d=ti;s&&yg(i,s)?_g(d,l):(i.flags=i.flags&-4097|2,Yt=!1,ti=i)}}else{if(fd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,ti=i}}}function Sg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ti=i}function Dl(i){if(i!==ti)return!1;if(!Yt)return Sg(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!rd(i.type,i.memoizedProps)),s&&(s=ni)){if(fd(i))throw Mg(),Error(t(418));for(;s;)_g(i,s),s=Nr(s.nextSibling)}if(Sg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ni=Nr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ni=null}}else ni=ti?Nr(i.stateNode.nextSibling):null;return!0}function Mg(){for(var i=ni;i;)i=Nr(i.nextSibling)}function Qs(){ni=ti=null,Yt=!1}function pd(i){Ci===null?Ci=[i]:Ci.push(i)}var lE=T.ReactCurrentBatchConfig;function da(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var g=d,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(b){var B=g.refs;b===null?delete B[x]:B[x]=b},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ll(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Eg(i){var s=i._init;return s(i._payload)}function wg(i){function s(ne,j){if(i){var oe=ne.deletions;oe===null?(ne.deletions=[j],ne.flags|=16):oe.push(j)}}function l(ne,j){if(!i)return null;for(;j!==null;)s(ne,j),j=j.sibling;return null}function d(ne,j){for(ne=new Map;j!==null;)j.key!==null?ne.set(j.key,j):ne.set(j.index,j),j=j.sibling;return ne}function g(ne,j){return ne=Wr(ne,j),ne.index=0,ne.sibling=null,ne}function x(ne,j,oe){return ne.index=oe,i?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<j?(ne.flags|=2,j):oe):(ne.flags|=2,j)):(ne.flags|=1048576,j)}function b(ne){return i&&ne.alternate===null&&(ne.flags|=2),ne}function B(ne,j,oe,Te){return j===null||j.tag!==6?(j=of(oe,ne.mode,Te),j.return=ne,j):(j=g(j,oe),j.return=ne,j)}function V(ne,j,oe,Te){var et=oe.type;return et===F?ye(ne,j,oe.props.children,Te,oe.key):j!==null&&(j.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===fe&&Eg(et)===j.type)?(Te=g(j,oe.props),Te.ref=da(ne,j,oe),Te.return=ne,Te):(Te=nc(oe.type,oe.key,oe.props,null,ne.mode,Te),Te.ref=da(ne,j,oe),Te.return=ne,Te)}function ue(ne,j,oe,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==oe.containerInfo||j.stateNode.implementation!==oe.implementation?(j=af(oe,ne.mode,Te),j.return=ne,j):(j=g(j,oe.children||[]),j.return=ne,j)}function ye(ne,j,oe,Te,et){return j===null||j.tag!==7?(j=ys(oe,ne.mode,Te,et),j.return=ne,j):(j=g(j,oe),j.return=ne,j)}function Me(ne,j,oe){if(typeof j=="string"&&j!==""||typeof j=="number")return j=of(""+j,ne.mode,oe),j.return=ne,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return oe=nc(j.type,j.key,j.props,null,ne.mode,oe),oe.ref=da(ne,null,j),oe.return=ne,oe;case L:return j=af(j,ne.mode,oe),j.return=ne,j;case fe:var Te=j._init;return Me(ne,Te(j._payload),oe)}if(on(j)||Y(j))return j=ys(j,ne.mode,oe,null),j.return=ne,j;Ll(ne,j)}return null}function _e(ne,j,oe,Te){var et=j!==null?j.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return et!==null?null:B(ne,j,""+oe,Te);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case D:return oe.key===et?V(ne,j,oe,Te):null;case L:return oe.key===et?ue(ne,j,oe,Te):null;case fe:return et=oe._init,_e(ne,j,et(oe._payload),Te)}if(on(oe)||Y(oe))return et!==null?null:ye(ne,j,oe,Te,null);Ll(ne,oe)}return null}function Be(ne,j,oe,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ne=ne.get(oe)||null,B(j,ne,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return ne=ne.get(Te.key===null?oe:Te.key)||null,V(j,ne,Te,et);case L:return ne=ne.get(Te.key===null?oe:Te.key)||null,ue(j,ne,Te,et);case fe:var it=Te._init;return Be(ne,j,oe,it(Te._payload),et)}if(on(Te)||Y(Te))return ne=ne.get(oe)||null,ye(j,ne,Te,et,null);Ll(j,Te)}return null}function je(ne,j,oe,Te){for(var et=null,it=null,rt=j,ot=j=0,yn=null;rt!==null&&ot<oe.length;ot++){rt.index>ot?(yn=rt,rt=null):yn=rt.sibling;var Pt=_e(ne,rt,oe[ot],Te);if(Pt===null){rt===null&&(rt=yn);break}i&&rt&&Pt.alternate===null&&s(ne,rt),j=x(Pt,j,ot),it===null?et=Pt:it.sibling=Pt,it=Pt,rt=yn}if(ot===oe.length)return l(ne,rt),Yt&&fs(ne,ot),et;if(rt===null){for(;ot<oe.length;ot++)rt=Me(ne,oe[ot],Te),rt!==null&&(j=x(rt,j,ot),it===null?et=rt:it.sibling=rt,it=rt);return Yt&&fs(ne,ot),et}for(rt=d(ne,rt);ot<oe.length;ot++)yn=Be(rt,ne,ot,oe[ot],Te),yn!==null&&(i&&yn.alternate!==null&&rt.delete(yn.key===null?ot:yn.key),j=x(yn,j,ot),it===null?et=yn:it.sibling=yn,it=yn);return i&&rt.forEach(function(Xr){return s(ne,Xr)}),Yt&&fs(ne,ot),et}function qe(ne,j,oe,Te){var et=Y(oe);if(typeof et!="function")throw Error(t(150));if(oe=et.call(oe),oe==null)throw Error(t(151));for(var it=et=null,rt=j,ot=j=0,yn=null,Pt=oe.next();rt!==null&&!Pt.done;ot++,Pt=oe.next()){rt.index>ot?(yn=rt,rt=null):yn=rt.sibling;var Xr=_e(ne,rt,Pt.value,Te);if(Xr===null){rt===null&&(rt=yn);break}i&&rt&&Xr.alternate===null&&s(ne,rt),j=x(Xr,j,ot),it===null?et=Xr:it.sibling=Xr,it=Xr,rt=yn}if(Pt.done)return l(ne,rt),Yt&&fs(ne,ot),et;if(rt===null){for(;!Pt.done;ot++,Pt=oe.next())Pt=Me(ne,Pt.value,Te),Pt!==null&&(j=x(Pt,j,ot),it===null?et=Pt:it.sibling=Pt,it=Pt);return Yt&&fs(ne,ot),et}for(rt=d(ne,rt);!Pt.done;ot++,Pt=oe.next())Pt=Be(rt,ne,ot,Pt.value,Te),Pt!==null&&(i&&Pt.alternate!==null&&rt.delete(Pt.key===null?ot:Pt.key),j=x(Pt,j,ot),it===null?et=Pt:it.sibling=Pt,it=Pt);return i&&rt.forEach(function(VE){return s(ne,VE)}),Yt&&fs(ne,ot),et}function rn(ne,j,oe,Te){if(typeof oe=="object"&&oe!==null&&oe.type===F&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case D:e:{for(var et=oe.key,it=j;it!==null;){if(it.key===et){if(et=oe.type,et===F){if(it.tag===7){l(ne,it.sibling),j=g(it,oe.props.children),j.return=ne,ne=j;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===fe&&Eg(et)===it.type){l(ne,it.sibling),j=g(it,oe.props),j.ref=da(ne,it,oe),j.return=ne,ne=j;break e}l(ne,it);break}else s(ne,it);it=it.sibling}oe.type===F?(j=ys(oe.props.children,ne.mode,Te,oe.key),j.return=ne,ne=j):(Te=nc(oe.type,oe.key,oe.props,null,ne.mode,Te),Te.ref=da(ne,j,oe),Te.return=ne,ne=Te)}return b(ne);case L:e:{for(it=oe.key;j!==null;){if(j.key===it)if(j.tag===4&&j.stateNode.containerInfo===oe.containerInfo&&j.stateNode.implementation===oe.implementation){l(ne,j.sibling),j=g(j,oe.children||[]),j.return=ne,ne=j;break e}else{l(ne,j);break}else s(ne,j);j=j.sibling}j=af(oe,ne.mode,Te),j.return=ne,ne=j}return b(ne);case fe:return it=oe._init,rn(ne,j,it(oe._payload),Te)}if(on(oe))return je(ne,j,oe,Te);if(Y(oe))return qe(ne,j,oe,Te);Ll(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,j!==null&&j.tag===6?(l(ne,j.sibling),j=g(j,oe),j.return=ne,ne=j):(l(ne,j),j=of(oe,ne.mode,Te),j.return=ne,ne=j),b(ne)):l(ne,j)}return rn}var eo=wg(!0),Tg=wg(!1),Nl=Ir(null),Il=null,to=null,md=null;function gd(){md=to=Il=null}function vd(i){var s=Nl.current;Gt(Nl),i._currentValue=s}function xd(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function no(i,s){Il=i,md=to=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(jn=!0),i.firstContext=null)}function hi(i){var s=i._currentValue;if(md!==i)if(i={context:i,memoizedValue:s,next:null},to===null){if(Il===null)throw Error(t(308));to=i,Il.dependencies={lanes:0,firstContext:i}}else to=to.next=i;return s}var hs=null;function _d(i){hs===null?hs=[i]:hs.push(i)}function Ag(i,s,l,d){var g=s.interleaved;return g===null?(l.next=l,_d(s)):(l.next=g.next,g.next=l),s.interleaved=l,hr(i,d)}function hr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var kr=!1;function yd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function pr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Tt&2)!==0){var g=d.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s,hr(i,l)}return g=d.interleaved,g===null?(s.next=s,_d(d)):(s.next=g.next,g.next=s),d.interleaved=s,hr(i,l)}function Ul(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Cn(i,l)}}function Cg(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=b:x=x.next=b,l=l.next}while(l!==null);x===null?g=x=s:x=x.next=s}else g=x=s;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Fl(i,s,l,d){var g=i.updateQueue;kr=!1;var x=g.firstBaseUpdate,b=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var V=B,ue=V.next;V.next=null,b===null?x=ue:b.next=ue,b=V;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==b&&(B===null?ye.firstBaseUpdate=ue:B.next=ue,ye.lastBaseUpdate=V))}if(x!==null){var Me=g.baseState;b=0,ye=ue=V=null,B=x;do{var _e=B.lane,Be=B.eventTime;if((d&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Be,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var je=i,qe=B;switch(_e=s,Be=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Me=je.call(Be,Me,_e);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,_e=typeof je=="function"?je.call(Be,Me,_e):je,_e==null)break e;Me=K({},Me,_e);break e;case 2:kr=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,_e=g.effects,_e===null?g.effects=[B]:_e.push(B))}else Be={eventTime:Be,lane:_e,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(ue=ye=Be,V=Me):ye=ye.next=Be,b|=_e;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;_e=B,B=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(ye===null&&(V=Me),g.baseState=V,g.firstBaseUpdate=ue,g.lastBaseUpdate=ye,s=g.shared.interleaved,s!==null){g=s;do b|=g.lane,g=g.next;while(g!==s)}else x===null&&(g.shared.lanes=0);gs|=b,i.lanes=b,i.memoizedState=Me}}function Rg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var fa={},Yi=Ir(fa),ha=Ir(fa),pa=Ir(fa);function ps(i){if(i===fa)throw Error(t(174));return i}function Sd(i,s){switch(zt(pa,s),zt(ha,i),zt(Yi,fa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=w(s,i)}Gt(Yi),zt(Yi,s)}function io(){Gt(Yi),Gt(ha),Gt(pa)}function Pg(i){ps(pa.current);var s=ps(Yi.current),l=w(s,i.type);s!==l&&(zt(ha,i),zt(Yi,l))}function Md(i){ha.current===i&&(Gt(Yi),Gt(ha))}var qt=Ir(0);function kl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ed=[];function wd(){for(var i=0;i<Ed.length;i++)Ed[i]._workInProgressVersionPrimary=null;Ed.length=0}var Ol=T.ReactCurrentDispatcher,Td=T.ReactCurrentBatchConfig,ms=0,Kt=null,fn=null,xn=null,Bl=!1,ma=!1,ga=0,cE=0;function Pn(){throw Error(t(321))}function Ad(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!bi(i[l],s[l]))return!1;return!0}function bd(i,s,l,d,g,x){if(ms=x,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ol.current=i===null||i.memoizedState===null?hE:pE,i=l(d,g),ma){x=0;do{if(ma=!1,ga=0,25<=x)throw Error(t(301));x+=1,xn=fn=null,s.updateQueue=null,Ol.current=mE,i=l(d,g)}while(ma)}if(Ol.current=Hl,s=fn!==null&&fn.next!==null,ms=0,xn=fn=Kt=null,Bl=!1,s)throw Error(t(300));return i}function Cd(){var i=ga!==0;return ga=0,i}function $i(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Kt.memoizedState=xn=i:xn=xn.next=i,xn}function pi(){if(fn===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=fn.next;var s=xn===null?Kt.memoizedState:xn.next;if(s!==null)xn=s,fn=i;else{if(i===null)throw Error(t(310));fn=i,i={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},xn===null?Kt.memoizedState=xn=i:xn=xn.next=i}return xn}function va(i,s){return typeof s=="function"?s(i):s}function Rd(i){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=fn,g=d.baseQueue,x=l.pending;if(x!==null){if(g!==null){var b=g.next;g.next=x.next,x.next=b}d.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,d=d.baseState;var B=b=null,V=null,ue=x;do{var ye=ue.lane;if((ms&ye)===ye)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:i(d,ue.action);else{var Me={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(B=V=Me,b=d):V=V.next=Me,Kt.lanes|=ye,gs|=ye}ue=ue.next}while(ue!==null&&ue!==x);V===null?b=d:V.next=B,bi(d,s.memoizedState)||(jn=!0),s.memoizedState=d,s.baseState=b,s.baseQueue=V,l.lastRenderedState=d}if(i=l.interleaved,i!==null){g=i;do x=g.lane,Kt.lanes|=x,gs|=x,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Pd(i){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,g=l.pending,x=s.memoizedState;if(g!==null){l.pending=null;var b=g=g.next;do x=i(x,b.action),b=b.next;while(b!==g);bi(x,s.memoizedState)||(jn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,d]}function Dg(){}function Lg(i,s){var l=Kt,d=pi(),g=s(),x=!bi(d.memoizedState,g);if(x&&(d.memoizedState=g,jn=!0),d=d.queue,Dd(Ug.bind(null,l,d,i),[i]),d.getSnapshot!==s||x||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,xa(9,Ig.bind(null,l,d,g,s),void 0,null),_n===null)throw Error(t(349));(ms&30)!==0||Ng(l,s,g)}return g}function Ng(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ig(i,s,l,d){s.value=l,s.getSnapshot=d,Fg(s)&&kg(i)}function Ug(i,s,l){return l(function(){Fg(s)&&kg(i)})}function Fg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!bi(i,l)}catch{return!0}}function kg(i){var s=hr(i,1);s!==null&&Li(s,i,1,-1)}function Og(i){var s=$i();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:i},s.queue=i,i=i.dispatch=fE.bind(null,Kt,i),[s.memoizedState,i]}function xa(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Bg(){return pi().memoizedState}function zl(i,s,l,d){var g=$i();Kt.flags|=i,g.memoizedState=xa(1|s,l,void 0,d===void 0?null:d)}function Vl(i,s,l,d){var g=pi();d=d===void 0?null:d;var x=void 0;if(fn!==null){var b=fn.memoizedState;if(x=b.destroy,d!==null&&Ad(d,b.deps)){g.memoizedState=xa(s,l,x,d);return}}Kt.flags|=i,g.memoizedState=xa(1|s,l,x,d)}function zg(i,s){return zl(8390656,8,i,s)}function Dd(i,s){return Vl(2048,8,i,s)}function Vg(i,s){return Vl(4,2,i,s)}function Hg(i,s){return Vl(4,4,i,s)}function Gg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Wg(i,s,l){return l=l!=null?l.concat([i]):null,Vl(4,4,Gg.bind(null,s,i),l)}function Ld(){}function Xg(i,s){var l=pi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ad(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function jg(i,s){var l=pi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ad(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function Yg(i,s,l){return(ms&21)===0?(i.baseState&&(i.baseState=!1,jn=!0),i.memoizedState=l):(bi(l,s)||(l=dn(),Kt.lanes|=l,gs|=l,i.baseState=!0),s)}function uE(i,s){var l=pt;pt=l!==0&&4>l?l:4,i(!0);var d=Td.transition;Td.transition={};try{i(!1),s()}finally{pt=l,Td.transition=d}}function $g(){return pi().memoizedState}function dE(i,s,l){var d=Hr(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},qg(i))Kg(s,l);else if(l=Ag(i,s,l,d),l!==null){var g=On();Li(l,i,d,g),Zg(l,s,d)}}function fE(i,s,l){var d=Hr(i),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(i))Kg(s,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var b=s.lastRenderedState,B=x(b,l);if(g.hasEagerState=!0,g.eagerState=B,bi(B,b)){var V=s.interleaved;V===null?(g.next=g,_d(s)):(g.next=V.next,V.next=g),s.interleaved=g;return}}catch{}finally{}l=Ag(i,s,g,d),l!==null&&(g=On(),Li(l,i,d,g),Zg(l,s,d))}}function qg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function Kg(i,s){ma=Bl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Zg(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Cn(i,l)}}var Hl={readContext:hi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},hE={readContext:hi,useCallback:function(i,s){return $i().memoizedState=[i,s===void 0?null:s],i},useContext:hi,useEffect:zg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,zl(4194308,4,Gg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return zl(4194308,4,i,s)},useInsertionEffect:function(i,s){return zl(4,2,i,s)},useMemo:function(i,s){var l=$i();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=$i();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=dE.bind(null,Kt,i),[d.memoizedState,i]},useRef:function(i){var s=$i();return i={current:i},s.memoizedState=i},useState:Og,useDebugValue:Ld,useDeferredValue:function(i){return $i().memoizedState=i},useTransition:function(){var i=Og(!1),s=i[0];return i=uE.bind(null,i[1]),$i().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=Kt,g=$i();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),_n===null)throw Error(t(349));(ms&30)!==0||Ng(d,s,l)}g.memoizedState=l;var x={value:l,getSnapshot:s};return g.queue=x,zg(Ug.bind(null,d,x,i),[i]),d.flags|=2048,xa(9,Ig.bind(null,d,x,l,s),void 0,null),l},useId:function(){var i=$i(),s=_n.identifierPrefix;if(Yt){var l=fr,d=dr;l=(d&~(1<<32-Le(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=ga++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=cE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},pE={readContext:hi,useCallback:Xg,useContext:hi,useEffect:Dd,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Hg,useMemo:jg,useReducer:Rd,useRef:Bg,useState:function(){return Rd(va)},useDebugValue:Ld,useDeferredValue:function(i){var s=pi();return Yg(s,fn.memoizedState,i)},useTransition:function(){var i=Rd(va)[0],s=pi().memoizedState;return[i,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1},mE={readContext:hi,useCallback:Xg,useContext:hi,useEffect:Dd,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Hg,useMemo:jg,useReducer:Pd,useRef:Bg,useState:function(){return Pd(va)},useDebugValue:Ld,useDeferredValue:function(i){var s=pi();return fn===null?s.memoizedState=i:Yg(s,fn.memoizedState,i)},useTransition:function(){var i=Pd(va)[0],s=pi().memoizedState;return[i,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1};function Ri(i,s){if(i&&i.defaultProps){s=K({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Nd(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:K({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Gl={isMounted:function(i){return(i=i._reactInternals)?Fn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=On(),g=Hr(i),x=pr(d,g);x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,g),s!==null&&(Li(s,i,g,d),Ul(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=On(),g=Hr(i),x=pr(d,g);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,g),s!==null&&(Li(s,i,g,d),Ul(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=On(),d=Hr(i),g=pr(l,d);g.tag=2,s!=null&&(g.callback=s),s=Or(i,g,d),s!==null&&(Li(s,i,d,l),Ul(s,i,d))}};function Jg(i,s,l,d,g,x,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,x,b):s.prototype&&s.prototype.isPureReactComponent?!ra(l,d)||!ra(g,x):!0}function Qg(i,s,l){var d=!1,g=Ur,x=s.contextType;return typeof x=="object"&&x!==null?x=hi(x):(g=Xn(s)?us:Rn.current,d=s.contextTypes,x=(d=d!=null)?Ks(i,g):Ur),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),s}function e0(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&Gl.enqueueReplaceState(s,s.state,null)}function Id(i,s,l,d){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},yd(i);var x=s.contextType;typeof x=="object"&&x!==null?g.context=hi(x):(x=Xn(s)?us:Rn.current,g.context=Ks(i,x)),g.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Nd(i,s,x,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Gl.enqueueReplaceState(g,g.state,null),Fl(i,l,g,d),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function ro(i,s){try{var l="",d=s;do l+=Ve(d),d=d.return;while(d);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:g,digest:null}}function Ud(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Fd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var gE=typeof WeakMap=="function"?WeakMap:Map;function t0(i,s,l){l=pr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Kl||(Kl=!0,Zd=d),Fd(i,s)},l}function n0(i,s,l){l=pr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var g=s.value;l.payload=function(){return d(g)},l.callback=function(){Fd(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Fd(i,s),typeof d!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function i0(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new gE;var g=new Set;d.set(s,g)}else g=d.get(s),g===void 0&&(g=new Set,d.set(s,g));g.has(l)||(g.add(l),i=PE.bind(null,i,s,l),s.then(i,i))}function r0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function s0(i,s,l,d,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=pr(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var vE=T.ReactCurrentOwner,jn=!1;function kn(i,s,l,d){s.child=i===null?Tg(s,null,l,d):eo(s,i.child,l,d)}function o0(i,s,l,d,g){l=l.render;var x=s.ref;return no(s,g),d=bd(i,s,l,d,x,g),l=Cd(),i!==null&&!jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,mr(i,s,g)):(Yt&&l&&ud(s),s.flags|=1,kn(i,s,d,g),s.child)}function a0(i,s,l,d,g){if(i===null){var x=l.type;return typeof x=="function"&&!sf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,l0(i,s,x,d,g)):(i=nc(l.type,null,d,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&g)===0){var b=x.memoizedProps;if(l=l.compare,l=l!==null?l:ra,l(b,d)&&i.ref===s.ref)return mr(i,s,g)}return s.flags|=1,i=Wr(x,d),i.ref=s.ref,i.return=s,s.child=i}function l0(i,s,l,d,g){if(i!==null){var x=i.memoizedProps;if(ra(x,d)&&i.ref===s.ref)if(jn=!1,s.pendingProps=d=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(jn=!0);else return s.lanes=i.lanes,mr(i,s,g)}return kd(i,s,l,d,g)}function c0(i,s,l){var d=s.pendingProps,g=d.children,x=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(oo,ii),ii|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,zt(oo,ii),ii|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,zt(oo,ii),ii|=d}else x!==null?(d=x.baseLanes|l,s.memoizedState=null):d=l,zt(oo,ii),ii|=d;return kn(i,s,g,l),s.child}function u0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kd(i,s,l,d,g){var x=Xn(l)?us:Rn.current;return x=Ks(s,x),no(s,g),l=bd(i,s,l,d,x,g),d=Cd(),i!==null&&!jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,mr(i,s,g)):(Yt&&d&&ud(s),s.flags|=1,kn(i,s,l,g),s.child)}function d0(i,s,l,d,g){if(Xn(l)){var x=!0;bl(s)}else x=!1;if(no(s,g),s.stateNode===null)Xl(i,s),Qg(s,l,d),Id(s,l,d,g),d=!0;else if(i===null){var b=s.stateNode,B=s.memoizedProps;b.props=B;var V=b.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=hi(ue):(ue=Xn(l)?us:Rn.current,ue=Ks(s,ue));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==d||V!==ue)&&e0(s,b,d,ue),kr=!1;var _e=s.memoizedState;b.state=_e,Fl(s,d,b,g),V=s.memoizedState,B!==d||_e!==V||Wn.current||kr?(typeof ye=="function"&&(Nd(s,l,ye,d),V=s.memoizedState),(B=kr||Jg(s,l,B,d,_e,V,ue))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),b.props=d,b.state=V,b.context=ue,d=B):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{b=s.stateNode,bg(i,s),B=s.memoizedProps,ue=s.type===s.elementType?B:Ri(s.type,B),b.props=ue,Me=s.pendingProps,_e=b.context,V=l.contextType,typeof V=="object"&&V!==null?V=hi(V):(V=Xn(l)?us:Rn.current,V=Ks(s,V));var Be=l.getDerivedStateFromProps;(ye=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Me||_e!==V)&&e0(s,b,d,V),kr=!1,_e=s.memoizedState,b.state=_e,Fl(s,d,b,g);var je=s.memoizedState;B!==Me||_e!==je||Wn.current||kr?(typeof Be=="function"&&(Nd(s,l,Be,d),je=s.memoizedState),(ue=kr||Jg(s,l,ue,d,_e,je,V)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,je,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,je,V)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=je),b.props=d,b.state=je,b.context=V,d=ue):(typeof b.componentDidUpdate!="function"||B===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),d=!1)}return Od(i,s,l,d,x,g)}function Od(i,s,l,d,g,x){u0(i,s);var b=(s.flags&128)!==0;if(!d&&!b)return g&&gg(s,l,!1),mr(i,s,x);d=s.stateNode,vE.current=s;var B=b&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&b?(s.child=eo(s,i.child,null,x),s.child=eo(s,null,B,x)):kn(i,s,B,x),s.memoizedState=d.state,g&&gg(s,l,!0),s.child}function f0(i){var s=i.stateNode;s.pendingContext?pg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&pg(i,s.context,!1),Sd(i,s.containerInfo)}function h0(i,s,l,d,g){return Qs(),pd(g),s.flags|=256,kn(i,s,l,d),s.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function zd(i){return{baseLanes:i,cachePool:null,transitions:null}}function p0(i,s,l){var d=s.pendingProps,g=qt.current,x=!1,b=(s.flags&128)!==0,B;if((B=b)||(B=i!==null&&i.memoizedState===null?!1:(g&2)!==0),B?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),zt(qt,g&1),i===null)return hd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=d.children,i=d.fallback,x?(d=s.mode,x=s.child,b={mode:"hidden",children:b},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=ic(b,d,0,null),i=ys(i,d,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=zd(l),s.memoizedState=Bd,i):Vd(s,b));if(g=i.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return xE(i,s,b,d,B,g,l);if(x){x=d.fallback,b=s.mode,g=i.child,B=g.sibling;var V={mode:"hidden",children:d.children};return(b&1)===0&&s.child!==g?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=Wr(g,V),d.subtreeFlags=g.subtreeFlags&14680064),B!==null?x=Wr(B,x):(x=ys(x,b,l,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,b=i.child.memoizedState,b=b===null?zd(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=i.childLanes&~l,s.memoizedState=Bd,d}return x=i.child,i=x.sibling,d=Wr(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Vd(i,s){return s=ic({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Wl(i,s,l,d){return d!==null&&pd(d),eo(s,i.child,null,l),i=Vd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function xE(i,s,l,d,g,x,b){if(l)return s.flags&256?(s.flags&=-257,d=Ud(Error(t(422))),Wl(i,s,b,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=d.fallback,g=s.mode,d=ic({mode:"visible",children:d.children},g,0,null),x=ys(x,g,b,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&eo(s,i.child,null,b),s.child.memoizedState=zd(b),s.memoizedState=Bd,x);if((s.mode&1)===0)return Wl(i,s,b,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var B=d.dgst;return d=B,x=Error(t(419)),d=Ud(x,d,void 0),Wl(i,s,b,d)}if(B=(b&i.childLanes)!==0,jn||B){if(d=_n,d!==null){switch(b&-b){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|b))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,hr(i,g),Li(d,i,g,-1))}return rf(),d=Ud(Error(t(421))),Wl(i,s,b,d)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=DE.bind(null,i),g._reactRetry=s,null):(i=x.treeContext,ni=Nr(g.nextSibling),ti=s,Yt=!0,Ci=null,i!==null&&(di[fi++]=dr,di[fi++]=fr,di[fi++]=ds,dr=i.id,fr=i.overflow,ds=s),s=Vd(s,d.children),s.flags|=4096,s)}function m0(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),xd(i.return,s,l)}function Hd(i,s,l,d,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=g)}function g0(i,s,l){var d=s.pendingProps,g=d.revealOrder,x=d.tail;if(kn(i,s,d.children,l),d=qt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&m0(i,l,s);else if(i.tag===19)m0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(zt(qt,d),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&kl(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Hd(s,!1,g,l,x);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&kl(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}Hd(s,!0,l,null,x);break;case"together":Hd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function mr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),gs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Wr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Wr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function _E(i,s,l){switch(s.tag){case 3:f0(s),Qs();break;case 5:Pg(s);break;case 1:Xn(s.type)&&bl(s);break;case 4:Sd(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,g=s.memoizedProps.value;zt(Nl,d._currentValue),d._currentValue=g;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(zt(qt,qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?p0(i,s,l):(zt(qt,qt.current&1),i=mr(i,s,l),i!==null?i.sibling:null);zt(qt,qt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return g0(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),zt(qt,qt.current),d)break;return null;case 22:case 23:return s.lanes=0,c0(i,s,l)}return mr(i,s,l)}var v0,Gd,x0,_0;v0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Gd=function(){},x0=function(i,s,l,d){var g=i.memoizedProps;if(g!==d){i=s.stateNode,ps(Yi.current);var x=null;switch(l){case"input":g=ft(i,g),d=ft(i,d),x=[];break;case"select":g=K({},g,{value:void 0}),d=K({},d,{value:void 0}),x=[];break;case"textarea":g=Xt(i,g),d=Xt(i,d),x=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=wl)}Ke(l,d);var b;l=null;for(ue in g)if(!d.hasOwnProperty(ue)&&g.hasOwnProperty(ue)&&g[ue]!=null)if(ue==="style"){var B=g[ue];for(b in B)B.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in d){var V=d[ue];if(B=g!=null?g[ue]:void 0,d.hasOwnProperty(ue)&&V!==B&&(V!=null||B!=null))if(ue==="style")if(B){for(b in B)!B.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in V)V.hasOwnProperty(b)&&B[b]!==V[b]&&(l||(l={}),l[b]=V[b])}else l||(x||(x=[]),x.push(ue,l)),l=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,B=B?B.__html:void 0,V!=null&&B!==V&&(x=x||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Ht("scroll",i),x||B===V||(x=[])):(x=x||[]).push(ue,V))}l&&(x=x||[]).push("style",l);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},_0=function(i,s,l,d){l!==d&&(s.flags|=4)};function _a(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Dn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function yE(i,s,l){var d=s.pendingProps;switch(dd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(s),null;case 1:return Xn(s.type)&&Al(),Dn(s),null;case 3:return d=s.stateNode,io(),Gt(Wn),Gt(Rn),wd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Dl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ci!==null&&(ef(Ci),Ci=null))),Gd(i,s),Dn(s),null;case 5:Md(s);var g=ps(pa.current);if(l=s.type,i!==null&&s.stateNode!=null)x0(i,s,l,d,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Dn(s),null}if(i=ps(Yi.current),Dl(s)){d=s.stateNode,l=s.type;var x=s.memoizedProps;switch(d[ji]=s,d[ca]=x,i=(s.mode&1)!==0,l){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(g=0;g<oa.length;g++)Ht(oa[g],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":vt(d,x),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},Ht("invalid",d);break;case"textarea":X(d,x),Ht("invalid",d)}Ke(l,x),g=null;for(var b in x)if(x.hasOwnProperty(b)){var B=x[b];b==="children"?typeof B=="string"?d.textContent!==B&&(x.suppressHydrationWarning!==!0&&El(d.textContent,B,i),g=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&El(d.textContent,B,i),g=["children",""+B]):o.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Ht("scroll",d)}switch(l){case"input":ke(d),kt(d,x,!0);break;case"textarea":ke(d),bt(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=wl)}d=g,s.updateQueue=d,d!==null&&(s.flags|=4)}else{b=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=k(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=b.createElement(l,{is:d.is}):(i=b.createElement(l),l==="select"&&(b=i,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):i=b.createElementNS(i,l),i[ji]=s,i[ca]=d,v0(i,s,!1,!1),s.stateNode=i;e:{switch(b=De(l,d),l){case"dialog":Ht("cancel",i),Ht("close",i),g=d;break;case"iframe":case"object":case"embed":Ht("load",i),g=d;break;case"video":case"audio":for(g=0;g<oa.length;g++)Ht(oa[g],i);g=d;break;case"source":Ht("error",i),g=d;break;case"img":case"image":case"link":Ht("error",i),Ht("load",i),g=d;break;case"details":Ht("toggle",i),g=d;break;case"input":vt(i,d),g=ft(i,d),Ht("invalid",i);break;case"option":g=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},g=K({},d,{value:void 0}),Ht("invalid",i);break;case"textarea":X(i,d),g=Xt(i,d),Ht("invalid",i);break;default:g=d}Ke(l,g),B=g;for(x in B)if(B.hasOwnProperty(x)){var V=B[x];x==="style"?ge(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ae(i,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&he(i,V):typeof V=="number"&&he(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Ht("scroll",i):V!=null&&I(i,x,V,b))}switch(l){case"input":ke(i),kt(i,d,!1);break;case"textarea":ke(i),bt(i);break;case"option":d.value!=null&&i.setAttribute("value",""+de(d.value));break;case"select":i.multiple=!!d.multiple,x=d.value,x!=null?Nt(i,!!d.multiple,x,!1):d.defaultValue!=null&&Nt(i,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=wl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Dn(s),null;case 6:if(i&&s.stateNode!=null)_0(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=ps(pa.current),ps(Yi.current),Dl(s)){if(d=s.stateNode,l=s.memoizedProps,d[ji]=s,(x=d.nodeValue!==l)&&(i=ti,i!==null))switch(i.tag){case 3:El(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&El(d.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ji]=s,s.stateNode=d}return Dn(s),null;case 13:if(Gt(qt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mg(),Qs(),s.flags|=98560,x=!1;else if(x=Dl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ji]=s}else Qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Dn(s),x=!1}else Ci!==null&&(ef(Ci),Ci=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(qt.current&1)!==0?hn===0&&(hn=3):rf())),s.updateQueue!==null&&(s.flags|=4),Dn(s),null);case 4:return io(),Gd(i,s),i===null&&aa(s.stateNode.containerInfo),Dn(s),null;case 10:return vd(s.type._context),Dn(s),null;case 17:return Xn(s.type)&&Al(),Dn(s),null;case 19:if(Gt(qt),x=s.memoizedState,x===null)return Dn(s),null;if(d=(s.flags&128)!==0,b=x.rendering,b===null)if(d)_a(x,!1);else{if(hn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=kl(i),b!==null){for(s.flags|=128,_a(x,!1),d=b.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)x=l,i=d,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,i=b.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),s.child}i=i.sibling}x.tail!==null&&$t()>ao&&(s.flags|=128,d=!0,_a(x,!1),s.lanes=4194304)}else{if(!d)if(i=kl(b),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),_a(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!Yt)return Dn(s),null}else 2*$t()-x.renderingStartTime>ao&&l!==1073741824&&(s.flags|=128,d=!0,_a(x,!1),s.lanes=4194304);x.isBackwards?(b.sibling=s.child,s.child=b):(l=x.last,l!==null?l.sibling=b:s.child=b,x.last=b)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=$t(),s.sibling=null,l=qt.current,zt(qt,d?l&1|2:l&1),s):(Dn(s),null);case 22:case 23:return nf(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Dn(s),s.subtreeFlags&6&&(s.flags|=8192)):Dn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function SE(i,s){switch(dd(s),s.tag){case 1:return Xn(s.type)&&Al(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return io(),Gt(Wn),Gt(Rn),wd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Md(s),null;case 13:if(Gt(qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Qs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Gt(qt),null;case 4:return io(),null;case 10:return vd(s.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var jl=!1,Ln=!1,ME=typeof WeakSet=="function"?WeakSet:Set,He=null;function so(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Qt(i,s,d)}else l.current=null}function Wd(i,s,l){try{l()}catch(d){Qt(i,s,d)}}var y0=!1;function EE(i,s){if(nd=fl,i=Jm(),$u(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var b=0,B=-1,V=-1,ue=0,ye=0,Me=i,_e=null;t:for(;;){for(var Be;Me!==l||g!==0&&Me.nodeType!==3||(B=b+g),Me!==x||d!==0&&Me.nodeType!==3||(V=b+d),Me.nodeType===3&&(b+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)_e=Me,Me=Be;for(;;){if(Me===i)break t;if(_e===l&&++ue===g&&(B=b),_e===x&&++ye===d&&(V=b),(Be=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Be}l=B===-1||V===-1?null:{start:B,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(id={focusedElem:i,selectionRange:l},fl=!1,He=s;He!==null;)if(s=He,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,He=i;else for(;He!==null;){s=He;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,rn=je.memoizedState,ne=s.stateNode,j=ne.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Ri(s.type,qe),rn);ne.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Qt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,He=i;break}He=s.return}return je=y0,y0=!1,je}function ya(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Wd(s,l,x)}g=g.next}while(g!==d)}}function Yl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Xd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function S0(i){var s=i.alternate;s!==null&&(i.alternate=null,S0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ji],delete s[ca],delete s[ad],delete s[sE],delete s[oE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function M0(i){return i.tag===5||i.tag===3||i.tag===4}function E0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||M0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function jd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=wl));else if(d!==4&&(i=i.child,i!==null))for(jd(i,s,l),i=i.sibling;i!==null;)jd(i,s,l),i=i.sibling}function Yd(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Yd(i,s,l),i=i.sibling;i!==null;)Yd(i,s,l),i=i.sibling}var wn=null,Pi=!1;function Br(i,s,l){for(l=l.child;l!==null;)w0(i,s,l),l=l.sibling}function w0(i,s,l){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(te,l)}catch{}switch(l.tag){case 5:Ln||so(l,s);case 6:var d=wn,g=Pi;wn=null,Br(i,s,l),wn=d,Pi=g,wn!==null&&(Pi?(i=wn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(Pi?(i=wn,l=l.stateNode,i.nodeType===8?od(i.parentNode,l):i.nodeType===1&&od(i,l),Jo(i)):od(wn,l.stateNode));break;case 4:d=wn,g=Pi,wn=l.stateNode.containerInfo,Pi=!0,Br(i,s,l),wn=d,Pi=g;break;case 0:case 11:case 14:case 15:if(!Ln&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var x=g,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&Wd(l,s,b),g=g.next}while(g!==d)}Br(i,s,l);break;case 1:if(!Ln&&(so(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){Qt(l,s,B)}Br(i,s,l);break;case 21:Br(i,s,l);break;case 22:l.mode&1?(Ln=(d=Ln)||l.memoizedState!==null,Br(i,s,l),Ln=d):Br(i,s,l);break;default:Br(i,s,l)}}function T0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new ME),s.forEach(function(d){var g=LE.bind(null,i,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Di(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var x=i,b=s,B=b;e:for(;B!==null;){switch(B.tag){case 5:wn=B.stateNode,Pi=!1;break e;case 3:wn=B.stateNode.containerInfo,Pi=!0;break e;case 4:wn=B.stateNode.containerInfo,Pi=!0;break e}B=B.return}if(wn===null)throw Error(t(160));w0(x,b,g),wn=null,Pi=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(ue){Qt(g,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)A0(s,i),s=s.sibling}function A0(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Di(s,i),qi(i),d&4){try{ya(3,i,i.return),Yl(3,i)}catch(qe){Qt(i,i.return,qe)}try{ya(5,i,i.return)}catch(qe){Qt(i,i.return,qe)}}break;case 1:Di(s,i),qi(i),d&512&&l!==null&&so(l,l.return);break;case 5:if(Di(s,i),qi(i),d&512&&l!==null&&so(l,l.return),i.flags&32){var g=i.stateNode;try{he(g,"")}catch(qe){Qt(i,i.return,qe)}}if(d&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,b=l!==null?l.memoizedProps:x,B=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&It(g,x),De(B,b);var ue=De(B,x);for(b=0;b<V.length;b+=2){var ye=V[b],Me=V[b+1];ye==="style"?ge(g,Me):ye==="dangerouslySetInnerHTML"?ae(g,Me):ye==="children"?he(g,Me):I(g,ye,Me,ue)}switch(B){case"input":ht(g,x);break;case"textarea":un(g,x);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?Nt(g,!!x.multiple,Be,!1):_e!==!!x.multiple&&(x.defaultValue!=null?Nt(g,!!x.multiple,x.defaultValue,!0):Nt(g,!!x.multiple,x.multiple?[]:"",!1))}g[ca]=x}catch(qe){Qt(i,i.return,qe)}}break;case 6:if(Di(s,i),qi(i),d&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch(qe){Qt(i,i.return,qe)}}break;case 3:if(Di(s,i),qi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Jo(s.containerInfo)}catch(qe){Qt(i,i.return,qe)}break;case 4:Di(s,i),qi(i);break;case 13:Di(s,i),qi(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Kd=$t())),d&4&&T0(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Ln=(ue=Ln)||ye,Di(s,i),Ln=ue):Di(s,i),qi(i),d&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!ye&&(i.mode&1)!==0)for(He=i,ye=i.child;ye!==null;){for(Me=He=ye;He!==null;){switch(_e=He,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:ya(4,_e,_e.return);break;case 1:so(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){d=_e,l=_e.return;try{s=d,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){Qt(d,l,qe)}}break;case 5:so(_e,_e.return);break;case 22:if(_e.memoizedState!==null){R0(Me);continue}}Be!==null?(Be.return=_e,He=Be):R0(Me)}ye=ye.sibling}e:for(ye=null,Me=i;;){if(Me.tag===5){if(ye===null){ye=Me;try{g=Me.stateNode,ue?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Me.stateNode,V=Me.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,B.style.display=pe("display",b))}catch(qe){Qt(i,i.return,qe)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(qe){Qt(i,i.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Di(s,i),qi(i),d&4&&T0(i);break;case 21:break;default:Di(s,i),qi(i)}}function qi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(M0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(he(g,""),d.flags&=-33);var x=E0(i);Yd(i,x,g);break;case 3:case 4:var b=d.stateNode.containerInfo,B=E0(i);jd(i,B,b);break;default:throw Error(t(161))}}catch(V){Qt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function wE(i,s,l){He=i,b0(i)}function b0(i,s,l){for(var d=(i.mode&1)!==0;He!==null;){var g=He,x=g.child;if(g.tag===22&&d){var b=g.memoizedState!==null||jl;if(!b){var B=g.alternate,V=B!==null&&B.memoizedState!==null||Ln;B=jl;var ue=Ln;if(jl=b,(Ln=V)&&!ue)for(He=g;He!==null;)b=He,V=b.child,b.tag===22&&b.memoizedState!==null?P0(g):V!==null?(V.return=b,He=V):P0(g);for(;x!==null;)He=x,b0(x),x=x.sibling;He=g,jl=B,Ln=ue}C0(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,He=x):C0(i)}}function C0(i){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ln||Yl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ln)if(l===null)d.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Ri(s.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Rg(s,x,d);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Rg(s,b,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Jo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||s.flags&512&&Xd(s)}catch(_e){Qt(s,s.return,_e)}}if(s===i){He=null;break}if(l=s.sibling,l!==null){l.return=s.return,He=l;break}He=s.return}}function R0(i){for(;He!==null;){var s=He;if(s===i){He=null;break}var l=s.sibling;if(l!==null){l.return=s.return,He=l;break}He=s.return}}function P0(i){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Yl(4,s)}catch(V){Qt(s,l,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var g=s.return;try{d.componentDidMount()}catch(V){Qt(s,g,V)}}var x=s.return;try{Xd(s)}catch(V){Qt(s,x,V)}break;case 5:var b=s.return;try{Xd(s)}catch(V){Qt(s,b,V)}}}catch(V){Qt(s,s.return,V)}if(s===i){He=null;break}var B=s.sibling;if(B!==null){B.return=s.return,He=B;break}He=s.return}}var TE=Math.ceil,$l=T.ReactCurrentDispatcher,$d=T.ReactCurrentOwner,mi=T.ReactCurrentBatchConfig,Tt=0,_n=null,an=null,Tn=0,ii=0,oo=Ir(0),hn=0,Sa=null,gs=0,ql=0,qd=0,Ma=null,Yn=null,Kd=0,ao=1/0,gr=null,Kl=!1,Zd=null,zr=null,Zl=!1,Vr=null,Jl=0,Ea=0,Jd=null,Ql=-1,ec=0;function On(){return(Tt&6)!==0?$t():Ql!==-1?Ql:Ql=$t()}function Hr(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Tn!==0?Tn&-Tn:lE.transition!==null?(ec===0&&(ec=dn()),ec):(i=pt,i!==0||(i=window.event,i=i===void 0?16:Lm(i.type)),i)}function Li(i,s,l,d){if(50<Ea)throw Ea=0,Jd=null,Error(t(185));nn(i,l,d),((Tt&2)===0||i!==_n)&&(i===_n&&((Tt&2)===0&&(ql|=l),hn===4&&Gr(i,Tn)),$n(i,d),l===1&&Tt===0&&(s.mode&1)===0&&(ao=$t()+500,Cl&&Fr()))}function $n(i,s){var l=i.callbackNode;Ot(i,s);var d=xt(i,i===_n?Tn:0);if(d===0)l!==null&&Xo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&Xo(l),s===1)i.tag===0?aE(L0.bind(null,i)):vg(L0.bind(null,i)),iE(function(){(Tt&6)===0&&Fr()}),l=null;else{switch(Ei(d)){case 1:l=jo;break;case 4:l=Yo;break;case 16:l=C;break;case 536870912:l=ce;break;default:l=C}l=z0(l,D0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function D0(i,s){if(Ql=-1,ec=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(lo()&&i.callbackNode!==l)return null;var d=xt(i,i===_n?Tn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=tc(i,d);else{s=d;var g=Tt;Tt|=2;var x=I0();(_n!==i||Tn!==s)&&(gr=null,ao=$t()+500,xs(i,s));do try{CE();break}catch(B){N0(i,B)}while(!0);gd(),$l.current=x,Tt=g,an!==null?s=0:(_n=null,Tn=0,s=hn)}if(s!==0){if(s===2&&(g=Lt(i),g!==0&&(d=g,s=Qd(i,g))),s===1)throw l=Sa,xs(i,0),Gr(i,d),$n(i,$t()),l;if(s===6)Gr(i,d);else{if(g=i.current.alternate,(d&30)===0&&!AE(g)&&(s=tc(i,d),s===2&&(x=Lt(i),x!==0&&(d=x,s=Qd(i,x))),s===1))throw l=Sa,xs(i,0),Gr(i,d),$n(i,$t()),l;switch(i.finishedWork=g,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:_s(i,Yn,gr);break;case 3:if(Gr(i,d),(d&130023424)===d&&(s=Kd+500-$t(),10<s)){if(xt(i,0)!==0)break;if(g=i.suspendedLanes,(g&d)!==d){On(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=sd(_s.bind(null,i,Yn,gr),s);break}_s(i,Yn,gr);break;case 4:if(Gr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,g=-1;0<d;){var b=31-Le(d);x=1<<b,b=s[b],b>g&&(g=b),d&=~x}if(d=g,d=$t()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*TE(d/1960))-d,10<d){i.timeoutHandle=sd(_s.bind(null,i,Yn,gr),d);break}_s(i,Yn,gr);break;case 5:_s(i,Yn,gr);break;default:throw Error(t(329))}}}return $n(i,$t()),i.callbackNode===l?D0.bind(null,i):null}function Qd(i,s){var l=Ma;return i.current.memoizedState.isDehydrated&&(xs(i,s).flags|=256),i=tc(i,s),i!==2&&(s=Yn,Yn=l,s!==null&&ef(s)),i}function ef(i){Yn===null?Yn=i:Yn.push.apply(Yn,i)}function AE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],x=g.getSnapshot;g=g.value;try{if(!bi(x(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gr(i,s){for(s&=~qd,s&=~ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Le(s),d=1<<l;i[l]=-1,s&=~d}}function L0(i){if((Tt&6)!==0)throw Error(t(327));lo();var s=xt(i,0);if((s&1)===0)return $n(i,$t()),null;var l=tc(i,s);if(i.tag!==0&&l===2){var d=Lt(i);d!==0&&(s=d,l=Qd(i,d))}if(l===1)throw l=Sa,xs(i,0),Gr(i,s),$n(i,$t()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,_s(i,Yn,gr),$n(i,$t()),null}function tf(i,s){var l=Tt;Tt|=1;try{return i(s)}finally{Tt=l,Tt===0&&(ao=$t()+500,Cl&&Fr())}}function vs(i){Vr!==null&&Vr.tag===0&&(Tt&6)===0&&lo();var s=Tt;Tt|=1;var l=mi.transition,d=pt;try{if(mi.transition=null,pt=1,i)return i()}finally{pt=d,mi.transition=l,Tt=s,(Tt&6)===0&&Fr()}}function nf(){ii=oo.current,Gt(oo)}function xs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,nE(l)),an!==null)for(l=an.return;l!==null;){var d=l;switch(dd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Al();break;case 3:io(),Gt(Wn),Gt(Rn),wd();break;case 5:Md(d);break;case 4:io();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:vd(d.type._context);break;case 22:case 23:nf()}l=l.return}if(_n=i,an=i=Wr(i.current,null),Tn=ii=s,hn=0,Sa=null,qd=ql=gs=0,Yn=Ma=null,hs!==null){for(s=0;s<hs.length;s++)if(l=hs[s],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,x=l.pending;if(x!==null){var b=x.next;x.next=g,d.next=b}l.pending=d}hs=null}return i}function N0(i,s){do{var l=an;try{if(gd(),Ol.current=Hl,Bl){for(var d=Kt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}Bl=!1}if(ms=0,xn=fn=Kt=null,ma=!1,ga=0,$d.current=null,l===null||l.return===null){hn=1,Sa=s,an=null;break}e:{var x=i,b=l.return,B=l,V=s;if(s=Tn,B.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,ye=B,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Be=r0(b);if(Be!==null){Be.flags&=-257,s0(Be,b,B,x,s),Be.mode&1&&i0(x,ue,s),s=Be,V=ue;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else je.add(V);break e}else{if((s&1)===0){i0(x,ue,s),rf();break e}V=Error(t(426))}}else if(Yt&&B.mode&1){var rn=r0(b);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),s0(rn,b,B,x,s),pd(ro(V,B));break e}}x=V=ro(V,B),hn!==4&&(hn=2),Ma===null?Ma=[x]:Ma.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ne=t0(x,V,s);Cg(x,ne);break e;case 1:B=V;var j=x.type,oe=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(zr===null||!zr.has(oe)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=n0(x,B,s);Cg(x,Te);break e}}x=x.return}while(x!==null)}F0(l)}catch(et){s=et,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function I0(){var i=$l.current;return $l.current=Hl,i===null?Hl:i}function rf(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(gs&268435455)===0&&(ql&268435455)===0||Gr(_n,Tn)}function tc(i,s){var l=Tt;Tt|=2;var d=I0();(_n!==i||Tn!==s)&&(gr=null,xs(i,s));do try{bE();break}catch(g){N0(i,g)}while(!0);if(gd(),Tt=l,$l.current=d,an!==null)throw Error(t(261));return _n=null,Tn=0,hn}function bE(){for(;an!==null;)U0(an)}function CE(){for(;an!==null&&!ul();)U0(an)}function U0(i){var s=B0(i.alternate,i,ii);i.memoizedProps=i.pendingProps,s===null?F0(i):an=s,$d.current=null}function F0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=yE(l,s,ii),l!==null){an=l;return}}else{if(l=SE(l,s),l!==null){l.flags&=32767,an=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{hn=6,an=null;return}}if(s=s.sibling,s!==null){an=s;return}an=s=i}while(s!==null);hn===0&&(hn=5)}function _s(i,s,l){var d=pt,g=mi.transition;try{mi.transition=null,pt=1,RE(i,s,l,d)}finally{mi.transition=g,pt=d}return null}function RE(i,s,l,d){do lo();while(Vr!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(_t(i,x),i===_n&&(an=_n=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Zl||(Zl=!0,z0(C,function(){return lo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=mi.transition,mi.transition=null;var b=pt;pt=1;var B=Tt;Tt|=4,$d.current=null,EE(i,l),A0(l,i),qM(id),fl=!!nd,id=nd=null,i.current=l,wE(l),Uu(),Tt=B,pt=b,mi.transition=x}else i.current=l;if(Zl&&(Zl=!1,Vr=i,Jl=g),x=i.pendingLanes,x===0&&(zr=null),Ie(l.stateNode),$n(i,$t()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(Kl)throw Kl=!1,i=Zd,Zd=null,i;return(Jl&1)!==0&&i.tag!==0&&lo(),x=i.pendingLanes,(x&1)!==0?i===Jd?Ea++:(Ea=0,Jd=i):Ea=0,Fr(),null}function lo(){if(Vr!==null){var i=Ei(Jl),s=mi.transition,l=pt;try{if(mi.transition=null,pt=16>i?16:i,Vr===null)var d=!1;else{if(i=Vr,Vr=null,Jl=0,(Tt&6)!==0)throw Error(t(331));var g=Tt;for(Tt|=4,He=i.current;He!==null;){var x=He,b=x.child;if((He.flags&16)!==0){var B=x.deletions;if(B!==null){for(var V=0;V<B.length;V++){var ue=B[V];for(He=ue;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:ya(8,ye,x)}var Me=ye.child;if(Me!==null)Me.return=ye,He=Me;else for(;He!==null;){ye=He;var _e=ye.sibling,Be=ye.return;if(S0(ye),ye===ue){He=null;break}if(_e!==null){_e.return=Be,He=_e;break}He=Be}}}var je=x.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}He=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,He=b;else e:for(;He!==null;){if(x=He,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ya(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,He=ne;break e}He=x.return}}var j=i.current;for(He=j;He!==null;){b=He;var oe=b.child;if((b.subtreeFlags&2064)!==0&&oe!==null)oe.return=b,He=oe;else e:for(b=j;He!==null;){if(B=He,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Yl(9,B)}}catch(et){Qt(B,B.return,et)}if(B===b){He=null;break e}var Te=B.sibling;if(Te!==null){Te.return=B.return,He=Te;break e}He=B.return}}if(Tt=g,Fr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(te,i)}catch{}d=!0}return d}finally{pt=l,mi.transition=s}}return!1}function k0(i,s,l){s=ro(l,s),s=t0(i,s,1),i=Or(i,s,1),s=On(),i!==null&&(nn(i,1,s),$n(i,s))}function Qt(i,s,l){if(i.tag===3)k0(i,i,l);else for(;s!==null;){if(s.tag===3){k0(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(zr===null||!zr.has(d))){i=ro(l,i),i=n0(s,i,1),s=Or(s,i,1),i=On(),s!==null&&(nn(s,1,i),$n(s,i));break}}s=s.return}}function PE(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=On(),i.pingedLanes|=i.suspendedLanes&l,_n===i&&(Tn&l)===l&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>$t()-Kd?xs(i,0):qd|=l),$n(i,s)}function O0(i,s){s===0&&((i.mode&1)===0?s=1:(s=ut,ut<<=1,(ut&130023424)===0&&(ut=4194304)));var l=On();i=hr(i,s),i!==null&&(nn(i,s,l),$n(i,l))}function DE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),O0(i,l)}function LE(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),O0(i,l)}var B0;B0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Wn.current)jn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return jn=!1,_E(i,s,l);jn=(i.flags&131072)!==0}else jn=!1,Yt&&(s.flags&1048576)!==0&&xg(s,Pl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Xl(i,s),i=s.pendingProps;var g=Ks(s,Rn.current);no(s,l),g=bd(null,s,d,i,g,l);var x=Cd();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(d)?(x=!0,bl(s)):x=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,yd(s),g.updater=Gl,s.stateNode=g,g._reactInternals=s,Id(s,d,i,l),s=Od(null,s,d,!0,x,l)):(s.tag=0,Yt&&x&&ud(s),kn(null,s,g,l),s=s.child),s;case 16:d=s.elementType;e:{switch(Xl(i,s),i=s.pendingProps,g=d._init,d=g(d._payload),s.type=d,g=s.tag=IE(d),i=Ri(d,i),g){case 0:s=kd(null,s,d,i,l);break e;case 1:s=d0(null,s,d,i,l);break e;case 11:s=o0(null,s,d,i,l);break e;case 14:s=a0(null,s,d,Ri(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Ri(d,g),kd(i,s,d,g,l);case 1:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Ri(d,g),d0(i,s,d,g,l);case 3:e:{if(f0(s),i===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,g=x.element,bg(i,s),Fl(s,d,null,l);var b=s.memoizedState;if(d=b.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){g=ro(Error(t(423)),s),s=h0(i,s,d,l,g);break e}else if(d!==g){g=ro(Error(t(424)),s),s=h0(i,s,d,l,g);break e}else for(ni=Nr(s.stateNode.containerInfo.firstChild),ti=s,Yt=!0,Ci=null,l=Tg(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qs(),d===g){s=mr(i,s,l);break e}kn(i,s,d,l)}s=s.child}return s;case 5:return Pg(s),i===null&&hd(s),d=s.type,g=s.pendingProps,x=i!==null?i.memoizedProps:null,b=g.children,rd(d,g)?b=null:x!==null&&rd(d,x)&&(s.flags|=32),u0(i,s),kn(i,s,b,l),s.child;case 6:return i===null&&hd(s),null;case 13:return p0(i,s,l);case 4:return Sd(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=eo(s,null,d,l):kn(i,s,d,l),s.child;case 11:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Ri(d,g),o0(i,s,d,g,l);case 7:return kn(i,s,s.pendingProps,l),s.child;case 8:return kn(i,s,s.pendingProps.children,l),s.child;case 12:return kn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,g=s.pendingProps,x=s.memoizedProps,b=g.value,zt(Nl,d._currentValue),d._currentValue=b,x!==null)if(bi(x.value,b)){if(x.children===g.children&&!Wn.current){s=mr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var B=x.dependencies;if(B!==null){b=x.child;for(var V=B.firstContext;V!==null;){if(V.context===d){if(x.tag===1){V=pr(-1,l&-l),V.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ue.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),xd(x.return,l,s),B.lanes|=l;break}V=V.next}}else if(x.tag===10)b=x.type===s.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=l,B=b.alternate,B!==null&&(B.lanes|=l),xd(b,l,s),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===s){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}kn(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,d=s.pendingProps.children,no(s,l),g=hi(g),d=d(g),s.flags|=1,kn(i,s,d,l),s.child;case 14:return d=s.type,g=Ri(d,s.pendingProps),g=Ri(d.type,g),a0(i,s,d,g,l);case 15:return l0(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:Ri(d,g),Xl(i,s),s.tag=1,Xn(d)?(i=!0,bl(s)):i=!1,no(s,l),Qg(s,d,g),Id(s,d,g,l),Od(null,s,d,!0,i,l);case 19:return g0(i,s,l);case 22:return c0(i,s,l)}throw Error(t(156,s.tag))};function z0(i,s){return ls(i,s)}function NE(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(i,s,l,d){return new NE(i,s,l,d)}function sf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function IE(i){if(typeof i=="function")return sf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===Q)return 14}return 2}function Wr(i,s){var l=i.alternate;return l===null?(l=gi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function nc(i,s,l,d,g,x){var b=2;if(d=i,typeof i=="function")sf(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case F:return ys(l.children,g,x,s);case E:b=8,g|=8;break;case N:return i=gi(12,l,s,g|2),i.elementType=N,i.lanes=x,i;case Z:return i=gi(13,l,s,g),i.elementType=Z,i.lanes=x,i;case W:return i=gi(19,l,s,g),i.elementType=W,i.lanes=x,i;case ie:return ic(l,g,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:b=10;break e;case z:b=9;break e;case $:b=11;break e;case Q:b=14;break e;case fe:b=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=gi(b,l,s,g),s.elementType=i,s.type=d,s.lanes=x,s}function ys(i,s,l,d){return i=gi(7,i,d,s),i.lanes=l,i}function ic(i,s,l,d){return i=gi(22,i,d,s),i.elementType=ie,i.lanes=l,i.stateNode={isHidden:!1},i}function of(i,s,l){return i=gi(6,i,null,s),i.lanes=l,i}function af(i,s,l){return s=gi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function UE(i,s,l,d,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oe(0),this.expirationTimes=Oe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(i,s,l,d,g,x,b,B,V){return i=new UE(i,s,l,B,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=gi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(x),i}function FE(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function V0(i){if(!i)return Ur;i=i._reactInternals;e:{if(Fn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Xn(l))return mg(i,l,s)}return s}function H0(i,s,l,d,g,x,b,B,V){return i=lf(l,d,!0,i,g,x,b,B,V),i.context=V0(null),l=i.current,d=On(),g=Hr(l),x=pr(d,g),x.callback=s??null,Or(l,x,g),i.current.lanes=g,nn(i,g,d),$n(i,d),i}function rc(i,s,l,d){var g=s.current,x=On(),b=Hr(g);return l=V0(l),s.context===null?s.context=l:s.pendingContext=l,s=pr(x,b),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Or(g,s,b),i!==null&&(Li(i,g,b,x),Ul(i,g,b)),b}function sc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function G0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function cf(i,s){G0(i,s),(i=i.alternate)&&G0(i,s)}function kE(){return null}var W0=typeof reportError=="function"?reportError:function(i){console.error(i)};function uf(i){this._internalRoot=i}oc.prototype.render=uf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));rc(i,s,null,null)},oc.prototype.unmount=uf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;vs(function(){rc(null,i,null,null)}),s[cr]=null}};function oc(i){this._internalRoot=i}oc.prototype.unstable_scheduleHydration=function(i){if(i){var s=wi();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Pr.length&&s!==0&&s<Pr[l].priority;l++);Pr.splice(l,0,i),l===0&&Pm(i)}};function df(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ac(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function X0(){}function OE(i,s,l,d,g){if(g){if(typeof d=="function"){var x=d;d=function(){var ue=sc(b);x.call(ue)}}var b=H0(s,d,i,0,null,!1,!1,"",X0);return i._reactRootContainer=b,i[cr]=b.current,aa(i.nodeType===8?i.parentNode:i),vs(),b}for(;g=i.lastChild;)i.removeChild(g);if(typeof d=="function"){var B=d;d=function(){var ue=sc(V);B.call(ue)}}var V=lf(i,0,!1,null,null,!1,!1,"",X0);return i._reactRootContainer=V,i[cr]=V.current,aa(i.nodeType===8?i.parentNode:i),vs(function(){rc(s,V,l,d)}),V}function lc(i,s,l,d,g){var x=l._reactRootContainer;if(x){var b=x;if(typeof g=="function"){var B=g;g=function(){var V=sc(b);B.call(V)}}rc(s,b,i,g)}else b=OE(l,s,i,g,d);return sc(b)}lr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=ze(s.pendingLanes);l!==0&&(Cn(s,l|1),$n(s,$t()),(Tt&6)===0&&(ao=$t()+500,Fr()))}break;case 13:vs(function(){var d=hr(i,1);if(d!==null){var g=On();Li(d,i,1,g)}}),cf(i,1)}},Rt=function(i){if(i.tag===13){var s=hr(i,134217728);if(s!==null){var l=On();Li(s,i,134217728,l)}cf(i,134217728)}},jt=function(i){if(i.tag===13){var s=Hr(i),l=hr(i,s);if(l!==null){var d=On();Li(l,i,s,d)}cf(i,s)}},wi=function(){return pt},Ut=function(i,s){var l=pt;try{return pt=i,s()}finally{pt=l}},nt=function(i,s,l){switch(s){case"input":if(ht(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var g=Tl(d);if(!g)throw Error(t(90));dt(d),ht(d,g)}}}break;case"textarea":un(i,l);break;case"select":s=l.value,s!=null&&Nt(i,!!l.multiple,s,!1)}},Fe=tf,ve=vs;var BE={usingClientEntryPoint:!1,Events:[ua,$s,Tl,me,Re,tf]},wa={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zE={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=as(i),i===null?null:i.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||kE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{te=cc.inject(zE),ee=cc}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BE,qn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(s))throw Error(t(200));return FE(i,s,null,l)},qn.createRoot=function(i,s){if(!df(i))throw Error(t(299));var l=!1,d="",g=W0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=lf(i,1,!1,null,null,l,!1,d,g),i[cr]=s.current,aa(i.nodeType===8?i.parentNode:i),new uf(s)},qn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=as(s),i=i===null?null:i.stateNode,i},qn.flushSync=function(i){return vs(i)},qn.hydrate=function(i,s,l){if(!ac(s))throw Error(t(200));return lc(null,i,s,!0,l)},qn.hydrateRoot=function(i,s,l){if(!df(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,x="",b=W0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=H0(s,null,i,1,l??null,g,!1,x,b),i[cr]=s.current,aa(i),d)for(i=0;i<d.length;i++)l=d[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new oc(s)},qn.render=function(i,s,l){if(!ac(s))throw Error(t(200));return lc(null,i,s,!1,l)},qn.unmountComponentAtNode=function(i){if(!ac(i))throw Error(t(40));return i._reactRootContainer?(vs(function(){lc(null,null,i,!1,function(){i._reactRootContainer=null,i[cr]=null})}),!0):!1},qn.unstable_batchedUpdates=tf,qn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!ac(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return lc(i,s,l,!1,d)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Q0;function qE(){if(Q0)return pf.exports;Q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),pf.exports=$E(),pf.exports}var ev;function KE(){if(ev)return uc;ev=1;var n=qE();return uc.createRoot=n.createRoot,uc.hydrateRoot=n.hydrateRoot,uc}var ZE=KE();const JE=w_(ZE),Lp=xe.createContext({});function ts(n){const e=xe.useRef(null);return e.current===null&&(e.current=n()),e.current}const QE=typeof window<"u",Ja=QE?xe.useLayoutEffect:xe.useEffect,Mu=xe.createContext(null);function Np(n,e){n.indexOf(e)===-1&&n.push(e)}function nu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Wi=(n,e,t)=>t>e?e:t<n?n:t;let Eu=()=>{};const ns={},T_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),A_=n=>typeof n=="object"&&n!==null,b_=n=>/^0[^.\s]+$/u.test(n);function C_(n){let e;return()=>(e===void 0&&(e=n()),e)}const Zn=n=>n,Qa=(...n)=>n.reduce((e,t)=>r=>t(e(r))),No=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class Ip{constructor(){this.subscriptions=[]}add(e){return Np(this.subscriptions,e),()=>nu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ai=n=>n*1e3,Si=n=>n/1e3,Up=(n,e)=>e?n*(1e3/e):0,R_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,e1=1e-7,t1=12;function n1(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=R_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>e1&&++u<t1);return c}function el(n,e,t,r){if(n===e&&t===r)return Zn;const o=a=>n1(a,0,1,n,t);return a=>a===0||a===1?a:R_(o(a),e,r)}const P_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,D_=n=>e=>1-n(1-e),L_=el(.33,1.53,.69,.99),Fp=D_(L_),N_=P_(Fp),I_=n=>n>=1?1:(n*=2)<1?.5*Fp(n):.5*(2-Math.pow(2,-10*(n-1))),kp=n=>1-Math.sin(Math.acos(n)),U_=D_(kp),F_=P_(kp),i1=el(.42,0,1,1),r1=el(0,0,.58,1),k_=el(.42,0,.58,1),s1=n=>Array.isArray(n)&&typeof n[0]!="number",O_=n=>Array.isArray(n)&&typeof n[0]=="number",o1={linear:Zn,easeIn:i1,easeInOut:k_,easeOut:r1,circIn:kp,circInOut:F_,circOut:U_,backIn:Fp,backInOut:N_,backOut:L_,anticipate:I_},a1=n=>typeof n=="string",tv=n=>{if(O_(n)){Eu(n.length===4);const[e,t,r,o]=n;return el(e,t,r,o)}else if(a1(n))return o1[n];return n},dc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l1(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(f.schedule(h),n()),h(c)}const f={schedule:(h,p=!1,v=!1)=>{const _=v&&r?e:t;return p&&a.add(h),_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0;const p=e;e=t,t=p,e.forEach(u),e.clear(),r=!1,o&&(o=!1,f.process(h))}};return f}const c1=40;function B_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=dc.reduce((I,T)=>(I[T]=l1(a),I),{}),{setup:u,read:f,resolveKeyframes:h,preUpdate:p,update:v,preRender:m,render:_,postRender:M}=c,A=()=>{const I=ns.useManualTiming,T=I?o.timestamp:performance.now();t=!1,I||(o.delta=r?1e3/60:Math.max(Math.min(T-o.timestamp,c1),1)),o.timestamp=T,o.isProcessing=!0,u.process(o),f.process(o),h.process(o),p.process(o),v.process(o),m.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(A))},S=()=>{t=!0,r=!0,o.isProcessing||n(A)};return{schedule:dc.reduce((I,T)=>{const D=c[T];return I[T]=(L,F=!1,E=!1)=>(t||S(),D.schedule(L,F,E)),I},{}),cancel:I=>{for(let T=0;T<dc.length;T++)c[dc[T]].cancel(I)},state:o,steps:c}}const{schedule:At,cancel:Mi,state:Mn,steps:vf}=B_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zn,!0);let Gc;function u1(){Gc=void 0}const zn={now:()=>(Gc===void 0&&zn.set(Mn.isProcessing||ns.useManualTiming?Mn.timestamp:performance.now()),Gc),set:n=>{Gc=n,queueMicrotask(u1)}},z_=n=>e=>typeof e=="string"&&e.startsWith(n),V_=z_("--"),d1=z_("var(--"),Op=n=>d1(n)?f1.test(n.split("/*")[0].trim()):!1,f1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function nv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Oo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Xa={...Oo,transform:n=>Wi(0,1,n)},fc={...Oo,default:1},Oa=n=>Math.round(n*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h1(n){return n==null}const p1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zp=(n,e)=>t=>!!(typeof t=="string"&&p1.test(t)&&t.startsWith(n)||e&&!h1(t)&&Object.prototype.hasOwnProperty.call(t,e)),H_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Bp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},m1=n=>Wi(0,255,n),xf={...Oo,transform:n=>Math.round(m1(n))},Cs={test:zp("rgb","red"),parse:H_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+xf.transform(n)+", "+xf.transform(e)+", "+xf.transform(t)+", "+Oa(Xa.transform(r))+")"};function g1(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ph={test:zp("#"),parse:g1,transform:Cs.transform},tl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Mr=tl("deg"),ir=tl("%"),Ye=tl("px"),v1=tl("vh"),x1=tl("vw"),iv={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},Ao={test:zp("hsl","hue"),parse:H_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ir.transform(Oa(e))+", "+ir.transform(Oa(t))+", "+Oa(Xa.transform(r))+")"},cn={test:n=>Cs.test(n)||ph.test(n)||Ao.test(n),parse:n=>Cs.test(n)?Cs.parse(n):Ao.test(n)?Ao.parse(n):ph.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Cs.transform(n):Ao.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},_1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Bp))==null?void 0:e.length)||0)+(((t=n.match(_1))==null?void 0:t.length)||0)>0}const G_="number",W_="color",S1="var",M1="var(",rv="${}",E1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Io(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(E1,f=>(cn.test(f)?(r.color.push(a),o.push(W_),t.push(cn.parse(f))):f.startsWith(M1)?(r.var.push(a),o.push(S1),t.push(f)):(r.number.push(a),o.push(G_),t.push(parseFloat(f))),++a,rv)).split(rv);return{values:t,split:u,indexes:r,types:o}}function w1(n){return Io(n).values}function X_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===G_?o+=Oa(r[a]):c===W_?o+=cn.transform(r[a]):o+=r[a]}return o}}function T1(n){return X_(Io(n))}const A1=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,b1=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:A1(n);function C1(n){const e=Io(n);return X_(e)(e.values.map((r,o)=>b1(r,e.split[o])))}const Vi={test:y1,parse:w1,createTransformer:T1,getAnimatableNone:C1};function _f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function R1({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;o=_f(f,u,n+1/3),a=_f(f,u,n),c=_f(f,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function iu(n,e){return t=>t>0?e:n}const Bt=(n,e,t)=>n+(e-n)*t,yf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},P1=[ph,Cs,Ao],D1=n=>P1.find(e=>e.test(n));function sv(n){const e=D1(n);if(!e)return!1;let t=e.parse(n);return e===Ao&&(t=R1(t)),t}const ov=(n,e)=>{const t=sv(n),r=sv(e);if(!t||!r)return iu(n,e);const o={...t};return a=>(o.red=yf(t.red,r.red,a),o.green=yf(t.green,r.green,a),o.blue=yf(t.blue,r.blue,a),o.alpha=Bt(t.alpha,r.alpha,a),Cs.transform(o))},mh=new Set(["none","hidden"]);function L1(n,e){return mh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function N1(n,e){return t=>Bt(n,e,t)}function Vp(n){return typeof n=="number"?N1:typeof n=="string"?Op(n)?iu:cn.test(n)?ov:F1:Array.isArray(n)?j_:typeof n=="object"?cn.test(n)?ov:I1:iu}function j_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Vp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function I1(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Vp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function U1(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const F1=(n,e)=>{const t=Vi.createTransformer(e),r=Io(n),o=Io(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?mh.has(n)&&!o.values.length||mh.has(e)&&!r.values.length?L1(n,e):Qa(j_(U1(r,o),o.values),t):iu(n,e)};function Y_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Bt(n,e,t):Vp(n)(n,e)}const k1=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>At.update(e,t),stop:()=>Mi(e),now:()=>Mn.isProcessing?Mn.timestamp:zn.now()}},$_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ru=2e4;function Hp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<ru;)e+=t,r=n.next(e);return e>=ru?1/0:e}function O1(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Hp(r),ru);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:Si(o)}}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function gh(n,e){return n*Math.sqrt(1-e*e)}const B1=12;function z1(n,e,t){let r=t;for(let o=1;o<B1;o++)r=r-n(r)/e(r);return r}const Sf=.001;function V1({duration:n=en.duration,bounce:e=en.bounce,velocity:t=en.velocity,mass:r=en.mass}){let o,a,c=1-e;c=Wi(en.minDamping,en.maxDamping,c),n=Wi(en.minDuration,en.maxDuration,Si(n)),c<1?(o=h=>{const p=h*c,v=p*n,m=p-t,_=gh(h,c),M=Math.exp(-v);return Sf-m/_*M},a=h=>{const v=h*c*n,m=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=gh(Math.pow(h,2),c);return(-o(h)+Sf>0?-1:1)*((m-_)*M)/A}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Sf+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,f=z1(o,a,u);if(n=ai(n),isNaN(f))return{stiffness:en.stiffness,damping:en.damping,duration:n};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const H1=["duration","bounce"],G1=["stiffness","damping","mass"];function av(n,e){return e.some(t=>n[t]!==void 0)}function W1(n){let e={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...n};if(!av(n,G1)&&av(n,H1))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Wi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:en.mass,stiffness:o,damping:a}}else{const t=V1({...n,velocity:0});e={...e,...t,mass:en.mass},e.isResolvedFromDuration=!0}return e}function su(n=en.visualDuration,e=en.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:h,mass:p,duration:v,velocity:m,isResolvedFromDuration:_}=W1({...t,velocity:-Si(t.velocity||0)}),M=m||0,A=h/(2*Math.sqrt(f*p)),S=c-a,y=Si(Math.sqrt(f/p)),R=Math.abs(S)<5;r||(r=R?en.restSpeed.granular:en.restSpeed.default),o||(o=R?en.restDelta.granular:en.restDelta.default);let I,T,D,L,F,E;if(A<1)D=gh(y,A),L=(M+A*y*S)/D,I=O=>{const z=Math.exp(-A*y*O);return c-z*(L*Math.sin(D*O)+S*Math.cos(D*O))},F=A*y*L+S*D,E=A*y*S-L*D,T=O=>Math.exp(-A*y*O)*(F*Math.sin(D*O)+E*Math.cos(D*O));else if(A===1){I=z=>c-Math.exp(-y*z)*(S+(M+y*S)*z);const O=M+y*S;T=z=>Math.exp(-y*z)*(y*O*z-M)}else{const O=y*Math.sqrt(A*A-1);I=W=>{const Q=Math.exp(-A*y*W),fe=Math.min(O*W,300);return c-Q*((M+A*y*S)*Math.sinh(fe)+O*S*Math.cosh(fe))/O};const z=(M+A*y*S)/O,$=A*y*z-S*O,Z=A*y*S-z*O;T=W=>{const Q=Math.exp(-A*y*W),fe=Math.min(O*W,300);return Q*($*Math.sinh(fe)+Z*Math.cosh(fe))}}const N={calculatedDuration:_&&v||null,velocity:O=>ai(T(O)),next:O=>{if(!_&&A<1){const $=Math.exp(-A*y*O),Z=Math.sin(D*O),W=Math.cos(D*O),Q=c-$*(L*Z+S*W),fe=ai($*(F*Z+E*W));return u.done=Math.abs(fe)<=r&&Math.abs(c-Q)<=o,u.value=u.done?c:Q,u}const z=I(O);if(_)u.done=O>=v;else{const $=ai(T(O));u.done=Math.abs($)<=r&&Math.abs(c-z)<=o}return u.value=u.done?c:z,u},toString:()=>{const O=Math.min(Hp(N),ru),z=$_($=>N.next(O*$).value,O,30);return O+"ms "+z},toTransition:()=>{}};return N}su.applyToOptions=n=>{const e=O1(n,100,su);return n.ease=e.ease,n.duration=ai(e.duration),n.type="keyframes",n};const X1=5;function q_(n,e,t){const r=Math.max(e-X1,0);return Up(t-n(r),e-r)}function vh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:f,restDelta:h=.5,restSpeed:p}){const v=n[0],m={done:!1,value:v},_=E=>u!==void 0&&E<u||f!==void 0&&E>f,M=E=>u===void 0?f:f===void 0||Math.abs(u-E)<Math.abs(f-E)?u:f;let A=t*e;const S=v+A,y=c===void 0?S:c(S);y!==S&&(A=y-v);const R=E=>-A*Math.exp(-E/r),I=E=>y+R(E),T=E=>{const N=R(E),O=I(E);m.done=Math.abs(N)<=h,m.value=m.done?y:O};let D,L;const F=E=>{_(m.value)&&(D=E,L=su({keyframes:[m.value,M(m.value)],velocity:q_(I,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let N=!1;return!L&&D===void 0&&(N=!0,T(E),F(E)),D!==void 0&&E>=D?L.next(E-D):(!N&&T(E),m)}}}function j1(n,e,t){const r=[],o=t||ns.mix||Y_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const f=Array.isArray(e)?e[c]||Zn:e;u=Qa(f,u)}r.push(u)}return r}function Gp(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Eu(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=j1(e,r,o),f=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(f>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const m=No(n[v],n[v+1],p);return u[v](m)};return t?p=>h(Wi(n[0],n[a-1],p)):h}function Y1(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=No(0,e,r);n.push(Bt(t,1,o))}}function K_(n){const e=[0];return Y1(e,n.length-1),e}function $1(n,e){return n.map(t=>t*e)}function q1(n,e){return n.map(()=>e||k_).splice(0,n.length-1)}function Ba({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=s1(r)?r.map(tv):tv(r),a={done:!1,value:e[0]},c=$1(t&&t.length===e.length?t:K_(e),n),u=Gp(c,e,{ease:Array.isArray(o)?o:q1(e,o)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const K1=n=>n!==null;function wu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(K1),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const Z1={decay:vh,inertia:vh,tween:Ba,keyframes:Ba,spring:su};function Z_(n){typeof n.type=="string"&&(n.type=Z1[n.type])}class Wp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const J1=n=>n/100;class ou extends Wp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==zn.now()&&this.tick(zn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Z_(e);const{type:t=Ba,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const f=t||Ba;f!==Ba&&typeof u[0]!="number"&&(this.mixKeyframes=Qa(J1,Y_(u[0],u[1])),u=[0,100]);const h=f({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Hp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:m,repeatDelay:_,type:M,onUpdate:A,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let I=this.currentTime,T=r;if(v){const E=Math.min(this.currentTime,o)/u;let N=Math.floor(E),O=E%1;!O&&E>=1&&(O=1),O===1&&N--,N=Math.min(N,v+1),!!(N%2)&&(m==="reverse"?(O=1-O,_&&(O-=_/u)):m==="mirror"&&(T=c)),I=Wi(0,1,O)*u}let D;R?(this.delayState.value=p[0],D=this.delayState):D=T.next(I),a&&!R&&(D.value=a(D.value));let{done:L}=D;!R&&f!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&M!==vh&&(D.value=wu(p,this.options,S,this.speed)),A&&A(D.value),F&&this.finish(),D}then(e,t){return this.finished.then(e,t)}get duration(){return Si(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(this.currentTime)}set time(e){e=ai(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return q_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(zn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Si(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=k1,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(zn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Q1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Rs=n=>n*180/Math.PI,xh=n=>{const e=Rs(Math.atan2(n[1],n[0]));return _h(e)},ew={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:xh,rotateZ:xh,skewX:n=>Rs(Math.atan(n[1])),skewY:n=>Rs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},_h=n=>(n=n%360,n<0&&(n+=360),n),lv=xh,cv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),uv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),tw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cv,scaleY:uv,scale:n=>(cv(n)+uv(n))/2,rotateX:n=>_h(Rs(Math.atan2(n[6],n[5]))),rotateY:n=>_h(Rs(Math.atan2(-n[2],n[0]))),rotateZ:lv,rotate:lv,skewX:n=>Rs(Math.atan(n[4])),skewY:n=>Rs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function yh(n){return n.includes("scale")?1:0}function Sh(n,e){if(!n||n==="none")return yh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=tw,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ew,o=u}if(!o)return yh(e);const a=r[e],c=o[1].split(",").map(iw);return typeof a=="function"?a(c):c[a]}const nw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Sh(t,e)};function iw(n){return parseFloat(n.trim())}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zo=new Set([...Bo,"pathRotation"]),dv=n=>n===Oo||n===Ye,rw=new Set(["x","y","z"]),sw=Bo.filter(n=>!rw.has(n));function ow(n){const e=[];return sw.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const es={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Sh(e,"x"),y:(n,{transform:e})=>Sh(e,"y")};es.translateX=es.x;es.translateY=es.y;const Ls=new Set;let Mh=!1,Eh=!1,wh=!1;function J_(){if(Eh){const n=Array.from(Ls).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=ow(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))==null||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Eh=!1,Mh=!1,Ls.forEach(n=>n.complete(wh)),Ls.clear()}function Q_(){Ls.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Eh=!0)})}function aw(){wh=!0,Q_(),J_(),wh=!1}class Xp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ls.add(this),Mh||(Mh=!0,At.read(Q_),At.resolveKeyframes(J_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}Q1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ls.delete(this)}cancel(){this.state==="scheduled"&&(Ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const lw=n=>n.startsWith("--");function ey(n,e,t){lw(e)?n.style.setProperty(e,t):n.style[e]=t}const cw={};function jp(n,e){const t=C_(n);return()=>cw[e]??t()}const Yp=jp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ty=jp(()=>window.ViewTimeline!==void 0,"viewTimeline"),ny=jp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ia=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,fv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ia([0,.65,.55,1]),circOut:Ia([.55,0,1,.45]),backIn:Ia([.31,.01,.66,-.59]),backOut:Ia([.33,1.53,.69,.99])};function iy(n,e){if(n)return typeof n=="function"?ny()?$_(n,e):"ease-out":O_(n)?Ia(n):Array.isArray(n)?n.map(t=>iy(t,e)||fv.easeOut):fv[n]}function uw(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:f}={},h=void 0){const p={[e]:t};f&&(p.offset=f);const v=iy(u,o);Array.isArray(v)&&(p.easing=v);const m={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(m.pseudoElement=h),n.animate(p,m)}function ry(n){return typeof n=="function"&&"applyToOptions"in n}function dw({type:n,...e}){return ry(n)&&ny()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class sy extends Wp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:f}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Eu(typeof e.type!="string");const h=dw(e);this.animation=uw(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=wu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),ey(t,r,p),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return Si(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Si(e)}get time(){return Si(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ai(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Yp()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),Zn):o(this)}}const oy={anticipate:I_,backInOut:N_,circInOut:F_};function fw(n){return n in oy}function hw(n){typeof n.ease=="string"&&fw(n.ease)&&(n.ease=oy[n.ease])}const Mf=10;class pw extends sy{constructor(e){hw(e),Z_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new ou({...c,autoplay:!1}),f=Math.max(Mf,zn.now()-this.startTime),h=Wi(0,Mf,f-Mf),p=u.sample(f).value,{name:v}=this.options;a&&v&&ey(a,v,p),t.setWithVelocity(u.sample(Math.max(0,f-h)).value,p,h),u.stop()}}const hv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vi.test(n)||n==="0")&&!n.startsWith("url("));function mw(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function gw(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=hv(o,e),u=hv(a,e);return!c||!u?!1:mw(n)||(t==="spring"||ry(t))&&r}function Th(n){n.duration=0,n.type="keyframes"}const ay=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),vw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function xw(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&vw.test(n[e]))return!0;return!1}const _w=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yw=C_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Sw(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:u}=n,f=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(f instanceof HTMLElement)&&!(f instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return yw()&&t&&(ay.has(t)||_w.has(t)&&xw(u))&&(t!=="transform"||!p)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const Mw=40;class Ew extends Wp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:f,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var A,S;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=zn.now();const m={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:f,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Xp;this.keyframeResolver=new _(u,(A,S,y)=>this.onKeyframesResolved(A,S,m,!y),f,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var y,R;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:f,isHandoff:h,onUpdate:p}=r;this.resolvedAt=zn.now();let v=!0;gw(e,a,c,u)||(v=!1,(ns.instantAnimations||!f)&&(p==null||p(wu(e,r,t))),e[0]=e[e.length-1],Th(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Mw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&Sw(_),A=(R=(y=_.motionValue)==null?void 0:y.owner)==null?void 0:R.current;let S;if(M)try{S=new pw({..._,element:A})}catch{S=new ou(_)}else S=new ou(_);S.finished.then(()=>{this.notifyFinished()}).catch(Zn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),aw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function ly(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const pv=30,ww=n=>!isNaN(parseFloat(n)),za={current:void 0};class Tw{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=zn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ww(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ip);const r=this.events[e].add(t);return e==="change"?()=>{r(),At.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return za.current&&za.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,pv);return Up(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Bi(n,e){return new Tw(n,e)}function cy(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function $p(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?cy(t,n):t}const Aw={type:"spring",stiffness:500,damping:25,restSpeed:10},bw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Cw={type:"keyframes",duration:.8},Rw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Pw=(n,{keyframes:e})=>e.length>2?Cw:zo.has(n)?n.startsWith("scale")?bw(e[1]):Aw:Rw,Dw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Lw(n){for(const e in n)if(!Dw.has(e))return!0;return!1}const qp=(n,e,t,r={},o,a)=>c=>{const u=$p(r,n)||{},f=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ai(f);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:m=>{e.set(m),u.onUpdate&&u.onUpdate(m)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};Lw(u)||Object.assign(p,Pw(n,p)),p.duration&&(p.duration=ai(p.duration)),p.repeatDelay&&(p.repeatDelay=ai(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Th(p),p.delay===0&&(v=!0)),(ns.instantAnimations||ns.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,Th(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const m=wu(p.keyframes,u);if(m!==void 0){At.update(()=>{p.onUpdate(m),p.onComplete()});return}}return u.isSync?new ou(p):new Ew(p)},Nw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Iw(n){const e=Nw.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function uy(n,e,t=1){const[r,o]=Iw(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return T_(c)?parseFloat(c):c}return Op(o)?uy(o,e,t+1):o}function mv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Kp(n,e,t,r){if(typeof e=="function"){const[o,a]=mv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=mv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ns(n,e,t){const r=n.getProps();return Kp(r,e,t!==void 0?t:r.custom,n)}const dy=new Set(["width","height","top","left","right","bottom",...Bo]),Ah=n=>Array.isArray(n);function Uw(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Bi(t))}function Fw(n){return Ah(n)?n[n.length-1]||0:n}function kw(n,e){const t=Ns(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=Fw(a[c]);Uw(n,c,u)}}const An=n=>!!(n&&n.getVelocity);function Ow(n){return!!(An(n)&&n.add)}function bh(n,e){const t=n.getValue("willChange");if(Ow(t))return t.add(e);if(!t&&ns.WillChange){const r=new ns.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Zp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Bw="framerAppearId",fy="data-"+Zp(Bw);function hy(n){return n.props[fy]}function zw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function py(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const f=n.getDefaultTransition();a=a?cy(a,f):f;const h=a==null?void 0:a.reduceMotion,p=a==null?void 0:a.skipAnimations;r&&(a=r);const v=[],m=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,u,a,t,v);for(const M in u){const A=n.getValue(M,n.latestValues[M]??null),S=u[M];if(S===void 0||m&&zw(m,M))continue;const y={delay:t,...$p(a||{},M)};p&&(y.skipAnimations=!0);const R=A.get();if(R!==void 0&&!A.isAnimating()&&!Array.isArray(S)&&S===R&&!y.velocity){At.update(()=>A.set(S));continue}let I=!1;if(window.MotionHandoffAnimation){const L=hy(n);if(L){const F=window.MotionHandoffAnimation(L,M,At);F!==null&&(y.startTime=F,I=!0)}}bh(n,M);const T=h??n.shouldReduceMotion;A.start(qp(M,A,S,T&&dy.has(M)?{type:!1}:y,n,I));const D=A.animation;D&&v.push(D)}if(c){const M=()=>At.update(()=>{c&&kw(n,c)});v.length?Promise.all(v).then(M):M()}return v}function Ch(n,e,t={}){var f;const r=Ns(n,e,t.type==="exit"?(f=n.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(py(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:m}=o;return Vw(n,e,h,p,v,m,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function Vw(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const f of n.variantChildren)f.notify("AnimationStart",e),u.push(Ch(f,e,{...c,delay:t+(typeof r=="function"?0:r)+ly(n.variantChildren,f,r,o,a)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(u)}function Hw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Ch(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Ch(n,e,t);else{const o=typeof e=="function"?Ns(n,e,t.custom):e;r=Promise.all(py(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Gw={test:n=>n==="auto",parse:n=>n},my=n=>e=>e.test(n),gy=[Oo,Ye,ir,Mr,x1,v1,Gw],gv=n=>gy.find(my(n));function Ww(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||b_(n):!0}const Xw=new Set(["brightness","contrast","saturate","opacity"]);function jw(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Bp)||[];if(!r)return n;const o=t.replace(r,"");let a=Xw.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const Yw=/\b([a-z-]*)\(.*?\)/gu,Rh={...Vi,getAnimatableNone:n=>{const e=n.match(Yw);return e?e.map(jw).join(" "):n}},Ph={...Vi,getAnimatableNone:n=>{const e=Vi.parse(n);return Vi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},vv={...Oo,transform:Math.round},$w={rotate:Mr,pathRotation:Mr,rotateX:Mr,rotateY:Mr,rotateZ:Mr,scale:fc,scaleX:fc,scaleY:fc,scaleZ:fc,skew:Mr,skewX:Mr,skewY:Mr,distance:Ye,translateX:Ye,translateY:Ye,translateZ:Ye,x:Ye,y:Ye,z:Ye,perspective:Ye,transformPerspective:Ye,opacity:Xa,originX:iv,originY:iv,originZ:Ye},au={borderWidth:Ye,borderTopWidth:Ye,borderRightWidth:Ye,borderBottomWidth:Ye,borderLeftWidth:Ye,borderRadius:Ye,borderTopLeftRadius:Ye,borderTopRightRadius:Ye,borderBottomRightRadius:Ye,borderBottomLeftRadius:Ye,width:Ye,maxWidth:Ye,height:Ye,maxHeight:Ye,top:Ye,right:Ye,bottom:Ye,left:Ye,inset:Ye,insetBlock:Ye,insetBlockStart:Ye,insetBlockEnd:Ye,insetInline:Ye,insetInlineStart:Ye,insetInlineEnd:Ye,padding:Ye,paddingTop:Ye,paddingRight:Ye,paddingBottom:Ye,paddingLeft:Ye,paddingBlock:Ye,paddingBlockStart:Ye,paddingBlockEnd:Ye,paddingInline:Ye,paddingInlineStart:Ye,paddingInlineEnd:Ye,margin:Ye,marginTop:Ye,marginRight:Ye,marginBottom:Ye,marginLeft:Ye,marginBlock:Ye,marginBlockStart:Ye,marginBlockEnd:Ye,marginInline:Ye,marginInlineStart:Ye,marginInlineEnd:Ye,fontSize:Ye,backgroundPositionX:Ye,backgroundPositionY:Ye,...$w,zIndex:vv,fillOpacity:Xa,strokeOpacity:Xa,numOctaves:vv},qw={...au,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:Rh,WebkitFilter:Rh,mask:Ph,WebkitMask:Ph},vy=n=>qw[n],Kw=new Set([Rh,Ph]);function xy(n,e){let t=vy(n);return Kw.has(t)||(t=Vi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Zw=new Set(["auto","none","0"]);function Jw(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!Zw.has(a)&&Io(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=xy(t,o)}class Qw extends Xp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),Op(v))){const m=uy(v,t.current);m!==void 0&&(e[p]=m),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!dy.has(r)||e.length!==2)return;const[o,a]=e,c=gv(o),u=gv(a),f=nv(o),h=nv(a);if(f!==h&&es[r]){this.needsMeasurement=!0;return}if(c!==u)if(dv(c)&&dv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else es[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||Ww(e[o]))&&r.push(o);r.length&&Jw(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=es[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=es[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([f,h])=>{e.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Jp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function _y(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Dh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Va(n){return A_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Uo,cancel:yy}=B_(queueMicrotask,!1),ki={x:!1,y:!1};function Sy(){return ki.x||ki.y}function eT(n){return n==="x"||n==="y"?ki[n]?null:(ki[n]=!0,()=>{ki[n]=!1}):ki.x||ki.y?null:(ki.x=ki.y=!0,()=>{ki.x=ki.y=!1})}function My(n,e){const t=_y(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function tT(n){return!(n.pointerType==="touch"||Sy())}function nT(n,e,t={}){const[r,o,a]=My(n,t);return r.forEach(c=>{let u=!1,f=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=S=>{h&&(h(S),h=void 0),p()},m=S=>{u=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),f&&(f=!1,v(S))},_=()=>{u=!0,window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",m,o)},M=S=>{if(S.pointerType!=="touch"){if(u){f=!0;return}v(S)}},A=S=>{if(!tT(S))return;f=!1;const y=e(c,S);typeof y=="function"&&(h=y,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",A,o),c.addEventListener("pointerdown",_,o)}),a}const Ey=(n,e)=>e?n===e?!0:Ey(n,e.parentElement):!1,Qp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,iT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rT(n){return iT.has(n.tagName)||n.isContentEditable===!0}const sT=new Set(["INPUT","SELECT","TEXTAREA"]);function oT(n){return sT.has(n.tagName)||n.isContentEditable===!0}const Wc=new WeakSet;function xv(n){return e=>{e.key==="Enter"&&n(e)}}function Ef(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const aT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=xv(()=>{if(Wc.has(t))return;Ef(t,"down");const o=xv(()=>{Ef(t,"up")}),a=()=>Ef(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function _v(n){return Qp(n)&&!Sy()}const yv=new WeakSet;function lT(n,e,t={}){const[r,o,a]=My(n,t),c=u=>{const f=u.currentTarget;if(!_v(u)||yv.has(u))return;Wc.add(f),t.stopPropagation&&yv.add(u);const h=e(f,u),p={...o,capture:!0},v=(M,A)=>{window.removeEventListener("pointerup",m,p),window.removeEventListener("pointercancel",_,p),Wc.has(f)&&Wc.delete(f),_v(M)&&typeof h=="function"&&h(M,{success:A})},m=M=>{v(M,f===window||f===document||t.useGlobalTarget||Ey(f,M.target))},_=M=>{v(M,!1)};window.addEventListener("pointerup",m,p),window.addEventListener("pointercancel",_,p)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Va(u)&&(u.addEventListener("focus",h=>aT(h,o)),!rT(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function em(n){return A_(n)&&"ownerSVGElement"in n}const Xc=new WeakMap;let Zr;const wy=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:em(r)&&"getBBox"in r?r.getBBox()[e]:r[t],cT=wy("inline","width","offsetWidth"),uT=wy("block","height","offsetHeight");function dT({target:n,borderBoxSize:e}){var t;(t=Xc.get(n))==null||t.forEach(r=>{r(n,{get width(){return cT(n,e)},get height(){return uT(n,e)}})})}function fT(n){n.forEach(dT)}function hT(){typeof ResizeObserver>"u"||(Zr=new ResizeObserver(fT))}function pT(n,e){Zr||hT();const t=_y(n);return t.forEach(r=>{let o=Xc.get(r);o||(o=new Set,Xc.set(r,o)),o.add(e),Zr==null||Zr.observe(r)}),()=>{t.forEach(r=>{const o=Xc.get(r);o==null||o.delete(e),o!=null&&o.size||Zr==null||Zr.unobserve(r)})}}const jc=new Set;let bo;function mT(){bo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};jc.forEach(e=>e(n))},window.addEventListener("resize",bo)}function gT(n){return jc.add(n),bo||mT(),()=>{jc.delete(n),!jc.size&&typeof bo=="function"&&(window.removeEventListener("resize",bo),bo=void 0)}}function Lh(n,e){return typeof n=="function"?gT(n):pT(n,e)}function Ty(n,e){let t;const r=()=>{const{currentTime:o}=e,c=(o===null?0:o.value)/100;t!==c&&n(c),t=c};return At.preUpdate(r,!0),()=>Mi(r)}function vT(n){return em(n)&&n.tagName==="svg"}function xT(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=Gp(o,a,c);return e?u(r):u}const _T=[...gy,cn,Vi],yT=n=>_T.find(my(n)),Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Co=()=>({x:Sv(),y:Sv()}),Mv=()=>({min:0,max:0}),pn=()=>({x:Mv(),y:Mv()}),ST=new WeakMap;function Tu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ja(n){return typeof n=="string"||Array.isArray(n)}const tm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nm=["initial",...tm];function Au(n){return Tu(n.animate)||nm.some(e=>ja(n[e]))}function Ay(n){return!!(Au(n)||n.variants)}function MT(n,e,t){for(const r in e){const o=e[r],a=t[r];if(An(o))n.addValue(r,o);else if(An(a))n.addValue(r,Bi(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Bi(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Nh={current:null},by={current:!1},ET=typeof window<"u";function wT(){if(by.current=!0,!!ET)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nh.current=n.matches;n.addEventListener("change",e),e()}else Nh.current=!1}const Ev=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lu={};function Cy(n){lu=n}function TT(){return lu}class AT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=zn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,At.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=Au(t),this.isVariantNode=Ay(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in m){const M=m[_];h[_]!==void 0&&An(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,ST.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(by.current||wT(),this.shouldReduceMotion=Nh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Mi(this.notifyUpdate),Mi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&ay.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:f,ease:h,duration:p}=t.accelerate,v=new sy({element:this.current,name:e,keyframes:u,times:f,ease:h,duration:ai(p)}),m=c(v);this.valueSubscriptions.set(e,()=>{m(),v.cancel()});return}const r=zo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&At.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lu){const t=lu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Ev.length;r++){const o=Ev[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=MT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Bi(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(T_(r)||b_(r))?r=parseFloat(r):!yT(r)&&Vi.test(t)&&(r=xy(e,t)),this.setBaseTarget(e,An(r)?r.get():r)),An(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=Kp(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!An(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ip),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Uo.render(this.render)}}class Ry extends AT{constructor(){super(...arguments),this.KeyframeResolver=Qw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class is{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Py({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function bT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function CT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function wf(n){return n===void 0||n===1}function Ih({scale:n,scaleX:e,scaleY:t}){return!wf(n)||!wf(e)||!wf(t)}function bs(n){return Ih(n)||Dy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Dy(n){return wv(n.x)||wv(n.y)}function wv(n){return n&&n!=="0%"}function cu(n,e,t){const r=n-t,o=e*r;return t+o}function Tv(n,e,t,r,o){return o!==void 0&&(n=cu(n,o,r)),cu(n,t,r)+e}function Uh(n,e=0,t=1,r,o){n.min=Tv(n.min,e,t,r,o),n.max=Tv(n.max,e,t,r,o)}function Ly(n,{x:e,y:t}){Uh(n.x,e.translate,e.scale,e.originPoint),Uh(n.y,t.translate,t.scale,t.originPoint)}const Av=.999999999999,bv=1.0000000000001;function RT(n,e,t,r=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let f=0;f<o;f++){a=t[f],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qi(n.x,-a.scroll.offset.x),Qi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Ly(n,c)),r&&bs(a.latestValues)&&Yc(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<bv&&e.x>Av&&(e.x=1),e.y<bv&&e.y>Av&&(e.y=1)}function Qi(n,e){n.min+=e,n.max+=e}function Cv(n,e,t,r,o=.5){const a=Bt(n.min,n.max,o);Uh(n,e,t,a,r)}function Rv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Yc(n,e,t){const r=t??n;Cv(n.x,Rv(e.x,r.x),e.scaleX,e.scale,e.originX),Cv(n.y,Rv(e.y,r.y),e.scaleY,e.scale,e.originY)}function Ny(n,e){return Py(CT(n.getBoundingClientRect(),e))}function PT(n,e,t){const r=Ny(n,t),{scroll:o}=e;return o&&(Qi(r.x,o.offset.x),Qi(r.y,o.offset.y)),r}const DT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LT=Bo.length;function NT(n,e,t){let r="",o=!0;for(let c=0;c<LT;c++){const u=Bo[c],f=n[u];if(f===void 0)continue;let h=!0;if(typeof f=="number")h=f===(u.startsWith("scale")?1:0);else{const p=parseFloat(f);h=u.startsWith("scale")?p===1:p===0}if(!h||t){const p=Dh(f,au[u]);if(!h){o=!1;const v=DT[u]||u;r+=`${v}(${p}) `}t&&(e[u]=p)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${Dh(a,au.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function im(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const f in e){const h=e[f];if(zo.has(f)){c=!0;continue}else if(V_(f)){o[f]=h;continue}else{const p=Dh(h,au[f]);f.startsWith("origin")?(u=!0,a[f]=p):r[f]=p}}if(e.transform||(c||t?r.transform=NT(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${h} ${p}`}}function Iy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Pv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Aa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ye.test(n))n=parseFloat(n);else return n;const t=Pv(n,e.target.x),r=Pv(n,e.target.y);return`${t}% ${r}%`}},IT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Vi.parse(n);if(o.length>5)return r;const a=Vi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=f;const h=Bt(u,f,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},Fh={borderRadius:{...Aa,applyTo:[...Jp]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:IT};function Uy(n,{layout:e,layoutId:t}){return zo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Fh[n]||n==="opacity")}function rm(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const u in r)(An(r[u])||o&&An(o[u])||Uy(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=r[u]);return a}function UT(n){return window.getComputedStyle(n)}class FT extends Ry{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}mount(e){Eu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var r;if(zo.has(t))return(r=this.projection)!=null&&r.isProjecting?yh(t):nw(e,t);{const o=UT(e),a=(V_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ny(e,t)}build(e,t,r){im(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return rm(e,t,r)}}const kT={offset:"stroke-dashoffset",array:"stroke-dasharray"},OT={offset:"strokeDashoffset",array:"strokeDasharray"};function BT(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?kT:OT;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const zT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Fy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},f,h,p){if(im(n,u,h),f){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:m}=n;v.transform&&(m.transform=v.transform,delete v.transform),(m.transform||v.transformOrigin)&&(m.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),m.transform&&(m.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of zT)v[_]!==void 0&&(m[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&BT(v,o,a,c,!1)}const ky=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Oy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function VT(n,e,t,r){Iy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(ky.has(o)?o:Zp(o),e.attrs[o])}function By(n,e,t){const r=rm(n,e,t);for(const o in n)if(An(n[o])||An(e[o])){const a=Bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class HT extends Ry{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zo.has(t)){const r=vy(t);return r&&r.default||0}return t=ky.has(t)?t:Zp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return By(e,t,r)}build(e,t,r){Fy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){VT(e,t,r,o)}mount(e){this.isSVGTag=Oy(e.tagName),super.mount(e)}}const GT=nm.length;function zy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?zy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<GT;t++){const r=nm[t],o=n.props[r];(ja(o)||o===!1)&&(e[r]=o)}return e}function Vy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const WT=[...tm].reverse(),XT=tm.length;function jT(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Hw(n,t,r)))}function YT(n){let e=jT(n),t=Dv(),r=!0,o=!1;const a=h=>(p,v)=>{var _;const m=Ns(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(m){const{transition:M,transitionEnd:A,...S}=m;p={...p,...S,...A}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=zy(n.parent)||{},m=[],_=new Set;let M={},A=1/0;for(let y=0;y<XT;y++){const R=WT[y],I=t[R],T=p[R]!==void 0?p[R]:v[R],D=ja(T),L=R===h?I.isActive:null;L===!1&&(A=y);let F=T===v[R]&&T!==p[R]&&D;if(F&&(r||o)&&n.manuallyAnimateOnMount&&(F=!1),I.protectedKeys={...M},!I.isActive&&L===null||!T&&!I.prevProp||Tu(T)||typeof T=="boolean")continue;if(R==="exit"&&I.isActive&&L!==!0){I.prevResolvedValues&&(M={...M,...I.prevResolvedValues});continue}const E=$T(I.prevProp,T);let N=E||R===h&&I.isActive&&!F&&D||y>A&&D,O=!1;const z=Array.isArray(T)?T:[T];let $=z.reduce(a(R),{});L===!1&&($={});const{prevResolvedValues:Z={}}=I,W={...Z,...$},Q=q=>{N=!0,_.has(q)&&(O=!0,_.delete(q)),I.needsAnimating[q]=!0;const Y=n.getValue(q);Y&&(Y.liveStyle=!1)};for(const q in W){const Y=$[q],K=Z[q];if(M.hasOwnProperty(q))continue;let U=!1;Ah(Y)&&Ah(K)?U=!Vy(Y,K)||E:U=Y!==K,U?Y!=null?Q(q):_.add(q):Y!==void 0&&_.has(q)?Q(q):I.protectedKeys[q]=!0}I.prevProp=T,I.prevResolvedValues=$,I.isActive&&(M={...M,...$}),(r||o)&&n.blockInitialAnimation&&(N=!1);const fe=F&&E;N&&(!fe||O)&&m.push(...z.map(q=>{const Y={type:R};if(typeof q=="string"&&(r||o)&&!fe&&n.manuallyAnimateOnMount&&n.parent){const{parent:K}=n,U=Ns(K,q);if(K.enteringChildren&&U){const{delayChildren:se}=U.transition||{};Y.delay=ly(K.enteringChildren,n,se)}}return{animation:q,options:Y}}))}if(_.size){const y={};if(typeof p.initial!="boolean"){const R=Ns(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(y.transition=R.transition)}_.forEach(R=>{const I=n.getBaseTarget(R),T=n.getValue(R);T&&(T.liveStyle=!0),y[R]=I??null}),m.push({animation:y})}let S=!!m.length;return r&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),r=!1,o=!1,S?e(m):Promise.resolve()}function f(h,p){var m;if(t[h].isActive===p)return Promise.resolve();(m=n.variantChildren)==null||m.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Dv(),o=!0}}}function $T(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Vy(e,n):!1}function Ss(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dv(){return{animate:Ss(!0),whileInView:Ss(),whileHover:Ss(),whileTap:Ss(),whileDrag:Ss(),whileFocus:Ss(),exit:Ss()}}function kh(n,e){n.min=e.min,n.max=e.max}function Ni(n,e){kh(n.x,e.x),kh(n.y,e.y)}function Lv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const Hy=1e-4,qT=1-Hy,KT=1+Hy,Gy=.01,ZT=0-Gy,JT=0+Gy;function Vn(n){return n.max-n.min}function QT(n,e,t){return Math.abs(n-e)<=t}function Nv(n,e,t,r=.5){n.origin=r,n.originPoint=Bt(e.min,e.max,n.origin),n.scale=Vn(t)/Vn(e),n.translate=Bt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=qT&&n.scale<=KT||isNaN(n.scale))&&(n.scale=1),(n.translate>=ZT&&n.translate<=JT||isNaN(n.translate))&&(n.translate=0)}function Ha(n,e,t,r){Nv(n.x,e.x,t.x,r?r.originX:void 0),Nv(n.y,e.y,t.y,r?r.originY:void 0)}function Iv(n,e,t,r=0){const o=r?Bt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+Vn(e)}function eA(n,e,t,r){Iv(n.x,e.x,t.x,r==null?void 0:r.x),Iv(n.y,e.y,t.y,r==null?void 0:r.y)}function Uv(n,e,t,r=0){const o=r?Bt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+Vn(e)}function uu(n,e,t,r){Uv(n.x,e.x,t.x,r==null?void 0:r.x),Uv(n.y,e.y,t.y,r==null?void 0:r.y)}function Fv(n,e,t,r,o){return n-=e,n=cu(n,1/t,r),o!==void 0&&(n=cu(n,1/o,r)),n}function tA(n,e=0,t=1,r=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=Bt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Bt(a.min,a.max,r);n===a&&(u-=e),n.min=Fv(n.min,e,t,u,o),n.max=Fv(n.max,e,t,u,o)}function kv(n,e,[t,r,o],a,c){tA(n,e[t],e[r],e[o],e.scale,a,c)}const nA=["x","scaleX","originX"],iA=["y","scaleY","originY"];function Ov(n,e,t,r){kv(n.x,e,nA,t?t.x:void 0,r?r.x:void 0),kv(n.y,e,iA,t?t.y:void 0,r?r.y:void 0)}function Bv(n){return n.translate===0&&n.scale===1}function Wy(n){return Bv(n.x)&&Bv(n.y)}function zv(n,e){return n.min===e.min&&n.max===e.max}function rA(n,e){return zv(n.x,e.x)&&zv(n.y,e.y)}function Vv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Xy(n,e){return Vv(n.x,e.x)&&Vv(n.y,e.y)}function Hv(n){return Vn(n.x)/Vn(n.y)}function Gv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Ji(n){return[n("x"),n("y")]}function sA(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:v,rotateX:m,rotateY:_,skewX:M,skewY:A}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotate(${v}deg) `),m&&(r+=`rotateX(${m}deg) `),_&&(r+=`rotateY(${_}deg) `),M&&(r+=`skewX(${M}deg) `),A&&(r+=`skewY(${A}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(r+=`scale(${u}, ${f})`),r||"none"}const oA=Jp.length,Wv=n=>typeof n=="string"?parseFloat(n):n,Xv=n=>typeof n=="number"||Ye.test(n);function aA(n,e,t,r,o,a){o?(n.opacity=Bt(0,t.opacity??1,lA(r)),n.opacityExit=Bt(e.opacity??1,0,cA(r))):a&&(n.opacity=Bt(e.opacity??1,t.opacity??1,r));for(let c=0;c<oA;c++){const u=Jp[c];let f=jv(e,u),h=jv(t,u);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Xv(f)===Xv(h)?(n[u]=Math.max(Bt(Wv(f),Wv(h),r),0),(ir.test(h)||ir.test(f))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Bt(e.rotate||0,t.rotate||0,r))}function jv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const lA=jy(0,.5,U_),cA=jy(.5,.95,Zn);function jy(n,e,t){return r=>r<n?0:r>e?1:t(No(n,e,r))}function uA(n,e,t){const r=An(n)?n:Bi(n);return r.start(qp("",r,e,t)),r.animation}function Ya(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}const dA=(n,e)=>n.depth-e.depth;class fA{constructor(){this.children=[],this.isDirty=!1}add(e){Np(this.children,e),this.isDirty=!0}remove(e){nu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(dA),this.isDirty=!1,this.children.forEach(e)}}function hA(n,e){const t=zn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Mi(r),n(a-e))};return At.setup(r,!0),()=>Mi(r)}function $c(n){return An(n)?n.get():n}class pA{constructor(){this.members=[]}add(e){Np(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(nu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(nu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Tf=["","X","Y","Z"],mA=1e3;let gA=0;function Af(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Yy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=hy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",At,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Yy(r)}function $y({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=gA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_A),this.nodes.forEach(TA),this.nodes.forEach(AA),this.nodes.forEach(yA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new fA)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Ip),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const f=this.eventHandlers.get(c);f&&f.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=em(c)&&!vT(c),this.instance=c;const{layoutId:u,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const m=()=>this.root.updateBlockedByResize=!1;At.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=hA(m,250),qc.hasAnimatedSinceResize&&(qc.hasAnimatedSinceResize=!1,this.nodes.forEach(qv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||f)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:m,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||DA,{onLayoutAnimationStart:A,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Xy(this.targetLayout,_),R=!v&&m;if(this.options.layoutRoot||this.resumeFrom||R||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...$p(M,"layout"),onPlay:A,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(p,R,I.path)}else v||qv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(MA),this.nodes.forEach(Yv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach($v);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(EA),this.nodes.forEach(wA),this.nodes.forEach(vA),this.nodes.forEach(xA)):this.nodes.forEach($v),this.clearAllSnapshots();const u=zn.now();Mn.delta=Wi(0,1e3/60,u-Mn.timestamp),Mn.timestamp=u,Mn.isProcessing=!0,vf.update.process(Mn),vf.preRender.process(Mn),vf.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uo.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SA),this.sharedNodes.forEach(CA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,At.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Wy(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||bs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return c&&(f=this.removeTransform(f)),LA(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return pn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(NA))){const{scroll:p}=this.root;p&&(Qi(u.x,p.offset.x),Qi(u.y,p.offset.y))}return u}removeElementScroll(c){var f;const u=pn();if(Ni(u,c),(f=this.scroll)!=null&&f.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:m}=p;p!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&Ni(u,c),Qi(u.x,v.offset.x),Qi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,f){var p,v;const h=f||pn();Ni(h,c);for(let m=0;m<this.path.length;m++){const _=this.path[m];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Qi(h.x,-_.scroll.offset.x),Qi(h.y,-_.scroll.offset.y)),bs(_.latestValues)&&Yc(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return bs(this.latestValues)&&Yc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var f;const u=pn();Ni(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!bs(p.latestValues))continue;let v;p.instance&&(Ih(p.latestValues)&&p.updateSnapshot(),v=pn(),Ni(v,p.measurePageBox())),Ov(u,p.latestValues,(f=p.snapshot)==null?void 0:f.layoutBox,v)}return bs(this.latestValues)&&Ov(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==u;if(!(c||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=Mn.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pn(),this.targetWithTransforms=pn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ni(this.target,this.layout.layoutBox),Ly(this.target,this.targetDelta)):Ni(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ih(this.parent.latestValues)||Dy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,f){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pn(),this.relativeTargetOrigin=pn(),uu(this.relativeTargetOrigin,u,f,this.options.layoutAnchor||void 0),Ni(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(f=!1),f)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ni(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,m=this.treeScale.y;RT(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=pn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Lv(this.prevProjectionDelta.x,this.projectionDelta.x),Lv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ha(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==m||!Gv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Co(),this.projectionDelta=Co(),this.projectionDeltaWithTransform=Co()}setAnimationOrigin(c,u=!1,f){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},m=Co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=pn(),M=h?h.source:void 0,A=this.layout?this.layout.source:void 0,S=M!==A,y=this.getStack(),R=!y||y.members.length<=1,I=!!(S&&!R&&this.options.crossfade===!0&&!this.path.some(PA));this.animationProgress=0;let T;const D=f==null?void 0:f.interpolateProjection(c);this.mixTargetDelta=L=>{const F=L/1e3,E=D==null?void 0:D(F);E?(m.x.translate=E.x,m.x.scale=Bt(c.x.scale,1,F),m.x.origin=c.x.origin,m.x.originPoint=c.x.originPoint,m.y.translate=E.y,m.y.scale=Bt(c.y.scale,1,F),m.y.origin=c.y.origin,m.y.originPoint=c.y.originPoint):(Kv(m.x,c.x,F),Kv(m.y,c.y,F)),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),RA(this.relativeTarget,this.relativeTargetOrigin,_,F),T&&rA(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=pn()),Ni(T,this.relativeTarget)),S&&(this.animationValues=v,aA(v,p,this.latestValues,F,I,R)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,f,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{qc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Bi(0)),this.motionValue.jump(0,!1),this.currentAnimation=uA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:f,layout:h,latestValues:p}=c;if(!(!u||!f||!h)){if(this!==c&&this.layout&&h&&qy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||pn();const v=Vn(this.layout.layoutBox.x);f.x.min=c.target.x.min,f.x.max=f.x.min+v;const m=Vn(this.layout.layoutBox.y);f.y.min=c.target.y.min,f.y.max=f.y.min+m}Ni(u,f),Yc(u,p),Ha(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new pA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:f}=c;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const h={};f.z&&Af("z",c,h,this.animationValues);for(let p=0;p<Tf.length;p++)Af(`rotate${Tf[p]}`,c,h,this.animationValues),Af(`skew${Tf[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!bs(this.latestValues)&&(c.transform=f?f({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=sA(this.projectionDeltaWithTransform,this.treeScale,p);f&&(v=f(p,v)),c.transform=v;const{x:m,y:_}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in Fh){if(p[M]===void 0)continue;const{correct:A,applyTo:S,isCSSVariable:y}=Fh[M],R=v==="none"?p[M]:A(p[M],h);if(S){const I=S.length;for(let T=0;T<I;T++)c[S[T]]=R}else y?this.options.visualElement.renderState.vars[M]=R:c[M]=R}this.options.layoutId&&(c.pointerEvents=h===this?$c(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Yv),this.root.sharedNodes.clear()}}}function vA(n){n.updateLayout()}function xA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Ji(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=Vn(m);m.min=r[v].min,m.max=m.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";kh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else qy(a,e.layoutBox,r)&&Ji(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=Vn(r[v]);m.max=m.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=Co();Ha(u,r,e.layoutBox);const f=Co();c?Ha(f,n.applyTransform(o,!0),e.measuredBox):Ha(f,r,e.layoutBox);const h=!Wy(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:_}=v;if(m&&_){const M=n.options.layoutAnchor||void 0,A=pn();uu(A,e.layoutBox,m.layoutBox,M);const S=pn();uu(S,r,_.layoutBox,M),Xy(A,S)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=A,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function _A(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function yA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function SA(n){n.clearSnapshot()}function Yv(n){n.clearMeasurements()}function MA(n){n.isLayoutDirty=!0,n.updateLayout()}function $v(n){n.isLayoutDirty=!1}function EA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function wA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function qv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function TA(n){n.resolveTargetDelta()}function AA(n){n.calcProjection()}function bA(n){n.resetSkewAndRotation()}function CA(n){n.removeLeadSnapshot()}function Kv(n,e,t){n.translate=Bt(e.translate,0,t),n.scale=Bt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Zv(n,e,t,r){n.min=Bt(e.min,t.min,r),n.max=Bt(e.max,t.max,r)}function RA(n,e,t,r){Zv(n.x,e.x,t.x,r),Zv(n.y,e.y,t.y,r)}function PA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const DA={duration:.45,ease:[.4,0,.1,1]},Jv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Qv=Jv("applewebkit/")&&!Jv("chrome/")?Math.round:Zn;function ex(n){n.min=Qv(n.min),n.max=Qv(n.max)}function LA(n){ex(n.x),ex(n.y)}function qy(n,e,t){return n==="position"||n==="preserve-aspect"&&!QT(Hv(e),Hv(t),.2)}function NA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const IA=$y({attachResizeListener:(n,e)=>Ya(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bf={current:void 0},Ky=$y({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bf.current){const n=new IA({});n.mount(window),n.setOptions({layoutScroll:!0}),bf.current=n}return bf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bu=xe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function tx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function UA(...n){return e=>{let t=!1;const r=n.map(o=>{const a=tx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():tx(n[o],null)}}}}function FA(...n){return xe.useCallback(UA(...n),n)}class kA extends xe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Va(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=Va(r)&&r.offsetWidth||0,a=Va(r)&&r.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function OA({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var m;const c=xe.useId(),u=xe.useRef(null),f=xe.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=xe.useContext(bu),p=a!==!1?((m=n.props)==null?void 0:m.ref)??(n==null?void 0:n.ref):void 0,v=FA(u,p);return xe.useInsertionEffect(()=>{const{width:_,height:M,top:A,left:S,right:y,bottom:R,direction:I}=f.current;if(e||a===!1||!u.current||!_||!M)return;const T=I==="rtl",D=t==="left"?T?`right: ${y}`:`left: ${S}`:T?`left: ${S}`:`right: ${y}`,L=r==="bottom"?`bottom: ${R}`:`top: ${A}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");h&&(F.nonce=h);const E=o??document.head;return E.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${D}px !important;
            ${L}px !important;
          }
        `),()=>{var N;(N=u.current)==null||N.removeAttribute("data-motion-pop-id"),E.contains(F)&&E.removeChild(F)}},[e]),P.jsx(kA,{isPresent:e,childRef:u,sizeRef:f,pop:a,children:a===!1?n:xe.cloneElement(n,{ref:v})})}const BA=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:f,root:h})=>{const p=ts(zA),v=xe.useId(),m=xe.useRef(t),_=xe.useRef(r);Ja(()=>{m.current=t,_.current=r});let M=!0,A=xe.useMemo(()=>(M=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:S=>{p.set(S,!0);for(const y of p.values())if(!y)return;r&&r()},register:S=>(p.set(S,!1),()=>{var y;p.delete(S),!m.current&&!p.size&&((y=_.current)==null||y.call(_))})}),[t,p,r]);return a&&M&&(A={...A}),xe.useMemo(()=>{p.forEach((S,y)=>p.set(y,!1))},[t]),xe.useEffect(()=>{!t&&!p.size&&r&&r()},[t]),n=P.jsx(OA,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:f,root:h,children:n}),P.jsx(Mu.Provider,{value:A,children:n})};function zA(){return new Map}function Zy(n=!0){const e=xe.useContext(Mu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=xe.useId();xe.useEffect(()=>{if(n)return o(a)},[n]);const c=xe.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const hc=n=>n.key||"";function nx(n){const e=[];return xe.Children.forEach(n,t=>{xe.isValidElement(t)&&e.push(t)}),e}const sm=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:f="top",root:h})=>{const[p,v]=Zy(c),m=xe.useMemo(()=>nx(n),[n]),_=c&&!p?[]:m.map(hc),M=xe.useRef(!0),A=xe.useRef(m),S=ts(()=>new Map),y=xe.useRef(new Set),[R,I]=xe.useState(m),[T,D]=xe.useState(m);Ja(()=>{M.current=!1,A.current=m;for(let E=0;E<T.length;E++){const N=hc(T[E]);_.includes(N)?(S.delete(N),y.current.delete(N)):S.get(N)!==!0&&S.set(N,!1)}},[T,_.length,_.join("-")]);const L=[];if(m!==R){let E=[...m];for(let N=0;N<T.length;N++){const O=T[N],z=hc(O);_.includes(z)||(E.splice(N,0,O),L.push(O))}return a==="wait"&&L.length&&(E=L),D(nx(E)),I(m),null}const{forceRender:F}=xe.useContext(Lp);return P.jsx(P.Fragment,{children:T.map(E=>{const N=hc(E),O=c&&!p?!1:m===T||_.includes(N),z=()=>{if(y.current.has(N))return;if(S.has(N))y.current.add(N),S.set(N,!0);else return;let $=!0;S.forEach(Z=>{Z||($=!1)}),$&&(F==null||F(),D(A.current),c&&(v==null||v()),r&&r())};return P.jsx(BA,{isPresent:O,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:O?void 0:z,anchorX:u,anchorY:f,children:E},N)})})},Jy=xe.createContext({strict:!1}),ix={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rx=!1;function VA(){if(rx)return;const n={};for(const e in ix)n[e]={isEnabled:t=>ix[e].some(r=>!!t[r])};Cy(n),rx=!0}function Qy(){return VA(),TT()}function HA(n){const e=Qy();for(const t in n)e[t]={...e[t],...n[t]};Cy(e)}const GA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function du(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||GA.has(n)}let eS=n=>!du(n);function WA(n){typeof n=="function"&&(eS=e=>e.startsWith("on")?!du(e):n(e))}try{WA(require("@emotion/is-prop-valid").default)}catch{}function XA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||An(n[o])||(eS(o)||t===!0&&du(o)||!e&&!du(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Cu=xe.createContext({});function jA(n,e){if(Au(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ja(t)?t:void 0,animate:ja(r)?r:void 0}}return n.inherit!==!1?e:{}}function YA(n){const{initial:e,animate:t}=jA(n,xe.useContext(Cu));return xe.useMemo(()=>({initial:e,animate:t}),[sx(e),sx(t)])}function sx(n){return Array.isArray(n)?n.join(" "):n}const om=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tS(n,e,t){for(const r in e)!An(e[r])&&!Uy(r,t)&&(n[r]=e[r])}function $A({transformTemplate:n},e){return xe.useMemo(()=>{const t=om();return im(t,e,n),Object.assign({},t.vars,t.style)},[e])}function qA(n,e){const t=n.style||{},r={};return tS(r,t,n),Object.assign(r,$A(n,e)),r}function KA(n,e){const t={},r=qA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const nS=()=>({...om(),attrs:{}});function ZA(n,e,t,r){const o=xe.useMemo(()=>{const a=nS();return Fy(a,e,Oy(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};tS(a,n.style,n),o.style={...a,...o.style}}return o}const JA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function am(n){return typeof n!="string"||n.includes("-")?!1:!!(JA.indexOf(n)>-1||/[A-Z]/u.test(n))}function QA(n,e,t,{latestValues:r},o,a=!1,c){const f=(c??am(n)?ZA:KA)(e,r,o,n),h=XA(e,typeof n=="string",a),p=n!==xe.Fragment?{...h,...f,ref:t}:{},{children:v}=e,m=xe.useMemo(()=>An(v)?v.get():v,[v]);return xe.createElement(n,{...p,children:m})}function eb({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:tb(t,r,o,n),renderState:e()}}function tb(n,e,t,r){const o={},a=r(n,{});for(const m in a)o[m]=$c(a[m]);let{initial:c,animate:u}=n;const f=Au(n),h=Ay(n);e&&h&&!f&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Tu(v)){const m=Array.isArray(v)?v:[v];for(let _=0;_<m.length;_++){const M=Kp(n,m[_]);if(M){const{transitionEnd:A,transition:S,...y}=M;for(const R in y){let I=y[R];if(Array.isArray(I)){const T=p?I.length-1:0;I=I[T]}I!==null&&(o[R]=I)}for(const R in A)o[R]=A[R]}}}return o}const iS=n=>(e,t)=>{const r=xe.useContext(Cu),o=xe.useContext(Mu),a=()=>eb(n,e,r,o);return t?a():ts(a)},nb=iS({scrapeMotionValuesFromProps:rm,createRenderState:om}),ib=iS({scrapeMotionValuesFromProps:By,createRenderState:nS}),rb=Symbol.for("motionComponentSymbol");function sb(n,e,t){const r=xe.useRef(t);xe.useInsertionEffect(()=>{r.current=t});const o=xe.useRef(null);return xe.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const f=c(a);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const rS=xe.createContext({});function wo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ob(n,e,t,r,o,a){var I,T;const{visualElement:c}=xe.useContext(Cu),u=xe.useContext(Jy),f=xe.useContext(Mu),h=xe.useContext(bu),p=h.reducedMotion,v=h.skipAnimations,m=xe.useRef(null),_=xe.useRef(!1);r=r||u.renderer,!m.current&&r&&(m.current=r(n,{visualState:e,parent:c,props:t,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const M=m.current,A=xe.useContext(rS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&ab(m.current,t,o,A);const S=xe.useRef(!1);xe.useInsertionEffect(()=>{M&&S.current&&M.update(t,f)});const y=t[fy],R=xe.useRef(!!y&&typeof window<"u"&&!((I=window.MotionHandoffIsComplete)!=null&&I.call(window,y))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,y)));return Ja(()=>{_.current=!0,M&&(S.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),R.current&&M.animationState&&M.animationState.animateChanges())}),xe.useEffect(()=>{M&&(!R.current&&M.animationState&&M.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var D;(D=window.MotionHandoffMarkAsComplete)==null||D.call(window,y)}),R.current=!1),M.enteringChildren=void 0)}),M}function ab(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:f,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:sS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&wo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:f,layoutRoot:h,layoutAnchor:p})}function sS(n){if(n)return n.options.allowProjection!==!1?n.projection:sS(n.parent)}function Cf(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&HA(r);const a=t?t==="svg":am(n),c=a?ib:nb;function u(h,p){let v;const m={...xe.useContext(bu),...h,layoutId:lb(h)},{isStatic:_}=m,M=YA(h),A=c(h,_);if(!_&&typeof window<"u"){cb();const S=ub(m);v=S.MeasureLayout,M.visualElement=ob(n,A,m,o,S.ProjectionNode,a)}return P.jsxs(Cu.Provider,{value:M,children:[v&&M.visualElement?P.jsx(v,{visualElement:M.visualElement,...m}):null,QA(n,h,sb(A,M.visualElement,p),A,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=xe.forwardRef(u);return f[rb]=n,f}function lb({layoutId:n}){const e=xe.useContext(Lp).id;return e&&n!==void 0?e+"-"+n:n}function cb(n,e){xe.useContext(Jy).strict}function ub(n){const e=Qy(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function db(n,e){if(typeof Proxy>"u")return Cf;const t=new Map,r=(a,c)=>Cf(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Cf(c,void 0,n,e)),t.get(c))})}const fb=(n,e)=>e.isSVG??am(n)?new HT(e):new FT(e,{allowProjection:n!==xe.Fragment});class hb extends is{constructor(e){super(e),e.animationState||(e.animationState=YT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Tu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let pb=0;class mb extends is{constructor(){super(...arguments),this.id=pb++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const f=Ns(this.node,c,u);if(f){const{transition:h,transitionEnd:p,...v}=f;for(const m in v)(a=this.node.getValue(m))==null||a.jump(v[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const gb={animation:{Feature:hb},exit:{Feature:mb}};function nl(n){return{point:{x:n.pageX,y:n.pageY}}}const vb=n=>e=>Qp(e)&&n(e,nl(e));function Ga(n,e,t,r){return Ya(n,e,vb(t),r)}const oS=({current:n})=>n?n.ownerDocument.defaultView:null,ox=(n,e)=>Math.abs(n-e);function xb(n,e){const t=ox(n.x,e.x),r=ox(n.y,e.y);return Math.sqrt(t**2+r**2)}const ax=new Set(["auto","scroll"]);class aS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=pc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=Rf(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,S=xb(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!S)return;const{point:y}=M,{timestamp:R}=Mn;this.history.push({...y,timestamp:R});const{onStart:I,onMove:T}=this.handlers;A||(I&&I(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,M)},this.handlePointerMove=(M,A)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=A,this.lastMoveEventInfo=pc(A,this.transformPagePoint),At.update(this.updatePoint,!0)},this.handlePointerUp=(M,A)=>{this.end();const{onEnd:S,onSessionEnd:y,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=Rf(M.type==="pointercancel"?this.lastMoveEventInfo:pc(A,this.transformPagePoint),this.history);this.startEvent&&S&&S(M,I),y&&y(M,I)},!Qp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const f=nl(e),h=pc(f,this.transformPagePoint),{point:p}=h,{timestamp:v}=Mn;this.history=[{...p,timestamp:v}];const{onSessionStart:m}=t;m&&m(e,Rf(h,this.history));const _={passive:!0,capture:!0};this.removeListeners=Qa(Ga(this.contextWindow,"pointermove",this.handlePointerMove,_),Ga(this.contextWindow,"pointerup",this.handlePointerUp,_),Ga(this.contextWindow,"pointercancel",this.handlePointerUp,_)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(ax.has(r.overflowX)||ax.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),At.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Mi(this.updatePoint)}}function pc(n,e){return e?{point:e(n.point)}:n}function lx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Rf({point:n},e){return{point:n,delta:lx(n,lS(e)),offset:lx(n,_b(e)),velocity:yb(e,.1)}}function _b(n){return n[0]}function lS(n){return n[n.length-1]}function yb(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=lS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ai(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ai(e)*2&&(r=n[1]);const a=Si(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function Sb(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Bt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Bt(t,n,r.max):Math.min(n,t)),n}function cx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Mb(n,{top:e,left:t,bottom:r,right:o}){return{x:cx(n.x,t,o),y:cx(n.y,e,r)}}function ux(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function Eb(n,e){return{x:ux(n.x,e.x),y:ux(n.y,e.y)}}function wb(n,e){let t=.5;const r=Vn(n),o=Vn(e);return o>r?t=No(e.min,e.max-r,n.min):r>o&&(t=No(n.min,n.max-o,e.min)),Wi(0,1,t)}function Tb(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Oh=.35;function Ab(n=Oh){return n===!1?n=0:n===!0&&(n=Oh),{x:dx(n,"left","right"),y:dx(n,"top","bottom")}}function dx(n,e,t){return{min:fx(n,e),max:fx(n,t)}}function fx(n,e){return typeof n=="number"?n:n[e]||0}const bb=new WeakMap;class Cb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(nl(v).point),this.stopAnimation()},c=(v,m)=>{const{drag:_,dragPropagation:M,onDragStart:A}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eT(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji(y=>{let R=this.getAxisMotionValue(y).get()||0;if(ir.test(R)){const{projection:I}=this.visualElement;if(I&&I.layout){const T=I.layout.layoutBox[y];T&&(R=Vn(T)*(parseFloat(R)/100))}}this.originPoint[y]=R}),A&&At.update(()=>A(v,m),!1,!0),bh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:A,onDrag:S}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:y}=m;if(M&&this.currentDirection===null){this.currentDirection=Pb(y),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",m.point,y),this.updateAxis("y",m.point,y),this.visualElement.render(),S&&At.update(()=>S(v,m),!1,!0)},f=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m,this.stop(v,m),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new aS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:oS(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&At.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!mc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=Sb(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&wo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=Mb(r.layoutBox,e):this.constraints=!1,this.elastic=Ab(t),o!==this.constraints&&!wo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=Tb(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!wo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=PT(r,o.root,this.visualElement.getTransformPagePoint());let c=Eb(o.layout.layoutBox,a);if(t){const u=t(bT(c));this.hasMutatedConstraints=!!u,u&&(c=Py(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},h=Ji(p=>{if(!mc(p,t,this.currentDirection))return;let v=f&&f[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const m=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:m,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return bh(this.visualElement,e),r.start(qp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ji(t=>{const{drag:r}=this.getProps();if(!mc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],f=a.get()||0;a.set(e[t]-Bt(c,u,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!wo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const f=u.get();o[c]=wb({min:f,max:f},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ji(c=>{if(!mc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:f,max:h}=this.constraints[c];u.set(Bt(f,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;bb.set(this.visualElement,this);const e=this.visualElement.current,t=Ga(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),m=h.target,_=m!==e&&oT(m);p&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();wo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=Rb(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),At.read(o);const u=Ya(window,"resize",()=>this.scalePositionWithinConstraints()),f=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ji(v=>{const m=this.getAxisMotionValue(v);m&&(this.originPoint[v]+=h[v].translate,m.set(m.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),f&&f(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Oh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function hx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function Rb(n,e,t){const r=Lh(n,hx(t)),o=Lh(e,hx(t));return()=>{r(),o()}}function mc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Pb(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Db extends is{constructor(e){super(e),this.removeGroupControls=Zn,this.removeListeners=Zn,this.controls=new Cb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Pf=n=>(e,t)=>{n&&At.update(()=>n(e,t),!1,!0)};class Lb extends is{constructor(){super(...arguments),this.removePointerDownListener=Zn}onPointerDown(e){this.session=new aS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:oS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Pf(e),onStart:Pf(t),onMove:Pf(r),onEnd:(a,c)=>{delete this.session,o&&At.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ga(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Df=!1;class Nb extends xe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Df&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Df=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||At.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),Uo.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Df=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function cS(n){const[e,t]=Zy(),r=xe.useContext(Lp);return P.jsx(Nb,{...n,layoutGroup:r,switchLayoutGroup:xe.useContext(rS),isPresent:e,safeToRemove:t})}const Ib={pan:{Feature:Lb},drag:{Feature:Db,ProjectionNode:Ky,MeasureLayout:cS}};function px(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&At.postRender(()=>a(e,nl(e)))}class Ub extends is{mount(){const{current:e}=this.node;e&&(this.unmount=nT(e,(t,r)=>(px(this.node,r,"Start"),o=>px(this.node,o,"End"))))}unmount(){}}class Fb extends is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qa(Ya(this.node.current,"focus",()=>this.onFocus()),Ya(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mx(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&At.postRender(()=>a(e,nl(e)))}class kb extends is{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=lT(e,(o,a)=>(mx(this.node,a,"Start"),(c,{success:u})=>mx(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Bh=new WeakMap,Lf=new WeakMap,Ob=n=>{const e=Bh.get(n.target);e&&e(n)},Bb=n=>{n.forEach(Ob)};function zb({root:n,...e}){const t=n||document;Lf.has(t)||Lf.set(t,{});const r=Lf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Bb,{root:n,...e})),r[o]}function Vb(n,e,t){const r=zb(e);return Bh.set(n,t),r.observe(n),()=>{Bh.delete(n),r.unobserve(n)}}const Hb={some:0,all:1};class Gb extends is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Hb[o]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:m}=this.node.getProps(),_=p?v:m;_&&_(h)};this.stopObserver=Vb(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Wb(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Wb({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Xb={inView:{Feature:Gb},tap:{Feature:kb},focus:{Feature:Fb},hover:{Feature:Ub}},jb={layout:{ProjectionNode:Ky,MeasureLayout:cS}},Yb={...gb,...Xb,...Ib,...jb},mn=db(Yb,fb);function fu(n){return typeof window>"u"?!1:n?ty():Yp()}const $b=50,gx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),qb=()=>({time:0,x:gx(),y:gx()}),Kb={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function vx(n,e,t,r){const o=t[e],{length:a,position:c}=Kb[e],u=o.current,f=t.time;o.current=Math.abs(n[`scroll${c}`]),o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=No(0,o.scrollLength,o.current);const h=r-f;o.velocity=h>$b?0:Up(o.current-u,h)}function Zb(n,e,t){vx(n,"x",e,t),vx(n,"y",e,t),e.time=t}function Jb(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(Va(r))t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let c=null,u=r.parentNode;for(;!c;)u.tagName==="svg"&&(c=u),u=r.parentNode;r=c}else break;return t}const zh={start:0,center:.5,end:1};function xx(n,e,t=0){let r=0;if(n in zh&&(n=zh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const Qb=[0,0];function eC(n,e,t,r){let o=Array.isArray(n)?n:Qb,a=0,c=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,zh[n]?n:"0"]),a=xx(o[0],t,r),c=xx(o[1],e),a-c}const Ua={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},tC={x:0,y:0};function nC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function iC(n,e,t){const{offset:r=Ua.All}=t,{target:o=n,axis:a="y"}=t,c=a==="y"?"height":"width",u=o!==n?Jb(o,n):tC,f=o===n?{width:n.scrollWidth,height:n.scrollHeight}:nC(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let p=!e[a].interpolate;const v=r.length;for(let m=0;m<v;m++){const _=eC(r[m],h[c],f[c],u[a]);!p&&_!==e[a].interpolatorOffsets[m]&&(p=!0),e[a].offset[m]=_}p&&(e[a].interpolate=Gp(e[a].offset,K_(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Wi(0,1,e[a].interpolate(e[a].current))}function rC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function sC(n,e,t,r={}){return{measure:o=>{rC(n,r.target,t),Zb(n,t,o),(r.offset||r.target)&&iC(n,t,r)},notify:()=>e(t)}}const co=new WeakMap,_x=new WeakMap,Nf=new WeakMap,yx=new WeakMap,gc=new WeakMap,Sx=n=>n===document.scrollingElement?window:n;function uS(n,{container:e=document.scrollingElement,trackContentSize:t=!1,...r}={}){if(!e)return Zn;let o=Nf.get(e);o||(o=new Set,Nf.set(e,o));const a=qb(),c=sC(e,n,a,r);if(o.add(c),!co.has(e)){const f=()=>{for(const m of o)m.measure(Mn.timestamp);At.preUpdate(h)},h=()=>{for(const m of o)m.notify()},p=()=>At.read(f);co.set(e,p);const v=Sx(e);window.addEventListener("resize",p),e!==document.documentElement&&_x.set(e,Lh(e,p)),v.addEventListener("scroll",p),p()}if(t&&!gc.has(e)){const f=co.get(e),h={width:e.scrollWidth,height:e.scrollHeight};yx.set(e,h);const p=()=>{const m=e.scrollWidth,_=e.scrollHeight;(h.width!==m||h.height!==_)&&(f(),h.width=m,h.height=_)},v=At.read(p,!0);gc.set(e,v)}const u=co.get(e);return At.read(u,!1,!0),()=>{var v;Mi(u);const f=Nf.get(e);if(!f||(f.delete(c),f.size))return;const h=co.get(e);co.delete(e),h&&(Sx(e).removeEventListener("scroll",h),(v=_x.get(e))==null||v(),window.removeEventListener("resize",h));const p=gc.get(e);p&&(Mi(p),gc.delete(e)),yx.delete(e)}}const oC=[[Ua.Enter,"entry"],[Ua.Exit,"exit"],[Ua.Any,"cover"],[Ua.All,"contain"]],Mx={start:0,end:1};function aC(n){const e=n.trim().split(/\s+/);if(e.length!==2)return;const t=Mx[e[0]],r=Mx[e[1]];if(!(t===void 0||r===void 0))return[t,r]}function lC(n){if(n.length!==2)return;const e=[];for(const t of n)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const r=aC(t);if(!r)return;e.push(r)}else return;return e}function cC(n,e){const t=lC(n);if(!t)return!1;for(let r=0;r<2;r++){const o=t[r],a=e[r];if(o[0]!==a[0]||o[1]!==a[1])return!1}return!0}function lm(n){if(!n)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of oC)if(cC(n,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const Ex=new Map;function wx(n){const e={value:0},t=uS(r=>{e.value=r[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function dS({source:n,container:e,...t}){const{axis:r}=t;n&&(e=n);let o=Ex.get(e);o||(o=new Map,Ex.set(e,o));const a=t.target??"self";let c=o.get(a);c||(c={},o.set(a,c));const u=r+(t.offset??[]).join(",");return c[u]||(t.target&&fu(t.target)?lm(t.offset)?c[u]=new ViewTimeline({subject:t.target,axis:r}):c[u]=wx({container:e,...t}):fu()?c[u]=new ScrollTimeline({source:e,axis:r}):c[u]=wx({container:e,...t})),c[u]}function uC(n,e){const t=dS(e),r=e.target?lm(e.offset):void 0,o=e.target?fu(e.target)&&!!r:fu();return n.attachTimeline({timeline:o?t:void 0,...r&&o&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:a=>(a.pause(),Ty(c=>{a.time=a.iterationDuration*c},t))})}function dC(n){return n&&(n.target||n.offset)}function fC(n){return n.length===2}function hC(n,e){return fC(n)||dC(e)?uS(t=>{n(t[e.axis].progress,t)},e):Ty(n,dS(e))}function fS(n,{axis:e="y",container:t=document.scrollingElement,...r}={}){if(!t)return Zn;const o={axis:e,container:t,...r};return typeof n=="function"?hC(n,o):uC(n,o)}const pC=()=>({scrollX:Bi(0),scrollY:Bi(0),scrollXProgress:Bi(0),scrollYProgress:Bi(0)}),Ro=n=>n?!n.current:!1;function Tx(n,e,t,r){return{factory:o=>{let a;const c=()=>{if(Ro(t)||Ro(r)){Uo.read(c);return}a=fS(o,{...e,axis:n,container:(t==null?void 0:t.current)||void 0,target:(r==null?void 0:r.current)||void 0})};return Uo.read(c),()=>{yy(c),a==null||a()}},times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function mC(n,e){return typeof window>"u"?!1:n?ty()&&!!lm(e):Yp()}function hS({container:n,target:e,...t}={}){const r=ts(pC);mC(e,t.offset)&&(r.scrollXProgress.accelerate=Tx("x",t,n,e),r.scrollYProgress.accelerate=Tx("y",t,n,e));const o=xe.useRef(null),a=xe.useRef(!1),c=xe.useCallback(()=>(o.current=fS((u,{x:f,y:h})=>{r.scrollX.set(f.current),r.scrollXProgress.set(f.progress),r.scrollY.set(h.current),r.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[n,e,JSON.stringify(t.offset)]);return Ja(()=>{if(a.current=!1,Ro(n)||Ro(e)){a.current=!0;return}else return c()},[c]),xe.useEffect(()=>{if(!a.current)return;let u;const f=()=>{const h=Ro(n),p=Ro(e);!h&&!p&&(u=c())};return Uo.read(f),()=>{yy(f),u==null||u()}},[c]),r}function gC(n){const e=ts(()=>Bi(n)),{isStatic:t}=xe.useContext(bu);if(t){const[,r]=xe.useState(n);xe.useEffect(()=>e.on("change",r),[])}return e}function pS(n,e){const t=gC(e()),r=()=>t.set(e());return r(),Ja(()=>{const o=()=>At.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Mi(r)}}),t}function vC(n){za.current=[],n();const e=pS(za.current,n);return za.current=void 0,e}function cm(n,e,t,r){if(typeof n=="function")return vC(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return xC(n,e,t,r);const c=typeof e=="function"?e:xT(e,t,r),u=Array.isArray(n)?Ax(n,c):Ax([n],([h])=>c(h)),f=Array.isArray(n)?void 0:n.accelerate;return f&&!f.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(r==null?void 0:r.clamp)!==!1&&(u.accelerate={...f,times:e,keyframes:t,isTransformed:!0}),u}function Ax(n,e){const t=ts(()=>[]);return pS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function xC(n,e,t,r){const o=ts(()=>Object.keys(t)),a=ts(()=>({}));for(const c of o)a[c]=cm(n,e,t[c],r);return a}const mS=({onClick:n,className:e="",label:t="Contact Me"})=>P.jsx("button",{onClick:n,type:"button",className:`group relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${e}`,style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",boxShadow:"0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:P.jsx("span",{className:"relative z-10 transition-transform duration-200 group-hover:scale-105",children:t})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="186",_C=0,bx=1,yC=2,Kc=1,SC=2,Fa=3,Is=0,Jn=1,Er=2,Tr=0,Wa=1,Vh=2,Cx=3,Rx=4,MC=5,To=100,EC=101,wC=102,TC=103,AC=104,bC=200,CC=201,RC=202,PC=203,gS=204,vS=205,DC=206,LC=207,NC=208,IC=209,UC=210,FC=211,kC=212,OC=213,BC=214,Hh=0,Gh=1,Wh=2,$a=3,Xh=4,jh=5,Yh=6,$h=7,xS=0,zC=1,VC=2,rr=0,_S=1,yS=2,SS=3,MS=4,ES=5,wS=6,TS=7,AS=300,Us=301,Fo=302,If=303,Uf=304,Ru=306,qh=1e3,wr=1001,Kh=1002,bn=1003,HC=1004,vc=1005,Un=1006,Ff=1007,Ps=1008,yi=1009,bS=1010,CS=1011,qa=1012,dm=1013,sr=1014,tr=1015,or=1016,fm=1017,hm=1018,Ka=1020,RS=35902,PS=35899,DS=1021,LS=1022,zi=1023,br=1026,Ds=1027,NS=1028,pm=1029,Fs=1030,mm=1031,gm=1033,Zc=33776,Jc=33777,Qc=33778,eu=33779,Zh=35840,Jh=35841,Qh=35842,ep=35843,tp=36196,np=37492,ip=37496,rp=37488,sp=37489,hu=37490,op=37491,ap=37808,lp=37809,cp=37810,up=37811,dp=37812,fp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,xp=37819,_p=37820,yp=37821,Sp=36492,Mp=36494,Ep=36495,wp=36283,Tp=36284,pu=36285,Ap=36286,GC=3200,Px=0,WC=1,Qr="",xi="srgb",mu="srgb-linear",gu="linear",Ft="srgb",kf=7680,XC=519,jC=512,YC=513,$C=514,vm=515,qC=516,KC=517,xm=518,ZC=519,JC=35044,Dx="300 es",nr=2e3,vu=2001;function QC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eR(){const n=xu("canvas");return n.style.display="block",n}const Lx={};function Nx(...n){const e="THREE."+n.shift();console.log(e,...n)}function IS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=IS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Dt(...n){n=IS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Do(...n){const e=n.join(" ");e in Lx||(Lx[e]=!0,at(...n))}function tR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const nR={[Hh]:Gh,[Wh]:Yh,[Xh]:$h,[$a]:jh,[Gh]:Hh,[Yh]:Wh,[$h]:Xh,[jh]:$a};class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,bp=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function iR(n,e){return(n%e+e)%e}function Bf(n,e,t){return(1-t)*n+t*e}function ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wm=class wm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wm.prototype.isVector2=!0;let wt=wm;class Vo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let f=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],m=a[c+0],_=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||f!==m||h!==_||p!==M){let S=f*m+h*_+p*M+v*A;S<0&&(m=-m,_=-_,M=-M,A=-A,S=-S);let y=1-u;if(S<.9995){const R=Math.acos(S),I=Math.sin(R);y=Math.sin(y*R)/I,u=Math.sin(u*R)/I,f=f*y+m*u,h=h*y+_*u,p=p*y+M*u,v=v*y+A*u}else{f=f*y+m*u,h=h*y+_*u,p=p*y+M*u,v=v*y+A*u;const R=1/Math.sqrt(f*f+h*h+p*p+v*v);f*=R,h*=R,p*=R,v*=R}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],f=r[o+1],h=r[o+2],p=r[o+3],v=a[c],m=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*v+f*_-h*m,e[t+1]=f*M+p*m+h*v-u*_,e[t+2]=h*M+p*_+u*m-f*v,e[t+3]=p*M-u*v-f*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),p=u(o/2),v=u(a/2),m=f(r/2),_=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=m*p*v+h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v-m*_*M;break;case"YXZ":this._x=m*p*v+h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v+m*_*M;break;case"ZXY":this._x=m*p*v-h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v-m*_*M;break;case"ZYX":this._x=m*p*v-h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v+m*_*M;break;case"YZX":this._x=m*p*v+h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v-m*_*M;break;case"XZY":this._x=m*p*v-h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v+m*_*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],v=t[10],m=r+u+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>v){const _=2*Math.sqrt(1+r-u-v);this._w=(p-f)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+v-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-r*h,this._z=a*p+c*h+r*f-o*u,this._w=c*p-r*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tm=class Tm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ix.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ix.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+f*h+c*v-u*p,this.y=r+f*p+u*h-a*v,this.z=o+f*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-r*f,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tm.prototype.isVector3=!0;let re=Tm;const zf=new re,Ix=new Vo,Am=class Am{constructor(e,t,r,o,a,c,u,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h)}set(e,t,r,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],p=r[4],v=r[7],m=r[2],_=r[5],M=r[8],A=o[0],S=o[3],y=o[6],R=o[1],I=o[4],T=o[7],D=o[2],L=o[5],F=o[8];return a[0]=c*A+u*R+f*D,a[3]=c*S+u*I+f*L,a[6]=c*y+u*T+f*F,a[1]=h*A+p*R+v*D,a[4]=h*S+p*I+v*L,a[7]=h*y+p*T+v*F,a[2]=m*A+_*R+M*D,a[5]=m*S+_*I+M*L,a[8]=m*y+_*T+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],v=p*c-u*h,m=u*f-p*a,_=h*a-c*f,M=t*v+r*m+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-p*r)*A,e[2]=(u*r-o*c)*A,e[3]=m*A,e[4]=(p*t-o*f)*A,e[5]=(o*a-u*t)*A,e[6]=_*A,e[7]=(r*f-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return Do("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vf.makeScale(e,t)),this}rotate(e){return Do("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vf.makeRotation(-e)),this}translate(e,t){return Do("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Am.prototype.isMatrix3=!0;let ct=Am;const Vf=new ct,Ux=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){const n={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?gu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Do("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Do("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[mu]:{primaries:e,whitePoint:r,transfer:gu,toXYZ:Ux,fromXYZ:Fx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Ux,fromXYZ:Fx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const yt=rR();function Ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let uo;class sR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{uo===void 0&&(uo=xu("canvas")),uo.width=e.width,uo.height=e.height;const o=uo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=uo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Ar(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oR=0;class _m{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Hf(o[c].image)):a.push(Hf(o[c]))}else a=Hf(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Hf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let aR=0;const Gf=new re;class Hn extends Os{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,r=wr,o=wr,a=Un,c=Ps,u=zi,f=yi,h=Hn.DEFAULT_ANISOTROPY,p=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=il(),this.name="",this.source=new _m(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gf).x}get height(){return this.source.getSize(Gf).y}get depth(){return this.source.getSize(Gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=AS;Hn.DEFAULT_ANISOTROPY=1;const bm=class bm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const f=e.elements,h=f[0],p=f[4],v=f[8],m=f[1],_=f[5],M=f[9],A=f[2],S=f[6],y=f[10];if(Math.abs(p-m)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,T=(_+1)/2,D=(y+1)/2,L=(p+m)/4,F=(v+A)/4,E=(M+S)/4;return I>T&&I>D?I<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(I),o=L/r,a=F/r):T>D?T<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),r=L/o,a=E/o):D<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(D),r=F/a,o=E/a),this.set(r,o,a,t),this}let R=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(v-A)/R,this.z=(m-p)/R,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bm.prototype.isVector4=!0;let tn=bm;class lR extends Os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Hn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new _m(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends lR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class US extends Hn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cR extends Hn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Su=class Su{constructor(e,t,r,o,a,c,u,f,h,p,v,m,_,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,f,h,p,v,m,_,M,A,S)}set(e,t,r,o,a,c,u,f,h,p,v,m,_,M,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=h,y[6]=p,y[10]=v,y[14]=m,y[3]=_,y[7]=M,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/fo.setFromMatrixColumn(e,0).length(),a=1/fo.setFromMatrixColumn(e,1).length(),c=1/fo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*p,_=c*v,M=u*p,A=u*v;t[0]=f*p,t[4]=-f*v,t[8]=h,t[1]=_+M*h,t[5]=m-A*h,t[9]=-u*f,t[2]=A-m*h,t[6]=M+_*h,t[10]=c*f}else if(e.order==="YXZ"){const m=f*p,_=f*v,M=h*p,A=h*v;t[0]=m+A*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=A+m*u,t[10]=c*f}else if(e.order==="ZXY"){const m=f*p,_=f*v,M=h*p,A=h*v;t[0]=m-A*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=A-m*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const m=c*p,_=c*v,M=u*p,A=u*v;t[0]=f*p,t[4]=M*h-_,t[8]=m*h+A,t[1]=f*v,t[5]=A*h+m,t[9]=_*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,_=c*h,M=u*f,A=u*h;t[0]=f*p,t[4]=A-m*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+M,t[10]=m-A*v}else if(e.order==="XZY"){const m=c*f,_=c*h,M=u*f,A=u*h;t[0]=f*p,t[4]=-v,t[8]=h*p,t[1]=m*v+A,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=A*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uR,e,dR)}lookAt(e,t,r){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),jr.crossVectors(r,ri),jr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),jr.crossVectors(r,ri)),jr.normalize(),xc.crossVectors(ri,jr),o[0]=jr.x,o[4]=xc.x,o[8]=ri.x,o[1]=jr.y,o[5]=xc.y,o[9]=ri.y,o[2]=jr.z,o[6]=xc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],p=r[1],v=r[5],m=r[9],_=r[13],M=r[2],A=r[6],S=r[10],y=r[14],R=r[3],I=r[7],T=r[11],D=r[15],L=o[0],F=o[4],E=o[8],N=o[12],O=o[1],z=o[5],$=o[9],Z=o[13],W=o[2],Q=o[6],fe=o[10],ie=o[14],q=o[3],Y=o[7],K=o[11],U=o[15];return a[0]=c*L+u*O+f*W+h*q,a[4]=c*F+u*z+f*Q+h*Y,a[8]=c*E+u*$+f*fe+h*K,a[12]=c*N+u*Z+f*ie+h*U,a[1]=p*L+v*O+m*W+_*q,a[5]=p*F+v*z+m*Q+_*Y,a[9]=p*E+v*$+m*fe+_*K,a[13]=p*N+v*Z+m*ie+_*U,a[2]=M*L+A*O+S*W+y*q,a[6]=M*F+A*z+S*Q+y*Y,a[10]=M*E+A*$+S*fe+y*K,a[14]=M*N+A*Z+S*ie+y*U,a[3]=R*L+I*O+T*W+D*q,a[7]=R*F+I*z+T*Q+D*Y,a[11]=R*E+I*$+T*fe+D*K,a[15]=R*N+I*Z+T*ie+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],v=e[6],m=e[10],_=e[14],M=e[3],A=e[7],S=e[11],y=e[15],R=f*_-h*m,I=u*_-h*v,T=u*m-f*v,D=c*_-h*p,L=c*m-f*p,F=c*v-u*p;return t*(A*R-S*I+y*T)-r*(M*R-S*D+y*L)+o*(M*I-A*D+y*F)-a*(M*T-A*L+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],u=e[9],f=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-r*(a*p-u*f)+o*(a*h-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],v=e[9],m=e[10],_=e[11],M=e[12],A=e[13],S=e[14],y=e[15],R=t*u-r*c,I=t*f-o*c,T=t*h-a*c,D=r*f-o*u,L=r*h-a*u,F=o*h-a*f,E=p*A-v*M,N=p*S-m*M,O=p*y-_*M,z=v*S-m*A,$=v*y-_*A,Z=m*y-_*S,W=R*Z-I*$+T*z+D*O-L*N+F*E;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/W;return e[0]=(u*Z-f*$+h*z)*Q,e[1]=(o*$-r*Z-a*z)*Q,e[2]=(A*F-S*L+y*D)*Q,e[3]=(m*L-v*F-_*D)*Q,e[4]=(f*O-c*Z-h*N)*Q,e[5]=(t*Z-o*O+a*N)*Q,e[6]=(S*T-M*F-y*I)*Q,e[7]=(p*F-m*T+_*I)*Q,e[8]=(c*$-u*O+h*E)*Q,e[9]=(r*O-t*$-a*E)*Q,e[10]=(M*L-A*T+y*R)*Q,e[11]=(v*T-p*L-_*R)*Q,e[12]=(u*N-c*z-f*E)*Q,e[13]=(t*z-r*N+o*E)*Q,e[14]=(A*I-M*D-S*R)*Q,e[15]=(p*D-v*I+m*R)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+r,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,v=u+u,m=a*h,_=a*p,M=a*v,A=c*p,S=c*v,y=u*v,R=f*h,I=f*p,T=f*v,D=r.x,L=r.y,F=r.z;return o[0]=(1-(A+y))*D,o[1]=(_+T)*D,o[2]=(M-I)*D,o[3]=0,o[4]=(_-T)*L,o[5]=(1-(m+y))*L,o[6]=(S+R)*L,o[7]=0,o[8]=(M+I)*F,o[9]=(S-R)*F,o[10]=(1-(m+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=fo.set(o[0],o[1],o[2]).length();const u=fo.set(o[4],o[5],o[6]).length(),f=fo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ii.copy(this);const h=1/c,p=1/u,v=1/f;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=p,Ii.elements[5]*=p,Ii.elements[6]*=p,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,t.setFromRotationMatrix(Ii),r.x=c,r.y=u,r.z=f,this}makePerspective(e,t,r,o,a,c,u=nr,f=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let M,A;if(f)M=a/(c-a),A=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(u===vu)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=nr,f=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,A;if(f)M=1/(c-a),A=c/(c-a);else if(u===nr)M=-2/(c-a),A=-(c+a)/(c-a);else if(u===vu)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Su.prototype.isMatrix4=!0;let sn=Su;const fo=new re,Ii=new sn,uR=new re(0,0,0),dR=new re(1,1,1),jr=new re,xc=new re,ri=new re,kx=new sn,Ox=new Vo;class ks{constructor(e=0,t=0,r=0,o=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],v=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return kx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ox.setFromEuler(this),this.setFromQuaternion(Ox,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class FS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fR=0;const Bx=new re,ho=new Vo,vr=new sn,_c=new re,Ca=new re,hR=new re,pR=new Vo,zx=new re(1,0,0),Vx=new re(0,1,0),Hx=new re(0,0,1),Gx={type:"added"},mR={type:"removed"},po={type:"childadded",child:null},Wf={type:"childremoved",child:null};class Qn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new re,t=new ks,r=new Vo,o=new re(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ct}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Vx,e)}rotateZ(e){return this.rotateOnAxis(Hx,e)}translateOnAxis(e,t){return Bx.copy(e).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Vx,e)}translateZ(e){return this.translateOnAxis(Hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_c.copy(e):_c.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Ca,_c,this.up):vr.lookAt(_c,Ca,this.up),this.quaternion.setFromRotationMatrix(vr),o&&(vr.extractRotation(o.matrixWorld),ho.setFromRotationMatrix(vr),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gx),po.child=e,this.dispatchEvent(po),po.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mR),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gx),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,hR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,pR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const v=f[h];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),m=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qn.DEFAULT_UP=new re(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gR={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),y=this._getHandJoint(h,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&m>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(gR)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=iR(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=jf(c,a,e+1/3),this.g=jf(c,a,e),this.b=jf(c,a,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=kS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return yt.workingToColorSpace(In.copy(this),e),Math.round(St(In.r*255,0,255))*65536+Math.round(St(In.g*255,0,255))*256+Math.round(St(In.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(In.copy(this),t);const r=In.r,o=In.g,a=In.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case r:f=(o-a)/v+(o<a?6:0);break;case o:f=(a-r)/v+2;break;case a:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=xi){yt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,o=In.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Sc);const r=Bf(Yr.h,Sc.h,t),o=Bf(Yr.s,Sc.s,t),a=Bf(Yr.l,Sc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Et;Et.NAMES=kS;class vR extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new re,xr=new re,Yf=new re,_r=new re,mo=new re,go=new re,Wx=new re,$f=new re,qf=new re,Kf=new re,Zf=new tn,Jf=new tn,Qf=new tn;class Oi{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ui.subVectors(e,t),o.cross(Ui);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ui.subVectors(o,t),xr.subVectors(r,t),Yf.subVectors(e,t);const c=Ui.dot(Ui),u=Ui.dot(xr),f=Ui.dot(Yf),h=xr.dot(xr),p=xr.dot(Yf),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const m=1/v,_=(h*f-u*p)*m,M=(c*p-u*f)*m;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,a,c,u,f){return this.getBarycoord(e,t,r,o,_r)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,_r.x),f.addScaledVector(c,_r.y),f.addScaledVector(u,_r.z),f)}static getInterpolatedAttribute(e,t,r,o,a,c){return Zf.setScalar(0),Jf.setScalar(0),Qf.setScalar(0),Zf.fromBufferAttribute(e,t),Jf.fromBufferAttribute(e,r),Qf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zf,a.x),c.addScaledVector(Jf,a.y),c.addScaledVector(Qf,a.z),c}static isFrontFacing(e,t,r,o){return Ui.subVectors(r,t),xr.subVectors(e,t),Ui.cross(xr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Ui.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;mo.subVectors(o,r),go.subVectors(a,r),$f.subVectors(e,r);const f=mo.dot($f),h=go.dot($f);if(f<=0&&h<=0)return t.copy(r);qf.subVectors(e,o);const p=mo.dot(qf),v=go.dot(qf);if(p>=0&&v<=p)return t.copy(o);const m=f*v-p*h;if(m<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(r).addScaledVector(mo,c);Kf.subVectors(e,a);const _=mo.dot(Kf),M=go.dot(Kf);if(M>=0&&_<=M)return t.copy(a);const A=_*h-f*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(go,u);const S=p*M-_*v;if(S<=0&&v-p>=0&&_-M>=0)return Wx.subVectors(a,o),u=(v-p)/(v-p+(_-M)),t.copy(o).addScaledVector(Wx,u);const y=1/(S+A+m);return c=A*y,u=m*y,t.copy(r).addScaledVector(mo,c).addScaledVector(go,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Fi):Fi.fromBufferAttribute(a,c),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),Ec.subVectors(this.max,Ra),vo.subVectors(e.a,Ra),xo.subVectors(e.b,Ra),_o.subVectors(e.c,Ra),$r.subVectors(xo,vo),qr.subVectors(_o,xo),Ms.subVectors(vo,_o);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-Ms.z,Ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,Ms.z,0,-Ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-Ms.y,Ms.x,0];return!eh(t,vo,xo,_o,Ec)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,vo,xo,_o,Ec))?!1:(wc.crossVectors($r,qr),t=[wc.x,wc.y,wc.z],eh(t,vo,xo,_o,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new re,new re,new re,new re,new re,new re,new re,new re],Fi=new re,Mc=new rl,vo=new re,xo=new re,_o=new re,$r=new re,qr=new re,Ms=new re,Ra=new re,Ec=new re,wc=new re,Es=new re;function eh(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Es.fromArray(n,a);const u=o.x*Math.abs(Es.x)+o.y*Math.abs(Es.y)+o.z*Math.abs(Es.z),f=e.dot(Es),h=t.dot(Es),p=r.dot(Es);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const ln=new re,Tc=new wt;let xR=0;class Gi extends Os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=JC,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ba(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class OS extends Gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class BS extends Gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends Gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const _R=new rl,Pa=new re,th=new re;class Pu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_R.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(th)),this.expandByPoint(Pa.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yR=0;const vi=new sn,nh=new Qn,yo=new re,si=new rl,Da=new rl,Sn=new re;class li extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QC(e)?BS:OS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ct().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];si.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Da.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(si.min,Da.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Da.max),si.expandByPoint(Sn)):(si.expandByPoint(Da.min),si.expandByPoint(Da.max))}si.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)Sn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Sn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Sn.fromBufferAttribute(u,h),f&&(yo.fromBufferAttribute(e,h),Sn.add(yo)),o=Math.max(o,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],f=[];for(let E=0;E<r.count;E++)u[E]=new re,f[E]=new re;const h=new re,p=new re,v=new re,m=new wt,_=new wt,M=new wt,A=new re,S=new re;function y(E,N,O){h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,N),v.fromBufferAttribute(r,O),m.fromBufferAttribute(a,E),_.fromBufferAttribute(a,N),M.fromBufferAttribute(a,O),p.sub(h),v.sub(h),_.sub(m),M.sub(m);const z=1/(_.x*M.y-M.x*_.y);isFinite(z)&&(A.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(z),S.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(z),u[E].add(A),u[N].add(A),u[O].add(A),f[E].add(S),f[N].add(S),f[O].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,N=R.length;E<N;++E){const O=R[E],z=O.start,$=O.count;for(let Z=z,W=z+$;Z<W;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new re,T=new re,D=new re,L=new re;function F(E){D.fromBufferAttribute(o,E),L.copy(D);const N=u[E];I.copy(N),I.sub(D.multiplyScalar(D.dot(N))).normalize(),T.crossVectors(L,N);const z=T.dot(f[E])<0?-1:1;c.setXYZW(E,I.x,I.y,I.z,z)}for(let E=0,N=R.length;E<N;++E){const O=R[E],z=O.start,$=O.count;for(let Z=z,W=z+$;Z<W;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new re,a=new re,c=new re,u=new re,f=new re,h=new re,p=new re,v=new re;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),A=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),u.add(p),f.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(m+0,p.x,p.y,p.z),r.setXYZ(m+1,p.x,p.y,p.z),r.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,v=u.normalized,m=new h.constructor(f.length*p);let _=0,M=0;for(let A=0,S=f.length;A<S;A++){u.isInterleavedBufferAttribute?_=f[A]*u.data.stride+u.offset:_=f[A]*p;for(let y=0;y<p;y++)m[M++]=h[_++]}return new Gi(m,p,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const m=h[p],_=e(m,r);f.push(_)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let v=0,m=h.length;v<m;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,_=v.length;m<_;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new re,SR=new re,MR=new ct;class Jr{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ih.subVectors(r,t).cross(SR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(ih),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||MR.getNormalMatrix(e),o=this.coplanarPoint(ih).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ER=0;class sl extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Wa,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gS,this.blendDst=vS,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kf,this.stencilZFail=kf,this.stencilZPass=kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Jr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new re,rh=new re,Ac=new re,bc=new re;class zS{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rh.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),bc.copy(this.origin).sub(rh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ac),u=bc.dot(this.direction),f=-bc.dot(Ac),h=bc.lengthSq(),p=Math.abs(1-c*c);let v,m,_,M;if(p>0)if(v=c*f-u,m=c*u-f,M=a*p,v>=0)if(m>=-M)if(m<=M){const A=1/p;v*=A,m*=A,_=v*(v+c*m+2*u)+m*(c*v+m+2*f)+h}else m=a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*f)+h;else m=-a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*f)+h;else m<=-M?(v=Math.max(0,-(-c*a+u)),m=v>0?-a:Math.min(Math.max(-a,-f),a),_=-v*v+m*(m+2*f)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-f),a),_=m*(m+2*f)+h):(v=Math.max(0,-(c*a+u)),m=v>0?a:Math.min(Math.max(-a,-f),a),_=-v*v+m*(m+2*f)+h);else m=c>0?-a:a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(rh).addScaledVector(Ac,m),_}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-m.z)*v,f=(e.max.z-m.z)*v):(u=(e.max.z-m.z)*v,f=(e.min.z-m.z)*v),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,u=this.direction,f=u.x,h=u.y,p=u.z,v=e.x-c.x,m=e.y-c.y,_=e.z-c.z,M=t.x-c.x,A=t.y-c.y,S=t.z-c.z,y=r.x-c.x,R=r.y-c.y,I=r.z-c.z,T=Math.abs(f),D=Math.abs(h),L=Math.abs(p);let F,E,N,O,z,$,Z,W,Q,fe,ie,q;if(T>=D&&T>=L?(N=f,$=v,Q=M,q=y,f>=0?(F=h,E=p,O=m,z=_,Z=A,W=S,fe=R,ie=I):(F=p,E=h,O=_,z=m,Z=S,W=A,fe=I,ie=R)):D>=L?(N=h,$=m,Q=A,q=R,h>=0?(F=p,E=f,O=_,z=v,Z=S,W=M,fe=I,ie=y):(F=f,E=p,O=v,z=_,Z=M,W=S,fe=y,ie=I)):(N=p,$=_,Q=S,q=I,p>=0?(F=f,E=h,O=v,z=m,Z=M,W=A,fe=y,ie=R):(F=h,E=f,O=m,z=v,Z=A,W=M,fe=R,ie=y)),N===0)return null;const Y=F/N,K=E/N,U=1/N,se=O-Y*$,Se=z-K*$,Ge=Z-Y*Q,Ve=W-K*Q,We=fe-Y*q,le=ie-K*q,de=We*Ve-le*Ge,we=se*le-Se*We,tt=Ge*Se-Ve*se;if(o){if(de<0||we<0||tt<0)return null}else if((de<0||we<0||tt<0)&&(de>0||we>0||tt>0))return null;const ke=de+we+tt;if(ke===0)return null;const dt=U*(de*$+we*Q+tt*q);return(ke>0?dt<0:dt>0)?null:this.at(dt/ke,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _u extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=xS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xx=new sn,ws=new zS,Cc=new Pu,jx=new re,Rc=new re,Pc=new re,Dc=new re,sh=new re,Lc=new re,Yx=new re,Nc=new re;class Xi extends Qn{constructor(e=new li,t=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Lc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],v=a[f];p!==0&&(sh.fromBufferAttribute(v,e),c?Lc.addScaledVector(sh,p):Lc.addScaledVector(sh.sub(t),p))}t.add(Lc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(a),ws.copy(e.ray).recast(e.near),!(Cc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Cc,jx)===null||ws.origin.distanceToSquared(jx)>(e.far-e.near)**2))&&(Xx.copy(a).invert(),ws.copy(e.ray).applyMatrix4(Xx),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const S=m[M],y=c[S.materialIndex],R=Math.max(S.start,_.start),I=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let T=R,D=I;T<D;T+=3){const L=u.getX(T),F=u.getX(T+1),E=u.getX(T+2);o=Ic(this,y,e,r,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(u.count,_.start+_.count);for(let S=M,y=A;S<y;S+=3){const R=u.getX(S),I=u.getX(S+1),T=u.getX(S+2);o=Ic(this,c,e,r,h,p,v,R,I,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const S=m[M],y=c[S.materialIndex],R=Math.max(S.start,_.start),I=Math.min(f.count,Math.min(S.start+S.count,_.start+_.count));for(let T=R,D=I;T<D;T+=3){const L=T,F=T+1,E=T+2;o=Ic(this,y,e,r,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(f.count,_.start+_.count);for(let S=M,y=A;S<y;S+=3){const R=S,I=S+1,T=S+2;o=Ic(this,c,e,r,h,p,v,R,I,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function wR(n,e,t,r,o,a,c,u){let f;if(e.side===Jn?f=r.intersectTriangle(c,a,o,!0,u):f=r.intersectTriangle(o,a,c,e.side===Is,u),f===null)return null;Nc.copy(u),Nc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Nc);return h<t.near||h>t.far?null:{distance:h,point:Nc.clone(),object:n}}function Ic(n,e,t,r,o,a,c,u,f,h){n.getVertexPosition(u,Rc),n.getVertexPosition(f,Pc),n.getVertexPosition(h,Dc);const p=wR(n,e,t,r,Rc,Pc,Dc,Yx);if(p){const v=new re;Oi.getBarycoord(Yx,Rc,Pc,Dc,v),o&&(p.uv=Oi.getInterpolatedAttribute(o,u,f,h,v,new wt)),a&&(p.uv1=Oi.getInterpolatedAttribute(a,u,f,h,v,new wt)),c&&(p.normal=Oi.getInterpolatedAttribute(c,u,f,h,v,new re),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:f,c:h,normal:new re,materialIndex:0};Oi.getNormal(Rc,Pc,Dc,m.normal),p.face=m,p.barycoord=v}return p}class TR extends Hn{constructor(e=null,t=1,r=1,o,a,c,u,f,h=bn,p=bn,v,m){super(null,c,u,f,h,p,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new Pu,AR=new wt(.5,.5),Uc=new re;class VS{constructor(e=new Jr,t=new Jr,r=new Jr,o=new Jr,a=new Jr,c=new Jr){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],p=a[4],v=a[5],m=a[6],_=a[7],M=a[8],A=a[9],S=a[10],y=a[11],R=a[12],I=a[13],T=a[14],D=a[15];if(o[0].setComponents(h-c,_-p,y-M,D-R).normalize(),o[1].setComponents(h+c,_+p,y+M,D+R).normalize(),o[2].setComponents(h+u,_+v,y+A,D+I).normalize(),o[3].setComponents(h-u,_-v,y-A,D-I).normalize(),r)o[4].setComponents(f,m,S,T).normalize(),o[5].setComponents(h-f,_-m,y-S,D-T).normalize();else if(o[4].setComponents(h-f,_-m,y-S,D-T).normalize(),t===nr)o[5].setComponents(h+f,_+m,y+S,D+T).normalize();else if(t===vu)o[5].setComponents(f,m,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=AR.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Uc.x=o.normal.x>0?e.max.x:e.min.x,Uc.y=o.normal.y>0?e.max.y:e.min.y,Uc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $x=new sn,Cp=new zS,Fc=new Pu,kc=new re;class bR extends Qn{constructor(e=new li,t=new HS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(o),Fc.radius+=a,e.ray.intersectsSphere(Fc)===!1)return;$x.copy(o).invert(),Cp.copy(e.ray).applyMatrix4($x);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=r.index,v=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let M=m,A=_;M<A;M++){const S=h.getX(M);kc.fromBufferAttribute(v,S),qx(kc,S,f,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let M=m,A=_;M<A;M++)kc.fromBufferAttribute(v,M),qx(kc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function qx(n,e,t,r,o,a,c){const u=Cp.distanceSqToPoint(n);if(u<t){const f=new re;Cp.closestPointToPoint(n,f),f.applyMatrix4(r);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class GS extends Hn{constructor(e=[],t=Us,r,o,a,c,u,f,h,p){super(e,t,r,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Za extends Hn{constructor(e,t,r=sr,o,a,c,u=bn,f=bn,h,p=br,v=1){if(p!==br&&p!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,u,f,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class CR extends Za{constructor(e,t=sr,r=Us,o,a,c=bn,u=bn,f,h=br){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class WS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ol extends li{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],v=[];let m=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(f),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(v,2));function M(A,S,y,R,I,T,D,L,F,E,N){const O=T/F,z=D/E,$=T/2,Z=D/2,W=L/2,Q=F+1,fe=E+1;let ie=0,q=0;const Y=new re;for(let K=0;K<fe;K++){const U=K*z-Z;for(let se=0;se<Q;se++){const Se=se*O-$;Y[A]=Se*R,Y[S]=U*I,Y[y]=W,h.push(Y.x,Y.y,Y.z),Y[A]=0,Y[S]=0,Y[y]=L>0?1:-1,p.push(Y.x,Y.y,Y.z),v.push(se/F),v.push(1-K/E),ie+=1}}for(let K=0;K<E;K++)for(let U=0;U<F;U++){const se=m+U+Q*K,Se=m+U+Q*(K+1),Ge=m+(U+1)+Q*(K+1),Ve=m+(U+1)+Q*K;f.push(se,Se,Ve),f.push(Se,Ge,Ve),q+=6}u.addGroup(_,q,N),_+=q,m+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ym extends li{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],c=[];u(o),h(r),p(),this.setAttribute("position",new Gn(a,3)),this.setAttribute("normal",new Gn(a.slice(),3)),this.setAttribute("uv",new Gn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(R){const I=new re,T=new re,D=new re;for(let L=0;L<t.length;L+=3)_(t[L+0],I),_(t[L+1],T),_(t[L+2],D),f(I,T,D,R)}function f(R,I,T,D){const L=D+1,F=[];for(let E=0;E<=L;E++){F[E]=[];const N=R.clone().lerp(T,E/L),O=I.clone().lerp(T,E/L),z=L-E;for(let $=0;$<=z;$++)$===0&&E===L?F[E][$]=N:F[E][$]=N.clone().lerp(O,$/z)}for(let E=0;E<L;E++)for(let N=0;N<2*(L-E)-1;N++){const O=Math.floor(N/2);N%2===0?(m(F[E][O+1]),m(F[E+1][O]),m(F[E][O])):(m(F[E][O+1]),m(F[E+1][O+1]),m(F[E+1][O]))}}function h(R){const I=new re;for(let T=0;T<a.length;T+=3)I.x=a[T+0],I.y=a[T+1],I.z=a[T+2],I.normalize().multiplyScalar(R),a[T+0]=I.x,a[T+1]=I.y,a[T+2]=I.z}function p(){const R=new re;for(let I=0;I<a.length;I+=3){R.x=a[I+0],R.y=a[I+1],R.z=a[I+2];const T=S(R)/2/Math.PI+.5,D=y(R)/Math.PI+.5;c.push(T,1-D)}M(),v()}function v(){for(let R=0;R<c.length;R+=6){const I=c[R+0],T=c[R+2],D=c[R+4],L=Math.max(I,T,D),F=Math.min(I,T,D);L>.9&&F<.1&&(I<.2&&(c[R+0]+=1),T<.2&&(c[R+2]+=1),D<.2&&(c[R+4]+=1))}}function m(R){a.push(R.x,R.y,R.z)}function _(R,I){const T=R*3;I.x=e[T+0],I.y=e[T+1],I.z=e[T+2]}function M(){const R=new re,I=new re,T=new re,D=new re,L=new wt,F=new wt,E=new wt;for(let N=0,O=0;N<a.length;N+=9,O+=6){R.set(a[N+0],a[N+1],a[N+2]),I.set(a[N+3],a[N+4],a[N+5]),T.set(a[N+6],a[N+7],a[N+8]),L.set(c[O+0],c[O+1]),F.set(c[O+2],c[O+3]),E.set(c[O+4],c[O+5]),D.copy(R).add(I).add(T).divideScalar(3);const z=S(D);A(L,O+0,R,z),A(F,O+2,I,z),A(E,O+4,T,z)}}function A(R,I,T,D){D<0&&R.x===1&&(c[I]=R.x-1),T.x===0&&T.z===0&&(c[I]=D/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function y(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ym(e.vertices,e.indices,e.radius,e.detail)}}class Sm extends ym{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sm(e.radius,e.detail)}}class Du extends li{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),f=Math.floor(o),h=u+1,p=f+1,v=e/u,m=t/f,_=[],M=[],A=[],S=[];for(let y=0;y<p;y++){const R=y*m-c;for(let I=0;I<h;I++){const T=I*v-a;M.push(T,-R,0),A.push(0,0,1),S.push(I/u),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let R=0;R<u;R++){const I=R+h*y,T=R+h*(y+1),D=R+1+h*(y+1),L=R+1+h*y;_.push(I,T,L),_.push(T,D,L)}this.setIndex(_),this.setAttribute("position",new Gn(M,3)),this.setAttribute("normal",new Gn(A,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mm extends li{constructor(e=1,t=.4,r=12,o=48,a=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:a,thetaStart:c,thetaLength:u},r=Math.floor(r),o=Math.floor(o);const f=[],h=[],p=[],v=[],m=new re,_=new re,M=new re;for(let A=0;A<=r;A++){const S=c+A/r*u;for(let y=0;y<=o;y++){const R=y/o*a;_.x=(e+t*Math.cos(S))*Math.cos(R),_.y=(e+t*Math.cos(S))*Math.sin(R),_.z=t*Math.sin(S),h.push(_.x,_.y,_.z),m.x=e*Math.cos(R),m.y=e*Math.sin(R),M.subVectors(_,m).normalize(),p.push(M.x,M.y,M.z),v.push(y/o),v.push(A/r)}}for(let A=1;A<=r;A++)for(let S=1;S<=o;S++){const y=(o+1)*A+S-1,R=(o+1)*(A-1)+S-1,I=(o+1)*(A-1)+S,T=(o+1)*A+S;f.push(y,R,T),f.push(R,I,T)}this.setIndex(f),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ko(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Kx(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Kx(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const r=ko(n[t]);for(const o in r)e[o]=r[o]}return e}function Kx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function RR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function XS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const PR={clone:ko,merge:Bn};var DR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DR,this.fragmentShader=LR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=RR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(o.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new re().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new sn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class NR extends ar{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IR extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UR extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new re,Bc=new Vo,Ki=new re;class jS extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Oc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new re,Zx=new wt,Jx=new wt;class _i extends jS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Zx,Jx),t.subVectors(Jx,Zx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Of*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class YS extends jS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const So=-90,Mo=1;class FR extends Qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _i(So,Mo,e,t);o.layers=this.layers,this.add(o);const a=new _i(So,Mo,e,t);a.layers=this.layers,this.add(a);const c=new _i(So,Mo,e,t);c.layers=this.layers,this.add(c);const u=new _i(So,Mo,e,t);u.layers=this.layers,this.add(u);const f=new _i(So,Mo,e,t);f.layers=this.layers,this.add(f);const h=new _i(So,Mo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,m,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class kR extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Cm=class Cm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Cm.prototype.isMatrix2=!0;let Qx=Cm;function e_(n,e,t,r){const o=BR(r);switch(t){case DS:return n*e;case NS:return n*e/o.components*o.byteLength;case pm:return n*e/o.components*o.byteLength;case Fs:return n*e*2/o.components*o.byteLength;case mm:return n*e*2/o.components*o.byteLength;case LS:return n*e*3/o.components*o.byteLength;case zi:return n*e*4/o.components*o.byteLength;case gm:return n*e*4/o.components*o.byteLength;case Zc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:case ep:return Math.max(n,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(n,8)*Math.max(e,8)/2;case tp:case np:case rp:case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ip:case hu:case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sp:case Mp:case Ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wp:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pu:case Ap:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BR(n){switch(n){case yi:case bS:return{byteLength:1,components:1};case qa:case CS:case or:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case sr:case dm:case tr:return{byteLength:4,components:1};case RS:case PS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $S(){let n=null,e=!1,t=null,r=null;function o(a,c){r=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function zR(n){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,f,h){const p=f.array,v=f.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<v.length;_++){const M=v[m],A=v[_];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,v[m]=A)}v.length=m+1;for(let _=0,M=v.length;_<M;_++){const A=v[_];n.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:c}}var VR=`#ifdef USE_ALPHAHASH
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
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
} // validated`,d2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f2=`vec3 transformedNormal = objectNormal;
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
vec3 nonPerturbedNormal = normal;`,oP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aP=`#ifndef FLAT_SHADED
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
#endif`,dP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fP=`#ifdef USE_CLEARCOAT_NORMALMAP
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
}`,o3=`#define MATCAP
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
}`,a3=`#define NORMAL
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
}`,d3=`#define STANDARD
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
}`,f3=`#define STANDARD
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
}`,mt={alphahash_fragment:VR,alphahash_pars_fragment:HR,alphamap_fragment:GR,alphamap_pars_fragment:WR,alphatest_fragment:XR,alphatest_pars_fragment:jR,aomap_fragment:YR,aomap_pars_fragment:$R,batching_pars_vertex:qR,batching_vertex:KR,begin_vertex:ZR,beginnormal_vertex:JR,bsdfs:QR,iridescence_fragment:e2,bumpmap_pars_fragment:t2,clipping_planes_fragment:n2,clipping_planes_pars_fragment:i2,clipping_planes_pars_vertex:r2,clipping_planes_vertex:s2,color_fragment:o2,color_pars_fragment:a2,color_pars_vertex:l2,color_vertex:c2,common:u2,cube_uv_reflection_fragment:d2,defaultnormal_vertex:f2,displacementmap_pars_vertex:h2,displacementmap_vertex:p2,emissivemap_fragment:m2,emissivemap_pars_fragment:g2,colorspace_fragment:v2,colorspace_pars_fragment:x2,envmap_fragment:_2,envmap_common_pars_fragment:y2,envmap_pars_fragment:S2,envmap_pars_vertex:M2,envmap_physical_pars_fragment:N2,envmap_vertex:E2,fog_vertex:w2,fog_pars_vertex:T2,fog_fragment:A2,fog_pars_fragment:b2,gradientmap_pars_fragment:C2,lightmap_pars_fragment:R2,lights_lambert_fragment:P2,lights_lambert_pars_fragment:D2,lights_pars_begin:L2,lights_toon_fragment:I2,lights_toon_pars_fragment:U2,lights_phong_fragment:F2,lights_phong_pars_fragment:k2,lights_physical_fragment:O2,lights_physical_pars_fragment:B2,lights_fragment_begin:z2,lights_fragment_maps:V2,lights_fragment_end:H2,lightprobes_pars_fragment:G2,logdepthbuf_fragment:W2,logdepthbuf_pars_fragment:X2,logdepthbuf_pars_vertex:j2,logdepthbuf_vertex:Y2,map_fragment:$2,map_pars_fragment:q2,map_particle_fragment:K2,map_particle_pars_fragment:Z2,metalnessmap_fragment:J2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:eP,morphcolor_vertex:tP,morphnormal_vertex:nP,morphtarget_pars_vertex:iP,morphtarget_vertex:rP,normal_fragment_begin:sP,normal_fragment_maps:oP,normal_pars_fragment:aP,normal_pars_vertex:lP,normal_vertex:cP,normalmap_pars_fragment:uP,clearcoat_normal_fragment_begin:dP,clearcoat_normal_fragment_maps:fP,clearcoat_pars_fragment:hP,iridescence_pars_fragment:pP,opaque_fragment:mP,packing:gP,premultiplied_alpha_fragment:vP,project_vertex:xP,dithering_fragment:_P,dithering_pars_fragment:yP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:MP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:wP,shadowmap_vertex:TP,shadowmask_pars_fragment:AP,skinbase_vertex:bP,skinning_pars_vertex:CP,skinning_vertex:RP,skinnormal_vertex:PP,specularmap_fragment:DP,specularmap_pars_fragment:LP,tonemapping_fragment:NP,tonemapping_pars_fragment:IP,transmission_fragment:UP,transmission_pars_fragment:FP,uv_pars_fragment:kP,uv_pars_vertex:OP,uv_vertex:BP,worldpos_vertex:zP,background_vert:VP,background_frag:HP,backgroundCube_vert:GP,backgroundCube_frag:WP,cube_vert:XP,cube_frag:jP,depth_vert:YP,depth_frag:$P,distance_vert:qP,distance_frag:KP,equirect_vert:ZP,equirect_frag:JP,linedashed_vert:QP,linedashed_frag:e3,meshbasic_vert:t3,meshbasic_frag:n3,meshlambert_vert:i3,meshlambert_frag:r3,meshmatcap_vert:s3,meshmatcap_frag:o3,meshnormal_vert:a3,meshnormal_frag:l3,meshphong_vert:c3,meshphong_frag:u3,meshphysical_vert:d3,meshphysical_frag:f3,meshtoon_vert:h3,meshtoon_frag:p3,points_vert:m3,points_frag:g3,shadow_vert:v3,shadow_frag:x3,sprite_vert:_3,sprite_frag:y3},Ue={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},er={basic:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Bn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Bn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Bn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Bn([Ue.lights,Ue.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};er.physical={uniforms:Bn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const zc={r:0,b:0,g:0},S3=new sn,qS=new ct;qS.set(-1,0,0,0,1,0,0,0,1);function M3(n,e,t,r,o,a){const c=new Et(0);let u=o===!0?0:1,f,h,p=null,v=0,m=null;function _(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const T=R.backgroundBlurriness>0;I=e.get(I,T)}return I}function M(R){let I=!1;const T=_(R);T===null?S(c,u):T&&T.isColor&&(S(T,1),I=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(R,I){const T=_(I);T&&(T.isCubeTexture||T.mapping===Ru)?(h===void 0&&(h=new Xi(new ol(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:ko(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S3.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(qS),h.material.toneMapped=yt.getTransfer(T.colorSpace)!==Ft,(p!==T||v!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=T,v=T.version,m=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Xi(new Du(2,2),new ar({name:"BackgroundMaterial",uniforms:ko(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=yt.getTransfer(T.colorSpace)!==Ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||v!==T.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=T,v=T.version,m=n.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function S(R,I){R.getRGB(zc,XS(n)),t.buffers.color.setClear(zc.r,zc.g,zc.b,I,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,I=1){c.set(R),u=I,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,S(c,u)},render:M,addToRenderList:A,dispose:y}}function E3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let a=o,c=!1;function u(z,$,Z,W,Q){let fe=!1;const ie=v(z,W,Z,$);a!==ie&&(a=ie,h(a.object)),fe=_(z,W,Z,Q),fe&&M(z,W,Z,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,T(z,$,Z,W),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function f(){return n.createVertexArray()}function h(z){return n.bindVertexArray(z)}function p(z){return n.deleteVertexArray(z)}function v(z,$,Z,W){const Q=W.wireframe===!0;let fe=r[$.id];fe===void 0&&(fe={},r[$.id]=fe);const ie=z.isInstancedMesh===!0?z.id:0;let q=fe[ie];q===void 0&&(q={},fe[ie]=q);let Y=q[Z.id];Y===void 0&&(Y={},q[Z.id]=Y);let K=Y[Q];return K===void 0&&(K=m(f()),Y[Q]=K),K}function m(z){const $=[],Z=[],W=[];for(let Q=0;Q<t;Q++)$[Q]=0,Z[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:W,object:z,attributes:{},index:null}}function _(z,$,Z,W){const Q=a.attributes,fe=$.attributes;let ie=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){const U=Q[Y];let se=fe[Y];if(se===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),U===void 0||U.attribute!==se||se&&U.data!==se.data)return!0;ie++}return a.attributesNum!==ie||a.index!==W}function M(z,$,Z,W){const Q={},fe=$.attributes;let ie=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){let U=fe[Y];U===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));const se={};se.attribute=U,U&&U.data&&(se.data=U.data),Q[Y]=se,ie++}a.attributes=Q,a.attributesNum=ie,a.index=W}function A(){const z=a.newAttributes;for(let $=0,Z=z.length;$<Z;$++)z[$]=0}function S(z){y(z,0)}function y(z,$){const Z=a.newAttributes,W=a.enabledAttributes,Q=a.attributeDivisors;Z[z]=1,W[z]===0&&(n.enableVertexAttribArray(z),W[z]=1),Q[z]!==$&&(n.vertexAttribDivisor(z,$),Q[z]=$)}function R(){const z=a.newAttributes,$=a.enabledAttributes;for(let Z=0,W=$.length;Z<W;Z++)$[Z]!==z[Z]&&(n.disableVertexAttribArray(Z),$[Z]=0)}function I(z,$,Z,W,Q,fe,ie){ie===!0?n.vertexAttribIPointer(z,$,Z,Q,fe):n.vertexAttribPointer(z,$,Z,W,Q,fe)}function T(z,$,Z,W){A();const Q=W.attributes,fe=Z.getAttributes(),ie=$.defaultAttributeValues;for(const q in fe){const Y=fe[q];if(Y.location>=0){let K=Q[q];if(K===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const U=K.normalized,se=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ge=Se.buffer,Ve=Se.type,We=Se.bytesPerElement,le=Ve===n.INT||Ve===n.UNSIGNED_INT||K.gpuType===dm;if(K.isInterleavedBufferAttribute){const de=K.data,we=de.stride,tt=K.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)y(Y.location+ke,de.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<Y.locationSize;ke++)S(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ke=0;ke<Y.locationSize;ke++)I(Y.location+ke,se/Y.locationSize,Ve,U,we*We,(tt+se/Y.locationSize*ke)*We,le)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)y(Y.location+de,K.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<Y.locationSize;de++)S(Y.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<Y.locationSize;de++)I(Y.location+de,se/Y.locationSize,Ve,U,se*We,se/Y.locationSize*de*We,le)}}else if(ie!==void 0){const U=ie[q];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(Y.location,U);break;case 3:n.vertexAttrib3fv(Y.location,U);break;case 4:n.vertexAttrib4fv(Y.location,U);break;default:n.vertexAttrib1fv(Y.location,U)}}}}R()}function D(){N();for(const z in r){const $=r[z];for(const Z in $){const W=$[Z];for(const Q in W){const fe=W[Q];for(const ie in fe)p(fe[ie].object),delete fe[ie];delete W[Q]}}delete r[z]}}function L(z){if(r[z.id]===void 0)return;const $=r[z.id];for(const Z in $){const W=$[Z];for(const Q in W){const fe=W[Q];for(const ie in fe)p(fe[ie].object),delete fe[ie];delete W[Q]}}delete r[z.id]}function F(z){for(const $ in r){const Z=r[$];for(const W in Z){const Q=Z[W];if(Q[z.id]===void 0)continue;const fe=Q[z.id];for(const ie in fe)p(fe[ie].object),delete fe[ie];delete Q[z.id]}}}function E(z){for(const $ in r){const Z=r[$],W=z.isInstancedMesh===!0?z.id:0,Q=Z[W];if(Q!==void 0){for(const fe in Q){const ie=Q[fe];for(const q in ie)p(ie[q].object),delete ie[q];delete Q[fe]}delete Z[W],Object.keys(Z).length===0&&delete r[$]}}}function N(){O(),c=!0,a!==o&&(a=o,h(a.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:N,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function w3(n,e,t){let r;function o(f){r=f}function a(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function c(f,h,p){p!==0&&(n.drawArraysInstanced(r,f,h,p),t.update(h,r,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function T3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==zi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==yi&&F!==tr&&!E&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:T,maxSamples:D,samples:L}}function A3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Jr,u=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||r!==0||o;return o=m,r=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,_){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,y=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const R=a?0:r,I=R*4;let T=y.clippingState||null;f.value=T,T=p(M,m,I,_);for(let D=0;D!==I;++D)T[D]=t[D];y.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,m,_,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=f.value,M!==!0||S===null){const y=_+A*4,R=m.matrixWorldInverse;u.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,T=_;I!==A;++I,T+=4)c.copy(v[I]).applyMatrix4(R,u),c.normal.toArray(S,T),S[T+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Po=4,b3=6,C3=20,R3=256,La=new YS,t_=new Et;let oh=null,ah=0,lh=0,ch=!1;const P3=new re,As=new re;class n_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=P3}=a;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:or,format:zi,colorSpace:mu,depthBuffer:!1},o=i_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D3(a)),this._blurMaterial=N3(a,e,t),this._ggxMaterial=L3(a,e,t)}return o}_compileMaterial(e){const t=new Xi(new li,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,r,o,a){const f=new _i(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(t_),v.toneMapping=rr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new ol,new _u({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,y=!0):(S.color.copy(t_),y=!0);for(let I=0;I<6;I++){const T=I%3;T===0?(f.up.set(0,h[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[I],a.y,a.z)):T===1?(f.up.set(0,0,h[I]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[I],a.z)):(f.up.set(0,h[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[I]));const D=this._cubeSize;Eo(o,T*D,I>2?D:0,D,D),v.setRenderTarget(o),y&&v.render(A,f),v.render(e,f)}v.toneMapping=_,v.autoClear=m,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Us||e.mapping===Fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Eo(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,La)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=h*1.25,_=v*m,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-Po?r-M+Po:0),y=4*(this._cubeSize-A);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=M-t,Eo(a,S,y,3*A,2*A),o.setRenderTarget(a),o.render(u,La),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-r,Eo(e,S,y,3*A,2*A),o.setRenderTarget(e),o.render(u,La)}_blur(e,t,r,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,r,c),this._blurPass(a,e,r,r,c)}_blurPass(e,t,r,o,a){const c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[o];f.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-r;const p=this._sizeLods[o],v=3*p*(o>this._lodMax-Po?o-this._lodMax+Po:0),m=4*(this._cubeSize-p);Eo(t,v,m,3*p,2*p),c.setRenderTarget(t),c.render(f,La)}}function D3(n){const e=[],t=[];let r=n;const o=n-Po+1+b3;for(let a=0;a<o;a++){const c=Math.pow(2,r);e.push(c);const u=1/(c-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,m=6,_=3,M=new Float32Array(_*m*v),A=new Float32Array(_*m*v);for(let y=0;y<v;y++){const R=y%3*2/3-1,I=y>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(T,_*m*y);for(let D=0;D<m;D++){const L=p[D*2]*2-1,F=p[D*2+1]*2-1;y===0?As.set(1,F,L):y===1?As.set(-L,1,-F):y===2?As.set(-L,F,1):y===3?As.set(-1,F,-L):y===4?As.set(-L,-1,F):As.set(L,F,-1),As.toArray(A,(y*m+D)*_)}}const S=new li;S.setAttribute("position",new Gi(M,_)),S.setAttribute("outputDirection",new Gi(A,_)),t.push(new Xi(S,null)),r>Po&&r--}return{lodMeshes:t,sizeLods:e}}function i_(n,e,t){const r=new Hi(n,e,t);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Eo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function L3(n,e,t){return new ar({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function N3(n,e,t){return new ar({name:"SphericalGaussianBlur",defines:{SAMPLES:C3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function r_(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function s_(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

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
	`}class KS extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new GS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ol(5,5,5),a=new ar({name:"CubemapFromEquirect",uniforms:ko(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Tr});a.uniforms.tEquirect.value=t;const c=new Xi(o,a),u=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Un),new FR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function I3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===If||_===Uf)if(e.has(m)){const M=e.get(m).texture;return u(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new KS(M.height);return A.fromEquirectangularTexture(n,m),e.set(m,A),m.addEventListener("dispose",h),u(A.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,M=_===If||_===Uf,A=_===Us||_===Fo;if(M||A){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return r===null&&(r=new n_(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const R=m.image;return M&&R&&R.height>0||A&&R&&f(R)?(r===null&&(r=new n_(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function u(m,_){return _===If?m.mapping=Us:_===Uf&&(m.mapping=Fo),m}function f(m){let _=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&_++;return _===M}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function U3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Do("WebGLRenderer: "+r+" extension not supported."),o}}}function F3(n,e,t,r){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function f(v){const m=v.attributes;for(const _ in m)e.update(m[_],n.ARRAY_BUFFER)}function h(v){const m=[],_=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(_!==null){const R=_.array;A=_.version;for(let I=0,T=R.length;I<T;I+=3){const D=R[I+0],L=R[I+1],F=R[I+2];m.push(D,L,L,F,F,D)}}else{const R=M.array;A=M.version;for(let I=0,T=R.length/3-1;I<T;I+=3){const D=I+0,L=I+1,F=I+2;m.push(D,L,L,F,F,D)}}const S=new(M.count>=65535?BS:OS)(m,1);S.version=A;const y=a.get(v);y&&e.remove(y),a.set(v,S)}function p(v){const m=a.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:f,getWireframeAttribute:p}}function k3(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,m){n.drawElements(r,m,a,v*c),t.update(m,r,1)}function h(v,m,_){_!==0&&(n.drawElementsInstanced(r,m,a,v*c,_),t.update(m,r,_))}function p(v,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,v,0,_);let A=0;for(let S=0;S<_;S++)A+=m[S];t.update(A,r,1)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function O3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function B3(n,e,t){const r=new WeakMap,o=new tn;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let m=r.get(u);if(m===void 0||m.count!==v){let O=function(){E.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var _=O;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),A===!0&&(T=2),S===!0&&(T=3);let D=u.attributes.position.count*T,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const F=new Float32Array(D*L*4*v),E=new US(F,D,L,v);E.type=tr,E.needsUpdate=!0;const N=T*4;for(let z=0;z<v;z++){const $=y[z],Z=R[z],W=I[z],Q=D*L*4*z;for(let fe=0;fe<$.count;fe++){const ie=fe*N;M===!0&&(o.fromBufferAttribute($,fe),F[Q+ie+0]=o.x,F[Q+ie+1]=o.y,F[Q+ie+2]=o.z,F[Q+ie+3]=0),A===!0&&(o.fromBufferAttribute(Z,fe),F[Q+ie+4]=o.x,F[Q+ie+5]=o.y,F[Q+ie+6]=o.z,F[Q+ie+7]=0),S===!0&&(o.fromBufferAttribute(W,fe),F[Q+ie+8]=o.x,F[Q+ie+9]=o.y,F[Q+ie+10]=o.z,F[Q+ie+11]=W.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new wt(D,L)},r.set(u,m),u.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function z3(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const V3={[_S]:"LINEAR_TONE_MAPPING",[yS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[MS]:"ACES_FILMIC_TONE_MAPPING",[wS]:"AGX_TONE_MAPPING",[TS]:"NEUTRAL_TONE_MAPPING",[ES]:"CUSTOM_TONE_MAPPING"};function H3(n,e,t,r,o,a){const c=new Hi(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,f=null;const h=new li;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const p=new NR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Xi(h,p),m=new YS(-1,1,1,-1,0,1);let _=null,M=null,A=!1,S,y=null,R=[],I=!1;this.setSize=function(T,D){c.setSize(T,D),u!==null&&u.setSize(T,D),f!==null&&f.setSize(T,D);for(let L=0;L<R.length;L++){const F=R[L];F.setSize&&F.setSize(T,D)}},this.setEffects=function(T){R=T,I=R.length>0&&R[0].isRenderPass===!0;const D=c.width,L=c.height;R.length>0&&u===null&&(u=new Hi(D,L,{type:or,depthBuffer:!1,stencilBuffer:!1}),f=new Hi(D,L,{type:or,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<R.length;F++){const E=R[F];E.setSize&&E.setSize(D,L)}},this.begin=function(T,D){if(A||T.toneMapping===rr&&R.length===0)return!1;if(y=D,D!==null){const L=D.width,F=D.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return I===!1&&T.setRenderTarget(c),S=T.toneMapping,T.toneMapping=rr,!0},this.hasRenderPass=function(){return I},this.end=function(T,D){T.toneMapping=S,A=!0;let L=c,F=u;for(let E=0;E<R.length;E++){const N=R[E];N.enabled!==!1&&(N.render(T,F,L,D),N.needsSwap!==!1&&(L=F,F=F===u?f:u))}if(_!==T.outputColorSpace||M!==T.toneMapping){_=T.outputColorSpace,M=T.toneMapping,p.defines={},yt.getTransfer(_)===Ft&&(p.defines.SRGB_TRANSFER="");const E=V3[M];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,T.setRenderTarget(y),T.render(v,m),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),h.dispose(),p.dispose()}}const ZS=new Hn,Rp=new Za(1,1),JS=new US,QS=new cR,eM=new GS,o_=[],a_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Ho(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=o_[o];if(a===void 0&&(a=new Float32Array(o),o_[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Nu(n,e){let t=a_[e];t===void 0&&(t=new Int32Array(e),a_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function G3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function j3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function Y3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;u_.set(r),n.uniformMatrix2fv(this.addr,!1,u_),vn(t,r)}}function $3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;c_.set(r),n.uniformMatrix3fv(this.addr,!1,c_),vn(t,r)}}function q3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;l_.set(r),n.uniformMatrix4fv(this.addr,!1,l_),vn(t,r)}}function K3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function Q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function eD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function iD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function rD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Rp.compareFunction=t.isReversedDepthBuffer()?xm:vm,a=Rp):a=ZS,t.setTexture2D(e||a,o)}function sD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||QS,o)}function oD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||eM,o)}function aD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||JS,o)}function lD(n){switch(n){case 5126:return G3;case 35664:return W3;case 35665:return X3;case 35666:return j3;case 35674:return Y3;case 35675:return $3;case 35676:return q3;case 5124:case 35670:return K3;case 35667:case 35671:return Z3;case 35668:case 35672:return J3;case 35669:case 35673:return Q3;case 5125:return eD;case 36294:return tD;case 36295:return nD;case 36296:return iD;case 35678:case 36198:case 36298:case 36306:case 35682:return rD;case 35679:case 36299:case 36307:return sD;case 35680:case 36300:case 36308:case 36293:return oD;case 36289:case 36303:case 36311:case 36292:return aD}}function cD(n,e){n.uniform1fv(this.addr,e)}function uD(n,e){const t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function dD(n,e){const t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function fD(n,e){const t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function hD(n,e){const t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pD(n,e){const t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mD(n,e){const t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gD(n,e){n.uniform1iv(this.addr,e)}function vD(n,e){n.uniform2iv(this.addr,e)}function xD(n,e){n.uniform3iv(this.addr,e)}function _D(n,e){n.uniform4iv(this.addr,e)}function yD(n,e){n.uniform1uiv(this.addr,e)}function SD(n,e){n.uniform2uiv(this.addr,e)}function MD(n,e){n.uniform3uiv(this.addr,e)}function ED(n,e){n.uniform4uiv(this.addr,e)}function wD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);gn(r,a)||(n.uniform1iv(this.addr,a),vn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Rp:c=ZS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function TD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);gn(r,a)||(n.uniform1iv(this.addr,a),vn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||QS,a[c])}function AD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);gn(r,a)||(n.uniform1iv(this.addr,a),vn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||eM,a[c])}function bD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);gn(r,a)||(n.uniform1iv(this.addr,a),vn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||JS,a[c])}function CD(n){switch(n){case 5126:return cD;case 35664:return uD;case 35665:return dD;case 35666:return fD;case 35674:return hD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return vD;case 35668:case 35672:return xD;case 35669:case 35673:return _D;case 5125:return yD;case 36294:return SD;case 36295:return MD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return wD;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return bD}}class RD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lD(t.type)}}class PD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CD(t.type)}}class DD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function d_(n,e){n.seq.push(e),n.map[e.id]=e}function LD(n,e,t){const r=n.name,o=r.length;for(uh.lastIndex=0;;){const a=uh.exec(r),c=uh.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){d_(t,h===void 0?new RD(u,n,e):new PD(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new DD(u),d_(t,v)),t=v}}}class tu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);LD(u,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function f_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const ND=37297;let ID=0;function UD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const h_=new ct;function FD(n){yt._getMatrix(h_,yt.workingColorSpace,n);const e=`mat3( ${h_.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case gu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function p_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+UD(n.getShaderSource(e),u)}else return a}function kD(n,e){const t=FD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OD={[_S]:"Linear",[yS]:"Reinhard",[SS]:"Cineon",[MS]:"ACESFilmic",[wS]:"AgX",[TS]:"Neutral",[ES]:"Custom"};function BD(n,e){const t=OD[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vc=new re;function zD(){yt.getLuminanceCoefficients(Vc);const n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function HD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function GD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ka(n){return n!==""}function m_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(n){return n.replace(WD,jD)}const XD=new Map;function jD(n,e){let t=mt[e];if(t===void 0){const r=XD.get(e);if(r!==void 0)t=mt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pp(t)}const YD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(n){return n.replace(YD,$D)}function $D(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function x_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const qD={[Kc]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function KD(n){return qD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZD={[Us]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function JD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ZD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const QD={[Fo]:"ENVMAP_MODE_REFRACTION"};function eL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":QD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tL={[xS]:"ENVMAP_BLENDING_MULTIPLY",[zC]:"ENVMAP_BLENDING_MIX",[VC]:"ENVMAP_BLENDING_ADD"};function nL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tL[n.combine]||"ENVMAP_BLENDING_NONE"}function iL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function rL(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=KD(t),h=JD(t),p=eL(t),v=nL(t),m=iL(t),_=VD(t),M=HD(a),A=o.createProgram();let S,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ka).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ka).join(`
`),y.length>0&&(y+=`
`)):(S=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),y=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?mt.tonemapping_pars_fragment:"",t.toneMapping!==rr?BD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,kD("linearToOutputTexel",t.outputColorSpace),zD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),c=Pp(c),c=m_(c,t),c=g_(c,t),u=Pp(u),u=m_(u,t),u=g_(u,t),c=v_(c),u=v_(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=R+S+c,T=R+y+u,D=f_(o,o.VERTEX_SHADER,I),L=f_(o,o.FRAGMENT_SHADER,T);o.attachShader(A,D),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(z){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",Z=o.getShaderInfoLog(D)||"",W=o.getShaderInfoLog(L)||"",Q=$.trim(),fe=Z.trim(),ie=W.trim();let q=!0,Y=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,D,L);else{const K=p_(o,D,"vertex"),U=p_(o,L,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+K+`
`+U)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(fe===""||ie==="")&&(Y=!1);Y&&(z.diagnostics={runnable:q,programLog:Q,vertexShader:{log:fe,prefix:S},fragmentShader:{log:ie,prefix:y}})}o.deleteShader(D),o.deleteShader(L),E=new tu(o,A),N=GD(o,A)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(A,ND)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ID++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=L,this}let sL=0;class oL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aL(e),t.set(e,r)),r}}class aL{constructor(e){this.id=sL++,this.code=e,this.usedTimes=0}}function lL(n){return n===Fs||n===hu||n===pu}function cL(n,e,t,r,o,a){const c=new FS,u=new oL,f=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return f.add(E),E===0?"uv":`uv${E}`}function A(E,N,O,z,$,Z){const W=z.fog,Q=$.geometry,fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||fe,ie),Y=q&&q.mapping===Ru?q.image.height:null,K=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=U!==void 0?U.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ge,Ve,We,le;if(K){const Ct=er[K];Ge=Ct.vertexShader,Ve=Ct.fragmentShader}else{Ge=E.vertexShader,Ve=E.fragmentShader;const Ct=u.getVertexShaderStage(E),Mt=u.getFragmentShaderStage(E);u.update(E,Ct,Mt),We=Ct.id,le=Mt.id}const de=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),tt=$.isInstancedMesh===!0,ke=$.isBatchedMesh===!0,dt=!!E.map,Wt=!!E.matcap,ft=!!q,vt=!!E.aoMap,It=!!E.lightMap,ht=!!E.bumpMap&&E.wireframe===!1,kt=!!E.normalMap,Zt=!!E.displacementMap,on=!!E.emissiveMap,Nt=!!E.metalnessMap,Xt=!!E.roughnessMap,X=E.anisotropy>0,un=E.clearcoat>0,bt=E.dispersion>0,k=E.retroreflectivity>0,w=E.iridescence>0,J=E.sheen>0,ae=E.transmission>0,he=X&&!!E.anisotropyMap,Ee=un&&!!E.clearcoatMap,be=un&&!!E.clearcoatNormalMap,pe=un&&!!E.clearcoatRoughnessMap,ge=w&&!!E.iridescenceMap,Pe=w&&!!E.iridescenceThicknessMap,Ke=J&&!!E.sheenColorMap,De=J&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,Ze=!!E.specularColorMap,nt=!!E.specularIntensityMap,st=ae&&!!E.transmissionMap,H=ae&&!!E.thicknessMap,Ce=!!E.gradientMap,me=!!E.alphaMap,Re=E.alphaTest>0,Fe=!!E.alphaHash,ve=!!E.extensions;let Qe=rr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const $e={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Ve,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ke,batchingColor:ke&&$._colorsTexture!==null,instancing:tt,instancingColor:tt&&$.instanceColor!==null,instancingMorph:tt&&$.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:Wt,envMap:ft,envMapMode:ft&&q.mapping,envMapCubeUVHeight:Y,aoMap:vt,lightMap:It,bumpMap:ht,normalMap:kt,displacementMap:Zt,emissiveMap:on,normalMapObjectSpace:kt&&E.normalMapType===WC,normalMapTangentSpace:kt&&E.normalMapType===Px,packedNormalMap:kt&&E.normalMapType===Px&&lL(E.normalMap.format),metalnessMap:Nt,roughnessMap:Xt,anisotropy:X,anisotropyMap:he,clearcoat:un,clearcoatMap:Ee,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:bt,retroreflection:k,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:J,sheenColorMap:Ke,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:Ze,specularIntensityMap:nt,transmission:ae,transmissionMap:st,thicknessMap:H,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Wa&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Fe,combine:E.combine,mapUv:dt&&M(E.map.channel),aoMapUv:vt&&M(E.aoMap.channel),lightMapUv:It&&M(E.lightMap.channel),bumpMapUv:ht&&M(E.bumpMap.channel),normalMapUv:kt&&M(E.normalMap.channel),displacementMapUv:Zt&&M(E.displacementMap.channel),emissiveMapUv:on&&M(E.emissiveMap.channel),metalnessMapUv:Nt&&M(E.metalnessMap.channel),roughnessMapUv:Xt&&M(E.roughnessMap.channel),anisotropyMapUv:he&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(E.sheenRoughnessMap.channel),specularMapUv:Ae&&M(E.specularMap.channel),specularColorMapUv:Ze&&M(E.specularColorMap.channel),specularIntensityMapUv:nt&&M(E.specularIntensityMap.channel),transmissionMapUv:st&&M(E.transmissionMap.channel),thicknessMapUv:H&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(kt||X),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(dt||me),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&kt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:on&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Er,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=f.has(1),$e.vertexUv2s=f.has(2),$e.vertexUv3s=f.has(3),f.clear(),$e}function S(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)N.push(O),N.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(y(N,E),R(N,E),N.push(n.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function y(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function R(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function I(E){const N=_[E.type];let O;if(N){const z=er[N];O=PR.clone(z.uniforms)}else O=E.uniforms;return O}function T(E,N){let O=p.get(N);return O!==void 0?++O.usedTimes:(O=new rL(n,N,E,o),h.push(O),p.set(N,O)),O}function D(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){u.remove(E)}function F(){u.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:T,releaseProgram:D,releaseShaderCache:L,programs:h,dispose:F}}function uL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function dL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function u(m,_,M,A,S,y){let R=n[e];return R===void 0?(R={id:m.id,object:m,geometry:_,material:M,materialVariant:c(m),groupOrder:A,renderOrder:m.renderOrder,z:S,group:y},n[e]=R):(R.id=m.id,R.object=m,R.geometry=_,R.material=M,R.materialVariant=c(m),R.groupOrder=A,R.renderOrder=m.renderOrder,R.z=S,R.group=y),e++,R}function f(m,_,M,A,S,y,R){R.reversedDepth===!0&&(S=-S);const I=u(m,_,M,A,S,y);M.transmission>0?r.push(I):M.transparent===!0?o.push(I):t.push(I)}function h(m,_,M,A,S,y){const R=u(m,_,M,A,S,y);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function p(m,_){t.length>1&&t.sort(m||dL),r.length>1&&r.sort(_||__),o.length>1&&o.sort(_||__)}function v(){for(let m=e,_=n.length;m<_;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:f,unshift:h,finish:v,sort:p}}function fL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new y_,n.set(r,[c])):o>=a.length?(c=new y_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function hL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new re,color:new Et};break;case"SpotLight":t={position:new re,direction:new re,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function pL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mL=0;function gL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vL(n){const e=new hL,t=pL(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const o=new re,a=new sn,c=new sn;function u(h){let p=0,v=0,m=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,M=0,A=0,S=0,y=0,R=0,I=0,T=0,D=0,L=0,F=0,E=0,N=0,O=0;h.sort(gL);for(let $=0,Z=h.length;$<Z;$++){const W=h[$],Q=W.color,fe=W.intensity,ie=W.distance;let q=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Fs?q=W.shadow.map.texture:q=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)p+=Q.r*fe,v+=Q.g*fe,m+=Q.b*fe;else if(W.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(W.sh.coefficients[Y],fe);O++}else if(W.isSunLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[M]=U,r.sunShadowMap[M]=q;const se=K.getViewportCount();for(let Se=0;Se<se;Se++)r.sunShadowMatrix[A+Se]=K.getMatrix(Se),r.sunShadowCascade[A+Se]=K._cascadeData[Se];A+=se,M++}r.sun[_]=Y,_++}else if(W.isDirectionalLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,r.directionalShadow[S]=U,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=W.shadow.matrix,D++}r.directional[S]=Y,S++}else if(W.isSpotLight){const Y=e.get(W);Y.position.setFromMatrixPosition(W.matrixWorld),Y.color.copy(Q).multiplyScalar(fe),Y.distance=ie,Y.coneCos=Math.cos(W.angle),Y.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Y.decay=W.decay,r.spot[R]=Y;const K=W.shadow;if(W.map&&(r.spotLightMap[E]=W.map,E++,K.updateMatrices(W),W.castShadow&&N++),r.spotLightMatrix[R]=K.matrix,W.castShadow){const U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,r.spotShadow[R]=U,r.spotShadowMap[R]=q,F++}R++}else if(W.isRectAreaLight){const Y=e.get(W);Y.color.copy(Q).multiplyScalar(fe),Y.halfWidth.set(W.width*.5,0,0),Y.halfHeight.set(0,W.height*.5,0),r.rectArea[I]=Y,I++}else if(W.isPointLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),Y.distance=W.distance,Y.decay=W.decay,W.castShadow){const K=W.shadow,U=t.get(W);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,U.shadowCameraNear=K.camera.near,U.shadowCameraFar=K.camera.far,r.pointShadow[y]=U,r.pointShadowMap[y]=q,r.pointShadowMatrix[y]=W.shadow.matrix,L++}r.point[y]=Y,y++}else if(W.isHemisphereLight){const Y=e.get(W);Y.skyColor.copy(W.color).multiplyScalar(fe),Y.groundColor.copy(W.groundColor).multiplyScalar(fe),r.hemi[T]=Y,T++}}I>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=m;const z=r.hash;(z.sunLength!==_||z.directionalLength!==S||z.pointLength!==y||z.spotLength!==R||z.rectAreaLength!==I||z.hemiLength!==T||z.numSunShadows!==M||z.numDirectionalShadows!==D||z.numPointShadows!==L||z.numSpotShadows!==F||z.numSpotMaps!==E||z.numLightProbes!==O)&&(r.sun.length=_,r.directional.length=S,r.spot.length=R,r.rectArea.length=I,r.point.length=y,r.hemi.length=T,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-N,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,z.sunLength=_,z.directionalLength=S,z.pointLength=y,z.spotLength=R,z.rectAreaLength=I,z.hemiLength=T,z.numSunShadows=M,z.numDirectionalShadows=D,z.numPointShadows=L,z.numSpotShadows=F,z.numSpotMaps=E,z.numLightProbes=O,r.version=mL++)}function f(h,p){let v=0,m=0,_=0,M=0,A=0,S=0;const y=p.matrixWorldInverse;for(let R=0,I=h.length;R<I;R++){const T=h[R];if(T.isSunLight){const D=r.sun[v];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(y),v++}else if(T.isDirectionalLight){const D=r.directional[m];D.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),m++}else if(T.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),M++}else if(T.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),c.identity(),a.copy(T.matrixWorld),a.premultiply(y),c.extractRotation(a),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),A++}else if(T.isPointLight){const D=r.point[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(y),_++}else if(T.isHemisphereLight){const D=r.hemi[S];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(y),S++}}}return{setup:u,setupView:f,state:r}}function S_(n){const e=new vL(n),t=[],r=[],o=[];function a(m){v.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function u(m){r.push(m)}function f(m){o.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function xL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new S_(n),e.set(o,[u])):a>=c.length?(u=new S_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const _L=`void main() {
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
}`,SL=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],ML=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],M_=new sn,Na=new re,dh=new re;function EL(n,e,t){let r=new VS;const o=new wt,a=new wt,c=new tn,u=new IR,f=new UR,h={},p=t.maxTextureSize,v={[Is]:Jn,[Jn]:Is,[Er]:Er},m=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:_L,fragmentShader:yL}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Xi(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let y=this.type;this.render=function(L,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===SC&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kc);const N=n.getRenderTarget(),O=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Tr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=y!==this.type;Z&&F.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=L.length;W<Q;W++){const fe=L[W],ie=fe.shadow;if(ie===void 0){at("WebGLShadowMap:",fe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const q=ie.getFrameExtents();o.multiply(q),a.copy(ie.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/q.x),o.x=a.x*q.x,ie.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/q.y),o.y=a.y*q.y,ie.mapSize.y=a.y));const Y=n.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=Y,ie.map===null||Z===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Fa){if(fe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Hi(o.x,o.y,{format:Fs,type:or,minFilter:Un,magFilter:Un,generateMipmaps:!1}),ie.map.texture.name=fe.name+".shadowMap",ie.map.depthTexture=new Za(o.x,o.y,tr),ie.map.depthTexture.name=fe.name+".shadowMapDepth",ie.map.depthTexture.format=br,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=bn,ie.map.depthTexture.magFilter=bn}else fe.isPointLight?(ie.map=new KS(o.x),ie.map.depthTexture=new CR(o.x,sr)):(ie.map=new Hi(o.x,o.y),ie.map.depthTexture=new Za(o.x,o.y,sr)),ie.map.depthTexture.name=fe.name+".shadowMap",ie.map.depthTexture.format=br,this.type===Kc?(ie.map.depthTexture.compareFunction=Y?xm:vm,ie.map.depthTexture.minFilter=Un,ie.map.depthTexture.magFilter=Un):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=bn,ie.map.depthTexture.magFilter=bn);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==o.x||ie.map.height!==o.y)&&ie.map.setSize(o.x,o.y);const K=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();fe.isPointLight!==!0&&ie.updateMatrices(fe,E);for(let U=0;U<K;U++){const se=ie.getCamera(U);if(fe.isPointLight){const Se=ie.camera,Ge=ie.matrix,Ve=fe.distance||Se.far;Ve!==Se.far&&(Se.far=Ve,Se.updateProjectionMatrix()),Na.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(Na),dh.copy(Se.position),dh.add(SL[U]),Se.up.copy(ML[U]),Se.lookAt(dh),Se.updateMatrixWorld(),Ge.makeTranslation(-Na.x,-Na.y,-Na.z),M_.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(M_,Se.coordinateSystem,Se.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)n.setRenderTarget(ie.map,U),n.clear();else{U===0&&(n.setRenderTarget(ie.map),n.clear());const Se=ie.getViewport(U);c.set(a.x*Se.x,a.y*Se.y,a.x*Se.z,a.y*Se.w),$.viewport(c)}r=ie.getFrustum(U),T(F,E,se,fe,this.type)}ie.isPointLightShadow!==!0&&this.type===Fa&&R(ie,E),ie.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(N,O,z)};function R(L,F){const E=e.update(A);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null?L.mapPass=new Hi(o.x,o.y,{format:Fs,type:or}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,E,m,A,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,E,_,A,null)}function I(L,F,E,N){let O=null;const z=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)O=z;else if(O=E.isPointLight===!0?f:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=O.uuid,Z=F.uuid;let W=h[$];W===void 0&&(W={},h[$]=W);let Q=W[Z];Q===void 0&&(Q=O.clone(),W[Z]=Q,F.addEventListener("dispose",D)),O=Q}if(O.visible=F.visible,O.wireframe=F.wireframe,N===Fa?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:v[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=n.properties.get(O);$.light=E}return O}function T(L,F,E,N,O){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&O===Fa)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),W=L.material;if(Array.isArray(W)){const Q=Z.groups;for(let fe=0,ie=Q.length;fe<ie;fe++){const q=Q[fe],Y=W[q.materialIndex];if(Y&&Y.visible){const K=I(L,Y,N,O);L.onBeforeShadow(n,L,F,E,Z,K,q),n.renderBufferDirect(E,null,Z,K,L,q),L.onAfterShadow(n,L,F,E,Z,K,q)}}}else if(W.visible){const Q=I(L,W,N,O);L.onBeforeShadow(n,L,F,E,Z,Q,null),n.renderBufferDirect(E,null,Z,Q,L,null),L.onAfterShadow(n,L,F,E,Z,Q,null)}}const $=L.children;for(let Z=0,W=$.length;Z<W;Z++)T($[Z],F,E,N,O)}function D(L){L.target.removeEventListener("dispose",D);for(const E in h){const N=h[E],O=L.target.uuid;O in N&&(N[O].dispose(),delete N[O])}}}function wL(n,e){function t(){let H=!1;const Ce=new tn;let me=null;const Re=new tn(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!H&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,ve,Qe,$e,Ct){Ct===!0&&(Fe*=$e,ve*=$e,Qe*=$e),Ce.set(Fe,ve,Qe,$e),Re.equals(Ce)===!1&&(n.clearColor(Fe,ve,Qe,$e),Re.copy(Ce))},reset:function(){H=!1,me=null,Re.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,me=null,Re=null,Fe=null;return{setReversed:function(ve){if(Ce!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;const $e=Fe;Fe=null,this.setClear($e)}},getReversed:function(){return Ce},setTest:function(ve){ve?de(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){me!==ve&&!H&&(n.depthMask(ve),me=ve)},setFunc:function(ve){if(Ce&&(ve=nR[ve]),Re!==ve){switch(ve){case Hh:n.depthFunc(n.NEVER);break;case Gh:n.depthFunc(n.ALWAYS);break;case Wh:n.depthFunc(n.LESS);break;case $a:n.depthFunc(n.LEQUAL);break;case Xh:n.depthFunc(n.EQUAL);break;case jh:n.depthFunc(n.GEQUAL);break;case Yh:n.depthFunc(n.GREATER);break;case $h:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,Ce&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,me=null,Re=null,Fe=null,Ce=!1}}}function o(){let H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Qe=null,$e=null,Ct=null;return{setTest:function(Mt){H||(Mt?de(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!H&&(n.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,En,ci){(me!==Mt||Re!==En||Fe!==ci)&&(n.stencilFunc(Mt,En,ci),me=Mt,Re=En,Fe=ci)},setOp:function(Mt,En,ci){(ve!==Mt||Qe!==En||$e!==ci)&&(n.stencilOp(Mt,En,ci),ve=Mt,Qe=En,$e=ci)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Ct!==Mt&&(n.clearStencil(Mt),Ct=Mt)},reset:function(){H=!1,Ce=null,me=null,Re=null,Fe=null,ve=null,Qe=null,$e=null,Ct=null}}}const a=new t,c=new r,u=new o,f=new WeakMap,h=new WeakMap;let p={},v={},m={},_=new WeakMap,M=[],A=null,S=!1,y=null,R=null,I=null,T=null,D=null,L=null,F=null,E=new Et(0,0,0),N=0,O=!1,z=null,$=null,Z=null,W=null,Q=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ie=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ie=q>=2);let K=null,U={};const se=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ge=new tn().fromArray(se),Ve=new tn().fromArray(Se);function We(H,Ce,me,Re){const Fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<me;Qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Ce+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ve}const le={};le[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(n.DEPTH_TEST),c.setFunc($a),ht(!1),kt(bx),de(n.CULL_FACE),vt(Tr);function de(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function we(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function tt(H,Ce){return m[H]!==Ce?(n.bindFramebuffer(H,Ce),m[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ke(H,Ce){let me=M,Re=!1;if(H){me=_.get(Ce),me===void 0&&(me=[],_.set(Ce,me));const Fe=H.textures;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Qe=Fe.length;ve<Qe;ve++)me[ve]=n.COLOR_ATTACHMENT0+ve;me.length=Fe.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function dt(H){return A!==H?(n.useProgram(H),A=H,!0):!1}const Wt={[To]:n.FUNC_ADD,[EC]:n.FUNC_SUBTRACT,[wC]:n.FUNC_REVERSE_SUBTRACT};Wt[TC]=n.MIN,Wt[AC]=n.MAX;const ft={[bC]:n.ZERO,[CC]:n.ONE,[RC]:n.SRC_COLOR,[gS]:n.SRC_ALPHA,[UC]:n.SRC_ALPHA_SATURATE,[NC]:n.DST_COLOR,[DC]:n.DST_ALPHA,[PC]:n.ONE_MINUS_SRC_COLOR,[vS]:n.ONE_MINUS_SRC_ALPHA,[IC]:n.ONE_MINUS_DST_COLOR,[LC]:n.ONE_MINUS_DST_ALPHA,[FC]:n.CONSTANT_COLOR,[kC]:n.ONE_MINUS_CONSTANT_COLOR,[OC]:n.CONSTANT_ALPHA,[BC]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(H,Ce,me,Re,Fe,ve,Qe,$e,Ct,Mt){if(H===Tr){S===!0&&(we(n.BLEND),S=!1);return}if(S===!1&&(de(n.BLEND),S=!0),H!==MC){if(H!==y||Mt!==O){if((R!==To||D!==To)&&(n.blendEquation(n.FUNC_ADD),R=To,D=To),Mt)switch(H){case Wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vh:n.blendFunc(n.ONE,n.ONE);break;case Cx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",H);break}else switch(H){case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",H);break}I=null,T=null,L=null,F=null,E.set(0,0,0),N=0,y=H,O=Mt}return}Fe=Fe||Ce,ve=ve||me,Qe=Qe||Re,(Ce!==R||Fe!==D)&&(n.blendEquationSeparate(Wt[Ce],Wt[Fe]),R=Ce,D=Fe),(me!==I||Re!==T||ve!==L||Qe!==F)&&(n.blendFuncSeparate(ft[me],ft[Re],ft[ve],ft[Qe]),I=me,T=Re,L=ve,F=Qe),($e.equals(E)===!1||Ct!==N)&&(n.blendColor($e.r,$e.g,$e.b,Ct),E.copy($e),N=Ct),y=H,O=!1}function It(H,Ce){H.side===Er?we(n.CULL_FACE):de(n.CULL_FACE);let me=H.side===Jn;Ce&&(me=!me),ht(me),H.blending===Wa&&H.transparent===!1?vt(Tr):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Re=H.stencilWrite;u.setTest(Re),Re&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),on(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){z!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),z=H)}function kt(H){H!==_C?(de(n.CULL_FACE),H!==$&&(H===bx?n.cullFace(n.BACK):H===yC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),$=H}function Zt(H){H!==Z&&(ie&&n.lineWidth(H),Z=H)}function on(H,Ce,me){H?(de(n.POLYGON_OFFSET_FILL),(W!==Ce||Q!==me)&&(W=Ce,Q=me,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):we(n.POLYGON_OFFSET_FILL)}function Nt(H){H?de(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Xt(H){H===void 0&&(H=n.TEXTURE0+fe-1),K!==H&&(n.activeTexture(H),K=H)}function X(H,Ce,me){me===void 0&&(K===null?me=n.TEXTURE0+fe-1:me=K);let Re=U[me];Re===void 0&&(Re={type:void 0,texture:void 0},U[me]=Re),(Re.type!==H||Re.texture!==Ce)&&(K!==me&&(n.activeTexture(me),K=me),n.bindTexture(H,Ce||le[H]),Re.type=H,Re.texture=Ce)}function un(){const H=U[K];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function w(){try{n.texSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function J(){try{n.texSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Ee(){try{n.texStorage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function be(){try{n.texStorage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function pe(){try{n.texImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function ge(){try{n.texImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Pe(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function Ke(H,Ce){v[H]!==Ce&&(n.pixelStorei(H,Ce),v[H]=Ce)}function De(H){Ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function Ae(H){Ve.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ve.copy(H))}function Ze(H,Ce){let me=h.get(Ce);me===void 0&&(me=new WeakMap,h.set(Ce,me));let Re=me.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(Ce,H.name),me.set(H,Re))}function nt(H,Ce){const Re=h.get(Ce).get(H);f.get(Ce)!==Re&&(n.uniformBlockBinding(Ce,Re,H.__bindingPointIndex),f.set(Ce,Re))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},K=null,U={},m={},_=new WeakMap,M=[],A=null,S=!1,y=null,R=null,I=null,T=null,D=null,L=null,F=null,E=new Et(0,0,0),N=0,O=!1,z=null,$=null,Z=null,W=null,Q=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:de,disable:we,bindFramebuffer:tt,drawBuffers:ke,useProgram:dt,setBlending:vt,setMaterial:It,setFlipSided:ht,setCullFace:kt,setLineWidth:Zt,setPolygonOffset:on,setScissorTest:Nt,activeTexture:Xt,bindTexture:X,unbindTexture:un,compressedTexImage2D:bt,compressedTexImage3D:k,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:Pe,updateUBOMapping:Ze,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:be,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:De,viewport:Ae,reset:st}}function TL(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,p=new WeakMap,v=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,w){return M?new OffscreenCanvas(k,w):xu("canvas")}function S(k,w,J){let ae=1;const he=bt(k);if((he.width>J||he.height>J)&&(ae=J/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ee=Math.floor(ae*he.width),be=Math.floor(ae*he.height);m===void 0&&(m=A(Ee,be));const pe=w?A(Ee,be):m;return pe.width=Ee,pe.height=be,pe.getContext("2d").drawImage(k,0,0,Ee,be),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+be+")."),pe}else return"data"in k&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),k;return k}function y(k){return k.generateMipmaps}function R(k){n.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(k,w,J,ae,he,Ee=!1){if(k!==null){if(n[k]!==void 0)return n[k];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let be;ae&&(be=e.get("EXT_texture_norm16"),be||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),J===n.SHORT&&be&&(pe=be.R16_SNORM_EXT)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),w===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),J===n.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(J===n.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),J===n.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ge=Ee?gu:yt.getTransfer(he);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=ge===Ft?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),J===n.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(k,w){let J;return k?w===null||w===sr||w===Ka?J=n.DEPTH24_STENCIL8:w===tr?J=n.DEPTH32F_STENCIL8:w===qa&&(J=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===sr||w===Ka?J=n.DEPTH_COMPONENT24:w===tr?J=n.DEPTH_COMPONENT32F:w===qa&&(J=n.DEPTH_COMPONENT16),J}function L(k,w){return y(k)===!0||k.isFramebufferTexture&&k.minFilter!==bn&&k.minFilter!==Un?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function F(k){const w=k.target;w.removeEventListener("dispose",F),N(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function E(k){const w=k.target;w.removeEventListener("dispose",E),z(w)}function N(k){const w=r.get(k);if(w.__webglInit===void 0)return;const J=k.source,ae=_.get(J);if(ae){const he=ae[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(k),Object.keys(ae).length===0&&_.delete(J)}r.remove(k)}function O(k){const w=r.get(k);n.deleteTexture(w.__webglTexture);const J=k.source,ae=_.get(J);delete ae[w.__cacheKey],c.memory.textures--}function z(k){const w=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let he=0;he<w.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=k.textures;for(let ae=0,he=J.length;ae<he;ae++){const Ee=r.get(J[ae]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(J[ae])}r.remove(k)}let $=0;function Z(){$=0}function W(){return $}function Q(k){$=k}function fe(){const k=$;return k>=o.maxTextures&&at("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,k}function ie(k){const w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function q(k,w){const J=r.get(k);if(k.isVideoTexture&&X(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&J.__version!==k.version){const ae=k.image;if(ae===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{we(J,k,w);return}}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function Y(k,w){const J=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){we(J,k,w);return}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function K(k,w){const J=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){we(J,k,w);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function U(k,w){const J=r.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&J.__version!==k.version){tt(J,k,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}const se={[qh]:n.REPEAT,[wr]:n.CLAMP_TO_EDGE,[Kh]:n.MIRRORED_REPEAT},Se={[bn]:n.NEAREST,[HC]:n.NEAREST_MIPMAP_NEAREST,[vc]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Ff]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},Ge={[jC]:n.NEVER,[ZC]:n.ALWAYS,[YC]:n.LESS,[vm]:n.LEQUAL,[$C]:n.EQUAL,[xm]:n.GEQUAL,[qC]:n.GREATER,[KC]:n.NOTEQUAL};function Ve(k,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Un||w.magFilter===Ff||w.magFilter===vc||w.magFilter===Ps||w.minFilter===Un||w.minFilter===Ff||w.minFilter===vc||w.minFilter===Ps)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,se[w.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Se[w.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==vc&&w.minFilter!==Ps||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(k,w){let J=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",F));const ae=w.source;let he=_.get(ae);he===void 0&&(he={},_.set(ae,he));const Ee=ie(w);if(Ee!==k.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,J=!0),he[Ee].usedTimes++;const be=he[k.__cacheKey];be!==void 0&&(he[k.__cacheKey].usedTimes--,be.usedTimes===0&&O(w)),k.__cacheKey=Ee,k.__webglTexture=he[Ee].texture}return J}function le(k,w,J){return Math.floor(Math.floor(k/J)/w)}function de(k,w,J,ae){const Ee=k.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,ae,w.data);else{Ee.sort((Ke,De)=>Ke.start-De.start);let be=0;for(let Ke=1;Ke<Ee.length;Ke++){const De=Ee[be],Ae=Ee[Ke],Ze=De.start+De.count,nt=le(Ae.start,w.width,4),st=le(De.start,w.width,4);Ae.start<=Ze+1&&nt===st&&le(Ae.start+Ae.count-1,w.width,4)===nt?De.count=Math.max(De.count,Ae.start+Ae.count-De.start):(++be,Ee[be]=Ae)}Ee.length=be+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ke=0,De=Ee.length;Ke<De;Ke++){const Ae=Ee[Ke],Ze=Math.floor(Ae.start/4),nt=Math.ceil(Ae.count/4),st=Ze%w.width,H=Math.floor(Ze/w.width),Ce=nt,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,st,H,Ce,me,J,ae,w.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function we(k,w,J){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const he=We(k,w),Ee=w.source;t.bindTexture(ae,k.__webglTexture,n.TEXTURE0+J);const be=r.get(Ee);if(Ee.version!==be.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=yt.getPrimaries(yt.workingColorSpace),Re=w.colorSpace===Qr?null:yt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Qr||me===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,o.maxTextureSize);ge=un(w,ge);const Pe=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let De=T(w.internalFormat,Pe,Ke,w.normalized,w.colorSpace,w.isVideoTexture);Ve(ae,w);let Ae;const Ze=w.mipmaps,nt=w.isVideoTexture!==!0,st=be.__version===void 0||he===!0,H=Ee.dataReady,Ce=L(w,ge);if(w.isDepthTexture)De=D(w.format===Ds,w.type),st&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ke,null));else if(w.isDataTexture)if(Ze.length>0){nt&&st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ze[0].width,Ze[0].height);for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Pe,Ke,Ae.data);w.generateMipmaps=!1}else nt?(st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,ge.width,ge.height),H&&de(w,ge,Pe,Ke)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ke,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,Ze[0].width,Ze[0].height,ge.depth);for(let me=0,Re=Ze.length;me<Re;me++)if(Ae=Ze[me],w.format!==zi)if(Pe!==null)if(nt){if(H)if(w.layerUpdates.size>0){const Fe=e_(Ae.width,Ae.height,w.format,w.type);for(const ve of w.layerUpdates){const Qe=Ae.data.subarray(ve*Fe/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ve,Ae.width,Ae.height,1,Pe,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ke,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,Ae.width,Ae.height,ge.depth,0,Pe,Ke,Ae.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{nt&&st&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ze[0].width,Ze[0].height);for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],w.format!==zi?Pe!==null?nt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,De,Ae.width,Ae.height,0,Pe,Ke,Ae.data)}else if(w.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,ge.width,ge.height,ge.depth),H)if(w.layerUpdates.size>0){const me=e_(ge.width,ge.height,w.format,w.type);for(const Re of w.layerUpdates){const Fe=ge.data.subarray(Re*me/ge.data.BYTES_PER_ELEMENT,(Re+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ge.width,ge.height,1,Pe,Ke,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(w.isData3DTexture)nt?(st&&t.texStorage3D(n.TEXTURE_3D,Ce,De,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(w.isFramebufferTexture){if(st)if(nt)t.texStorage2D(n.TEXTURE_2D,Ce,De,ge.width,ge.height);else{let me=ge.width,Re=ge.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,De,me,Re,0,Pe,Ke,null),me>>=1,Re>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Re=>{const Fe=Re.changedElements;for(const ve of v)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Fe=n.RGBA,ve=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,ve,Qe,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(nt&&st){const me=bt(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Ce,De,me.width,me.height)}for(let me=0,Re=Ze.length;me<Re;me++)Ae=Ze[me],nt?H&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Pe,Ke,Ae):t.texImage2D(n.TEXTURE_2D,me,De,Pe,Ke,Ae);w.generateMipmaps=!1}else if(nt){if(st){const me=bt(ge);t.texStorage2D(n.TEXTURE_2D,Ce,De,me.width,me.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ke,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Pe,Ke,ge);y(w)&&R(ae),be.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function tt(k,w,J){if(w.image.length!==6)return;const ae=We(k,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+J);const Ee=r.get(he);if(he.version!==Ee.__version||ae===!0){t.activeTexture(n.TEXTURE0+J);const be=yt.getPrimaries(yt.workingColorSpace),pe=w.colorSpace===Qr?null:yt.getPrimaries(w.colorSpace),ge=w.colorSpace===Qr||be===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!Pe&&!Ke?De[ve]=S(w.image[ve],!0,o.maxCubemapSize):De[ve]=Ke?w.image[ve].image:w.image[ve],De[ve]=un(w,De[ve]);const Ae=De[0],Ze=a.convert(w.format,w.colorSpace),nt=a.convert(w.type),st=T(w.internalFormat,Ze,nt,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Ce=Ee.__version===void 0||ae===!0,me=he.dataReady;let Re=L(w,Ae);Ve(n.TEXTURE_CUBE_MAP,w);let Fe;if(Pe){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){Fe=De[ve].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];w.format!==zi?Ze!==null?H?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,$e.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,nt,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,Ze,nt,$e.data)}}}else{if(Fe=w.mipmaps,H&&Ce){Fe.length>0&&Re++;const ve=bt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Ze,nt,De[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,De[ve].width,De[ve].height,0,Ze,nt,De[ve].data);for(let Qe=0;Qe<Fe.length;Qe++){const Ct=Fe[Qe].image[ve].image;H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ct.width,Ct.height,Ze,nt,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Ct.width,Ct.height,0,Ze,nt,Ct.data)}}else{H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,nt,De[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ze,nt,De[ve]);for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];H?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ze,nt,$e.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Ze,nt,$e.image[ve])}}}y(w)&&R(n.TEXTURE_CUBE_MAP),Ee.__version=he.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function ke(k,w,J,ae,he,Ee){const be=a.convert(J.format,J.colorSpace),pe=a.convert(J.type),ge=T(J.internalFormat,be,pe,J.normalized,J.colorSpace),Pe=r.get(w),Ke=r.get(J);if(Ke.__renderTarget=w,!Pe.__hasExternalTextures){const De=Math.max(1,w.width>>Ee),Ae=Math.max(1,w.height>>Ee);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,De,Ae,w.depth,0,be,pe,null):t.texImage2D(he,Ee,ge,De,Ae,0,be,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,Ke.__webglTexture,0,Nt(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,Ke.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(k,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,k),w.depthBuffer){const ae=w.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ee=D(w.stencilBuffer,he),be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),Ee,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,k)}else{const ae=w.textures;for(let he=0;he<ae.length;he++){const Ee=ae[he],be=a.convert(Ee.format,Ee.colorSpace),pe=a.convert(Ee.type),ge=T(Ee.internalFormat,be,pe,Ee.normalized,Ee.colorSpace);Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(k,w,J){const ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w.depthTexture);const Pe=a.convert(w.depthTexture.format),Ke=a.convert(w.depthTexture.type);let De;w.depthTexture.format===br?De=n.DEPTH_COMPONENT24:w.depthTexture.format===Ds&&(De=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,De,w.width,w.height,0,Pe,Ke,null)}}else q(w.depthTexture,0);const Ee=he.__webglTexture,be=Nt(w),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ge=w.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===br)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else if(w.depthTexture.format===Ds)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(k){const w=r.get(k),J=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){const ae=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ae}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let ae=0;ae<6;ae++)Wt(w.__webglFramebuffer[ae],k,ae);else{const ae=k.texture.mipmaps;ae&&ae.length>0?Wt(w.__webglFramebuffer[0],k,0):Wt(w.__webglFramebuffer,k,0)}else if(J){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),dt(w.__webglDepthbuffer[ae],k,!1);else{const he=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}else{const ae=k.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),dt(w.__webglDepthbuffer,k,!1);else{const he=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(k,w,J){const ae=r.get(k);w!==void 0&&ke(ae.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&ft(k)}function It(k){const w=k.texture,J=r.get(k),ae=r.get(w);k.addEventListener("dispose",E);const he=k.textures,Ee=k.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,c.memory.textures++),Ee){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)J.__webglFramebuffer[pe][ge]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(be)for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=r.get(he[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),c.memory.textures++)}if(k.samples>0&&Xt(k)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Pe=a.convert(ge.format,ge.colorSpace),Ke=a.convert(ge.type),De=T(ge.internalFormat,Pe,Ke,ge.normalized,ge.colorSpace,k.isXRRenderTarget===!0),Ae=Nt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,De,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(J.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(J.__webglFramebuffer[pe][ge],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ke(J.__webglFramebuffer[pe],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(w)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=he[pe],Ke=r.get(Pe);let De=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ke.__webglTexture),Ve(De,Pe),ke(J.__webglFramebuffer,k,Pe,n.COLOR_ATTACHMENT0+pe,De,0),y(Pe)&&R(De)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(pe=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Ve(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ke(J.__webglFramebuffer[ge],k,w,n.COLOR_ATTACHMENT0,pe,ge);else ke(J.__webglFramebuffer,k,w,n.COLOR_ATTACHMENT0,pe,0);y(w)&&R(pe),t.unbindTexture()}k.depthBuffer&&ft(k)}function ht(k){const w=k.textures;for(let J=0,ae=w.length;J<ae;J++){const he=w[J];if(y(he)){const Ee=I(k),be=r.get(he).__webglTexture;t.bindTexture(Ee,be),R(Ee),t.unbindTexture()}}}const kt=[],Zt=[];function on(k){if(k.samples>0){if(Xt(k)===!1){const w=k.textures,J=k.width,ae=k.height;let he=n.COLOR_BUFFER_BIT;const Ee=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=r.get(k),pe=w.length>1;if(pe)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=k.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ke=r.get(w[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,J,ae,0,0,J,ae,he,n.NEAREST),f===!0&&(kt.length=0,Zt.length=0,kt.push(n.COLOR_ATTACHMENT0+Pe),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(kt.push(Ee),Zt.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ke=r.get(w[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&f){const w=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Nt(k){return Math.min(o.maxSamples,k.samples)}function Xt(k){const w=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(k){const w=c.render.frame;p.get(k)!==w&&(p.set(k,w),k.update())}function un(k,w){const J=k.colorSpace,ae=k.format,he=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||J!==mu&&J!==Qr&&(yt.getTransfer(J)===Ft?(ae!==zi||he!==yi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",J)),w}function bt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=fe,this.resetTextureUnits=Z,this.getTextureUnits=W,this.setTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=U,this.rebindTextures=vt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AL(n,e){function t(r,o=Qr){let a;const c=yt.getTransfer(o);if(r===yi)return n.UNSIGNED_BYTE;if(r===fm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===hm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===RS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===PS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===bS)return n.BYTE;if(r===CS)return n.SHORT;if(r===qa)return n.UNSIGNED_SHORT;if(r===dm)return n.INT;if(r===sr)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===or)return n.HALF_FLOAT;if(r===DS)return n.ALPHA;if(r===LS)return n.RGB;if(r===zi)return n.RGBA;if(r===br)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===NS)return n.RED;if(r===pm)return n.RED_INTEGER;if(r===Fs)return n.RG;if(r===mm)return n.RG_INTEGER;if(r===gm)return n.RGBA_INTEGER;if(r===Zc||r===Jc||r===Qc||r===eu)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Jh||r===Qh||r===ep)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ep)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tp||r===np||r===ip||r===rp||r===sp||r===hu||r===op)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===tp||r===np)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ip)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===rp)return a.COMPRESSED_R11_EAC;if(r===sp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===hu)return a.COMPRESSED_RG11_EAC;if(r===op)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ap||r===lp||r===cp||r===up||r===dp||r===fp||r===hp||r===pp||r===mp||r===gp||r===vp||r===xp||r===_p||r===yp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ap)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===up)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sp||r===Mp||r===Ep)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Sp)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ep)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wp||r===Tp||r===pu||r===Ap)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ap)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ka?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const bL=`
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

}`;class RL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new WS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ar({vertexShader:bL,fragmentShader:CL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PL extends Os{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,v=null,m=null,_=null,M=null;const A=typeof XRWebGLBinding<"u",S=new RL,y={},R=t.getContextAttributes();let I=null,T=null;const D=[],L=[],F=new wt;let E=null,N=null;const O=new _i;O.viewport=new tn;const z=new _i;z.viewport=new tn;const $=[O,z],Z=new kR;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let de=D[le];return de===void 0&&(de=new Xf,D[le]=de),de.getTargetRaySpace()},this.getControllerGrip=function(le){let de=D[le];return de===void 0&&(de=new Xf,D[le]=de),de.getGripSpace()},this.getHand=function(le){let de=D[le];return de===void 0&&(de=new Xf,D[le]=de),de.getHandSpace()};function fe(le){const de=L.indexOf(le.inputSource);if(de===-1)return;const we=D[de];we!==void 0&&(we.update(le.inputSource,le.frame,h||c),we.dispatchEvent({type:le.type,data:le.inputSource}))}function ie(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",q);for(let le=0;le<D.length;le++){const de=L[le];de!==null&&(L[le]=null,D[le].disconnect(de))}W=null,Q=null,S.reset();for(const le in y)delete y[le];if(e.setRenderTarget(I),_=null,m=null,v=null,o=null,T=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),N!==null){const le=N.camera;le.fov=N.fov,le.zoom=N.zoom,le.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,tt=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=R.stencil?Ds:br,tt=R.stencil?Ka:sr);const dt={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(dt),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new Hi(m.textureWidth,m.textureHeight,{format:zi,type:yi,depthTexture:new Za(m.textureWidth,m.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const we={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Hi(_.framebufferWidth,_.framebufferHeight,{format:zi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(le){for(let de=0;de<le.removed.length;de++){const we=le.removed[de],tt=L.indexOf(we);tt>=0&&(L[tt]=null,D[tt].disconnect(we))}for(let de=0;de<le.added.length;de++){const we=le.added[de];let tt=L.indexOf(we);if(tt===-1){for(let dt=0;dt<D.length;dt++)if(dt>=L.length){L.push(we),tt=dt;break}else if(L[dt]===null){L[dt]=we,tt=dt;break}if(tt===-1)break}const ke=D[tt];ke&&ke.connect(we)}}const Y=new re,K=new re;function U(le,de,we){Y.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(we.matrixWorld);const tt=Y.distanceTo(K),ke=de.projectionMatrix.elements,dt=we.projectionMatrix.elements,Wt=ke[14]/(ke[10]-1),ft=ke[14]/(ke[10]+1),vt=(ke[9]+1)/ke[5],It=(ke[9]-1)/ke[5],ht=(ke[8]-1)/ke[0],kt=(dt[8]+1)/dt[0],Zt=Wt*ht,on=Wt*kt,Nt=tt/(-ht+kt),Xt=Nt*-ht;if(de.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Xt),le.translateZ(Nt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ke[10]===-1)le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const X=Wt+Nt,un=ft+Nt,bt=Zt-Xt,k=on+(tt-Xt),w=vt*ft/un*X,J=It*ft/un*X;le.projectionMatrix.makePerspective(bt,k,w,J,X,un),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function se(le,de){de===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(de.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let de=le.near,we=le.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(we=S.depthFar)),Z.near=z.near=O.near=de,Z.far=z.far=O.far=we,(W!==Z.near||Q!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),W=Z.near,Q=Z.far),Z.layers.mask=le.layers.mask|6,O.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const tt=le.parent,ke=Z.cameras;se(Z,tt);for(let dt=0;dt<ke.length;dt++)se(ke[dt],tt);ke.length===2?U(Z,O,z):Z.projectionMatrix.copy(O.projectionMatrix),N===null&&le.isPerspectiveCamera&&(N={camera:le,fov:le.fov,zoom:le.zoom}),Se(le,Z,tt)};function Se(le,de,we){we===null?le.matrix.copy(de.matrixWorld):(le.matrix.copy(we.matrixWorld),le.matrix.invert(),le.matrix.multiply(de.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=bp*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(le){f=le,m!==null&&(m.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(le){return y[le]};let Ge=null;function Ve(le,de){if(p=de.getViewerPose(h||c),M=de,p!==null){const we=p.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let tt=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,tt=!0);for(let ft=0;ft<we.length;ft++){const vt=we[ft];let It=null;if(_!==null)It=_.getViewport(vt);else{const kt=v.getViewSubImage(m,vt);It=kt.viewport,ft===0&&(e.setRenderTargetTextures(T,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(T))}let ht=$[ft];ht===void 0&&(ht=new _i,ht.layers.enable(ft),ht.viewport=new tn,$[ft]=ht),ht.matrix.fromArray(vt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(vt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(Z.matrix.copy(ht.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),tt===!0&&Z.cameras.push(ht)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const ft=v.getDepthInformation(we[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<we.length;ft++){const vt=we[ft].camera;if(vt){let It=y[vt];It||(It=new WS,y[vt]=It);const ht=v.getCameraImage(vt);It.sourceTexture=ht}}}}for(let we=0;we<D.length;we++){const tt=L[we],ke=D[we];tt!==null&&ke!==void 0&&ke.update(tt,de,h||c)}Ge&&Ge(le,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const We=new $S;We.setAnimationLoop(Ve),this.setAnimationLoop=function(le){Ge=le},this.dispose=function(){}}}const DL=new sn,tM=new ct;tM.set(-1,0,0,0,1,0,0,0,1);function LL(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,XS(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,R,I,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),v(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),m(S,y),y.isMeshPhysicalMaterial&&_(S,y,T)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),A(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?f(S,y,R,I):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),I=R.envMap,T=R.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(DL.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(tM),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,R,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=I*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function NL(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,D){const L=D.program;r.uniformBlockBinding(T,L)}function h(T,D){let L=o[T.id];L===void 0&&(S(T),L=p(T),o[T.id]=L,T.addEventListener("dispose",R));const F=D.program;r.updateUBOMapping(T,F);const E=e.render.frame;a[T.id]!==E&&(m(T),a[T.id]=E)}function p(T){const D=v();T.__bindingPointIndex=D;const L=n.createBuffer(),F=T.__size,E=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,L),L}function v(){for(let T=0;T<u;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const D=o[T.id],L=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let E=0,N=L.length;E<N;E++){const O=L[E];if(Array.isArray(O))for(let z=0,$=O.length;z<$;z++)_(O[z],E,z,F);else _(O,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,D,L,F){if(A(T,D,L,F)===!0){const E=T.__offset,N=T.value;if(Array.isArray(N)){let O=0;for(let z=0;z<N.length;z++){const $=N[z],Z=y($);M($,T.__data,O),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,T.__data)}}function M(T,D,L){typeof T=="number"||typeof T=="boolean"?D[0]=T:T.isMatrix3?(D[0]=T.elements[0],D[1]=T.elements[1],D[2]=T.elements[2],D[3]=0,D[4]=T.elements[3],D[5]=T.elements[4],D[6]=T.elements[5],D[7]=0,D[8]=T.elements[6],D[9]=T.elements[7],D[10]=T.elements[8],D[11]=0):ArrayBuffer.isView(T)?D.set(new T.constructor(T.buffer,T.byteOffset,D.length)):T.toArray(D,L)}function A(T,D,L,F){const E=T.value,N=D+"_"+L;if(F[N]===void 0)return typeof E=="number"||typeof E=="boolean"?F[N]=E:ArrayBuffer.isView(E)?F[N]=E.slice():F[N]=E.clone(),!0;{const O=F[N];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return F[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(O.equals(E)===!1)return O.copy(E),!0}}return!1}function S(T){const D=T.uniforms;let L=0;const F=16;for(let N=0,O=D.length;N<O;N++){const z=Array.isArray(D[N])?D[N]:[D[N]];for(let $=0,Z=z.length;$<Z;$++){const W=z[$],Q=Array.isArray(W.value)?W.value:[W.value];for(let fe=0,ie=Q.length;fe<ie;fe++){const q=Q[fe],Y=y(q),K=L%F,U=K%Y.boundary,se=K+U;L+=U,se!==0&&F-se<Y.storage&&(L+=F-se),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=L,L+=Y.storage}}}const E=L%F;return E>0&&(L+=F-E),T.__size=L,T.__cache={},this}function y(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):at("WebGLRenderer: Unsupported uniform value type.",T),D}function R(T){const D=T.target;D.removeEventListener("dispose",R);const L=c.indexOf(D.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[D.id]),delete o[D.id],delete a[D.id]}function I(){for(const T in o)n.deleteBuffer(o[T]);c=[],o={},a={}}return{bind:f,update:h,dispose:I}}const IL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function UL(){return Zi===null&&(Zi=new TR(IL,16,16,Fs,or),Zi.name="DFG_LUT",Zi.minFilter=Un,Zi.magFilter=Un,Zi.wrapS=wr,Zi.wrapT=wr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class FL{constructor(e={}){const{canvas:t=eR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:_=yi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=_,S=new Set([gm,mm,pm]),y=new Set([yi,sr,qa,Ka,fm,hm]),R=new Uint32Array(4),I=new Int32Array(4),T=new re;let D=null,L=null;const F=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1,$=null,Z=null,W=null,Q=null;this._outputColorSpace=xi;let fe=0,ie=0,q=null,Y=-1,K=null;const U=new tn,se=new tn;let Se=null;const Ge=new Et(0);let Ve=0,We=t.width,le=t.height,de=1,we=null,tt=null;const ke=new tn(0,0,We,le),dt=new tn(0,0,We,le);let Wt=!1;const ft=new VS;let vt=!1,It=!1;const ht=new sn,kt=new re,Zt=new tn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Xt(){return q===null?de:1}let X=r;function un(C,G){return t.getContext(C,G)}let bt,k,w,J,ae,he,Ee,be,pe,ge,Pe,Ke,De,Ae,Ze,nt,st,H,Ce,me,Re,Fe,ve;try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${um}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",En,!1),X===null){const G="webgl2";if(X=un(G,C),X===null)throw un(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),Dt("WebGLRenderer: "+C.message),C}function Qe(){bt=new U3(X),bt.init(),Re=new AL(X,bt),k=new T3(X,bt,e,Re),w=new wL(X,bt),k.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),Z=X.createFramebuffer(),W=X.createFramebuffer(),Q=X.createFramebuffer(),J=new O3(X),ae=new uL,he=new TL(X,bt,w,ae,k,Re,J),Ee=new I3(O),be=new zR(X),Fe=new E3(X,be),pe=new F3(X,be,J,Fe),ge=new z3(X,pe,be,Fe,J),H=new B3(X,k,he),Ze=new A3(ae),Pe=new cL(O,Ee,bt,k,Fe,Ze),Ke=new LL(O,ae),De=new fL,Ae=new xL(bt),st=new M3(O,Ee,w,ge,M,f),nt=new EL(O,ge,k),ve=new NL(X,J,k,w),Ce=new w3(X,bt,J),me=new k3(X,bt,J),J.programs=Pe.programs,O.capabilities=k,O.extensions=bt,O.properties=ae,O.renderLists=De,O.shadowMap=nt,O.state=w,O.info=J}A!==yi&&(N=new H3(A,t.width,t.height,u,o,a));const $e=new PL(O,X);this.xr=$e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(We,le,!1))},this.getSize=function(C){return C.set(We,le)},this.setSize=function(C,G,ce=!0){if($e.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}We=C,le=G,t.width=Math.floor(C*de),t.height=Math.floor(G*de),ce===!0&&(t.style.width=C+"px",t.style.height=G+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(We*de,le*de).floor()},this.setDrawingBufferSize=function(C,G,ce){We=C,le=G,de=ce,t.width=Math.floor(C*ce),t.height=Math.floor(G*ce),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(A===yi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(ke)},this.setViewport=function(C,G,ce,te){C.isVector4?ke.set(C.x,C.y,C.z,C.w):ke.set(C,G,ce,te),w.viewport(U.copy(ke).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,G,ce,te){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,G,ce,te),w.scissor(se.copy(dt).multiplyScalar(de).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(C){w.setScissorTest(Wt=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ce=!0){let te=0;if(C){let ee=!1;if(q!==null){const Ie=q.texture.format;ee=S.has(Ie)}if(ee){const Ie=q.texture.type,Le=y.has(Ie),Ne=st.getClearColor(),Xe=st.getClearAlpha(),Je=Ne.r,lt=Ne.g,ut=Ne.b;Le?(R[0]=Je,R[1]=lt,R[2]=ut,R[3]=Xe,X.clearBufferuiv(X.COLOR,0,R)):(I[0]=Je,I[1]=lt,I[2]=ut,I[3]=Xe,X.clearBufferiv(X.COLOR,0,I))}else te|=X.COLOR_BUFFER_BIT}G&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),$=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),st.dispose(),De.dispose(),Ae.dispose(),ae.dispose(),Ee.dispose(),ge.dispose(),Fe.dispose(),ve.dispose(),Pe.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",al),$e.removeEventListener("sessionend",ll),Fn.stop()};function Ct(C){C.preventDefault(),Nx("WebGLRenderer: Context Lost."),z=!0}function Mt(){Nx("WebGLRenderer: Context Restored."),z=!1;const C=J.autoReset,G=nt.enabled,ce=nt.autoUpdate,te=nt.needsUpdate,ee=nt.type;Qe(),J.autoReset=C,nt.enabled=G,nt.autoUpdate=ce,nt.needsUpdate=te,nt.type=ee}function En(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ci(C){const G=C.target;G.removeEventListener("dispose",ci),rs(G)}function rs(C){Bs(C),ae.remove(C)}function Bs(C){const G=ae.get(C).programs;G!==void 0&&(G.forEach(function(ce){Pe.releaseProgram(ce)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ce,te,ee,Ie){G===null&&(G=on);const Le=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ne=$t(C,G,ce,te,ee);w.setMaterial(te,Le);let Xe=ce.index,Je=1;if(te.wireframe===!0){if(Xe=pe.getWireframeAttribute(ce),Xe===void 0)return;Je=2}const lt=ce.drawRange,ut=ce.attributes.position;let ze=lt.start*Je,xt=(lt.start+lt.count)*Je;Ie!==null&&(ze=Math.max(ze,Ie.start*Je),xt=Math.min(xt,(Ie.start+Ie.count)*Je)),Xe!==null?(ze=Math.max(ze,0),xt=Math.min(xt,Xe.count)):ut!=null&&(ze=Math.max(ze,0),xt=Math.min(xt,ut.count));const Jt=xt-ze;if(Jt<0||Jt===1/0)return;Fe.setup(ee,te,Ne,ce,Xe);let Ot,Lt=Ce;if(Xe!==null&&(Ot=be.get(Xe),Lt=me,Lt.setIndex(Ot)),ee.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*Xt()),Lt.setMode(X.LINES)):Lt.setMode(X.TRIANGLES);else if(ee.isLine){let dn=te.linewidth;dn===void 0&&(dn=1),w.setLineWidth(dn*Xt()),ee.isLineSegments?Lt.setMode(X.LINES):ee.isLineLoop?Lt.setMode(X.LINE_LOOP):Lt.setMode(X.LINE_STRIP)}else ee.isPoints?Lt.setMode(X.POINTS):ee.isSprite&&Lt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const dn=ee._multiDrawStarts,Oe=ee._multiDrawCounts,nn=ee._multiDrawCount,_t=Xe?be.get(Xe).bytesPerElement:1,Cn=ae.get(te).currentProgram.getUniforms();for(let pt=0;pt<nn;pt++)Cn.setValue(X,"_gl_DrawID",pt),Lt.render(dn[pt]/_t,Oe[pt])}else if(ee.isInstancedMesh)Lt.renderInstances(ze,Jt,ee.count);else if(ce.isInstancedBufferGeometry){const dn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Oe=Math.min(ce.instanceCount,dn);Lt.renderInstances(ze,Jt,Oe)}else Lt.render(ze,Jt)};function ss(C,G,ce,te){$!==null&&C.isNodeMaterial&&$.setObject(te,C),vt===!0&&Ze.setState(C,ce,!1),C.transparent===!0&&C.side===Er&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,ls(C,G,te),C.side=Is,C.needsUpdate=!0,ls(C,G,te),C.side=Er):ls(C,G,te)}this.compile=function(C,G,ce=null){ce===null&&(ce=C),$!==null&&$.renderStart(C,G,ce),L=Ae.get(ce),L.init(G),E.push(L),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),C!==ce&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights(),$!==null&&$.updateLights(L.state.lightsArray),It=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,It),vt===!0&&Ze.setGlobalState(this.clippingPlanes,G),$!==null&&nt.render(L.state.shadowsArray,ce,G);const te=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Le=0;Le<Ie.length;Le++){const Ne=Ie[Le];ss(Ne,ce,G,ee),te.add(Ne)}else ss(Ie,ce,G,ee),te.add(Ie)}),L=E.pop(),$!==null&&$.renderEnd(),te},this.compileAsync=function(C,G,ce=null){const te=this.compile(C,G,ce);return new Promise(ee=>{function Ie(){if(te.forEach(function(Le){const Xe=ae.get(Le).currentProgram;(Xe===void 0||Xe.isReady())&&te.delete(Le)}),te.size===0){ee(C);return}setTimeout(Ie,10)}bt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let os=null;function Iu(C){os&&os(C)}function al(){Fn.stop()}function ll(){Fn.start()}const Fn=new $S;Fn.setAnimationLoop(Iu),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(C){os=C,$e.setAnimationLoop(C),C===null?Fn.stop():Fn.start()},$e.addEventListener("sessionstart",al),$e.addEventListener("sessionend",ll),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(C,G);const ce=$e.enabled===!0&&$e.isPresenting===!0,te=N!==null&&(q===null||ce)&&N.begin(O,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(G),G=$e.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,G,q),L=Ae.get(C,E.length),L.init(G),L.state.textureUnits=he.getTextureUnits(),E.push(L),ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ft.setFromProjectionMatrix(ht,nr,G.reversedDepth),It=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,It),D=De.get(C,F.length),D.init(),F.push(D),$e.enabled===!0&&$e.isPresenting===!0){const Le=O.xr.getDepthSensingMesh();Le!==null&&zs(Le,G,-1/0,O.sortObjects)}zs(C,G,0,O.sortObjects),D.finish(),$!==null&&$.updateLights(L.state.lightsArray),O.sortObjects===!0&&D.sort(we,tt),Nt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Nt&&st.addToRenderList(D,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const ee=L.state.shadowsArray;if(nt.render(ee,C,G),vt===!0&&Ze.endShadows(),(te&&N.hasRenderPass())===!1){const Le=D.opaque,Ne=D.transmissive;if(L.setupLights(),G.isArrayCamera){const Xe=G.cameras;if(Ne.length>0)for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];cl(Le,Ne,C,ut)}Nt&&st.render(C);for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];Go(D,C,ut,ut.viewport)}}else Ne.length>0&&cl(Le,Ne,C,G),Nt&&st.render(C),Go(D,C,G)}q!==null&&ie===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),te&&N.end(O),C.isScene===!0&&C.onAfterRender(O,C,G),Fe.resetDefaultState(),Y=-1,K=null,E.pop(),E.length>0?(L=E[E.length-1],he.setTextureUnits(L.state.textureUnits),vt===!0&&Ze.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?D=F[F.length-1]:D=null,$!==null&&$.renderEnd()};function zs(C,G,ce,te){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ft)){te&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Le=ge.update(C),Ne=C.material;Ne.visible&&D.push(C,Le,Ne,ce,Zt.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ft))){const Le=ge.update(C),Ne=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Zt.copy(Le.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Ne)){const Xe=Le.groups;for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je],ze=Ne[ut.materialIndex];ze&&ze.visible&&D.push(C,Le,ze,ce,Zt.z,ut,G)}}else Ne.visible&&D.push(C,Le,Ne,ce,Zt.z,null,G)}}const Ie=C.children;for(let Le=0,Ne=Ie.length;Le<Ne;Le++)zs(Ie[Le],G,ce,te)}function Go(C,G,ce,te){const{opaque:ee,transmissive:Ie,transparent:Le}=C;L.setupLightsView(ce),vt===!0&&Ze.setGlobalState(O.clippingPlanes,ce),te&&w.viewport(U.copy(te)),ee.length>0&&as(ee,G,ce),Ie.length>0&&as(Ie,G,ce),Le.length>0&&as(Le,G,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function cl(C,G,ce,te){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const ze=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Hi(1,1,{generateMipmaps:!0,type:ze?or:yi,minFilter:Ps,samples:Math.max(4,k.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[te.id],Le=te.viewport||U;Ie.setSize(Le.z*O.transmissionResolutionScale,Le.w*O.transmissionResolutionScale);const Ne=O.getRenderTarget(),Xe=O.getActiveCubeFace(),Je=O.getActiveMipmapLevel();O.setRenderTarget(Ie),O.getClearColor(Ge),Ve=O.getClearAlpha(),Ve<1&&O.setClearColor(16777215,.5),O.clear(),Nt&&st.render(ce);const lt=O.toneMapping;O.toneMapping=rr;const ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),vt===!0&&Ze.setGlobalState(O.clippingPlanes,te),as(C,ce,te),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),bt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xt=0,Jt=G.length;xt<Jt;xt++){const Ot=G[xt],{object:Lt,geometry:dn,material:Oe,group:nn}=Ot;if(Oe.side===Er&&Lt.layers.test(te.layers)){const _t=Oe.side;Oe.side=Jn,Oe.needsUpdate=!0,Wo(Lt,ce,te,dn,Oe,nn),Oe.side=_t,Oe.needsUpdate=!0,ze=!0}}ze===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}O.setRenderTarget(Ne,Xe,Je),O.setClearColor(Ge,Ve),ut!==void 0&&(te.viewport=ut),O.toneMapping=lt}function as(C,G,ce){const te=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ie=C.length;ee<Ie;ee++){const Le=C[ee],{object:Ne,geometry:Xe,group:Je}=Le;let lt=Le.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ne.layers.test(ce.layers)&&Wo(Ne,G,ce,Xe,lt,Je)}}function Wo(C,G,ce,te,ee,Ie){$!==null&&ee.isNodeMaterial&&$.setObject(C,ee),C.onBeforeRender(O,G,ce,te,ee,Ie),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(O,G,ce,te,C,Ie),ee.transparent===!0&&ee.side===Er&&ee.forceSinglePass===!1?(ee.side=Jn,ee.needsUpdate=!0,O.renderBufferDirect(ce,G,te,ee,C,Ie),ee.side=Is,ee.needsUpdate=!0,O.renderBufferDirect(ce,G,te,ee,C,Ie),ee.side=Er):O.renderBufferDirect(ce,G,te,ee,C,Ie),C.onAfterRender(O,G,ce,te,ee,Ie)}function ls(C,G,ce){G.isScene!==!0&&(G=on);const te=ae.get(C),ee=L.state.lights,Ie=L.state.shadowsArray,Le=ee.state.version,Ne=Pe.getParameters(C,ee.state,Ie,G,ce,L.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ne);let Je=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=Ee.get(C.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",ci),Je=new Map,te.programs=Je);let ut=Je.get(Xe);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===Le)return ul(C,Ne),ut}else Ne.uniforms=Pe.getUniforms(C),$!==null&&C.isNodeMaterial&&$.build(C,ce,Ne),C.onBeforeCompile(Ne,O),ut=Pe.acquireProgram(Ne,Xe),Je.set(Xe,ut),te.uniforms=Ne.uniforms;const ze=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=Ze.uniform),ul(C,Ne),te.needsLights=jo(C),te.lightsStateVersion=Le,te.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.sunLights.value=ee.state.sun,ze.sunLightShadows.value=ee.state.sunShadow,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.sunShadowMatrix.value=ee.state.sunShadowMatrix,ze.sunShadowCascade.value=ee.state.sunShadowCascade,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ut,te.uniformsList=null,ut}function Xo(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=tu.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ul(C,G){const ce=ae.get(C);ce.outputColorSpace=G.outputColorSpace,ce.batching=G.batching,ce.batchingColor=G.batchingColor,ce.instancing=G.instancing,ce.instancingColor=G.instancingColor,ce.instancingMorph=G.instancingMorph,ce.skinning=G.skinning,ce.morphTargets=G.morphTargets,ce.morphNormals=G.morphNormals,ce.morphColors=G.morphColors,ce.morphTargetsCount=G.morphTargetsCount,ce.numClippingPlanes=G.numClippingPlanes,ce.numIntersection=G.numClipIntersection,ce.vertexAlphas=G.vertexAlphas,ce.vertexTangents=G.vertexTangents,ce.toneMapping=G.toneMapping}function Uu(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;T.setFromMatrixPosition(G.matrixWorld);for(let ce=0,te=C.length;ce<te;ce++){const ee=C[ce];if(ee.texture!==null&&ee.boundingBox.containsPoint(T))return ee}return null}function $t(C,G,ce,te,ee){G.isScene!==!0&&(G=on),he.resetTextureUnits();const Ie=G.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,Ne=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:yt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Je=Ee.get(te.envMap||Le,Xe),lt=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!ce.morphAttributes.position,xt=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ot=rr;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ot=O.toneMapping);const Lt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,dn=Lt!==void 0?Lt.length:0,Oe=ae.get(te),nn=L.state.lights;if(vt===!0&&(It===!0||C!==K)){const Ut=C===K&&te.id===Y;Ze.setState(te,C,Ut)}let _t=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==nn.state.version||Oe.outputColorSpace!==Ne||ee.isBatchedMesh&&Oe.batching===!1||!ee.isBatchedMesh&&Oe.batching===!0||ee.isBatchedMesh&&Oe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Oe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||ee.isInstancedMesh&&Oe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Oe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Oe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Oe.instancingMorph===!1&&ee.morphTexture!==null||Oe.envMap!==Je||te.fog===!0&&Oe.fog!==Ie||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ze.numPlanes||Oe.numIntersection!==Ze.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==ut||Oe.morphTargets!==ze||Oe.morphNormals!==xt||Oe.morphColors!==Jt||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==dn||!!Oe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Oe.__version=te.version);let Cn=Oe.currentProgram;_t===!0&&(Cn=ls(te,G,ee),$&&te.isNodeMaterial&&$.onUpdateProgram(te,Cn,Oe));let pt=!1,Ei=!1,lr=!1;const Rt=Cn.getUniforms(),jt=Oe.uniforms;if(w.useProgram(Cn.program)&&(pt=!0,Ei=!0,lr=!0),te.id!==Y&&(Y=te.id,Ei=!0),Oe.needsLights){const Ut=Uu(L.state.lightProbeGridArray,ee);Oe.lightProbeGrid!==Ut&&(Oe.lightProbeGrid=Ut,Ei=!0)}if(pt||K!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(X,"projectionMatrix",C.projectionMatrix),Rt.setValue(X,"viewMatrix",C.matrixWorldInverse);const ui=Rt.map.cameraPosition;ui!==void 0&&ui.setValue(X,kt.setFromMatrixPosition(C.matrixWorld)),k.logarithmicDepthBuffer&&Rt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,Ei=!0,lr=!0)}if(Oe.needsLights&&(nn.state.sunShadowMap.length>0&&Rt.setValue(X,"sunShadowMap",nn.state.sunShadowMap,he),nn.state.directionalShadowMap.length>0&&Rt.setValue(X,"directionalShadowMap",nn.state.directionalShadowMap,he),nn.state.spotShadowMap.length>0&&Rt.setValue(X,"spotShadowMap",nn.state.spotShadowMap,he),nn.state.pointShadowMap.length>0&&Rt.setValue(X,"pointShadowMap",nn.state.pointShadowMap,he)),ee.isSkinnedMesh){Rt.setOptional(X,ee,"bindMatrix"),Rt.setOptional(X,ee,"bindMatrixInverse");const Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Rt.setValue(X,"boneTexture",Ut.boneTexture,he))}ee.isBatchedMesh&&(Rt.setOptional(X,ee,"batchingTexture"),Rt.setValue(X,"batchingTexture",ee._matricesTexture,he),Rt.setOptional(X,ee,"batchingIdTexture"),Rt.setValue(X,"batchingIdTexture",ee._indirectTexture,he),Rt.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Rt.setValue(X,"batchingColorTexture",ee._colorsTexture,he));const wi=ce.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&H.update(ee,ce,Cn),(Ei||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,Rt.setValue(X,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=UL()),Ei){if(Rt.setValue(X,"toneMappingExposure",O.toneMappingExposure),Oe.needsLights&&Fu(jt,lr),Ie&&te.fog===!0&&Ke.refreshFogUniforms(jt,Ie),Ke.refreshMaterialUniforms(jt,te,de,le,L.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.lightProbeGrid){const Ut=Oe.lightProbeGrid;jt.probesSH.value=Ut.texture,jt.probesMin.value.copy(Ut.boundingBox.min),jt.probesMax.value.copy(Ut.boundingBox.max),jt.probesResolution.value.copy(Ut.resolution)}tu.upload(X,Xo(Oe),jt,he)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(tu.upload(X,Xo(Oe),jt,he),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(X,"center",ee.center),Rt.setValue(X,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(X,"normalMatrix",ee.normalMatrix),Rt.setValue(X,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let ui=0,Ti=Ut.length;ui<Ti;ui++){const Ai=Ut[ui];ve.update(Ai,Cn),ve.bind(Ai,Cn)}}return Cn}function Fu(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function jo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,G,ce){const te=ae.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ae.get(C.texture).__webglTexture=G,ae.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ce,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const ce=ae.get(C);ce.__webglFramebuffer=G,ce.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ce=0){q=C,fe=G,ie=ce;let te=null,ee=!1,Ie=!1;if(C){const Ne=ae.get(C);if(Ne.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Ne.__webglFramebuffer),U.copy(C.viewport),se.copy(C.scissor),Se=C.scissorTest,w.viewport(U),w.scissor(se),w.setScissorTest(Se),Y=-1;return}else if(Ne.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Ne.__hasExternalTextures)he.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ne.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Je=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?te=Je[G][ce]:te=Je[G],ee=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?te=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?te=Je[ce]:te=Je,U.copy(C.viewport),se.copy(C.scissor),Se=C.scissorTest}else U.copy(ke).multiplyScalar(de).floor(),se.copy(dt).multiplyScalar(de).floor(),Se=Wt;if(ce!==0&&(te=Z),w.bindFramebuffer(X.FRAMEBUFFER,te)&&w.drawBuffers(C,te),w.viewport(U),w.scissor(se),w.setScissorTest(Se),ee){const Ne=ae.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,ce)}else if(Ie){const Ne=G;for(let Xe=0;Xe<C.textures.length;Xe++){const Je=ae.get(C.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,ce,Ne)}}else if(C!==null&&ce!==0){const Ne=ae.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ne.__webglTexture,ce)}Y=-1};function Yo(C){const G=ae.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=k.textureFormatReadable(C.format),G.__typeReadable=k.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,ce,te,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe){w.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Je=C.textures[Ne],lt=Je.format,ut=Je.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const ze=Yo(Je);if(ze.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-te&&ce>=0&&ce<=C.height-ee&&X.readPixels(G,ce,te,ee,Re.convert(lt),Re.convert(ut),Ie)}finally{const Je=q!==null?ae.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,G,ce,te,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe)if(G>=0&&G<=C.width-te&&ce>=0&&ce<=C.height-ee){w.bindFramebuffer(X.FRAMEBUFFER,Xe);const Je=C.textures[Ne],lt=Je.format,ut=Je.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const ze=Yo(Je);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.bufferData(X.PIXEL_PACK_BUFFER,Ie.byteLength,X.STREAM_READ),X.readPixels(G,ce,te,ee,Re.convert(lt),Re.convert(ut),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Jt=q!==null?ae.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Jt);const Ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tR(X,Ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ie),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(xt),X.deleteSync(Ot),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ce=0){const te=Math.pow(2,-ce),ee=Math.floor(C.image.width*te),Ie=Math.floor(C.image.height*te),Le=G!==null?G.x:0,Ne=G!==null?G.y:0;he.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Le,Ne,ee,Ie),w.unbindTexture()},this.copyTextureToTexture=function(C,G,ce=null,te=null,ee=0,Ie=0){let Le,Ne,Xe,Je,lt,ut,ze,xt,Jt;const Ot=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ce!==null)Le=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,lt=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-ee);Le=Math.floor(Ot.width*jt),Ne=Math.floor(Ot.height*jt),C.isDataArrayTexture?Xe=Ot.depth:C.isData3DTexture?Xe=Math.floor(Ot.depth*jt):Xe=1,Je=0,lt=0,ut=0}te!==null?(ze=te.x,xt=te.y,Jt=te.z):(ze=0,xt=0,Jt=0);const Lt=Re.convert(G.format),dn=Re.convert(G.type);let Oe;G.isData3DTexture?(he.setTexture3D(G,0),Oe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(he.setTexture2DArray(G,0),Oe=X.TEXTURE_2D_ARRAY):(he.setTexture2D(G,0),Oe=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const nn=w.getParameter(X.UNPACK_ROW_LENGTH),_t=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Cn=w.getParameter(X.UNPACK_SKIP_PIXELS),pt=w.getParameter(X.UNPACK_SKIP_ROWS),Ei=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(X.UNPACK_SKIP_ROWS,lt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const lr=C.isDataArrayTexture||C.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const jt=ae.get(C),wi=ae.get(G),Ut=ae.get(jt.__renderTarget),ui=ae.get(wi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Ut.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ti=0;Ti<Xe;Ti++)lr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(C).__webglTexture,ee,ut+Ti),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(G).__webglTexture,Ie,Jt+Ti)),X.blitFramebuffer(Je,lt,Le,Ne,ze,xt,Le,Ne,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||ae.has(C)){const jt=ae.get(C),wi=ae.get(G);w.bindFramebuffer(X.READ_FRAMEBUFFER,W),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Q);for(let Ut=0;Ut<Xe;Ut++)lr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.__webglTexture,ee,ut+Ut):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,jt.__webglTexture,ee),Rt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wi.__webglTexture,Ie,Jt+Ut):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wi.__webglTexture,Ie),ee!==0?X.blitFramebuffer(Je,lt,Le,Ne,ze,xt,Le,Ne,X.COLOR_BUFFER_BIT,X.NEAREST):Rt?X.copyTexSubImage3D(Oe,Ie,ze,xt,Jt+Ut,Je,lt,Le,Ne):X.copyTexSubImage2D(Oe,Ie,ze,xt,Je,lt,Le,Ne);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,dn,Ot.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,Ot.data):X.texSubImage3D(Oe,Ie,ze,xt,Jt,Le,Ne,Xe,Lt,dn,Ot):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Le,Ne,Lt,dn,Ot.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Ot.width,Ot.height,Lt,Ot.data):X.texSubImage2D(X.TEXTURE_2D,Ie,ze,xt,Le,Ne,Lt,dn,Ot);w.pixelStorei(X.UNPACK_ROW_LENGTH,nn),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_t),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Cn),w.pixelStorei(X.UNPACK_SKIP_ROWS,pt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Ei),Ie===0&&G.generateMipmaps&&X.generateMipmap(Oe),w.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){fe=0,ie=0,q=null,w.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const kL=()=>{const n=xe.useRef(null);return xe.useEffect(()=>{const e=n.current;if(!e)return;let t=null,r=null,o=null,a=null,c=null,u=null,f=null,h=null;try{const p=new vR,v=new _i(60,(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),.1,1e3);v.position.z=25,t=new FL({alpha:!0,antialias:!0,powerPreference:"high-performance"}),t.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(t.domElement);const m=200;o=new li;const _=new Float32Array(m*3),M=new Float32Array(m*3),A=new Et(11927720),S=new Et(7741872),y=new Et(3718648);for(let Z=0;Z<m;Z++){_[Z*3]=(Math.random()-.5)*50,_[Z*3+1]=(Math.random()-.5)*35,_[Z*3+2]=(Math.random()-.5)*30;const W=Z%3===0?A:Z%3===1?S:y;M[Z*3]=W.r,M[Z*3+1]=W.g,M[Z*3+2]=W.b}o.setAttribute("position",new Gi(_,3)),o.setAttribute("color",new Gi(M,3)),a=new HS({size:.28,vertexColors:!0,transparent:!0,opacity:.65,blending:Vh});const R=new bR(o,a);p.add(R),c=new Mm(8,.08,16,100),u=new _u({color:7741872,wireframe:!0,transparent:!0,opacity:.35});const I=new Xi(c,u);I.rotation.x=Math.PI/3,p.add(I),f=new Sm(5,1),h=new _u({color:11927720,wireframe:!0,transparent:!0,opacity:.2});const T=new Xi(f,h);p.add(T);let D=0,L=0,F=0,E=0;const N=Z=>{F=(Z.clientX/window.innerWidth-.5)*2,E=(Z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",N,{passive:!0});const O=()=>{!e||!t||(v.aspect=(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),v.updateProjectionMatrix(),t.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight))};window.addEventListener("resize",O);const z=new OR,$=()=>{r=requestAnimationFrame($);const Z=z.getElapsedTime();D+=(F-D)*.05,L+=(E-L)*.05,R.rotation.y=Z*.04+D*.2,R.rotation.x=Z*.02-L*.2,I.rotation.z=Z*.15,I.rotation.y=D*.4,I.rotation.x=Math.PI/3+L*.3,T.rotation.y=-Z*.1+D*.3,T.rotation.x=Z*.08-L*.3,v.position.x=D*2,v.position.y=-L*2,v.lookAt(p.position),t&&t.render(p,v)};return $(),()=>{if(r&&cancelAnimationFrame(r),window.removeEventListener("mousemove",N),window.removeEventListener("resize",O),e&&t&&t.domElement)try{e.removeChild(t.domElement)}catch{}o==null||o.dispose(),a==null||a.dispose(),c==null||c.dispose(),u==null||u.dispose(),f==null||f.dispose(),h==null||h.dispose(),t==null||t.dispose()}}catch(p){console.warn("Three.js WebGL not available or initialization skipped:",p)}},[]),P.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80",style:{willChange:"transform"}})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nM=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=xe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...u},f)=>xe.createElement("svg",{ref:f,...BL,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:nM("lucide",o),...u},[...c.map(([h,p])=>xe.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(n,e)=>{const t=xe.forwardRef(({className:r,...o},a)=>xe.createElement(zL,{ref:a,iconNode:e,className:nM(`lucide-${OL(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
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
 */const oN=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],aN=Vt("Cpu",oN);/**
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
 */const dN=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],fN=Vt("GraduationCap",dN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],sM=Vt("Linkedin",hN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],oM=Vt("Mail",pN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Em=Vt("MapPin",mN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],aM=Vt("Phone",gN);/**
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
 */const bN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],CN=Vt("X",bN),RN={waving:{src:"./anil_waving.jpg",title:"El Sallayan 3D Anıl",label:"👋 El Sallayan 3D",bubble:"Selam! Hoş geldin, Ben Anıl",badgeIcon:"👋"},studio:{src:"./anil_avatar.jpg",title:"Siber Stüdyo Portresi",label:"⚡ Siber Stüdyo 3D",bubble:"Anıl Mete • Full-Stack & 3D",badgeIcon:"⚡"}},PN=({currentModel:n,onSelectModel:e})=>{const t=xe.useRef(null),r=xe.useRef(null),o=xe.useRef(null),[a,c]=xe.useState(!1),u=xe.useRef({x:0,y:0,targetX:0,targetY:0}),f=xe.useRef(null),h=xe.useCallback(()=>{const{x:M,y:A,targetX:S,targetY:y}=u.current,R=M+(S-M)*.12,I=A+(y-A)*.12;if(u.current.x=R,u.current.y=I,r.current&&(r.current.style.transform=`perspective(1000px) rotateX(${R}deg) rotateY(${I}deg) scale3d(1.02, 1.02, 1.02)`),o.current){const T=50+I*3,D=50-R*3;o.current.style.background=`radial-gradient(circle at ${T}% ${D}%, rgba(255,255,255,0.3) 0%, rgba(182,0,168,0.2) 30%, transparent 70%)`}f.current=requestAnimationFrame(h)},[]);xe.useEffect(()=>(f.current=requestAnimationFrame(h),()=>{f.current&&cancelAnimationFrame(f.current)}),[h]);const p=M=>{if(!t.current)return;const A=t.current.getBoundingClientRect(),S=A.left+A.width/2,y=A.top+A.height/2,R=M.clientX-S,I=M.clientY-y,T=R/(A.width/2)*14,D=-(I/(A.height/2))*14;u.current.targetX=D,u.current.targetY=T},v=()=>c(!0),m=()=>{c(!1),u.current.targetX=0,u.current.targetY=0},_=RN[n];return P.jsxs("div",{ref:t,onMouseMove:p,onMouseEnter:v,onMouseLeave:m,className:"relative flex flex-col items-center select-none z-30",style:{perspective:1200},children:[P.jsxs(mn.div,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.3},className:"mb-2 z-40 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16181D]/90 border border-[#B600A8]/60 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-md",children:[P.jsx("span",{className:"text-base animate-bounce",children:_.badgeIcon}),P.jsx("span",{className:"bg-gradient-to-r from-white via-[#D7E2EA] to-[#B600A8] bg-clip-text text-transparent",children:_.bubble})]},`bubble-${n}`),P.jsxs("div",{ref:r,onClick:()=>e(n==="waving"?"studio":"waving"),className:"relative rounded-3xl overflow-visible transition-shadow duration-300 cursor-pointer group",title:"Diğer 3D modele geçmek için tıkla",style:{transformStyle:"preserve-3d",willChange:"transform"},children:[P.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/30 to-[#38bdf8]/20 rounded-full blur-2xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity"}),P.jsx("div",{ref:o,className:"absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-overlay transition-opacity duration-300",style:{opacity:a?1:.45}}),P.jsxs("div",{className:"absolute top-8 -left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-purple-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:a?"translateZ(45px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(lM,{className:"w-3.5 h-3.5 text-purple-400"}),P.jsx("span",{children:"Flutter & Mobil"})]}),P.jsxs("div",{className:"absolute top-12 -right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-cyan-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:a?"translateZ(50px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(aN,{className:"w-3.5 h-3.5 text-cyan-400"}),P.jsx("span",{children:"PyTorch AI"})]}),P.jsxs("div",{className:"absolute bottom-8 -right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-[#B600A8]/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:a?"translateZ(40px) scale(1.05)":"translateZ(15px)"},children:[P.jsx(AN,{className:"w-3.5 h-3.5 text-pink-400"}),P.jsx("span",{children:"ASP.NET Core"})]}),P.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0C] shadow-2xl",children:[P.jsx(sm,{mode:"wait",children:P.jsx(mn.img,{src:_.src,alt:_.title,initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:{duration:.3},className:"w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] xl:w-[400px] max-h-[50vh] sm:max-h-[54vh] object-cover pointer-events-none drop-shadow-[0_25px_60px_rgba(182,0,168,0.35)]"},n)}),P.jsx("div",{className:"absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none"})]})]}),P.jsxs("div",{className:"mt-4 p-1.5 rounded-full bg-[#121316]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-1 z-50 pointer-events-auto",children:[P.jsxs("button",{onClick:M=>{M.stopPropagation(),e("waving")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${n==="waving"?"bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"👋 El Sallayan"}),n==="waving"&&P.jsx(yu,{className:"w-3.5 h-3.5"})]}),P.jsxs("button",{onClick:M=>{M.stopPropagation(),e("studio")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${n==="studio"?"bg-gradient-to-r from-[#7621B0] to-cyan-600 text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"⚡ Stüdyo Modu"}),n==="studio"&&P.jsx(yu,{className:"w-3.5 h-3.5"})]})]})]})},DN=({onOpenContact:n})=>{const[e,t]=xe.useState("waving"),r=o=>{const a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"})};return P.jsxs("section",{className:"relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none",children:[P.jsx(kL,{}),P.jsxs(mn.nav,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.7,delay:0,ease:[.25,.1,.25,1]},className:"w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30 relative",children:[P.jsx("button",{onClick:()=>r("about"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hakkımda"}),P.jsx("button",{onClick:()=>r("services"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hizmetler"}),P.jsx("button",{onClick:()=>r("projects"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Projeler"}),P.jsx("button",{onClick:()=>r("experience"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer hidden sm:block",children:"Deneyim"}),P.jsx("button",{onClick:n,className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"İletişim"})]}),P.jsx("div",{className:"w-full overflow-hidden text-center z-0 pointer-events-none px-4 mt-2 sm:mt-4 md:mt-6 mb-auto pt-1 sm:pt-3",children:P.jsx(mn.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.15,ease:[.25,.1,.25,1]},className:"hero-heading font-black uppercase tracking-tight leading-tight w-full max-w-7xl mx-auto select-none drop-shadow-xl text-[7.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[9.5vw]",children:"SELAM, BEN ANIL"})}),P.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 z-30 bottom-2 sm:bottom-4 md:bottom-5 pointer-events-auto",children:P.jsx(mn.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},children:P.jsx(PN,{currentModel:e,onSelectModel:o=>t(o)})})}),P.jsxs("div",{className:"w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 relative pointer-events-none",children:[P.jsxs(mn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},className:"w-auto max-w-[210px] sm:max-w-[240px] md:max-w-[260px] p-3 sm:p-3.5 rounded-2xl bg-[#121316]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2 pointer-events-auto",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"relative flex h-2.5 w-2.5 flex-shrink-0",children:[P.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),P.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),P.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap",children:"Yeni Projelere Açık"})]}),P.jsxs("p",{className:"text-[11px] sm:text-xs text-[#D7E2EA] font-light leading-snug",children:["Yüksek performanslı ",P.jsx("strong",{className:"font-semibold text-white",children:"mobil"}),", ",P.jsx("strong",{className:"font-semibold text-white",children:"AI"})," ve ",P.jsx("strong",{className:"font-semibold text-white",children:"full-stack"})," sistemler."]}),P.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#D7E2EA]/60 pt-1.5 border-t border-white/5 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1 text-[#D7E2EA]/70",children:[P.jsx(Em,{className:"w-3 h-3 text-[#B600A8]"})," Mersin, TR"]}),P.jsx("span",{className:"text-cyan-400 font-semibold",children:"Flutter • AI"})]})]}),P.jsx(mn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5,ease:[.25,.1,.25,1]},className:"self-end pointer-events-auto",children:P.jsx(mS,{label:"İletişime Geç",onClick:n})})]})]})},fh=[{src:"https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",tag:"3D Web & Uzay",title:"Space Voyage"},{src:"https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",tag:"Full-Stack Kodlama",title:"CodeNest Cloud"},{src:"https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",tag:"Fintech & Dashboard",title:"Vex Ventures"},{src:"https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",tag:"Yapay Zeka & PyTorch",title:"Stellar AI Engine"},{src:"https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",tag:"Mobil Arayüz",title:"ASME Platform"},{src:"https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",tag:"Veri Analizi",title:"Data Transformer"},{src:"https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",tag:"3D Etkileşim",title:"Vitara Studio"},{src:"https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",tag:"Modern Web",title:"Terra Experience"}],hh=[{src:"https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",tag:"Mobil Sağlık",title:"SemptomAI Health"},{src:"https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",tag:"Bulut Mimarisi",title:"BirEmek Cloud"},{src:"https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",tag:"RESTful API",title:"NotTrack Architecture"},{src:"https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",tag:"Klinik Teşhis",title:"Klinik Karar Destek"},{src:"https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",tag:"3D Simülasyon",title:"Orbit 3D System"},{src:"https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",tag:"Yüksek Performans",title:"Luminex Core"},{src:"https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",tag:"Mobil Deneyim",title:"Celestia Mobile"}],LN=()=>P.jsxs("section",{className:"relative w-full overflow-hidden bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12",children:[P.jsx("div",{className:"absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsx("div",{className:"absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsxs("div",{className:"flex flex-col gap-4",children:[P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused]",children:[...fh,...fh,...fh].map((n,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:n.src,alt:n.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#B600A8]",children:n.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:n.title})]})]},`row1-${e}`))})}),P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused]",children:[...hh,...hh,...hh].map((n,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:n.src,alt:n.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-cyan-400",children:n.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:n.title})]})]},`row2-${e}`))})})]})]}),oi=({children:n,delay:e=0,duration:t=.7,x:r=0,y:o=30,className:a="",as:c="div"})=>{const u=mn[c]||mn.div;return P.jsx(u,{initial:{opacity:0,x:r,y:o},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"50px",amount:0},transition:{duration:t,delay:e,ease:[.25,.1,.25,1]},className:a,children:n})},NN=({word:n,progress:e,range:t})=>{const r=cm(e,t,[.2,1]);return P.jsxs("span",{className:"relative inline-block mx-1",children:[P.jsx("span",{className:"invisible",children:n}),P.jsx(mn.span,{style:{opacity:r},className:"absolute left-0 top-0 select-none text-[#D7E2EA]",children:n})]})},IN=({text:n,className:e=""})=>{const t=xe.useRef(null),{scrollYProgress:r}=hS({target:t,offset:["start 0.85","end 0.35"]}),o=n.split(" ");return P.jsx("p",{ref:t,className:`flex flex-wrap justify-center leading-relaxed ${e}`,children:o.map((a,c)=>{const u=c/o.length,f=Math.min(1,u+1/o.length);return P.jsx(NN,{word:a,progress:r,range:[u,f]},c)})})},UN=({onOpenContact:n})=>P.jsxs("section",{id:"about",className:"relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden",children:[P.jsx("div",{className:"absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0",children:P.jsx(oi,{delay:.1,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",alt:"3D Ay İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d"})})}),P.jsx("div",{className:"absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0",children:P.jsx(oi,{delay:.25,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",alt:"3D Dekoratif Obje",className:"w-[100px] sm:w-[140px] md:w-[180px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"1.5s"}})})}),P.jsx("div",{className:"absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0",children:P.jsx(oi,{delay:.15,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",alt:"3D Lego İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"2.5s"}})})}),P.jsx("div",{className:"absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0",children:P.jsx(oi,{delay:.3,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",alt:"3D Grup İkonu",className:"w-[130px] sm:w-[170px] md:w-[220px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"3.5s"}})})}),P.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-4xl text-center",children:[P.jsx(oi,{delay:0,y:40,duration:.7,children:P.jsx("h2",{className:"hero-heading font-black uppercase leading-none tracking-tight select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"HAKKIMDA"})}),P.jsx("div",{className:"h-10 sm:h-14 md:h-16"}),P.jsx("div",{className:"max-w-[700px] px-3 sm:px-6",children:P.jsx(IN,{text:"Mersin Üniversitesi Bilgisayar Mühendisliği öğrencisi ve üretime hazır sistemler kuran full-stack & mobil geliştiriciyim. BirEmek uygulamasını tek mühendis olarak sıfırdan mimarilendirip App Store ve Google Play yayın süreçlerini başarıyla tamamlamaktan, TÜBİTAK onaylı klinik karar destek yapay zeka sistemlerine ve yüksek performanslı ASP.NET Core API'lerine kadar uçtan uca mimariler kuruyorum. Kotlin, Flutter, PyTorch ve temiz kod prensipleriyle kullanıcı odaklı sistemler tasarlıyorum. Birlikte sıra dışı projeler inşa edelim!",className:"font-medium text-center leading-relaxed text-[#D7E2EA] text-base sm:text-lg md:text-xl"})}),P.jsx("div",{className:"h-14 sm:h-18 md:h-20"}),P.jsx(oi,{delay:.2,y:20,children:P.jsx(mS,{label:"İletişime Geç",onClick:n})})]})]}),FN=[{number:"01",title:"Mobil Uygulama Mühendisliği",tagline:"Flutter & Kotlin • App Store & Play Store",description:"Fikir aşamasından market yayın onayına kadar uçtan uca modern mobil mimariler. Özel reaktif arayüz bileşenleri, kararlı veri akışı ve sıfır çökme (crash-free) garantisiyle yüksek performanslı uygulamalar.",icon:lM,accentColor:"#B600A8",gradientText:"from-[#18011F] via-[#B600A8] to-[#7621B0]",deliverables:["App Store Connect & Google Play Console Uçtan Uca Yayın Yönetimi","Flutter & Dart ile Çift Platform (iOS & Android) Tek Kod Tabanı","Kotlin & Jetpack Compose ile Özel Android Arayüz (UI) Mimarisi"],techStack:["Flutter","Kotlin","Jetpack Compose","MVVM","Firebase","REST API"]},{number:"02",title:"Full-Stack & Backend Mimarisi",tagline:"ASP.NET Core • Katmanlı Mimari • Güvenli API",description:"Yüksek ölçekli ve kurumsal standartlarda backend servisleri. Katmanlı mimari desenleri, JWT tabanlı sıkı kimlik doğrulama, Swagger UI dokümantasyonu ve optimize edilmiş ilişkisel veritabanları.",icon:yN,accentColor:"#7621B0",gradientText:"from-[#7621B0] via-[#5B108B] to-[#3B0759]",deliverables:["ASP.NET Core & Entity Framework Core ile Katmanlı RESTful Servisler","JWT Kimlik Doğrulama & Rol Tabanlı Güvenlik Protokolleri","SQL Server & Firebase Gerçek Zamanlı Veritabanı Senkronizasyonu"],techStack:["ASP.NET Core","EF Core","C#","SQL Server","JWT Auth","Swagger UI"]},{number:"03",title:"Yapay Zeka & Sağlık Teknolojileri",tagline:"PyTorch • Derin Öğrenme • Çıkarım Motorları",description:"Python ve PyTorch kullanarak eğitilmiş derin öğrenme modellerinin backend API altyapılarına kesintisiz entegrasyonu. Gerçek zamanlı semptom analiz algoritmaları ve klinik karar destek sistemleri.",icon:KL,accentColor:"#0284C7",gradientText:"from-[#0369A1] via-[#0284C7] to-[#38BDF8]",deliverables:["PyTorch Derin Öğrenme Modelleri ve Yüksek Hızlı Çıkarım Motorları (Inference)","Gerçek Zamanlı Semptom ve Sağlık Verisi Analiz Algoritmaları","Python Yapay Zeka Servislerinin ASP.NET Core Backend ile Kesintisiz İletişimi"],techStack:["Python","PyTorch","Derin Öğrenme","Sağlık Teknolojileri","Veri Analizi"]},{number:"04",title:"3D & Etkileşimli Arayüz Tasarımı",tagline:"Three.js • WebGL • Mikro Etkileşimler",description:"Ziyaretçiyi ilk saniyede etkileyen dinamik 3D web sahneleri, parçacık alanları ve fizik tabanlı mikro etkileşimler. Figma tasarımlarını piksel hassasiyetinde, 60–120 FPS akıcılığında koda dökme.",icon:$L,accentColor:"#9333EA",gradientText:"from-[#9333EA] via-[#A855F7] to-[#C084FC]",deliverables:["Three.js ve WebGL ile Donanım Hızlandırmalı 3D Web Deneyimleri","Framer Motion ile Fizik Tabanlı Akıcı Mikro Animasyonlar","Figma Tasarımlarından Dönüşüm Odaklı ve Mobil Uyumlu UI Geliştirme"],techStack:["Three.js","WebGL","Framer Motion","Tailwind CSS","TypeScript"]},{number:"05",title:"Sistem Optimizasyonu & Temiz Mimari",tagline:"SOLID • Sıfır Çökme • Profiling",description:"Karmaşık kod tabanlarını basitleştirme, performans darboğazlarını giderme ve çökme analizi. Sürdürülebilir, test edilebilir ve SOLID prensiplerine tam uyumlu mühendislik çözümleri.",icon:MN,accentColor:"#059669",gradientText:"from-[#065F46] via-[#059669] to-[#10B981]",deliverables:["SOLID ve Clean Architecture Prensiplerine Dayalı Sürdürülebilir Kod","Kritik Çökme (Crash) Hatalarının Tespiti ve Performans Profiling","Uçtan Uca Test Süreçleri ve Sıfır Hata Odaklı Üretim Dağıtımı"],techStack:["Clean Architecture","SOLID","Postman","Git / GitHub","Profiling"]}],kN=()=>{const[n,e]=xe.useState(null);return P.jsx("section",{id:"services",className:"relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 z-0 shadow-2xl",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-16 sm:space-y-24",children:[P.jsx(oi,{delay:0,y:40,children:P.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]",children:[P.jsx(cM,{className:"w-3.5 h-3.5 text-[#B600A8]"}),P.jsx("span",{children:"Mühendislik & Tasarım Çözümleri"})]}),P.jsx("h2",{className:"text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight select-none",style:{fontSize:"clamp(2.8rem, 10vw, 150px)"},children:"HİZMETLER"}),P.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-[#0C0C0C]/70 font-light leading-relaxed",children:"Mobil uygulamalardan kurumsal API mimarilerine, yapay zeka modellerinden etkileşimli 3D web deneyimlerine kadar uçtan uca sunduğum uzmanlık alanları."})]})}),P.jsx("div",{className:"flex flex-col gap-6 sm:gap-8",children:FN.map((t,r)=>{const o=t.icon,a=n===r;return P.jsx(oi,{delay:r*.08,y:30,children:P.jsxs("div",{onMouseEnter:()=>e(r),onMouseLeave:()=>e(null),className:`group relative p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] border transition-all duration-500 cursor-pointer overflow-hidden ${a?"bg-gradient-to-br from-white via-[#FAF5FF] to-[#F3F4F6] border-purple-300 shadow-2xl -translate-y-1.5":"bg-[#F9FAFB] border-black/10 hover:border-black/20 shadow-sm"}`,children:[P.jsx("div",{className:`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${a?"opacity-30":"opacity-0"}`,style:{backgroundColor:t.accentColor}}),P.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8",children:[P.jsxs("div",{className:"flex items-center lg:flex-col lg:items-start justify-between lg:justify-start gap-4 lg:w-1/4",children:[P.jsx("div",{className:"flex items-baseline gap-3",children:P.jsx("span",{className:`font-black tracking-tight leading-none transition-all duration-300 select-none ${a?`bg-gradient-to-r ${t.gradientText} bg-clip-text text-transparent scale-105`:"text-[#0C0C0C]"}`,style:{fontSize:"clamp(3rem, 7vw, 110px)"},children:t.number})}),P.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110",style:{backgroundColor:a?t.accentColor:"#0C0C0C",color:"#FFFFFF"},children:P.jsx(o,{className:"w-7 h-7"})})]}),P.jsxs("div",{className:"flex-1 space-y-5",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-[#B600A8]",children:t.tagline}),P.jsx("h3",{className:"text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0C0C0C] tracking-tight mt-1",children:t.title})]}),P.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#0C0C0C]/75 font-light leading-relaxed max-w-3xl",children:t.description}),P.jsxs("div",{className:"space-y-2.5 pt-2 border-t border-black/10",children:[P.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-[#0C0C0C]/60",children:"Öne Çıkan Teslimatlar & Standartlar:"}),P.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.deliverables.map((c,u)=>P.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0C0C0C]/85 leading-snug",children:[P.jsx(iM,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{color:t.accentColor}}),P.jsx("span",{children:c})]},u))})]}),P.jsx("div",{className:"flex flex-wrap items-center gap-2 pt-3",children:t.techStack.map(c=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-black/[0.05] border border-black/10 text-xs font-semibold text-[#0C0C0C] transition-colors group-hover:bg-white group-hover:border-black/20",children:c},c))})]}),P.jsx("div",{className:"hidden lg:flex items-center justify-end pl-4",children:P.jsx("div",{className:`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${a?"bg-[#0C0C0C] text-white border-[#0C0C0C] rotate-45 scale-110 shadow-lg":"border-black/20 text-[#0C0C0C]"}`,children:P.jsx(WL,{className:"w-5 h-5"})})})]})]})},t.number)})})]})})},ON=({href:n,onClick:e,className:t="",label:r="Live Project"})=>{const o=P.jsxs(P.Fragment,{children:[P.jsx("span",{children:r}),P.jsx(cN,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),a=`group inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer ${t}`;return n?P.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:a,children:o}):P.jsx("button",{onClick:e,type:"button",className:a,children:o})},Hc=[{number:"01",title:"BirEmek Mobil Uygulaması",category:"Üretim Seviyesi / Tek Mühendis Olarak Uçtan Uca",badge:"App Store & Google Play • Flutter & Cloud Backend",description:"Backend, frontend ve sunucu altyapısı dahil olmak üzere tek başıma tasarlayıp geliştirdiğim ve hem App Store hem Google Play mağazalarında başarıyla yayınladığım canlı mobil iş ve istihdam platformu.",col1Img1:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",col2Img:"./biremek_mockup.jpg",link:"https://github.com/anilmetey"},{number:"02",title:"Klinik Karar Destek Asistanı",category:"TÜBİTAK Teknoloji Yarışması Başarısı",badge:"PyTorch & ASP.NET Core • Health-Tech Yapay Zeka",description:"Veriye dayalı klinik teşhis öngörüleri sunmak amacıyla ASP.NET Core REST API altyapısı ve Python (PyTorch) derin öğrenme çıkarım motoru ile inşa edilen, TÜBİTAK ön değerlendirmesini başarıyla geçen sağlık platformu.",col1Img1:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"},{number:"03",title:"SemptomAI & NotTrack API",category:"Mobil Sağlık & Katmanlı REST Mimarisi",badge:"Gerçek Zamanlı AI & Katmanlı Mimari (JWT/Swagger)",description:"Kullanıcılara anlık semptom analizi sunan 14 haftalık geliştirme döngüsüne sahip mobil sağlık asistanı SemptomAI ve Entity Framework Core katmanlı mimarisiyle inşa edilen JWT kimlik doğrulamalı NotTrack REST API.",col1Img1:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"}],BN=({project:n,index:e,progress:t,range:r,targetScale:o})=>{const a=xe.useRef(null),c=cm(t,r,[1,o]);return P.jsx("div",{ref:a,className:"h-[85vh] flex items-center justify-center sticky top-20 md:top-28",children:P.jsxs(mn.div,{style:{scale:c,top:`${e*24}px`},className:"relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden",children:[P.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[P.jsx("span",{className:"font-black text-white leading-none select-none tracking-tight",style:{fontSize:"clamp(2.4rem, 6vw, 4.5rem)"},children:n.number}),P.jsxs("div",{children:[P.jsxs("div",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-semibold",children:[n.category," • ",n.badge]}),P.jsx("h3",{className:"text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white",children:n.title})]})]}),P.jsx(ON,{label:"Projeyi İncele",href:n.link})]}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch",children:[P.jsxs("div",{className:"md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between",children:[P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(120px, 16vw, 220px)"},children:P.jsx("img",{src:n.col1Img1,alt:`${n.title} detay 1`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})}),P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(150px, 20vw, 320px)"},children:P.jsx("img",{src:n.col1Img2,alt:`${n.title} detay 2`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]}),P.jsx("div",{className:"md:col-span-7 w-full h-full min-h-[220px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",children:P.jsx("img",{src:n.col2Img,alt:`${n.title} ana sunum`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]})]})})},zN=()=>{const n=xe.useRef(null),{scrollYProgress:e}=hS({target:n,offset:["start start","end end"]});return P.jsxs("section",{id:"projects",ref:n,className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28",children:[P.jsx(oi,{delay:0,y:40,children:P.jsx("h2",{className:"hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"PROJELER"})}),P.jsx("div",{className:"relative flex flex-col gap-12 sm:gap-16",children:Hc.map((t,r)=>{const o=1-(Hc.length-1-r)*.03,a=[r*(1/Hc.length),1];return P.jsx(BN,{project:t,index:r,totalCards:Hc.length,progress:e,range:a,targetScale:o},t.number)})})]})},VN=[{company:"BirEmek",role:"Mobil Yazılım Mühendisi",period:"Kas 2025 - Tem 2026",location:"Uzaktan",type:"Üretim Seviyesi / Tek Mühendis",bullets:["BirEmek mobil uygulamasını backend, frontend ve sunucu altyapısı dahil olmak üzere uçtan uca, projedeki tek mühendis olarak tek başıma tasarladım, geliştirdim ve yayına aldım.","Uygulamayı hem App Store hem de Google Play üzerinde yayınladım; App Store Connect teknik inceleme sürecini tek başıma yönettim ve yayını engelleyen kritik çökme (crash) hatalarını giderdim.","Gerçek zamanlı veri akışını ve kararlı uygulama performansını sağlamak için REST API'ler ve backend servisleri geliştirdim ve entegre ettim."],tech:["Flutter","REST API","App Store Connect","Google Play Console","Cloud Architecture"]},{company:"BlueSense",role:"Android Geliştirici Stajyeri",period:"Tem 2025 - Eyl 2025",location:"Staj",type:"Mobil Geliştirme",bullets:["Kotlin ve Jetpack Compose kullanarak özel modern Android arayüz (UI) bileşenleri geliştirdim.","Gerçek zamanlı veri yönetimi için uygulamanın frontend'ini Firebase servisleri ve harici REST API'lerle entegre ettim.","Uçtan uca test süreçlerini tamamladım ve geliştirilen özellikleri doğrudan mühendislik ekibine sundum."],tech:["Kotlin","Jetpack Compose","Android SDK","Firebase","REST API","MVVM"]},{company:"Sca Social",role:"Proje Yönetimi Stajyeri",period:"May 2025 - Haz 2025",location:"Staj",type:"Yönetim & Koordinasyon",bullets:["Yazılım projelerinin planlama, iş takibi ve ekipler arası koordinasyon aşamalarına aktif destek verdim.","Gereksinim analizi ve geliştirme döngüsü sprint süreçlerini takip ettim."],tech:["Agile / Scrum","Proje Yönetimi","Sprint Koordinasyonu"]}],HN=[{category:"Programlama Dilleri",skills:["C#","Kotlin","Dart","Python","Java","SQL","JavaScript","C"]},{category:"Mobil & Arayüz (UI)",skills:["Flutter","Android SDK","Jetpack Compose","MVVM Mimarisi"]},{category:"Backend & API Mimarisi",skills:["ASP.NET Core","Entity Framework Core","RESTful Servisler","JWT Doğrulama","Swagger UI"]},{category:"Veritabanı & Bulut",skills:["SQL Server","MySQL","SQLite","Firebase Cloud"]},{category:"Araçlar & Teknolojiler",skills:["PyTorch (AI)","Git & GitHub","Postman","Visual Studio","Android Studio"]}],GN=()=>P.jsx("section",{id:"experience",className:"relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 z-10 border-t border-white/10",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-20",children:[P.jsx(oi,{delay:0,y:30,children:P.jsxs("div",{className:"text-center space-y-3",children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Kariyer & Geçmiş"}),P.jsx("h2",{className:"hero-heading font-black uppercase tracking-tight select-none",style:{fontSize:"clamp(2.5rem, 8vw, 100px)"},children:"DENEYİM & EĞİTİM"})]})}),P.jsxs("div",{className:"space-y-8",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg sm:text-xl font-bold uppercase text-white tracking-wide border-b border-white/10 pb-4",children:[P.jsx(JL,{className:"w-5 h-5 text-[#B600A8]"}),P.jsx("span",{children:"İş Deneyimi"})]}),P.jsx("div",{className:"grid grid-cols-1 gap-6",children:VN.map((n,e)=>P.jsx(oi,{delay:e*.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-[#B600A8]/40 transition-all duration-300 shadow-xl space-y-5",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("h3",{className:"text-2xl font-black uppercase text-white tracking-tight",children:n.role}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30 font-semibold uppercase",children:n.type})]}),P.jsx("div",{className:"text-base text-white/80 font-medium mt-1",children:n.company})]}),P.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(eN,{className:"w-3.5 h-3.5 text-[#B600A8]"}),n.period]}),P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(Em,{className:"w-3.5 h-3.5 text-cyan-400"}),n.location]})]})]}),P.jsx("ul",{className:"space-y-2.5 pt-2",children:n.bullets.map((t,r)=>P.jsxs("li",{className:"flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed font-light",children:[P.jsx(iN,{className:"w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"}),P.jsx("span",{children:t})]},r))}),P.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-white/5",children:n.tech.map(t=>P.jsx("span",{className:"px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/10 text-white/90",children:t},t))})]})},n.company))})]}),P.jsx(oi,{delay:.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-cyan-500/30 transition-all shadow-xl space-y-4",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg font-bold uppercase text-white tracking-wide",children:[P.jsx(fN,{className:"w-6 h-6 text-cyan-400"}),P.jsx("span",{children:"Eğitim Bilgisi"})]}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold font-mono",children:"2021 - 2026"})]}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("h4",{className:"text-2xl font-black uppercase text-white",children:"Bilgisayar Mühendisliği Lisans"}),P.jsx("p",{className:"text-base text-[#D7E2EA]/90 font-medium",children:"Mersin Üniversitesi • Mühendislik Fakültesi"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/70 font-light leading-relaxed pt-1",children:"Yazılım mimarileri, algoritmalar ve veri yapıları, derin öğrenme temelleri, veritabanı yönetim sistemleri ve modern mobil uygulama geliştirme odaklı kapsamlı lisans eğitimi."})]})]})}),P.jsx(oi,{delay:.3,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] shadow-xl space-y-6",children:[P.jsx("h3",{className:"text-xl font-black uppercase text-white tracking-tight border-b border-white/10 pb-4",children:"Teknik Yetenekler & Araç Seti"}),P.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:HN.map(n=>P.jsxs("div",{className:"space-y-2.5",children:[P.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#B600A8]",children:n.category}),P.jsx("div",{className:"flex flex-wrap gap-2",children:n.skills.map(e=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white hover:border-cyan-400/50 hover:bg-white/[0.08] transition-colors",children:e},e))})]},n.category))})]})})]})}),WN=({isOpen:n,onClose:e})=>{const[t,r]=xe.useState({name:"",email:"",message:""}),[o,a]=xe.useState(!1),[c,u]=xe.useState(null),f=(p,v)=>{navigator.clipboard.writeText(p),u(v),setTimeout(()=>u(null),2e3)},h=p=>{p.preventDefault();const v=encodeURIComponent(`Portfolyo İletişimi - ${t.name}`),m=encodeURIComponent(`İsim: ${t.name}
E-posta: ${t.email}

Mesaj:
${t.message}`);window.location.href=`mailto:anilmetey@gmail.com?subject=${v}&body=${m}`,a(!0),setTimeout(()=>{a(!1),e()},2e3)};return P.jsx(sm,{children:n&&P.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[P.jsx(mn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),P.jsxs(mn.div,{initial:{opacity:0,scale:.94,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"relative w-full max-w-2xl bg-[#121316] border border-[#2A2E35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden z-10",children:[P.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-[#B600A8]/20 via-[#7621B0]/30 to-[#38bdf8]/20 blur-3xl pointer-events-none"}),P.jsx("button",{onClick:e,type:"button",className:"absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",children:P.jsx(CN,{className:"w-6 h-6"})}),P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Birlikte Çalışalım"}),P.jsx("h2",{className:"text-3xl sm:text-4xl font-black uppercase text-white mt-1",children:"Anıl Mete Yıldız"}),P.jsx("p",{className:"text-[#D7E2EA]/70 text-sm sm:text-base mt-1",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici"})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#B600A8]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"mailto:anilmetey@gmail.com",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] flex-shrink-0",children:P.jsx(oM,{className:"w-5 h-5"})}),P.jsxs("div",{className:"overflow-hidden",children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"E-posta"}),P.jsx("div",{className:"text-sm font-medium text-white truncate",children:"anilmetey@gmail.com"})]})]}),P.jsx("button",{onClick:()=>f("anilmetey@gmail.com","email"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:c==="email"?P.jsx(yu,{className:"w-4 h-4 text-emerald-400"}):P.jsx(E_,{className:"w-4 h-4"})})]}),P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#7621B0]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"tel:+905071437410",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#7621B0] flex-shrink-0",children:P.jsx(aM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"Telefon"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"+90 507 143 7410"})]})]}),P.jsx("button",{onClick:()=>f("+905071437410","phone"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:c==="phone"?P.jsx(yu,{className:"w-4 h-4 text-emerald-400"}):P.jsx(E_,{className:"w-4 h-4"})})]}),P.jsxs("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform",children:P.jsx(sM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"LinkedIn"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anıl-mete-yıldız"})]})]}),P.jsxs("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform",children:P.jsx(rM,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"GitHub"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anilmetey"})]})]})]}),P.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#D7E2EA]/70 px-1",children:[P.jsx(Em,{className:"w-4 h-4 text-[#B600A8]"}),P.jsx("span",{children:"Mersin, Türkiye • Mersin Üniversitesi Bilgisayar Mühendisliği"})]}),P.jsxs("form",{onSubmit:h,className:"space-y-3 pt-2",children:[P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[P.jsx("input",{type:"text",required:!0,placeholder:"Adınız & Soyadınız",value:t.name,onChange:p=>r({...t,name:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"}),P.jsx("input",{type:"email",required:!0,placeholder:"E-posta Adresiniz",value:t.email,onChange:p=>r({...t,email:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"})]}),P.jsx("textarea",{required:!0,rows:3,placeholder:"Mesajınız veya proje detayınız...",value:t.message,onChange:p=>r({...t,message:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"}),P.jsx("button",{type:"submit",disabled:o,className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white transition-all duration-300 hover:opacity-95 active:scale-95 cursor-pointer shadow-lg",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:o?P.jsxs(P.Fragment,{children:[P.jsx(iM,{className:"w-5 h-5 text-emerald-300"}),P.jsx("span",{children:"İletişim Başlatıldı!"})]}):P.jsxs(P.Fragment,{children:[P.jsx(xN,{className:"w-4 h-4"}),P.jsx("span",{children:"Mesaj Gönder"})]})})]})]})]})]})})},XN=({onComplete:n})=>{const[e,t]=xe.useState(0),[r,o]=xe.useState(!1);xe.useEffect(()=>{const f=.9090909090909091,h=setInterval(()=>{t(v=>{const m=v+f;return m>=100?(clearInterval(h),o(!0),setTimeout(()=>{n()},450),100):m})},20),p=setTimeout(()=>{o(!0),n()},2600);return()=>{clearInterval(h),clearTimeout(p)}},[n]);const a=c=>c<25?"HOLOGRAM PROJEKSİYONU BAŞLATILIYOR...":c<55?"3D AVATAR & PARÇACIKLAR YÜKLENİYOR...":c<85?"MOBİL & FULL-STACK MİMARİ BAĞLANIYOR...":"SİSTEM ÇEVRİMİÇİ • HOŞ GELDİNİZ 👋";return P.jsx(sm,{children:!r&&P.jsxs(mn.div,{initial:{opacity:1},exit:{opacity:0,scale:1.08,filter:"blur(8px)"},transition:{duration:.7,ease:[.22,1,.36,1]},className:"fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070708] select-none overflow-hidden",children:[P.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:"linear-gradient(rgba(182, 0, 168, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)",backgroundSize:"40px 40px",perspective:"600px"}}),P.jsxs("div",{className:"absolute top-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),P.jsx("span",{className:"text-red-400 font-bold uppercase tracking-wider",children:"REC // 4K 60FPS"})]}),P.jsx("div",{className:"hidden sm:block",children:"SYSTEM PROTOCOL: ANIL-METE-v2.6"}),P.jsxs("div",{children:["00:00:0",Math.floor(e/10),":",(Math.floor(e*3.7)%60).toString().padStart(2,"0")]})]}),P.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-t border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsx("div",{children:"RESOLUTION: 3840 x 2160 ULTRA HD"}),P.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[P.jsx(HL,{className:"w-3.5 h-3.5 animate-pulse"}),P.jsx("span",{children:"GPU ENGINE: ACTIVE"})]})]}),P.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B600A8]/25 via-[#7621B0]/30 to-cyan-500/20 blur-3xl pointer-events-none"}),P.jsxs("div",{className:"relative mb-6 flex flex-col items-center justify-center z-10",children:[P.jsx(mn.div,{animate:{rotate:360},transition:{repeat:1/0,duration:8,ease:"linear"},className:"absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#B600A8]/50"}),P.jsx(mn.div,{animate:{rotate:-360},transition:{repeat:1/0,duration:12,ease:"linear"},className:"absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/40"}),P.jsxs("div",{className:"relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(182,0,168,0.6)] bg-[#0C0C0C] group",children:[P.jsx("img",{src:"./anil_waving.jpg",alt:"Anıl Mete 3D Avatar Hologram",className:"w-full h-full object-cover scale-105"}),P.jsx(mn.div,{animate:{y:["-100%","200%"]},transition:{repeat:1/0,duration:1.8,ease:"easeInOut"},className:"absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent pointer-events-none"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#B600A8]/30 via-transparent to-cyan-500/10 pointer-events-none"})]}),P.jsx("div",{className:"flex items-center gap-1 mt-4",children:[40,70,95,60,85,50,90,75,45,80,65].map((c,u)=>P.jsx(mn.div,{animate:{height:[`${c*.2}px`,`${c*.4}px`,`${c*.15}px`]},transition:{repeat:1/0,duration:.8+u%3*.2,ease:"easeInOut"},className:"w-1 rounded-full bg-gradient-to-t from-[#B600A8] to-cyan-400 opacity-80",style:{height:`${c*.3}px`}},u))})]}),P.jsxs("div",{className:"text-center space-y-1.5 z-10 px-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest",children:[P.jsx(cM,{className:"w-3 h-3 text-[#B600A8]"}),P.jsx("span",{children:"3D CREATIVE INTRO"})]}),P.jsx("h1",{className:"hero-heading font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl",children:"ANIL METE YILDIZ"}),P.jsx("p",{className:"text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-medium",children:"Bilgisayar Mühendisi • Mobil • Full-Stack • 3D Creator"})]}),P.jsx("div",{className:"mt-6 w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 z-10 shadow-inner",children:P.jsx(mn.div,{className:"h-full rounded-full",style:{width:`${e}%`,background:"linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 70%, #38BDF8 100%)",boxShadow:"0 0 16px rgba(56, 189, 248, 0.8)"}})}),P.jsxs("div",{className:"mt-3 flex flex-col items-center gap-1 z-10 font-mono",children:[P.jsxs("span",{className:"text-sm sm:text-base font-bold text-white tracking-widest",children:["[",Math.floor(e).toString().padStart(3," "),"%]"]}),P.jsx("span",{className:"text-[11px] sm:text-xs text-[#D7E2EA]/60 tracking-wider uppercase",children:a(e)})]}),P.jsx("button",{onClick:()=>{o(!0),n()},type:"button",className:"absolute bottom-16 sm:bottom-20 z-20 text-[11px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-pointer px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md",children:"Girişi Atla [SKIP] →"})]})})};function jN(){const[n,e]=xe.useState(!0),[t,r]=xe.useState(!1),o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return P.jsxs(P.Fragment,{children:[n&&P.jsx(XN,{onComplete:()=>e(!1)}),P.jsxs("div",{className:"relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white overflow-x-clip",children:[P.jsx(DN,{onOpenContact:()=>r(!0)}),P.jsx(LN,{}),P.jsx(UN,{onOpenContact:()=>r(!0)}),P.jsx(kN,{}),P.jsx(zN,{}),P.jsx(GN,{}),P.jsx("footer",{className:"relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-16 text-[#D7E2EA] z-20",children:P.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col gap-10",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-2xl sm:text-3xl font-black uppercase text-white tracking-tight",children:"Bir sonraki projenizi birlikte hayata geçirelim mi?"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/60 mt-1",children:"Mobil uygulama, yapay zeka entegrasyonu veya full-stack mimariler için bana dilediğiniz zaman ulaşabilirsiniz."})]}),P.jsx("button",{onClick:()=>r(!0),className:"px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:"Hemen İletişime Geç"})]}),P.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 text-sm",children:[P.jsxs("div",{children:[P.jsx("div",{className:"font-semibold text-white uppercase tracking-wider text-base",children:"Anıl Mete Yıldız"}),P.jsx("div",{className:"text-xs text-[#D7E2EA]/60 mt-0.5",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici • Mersin, Türkiye"})]}),P.jsxs("div",{className:"flex items-center gap-4 text-[#D7E2EA]/70",children:[P.jsx("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"GitHub",children:P.jsx(rM,{className:"w-5 h-5"})}),P.jsx("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"LinkedIn",children:P.jsx(sM,{className:"w-5 h-5"})}),P.jsx("a",{href:"mailto:anilmetey@gmail.com",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"E-posta Gönder",children:P.jsx(oM,{className:"w-5 h-5"})}),P.jsx("a",{href:"tel:+905071437410",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"Telefon",children:P.jsx(aM,{className:"w-5 h-5"})}),P.jsx("button",{onClick:o,className:"ml-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer",title:"Yukarı Çık",children:P.jsx(jL,{className:"w-4 h-4"})})]})]})]})}),P.jsx(WN,{isOpen:t,onClose:()=>r(!1)})]})]})}JE.createRoot(document.getElementById("root")).render(P.jsx(XE.StrictMode,{children:P.jsx(jN,{})}));

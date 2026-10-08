(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function vy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kv={exports:{}},wo={},Ov={exports:{}},mt={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Fv;function Vb(){if(Fv)return mt;Fv=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function x(U,pe,Se){this.props=U,this.context=pe,this.refs=w,this.updater=Se||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,pe){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,pe,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function R(U,pe,Se){this.props=U,this.context=pe,this.refs=w,this.updater=Se||S}var I=R.prototype=new y;I.constructor=R,b(I,x.prototype),I.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function M(U,pe,Se){var We,ze={},je=null,le=null;if(pe!=null)for(We in pe.ref!==void 0&&(le=pe.ref),pe.key!==void 0&&(je=""+pe.key),pe)L.call(pe,We)&&!k.hasOwnProperty(We)&&(ze[We]=pe[We]);var ce=arguments.length-2;if(ce===1)ze.children=Se;else if(1<ce){for(var we=Array(ce),Qe=0;Qe<ce;Qe++)we[Qe]=arguments[Qe+2];ze.children=we}if(U&&U.defaultProps)for(We in ce=U.defaultProps,ce)ze[We]===void 0&&(ze[We]=ce[We]);return{$$typeof:r,type:U,key:je,ref:le,props:ze,_owner:D.current}}function N(U,pe){return{$$typeof:r,type:U.type,key:pe,ref:U.ref,props:U.props,_owner:U._owner}}function F(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function H(U){var pe={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return pe[Se]})}var j=/\/+/g;function Q(U,pe){return typeof U=="object"&&U!==null&&U.key!=null?H(""+U.key):pe.toString(36)}function B(U,pe,Se,We,ze){var je=typeof U;(je==="undefined"||je==="boolean")&&(U=null);var le=!1;if(U===null)le=!0;else switch(je){case"string":case"number":le=!0;break;case"object":switch(U.$$typeof){case r:case e:le=!0}}if(le)return le=U,ze=ze(le),U=We===""?"."+Q(le,0):We,T(ze)?(Se="",U!=null&&(Se=U.replace(j,"$&/")+"/"),B(ze,pe,Se,"",function(Qe){return Qe})):ze!=null&&(F(ze)&&(ze=N(ze,Se+(!ze.key||le&&le.key===ze.key?"":(""+ze.key).replace(j,"$&/")+"/")+U)),pe.push(ze)),1;if(le=0,We=We===""?".":We+":",T(U))for(var ce=0;ce<U.length;ce++){je=U[ce];var we=We+Q(je,ce);le+=B(je,pe,Se,we,ze)}else if(we=g(U),typeof we=="function")for(U=we.call(U),ce=0;!(je=U.next()).done;)je=je.value,we=We+Q(je,ce++),le+=B(je,pe,Se,we,ze);else if(je==="object")throw pe=String(U),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.");return le}function ne(U,pe,Se){if(U==null)return U;var We=[],ze=0;return B(U,We,"","",function(je){return pe.call(Se,je,ze++)}),We}function fe(U){if(U._status===-1){var pe=U._result;pe=pe(),pe.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=pe)}if(U._status===1)return U._result.default;throw U._result}var te={current:null},Z={transition:null},$={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:Z,ReactCurrentOwner:D};function q(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ne,forEach:function(U,pe,Se){ne(U,function(){pe.apply(this,arguments)},Se)},count:function(U){var pe=0;return ne(U,function(){pe++}),pe},toArray:function(U){return ne(U,function(pe){return pe})||[]},only:function(U){if(!F(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=x,mt.Fragment=t,mt.Profiler=s,mt.PureComponent=R,mt.StrictMode=n,mt.Suspense=f,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,mt.act=q,mt.cloneElement=function(U,pe,Se){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=b({},U.props),ze=U.key,je=U.ref,le=U._owner;if(pe!=null){if(pe.ref!==void 0&&(je=pe.ref,le=D.current),pe.key!==void 0&&(ze=""+pe.key),U.type&&U.type.defaultProps)var ce=U.type.defaultProps;for(we in pe)L.call(pe,we)&&!k.hasOwnProperty(we)&&(We[we]=pe[we]===void 0&&ce!==void 0?ce[we]:pe[we])}var we=arguments.length-2;if(we===1)We.children=Se;else if(1<we){ce=Array(we);for(var Qe=0;Qe<we;Qe++)ce[Qe]=arguments[Qe+2];We.children=ce}return{$$typeof:r,type:U.type,key:ze,ref:je,props:We,_owner:le}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},mt.createElement=M,mt.createFactory=function(U){var pe=M.bind(null,U);return pe.type=U,pe},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:c,render:U}},mt.isValidElement=F,mt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:fe}},mt.memo=function(U,pe){return{$$typeof:h,type:U,compare:pe===void 0?null:pe}},mt.startTransition=function(U){var pe=Z.transition;Z.transition={};try{U()}finally{Z.transition=pe}},mt.unstable_act=q,mt.useCallback=function(U,pe){return te.current.useCallback(U,pe)},mt.useContext=function(U){return te.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return te.current.useDeferredValue(U)},mt.useEffect=function(U,pe){return te.current.useEffect(U,pe)},mt.useId=function(){return te.current.useId()},mt.useImperativeHandle=function(U,pe,Se){return te.current.useImperativeHandle(U,pe,Se)},mt.useInsertionEffect=function(U,pe){return te.current.useInsertionEffect(U,pe)},mt.useLayoutEffect=function(U,pe){return te.current.useLayoutEffect(U,pe)},mt.useMemo=function(U,pe){return te.current.useMemo(U,pe)},mt.useReducer=function(U,pe,Se){return te.current.useReducer(U,pe,Se)},mt.useRef=function(U){return te.current.useRef(U)},mt.useState=function(U){return te.current.useState(U)},mt.useSyncExternalStore=function(U,pe,Se){return te.current.useSyncExternalStore(U,pe,Se)},mt.useTransition=function(){return te.current.useTransition()},mt.version="18.3.1",mt}var zv;function wp(){return zv||(zv=1,Ov.exports=Vb()),Ov.exports}/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Bv;function Hb(){if(Bv)return wo;Bv=1;var r=wp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,h){var p,v={},g=null,S=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(S=f.ref);for(p in f)n.call(f,p)&&!o.hasOwnProperty(p)&&(v[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)v[p]===void 0&&(v[p]=f[p]);return{$$typeof:e,type:c,key:g,ref:S,props:v,_owner:s.current}}return wo.Fragment=t,wo.jsx=u,wo.jsxs=u,wo}var Vv;function Gb(){return Vv||(Vv=1,kv.exports=Hb()),kv.exports}var P=Gb(),ge=wp();const Wb=vy(ge);var cu={},uh={exports:{}},Yr={},Hv={exports:{}},Gv={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Wv;function jb(){return Wv||(Wv=1,(function(r){function e(Z,$){var q=Z.length;Z.push($);e:for(;0<q;){var U=q-1>>>1,pe=Z[U];if(0<s(pe,$))Z[U]=$,Z[q]=pe,q=U;else break e}}function t(Z){return Z.length===0?null:Z[0]}function n(Z){if(Z.length===0)return null;var $=Z[0],q=Z.pop();if(q!==$){Z[0]=q;e:for(var U=0,pe=Z.length,Se=pe>>>1;U<Se;){var We=2*(U+1)-1,ze=Z[We],je=We+1,le=Z[je];if(0>s(ze,q))je<pe&&0>s(le,ze)?(Z[U]=le,Z[je]=q,U=je):(Z[U]=ze,Z[We]=q,U=We);else if(je<pe&&0>s(le,q))Z[U]=le,Z[je]=q,U=je;else break e}}return $}function s(Z,$){var q=Z.sortIndex-$.sortIndex;return q!==0?q:Z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var f=[],h=[],p=1,v=null,g=3,S=!1,b=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(Z){for(var $=t(h);$!==null;){if($.callback===null)n(h);else if($.startTime<=Z)n(h),$.sortIndex=$.expirationTime,e(f,$);else break;$=t(h)}}function T(Z){if(w=!1,I(Z),!b)if(t(f)!==null)b=!0,fe(L);else{var $=t(h);$!==null&&te(T,$.startTime-Z)}}function L(Z,$){b=!1,w&&(w=!1,y(M),M=-1),S=!0;var q=g;try{for(I($),v=t(f);v!==null&&(!(v.expirationTime>$)||Z&&!H());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var pe=U(v.expirationTime<=$);$=r.unstable_now(),typeof pe=="function"?v.callback=pe:v===t(f)&&n(f),I($)}else n(f);v=t(f)}if(v!==null)var Se=!0;else{var We=t(h);We!==null&&te(T,We.startTime-$),Se=!1}return Se}finally{v=null,g=q,S=!1}}var D=!1,k=null,M=-1,N=5,F=-1;function H(){return!(r.unstable_now()-F<N)}function j(){if(k!==null){var Z=r.unstable_now();F=Z;var $=!0;try{$=k(!0,Z)}finally{$?Q():(D=!1,k=null)}}else D=!1}var Q;if(typeof R=="function")Q=function(){R(j)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ne=B.port2;B.port1.onmessage=j,Q=function(){ne.postMessage(null)}}else Q=function(){x(j,0)};function fe(Z){k=Z,D||(D=!0,Q())}function te(Z,$){M=x(function(){Z(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){b||S||(b=!0,fe(L))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var q=g;g=$;try{return Z()}finally{g=q}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,$){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var q=g;g=Z;try{return $()}finally{g=q}},r.unstable_scheduleCallback=function(Z,$,q){var U=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?U+q:U):q=U,Z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=q+pe,Z={id:p++,callback:$,priorityLevel:Z,startTime:q,expirationTime:pe,sortIndex:-1},q>U?(Z.sortIndex=q,e(h,Z),t(f)===null&&Z===t(h)&&(w?(y(M),M=-1):w=!0,te(T,q-U))):(Z.sortIndex=pe,e(f,Z),b||S||(b=!0,fe(L))),Z},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(Z){var $=g;return function(){var q=g;g=$;try{return Z.apply(this,arguments)}finally{g=q}}}})(Gv)),Gv}var jv;function Xb(){return jv||(jv=1,Hv.exports=jb()),Hv.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Xv;function Yb(){if(Xv)return Yr;Xv=1;var r=wp(),e=Xb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)n.add(a[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return f.call(v,i)?!0:f.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function S(i,a,l,d){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,a,l,d){if(a===null||typeof a>"u"||S(i,a,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function w(i,a,l,d,m,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];x[a]=new w(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(y,R);x[a]=new w(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(y,R);x[a]=new w(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(y,R);x[a]=new w(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,a,l,d){var m=x.hasOwnProperty(a)?x[a]:null;(m!==null?m.type!==0:d||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(b(a,l,m,d)&&(l=null),d||m===null?g(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(a=m.attributeName,d=m.attributeNamespace,l===null?i.removeAttribute(a):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?i.setAttributeNS(d,a,l):i.setAttribute(a,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),H=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),Z=Symbol.iterator;function $(i){return i===null||typeof i!="object"?null:(i=Z&&i[Z]||i["@@iterator"],typeof i=="function"?i:null)}var q=Object.assign,U;function pe(i){if(U===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);U=a&&a[1]||""}return`
`+U+i}var Se=!1;function We(i,a){if(!i||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(he){var d=he}Reflect.construct(i,[],a)}else{try{a.call()}catch(he){d=he}i.call(a.prototype)}else{try{throw Error()}catch(he){d=he}i()}}catch(he){if(he&&d&&typeof he.stack=="string"){for(var m=he.stack.split(`
`),_=d.stack.split(`
`),A=m.length-1,z=_.length-1;1<=A&&0<=z&&m[A]!==_[z];)z--;for(;1<=A&&0<=z;A--,z--)if(m[A]!==_[z]){if(A!==1||z!==1)do if(A--,z--,0>z||m[A]!==_[z]){var V=`
`+m[A].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=A&&0<=z);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?pe(i):""}function ze(i){switch(i.tag){case 5:return pe(i.type);case 16:return pe("Lazy");case 13:return pe("Suspense");case 19:return pe("SuspenseList");case 0:case 2:case 15:return i=We(i.type,!1),i;case 11:return i=We(i.type.render,!1),i;case 1:return i=We(i.type,!0),i;default:return""}}function je(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case D:return"Portal";case N:return"Profiler";case M:return"StrictMode";case Q:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case F:return(i._context.displayName||"Context")+".Provider";case j:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ne:return a=i.displayName||null,a!==null?a:je(i.type)||"Memo";case fe:a=i._payload,i=i._init;try{return je(i(a))}catch{}}return null}function le(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(a);case 8:return a===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function we(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qe(i){var a=we(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),d=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return m.call(this)},set:function(A){d=""+A,_.call(this,A)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Ie(i){i._valueTracker||(i._valueTracker=Qe(i))}function Je(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),d="";return i&&(d=we(i)?i.checked?"true":"false":i.value),i=d,i!==l?(a.setValue(i),!0):!1}function St(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function gt(i,a){var l=a.checked;return q({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function ut(i,a){var l=a.defaultValue==null?"":a.defaultValue,d=a.checked!=null?a.checked:a.defaultChecked;l=ce(a.value!=null?a.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Jt(i,a){a=a.checked,a!=null&&I(i,"checked",a,!1)}function er(i,a){Jt(i,a);var l=ce(a.value),d=a.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Kt(i,a.type,l):a.hasOwnProperty("defaultValue")&&Kt(i,a.type,ce(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function jt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var d=a.type;if(!(d!=="submit"&&d!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Kt(i,a,l){(a!=="number"||St(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var ir=Array.isArray;function Lt(i,a,l,d){if(i=i.options,a){a={};for(var m=0;m<l.length;m++)a["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=a.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&d&&(i[l].defaultSelected=!0)}else{for(l=""+ce(l),a=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}a!==null||i[m].disabled||(a=i[m])}a!==null&&(a.selected=!0)}}function Ht(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function X(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(ir(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:ce(l)}}function lr(i,a){var l=ce(a.value),d=ce(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function wt(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function O(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?O(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ee,oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,d,m){MSApp.execUnsafeLocalFunction(function(){return i(a,l,d,m)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ee.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function de(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(i){Le.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Te[a]=Te[i]})});function K(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||Te.hasOwnProperty(i)&&Te[i]?(""+a).trim():a+"px"}function Ae(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=K(l,a[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,m):i[l]=m}}var Pe=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(i,a){if(a){if(Pe[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function xe(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nt=null;function $e(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var at=null,st=null,W=null;function me(i){if(i=uo(i)){if(typeof at!="function")throw Error(t(280));var a=i.stateNode;a&&(a=wl(a),at(i.stateNode,i.type,a))}}function Me(i){st?W?W.push(i):W=[i]:st=i}function Ne(){if(st){var i=st,a=W;if(W=st=null,me(i),a)for(i=0;i<a.length;i++)me(a[i])}}function Oe(i,a){return i(a)}function _e(){}var et=!1;function ke(i,a,l){if(et)return i(a,l);et=!0;try{return Oe(i,a,l)}finally{et=!1,(st!==null||W!==null)&&(_e(),Ne())}}function Ft(i,a){var l=i.stateNode;if(l===null)return null;var d=wl(l);if(d===null)return null;l=d[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var yt=!1;if(c)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){yt=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{yt=!1}function oi(i,a,l,d,m,_,A,z,V){var he=Array.prototype.slice.call(arguments,3);try{a.apply(l,he)}catch(ye){this.onError(ye)}}var ia=!1,Fa=null,na=!1,aa=null,Nc={onError:function(i){ia=!0,Fa=i}};function ol(i,a,l,d,m,_,A,z,V){ia=!1,Fa=null,oi.apply(Nc,arguments)}function ll(i,a,l,d,m,_,A,z,V){if(ol.apply(this,arguments),ia){if(ia){var he=Fa;ia=!1,Fa=null}else throw Error(t(198));na||(na=!0,aa=he)}}function Ir(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function za(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function Hs(i){if(Ir(i)!==i)throw Error(t(188))}function ul(i){var a=i.alternate;if(!a){if(a=Ir(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,d=a;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Hs(m),i;if(_===d)return Hs(m),a;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=_;else{for(var A=!1,z=m.child;z;){if(z===l){A=!0,l=m,d=_;break}if(z===d){A=!0,d=m,l=_;break}z=z.sibling}if(!A){for(z=_.child;z;){if(z===l){A=!0,l=_,d=m;break}if(z===d){A=!0,d=_,l=m;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function sa(i){return i=ul(i),i!==null?Gs(i):null}function Gs(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=Gs(i);if(a!==null)return a;i=i.sibling}return null}var oa=e.unstable_scheduleCallback,Ws=e.unstable_cancelCallback,cl=e.unstable_shouldYield,Ic=e.unstable_requestPaint,Xt=e.unstable_now,Uc=e.unstable_getCurrentPriorityLevel,js=e.unstable_ImmediatePriority,Xs=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,G=e.unstable_LowPriority,ue=e.unstable_IdlePriority,re=null,J=null;function Re(i){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(re,i,void 0,(i.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:tt,Fe=Math.log,He=Math.LN2;function tt(i){return i>>>=0,i===0?32:31-(Fe(i)/He|0)|0}var ct=64,pt=4194304;function qe(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function bt(i,a){var l=i.pendingLanes;if(l===0)return 0;var d=0,m=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~m;z!==0?d=qe(z):(_&=A,_!==0&&(d=qe(_)))}else A=l&~m,A!==0?d=qe(A):_!==0&&(d=qe(_));if(d===0)return 0;if(a!==0&&a!==d&&(a&m)===0&&(m=d&-d,_=a&-a,m>=_||m===16&&(_&4194240)!==0))return a;if((d&4)!==0&&(d|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=d;0<a;)l=31-Ce(a),m=1<<l,d|=i[l],a&=~m;return d}function $t(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,a){for(var l=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-Ce(_),z=1<<A,V=m[A];V===-1?((z&l)===0||(z&d)!==0)&&(m[A]=$t(z,a)):V<=a&&(i.expiredLanes|=z),_&=~z}}function Dt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function zt(){var i=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),i}function Ge(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function tr(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-Ce(a),i[a]=l}function sn(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Ce(l),_=1<<m;a[m]=0,d[m]=-1,i[m]=-1,l&=~_}}function Tr(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var d=31-Ce(l),m=1<<d;m&a|i[d]&a&&(i[d]|=a),l&=~m}}var ht=0;function xi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var on,Tt,Gt,Si,Pt,ln=!1,bi=[],Mi=null,Rn=null,Cn=null,Ys=new Map,qs=new Map,Pn=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(i,a){switch(i){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Ys.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(a.pointerId)}}function Ks(i,a,l,d,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},a!==null&&(a=uo(a),a!==null&&Tt(a)),i):(i.eventSystemFlags|=d,a=i.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),i)}function c1(i,a,l,d,m){switch(a){case"focusin":return Mi=Ks(Mi,i,a,l,d,m),!0;case"dragenter":return Rn=Ks(Rn,i,a,l,d,m),!0;case"mouseover":return Cn=Ks(Cn,i,a,l,d,m),!0;case"pointerover":var _=m.pointerId;return Ys.set(_,Ks(Ys.get(_)||null,i,a,l,d,m)),!0;case"gotpointercapture":return _=m.pointerId,qs.set(_,Ks(qs.get(_)||null,i,a,l,d,m)),!0}return!1}function ym(i){var a=la(i.target);if(a!==null){var l=Ir(a);if(l!==null){if(a=l.tag,a===13){if(a=za(l),a!==null){i.blockedOn=a,Pt(i.priority,function(){Gt(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function dl(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=Oc(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);nt=d,l.target.dispatchEvent(d),nt=null}else return a=uo(l),a!==null&&Tt(a),i.blockedOn=l,!1;a.shift()}return!0}function xm(i,a,l){dl(i)&&l.delete(a)}function d1(){ln=!1,Mi!==null&&dl(Mi)&&(Mi=null),Rn!==null&&dl(Rn)&&(Rn=null),Cn!==null&&dl(Cn)&&(Cn=null),Ys.forEach(xm),qs.forEach(xm)}function $s(i,a){i.blockedOn===a&&(i.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,d1)))}function Zs(i){function a(m){return $s(m,i)}if(0<bi.length){$s(bi[0],i);for(var l=1;l<bi.length;l++){var d=bi[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Mi!==null&&$s(Mi,i),Rn!==null&&$s(Rn,i),Cn!==null&&$s(Cn,i),Ys.forEach(a),qs.forEach(a),l=0;l<Pn.length;l++)d=Pn[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Pn.length&&(l=Pn[0],l.blockedOn===null);)ym(l),l.blockedOn===null&&Pn.shift()}var Ba=T.ReactCurrentBatchConfig,hl=!0;function h1(i,a,l,d){var m=ht,_=Ba.transition;Ba.transition=null;try{ht=1,kc(i,a,l,d)}finally{ht=m,Ba.transition=_}}function f1(i,a,l,d){var m=ht,_=Ba.transition;Ba.transition=null;try{ht=4,kc(i,a,l,d)}finally{ht=m,Ba.transition=_}}function kc(i,a,l,d){if(hl){var m=Oc(i,a,l,d);if(m===null)ed(i,a,d,fl,l),_m(i,d);else if(c1(m,i,a,l,d))d.stopPropagation();else if(_m(i,d),a&4&&-1<u1.indexOf(i)){for(;m!==null;){var _=uo(m);if(_!==null&&on(_),_=Oc(i,a,l,d),_===null&&ed(i,a,d,fl,l),_===m)break;m=_}m!==null&&d.stopPropagation()}else ed(i,a,d,null,l)}}var fl=null;function Oc(i,a,l,d){if(fl=null,i=$e(d),i=la(i),i!==null)if(a=Ir(i),a===null)i=null;else if(l=a.tag,l===13){if(i=za(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return fl=i,null}function Sm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case js:return 1;case Xs:return 4;case C:case G:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Ln=null,Fc=null,pl=null;function bm(){if(pl)return pl;var i,a=Fc,l=a.length,d,m="value"in Ln?Ln.value:Ln.textContent,_=m.length;for(i=0;i<l&&a[i]===m[i];i++);var A=l-i;for(d=1;d<=A&&a[l-d]===m[_-d];d++);return pl=m.slice(i,1<d?1-d:void 0)}function ml(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function gl(){return!0}function Mm(){return!1}function Qr(i){function a(l,d,m,_,A){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?gl:Mm,this.isPropagationStopped=Mm,this}return q(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),a}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=Qr(Va),Qs=q({},Va,{view:0,detail:0}),p1=Qr(Qs),Bc,Vc,Js,vl=q({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Js&&(Js&&i.type==="mousemove"?(Bc=i.screenX-Js.screenX,Vc=i.screenY-Js.screenY):Vc=Bc=0,Js=i),Bc)},movementY:function(i){return"movementY"in i?i.movementY:Vc}}),Em=Qr(vl),m1=q({},vl,{dataTransfer:0}),g1=Qr(m1),v1=q({},Qs,{relatedTarget:0}),Hc=Qr(v1),_1=q({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=Qr(_1),x1=q({},Va,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),S1=Qr(x1),b1=q({},Va,{data:0}),wm=Qr(b1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=w1[i])?!!a[i]:!1}function Gc(){return T1}var A1=q({},Qs,{key:function(i){if(i.key){var a=M1[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=ml(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?E1[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(i){return i.type==="keypress"?ml(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ml(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),R1=Qr(A1),C1=q({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Qr(C1),P1=q({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),L1=Qr(P1),D1=q({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Qr(D1),I1=q({},vl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=Qr(I1),k1=[9,13,27,32],Wc=c&&"CompositionEvent"in window,eo=null;c&&"documentMode"in document&&(eo=document.documentMode);var O1=c&&"TextEvent"in window&&!eo,Am=c&&(!Wc||eo&&8<eo&&11>=eo),Rm=" ",Cm=!1;function Pm(i,a){switch(i){case"keyup":return k1.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ha=!1;function F1(i,a){switch(i){case"compositionend":return Lm(a);case"keypress":return a.which!==32?null:(Cm=!0,Rm);case"textInput":return i=a.data,i===Rm&&Cm?null:i;default:return null}}function z1(i,a){if(Ha)return i==="compositionend"||!Wc&&Pm(i,a)?(i=bm(),pl=Fc=Ln=null,Ha=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Am&&a.locale!=="ko"?null:a.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!B1[i.type]:a==="textarea"}function Nm(i,a,l,d){Me(d),a=bl(a,"onChange"),0<a.length&&(l=new zc("onChange","change",null,l,d),i.push({event:l,listeners:a}))}var to=null,ro=null;function V1(i){Zm(i,0)}function _l(i){var a=Ya(i);if(Je(a))return i}function H1(i,a){if(i==="change")return a}var Im=!1;if(c){var jc;if(c){var Xc="oninput"in document;if(!Xc){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),Xc=typeof Um.oninput=="function"}jc=Xc}else jc=!1;Im=jc&&(!document.documentMode||9<document.documentMode)}function km(){to&&(to.detachEvent("onpropertychange",Om),ro=to=null)}function Om(i){if(i.propertyName==="value"&&_l(ro)){var a=[];Nm(a,ro,i,$e(i)),ke(V1,a)}}function G1(i,a,l){i==="focusin"?(km(),to=a,ro=l,to.attachEvent("onpropertychange",Om)):i==="focusout"&&km()}function W1(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return _l(ro)}function j1(i,a){if(i==="click")return _l(a)}function X1(i,a){if(i==="input"||i==="change")return _l(a)}function Y1(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var Ei=typeof Object.is=="function"?Object.is:Y1;function io(i,a){if(Ei(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),d=Object.keys(a);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!f.call(a,m)||!Ei(i[m],a[m]))return!1}return!0}function Fm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function zm(i,a){var l=Fm(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=a&&d>=a)return{node:l,offset:a-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Fm(l)}}function Bm(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Bm(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Vm(){for(var i=window,a=St();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=St(i.document)}return a}function Yc(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function q1(i){var a=Vm(),l=i.focusedElem,d=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Bm(l.ownerDocument.documentElement,l)){if(d!==null&&Yc(l)){if(a=d.start,i=d.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!i.extend&&_>d&&(m=d,d=_,_=m),m=zm(l,_);var A=zm(l,d);m&&A&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),i.removeAllRanges(),_>d?(i.addRange(a),i.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var K1=c&&"documentMode"in document&&11>=document.documentMode,Ga=null,qc=null,no=null,Kc=!1;function Hm(i,a,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Kc||Ga==null||Ga!==St(d)||(d=Ga,"selectionStart"in d&&Yc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),no&&io(no,d)||(no=d,d=bl(qc,"onSelect"),0<d.length&&(a=new zc("onSelect","select",null,a,l),i.push({event:a,listeners:d}),a.target=Ga)))}function yl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var Wa={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},$c={},Gm={};c&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function xl(i){if($c[i])return $c[i];if(!Wa[i])return i;var a=Wa[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Gm)return $c[i]=a[l];return i}var Wm=xl("animationend"),jm=xl("animationiteration"),Xm=xl("animationstart"),Ym=xl("transitionend"),qm=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(i,a){qm.set(i,a),o(a,[i])}for(var Zc=0;Zc<Km.length;Zc++){var Qc=Km[Zc],$1=Qc.toLowerCase(),Z1=Qc[0].toUpperCase()+Qc.slice(1);Dn($1,"on"+Z1)}Dn(Wm,"onAnimationEnd"),Dn(jm,"onAnimationIteration"),Dn(Xm,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Ym,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function $m(i,a,l){var d=i.type||"unknown-event";i.currentTarget=l,ll(d,a,void 0,i),i.currentTarget=null}function Zm(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],m=d.event;d=d.listeners;e:{var _=void 0;if(a)for(var A=d.length-1;0<=A;A--){var z=d[A],V=z.instance,he=z.currentTarget;if(z=z.listener,V!==_&&m.isPropagationStopped())break e;$m(m,z,he),_=V}else for(A=0;A<d.length;A++){if(z=d[A],V=z.instance,he=z.currentTarget,z=z.listener,V!==_&&m.isPropagationStopped())break e;$m(m,z,he),_=V}}}if(na)throw i=aa,na=!1,aa=null,i}function Bt(i,a){var l=a[sd];l===void 0&&(l=a[sd]=new Set);var d=i+"__bubble";l.has(d)||(Qm(a,i,2,!1),l.add(d))}function Jc(i,a,l){var d=0;a&&(d|=4),Qm(l,i,d,a)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function so(i){if(!i[Sl]){i[Sl]=!0,n.forEach(function(l){l!=="selectionchange"&&(Q1.has(l)||Jc(l,!1,i),Jc(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Sl]||(a[Sl]=!0,Jc("selectionchange",!1,a))}}function Qm(i,a,l,d){switch(Sm(a)){case 1:var m=h1;break;case 4:m=f1;break;default:m=kc}l=m.bind(null,a,l,i),m=void 0,!yt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(a,l,{capture:!0,passive:m}):i.addEventListener(a,l,!0):m!==void 0?i.addEventListener(a,l,{passive:m}):i.addEventListener(a,l,!1)}function ed(i,a,l,d,m){var _=d;if((a&1)===0&&(a&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var z=d.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(A===4)for(A=d.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;A=A.return}for(;z!==null;){if(A=la(z),A===null)return;if(V=A.tag,V===5||V===6){d=_=A;continue e}z=z.parentNode}}d=d.return}ke(function(){var he=_,ye=$e(l),be=[];e:{var ve=qm.get(i);if(ve!==void 0){var Ue=zc,Xe=i;switch(i){case"keypress":if(ml(l)===0)break e;case"keydown":case"keyup":Ue=R1;break;case"focusin":Xe="focus",Ue=Hc;break;case"focusout":Xe="blur",Ue=Hc;break;case"beforeblur":case"afterblur":Ue=Hc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=L1;break;case Wm:case jm:case Xm:Ue=y1;break;case Ym:Ue=N1;break;case"scroll":Ue=p1;break;case"wheel":Ue=U1;break;case"copy":case"cut":case"paste":Ue=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Tm}var Ke=(a&4)!==0,rr=!Ke&&i==="scroll",ie=Ke?ve!==null?ve+"Capture":null:ve;Ke=[];for(var Y=he,se;Y!==null;){se=Y;var Ee=se.stateNode;if(se.tag===5&&Ee!==null&&(se=Ee,ie!==null&&(Ee=Ft(Y,ie),Ee!=null&&Ke.push(oo(Y,Ee,se)))),rr)break;Y=Y.return}0<Ke.length&&(ve=new Ue(ve,Xe,null,l,ye),be.push({event:ve,listeners:Ke}))}}if((a&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",ve&&l!==nt&&(Xe=l.relatedTarget||l.fromElement)&&(la(Xe)||Xe[un]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Xe=l.relatedTarget||l.toElement,Ue=he,Xe=Xe?la(Xe):null,Xe!==null&&(rr=Ir(Xe),Xe!==rr||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ue=null,Xe=he),Ue!==Xe)){if(Ke=Em,Ee="onMouseLeave",ie="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=Tm,Ee="onPointerLeave",ie="onPointerEnter",Y="pointer"),rr=Ue==null?ve:Ya(Ue),se=Xe==null?ve:Ya(Xe),ve=new Ke(Ee,Y+"leave",Ue,l,ye),ve.target=rr,ve.relatedTarget=se,Ee=null,la(ye)===he&&(Ke=new Ke(ie,Y+"enter",Xe,l,ye),Ke.target=se,Ke.relatedTarget=rr,Ee=Ke),rr=Ee,Ue&&Xe)t:{for(Ke=Ue,ie=Xe,Y=0,se=Ke;se;se=ja(se))Y++;for(se=0,Ee=ie;Ee;Ee=ja(Ee))se++;for(;0<Y-se;)Ke=ja(Ke),Y--;for(;0<se-Y;)ie=ja(ie),se--;for(;Y--;){if(Ke===ie||ie!==null&&Ke===ie.alternate)break t;Ke=ja(Ke),ie=ja(ie)}Ke=null}else Ke=null;Ue!==null&&Jm(be,ve,Ue,Ke,!1),Xe!==null&&rr!==null&&Jm(be,rr,Xe,Ke,!0)}}e:{if(ve=he?Ya(he):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Ze=H1;else if(Dm(ve))if(Im)Ze=X1;else{Ze=W1;var rt=G1}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=j1);if(Ze&&(Ze=Ze(i,he))){Nm(be,Ze,l,ye);break e}rt&&rt(i,ve,he),i==="focusout"&&(rt=ve._wrapperState)&&rt.controlled&&ve.type==="number"&&Kt(ve,"number",ve.value)}switch(rt=he?Ya(he):window,i){case"focusin":(Dm(rt)||rt.contentEditable==="true")&&(Ga=rt,qc=he,no=null);break;case"focusout":no=qc=Ga=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Hm(be,l,ye);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":Hm(be,l,ye)}var it;if(Wc)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Ha?Pm(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Am&&l.locale!=="ko"&&(Ha||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ha&&(it=bm()):(Ln=ye,Fc="value"in Ln?Ln.value:Ln.textContent,Ha=!0)),rt=bl(he,ot),0<rt.length&&(ot=new wm(ot,i,null,l,ye),be.push({event:ot,listeners:rt}),it?ot.data=it:(it=Lm(l),it!==null&&(ot.data=it)))),(it=O1?F1(i,l):z1(i,l))&&(he=bl(he,"onBeforeInput"),0<he.length&&(ye=new wm("onBeforeInput","beforeinput",null,l,ye),be.push({event:ye,listeners:he}),ye.data=it))}Zm(be,a)})}function oo(i,a,l){return{instance:i,listener:a,currentTarget:l}}function bl(i,a){for(var l=a+"Capture",d=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=Ft(i,l),_!=null&&d.unshift(oo(i,_,m)),_=Ft(i,a),_!=null&&d.push(oo(i,_,m))),i=i.return}return d}function ja(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Jm(i,a,l,d,m){for(var _=a._reactName,A=[];l!==null&&l!==d;){var z=l,V=z.alternate,he=z.stateNode;if(V!==null&&V===d)break;z.tag===5&&he!==null&&(z=he,m?(V=Ft(l,_),V!=null&&A.unshift(oo(l,V,z))):m||(V=Ft(l,_),V!=null&&A.push(oo(l,V,z)))),l=l.return}A.length!==0&&i.push({event:a,listeners:A})}var J1=/\r\n?/g,eb=/\u0000|\uFFFD/g;function eg(i){return(typeof i=="string"?i:""+i).replace(J1,`
`).replace(eb,"")}function Ml(i,a,l){if(a=eg(a),eg(i)!==a&&l)throw Error(t(425))}function El(){}var td=null,rd=null;function id(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(i){return tg.resolve(null).then(i).catch(ib)}:nd;function ib(i){setTimeout(function(){throw i})}function ad(i,a){var l=a,d=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){i.removeChild(m),Zs(a);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);Zs(a)}function Nn(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function rg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Xa=Math.random().toString(36).slice(2),Gi="__reactFiber$"+Xa,lo="__reactProps$"+Xa,un="__reactContainer$"+Xa,sd="__reactEvents$"+Xa,nb="__reactListeners$"+Xa,ab="__reactHandles$"+Xa;function la(i){var a=i[Gi];if(a)return a;for(var l=i.parentNode;l;){if(a=l[un]||l[Gi]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=rg(i);i!==null;){if(l=i[Gi])return l;i=rg(i)}return a}i=l,l=i.parentNode}return null}function uo(i){return i=i[Gi]||i[un],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ya(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function wl(i){return i[lo]||null}var od=[],qa=-1;function In(i){return{current:i}}function Vt(i){0>qa||(i.current=od[qa],od[qa]=null,qa--)}function kt(i,a){qa++,od[qa]=i.current,i.current=a}var Un={},Ar=In(Un),Hr=In(!1),ua=Un;function Ka(i,a){var l=i.type.contextTypes;if(!l)return Un;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===a)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=a[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=m),m}function Gr(i){return i=i.childContextTypes,i!=null}function Tl(){Vt(Hr),Vt(Ar)}function ig(i,a,l){if(Ar.current!==Un)throw Error(t(168));kt(Ar,a),kt(Hr,l)}function ng(i,a,l){var d=i.stateNode;if(a=a.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in a))throw Error(t(108,le(i)||"Unknown",m));return q({},l,d)}function Al(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Un,ua=Ar.current,kt(Ar,i),kt(Hr,Hr.current),!0}function ag(i,a,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=ng(i,a,ua),d.__reactInternalMemoizedMergedChildContext=i,Vt(Hr),Vt(Ar),kt(Ar,i)):Vt(Hr),kt(Hr,l)}var cn=null,Rl=!1,ld=!1;function sg(i){cn===null?cn=[i]:cn.push(i)}function sb(i){Rl=!0,sg(i)}function kn(){if(!ld&&cn!==null){ld=!0;var i=0,a=ht;try{var l=cn;for(ht=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}cn=null,Rl=!1}catch(m){throw cn!==null&&(cn=cn.slice(i+1)),oa(js,kn),m}finally{ht=a,ld=!1}}return null}var $a=[],Za=0,Cl=null,Pl=0,li=[],ui=0,ca=null,dn=1,hn="";function da(i,a){$a[Za++]=Pl,$a[Za++]=Cl,Cl=i,Pl=a}function og(i,a,l){li[ui++]=dn,li[ui++]=hn,li[ui++]=ca,ca=i;var d=dn;i=hn;var m=32-Ce(d)-1;d&=~(1<<m),l+=1;var _=32-Ce(a)+m;if(30<_){var A=m-m%5;_=(d&(1<<A)-1).toString(32),d>>=A,m-=A,dn=1<<32-Ce(a)+m|l<<m|d,hn=_+i}else dn=1<<_|l<<m|d,hn=i}function ud(i){i.return!==null&&(da(i,1),og(i,1,0))}function cd(i){for(;i===Cl;)Cl=$a[--Za],$a[Za]=null,Pl=$a[--Za],$a[Za]=null;for(;i===ca;)ca=li[--ui],li[ui]=null,hn=li[--ui],li[ui]=null,dn=li[--ui],li[ui]=null}var Jr=null,ei=null,Wt=!1,wi=null;function lg(i,a){var l=fi(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function ug(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,Jr=i,ei=Nn(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,Jr=i,ei=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=ca!==null?{id:dn,overflow:hn}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=fi(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,Jr=i,ei=null,!0):!1;default:return!1}}function dd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hd(i){if(Wt){var a=ei;if(a){var l=a;if(!ug(i,a)){if(dd(i))throw Error(t(418));a=Nn(l.nextSibling);var d=Jr;a&&ug(i,a)?lg(d,l):(i.flags=i.flags&-4097|2,Wt=!1,Jr=i)}}else{if(dd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,Jr=i}}}function cg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Jr=i}function Ll(i){if(i!==Jr)return!1;if(!Wt)return cg(i),Wt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!id(i.type,i.memoizedProps)),a&&(a=ei)){if(dd(i))throw dg(),Error(t(418));for(;a;)lg(i,a),a=Nn(a.nextSibling)}if(cg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ei=Nn(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ei=null}}else ei=Jr?Nn(i.stateNode.nextSibling):null;return!0}function dg(){for(var i=ei;i;)i=Nn(i.nextSibling)}function Qa(){ei=Jr=null,Wt=!1}function fd(i){wi===null?wi=[i]:wi.push(i)}var ob=T.ReactCurrentBatchConfig;function co(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var m=d,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var z=m.refs;A===null?delete z[_]:z[_]=A},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Dl(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function hg(i){var a=i._init;return a(i._payload)}function fg(i){function a(ie,Y){if(i){var se=ie.deletions;se===null?(ie.deletions=[Y],ie.flags|=16):se.push(Y)}}function l(ie,Y){if(!i)return null;for(;Y!==null;)a(ie,Y),Y=Y.sibling;return null}function d(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function m(ie,Y){return ie=Wn(ie,Y),ie.index=0,ie.sibling=null,ie}function _(ie,Y,se){return ie.index=se,i?(se=ie.alternate,se!==null?(se=se.index,se<Y?(ie.flags|=2,Y):se):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function A(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function z(ie,Y,se,Ee){return Y===null||Y.tag!==6?(Y=ih(se,ie.mode,Ee),Y.return=ie,Y):(Y=m(Y,se),Y.return=ie,Y)}function V(ie,Y,se,Ee){var Ze=se.type;return Ze===k?ye(ie,Y,se.props.children,Ee,se.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&hg(Ze)===Y.type)?(Ee=m(Y,se.props),Ee.ref=co(ie,Y,se),Ee.return=ie,Ee):(Ee=ru(se.type,se.key,se.props,null,ie.mode,Ee),Ee.ref=co(ie,Y,se),Ee.return=ie,Ee)}function he(ie,Y,se,Ee){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=nh(se,ie.mode,Ee),Y.return=ie,Y):(Y=m(Y,se.children||[]),Y.return=ie,Y)}function ye(ie,Y,se,Ee,Ze){return Y===null||Y.tag!==7?(Y=ya(se,ie.mode,Ee,Ze),Y.return=ie,Y):(Y=m(Y,se),Y.return=ie,Y)}function be(ie,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=ih(""+Y,ie.mode,se),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return se=ru(Y.type,Y.key,Y.props,null,ie.mode,se),se.ref=co(ie,null,Y),se.return=ie,se;case D:return Y=nh(Y,ie.mode,se),Y.return=ie,Y;case fe:var Ee=Y._init;return be(ie,Ee(Y._payload),se)}if(ir(Y)||$(Y))return Y=ya(Y,ie.mode,se,null),Y.return=ie,Y;Dl(ie,Y)}return null}function ve(ie,Y,se,Ee){var Ze=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ze!==null?null:z(ie,Y,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case L:return se.key===Ze?V(ie,Y,se,Ee):null;case D:return se.key===Ze?he(ie,Y,se,Ee):null;case fe:return Ze=se._init,ve(ie,Y,Ze(se._payload),Ee)}if(ir(se)||$(se))return Ze!==null?null:ye(ie,Y,se,Ee,null);Dl(ie,se)}return null}function Ue(ie,Y,se,Ee,Ze){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return ie=ie.get(se)||null,z(Y,ie,""+Ee,Ze);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case L:return ie=ie.get(Ee.key===null?se:Ee.key)||null,V(Y,ie,Ee,Ze);case D:return ie=ie.get(Ee.key===null?se:Ee.key)||null,he(Y,ie,Ee,Ze);case fe:var rt=Ee._init;return Ue(ie,Y,se,rt(Ee._payload),Ze)}if(ir(Ee)||$(Ee))return ie=ie.get(se)||null,ye(Y,ie,Ee,Ze,null);Dl(Y,Ee)}return null}function Xe(ie,Y,se,Ee){for(var Ze=null,rt=null,it=Y,ot=Y=0,_r=null;it!==null&&ot<se.length;ot++){it.index>ot?(_r=it,it=null):_r=it.sibling;var At=ve(ie,it,se[ot],Ee);if(At===null){it===null&&(it=_r);break}i&&it&&At.alternate===null&&a(ie,it),Y=_(At,Y,ot),rt===null?Ze=At:rt.sibling=At,rt=At,it=_r}if(ot===se.length)return l(ie,it),Wt&&da(ie,ot),Ze;if(it===null){for(;ot<se.length;ot++)it=be(ie,se[ot],Ee),it!==null&&(Y=_(it,Y,ot),rt===null?Ze=it:rt.sibling=it,rt=it);return Wt&&da(ie,ot),Ze}for(it=d(ie,it);ot<se.length;ot++)_r=Ue(it,ie,ot,se[ot],Ee),_r!==null&&(i&&_r.alternate!==null&&it.delete(_r.key===null?ot:_r.key),Y=_(_r,Y,ot),rt===null?Ze=_r:rt.sibling=_r,rt=_r);return i&&it.forEach(function(jn){return a(ie,jn)}),Wt&&da(ie,ot),Ze}function Ke(ie,Y,se,Ee){var Ze=$(se);if(typeof Ze!="function")throw Error(t(150));if(se=Ze.call(se),se==null)throw Error(t(151));for(var rt=Ze=null,it=Y,ot=Y=0,_r=null,At=se.next();it!==null&&!At.done;ot++,At=se.next()){it.index>ot?(_r=it,it=null):_r=it.sibling;var jn=ve(ie,it,At.value,Ee);if(jn===null){it===null&&(it=_r);break}i&&it&&jn.alternate===null&&a(ie,it),Y=_(jn,Y,ot),rt===null?Ze=jn:rt.sibling=jn,rt=jn,it=_r}if(At.done)return l(ie,it),Wt&&da(ie,ot),Ze;if(it===null){for(;!At.done;ot++,At=se.next())At=be(ie,At.value,Ee),At!==null&&(Y=_(At,Y,ot),rt===null?Ze=At:rt.sibling=At,rt=At);return Wt&&da(ie,ot),Ze}for(it=d(ie,it);!At.done;ot++,At=se.next())At=Ue(it,ie,ot,At.value,Ee),At!==null&&(i&&At.alternate!==null&&it.delete(At.key===null?ot:At.key),Y=_(At,Y,ot),rt===null?Ze=At:rt.sibling=At,rt=At);return i&&it.forEach(function(Bb){return a(ie,Bb)}),Wt&&da(ie,ot),Ze}function rr(ie,Y,se,Ee){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case L:e:{for(var Ze=se.key,rt=Y;rt!==null;){if(rt.key===Ze){if(Ze=se.type,Ze===k){if(rt.tag===7){l(ie,rt.sibling),Y=m(rt,se.props.children),Y.return=ie,ie=Y;break e}}else if(rt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&hg(Ze)===rt.type){l(ie,rt.sibling),Y=m(rt,se.props),Y.ref=co(ie,rt,se),Y.return=ie,ie=Y;break e}l(ie,rt);break}else a(ie,rt);rt=rt.sibling}se.type===k?(Y=ya(se.props.children,ie.mode,Ee,se.key),Y.return=ie,ie=Y):(Ee=ru(se.type,se.key,se.props,null,ie.mode,Ee),Ee.ref=co(ie,Y,se),Ee.return=ie,ie=Ee)}return A(ie);case D:e:{for(rt=se.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){l(ie,Y.sibling),Y=m(Y,se.children||[]),Y.return=ie,ie=Y;break e}else{l(ie,Y);break}else a(ie,Y);Y=Y.sibling}Y=nh(se,ie.mode,Ee),Y.return=ie,ie=Y}return A(ie);case fe:return rt=se._init,rr(ie,Y,rt(se._payload),Ee)}if(ir(se))return Xe(ie,Y,se,Ee);if($(se))return Ke(ie,Y,se,Ee);Dl(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(l(ie,Y.sibling),Y=m(Y,se),Y.return=ie,ie=Y):(l(ie,Y),Y=ih(se,ie.mode,Ee),Y.return=ie,ie=Y),A(ie)):l(ie,Y)}return rr}var Ja=fg(!0),pg=fg(!1),Nl=In(null),Il=null,es=null,pd=null;function md(){pd=es=Il=null}function gd(i){var a=Nl.current;Vt(Nl),i._currentValue=a}function vd(i,a,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,d!==null&&(d.childLanes|=a)):d!==null&&(d.childLanes&a)!==a&&(d.childLanes|=a),i===l)break;i=i.return}}function ts(i,a){Il=i,pd=es=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Wr=!0),i.firstContext=null)}function ci(i){var a=i._currentValue;if(pd!==i)if(i={context:i,memoizedValue:a,next:null},es===null){if(Il===null)throw Error(t(308));es=i,Il.dependencies={lanes:0,firstContext:i}}else es=es.next=i;return a}var ha=null;function _d(i){ha===null?ha=[i]:ha.push(i)}function mg(i,a,l,d){var m=a.interleaved;return m===null?(l.next=l,_d(a)):(l.next=m.next,m.next=l),a.interleaved=l,fn(i,d)}function fn(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var On=!1;function yd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function pn(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function Fn(i,a,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Mt&2)!==0){var m=d.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),d.pending=a,fn(i,l)}return m=d.interleaved,m===null?(a.next=a,_d(d)):(a.next=m.next,m.next=a),d.interleaved=a,fn(i,l)}function Ul(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var d=a.lanes;d&=i.pendingLanes,l|=d,a.lanes=l,Tr(i,l)}}function vg(i,a){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?m=_=a:_=_.next=a}else m=_=a;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function kl(i,a,l,d){var m=i.updateQueue;On=!1;var _=m.firstBaseUpdate,A=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var V=z,he=V.next;V.next=null,A===null?_=he:A.next=he,A=V;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,z=ye.lastBaseUpdate,z!==A&&(z===null?ye.firstBaseUpdate=he:z.next=he,ye.lastBaseUpdate=V))}if(_!==null){var be=m.baseState;A=0,ye=he=V=null,z=_;do{var ve=z.lane,Ue=z.eventTime;if((d&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Xe=i,Ke=z;switch(ve=a,Ue=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){be=Xe.call(Ue,be,ve);break e}be=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,ve=typeof Xe=="function"?Xe.call(Ue,be,ve):Xe,ve==null)break e;be=q({},be,ve);break e;case 2:On=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,ve=m.effects,ve===null?m.effects=[z]:ve.push(z))}else Ue={eventTime:Ue,lane:ve,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ye===null?(he=ye=Ue,V=be):ye=ye.next=Ue,A|=ve;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;ve=z,z=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(ye===null&&(V=be),m.baseState=V,m.firstBaseUpdate=he,m.lastBaseUpdate=ye,a=m.shared.interleaved,a!==null){m=a;do A|=m.lane,m=m.next;while(m!==a)}else _===null&&(m.shared.lanes=0);ma|=A,i.lanes=A,i.memoizedState=be}}function _g(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var d=i[a],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var ho={},Wi=In(ho),fo=In(ho),po=In(ho);function fa(i){if(i===ho)throw Error(t(174));return i}function xd(i,a){switch(kt(po,a),kt(fo,i),kt(Wi,ho),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:E(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=E(a,i)}Vt(Wi),kt(Wi,a)}function rs(){Vt(Wi),Vt(fo),Vt(po)}function yg(i){fa(po.current);var a=fa(Wi.current),l=E(a,i.type);a!==l&&(kt(fo,i),kt(Wi,l))}function Sd(i){fo.current===i&&(Vt(Wi),Vt(fo))}var Yt=In(0);function Ol(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var bd=[];function Md(){for(var i=0;i<bd.length;i++)bd[i]._workInProgressVersionPrimary=null;bd.length=0}var Fl=T.ReactCurrentDispatcher,Ed=T.ReactCurrentBatchConfig,pa=0,qt=null,ur=null,gr=null,zl=!1,mo=!1,go=0,lb=0;function Rr(){throw Error(t(321))}function wd(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!Ei(i[l],a[l]))return!1;return!0}function Td(i,a,l,d,m,_){if(pa=_,qt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Fl.current=i===null||i.memoizedState===null?hb:fb,i=l(d,m),mo){_=0;do{if(mo=!1,go=0,25<=_)throw Error(t(301));_+=1,gr=ur=null,a.updateQueue=null,Fl.current=pb,i=l(d,m)}while(mo)}if(Fl.current=Hl,a=ur!==null&&ur.next!==null,pa=0,gr=ur=qt=null,zl=!1,a)throw Error(t(300));return i}function Ad(){var i=go!==0;return go=0,i}function ji(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gr===null?qt.memoizedState=gr=i:gr=gr.next=i,gr}function di(){if(ur===null){var i=qt.alternate;i=i!==null?i.memoizedState:null}else i=ur.next;var a=gr===null?qt.memoizedState:gr.next;if(a!==null)gr=a,ur=i;else{if(i===null)throw Error(t(310));ur=i,i={memoizedState:ur.memoizedState,baseState:ur.baseState,baseQueue:ur.baseQueue,queue:ur.queue,next:null},gr===null?qt.memoizedState=gr=i:gr=gr.next=i}return gr}function vo(i,a){return typeof a=="function"?a(i):a}function Rd(i){var a=di(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=ur,m=d.baseQueue,_=l.pending;if(_!==null){if(m!==null){var A=m.next;m.next=_.next,_.next=A}d.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,d=d.baseState;var z=A=null,V=null,he=_;do{var ye=he.lane;if((pa&ye)===ye)V!==null&&(V=V.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),d=he.hasEagerState?he.eagerState:i(d,he.action);else{var be={lane:ye,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};V===null?(z=V=be,A=d):V=V.next=be,qt.lanes|=ye,ma|=ye}he=he.next}while(he!==null&&he!==_);V===null?A=d:V.next=z,Ei(d,a.memoizedState)||(Wr=!0),a.memoizedState=d,a.baseState=A,a.baseQueue=V,l.lastRenderedState=d}if(i=l.interleaved,i!==null){m=i;do _=m.lane,qt.lanes|=_,ma|=_,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function Cd(i){var a=di(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,m=l.pending,_=a.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do _=i(_,A.action),A=A.next;while(A!==m);Ei(_,a.memoizedState)||(Wr=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,d]}function xg(){}function Sg(i,a){var l=qt,d=di(),m=a(),_=!Ei(d.memoizedState,m);if(_&&(d.memoizedState=m,Wr=!0),d=d.queue,Pd(Eg.bind(null,l,d,i),[i]),d.getSnapshot!==a||_||gr!==null&&gr.memoizedState.tag&1){if(l.flags|=2048,_o(9,Mg.bind(null,l,d,m,a),void 0,null),vr===null)throw Error(t(349));(pa&30)!==0||bg(l,a,m)}return m}function bg(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=qt.updateQueue,a===null?(a={lastEffect:null,stores:null},qt.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function Mg(i,a,l,d){a.value=l,a.getSnapshot=d,wg(a)&&Tg(i)}function Eg(i,a,l){return l(function(){wg(a)&&Tg(i)})}function wg(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!Ei(i,l)}catch{return!0}}function Tg(i){var a=fn(i,1);a!==null&&Ci(a,i,1,-1)}function Ag(i){var a=ji();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:i},a.queue=i,i=i.dispatch=db.bind(null,qt,i),[a.memoizedState,i]}function _o(i,a,l,d){return i={tag:i,create:a,destroy:l,deps:d,next:null},a=qt.updateQueue,a===null?(a={lastEffect:null,stores:null},qt.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,a.lastEffect=i)),i}function Rg(){return di().memoizedState}function Bl(i,a,l,d){var m=ji();qt.flags|=i,m.memoizedState=_o(1|a,l,void 0,d===void 0?null:d)}function Vl(i,a,l,d){var m=di();d=d===void 0?null:d;var _=void 0;if(ur!==null){var A=ur.memoizedState;if(_=A.destroy,d!==null&&wd(d,A.deps)){m.memoizedState=_o(a,l,_,d);return}}qt.flags|=i,m.memoizedState=_o(1|a,l,_,d)}function Cg(i,a){return Bl(8390656,8,i,a)}function Pd(i,a){return Vl(2048,8,i,a)}function Pg(i,a){return Vl(4,2,i,a)}function Lg(i,a){return Vl(4,4,i,a)}function Dg(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Ng(i,a,l){return l=l!=null?l.concat([i]):null,Vl(4,4,Dg.bind(null,a,i),l)}function Ld(){}function Ig(i,a){var l=di();a=a===void 0?null:a;var d=l.memoizedState;return d!==null&&a!==null&&wd(a,d[1])?d[0]:(l.memoizedState=[i,a],i)}function Ug(i,a){var l=di();a=a===void 0?null:a;var d=l.memoizedState;return d!==null&&a!==null&&wd(a,d[1])?d[0]:(i=i(),l.memoizedState=[i,a],i)}function kg(i,a,l){return(pa&21)===0?(i.baseState&&(i.baseState=!1,Wr=!0),i.memoizedState=l):(Ei(l,a)||(l=zt(),qt.lanes|=l,ma|=l,i.baseState=!0),a)}function ub(i,a){var l=ht;ht=l!==0&&4>l?l:4,i(!0);var d=Ed.transition;Ed.transition={};try{i(!1),a()}finally{ht=l,Ed.transition=d}}function Og(){return di().memoizedState}function cb(i,a,l){var d=Hn(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Fg(i))zg(a,l);else if(l=mg(i,a,l,d),l!==null){var m=kr();Ci(l,i,d,m),Bg(l,a,d)}}function db(i,a,l){var d=Hn(i),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Fg(i))zg(a,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,z=_(A,l);if(m.hasEagerState=!0,m.eagerState=z,Ei(z,A)){var V=a.interleaved;V===null?(m.next=m,_d(a)):(m.next=V.next,V.next=m),a.interleaved=m;return}}catch{}finally{}l=mg(i,a,m,d),l!==null&&(m=kr(),Ci(l,i,d,m),Bg(l,a,d))}}function Fg(i){var a=i.alternate;return i===qt||a!==null&&a===qt}function zg(i,a){mo=zl=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Bg(i,a,l){if((l&4194240)!==0){var d=a.lanes;d&=i.pendingLanes,l|=d,a.lanes=l,Tr(i,l)}}var Hl={readContext:ci,useCallback:Rr,useContext:Rr,useEffect:Rr,useImperativeHandle:Rr,useInsertionEffect:Rr,useLayoutEffect:Rr,useMemo:Rr,useReducer:Rr,useRef:Rr,useState:Rr,useDebugValue:Rr,useDeferredValue:Rr,useTransition:Rr,useMutableSource:Rr,useSyncExternalStore:Rr,useId:Rr,unstable_isNewReconciler:!1},hb={readContext:ci,useCallback:function(i,a){return ji().memoizedState=[i,a===void 0?null:a],i},useContext:ci,useEffect:Cg,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,Bl(4194308,4,Dg.bind(null,a,i),l)},useLayoutEffect:function(i,a){return Bl(4194308,4,i,a)},useInsertionEffect:function(i,a){return Bl(4,2,i,a)},useMemo:function(i,a){var l=ji();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var d=ji();return a=l!==void 0?l(a):a,d.memoizedState=d.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},d.queue=i,i=i.dispatch=cb.bind(null,qt,i),[d.memoizedState,i]},useRef:function(i){var a=ji();return i={current:i},a.memoizedState=i},useState:Ag,useDebugValue:Ld,useDeferredValue:function(i){return ji().memoizedState=i},useTransition:function(){var i=Ag(!1),a=i[0];return i=ub.bind(null,i[1]),ji().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var d=qt,m=ji();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),vr===null)throw Error(t(349));(pa&30)!==0||bg(d,a,l)}m.memoizedState=l;var _={value:l,getSnapshot:a};return m.queue=_,Cg(Eg.bind(null,d,_,i),[i]),d.flags|=2048,_o(9,Mg.bind(null,d,_,l,a),void 0,null),l},useId:function(){var i=ji(),a=vr.identifierPrefix;if(Wt){var l=hn,d=dn;l=(d&~(1<<32-Ce(d)-1)).toString(32)+l,a=":"+a+"R"+l,l=go++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=lb++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},fb={readContext:ci,useCallback:Ig,useContext:ci,useEffect:Pd,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:Rd,useRef:Rg,useState:function(){return Rd(vo)},useDebugValue:Ld,useDeferredValue:function(i){var a=di();return kg(a,ur.memoizedState,i)},useTransition:function(){var i=Rd(vo)[0],a=di().memoizedState;return[i,a]},useMutableSource:xg,useSyncExternalStore:Sg,useId:Og,unstable_isNewReconciler:!1},pb={readContext:ci,useCallback:Ig,useContext:ci,useEffect:Pd,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:Cd,useRef:Rg,useState:function(){return Cd(vo)},useDebugValue:Ld,useDeferredValue:function(i){var a=di();return ur===null?a.memoizedState=i:kg(a,ur.memoizedState,i)},useTransition:function(){var i=Cd(vo)[0],a=di().memoizedState;return[i,a]},useMutableSource:xg,useSyncExternalStore:Sg,useId:Og,unstable_isNewReconciler:!1};function Ti(i,a){if(i&&i.defaultProps){a=q({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function Dd(i,a,l,d){a=i.memoizedState,l=l(d,a),l=l==null?a:q({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Gl={isMounted:function(i){return(i=i._reactInternals)?Ir(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var d=kr(),m=Hn(i),_=pn(d,m);_.payload=a,l!=null&&(_.callback=l),a=Fn(i,_,m),a!==null&&(Ci(a,i,m,d),Ul(a,i,m))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var d=kr(),m=Hn(i),_=pn(d,m);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=Fn(i,_,m),a!==null&&(Ci(a,i,m,d),Ul(a,i,m))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=kr(),d=Hn(i),m=pn(l,d);m.tag=2,a!=null&&(m.callback=a),a=Fn(i,m,d),a!==null&&(Ci(a,i,d,l),Ul(a,i,d))}};function Vg(i,a,l,d,m,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,A):a.prototype&&a.prototype.isPureReactComponent?!io(l,d)||!io(m,_):!0}function Hg(i,a,l){var d=!1,m=Un,_=a.contextType;return typeof _=="object"&&_!==null?_=ci(_):(m=Gr(a)?ua:Ar.current,d=a.contextTypes,_=(d=d!=null)?Ka(i,m):Un),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gl,i.stateNode=a,a._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),a}function Gg(i,a,l,d){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,d),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,d),a.state!==i&&Gl.enqueueReplaceState(a,a.state,null)}function Nd(i,a,l,d){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},yd(i);var _=a.contextType;typeof _=="object"&&_!==null?m.context=ci(_):(_=Gr(a)?ua:Ar.current,m.context=Ka(i,_)),m.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Dd(i,a,_,l),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&Gl.enqueueReplaceState(m,m.state,null),kl(i,l,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function is(i,a){try{var l="",d=a;do l+=ze(d),d=d.return;while(d);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:m,digest:null}}function Id(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function Ud(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var mb=typeof WeakMap=="function"?WeakMap:Map;function Wg(i,a,l){l=pn(-1,l),l.tag=3,l.payload={element:null};var d=a.value;return l.callback=function(){$l||($l=!0,Kd=d),Ud(i,a)},l}function jg(i,a,l){l=pn(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=a.value;l.payload=function(){return d(m)},l.callback=function(){Ud(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Ud(i,a),typeof d!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),l}function Xg(i,a,l){var d=i.pingCache;if(d===null){d=i.pingCache=new mb;var m=new Set;d.set(a,m)}else m=d.get(a),m===void 0&&(m=new Set,d.set(a,m));m.has(l)||(m.add(l),i=Cb.bind(null,i,a,l),a.then(i,i))}function Yg(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function qg(i,a,l,d,m){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=pn(-1,1),a.tag=2,Fn(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var gb=T.ReactCurrentOwner,Wr=!1;function Ur(i,a,l,d){a.child=i===null?pg(a,null,l,d):Ja(a,i.child,l,d)}function Kg(i,a,l,d,m){l=l.render;var _=a.ref;return ts(a,m),d=Td(i,a,l,d,_,m),l=Ad(),i!==null&&!Wr?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~m,mn(i,a,m)):(Wt&&l&&ud(a),a.flags|=1,Ur(i,a,d,m),a.child)}function $g(i,a,l,d,m){if(i===null){var _=l.type;return typeof _=="function"&&!rh(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,Zg(i,a,_,d,m)):(i=ru(l.type,null,d,a,a.mode,m),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&m)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:io,l(A,d)&&i.ref===a.ref)return mn(i,a,m)}return a.flags|=1,i=Wn(_,d),i.ref=a.ref,i.return=a,a.child=i}function Zg(i,a,l,d,m){if(i!==null){var _=i.memoizedProps;if(io(_,d)&&i.ref===a.ref)if(Wr=!1,a.pendingProps=d=_,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Wr=!0);else return a.lanes=i.lanes,mn(i,a,m)}return kd(i,a,l,d,m)}function Qg(i,a,l){var d=a.pendingProps,m=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(as,ti),ti|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,kt(as,ti),ti|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,kt(as,ti),ti|=d}else _!==null?(d=_.baseLanes|l,a.memoizedState=null):d=l,kt(as,ti),ti|=d;return Ur(i,a,m,l),a.child}function Jg(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function kd(i,a,l,d,m){var _=Gr(l)?ua:Ar.current;return _=Ka(a,_),ts(a,m),l=Td(i,a,l,d,_,m),d=Ad(),i!==null&&!Wr?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~m,mn(i,a,m)):(Wt&&d&&ud(a),a.flags|=1,Ur(i,a,l,m),a.child)}function ev(i,a,l,d,m){if(Gr(l)){var _=!0;Al(a)}else _=!1;if(ts(a,m),a.stateNode===null)jl(i,a),Hg(a,l,d),Nd(a,l,d,m),d=!0;else if(i===null){var A=a.stateNode,z=a.memoizedProps;A.props=z;var V=A.context,he=l.contextType;typeof he=="object"&&he!==null?he=ci(he):(he=Gr(l)?ua:Ar.current,he=Ka(a,he));var ye=l.getDerivedStateFromProps,be=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";be||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==d||V!==he)&&Gg(a,A,d,he),On=!1;var ve=a.memoizedState;A.state=ve,kl(a,d,A,m),V=a.memoizedState,z!==d||ve!==V||Hr.current||On?(typeof ye=="function"&&(Dd(a,l,ye,d),V=a.memoizedState),(z=On||Vg(a,l,z,d,ve,V,he))?(be||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=d,a.memoizedState=V),A.props=d,A.state=V,A.context=he,d=z):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),d=!1)}else{A=a.stateNode,gg(i,a),z=a.memoizedProps,he=a.type===a.elementType?z:Ti(a.type,z),A.props=he,be=a.pendingProps,ve=A.context,V=l.contextType,typeof V=="object"&&V!==null?V=ci(V):(V=Gr(l)?ua:Ar.current,V=Ka(a,V));var Ue=l.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==be||ve!==V)&&Gg(a,A,d,V),On=!1,ve=a.memoizedState,A.state=ve,kl(a,d,A,m);var Xe=a.memoizedState;z!==be||ve!==Xe||Hr.current||On?(typeof Ue=="function"&&(Dd(a,l,Ue,d),Xe=a.memoizedState),(he=On||Vg(a,l,he,d,ve,Xe,V)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,Xe,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,Xe,V)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&ve===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&ve===i.memoizedState||(a.flags|=1024),a.memoizedProps=d,a.memoizedState=Xe),A.props=d,A.state=Xe,A.context=V,d=he):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&ve===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&ve===i.memoizedState||(a.flags|=1024),d=!1)}return Od(i,a,l,d,_,m)}function Od(i,a,l,d,m,_){Jg(i,a);var A=(a.flags&128)!==0;if(!d&&!A)return m&&ag(a,l,!1),mn(i,a,_);d=a.stateNode,gb.current=a;var z=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return a.flags|=1,i!==null&&A?(a.child=Ja(a,i.child,null,_),a.child=Ja(a,null,z,_)):Ur(i,a,z,_),a.memoizedState=d.state,m&&ag(a,l,!0),a.child}function tv(i){var a=i.stateNode;a.pendingContext?ig(i,a.pendingContext,a.pendingContext!==a.context):a.context&&ig(i,a.context,!1),xd(i,a.containerInfo)}function rv(i,a,l,d,m){return Qa(),fd(m),a.flags|=256,Ur(i,a,l,d),a.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function zd(i){return{baseLanes:i,cachePool:null,transitions:null}}function iv(i,a,l){var d=a.pendingProps,m=Yt.current,_=!1,A=(a.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(m&2)!==0),z?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),kt(Yt,m&1),i===null)return hd(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(A=d.children,i=d.fallback,_?(d=a.mode,_=a.child,A={mode:"hidden",children:A},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=iu(A,d,0,null),i=ya(i,d,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=zd(l),a.memoizedState=Fd,i):Bd(a,A));if(m=i.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return vb(i,a,A,d,z,m,l);if(_){_=d.fallback,A=a.mode,m=i.child,z=m.sibling;var V={mode:"hidden",children:d.children};return(A&1)===0&&a.child!==m?(d=a.child,d.childLanes=0,d.pendingProps=V,a.deletions=null):(d=Wn(m,V),d.subtreeFlags=m.subtreeFlags&14680064),z!==null?_=Wn(z,_):(_=ya(_,A,l,null),_.flags|=2),_.return=a,d.return=a,d.sibling=_,a.child=d,d=_,_=a.child,A=i.child.memoizedState,A=A===null?zd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,a.memoizedState=Fd,d}return _=i.child,i=_.sibling,d=Wn(_,{mode:"visible",children:d.children}),(a.mode&1)===0&&(d.lanes=l),d.return=a,d.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=d,a.memoizedState=null,d}function Bd(i,a){return a=iu({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function Wl(i,a,l,d){return d!==null&&fd(d),Ja(a,i.child,null,l),i=Bd(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function vb(i,a,l,d,m,_,A){if(l)return a.flags&256?(a.flags&=-257,d=Id(Error(t(422))),Wl(i,a,A,d)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=d.fallback,m=a.mode,d=iu({mode:"visible",children:d.children},m,0,null),_=ya(_,m,A,null),_.flags|=2,d.return=a,_.return=a,d.sibling=_,a.child=d,(a.mode&1)!==0&&Ja(a,i.child,null,A),a.child.memoizedState=zd(A),a.memoizedState=Fd,_);if((a.mode&1)===0)return Wl(i,a,A,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var z=d.dgst;return d=z,_=Error(t(419)),d=Id(_,d,void 0),Wl(i,a,A,d)}if(z=(A&i.childLanes)!==0,Wr||z){if(d=vr,d!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|A))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,fn(i,m),Ci(d,i,m,-1))}return th(),d=Id(Error(t(421))),Wl(i,a,A,d)}return m.data==="$?"?(a.flags|=128,a.child=i.child,a=Pb.bind(null,i),m._reactRetry=a,null):(i=_.treeContext,ei=Nn(m.nextSibling),Jr=a,Wt=!0,wi=null,i!==null&&(li[ui++]=dn,li[ui++]=hn,li[ui++]=ca,dn=i.id,hn=i.overflow,ca=a),a=Bd(a,d.children),a.flags|=4096,a)}function nv(i,a,l){i.lanes|=a;var d=i.alternate;d!==null&&(d.lanes|=a),vd(i.return,a,l)}function Vd(i,a,l,d,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=m)}function av(i,a,l){var d=a.pendingProps,m=d.revealOrder,_=d.tail;if(Ur(i,a,d.children,l),d=Yt.current,(d&2)!==0)d=d&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&nv(i,l,a);else if(i.tag===19)nv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(kt(Yt,d),(a.mode&1)===0)a.memoizedState=null;else switch(m){case"forwards":for(l=a.child,m=null;l!==null;)i=l.alternate,i!==null&&Ol(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=a.child,a.child=null):(m=l.sibling,l.sibling=null),Vd(a,!1,m,l,_);break;case"backwards":for(l=null,m=a.child,a.child=null;m!==null;){if(i=m.alternate,i!==null&&Ol(i)===null){a.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Vd(a,!0,l,null,_);break;case"together":Vd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function jl(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function mn(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),ma|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=Wn(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=Wn(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function _b(i,a,l){switch(a.tag){case 3:tv(a),Qa();break;case 5:yg(a);break;case 1:Gr(a.type)&&Al(a);break;case 4:xd(a,a.stateNode.containerInfo);break;case 10:var d=a.type._context,m=a.memoizedProps.value;kt(Nl,d._currentValue),d._currentValue=m;break;case 13:if(d=a.memoizedState,d!==null)return d.dehydrated!==null?(kt(Yt,Yt.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?iv(i,a,l):(kt(Yt,Yt.current&1),i=mn(i,a,l),i!==null?i.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(d=(l&a.childLanes)!==0,(i.flags&128)!==0){if(d)return av(i,a,l);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),kt(Yt,Yt.current),d)break;return null;case 22:case 23:return a.lanes=0,Qg(i,a,l)}return mn(i,a,l)}var sv,Hd,ov,lv;sv=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hd=function(){},ov=function(i,a,l,d){var m=i.memoizedProps;if(m!==d){i=a.stateNode,fa(Wi.current);var _=null;switch(l){case"input":m=gt(i,m),d=gt(i,d),_=[];break;case"select":m=q({},m,{value:void 0}),d=q({},d,{value:void 0}),_=[];break;case"textarea":m=Ht(i,m),d=Ht(i,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=El)}Ve(l,d);var A;l=null;for(he in m)if(!d.hasOwnProperty(he)&&m.hasOwnProperty(he)&&m[he]!=null)if(he==="style"){var z=m[he];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?_||(_=[]):(_=_||[]).push(he,null));for(he in d){var V=d[he];if(z=m!=null?m[he]:void 0,d.hasOwnProperty(he)&&V!==z&&(V!=null||z!=null))if(he==="style")if(z){for(A in z)!z.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in V)V.hasOwnProperty(A)&&z[A]!==V[A]&&(l||(l={}),l[A]=V[A])}else l||(_||(_=[]),_.push(he,l)),l=V;else he==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,z=z?z.__html:void 0,V!=null&&z!==V&&(_=_||[]).push(he,V)):he==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(he,""+V):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(V!=null&&he==="onScroll"&&Bt("scroll",i),_||z===V||(_=[])):(_=_||[]).push(he,V))}l&&(_=_||[]).push("style",l);var he=_;(a.updateQueue=he)&&(a.flags|=4)}},lv=function(i,a,l,d){l!==d&&(a.flags|=4)};function yo(i,a){if(!Wt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Cr(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(a)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=l,a}function yb(i,a,l){var d=a.pendingProps;switch(cd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cr(a),null;case 1:return Gr(a.type)&&Tl(),Cr(a),null;case 3:return d=a.stateNode,rs(),Vt(Hr),Vt(Ar),Md(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Ll(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,wi!==null&&(Qd(wi),wi=null))),Hd(i,a),Cr(a),null;case 5:Sd(a);var m=fa(po.current);if(l=a.type,i!==null&&a.stateNode!=null)ov(i,a,l,d,m),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!d){if(a.stateNode===null)throw Error(t(166));return Cr(a),null}if(i=fa(Wi.current),Ll(a)){d=a.stateNode,l=a.type;var _=a.memoizedProps;switch(d[Gi]=a,d[lo]=_,i=(a.mode&1)!==0,l){case"dialog":Bt("cancel",d),Bt("close",d);break;case"iframe":case"object":case"embed":Bt("load",d);break;case"video":case"audio":for(m=0;m<ao.length;m++)Bt(ao[m],d);break;case"source":Bt("error",d);break;case"img":case"image":case"link":Bt("error",d),Bt("load",d);break;case"details":Bt("toggle",d);break;case"input":ut(d,_),Bt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Bt("invalid",d);break;case"textarea":X(d,_),Bt("invalid",d)}Ve(l,_),m=null;for(var A in _)if(_.hasOwnProperty(A)){var z=_[A];A==="children"?typeof z=="string"?d.textContent!==z&&(_.suppressHydrationWarning!==!0&&Ml(d.textContent,z,i),m=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&Ml(d.textContent,z,i),m=["children",""+z]):s.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Bt("scroll",d)}switch(l){case"input":Ie(d),jt(d,_,!0);break;case"textarea":Ie(d),wt(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=El)}d=m,a.updateQueue=d,d!==null&&(a.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=O(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(l,{is:d.is}):(i=A.createElement(l),l==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,l),i[Gi]=a,i[lo]=d,sv(i,a,!1,!1),a.stateNode=i;e:{switch(A=xe(l,d),l){case"dialog":Bt("cancel",i),Bt("close",i),m=d;break;case"iframe":case"object":case"embed":Bt("load",i),m=d;break;case"video":case"audio":for(m=0;m<ao.length;m++)Bt(ao[m],i);m=d;break;case"source":Bt("error",i),m=d;break;case"img":case"image":case"link":Bt("error",i),Bt("load",i),m=d;break;case"details":Bt("toggle",i),m=d;break;case"input":ut(i,d),m=gt(i,d),Bt("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=q({},d,{value:void 0}),Bt("invalid",i);break;case"textarea":X(i,d),m=Ht(i,d),Bt("invalid",i);break;default:m=d}Ve(l,m),z=m;for(_ in z)if(z.hasOwnProperty(_)){var V=z[_];_==="style"?Ae(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&oe(i,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&de(i,V):typeof V=="number"&&de(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Bt("scroll",i):V!=null&&I(i,_,V,A))}switch(l){case"input":Ie(i),jt(i,d,!1);break;case"textarea":Ie(i),wt(i);break;case"option":d.value!=null&&i.setAttribute("value",""+ce(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Lt(i,!!d.multiple,_,!1):d.defaultValue!=null&&Lt(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=El)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Cr(a),null;case 6:if(i&&a.stateNode!=null)lv(i,a,i.memoizedProps,d);else{if(typeof d!="string"&&a.stateNode===null)throw Error(t(166));if(l=fa(po.current),fa(Wi.current),Ll(a)){if(d=a.stateNode,l=a.memoizedProps,d[Gi]=a,(_=d.nodeValue!==l)&&(i=Jr,i!==null))switch(i.tag){case 3:Ml(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ml(d.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Gi]=a,a.stateNode=d}return Cr(a),null;case 13:if(Vt(Yt),d=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&ei!==null&&(a.mode&1)!==0&&(a.flags&128)===0)dg(),Qa(),a.flags|=98560,_=!1;else if(_=Ll(a),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Gi]=a}else Qa(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Cr(a),_=!1}else wi!==null&&(Qd(wi),wi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(Yt.current&1)!==0?cr===0&&(cr=3):th())),a.updateQueue!==null&&(a.flags|=4),Cr(a),null);case 4:return rs(),Hd(i,a),i===null&&so(a.stateNode.containerInfo),Cr(a),null;case 10:return gd(a.type._context),Cr(a),null;case 17:return Gr(a.type)&&Tl(),Cr(a),null;case 19:if(Vt(Yt),_=a.memoizedState,_===null)return Cr(a),null;if(d=(a.flags&128)!==0,A=_.rendering,A===null)if(d)yo(_,!1);else{if(cr!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(A=Ol(i),A!==null){for(a.flags|=128,yo(_,!1),d=A.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),a.subtreeFlags=0,d=l,l=a.child;l!==null;)_=l,i=d,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return kt(Yt,Yt.current&1|2),a.child}i=i.sibling}_.tail!==null&&Xt()>ss&&(a.flags|=128,d=!0,yo(_,!1),a.lanes=4194304)}else{if(!d)if(i=Ol(A),i!==null){if(a.flags|=128,d=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),yo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Wt)return Cr(a),null}else 2*Xt()-_.renderingStartTime>ss&&l!==1073741824&&(a.flags|=128,d=!0,yo(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(l=_.last,l!==null?l.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=Xt(),a.sibling=null,l=Yt.current,kt(Yt,d?l&1|2:l&1),a):(Cr(a),null);case 22:case 23:return eh(),d=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(a.flags|=8192),d&&(a.mode&1)!==0?(ti&1073741824)!==0&&(Cr(a),a.subtreeFlags&6&&(a.flags|=8192)):Cr(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function xb(i,a){switch(cd(a),a.tag){case 1:return Gr(a.type)&&Tl(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return rs(),Vt(Hr),Vt(Ar),Md(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Sd(a),null;case 13:if(Vt(Yt),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Qa()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Vt(Yt),null;case 4:return rs(),null;case 10:return gd(a.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var Xl=!1,Pr=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ns(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Zt(i,a,d)}else l.current=null}function uv(i,a,l){try{l()}catch(d){Zt(i,a,d)}}var cv=!1;function bb(i,a){if(td=hl,i=Vm(),Yc(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,z=-1,V=-1,he=0,ye=0,be=i,ve=null;t:for(;;){for(var Ue;be!==l||m!==0&&be.nodeType!==3||(z=A+m),be!==_||d!==0&&be.nodeType!==3||(V=A+d),be.nodeType===3&&(A+=be.nodeValue.length),(Ue=be.firstChild)!==null;)ve=be,be=Ue;for(;;){if(be===i)break t;if(ve===l&&++he===m&&(z=A),ve===_&&++ye===d&&(V=A),(Ue=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Ue}l=z===-1||V===-1?null:{start:z,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(rd={focusedElem:i,selectionRange:l},hl=!1,Be=a;Be!==null;)if(a=Be,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Be=i;else for(;Be!==null;){a=Be;try{var Xe=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,rr=Xe.memoizedState,ie=a.stateNode,Y=ie.getSnapshotBeforeUpdate(a.elementType===a.type?Ke:Ti(a.type,Ke),rr);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=a.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Zt(a,a.return,Ee)}if(i=a.sibling,i!==null){i.return=a.return,Be=i;break}Be=a.return}return Xe=cv,cv=!1,Xe}function xo(i,a,l){var d=a.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&uv(a,l,_)}m=m.next}while(m!==d)}}function Yl(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==a)}}function Gd(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function dv(i){var a=i.alternate;a!==null&&(i.alternate=null,dv(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[Gi],delete a[lo],delete a[sd],delete a[nb],delete a[ab])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function hv(i){return i.tag===5||i.tag===3||i.tag===4}function fv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||hv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Wd(i,a,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=El));else if(d!==4&&(i=i.child,i!==null))for(Wd(i,a,l),i=i.sibling;i!==null;)Wd(i,a,l),i=i.sibling}function jd(i,a,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(jd(i,a,l),i=i.sibling;i!==null;)jd(i,a,l),i=i.sibling}var br=null,Ai=!1;function zn(i,a,l){for(l=l.child;l!==null;)pv(i,a,l),l=l.sibling}function pv(i,a,l){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:Pr||ns(l,a);case 6:var d=br,m=Ai;br=null,zn(i,a,l),br=d,Ai=m,br!==null&&(Ai?(i=br,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):br.removeChild(l.stateNode));break;case 18:br!==null&&(Ai?(i=br,l=l.stateNode,i.nodeType===8?ad(i.parentNode,l):i.nodeType===1&&ad(i,l),Zs(i)):ad(br,l.stateNode));break;case 4:d=br,m=Ai,br=l.stateNode.containerInfo,Ai=!0,zn(i,a,l),br=d,Ai=m;break;case 0:case 11:case 14:case 15:if(!Pr&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&uv(l,a,A),m=m.next}while(m!==d)}zn(i,a,l);break;case 1:if(!Pr&&(ns(l,a),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){Zt(l,a,z)}zn(i,a,l);break;case 21:zn(i,a,l);break;case 22:l.mode&1?(Pr=(d=Pr)||l.memoizedState!==null,zn(i,a,l),Pr=d):zn(i,a,l);break;default:zn(i,a,l)}}function mv(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Sb),a.forEach(function(d){var m=Lb.bind(null,i,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Ri(i,a){var l=a.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var _=i,A=a,z=A;e:for(;z!==null;){switch(z.tag){case 5:br=z.stateNode,Ai=!1;break e;case 3:br=z.stateNode.containerInfo,Ai=!0;break e;case 4:br=z.stateNode.containerInfo,Ai=!0;break e}z=z.return}if(br===null)throw Error(t(160));pv(_,A,m),br=null,Ai=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(he){Zt(m,a,he)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)gv(a,i),a=a.sibling}function gv(i,a){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ri(a,i),Xi(i),d&4){try{xo(3,i,i.return),Yl(3,i)}catch(Ke){Zt(i,i.return,Ke)}try{xo(5,i,i.return)}catch(Ke){Zt(i,i.return,Ke)}}break;case 1:Ri(a,i),Xi(i),d&512&&l!==null&&ns(l,l.return);break;case 5:if(Ri(a,i),Xi(i),d&512&&l!==null&&ns(l,l.return),i.flags&32){var m=i.stateNode;try{de(m,"")}catch(Ke){Zt(i,i.return,Ke)}}if(d&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,z=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&Jt(m,_),xe(z,A);var he=xe(z,_);for(A=0;A<V.length;A+=2){var ye=V[A],be=V[A+1];ye==="style"?Ae(m,be):ye==="dangerouslySetInnerHTML"?oe(m,be):ye==="children"?de(m,be):I(m,ye,be,he)}switch(z){case"input":er(m,_);break;case"textarea":lr(m,_);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?Lt(m,!!_.multiple,Ue,!1):ve!==!!_.multiple&&(_.defaultValue!=null?Lt(m,!!_.multiple,_.defaultValue,!0):Lt(m,!!_.multiple,_.multiple?[]:"",!1))}m[lo]=_}catch(Ke){Zt(i,i.return,Ke)}}break;case 6:if(Ri(a,i),Xi(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(Ke){Zt(i,i.return,Ke)}}break;case 3:if(Ri(a,i),Xi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Zs(a.containerInfo)}catch(Ke){Zt(i,i.return,Ke)}break;case 4:Ri(a,i),Xi(i);break;case 13:Ri(a,i),Xi(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(qd=Xt())),d&4&&mv(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Pr=(he=Pr)||ye,Ri(a,i),Pr=he):Ri(a,i),Xi(i),d&8192){if(he=i.memoizedState!==null,(i.stateNode.isHidden=he)&&!ye&&(i.mode&1)!==0)for(Be=i,ye=i.child;ye!==null;){for(be=Be=ye;Be!==null;){switch(ve=Be,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:xo(4,ve,ve.return);break;case 1:ns(ve,ve.return);var Xe=ve.stateNode;if(typeof Xe.componentWillUnmount=="function"){d=ve,l=ve.return;try{a=d,Xe.props=a.memoizedProps,Xe.state=a.memoizedState,Xe.componentWillUnmount()}catch(Ke){Zt(d,l,Ke)}}break;case 5:ns(ve,ve.return);break;case 22:if(ve.memoizedState!==null){yv(be);continue}}Ue!==null?(Ue.return=ve,Be=Ue):yv(be)}ye=ye.sibling}e:for(ye=null,be=i;;){if(be.tag===5){if(ye===null){ye=be;try{m=be.stateNode,he?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=be.stateNode,V=be.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,z.style.display=K("display",A))}catch(Ke){Zt(i,i.return,Ke)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=he?"":be.memoizedProps}catch(Ke){Zt(i,i.return,Ke)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===i)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===i)break e;for(;be.sibling===null;){if(be.return===null||be.return===i)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Ri(a,i),Xi(i),d&4&&mv(i);break;case 21:break;default:Ri(a,i),Xi(i)}}function Xi(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(hv(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(de(m,""),d.flags&=-33);var _=fv(i);jd(i,_,m);break;case 3:case 4:var A=d.stateNode.containerInfo,z=fv(i);Wd(i,z,A);break;default:throw Error(t(161))}}catch(V){Zt(i,i.return,V)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function Mb(i,a,l){Be=i,vv(i)}function vv(i,a,l){for(var d=(i.mode&1)!==0;Be!==null;){var m=Be,_=m.child;if(m.tag===22&&d){var A=m.memoizedState!==null||Xl;if(!A){var z=m.alternate,V=z!==null&&z.memoizedState!==null||Pr;z=Xl;var he=Pr;if(Xl=A,(Pr=V)&&!he)for(Be=m;Be!==null;)A=Be,V=A.child,A.tag===22&&A.memoizedState!==null?xv(m):V!==null?(V.return=A,Be=V):xv(m);for(;_!==null;)Be=_,vv(_),_=_.sibling;Be=m,Xl=z,Pr=he}_v(i)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Be=_):_v(i)}}function _v(i){for(;Be!==null;){var a=Be;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Pr||Yl(5,a);break;case 1:var d=a.stateNode;if(a.flags&4&&!Pr)if(l===null)d.componentDidMount();else{var m=a.elementType===a.type?l.memoizedProps:Ti(a.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&_g(a,_,d);break;case 3:var A=a.updateQueue;if(A!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}_g(a,A,l)}break;case 5:var z=a.stateNode;if(l===null&&a.flags&4){l=z;var V=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var he=a.alternate;if(he!==null){var ye=he.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&Zs(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pr||a.flags&512&&Gd(a)}catch(ve){Zt(a,a.return,ve)}}if(a===i){Be=null;break}if(l=a.sibling,l!==null){l.return=a.return,Be=l;break}Be=a.return}}function yv(i){for(;Be!==null;){var a=Be;if(a===i){Be=null;break}var l=a.sibling;if(l!==null){l.return=a.return,Be=l;break}Be=a.return}}function xv(i){for(;Be!==null;){var a=Be;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{Yl(4,a)}catch(V){Zt(a,l,V)}break;case 1:var d=a.stateNode;if(typeof d.componentDidMount=="function"){var m=a.return;try{d.componentDidMount()}catch(V){Zt(a,m,V)}}var _=a.return;try{Gd(a)}catch(V){Zt(a,_,V)}break;case 5:var A=a.return;try{Gd(a)}catch(V){Zt(a,A,V)}}}catch(V){Zt(a,a.return,V)}if(a===i){Be=null;break}var z=a.sibling;if(z!==null){z.return=a.return,Be=z;break}Be=a.return}}var Eb=Math.ceil,ql=T.ReactCurrentDispatcher,Xd=T.ReactCurrentOwner,hi=T.ReactCurrentBatchConfig,Mt=0,vr=null,nr=null,Mr=0,ti=0,as=In(0),cr=0,So=null,ma=0,Kl=0,Yd=0,bo=null,jr=null,qd=0,ss=1/0,gn=null,$l=!1,Kd=null,Bn=null,Zl=!1,Vn=null,Ql=0,Mo=0,$d=null,Jl=-1,eu=0;function kr(){return(Mt&6)!==0?Xt():Jl!==-1?Jl:Jl=Xt()}function Hn(i){return(i.mode&1)===0?1:(Mt&2)!==0&&Mr!==0?Mr&-Mr:ob.transition!==null?(eu===0&&(eu=zt()),eu):(i=ht,i!==0||(i=window.event,i=i===void 0?16:Sm(i.type)),i)}function Ci(i,a,l,d){if(50<Mo)throw Mo=0,$d=null,Error(t(185));tr(i,l,d),((Mt&2)===0||i!==vr)&&(i===vr&&((Mt&2)===0&&(Kl|=l),cr===4&&Gn(i,Mr)),Xr(i,d),l===1&&Mt===0&&(a.mode&1)===0&&(ss=Xt()+500,Rl&&kn()))}function Xr(i,a){var l=i.callbackNode;It(i,a);var d=bt(i,i===vr?Mr:0);if(d===0)l!==null&&Ws(l),i.callbackNode=null,i.callbackPriority=0;else if(a=d&-d,i.callbackPriority!==a){if(l!=null&&Ws(l),a===1)i.tag===0?sb(bv.bind(null,i)):sg(bv.bind(null,i)),rb(function(){(Mt&6)===0&&kn()}),l=null;else{switch(xi(d)){case 1:l=js;break;case 4:l=Xs;break;case 16:l=C;break;case 536870912:l=ue;break;default:l=C}l=Pv(l,Sv.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function Sv(i,a){if(Jl=-1,eu=0,(Mt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(os()&&i.callbackNode!==l)return null;var d=bt(i,i===vr?Mr:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||a)a=tu(i,d);else{a=d;var m=Mt;Mt|=2;var _=Ev();(vr!==i||Mr!==a)&&(gn=null,ss=Xt()+500,va(i,a));do try{Ab();break}catch(z){Mv(i,z)}while(!0);md(),ql.current=_,Mt=m,nr!==null?a=0:(vr=null,Mr=0,a=cr)}if(a!==0){if(a===2&&(m=Dt(i),m!==0&&(d=m,a=Zd(i,m))),a===1)throw l=So,va(i,0),Gn(i,d),Xr(i,Xt()),l;if(a===6)Gn(i,d);else{if(m=i.current.alternate,(d&30)===0&&!wb(m)&&(a=tu(i,d),a===2&&(_=Dt(i),_!==0&&(d=_,a=Zd(i,_))),a===1))throw l=So,va(i,0),Gn(i,d),Xr(i,Xt()),l;switch(i.finishedWork=m,i.finishedLanes=d,a){case 0:case 1:throw Error(t(345));case 2:_a(i,jr,gn);break;case 3:if(Gn(i,d),(d&130023424)===d&&(a=qd+500-Xt(),10<a)){if(bt(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){kr(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=nd(_a.bind(null,i,jr,gn),a);break}_a(i,jr,gn);break;case 4:if(Gn(i,d),(d&4194240)===d)break;for(a=i.eventTimes,m=-1;0<d;){var A=31-Ce(d);_=1<<A,A=a[A],A>m&&(m=A),d&=~_}if(d=m,d=Xt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Eb(d/1960))-d,10<d){i.timeoutHandle=nd(_a.bind(null,i,jr,gn),d);break}_a(i,jr,gn);break;case 5:_a(i,jr,gn);break;default:throw Error(t(329))}}}return Xr(i,Xt()),i.callbackNode===l?Sv.bind(null,i):null}function Zd(i,a){var l=bo;return i.current.memoizedState.isDehydrated&&(va(i,a).flags|=256),i=tu(i,a),i!==2&&(a=jr,jr=l,a!==null&&Qd(a)),i}function Qd(i){jr===null?jr=i:jr.push.apply(jr,i)}function wb(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],_=m.getSnapshot;m=m.value;try{if(!Ei(_(),m))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Gn(i,a){for(a&=~Yd,a&=~Kl,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-Ce(a),d=1<<l;i[l]=-1,a&=~d}}function bv(i){if((Mt&6)!==0)throw Error(t(327));os();var a=bt(i,0);if((a&1)===0)return Xr(i,Xt()),null;var l=tu(i,a);if(i.tag!==0&&l===2){var d=Dt(i);d!==0&&(a=d,l=Zd(i,d))}if(l===1)throw l=So,va(i,0),Gn(i,a),Xr(i,Xt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,_a(i,jr,gn),Xr(i,Xt()),null}function Jd(i,a){var l=Mt;Mt|=1;try{return i(a)}finally{Mt=l,Mt===0&&(ss=Xt()+500,Rl&&kn())}}function ga(i){Vn!==null&&Vn.tag===0&&(Mt&6)===0&&os();var a=Mt;Mt|=1;var l=hi.transition,d=ht;try{if(hi.transition=null,ht=1,i)return i()}finally{ht=d,hi.transition=l,Mt=a,(Mt&6)===0&&kn()}}function eh(){ti=as.current,Vt(as)}function va(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,tb(l)),nr!==null)for(l=nr.return;l!==null;){var d=l;switch(cd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Tl();break;case 3:rs(),Vt(Hr),Vt(Ar),Md();break;case 5:Sd(d);break;case 4:rs();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:gd(d.type._context);break;case 22:case 23:eh()}l=l.return}if(vr=i,nr=i=Wn(i.current,null),Mr=ti=a,cr=0,So=null,Yd=Kl=ma=0,jr=bo=null,ha!==null){for(a=0;a<ha.length;a++)if(l=ha[a],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,_=l.pending;if(_!==null){var A=_.next;_.next=m,d.next=A}l.pending=d}ha=null}return i}function Mv(i,a){do{var l=nr;try{if(md(),Fl.current=Hl,zl){for(var d=qt.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}zl=!1}if(pa=0,gr=ur=qt=null,mo=!1,go=0,Xd.current=null,l===null||l.return===null){cr=1,So=a,nr=null;break}e:{var _=i,A=l.return,z=l,V=a;if(a=Mr,z.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var he=V,ye=z,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Yg(A);if(Ue!==null){Ue.flags&=-257,qg(Ue,A,z,_,a),Ue.mode&1&&Xg(_,he,a),a=Ue,V=he;var Xe=a.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(V),a.updateQueue=Ke}else Xe.add(V);break e}else{if((a&1)===0){Xg(_,he,a),th();break e}V=Error(t(426))}}else if(Wt&&z.mode&1){var rr=Yg(A);if(rr!==null){(rr.flags&65536)===0&&(rr.flags|=256),qg(rr,A,z,_,a),fd(is(V,z));break e}}_=V=is(V,z),cr!==4&&(cr=2),bo===null?bo=[_]:bo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var ie=Wg(_,V,a);vg(_,ie);break e;case 1:z=V;var Y=_.type,se=_.stateNode;if((_.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Bn===null||!Bn.has(se)))){_.flags|=65536,a&=-a,_.lanes|=a;var Ee=jg(_,z,a);vg(_,Ee);break e}}_=_.return}while(_!==null)}Tv(l)}catch(Ze){a=Ze,nr===l&&l!==null&&(nr=l=l.return);continue}break}while(!0)}function Ev(){var i=ql.current;return ql.current=Hl,i===null?Hl:i}function th(){(cr===0||cr===3||cr===2)&&(cr=4),vr===null||(ma&268435455)===0&&(Kl&268435455)===0||Gn(vr,Mr)}function tu(i,a){var l=Mt;Mt|=2;var d=Ev();(vr!==i||Mr!==a)&&(gn=null,va(i,a));do try{Tb();break}catch(m){Mv(i,m)}while(!0);if(md(),Mt=l,ql.current=d,nr!==null)throw Error(t(261));return vr=null,Mr=0,cr}function Tb(){for(;nr!==null;)wv(nr)}function Ab(){for(;nr!==null&&!cl();)wv(nr)}function wv(i){var a=Cv(i.alternate,i,ti);i.memoizedProps=i.pendingProps,a===null?Tv(i):nr=a,Xd.current=null}function Tv(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=yb(l,a,ti),l!==null){nr=l;return}}else{if(l=xb(l,a),l!==null){l.flags&=32767,nr=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cr=6,nr=null;return}}if(a=a.sibling,a!==null){nr=a;return}nr=a=i}while(a!==null);cr===0&&(cr=5)}function _a(i,a,l){var d=ht,m=hi.transition;try{hi.transition=null,ht=1,Rb(i,a,l,d)}finally{hi.transition=m,ht=d}return null}function Rb(i,a,l,d){do os();while(Vn!==null);if((Mt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(sn(i,_),i===vr&&(nr=vr=null,Mr=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Zl||(Zl=!0,Pv(C,function(){return os(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=hi.transition,hi.transition=null;var A=ht;ht=1;var z=Mt;Mt|=4,Xd.current=null,bb(i,l),gv(l,i),q1(rd),hl=!!td,rd=td=null,i.current=l,Mb(l),Ic(),Mt=z,ht=A,hi.transition=_}else i.current=l;if(Zl&&(Zl=!1,Vn=i,Ql=m),_=i.pendingLanes,_===0&&(Bn=null),Re(l.stateNode),Xr(i,Xt()),a!==null)for(d=i.onRecoverableError,l=0;l<a.length;l++)m=a[l],d(m.value,{componentStack:m.stack,digest:m.digest});if($l)throw $l=!1,i=Kd,Kd=null,i;return(Ql&1)!==0&&i.tag!==0&&os(),_=i.pendingLanes,(_&1)!==0?i===$d?Mo++:(Mo=0,$d=i):Mo=0,kn(),null}function os(){if(Vn!==null){var i=xi(Ql),a=hi.transition,l=ht;try{if(hi.transition=null,ht=16>i?16:i,Vn===null)var d=!1;else{if(i=Vn,Vn=null,Ql=0,(Mt&6)!==0)throw Error(t(331));var m=Mt;for(Mt|=4,Be=i.current;Be!==null;){var _=Be,A=_.child;if((Be.flags&16)!==0){var z=_.deletions;if(z!==null){for(var V=0;V<z.length;V++){var he=z[V];for(Be=he;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:xo(8,ye,_)}var be=ye.child;if(be!==null)be.return=ye,Be=be;else for(;Be!==null;){ye=Be;var ve=ye.sibling,Ue=ye.return;if(dv(ye),ye===he){Be=null;break}if(ve!==null){ve.return=Ue,Be=ve;break}Be=Ue}}}var Xe=_.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var rr=Ke.sibling;Ke.sibling=null,Ke=rr}while(Ke!==null)}}Be=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Be=A;else e:for(;Be!==null;){if(_=Be,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:xo(9,_,_.return)}var ie=_.sibling;if(ie!==null){ie.return=_.return,Be=ie;break e}Be=_.return}}var Y=i.current;for(Be=Y;Be!==null;){A=Be;var se=A.child;if((A.subtreeFlags&2064)!==0&&se!==null)se.return=A,Be=se;else e:for(A=Y;Be!==null;){if(z=Be,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Yl(9,z)}}catch(Ze){Zt(z,z.return,Ze)}if(z===A){Be=null;break e}var Ee=z.sibling;if(Ee!==null){Ee.return=z.return,Be=Ee;break e}Be=z.return}}if(Mt=m,kn(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(re,i)}catch{}d=!0}return d}finally{ht=l,hi.transition=a}}return!1}function Av(i,a,l){a=is(l,a),a=Wg(i,a,1),i=Fn(i,a,1),a=kr(),i!==null&&(tr(i,1,a),Xr(i,a))}function Zt(i,a,l){if(i.tag===3)Av(i,i,l);else for(;a!==null;){if(a.tag===3){Av(a,i,l);break}else if(a.tag===1){var d=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Bn===null||!Bn.has(d))){i=is(l,i),i=jg(a,i,1),a=Fn(a,i,1),i=kr(),a!==null&&(tr(a,1,i),Xr(a,i));break}}a=a.return}}function Cb(i,a,l){var d=i.pingCache;d!==null&&d.delete(a),a=kr(),i.pingedLanes|=i.suspendedLanes&l,vr===i&&(Mr&l)===l&&(cr===4||cr===3&&(Mr&130023424)===Mr&&500>Xt()-qd?va(i,0):Yd|=l),Xr(i,a)}function Rv(i,a){a===0&&((i.mode&1)===0?a=1:(a=pt,pt<<=1,(pt&130023424)===0&&(pt=4194304)));var l=kr();i=fn(i,a),i!==null&&(tr(i,a,l),Xr(i,l))}function Pb(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),Rv(i,l)}function Lb(i,a){var l=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(a),Rv(i,l)}var Cv;Cv=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||Hr.current)Wr=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Wr=!1,_b(i,a,l);Wr=(i.flags&131072)!==0}else Wr=!1,Wt&&(a.flags&1048576)!==0&&og(a,Pl,a.index);switch(a.lanes=0,a.tag){case 2:var d=a.type;jl(i,a),i=a.pendingProps;var m=Ka(a,Ar.current);ts(a,l),m=Td(null,a,d,i,m,l);var _=Ad();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Gr(d)?(_=!0,Al(a)):_=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,yd(a),m.updater=Gl,a.stateNode=m,m._reactInternals=a,Nd(a,d,i,l),a=Od(null,a,d,!0,_,l)):(a.tag=0,Wt&&_&&ud(a),Ur(null,a,m,l),a=a.child),a;case 16:d=a.elementType;e:{switch(jl(i,a),i=a.pendingProps,m=d._init,d=m(d._payload),a.type=d,m=a.tag=Nb(d),i=Ti(d,i),m){case 0:a=kd(null,a,d,i,l);break e;case 1:a=ev(null,a,d,i,l);break e;case 11:a=Kg(null,a,d,i,l);break e;case 14:a=$g(null,a,d,Ti(d.type,i),l);break e}throw Error(t(306,d,""))}return a;case 0:return d=a.type,m=a.pendingProps,m=a.elementType===d?m:Ti(d,m),kd(i,a,d,m,l);case 1:return d=a.type,m=a.pendingProps,m=a.elementType===d?m:Ti(d,m),ev(i,a,d,m,l);case 3:e:{if(tv(a),i===null)throw Error(t(387));d=a.pendingProps,_=a.memoizedState,m=_.element,gg(i,a),kl(a,d,null,l);var A=a.memoizedState;if(d=A.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){m=is(Error(t(423)),a),a=rv(i,a,d,l,m);break e}else if(d!==m){m=is(Error(t(424)),a),a=rv(i,a,d,l,m);break e}else for(ei=Nn(a.stateNode.containerInfo.firstChild),Jr=a,Wt=!0,wi=null,l=pg(a,null,d,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qa(),d===m){a=mn(i,a,l);break e}Ur(i,a,d,l)}a=a.child}return a;case 5:return yg(a),i===null&&hd(a),d=a.type,m=a.pendingProps,_=i!==null?i.memoizedProps:null,A=m.children,id(d,m)?A=null:_!==null&&id(d,_)&&(a.flags|=32),Jg(i,a),Ur(i,a,A,l),a.child;case 6:return i===null&&hd(a),null;case 13:return iv(i,a,l);case 4:return xd(a,a.stateNode.containerInfo),d=a.pendingProps,i===null?a.child=Ja(a,null,d,l):Ur(i,a,d,l),a.child;case 11:return d=a.type,m=a.pendingProps,m=a.elementType===d?m:Ti(d,m),Kg(i,a,d,m,l);case 7:return Ur(i,a,a.pendingProps,l),a.child;case 8:return Ur(i,a,a.pendingProps.children,l),a.child;case 12:return Ur(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(d=a.type._context,m=a.pendingProps,_=a.memoizedProps,A=m.value,kt(Nl,d._currentValue),d._currentValue=A,_!==null)if(Ei(_.value,A)){if(_.children===m.children&&!Hr.current){a=mn(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var z=_.dependencies;if(z!==null){A=_.child;for(var V=z.firstContext;V!==null;){if(V.context===d){if(_.tag===1){V=pn(-1,l&-l),V.tag=2;var he=_.updateQueue;if(he!==null){he=he.shared;var ye=he.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),he.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),vd(_.return,l,a),z.lanes|=l;break}V=V.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),vd(A,l,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Ur(i,a,m.children,l),a=a.child}return a;case 9:return m=a.type,d=a.pendingProps.children,ts(a,l),m=ci(m),d=d(m),a.flags|=1,Ur(i,a,d,l),a.child;case 14:return d=a.type,m=Ti(d,a.pendingProps),m=Ti(d.type,m),$g(i,a,d,m,l);case 15:return Zg(i,a,a.type,a.pendingProps,l);case 17:return d=a.type,m=a.pendingProps,m=a.elementType===d?m:Ti(d,m),jl(i,a),a.tag=1,Gr(d)?(i=!0,Al(a)):i=!1,ts(a,l),Hg(a,d,m),Nd(a,d,m,l),Od(null,a,d,!0,i,l);case 19:return av(i,a,l);case 22:return Qg(i,a,l)}throw Error(t(156,a.tag))};function Pv(i,a){return oa(i,a)}function Db(i,a,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(i,a,l,d){return new Db(i,a,l,d)}function rh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Nb(i){if(typeof i=="function")return rh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===ne)return 14}return 2}function Wn(i,a){var l=i.alternate;return l===null?(l=fi(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ru(i,a,l,d,m,_){var A=2;if(d=i,typeof i=="function")rh(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case k:return ya(l.children,m,_,a);case M:A=8,m|=8;break;case N:return i=fi(12,l,a,m|2),i.elementType=N,i.lanes=_,i;case Q:return i=fi(13,l,a,m),i.elementType=Q,i.lanes=_,i;case B:return i=fi(19,l,a,m),i.elementType=B,i.lanes=_,i;case te:return iu(l,m,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case F:A=10;break e;case H:A=9;break e;case j:A=11;break e;case ne:A=14;break e;case fe:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=fi(A,l,a,m),a.elementType=i,a.type=d,a.lanes=_,a}function ya(i,a,l,d){return i=fi(7,i,d,a),i.lanes=l,i}function iu(i,a,l,d){return i=fi(22,i,d,a),i.elementType=te,i.lanes=l,i.stateNode={isHidden:!1},i}function ih(i,a,l){return i=fi(6,i,null,a),i.lanes=l,i}function nh(i,a,l){return a=fi(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function Ib(i,a,l,d,m){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ah(i,a,l,d,m,_,A,z,V){return i=new Ib(i,a,l,z,V),a===1?(a=1,_===!0&&(a|=8)):a=0,_=fi(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(_),i}function Ub(i,a,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:d==null?null:""+d,children:i,containerInfo:a,implementation:l}}function Lv(i){if(!i)return Un;i=i._reactInternals;e:{if(Ir(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Gr(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Gr(l))return ng(i,l,a)}return a}function Dv(i,a,l,d,m,_,A,z,V){return i=ah(l,d,!0,i,m,_,A,z,V),i.context=Lv(null),l=i.current,d=kr(),m=Hn(l),_=pn(d,m),_.callback=a??null,Fn(l,_,m),i.current.lanes=m,tr(i,m,d),Xr(i,d),i}function nu(i,a,l,d){var m=a.current,_=kr(),A=Hn(m);return l=Lv(l),a.context===null?a.context=l:a.pendingContext=l,a=pn(_,A),a.payload={element:i},d=d===void 0?null:d,d!==null&&(a.callback=d),i=Fn(m,a,A),i!==null&&(Ci(i,m,A,_),Ul(i,m,A)),A}function au(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Nv(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function sh(i,a){Nv(i,a),(i=i.alternate)&&Nv(i,a)}function kb(){return null}var Iv=typeof reportError=="function"?reportError:function(i){console.error(i)};function oh(i){this._internalRoot=i}su.prototype.render=oh.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));nu(i,a,null,null)},su.prototype.unmount=oh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;ga(function(){nu(null,i,null,null)}),a[un]=null}};function su(i){this._internalRoot=i}su.prototype.unstable_scheduleHydration=function(i){if(i){var a=Si();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Pn.length&&a!==0&&a<Pn[l].priority;l++);Pn.splice(l,0,i),l===0&&ym(i)}};function lh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ou(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function Ob(i,a,l,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var he=au(A);_.call(he)}}var A=Dv(a,d,i,0,null,!1,!1,"",Uv);return i._reactRootContainer=A,i[un]=A.current,so(i.nodeType===8?i.parentNode:i),ga(),A}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var z=d;d=function(){var he=au(V);z.call(he)}}var V=ah(i,0,!1,null,null,!1,!1,"",Uv);return i._reactRootContainer=V,i[un]=V.current,so(i.nodeType===8?i.parentNode:i),ga(function(){nu(a,V,l,d)}),V}function lu(i,a,l,d,m){var _=l._reactRootContainer;if(_){var A=_;if(typeof m=="function"){var z=m;m=function(){var V=au(A);z.call(V)}}nu(a,A,i,m)}else A=Ob(l,a,i,m,d);return au(A)}on=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=qe(a.pendingLanes);l!==0&&(Tr(a,l|1),Xr(a,Xt()),(Mt&6)===0&&(ss=Xt()+500,kn()))}break;case 13:ga(function(){var d=fn(i,1);if(d!==null){var m=kr();Ci(d,i,1,m)}}),sh(i,1)}},Tt=function(i){if(i.tag===13){var a=fn(i,134217728);if(a!==null){var l=kr();Ci(a,i,134217728,l)}sh(i,134217728)}},Gt=function(i){if(i.tag===13){var a=Hn(i),l=fn(i,a);if(l!==null){var d=kr();Ci(l,i,a,d)}sh(i,a)}},Si=function(){return ht},Pt=function(i,a){var l=ht;try{return ht=i,a()}finally{ht=l}},at=function(i,a,l){switch(a){case"input":if(er(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var d=l[a];if(d!==i&&d.form===i.form){var m=wl(d);if(!m)throw Error(t(90));Je(d),er(d,m)}}}break;case"textarea":lr(i,l);break;case"select":a=l.value,a!=null&&Lt(i,!!l.multiple,a,!1)}},Oe=Jd,_e=ga;var Fb={usingClientEntryPoint:!1,Events:[uo,Ya,wl,Me,Ne,Jd]},Eo={findFiberByHostInstance:la,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zb={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=sa(i),i===null?null:i.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{re=uu.inject(zb),J=uu}catch{}}return Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fb,Yr.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(a))throw Error(t(200));return Ub(i,a,null,l)},Yr.createRoot=function(i,a){if(!lh(i))throw Error(t(299));var l=!1,d="",m=Iv;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=ah(i,1,!1,null,null,l,!1,d,m),i[un]=a.current,so(i.nodeType===8?i.parentNode:i),new oh(a)},Yr.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=sa(a),i=i===null?null:i.stateNode,i},Yr.flushSync=function(i){return ga(i)},Yr.hydrate=function(i,a,l){if(!ou(a))throw Error(t(200));return lu(null,i,a,!0,l)},Yr.hydrateRoot=function(i,a,l){if(!lh(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,_="",A=Iv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),a=Dv(a,null,i,1,l??null,m,!1,_,A),i[un]=a.current,so(i),d)for(i=0;i<d.length;i++)l=d[i],m=l._getVersion,m=m(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,m]:a.mutableSourceEagerHydrationData.push(l,m);return new su(a)},Yr.render=function(i,a,l){if(!ou(a))throw Error(t(200));return lu(null,i,a,!1,l)},Yr.unmountComponentAtNode=function(i){if(!ou(i))throw Error(t(40));return i._reactRootContainer?(ga(function(){lu(null,null,i,!1,function(){i._reactRootContainer=null,i[un]=null})}),!0):!1},Yr.unstable_batchedUpdates=Jd,Yr.unstable_renderSubtreeIntoContainer=function(i,a,l,d){if(!ou(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return lu(i,a,l,!1,d)},Yr.version="18.3.1-next-f1338f8080-20240426",Yr}var Yv;function qb(){if(Yv)return uh.exports;Yv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uh.exports=Yb(),uh.exports}var qv;function Kb(){if(qv)return cu;qv=1;var r=qb();return cu.createRoot=r.createRoot,cu.hydrateRoot=r.hydrateRoot,cu}var $b=Kb();const Zb=vy($b),Tp=ge.createContext({});function ea(r){const e=ge.useRef(null);return e.current===null&&(e.current=r()),e.current}const Qb=typeof window<"u",Qo=Qb?ge.useLayoutEffect:ge.useEffect,Sc=ge.createContext(null);function Ap(r,e){r.indexOf(e)===-1&&r.push(e)}function rc(r,e){const t=r.indexOf(e);t>-1&&r.splice(t,1)}const Vi=(r,e,t)=>t>e?e:t<r?r:t;let bc=()=>{};const ta={},_y=r=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r),yy=r=>typeof r=="object"&&r!==null,xy=r=>/^0[^.\s]+$/u.test(r);function Sy(r){let e;return()=>(e===void 0&&(e=r()),e)}const Kr=r=>r,Jo=(...r)=>r.reduce((e,t)=>n=>t(e(n))),Ds=(r,e,t)=>{const n=e-r;return n?(t-r)/n:1};class Rp{constructor(){this.subscriptions=[]}add(e){return Ap(this.subscriptions,e),()=>rc(this.subscriptions,e)}notify(e,t,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,n);else for(let o=0;o<s;o++){const u=this.subscriptions[o];u&&u(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ai=r=>r*1e3,_i=r=>r/1e3,Cp=(r,e)=>e?r*(1e3/e):0,by=(r,e,t)=>(((1-3*t+3*e)*r+(3*t-6*e))*r+3*e)*r,Jb=1e-7,eM=12;function tM(r,e,t,n,s){let o,u,c=0;do u=e+(t-e)/2,o=by(u,n,s)-r,o>0?t=u:e=u;while(Math.abs(o)>Jb&&++c<eM);return u}function el(r,e,t,n){if(r===e&&t===n)return Kr;const s=o=>tM(o,0,1,r,t);return o=>o===0||o===1?o:by(s(o),e,n)}const My=r=>e=>e<=.5?r(2*e)/2:(2-r(2*(1-e)))/2,Ey=r=>e=>1-r(1-e),wy=el(.33,1.53,.69,.99),Pp=Ey(wy),Ty=My(Pp),Ay=r=>r>=1?1:(r*=2)<1?.5*Pp(r):.5*(2-Math.pow(2,-10*(r-1))),Lp=r=>1-Math.sin(Math.acos(r)),Ry=Ey(Lp),Cy=My(Lp),rM=el(.42,0,1,1),iM=el(0,0,.58,1),Py=el(.42,0,.58,1),nM=r=>Array.isArray(r)&&typeof r[0]!="number",Ly=r=>Array.isArray(r)&&typeof r[0]=="number",aM={linear:Kr,easeIn:rM,easeInOut:Py,easeOut:iM,circIn:Lp,circInOut:Cy,circOut:Ry,backIn:Pp,backInOut:Ty,backOut:wy,anticipate:Ay},sM=r=>typeof r=="string",Kv=r=>{if(Ly(r)){bc(r.length===4);const[e,t,n,s]=r;return el(e,t,n,s)}else if(sM(r))return aM[r];return r},du=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function oM(r){let e=new Set,t=new Set,n=!1,s=!1;const o=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){o.has(h)&&(f.schedule(h),r()),h(u)}const f={schedule:(h,p=!1,v=!1)=>{const g=v&&n?e:t;return p&&o.add(h),g.add(h),h},cancel:h=>{t.delete(h),o.delete(h)},process:h=>{if(u=h,n){s=!0;return}n=!0;const p=e;e=t,t=p,e.forEach(c),e.clear(),n=!1,s&&(s=!1,f.process(h))}};return f}const lM=40;function Dy(r,e){let t=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},o=()=>t=!0,u=du.reduce((y,R)=>(y[R]=oM(o),y),{}),{setup:c,read:f,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:S,postRender:b}=u,w=()=>{const y=ta.useManualTiming,R=y?s.timestamp:performance.now();t=!1,y||(s.delta=n?1e3/60:Math.max(Math.min(R-s.timestamp,lM),1)),s.timestamp=R,s.isProcessing=!0,c.process(s),f.process(s),h.process(s),p.process(s),v.process(s),g.process(s),S.process(s),b.process(s),s.isProcessing=!1,t&&e&&(n=!1,r(w))},x=()=>{t=!0,n=!0,s.isProcessing||r(w)};return{schedule:du.reduce((y,R)=>{const I=u[R];return y[R]=(T,L=!1,D=!1)=>(t||x(),I.schedule(T,L,D)),y},{}),cancel:y=>{for(let R=0;R<du.length;R++)u[du[R]].cancel(y)},state:s,steps:u}}const{schedule:Et,cancel:yi,state:xr,steps:ch}=Dy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Kr,!0);let Gu;function uM(){Gu=void 0}const Fr={now:()=>(Gu===void 0&&Fr.set(xr.isProcessing||ta.useManualTiming?xr.timestamp:performance.now()),Gu),set:r=>{Gu=r,queueMicrotask(uM)}},Ny=r=>e=>typeof e=="string"&&e.startsWith(r),Iy=Ny("--"),cM=Ny("var(--"),Dp=r=>cM(r)?dM.test(r.split("/*")[0].trim()):!1,dM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $v(r){return typeof r!="string"?!1:r.split("/*")[0].includes("var(--")}const Os={test:r=>typeof r=="number",parse:parseFloat,transform:r=>r},jo={...Os,transform:r=>Vi(0,1,r)},hu={...Os,default:1},Fo=r=>Math.round(r*1e5)/1e5,Np=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hM(r){return r==null}const fM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ip=(r,e)=>t=>!!(typeof t=="string"&&fM.test(t)&&t.startsWith(r)||e&&!hM(t)&&Object.prototype.hasOwnProperty.call(t,e)),Uy=(r,e,t)=>n=>{if(typeof n!="string")return n;const[s,o,u,c]=n.match(Np);return{[r]:parseFloat(s),[e]:parseFloat(o),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},pM=r=>Vi(0,255,r),dh={...Os,transform:r=>Math.round(pM(r))},Aa={test:Ip("rgb","red"),parse:Uy("red","green","blue"),transform:({red:r,green:e,blue:t,alpha:n=1})=>"rgba("+dh.transform(r)+", "+dh.transform(e)+", "+dh.transform(t)+", "+Fo(jo.transform(n))+")"};function mM(r){let e="",t="",n="",s="";return r.length>5?(e=r.substring(1,3),t=r.substring(3,5),n=r.substring(5,7),s=r.substring(7,9)):(e=r.substring(1,2),t=r.substring(2,3),n=r.substring(3,4),s=r.substring(4,5),e+=e,t+=t,n+=n,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const lf={test:Ip("#"),parse:mM,transform:Aa.transform},tl=r=>({test:e=>typeof e=="string"&&e.endsWith(r)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${r}`}),bn=tl("deg"),en=tl("%"),Ye=tl("px"),gM=tl("vh"),vM=tl("vw"),Zv={...en,parse:r=>en.parse(r)/100,transform:r=>en.transform(r*100)},ws={test:Ip("hsl","hue"),parse:Uy("hue","saturation","lightness"),transform:({hue:r,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(r)+", "+en.transform(Fo(e))+", "+en.transform(Fo(t))+", "+Fo(jo.transform(n))+")"},sr={test:r=>Aa.test(r)||lf.test(r)||ws.test(r),parse:r=>Aa.test(r)?Aa.parse(r):ws.test(r)?ws.parse(r):lf.parse(r),transform:r=>typeof r=="string"?r:r.hasOwnProperty("red")?Aa.transform(r):ws.transform(r),getAnimatableNone:r=>{const e=sr.parse(r);return e.alpha=0,sr.transform(e)}},_M=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yM(r){var e,t;return isNaN(r)&&typeof r=="string"&&(((e=r.match(Np))==null?void 0:e.length)||0)+(((t=r.match(_M))==null?void 0:t.length)||0)>0}const ky="number",Oy="color",xM="var",SM="var(",Qv="${}",bM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ns(r){const e=r.toString(),t=[],n={color:[],number:[],var:[]},s=[];let o=0;const u=e.replace(bM,c=>(sr.test(c)?(n.color.push(o),s.push(Oy),t.push(sr.parse(c))):c.startsWith(SM)?(n.var.push(o),s.push(xM),t.push(c)):(n.number.push(o),s.push(ky),t.push(parseFloat(c))),++o,Qv)).split(Qv);return{values:t,split:u,indexes:n,types:s}}function MM(r){return Ns(r).values}function Fy({split:r,types:e}){const t=r.length;return n=>{let s="";for(let o=0;o<t;o++)if(s+=r[o],n[o]!==void 0){const u=e[o];u===ky?s+=Fo(n[o]):u===Oy?s+=sr.transform(n[o]):s+=n[o]}return s}}function EM(r){return Fy(Ns(r))}const wM=r=>typeof r=="number"?0:sr.test(r)?sr.getAnimatableNone(r):r,TM=(r,e)=>typeof r=="number"?e!=null&&e.trim().endsWith("/")?r:0:wM(r);function AM(r){const e=Ns(r);return Fy(e)(e.values.map((t,n)=>TM(t,e.split[n])))}const Fi={test:yM,parse:MM,createTransformer:EM,getAnimatableNone:AM};function hh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function RM({hue:r,saturation:e,lightness:t,alpha:n}){r/=360,e/=100,t/=100;let s=0,o=0,u=0;if(!e)s=o=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,f=2*t-c;s=hh(f,c,r+1/3),o=hh(f,c,r),u=hh(f,c,r-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(u*255),alpha:n}}function ic(r,e){return t=>t>0?e:r}const Ut=(r,e,t)=>r+(e-r)*t,fh=(r,e,t)=>{const n=r*r,s=t*(e*e-n)+n;return s<0?0:Math.sqrt(s)},CM=[lf,Aa,ws],PM=r=>CM.find(e=>e.test(r));function Jv(r){const e=PM(r);if(!e)return!1;let t=e.parse(r);return e===ws&&(t=RM(t)),t}const e0=(r,e)=>{const t=Jv(r),n=Jv(e);if(!t||!n)return ic(r,e);const s={...t};return o=>(s.red=fh(t.red,n.red,o),s.green=fh(t.green,n.green,o),s.blue=fh(t.blue,n.blue,o),s.alpha=Ut(t.alpha,n.alpha,o),Aa.transform(s))},uf=new Set(["none","hidden"]);function LM(r,e){return uf.has(r)?t=>t<=0?r:e:t=>t>=1?e:r}function DM(r,e){return t=>Ut(r,e,t)}function Up(r){return typeof r=="number"?DM:typeof r=="string"?Dp(r)?ic:sr.test(r)?e0:UM:Array.isArray(r)?zy:typeof r=="object"?sr.test(r)?e0:NM:ic}function zy(r,e){const t=[...r],n=t.length,s=r.map((o,u)=>Up(o)(o,e[u]));return o=>{for(let u=0;u<n;u++)t[u]=s[u](o);return t}}function NM(r,e){const t={...r,...e},n={};for(const s in t)r[s]!==void 0&&e[s]!==void 0&&(n[s]=Up(r[s])(r[s],e[s]));return s=>{for(const o in n)t[o]=n[o](s);return t}}function IM(r,e){const t=[],n={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],u=r.indexes[o][n[o]],c=r.values[u]??0;t[s]=c,n[o]++}return t}const UM=(r,e)=>{const t=Fi.createTransformer(e),n=Ns(r),s=Ns(e);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?uf.has(r)&&!s.values.length||uf.has(e)&&!n.values.length?LM(r,e):Jo(zy(IM(n,s),s.values),t):ic(r,e)};function By(r,e,t){return typeof r=="number"&&typeof e=="number"&&typeof t=="number"?Ut(r,e,t):Up(r)(r,e)}const kM=r=>{const e=({timestamp:t})=>r(t);return{start:(t=!0)=>Et.update(e,t),stop:()=>yi(e),now:()=>xr.isProcessing?xr.timestamp:Fr.now()}},Vy=(r,e,t=10)=>{let n="";const s=Math.max(Math.round(e/t),2);for(let o=0;o<s;o++)n+=Math.round(r(o/(s-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},nc=2e4;function kp(r){let e=0;const t=50;let n=r.next(e);for(;!n.done&&e<nc;)e+=t,n=r.next(e);return e>=nc?1/0:e}function OM(r,e=100,t){const n=t({...r,keyframes:[0,e]}),s=Math.min(kp(n),nc);return{type:"keyframes",ease:o=>n.next(s*o).value/e,duration:_i(s)}}const Qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function cf(r,e){return r*Math.sqrt(1-e*e)}const FM=12;function zM(r,e,t){let n=t;for(let s=1;s<FM;s++)n=n-r(n)/e(n);return n}const ph=.001;function BM({duration:r=Qt.duration,bounce:e=Qt.bounce,velocity:t=Qt.velocity,mass:n=Qt.mass}){let s,o,u=1-e;u=Vi(Qt.minDamping,Qt.maxDamping,u),r=Vi(Qt.minDuration,Qt.maxDuration,_i(r)),u<1?(s=h=>{const p=h*u,v=p*r,g=p-t,S=cf(h,u),b=Math.exp(-v);return ph-g/S*b},o=h=>{const p=h*u*r,v=p*t+t,g=Math.pow(u,2)*Math.pow(h,2)*r,S=Math.exp(-p),b=cf(Math.pow(h,2),u);return(-s(h)+ph>0?-1:1)*((v-g)*S)/b}):(s=h=>{const p=Math.exp(-h*r),v=(h-t)*r+1;return-ph+p*v},o=h=>{const p=Math.exp(-h*r),v=(t-h)*(r*r);return p*v});const c=5/r,f=zM(s,o,c);if(r=ai(r),isNaN(f))return{stiffness:Qt.stiffness,damping:Qt.damping,duration:r};{const h=Math.pow(f,2)*n;return{stiffness:h,damping:u*2*Math.sqrt(n*h),duration:r}}}const VM=["duration","bounce"],HM=["stiffness","damping","mass"];function t0(r,e){return e.some(t=>r[t]!==void 0)}function GM(r){let e={velocity:Qt.velocity,stiffness:Qt.stiffness,damping:Qt.damping,mass:Qt.mass,isResolvedFromDuration:!1,...r};if(!t0(r,HM)&&t0(r,VM))if(e.velocity=0,r.visualDuration){const t=r.visualDuration,n=2*Math.PI/(t*1.2),s=n*n,o=2*Vi(.05,1,1-(r.bounce||0))*Math.sqrt(s);e={...e,mass:Qt.mass,stiffness:s,damping:o}}else{const t=BM({...r,velocity:0});e={...e,...t,mass:Qt.mass},e.isResolvedFromDuration=!0}return e}function ac(r=Qt.visualDuration,e=Qt.bounce){const t=typeof r!="object"?{visualDuration:r,keyframes:[0,1],bounce:e}:r;let{restSpeed:n,restDelta:s}=t;const o=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:o},{stiffness:f,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:S}=GM({...t,velocity:-_i(t.velocity||0)}),b=g||0,w=h/(2*Math.sqrt(f*p)),x=u-o,y=_i(Math.sqrt(f/p)),R=Math.abs(x)<5;n||(n=R?Qt.restSpeed.granular:Qt.restSpeed.default),s||(s=R?Qt.restDelta.granular:Qt.restDelta.default);let I,T,L,D,k,M;if(w<1)L=cf(y,w),D=(b+w*y*x)/L,I=F=>{const H=Math.exp(-w*y*F);return u-H*(D*Math.sin(L*F)+x*Math.cos(L*F))},k=w*y*D+x*L,M=w*y*x-D*L,T=F=>Math.exp(-w*y*F)*(k*Math.sin(L*F)+M*Math.cos(L*F));else if(w===1){I=H=>u-Math.exp(-y*H)*(x+(b+y*x)*H);const F=b+y*x;T=H=>Math.exp(-y*H)*(y*F*H-b)}else{const F=y*Math.sqrt(w*w-1);I=B=>{const ne=Math.exp(-w*y*B),fe=Math.min(F*B,300);return u-ne*((b+w*y*x)*Math.sinh(fe)+F*x*Math.cosh(fe))/F};const H=(b+w*y*x)/F,j=w*y*H-x*F,Q=w*y*x-H*F;T=B=>{const ne=Math.exp(-w*y*B),fe=Math.min(F*B,300);return ne*(j*Math.sinh(fe)+Q*Math.cosh(fe))}}const N={calculatedDuration:S&&v||null,velocity:F=>ai(T(F)),next:F=>{if(!S&&w<1){const j=Math.exp(-w*y*F),Q=Math.sin(L*F),B=Math.cos(L*F),ne=u-j*(D*Q+x*B),fe=ai(j*(k*Q+M*B));return c.done=Math.abs(fe)<=n&&Math.abs(u-ne)<=s,c.value=c.done?u:ne,c}const H=I(F);if(S)c.done=F>=v;else{const j=ai(T(F));c.done=Math.abs(j)<=n&&Math.abs(u-H)<=s}return c.value=c.done?u:H,c},toString:()=>{const F=Math.min(kp(N),nc),H=Vy(j=>N.next(F*j).value,F,30);return F+"ms "+H},toTransition:()=>{}};return N}ac.applyToOptions=r=>{const e=OM(r,100,ac);return r.ease=e.ease,r.duration=ai(e.duration),r.type="keyframes",r};const WM=5;function Hy(r,e,t){const n=Math.max(e-WM,0);return Cp(t-r(n),e-n)}function df({keyframes:r,velocity:e=0,power:t=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:u,min:c,max:f,restDelta:h=.5,restSpeed:p}){const v=r[0],g={done:!1,value:v},S=M=>c!==void 0&&M<c||f!==void 0&&M>f,b=M=>c===void 0?f:f===void 0||Math.abs(c-M)<Math.abs(f-M)?c:f;let w=t*e;const x=v+w,y=u===void 0?x:u(x);y!==x&&(w=y-v);const R=M=>-w*Math.exp(-M/n),I=M=>y+R(M),T=M=>{const N=R(M),F=I(M);g.done=Math.abs(N)<=h,g.value=g.done?y:F};let L,D;const k=M=>{S(g.value)&&(L=M,D=ac({keyframes:[g.value,b(g.value)],velocity:Hy(I,M,g.value),damping:s,stiffness:o,restDelta:h,restSpeed:p}))};return k(0),{calculatedDuration:null,next:M=>{let N=!1;return!D&&L===void 0&&(N=!0,T(M),k(M)),L!==void 0&&M>=L?D.next(M-L):(!N&&T(M),g)}}}function jM(r,e,t){const n=[],s=t||ta.mix||By,o=r.length-1;for(let u=0;u<o;u++){let c=s(r[u],r[u+1]);if(e){const f=Array.isArray(e)?e[u]||Kr:e;c=Jo(f,c)}n.push(c)}return n}function Op(r,e,{clamp:t=!0,ease:n,mixer:s}={}){const o=r.length;if(bc(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const u=r[0]===r[1];r[0]>r[o-1]&&(r=[...r].reverse(),e=[...e].reverse());const c=jM(e,n,s),f=c.length,h=p=>{if(u&&p<r[0])return e[0];let v=0;if(f>1)for(;v<r.length-2&&!(p<r[v+1]);v++);const g=Ds(r[v],r[v+1],p);return c[v](g)};return t?p=>h(Vi(r[0],r[o-1],p)):h}function XM(r,e){const t=r[r.length-1];for(let n=1;n<=e;n++){const s=Ds(0,e,n);r.push(Ut(t,1,s))}}function Gy(r){const e=[0];return XM(e,r.length-1),e}function YM(r,e){return r.map(t=>t*e)}function qM(r,e){return r.map(()=>e||Py).splice(0,r.length-1)}function zo({duration:r=300,keyframes:e,times:t,ease:n="easeInOut"}){const s=nM(n)?n.map(Kv):Kv(n),o={done:!1,value:e[0]},u=YM(t&&t.length===e.length?t:Gy(e),r),c=Op(u,e,{ease:Array.isArray(s)?s:qM(e,s)});return{calculatedDuration:r,next:f=>(o.value=c(f),o.done=f>=r,o)}}const KM=r=>r!==null;function Mc(r,{repeat:e,repeatType:t="loop"},n,s=1){const o=r.filter(KM),u=s<0||e&&t!=="loop"&&e%2===1?0:o.length-1;return!u||n===void 0?o[u]:n}const $M={decay:df,inertia:df,tween:zo,keyframes:zo,spring:ac};function Wy(r){typeof r.type=="string"&&(r.type=$M[r.type])}class Fp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const ZM=r=>r/100;class sc extends Fp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var t,n;const{motionValue:s}=this.options;s&&s.updatedAt!==Fr.now()&&this.tick(Fr.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(n=(t=this.options).onStop)==null||n.call(t))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Wy(e);const{type:t=zo,repeat:n=0,repeatDelay:s=0,repeatType:o,velocity:u=0}=e;let{keyframes:c}=e;const f=t||zo;f!==zo&&typeof c[0]!="number"&&(this.mixKeyframes=Jo(ZM,By(c[0],c[1])),c=[0,100]);const h=f({...e,keyframes:c});o==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=kp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+s,this.totalDuration=this.resolvedDuration*(n+1)-s,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:s,mixKeyframes:o,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:f}=this;if(this.startTime===null)return n.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:S,type:b,onUpdate:w,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?y<0:y>s;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let I=this.currentTime,T=n;if(v){const M=Math.min(this.currentTime,s)/c;let N=Math.floor(M),F=M%1;!F&&M>=1&&(F=1),F===1&&N--,N=Math.min(N,v+1),N%2&&(g==="reverse"?(F=1-F,S&&(F-=S/c)):g==="mirror"&&(T=u)),I=Vi(0,1,F)*c}let L;R?(this.delayState.value=p[0],L=this.delayState):L=T.next(I),o&&!R&&(L.value=o(L.value));let{done:D}=L;!R&&f!==null&&(D=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return k&&b!==df&&(L.value=Mc(p,this.options,x,this.speed)),w&&w(L.value),k&&this.finish(),L}then(e,t){return this.finished.then(e,t)}get duration(){return _i(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_i(e)}get time(){return _i(this.currentTime)}set time(e){e=ai(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Hy(n=>this.generator.next(n).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Fr.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=_i(this.currentTime))}play(){var e,t;if(this.isStopped)return;const{driver:n=kM,startTime:s}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),(t=(e=this.options).onPlay)==null||t.call(e);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Fr.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function QM(r){for(let e=1;e<r.length;e++)r[e]??(r[e]=r[e-1])}const Ra=r=>r*180/Math.PI,hf=r=>{const e=Ra(Math.atan2(r[1],r[0]));return ff(e)},JM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:r=>(Math.abs(r[0])+Math.abs(r[3]))/2,rotate:hf,rotateZ:hf,skewX:r=>Ra(Math.atan(r[1])),skewY:r=>Ra(Math.atan(r[2])),skew:r=>(Math.abs(r[1])+Math.abs(r[2]))/2},ff=r=>(r=r%360,r<0&&(r+=360),r),r0=hf,i0=r=>Math.sqrt(r[0]*r[0]+r[1]*r[1]),n0=r=>Math.sqrt(r[4]*r[4]+r[5]*r[5]),eE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:i0,scaleY:n0,scale:r=>(i0(r)+n0(r))/2,rotateX:r=>ff(Ra(Math.atan2(r[6],r[5]))),rotateY:r=>ff(Ra(Math.atan2(-r[2],r[0]))),rotateZ:r0,rotate:r0,skewX:r=>Ra(Math.atan(r[4])),skewY:r=>Ra(Math.atan(r[1])),skew:r=>(Math.abs(r[1])+Math.abs(r[4]))/2};function pf(r){return r.includes("scale")?1:0}function mf(r,e){if(!r||r==="none")return pf(e);const t=r.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,s;if(t)n=eE,s=t;else{const c=r.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=JM,s=c}if(!s)return pf(e);const o=n[e],u=s[1].split(",").map(rE);return typeof o=="function"?o(u):u[o]}const tE=(r,e)=>{const{transform:t="none"}=getComputedStyle(r);return mf(t,e)};function rE(r){return parseFloat(r.trim())}const Fs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set([...Fs,"pathRotation"]),a0=r=>r===Os||r===Ye,iE=new Set(["x","y","z"]),nE=Fs.filter(r=>!iE.has(r));function aE(r){const e=[];return nE.forEach(t=>{const n=r.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e}const Jn={width:({x:r},{paddingLeft:e="0",paddingRight:t="0",boxSizing:n})=>{const s=r.max-r.min;return n==="border-box"?s:s-parseFloat(e)-parseFloat(t)},height:({y:r},{paddingTop:e="0",paddingBottom:t="0",boxSizing:n})=>{const s=r.max-r.min;return n==="border-box"?s:s-parseFloat(e)-parseFloat(t)},top:(r,{top:e})=>parseFloat(e),left:(r,{left:e})=>parseFloat(e),bottom:({y:r},{top:e})=>parseFloat(e)+(r.max-r.min),right:({x:r},{left:e})=>parseFloat(e)+(r.max-r.min),x:(r,{transform:e})=>mf(e,"x"),y:(r,{transform:e})=>mf(e,"y")};Jn.translateX=Jn.x;Jn.translateY=Jn.y;const La=new Set;let gf=!1,vf=!1,_f=!1;function jy(){if(vf){const r=Array.from(La).filter(n=>n.needsMeasurement),e=new Set(r.map(n=>n.element)),t=new Map;e.forEach(n=>{const s=aE(n);s.length&&(t.set(n,s),n.render())}),r.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const s=t.get(n);s&&s.forEach(([o,u])=>{var c;(c=n.getValue(o))==null||c.set(u)})}),r.forEach(n=>n.measureEndState()),r.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}vf=!1,gf=!1,La.forEach(r=>r.complete(_f)),La.clear()}function Xy(){La.forEach(r=>{r.readKeyframes(),r.needsMeasurement&&(vf=!0)})}function sE(){_f=!0,Xy(),jy(),_f=!1}class zp{constructor(e,t,n,s,o,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=s,this.element=o,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(La.add(this),gf||(gf=!0,Et.read(Xy),Et.resolveKeyframes(jy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:s}=this;if(e[0]===null){const o=s==null?void 0:s.get(),u=e[e.length-1];if(o!==void 0)e[0]=o;else if(n&&t){const c=n.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),s&&o===void 0&&s.set(e[0])}QM(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),La.delete(this)}cancel(){this.state==="scheduled"&&(La.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const oE=r=>r.startsWith("--");function Yy(r,e,t){oE(e)?r.style.setProperty(e,t):r.style[e]=t}const lE={};function Bp(r,e){const t=Sy(r);return()=>lE[e]??t()}const Vp=Bp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),qy=Bp(()=>window.ViewTimeline!==void 0,"viewTimeline"),Ky=Bp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Io=([r,e,t,n])=>`cubic-bezier(${r}, ${e}, ${t}, ${n})`,s0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Io([0,.65,.55,1]),circOut:Io([.55,0,1,.45]),backIn:Io([.31,.01,.66,-.59]),backOut:Io([.33,1.53,.69,.99])};function $y(r,e){if(r)return typeof r=="function"?Ky()?Vy(r,e):"ease-out":Ly(r)?Io(r):Array.isArray(r)?r.map(t=>$y(t,e)||s0.easeOut):s0[r]}function uE(r,e,t,{delay:n=0,duration:s=300,repeat:o=0,repeatType:u="loop",ease:c="easeOut",times:f}={},h=void 0){const p={[e]:t};f&&(p.offset=f);const v=$y(c,s);Array.isArray(v)&&(p.easing=v);const g={delay:n,duration:s,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:o+1,direction:u==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),r.animate(p,g)}function Zy(r){return typeof r=="function"&&"applyToOptions"in r}function cE({type:r,...e}){return Zy(r)&&Ky()?r.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Qy extends Fp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:n,keyframes:s,pseudoElement:o,allowFlatten:u=!1,finalKeyframe:c,onComplete:f}=e;this.isPseudoElement=!!o,this.allowFlatten=u,this.options=e,bc(typeof e.type!="string");const h=cE(e);this.animation=uE(t,n,s,h,o),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const p=Mc(s,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(p),Yy(t,n,p),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t,n;const s=(e=this.options)==null?void 0:e.element;!this.isPseudoElement&&s!=null&&s.isConnected&&((n=(t=this.animation).commitStyles)==null||n.call(t))}get duration(){var e,t;const n=((t=(e=this.animation.effect)==null?void 0:e.getComputedTiming)==null?void 0:t.call(e).duration)||0;return _i(Number(n))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_i(e)}get time(){return _i(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ai(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:s}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Vp()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Kr):s(this)}}const Jy={anticipate:Ay,backInOut:Ty,circInOut:Cy};function dE(r){return r in Jy}function hE(r){typeof r.ease=="string"&&dE(r.ease)&&(r.ease=Jy[r.ease])}const mh=10;class fE extends Qy{constructor(e){hE(e),Wy(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:s,element:o,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new sc({...u,autoplay:!1}),f=Math.max(mh,Fr.now()-this.startTime),h=Vi(0,mh,f-mh),p=c.sample(f).value,{name:v}=this.options;o&&v&&Yy(o,v,p),t.setWithVelocity(c.sample(Math.max(0,f-h)).value,p,h),c.stop()}}const o0=(r,e)=>e==="zIndex"?!1:!!(typeof r=="number"||Array.isArray(r)||typeof r=="string"&&(Fi.test(r)||r==="0")&&!r.startsWith("url("));function pE(r){const e=r[0];if(r.length===1)return!0;for(let t=0;t<r.length;t++)if(r[t]!==e)return!0}function mE(r,e,t,n){const s=r[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const o=r[r.length-1],u=o0(s,e),c=o0(o,e);return!u||!c?!1:pE(r)||(t==="spring"||Zy(t))&&n}function yf(r){r.duration=0,r.type="keyframes"}const ex=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),gE=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function vE(r){for(let e=0;e<r.length;e++)if(typeof r[e]=="string"&&gE.test(r[e]))return!0;return!1}const _E=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yE=Sy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xE(r){var e;const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:u,type:c,keyframes:f}=r,h=(e=t==null?void 0:t.owner)==null?void 0:e.current;if(!(h instanceof HTMLElement)&&!(h instanceof SVGElement))return!1;const{onUpdate:p,transformTemplate:v}=t.owner.getProps();return yE()&&n&&(ex.has(n)||_E.has(n)&&vE(f))&&(n!=="transform"||!v)&&!p&&!s&&o!=="mirror"&&u!==0&&c!=="inertia"}const SE=40;class bE extends Fp{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:u="loop",keyframes:c,name:f,motionValue:h,element:p,...v}){var g;super(),this.stop=()=>{var w,x;this._animation&&(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=Fr.now();const S={autoplay:e,delay:t,type:n,repeat:s,repeatDelay:o,repeatType:u,name:f,motionValue:h,element:p,...v},b=(p==null?void 0:p.KeyframeResolver)||zp;this.keyframeResolver=new b(c,(w,x,y)=>this.onKeyframesResolved(w,x,S,!y),f,h,p),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,t,n,s){var o,u;this.keyframeResolver=void 0;const{name:c,type:f,velocity:h,delay:p,isHandoff:v,onUpdate:g}=n;this.resolvedAt=Fr.now();let S=!0;mE(e,c,f,h)||(S=!1,(ta.instantAnimations||!p)&&(g==null||g(Mc(e,n,t))),e[0]=e[e.length-1],yf(n),n.repeat=0);const b={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>SE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},w=S&&!v&&xE(b),x=(u=(o=b.motionValue)==null?void 0:o.owner)==null?void 0:u.current;let y;if(w)try{y=new fE({...b,element:x})}catch{y=new sc(b)}else y=new sc(b);y.finished.then(()=>{this.notifyFinished()}).catch(Kr),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),sE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function tx(r,e,t,n=0,s=1){const o=Array.from(r).sort((f,h)=>f.sortNodePosition(h)).indexOf(e),u=r.size,c=(u-1)*n;return typeof t=="function"?t(o,u):s===1?o*n:c-o*n}const l0=30,ME=r=>!isNaN(parseFloat(r)),Bo={current:void 0};class EE{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{var s;const o=Fr.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Fr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ME(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Rp);const n=this.events[e].add(t);return e==="change"?()=>{n(),Et.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Bo.current&&Bo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Fr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>l0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return Cp(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ki(r,e){return new EE(r,e)}function rx(r,e){if(r!=null&&r.inherit&&e){const{inherit:t,...n}=r;return{...e,...n}}return r}function Hp(r,e){const t=(r==null?void 0:r[e])??(r==null?void 0:r.default)??r;return t!==r?rx(t,r):t}const wE={type:"spring",stiffness:500,damping:25,restSpeed:10},TE=r=>({type:"spring",stiffness:550,damping:r===0?2*Math.sqrt(550):30,restSpeed:10}),AE={type:"keyframes",duration:.8},RE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CE=(r,{keyframes:e})=>e.length>2?AE:zs.has(r)?r.startsWith("scale")?TE(e[1]):wE:RE,PE=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function LE(r){for(const e in r)if(!PE.has(e))return!0;return!1}const Gp=(r,e,t,n={},s,o)=>u=>{const c=Hp(n,r)||{},f=c.delay||n.delay||0;let{elapsed:h=0}=n;h=h-ai(f);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:g=>{e.set(g),c.onUpdate&&c.onUpdate(g)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:r,motionValue:e,element:o?void 0:s};LE(c)||Object.assign(p,CE(r,p)),p.duration&&(p.duration=ai(p.duration)),p.repeatDelay&&(p.repeatDelay=ai(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(yf(p),p.delay===0&&(v=!0)),(ta.instantAnimations||ta.skipAnimations||s!=null&&s.shouldSkipAnimations||c.skipAnimations)&&(v=!0,yf(p),p.delay=0),p.allowFlatten=!c.type&&!c.ease,v&&!o&&e.get()!==void 0){const g=Mc(p.keyframes,c);if(g!==void 0){Et.update(()=>{p.onUpdate(g),p.onComplete()});return}}return c.isSync?new sc(p):new bE(p)},DE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function NE(r){const e=DE.exec(r);if(!e)return[,];const[,t,n,s]=e;return[`--${t??n}`,s]}function ix(r,e,t=1){const[n,s]=NE(r);if(!n)return;const o=window.getComputedStyle(e).getPropertyValue(n);if(o){const u=o.trim();return _y(u)?parseFloat(u):u}return Dp(s)?ix(s,e,t+1):s}function u0(r){const e=[{},{}];return r==null||r.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function Wp(r,e,t,n){if(typeof e=="function"){const[s,o]=u0(n);e=e(t!==void 0?t:r.custom,s,o)}if(typeof e=="string"&&(e=r.variants&&r.variants[e]),typeof e=="function"){const[s,o]=u0(n);e=e(t!==void 0?t:r.custom,s,o)}return e}function Da(r,e,t){const n=r.getProps();return Wp(n,e,t!==void 0?t:n.custom,r)}const nx=new Set(["width","height","top","left","right","bottom",...Fs]),xf=r=>Array.isArray(r);function IE(r,e,t){r.hasValue(e)?r.getValue(e).set(t):r.addValue(e,ki(t))}function UE(r){return xf(r)?r[r.length-1]||0:r}function kE(r,e){const t=Da(r,e);let{transitionEnd:n={},transition:s={},...o}=t||{};o={...o,...n};for(const u in o){const c=UE(o[u]);IE(r,u,c)}}const Er=r=>!!(r&&r.getVelocity);function OE(r){return!!(Er(r)&&r.add)}function Sf(r,e){const t=r.getValue("willChange");if(OE(t))return t.add(e);if(!t&&ta.WillChange){const n=new ta.WillChange("auto");r.addValue("willChange",n),n.add(e)}}function jp(r){return r.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const FE="framerAppearId",ax="data-"+jp(FE);function sx(r){return r.props[ax]}function zE({protectedKeys:r,needsAnimating:e},t){const n=r.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,n}function ox(r,e,{delay:t=0,transitionOverride:n,type:s}={}){let{transition:o,transitionEnd:u,...c}=e;const f=r.getDefaultTransition();o=o?rx(o,f):f;const h=o==null?void 0:o.reduceMotion,p=o==null?void 0:o.skipAnimations;n&&(o=n);const v=[],g=s&&r.animationState&&r.animationState.getState()[s],S=o==null?void 0:o.path;S&&S.animateVisualElement(r,c,o,t,v);for(const b in c){const w=r.getValue(b,r.latestValues[b]??null),x=c[b];if(x===void 0||g&&zE(g,b))continue;const y={delay:t,...Hp(o||{},b)};p&&(y.skipAnimations=!0);const R=w.get();if(R!==void 0&&!w.isAnimating()&&!Array.isArray(x)&&x===R&&!y.velocity){Et.update(()=>w.set(x));continue}let I=!1;if(window.MotionHandoffAnimation){const D=sx(r);if(D){const k=window.MotionHandoffAnimation(D,b,Et);k!==null&&(y.startTime=k,I=!0)}}Sf(r,b);const T=h??r.shouldReduceMotion;w.start(Gp(b,w,x,T&&nx.has(b)?{type:!1}:y,r,I));const L=w.animation;L&&v.push(L)}if(u){const b=()=>Et.update(()=>{u&&kE(r,u)});v.length?Promise.all(v).then(b):b()}return v}function bf(r,e,t={}){var n;const s=Da(r,e,t.type==="exit"?(n=r.presenceContext)==null?void 0:n.custom:void 0);let{transition:o=r.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(o=t.transitionOverride);const u=s?()=>Promise.all(ox(r,s,t)):()=>Promise.resolve(),c=r.variantChildren&&r.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=o;return BE(r,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[h,p]=f==="beforeChildren"?[u,c]:[c,u];return h().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function BE(r,e,t=0,n=0,s=0,o=1,u){const c=[];for(const f of r.variantChildren)f.notify("AnimationStart",e),c.push(bf(f,e,{...u,delay:t+(typeof n=="function"?0:n)+tx(r.variantChildren,f,n,s,o)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(c)}function VE(r,e,t={}){r.notify("AnimationStart",e);let n;if(Array.isArray(e)){const s=e.map(o=>bf(r,o,t));n=Promise.all(s)}else if(typeof e=="string")n=bf(r,e,t);else{const s=typeof e=="function"?Da(r,e,t.custom):e;n=Promise.all(ox(r,s,t))}return n.then(()=>{r.notify("AnimationComplete",e)})}const HE={test:r=>r==="auto",parse:r=>r},lx=r=>e=>e.test(r),ux=[Os,Ye,en,bn,vM,gM,HE],c0=r=>ux.find(lx(r));function GE(r){return typeof r=="number"?r===0:r!==null?r==="none"||r==="0"||xy(r):!0}const WE=new Set(["brightness","contrast","saturate","opacity"]);function jE(r){const[e,t]=r.slice(0,-1).split("(");if(e==="drop-shadow")return r;const[n]=t.match(Np)||[];if(!n)return r;const s=t.replace(n,"");let o=WE.has(e)?1:0;return n!==t&&(o*=100),e+"("+o+s+")"}const XE=/\b([a-z-]*)\(.*?\)/gu,Mf={...Fi,getAnimatableNone:r=>{const e=r.match(XE);return e?e.map(jE).join(" "):r}},Ef={...Fi,getAnimatableNone:r=>{const e=Fi.parse(r);return Fi.createTransformer(r)(e.map(t=>typeof t=="number"?0:typeof t=="object"?{...t,alpha:1}:t))}},d0={...Os,transform:Math.round},YE={rotate:bn,pathRotation:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scale:hu,scaleX:hu,scaleY:hu,scaleZ:hu,skew:bn,skewX:bn,skewY:bn,distance:Ye,translateX:Ye,translateY:Ye,translateZ:Ye,x:Ye,y:Ye,z:Ye,perspective:Ye,transformPerspective:Ye,opacity:jo,originX:Zv,originY:Zv,originZ:Ye},oc={borderWidth:Ye,borderTopWidth:Ye,borderRightWidth:Ye,borderBottomWidth:Ye,borderLeftWidth:Ye,borderRadius:Ye,borderTopLeftRadius:Ye,borderTopRightRadius:Ye,borderBottomRightRadius:Ye,borderBottomLeftRadius:Ye,width:Ye,maxWidth:Ye,height:Ye,maxHeight:Ye,top:Ye,right:Ye,bottom:Ye,left:Ye,inset:Ye,insetBlock:Ye,insetBlockStart:Ye,insetBlockEnd:Ye,insetInline:Ye,insetInlineStart:Ye,insetInlineEnd:Ye,padding:Ye,paddingTop:Ye,paddingRight:Ye,paddingBottom:Ye,paddingLeft:Ye,paddingBlock:Ye,paddingBlockStart:Ye,paddingBlockEnd:Ye,paddingInline:Ye,paddingInlineStart:Ye,paddingInlineEnd:Ye,margin:Ye,marginTop:Ye,marginRight:Ye,marginBottom:Ye,marginLeft:Ye,marginBlock:Ye,marginBlockStart:Ye,marginBlockEnd:Ye,marginInline:Ye,marginInlineStart:Ye,marginInlineEnd:Ye,fontSize:Ye,backgroundPositionX:Ye,backgroundPositionY:Ye,...YE,zIndex:d0,fillOpacity:jo,strokeOpacity:jo,numOctaves:d0},qE={...oc,color:sr,backgroundColor:sr,outlineColor:sr,fill:sr,stroke:sr,borderColor:sr,borderTopColor:sr,borderRightColor:sr,borderBottomColor:sr,borderLeftColor:sr,filter:Mf,WebkitFilter:Mf,mask:Ef,WebkitMask:Ef},cx=r=>qE[r],KE=new Set([Mf,Ef]);function dx(r,e){let t=cx(r);return KE.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const $E=new Set(["auto","none","0"]);function ZE(r,e,t){let n=0,s;for(;n<r.length&&!s;){const o=r[n];typeof o=="string"&&!$E.has(o)&&Ns(o).values.length&&(s=r[n]),n++}if(s&&t)for(const o of e)r[o]=dx(t,s)}class QE extends zp{constructor(e,t,n,s,o){super(e,t,n,s,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),Dp(v))){const g=ix(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!nx.has(n)||e.length!==2)return;const[s,o]=e,u=c0(s),c=c0(o),f=$v(s),h=$v(o);if(f!==h&&Jn[n]){this.needsMeasurement=!0;return}if(u!==c)if(a0(u)&&a0(c))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else Jn[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let s=0;s<e.length;s++)(e[s]===null||GE(e[s]))&&n.push(s);n.length&&ZE(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(n,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const u=s.length-1,c=s[u];s[u]=Jn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(e=this.removedTransforms)!=null&&e.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Xp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function hx(r,e,t){if(r==null)return[];if(r instanceof EventTarget)return[r];if(typeof r=="string"){const n=document.querySelectorAll(r);return n?Array.from(n):[]}return Array.from(r).filter(n=>n!=null)}const wf=(r,e)=>e&&typeof r=="number"?e.transform(r):r;function Vo(r){return yy(r)&&"offsetHeight"in r&&!("ownerSVGElement"in r)}const{schedule:Is,cancel:fx}=Dy(queueMicrotask,!1),Ii={x:!1,y:!1};function px(){return Ii.x||Ii.y}function JE(r){return r==="x"||r==="y"?Ii[r]?null:(Ii[r]=!0,()=>{Ii[r]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function mx(r,e){const t=hx(r),n=new AbortController,s={passive:!0,...e,signal:n.signal};return[t,s,()=>n.abort()]}function ew(r){return!(r.pointerType==="touch"||px())}function tw(r,e,t={}){const[n,s,o]=mx(r,t);return n.forEach(u=>{let c=!1,f=!1,h;const p=()=>{u.removeEventListener("pointerleave",b)},v=x=>{h&&(h(x),h=void 0),p()},g=x=>{c=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),f&&(f=!1,v(x))},S=()=>{c=!0,window.addEventListener("pointerup",g,s),window.addEventListener("pointercancel",g,s)},b=x=>{if(x.pointerType!=="touch"){if(c){f=!0;return}v(x)}},w=x=>{if(!ew(x))return;f=!1;const y=e(u,x);typeof y=="function"&&(h=y,u.addEventListener("pointerleave",b,s))};u.addEventListener("pointerenter",w,s),u.addEventListener("pointerdown",S,s)}),o}const gx=(r,e)=>e?r===e?!0:gx(r,e.parentElement):!1,Yp=r=>r.pointerType==="mouse"?typeof r.button!="number"||r.button<=0:r.isPrimary!==!1,rw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function iw(r){return rw.has(r.tagName)||r.isContentEditable===!0}const nw=new Set(["INPUT","SELECT","TEXTAREA"]);function aw(r){return nw.has(r.tagName)||r.isContentEditable===!0}const Wu=new WeakSet;function h0(r){return e=>{e.key==="Enter"&&r(e)}}function gh(r,e){r.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const sw=(r,e)=>{const t=r.currentTarget;if(!t)return;const n=h0(()=>{if(Wu.has(t))return;gh(t,"down");const s=h0(()=>{gh(t,"up")}),o=()=>gh(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",o,e)});t.addEventListener("keydown",n,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",n),e)};function f0(r){return Yp(r)&&!px()}const p0=new WeakSet;function ow(r,e,t={}){const[n,s,o]=mx(r,t),u=c=>{const f=c.currentTarget;if(!f0(c)||p0.has(c))return;Wu.add(f),t.stopPropagation&&p0.add(c);const h=e(f,c),p={...s,capture:!0},v=(b,w)=>{window.removeEventListener("pointerup",g,p),window.removeEventListener("pointercancel",S,p),Wu.has(f)&&Wu.delete(f),f0(b)&&typeof h=="function"&&h(b,{success:w})},g=b=>{v(b,f===window||f===document||t.useGlobalTarget||gx(f,b.target))},S=b=>{v(b,!1)};window.addEventListener("pointerup",g,p),window.addEventListener("pointercancel",S,p)};return n.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,s),Vo(c)&&(c.addEventListener("focus",f=>sw(f,s)),!iw(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),o}function qp(r){return yy(r)&&"ownerSVGElement"in r}const ju=new WeakMap;let bs;const vx=(r,e,t)=>(n,s)=>s&&s[0]?s[0][r+"Size"]:qp(n)&&"getBBox"in n?n.getBBox()[e]:n[t],lw=vx("inline","width","offsetWidth"),uw=vx("block","height","offsetHeight");function cw({target:r,borderBoxSize:e}){var t;(t=ju.get(r))==null||t.forEach(n=>{n(r,{get width(){return lw(r,e)},get height(){return uw(r,e)}})})}function dw(r){r.forEach(cw)}function hw(){typeof ResizeObserver>"u"||(bs=new ResizeObserver(dw))}function fw(r,e){bs||hw();const t=hx(r);return t.forEach(n=>{let s=ju.get(n);s||(s=new Set,ju.set(n,s)),s.add(e),bs==null||bs.observe(n)}),()=>{t.forEach(n=>{const s=ju.get(n);s==null||s.delete(e),s!=null&&s.size||bs==null||bs.unobserve(n)})}}const Xu=new Set;let Ts;function pw(){Ts=()=>{const r={get width(){return window.innerWidth},get height(){return window.innerHeight}};Xu.forEach(e=>e(r))},window.addEventListener("resize",Ts)}function mw(r){return Xu.add(r),Ts||pw(),()=>{Xu.delete(r),!Xu.size&&typeof Ts=="function"&&(window.removeEventListener("resize",Ts),Ts=void 0)}}function Tf(r,e){return typeof r=="function"?mw(r):fw(r,e)}function _x(r,e){let t;const n=()=>{const{currentTime:s}=e,o=(s===null?0:s.value)/100;t!==o&&r(o),t=o};return Et.preUpdate(n,!0),()=>yi(n)}function gw(r){return qp(r)&&r.tagName==="svg"}function vw(...r){const e=!Array.isArray(r[0]),t=e?0:-1,n=r[0+t],s=r[1+t],o=r[2+t],u=r[3+t],c=Op(s,o,u);return e?c(n):c}const _w=[...ux,sr,Fi],yw=r=>_w.find(lx(r)),m0=()=>({translate:0,scale:1,origin:0,originPoint:0}),As=()=>({x:m0(),y:m0()}),g0=()=>({min:0,max:0}),dr=()=>({x:g0(),y:g0()}),xw=new WeakMap;function Ec(r){return r!==null&&typeof r=="object"&&typeof r.start=="function"}function Xo(r){return typeof r=="string"||Array.isArray(r)}const Kp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$p=["initial",...Kp];function wc(r){return Ec(r.animate)||$p.some(e=>Xo(r[e]))}function yx(r){return!!(wc(r)||r.variants)}function Sw(r,e,t){for(const n in e){const s=e[n],o=t[n];if(Er(s))r.addValue(n,s);else if(Er(o))r.addValue(n,ki(s,{owner:r}));else if(o!==s)if(r.hasValue(n)){const u=r.getValue(n);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=r.getStaticValue(n);r.addValue(n,ki(u!==void 0?u:s,{owner:r}))}}for(const n in t)e[n]===void 0&&r.removeValue(n);return e}const Af={current:null},xx={current:!1},bw=typeof window<"u";function Mw(){if(xx.current=!0,!!bw)if(window.matchMedia){const r=window.matchMedia("(prefers-reduced-motion)"),e=()=>Af.current=r.matches;r.addEventListener("change",e),e()}else Af.current=!1}const v0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lc={};function Sx(r){lc=r}function Ew(){return lc}class ww{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:s,skipAnimations:o,blockInitialAnimation:u,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Fr.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Et.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=o,this.options=f,this.blockInitialAnimation=!!u,this.isControllingVariants=wc(t),this.isVariantNode=yx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in g){const b=g[S];h[S]!==void 0&&Er(b)&&b.set(h[S])}}mount(e){var t,n;if(this.hasBeenMounted)for(const s in this.initialValues)(t=this.values.get(s))==null||t.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=e,xw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(xx.current||Mw(),this.shouldReduceMotion=Af.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),yi(this.notifyUpdate),yi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&ex.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:c,times:f,ease:h,duration:p}=t.accelerate,v=new Qy({element:this.current,name:e,keyframes:c,times:f,ease:h,duration:ai(p)}),g=u(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const n=zs.has(e);n&&this.onBindTransform&&this.onBindTransform();const s=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Et.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),o&&o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lc){const t=lc[e];if(!t)continue;const{isEnabled:n,Feature:s}=t;if(!this.features[e]&&s&&n(this.props)&&(this.features[e]=new s(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dr()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<v0.length;n++){const s=v0[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const o="on"+s,u=e[o];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=Sw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ki(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(_y(n)||xy(n))?n=parseFloat(n):!yw(n)&&Fi.test(t)&&(n=dx(e,t)),this.setBaseTarget(e,Er(n)?n.get():n)),Er(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=Wp(this.props,n,(t=this.presenceContext)==null?void 0:t.custom);u&&(s=u[e])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Er(o)?o:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Rp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Is.render(this.render)}}class bx extends ww{constructor(){super(...arguments),this.KeyframeResolver=QE}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Er(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ra{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Mx({top:r,left:e,right:t,bottom:n}){return{x:{min:e,max:t},y:{min:r,max:n}}}function Tw({x:r,y:e}){return{top:e.min,right:r.max,bottom:e.max,left:r.min}}function Aw(r,e){if(!e)return r;const t=e({x:r.left,y:r.top}),n=e({x:r.right,y:r.bottom});return{top:t.y,left:t.x,bottom:n.y,right:n.x}}function vh(r){return r===void 0||r===1}function Rf({scale:r,scaleX:e,scaleY:t}){return!vh(r)||!vh(e)||!vh(t)}function Ta(r){return Rf(r)||Ex(r)||r.z||r.rotate||r.rotateX||r.rotateY||r.skewX||r.skewY}function Ex(r){return _0(r.x)||_0(r.y)}function _0(r){return r&&r!=="0%"}function uc(r,e,t){const n=r-t,s=e*n;return t+s}function y0(r,e,t,n,s){return s!==void 0&&(r=uc(r,s,n)),uc(r,t,n)+e}function Cf(r,e=0,t=1,n,s){r.min=y0(r.min,e,t,n,s),r.max=y0(r.max,e,t,n,s)}function wx(r,{x:e,y:t}){Cf(r.x,e.translate,e.scale,e.originPoint),Cf(r.y,t.translate,t.scale,t.originPoint)}const x0=.999999999999,S0=1.0000000000001;function Rw(r,e,t,n=!1){var s;const o=t.length;if(!o)return;e.x=e.y=1;let u,c;for(let f=0;f<o;f++){u=t[f],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(n&&u.options.layoutScroll&&u.scroll&&u!==u.root&&($i(r.x,-u.scroll.offset.x),$i(r.y,-u.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,wx(r,c)),n&&Ta(u.latestValues)&&Yu(r,u.latestValues,(s=u.layout)==null?void 0:s.layoutBox))}e.x<S0&&e.x>x0&&(e.x=1),e.y<S0&&e.y>x0&&(e.y=1)}function $i(r,e){r.min+=e,r.max+=e}function b0(r,e,t,n,s=.5){const o=Ut(r.min,r.max,s);Cf(r,e,t,o,n)}function M0(r,e){return typeof r=="string"?parseFloat(r)/100*(e.max-e.min):r}function Yu(r,e,t){const n=t??r;b0(r.x,M0(e.x,n.x),e.scaleX,e.scale,e.originX),b0(r.y,M0(e.y,n.y),e.scaleY,e.scale,e.originY)}function Tx(r,e){return Mx(Aw(r.getBoundingClientRect(),e))}function Cw(r,e,t){const n=Tx(r,t),{scroll:s}=e;return s&&($i(n.x,s.offset.x),$i(n.y,s.offset.y)),n}const Pw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Lw=Fs.length;function Dw(r,e,t){let n="",s=!0;for(let u=0;u<Lw;u++){const c=Fs[u],f=r[c];if(f===void 0)continue;let h=!0;if(typeof f=="number")h=f===(c.startsWith("scale")?1:0);else{const p=parseFloat(f);h=c.startsWith("scale")?p===1:p===0}if(!h||t){const p=wf(f,oc[c]);if(!h){s=!1;const v=Pw[c]||c;n+=`${v}(${p}) `}t&&(e[c]=p)}}const o=r.pathRotation;return o&&(s=!1,n+=`rotate(${wf(o,oc.pathRotation)}) `),n=n.trim(),t?n=t(e,s?"":n):s&&(n="none"),n}function Zp(r,e,t){const{style:n,vars:s,transformOrigin:o}=r;let u=!1,c=!1;for(const f in e){const h=e[f];if(zs.has(f)){u=!0;continue}else if(Iy(f)){s[f]=h;continue}else{const p=wf(h,oc[f]);f.startsWith("origin")?(c=!0,o[f]=p):n[f]=p}}if(e.transform||(u||t?n.transform=Dw(e,r.transform,t):n.transform&&(n.transform="none")),c){const{originX:f="50%",originY:h="50%",originZ:p=0}=o;n.transformOrigin=`${f} ${h} ${p}`}}function Ax(r,{style:e,vars:t},n,s){const o=r.style;let u;for(u in e)o[u]=e[u];s==null||s.applyProjectionStyles(o,n);for(u in t)o.setProperty(u,t[u])}function E0(r,e){return e.max===e.min?0:r/(e.max-e.min)*100}const To={correct:(r,e)=>{if(!e.target)return r;if(typeof r=="string")if(Ye.test(r))r=parseFloat(r);else return r;const t=E0(r,e.target.x),n=E0(r,e.target.y);return`${t}% ${n}%`}},Nw={correct:(r,{treeScale:e,projectionDelta:t})=>{const n=r,s=Fi.parse(r);if(s.length>5)return n;const o=Fi.createTransformer(r),u=typeof s[0]!="number"?1:0,c=t.x.scale*e.x,f=t.y.scale*e.y;s[0+u]/=c,s[1+u]/=f;const h=Ut(c,f,.5);return typeof s[2+u]=="number"&&(s[2+u]/=h),typeof s[3+u]=="number"&&(s[3+u]/=h),o(s)}},Pf={borderRadius:{...To,applyTo:[...Xp]},borderTopLeftRadius:To,borderTopRightRadius:To,borderBottomLeftRadius:To,borderBottomRightRadius:To,boxShadow:Nw};function Rx(r,{layout:e,layoutId:t}){return zs.has(r)||r.startsWith("origin")||(e||t!==void 0)&&(!!Pf[r]||r==="opacity")}function Qp(r,e,t){var n;const s=r.style,o=e==null?void 0:e.style,u={};if(!s)return u;for(const c in s)(Er(s[c])||o&&Er(o[c])||Rx(c,r)||((n=t==null?void 0:t.getValue(c))==null?void 0:n.liveStyle)!==void 0)&&(u[c]=s[c]);return u}function Iw(r){return window.getComputedStyle(r)}class Uw extends bx{constructor(){super(...arguments),this.type="html",this.renderInstance=Ax}mount(e){bc(!!e.style),super.mount(e)}readValueFromInstance(e,t){var n;if(zs.has(t))return(n=this.projection)!=null&&n.isProjecting?pf(t):tE(e,t);{const s=Iw(e),o=(Iy(t)?s.getPropertyValue(t):s[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Tx(e,t)}build(e,t,n){Zp(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Qp(e,t,n)}}const kw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ow={offset:"strokeDashoffset",array:"strokeDasharray"};function Fw(r,e,t=1,n=0,s=!0){r.pathLength=1;const o=s?kw:Ow;r[o.offset]=`${-n}`,r[o.array]=`${e} ${t}`}const zw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Cx(r,{attrX:e,attrY:t,attrScale:n,pathLength:s,pathSpacing:o=1,pathOffset:u=0,...c},f,h,p){if(Zp(r,c,h),f){r.style.viewBox&&(r.attrs.viewBox=r.style.viewBox);return}r.attrs=r.style,r.style={};const{attrs:v,style:g}=r;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const S of zw)v[S]!==void 0&&(g[S]=v[S],delete v[S]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),n!==void 0&&(v.scale=n),s!==void 0&&Fw(v,s,o,u,!1)}const Px=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Lx=r=>typeof r=="string"&&r.toLowerCase()==="svg";function Bw(r,e,t,n){Ax(r,e,void 0,n);for(const s in e.attrs)r.setAttribute(Px.has(s)?s:jp(s),e.attrs[s])}function Dx(r,e,t){const n=Qp(r,e,t);for(const s in r)if(Er(r[s])||Er(e[s])){const o=Fs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[o]=r[s]}return n}class Vw extends bx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dr}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zs.has(t)){const n=cx(t);return n&&n.default||0}return t=Px.has(t)?t:jp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Dx(e,t,n)}build(e,t,n){Cx(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,s){Bw(e,t,n,s)}mount(e){this.isSVGTag=Lx(e.tagName),super.mount(e)}}const Hw=$p.length;function Nx(r){if(!r)return;if(!r.isControllingVariants){const t=r.parent?Nx(r.parent)||{}:{};return r.props.initial!==void 0&&(t.initial=r.props.initial),t}const e={};for(let t=0;t<Hw;t++){const n=$p[t],s=r.props[n];(Xo(s)||s===!1)&&(e[n]=s)}return e}function Ix(r,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==r.length)return!1;for(let n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}const Gw=[...Kp].reverse(),Ww=Kp.length;function jw(r){return e=>Promise.all(e.map(({animation:t,options:n})=>VE(r,t,n)))}function Xw(r){let e=jw(r),t=w0(),n=!0,s=!1;const o=h=>(p,v)=>{var g;const S=Da(r,v,h==="exit"?(g=r.presenceContext)==null?void 0:g.custom:void 0);if(S){const{transition:b,transitionEnd:w,...x}=S;p={...p,...x,...w}}return p};function u(h){e=h(r)}function c(h){const{props:p}=r,v=Nx(r.parent)||{},g=[],S=new Set;let b={},w=1/0;for(let y=0;y<Ww;y++){const R=Gw[y],I=t[R],T=p[R]!==void 0?p[R]:v[R],L=Xo(T),D=R===h?I.isActive:null;D===!1&&(w=y);let k=T===v[R]&&T!==p[R]&&L;if(k&&(n||s)&&r.manuallyAnimateOnMount&&(k=!1),I.protectedKeys={...b},!I.isActive&&D===null||!T&&!I.prevProp||Ec(T)||typeof T=="boolean")continue;if(R==="exit"&&I.isActive&&D!==!0){I.prevResolvedValues&&(b={...b,...I.prevResolvedValues});continue}const M=Yw(I.prevProp,T);let N=M||R===h&&I.isActive&&!k&&L||y>w&&L,F=!1;const H=Array.isArray(T)?T:[T];let j=H.reduce(o(R),{});D===!1&&(j={});const{prevResolvedValues:Q={}}=I,B={...Q,...j},ne=te=>{N=!0,S.has(te)&&(F=!0,S.delete(te)),I.needsAnimating[te]=!0;const Z=r.getValue(te);Z&&(Z.liveStyle=!1)};for(const te in B){const Z=j[te],$=Q[te];if(b.hasOwnProperty(te))continue;let q=!1;xf(Z)&&xf($)?q=!Ix(Z,$)||M:q=Z!==$,q?Z!=null?ne(te):S.add(te):Z!==void 0&&S.has(te)?ne(te):I.protectedKeys[te]=!0}I.prevProp=T,I.prevResolvedValues=j,I.isActive&&(b={...b,...j}),(n||s)&&r.blockInitialAnimation&&(N=!1);const fe=k&&M;N&&(!fe||F)&&g.push(...H.map(te=>{const Z={type:R};if(typeof te=="string"&&(n||s)&&!fe&&r.manuallyAnimateOnMount&&r.parent){const{parent:$}=r,q=Da($,te);if($.enteringChildren&&q){const{delayChildren:U}=q.transition||{};Z.delay=tx($.enteringChildren,r,U)}}return{animation:te,options:Z}}))}if(S.size){const y={};if(typeof p.initial!="boolean"){const R=Da(r,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(y.transition=R.transition)}S.forEach(R=>{const I=r.getBaseTarget(R),T=r.getValue(R);T&&(T.liveStyle=!0),y[R]=I??null}),g.push({animation:y})}let x=!!g.length;return n&&(p.initial===!1||p.initial===p.animate)&&!r.manuallyAnimateOnMount&&(x=!1),n=!1,s=!1,x?e(g):Promise.resolve()}function f(h,p){var v;if(t[h].isActive===p)return Promise.resolve();(v=r.variantChildren)==null||v.forEach(S=>{var b;return(b=S.animationState)==null?void 0:b.setActive(h,p)}),t[h].isActive=p;const g=c(h);for(const S in t)t[S].protectedKeys={};return g}return{animateChanges:c,setActive:f,setAnimateFunction:u,getState:()=>t,reset:()=>{t=w0(),s=!0}}}function Yw(r,e){return typeof e=="string"?e!==r:Array.isArray(e)?!Ix(e,r):!1}function xa(r=!1){return{isActive:r,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function w0(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}function Lf(r,e){r.min=e.min,r.max=e.max}function Pi(r,e){Lf(r.x,e.x),Lf(r.y,e.y)}function T0(r,e){r.translate=e.translate,r.scale=e.scale,r.originPoint=e.originPoint,r.origin=e.origin}const Ux=1e-4,qw=1-Ux,Kw=1+Ux,kx=.01,$w=0-kx,Zw=0+kx;function zr(r){return r.max-r.min}function Qw(r,e,t){return Math.abs(r-e)<=t}function A0(r,e,t,n=.5){r.origin=n,r.originPoint=Ut(e.min,e.max,r.origin),r.scale=zr(t)/zr(e),r.translate=Ut(t.min,t.max,r.origin)-r.originPoint,(r.scale>=qw&&r.scale<=Kw||isNaN(r.scale))&&(r.scale=1),(r.translate>=$w&&r.translate<=Zw||isNaN(r.translate))&&(r.translate=0)}function Ho(r,e,t,n){A0(r.x,e.x,t.x,n?n.originX:void 0),A0(r.y,e.y,t.y,n?n.originY:void 0)}function R0(r,e,t,n=0){const s=n?Ut(t.min,t.max,n):t.min;r.min=s+e.min,r.max=r.min+zr(e)}function Jw(r,e,t,n){R0(r.x,e.x,t.x,n==null?void 0:n.x),R0(r.y,e.y,t.y,n==null?void 0:n.y)}function C0(r,e,t,n=0){const s=n?Ut(t.min,t.max,n):t.min;r.min=e.min-s,r.max=r.min+zr(e)}function cc(r,e,t,n){C0(r.x,e.x,t.x,n==null?void 0:n.x),C0(r.y,e.y,t.y,n==null?void 0:n.y)}function P0(r,e,t,n,s){return r-=e,r=uc(r,1/t,n),s!==void 0&&(r=uc(r,1/s,n)),r}function eT(r,e=0,t=1,n=.5,s,o=r,u=r){if(en.test(e)&&(e=parseFloat(e),e=Ut(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Ut(o.min,o.max,n);r===o&&(c-=e),r.min=P0(r.min,e,t,c,s),r.max=P0(r.max,e,t,c,s)}function L0(r,e,[t,n,s],o,u){eT(r,e[t],e[n],e[s],e.scale,o,u)}const tT=["x","scaleX","originX"],rT=["y","scaleY","originY"];function D0(r,e,t,n){L0(r.x,e,tT,t?t.x:void 0,n?n.x:void 0),L0(r.y,e,rT,t?t.y:void 0,n?n.y:void 0)}function N0(r){return r.translate===0&&r.scale===1}function Ox(r){return N0(r.x)&&N0(r.y)}function I0(r,e){return r.min===e.min&&r.max===e.max}function iT(r,e){return I0(r.x,e.x)&&I0(r.y,e.y)}function U0(r,e){return Math.round(r.min)===Math.round(e.min)&&Math.round(r.max)===Math.round(e.max)}function Fx(r,e){return U0(r.x,e.x)&&U0(r.y,e.y)}function k0(r){return zr(r.x)/zr(r.y)}function O0(r,e){return r.translate===e.translate&&r.scale===e.scale&&r.originPoint===e.originPoint}function Ki(r){return[r("x"),r("y")]}function nT(r,e,t){let n="";const s=r.x.translate/e.x,o=r.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((s||o||u)&&(n=`translate3d(${s}px, ${o}px, ${u}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:v,rotateX:g,rotateY:S,skewX:b,skewY:w}=t;h&&(n=`perspective(${h}px) ${n}`),p&&(n+=`rotate(${p}deg) `),v&&(n+=`rotate(${v}deg) `),g&&(n+=`rotateX(${g}deg) `),S&&(n+=`rotateY(${S}deg) `),b&&(n+=`skewX(${b}deg) `),w&&(n+=`skewY(${w}deg) `)}const c=r.x.scale*e.x,f=r.y.scale*e.y;return(c!==1||f!==1)&&(n+=`scale(${c}, ${f})`),n||"none"}const aT=Xp.length,F0=r=>typeof r=="string"?parseFloat(r):r,z0=r=>typeof r=="number"||Ye.test(r);function sT(r,e,t,n,s,o){s?(r.opacity=Ut(0,t.opacity??1,oT(n)),r.opacityExit=Ut(e.opacity??1,0,lT(n))):o&&(r.opacity=Ut(e.opacity??1,t.opacity??1,n));for(let u=0;u<aT;u++){const c=Xp[u];let f=B0(e,c),h=B0(t,c);f===void 0&&h===void 0||(f||(f=0),h||(h=0),f===0||h===0||z0(f)===z0(h)?(r[c]=Math.max(Ut(F0(f),F0(h),n),0),(en.test(h)||en.test(f))&&(r[c]+="%")):r[c]=h)}(e.rotate||t.rotate)&&(r.rotate=Ut(e.rotate||0,t.rotate||0,n))}function B0(r,e){return r[e]!==void 0?r[e]:r.borderRadius}const oT=zx(0,.5,Ry),lT=zx(.5,.95,Kr);function zx(r,e,t){return n=>n<r?0:n>e?1:t(Ds(r,e,n))}function uT(r,e,t){const n=Er(r)?r:ki(r);return n.start(Gp("",n,e,t)),n.animation}function Yo(r,e,t,n={passive:!0}){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}const cT=(r,e)=>r.depth-e.depth;class dT{constructor(){this.children=[],this.isDirty=!1}add(e){Ap(this.children,e),this.isDirty=!0}remove(e){rc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cT),this.isDirty=!1,this.children.forEach(e)}}function hT(r,e){const t=Fr.now(),n=({timestamp:s})=>{const o=s-t;o>=e&&(yi(n),r(o-e))};return Et.setup(n,!0),()=>yi(n)}function qu(r){return Er(r)?r.get():r}class fT{constructor(){this.members=[]}add(e){Ap(this.members,e);for(let t=this.members.length-1;t>=0;t--){const n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;const s=n.instance;(!s||s.isConnected===!1)&&!n.snapshot&&(rc(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(rc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let n=this.members.indexOf(e)-1;n>=0;n--){const s=this.members[n];if(s.isPresent!==!1&&((t=s.instance)==null?void 0:t.isConnected)!==!1)return this.promote(s),!0}return!1}promote(e,t){var n;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:o}=s.options,{layoutDependency:u}=e.options;(o===void 0||o!==u)&&(e.resumeFrom=s,t&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(n=e.root)!=null&&n.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,n,s,o,u;(n=(t=e.options).onExitComplete)==null||n.call(t),(u=(s=e.resumingFrom)==null?void 0:(o=s.options).onExitComplete)==null||u.call(o)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ku={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_h=["","X","Y","Z"],pT=1e3;let mT=0;function yh(r,e,t,n){const{latestValues:s}=e;s[r]&&(t[r]=s[r],e.setStaticValue(r,0),n&&(n[r]=0))}function Bx(r){if(r.hasCheckedOptimisedAppear=!0,r.root===r)return;const{visualElement:e}=r.options;if(!e)return;const t=sx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:o}=r.options;window.MotionCancelOptimisedAnimation(t,"transform",Et,!(s||o))}const{parent:n}=r;n&&!n.hasCheckedOptimisedAppear&&Bx(n)}function Vx({attachResizeListener:r,defaultParent:e,measureScroll:t,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(o={},u=e==null?void 0:e()){this.id=mT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_T),this.nodes.forEach(ET),this.nodes.forEach(wT),this.nodes.forEach(yT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new dT)}addEventListener(o,u){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rp),this.eventHandlers.get(o).add(u)}notifyListeners(o,...u){const c=this.eventHandlers.get(o);c&&c.notify(...u)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=qp(o)&&!gw(o),this.instance=o;const{layoutId:u,layout:c,visualElement:f}=this.options;if(f&&!f.current&&f.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||u)&&(this.isLayoutDirty=!0),r){let h,p=0;const v=()=>this.root.updateBlockedByResize=!1;Et.read(()=>{p=window.innerWidth}),r(o,()=>{const g=window.innerWidth;g!==p&&(p=g,this.root.updateBlockedByResize=!0,h&&h(),h=hT(v,250),Ku.hasAnimatedSinceResize&&(Ku.hasAnimatedSinceResize=!1,this.nodes.forEach(G0)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&f&&(u||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||f.getDefaultTransition()||PT,{onLayoutAnimationStart:b,onLayoutAnimationComplete:w}=f.getProps(),x=!this.targetLayout||!Fx(this.targetLayout,g),y=!p&&v;if(this.options.layoutRoot||this.resumeFrom||y||p&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Hp(S,"layout"),onPlay:b,onComplete:w};(f.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(h,y,R.path)}else p||G0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),yi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const p=this.path[h];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:u,layout:c}=this.options;if(u===void 0&&!c)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const u=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),u&&this.nodes.forEach(ST),this.nodes.forEach(V0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(H0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bT),this.nodes.forEach(MT),this.nodes.forEach(gT),this.nodes.forEach(vT)):this.nodes.forEach(H0),this.clearAllSnapshots();const o=Fr.now();xr.delta=Vi(0,1e3/60,o-xr.timestamp),xr.timestamp=o,xr.isProcessing=!0,ch.update.process(xr),ch.preRender.process(xr),ch.render.process(xr),xr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Is.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xT),this.sharedNodes.forEach(AT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Et.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Et.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!zr(this.snapshot.measuredBox.x)&&!zr(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dr()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(u=!1),u&&this.instance){const c=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Ox(this.projectionDelta),c=this.getTransformTemplate(),f=c?c(this.latestValues,""):void 0,h=f!==this.prevTransformTemplateValue;o&&this.instance&&(u||Ta(this.latestValues)||h)&&(s(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const u=this.measurePageBox();let c=this.removeElementScroll(u);return o&&(c=this.removeTransform(c)),LT(c),{animationId:this.root.animationId,measuredBox:u,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:u}=this.options;if(!u)return dr();const c=u.measureViewportBox();if(!((o=this.scroll)!=null&&o.wasRoot||this.path.some(DT))){const{scroll:f}=this.root;f&&($i(c.x,f.offset.x),$i(c.y,f.offset.y))}return c}removeElementScroll(o){var u;const c=dr();if(Pi(c,o),(u=this.scroll)!=null&&u.wasRoot)return c;for(let f=0;f<this.path.length;f++){const h=this.path[f],{scroll:p,options:v}=h;h!==this.root&&p&&v.layoutScroll&&(p.wasRoot&&Pi(c,o),$i(c.x,p.offset.x),$i(c.y,p.offset.y))}return c}applyTransform(o,u=!1,c){var f,h;const p=c||dr();Pi(p,o);for(let v=0;v<this.path.length;v++){const g=this.path[v];!u&&g.options.layoutScroll&&g.scroll&&g!==g.root&&($i(p.x,-g.scroll.offset.x),$i(p.y,-g.scroll.offset.y)),Ta(g.latestValues)&&Yu(p,g.latestValues,(f=g.layout)==null?void 0:f.layoutBox)}return Ta(this.latestValues)&&Yu(p,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),p}removeTransform(o){var u;const c=dr();Pi(c,o);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!Ta(h.latestValues))continue;let p;h.instance&&(Rf(h.latestValues)&&h.updateSnapshot(),p=dr(),Pi(p,h.measurePageBox())),D0(c,h.latestValues,(u=h.snapshot)==null?void 0:u.layoutBox,p)}return Ta(this.latestValues)&&D0(c,this.latestValues),c}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var u;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==c;if(!(o||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(u=this.parent)!=null&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:p}=this.options;if(!this.layout||!(h||p))return;this.resolvedRelativeTargetAt=xr.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dr(),this.targetWithTransforms=dr()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Jw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Pi(this.target,this.layout.layoutBox),wx(this.target,this.targetDelta)):Pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Rf(this.parent.latestValues)||Ex(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,u,c){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dr(),this.relativeTargetOrigin=dr(),cc(this.relativeTargetOrigin,u,c,this.options.layoutAnchor||void 0),Pi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var o;const u=this.getLead(),c=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(o=this.parent)!=null&&o.isProjectionDirty)&&(f=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===xr.timestamp&&(f=!1),f)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Pi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;Rw(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=dr());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(T0(this.prevProjectionDelta.x,this.projectionDelta.x),T0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ho(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!O0(this.projectionDelta.x,this.prevProjectionDelta.x)||!O0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=As(),this.projectionDelta=As(),this.projectionDeltaWithTransform=As()}setAnimationOrigin(o,u=!1,c){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},v=As();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=dr(),S=f?f.source:void 0,b=this.layout?this.layout.source:void 0,w=S!==b,x=this.getStack(),y=!x||x.members.length<=1,R=!!(w&&!y&&this.options.crossfade===!0&&!this.path.some(CT));this.animationProgress=0;let I;const T=c==null?void 0:c.interpolateProjection(o);this.mixTargetDelta=L=>{const D=L/1e3,k=T==null?void 0:T(D);k?(v.x.translate=k.x,v.x.scale=Ut(o.x.scale,1,D),v.x.origin=o.x.origin,v.x.originPoint=o.x.originPoint,v.y.translate=k.y,v.y.scale=Ut(o.y.scale,1,D),v.y.origin=o.y.origin,v.y.originPoint=o.y.originPoint):(W0(v.x,o.x,D),W0(v.y,o.y,D)),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(cc(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),RT(this.relativeTarget,this.relativeTargetOrigin,g,D),I&&iT(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=dr()),Pi(I,this.relativeTarget)),w&&(this.animationValues=p,sT(p,h,this.latestValues,D,R,y)),k&&k.rotate!==void 0&&(this.animationValues||(this.animationValues=p),this.animationValues.pathRotation=k.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var u,c,f;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(f=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||f.stop(),this.pendingAnimation&&(yi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Et.update(()=>{Ku.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ki(0)),this.motionValue.jump(0,!1),this.currentAnimation=uT(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:u,target:c,layout:f,latestValues:h}=o;if(!(!u||!c||!f)){if(this!==o&&this.layout&&f&&Hx(this.options.animationType,this.layout.layoutBox,f.layoutBox)){c=this.target||dr();const p=zr(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+p;const v=zr(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+v}Pi(u,c),Yu(u,h),Ho(this.projectionDeltaWithTransform,this.layoutCorrected,u,h)}}registerSharedNode(o,u){this.sharedNodes.has(o)||this.sharedNodes.set(o,new fT),this.sharedNodes.get(o).add(u);const c=u.options.initialPromotionConfig;u.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(u):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:u}=this.options;return u?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:u}=this.options;return u?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:u,preserveFollowOpacity:c}={}){const f=this.getStack();f&&f.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let u=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(u=!0),!u)return;const f={};c.z&&yh("z",o,f,this.animationValues);for(let h=0;h<_h.length;h++)yh(`rotate${_h[h]}`,o,f,this.animationValues),yh(`skew${_h[h]}`,o,f,this.animationValues);o.render();for(const h in f)o.setStaticValue(h,f[h]),this.animationValues&&(this.animationValues[h]=f[h]);o.scheduleRender()}applyProjectionStyles(o,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=qu(u==null?void 0:u.pointerEvents)||"",o.transform=c?c(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=qu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ta(this.latestValues)&&(o.transform=c?c({},""):"none",this.hasProjected=!1);return}o.visibility="";const h=f.animationValues||f.latestValues;this.applyTransformsToTarget();let p=nT(this.projectionDeltaWithTransform,this.treeScale,h);c&&(p=c(h,p)),o.transform=p;const{x:v,y:g}=this.projectionDelta;o.transformOrigin=`${v.origin*100}% ${g.origin*100}% 0`,f.animationValues?o.opacity=f===this?h.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:o.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const S in Pf){if(h[S]===void 0)continue;const{correct:b,applyTo:w,isCSSVariable:x}=Pf[S],y=p==="none"?h[S]:b(h[S],f);if(w){const R=w.length;for(let I=0;I<R;I++)o[w[I]]=y}else x?this.options.visualElement.renderState.vars[S]=y:o[S]=y}this.options.layoutId&&(o.pointerEvents=f===this?qu(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var u;return(u=o.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(V0),this.root.sharedNodes.clear()}}}function gT(r){r.updateLayout()}function vT(r){var e;const t=((e=r.resumeFrom)==null?void 0:e.snapshot)||r.snapshot;if(r.isLead()&&r.layout&&t&&r.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=r.layout,{animationType:o}=r.options,u=t.source!==r.layout.source;if(o==="size")Ki(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],S=zr(g);g.min=n[v].min,g.max=g.min+S});else if(o==="x"||o==="y"){const v=o==="x"?"y":"x";Lf(u?t.measuredBox[v]:t.layoutBox[v],n[v])}else Hx(o,t.layoutBox,n)&&Ki(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],S=zr(n[v]);g.max=g.min+S,r.relativeTarget&&!r.currentAnimation&&(r.isProjectionDirty=!0,r.relativeTarget[v].max=r.relativeTarget[v].min+S)});const c=As();Ho(c,n,t.layoutBox);const f=As();u?Ho(f,r.applyTransform(s,!0),t.measuredBox):Ho(f,n,t.layoutBox);const h=!Ox(c);let p=!1;if(!r.resumeFrom){const v=r.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:S}=v;if(g&&S){const b=r.options.layoutAnchor||void 0,w=dr();cc(w,t.layoutBox,g.layoutBox,b);const x=dr();cc(x,n,S.layoutBox,b),Fx(w,x)||(p=!0),v.options.layoutRoot&&(r.relativeTarget=x,r.relativeTargetOrigin=w,r.relativeParent=v)}}}r.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:f,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(r.isLead()){const{onExitComplete:n}=r.options;n&&n()}r.options.transition=void 0}function _T(r){r.parent&&(r.isProjecting()||(r.isProjectionDirty=r.parent.isProjectionDirty),r.isSharedProjectionDirty||(r.isSharedProjectionDirty=!!(r.isProjectionDirty||r.parent.isProjectionDirty||r.parent.isSharedProjectionDirty)),r.isTransformDirty||(r.isTransformDirty=r.parent.isTransformDirty))}function yT(r){r.isProjectionDirty=r.isSharedProjectionDirty=r.isTransformDirty=!1}function xT(r){r.clearSnapshot()}function V0(r){r.clearMeasurements()}function ST(r){r.isLayoutDirty=!0,r.updateLayout()}function H0(r){r.isLayoutDirty=!1}function bT(r){r.isAnimationBlocked&&r.layout&&!r.isLayoutDirty&&(r.snapshot=r.layout,r.isLayoutDirty=!0)}function MT(r){const{visualElement:e}=r.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),r.resetTransform()}function G0(r){r.finishAnimation(),r.targetDelta=r.relativeTarget=r.target=void 0,r.isProjectionDirty=!0}function ET(r){r.resolveTargetDelta()}function wT(r){r.calcProjection()}function TT(r){r.resetSkewAndRotation()}function AT(r){r.removeLeadSnapshot()}function W0(r,e,t){r.translate=Ut(e.translate,0,t),r.scale=Ut(e.scale,1,t),r.origin=e.origin,r.originPoint=e.originPoint}function j0(r,e,t,n){r.min=Ut(e.min,t.min,n),r.max=Ut(e.max,t.max,n)}function RT(r,e,t,n){j0(r.x,e.x,t.x,n),j0(r.y,e.y,t.y,n)}function CT(r){return r.animationValues&&r.animationValues.opacityExit!==void 0}const PT={duration:.45,ease:[.4,0,.1,1]},X0=r=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(r),Y0=X0("applewebkit/")&&!X0("chrome/")?Math.round:Kr;function q0(r){r.min=Y0(r.min),r.max=Y0(r.max)}function LT(r){q0(r.x),q0(r.y)}function Hx(r,e,t){return r==="position"||r==="preserve-aspect"&&!Qw(k0(e),k0(t),.2)}function DT(r){var e;return r!==r.root&&((e=r.scroll)==null?void 0:e.wasRoot)}const NT=Vx({attachResizeListener:(r,e)=>Yo(r,"resize",e),measureScroll:()=>{var r,e;return{x:document.documentElement.scrollLeft||((r=document.body)==null?void 0:r.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xh={current:void 0},Gx=Vx({measureScroll:r=>({x:r.scrollLeft,y:r.scrollTop}),defaultParent:()=>{if(!xh.current){const r=new NT({});r.mount(window),r.setOptions({layoutScroll:!0}),xh.current=r}return xh.current},resetTransform:(r,e)=>{r.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:r=>window.getComputedStyle(r).position==="fixed"}),Tc=ge.createContext({transformPagePoint:r=>r,isStatic:!1,reducedMotion:"never"});function K0(r,e){if(typeof r=="function")return r(e);r!=null&&(r.current=e)}function IT(...r){return e=>{let t=!1;const n=r.map(s=>{const o=K0(s,e);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let s=0;s<n.length;s++){const o=n[s];typeof o=="function"?o():K0(r[s],null)}}}}function UT(...r){return ge.useCallback(IT(...r),r)}class kT extends ge.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Vo(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=t.offsetParent,s=Vo(n)&&n.offsetWidth||0,o=Vo(n)&&n.offsetHeight||0,u=getComputedStyle(t),c=this.props.sizeRef.current;c.height=parseFloat(u.height),c.width=parseFloat(u.width),c.top=t.offsetTop,c.left=t.offsetLeft,c.right=s-c.width-c.left,c.bottom=o-c.height-c.top,c.direction=u.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function OT({children:r,isPresent:e,anchorX:t,anchorY:n,root:s,pop:o}){var u;const c=ge.useId(),f=ge.useRef(null),h=ge.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:p}=ge.useContext(Tc),v=o!==!1?((u=r.props)==null?void 0:u.ref)??(r==null?void 0:r.ref):void 0,g=UT(f,v);return ge.useInsertionEffect(()=>{const{width:S,height:b,top:w,left:x,right:y,bottom:R,direction:I}=h.current;if(e||o===!1||!f.current||!S||!b)return;const T=I==="rtl",L=t==="left"?T?`right: ${y}`:`left: ${x}`:T?`left: ${x}`:`right: ${y}`,D=n==="bottom"?`bottom: ${R}`:`top: ${w}`;f.current.dataset.motionPopId=c;const k=document.createElement("style");p&&(k.nonce=p);const M=s??document.head;return M.appendChild(k),k.sheet&&k.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${b}px !important;
            ${L}px !important;
            ${D}px !important;
          }
        `),()=>{var N;(N=f.current)==null||N.removeAttribute("data-motion-pop-id"),M.contains(k)&&M.removeChild(k)}},[e]),P.jsx(kT,{isPresent:e,childRef:f,sizeRef:h,pop:o,children:o===!1?r:ge.cloneElement(r,{ref:g})})}const FT=({children:r,initial:e,isPresent:t,onExitComplete:n,custom:s,presenceAffectsLayout:o,mode:u,anchorX:c,anchorY:f,root:h})=>{const p=ea(zT),v=ge.useId(),g=ge.useRef(t),S=ge.useRef(n);Qo(()=>{g.current=t,S.current=n});let b=!0,w=ge.useMemo(()=>(b=!1,{id:v,initial:e,isPresent:t,custom:s,onExitComplete:x=>{p.set(x,!0);for(const y of p.values())if(!y)return;n&&n()},register:x=>(p.set(x,!1),()=>{var y;p.delete(x),!g.current&&!p.size&&((y=S.current)==null||y.call(S))})}),[t,p,n]);return o&&b&&(w={...w}),ge.useMemo(()=>{p.forEach((x,y)=>p.set(y,!1))},[t]),ge.useEffect(()=>{!t&&!p.size&&n&&n()},[t]),r=P.jsx(OT,{pop:u==="popLayout",isPresent:t,anchorX:c,anchorY:f,root:h,children:r}),P.jsx(Sc.Provider,{value:w,children:r})};function zT(){return new Map}function Wx(r=!0){const e=ge.useContext(Sc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:s}=e,o=ge.useId();ge.useEffect(()=>{if(r)return s(o)},[r]);const u=ge.useCallback(()=>r&&n&&n(o),[o,n,r]);return!t&&n?[!1,u]:[!0]}const fu=r=>r.key||"";function $0(r){const e=[];return ge.Children.forEach(r,t=>{ge.isValidElement(t)&&e.push(t)}),e}const Jp=({children:r,custom:e,initial:t=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:o="sync",propagate:u=!1,anchorX:c="left",anchorY:f="top",root:h})=>{const[p,v]=Wx(u),g=ge.useMemo(()=>$0(r),[r]),S=u&&!p?[]:g.map(fu),b=ge.useRef(!0),w=ge.useRef(g),x=ea(()=>new Map),y=ge.useRef(new Set),[R,I]=ge.useState(g),[T,L]=ge.useState(g);Qo(()=>{b.current=!1,w.current=g;for(let M=0;M<T.length;M++){const N=fu(T[M]);S.includes(N)?(x.delete(N),y.current.delete(N)):x.get(N)!==!0&&x.set(N,!1)}},[T,S.length,S.join("-")]);const D=[];if(g!==R){let M=[...g];for(let N=0;N<T.length;N++){const F=T[N],H=fu(F);S.includes(H)||(M.splice(N,0,F),D.push(F))}return o==="wait"&&D.length&&(M=D),L($0(M)),I(g),null}const{forceRender:k}=ge.useContext(Tp);return P.jsx(P.Fragment,{children:T.map(M=>{const N=fu(M),F=u&&!p?!1:g===T||S.includes(N),H=()=>{if(y.current.has(N))return;if(x.has(N))y.current.add(N),x.set(N,!0);else return;let j=!0;x.forEach(Q=>{Q||(j=!1)}),j&&(k==null||k(),L(w.current),u&&(v==null||v()),n&&n())};return P.jsx(FT,{isPresent:F,initial:!b.current||t?void 0:!1,custom:e,presenceAffectsLayout:s,mode:o,root:h,onExitComplete:F?void 0:H,anchorX:c,anchorY:f,children:M},N)})})},jx=ge.createContext({strict:!1}),Z0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Q0=!1;function BT(){if(Q0)return;const r={};for(const e in Z0)r[e]={isEnabled:t=>Z0[e].some(n=>!!t[n])};Sx(r),Q0=!0}function Xx(){return BT(),Ew()}function VT(r){const e=Xx();for(const t in r)e[t]={...e[t],...r[t]};Sx(e)}const HT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function dc(r){return r.startsWith("while")||r.startsWith("drag")&&r!=="draggable"||r.startsWith("layout")||r.startsWith("onTap")||r.startsWith("onPan")||r.startsWith("onLayout")||HT.has(r)}let Yx=r=>!dc(r);function GT(r){typeof r=="function"&&(Yx=e=>e.startsWith("on")?!dc(e):r(e))}try{GT(require("@emotion/is-prop-valid").default)}catch{}function WT(r,e,t){const n={};for(const s in r)s==="values"&&typeof r.values=="object"||Er(r[s])||(Yx(s)||t===!0&&dc(s)||!e&&!dc(s)||r.draggable&&s.startsWith("onDrag"))&&(n[s]=r[s]);return n}const Ac=ge.createContext({});function jT(r,e){if(wc(r)){const{initial:t,animate:n}=r;return{initial:t===!1||Xo(t)?t:void 0,animate:Xo(n)?n:void 0}}return r.inherit!==!1?e:{}}function XT(r){const{initial:e,animate:t}=jT(r,ge.useContext(Ac));return ge.useMemo(()=>({initial:e,animate:t}),[J0(e),J0(t)])}function J0(r){return Array.isArray(r)?r.join(" "):r}const em=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qx(r,e,t){for(const n in e)!Er(e[n])&&!Rx(n,t)&&(r[n]=e[n])}function YT({transformTemplate:r},e){return ge.useMemo(()=>{const t=em();return Zp(t,e,r),Object.assign({},t.vars,t.style)},[e])}function qT(r,e){const t=r.style||{},n={};return qx(n,t,r),Object.assign(n,YT(r,e)),n}function KT(r,e){const t={},n=qT(r,e);return r.drag&&r.dragListener!==!1&&(t.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=r.drag===!0?"none":`pan-${r.drag==="x"?"y":"x"}`),r.tabIndex===void 0&&(r.onTap||r.onTapStart||r.whileTap)&&(t.tabIndex=0),t.style=n,t}const Kx=()=>({...em(),attrs:{}});function $T(r,e,t,n){const s=ge.useMemo(()=>{const o=Kx();return Cx(o,e,Lx(n),r.transformTemplate,r.style),{...o.attrs,style:{...o.style}}},[e]);if(r.style){const o={};qx(o,r.style,r),s.style={...o,...s.style}}return s}const ZT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tm(r){return typeof r!="string"||r.includes("-")?!1:!!(ZT.indexOf(r)>-1||/[A-Z]/u.test(r))}function QT(r,e,t,{latestValues:n},s,o=!1,u){const c=(u??tm(r)?$T:KT)(e,n,s,r),f=WT(e,typeof r=="string",o),h=r!==ge.Fragment?{...f,...c,ref:t}:{},{children:p}=e,v=ge.useMemo(()=>Er(p)?p.get():p,[p]);return ge.createElement(r,{...h,children:v})}function JT({scrapeMotionValuesFromProps:r,createRenderState:e},t,n,s){return{latestValues:eA(t,n,s,r),renderState:e()}}function eA(r,e,t,n){const s={},o=n(r,{});for(const g in o)s[g]=qu(o[g]);let{initial:u,animate:c}=r;const f=wc(r),h=yx(r);e&&h&&!f&&r.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const v=p?c:u;if(v&&typeof v!="boolean"&&!Ec(v)){const g=Array.isArray(v)?v:[v];for(let S=0;S<g.length;S++){const b=Wp(r,g[S]);if(b){const{transitionEnd:w,transition:x,...y}=b;for(const R in y){let I=y[R];if(Array.isArray(I)){const T=p?I.length-1:0;I=I[T]}I!==null&&(s[R]=I)}for(const R in w)s[R]=w[R]}}}return s}const $x=r=>(e,t)=>{const n=ge.useContext(Ac),s=ge.useContext(Sc),o=()=>JT(r,e,n,s);return t?o():ea(o)},tA=$x({scrapeMotionValuesFromProps:Qp,createRenderState:em}),rA=$x({scrapeMotionValuesFromProps:Dx,createRenderState:Kx}),iA=Symbol.for("motionComponentSymbol");function nA(r,e,t){const n=ge.useRef(t);ge.useInsertionEffect(()=>{n.current=t});const s=ge.useRef(null);return ge.useCallback(o=>{var u;o&&((u=r.onMount)==null||u.call(r,o)),e&&(o?e.mount(o):e.unmount());const c=n.current;if(typeof c=="function")if(o){const f=c(o);typeof f=="function"&&(s.current=f)}else s.current?(s.current(),s.current=null):c(o);else c&&(c.current=o)},[e])}const Zx=ge.createContext({});function Ms(r){return r&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function aA(r,e,t,n,s,o){var u,c;const{visualElement:f}=ge.useContext(Ac),h=ge.useContext(jx),p=ge.useContext(Sc),v=ge.useContext(Tc),g=v.reducedMotion,S=v.skipAnimations,b=ge.useRef(null),w=ge.useRef(!1);n=n||h.renderer,!b.current&&n&&(b.current=n(r,{visualState:e,parent:f,props:t,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:S,isSVG:o}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const x=b.current,y=ge.useContext(Zx);x&&!x.projection&&s&&(x.type==="html"||x.type==="svg")&&sA(b.current,t,s,y);const R=ge.useRef(!1);ge.useInsertionEffect(()=>{x&&R.current&&x.update(t,p)});const I=t[ax],T=ge.useRef(!!I&&typeof window<"u"&&!((u=window.MotionHandoffIsComplete)!=null&&u.call(window,I))&&((c=window.MotionHasOptimisedAnimation)==null?void 0:c.call(window,I)));return Qo(()=>{w.current=!0,x&&(R.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),T.current&&x.animationState&&x.animationState.animateChanges())}),ge.useEffect(()=>{x&&(!T.current&&x.animationState&&x.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)==null||L.call(window,I)}),T.current=!1),x.enteringChildren=void 0)}),x}function sA(r,e,t,n){const{layoutId:s,layout:o,drag:u,dragConstraints:c,layoutScroll:f,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;r.projection=new t(r.latestValues,e["data-framer-portal-id"]?void 0:Qx(r.parent)),r.projection.setOptions({layoutId:s,layout:o,alwaysMeasureLayout:!!u||c&&Ms(c),visualElement:r,animationType:typeof o=="string"?o:"both",initialPromotionConfig:n,crossfade:v,layoutScroll:f,layoutRoot:h,layoutAnchor:p})}function Qx(r){if(r)return r.options.allowProjection!==!1?r.projection:Qx(r.parent)}function Sh(r,{forwardMotionProps:e=!1,type:t}={},n,s){n&&VT(n);const o=t?t==="svg":tm(r),u=o?rA:tA;function c(h,p){let v;const g={...ge.useContext(Tc),...h,layoutId:oA(h)},{isStatic:S}=g,b=XT(h),w=u(h,S);if(!S&&typeof window<"u"){lA();const x=uA(g);v=x.MeasureLayout,b.visualElement=aA(r,w,g,s,x.ProjectionNode,o)}return P.jsxs(Ac.Provider,{value:b,children:[v&&b.visualElement?P.jsx(v,{visualElement:b.visualElement,...g}):null,QT(r,h,nA(w,b.visualElement,p),w,S,e,o)]})}c.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const f=ge.forwardRef(c);return f[iA]=r,f}function oA({layoutId:r}){const e=ge.useContext(Tp).id;return e&&r!==void 0?e+"-"+r:r}function lA(r,e){ge.useContext(jx).strict}function uA(r){const e=Xx(),{drag:t,layout:n}=e;if(!t&&!n)return{};const s={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(r)||n!=null&&n.isEnabled(r)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function cA(r,e){if(typeof Proxy>"u")return Sh;const t=new Map,n=(o,u)=>Sh(o,u,r,e),s=(o,u)=>n(o,u);return new Proxy(s,{get:(o,u)=>u==="create"?n:(t.has(u)||t.set(u,Sh(u,void 0,r,e)),t.get(u))})}const dA=(r,e)=>e.isSVG??tm(r)?new Vw(e):new Uw(e,{allowProjection:r!==ge.Fragment});class hA extends ra{constructor(e){super(e),e.animationState||(e.animationState=Xw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ec(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let fA=0;class pA extends ra{constructor(){super(...arguments),this.id=fA++,this.isExitComplete=!1}update(){var e;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;if(t&&s===!1){if(this.isExitComplete){const{initial:u,custom:c}=this.node.getProps();if(typeof u=="string"||typeof u=="object"&&u!==null&&!Array.isArray(u)){const f=Da(this.node,u,c);if(f){const{transition:h,transitionEnd:p,...v}=f;for(const g in v)(e=this.node.getValue(g))==null||e.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const mA={animation:{Feature:hA},exit:{Feature:pA}};function rl(r){return{point:{x:r.pageX,y:r.pageY}}}const gA=r=>e=>Yp(e)&&r(e,rl(e));function Go(r,e,t,n){return Yo(r,e,gA(t),n)}const Jx=({current:r})=>r?r.ownerDocument.defaultView:null,e_=(r,e)=>Math.abs(r-e);function vA(r,e){const t=e_(r.x,e.x),n=e_(r.y,e.y);return Math.sqrt(t**2+n**2)}const t_=new Set(["auto","scroll"]);class eS{constructor(e,t,{transformPagePoint:n,contextWindow:s=window,dragSnapToOrigin:o=!1,distanceThreshold:u=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=b=>{this.handleScroll(b.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=pu(this.lastRawMoveEventInfo,this.transformPagePoint));const b=bh(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,x=vA(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!x)return;const{point:y}=b,{timestamp:R}=xr;this.history.push({...y,timestamp:R});const{onStart:I,onMove:T}=this.handlers;w||(I&&I(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,b)},this.handlePointerMove=(b,w)=>{this.lastMoveEvent=b,this.lastRawMoveEventInfo=w,this.lastMoveEventInfo=pu(w,this.transformPagePoint),Et.update(this.updatePoint,!0)},this.handlePointerUp=(b,w)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=bh(b.type==="pointercancel"?this.lastMoveEventInfo:pu(w,this.transformPagePoint),this.history);this.startEvent&&x&&x(b,I),y&&y(b,I)},!Yp(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=u,this.contextWindow=s||window;const f=rl(e),h=pu(f,this.transformPagePoint),{point:p}=h,{timestamp:v}=xr;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,bh(h,this.history));const S={passive:!0,capture:!0};this.removeListeners=Jo(Go(this.contextWindow,"pointermove",this.handlePointerMove,S),Go(this.contextWindow,"pointerup",this.handlePointerUp,S),Go(this.contextWindow,"pointercancel",this.handlePointerUp,S)),c&&this.startScrollTracking(c)}startScrollTracking(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t);(t_.has(n.overflowX)||t_.has(n.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const n=e===window,s=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},o={x:s.x-t.x,y:s.y-t.y};o.x===0&&o.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(e,s),Et.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),yi(this.updatePoint)}}function pu(r,e){return e?{point:e(r.point)}:r}function r_(r,e){return{x:r.x-e.x,y:r.y-e.y}}function bh({point:r},e){return{point:r,delta:r_(r,tS(e)),offset:r_(r,_A(e)),velocity:yA(e,.1)}}function _A(r){return r[0]}function tS(r){return r[r.length-1]}function yA(r,e){if(r.length<2)return{x:0,y:0};let t=r.length-1,n=null;const s=tS(r);for(;t>=0&&(n=r[t],!(s.timestamp-n.timestamp>ai(e)));)t--;if(!n)return{x:0,y:0};n===r[0]&&r.length>2&&s.timestamp-n.timestamp>ai(e)*2&&(n=r[1]);const o=_i(s.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const u={x:(s.x-n.x)/o,y:(s.y-n.y)/o};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function xA(r,{min:e,max:t},n){return e!==void 0&&r<e?r=n?Ut(e,r,n.min):Math.max(r,e):t!==void 0&&r>t&&(r=n?Ut(t,r,n.max):Math.min(r,t)),r}function i_(r,e,t){return{min:e!==void 0?r.min+e:void 0,max:t!==void 0?r.max+t-(r.max-r.min):void 0}}function SA(r,{top:e,left:t,bottom:n,right:s}){return{x:i_(r.x,t,s),y:i_(r.y,e,n)}}function n_(r,e){let t=e.min-r.min,n=e.max-r.max;return e.max-e.min<r.max-r.min&&([t,n]=[n,t]),{min:t,max:n}}function bA(r,e){return{x:n_(r.x,e.x),y:n_(r.y,e.y)}}function MA(r,e){let t=.5;const n=zr(r),s=zr(e);return s>n?t=Ds(e.min,e.max-n,r.min):n>s&&(t=Ds(r.min,r.max-s,e.min)),Vi(0,1,t)}function EA(r,e){const t={};return e.min!==void 0&&(t.min=e.min-r.min),e.max!==void 0&&(t.max=e.max-r.min),t}const Df=.35;function wA(r=Df){return r===!1?r=0:r===!0&&(r=Df),{x:a_(r,"left","right"),y:a_(r,"top","bottom")}}function a_(r,e,t){return{min:s_(r,e),max:s_(r,t)}}function s_(r,e){return typeof r=="number"?r:r[e]||0}const TA=new WeakMap;class AA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dr(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const o=v=>{t&&this.snapToCursor(rl(v).point),this.stopAnimation()},u=(v,g)=>{const{drag:S,dragPropagation:b,onDragStart:w}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=JE(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(y=>{let R=this.getAxisMotionValue(y).get()||0;if(en.test(R)){const{projection:I}=this.visualElement;if(I&&I.layout){const T=I.layout.layoutBox[y];T&&(R=zr(T)*(parseFloat(R)/100))}}this.originPoint[y]=R}),w&&Et.update(()=>w(v,g),!1,!0),Sf(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},c=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:w,onDrag:x}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:y}=g;if(b&&this.currentDirection===null){this.currentDirection=CA(y),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",g.point,y),this.updateAxis("y",g.point,y),this.visualElement.render(),x&&Et.update(()=>x(v,g),!1,!0)},f=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new eS(e,{onSessionStart:o,onStart:u,onMove:c,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:n,contextWindow:Jx(this.visualElement),element:this.visualElement.current})}stop(e,t){const n=e||this.latestPointerEvent,s=t||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!s||!n)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&Et.postRender(()=>c(n,s))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){const{drag:s}=this.getProps();if(!n||!mu(e,s,this.currentDirection))return;const o=this.getAxisMotionValue(e);let u=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(u=xA(u,this.constraints[e],this.elastic[e])),o.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)==null?void 0:e.layout,o=this.constraints;t&&Ms(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=SA(s.layoutBox,t):this.constraints=!1,this.elastic=wA(n),o!==this.constraints&&!Ms(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&Ki(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=EA(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ms(e))return!1;const n=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;s.root&&(s.root.scroll=void 0,s.root.updateScroll());const o=Cw(n,s.root,this.visualElement.getTransformPagePoint());let u=bA(s.layout.layoutBox,o);if(t){const c=t(Tw(u));this.hasMutatedConstraints=!!c,c&&(u=Mx(c))}return u}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:s,dragTransition:o,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),f=this.constraints||{},h=Ki(p=>{if(!mu(p,t,this.currentDirection))return;let v=f&&f[p]||{};(u===!0||u===p)&&(v={min:0,max:0});const g=s?200:1e6,S=s?40:1e7,b={type:"inertia",velocity:n?e[p]:0,bounceStiffness:g,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...o,...v};return this.startAxisValueAnimation(p,b)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Sf(this.visualElement,e),n.start(Gp(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ki(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ki(t=>{const{drag:n}=this.getProps();if(!mu(t,n,this.currentDirection))return;const{projection:s}=this.visualElement,o=this.getAxisMotionValue(t);if(s&&s.layout){const{min:u,max:c}=s.layout.layoutBox[t],f=o.get()||0;o.set(e[t]-Ut(u,c,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ms(t)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ki(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const f=c.get();s[u]=MA({min:f,max:f},this.constraints[u])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(u=>{if(!mu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:f,max:h}=this.constraints[u];c.set(Ut(f,h,s[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;TA.set(this.visualElement,this);const e=this.visualElement.current,t=Go(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,S=g!==e&&aw(g);p&&v&&!S&&this.start(h)});let n;const s=()=>{const{dragConstraints:h}=this.getProps();Ms(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),n||(n=RA(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,u=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Et.read(s);const c=Yo(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ki(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{c(),t(),u(),f&&f(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:o=!1,dragElastic:u=Df,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:s,dragConstraints:o,dragElastic:u,dragMomentum:c}}}function o_(r){let e=!0;return()=>{if(e){e=!1;return}r()}}function RA(r,e,t){const n=Tf(r,o_(t)),s=Tf(e,o_(t));return()=>{n(),s()}}function mu(r,e,t){return(e===!0||e===r)&&(t===null||t===r)}function CA(r,e=10){let t=null;return Math.abs(r.y)>e?t="y":Math.abs(r.x)>e&&(t="x"),t}class PA extends ra{constructor(e){super(e),this.removeGroupControls=Kr,this.removeListeners=Kr,this.controls=new AA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kr}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Mh=r=>(e,t)=>{r&&Et.update(()=>r(e,t),!1,!0)};class LA extends ra{constructor(){super(...arguments),this.removePointerDownListener=Kr}onPointerDown(e){this.session=new eS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:Mh(e),onStart:Mh(t),onMove:Mh(n),onEnd:(o,u)=>{delete this.session,s&&Et.postRender(()=>s(o,u))}}}mount(){this.removePointerDownListener=Go(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Eh=!1;class DA extends ge.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:s}=this.props,{projection:o}=e;o&&(t.group&&t.group.add(o),n&&n.register&&s&&n.register(o),Eh&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ku.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:s,isPresent:o}=this.props,{projection:u}=n;return u&&(u.isPresent=o,e.layoutDependency!==t&&u.setOptions({...u.options,layoutDependency:t}),Eh=!0,s||e.layoutDependency!==t||t===void 0||e.isPresent!==o?u.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?u.promote():u.relegate()||Et.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Is.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:s}=e;Eh=!0,s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rS(r){const[e,t]=Wx(),n=ge.useContext(Tp);return P.jsx(DA,{...r,layoutGroup:n,switchLayoutGroup:ge.useContext(Zx),isPresent:e,safeToRemove:t})}const NA={pan:{Feature:LA},drag:{Feature:PA,ProjectionNode:Gx,MeasureLayout:rS}};function l_(r,e,t){const{props:n}=r;r.animationState&&n.whileHover&&r.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,o=n[s];o&&Et.postRender(()=>o(e,rl(e)))}class IA extends ra{mount(){const{current:e}=this.node;e&&(this.unmount=tw(e,(t,n)=>(l_(this.node,n,"Start"),s=>l_(this.node,s,"End"))))}unmount(){}}class UA extends ra{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jo(Yo(this.node.current,"focus",()=>this.onFocus()),Yo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u_(r,e,t){const{props:n}=r;if(r.current instanceof HTMLButtonElement&&r.current.disabled)return;r.animationState&&n.whileTap&&r.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),o=n[s];o&&Et.postRender(()=>o(e,rl(e)))}class kA extends ra{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=ow(e,(s,o)=>(u_(this.node,o,"Start"),(u,{success:c})=>u_(this.node,u,c?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(n==null?void 0:n.tap)===!1})}unmount(){}}const Nf=new WeakMap,wh=new WeakMap,OA=r=>{const e=Nf.get(r.target);e&&e(r)},FA=r=>{r.forEach(OA)};function zA({root:r,...e}){const t=r||document;wh.has(t)||wh.set(t,{});const n=wh.get(t),s=JSON.stringify(e);return n[s]||(n[s]=new IntersectionObserver(FA,{root:r,...e})),n[s]}function BA(r,e,t){const n=zA(e);return Nf.set(r,t),n.observe(r),()=>{Nf.delete(r),n.unobserve(r)}}const VA={some:0,all:1};class HA extends ra{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;(e=this.stopObserver)==null||e.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:u}=t,c={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:VA[o]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),S=p?v:g;S&&S(h)};this.stopObserver=BA(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(GA(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function GA({viewport:r={}},{viewport:e={}}={}){return t=>r[t]!==e[t]}const WA={inView:{Feature:HA},tap:{Feature:kA},focus:{Feature:UA},hover:{Feature:IA}},jA={layout:{ProjectionNode:Gx,MeasureLayout:rS}},XA={...mA,...WA,...NA,...jA},hr=cA(XA,dA);function hc(r){return typeof window>"u"?!1:r?qy():Vp()}const YA=50,c_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),qA=()=>({time:0,x:c_(),y:c_()}),KA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function d_(r,e,t,n){const s=t[e],{length:o,position:u}=KA[e],c=s.current,f=t.time;s.current=Math.abs(r[`scroll${u}`]),s.scrollLength=r[`scroll${o}`]-r[`client${o}`],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Ds(0,s.scrollLength,s.current);const h=n-f;s.velocity=h>YA?0:Cp(s.current-c,h)}function $A(r,e,t){d_(r,"x",e,t),d_(r,"y",e,t),e.time=t}function ZA(r,e){const t={x:0,y:0};let n=r;for(;n&&n!==e;)if(Vo(n))t.x+=n.offsetLeft,t.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const s=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();t.x+=s.left-o.left,t.y+=s.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:s,y:o}=n.getBBox();t.x+=s,t.y+=o;let u=null,c=n.parentNode;for(;!u;)c.tagName==="svg"&&(u=c),c=n.parentNode;n=u}else break;return t}const If={start:0,center:.5,end:1};function h_(r,e,t=0){let n=0;if(r in If&&(r=If[r]),typeof r=="string"){const s=parseFloat(r);r.endsWith("px")?n=s:r.endsWith("%")?r=s/100:r.endsWith("vw")?n=s/100*document.documentElement.clientWidth:r.endsWith("vh")?n=s/100*document.documentElement.clientHeight:r=s}return typeof r=="number"&&(n=e*r),t+n}const QA=[0,0];function JA(r,e,t,n){let s=Array.isArray(r)?r:QA,o=0,u=0;return typeof r=="number"?s=[r,r]:typeof r=="string"&&(r=r.trim(),r.includes(" ")?s=r.split(" "):s=[r,If[r]?r:"0"]),o=h_(s[0],t,n),u=h_(s[1],e),o-u}const Uo={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},e2={x:0,y:0};function t2(r){return"getBBox"in r&&r.tagName!=="svg"?r.getBBox():{width:r.clientWidth,height:r.clientHeight}}function r2(r,e,t){const{offset:n=Uo.All}=t,{target:s=r,axis:o="y"}=t,u=o==="y"?"height":"width",c=s!==r?ZA(s,r):e2,f=s===r?{width:r.scrollWidth,height:r.scrollHeight}:t2(s),h={width:r.clientWidth,height:r.clientHeight};e[o].offset.length=0;let p=!e[o].interpolate;const v=n.length;for(let g=0;g<v;g++){const S=JA(n[g],h[u],f[u],c[o]);!p&&S!==e[o].interpolatorOffsets[g]&&(p=!0),e[o].offset[g]=S}p&&(e[o].interpolate=Op(e[o].offset,Gy(n),{clamp:!1}),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=Vi(0,1,e[o].interpolate(e[o].current))}function i2(r,e=r,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==r){let n=e;for(;n&&n!==r;)t.x.targetOffset+=n.offsetLeft,t.y.targetOffset+=n.offsetTop,n=n.offsetParent}t.x.targetLength=e===r?e.scrollWidth:e.clientWidth,t.y.targetLength=e===r?e.scrollHeight:e.clientHeight,t.x.containerLength=r.clientWidth,t.y.containerLength=r.clientHeight}function n2(r,e,t,n={}){return{measure:s=>{i2(r,n.target,t),$A(r,t,s),(n.offset||n.target)&&r2(r,t,n)},notify:()=>e(t)}}const ls=new WeakMap,f_=new WeakMap,Th=new WeakMap,p_=new WeakMap,gu=new WeakMap,m_=r=>r===document.scrollingElement?window:r;function iS(r,{container:e=document.scrollingElement,trackContentSize:t=!1,...n}={}){if(!e)return Kr;let s=Th.get(e);s||(s=new Set,Th.set(e,s));const o=qA(),u=n2(e,r,o,n);if(s.add(u),!ls.has(e)){const f=()=>{for(const g of s)g.measure(xr.timestamp);Et.preUpdate(h)},h=()=>{for(const g of s)g.notify()},p=()=>Et.read(f);ls.set(e,p);const v=m_(e);window.addEventListener("resize",p),e!==document.documentElement&&f_.set(e,Tf(e,p)),v.addEventListener("scroll",p),p()}if(t&&!gu.has(e)){const f=ls.get(e),h={width:e.scrollWidth,height:e.scrollHeight};p_.set(e,h);const p=()=>{const g=e.scrollWidth,S=e.scrollHeight;(h.width!==g||h.height!==S)&&(f(),h.width=g,h.height=S)},v=Et.read(p,!0);gu.set(e,v)}const c=ls.get(e);return Et.read(c,!1,!0),()=>{var f;yi(c);const h=Th.get(e);if(!h||(h.delete(u),h.size))return;const p=ls.get(e);ls.delete(e),p&&(m_(e).removeEventListener("scroll",p),(f=f_.get(e))==null||f(),window.removeEventListener("resize",p));const v=gu.get(e);v&&(yi(v),gu.delete(e)),p_.delete(e)}}const a2=[[Uo.Enter,"entry"],[Uo.Exit,"exit"],[Uo.Any,"cover"],[Uo.All,"contain"]],g_={start:0,end:1};function s2(r){const e=r.trim().split(/\s+/);if(e.length!==2)return;const t=g_[e[0]],n=g_[e[1]];if(!(t===void 0||n===void 0))return[t,n]}function o2(r){if(r.length!==2)return;const e=[];for(const t of r)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const n=s2(t);if(!n)return;e.push(n)}else return;return e}function l2(r,e){const t=o2(r);if(!t)return!1;for(let n=0;n<2;n++){const s=t[n],o=e[n];if(s[0]!==o[0]||s[1]!==o[1])return!1}return!0}function rm(r){if(!r)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of a2)if(l2(r,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const v_=new Map;function __(r){const e={value:0},t=iS(n=>{e.value=n[r.axis].progress*100},r);return{currentTime:e,cancel:t}}function nS({source:r,container:e,...t}){const{axis:n}=t;r&&(e=r);let s=v_.get(e);s||(s=new Map,v_.set(e,s));const o=t.target??"self";let u=s.get(o);u||(u={},s.set(o,u));const c=n+(t.offset??[]).join(",");return u[c]||(t.target&&hc(t.target)?rm(t.offset)?u[c]=new ViewTimeline({subject:t.target,axis:n}):u[c]=__({container:e,...t}):hc()?u[c]=new ScrollTimeline({source:e,axis:n}):u[c]=__({container:e,...t})),u[c]}function u2(r,e){const t=nS(e),n=e.target?rm(e.offset):void 0,s=e.target?hc(e.target)&&!!n:hc();return r.attachTimeline({timeline:s?t:void 0,...n&&s&&{rangeStart:n.rangeStart,rangeEnd:n.rangeEnd},observe:o=>(o.pause(),_x(u=>{o.time=o.iterationDuration*u},t))})}function c2(r){return r&&(r.target||r.offset)}function d2(r){return r.length===2}function h2(r,e){return d2(r)||c2(e)?iS(t=>{r(t[e.axis].progress,t)},e):_x(r,nS(e))}function aS(r,{axis:e="y",container:t=document.scrollingElement,...n}={}){if(!t)return Kr;const s={axis:e,container:t,...n};return typeof r=="function"?h2(r,s):u2(r,s)}const f2=()=>({scrollX:ki(0),scrollY:ki(0),scrollXProgress:ki(0),scrollYProgress:ki(0)}),Rs=r=>r?!r.current:!1;function y_(r,e,t,n){return{factory:s=>{let o;const u=()=>{if(Rs(t)||Rs(n)){Is.read(u);return}o=aS(s,{...e,axis:r,container:(t==null?void 0:t.current)||void 0,target:(n==null?void 0:n.current)||void 0})};return Is.read(u),()=>{fx(u),o==null||o()}},times:[0,1],keyframes:[0,1],ease:s=>s,duration:1}}function p2(r,e){return typeof window>"u"?!1:r?qy()&&!!rm(e):Vp()}function sS({container:r,target:e,...t}={}){const n=ea(f2);p2(e,t.offset)&&(n.scrollXProgress.accelerate=y_("x",t,r,e),n.scrollYProgress.accelerate=y_("y",t,r,e));const s=ge.useRef(null),o=ge.useRef(!1),u=ge.useCallback(()=>(s.current=aS((c,{x:f,y:h})=>{n.scrollX.set(f.current),n.scrollXProgress.set(f.progress),n.scrollY.set(h.current),n.scrollYProgress.set(h.progress)},{...t,container:(r==null?void 0:r.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var c;(c=s.current)==null||c.call(s)}),[r,e,JSON.stringify(t.offset)]);return Qo(()=>{if(o.current=!1,Rs(r)||Rs(e)){o.current=!0;return}else return u()},[u]),ge.useEffect(()=>{if(!o.current)return;let c;const f=()=>{const h=Rs(r),p=Rs(e);!h&&!p&&(c=u())};return Is.read(f),()=>{fx(f),c==null||c()}},[u]),n}function m2(r){const e=ea(()=>ki(r)),{isStatic:t}=ge.useContext(Tc);if(t){const[,n]=ge.useState(r);ge.useEffect(()=>e.on("change",n),[])}return e}function oS(r,e){const t=m2(e()),n=()=>t.set(e());return n(),Qo(()=>{const s=()=>Et.preRender(n,!1,!0),o=r.map(u=>u.on("change",s));return()=>{o.forEach(u=>u()),yi(n)}}),t}function g2(r){Bo.current=[],r();const e=oS(Bo.current,r);return Bo.current=void 0,e}function im(r,e,t,n){if(typeof r=="function")return g2(r);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return v2(r,e,t,n);const s=typeof e=="function"?e:vw(e,t,n),o=Array.isArray(r)?x_(r,s):x_([r],([c])=>s(c)),u=Array.isArray(r)?void 0:r.accelerate;return u&&!u.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(o.accelerate={...u,times:e,keyframes:t,isTransformed:!0}),o}function x_(r,e){const t=ea(()=>[]);return oS(r,()=>{t.length=0;const n=r.length;for(let s=0;s<n;s++)t[s]=r[s].get();return e(t)})}function v2(r,e,t,n){const s=ea(()=>Object.keys(t)),o=ea(()=>({}));for(const u of s)o[u]=im(r,e,t[u],n);return o}const lS=({onClick:r,className:e="",label:t="Contact Me"})=>P.jsx("button",{onClick:r,type:"button",className:`group relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${e}`,style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",boxShadow:"0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:P.jsx("span",{className:"relative z-10 transition-transform duration-200 group-hover:scale-105",children:t})});/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const nm="186",_2=0,S_=1,y2=2,$u=1,x2=2,ko=3,Na=0,$r=1,Mn=2,wn=0,Wo=1,Uf=2,b_=3,M_=4,S2=5,Es=100,b2=101,M2=102,E2=103,w2=104,T2=200,A2=201,R2=202,C2=203,uS=204,cS=205,P2=206,L2=207,D2=208,N2=209,I2=210,U2=211,k2=212,O2=213,F2=214,kf=0,Of=1,Ff=2,qo=3,zf=4,Bf=5,Vf=6,Hf=7,dS=0,z2=1,B2=2,tn=0,hS=1,fS=2,pS=3,mS=4,gS=5,vS=6,_S=7,yS=300,Ia=301,Us=302,Ah=303,Rh=304,Rc=306,Gf=1e3,En=1001,Wf=1002,wr=1003,V2=1004,vu=1005,Nr=1006,Ch=1007,Ca=1008,vi=1009,xS=1010,SS=1011,Ko=1012,am=1013,rn=1014,Qi=1015,nn=1016,sm=1017,om=1018,$o=1020,bS=35902,MS=35899,ES=1021,wS=1022,Oi=1023,An=1026,Pa=1027,TS=1028,lm=1029,Ua=1030,um=1031,cm=1033,Zu=33776,Qu=33777,Ju=33778,ec=33779,jf=35840,Xf=35841,Yf=35842,qf=35843,Kf=36196,$f=37492,Zf=37496,Qf=37488,Jf=37489,fc=37490,ep=37491,tp=37808,rp=37809,ip=37810,np=37811,ap=37812,sp=37813,op=37814,lp=37815,up=37816,cp=37817,dp=37818,hp=37819,fp=37820,pp=37821,mp=36492,gp=36494,vp=36495,_p=36283,yp=36284,pc=36285,xp=36286,H2=3200,E_=0,G2=1,Qn="",mi="srgb",mc="srgb-linear",gc="linear",Nt="srgb",Ph=7680,W2=519,j2=512,X2=513,Y2=514,dm=515,q2=516,K2=517,hm=518,$2=519,Z2=35044,w_="300 es",Ji=2e3,vc=2001;function Q2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function J2(){const r=_c("canvas");return r.style.display="block",r}const T_={};function A_(...r){const e="THREE."+r.shift();console.log(e,...r)}function AS(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=AS(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Rt(...r){r=AS(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ps(...r){const e=r.join(" ");e in T_||(T_[e]=!0,lt(...r))}function eR(r,e,t){return new Promise(function(n,s){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const tR={[kf]:Of,[Ff]:Vf,[zf]:Hf,[qo]:Bf,[Of]:kf,[Vf]:Ff,[Hf]:zf,[Bf]:qo};class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Lr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,Sp=180/Math.PI;function il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lr[r&255]+Lr[r>>8&255]+Lr[r>>16&255]+Lr[r>>24&255]+"-"+Lr[e&255]+Lr[e>>8&255]+"-"+Lr[e>>16&15|64]+Lr[e>>24&255]+"-"+Lr[t&63|128]+Lr[t>>8&255]+"-"+Lr[t>>16&255]+Lr[t>>24&255]+Lr[n&255]+Lr[n>>8&255]+Lr[n>>16&255]+Lr[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function rR(r,e){return(r%e+e)%e}function Dh(r,e,t){return(1-t)*r+t*e}function Ao(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const RS=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*s+e.x,this.y=o*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};RS.prototype.isVector2=!0;let Ct=RS;class Bs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,u,c){let f=n[s+0],h=n[s+1],p=n[s+2],v=n[s+3],g=o[u+0],S=o[u+1],b=o[u+2],w=o[u+3];if(v!==w||f!==g||h!==S||p!==b){let x=f*g+h*S+p*b+v*w;x<0&&(g=-g,S=-S,b=-b,w=-w,x=-x);let y=1-c;if(x<.9995){const R=Math.acos(x),I=Math.sin(R);y=Math.sin(y*R)/I,c=Math.sin(c*R)/I,f=f*y+g*c,h=h*y+S*c,p=p*y+b*c,v=v*y+w*c}else{f=f*y+g*c,h=h*y+S*c,p=p*y+b*c,v=v*y+w*c;const R=1/Math.sqrt(f*f+h*h+p*p+v*v);f*=R,h*=R,p*=R,v*=R}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,s,o,u){const c=n[s],f=n[s+1],h=n[s+2],p=n[s+3],v=o[u],g=o[u+1],S=o[u+2],b=o[u+3];return e[t]=c*b+p*v+f*S-h*g,e[t+1]=f*b+p*g+h*v-c*S,e[t+2]=h*b+p*S+c*g-f*v,e[t+3]=p*b-c*v-f*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(s/2),v=c(o/2),g=f(n/2),S=f(s/2),b=f(o/2);switch(u){case"XYZ":this._x=g*p*v+h*S*b,this._y=h*S*v-g*p*b,this._z=h*p*b+g*S*v,this._w=h*p*v-g*S*b;break;case"YXZ":this._x=g*p*v+h*S*b,this._y=h*S*v-g*p*b,this._z=h*p*b-g*S*v,this._w=h*p*v+g*S*b;break;case"ZXY":this._x=g*p*v-h*S*b,this._y=h*S*v+g*p*b,this._z=h*p*b+g*S*v,this._w=h*p*v-g*S*b;break;case"ZYX":this._x=g*p*v-h*S*b,this._y=h*S*v+g*p*b,this._z=h*p*b-g*S*v,this._w=h*p*v+g*S*b;break;case"YZX":this._x=g*p*v+h*S*b,this._y=h*S*v+g*p*b,this._z=h*p*b-g*S*v,this._w=h*p*v-g*S*b;break;case"XZY":this._x=g*p*v-h*S*b,this._y=h*S*v-g*p*b,this._z=h*p*b+g*S*v,this._w=h*p*v+g*S*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],u=t[1],c=t[5],f=t[9],h=t[2],p=t[6],v=t[10],g=n+c+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-f)*S,this._y=(o-h)*S,this._z=(u-s)*S}else if(n>c&&n>v){const S=2*Math.sqrt(1+n-c-v);this._w=(p-f)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(o+h)/S}else if(c>v){const S=2*Math.sqrt(1+c-n-v);this._w=(o-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(f+p)/S}else{const S=2*Math.sqrt(1+v-n-c);this._w=(u-s)/S,this._x=(o+h)/S,this._y=(f+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,u=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+s*h-o*f,this._y=s*p+u*f+o*c-n*h,this._z=o*p+u*h+n*f-s*c,this._w=u*p-n*c-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(n=-n,s=-s,o=-o,u=-u,c=-c);let f=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+n*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const CS=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,u=e.y,c=e.z,f=e.w,h=2*(u*s-c*n),p=2*(c*t-o*s),v=2*(o*n-u*t);return this.x=t+f*h+u*v-c*p,this.y=n+f*p+c*h-o*v,this.z=s+f*v+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*u-n*f,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};CS.prototype.isVector3=!0;let ae=CS;const Nh=new ae,R_=new Bs,PS=class{constructor(e,t,n,s,o,u,c,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,f,h)}set(e,t,n,s,o,u,c,f,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[3],f=n[6],h=n[1],p=n[4],v=n[7],g=n[2],S=n[5],b=n[8],w=s[0],x=s[3],y=s[6],R=s[1],I=s[4],T=s[7],L=s[2],D=s[5],k=s[8];return o[0]=u*w+c*R+f*L,o[3]=u*x+c*I+f*D,o[6]=u*y+c*T+f*k,o[1]=h*w+p*R+v*L,o[4]=h*x+p*I+v*D,o[7]=h*y+p*T+v*k,o[2]=g*w+S*R+b*L,o[5]=g*x+S*I+b*D,o[8]=g*y+S*T+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*o*p+n*c*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],v=p*u-c*h,g=c*f-p*o,S=h*o-u*f,b=t*v+n*g+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(s*h-p*n)*w,e[2]=(c*n-s*u)*w,e[3]=g*w,e[4]=(p*t-s*f)*w,e[5]=(s*o-c*t)*w,e[6]=S*w,e[7]=(n*f-h*t)*w,e[8]=(u*t-n*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,u,c){const f=Math.cos(o),h=Math.sin(o);return this.set(n*f,n*h,-n*(f*u+h*c)+u+e,-s*h,s*f,-s*(-h*u+f*c)+c+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};PS.prototype.isMatrix3=!0;let dt=PS;const Ih=new dt,C_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iR(){const r={enabled:!0,workingColorSpace:mc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Nt&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?gc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[mc]:{primaries:e,whitePoint:n,transfer:gc,toXYZ:C_,fromXYZ:P_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:C_,fromXYZ:P_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const vt=iR();function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let us;class nR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=_c("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Tn(o[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aR=0;class fm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Uh(s[u].image)):o.push(Uh(s[u]))}else o=Uh(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let sR=0;const kh=new ae;class Br extends Oa{constructor(e=Br.DEFAULT_IMAGE,t=Br.DEFAULT_MAPPING,n=En,s=En,o=Nr,u=Ca,c=Oi,f=vi,h=Br.DEFAULT_ANISOTROPY,p=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=il(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Br.DEFAULT_IMAGE=null;Br.DEFAULT_MAPPING=yS;Br.DEFAULT_ANISOTROPY=1;const LS=class{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const u=e.elements,c=u[0],f=u[4],h=u[8],p=u[1],v=u[5],g=u[9],S=u[2],b=u[6],w=u[10];if(Math.abs(f-p)<.01&&Math.abs(h-S)<.01&&Math.abs(g-b)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+S)<.1&&Math.abs(g+b)<.1&&Math.abs(c+v+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,R=(v+1)/2,I=(w+1)/2,T=(f+p)/4,L=(h+S)/4,D=(g+b)/4;return y>R&&y>I?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=T/n,o=L/n):R>I?R<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(R),n=T/s,o=D/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=L/o,s=D/o),this.set(n,s,o,t),this}let x=Math.sqrt((b-g)*(b-g)+(h-S)*(h-S)+(p-f)*(p-f));return Math.abs(x)<.001&&(x=1),this.x=(b-g)/x,this.y=(h-S)/x,this.z=(p-f)/x,this.w=Math.acos((c+v+w-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};LS.prototype.isVector4=!0;let or=LS;class oR extends Oa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nr,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new or(0,0,e,t),this.scissorTest=!1,this.viewport=new or(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new Br(s),u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fm(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends oR{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DS extends Br{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wr,this.minFilter=wr,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lR extends Br{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wr,this.minFilter=wr,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const NS=class IS{constructor(e,t,n,s,o,u,c,f,h,p,v,g,S,b,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,f,h,p,v,g,S,b,w,x)}set(e,t,n,s,o,u,c,f,h,p,v,g,S,b,w,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=s,y[1]=o,y[5]=u,y[9]=c,y[13]=f,y[2]=h,y[6]=p,y[10]=v,y[14]=g,y[3]=S,y[7]=b,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new IS().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),o=1/cs.setFromMatrixColumn(e,1).length(),u=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(s),h=Math.sin(s),p=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const g=u*p,S=u*v,b=c*p,w=c*v;t[0]=f*p,t[4]=-f*v,t[8]=h,t[1]=S+b*h,t[5]=g-w*h,t[9]=-c*f,t[2]=w-g*h,t[6]=b+S*h,t[10]=u*f}else if(e.order==="YXZ"){const g=f*p,S=f*v,b=h*p,w=h*v;t[0]=g+w*c,t[4]=b*c-S,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=S*c-b,t[6]=w+g*c,t[10]=u*f}else if(e.order==="ZXY"){const g=f*p,S=f*v,b=h*p,w=h*v;t[0]=g-w*c,t[4]=-u*v,t[8]=b+S*c,t[1]=S+b*c,t[5]=u*p,t[9]=w-g*c,t[2]=-u*h,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const g=u*p,S=u*v,b=c*p,w=c*v;t[0]=f*p,t[4]=b*h-S,t[8]=g*h+w,t[1]=f*v,t[5]=w*h+g,t[9]=S*h-b,t[2]=-h,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,S=u*h,b=c*f,w=c*h;t[0]=f*p,t[4]=w-g*v,t[8]=b*v+S,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*v+b,t[10]=g-w*v}else if(e.order==="XZY"){const g=u*f,S=u*h,b=c*f,w=c*h;t[0]=f*p,t[4]=-v,t[8]=h*p,t[1]=g*v+w,t[5]=u*p,t[9]=S*v-b,t[2]=b*v-S,t[6]=c*p,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uR,e,cR)}lookAt(e,t,n){const s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Xn.crossVectors(n,ri),Xn.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Xn.crossVectors(n,ri)),Xn.normalize(),_u.crossVectors(ri,Xn),s[0]=Xn.x,s[4]=_u.x,s[8]=ri.x,s[1]=Xn.y,s[5]=_u.y,s[9]=ri.y,s[2]=Xn.z,s[6]=_u.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[4],f=n[8],h=n[12],p=n[1],v=n[5],g=n[9],S=n[13],b=n[2],w=n[6],x=n[10],y=n[14],R=n[3],I=n[7],T=n[11],L=n[15],D=s[0],k=s[4],M=s[8],N=s[12],F=s[1],H=s[5],j=s[9],Q=s[13],B=s[2],ne=s[6],fe=s[10],te=s[14],Z=s[3],$=s[7],q=s[11],U=s[15];return o[0]=u*D+c*F+f*B+h*Z,o[4]=u*k+c*H+f*ne+h*$,o[8]=u*M+c*j+f*fe+h*q,o[12]=u*N+c*Q+f*te+h*U,o[1]=p*D+v*F+g*B+S*Z,o[5]=p*k+v*H+g*ne+S*$,o[9]=p*M+v*j+g*fe+S*q,o[13]=p*N+v*Q+g*te+S*U,o[2]=b*D+w*F+x*B+y*Z,o[6]=b*k+w*H+x*ne+y*$,o[10]=b*M+w*j+x*fe+y*q,o[14]=b*N+w*Q+x*te+y*U,o[3]=R*D+I*F+T*B+L*Z,o[7]=R*k+I*H+T*ne+L*$,o[11]=R*M+I*j+T*fe+L*q,o[15]=R*N+I*Q+T*te+L*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],u=e[1],c=e[5],f=e[9],h=e[13],p=e[2],v=e[6],g=e[10],S=e[14],b=e[3],w=e[7],x=e[11],y=e[15],R=f*S-h*g,I=c*S-h*v,T=c*g-f*v,L=u*S-h*p,D=u*g-f*p,k=u*v-c*p;return t*(w*R-x*I+y*T)-n*(b*R-x*L+y*D)+s*(b*I-w*L+y*k)-o*(b*T-w*D+x*k)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[1],u=e[5],c=e[9],f=e[2],h=e[6],p=e[10];return t*(u*p-c*h)-n*(o*p-c*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],v=e[9],g=e[10],S=e[11],b=e[12],w=e[13],x=e[14],y=e[15],R=t*c-n*u,I=t*f-s*u,T=t*h-o*u,L=n*f-s*c,D=n*h-o*c,k=s*h-o*f,M=p*w-v*b,N=p*x-g*b,F=p*y-S*b,H=v*x-g*w,j=v*y-S*w,Q=g*y-S*x,B=R*Q-I*j+T*H+L*F-D*N+k*M;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/B;return e[0]=(c*Q-f*j+h*H)*ne,e[1]=(s*j-n*Q-o*H)*ne,e[2]=(w*k-x*D+y*L)*ne,e[3]=(g*D-v*k-S*L)*ne,e[4]=(f*F-u*Q-h*N)*ne,e[5]=(t*Q-s*F+o*N)*ne,e[6]=(x*T-b*k-y*I)*ne,e[7]=(p*k-g*T+S*I)*ne,e[8]=(u*j-c*F+h*M)*ne,e[9]=(n*F-t*j-o*M)*ne,e[10]=(b*D-w*T+y*R)*ne,e[11]=(v*T-p*D-S*R)*ne,e[12]=(c*N-u*H-f*M)*ne,e[13]=(t*H-n*N+s*M)*ne,e[14]=(w*I-b*L-x*R)*ne,e[15]=(p*L-v*I+g*R)*ne,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,u=e.x,c=e.y,f=e.z,h=o*u,p=o*c;return this.set(h*u+n,h*c-s*f,h*f+s*c,0,h*c+s*f,p*c+n,p*f-s*u,0,h*f-s*c,p*f+s*u,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,u){return this.set(1,n,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,u=t._y,c=t._z,f=t._w,h=o+o,p=u+u,v=c+c,g=o*h,S=o*p,b=o*v,w=u*p,x=u*v,y=c*v,R=f*h,I=f*p,T=f*v,L=n.x,D=n.y,k=n.z;return s[0]=(1-(w+y))*L,s[1]=(S+T)*L,s[2]=(b-I)*L,s[3]=0,s[4]=(S-T)*D,s[5]=(1-(g+y))*D,s[6]=(x+R)*D,s[7]=0,s[8]=(b+I)*k,s[9]=(x-R)*k,s[10]=(1-(g+w))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let u=cs.set(s[0],s[1],s[2]).length();const c=cs.set(s[4],s[5],s[6]).length(),f=cs.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Li.copy(this);const h=1/u,p=1/c,v=1/f;return Li.elements[0]*=h,Li.elements[1]*=h,Li.elements[2]*=h,Li.elements[4]*=p,Li.elements[5]*=p,Li.elements[6]*=p,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,t.setFromRotationMatrix(Li),n.x=u,n.y=c,n.z=f,this}makePerspective(e,t,n,s,o,u,c=Ji,f=!1){const h=this.elements,p=2*o/(t-e),v=2*o/(n-s),g=(t+e)/(t-e),S=(n+s)/(n-s);let b,w;if(f)b=o/(u-o),w=u*o/(u-o);else if(c===Ji)b=-(u+o)/(u-o),w=-2*u*o/(u-o);else if(c===vc)b=-u/(u-o),w=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,o,u,c=Ji,f=!1){const h=this.elements,p=2/(t-e),v=2/(n-s),g=-(t+e)/(t-e),S=-(n+s)/(n-s);let b,w;if(f)b=1/(u-o),w=u/(u-o);else if(c===Ji)b=-2/(u-o),w=-(u+o)/(u-o);else if(c===vc)b=-1/(u-o),w=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};NS.prototype.isMatrix4=!0;let fr=NS;const cs=new ae,Li=new fr,uR=new ae(0,0,0),cR=new ae(1,1,1),Xn=new ae,_u=new ae,ri=new ae,L_=new fr,D_=new Bs;class ka{constructor(e=0,t=0,n=0,s=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],f=s[1],h=s[5],p=s[9],v=s[2],g=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return L_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class US{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dR=0;const N_=new ae,ds=new Bs,vn=new fr,yu=new ae,Ro=new ae,hR=new ae,fR=new Bs,I_=new ae(1,0,0),U_=new ae(0,1,0),k_=new ae(0,0,1),O_={type:"added"},pR={type:"removed"},hs={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Zr extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zr.DEFAULT_UP.clone();const e=new ae,t=new ka,n=new Bs,s=new ae(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fr},normalMatrix:{value:new dt}}),this.matrix=new fr,this.matrixWorld=new fr,this.matrixAutoUpdate=Zr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new US,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(k_,e)}translateOnAxis(e,t){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(k_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yu.copy(e):yu.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Ro,yu,this.up):vn.lookAt(yu,Ro,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(vn),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),hs.child=e,this.dispatchEvent(hs),hs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pR),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,hR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,fR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const v=f[h];o(e.shapes,v)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),b=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),g.length>0&&(n.skeletons=g),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=s,n;function u(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zr.DEFAULT_UP=new ae(0,1,0);Zr.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xu extends Zr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mR={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,u=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,n),y=this._getHandJoint(h,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),S=.02,b=.005;h.inputState.pinching&&g>S+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(mR)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Su={h:0,s:0,l:0};function zh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=rR(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=zh(u,o,e+1/3),this.g=zh(u,o,e),this.b=zh(u,o,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=mi){function n(o){o!==void 0&&parseFloat(o)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=kS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return vt.workingToColorSpace(Dr.copy(this),e),Math.round(_t(Dr.r*255,0,255))*65536+Math.round(_t(Dr.g*255,0,255))*256+Math.round(_t(Dr.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Dr.copy(this),t);const n=Dr.r,s=Dr.g,o=Dr.b,u=Math.max(n,s,o),c=Math.min(n,s,o);let f,h;const p=(c+u)/2;if(c===u)f=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case n:f=(s-o)/v+(s<o?6:0);break;case s:f=(o-n)/v+2;break;case o:f=(n-s)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Dr.copy(this),t),e.r=Dr.r,e.g=Dr.g,e.b=Dr.b,e}getStyle(e=mi){vt.workingToColorSpace(Dr.copy(this),e);const t=Dr.r,n=Dr.g,s=Dr.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Su);const n=Dh(Yn.h,Su.h,t),s=Dh(Yn.s,Su.s,t),o=Dh(Yn.l,Su.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dr=new xt;xt.NAMES=kS;class gR extends Zr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new ae,_n=new ae,Bh=new ae,yn=new ae,fs=new ae,ps=new ae,F_=new ae,Vh=new ae,Hh=new ae,Gh=new ae,Wh=new or,jh=new or,Xh=new or;class Ui{constructor(e=new ae,t=new ae,n=new ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Di.subVectors(e,t),s.cross(Di);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Di.subVectors(s,t),_n.subVectors(n,t),Bh.subVectors(e,t);const u=Di.dot(Di),c=Di.dot(_n),f=Di.dot(Bh),h=_n.dot(_n),p=_n.dot(Bh),v=u*h-c*c;if(v===0)return o.set(0,0,0),null;const g=1/v,S=(h*f-c*p)*g,b=(u*p-c*f)*g;return o.set(1-S-b,b,S)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,s,o,u,c,f){return this.getBarycoord(e,t,n,s,yn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,yn.x),f.addScaledVector(u,yn.y),f.addScaledVector(c,yn.z),f)}static getInterpolatedAttribute(e,t,n,s,o,u){return Wh.setScalar(0),jh.setScalar(0),Xh.setScalar(0),Wh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,n),Xh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Wh,o.x),u.addScaledVector(jh,o.y),u.addScaledVector(Xh,o.z),u}static isFrontFacing(e,t,n,s){return Di.subVectors(n,t),_n.subVectors(e,t),Di.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Di.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Ui.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let u,c;fs.subVectors(s,n),ps.subVectors(o,n),Vh.subVectors(e,n);const f=fs.dot(Vh),h=ps.dot(Vh);if(f<=0&&h<=0)return t.copy(n);Hh.subVectors(e,s);const p=fs.dot(Hh),v=ps.dot(Hh);if(p>=0&&v<=p)return t.copy(s);const g=f*v-p*h;if(g<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(n).addScaledVector(fs,u);Gh.subVectors(e,o);const S=fs.dot(Gh),b=ps.dot(Gh);if(b>=0&&S<=b)return t.copy(o);const w=S*h-f*b;if(w<=0&&h>=0&&b<=0)return c=h/(h-b),t.copy(n).addScaledVector(ps,c);const x=p*b-S*v;if(x<=0&&v-p>=0&&S-b>=0)return F_.subVectors(o,s),c=(v-p)/(v-p+(S-b)),t.copy(s).addScaledVector(F_,c);const y=1/(x+w+g);return u=w*y,c=g*y,t.copy(n).addScaledVector(fs,u).addScaledVector(ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ni):Ni.fromBufferAttribute(o,u),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bu.copy(n.boundingBox)),bu.applyMatrix4(e.matrixWorld),this.union(bu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Mu.subVectors(this.max,Co),ms.subVectors(e.a,Co),gs.subVectors(e.b,Co),vs.subVectors(e.c,Co),qn.subVectors(gs,ms),Kn.subVectors(vs,gs),Sa.subVectors(ms,vs);let t=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-Sa.z,Sa.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,Sa.z,0,-Sa.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-Sa.y,Sa.x,0];return!Yh(t,ms,gs,vs,Mu)||(t=[1,0,0,0,1,0,0,0,1],!Yh(t,ms,gs,vs,Mu))?!1:(Eu.crossVectors(qn,Kn),t=[Eu.x,Eu.y,Eu.z],Yh(t,ms,gs,vs,Mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ni=new ae,bu=new nl,ms=new ae,gs=new ae,vs=new ae,qn=new ae,Kn=new ae,Sa=new ae,Co=new ae,Mu=new ae,Eu=new ae,ba=new ae;function Yh(r,e,t,n,s){for(let o=0,u=r.length-3;o<=u;o+=3){ba.fromArray(r,o);const c=s.x*Math.abs(ba.x)+s.y*Math.abs(ba.y)+s.z*Math.abs(ba.z),f=e.dot(ba),h=t.dot(ba),p=n.dot(ba);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const ar=new ae,wu=new Ct;let vR=0;class Bi extends Oa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Z2,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix4(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyNormalMatrix(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.transformDirection(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=qr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=qr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=qr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qr(t,this.array),n=qr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qr(t,this.array),n=qr(n,this.array),s=qr(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=qr(t,this.array),n=qr(n,this.array),s=qr(s,this.array),o=qr(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class OS extends Bi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class FS extends Bi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vr extends Bi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _R=new nl,Po=new ae,qh=new ae;class Cc{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_R.setFromPoints(e).getCenter(n);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(qh)),this.expandByPoint(Po.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yR=0;const pi=new fr,Kh=new Zr,_s=new ae,ii=new nl,Lo=new nl,yr=new ae;class si extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q2(e)?FS:OS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new dt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vr(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];ii.setFromBufferAttribute(o),this.morphTargetsRelative?(yr.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yr),yr.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yr)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Lo.setFromBufferAttribute(c),this.morphTargetsRelative?(yr.addVectors(ii.min,Lo.min),ii.expandByPoint(yr),yr.addVectors(ii.max,Lo.max),ii.expandByPoint(yr)):(ii.expandByPoint(Lo.min),ii.expandByPoint(Lo.max))}ii.getCenter(n);let s=0;for(let o=0,u=e.count;o<u;o++)yr.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(yr));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)yr.fromBufferAttribute(c,h),f&&(_s.fromBufferAttribute(e,h),yr.add(_s)),s=Math.max(s,n.distanceToSquared(yr))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==n.count)&&(u=new Bi(new Float32Array(4*n.count),4),this.setAttribute("tangent",u));const c=[],f=[];for(let M=0;M<n.count;M++)c[M]=new ae,f[M]=new ae;const h=new ae,p=new ae,v=new ae,g=new Ct,S=new Ct,b=new Ct,w=new ae,x=new ae;function y(M,N,F){h.fromBufferAttribute(n,M),p.fromBufferAttribute(n,N),v.fromBufferAttribute(n,F),g.fromBufferAttribute(o,M),S.fromBufferAttribute(o,N),b.fromBufferAttribute(o,F),p.sub(h),v.sub(h),S.sub(g),b.sub(g);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(w.copy(p).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(H),x.copy(v).multiplyScalar(S.x).addScaledVector(p,-b.x).multiplyScalar(H),c[M].add(w),c[N].add(w),c[F].add(w),f[M].add(x),f[N].add(x),f[F].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let M=0,N=R.length;M<N;++M){const F=R[M],H=F.start,j=F.count;for(let Q=H,B=H+j;Q<B;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const I=new ae,T=new ae,L=new ae,D=new ae;function k(M){L.fromBufferAttribute(s,M),D.copy(L);const N=c[M];I.copy(N),I.sub(L.multiplyScalar(L.dot(N))).normalize(),T.crossVectors(D,N);const F=T.dot(f[M])<0?-1:1;u.setXYZW(M,I.x,I.y,I.z,F)}for(let M=0,N=R.length;M<N;++M){const F=R[M],H=F.start,j=F.count;for(let Q=H,B=H+j;Q<B;Q+=3)k(e.getX(Q+0)),k(e.getX(Q+1)),k(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,S=n.count;g<S;g++)n.setXYZ(g,0,0,0);const s=new ae,o=new ae,u=new ae,c=new ae,f=new ae,h=new ae,p=new ae,v=new ae;if(e)for(let g=0,S=e.count;g<S;g+=3){const b=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,x),p.subVectors(u,o),v.subVectors(s,o),p.cross(v),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,w),h.fromBufferAttribute(n,x),c.add(p),f.add(p),h.add(p),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(w,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,o),v.subVectors(s,o),p.cross(v),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yr.fromBufferAttribute(e,t),yr.normalize(),e.setXYZ(t,yr.x,yr.y,yr.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,v=c.normalized,g=new h.constructor(f.length*p);let S=0,b=0;for(let w=0,x=f.length;w<x;w++){c.isInterleavedBufferAttribute?S=f[w]*c.data.stride+c.offset:S=f[w]*p;for(let y=0;y<p;y++)g[b++]=h[S++]}return new Bi(g,p,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],h=e(f,n);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const f=[],h=o[c];for(let p=0,v=h.length;p<v;p++){const g=h[p],S=e(g,n);f.push(S)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];p.push(S.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],v=o[h];for(let g=0,S=v.length;g<S;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new ae,xR=new ae,SR=new dt;class Zn{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$h.subVectors(n,t).cross(xR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta($h),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SR.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bR=0;class al extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Wo,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uS,this.blendDst=cS,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ph,this.stencilZFail=Ph,this.stencilZPass=Ph,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const u=[];for(const c in o){const f=o[c];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sn=new ae,Zh=new ae,Tu=new ae,Au=new ae;class zS{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zh.copy(e).add(t).multiplyScalar(.5),Tu.copy(t).sub(e).normalize(),Au.copy(this.origin).sub(Zh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Tu),c=Au.dot(this.direction),f=-Au.dot(Tu),h=Au.lengthSq(),p=Math.abs(1-u*u);let v,g,S,b;if(p>0)if(v=u*f-c,g=u*c-f,b=o*p,v>=0)if(g>=-b)if(g<=b){const w=1/p;v*=w,g*=w,S=v*(v+u*g+2*c)+g*(u*v+g+2*f)+h}else g=o,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*f)+h;else g=-o,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*f)+h;else g<=-b?(v=Math.max(0,-(-u*o+c)),g=v>0?-o:Math.min(Math.max(-o,-f),o),S=-v*v+g*(g+2*f)+h):g<=b?(v=0,g=Math.min(Math.max(-o,-f),o),S=g*(g+2*f)+h):(v=Math.max(0,-(u*o+c)),g=v>0?o:Math.min(Math.max(-o,-f),o),S=-v*v+g*(g+2*f)+h);else g=u>0?-o:o,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Zh).addScaledVector(Tu,g),S}intersectSphere(e,t){if(e.radius<0)return null;Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,u,c,f;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||o>s||((o>n||isNaN(n))&&(n=o),(u<s||isNaN(s))&&(s=u),v>=0?(c=(e.min.z-g.z)*v,f=(e.max.z-g.z)*v):(c=(e.max.z-g.z)*v,f=(e.min.z-g.z)*v),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,o){const u=this.origin,c=this.direction,f=c.x,h=c.y,p=c.z,v=e.x-u.x,g=e.y-u.y,S=e.z-u.z,b=t.x-u.x,w=t.y-u.y,x=t.z-u.z,y=n.x-u.x,R=n.y-u.y,I=n.z-u.z,T=Math.abs(f),L=Math.abs(h),D=Math.abs(p);let k,M,N,F,H,j,Q,B,ne,fe,te,Z;if(T>=L&&T>=D?(N=f,j=v,ne=b,Z=y,f>=0?(k=h,M=p,F=g,H=S,Q=w,B=x,fe=R,te=I):(k=p,M=h,F=S,H=g,Q=x,B=w,fe=I,te=R)):L>=D?(N=h,j=g,ne=w,Z=R,h>=0?(k=p,M=f,F=S,H=v,Q=x,B=b,fe=I,te=y):(k=f,M=p,F=v,H=S,Q=b,B=x,fe=y,te=I)):(N=p,j=S,ne=x,Z=I,p>=0?(k=f,M=h,F=v,H=g,Q=b,B=w,fe=y,te=R):(k=h,M=f,F=g,H=v,Q=w,B=b,fe=R,te=y)),N===0)return null;const $=k/N,q=M/N,U=1/N,pe=F-$*j,Se=H-q*j,We=Q-$*ne,ze=B-q*ne,je=fe-$*Z,le=te-q*Z,ce=je*ze-le*We,we=pe*le-Se*je,Qe=We*Se-ze*pe;if(s){if(ce<0||we<0||Qe<0)return null}else if((ce<0||we<0||Qe<0)&&(ce>0||we>0||Qe>0))return null;const Ie=ce+we+Qe;if(Ie===0)return null;const Je=U*(ce*j+we*ne+Qe*Z);return(Ie>0?Je<0:Je>0)?null:this.at(Je/Ie,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yc extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=dS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z_=new fr,Ma=new zS,Ru=new Cc,B_=new ae,Cu=new ae,Pu=new ae,Lu=new ae,Qh=new ae,Du=new ae,V_=new ae,Nu=new ae;class Hi extends Zr{constructor(e=new si,t=new yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const u=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Du.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=c[f],v=o[f];p!==0&&(Qh.fromBufferAttribute(v,e),u?Du.addScaledVector(Qh,p):Du.addScaledVector(Qh.sub(t),p))}t.add(Du)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ru.copy(n.boundingSphere),Ru.applyMatrix4(o),Ma.copy(e.ray).recast(e.near),!(Ru.containsPoint(Ma.origin)===!1&&(Ma.intersectSphere(Ru,B_)===null||Ma.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(z_.copy(o).invert(),Ma.copy(e.ray).applyMatrix4(z_),!(n.boundingBox!==null&&Ma.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ma)))}_computeIntersections(e,t,n){let s;const o=this.geometry,u=this.material,c=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,v=o.attributes.normal,g=o.groups,S=o.drawRange;if(c!==null)if(Array.isArray(u))for(let b=0,w=g.length;b<w;b++){const x=g[b],y=u[x.materialIndex],R=Math.max(x.start,S.start),I=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let T=R,L=I;T<L;T+=3){const D=c.getX(T),k=c.getX(T+1),M=c.getX(T+2);s=Iu(this,y,e,n,h,p,v,D,k,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let x=b,y=w;x<y;x+=3){const R=c.getX(x),I=c.getX(x+1),T=c.getX(x+2);s=Iu(this,u,e,n,h,p,v,R,I,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let b=0,w=g.length;b<w;b++){const x=g[b],y=u[x.materialIndex],R=Math.max(x.start,S.start),I=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let T=R,L=I;T<L;T+=3){const D=T,k=T+1,M=T+2;s=Iu(this,y,e,n,h,p,v,D,k,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=b,y=w;x<y;x+=3){const R=x,I=x+1,T=x+2;s=Iu(this,u,e,n,h,p,v,R,I,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function MR(r,e,t,n,s,o,u,c){let f;if(e.side===$r?f=n.intersectTriangle(u,o,s,!0,c):f=n.intersectTriangle(s,o,u,e.side===Na,c),f===null)return null;Nu.copy(c),Nu.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Nu);return h<t.near||h>t.far?null:{distance:h,point:Nu.clone(),object:r}}function Iu(r,e,t,n,s,o,u,c,f,h){r.getVertexPosition(c,Cu),r.getVertexPosition(f,Pu),r.getVertexPosition(h,Lu);const p=MR(r,e,t,n,Cu,Pu,Lu,V_);if(p){const v=new ae;Ui.getBarycoord(V_,Cu,Pu,Lu,v),s&&(p.uv=Ui.getInterpolatedAttribute(s,c,f,h,v,new Ct)),o&&(p.uv1=Ui.getInterpolatedAttribute(o,c,f,h,v,new Ct)),u&&(p.normal=Ui.getInterpolatedAttribute(u,c,f,h,v,new ae),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:f,c:h,normal:new ae,materialIndex:0};Ui.getNormal(Cu,Pu,Lu,g.normal),p.face=g,p.barycoord=v}return p}class ER extends Br{constructor(e=null,t=1,n=1,s,o,u,c,f,h=wr,p=wr,v,g){super(null,u,c,f,h,p,s,o,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ea=new Cc,wR=new Ct(.5,.5),Uu=new ae;class BS{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,o=new Zn,u=new Zn){this.planes=[e,t,n,s,o,u]}set(e,t,n,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji,n=!1){const s=this.planes,o=e.elements,u=o[0],c=o[1],f=o[2],h=o[3],p=o[4],v=o[5],g=o[6],S=o[7],b=o[8],w=o[9],x=o[10],y=o[11],R=o[12],I=o[13],T=o[14],L=o[15];if(s[0].setComponents(h-u,S-p,y-b,L-R).normalize(),s[1].setComponents(h+u,S+p,y+b,L+R).normalize(),s[2].setComponents(h+c,S+v,y+w,L+I).normalize(),s[3].setComponents(h-c,S-v,y-w,L-I).normalize(),n)s[4].setComponents(f,g,x,T).normalize(),s[5].setComponents(h-f,S-g,y-x,L-T).normalize();else if(s[4].setComponents(h-f,S-g,y-x,L-T).normalize(),t===Ji)s[5].setComponents(h+f,S+g,y+x,L+T).normalize();else if(t===vc)s[5].setComponents(f,g,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ea.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ea.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ea)}intersectsSprite(e){Ea.center.set(0,0,0);const t=wR.distanceTo(e.center);return Ea.radius=.7071067811865476+t,Ea.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ea)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Uu.x=s.normal.x>0?e.max.x:e.min.x,Uu.y=s.normal.y>0?e.max.y:e.min.y,Uu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VS extends al{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H_=new fr,bp=new zS,ku=new Cc,Ou=new ae;class TR extends Zr{constructor(e=new si,t=new VS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ku.copy(n.boundingSphere),ku.applyMatrix4(s),ku.radius+=o,e.ray.intersectsSphere(ku)===!1)return;H_.copy(s).invert(),bp.copy(e.ray).applyMatrix4(H_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=n.index,p=n.attributes.position;if(h!==null){const v=Math.max(0,u.start),g=Math.min(h.count,u.start+u.count);for(let S=v,b=g;S<b;S++){const w=h.getX(S);Ou.fromBufferAttribute(p,w),G_(Ou,w,f,s,e,t,this)}}else{const v=Math.max(0,u.start),g=Math.min(p.count,u.start+u.count);for(let S=v,b=g;S<b;S++)Ou.fromBufferAttribute(p,S),G_(Ou,S,f,s,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const u=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}function G_(r,e,t,n,s,o,u){const c=bp.distanceSqToPoint(r);if(c<t){const f=new ae;bp.closestPointToPoint(r,f),f.applyMatrix4(n);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class HS extends Br{constructor(e=[],t=Ia,n,s,o,u,c,f,h,p){super(e,t,n,s,o,u,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends Br{constructor(e,t,n=rn,s,o,u,c=wr,f=wr,h,p=An,v=1){if(p!==An&&p!==Pa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,s,o,u,c,f,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class AR extends Zo{constructor(e,t=rn,n=Ia,s,o,u=wr,c=wr,f,h=An){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,n,s,o,u,c,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class GS extends Br{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends si{constructor(e=1,t=1,n=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],p=[],v=[];let g=0,S=0;b("z","y","x",-1,-1,n,t,e,u,o,0),b("z","y","x",1,-1,n,t,-e,u,o,1),b("x","z","y",1,1,e,n,t,s,u,2),b("x","z","y",1,-1,e,n,-t,s,u,3),b("x","y","z",1,-1,e,t,n,s,o,4),b("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(f),this.setAttribute("position",new Vr(h,3)),this.setAttribute("normal",new Vr(p,3)),this.setAttribute("uv",new Vr(v,2));function b(w,x,y,R,I,T,L,D,k,M,N){const F=T/k,H=L/M,j=T/2,Q=L/2,B=D/2,ne=k+1,fe=M+1;let te=0,Z=0;const $=new ae;for(let q=0;q<fe;q++){const U=q*H-Q;for(let pe=0;pe<ne;pe++){const Se=pe*F-j;$[w]=Se*R,$[x]=U*I,$[y]=B,h.push($.x,$.y,$.z),$[w]=0,$[x]=0,$[y]=D>0?1:-1,p.push($.x,$.y,$.z),v.push(pe/k),v.push(1-q/M),te+=1}}for(let q=0;q<M;q++)for(let U=0;U<k;U++){const pe=g+U+ne*q,Se=g+U+ne*(q+1),We=g+(U+1)+ne*(q+1),ze=g+(U+1)+ne*q;f.push(pe,Se,ze),f.push(Se,We,ze),Z+=6}c.addGroup(S,Z,N),S+=Z,g+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pm extends si{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],u=[];c(s),h(n),p(),this.setAttribute("position",new Vr(o,3)),this.setAttribute("normal",new Vr(o.slice(),3)),this.setAttribute("uv",new Vr(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(R){const I=new ae,T=new ae,L=new ae;for(let D=0;D<t.length;D+=3)S(t[D+0],I),S(t[D+1],T),S(t[D+2],L),f(I,T,L,R)}function f(R,I,T,L){const D=L+1,k=[];for(let M=0;M<=D;M++){k[M]=[];const N=R.clone().lerp(T,M/D),F=I.clone().lerp(T,M/D),H=D-M;for(let j=0;j<=H;j++)j===0&&M===D?k[M][j]=N:k[M][j]=N.clone().lerp(F,j/H)}for(let M=0;M<D;M++)for(let N=0;N<2*(D-M)-1;N++){const F=Math.floor(N/2);N%2===0?(g(k[M][F+1]),g(k[M+1][F]),g(k[M][F])):(g(k[M][F+1]),g(k[M+1][F+1]),g(k[M+1][F]))}}function h(R){const I=new ae;for(let T=0;T<o.length;T+=3)I.x=o[T+0],I.y=o[T+1],I.z=o[T+2],I.normalize().multiplyScalar(R),o[T+0]=I.x,o[T+1]=I.y,o[T+2]=I.z}function p(){const R=new ae;for(let I=0;I<o.length;I+=3){R.x=o[I+0],R.y=o[I+1],R.z=o[I+2];const T=x(R)/2/Math.PI+.5,L=y(R)/Math.PI+.5;u.push(T,1-L)}b(),v()}function v(){for(let R=0;R<u.length;R+=6){const I=u[R+0],T=u[R+2],L=u[R+4],D=Math.max(I,T,L),k=Math.min(I,T,L);D>.9&&k<.1&&(I<.2&&(u[R+0]+=1),T<.2&&(u[R+2]+=1),L<.2&&(u[R+4]+=1))}}function g(R){o.push(R.x,R.y,R.z)}function S(R,I){const T=R*3;I.x=e[T+0],I.y=e[T+1],I.z=e[T+2]}function b(){const R=new ae,I=new ae,T=new ae,L=new ae,D=new Ct,k=new Ct,M=new Ct;for(let N=0,F=0;N<o.length;N+=9,F+=6){R.set(o[N+0],o[N+1],o[N+2]),I.set(o[N+3],o[N+4],o[N+5]),T.set(o[N+6],o[N+7],o[N+8]),D.set(u[F+0],u[F+1]),k.set(u[F+2],u[F+3]),M.set(u[F+4],u[F+5]),L.copy(R).add(I).add(T).divideScalar(3);const H=x(L);w(D,F+0,R,H),w(k,F+2,I,H),w(M,F+4,T,H)}}function w(R,I,T,L){L<0&&R.x===1&&(u[I]=R.x-1),T.x===0&&T.z===0&&(u[I]=L/2/Math.PI+.5)}function x(R){return Math.atan2(R.z,-R.x)}function y(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.vertices,e.indices,e.radius,e.detail)}}class mm extends pm{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mm(e.radius,e.detail)}}class Pc extends si{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(n),f=Math.floor(s),h=c+1,p=f+1,v=e/c,g=t/f,S=[],b=[],w=[],x=[];for(let y=0;y<p;y++){const R=y*g-u;for(let I=0;I<h;I++){const T=I*v-o;b.push(T,-R,0),w.push(0,0,1),x.push(I/c),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let R=0;R<c;R++){const I=R+h*y,T=R+h*(y+1),L=R+1+h*(y+1),D=R+1+h*y;S.push(I,T,D),S.push(T,L,D)}this.setIndex(S),this.setAttribute("position",new Vr(b,3)),this.setAttribute("normal",new Vr(w,3)),this.setAttribute("uv",new Vr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class gm extends si{constructor(e=1,t=.4,n=12,s=48,o=Math.PI*2,u=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:o,thetaStart:u,thetaLength:c},n=Math.floor(n),s=Math.floor(s);const f=[],h=[],p=[],v=[],g=new ae,S=new ae,b=new ae;for(let w=0;w<=n;w++){const x=u+w/n*c;for(let y=0;y<=s;y++){const R=y/s*o;S.x=(e+t*Math.cos(x))*Math.cos(R),S.y=(e+t*Math.cos(x))*Math.sin(R),S.z=t*Math.sin(x),h.push(S.x,S.y,S.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),b.subVectors(S,g).normalize(),p.push(b.x,b.y,b.z),v.push(y/s),v.push(w/n)}}for(let w=1;w<=n;w++)for(let x=1;x<=s;x++){const y=(s+1)*w+x-1,R=(s+1)*(w-1)+x-1,I=(s+1)*(w-1)+x,T=(s+1)*w+x;f.push(y,R,T),f.push(R,I,T)}this.setIndex(f),this.setAttribute("position",new Vr(h,3)),this.setAttribute("normal",new Vr(p,3)),this.setAttribute("uv",new Vr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ks(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];if(W_(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(W_(s[0])){const o=[];for(let u=0,c=s.length;u<c;u++)o[u]=s[u].clone();e[t][n]=o}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Or(r){const e={};for(let t=0;t<r.length;t++){const n=ks(r[t]);for(const s in n)e[s]=n[s]}return e}function W_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function RR(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function WS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const CR={clone:ks,merge:Or};var PR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PR,this.fragmentShader=LR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=RR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v4":this.uniforms[n].value=new or().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fr().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class DR extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NR extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IR extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fu=new ae,zu=new Bs,Yi=new ae;class jS extends Zr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fr,this.projectionMatrix=new fr,this.projectionMatrixInverse=new fr,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fu,zu,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fu,zu,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fu,zu,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fu,zu,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new ae,j_=new Ct,X_=new Ct;class gi extends jS{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,j_,X_),t.subVectors(X_,j_)}setViewOffset(e,t,n,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*n/h,s*=u.width/f,n*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class XS extends jS{constructor(e=-1,t=1,n=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=-90,xs=1;class UR extends Zr{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(ys,xs,e,t);s.layers=this.layers,this.add(s);const o=new gi(ys,xs,e,t);o.layers=this.layers,this.add(o);const u=new gi(ys,xs,e,t);u.layers=this.layers,this.add(u);const c=new gi(ys,xs,e,t);c.layers=this.layers,this.add(c);const f=new gi(ys,xs,e,t);f.layers=this.layers,this.add(f);const h=new gi(ys,xs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,u,c,f]=t;for(const h of t)this.remove(h);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===vc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,f,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,S),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class kR extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Y_(r,e,t,n){const s=FR(n);switch(t){case ES:return r*e;case TS:return r*e/s.components*s.byteLength;case lm:return r*e/s.components*s.byteLength;case Ua:return r*e*2/s.components*s.byteLength;case um:return r*e*2/s.components*s.byteLength;case wS:return r*e*3/s.components*s.byteLength;case Oi:return r*e*4/s.components*s.byteLength;case cm:return r*e*4/s.components*s.byteLength;case Zu:case Qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ju:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(r,16)*Math.max(e,8)/4;case jf:case Yf:return Math.max(r,8)*Math.max(e,8)/2;case Kf:case $f:case Qf:case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zf:case fc:case ep:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case up:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mp:case gp:case vp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _p:case yp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pc:case xp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FR(r){switch(r){case vi:case xS:return{byteLength:1,components:1};case Ko:case SS:case nn:return{byteLength:2,components:1};case sm:case om:return{byteLength:2,components:4};case rn:case am:case Qi:return{byteLength:4,components:1};case bS:case MS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function YS(){let r=null,e=!1,t=null,n=null;function s(o,u){n=r.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function zR(r){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,v=h.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,f,h){const p=f.array,v=f.updateRanges;if(r.bindBuffer(h,c),v.length===0)r.bufferSubData(h,0,p);else{v.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<v.length;S++){const b=v[g],w=v[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,b=v.length;S<b;S++){const w=v[S];r.bufferSubData(h,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:s,remove:o,update:u}}var BR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VR=`#ifdef USE_ALPHAHASH
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
#endif`,HR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XR=`#ifdef USE_AOMAP
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
#endif`,YR=`#ifdef USE_AOMAP
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
#endif`,$R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZR=`vec3 objectNormal = vec3( normal );
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
} // validated`,JR=`#ifdef USE_IRIDESCENCE
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
#endif`,eC=`#ifdef USE_BUMPMAP
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
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uC=`#define PI 3.141592653589793
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
} // validated`,cC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dC=`vec3 transformedNormal = objectNormal;
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
#endif`,hC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gC="gl_FragColor = linearToOutputTexel( gl_FragColor );",vC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_C=`#ifdef USE_ENVMAP
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
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xC=`#ifdef USE_ENVMAP
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
#endif`,SC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
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
#endif`,MC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AC=`#ifdef USE_GRADIENTMAP
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
}`,RC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DC=`#ifdef USE_ENVMAP
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
#endif`,NC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OC=`PhysicalMaterial material;
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
#endif`,FC=`uniform sampler2D dfgLUT;
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
}`,zC=`
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
#endif`,BC=`#if defined( RE_IndirectDiffuse )
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
#endif`,VC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$C=`#if defined( USE_POINTS_UV )
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
#endif`,ZC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`#ifdef USE_MORPHTARGETS
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
#endif`,i3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u3=`#ifdef USE_NORMALMAP
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
#endif`,c3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w3=`float getShadowMask() {
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
}`,T3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A3=`#ifdef USE_SKINNING
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
#endif`,R3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C3=`#ifdef USE_SKINNING
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
#endif`,P3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I3=`#ifdef USE_TRANSMISSION
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
#endif`,U3=`#ifdef USE_TRANSMISSION
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
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V3=`uniform sampler2D t2D;
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
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X3=`#include <common>
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
}`,Y3=`#if DEPTH_PACKING == 3200
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
}`,q3=`#define DISTANCE
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
}`,K3=`#define DISTANCE
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
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`uniform float scale;
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
}`,J3=`uniform vec3 diffuse;
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
}`,eP=`#include <common>
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
}`,tP=`uniform vec3 diffuse;
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
}`,rP=`#define LAMBERT
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
}`,iP=`#define LAMBERT
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
}`,nP=`#define MATCAP
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
}`,aP=`#define MATCAP
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
}`,sP=`#define NORMAL
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
}`,oP=`#define NORMAL
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
}`,lP=`#define PHONG
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
}`,uP=`#define PHONG
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
}`,cP=`#define STANDARD
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
}`,dP=`#define STANDARD
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
}`,hP=`#define TOON
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
}`,fP=`#define TOON
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
}`,pP=`uniform float size;
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
}`,mP=`uniform vec3 diffuse;
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
}`,gP=`#include <common>
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
}`,vP=`uniform vec3 color;
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
}`,_P=`uniform float rotation;
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
}`,yP=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:BR,alphahash_pars_fragment:VR,alphamap_fragment:HR,alphamap_pars_fragment:GR,alphatest_fragment:WR,alphatest_pars_fragment:jR,aomap_fragment:XR,aomap_pars_fragment:YR,batching_pars_vertex:qR,batching_vertex:KR,begin_vertex:$R,beginnormal_vertex:ZR,bsdfs:QR,iridescence_fragment:JR,bumpmap_pars_fragment:eC,clipping_planes_fragment:tC,clipping_planes_pars_fragment:rC,clipping_planes_pars_vertex:iC,clipping_planes_vertex:nC,color_fragment:aC,color_pars_fragment:sC,color_pars_vertex:oC,color_vertex:lC,common:uC,cube_uv_reflection_fragment:cC,defaultnormal_vertex:dC,displacementmap_pars_vertex:hC,displacementmap_vertex:fC,emissivemap_fragment:pC,emissivemap_pars_fragment:mC,colorspace_fragment:gC,colorspace_pars_fragment:vC,envmap_fragment:_C,envmap_common_pars_fragment:yC,envmap_pars_fragment:xC,envmap_pars_vertex:SC,envmap_physical_pars_fragment:DC,envmap_vertex:bC,fog_vertex:MC,fog_pars_vertex:EC,fog_fragment:wC,fog_pars_fragment:TC,gradientmap_pars_fragment:AC,lightmap_pars_fragment:RC,lights_lambert_fragment:CC,lights_lambert_pars_fragment:PC,lights_pars_begin:LC,lights_toon_fragment:NC,lights_toon_pars_fragment:IC,lights_phong_fragment:UC,lights_phong_pars_fragment:kC,lights_physical_fragment:OC,lights_physical_pars_fragment:FC,lights_fragment_begin:zC,lights_fragment_maps:BC,lights_fragment_end:VC,lightprobes_pars_fragment:HC,logdepthbuf_fragment:GC,logdepthbuf_pars_fragment:WC,logdepthbuf_pars_vertex:jC,logdepthbuf_vertex:XC,map_fragment:YC,map_pars_fragment:qC,map_particle_fragment:KC,map_particle_pars_fragment:$C,metalnessmap_fragment:ZC,metalnessmap_pars_fragment:QC,morphinstance_vertex:JC,morphcolor_vertex:e3,morphnormal_vertex:t3,morphtarget_pars_vertex:r3,morphtarget_vertex:i3,normal_fragment_begin:n3,normal_fragment_maps:a3,normal_pars_fragment:s3,normal_pars_vertex:o3,normal_vertex:l3,normalmap_pars_fragment:u3,clearcoat_normal_fragment_begin:c3,clearcoat_normal_fragment_maps:d3,clearcoat_pars_fragment:h3,iridescence_pars_fragment:f3,opaque_fragment:p3,packing:m3,premultiplied_alpha_fragment:g3,project_vertex:v3,dithering_fragment:_3,dithering_pars_fragment:y3,roughnessmap_fragment:x3,roughnessmap_pars_fragment:S3,shadowmap_pars_fragment:b3,shadowmap_pars_vertex:M3,shadowmap_vertex:E3,shadowmask_pars_fragment:w3,skinbase_vertex:T3,skinning_pars_vertex:A3,skinning_vertex:R3,skinnormal_vertex:C3,specularmap_fragment:P3,specularmap_pars_fragment:L3,tonemapping_fragment:D3,tonemapping_pars_fragment:N3,transmission_fragment:I3,transmission_pars_fragment:U3,uv_pars_fragment:k3,uv_pars_vertex:O3,uv_vertex:F3,worldpos_vertex:z3,background_vert:B3,background_frag:V3,backgroundCube_vert:H3,backgroundCube_frag:G3,cube_vert:W3,cube_frag:j3,depth_vert:X3,depth_frag:Y3,distance_vert:q3,distance_frag:K3,equirect_vert:$3,equirect_frag:Z3,linedashed_vert:Q3,linedashed_frag:J3,meshbasic_vert:eP,meshbasic_frag:tP,meshlambert_vert:rP,meshlambert_frag:iP,meshmatcap_vert:nP,meshmatcap_frag:aP,meshnormal_vert:sP,meshnormal_frag:oP,meshphong_vert:lP,meshphong_frag:uP,meshphysical_vert:cP,meshphysical_frag:dP,meshtoon_vert:hP,meshtoon_frag:fP,points_vert:pP,points_frag:mP,shadow_vert:gP,shadow_frag:vP,sprite_vert:_P,sprite_frag:yP},De={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Zi={basic:{uniforms:Or([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Or([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Or([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Or([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Or([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Or([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Or([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Or([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Or([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Or([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Or([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Or([De.common,De.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Or([De.lights,De.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Zi.physical={uniforms:Or([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Bu={r:0,b:0,g:0},xP=new fr,qS=new dt;qS.set(-1,0,0,0,1,0,0,0,1);function SP(r,e,t,n,s,o){const u=new xt(0);let c=s===!0?0:1,f,h,p=null,v=0,g=null;function S(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const T=R.backgroundBlurriness>0;I=e.get(I,T)}return I}function b(R){let I=!1;const T=S(R);T===null?x(u,c):T&&T.isColor&&(x(T,1),I=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(R,I){const T=S(I);T&&(T.isCubeTexture||T.mapping===Rc)?(h===void 0&&(h=new Hi(new sl(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ks(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xP.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(qS),h.material.toneMapped=vt.getTransfer(T.colorSpace)!==Nt,(p!==T||v!==T.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,v=T.version,g=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Hi(new Pc(2,2),new an({name:"BackgroundMaterial",uniforms:ks(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=vt.getTransfer(T.colorSpace)!==Nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||v!==T.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=T,v=T.version,g=r.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function x(R,I){R.getRGB(Bu,WS(r)),t.buffers.color.setClear(Bu.r,Bu.g,Bu.b,I,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,I=1){u.set(R),c=I,x(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,x(u,c)},render:b,addToRenderList:w,dispose:y}}function bP(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=g(null);let o=s,u=!1;function c(H,j,Q,B,ne){let fe=!1;const te=v(H,B,Q,j);o!==te&&(o=te,h(o.object)),fe=S(H,B,Q,ne),fe&&b(H,B,Q,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,T(H,j,Q,B),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function p(H){return r.deleteVertexArray(H)}function v(H,j,Q,B){const ne=B.wireframe===!0;let fe=n[j.id];fe===void 0&&(fe={},n[j.id]=fe);const te=H.isInstancedMesh===!0?H.id:0;let Z=fe[te];Z===void 0&&(Z={},fe[te]=Z);let $=Z[Q.id];$===void 0&&($={},Z[Q.id]=$);let q=$[ne];return q===void 0&&(q=g(f()),$[ne]=q),q}function g(H){const j=[],Q=[],B=[];for(let ne=0;ne<t;ne++)j[ne]=0,Q[ne]=0,B[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Q,attributeDivisors:B,object:H,attributes:{},index:null}}function S(H,j,Q,B){const ne=o.attributes,fe=j.attributes;let te=0;const Z=Q.getAttributes();for(const $ in Z)if(Z[$].location>=0){const q=ne[$];let U=fe[$];if(U===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(U=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(U=H.instanceColor)),q===void 0||q.attribute!==U||U&&q.data!==U.data)return!0;te++}return o.attributesNum!==te||o.index!==B}function b(H,j,Q,B){const ne={},fe=j.attributes;let te=0;const Z=Q.getAttributes();for(const $ in Z)if(Z[$].location>=0){let q=fe[$];q===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(q=H.instanceColor));const U={};U.attribute=q,q&&q.data&&(U.data=q.data),ne[$]=U,te++}o.attributes=ne,o.attributesNum=te,o.index=B}function w(){const H=o.newAttributes;for(let j=0,Q=H.length;j<Q;j++)H[j]=0}function x(H){y(H,0)}function y(H,j){const Q=o.newAttributes,B=o.enabledAttributes,ne=o.attributeDivisors;Q[H]=1,B[H]===0&&(r.enableVertexAttribArray(H),B[H]=1),ne[H]!==j&&(r.vertexAttribDivisor(H,j),ne[H]=j)}function R(){const H=o.newAttributes,j=o.enabledAttributes;for(let Q=0,B=j.length;Q<B;Q++)j[Q]!==H[Q]&&(r.disableVertexAttribArray(Q),j[Q]=0)}function I(H,j,Q,B,ne,fe,te){te===!0?r.vertexAttribIPointer(H,j,Q,ne,fe):r.vertexAttribPointer(H,j,Q,B,ne,fe)}function T(H,j,Q,B){w();const ne=B.attributes,fe=Q.getAttributes(),te=j.defaultAttributeValues;for(const Z in fe){const $=fe[Z];if($.location>=0){let q=ne[Z];if(q===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),q!==void 0){const U=q.normalized,pe=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const We=Se.buffer,ze=Se.type,je=Se.bytesPerElement,le=ze===r.INT||ze===r.UNSIGNED_INT||q.gpuType===am;if(q.isInterleavedBufferAttribute){const ce=q.data,we=ce.stride,Qe=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<$.locationSize;Ie++)y($.location+Ie,ce.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<$.locationSize;Ie++)x($.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ie=0;Ie<$.locationSize;Ie++)I($.location+Ie,pe/$.locationSize,ze,U,we*je,(Qe+pe/$.locationSize*Ie)*je,le)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)y($.location+ce,q.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<$.locationSize;ce++)x($.location+ce);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ce=0;ce<$.locationSize;ce++)I($.location+ce,pe/$.locationSize,ze,U,pe*je,pe/$.locationSize*ce*je,le)}}else if(te!==void 0){const U=te[Z];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv($.location,U);break;case 3:r.vertexAttrib3fv($.location,U);break;case 4:r.vertexAttrib4fv($.location,U);break;default:r.vertexAttrib1fv($.location,U)}}}}R()}function L(){N();for(const H in n){const j=n[H];for(const Q in j){const B=j[Q];for(const ne in B){const fe=B[ne];for(const te in fe)p(fe[te].object),delete fe[te];delete B[ne]}}delete n[H]}}function D(H){if(n[H.id]===void 0)return;const j=n[H.id];for(const Q in j){const B=j[Q];for(const ne in B){const fe=B[ne];for(const te in fe)p(fe[te].object),delete fe[te];delete B[ne]}}delete n[H.id]}function k(H){for(const j in n){const Q=n[j];for(const B in Q){const ne=Q[B];if(ne[H.id]===void 0)continue;const fe=ne[H.id];for(const te in fe)p(fe[te].object),delete fe[te];delete ne[H.id]}}}function M(H){for(const j in n){const Q=n[j],B=H.isInstancedMesh===!0?H.id:0,ne=Q[B];if(ne!==void 0){for(const fe in ne){const te=ne[fe];for(const Z in te)p(te[Z].object),delete te[Z];delete ne[fe]}delete Q[B],Object.keys(Q).length===0&&delete n[j]}}}function N(){F(),u=!0,o!==s&&(o=s,h(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:N,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:x,disableUnusedAttributes:R}}function MP(r,e,t){let n;function s(f){n=f}function o(f,h){r.drawArrays(n,f,h),t.update(h,n,1)}function u(f,h,p){p!==0&&(r.drawArraysInstanced(n,f,h,p),t.update(h,n,p))}function c(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,p);let v=0;for(let g=0;g<p;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function EP(r,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(k){return!(k!==Oi&&n.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(k){const M=k===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==vi&&k!==Qi&&!M&&n.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function f(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(lt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:T,maxSamples:L,samples:D}}function wP(r){const e=this;let t=null,n=0,s=!1,o=!1;const u=new Zn,c=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||n!==0||s;return s=g,n=v.length,S},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,S){const b=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,y=r.get(v);if(!s||b===null||b.length===0||o&&!x)o?p(null):h();else{const R=o?0:n,I=R*4;let T=y.clippingState||null;f.value=T,T=p(b,g,I,S);for(let L=0;L!==I;++L)T[L]=t[L];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(v,g,S,b){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=f.value,b!==!0||x===null){const y=S+w*4,R=g.matrixWorldInverse;c.getNormalMatrix(R),(x===null||x.length<y)&&(x=new Float32Array(y));for(let I=0,T=S;I!==w;++I,T+=4)u.copy(v[I]).applyMatrix4(R,c),u.normal.toArray(x,T),x[T+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}const Cs=4,TP=6,AP=20,RP=256,Do=new XS,q_=new xt;let Jh=null,ef=0,tf=0,rf=!1;const CP=new ae,wa=new ae;class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:u=256,position:c=CP}=o;Jh=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,ef,tf),this._renderer.xr.enabled=rf,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ia||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nr,minFilter:Nr,generateMipmaps:!1,type:nn,format:Oi,colorSpace:mc,depthBuffer:!1},s=$_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PP(o)),this._blurMaterial=DP(o,e,t),this._ggxMaterial=LP(o,e,t)}return s}_compileMaterial(e){const t=new Hi(new si,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,s,o){const u=new gi(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,v=h.toneMapping;h.getClearColor(q_),h.toneMapping=tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new sl,new yc({name:"PMREM.Background",side:$r,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,S=g.material;let b=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,b=!0):(S.color.copy(q_),b=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(u.up.set(0,c[x],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+f[x],o.y,o.z)):y===1?(u.up.set(0,0,c[x]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+f[x],o.z)):(u.up.set(0,c[x],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+f[x]));const R=this._cubeSize;Ss(s,y*R,x>2?R:0,R,R),h.setRenderTarget(s),b&&h.render(g,u),h.render(e,u)}h.toneMapping=v,h.autoClear=p,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ia||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const o=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;Ss(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const f=u.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=h*1.25,S=v*g,{_lodMax:b}=this,w=this._sizeLods[n],x=3*w*(n>b-Cs?n-b+Cs:0),y=4*(this._cubeSize-w);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=b-t,Ss(o,x,y,3*w,2*w),s.setRenderTarget(o),s.render(c,Do),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=b-n,Ss(e,x,y,3*w,2*w),s.setRenderTarget(e),s.render(c,Do)}_blur(e,t,n,s){const o=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,u),this._blurPass(o,e,n,n,u)}_blurPass(e,t,n,s,o){const u=this._renderer,c=this._blurMaterial,f=this._lodMeshes[s];f.material=c;const h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-n;const p=this._sizeLods[s],v=3*p*(s>this._lodMax-Cs?s-this._lodMax+Cs:0),g=4*(this._cubeSize-p);Ss(t,v,g,3*p,2*p),u.setRenderTarget(t),u.render(f,Do)}}function PP(r){const e=[],t=[];let n=r;const s=r-Cs+1+TP;for(let o=0;o<s;o++){const u=Math.pow(2,n);e.push(u);const c=1/(u-2),f=-c,h=1+c,p=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,g=6,S=3,b=new Float32Array(S*g*v),w=new Float32Array(S*g*v);for(let y=0;y<v;y++){const R=y%3*2/3-1,I=y>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];b.set(T,S*g*y);for(let L=0;L<g;L++){const D=p[L*2]*2-1,k=p[L*2+1]*2-1;y===0?wa.set(1,k,D):y===1?wa.set(-D,1,-k):y===2?wa.set(-D,k,1):y===3?wa.set(-1,k,-D):y===4?wa.set(-D,-1,k):wa.set(D,k,-1),wa.toArray(w,(y*g+L)*S)}}const x=new si;x.setAttribute("position",new Bi(b,S)),x.setAttribute("outputDirection",new Bi(w,S)),t.push(new Hi(x,null)),n>Cs&&n--}return{lodMeshes:t,sizeLods:e}}function $_(r,e,t){const n=new zi(r,e,t);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function LP(r,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function DP(r,e,t){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:AP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Z_(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Q_(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class KS extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new HS(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sl(5,5,5),o=new an({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$r,blending:wn});o.uniforms.tEquirect.value=t;const u=new Hi(s,o),c=t.minFilter;return t.minFilter===Ca&&(t.minFilter=Nr),new UR(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(o)}}function NP(r){let e=new WeakMap,t=new WeakMap,n=null;function s(g,S=!1){return g==null?null:S?u(g):o(g)}function o(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ah||S===Rh)if(e.has(g)){const b=e.get(g).texture;return c(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new KS(b.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",h),c(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,b=S===Ah||S===Rh,w=S===Ia||S===Us;if(b||w){let x=t.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return n===null&&(n=new K_(r)),x=b?n.fromEquirectangular(g,x):n.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return b&&R&&R.height>0||w&&R&&f(R)?(n===null&&(n=new K_(r)),x=b?n.fromEquirectangular(g):n.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",p),x.texture):null}}}return g}function c(g,S){return S===Ah?g.mapping=Ia:S===Rh&&(g.mapping=Us),g}function f(g){let S=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&S++;return S===b}function h(g){const S=g.target;S.removeEventListener("dispose",h);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function p(g){const S=g.target;S.removeEventListener("dispose",p);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function IP(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=r.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function UP(r,e,t,n){const s={},o=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete s[g.id];const S=o.get(g);S&&(e.remove(S),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(v,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function f(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function h(v){const g=[],S=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(S!==null){const R=S.array;w=S.version;for(let I=0,T=R.length;I<T;I+=3){const L=R[I+0],D=R[I+1],k=R[I+2];g.push(L,D,D,k,k,L)}}else{const R=b.array;w=b.version;for(let I=0,T=R.length/3-1;I<T;I+=3){const L=I+0,D=I+1,k=I+2;g.push(L,D,D,k,k,L)}}const x=new(b.count>=65535?FS:OS)(g,1);x.version=w;const y=o.get(v);y&&e.remove(y),o.set(v,x)}function p(v){const g=o.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return o.get(v)}return{get:c,update:f,getWireframeAttribute:p}}function kP(r,e,t){let n;function s(v){n=v}let o,u;function c(v){o=v.type,u=v.bytesPerElement}function f(v,g){r.drawElements(n,g,o,v*u),t.update(g,n,1)}function h(v,g,S){S!==0&&(r.drawElementsInstanced(n,g,o,v*u,S),t.update(g,n,S))}function p(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,v,0,S);let b=0;for(let w=0;w<S;w++)b+=g[w];t.update(b,n,1)}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function OP(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function FP(r,e,t){const n=new WeakMap,s=new or;function o(u,c,f){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==v){let S=function(){M.dispose(),n.delete(c),c.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();const b=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let T=0;b===!0&&(T=1),w===!0&&(T=2),x===!0&&(T=3);let L=c.attributes.position.count*T,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const k=new Float32Array(L*D*4*v),M=new DS(k,L,D,v);M.type=Qi,M.needsUpdate=!0;const N=T*4;for(let F=0;F<v;F++){const H=y[F],j=R[F],Q=I[F],B=L*D*4*F;for(let ne=0;ne<H.count;ne++){const fe=ne*N;b===!0&&(s.fromBufferAttribute(H,ne),k[B+fe+0]=s.x,k[B+fe+1]=s.y,k[B+fe+2]=s.z,k[B+fe+3]=0),w===!0&&(s.fromBufferAttribute(j,ne),k[B+fe+4]=s.x,k[B+fe+5]=s.y,k[B+fe+6]=s.z,k[B+fe+7]=0),x===!0&&(s.fromBufferAttribute(Q,ne),k[B+fe+8]=s.x,k[B+fe+9]=s.y,k[B+fe+10]=s.z,k[B+fe+11]=Q.itemSize===4?s.w:1)}}g={count:v,texture:M,size:new Ct(L,D)},n.set(c,g),c.addEventListener("dispose",S)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let S=0;for(let w=0;w<h.length;w++)S+=h[w];const b=c.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",h)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function zP(r,e,t,n,s){let o=new WeakMap;function u(h){const p=s.render.frame,v=h.geometry,g=e.get(h,v);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return g}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const BP={[hS]:"LINEAR_TONE_MAPPING",[fS]:"REINHARD_TONE_MAPPING",[pS]:"CINEON_TONE_MAPPING",[mS]:"ACES_FILMIC_TONE_MAPPING",[vS]:"AGX_TONE_MAPPING",[_S]:"NEUTRAL_TONE_MAPPING",[gS]:"CUSTOM_TONE_MAPPING"};function VP(r,e,t,n,s,o){const u=new zi(e,t,{type:r,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,f=null;const h=new si;h.setAttribute("position",new Vr([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Vr([0,2,0,0,2,0],2));const p=new DR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Hi(h,p),g=new XS(-1,1,1,-1,0,1);let S=null,b=null,w=!1,x,y=null,R=[],I=!1;this.setSize=function(T,L){u.setSize(T,L),c!==null&&c.setSize(T,L),f!==null&&f.setSize(T,L);for(let D=0;D<R.length;D++){const k=R[D];k.setSize&&k.setSize(T,L)}},this.setEffects=function(T){R=T,I=R.length>0&&R[0].isRenderPass===!0;const L=u.width,D=u.height;R.length>0&&c===null&&(c=new zi(L,D,{type:nn,depthBuffer:!1,stencilBuffer:!1}),f=new zi(L,D,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<R.length;k++){const M=R[k];M.setSize&&M.setSize(L,D)}},this.begin=function(T,L){if(w||T.toneMapping===tn&&R.length===0)return!1;if(y=L,L!==null){const D=L.width,k=L.height;(u.width!==D||u.height!==k)&&this.setSize(D,k)}return I===!1&&T.setRenderTarget(u),x=T.toneMapping,T.toneMapping=tn,!0},this.hasRenderPass=function(){return I},this.end=function(T,L){T.toneMapping=x,w=!0;let D=u,k=c;for(let M=0;M<R.length;M++){const N=R[M];N.enabled!==!1&&(N.render(T,k,D,L),N.needsSwap!==!1&&(D=k,k=k===c?f:c))}if(S!==T.outputColorSpace||b!==T.toneMapping){S=T.outputColorSpace,b=T.toneMapping,p.defines={},vt.getTransfer(S)===Nt&&(p.defines.SRGB_TRANSFER="");const M=BP[b];M&&(p.defines[M]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(y),T.render(v,g),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){u.dispose(),c!==null&&c.dispose(),f!==null&&f.dispose(),h.dispose(),p.dispose()}}const $S=new Br,Mp=new Zo(1,1),ZS=new DS,QS=new lR,JS=new HS,J_=[],ey=[],ty=new Float32Array(16),ry=new Float32Array(9),iy=new Float32Array(4);function Vs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let o=J_[s];if(o===void 0&&(o=new Float32Array(s),J_[s]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(o,c)}return o}function pr(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mr(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dc(r,e){let t=ey[e];t===void 0&&(t=new Int32Array(e),ey[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pr(t,e))return;r.uniform2fv(this.addr,e),mr(t,e)}}function WP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pr(t,e))return;r.uniform3fv(this.addr,e),mr(t,e)}}function jP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pr(t,e))return;r.uniform4fv(this.addr,e),mr(t,e)}}function XP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pr(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mr(t,e)}else{if(pr(t,n))return;iy.set(n),r.uniformMatrix2fv(this.addr,!1,iy),mr(t,n)}}function YP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pr(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mr(t,e)}else{if(pr(t,n))return;ry.set(n),r.uniformMatrix3fv(this.addr,!1,ry),mr(t,n)}}function qP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pr(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mr(t,e)}else{if(pr(t,n))return;ty.set(n),r.uniformMatrix4fv(this.addr,!1,ty),mr(t,n)}}function KP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $P(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pr(t,e))return;r.uniform2iv(this.addr,e),mr(t,e)}}function ZP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pr(t,e))return;r.uniform3iv(this.addr,e),mr(t,e)}}function QP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pr(t,e))return;r.uniform4iv(this.addr,e),mr(t,e)}}function JP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pr(t,e))return;r.uniform2uiv(this.addr,e),mr(t,e)}}function tL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pr(t,e))return;r.uniform3uiv(this.addr,e),mr(t,e)}}function rL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pr(t,e))return;r.uniform4uiv(this.addr,e),mr(t,e)}}function iL(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let o;this.type===r.SAMPLER_2D_SHADOW?(Mp.compareFunction=t.isReversedDepthBuffer()?hm:dm,o=Mp):o=$S,t.setTexture2D(e||o,s)}function nL(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||QS,s)}function aL(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||JS,s)}function sL(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ZS,s)}function oL(r){switch(r){case 5126:return HP;case 35664:return GP;case 35665:return WP;case 35666:return jP;case 35674:return XP;case 35675:return YP;case 35676:return qP;case 5124:case 35670:return KP;case 35667:case 35671:return $P;case 35668:case 35672:return ZP;case 35669:case 35673:return QP;case 5125:return JP;case 36294:return eL;case 36295:return tL;case 36296:return rL;case 35678:case 36198:case 36298:case 36306:case 35682:return iL;case 35679:case 36299:case 36307:return nL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return sL}}function lL(r,e){r.uniform1fv(this.addr,e)}function uL(r,e){const t=Vs(e,this.size,2);r.uniform2fv(this.addr,t)}function cL(r,e){const t=Vs(e,this.size,3);r.uniform3fv(this.addr,t)}function dL(r,e){const t=Vs(e,this.size,4);r.uniform4fv(this.addr,t)}function hL(r,e){const t=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fL(r,e){const t=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pL(r,e){const t=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mL(r,e){r.uniform1iv(this.addr,e)}function gL(r,e){r.uniform2iv(this.addr,e)}function vL(r,e){r.uniform3iv(this.addr,e)}function _L(r,e){r.uniform4iv(this.addr,e)}function yL(r,e){r.uniform1uiv(this.addr,e)}function xL(r,e){r.uniform2uiv(this.addr,e)}function SL(r,e){r.uniform3uiv(this.addr,e)}function bL(r,e){r.uniform4uiv(this.addr,e)}function ML(r,e,t){const n=this.cache,s=e.length,o=Dc(t,s);pr(n,o)||(r.uniform1iv(this.addr,o),mr(n,o));let u;this.type===r.SAMPLER_2D_SHADOW?u=Mp:u=$S;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||u,o[c])}function EL(r,e,t){const n=this.cache,s=e.length,o=Dc(t,s);pr(n,o)||(r.uniform1iv(this.addr,o),mr(n,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||QS,o[u])}function wL(r,e,t){const n=this.cache,s=e.length,o=Dc(t,s);pr(n,o)||(r.uniform1iv(this.addr,o),mr(n,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||JS,o[u])}function TL(r,e,t){const n=this.cache,s=e.length,o=Dc(t,s);pr(n,o)||(r.uniform1iv(this.addr,o),mr(n,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||ZS,o[u])}function AL(r){switch(r){case 5126:return lL;case 35664:return uL;case 35665:return cL;case 35666:return dL;case 35674:return hL;case 35675:return fL;case 35676:return pL;case 5124:case 35670:return mL;case 35667:case 35671:return gL;case 35668:case 35672:return vL;case 35669:case 35673:return _L;case 5125:return yL;case 36294:return xL;case 36295:return SL;case 36296:return bL;case 35678:case 36198:case 36298:case 36306:case 35682:return ML;case 35679:case 36299:case 36307:return EL;case 35680:case 36300:case 36308:case 36293:return wL;case 36289:case 36303:case 36311:case 36292:return TL}}class RL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oL(t.type)}}class CL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AL(t.type)}}class PL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function ny(r,e){r.seq.push(e),r.map[e.id]=e}function LL(r,e,t){const n=r.name,s=n.length;for(nf.lastIndex=0;;){const o=nf.exec(n),u=nf.lastIndex;let c=o[1];const f=o[2]==="]",h=o[3];if(f&&(c=c|0),h===void 0||h==="["&&u+2===s){ny(t,h===void 0?new RL(c,r,e):new CL(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new PL(c),ny(t,p)),t=p}}}class tc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const c=e.getActiveUniform(t,u),f=e.getUniformLocation(t,c.name);LL(c,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function ay(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const DL=37297;let NL=0;function IL(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const sy=new dt;function UL(r){vt._getMatrix(sy,vt.workingColorSpace,r);const e=`mat3( ${sy.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case gc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function oy(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+IL(r.getShaderSource(e),u)}else return s}function kL(r,e){const t=UL(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OL={[hS]:"Linear",[fS]:"Reinhard",[pS]:"Cineon",[mS]:"ACESFilmic",[vS]:"AgX",[_S]:"Neutral",[gS]:"Custom"};function FL(r,e){const t=OL[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vu=new ae;function zL(){vt.getLuminanceCoefficients(Vu);const r=Vu.x.toFixed(4),e=Vu.y.toFixed(4),t=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BL(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function VL(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HL(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=r.getActiveAttrib(e,s),u=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function Oo(r){return r!==""}function ly(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(r){return r.replace(GL,jL)}const WL=new Map;function jL(r,e){let t=ft[e];if(t===void 0){const n=WL.get(e);if(n!==void 0)t=ft[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ep(t)}const XL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(r){return r.replace(XL,YL)}function YL(r,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function dy(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qL={[$u]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function KL(r){return qL[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $L={[Ia]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Rc]:"ENVMAP_TYPE_CUBE_UV"};function ZL(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$L[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const QL={[Us]:"ENVMAP_MODE_REFRACTION"};function JL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":QL[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eD={[dS]:"ENVMAP_BLENDING_MULTIPLY",[z2]:"ENVMAP_BLENDING_MIX",[B2]:"ENVMAP_BLENDING_ADD"};function tD(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eD[r.combine]||"ENVMAP_BLENDING_NONE"}function rD(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iD(r,e,t,n){const s=r.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=KL(t),h=ZL(t),p=JL(t),v=tD(t),g=rD(t),S=BL(t),b=VL(o),w=s.createProgram();let x,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Oo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Oo).join(`
`),y.length>0&&(y+=`
`)):(x=[dy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),y=[dy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?ft.tonemapping_pars_fragment:"",t.toneMapping!==tn?FL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,kL("linearToOutputTexel",t.outputColorSpace),zL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),u=Ep(u),u=ly(u,t),u=uy(u,t),c=Ep(c),c=ly(c,t),c=uy(c,t),u=cy(u),c=cy(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=R+x+u,T=R+y+c,L=ay(s,s.VERTEX_SHADER,I),D=ay(s,s.FRAGMENT_SHADER,T);s.attachShader(w,L),s.attachShader(w,D),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function k(H){if(r.debug.checkShaderErrors){const j=s.getProgramInfoLog(w)||"",Q=s.getShaderInfoLog(L)||"",B=s.getShaderInfoLog(D)||"",ne=j.trim(),fe=Q.trim(),te=B.trim();let Z=!0,$=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,w,L,D);else{const q=oy(s,L,"vertex"),U=oy(s,D,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ne+`
`+q+`
`+U)}else ne!==""?lt("WebGLProgram: Program Info Log:",ne):(fe===""||te==="")&&($=!1);$&&(H.diagnostics={runnable:Z,programLog:ne,vertexShader:{log:fe,prefix:x},fragmentShader:{log:te,prefix:y}})}s.deleteShader(L),s.deleteShader(D),M=new tc(s,w),N=HL(s,w)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(w,DL)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NL++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=D,this}let nD=0;class aD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sD(e),t.set(e,n)),n}}class sD{constructor(e){this.id=nD++,this.code=e,this.usedTimes=0}}function oD(r){return r===Ua||r===fc||r===pc}function lD(r,e,t,n,s,o){const u=new US,c=new aD,f=new Set,h=[],p=new Map,v=n.logarithmicDepthBuffer;let g=n.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return f.add(M),M===0?"uv":`uv${M}`}function w(M,N,F,H,j,Q){const B=H.fog,ne=j.geometry,fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Z=e.get(M.envMap||fe,te),$=Z&&Z.mapping===Rc?Z.image.height:null,q=S[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&lt("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const U=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,pe=U!==void 0?U.length:0;let Se=0;ne.morphAttributes.position!==void 0&&(Se=1),ne.morphAttributes.normal!==void 0&&(Se=2),ne.morphAttributes.color!==void 0&&(Se=3);let We,ze,je,le;if(q){const Ft=Zi[q];We=Ft.vertexShader,ze=Ft.fragmentShader}else{We=M.vertexShader,ze=M.fragmentShader;const Ft=c.getVertexShaderStage(M),yt=c.getFragmentShaderStage(M);c.update(M,Ft,yt),je=Ft.id,le=yt.id}const ce=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Qe=j.isInstancedMesh===!0,Ie=j.isBatchedMesh===!0,Je=!!M.map,St=!!M.matcap,gt=!!Z,ut=!!M.aoMap,Jt=!!M.lightMap,er=!!M.bumpMap&&M.wireframe===!1,jt=!!M.normalMap,Kt=!!M.displacementMap,ir=!!M.emissiveMap,Lt=!!M.metalnessMap,Ht=!!M.roughnessMap,X=M.anisotropy>0,lr=M.clearcoat>0,wt=M.dispersion>0,O=M.retroreflectivity>0,E=M.iridescence>0,ee=M.sheen>0,oe=M.transmission>0,de=X&&!!M.anisotropyMap,Te=lr&&!!M.clearcoatMap,Le=lr&&!!M.clearcoatNormalMap,K=lr&&!!M.clearcoatRoughnessMap,Ae=E&&!!M.iridescenceMap,Pe=E&&!!M.iridescenceThicknessMap,Ve=ee&&!!M.sheenColorMap,xe=ee&&!!M.sheenRoughnessMap,nt=!!M.specularMap,$e=!!M.specularColorMap,at=!!M.specularIntensityMap,st=oe&&!!M.transmissionMap,W=oe&&!!M.thicknessMap,me=!!M.gradientMap,Me=!!M.alphaMap,Ne=M.alphaTest>0,Oe=!!M.alphaHash,_e=!!M.extensions;let et=tn;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(et=r.toneMapping);const ke={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:ze,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&j._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&j.instanceColor!==null,instancingMorph:Qe&&j.morphTexture!==null,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:St,envMap:gt,envMapMode:gt&&Z.mapping,envMapCubeUVHeight:$,aoMap:ut,lightMap:Jt,bumpMap:er,normalMap:jt,displacementMap:Kt,emissiveMap:ir,normalMapObjectSpace:jt&&M.normalMapType===G2,normalMapTangentSpace:jt&&M.normalMapType===E_,packedNormalMap:jt&&M.normalMapType===E_&&oD(M.normalMap.format),metalnessMap:Lt,roughnessMap:Ht,anisotropy:X,anisotropyMap:de,clearcoat:lr,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:K,dispersion:wt,retroreflection:O,iridescence:E,iridescenceMap:Ae,iridescenceThicknessMap:Pe,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:xe,specularMap:nt,specularColorMap:$e,specularIntensityMap:at,transmission:oe,transmissionMap:st,thicknessMap:W,gradientMap:me,opaque:M.transparent===!1&&M.blending===Wo&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Oe,combine:M.combine,mapUv:Je&&b(M.map.channel),aoMapUv:ut&&b(M.aoMap.channel),lightMapUv:Jt&&b(M.lightMap.channel),bumpMapUv:er&&b(M.bumpMap.channel),normalMapUv:jt&&b(M.normalMap.channel),displacementMapUv:Kt&&b(M.displacementMap.channel),emissiveMapUv:ir&&b(M.emissiveMap.channel),metalnessMapUv:Lt&&b(M.metalnessMap.channel),roughnessMapUv:Ht&&b(M.roughnessMap.channel),anisotropyMapUv:de&&b(M.anisotropyMap.channel),clearcoatMapUv:Te&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&b(M.sheenRoughnessMap.channel),specularMapUv:nt&&b(M.specularMap.channel),specularColorMapUv:$e&&b(M.specularColorMap.channel),specularIntensityMapUv:at&&b(M.specularIntensityMap.channel),transmissionMapUv:st&&b(M.transmissionMap.channel),thicknessMapUv:W&&b(M.thicknessMap.channel),alphaMapUv:Me&&b(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(jt||X),vertexNormals:!!ne.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ne.attributes.uv&&(Je||Me),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||ne.attributes.normal===void 0&&jt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Nt,decodeVideoTextureEmissive:ir&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===$r,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=f.has(1),ke.vertexUv2s=f.has(2),ke.vertexUv3s=f.has(3),f.clear(),ke}function x(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)N.push(F),N.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(y(N,M),R(N,M),N.push(r.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function y(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numSunLights),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numSunLightShadows),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function R(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function I(M){const N=S[M.type];let F;if(N){const H=Zi[N];F=CR.clone(H.uniforms)}else F=M.uniforms;return F}function T(M,N){let F=p.get(N);return F!==void 0?++F.usedTimes:(F=new iD(r,N,M,s),h.push(F),p.set(N,F)),F}function L(M){if(--M.usedTimes===0){const N=h.indexOf(M);h[N]=h[h.length-1],h.pop(),p.delete(M.cacheKey),M.destroy()}}function D(M){c.remove(M)}function k(){c.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:I,acquireProgram:T,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:k}}function uD(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function s(u,c,f){r.get(u)[c]=f}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function cD(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fy(){const r=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function c(g,S,b,w,x,y){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:b,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:x,group:y},r[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=b,R.materialVariant=u(g),R.groupOrder=w,R.renderOrder=g.renderOrder,R.z=x,R.group=y),e++,R}function f(g,S,b,w,x,y,R){R.reversedDepth===!0&&(x=-x);const I=c(g,S,b,w,x,y);b.transmission>0?n.push(I):b.transparent===!0?s.push(I):t.push(I)}function h(g,S,b,w,x,y){const R=c(g,S,b,w,x,y);b.transmission>0?n.unshift(R):b.transparent===!0?s.unshift(R):t.unshift(R)}function p(g,S){t.length>1&&t.sort(g||cD),n.length>1&&n.sort(S||hy),s.length>1&&s.sort(S||hy)}function v(){for(let g=e,S=r.length;g<S;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:f,unshift:h,finish:v,sort:p}}function dD(){let r=new WeakMap;function e(n,s){const o=r.get(n);let u;return o===void 0?(u=new fy,r.set(n,[u])):s>=o.length?(u=new fy,o.push(u)):u=o[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function hD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ae,color:new xt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=t,t}}}function fD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pD=0;function mD(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gD(r){const e=new hD,t=fD(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ae);const s=new ae,o=new fr,u=new fr;function c(h){let p=0,v=0,g=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let S=0,b=0,w=0,x=0,y=0,R=0,I=0,T=0,L=0,D=0,k=0,M=0,N=0,F=0;h.sort(mD);for(let j=0,Q=h.length;j<Q;j++){const B=h[j],ne=B.color,fe=B.intensity,te=B.distance;let Z=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ua?Z=B.shadow.map.texture:Z=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=ne.r*fe,v+=ne.g*fe,g+=ne.b*fe;else if(B.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(B.sh.coefficients[$],fe);F++}else if(B.isSunLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,U=t.get(B);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[b]=U,n.sunShadowMap[b]=Z;const pe=q.getViewportCount();for(let Se=0;Se<pe;Se++)n.sunShadowMatrix[w+Se]=q.getMatrix(Se),n.sunShadowCascade[w+Se]=q._cascadeData[Se];w+=pe,b++}n.sun[S]=$,S++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,U=t.get(B);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,n.directionalShadow[x]=U,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=B.shadow.matrix,L++}n.directional[x]=$,x++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(ne).multiplyScalar(fe),$.distance=te,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,n.spot[R]=$;const q=B.shadow;if(B.map&&(n.spotLightMap[M]=B.map,M++,q.updateMatrices(B),B.castShadow&&N++),n.spotLightMatrix[R]=q.matrix,B.castShadow){const U=t.get(B);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,n.spotShadow[R]=U,n.spotShadowMap[R]=Z,k++}R++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(ne).multiplyScalar(fe),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),n.rectArea[I]=$,I++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const q=B.shadow,U=t.get(B);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,n.pointShadow[y]=U,n.pointShadowMap[y]=Z,n.pointShadowMatrix[y]=B.shadow.matrix,D++}n.point[y]=$,y++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(fe),$.groundColor.copy(B.groundColor).multiplyScalar(fe),n.hemi[T]=$,T++}}I>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=g;const H=n.hash;(H.sunLength!==S||H.directionalLength!==x||H.pointLength!==y||H.spotLength!==R||H.rectAreaLength!==I||H.hemiLength!==T||H.numSunShadows!==b||H.numDirectionalShadows!==L||H.numPointShadows!==D||H.numSpotShadows!==k||H.numSpotMaps!==M||H.numLightProbes!==F)&&(n.sun.length=S,n.directional.length=x,n.spot.length=R,n.rectArea.length=I,n.point.length=y,n.hemi.length=T,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=k,n.spotShadowMap.length=k,n.spotLightMatrix.length=k+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=F,H.sunLength=S,H.directionalLength=x,H.pointLength=y,H.spotLength=R,H.rectAreaLength=I,H.hemiLength=T,H.numSunShadows=b,H.numDirectionalShadows=L,H.numPointShadows=D,H.numSpotShadows=k,H.numSpotMaps=M,H.numLightProbes=F,n.version=pD++)}function f(h,p){let v=0,g=0,S=0,b=0,w=0,x=0;const y=p.matrixWorldInverse;for(let R=0,I=h.length;R<I;R++){const T=h[R];if(T.isSunLight){const L=n.sun[v];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),v++}else if(T.isDirectionalLight){const L=n.directional[g];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),g++}else if(T.isSpotLight){const L=n.spot[b];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),b++}else if(T.isRectAreaLight){const L=n.rectArea[w];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),u.identity(),o.copy(T.matrixWorld),o.premultiply(y),u.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(T.isPointLight){const L=n.point[S];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),S++}else if(T.isHemisphereLight){const L=n.hemi[x];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),x++}}}return{setup:c,setupView:f,state:n}}function py(r){const e=new gD(r),t=[],n=[],s=[];function o(g){v.camera=g,t.length=0,n.length=0,s.length=0}function u(g){t.push(g)}function c(g){n.push(g)}function f(g){s.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c,pushLightProbeGrid:f}}function vD(r){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new py(r),e.set(s,[c])):o>=u.length?(c=new py(r),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const _D=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yD=`uniform sampler2D shadow_pass;
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
}`,xD=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],SD=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],my=new fr,No=new ae,af=new ae;function bD(r,e,t){let n=new BS;const s=new Ct,o=new Ct,u=new or,c=new NR,f=new IR,h={},p=t.maxTextureSize,v={[Na]:$r,[$r]:Na,[Mn]:Mn},g=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:_D,fragmentShader:yD}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new si;b.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Hi(b,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let y=this.type;this.render=function(D,k,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===x2&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$u);const N=r.getRenderTarget(),F=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(wn),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=y!==this.type;Q&&k.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(ne=>ne.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,ne=D.length;B<ne;B++){const fe=D[B],te=fe.shadow;if(te===void 0){lt("WebGLShadowMap:",fe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const Z=te.getFrameExtents();s.multiply(Z),o.copy(te.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/Z.x),s.x=o.x*Z.x,te.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/Z.y),s.y=o.y*Z.y,te.mapSize.y=o.y));const $=r.state.buffers.depth.getReversed();if(te.camera._reversedDepth=$,te.map===null||Q===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===ko){if(fe.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new zi(s.x,s.y,{format:Ua,type:nn,minFilter:Nr,magFilter:Nr,generateMipmaps:!1}),te.map.texture.name=fe.name+".shadowMap",te.map.depthTexture=new Zo(s.x,s.y,Qi),te.map.depthTexture.name=fe.name+".shadowMapDepth",te.map.depthTexture.format=An,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=wr,te.map.depthTexture.magFilter=wr}else fe.isPointLight?(te.map=new KS(s.x),te.map.depthTexture=new AR(s.x,rn)):(te.map=new zi(s.x,s.y),te.map.depthTexture=new Zo(s.x,s.y,rn)),te.map.depthTexture.name=fe.name+".shadowMap",te.map.depthTexture.format=An,this.type===$u?(te.map.depthTexture.compareFunction=$?hm:dm,te.map.depthTexture.minFilter=Nr,te.map.depthTexture.magFilter=Nr):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=wr,te.map.depthTexture.magFilter=wr);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==s.x||te.map.height!==s.y)&&te.map.setSize(s.x,s.y);const q=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();fe.isPointLight!==!0&&te.updateMatrices(fe,M);for(let U=0;U<q;U++){const pe=te.getCamera(U);if(fe.isPointLight){const Se=te.camera,We=te.matrix,ze=fe.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),No.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(No),af.copy(Se.position),af.add(xD[U]),Se.up.copy(SD[U]),Se.lookAt(af),Se.updateMatrixWorld(),We.makeTranslation(-No.x,-No.y,-No.z),my.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),te._frustum.setFromProjectionMatrix(my,Se.coordinateSystem,Se.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)r.setRenderTarget(te.map,U),r.clear();else{U===0&&(r.setRenderTarget(te.map),r.clear());const Se=te.getViewport(U);u.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),j.viewport(u)}n=te.getFrustum(U),T(k,M,pe,fe,this.type)}te.isPointLightShadow!==!0&&this.type===ko&&R(te,M),te.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(N,F,H)};function R(D,k){const M=e.update(w);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null?D.mapPass=new zi(s.x,s.y,{format:Ua,type:nn}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(k,null,M,g,w,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value.set(D.map.width,D.map.height),S.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(k,null,M,S,w,null)}function I(D,k,M,N){let F=null;const H=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)F=H;else if(F=M.isPointLight===!0?f:c,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const j=F.uuid,Q=k.uuid;let B=h[j];B===void 0&&(B={},h[j]=B);let ne=B[Q];ne===void 0&&(ne=F.clone(),B[Q]=ne,k.addEventListener("dispose",L)),F=ne}if(F.visible=k.visible,F.wireframe=k.wireframe,N===ko?F.side=k.shadowSide!==null?k.shadowSide:k.side:F.side=k.shadowSide!==null?k.shadowSide:v[k.side],F.alphaMap=k.alphaMap,F.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,F.map=k.map,F.clipShadows=k.clipShadows,F.clippingPlanes=k.clippingPlanes,F.clipIntersection=k.clipIntersection,F.displacementMap=k.displacementMap,F.displacementScale=k.displacementScale,F.displacementBias=k.displacementBias,F.wireframeLinewidth=k.wireframeLinewidth,F.linewidth=k.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const j=r.properties.get(F);j.light=M}return F}function T(D,k,M,N,F){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===ko)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);const j=e.update(D),Q=D.material;if(Array.isArray(Q)){const B=j.groups;for(let ne=0,fe=B.length;ne<fe;ne++){const te=B[ne],Z=Q[te.materialIndex];if(Z&&Z.visible){const $=I(D,Z,N,F);D.onBeforeShadow(r,D,k,M,j,$,te),r.renderBufferDirect(M,null,j,$,D,te),D.onAfterShadow(r,D,k,M,j,$,te)}}}else if(Q.visible){const B=I(D,Q,N,F);D.onBeforeShadow(r,D,k,M,j,B,null),r.renderBufferDirect(M,null,j,B,D,null),D.onAfterShadow(r,D,k,M,j,B,null)}}const H=D.children;for(let j=0,Q=H.length;j<Q;j++)T(H[j],k,M,N,F)}function L(D){D.target.removeEventListener("dispose",L);for(const k in h){const M=h[k],N=D.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function MD(r,e){function t(){let W=!1;const me=new or;let Me=null;const Ne=new or(0,0,0,0);return{setMask:function(Oe){Me!==Oe&&!W&&(r.colorMask(Oe,Oe,Oe,Oe),Me=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,_e,et,ke,Ft){Ft===!0&&(Oe*=ke,_e*=ke,et*=ke),me.set(Oe,_e,et,ke),Ne.equals(me)===!1&&(r.clearColor(Oe,_e,et,ke),Ne.copy(me))},reset:function(){W=!1,Me=null,Ne.set(-1,0,0,0)}}}function n(){let W=!1,me=!1,Me=null,Ne=null,Oe=null;return{setReversed:function(_e){if(me!==_e){const et=e.get("EXT_clip_control");_e?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),me=_e;const ke=Oe;Oe=null,this.setClear(ke)}},getReversed:function(){return me},setTest:function(_e){_e?ce(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(_e){Me!==_e&&!W&&(r.depthMask(_e),Me=_e)},setFunc:function(_e){if(me&&(_e=tR[_e]),Ne!==_e){switch(_e){case kf:r.depthFunc(r.NEVER);break;case Of:r.depthFunc(r.ALWAYS);break;case Ff:r.depthFunc(r.LESS);break;case qo:r.depthFunc(r.LEQUAL);break;case zf:r.depthFunc(r.EQUAL);break;case Bf:r.depthFunc(r.GEQUAL);break;case Vf:r.depthFunc(r.GREATER);break;case Hf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Oe!==_e&&(Oe=_e,me&&(_e=1-_e),r.clearDepth(_e))},reset:function(){W=!1,Me=null,Ne=null,Oe=null,me=!1}}}function s(){let W=!1,me=null,Me=null,Ne=null,Oe=null,_e=null,et=null,ke=null,Ft=null;return{setTest:function(yt){W||(yt?ce(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(yt){me!==yt&&!W&&(r.stencilMask(yt),me=yt)},setFunc:function(yt,Sr,oi){(Me!==yt||Ne!==Sr||Oe!==oi)&&(r.stencilFunc(yt,Sr,oi),Me=yt,Ne=Sr,Oe=oi)},setOp:function(yt,Sr,oi){(_e!==yt||et!==Sr||ke!==oi)&&(r.stencilOp(yt,Sr,oi),_e=yt,et=Sr,ke=oi)},setLocked:function(yt){W=yt},setClear:function(yt){Ft!==yt&&(r.clearStencil(yt),Ft=yt)},reset:function(){W=!1,me=null,Me=null,Ne=null,Oe=null,_e=null,et=null,ke=null,Ft=null}}}const o=new t,u=new n,c=new s,f=new WeakMap,h=new WeakMap;let p={},v={},g={},S=new WeakMap,b=[],w=null,x=!1,y=null,R=null,I=null,T=null,L=null,D=null,k=null,M=new xt(0,0,0),N=0,F=!1,H=null,j=null,Q=null,B=null,ne=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),te=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),te=Z>=2);let q=null,U={};const pe=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),We=new or().fromArray(pe),ze=new or().fromArray(Se);function je(W,me,Me,Ne){const Oe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(W,_e),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<Me;et++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(me+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return _e}const le={};le[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ce(r.DEPTH_TEST),u.setFunc(qo),er(!1),jt(S_),ce(r.CULL_FACE),ut(wn);function ce(W){p[W]!==!0&&(r.enable(W),p[W]=!0)}function we(W){p[W]!==!1&&(r.disable(W),p[W]=!1)}function Qe(W,me){return g[W]!==me?(r.bindFramebuffer(W,me),g[W]=me,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=me),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Ie(W,me){let Me=b,Ne=!1;if(W){Me=S.get(me),Me===void 0&&(Me=[],S.set(me,Me));const Oe=W.textures;if(Me.length!==Oe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,et=Oe.length;_e<et;_e++)Me[_e]=r.COLOR_ATTACHMENT0+_e;Me.length=Oe.length,Ne=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(Me)}function Je(W){return w!==W?(r.useProgram(W),w=W,!0):!1}const St={[Es]:r.FUNC_ADD,[b2]:r.FUNC_SUBTRACT,[M2]:r.FUNC_REVERSE_SUBTRACT};St[E2]=r.MIN,St[w2]=r.MAX;const gt={[T2]:r.ZERO,[A2]:r.ONE,[R2]:r.SRC_COLOR,[uS]:r.SRC_ALPHA,[I2]:r.SRC_ALPHA_SATURATE,[D2]:r.DST_COLOR,[P2]:r.DST_ALPHA,[C2]:r.ONE_MINUS_SRC_COLOR,[cS]:r.ONE_MINUS_SRC_ALPHA,[N2]:r.ONE_MINUS_DST_COLOR,[L2]:r.ONE_MINUS_DST_ALPHA,[U2]:r.CONSTANT_COLOR,[k2]:r.ONE_MINUS_CONSTANT_COLOR,[O2]:r.CONSTANT_ALPHA,[F2]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(W,me,Me,Ne,Oe,_e,et,ke,Ft,yt){if(W===wn){x===!0&&(we(r.BLEND),x=!1);return}if(x===!1&&(ce(r.BLEND),x=!0),W!==S2){if(W!==y||yt!==F){if((R!==Es||L!==Es)&&(r.blendEquation(r.FUNC_ADD),R=Es,L=Es),yt)switch(W){case Wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uf:r.blendFunc(r.ONE,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case b_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}I=null,T=null,D=null,k=null,M.set(0,0,0),N=0,y=W,F=yt}return}Oe=Oe||me,_e=_e||Me,et=et||Ne,(me!==R||Oe!==L)&&(r.blendEquationSeparate(St[me],St[Oe]),R=me,L=Oe),(Me!==I||Ne!==T||_e!==D||et!==k)&&(r.blendFuncSeparate(gt[Me],gt[Ne],gt[_e],gt[et]),I=Me,T=Ne,D=_e,k=et),(ke.equals(M)===!1||Ft!==N)&&(r.blendColor(ke.r,ke.g,ke.b,Ft),M.copy(ke),N=Ft),y=W,F=!1}function Jt(W,me){W.side===Mn?we(r.CULL_FACE):ce(r.CULL_FACE);let Me=W.side===$r;me&&(Me=!Me),er(Me),W.blending===Wo&&W.transparent===!1?ut(wn):ut(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),o.setMask(W.colorWrite);const Ne=W.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ir(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function er(W){H!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),H=W)}function jt(W){W!==_2?(ce(r.CULL_FACE),W!==j&&(W===S_?r.cullFace(r.BACK):W===y2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),j=W}function Kt(W){W!==Q&&(te&&r.lineWidth(W),Q=W)}function ir(W,me,Me){W?(ce(r.POLYGON_OFFSET_FILL),(B!==me||ne!==Me)&&(B=me,ne=Me,u.getReversed()&&(me=-me),r.polygonOffset(me,Me))):we(r.POLYGON_OFFSET_FILL)}function Lt(W){W?ce(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function Ht(W){W===void 0&&(W=r.TEXTURE0+fe-1),q!==W&&(r.activeTexture(W),q=W)}function X(W,me,Me){Me===void 0&&(q===null?Me=r.TEXTURE0+fe-1:Me=q);let Ne=U[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},U[Me]=Ne),(Ne.type!==W||Ne.texture!==me)&&(q!==Me&&(r.activeTexture(Me),q=Me),r.bindTexture(W,me||le[W]),Ne.type=W,Ne.texture=me)}function lr(){const W=U[q];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function wt(){try{r.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ee(){try{r.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Te(){try{r.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Le(){try{r.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function K(){try{r.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ae(){try{r.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Pe(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Ve(W,me){v[W]!==me&&(r.pixelStorei(W,me),v[W]=me)}function xe(W){We.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),We.copy(W))}function nt(W){ze.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function $e(W,me){let Me=h.get(me);Me===void 0&&(Me=new WeakMap,h.set(me,Me));let Ne=Me.get(W);Ne===void 0&&(Ne=r.getUniformBlockIndex(me,W.name),Me.set(W,Ne))}function at(W,me){const Me=h.get(me).get(W);f.get(me)!==Me&&(r.uniformBlockBinding(me,Me,W.__bindingPointIndex),f.set(me,Me))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),p={},v={},q=null,U={},g={},S=new WeakMap,b=[],w=null,x=!1,y=null,R=null,I=null,T=null,L=null,D=null,k=null,M=new xt(0,0,0),N=0,F=!1,H=null,j=null,Q=null,B=null,ne=null,We.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:ce,disable:we,bindFramebuffer:Qe,drawBuffers:Ie,useProgram:Je,setBlending:ut,setMaterial:Jt,setFlipSided:er,setCullFace:jt,setLineWidth:Kt,setPolygonOffset:ir,setScissorTest:Lt,activeTexture:Ht,bindTexture:X,unbindTexture:lr,compressedTexImage2D:wt,compressedTexImage3D:O,texImage2D:K,texImage3D:Ae,pixelStorei:Ve,getParameter:Pe,updateUBOMapping:$e,uniformBlockBinding:at,texStorage2D:Te,texStorage3D:Le,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:xe,viewport:nt,reset:st}}function ED(r,e,t,n,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,p=new WeakMap,v=new Set;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return b?new OffscreenCanvas(O,E):_c("canvas")}function x(O,E,ee){let oe=1;const de=wt(O);if((de.width>ee||de.height>ee)&&(oe=ee/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Te=Math.floor(oe*de.width),Le=Math.floor(oe*de.height);g===void 0&&(g=w(Te,Le));const K=E?w(Te,Le):g;return K.width=Te,K.height=Le,K.getContext("2d").drawImage(O,0,0,Te,Le),lt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+Le+")."),K}else return"data"in O&&lt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function y(O){return O.generateMipmaps}function R(O){r.generateMipmap(O)}function I(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(O,E,ee,oe,de,Te=!1){if(O!==null){if(r[O]!==void 0)return r[O];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Le;oe&&(Le=e.get("EXT_texture_norm16"),Le||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===r.RED&&(ee===r.FLOAT&&(K=r.R32F),ee===r.HALF_FLOAT&&(K=r.R16F),ee===r.UNSIGNED_BYTE&&(K=r.R8),ee===r.UNSIGNED_SHORT&&Le&&(K=Le.R16_EXT),ee===r.SHORT&&Le&&(K=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(K=r.R8UI),ee===r.UNSIGNED_SHORT&&(K=r.R16UI),ee===r.UNSIGNED_INT&&(K=r.R32UI),ee===r.BYTE&&(K=r.R8I),ee===r.SHORT&&(K=r.R16I),ee===r.INT&&(K=r.R32I)),E===r.RG&&(ee===r.FLOAT&&(K=r.RG32F),ee===r.HALF_FLOAT&&(K=r.RG16F),ee===r.UNSIGNED_BYTE&&(K=r.RG8),ee===r.UNSIGNED_SHORT&&Le&&(K=Le.RG16_EXT),ee===r.SHORT&&Le&&(K=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(K=r.RG8UI),ee===r.UNSIGNED_SHORT&&(K=r.RG16UI),ee===r.UNSIGNED_INT&&(K=r.RG32UI),ee===r.BYTE&&(K=r.RG8I),ee===r.SHORT&&(K=r.RG16I),ee===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(K=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(K=r.RGB16UI),ee===r.UNSIGNED_INT&&(K=r.RGB32UI),ee===r.BYTE&&(K=r.RGB8I),ee===r.SHORT&&(K=r.RGB16I),ee===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),ee===r.UNSIGNED_INT&&(K=r.RGBA32UI),ee===r.BYTE&&(K=r.RGBA8I),ee===r.SHORT&&(K=r.RGBA16I),ee===r.INT&&(K=r.RGBA32I)),E===r.RGB&&(ee===r.UNSIGNED_SHORT&&Le&&(K=Le.RGB16_EXT),ee===r.SHORT&&Le&&(K=Le.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),E===r.RGBA){const Ae=Te?gc:vt.getTransfer(de);ee===r.FLOAT&&(K=r.RGBA32F),ee===r.HALF_FLOAT&&(K=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(K=Ae===Nt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&Le&&(K=Le.RGBA16_EXT),ee===r.SHORT&&Le&&(K=Le.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function L(O,E){let ee;return O?E===null||E===rn||E===$o?ee=r.DEPTH24_STENCIL8:E===Qi?ee=r.DEPTH32F_STENCIL8:E===Ko&&(ee=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rn||E===$o?ee=r.DEPTH_COMPONENT24:E===Qi?ee=r.DEPTH_COMPONENT32F:E===Ko&&(ee=r.DEPTH_COMPONENT16),ee}function D(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==wr&&O.minFilter!==Nr?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function k(O){const E=O.target;E.removeEventListener("dispose",k),N(E),E.isVideoTexture&&p.delete(E),E.isHTMLTexture&&v.delete(E)}function M(O){const E=O.target;E.removeEventListener("dispose",M),H(E)}function N(O){const E=n.get(O);if(E.__webglInit===void 0)return;const ee=O.source,oe=S.get(ee);if(oe){const de=oe[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&F(O),Object.keys(oe).length===0&&S.delete(ee)}n.remove(O)}function F(O){const E=n.get(O);r.deleteTexture(E.__webglTexture);const ee=O.source,oe=S.get(ee);delete oe[E.__cacheKey],u.memory.textures--}function H(O){const E=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let de=0;de<E.__webglFramebuffer[oe].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[oe][de]);else r.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)r.deleteFramebuffer(E.__webglFramebuffer[oe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=O.textures;for(let oe=0,de=ee.length;oe<de;oe++){const Te=n.get(ee[oe]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),u.memory.textures--),n.remove(ee[oe])}n.remove(O)}let j=0;function Q(){j=0}function B(){return j}function ne(O){j=O}function fe(){const O=j;return O>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,O}function te(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Z(O,E){const ee=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const oe=O.image;if(oe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ee,O,E);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+E)}function $(O,E){const ee=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){we(ee,O,E);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+E)}function q(O,E){const ee=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){we(ee,O,E);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+E)}function U(O,E){const ee=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ee.__version!==O.version){Qe(ee,O,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+E)}const pe={[Gf]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[Wf]:r.MIRRORED_REPEAT},Se={[wr]:r.NEAREST,[V2]:r.NEAREST_MIPMAP_NEAREST,[vu]:r.NEAREST_MIPMAP_LINEAR,[Nr]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[Ca]:r.LINEAR_MIPMAP_LINEAR},We={[j2]:r.NEVER,[$2]:r.ALWAYS,[X2]:r.LESS,[dm]:r.LEQUAL,[Y2]:r.EQUAL,[hm]:r.GEQUAL,[q2]:r.GREATER,[K2]:r.NOTEQUAL};function ze(O,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nr||E.magFilter===Ch||E.magFilter===vu||E.magFilter===Ca||E.minFilter===Nr||E.minFilter===Ch||E.minFilter===vu||E.minFilter===Ca)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,pe[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,pe[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,pe[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Se[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wr||E.minFilter!==vu&&E.minFilter!==Ca||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function je(O,E){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",k));const oe=E.source;let de=S.get(oe);de===void 0&&(de={},S.set(oe,de));const Te=te(E);if(Te!==O.__cacheKey){de[Te]===void 0&&(de[Te]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),de[Te].usedTimes++;const Le=de[O.__cacheKey];Le!==void 0&&(de[O.__cacheKey].usedTimes--,Le.usedTimes===0&&F(E)),O.__cacheKey=Te,O.__webglTexture=de[Te].texture}return ee}function le(O,E,ee){return Math.floor(Math.floor(O/ee)/E)}function ce(O,E,ee,oe){const de=O.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,ee,oe,E.data);else{de.sort((Pe,Ve)=>Pe.start-Ve.start);let Te=0;for(let Pe=1;Pe<de.length;Pe++){const Ve=de[Te],xe=de[Pe],nt=Ve.start+Ve.count,$e=le(xe.start,E.width,4),at=le(Ve.start,E.width,4);xe.start<=nt+1&&$e===at&&le(xe.start+xe.count-1,E.width,4)===$e?Ve.count=Math.max(Ve.count,xe.start+xe.count-Ve.start):(++Te,de[Te]=xe)}de.length=Te+1;const Le=t.getParameter(r.UNPACK_ROW_LENGTH),K=t.getParameter(r.UNPACK_SKIP_PIXELS),Ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ve=de.length;Pe<Ve;Pe++){const xe=de[Pe],nt=Math.floor(xe.start/4),$e=Math.ceil(xe.count/4),at=nt%E.width,st=Math.floor(nt/E.width),W=$e;t.pixelStorei(r.UNPACK_SKIP_PIXELS,at),t.pixelStorei(r.UNPACK_SKIP_ROWS,st),t.texSubImage2D(r.TEXTURE_2D,0,at,st,W,1,ee,oe,E.data)}O.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Le),t.pixelStorei(r.UNPACK_SKIP_PIXELS,K),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function we(O,E,ee){let oe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=r.TEXTURE_3D);const de=je(O,E),Te=E.source;t.bindTexture(oe,O.__webglTexture,r.TEXTURE0+ee);const Le=n.get(Te);if(Te.version!==Le.__version||de===!0){if(t.activeTexture(r.TEXTURE0+ee),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){const me=vt.getPrimaries(vt.workingColorSpace),Me=E.colorSpace===Qn?null:vt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Qn||me===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let K=x(E.image,!1,s.maxTextureSize);K=lr(E,K);const Ae=o.convert(E.format,E.colorSpace),Pe=o.convert(E.type);let Ve=T(E.internalFormat,Ae,Pe,E.normalized,E.colorSpace,E.isVideoTexture);ze(oe,E);let xe;const nt=E.mipmaps,$e=E.isVideoTexture!==!0,at=Le.__version===void 0||de===!0,st=Te.dataReady,W=D(E,K);if(E.isDepthTexture)Ve=L(E.format===Pa,E.type),at&&($e?t.texStorage2D(r.TEXTURE_2D,1,Ve,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,Ve,K.width,K.height,0,Ae,Pe,null));else if(E.isDataTexture)if(nt.length>0){$e&&at&&t.texStorage2D(r.TEXTURE_2D,W,Ve,nt[0].width,nt[0].height);for(let me=0,Me=nt.length;me<Me;me++)xe=nt[me],$e?st&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,xe.width,xe.height,Ae,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,me,Ve,xe.width,xe.height,0,Ae,Pe,xe.data);E.generateMipmaps=!1}else $e?(at&&t.texStorage2D(r.TEXTURE_2D,W,Ve,K.width,K.height),st&&ce(E,K,Ae,Pe)):t.texImage2D(r.TEXTURE_2D,0,Ve,K.width,K.height,0,Ae,Pe,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,Ve,nt[0].width,nt[0].height,K.depth);for(let me=0,Me=nt.length;me<Me;me++)if(xe=nt[me],E.format!==Oi)if(Ae!==null)if($e){if(st)if(E.layerUpdates.size>0){const Ne=Y_(xe.width,xe.height,E.format,E.type);for(const Oe of E.layerUpdates){const _e=xe.data.subarray(Oe*Ne/xe.data.BYTES_PER_ELEMENT,(Oe+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,Oe,xe.width,xe.height,1,Ae,_e)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,K.depth,Ae,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Ve,xe.width,xe.height,K.depth,0,xe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?st&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,K.depth,Ae,Pe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,Ve,xe.width,xe.height,K.depth,0,Ae,Pe,xe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{$e&&at&&t.texStorage2D(r.TEXTURE_2D,W,Ve,nt[0].width,nt[0].height);for(let me=0,Me=nt.length;me<Me;me++)xe=nt[me],E.format!==Oi?Ae!==null?$e?st&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,me,Ve,xe.width,xe.height,0,xe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?st&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,xe.width,xe.height,Ae,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,me,Ve,xe.width,xe.height,0,Ae,Pe,xe.data)}else if(E.isDataArrayTexture)if($e){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,Ve,K.width,K.height,K.depth),st)if(E.layerUpdates.size>0){const me=Y_(K.width,K.height,E.format,E.type);for(const Me of E.layerUpdates){const Ne=K.data.subarray(Me*me/K.data.BYTES_PER_ELEMENT,(Me+1)*me/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,K.width,K.height,1,Ae,Pe,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ae,Pe,K.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,K.width,K.height,K.depth,0,Ae,Pe,K.data);else if(E.isData3DTexture)$e?(at&&t.texStorage3D(r.TEXTURE_3D,W,Ve,K.width,K.height,K.depth),st&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ae,Pe,K.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,K.width,K.height,K.depth,0,Ae,Pe,K.data);else if(E.isFramebufferTexture){if(at)if($e)t.texStorage2D(r.TEXTURE_2D,W,Ve,K.width,K.height);else{let me=K.width,Me=K.height;for(let Ne=0;Ne<W;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,Ve,me,Me,0,Ae,Pe,null),me>>=1,Me>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),K.parentNode!==me){me.appendChild(K),v.add(E),me.onpaint=Me=>{const Ne=Me.changedElements;for(const Oe of v)Ne.includes(Oe.image)&&(Oe.needsUpdate=!0)},me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,K);else{const Me=r.RGBA,Ne=r.RGBA,Oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Me,Ne,Oe,K)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if($e&&at){const me=wt(nt[0]);t.texStorage2D(r.TEXTURE_2D,W,Ve,me.width,me.height)}for(let me=0,Me=nt.length;me<Me;me++)xe=nt[me],$e?st&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Ae,Pe,xe):t.texImage2D(r.TEXTURE_2D,me,Ve,Ae,Pe,xe);E.generateMipmaps=!1}else if($e){if(at){const me=wt(K);t.texStorage2D(r.TEXTURE_2D,W,Ve,me.width,me.height)}st&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Pe,K)}else t.texImage2D(r.TEXTURE_2D,0,Ve,Ae,Pe,K);y(E)&&R(oe),Le.__version=Te.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Qe(O,E,ee){if(E.image.length!==6)return;const oe=je(O,E),de=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ee);const Te=n.get(de);if(de.version!==Te.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Le=vt.getPrimaries(vt.workingColorSpace),K=E.colorSpace===Qn?null:vt.getPrimaries(E.colorSpace),Ae=E.colorSpace===Qn||Le===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let _e=0;_e<6;_e++)!Pe&&!Ve?xe[_e]=x(E.image[_e],!0,s.maxCubemapSize):xe[_e]=Ve?E.image[_e].image:E.image[_e],xe[_e]=lr(E,xe[_e]);const nt=xe[0],$e=o.convert(E.format,E.colorSpace),at=o.convert(E.type),st=T(E.internalFormat,$e,at,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,me=Te.__version===void 0||oe===!0,Me=de.dataReady;let Ne=D(E,nt);ze(r.TEXTURE_CUBE_MAP,E);let Oe;if(Pe){W&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,st,nt.width,nt.height);for(let _e=0;_e<6;_e++){Oe=xe[_e].mipmaps;for(let et=0;et<Oe.length;et++){const ke=Oe[et];E.format!==Oi?$e!==null?W?Me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,ke.width,ke.height,$e,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,st,ke.width,ke.height,0,ke.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,ke.width,ke.height,$e,at,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,st,ke.width,ke.height,0,$e,at,ke.data)}}}else{if(Oe=E.mipmaps,W&&me){Oe.length>0&&Ne++;const _e=wt(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,st,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ve){W?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,xe[_e].width,xe[_e].height,$e,at,xe[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,xe[_e].width,xe[_e].height,0,$e,at,xe[_e].data);for(let et=0;et<Oe.length;et++){const ke=Oe[et].image[_e].image;W?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,ke.width,ke.height,$e,at,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,st,ke.width,ke.height,0,$e,at,ke.data)}}else{W?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,$e,at,xe[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,$e,at,xe[_e]);for(let et=0;et<Oe.length;et++){const ke=Oe[et];W?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,$e,at,ke.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,st,$e,at,ke.image[_e])}}}y(E)&&R(r.TEXTURE_CUBE_MAP),Te.__version=de.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ie(O,E,ee,oe,de,Te){const Le=o.convert(ee.format,ee.colorSpace),K=o.convert(ee.type),Ae=T(ee.internalFormat,Le,K,ee.normalized,ee.colorSpace),Pe=n.get(E),Ve=n.get(ee);if(Ve.__renderTarget=E,!Pe.__hasExternalTextures){const xe=Math.max(1,E.width>>Te),nt=Math.max(1,E.height>>Te);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,Te,Ae,xe,nt,E.depth,0,Le,K,null):t.texImage2D(de,Te,Ae,xe,nt,0,Le,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),Ht(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,de,Ve.__webglTexture,0,Lt(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,de,Ve.__webglTexture,Te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(O,E,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const oe=E.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,Te=L(E.stencilBuffer,de),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ht(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(E),Te,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(E),Te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Te,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,O)}else{const oe=E.textures;for(let de=0;de<oe.length;de++){const Te=oe[de],Le=o.convert(Te.format,Te.colorSpace),K=o.convert(Te.type),Ae=T(Te.internalFormat,Le,K,Te.normalized,Te.colorSpace);Ht(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(E),Ae,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(O,E,ee){const oe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),oe){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ze(r.TEXTURE_CUBE_MAP,E.depthTexture);const Pe=o.convert(E.depthTexture.format),Ve=o.convert(E.depthTexture.type);let xe;E.depthTexture.format===An?xe=r.DEPTH_COMPONENT24:E.depthTexture.format===Pa&&(xe=r.DEPTH24_STENCIL8);for(let nt=0;nt<6;nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,xe,E.width,E.height,0,Pe,Ve,null)}}else Z(E.depthTexture,0);const Te=de.__webglTexture,Le=Lt(E),K=oe?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,Ae=E.depthTexture.format===Pa?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===An)Ht(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,K,Te,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,K,Te,0);else if(E.depthTexture.format===Pa)Ht(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,K,Te,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,K,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(O){const E=n.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const oe=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=oe}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let oe=0;oe<6;oe++)St(E.__webglFramebuffer[oe],O,oe);else{const oe=O.texture.mipmaps;oe&&oe.length>0?St(E.__webglFramebuffer[0],O,0):St(E.__webglFramebuffer,O,0)}else if(ee){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=r.createRenderbuffer(),Je(E.__webglDepthbuffer[oe],O,!1);else{const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}else{const oe=O.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Je(E.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(O,E,ee){const oe=n.get(O);E!==void 0&&Ie(oe.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&gt(O)}function Jt(O){const E=O.texture,ee=n.get(O),oe=n.get(E);O.addEventListener("dispose",M);const de=O.textures,Te=O.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=E.version,u.memory.textures++),Te){ee.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[K]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)ee.__webglFramebuffer[K][Ae]=r.createFramebuffer()}else ee.__webglFramebuffer[K]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)ee.__webglFramebuffer[K]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Le)for(let K=0,Ae=de.length;K<Ae;K++){const Pe=n.get(de[K]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&Ht(O)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let K=0;K<de.length;K++){const Ae=de[K];ee.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[K]);const Pe=o.convert(Ae.format,Ae.colorSpace),Ve=o.convert(Ae.type),xe=T(Ae.internalFormat,Pe,Ve,Ae.normalized,Ae.colorSpace,O.isXRRenderTarget===!0),nt=Lt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,xe,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,ee.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ze(r.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Ie(ee.__webglFramebuffer[K][Ae],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae);else Ie(ee.__webglFramebuffer[K],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(E)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let K=0,Ae=de.length;K<Ae;K++){const Pe=de[K],Ve=n.get(Pe);let xe=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(xe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ve.__webglTexture),ze(xe,Pe),Ie(ee.__webglFramebuffer,O,Pe,r.COLOR_ATTACHMENT0+K,xe,0),y(Pe)&&R(xe)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(K=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,oe.__webglTexture),ze(K,E),E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Ie(ee.__webglFramebuffer[Ae],O,E,r.COLOR_ATTACHMENT0,K,Ae);else Ie(ee.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,K,0);y(E)&&R(K),t.unbindTexture()}O.depthBuffer&&gt(O)}function er(O){const E=O.textures;for(let ee=0,oe=E.length;ee<oe;ee++){const de=E[ee];if(y(de)){const Te=I(O),Le=n.get(de).__webglTexture;t.bindTexture(Te,Le),R(Te),t.unbindTexture()}}}const jt=[],Kt=[];function ir(O){if(O.samples>0){if(Ht(O)===!1){const E=O.textures,ee=O.width,oe=O.height;let de=r.COLOR_BUFFER_BIT;const Te=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=n.get(O),K=E.length>1;if(K)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ae=O.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const Ve=n.get(E[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,de,r.NEAREST),f===!0&&(jt.length=0,Kt.length=0,jt.push(r.COLOR_ATTACHMENT0+Pe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(jt.push(Te),Kt.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const Ve=n.get(E[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&f){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Lt(O){return Math.min(s.maxSamples,O.samples)}function Ht(O){const E=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(O){const E=u.render.frame;p.get(O)!==E&&(p.set(O,E),O.update())}function lr(O,E){const ee=O.colorSpace,oe=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==mc&&ee!==Qn&&(vt.getTransfer(ee)===Nt?(oe!==Oi||de!==vi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",ee)),E}function wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=fe,this.resetTextureUnits=Q,this.getTextureUnits=B,this.setTextureUnits=ne,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=U,this.rebindTextures=ut,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=er,this.updateMultisampleRenderTarget=ir,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wD(r,e){function t(n,s=Qn){let o;const u=vt.getTransfer(s);if(n===vi)return r.UNSIGNED_BYTE;if(n===sm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===om)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bS)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===MS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===xS)return r.BYTE;if(n===SS)return r.SHORT;if(n===Ko)return r.UNSIGNED_SHORT;if(n===am)return r.INT;if(n===rn)return r.UNSIGNED_INT;if(n===Qi)return r.FLOAT;if(n===nn)return r.HALF_FLOAT;if(n===ES)return r.ALPHA;if(n===wS)return r.RGB;if(n===Oi)return r.RGBA;if(n===An)return r.DEPTH_COMPONENT;if(n===Pa)return r.DEPTH_STENCIL;if(n===TS)return r.RED;if(n===lm)return r.RED_INTEGER;if(n===Ua)return r.RG;if(n===um)return r.RG_INTEGER;if(n===cm)return r.RGBA_INTEGER;if(n===Zu||n===Qu||n===Ju||n===ec)if(u===Nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Zu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Zu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ju)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jf||n===Xf||n===Yf||n===qf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===jf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kf||n===$f||n===Zf||n===Qf||n===Jf||n===fc||n===ep)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Kf||n===$f)return u===Nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Zf)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qf)return o.COMPRESSED_R11_EAC;if(n===Jf)return o.COMPRESSED_SIGNED_R11_EAC;if(n===fc)return o.COMPRESSED_RG11_EAC;if(n===ep)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tp||n===rp||n===ip||n===np||n===ap||n===sp||n===op||n===lp||n===up||n===cp||n===dp||n===hp||n===fp||n===pp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===tp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ip)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===np)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ap)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===op)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===up)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pp)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mp||n===gp||n===vp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===mp)return u===Nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_p||n===yp||n===pc||n===xp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===_p)return o.COMPRESSED_RED_RGTC1_EXT;if(n===yp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const TD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AD=`
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

}`;class RD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new GS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:TD,fragmentShader:AD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hi(new Pc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CD extends Oa{constructor(e,t){super();const n=this;let s=null,o=1,u=null,c="local-floor",f=1,h=null,p=null,v=null,g=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",x=new RD,y={},R=t.getContextAttributes();let I=null,T=null;const L=[],D=[],k=new Ct;let M=null,N=null;const F=new gi;F.viewport=new or;const H=new gi;H.viewport=new or;const j=[F,H],Q=new kR;let B=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ce=L[le];return ce===void 0&&(ce=new Fh,L[le]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(le){let ce=L[le];return ce===void 0&&(ce=new Fh,L[le]=ce),ce.getGripSpace()},this.getHand=function(le){let ce=L[le];return ce===void 0&&(ce=new Fh,L[le]=ce),ce.getHandSpace()};function fe(le){const ce=D.indexOf(le.inputSource);if(ce===-1)return;const we=L[ce];we!==void 0&&(we.update(le.inputSource,le.frame,h||u),we.dispatchEvent({type:le.type,data:le.inputSource}))}function te(){s.removeEventListener("select",fe),s.removeEventListener("selectstart",fe),s.removeEventListener("selectend",fe),s.removeEventListener("squeeze",fe),s.removeEventListener("squeezestart",fe),s.removeEventListener("squeezeend",fe),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",Z);for(let le=0;le<L.length;le++){const ce=D[le];ce!==null&&(D[le]=null,L[le].disconnect(ce))}B=null,ne=null,x.reset();for(const le in y)delete y[le];if(e.setRenderTarget(I),S=null,g=null,v=null,s=null,T=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(k.width,k.height,!1),N!==null){const le=N.camera;le.fov=N.fov,le.zoom=N.zoom,le.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){c=le,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",fe),s.addEventListener("selectstart",fe),s.addEventListener("selectend",fe),s.addEventListener("squeeze",fe),s.addEventListener("squeezestart",fe),s.addEventListener("squeezeend",fe),s.addEventListener("end",te),s.addEventListener("inputsourceschange",Z),R.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(k),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,we=null,Qe=null;R.depth&&(Qe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=R.stencil?Pa:An,we=R.stencil?$o:rn);const Ie={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:o};v=this.getBinding(),g=v.createProjectionLayer(Ie),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new zi(g.textureWidth,g.textureHeight,{format:Oi,type:vi,depthTexture:new Zo(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new zi(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(c),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(le){for(let ce=0;ce<le.removed.length;ce++){const we=le.removed[ce],Qe=D.indexOf(we);Qe>=0&&(D[Qe]=null,L[Qe].disconnect(we))}for(let ce=0;ce<le.added.length;ce++){const we=le.added[ce];let Qe=D.indexOf(we);if(Qe===-1){for(let Je=0;Je<L.length;Je++)if(Je>=D.length){D.push(we),Qe=Je;break}else if(D[Je]===null){D[Je]=we,Qe=Je;break}if(Qe===-1)break}const Ie=L[Qe];Ie&&Ie.connect(we)}}const $=new ae,q=new ae;function U(le,ce,we){$.setFromMatrixPosition(ce.matrixWorld),q.setFromMatrixPosition(we.matrixWorld);const Qe=$.distanceTo(q),Ie=ce.projectionMatrix.elements,Je=we.projectionMatrix.elements,St=Ie[14]/(Ie[10]-1),gt=Ie[14]/(Ie[10]+1),ut=(Ie[9]+1)/Ie[5],Jt=(Ie[9]-1)/Ie[5],er=(Ie[8]-1)/Ie[0],jt=(Je[8]+1)/Je[0],Kt=St*er,ir=St*jt,Lt=Qe/(-er+jt),Ht=Lt*-er;if(ce.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ht),le.translateZ(Lt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ie[10]===-1)le.projectionMatrix.copy(ce.projectionMatrix),le.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const X=St+Lt,lr=gt+Lt,wt=Kt-Ht,O=ir+(Qe-Ht),E=ut*gt/lr*X,ee=Jt*gt/lr*X;le.projectionMatrix.makePerspective(wt,O,E,ee,X,lr),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function pe(le,ce){ce===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ce.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ce=le.near,we=le.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(we=x.depthFar)),Q.near=H.near=F.near=ce,Q.far=H.far=F.far=we,(B!==Q.near||ne!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),B=Q.near,ne=Q.far),Q.layers.mask=le.layers.mask|6,F.layers.mask=Q.layers.mask&-5,H.layers.mask=Q.layers.mask&-3;const Qe=le.parent,Ie=Q.cameras;pe(Q,Qe);for(let Je=0;Je<Ie.length;Je++)pe(Ie[Je],Qe);Ie.length===2?U(Q,F,H):Q.projectionMatrix.copy(F.projectionMatrix),N===null&&le.isPerspectiveCamera&&(N={camera:le,fov:le.fov,zoom:le.zoom}),Se(le,Q,Qe)};function Se(le,ce,we){we===null?le.matrix.copy(ce.matrixWorld):(le.matrix.copy(we.matrixWorld),le.matrix.invert(),le.matrix.multiply(ce.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ce.projectionMatrix),le.projectionMatrixInverse.copy(ce.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Sp*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&S===null))return f},this.setFoveation=function(le){f=le,g!==null&&(g.fixedFoveation=le),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Q)},this.getCameraTexture=function(le){return y[le]};let We=null;function ze(le,ce){if(p=ce.getViewerPose(h||u),b=ce,p!==null){const we=p.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Qe=!1;we.length!==Q.cameras.length&&(Q.cameras.length=0,Qe=!0);for(let Je=0;Je<we.length;Je++){const St=we[Je];let gt=null;if(S!==null)gt=S.getViewport(St);else{const Jt=v.getViewSubImage(g,St);gt=Jt.viewport,Je===0&&(e.setRenderTargetTextures(T,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(T))}let ut=j[Je];ut===void 0&&(ut=new gi,ut.layers.enable(Je),ut.viewport=new or,j[Je]=ut),ut.matrix.fromArray(St.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(St.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(gt.x,gt.y,gt.width,gt.height),Je===0&&(Q.matrix.copy(ut.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Qe===!0&&Q.cameras.push(ut)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){v=n.getBinding();const Je=v.getDepthInformation(we[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,s.renderState)}if(Ie&&Ie.includes("camera-access")&&w){e.state.unbindTexture(),v=n.getBinding();for(let Je=0;Je<we.length;Je++){const St=we[Je].camera;if(St){let gt=y[St];gt||(gt=new GS,y[St]=gt);const ut=v.getCameraImage(St);gt.sourceTexture=ut}}}}for(let we=0;we<L.length;we++){const Qe=D[we],Ie=L[we];Qe!==null&&Ie!==void 0&&Ie.update(Qe,ce,h||u)}We&&We(le,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),b=null}const je=new YS;je.setAnimationLoop(ze),this.setAnimationLoop=function(le){We=le},this.dispose=function(){}}}const PD=new fr,e1=new dt;e1.set(-1,0,0,0,1,0,0,0,1);function LD(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,WS(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function s(x,y,R,I,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(x,y):y.isMeshLambertMaterial?(o(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(x,y),v(x,y)):y.isMeshPhongMaterial?(o(x,y),p(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,T)):y.isMeshMatcapMaterial?(o(x,y),b(x,y)):y.isMeshDepthMaterial?o(x,y):y.isMeshDistanceMaterial?(o(x,y),w(x,y)):y.isMeshNormalMaterial?o(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?f(x,y,R,I):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===$r&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===$r&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const R=e.get(y),I=R.envMap,T=R.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(PD.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(e1),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,R,I){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*R,x.scale.value=I*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,R){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$r&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.retroreflectivity>0&&(x.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const R=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DD(r,e,t,n){let s={},o={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,L){const D=L.program;n.uniformBlockBinding(T,D)}function h(T,L){let D=s[T.id];D===void 0&&(x(T),D=p(T),s[T.id]=D,T.addEventListener("dispose",R));const k=L.program;n.updateUBOMapping(T,k);const M=e.render.frame;o[T.id]!==M&&(g(T),o[T.id]=M)}function p(T){const L=v();T.__bindingPointIndex=L;const D=r.createBuffer(),k=T.__size,M=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,k,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let T=0;T<c;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const L=s[T.id],D=T.uniforms,k=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let M=0,N=D.length;M<N;M++){const F=D[M];if(Array.isArray(F))for(let H=0,j=F.length;H<j;H++)S(F[H],M,H,k);else S(F,M,0,k)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(T,L,D,k){if(w(T,L,D,k)===!0){const M=T.__offset,N=T.value;if(Array.isArray(N)){let F=0;for(let H=0;H<N.length;H++){const j=N[H],Q=y(j);b(j,T.__data,F),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,T.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,M,T.__data)}}function b(T,L,D){typeof T=="number"||typeof T=="boolean"?L[0]=T:T.isMatrix3?(L[0]=T.elements[0],L[1]=T.elements[1],L[2]=T.elements[2],L[3]=0,L[4]=T.elements[3],L[5]=T.elements[4],L[6]=T.elements[5],L[7]=0,L[8]=T.elements[6],L[9]=T.elements[7],L[10]=T.elements[8],L[11]=0):ArrayBuffer.isView(T)?L.set(new T.constructor(T.buffer,T.byteOffset,L.length)):T.toArray(L,D)}function w(T,L,D,k){const M=T.value,N=L+"_"+D;if(k[N]===void 0)return typeof M=="number"||typeof M=="boolean"?k[N]=M:ArrayBuffer.isView(M)?k[N]=M.slice():k[N]=M.clone(),!0;{const F=k[N];if(typeof M=="number"||typeof M=="boolean"){if(F!==M)return k[N]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(F.equals(M)===!1)return F.copy(M),!0}}return!1}function x(T){const L=T.uniforms;let D=0;const k=16;for(let N=0,F=L.length;N<F;N++){const H=Array.isArray(L[N])?L[N]:[L[N]];for(let j=0,Q=H.length;j<Q;j++){const B=H[j],ne=Array.isArray(B.value)?B.value:[B.value];for(let fe=0,te=ne.length;fe<te;fe++){const Z=ne[fe],$=y(Z),q=D%k,U=q%$.boundary,pe=q+U;D+=U,pe!==0&&k-pe<$.storage&&(D+=k-pe),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=D,D+=$.storage}}}const M=D%k;return M>0&&(D+=k-M),T.__size=D,T.__cache={},this}function y(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",T),L}function R(T){const L=T.target;L.removeEventListener("dispose",R);const D=u.indexOf(L.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function I(){for(const T in s)r.deleteBuffer(s[T]);u=[],s={},o={}}return{bind:f,update:h,dispose:I}}const ND=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function ID(){return qi===null&&(qi=new ER(ND,16,16,Ua,nn),qi.name="DFG_LUT",qi.minFilter=Nr,qi.magFilter=Nr,qi.wrapS=En,qi.wrapT=En,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class UD{constructor(e={}){const{canvas:t=J2(),context:n=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=vi}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=u;const w=S,x=new Set([cm,um,lm]),y=new Set([vi,rn,Ko,$o,sm,om]),R=new Uint32Array(4),I=new Int32Array(4),T=new ae;let L=null,D=null;const k=[],M=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let H=!1,j=null,Q=null,B=null,ne=null;this._outputColorSpace=mi;let fe=0,te=0,Z=null,$=-1,q=null;const U=new or,pe=new or;let Se=null;const We=new xt(0);let ze=0,je=t.width,le=t.height,ce=1,we=null,Qe=null;const Ie=new or(0,0,je,le),Je=new or(0,0,je,le);let St=!1;const gt=new BS;let ut=!1,Jt=!1;const er=new fr,jt=new ae,Kt=new or,ir={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Ht(){return Z===null?ce:1}let X=n;function lr(C,G){return t.getContext(C,G)}let wt,O,E,ee,oe,de,Te,Le,K,Ae,Pe,Ve,xe,nt,$e,at,st,W,me,Me,Ne,Oe,_e;try{const C={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nm}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Sr,!1),X===null){const G="webgl2";if(X=lr(G,C),X===null)throw lr(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(C){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Sr,!1),Rt("WebGLRenderer: "+C.message),C}function et(){wt=new IP(X),wt.init(),Ne=new wD(X,wt),O=new EP(X,wt,e,Ne),E=new MD(X,wt),O.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),Q=X.createFramebuffer(),B=X.createFramebuffer(),ne=X.createFramebuffer(),ee=new OP(X),oe=new uD,de=new ED(X,wt,E,oe,O,Ne,ee),Te=new NP(F),Le=new zR(X),Oe=new bP(X,Le),K=new UP(X,Le,ee,Oe),Ae=new zP(X,K,Le,Oe,ee),W=new FP(X,O,de),$e=new wP(oe),Pe=new lD(F,Te,wt,O,Oe,$e),Ve=new LD(F,oe),xe=new dD,nt=new vD(wt),st=new SP(F,Te,E,Ae,b,f),at=new bD(F,Ae,O),_e=new DD(X,ee,O,E),me=new MP(X,wt,ee),Me=new kP(X,wt,ee),ee.programs=Pe.programs,F.capabilities=O,F.extensions=wt,F.properties=oe,F.renderLists=xe,F.shadowMap=at,F.state=E,F.info=ee}w!==vi&&(N=new VP(w,t.width,t.height,c,s,o));const ke=new CD(F,X);this.xr=ke,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(je,le,!1))},this.getSize=function(C){return C.set(je,le)},this.setSize=function(C,G,ue=!0){if(ke.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}je=C,le=G,t.width=Math.floor(C*ce),t.height=Math.floor(G*ce),ue===!0&&(t.style.width=C+"px",t.style.height=G+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(je*ce,le*ce).floor()},this.setDrawingBufferSize=function(C,G,ue){je=C,le=G,ce=ue,t.width=Math.floor(C*ue),t.height=Math.floor(G*ue),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(w===vi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Ie)},this.setViewport=function(C,G,ue,re){C.isVector4?Ie.set(C.x,C.y,C.z,C.w):Ie.set(C,G,ue,re),E.viewport(U.copy(Ie).multiplyScalar(ce).round())},this.getScissor=function(C){return C.copy(Je)},this.setScissor=function(C,G,ue,re){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,G,ue,re),E.scissor(pe.copy(Je).multiplyScalar(ce).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){E.setScissorTest(St=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ue=!0){let re=0;if(C){let J=!1;if(Z!==null){const Re=Z.texture.format;J=x.has(Re)}if(J){const Re=Z.texture.type,Ce=y.has(Re),Fe=st.getClearColor(),He=st.getClearAlpha(),tt=Fe.r,ct=Fe.g,pt=Fe.b;Ce?(R[0]=tt,R[1]=ct,R[2]=pt,R[3]=He,X.clearBufferuiv(X.COLOR,0,R)):(I[0]=tt,I[1]=ct,I[2]=pt,I[3]=He,X.clearBufferiv(X.COLOR,0,I))}else re|=X.COLOR_BUFFER_BIT}G&&(re|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Sr,!1),st.dispose(),xe.dispose(),nt.dispose(),oe.dispose(),Te.dispose(),Ae.dispose(),Oe.dispose(),_e.dispose(),Pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ol),ke.removeEventListener("sessionend",ll),Ir.stop()};function Ft(C){C.preventDefault(),A_("WebGLRenderer: Context Lost."),H=!0}function yt(){A_("WebGLRenderer: Context Restored."),H=!1;const C=ee.autoReset,G=at.enabled,ue=at.autoUpdate,re=at.needsUpdate,J=at.type;et(),ee.autoReset=C,at.enabled=G,at.autoUpdate=ue,at.needsUpdate=re,at.type=J}function Sr(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){const G=C.target;G.removeEventListener("dispose",oi),ia(G)}function ia(C){Fa(C),oe.remove(C)}function Fa(C){const G=oe.get(C).programs;G!==void 0&&(G.forEach(function(ue){Pe.releaseProgram(ue)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ue,re,J,Re){G===null&&(G=ir);const Ce=J.isMesh&&J.matrixWorld.determinantAffine()<0,Fe=Xt(C,G,ue,re,J);E.setMaterial(re,Ce);let He=ue.index,tt=1;if(re.wireframe===!0){if(He=K.getWireframeAttribute(ue),He===void 0)return;tt=2}const ct=ue.drawRange,pt=ue.attributes.position;let qe=ct.start*tt,bt=(ct.start+ct.count)*tt;Re!==null&&(qe=Math.max(qe,Re.start*tt),bt=Math.min(bt,(Re.start+Re.count)*tt)),He!==null?(qe=Math.max(qe,0),bt=Math.min(bt,He.count)):pt!=null&&(qe=Math.max(qe,0),bt=Math.min(bt,pt.count));const $t=bt-qe;if($t<0||$t===1/0)return;Oe.setup(J,re,Fe,ue,He);let It,Dt=me;if(He!==null&&(It=Le.get(He),Dt=Me,Dt.setIndex(It)),J.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*Ht()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(J.isLine){let zt=re.linewidth;zt===void 0&&(zt=1),E.setLineWidth(zt*Ht()),J.isLineSegments?Dt.setMode(X.LINES):J.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else J.isPoints?Dt.setMode(X.POINTS):J.isSprite&&Dt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const zt=J._multiDrawStarts,Ge=J._multiDrawCounts,tr=J._multiDrawCount,sn=He?Le.get(He).bytesPerElement:1,Tr=oe.get(re).currentProgram.getUniforms();for(let ht=0;ht<tr;ht++)Tr.setValue(X,"_gl_DrawID",ht),Dt.render(zt[ht]/sn,Ge[ht])}else if(J.isInstancedMesh)Dt.renderInstances(qe,$t,J.count);else if(ue.isInstancedBufferGeometry){const zt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ge=Math.min(ue.instanceCount,zt);Dt.renderInstances(qe,$t,Ge)}else Dt.render(qe,$t)};function na(C,G,ue,re){j!==null&&C.isNodeMaterial&&j.setObject(re,C),ut===!0&&$e.setState(C,ue,!1),C.transparent===!0&&C.side===Mn&&C.forceSinglePass===!1?(C.side=$r,C.needsUpdate=!0,oa(C,G,re),C.side=Na,C.needsUpdate=!0,oa(C,G,re),C.side=Mn):oa(C,G,re)}this.compile=function(C,G,ue=null){ue===null&&(ue=C),j!==null&&j.renderStart(C,G,ue),D=nt.get(ue),D.init(G),M.push(D),ue.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),C!==ue&&C.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),j!==null&&j.updateLights(D.state.lightsArray),Jt=this.localClippingEnabled,ut=$e.init(this.clippingPlanes,Jt),ut===!0&&$e.setGlobalState(this.clippingPlanes,G),j!==null&&at.render(D.state.shadowsArray,ue,G);const re=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Re=J.material;if(Re)if(Array.isArray(Re))for(let Ce=0;Ce<Re.length;Ce++){const Fe=Re[Ce];na(Fe,ue,G,J),re.add(Fe)}else na(Re,ue,G,J),re.add(Re)}),D=M.pop(),j!==null&&j.renderEnd(),re},this.compileAsync=function(C,G,ue=null){const re=this.compile(C,G,ue);return new Promise(J=>{function Re(){if(re.forEach(function(Ce){const Fe=oe.get(Ce).currentProgram;(Fe===void 0||Fe.isReady())&&re.delete(Ce)}),re.size===0){J(C);return}setTimeout(Re,10)}wt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let aa=null;function Nc(C){aa&&aa(C)}function ol(){Ir.stop()}function ll(){Ir.start()}const Ir=new YS;Ir.setAnimationLoop(Nc),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(C){aa=C,ke.setAnimationLoop(C),C===null?Ir.stop():Ir.start()},ke.addEventListener("sessionstart",ol),ke.addEventListener("sessionend",ll),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;j!==null&&j.renderStart(C,G);const ue=ke.enabled===!0&&ke.isPresenting===!0,re=N!==null&&(Z===null||ue)&&N.begin(F,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(G),G=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,G,Z),D=nt.get(C,M.length),D.init(G),D.state.textureUnits=de.getTextureUnits(),M.push(D),er.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),gt.setFromProjectionMatrix(er,Ji,G.reversedDepth),Jt=this.localClippingEnabled,ut=$e.init(this.clippingPlanes,Jt),L=xe.get(C,k.length),L.init(),k.push(L),ke.enabled===!0&&ke.isPresenting===!0){const Re=F.xr.getDepthSensingMesh();Re!==null&&za(Re,G,-1/0,F.sortObjects)}za(C,G,0,F.sortObjects),L.finish(),j!==null&&j.updateLights(D.state.lightsArray),F.sortObjects===!0&&L.sort(we,Qe),Lt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Lt&&st.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&$e.beginShadows();const J=D.state.shadowsArray;if(at.render(J,C,G),ut===!0&&$e.endShadows(),(re&&N.hasRenderPass())===!1){const Re=L.opaque,Ce=L.transmissive;if(D.setupLights(),G.isArrayCamera){const Fe=G.cameras;if(Ce.length>0)for(let He=0,tt=Fe.length;He<tt;He++){const ct=Fe[He];ul(Re,Ce,C,ct)}Lt&&st.render(C);for(let He=0,tt=Fe.length;He<tt;He++){const ct=Fe[He];Hs(L,C,ct,ct.viewport)}}else Ce.length>0&&ul(Re,Ce,C,G),Lt&&st.render(C),Hs(L,C,G)}Z!==null&&te===0&&(de.updateMultisampleRenderTarget(Z),de.updateRenderTargetMipmap(Z)),re&&N.end(F),C.isScene===!0&&C.onAfterRender(F,C,G),Oe.resetDefaultState(),$=-1,q=null,M.pop(),M.length>0?(D=M[M.length-1],de.setTextureUnits(D.state.textureUnits),ut===!0&&$e.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?L=k[k.length-1]:L=null,j!==null&&j.renderEnd()};function za(C,G,ue,re){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)D.pushLightProbeGrid(C);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(gt)){re&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(er);const Re=Ae.update(C),Ce=C.material;Ce.visible&&L.push(C,Re,Ce,ue,Kt.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(gt))){const Re=Ae.update(C),Ce=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Kt.copy(Re.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(er)),Array.isArray(Ce)){const Fe=Re.groups;for(let He=0,tt=Fe.length;He<tt;He++){const ct=Fe[He],pt=Ce[ct.materialIndex];pt&&pt.visible&&L.push(C,Re,pt,ue,Kt.z,ct,G)}}else Ce.visible&&L.push(C,Re,Ce,ue,Kt.z,null,G)}}const J=C.children;for(let Re=0,Ce=J.length;Re<Ce;Re++)za(J[Re],G,ue,re)}function Hs(C,G,ue,re){const{opaque:J,transmissive:Re,transparent:Ce}=C;D.setupLightsView(ue),ut===!0&&$e.setGlobalState(F.clippingPlanes,ue),re&&E.viewport(U.copy(re)),J.length>0&&sa(J,G,ue),Re.length>0&&sa(Re,G,ue),Ce.length>0&&sa(Ce,G,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ul(C,G,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const pt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new zi(1,1,{generateMipmaps:!0,type:pt?nn:vi,minFilter:Ca,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const J=D.state.transmissionRenderTarget[re.id],Re=re.viewport||U;J.setSize(Re.z*F.transmissionResolutionScale,Re.w*F.transmissionResolutionScale);const Ce=F.getRenderTarget(),Fe=F.getActiveCubeFace(),He=F.getActiveMipmapLevel();F.setRenderTarget(J),F.getClearColor(We),ze=F.getClearAlpha(),ze<1&&F.setClearColor(16777215,.5),F.clear(),Lt&&st.render(ue);const tt=F.toneMapping;F.toneMapping=tn;const ct=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),ut===!0&&$e.setGlobalState(F.clippingPlanes,re),sa(C,ue,re),de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J),wt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let qe=0,bt=G.length;qe<bt;qe++){const $t=G[qe],{object:It,geometry:Dt,material:zt,group:Ge}=$t;if(zt.side===Mn&&It.layers.test(re.layers)){const tr=zt.side;zt.side=$r,zt.needsUpdate=!0,Gs(It,ue,re,Dt,zt,Ge),zt.side=tr,zt.needsUpdate=!0,pt=!0}}pt===!0&&(de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J))}F.setRenderTarget(Ce,Fe,He),F.setClearColor(We,ze),ct!==void 0&&(re.viewport=ct),F.toneMapping=tt}function sa(C,G,ue){const re=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Re=C.length;J<Re;J++){const Ce=C[J],{object:Fe,geometry:He,group:tt}=Ce;let ct=Ce.material;ct.allowOverride===!0&&re!==null&&(ct=re),Fe.layers.test(ue.layers)&&Gs(Fe,G,ue,He,ct,tt)}}function Gs(C,G,ue,re,J,Re){j!==null&&J.isNodeMaterial&&j.setObject(C,J),C.onBeforeRender(F,G,ue,re,J,Re),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(F,G,ue,re,C,Re),J.transparent===!0&&J.side===Mn&&J.forceSinglePass===!1?(J.side=$r,J.needsUpdate=!0,F.renderBufferDirect(ue,G,re,J,C,Re),J.side=Na,J.needsUpdate=!0,F.renderBufferDirect(ue,G,re,J,C,Re),J.side=Mn):F.renderBufferDirect(ue,G,re,J,C,Re),C.onAfterRender(F,G,ue,re,J,Re)}function oa(C,G,ue){G.isScene!==!0&&(G=ir);const re=oe.get(C),J=D.state.lights,Re=D.state.shadowsArray,Ce=J.state.version,Fe=Pe.getParameters(C,J.state,Re,G,ue,D.state.lightProbeGridArray),He=Pe.getProgramCacheKey(Fe);let tt=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,re.fog=G.fog;const ct=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=Te.get(C.envMap||re.environment,ct),re.envMapRotation=re.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",oi),tt=new Map,re.programs=tt);let pt=tt.get(He);if(pt!==void 0){if(re.currentProgram===pt&&re.lightsStateVersion===Ce)return cl(C,Fe),pt}else Fe.uniforms=Pe.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,ue,Fe),C.onBeforeCompile(Fe,F),pt=Pe.acquireProgram(Fe,He),tt.set(He,pt),re.uniforms=Fe.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=$e.uniform),cl(C,Fe),re.needsLights=js(C),re.lightsStateVersion=Ce,re.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.sunLights.value=J.state.sun,qe.sunLightShadows.value=J.state.sunShadow,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.sunShadowMatrix.value=J.state.sunShadowMatrix,qe.sunShadowCascade.value=J.state.sunShadowCascade,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=pt,re.uniformsList=null,pt}function Ws(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=tc.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function cl(C,G){const ue=oe.get(C);ue.outputColorSpace=G.outputColorSpace,ue.batching=G.batching,ue.batchingColor=G.batchingColor,ue.instancing=G.instancing,ue.instancingColor=G.instancingColor,ue.instancingMorph=G.instancingMorph,ue.skinning=G.skinning,ue.morphTargets=G.morphTargets,ue.morphNormals=G.morphNormals,ue.morphColors=G.morphColors,ue.morphTargetsCount=G.morphTargetsCount,ue.numClippingPlanes=G.numClippingPlanes,ue.numIntersection=G.numClipIntersection,ue.vertexAlphas=G.vertexAlphas,ue.vertexTangents=G.vertexTangents,ue.toneMapping=G.toneMapping}function Ic(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;T.setFromMatrixPosition(G.matrixWorld);for(let ue=0,re=C.length;ue<re;ue++){const J=C[ue];if(J.texture!==null&&J.boundingBox.containsPoint(T))return J}return null}function Xt(C,G,ue,re,J){G.isScene!==!0&&(G=ir),de.resetTextureUnits();const Re=G.fog,Ce=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?G.environment:null,Fe=Z===null?F.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:vt.workingColorSpace,He=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,tt=Te.get(re.envMap||Ce,He),ct=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ue.morphAttributes.position,bt=!!ue.morphAttributes.normal,$t=!!ue.morphAttributes.color;let It=tn;re.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=F.toneMapping);const Dt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,zt=Dt!==void 0?Dt.length:0,Ge=oe.get(re),tr=D.state.lights;if(ut===!0&&(Jt===!0||C!==q)){const Pt=C===q&&re.id===$;$e.setState(re,C,Pt)}let sn=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==tr.state.version||Ge.outputColorSpace!==Fe||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isBatchedMesh&&Ge.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ge.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ge.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ge.instancingMorph===!1&&J.morphTexture!==null||Ge.envMap!==tt||re.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==ct||Ge.vertexTangents!==pt||Ge.morphTargets!==qe||Ge.morphNormals!==bt||Ge.morphColors!==$t||Ge.toneMapping!==It||Ge.morphTargetsCount!==zt||!!Ge.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(sn=!0):(sn=!0,Ge.__version=re.version);let Tr=Ge.currentProgram;sn===!0&&(Tr=oa(re,G,J),j&&re.isNodeMaterial&&j.onUpdateProgram(re,Tr,Ge));let ht=!1,xi=!1,on=!1;const Tt=Tr.getUniforms(),Gt=Ge.uniforms;if(E.useProgram(Tr.program)&&(ht=!0,xi=!0,on=!0),re.id!==$&&($=re.id,xi=!0),Ge.needsLights){const Pt=Ic(D.state.lightProbeGridArray,J);Ge.lightProbeGrid!==Pt&&(Ge.lightProbeGrid=Pt,xi=!0)}if(ht||q!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Tt.setValue(X,"projectionMatrix",C.projectionMatrix),Tt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Pt=Tt.map.cameraPosition;Pt!==void 0&&Pt.setValue(X,jt.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&Tt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Tt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),q!==C&&(q=C,xi=!0,on=!0)}if(Ge.needsLights&&(tr.state.sunShadowMap.length>0&&Tt.setValue(X,"sunShadowMap",tr.state.sunShadowMap,de),tr.state.directionalShadowMap.length>0&&Tt.setValue(X,"directionalShadowMap",tr.state.directionalShadowMap,de),tr.state.spotShadowMap.length>0&&Tt.setValue(X,"spotShadowMap",tr.state.spotShadowMap,de),tr.state.pointShadowMap.length>0&&Tt.setValue(X,"pointShadowMap",tr.state.pointShadowMap,de)),J.isSkinnedMesh){Tt.setOptional(X,J,"bindMatrix"),Tt.setOptional(X,J,"bindMatrixInverse");const Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(X,"boneTexture",Pt.boneTexture,de))}J.isBatchedMesh&&(Tt.setOptional(X,J,"batchingTexture"),Tt.setValue(X,"batchingTexture",J._matricesTexture,de),Tt.setOptional(X,J,"batchingIdTexture"),Tt.setValue(X,"batchingIdTexture",J._indirectTexture,de),Tt.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(X,"batchingColorTexture",J._colorsTexture,de));const Si=ue.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&W.update(J,ue,Tr),(xi||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,Tt.setValue(X,"receiveShadow",J.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&G.environment!==null&&(Gt.envMapIntensity.value=G.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=ID()),xi){if(Tt.setValue(X,"toneMappingExposure",F.toneMappingExposure),Ge.needsLights&&Uc(Gt,on),Re&&re.fog===!0&&Ve.refreshFogUniforms(Gt,Re),Ve.refreshMaterialUniforms(Gt,re,ce,le,D.state.transmissionRenderTarget[C.id]),Ge.needsLights&&Ge.lightProbeGrid){const Pt=Ge.lightProbeGrid;Gt.probesSH.value=Pt.texture,Gt.probesMin.value.copy(Pt.boundingBox.min),Gt.probesMax.value.copy(Pt.boundingBox.max),Gt.probesResolution.value.copy(Pt.resolution)}tc.upload(X,Ws(Ge),Gt,de)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(tc.upload(X,Ws(Ge),Gt,de),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Tt.setValue(X,"center",J.center),Tt.setValue(X,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(X,"normalMatrix",J.normalMatrix),Tt.setValue(X,"modelMatrix",J.matrixWorld),re.uniformsGroups!==void 0){const Pt=re.uniformsGroups;for(let ln=0,bi=Pt.length;ln<bi;ln++){const Mi=Pt[ln];_e.update(Mi,Tr),_e.bind(Mi,Tr)}}return Tr}function Uc(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function js(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,G,ue){const re=oe.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=G,oe.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const ue=oe.get(C);ue.__webglFramebuffer=G,ue.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ue=0){Z=C,fe=G,te=ue;let re=null,J=!1,Re=!1;if(C){const Ce=oe.get(C);if(Ce.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),U.copy(C.viewport),pe.copy(C.scissor),Se=C.scissorTest,E.viewport(U),E.scissor(pe),E.setScissorTest(Se),$=-1;return}else if(Ce.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Ce.__hasExternalTextures)de.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Ce.__boundDepthTexture!==tt){if(tt!==null&&oe.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);const He=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[G])?re=He[G][ue]:re=He[G],J=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?re=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?re=He[ue]:re=He,U.copy(C.viewport),pe.copy(C.scissor),Se=C.scissorTest}else U.copy(Ie).multiplyScalar(ce).floor(),pe.copy(Je).multiplyScalar(ce).floor(),Se=St;if(ue!==0&&(re=Q),E.bindFramebuffer(X.FRAMEBUFFER,re)&&E.drawBuffers(C,re),E.viewport(U),E.scissor(pe),E.setScissorTest(Se),J){const Ce=oe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,ue)}else if(Re){const Ce=G;for(let Fe=0;Fe<C.textures.length;Fe++){const He=oe.get(C.textures[Fe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Fe,He.__webglTexture,ue,Ce)}}else if(C!==null&&ue!==0){const Ce=oe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,ue)}$=-1};function Xs(C){const G=oe.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=O.textureFormatReadable(C.format),G.__typeReadable=O.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,ue,re,J,Re,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He){E.bindFramebuffer(X.FRAMEBUFFER,He);try{const tt=C.textures[Fe],ct=tt.format,pt=tt.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe);const qe=Xs(tt);if(qe.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-re&&ue>=0&&ue<=C.height-J&&X.readPixels(G,ue,re,J,Ne.convert(ct),Ne.convert(pt),Re)}finally{const tt=Z!==null?oe.get(Z).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,G,ue,re,J,Re,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He)if(G>=0&&G<=C.width-re&&ue>=0&&ue<=C.height-J){E.bindFramebuffer(X.FRAMEBUFFER,He);const tt=C.textures[Fe],ct=tt.format,pt=tt.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe);const qe=Xs(tt);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,bt),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(G,ue,re,J,Ne.convert(ct),Ne.convert(pt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const $t=Z!==null?oe.get(Z).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,$t);const It=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await eR(X,It,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,bt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(bt),X.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ue=0){const re=Math.pow(2,-ue),J=Math.floor(C.image.width*re),Re=Math.floor(C.image.height*re),Ce=G!==null?G.x:0,Fe=G!==null?G.y:0;de.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,Ce,Fe,J,Re),E.unbindTexture()},this.copyTextureToTexture=function(C,G,ue=null,re=null,J=0,Re=0){let Ce,Fe,He,tt,ct,pt,qe,bt,$t;const It=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(ue!==null)Ce=ue.max.x-ue.min.x,Fe=ue.max.y-ue.min.y,He=ue.isBox3?ue.max.z-ue.min.z:1,tt=ue.min.x,ct=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const Gt=Math.pow(2,-J);Ce=Math.floor(It.width*Gt),Fe=Math.floor(It.height*Gt),C.isDataArrayTexture?He=It.depth:C.isData3DTexture?He=Math.floor(It.depth*Gt):He=1,tt=0,ct=0,pt=0}re!==null?(qe=re.x,bt=re.y,$t=re.z):(qe=0,bt=0,$t=0);const Dt=Ne.convert(G.format),zt=Ne.convert(G.type);let Ge;G.isData3DTexture?(de.setTexture3D(G,0),Ge=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(de.setTexture2DArray(G,0),Ge=X.TEXTURE_2D_ARRAY):(de.setTexture2D(G,0),Ge=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const tr=E.getParameter(X.UNPACK_ROW_LENGTH),sn=E.getParameter(X.UNPACK_IMAGE_HEIGHT),Tr=E.getParameter(X.UNPACK_SKIP_PIXELS),ht=E.getParameter(X.UNPACK_SKIP_ROWS),xi=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,It.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(X.UNPACK_SKIP_ROWS,ct),E.pixelStorei(X.UNPACK_SKIP_IMAGES,pt);const on=C.isDataArrayTexture||C.isData3DTexture,Tt=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const Gt=oe.get(C),Si=oe.get(G),Pt=oe.get(Gt.__renderTarget),ln=oe.get(Si.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,Pt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let bi=0;bi<He;bi++)on&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,J,pt+bi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,oe.get(G).__webglTexture,Re,$t+bi)),X.blitFramebuffer(tt,ct,Ce,Fe,qe,bt,Ce,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||oe.has(C)){const Gt=oe.get(C),Si=oe.get(G);E.bindFramebuffer(X.READ_FRAMEBUFFER,B),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ne);for(let Pt=0;Pt<He;Pt++)on?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Gt.__webglTexture,J,pt+Pt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gt.__webglTexture,J),Tt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Si.__webglTexture,Re,$t+Pt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Si.__webglTexture,Re),J!==0?X.blitFramebuffer(tt,ct,Ce,Fe,qe,bt,Ce,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):Tt?X.copyTexSubImage3D(Ge,Re,qe,bt,$t+Pt,tt,ct,Ce,Fe):X.copyTexSubImage2D(Ge,Re,qe,bt,tt,ct,Ce,Fe);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Ge,Re,qe,bt,$t,Ce,Fe,He,Dt,zt,It.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,Re,qe,bt,$t,Ce,Fe,He,Dt,It.data):X.texSubImage3D(Ge,Re,qe,bt,$t,Ce,Fe,He,Dt,zt,It):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Re,qe,bt,Ce,Fe,Dt,zt,It.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Re,qe,bt,It.width,It.height,Dt,It.data):X.texSubImage2D(X.TEXTURE_2D,Re,qe,bt,Ce,Fe,Dt,zt,It);E.pixelStorei(X.UNPACK_ROW_LENGTH,tr),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Tr),E.pixelStorei(X.UNPACK_SKIP_ROWS,ht),E.pixelStorei(X.UNPACK_SKIP_IMAGES,xi),Re===0&&G.generateMipmaps&&X.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){fe=0,te=0,Z=null,E.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const kD=()=>{const r=ge.useRef(null);return ge.useEffect(()=>{const e=r.current;if(!e)return;let t=null,n=null,s=null,o=null,u=null,c=null,f=null,h=null;try{const p=new gR,v=new gi(60,(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),.1,1e3);v.position.z=25,t=new UD({alpha:!0,antialias:!0,powerPreference:"high-performance"}),t.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(t.domElement);const g=200;s=new si;const S=new Float32Array(g*3),b=new Float32Array(g*3),w=new xt(11927720),x=new xt(7741872),y=new xt(3718648);for(let Q=0;Q<g;Q++){S[Q*3]=(Math.random()-.5)*50,S[Q*3+1]=(Math.random()-.5)*35,S[Q*3+2]=(Math.random()-.5)*30;const B=Q%3===0?w:Q%3===1?x:y;b[Q*3]=B.r,b[Q*3+1]=B.g,b[Q*3+2]=B.b}s.setAttribute("position",new Bi(S,3)),s.setAttribute("color",new Bi(b,3)),o=new VS({size:.28,vertexColors:!0,transparent:!0,opacity:.65,blending:Uf});const R=new TR(s,o);p.add(R),u=new gm(8,.08,16,100),c=new yc({color:7741872,wireframe:!0,transparent:!0,opacity:.35});const I=new Hi(u,c);I.rotation.x=Math.PI/3,p.add(I),f=new mm(5,1),h=new yc({color:11927720,wireframe:!0,transparent:!0,opacity:.2});const T=new Hi(f,h);p.add(T);let L=0,D=0,k=0,M=0;const N=Q=>{k=(Q.clientX/window.innerWidth-.5)*2,M=(Q.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",N,{passive:!0});const F=()=>{!e||!t||(v.aspect=(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),v.updateProjectionMatrix(),t.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight))};window.addEventListener("resize",F);const H=new OR,j=()=>{n=requestAnimationFrame(j);const Q=H.getElapsedTime();L+=(k-L)*.05,D+=(M-D)*.05,R.rotation.y=Q*.04+L*.2,R.rotation.x=Q*.02-D*.2,I.rotation.z=Q*.15,I.rotation.y=L*.4,I.rotation.x=Math.PI/3+D*.3,T.rotation.y=-Q*.1+L*.3,T.rotation.x=Q*.08-D*.3,v.position.x=L*2,v.position.y=-D*2,v.lookAt(p.position),t&&t.render(p,v)};return j(),()=>{if(n&&cancelAnimationFrame(n),window.removeEventListener("mousemove",N),window.removeEventListener("resize",F),e&&t&&t.domElement)try{e.removeChild(t.domElement)}catch{}s==null||s.dispose(),o==null||o.dispose(),u==null||u.dispose(),c==null||c.dispose(),f==null||f.dispose(),h==null||h.dispose(),t==null||t.dispose()}}catch(p){console.warn("Three.js WebGL not available or initialization skipped:",p)}},[]),P.jsx("div",{ref:r,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80",style:{willChange:"transform"}})};/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const OD=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t1=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var FD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zD=ge.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:u,...c},f)=>ge.createElement("svg",{ref:f,...FD,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:t1("lucide",s),...c},[...u.map(([h,p])=>ge.createElement(h,p)),...Array.isArray(o)?o:[o]]));/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ot=(r,e)=>{const t=ge.forwardRef(({className:n,...s},o)=>ge.createElement(zD,{ref:o,iconNode:e,className:t1(`lucide-${OD(r)}`,n),...s}));return t.displayName=`${r}`,t};/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const BD=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],VD=Ot("Activity",BD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const HD=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],GD=Ot("ArrowUpRight",HD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const WD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],jD=Ot("ArrowUp",WD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const XD=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],YD=Ot("Box",XD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qD=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],KD=Ot("BrainCircuit",qD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $D=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],ZD=Ot("Briefcase",$D);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const QD=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],JD=Ot("Calendar",QD);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eN=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xc=Ot("Check",eN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],rN=Ot("CircleCheckBig",tN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r1=Ot("CircleCheck",iN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nN=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],gy=Ot("Copy",nN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const aN=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],sN=Ot("Cpu",aN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oN=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lN=Ot("ExternalLink",oN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uN=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],i1=Ot("Github",uN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cN=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],dN=Ot("GraduationCap",cN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hN=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],n1=Ot("Linkedin",hN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],a1=Ot("Mail",fN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vm=Ot("MapPin",pN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],s1=Ot("Phone",mN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],vN=Ot("Send",gN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _N=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],yN=Ot("Server",_N);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],SN=Ot("ShieldCheck",xN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bN=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],o1=Ot("Smartphone",bN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const MN=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],l1=Ot("Sparkles",MN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const EN=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],wN=Ot("Terminal",EN);/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const TN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],AN=Ot("X",TN),RN={waving:{src:"./anil_waving.jpg",title:"El Sallayan 3D Anıl",label:"👋 El Sallayan 3D",bubble:"Selam! Hoş geldin, Ben Anıl",badgeIcon:"👋"},studio:{src:"./anil_avatar.jpg",title:"Siber Stüdyo Portresi",label:"⚡ Siber Stüdyo 3D",bubble:"Anıl Mete • Full-Stack & 3D",badgeIcon:"⚡"}},CN=({currentModel:r,onSelectModel:e})=>{const t=ge.useRef(null),n=ge.useRef(null),s=ge.useRef(null),[o,u]=ge.useState(!1),c=ge.useRef({x:0,y:0,targetX:0,targetY:0}),f=ge.useRef(null),h=ge.useCallback(()=>{const{x:b,y:w,targetX:x,targetY:y}=c.current,R=b+(x-b)*.12,I=w+(y-w)*.12;if(c.current.x=R,c.current.y=I,n.current&&(n.current.style.transform=`perspective(1000px) rotateX(${R}deg) rotateY(${I}deg) scale3d(1.02, 1.02, 1.02)`),s.current){const T=50+I*3,L=50-R*3;s.current.style.background=`radial-gradient(circle at ${T}% ${L}%, rgba(255,255,255,0.3) 0%, rgba(182,0,168,0.2) 30%, transparent 70%)`}f.current=requestAnimationFrame(h)},[]);ge.useEffect(()=>(f.current=requestAnimationFrame(h),()=>{f.current&&cancelAnimationFrame(f.current)}),[h]);const p=b=>{if(!t.current)return;const w=t.current.getBoundingClientRect(),x=w.left+w.width/2,y=w.top+w.height/2,R=b.clientX-x,I=b.clientY-y,T=R/(w.width/2)*14,L=-(I/(w.height/2))*14;c.current.targetX=L,c.current.targetY=T},v=()=>u(!0),g=()=>{u(!1),c.current.targetX=0,c.current.targetY=0},S=RN[r];return P.jsxs("div",{ref:t,onMouseMove:p,onMouseEnter:v,onMouseLeave:g,className:"relative flex flex-col items-center select-none z-30",style:{perspective:1200},children:[P.jsxs(hr.div,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.3},className:"mb-2 z-40 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16181D]/90 border border-[#B600A8]/60 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-md",children:[P.jsx("span",{className:"text-base animate-bounce",children:S.badgeIcon}),P.jsx("span",{className:"bg-gradient-to-r from-white via-[#D7E2EA] to-[#B600A8] bg-clip-text text-transparent",children:S.bubble})]},`bubble-${r}`),P.jsxs("div",{ref:n,onClick:()=>e(r==="waving"?"studio":"waving"),className:"relative rounded-3xl overflow-visible transition-shadow duration-300 cursor-pointer group",title:"Diğer 3D modele geçmek için tıkla",style:{transformStyle:"preserve-3d",willChange:"transform"},children:[P.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/30 to-[#38bdf8]/20 rounded-full blur-2xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity"}),P.jsx("div",{ref:s,className:"absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-overlay transition-opacity duration-300",style:{opacity:o?1:.45}}),P.jsxs("div",{className:"absolute top-8 -left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-purple-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(45px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(o1,{className:"w-3.5 h-3.5 text-purple-400"}),P.jsx("span",{children:"Flutter & Mobil"})]}),P.jsxs("div",{className:"absolute top-12 -right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-cyan-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(50px) scale(1.05)":"translateZ(20px)"},children:[P.jsx(sN,{className:"w-3.5 h-3.5 text-cyan-400"}),P.jsx("span",{children:"PyTorch AI"})]}),P.jsxs("div",{className:"absolute bottom-8 -right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-[#B600A8]/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none",style:{transform:o?"translateZ(40px) scale(1.05)":"translateZ(15px)"},children:[P.jsx(wN,{className:"w-3.5 h-3.5 text-pink-400"}),P.jsx("span",{children:"ASP.NET Core"})]}),P.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0C] shadow-2xl",children:[P.jsx(Jp,{mode:"wait",children:P.jsx(hr.img,{src:S.src,alt:S.title,initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:{duration:.3},className:"w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] xl:w-[400px] max-h-[50vh] sm:max-h-[54vh] object-cover pointer-events-none drop-shadow-[0_25px_60px_rgba(182,0,168,0.35)]"},r)}),P.jsx("div",{className:"absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none"})]})]}),P.jsxs("div",{className:"mt-4 p-1.5 rounded-full bg-[#121316]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-1 z-50 pointer-events-auto",children:[P.jsxs("button",{onClick:b=>{b.stopPropagation(),e("waving")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${r==="waving"?"bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"👋 El Sallayan"}),r==="waving"&&P.jsx(xc,{className:"w-3.5 h-3.5"})]}),P.jsxs("button",{onClick:b=>{b.stopPropagation(),e("studio")},type:"button",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${r==="studio"?"bg-gradient-to-r from-[#7621B0] to-cyan-600 text-white shadow-md scale-105":"text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"}`,children:[P.jsx("span",{children:"⚡ Stüdyo Modu"}),r==="studio"&&P.jsx(xc,{className:"w-3.5 h-3.5"})]})]})]})},PN=({onOpenContact:r})=>{const[e,t]=ge.useState("waving"),n=s=>{const o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth"})};return P.jsxs("section",{className:"relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none",children:[P.jsx(kD,{}),P.jsxs(hr.nav,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.7,delay:0,ease:[.25,.1,.25,1]},className:"w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30 relative",children:[P.jsx("button",{onClick:()=>n("about"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hakkımda"}),P.jsx("button",{onClick:()=>n("services"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Hizmetler"}),P.jsx("button",{onClick:()=>n("projects"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"Projeler"}),P.jsx("button",{onClick:()=>n("experience"),className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer hidden sm:block",children:"Deneyim"}),P.jsx("button",{onClick:r,className:"text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer",children:"İletişim"})]}),P.jsx("div",{className:"w-full overflow-hidden text-center z-0 pointer-events-none px-4 mt-2 sm:mt-4 md:mt-6 mb-auto pt-1 sm:pt-3",children:P.jsx(hr.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.15,ease:[.25,.1,.25,1]},className:"hero-heading font-black uppercase tracking-tight leading-tight w-full max-w-7xl mx-auto select-none drop-shadow-xl text-[7.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[9.5vw]",children:"SELAM, BEN ANIL"})}),P.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 z-30 bottom-2 sm:bottom-4 md:bottom-5 pointer-events-auto",children:P.jsx(hr.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},children:P.jsx(CN,{currentModel:e,onSelectModel:s=>t(s)})})}),P.jsxs("div",{className:"w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 relative pointer-events-none",children:[P.jsxs(hr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},className:"w-auto max-w-[210px] sm:max-w-[240px] md:max-w-[260px] p-3 sm:p-3.5 rounded-2xl bg-[#121316]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2 pointer-events-auto",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"relative flex h-2.5 w-2.5 flex-shrink-0",children:[P.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),P.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),P.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap",children:"Yeni Projelere Açık"})]}),P.jsxs("p",{className:"text-[11px] sm:text-xs text-[#D7E2EA] font-light leading-snug",children:["Yüksek performanslı ",P.jsx("strong",{className:"font-semibold text-white",children:"mobil"}),", ",P.jsx("strong",{className:"font-semibold text-white",children:"AI"})," ve ",P.jsx("strong",{className:"font-semibold text-white",children:"full-stack"})," sistemler."]}),P.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#D7E2EA]/60 pt-1.5 border-t border-white/5 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1 text-[#D7E2EA]/70",children:[P.jsx(vm,{className:"w-3 h-3 text-[#B600A8]"})," Mersin, TR"]}),P.jsx("span",{className:"text-cyan-400 font-semibold",children:"Flutter • AI"})]})]}),P.jsx(hr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5,ease:[.25,.1,.25,1]},className:"self-end pointer-events-auto",children:P.jsx(lS,{label:"İletişime Geç",onClick:r})})]})]})},sf=[{src:"https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",tag:"3D Web & Uzay",title:"Space Voyage"},{src:"https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",tag:"Full-Stack Kodlama",title:"CodeNest Cloud"},{src:"https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",tag:"Fintech & Dashboard",title:"Vex Ventures"},{src:"https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",tag:"Yapay Zeka & PyTorch",title:"Stellar AI Engine"},{src:"https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",tag:"Mobil Arayüz",title:"ASME Platform"},{src:"https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",tag:"Veri Analizi",title:"Data Transformer"},{src:"https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",tag:"3D Etkileşim",title:"Vitara Studio"},{src:"https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",tag:"Modern Web",title:"Terra Experience"}],of=[{src:"https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",tag:"Mobil Sağlık",title:"SemptomAI Health"},{src:"https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",tag:"Bulut Mimarisi",title:"BirEmek Cloud"},{src:"https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",tag:"RESTful API",title:"NotTrack Architecture"},{src:"https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",tag:"Klinik Teşhis",title:"Klinik Karar Destek"},{src:"https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",tag:"3D Simülasyon",title:"Orbit 3D System"},{src:"https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",tag:"Yüksek Performans",title:"Luminex Core"},{src:"https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",tag:"Mobil Deneyim",title:"Celestia Mobile"}],LN=()=>P.jsxs("section",{className:"relative w-full overflow-hidden bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12",children:[P.jsx("div",{className:"absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsx("div",{className:"absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"}),P.jsxs("div",{className:"flex flex-col gap-4",children:[P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused]",children:[...sf,...sf,...sf].map((r,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:r.src,alt:r.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#B600A8]",children:r.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:r.title})]})]},`row1-${e}`))})}),P.jsx("div",{className:"w-full overflow-hidden",children:P.jsx("div",{className:"flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused]",children:[...of,...of,...of].map((r,e)=>P.jsxs("div",{className:"relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg",children:[P.jsx("img",{src:r.src,alt:r.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"}),P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4",children:[P.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-cyan-400",children:r.tag}),P.jsx("span",{className:"text-sm font-bold text-white uppercase tracking-tight",children:r.title})]})]},`row2-${e}`))})})]})]}),ni=({children:r,delay:e=0,duration:t=.7,x:n=0,y:s=30,className:o="",as:u="div"})=>{const c=hr[u]||hr.div;return P.jsx(c,{initial:{opacity:0,x:n,y:s},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"50px",amount:0},transition:{duration:t,delay:e,ease:[.25,.1,.25,1]},className:o,children:r})},DN=({word:r,progress:e,range:t})=>{const n=im(e,t,[.2,1]);return P.jsxs("span",{className:"relative inline-block mx-1",children:[P.jsx("span",{className:"invisible",children:r}),P.jsx(hr.span,{style:{opacity:n},className:"absolute left-0 top-0 select-none text-[#D7E2EA]",children:r})]})},NN=({text:r,className:e=""})=>{const t=ge.useRef(null),{scrollYProgress:n}=sS({target:t,offset:["start 0.85","end 0.35"]}),s=r.split(" ");return P.jsx("p",{ref:t,className:`flex flex-wrap justify-center leading-relaxed ${e}`,children:s.map((o,u)=>{const c=u/s.length,f=Math.min(1,c+1/s.length);return P.jsx(DN,{word:o,progress:n,range:[c,f]},u)})})},IN=({onOpenContact:r})=>P.jsxs("section",{id:"about",className:"relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden",children:[P.jsx("div",{className:"absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0",children:P.jsx(ni,{delay:.1,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",alt:"3D Ay İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d"})})}),P.jsx("div",{className:"absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0",children:P.jsx(ni,{delay:.25,x:-80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",alt:"3D Dekoratif Obje",className:"w-[100px] sm:w-[140px] md:w-[180px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"1.5s"}})})}),P.jsx("div",{className:"absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0",children:P.jsx(ni,{delay:.15,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",alt:"3D Lego İkonu",className:"w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"2.5s"}})})}),P.jsx("div",{className:"absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0",children:P.jsx(ni,{delay:.3,x:80,y:0,duration:.9,children:P.jsx("img",{src:"https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",alt:"3D Grup İkonu",className:"w-[130px] sm:w-[170px] md:w-[220px] select-none drop-shadow-2xl opacity-90 animate-float-3d",style:{animationDelay:"3.5s"}})})}),P.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-4xl text-center",children:[P.jsx(ni,{delay:0,y:40,duration:.7,children:P.jsx("h2",{className:"hero-heading font-black uppercase leading-none tracking-tight select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"HAKKIMDA"})}),P.jsx("div",{className:"h-10 sm:h-14 md:h-16"}),P.jsx("div",{className:"max-w-[700px] px-3 sm:px-6",children:P.jsx(NN,{text:"Mersin Üniversitesi Bilgisayar Mühendisliği öğrencisi ve üretime hazır sistemler kuran full-stack & mobil geliştiriciyim. BirEmek uygulamasını tek mühendis olarak sıfırdan mimarilendirip App Store ve Google Play yayın süreçlerini başarıyla tamamlamaktan, TÜBİTAK onaylı klinik karar destek yapay zeka sistemlerine ve yüksek performanslı ASP.NET Core API'lerine kadar uçtan uca mimariler kuruyorum. Kotlin, Flutter, PyTorch ve temiz kod prensipleriyle kullanıcı odaklı sistemler tasarlıyorum. Birlikte sıra dışı projeler inşa edelim!",className:"font-medium text-center leading-relaxed text-[#D7E2EA] text-base sm:text-lg md:text-xl"})}),P.jsx("div",{className:"h-14 sm:h-18 md:h-20"}),P.jsx(ni,{delay:.2,y:20,children:P.jsx(lS,{label:"İletişime Geç",onClick:r})})]})]}),UN=[{number:"01",title:"Mobil Uygulama Mühendisliği",tagline:"Flutter & Kotlin • App Store & Play Store",description:"Fikir aşamasından market yayın onayına kadar uçtan uca modern mobil mimariler. Özel reaktif arayüz bileşenleri, kararlı veri akışı ve sıfır çökme (crash-free) garantisiyle yüksek performanslı uygulamalar.",icon:o1,accentColor:"#B600A8",gradientText:"from-[#18011F] via-[#B600A8] to-[#7621B0]",deliverables:["App Store Connect & Google Play Console Uçtan Uca Yayın Yönetimi","Flutter & Dart ile Çift Platform (iOS & Android) Tek Kod Tabanı","Kotlin & Jetpack Compose ile Özel Android Arayüz (UI) Mimarisi"],techStack:["Flutter","Kotlin","Jetpack Compose","MVVM","Firebase","REST API"]},{number:"02",title:"Full-Stack & Backend Mimarisi",tagline:"ASP.NET Core • Katmanlı Mimari • Güvenli API",description:"Yüksek ölçekli ve kurumsal standartlarda backend servisleri. Katmanlı mimari desenleri, JWT tabanlı sıkı kimlik doğrulama, Swagger UI dokümantasyonu ve optimize edilmiş ilişkisel veritabanları.",icon:yN,accentColor:"#7621B0",gradientText:"from-[#7621B0] via-[#5B108B] to-[#3B0759]",deliverables:["ASP.NET Core & Entity Framework Core ile Katmanlı RESTful Servisler","JWT Kimlik Doğrulama & Rol Tabanlı Güvenlik Protokolleri","SQL Server & Firebase Gerçek Zamanlı Veritabanı Senkronizasyonu"],techStack:["ASP.NET Core","EF Core","C#","SQL Server","JWT Auth","Swagger UI"]},{number:"03",title:"Yapay Zeka & Sağlık Teknolojileri",tagline:"PyTorch • Derin Öğrenme • Çıkarım Motorları",description:"Python ve PyTorch kullanarak eğitilmiş derin öğrenme modellerinin backend API altyapılarına kesintisiz entegrasyonu. Gerçek zamanlı semptom analiz algoritmaları ve klinik karar destek sistemleri.",icon:KD,accentColor:"#0284C7",gradientText:"from-[#0369A1] via-[#0284C7] to-[#38BDF8]",deliverables:["PyTorch Derin Öğrenme Modelleri ve Yüksek Hızlı Çıkarım Motorları (Inference)","Gerçek Zamanlı Semptom ve Sağlık Verisi Analiz Algoritmaları","Python Yapay Zeka Servislerinin ASP.NET Core Backend ile Kesintisiz İletişimi"],techStack:["Python","PyTorch","Derin Öğrenme","Sağlık Teknolojileri","Veri Analizi"]},{number:"04",title:"3D & Etkileşimli Arayüz Tasarımı",tagline:"Three.js • WebGL • Mikro Etkileşimler",description:"Ziyaretçiyi ilk saniyede etkileyen dinamik 3D web sahneleri, parçacık alanları ve fizik tabanlı mikro etkileşimler. Figma tasarımlarını piksel hassasiyetinde, 60–120 FPS akıcılığında koda dökme.",icon:YD,accentColor:"#9333EA",gradientText:"from-[#9333EA] via-[#A855F7] to-[#C084FC]",deliverables:["Three.js ve WebGL ile Donanım Hızlandırmalı 3D Web Deneyimleri","Framer Motion ile Fizik Tabanlı Akıcı Mikro Animasyonlar","Figma Tasarımlarından Dönüşüm Odaklı ve Mobil Uyumlu UI Geliştirme"],techStack:["Three.js","WebGL","Framer Motion","Tailwind CSS","TypeScript"]},{number:"05",title:"Sistem Optimizasyonu & Temiz Mimari",tagline:"SOLID • Sıfır Çökme • Profiling",description:"Karmaşık kod tabanlarını basitleştirme, performans darboğazlarını giderme ve çökme analizi. Sürdürülebilir, test edilebilir ve SOLID prensiplerine tam uyumlu mühendislik çözümleri.",icon:SN,accentColor:"#059669",gradientText:"from-[#065F46] via-[#059669] to-[#10B981]",deliverables:["SOLID ve Clean Architecture Prensiplerine Dayalı Sürdürülebilir Kod","Kritik Çökme (Crash) Hatalarının Tespiti ve Performans Profiling","Uçtan Uca Test Süreçleri ve Sıfır Hata Odaklı Üretim Dağıtımı"],techStack:["Clean Architecture","SOLID","Postman","Git / GitHub","Profiling"]}],kN=()=>{const[r,e]=ge.useState(null);return P.jsx("section",{id:"services",className:"relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 z-0 shadow-2xl",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-16 sm:space-y-24",children:[P.jsx(ni,{delay:0,y:40,children:P.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]",children:[P.jsx(l1,{className:"w-3.5 h-3.5 text-[#B600A8]"}),P.jsx("span",{children:"Mühendislik & Tasarım Çözümleri"})]}),P.jsx("h2",{className:"text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight select-none",style:{fontSize:"clamp(2.8rem, 10vw, 150px)"},children:"HİZMETLER"}),P.jsx("p",{className:"max-w-2xl text-base sm:text-lg text-[#0C0C0C]/70 font-light leading-relaxed",children:"Mobil uygulamalardan kurumsal API mimarilerine, yapay zeka modellerinden etkileşimli 3D web deneyimlerine kadar uçtan uca sunduğum uzmanlık alanları."})]})}),P.jsx("div",{className:"flex flex-col gap-6 sm:gap-8",children:UN.map((t,n)=>{const s=t.icon,o=r===n;return P.jsx(ni,{delay:n*.08,y:30,children:P.jsxs("div",{onMouseEnter:()=>e(n),onMouseLeave:()=>e(null),className:`group relative p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] border transition-all duration-500 cursor-pointer overflow-hidden ${o?"bg-gradient-to-br from-white via-[#FAF5FF] to-[#F3F4F6] border-purple-300 shadow-2xl -translate-y-1.5":"bg-[#F9FAFB] border-black/10 hover:border-black/20 shadow-sm"}`,children:[P.jsx("div",{className:`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${o?"opacity-30":"opacity-0"}`,style:{backgroundColor:t.accentColor}}),P.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8",children:[P.jsxs("div",{className:"flex items-center lg:flex-col lg:items-start justify-between lg:justify-start gap-4 lg:w-1/4",children:[P.jsx("div",{className:"flex items-baseline gap-3",children:P.jsx("span",{className:`font-black tracking-tight leading-none transition-all duration-300 select-none ${o?`bg-gradient-to-r ${t.gradientText} bg-clip-text text-transparent scale-105`:"text-[#0C0C0C]"}`,style:{fontSize:"clamp(3rem, 7vw, 110px)"},children:t.number})}),P.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110",style:{backgroundColor:o?t.accentColor:"#0C0C0C",color:"#FFFFFF"},children:P.jsx(s,{className:"w-7 h-7"})})]}),P.jsxs("div",{className:"flex-1 space-y-5",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-[#B600A8]",children:t.tagline}),P.jsx("h3",{className:"text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0C0C0C] tracking-tight mt-1",children:t.title})]}),P.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#0C0C0C]/75 font-light leading-relaxed max-w-3xl",children:t.description}),P.jsxs("div",{className:"space-y-2.5 pt-2 border-t border-black/10",children:[P.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-[#0C0C0C]/60",children:"Öne Çıkan Teslimatlar & Standartlar:"}),P.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.deliverables.map((u,c)=>P.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0C0C0C]/85 leading-snug",children:[P.jsx(r1,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{color:t.accentColor}}),P.jsx("span",{children:u})]},c))})]}),P.jsx("div",{className:"flex flex-wrap items-center gap-2 pt-3",children:t.techStack.map(u=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-black/[0.05] border border-black/10 text-xs font-semibold text-[#0C0C0C] transition-colors group-hover:bg-white group-hover:border-black/20",children:u},u))})]}),P.jsx("div",{className:"hidden lg:flex items-center justify-end pl-4",children:P.jsx("div",{className:`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${o?"bg-[#0C0C0C] text-white border-[#0C0C0C] rotate-45 scale-110 shadow-lg":"border-black/20 text-[#0C0C0C]"}`,children:P.jsx(GD,{className:"w-5 h-5"})})})]})]})},t.number)})})]})})},ON=({href:r,onClick:e,className:t="",label:n="Live Project"})=>{const s=P.jsxs(P.Fragment,{children:[P.jsx("span",{children:n}),P.jsx(lN,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),o=`group inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer ${t}`;return r?P.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:o,children:s}):P.jsx("button",{onClick:e,type:"button",className:o,children:s})},Hu=[{number:"01",title:"BirEmek Mobil Uygulaması",category:"Üretim Seviyesi / Tek Mühendis Olarak Uçtan Uca",badge:"App Store & Google Play • Flutter & Cloud Backend",description:"Backend, frontend ve sunucu altyapısı dahil olmak üzere tek başıma tasarlayıp geliştirdiğim ve hem App Store hem Google Play mağazalarında başarıyla yayınladığım canlı mobil iş ve istihdam platformu.",col1Img1:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",col2Img:"./biremek_mockup.jpg",link:"https://github.com/anilmetey"},{number:"02",title:"Klinik Karar Destek Asistanı",category:"TÜBİTAK Teknoloji Yarışması Başarısı",badge:"PyTorch & ASP.NET Core • Health-Tech Yapay Zeka",description:"Veriye dayalı klinik teşhis öngörüleri sunmak amacıyla ASP.NET Core REST API altyapısı ve Python (PyTorch) derin öğrenme çıkarım motoru ile inşa edilen, TÜBİTAK ön değerlendirmesini başarıyla geçen sağlık platformu.",col1Img1:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"},{number:"03",title:"SemptomAI & NotTrack API",category:"Mobil Sağlık & Katmanlı REST Mimarisi",badge:"Gerçek Zamanlı AI & Katmanlı Mimari (JWT/Swagger)",description:"Kullanıcılara anlık semptom analizi sunan 14 haftalık geliştirme döngüsüne sahip mobil sağlık asistanı SemptomAI ve Entity Framework Core katmanlı mimarisiyle inşa edilen JWT kimlik doğrulamalı NotTrack REST API.",col1Img1:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",col1Img2:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",col2Img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=85",link:"https://github.com/anilmetey"}],FN=({project:r,index:e,progress:t,range:n,targetScale:s})=>{const o=ge.useRef(null),u=im(t,n,[1,s]);return P.jsx("div",{ref:o,className:"h-[85vh] flex items-center justify-center sticky top-20 md:top-28",children:P.jsxs(hr.div,{style:{scale:u,top:`${e*24}px`},className:"relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden",children:[P.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[P.jsx("span",{className:"font-black text-white leading-none select-none tracking-tight",style:{fontSize:"clamp(2.4rem, 6vw, 4.5rem)"},children:r.number}),P.jsxs("div",{children:[P.jsxs("div",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-semibold",children:[r.category," • ",r.badge]}),P.jsx("h3",{className:"text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white",children:r.title})]})]}),P.jsx(ON,{label:"Projeyi İncele",href:r.link})]}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch",children:[P.jsxs("div",{className:"md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between",children:[P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(120px, 16vw, 220px)"},children:P.jsx("img",{src:r.col1Img1,alt:`${r.title} detay 1`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})}),P.jsx("div",{className:"w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",style:{height:"clamp(150px, 20vw, 320px)"},children:P.jsx("img",{src:r.col1Img2,alt:`${r.title} detay 2`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]}),P.jsx("div",{className:"md:col-span-7 w-full h-full min-h-[220px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10",children:P.jsx("img",{src:r.col2Img,alt:`${r.title} ana sunum`,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 hover:scale-105"})})]})]})})},zN=()=>{const r=ge.useRef(null),{scrollYProgress:e}=sS({target:r,offset:["start start","end end"]});return P.jsxs("section",{id:"projects",ref:r,className:"relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28",children:[P.jsx(ni,{delay:0,y:40,children:P.jsx("h2",{className:"hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none",style:{fontSize:"clamp(3rem, 12vw, 160px)"},children:"PROJELER"})}),P.jsx("div",{className:"relative flex flex-col gap-12 sm:gap-16",children:Hu.map((t,n)=>{const s=1-(Hu.length-1-n)*.03,o=[n*(1/Hu.length),1];return P.jsx(FN,{project:t,index:n,totalCards:Hu.length,progress:e,range:o,targetScale:s},t.number)})})]})},BN=[{company:"BirEmek",role:"Mobil Yazılım Mühendisi",period:"Kas 2025 - Tem 2026",location:"Uzaktan",type:"Üretim Seviyesi / Tek Mühendis",bullets:["BirEmek mobil uygulamasını backend, frontend ve sunucu altyapısı dahil olmak üzere uçtan uca, projedeki tek mühendis olarak tek başıma tasarladım, geliştirdim ve yayına aldım.","Uygulamayı hem App Store hem de Google Play üzerinde yayınladım; App Store Connect teknik inceleme sürecini tek başıma yönettim ve yayını engelleyen kritik çökme (crash) hatalarını giderdim.","Gerçek zamanlı veri akışını ve kararlı uygulama performansını sağlamak için REST API'ler ve backend servisleri geliştirdim ve entegre ettim."],tech:["Flutter","REST API","App Store Connect","Google Play Console","Cloud Architecture"]},{company:"BlueSense",role:"Android Geliştirici Stajyeri",period:"Tem 2025 - Eyl 2025",location:"Staj",type:"Mobil Geliştirme",bullets:["Kotlin ve Jetpack Compose kullanarak özel modern Android arayüz (UI) bileşenleri geliştirdim.","Gerçek zamanlı veri yönetimi için uygulamanın frontend'ini Firebase servisleri ve harici REST API'lerle entegre ettim.","Uçtan uca test süreçlerini tamamladım ve geliştirilen özellikleri doğrudan mühendislik ekibine sundum."],tech:["Kotlin","Jetpack Compose","Android SDK","Firebase","REST API","MVVM"]},{company:"Sca Social",role:"Proje Yönetimi Stajyeri",period:"May 2025 - Haz 2025",location:"Staj",type:"Yönetim & Koordinasyon",bullets:["Yazılım projelerinin planlama, iş takibi ve ekipler arası koordinasyon aşamalarına aktif destek verdim.","Gereksinim analizi ve geliştirme döngüsü sprint süreçlerini takip ettim."],tech:["Agile / Scrum","Proje Yönetimi","Sprint Koordinasyonu"]}],VN=[{category:"Programlama Dilleri",skills:["C#","Kotlin","Dart","Python","Java","SQL","JavaScript","C"]},{category:"Mobil & Arayüz (UI)",skills:["Flutter","Android SDK","Jetpack Compose","MVVM Mimarisi"]},{category:"Backend & API Mimarisi",skills:["ASP.NET Core","Entity Framework Core","RESTful Servisler","JWT Doğrulama","Swagger UI"]},{category:"Veritabanı & Bulut",skills:["SQL Server","MySQL","SQLite","Firebase Cloud"]},{category:"Araçlar & Teknolojiler",skills:["PyTorch (AI)","Git & GitHub","Postman","Visual Studio","Android Studio"]}],HN=()=>P.jsx("section",{id:"experience",className:"relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 z-10 border-t border-white/10",children:P.jsxs("div",{className:"max-w-6xl mx-auto space-y-20",children:[P.jsx(ni,{delay:0,y:30,children:P.jsxs("div",{className:"text-center space-y-3",children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Kariyer & Geçmiş"}),P.jsx("h2",{className:"hero-heading font-black uppercase tracking-tight select-none",style:{fontSize:"clamp(2.5rem, 8vw, 100px)"},children:"DENEYİM & EĞİTİM"})]})}),P.jsxs("div",{className:"space-y-8",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg sm:text-xl font-bold uppercase text-white tracking-wide border-b border-white/10 pb-4",children:[P.jsx(ZD,{className:"w-5 h-5 text-[#B600A8]"}),P.jsx("span",{children:"İş Deneyimi"})]}),P.jsx("div",{className:"grid grid-cols-1 gap-6",children:BN.map((r,e)=>P.jsx(ni,{delay:e*.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-[#B600A8]/40 transition-all duration-300 shadow-xl space-y-5",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("h3",{className:"text-2xl font-black uppercase text-white tracking-tight",children:r.role}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30 font-semibold uppercase",children:r.type})]}),P.jsx("div",{className:"text-base text-white/80 font-medium mt-1",children:r.company})]}),P.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60 font-mono",children:[P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(JD,{className:"w-3.5 h-3.5 text-[#B600A8]"}),r.period]}),P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(vm,{className:"w-3.5 h-3.5 text-cyan-400"}),r.location]})]})]}),P.jsx("ul",{className:"space-y-2.5 pt-2",children:r.bullets.map((t,n)=>P.jsxs("li",{className:"flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed font-light",children:[P.jsx(rN,{className:"w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"}),P.jsx("span",{children:t})]},n))}),P.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-white/5",children:r.tech.map(t=>P.jsx("span",{className:"px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/10 text-white/90",children:t},t))})]})},r.company))})]}),P.jsx(ni,{delay:.1,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-cyan-500/30 transition-all shadow-xl space-y-4",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[P.jsxs("div",{className:"flex items-center gap-3 text-lg font-bold uppercase text-white tracking-wide",children:[P.jsx(dN,{className:"w-6 h-6 text-cyan-400"}),P.jsx("span",{children:"Eğitim Bilgisi"})]}),P.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold font-mono",children:"2021 - 2026"})]}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("h4",{className:"text-2xl font-black uppercase text-white",children:"Bilgisayar Mühendisliği Lisans"}),P.jsx("p",{className:"text-base text-[#D7E2EA]/90 font-medium",children:"Mersin Üniversitesi • Mühendislik Fakültesi"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/70 font-light leading-relaxed pt-1",children:"Yazılım mimarileri, algoritmalar ve veri yapıları, derin öğrenme temelleri, veritabanı yönetim sistemleri ve modern mobil uygulama geliştirme odaklı kapsamlı lisans eğitimi."})]})]})}),P.jsx(ni,{delay:.3,y:20,children:P.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] shadow-xl space-y-6",children:[P.jsx("h3",{className:"text-xl font-black uppercase text-white tracking-tight border-b border-white/10 pb-4",children:"Teknik Yetenekler & Araç Seti"}),P.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:VN.map(r=>P.jsxs("div",{className:"space-y-2.5",children:[P.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[#B600A8]",children:r.category}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.skills.map(e=>P.jsx("span",{className:"px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white hover:border-cyan-400/50 hover:bg-white/[0.08] transition-colors",children:e},e))})]},r.category))})]})})]})}),GN=({isOpen:r,onClose:e})=>{const[t,n]=ge.useState({name:"",email:"",message:""}),[s,o]=ge.useState(!1),[u,c]=ge.useState(null),f=(p,v)=>{navigator.clipboard.writeText(p),c(v),setTimeout(()=>c(null),2e3)},h=p=>{p.preventDefault();const v=encodeURIComponent(`Portfolyo İletişimi - ${t.name}`),g=encodeURIComponent(`İsim: ${t.name}
E-posta: ${t.email}

Mesaj:
${t.message}`);window.location.href=`mailto:anilmetey@gmail.com?subject=${v}&body=${g}`,o(!0),setTimeout(()=>{o(!1),e()},2e3)};return P.jsx(Jp,{children:r&&P.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[P.jsx(hr.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),P.jsxs(hr.div,{initial:{opacity:0,scale:.94,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"relative w-full max-w-2xl bg-[#121316] border border-[#2A2E35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden z-10",children:[P.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-[#B600A8]/20 via-[#7621B0]/30 to-[#38bdf8]/20 blur-3xl pointer-events-none"}),P.jsx("button",{onClick:e,type:"button",className:"absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",children:P.jsx(AN,{className:"w-6 h-6"})}),P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B600A8] font-bold",children:"Birlikte Çalışalım"}),P.jsx("h2",{className:"text-3xl sm:text-4xl font-black uppercase text-white mt-1",children:"Anıl Mete Yıldız"}),P.jsx("p",{className:"text-[#D7E2EA]/70 text-sm sm:text-base mt-1",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici"})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#B600A8]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"mailto:anilmetey@gmail.com",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] flex-shrink-0",children:P.jsx(a1,{className:"w-5 h-5"})}),P.jsxs("div",{className:"overflow-hidden",children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"E-posta"}),P.jsx("div",{className:"text-sm font-medium text-white truncate",children:"anilmetey@gmail.com"})]})]}),P.jsx("button",{onClick:()=>f("anilmetey@gmail.com","email"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:u==="email"?P.jsx(xc,{className:"w-4 h-4 text-emerald-400"}):P.jsx(gy,{className:"w-4 h-4"})})]}),P.jsxs("div",{className:"relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#7621B0]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between",children:[P.jsxs("a",{href:"tel:+905071437410",className:"flex items-center gap-3 overflow-hidden",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#7621B0] flex-shrink-0",children:P.jsx(s1,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"Telefon"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"+90 507 143 7410"})]})]}),P.jsx("button",{onClick:()=>f("+905071437410","phone"),type:"button",title:"Kopyala",className:"p-2 text-white/50 hover:text-white cursor-pointer",children:u==="phone"?P.jsx(xc,{className:"w-4 h-4 text-emerald-400"}):P.jsx(gy,{className:"w-4 h-4"})})]}),P.jsxs("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform",children:P.jsx(n1,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"LinkedIn"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anıl-mete-yıldız"})]})]}),P.jsxs("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/50 hover:bg-white/[0.07] transition-all group",children:[P.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform",children:P.jsx(i1,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[11px] text-[#D7E2EA]/50 uppercase font-medium",children:"GitHub"}),P.jsx("div",{className:"text-sm font-medium text-white",children:"anilmetey"})]})]})]}),P.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#D7E2EA]/70 px-1",children:[P.jsx(vm,{className:"w-4 h-4 text-[#B600A8]"}),P.jsx("span",{children:"Mersin, Türkiye • Mersin Üniversitesi Bilgisayar Mühendisliği"})]}),P.jsxs("form",{onSubmit:h,className:"space-y-3 pt-2",children:[P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[P.jsx("input",{type:"text",required:!0,placeholder:"Adınız & Soyadınız",value:t.name,onChange:p=>n({...t,name:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"}),P.jsx("input",{type:"email",required:!0,placeholder:"E-posta Adresiniz",value:t.email,onChange:p=>n({...t,email:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"})]}),P.jsx("textarea",{required:!0,rows:3,placeholder:"Mesajınız veya proje detayınız...",value:t.message,onChange:p=>n({...t,message:p.target.value}),className:"w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"}),P.jsx("button",{type:"submit",disabled:s,className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white transition-all duration-300 hover:opacity-95 active:scale-95 cursor-pointer shadow-lg",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:s?P.jsxs(P.Fragment,{children:[P.jsx(r1,{className:"w-5 h-5 text-emerald-300"}),P.jsx("span",{children:"İletişim Başlatıldı!"})]}):P.jsxs(P.Fragment,{children:[P.jsx(vN,{className:"w-4 h-4"}),P.jsx("span",{children:"Mesaj Gönder"})]})})]})]})]})]})})},WN=({onComplete:r})=>{const[e,t]=ge.useState(0),[n,s]=ge.useState(!1);ge.useEffect(()=>{const u=.9090909090909091,c=setInterval(()=>{t(h=>{const p=h+u;return p>=100?(clearInterval(c),s(!0),setTimeout(()=>{r()},450),100):p})},20),f=setTimeout(()=>{s(!0),r()},2600);return()=>{clearInterval(c),clearTimeout(f)}},[r]);const o=u=>u<25?"HOLOGRAM PROJEKSİYONU BAŞLATILIYOR...":u<55?"3D AVATAR & PARÇACIKLAR YÜKLENİYOR...":u<85?"MOBİL & FULL-STACK MİMARİ BAĞLANIYOR...":"SİSTEM ÇEVRİMİÇİ • HOŞ GELDİNİZ 👋";return P.jsx(Jp,{children:!n&&P.jsxs(hr.div,{initial:{opacity:1},exit:{opacity:0,scale:1.08,filter:"blur(8px)"},transition:{duration:.7,ease:[.22,1,.36,1]},className:"fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070708] select-none overflow-hidden",children:[P.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:"linear-gradient(rgba(182, 0, 168, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)",backgroundSize:"40px 40px",perspective:"600px"}}),P.jsxs("div",{className:"absolute top-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),P.jsx("span",{className:"text-red-400 font-bold uppercase tracking-wider",children:"REC // 4K 60FPS"})]}),P.jsx("div",{className:"hidden sm:block",children:"SYSTEM PROTOCOL: ANIL-METE-v2.6"}),P.jsxs("div",{children:["00:00:0",Math.floor(e/10),":",(Math.floor(e*3.7)%60).toString().padStart(2,"0")]})]}),P.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-t border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40",children:[P.jsx("div",{children:"RESOLUTION: 3840 x 2160 ULTRA HD"}),P.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[P.jsx(VD,{className:"w-3.5 h-3.5 animate-pulse"}),P.jsx("span",{children:"GPU ENGINE: ACTIVE"})]})]}),P.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B600A8]/25 via-[#7621B0]/30 to-cyan-500/20 blur-3xl pointer-events-none"}),P.jsxs("div",{className:"relative mb-6 flex flex-col items-center justify-center z-10",children:[P.jsx(hr.div,{animate:{rotate:360},transition:{repeat:1/0,duration:8,ease:"linear"},className:"absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#B600A8]/50"}),P.jsx(hr.div,{animate:{rotate:-360},transition:{repeat:1/0,duration:12,ease:"linear"},className:"absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/40"}),P.jsxs("div",{className:"relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(182,0,168,0.6)] bg-[#0C0C0C] group",children:[P.jsx("img",{src:"./anil_waving.jpg",alt:"Anıl Mete 3D Avatar Hologram",className:"w-full h-full object-cover scale-105"}),P.jsx(hr.div,{animate:{y:["-100%","200%"]},transition:{repeat:1/0,duration:1.8,ease:"easeInOut"},className:"absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent pointer-events-none"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#B600A8]/30 via-transparent to-cyan-500/10 pointer-events-none"})]}),P.jsx("div",{className:"flex items-center gap-1 mt-4",children:[40,70,95,60,85,50,90,75,45,80,65].map((u,c)=>P.jsx(hr.div,{animate:{height:[`${u*.2}px`,`${u*.4}px`,`${u*.15}px`]},transition:{repeat:1/0,duration:.8+c%3*.2,ease:"easeInOut"},className:"w-1 rounded-full bg-gradient-to-t from-[#B600A8] to-cyan-400 opacity-80",style:{height:`${u*.3}px`}},c))})]}),P.jsxs("div",{className:"text-center space-y-1.5 z-10 px-4",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest",children:[P.jsx(l1,{className:"w-3 h-3 text-[#B600A8]"}),P.jsx("span",{children:"3D CREATIVE INTRO"})]}),P.jsx("h1",{className:"hero-heading font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl",children:"ANIL METE YILDIZ"}),P.jsx("p",{className:"text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-medium",children:"Bilgisayar Mühendisi • Mobil • Full-Stack • 3D Creator"})]}),P.jsx("div",{className:"mt-6 w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 z-10 shadow-inner",children:P.jsx(hr.div,{className:"h-full rounded-full",style:{width:`${e}%`,background:"linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 70%, #38BDF8 100%)",boxShadow:"0 0 16px rgba(56, 189, 248, 0.8)"}})}),P.jsxs("div",{className:"mt-3 flex flex-col items-center gap-1 z-10 font-mono",children:[P.jsxs("span",{className:"text-sm sm:text-base font-bold text-white tracking-widest",children:["[",Math.floor(e).toString().padStart(3," "),"%]"]}),P.jsx("span",{className:"text-[11px] sm:text-xs text-[#D7E2EA]/60 tracking-wider uppercase",children:o(e)})]}),P.jsx("button",{onClick:()=>{s(!0),r()},type:"button",className:"absolute bottom-16 sm:bottom-20 z-20 text-[11px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-pointer px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md",children:"Girişi Atla [SKIP] →"})]})})};function jN(){const[r,e]=ge.useState(!0),[t,n]=ge.useState(!1),s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return P.jsxs(P.Fragment,{children:[r&&P.jsx(WN,{onComplete:()=>e(!1)}),P.jsxs("div",{className:"relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white overflow-x-clip",children:[P.jsx(PN,{onOpenContact:()=>n(!0)}),P.jsx(LN,{}),P.jsx(IN,{onOpenContact:()=>n(!0)}),P.jsx(kN,{}),P.jsx(zN,{}),P.jsx(HN,{}),P.jsx("footer",{className:"relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-16 text-[#D7E2EA] z-20",children:P.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col gap-10",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-2xl sm:text-3xl font-black uppercase text-white tracking-tight",children:"Bir sonraki projenizi birlikte hayata geçirelim mi?"}),P.jsx("p",{className:"text-sm text-[#D7E2EA]/60 mt-1",children:"Mobil uygulama, yapay zeka entegrasyonu veya full-stack mimariler için bana dilediğiniz zaman ulaşabilirsiniz."})]}),P.jsx("button",{onClick:()=>n(!0),className:"px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0",style:{background:"linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",outline:"2px solid rgba(255, 255, 255, 0.95)",outlineOffset:"-3px"},children:"Hemen İletişime Geç"})]}),P.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 text-sm",children:[P.jsxs("div",{children:[P.jsx("div",{className:"font-semibold text-white uppercase tracking-wider text-base",children:"Anıl Mete Yıldız"}),P.jsx("div",{className:"text-xs text-[#D7E2EA]/60 mt-0.5",children:"Bilgisayar Mühendisi • Mobil & Full-Stack Geliştirici • Mersin, Türkiye"})]}),P.jsxs("div",{className:"flex items-center gap-4 text-[#D7E2EA]/70",children:[P.jsx("a",{href:"https://github.com/anilmetey",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"GitHub",children:P.jsx(i1,{className:"w-5 h-5"})}),P.jsx("a",{href:"https://linkedin.com/in/anıl-mete-yıldız-b76129234",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"LinkedIn",children:P.jsx(n1,{className:"w-5 h-5"})}),P.jsx("a",{href:"mailto:anilmetey@gmail.com",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"E-posta Gönder",children:P.jsx(a1,{className:"w-5 h-5"})}),P.jsx("a",{href:"tel:+905071437410",className:"hover:text-white transition-colors p-2 rounded-full hover:bg-white/5",title:"Telefon",children:P.jsx(s1,{className:"w-5 h-5"})}),P.jsx("button",{onClick:s,className:"ml-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer",title:"Yukarı Çık",children:P.jsx(jD,{className:"w-4 h-4"})})]})]})]})}),P.jsx(GN,{isOpen:t,onClose:()=>n(!1)})]})]})}Zb.createRoot(document.getElementById("root")).render(P.jsx(Wb.StrictMode,{children:P.jsx(jN,{})}));

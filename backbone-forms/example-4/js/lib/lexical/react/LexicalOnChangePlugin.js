/*! For license information please see LexicalOnChangePlugin.js.LICENSE.txt */
define((()=>(()=>{"use strict";var e={5287:(e,t)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler");var r=Symbol.for("react.provider"),o=Symbol.for("react.context"),n=(Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,u={};function i(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||n}function c(){}function s(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=i.prototype;var f=s.prototype=new c;f.constructor=s,a(f,i.prototype),f.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var l={current:null};t.createContext=function(e){return(e={$$typeof:o,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:r,_context:e},e.Consumer=e},t.useContext=function(e){return l.current.useContext(e)},t.useEffect=function(e,t){return l.current.useEffect(e,t)},t.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)}},6540:(e,t,r)=>{e.exports=r(5287)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};r.r(o),r.d(o,{OnChangePlugin:()=>s});var n,a=r(6540),u=(n=function(e){const t=new URLSearchParams;t.append("code",e);for(let e=1;e<arguments.length;e++)t.append("v",arguments[e]);throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)})&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;const i=(0,a.createContext)(null),c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function s({ignoreHistoryMergeTagChange:e=!0,ignoreSelectionChange:t=!1,onChange:r}){const[o]=function(){const e=(0,a.useContext)(i);return null==e&&u(8),e}();return c((()=>{if(r)return o.registerUpdateListener((({editorState:n,dirtyElements:a,dirtyLeaves:u,prevEditorState:i,tags:c})=>{t&&0===a.size&&0===u.size||e&&c.has("history-merge")||i.isEmpty()||r(n,o,c)}))}),[o,e,t,r]),null}return o})()));
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9f110c6e-33f0-4dfc-bf5a-9c0976413711",e._sentryDebugIdIdentifier="sentry-dbid-9f110c6e-33f0-4dfc-bf5a-9c0976413711")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809,1636,3327],{65894:(e,t,n)=>{n.d(t,{Cl:()=>r,Ju:()=>i,Tt:()=>o,YH:()=>a,fX:()=>c,sH:()=>l,zs:()=>u});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){return new(n||(n=Promise))(function(o,l){function a(e){try{u(r.next(e))}catch(e){l(e)}}function i(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,i)}u((r=r.apply(e,t||[])).next())})}function a(e,t){var n,r,o,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=i(0),a.throw=i(1),a.return=i(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,l=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}return a}function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError},10126:(e,t,n)=>{n.d(t,{Q:()=>o});var r=n(65894),o=function(){function e(e){this.params=e}return e.prototype.logEvent=function(e,t){return(0,r.sH)(this,void 0,void 0,function(){var n=t.funnelName,o=t.userId,l=(0,r.Tt)(t,["funnelName","userId"]);return(0,r.YH)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,fetch("".concat(this.params.serviceURL,"duration"),{method:"post",headers:{Authorization:"Basic ".concat(this.params.authToken),"Content-Type":"application/json"},body:JSON.stringify((0,r.Cl)({backendUserId:o,event:e,host:window.location.hostname,quizName:n,userAgent:window.navigator.userAgent},l))})];case 1:return[2,{sent:t.sent().ok}];case 2:return[2,{sent:!1,error:t.sent()}];case 3:return[2]}})})},e}()},43015:(e,t,n)=>{function r(){var e;return"function"==typeof(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}function o(){var e;try{if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues){var t=new Uint32Array(1);return crypto.getRandomValues(t),t[0]/0x100000000}if("undefined"!=typeof globalThis&&"function"==typeof(null===(e=globalThis.crypto)||void 0===e?void 0:e.randomBytes)){var n=new Uint8Array(4);return globalThis.crypto.randomBytes(n),new DataView(n.buffer).getUint32(0)/0x100000000}return console.warn("Crypto api not available"),Math.random()}catch(e){return console.warn("getRandomNumber error:",e),Math.random()}}n.d(t,{rV:()=>o,yk:()=>r})},19626:(e,t,n)=>{n.d(t,{F:()=>r});function r(){return"undefined"==typeof window}},98511:(e,t,n)=>{function r(e,t,n){var r=t?window.sessionStorage:window.localStorage;try{var o=JSON.parse(r.getItem(e)||""),l=o.value;return(a=o.expireAt)&&Date.now()-a>0?null:l}catch(t){if(n)return null;try{var a,i=JSON.parse(window.localStorageFallback[e]||"");return l=i.value,(a=i.expireAt)&&Date.now()-a>0?null:l}catch(e){return null}}}function o(e,t,n,r,o){var l=r?window.sessionStorage:window.localStorage;try{l.setItem(e,JSON.stringify({value:t,expireAt:n?Date.now()+n:null}))}catch(r){if(!o)try{window.localStorageFallback=window.localStorageFallback||{},window.localStorageFallback[e]=JSON.stringify({value:t,expireAt:n?Date.now()+n:null})}catch(e){return void console.log(e)}}}n.d(t,{A:()=>o,_:()=>r})},74327:(e,t,n)=>{n.d(t,{_:()=>r});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},99530:(e,t,n)=>{n.d(t,{default:()=>c});var r=n(74327),o=n(16574),l=n.n(o),a=n(14227),i=n(43334),u=n(36974),c=(0,i.forwardRef)(function(e,t){let{defaultLocale:n,href:o,locale:c,localeCookie:f,onClick:s,prefetch:d,unprefixed:p,...y}=e,h=(0,u.A)(),b=null!=c&&c!==h,v=c||h,m=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{t(window.location.host)},[]),e}(),w=m&&p&&(p.domains[m]===v||!Object.keys(p.domains).includes(m)&&h===n&&!c)?p.pathname:o,g=(0,a.usePathname)();return b&&(d&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),d=!1),i.createElement(l(),(0,r._)({ref:t,href:w,hrefLang:b?c:void 0,onClick:function(e){(function(e,t,n,r){if(!e||!(r!==n&&null!=r)||!t)return;let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:l,...a}=e;a.path||(a.path=""!==o?o:"/");let i="".concat(l,"=").concat(r,";");for(let[e,t]of Object.entries(a))i+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(i+="="+t),i+=";";document.cookie=i})(f,g,h,c),s&&s(e)},prefetch:d},y))})},92592:(e,t,n)=>{n.d(t,{default:()=>s});var r=n(74327),o=n(14227),l=n(43334),a=n(36974);function i(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function u(e,t){let n;return"string"==typeof e?n=c(t,e):(n={...e},e.pathname&&(n.pathname=c(t,e.pathname))),n}function c(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(55036);var f=n(99530);let s=(0,l.forwardRef)(function(e,t){let{href:n,locale:c,localeCookie:s,localePrefixMode:d,prefix:p,...y}=e,h=(0,o.usePathname)(),b=(0,a.A)(),v=c!==b,[m,w]=(0,l.useState)(()=>i(n)&&("never"!==d||v)?u(n,p):n);return(0,l.useEffect)(()=>{h&&w(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!i(e))return e;let l=r===o||r.startsWith("".concat(o,"/"));return(t!==n||l)&&null!=o?u(e,o):e}(n,c,b,h,p))},[b,n,c,h,p]),l.createElement(f.default,(0,r._)({ref:t,href:m,locale:c,localeCookie:s},y))});s.displayName="ClientLink"},36974:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(14227),o=n(36278);let l="locale",a=!1;function i(){let e;let t=(0,r.useParams)();try{e=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[l]))throw n;a||(console.warn("Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`."),a=!0),e=t[l]}return e}},4192:(e,t,n)=>{n.d(t,{default:()=>o.a});var r=n(9865),o=n.n(r)},9865:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(99042)._(n(29433));function o(e,t){var n;let o={};"function"==typeof e&&(o.loader=e);let l={...o,...t};return(0,r.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37334:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(24818);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},29433:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(56102),o=n(43334),l=n(37334),a=n(61499);function i(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},c=function(e){let t={...u,...e},n=(0,o.lazy)(()=>t.loader().then(i)),c=t.loading;function f(e){let i=c?(0,r.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,u=!t.ssr||!!t.loading,f=u?o.Suspense:o.Fragment,s=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(f,{...u?{fallback:i}:{},children:s})}return f.displayName="LoadableComponent",f}},61499:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let r=n(56102),o=n(93843),l=n(57036),a=n(23449);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=l.workAsyncStorage.getStore();if(void 0===n)return null;let i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>{let t=n.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,o.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},2063:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(43334),o=n(93843),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var a=(0,r.memo)(function(e){var t=e.isOpen,n=void 0!==t&&t,a=e.onRequestClose,i=e.closeTimeout,u=e.preRender,c=void 0!==u&&u,f=e.contentProps,s=void 0===f?{}:f,d=e.children,p=e.parentElement,y=e.disableFocusOnContent,h=e.disableCloseOnEsc,b=e.disableCloseOnBgClick,v=e.disableBodyScrollOnOpen,m=e.disableRenderInPortal,w=e.onClick,g=e.style,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["isOpen","onRequestClose","closeTimeout","preRender","contentProps","children","parentElement","disableFocusOnContent","disableCloseOnEsc","disableCloseOnBgClick","disableBodyScrollOnOpen","disableRenderInPortal","onClick","style"]),j=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,l=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}return a}((0,r.useState)(m),2),x=j[0],S=j[1],k=(0,r.useRef)(null),C=(0,r.useRef)(null),P=(0,r.useCallback)(function(e){var t;w&&w(e),!a||b||e.target===C.current||(null===(t=C.current)||void 0===t?void 0:t.contains(e.target))||a()},[w,a,b]),E=(0,r.useCallback)(function(e){s.onKeyDown&&s.onKeyDown(e),!a||h||"Escape"!==e.code&&27!==e.keyCode||a()},[s,a,h]),_=(0,r.useCallback)(function(){return n||c?r.createElement("div",l({},O,{style:l({alignItems:"center",bottom:0,display:n?"flex":"none",left:0,overflow:"auto",position:"fixed",right:0,top:0},g||{}),onClick:P}),r.createElement("div",l({},s,{style:l({margin:"auto"},s.style),onKeyDown:E,tabIndex:-1,ref:C}),d)):null},[d,s,E,P,n,O,g,c]);if((0,r.useEffect)(function(){return i&&a&&(k.current=setTimeout(a,i)),function(){clearTimeout(k.current)}},[i,a]),(0,r.useEffect)(function(){var e;n&&!y&&(null===(e=C.current)||void 0===e||e.focus())},[n,y]),(0,r.useEffect)(function(){var e=document.body.style.overflow;return n&&v&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow=e}},[n,v]),(0,r.useEffect)(function(){m||S(!0)},[m]),x){if(m)return _();var I="string"==typeof p?p?document.querySelector(p):null:p;return(0,o.createPortal)(_(),I||document.body)}return null})},69033:(e,t,n)=>{function r(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(n=0;n<l;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{$:()=>r,A:()=>o});let o=r}}]);
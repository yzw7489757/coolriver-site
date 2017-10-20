/*! For license information please see LICENSES */
webpackJsonp([1],{"/TYz":function(t,e,r){"use strict";function n(t){r("j6Qv")}Object.defineProperty(e,"__esModule",{value:!0});var o=r("GG9f"),i=r("wJHo"),a=r("VU/8"),s=n,c=a(o.a,i.a,s,"data-v-5678bbb7",null);e.default=c.exports},"0fSd":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-tag-list"},[r("v-icon",{staticClass:"light-blue--text text--lighten-2"},[t._v("mdi-bookmark")]),t._l(t.tags,function(e,n){return r("span",{key:n,staticClass:"card card--hover"},[t._v(t._s(e))])})],2)},o=[],i={render:n,staticRenderFns:o};e.a=i},"21It":function(t,e,r){"use strict";var n=r("FtD3");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},"5VQ+":function(t,e,r){"use strict";var n=r("cGG2");t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},"7GwW":function(t,e,r){"use strict";var n=r("cGG2"),o=r("21It"),i=r("DQCr"),a=r("oJlt"),s=r("GHBc"),c=r("FtD3"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r("thJu");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+u(v+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var w=r("p1b6"),y=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},"9m/M":function(t,e,r){"use strict";function n(t){r("e176")}var o=r("BPls"),i=r("0fSd"),a=r("VU/8"),s=n,c=a(o.a,i.a,s,"data-v-6e3bb09c",null);e.a=c.exports},BPls:function(t,e,r){"use strict";e.a={name:"article-tags",props:{tags:Array}}},DQCr:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r("cGG2");t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(n(e)+"="+n(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},FtD3:function(t,e,r){"use strict";var n=r("t8qj");t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},GG9f:function(t,e,r){"use strict";var n=r("woOf"),o=r.n(n),i=r("fZjL"),a=r.n(i),s=r("Xxa5"),c=r.n(s),u=r("exGp"),f=r.n(u),l=r("mtWM"),p=r.n(l),d=r("9m/M"),h=r("O8Or");e.a={asyncData:function(){function t(t){return e.apply(this,arguments)}var e=f()(c.a.mark(function t(e){var r,n,o=(e.params,e.err,e.req);return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=o?"http://localhost/api/articles":"/api/articles",t.next=3,p.a.get(r);case 3:return n=t.sent,t.abrupt("return",{list:n.data.concat(n.data).concat(n.data)});case 5:case"end":return t.stop()}},t,this)}));return t}(),data:function(){return{list:[]}},computed:{listFormated:function(){return this.list.map(function(t,e){var r=a()(h.a).map(function(t){var r=h.a[t];return""+t+r[e%r.length]}).join(" ");return o()({},t,{flexClass:r})})}},created:function(){},components:{ArticleTags:d.a}}},GHBc:function(t,e,r){"use strict";var n=r("cGG2");t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},"JP+z":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},KCLY:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r("cGG2"),i=r("5VQ+"),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r("7GwW"):void 0!==e&&(t=r("7GwW")),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(a)}),t.exports=s}).call(e,r("W2nU"))},O8Or:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n={xs:[12],md:[6,6,12],lg:[3,3,3,6,6,5,7]}},Re3r:function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},TNV1:function(t,e,r){"use strict";var n=r("cGG2");t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},W2nU:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&s())}function s(){if(!m){var t=o(a);m=!0;for(var e=h.length;e;){for(d=h,h=[];++v<e;)d&&d[v].run();v=-1,e=h.length}d=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var d,h=[],m=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new c(t,e)),1!==h.length||m||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},XmWM:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=r("KCLY"),i=r("cGG2"),a=r("fuGk"),s=r("xLtR"),c=r("dIwP"),u=r("qRfI");n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[s,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},Zi7O:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".article-tag-list[data-v-6e3bb09c]{background:#fff}.article-tag-list span[data-v-6e3bb09c]{margin-left:10px;display:inline-block;border-radius:3px;padding:2px 10px;color:#aaa}.article-tag-list span[data-v-6e3bb09c]:first-of-type{margin-left:5px}",""])},cGG2:function(t,e,r){"use strict";function n(t){return"[object Array]"===G.call(t)}function o(t){return"[object ArrayBuffer]"===G.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===G.call(t)}function p(t){return"[object File]"===G.call(t)}function d(t){return"[object Blob]"===G.call(t)}function h(t){return"[object Function]"===G.call(t)}function m(t){return f(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=x(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)y(arguments[r],t);return e}function b(t,e,r){return y(e,function(e,n){t[n]=r&&"function"==typeof e?C(e,r):e}),t}var C=r("JP+z"),T=r("Re3r"),G=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isBuffer:T,isFormData:i,isArrayBufferView:a,isString:s,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:y,merge:x,extend:b,trim:g}},cWxy:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r("dVOP");n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},dIwP:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},e176:function(t,e,r){var n=r("Zi7O");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("1f2197a8",n,!0)},fuGk:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r("cGG2");n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},j6Qv:function(t,e,r){var n=r("l3bD");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("0faeabfd",n,!0)},l3bD:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".article-card>a[data-v-5678bbb7]{width:100%}.article-card h2[data-v-5678bbb7]{font-size:16px;margin-bottom:10px}.article-card-desc[data-v-5678bbb7]{white-space:normal;color:rgba(0,0,0,.6);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;height:48px;height:3rem;margin-bottom:0}.article-card-tags[data-v-5678bbb7]{margin:5px auto -5px -5px}.card__text[data-v-5678bbb7]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",""])},mtWM:function(t,e,r){t.exports=r("tIFN")},oJlt:function(t,e,r){"use strict";var n=r("cGG2");t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},p1b6:function(t,e,r){"use strict";var n=r("cGG2");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},pBtG:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},tIFN:function(t,e,r){"use strict";function n(t){var e=new a(t),r=i(a.prototype.request,e);return o.extend(r,a.prototype,e),o.extend(r,e),r}var o=r("cGG2"),i=r("JP+z"),a=r("XmWM"),s=r("KCLY"),c=n(s);c.Axios=a,c.create=function(t){return n(o.merge(s,t))},c.Cancel=r("dVOP"),c.CancelToken=r("cWxy"),c.isCancel=r("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=r("pxG4"),t.exports=c,t.exports.default=c},thJu:function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),a="",s=0,c=i;o.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&e>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;e=e<<8|r}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},wJHo:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{wrap:""}},t._l(t.listFormated,function(e,n){return r("v-flex",{key:n,class:"article-card "+e.flexClass,attrs:{"d-flex":"",xs:12,md6:"",lg4:""}},[r("nuxt-link",{attrs:{to:"/articles/"+e.name}},[r("v-card",{attrs:{hover:""}},[r("v-card-media",{attrs:{height:"190px",src:e.img}}),r("v-card-text",[r("h2",[t._v(t._s(e.title))]),r("p",{staticClass:"article-card-desc"},[t._v(t._s(e.desc))]),r("article-tags",{staticClass:"article-card-tags",attrs:{tags:e.tags}})],1)],1)],1)],1)}))},o=[],i={render:n,staticRenderFns:o};e.a=i},xLtR:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r("cGG2"),i=r("TNV1"),a=r("pBtG"),s=r("KCLY");t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=index.5c972868d83800edf5c5.js.map
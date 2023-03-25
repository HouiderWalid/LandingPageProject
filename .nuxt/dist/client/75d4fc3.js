/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t,e,n){"use strict";var r={name:"ClientOnly",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,l=r(),c=l.default;void 0===c&&(c=[]);var h=l.placeholder;return n._isMounted?c:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||h)?t(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||h):c.length>0?c.map((function(){return t(!1)})):t(!1))}};t.exports=r},211:function(t,e,n){"use strict";var r=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"],o=["dateStyle","timeStyle","calendar","localeMatcher","hour12","hourCycle","timeZone","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function l(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}var c=Array.isArray;function h(t){return null!==t&&"object"==typeof t}function f(t){return"string"==typeof t}var _=Object.prototype.toString,m="[object Object]";function v(t){return _.call(t)===m}function d(t){return null==t}function y(t){return"function"==typeof t}function k(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?h(t[0])||c(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(h(t[1])||c(t[1]))&&(r=t[1])),{locale:n,params:r}}function F(t){return JSON.parse(JSON.stringify(t))}function w(t,e){return!!~t.indexOf(e)}var $=Object.prototype.hasOwnProperty;function M(t,e){return $.call(t,e)}function T(t){for(var e=arguments,output=Object(t),i=1;i<arguments.length;i++){var source=e[i];if(null!=source){var n=void 0;for(n in source)M(source,n)&&(h(source[n])?output[n]=T(output[n],source[n]):output[n]=source[n])}}return output}function C(a,b){if(a===b)return!0;var t=h(a),e=h(b);if(!t||!e)return!t&&!e&&String(a)===String(b);try{var n=c(a),r=c(b);if(n&&r)return a.length===b.length&&a.every((function(t,i){return C(t,b[i])}));if(n||r)return!1;var o=Object.keys(a),l=Object.keys(b);return o.length===l.length&&o.every((function(t){return C(a[t],b[t])}))}catch(t){return!1}}var I={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var data=e.data,n=e.parent,r=e.props,o=e.slots,l=n.$i18n;if(l){var path=r.path,c=r.locale,h=r.places,f=o(),_=l.i(path,c,function(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}(f)||h?function(t,e){var n=e?function(t){0;return Array.isArray(t)?t.reduce(L,{}):Object.assign({},t)}(e):{};if(!t)return n;t=t.filter((function(t){return t.tag||""!==t.text.trim()}));var r=t.every(O);0;return t.reduce(r?D:L,n)}(f.default,h):f),m=r.tag&&!0!==r.tag||!1===r.tag?r.tag:"span";return m?t(m,data,_):_}}};function D(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function L(t,e,n){return t[n]=e,t}function O(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var x,W={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,o=e.parent,data=e.data,l=o.$i18n;if(!l)return null;var c=null,_=null;f(n.format)?c=n.format:h(n.format)&&(n.format.key&&(c=n.format.key),_=Object.keys(n.format).reduce((function(t,e){var o;return w(r,e)?Object.assign({},t,((o={})[e]=n.format[e],o)):t}),null));var m=n.locale||l.locale,v=l._ntp(n.value,m,c,_),d=v.map((function(t,e){var n,slot=data.scopedSlots&&data.scopedSlots[t.type];return slot?slot(((n={})[t.type]=t.value,n.index=e,n.parts=v,n)):t.value})),y=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return y?t(y,{attrs:data.attrs,class:data.class,staticClass:data.staticClass},d):d}};function N(t,e,n){E(t,n)&&R(t,e,n)}function j(t,e,n,r){if(E(t,n)){var o=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&C(e.value,e.oldValue)&&C(t._localeMessage,o.getLocaleMessage(o.locale))||R(t,e,n)}}function S(t,e,n,r){if(n.context){var o=n.context.$i18n||{};e.modifiers.preserve||o.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else l("Vue instance does not exists in VNode context")}function E(t,e){var n=e.context;return n?!!n.$i18n||(l("VueI18n instance does not exists in Vue instance"),!1):(l("Vue instance does not exists in VNode context"),!1)}function R(t,e,n){var r,o,c=function(t){var path,e,n,r;f(t)?path=t:v(t)&&(path=t.path,e=t.locale,n=t.args,r=t.choice);return{path:path,locale:e,args:n,choice:r}}(e.value),path=c.path,h=c.locale,_=c.args,m=c.choice;if(path||h||_)if(path){var d=n.context;t._vt=t.textContent=null!=m?(r=d.$i18n).tc.apply(r,[path,m].concat(H(h,_))):(o=d.$i18n).t.apply(o,[path].concat(H(h,_))),t._locale=d.$i18n.locale,t._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else l("`path` is required in v-t directive");else l("value type not supported")}function H(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||v(e))&&n.push(e),n}function V(t,e){void 0===e&&(e={bridge:!1}),V.installed=!0;(x=t).version&&Number(x.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var o=this.$i18n;return o._tc.apply(o,[t,o.locale,o._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(x),x.mixin(function(t){function e(){this!==this.$root&&this.$options.__INTLIFY_META__&&this.$el&&this.$el.setAttribute("data-intlify",this.$options.__INTLIFY_META__)}return void 0===t&&(t=!1),t?{mounted:e}:{beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n){if(t.i18n instanceof _t){if(t.__i18nBridge||t.__i18n)try{var e=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){e=T(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(v(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof _t?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18nBridge||t.__i18n)try{var r=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){r=T(r,JSON.parse(t))})),t.i18n.messages=r}catch(t){}var o=t.i18n.sharedMessages;o&&v(o)&&(t.i18n.messages=T(t.i18n.messages,o)),this._i18n=new _t(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof _t?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof _t&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n?(t.i18n instanceof _t||v(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof _t||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof _t)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},mounted:e,beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}}}(e.bridge)),x.directive("t",{bind:N,update:j,unbind:S}),x.component(I.name,I),x.component(W.name,W),x.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var P=function(){this._caches=Object.create(null)};P.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,text="";for(;n<t.length;){var r=t[n++];if("{"===r){text&&e.push({type:"text",value:text}),text="";var sub="";for(r=t[n++];void 0!==r&&"}"!==r;)sub+=r,r=t[n++];var o="}"===r,l=A.test(sub)?"list":o&&B.test(sub)?"named":"unknown";e.push({value:sub,type:l})}else"%"===r?"{"!==t[n]&&(text+=r):text+=r}return text&&e.push({type:"text",value:text}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,o=Array.isArray(e)?"list":h(e)?"named":"unknown";if("unknown"===o)return n;for(;r<t.length;){var l=t[r];switch(l.type){case"text":n.push(l.value);break;case"list":n.push(e[parseInt(l.value,10)]);break;case"named":"named"===o&&n.push(e[l.value])}r++}return n}(n,e)};var A=/^(?:\d)+/,B=/^(?:\w)+/;var U=0,z=1,J=2,G=3,Z=0,Y=4,X=5,K=6,Q=7,tt=8,et=[];et[Z]={ws:[Z],ident:[3,U],"[":[Y],eof:[Q]},et[1]={ws:[1],".":[2],"[":[Y],eof:[Q]},et[2]={ws:[2],ident:[3,U],0:[3,U],number:[3,U]},et[3]={ident:[3,U],0:[3,U],number:[3,U],ws:[1,z],".":[2,z],"[":[Y,z],eof:[Q,z]},et[Y]={"'":[X,U],'"':[K,U],"[":[Y,J],"]":[1,G],eof:tt,else:[Y,U]},et[X]={"'":[Y,U],eof:tt,else:[X,U]},et[K]={'"':[Y,U],eof:tt,else:[K,U]};var nt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function at(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function it(path){var t,a,e,n=path.trim();return("0"!==path.charAt(0)||!isNaN(path))&&(e=n,nt.test(e)?(a=(t=n).charCodeAt(0))!==t.charCodeAt(t.length-1)||34!==a&&39!==a?t:t.slice(1,-1):"*"+n)}var ot=function(){this._cache=Object.create(null)};ot.prototype.parsePath=function(path){var t=this._cache[path];return t||(t=function(path){var t,e,n,r,o,l,c,h=[],f=-1,_=Z,m=0,v=[];function d(){var t=path[f+1];if(_===X&&"'"===t||_===K&&'"'===t)return f++,n="\\"+t,v[U](),!0}for(v[z]=function(){void 0!==e&&(h.push(e),e=void 0)},v[U]=function(){void 0===e?e=n:e+=n},v[J]=function(){v[U](),m++},v[G]=function(){if(m>0)m--,_=Y,v[U]();else{if(m=0,void 0===e)return!1;if(!1===(e=it(e)))return!1;v[z]()}};null!==_;)if(f++,"\\"!==(t=path[f])||!d()){if(r=at(t),(o=(c=et[_])[r]||c.else||tt)===tt)return;if(_=o[0],(l=v[o[1]])&&(n=void 0===(n=o[2])?t:n,!1===l()))return;if(_===Q)return h}}(path),t&&(this._cache[path]=t)),t||[]},ot.prototype.getPathValue=function(t,path){if(!h(t))return null;var e=this.parsePath(path);if(0===e.length)return null;for(var n=e.length,r=t,i=0;i<n;){var o=r[e[i]];if(null==o)return null;r=o,i++}return r};var st,lt=/<\/?[\w\s="/.':;#-\/]+>/,ct=/(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g,ut=/^@(?:\.([a-zA-Z]+))?:/,ht=/[()]/g,ft={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},pt=new P,_t=function(t){var e=this;void 0===t&&(t={}),!x&&"undefined"!=typeof window&&window.Vue&&V(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),o=t.messages||{},l=t.dateTimeFormats||t.datetimeFormats||{},c=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||pt,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._fallbackRootWithEmptyString=void 0===t.fallbackRootWithEmptyString||!!t.fallbackRootWithEmptyString,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new ot,this._dataListeners=new Set,this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this._escapeParameterHtml=t.escapeParameterHtml||!1,"__VUE_I18N_BRIDGE__"in t&&(this.__VUE_I18N_BRIDGE__=t.__VUE_I18N_BRIDGE__),this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex)return r.getChoiceIndex.call(e,t,n);var o,l;return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):(o=t,l=n,o=Math.abs(o),2===l?o?o>1?1:0:1:o?Math.min(o,2):0)},this._exist=function(t,n){return!(!t||!n)&&(!d(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(o).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,o[t])})),this._initVM({locale:n,fallbackLocale:r,messages:o,dateTimeFormats:l,numberFormats:c})},mt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0},sync:{configurable:!0}};_t.prototype._checkLocaleMessage=function(t,e,n){var r=function(t,e,n,o){if(v(n))Object.keys(n).forEach((function(l){var c=n[l];v(c)?(o.push(l),o.push("."),r(t,e,c,o),o.pop(),o.pop()):(o.push(l),r(t,e,c,o),o.pop())}));else if(c(n))n.forEach((function(n,l){v(n)?(o.push("["+l+"]"),o.push("."),r(t,e,n,o),o.pop(),o.pop()):(o.push("["+l+"]"),r(t,e,n,o),o.pop())}));else if(f(n)){if(lt.test(n)){var h="Detected HTML in message '"+n+"' of keypath '"+o.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?l(h):"error"===t&&function(t,e){"undefined"!=typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}(h)}}};r(e,t,n,[])},_t.prototype._initVM=function(data){var t=x.config.silent;x.config.silent=!0,this._vm=new x({data:data,__VUE18N__INSTANCE__:!0}),x.config.silent=t},_t.prototype.destroyVM=function(){this._vm.$destroy()},_t.prototype.subscribeDataChanging=function(t){this._dataListeners.add(t)},_t.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.delete(e));}(this._dataListeners,t)},_t.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var e,n,r=(e=t._dataListeners,n=[],e.forEach((function(a){return n.push(a)})),n),i=r.length;i--;)x.nextTick((function(){r[i]&&r[i].$forceUpdate()}))}),{deep:!0})},_t.prototype.watchLocale=function(t){if(t){if(!this.__VUE_I18N_BRIDGE__)return null;var e=this,n=this._vm;return this.vm.$watch("locale",(function(r){n.$set(n,"locale",r),e.__VUE_I18N_BRIDGE__&&t&&(t.locale.value=r),n.$forceUpdate()}),{immediate:!0})}if(!this._sync||!this._root)return null;var r=this._vm;return this._root.$i18n.vm.$watch("locale",(function(t){r.$set(r,"locale",t),r.$forceUpdate()}),{immediate:!0})},_t.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},mt.vm.get=function(){return this._vm},mt.messages.get=function(){return F(this._getMessages())},mt.dateTimeFormats.get=function(){return F(this._getDateTimeFormats())},mt.numberFormats.get=function(){return F(this._getNumberFormats())},mt.availableLocales.get=function(){return Object.keys(this.messages).sort()},mt.locale.get=function(){return this._vm.locale},mt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},mt.fallbackLocale.get=function(){return this._vm.fallbackLocale},mt.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},mt.formatFallbackMessages.get=function(){return this._formatFallbackMessages},mt.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},mt.missing.get=function(){return this._missing},mt.missing.set=function(t){this._missing=t},mt.formatter.get=function(){return this._formatter},mt.formatter.set=function(t){this._formatter=t},mt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},mt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},mt.silentFallbackWarn.get=function(){return this._silentFallbackWarn},mt.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},mt.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},mt.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},mt.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},mt.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},mt.postTranslation.get=function(){return this._postTranslation},mt.postTranslation.set=function(t){this._postTranslation=t},mt.sync.get=function(){return this._sync},mt.sync.set=function(t){this._sync=t},_t.prototype._getMessages=function(){return this._vm.messages},_t.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},_t.prototype._getNumberFormats=function(){return this._vm.numberFormats},_t.prototype._warnDefault=function(t,e,n,r,o,l){if(!d(n))return n;if(this._missing){var c=this._missing.apply(null,[t,e,r,o]);if(f(c))return c}else 0;if(this._formatFallbackMessages){var h=k.apply(void 0,o);return this._render(e,l,h.params,e)}return e},_t.prototype._isFallbackRoot=function(t){return(this._fallbackRootWithEmptyString?!t:d(t))&&!d(this._root)&&this._fallbackRoot},_t.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},_t.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},_t.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},_t.prototype._interpolate=function(t,e,n,r,o,l,h){if(!e)return null;var _,m=this._path.getPathValue(e,n);if(c(m)||v(m))return m;if(d(m)){if(!v(e))return null;if(!f(_=e[n])&&!y(_))return null}else{if(!f(m)&&!y(m))return null;_=m}return f(_)&&(_.indexOf("@:")>=0||_.indexOf("@.")>=0)&&(_=this._link(t,e,_,r,"raw",l,h)),this._render(_,o,l,n)},_t.prototype._link=function(t,e,n,r,o,l,h){var f=n,_=f.match(ct);for(var m in _)if(_.hasOwnProperty(m)){var link=_[m],v=link.match(ut),d=v[0],y=v[1],k=link.replace(d,"").replace(ht,"");if(w(h,k))return f;h.push(k);var F=this._interpolate(t,e,k,r,"raw"===o?"string":o,"raw"===o?void 0:l,h);if(this._isFallbackRoot(F)){if(!this._root)throw Error("unexpected error");var $=this._root.$i18n;F=$._translate($._getMessages(),$.locale,$.fallbackLocale,k,r,o,l)}F=this._warnDefault(t,k,F,r,c(l)?l:[l],o),this._modifiers.hasOwnProperty(y)?F=this._modifiers[y](F):ft.hasOwnProperty(y)&&(F=ft[y](F)),h.pop(),f=F?f.replace(link,F):f}return f},_t.prototype._createMessageContext=function(t,e,path,n){var r=this,o=c(t)?t:[],l=h(t)?t:{},f=this._getMessages(),_=this.locale;return{list:function(t){return o[t]},named:function(t){return l[t]},values:t,formatter:e,path:path,messages:f,locale:_,linked:function(t){return r._interpolate(_,f[_]||{},t,null,n,void 0,[t])}}},_t.prototype._render=function(t,e,n,path){if(y(t))return t(this._createMessageContext(n,this._formatter||pt,path,e));var r=this._formatter.interpolate(t,n,path);return r||(r=pt.interpolate(t,n,path)),"string"!==e||f(r)?r:r.join("")},_t.prototype._appendItemToChain=function(t,e,n){var r=!1;return w(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},_t.prototype._appendLocaleToChain=function(t,e,n){var r,o=e.split("-");do{var l=o.join("-");r=this._appendItemToChain(t,l,n),o.splice(-1,1)}while(o.length&&!0===r);return r},_t.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,i=0;i<e.length&&"boolean"==typeof r;i++){var o=e[i];f(o)&&(r=this._appendLocaleToChain(t,o,n))}return r},_t.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];for(var r,o=[t];c(o);)o=this._appendBlockToChain(n,o,e);(o=f(r=c(e)?e:h(e)?e.default?e.default:null:e)?[r]:r)&&this._appendBlockToChain(n,o,null),this._localeChainCache[t]=n}return n},_t.prototype._translate=function(t,e,n,r,o,l,c){for(var h,f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var _=f[i];if(!d(h=this._interpolate(_,t[_],r,o,l,c,[r])))return h}return null},_t.prototype._t=function(t,e,n,r){for(var o,l=[],c=arguments.length-4;c-- >0;)l[c]=arguments[c+4];if(!t)return"";var h,f=k.apply(void 0,l);this._escapeParameterHtml&&(f.params=(null!=(h=f.params)&&Object.keys(h).forEach((function(t){"string"==typeof h[t]&&(h[t]=h[t].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))})),h));var _=f.locale||e,m=this._translate(n,_,this.fallbackLocale,t,r,"string",f.params);if(this._isFallbackRoot(m)){if(!this._root)throw Error("unexpected error");return(o=this._root).$t.apply(o,[t].concat(l))}return m=this._warnDefault(_,t,m,r,l,"string"),this._postTranslation&&null!=m&&(m=this._postTranslation(m,t)),m},_t.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},_t.prototype._i=function(t,e,n,r,o){var l=this._translate(n,e,this.fallbackLocale,t,r,"raw",o);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,o)}return this._warnDefault(e,t,l,r,[o],"raw")},_t.prototype.i=function(t,e,n){return t?(f(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},_t.prototype._tc=function(t,e,n,r,o){for(var l,c=[],h=arguments.length-5;h-- >0;)c[h]=arguments[h+5];if(!t)return"";void 0===o&&(o=1);var f={count:o,n:o},_=k.apply(void 0,c);return _.params=Object.assign(f,_.params),c=null===_.locale?[_.params]:[_.locale,_.params],this.fetchChoice((l=this)._t.apply(l,[t,e,n,r].concat(c)),o)},_t.prototype.fetchChoice=function(t,e){if(!t||!f(t))return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},_t.prototype.tc=function(t,e){for(var n,r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},_t.prototype._te=function(t,e,n){for(var r=[],o=arguments.length-3;o-- >0;)r[o]=arguments[o+3];var l=k.apply(void 0,r).locale||e;return this._exist(n[l],t)},_t.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},_t.prototype.getLocaleMessage=function(t){return F(this._vm.messages[t]||{})},_t.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},_t.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,T(void 0!==this._vm.messages[t]&&Object.keys(this._vm.messages[t]).length?Object.assign({},this._vm.messages[t]):{},e))},_t.prototype.getDateTimeFormat=function(t){return F(this._vm.dateTimeFormats[t]||{})},_t.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},_t.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,T(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},_t.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},_t.prototype._localizeDateTime=function(t,e,n,r,o,l){for(var c=e,h=r[c],f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var _=f[i];if(c=_,!d(h=r[_])&&!d(h[o]))break}if(d(h)||d(h[o]))return null;var m,v=h[o];if(l)m=new Intl.DateTimeFormat(c,Object.assign({},v,l));else{var y=c+"__"+o;(m=this._dateTimeFormatters[y])||(m=this._dateTimeFormatters[y]=new Intl.DateTimeFormat(c,v))}return m.format(t)},_t.prototype._d=function(t,e,n,r){if(!n)return(r?new Intl.DateTimeFormat(e,r):new Intl.DateTimeFormat(e)).format(t);var o=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n,r);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return o||""},_t.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,l=null,c=null;return 1===e.length?(f(e[0])?l=e[0]:h(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(l=e[0].key)),c=Object.keys(e[0]).reduce((function(t,n){var r;return w(o,n)?Object.assign({},t,((r={})[n]=e[0][n],r)):t}),null)):2===e.length&&(f(e[0])&&(l=e[0]),f(e[1])&&(r=e[1])),this._d(t,r,l,c)},_t.prototype.getNumberFormat=function(t){return F(this._vm.numberFormats[t]||{})},_t.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},_t.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,T(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},_t.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},_t.prototype._getNumberFormatter=function(t,e,n,r,o,l){for(var c=e,h=r[c],f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var _=f[i];if(c=_,!d(h=r[_])&&!d(h[o]))break}if(d(h)||d(h[o]))return null;var m,v=h[o];if(l)m=new Intl.NumberFormat(c,Object.assign({},v,l));else{var y=c+"__"+o;(m=this._numberFormatters[y])||(m=this._numberFormatters[y]=new Intl.NumberFormat(c,v))}return m},_t.prototype._n=function(t,e,n,r){if(!_t.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.format(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return l||""},_t.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var o=this.locale,l=null,c=null;return 1===e.length?f(e[0])?l=e[0]:h(e[0])&&(e[0].locale&&(o=e[0].locale),e[0].key&&(l=e[0].key),c=Object.keys(e[0]).reduce((function(t,n){var o;return w(r,n)?Object.assign({},t,((o={})[n]=e[0][n],o)):t}),null)):2===e.length&&(f(e[0])&&(l=e[0]),f(e[1])&&(o=e[1])),this._n(t,o,l,c)},_t.prototype._ntp=function(t,e,n,r){if(!_t.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.formatToParts(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return l||[]},Object.defineProperties(_t.prototype,mt),Object.defineProperty(_t,"availabilities",{get:function(){if(!st){var t="undefined"!=typeof Intl;st={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return st}}),_t.install=V,_t.version="8.28.2",e.a=_t}}]);
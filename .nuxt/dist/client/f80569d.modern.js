(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,n){"use strict";n.r(e);var o=n(144),r=n(342),l=n(341),d=(n(18),n(229)),c={data:()=>({isHydrated:!1}),computed:{makeVisibleOnHydration(){return{visibility:this.isHydrated?"visible":"hidden"}}},mounted(){this.isHydrated=!0}},m={name:"McnHeader",components:{McnImage:n(143).default,BurgerButton:d.default},mixins:[c],data:()=>({Toggle:!1,header:[{id:1,title:"Home",url:"/"},{id:2,title:"Products",url:"/products",query:!0},{id:3,title:"FAQ",url:"/faq"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"}]}),computed:{domain(){return this.$store.getters["salePage/getDomain"]},showNavBarActive(){return this.isNavBarActive||!["sale_page_name","blogs"].includes(this.$route.name)},isNavBarActive(){return this.$store.getters["salePage/isNavBarActive"]},isMdAndDown(){return this.$vuetify.breakpoint.mdAndDown&&this.isHydrated},isLgAndUp(){return this.$vuetify.breakpoint.lgAndUp&&this.isHydrated},domainLogoImageUrl(){var t,e,o,r,l,d;return null!==(t=null!==(e=null===(o=this.domainLogoImage)||void 0===o||null===(r=o.ImageUrl)||void 0===r?void 0:r.content)&&void 0!==e?e:null===(l=this.domain)||void 0===l||null===(d=l.DomainLogo)||void 0===d?void 0:d.content)&&void 0!==t?t:n(300)},domainLogoImage(){var t,e;return null===(t=this.domain)||void 0===t||null===(e=t.DomainLogoGallery)||void 0===e?void 0:e.content},toggleStyle(){return this.isLgAndUp?{height:"80px"}:this.Toggle?{height:40*this.header.length+"px"}:{height:0}},getPageQuery(){return"?"+Object.keys(this.$route.query).map((t=>t+"="+this.$route.query[t])).join("&")}}},v=n(32),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return t.showNavBarActive?e(r.a,{staticClass:"py-0 mx-0 mt-0 w-100",staticStyle:{"z-index":"10"},attrs:{elevation:"2"}},[e("div",{staticClass:"w-100 d-flex justify-center h-100",staticStyle:{"justify-content":"center"}},[e("div",{staticClass:"mcn-header d-flex flex-wrap w-100 justify-space-between align-center h-100",staticStyle:{"min-height":"80px","justify-content":"space-between","align-items":"center"}},[e("BurgerButton",{staticClass:"burger-button position-absolute",staticStyle:{left:"-30px",top:"15px",display:"none"},model:{value:t.Toggle,callback:function(e){t.Toggle=e},expression:"Toggle"}}),t._v(" "),e("a",{staticClass:"d-flex align-items-center",staticStyle:{"min-height":"80px","align-items":"center"},style:{maxWidth:t.isMdAndDown?"70%":"auto"},attrs:{href:"/"}},[e("McnImage",{attrs:{image:t.domainLogoImage,src:t.domainLogoImageUrl,height:"50px","image-max-width":"150px","image-radius":"",width:"auto"}})],1),t._v(" "),e(l.a,{staticClass:"mcn-menu flex-grow-0 overflow-hidden",staticStyle:{transition:".5s","align-items":"center"},style:t.toggleStyle,attrs:{align:"center",justify:"center","no-gutters":""}},t._l(t.header,(function(link,i){return e(o.a,{key:i,staticClass:"text-decoration-none",style:[t.$vuetify.rtl?{fontSize:"17px"}:{}],attrs:{to:"/"===link.url?t.localePath(link.url):t.localePath(link.url)+t.getPageQuery,"active-class":"url-active",exact:"",plain:""},on:{click:function(e){t.Toggle=!t.Toggle}}},[t._v("\n          "+t._s(t.$t(link.title))+"\n        ")])})),1)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{McnImage:n(143).default})},143:function(t,e,n){"use strict";n.r(e);var o={name:"McnImage",props:{loading:{default:"eager"},image:{},maxHeight:{type:String,default:"270px"},imageRadius:{type:Boolean,default:!1},imageMaxWidth:{},src:{},alt:{},height:{type:String,default:"auto"},width:{type:String,default:"100%"},border:{type:Boolean,default:!1}},computed:{maxWidth(){return this.imageMaxWidth?this.imageMaxWidth:"auto"},getImageUrl(){var t,e;return null===(t=this.image)||void 0===t||null===(e=t.ImageUrl)||void 0===e?void 0:e.content},getWebpImage(){var t,e,n,o;return null===(t=this.image)||void 0===t||null===(e=t.ImageOtherExtensions)||void 0===e||null===(n=e.content)||void 0===n||null===(o=n.find)||void 0===o?void 0:o.call(n,(i=>{var t;return"webp"===(null==i||null===(t=i.ImageExtensionsExtension)||void 0===t?void 0:t.content)}))},getWebpImagePath(){var t,e;return null===(t=this.getWebpImage)||void 0===t||null===(e=t.ImageExtensionsPath)||void 0===e?void 0:e.content},getWebpImageExtension(){var t,e;return null===(t=this.getWebpImage)||void 0===t||null===(e=t.ImageExtensionsExtension)||void 0===e?void 0:e.content}}},r=n(32),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center align-center h-100",on:{click:function(e){return t.$emit("click")}}},[t.getWebpImage?e("picture",{staticClass:"d-flex justify-center",style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,height:t.height,width:t.width}},[t.getWebpImage?e("source",{style:{borderRadius:t.imageRadius?"6px":0},attrs:{srcset:t.getWebpImagePath,type:["image",t.getWebpImageExtension].join("/")}}):t._e(),t._v(" "),e("img",{class:{"mcn-card-shadow":t.border},style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,borderRadius:t.imageRadius?"6px":0},attrs:{alt:t.alt,loading:t.loading,src:t.getImageUrl,height:t.height,width:t.width}})]):t.src?e("img",{staticClass:"d-flex align-center",class:{"mcn-card-shadow":t.border},style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,borderRadius:t.imageRadius?"6px":0},attrs:{loading:t.loading,alt:t.alt,src:t.src,height:t.height,width:t.width}}):t._e()])}),[],!1,null,"f0a0a9e6",null);e.default=component.exports},148:function(t,e,n){"use strict";var o=n(226),r=n(63),l=n.n(r);n(212);e.a=t=>{var{store:e,req:n,res:r}=t;Object(o.a)({key:"mcn-landing-pages",paths:["salePage.savedData"],storage:{getItem:t=>l.a.get(t),setItem:(t,e)=>{"mcn-landing-pages"===t&&l.a.set(t,e,{expires:365,path:"/",secure:!1})},removeItem:t=>l.a.remove(t)}})(e)}},149:function(t,e,n){"use strict";var o=n(0),r=n(87),l={theme:{dark:!1,options:{variations:!1},themes:{light:{primary:"#252733",secondary:"#0073c0",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",danger:"#FF5252"}}}};o.a.use(r.a,{});e.a=t=>{var e="function"==typeof l?l(t):l,n=new r.a(e);t.app.vuetify=n,t.$vuetify=n.framework}},150:function(t,e,n){"use strict";n(10);e.a=function(t,e){var n,o,{$axios:r,req:l}=t,d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e={};switch(t=window.location.hostname,!0){case/localhost/.test(t):e.API="http://mcn-apis.test/api/",e.REDIS_HOST="127.0.0.1",e.REDIS_DB=0,e.PAGE_DEFAULT_DOMAIN="localhost";break;case/^dev\..*/.test(t):e.API="https://dev-api.maxcom.network/api/",e.REDIS_HOST="elasicach-redis.tx8ln5.ng.0001.usw2.cache.amazonaws.com",e.REDIS_DB=6,e.PAGE_DEFAULT_DOMAIN="dev.maxcomoffers.com";break;default:e.API="https://api.maxcom.network/api/",e.REDIS_HOST="elasicach-redis.tx8ln5.ng.0001.usw2.cache.amazonaws.com",e.REDIS_DB=0,e.PAGE_DEFAULT_DOMAIN="maxcomshop.com"}return e}(null===(n=/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/.exec(null==l||null===(o=l.headers)||void 0===o?void 0:o.host))||void 0===n?void 0:n[1]).API;e("mcnApi",r.create({baseURL:d,timeout:6e4,headers:{"content-type":"application/json",accept:"application/json"},responseType:"json"}))}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return d})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return m}));n(10),n(82);var o=t=>Object.prototype.toString.call(t).slice(8,-1),r=t=>"Object"===o(t),l=t=>"Function"===o(t);function d(data,t){var param=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!data)return null;if(!t)return data;var e=l(t)?new t(param):t;return data&&e&&Object.keys(e).forEach((t=>{if(void 0!==data[e[t].fieldName])if(e[t].model||e[t].dynamicModel)if(Array.isArray(data[e[t].fieldName])){var n=[];data[e[t].fieldName].forEach((o=>n.push(d(o,l(e[t].dynamicModel)?e[t].dynamicModel(o):e[t].model)))),e[t].content=n}else r(data[e[t].fieldName])?e[t].content=d(data[e[t].fieldName],l(e[t].dynamicModel)?e[t].dynamicModel(data[e[t].fieldName]):e[t].model):e[t].content=data[e[t].fieldName];else e[t].type&&"json"===e[t].type&&"string"==typeof data[e[t].fieldName]?e[t].content=JSON.parse(data[e[t].fieldName]):e[t].content=data[e[t].fieldName]})),e}function c(t){try{new t}catch(t){return!1}return!0}function m(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},210:function(t,e,n){t.exports={}},211:function(t,e,n){t.exports={}},222:function(t,e,n){"use strict";n.r(e);n(6),n(7),n(303),n(101),n(10),n(100),n(22),n(35),n(38),n(59),n(18),n(25);var o=n(19);class r{constructor(){}static reInstantiate(t,e){var n=null!=e?e:this;if(!Object(o.e)(t)||!Object(o.c)(n))return null;var l=new n;return Object.keys(l).forEach((e=>{var n,d=t[e],c=l[e];if(d&&c){var m=Object(o.d)(c.dynamicModel);l[e].content=c.model||m?Array.isArray(d.content)?d.content.map((t=>r.reInstantiate(t,m?c.dynamicModel(t):c.model))):r.reInstantiate(d.content,m?c.dynamicModel(d.content):c.model):null!==(n=null==d?void 0:d.content)&&void 0!==n?n:null}})),l}}class l extends r{constructor(t){super(),this.ResponseCode={fieldName:"code",content:null},this.ResponseData={fieldName:"data",content:null},this.ResponseMessages={fieldName:"messages",content:null},t&&(this.ResponseData.model=t)}getResponseData(){var t;return null===(t=this.ResponseData)||void 0===t?void 0:t.content}getVisitId(){var t;return null===(t=this.getResponseData())||void 0===t?void 0:t.visit_id}}function d(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{isAsync:c}=e;return this.OnStart=t=>("Function"===Object(o.a)(t)&&t(),this),this.OnSuccess=function(e,c){var m=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.then((t=>{var n=null==t?void 0:t.data,code=null==n?void 0:n.code,data=r?n:null==n?void 0:n.data,v=null==n?void 0:n.message;(200===code||r)&&(c?Array.isArray(data)?m?data.forEach((t=>e(Object(o.f)(t,c)))):e(data.map((t=>Object(o.f)(t,c)))):e(Object(o.f)(data,c),v):e(d?n:Object(o.f)(n,l),v))})),n},this.OnFailure=e=>(t.then((t=>{var n,o,r;return![401,200,501].includes(null==t||null===(n=t.data)||void 0===n?void 0:n.code)&&null!=t&&null!==(o=t.data)&&void 0!==o&&o.code?e(d?null==t?void 0:t.data:null==t||null===(r=t.data)||void 0===r?void 0:r.messages):null})).catch((t=>e(t))),this),this.OnValidationErrors=e=>(t.then((t=>{var n,o;return 401===(null==t||null===(n=t.data)||void 0===n?void 0:n.code)?null==e?void 0:e(d?null==t?void 0:t.data:null==t||null===(o=t.data)||void 0===o?void 0:o.messages):null})),this),this.OnPaymentFailure=e=>(t.then((t=>{var n,o;return 501===(null==t||null===(n=t.data)||void 0===n?void 0:n.code)?e(d?null==t?void 0:t.data:null==t||null===(o=t.data)||void 0===o?void 0:o.messages):null})).catch((t=>e(t))),this),this.OnFinished=e=>(t.then((()=>e())).catch((()=>e())),this),c?this:new Promise(((n,r)=>{t.then((t=>{var d,c,m,v,h=null==e||null===(d=e.data)||void 0===d?void 0:d.data_model,f=null==e||null===(c=e.data)||void 0===c?void 0:c.return_data,data=f?t.data.data:t.data;200===(null===(m=t.data)||void 0===m?void 0:m.code)?n(Object(o.f)(data,f?new h:new l(null!=h?h:null))):null!==(v=t.data)&&void 0!==v&&v.code?r(Object(o.f)(t.data,new l)):r(Object(o.f)({code:500,data:[],messages:"Server failure."},new l))})).catch((t=>{var e={code:500,data:[],messages:t.message};r(Object(o.f)(e,new l))}))}))}e.default={sendApiRequest:function(t){var e,{axios:n,i18n:o,store:r,method:l,uri:c,data:data,headers:m,contentType:v,onUploadProgress:h,onDownloadProgress:f,baseURL:y,timeout:x,raw:w,foreignApi:_}=t,I=new URL([n.defaults.baseURL,c].join("")),O=new URLSearchParams(I.search);O.set("lang",null!==(e=o.locale)&&void 0!==e?e:"en");var j={method:l,url:[I.pathname.replace(/^\/api/,""),"?",O.toString()].join(""),data:Object.assign({},n.defaults.data,data),headers:Object.assign({},n.defaults.headers,m)};return j.data=Array.isArray(data)?data.map((i=>JSON.stringify(i))).reduce(((t,i)=>Object.assign(t,JSON.parse(i))),{}):JSON.stringify(data),h&&(j.onUploadProgress=h),f&&(j.onDownloadProgress=f),y&&(j.baseURL=y),x&&(j.timeout=x),new d(n(j),t,_,w)}}},228:function(t,e,n){"use strict";var o=n(340),r=n(19),l={components:{McnHeader:n(142).default},computed:{domain(){return this.$store.getters["salePage/getDomain"]},getSecondaryColor(){var t,e,n;return null!==(t=null===(e=this.domain)||void 0===e||null===(n=e.DomainSecondaryColor)||void 0===n?void 0:n.content)&&void 0!==t?t:"#0073c0"},primaryColor(){var t,e;return null!==(t=null===(e=this.domain)||void 0===e?void 0:e.DomainPrimaryColor.content)&&void 0!==t?t:"#0073c0"},conicBgColor(){var t;return Object.values(null!==(t=Object(r.b)(this.primaryColor))&&void 0!==t?t:{}).join()}}},d=(n(301),n(32)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"position-relative",staticStyle:{"min-height":"100vh","background-color":"rgb(246, 246, 246)"},style:{"--d-secondary-color":t.getSecondaryColor,"--d-primary-color":t.conicBgColor}},[e("McnHeader"),t._v(" "),e("div",{staticClass:"flex-grow-1",staticStyle:{"min-height":"1px"}},[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{McnHeader:n(142).default})},229:function(t,e,n){"use strict";n.r(e);var o={name:"BurgerButton",props:["value"],computed:{dataModel:{get(){return this.value},set(t){this.$emit("input",t)}}}},r=(n(299),n(32)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataModel,expression:"dataModel"}],attrs:{id:"start",type:"checkbox"},domProps:{checked:Array.isArray(t.dataModel)?t._i(t.dataModel,null)>-1:t.dataModel},on:{change:function(e){var n=t.dataModel,o=e.target,r=!!o.checked;if(Array.isArray(n)){var l=t._i(n,null);o.checked?l<0&&(t.dataModel=n.concat([null])):l>-1&&(t.dataModel=n.slice(0,l).concat(n.slice(l+1)))}else t.dataModel=r}}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("label",{staticClass:"container",attrs:{for:"start"}},[e("div",{staticClass:"bar bar-top"}),t._v(" "),e("div",{staticClass:"void"}),t._v(" "),e("div",{staticClass:"bar bar-middle"}),t._v(" "),e("div",{staticClass:"void"}),t._v(" "),e("div",{staticClass:"bar bar-bottom"})])}],!1,null,"1372e3a2",null);e.default=component.exports},269:function(t,e,n){t.exports={}},270:function(t,e,n){t.exports={}},299:function(t,e,n){"use strict";n(210)},300:function(t,e,n){t.exports=n.p+"img/mcn-logo-with-visible-text.67ea019.png"},301:function(t,e,n){"use strict";n(211)},302:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"strict",(function(){return c}));n(222);var o=()=>({savedData:{orders:[],sale_page_referrer_id:null,sale_page_pt:null,click_query:{},client_language:null,client_country:null},pageAddOns:null,client_location:null,domain:null}),r={},l={},d={},c=!1},339:function(t,e,n){n(230),t.exports=n(231)},52:function(t,e,n){"use strict";var o={layout:"empty"},r=n(32),component=Object(r.a)(o,(function(){return(0,this._self._c)("div",[this._v("error")])}),[],!1,null,"76d00bf8",null);e.a=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(15),l=n(16),r=Object(l.a)((function t(){Object(o.a)(this,t),this.ImageExtensionsId={fieldName:"id",content:null},this.ImageExtensionsExtension={fieldName:"extension",content:null},this.ImageExtensionsPath={fieldName:"path",content:null}})),c=function(){function t(){Object(o.a)(this,t),this.ImageId={fieldName:"image_id",fieldTitle:"Image Id",content:null},this.ImageName={fieldName:"image_name",fieldTitle:"Image Name",content:null},this.ImageUrl={fieldName:"image_url",fieldTitle:"Image Url",content:null},this.ImageExtension={fieldName:"image_extension",fieldTitle:"Image Extension",content:null},this.ImageFolder={fieldName:"image_folder",fieldTitle:"Image Folder",content:null},this.ImageOtherExtensions={fieldName:"image_other_extensions",fieldTitle:"Image Other Extensions",model:r,content:null}}return Object(l.a)(t,[{key:"getUrl",value:function(){return this.ImageUrl.content}}]),t}();e.b=c},207:function(t,e,n){"use strict";n.r(e);n(3),n(30),n(35),n(382),n(131),n(53),n(17),n(130),n(38),n(49),n(9),n(24),n(36),n(43);var o=n(45),l=n(15),r=n(16),c=function(){function t(e){Object(l.a)(this,t),this.ResponseCode={fieldName:"code",content:null},this.ResponseData={fieldName:"data",content:null},this.ResponseMessages={fieldName:"messages",content:null},e&&(this.ResponseData.model=e)}return Object(r.a)(t,[{key:"getResponseData",value:function(){var t;return null===(t=this.ResponseData)||void 0===t?void 0:t.content}}]),t}();function d(t,e){var n=this,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.isAsync;return this.OnStart=function(t){return"Function"===Object(o.a)(t)&&t(),n},this.OnSuccess=function(e,r){var d=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.then((function(t){var n=null==t?void 0:t.data,code=null==n?void 0:n.code,data=null==n?void 0:n.data,m=null==n?void 0:n.message;200===code&&(r?Array.isArray(data)?d?data.forEach((function(t){return e(Object(o.e)(t,r))})):e(data.map((function(t){return Object(o.e)(t,r)}))):e(Object(o.e)(data,r),m):e(l?n:Object(o.e)(n,c)))})),n},this.OnFailure=function(e){return t.then((function(t){var n,o,r;return![401,200,501].includes(null==t||null===(n=t.data)||void 0===n?void 0:n.code)&&null!=t&&null!==(o=t.data)&&void 0!==o&&o.code?e(l?null==t?void 0:t.data:null==t||null===(r=t.data)||void 0===r?void 0:r.messages):null})).catch((function(t){return e(t)})),n},this.OnValidationErrors=function(e){return t.then((function(t){var n,o;return 401===(null==t||null===(n=t.data)||void 0===n?void 0:n.code)?null==e?void 0:e(l?null==t?void 0:t.data:null==t||null===(o=t.data)||void 0===o?void 0:o.messages):null})),n},this.OnPaymentFailure=function(e){return t.then((function(t){var n,o;return 501===(null==t||null===(n=t.data)||void 0===n?void 0:n.code)?e(l?null==t?void 0:t.data:null==t||null===(o=t.data)||void 0===o?void 0:o.messages):null})).catch((function(t){return e(t)})),n},this.OnFinished=function(e){return t.then((function(){return e()})).catch((function(){return e()})),n},r?this:new Promise((function(n,l){t.then((function(t){var r,d,m,f,v=null==e||null===(r=e.data)||void 0===r?void 0:r.data_model,h=null==e||null===(d=e.data)||void 0===d?void 0:d.return_data,data=h?t.data.data:t.data;200===(null===(m=t.data)||void 0===m?void 0:m.code)?n(Object(o.e)(data,h?new v:new c(null!=v?v:null))):null!==(f=t.data)&&void 0!==f&&f.code?l(Object(o.e)(t.data,new c)):l(Object(o.e)({code:500,data:[],messages:"Server failure."},new c))})).catch((function(t){var e={code:500,data:[],messages:t.message};l(Object(o.e)(e,new c))}))}))}e.default={sendApiRequest:function(t){var e,n=t.axios,o=t.i18n,l=(t.store,t.method),r=t.uri,data=t.data,c=t.headers,m=t.contentType,f=t.onUploadProgress,v=t.onDownloadProgress,h=t.baseURL,y=t.timeout,_=t.raw,x=new URL([n.defaults.baseURL,r].join("")),O=new URLSearchParams(x.search);O.set("lang",null!==(e=o.locale)&&void 0!==e?e:"en");var D={method:l,url:[x.pathname.replace(/^\/api/,""),"?",O.toString()].join(""),data:Object.assign({},n.defaults.data,data),headers:Object.assign({},n.defaults.headers,c)};if("form-data"===m&&D){D.headers["content-type"]="multipart/form-data";var N=new FormData;Array.isArray(data)&&data.forEach((function(t){Array.isArray(t.value)?t.value.length>0?t.value.forEach((function(e){return N.append("".concat(t.name,"[]"),e)})):N.append("".concat(t.name,"[]"),t.value):N.append(t.name,t.value)})),"PUT"===D.method&&(N.append("_method",D.method),D.method="POST"),D.data=N}else D.data=Array.isArray(data)?data.map((function(i){return JSON.stringify(i)})).reduce((function(t,i){return Object.assign(t,JSON.parse(i))}),{}):JSON.stringify(data);return f&&(D.onUploadProgress=f),v&&(D.onDownloadProgress=v),h&&(D.baseURL=h),y&&(D.timeout=y),new d(n(D),t,_)}}},212:function(t,e,n){"use strict";var o=n(1),l=n(138),r={theme:{light:!0,themes:{light:{primary:"#252733",secondary:"#0073c0",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",danger:"#FF5252"}}}};o.a.use(l.a,{});e.a=function(t){var e="function"==typeof r?r(t):r,n=new l.a(e);t.app.vuetify=n,t.$vuetify=n.framework}},280:function(t,e,n){t.exports={}},281:function(t,e,n){t.exports={}},282:function(t,e,n){t.exports={}},300:function(t,e,n){"use strict";var o=n(429),l=(n(53),n(202),n(434)),r=n(433),c=n(430),d=n(0),m=(n(43),n(24),n(22),n(33),{name:"BurgerButton",props:["value"],computed:{dataModel:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}}),f=(n(377),n(37)),v=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataModel,expression:"dataModel"}],attrs:{id:"start",type:"checkbox"},domProps:{checked:Array.isArray(t.dataModel)?t._i(t.dataModel,null)>-1:t.dataModel},on:{change:function(e){var n=t.dataModel,o=e.target,l=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.dataModel=n.concat([null])):r>-1&&(t.dataModel=n.slice(0,r).concat(n.slice(r+1)))}else t.dataModel=l}}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("label",{staticClass:"container",attrs:{for:"start"}},[e("div",{staticClass:"bar bar-top"}),t._v(" "),e("div",{staticClass:"void"}),t._v(" "),e("div",{staticClass:"bar bar-middle"}),t._v(" "),e("div",{staticClass:"void"}),t._v(" "),e("div",{staticClass:"bar bar-bottom"})])}],!1,null,"1372e3a2",null).exports,h=(n(103),n(3),{name:"McnImage",props:{loading:{default:"eager"},image:{},maxHeight:{type:String,default:"270px"},imageRadius:{type:Boolean,default:!1},imageMaxWidth:{},src:{},alt:{},height:{type:String,default:"auto"},width:{type:String,default:"100%"},border:{type:Boolean,default:!1}},computed:{maxWidth:function(){return this.imageMaxWidth?"".concat(this.imageMaxWidth,"px"):"auto"},getImageUrl:function(){var t,e;return null===(t=this.image)||void 0===t||null===(e=t.ImageUrl)||void 0===e?void 0:e.content},getWebpImage:function(){var t,e,n,o;return null===(t=this.image)||void 0===t||null===(e=t.ImageOtherExtentions)||void 0===e||null===(n=e.content)||void 0===n||null===(o=n.find)||void 0===o?void 0:o.call(n,(function(i){var t;return"webp"===(null==i||null===(t=i.ImageExtensionsExtension)||void 0===t?void 0:t.content)}))},getWebpImagePath:function(){var t,e;return null===(t=this.getWebpImage)||void 0===t||null===(e=t.ImageExtensionsPath)||void 0===e?void 0:e.content},getWebpImageExtension:function(){var t,e;return null===(t=this.getWebpImage)||void 0===t||null===(e=t.ImageExtensionsExtension)||void 0===e?void 0:e.content}}}),y=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center align-center",on:{click:function(e){return t.$emit("click")}}},[t.getImageUrl?e("picture",{style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,height:t.height,width:t.width}},[t.getWebpImage?e("source",{style:{borderRadius:t.imageRadius?"6px":0},attrs:{srcset:t.getWebpImagePath,type:["image",t.getWebpImageExtension].join("/")}}):t._e(),t._v(" "),e("img",{class:{"mcn-card-shadow":t.border},style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,borderRadius:t.imageRadius?"6px":0},attrs:{alt:t.alt,loading:t.loading,src:t.getImageUrl,height:t.height,width:t.width}})]):t.src?e("img",{staticClass:"d-flex align-center",class:{"mcn-card-shadow":t.border},style:{maxWidth:t.maxWidth,maxHeight:t.maxHeight,borderRadius:t.imageRadius?"6px":0},attrs:{loading:t.loading,alt:t.alt,src:t.src,height:t.height,width:t.width}}):t._e()])}),[],!1,null,"bb8aa9b4",null).exports,_={name:"CustomNuxtImg",props:{image:n(140).b}},x=Object(f.a)(_,(function(){var t,e=this._self._c;return e("picture",[e("source",{attrs:{type:"image/webp",srcset:"/mcn_header_logo.webp"}}),this._v(" "),e("nuxt-img",{attrs:(t={height:"50",preload:"",src:"/mcn_header_logo.png",width:"241",background:"white"},Object(d.a)(t,"preload",""),Object(d.a)(t,"fit","contain"),t)})],1)}),[],!1,null,"226d55da",null).exports,O=n(378),D={name:"McnHeader",components:{McnImage:y,BurgerButton:v,CustomNuxtImg:x},data:function(){return{Toggle:!1,isHydrated:!1,header:[{id:1,title:"Home",url:"/"},{id:2,title:"Products",url:"/products",query:!0},{id:3,title:"FAQ",url:"/faq"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"}]}},computed:{domain:function(){return this.$store.getters["salePage/getDomain"]},showNavBarActive:function(){return this.isNavBarActive||!["sale_page_name","blogs"].includes(this.$route.name)},isNavBarActive:function(){return this.$store.getters["salePage/isNavBarActive"]},isMdAndDown:function(){return this.$vuetify.breakpoint.mdAndDown&&this.isHydrated},isLgAndUp:function(){return this.$vuetify.breakpoint.lgAndUp&&this.isHydrated},domainLogoImageUrl:function(){var t,e,n,o,l,r;return null!==(t=null!==(e=null===(n=this.domainLogoImage)||void 0===n||null===(o=n.ImageUrl)||void 0===o?void 0:o.content)&&void 0!==e?e:null===(l=this.domain)||void 0===l||null===(r=l.DomainLogo)||void 0===r?void 0:r.content)&&void 0!==t?t:O},domainLogoImage:function(){var t,e;return null===(t=this.domain)||void 0===t||null===(e=t.DomainLogoGallery)||void 0===e?void 0:e.content},toggleStyle:function(){return this.isLgAndUp?{height:"80px"}:this.Toggle?{height:40*this.header.length+"px"}:{height:0}}},methods:{routeDestination:function(link){return"/"===link.url?this.localePath(link.url):this.localePath(link.url)+this.$route.query}},mounted:function(){this.isHydrated=!0}},N=(n(379),Object(f.a)(D,(function(){var t,e=this,n=e._self._c;return e.showNavBarActive&&e.isHydrated?n(r.a,{staticClass:"py-0 mx-0 mt-0 w-100",staticStyle:{"z-index":"10"},attrs:{elevation:"2"}},[n("div",{staticClass:"w-100 flex justify-center h-100"},[n("div",{staticClass:"mcn-header flex flex-wrap w-100 justify-space-between align-center"},[n("div",{staticClass:"flex align-center",staticStyle:{height:"80px",width:"170px",position:"relative"}},[n("BurgerButton",{staticClass:"burger-button absolute",staticStyle:{left:"-140px",top:"15px",display:"none"},model:{value:e.Toggle,callback:function(t){e.Toggle=t},expression:"Toggle"}}),e._v(" "),n("a",{staticClass:"d-flex align-items-center",attrs:{href:"/"}},[n("nuxt-img",{attrs:(t={background:"white",fit:"contain",height:"50",preload:""},Object(d.a)(t,"preload",""),Object(d.a)(t,"src","/mcn_header_logo.webp"),Object(d.a)(t,"width","241"),t)})],1)],1),e._v(" "),n(c.a,{staticClass:"mcn-menu flex-grow-0 overflow-hidden",staticStyle:{transition:".5s"},style:e.toggleStyle,attrs:{align:"center",justify:"center","no-gutters":""}},e._l(e.header,(function(link,i){return n(l.a,{key:i,staticClass:"text-decoration-none",style:[e.$vuetify.rtl?{fontSize:"17px"}:{}],attrs:{to:e.routeDestination(link),"active-class":"url-active",exact:"",plain:""},on:{click:function(t){e.Toggle=!e.Toggle}}},[e._v("\n          "+e._s(e.$t(link.title))+"\n        ")])})),1)],1)])]):e._e()}),[],!1,null,null,null).exports),j=n(45),w=n(380),I={components:{McnHeader:N},head:function(){return{meta:[{name:"google-site-verification",content:this.domainGoogleVerificationString},{name:"facebook-domain-verification",content:this.domainFacebookVerificationString}],link:[{rel:"icon",type:"image/x-icon",href:this.getFaviconUrl}]}},data:function(){return{isHydrated:!1}},computed:{domain:function(){return this.$store.getters["salePage/getDomain"]},primaryColor:function(){var t,e;return null!==(t=null===(e=this.domain)||void 0===e?void 0:e.DomainPrimaryColor.content)&&void 0!==t?t:"#0073c0"},secondaryColor:function(){var t,e,n;return null!==(t=null===(e=this.domain)||void 0===e||null===(n=e.DomainSecondaryColor)||void 0===n?void 0:n.content)&&void 0!==t?t:"#0073c0"},domainGoogleVerificationString:function(){var t,e,n;return null!==(t=null===(e=this.domain)||void 0===e||null===(n=e.DomainGoogleVerificationString)||void 0===n?void 0:n.content)&&void 0!==t?t:null},domainFacebookVerificationString:function(){var t,e,n;return null!==(t=null===(e=this.domain)||void 0===e||null===(n=e.DomainFacebookVerificationString)||void 0===n?void 0:n.content)&&void 0!==t?t:null},conicBgColor:function(){return Object.values(this.hexToRgb(this.primaryColor)).join()},getFaviconUrl:function(){var t,e,n,o,l,r;return null!==(t=null!==(e=null===(n=this.getFavicon)||void 0===n||null===(o=n.ImageUrl)||void 0===o?void 0:o.content)&&void 0!==e?e:null===(l=this.domain)||void 0===l||null===(r=l.DomainFavicon)||void 0===r?void 0:r.content)&&void 0!==t?t:w},getFavicon:function(){var t,e;return null===(t=this.domain)||void 0===t||null===(e=t.DomainFaviconGallery)||void 0===e?void 0:e.content}},methods:{hexToRgb:j.b},mounted:function(){this.isHydrated=!0}},T=(n(381),Object(f.a)(I,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"position-relative",staticStyle:{"min-height":"100vh","background-color":"rgb(246, 246, 246)"},style:{"--d-secondary-color":t.secondaryColor,"--d-primary-color":t.conicBgColor}},[e("McnHeader"),t._v(" "),t.isHydrated?e("div",{staticClass:"flex-grow-1",staticStyle:{"min-height":"1px"}},[e("Nuxt",{key:t.$route.fullPath})],1):t._e()],1)}),[],!1,null,null,null));e.a=T.exports},343:function(t,e,n){t.exports={}},344:function(t,e,n){t.exports={}},377:function(t,e,n){"use strict";n(280)},378:function(t,e,n){t.exports=n.p+"img/mcn_header_logo.861fdce.png"},379:function(t,e,n){"use strict";n(281)},380:function(t,e,n){t.exports=n.p+"img/favicon.fada271.png"},381:function(t,e,n){"use strict";n(282)},417:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return _})),n.d(e,"mutations",(function(){return x})),n.d(e,"actions",(function(){return O})),n.d(e,"getters",(function(){return D})),n.d(e,"strict",(function(){return N}));n(11),n(10),n(13),n(3),n(18),n(9),n(19);var o=n(0),l=n(45),r=n(207),c=n(15),d=n(16),m=(n(36),function(){function t(){Object(c.a)(this,t)}return Object(d.a)(t,null,[{key:"reInstantiate",value:function(e,n){if(!Object(l.d)(e)||!Object(l.c)(n))return null;var o=new n;return Object.keys(o).forEach((function(n){var l,r=e[n],c=o[n];o[n].content=c.model?Array.isArray(r.content)?r.content.map((function(e){return t.reInstantiate(e,c.model)})):t.reInstantiate(r.content,c.model):null!==(l=null==r?void 0:r.content)&&void 0!==l?l:null})),o}}]),t}()),f=n(140),v=function(){function t(){Object(c.a)(this,t),this.DomainId={fieldName:"domain_id",fieldTitle:"Domain id",content:null},this.DomainName={fieldName:"domain_name",fieldTitle:"Domain name",content:null},this.DomainUserID={fieldName:"user_id",fieldTitle:"Domain user id",content:null},this.DomainBelongType={fieldName:"domain_belong_type",fieldTitle:"Domain type",content:null},this.DomainIsDefault={fieldName:"domain_is_default",fieldTitle:"Domain is default",content:null},this.DomainTitle={fieldName:"domain_title",fieldTitle:"Domain Title",content:null},this.DomainEmail={fieldName:"domain_contact_email",fieldTitle:"Domain Contact Email",content:null},this.DomainLogo={fieldName:"domain_logo",fieldTitle:"Domain Logo",content:null},this.DomainFavicon={fieldName:"domain_favicon",fieldTitle:"Domain Favicon",content:null},this.DomainDNS={fieldName:"domain_dns",fieldTitle:"Domain Dns",content:null},this.DomainSSL={fieldName:"domain_ssl",fieldTitle:"Domain Ssl",content:null},this.DomainType={fieldName:"domain_type",fieldTitle:"Domain Type",content:null},this.DomainLogoGallery={fieldName:"domain_logo_gallery",fieldTitle:"Domain logo gallery",model:f.a,content:null},this.DomainFaviconGallery={fieldName:"domain_favicon_gallery",fieldTitle:"Domain favicon gallery",model:f.a,content:null},this.DomainPrimaryColor={fieldName:"domain_primary_color",fieldTitle:"Domain primary color",content:null},this.DomainSecondaryColor={fieldName:"domain_secondary_color",fieldTitle:"Domain secondary color",content:null},this.DomainCountryID={fieldName:"domain_type_country_id",fieldTitle:"Domain country id",content:null},this.DomainGoogleVerificationString={fieldName:"google-verification-string",content:null},this.DomainFacebookVerificationString={fieldName:"facebook-verification-string",content:null}}return Object(d.a)(t,[{key:"primaryColor",value:function(){var t;return null===(t=this.DomainPrimaryColor)||void 0===t?void 0:t.content}},{key:"secondaryColor",value:function(){var t;return null===(t=this.DomainSecondaryColor)||void 0===t?void 0:t.content}},{key:"isSSL",value:function(){var t;return null===(t=this.DomainSSL)||void 0===t?void 0:t.content}},{key:"isBrand",value:function(){var e;return(null===(e=this.DomainType)||void 0===e?void 0:e.content)===t.DOMAIN_BRAND_TYPE}},{key:"isCountry",value:function(){var e;return(null===(e=this.DomainType)||void 0===e?void 0:e.content)===t.DOMAIN_COUNTRY_TYPE}},{key:"isGeneral",value:function(){var e;return(null===(e=this.DomainType)||void 0===e?void 0:e.content)===t.DOMAIN_GENERAL_TYPE}}]),t}();v.DOMAIN_BRAND_TYPE="brand",v.DOMAIN_GENERAL_TYPE="general",v.DOMAIN_COUNTRY_TYPE="country";var h=v;function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _=function(){return{savedData:{orders:[],sale_page_referrer_id:null,sale_page_pt:null,click_query:{},client_language:null,client_country:null},pageAddOns:null,client_location:null,domain:null}},x={},O={sendRequest:function(t){var e=t.commit,n=t.state,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.default.sendApiRequest(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({i18n:this.$i18n,axios:this.$mcnApi,commit:e,state:n},l))}},D={getDomain:function(t){return m.reInstantiate(t.domain,h)},isNavBarActive:function(t){var e,n,o;return null===(e=null===(n=t.pageAddOns)||void 0===n||null===(o=n.NavBar)||void 0===o?void 0:o.content)||void 0===e||e}},N=!1},428:function(t,e,n){t.exports=n(301)},45:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));var o=n(12);n(3),n(49),n(17),n(9),n(11),n(33);function l(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:{}}function r(data,t){var e="function"==typeof t?new t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:null):t;return data&&e&&Object.keys(e).forEach((function(t){var n;if(void 0!==data[e[t].fieldName])if(null!==(n=e[t])&&void 0!==n&&n.model){var l=Object(o.a)(data[e[t].fieldName]);if(Array.isArray(data[e[t].fieldName])){var c=[];data[e[t].fieldName].forEach((function(n){return c.push(r(n,e[t].model))})),e[t].content=c}else data[e[t].fieldName]&&"object"===l?e[t].content=r(data[e[t].fieldName],e[t].model):e[t].content=data[e[t].fieldName]}else e[t].type&&"json"===e[t].type&&"string"==typeof data[e[t].fieldName]?e[t].content=JSON.parse(data[e[t].fieldName]):e[t].content=data[e[t].fieldName]})),e}function c(t){try{new t}catch(t){return!1}return!0}var d=function(t){return Object.prototype.toString.call(t).slice(8,-1)},m=function(t){return"Object"===d(t)}},82:function(t,e,n){"use strict";var o={layout:"empty"},l=n(37),component=Object(l.a)(o,(function(){return(0,this._self._c)("div",[this._v("error")])}),[],!1,null,"76d00bf8",null);e.a=component.exports}}]);
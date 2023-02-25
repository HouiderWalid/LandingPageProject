exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue?vue&type=script&lang=js&
/* harmony default export */ var HydrationStatusvue_type_script_lang_js_ = ({
  name: 'HydrationStatus',
  render(h) {
    this.$parent.$once('hook:mounted', () => {
      this.$forceUpdate();
    });
    return h('span', {
      key: this.$parent._isMounted ? 'hydrated' : 'unhydrated'
    }, this.$parent._isMounted ? 'hydrated' : 'unhydrated');
  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HydrationStatusvue_type_script_lang_js_ = (HydrationStatusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HydrationStatusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc12674c"
  
)

/* harmony default export */ var HydrationStatus = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hydration-status.js.map
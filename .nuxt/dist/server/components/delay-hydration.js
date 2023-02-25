exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(18);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration.vue?vue&type=script&lang=js&

/* harmony default export */ var DelayHydrationvue_type_script_lang_js_ = ({
  props: {
    debug: {
      type: Boolean,
      default: false
    },
    forever: {
      type: Boolean,
      default: false
    },
    replayClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      triggerHydration: false
    };
  },
  async mounted() {
    // already mounted or missing plugin api for some reason
    if (this.triggerHydration || !this.$delayHydration) return;
    if (typeof window === 'undefined' || !('requestIdleCallback' in window)) {
      this.triggerHydration = true;
      return;
    }
    const style = 'background: #e2f8e5; color: #2e9127;';
    if (this.forever || this.$delayHydration.config.forever) {
      console.info('%c[NuxtDelayHydration] Running with the "forever" enabled, will never hydrate.', style);
      return;
    }
    const debug = this.debug || this.$delayHydration.config.debug;
    try {
      if (debug) {
        // eslint-disable-next-line no-console
        console.time('[NuxtDelayHydration] Hydration time');
        console.info('%c[NuxtDelayHydration] Started delaying hydration via DelayHydration component.', style);
      }
      // create the hydration race
      const hydrationEvent = await this.$delayHydration.hydrationRace();
      if (debug) {
        console.log(`%c[NuxtDelayHydration] Finished delaying hydration with trigger: "${hydrationEvent}"`, style);
        // eslint-disable-next-line no-console
        console.timeEnd('[NuxtDelayHydration] Hydration time');
      }
      if (this.$delayHydration.config.replayClick && this.replayClick) this.$delayHydration.replayPointerEvent(hydrationEvent, true);
    } catch (e) {
      console.error(e);
    } finally {
      this.triggerHydration = true;
    }
  },
  render(h) {
    return h(external_vue_lazy_hydration_default.a, {
      props: {
        never: true,
        triggerHydration: this.triggerHydration
      }
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DelayHydrationvue_type_script_lang_js_ = (DelayHydrationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DelayHydrationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ee83595e"
  
)

/* harmony default export */ var DelayHydration = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=delay-hydration.js.map
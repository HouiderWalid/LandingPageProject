export const McnHeader = () => import('../..\\components\\McnHeader.vue' /* webpackChunkName: "components/mcn-header" */).then(c => wrapFunctional(c.default || c))
export const McnImage = () => import('../..\\components\\McnImage.vue' /* webpackChunkName: "components/mcn-image" */).then(c => wrapFunctional(c.default || c))
export const InputsBurgerButton = () => import('../..\\components\\inputs\\BurgerButton.vue' /* webpackChunkName: "components/inputs-burger-button" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

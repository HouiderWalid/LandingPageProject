export default {
  data() {
    return {
      isHydrated: false
    }
  },
  computed: {
    makeVisibleOnHydration() {
      return {visibility: this.isHydrated ? 'visible' : 'hidden'}
    }
  },
  mounted() {
    this.isHydrated = true
  }
}

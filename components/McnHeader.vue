<template>
  <v-card v-if="showNavBarActive" class="py-0 mx-0 mt-0 w-100" elevation="2" style="z-index: 10">
    <div class="w-100 d-flex justify-center h-100" style="justify-content: center">
      <div class="mcn-header d-flex flex-wrap w-100 justify-space-between align-center h-100"
           style="min-height: 80px; justify-content: space-between; align-items: center">
        <BurgerButton v-model="Toggle" class="burger-button position-absolute"
                      style="left: -30px; top: 15px; display: none"/>
        <a :style="{maxWidth: isMdAndDown ? '70%' : 'auto'}" class="d-flex align-items-center" href="/"
           style="min-height: 80px; align-items: center">
          <!--            <nuxt-img provider="cloudfront" src="/images/users/avatar-roma_n8B79X4wPwc8qS6H.png"/>-->
<!--          <McnImage :image="domainLogoImage" :src="domainLogoImageUrl" height="50px"
                    image-max-width="150px"
                    image-radius width="auto"/>-->
        </a>
        <v-row :style="toggleStyle" align="center" class="mcn-menu flex-grow-0 overflow-hidden"
               justify="center" no-gutters style="transition: .5s; align-items: center">
          <v-btn v-for="(link, i) in header" :key="i" :style="[$vuetify.rtl ? { fontSize: '17px' } : {}]"
                 :to="link.url === '/' ? localePath(link.url) : (localePath(link.url) + getPageQuery)"
                 active-class="url-active" class="text-decoration-none" exact plain @click="Toggle = !Toggle">
            {{ $t(link.title) }}
          </v-btn>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
import BurgerButton from "./inputs/BurgerButton";
import McnImage from "./McnImage";
import TagConditionalRenderHelper from "../assets/js/mixins/TagConditionalRenderHelper";

export default {
  name: "McnHeader",
  components: {McnImage, BurgerButton},
  mixins: [TagConditionalRenderHelper],
  data() {
    return {
      Toggle: false,
      header: [
        {id: 1, title: 'Home', url: '/'},
        {id: 2, title: 'Products', url: '/products', query: true},
        {id: 3, title: 'FAQ', url: '/faq'},
        {id: 4, title: 'About', url: '/about'},
        {id: 5, title: 'Contact', url: '/contact'},
      ]
    }
  },
  computed: {
    domain() {
      return this.$store.getters["salePage/getDomain"]
    },
    showNavBarActive() {
      return this.isNavBarActive || !['sale_page_name', 'blogs'].includes(this.$route.name)
    },
    isNavBarActive() {
      return this.$store.getters["salePage/isNavBarActive"]
    },
    isMdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown && this.isHydrated
    },
    isLgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp && this.isHydrated
    },
    domainLogoImageUrl() {
      return this.domainLogoImage?.ImageUrl?.content ?? this.domain?.DomainLogo?.content ??
        require('~/assets/images/mcn-logo-with-visible-text.png')
    },
    domainLogoImage() {
      return this.domain?.DomainLogoGallery?.content
    },
    toggleStyle() {
      return this.isLgAndUp ? {height: '80px'} : (this.Toggle ? {height: (this.header.length * 40) + 'px'} : {height: 0})
    },
    getPageQuery() {
      return '?' + Object.keys(this.$route.query).map(key => key + '=' + this.$route.query[key]).join('&')
    }
  }
}
</script>

<style>

</style>

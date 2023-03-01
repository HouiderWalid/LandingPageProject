<template>
  <v-card v-if="showNavBarActive&&isHydrated" class="py-0 mx-0 mt-0 w-100" elevation="2" style="z-index: 10">
    <div class="w-100 d-flex justify-center h-100">
      <div class="mcn-header d-flex flex-wrap w-100 justify-space-between align-center h-100">
        <BurgerButton v-model="Toggle" class="burger-button position-absolute"
                      style="left: -30px; top: 15px; display: none"/>
        <a :style="{maxWidth: isMdAndDown ? '70%' : 'auto'}" class="d-flex align-items-center" href="/">
          <McnImage :image="domainLogoImage" :src="domainLogoImageUrl" height="50px" image-max-width="150px"
                    image-radius width="auto"/>
        </a>
        <v-row :style="toggleStyle" align="center" class="mcn-menu flex-grow-0 overflow-hidden" justify="center"
               no-gutters>
          <v-btn v-for="(link, i) in header" :key="i" :style="[$vuetify.rtl ? { fontSize: '17px' } : {}]"
                 :to="routeDestination(link)" active-class="url-active" class="text-decoration-none" exact plain
                 @click="Toggle = !Toggle">
            {{ $t(link.title) }}
          </v-btn>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
import BurgerButton from "./inputs/BurgerButton";
import McnImage from "./regular-components/McnImage";

export default {
  name: "McnHeader",
  components: {McnImage, BurgerButton},
  data() {
    return {
      Toggle: false,
      isHydrated: false,
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
      return this.domainLogoImage?.ImageUrl?.content ?? this.domain?.DomainLogo?.content ?? require('~/assets/img/mcn-logo-with-visible-text.png')
    },
    domainLogoImage() {
      return this.domain?.DomainLogoGallery?.content
    },
    toggleStyle() {
      return this.isLgAndUp ? {height: '80px'} : (this.Toggle ? {height: (this.header.length * 40) + 'px'} : {height: 0})
    },
  },
  methods: {
    routeDestination(link){
      return link.url === '/' ? this.localePath(link.url) : (this.localePath(link.url) + this.$route.query)
    }
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style>
.mcn-header {
  max-width: 1400px !important;
  width: 90% !important;
}

@media (max-width: 1264px) {
  .burger-button {
    display: flex !important;
  }

  .mcn-header {
    justify-content: center !important;
    flex-direction: column !important;
  }

  .mcn-menu {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
  }
}
</style>

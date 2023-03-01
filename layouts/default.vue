<template>
  <v-app :style="{ '--d-secondary-color': secondaryColor, '--d-primary-color': conicBgColor }"
         class="position-relative" style="min-height: 100vh; background-color: rgb(246, 246, 246)">

    <McnHeader></McnHeader>

    <!-- dont remove the min-height here -->
    <div v-if="isHydrated" class="flex-grow-1" style="min-height: 1px">
      <Nuxt :key="$route.fullPath"/>
    </div>

  </v-app>
</template>

<script>
import McnHeader from "../components/McnHeader";
import {hexToRgb} from "../assets/js/mcn-helpers";

export default {
  components: {
    McnHeader
  },
  head() {
    return {
      meta: [
        {
          name: 'google-site-verification',
          content: this.domainGoogleVerificationString
        },
        {
          name: 'facebook-domain-verification',
          content: this.domainFacebookVerificationString
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: this.getFaviconUrl
        }
      ]
    }
  },
  data() {
    return {
      isHydrated: false,
      McnFavicon: require('~/assets/img/mcn-logo.png'),
    }
  },
  computed: {
    domain() {
      return this.$store.getters["salePage/getDomain"]
    },
    primaryColor() {
      return this.domain?.DomainPrimaryColor.content ?? '#0073c0'
    },
    secondaryColor() {
      return this.domain?.DomainSecondaryColor?.content ?? '#0073c0'
    },
    domainGoogleVerificationString() {
      return this.domain?.DomainGoogleVerificationString?.content ?? null
    },
    domainFacebookVerificationString() {
      return this.domain?.DomainFacebookVerificationString?.content ?? null
    },
    conicBgColor() {
      return Object.values(this.hexToRgb(this.primaryColor)).join()
    },
    getFaviconUrl() {
      return this.getFavicon?.ImageUrl?.content ?? this.domain?.DomainFavicon?.content ?? this.McnFavicon
    },
    getFavicon() {
      return this.domain?.DomainFaviconGallery?.content
    }
  },
  methods: {
    hexToRgb
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>
<style lang="scss">
:root {
  --app-color: #252733;
  --app-secondary-color: #0073c0;
}

.bg-bluish {
  background: conic-gradient(from 90deg at 0 0, rgb(var(--my-color)) 0deg, rgba(var(--my-color), 1) 0deg, rgba(var(--my-color), 0) 360deg);
}

html {
  overflow: auto !important;

  & * {
    word-break: keep-all;
  }
}

* {
  font-family: 'Tajawal', sans-serif !important;
  word-break: break-word !important;
}
</style>

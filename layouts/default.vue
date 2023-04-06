<template>
<!--  <v-app :style="{ '&#45;&#45;d-secondary-color': getSecondaryColor, '&#45;&#45;d-primary-color': conicBgColor }"
         class="position-relative" style="min-height: 100vh; background-color: rgb(246, 246, 246)">

&lt;!&ndash;    <McnHeader/>&ndash;&gt;

    <div class="flex-grow-1" style="min-height: 1px">
      <Nuxt/>
    </div>

  </v-app>-->
  <Nuxt/>
</template>

<script>

import {hexToRgb} from "../assets/js/mcn-helpers";
import McnHeader from "../components/McnHeader";

export default {
  components: {McnHeader},
  computed: {
    domain() {
      return this.$store.getters["salePage/getDomain"]
    },
    getSecondaryColor() {
      return this.domain?.DomainSecondaryColor?.content ?? '#0073c0'
    },
    primaryColor() {
      return this.domain?.DomainPrimaryColor.content ?? '#0073c0'
    },
    conicBgColor() {
      return Object.values(hexToRgb(this.primaryColor) ?? {}).join()
    },
  }
}
</script>
<style lang="scss">
:root {
  --app-color: #252733;
  --app-secondary-color: #0073c0;
}

.normal-text p {
  font-weight: 500 !important;
}

.bg-bluish {
  background: conic-gradient(from 90deg at 0 0, rgb(var(--my-color)) 0deg, rgba(var(--my-color), 1) 0deg, rgba(var(--my-color), 0) 360deg);
}

.ul-pad {
  padding-inline-start: 15px !important;
}

.text-align {
  justify-content: start;
}

.justify {
  justify-content: start;
}

.p-text-size.ltr {
  font-size: 25px;
  line-height: 35px;
}

.p-text-size.rtl {
  font-size: 25px;
  line-height: 35px;
}

.url-active {
  color: rgb(var(--d-primary-color)) !important;
}

html {
  overflow: auto !important;

  & * {
    word-break: keep-all;
  }
}

.page-title-font-size.ltr {
  font-size: 2em !important;
}

.page-title-font-size.rtl {
  font-size: 2em !important;
}

.page-text-font-size.ltr {
  font-size: 1.8em !important;
}

.page-text-font-size.rtl {
  font-size: 1.8em !important;
}

.app-color {
  color: #252733;
}

* {
  font-family: 'Tajawal', sans-serif !important;
  word-break: break-word !important;
}

.btn-font-size.rtl {
  font-size: 25px;
}

.btn-font-size.ltr {
  font-size: 20px;
}

.btn-step-font-size.rtl {
  font-size: 20px;
}

.btn-step-font-size.ltr {
  font-size: 16px;
}

.text-al {
  text-align: start;
}

.sale-page {
  .img-container {
    margin: 3em;

    img {
      width: 20em;
    }
  }

  .sale-page-body {
    background-color: hsl(0, 0%, 100%);
  }

  .divider {
    background-color: black;
    height: 2px;
    width: 75%;
    margin: auto;
  }
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

@media (max-width: 991px) {
  .text-align {
    text-align: center !important;
  }

  .justify {
    justify-content: center !important;
  }
}

@media (max-width: 600px) {
  .text-al {
    text-align: center !important;
  }

  .gallery-block-title {
    margin: 1em 0 !important;
  }

  .p-text-size.ltr {
    font-size: 20px !important;
    line-height: 30px !important;
  }

  .p-text-size.rtl {
    font-size: 20px !important;
    line-height: 30px !important;
  }
}

@media (max-width: 767px) {
  .page-title-font-size.ltr {
    font-size: 1.2em !important;
  }

  .page-title-font-size.rtl {
    font-size: 1.3em !important;
  }

  .page-text-font-size.ltr {
    font-size: 1.2em !important;
  }

  .page-text-font-size.rtl {
    font-size: 1.3em !important;
  }
}

.pulse {
  box-shadow: 0 0 0 0 rgba(var(--d-primary-color), 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}

.mcn-body,
.mcn-header {
  max-width: 1400px !important;
  width: 90% !important;
}

@keyframes pulse {
  0% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(var(--d-primary-color), 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(var(--d-primary-color), 0);
  }

  100% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(var(--d-primary-color), 0);
  }
}

.v-list-item .v-list-item__subtitle {
  line-height: 1.4rem !important;
}
</style>

<template>
  <picture>
    <source type="image/webp" srcset="/mcn_header_logo.webp">
    <nuxt-img height="50" preload src="/mcn_header_logo.png" width="241" background="white" preload fit="contain"/>
  </picture>
</template>

<script>
import Image from "../../assets/js/models/Image";

export default {
  name: "CustomNuxtImg",
  props: {
    image: Image
  }
}
</script>

<style scoped>

</style>

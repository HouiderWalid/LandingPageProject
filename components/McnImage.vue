<template>
  <div class="d-flex justify-content-center align-center h-100" @click="$emit('click')">
    <picture class="d-flex justify-center" v-if="getWebpImage" :style="{ maxWidth, maxHeight: maxHeight, height: height, width }">
      <source v-if="getWebpImage" :srcset="getWebpImagePath" :style="{ borderRadius: imageRadius ? '6px' : 0 }"
        :type="['image', getWebpImageExtension].join('/')">
      <img :alt="alt" :loading="loading" :class="{ 'mcn-card-shadow': border }"
        :style="{ maxWidth, maxHeight: maxHeight, borderRadius: imageRadius ? '6px' : 0 }"
        :src="getImageUrl" :height="height" :width="width" />
    </picture>
    <img v-else-if="src" :loading="loading" :class="{ 'mcn-card-shadow': border }" :alt="alt"
      :style="{ maxWidth, maxHeight: maxHeight, borderRadius: imageRadius ? '6px' : 0 }"
      :src="src" class="d-flex align-center" :height="height" :width="width" />
  </div>
</template>

<script>
export default {
  name: "McnImage",
  props: {
    loading:{
      default: 'eager'
    },
    image: {},
    maxHeight: {
      type: String,
      default: '270px'
    },
    imageRadius: {
      type: Boolean,
      default: false
    },
    imageMaxWidth: {},
    src: {},
    alt: {},
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: '100%'
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maxWidth(){
      return this.imageMaxWidth ? this.imageMaxWidth : 'auto'
    },
    getImageUrl() {
      return this.image?.ImageUrl?.content
    },
    getWebpImage() {
      return this.image?.ImageOtherExtensions?.content?.find?.(i => i?.ImageExtensionsExtension?.content === 'webp')
    },
    getWebpImagePath() {
      return this.getWebpImage?.ImageExtensionsPath?.content
    },
    getWebpImageExtension() {
      return this.getWebpImage?.ImageExtensionsExtension?.content
    }
  }
}
</script>

<style scoped>
</style>

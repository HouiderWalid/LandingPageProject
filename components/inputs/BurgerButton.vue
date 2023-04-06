<template>
  <div class="position-relative">
    <input id="start" type="checkbox" v-model="dataModel"/>
    <label class="container" for="start">
      <div class="bar bar-top"/>
      <div class="void"/>
      <div class="bar bar-middle"/>
      <div class="void"/>
      <div class="bar bar-bottom"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "BurgerButton",
  props: ['value'],
  computed:{
    dataModel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 50px;
  width: 60px;

  .void {
    height: 20%;
  }

  .bar {
    height: 20%;
    background-color: black;
  }

}

label, input {
  position: absolute;
}

label {
  left: 40px;
  cursor: pointer;
}

input {
  display: none;
}

.bar-top, .bar-bottom, .bar-middle {
  transition: .5s;
}

input:checked + .container {

  .bar-top {
    transform: translateY(200%) rotate(45deg);
  }

  .bar-bottom {
    transform: translateY(-200%) rotate(-45deg);
  }

  .bar-middle {
    transform: translateX(-100%);
    opacity: 0;
  }

}
</style>

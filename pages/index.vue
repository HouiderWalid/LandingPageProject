<template>
  <v-app>index
    <v-alert class="mx-4" type="success" :icon="mdiAlert" max-width="500">This is a success alert.</v-alert>
  </v-app>
</template>
<script>
import {mdiAlert} from '@mdi/js'
export default {
  data(){
    return {
      mdiAlert
    }
  }
}
</script>

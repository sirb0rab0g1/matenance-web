<template>
  <v-flex :style="toolbarOnly" class="scroll-y">
    <nuxt-child />
  </v-flex>
</template>

<script>
  import CustomResponsive from '~/plugins/mixins/responsive'
  import Authentication from '~/plugins/authentication'

  export default {
    mixins: [CustomResponsive, Authentication],
    created () {
      this.isVerified()
    }
  }
</script>

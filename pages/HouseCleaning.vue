<template>
  <v-content>
    <no-ssr>
      <global-toolbar
        title="House Cleaning"
        :items="isLogin ? role == 'customer' ? customerItems : supplierItems : items"
        back
        :backRouter="'/'" />
    </no-ssr>

    <navigation-drawer :items="items"/>

    <imaginary-user />
  
    <nuxt-child/>

    <no-ssr>
      <house-cleaning-footer/>
    </no-ssr>

  </v-content>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ROUTERS from '~/plugins/mixins/routers'

  export default {
    mixins: [ROUTERS],
    computed: {
      ...mapGetters('login', ['isLogin', 'role'])
    }
  }
</script>

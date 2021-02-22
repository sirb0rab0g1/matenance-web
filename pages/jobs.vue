<template>
  <v-content style="overflow: hidden !important;">
    <no-ssr>
      <global-toolbar
        title="Job Sheet"
        :items="isLogin ? role == 'customer' ? customerItems : supplierItems : items"
        back
        :backRouter="'/'" />
    </no-ssr>

    <navigation-drawer :items="items"/>

    <login-dialog />

    <registration-dialog />

    <job-future-cancel />

    <add-visit />

    <imaginary-user />
  
    <nuxt-child/>
 
    <no-ssr>
      <jobs-footer />
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

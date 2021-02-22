<template>
  <v-content>
    <!-- v-touch="{
      up: () => swipe('Up'),
      down: () => swipe('Down')
      }"
    > --> <!-- v-scroll="onScroll" -->
    <no-ssr>
      <global-toolbar
        title="Matenance"
        :items="isLogin ? role == 'customer' ? customerItems : supplierItems : items" />
    </no-ssr>

    <!-- <navigation-drawer :items="items"/> -->

    <login-dialog />

    <registration-dialog />

    <imaginary-user />

    <nuxt-child/>

    <no-ssr>
      <base-footer v-if="!isLogin"/>
    </no-ssr>

  </v-content>
</template>

<script>
  import {mapGetters} from 'vuex'
  import { TOOLBAR_EVENT } from '~/plugins/event_variable/variables'
  import ROUTERS from '~/plugins/mixins/routers'

  export default {
    data: () => ({
      footer: true,
      offsetTop: 0,
      scrollValue: 0,
    }),
    computed: {
      ...mapGetters('login', ['isLogin', 'role']),
      title () {
        return _.capitalize('matenance')
      }
    },
    mixins: [ROUTERS],
    created () {
      this.$bus.$on(TOOLBAR_EVENT, this.toogle)
    },
    methods: {
      swipe (direction) {
        if (direction === 'Up') {
          this.footer = true
        } else {
          this.footer = false
        }
      },
      onScroll (e) {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 110) {
          this.offsetTop = (window.pageYOffset || document.documentElement.scrollTop)
          this.footer = false
        } else {
          this.footer = true
        }
      },
      toogle (payload) {
        this.footer = payload
      }
    }
  }
</script>

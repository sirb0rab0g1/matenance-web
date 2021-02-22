<template>
  <v-toolbar dark class="gradient">

    <v-toolbar-items class="pointer" v-if="back" @click="$route.fullPath === '/jobs/suppliers' ? lastRoute === '' ? goTo(backRouter) : proceedLastRoute(lastRoute) : resetLastRoute(backRouter)">
      <v-icon dark class="elevation" style="font-size: 26px !important;" >keyboard_arrow_left</v-icon>
    </v-toolbar-items>

    <v-toolbar-items v-if="crawl()" style="width: 3.5em;" class="hidden-sm-and-up">
    </v-toolbar-items>

    
    <v-spacer v-if="!$vuetify.breakpoint.xl & !$vuetify.breakpoint.lg & !$vuetify.breakpoint.md & !$vuetify.breakpoint.sm"></v-spacer>
    <v-toolbar-title class="pointer" @click="">
        <span class="toolbar-font elevation helvetica-header-mac">
          {{ title }} &nbsp;
        </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items v-if="menu" class="hidden-sm-and-up">
      <v-menu
        min-width="300"
        max-width
        offset-y
        >
        <v-btn
          slot="activator"
          dark
          icon
        >
          <v-icon>dehaze</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="item.condition === 'dialog' ? dialog(item.name) : goTo(item.path)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items> 
  </v-toolbar>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { TOOLBAR_EVENT } from '~/plugins/event_variable/variables'
  import Global from '~/plugins/mixins/global'
  export default {
    props: {
      title: String,
      backRouter: String,
      back: {
        type: Boolean,
        default: false
      },
      menu: {
        type: Boolean,
        default: true
      },
      items: {
        type: [Array, Object],
        default: () => ({
          title: String,
          route: String
        })
      }
    },
    mixins: [Global],
    data: () => ({
      miks: true,
      gender: 'female',
      menstration: true
    }),
    computed: {
      ...mapGetters('navigation', ['navigation', 'lastRoute'])
    },
    methods: {
      ...mapActions('navigation', ['CHANGE_NAVIGATION', 'CHANGE_LAST_ROUTE']),
      ...mapActions('login', ['CHANGE_REGISTRATION']),
      ...mapActions('imaginaryuser', ['CHANGE_CUSTOMER_ACCOUNT']),
      proceedLastRoute (payload) {
        this.CHANGE_LAST_ROUTE('')
        this.goTo(payload)
      },
      resetLastRoute (payload) {
        this.CHANGE_LAST_ROUTE('')
        this.goTo(payload)
      },
      isShow () {
        if (this.nagivation) {
          this.CHANGE_NAVIGATION(!this.navigation)
        } else {
          this.CHANGE_NAVIGATION(!this.navigation)
        }
      },
      dialog (payload) {
        if (payload === 'cus_account') {
          this.CHANGE_CUSTOMER_ACCOUNT(true)
        }
      },
      crawl () {
        let dictionary = ['/', '/faq', '/aboutus', '/logout', '/customer/contact', '/customer/myjobs', '/supplier/myjobs', '/supplier/myjobs', '/supplier/myaccount', '/guest/contact', '/guest/becomeasupplier', '/guest/becomeasupplier/quickregistration', '/guest/becomeasupplier/information', '/supplier/contact', '/supplier/becomeasupplier', '/supplier/becomeasupplier/quickregistration', '/supplier/becomeasupplier/information']
        return (_.includes((dictionary), this.$nuxt.$route.path))
      }
    }
  }
</script>

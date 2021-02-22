<template>
  <v-layout align-center justify-center row wrap fill-height pa-2>
    <v-flex xs12>
      <center>
        <v-flex xs12>
          <span class="helvetica" style="font-size: 50px;">
            <b>
              You Have Been Logged Out
            </b>
          </span>
        </v-flex>

        <v-flex>
          <span class="helvetica" style="font-size: 20px;">Thank you for using matenance</span>
        </v-flex>

        <v-flex>
          <span class="helvetica" style="font-size: 16px;">
            Please <span @click="direct"><u style="color: blue;">CLICK HERE</u></span> to go back
          </span>
        </v-flex>

        <v-flex class="pl-2 pr-2 mt-4">
          <v-divider></v-divider>
        </v-flex>

        <v-flex>
          <v-breadcrumbs class="justify-center" :items="items" divider="|"></v-breadcrumbs>
        </v-flex>
      </center>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'
  import Global from '~/plugins/mixins/global'

  export default {
    data: () => ({
      interval: {},
      value: 0,
      items: [
        {
          text: 'HOME',
          href: '/'
        },
        {
          text: 'ABOUT US',
          href: '/aboutus'
        },
        {
          text: 'FAQ`S',
          href: '/faq'
        }
      ]
    }),
    mixins: [Global],
    methods: {
      ...mapActions('login', ['LOGIN', 'CHANGE_ROLE']),
      ...mapActions('suppliers', ['CHANGE_SUPPLIER_FILTERS', 'CHANGE_ASKS']),
      ...mapMutations('login', ['RESET_LOGIN_STATE']),
      ...mapMutations('suppliers', ['RESET_SUPPLIERS_STATE']),
      ...mapMutations('FindACleaner', ['RESET_FINDCLEANER_STATE']),
      ...mapMutations('Schedule', ['RESET_SCHEDULE_STATE']),
      ...mapMutations('jobs', ['RESET_JOBS_STATE']),
      ...mapMutations('navigation', ['RESET_NAVIGATION_STATE']),
      ...mapMutations('imaginaryuser', ['POTA_CURRENT_USER']),
      direct () {
        this.goTo('/')
        this.RESET_LOGIN_STATE()
        this.RESET_SUPPLIERS_STATE()
        this.RESET_FINDCLEANER_STATE()
        this.RESET_SCHEDULE_STATE()
        this.RESET_JOBS_STATE() // will decide if logout will destroy this store
        this.RESET_NAVIGATION_STATE()
        this.POTA_CURRENT_USER()

        localStorage.removeItem('pk')
        localStorage.removeItem('customer_token')
        localStorage.removeItem('primary_card')
      },
      logout () {
        this.interval = setInterval(() => {
          if (this.value === 10) {
            this.direct()
          }
          this.value += 10
        }, 1000)
      }
    },
    created () {
      this.logout()
    }
  }
</script>

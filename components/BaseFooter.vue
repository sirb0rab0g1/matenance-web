<template>
<v-footer fixed height="auto" v-if="crawl()">
  <div class="gradient footer-container">
    <v-layout row wrap>
      <v-flex xs6 v-if="!isLogin">
        <v-btn @click="registration" dark flat style="margin-left: -10px;">
          <strong>
          <span class="elevation footer">
            Sign Up
          </span>
          </strong>
        </v-btn>
      </v-flex>
      <v-flex xs6 v-if="!isLogin">
        <v-btn dark flat @click="login" style="margin-right: -10px;">
          <strong>
          <span class="elevation footer">
            Login
          </span>
          </strong>
        </v-btn>
      </v-flex>
      <v-flex xs12 v-if="isLogin && crawl()">
        <v-btn dark flat @click="logout" style="margin-right: -10px;">
          <strong>
          <span class="elevation footer">
            Logout
          </span>
          </strong>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</v-footer>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data: () => ({
      icons: [
        'facebook-square'
      ]
    }),
    mixins: [Global],
    computed: {
      ...mapGetters('login', ['modal', 'isLogin'])
    },
    methods: {
      ...mapActions('login', ['CHANGE_MODAL', 'CHANGE_REGISTRATION', 'CHANGE_ROLE', 'LOGIN']),
      login () {
        this.CHANGE_MODAL(!this.modal)
      },
      logout () {
        this.goTo('/logout')
      },
      registration () {
        this.CHANGE_REGISTRATION(true)
      },
      crawl () {
        let dictionary = ['/', '/faq', '/aboutus']
        return (_.includes((dictionary), this.$nuxt.$route.path))
      }
    }
  }
</script>

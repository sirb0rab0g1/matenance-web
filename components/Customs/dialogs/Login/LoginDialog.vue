<template>
    <modal
      name="login"
      height="auto"
      :clickToClose="false"
      :width="320">
      <v-layout row wrap class="mb-2">
        <v-toolbar card prominent class="gradient helvetica">
          <v-toolbar-title style="color: white;">Login</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="close">
            <v-icon style="color: white;">close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-flex class="pl-2 pr-2 mt-2" v-if="logintemp">
          <c-global
            field="textfield"
            v-model="form.username"
            :details="true"
            :error="error.username"
            placeholder="Username" />

          <c-global
            field="textfield"
            type="password"
            v-model="form.password"
            :details="true"
            :error="error.password"
            placeholder="Password" />

          <span @click="forgotpasswordShow">Forgot Password</span>
        </v-flex>

        <v-flex xs12 v-if="logintemp">
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="signUp"
          >
            <span style="color: white;">
              SIGN UP
            </span>
          </v-btn>
            <v-btn
            class="gradient-button"
            @click="login"
          >
            <span style="color: white;">
              LOGIN
            </span>
          </v-btn>
          </v-layout>
        </v-flex>

        <v-flex class="pl-2 pr-2 mt-2" v-if="forgotpassword">
          <c-global field="textfield" placeholder="Email Address"></c-global>
        </v-flex>

        <v-flex xs12 v-if="forgotpassword" class="pl-2 pr-2">
        <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="showconfirmation"
            block
          >
            <span style="color: white;">
                RESET PASSWORD
            </span>
          </v-btn>
          </v-layout>
        </v-flex>

        <v-flex class="pl-2 pr-2 mt-2" v-if="confirmation">
          The password has been send to your email check it now!
        </v-flex>
        <v-flex xs12 v-if="confirmation" class="pl-2 pr-2">
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="reset">
              <span style="color: white;">
                Go Back
              </span>
          </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </modal>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Global from '~/plugins/mixins/global'

  export default {
    computed: {
      ...mapGetters('login', ['modal', 'isLogin']),
      ...mapGetters('imaginaryuser', ['imaginaryuser'])
    },
    watch: {
      'modal' () {
        if (this.modal == true) {
          this.$modal.show('login')
        }
      }
    },
    mixins: [Global],
    data: () => ({
      form: {
        username: null,
        password: null
      },
      error: {
        username: null,
        password: null
      },
      logintemp: true,
      forgotpassword: false,
      confirmation: false
    }),
    methods: {
      ...mapActions('login', ['CHANGE_MODAL', 'CHANGE_REGISTRATION', 'CHANGE_ROLE', 'LOGIN']),
      ...mapActions('imaginaryuser', ['CHANGE_CURRENT_USER']),
      login () {
        if (_.find(this.imaginaryuser, {'email': this.form.username})) {
         let myprofile  = _.keys(_.pickBy(this.imaginaryuser, {'email': this.form.username}))

         let user = this.imaginaryuser[myprofile[0]]
         if (user.email === this.form.username && user.password === this.form.password) {
           localStorage.setItem('pk', user.pk)
           localStorage.setItem('customer_token', user.card[0].customer_token)
  
           this.CHANGE_ROLE(user.role)
           this.CHANGE_CURRENT_USER(user)
           this.LOGIN(true)
           this.close()
         } else {
           this.error.username = 'Invalid Username / Password'
           this.error.password = 'Invalid Username / Password'
         }
        } else {
          this.error.username = 'Email not found!'
          this.error.password = 'Email not found!'
        }
      },
      signUp () {
        this.CHANGE_REGISTRATION(true)
        this.close()
      },
      close () {
        this.CHANGE_MODAL(false)
        this.$modal.hide('login')
      },
      reset () {
        this.forgotpassword = false
        this.confirmation = false
      },
      forgotpasswordShow () {
        this.logintemp = !this.logintemp,
        this.forgotpassword = !this.forgotpassword
      },
      showconfirmation () {
        this.confirmation = !this.confirmation
        this.forgotpassword = !this.forgotpassword
        this.logintemp = !this.logintemp
      }
    }
  }
</script>

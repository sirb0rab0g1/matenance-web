<template>
<v-container>
  <v-layout row wrap>
    <v-flex lg12>

      <c-global field="textfield" placeholder="Street Address" v-model="location.address"></c-global>
      <c-global field="textfield" placeholder="Postcode" mask="####" v-model="location.postCode"></c-global>

      <v-flex xs12 v-if="location.postCode.length > 3" style="margin-top: -10px;">
        <div class="pl-1" style="margin-top: 10px;">There are 3 house cleaning suppliers around you. Email me whenever another supplier is added.</div>
      </v-flex>

      <v-flex lg12 md12 sm12 xs12 v-if="location.postCode.length > 3">
      <c-global field="textfield" placeholder="Name" />
      <c-global field="textfield" placeholder="Email" />
      </v-flex>

      <v-flex class="text-xs-center" v-if="location.postCode.length > 3">
        <v-btn  class="gradient-button" style="color: white;">SAVE</v-btn>
      </v-flex>

      <v-snackbar
        v-model="snackbar"
        :multi-line="true"
        bottom
        :timeout="2000"
      >
        {{ errorMessage }}
      </v-snackbar>

      <!-- post

      <c-global field="textfield" enter v-model="form.username"></c-global>
      <c-global field="textfield" enter v-model="form.password"></c-global>
      <c-global field="textfield" enter v-model="form.first_name"></c-global>
      <c-global field="textfield" enter v-model="form.last_name"></c-global>
      <c-global field="textfield" enter v-model="form.email"></c-global>
      <c-global field="textfield" enter v-model="form.profile.age"></c-global>
      <c-global field="textfield" enter v-model="form.profile.address"></c-global>
      <c-global field="textfield" enter v-model="form.profile.contact_number"></c-global> -->

      <v-alert
        :value="true"
        type="error"
        v-show="error"
      >
        <small class="pl-2">
          user not found
        </small>
      </v-alert>

      <!--
      <v-btn @click="fetchPk()">
        GET PK
      </v-btn>

      <v-btn @click="setForm()">
        GET profile
      </v-btn>

      <v-btn @click="patchForm()">
        PATCH profile
      </v-btn>
      -->

      <v-flex v-if="show">
      <!-- <v-flex xs12 v-for="index in 3" :key="index" class="pt-2">
      <c-card></c-card>
      </v-flex> --> <!-- TEMPORARY COMMENT -->
      </v-flex>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { LOCATION_TEXT_EVENT } from '~/plugins/event_variable/variables'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      form: {
        username: '',
        password:'',
        first_name: '',
        last_name: '',
        email: '',
        profile: {
          age: '',
          address: '',
          contact_number: ''
        }
      },
      location: {
        type: '',
        address: '',
        postCode: ''
      },
      errorMessage: '',
      show: false,
      error: false,
      snackbar: false,
      filters: [
        {
          name : 'Daniel Matsunaga',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Available'
        },
        {
          name : 'Mac Pasmo',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Not Available'
        },
        {
          name : 'Alejandro Ji',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Not Available'
        },
        {
          name : 'Angular Js',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Available'
        },
        {
          name : 'Vue Js',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Not Available'
        },
        {
          name : 'React Js',
          about: 'Loves Eating',
          stat: ['Police Checks', 'Public Liability Insured', 'Equipped', 'Eco Friendly', 'ACN', 'Cert 1 Cleaning', 'Cert 2 Cleaning', 'Cert 3 Cleaning'],
          rate: '24',
          review: '1 Review',
          status: 'Available'
        }
      ]
    }),
    computed: {
      ...mapGetters('accounts', ['user']),
      ...mapGetters('jobs', ['book'])
    },
    mounted () {
      this.setForm()
    },
    beforeRouteLeave (to, from, next) {
      let dictionary = ['/', '/faq', '/about', '/guest/contact']
      if (this.location.postCode === '' || this.location.address === '') { // if back button
        if (_.includes(dictionary, to.fullPath)) {
          next()
        } else {
          this.errorMessage = 'Do not leave any fields empty'
          this.snackbar = true
        }
      } else {
        this.$set(this.location, 'type', 'housecleaning')
        this.CHANGE_LOCATION(this.location)
        next()
      }
    },
    methods: {
      ...mapActions('accounts', ['POST_USER']),
      ...mapActions('accounts', ['FETCH_USER']),
      ...mapActions('accounts', ['PATCH_USER']),
      ...mapActions('jobs', ['CHANGE_LOCATION']),
      setForm () {
        this.location = Object.assign({}, this.location, this.book)
      },
      patchForm () {
        this.PATCH_USER(this.form)
      },
      post () {
        this.POST_USER(this.form)
      },
      fetchPk () {
        this.FETCH_USER(9)
      }
    },
    created () {
      this.post
      this.$bus.$on(LOCATION_TEXT_EVENT, this.post)

      // passing JSON to assume it is from database
      if (process.browser) {
        localStorage.setItem('filter', JSON.stringify(this.filters))
      }
    },
    beforeDestroy () {
      this.$bus.$off(LOCATION_TEXT_EVENT, this.post)
    },
    transition: 'slide'
  }
</script>




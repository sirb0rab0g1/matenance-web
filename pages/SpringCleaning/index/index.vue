<template>
<v-container>
  <v-layout row wrap>
    <v-flex lg12>

      <c-global field="textfield" placeholder="Street Address" v-model="location.address"></c-global>
      <c-global field="textfield" mask="####" placeholder="Postcode" v-model="location.postCode"></c-global>

      <v-flex xs12 v-if="location.postCode.length > 3" style="margin-top: -10px;">
        <div class="pl-1" style="margin-top: 10px;">There are 3 spring cleaning suppliers around you. Email me whenever another supplier is added.</div>
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
      </v-flex>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { LOCATION_TEXT_EVENT } from '~/plugins/event_variable/variables'
  import { mapGetters, mapActions } from 'vuex'
  export default {
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
        this.$set(this.location, 'type', 'springcleaning')
        this.CHANGE_LOCATION(this.location)
        next()
      }
    },
    data: () => ({
      location: {
        address: '',
        postCode: ''
      },
      snackbar: false,
      errorMessage: '',
      show: false,
      error: false
    }),
    computed: {
      ...mapGetters('jobs', ['spring'])
    },
    mounted () {
      this.setForm()
    },
    methods: {
      ...mapActions('jobs', ['CHANGE_LOCATION']),
      setForm () {
        this.location = Object.assign({}, this.location, this.spring)
      }
    },
    transition: 'slide'
  }
</script>




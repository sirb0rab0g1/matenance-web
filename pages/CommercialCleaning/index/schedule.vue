<template>
  <v-container style="color: #424242;">
    <v-layout row wrap>
      <v-flex lg12>
      <v-flex>
        <c-global field="combofield" placeholder="Hours" v-model="schedule.hours" :items="hoursChoices"></c-global>
        <commercial-cleaning-schedule />
        <c-global field="combofield" placeholder="Frequency" v-model="schedule.frequency" :items="frequencyChoices"></c-global>
        <c-global field="combofield" placeholder="Day/s" :multiple="true" v-model="schedule.days" :items="daysChoices"></c-global>
      </v-flex>
      
      <v-flex xs12 style="margin-top: -20px;">
        <v-radio-group class="pasmo" v-model="schedule.radio" row :mandatory="false" style="margin-bottom: -15px;">

       <v-radio color="light-blue darken-3" value="I will Provide a Key">
         <div slot="label">
           <span style="color: #424242;" class="helvetica">
             I will Provide a Key
           </span>
         </div>
      </v-radio>
      <v-radio color="light-blue darken-3" value="Fix Start Time">
        <div slot="label">
          <span style="color: #424242;" class="helvetica">
            Fix Start Time
          </span>
        </div>
      </v-radio>
      </v-radio-group>
      </v-flex>
        
      <c-global field="timefield" :placeholder="schedule.radio ===  'I will Provide a Key' ? 'Start After' : 'Start'" v-model="schedule.startTime"></c-global>
      <c-global field="timefield" placeholder="Finish By" v-model="schedule.endTime"></c-global>
      <c-global field="datefield" placeholder="Commence From" v-model="schedule.date"></c-global>

      <v-snackbar
        v-model="snackbar"
        :multi-line="true"
        bottom
        :timeout="2000"
      >
        {{ errorMessage }}
      </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import dummy from '~/plugins/mixins/global_dummy'
  export default {
    beforeRouteLeave (to, from, next) {
      let dictionary = ['/', '/faq', '/about', '/jobs/suppliers', '/guest/contact']
      if (this.schedule.hours === '' && this.schedule.frequency === '' && this.schedule.days.length <= 0 && this.schedule.startTime === '' && this.schedule.endTime === '' && this.schedule.date === '') {
        if (_.includes(dictionary, to.fullPath)) {
          next()
        } else {
          this.errorMessage = 'Do not leave any fields empty'
          this.snackbar = true
        }
      } else {
        this.$set(this.schedule, 'type', 'commercialcleaning')
        this.CHANGE_SCHEDULE(this.schedule)
        next()
      }
    },
    mixins: [dummy],
    data: () => ({
      p1: {
        starttime: {model: null, placeholder: 'Start', field: 'timefield'},
        finishby: {model: null, placeholder: 'Finish By', field: 'timefield'}
      },
      schedule: {
        hours: '',
        frequency: '',
        days: [],
        radio: '',
        startTime: '',
        endTime: '',
        date: ''
      },
      defaultIcon: 'arrow_drop_down',
      radios: '',
      select: null,
      daysModel: null,
      frequencyModel: null,
      called: false,
      hours: null,
      startTime: null,
      errorMessage: '',
      snackbar: false
    }),
    mounted () {
      this.setForm()
    },
    computed: {
      ...mapGetters('jobs', ['commercial'])
    },
    methods: {
      ...mapActions('navigation', ['CHANGE_MODAL']),
      ...mapActions('jobs', ['CHANGE_SCHEDULE']),
      test () {
        console.log(this.schedule)
      },
      change (payload) {
        this.CHANGE_MODAL(payload)
      },
      setForm () {
        this.schedule = Object.assign({}, this.schedule, this.commercial)
      }
    },
    transition: 'slide'
  }
</script>

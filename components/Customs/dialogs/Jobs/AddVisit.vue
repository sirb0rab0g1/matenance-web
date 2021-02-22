<template>
<div>
  <modal
    name="future"
    height="auto"
    :width="320"
    :clickToClose="false"
    >
    <v-layout row wrap class="mb-2">
      <span @click="debug">
        DEBUG
      </span>
      <v-date-picker
        v-model="date"
        v-if="!modal"
        :width="320"
        :allowed-dates="allowedDates"
        />
      
      <v-flex v-else>
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 16px;">
          {{ !isSave ? 'ASK CLEANER' : 'CHOOSE CLEANER' }}
        </v-flex>
        
        
        <v-flex v-if="isCardAsked" xs12 :width="320" style="height: 420px;" class="overflow-y">
          <v-flex
            xs12
            v-for="(item, index) in filters"
            :key="index"
            class="pt-2"
            @click="tryx(item, index)">
            <c-card
              :name="item.name"
              :about="item.about"
              :stat="item.stat"
              :rate="item.rate"
              :review="item.review"
              :status="item.status"
              :idx="index"
              />
          </v-flex>
          </v-flex>
          <v-flex v-else>
            <h4>
              Message sent! You will receive responses via sms and you can check back in here via the (future) visits page. It’s safe to exit now.
            </h4>
          </v-flex>
          <v-snackbar
            v-model="snackbar"
            :timeout="2000">
            {{ errorMessage }}
          </v-snackbar>
        </v-flex>

        <v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="cancel()"
            v-if="isCardAsked"
          >
            <span style="color: white;">
              EXIT
            </span>
          </v-btn>
          <v-btn
            class="gradient-button"
            @click="!modal ? choose() : isCardAsked ? ask() : exit()"
          >
            <span style="color: white;">
              {{ !modal ? 'CHOOSE' : isCardAsked ? 'ASK' : 'EXIT' }}
            </span>
          </v-btn>
          <v-btn
            class="gradient-button"
            v-if="modal && checker"
            @click="save()"
            >
            <span style="color: white;">
              CONFIRM
            </span>
          </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </modal>
  </div>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import { SUPPLIER_ASK_CARD } from '~/plugins/event_variable/variables'

  export default {
    computed: {
      ...mapGetters('jobs', ['addVisit', 'cleaners']),
      ...mapGetters('suppliers', ['filters', 'future_ask', 'future_confirm', 'future_date']),
      checker () {
        return (_.find(this.future_ask, {'date': this.future_date}))
      } 
    },
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      errorMessage: '',
      snackbar: false,
      filter: [],
      asked: [],
      isSave: false,
      asks: false,
      isCardAsked: true // purpose: show / hide card after sending sms
    }),
    methods: {
      ...mapActions('jobs', ['CHANGE_DATE', 'CHANGE_CLEANERS','CHANGE_VISIT', 'CHANGE_FUTURE_VISIT']),
      ...mapActions('suppliers', ['CHANGE_FUTURE_DATE', 'CHANGE_FUTURE_ASK']),
      ...mapMutations('suppliers', ['RESET_FUTURE_ASK', 'RESET_FUTURE_CONFIRM']),
      ...mapMutations('jobs', ['RESET_FUTURE']),
      choose () {
        if (!_.isEmpty(this.date)) {
          this.CHANGE_FUTURE_DATE(moment(this.date).format('l'))
          this.modal = !this.modal
        }
      },
      tryx (payload, index) { // assume index is the pk
        this.$set(payload, 'date', this.future_date)
        this.$set(payload, 'idx', index)

        if (_.find(this.asked, {'idx': payload.idx, 'date': payload.date})) {
          _.remove(this.asked, payload)
        } else {
          this.asked.push(payload)
        }
        console.table(this.asked)
      },
      debug () {
        this.RESET_FUTURE_ASK()
        this.RESET_FUTURE_CONFIRM()
        this.RESET_FUTURE()
        alert('clicked debug mode')
      },
      ask () {
        this.asks = true
        this.CHANGE_FUTURE_DATE('')
        //this.modal = false
        this.$bus.$emit(SUPPLIER_ASK_CARD, this.asks)
        this.CHANGE_FUTURE_ASK(this.asked)
        this.asked = []
        this.isCardAsked = false
      },
      exit () {
          this.isCardAsked = true
          this.modal = false
          this.cancel()
      },
      // if ang sulod sa future_confirm naa sa future_ask
      save () {
          if (this.asked.length > 1 || this.asked.length < 1) {
            this.errorMessage = 'Can choose only 1 future visit'
            this.snackbar = true
          } else {
            this.CHANGE_FUTURE_VISIT({date: this.future_date, name: this.asked[0].name, idx: this.asked[0].idx, status: 'Choosen'})
            this.CHANGE_DATE('')
            this.CHANGE_VISIT('')
            this.$modal.hide('future')
            this.isSave = false
            this.asked = []
          }
      },
      setFilter () {
        this.filter = Object.assign([], this.filter, this.filters)
      },
      cancel () {
        this.$modal.hide('future')
        this.CHANGE_VISIT('')
        this.CHANGE_DATE('')
        this.CHANGE_FUTURE_DATE('')
        // this.RESET_FUTURE_CONFIRM()
        this.isSave = false
        this.modal = false

        this.asked = []
      },
      allowedDates: val => moment().format('YYYY-MM-DD').toString() <= val
    },
    mounted () {
      this.setFilter()
    },
    mixins: [Global],
    watch: {
      addVisit () {
        if (!_.isEmpty(this.addVisit)) {
          this.$modal.show(_.toString(this.addVisit))
        } else {
          this.$modal.hide('future')
        }
      }
    }
  }
</script>


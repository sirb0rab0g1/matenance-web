import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'

export default {
  computed: {
    ...mapGetters('jobs', ['visits']),
    ...mapGetters('imaginaryuser', ['currentUser']),
    futureVisit () {
      return this.visits.future
    },
    pastVisit () {
      return this.visits.past
    }
  },
  methods: {
      ...mapActions('jobs', ['CHANGE_PAST_VISIT', 'UPDATE_FUTURE_VISIT', 'CHANGE_CHARGE']),
    goTo (route) {
      this.$router.push(route)
    },
    toUpperCase(payload) { // using lodash
      return _.upperCase(payload)
    },
    startCase(payload) {
      return _.startCase(payload)
    },
    parse(payload) {
      console.log(`$${payload.toLocaleString()}`)
    },
    floor2(payload) {
      return _.floor(payload, 2)
    },
    parseDate (payload) {
      /*
        REMINDER: THIS WILL BE RE IMPLEMENTENDED.
      */
      /*
        NOTE: This variable is debugging purposes
        let todate =  moment(payload).set({'hour':8, 'minute': 1}).format('l LT') */
      let todate =  moment(payload).format('l LT')
      //let todate =  moment(payload).set({'hour':8, 'minute': 10}).format('l LT')
      let datenow = moment().format('l') + ' ' + moment().format('LT')
      if (moment(datenow).isAfter(todate) || moment(datenow).isSame(todate)) {
        if (_.find(this.futureVisit, {'date': moment(datenow).format('l')})) {
            let index = _.keys(_.pickBy(this.futureVisit, {'date': moment(datenow).format('l')}))

            let toPast = {
                days: moment(payload).format('dddd'),
                date: payload,
                status: 'Pending',
                review: 'Pending'
            }

            let intitalCharge = {
                amount: 400,
                currency: 'AUD',
                description: 'test charge 2',
                email: this.currentUser.email
            }

            // remove in future
            this.UPDATE_FUTURE_VISIT(_.toInteger(index[0]))

            //CHARGE
            this.CHANGE_CHARGE(intitalCharge).then(data => {
                let setter = Vue.set

                setter(data.response, 'days', moment(payload).format('dddd'))
                setter(data.response, 'date', payload)
                setter(data.response, 'status', 'pending')
                setter(data.response, 'review', 'pending')

                // push in past
                this.CHANGE_PAST_VISIT(data.response)
            })
        }
      } else {
        return moment(todate).format('l')
      }
    },
    getParsedTotal (payload) {
      return _.toNumber(payload)
    },
    round (payload) {
      let y = _.toString(payload)
      let split = _.split(y, '.', 2)
      let toInteger = _.toInteger(split[1])
        if ((toInteger === 0 || toInteger > 9) && toInteger <= 25) {
        return (split[0] + '.' + '25')
      } else if (toInteger > 25 && toInteger <= 50) {
        return (split[0] + '.' + '50')
      } else if (toInteger > 50 && toInteger <= 75) {
        return (split[0] + '.' + '75')
      } else if (toInteger > 75) {
        return ((_.toInteger(split[0]) + 1) + '.' + '00')
      } else if (toInteger > 0 && toInteger <= 9) {
        return ((_.toInteger(split[0]) + 1) + '.' + '00')
      }
    },
    modalParser (payload) {
      return _.toString(payload)
    }
  },
  data: () => ({
    titleWithPointer: 'pointer helvetica-header', // for font purposes,
    titleWithHelvetica: 'pointer helvetica'
  }),
}

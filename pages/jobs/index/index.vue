<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>
      <v-flex xs12>
    <v-data-table
      :items="form"
      class="elevation-1"
      hide-actions
      hide-headers
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td> 
      <td @click="(props.item.name === 'Start Time' || props.item.name === 'Finish By') && edit === true ? date(props.item.name) : ''">
        <span v-if="edit === false">
          {{ parser(props.item.value) }}
        </span>
        <c-global
          :class="props.item.name === 'Frequency' || props.item.name === 'Days' || props.item.name === 'Start Time' || props.item.name === 'Finish By' ? 'mt-2' : 'mb-2'"
          v-else
          :disabled="props.item.name === 'Job Type' ? true : false"
          v-model="props.item.value"
          :items="props.item.name === 'Frequency' ? frequencyChoices : props.item.name === 'Days' ? daysChoices : []"
          :multiple="props.item.name === 'Days' ? true : false"
          :field="props.item.name === 'Frequency' || props.item.name === 'Days' ? 'combofield' : props.item.name === 'Start Time' || props.item.name === 'Finish By' ? 'timefield' : 'textfield'"
          :placeholder="props.item.name === 'Start Time' || props.item.name === 'Finish By' ? props.item.name : ' '"
          label=" "
          :textIcon="props.item.name === 'Supplier' ? 'edit' : ''"
          :textAppendRoute="'/jobs/suppliers'"/>
      </td>

    </template>
    </v-data-table>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <v-flex>
        <span class="child-size" >Job Notes {{ note.type }}</span>
      </v-flex>
      <v-flex>
        <v-textarea
        outline
        class="my-textarea"
        auto-grow
        hide-details
        name="input-7-4"
        v-model="note.type === 'template' ? note.templated : note.custom"
        ></v-textarea>
      </v-flex>
    </v-flex>
    <v-flex xs12 class="mt-2">
      <v-flex>
        <span class="child-size" >Secure Notes</span>
      </v-flex>
      <v-flex>
        <c-global field="textfield" class="my-job" v-model="note.secure" placeholder=" "></c-global>
      </v-flex>
    </v-flex>
    <v-flex style="margin-top: -2px;">
          <span style="font-size: 16px;">
            Only seen by the service provider confirmed to provide the service
          </span>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('jobs', ['edit','book', 'commercial', 'spring' ,'bond' ,'carpet', 'notes', 'commercialnotes', 'springnotes', 'bondnotes', 'carpetnotes']),
      ...mapGetters('navigation', ['lastRoute'])
    },
    methods: {
      date (payload) {
        console.log(payload)
      },
      parser (payload) {
        if (_.isArray(payload)) {
          return _.join(payload, ' + ')
        } else {
          return payload
        }
      },
      parseForm () {
        let lastRoute = this.lastRoute.split('/')
        let parsed = _.toLower(lastRoute[1])

        if (parsed === 'housecleaning') {
          for (let prop in this.book) {
            this.form[this.counter].value = this.book[prop]
            this.counter = this.counter + 1
          }
          this.counter = 0
        } else if (parsed === 'commercialcleaning') {
          console.log('em here')
          for (let prop in this.commercial) {
            this.form[this.counter].value = this.commercial[prop]
            this.counter = this.counter + 1
          }
          this.counter = 0
        } else if (parsed === 'springcleaning') {
          for (let prop in this.spring) {
            this.form[this.counter].value = this.spring[prop]
            this.counter = this.counter + 1
          }
          this.counter = 0
        } else if (parsed === 'finalbondcleaning') {
          for (let prop in this.bond) {
            this.form[this.counter].value = this.bond[prop]
            this.counter = this.counter + 1
          }
          this.counter = 0
        } else if (parsed === 'carpetcleaning') {
          for (let prop in this.carpet) {
            this.form[this.counter].value = this.carpet[prop]
            this.counter = this.counter + 1
          }
          this.counter = 0
        }
      },
      parseNotes () {
        let lastRoute = this.lastRoute.split('/')
        let parsed = _.toLower(lastRoute[1])

        if (parsed === 'housecleaning') {
          this.note = Object.assign({}, this.note, this.notes)
        } else if (parsed === 'commercialcleaning') {
          this.note = Object.assign({}, this.note, this.commercialnotes)
        } else if (parsed === 'springcleaning') {
          this.note = Object.assign({}, this.note, this.springnotes)
        } else if (parsed === 'finalbondcleaning') {
          this.note = Object.assign({}, this.note, this.bondnotes)
        } else if (parsed === 'carpetcleaning') {
          this.note = Object.assign({}, this.note, this.carpetnotes)
        }
      },
      resetForm () {
        this.form = this.reset
      }
    },
    mounted () {
      this.parseForm()
      this.parseNotes()
    },
    data () {
      return {
        note: {},
        counter: 0,
        frequencyChoices: [
          'Weekly',
          'Fortnightly',
          '3 Weekly',
          '4 Weekly',
          'Quarterly',
          'Bi-Annually',
          'Yearly'
        ],
        daysChoices: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        form: [
          {
            name: 'Job Type',
            value: ''
          },
          {
            name: 'Address',
            value: ''
          },
          {
            name: 'Postcode',
            value: null
          },
          {
            name: 'Hours of labour',
            value: null,
          },
          {
            name: 'Frequency',
            value: ''
          },
          {
            name: 'Status',
            value: ''
          },
          {
            name: 'Days',
            value: []
          },
          {
            name: 'Start Time',
            value: ''
          },
          {
            name: 'Finish By',
            value: ''
          },
          {
            name: 'Access',
            value: ''
          },
          {
            name: 'Supplier',
            value: ''
          }
        ],
        reset: [
          {
            name: 'Job Type',
            value: ''
          },
          {
            name: 'Address',
            value: ''
          },
          {
            name: 'Postcode',
            value: null
          },
          {
            name: 'Hours of labour',
            value: null,
          },
          {
            name: 'Frequency',
            value: ''
          },
          {
            name: 'Status',
            value: ''
          },
          {
            name: 'Days',
            value: []
          },
          {
            name: 'Start Time',
            value: ''
          },
          {
            name: 'Finish By',
            value: ''
          },
          {
            name: 'Access',
            value: ''
          },
          {
            name: 'Supplier',
            value: ''
          }
        ]
      }
    }
  }
</script>

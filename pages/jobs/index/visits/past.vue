<template>
  <v-flex style="margin-top: -15px;">
    <v-btn @click="reset">RESET PAST</v-btn>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1 my-custom-table"
        hide-actions
      >
      <template slot="items" slot-scope="props">
        <td >{{ props.item.date }}</td>
        <td>{{ props.item.days }}</td>
        <td @click="$modal.show('ratings')"><span style="color: green;"><u>{{ props.item.review }}</u></span></td>
        <td>{{ props.item.status }}</td>
        <td @click="issueRefund(props.item.token)">REFUND</td>
      </template>
      </v-data-table>
    </v-card>

    <modal
      name="ratings"
      height="auto"
      :width="320">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          Ratings
        </v-flex>

        
        <v-flex xs12>
          <v-layout row wrap>
          <v-flex xs6 pa-2>
          <v-btn
            :class="option === 'happy' ? 'green-gradient-button' : 'gradient-button'"
            block
            @click="changeChoices('happy')"
          >
            <span style="color: white;">
              <u>Happy (5 stars)</u>
            </span>
          </v-btn>

          <!-- green-gradient-button -->

          <center>
          <v-icon style="font-size: 32px;">
            sentiment_very_satisfied
          </v-icon>
          </center>
          </v-flex>
          <v-flex xs6 pa-2>
          <v-btn
            :class="option === 'unhappy' ? 'red-gradient-button' : 'gradient-button'"
            block
            @click="changeChoices('unhappy')"
          >
            <span style="color: white;">
              <u>Unhappy (1 stars)</u> 
            </span>
          </v-btn>
          <center>
          <v-icon style="font-size: 32px;">
            sentiment_very_dissatisfied
          </v-icon>
          </center>
          </v-flex>
          </v-layout>
        </v-flex>

        <v-flex v-if="option === 'happy'" class="pa-3">
          <c-global field="textfield" placeholder="Review"></c-global>
        </v-flex>

        <v-flex class="pr-2 pl-2" v-else>
          <v-flex class="overflow-y" style="height: 250px;">
            <v-switch v-for="(item, index) in unhappy" :key="index" style="margin-top: -2px; margin-bottom: -24px;" v-model="people" :label="unhappy[index]" :value="unhappy[index]"/>
          </v-flex>
          
        </v-flex>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
            <v-btn
            class="gradient-button"
            @click="$modal.hide('ratings')"
          >
            <span style="color: white;">
              CLOSE
            </span>
          </v-btn>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('ratings')"
          >
            <span style="color: white;">
              SAVE
            </span>
          </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </modal>
  </v-flex>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data: () => ({
      option: 'happy',
      pasmoxd: '',
      ratingFive: 5,
      ratingOne: 1,
      headers: [
        {
          text: 'Date', sortable: false
        },
        { text: 'Day', sortable: false },
        { text: 'Status', sortable: false },
        { text: 'Payment', sortable: false },
        { text: 'REFUND', sortable: false }
      ],
      items: [],
      unhappy: [
        'Customer Service & Re-Clean Service',
        'Punctuality',
        'Hygiene',
        'Equipment',
        'Skill Set & Task Ability',
        'Ability to Follow Direction',
        'Attention to Detail of Putting Things Back',
        'Communication',
        'Security Mindfulness',
        'A Safety Near Miss',
        'A Safety Incident / Rrequiring First Aid',
        'Damage to Property',
        'Suspicious Behaviour or Invalid Documents',
        'Criminal Activity'
      ],
      people: []
    }),
    mounted () {
      this.setItem()
    },
    watch: {
      pastVisit () {
        this.items = Object.assign([], this.items, this.pastVisit)
      }
    },
    computed: {
      ...mapGetters('jobs', ['visits']),
      pastVisit () {
        return this.visits.past
      }
    },
    methods: {
      ...mapActions('jobs', ['CHANGE_REFUND']),
      ...mapMutations('jobs', ['RESET_PAST']),
      reset () {
        this.RESET_PAST()
      },
      changeChoices (payload) {
        this.option = payload
      },
      setItem () {
        this.items = Object.assign([], this.items, this.pastVisit)
      },
      issueRefund (payload) {
        this.CHANGE_REFUND(payload).then(data => {
         console.log(data)
        })
      }
    }
  }
</script>

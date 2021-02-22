<template>
  <v-flex style="margin-top: -15px;">
    <v-btn @click="reset()">RESET FUTURE</v-btn>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1 my-custom-table"
        hide-actions
        no-data-text='Attach supplier to generate visits'
      >
        <template slot="items" slot-scope="props">
        <td>
          <span>
            {{ parseDate(props.item.date) }}
          </span>
        </td>
        <td class="text-xs-right">
          <span> {{ props.item.name }}</span>
        </td>
        <td class="text-xs-right">
          <v-flex v-if="props.item.status === 'Choosen'">
            <v-layout row wrap>
              <v-flex lg6 md6 sm6 xs6 pl-2 pr-2>
                <span style="color: green;">Book</span>
              </v-flex>
              <v-flex lg6 md6 sm6 xs6 pl-2 pr-2>
                <span style="color: grey;" @click="setCancel(props.index)">Cancel</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex v-else>
            <span style="color: red;">Cancelled</span>
          </v-flex>
        </td>
      </template>
      </v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  // import moment from 'moment'
  import Global from '~/plugins/mixins/global'

  export default {
    data: () => ({
      headers: [
        {
          text: 'Date', sortable: false
        },
        { text: 'Supplier', sortable: false, align: 'right'},
        { text: 'Status', sortable: false, align: 'right'}
      ],
      items: []
    }),
    computed: {
      ...mapGetters('jobs', ['visits']),
      futureVisit () {
        return this.visits.future
      }
    },
    mixins: [Global],
    methods: {
      ...mapActions('jobs', ['CHANGE_CANCEL_INDEX']),
      ...mapMutations('jobs', ['RESET_FUTURE']),
      setTable () {
        this.items = Object.assign([], this.items, this.futureVisit)
      },
      setCancel (payload) {
        this.CHANGE_CANCEL_INDEX(payload)
      },
      reset () {
        this.RESET_FUTURE()
      }
    },
    mounted () {
      this.setTable()
    },
    watch: {
      futureVisit () {
        this.setTable()
      }
    }
  }
</script>
 

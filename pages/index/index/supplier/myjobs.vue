<template>
  <v-layout row wrap>
    <v-flex class="scroll-y pa-1" :style="toolbarOnly">
      <v-flex xs12 v-if="!hehe" class="pa-2">
      <span class="child-size">
        <b>You have no Jobs at this stage</b>
      </span><br/><br/>
      <span class="child-size">
        1. Offers are received by text message 
      </span><br/><br/>
      <span class="child-size">
        2. Respond ASAP
      </span><br/><br/>
      <span class="child-size">
        3. If your recieve another text confirming... your job will display here
      </span>

      <v-btn @click="changejob">click here to show sample jobs</v-btn>
      </v-flex>

      <v-flex xs12 v-else>
        <v-card>
          <v-flex xs12 style="margin-top: -15px;" class="helvetica">
      <v-radio-group class="pasmo" v-model="pastOrFuture" row :mandatory="false" style="margin-bottom: -15px; margin-top: 8px;">
        <v-radio color="light-blue darken-3" value="past">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Past
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="future">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Future
            </span>
          </div>
        </v-radio>
      </v-radio-group>
      </v-flex>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td @click="$modal.show('ratings')">{{ props.item.headline }}</td>
            <td>{{ props.item.type }}</td>
            <td>{{ props.item.action }}</td>
            <td>{{ props.item.hours }}</td>
            <td>
              08:00am 03:00pm
            </td>
            <td>{{ props.item.subtitle }}</td>
            <td>
              <span class="mr-3 pointer"><u>View</u></span><span class="mr-3"><u>Booked</u></span><span@click="dialog = true"><u>Cancel</u></span>
            </td>
          </template>
        </v-data-table>
        </v-card>
      </v-flex>

      <v-dialog
        v-model="dialog"
        width="500"
        transition=""
      >
        <v-card>
          <v-toolbar card prominent class="gradient helvetica">
          <v-toolbar-title style="color: white;">CANCEL VISIT</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="dialog = false">
            <v-icon style="color: white;">close</v-icon>
          </v-btn>
        </v-toolbar>
  
          <v-card-text>
            Are you sure do you want to cancel this visit ?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            class="gradient-button"
            @click="dialog = false"
          >
            <span style="color: white;">
              CONFIRM
            </span>
          </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
  import CustomResponsive from '~/plugins/mixins/responsive'

  export default {
    mixins: [CustomResponsive],
    data: () => ({
      hehe: false,
      id: '',
      pastOrFuture: 'past',
      dialog: false,
      headers: [
        {
          text: 'DATE', sortable: false
        },
        { text: 'JOBTYPE', sortable: false },
        { text: 'LOCATION', sortable: false },
        { text: 'HOURS', sortable: false },
        { text: 'TIME', sortable: false },
        { text: 'PAYMENT STATUS', sortable: false },
        { text: 'ACCOUNT', sortable: false }
      ],
      items: [
        { id: 1, type: 'housecleaning', action: '30 small St New Market QLD 4051', hours: '3 hrs', headline: '13/11/2018', title: 'Ali Connors', subtitle: 'Declined' },
        { id: 2, type: 'springcleaning', action: '30 small St New Market QLD 4051', hours: '2 hrs', headline: '12/11/2018', title: 'me, Scrott, Jennifer', subtitle: 'Held' },
        { id: 3, type: 'springcleaning', action: '30 small St New Market QLD 4051', hours: '1 hrs', headline: '06/11/2018', title: 'Sandra Adams', subtitle: 'Held' },
        { id: 4, type: 'carpetcleaning', action: '30 small St New Market QLD 4051', hours: '4 hrs', headline: '05/11/2018', title: 'Trevor Hansen', subtitle: 'Complete' },
        { id: 5, type: 'housecleaning', action: '30 small St New Market QLD 4051', hours: '4 hrs', headline: '30/10/2018', title: 'Britta Holt', subtitle: 'Complete' }
      ],
      jobs: [
        { title: 'JobID', value: '101010101010'},
        { title: 'Job Type', value: 'Domestic Cleaning'},
        { title: 'Address', value: '30 Small St Aldery'},
        { title: 'Price Per Visit', value: '$65.00 (inc GST)'},
        { title: 'Frequency', value: 'Weekly'},
        { title: 'Days', value: 'Monday + Tuesday + Wednesday'},
        { title: 'Hours', value: '2'},
        { title: 'Time', value: '8:00am - 3:00pm'},
        { title: 'Access', value: 'I Will Provide a key'},
        { title: 'Customer', value: 'Angela C'},
        { title: 'Status', value: 'Active'}
      ]
    }),
    methods: {
      changejob () {
        this.hehe = true
      },
      show (payload) {
        this.id = _.toString(payload)
        this.xd(this.id)
      },
      xd (payload) {
        this.$modal.show(payload)
      },
      close (payload) {
        this.$modal.hide(payload)
        this.id = ''
      }
    }
  }
</script>

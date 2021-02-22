<template>
<v-dialog
  v-model="dialog"
  persistent
  width="500"
  >
  <v-card>
    <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
      CANCEL FUTURE VISIT
    </v-flex>
    
    <h4 class="pa-3">
      Are you sure you want to cancel visit ?
    </h4>

    <v-divider></v-divider>

    <v-flex xs12>
      <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="proceed()"
          >
            <span style="color: white;">
              Yes
            </span>
          </v-btn>
          <v-btn
            class="gradient-button"
            @click="cancel()"
          >
            <span style="color: white;">
              No
            </span>
          </v-btn>
          </v-layout>
        </v-flex>
  </v-card>
</v-dialog>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters('jobs', ['cancelIdx', 'visits']),
    },
    data: () => ({
      idx: null,
      dialog: false
    }),
    methods: {
      ...mapActions('jobs', ['CHANGE_CANCEL_INDEX', 'UPDATE_CANCEL_INDEX']),
      cancel () {
        this.CHANGE_CANCEL_INDEX('')
      },
      proceed () {
        this.UPDATE_CANCEL_INDEX({idx: this.cancelIdx, status: 'cancelled'})
        this.cancel()
      }
    },
    watch: {
      cancelIdx () {
        if (this.cancelIdx === '') {
          this.dialog = false
        } else {
          this.dialog = true
        }
      }
    }
  }
</script>


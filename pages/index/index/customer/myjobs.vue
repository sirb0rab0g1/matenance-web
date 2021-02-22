<template>
<v-layout row wrap>
  <v-flex class="overflow-y pa-1" :style="toolbarOnly">
    <v-flex xs12 pr-2 pl-2 pt-2 v-for="(item, index) in condition" :key="index">
      <v-card class="elevation-6">
        <v-card-title class="text-xs-center" @click="goTo('/jobs')">
          <v-flex xs12 style="margin-top: -10px;">
            <span :style="item.status === 'active' ? 'color: green;' : 'color:red' ">
              <b>{{ item.status }}</b>
            </span><br/>
            <span>Domestic Cleaning</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span><br/>
            <span>Weekly: Mon & Tue</span><br/>
            <span>08:00am - 03:00pm</span><br/>
            <span>2 hours</span>
          </v-flex>
        </v-card-title>
        
        <v-card-actions style="margin-top: -10px;" class="text-xs-center">
          <v-layout row wrap>
            <!-- <v-flex xs6 @click="goTo('/jobs')" class="pa-1">
              <v-btn block style="margin-top: -4px; color: white;" class="gradient-button">
                <strong>Edit</strong>
              </v-btn>
            </v-flex> -->
            <v-flex xs4 @click="goTo('/jobs')" class="pa-1">
              <v-btn block style="margin-top: -4px; color: white;" class="green-gradient-button">
                <strong>View</strong>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="pa-1">
              <v-btn @click="$modal.show(modalParser(index))" block style="margin-top: -4px; color: white;" class="gradient-button">
                <strong>Cancel</strong>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="pa-1">
              <v-btn block style="margin-top: -4px; color: white;" class="gradient-button">
                <strong>Copy</strong>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>

      
      <modal
      :name="modalParser(index)"
      height="auto"
      :clickToClose="false"
      :width="320">
      <v-layout row wrap class="mb-2">
        <v-toolbar card prominent class="gradient helvetica">
          <v-toolbar-title style="color: white;">Cancellation</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn @click="$modal.hide(modalParser(index))" icon>
            <v-icon style="color: white;">close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-flex class="pl-2 pr-2 mt-2">
          <h3>
            Are you sure do you want to cancel this job ?
          </h3>
        </v-flex>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
          >
            <span style="color: white;">
              Cancel
            </span>
          </v-btn>
          <v-btn
            class="gradient-button"
            @click="change(index)"
          >
            <span style="color: white;">
              Continue
            </span>
          </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </modal>
    </v-flex>
  </v-flex>
</v-layout>
</template>

<script>
  import CustomResponsive from '~/plugins/mixins/responsive'
  import Global from '~/plugins/mixins/global'

  export default {
    mixins: [CustomResponsive, Global],
    data: () => ({
      condition: [
        {
          status: 'active'
        },
        {
          status: 'active'
        },
        {
          status: 'active'
        },
        {
          status: 'active'
        },
        {
          status: 'active'
        }
      ]
    }),
    methods: {
      change (payload) {
        this.condition[payload].status = 'deactivate'
        this.$modal.hide(this.modalParser(payload))
      }
    }
  }
</script>

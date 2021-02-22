<template>
  <div>
    <div
      class="text-xs-center pointer hidden-sm-and-up"
      @click="$modal.show('springcleaning')"
      style="margin-top: -10px;">
      <v-icon style="font-size: 36px;">arrow_drop_down</v-icon>
    </div>

    <modal
      name="springcleaning"
      height="auto"
      :width="320"
      :clickToClose="false">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          SPRING ESTIMATION
        </v-flex>

        <v-flex style="text-align: center !important;">
          <p class="pa-2" style="font-size: 14px;">
            If you enter 2 hrs of labour above, this is 2 hrs for one person. If there are two people cleaning they will spend 1 hour each.
          </p>
        </v-flex>
        <v-flex xs12 class="pl-2 pr-2">
        <c-global field="textfield" placeholder="# Rooms" v-model="form.rooms"/>
        <small>(All included rooms: bedrooms, bathrooms, lounge rooms, dining rooms, halls, staircases, laundry, garage, balconies, entries)</small>
        <c-global field="textfield" placeholder="kitchens" v-model="form.kitchens"/>
        <c-global field="textfield" placeholder="# Venetian Blinds" v-model="form.venetian"/>
        <c-global field="textfield" placeholder="Year Since Last Major Clean" v-model="form.years"/>
        <v-card class="pa-3">
          Hours Estimate: {{ form.years === null ? ' ' : round(floor2((((parseFloat(form.venetian) * 30) + (parseFloat(form.rooms) * 45) + (parseFloat(form.kitchens) * 120)) * major) / 60)) }}
        </v-card>
        </v-flex>

        <v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('springcleaning')"
          >
            <span style="color: white;">
              CLOSE
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
  export default {
    data: () => ({
      form: {
        rooms: null,
        venetian: null,
        years: null,
        kitchens: null
      },
      estimate: null
    }),
    mixins:[Global],
    computed: {
      major () {
        if (this.form.years == 1) {
          return (1)
        } else if (this.form.years == 2) {
          return (1.1)
        } else if (this.form.years == 3) {
          return (1.2)
        } else if (this.form.years >= 4) {
          return (1.3)
        } else {
          return (0)
        }
      }
    }
  }
</script>


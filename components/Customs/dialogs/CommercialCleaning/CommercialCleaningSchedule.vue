<template>
  <div>
    <div
      class="text-xs-center pointer hidden-sm-and-up"
      @click="$modal.show('commercialcleaning')"
      style="margin-top: -10px;">
      <v-icon style="font-size: 36px;">arrow_drop_down</v-icon>
    </div>
    <modal
      name="commercialcleaning"
      :height="500"
      :width="320"
      :clickToClose="false">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          OFFICE CLEANING
        </v-flex>

        <v-flex style="text-align: center !important;">
          <p class="pa-2" style="font-size: 14px;">
            If you enter 2 hrs of labour above, this is 2 hrs for one person. If there are two people cleaning they will spend 1 hour each.
          </p>
        </v-flex>
        <v-flex xs12 class="pl-2 pr-2 overflow-y" style="height: 290px;">
        <c-global
          :field="payload[property].field"
          v-for="(item, property, index) in payload"
          :key="index"
          :placeholder="payload[property].placeholder"
          v-model="payload[property].model"
          />

        <v-divider></v-divider>

        <v-card class="pa-3 mt-2">
          Hrs for general cleaning
          {{ payload.bathrooms.model === null || payload.toilets.model === null || payload.kithchens.model === null ? ' ' : round(floor2((floor2(parseFloat(payload.bathrooms.model) * 5 + parseFloat(payload.toilets.model) * 2 + parseFloat(payload.kithchens.model * 20)) / 60))) }} hours
        </v-card>
        <v-card class="pa-3 mt-2">
          Hrs for desk cleaning
          {{ payload.desks.model === null ? ' ' : round(floor2(floor2((parseFloat(payload.desks.model) * 2) / 60))) }} hours
        </v-card>
        <v-card class="pa-3 mt-2 mb-2">
           Total : {{ calcvisits === 0 ? '0' : (getParsedTotal(round(floor2((floor2(parseFloat(payload.bathrooms.model) * 5 + parseFloat(payload.toilets.model) * 2 + parseFloat(payload.kithchens.model * 20)) / 60)))) + getParsedTotal(round(floor2(floor2((parseFloat(payload.desks.model) * 2) / 60))))) * calcvisits }} hours
        </v-card>
        </v-flex>

        <v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('commercialcleaning')"
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
      payload: {
        desks: {model: null, placeholder: '# Desks', field: 'textfield'},
        bathrooms: {model: null, placeholder: '# Bathrooms', field: 'textfield'},
        toilets: {model: null, placeholder: '# Toilets', field: 'textfield'},
        kithchens: {model: null, placeholder: '# Kitchens', field: 'textfield'},
        visits: {model: null, placeholder: '# Visits per week', field: 'textfield'},
      }
    }),
    computed: {
      hour1 () {
        return (this.floor2((this.floor2(this.parse(this.payload.bathrooms.model) * 5 + this.parse(this.payload.toilets.model) * 2 + this.parse(this.payload.kithchens.model * 20)) / 60)))
      },
      hour2 () {
        return (this.floor2(this.floor2((this.parse(this.payload.desks.model) * 2) / 60)))
      },
      calcvisits () {
        if (this.payload.visits.model == 1 || this.payload.visits.model == 2) {
          return (1)
        } else if (this.payload.visits.model == 3) {
          return (0.8)
        } else if (this.payload.visits.model == 4) {
          return (0.7)
        } else if (this.payload.visits.model >= 5) {
          return (0.6)
        } else if (this.payload.visits.model == null) {
          return (0)
        }
      }
    }, 
    mixins: [Global]
  }
</script>


<template>
  <div>
    <div
      class="text-xs-center pointer hidden-sm-and-up"
      @click="$modal.show('housecleaning')"
      style="margin-top: -10px;">
      <v-icon style="font-size: 36px;">arrow_drop_down</v-icon>
    </div>

    <modal
      name="housecleaning"
      height="auto"
      :width="320"
      :clickToClose="false">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          ESTIMATION CALCULATOR
        </v-flex>

        <v-flex style="text-align: center !important;">
          <p class="pa-2" style="font-size: 14px;">
            If you enter 2 hours of labour above, this 2 hours for one person. If there are 2 people cleaning they will spend 1 hour each.
          </p>
        </v-flex>
        <v-flex xs12 class="pl-2 pr-2">
        <c-global
          :field="payload[property].field"
          v-for="(item, property, index) in payload"
          :key="index"
          :placeholder="payload[property].placeholder"
          v-model="payload[property].model"
        />
        <v-card class="pa-3">
          Hrs Estimate:
          {{ this.payload.bedrooms.model === null  || this.payload.bathrooms.model === null ? ' ' : round(floor2(((parseFloat(payload.bedrooms.model) + parseFloat(payload.bathrooms.model)) * 35) / 60)) }}
        </v-card>
        </v-flex><v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('housecleaning')"
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
        bedrooms: {model: null, placeholder: '# Bedrooms', field: 'textfield'},
        bathrooms: {model: null, placeholder: '# Bathrooms', field: 'textfield'},
      }
    }),
    mixins: [Global]
  }
</script>


<template>
  <div>
    <div
      class="text-xs-center pointer hidden-sm-and-up"
      @click="$modal.show('calculate')"
      style="margin-top: -10px;">
      <v-icon style="font-size: 36px;">arrow_drop_down</v-icon>
    </div>

    <modal
      name="calculate"
      height="auto"
      :width="320">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          SPRING ESTIMATION
        </v-flex>

        <v-flex style="text-align: center !important;">
          <p class="pa-2" style="font-size: 14px;">
            If you enter 2 hrs of labour above, this 2 hrs for one person. If there are two people cleaning they will spend 1 hour each.
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
          Year Since Last Major Clean
          <!-- Hrs Estimate: {{ this.payload.bedrooms.model === null  || this.payload.bathrooms.model === null ? ' ' : floor2(((parse(this.payload.bedrooms.model) + parse(this.payload.bathrooms.model)) * 40) / 60) }} -->
        </v-card>
        <c-global class="mt-2" field="textfield" v-model="estimate" placeholder="Hrs Estimate"></c-global>
        </v-flex>

        <v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('calculate')"
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
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data: () => ({
      payload: {
        venetian: {model: null, placeholder: '# Venetian Blinds', field: 'textfield'},
        rooms: {model: null, placeholder: '# Rooms', field: 'textfield'},
      },
      estimate: null
    }),
    mixins: [Global]
  }
</script>


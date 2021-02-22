<template>
  <div>
    <div
      class="text-xs-center pointer hidden-sm-and-up"
      @click="$modal.show('carpetcleaning')"
      style="margin-top: -10px;">
      <v-icon style="font-size: 36px;">arrow_drop_down</v-icon>
    </div>

    <modal
      name="carpetcleaning"
      height="auto"
      :width="320"
      :clickToClose="false">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          Measurement options
        </v-flex>

        <v-flex class="pl-2 pr-2 mt-2">
          <span>
            <strong>Room</strong> - 1 standard room is 15m2 (a bedroom) so if using this function count large spaces as more than 1 room.
          </span>
        </v-flex>
        <v-flex class="pl-2 pr-2 mt-2">
        <span>
          <strong>m2</strong> - Square Meters are common measurement of floor space. As rough guide, 1 carpark space is approximately 10m2. Alternatively, measure the meters along two edges of the space and multiply the two values together.
        </span>
        </v-flex>

        <v-divider></v-divider>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('carpetcleaning')"
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
  export default {
    data: () => ({
      payload: {
        desks: {model: null, placeholder: '# Desks', field: 'textfield'},
        bathrooms: {model: null, placeholder: '# Bathrooms', field: 'textfield'},
        toilets: {model: null, placeholder: '# Toilets', field: 'textfield'},
        kithchens: {model: null, placeholder: '# Kitchens', field: 'textfield'},
        visits: {model: null, placeholder: '# Visits per week', field: 'textfield'},
      }
    })
  }
</script>


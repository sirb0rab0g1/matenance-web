<template>
  <div>
    <div
      class="text-xs-right pointer hidden-sm-and-up"
      @click="$modal.show('filter')"
      style="margin-top: -10px;">
      <!-- <v-icon style="font-size: 24px;">search</v-icon> -->
      Filter
    </div>

    <modal
      name="filter"
      height="auto"
      :width="320">
      <v-layout row wrap class="mb-2">
        <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;color: white; font-size: 20px;">
          FILTER
        </v-flex>

        <v-flex xs12 style="margin-top: -15px;" class="pa-2">
          <v-flex text-xs-left>
            <span
              class="display-3 font-weight-light"
              v-text="bpm"
            ></span>
            <span class="subheading font-weight-light mr-1">Dollars</span>
          </v-flex>

          <v-flex style="margin-top: -20px;">
          <v-slider
              v-model="bpm"
              always-dirty
              min="0"
              max="50"
            >
            <v-icon
              slot="prepend"
              @click="decrement"
            >
              remove
            </v-icon>

            <v-icon
              slot="append"
              @click="increment"
            >
              add
            </v-icon>
          </v-slider>
          </v-flex>
          <v-flex style="margin-top: -30px;">
            <small>Filter by price</small>
          </v-flex>
        </v-flex>

        <v-flex xs12 class="pl-2 pr-2">
          <c-global field="combofield" placeholder="Rating" v-model="filter.hours" :items="['5 stars', '1 star']"></c-global>
        </v-flex>

        <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('filter')"
          >
            <span style="color: white;">
              CLOSE
            </span>
          </v-btn>

          <v-btn
            class="gradient-button"
          >
            <span style="color: white;">
              SEARCH
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
      bpm: 0,
      filter: {
        hours: null
      }
    }),
    mixins: [Global],
    methods: {
      decrement () {
        this.bpm--
      },
      increment () {
        this.bpm++
      }
    }
  }
</script>

<style>
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>

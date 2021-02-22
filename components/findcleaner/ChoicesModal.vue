<template>
  <v-dialog
    v-model="modal"
    width="500"
    persistent
  >
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      ></v-img>
    <v-card-text class="grey lighten-3">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <br/>
      <br/>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <br/>
      <br/>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="grey lighten-3">
      <v-spacer></v-spacer>
      <v-btn
      color="primary"
      flat
      @click="hide('/')"
    >
        Cancel
      </v-btn>
      <v-btn
      color="primary"
      flat
      @click="hide('/HouseCleaning')"
    >
        Proceed
      </v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters('FindACleaner', ['modal'])
    },
    methods: {
      ...mapActions('FindACleaner', ['CHANGE_MODAL']),
      hide (route) {
        this.CHANGE_MODAL(false)
        this.$router.push(route)
      }
    }
  }
</script>

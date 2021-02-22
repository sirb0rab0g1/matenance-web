<template>
  <v-flex xs12 style="margin-top: -10px;" pa-2>
    <v-radio-group
      class="pasmo"
      v-model="event"
      row
      :mandatory="false"
      @click="proceed">

    <v-radio color="light-blue darken-3" :value="'past'">
      <div slot="label">
        <span style="color: #424242;" class="helvetica">
          Past
        </span>
      </div>
    </v-radio>
    <v-radio color="light-blue darken-3" :value="'future'">
      <div slot="label">
        <span style="color: #424242;" class="helvetica">
          Future
        </span>
      </div>
    </v-radio>
    </v-radio-group>

    <v-flex xs12>
      <nuxt-child />
    </v-flex>
  </v-flex>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      event: 'path'
    }),
    mixins: [Global],
    beforeRouteLeave (to, from, next) {
      this.CHANGE_VISIT('')
      next()
    },
    methods: {
      ...mapActions('jobs', ['CHANGE_VISIT']),
      proceed () {
        this.goTo(`/jobs/visits/${this.event}`)
      },
      parsePath () {
        let parse = this.$nuxt.$route.path
 
        let parsed = parse.split('/')

        this.event = parsed[3]
      }
    },
    created () {
      this.parsePath()
    }
  }
</script>

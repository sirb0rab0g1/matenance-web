<template>
  <v-layout row wrap>
    <v-flex xs12 :style="messageRow" class="scroll-y pt-2 pl-2 pr-2">
      <v-flex xs12 v-for="x in messages" :key="x">
      <div style="text-align:right;">
          {{ x }}
        <v-avatar size="36px" slot="activator" color="primary">
          <!-- <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"> -->
          <span style="color: white;">G</span>
        </v-avatar> <br>
      <small class="pr-2">Guest</small>
      </div>
      <div style="text-align:left;" v-if="value >= 10">
        <v-avatar size="36px" slot="activator" color="primary">
          <span style="color: white;">M</span>
        </v-avatar> Hi there! <br>
        <small class="pr-2"> Matenance</small>
      </div>
      </v-flex>
    </v-flex>

    <v-flex xs12>
    <v-layout class="mt-2" align-center justify-center row wrap>
    <v-flex xs10>
      <c-global class="pl-3" field="textfield" style="margin-bottom: -10px;" placeholder="Enter Message Here..." v-model="form.message"></c-global>
    </v-flex>
    <v-flex xs2>
      <v-btn fab dark small color="primary" @click="send">
        send
      </v-btn>
    </v-flex>
    </v-layout>
    </v-flex>

  </v-layout>
</template>

<script>
  import CustomResponsive from '~/plugins/mixins/responsive'

  export default {
    data: () => ({
      form: {
        message: null
      },
      messages: [],
      interval: {},
      value: 0
    }),
    mixins: [CustomResponsive],
    computed: {
      reverse () {
        return _.reverse(this.messages)
      }
    },
    methods: {
      send () {
        this.messages.push(this.form.message)
        this.form.message = null

        this.interval = setInterval(() => {
          this.value += 10
        }, 1000)
      }
    }
  }
</script>

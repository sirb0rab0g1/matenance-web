<template>
<v-flex>
  <!--

  SPECIAL NOTE:
  DO NOT DELETE BECAUSE OF JOBS/SUPPLIERS IMPLEMENTATION
  THAT IMPLEMENTATION SHOULD BE RE IMPLEMENTED

  -->

      <div class="clipped-card" @click="changeClick()">
        <div class="clip-pattern"></div>
        <div class="clip-card-content">
          <div class="flex-width-full">
            <v-img class="clip-card-image" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" aspect-ratio="1.7"></v-img>
            <div class="clip-card-name">
              <span>{{ name }} </span>
              <span>{{ about }}</span>
              <span :style="status === 'Available' ? 'color: green;' : 'color: red;'">
                {{ asked ? status : '' }}
              </span>
            </div>
            <div class="clip-card-sidebar">
              <v-checkbox 
                color="green"
                v-model="check"  
                ></v-checkbox>
              <v-rating readonly v-model="rating"></v-rating>
              <span>${{ rate }}/hr</span>
              <span>(Estimate)</span>
              <u @click="alert('Pending')">{{ review }}</u>
              <u>X visits</u>
            </div>
          </div>
          <div class="flex-width-full">
            <ul class="clip-card-list">
              <li v-for="item in stat" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-flex>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import {
    JOB_FOOTER_ASK,
    SUPPLIER_ASK_CARD
  } from '~/plugins/event_variable/variables'

  export default {
    data: () => ({
      rating: 5,
      check: false,
      asked: false
    }),
    mixins: [Global],
    mounted () {
      this.$bus.$on(JOB_FOOTER_ASK, this.cardReset)
      this.$bus.$on(SUPPLIER_ASK_CARD, this.isFound)
      this.found()
      this.isFound()
    },
    beforeDestroy () {
      this.$bus.$off(JOB_FOOTER_ASK, this.cardReset)
      this.$bus.$off(SUPPLIER_ASK_CARD, this.isFound)
    },
    computed: {
      ...mapGetters('suppliers', ['ask_suppliers', 'future_date', 'future_ask', 'future_confirm'])
    },
    methods: {
      ...mapActions('jobs', ['CHANGE_CLEANERS']),
      ...mapActions('suppliers', ['CHANGE_FUTURE_ASK', 'CHANGE_FUTURE_CONFIRM']),
      ...mapMutations('suppliers', ['RESET_FUTURE_CONFIRM']),
      change () {
        if (!this.check) {
          this.check = true
          this.goTo('/jobs')
        } else {
          this.check = false
        }
      },
      checker () {
        return (_.find(this.future_ask, {'idx': this.idx, 'date': this.future_date}))
      },
      changeClick () {
        this.check = !this.check
      },
      isFound () {
        if (_.find(this.future_ask, {'idx': this.idx, 'date': this.future_date})) {
          this.asked = true
        } else {
          this.asked = false
        }
      },
      found () { // future
        if (_.find(this.future_ask, {'idx': this.idx, 'date': this.future_date})) {
          this.asked = true
        } else {
          this.asked = false
        }
      },
      cardReset (payload) {
        this.check = payload
      },
      alert (payload) {
        alert(payload)
      }
    },
    props: {
      name: String,
      about: String,
      stat: Array,
      rate: String,
      review: String,
      status: String,
      idx: Number
    }
  }
</script>

<style>
.clipped-card {
  max-width: 98%;
  filter: drop-shadow(0px 2px 6px rgba(0,0,0,0.5)) !important;
  position: relative;
}

.clip-pattern {
  clip-path:  polygon(0% 30%, 5% 20%, 9% 0%, 100% 0%, 100% 100%, 9% 100%, 5% 40%) !important;
  -webkit-clip-path: polygon(0% 30%, 5% 20%, 9% 0%, 100% 0%, 100% 100%, 9% 100%, 5% 40%) !important;
  background-color: white !important;
  height: 100% !important;
  width: 99% !important;
  border-radius: 7px !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  z-index: -1 !important;
  -webkit-transform: translate3d(0,0,0);
}

.clip-card-content {
  background-color: white !important;
  border-radius: 7px !important;
  width: 95% !important;
  margin-left: auto !important;
}

.clip-card-image {
  width: 25% !important;
  height: 6em !important;
  margin: .5em !important;
}

.clip-card-name {
  width: 50% !important;
  display: flex !important;
  flex-direction: column !important;
  padding: .5em 0 !important;
}

.clip-card-sidebar {
  width: 30% !important;
  display: flex !important;
  flex-direction: column !important;
  text-align: right !important;
  padding: .5em !important;
}

.clip-card-sidebar .v-input--checkbox .v-input__control {
  position: absolute !important;
  top: .3em !important;
  right: -.3em !important;
}

.flex-width-full {
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
}

.clip-card-list {
  list-style-type: none !important;
  margin-top: .5em !important;
  margin-bottom: .5em !important;
  padding-left: .5em !important;
  padding-right: .5em !important;
}

.clip-card-list li {
  float: left !important;
  padding-right: .2em !important;
}

.clip-card-list li:after {
  content:  "\2713 " !important;
  color: green !important;
  font-weight: bold !important;
  padding-right: 5px !important;
  padding-left: 5px !important;
}
</style>

<template>
<v-container>
  <v-layout row wrap>
    <v-flex>
      <!-- <supplier-filter /> -->
    <span @click="debug">DEBUG</span>
    <no-ssr>
      <v-flex lg12 md12 sm12 xs12>
        <center>
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
          v-if="loading"
          ></v-progress-circular>
        </center>
      </v-flex>
    </no-ssr>

    <v-flex
      xs12
      v-for="(item, index) in filters"
      :key="index"
      class="pt-2"
      @click="choose(item, index)">
      <c-card
        :name="item.name"
        :about="item.about"
        :stat="item.stat"
        :rate="item.rate"
        :review="item.review"
        :status="item.status"
        :idx="index"
    />

      <v-snackbar
            v-model="snackbar"
            :timeout="2000">
            {{ errorMessage }}
          </v-snackbar>
    </v-flex>

    </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import {
    JOB_FOOTER_ASK,
    JOB_FOOTER_CONFIRM,
    SUPPLIER_ASK_CARD
  } from '~/plugins/event_variable/variables'
  import Global from '~/plugins/mixins/global'

  export default {
    data: () => ({
      interval: {},
      value: 0,
      payload: [],
      loading: false,
      snackbar: false,
      errorMessage: null
    }),
    mixins: [Global],
    methods: {
      ...mapActions('suppliers', ['CHANGE_SUPPLIER_FILTERS', 'CHANGE_ASK_SUPPLIERS']),
      ...mapActions('jobs', ['CHANGE_SUPPLIER']),
      ...mapMutations('suppliers', ['RESET_ASK_SUPPLIERS']),
      getFilter () {
        if (process.browser) {
          this.CHANGE_SUPPLIER_FILTERS(JSON.parse(localStorage.getItem('filter')))
        }
      },
      choose (payload, index) {
        this.$set(payload, 'idx', index)
        this.$set(payload, 'date', moment().format('l'))
        if (_.find(this.payload, {'idx': index})) {
          _.remove(this.payload, payload)
        } else {
          this.payload.push(payload)
        }
        console.table(payload)
      },
      passAsk () {
        this.CHANGE_ASK_SUPPLIERS(this.payload)
        this.payload = []
        this.$bus.$emit(SUPPLIER_ASK_CARD)
      },
      debug () {
        this.RESET_ASK_SUPPLIERS()
        alert('payload reset')
      },
      passConfirm () {
        if (this.payload.length > 1 || this.payload.length < 1) {
          this.errorMessage = 'Can choose only 1 cleaner.'
          this.snackbar = true
        } else {
          this.CHANGE_SUPPLIER(this.payload)
          this.goTo('/jobs')
        }
      }
    },
    computed: {
      ...mapGetters('suppliers', ['filters', 'ask'])
    },
    mounted () {
      this.getFilter()
      this.$bus.$on(JOB_FOOTER_ASK, this.passAsk)
      this.$bus.$on(JOB_FOOTER_CONFIRM, this.passConfirm)
    },
    beforeDestroy () {
      this.$bus.$off(JOB_FOOTER_ASK, this.passAsk)
      this.$bus.$off(JOB_FOOTER_CONFIRM, this.passConfirm)
    }
  }
</script>

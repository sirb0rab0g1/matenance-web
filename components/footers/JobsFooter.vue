<template>
<v-footer fixed height="auto">
  <v-layout row wrap>
  <v-flex xs12 class="job-footer-ads text-xs-center" v-if="$nuxt.$route.path === '/jobs/suppliers'" >
    Ask if they are available
  </v-flex>
  <v-flex xs12 class="gradient footer-container">
    <v-flex xs12>
      <v-flex v-if="$nuxt.$route.path === '/jobs'">
        <!--  v-if="isLogin && role === 'customer'" -->
        <v-btn dark flat @click="!edit ? goTo('/') : CHANGE_EDIT(false)">
          <strong>
            <span class="elevation footer">
              <i><u> {{ !edit ? 'Cancel Job' : 'Cancel Edit' }} </u></i>
            </span>
          </strong>
        </v-btn>
        <v-btn @click="!edit ? editJob() : confirmEdit()" dark flat>
          <strong>
            <span class="elevation footer">
              <u><i>{{ !edit ? 'Edit Job' : 'Confirm' }}</i></u>
            </span>
          </strong>
        </v-btn>
      </v-flex>
      <v-flex v-if="$nuxt.$route.path === '/jobs/suppliers'">
        <v-btn @click="login" dark flat>
          <strong>
            <span class="elevation footer">
              Ask
            </span>
          </strong>
        </v-btn>
        <v-btn dark flat @click="go" v-if="isLogin">
          <strong>
            <span class="elevation footer">
              Confirm
            </span>
          </strong>
        </v-btn>
      </v-flex>
    <v-flex
      v-if="$nuxt.$route.path === '/jobs/visits/past' || $nuxt.$route.path === '/jobs/visits/future'">
        <v-btn dark flat @click="add">
          <strong>
            <span class="elevation footer">
              <u><i>Add a Visit</i></u>
            </span>
          </strong>
        </v-btn>
      </v-flex>
    </v-flex>
  </v-flex>
  <v-snackbar
        v-model="snackbar"
        :multi-line="'multi-line'"
        :timeout="2000"
      >
    {{ message }}
  </v-snackbar>

  <v-dialog
        v-model="dialog"
        width="500"
        transition=""
      >
        <v-card>
          <v-toolbar card prominent class="gradient helvetica">
          <v-toolbar-title style="color: white;">EDIT JOB</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="dialog = false">
            <v-icon style="color: white;">close</v-icon>
          </v-btn>
        </v-toolbar>

          <v-card-text>
            The job will be cancelled. You will need to ASK and CONFIRM again with your preferred Supplier.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            class="gradient-button"
            @click="dialog = false"
          >
            <span style="color: white;">
              CANCEL
            </span>
            </v-btn>
            <v-btn
            class="gradient-button"
            @click="proceed()"
          >
            <span style="color: white;">
              CONTINUE
            </span>
          </v-btn>
          </v-card-actions>
        </v-card>
  </v-dialog>

  </v-layout>
  </v-footer>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { mapActions, mapGetters } from 'vuex'
  import {
    JOB_FOOTER_ASK,
    JOB_FOOTER_CONFIRM
  } from '~/plugins/event_variable/variables'

  export default {
    mixins: [Global],
    computed: {
      ...mapGetters('login', ['isLogin', 'modal', 'role']),
      ...mapGetters('jobs', ['edit', 'cleaners', 'addVisit', 'date']),
      ...mapGetters('suppliers', ['ask'])
    },
    data: () => ({
      snackbar: false,
      message: '',
      isEditTimeout: null,
      dialog: false
    }),
    methods: {
      ...mapActions('login', ['CHANGE_MODAL']),
      ...mapActions('jobs', ['CHANGE_EDIT', 'CHANGE_SUPPLIER', 'CHANGE_CLEANERS', 'CHANGE_VISIT', 'CHANGE_FUTURE_VISIT', 'CHANGE_DATE']),
      ...mapActions('suppliers', ['CHANGE_ASKS', 'CHANGE_SUPPLIER_FILTERS']),
      go () {
        /* if (!_.isNull(this.ask)) {
          if (this.cleaners.length > 1 || this.cleaners.length < 1) {
            this.snackbar = true
            this.message = 'You can`t select more than / below 1 cleaner'
          } else {
            this.CHANGE_SUPPLIER(this.cleaners)
            this.goTo('/jobs')
            this.CHANGE_CLEANERS([])
            this.CHANGE_ASKS(null)
            // this.$bus.$emit(JOB_FOOTER_ASK, true)
          }
        } else {
          this.snackbar = true
          this.message = 'You must ask first!'
        } */
        this.$bus.$emit(JOB_FOOTER_CONFIRM)
      },
      login () {
        if (this.isLogin === false) {
          this.CHANGE_MODAL(!this.modal)
        } else {
          this.$bus.$emit(JOB_FOOTER_ASK)
        }
      },
      editJob () {
        // this.dialog = false
        this.CHANGE_EDIT(true)
      },
      confirmEdit () {
          this.dialog = true
          /* this.dialog = true
          if (this.dialog === true) {
              this.CHANGE_EDIT(false)
          } */
      },
      proceed () {
        this.dialog = false
        this.CHANGE_EDIT(false)
      },
      add () {
        this.CHANGE_VISIT('future')
      }
    }
  }
</script>

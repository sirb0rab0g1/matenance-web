<template>
<v-container style="color: #424242;">
  <v-layout row wrap>
    <v-flex xs12 style="margin-top: -15px;" class="helvetica">
      <v-radio-group class="pasmo" v-model="form.type" row :mandatory="false" style="margin-bottom: -15px; margin-top: 8px;">
        <v-radio color="light-blue darken-3" value="template">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Template
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="custom">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Custom
            </span>
          </div>
        </v-radio>
      </v-radio-group>
      
      <v-flex>
      <span class="helvetica child-size">Notes {{ form.radios }}</span>
      <v-textarea
        outline
        class="my-textarea"
        auto-grow
        v-if="form.type === 'template'"
        hide-details
        name="input-7-4"
        v-model="form.templated"
        ></v-textarea>

      <v-textarea
        outline
        class="my-textarea"
        auto-grow
        v-else
        hide-details
        name="input-7-4"
        v-model="form.custom"
        ></v-textarea>
      </v-flex>

      <v-slide-y-transition>
        <v-flex v-if="isClicked">
        <v-card flat class="hidden-sm-and-up">
          <v-card-text>
            <p> 
              <span class="helvetica">
                <span style="font-size: 18px;">
                   Basic Equipment Provided As Standard
                </span><br/>
                <v-flex style="margin-top: 6px;">
                <span style="font-size: 16px;">
                  Vacuum, mop, window washing tools, track cleaning tools, light fitting removal tools, step ladder, general & deep kitchen cleaning materials & chemicals. If you require something else, mention it in the task notes above.
                </span>
                </v-flex>
                <v-flex style="margin-top: 26px;">
                <span style="font-size: 18px;">
                   Complex Task Frequency
                </span>
                </v-flex>
                <v-flex style="margin-top: 6px;">
                  <span style="font-size: 16px;">
                  i.e. Bathrooms & floors <u>weekly</u>, Wash glass <u>monthly,</u> clean oven <u>quarterly</u> ?<br>
Simple finish creating this job for the <u>weekly</u> tasks, then create an entirely new job for the <u>monthly</u> and again for <u>quarterly</u>. The beauty of Matenance is having everything scheduled independently and accountably. <i>Yes,</i> you can invite the same cleaners for all these tasks & visits.
                  </span>
                </v-flex>
                <v-flex style="margin-top: 26px;">
                <span style="font-size: 18px;">
                   Venetian Blinds
                </span>
                </v-flex>
                <v-flex style="margin-top: 6px; margin-bottom: -3.3em;">
                  <span style="font-size: 16px;">
                  Please note - All care taken but no liability accepted.
                  </span>
                </v-flex>
              </span>
              <br>
            </p>
          </v-card-text>
        </v-card>
        </v-flex>
      </v-slide-y-transition>

      <v-snackbar
        v-model="snackbar"
        :multi-line="'multi-line'"
        :timeout="1000"
      >
        {{ errorMessage }}
      </v-snackbar>

      <v-flex>
        <v-layout align-center justify-center row @click="changingIcon()">
          <v-icon style="font-size: 36px;">{{ defaultIcon }}</v-icon> <i style="font-size: 16px;"> More Information</i>
        </v-layout>
      </v-flex>

      <v-flex>
        <span style="font-size: 16px;">Secure Notes</span>
      </v-flex>
      <v-flex style="margin-top: -8px;">
        <c-global field="textfield" v-model="form.secure" placeholder=" "></c-global>
        <v-flex style="margin-top: -8px;">
          <span style="font-size: 16px;">
            Only seen by the service provider confirmed to provide the service
          </span>
        </v-flex>
      </v-flex>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import GlobalDummy from '~/plugins/mixins/global_dummy'

  export default {
    data: () => ({
      row: null,
      defaultIcon: 'arrow_drop_down',
      isClicked: false,
      radioGroup: 1,
      word: null,
      sample: '',
      snackbar: false,
      errorMessage: '',
      form: {
        type: '',
        templated: '',
        custom: '',
        secure: ''
      },
      error: {
        job: '',
        secure: ''
      }
    }),
    computed: {
      ...mapGetters('jobs', ['springnotes'])
    },
    mounted () {
      this.setForm()
    },
    mixins: [GlobalDummy],
    beforeRouteLeave (to, from, next) {
      this.$set(this.form, 'mode', 'springcleaning')
      this.CHANGE_TASK(this.form)
      next()
    },
    methods: {
      ...mapActions('jobs', ['CHANGE_TASK']),
      changingIcon () {
        if (!this.isClicked) {
          this.isClicked = true
          this.defaultIcon = 'arrow_drop_up'
        } else {
          this.isClicked = false
          this.defaultIcon = 'arrow_drop_down'
        }
      },
      setForm () {
        this.form = Object.assign({}, this.form, this.springnotes)
      }
    },
    transition: 'slide'
  }
</script>

<style>
  .pasmo >>> label {
    font-size: 100px;
  }
</style>

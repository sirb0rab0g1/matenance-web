<template>
  <v-flex lg12>
    <no-ssr>
      <v-text-field
        :class="!value ? 'my-input my-input-placeholder my-custom-time-grey' : 'my-input my-input-placeholder my-custom-time-black'"
        label="Regular"
        :value="!value ? placeholder : value"
        @input="handleInput"
        :placeholder="placeholder"
        flat
        hide-details
        solo
        type="button"
        @click="$modal.show(placeholder)"
        ></v-text-field>
      <modal
        :name="placeholder"
        :width="300"
        :height="252"
        :clickToClose="false">
        <v-layout row wrap>
          <v-flex xs12 class="gradient helvetica pa-3" style="text-align: left;">
            <span style="color: white; font-size: 20px;">
              {{ placeholder }}
            </span>
          </v-flex>
          <v-flex xs4>
            <smooth-picker ref="smoothPicker" :data="hours" :change="hourChoices" />
          </v-flex>
          <v-flex xs4>
            <smooth-picker ref="smoothPicker" :data="minutes" :change="minutesChoices" />
          </v-flex>
          <v-flex xs4>
            <smooth-picker ref="smoothPicker" :data="amorpm" :change="amorpmChoices" />
          </v-flex>
          <v-flex xs12>
        </v-flex>
        </v-layout>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn
            class="gradient-button"
            @click="close($event.target.value, placeholder)"
          >
            <span style="color: white;">
              CHOOSE
            </span>
          </v-btn>
          </v-layout>
      </modal>
    </no-ssr>
  </v-flex>
</template>

<script>

  import { DATE_PICKER } from '~/plugins/event_variable/variables'
  export default {
    name: 'example-page',
    props: {
      value: [String, Number, Array],
      placeholder: String
    },
    data () {
      return {
        showPicker: false,
        isVisible: false,
        pasmo: null,
        show: false,
        agay: this.value,
        hoursModel: 2,
        minutesModel: '02',
        amorpmModel: 'AM',
        hours: [
          {
            currentIndex: 1,
            flex: 3,
            list: [
              {value: 1, name: '01'},
              {value: 2, name: '02'},
              {value: 3, name: '03'},
              {value: 4, name: '04'},
              {value: 5, name: '05'},
              {value: 6, name: '06'},
              {value: 7, name: '07'},
              {value: 8, name: '08'},
              {value: 9, name: '09'},
              {value: 10, name: '10'},
              {value: 11, name: '11'},
              {value: 12, name: '12'}
            ],
            textAlign: 'center',
            className: 'row-group'
          }
        ],
        minutes: [
          {
            currentIndex: 2,
            flex: 3,
            list: [
              {value: '00', name: '00'},
              {value: '01', name: '01'},
              {value: '02', name: '02'},
              {value: '03', name: '03'},
              {value: '04', name: '04'},
              {value: '05', name: '05'},
              {value: '06', name: '06'},
              {value: '07', name: '07'},
              {value: '08', name: '08'},
              {value: '09', name: '09'},
              {value: '10', name: '10'},
              {value: '11', name: '11'},
              {value: '12', name: '12'},
              {value: '13', name: '13'},
              {value: '14', name: '14'},
              {value: '15', name: '15'},
              {value: '16', name: '16'},
              {value: '17', name: '17'},
              {value: '18', name: '18'},
              {value: '19', name: '19'},
              {value: '20', name: '20'},
              {value: '21', name: '21'},
              {value: '22', name: '22'},
              {value: '23', name: '23'},
              {value: '24', name: '24'},
              {value: '25', name: '25'},
              {value: '26', name: '26'},
              {value: '27', name: '27'},
              {value: '28', name: '28'},
              {value: '29', name: '29'},
              {value: '30', name: '30'},
              {value: '31', name: '31'},
              {value: '32', name: '32'},
              {value: '33', name: '33'},
              {value: '34', name: '34'},
              {value: '35', name: '35'},
              {value: '36', name: '36'},
              {value: '37', name: '37'},
              {value: '38', name: '38'},
              {value: '39', name: '39'},
              {value: '40', name: '40'},
              {value: '41', name: '41'},
              {value: '42', name: '42'},
              {value: '43', name: '43'},
              {value: '44', name: '44'},
              {value: '45', name: '45'},
              {value: '46', name: '46'},
              {value: '47', name: '47'},
              {value: '48', name: '48'},
              {value: '49', name: '49'},
              {value: '50', name: '50'},
              {value: '51', name: '51'},
              {value: '52', name: '52'},
              {value: '53', name: '53'},
              {value: '54', name: '54'},
              {value: '55', name: '55'},
              {value: '56', name: '56'},
              {value: '57', name: '57'},
              {value: '58', name: '58'},
              {value: '59', name: '59'}
            ],
            textAlign: 'center',
            className: 'row-group'
          }
        ],
        amorpm: [
          {
            currentIndex: 3,
            flex: 3,
            list: [
              {value: 'AM', name: 'AM'},
              {value: 'PM', name: 'PM'}
            ],
            textAlign: 'center',
            className: 'row-group'
          }
        ]
      }
    },
    mounted () {
      setTimeout(() => {
        this.showPicker = true
      }, 300)
    },
    methods: {
      handleInput (value) {
        this.$emit('input', value)
      },
      close (value, placeholder) {
        value = this.hoursModel + ':' + this.minutesModel + ' ' + this.amorpmModel
        this.$emit('input', value)
        console.log(value + ' ' + placeholder)
        this.$modal.hide(placeholder)
      },
      shows () {
        console.log('em clicked')
        if (!this.isVisible) {
          this.isVisible = true
        } else {
          this.isVisible = false
        }
      },
      hourChoices (gIndex, iIndex) {
        this.hoursModel = this.hours[0].list[iIndex].value
        console.log(this.hoursModel)
      },
      minutesChoices (gIndex, iIndex) {
        this.minutesModel = this.minutes[0].list[iIndex].value
      },
      amorpmChoices (gIndex, iIndex) {
        this.amorpmModel = this.amorpm[0].list[iIndex].value
      }
    }
  }
</script>

<style>
.card-border-radius {
  border-radius: 15px !important;
}

.card-border-radius-bottom {
  border-radius: 0px 0px 15px 15px !important;
}

.custom-date {
  border: 1px solid #C0C0C0;
  border-radius: 5px;
  padding-top: .9em;
  padding-bottom: .9em;
  padding-left: .5em;
  text-align: left;
}

.button-text {
    font-family: 'Helvetica Neue';
    text-transform: capitalize;
}

.v--modal {
  text-align: left;
  height: auto;
}

.scale-enter-active, .scale-leave-active {
  transition: all 0.3s;
}

.scale-enter, .scale-leave-active {
  opacity: 0;
  transform: scale(0.3) translateY(24px);
}
</style>

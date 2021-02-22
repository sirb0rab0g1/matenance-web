<template>
  <v-flex lg12>
    <!-- v- for default -->
    <v-flex class="pt-2">
      <v-text-field
        v-if="field === 'textfield'"
        class="my-input my-input-placeholder"
        label="Regular"
        :type="type"
        :value="value"
        @input="handleInput"
        :mask="mask"
        :placeholder="placeholder"
        flat
        hide-details
        solo
        :disabled="disabled"
        :append-icon="textIcon"
        @click:append="appendTextField"
        @keyup.enter="handleKeyUp"
      ></v-text-field>
    </v-flex>
    <v-flex v-if="details" style="margin-top: -10px;">
      <span>
        <small style="color: red;">
          {{ error }}
        </small>
      </span>
    </v-flex>

    <!-- c- for custom -->
    <v-combobox
      v-if="field === 'combofield'"
      :items="items"
      :value="value"
      class="my-input my-input-placeholder my-combobox"
      hide-details
      solo
      flat
      autocomplete
      :label="placeholder"
      :multiple="multiple"
      chips
      dont-fill-mask-blanks
      deletable-chips
      :disabled="disabled"
      append-icon=""
      :menu-props="{maxHeight:'200', closeOnContentClick: true, closeOnClick:true}"
      @input="handleCombo"
      type="button"
      style="color: transparent; text-shadow: 0 0 0 #2196f3;"
      hide-selected
      ></v-combobox>

    <c-date-picker
      v-if="field === 'datefield'"
      @input="handleInput"
      :value="value"
      :placeholder="placeholder"/>

    
    <c-time-picker
      @input="handleTime"
      :placeholder="placeholder"
      v-if="field === 'timefield'"
      :value="value"/>

  </v-flex>
</template>

<script>
  import {
    LOCATION_TEXT_EVENT
  } from '~/plugins/event_variable/variables'
  import Global from '~/plugins/mixins/global'
  export default {
    props: {
      field: [String, Number],
      type: [String, Number],
      placeholder: String,
      mask: String,
      chipP: String,
      value: [String, Number, Array],
      time: String,
      disabled: Boolean,
      textIcon: String,
      textAppendRoute: String,
      enter: {
        type: Boolean,
        default: false
      },
      select: [String, Array],
      items: Array,
      multiple: {
        type: Boolean,
        default: false
      },
      details: {
        type: Boolean,
        default: true
      },
      error: String
    },
    data () {
      return {
        content: this.value,
        timepicker: this.time,
        combo: this.items,
        choosen: this.select
      }
    },
    mixins: [Global],
    methods: {
      handleInput (value) {
        this.$emit('input', value)
      },
      handleKeyUp () {
        if (this.enter) {
          this.$bus.$emit(LOCATION_TEXT_EVENT)
        }
        console.log('triggered')
      },
      handleCombo (value) {
        this.$emit('input', value)
      },
      handleTime (value) {
        this.$emit('input', value)
      },
      appendTextField () {
        this.goTo(this.textAppendRoute)
      }
    }
  }
</script>

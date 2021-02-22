<template>
  <v-flex class="pa-1">
  <input
    class="text-border"
    :placeholder="placeholder"
    v-model="content"
    @input="handleInput"
    :readonly="readonly"
    @keyup.enter="handleKeyUp"/>
  </v-flex>
</template>

<script>
  import {
  LOCATION_TEXT_EVENT
  } from '~/plugins/event_variable/variables'
  export default {
    props: {
      value: String,
      placeholder: String,
      enter: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        content: this.value
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', this.content)
      },
      handleKeyUp (e) {
        if (this.enter) {
          this.$bus.$emit(LOCATION_TEXT_EVENT)
        }
      }
    }
  }
</script>

<style>
  .text-border {
    border: solid 1px grey;
    padding: 20px;
    width: 100%;
    border-radius: 5px;
  }
</style>

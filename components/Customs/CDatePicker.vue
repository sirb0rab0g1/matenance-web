<template>
  <v-flex>
    <v-dialog
      ref="dialog"
      v-model="modal"
      persistent
      :return-value.sync="date"
      lazy
      full-width
      width="290px"
    >
    <v-text-field
      slot="activator"
      :value="value"
      class="my-input my-input-placeholder"
      hide-details
      flat
      solo
      :placeholder="placeholder"
    />
    <v-date-picker
      v-model="date"
      scrollable
      :allowed-dates="allowedDates"
      >
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="handleInput(date)">OK</v-btn>
    </v-date-picker>
    </v-dialog>
  </v-flex>
</template>

<script>
  export default {
    props: {
      value: String,
      placeholder: String
    },
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      menu: false
    }),
    methods: {
      handleInput (value) {
        if (!value) return null
        const [year, month, day] = value.split('-')
        value = `${day}/${month}/${year}`
        this.$emit('input', value)
        this.modal = false
      },
      allowedDates: val => moment().format('YYYY-MM-DD').toString() <= val
    }
  }
</script>

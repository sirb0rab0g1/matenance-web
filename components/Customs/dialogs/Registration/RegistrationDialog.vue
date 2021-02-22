<template>
  <modal
    name="registration"
    height="auto"
    :clickToClose="false"
    :width="320"
    :scrollable="true"
    >
    <v-layout row wrap class="mb-2">
      <v-toolbar card prominent class="gradient helvetica">

        <v-toolbar-title style="color: white;">
          {{ isLogin === true ? 'Update' : 'Registration' }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="close">
          <v-icon style="color: white;">close</v-icon>
        </v-btn>
      </v-toolbar>
	    <v-flex class="pt-2 pl-2 pr-2" style="height: 500px; overflow-y: auto;">
	      <v-flex v-if="!isRegistered">
          <c-global
            field="textfield"
            v-model.email="form.email"
            placeholder="Email"
            :details="true"
            :error="error.card.email"/>

          <c-global
            field="textfield"
            v-model="form.password"
            type="password"
            placeholder="Password" />

          <c-global
            field="textfield"
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm Password" />

	      <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>Personal Information</h3>
	        </span>
	      </v-flex>

        <c-global
          field="textfield"
          v-model="form.first_name"
          placeholder="First Name" />

	      <c-global
          field="textfield"
          v-model="form.last_name"
          placeholder="Last Name" />

	      <c-global
          field="textfield"
          v-model="form.company"
          placeholder="Company Name (Optional)" />

        <c-global
          field="textfield"
          v-model="form.abn"
          placeholder="ABN (Optional)" />

	      <c-global
          field="textfield"
          mask="###########"
          v-model="form.mobile"
          placeholder="Mobile" />
	      <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>Debit Details</h3>
	        </span>
	      </v-flex>
    <small>NOTE: COPTY THIS TEMPORARY CARD! <br/>
      5520000000000000 </small>

    <!--
        NOTE: Erros here are from payment gateway api
    -->

    <c-global
      field="textfield"
      mask="################"
      placeholder="card number"
      v-model="cr8Customer.card.number"
      :details="true"
      :error="error.card.number"/>

    <c-global
      field="textfield"
      mask="##"
      placeholder="card expiry_month"
      v-model="cr8Customer.card.expiry_month"
      :details="true"
      :error="error.card.expiry_month"/>

    <c-global
      field="textfield"
      mask="####"
      placeholder="card expiry_year"
      v-model.number="cr8Customer.card.expiry_year"
      :details="true"
      :error="error.card.expiry_year"/>

    <c-global
      field="textfield"
      mask="###"
      placeholder="card cvc"
      v-model.number="cr8Customer.card.cvc"
      :details="true"
      :error="error.card.cvc"/>

    <c-global
      field="textfield"
      placeholder="card name"
      v-model="cr8Customer.card.name"
      :details="true"
      :error="error.card.name"/>

    <c-global
      field="textfield"
      placeholder="card address_line1"
      v-model="cr8Customer.card.address_line1"
      :details="true"
      :error="error.card.address_line1"/>

    <c-global
      field="textfield"
      placeholder="card address_city"
      v-model="cr8Customer.card.address_city"
      :details="true"
      :error="error.card.address_city"/>

    <c-global
      field="textfield"
      placeholder="card address_country"
      v-model="cr8Customer.card.address_country"
      :details="true"
      :error="error.card.address_country"/>

    <c-global
      field="textfield"
      placeholder="card postcode (optional)"
      v-model="cr8Customer.card.address_postcode"
      :details="true"
      :error="error.card.address_postcode"/>

    <c-global
      field="textfield"
      placeholder="card address_state (optional)"
      v-model="cr8Customer.card.address_state"
      :details="true"
      :error="error.card.address_state"/>

      <v-btn
        class="gradient-button"
        block
        @click="testpk()"
        >
        <span style="color: white;">
          {{ isLogin === true && role === 'customer' ? 'UPDATE' : 'SAVE' }}
        </span>
      </v-btn>
        </v-flex>

      <v-flex v-else>
        <h1>Successfully Registered</h1>

        <v-btn block color="primary" @click="closeSuccess()">Close</v-btn>
      </v-flex>
      </v-flex>

      <v-snackbar
        v-model="snackbar"
        :multi-line="true"
        bottom
        :timeout="2000"
      >
        {{ errorMessage }}
      </v-snackbar>
    </v-layout>
  </modal>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import CustomResponsive from '~/plugins/mixins/responsive'
  import Error from '~/plugins/mixins/error_handling'

  export default {
    mixins: [CustomResponsive, Error],
    computed: {
      ...mapGetters('login', ['registration', 'isLogin', 'role']),
      ...mapGetters('imaginaryuser', ['imaginaryuser'])
    },
    watch: {
      'registration' () {
        if (this.registration == true) {
          this.$modal.show('registration')
        }
      }
    },
    data: () => ({
      isRegistered: false,
      snackbar: false,
      errorMessage: '',
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        company: '',
        abn: '',
        mobile: ''
      },
      cr8Customer: {
        card: {
          number: null,
          expiry_month: '',
          expiry_year: null,
          cvc: null,
          name: '',
          address_line1: '',
          address_city: '',
          address_postcode: '',
          address_state: '',
          address_country: ''
        }
      }
    }),
    methods: {
      ...mapActions('login', ['CHANGE_REGISTRATION']),
      ...mapActions('imaginaryuser', ['CHANGE_CREATE_USER']),
      testpk () {
        if (!_.find(this.imaginaryuser, {'email': this.form.email})) {
          this.$set(this.cr8Customer, 'email', this.form.email)
          this.$set(this.form, 'role', 'customer')
          this.resetError()
          this.CHANGE_CREATE_USER({'form': this.form, 'card': this.cr8Customer}).then(data => {
              this.isRegistered = true
              this.resetError()
          }).catch(data => {
              this.snackbar = true
              this.errorMessage = data.data.error_description
              this.setError(data.data.messages)
          })
        } else {
          this.snackbar = true
          this.errorMessage = 'email alreay existed'
        }
      },
      closeSuccess () {
        this.close()
        this.isRegistered = false
      },
      close () {
        this.CHANGE_REGISTRATION(false)
        this.$modal.hide('registration')
      }
    }
  }
</script>

<style>
  .overflow-y {
    overflow-y: auto;
  },
  .negative-15 {
    margin-top: -15px;
  }
</style>

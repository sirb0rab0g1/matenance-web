<template>
  <!--
    REMINDER: implementation below will be re implemented after db is already connected
  -->
  <modal
    name="account"
    height="auto"
    :clickToClose="false"
    :width="320"
    :scrollable="true"
    >
    <v-layout row wrap class="mb-2">
      <v-toolbar card prominent class="gradient helvetica">

        <v-toolbar-title style="color: white;">
          <!-- {{ isLogin === true ? 'Update' : 'Registration' }} -->
          Update
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="close">
          <v-icon style="color: white;">close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-flex class="pt-2 pl-2 pr-2 overflow-y" style="height: 500px;">
        <v-flex>
          <c-global
            field="textfield"
            v-model.email="form.email"
            placeholder="Email"
            :details="true"
            :error="error.card.email" />

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

        <v-btn block class="gradient-button" @click="addcard = !addcard">
          <span style="color: white;">
            {{ !addcard ? 'ADD CARD' : 'CANCEL CARD' }}
          </span>
        </v-btn>
        <v-flex v-if="addcard === true">
          <small>
            NOTE: COPTY THIS TEMPORARY CARD! <br/>
            5520000000000000 
          </small>
          <c-global
            field="textfield"
            mask="################"
            placeholder="card number"
            v-model="newCard.number"
            :details="true"
            :error="error.card.number"/>

          <c-global
            field="textfield"
            mask="##"
            placeholder="card expiry_month"
            v-model="newCard.expiry_month"
            :details="true"
            :error="error.card.expiry_month"/>

          <c-global
            field="textfield"
            mask="####"
            placeholder="card expiry_year"
            v-model.number="newCard.expiry_year"
            :details="true"
            :error="error.card.expiry_year"/>

          <c-global
            field="textfield"
            mask="###"
            placeholder="card cvc"
            v-model.number="newCard.cvc"
            :details="true"
            :error="error.card.cvc"/>

          <c-global
            field="textfield"
            placeholder="card name"
            v-model="newCard.name"
            :details="true"
            :error="error.card.name"/>

          <c-global
            field="textfield"
            placeholder="card address_line1"
            v-model="newCard.address_line1"
            :details="true"
            :error="error.card.address_line1"/>

          <c-global
            field="textfield"
            placeholder="card address_city"
            v-model="newCard.address_city"
            :details="true"
            :error="error.card.address_city"/>

          <c-global
            field="textfield"
            placeholder="card address_country"
            v-model="newCard.address_country"
            :details="true"
            :error="error.card.address_country"/>

          <c-global
            field="textfield"
            placeholder="card postcode (optional)"
            v-model="newCard.address_postcode"
            :details="true"
            :error="error.card.address_poscode"/>

          <c-global
            field="textfield"
            placeholder="card address_state (optional)"
            v-model="newCard.address_state"
            :details="true"
            :error="error.card.address_state"/>
          <v-btn block class="gradient" @click="createNewCard()">
            <span style="color: white;">
              CREATE CARD
            </span>
          </v-btn>
        </v-flex>

        <v-flex class="text-xs-center mt-2">
          <span>
            <h3>My Card/s</h3>
          </span>

          <v-flex xs12 class="pa-1" v-for="(item, index) in form.card" :key="index">
            <v-card>
              <v-layout row wrap>
                <v-flex sm4 xs4>
                  <v-img
                    :src="item.scheme === 'master' ? 'https://www.azernews.az/media/2016/08/15/mastercard__logo_140815.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Visa_Electron.svg/2000px-Visa_Electron.svg.png'"
                    height="100"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex sm7 xs7 class="align-xs-left align-sm-left">
                  <v-flex lg12 md12 sm12 xs12 class="pa-1 mt-1">
                    {{ capital(item.scheme) }}
                    <small>
                      <v-flex>
                        Name: {{ capital(item.name) }}
                      </v-flex>
                      <v-flex>
                        Number: {{ item.display_number }}
                      </v-flex>
                      <v-flex>
                        Exp. Month: {{ item.expiry_month }}
                      </v-flex>
                      <v-flex>
                        Exp. Year: {{ item.expiry_year }}
                      </v-flex>
                    </small>
                    </v-flex>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>

              <v-flex v-if="updatecard && currentindex === index" class="pa-1">
				        <c-global
                  field="textfield"
                  mask="################"
                  placeholder="card number"
                  v-model="updatedCard.number"
                  :details="true"
                  :error="error.card.number"/>

				        <c-global
                  field="textfield"
                  mask="##"
                  placeholder="card expiry_month"
                  v-model="updatedCard.expiry_month"
                  :details="true"
                  :error="error.card.expiry_month"/>

				        <c-global
                  field="textfield"
                  mask="####"
                  placeholder="card expiry_year"
                  v-model.number="updatedCard.expiry_year"
                  :details="true"
                  :error="error.card.expiry_year"/>

				        <c-global
                  field="textfield"
                  mask="###"
                  placeholder="card cvc"
                  v-model.number="updatedCard.cvc"
                  :details="true"
                  :error="error.card.cvc"/>

				        <c-global
                  field="textfield"
                  placeholder="card name"
                  v-model="updatedCard.name"
                  :details="true"
                  :error="error.card.name"/>

				        <c-global
                  field="textfield"
                  placeholder="card address_line1"
                  v-model="updatedCard.address_line1"
                  :details="true"
                  :error="error.card.address_line1"/>

				        <c-global
                  field="textfield"
                  placeholder="card address_city"
                  v-model="updatedCard.address_city"
                  :details="true"
                  :error="error.card.address_city"/>

				        <c-global
                  field="textfield"
                  placeholder="card address_country"
                  v-model="updatedCard.address_country"
                  :details="true"
                  :error="error.card.addres_country"/>

				        <c-global
                  field="textfield"
                  placeholder="card postcode (optional)"
                  v-model="updatedCard.address_postcode"
                  :details="true"
                  :error="error.card.address_postcode"/>

				        <c-global
                  field="textfield"
                  placeholder="card address_state (optional)"
                  v-model="updatedCard.address_state"
                  :details="true"
                  :error="error.card.address_state"/>

        <v-btn block class="gradient" style="color: white;" @click="updateCusCard">UPDATE</v-btn>
              </v-flex>
              <v-flex>
                <v-layout row wrap>
                <v-flex lg6 md6 sm6 xs6 class="pa-2">
                  <v-btn block @click="deleteCard(item.token)" style="color: white;" class="gradient">
                    DELETE
                  </v-btn>
                </v-flex>
                <v-flex lg6 md6 sm6 xs6 class="pa-2">
                  <v-btn block style="color: white;" @click="updateCard(index, item)" class="gradient">
                    {{ updatecard && currentindex === index ? 'CANCEL' : 'UPDATE' }}
                  </v-btn>
                </v-flex>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
        </v-flex>

        <v-btn
          class="gradient-button"
          block
          @click="testpk()"
          >
          <span style="color: white;">
            SAVE
          </span>
        </v-btn>
        </v-flex>

        <v-snackbar
        v-model="snackbar"
        :multi-line="true"
        bottom
        :timeout="2000"
      >
        {{ errorMessage }}
      </v-snackbar>
      </v-flex>
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
      ...mapGetters('imaginaryuser', ['currentUser', 'customerAccount', 'imaginaryuser'])
    },
    watch: {
      currentUser () {
        this.form = Object.assign({}, this.form, this.currentUser)
      },
      customerAccount () {
        if (this.customerAccount === true) {
          this.$modal.show('account')
          this.setForm()
          this.findPrimary()
        }
      }
    },
    mounted () {
      this.setForm()
    },
    data: () => ({
      currentindex: null,
      updatecard: false,
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
      addcard: false,
      newCard: {
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
      },
      updatedCard: {
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
    }),
    methods: {
      ...mapActions('login', ['CHANGE_REGISTRATION']),
      ...mapActions('imaginaryuser', ['ADDITIONAL_CARD', 'CHANGE_CREATE_USER', 'CHANGE_CUSTOMER_ACCOUNT', 'REMOVE_CARD', 'UPDATE_CUS_CARD']),
      capital (payload) {
        return _.startCase(payload)
      },
      setForm () {
        this.form = Object.assign({}, this.form, this.currentUser)
      },
      createNewCard () {
        this.resetError()
        this.ADDITIONAL_CARD(this.newCard).then(data => {
          this.addcard = false
          this.resetError()
        }).catch(data => {
          this.snackbar = true
          this.errorMessage = data.data.error_description
          this.setError(data.data.messages)
        })
      },
      updateCusCard () {
        /*
          REMINDER:
          updating the only needed payload
        */

        let updatePrimary = {email: this.form.email, card: this.updatedCard}
        let makeprimary = {email: this.form.email, primary_card_token: this.updatedCard.token}
        let revert = {email: this.form.email, primary_card_token: localStorage.getItem('primary_card')}

        let payload = {
          primary: makeprimary,
          update: updatePrimary,
          revert: revert
        }
        
        this.UPDATE_CUS_CARD(payload)
      },
      deleteCard (payload) {
          this.REMOVE_CARD(payload).then(data => {
              this.errorMessage = 'Successfully Deleted'
          }).catch(data => {
              this.snackbar = true 
              this.errorMessage = data.data.error_description
          })
      },
      updateCard (payload, object) {
        this.updatecard = !this.updatecard
        this.currentindex = payload

        this.updatedCard = Object.assign({}, this.updatedCard, object)
      },
      findPrimary () {
        let primaryCard = _.find(this.form.card, {'primary': true})
        localStorage.setItem('primary_card', primaryCard.token)
      },
      testpk () {
        if (_.find(this.imaginaryuser, {'email': this.form.email})) {
          console.log('User Found!')
        } else {
          this.snackbar = true
          this.errorMessage = 'email alreay existed'
        }
      },
      close () {
        this.CHANGE_CUSTOMER_ACCOUNT(false)
        this.$modal.hide('account')
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
 

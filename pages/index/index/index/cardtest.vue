<template>
  <v-content>
    <v-container>

      <v-layout row wrap>
        <v-flex lg12 md12 sm12 xs12 class="pa-1">
<v-btn block @click="reset()" color="primary">RESET</v-btn>
</v-flex>
        <v-flex xl6 lg6 md6 sm6 xs6 class="pa-1">
        <v-btn block @click="createCharges = true" color="primary">CREATE CHARGES</v-btn>
      </v-flex>
      <v-flex xl6 lg6 md6 sm6 xs6 class="pa-1">
        <v-btn block @click="createCard = true" color="primary">CREATE CARD</v-btn>
      </v-flex>
      <v-flex xl6 lg6 md6 sm6 xs6 class="pa-1">
        <v-btn block @click="createCustomer = true" color="primary">CREATE CUSTOMER</v-btn>
      </v-flex>
      </v-layout>


      <v-dialog
      v-model="createCharges"
        width="500"
      >
        <v-card>
          <v-flex class="pa-2">
            <h1>CREATE CHARGE</h1>
      <v-text-field label="amount" v-model="card.amount" hide-details class="mt-2"/>
      <v-text-field label="description" v-model="card.description" hide-details class="mt-2"/>
      <v-text-field label="email" v-model="card.email" hide-details class="mt-2"/>
      <v-text-field label="card number" v-model="card.card.number" hide-details class="mt-2"/>
      <v-text-field label="card expiry_month" v-model="card.card.expiry_month" hide-details class="mt-2"/>
      <v-text-field label="card expiry_year" v-model="card.card.expiry_year" hide-details class="mt-2"/>
      <v-text-field label="card cvc" v-model="card.card.cvc" hide-details class="mt-2"/>
      <v-text-field label="card name" v-model="card.card.name" hide-details class="mt-2"/>
      <v-text-field label="card address_line1" v-model="card.card.address_line1" hide-details class="mt-2"/>
      <v-text-field label="card address_city" v-model="card.card.address_city" hide-details class="mt-2"/>
      <v-text-field label="card postcode" v-model="card.card.address_postcode" hide-details class="mt-2"/>
      <v-text-field label="card address_state" v-model="card.card.address_state" hide-details class="mt-2"/>
      <v-text-field label="card address_country" v-model="card.card.address_country" hide-details class="mt-2"/>
      <v-btn color="primary" block @click="test()">
      CHARGE CARD
      </v-btn>
          </v-flex>
        </v-card>
      </v-dialog>


      <v-dialog
      v-model="createCard"
        width="500"
      >
        <v-card>
          <v-flex class="pa-2">
            <h1>CREATE CARD</h1>
      <v-text-field label="number" v-model="cr8Card.number" hide-details class="mt-2"/>
      <v-text-field label="expiry_month" v-model="cr8Card.expiry_month" hide-details class="mt-2"/>
      <v-text-field label="expiry_year" v-model="cr8Card.expiry_year" hide-details class="mt-2"/>
      <v-text-field label="cvc" v-model="cr8Card.cvc" hide-details class="mt-2"/>
      <v-text-field label="name" v-model="cr8Card.name" hide-details class="mt-2"/>
      <v-text-field label="address_line1" v-model="cr8Card.address_line1" hide-details class="mt-2"/>
      <v-text-field label="address_city" v-model="cr8Card.address_city" hide-details class="mt-2"/>
      <v-text-field label="address_postcode" v-model="cr8Card.address_postcode" hide-details class="mt-2"/>
      <v-text-field label="address_state" v-model="cr8Card.address_state" hide-details class="mt-2"/>
      <v-text-field label=".address_country" v-model="cr8Card.address_country" hide-details class="mt-2"/>
      <v-btn color="primary" block @click="createCardSubmit()">
      CREATE CARD
      </v-btn>
          </v-flex>
        </v-card>
      </v-dialog>


      <v-dialog
      v-model="createCustomer"
        width="500"
      >
        <v-card>
          <v-flex class="pa-2">
            <h1>CREATE CUSTOMER</h1>
      <v-text-field label="email" v-model="cr8Customer.email" hide-details class="mt-2"/>
      <v-text-field label="card number" v-model="cr8Customer.card.number" hide-details class="mt-2"/>
      <v-text-field label="card expiry_month" v-model="cr8Customer.card.expiry_month" hide-details class="mt-2"/>
      <v-text-field label="card expiry_year" v-model="cr8Customer.card.expiry_year" hide-details class="mt-2"/>
      <v-text-field label="card cvc" v-model="cr8Customer.card.cvc" hide-details class="mt-2"/>
      <v-text-field label="card name" v-model="cr8Customer.card.name" hide-details class="mt-2"/>
      <v-text-field label="card address_line1" v-model="cr8Customer.card.address_line1" hide-details class="mt-2"/>
      <v-text-field label="card address_city" v-model="cr8Customer.card.address_city" hide-details class="mt-2"/>
      <v-text-field label="card postcode" v-model="cr8Customer.card.address_postcode" hide-details class="mt-2"/>
      <v-text-field label="card address_state" v-model="cr8Customer.card.address_state" hide-details class="mt-2"/>
      <v-text-field label="card address_country" v-model="cr8Customer.card.address_country" hide-details class="mt-2"/>
      <v-btn color="primary" block @click="createCustomerSubmit()">
      CREATE CUSTOMER
      </v-btn>
          </v-flex>
        </v-card>
      </v-dialog>

      <!-- <ul>
        <li v-for="(item, index) in myCreatedCards" :key="index">
          {{ item }}
        </li>
      </ul> -->

      <v-layout row wrap>
        <v-flex
          lg12
          md12
          sm12
          xs12
          class="pa-1"
          v-for="(item, index) in myCreatedCards" :key="index">
        <v-card>
          <v-layout row wrap>
            <v-flex lg12 md12 sm12 xs12 class="pa-1">
              Token: {{ item.token }}
            </v-flex>
            <v-flex lg12 md12 sm12 xs12 class="pa-1">
              Scheme: {{ item.scheme }} <br/>
              Name: {{ item.name }} <br/>
              Number: {{ item.display_number }}
            </v-flex>
          </v-layout>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import Pin from 'pinjs'
  import axios from 'axios'
  import { postPrivateApi, postPublishableApi } from '~/plugins/http-pinpayments'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    data: () => ({
      createCharges: false,
      createCard: false,
      createCustomer: false,
      myCreatedCards: [],
      card: { // create charges
        amount: 400,
        description: 'Charge Card',
        email: 'roland@pinpayments.com',
        card: {
          number: 4200000000000000,
          expiry_month: '05',
          expiry_year: 2020,
          cvc: 123,
          name: 'Roland Robot',
          address_line1: '42 Sevenoaks St',
          address_city: 'Lathlain',
          address_postcode: 6454,
          address_state: 'WA',
          address_country: 'AU'
        }
      },
      cr8Card: {
        number: 5520000000000000,
        expiry_month: '05',
        expiry_year: 2020,
        cvc: 519,
        name: 'Roland Robot',
        address_line1: '42 Sevenoaks St',
        address_city: 'Lathlain',
        address_postcode: 6454,
        address_state: 'WA',
        address_country: 'AU'
      },
      cr8Customer: {
        email: 'roland@pin.net.au',
        card: {
          number: 5520000000000000,
          expiry_month: '05',
          expiry_year: 2020,
          cvc: 123,
          name: 'Roland Robot',
          address_line1: '42 Sevenoaks St',
          address_city: 'Lathlain',
          address_postcode: 6454,
          address_state: 'WA',
          address_country: 'AU'
        }
      }
    }),
    computed:{
      ...mapGetters('cc', ['createdCards'])
    },
    watch: {
      createdCards () {
        this.myCreatedCards = Object.assign([], this.myCreatedCards, this.createdCards)
      }
    },
    mounted () {
      this.pasmo()
    },
    methods: {
      ...mapActions('cc', ['CHANGE_CREATEDCARD']),
      ...mapMutations('imaginaryuser', ['RESET_CARD']),
      reset () {
        this.RESET_CARD()
      },
      test () {
        postPrivateApi('/1/charges', this.card)
            .then(data => {
              console.log(data.response)
            })
            .catch(data => {
              console.log(data)
            })
      },
      pasmo () {
        this.myCreatedCards = Object.assign([], this.myCreatedCards, this.createdCards)
      },
      createCardSubmit () {
        this.CHANGE_CREATEDCARD(this.cr8Card)
      },
      createCustomerSubmit () {
        console.log(this.cr8Customer)
        postPrivateApi('/1/customers', this.cr8Customer)
            .then(data => {
              console.log(data.response)
            })
            .catch(data => {
              console.log(data)
            })
      }
    },
    transition: 'slide'
  }
</script>

<template>
<v-content>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>
      <v-flex
        xs12
        sm6
        md6
        lg4
        v-for="(title, index) in assetss"
        :key="index"
        class="pa-1"
        >


        <no-ssr>
          <v-flex
            class="mt-1 custom-button pointer hidden-sm-and-up"
            style="background-color: white;"
            @click="changingIcon(index)"> <!-- for mobile view -->
            <small class="button-text default-font"><!-- goTo(title.route) -->
              {{ startCase(title.name) }}
            </small>
            <v-slide-y-transition>
              <v-card flat class="mt-2 hidden-sm-and-up" v-if="isClicked === index" style="border-radius: 0px 0px 15px 15px;">

                <v-img
                  :src="title.img"
                  aspect-ratio="2.75"
                  ></v-img>
                <v-card-text>
                <v-btn @click="goTo(title.route)" style="margin-top: -4px; color: white;" class="gradient-button">
                  <strong>BOOK NOW</strong>
                </v-btn>

                <v-flex v-if="index === 0" style="text-align: left;" class="child-size helvetica">
                  Find a House Cleaning Service Around Me! <br/> <br/>

                  We have you covered! Welcome to Matenance, it is our job to connect you directly with vetted, skilled, equipped, certified and hands on House Cleaning providers around you. <br/> <br/>
                  If they don’t live and breathe House Cleaning we don't engage them. If they have less than 4.5 stars, we don't display them. If they are good at what they do, friendly, trustworthy, reliable and great House Cleaners, we love to match you up with them! <br/> <br/>

                  We truly believe you will love using the Matenance web/app where bookings are swift, schedules are YOURS, changes are easy and choosing your own House Cleaning team, is absolutely a given!
                  <br/> <br/>

                  <ul>
                    <li>Find great rates</li>
                    <li>You choose the time & day</li>
                    <li>Easy to book now and make changes or cancellations later</li>
                    <li>Engage directly with local, certified cleaners</li>
                    <li>Auto payments and invoicing</li>
                    <li>Find great rates</li>
                    <li>Every Visit - 100% Guaranteed</li>
                  </ul> <br/><br/>

                House Cleaning now has a new name and we welcome you to the Matenance platform. Find a Professional House Cleaner around you and BOOK NOW at the right price.
                </v-flex>

                <v-flex v-if="index === 1" style="text-align: left;" class="child-size helvetica">
                  Find a Commercial Cleaning Service Around Me! <br/> <br/>


                  Tired of the Commercial Cleaning Merry Go Round, where you pay someone, they pay someone else, who then pays someone else as little as possible to care for your office or commercial space? The value to the end of line is lost, the care factor is watered down and the ownership of responsibility is all but completely intangible. Chances are this is what you are paying for currently! <br/> <br/>


                  With Matenance, you engage DIRECTLY with the hands on Commercial Cleaning service provider who is accountable for completing the job each and every time to retain their minimum rating of 4.5 stars! <br/> <br/>

                  There are no lock-in contracts, in fact you can cancel the day before a service or switch teams with ease and it is our job to connect you directly with vetted, skilled, equipped and hands on Commercial Cleaning providers around you. We will even remind them of those periodic tasks for you so that they are sure to be done on schedule, every time! <br/> <br/>

                  <ul>
                    <li>Engage directly with local Office & Commercial Cleaners </li>
                    <li>Find great rates</li>
                    <li>No lock in contracts </li>
                    <li>Only pay for the service visits rendered rather than flat annual </li>
                    <li>Auto payments and timely invoicing</li>
                    <li>Systematic Quality Control</li>
                    <li>Periodic tasks scheduled in or bumped out by you as required</li>
                    <li>Every Service Provider - 100% Guarantees their work</li>
                  </ul> <br/><br/>

                  Office & Commercial Cleaning now has a new name and we welcome you to the Matenance platform. Find a Professional Office or Commercial Cleaner around you and BOOK NOW at the right price.
                </v-flex>

                <v-flex v-if="index === 2" style="text-align: left;" class="child-size helvetica">
                  Find a Spring Cleaning Service Around Me! <br/> <br/>

                  At Matenance, we understand that a spring clean is different to a regular clean, which is why we don’t blur the lines and display a “regular cleaner (+oven)” to you when what you need is an expert deep cleaner. Our Spring Cleaners are professionals with experience in cleaning for real estate agencies and equipped with all the tools necessary to complete the tasks to an exemplary standard. <br/><br/>

                  To wash is not to dust, to scrub is not to wipe, to shift is not to clean around, to dismantle is not to do a half attempt and to Spring Clean is not to clean! You choose the hours with the help of our estimation tool and then engage with the cleaners you prefer; all of which have ratings of 4.5 stars or above. <br/><br/>

                  We truly believe you will love using the Matenance web/app where bookings are swift, schedules are YOURS, changes are easy and choosing your own Spring Cleaning team, is absolutely a given! <br/><br/>

                  <ul>
                    <li>Easy to book now</li>
                    <li>Engage directly with local, vetted Spring Cleaners</li>
                    <li>Find great rates</li>
                    <li>Auto payment and invoicing</li>
                    <li>Every Service Provider - 100% Guarantees their work</li>
                  </ul> <br/><br/>

                  Spring Cleaning now has a new name and we welcome you to the Matenance platform. Find a Professional Spring Cleaner around you and BOOK NOW at the right price.

                </v-flex>

                <v-flex v-if="index === 3" style="text-align: left;" class="child-size helvetica">
                  Find an End Of Lease Cleaning Service Around Me! <br/><br/>

                  End Of Lease Cleaning is a big task, it will generally take each tenant the best part of the entire day to do and then more than likely be asked back by the real estate agent to fix things. <br/><br/>

                  That’s where Matenance comes in! <br/><br/>

                  It is our job to connect you directly with vetted, skilled, equipped and hands on End Of Lease Cleaning providers around you. We find professional End Of Lease Cleaners and enable you to book with them now, at a fair price. If they miss something, they will come back to fix it; 100% guaranteed. <br/><br/>

                  You choose the hours with the help of our estimation tool and then engage with the cleaners you prefer; all of which have ratings of 4.5 stars or above. <br/><br/>

                  We truly believe you will love using the Matenance web/app where bookings are swift, schedules are YOURS, changes are easy and choosing your own End Of Lease Cleaning team, is absolutely a given! <br/><br/>

                  <ul>
                    <li>Easy to book now </li>
                    <li>Engage directly with local, vetted End Of Lease Cleaners</li>
                    <li>Find great rates</li>
                    <li>Auto payment and invoicing</li>
                    <li>Every Service Provider - 100% Guarantees their work</li>
                  </ul> <br/><br/>

                  End Of Lease Cleaning now has a new name and we welcome you to the Matenance platform. Find a Professional End Of Lease Cleaner around you and BOOK NOW at the right price.
                </v-flex>

                <v-flex v-if="index === 4" style="text-align: left;" class="child-size helvetica">
                  Find a Carpet Cleaning Service Around Me! <br/><br/>

                  You have come to the right place at Matenance we have searched high and low to find the best value, vetted, seriously equipped & highly experienced Carpet Cleaners around you! <br/><br/>

                  If they have less than 4.5 stars, we don't display them. If they are good at what they do and with a fair price, friendly, trustworthy, reliable and great Carpet Cleaners, we love to match you up with them! <br/><br/>

                  We truly believe you will love using the Matenance web/app where bookings are swift, schedules are YOURS, changes are easy and choosing your own Carpet Cleaning team, is absolutely a given! <br/><br/>

                  <ul>
                    <li>Easy to book now </li>
                    <li>Engage directly with local, vetted Carpet Cleaners</li>
                    <li>Find great rates</li>
                    <li>Auto payment and invoicing</li>
                    <li>Every Service Provider - 100% Guarantees their work</li>
                  </ul> <br/><br/>

                  Carpet Cleaning now has a new name and we welcome you to the Matenance platform. Find a Professional Carpet Cleaner around you and BOOK NOW at the right price.
                </v-flex>

              </v-card-text>
            </v-card>
          </v-slide-y-transition>
          </v-flex>
          </no-ssr>
        </v-flex>
        <v-flex lg12 class="hidden-sm-and-down">
          <h1>"FIND A CLEANER" VIEW IS STILL IN PROGRESS</h1> <br/>
          <small>please resize your screen into mobile view</small><br/>
          <small>PLEASE refer to this following example: <a href="https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports">https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports</a></small>
        </v-flex>
        <choices-modal ></choices-modal>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import { mapActions } from 'vuex'
  import GlobalDummy from '~/plugins/mixins/global_dummy'
  import Global from '~/plugins/mixins/global'
  import { postApi } from '~/plugins/http'
  import Pin from 'pinjs'
  import axios from 'axios'

  export default {
    data: () => ({
      show: true,
      isClicked: null,
      defaultIcon: 'arrow_drop_down',
      titles: [
        {
          name: 'House Cleaning',
          route: '/HouseCleaning'
        },
        {
          name: 'Commercial Cleaning',
          route: '/CommercialCleaning'
        },
        {
          name: 'Spring Cleaning',
          route: '/SpringCleaning'
        },
        {
          name: 'Bond Cleaning',
          route: '/FinalBondCleaning'
        },
        {
          name: 'Carpet Cleaning',
          route: '/CarpetCleaning'
        }
      ]
    }),
    mixins: [
      GlobalDummy,
      Global
    ],
    methods: {
      ...mapActions('FindACleaner', ['CHANGE_MODAL']),
      modal () {
        this.CHANGE_MODAL(this.show)
      },
      changingIcon (index) {
        if (index !== this.isClicked) {
          this.isClicked = index
          this.defaultIcon = 'arrow_drop_up'
        } else {
          this.isClicked = null
          if (index !== this.isClicked) {
            this.defaultIcon = 'arrow_drop_down'
          }
          else {
            this.defaultIcon = 'arrow_drop_up'
          }
        }
      },
      regexSample () {
        let digits = /\d/
        let anyword = /\w/
        let notword = /\W/
        let aeiou = /[aeiou]/
        let name = /[KMkm]ent/
        //console.log(name.test('ment'))

        let array = ['123', 123, 'name']
        for (let pasmo in array) {
          console.log(digits.test(array[pasmo]))
        }
      }
    },
    created () {
  // this.regexSample()
    },
    transition: 'slide'
  }
</script>

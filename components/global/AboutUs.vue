<template>
  <v-container>
    <v-layout row wrap fill-height>

    <v-flex
        xs12
        sm6
        md6
        lg4
        v-for="(title, index) in titles"
        :key="index"
        class="pa-1 helvetica"
        >
        <v-flex
            class="mt-1 custom-button pointer hidden-sm-and-up"
            style="background-color: white;"
            @click="getIndex(index)"> <!-- for mobile view -->
            <small class="button-text default-font"> <!-- goTo(title.route) -->
              {{ title.title }}
            </small>
            <v-slide-y-transition>
              <v-card flat class="mt-2 hidden-sm-and-up" v-if="isClicked === index" style="border-radius: 0px 0px 15px 15px;">
                <v-card-text v-if="index === 0" class="text-xs-left">
                  <v-flex>
                  <span>
                      <strong>MATEnance Pty Ltd</strong> is a website/app designed to help Customers connect
                      directly with the top 5% of hands on performers in any given service
                      industry and with the highest level of end to end convenience possible for
                      the Customer.
                  </span>
                  </v-flex>
                  <v-flex class="mt-2">
                  <span>
                      We currently support: House Cleaning, Commercial Cleaning, Spring Cleaning,
                      Final / Bond Cleaning &amp; Carpet Cleaning and are excited to be
                      developing the same high-level support for additional services.
                  </span>
                  </v-flex>
                </v-card-text>
                <v-card-text v-if="index === 1" class="text-xs-left">
                    <ul class="my-custom-bullets-green-medium">
                      <li>
                        <strong>Book top ranked,</strong> hands on service providers around you, directly
                      </li>
                      <li>
                        <strong>View profiles,</strong> pricing, certifications and photos of candidates
                      </li>
                      <li>
                        <strong>Complete control</strong> over your choice of personnel, tasks and schedule
                      </li>
                      <li>
                        <strong>Changes &amp; cancellations</strong> are easy to manage
                      </li>
                      <li>
                        <strong>Pay via auto debit</strong> into a 3-day holding account
                      </li>
                  </ul>
                </v-card-text>
                <v-card-text v-if="index === 2" class="text-xs-left">
                  <v-flex>
                  <span>
                    √ Quickly &amp; easily set YOUR schedule &amp; requirements
                  </span>
                  </v-flex>
                  <v-flex class="mt-2">
                  <span>
                    √ INSTANTLY receive options with good information such as photos, reviews, prices and certifications of the service providers around you
                  </span>
                  </v-flex>
                  <v-flex class="mt-2">
                  <span>
                    √ Select your favourite available team and auto transact on the day. Easily make changes and cancel anytime.
                  </span>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-slide-y-transition>
          </v-flex>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  export default {
    data: () => ({
      titles: [
        {
          title: 'About Us'
        },
        {
          title: 'Why Us'
        },
        {
          title: 'How It Works'
        }
      ],
      isClicked: null,
    }),
    methods: {
      getIndex (index) {
        if (this.isClicked === index) {
          this.isClicked = null
        } else {
          this.isClicked = index
        }
      }
    }
  }
</script>

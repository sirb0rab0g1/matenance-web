<template>
  <v-layout row wrap>
    <v-flex xs12>
    <v-card>
      <v-list two-line>
        <template>
          <v-list-tile avatar ripple>
            <v-list-tile-content>
              <!-- <v-list-tile-title>Name</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">Sub Name</v-list-tile-sub-title>
              <v-list-tile-sub-title>asd</v-list-tile-sub-title> -->
              IMG
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>
                <v-rating small style="margin-bottom: -10px; margin-top: -10px;" v-model="rating" />
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <u>
                  <i>
                    <b>0% Complaints</b>
                  </i>
                </u>
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <u>
                  <i>
                    <b>0 Reviews</b>
                  </i>
                </u>
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <b>
                  <i>
                    Close my account [ ]
                  </i>
                </b>
              </v-list-tile-action-text>
              
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>

    </v-flex>
  
    <v-flex xs12 class="pa-1" v-for="(item, index) in titles" :key="index">
      <v-flex
        class="mt-1 custom-button pointer hidden-sm-and-up"
        style="background-color: white;"
        @click="change(index)">
          <small class="button-text default-font">
            <b>{{ item.name }}</b>
          </small>
          <v-slide-y-transition>
            <v-card flat class="mt-2 hidden-sm-and-up" v-if="isClicked === index" style="border-radius: 0px 0px 15px 15px;">
              <!-- <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
                ></v-img>
                <v-card-text>
                  <v-btn style="margin-top: -4px; color: white;" class="gradient-button">
                    <strong>BOOK NOW</strong>
                  </v-btn>
                </v-card-text> -->
              <h1>no content in mock up</h1>
          </v-card>
        </v-slide-y-transition>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      rating: 5,
      titles: [
        {name: 'CLEANER 1 PERSONAL INFORMATION'},
        {name: 'ADD A NEW TEAM MEMBER'},
        {name: 'INTRODUCE YOUR BUSINESS'},
        {name: 'MAPS'},
        {name: 'DOCUMENTS'},
        {name: 'PAYMENTS'}
      ],
      isClicked: null
    }),
    methods: {
      change (payload) {
        if (payload !== this.isClicked) {
          this.isClicked = payload
        } else {
          this.isClicked = null
        }
      }
    }
  }
</script>

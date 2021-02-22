<template>
    <v-layout row wrap class="mb-2">
	    <v-flex class="pt-2 pl-2 pr-2">
        <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>POSTCODES</h3>
	        </span>
	      </v-flex>

        <v-flex lg12 md sm12 xs6 mt-2>
          <v-btn class="gradient" @click="$modal.show('postcodemodal')" style="color:white; margin-left: 0px;">Add POSTCODE</v-btn>
        </v-flex>

        <modal
          name="postcodemodal"
          height="auto"
          :clickToClose="false"
          :width="320">
          <v-layout row wrap>
          <h1>WAIITNG FOR BACK END</h1>
          <v-flex xs12>
          <v-layout align-center justify-end row fill-height>
          <v-btn
            class="gradient-button"
            @click="$modal.hide('postcodemodal')"
          >
            <span style="color: white;">
              CLOSE
            </span>
          </v-btn>
          </v-layout>
        </v-flex>
          </v-layout>
        </modal>

        <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>AVAILABILITY</h3>
	        </span>
	      </v-flex>
        <v-flex class="lg12 md12 sm12 xs12 mt-4">
          <v-checkbox
            v-model="item.model"
            :label="item.title"
            v-for="(item, index) in availability"
            :key="index"
            style="margin-top: -20px;"
          ></v-checkbox>
        </v-flex>

        <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>MY TEAM</h3>
	        </span>
	      </v-flex>

      <v-card class="mt-2" v-if="myteam.length > 0" v-for="(item, index) in myteam" :key="index">
        <v-card-title primary-title>
          <c-global field="textfield" v-model="item.given_name" placeholder="Given Name"></c-global>
          <c-global field="textfield" v-model="item.family_name" placeholder="Family Name"></c-global>
          <c-global field="textfield" v-model="item.contact_number" placeholder="Contact Number"></c-global>
        </v-card-title>
      </v-card>

      <v-flex lg12 md sm12 xs6 mt-2>
        <v-btn class="gradient" @click="addteam" style="color: white; margin-left: 0px;">Add a new member</v-btn>
      </v-flex>

      <v-textarea
        outline
        class="my-textarea"
        auto-grow
        hide-details
        name="input-7-4"
        label="Enter some content to introduce your business."
        ></v-textarea>
      <small>
        Mention any great skills you have like bed making, ironing, hotel turns, pub cleaning
      </small>

      <v-divider></v-divider>
      <v-flex lg12 md12 sm12 xs12 mt-2>
        <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>UPLOAD IMAGE</h3>
	        </span>
	      </v-flex>
        <center>
          <croppa v-model="myCroppa" :width="300"></croppa>
        </center>
      </v-flex>
      <v-divider></v-divider>
      <v-flex lg12 md12 sm12 xs12 mt-2>
        <v-flex class="text-xs-center mt-2">
	        <span>
	          <h3>UPLOAD VIDEO</h3>
	        </span>
	      </v-flex>
        <center>
          <no-ssr>
          <uploader class="uploader-example">
            <uploader-unsupport></uploader-unsupport>
              <uploader-drop>
                <p>Drop your video here</p>
                <uploader-btn>select video</uploader-btn>
              </uploader-drop>
            <uploader-list></uploader-list>
          </uploader>
          </no-ssr>
        </center>
      </v-flex>
      <v-divider></v-divider>

      <v-flex class="text-xs-center mt-2">
	      <span>
	        <h3>Business process in place</h3>
	      </span>
	    </v-flex>

      <!-- <c-global field="combofield" placeholder="Which process does your business have in place1" :multiple="true" :items="daysChoices"></c-global> -->

      <v-flex class="lg12 md12 sm12 xs12 mt-4">
        <v-checkbox
          v-model="item.model"
          :label="item.title"
          v-for="(item, index) in daysChoices"
          :key="index"
          style="margin-top: -20px;"
        ></v-checkbox>
      </v-flex>

      <v-btn
        class="gradient-button"
        block
        @click=""
        >
        <span style="color: white;">
          <!-- {{ isLogin === true && role === 'customer' ? 'UPDATE' : 'SAVE' }} -->
          GO
        </span>
        </v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('login', ['registration', 'isLogin', 'role']),
    },
    data: () => ({
      myCroppa: {},
      availability: [
        {title: 'Monday Morning', model: false},
        {title: 'Monday Afternoon/Nights', model: false},
        {title: 'Tuesday Morning', model: false},
        {title: 'Tuesday Afternoon/Nights', model: false},
        {title: 'Wednesday Morning', model: false},
        {title: 'Wednesday Afternoon/Nights', model: false},
        {title: 'Thursday Morning', model: false},
        {title: 'Thursday Afternoon/Nights', model: false},
        {title: 'Friday Morning', model: false},
        {title: 'Friday Afternoon/Nights', model: false},
        {title: 'Saturday Morning', model: false},
        {title: 'Saturday Afternoon/Nights', model: false},
        {title: 'Sunday Morning', model: false},
        {title: 'Sunday Afternoon/Nights', model: false}
      ],
      attrs: {
        accept: 'video/*'
      },
      daysChoices: [
        {title: 'Right to Work', model: false},
        {title: 'Police Clearances', model: false},
        {title: 'Work Cover As Required', model: false},
        {title: 'Basic Equipment', model: false},
        {title: 'Eco Friendly Available', model: false},
        {title: 'No Bleach Concentrate', model: false},
        {title: 'Return to Fix 24 hrs', model: false},
        {title: 'Return to Fix 48 hrs', model: false},
        {title: 'White Cards (Construction Permit)', model: false},
        {title: 'Blue Cards (Children Permit', model: false},
        {title: 'MSDS Docs', model: false},
        {title: 'SWMS Docs', model: false},
        {title: 'Boom Lift Certified', model: false},
        {title: 'Confined Space Certified', model: false},
        {title: 'Hard Hats', model: false},
        {title: 'High Vis Vests', model: false},
        {title: 'Steel Cap Boots', model: false},
        {title: 'Personal Protective Equipement', model: false},
        {title: 'ABN', model: false},
        {title: 'ACN', model: false},
        {title: 'GST Registered', model: false}
      ],
      form: {
        given_name: '',
        family_name: '',
      },
      myteam: [
        {
          given_name: '',
          family_name: '',
          contact_number: null
        }
      ]
    }),
    methods: {
      addteam () {
        this.myteam.push({given_name: '', family_name: '', mobile_number: null})
      },
      uploadCroppedImage() {
        this.myCroppa.generateBlob(
          blob => {
            // write code to upload the cropped image file (a file is a blob)
          },
          'image/jpeg',
          0.8
        ); // 80% compressed jpeg file
      }
    }
  }
</script>

<style>
  .uploader-example {
    width: 100%;
    padding: 15px;
    margin: 40px auto 0;
    margin-top: 0px;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

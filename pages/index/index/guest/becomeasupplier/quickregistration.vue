<template>
    <v-layout row wrap class="mb-2">
	    <v-flex class="pt-2 pl-2 pr-2">

        <c-global field="textfield" v-model="form.given_name" placeholder="Given Name"></c-global>
        <c-global field="textfield" v-model="form.family_name" placeholder="Family Name"></c-global>
        <c-global field="textfield" v-model="form.abn" placeholder="ABN"></c-global>
        <c-global field="textfield" v-model="form.company_name" placeholder="Company Name"></c-global>
        <c-global field="textfield" v-model="form.email" placeholder="Email"></c-global>
        <c-global field="textfield" v-model="form.address" placeholder="Address"></c-global>
        <c-global field="textfield" v-model="form.postcode" placeholder="Post Code"></c-global>
        <c-global field="textfield" v-model="form.mobile_number" placeholder="Mobile Number"></c-global>
        <c-global field="textfield" type="password" v-model="form.password" placeholder="Password"></c-global>

        <v-radio-group class="pasmo" v-model="form.type" :mandatory="false" style="margin-bottom: -15px; margin-top: 8px;">
        <v-radio color="light-blue darken-3" value="Yes I have ABN">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Yes I have ABN
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="Yes I have ABN and pay GTS quarterly">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Yes I have ABN and pay GTS quarterly
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="Yes, I own a suitable car">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Yes, I own a suitable car
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="Yes I have suitable equipment">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              Yes I have suitable equipment
            </span>
          </div>
        </v-radio>
        <v-radio color="light-blue darken-3" value="I would love to have my own equipment">
          <div slot="label">
            <span style="color: #424242;" class="helvetica">
              I would love to have my own equipment
            </span>
          </div>
        </v-radio>
        </v-radio-group>

      <span mt-2>House / Domestic Cleaning</span>
      <c-global field="textfield" mask="##" v-model="form.housecleaning" placeholder="Charge per hour $"></c-global>

      <span mt-2>Commercial Cleaning</span>
      <c-global field="textfield" mask="##" v-model="form.commercialcleaning" placeholder="Charge per hour $"></c-global>

      <span mt-2>Spring Cleaning</span>
      <c-global field="textfield" mask="##" v-model="form.springcleaning" placeholder="Charge per hour $"></c-global>

      <span mt-2>Bond Cleaning</span>
      <c-global field="textfield" mask="##" v-model="form.bondcleaning" placeholder="Charge per hour $"></c-global>

      <span mt-2>Carpet Cleaning</span>
      <c-global field="textfield" mask="##" v-model="form.carpetcleaningminimum" placeholder="Charge per Room/Item (3 minimum per booking) $"></c-global>
      <c-global field="textfield" mask="##" v-model="form.carpetcleaningm2" placeholder="Charge per m2 (42m2 minimum) $"></c-global>


      <v-btn
        class="gradient-button"
        block
        @click=""
        >
        <span style="color: white;">
          <!-- {{ isLogin === true && role === 'customer' ? 'UPDATE' : 'SAVE' }} -->
          APPLY
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
      form: {
        given_name: '',
        family_name: '',
        abn: '',
        company_ame: '',
        email: '',
        address: '',
        postcode: '',
        mobile_number: '',
        password: '',
        type: '',
        housecleaning: '',
        commercialcleaning: '',
        springcleaning: '',
        bondcleaning: '',
        carpetcleaningminimum: '',
        carpetcleaningm2: ''
      }
    })
  }
</script>

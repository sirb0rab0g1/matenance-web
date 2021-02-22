<template>
  <v-flex lg12 md12 sm12 xs12 v-resize="onResize">
    <v-tabs
      slot="extension"
      v-model="model"
      :centered="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? true: false"
      color="grey lighten-5"
      slider-color="blue"
      :grow="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? true : false"
      show-arrows
    >
      <v-tab
        v-for="(item, index) in titles"
        :key="index"
        :ripple="false"
        @click="$router.push(item.route)"
        class="pointer helvetica"
        active-class
        style="color: #000000 !important"
        color="black"
      >
        <span class="default-font">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>
    <v-flex :style="toolbarTab" class="overflow-y">
      <nuxt-child />
    </v-flex>
  </v-flex>
</template>

<script>
  import CustomResponsive from '~/plugins/mixins/responsive'
  import Authentication from '~/plugins/authentication'
  import Global from '~/plugins/mixins/global'

  export default {
    mixins: [CustomResponsive, Authentication, Global],
    created () {
      this.isVerified()
      this.next(this.$nuxt.$route.path)
    },
    data: () => ({
      model: '',
      titles: [
        {
          title: 'Jobs',
          route: '/guest/becomeasupplier'
        },
        {
          title: 'Quick Apply',
          route: '/guest/becomeasupplier/quickregistration'
        },
        {
          title: 'Profile',
          route: '/guest/becomeasupplier/information'
        },
      ],
    }),
    methods: {
      next (index) {
        this.model = _.findIndex(this.titles, ['route', index])
        this.goTo(index)
      }
    },
    watch: {
        '$route.path' () {
        this.next(this.$nuxt.$route.path)
      }
    }
  }
</script>

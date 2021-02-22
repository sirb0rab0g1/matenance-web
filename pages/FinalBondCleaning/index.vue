<template>
  <v-flex lg12 md12 sm12 xs12>
    <v-tabs
      slot="extension"
      v-model="model"
      :centered="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? true: false"
      color="grey lighten-5"
      slider-color="light-blue darken-3"
      :grow="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? true : false"
      show-arrows
    >
      <v-tab
        v-for="(item, index) in titles"
        :key="index"
        :ripple="false"
        @click="next(item.route)"
        :class="titleWithHelvetica"
        active-class
        style="color: #000000 !important"
        color="black"
      >
        <span class="default-font">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>

    <div class="scroll-y" :style="toolbarTabFooter">
      <nuxt-child />
    </div>
  </v-flex>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import CustomResponsive from '~/plugins/mixins/responsive'

  export default {
    data: () => ({
      model: 0,
      titles: [
        {
          title: '1. Location',
          route: '/FinalBondCleaning'
        },
        {
          title: '2. Tasks',
          route: '/FinalBondCleaning/tasks'
        },
        {
          title: '3. Schedule',
          route: '/FinalBondCleaning/schedule'
        },
      ]
    }),
    mixins: [
      Global,
      CustomResponsive
    ],
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
    },
    created () {
      this.next(this.$nuxt.$route.path)
    }
  }
</script>

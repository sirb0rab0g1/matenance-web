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
    <div class="overflow-y" :style="!isLogin ? toolbarTabFooter : toolbarTab">
      <nuxt-child />
    </div>
  </v-flex>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import CustomResponsive from '~/plugins/mixins/responsive'
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      model: '',
      titles: [
        {
          title: 'Cleaning Services',
          route: '/'
        },
        {
          title: 'About Us',
          route: '/aboutus'
        },
        {
          title: 'FAQ\'s',
          route: '/faq'
        },
      ],
    }),
    computed: {
      ...mapGetters('login', ['isLogin'])
    },
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

<template>
  <v-navigation-drawer
    v-if="navigation"
    right
    fixed
    cliped
    permanent
    style="z-index: 99999; width: 100%;height: 225px; margin-bottom: -10px; border: solid 1px black;">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title" @click="isShow">
            <v-icon>close</v-icon>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: {
      items: {
        type: [Array, Object],
        default: () => ({
          title: String,
          route: String
        })
      }
    },
    data: () => ({
      mini: true
    }),
    computed: {
      ...mapGetters('navigation', ['navigation'])
    },
    methods: {
      ...mapActions('navigation', ['CHANGE_NAVIGATION']),
      isShow () {
        this.CHANGE_NAVIGATION(false)
      }
    }
  }
</script>

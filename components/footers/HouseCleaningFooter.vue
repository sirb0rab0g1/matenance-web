<template>
  <v-footer fixed height="auto">
    <div class="gradient footer-container"
         @click="$nuxt.$route.path === '/HouseCleaning' ? goTo('/HouseCleaning/tasks') :
                 $nuxt.$route.path === '/HouseCleaning/tasks' ? goTo('/HouseCleaning/schedule') : proceed('/jobs/suppliers')">
      <v-flex xs12>
        <v-btn dark flat>
          <strong>
            <span class="elevation footer">
              {{ $nuxt.$route.path === '/HouseCleaning' || $nuxt.$route.path === '/HouseCleaning/tasks' ? 'NEXT' : 'VIEW JOB SHEET'}}
            </span>
          </strong>
        </v-btn>
      </v-flex>
    </div>
  </v-footer>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { mapActions } from 'vuex'

  export default {
    mixins: [Global],
    methods: {
      ...mapActions('navigation', ['CHANGE_LAST_ROUTE']),
      proceed (payload) {
        this.CHANGE_LAST_ROUTE(this.$route.fullPath)
        this.goTo(payload)
      }
    }
  }
</script>

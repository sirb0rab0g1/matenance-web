<template>
  <v-footer fixed height="auto">
    <div class="gradient footer-container"
         @click="$nuxt.$route.path === '/CommercialCleaning' ? goTo('/CommercialCleaning/tasks') :
                 $nuxt.$route.path === '/CommercialCleaning/tasks' ? goTo('/CommercialCleaning/schedule') : proceed('/jobs/suppliers')">
      <v-flex xs12>
        <v-btn dark flat>
          <strong>
            <span class="elevation footer">
              {{ $nuxt.$route.path === '/CommercialCleaning' || $nuxt.$route.path === '/CommercialCleaning/tasks' ? 'NEXT' : 'VIEW JOB SHEET'}}
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

<template>
  <v-footer fixed height="auto">
    <div class="gradient footer-container"
         @click="$nuxt.$route.path === '/FinalBondCleaning' ? goTo('/FinalBondCleaning/tasks') :
                 $nuxt.$route.path === '/FinalBondCleaning/tasks' ? goTo('/FinalBondCleaning/schedule') : proceed('/jobs/suppliers')">
      <v-flex xs12>
        <v-btn dark flat>
          <strong>
            <span class="elevation footer">
              {{ $nuxt.$route.path === '/FinalBondCleaning' || $nuxt.$route.path === '/FinalBondCleaning/tasks' ? 'NEXT' : 'VIEW JOB SHEET'}}
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

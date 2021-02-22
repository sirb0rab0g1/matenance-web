import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('accounts', ['users'])
  },
  methods: {
    ...mapActions('accounts', ['FETCH_USERS'])
  }
}

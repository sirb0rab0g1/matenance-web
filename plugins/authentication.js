import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('login', ['isLogin'])
  },
  methods: {
    isVerified () {
      if (this.login === false) {
        this.$router.push('/')
      }
    }
  }
}

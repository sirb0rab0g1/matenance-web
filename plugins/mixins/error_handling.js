import Vue from 'vue'

export default {
    /*
      NOTE: Make error array into object so that we can call it easily
      NOTE: This error trapping is in currently in payment gateway
    */
    data: () => ({
        error: {
            card: {
            }
        }
    }),
    methods: {
        setError (payload) {
            _.forEach(payload, (value) => {
                /*
                  NOTE: Expression that will check if value is object
                */
                let regex = /\./
                if (regex.test(value.param)) {
                    let splits = _.split(value.param, '.')
                    Vue.set(this.error.card, splits[1], value.message)
                } else {
                    Vue.set(this.error.card, value.param, value.message)
                }
            })
        },
        resetError () {
            this.error.card = {}
        }
    }
}

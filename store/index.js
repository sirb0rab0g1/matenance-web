import Vue from 'vue'
import Vuex from 'vuex'

import FindACleaner from './modules/FindACleaner'
import Schedule from './modules/Schedule'
import accounts from './modules/accounts'
import navigation from './modules/navigation'
import login from './modules/login'
import suppliers from './modules/suppliers'
import jobs from './modules/jobs'

/*
  REMINDER: cc amd imaginaryser are JUST TEMPORARY!
*/

import cc from './modules/cc'
import imaginaryuser from './modules/imaginaryuser'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
        cc,
        imaginaryuser,
        FindACleaner,
        Schedule,
        accounts,
        navigation,
        login,
        suppliers,
        jobs
    }
  })
}

export default store

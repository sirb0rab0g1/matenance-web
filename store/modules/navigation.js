const initialState = () => {
  return {
    navigation: false,
    lastRoute: ''
  }
}
const state = initialState()

const mutations = {
    SET_NAVIGATION (state, payload) {
        state.navigation = payload
    },
    SET_LAST_ROUTE (state, payload) {
        state.lastRoute = payload
    },
    RESET_NAVIGATION_STATE(state) {
        Object.assign(state, initialState())
    }
}

export const getters = {
    navigation: state => state.navigation,
    lastRoute: state => state.lastRoute
}

const actions = {
    CHANGE_NAVIGATION ({ commit }, payload) {
        commit('SET_NAVIGATION', payload)
    },
    CHANGE_LAST_ROUTE ({ commit }, payload) {
        commit('SET_LAST_ROUTE', payload)
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}

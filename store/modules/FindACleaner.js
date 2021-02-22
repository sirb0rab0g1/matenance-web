const initialState = () => {
    return {
        modal: false
    }
}

const state = initialState()

const mutations = {
  SET_MODAL (state, payload) {
    state.modal = payload
  },
  RESET_FINDCLEANER_STATE(state) {
      Object.assign(state, initialState())
  }
}

const getters = {
  modal: state => state.modal
}

const actions = {
  CHANGE_MODAL ({ commit }, payload) {
    commit('SET_MODAL', payload)
  }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}

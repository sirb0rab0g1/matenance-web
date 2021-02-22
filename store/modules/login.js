const initialState = () => {
  return {
    isLogin: false,
    role: null,
    modal: false,
    registration: false
  }
}

const state = initialState()

const mutations = {
  SET_LOGIN (state, payload) {
    state.isLogin = payload
  },
  SET_MODAL (state, payload) {
    state.modal = payload
  },
  SET_REGISTRATION (state, payload) {
    state.registration = payload
  },
  SET_ROLE (state, payload) {
    state.role = payload
  },
  RESET_LOGIN_STATE(state) {
      Object.assign(state, initialState())
  }
}

const getters = {
  isLogin: state => state.isLogin,
  modal: state => state.modal,
  registration: state => state.registration,
  role: state => state.role
}

const actions = {
  LOGIN ({ commit }, payload) {
    commit('SET_LOGIN', payload)
  },
  CHANGE_MODAL ({ commit }, payload) {
    commit('SET_MODAL', payload)
  },
  CHANGE_REGISTRATION ({ commit }, payload) {
    commit('SET_REGISTRATION', payload)
  },
  CHANGE_ROLE ({ commit }, payload) {
    commit('SET_ROLE', payload)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}

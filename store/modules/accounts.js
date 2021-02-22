import { getApi, postApi, patchApi } from '~/plugins/http'

export const state = () => ({
  users: {},
  user: {}
})

export const mutations = {
  SET_USERS (state, payload) {
    state.users = payload
  },
  SET_USER (state, payload) {
    state.user = payload
  },
  UPDATE_USER (state, payload) {
    state.user = Object.assign({}, state.user, payload)
  }
}

export const getters = {
  users: state => state.users,
  user: state => state.user
}

const actions = {
  async FETCH_USERS ({ commit }) {
    await getApi('/basic/information/').then(data => {
      commit('SET_USERS', data)
    })
  },
  async FETCH_USER ({ commit }, pk) {
    await getApi(`/basic/information/${pk}/`).then(data => {
      commit('SET_USER', data)
    })
  },
  async POST_USER ({ commit }, payload) {
    await postApi('/basic/information/', payload)
  },
  async PATCH_USER ({ commit }, payload) {
    await patchApi(`/basic/information/${payload.id}/`, payload).then(data => {
      commit('UPDATE_USER', data)
    })
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}

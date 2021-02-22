import { postPublishableApi } from '~/plugins/http-pinpayments'

const initialState = () => {
    return {
        createdCards: []
    }
}

const state = initialState()

const mutations = {
    SET_CREATEDCARD (state, payload) {
        state.createdCards.push(payload)
    },
    RESET_CARD(state) {
        Object.assign(state, initialState())
    }
}

const getters = {
    createdCards: state => state.createdCards
}

const actions = {
    CHANGE_CREATEDCARD ({ commit }, payload) {
        postPublishableApi('/1/cards', payload).then(data => {
            // console.log(data.response)
            commit('SET_CREATEDCARD', data.response)
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


const initialState = () => {
  return {
    filters: null,
    ask: null,
    future_date: '',
    future_ask: [],
    future_confirm: [],
    ask_suppliers: []
  }
}

const state = initialState()

const mutations = {
    SET_SUPPLIERS (state, payload) {
        state.filters = payload
    },
    SET_ASKS (state, payload) {
        state.ask = payload
    },
    SET_FUTURE_ASK (state, payload) {
        for (let x = 0; x < payload.length; x++) {
            state.future_ask.push(payload[x])
        }
    },
    SET_FUTURE_DATE (state, payload) {
        state.future_date = payload
    },
    SET_ASK_SUPPLIERS (state, payload) {
        state.ask_suppliers = Object.assign([], state.ask_suppliers, payload)
    },
    SET_FUTURE_CONFIRM (state, payload) {
        if (_.find(state.future_confirm, payload)) {
            _.remove(state.future_confirm, payload)
        } else {
            state.future_confirm.push(payload)
        }
    },
    RESET_FUTURE_CONFIRM (state) {
       state.future_confirm = []
    },
    RESET_FUTURE_ASK(state) {
        state.future_ask = []
    },
    RESET_ASK_SUPPLIERS(state) {
        state.ask_suppliers = []
    },
    RESET_SUPPLIERS_STATE(state) {
        Object.assign(state, initialState())
    }
}

const getters = {
    filters: state => state.filters,
    ask: state => state.ask,
    future_date: state => state.future_date,
    future_ask: state => state.future_ask,
    future_confirm: state => state.future_confirm,
    ask_suppliers: state => state.ask_suppliers
}

const actions = {
    CHANGE_SUPPLIER_FILTERS ({ commit }, payload) {
        commit('SET_SUPPLIERS', payload)
    },
    CHANGE_ASKS ({ commit }, payload) {
        commit('SET_ASKS', payload)
    },
    CHANGE_FUTURE_ASK ({ commit }, payload) {
        commit('SET_FUTURE_ASK', payload)
    },
    CHANGE_FUTURE_DATE({ commit }, payload) {
        commit('SET_FUTURE_DATE', payload)
    },
    CHANGE_FUTURE_CONFIRM({ commit }, payload) {
        commit('SET_FUTURE_CONFIRM', payload)
    },
    CHANGE_ASK_SUPPLIERS({ commit }, payload) {
        commit('SET_ASK_SUPPLIERS', payload)
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}

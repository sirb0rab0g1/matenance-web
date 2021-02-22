import { postPrivateApi } from '~/plugins/http-pinpayments'
import Vue from 'vue'

const initialState = () => {
    return {
    edit: false,
    addVisit: '',
    /*
    CLARIFICATION: HOUSE CLEANING PAYLOAD
    */
    book: {
        type: 'housecleaning',
        address: '',
        postCode: '',
        hours: '',
        frequency: '',
        radio: 'I will Provide a Key',
        days: [],
        startTime: '',
        endTime: '',
        date: '',
        supplier: ''
    },
    notes: {
        type: 'template',
        custom: '',
        templated: '- Empty bins & reline \n- Dust & remove webs as required \n- Polish horizontal surfaces where clear \n- Spot clean vertical surfaces, glass & fittings \n- Wash glass door panels \n- Bathroom/s: Full detail \n- Kitchen/s: Detail surfaces/fittings/appliance externals \n- Microwave/s: Wash & polish internally \n- Dishes: Clean/dry/pack \n- Detailed vacuum \n- Mop hard floors ',
        secure: ''
    },
    /*
      CLARIFICATION: COMMERCIAL CLEANING PAYLOAD
    */
    commercial: {
        type: 'commercialcleaning',
        address: '',
        postCode: '',
        hours: '',
        frequency: '',
        radio: 'I will Provide a Key',
        days: [],
        startTime: '',
        endTime: '',
        date: '',
        supplier: ''
    },
    commercialnotes: {
        type: 'template',
        custom: '',
        templated: '- Empty bins & reline \n- Dust & remove webs as required \n- Polish horizontal surfaces where clear \n- Spot clean vertical surfaces, glass & fittings \n- Wash glass door panels \n- Bathroom/s: Full detail \n- Kitchen/s: Detail surfaces/fittings/appliance externals \n- Microwave/s: Wash & polish internally \n- Dishes: Clean/dry/pack \n- Detailed vacuum \n- Mop hard floors ',
        secure: ''
    },
    /*
      CLARIFICATION: SPRING CLEANING PAYLOAD
    */
    spring: {
        type: 'springcleaning',
        address: '',
        postCode: '',
        hours: '',
        frequency: '',
        radio: 'I will Provide a Key',
        days: [],
        startTime: '',
        endTime: '',
        date: '',
        supplier: ''
    },
    springnotes: {
        type: 'template',
        custom: '',
        templated: 'FULL DETAIL TO REAL ESTATE STANDARDS \n- General Surfaces & Fittings \n- Cupboards \n- Light Fittings \n- Windows & frames in/out to 3m \n- Tracks \n- Kitchen \n- Bathrooms \n- Laundry \n- Garage \n- Balconies/Entries \n- Blinds ',
        secure: ''
    },
    /*
      CLARIFICATION: BOND CLEANING PAYLOAD
    */
    bond: {
        type: 'bondcleaning',
        address: '',
        postCode: '',
        hours: '',
        frequency: '',
        radio: 'I will Provide a Key',
        days: [],
        startTime: '',
        endTime: '',
        date: '',
        supplier: ''
    },
    bondnotes: {
        type: 'template',
        custom: '',
        templated: 'FULL DETAIL TO REAL ESTATE STANDARDS \n- General Surfaces & Fittings \n- Cupboards \n- Light Fittings \n- Windows & frames in/out to 3m \n- Tracks \n- Kitchen \n- Bathrooms \n- Laundry \n- Garage \n- Balconies/Entries \n- Blinds ',
        secure: ''
    },
    /*
      CLARIFICATION: CARPET CLEANING PAYLOAD
    */
    carpet: {
        type: 'carpetcleaning',
        address: '',
        postCode: '',
        hours: '',
        frequency: '',
        radio: 'I will Provide a Key',
        days: [],
        startTime: '',
        endTime: '',
        date: '',
        supplier: ''
    },
    carpetnotes: {
        type: 'template',
        custom: '',
        templated: '- Deep steam/extraction clean of carpets throughout ',
        secure: ''
    },
    cancelIdx: '',
    cleaners: [],
    date: '',
    visits: {
        future: [],
        past: []
    }
  }
}

const state = initialState()

const mutations = {
    SET_EDIT (state, payload) {
        state.edit = payload
    },
    SET_VISIT (state, payload) {
        state.addVisit = payload
    },
    SET_DATE (state, payload) {
        state.date = payload
    },
    SET_LOCATION (state, payload) {
        console.log(payload.type)
        if (payload.type === 'housecleaning') {
            state.book.type = payload.type
            state.book.address = payload.address
            state.book.postCode = payload.postCode
        } else if (payload.type === 'commercialcleaning') {
            state.commercial.type = payload.type
            state.commercial.address = payload.address
            state.commercial.postCode = payload.postCode
        } else if (payload.type === 'springcleaning') {
            state.spring.type = payload.type
            state.spring.address = payload.address
            state.spring.postCode = payload.postCode
        } else if (payload.type === 'bondcleaning') {
            state.bond.type = payload.type
            state.bond.address = payload.address
            state.bond.postCode = payload.postCode
        } else if (payload.type === 'carpetcleaning') {
            state.carpet.type = payload.type
            state.carpet.address = payload.address
            state.carpet.postCode = payload.postCode
        }
    },
    SET_TASK (state, payload) {
        if (payload.mode === 'housecleaning') {
            state.notes = Object.assign({}, state.notes, payload)
        } else if (payload.mode === 'commercialcleaning') {
            state.commercialnotes = Object.assign({}, state.commercialnotes, payload)
        } else if (payload.mode === 'springcleaning') {
            state.springnotes = Object.assign({}, state.springnotes, payload)
        } else if (payload.mode === 'bondcleaning') {
            state.bondnotes = Object.assign({}, state.bondnotes, payload)
        } else if (payload.mode === 'carpetcleaning') {
            state.carpetnotes = Object.assign({}, state.carpetnotes, payload)
        }
    },
    SET_FUTURE_VISIT (state, payload) {
        state.visits.future.push(payload)
    },
    SET_UPDATE_FUTURE_VISIT (state, payload) {
        _.pullAt(state.visits.future, payload)
    },
    SET_PAST_VISIT (state, payload) {
        state.visits.past.push(payload)
    },
    SET_SCHEDULE (state, payload) {
        if (payload.type === 'housecleaning') {
            state.book.radio = payload.radio,
            state.book.hours = payload.hours,
            state.book.days = payload.days,
            state.book.frequency = payload.frequency,
            state.book.startTime = payload.startTime,
            state.book.endTime = payload.endTime,
            state.book.date = payload.date
        } else if (payload.type === 'commercialcleaning') {
            state.commercial.radio = payload.radio,
            state.commercial.hours = payload.hours,
            state.commercial.days = payload.days,
            state.commercial.frequency = payload.frequency,
            state.commercial.startTime = payload.startTime,
            state.commercial.endTime = payload.endTime,
            state.commercial.date = payload.date
        } else if (payload.type === 'springcleaning') {
            state.spring.radio = payload.radio,
            state.spring.hours = payload.hours,
            state.spring.days = payload.days,
            state.spring.frequency = payload.frequency,
            state.spring.startTime = payload.startTime,
            state.spring.endTime = payload.endTime,
            state.spring.date = payload.date
        } else if (payload.type === 'bondcleaning') {
            state.bond.radio = payload.radio,
            state.bond.hours = payload.hours,
            state.bond.days = payload.days,
            state.bond.frequency = payload.frequency,
            state.bond.startTime = payload.startTime,
            state.bond.endTime = payload.endTime,
            state.bond.date = payload.date
        } else if (payload.type === 'carpetcleaning') {
            state.carpet.radio = payload.radio,
            state.carpet.hours = payload.hours,
            state.carpet.days = payload.days,
            state.carpet.frequency = payload.frequency,
            state.carpet.startTime = payload.startTime,
            state.carpet.endTime = payload.endTime,
            state.carpet.date = payload.date
        }
    },
    SET_SUPPLIER (state, payload) {
        state.book.supplier = payload[0].name
    },
    SET_CANCEL_INDEX (state, payload) {
        state.cancelIdx = payload
    },
    SET_UPDATE_CANCEL_INDEX (state, payload) {
        if (state.visits.future[payload.idx]) {
            state.visits.future[payload.idx].status = payload.status
        }
    },
    SET_CLEANERS (state, payload) {
        if (_.isArray(payload)) {
            state.cleaners = []
        } else {
            if (_.find(state.cleaners, payload)) {
                _.remove(state.cleaners, payload)
            } else {
                state.cleaners.push(payload)
            }
        }
    },
    RESET_JOBS_STATE(state) {
        Object.assign(state, initialState())
    },
    RESET_FUTURE (state) {
        state.visits.future = []
    },
    RESET_PAST (state) {
        state.visits.past = []
    }
}

const getters = {
    edit: state => state.edit,
    addVisit: state => state.addVisit,
    book: state => state.book,
    notes: state => state.notes,
    commercial: state => state.commercial,
    commercialnotes: state => state.commercialnotes,
    spring: state => state.spring,
    springnotes: state => state.springnotes,
    bond: state => state.bond,
    bondnotes: state => state.bondnotes,
    carpet: state => state.carpet,
    carpetnotes: state => state.carpetnotes,
    cleaners: state => state.cleaners,
    date: state => state.date,
    visits: state => state.visits,
    cancelIdx: state => state.cancelIdx
}

const actions = {
    CHANGE_EDIT ({ commit }, payload) {
        commit('SET_EDIT', payload)
    },
    CHANGE_LOCATION ({ commit }, payload) {
        commit('SET_LOCATION', payload)
    },
    CHANGE_DATE ({ commit }, payload) {
        commit('SET_DATE', payload)
    },
    CHANGE_TASK ({ commit }, payload) {
        commit('SET_TASK', payload)
    },
    CHANGE_SCHEDULE ({ commit }, payload) {
        commit('SET_SCHEDULE', payload)
    },
    CHANGE_SUPPLIER ({ commit }, payload) {
        commit('SET_SUPPLIER', payload)
    },
    CHANGE_CLEANERS ({ commit }, payload) {
        commit('SET_CLEANERS', payload)
    },
    CHANGE_VISIT({commit}, payload) {
        commit('SET_VISIT', payload)
    },
    CHANGE_FUTURE_VISIT({commit}, payload) {
        commit('SET_FUTURE_VISIT', payload)
    },
    CHANGE_PAST_VISIT({commit}, payload) {
        commit('SET_PAST_VISIT', payload)
    },
    CHANGE_CANCEL_INDEX({commit}, payload) {
        commit('SET_CANCEL_INDEX', payload)
    },
    CHANGE_CHARGE({commit}, payload) {
        Vue.set(payload, 'customer_token', localStorage.getItem('customer_token'))
        return postPrivateApi('/1/charges', payload)
    },
    CHANGE_REFUND ({commit}, payload) {
        return postPrivateApi('/1/charges/' + payload + '/refunds/')
    },
    UPDATE_FUTURE_VISIT({commit}, payload) {
        commit('SET_UPDATE_FUTURE_VISIT', payload)
    },
    UPDATE_CANCEL_INDEX({commit}, payload) {
        commit('SET_UPDATE_CANCEL_INDEX', payload)
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}

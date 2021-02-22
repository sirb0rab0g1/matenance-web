/*
  REMINDER: This implementation will be phase out
  once database is already connected
*/

import { getPrivateApi, postPrivateApi, putPrivateApi, deletePrivateApi } from '~/plugins/http-pinpayments'
import Vue from 'vue'

const initialState = () => {
    return {
        pk: 0,
        customerAccount: false,
        imaginaryuser: [],
        currentUser: {}
    }
}

const state = initialState()

const mutations = {
    SET_CREATE_USER (state, payload) {
        Vue.set(payload, 'pk', state.pk += 1)
        Vue.set(payload, 'card', [])
        state.imaginaryuser.push(payload)
    },
    SET_PUSHED_CARD (state, payload) {
        Vue.set(payload, 'fk', state.pk)
        let myprofile  = _.keys(_.pickBy(state.imaginaryuser, {'pk': payload.fk}))
        state.imaginaryuser[myprofile[0]].card.push(payload)
    },
    SET_UPDATE_CARD (state, payload) {
        /*
          NOTE: Front end only implementation
        */

        let pk = localStorage.getItem('pk')
        let myprofile = _.keys(_.pickBy(state.imaginaryuser, {'pk': _.toInteger(pk)}))

        /*
          NEXT:
          Update na unsa na id si card para mao to ma update

          NOTE:
          This is manual updating because i want to make less response in back end.
          But this will be re implemented
        */
        let cardIndex = _.keys(_.pickBy(state.imaginaryuser[myprofile[0]].card, {'token': payload.old_key}))
        let cardId = _.toInteger(cardIndex[0])

        if (payload.old_key === localStorage.getItem('primary_card')) {
            if (_.pullAt(state.imaginaryuser[myprofile[0]].card, cardId)) {
                state.imaginaryuser[myprofile[0]].card[cardId] = payload.updated_card_info
                localStorage.setItem('primary_card', payload.updated_card_info.token)
            }
        } else {
            if (_.pullAt(state.imaginaryuser[myprofile[0]].card, cardId)) {
                state.imaginaryuser[myprofile[0]].card[cardId] = payload.updated_card_info
            }
        }
    },
    SET_NEW_ADD_CARD (state, payload) {
        let pk = localStorage.getItem('pk')
        let myprofile = _.keys(_.pickBy(state.imaginaryuser, {'pk': _.toInteger(pk)}))
        /*
          NOTE: This implementation is already connected in api
          it fetch the cus_token and re update my imaginary user
        */
        /*
          NOTE: Add to imaginary user
        */
        state.imaginaryuser[myprofile[0]].card = payload

        /*
          NOTE: Update Current User
        */
        state.currentUser = Object.assign({}, state.currentUser, state.imaginaryuser[myprofile[0]])
    },
    SET_CURRENT_USER (state, payload) {
        state.currentUser = Object.assign(state.currentUser, payload)
    },
    SET_CUSTOMER_ACCOUNT (state, payload) {
        state.customerAccount = payload
    },
    SET_REMOVE_CARD (state, payload) {
        let pk = localStorage.getItem('pk')
        let myprofile = _.keys(_.pickBy(state.imaginaryuser, {'pk': _.toInteger(pk)}))

        /*
          NEXT:
          Update na unsa na id si card para mao to ma remove

          NOTE:
          This is manual updating because i want to make less response in back end.
          But this will be re implemented
        */

        let cardIndex = _.keys(_.pickBy(state.imaginaryuser[myprofile[0]].card, {'token': payload}))

        if (_.pullAt(state.imaginaryuser[myprofile[0]].card, cardIndex)) {
            state.currentUser = Object.assign({}, state.currentUser, state.imaginaryuser[myprofile[0]])
        }
    },
    POTA_CURRENT_USER (state) {
        state.customerAccount = false
        state.currentUser = {}
    },
    RESET_CARD (state) {
        Object.assign(state, initialState())
    }
}

const getters = {
    imaginaryuser: state => state.imaginaryuser,
    currentUser: state => state.currentUser,
    customerAccount: state => state.customerAccount
}

const actions = {
    CHANGE_CREATE_USER ({ commit }, payload) {
        return postPrivateApi('/1/customers', payload.card).then(data => {
            commit('SET_CREATE_USER', payload.form)
            commit('SET_PUSHED_CARD', data.response.card)
        })
    },
    CHANGE_CURRENT_USER ({ commit }, payload) {
        commit('SET_CURRENT_USER', payload)
    },
    CHANGE_CUSTOMER_ACCOUNT ({commit}, payload) {
        commit('SET_CUSTOMER_ACCOUNT', payload)
    },
    ADDITIONAL_CARD ({commit}, payload) {
        let ls = localStorage.getItem('customer_token')
        return postPrivateApi('/1/customers/'+ ls +'/cards', payload).then(data => {
          getPrivateApi('/1/customers/' + ls + '/cards').then(data => {
            commit('SET_NEW_ADD_CARD', data.response)
          })
        })
    },
    REMOVE_CARD ({ commit }, payload) {
        return deletePrivateApi('/1/customers/' + localStorage.getItem('customer_token') + '/cards/' + payload).then(data => {
            /*
              NOTE: UPDATE IMAGINARY USER
            */
            commit('SET_REMOVE_CARD', payload)
        })
    },
    UPDATE_CUS_CARD ({commit}, payload) {
        let ls = localStorage.getItem('customer_token')
        let ps = localStorage.getItem('primary_card')

        if (ps === payload.primary.primary_card_token) {
            putPrivateApi('/1/customers/' + ls, payload.update).then(data => {
               commit('SET_UPDATE_CARD', {old_key: ps, updated_card_info: data.response.card})
            })
        } else {
            /*
              NOTE: SWAP SECONDARY TO PRIMARY
            */
            putPrivateApi('/1/customers/' + ls, payload.primary).then(data => {
                console.log('one')
              /*
                NOTE: EDIT PRIMARY
              */
                putPrivateApi('/1/customers/' + ls, payload.update).then(data => {
                  console.log(data.response)
                  commit('SET_UPDATE_CARD', {old_key: data.response.card.token, updated_card_info: data.response.card})
              /*
                NOTE: SWAP THE NEW PRIMARY TO OLD PRIMARY
              */
                  putPrivateApi('/1/customers/' + ls, payload.revert).then(data => {
                    console.log('success')
                  })
               })
            })
        }
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}


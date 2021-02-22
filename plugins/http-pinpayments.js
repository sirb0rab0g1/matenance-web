import axios from 'axios'
import Vue from 'vue'

const privateKey = 'sgO0p5bA-RRLRoys5QACDg'
const publicKey = 'pk_DFU2o-epfRZxBxR2PlUaYA'

export const PrivateHttp = axios.create({
    baseURL: process.env.PROXY + process.env.PAYMENT,
    auth: {
      username: privateKey,
      password: ''
    },
    headers: {
	      'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'x-requested-with, x-requested-by'
	  },
    crossdomain: true
})

export const PublishableHttp = axios.create({
    baseURL: process.env.PROXY + process.env.PAYMENT,
})

export const getPrivateApi = function (url, filters) {
  return new Promise((resolve, reject) => {
    PrivateHttp.get(url, { params: filters })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
  })
}

export const getPublishableApi = function (url, filters) {
    return new Promise((resolve, reject) => {
        PublishableHttp.get(url, { params: filters })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
    })
}

export const deletePrivateApi = function (url, payload) {
  return new Promise((resolve, reject) => {
      PrivateHttp.delete(url, payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
  })
}

export const deletePublishableApi = function (url, payload) {
    return new Promise((resolve, reject) => {
        PublishableHttp.delete(url, payload)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
    })
}

export const postPrivateApi = function (url, payload) {
  return new Promise((resolve, reject) => {
      PrivateHttp.post(url, payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
  })
}

export const postPublishableApi = function (url, payload) {
    return new Promise((resolve, reject) => {
        Vue.set(payload, 'publishable_api_key', publicKey)
        PublishableHttp.post(url, payload)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
    })
}

export const putPrivateApi = function (url, payload) {
  return new Promise((resolve, reject) => {
      PrivateHttp.put(url, payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
  })
}

export const putPublishableApi = function (url, payload) {
    return new Promise((resolve, reject) => {
        PublishableHttp.put(url, payload)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
    })
}

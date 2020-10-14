import axios from 'axios'

import responses from './responses'
import solvers from './solvers'
import images from './images'
import HomeDatas from './HomeDatas'

export default {
    state: {
        calls: [],
        errors: [],
    },
    mutations: {
        setCalls(state, calls) {
            state.calls = calls
        },
        storeCall(state, call) {
            state.calls.push(call);
        },
        deleteCall(state, call_id) {
            const i = state.calls.findIndex((item) => item.id === call_id)
            state.calls.splice(i, 1);
        },
        updateCall(state, call) {
            const i = state.calls.findIndex(item => item.id === call.id)
            state.calls[i] = call
            console.log(state.calls[i])
        },

        notCommit() {
            console.log('commit dead')
        }
    },
    actions: {
        loadCalls({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/calls', { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
                    .then((resp) => {
                        commit('setCalls', resp.data)
                        return resolve(resp.data)
                    }).catch(error => {
                        return reject(error)
                    })
            })
        },

        storeCall({ commit, dispatch }, call) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            };

            return new Promise((resolve, reject) => {
                axios.post(`calls`, call, config)
                    .then((resp) => {
                        dispatch('allNotifications')
                        commit('storeCall', resp.data)
                        return resolve(resp.data)
                    })
                    .catch((error) => {
                        return reject(error.response)
                    })
            })
        },


        updateCall({ commit }, call) {
            return new Promise((resolve, reject) => {
                axios.put(`calls/${call.id}`, call, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
                    })
                    .then((resp) => {
                        commit('updateCall', call)
                        return resolve(resp.data)
                    })
                    .catch((error) => {
                        reject(error.response)
                        return console.log(error.response.data)
                    })
            })
        },


        deleteCall({ commit }, call_id) {
            return new Promise((resolve, reject) => {
                axios.delete(`calls/${call_id}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
                    })
                    .then((resp) => {
                        commit('deleteCall', call_id)
                        return resolve(resp.data)
                    })
                    .catch((error) => {
                        console.log(error.response)
                        return reject(error.response)
                    })
            });
        },
    },
    getters: {
        calls: (state) => state.calls,
        callsById: (state) => (id) => {
            return state.calls.find(call => call.id == id)
        },
    },
    modules: {
        responses,
        solvers,
        images,
        HomeDatas,
    }
}
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
                        resolve(resp.data)
                        console.log('dispatch loadCalls', resp.data)
                        return commit('setCalls', resp.data)
                    }).catch(error => {
                        reject(error)
                        return console.log(error.response.data)
                    })
            })
        },

        storeCall({ commit, dispatch }, call) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    // "Content-Type": "multipart/form-data",
                },
            };

            return new Promise((resolve, reject) => {
                axios.post(`calls`, call, config)
                    .then((resp) => {
                        dispatch('allNotifications')
                        resolve(resp.data)
                        commit('storeCall', resp.data)
                        return console.log(resp.data)
                    })
                    .catch((error) => {
                        reject(error.response)
                        return console.log(error.response.data)
                    })
            })
        },


        updateCall({ commit }, call) {
            return new Promise((resolve, reject) => {
                axios.put(`calls/${call.id}`, call, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
                    })
                    .then((resp) => {
                        resolve(resp.data)
                        commit('updateCall', call)
                        return console.log(resp.data)
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
                        resolve(resp.data)
                        return console.log(resp.data)
                    })
                    .catch((error) => {
                        console.log(error.response.data)
                        reject(error)
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
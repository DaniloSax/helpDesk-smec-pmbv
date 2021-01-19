import axios from 'axios'

export default {
    state: {
        messages: []
    },
    mutations: {
        SET_MESSAGES(state, messages) {
            state.messages = messages
        }
    },
    actions: {
        loadMesages({ commit }) {
            return new Promise((resolve, reject) => {
                axios('messages').then(resp => {
                        resolve(resp.data.messages)
                        commit('SET_MESSAGES', resp.data.messages)
                        console.log(resp)
                    })
                    .catch(error => {
                        reject(error)
                        console.log(error)
                    })
            })
        }
    },
    getters: {
        getMessages: (state) => state.messages
    },
}
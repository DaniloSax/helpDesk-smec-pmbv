import axios from 'axios'

export default {
    state: {
        messages: [],
        chatUsers: []
    },
    mutations: {
        SET_MESSAGES(state, messages) {
            state.messages = messages
        },

        SET_CHAT_USERS(state, chatUsers) {
            state.chatUsers = chatUsers
        }
    },
    actions: {
        loadMesages({ commit }) {
            return new Promise((resolve, reject) => {
                axios('chat-messages', {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        }
                    }).then(resp => {
                        resolve(resp.data.messages)
                        commit('SET_MESSAGES', resp.data.messages)
                        console.log(resp)
                    })
                    .catch(error => {
                        reject(error)
                        console.log(error)
                    })
            })
        },

        load_chat_user({ commit }) {
            return new Promise((resolve, reject) => {
                axios('chat-users', {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        }
                    }).then(resp => {
                        resolve(resp.data.chatUsers)
                        commit('SET_CHAT_USERS', resp.data.chatUsers)
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
        getMessages: (state) => state.messages,
        getChatUsers: (state) => state.chatUsers
    },
}
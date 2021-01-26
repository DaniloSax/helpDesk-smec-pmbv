import axios from 'axios'
import localforage from 'localforage'

export default {
    state: {
        messages: [],
        chatUsers: [],
        currentMessages: [],
        sendMessage: false
    },
    mutations: {
        SET_MESSAGES(state, messages) {
            state.messages = messages
        },

        SET_CHAT_USERS(state, chatUsers) {
            state.chatUsers = chatUsers
        },

        SET_CURRENT_MESSAGE(state, user) {
            localforage.getItem('helpDesk').then(item => {
                const auth = item.login.auth

                state.currentMessages = state.messages.filter(message => {
                    const authMessage = message.from === auth.id && message.to === user.id
                    const userMessage = message.from === user.id && message.to === auth.id

                    return authMessage || userMessage
                })

            })

        },

        SEND_NEW_MESSAGE(state, message) {
            state.messages.push(message)
            state.currentMessages.push(message)
            state.sendMessage = !state.sendMessage
        }
    },
    actions: {
        loadMessages({ commit }) {
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
                    })
                    .catch(error => {
                        reject(error)
                        console.log(error)
                    })
            })
        },

        send_new_message({ commit }, message) {
            return new Promise(() => {
                commit('SEND_NEW_MESSAGE', message)
            })
        }

    },
    getters: {
        getMessages: (state) => state.messages,
        getcurrentMessages: (state) => state.currentMessages.sort((a, b) => {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        }),
        getChatUsers: (state) => state.chatUsers,
        getSendMessage: (state) => state.sendMessage
    },
}
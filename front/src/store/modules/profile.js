import axios from 'axios'

export default {
    state: {
        user: {}
    },
    mutations: {

    },
    actions: {
        getUserProfile({ commit }) {
            return new Promise((resolve, reject) => {
                axios('/profile').then(resp => {
                        console.log(resp.data)
                        commit('')
                        resolve(resp)
                    })
                    .catch(error => {
                        console.log(error.response)
                        reject(error)
                    })
            });
        },

        updateUserProfile({ commit }, user) {
            return new Promise((resolve, reject) => {
                // console.log(user)

                axios.put(`profile/${user.id}`, user, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } }).then(resp => {
                        console.log(resp.data)
                        commit('notCommit')
                        resolve(resp)
                    })
                    .catch(error => {
                        console.log(error.response.data)
                        return reject(error.response.data)
                    })
            });
        },

        updatePhotoProfile({ commit }, file) {

            const formData = new FormData()
            formData.append('file', file);

            return new Promise((resolve, reject) => {
                axios.post(`profile/`, formData, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            'Content-Type': 'image/jpeg'
                        }
                    })
                    .then(resp => {
                        console.log(resp.data)

                        commit('notCommit')
                        return resolve(resp)
                    })
                    .catch(error => {
                        // console.log(error.response.data)
                        return reject(error.response.data)
                    })
            });
        },
    },
    getters: {},
}
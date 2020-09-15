import axios from 'axios'

export default {
    actions: {
        loadResponses({ commit }, call_id) {
            console.log(call_id)
            return new Promise((resolve, reject) => {
                axios.get(`/responses/${call_id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        }
                    })
                    .then((resp) => {
                        console.log('resp responses', resp.data)
                        commit('notCommit', call_id)
                        return resolve(resp.data)
                            // return resp.data
                    }).catch(error => {
                        reject(error)
                        return console.log(error.response.data)
                    })
            })
        },

        updateResponse({ commit }, response) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            };

            return new Promise((resolve, reject) => {
                axios.put(`responses/${response.id}`, response, config)
                    .then((resp) => {
                        console.log('action updateResponse => success')
                        resolve(resp.data)
                        commit('notCommit', resp.data)
                        return console.log(resp.data)
                    })
                    .catch((error) => {
                        reject(error.response)
                        return console.log(error.response.data)
                    })
            })
        },
    }
}
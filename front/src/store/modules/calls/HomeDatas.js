import axios from 'axios'

export default {

    state: {
        statusAllCalls: null,
        callPerUserSolver: null,
        callPerUserAuth: null,
    },
    mutations: {
        setDatasStatusCalls(state, statusCalls) {
            state.statusAllCalls = statusCalls;
        },

        setcallPerUserSolver(state, callUsersSolvers) {
            state.callPerUserSolver = callUsersSolvers
        },

        setcallPerUserAuth(state, callsUsersAuth) {
            state.callPerUserAuth = callsUsersAuth
        },
    },
    actions: {
        statusAllCalls({ commit }) {
            return new Promise((resolve, reject) => {
                return axios.get('/home/admin/status-calls', { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
                    .then(response => {
                        console.log('return response of dispatch', response.data)
                        commit('setDatasStatusCalls', response.data)
                        resolve(response.data)
                        return response.data
                    })
                    .catch(error => {
                        return reject(error)
                    })
            });
        },

        callPerUserSolver({ commit }) {
            return new Promise((resolve, reject) => {
                return axios.get('/home/admin/status-calls-solvers', { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
                    .then(response => {
                        console.log('return response of dispatch', response.data)

                        commit('setcallPerUserSolver', response.data)

                        return resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                        console.log(error)
                    })
            });
        },

        callPerUserAuth({ commit }) {
            return new Promise((resolve, reject) => {
                return axios.get('/home/status-calls-auth', { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
                    .then(response => {
                        console.log('return response of dispatch', response.data)

                        commit('setcallPerUserAuth', response.data)

                        return resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                        console.log(error)
                    })
            });
        },
    },
    getters: {
        datasStatusCalls: (state) => state.datasStatusCalls,
        callPerUserSolver: (state) => state.callPerUserSolver,
        callPerUserAuth: (state) => state.callPerUserAuth,
    }
}
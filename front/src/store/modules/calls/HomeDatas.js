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

            // let users = []

            // callUsersSolvers.map(user => {

            //     const rolesSolvers = user.roles.filter(role => role.name == 'solucionador')

            //     return rolesSolvers.map(role => {
            //         const newUsers = {
            //             user: user.name,
            //             role: role.name,
            //             concluded: user.calls.filter(call => call.statu == 'concluído').length,
            //             paralyzed: user.calls.filter(call => call.statu == 'paralisado').length,
            //             canceled: user.calls.filter(call => call.statu == 'cancelado').length,
            //             late: user.calls.filter(call => call.statu == 'atrasado').length,
            //             starting: user.calls.filter(call => call.statu == 'a iniciar').length,
            //             progress: user.calls.filter(call => call.statu == 'andamento').length,
            //         };

            //         return users.push(newUsers)
            //     });
            // });
            // console.log(callUsersSolvers)
            state.callPerUserSolver = callUsersSolvers
        },

        setcallPerUserAuth(state, callsUsersAuth) {

            // let status = []

            // callsUsersAuth.map(() => {
            //     const call = {
            //         concluded: callsUsersAuth.filter(call => call.statu == 'concluído').length,
            //         paralyzed: callsUsersAuth.filter(call => call.statu == 'paralisado').length,
            //         canceled: callsUsersAuth.filter(call => call.statu == 'cancelado').length,
            //         late: callsUsersAuth.filter(call => call.statu == 'atrasado').length,
            //         starting: callsUsersAuth.filter(call => call.statu == 'a iniciar').length,
            //         progress: callsUsersAuth.filter(call => call.statu == 'andamento').length,
            //     }
            //     console.log(call)
            //     status.push(call);
            // });
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
                        reject(error)
                        console.log(error)
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
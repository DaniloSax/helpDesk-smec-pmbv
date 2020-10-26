import axios from 'axios'
import router from '@/router/routers'


axios.defaults.baseURL = 'http://192.168.8.81:8008/api/';
// axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
axios.interceptors.response.use(resp => {
    return resp;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('access_token')
        return router.replace({ name: 'login' })
    }
})
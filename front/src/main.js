import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '@/router/routers'
import store from './store'
import axios from 'axios'

import './plugins/firebase'
import './plugins/vee-validate'

// axios.defaults.baseURL = 'http://192.168.8.81:8008/api/';
// axios.defaults.baseURL = 'http://192.168.0.103:8008/api/';
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

Vue.config.productionTip = false
    // Vue.config.devtools = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
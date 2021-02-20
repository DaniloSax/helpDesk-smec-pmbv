import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '@/router/routers'
import store from './store'

import './plugins/firebase'
import './plugins/vee-validate'
import './registerServiceWorker'
import './plugins/axios'

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

window.Echo = new Echo({
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    broadcaster: 'pusher',
    key: 'Sistemakey',
    cluster: 'mt1',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            // 'X-CSRF-TOKEN': localStorage.getItem('access_token'),
        }
    }
    // host: 'http://localhost:6001',
    // enabledTransports: ['ws', 'wss'], //parou de dar erro de cors com isso
})

Vue.config.productionTip = false
    // Vue.config.devtools = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
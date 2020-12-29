import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '@/router/routers'
import store from './store'

import './plugins/firebase'
import './plugins/vee-validate'
import './registerServiceWorker'
import './plugins/axios'

Vue.config.productionTip = false
    // Vue.config.devtools = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
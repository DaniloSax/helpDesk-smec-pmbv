import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

console.log('config echo')

window.Echo = new Echo({
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    broadcaster: 'pusher',
    key: 'helpDesk_smag_pmbv_key',
    cluster: 'mt1',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    wssPort: 6001,
    forceTLS: false,
    disableStats: true,
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        }
    }
})
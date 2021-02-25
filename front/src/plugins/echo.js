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
        }
    }
})
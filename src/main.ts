import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { Icon } from '@iconify/vue'

//PINIA
import { createPinia } from 'pinia'
const pinia = createPinia()

//COOKIES
import { globalCookiesConfig } from 'vue3-cookies';
globalCookiesConfig({
    expireTimes: '1m',
})


const app = createApp(App)
app.component('IconifyIcon', Icon)
app.use(pinia)
app.use(router)
app.mount('#app')
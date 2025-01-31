import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/main.css'
import 'iconoir/css/iconoir.css';
import '@fontsource/kantumruy-pro/400.css'
import '@fontsource/kantumruy-pro/500.css'
import '@fontsource/kantumruy-pro/600.css'
import '@fontsource/kantumruy-pro/700.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import { en } from '@/lang/en';
import { km } from '@/lang/km';
import { createI18n } from 'vue-i18n';

axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'km',
    fallbackLocale: 'en',
    messages: {
        en: en,
        km: km
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

import '@/assets/scss/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.provide('enable-route-transitions', true)
app.mount('#app')

import '@/assets/scss/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth } from './auth'

const auth = createAuth({
  logoutRedirectRoute: { name: 'index' },
})

const app = createApp(App)
app.use(router)
app.use(auth)
app.provide('enable-route-transitions', true)
app.mount('#app')

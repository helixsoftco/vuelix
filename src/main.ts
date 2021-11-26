import '@/assets/scss/app.scss'
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'

const auth = createAuth({
  loginRedirectRoute: { name: 'home' },
  logoutRedirectRoute: { name: 'index' },
  autoConfigureNavigationGuards: true,
})

const app = createApp(App)
app.use(router)
app.use(auth)
app.provide('enable-route-transitions', true)
app.mount('#app')

import '@/assets/scss/app.scss'
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'
import axiosInstance from './api/axios'

const auth = createAuth({
  router,
  loginRedirectRoute: { name: 'home' },
  logoutRedirectRoute: { name: 'index' },
  autoConfigureNavigationGuards: true,
  axios: {
    instance: axiosInstance,
    autoAddAuthorizationHeader: true,
  },
})

const app = createApp(App)
app.use(router)
app.use(auth)
app.provide('enable-route-transitions', true)
app.mount('#app')

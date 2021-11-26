import router from '@/router'
import { App, reactive, readonly, ref } from 'vue'
import { setupDevtools } from './devtools'
import { authInjectionKey } from './injectionKeys'
import { ANONYMOUS_USER, AuthOptions, AuthPlugin, User } from './types'

function useAuthPlugin(options: AuthOptions): AuthPlugin {
  const isAuthenticated = ref(false)
  const user = ref<User>({ ...ANONYMOUS_USER })

  async function login() {
    // TODO: Implement login logic using your Auth Provider, E.g. Auth0
    const authenticatedUser = {
      id: '0000',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
    }
    user.value = authenticatedUser
    isAuthenticated.value = true
  }

  async function logout() {
    user.value = { ...ANONYMOUS_USER }
    isAuthenticated.value = false
    router.push(options.logoutRedirectRoute)
  }

  /*
   * "reactive" unwraps 'ref's, therefore using the .value is not required.
   * E.g: from "auth.isAuthenticated.value" to "auth.isAuthenticated"
   * but when using destructuring like: { isAuthenticated } = useAuth() the reactivity over isAuthenticated would be lost
   * this is not recommended but in such case use toRefs: { isAuthenticated } = toRefs(useAuth())
   * See: https://v3.vuejs.org/guide/reactivity-fundamentals.html#ref-unwrapping
   * And: https://v3.vuejs.org/guide/reactivity-fundamentals.html#destructuring-reactive-state
   */
  const unWrappedRefs = reactive({
    isAuthenticated,
    user,
    login,
    logout,
  })

  return readonly(unWrappedRefs)
}

const defaultOptions = { logoutRedirectRoute: '/' }
export function createAuth(options: AuthOptions = defaultOptions) {
  return {
    install: (app: App): void => {
      const authPlugin = useAuthPlugin(options)
      app.config.globalProperties.$auth = authPlugin
      app.provide(authInjectionKey, authPlugin)

      if (import.meta.env.DEV) {
        setupDevtools(app, authPlugin)
      }
    },
  }
}
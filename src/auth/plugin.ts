import router from '@/router'
import { App, computed, reactive, readonly, ref } from 'vue'
import { setupDevtools } from './devtools'
import { ANONYMOUS_USER, AuthOptions, AuthPlugin, User } from './types'

export let authInstance: AuthPlugin | undefined = undefined

function setupAuthPlugin(options: AuthOptions): AuthPlugin {
  const isAuthenticated = ref(false)
  const user = ref<User>({ ...ANONYMOUS_USER })
  const userFullName = computed(() => {
    let fullname = user.value.firstName
    if (user.value.lastName) {
      fullname += ` ${user.value.lastName}`
    }
    return fullname
  })

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
    router.push(router.currentRoute.value.query.redirectTo?.toString() || options.loginRedirectRoute)
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
    userFullName,
    login,
    logout,
  })

  return readonly(unWrappedRefs)
}

const defaultOptions = {
  loginRedirectRoute: '/',
  logoutRedirectRoute: '/',
}
export function createAuth(options: AuthOptions = defaultOptions) {
  return {
    install: (app: App): void => {
      authInstance = setupAuthPlugin(options)
      app.config.globalProperties.$auth = authInstance

      if (import.meta.env.DEV) {
        // @ts-expect-error: until it gets fixed in devtools
        setupDevtools(app, authInstance)
      }
    },
  }
}

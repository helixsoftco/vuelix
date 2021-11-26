import { RouteLocationRaw, Router } from 'vue-router'
import { AuthOptions } from './types'
import { useAuth } from './useAuth'

export function configureNavigationGuards(router: Router, options: Required<AuthOptions>) {
  router.beforeEach(async (to): Promise<boolean | RouteLocationRaw> => {
    const auth = useAuth()

    if (to.name === options.loginRouteName) {
      if (auth.isAuthenticated) {
        return options.loginRedirectRoute
      }
      return true
    }

    if (!to.meta.public) {
      if (!auth.isAuthenticated) {
        return { name: options.loginRouteName, query: { redirectTo: to.fullPath } }
      }
    }

    return true
  })
}

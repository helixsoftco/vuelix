import { AxiosInstance } from 'axios'
import { RouteLocationRaw, Router, RouteRecordName } from 'vue-router'

export interface User {
  id?: string
  firstName: string
  lastName: string
  email?: string
}

export const ANONYMOUS_USER: Readonly<User> = Object.freeze({
  id: undefined,
  firstName: 'Anonymous',
  lastName: '',
})

export interface AuthPlugin {
  readonly user: User
  readonly isAuthenticated: boolean
  readonly userFullName: string
  readonly accessToken?: string
  readonly login: () => Promise<void>
  readonly logout: () => Promise<void>
}

export interface AuthAxiosConfig {
  instance: AxiosInstance
  autoAddAuthorizationHeader: boolean
  authorizationHeaderPrefix?: string
}

export interface RequiredAuthOptions {
  router: Router
  loginRouteName: RouteRecordName
  loginRedirectRoute: RouteLocationRaw
  logoutRedirectRoute: RouteLocationRaw
  autoConfigureNavigationGuards: boolean
  axios?: AuthAxiosConfig
}

/*
 * Make all optional but router
 * See: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 * See: https://stackoverflow.com/a/51507473/4873750
 */
export interface AuthOptions extends Omit<Partial<RequiredAuthOptions>, 'router'> {
  router: Router
}

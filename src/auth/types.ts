import { AxiosInstance } from 'axios'
import { RouteLocationRaw, RouteRecordName } from 'vue-router'

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
  readonly login: () => Promise<void>
  readonly logout: () => Promise<void>
}

export interface AuthAxiosConfig {
  instance: AxiosInstance
  autoAddAuthorizationHeader: boolean
}

export interface RequiredAuthOptions {
  loginRouteName: RouteRecordName
  loginRedirectRoute: RouteLocationRaw
  logoutRedirectRoute: RouteLocationRaw
  autoConfigureNavigationGuards: boolean
  axios?: AuthAxiosConfig
}

export type AuthOptions = Partial<RequiredAuthOptions>

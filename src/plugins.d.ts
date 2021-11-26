import { AuthPlugin } from './auth/types'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: AuthPlugin
  }
}

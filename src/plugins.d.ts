import { AuthPlugin } from './auth/types'
import 'vue-router'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: AuthPlugin
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    transition?: string
    public?: boolean
  }
}

import { InjectionKey } from 'vue'
import { AuthPlugin } from './types'

// See: https://v3.vuejs.org/api/composition-api.html#provide-inject
export const authInjectionKey: InjectionKey<AuthPlugin> = Symbol()

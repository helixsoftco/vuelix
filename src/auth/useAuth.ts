import { authInstance } from './plugin'
import { AuthPlugin } from './types'

/**
 * Returns the auth instance. Equivalent to using `$auth` inside
 * templates.
 */
export function useAuth(): AuthPlugin {
  // eslint-disable-next-line
  return authInstance!
}

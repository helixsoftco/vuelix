import { AxiosInstance } from 'axios'
import { useAuth } from './useAuth'

export function configureAuthorizationHeaderInterceptor(axiosInstance: AxiosInstance, prefix = 'Bearer') {
  axiosInstance.interceptors.request.use((config) => {
    const auth = useAuth()

    config.headers = config.headers ?? {}
    if (auth.isAuthenticated) {
      config.headers.Authorization = `${prefix} ${auth.accessToken}`
    }
    return config
  })
}

import { PetApi } from '@/api-client'
import axiosInstance from './axios'

/**
 * Example API by Swagger
 * https://editor.swagger.io/
 */
export const petApi = new PetApi(undefined, undefined, axiosInstance)

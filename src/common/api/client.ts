import {API_BASE_URL} from '@/common/constants'
import axios, {AxiosError} from 'axios'

export const api = axios.create({
  baseURL: API_BASE_URL
})

// Request interceptor for manipulating request headers etc.
api.interceptors.request.use((config) => {
  return config
})

// Response interceptor for capturing errors into Sentry, Crashlytics, ...
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    // Capture here
    return Promise.reject(error)
  }
)

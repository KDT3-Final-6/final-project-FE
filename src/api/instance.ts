import { getCookie } from '@src/utils/cookie'
import axios from 'axios'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

const axiosApi = (url: string, forData: boolean) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': forData ? 'multipart/form-data' : 'application/json',
    },
  })
  instance.defaults.timeout = 3000

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(
    (config) => {
      const token = getCookie('accessToken')
      if (token) config.headers['Authorization'] = `Bearer ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}

export const axiosInstance = axiosApi(API_BASE_URL, false)
export const axiosFormDataInstance = axiosApi(API_BASE_URL, true)

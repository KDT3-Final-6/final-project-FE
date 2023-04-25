import { getCookie } from '@src/utils/cookie'
import axios from 'axios'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

// const token = getCookie('accessToken')
const axiosApi = (url: string, formData: boolean) => {
  const token = getCookie('accessToken')
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  // instance.defaults.timeout = 5000

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error

      const originalRequest = config

      // if (status === 403) {
      //   const accessToken = getCookie('accessToken')
      //   const refreshToken = getCookie('refreshToken')

      //   try {
      //     const response = await login({
      //       token: { accessToken, refreshToken },
      //     })
      //     const newAccessToken = response.data.accessToken
      //     const newRefreshToken = response.data.refreshToken
      //     originalRequest.headers = {
      //       'Content-Type': formData ? 'multipart/form-data' : 'application/json',
      //       Authorization: `Bearer ${newAccessToken}`,
      //     }
      //     localStorage.setItem('accessToken', newAccessToken)
      //     localStorage.setItem('refreshToken', newRefreshToken)
      //     return await axios(originalRequest)
      //   } catch (error: any) {
      //     new Error(error)
      //   }
      // }
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

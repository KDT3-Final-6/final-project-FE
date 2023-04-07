import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from '@src/utils/cookie'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getCookie('accessToken')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export default baseQuery

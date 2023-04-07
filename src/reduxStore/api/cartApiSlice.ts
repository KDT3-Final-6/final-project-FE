import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ICartList } from '@src/interfaces/product'
import { getCookie } from '@src/utils/cookie'

const API_BASE_URL = import.meta.env.VITE_BASE_URL

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

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCartList: builder.query<ICartList, void>({ query: () => API_URL.cart }),
  }),
})

export const { useGetCartListQuery } = cartApi

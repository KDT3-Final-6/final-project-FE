import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { ICartResponse, ICartList } from '@src/interfaces/product'
import API_URL from '@src/constants/apiUrlConst'
import { getCookie } from '@src/utils/cookie'

const API_BASE_URL = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('content-type', 'application/json')
    const token = getCookie('accessToken')
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  },
})

export const cartListAPI = createApi({
  reducerPath: 'cartListAPI',
  baseQuery,
  endpoints: (builder) => ({
    getCartList: builder.query<ICartResponse, void>({
      query: () => API_URL.cart,
    }),
  }),
})

// export const { useGetCartListQuery } = cartListAPI

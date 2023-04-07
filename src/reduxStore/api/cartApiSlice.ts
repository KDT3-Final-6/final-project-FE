import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ICartList, ICartResponse } from '@src/interfaces/product'
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

interface IEditCart {
  periodOptionId: number
  quantity: number
}

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCartList: builder.query<ICartResponse, void>({
      query: () => API_URL.cart,
      providesTags: [{ type: 'Cart', id: 'CART-LIST' }],
    }),
    deleteCartList: builder.mutation({
      query: (cartIds: number[]) => ({
        url: `${API_URL.cart}?cartIds=${cartIds.join(', ')}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cart', id: 'CART-LIST' }],
    }),
    editCartList: builder.mutation<void, { cartId: number; data: IEditCart }>({
      query: ({ cartId, data }) => ({
        url: `${API_URL.cart}/${cartId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'CART-LIST' }],
    }),
  }),
})

export const { useGetCartListQuery, useEditCartListMutation, useDeleteCartListMutation } = cartApi
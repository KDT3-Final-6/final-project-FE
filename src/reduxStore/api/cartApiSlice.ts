import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ICartResponse } from '@src/interfaces/product'
import baseQuery from '../const/baseQuery'

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
    postCartList: builder.mutation({
      query: ({ optionId, quantity }) => ({
        url: API_URL.cart,
        method: 'POST',
        body: { productIds: [{ periodOptionId: +optionId, quantity }] },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'CART-LIST' }],
    }),
  }),
})

export const {
  useGetCartListQuery,
  useEditCartListMutation,
  useDeleteCartListMutation,
  usePostCartListMutation,
} = cartApi

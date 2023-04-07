import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IOrders, IPostOrder, INonMemberOrder } from '@src/interfaces/order'
import baseQuery from '@src/reduxStore/const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery,
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrderList: builder.query<IOrders, number | void>({
      query: (page = 1) => `${API_URL.order}?page=${page}`,
      providesTags: [{ type: 'Order', id: 'Order-LIST' }],
    }),
    postOrder: builder.mutation<void, IPostOrder>({
      query: (order) => ({
        url: API_URL.order,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order-LIST' }],
    }),
    postNonUserOrder: builder.mutation<void, INonMemberOrder>({
      query: (order) => ({
        url: API_URL.nonmember,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order-LIST' }],
    }),
    deleteOrder: builder.mutation<void, number>({
      query: (orderId) => ({
        url: `${API_URL.order}/${orderId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const {
  useGetOrderListQuery,
  usePostOrderMutation,
  usePostNonUserOrderMutation,
  useDeleteOrderMutation,
} = orderApi

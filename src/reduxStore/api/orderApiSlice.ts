import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { axiosInstance } from '@src/api/instance'
import API_URL from '@src/constants/apiUrlConst'
import { IOrders, IPostOrder } from '@src/interfaces/order'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

// // API 엔드포인트의 각 함수를 추출
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE2ODA4ODkyMjh9.QPD7gjbhNJbo6zTVK7mj6xjNquqZ8ujNzalk9ieuINg'

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

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
export const { useGetOrderListQuery, usePostOrderMutation, useDeleteOrderMutation } = orderApi

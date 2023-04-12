import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { buildQueryLifecycleHandler } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/queryLifecycle'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => API_URL.members,
      providesTags: [{ type: 'User', id: 'User' }],
    }),
    login: builder.mutation({
      query: (data) => ({ url: API_URL.login, method: 'POST', body: data }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    logout: builder.mutation({
      query: () => ({
        url: API_URL.logout,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    editUserInfo: builder.mutation({
      query: (data) => ({
        url: API_URL.members,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
  }),
})

export const { useGetUserInfoQuery, useLoginMutation, useLogoutMutation, useEditUserInfoMutation } =
  userApi

import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { ILoginResponse, IUserInfo, ILogin } from '@src/interfaces/user'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserInfo: builder.query<IUserInfo, void>({
      query: () => API_URL.members,
      providesTags: [{ type: 'User', id: 'User' }],
    }),
    login: builder.mutation<ILoginResponse, ILogin>({
      query: ({ memberEmail, memberPassword }) => ({
        url: API_URL.login,
        method: 'POST',
        body: { memberEmail, memberPassword },
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    logout: builder.mutation<{ data: boolean }, void>({
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

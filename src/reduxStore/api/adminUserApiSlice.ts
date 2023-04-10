import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IAdminUsers, IAdminUserDetail } from '@src/interfaces/adminUsers'
import baseQuery from '@src/reduxStore/const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const adminUserApi = createApi({
  reducerPath: 'adminUserApi',
  baseQuery,
  tagTypes: ['AdminUser'],
  endpoints: (builder) => ({
    getUsersList: builder.query<IAdminUsers, number | void>({
      query: (page = 1) => `${API_URL.admin_users}?page=${page}`,
      providesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    getUserDetail: builder.query<IAdminUserDetail, number | void>({
      query: (memberId) => `${API_URL.admin_users}/${memberId}`,
      providesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    getCountActiveUser: builder.query<number, void>({
      query: () => `${API_URL.admin_countActiveMember}`,
      providesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    getCountDeleteUser: builder.query<number, void>({
      query: () => `${API_URL.admin_deleteActiveMember}`,
      providesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    postChangeAdmin: builder.mutation<void, number>({
      query: (memberId) => ({
        url: `${API_URL.admin_upMember}/${memberId}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    postChangeGeneral: builder.mutation<void, number>({
      query: (memberId) => ({
        url: `${API_URL.admin_downMember}/${memberId}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (memberId) => ({
        url: `${API_URL.admin_deleteMember}/${memberId}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'AdminUser', id: 'Admin-Users-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const {
  useGetUsersListQuery,
  useGetUserDetailQuery,
  useGetCountActiveUserQuery,
  useGetCountDeleteUserQuery,
  usePostChangeAdminMutation,
  usePostChangeGeneralMutation,
  useDeleteUserMutation,
} = adminUserApi

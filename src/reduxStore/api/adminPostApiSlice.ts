import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IAdminPost, IAdminPostApi } from '@src/interfaces/adminPost'
import baseQuery from '@src/reduxStore/const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const adminPostApi = createApi({
  reducerPath: 'adminPostApi',
  baseQuery,
  tagTypes: ['AdminPost'],
  endpoints: (builder) => ({
    getAdminPostList: builder.query<IAdminPost, number | void>({
      query: (page = 1) => `${API_URL.admins_qna}?page=${page}`,
      providesTags: [{ type: 'AdminPost', id: 'Admin-Post-LIST' }],
    }),
    getAdminSearchPost: builder.query<
      IAdminPost,
      { keyword: string | null; inquiryType: string | null; qnAStatus: string | null; page: number }
    >({
      query: ({ keyword, inquiryType, qnAStatus, page = 1 }) => {
        let queryString = `${API_URL.admins_qnaSearch}?`
        if (keyword) queryString += `keyword=${keyword}&`
        if (inquiryType) queryString += `inquiryType=${inquiryType}&`
        if (qnAStatus) queryString += `qnAStatus=${qnAStatus}&`
        if (page) queryString += `page=${page}&`
        return queryString.slice(0, -1)
      },
      providesTags: [{ type: 'AdminPost', id: 'Admin-Post-LIST' }],
    }),
    postAdminPost: builder.mutation<void, IAdminPostApi>({
      query: (qna) => ({
        url: API_URL.admins_qnaAnswers,
        method: 'POST',
        body: qna,
      }),
      invalidatesTags: [{ type: 'AdminPost', id: 'Admin-Post-LIST' }],
    }),
    patchAdminPost: builder.mutation<void, IAdminPostApi>({
      query: (qna) => ({
        url: API_URL.admins_qnaAnswers,
        method: 'PATCH',
        body: qna,
      }),
      invalidatesTags: [{ type: 'AdminPost', id: 'Admin-Post-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const {
  useGetAdminPostListQuery,
  useGetAdminSearchPostQuery,
  usePostAdminPostMutation,
  usePatchAdminPostMutation,
} = adminPostApi

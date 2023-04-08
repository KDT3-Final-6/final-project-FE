import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IQnA, IPostQnA } from '@src/interfaces/post'
import baseQuery from '../const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const qnaApi = createApi({
  reducerPath: 'qnaApi',
  baseQuery,
  tagTypes: ['QnA'],
  endpoints: (builder) => ({
    getQnAList: builder.query<IQnA, number | void>({
      query: (page = 1) => `${API_URL.qna}?page=${page}`,
      providesTags: (result, error, page) =>
        result
          ? [
              ...result.content.map(({ postId }) => ({ type: 'QnA' as const, postId })),
              { type: 'QnA', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'QnA', id: 'PARTIAL-LIST' }],
    }),
    postQnA: builder.mutation<void, IPostQnA>({
      query: (qna) => ({
        url: API_URL.qna,
        method: 'POST',
        body: qna,
      }),
      invalidatesTags: [{ type: 'QnA', id: 'PARTIAL-LIST' }],
    }),
    deleteQnA: builder.mutation<void, number>({
      query: (postId) => ({
        url: `${API_URL.qna}/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'QnA', id: 'PARTIAL-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const { useGetQnAListQuery, usePostQnAMutation, useDeleteQnAMutation } = qnaApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IQnA, IPostQnA } from '@src/interfaces/post'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

// // API 엔드포인트의 각 함수를 추출
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE2ODA5Mzg2Njl9.mK866jKX-N2eszYWGsJIabV3LFa6rwlkkm4Aw6bSEbc'
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

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
      invalidatesTags: (result, error, postId) => [{ type: 'QnA', id: postId }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const { useGetQnAListQuery, usePostQnAMutation, useDeleteQnAMutation } = qnaApi

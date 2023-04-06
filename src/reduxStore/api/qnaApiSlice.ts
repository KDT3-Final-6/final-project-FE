import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IQnA, IPostQnA } from '@src/interfaces/post'

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

// // API 엔드포인트의 각 함수를 추출
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE2ODA4NTQ2MTR9.Vphqnq0b9L_CxeLzU0cEYY__Tz0p-OmtJfnTV4oVsbw'
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
    }),
    postQnA: builder.mutation<void, IPostQnA>({
      query: (qna) => ({
        url: API_URL.qna,
        method: 'POST',
        body: qna,
      }),
    }),
    deleteQnA: builder.mutation<void, number>({
      query: (postId) => ({
        url: `${API_URL.qna}/${postId}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const { useGetQnAListQuery, usePostQnAMutation, useDeleteQnAMutation } = qnaApi

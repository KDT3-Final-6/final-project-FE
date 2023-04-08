import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ISearch } from '@src/interfaces/search'
import baseQuery from '../const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery,
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getSearchList: builder.query<
      ISearch,
      { keyword: string | null; sortTarget: string; page: number }
    >({
      query: ({ keyword, sortTarget, page = 1 }) =>
        `${API_URL.search}?keyword=${keyword}&sortTarget=${sortTarget}&page=${page}`,
      // providesTags: (result, error, page) =>
      //   result
      //     ? [
      //         ...result.content.map(({ productId }) => ({ type: 'Search' as const, productId })),
      //         { type: 'Search', id: 'Search-LIST' },
      //       ]
      //     : [{ type: 'Search', id: 'Search-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const { useGetSearchListQuery } = searchApi

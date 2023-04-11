import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ICuration } from '@src/interfaces/curation'
import baseQuery from '../const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const curationApi = createApi({
  reducerPath: 'curationApi',
  baseQuery,
  tagTypes: ['Curation'],
  endpoints: (builder) => ({
    getCurationList: builder.query<
      ICuration,
      { season: string | null; district: string | null; theme: string | null; page: number }
    >({
      query: ({ season, district, theme, page = 1 }) =>
        `${API_URL.curation}?season=${season}&district=${district}&theme=${theme}&page=${page}`,
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
export const { useGetCurationListQuery } = curationApi

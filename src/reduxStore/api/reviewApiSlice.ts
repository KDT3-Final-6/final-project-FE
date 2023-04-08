import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { IReview } from '@src/interfaces/review'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery,
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    getReviewForMe: builder.query<IReview, void>({
      query: () => API_URL.review,
      providesTags: [{ type: 'Review', id: 'REVIEW_LIST' }],
    }),
    getReviewForProduct: builder.query<IReview, number>({
      query: (productId: number) => `${API_URL.review}/${productId}`,
      providesTags: [{ type: 'Review', id: 'REVIEW_LIST' }],
    }),
  }),
})

export const { useGetReviewForProductQuery, useGetReviewForMeQuery } = reviewApi

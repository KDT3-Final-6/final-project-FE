import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { IReview } from '@src/interfaces/review'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery,
  tagTypes: ['Review', 'ReviewForMe'],
  endpoints: (builder) => ({
    getReviewForMe: builder.query<IReview, void>({
      query: () => API_URL.review,
      providesTags: [{ type: 'ReviewForMe', id: 'REVIEW_LIST' }],
    }),
    getReviewForProduct: builder.query<IReview, number>({
      query: (productId: number) => `${API_URL.review}/${productId}`,
      providesTags: [{ type: 'Review', id: 'REVIEW_LIST' }],
    }),
    editReview: builder.mutation<
      void,
      { postId: number; data: { content: string; scope: number } }
    >({
      query: ({ postId, data }) => ({
        url: `${API_URL.review}/${postId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [{ type: 'ReviewForMe', id: 'REVIEW-LIST' }],
    }),
    deleteReview: builder.mutation({
      query: (postId: number) => ({
        url: `${API_URL.review}/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'ReviewForMe', id: 'REVIEW-LIST' }],
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: API_URL.review,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Review', id: 'REVIEW-LIST' }],
    }),
  }),
})

export const {
  useGetReviewForProductQuery,
  useGetReviewForMeQuery,
  useEditReviewMutation,
  useDeleteReviewMutation,
  usePostReviewMutation,
} = reviewApi

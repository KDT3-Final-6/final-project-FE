import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery,
  tagTypes: ['Wishlist', 'Products'],
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: (page: number = 1) => API_URL.wishlist + `?page=${page}`,
      providesTags: [{ type: 'Wishlist', id: 'WISHLIST' }],
    }),
    deleteWishlist: builder.mutation({
      query: (productId: number) => ({
        url: API_URL.wishlist + `/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Wishlist', id: 'WISHLIST' }],
    }),
    postWishlist: builder.mutation({
      query: (productId) => ({
        url: API_URL.wishlist + `/${productId}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Wishlist', id: 'WISHLIST' }, 'Products'],
    }),
  }),
})

export const { useGetWishlistQuery, useDeleteWishlistMutation, usePostWishlistMutation } =
  wishlistApi

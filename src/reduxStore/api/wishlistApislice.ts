import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { IProduct } from '@src/interfaces/product'

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
      invalidatesTags: [
        { type: 'Wishlist', id: 'WISHLIST' },
        { type: 'Products', id: 'Category' },
      ],
    }),
    postWishlist: builder.mutation({
      query: (productId) => ({
        url: API_URL.wishlist + `/${productId}`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'Wishlist', id: 'WISHLIST' },
        { type: 'Products', id: 'Category' },
      ],
    }),
    getCategoryProducts: builder.query<IProduct, { keyword: string }>({
      query: ({ keyword }) => `${API_URL.category}/?category=${keyword}`,
      providesTags: [{ type: 'Products', id: 'Category' }],
    }),
  }),
})

export const {
  useGetWishlistQuery,
  useDeleteWishlistMutation,
  usePostWishlistMutation,
  useGetCategoryProductsQuery,
} = wishlistApi

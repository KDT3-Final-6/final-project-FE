import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import baseQuery from '../const/baseQuery'
import { IProduct, IProductDetail } from '@src/interfaces/product'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getGroupProducts: builder.query<IProduct, { group: string; concept: string }>({
      query: ({ group, concept }) =>
        `${API_URL.curation}/group?group=${group}%conceptList=${concept}`,
      providesTags: [{ type: 'Products', id: 'Group' }],
    }),
    getCategoryProducts: builder.query<IProduct, { keyword: string }>({
      query: ({ keyword }) => `${API_URL.category}/?category=${keyword}`,
      providesTags: [{ type: 'Products', id: 'Category' }],
    }),
    getProductDetail: builder.query<IProductDetail, { id: number }>({
      query: ({ id }) => `${API_URL.products}/${id}`,
      providesTags: [{ type: 'Products', id: 'Detail' }],
    }),
  }),
})

export const { useGetGroupProductsQuery, useGetCategoryProductsQuery, useGetProductDetailQuery } =
  productsApi

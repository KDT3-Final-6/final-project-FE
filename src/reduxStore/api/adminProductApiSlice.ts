import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { IProduct } from '@src/interfaces/product'
import baseQuery from '@src/reduxStore/const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const adminProductApi = createApi({
  reducerPath: 'adminProductApi',
  baseQuery,
  tagTypes: ['AdminProduct'],
  endpoints: (builder) => ({
    getAdminProductList: builder.query<IProduct, number | void>({
      query: (page = 1) => `${API_URL.admin_products}?page=${page}`,
      providesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
    deleteAdminProduct: builder.mutation<void, number>({
      query: (productId) => ({
        url: `${API_URL.admin_products}/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
    getAdminProductDetail: builder.query({
      query: ({ productId }) => `${API_URL.products}/${productId}`,
      providesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
    editAdminProductDetail: builder.mutation({
      query: ({ productId, productData }) => ({
        url: API_URL.admin_products + `/${productId}`,
        method: 'PATCH',
        body: productData,
      }),
      invalidatesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
    addProductOption: builder.mutation({
      query: ({ productId, productData }) => ({
        url: API_URL.admin_products + '/periods',
        method: 'POST',
        body: {
          productId,
          options: [{ ...productData }],
        },
      }),
      invalidatesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
    deleteProductOption: builder.mutation({
      query: (periodOptionId) => ({
        url: API_URL.admin_products + `/periods/${periodOptionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'AdminProduct', id: 'Admin-Product-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const {
  useGetAdminProductListQuery,
  useDeleteAdminProductMutation,
  useGetAdminProductDetailQuery,
  useEditAdminProductDetailMutation,
  useAddProductOptionMutation,
  useDeleteProductOptionMutation,
} = adminProductApi

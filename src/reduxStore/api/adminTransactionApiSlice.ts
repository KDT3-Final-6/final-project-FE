import { createApi } from '@reduxjs/toolkit/query/react'
import API_URL from '@src/constants/apiUrlConst'
import { ITransactionList, ITransactionApproval } from "@src/interfaces/transaction"
import baseQuery from '@src/reduxStore/const/baseQuery'

// // API 엔드포인트의 각 함수를 추출
export const adminTransactionApi = createApi({
  reducerPath: 'adminTransactionApi',
  baseQuery,
  tagTypes: ['AdminTransaction'],
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransactionList, number | void>({
      query: (page = 1) => `${API_URL.admin_transactions}?page=${page}`,
      providesTags: [{ type: 'AdminTransaction', id: 'Admin-Transaction-LIST' }],
    }),
    patchTransactionApproval: builder.mutation<ITransactionApproval, number | void>({
      query: (memberId) => ({
        url: `${API_URL.admin_transactions_approval}/${memberId}`,
        method: 'PATCH'
      }),
      invalidatesTags: [{ type: 'AdminTransaction', id: 'Admin-Transaction-LIST' }],
    }),
  }),
})

// API 엔드포인트의 각 함수를 추출
export const {
  useGetTransactionsQuery,
  usePatchTransactionApprovalMutation,
} = adminTransactionApi

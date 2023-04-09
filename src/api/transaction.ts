import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import ITransaction from "@src/interfaces/transaction"

/** 관리자 거래내역 API */
export const getAdminTransactions = async (page: number = 1) => {
  const data: ITransaction = await axiosInstance.get(`${API_URL.admin_transactions}?page=${page}`)
  return data
}
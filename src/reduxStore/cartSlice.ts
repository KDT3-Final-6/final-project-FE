import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { editCartProduct, getCartProdcts } from '@src/api/product'
import { ICartResponse, ICartList } from '@src/interfaces/product'

/** 장바구니 조회 */
export const getCartList = createAsyncThunk<ICartResponse>('GET_CARTLIST', async () => {
  const response = await getCartProdcts()
  return response
})

/** 장바구니 수정 */
export const editCartList = createAsyncThunk('EDIT_CARTLIST', async () => {
  const response = await editCartProduct(cartId, periodOptionId, quantity)
  return response
})

/** 장바구니 삭제 */

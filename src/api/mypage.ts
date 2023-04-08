import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import { IReview } from '@src/interfaces/review'

/** 장바구니  목록*/
export const getCartProdcts = async () => await axiosInstance(API_URL.cart)

/** 장바구니  수정*/
export const editCartProduct = async (cartId: number, periodOptionId: number, quantity: number) =>
  await axiosInstance.patch(`${API_URL.cart}/${cartId}`, {
    periodOptionId,
    quantity,
  })

/** 장바구니 삭제 */
export const deleteCartProduct = async (cartId: number) =>
  await axiosInstance.delete(API_URL.cart, {})

/** 내가 쓴 리뷰 */
export const getReviewsForMe = async () => (await axiosInstance.get(API_URL.review)) as IReview

/** 내가 쓴 리뷰 수정 */
export const editReview = async (postId: number, data: object) =>
  await axiosInstance.patch(API_URL.review + `/${postId}`, data)

/** 리뷰 삭제 */
export const deleteReview = async (postId: number) =>
  await axiosInstance.delete(API_URL.review + `/${postId}`)

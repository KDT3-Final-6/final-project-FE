import API_URL from '@src/constants/apiUrlConst'
import { IQnA } from '@src/interfaces/post'
import { axiosInstance } from './instance'

// 사용자 페이지
/** 전체 리뷰리스트 api */
export const getTotalReviews = async () => {}

/** 상품 후기 리스트 api */
export const getProductReviews = async () => {}

/** 내가 쓴 리뷰 리스트 api */
export const getUserReviews = async () => {}

/** 상품 후기 작성 api */
export const postProductReviews = async () => {}

/** 상품 후기 수정 api */
export const patchProductReviews = async () => {}

/** 상품 후기 삭제 api */
export const deleteProductReviews = async () => {}

/** QnA 리스트 api */
export const getQnAList = async () => {
  const data: IQnA = await axiosInstance.get(API_URL.qna)
  return data
}

/** QnA 작성 api*/
export const postQnA = async () => await axiosInstance.post(API_URL.qna)

/** QnA 삭제 api*/
export const deleteQnA = async (postId: number) =>
  await axiosInstance.delete(`${API_URL.qna}/${postId}`)

// 관리자 페이지

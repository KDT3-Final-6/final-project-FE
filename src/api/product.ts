import axios from 'axios'
import API_URL from '@src/constants/apiUrlConst'
import { axiosFormDataInstance, axiosInstance } from './instance'
import {
  IProduct,
  IProductContent,
  IProductDetail,
  IproductCategories,
  ICartResponse,
} from '@src/interfaces/product'
import { IReview } from '@src/interfaces/review'
import { IWishlist } from '@src/interfaces/wishlist'

/** 그룹별 여행 */
export const getGroupProducts = async (group: string, concept: string[]) => {
  const data: IProduct = await axiosInstance.get(`${API_URL.curation}/group?group=${group}&conceptList=${concept}`)
  return data
}

/** 추천 상품 불러오기 */
export const getRecommendProducts = async () => {
  const data: IProduct = await axiosInstance.get(API_URL.recommend)
  return data
}

/** 상품 상세 데이터 */
export const getProductDetail = async (id: number) => {
  const data: IProductDetail = await axiosInstance.get(`${API_URL.products}/${id}`)
  return data
}

/** 상품에 대한 리뷰 */
export const getReviewsForProduct = async (id: number) => {
  const data: IReview = await axiosInstance.get(`${API_URL.review}/${id}`)
  return data
}

/** 카테고리별 상품 데이터 */
export const getCategoryProducts = async (keyword: string) => {
  const data: IProduct = await axiosInstance.get(`${API_URL.category}/?category=${keyword}`)
  return data
}

/** 연관 상품 데이터 */
export const getRelatedProducts = async (id: number) => {
  const data: IProduct = await axiosInstance.get(`${API_URL.relation}/${id}`)
  return data
}

/** 상품 장바구니에 넣기 */
export const postCartProduct = async (optionId: string, quantity: number) => {
  await axiosInstance.post(API_URL.cart, {
    productIds: [
      {
        periodOptionId: +optionId,
        quantity: quantity,
      },
    ],
  })
}

/** 상품 위시리스트에 넣기 */
export const postWishlist = async (productId: number) => {
  await axiosInstance.post(API_URL.wishlist + `/${productId}`)
}

/** 상품 위시리스트에서 삭제 */
export const deleteWishlist = async (productId: number) => {
  await axiosInstance.delete(API_URL.wishlist + `/${productId}`)
}

export const getWishlist = async (page: number = 1) =>
  (await axiosInstance.get(API_URL.wishlist + `?page=${page}`)) as IWishlist

/** 관리자 api */

/** 관리자 상품 상세 데이터 */
export const getAdminProductDetail = async (id: number) => {
  const data: IProductDetail = await axiosInstance.get(`${API_URL.products}/${id}`)
  return data
}

/** 관리자 상품 추가 */
export const postAddProduct = async (productData: any) => {
  const response = await axiosFormDataInstance.post(API_URL.admin_products, productData)
  return response
}

/** 관리자 카테고리 불러오기 */
export const getCategory = async () => {
  const data: IproductCategories[] = await axiosInstance.get(API_URL.admin_categories)
  return data
}

/** 관리자 상품 수정하기 */
export const editProduct = async (productId: number, productData: any) => {
  const response = await axiosFormDataInstance.patch(
    API_URL.admin_products + `/${productId}`,
    productData
  )
}

/** 상품 옵션 추가하기 */
export const addProductOption = async (productId: number, productData: any) => {
  const response = await axiosInstance.post(API_URL.admin_products + '/periods', {
    productId,
    options: [...productData],
  })
}

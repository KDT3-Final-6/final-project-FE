import axios from 'axios'
import API_URL from '@src/constants/apiUrlConst'
import { axiosFormDataInstance, axiosInstance } from './instance'
import {
  IProduct,
  IProductContent,
  IProductDetail,
  IproductCategories,
} from '@src/interfaces/product'
import { IReview } from '@src/interfaces/review'

export const getProducts = async () => {
  const data = await axios.get('/mockData/product.json')
  const json: IProductContent[] = data.data
  return json
}

// export const getProducts = async () => {
//   const data:IProduct = await axiosInstance.get(API_URL.products)
//   return data
// }

export const getRecommendProducts = async () => {
  const data: IProduct = await axiosInstance.get(API_URL.recommend)
  return data
}

export const getProductDetail = async (id: number) => {
  const data: IProductDetail = await axiosInstance.get(`${API_URL.products}/${id}`)
  return data
}

export const getReviewsForProduct = async (id: number) => {
  const data: IReview = await axiosInstance.get(`${API_URL.review}/${id}`)
  return data
}

export const getCategoryProducts = async (keyword: string) => {
  const data: IProduct = await axiosInstance.get(`${API_URL.category}/?category=${keyword}`)
  return data
}

export const getRelatedProducts = async (id: number) => {
  const data: IProduct = await axiosInstance.get(`${API_URL.relation}/${id}`)
  return data
}

export const postCartProduct = async (optionId: string, quantity: number) => {
  const response = await axiosInstance.post(API_URL.cart, {
    productIds: [
      {
        periodOptionId: +optionId,
        quantity: quantity,
      },
    ],
  })
}

// 관리자 api

export const getAdminProducts = async (page: number = 1) => {
  const data: IProduct = await axiosInstance.get(API_URL.admin_products + `?page=${page}`)
  return data
}

export const getAdminProductDetail = async (id: number) => {
  const data: IProductDetail = await axiosInstance.get(`${API_URL.products}/${id}`)
  return data
}

export const postAddProduct = async (productData: any) => {
  const response = await axiosFormDataInstance.post(API_URL.admin_products, { data: productData })
  return response
}

export const getCategory = async () => {
  const data: IproductCategories[] = await axiosInstance.get(API_URL.admin_categories)
  return data
}

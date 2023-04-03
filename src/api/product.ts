import axios from 'axios'
import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import { IProduct, IProductContent, IProductDetail } from '@src/interfaces/product'
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

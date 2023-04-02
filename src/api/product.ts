import axios from 'axios';
import API_URL from '@src/constants/apiUrlConst';
import { axiosInstance } from './instance';
import { IProduct } from "@src/interfaces/product";

export const getProducts = async () => {
  const data = await axios.get('/mockData/product.json')
  const json:IProduct[] = data.data
  return json
}

// export const getProducts = async () => {
//   const data:IProduct = await axiosInstance.get(API_URL.products)
//   return data
// }

export const getRecommendProducts = async() => {
  const data: IProduct = await axiosInstance.get(API_URL.recommend)
  return data
}
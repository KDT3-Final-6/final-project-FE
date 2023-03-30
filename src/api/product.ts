import axios from 'axios';
import API_URL from '@src/constants/apiUrlConst';
import { axiosInstance } from './instance';
import { IProduct } from "@src/env";

export const getProducts = async () => {
  const data = await axios.get('/mockData/product.json')
  const json:IProduct[] = data.data
  return json
}

export const getRecommendProducts = async() => {
  const res = await axiosInstance.get(API_URL.recommend)
  const data:IProduct = res.data
  return data
}
import API_URL from '@src/constants/apiUrlConst';
import { IProduct } from "@src/interfaces/product";
import { axiosInstance } from './instance';

export const getRecommendProducts = async() => {
  const res = await axiosInstance.get(API_URL.recommend)
  const data:IProduct = res.data
  return data
}
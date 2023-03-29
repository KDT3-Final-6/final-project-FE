import API_URL from "@src/constants/apiUrlConst";
import { axiosInstance } from './instance';

interface ILogin{
  token: string
  name: string
}

export const login = async (data:object) => {
  const response:ILogin = await axiosInstance.post(API_URL.login, data)
  return response
}

export const logout = async()=> {
  await axiosInstance.post(API_URL.login)
}

export const userInfo = async() => {
  await axiosInstance.get(API_URL.user)
}
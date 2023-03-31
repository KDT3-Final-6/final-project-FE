import API_URL from "@src/constants/apiUrlConst";
import { axiosInstance } from './instance';

interface ILogin{
  token: string
  name: string
}


// 회원가입
export const signup = async (data: object) => {
  await axiosInstance.post(API_URL.members, data)
}

// 로그인
export const login = async (data:object) => {
  const response:ILogin = await axiosInstance.post(API_URL.login, data)
  return response
}

// 로그아웃
export const logout = async()=> {
  await axiosInstance.post(API_URL.logout)
}

// 회원정보
export const userInfo = async() => {
  await axiosInstance.get(API_URL.members)
}

// 회원정보수정
export const userInfoEdit = async () => {
  await axiosInstance.patch(API_URL.members)
}

// 회원탈퇴
export const userWithDrawal = async () => {
  await axiosInstance.delete(API_URL.members)
}
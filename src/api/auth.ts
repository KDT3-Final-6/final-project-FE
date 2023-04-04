import API_URL from "@src/constants/apiUrlConst";
import { axiosInstance } from './instance';

interface ILogin{
  token: string
  name: string
}


// 회원가입
export const signup = (data: object) => axiosInstance.post(API_URL.members, data)


// 로그인
export const login = async (data:object) => {
  const response:ILogin = await axiosInstance.post(API_URL.login, data)
  return response
}

// 로그아웃
export const logout = () => axiosInstance.post(API_URL.logout)

// 회원정보
export const userInfo = () => axiosInstance.get(API_URL.members)

// 회원정보수정
export const userInfoEdit = () => axiosInstance.patch(API_URL.members)

// 회원탈퇴
export const userWithDrawal = () => axiosInstance.delete(API_URL.members)
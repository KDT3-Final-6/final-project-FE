import API_URL from "@src/constants/apiUrlConst";
import { axiosInstance } from './instance';

interface ILogin{
  data: {
    accessToken: string
    grantType: string
    refreshToken: string
    refreshTokenExpirationTime:number
  }
}


/** 회원가입 API */
export const signup = (data: object) => axiosInstance.post(API_URL.members, data)

/** 로그인 API */
export const login = async (data:object) => {
  const response:ILogin = await axiosInstance.post(API_URL.login, data)
  return response
}

/** 로그아웃 API */
export const logout = () => axiosInstance.post(API_URL.logout)

/** 회원정보 API */
export const userInfo = () => axiosInstance.get(API_URL.members)

/** 회원정보수정 API */
export const userInfoEdit = () => axiosInstance.patch(API_URL.members)

/** 회원탈퇴 API */
export const userWithDrawal = () => axiosInstance.delete(API_URL.members)
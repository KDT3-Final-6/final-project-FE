import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import { IUserInfo } from '@src/interfaces/user'

interface ILogin {
  data: {
    accessToken: string
    grantType: string
    memberName: string
    refreshToken: string
    refreshTokenExpirationTime: number
    roles: string[]
  }
}

/** 회원가입 API */
export const signup = (data: object) => axiosInstance.post(API_URL.members, data)

/** 로그인 API */
export const login = async (data: object) => await axiosInstance.post(API_URL.login, data)

/** 로그아웃 API */
export const logout = () => axiosInstance.post(API_URL.logout)

/** 회원정보 API */
export const userInfo = async () => (await axiosInstance.get(API_URL.members)) as IUserInfo

/** 회원정보수정 API */
export const userInfoEdit = (data: object) => axiosInstance.patch(API_URL.members, data)

/** 회원탈퇴 API */
export const userWithDrawal = () => axiosInstance.delete(API_URL.members)

/** 회원 비밀번호 확인 API */
export const checkpassword = (data: object) =>
  axiosInstance.post(API_URL.members + '/password-check', data)

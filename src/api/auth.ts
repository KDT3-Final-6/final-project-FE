import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'

/** 회원 비밀번호 확인 API */
export const checkpassword = (data: object) =>
  axiosInstance.post(API_URL.members + '/password-check', data)

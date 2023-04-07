import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import { ISurvey } from '@src/interfaces/survey'

/** 설문조사 값 보내기 */
export const postSurvey = async (data: object) => await axiosInstance.post(API_URL.survey, data)

export const getSurvey = async () => (await axiosInstance.get(API_URL.survey)) as ISurvey

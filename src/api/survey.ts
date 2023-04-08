import API_URL from '@src/constants/apiUrlConst'
import { axiosInstance } from './instance'
import { ISurvey } from '@src/interfaces/survey'
import { IProduct } from '@src/interfaces/product'

/** 설문조사 값 보내기 */
export const postSurvey = async (data: object) => await axiosInstance.post(API_URL.survey, data)

/** 설문조사 결과 */
export const getSurvey = async () => (await axiosInstance.get(API_URL.survey)) as ISurvey

/** 동행자 */
export const getCompanion = async () =>
  (await axiosInstance.get(API_URL.curation_companion)) as IProduct

/** 성별 */
export const getGender = async () => (await axiosInstance.get(API_URL.curation_gender)) as IProduct

/** 나이 그룹 */
export const getAge = async () => (await axiosInstance.get(API_URL.curation_age)) as IProduct

/** 취미 */
export const getHobby = async () => (await axiosInstance.get(API_URL.curation_hobby)) as IProduct

/** 종교 */
export const getReligion = async () =>
  (await axiosInstance.get(API_URL.curation_religion)) as IProduct

/** 계절 */
export const getSeason = async () => (await axiosInstance.get(API_URL.curation_season)) as IProduct

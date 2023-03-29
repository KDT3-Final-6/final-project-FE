import axios from "axios"

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL

const axiosApi = (url: string) => {
  return axios.create({ baseURL: url })
}

export const axiosInstance = axiosApi(API_BASE_URL)
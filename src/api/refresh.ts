import { getCookie, removeCookie } from "@src/utils/cookie";
import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import API_URL from "@src/constants/apiUrlConst";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const refreshToken = getCookie('refreshToken')
  const expireAt = localStorage.getItem('expireAt')
  let token = localStorage.getItem('accessToken')

  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken
    }

    const { data } = await axios.post(API_URL.login, body)

    token = data.data.accessToken
    localStorage.setItem('accessToken', data.data.accessToken)
    localStorage.setItem(
      "expireAt",
      moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss')
    )
  }

  config.headers["Authorization"] = `Bearer ${token}`

  return config
}

const refreshErrorHandle = (err: any) => {
  removeCookie("refreshToken")
}

export {refresh,refreshErrorHandle}
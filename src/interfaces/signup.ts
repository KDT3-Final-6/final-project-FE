import { ILogin } from './login'

export interface ISignup extends ILogin {
  name: string
  nickname: string
  phoneNumber: string
  birthDate: string
  hobby: string
}

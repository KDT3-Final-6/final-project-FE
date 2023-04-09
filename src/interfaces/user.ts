export interface ILogin {
  memberEmail: string
  memberPassword: string
}

export interface ISignup extends ILogin {
  memberPasswordConfirm: string
  memberName: string
  memberNickname: string
  memberPhone: string
  birthYear: string
  birthMonth: string
  birthDay: string
  memberGender: string
  memberHobby: string[]
  memberSmsAgree: boolean
  memberEmailAgree: boolean
}

export interface IUserInfo {
  memberEmail: string
  memberName: string
  memberNickName: string
  memberPhone: string
  memberBirthDate: string
  memberHobby: string[]
  memberSmsAgree: boolean
  memberEmailAgree: boolean
  memberGrade: string
  memberImage: string
  roles: string[]
}

export interface IUserInfoEdit {
  memberPassword: string
  memberPasswordConfirm: string
  memberNickname: string
  memberPhone: string
  memberHobby: string[]
  memberSmsAgree: boolean
  memberEmailAgree: boolean
}

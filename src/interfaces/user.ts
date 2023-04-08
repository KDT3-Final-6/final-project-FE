export interface ILogin {
  memberEmail: string
  memberPassword: string
}

export interface IUser extends ILogin {
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
  memberEmail: string | null
  memberName: string | null
  memberNickName: string | null
  memberPhone: string | null
  memberBirthDate: string | null
  memberHobby: string[] | null
  memberSmsAgree: boolean | null
  memberEmailAgree: boolean | null
  memberGrade: string | null
  memberImage: string | null
  roles: string[] | null
}

export interface ILogin {
  memberEmail: string,
  memberPassword: string,
}

export interface IUser extends ILogin {
  memberPasswordConfirm:string,
  memberName: string,
  memberNickname: string,
  memberPhone: string,
  birthYear: string,
  birthMonth: string,
  birthDay: string,
  memberGender: string,
  memberHobby: string[],
  memberSmsAgree: boolean,
  memberEmailAgree: boolean
}
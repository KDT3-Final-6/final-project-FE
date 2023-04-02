export interface IUser {
  memberEmail: string,
  memberPassword: string,
  memberPasswordConfirm:string,
  memberName: string,
  memberNickname: string,
  memberPhone: string,
  memberBirthDate: string,
  memberGender: string,
  memberHobby: string[],
  memberSmsAgree: boolean,
  memberEmailAgree: boolean
}
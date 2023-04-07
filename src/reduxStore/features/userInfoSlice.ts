import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserInfo {
  memberEmail: string | null
  memberName: string | null
  memberNickName: string | null
  memberPhone: string | null
  memberBirthDate: string | null
  memberHobby: string | null
  memberSmsAgree: string | null
  memberEmailAgree: string | null
  memberGrade: string | null
  memberImage: string | null
}

const initialState: IUserInfo = {
  memberEmail: null,
  memberName: null,
  memberNickName: null,
  memberPhone: null,
  memberBirthDate: null,
  memberHobby: null,
  memberSmsAgree: null,
  memberEmailAgree: null,
  memberGrade: null,
  memberImage: null,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    SET_USERINFO: (state, action: PayloadAction<IUserInfo>) => {
      // Access Token이 있을 경우(로그인 시), 정보를 저장
      const {
        memberEmail,
        memberName,
        memberNickName,
        memberBirthDate,
        memberSmsAgree,
        memberEmailAgree,
        memberGrade,
        memberImage,
      } = action.payload
      state.memberEmail = memberEmail
      state.memberName = memberName
      state.memberNickName = memberNickName
      state.memberBirthDate = memberBirthDate
      state.memberSmsAgree = memberSmsAgree
      state.memberEmailAgree = memberEmailAgree
      state.memberGrade = memberGrade
      state.memberImage = memberImage
    },
    DELETE_USERINFO: (state) => {
      // Access Token이 없을 경우(로그아웃 시) 정보 삭제
      state.memberEmail = null
      state.memberName = null
      state.memberNickName = null
      state.memberBirthDate = null
      state.memberSmsAgree = null
      state.memberEmailAgree = null
      state.memberGrade = null
      state.memberImage = null
    },
  },
})

export const { SET_USERINFO, DELETE_USERINFO } = userInfoSlice.actions

export default userInfoSlice.reducer

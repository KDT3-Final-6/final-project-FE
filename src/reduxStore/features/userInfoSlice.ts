import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserInfo } from "@src/interfaces/user"

const initialState: IUserInfo = {
  memberEmail: '',
  memberName: '',
  memberNickName: '',
  memberPhone: '',
  memberBirthDate: '',
  memberHobby: [],
  memberSmsAgree: false,
  memberEmailAgree: false,
  memberGrade: '',
  memberImage: '',
  roles: []
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
        memberPhone,
        memberBirthDate,
        memberHobby,
        memberSmsAgree,
        memberEmailAgree,
        memberGrade,
        memberImage,
        roles
      } = action.payload
      state.memberEmail = memberEmail
      state.memberName = memberName
      state.memberNickName = memberNickName
      state.memberPhone = memberPhone
      state.memberBirthDate = memberBirthDate
      state.memberHobby = memberHobby
      state.memberSmsAgree = memberSmsAgree
      state.memberEmailAgree = memberEmailAgree
      state.memberGrade = memberGrade
      state.memberImage = memberImage
      state.roles = roles
    },
    DELETE_USERINFO: (state) => {
      // Access Token이 없을 경우(로그아웃 시) 정보 삭제
      state.memberEmail= '',
      state.memberName= '',
      state.memberNickName= '',
      state.memberPhone= '',
      state.memberBirthDate= '',
      state.memberHobby= [],
      state.memberSmsAgree= false,
      state.memberEmailAgree= false,
      state.memberGrade= '',
      state.memberImage= '',
      state.roles= []
    },
  },
})

export const { SET_USERINFO, DELETE_USERINFO } = userInfoSlice.actions

export default userInfoSlice.reducer

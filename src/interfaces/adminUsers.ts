export interface IAdminUsers {
  content: IAdminUsersContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface IAdminUsersContent {
  memberId: number
  memberName: string
  memberNickname: string | null
  memberEmail: string
  createdDate: string
  totalQnAs: number
  totalReviews: number
  total: number
  roles: string[]
}

export interface IAdminUserDetail {
  memberId: number
  memberEmail: string
  memberName: string
  memberNickname: string
  memberBirthDate: string
  memberGrade: string
  memberDeleteCheck: boolean
  memberHobby: string[]
  memberGender: string
  memberSmsAgree: boolean
  memberEmailAgree: boolean
  memberImage: {
    imageId: number
    imageName: string
    imageOriginalName: string
    imagePath: string
    imageFormat: string
    imageBytes: number
  }
  roles: string[]
  orders: []
  survey: any
  createdDate: string
  modifiedDate: string
}

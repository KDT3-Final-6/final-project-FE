export interface IAdminPost {
  content: IAdminPostContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface IAdminPostContent {
  postId: number
  postTitle: string
  postContent: string
  inquiryType: string
  qnAStatus: string
  answer: string
  replyDate: string
  purchasedProductName: string
  createdDate: string
  memberName: string
}

export interface IAdminPostApi {
  postId: number
  content: string
}

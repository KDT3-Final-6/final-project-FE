export interface IQnA {
  content: IQnAContent[]
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

export interface IQnAContent {
  postId: number
  postTitle: string
  postContent: string
  inquiryType: string
  qnAStatus: string
  answer: string
  purchasedProductName: null | string
  createdDate: string
  replyDate: string
}

export interface IPostQnA {
  title: string
  content: string
  inquiryType: string
  purchasedProductId: null | number
}

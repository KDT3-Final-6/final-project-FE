export interface IReview {
  content: IReviewContent[]
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

export interface IReviewContent {
  memberNickName: string
  postContent: string
  scope: number
}

export const initReview = {
  memberNickName: '',
  postContent: '',
  scope: 0,
}

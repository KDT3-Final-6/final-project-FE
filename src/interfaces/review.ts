export interface IReview {
  content: IReviewContent[]
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

export interface IReviewContent {
  memberNickname: string
  postContent: string
  scope: number
}

export const initReview = {
  memberNickname: '',
  postContent: '',
  scope: 0,
}

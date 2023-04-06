export type IReviewContent = {
  memberNickname: string
  postContent: string
  scope: number
}

export type IReviewContentForMe = {
  postId: number
  productId: number
  purchasedProductName: string
  purchasedProductThumbnail: string
  postContent: string
  scope: number
  modifiedDate: string
}

export type IReviewContentUnion = IReviewContent & IReviewContentForMe

export interface IReview {
  content: IReviewContentUnion[]
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

export const initReview = {
  memberNickname: '',
  postContent: '',
  scope: 0,
}

// export type IReviewContent = {
//   memberNickname: string
//   postContent: string
//   scope: number
// }

// export type IReviewContentForMe = {
//   postId: number
//   productId: number
//   purchasedProductName: string
//   purchasedProductThumbnail: string
//   postContent: string
//   scope: number
//   modifiedDate: string
// }

// export type IReviewContentUnion = IReviewContent & IReviewContentForMe & IReviewValue

export interface IReview {
  content: IReviewValue[]
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

export interface IReviewPATCH {
  postId: number
  content: string
}

export interface IReviewValue {
  memberNickname: string
  modifiedDate: string
  postContent: string
  postId: number
  productId: number
  purchasedProductName: string
  purchasedProductThumbnail: string
  scope: number
}

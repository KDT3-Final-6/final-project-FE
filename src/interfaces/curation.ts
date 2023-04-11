export interface ICuration {
  content: ICurationContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface ICurationContent {
  productId: number
  productName: string
  productThumbnail: string
  productPrice: number
  productStatus: string
  productContent: string
  contentDetail: string
  isWished: boolean
}

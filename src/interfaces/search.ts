export interface ISearch {
  content: ISearchContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface ISearchContent {
  productId: number
  productName: string
  productThumbnail: string
  productPrice: number
  productStatus: string
  productContent: string
  contentDetail: string
  isWished: boolean
}

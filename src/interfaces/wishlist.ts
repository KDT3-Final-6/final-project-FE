export interface IWishlist {
  content: IWishlistContent[]
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

export interface IWishlistContent {
  productId: number
  productName: string
  productPrice: number
  productThumbnail: string
  wishlistId: number
}

export interface IProduct {
  content: {
    productId: number,
    productName: string,
    productThumbnail: string,
    productPrice: number,
    productStatus: string,
    productContent: string,
    contentDetail: string
  }[],
  totalPages: number,
  totalElements: number,
  pageNumber: number,
  size: number
}
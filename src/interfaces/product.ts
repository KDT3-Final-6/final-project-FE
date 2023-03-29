export interface IProduct {
  id: number
  title: string
  image: string
  hashs: string[]
  price: number
  heart: boolean
  categoryNames?: string[]
}

// export interface IProduct {
//   content: {
//     contentDetail: string
//     productContent: object[]
//     productId: number
//     productName: string
//     productPrice: number
//     productStatus: string
//     productThumbnail: string
//   }[],
//   totalPages: number,
//   totalElements: number,
//   pageNumber: number,
//   size:number,  
// }
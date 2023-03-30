export interface IProduct {
  id: number
  title: string
  image: string
  hashs: string[]
  price: number
  heart: boolean
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

export interface ISignup {
  id: string
  pw:string
  name: string
  nickname: string
  phoneNumber: string
  birthDate: string
  hobby: string
}

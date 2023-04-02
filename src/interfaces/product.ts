// export interface IProduct {
//   content: {
//     productId: number,
//     productName: string,
//     productThumbnail: string,
//     productPrice: number,
//     productStatus: string,
//     productContent: string,
//     contentDetail: string
//   }[],
//   totalPages: number,
//   totalElements: number,
//   pageNumber: number,
//   size:number,
// }

export interface IProduct {
  id: number
  title: string
  image: string
  hashs: string[]
  price: number
  heart: boolean
}

export interface IProductDetail {
  contentDetail: string
  periodOptions: string[]
  productCategories: IproductCategories[]
  productContent: string
  productImages: string[]
  productName: string
  productPrice: number
  productStatus: string
  productThumbnail: string
}

interface IproductCategories {
  categoryName: string
  child: null | IproductCategory
}

interface IproductCategory {
  categoryName: string
  child: null | IproductCategory
}

export const initProductDetail = {
  contentDetail: '',
  periodOptions: [''],
  productCategories: [{ categoryName: '', child: null }],
  productContent: '',
  productImages: [''],
  productName: '',
  productPrice: 0,
  productStatus: '',
  productThumbnail: '',
}

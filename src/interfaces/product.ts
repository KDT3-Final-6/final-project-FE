export interface IProduct {
  content: IProductContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface IProductContent {
  productId: number
  productName: string
  productThumbnail: string
  productPrice: number
  isWished: boolean
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
  child: null | IproductCategories
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

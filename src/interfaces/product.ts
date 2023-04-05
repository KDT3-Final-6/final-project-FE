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
  periodOptions: IProductOption[]
  productCategories: IproductCategories[]
  productContent: string
  productImages: string[]
  productName: string
  productPrice: number
  productStatus: string
  productThumbnail: string
}

export interface IproductCategories {
  categoryId: number
  categoryName: string
  children: null | IproductCategories[]
}

export interface IProductOption {
  endAirline: string
  endDate: string
  endDetail: string
  maximumQunatity: number
  minimumQunatity: number
  optionName: string
  period: number
  periodOptionId: number
  periodOptionStatus: string
  soldQuantity: number
  startAirline: string
  startDate: string
  startDetail: string
}

const initProductOption = {
  endAirline: '',
  endDate: '',
  endDetail: '',
  maximumQunatity: 0,
  minimumQunatity: 0,
  optionName: '',
  period: 0,
  periodOptionId: 0,
  periodOptionStatus: '',
  soldQuantity: 0,
  startAirline: '',
  startDate: '',
  startDetail: '',
}

export const initProductDetail = {
  contentDetail: '',
  periodOptions: [initProductOption],
  productCategories: [{ categoryName: '', children: null, categoryId: 0 }],
  productContent: '',
  productImages: [''],
  productName: '',
  productPrice: 0,
  productStatus: '',
  productThumbnail: '',
}

export interface ICurrentProduct {
  productId: number
  productName: string
  productPrice: number
  productThumbnail: string
}

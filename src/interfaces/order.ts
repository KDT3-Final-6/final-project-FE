export interface IOrder {
  id: string
  title: string
  image: string
  payment: boolean
  discription: string
  travelDate: string
  review: boolean
  price: number
}

export interface IOrders {
  content: IOrderContent[]
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

export interface IOrderContent {
  orderDate: string
  orderList: IOrderList[]
  paymentMethod: string
}

export interface IOrderList {
  orderId: number
  productId: number
  purchasedProductId: number
  productName: string
  productThumbnail: string
  productPrice: number
  orderDate: string
  optionName: string
  productProductQuantity: number
  orderStatus: string
  hasReview: boolean
}

export interface IPostOrder {
  productIds: IProductIds[]
  paymentMethod: string
}

export interface IProductIds {
  productId: number
  periodOptionId: number
  quantity: number
}

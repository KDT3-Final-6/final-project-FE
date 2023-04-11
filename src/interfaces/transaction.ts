export interface ITransactionList {
  content: ITransactionContent[]
  totalPages: number,
  totalElements: number,
  pageNumber: number,
  size: number
}

export interface ITransactionContent {
    orderId: number,
    productId: number,
    memberId: number,
    memberName: string,
    memberEmail: string,
    productName: string,
    productThumbnail: string,
    productPrice: number,
    orderDate: string,
    periodOptionName: string,
    purchasedProductQuantity: number,
    purchasedProductId:number,
    orderStatus: string,
    paymentMethod: string,
}

export interface ITransactionApproval {
  memberId: number
}
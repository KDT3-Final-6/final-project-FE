interface ITransaction {
  content: {
    orderDate: string,
    orderList:{
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
      purchasedProductQuantity: 1,
      orderStatus: string
    }[],
    paymentMethod: string
  }[]
  totalPages: number,
  totalElements: number,
  pageNumber: number,
  size: number
}

export default ITransaction
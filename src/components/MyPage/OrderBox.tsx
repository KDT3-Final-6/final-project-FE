import { IOrder, IOrderContent } from '@src/interfaces/order'
import React from 'react'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'
import OrderDetailCard from '@src/components/MyPage/OrderDetailCard'

interface IOrderBox {
  order: IOrderContent
}
const OrderBox = ({ order }: IOrderBox) => {
  const { orderDate, orderList, paymentMethod } = order

  return (
    <OrderBoxStyle>
      <HeaderStyle>
        <span>결제방법 : {paymentMethod}</span>
        <span>{orderDate}</span>
      </HeaderStyle>
      <OrderListStyle>
        {orderList.map((orderProduct) => (
          <OrderDetailCard
            key={orderProduct.productId}
            cardType="barType"
            item={orderProduct}
            priceColor={COLORS.c404040}
          />
        ))}
      </OrderListStyle>
    </OrderBoxStyle>
  )
}

export default OrderBox

const OrderBoxStyle = styled.section`
  /* background: #e2e2e2; */
`

const HeaderStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #878787;
  font-weight: 600;
  font-size: 18px;
  color: #606060;
  line-height: 27px;
  height: 50px;
  padding: 10px;
`

const OrderListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 66px;
`

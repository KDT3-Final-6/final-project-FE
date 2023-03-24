import CartTable from '@src/components/MyPage/CartTable'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Button from '@src/components/common/Button'

type Props = {}

const Cart = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <CartStyle>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>상품 정보</th>
            <th>인원</th>
            <th>예약 금액</th>
            <th>예약 정보</th>
          </tr>
        </thead>
        <tbody>
          <CartTable />
        </tbody>
      </CartStyle>
      <Button buttonType="cartGray" children="선택 상품 삭제" width="140px"></Button>
      <Button buttonType="cartGray" children="품절 상품 삭제"></Button>
      <Button buttonType="cartBlue"></Button>
    </>
  )
}

const CartStyle = styled.table``

export default Cart

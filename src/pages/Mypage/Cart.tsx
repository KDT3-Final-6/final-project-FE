import CartTable from '@src/components/MyPage/CartTable'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Button from '@src/components/common/Button'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { COLORS } from '@src/styles/root'
import { ICartList } from '@src/interfaces/product'
// import { useGetCartListQuery } from '@src/reduxStore/cartSlice'

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>

      <CartStyle>
        <colgroup>
          <col width="5%" />
          <col width="50%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <TableHeaderStyle>
          <tr>
            <th>
              <input type="checkbox" id="all" />
              <label htmlFor="all">
                <MdKeyboardArrowDown />
              </label>
            </th>
            <th>상품 정보</th>
            <th>인원</th>
            <th>예약 금액</th>
            <th>예약 정보</th>
          </tr>
        </TableHeaderStyle>
        <tbody>
          <CartTable index={'1'} />
          <CartTable index={'2'} />
        </tbody>
      </CartStyle>
      <ControlBoxStyle>
        <Button buttonType="cartGray" children="선택 상품 삭제" width="140px"></Button>
        <Button buttonType="cartGray" children="품절 상품 삭제"></Button>
      </ControlBoxStyle>
      <ResultStyle>
        <colgroup>
          <col width="5%" />
          <col width="50%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <td>
              <CheckBoxStyle>
                <MdKeyboardArrowDown />
              </CheckBoxStyle>
            </td>
            <td>총 주문 상품 1개</td>
            <td>1</td>
            <td>4,572,000원</td>
            <td>-</td>
          </tr>
        </tbody>
      </ResultStyle>
      <PaymentBoxStyle>
        <Button buttonType="cartSkyBlue" children="결제하기"></Button>
      </PaymentBoxStyle>
    </>
  )
}

const CartStyle = styled.table`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label {
    display: inline-block;
    color: transparent;
    width: 23px;
    height: 23px;
    border-radius: 4px;
    border: 2px solid #e0e0e0;
    font-size: 24px;
    margin: auto;
  }
  input[type='checkbox']:checked + label {
    display: inline-block;
    width: 23px;
    height: 23px;
    background-color: #0080c6;
    border-radius: 4px;
    color: #fff;
    border: none;
  }
`
const TableHeaderStyle = styled.thead`
  text-align: center;
  height: 39px;
  th {
    vertical-align: middle;
  }
`
const CheckBoxStyle = styled.div`
  width: 23px;
  height: 23px;
  background-color: #0080c6;
  border-radius: 4px;
  color: #fff;
  border: none;
  font-size: 24px;
`

const ResultStyle = styled.table`
  margin-top: 100px;
  height: 40px;
  width: 100%;
  border-top: 2px solid #0080c6;
  border-bottom: 2px solid #0080c6;
  tr {
    td:first-child {
      div {
        margin: auto;
      }
    }
    td:nth-child(2) {
      text-align: left;
      padding-left: 10px;
    }
    td:nth-child(3) {
      color: ${COLORS.primary};
    }
    td:nth-child(4) {
      color: ${COLORS.primary};
    }
  }
  td {
    vertical-align: middle;
    text-align: center;
    font-weight: 700;
  }
`

const ControlBoxStyle = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: flex-end;
`

const PaymentBoxStyle = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin: 20px 0;
`

export default Cart

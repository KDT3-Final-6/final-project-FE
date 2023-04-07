import CartTable from '@src/components/MyPage/CartTable'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Button from '@src/components/common/Button'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { COLORS } from '@src/styles/root'
import { ICartList, ICartResponse } from '@src/interfaces/product'
import { useDeleteCartListMutation, useGetCartListQuery } from '@src/reduxStore/api/cartApiSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setModal } from '@src/reduxStore/modalSlice'
import PATH from '@src/constants/pathConst'

interface IBuyItem {
  name: string
  productThumbnail: string
  productPrice: number
  periodOptionName: string
  productId: number
  periodOptionId: number
  quantity: number
}

const Cart = () => {
  const [checkbox, setCheckbox] = useState<number[]>([])
  const [soldOutList, setSoldOutList] = useState<number[]>([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [checkItem, setCheckItem] = useState<IBuyItem[]>([])
  const { data } = useGetCartListQuery()
  const [deleteCartList] = useDeleteCartListMutation()
  const cartList: ICartList[] = data ? data.content : []
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    /** 품절 상품 확인 */
    const checkSoldout = () => {
      return cartList.filter((item) => item.productStatus !== '판매중').map((item) => item.cartId)
    }
    setSoldOutList(checkSoldout())

    /** 체크 된 상품 수량 및 가격 확인 */
    const checkTotal = () => {
      let totalQuantity = 0
      let totalPrice = 0
      const filterArr = cartList.filter((item) => checkbox.includes(item.cartId))
      const totalQuantityArr = filterArr.map((item) => item.cartQuantity)
      const totalPriceArr = filterArr.map((item) => item.productPrice)
      for (let i = 0; i < totalQuantityArr.length; i += 1) {
        totalQuantity += totalQuantityArr[i]
        totalPrice += totalPriceArr[i] * totalQuantityArr[i]
      }
      return { totalQuantity, totalPrice, filterArr }
    }
    const { totalQuantity, totalPrice, filterArr } = checkTotal()
    setTotalQuantity(totalQuantity)
    setTotalPrice(totalPrice)

    const buyItem = filterArr.map((item) => {
      return {
        name: item.productName,
        productThumbnail: item.productThumbnail,
        productPrice: item.productPrice,
        periodOptionName: item.periodOptionName,
        productId: item.productId,
        periodOptionId: item.periodOptionId,
        quantity: item.cartQuantity,
      }
    })
    setCheckItem(buyItem)
  }, [cartList, checkbox])

  /** 체크 박스 */
  const hadleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckbox((prev) => [...prev, id])
    } else {
      setCheckbox(checkbox.filter((el) => el !== id))
    }
  }

  /** 전체 체크 */
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: number[] = []
      cartList.forEach((el) => idArray.push(el.cartId))
      setCheckbox(idArray)
    } else {
      setCheckbox([])
    }
  }

  /** 품절 상품 삭제 핸들러 */
  const soldOutItemdeleteHandler = async (deleteList: number[]) => {
    dispatch(
      setModal({
        isOpen: true,
        text: '삭제되었습니다.',
        onClickOK: async () => {
          await deleteCartList(deleteList)
          dispatch(setModal({ isOpen: false, route: navigate(PATH.CART) }))
        },
      })
    )
  }

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
              <input
                type="checkbox"
                id="all"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkbox.length === cartList?.length ? true : false}
              />
              <label htmlFor="all">
                <MdKeyboardArrowDown />
              </label>
            </th>
            <th>상품 정보</th>
            <th>인원</th>
            <th>예약 금액</th>
            <th>품절 여부</th>
          </tr>
        </TableHeaderStyle>
        <tbody>
          {cartList && cartList.length > 0 ? (
            cartList?.map((item) => (
              <CartTable
                key={item.cartId}
                item={item}
                hadleSingleCheck={hadleSingleCheck}
                checkbox={checkbox}
              />
            ))
          ) : (
            <tr>
              <td>장바구니에 담긴 상품이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </CartStyle>
      <ControlBoxStyle>
        <Button
          buttonType="cartGray"
          children="선택 상품 삭제"
          width="140px"
          onClick={() => soldOutItemdeleteHandler(checkbox)}
        ></Button>
        <Button
          buttonType="cartGray"
          children="품절 상품 삭제"
          onClick={() => soldOutItemdeleteHandler(soldOutList)}
        ></Button>
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
            <td>총 주문 상품 {checkbox.length}개</td>
            <td>{totalQuantity}</td>
            <td>{totalPrice.toLocaleString()}원</td>
            <td>-</td>
          </tr>
        </tbody>
      </ResultStyle>
      <PaymentBoxStyle>
        <Button
          buttonType="cartSkyBlue"
          children="결제하기"
          onClick={() => navigate(PATH.BUY, { state: checkItem })}
        ></Button>
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

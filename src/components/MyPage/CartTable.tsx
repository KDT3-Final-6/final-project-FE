import React from 'react'
import Image from '../common/Image'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import useCounter from '@src/hooks/useCounter'
import { ICartList } from '@src/interfaces/product'
import { useEditCartListMutation } from '@src/reduxStore/api/cartApiSlice'
import { useNavigate } from 'react-router-dom'

interface Props {
  item: ICartList
  hadleSingleCheck: (checked: boolean, id: number) => void
  checkbox: number[]
}

const CartTable = ({ item, hadleSingleCheck, checkbox }: Props) => {
  let { quantity, plusQuantity, minusQuantity } = useCounter(item?.cartQuantity)
  const [editCartList] = useEditCartListMutation()

  const editCartHandler = async (type: string) => {
    await editCartList({
      cartId: item?.cartId,
      data: {
        periodOptionId: item?.periodOptionId,
        quantity: type === 'increase' ? quantity + 1 : quantity - 1,
      },
    })
  }

  const navigate = useNavigate()

  return (
    <TrStyle>
      <td>
        <input
          type="checkbox"
          id={String(item?.cartId)}
          onChange={(e) => hadleSingleCheck(e.target.checked, item?.cartId)}
          checked={checkbox.includes(item.cartId) ? true : false}
        />
        <label htmlFor={String(item?.cartId)}>
          <MdKeyboardArrowDown />
        </label>
      </td>
      <td>
        <DescStyle>
          <Image
            src={item?.productThumbnail}
            alt="썸네일"
            onClick={() => navigate(`/product/${item?.productId}`)}
          />
          <DescInnerStyle>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/product/${item?.productId}`)}
            >
              {item?.productName}
            </span>
            <span>{item?.productContent}</span>
            <span>{item?.periodOptionName}</span>
          </DescInnerStyle>
        </DescStyle>
      </td>
      <OptionBoxStyle>
        <div>
          <OptionButtonStyle
            onClick={() => {
              plusQuantity(), editCartHandler('increase')
            }}
          >
            +
          </OptionButtonStyle>
          <span>{quantity}</span>
          <OptionButtonStyle
            onClick={() => {
              minusQuantity(), editCartHandler('decrease')
            }}
          >
            -
          </OptionButtonStyle>
        </div>
      </OptionBoxStyle>
      <td
        style={{
          verticalAlign: 'middle',
          textAlign: 'center',
          color: COLORS.primary,
          fontWeight: 700,
        }}
      >
        {(quantity * item?.productPrice).toLocaleString()}원
      </td>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{item?.productStatus}</td>
    </TrStyle>
  )
}

const OptionBoxStyle = styled.td`
  vertical-align: middle;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`

const OptionButtonStyle = styled.div`
  width: 23px;
  height: 23px;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #d9d9d9;
  cursor: pointer;
`

const DescStyle = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
  img {
    height: 129px;
  }
`

const DescInnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  span:first-child {
    color: ${COLORS.primary};
    font-weight: 700;
    font-size: 18px;
  }
  span:last-child {
    color: ${COLORS.primary};
    font-weight: 700;
  }
`

const TrStyle = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  td {
    border: 1px solid #e0e0e0;
  }
  td:first-child {
    border-left: none;
    margin-top: 10px;
    text-align: center;
    vertical-align: top;
    padding-top: 10px;
  }
  td:last-child {
    border-right: none;
  }
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

export default CartTable

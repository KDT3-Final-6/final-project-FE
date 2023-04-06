import React from 'react'
import Image from '../common/Image'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import useCounter from '@src/hooks/useCounter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'

interface Props {
  index: string
}

const CartTable = ({ index }: Props) => {
  const { quantity, plusQuantity, minusQuantity } = useCounter()
  const cartList = useSelector((state: RootState) => state.cart)
  console.log(cartList)
  return (
    <TrStyle>
      <td>
        {/* 나중에 id 값 상품 번호로 변경 */}
        <input type="checkbox" id={index} />
        <label htmlFor={index}>
          <MdKeyboardArrowDown />
        </label>
      </td>
      <td>
        <DescStyle>
          <Image src="/images/cart_image (1).jpg" alt="썸네일" />
          <DescInnerStyle>
            <span>[실속 골프 패키지] 사이판 3박4일 골프여행</span>
            <span>3일은 골프를 하루는 호캉스를 즐길 수 있는 3월 특가 실속 골프 패키지</span>
            <span>출발: 2023.04.02(일) / 도착: 2023.04.05(수)</span>
          </DescInnerStyle>
        </DescStyle>
      </td>
      <OptionBoxStyle>
        <div>
          <OptionButtonStyle onClick={plusQuantity}>+</OptionButtonStyle>
          <span>{quantity}</span>
          <OptionButtonStyle onClick={minusQuantity}>-</OptionButtonStyle>
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
        4,572,000원
      </td>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>-</td>
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

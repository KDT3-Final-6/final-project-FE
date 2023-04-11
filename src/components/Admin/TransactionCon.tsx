import hideName from '@src/utils/hideName'
import React from 'react'
import Button from '../common/Button'
import styled from 'styled-components'
import { COLORS, FONTWEGHT } from '@src/styles/root'
import { ITransactionContent } from '@src/interfaces/transaction'

interface ITransactionCon {
  transaction: ITransactionContent
}

const TransactionCon = ({ transaction }: ITransactionCon) => {
  const {
    orderId,
    productId,
    memberId,
    memberName,
    memberEmail,
    productName,
    productThumbnail,
    productPrice,
    orderDate,
    periodOptionName,
    purchasedProductQuantity,
    purchasedProductId,
    orderStatus,
    paymentMethod,
  } = transaction

  const handleApproval = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement
    const text = target.innerText

    // text === '승인' ? await getAdminTransactionsApproval(orderId)
  }

  return (
    <tr>
      <td>
        <OrderInfoStyle>
          <span className="textBold">{`주문번호: ${productId}`}</span>
          <span className="textGrayColor">{`${orderDate.slice(0, 10)} ${orderDate.slice(
            11,
            16
          )}`}</span>
          <span>{hideName(memberName)}</span>
        </OrderInfoStyle>
      </td>
      <td>
        <ProductStyle>
          <img src={productThumbnail} alt="" />
          <div>
            <span className="textBold">{productName}</span>
            <span className="textGrayColor">{periodOptionName}</span>
          </div>
        </ProductStyle>
      </td>
      <td className="textCenter textBold">{`${productPrice.toLocaleString()} 원`}</td>
      <td className="textCenter textBold">{purchasedProductQuantity}</td>
      <StatusTdStyle className="textCenter">{orderStatus}</StatusTdStyle>
      <td>
        <div>
          <PaymentStyle className="textBold">
            <span>총 결제금액</span>
            <span>{`${(productPrice * purchasedProductQuantity).toLocaleString()} 원`}</span>
          </PaymentStyle>
          <PaymentStyle className="textGrayColor">
            <span>결제방법</span>
            <span>{paymentMethod}</span>
          </PaymentStyle>
        </div>
      </td>
      <td className="textCenter">
        <ButtonGroupStyle>
          <Button buttonType="transparent" onClick={handleApproval}>
            승인
          </Button>
          <span>|</span>
          <Button buttonType="transparent" onClick={handleApproval}>
            취소
          </Button>
        </ButtonGroupStyle>
      </td>
    </tr>
  )
}

export default TransactionCon

const OrderInfoStyle = styled.div`
  line-height: 1.3;
`

const ProductStyle = styled.div`
  position: relative;
  height: 68px;

  img {
    width: 68px;
    margin-right: 10px;
    position: absolute;
  }

  > div {
    height: 100%;
    margin-left: 78px;

    span {
      line-height: 1.2;
      &:first-of-type {
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
`

const StatusTdStyle = styled.td`
  color: ${COLORS.c3ba1ff};
  font-weight: ${FONTWEGHT.fw700};
`

const PaymentStyle = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    margin-bottom: 10px;
  }
`

const ButtonGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  button {
    cursor: pointer;
    color: #a8a8a8;

    :hover {
      color: ${COLORS.black};
    }

    &.active {
      color: ${COLORS.primary};
    }
  }
`

import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Button from '@components/common/Button'
import ProductCard, { ImgAreaStyle, PriceStyle, TxtAreaStyle } from '@components/common/ProductCard'
import Title from '@components/common/Title'
import { FiShare2 } from 'react-icons/fi'
import PATH from '@src/constants/pathConst'
import { useNavigate } from 'react-router-dom'
import { IOrder, IOrderList } from '@src/interfaces/order'
import { color } from 'framer-motion'
import Image from '@components/common/Image'

interface IBarTypeItem {
  item: IOrderList
  cardType: string
  height?: string
  priceColor?: string
}

function OrderDetailCard({ item, cardType, height = '220px', priceColor }: IBarTypeItem) {
  const navigate = useNavigate()

  const {
    hasReview,
    optionName,
    orderDate,
    orderId,
    orderStatus,
    productId,
    productName,
    productPrice,
    productThumbnail,
    purchasedProductId,
    purchasedProductQuantity,
  } = item

  return (
    <ProductCard key={productId} cardType={cardType} height={height}>
      <ImgAreaStyle>
        <Image src={productThumbnail} alt={productName} />
      </ImgAreaStyle>
      <TxtAreaStyle isBarType={true}>
        <CompleteStyle orderStatus={orderStatus}>{orderStatus}</CompleteStyle>
        <Title
          titleType="h3"
          title={productName}
          fontWeight={FONTWEGHT.fw600}
          fontSize={FONTSIZE.fz22}
          margin="0 0 9px"
          color={COLORS.c404040}
        />
        <DatePriceStyle>
          <p>{optionName}</p>
          <PriceStyle fontSize={FONTSIZE.fz30} priceColor={priceColor}>
            <span>결제금액</span>
            <span>:</span>
            <span>{`${productPrice.toLocaleString()}원`}</span>
          </PriceStyle>
        </DatePriceStyle>
        <ButtonGropStyle right="0">
          <Button buttonType="borderGray" height="45px">
            <FiShare2 />
            <span>공유하기</span>
          </Button>
          <Button
            buttonType="borderGray"
            height="45px"
            onClick={() => navigate(PATH.PRODUCT_DETAIL)}
          >
            자세히 보기
          </Button>
          <Button buttonType={hasReview ? 'disable' : 'borderGray'} height="45px">
            {hasReview ? '리뷰작성완료' : '리뷰작성하기'}
          </Button>
        </ButtonGropStyle>
      </TxtAreaStyle>
    </ProductCard>
  )
}

export default OrderDetailCard

const CompleteStyle = styled.p<{
  orderStatus?: string
}>`
  color: ${({ orderStatus }) => (orderStatus === '결제완료' ? COLORS.primary : COLORS.c909090)};
  font-weight: ${FONTWEGHT.fw700};
  font-size: ${FONTSIZE.fz20};
  line-height: 27px;
  padding: 19px 0 10px;
`

const DecStyle = styled.p<{
  fontSize: string
  color: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`

const DatePriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.primary};
  margin-top: 15px;

  ${PriceStyle} {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    span {
      display: flex;
      align-items: center;
      font-size: ${FONTSIZE.fz18};
      font-weight: ${FONTWEGHT.fw400};
      :not(:last-child) {
        align-self: end;
      }
      :last-child {
        font-size: ${FONTSIZE.fz28};
        font-weight: ${FONTWEGHT.fw700};
        line-height: 24px;
      }
    }
  }
`

const ButtonGropStyle = styled.div<{
  bottom?: string
  right?: string
}>`
  display: flex;
  gap: 8px;
  justify-content: end;
  margin-top: 15px;
  position: absolute;
  padding-top: 10px;
  right: ${({ right }) => right};
  button {
    :first-child {
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        font-size: ${FONTSIZE.fz20};
        margin: 0;
      }
    }
    :hover {
      box-shadow: ${COLORS.boxShowdow};
    }
  }
`

import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ProductCard, { ImgAreaStyle, PriceStyle, TxtAreaStyle } from './ProductCard'
import Title from './Title'
import { FiShare2 } from 'react-icons/fi'
import PATH from '@src/constants/pathConst'
import { useNavigate } from 'react-router-dom'
import { IOrder } from '@src/interfaces/order'
import { color } from 'framer-motion'

interface IBarTypeItem {
  item: IOrder
  cardType: string
  height?: string
  priceColor?: string
}

function BarTypeItem({ item, cardType, height = '220px', priceColor }: IBarTypeItem) {
  const navigate = useNavigate()

  return (
    <ProductCard key={item.id} cardType={cardType} height={height}>
      <ImgAreaStyle>
        <img src={item.image} alt={item.title} />
      </ImgAreaStyle>
      <TxtAreaStyle isBarType={true}>
        <CompleteStyle isPay={item.payment}>{item.payment ? '결제완료' : '여행완료'}</CompleteStyle>
        <Title
          titleType="h3"
          title={item.title}
          fontSize={FONTSIZE.fz22}
          margin="0 0 9px"
          color={COLORS.c404040}
        />
        <DecStyle fontSize={FONTSIZE.fz18} color={COLORS.c404040}>
          {item.discription}
        </DecStyle>
        <DatePriceStyle>
          <p>{item.travelDate}</p>
          <PriceStyle fontSize={FONTSIZE.fz30} priceColor={priceColor}>
            <span>결제금액 :</span>
            {`${item.price.toLocaleString()}원`}
          </PriceStyle>
        </DatePriceStyle>
        <Buttons bottom="0" right="0">
          <Button buttonType="borderGray">
            <FiShare2 />
            공유하기
          </Button>
          <Button buttonType="borderGray" onClick={() => navigate(PATH.PRODUCT_DETAIL)}>
            자세히 보기
          </Button>
          <Button buttonType={item.review ? 'disable' : 'borderGray'}>
            {item.review ? '리뷰작성완료' : '리뷰작성하기'}
          </Button>
        </Buttons>
      </TxtAreaStyle>
    </ProductCard>
  )
}

export default BarTypeItem

const CompleteStyle = styled.p<{
  isPay?: boolean
}>`
  color: ${({ isPay }) => (isPay ? COLORS.primary : COLORS.c909090)};
  font-weight: ${FONTWEGHT.fw700};
  font-size: ${FONTSIZE.fz20};
  margin: 19px 0 9px;
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
  margin-top: 10px;

  ${PriceStyle} {
    display: flex;
    align-items: center;

    span {
      font-weight: ${FONTWEGHT.fw400};
      font-size: ${FONTSIZE.fz20};
      margin-right: 10px;
    }
  }
`

const Buttons = styled.div<{
  bottom?: string
  right?: string
}>`
  display: flex;
  gap: 8px;
  justify-content: end;
  margin-top: 10px;
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  button {
    display: flex;
    align-items: center;
    svg {
      font-size: ${FONTSIZE.fz20};
      margin-right: 10px;
    }
  }
`

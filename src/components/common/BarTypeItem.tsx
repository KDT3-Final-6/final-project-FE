import COLORS from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ProductCard, { ImgAreaStyle, PriceStyle, TxtAreaStyle } from './ProductCard'
import Title from './Title'
import { FiShare2 } from 'react-icons/fi'
import PATH from '@src/constants/pathConst'
import { useNavigate } from 'react-router-dom'
import { IOrder } from '@src/interfaces/order'

interface IBarTypeItem {
  item: IOrder
  cardType: string
  height?: string
}

function BarTypeItem({ item, cardType, height = '220px' }: IBarTypeItem) {
  const navigate = useNavigate()

  return (
    <ProductCard key={item.id} cardType={cardType} height={height}>
      <ImgAreaStyle>
        <img src={item.image} alt={item.title} />
      </ImgAreaStyle>
      <TxtAreaStyle isBarType={true}>
        <CompleteStyle isPay={item.payment}>{item.payment ? '결제완료' : '여행완료'}</CompleteStyle>
        <Title titleType="h3" title={item.title} fontSize="22px" marginBotton="9px" />
        <DecStyle fontSize="18px" color={COLORS.darkGrey}>
          {item.discription}
        </DecStyle>
        <DatePriceStyle>
          <p>{item.travelDate}</p>
          <PriceStyle fontSize="30px">
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
  color: ${(props) => (props.isPay ? COLORS.primary : COLORS.disableTxtGrey)};
  font-weight: bold;
  font-size: 20px;
  margin: 19px 0 9px;
`

const DecStyle = styled.p<{
  fontSize: string
  color: string
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`

const DatePriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.primary};
  margin-top: 10px;

  ${PriceStyle} {
    color: ${COLORS.darkGrey};
    display: flex;
    align-items: center;

    span {
      font-weight: normal;
      font-size: 20px;
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
      font-size: 20px;
      margin-right: 10px;
    }
  }
`

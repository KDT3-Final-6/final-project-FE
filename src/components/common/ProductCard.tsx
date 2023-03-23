import PATH from '@src/constants/pathConst'
import COLORS from '@src/styles/root'
import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Title from '@src/components/common/Title'

type IProduct = {
  cardType?: string
  width?: string
  height?: string
  maxHeight?: string
  minHeight?: string
  children?: React.ReactNode
}

const ProductCard = ({
  cardType = 'abc',
  width = '',
  height = '',
  maxHeight = '',
  minHeight = '',
  children,
}: IProduct) => {
  return (
    <CardStyle
      cardType={cardType}
      width={width}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
    >
      {cardType === 'productCard' && (
        <>
          <Link to={PATH.PRODUCT_DETAIL} target="_blank">
            {children}
          </Link>
        </>
      )}
    </CardStyle>
  )
}

export default ProductCard

const CardStyle = styled.li<{
  cardType: string
  width: string
  height: string
  maxHeight: string
  minHeight: string
}>`
  ${({ cardType }) => handleCardType(cardType)}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
`

const handleCardType = (cardType: string) => {
  switch (cardType) {
    case 'productCard':
      return `
        border-radius:12px;
        overflow:hidden;

        img {
          width:100%;
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
        }
      `
    default:
      return `
        width:305px;
        height:430px;
        background-color: gray;
      `
  }
}

const ImgAreaStyle = styled.div`
  position: relative;
  height: 50%;
  overflow: hidden;
`

const TxtAreaStyle = styled.div`
  padding: 20px;
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 0 0 12px 12px;
`

const CategoryStyle = styled.span`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-size: 13px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  margin-bottom: 14px;
`

const HashStyle = styled.div<{
  fontSize: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${COLORS.hashGrey};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const PriceStyle = styled.p<{
  fontSize: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  margin: 15px 0;
`

export { ImgAreaStyle, TxtAreaStyle, CategoryStyle, HashStyle, PriceStyle }

import PATH from '@src/constants/pathConst'
import COLORS from '@src/styles/root'
import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type IProduct = {
  cardType: string
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
      {children}
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

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const handleCardType = (cardType: string) => {
  switch (cardType) {
    case 'cardType':
      return `
        border-radius:12px;
        overflow:hidden;

        ${ImgAreaStyle} {
          height:50%;
        }


      `
    case 'barType':
      return `
        width:100%;
        padding:10px;
        border-radius:12px;
        box-shadow:0px 0px 5px rgba(0,0,0,0.2);
        overflow:hidden;
        display:flex;
        gap:15px;

        ${ImgAreaStyle} {
          width:300px;
          border-radius:5px;
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
  overflow: hidden;
`

const TxtAreaStyle = styled.div<{
  isCardType?: boolean
  isBarType?: boolean
}>`
  width: ${(props) => props.isBarType && 'calc(100% - 300px)'};
  padding: ${(props) => props.isCardType && '20px'};
  border: ${(props) => props.isCardType && `1px solid ${COLORS.lightGrey}`};
  border-radius: 0 0 12px 12px;
  justify-content: ${(props) => props.isBarType && 'space-between'};
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
  color: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${(props) => props.color};
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

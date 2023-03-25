import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

type IProduct = {
  cardType: string
  width?: string
  height?: string
  maxHeight?: string
  children?: React.ReactNode
  bgImage?: string
  imgWidth?: string
  imgHeight?: string
}

const ProductCard = ({
  cardType = 'cardType',
  width = '',
  height = '',
  maxHeight = '',
  children,
  bgImage = '',
  imgWidth = '',
  imgHeight = '',
}: IProduct) => {
  return (
    <CardStyle
      cardType={cardType}
      width={width}
      height={height}
      maxHeight={maxHeight}
      bgImage={bgImage}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
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
  bgImage: string
  imgWidth: string
  imgHeight: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${({ cardType, bgImage }) => handleCardType(cardType, bgImage)}
`

const handleCardType = (cardType: string, bgImage: string) => {
  switch (cardType) {
    case 'cardType':
      return `
        border-radius:12px;
        overflow:hidden;
        position:relative;

        a {
          height:100%;
        }

        ${ImgAreaStyle} {
          min-height:300px;
        }
      `
    case 'ImageCardType':
      return `
        border-radius:12px;
        overflow:hidden;
        background:url(${bgImage}) no-repeat center;
        background-size:cover;
        display:flex;
        flex-direction:column;
        position:relative;
        color:${COLORS.white};

        a {
          padding:14px 18px 130px;
          width:100%;
          height:100%;
        }
        ${TxtAreaStyle} {
          border:0;
          padding:0;
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          padding: 0 18px 130px;
        }
        ${CategoryStyle} {
          padding:4px 9px;
          border-radius:6px;
          margin-bottom:0;
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

          img {
            width:100%;
          }
        }

        ${PriceStyle} {
          position:inherit;
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

const CardHeadArea = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`

const ImgAreaStyle = styled.div`
  position: relative;
  overflow: hidden;
`

const TxtAreaStyle = styled.div<{
  isCardType?: boolean
  isBarType?: boolean
}>`
  width: ${({ isBarType }) => isBarType && 'calc(100% - 300px)'};
  height: ${({ isCardType }) => isCardType && 'calc(100% - 300px)'};
  padding: ${({ isCardType }) => isCardType && '20px'};
  border: ${({ isCardType }) => isCardType && `1px solid ${COLORS.cededed}`};
  border-radius: 0 0 12px 12px;
  justify-content: ${({ isBarType }) => isBarType && 'space-between'};
  position: relative;
`

const CategoryStyle = styled.span<{
  categoryName: string
}>`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-size: ${FONTSIZE.fz13};
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  margin-bottom: 14px;
  background-color: ${({ categoryName }) =>
    categoryName === '여자끼리' ? COLORS.cbe4b4b : '익사이팅' && COLORS.c74fff7};
  color: ${({ categoryName }) =>
    categoryName === '여자끼리' ? COLORS.white : '익사이팅' && COLORS.c2e9892};
`

const HashsStyle = styled.div<{
  marginBottom?: string
  color?: string
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${({ color }) => color};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const HashStyle = styled.span<{
  fontSize?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
`

const PriceStyle = styled.p<{
  fontSize: string
  textAlign?: string
  priceTop?: string
  priceLeft?: string
  priceRight?: string
  priceBottom?: string
  priceColor?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${FONTWEGHT.fw700};
  text-align: ${({ textAlign }) => textAlign};
  white-space: nowrap;
  position: absolute;
  top: ${({ priceTop }) => priceTop};
  bottom: ${({ priceBottom }) => priceBottom};
  left: ${({ priceLeft }) => priceLeft};
  right: ${({ priceRight }) => priceRight};
  color: ${({ priceColor }) => priceColor};
`

export {
  CardHeadArea,
  ImgAreaStyle,
  TxtAreaStyle,
  CategoryStyle,
  HashsStyle,
  HashStyle,
  PriceStyle,
}

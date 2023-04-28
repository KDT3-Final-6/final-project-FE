import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

type IProduct = {
  cardType: string
  width?: string
  height?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
  children?: React.ReactNode
  bgImage?: string
  imgWidth?: string
  imgHeight?: string
  boxShadow?: string
}

const ProductCard = ({
  cardType = 'cardType',
  width = '',
  height = '',
  maxHeight = '',
  minHeight = '300px',
  minWidth = '',
  children,
  bgImage = '',
  imgWidth = '',
  imgHeight = '',
  boxShadow = '',
}: IProduct) => {
  return (
    <CardStyle
      cardType={cardType}
      width={width}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
      minWidth={minWidth}
      bgImage={bgImage}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      boxShadow={boxShadow}
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
  minWidth: string
  bgImage: string
  imgWidth: string
  imgHeight: string
  boxShadow: string
}>`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  box-shadow: ${({ boxShadow }) => boxShadow};

  img {
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${({ cardType, bgImage, minHeight }) => handleCardType(cardType, bgImage, minHeight)}
`

const handleCardType = (cardType: string, bgImage: string, minHeight: string) => {
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
          min-height:${minHeight};
        }
      `
    case 'imageCardType':
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
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          padding: 0 18px 130px;
          background-color:transparent;
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
          background-color: ${COLORS.c1b1b1b};

          img {
            width: 100%;
          }
        }

        ${TxtAreaStyle} {
          height:auto;
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

const ImgAreaStyle = styled.div`
  position: relative;
  overflow: hidden;
`

const TxtAreaStyle = styled.div<{
  isCardType?: boolean
  isBarType?: boolean
  minHeight?: string
}>`
  width: ${({ isBarType }) => isBarType && 'calc(100% - 300px)'};
  height: ${({ minHeight }) => (minHeight ? `calc(100% - ${minHeight})` : 'calc(100% - 300px)')};
  padding: ${({ isCardType }) => isCardType && '20px'};
  border: ${({ isCardType }) => isCardType && `1px solid ${COLORS.cededed}`};
  border-radius: 0 0 12px 12px;
  justify-content: ${({ isBarType }) => isBarType && 'space-between'};
  position: relative;
  background-color: ${COLORS.white};
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

export { ImgAreaStyle, TxtAreaStyle, HashsStyle, HashStyle, PriceStyle }

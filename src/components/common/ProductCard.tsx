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
          <Link to={PATH.PRODUCT_DETAIL}>
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <CategoryStyle>와인러버</CategoryStyle>
              <Title
                titleType="h3"
                title="어른스러움의 프랑스 보르도 와인로드 10일"
                fontWeight="normal"
                fontSize="24px"
                marginBotton="5px"
              />
              <HashStyle>
                #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
              </HashStyle>
              <PriceStyle>{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
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

const HashStyle = styled.div`
  font-size: 17px;
  color: ${COLORS.hashGrey};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const PriceStyle = styled.p`
  font-size: 29px;
  font-weight: 700;
  margin: 15px 0;
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

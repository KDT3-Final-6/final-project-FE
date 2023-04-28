import PATH from '@src/constants/pathConst'
import { ICurrentProduct, IProductContent } from '@src/interfaces/product'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeartButton from '@components/common/HeartButton'
import Image from '@components/common/Image'
import ProductCard from '@components/common/ProductCard'
import Title from '@components/common/Title'
import { useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'
import styled from 'styled-components'

interface ICardTypeItem {
  item: IProductContent | ICurrentProduct
  cardType: string
  bgImage?: string
  imgWidth?: string
  imgHeight?: string
  width?: string
  height?: string
  priceTop?: string
  priceLeft?: string
  priceRight?: string
  priceBottom?: string
  priceColor?: string
  minHeight?: string
  isHeart?: boolean
  heartClick?: () => void
}

const MProductCard = ({ item, cardType, isHeart, heartClick }: ICardTypeItem) => {
  const [heart, setHeart] = useState(false)
  const { pathname } = useLocation()
  const userInfo = useSelector((state: RootState) => state.userInfo)
  useEffect(() => {
    isHeart && setHeart((prev) => !prev)
    if (userInfo.memberName && pathname.includes('mypage')) setHeart((prev) => !prev)
  }, [])

  return (
    <ProductCardStyle>
      <HeartButton
        productId={item?.productId}
        top="14px"
        right="14px"
        isHeart={heart}
        setHeart={setHeart}
        onClick={heartClick}
      />
      <Link to={`/product/${item?.productId}`}>
        <ImgStyle>
          <Image bgImage={item?.productThumbnail} height="100%" />{' '}
        </ImgStyle>
        <ProductTextStyle>
          <Title
            titleType="h3"
            title={item?.productName}
            fontWeight={FONTWEGHT.fw400}
            fontSize="22px"
            margin="15px 17px 0"
            color={cardType === 'imageCardType' ? COLORS.white : COLORS.c1b1b1b}
          />
          <PriceTextStyle>{`${item?.productPrice?.toLocaleString()}원`}</PriceTextStyle>
        </ProductTextStyle>
      </Link>
    </ProductCardStyle>
  )
}

export default MProductCard

const ProductCardStyle = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`

const ImgStyle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 197px;
`

const ProductTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PriceTextStyle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  padding: 61px 17px 0;
`

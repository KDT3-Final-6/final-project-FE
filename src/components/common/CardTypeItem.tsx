import PATH from '@src/constants/pathConst'
import { ICurrentProduct, IProductContent } from '@src/interfaces/product'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeartButton from './HeartButton'
import Image from './Image'
import ProductCard, { ImgAreaStyle, PriceStyle, TxtAreaStyle } from './ProductCard'
import Title from './Title'
import { useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'

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

const CardTypeItem = ({
  item,
  cardType,
  bgImage,
  imgWidth,
  imgHeight,
  width = '',
  height = '500px',
  priceTop,
  priceLeft,
  priceRight,
  priceBottom,
  priceColor,
  minHeight,
  isHeart,
  heartClick,
}: ICardTypeItem) => {
  const [heart, setHeart] = useState(false)
  const { pathname } = useLocation()
  const userInfo = useSelector((state: RootState) => state.userInfo)
  useEffect(() => {
    isHeart && setHeart((prev) => !prev)
    if (userInfo && pathname.includes('mypage')) setHeart((prev) => !prev)
  }, [])

  return (
    <ProductCard
      key={item?.productId}
      cardType={cardType}
      bgImage={bgImage}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      width={width}
      height={height}
      minHeight={minHeight}
    >
      <HeartButton
        productId={item?.productId}
        top="14px"
        right="18px"
        isHeart={heart}
        setHeart={setHeart}
        onClick={heartClick}
      />
      <Link to={`/product/${item?.productId}`} target="_blank">
        {cardType === 'cardType' && (
          <ImgAreaStyle>
            <Image src={item?.productThumbnail} alt={item?.productName} />
          </ImgAreaStyle>
        )}
        <TxtAreaStyle isCardType={true} minHeight={minHeight}>
          <Title
            titleType="h3"
            title={item?.productName}
            fontWeight={FONTWEGHT.fw600}
            fontSize={FONTSIZE.fz22}
            margin="0 0 5px"
            color={cardType === 'imageCardType' ? COLORS.white : COLORS.c1b1b1b}
          />
          <PriceStyle
            fontSize={FONTSIZE.fz30}
            priceTop={priceTop}
            priceLeft={priceLeft}
            priceRight={priceRight}
            priceBottom={priceBottom}
            priceColor={priceColor}
          >{`${item?.productPrice?.toLocaleString()}원`}</PriceStyle>
        </TxtAreaStyle>
      </Link>
    </ProductCard>
  )
}

export default CardTypeItem

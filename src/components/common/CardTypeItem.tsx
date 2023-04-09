import PATH from '@src/constants/pathConst'
import { ICurrentProduct, IProductContent } from '@src/interfaces/product'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import HeartButton from './HeartButton'
import Image from './Image'
import ProductCard, {
  HashsStyle,
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from './ProductCard'
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
}: ICardTypeItem) => {
  const [heart, setHeart] = useState(false)

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

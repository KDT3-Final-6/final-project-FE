import PATH from '@src/constants/pathConst'
import { IProduct } from '@src/interfaces/product'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeartButton from './HeartButton'
import ProductCard, {
  CardHeadAreaStyle,
  CategoryStyle,
  HashsStyle,
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from './ProductCard'
import Title from './Title'

interface ICardTypeItem {
  item: IProduct
  cardType: string
  bgImage?: string
  imgWidth?: string
  imgHeight?: string
  height?: string
  priceTop?: string
  priceLeft?: string
  priceRight?: string
  priceBottom?: string
  priceColor?: string
}

const CardTypeItem = ({
  item,
  cardType,
  bgImage,
  imgWidth,
  imgHeight,
  height = '500px',
  priceTop,
  priceLeft,
  priceRight,
  priceBottom,
  priceColor,
}: ICardTypeItem) => {
  const [heart, setHeart] = useState(item.heart)

  return (
    <ProductCard
      key={item.id}
      cardType={cardType}
      bgImage={bgImage}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      height={height}
    >
      <HeartButton
        productId={item.id}
        top="14px"
        right="18px"
        isHeart={heart}
        setHeart={setHeart}
      />
      <Link to={PATH.PRODUCT_DETAIL} target="_blank">
        <CardHeadAreaStyle>
          {item.categoryNames?.map((categoryName) => (
            <CategoryStyle key={categoryName} categoryName={categoryName}>
              {categoryName}
            </CategoryStyle>
          ))}
        </CardHeadAreaStyle>
        {cardType === 'cardType' && (
          <ImgAreaStyle>
            <img src={item.image} alt={item.title} />
          </ImgAreaStyle>
        )}
        <TxtAreaStyle isCardType={true}>
          <Title
            titleType="h3"
            title={item.title}
            fontWeight={FONTWEGHT.fw600}
            fontSize={FONTSIZE.fz22}
            marginBottom="5px"
            color={cardType === 'imageCardType' ? COLORS.white : COLORS.c1b1b1b}
          />
          <HashsStyle color={cardType === 'imageCardType' ? COLORS.cededed : COLORS.ca6a6a6}>
            {item.hashs.map((hash) => (
              <HashStyle key={hash} fontSize={FONTSIZE.fz19}>
                {`#${hash}`}
              </HashStyle>
            ))}
          </HashsStyle>
          <PriceStyle
            fontSize={FONTSIZE.fz30}
            priceTop={priceTop}
            priceLeft={priceLeft}
            priceRight={priceRight}
            priceBottom={priceBottom}
            priceColor={priceColor}
          >{`${item.price.toLocaleString()}원`}</PriceStyle>
        </TxtAreaStyle>
      </Link>
    </ProductCard>
  )
}

export default CardTypeItem

import PATH from '@src/constants/pathConst'
import { IProduct } from '@src/interfaces/product'
import COLORS from '@src/styles/root'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeartButton from './HeartButton'
import ProductCard, {
  CardHeadArea,
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
  minHeight?: string
}

const CardTypeItem = ({
  item,
  cardType,
  bgImage,
  imgWidth,
  imgHeight,
  minHeight = '500px',
}: ICardTypeItem) => {
  const [heart, setHeart] = useState(item.heart)

  return (
    <ProductCard
      key={item.id}
      cardType={cardType}
      bgImage={bgImage}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      minHeight={minHeight}
    >
      <HeartButton
        productId={item.id}
        top="14px"
        right="18px"
        isHeart={heart}
        setHeart={setHeart}
      />
      <Link to={PATH.PRODUCT_DETAIL} target="_blank">
        <CardHeadArea>
          {item.categoryNames?.map((categoryName) => (
            <CategoryStyle key={categoryName} categoryName={categoryName}>
              {categoryName}
            </CategoryStyle>
          ))}
        </CardHeadArea>
        {cardType === 'cardType' && (
          <ImgAreaStyle>
            <img src={item.image} alt={item.title} />
          </ImgAreaStyle>
        )}
        <TxtAreaStyle isCardType={true}>
          <Title
            titleType="h3"
            title={item.title}
            fontWeight="normal"
            fontSize="22px"
            marginBotton="5px"
          />
          <HashsStyle
            marginBottom="26px"
            color={cardType === 'ImageCardType' ? COLORS.lightGrey : COLORS.hashGrey}
          >
            {item.hashs.map((hash) => (
              <HashStyle key={hash} fontSize="19px">
                {`#${hash}`}
              </HashStyle>
            ))}
          </HashsStyle>
          <PriceStyle
            fontSize="30px"
            textAlign="right"
          >{`${item.price.toLocaleString()}원`}</PriceStyle>
        </TxtAreaStyle>
      </Link>
    </ProductCard>
  )
}

export default CardTypeItem

import PATH from '@src/constants/pathConst'
import { IProduct } from '@src/interfaces/product'
import COLORS from '@src/styles/root'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeartButton from '../common/HeartButton'
import ProductCard, {
  CardHeadArea,
  CategoryStyle,
  HashsStyle,
  HashStyle,
  PriceStyle,
  TxtAreaStyle,
} from '../common/ProductCard'
import Title from '../common/Title'

interface IWishItem {
  product: IProduct
}

const WishListItem = ({ product }: IWishItem) => {
  const [heart, setHeart] = useState(product.heart)

  return (
    <ProductCard
      key={product.id}
      cardType="ImageCardType"
      minHeight="500px"
      bgImage={product.image}
    >
      <HeartButton
        productId={product.id}
        top="14px"
        right="18px"
        isHeart={heart}
        setHeart={setHeart}
      />
      <Link to={PATH.PRODUCT_DETAIL} target="_blank">
        <CardHeadArea>
          {product.categoryNames.map((categoryName) => (
            <CategoryStyle key={categoryName} categoryName={categoryName}>
              {categoryName}
            </CategoryStyle>
          ))}
        </CardHeadArea>
        <TxtAreaStyle isCardType={true}>
          <Title
            titleType="h3"
            title={product.title}
            fontWeight="normal"
            fontSize="22px"
            marginBotton="5px"
          />
          <HashsStyle marginBottom="26px">
            {product.hashs.map((hash) => (
              <HashStyle key={hash} fontSize="19px" color={COLORS.lightGrey}>
                {`#${hash}`}
              </HashStyle>
            ))}
          </HashsStyle>
          <PriceStyle
            fontSize="30px"
            textAlign="right"
          >{`${product.price.toLocaleString()}원`}</PriceStyle>
        </TxtAreaStyle>
      </Link>
    </ProductCard>
  )
}

export default WishListItem

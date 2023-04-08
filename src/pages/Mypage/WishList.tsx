import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '@src/components/common/CardTypeItem'
import { getWishlist } from '@src/api/product'
import { IWishlistContent } from '@src/interfaces/wishlist'
import Paginate from '@src/components/common/Paginate'
import { FONTSIZE } from '@src/styles/root'

const WishList = () => {
  const [wishlists, setWisthlist] = useState<IWishlistContent[]>([])
  const [totalElements, setTotalElements] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWishlist()
      setWisthlist(data.content)
      setTotalElements(data.totalElements)
    }
    fetchData()
  }, [])
  console.log(wishlists)

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  return (
    <>
      <ProductListStyle>
        {wishlists && wishlists.length > 0 ? (
          wishlists.map((product) => (
            <CardTypeItem
              key={product.productId}
              item={product}
              cardType="imageCardType"
              bgImage={product.productThumbnail}
              priceRight="18px"
              priceBottom="20px"
              height="400px"
            />
          ))
        ) : (
          <NullWishlilstStyle>찜한 목록이 없습니다.</NullWishlilstStyle>
        )}
      </ProductListStyle>
      <Paginate totalElements={totalElements} changePageHandler={changePageHandler} />
    </>
  )
}

export default WishList

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 50px 0;
`

const NullWishlilstStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  font-size: ${FONTSIZE.fz24};
`

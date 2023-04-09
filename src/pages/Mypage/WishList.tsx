import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '@src/components/common/CardTypeItem'
import { IWishlistContent } from '@src/interfaces/wishlist'
import Paginate from '@src/components/common/Paginate'
import { FONTSIZE } from '@src/styles/root'
import {
  useDeleteWishlistMutation,
  useGetWishlistQuery,
} from '@src/reduxStore/api/wishlistApislice'

const WishList = () => {
  const [page, setPage] = useState(1)
  const { data } = useGetWishlistQuery(page)
  const wishlists: IWishlistContent[] = data ? data.content : []
  const [totalElements, setTotalElements] = useState(1)
  const [deleteWishlist] = useDeleteWishlistMutation()

  useEffect(() => {
    setTotalElements(data?.totalPages)
  }, [])

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  const deleteWishlistHandler = async (productId: number) => {
    await deleteWishlist(productId)
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
              heartClick={() => deleteWishlistHandler(product.productId)}
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

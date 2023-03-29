import Pagination from '@src/components/common/Pagination'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '@src/components/common/CardTypeItem'
import { getProducts } from '@src/api/product'
import { IProduct } from '@src/env'

const WishList = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    ;(async () => {
      setProducts(await getProducts())
    })()
  }, [products])

  return (
    <>
      <ProductListStyle>
        {products.map((product) => (
          <CardTypeItem
            key={product.id}
            item={product}
            cardType="imageCardType"
            bgImage={product.image}
            priceRight="18px"
            priceBottom="20px"
            height="400px"
          />
        ))}
      </ProductListStyle>
      <Pagination />
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

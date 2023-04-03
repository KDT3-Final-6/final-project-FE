import CardTypeItem from '@src/components/common/CardTypeItem'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'
import CheckItem from '@src/components/common/CheckItem'
import { IProductContent } from '@src/interfaces/product'
import { useState, useEffect } from 'react'
import { getRelatedProducts } from '@src/api/product'

interface Props {
  productId: number
}

const RelatedProduct = ({ productId }: Props) => {
  const [releatedProducts, setRelatedProducts] = useState<IProductContent[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRelatedProducts(productId)
      setRelatedProducts(data.content)
    }
    fetchData()
  }, [])
  return (
    <section>
      <ProductListStyle>
        {releatedProducts.map((product) => (
          <CardTypeItem
            key={product.productId}
            item={product}
            cardType="cardType"
            imgHeight="100%"
            height="460px"
            priceBottom="30px"
            priceColor={COLORS.c1b1b1b}
          />
        ))}
      </ProductListStyle>
    </section>
  )
}

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

export default RelatedProduct

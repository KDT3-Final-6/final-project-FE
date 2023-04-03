import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import CardTypeItem from '../common/CardTypeItem'
import { IProduct, IProductContent } from '@src/interfaces/product'

interface Props {
  products: IProductContent[]
}

const MonthProductList = ({ products }: Props) => {
  return (
    <div>
      <Title margin="80px 0 50px 0">
        <h2>3월 인기 테마여행 패키지</h2>
      </Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <ProductListStyle>
          {products.map((product) => (
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
      </div>
    </div>
  )
}

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

export default MonthProductList

import React from 'react'
import Title from '../common/Title'
import ProductCard from '../common/ProductCard'

interface Props {
  title: string
}

const ProductCards = ({ title }: Props) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Title>
          <h2>{title}</h2>
        </Title>
        <span style={{ marginLeft: 'auto' }}>더 보기</span>
      </div>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <ProductCard cardType="default" />
        <ProductCard cardType="default" />
        <ProductCard cardType="default" />
        <ProductCard cardType="default" />
      </ul>
    </div>
  )
}

export default ProductCards

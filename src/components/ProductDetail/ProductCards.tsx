import React from 'react'
import ProductCard from './ProductCard'

type Props = {
  title: string
}

const ProductCards = ({ title }: Props) => {
  return (
    <div id="related" style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ fontWeight: 700, fontSize: '25px' }}>{title}</span>
        <span style={{ marginLeft: 'auto' }}>더 보기</span>
      </div>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  )
}

export default ProductCards

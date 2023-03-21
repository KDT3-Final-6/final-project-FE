import React from 'react'
import ProductCard from './ProductCard'

type Props = {
  title: string
}

const ProductCards = ({ title }: Props) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <h3
          style={{ fontWeight: 700, fontSize: '25px' }}
          id={title === '연관 상품' ? 'related' : 'current'}
        >
          {title}
        </h3>
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

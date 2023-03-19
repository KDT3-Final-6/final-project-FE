import MoveTab from '@src/components/ProductDetail/MoveTab'
import ProductInfo from '@src/components/ProductDetail/ProductInfo'
import RelatedProduct from '@src/components/ProductDetail/RelatedProduct'
import Review from '@src/components/ProductDetail/Review'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div>
      <span>
        {/* 추후에 카테고리 불러오면 수정 예정 */}홈 {'>'} 테마별 여행 {'>'} 골프
      </span>
      <ProductInfo />
      <MoveTab />
      <Review />
      <RelatedProduct />
    </div>
  )
}

export default ProductDetail

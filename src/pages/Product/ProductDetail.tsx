import Detail from '@src/components/ProductDetail/Detail'
import MoveTab from '@src/components/ProductDetail/MoveTab'
import ProductInfo from '@src/components/ProductDetail/ProductInfo'
import ProductCards from '@src/components/ProductDetail/ProductCards'
import Reviews from '@src/components/ProductDetail/Reviews'
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
      <hr />
      <Detail />
      <span id="review"></span>
      <Reviews />
      <ProductCards title="연관 상품" />
      <ProductCards title="내가 봤던 상품" />
    </div>
  )
}

export default ProductDetail

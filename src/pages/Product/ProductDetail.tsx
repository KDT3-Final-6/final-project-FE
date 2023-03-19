import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div>
      <span>
        {/* 추후에 카테고리 불러오면 수정 예정 */}홈 {'>'} 테마별 여행 {'>'} 골프
      </span>
      <div>
        <div>이미지 슬라이드</div>
        <div>
          <span>[실속 골프 패키지] 사이판 3박 4일 골프 여행</span>
          <span>여행 간단 설명</span>
          <div>
            <div>★★★★☆</div>
            <span>4.0</span>
            <span>(83)</span>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

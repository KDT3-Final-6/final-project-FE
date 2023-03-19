import React from 'react'
import Review from './Review'

type Props = {}

const Reviews = (props: Props) => {
  return (
    <div id="review">
      <div>
        별점 박스
        <button>상품 리뷰 쓰기</button>
        <button>상품 문의</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default Reviews

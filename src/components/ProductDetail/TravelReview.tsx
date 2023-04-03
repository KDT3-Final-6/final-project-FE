import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Review from '../common/Review'
import Title from '../common/Title'
import { getReviewsForProduct } from '@src/api/product'
import { initReview, IReviewContent } from '@src/interfaces/review'

interface Props {
  productId: number
}

const TravelReview = ({ productId }: Props) => {
  const [reviews, setReviews] = useState<IReviewContent[]>([initReview])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewsForProduct(productId)
      setReviews(data.content)
    }
    fetchData()
  }, [])
  console.log(reviews)
  return (
    <section>
      <Inner>
        <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="50px 0">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 id="review">상품 후기(83)</h3>
            <span
              style={{
                color: COLORS.primary,
                fontSize: FONTSIZE.fz24,
                fontWeight: FONTWEGHT.fw400,
                cursor: 'pointer',
              }}
            >
              후기 작성하기
            </span>
          </div>
        </Title>
        <div style={{ display: 'flex', gap: '20px' }}>
          {reviews.length > 0 ? (
            reviews.map((review) => <Review review={review} key={review.memberNickName} />)
          ) : (
            <NoReviewStyle>리뷰가 없습니다.</NoReviewStyle>
          )}
        </div>
      </Inner>
    </section>
  )
}

const NoReviewStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONTSIZE.fz24};
`

export default TravelReview

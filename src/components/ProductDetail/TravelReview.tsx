import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'
import Review from '../common/Review'
import Title from '../common/Title'
import { IReviewValue } from '@src/interfaces/review'
import { useGetReviewForProductQuery } from '@src/reduxStore/api/reviewApiSlice'
import { useState } from 'react'
import ReviewModal from '../MyPage/ReviewModal'
import { useNavigate } from 'react-router-dom'

interface Props {
  productId: number
}

const TravelReview = ({ productId }: Props) => {
  const { data } = useGetReviewForProductQuery(productId)
  const reviews: IReviewValue[] = data ? data.content : []
  const navigate = useNavigate()
  return (
    <section>
      <Inner>
        <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="50px 0">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 id="review">상품 후기({reviews.length})</h3>
            <span
              onClick={() => navigate('/mypage/orderlist')}
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
            reviews.map((review, index) => (
              <Review review={review} key={index} id={review.postId} />
            ))
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

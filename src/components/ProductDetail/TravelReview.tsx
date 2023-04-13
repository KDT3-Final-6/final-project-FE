import { useRef } from 'react'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'
import Review from '../common/Review'
import Title from '../common/Title'
import { IReviewValue } from '@src/interfaces/review'
import { useGetReviewForProductQuery } from '@src/reduxStore/api/reviewApiSlice'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import SlideButtons from '../common/SlideButtons'

interface Props {
  productId: number
}

const TravelReview = ({ productId }: Props) => {
  const { data } = useGetReviewForProductQuery(productId)
  const reviews: IReviewValue[] = data ? data.content : []
  const navigate = useNavigate()

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef, slidesPerView: 3, spaceBetween: 10 })
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

        <div style={{ position: 'relative' }}>
          <SlideButtons direction="left" ref={prevRef} />
          <Swiper {...settings}>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <SwiperSlide key={review.postId}>
                  <Review review={review} id={review.postId} />
                </SwiperSlide>
              ))
            ) : (
              <NoReviewStyle key={'없음'}>리뷰가 없습니다.</NoReviewStyle>
            )}
          </Swiper>
          <SlideButtons ref={nextRef} direction="right" />
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

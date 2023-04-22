import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import styled from 'styled-components'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { IReviewValue } from '@src/interfaces/review'
import { useGetReviewAllQuery } from '@src/reduxStore/api/reviewApiSlice'
import Review from '@src/components/common/Review'
import { Swiper, SwiperSlide } from 'swiper/react'

const MTravelReview = () => {
  const { data } = useGetReviewAllQuery()

  const reviews: IReviewValue[] = data ? data.content.slice(0, 3) : []

  return (
    <ContainerStyle>
      <Inner width="90%">
        <Title
          titleType="h2"
          title="실제 고객 여행 후기"
          fontSize={FONTSIZE.fz32}
          margin="0 0 50px"
        />

        <SlideStyle>
          {reviews.length > 0 ? (
            <ReviewSwiperStyle spaceBetween={16} slidesPerView={'auto'}>
              {reviews.map((review) => (
                <ReviewSlideStyle key={review.postId}>
                  <Review review={review} id={review.postId} width="100%" height="100%" />
                </ReviewSlideStyle>
              ))}
            </ReviewSwiperStyle>
          ) : (
            <div>여행 후기를 남겨 보세요!</div>
          )}
        </SlideStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default MTravelReview

const ContainerStyle = styled.div`
  margin-bottom: 60px;
`

const SlideStyle = styled.div`
  min-width: 320px;
  height: 252px;
`

const ReviewSwiperStyle = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
`

const ReviewSlideStyle = styled(SwiperSlide)`
  height: 222px;
  width: 85%;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`

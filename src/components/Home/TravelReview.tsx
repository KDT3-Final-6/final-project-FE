import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import Review from '../common/Review'
import { IReviewValue } from '@src/interfaces/review'
import { useGetReviewAllQuery } from '@src/reduxStore/api/reviewApiSlice'

const TravelReview = () => {
  const { data } = useGetReviewAllQuery()
  console.log('data', data)

  const reviews: IReviewValue[] = data ? data.content.slice(0, 3) : []

  return (
    <Section>
      <Inner>
        <Title
          titleType="h2"
          title="실제 고객 여행 후기"
          fontSize={FONTSIZE.fz32}
          margin="0 0 50px"
        />
        <ContainerStyle>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Review review={review} key={review.postId} id={review.postId} />
            ))
          ) : (
            <div>여행 후기를 남겨 보세요!</div>
          )}
        </ContainerStyle>
      </Inner>
    </Section>
  )
}

export default TravelReview

const ContainerStyle = styled.div`
  display: flex;
  gap: 20px;
`

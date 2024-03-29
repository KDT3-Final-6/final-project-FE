import ReviewBox from '@src/components/MyPage/ReviewBox'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FONTSIZE } from '@src/styles/root'
import { useGetReviewForMeQuery } from '@src/reduxStore/api/reviewApiSlice'
import { IReviewValue } from '@src/interfaces/review'

const MyReview = () => {
  const { data } = useGetReviewForMeQuery()
  const reviews: IReviewValue[] = data ? data.content : []

  return (
    <MyReviewStyle>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => <ReviewBox review={review} key={review.postId} />)
      ) : (
        <NullReviewStyle>남긴 리뷰가 없습니다.</NullReviewStyle>
      )}
    </MyReviewStyle>
  )
}

const MyReviewStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
`

const NullReviewStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  font-size: ${FONTSIZE.fz24};
`

export default MyReview

import ReviewBox from '@src/components/MyPage/ReviewBox'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const MyReview = (props: Props) => {
  return (
    <MyReviewStyle>
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
    </MyReviewStyle>
  )
}

const MyReviewStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
`

export default MyReview

import React from 'react'
import styled from 'styled-components'
import { FONTSIZE, COLORS } from '@src/styles/root'
import StarRateWrapGet from './StarRateWrapGet'
import { HiChevronRight } from 'react-icons/hi'
import { IReviewContent } from '@src/interfaces/review'

interface Props {
  review: IReviewContent
}

const Review = ({ review }: Props) => {
  return (
    <ReviewCardStyle>
      <HeaderStyle>
        <span>{review.memberNickName}</span>
        <GradeStyle>
          <StarRateWrapGet AVR_RATE={review.scope} />
          <span>{review.scope}</span>
        </GradeStyle>
      </HeaderStyle>
      <ContentStyle>
        <p>{review.postContent}</p>
        <BtnStyle>
          <span>자세히 보기</span>
          <HiChevronRight />
        </BtnStyle>
      </ContentStyle>
    </ReviewCardStyle>
  )
}

const ReviewCardStyle = styled.div`
  width: 380px;
  height: 298px;
  border: 1px solid ${COLORS.cd9d9d9};
  border-radius: 12px;
  font-size: ${FONTSIZE.fz20};
  overflow: hidden;
  &:hover {
    background-color: ${COLORS.c3ba1ff};
    color: ${COLORS.white};
    button {
      color: ${COLORS.white};
    }
  }
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 31px;
  border-bottom: 1px solid ${COLORS.cd9d9d9};
`

const GradeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ContentStyle = styled.div`
  position: relative;
  padding: 26px 30px 88px 35px;
  p {
    width: 315px;
    height: 113px;
    line-height: 36px;
  }
`

const BtnStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  bottom: 28px;
  height: 30px;
  line-height: 30px;
  gap: 2px;
  svg {
    font-size: 24px;
    height: 24px;
  }
`

export default Review

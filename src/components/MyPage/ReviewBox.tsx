import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import ProductCard, { ImgAreaStyle, TxtAreaStyle } from '../common/ProductCard'
import { FaStar } from 'react-icons/fa'
import Button from '../common/Button'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import { IReviewContentUnion } from '@src/interfaces/review'
import StarRateWrapGet from '../common/StarRateWrapGet'

interface Props {
  review: IReviewContentUnion
}

const ReviewBox = ({ review }: Props) => {
  return (
    <ProductCard cardType="barType" height="230px">
      <ImgAreaStyle>
        <img src={review.purchasedProductThumbnail} alt="썸네일" />
      </ImgAreaStyle>
      <TxtAreaStyle isBarType={true}>
        <DesStyle>
          <span>{review.modifiedDate}</span>
          <Title
            titleType="h2"
            title={review.purchasedProductName}
            fontSize={FONTSIZE.fz22}
            fontWeight={FONTWEGHT.fw600}
          />
          <span>{review.postContent}</span>
        </DesStyle>
        <StarNButtonStyle>
          <div>
            <StarRateWrapGet AVR_RATE={20 * review.scope} />
          </div>
          <div>
            <Button buttonType="borderGray">수정하기</Button>
            <Button buttonType="borderGray">삭제하기</Button>
          </div>
        </StarNButtonStyle>
      </TxtAreaStyle>
    </ProductCard>
  )
}

const DesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span:first-child {
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.primary};
  }
  span:last-child {
    font-size: 18px;
  }
`

const StarNButtonStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  svg {
    font-size: 36px;
  }
  div:first-child {
    color: ${COLORS.primary};
  }
  div:last-child {
    display: flex;
    gap: 10px;
  }
`

export default ReviewBox

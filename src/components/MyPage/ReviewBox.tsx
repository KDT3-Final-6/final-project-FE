import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import ProductCard, { ImgAreaStyle, TxtAreaStyle } from '../common/ProductCard'
import { FaStar } from 'react-icons/fa'
import Button from '../common/Button'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'

type Props = {}

const ReviewBox = (props: Props) => {
  return (
    <ProductCard cardType="barType" height="230px">
      <ImgAreaStyle>
        <img src="/images/cart_image (2).jpg" alt="썸네일" />
      </ImgAreaStyle>
      <TxtAreaStyle isBarType={true}>
        <DesStyle>
          <span>2023.02.01</span>
          <Title fontSize={FONTSIZE.fz22} fontWeight={FONTWEGHT.fw600}>
            <h2>[실속 골프 패키지] 사이판 3박4일 골프 여행</h2>
          </Title>
          <span>
            3일은 골프를 하루는 호캉스를 가족들과 함께 즐겨서 정말 행복하고 값진 경험이었어요
          </span>
        </DesStyle>
        <StarNButtonStyle>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <Button buttonType="borderGray">자세히 보기</Button>
            <Button buttonType="borderGray">리뷰 수정하기</Button>
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

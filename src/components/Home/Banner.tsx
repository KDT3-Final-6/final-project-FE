import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import MoreBtn from './MoreBtn'

interface IBanner {
  image?: string
  marginTop?: string
  marginBottom?: string
  type?: number
}

const Banner = ({ type, image, marginTop, marginBottom }: IBanner) => {
  return (
    <Inner>
      <BannerStyle image={image} marginTop={marginTop} marginBottom={marginBottom}>
        {type === 1 && (
          <ExclusiveBannerStyle>
            <p>알래스카항공 국제선 단독 특가</p>
            <p>캐나다, 미국 도착 3~4월 특가 상품</p>
            <MoreBtn color={COLORS.black} bgColor={COLORS.white} bottom="23px" right="22px" />
          </ExclusiveBannerStyle>
        )}
        {type === 2 && (
          <SpringBannerStyle>
            <p>23’ 주목해야할 봄 특가 상품</p>
            <TagGroupStyle>
              <div>마스크없이🙋‍♀️</div>
              <div>가성비💵</div>
              <div>누구든지⭕️</div>
            </TagGroupStyle>
            <MoreBtn color={COLORS.white} bgColor={COLORS.c394128} bottom="23px" right="22px" />
          </SpringBannerStyle>
        )}
      </BannerStyle>
    </Inner>
  )
}

export default Banner

const BannerStyle = styled.div<IBanner>`
  position: relative;
  width: 100%;
  height: 249px;
  background-image: ${({ image }) => `url(/images/${image}.png)`};
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  p {
    position: absolute;
    font-weight: ${FONTWEGHT.fw600};
  }
`

const TagGroupStyle = styled.div`
  position: absolute;
  top: 109px;
  left: 45px;
  display: flex;
  gap: 12px;
  div {
    padding: 7.5px 12px;
    background-color: ${COLORS.white};
    color: ${COLORS.c919F79};
    font-weight: ${FONTWEGHT.fw600};
    border-radius: 32px;
  }
`

const ExclusiveBannerStyle = styled.div`
  color: ${COLORS.white};
  font-weight: ${FONTWEGHT.fw600};
  p {
    &:first-child {
      position: absolute;
      top: 48px;
      left: 63px;
      font-size: ${FONTSIZE.fz45};
    }
    &:nth-child(2) {
      position: absolute;
      top: 114px;
      left: 67px;
      font-size: ${FONTSIZE.fz28};
    }
  }
`

const SpringBannerStyle = styled.div`
  p {
    top: 38px;
    left: 45px;
    font-size: ${FONTSIZE.fz45};
    color: ${COLORS.c394128};
  }
`

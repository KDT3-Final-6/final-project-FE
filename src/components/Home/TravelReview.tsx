import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import { HiChevronRight } from 'react-icons/hi'
import StarRateWrapGet from '../common/StarRateWrapGet'
const TravelReview = () => {
  const name = '홍길동' // 유저 이름. 실제로는 데이터에서 패치할 것 입니다.
  const content =
    '하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스 최고!!' // 리뷰 내용. 실제로는 데이터에서 패치할 것 입니다.
  const AVR_RATE = 5 // 상품 평균 평점. 실제로는 데이터에서 패치할 것 입니다.

  return (
    <Section>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 50px">
          실제 고객 여행 후기
        </Title>
        <ContainerStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrapGet AVR_RATE={AVR_RATE} />
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrapGet AVR_RATE={AVR_RATE} />
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrapGet AVR_RATE={AVR_RATE} />
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
        </ContainerStyle>
      </Inner>
    </Section>
  )
}

export default TravelReview

const ReviewCardStyle = styled.div`
  width: 380px;
  height: 298px;
  border: 1px solid ${COLORS.cd9d9d9};
  border-radius: 12px;
  font-size: ${FONTSIZE.fz20};
  overflow: hidden;
`

const ContainerStyle = styled.div`
  display: flex;
  gap: 20px;
  ${ReviewCardStyle} {
    &:first-child {
      background-color: ${COLORS.c3BA1FF};
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

const StarRateWrap = styled.div`
  span {
    display: inline-block;
    margin-left: 2px;
  }
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

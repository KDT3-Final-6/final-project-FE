import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import MoreBtn from '@components/Home/MoreBtn'

const TravelEvent = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="이벤트 / 혜택" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
        <ContainerStyle>
          <EventCardStyle>
            <ImageBoxStyle url="모로코_10일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>14일 간의 모로코 시티&사막 투어</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
          <EventCardStyle>
            <ImageBoxStyle url="마레모_12일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>마레모 12일 유적 탐방</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
          <EventCardStyle>
            <ImageBoxStyle url="아프리카7개국_18일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>아프리카 8개국 27일 여행</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
        </ContainerStyle>
      </Inner>
    </Section>
  )
}

export default TravelEvent

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventCardStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBoxStyle = styled.div`
  position: relative;
  width: 380px;
  height: 207px;
  border-radius: 8px;
  background-image: ${({ url }: { url: string }) => `url(/images/event/${url}.jpg)`};
  background-size: 380px;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 14px 33px;
  p {
    font-size: ${FONTSIZE.fz20};
    font-weight: ${FONTWEGHT.fw500};
  }
  span {
    font-weight: ${FONTWEGHT.fw500};
    font-size: ${FONTSIZE.fz16};
    color: ${COLORS.ca6a6a6};
    line-height: 24px;
  }
`

import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import MoreBtn from '../MoreBtn'

const EVENT_CONTENTS = [
  {
    title: '14일 간의 모로코 시티&사막 투어',
    description: '[5/8 출발] 선착 순 마감 중',
    imageUrl: '모로코_10일_썸네일',
  },
  {
    title: '마레모 12일 유적 탐방',
    description: '[5/8 출발] 선착 순 마감 중',
    imageUrl: '마레모_12일_썸네일',
  },
  {
    title: '아프리카 8개국 27일 여행',
    description: '[5/8 출발] 선착 순 마감 중',
    imageUrl: '아프리카7개국_18일_썸네일',
  },
]

const MTravelEvent = () => {
  return (
    <ContainerStyle>
      <Inner width="90%">
        <Title titleType="h2" title="이벤트 / 혜택" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
        <EventBannerStyle>
          {EVENT_CONTENTS.map((event, index) => (
            <EventCardStyle key={index}>
              <ImageBoxStyle url={event.imageUrl}>
                <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
              </ImageBoxStyle>
              <EventInfo>
                <p>{event.title}</p>
                <span>{event.description}</span>
              </EventInfo>
            </EventCardStyle>
          ))}
        </EventBannerStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default MTravelEvent

const ContainerStyle = styled.div`
  margin-bottom: 60px;
`

const EventBannerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const EventCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`

const ImageBoxStyle = styled.div`
  position: relative;
  width: 100%;
  height: 207px;
  border-radius: 8px;
  background-image: ${({ url }: { url: string }) => `url(/images/event/${url}.jpg)`};
  background-size: 100%;
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

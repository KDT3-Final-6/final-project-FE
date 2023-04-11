import Image from '@src/components/common/Image'
import Title from '@src/components/common/Title'
import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import styled from 'styled-components'

interface Props {}

const eventObj = [
  {
    id: 1,
    title: '14일 간의 모로코 시티 & 사막 투어',
    des: '[5/8 출발] 선착순 마감 중',
    image: '/images/event/모로코_10일_썸네일.jpg',
  },
  {
    id: 2,
    title: '마레모 12일 유적 탐방',
    des: '[5/8 출발] 선착순 마감 중',
    image: '/images/event/마레모_12일_썸네일.jpg',
  },
  {
    id: 3,
    title: '아프리카 8개국 27일 여행',
    des: '[5/8 출발] 선착순 마감 중',
    image: '/images/event/아프리카7개국_18일_썸네일.jpg',
  },
]
const Event = (props: Props) => {
  return (
    <div>
      <TitleStyle>
        <Title>이벤트 / 혜택</Title>
        <div>
          더보기 <BsPlusLg />
        </div>
      </TitleStyle>
      {eventObj.map((obj) => (
        <EventCardStyle key={obj.id}>
          <Image src={obj.image} />
          <div>
            <span>{obj.title}</span>
            <span>{obj.des}</span>
          </div>
        </EventCardStyle>
      ))}
    </div>
  )
}

const TitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const EventCardStyle = styled.div`
  width: 100%;
  height: 266px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.08));
  img {
    object-fit: fill;
  }
`

export default Event

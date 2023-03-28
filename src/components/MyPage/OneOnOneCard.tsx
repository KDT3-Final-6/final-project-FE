import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Title from '../common/Title'

const OneOnOneCard = () => {
  const title = '비용 문의합니다.' // 1:1문의내용 제목, 데이터 패칭할 것
  const content =
    '문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다문의합니다' // 1:1문의내용 제목, 데이터 패칭할 것
  const date = '2023-03-27'
  const time = '16:27'
  return (
    <ContainerStyle>
      <TitleBoxStyle>
        <h3>{title}</h3>
        <div>
          <span>수정</span>
          <span>지우기</span>
        </div>
      </TitleBoxStyle>
      <ContentStyle>
        <p>{content}</p>
      </ContentStyle>
      <DateStyle>
        <span>{date}</span>
        <span>{time}</span>
      </DateStyle>
    </ContainerStyle>
  )
}

export default OneOnOneCard

const ContainerStyle = styled.div`
  position: relative;
  width: 1180px;
  height: 240px;
  border: 1px solid ${COLORS.cddd};
  border-radius: 12px;
  padding: 0 24px;
  font-size: ${FONTSIZE.fz20};
`

const TitleBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.cddd};
  font-weight: ${FONTWEGHT.fw500};
  line-height: 31px;
  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

const ContentStyle = styled.div`
  padding-top: 24px;
  color: ${COLORS.ca6a6a6};
  width: 100%;
`

const DateStyle = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.c767676};
  font-weight: ${FONTWEGHT.fw500};
  padding-top: 10px;
`

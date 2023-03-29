import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import Button from '@components/common/Button'

const OneOnOneCard = () => {
  const title = '비용 문의합니다.' // 1:1문의내용 제목, 데이터 패칭할 것
  const content = '문의할 내용을 작성해 주세요' // 1:1문의내용 제목, 데이터 패칭할 것
  const date = '2023-03-27'
  const time = '16:27'
  return (
    <ContainerStyle>
      <TitleBoxStyle>
        <h3>{title}</h3>
      </TitleBoxStyle>

      <ContentStyle>{content}</ContentStyle>
      <FooterStyle>
        <DateStyle>
          <span>{date}</span>
          <span>{time}</span>
        </DateStyle>
        <ButtonBoxStyle>
          <Button buttonType="borderGray">수정하기</Button>
          <Button buttonType="borderGray">삭제하기</Button>
        </ButtonBoxStyle>
      </FooterStyle>
    </ContainerStyle>
  )
}

export default OneOnOneCard

const ContainerStyle = styled.div`
  width: 1180px;
  min-height: 200px;
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

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

const DateStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.c767676};
  font-weight: ${FONTWEGHT.fw500};
  padding-top: 10px;
`

const ButtonBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

import React from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import splitDate from '@src/utils/splitDate'
import Button from '@components/common/Button'
import { IoIosArrowUp } from 'react-icons/io'

interface IOneOnOneAnswerCard {
  answer: string
  setIsInquiryOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OneOnOneAnswerCard = ({ answer, setIsInquiryOpen }: IOneOnOneAnswerCard) => {
  const createdDate = '2023-03-27' // 글쓴 날짜 제목, 데이터 패칭할 것
  const time = '16:27' // 글쓴 시간, 데이터 패칭할 것
  return (
    <OneOnOneAnswerCardStyle>
      <TitleBoxStyle>
        <h3>고투게더 담당자</h3>
      </TitleBoxStyle>
      <ContentStyle>{answer}</ContentStyle>
      <FooterStyle>
        <DateStyle>
          <span>{splitDate(createdDate)}</span>
          <span>{time}</span>
        </DateStyle>
        <ButtonBoxStyle>
          <Button
            onClick={() => setIsInquiryOpen(false)}
            width="112px"
            height="43px"
            borderRadius="9999px"
            color={`${COLORS.black}`}
          >
            <span>답변 닫기</span>
            <IoIosArrowUp />
          </Button>
        </ButtonBoxStyle>
      </FooterStyle>
    </OneOnOneAnswerCardStyle>
  )
}

export default OneOnOneAnswerCard

const TitleBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  font-weight: ${FONTWEGHT.fw500};
  line-height: 31px;
  font-weight: 00;
  font-size: 20px;
  line-height: 31px;
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${COLORS.c3BA1FF};
  }
`

const ContentStyle = styled.div`
  padding-top: 25px;
  padding-right: 30px;
  color: ${COLORS.c1b1b1b};
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  padding-left: 10px;
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
  font-size: 16px;
  color: ${COLORS.c767676};
  font-weight: ${FONTWEGHT.fw500};
  padding-top: 10px;
`

const ButtonBoxStyle = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #b6b5b5;
    gap: 5px;
    &:hover {
      box-shadow: ${COLORS.boxShowdow};
      background-color: ${COLORS.white};
      color: ${COLORS.black};
    }
    svg {
      margin: 0;
    }
  }
`

const OneOnOneAnswerCardStyle = styled.div`
  width: 100%;
  min-height: 156px;
  ${TitleBoxStyle} {
    height: 10%;
  }
  ${ContentStyle} {
    height: 70%;
  }
  ${FooterStyle} {
    height: 20%;
  }
`

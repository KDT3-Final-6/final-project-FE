import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@components/common/Button'
import splitDate from '@src/utils/splitDate'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import OneOnOneAnswerCard from './OneOnOneAnswerCard'

const OneOnOneCard = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false)
  const postTitle = '비용 문의합니다.' // 1:1문의내용 제목, 데이터 패칭할 것
  const postContent =
    '이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~이거저거이거저거 문의드립니다~~~~~~~~' // 1:1문의내용 제목, 데이터 패칭할 것
  const createdDate = '2023-03-27' // 글쓴 날짜 제목, 데이터 패칭할 것
  const time = '16:27' // 글쓴 시간, 데이터 패칭할 것
  const inquiryType = '회원 문의' // 문의유형 타입, 데이터 패칭할 것
  const qnAStatus = '답변완료' // 답변상태
  const answer =
    '안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.안녕하세요. 고투게더 담당자입니다.'
  const purchasedProductName = null //'[실속 골프패키지] 사이판 3박4일 골프 여행'
  return (
    <ContainerStyle>
      <TitleBoxStyle>
        <h3>{postTitle}</h3>
        <p>{qnAStatus}</p>
      </TitleBoxStyle>
      <QnATypeStyle>
        <div>
          <span>문의 유형</span>
          <span>:</span>
          <span>{inquiryType}</span>
        </div>
        {purchasedProductName ? (
          <ProductInfoStyle>
            <span>상품</span>
            <span>:</span>
            <span>{purchasedProductName}</span>
          </ProductInfoStyle>
        ) : null}
      </QnATypeStyle>
      <ContentStyle>{postContent}</ContentStyle>
      <FooterStyle>
        <DateStyle>
          <span>{splitDate(createdDate)}</span>
          <span>{time}</span>
        </DateStyle>
        {qnAStatus === '답변완료' && !isInquiryOpen ? (
          <ButtonBoxStyle>
            <Button
              onClick={() => setIsInquiryOpen((prev) => !prev)}
              width="112px"
              height="43px"
              borderRadius="9999px"
              color={`${COLORS.black}`}
            >
              <span>답변 보기</span>
              <IoIosArrowDown />
            </Button>
          </ButtonBoxStyle>
        ) : null}
      </FooterStyle>
      {isInquiryOpen ? (
        <InquiryBoxStyle>
          <OneOnOneAnswerCard answer={answer} setIsInquiryOpen={setIsInquiryOpen} />
        </InquiryBoxStyle>
      ) : null}
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

const QnATypeStyle = styled.div`
  padding-left: 10px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    :first-child {
      padding-right: 35px;
    }
  }
`

const ProductInfoStyle = styled.div`
  padding-left: 35px;
  border-left: 1px solid;
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
  margin: 24px 0;
  height: 43px;
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

const InquiryBoxStyle = styled.div`
  border-top: 1px solid ${COLORS.cE0E0E0};
`

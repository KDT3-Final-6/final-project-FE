import React from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Image from '../common/Image'
import { Link } from 'react-router-dom'

type Props = {}

const MFooter = (props: Props) => {
  return (
    <FooterWrapStyle>
      <Image src="/images/Logo_footer.png" alt="더샤이니 로고" />
      <FooterTopStyle>
        <TopStyle>
          <TopTitleStyle>입금계좌</TopTitleStyle>
          <TopBoldStyle>KEB하나은행</TopBoldStyle>
          <TopBoldStyle>267-910020-36604</TopBoldStyle>
          <span>(주)더샤이니</span>
        </TopStyle>
        <TopStyle>
          <TopTitleStyle>고객센터</TopTitleStyle>
          <TopBoldStyle>02-6105-7711</TopBoldStyle>
          <span>영업시간: 09:00 ~ 18:00</span>
          <span>토/일요일 및 공휴일 휴무</span>
        </TopStyle>
      </FooterTopStyle>
      <FooterBottomStyle>
        <span>
          상호명 : (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕ㅣ주소: 서울특별시 중구
          청계천로40, 한국관광공사 서울센터 818호
        </span>
        <span>
          사업자등록번호 : 495-87-02492ㅣ통신판매업신고번호: 2021-서울중구-2450ㅣ이메일:{' '}
          <Link to="mailto:gotogether@shinytravels.com">gotogether@shinytravels.com</Link>
        </span>
        <span>
          고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.
        </span>
        <span>
          {' '}
          고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및
          거래에 대하여 책임을 지지 않습니다.
        </span>
      </FooterBottomStyle>
    </FooterWrapStyle>
  )
}

const FooterWrapStyle = styled.footer`
  border-top: 1px solid ${COLORS.cd9d8d8};
  height: 382px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  margin-bottom: 80px;
  z-index: 100;
`

const FooterTopStyle = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 50%;
  }
`

const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const TopTitleStyle = styled.span`
  font-size: ${FONTSIZE.fz14};
`

const TopBoldStyle = styled.span`
  font-size: 17px;
  font-weight: ${FONTWEGHT.fw700};
`

const FooterBottomStyle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: ${COLORS.c7c7c7c};
`

export default MFooter

import Inner from '@src/layout/Inner'
import COLORS from '@src/styles/root'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillYoutube, AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterStyle>
      <Inner>
        <FooterTopStyle>
          <img src="/public/images/Logo_footer.png" alt="더샤이니 로고" />
          <SNSsAreaStyle>
            <SNSStyle iconBgColor={COLORS.youTube} title="유튜브 보러가기">
              <Link to="https://youtu.be/Jm3TiJ5lFKQ" target="_blank">
                <AiFillYoutube />
              </Link>
            </SNSStyle>
            <SNSStyle iconBgColor={COLORS.facebook} title="페이스북">
              <Link to="" target="_blank">
                <AiFillFacebook />
              </Link>
            </SNSStyle>
            <SNSStyle iconBgColor={COLORS.instagram} title="인스타그램">
              <Link to="" target="_blank">
                <AiOutlineInstagram />
              </Link>
            </SNSStyle>
            <SNSStyle iconBgColor={COLORS.twitter} title="트위터">
              <Link to="" target="_blank">
                <AiOutlineTwitter />
              </Link>
            </SNSStyle>
          </SNSsAreaStyle>
        </FooterTopStyle>
        <FooterButtonStyle>
          <CopyRightStyle>
            상호명 : (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕ㅣ주소: 서울특별시 중구
            청계천로40, 한국관광공사 서울센터 818호
            <br />
            사업자등록번호 : 495-87-02492ㅣ통신판매업신고번호: 2021-서울중구-2450ㅣ이메일:{' '}
            <Link to="mailto:gotogether@shinytravels.com">gotogether@shinytravels.com</Link>
            <br />
            <br />
            고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.
            <br />
            고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및
            거래에 대하여 책임을 지지 않습니다.
          </CopyRightStyle>
          <AccountStyle>
            입금계좌
            <Strong>
              KEB 하나은행
              <br />
              267-910020-36604
            </Strong>
            (주)더샤이니
          </AccountStyle>
          <CSCenter>
            고객센터
            <br />
            <Strong>02-6105-7711</Strong>
            영업시간 : 09:00 ~ 18:00
            <br />토 / 일요일 및 공휴일 휴무
          </CSCenter>
        </FooterButtonStyle>
      </Inner>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.div`
  width: 100%;
  border-top: 1px solid ${COLORS.mediumGrey};
  padding: 25px 0 42px;

  img {
    width: 255px;
  }
`

const FooterTopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`

const SNSsAreaStyle = styled.ul`
  display: flex;
  gap: 15px;
`

const SNSStyle = styled.li<{ iconBgColor: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.iconBgColor};
  color: ${COLORS.white};
  font-size: 20px;
  overflow: hidden;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`

const FooterButtonStyle = styled.div`
  display: flex;
  color: ${COLORS.footerLightGrey};
  justify-content: space-between;
`

const CopyRightStyle = styled.div`
  margin-right: 84px;
  line-height: 20px;
  font-size: 13px;
`

const AccountStyle = styled.div`
  margin-right: 46px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 20px;
`

const CSCenter = styled(AccountStyle)`
  margin-right: 0;
`

const Strong = styled.strong`
  color: ${COLORS.footerDarkGrey};
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
`

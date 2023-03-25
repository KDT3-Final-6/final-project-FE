import React from 'react'
import PATH from '@src/constants/pathConst'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { COLORS } from '@src/styles/root'
import Input from './common/Input'
import Inner from '@src/layout/Inner'

const Header = () => {
  return (
    <header>
      <GnbStyle>
        <Inner height="100px" display="flex" justifyContent="space-between">
          <Link to={PATH.HOME}>
            <img src="/images/Logo_Gotogether.png" alt="고투게더 로고 홈으로 이동" />
          </Link>
          <ButtonsStyle>
            <Link to={PATH.HOME}>
              <AiOutlineHeart />
              <span>찜상품</span>
            </Link>
            <Link to={PATH.CART}>
              <AiOutlineShoppingCart />
              <span>장바구니</span>
            </Link>
            <Link to={PATH.LOGIN}>
              <FiLogIn />
              <span>로그인</span>
            </Link>
            <Link to={PATH.SIGNUP}>
              <AiOutlineUser />
              <span>회원가입</span>
            </Link>
          </ButtonsStyle>
        </Inner>
      </GnbStyle>
      <LnbStyle>
        <Inner height="90px" display="flex" justifyContent="space-between">
          <Input
            inputType="searchInput"
            type="text"
            width="350px"
            height="50px"
            placeholder="여행 그룹이나 상품을 검색해보세요."
          />
          <LnbListStyle>
            <li>여행 큐레이션</li>
            <li>추천 여행</li>
            <li>그룹별 여행</li>
            <li>테마별 여행</li>
            <BarStyle></BarStyle>
            <li>이벤트</li>
            <li>커뮤니티</li>
          </LnbListStyle>
        </Inner>
      </LnbStyle>
    </header>
  )
}

export default Header

const GnbStyle = styled.div`
  border-bottom: 1px solid ${COLORS.cd9d8d8};
`

const LnbStyle = styled.div``

const LnbListStyle = styled.ul`
  display: flex;
  font-size: 20px;
  gap: 30px;
  color: ${COLORS.c1b1b1b};
  font-weight: 600;
`

const BarStyle = styled.span`
  display: inline-block;
  width: 1px;
  height: 18px;
  background: ${COLORS.black};
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 20px;

  a {
    display: flex;
    flex-direction: column;
    text-align: center;

    svg {
      font-size: 23px;
    }

    span {
      width: 100%;
      display: block;
      font-size: 14px;
      margin-top: 6px;
    }
  }
`

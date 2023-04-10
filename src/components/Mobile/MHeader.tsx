import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../common/Image'
import PATH from '@src/constants/pathConst'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'
import { FONTSIZE, FONTWEGHT } from '@src/styles/root'

const MHeader = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrapStyle>
      <MainHeaderStyle>
        <Image
          width="125px"
          height="20px"
          alt="고투게더 로고 홈으로 이동"
          bgImage="/images/Logo_Gotogether.png"
          onClick={() => navigate(PATH.HOME)}
        />
        <LoginStyle onClick={() => navigate('/login')}>
          <FiLogIn />
          <span>로그인</span>
        </LoginStyle>
      </MainHeaderStyle>
      <MenuStyle>
        <li onClick={() => navigate('/survey')}>여행큐레이션</li>
        <li onClick={() => navigate('/product/group')}>그룹별</li>
        <li onClick={() => navigate('/product/district')}>지역별</li>
        <li onClick={() => navigate('/product/theme')}>테마별</li>
      </MenuStyle>
    </HeaderWrapStyle>
  )
}

const HeaderWrapStyle = styled.header`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  padding: 20px;
`

const MainHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`

const MenuStyle = styled.menu`
  display: flex;
  justify-content: space-between;
  li {
    font-size: ${FONTSIZE.fz20};
    cursor: pointer;
    font-weight: ${FONTWEGHT.fw500};
  }
`

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 10px;
  }
`
export default MHeader

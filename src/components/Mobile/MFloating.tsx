import React, { useState } from 'react'
import styled from 'styled-components'
import { FiHome, FiSearch } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import Image from '../common/Image'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { useNavigate } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'

type Props = {}

const MFloating = (props: Props) => {
  const [isConsult, setIsConsult] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      {isConsult && (
        <ConsultStyle>
          <ChattingStyle>
            <BsChatDotsFill />
            <span>채팅상담 시작하기</span>
          </ChattingStyle>
          <CallStyle>
            <FaHeadset />
            <div>
              <span>상담번호</span>
              <span>02{')'}4353-3453</span>
            </div>
          </CallStyle>
        </ConsultStyle>
      )}
      <FloatingStyle>
        <IconStyle onClick={() => navigate('/')}>
          <FiHome />
          <span>홈</span>
        </IconStyle>
        <IconStyle onClick={() => navigate('/search')}>
          <FiSearch />
          <span>검색</span>
        </IconStyle>
        <IconStyle onClick={() => setIsConsult((prev) => !prev)}>
          {isConsult ? (
            <CloseButtonStyle>
              <BsXLg />
            </CloseButtonStyle>
          ) : (
            <Image src="/images/mobile_logo.png" width="50px" height="50px" />
          )}
          <span>상담센터</span>
        </IconStyle>
        <IconStyle onClick={() => navigate('/mypage')}>
          <FaRegUserCircle />
          <span>마이페이지</span>
        </IconStyle>
        <IconStyle onClick={() => navigate('/mypage/wishlist')}>
          <BsHeart />
          <span>찜 상품</span>
        </IconStyle>
      </FloatingStyle>
    </>
  )
}

const FloatingStyle = styled.div`
  min-width: 480px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  bottom: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background-color: ${COLORS.white};
  padding: 0 30px;
  z-index: 10;
`

const IconStyle = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
  span {
    font-size: 14px;
  }
`

const CloseButtonStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.c333};
  color: ${COLORS.white};
`

const ConsultStyle = styled.div`
  min-width: 480px;
  width: 100%;
  height: 60px;
  position: absolute;
  position: fixed;
  bottom: 60px;
  background-color: ${COLORS.white};
  display: flex;

  & > div {
    width: 50%;

    border-radius: 6px;
    color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    svg {
      margin: 0;
      font-size: ${FONTSIZE.fz24};
    }
    span {
      font-size: ${FONTSIZE.fz18};
      font-weight: ${FONTWEGHT.fw700};
    }
  }
`

const ChattingStyle = styled.div`
  background-color: ${COLORS.c3BA1FF};
  margin: 10px 30px 4px 10px;
`

const CallStyle = styled.div`
  background-color: ${COLORS.cf5b100};
  margin: 10px 10px 4px 30px;
  div {
    span:first-child {
      font-size: ${FONTSIZE.fz12};
      font-weight: ${FONTWEGHT.fw500};
    }
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`

export default MFloating

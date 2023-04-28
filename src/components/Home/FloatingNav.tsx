import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState, useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'
import ChatBot from './ChatBot'
import useOnClickOutside from '@src/hooks/useOnClickOutside'

const FloatingNav = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  const [isShowNumber, setIsShowNumber] = useState(false)
  const [isChatBotOpen, setIsChatBotOpen] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsShowNumber(false))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowNavigation(true)
      } else {
        setShowNavigation(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ShowNumber = () => setIsShowNumber((prev) => !prev)

  const handleClickShowChatBot = () => setIsChatBotOpen((prev) => !prev)

  return (
    <>
      <FloatingNavStyle showNavigation={showNavigation}>
        <ChatBoxStyle onClick={handleClickShowChatBot}>
          <BsChatDotsFill />
          <span>채팅</span>
        </ChatBoxStyle>
        <ConsultBoxStyle isShowNumber={isShowNumber} onClick={ShowNumber} ref={ref}>
          <ConsultEmojiStyle>
            <FaHeadset />
            <span>상담</span>
          </ConsultEmojiStyle>
          <ConsultNumberStyle>
            <p>
              <span>02</span>
              <span>·</span>
              <span>4353</span>
              <span>·</span>
              <span>3453</span>
            </p>
          </ConsultNumberStyle>
        </ConsultBoxStyle>
        <TopBtnStyle onClick={MoveToTop}>맨 위로</TopBtnStyle>
      </FloatingNavStyle>
      <ChatBot isChatBotOpen={isChatBotOpen} setIsChatBotOpen={setIsChatBotOpen} />
    </>
  )
}

export default FloatingNav

const FloatingNavStyle = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  text-align: right;
  right: 0;
  width: 100px;
  height: 290px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${COLORS.cf5b100};
  z-index: 5;
  visibility: ${({ showNavigation }: { showNavigation: boolean }) =>
    showNavigation ? 'visible' : 'hidden'};
  opacity: ${({ showNavigation }) => (showNavigation ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  animation: ${({ showNavigation }: { showNavigation: boolean }) =>
    showNavigation
      ? css`
          ${leftSlideIn} 0.5s ease-in-out
        `
      : css`
          ${leftSlideOut} 0.5s ease-in-out
        `};
  svg {
    font-size: 48px;
  }
`

const leftSlideIn = keyframes`
  0% {
    right: -80px;
    opacity: 0;
  }

  100% {
    right: 0;
    opacity: 1;
  }
`

const leftSlideOut = keyframes`
  0% {
    right: 0;
    opacity: 1;
  }

  100% {
    right: -80px;
    opacity: 0;
  }
`

const ChatBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: ${FONTSIZE.fz20};
  font-weight: ${FONTWEGHT.fw700};
  color: ${COLORS.white};
  line-height: 150%;
  /*  */
  padding: 29px 28px 10px 28px;
  background-color: ${COLORS.c3BA1FF};
  width: 100%;
  height: 120px;
  border-top-left-radius: 20px;
`
const ConsultBoxStyle = styled.div`
  font-size: ${FONTSIZE.fz20};
  font-weight: ${FONTWEGHT.fw700};
  color: ${COLORS.white};
  line-height: 150%;
  /*  */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 120px;
  right: ${({ isShowNumber }: { isShowNumber: boolean }) => (isShowNumber ? '0' : '-100px')};
  background-color: ${COLORS.cf5b100};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 200px;
  height: 120px;
  transition: all 0.3s ease-in-out;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ConsultEmojiStyle = styled.div`
  flex-direction: column;
  gap: 6px;
  width: 50%;
  height: 100%;
  padding: 29px 28px 10px 28px;
`

const ConsultNumberStyle = styled.div`
  width: 50%;
  height: 100%;
  p {
    width: 51px;
    height: 90px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20%;
    }
  }
`

const TopBtnStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: ${FONTSIZE.fz20};
  font-weight: ${FONTWEGHT.fw700};
  color: ${COLORS.white};
  line-height: 150%;
  /*  */
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.c090909};
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 20px;
`

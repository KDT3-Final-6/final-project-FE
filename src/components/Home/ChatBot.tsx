import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'
import { COLORS } from '@src/styles/root'

interface IChatBot {
  isChatBotOpen: boolean
}
const ChatBot = ({ isChatBotOpen }: IChatBot) => {
  return (
    <ChatBotStyle isChatBotOpen={isChatBotOpen}>
      <HeaderStyle>
        <span>고투게더 챗봇 서비스</span>
        <AiFillCloseCircle />
      </HeaderStyle>
      <MainStyle></MainStyle>
      <FooterStyle></FooterStyle>
    </ChatBotStyle>
  )
}

export default ChatBot

const ChatBotStyle = styled.div`
  cursor: pointer;
  bottom: 220px;
  right: 130px;
  position: fixed;
  width: 380px;
  height: 614px;
  background: #fafcff;
  border: 1px solid #bebebe;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  z-index: 5;
  visibility: ${({ isChatBotOpen }: { isChatBotOpen: boolean }) =>
    isChatBotOpen ? 'visible' : 'hidden'};
  opacity: ${({ isChatBotOpen }) => (isChatBotOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  animation: ${({ isChatBotOpen }: { isChatBotOpen: boolean }) =>
    isChatBotOpen
      ? css`
          ${leftSlideIn} 0.5s ease-in-out
        `
      : css`
          ${leftSlideOut} 0.5s ease-in-out
        `};
`

const leftSlideIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const leftSlideOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  width: 100%;
  height: 60px;
  background: #3ba1ff;
  border-bottom: 1px solid #bebebe;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${COLORS.white};

  svg {
    position: absolute;
    right: 0;
    padding: 12px;
    width: 48px;
    height: 48px;
    margin: 0;
  }
`

const MainStyle = styled.div`
  width: 100%;
  height: calc(614px - 60px - 80px);
  background: #fafcff;
`
const FooterStyle = styled.div`
  width: 100%;
  height: 80px;
  background: #fafcff;
  border-top: 0.5px solid #bebebe;
`

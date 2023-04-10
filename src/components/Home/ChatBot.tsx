import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface IChatBot {
  isChatBotOpen: boolean
}
const ChatBot = ({ isChatBotOpen }: IChatBot) => {
  const [showNavigation, setShowNavigation] = useState(false)

  return <ChatBotStyle showNavigation={showNavigation}></ChatBotStyle>
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

import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'

interface ISocialButtons {
  verb: string
}

const SocialButtons = ({ verb }: ISocialButtons) => {
  return (
    <SocialLoginButtonsStyle>
      <Button
        buttonType="transparent"
        width="100%"
        borderRadius="0"
        bgColor={COLORS.kakao}
        color={COLORS.c404040}
      >
        <PAlignStyle>
          <RiKakaoTalkFill />
          <span>카카오로 {verb}</span>
        </PAlignStyle>
      </Button>
      <Button
        buttonType="transparent"
        width="100%"
        borderRadius="0"
        bgColor={COLORS.naver}
        color={COLORS.white}
      >
        <PAlignStyle>
          <SiNaver />
          <span>네이버로 {verb}</span>
        </PAlignStyle>
      </Button>
      <Button
        buttonType="transparent"
        width="100%"
        borderRadius="0"
        bgColor={COLORS.facebook}
        color={COLORS.white}
      >
        <PAlignStyle>
          <AiFillFacebook />
          <span>페이스북으로 {verb}</span>
        </PAlignStyle>
      </Button>
    </SocialLoginButtonsStyle>
  )
}

export default SocialButtons

const SocialLoginButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    &:nth-child(2) {
      svg {
        font-size: 20px;
      }
    }
  }
`

const PAlignStyle = styled.p`
  display: flex;
  align-items: center;
  margin: 0 auto;

  svg {
    width: 50px;
    margin: 0;
    font-size: 25px;
    text-align: center;
  }
  span {
    width: calc(100% - 50px);
    text-align: center;
  }
`

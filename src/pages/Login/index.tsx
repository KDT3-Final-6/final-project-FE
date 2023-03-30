import Button from '@src/components/common/Button'
import CheckItem from '@src/components/common/CheckItem'
import Input from '@src/components/common/Input'
import Title, { HightlightSpanStyle } from '@src/components/common/Title'
import SocialLoginButtons from '@src/components/common/SocialButtons'
import PATH from '@src/constants/pathConst'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'

const Login = () => {
  return (
    <>
      <Title titleType="h1" title="로그인" textAlign="center" margin="102px 0 20px" />
      <Title textAlign="center" fontSize={FONTSIZE.fz18} fontWeight={FONTWEGHT.fw400}>
        <h2>
          <HightlightSpanStyle color={COLORS.c3ba1ff}>예약을 더 쉽고 빠르게</HightlightSpanStyle> 할
          수 있습니다.
        </h2>
      </Title>
      <Inner width="400px" padding="44px 0 190px">
        <Inputs>
          <Input inputType="textInput" placeholder="아이디를 입력하세요." />
          <Input inputType="textInput" placeholder="비밀번호를 입력하세요." />
        </Inputs>
        <Buttons>
          <ConfirmStyle>
            <CheckItem type="checkbox" id="ex" labelName="로그인 상태 유지" />
            <ForgotConfirmStyle>
              <Link to={PATH.LOGIN}>아이디 찾기</Link>
              <Link to={PATH.LOGIN}>비밀번호 찾기</Link>
              <Link to={PATH.SIGNUP}>회원가입</Link>
            </ForgotConfirmStyle>
          </ConfirmStyle>
        </Buttons>
        <Button buttonType="skyblue" width="100%" height="42px" borderRadius="0" margin="0 0 10px">
          로그인
        </Button>
        <Button buttonType="gray" width="100%" height="42px" borderRadius="0">
          비회원 예약 조회
        </Button>
        <LineSpan></LineSpan>
        <SocialButtons verb="시작하기" />
      </Inner>
    </>
  )
}

export default Login

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const ConfirmStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${FONTSIZE.fz12};
  margin-bottom: 25px;

  label {
    padding-left: 0;
  }
`

const ForgotConfirmStyle = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: inline-block;
  }
`

const LineSpan = styled.span`
  display: block;
  height: 1px;
  margin: 44px 0;
  background-color: ${COLORS.cd9d9d9};
`

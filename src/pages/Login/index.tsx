import Button from '@src/components/common/Button'
import CheckBox from '@src/components/common/CheckBox'
import Input from '@src/components/common/Input'
import Title from '@src/components/common/Title'
import PATH from '@src/constants/pathConst'
import Inner from '@src/layout/Inner'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  return (
    <Inner width="400px" padding="102px 0 190px">
      <Title titleType="h1" title="로그인" textAlign="center" marginBottom="44px" />
      <Inputs>
        <Input inputType="textInput" placeholder="아이디를 입력하세요." />
        <Input inputType="textInput" placeholder="비밀번호를 입력하세요." />
      </Inputs>
      <Buttons>
        <ConfirmStyle>
          <CheckBox id="ex">로그인 상태 유지</CheckBox>
          <ForgotConfirmStyle>
            <Link to={PATH.LOGIN}>아이디 찾기</Link>
            <Link to={PATH.LOGIN}>비밀번호 찾기</Link>
            <Link to={PATH.LOGIN}>회원가입</Link>
          </ForgotConfirmStyle>
        </ConfirmStyle>
      </Buttons>
      <Button buttonType="skyblue" width="100%" height="42px" borderRadius="0" margin="0 0 10px">
        로그인
      </Button>
      <Button buttonType="gray" width="100%" height="42px" borderRadius="0">
        비회원 예약 조회
      </Button>
    </Inner>
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
`

const ForgotConfirmStyle = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: inline-block;
  }
`

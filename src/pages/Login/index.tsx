import Button from '@src/components/common/Button'
import CheckItem from '@src/components/common/CheckItem'
import Input from '@src/components/common/Input'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import PATH from '@src/constants/pathConst'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { ILogin } from '@src/interfaces/user'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { login, userInfo } from '@src/api/auth'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'
import { ErrorMessage } from '@src/components/common/InputItem'
import { Helmet } from 'react-helmet'
import { SET_USERINFO } from '@src/reduxStore/features/userInfoSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<ILogin>()

  const onSubmit = async (data: ILogin) => {
    try {
      dispatch(showLoading())
      const response = await login({
        memberEmail: data.memberEmail,
        memberPassword: data.memberPassword,
      })
      const maxAge = response.data.refreshTokenExpirationTime
      setCookies('accessToken', response.data.accessToken, { maxAge: maxAge })
      setCookies('role', response.data.roles, { maxAge: maxAge })
      dispatch(SET_USERINFO(await userInfo()))
      dispatch(
        setModal({
          isOpen: true,
          text: `${response.data.memberName}님, ${MESSAGES.LOGIN.complete}`,
          onClickOK: async () => {
            dispatch(setModal({ route: navigate(PATH.HOME) }))
          },
        })
      )
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        dispatch(
          setModal({
            isOpen: true,
            text: MESSAGES.LOGIN.inCorrect,
            onClickOK: async () => {
              dispatch(setModal({ isOpen: false }))
            },
          })
        )
      } else {
        dispatch(
          setModal({
            isOpen: true,
            text: MESSAGES.LOGIN.error,
            onClickOK: () => dispatch(setModal({ isOpen: false })),
          })
        )
      }
    } finally {
      dispatch(hideLoading())
    }
  }

  return (
    <>
      <Helmet>
        <title>고투게더 로그인</title>
      </Helmet>
      <Title titleType="h1" title="로그인" textAlign="center" margin="102px 0 20px" />
      <Title textAlign="center" fontSize={FONTSIZE.fz18} fontWeight={FONTWEGHT.fw400}>
        <h2>
          <HighlightSpanStyle color={COLORS.c3ba1ff}>예약을 더 쉽고 빠르게</HighlightSpanStyle> 할
          수 있습니다.
        </h2>
      </Title>
      <Inner width="400px" padding="44px 0 190px">
        <LoginFormStyle onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <Input
              inputType="textInput"
              placeholder="아이디를 입력하세요."
              ariaInvalid={!isDirty ? undefined : errors.memberEmail ? true : false}
              register={{
                ...register('memberEmail', {
                  required: '이메일을 입력하세요.',
                  pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식에 맞지 않습니다.' },
                }),
              }}
            />
            {errors.memberEmail && <ErrorMessage>{errors.memberEmail.message}</ErrorMessage>}
            <Input
              inputType="textInput"
              type="password"
              placeholder="비밀번호를 입력하세요."
              ariaInvalid={!isDirty ? undefined : errors.memberPassword ? true : false}
              register={{
                ...register('memberPassword', { required: '비밀번호를 입력하세요.' }),
              }}
            />
            {errors.memberPassword && <ErrorMessage>{errors.memberPassword.message}</ErrorMessage>}
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
          <Button
            buttonType="skyblue"
            width="100%"
            height="42px"
            borderRadius="0"
            margin="0 0 10px"
            type="submit"
            isDisabled={isSubmitting}
          >
            로그인
          </Button>
          <Button buttonType="gray" width="100%" height="42px" borderRadius="0">
            비회원 예약 조회
          </Button>
        </LoginFormStyle>
        <LineSpan></LineSpan>
        <SocialButtons verb="시작하기" />
      </Inner>
    </>
  )
}

export default Login

const LoginFormStyle = styled.form``

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;

  ${ErrorMessage} {
    margin-top: -10px;
  }
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

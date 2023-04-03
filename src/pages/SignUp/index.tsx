import Button from '@src/components/common/Button'
import InputBox from '@src/components/common/InputBox'
import CheckItem from '@src/components/common/CheckItem'
import Image from '@src/components/common/Image'
import InputItem, { ErrorMessage } from '@src/components/common/InputItem'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import count from '@src/utils/count'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'
import Select from '@src/components/common/Select'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IUser } from '@src/interfaces/user'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { signup } from '@src/api/auth'
import MESSAGES from '@src/constants/messages'

const SignUp = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<IUser>()
  const [FormData, setFormData] = useState<IUser>({
    memberEmail: '',
    memberPassword: '',
    memberPasswordConfirm: '',
    memberName: '',
    memberNickname: '',
    memberPhone: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    memberGender: '',
    memberHobby: [],
    memberSmsAgree: false,
    memberEmailAgree: false,
  })

  const [currentValue, setCurrentValue] = useState({
    year: 1960,
    month: 5,
    day: 21,
  })

  const years: number[] = []
  count(years, 1950, 2023)

  const months: number[] = []
  count(months, 1, 12)

  const days: number[] = []
  count(days, 1, 31)

  const onSubmit = async (data: IUser) => {
    try {
      dispatch(showLoading())
      await signup({
        memberEmail: FormData.memberEmail,
        memberPassword: FormData.memberPassword,
        memberName: FormData.memberName,
        memberNickname: FormData.memberNickname,
        memberPhone: FormData.memberPhone,
        memberBirthDate: `${FormData.birthYear}-${FormData.birthMonth}-${FormData.birthDay}`,
        memberGender: '',
        memberHobby: [],
        memberSmsAgree: false,
        memberEmailAgree: false,
      })
    } catch (error) {
      console.log(MESSAGES.SIGNUP.error)
    } finally {
      dispatch(hideLoading())
    }
    alert(MESSAGES.SIGNUP.complete)
  }

  console.log(errors, isSubmitting)

  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('memberPassword')

  return (
    <>
      <Title titleType="h1" title="회원가입" textAlign="center" margin="102px 0 40px" />
      <Image
        src="/images/signUpUser.png"
        alt="회원가입 이미지"
        isCenter={true}
        margin="0 0 20px"
        imgMargin="0 auto"
      />
      <Title textAlign="center" fontSize={FONTSIZE.fz18} fontWeight={FONTWEGHT.fw400}>
        <h2>
          <HighlightSpanStyle
            color={COLORS.c3ba1ff}
            fontSize={FONTSIZE.fz20}
            fontWeight={FONTWEGHT.fw600}
            spanMargin="0 0 20px"
          >
            반갑습니다!
          </HighlightSpanStyle>
          <br /> 생년월일, 성별, 취미를 입력하면 비슷한 유형의 여행 그룹을 추천해 드립니다.
        </h2>
      </Title>
      <Inner width="400px" padding="40px 0 190px">
        <SocialButtons verb="가입하기" />
        <LineSpan></LineSpan>
        <FormAreaStyle onSubmit={handleSubmit(onSubmit)}>
          <InputItem
            title="이메일"
            placeholder="이메일을 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberEmail ? true : false}
            register={{
              ...register('memberEmail', {
                required: '이메일은 필수 입력값입니다.',
                pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식에 맞지 않습니다.' },
              }),
            }}
            errorMessage={errors.memberEmail && errors.memberEmail.message}
          />
          <InputItem
            type="password"
            title="비밀번호"
            placeholder="비밀번호를 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberPassword ? true : false}
            register={{
              ...register('memberPassword', {
                required: '비밀번호는 필수 입력값입니다.',
                minLength: { value: 8, message: '비밀번호는 8자 이상 16자 이하로 입력해주세요.' },
                maxLength: { value: 16, message: '비밀번호는 8자 이상 16자 이하로 입력해주세요.' },
              }),
            }}
            errorMessage={errors.memberPassword && errors.memberPassword.message}
          />
          <InputItem
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 확인 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberPasswordConfirm ? true : false}
            register={{
              ...register('memberPasswordConfirm', {
                required: true,
                validate: (value) => value === passwordRef.current,
              }),
            }}
            errorMessage={errors.memberPasswordConfirm && '비밀번호가 일치하지 않습니다.'}
          />
          <InputItem
            title="이름"
            placeholder="이름을 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberName ? true : false}
            register={{
              ...register('memberName', {
                required: '성함을 적어주세요.',
                pattern: {
                  value: /^[가-힣]{2,4}$/,
                  message: '이름을 한글로 올바르게 작성해주세요.',
                },
              }),
            }}
            errorMessage={errors.memberName && errors.memberName.message}
          />
          <InputItem
            title="닉네임"
            placeholder="닉네임을 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberNickname ? true : false}
            register={{
              ...register('memberNickname', {
                required: '닉네임을 적어주세요.',
                minLength: { value: 2, message: '2글자 이상 10글자 이하로 입력해주세요' },
                maxLength: { value: 10, message: '2글자 이상 10글자 이하로 입력해주세요' },
              }),
            }}
            errorMessage={errors.memberNickname && errors.memberNickname.message}
          />
          <InputItem
            title="연락처"
            placeholder='연락처를 입력하세요. ( " - " 없이 입력해주세요.)'
            ariaInvalid={!isDirty ? undefined : errors.memberPhone ? true : false}
            register={{
              ...register('memberPhone', {
                required: '휴대폰 번호를 작성해주세요.',
                pattern: {
                  value: /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/,
                  message: '연락처를 다시 확인해주세요.',
                },
              }),
            }}
            errorMessage={errors.memberPhone && errors.memberPhone.message}
          />
          <InputBox inputCount={3} title="생년월일">
            <Select
              options={years}
              value={currentValue.year}
              initial={1960}
              unit="년"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              register={{
                ...register('birthYear', {
                  required: '생년월일을 선택해주세요.',
                }),
              }}
            />
            <Select
              options={months}
              value={currentValue.month}
              initial={5}
              unit="월"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            <Select
              options={days}
              value={currentValue.day}
              initial={21}
              unit="일"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            {(errors.birthYear || errors.birthMonth || errors.birthDay) && (
              <ErrorMessage role="alert">{errors.birthYear!.message}</ErrorMessage>
            )}
          </InputBox>
          <InputBox title="성별">
            <RadiosStyle>
              <CheckItem
                checkType="radio"
                type="radio"
                id="Female"
                labelName="여성"
                name="gender"
              />
              <CheckItem checkType="radio" type="radio" id="Male" labelName="남성" name="gender" />
            </RadiosStyle>
          </InputBox>
          <InputBox title="취미 (중복 선택 가능)">
            <CheckStyle>
              <CheckItem id="GOLF" labelName="골프" />
              <CheckItem id="WINE" labelName="와인" />
              <CheckItem id="TREKKING" labelName="트래킹" />
              <CheckItem id="VACATION" labelName="휴식, 힐링" />
              <CheckItem id="VOLUNTEER" labelName="봉사활동" />
              <CheckItem id="SHOPPING" labelName="쇼핑" />
              <CheckItem id="CULTURE" labelName="문화탐방" />
              <CheckItem id="PILGRIMAGE" labelName="성지순례" />
            </CheckStyle>
          </InputBox>
          <InputBox title="개인정보 제3자 제공 동의">
            <CheckStyle>
              <CheckItem id="agreeSMS" labelName="SMS 수신 동의" />
              <CheckItem id="agreeEmail" labelName="E-Mail 수신 동의" />
            </CheckStyle>
          </InputBox>
          <Button
            buttonType="skyBlue"
            type="submit"
            borderRadius="0"
            width="100%"
            isDisabled={isSubmitting}
          >
            가입하기
          </Button>
        </FormAreaStyle>
        <AgreeStyle>
          가입하시면 <span>이용약관</span>에 동의하게 됩니다.
        </AgreeStyle>
      </Inner>
    </>
  )
}

export default SignUp

const LineSpan = styled.span`
  display: block;
  height: 1px;
  margin: 44px 0 64px;
  background-color: ${COLORS.cd9d9d9};
`

export const FormAreaStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 55px;

  ${ErrorMessage} {
    position: absolute;
    bottom: -18px;
  }
`

export const RadiosStyle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  label {
    position: static;
    margin-right: 10px;
    white-space: nowrap;
  }
`

export const CheckStyle = styled(RadiosStyle)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
`

const AgreeStyle = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: ${FONTSIZE.fz15};
  font-weight: ${FONTWEGHT.fw600};
  color: ${COLORS.c1b1b1b};

  span {
    color: ${COLORS.c3ba1ff};
  }
`

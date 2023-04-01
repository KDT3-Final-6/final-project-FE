import Button from '@src/components/common/Button'
import InputBox from '@src/components/common/InputBox'
import CheckItem from '@src/components/common/CheckItem'
import Image from '@src/components/common/Image'
import InputItem from '@src/components/common/InputItem'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import count from '@src/utils/count'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'
import Select from '@src/components/common/Select'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IUser } from '@src/interfaces/user'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { signup } from '@src/api/auth'
import MESSAGES from '@src/constants/messages'
import { getProducts } from '@src/api/product'

const SignUp = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<IUser>()

  const [formData, setFormData] = useState<IUser>({
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberNickname: '',
    memberPhone: '',
    memberBirthDate: '',
    memberHobby: '',
    memberGender: '',
    memberSmsAgree: false,
    memberEmailAgree: false,
  })
  const [currentValue, setCurrentValue] = useState({
    year: 1960,
    month: 5,
    day: 21,
  })

  useEffect(() => {
    ;(async () => {
      try {
        dispatch(showLoading())
        const response = await signup({
          memberEmail: formData.memberEmail,
          memberPassword: formData.memberPassword,
          memberName: formData.memberName,
          memberNickname: formData.memberNickname,
          memberPhone: formData.memberPhone,
          memberBirthDate: formData.memberBirthDate,
          memberHobby: formData.memberHobby,
          memberGender: formData.memberGender,
          memberSmsAgree: formData.memberSmsAgree,
          memberEmailAgree: formData.memberEmailAgree,
        })
        console.log(response)
      } catch (error) {
        console.log(MESSAGES.SIGNUP.error)
      } finally {
        dispatch(hideLoading())
      }
    })()
  }, [])

  const years: number[] = []
  count(years, 1950, 2023)

  const months: number[] = []
  count(months, 1, 12)

  const days: number[] = []
  count(days, 1, 31)

  // const handleChange = (type: 'year' | 'month' | 'day', value: string | number) => {
  //   setCurrentValue((prev) => {
  //     return {
  //       ...prev,
  //       [type]: value,
  //     }
  //   })
  // }

  const onSubmit = async (data: IUser) => {
    setFormData(data)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'enter') {
      e.preventDefault()
    }
  }

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
        <FormAreaStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <InputItem title="이메일" placeholder="이메일을 입력하세요." />
          <InputItem title="비밀번호" placeholder="비밀번호를 입력하세요." />
          <InputItem title="비밀번호 확인" placeholder="비밀번호를 확인 입력하세요." />
          <InputItem title="이름" placeholder="이름을 입력하세요." />
          <InputItem
            title="연락처"
            placeholder='연락처를 입력하세요. ( " - " 없이 입력해주세요.)'
          />
          <InputBox inputCount={3} title="생년월일">
            <Select
              options={years}
              value={currentValue.year}
              unit="년"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            <Select
              options={months}
              value={currentValue.month}
              unit="월"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            <Select
              options={days}
              value={currentValue.day}
              unit="일"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
          </InputBox>
          <InputBox title="성별">
            <RadiosStyle>
              <CheckItem
                checkType="radio"
                type="radio"
                id="female"
                labelName="여성"
                name="gender"
              />
              <CheckItem checkType="radio" type="radio" id="male" labelName="남성" name="gender" />
            </RadiosStyle>
          </InputBox>
          <InputBox title="취미 (중복 선택 가능)">
            <CheckStyle>
              <CheckItem id="golf" labelName="골프" />
              <CheckItem id="fishing" labelName="낚시" />
              <CheckItem id="climb" labelName="등산" />
              <CheckItem id="hanRyang" labelName="먹고 즐기기" />
              <CheckItem id="volunteer" labelName="봉사" />
              <CheckItem id="shopping" labelName="쇼핑" />
              <CheckItem id="healing" labelName="휴식, 힐링" />
            </CheckStyle>
          </InputBox>
          <InputBox title="개인정보 제3자 제공 동의">
            <CheckStyle>
              <CheckItem id="agreeSMS" labelName="SMS 수신 동의" />
              <CheckItem id="agreeEmail" labelName="E-Mail 수신 동의" />
            </CheckStyle>
          </InputBox>
          <Button buttonType="skyBlue" borderRadius="0" width="100%" isDisabled={isSubmitting}>
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

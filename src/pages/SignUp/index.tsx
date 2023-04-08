import Button from '@src/components/common/Button'
import InputBox from '@src/components/common/InputBox'
import CheckItem from '@src/components/common/CheckItem'
import Image from '@src/components/common/Image'
import InputItem, { ErrorMessage } from '@src/components/common/InputItem'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { signup } from '@src/api/auth'
import MESSAGES from '@src/constants/messages'
import Modal from 'react-modal'
import { setModal } from '@src/reduxStore/modalSlice'
import { useNavigate } from 'react-router-dom'
import PATH from '@src/constants/pathConst'
import { Helmet } from 'react-helmet'
import { ISignup } from '@src/interfaces/user'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<ISignup>()
  const hobbys = [
    { id: 'GOLF', labelName: '골프' },
    { id: 'WINE', labelName: '와인' },
    { id: 'TREKKING', labelName: '트래킹' },
    { id: 'VACATION', labelName: '휴식, 힐링' },
    { id: 'VOLUNTEER', labelName: '봉사활동' },
    { id: 'SHOPPING', labelName: '쇼핑' },
    { id: 'CULTURE', labelName: '문화탐방' },
    { id: 'PILGRIMAGE', labelName: '성지순례' },
  ]

  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('memberPassword')

  const addZero = (date: number) => {
    if (date < 10) {
      const zeroDate = ('00' + date).slice(-2)
      return zeroDate
    }
    return date
  }

  const years = Array.from({ length: 64 }, (_, i) => 2023 - i)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedYear(parseInt(e.target.value))

  const months = Array.from({ length: 12 }, (_, i) => addZero(1 + i))
  const [selectedMonths, setSelectedMonths] = useState<number>(new Date().getMonth())
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedMonths(parseInt(e.target.value))

  const days = Array.from({ length: 31 }, (_, i) => addZero(1 + i))
  const [selectedDays, setSelectedDays] = useState<number>(new Date().getDay())
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedDays(parseInt(e.target.value))

  const [selectedGender, setSelectedGender] = useState<string>('')
  const handleGenderChange = (e: React.ChangeEvent<HTMLDivElement>) =>
    setSelectedGender(e.target.id)

  const [selectedHobby, setSelectedHobby] = useState<string[]>([])
  const handleHobbyChange = (checked: boolean, item: string) =>
    checked
      ? setSelectedHobby((prev) => [...prev, item])
      : setSelectedHobby(selectedHobby.filter((el) => el !== item))

  const [selectedAgree, setSelectedAgree] = useState<boolean>(false)
  const handleAgreeChange = (checked: boolean) => setSelectedAgree(checked)
  const onSubmit = async (data: ISignup) => {
    try {
      dispatch(showLoading())
      const response = await signup({
        memberEmail: data.memberEmail,
        memberPassword: data.memberPassword,
        memberName: data.memberName,
        memberNickname: data.memberNickname,
        memberPhone: data.memberPhone,
        memberBirthDate: `${data.birthYear}-${data.birthMonth}-${data.birthDay}`,
        memberGender: data.memberGender,
        memberHobby: data.memberHobby,
        memberSmsAgree: data.memberSmsAgree,
        memberEmailAgree: data.memberEmailAgree,
      })

      if (response.data.includes('성공')) {
        dispatch(
          setModal({
            isOpen: true,
            text: MESSAGES.SIGNUP.complete,
            onClickOK: () => {
              dispatch(setModal({ isOpen: false, route: navigate(PATH.LOGIN) }))
            },
          })
        )
      } else {
        dispatch(
          setModal({
            isOpen: true,
            text: response.data,
            onClickOK: () => {
              dispatch(setModal({ isOpen: false }))
            },
          })
        )
      }
    } catch (error: any) {
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.SIGNUP.error,
          onClickOK: () => {
            dispatch(setModal({ isOpen: false, route: navigate(PATH.LOGIN) }))
          },
        })
      )
    } finally {
      dispatch(hideLoading())
    }
  }

  return (
    <>
      <Helmet>
        <title>고투게더 회원가입</title>
      </Helmet>
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
            maxLength={16}
            register={{
              ...register('memberPassword', {
                required: '비밀번호는 필수 입력값입니다.',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                  message: '영문, 숫자, 특수문자 조합으로 입력해주세요',
                },
                minLength: { value: 8, message: '8자 이상 16자 이하로 입력해주세요.' },
                maxLength: { value: 16, message: '8자 이상 16자 이하로 입력해주세요.' },
              }),
            }}
            errorMessage={errors.memberPassword && errors.memberPassword.message}
          />
          <InputItem
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 확인 입력하세요."
            ariaInvalid={!isDirty ? undefined : errors.memberPasswordConfirm ? true : false}
            maxLength={16}
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
            maxLength={10}
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
            maxLength={11}
            register={{
              ...register('memberPhone', {
                required: '휴대폰 번호를 작성해주세요.',
                pattern: {
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: '" - " 없이 입력해주세요.',
                },
              }),
            }}
            errorMessage={errors.memberPhone && errors.memberPhone.message}
          />
          <InputBox inputCount={3} title="생년월일" required={true}>
            <select
              {...register('birthYear', { required: '생년월일을 선택해주세요.' })}
              onChange={handleYearChange}
            >
              <option value="" hidden>
                년
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {`${year} 년`}
                </option>
              ))}
            </select>
            <select
              {...register('birthMonth', { required: '생년월일을 선택해주세요.' })}
              onChange={handleMonthChange}
            >
              <option value="" hidden>
                월
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {`${month} 월`}
                </option>
              ))}
            </select>
            <select
              {...register('birthDay', { required: '생년월일을 선택해주세요.' })}
              onChange={handleDayChange}
            >
              <option value="" hidden>
                일
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {`${day} 일`}
                </option>
              ))}
            </select>
            {errors.birthYear ? (
              <ErrorMessage>{errors.birthYear.message}</ErrorMessage>
            ) : errors.birthMonth ? (
              <ErrorMessage>{errors.birthMonth.message}</ErrorMessage>
            ) : errors.birthDay ? (
              <ErrorMessage>{errors.birthDay.message}</ErrorMessage>
            ) : null}
          </InputBox>
          <InputBox title="성별">
            <RadiosStyle onChange={handleGenderChange}>
              <CheckItem
                checkType="radio"
                type="radio"
                id="Female"
                labelName="여성"
                name="gender"
                register={{ ...register('memberGender') }}
              />
              <CheckItem
                checkType="radio"
                type="radio"
                id="Male"
                labelName="남성"
                name="gender"
                register={{ ...register('memberGender') }}
              />
            </RadiosStyle>
          </InputBox>
          <InputBox title="취미 (중복 선택 가능)">
            <CheckStyle>
              {hobbys.map((hobby) => (
                <CheckItem
                  key={hobby.id}
                  id={hobby.id}
                  labelName={hobby.labelName}
                  register={{ ...register('memberHobby') }}
                  onChange={(e) => handleHobbyChange(e.target.checked, e.target.id)}
                />
              ))}
            </CheckStyle>
          </InputBox>
          <InputBox title="개인정보 제3자 제공 동의">
            <CheckStyle>
              <CheckItem
                id="agreeSMS"
                labelName="SMS 수신 동의"
                register={{ ...register('memberSmsAgree') }}
                onClick={(e) => handleAgreeChange(e.target.checked)}
                isChecked={selectedAgree}
              />
              <CheckItem
                id="agreeEmail"
                labelName="E-Mail 수신 동의"
                register={{ ...register('memberEmailAgree') }}
                onClick={(e) => handleAgreeChange(e.target.checked)}
                isChecked={selectedAgree}
              />
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

Modal.setAppElement('#root')

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

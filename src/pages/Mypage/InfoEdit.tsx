import Button from '@src/components/common/Button'
import CheckItem from '@src/components/common/CheckItem'
import InputBox from '@src/components/common/InputBox'
import InputItem from '@src/components/common/InputItem'
import Select from '@src/components/common/Select'
import Inner from '@src/layout/Inner'
import { COLORS } from '@src/styles/root'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CheckStyle, FormAreaStyle, RadiosStyle } from '../SignUp'
import { Helmet } from 'react-helmet'
import { userInfo, userInfoEdit, userWithDrawal } from '@src/api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'
import { useNavigate } from 'react-router-dom'
import MESSAGES from '@src/constants/messages'
import PATH from '@src/constants/pathConst'
import { useForm } from 'react-hook-form'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { IUserInfo, IUserInfoEdit } from '@src/interfaces/user'
import IRootReducer from '@src/interfaces/rootReducer'

const InfoEdit = () => {
  const [userInfoData, setUserInfoData] = useState<IUserInfo>()
  const [userGender, setUserGender] = useState('Male')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<IUserInfoEdit>()

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

  useEffect(() => {
    ;(async () => {
      setUserInfoData(await userInfo())
    })()
  }, [])

  // const aaa = useSelector((state: IRootReducer) => state.userInfo)
  // console.log(aaa)

  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('memberPassword')

  const withdrawalHandler = async () => {
    dispatch(
      setModal({
        isOpen: true,
        text: MESSAGES.WITHDRAWAL.normal,
        onClickOK: async () => {
          await userWithDrawal()
          dispatch(setModal({ isOpen: false, route: navigate(PATH.LOGIN) }))
        },
        onClickCancel: () => {
          dispatch(setModal({ isOpen: false }))
        },
      })
    )
  }

  const [selectedHobby, setSelectedHobby] = useState<string[]>([])
  const handleHobbyChange = (checked: boolean, item: string) =>
    checked
      ? setSelectedHobby((prev) => [...prev, item])
      : setSelectedHobby(selectedHobby.filter((el) => el !== item))

  const [selectedAgree, setSelectedAgree] = useState<boolean>(false)
  const handleAgreeChange = (checked: boolean) => setSelectedAgree(checked)

  const onSubmit = async (data: IUserInfoEdit) => {
    try {
      dispatch(showLoading)
      await userInfoEdit({
        memberPassword: data.memberPassword,
        memberNickname: data.memberNickname,
        memberPhone: data.memberPhone,
        memberHobby: data.memberHobby,
        memberSmsAgree: data.memberSmsAgree,
        memberEmailAgree: data.memberEmailAgree,
      })
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.MYPAGE.USEREDIT.complete,
          onClickOK: () => {
            dispatch(setModal({ isOpen: false, route: navigate(PATH.MYPAGE) }))
          },
        })
      )
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.MYPAGE.USEREDIT.error,
          onClickOK: () => dispatch(setModal({ isOpen: false })),
        })
      )
    } finally {
      dispatch(hideLoading)
    }
  }

  return (
    <>
      <Helmet>
        <title>회원 정보 수정</title>
      </Helmet>
      {}
      <Inner width="400px" padding="100px 0 190px">
        <FormAreaStyle onSubmit={handleSubmit(onSubmit)}>
          <InputItem
            inputType="disabledInput"
            title="이메일"
            placeholder={userInfoData?.memberEmail}
            isDisabled={true}
          />
          <InputItem
            type="password"
            title="비밀번호"
            placeholder="변경할 비밀번호를 입력하세요."
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
            ariaInvalid={!isDirty ? undefined : errors.memberPassword ? true : false}
            maxLength={16}
            register={{
              ...register('memberPasswordConfirm', {
                required: true,
                validate: (value) => value === passwordRef.current,
              }),
            }}
            errorMessage={errors.memberPasswordConfirm && '비밀번호가 일치하지 않습니다.'}
          />
          <InputItem title="이름" placeholder={userInfoData?.memberName} isDisabled={true} />
          <InputItem
            title="닉네임"
            highlight=""
            placeholder={userInfoData?.memberNickName}
            ariaInvalid={!isDirty ? undefined : errors.memberNickname ? true : false}
            maxLength={10}
            register={{ ...register('memberNickname') }}
            errorMessage={errors.memberNickname && errors.memberNickname.message}
          />
          <InputItem
            title="연락처"
            placeholder={userInfoData?.memberPhone}
            ariaInvalid={!isDirty ? undefined : errors.memberPhone ? true : false}
            maxLength={11}
            highlight=""
            register={{
              ...register('memberPhone', {
                pattern: {
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: '" - " 없이 입력해주세요.',
                },
              }),
            }}
            errorMessage={errors.memberPhone && errors.memberPhone.message}
          />
          <InputBox inputCount={3} title="생년월일">
            <Select
              currentValue={userInfoData?.memberBirthDate.split('-')[0]}
              unit="년"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              isDisabled={true}
            />
            <Select
              currentValue={userInfoData?.memberBirthDate.split('-')[1]}
              unit="월"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              isDisabled={true}
            />
            <Select
              currentValue={userInfoData?.memberBirthDate.split('-')[2]}
              unit="일"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              isDisabled={true}
            />
          </InputBox>
          <InputBox title="성별">
            <RadiosStyle>
              <CheckItem
                checkType="radio"
                type="radio"
                id="Female"
                labelName="여성"
                name="gender"
                isChecked={userGender === 'Female'}
                isDisable={true}
              />
              <CheckItem
                checkType="radio"
                type="radio"
                id="Male"
                labelName="남성"
                name="gender"
                isChecked={userGender === 'Male'}
                isDisable={true}
              />
            </RadiosStyle>
          </InputBox>
          <InputBox title="취미 (1가지 이상, 중복 선택 가능)">
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
            확인
          </Button>
        </FormAreaStyle>
        <Button
          buttonType="skyBlue"
          borderRadius="0"
          width="100%"
          margin="20px 0"
          onClick={withdrawalHandler}
        >
          회원 탈퇴
        </Button>
      </Inner>
    </>
  )
}

export default InfoEdit

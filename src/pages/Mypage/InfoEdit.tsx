import Button from '@src/components/common/Button'
import CheckItem from '@src/components/common/CheckItem'
import InputBox from '@src/components/common/InputBox'
import InputItem from '@src/components/common/InputItem'
import Select from '@src/components/common/Select'
import Inner from '@src/layout/Inner'
import { COLORS } from '@src/styles/root'
import React, { useState } from 'react'
import { CheckStyle, FormAreaStyle, RadiosStyle } from '../SignUp'

const InfoEdit = () => {
  const [userGender, setUserGender] = useState('male')

  return (
    <>
      <Inner width="400px" padding="100px 0 190px">
        <FormAreaStyle>
          <InputItem
            inputType="disabledInput"
            title="이메일"
            placeholder="KimGoto@gmail.com"
            isDisabled={true}
          />
          <InputItem type="password" title="비밀번호" placeholder="비밀번호를 입력하세요." />
          <InputItem
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 확인 입력하세요."
          />
          <InputItem title="이름" placeholder="김고투" isDisabled={true} />
          <InputItem
            title="연락처"
            placeholder='연락처를 입력하세요. ( " - " 없이 입력해주세요.)'
            highlight=""
          />
          <InputBox inputCount={3} title="생년월일">
            <Select
              initial={1960}
              unit="년"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              isDisabled={true}
            />
            <Select
              initial={5}
              unit="월"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
              isDisabled={true}
            />
            <Select
              initial={21}
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
                isChecked={userGender === 'Female' && true}
                isDisable={true}
              />
              <CheckItem
                checkType="radio"
                type="radio"
                id="Male"
                labelName="남성"
                name="gender"
                isChecked={userGender === 'Male' && true}
                isDisable={true}
              />
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
          <Button buttonType="skyBlue" borderRadius="0" width="100%">
            확인
          </Button>
        </FormAreaStyle>
      </Inner>
    </>
  )
}

export default InfoEdit

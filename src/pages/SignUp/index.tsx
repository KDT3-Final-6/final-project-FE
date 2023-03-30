import Button from '@src/components/common/Button'
import InputBox from '@src/components/common/InputBox'
import CheckItem from '@src/components/common/CheckItem'
import Image from '@src/components/common/Image'
import InputItem from '@src/components/common/InputItem'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import count from '@src/utils/count'
import React, { useState } from 'react'
import styled from 'styled-components'
import SocialButtons from '@src/components/common/SocialButtons'
import Select from '@src/components/common/Select'

const SignUp = () => {
  const years: number[] = []
  count(years, 1950, 2023)

  const months: number[] = []
  count(months, 1, 12)

  const days: number[] = []
  count(days, 1, 31)

  const [currentValue, setCurrentValue] = useState({
    year: 1960,
    month: 5,
    day: 21,
  })

  // const handleChange = (type: 'year' | 'month' | 'day', value: string | number) => {
  //   setCurrentValue((prev) => {
  //     return {
  //       ...prev,
  //       [type]: value,
  //     }
  //   })
  // }

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
        <FormAreaStyle>
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
              initial={1960}
              // onChange={(e) => handleChange('year', e.target.value)}
              value={currentValue.year}
              unit="년"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            <Select
              options={months}
              initial={5}
              value={currentValue.month}
              unit="월"
              borderColor={COLORS.cddd}
              borderRadius="0"
              height="38px"
            />
            <Select
              options={days}
              initial={21}
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
          <Button buttonType="skyBlue" borderRadius="0" width="100%">
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

export const FormAreaStyle = styled.div`
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

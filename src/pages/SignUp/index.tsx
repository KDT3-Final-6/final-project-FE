import Button from '@src/components/common/Button'
import CheckBox from '@src/components/common/CheckBox'
import Image from '@src/components/common/Image'
import Input from '@src/components/common/Input'
import Select from '@src/components/common/Select'
import Title, { HightlightSpanStyle } from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import count from '@src/utils/count'
import React, { useState } from 'react'
import styled from 'styled-components'

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

  const handleChange = (type: 'year' | 'month' | 'day', value: string | number) => {
    setCurrentValue((prev) => {
      return {
        ...prev,
        [type]: value,
      }
    })
  }

  return (
    <>
      <Title textAlign="center" margin="102px 0 40px">
        <h1>회원가입</h1>
      </Title>
      <Image
        src="/images/signUpUser.png"
        alt="회원가입 이미지"
        isCenter={true}
        margin="0 0 20px"
        imgMargin="0 auto"
      />
      <Title textAlign="center" fontSize={FONTSIZE.fz18} fontWeight={FONTWEGHT.fw400}>
        <h2>
          <HightlightSpanStyle
            color={COLORS.c3ba1ff}
            fontSize={FONTSIZE.fz20}
            fontWeight={FONTWEGHT.fw600}
            spanMargin="0 0 20px"
          >
            반갑습니다!
          </HightlightSpanStyle>
          <br /> 생년월일, 성별, 취미를 입력하면 비슷한 유형의 여행 그룹을 추천해 드립니다.
        </h2>
      </Title>
      <Inner width="400px" padding="90px 0 190px">
        <FormAreaStyle>
          <Input inputType={'textInput'} placeholder="이메일을 입력하세요.">
            <LabelAlignStyle>
              이메일 <HightlightSpanStyle color={COLORS.c3ba1ff}>(필수입력)</HightlightSpanStyle>
            </LabelAlignStyle>
          </Input>
          <Input inputType={'textInput'} placeholder="비밀번호를 입력하세요.">
            <LabelAlignStyle>
              비밀번호 <HightlightSpanStyle color={COLORS.c3ba1ff}>(필수입력)</HightlightSpanStyle>
            </LabelAlignStyle>
          </Input>
          <Input inputType={'textInput'} placeholder="비밀번호를 확인 입력하세요.">
            <LabelAlignStyle>
              비밀번호 확인
              <HightlightSpanStyle color={COLORS.c3ba1ff}>(필수입력)</HightlightSpanStyle>
            </LabelAlignStyle>
          </Input>
          <Input inputType={'textInput'} placeholder="이름을 입력하세요.">
            <LabelAlignStyle>
              이름 <HightlightSpanStyle color={COLORS.c3ba1ff}>(필수입력)</HightlightSpanStyle>
            </LabelAlignStyle>
          </Input>
          <Input inputType={'textInput'} placeholder="연락처를 입력하세요.">
            <LabelAlignStyle>
              연락처 <HightlightSpanStyle color={COLORS.c3ba1ff}>(필수입력)</HightlightSpanStyle>
            </LabelAlignStyle>
          </Input>
          <Select selectCount={3} title="생년월일">
            <select
              onChange={(e) => handleChange('year', e.target.value)}
              value={currentValue.year}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
            <select
              onChange={(e) => handleChange('month', e.target.value)}
              value={currentValue.month}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>
            <select onChange={(e) => handleChange('day', e.target.value)} value={currentValue.day}>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>
          </Select>
          <CheckBox checkboxType="radio" title="성별">
            <RadiosStyle>
              <input type="radio" name="gender" value="여성" id="female" />
              <label htmlFor="female">여성</label>
              <input type="radio" name="gender" value="남성" id="male" />
              <label htmlFor="male">남성</label>
            </RadiosStyle>
          </CheckBox>
          <CheckBox checkboxType="checkbox" title="취미 (중복 선택 가능)">
            <CheckStyle>
              <GroupStyle>
                <input type="checkbox" id="golf" />
                <label htmlFor="golf">골프</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="fishing" />
                <label htmlFor="fishing">낚시</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="climb" />
                <label htmlFor="climb">등산</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="hanRyang" />
                <label htmlFor="hanRyang">먹고 즐기기</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="volunteer" />
                <label htmlFor="volunteer">봉사</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="shopping" />
                <label htmlFor="shopping">쇼핑</label>
              </GroupStyle>
              <GroupStyle>
                <input type="checkbox" id="healing" />
                <label htmlFor="healing">휴식, 힐링</label>
              </GroupStyle>
            </CheckStyle>
          </CheckBox>
          <Input inputType="textInput" placeholder="추천인 코드를 입력하세요.">
            <p>추천인</p>
          </Input>
          <Button buttonType="skyBlueFull" borderRadius="0" width="100%">
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

const FormAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`

const LabelAlignStyle = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const RadiosStyle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  label {
    position: static;
    margin-right: 10px;
    white-space: nowrap;
  }
`

const CheckStyle = styled(RadiosStyle)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
`

const GroupStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
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

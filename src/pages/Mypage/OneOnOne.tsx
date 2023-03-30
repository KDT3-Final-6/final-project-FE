import Button from '@src/components/common/Button'
import OneOnOneCard from '@src/components/MyPage/OneOnOneCard'
import QuestionCard from '@src/components/MyPage/QuestionCard'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {}

const OneOnOne = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)
  return (
    <ContainerStyle>
      <BtnBoxStyle>
        <Button width="140px" buttonType="cartSkyBlue" onClick={handleClick}>
          문의 작성
        </Button>
      </BtnBoxStyle>
      <CardSectionStyle>
        <QuestionCard isOpen={isOpen} setIsOpen={setIsOpen} />
        <OneOnOneCard />
        <OneOnOneCard />
      </CardSectionStyle>
    </ContainerStyle>
  )
}

export default OneOnOne

const ContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.cE0E0E0};
  padding-bottom: 30px;
`

const BtnBoxStyle = styled.section`
  text-align: right;
  padding: 30px 0;
  button {
    font-size: ${FONTSIZE.fz16};
    font-weight: ${FONTWEGHT.fw600};
  }
`

const CardSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

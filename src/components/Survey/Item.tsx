import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../common/Image'
import Button from '../common/Button'
import { FONTSIZE, COLORS } from '@src/styles/root'
import styled from 'styled-components'

interface Props {
  question: {
    id: number
    name: string
    imgSrc: string
  }[]
  title: string
  setSurvey: React.Dispatch<React.SetStateAction<number>>
  survey: number
}

const Item = ({ question, title, setSurvey, survey }: Props) => {
  const navigate = useNavigate()
  return (
    <TestAreaStyle>
      <span style={{ fontSize: FONTSIZE.fz26 }}>{title}</span>
      <ImageAreaStyle>
        {question.map((item) => (
          <Image
            bgImage={`/images/survey/${item.imgSrc}`}
            width="324px"
            height="239px"
            imgBorderRadius="15px"
            isCenter={true}
            key={item.id}
          >
            <input type="radio" name="survey" id={item.name} />
            <label htmlFor={item.name}>
              <span
                style={{
                  color: COLORS.white,
                  fontSize: FONTSIZE.fz26,
                }}
              >
                {item.name}
              </span>
            </label>
          </Image>
        ))}
      </ImageAreaStyle>
      <Button
        width="80px"
        height="45px"
        bgColor={COLORS.primary}
        color={COLORS.white}
        onClick={() => (survey < 5 ? setSurvey((prev) => prev + 1) : navigate('/result'))}
      >
        {survey < 5 ? '다음' : '결과 보기'}
      </Button>
    </TestAreaStyle>
  )
}

const TestAreaStyle = styled.div`
  width: 669px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  gap: 17px;
  button {
    align-self: flex-end;
    &:hover {
      color: ${COLORS.primary};
      background-color: transparent;
      border: 1px solid ${COLORS.primary};
    }
  }
  input[type='radio'] {
    width: 100%;
    height: 100%;
    display: none;
  }
  input[type='radio'] + label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background-color: transparent;
    }
  }
  input[type='radio']:checked + label {
    background-color: transparent;
  }
`

const ImageAreaStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export default Item

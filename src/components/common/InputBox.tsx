import { COLORS, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import { HighlightSpanStyle } from './Title'

interface IInputBox {
  inputCount?: number
  title?: string
  highlight?: string
  required?: boolean
  color?: string
  children?: React.ReactNode
}

const InputBox = ({
  inputCount = 1,
  title,
  highlight = '(필수입력)',
  required,
  color = COLORS.c3ba1ff,
  children,
}: IInputBox) => {
  return (
    <CheckBoxStyle inputCount={inputCount}>
      <p>
        {title}{' '}
        {required && (
          <HighlightSpanStyle color={color} fontWeight={FONTWEGHT.fw500}>
            {highlight}
          </HighlightSpanStyle>
        )}
      </p>
      {children}
    </CheckBoxStyle>
  )
}

export default InputBox

const CheckBoxStyle = styled.div<{
  inputCount: number
}>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;

  p {
    width: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    color: ${COLORS.c1b1b1b};
    font-weight: ${FONTWEGHT.fw700};
    display: flex;
    justify-content: space-between;
  }

  select {
    border: 1px solid ${COLORS.cddd};
    height: 38px;
    padding: 0 15px;
  }

  ${({ inputCount }) => handleInputCount(inputCount)}
`

const handleInputCount = (inputCount: number) => {
  switch (inputCount) {
    case 1:
      return `
        select {
          width:100%;
        }
      `
    case 2:
      return `
        select{
          width:50%;
        }
      `
    case 3:
      return `
        select {
          width:33.3333%;
        }
      `
  }
}

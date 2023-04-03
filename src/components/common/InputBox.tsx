import { COLORS, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface IInputBox {
  inputCount?: number
  title?: string
  children?: React.ReactNode
}

const InputBox = ({ inputCount = 1, title, children }: IInputBox) => {
  return (
    <CheckBoxStyle inputCount={inputCount}>
      <p>{title}</p>
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
    position: absolute;
    top: -20px;
    left: 0;
    color: ${COLORS.c1b1b1b};
    font-weight: ${FONTWEGHT.fw700};
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

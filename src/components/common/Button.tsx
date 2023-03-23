import COLORS from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface IButton {
  buttonType: string
  width?: string
  height?: string
  children?: React.ReactNode
}

const Button = ({ buttonType = '', width = '', height = '', children }: IButton) => {
  return (
    <ButtonStyle buttonType={buttonType} width={width} height={height}>
      {children}
    </ButtonStyle>
  )
}

export default Button

export const ButtonStyle = styled.button<{
  buttonType: string
  width: string
  height: string
}>`
  ${({ buttonType }) => handleButtonType(buttonType)}
  width:${({ width }) => width};
  height: ${({ height }) => height};
`

const handleButtonType = (buttonType: string) => {
  switch (buttonType) {
    case 'skyBlue':
      return `
        border: 1px solid ${COLORS.primary};
        color:${COLORS.primary};
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
        }
      `
    case 'transparent':
      return `
        width:auto;
        height:auto;
        background:transparent;
        border:none;
      `
    default:
      return `
        width: 180px;
        height: 50px;
        border: 1px solid ${COLORS.primary};
        color:${COLORS.primary};
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
        }
      `
  }
}

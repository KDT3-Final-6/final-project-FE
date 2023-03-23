import COLORS from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface Props {
  buttonType: string
  width?: string
  height?: string
  children?: React.ReactNode
}

const RoundButton = ({ buttonType = '', width = '', height = '', children }: Props) => {
  return (
    <ButtonStyle buttonType={buttonType} width={width} height={height}>
      {children}
    </ButtonStyle>
  )
}

export default RoundButton

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
        background-color: ${COLORS.primary};
        color: ${COLORS.white};
        border-radius: 300px;
        cursor: pointer;
        border: none;
        &:hover {
          border: 1px solid ${COLORS.primary};
          color:${COLORS.primary};
          background-color: transparent;
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
        width: 140px;
        height: 42px;
        border: 1px solid ${COLORS.primary};
        color:${COLORS.primary};
        background-color: transparent;
        border-radius: 300px;
        cursor: pointer;
        &:hover {
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
        }
      `
  }
}

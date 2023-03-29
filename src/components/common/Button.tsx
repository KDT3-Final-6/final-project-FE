import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface IButton {
  buttonType?: string
  width?: string
  height?: string
  borderRadius?: string
  margin?: string
  padding?: string
  bgColor?: string
  color?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  buttonType = '',
  width = '',
  height = '42px',
  borderRadius = '',
  margin = '',
  padding = '',
  bgColor = '',
  color = '',
  children,
  onClick,
}: IButton) => {
  return (
    <ButtonStyle
      buttonType={buttonType}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button

export const ButtonStyle = styled.button<{
  buttonType: string
  width: string
  height: string
  borderRadius: string
  margin: string
  padding: string
  bgColor: string
  color: string
}>`
  ${({ buttonType }) => handleButtonType(buttonType)}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 15px;
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
    case 'gray':
      return `
        background:${COLORS.cbcbcbc};
        color:${COLORS.white};

        &:hover {
          background-color:${COLORS.c7c7c7c};
        }
      `
    case 'transparent':
      return `
        border:none;
        background-color: transparent;
      `
    case 'borderGray':
      return `
        border:1px solid ${COLORS.ce2e2e2};
        background-color:transparent;
        color:${COLORS.c878787};
        padding:11.5px 58px;
        font-size:${FONTSIZE.fz16};
        font-weight:${FONTWEGHT.fw700};
      `
    case 'disable':
      return `
        border:none;
        background-color:${COLORS.ce2e2e2};
        color:${COLORS.c878787};
        padding:11.5px 58px;
        font-size:${FONTSIZE.fz16};
        font-weight:${FONTWEGHT.fw700};
        cursor:default;
      `
    case 'cartGray':
      return `
        border: 1px solid ${COLORS.ce2e2e2};
        background-color: transparent;
        color: #404040;
        width: 140px;
        height: 42px;
      `
    case 'cartSkyBlue':
      return ` 
      border: none;
      background-color: ${COLORS.primary};
      color: ${COLORS.white}
      width: 140px;
      height: 42px;
      &:hover {
        color: ${COLORS.primary};
        border: 1px solid ${COLORS.primary};
        background-color: transparent;
      }
      `
    case 'detail':
      return `
        border: 1px solid ${COLORS.black};
        color: ${COLORS.black};
        border-radius: 3px;
        &:hover {
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
          border: none;
        }
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

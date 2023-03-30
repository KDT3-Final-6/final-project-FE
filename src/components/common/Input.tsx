import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Button from './Button'
import { COLORS, FONTSIZE } from '@src/styles/root'

interface IInput {
  inputType: string
  type?: string
  placeholder?: string
  title?: string
  width?: string
  height?: string
  borderRadius?: string
  bgColor?: string
  borderColor?: string
  children?: React.ReactNode
}

const Input = ({
  inputType = '',
  type = 'text',
  placeholder,
  title,
  width = '',
  height = '',
  borderRadius = '8px',
  borderColor = '',
  bgColor = `${COLORS.cf3f3f3}`,
  children,
}: IInput) => {
  return (
    <InputStyle
      inputType={inputType}
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {/* <p>{title}</p> */}
      <input type={type} placeholder={placeholder} />
      {inputType === 'searchInput' && (
        <Button buttonType="transparent" width="50px" height="100%">
          <FiSearch />
        </Button>
      )}
      {children}
    </InputStyle>
  )
}

export default Input

const InputStyle = styled.div<{
  inputType: string
  width: string
  height: string
  borderRadius: string
  bgColor: string
  borderColor: string
}>`
  ${({ inputType, borderRadius, bgColor, borderColor }) =>
    handleInputType(inputType, borderRadius, bgColor, borderColor)}
  width:${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;

  p {
    position: absolute;
    top: -20px;
    left: 0;
    color: ${COLORS.c1b1b1b};
  }
`

const handleInputType = (
  inputType: string,
  borderRadius: string,
  bgColor: string,
  borderColor: string
) => {
  switch (inputType) {
    case 'searchInput':
      return `
        background:${bgColor};
        border-radius:${borderRadius};
        border:1px solid ${borderColor};
        position:relative;

        input {
          padding:15px 19px;
        }

        button {
          position:absolute;
          right:0;

          svg {
            display:flex;
            color:${COLORS.c646161};
            font-size:${FONTSIZE.fz22};
          }
        }
      `
    case 'textInput':
      return `
        border:1px solid ${COLORS.cddd};
        width:100%;
        height:46px;

        input {
          padding:14px 30px;

          &::placeholder {
            color:${COLORS.ca6a6a6};
          }
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
        background-color: transparent;
      `
  }
}

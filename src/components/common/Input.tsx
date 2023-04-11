import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Button from './Button'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { ErrorMessage } from './InputItem'

interface IInput {
  inputType: string
  type?: string
  placeholder?: string
  title?: string
  width?: string
  height?: string
  isDisabled?: boolean
  borderRadius?: string
  bgColor?: string
  borderColor?: string
  children?: React.ReactNode
  register?: object
  ariaInvalid?: boolean
  minLength?: number
  maxLength?: number
}

const Input = ({
  inputType = '',
  type = 'text',
  placeholder,
  width = '',
  height = '',
  borderRadius = '8px',
  borderColor = '',
  bgColor = `${COLORS.cf3f3f3}`,
  isDisabled = false,
  children,
  register,
  ariaInvalid,
  minLength,
  maxLength,
}: IInput) => {
  return (
    <InputStyle
      inputType={inputType}
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      borderColor={borderColor}
      isDisabled={isDisabled}
    >
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        {...register}
        aria-invalid={ariaInvalid}
        minLength={minLength}
        maxLength={maxLength}
      />
      {inputType === 'searchInput' && (
        <Button type="submit" buttonType="transparent" width="50px" height="100%">
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
  isDisabled: boolean
}>`
  ${({ inputType, borderRadius, bgColor, borderColor }) =>
    handleInputType(inputType, borderRadius, bgColor, borderColor)}
  width:${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;

  input {
    font-size: ${FONTSIZE.fz16};
  }

  input::placeholder {
    color: ${({ isDisabled }) => isDisabled && COLORS.c909090};
    font-weight: ${({ isDisabled }) => isDisabled && 'bold'};
  }

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
    case 'searchFilterInput':
      return `
        background:${bgColor};
        border-radius:${borderRadius};
        border:1px solid ${borderColor};
        border-left:1px solid transparent;
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
    case 'disabledInput':
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

        input:disabled {
          background-color:${COLORS.cededed};
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

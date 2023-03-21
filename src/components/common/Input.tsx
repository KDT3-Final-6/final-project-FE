import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Button from './Button'
import COLORS from '@src/styles/root'

interface Props {
  inputType: string
  type: string
  placeholder?: string
  width?: string
  height?: string
}

const Input = ({ inputType = '', type = 'text', placeholder, width = '', height = '' }: Props) => {
  return (
    <InputStyle inputType={inputType} width={width} height={height}>
      <input type={type} placeholder={placeholder} />
      {inputType === 'searchInput' && (
        <Button buttonType="transparent" width="50px" height="100%">
          <FiSearch />
        </Button>
      )}
    </InputStyle>
  )
}

export default Input

const InputStyle = styled.div<{
  inputType: string
  width: string
  height: string
}>`
  ${({ inputType }) => handleInputType(inputType)}
  width:${({ width }) => width};
  height: ${({ height }) => height};
`

const handleInputType = (inputType: string) => {
  switch (inputType) {
    case 'searchInput':
      return `
        background:${COLORS.searchGrey};
        border-radius:8px;
        position:relative;

        input {
          padding:15px 19px;
        }

        button {
          position:absolute;
          right:0;

          svg {
            display:flex;
            color:${COLORS.darkGrey};
            font-size:22px;
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

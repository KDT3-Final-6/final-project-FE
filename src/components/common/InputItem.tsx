import { COLORS, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import { HighlightSpanStyle } from './Title'

interface IInputItem {
  inputType?: string
  type?: string
  title: string
  placeholder: string
  color?: string
  highlight?: string
  isDisabled?: boolean
  register?: object
  ariaInvalid?: boolean
  errorMessage?: string
}

const InputItem = ({
  inputType = 'textInput',
  type,
  title,
  placeholder,
  color = COLORS.c3ba1ff,
  highlight = '(필수입력)',
  isDisabled = false,
  register,
  ariaInvalid = false,
  errorMessage = '',
}: IInputItem) => {
  return (
    <Input
      inputType={inputType}
      type={type}
      placeholder={placeholder}
      isDisabled={isDisabled}
      register={register}
      ariaInvalid={ariaInvalid}
    >
      <PAlignStyle>
        {title} {!isDisabled && <HighlightSpanStyle color={color}>{highlight}</HighlightSpanStyle>}
      </PAlignStyle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Input>
  )
}

export default InputItem

const PAlignStyle = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${FONTWEGHT.fw700};

  ${HighlightSpanStyle} {
    font-weight: ${FONTWEGHT.fw500};
  }
`

export const ErrorMessage = styled.span`
  color: red;
  font-weight: ${FONTWEGHT.fw400};
  margin-top: 5px;
  display: block;
`

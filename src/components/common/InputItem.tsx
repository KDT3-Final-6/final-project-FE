import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import { HighlightSpanStyle } from './Title'

interface IInputItem {
  inputType?: string
  title: string
  placeholder: string
  color?: string
  highlight?: string
  disabled?: boolean
}

const InputItem = ({
  inputType = 'textInput',
  title,
  placeholder,
  color = COLORS.c3ba1ff,
  highlight = '(필수입력)',
  disabled = false,
}: IInputItem) => {
  return (
    <Input inputType={inputType} placeholder={placeholder} disabled={disabled}>
      <PAlignStyle>
        {title} {!disabled && <HighlightSpanStyle color={color}>{highlight}</HighlightSpanStyle>}
      </PAlignStyle>
    </Input>
  )
}

export default InputItem

const PAlignStyle = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

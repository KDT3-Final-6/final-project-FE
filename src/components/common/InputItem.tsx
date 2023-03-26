import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import { HightlightSpanStyle } from './Title'

interface IInputItem {
  inputType?: string
  title: string
  placeholder: string
  color?: string
  hightlight?: string
}

const InputItem = ({
  inputType = 'textInput',
  title,
  placeholder,
  color = COLORS.c3ba1ff,
  hightlight = '(필수입력)',
}: IInputItem) => {
  return (
    <Input inputType={inputType} placeholder={placeholder}>
      <PAlignStyle>
        {title} <HightlightSpanStyle color={color}>{hightlight}</HightlightSpanStyle>
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

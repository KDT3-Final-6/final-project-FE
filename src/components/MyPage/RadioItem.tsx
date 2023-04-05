import React, { useState } from 'react'
import styled from 'styled-components'
import { BsCheck } from 'react-icons/bs'

interface IRadioItem {
  name: string
  id: number
  isChecked: boolean
  onChange: (name: string, id: number) => void
}

const RadioItem = ({ name, id, isChecked, onChange }: IRadioItem) => {
  const handleClick = () => {
    if (!isChecked) {
      onChange(name, id)
    }
  }
  return (
    <ItemStyle>
      <RatioBtnStyle isChecked={isChecked} onClick={handleClick}>
        <BsCheck />
      </RatioBtnStyle>
      <LabelStyle>{name}</LabelStyle>
    </ItemStyle>
  )
}

export default RadioItem

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #bebebe;
  padding: 12px;
`

const RatioBtnStyle = styled.div<{ isChecked: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid #4b4a4a;
  svg {
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
    position: absolute;
    top: -2px;
    left: -1px;
    font-size: 25px;
    margin: 0;
  }
`
const LabelStyle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 31px;
`

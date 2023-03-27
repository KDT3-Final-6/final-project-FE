import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'

const Select = () => {
  const [currentValue, setCurrentValue] = useState('인기순')
  const [showOptions, setShowOptions] = useState(false)

  console.log(showOptions)

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.target as HTMLLIElement
    setCurrentValue(innerText)
  }
  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        <Option onClick={(e) => handleOnChangeSelectValue(e)}>인기순</Option>
        <Option onClick={(e) => handleOnChangeSelectValue(e)}>가격높은순</Option>
        <Option onClick={(e) => handleOnChangeSelectValue(e)}>가격낮은순</Option>
      </SelectOptions>
    </SelectBox>
  )
}

export default Select

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 108px;
  height: 43px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.white};
  cursor: pointer;
  border: 1px solid ${COLORS.cb6b6b6};
  &::before {
    content: '⌵';
    position: absolute;
    top: 1px;
    right: 16px;
  }
  &:hover {
    background-color: ${COLORS.cf6f6f6};
  }
`

const Label = styled.label`
  font-size: ${FONTSIZE.fz14};
`

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: -1px;
  left: -1px;
  width: 100%;
  overflow: hidden;
  height: 129px;
  max-height: ${({ show }: { show: boolean }) => (show ? 'none' : '0')};
  border: ${({ show }: { show: boolean }) => (show ? `1px solid ${COLORS.cb6b6b6}` : 'none')};
  border-radius: 8px;
  background-color: ${COLORS.white};
  z-index: 10;
  box-sizing: content-box;
`

const Option = styled.li`
  font-size: ${FONTSIZE.fz14};
  width: 108px;
  height: 43px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLORS.cf6f6f6};
  }
`

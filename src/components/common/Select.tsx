import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '../hooks/useOnClickOutside'

const Select = () => {
  const [currentValue, setCurrentValue] = useState('인기순')
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShowOptions(false))

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.target as HTMLLIElement
    setCurrentValue(innerText)
  }
  return (
    <SelectBoxStyle onClick={() => setShowOptions((prev) => !prev)}>
      <LabelStyle>{currentValue}</LabelStyle>
      <SelectOptionsStyle show={showOptions} ref={ref}>
        <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>인기순</OptionStyle>
        <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>가격높은순</OptionStyle>
        <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>가격낮은순</OptionStyle>
      </SelectOptionsStyle>
    </SelectBoxStyle>
  )
}

export default Select

const SelectBoxStyle = styled.div`
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

const LabelStyle = styled.label`
  font-size: ${FONTSIZE.fz14};
`

const SelectOptionsStyle = styled.ul`
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

const OptionStyle = styled.li`
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

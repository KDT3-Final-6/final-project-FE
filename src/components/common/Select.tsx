import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '@src/hooks/useOnClickOutside'

interface ISelect {
  options: string[] | number[]
  initial: string | number
  value?: string | number
  unit?: any
  width?: string
  height?: string
  borderRadius?: string
  borderColor?: string
  isClickDefault?: boolean
  onChange?: React.ChangeEventHandler<HTMLLIElement>
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

const Select = ({
  options,
  initial,
  value,
  unit,
  width = '128px',
  height = '43px',
  borderRadius = '8px',
  borderColor = COLORS.cb6b6b6,
  isClickDefault = true,
  onChange,
  onClick,
}: ISelect) => {
  const [currentValue, setCurrentValue] = useState(initial)
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShowOptions(false))

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.target as HTMLLIElement
    setCurrentValue(innerText)
  }

  return (
    <SelectBoxStyle
      width={width}
      height={height}
      borderRadius={borderRadius}
      borderColor={borderColor}
      isClickDefault={isClickDefault}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <LabelStyle>
        {currentValue} {!currentValue.toString().includes(unit) && unit}
      </LabelStyle>
      <SelectOptionsStyle
        show={showOptions}
        ref={ref}
        borderRadius={borderRadius}
        borderColor={borderColor}
      >
        {/* <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>인기순</OptionStyle>
        <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>가격높은순</OptionStyle>
        <OptionStyle onClick={(e) => handleOnChangeSelectValue(e)}>가격낮은순</OptionStyle> */}
        {options.map((option) => (
          <OptionStyle
            width={width}
            height={height}
            key={option}
            value={value}
            onClick={isClickDefault ? (e) => handleOnChangeSelectValue(e) : onClick}
            onChange={onChange}
          >
            {option} {unit}
          </OptionStyle>
        ))}
      </SelectOptionsStyle>
    </SelectBoxStyle>
  )
}

export default Select

const SelectBoxStyle = styled.div<{
  isClickDefault: boolean
  borderColor: string
  borderRadius: string
  width: string
  height: string
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 16px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${COLORS.white};
  cursor: pointer;
  border: 1px solid ${({ borderColor }) => borderColor};
  &::before {
    content: '⌵';
    position: absolute;
    top: 42%;
    right: 16px;
    transform: translateY(-50%);
  }
  &:hover {
    background-color: ${COLORS.cf6f6f6};
  }
`

const LabelStyle = styled.label`
  font-size: ${FONTSIZE.fz14};
  cursor: pointer;
`

const SelectOptionsStyle = styled.ul<{
  show: boolean
  borderColor: string
  borderRadius: string
}>`
  position: absolute;
  list-style: none;
  top: -1px;
  left: -1px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  /* height: 129px; */
  max-height: ${({ show }) => (show ? '300px' : '0')};
  border: ${({ show }) => (show ? `1px solid ${COLORS.cb6b6b6}` : 'none')};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${COLORS.white};
  z-index: 10;
  box-sizing: content-box;
`

const OptionStyle = styled.li<{
  width: string
  height: string
}>`
  font-size: ${FONTSIZE.fz14};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLORS.cf6f6f6};
  }
`

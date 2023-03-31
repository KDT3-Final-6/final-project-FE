import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '@src/hooks/useOnClickOutside'

interface ISelect {
  options?: string[] | number[]
  initial?: string | number
  value?: string | number
  unit?: any
  width?: string
  height?: string
  borderRadius?: string
  borderColor?: string
  fontSize?: string
  arrowImg?: string
  topPosition?: string
  isClickDefault?: boolean
  isDisabled?: boolean
  type?: string
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
  isDisabled = false,
  fontSize = '14px',
  topPosition = '48%',
  arrowImg = '/images/icons/bottom-arrow2.png',
  type = '',
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
      show={showOptions}
      arrowImg={arrowImg}
      topPosition={topPosition}
      type={type}
      isClickDefault={isClickDefault}
      isDisabled={isDisabled}
      onClick={() => !isDisabled && setShowOptions((prev) => !prev)}
    >
      <LabelStyle fontSize={fontSize} isDisabled={isDisabled}>
        {currentValue} {!currentValue?.toString().includes(unit) && unit}
      </LabelStyle>
      <SelectOptionsStyle
        show={showOptions}
        ref={ref}
        borderRadius={borderRadius}
        borderColor={borderColor}
      >
        {options?.map((option) => (
          <OptionStyle
            width={width}
            height={height}
            fontSize={fontSize}
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
  isDisabled: boolean
  show: boolean
  arrowImg: string
  topPosition: string
  type: string
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 16px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ isDisabled }) => (isDisabled ? COLORS.cededed : COLORS.white)};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-color: ${({ show, borderColor }) => (show ? 'transparent' : borderColor)};
  /* border-right: 1px solid transparent; */
  border-right: 1px solid
    ${({ type, borderColor }) => (type === 'searchFilterInput' ? 'transparent' : borderColor)};
  &::before {
    content: '';
    background-image: ${({ arrowImg }) => `url(${arrowImg})`};
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    top: ${({ topPosition }) => topPosition};
    right: 16px;
    transform: translateY(-50%);
    font-size: 30px;
  }
  &:hover {
    background-color: ${({ isDisabled }) => !isDisabled && COLORS.cf6f6f6};
  }
`

const LabelStyle = styled.label<{
  fontSize: string
  isDisabled: boolean
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ isDisabled }) => isDisabled && COLORS.caeaeae};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
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
  fontSize: string
}>`
  /* font-size: ${FONTSIZE.fz14}; */
  font-size: ${({ fontSize }) => fontSize};
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

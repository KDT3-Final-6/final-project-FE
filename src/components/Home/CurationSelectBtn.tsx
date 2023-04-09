import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '@src/hooks/useOnClickOutside'
import { IProductOption } from '@src/interfaces/product'

interface Ioption {
  id: number
  icon: string
  value: string
  arrow?: string
}

interface ISelect {
  options?: any
  value?: string | number
  width?: string
  height?: string
  borderRadius?: string
  borderColor?: string
  fontSize?: string
  isClickDefault?: boolean
  isDisabled?: boolean
  type?: string
  selectValue?: string
  currentValue: Ioption
  setCurrentValue: any
  onChange?: React.ChangeEventHandler<HTMLLIElement>
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

const CurationSelectBtn = ({
  options,
  width = '190px',
  height = '51px',
  borderRadius = '5px',
  borderColor = COLORS.cb6b6b6,
  isClickDefault = true,
  isDisabled = false,
  fontSize = '14px',
  type = '',
  currentValue,
  setCurrentValue,
  onChange,
  onClick,
}: ISelect) => {
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShowOptions(false))

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedOption = options.find(
      (option: Ioption) => option.id === Number(e.currentTarget.getAttribute('value'))
    )
    setCurrentValue(clickedOption)
  }

  return (
    <SelectBoxStyle
      width={width}
      height={height}
      borderRadius={borderRadius}
      borderColor={borderColor}
      show={showOptions}
      type={type}
      isClickDefault={isClickDefault}
      isDisabled={isDisabled}
      onClick={() => !isDisabled && setShowOptions((prev) => !prev)}
    >
      <LabelStyle fontSize={fontSize} isDisabled={isDisabled}>
        <ImageBoxStyle>
          <img src={currentValue.icon} />
          <span>{currentValue.value}</span>
        </ImageBoxStyle>

        <ArrowStyle>
          {currentValue.arrow && <img src={currentValue.arrow} alt="arrow" />}
        </ArrowStyle>
      </LabelStyle>
      <SelectOptionsStyle
        ref={ref}
        show={showOptions}
        borderRadius={borderRadius}
        borderColor={borderColor}
      >
        {options?.map((option: any) => (
          <OptionStyle
            width={width}
            height={height}
            fontSize={fontSize}
            key={option.id}
            value={option.id}
            onClick={isClickDefault ? handleOnChangeSelectValue : onClick}
            onChange={onChange}
          >
            <ImageBoxStyle>
              <img src={option.icon} alt={option.value} />
              <span>{option.value}</span>
            </ImageBoxStyle>

            <ArrowStyle>{option.arrow && <img src={option.arrow} alt="arrow" />}</ArrowStyle>
          </OptionStyle>
        ))}
      </SelectOptionsStyle>
    </SelectBoxStyle>
  )
}

export default CurationSelectBtn

const SelectBoxStyle = styled.div<{
  isClickDefault: boolean
  borderColor: string
  borderRadius: string
  width: string
  height: string
  isDisabled: boolean
  show: boolean
  type: string
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ isDisabled }) => (isDisabled ? COLORS.cededed : COLORS.white)};
  margin-left: 40px;
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
  &:hover {
    box-shadow: ${COLORS.boxShowdow};
  }
`

const LabelStyle = styled.label<{
  fontSize: string
  isDisabled: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ isDisabled }) => isDisabled && COLORS.caeaeae};
  font-weight: 500;
  line-height: 150%;
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
`

const ImageBoxStyle = styled.div`
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  span {
    margin-left: 6px;
  }
`

const ArrowStyle = styled.div`
  width: 17%;
  display: flex;
  align-items: center;
  img {
    width: 19px;
    height: 10px;
  }
`

const SelectOptionsStyle = styled.ul<{
  show: boolean
  borderColor: string
  borderRadius: string
}>`
  position: absolute;
  list-style: none;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${({ show }) => (show ? '300px' : '0')};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${COLORS.white};
  z-index: 10;
  box-sizing: content-box;
  box-shadow: ${COLORS.boxShowdow};
`

const OptionStyle = styled.li<{
  width: string
  height: string
  fontSize: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  color: rgba(21, 21, 21, 0.2);
  font-weight: 500;
  line-height: 150%;
  &:hover {
    background-color: ${COLORS.cf6f6f6};
    color: rgba(21, 21, 21);
  }
`

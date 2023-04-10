import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '@src/hooks/useOnClickOutside'
interface Option {
  id: number
  value: string
  bottomArrow: string
  topArrow: string
  children: ChildOption[]
}

interface ChildOption {
  id: number
  value: string
}

interface IFilterSelect {
  options: Option[]
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
  currentValue: any
  setCurrentValue: any
  setInquiryType: any
  inquiryType: string | null
  setQnAStatus: any
  qnAStatus: string | null
  onChange?: React.ChangeEventHandler<HTMLLIElement>
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

const FilterSelect = ({
  options,
  width = '190px',
  height = '100%',
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
}: IFilterSelect) => {
  const [showOptions, setShowOptions] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShowOptions(false))

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedOption = options.find(
      (option: any) => option.id === Number(e.currentTarget.getAttribute('value'))
    )
    console.log('clickedOption', clickedOption)

    const { innerText } = e.target as HTMLLIElement
    console.log('innerText', innerText)

    setCurrentValue(innerText)
  }

  const handleOpenStatus = () => {
    setShowStatus((prev) => !prev)
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
      // onClick={() => !isDisabled && setShowOptions((prev) => !prev)}
    >
      <LabelStyle fontSize={fontSize} isDisabled={isDisabled}>
        <span>{currentValue}</span>
        <img src="/images/icons/bottom-arrow1.png" alt="arrow" />
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
            // onClick={isClickDefault ? () => {} : onClick}
            onClick={handleOpenStatus}
            onChange={onChange}
          >
            <span>{option.value}</span>
            <img src={option.bottomArrow} alt={option.value} />
            <StatusboxStyle showStatus={showStatus}>
              {option.children?.map((item: any) => (
                <ChildrenItem key={item.id}>{item.value}</ChildrenItem>
              ))}
            </StatusboxStyle>
          </OptionStyle>
        ))}
      </SelectOptionsStyle>
    </SelectBoxStyle>
  )
}

export default FilterSelect

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
  width: 126px;
  height: 56px;
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ isDisabled }) => (isDisabled ? COLORS.cededed : COLORS.white)};
  margin-left: 40px;
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
`

const LabelStyle = styled.label<{
  fontSize: string
  isDisabled: boolean
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  gap: 18px;
  width: 100%;
  height: 56px;
  color: ${({ isDisabled }) => isDisabled && COLORS.caeaeae};
  border: 1px solid #999999;
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  img {
    position: absolute;
    right: 18px;
    top: 12px;
    width: 24px;
    height: 24px;
  }
`

const SelectOptionsStyle = styled.ul<{
  show: boolean
  borderColor: string
  borderRadius: string
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  list-style: none;
  top: 56px;
  left: 0;
  width: 126px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${({ show }) => (show ? '1000px' : '0')};
  border-radius: 4px;
  border: ${({ show }) => (show ? '1px solid #999999' : 'none')};
  background-color: ${COLORS.white};
  z-index: 10;
`

const OptionStyle = styled.li<{
  width: string
  height: string
  fontSize: string
}>`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 6px 5px 6px 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  color: #7c7c7c;
  font-size: 16px;
  line-height: 19px;
  &:hover {
    background-color: ${COLORS.cf6f6f6};
    color: rgba(21, 21, 21);
  }
  img {
    position: absolute;
    right: 18px;
    top: 2px;
    width: 24px;
    height: 24px;
  }
`

const StatusboxStyle = styled.div<{ showStatus: boolean }>`
  position: absolute;
  left: 0;
  top: 32px;
  display: ${({ showStatus }) => (showStatus ? 'block' : 'none')};
  max-height: ${({ showStatus }) => (showStatus ? '1000px' : '0')};
  height: 100px;
  width: 126px;
  background-color: red;
`

const ChildrenItem = styled.div`
  width: 100%;
  height: 32px;
  background-color: red;
`

import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import { UseFormRegister } from 'react-hook-form'
import { boolean } from 'yup'

interface TInputValues {
  paymentMethod?: string
}

interface ICheckItem {
  checkType?: string
  type?: string
  id: string
  name?: string // Path<TInputValues>;
  labelName: string
  width?: string
  color?: string
  bgColor?: string
  fontSize?: string
  register?: any //UseFormRegister<TInputValues>;
  errorMsg?: string
  isChecked?: boolean
  isDisable?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckItem = ({
  checkType = 'checkbox',
  type = 'checkbox',
  id,
  labelName,
  name,
  width = '',
  color = '',
  bgColor = COLORS.cbe4b4b,
  register,
  errorMsg,
  isChecked = false,
  isDisable = false,
  onChange,
}: ICheckItem) => {
  return (
    <ItemStyle
      checkType={checkType}
      width={width}
      color={color}
      bgColor={bgColor}
      isChecked={isChecked}
      isDisable={isDisable}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={id}
        defaultChecked={isChecked}
        disabled={isDisable}
        onChange={onChange}
        {...(register &&
          register(name, {
            required: errorMsg,
          }))}
      />
      <label htmlFor={id}>{labelName}</label>
    </ItemStyle>
  )
}

export default CheckItem

const ItemStyle = styled.div<{
  checkType: string
  width: string
  color: string
  bgColor: string
  isChecked: boolean
  isDisable: boolean
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  label {
    cursor: ${({ isDisable }) => !isDisable && 'pointer'};
    padding-left: 6px;
    color: ${COLORS.c1b1b1b};
  }
  ${({ checkType, width, bgColor, isChecked, isDisable, color }) =>
    handleCheckItem(checkType, width, bgColor, isChecked, isDisable, color)}
`

const handleCheckItem = (
  checkType: string,
  width: string,
  bgColor: string,
  isChecked: boolean,
  isDisabled: boolean,
  color: string
) => {
  switch (checkType) {
    case 'checkbox':
    case 'radio':
      return `
        input {
        width: 20px;
        height: 20px;
        cursor: ${!isDisabled && 'pointer'};
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        outline: none;
        content: none;
        position: relative;

        &::before {
          content: '✔';
          width: 100%;
          height: 100%;
          color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid ${COLORS.cddd};
          position: absolute;
          top: 0;
          left: 0;
        }

        &[type="checkbox"]::before {
          border-radius:4px;
        }

        &[type="radio"]::before {
          border-radius:50px;
        }

        &:checked::before {
          background-color: ${isDisabled ? COLORS.caeaeae : COLORS.primary};
          color: ${COLORS.white};
          border: none;
        }
      }

      label {
        display:flex;
        align-items:center;
      }
    `
    case 'radio':
      return `
        input {
          width:auto;
          height:auto;
        }
      `
    case 'tabType':
      return `
        position:relative;
        
        input {
        width: ${width};
        height: 48px;
        cursor: pointer;
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        outline: none;
        position: relative;

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          color: transparent;
          border: 1px solid ${COLORS.cddd};
          position: absolute;
          top: 0;
          left: 0;
          border-radius:10px;
        }

        &:checked::before {
          background-color: ${bgColor};
          color: ${COLORS.white};
          border: none;
          display:flex;
          align-items:center;
        }

        &:checked ~ label {
          color:${COLORS.white};
        }
      }

      label {
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        padding-left:0;
      }

      `
    case 'paymentType':
      return `
        position:relative;

        input {
        width: ${width};
        height: 57px;
        cursor: pointer;
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        outline: none;
        position: relative;

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          color: transparent;
          border: 1px solid ${COLORS.cddd};
          position: absolute;
          top: 0;
          left: 0;
          border-radius:10px;
          display: flex;
          align-items: center;
        }

        &:checked::before {
          background-color: ${bgColor};
          color: ${COLORS.white};
          border: none;
        }

        &:checked ~ label {
          color:${COLORS.white};
        }
      }

      label {
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        padding-left:0;
        width:100%;
        font-size: ${FONTSIZE.fz20};
        font-weight:${FONTWEGHT.fw600};
      }

      `
    case 'districtTab':
      return `
        position: relative;
        input {
          display: none;
        }
        label {
          height: 57px;
          width: 100%;
          padding: 14px 20px;
          cursor: pointer;
          font-weight: ${FONTWEGHT.fw600};
          font-size: ${FONTSIZE.fz24};
          border: 1px solid ${COLORS.cddd};
          border-radius:10px;
          display: flex;
          align-items: center;
        }
        input:checked + label {
          background-color: ${bgColor};
          color: ${color};
          border: 1px solid ${bgColor};
        }
      `
    case 'rectType':
      return `
        input {
        width: 24px;
        height: 24px;
        cursor: ${!isDisabled && 'pointer'};
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        outline: none;
        content: none;
        position: relative;

        &::before {
          content: '✔';
          width:100%;
          height: 100%;
          font-size:15px;
          color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid ${COLORS.c4b4a4a};
          position: absolute;
          top: 0;
          left: 0;
        }

        &[type="checkbox"]::before {
          border-radius:4px;
        }

        &[type="radio"]::before {
          border-radius:2px;
        }

        &:checked::before {
          background-color: transparent;
          color: ${COLORS.white};
          border:1px solid ${COLORS.c4b4a4a};
        }
      }

      label {
        display:flex;
        align-items:center;
      }
    `
  }
}

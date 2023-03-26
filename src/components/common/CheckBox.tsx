import { COLORS, FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ICheckBox {
  id?: string
  children?: React.ReactNode
}

const CheckBox = ({ id, children }: ICheckBox) => {
  return (
    <CheckBoxStyle>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{children}</label>
    </CheckBoxStyle>
  )
}

export default CheckBox

const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
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
      display: block;
      font-size: ${FONTSIZE.fz16};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      border: 1px solid ${COLORS.cddd};
      position: absolute;
      top: 0;
      left: 0;
    }

    &:checked::before {
      background-color: ${COLORS.primary};
      color: ${COLORS.white};
      border: none;
    }
  }

  label {
    cursor: pointer;
    padding-left: 6px;
    font-size: ${FONTSIZE.fz12};
    color: ${COLORS.c1b1b1b};
  }
`

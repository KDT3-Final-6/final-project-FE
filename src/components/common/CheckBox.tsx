import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { color } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

interface ICheckBox {
  checkboxType: string
  id?: string
  title?: string
  name?: string
  labelName?: string
  children?: React.ReactNode
}

const CheckBox = ({ checkboxType, title, name, labelName, children }: ICheckBox) => {
  return (
    <CheckBoxStyle checkboxType={checkboxType}>
      <p>{title}</p>
      {children}
    </CheckBoxStyle>
  )
}

export default CheckBox

const CheckBoxStyle = styled.div<{
  checkboxType: string
}>`
  display: flex;
  align-items: center;
  position: relative;

  label {
    cursor: pointer;
    padding-left: 6px;
    color: ${COLORS.c1b1b1b};
  }
  ${({ checkboxType }) => handleCheckbox(checkboxType)}
`

const handleCheckbox = (checkboxType: string) => {
  switch (checkboxType) {
    case 'checkbox':
    case 'radio':
      return `
        p {
          color:${COLORS.c1b1b1b};
        }

        input {
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
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
          border: none;
        }
      }

      p {
        position:absolute;
        top:-20px;
        left:0;
      }

      label {
        display:flex;
        align-items:center;
      }
    `
    case 'radio':
      return `
        p {
          position:absolute;
          top:-20px;
          left:0;
          padding-left:0;
        }

        input {
          width:auto;
          height:auto;
        }
      `
  }
}

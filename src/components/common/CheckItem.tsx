import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ICheckItem {
  type?: string
  id: string
  name?: string
  labelName: string
}

const CheckItem = ({ type = 'checkbox', id, labelName, name }: ICheckItem) => {
  return (
    <ItemStyle type={type}>
      <input type={type} id={id} name={name} />
      <label htmlFor={id}>{labelName}</label>
    </ItemStyle>
  )
}

export default CheckItem

const ItemStyle = styled.div<{
  type: string
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  label {
    cursor: pointer;
    padding-left: 6px;
    color: ${COLORS.c1b1b1b};
  }
  ${({ type }) => handleCheckItem(type)}
`

const handleCheckItem = (type: string) => {
  switch (type) {
    case 'radio':
    case 'checkbox':
      return `
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
  }
}

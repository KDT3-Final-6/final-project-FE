import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ICheckItem {
  checkType?: string
  type?: string
  id: string
  name?: string
  labelName: string
  width?: string
}

const CheckItem = ({
  checkType = 'checkbox',
  type = 'checkbox',
  id,
  labelName,
  name,
  width = '',
}: ICheckItem) => {
  return (
    <ItemStyle checkType={checkType} width={width}>
      <input type={type} id={id} name={name} />
      <label htmlFor={id}>{labelName}</label>
    </ItemStyle>
  )
}

export default CheckItem

const ItemStyle = styled.div<{
  checkType: string
  width: string
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
  ${({ checkType, width }) => handleCheckItem(checkType, width)}
`

const handleCheckItem = (checkType: string, width: string) => {
  switch (checkType) {
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
    case 'tabType':
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
        }

        &:checked::before {
          background-color: ${COLORS.cbe4b4b};
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
      }

      `
  }
}

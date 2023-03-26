import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ISelect {
  selectCount: any
  title?: string
  children: React.ReactNode
}

const Select = ({ selectCount = 1, title, children }: ISelect) => {
  return (
    <SelectStyle selectCount={selectCount}>
      {title && <p>{title}</p>}
      <SelectAlignStyle>{children}</SelectAlignStyle>
    </SelectStyle>
  )
}

export default Select

const SelectStyle = styled.div<{
  selectCount: number
}>`
  position: relative;
  ${({ selectCount }) => handleCount(selectCount)}

  p {
    position: absolute;
    top: -20px;
    left: 0;
    color: ${COLORS.c1b1b1b};
  }

  select {
    border: 1px solid ${COLORS.cddd};
    height: 38px;
    padding: 0 15px;
  }
`

const SelectAlignStyle = styled.div`
  display: flex;
  gap: 5px;
`

const handleCount = (selectCount: number) => {
  switch (selectCount) {
    case 1:
      return `
        select {
          width:100%;
        }
      `
    case 2:
      return `
        select{
          width:50%;
        }
      `
    case 3:
      return `
        select {
          width:33.3333%;
        }
      `
  }
}

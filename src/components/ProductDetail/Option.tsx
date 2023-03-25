import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

const Option = () => {
  return (
    <OptionStyle>
      <span>성인</span>
      <span>350,000원</span>
      <div style={{ display: 'flex', marginLeft: 'auto' }}>
        <ButtonStyle>-</ButtonStyle>
        <ButtonStyle>1</ButtonStyle>
        <ButtonStyle>+</ButtonStyle>
      </div>
    </OptionStyle>
  )
}

const OptionStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const ButtonStyle = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: ${FONTSIZE.fz15};
  text-align: center;
  vertical-align: middle;
`
export default Option

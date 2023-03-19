import React from 'react'
import styled from 'styled-components'

type Props = {}

const Option = (props: Props) => {
  return (
    <OptionBox>
      <span>성인</span>
      <span>350,000원</span>
      <div style={{ display: 'flex', marginLeft: 'auto' }}>
        <ButtonBox>-</ButtonBox>
        <ButtonBox>1</ButtonBox>
        <ButtonBox>+</ButtonBox>
      </div>
    </OptionBox>
  )
}

const OptionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const ButtonBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
`
export default Option

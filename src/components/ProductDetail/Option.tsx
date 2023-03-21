import React from 'react'
import styled from 'styled-components'

type Props = {}

const Option = (props: Props) => {
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
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
`
export default Option

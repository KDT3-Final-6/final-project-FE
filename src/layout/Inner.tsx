import React from 'react'
import styled from 'styled-components'

interface Prop {
  children: any
}
const Inner = ({ children }: Prop) => {
  return <InnerStyle>{children}</InnerStyle>
}

export default Inner

const InnerStyle = styled.div`
  width: 1180px;
  margin: 0 auto;
`

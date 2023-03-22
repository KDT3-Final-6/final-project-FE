import React from 'react'
import styled from 'styled-components'

interface Prop {
  title: string
}

const SecondaryTitle = ({ title }: Prop) => {
  return <SecondaryTitleStyle>{title}</SecondaryTitleStyle>
}

export default SecondaryTitle

const SecondaryTitleStyle = styled.h2`
  font-weight: 700;
  font-size: 25px;
`

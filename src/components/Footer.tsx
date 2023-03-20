import Inner from '@src/layout/Inner'
import COLORS from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface Props {}

const Footer = (props: Props) => {
  return (
    <FooterStyle>
      <Inner>Footer</Inner>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.div`
  width: 100%;
  background: ${COLORS.darkGrey};
  color: ${COLORS.white};
  padding: 50px 0;
`

import React from 'react'
import styled from 'styled-components'

interface ISection {
  children: React.ReactNode
  backgroundColor?: string
}

const Section = ({ children, backgroundColor }: ISection) => {
  return <SectionStyle backgroundColor={backgroundColor}>{children}</SectionStyle>
}

export default Section

const SectionStyle = styled.section<{
  backgroundColor?: string
}>`
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 66px;

  &:first-of-type {
    margin-top: 76px;
  }
`

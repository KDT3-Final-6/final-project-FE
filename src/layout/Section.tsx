import React from 'react'
import styled from 'styled-components'

interface ISection {
  children: React.ReactNode
  bgColor?: string
}

const Section = ({ children, bgColor }: ISection) => {
  return <SectionStyle bgColor={bgColor}>{children}</SectionStyle>
}

export default Section

const SectionStyle = styled.section<{
  bgColor?: string
}>`
  background-color: ${({ bgColor }) => bgColor};
  margin-bottom: 66px;

  &:first-of-type {
    margin-top: 76px;
  }

  &:last-of-type {
    margin-bottom: 265px;
  }
`

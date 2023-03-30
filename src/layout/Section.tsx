import React from 'react'
import styled from 'styled-components'

interface ISection {
  children: React.ReactNode
  bgColor?: string
  display?: string
  justifyContent?: string
  overflow?: string
}

const Section = ({
  children,
  bgColor,
  display = '',
  justifyContent = '',
  overflow = '',
}: ISection) => {
  return (
    <SectionStyle
      bgColor={bgColor}
      display={display}
      justifyContent={justifyContent}
      overflow={overflow}
    >
      {children}
    </SectionStyle>
  )
}

export default Section

const SectionStyle = styled.section<{
  bgColor?: string
  display: string
  justifyContent: string
  overflow: string
}>`
  background-color: ${({ bgColor }) => bgColor};
  margin-bottom: 100px;
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  overflow: ${({ overflow }) => overflow};

  &:first-of-type {
    margin-top: 76px;
  }

  &:last-of-type {
    margin-bottom: 265px;
  }
`

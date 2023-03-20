import React from 'react'
import styled from 'styled-components'

interface Prop {
  height?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  children: React.ReactNode
}
const Inner = ({
  height = '',
  display = '',
  justifyContent = '',
  alignItems = 'center',
  children,
}: Prop) => {
  return (
    <InnerStyle
      height={height}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </InnerStyle>
  )
}

export default Inner

const InnerStyle = styled.div<{
  height: string
  display: string
  justifyContent: string
  alignItems: string
}>`
  width: 1180px;
  height: ${({ height }) => height};
  margin: 0 auto;
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`

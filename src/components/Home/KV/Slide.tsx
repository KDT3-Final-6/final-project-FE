import { COLORS, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface SlideProp {
  width: string
  height: string
  children?: React.ReactNode
}

const Slide = ({ children, width, height }: SlideProp) => {
  // console.log('children', children)

  return (
    <SlideStyle width={width} height={height}>
      <span>{children}</span>
    </SlideStyle>
  )
}

export default Slide

const SlideStyle = styled.div<SlideProp>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${COLORS.white};
  border-radius: 5px;
  color: ${COLORS.black};
  font-weight: ${FONTWEGHT.fw700};
`

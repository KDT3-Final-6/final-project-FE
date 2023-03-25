import { FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface SlideProp {
  width: string
  height: string
  children?: React.ReactNode
}

const Slide = ({ children, width, height }: SlideProp) => {
  return (
    <SlideStyle width={width} height={height}>
      <span>{children}</span>
    </SlideStyle>
  )
}

export default Slide

const SlideStyle = styled.div<SlideProp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #ffffff;
  border-radius: 5px;
  color: black;
  font-weight: ${FONTWEGHT.fw700};
  text-align: center;
  line-height: 90px;
`

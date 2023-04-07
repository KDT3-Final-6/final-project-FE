import React, { ForwardedRef } from 'react'
import styled from 'styled-components'
import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi'
import { COLORS } from '@src/styles/root'

interface Props {
  direction: 'left' | 'right'
}

const SlideButtons = React.forwardRef(
  ({ direction }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <>
        {direction === 'left' ? (
          <SlidePrevStyle ref={ref} className="left">
            <TfiArrowLeft />
          </SlidePrevStyle>
        ) : (
          <SlideNextStyle ref={ref} className="right">
            <TfiArrowRight />
          </SlideNextStyle>
        )}
      </>
    )
  }
)

const SlidePrevStyle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.cF5F5F5};
  color: ${COLORS.c4b4a4a};
  background-color: rgba(255, 255, 255, 0.8);
`

const SlideNextStyle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40px;
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.cF5F5F5};
  color: ${COLORS.c4b4a4a};
  background-color: rgba(255, 255, 255, 0.8);
`

export default SlideButtons

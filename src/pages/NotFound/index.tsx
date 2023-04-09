import Lottie from 'lottie-react'
import React from 'react'
import styled from 'styled-components'
import notFoundLottie from '@src/lotties/notFoundLottie.json'
import { COLORS, FONTSIZE } from '@src/styles/root'
import Title from '@src/components/common/Title'

interface Props {}

const NotFound = (props: Props) => {
  return (
    <NotFoundStyle>
      <Lottie animationData={notFoundLottie} loop={true} />
      <Title titleType="h1" title="NOT FOUND" fontSize={FONTSIZE.fz45} />
    </NotFoundStyle>
  )
}

export default NotFound

const NotFoundStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -70px;

  div {
    width: 600px;
    text-align: center;
  }
`

import Lottie from 'lottie-react'
import loadingLottie from '@src/lotties/loadingLottie.json'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '@src/reduxStore/store'

const Loading = () => {
  const loading = useSelector((state: RootState) => state.loading)
  if (loading === false) return null

  return (
    <LoadingStyle>
      <Lottie animationData={loadingLottie} loop={true} />
    </LoadingStyle>
  )
}

export default Loading

const LoadingStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 200px;
  }
`

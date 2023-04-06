import { RootState } from '@src/reduxStore/store'
import Lottie from 'lottie-react'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Loading = () => {
  const loading = useSelector((state: RootState) => state.loading)
  if (loading === false) return null

  return (
    <LoadingStyle>
      {/* <Lottie animationData={loading} loop={true} /> */}
      loading
    </LoadingStyle>
  )
}

export default Loading

const LoadingStyle = styled.div``

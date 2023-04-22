import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

const MBannerSection = () => {
  return (
    <ContainerStyle>
      <Inner width="90%">
        <Title titleType="h2" title="이벤트 / 혜택" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
      </Inner>
    </ContainerStyle>
  )
}

export default MBannerSection

const ContainerStyle = styled.div`
  margin-bottom: 60px;
`

import React from 'react'
import Image from '../common/Image'
import styled from 'styled-components'
import { COLORS, FONTWEGHT } from '@src/styles/root'

type Props = {}

const Banner = (props: Props) => {
  return (
    <Image bgImage="/images/survey_banner.jpg" height="419px" width="100%">
      <BannerStyle>
        <span>여러분이 원하는 여행을 쏙! 골라서 보여 드릴게요~</span>
        <span>나에게 맞는 답을 선택해 주세요.</span>
      </BannerStyle>
    </Image>
  )
}

const BannerStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  span {
    color: ${COLORS.white};
    font-size: 40px;
    font-weight: ${FONTWEGHT.fw700};
  }
`

export default Banner

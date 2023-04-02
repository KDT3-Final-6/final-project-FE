import Inner from '@src/layout/Inner'
import Title from '@src/components/common/Title'
import React from 'react'
import Image from '@src/components/common/Image'
import styled from 'styled-components'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import DistrictCheckTab from '@src/components/ProductPage/District/DistrictCheckTab'
import CategoryList from '@src/components/Group/CategoryList'

type Props = {}

const District = (props: Props) => {
  return (
    <div style={{ margin: '32px 0' }}>
      <Inner>
        <Title margin="32px 0">
          <h1>지역별 여행</h1>
        </Title>
      </Inner>
      <Image bgImage="/images/district_banner.png" width="100%" height="569px">
        <BannerStyle>
          <span>새로운 여행지에서</span>
          <span>소중한 추억을 쌓으세요</span>
          <span>원하시는 여행지를 찾아 보세요</span>
        </BannerStyle>
      </Image>
      <Inner>
        <Title margin="69px 0 50px 0">
          <h2>지역 선택하기</h2>
        </Title>
        <DistrictCheckTab />
        <CategoryList title="동남아시아" />
        <CategoryList title="유럽" />
      </Inner>
    </div>
  )
}

const BannerStyle = styled.div`
  position: relative;
  left: 203px;
  top: 116px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${COLORS.white};
  span {
    font-size: 40px;
    font-weight: ${FONTWEGHT.fw700};
  }
  span:last-child {
    font-size: ${FONTSIZE.fz16};
    font-weight: ${FONTWEGHT.fw400};
  }
`

export default District

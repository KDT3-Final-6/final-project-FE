import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import Review from '../common/Review'
import { initReview } from '@src/interfaces/review'

const TravelReview = () => {
  return (
    <Section>
      <Inner>
        <Title
          titleType="h2"
          title="실제 고객 여행 후기"
          fontSize={FONTSIZE.fz32}
          margin="0 0 50px"
        />
        <ContainerStyle>
          <Review review={initReview} />
          <Review review={initReview} />
          <Review review={initReview} />
        </ContainerStyle>
      </Inner>
    </Section>
  )
}

export default TravelReview

const ContainerStyle = styled.div`
  display: flex;
  gap: 20px;
`

const StarRateWrap = styled.div`
  span {
    display: inline-block;
    margin-left: 2px;
  }
`

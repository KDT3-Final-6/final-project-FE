import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const TravelReview = () => {
  return (
    <Section>
      <Inner>
        <Title fontSize={FONTSIZE.fz32}>
          <h2>실제 고객 여행 후기</h2>
        </Title>
      </Inner>
    </Section>
  )
}

export default TravelReview

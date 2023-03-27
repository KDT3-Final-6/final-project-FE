import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const TravelReview = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="실제 고객 여행 후기" fontSize={FONTSIZE.fz32} />
      </Inner>
    </Section>
  )
}

export default TravelReview

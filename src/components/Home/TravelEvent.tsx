import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const TravelEvent = () => {
  return (
    <Section>
      <Inner>
        <Title fontSize={FONTSIZE.fz32}>
          <h2>이벤트 / 계획</h2>
        </Title>
      </Inner>
    </Section>
  )
}

export default TravelEvent

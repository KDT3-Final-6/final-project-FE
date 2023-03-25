import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const TravelEvent = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize={FONTSIZE.fz32} title="이벤트 / 계획" />
      </Inner>
    </Section>
  )
}

export default TravelEvent

import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const ThemeTravel = () => {
  return (
    <Section>
      <Title titleType="h2" fontSize={FONTSIZE.fz32} title="테마별 인기 여행" />
    </Section>
  )
}

export default ThemeTravel

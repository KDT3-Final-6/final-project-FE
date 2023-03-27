import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const ThemeTravel = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="테마별 인기 여행" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
      </Inner>
    </Section>
  )
}

export default ThemeTravel

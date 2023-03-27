import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { FONTSIZE } from '@src/styles/root'
import React from 'react'
import Title from '../common/Title'

const ThemeTravel = () => {
  return (
    <Section>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 50px">
          <h2>테마별 인기 여행</h2>
        </Title>
      </Inner>
    </Section>
  )
}

export default ThemeTravel

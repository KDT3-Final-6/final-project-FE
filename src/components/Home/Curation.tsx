import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import React from 'react'
import styled from 'styled-components'
import Title from '../common/Title'

const Curation = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="어디로 여행을 떠날까요?" />
      </Inner>
    </Section>
  )
}

export default Curation

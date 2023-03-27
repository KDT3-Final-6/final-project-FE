import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Review from '../common/Review'
import Title from '../common/Title'

type Props = {}

const TravelReview = (props: Props) => {
  return (
    <section>
      <Inner>
        <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw700} margin="50px 0">
          <h3 id="review">상품 후기(83)</h3>
        </Title>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Review />
          <Review />
          <Review />
        </div>
      </Inner>
    </section>
  )
}

export default TravelReview

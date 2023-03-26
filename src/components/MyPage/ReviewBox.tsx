import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import ProductCard from '../common/ProductCard'

type Props = {}

const ReviewBox = (props: Props) => {
  return (
    <ul>
      <ProductCard cardType="barType">
        <span>2023.02.01</span>
        <Title titleType="h2" title="[실속 골프 패키지] 사이판 3박4일 골프 여행" />
      </ProductCard>
    </ul>
  )
}

export default ReviewBox

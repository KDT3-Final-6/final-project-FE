import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import React from 'react'
import styled from 'styled-components'
import ProductCard from '../common/ProductCard'
import Title from '../common/Title'

const Curation = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="어디로 여행을 떠날까요?" marginBotton="66px" />
        <ProductListStyle>
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px" />
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px" />
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px" />
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: flex;
  gap: 29px;
`

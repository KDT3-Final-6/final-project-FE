import React from 'react'
import styled from 'styled-components'

type Props = {}

const ProductCard = (props: Props) => {
  return <CardBox>ProductCard</CardBox>
}

const CardBox = styled.li`
  width: 305px;
  height: 430px;
  background-color: gray;
`
export default ProductCard

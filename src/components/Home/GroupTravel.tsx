import { getProducts } from '@src/api/product'
import { IProduct } from '@src/env'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import ConceptTabs from '../common/ConceptTabs'
import GroupTabs from '../common/GroupTabs'
import Title from '../common/Title'

const GroupTravel = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    ;(async () => {
      setProducts(await getProducts())
    })()
  }, [])

  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="그룹별 여행" fontSize={FONTSIZE.fz32} margin="0 0 66px" />
        <TabStyle>
          <div>
            <GroupTabs title={true} />
            <ConceptTabs title={true} />
          </div>
        </TabStyle>
        <ProductListStyle>
          {products.slice(0, 4).map((product) => (
            <CardTypeItem
              key={product.id}
              item={product}
              cardType="cardType"
              imgHeight="100%"
              height="460px"
              priceBottom="30px"
              priceColor={COLORS.c1b1b1b}
            />
          ))}
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default GroupTravel

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

const TabStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 76px;

  > div {
    margin: 0 auto;
  }
`

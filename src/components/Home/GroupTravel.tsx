import { getGroupProducts } from '@src/api/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import ConceptTabs from '../common/ConceptTabs'
import GroupTabs from '../common/GroupTabs'
import Title from '../common/Title'
import { IProduct } from '@src/interfaces/product'

const GroupTravel = () => {
  const [products, setProducts] = useState<IProduct>()
  const [group, setGroup] = useState('')
  const [concept, setConcept] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      setProducts(await getGroupProducts(group, concept))
    })()
  }, [group, concept])

  console.log(products)

  const groupChangeHandler = (value: string) => setGroup(value)

  const conceptChangeHandler = (checked: boolean, item: string) =>
    checked
      ? setConcept((prev) => [...prev, item])
      : setConcept(concept.filter((el) => el !== item))

  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="그룹별 여행" fontSize={FONTSIZE.fz32} margin="0 0 66px" />
        <TabStyle>
          <div>
            <GroupTabs title={true} onChange={(e) => groupChangeHandler(e.target.value)} />
            <ConceptTabs
              title={true}
              onChange={(e) => conceptChangeHandler(e.target.checked, e.target.value)}
            />
          </div>
        </TabStyle>
        <ProductListStyle>
          {products?.content.slice(0, 4).map((product) => (
            <CardTypeItem
              key={product.productId}
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

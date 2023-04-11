import { getGroupProducts } from '@src/api/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import ConceptTabs from '../common/ConceptTabs'
import GroupTabs from '../common/GroupTabs'
import Title from '../common/Title'
import { IProduct } from '@src/interfaces/product'
import SlideButtons from '../common/SlideButtons'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import { Swiper, SwiperSlide } from 'swiper/react'

const GroupTravel = () => {
  const [products, setProducts] = useState<IProduct>({
    content: [],
    totalPages: 0,
    totalElements: 0,
    pageNumber: 0,
    size: 0,
  })
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

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef })
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
          <SlideButtons direction="left" ref={prevRef} />
          <Swiper {...settings}>
            {products.content.map((product) => (
              <SwiperSlide key={product.productId}>
                <CardTypeItem
                  item={product}
                  cardType="cardType"
                  imgHeight="100%"
                  height="460px"
                  priceBottom="30px"
                  priceColor={COLORS.c1b1b1b}
                />
              </SwiperSlide>
            ))}
            {!(products.content.length > 0) && (
              <Title titleType="h2" textAlign="center" title="상품을 준비중입니다." />
            )}
          </Swiper>
          <SlideButtons direction="right" ref={nextRef} />
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default GroupTravel

const ProductListStyle = styled.ul`
  position: relative;
  h2 {
    height: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

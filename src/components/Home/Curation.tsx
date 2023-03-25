import { IProduct } from '@src/interfaces/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import React from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import Title from '../common/Title'

const Curation = () => {
  const products: IProduct[] = [
    {
      id: '1',
      title: '어른스러움의 프랑스 보르도 와인로드 10일',
      image: 'https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg',
      hashs: [
        '프랑스',
        '보르도',
        '생테밀리옹',
        '메독',
        '꼬냑',
        '라로셀',
        '투르',
        '르망',
        '몽생미셀',
        '파리',
        '고성호텔',
        '몽생미셀',
        '와인',
        '샴페인',
        '와이너리',
        '스파클링 와인',
      ],
      price: 7490000,
      heart: false,
    },
    {
      id: '2',
      title: '어른스러움의 프랑스 보르도 와인로드 10일',
      image: 'https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg',
      hashs: [
        '프랑스',
        '보르도',
        '생테밀리옹',
        '메독',
        '꼬냑',
        '라로셀',
        '투르',
        '르망',
        '몽생미셀',
        '파리',
        '고성호텔',
        '몽생미셀',
        '와인',
        '샴페인',
        '와이너리',
        '스파클링 와인',
      ],
      price: 7490000,
      heart: false,
    },
    {
      id: '3',
      title: '어른스러움의 프랑스 보르도 와인로드 10일',
      image: 'https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg',
      hashs: [
        '프랑스',
        '보르도',
        '생테밀리옹',
        '메독',
        '꼬냑',
        '라로셀',
        '투르',
        '르망',
        '몽생미셀',
        '파리',
        '고성호텔',
        '몽생미셀',
        '와인',
        '샴페인',
        '와이너리',
        '스파클링 와인',
      ],
      price: 7490000,
      heart: false,
    },
  ]
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="어디로 여행을 떠날까요?" marginBotton="66px" />
        <ProductListStyle>
          {products.map((product) => (
            <CardTypeItem
              key={product.id}
              item={product}
              cardType="cardType"
              imgWidth="100%"
              priceBottom="30px"
            />
          ))}
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
`

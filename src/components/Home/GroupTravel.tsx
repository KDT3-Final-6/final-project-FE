import PATH from '@src/constants/pathConst'
import { IProduct } from '@src/interfaces/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import ProductCard, {
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from '../common/ProductCard'
import Title from '../common/Title'

const GroupTravel = () => {
  const products: IProduct[] = [
    {
      id: '1',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: '2',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: '3',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
    {
      id: '4',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
  ]
  return (
    <Section>
      <Inner>
        <Title
          titleType="h2"
          fontSize={FONTSIZE.fz32}
          title="내 취향대로 여행"
          marginBotton="66px"
        />
        <ProductListStyle>
          {products.map((product) => (
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

import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import CardTypeItem from '../common/CardTypeItem'
import { IProduct } from '@src/interfaces/product'

type Props = {}

const MonthProductList = (props: Props) => {
  const products: IProduct[] = [
    {
      id: 1,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: 2,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: 3,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
    {
      id: 4,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
  ]
  return (
    <div>
      <Title margin="80px 0 50px 0">
        <h2>3월 인기 테마여행 패키지</h2>
      </Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
      </div>
    </div>
  )
}

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

export default MonthProductList

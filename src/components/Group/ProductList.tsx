import React from 'react'
import { IProduct } from '@src/env'
import CardTypeItem from '@src/components/common/CardTypeItem'
import styled from 'styled-components'
import Title from '../common/Title'
import CheckItem from '../common/CheckItem'
import { COLORS } from '@src/styles/root'

interface Props {
  title: string
}

const ProductList = ({ title }: Props) => {
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
    <>
      <SectionStyle>
        <Title>
          <h2>{title}</h2>
        </Title>
        <WrapStyle>
          <CheckItem
            checkType="tabType"
            type="radio"
            id="5070"
            name="group"
            labelName="5070끼리"
            width="138px"
            color={COLORS.c9747ff}
          />
          <CheckItem
            checkType="tabType"
            type="radio"
            id="males"
            name="group"
            labelName="남자끼리"
            width="122px"
            color={COLORS.c4bbe87}
          />
          <CheckItem
            checkType="tabType"
            type="radio"
            id="females"
            name="group"
            labelName="여자끼리"
            width="122px"
            color={COLORS.cbe4b4b}
          />
          <CheckItem
            checkType="tabType"
            type="radio"
            id="family"
            name="group"
            labelName="가족끼리"
            width="122px"
            color={COLORS.c4688ea}
          />
          <CheckItem
            checkType="tabType"
            type="radio"
            id="anybody"
            name="group"
            labelName="누구든지"
            width="122px"
            color={COLORS.cf0a22d}
          />
        </WrapStyle>
      </SectionStyle>
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
    </>
  )
}

const SectionStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 40px 0;
`

const WrapStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-left: 40px;
  margin-left: 40px;
`

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`
export default ProductList

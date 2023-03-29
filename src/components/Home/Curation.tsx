import { IProduct } from '@src/interfaces/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import CardTypeItem from '../common/CardTypeItem'
import Title from '../common/Title'
import { HiOutlineRefresh } from 'react-icons/hi'
import { MdEditCalendar } from 'react-icons/md'
import { current } from '@reduxjs/toolkit'

const Curation = () => {
  const products: IProduct[] = [
    {
      id: 1,
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
        '와인',
        '샴페인',
        '와이너리',
        '스파클링 와인',
      ],
      price: 7490000,
      heart: true,
    },
    {
      id: 2,
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
        '와인',
        '샴페인',
        '와이너리',
        '스파클링 와인',
      ],
      price: 7490000,
      heart: false,
    },
    {
      id: 3,
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
        <Title
          titleType="h2"
          title="어디로 여행을 떠날까요?"
          fontSize={FONTSIZE.fz32}
          margin="0 0 80px"
        />
        <ButtonsStyle>
          <Button buttonType="borderGray" color={COLORS.c1b1b1b}>
            다른 여행 찾기
            <HiOutlineRefresh />
          </Button>
          <Button buttonType="transparent" bgColor={COLORS.primary} color={COLORS.white}>
            여행 큐레이션 받기
            <MdEditCalendar />
          </Button>
        </ButtonsStyle>
        <ProductListStyle>
          {products.map((product) => (
            <CardTypeItem
              key={product.id}
              item={product}
              cardType="cardType"
              imgWidth="100%"
              priceBottom="30px"
              priceColor={COLORS.c1b1b1b}
            />
          ))}
        </ProductListStyle>
        <PreferBannerStyle>
          <Title
            titleType="h2"
            title="내 취향에 맞는 여행을 더 자세히 알아보고 싶다면?"
            fontSize="26px"
          />
          <Button buttonType="transparent">자세한 여행 큐레이션 받기</Button>
        </PreferBannerStyle>
      </Inner>
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
  margin-bottom: 50px;
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  margin-bottom: 76px;

  button {
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: 14px 24px;
    height: auto;
    svg {
      font-size: 20px;
      margin-left: 8px;
    }
  }
`

const PreferBannerStyle = styled.div`
  border: 1px solid ${COLORS.c1b1b1b};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px 0;

  button {
    border-radius: 50px;
    background-color: ${COLORS.primary};
    padding: 14px 24px;
    color: ${COLORS.white};
    height: auto;
    margin-left: 30px;
  }
`

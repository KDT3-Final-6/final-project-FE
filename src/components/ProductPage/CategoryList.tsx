import React, { useState, useEffect, useRef } from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { IProduct, IProductContent } from '@src/interfaces/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import SlideButtons from '../common/SlideButtons'

interface Props {
  title: string
  products: IProductContent[]
}

const CategoryList = ({ title, products }: Props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef })
  return (
    <>
      <Title margin="80px 0 50px 0" fontSize={FONTSIZE.fz32} title={title} titleType="h2" />
      {products && products.length > 0 ? (
        <div style={{ position: 'relative' }}>
          <SlideButtons direction="left" ref={prevRef} />
          <Swiper {...settings}>
            {products.map((product) => (
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
          </Swiper>
          <SlideButtons ref={nextRef} direction="right" />{' '}
        </div>
      ) : (
        <NullProductStyle>{title} 여행은 준비 중입니다.</NullProductStyle>
      )}
    </>
  )
}

const NullProductStyle = styled.div`
  font-size: ${FONTSIZE.fz24};
  margin: 50px 0;
`

export default CategoryList

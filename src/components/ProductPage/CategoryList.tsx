import React, { useState, useEffect, useRef } from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import { COLORS, FONTSIZE } from '@src/styles/root'
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
      <div style={{ position: 'relative' }}>
        <SlideButtons direction="left" ref={prevRef} />
        <Swiper {...settings}>
          {products.length > 0 &&
            products.map((product) => (
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
        <SlideButtons ref={nextRef} direction="right" />
      </div>
    </>
  )
}

const SlidePrevStyle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.cF5F5F5};
  color: ${COLORS.c4b4a4a};
  background-color: rgba(255, 255, 255, 0.8);
`

const SlideNextStyle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40px;
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.cF5F5F5};
  color: ${COLORS.c4b4a4a};
  background-color: rgba(255, 255, 255, 0.8);
`

export default CategoryList

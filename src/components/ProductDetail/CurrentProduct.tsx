import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import SlideButtons from '../common/SlideButtons'
import CardTypeItem from '../common/CardTypeItem'
import { COLORS } from '@src/styles/root'
import { ICurrentProduct } from '@src/interfaces/product'

interface Props {
  currentList: ICurrentProduct[]
}

const CurrentProduct = ({ currentList }: Props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef })

  return (
    <div style={{ position: 'relative' }}>
      <SlideButtons direction="left" ref={prevRef} />
      <Swiper {...settings}>
        {currentList ? (
          currentList.map((product) => (
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
          ))
        ) : (
          <div>상품 없음</div>
        )}
      </Swiper>
      <SlideButtons ref={nextRef} direction="right" />
    </div>
  )
}

export default CurrentProduct

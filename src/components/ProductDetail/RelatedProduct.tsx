import CardTypeItem from '@src/components/common/CardTypeItem'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'
import CheckItem from '@src/components/common/CheckItem'
import { IProductContent } from '@src/interfaces/product'
import { useState, useEffect, useRef } from 'react'
import { getRelatedProducts } from '@src/api/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi'

interface Props {
  productId: number
}

const RelatedProduct = ({ productId }: Props) => {
  const [releatedProducts, setRelatedProducts] = useState<IProductContent[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRelatedProducts(productId)
      setRelatedProducts(data.content)
    }
    fetchData()
  }, [])

  SwiperCore.use([Navigation])
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperSetting, setSwiperSetting] = useState<any>(null)
  const settings = {
    navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
    onInit: (swiper: SwiperCore) => {
      if (typeof swiper.params.navigation !== 'boolean') {
        if (swiper.params.navigation) {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }
      }
      swiper.navigation.update()
    },
    slidesPerView: 4,
    spaceBetween: 10,
  }

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting(settings)
    }
  }, [swiperSetting])
  return (
    <div style={{ position: 'relative' }}>
      <SlidePrevStyle ref={prevRef}>
        <TfiArrowLeft />
      </SlidePrevStyle>
      {swiperSetting && (
        <Swiper {...settings}>
          {releatedProducts.map((product) => (
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
      )}
      <SlideNextStyle ref={nextRef}>
        <TfiArrowRight />
      </SlideNextStyle>
    </div>
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

export default RelatedProduct

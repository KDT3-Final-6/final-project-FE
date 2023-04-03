import React, { useState, useEffect, useRef } from 'react'
import CardTypeItem from '@src/components/common/CardTypeItem'
import styled from 'styled-components'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { IProductContent } from '@src/interfaces/product'
import GroupTabs from './GroupTabs'
import { getCategoryProducts } from '@src/api/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi'

interface Props {
  title: string
  labelName: string
}

const ProductList = ({ title, labelName }: Props) => {
  const [group, setGroup] = useState('age5070')
  const [products, setProducts] = useState<IProductContent[]>([])

  const groupName = (group: string) => {
    if (group.includes('age5070')) return '5070끼리' as string
    if (group.includes('males')) return '남자끼리' as string
    if (group.includes('females')) return '여자끼리' as string
    if (group.includes('family')) return '가족끼리' as string
    if (group.includes('anyone')) return '누구든지' as string
    return '5070끼리'
  }
  const fetchData = async () => {
    const data = await getCategoryProducts(groupName(group))
    setProducts(data.content)
  }

  useEffect(() => {
    fetchData()
  }, [group])

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
    <>
      <SectionStyle>
        <GroupTabs setGroup={setGroup} title={title} labelName={labelName} />
      </SectionStyle>
      <div style={{ position: 'relative' }}>
        <SlidePrevStyle ref={prevRef}>
          <TfiArrowLeft />
        </SlidePrevStyle>
        {swiperSetting && (
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
        )}
        <SlideNextStyle ref={nextRef}>
          <TfiArrowRight />
        </SlideNextStyle>
      </div>
    </>
  )
}

const SectionStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 40px 0;
`

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

export default ProductList

import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Image from '../common/Image'
import styled from 'styled-components'
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi'

import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'

type Props = {}

const ProductSlider = (props: Props) => {
  const sliderImg = [
    {
      id: 1,
      imgLink: '/images/all_banner.jpg',
      category: '5060 특화 상품',
      title: ['JP 특급열차 하루카 !', '드디어 오사카역 정차'],
      detail: '3월 18일부터 간사이 공항 - 오사카역 직행 !',
    },
    {
      id: 2,
      imgLink: '/images/group_banner.jpg',
      category: '여자끼리',
      title: ['유럽 유명 미술관 여행', '미술관과 카페를 동시에 느낄 수 있는 패키지!'],
      detail: '3월 20일부터 파리 미술관 재오픈 !',
    },
    {
      id: 3,
      imgLink: '/images/theme_banner.jpg',
      category: '문화탐방',
      title: ['중국 문화 탐방 1기 패키지 여행!'],
      detail: '3월 20일부터 입장권 할인 오픈 이벤트',
    },
  ]

  SwiperCore.use([Navigation, Pagination])
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperSetting, setSwiperSetting] = useState<any>(null)
  const settings = {
    navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
    pagination: { clickable: true },
    onInit: (swiper: SwiperCore) => {
      if (typeof swiper.params.navigation !== 'boolean') {
        if (swiper.params.navigation) {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }
      }
      swiper.navigation.update()
    },
  }

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting(settings)
    }
  }, [swiperSetting])

  return (
    <>
      <SlidePrevStyle ref={prevRef}>
        <TfiAngleLeft />
      </SlidePrevStyle>
      {swiperSetting && (
        <MainSwiperStyle {...settings}>
          {sliderImg.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image bgImage={slide.imgLink} height="100%">
                <SlideTxtStyle>
                  <BadgeStyle>{slide.category}</BadgeStyle>
                  <TxtTitleStyle>
                    <span>{slide.title[0]}</span>
                    {slide.title[1] ? <span>{slide.title[1]}</span> : null}
                  </TxtTitleStyle>
                  <span style={{ fontSize: FONTSIZE.fz20 }}>{slide.detail}</span>
                </SlideTxtStyle>
              </Image>
            </SwiperSlide>
          ))}
        </MainSwiperStyle>
      )}
      <SlideNextStyle ref={nextRef}>
        <TfiAngleRight />
      </SlideNextStyle>
    </>
  )
}

const MainSwiperStyle = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-pagination {
    bottom: 29px;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: ${COLORS.white};
      opacity: 0.5;
      &.swiper-pagination-bullet-active {
        background-color: ${COLORS.white};
        opacity: 1;
      }
    }
  }
`

const SlideTxtStyle = styled.div`
  position: absolute;
  left: 200px;
  top: 46px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${COLORS.white};
`

const TxtTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 40px;
    font-weight: ${FONTWEGHT.fw700};
  }
`

const SlidePrevStyle = styled.button`
  position: absolute;
  top: 50%;
  left: 130px;
  transform: translateY(100%);
  z-index: 999;
  color: ${COLORS.white};
  svg {
    font-size: 47px;
  }
`

const SlideNextStyle = styled.button`
  position: absolute;
  z-index: 999;
  top: 50%;
  transform: translateY(100%);
  right: 130px;
  color: ${COLORS.white};
  svg {
    font-size: 47px;
  }
`

const BadgeStyle = styled.div`
  width: 200px;
  height: 45px;
  padding: 10px 28px 10px 28px;
  display: flex;
  justify-content: center;
  color: ${COLORS.white};
  border: 1px solid ${COLORS.white};
  border-radius: 48px;
  font-weight: 700;
  font-size: ${FONTSIZE.fz21};
`

export default ProductSlider

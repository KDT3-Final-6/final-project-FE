import { useState, useEffect, useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper'

interface Props {
  prevRef: React.RefObject<HTMLButtonElement>
  nextRef: React.RefObject<HTMLButtonElement>
}

const useSwiperSetting = ({ prevRef, nextRef }: Props) => {
  const [swiperSetting, setSwiperSetting] = useState<any>(null)
  SwiperCore.use([Navigation])
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
  return settings
}

export default useSwiperSetting

import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import { motion } from 'framer-motion'

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
  Lazy,
  EffectFade,
  Autoplay,
} from 'swiper'

// Import Swiper styles
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DELEAY_TIME = 5000

const KVImages = [
  { link: 'images/thumnail/thums03.jpeg' },
  { link: 'images/thumnail/thums01.jpeg' },
  { link: 'images/thumnail/thums02.jpeg' },
  { link: 'images/thumnail/thums04.jpeg' },
]

const variants = {
  filled: {
    width: '100%',
    transition: {
      duration: 5,
      ease: 'easeInOut',
    },
  },
  empty: {
    width: '0%',
    transition: {
      duration: 0,
    },
  },
}

const KVslider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [barWidth, setBarWidth] = useState(0)

  const progressMove = () => {
    let autoplayTime = DELEAY_TIME / 100
    let id = setInterval(frame, autoplayTime)
    function frame() {
      if (barWidth >= 100) {
        clearInterval(id)
      } else {
        setBarWidth((prev) => prev + 1)
      }
    }
  }

  return (
    <Container>
      {/* Main Slider */}
      <MainSwiperStyle
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        // slideToClickedSlide={true}
        allowTouchMove={false}
        autoplay={{ delay: DELEAY_TIME, disableOnInteraction: false }}
        onBeforeInit={progressMove}
        onSlideChangeTransitionStart={() => setBarWidth(0)}
        modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
      >
        {KVImages.map((item, index) => (
          <SwiperSlide key={`slide_${index}`}>
            <img src={item.link} alt="image" />
          </SwiperSlide>
        ))}
      </MainSwiperStyle>

      {/* Thumnail Slider */}
      <ThumbnailSwiperStyle
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {[1, 2, 3, 4].map((item, index) => (
          <ThumbSlideStyle key={`slide_${index}`}>
            <Slide width="100%" height="90px">
              <ProgressStyle>
                <BarStyle width={`${barWidth}%`}></BarStyle>
              </ProgressStyle>
              <div>Slide {item}</div>
            </Slide>
          </ThumbSlideStyle>
        ))}
      </ThumbnailSwiperStyle>
    </Container>
  )
}

export default KVslider

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  background-color: yellow;
`

const MainSwiperStyle = styled(Swiper)`
  img {
    width: 100%;
    height: 720px;
  }
`

const ThumbnailSwiperStyle = styled(Swiper)`
  position: absolute;
  bottom: 36px;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 139px;
`
const ProgressStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 8px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`

const BarStyle = styled.div`
  width: ${({ width }: { width: string }) => width};
  background-color: #fdb813;
  height: 100%;
`

const ThumbSlideStyle = styled(SwiperSlide)`
  position: relative;
  width: 381px;
  opacity: 0.6;
  cursor: pointer;
  ${ProgressStyle} {
    visibility: hidden;
  }
  &.swiper-slide-thumb-active {
    opacity: 0.9;
    ${ProgressStyle} {
      visibility: visible;
    }
  }
`

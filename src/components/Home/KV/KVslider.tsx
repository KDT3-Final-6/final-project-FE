import styled from 'styled-components'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Image from '@src/components/common/Image'
import { HashsStyle, HashStyle } from '@src/components/common/ProductCard'

// import required modules
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import Title from '@src/components/common/Title'

const DELEAY_TIME = 5000

const KVImages = [
  {
    link: 'https://cdn.imweb.me/thumbnail/20220518/9e9f65c0d670e.png',
    title: '아이슬란드',
    hashs: ['집에 있는데', '집에', '가고싶다.'],
  },
  {
    link: 'https://cdn.imweb.me/thumbnail/20220517/989e657d1ef50.png',
    title: '아프리카',
    hashs: ['다음생엔', '돌로', '태어나야지...'],
  },
  {
    link: 'https://cdn.imweb.me/thumbnail/20220518/b76fbc307e765.png',
    title: '히말라야',
    hashs: ['엄마', '보고싶다.'],
  },
  {
    link: 'https://cdn.imweb.me/thumbnail/20220518/8711f5cc2d770.png',
    title: '코카서스',
    hashs: ['우리', '혜원님', '슬라이드 구현하시느라', '수고 많으셨습니다.'],
  },
]

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
        effect="fade"
        // fadeEffect={{ crossFade: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        allowTouchMove={false}
        autoplay={{ delay: DELEAY_TIME, disableOnInteraction: false }}
        onBeforeInit={progressMove}
        onSlideChangeTransitionStart={() => setBarWidth(0)}
        modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
      >
        {KVImages.map((item, index) => (
          <SwiperSlide key={`slide_${index}`}>
            <Image
              src={item.link}
              alt={item.title}
              height="100%"
              imgPosition="absolute"
              imgTop="50%"
              imgLeft="50%"
              imgTransform="translate(-50%, -50%)"
            >
              <ImageTxtStyle>
                <HashsStyle marginBottom="36px">
                  {item.hashs.map((hash) => (
                    <HashStyle key={hash} fontSize={FONTSIZE.fz26}>
                      {`#${hash}`}
                    </HashStyle>
                  ))}
                </HashsStyle>
                <Title
                  titleType="h1"
                  title={item.title}
                  fontSize="60px"
                  fontWeight={FONTWEGHT.fw700}
                  color={COLORS.white}
                  textAlign="center"
                ></Title>
              </ImageTxtStyle>
            </Image>
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
              <SlideTextStyle>
                <p>북유럽</p>
                <div>아이슬란드 링로드 11일</div>
              </SlideTextStyle>
            </Slide>
          </ThumbSlideStyle>
        ))}
      </ThumbnailSwiperStyle>
    </Container>
  )
}

export default KVslider

const Container = styled.div``

const MainSwiperStyle = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 720px;
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
  background-color: ${COLORS.cfdb813};
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

const SlideTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  padding: 0 30px;
  /* margin-left: 21px; */
  transform: translateY(-50%);
  p {
    margin-bottom: 5px;
    line-height: 1.3;
    font-size: ${FONTSIZE.fz14};
    color: ${COLORS.c767676};
  }
  div {
    letter-spacing: -2%;
    font-size: ${FONTSIZE.fz18};
    color: ${COLORS.c1b1b1b};
    font-weight: ${FONTWEGHT.fw600};
  }
`

const ImageTxtStyle = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: ${COLORS.white};

  ${HashsStyle} {
    display: flex;
    gap: 10px;
  }
`

import Inner from '@src/layout/Inner'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const BANNER_CONTENTS = [
  {
    title: '알래스카항공\n 국제선 단톡 특가',
    description: '캐나다, 미국 도착\n 3~4월 특가 상품',
    bgColor: '#2C50A9',
  },
  {
    title: '주목해야 할\n 봄 특가 상품',
    description: '마스크 없이, 누구나,\n 누구든지',
    bgColor: '#D33CA9',
  },
  {
    title: '한편의 영화 같은\n 아름다운 여행\n 동유럽',
    description: '낭만, 아름다운 자연,\n 세계문화유산',
    bgColor: '#1BA9A0',
  },
  {
    title: '대자연 감성여행,\n 북유럽 투어',
    description: '푸른빙하, 가성비,\n 크루즈2박',
    bgColor: '#AF50D0',
  },
  {
    title: '요즘 여행의 답,\n 우리 함께 봄 여행',
    description: '시내중심호텔, 시내1박온천, 노쇼핑',
    bgColor: '#F0A22D',
  },
  {
    title: 'HOT 특가로\n 누리는 여행의 낭만',
    description: '따뜻하고도 산뜻한 동남아, 스펀천등날리기, 노쇼핑',
    bgColor: '#BE4B4B',
  },
  {
    title: '튀르키예 열기구\n 투어 할인예약',
    description: '카파도키아 단독 동굴호텔, 열기구투어, 노쇼핑',
    bgColor: '#3099df',
  },
]

const MBannerSection = () => {
  return (
    <ContainerStyle>
      <Inner width="90%">
        <SwiperStyle spaceBetween={11} slidesPerView={'auto'}>
          {BANNER_CONTENTS.map((banner) => (
            <SwiperSlideStyle key={banner.title}>
              <BannerStyle bgcolor={banner.bgColor}>
                <h3>{banner.title}</h3>
                <p>{banner.description}</p>
              </BannerStyle>
            </SwiperSlideStyle>
          ))}
        </SwiperStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default MBannerSection

const ContainerStyle = styled.div`
  margin-bottom: 60px;
`

const SwiperStyle = styled(Swiper)`
  min-width: 100%;
  height: 140px;
`

const SwiperSlideStyle = styled(SwiperSlide)`
  width: 40%;
  height: 100%;
  color: ${COLORS.white};
`

const BannerStyle = styled(SwiperSlide)<{ bgcolor: string }>`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 15px;
  overflow: hidden;
  h3 {
    white-space: pre-line;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    margin-bottom: 11px;
  }
  p {
    white-space: pre-line;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    opacity: 0.8;
    text-shadow: 0px 0.718119px 10.0537px rgba(0, 0, 0, 0.5);
  }
`

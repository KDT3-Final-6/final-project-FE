import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Image from '@src/components/common/Image'

// import required modules
import { Pagination, FreeMode, Thumbs, EffectFade, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const KVImages = [
  {
    id: '1',
    link: 'https://cdn.imweb.me/thumbnail/20220518/9e9f65c0d670e.png',
    titles: ['모로코 & 튀니지', '15일'],
    hashs: ['모로코', '튀니지', '지중해'],
    tag: '가족끼리',
    color: '#4688EA',
    country: '북아메리카',
  },
  {
    id: '2',
    link: 'https://cdn.imweb.me/thumbnail/20220517/989e657d1ef50.png',
    titles: ['라자스탄 궁전', '호텔 9일'],
    hashs: ['궁전호텔', '낙타사파리', '타르사막'],
    tag: '누구든지',
    color: '#F0A22D',
    country: '인도',
  },
  {
    id: '3',
    link: 'https://cdn.imweb.me/thumbnail/20220518/b76fbc307e765.png',
    titles: ['아이슬란드', '링로드 11일'],
    hashs: ['링로드일주', '하이랜드', '빙하하이킹'],
    tag: '남자끼리',
    color: '#4BBE87',
    country: '북유럽',
  },
  {
    id: '4',
    link: 'https://cdn.imweb.me/thumbnail/20220518/8711f5cc2d770.png',
    titles: ['시칠리아', '일주 9일'],
    hashs: ['대부', '시네마천국', '그랑블루'],
    tag: '여자끼리',
    color: '#BE4B4B',
    country: '유럽 이탈리아',
  },
]

const MSlideBanner = () => {
  return (
    <MSlideBannerStyle>
      <SwiperStyle
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination]}
      >
        {KVImages.map((item, index) => (
          <SwiperSlideStyle key={`slide_${index}`}>
            <Image height="100%" bgImage={item.link}></Image>
            <TagStyle color={item.color}>{item.tag}</TagStyle>
            <TextBoxStyle>
              <HashsStyle marginBottom="8px">
                {item.hashs.map((hash) => (
                  <HashStyle key={hash} fontSize={FONTSIZE.fz15}>
                    {`#${hash}`}
                  </HashStyle>
                ))}
              </HashsStyle>
              <h1>
                {item.titles.map((title) => (
                  <p key={title}>{title}</p>
                ))}
              </h1>
            </TextBoxStyle>
          </SwiperSlideStyle>
        ))}
      </SwiperStyle>
    </MSlideBannerStyle>
  )
}

export default MSlideBanner

const MSlideBannerStyle = styled.div`
  min-width: 320px;
  height: 320px;
`

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-pagination {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 40px;
    top: 20px;
    left: 10%;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 17px;
    letter-spacing: -0.02em;
    border-radius: 5.55556e9px;
    color: white;
    span {
      :first-child {
        font-weight: 700;
      }
      :last-child {
      }
    }
  }
`

const SwiperSlideStyle = styled(SwiperSlide)`
  position: relative;
  width: 88%;
  border-radius: 12px;
  overflow: hidden;
`

const TagStyle = styled.div<{
  color?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 7%;
  top: 50%;
  width: 20%;
  height: 11%;
  padding: 5px 7px;
  background: #ffffff;
  border-radius: 6px;
  z-index: 2;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color};
`

const TextBoxStyle = styled.div`
  position: absolute;
  left: 3%;
  top: 55%;
  width: 94%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 26px 16px 11px 16px;
  background: rgba(255, 255, 255, 0.85);
  opacity: 0.8;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  h1 {
    text-align: center;
    font-size: 23px;
    line-height: 29px;
    font-weight: 500;
  }
`

const HashsStyle = styled.div<{
  marginBottom?: string
  color?: string
}>`
  display: flex;
  margin-top: 5px;
  color: ${({ color }) => color};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const HashStyle = styled.span<{
  fontSize?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  margin-right: 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`

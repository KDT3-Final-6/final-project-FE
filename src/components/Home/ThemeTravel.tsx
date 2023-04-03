import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import Title from '../common/Title'
import { AiOutlinePlus } from 'react-icons/ai'
import { getCategoryProducts } from '@src/api/product'
import CardTypeItem from '../common/CardTypeItem'
import { IProductContent } from '@src/interfaces/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

const ThemeTravel = () => {
  const [products, setProducts] = useState<IProductContent[]>([])
  const [activeTab, setActiveTab] = useState(1)
  const contents = [
    { id: 0, tab: '휴양지' },
    { id: 1, tab: '골프' },
    { id: 2, tab: '트래킹' },
    { id: 3, tab: '성지순례' },
    { id: 4, tab: '문화탐방' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      const keyword = () => {
        if (activeTab === 0) return '휴양지'
        if (activeTab === 1) return '골프여행'
        if (activeTab === 2) return '트레킹'
        if (activeTab === 3) return '성지순례'
        if (activeTab === 4) return '문화탐방'
        return '휴양지'
      }
      const data = await getCategoryProducts(keyword())
      setProducts(data.content)
    }
    fetchData()
  }, [activeTab])

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
    spaceBetween: 20,
  }

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting(settings)
    }
  }, [swiperSetting])

  return (
    <Section overflow="hidden">
      <Inner>
        <Title titleType="h2" title="테마별 인기 여행" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
        <ThemeTravelStyle>
          <ThemeContentStyle>
            <PanelStyle activeTab={activeTab}>
              <Title
                titleType="h3"
                title={`${
                  activeTab === 0
                    ? '휴양지'
                    : activeTab === 1
                    ? '골프'
                    : activeTab === 2
                    ? '트래킹'
                    : activeTab === 3
                    ? '성지순례'
                    : activeTab === 4
                    ? '문화탐방'
                    : ''
                } 여행`}
                fontSize={FONTSIZE.fz26}
                color={COLORS.white}
              />
              <p>
                다양한 지역에서의{' '}
                {activeTab === 0
                  ? '휴양지'
                  : activeTab === 1
                  ? '골프'
                  : activeTab === 2
                  ? '트래킹'
                  : activeTab === 3
                  ? '성지순례'
                  : activeTab === 4
                  ? '문화탐방'
                  : ''}{' '}
                여행으로 아주 특별하고 즐거운 경함을 만들어보세요.
              </p>
              <Button
                buttonType="transparent"
                bgColor={COLORS.white}
                color={COLORS.c090909}
                padding="12px 16px"
                borderRadius="50px"
              >
                자세히 보기
                <AiOutlinePlus />
              </Button>
            </PanelStyle>
            <ContentStyle activeTab={activeTab}>
              <ContentTabsStyle>
                {contents.map((content) => (
                  <ContentTabStyle
                    key={content.id}
                    onClick={() => setActiveTab(content.id)}
                    className={activeTab === content.id ? 'isActive' : ''}
                  >
                    {content.tab}
                  </ContentTabStyle>
                ))}
              </ContentTabsStyle>
              <ProductListStyle>
                {swiperSetting && (
                  <Swiper {...settings}>
                    {products.map((product) => (
                      <SwiperSlide key={product.productId}>
                        <CardTypeItem
                          item={product}
                          cardType="cardType"
                          height="400px"
                          imgHeight="100%"
                          minHeight="250px"
                          priceBottom="17px"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </ProductListStyle>
            </ContentStyle>
          </ThemeContentStyle>
          <BlankStyle activeTab={activeTab}></BlankStyle>
        </ThemeTravelStyle>
      </Inner>
    </Section>
  )
}

export default ThemeTravel

const ThemeTravelStyle = styled.div`
  display: flex;
  position: relative;
`

const BlankStyle = styled.div<{
  activeTab: number
}>`
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  ${({ activeTab }) => handleChangeBg(activeTab)}
`

const ThemeContentStyle = styled.div`
  display: flex;
  width: 100%;
`

const PanelStyle = styled.div<{
  activeTab: number
}>`
  ${({ activeTab }) => handleChangeImg(activeTab)}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 345px;
  padding: 85px 76px;

  p {
    color: ${COLORS.white};
    font-size: ${FONTSIZE.fz20};
    margin: 68px 0 49px;
    line-height: 34px;
  }

  button {
    display: flex;
    align-items: center;
  }
`

const handleChangeImg = (activeTab: number) => {
  switch (activeTab) {
    case 0:
      return `
        background-image:url('/images/themeVacation.jpg');
      `
    case 1:
      return `
        background-image:url('/images/themeGolf.png');
      `
    case 2:
      return `
        background-image:url('/images/themeTracking.jpg');
      `
    case 3:
      return `
        background-image:url('/images/themeAmen.jpg');
      `
    case 4:
      return `
        background-image:url('/images/themeCulture.jpg');
      `
  }
}

const ContentStyle = styled.div<{
  activeTab: number
}>`
  padding: 66px 104px;
  width: calc(100% - 345px);
  ${({ activeTab }) => handleChangeBg(activeTab)}
`

const handleChangeBg = (activeTab: number) => {
  switch (activeTab) {
    case 0:
      return `
        background-color:${COLORS.cE5EBEF};
      `
    case 1:
      return `
        background-color:${COLORS.cE5EFE8};
      `
    case 2:
      return `
        background-color:${COLORS.cEFE7E5};
      `
    case 3:
      return `
        background-color:${COLORS.cE8E5EF};
      `
    case 4:
      return `
        background-color:${COLORS.cEFE5EE};
      `
  }
}

const ContentTabsStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: ${FONTSIZE.fz26};
  margin-bottom: 52px;
`

const ContentTabStyle = styled.li<{
  className: string
}>`
  padding: 10px;
  position: relative;
  color: ${COLORS.c767676};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
  }

  &:first-of-type {
    color: ${({ className }) => className === 'isActive' && COLORS.c5D7078};
    &::after {
      background-color: ${({ className }) => className === 'isActive' && COLORS.c5D7078};
    }
  }
  &:nth-of-type(2) {
    color: ${({ className }) => className === 'isActive' && COLORS.c5D7865};
    &::after {
      background-color: ${({ className }) => className === 'isActive' && COLORS.c5D7865};
    }
  }
  &:nth-of-type(3) {
    color: ${({ className }) => className === 'isActive' && COLORS.c78645D};
    &::after {
      background-color: ${({ className }) => className === 'isActive' && COLORS.c78645D};
    }
  }
  &:nth-of-type(4) {
    color: ${({ className }) => className === 'isActive' && COLORS.c6A5984};
    &::after {
      background-color: ${({ className }) => className === 'isActive' && COLORS.c6A5984};
    }
  }
  &:nth-of-type(5) {
    color: ${({ className }) => className === 'isActive' && COLORS.c874B7A};
    &::after {
      background-color: ${({ className }) => className === 'isActive' && COLORS.c874B7A};
    }
  }
`

const ProductListStyle = styled.ul`
  width: 970px;
`

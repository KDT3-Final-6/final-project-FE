import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import Title from '../common/Title'
import { AiOutlinePlus } from 'react-icons/ai'
import CardTypeItem from '../common/CardTypeItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import SlideButtons from '../common/SlideButtons'
import {
  useDeleteWishlistMutation,
  usePostWishlistMutation,
} from '@src/reduxStore/api/wishlistApislice'
import { useDispatch } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'
import { useGetUserInfoQuery } from '@src/reduxStore/api/userApiSlice'
import { useCookies } from 'react-cookie'
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/productsApiSlice'

const ThemeTravel = () => {
  const [activeTab, setActiveTab] = useState(1)
  const contents = [
    { id: 0, tab: '휴양지' },
    { id: 1, tab: '골프' },
    { id: 2, tab: '트래킹' },
    { id: 3, tab: '성지순례' },
    { id: 4, tab: '문화탐방' },
  ]
  const keyword = () => {
    if (activeTab === 0) return '휴양지'
    if (activeTab === 1) return '골프여행'
    if (activeTab === 2) return '트레킹'
    if (activeTab === 3) return '성지순례'
    if (activeTab === 4) return '문화탐방'
    return '휴양지'
  }

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef, slidesPerView: 4, spaceBetween: 10 })
  const dispatch = useDispatch()
  const [deleteWishlist] = useDeleteWishlistMutation()
  const [postWishlist] = usePostWishlistMutation()
  const [cookies] = useCookies()
  let accessToken = cookies.accessToken
  const { data: userInfo } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
    refetchOnMountOrArgChange: true,
  })

  const { data } = useGetCategoryProductsQuery({ keyword: keyword() })
  const products = data ? data.content : []

  const heartCheck = async (heart: boolean, productId: number) => {
    if (userInfo?.memberName && heart) {
      await deleteWishlist(productId)
    } else if (!heart && userInfo?.memberName) {
      await postWishlist(productId)
    } else {
      dispatch(
        setModal({
          isOpen: true,
          text: '로그인이 필요한 서비스입니다.',
          onClickOK: () => dispatch(setModal({ isOpen: false })),
        })
      )
    }
  }

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
                {activeTab === 0
                  ? '지친 일상을 떠나 자연과 함께하는 여행, 휴양지여행으로 충분한 휴식을 취해보세요.'
                  : activeTab === 1
                  ? '다양한 지역에서의 골프 여행으로 아주 특별하고 즐거운 경험을 만들어보세요.'
                  : activeTab === 2
                  ? '숨이 멎을듯한 아름다운 자연경관 속에서 트레킹을 즐기세요.'
                  : activeTab === 3
                  ? '물에 비치는 빛나는 달빛처럼, 영적인 여행의 빛나는 순례길을 따라 성지순례여행을 떠나보세요.'
                  : activeTab === 4
                  ? '지금까지 경험하지 못한 새로운 문화를 만나보세요. 다양한 문화탐방여행 코스로 초대합니다.'
                  : ''}
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
                <SlideStyle style={{ position: 'relative' }}>
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
                          isHeart={product.isWished}
                          heartClick={() => heartCheck(product.isWished, product.productId!)}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SlideButtons ref={nextRef} direction="right" />{' '}
                </SlideStyle>
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
    position: absolute;
    bottom: 230px;
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

const SlideStyle = styled.div`
  position: relative;
  .right {
    right: 200px;
  }
`

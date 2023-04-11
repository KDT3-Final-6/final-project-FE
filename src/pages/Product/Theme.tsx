import React, { useState, useEffect } from 'react'
import Inner from '@src/layout/Inner'
import Title from '@src/components/common/Title'
import ProductList from '@src/components/ProductPage/ProductList'
import CategoryList from '@src/components/ProductPage/CategoryList'
import Banner from '@src/components/Home/Banner'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import MoreBtn from '@src/components/Home/MoreBtn'
import MonthProductList from '@src/components/ProductPage/MonthProductList'
import ProductSlider from '@src/components/ProductPage/ProductSlider'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import { IProductContent } from '@src/interfaces/product'
import { getCategoryProducts } from '@src/api/product'

const Theme = () => {
  const [themeProduct, setThemeProduct] = useState<IProductContent[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryProducts('테마별여행')
      setThemeProduct(data.content)
    }
    fetchData()
  }, [])
  return (
    <div style={{ margin: '32px 0' }}>
      <Inner>
        <Title margin="32px 0">
          <h1>테마별 여행</h1>
        </Title>
      </Inner>
      <div style={{ width: '100%', height: '569px' }}>
        <ProductSlider />
      </div>
      <Inner>
        <CategoryList title="TOP 10 인기 테마별 여행" products={themeProduct} />
      </Inner>
      <ThemeTravel />
      <Inner>
        <Banner image="/images/banner/event_banner-3.png" marginTop="-180px" marginBottom="100px" />
        <ContainerStyle>
          <EventCardStyle>
            <ImageBoxStyle url="모로코_10일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>14일 간의 모로코 시티&사막 투어</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
          <EventCardStyle>
            <ImageBoxStyle url="마레모_12일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>마레모 12일 유적 탐방</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
          <EventCardStyle>
            <ImageBoxStyle url="아프리카7개국_18일_썸네일">
              <MoreBtn bgColor={COLORS.white} bottom="16px" right="18px" />
            </ImageBoxStyle>
            <EventInfo>
              <p>아프리카 8개국 27일 여행</p>
              <span>[5/8 출발] 선착 순 마감 중</span>
            </EventInfo>
          </EventCardStyle>
        </ContainerStyle>
        <MonthProductList products={themeProduct} />
      </Inner>
    </div>
  )
}

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventCardStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBoxStyle = styled.div`
  position: relative;
  width: 380px;
  height: 207px;
  border-radius: 8px;
  background-image: ${({ url }: { url: string }) => `url(/images/event/${url}.jpg)`};
  background-size: 380px;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 14px 33px;
  p {
    font-size: ${FONTSIZE.fz20};
    font-weight: ${FONTWEGHT.fw500};
  }
  span {
    font-weight: ${FONTWEGHT.fw500};
    font-size: ${FONTSIZE.fz16};
    color: ${COLORS.ca6a6a6};
    line-height: 24px;
  }
`

export default Theme

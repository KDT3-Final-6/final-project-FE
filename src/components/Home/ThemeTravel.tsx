import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import Title from '../common/Title'
import { AiOutlinePlus } from 'react-icons/ai'
import { IProduct } from '@src/env'
import { getProducts } from '@src/api/product'
import CardTypeItem from '../common/CardTypeItem'

const ThemeTravel = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const contentTabs = ['휴양지', '골프', '트레킹', '성지순례', '문화탐방']

  useEffect(() => {
    ;(async () => {
      setProducts(await getProducts())
    })()
  }, [])

  const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const tab = e.target
    console.log(tab)
  }

  return (
    <Section overflow="hidden">
      <Inner>
        <Title titleType="h2" title="테마별 인기 여행" fontSize={FONTSIZE.fz32} margin="0 0 50px" />
        <ThemeTravelStyle>
          <ThemeContentStyle>
            <PanelStyle>
              <Title
                titleType="h3"
                title="골프여행"
                fontSize={FONTSIZE.fz26}
                color={COLORS.white}
              />
              <p>다양한 지역에서의 골프 여행으로 아주 특별하고 즐거운 경함을 만들어보세요.</p>
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
            <ContentStyle>
              <ContentTabsStyle>
                {contentTabs.map((contentTab) => (
                  <ContentTabStyle key={contentTab} onClick={(e) => handleTabClick(e)}>
                    {contentTab}
                  </ContentTabStyle>
                ))}
              </ContentTabsStyle>
              <ProductListStyle>
                {products.map((product) => (
                  <CardTypeItem
                    key={product.id}
                    item={product}
                    cardType="cardType"
                    height="400px"
                    imgHeight="100%"
                    minHeight="250px"
                    priceBottom="17px"
                  />
                ))}
              </ProductListStyle>
            </ContentStyle>
          </ThemeContentStyle>
          <BlankStyle></BlankStyle>
        </ThemeTravelStyle>
      </Inner>
    </Section>
  )
}

export default ThemeTravel

const ThemeTravelStyle = styled.div`
  display: flex;
  position: relative;
  background-color: ${COLORS.cE5EFE8};
`

const BlankStyle = styled.div`
  position: absolute;
  background-color: ${COLORS.cE5EFE8};
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
`

const ThemeContentStyle = styled.div`
  display: flex;
  width: 100%;
`

const PanelStyle = styled.div`
  background: url('/images/themeGolf.png') no-repeat center;
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

const ContentStyle = styled.div`
  padding: 66px 104px;
  width: calc(100% - 345px);
`

const ContentTabsStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: ${FONTSIZE.fz26};
  margin-bottom: 52px;
`

const ContentTabStyle = styled.li`
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
`

const ProductListStyle = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  position: relative;
  z-index: 1;

  li {
    min-width: 230px;
  }
`

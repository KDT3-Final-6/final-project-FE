import { getProducts } from '@src/api/product'
import { IProduct } from '@src/env'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import CheckItem from '../common/CheckItem'
import Title from '../common/Title'

const GroupTravel = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    ;(async () => {
      setProducts(await getProducts())
    })()
  }, [])

  const groupTabs = [
    {
      id: '5070',
      tabName: '5070끼리',
    },
    {
      id: 'males',
      tabName: '남자끼리',
    },
    {
      id: 'females',
      tabName: '여자끼리',
    },
    {
      id: 'family',
      tabName: '가족끼리',
    },
    {
      id: 'anybody',
      tabName: '누구든지',
    },
  ]

  const conceptTabs = [
    {
      id: 'shopping',
      tabName: '쇼핑',
    },
    {
      id: 'wine',
      tabName: '와인',
    },
    {
      id: 'culture',
      tabName: '문화탐방',
    },
    {
      id: 'amen',
      tabName: '성지순례',
    },
    {
      id: 'volunteer',
      tabName: '봉사활동',
    },
    {
      id: 'tracking',
      tabName: '트레킹',
    },
    {
      id: 'golf',
      tabName: '골프',
    },
  ]

  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="그룹별 여행" fontSize={FONTSIZE.fz32} margin="0 0 66px" />
        <TabStyle>
          <div>
            <GroupStyle>
              <Title titleType="h3" title="그룹" fontSize="26px" fontWeight={FONTWEGHT.fw600} />
              <WrapStyle>
                {groupTabs.map((groupTab) => (
                  <CheckItem
                    key={groupTab.id}
                    checkType="tabType"
                    type="radio"
                    id={groupTab.id}
                    name="group"
                    labelName={groupTab.tabName}
                    width={
                      groupTab.tabName.length === 2
                        ? '82px'
                        : groupTab.tabName.length === 3
                        ? '102px'
                        : groupTab.tabName.length === 4
                        ? '122px'
                        : '138px'
                    }
                    bgColor={COLORS.cbe4b4b}
                  />
                ))}
              </WrapStyle>
            </GroupStyle>
            <ConceptStyle>
              <Title titleType="h3" title="컨셉" fontSize="26px" fontWeight={FONTWEGHT.fw600} />
              <WrapStyle>
                {conceptTabs.map((conceptTab) => (
                  <CheckItem
                    key={conceptTab.id}
                    checkType="tabType"
                    type="checkbox"
                    id={conceptTab.id}
                    labelName={conceptTab.tabName}
                    width={
                      conceptTab.tabName.length === 2
                        ? '82px'
                        : conceptTab.tabName.length === 3
                        ? '102px'
                        : conceptTab.tabName.length === 4
                        ? '122px'
                        : '138px'
                    }
                    bgColor={COLORS.cbe4b4b}
                  />
                ))}
              </WrapStyle>
            </ConceptStyle>
          </div>
        </TabStyle>
        <ProductListStyle>
          {products.slice(0, 4).map((product) => (
            <CardTypeItem
              key={product.id}
              item={product}
              cardType="cardType"
              imgHeight="100%"
              height="460px"
              priceBottom="30px"
              priceColor={COLORS.c1b1b1b}
            />
          ))}
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default GroupTravel

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

const TabStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 76px;

  > div {
    margin: 0 auto;
  }
`

const GroupStyle = styled.div`
  display: flex;

  h3 {
    height: 57px;
    display: flex;
    align-items: center;
  }

  label {
    width: 100%;
    font-size: ${FONTSIZE.fz19};
    font-weight: ${FONTWEGHT.fw500};
    color: ${COLORS.c7c7c7c};
  }
`

const WrapStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-left: 40px;
  margin-left: 40px;
  border-left: 1px solid ${COLORS.cd9d9d9};
`

const ConceptStyle = styled(GroupStyle)`
  ${WrapStyle} {
    padding-top: 10px;
    padding-bottom: 0;
  }
  h3 {
    margin-top: 10px;
  }
`

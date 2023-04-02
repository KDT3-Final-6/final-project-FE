import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import React from 'react'
import ProductList from '@src/components/ProductPage/ProductList'
import Banner from '@components/Home/Banner'
import CategoryList from '@src/components/ProductPage/CategoryList'
import ProductSlider from '@src/components/ProductPage/District/ProductSlider'

type Props = {}

const Group = (props: Props) => {
  return (
    <div style={{ margin: '32px 0' }}>
      <Inner>
        <Title margin="32px 0">
          <h1>그룹별 여행</h1>
        </Title>
      </Inner>
      <div style={{ width: '100%', height: '569px' }}>
        <ProductSlider />
      </div>
      <Inner>
        <ProductList title="TOP 10 인기 그룹별 여행" />
        <ProductList title="방금 뜬 그룹별 여행" />
        <CategoryList title="여자끼리" />
        <CategoryList title="남자끼리" />
        <Banner image="event_banner2" marginTop="100px" marginBottom="100px" type={1} />
        <CategoryList title="5070끼리" />
        <CategoryList title="가족끼리" />
        <CategoryList title="누구든지" />
      </Inner>
    </div>
  )
}

export default Group

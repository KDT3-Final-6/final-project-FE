import React from 'react'
import Inner from '@src/layout/Inner'
import ProductList from '@src/components/Group/ProductList'
import CategoryList from '@src/components/Group/CategoryList'
import Title from '@src/components/common/Title'
import Banner from '@src/components/Home/Banner'

type Props = {}

const Recommend = (props: Props) => {
  return (
    <div>
      <div style={{ height: '569px', backgroundColor: 'tomato' }}>슬라이드 영역</div>
      <Inner>
        <ProductList title="그룹별여행" />
        <CategoryList title="추천 여행" />
        <Title margin="80px 0 50px 0">
          <h2>테마별 인기 여행</h2>
        </Title>
        <div style={{ height: '696px', backgroundColor: 'tomato' }}></div>
        <Banner image="event_banner" marginTop="94px" marginBottom="26px" type={2} />
        <Banner image="event_banner2" marginBottom="100px" type={1} />
      </Inner>
    </div>
  )
}

export default Recommend

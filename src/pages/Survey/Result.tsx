import React from 'react'
import Banner from '@src/components/Survey/Banner'
import Title from '@src/components/common/Title'
import CategoryList from '@src/components/ProductPage/CategoryList'
import Inner from '@src/layout/Inner'
import EventBanner from '@components/Home/Banner'
import { FONTSIZE } from '@src/styles/root'

type Props = {}

const Result = (props: Props) => {
  return (
    <div>
      <Banner />
      <Inner>
        <Title margin="80px 0 0 0" fontSize={FONTSIZE.fz30}>
          <h1>김고투 님을 위해서 선별해 봤어요.</h1>
        </Title>
        {/* <CategoryList title="봄에 떠나기 좋은 여행" /> */}
        {/* <CategoryList title="친구들과 떠나기 좋은 여행" /> */}
        <EventBanner type={2} image="event_banner" marginTop="65px" marginBottom="100px" />
        {/* <CategoryList title="동호회 회원들과 떠나기 좋은 여행" /> */}
      </Inner>
    </div>
  )
}

export default Result

import Curation from '@src/components/Home/Curation'
import GroupTravel from '@src/components/Home/GroupTravel'
import SlideBanner from '@src/components/Home/SlideBanner'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import TravelEvent from '@src/components/Home/TravelEvent'
import TravelReview from '@src/components/Home/TravelReview'
import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '@src/components/Home/Banner'
import FloatingNav from '@src/components/Home/FloatingNav'
import { useSelector } from 'react-redux'
import IRootReducer from '@src/interfaces/rootReducer'
import Image from '@src/components/common/Image'
import Inner from '@src/layout/Inner'

function Home() {
  return (
    <>
      <Helmet>
        <title>고투게더 홈</title>
      </Helmet>
      <SlideBanner />
      <Curation />
      <Inner>
        <Image src="/images/banner/큐레이션배너.png" />
      </Inner>
      <Banner image="event_banner2" marginTop="100px" marginBottom="100px" type={1} />
      <GroupTravel />
      <ThemeTravel />
      <Banner image="event_banner" marginTop="94px" marginBottom="100px" type={2} />
      <TravelReview />
      <TravelEvent />
      <FloatingNav />
    </>
  )
}

export default Home

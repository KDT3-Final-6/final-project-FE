import Curation from '@src/components/Home/Curation'
import GroupTravel from '@src/components/Home/GroupTravel'
import SlideBanner from '@src/components/Home/SlideBanner'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import TravelEvent from '@src/components/Home/TravelEvent'
import TravelReview from '@src/components/Home/TravelReview'
import React from 'react'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
      <Helmet>
        <title>고투게더</title>
      </Helmet>
      <SlideBanner />
      <Curation />
      <GroupTravel />
      <ThemeTravel />
      <TravelReview />
      <TravelEvent />
    </>
  )
}

export default Home

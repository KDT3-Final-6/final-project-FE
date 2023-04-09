import Curation from '@src/components/Home/Curation'
import GroupTravel from '@src/components/Home/GroupTravel'
import SlideBanner from '@src/components/Home/SlideBanner'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import TravelEvent from '@src/components/Home/TravelEvent'
import TravelReview from '@src/components/Home/TravelReview'
import { Helmet } from 'react-helmet'
import Banner from '@src/components/Home/Banner'
import FloatingNav from '@src/components/Home/FloatingNav'
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
      <Banner
        image="https://cdn.discordapp.com/attachments/1089409142520811601/1094450202523476030/event_banner.png"
        marginTop="100px"
        marginBottom="100px"
      />
      <GroupTravel />
      <ThemeTravel />
      <Banner
        image="https://cdn.discordapp.com/attachments/1089409142520811601/1094450202120831036/event_banner.png"
        marginTop="94px"
        marginBottom="100px"
      />
      <TravelReview />
      <TravelEvent />
      <FloatingNav />
    </>
  )
}

export default Home

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
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import MSlideBanner from '@src/components/Home/mobile/MSlideBanner'
import MCuration from '@src/components/Home/mobile/MCuration'
import MTravelReview from '@src/components/Home/mobile/MTravelReview'
import MTravelEvent from '@src/components/Home/mobile/MTravelEvent'
import MBannerSection from '@src/components/Home/mobile/MBannerSection'

function Home() {
  const isPC = useMediaQuery({
    query: '(min-width:1024px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })
  const navigate = useNavigate()
  return isPC ? (
    <>
      <Helmet>
        <title>고투게더 홈</title>
      </Helmet>
      <SlideBanner />
      <Curation />
      <Inner>
        <Image src="images/banner/curation_banner.png" onClick={() => navigate('/survey')} />
      </Inner>
      <Banner image="/images/banner/event_banner.png" marginTop="100px" marginBottom="100px" />
      <GroupTravel />
      <ThemeTravel />
      <Banner image="/images/banner/event_banner7.png" marginTop="94px" marginBottom="100px" />
      <TravelReview />
      <TravelEvent />
      <FloatingNav />
    </>
  ) : (
    <>
      <Helmet>
        <title>고투게더 홈</title>
      </Helmet>
      <MSlideBanner />
      <MCuration />
      <MBannerSection />
      <MTravelReview />
      <MTravelEvent />
    </>
  )
}

export default Home

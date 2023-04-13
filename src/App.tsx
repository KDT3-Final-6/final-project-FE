import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'
import ScrollTop from './utils/scrollTop'
import ModalBox from './components/common/ModalBox'
import Loading from './components/common/Loading'
import ReviewModal from './components/common/ReviewModal'
import { useMediaQuery } from 'react-responsive'
import MHeader from './components/Mobile/MHeader'
import MFooter from '@components/Mobile/MFooter'
import MFloating from './components/Mobile/MFloating'

const App = () => {
  const isPC = useMediaQuery({
    query: '(min-width:1024px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      {isPC ? <Header /> : <MHeader />}
      <Outlet />
      {isPC ? <Footer /> : <MFooter />}
      <Loading />
      <ModalBox />
      <ReviewModal />
      {isMobile && <MFloating />}
    </>
  )
}

export default App

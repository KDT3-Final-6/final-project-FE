import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'
import ScrollTop from './utils/scrollTop'
import ModalBox from './components/common/ModalBox'
import Loading from './components/common/Loading'

const App = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
      <Loading />
      <ModalBox />
    </>
  )
}

export default App

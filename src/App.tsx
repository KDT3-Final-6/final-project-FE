import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'
import ScrollTop from './utils/scrollTop'
import ModalBox from './components/common/ModalBox'
import Loading from './components/common/Loading'

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Loading />
      <Footer />
      <ModalBox />
    </>
  )
}

export default App

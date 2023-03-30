import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'
// import ScrollTop from './utils/scrollTop'

interface Props {}

const App = (props: Props) => {
  return (
    <>
      {/* <ScrollTop /> */}
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

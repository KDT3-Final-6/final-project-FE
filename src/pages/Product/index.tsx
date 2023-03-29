import Inner from '@src/layout/Inner'
import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {}

const Product = (props: Props) => {
  return <Outlet />
}

export default Product

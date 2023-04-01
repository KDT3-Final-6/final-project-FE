import { RootState } from '@src/reduxStore/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector((state: RootState) => state.loading)
  if (loading === false) return null

  return <div>Loading</div>
}

export default Loading

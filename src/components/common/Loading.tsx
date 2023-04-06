import { ReducerType } from '@src/reduxStore/rootReducer'
import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector((state: ReducerType) => state.loading)
  if (loading === false) return null

  return <div>Loading</div>
}

export default Loading

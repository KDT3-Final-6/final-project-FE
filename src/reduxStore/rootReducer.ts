import { orderApi } from './api/orderApiSlice'
import { combineReducers } from 'redux'
import { qnaApi } from './api/qnaApiSlice'
import loadingReducer from './loadingSlice'

const rootReducer = combineReducers({
  loading: loadingReducer,
  [qnaApi.reducerPath]: qnaApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer

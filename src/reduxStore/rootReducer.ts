import { userInfoSlice } from './features/userInfoSlice'
import { combineReducers } from 'redux'
import { qnaApi } from './api/qnaApiSlice'
import { orderApi } from './api/orderApiSlice'
import loadingSlice from '@src/reduxStore/loadingSlice'
import modalSlice from '@src/reduxStore/modalSlice'
import { cartApi } from './api/cartApiSlice'
import { searchApi } from './api/searchApiSlice'
import { curationApi } from './api/curationApiSlice'

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  modal: modalSlice.reducer,
  userInfo: userInfoSlice.reducer,
  [qnaApi.reducerPath]: qnaApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [curationApi.reducerPath]: curationApi.reducer,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer

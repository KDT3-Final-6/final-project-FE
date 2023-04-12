import { userInfoSlice } from './features/userInfoSlice'
import { combineReducers } from 'redux'
import { qnaApi } from './api/qnaApiSlice'
import { orderApi } from './api/orderApiSlice'
import loadingSlice from '@src/reduxStore/loadingSlice'
import modalSlice from '@src/reduxStore/modalSlice'
import { cartApi } from './api/cartApiSlice'
import { searchApi } from './api/searchApiSlice'
import { curationApi } from './api/curationApiSlice'
import { reviewApi } from './api/reviewApiSlice'
import reviewModalSlice from './reviewModalSlice'
import { adminProductApi } from './api/adminProductApiSlice'
import { wishlistApi } from './api/wishlistApislice'
import { adminUserApi } from './api/adminUserApiSlice'
import { adminPostApi } from './api/adminPostApiSlice'
import { userApi } from './api/userApiSlice'
import { adminTransactionApi } from './api/adminTransactionApiSlice'

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  modal: modalSlice.reducer,
  reviewModal: reviewModalSlice.reducer,
  userInfo: userInfoSlice.reducer,
  [qnaApi.reducerPath]: qnaApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [curationApi.reducerPath]: curationApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [adminProductApi.reducerPath]: adminProductApi.reducer,
  [wishlistApi.reducerPath]: wishlistApi.reducer,
  [adminUserApi.reducerPath]: adminUserApi.reducer,
  [adminPostApi.reducerPath]: adminPostApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [adminTransactionApi.reducerPath]: adminTransactionApi.reducer,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer

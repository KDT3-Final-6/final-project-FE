import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { orderApi } from './api/orderApiSlice'
import { qnaApi } from './api/qnaApiSlice'
import { cartApi } from './api/cartApiSlice'
import rootReducer from './rootReducer'
import { reviewApi } from './api/reviewApiSlice'
import { searchApi } from './api/searchApiSlice'
import { curationApi } from './api/curationApiSlice'
import { adminProductApi } from './api/adminProductApiSlice'
import { wishlistApi } from './api/wishlistApislice'
import { adminUserApi } from './api/adminUserApiSlice'
import { adminPostApi } from './api/adminPostApiSlice'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      qnaApi.middleware,
      orderApi.middleware,
      cartApi.middleware,
      reviewApi.middleware,
      searchApi.middleware,
      curationApi.middleware,
      adminProductApi.middleware,
      wishlistApi.middleware,
      adminUserApi.middleware,
      adminPostApi.middleware,
    ]),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

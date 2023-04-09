import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { orderApi } from './api/orderApiSlice'
import { qnaApi } from './api/qnaApiSlice'
import { cartApi } from './api/cartApiSlice'
import rootReducer from './rootReducer'
import { reviewApi } from './api/reviewApiSlice'
import { searchApi } from './api/searchApiSlice'
import { curationApi } from './api/curationApiSlice'

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
    ]),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

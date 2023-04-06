import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { orderApi } from './api/orderApiSlice'
import { qnaApi } from './api/qnaApiSlice'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      qnaApi.middleware,
      orderApi.middleware,
    ]),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch

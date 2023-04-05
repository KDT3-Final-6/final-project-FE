import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { qnaApi } from './api/qnaApiSlice'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(qnaApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch

// export type RootState = ReturnType<typeof store.getState>

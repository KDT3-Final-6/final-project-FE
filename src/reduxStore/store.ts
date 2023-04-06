import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import modal from './modalSlice'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(qnaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export default store

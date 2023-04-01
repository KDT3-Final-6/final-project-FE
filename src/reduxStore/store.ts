import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";

const store = configureStore({
  reducer: {
    loading: loadingSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
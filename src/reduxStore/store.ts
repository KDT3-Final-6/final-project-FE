import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import modal from "./modalSlice";

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    modal: modal.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
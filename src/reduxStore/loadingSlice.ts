import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    showLoading(state) {
      return state = true
    },
    hideLoading(state) {
      return state = false
    }
  }
})

export const { showLoading, hideLoading } = loadingSlice.actions
export default loadingSlice
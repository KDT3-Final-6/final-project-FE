import { createSlice } from '@reduxjs/toolkit'

const reviewModalSlice = createSlice({
  name: 'reviewModal',
  initialState: {
    isOpen: false,
    scope: '',
    content: '',
    route: '',
    onClickOK: () => {},
    onClickCancel: () => {},
  },
  reducers: {
    setReviewModal(state, action) {
      return (state = action.payload)
    },
  },
})

export const { setReviewModal } = reviewModalSlice.actions
export default reviewModalSlice

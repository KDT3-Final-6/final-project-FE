import { createSlice } from '@reduxjs/toolkit'

const reviewModalSlice = createSlice({
  name: 'reviewModal',
  initialState: {
    isOpen: false,
    scope: '',
    content: '',
    reviewState: '',
    reviewId: 0,
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

import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    text: '',
    onClickOK: () => { },
    onClickCancel: () => { },
  },
  reducers: {
    setModal(state, action) {
      return (state = action.payload)
    }
  }
})

export const { setModal } = modal.actions
export default modal
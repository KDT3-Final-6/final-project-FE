import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    text: '',
    route: '',
    onClickOK: () => {},
    onClickCancel: () => {},
  },
  reducers: {
    setModal(state, action) {
      return (state = action.payload)
    },
  },
})

export const { setModal } = modalSlice.actions
export default modalSlice

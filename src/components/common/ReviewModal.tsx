import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'
import { COLORS } from '@src/styles/root'

interface Props {}

const ReviewModal = (props: Props) => {
  const modalState = useSelector((state: RootState) => state.reviewModal)
  const customStyle: object = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: '10',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      inset: 'auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '35px 40px',
      borderRadius: '10px',
      backgroundColor: COLORS.white,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
  }
  return (
    <Modal isOpen={modalState.isOpen} style={customStyle}>
      ReviewModal
    </Modal>
  )
}

export default ReviewModal

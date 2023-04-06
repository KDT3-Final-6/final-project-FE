import React, { useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from './Button'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { ReducerType } from '@src/reduxStore/rootReducer'

const ModalBox = () => {
  const modalState = useSelector((state: ReducerType) => state.modal)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    modalState.onClickOK()
    setIsDisabled(true)
    setTimeout(() => setIsDisabled(false), 1000)
  }

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
      <ModalTxtStyle>{modalState.text}</ModalTxtStyle>
      <ModalFormStyle>
        <ButtonsStyle>
          <Button
            buttonType="transparent"
            bgColor={COLORS.primary}
            onClick={handleClick}
            // isDisabled={isDisabled}
          >
            확인
          </Button>
          {modalState.onClickCancel && (
            <Button
              buttonType="transparent"
              bgColor={COLORS.cbcbcbc}
              onClick={modalState.onClickCancel}
            >
              취소
            </Button>
          )}
        </ButtonsStyle>
      </ModalFormStyle>
    </Modal>
  )
}

export default ModalBox

const ModalTxtStyle = styled.p`
  font-weight: ${FONTWEGHT.fw700};
  white-space: pre-line;
  text-align: center;
  margin-bottom: 30px;
  font-size: ${FONTSIZE.fz14};
  color: ${COLORS.c1b1b1b};
`

const ModalFormStyle = styled.form``

const ButtonsStyle = styled.div`
  display: flex;
  gap: 10px;
  button {
    border-radius: 7px;
    padding: 10px 30px;
    color: ${COLORS.white};
  }
`

import { RootState } from '@src/reduxStore/store'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from './Button'
import { COLORS, FONTWEGHT } from '@src/styles/root'

const ModalBox = () => {
  const modalState = useSelector((state: RootState) => state.modal)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    modalState.onClickOK()
    setIsDisabled(true)
    setTimeout(() => setIsDisabled(false), 1000)
  }

  const customStyle: any = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      width: '310px',
      height: '200px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '26px 34px',
      borderRadius: '10px',
      backgroundColor: COLORS.white,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: '10',
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
              bgColor={COLORS.primary}
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
`

const ModalFormStyle = styled.form``

const ButtonsStyle = styled.div`
  button {
    border-radius: 7px;
    padding: 10px 12px;
    color: ${COLORS.white};
  }
`

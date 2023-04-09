import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'
import { COLORS } from '@src/styles/root'
import Title from './Title'
import Button from './Button'
import { FaStar } from 'react-icons/fa'

interface Props {}

const ReviewModal = (props: Props) => {
  const modalState = useSelector((state: RootState) => state.reviewModal)
  const handleClick = () => {
    modalState.onClickOK()
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
      width: '700px',
      height: '650px',
    },
  }
  return (
    <Modal isOpen={modalState.isOpen} style={customStyle}>
      <Title>후기 작성하기</Title>
      <div onClick={modalState.onClickCancel}>X</div>
      <form>
        <ScopeStyle>
          <span>별점*</span>
          <div style={{ display: 'flex' }}>
            <label htmlFor="scope1">
              <input type="checkbox" id="scope1" value="1" name="scope" />
              <FaStar />
            </label>
            <label htmlFor="scope2">
              <input type="checkbox" id="scope2" value="2" name="scope" />
              <FaStar />
            </label>
            <label htmlFor="scope3">
              <input type="checkbox" id="scope3" value="3" name="scope" />
              <FaStar />
            </label>
            <label htmlFor="scope4">
              <input type="checkbox" id="scope4" value="4" name="scope" />
              <FaStar />
            </label>
            <label htmlFor="scope5">
              <input type="checkbox" id="scope5" value="5" name="scope" />
              <FaStar />
            </label>
          </div>
        </ScopeStyle>
        <ContentStyle>
          <label htmlFor="content">내용*</label>
          <textarea id="content" cols={30} rows={10}></textarea>
        </ContentStyle>
        <div>
          <Button type="submit" onClick={handleClick}>
            후기 작성하기
          </Button>
        </div>
      </form>
    </Modal>
  )
}

const ScopeStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span {
    font-weight: 700;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
    svg {
      font-size: 38px;
      color: ${COLORS.cE0E0E0};
    }
  }
  input[type='checkbox']:checked + svg {
    color: ${COLORS.cffcc43};
  }
`

const ContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-weight: 700;
  }
  textarea {
    border: 1px solid ${COLORS.cE0E0E0};
    border-radius: 12px;
    height: 260px;
    outline: none;
    font-size: 16px;
    padding: 10px;
  }
`

export default ReviewModal

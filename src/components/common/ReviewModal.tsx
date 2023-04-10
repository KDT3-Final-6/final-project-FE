import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'
import { COLORS } from '@src/styles/root'
import Title from './Title'
import Button from './Button'
import { FaStar } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'
import { useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useEditReviewMutation, usePostReviewMutation } from '@src/reduxStore/api/reviewApiSlice'
import { ErrorMessage } from './InputItem'

const ReviewModal = () => {
  const modalState = useSelector((state: RootState) => state.reviewModal)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [editReview] = useEditReviewMutation()
  const [postReview] = usePostReviewMutation()
  const reviewId = modalState.reviewId
  const reviewState = modalState.reviewState

  const handleClick = async (data: FieldValues) => {
    const { content, scope } = data
    if (reviewState === '수정') {
      // await editReview({ postId: reviewId, data: { content, scope: +scope } })
      modalState.onClickOK()
    } else if (reviewState === '작성') {
      await postReview({ content, scope: +scope, purchasedProductId: reviewId })
      modalState.onClickOK()
    }
  }

  const schema = yup.object().shape({
    scope: yup.string().required('점수를 입력하세요.'),
    content: yup.string().min(5, '다섯 글자 이상 작성해 주세요.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    handleClick(data)
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
      justifyContent: 'space-between',
      fontFamily: 'Pretendard Variable',
      flexDirection: 'column',
      padding: '35px 40px',
      borderRadius: '10px',
      backgroundColor: COLORS.white,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '700px',
      height: '550px',
      position: 'relative',
    },
  }

  return (
    <Modal isOpen={modalState.isOpen} style={customStyle}>
      <Title fontWeight="500">후기 작성하기</Title>
      <CancelButtonStyle onClick={modalState.onClickCancel}>
        <BsXLg />
      </CancelButtonStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <ScopeStyle>
          <span>별점*</span>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return (
                <label key={i}>
                  <input
                    className="rating"
                    type="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    {...register('scope')}
                  />
                  <FaStar
                    className="star"
                    color={ratingValue <= (hover || rating) ? COLORS.cffcc43 : COLORS.cE0E0E0}
                    size={40}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              )
            })}
            {/* {errors.scope && <ErrorMessage>{errors.scope.message}</ErrorMessage>} */}
          </div>
        </ScopeStyle>
        <ContentStyle>
          <label htmlFor="content">내용*</label>
          <textarea
            id="content"
            {...register('content')}
            placeholder={modalState.content}
          ></textarea>
          {/* {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>} */}
        </ContentStyle>
        <div>
          <Button type="submit" buttonType="cartSkyBlue" width="106px" borderRadius="10px">
            후기 작성하기
          </Button>
        </div>
      </FormStyle>
    </Modal>
  )
}

const ScopeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-weight: 500;
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
`
const CancelButtonStyle = styled.div`
  position: absolute;
  right: 40px;
  cursor: pointer;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  div:last-child {
    align-self: self-end;
  }
`

const ContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-weight: 500;
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

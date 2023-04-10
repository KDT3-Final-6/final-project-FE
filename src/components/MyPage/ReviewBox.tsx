import React, { useState } from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import ProductCard, { ImgAreaStyle, TxtAreaStyle } from '../common/ProductCard'
import Button from '../common/Button'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import { IReviewValue } from '@src/interfaces/review'
import StarRateWrapGet from '../common/StarRateWrapGet'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MESSAGES from '@src/constants/messages'
import { setModal } from '@src/reduxStore/modalSlice'
import { useDeleteReviewMutation, useEditReviewMutation } from '@src/reduxStore/api/reviewApiSlice'
import { setReviewModal } from '@src/reduxStore/reviewModalSlice'
import ReviewModal from './ReviewModal'

interface Props {
  review: IReviewValue
}

const ReviewBox = ({ review }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [deleteReview] = useDeleteReviewMutation()
  const { postId, scope, postContent, productId, modifiedDate } = review
  const [post, setpost] = useState()
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)

  const deleteReviewHandler = async () => {
    // dispatch(
    //   setModal({
    //     isOpen: true,
    //     text: MESSAGES.REVIEW.normal,
    //     onClickOK: async () => {
    //       await deleteReview(review.postId)
    //       dispatch(setModal({ isOpen: false }))
    //     },
    //     onClickCancel: () => {
    //       dispatch(setModal({ isOpen: false }))
    //     },
    //   })
    // )
    setIsModalOpen(false)
    await deleteReview(postId)
    alert('리뷰를 삭제했습니다!')
  }

  const editReviewHandler = async () => {
    setIsModalOpen((prev) => !prev)
    setIsEdit((prev) => !prev)
    // dispatch(
    //   setReviewModal({
    //     isOpen: true,
    //     scope: review.scope,
    //     content: review.postContent,
    //     reviewId: review.postId,
    //     reviewState: '수정',
    //     onClickOK: () => {
    //       dispatch(setReviewModal({ isOpen: false, scope: '', content: '' }))
    //     },
    //     onClickCancel: () => {
    //       dispatch(setReviewModal({ isOpen: false }))
    //     },
    //   })
    // )
  }

  const navigate = useNavigate()
  return (
    <>
      <ProductCard cardType="barType" height="230px">
        <ImgAreaStyle
          onClick={() => navigate(`/product/${review.productId}`)}
          style={{ cursor: 'pointer' }}
        >
          <img src={review.purchasedProductThumbnail} alt="썸네일" />
        </ImgAreaStyle>
        <TxtAreaStyle isBarType={true}>
          <DesStyle>
            <span>{review.modifiedDate}</span>
            <Title
              titleType="h2"
              title={review.purchasedProductName}
              fontSize={FONTSIZE.fz22}
              fontWeight={FONTWEGHT.fw600}
            />
            <span>{review.postContent}</span>
          </DesStyle>
          <StarNButtonStyle>
            <StarRateWrapGet AVR_RATE={review.scope * 20} />
            <div>
              <Button buttonType="borderGray" onClick={editReviewHandler}>
                수정하기
              </Button>
              <Button buttonType="borderGray" onClick={deleteReviewHandler}>
                삭제하기
              </Button>
            </div>
          </StarNButtonStyle>
        </TxtAreaStyle>
      </ProductCard>
      {isModalOpen && (
        <ReviewModal
          postId={postId}
          editScope={scope}
          editContent={postContent}
          setIsModalOpen={setIsModalOpen}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      )}
    </>
  )
}

const DesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span:first-child {
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.primary};
  }
  span:last-child {
    font-size: 18px;
  }
`

const StarNButtonStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  svg {
    width: 36px;
    height: 36px;
  }
  div:first-child {
    color: ${COLORS.primary};
  }
  div:last-child {
    display: flex;
    gap: 10px;
  }
`

export default ReviewBox

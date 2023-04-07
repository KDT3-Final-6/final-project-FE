import React, { useState } from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import ProductCard, { ImgAreaStyle, TxtAreaStyle } from '../common/ProductCard'
import Button from '../common/Button'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import { IReviewContentUnion } from '@src/interfaces/review'
import StarRateWrapGet from '../common/StarRateWrapGet'
import Input from '../common/Input'
import { useForm, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../common/InputItem'
import { deleteReview, editReview } from '@src/api/mypage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MESSAGES from '@src/constants/messages'
import { setModal } from '@src/reduxStore/modalSlice'

interface Props {
  review: IReviewContentUnion
}

interface EditType {
  content: string
  scope: number
}

const ReviewBox = ({ review }: Props) => {
  const [isEditting, setIsEditting] = useState<boolean>(false)

  const schema = yup.object().shape({
    content: yup.string().min(5, '5글자 이상 작성해 주세요.').required('내용을 작성해 주세요.'),
    scope: yup
      .number()
      .typeError('숫자만 입력해 주세요.')
      .max(5, '5점까지 줄 수 있습니다.')
      .required('점수를 작성해 주세요.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditType>({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FieldValues) => {
    await editReview(review.postId, data)
    setIsEditting((prev) => !prev)
    window.location.reload()
  }

  const dispatch = useDispatch()

  const deleteReviewHandler = async () => {
    dispatch(
      setModal({
        isOpen: true,
        text: MESSAGES.REVIEW.normal,
        onClickOK: async () => {
          await deleteReview(review.postId)
          dispatch(setModal({ isOpen: false, route: navigate('/mypage/myreview') }))
        },
        onClickCancel: () => {
          dispatch(setModal({ isOpen: false }))
        },
      })
    )
  }

  const navigate = useNavigate()
  return (
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
          {isEditting ? (
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
              <EditStyle>
                <span>내용</span>
                <div className="input-style">
                  <Input
                    inputType="textInput"
                    placeholder={review.postContent}
                    register={register('content')}
                    width="50%"
                  />
                  {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}
                </div>
              </EditStyle>
              <EditStyle>
                <span>평점</span>
                <div className="input-style">
                  <Input
                    inputType="textInput"
                    placeholder={String(review.scope)}
                    register={register('scope')}
                    width="50%"
                  />
                  {errors.scope && <ErrorMessage>{errors.scope.message}</ErrorMessage>}
                </div>
              </EditStyle>
              <EditButtonStyle>
                <Button buttonType="borderGray" type="submit">
                  수정하기
                </Button>
                <Button buttonType="borderGray" onClick={() => setIsEditting((prev) => !prev)}>
                  취소하기
                </Button>
              </EditButtonStyle>
            </FormStyle>
          ) : (
            <span>{review.postContent}</span>
          )}
        </DesStyle>
        {isEditting ? null : (
          <StarNButtonStyle>
            <StarRateWrapGet AVR_RATE={review.scope * 20} />
            <div>
              <Button buttonType="borderGray" onClick={() => setIsEditting((prev) => !prev)}>
                수정하기
              </Button>
              <Button buttonType="borderGray" onClick={deleteReviewHandler}>
                삭제하기
              </Button>
            </div>
          </StarNButtonStyle>
        )}
      </TxtAreaStyle>
    </ProductCard>
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

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const EditStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  span:first-child {
    width: 50px;
  }
  .input-style {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
`

const EditButtonStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

export default ReviewBox

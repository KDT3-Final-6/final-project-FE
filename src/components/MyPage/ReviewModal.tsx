import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import Title from '@components/common/Title'
import Button from '@components/common/Button'
import { FaStar } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'
import { useForm, FieldValues, SubmitHandler, FieldErrors } from 'react-hook-form'
import { useRef, useState } from 'react'
import useOnClickOutside from '@src/hooks/useOnClickOutside'
import { useEditReviewMutation, usePostReviewMutation } from '@src/reduxStore/api/reviewApiSlice'

interface ISelectItemModal {
  postId?: number
  editScope?: number
  editContent?: string
  purchasedProductId?: number
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>
  isEdit?: boolean
}

interface IReviewForm {
  content: string
  scope: string
}

const ReviewModal = ({
  postId,
  editScope,
  editContent,
  setIsModalOpen,
  isEdit,
  setIsEdit,
  purchasedProductId,
}: ISelectItemModal) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsModalOpen(false))

  const [postReview] = usePostReviewMutation()
  const [patchReview] = useEditReviewMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>({})

  const onVaild = async ({ scope, content }: FieldValues, event: any) => {
    if (purchasedProductId) {
      await postReview({ content, scope, purchasedProductId })
      document.body.style.overflowY = 'auto'
      alert('리뷰를 등록하셨습니다')
      setIsModalOpen(false)
    }
    if (isEdit) {
      postId && (await patchReview({ postId, content, scope }))
      document.body.style.overflowY = 'auto'
      alert('리뷰를 수정했습니다')
      setIsModalOpen(false)
    }
  }

  const onInvalid = (data: FieldErrors) => {
    if (data.content) alert(data.content?.message)
    if (data.scope) alert(data.scope?.message)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <ModalBackDrop>
      <ModalStyle ref={ref}>
        <Title fontWeight="500" margin="0 0 19px 0" fontSize="26px">
          후기 작성하기
        </Title>
        <CancelButtonStyle>
          <BsXLg onClick={handleCloseModal} />
        </CancelButtonStyle>
        <FormStyle onSubmit={handleSubmit(onVaild, onInvalid)}>
          <ScopeStyle>
            <span>별점*</span>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return (
                <label key={i}>
                  <input
                    className="rating"
                    type="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    {...register('scope', { required: '평점을 입력해주세요' })}
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
          </ScopeStyle>
          <ContentStyle>
            <label htmlFor="content">내용*</label>
            <textarea
              defaultValue={editContent || ''}
              id="content"
              {...register('content', { required: '내용을 입력해주세요' })}
            ></textarea>
          </ContentStyle>
          <div>
            <Button type="submit" buttonType="cartSkyBlue" width="106px" borderRadius="10px">
              {isEdit ? '수정하기' : '후기 작성하기'}
            </Button>
          </div>
        </FormStyle>
      </ModalStyle>
    </ModalBackDrop>
  )
}

export default ReviewModal
const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 669px;
  height: 525px;
  padding: 25px;
  background-color: #f3f3f3;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 32px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15));
`

const ScopeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  & > span {
    font-weight: 500;
    margin-right: 31px;
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
  top: 37px;
  right: 37px;
  cursor: pointer;
  font-size: 34px;
  color: #d9d9d9;
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
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  padding-bottom: 7px;
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

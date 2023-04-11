import { COLORS, FONTWEGHT } from '@src/styles/root'
import styled, { css, keyframes } from 'styled-components'
import Button from '@components/common/Button'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import formatDate from '@src/utils/formatDate'
import {
  usePatchAdminPostMutation,
  usePostAdminPostMutation,
} from '@src/reduxStore/api/adminPostApiSlice'

interface IAnswerCard {
  type?: string
  setType?: any
  isAnswerOpen: boolean
  postId?: number
  replyDate?: string
  answer?: string
  setIsAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IAnswerForm {
  content: string
}

const AnswerCard = ({
  isAnswerOpen,
  setIsAnswerOpen,
  type,
  setType,
  replyDate,
  postId,
  answer,
}: IAnswerCard) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [isEdit, setisEdit] = useState<boolean>(false)

  const [postAnserQuestion] = usePostAdminPostMutation()
  const [editAnswerQuestion] = usePatchAdminPostMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAnswerForm>({})

  const onValid: SubmitHandler<IAnswerForm> = async ({ content }) => {
    postId && (await postAnserQuestion({ postId, content }))
    setValue('content', '')
    alert('답변완료!')
    setIsAnswerOpen(false)
  }

  const onInvalid = (errors: any) => {
    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
  }

  const handleClose = () => {
    setType('')
    setIsAnswerOpen((prev) => !prev)
  }

  /**답변 수정 기능 */
  const handleUpdate = async () => {
    setisEdit((prev) => !prev)
    if (isEdit) {
      postId && (await editAnswerQuestion({ postId, content }))
      alert('답변이 수정되었습니다.')
    }
  }

  return (
    <AnswerCardStyle onSubmit={handleSubmit(onValid, onInvalid)} isAnswerOpen={isAnswerOpen}>
      <header>
        <div>
          <span>관리자</span>
          {type === 'confirm' && replyDate ? <p>{formatDate(replyDate)}</p> : <></>}
        </div>
        <div>
          {type === 'confirm' ? (
            <ButtonGroupStyle>
              <Button
                onClick={handleUpdate}
                width="58px"
                height="32px"
                color="white"
                buttonType="cartSkyBlue"
              >
                {isEdit ? '완료' : '수정'}
              </Button>
            </ButtonGroupStyle>
          ) : (
            <Button type="submit" width="58px" height="32px" buttonType="cartSkyBlue">
              확인
            </Button>
          )}
          <Button width="58px" height="32px" buttonType="black" onClick={handleClose}>
            {type === 'confirm' ? '닫기' : '취소'}
          </Button>
        </div>
      </header>
      {type === 'confirm' ? (
        <ReadOnlyTextareaStyle
          defaultValue={answer}
          onChange={(e) => setContent(e.target.value)}
          readOnly={isEdit ? false : true}
        ></ReadOnlyTextareaStyle>
      ) : (
        <TextareaStyle
          id="qna"
          value={content}
          placeholder={'답글 입력 시 자동으로 답변완료 상태로 변경됩니다.'}
          {...register('content', { required: '내용을 입력해주세요' })}
          onChange={(e) => setContent(e.target.value)}
          name="content"
        ></TextareaStyle>
      )}
    </AnswerCardStyle>
  )
}

export default AnswerCard

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const AnswerCardStyle = styled.form<{ isAnswerOpen: boolean }>`
  display: ${({ isAnswerOpen }) => (isAnswerOpen ? 'block' : 'none')};
  animation: ${({ isAnswerOpen }) =>
    isAnswerOpen
      ? css`
          ${fadeIn} 0.3s ease-out forwards
        `
      : ''};
  width: 925px;
  height: 307px;
  padding: 35px 18px;
  background-color: ${COLORS.cefefef};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
    width: 100%;
    div:first-child {
      display: flex;
      align-items: center;
      /* flex-direction: column; */
      span {
        font-weight: ${FONTWEGHT.fw600};
        font-size: 16px;
        line-height: 19px;
        margin-right: 10px;
      }
      p {
        font-weight: ${FONTWEGHT.fw500};
        color: ${COLORS.c999};
      }
    }
    div:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`

const ButtonGroupStyle = styled.div``

const TextareaStyle = styled.textarea`
  border: none;
  width: 889px;
  min-height: 177px;
  background-color: ${COLORS.white};
  padding: 25px 18px;
  font-size: 15px;
  line-height: 18px;
  outline: none;
`

const ReadOnlyTextareaStyle = styled.textarea`
  border: none;
  width: 889px;
  min-height: 177px;
  background-color: ${COLORS.white};
  padding: 25px 18px;
  font-size: 15px;
  line-height: 18px;
  outline: none;
`

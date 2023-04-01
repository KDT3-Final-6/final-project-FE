import { COLORS, FONTWEGHT } from '@src/styles/root'
import styled, { css, keyframes } from 'styled-components'
import Button from '@components/common/Button'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IAnswerCard {
  type?: string
  setType?: any
  isAnswerOpen: boolean
  setIsAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IAnswerForm {
  content: string
}
const AnswerCard = ({ isAnswerOpen, setIsAnswerOpen, type, setType }: IAnswerCard) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const answer = '답변이에요' // qna답변 패칭
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAnswerForm>({})

  const onValid: SubmitHandler<IAnswerForm> = (data) => {
    alert(JSON.stringify(data))
  }

  const onInvalid = (errors: any) => {
    console.log(errors)

    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
  }

  const handleClose = () => {
    setType('')
    setIsAnswerOpen((prev) => !prev)
  }

  const handleDelete = () => {
    // 답변 삭제 기능
    setIsAnswerOpen((prev) => !prev)
  }

  return (
    <AnswerCardStyle onSubmit={handleSubmit(onValid, onInvalid)} isAnswerOpen={isAnswerOpen}>
      <header>
        <div>
          <span>관리자</span>
        </div>
        <div>
          {type === 'confirm' ? (
            <Button
              onClick={handleDelete}
              width="58px"
              height="32px"
              color="white"
              buttonType="cartSkyBlue"
            >
              삭제
            </Button>
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
        <ReadOnlyTextareaStyle>{answer}</ReadOnlyTextareaStyle>
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
    div:first-child {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-weight: ${FONTWEGHT.fw600};
        font-size: 16px;
        line-height: 19px;
      }
    }
    div:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`

const TextareaStyle = styled.textarea`
  border: none;
  width: 889px;
  min-height: 177px;
  background-color: ${COLORS.white};
  padding: 25px 18px;
  font-size: 15px;
  line-height: 18px;
`

const ReadOnlyTextareaStyle = styled.div`
  border: none;
  width: 889px;
  min-height: 177px;
  background-color: ${COLORS.white};
  padding: 25px 18px;
  font-size: 15px;
  line-height: 18px;
`

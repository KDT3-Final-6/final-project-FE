import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Button from '@components/common/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IQuestionCard {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IOneOnOneForm {
  title?: string
  content?: string
}

const QuestionCard = ({ isOpen, setIsOpen }: IQuestionCard) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')
  const schema = yup.object().shape({
    title: yup.string().required('제목을 입력해주세요.'),
    content: yup.string().required('문의내용을 입력해 주세요.'),
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IOneOnOneForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const onValid: SubmitHandler<IOneOnOneForm> = ({ title, content }, event: any) => {
    event.preventDefault()
    console.log(title, content)
    setIsOpen(false)
    setValue('title', '')
    setValue('content', '')
  }

  const onInvalid = (errors: any) => {
    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
  }

  return (
    <FormStyle isOpen={isOpen} onSubmit={handleSubmit(onValid, onInvalid)}>
      <TitleInputStyle placeholder="제목을 입력해주세요." {...register('title')} />

      <ContentInputStyle
        placeholder="문의할 내용을 작성해 주세요"
        {...register('content')}
      ></ContentInputStyle>
      <FooterStyle>
        <ButtonBoxStyle>
          <Button type="submit" buttonType="borderGray">
            저장하기
          </Button>
          <Button buttonType="borderGray" onClick={() => setIsOpen((prev) => !prev)}>
            취소하기
          </Button>
        </ButtonBoxStyle>
      </FooterStyle>
    </FormStyle>
  )
}

export default QuestionCard

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const FormStyle = styled.form<{ isOpen: boolean }>`
  width: 1180px;
  min-height: 200px;
  border: 1px solid ${COLORS.cddd};
  border-radius: 12px;
  padding: 0 24px;
  font-size: ${FONTSIZE.fz20};
  background-color: rgba(59, 161, 255, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${fadeIn} 0.3s ease-out forwards
        `
      : ''};
`

const TitleInputStyle = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.cddd};
  font-weight: ${FONTWEGHT.fw500};
  line-height: 31px;
  font-size: ${FONTSIZE.fz20};
  &::placeholder {
    color: ${COLORS.ca6a6a6};
  }
  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

const ContentInputStyle = styled.input`
  padding-top: 24px;
  font-size: ${FONTSIZE.fz20};
  width: 100%;
  &::placeholder {
    color: ${COLORS.ca6a6a6};
  }
`

const FooterStyle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 24px 0;
`

const ButtonBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

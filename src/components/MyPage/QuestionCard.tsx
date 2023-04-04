import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { ChangeEvent, useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Button from '@components/common/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from '../common/Select'
import SelectItemModal from './SelectItemModal'

interface IQuestionCard {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IOneOnOneForm {
  title?: string
  content?: string
}

const schema = yup.object().shape({
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('문의내용을 입력해 주세요.'),
})

const QuestionCard = ({ isOpen, setIsOpen }: IQuestionCard) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selcetedProduct, setSelcetedProduct] = useState<string | null>(null)

  const selectOptions: string[] = ['문의유형', '주문/결제', '환불문의', '상품문의', '회원정보']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])
  console.log('isModalOpen', isModalOpen)

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
    if (currentValue === '문의유형' || currentValue === '') {
      alert('문의유형을 선택해 주세요.')
      return
    }
    console.log(title, currentValue, content, selcetedProduct)
    setIsOpen(false)
    setValue('title', '')
    setValue('content', '')
    setSelcetedProduct(null)
    setCurrentValue(selectOptions[0])
  }

  const onInvalid = (errors: any) => {
    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
  }

  const handleCancelBtn = () => {
    setValue('title', '')
    setValue('content', '')
    setCurrentValue('문의유형')
    setSelcetedProduct(null)
    setIsOpen(false)
  }

  return (
    <FormStyle isOpen={isOpen}>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <HeaderStyle>
          <TitleInputStyle placeholder="제목을 입력해주세요." {...register('title')} />
          <Select
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            setIsModalOpen={setIsModalOpen}
            setSelcetedProduct={setSelcetedProduct}
            initial={selectOptions[0]}
            width="127px"
            height="32px"
            options={selectOptions}
            borderRadius="0"
            register={register}
          />
        </HeaderStyle>

        {selcetedProduct && currentValue === '상품문의' && (
          <QnATypeSectionStyle>
            <span>상품</span>
            <span>:</span>
            <span>{selcetedProduct}</span>
            <Button
              width="65px"
              height="32px"
              borderRadius="24px"
              bgColor="#404040"
              color={`${COLORS.white}`}
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              변경
            </Button>
          </QnATypeSectionStyle>
        )}
        <TextareaStyle
          placeholder="문의할 내용을 작성해 주세요"
          {...register('content')}
        ></TextareaStyle>
        <FooterStyle>
          <ButtonBoxStyle>
            <Button type="submit" buttonType="borderGray">
              저장하기
            </Button>
            <Button buttonType="borderGray" onClick={handleCancelBtn}>
              취소하기
            </Button>
          </ButtonBoxStyle>
        </FooterStyle>
      </form>
      {currentValue === '상품문의' && isModalOpen && (
        <SelectItemModal
          setIsModalOpen={setIsModalOpen}
          setCurrentValue={setCurrentValue}
          selcetedProduct={selcetedProduct}
          setSelcetedProduct={setSelcetedProduct}
        />
      )}
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

const FormStyle = styled.div<{ isOpen: boolean }>`
  width: 1180px;
  min-height: 300px;
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
const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.cddd};
`
const QnATypeSectionStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  button {
    border-color: #404040;
    &:hover {
      box-shadow: ${COLORS.boxShowdow};
      background-color: #404040;
    }
  }
`

const TitleInputStyle = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 12px;
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

const TextareaStyle = styled.textarea`
  margin-top: 24px;
  font-size: ${FONTSIZE.fz20};
  width: 100%;
  border: none;
  min-height: 120px;
  /* border: 1px solid; */
  background-color: transparent;
  &::placeholder {
    color: ${COLORS.ca6a6a6};
    font-size: ${FONTSIZE.fz20};
  }
  &:focus {
    outline: none;
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
  button:hover {
    box-shadow: ${COLORS.boxShowdow};
  }
`

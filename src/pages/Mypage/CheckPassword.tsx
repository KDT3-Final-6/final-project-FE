import Button from '@src/components/common/Button'
import Input from '@src/components/common/Input'
import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import React, { useState } from 'react'
import styled from 'styled-components'
import { checkpassword } from '@src/api/auth'
import { useForm, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@src/components/common/InputItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'

interface IvalidationForm {
  memberPassword: string
}

const CheckPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const schema = yup.object().shape({
    memberPassword: yup
      .string()
      .min(7, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .required('비밀번호를 입력해 주세요.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await checkpassword(data)
      if (response) {
        navigate('/mypage/infoedit')
      } else {
        dispatch(
          setModal({
            isOpen: true,
            text: MESSAGES.CHECKPASSWORD.error,
            onClickOK: () => dispatch(setModal({ isOpen: false })),
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Inner>
        <CheckPasswordStyle>
          <Title>비밀번호 확인</Title>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            {errors.memberPassword && <ErrorMessage>{errors.memberPassword.message}</ErrorMessage>}
            <InputBoxStyle>
              <Input
                inputType="textInput"
                type="password"
                width="250px"
                placeholder="비밀번호를 입력하세요."
                register={register('memberPassword')}
              />
              <Button buttonType="skyBlue" type="submit" borderRadius="0" width="150px">
                확인
              </Button>
            </InputBoxStyle>
          </FormStyle>
        </CheckPasswordStyle>
      </Inner>
    </div>
  )
}

const CheckPasswordStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormStyle = styled.form`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export default CheckPassword

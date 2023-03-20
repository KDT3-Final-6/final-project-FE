import React from 'react'
import { useForm } from 'react-hook-form'

interface Props {
  inputType: string
  placeholder?: string
}

const Input = ({ inputType, placeholder }: Props) => {
  return <input type={inputType} placeholder={placeholder} />
}

export default Input

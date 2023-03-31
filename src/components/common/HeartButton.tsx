import React from 'react'
import styled from 'styled-components'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { COLORS, FONTSIZE } from '@src/styles/root'

interface IHeart {
  productId?: number
  top?: string
  right?: string
  isHeart?: boolean
  setHeart?: any
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const HeartButton = ({ productId, isHeart = false, setHeart, top = '', right = '' }: IHeart) => {
  const toggleHeart = () => {
    setHeart((current: boolean) => !current)
  }

  return (
    <HeartButtonStyle
      onClick={toggleHeart}
      top={top}
      right={right}
      isHeart={isHeart}
      title="찜하기"
    >
      <BsFillSuitHeartFill />
    </HeartButtonStyle>
  )
}

export default HeartButton

const HeartButtonStyle = styled.button<{
  isHeart: boolean
  top: string
  right: string
}>`
  width: 38px;
  height: 38px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${({ isHeart }) => (isHeart ? COLORS.heart : COLORS.white)};
  font-size: ${FONTSIZE.fz18};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`

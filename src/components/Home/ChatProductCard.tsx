import { ISearchContent } from '@src/interfaces/search'
import { COLORS } from '@src/styles/root'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface IChatProductCard {
  product: ISearchContent
}

const ChatProductCard = ({ product }: IChatProductCard) => {
  const navigate = useNavigate()
  const { productId, productThumbnail, productName, productContent, productPrice } = product

  return (
    <ChatProductCardStyle onClick={() => navigate(`/product/${productId}`)}>
      <img src={productThumbnail} alt={productName} />
      <div>
        <span>{productName}</span>
        <span>{productContent}</span>
        <span>{productPrice.toLocaleString()}원</span>
      </div>
    </ChatProductCardStyle>
  )
}

export default ChatProductCard

const ChatProductCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 9px;
  width: 280px;
  height: 82px;
  background: ${COLORS.white};
  border: 1px solid #b6b5b5;
  border-radius: 6px;
  box-shadow: ${COLORS.boxShowdow};
  color: ${COLORS.black};
  padding: 11px 12px;
  margin-left: 43px;
  img {
    width: 80px;
    height: 60px;
    border-radius: 5px;
  }
  div {
    width: 174px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    span:first-child {
      font-weight: 500;
      line-height: 145%;
      letter-spacing: -0.02em;
      align-self: start;
    }
    span:nth-child(2) {
      line-height: 145%;
      letter-spacing: -0.02em;
      font-size: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:last-child {
      font-weight: 700;
      line-height: 16px;
      align-self: end;
    }
  }
`

import React, { useEffect, useState } from 'react'
import Image from '../common/Image'
import styled from 'styled-components'
import Button from '../common/Button'
import { COLORS } from '@src/styles/root'
import { MdEditCalendar } from 'react-icons/md'
import ChatProductCard from './ChatProductCard'
import { useNavigate } from 'react-router-dom'
import PATH from '@src/constants/pathConst'
import { useGetSearchListQuery } from '@src/reduxStore/api/searchApiSlice'

interface ItemsType {
  id: number
  type: string
  message: string
  keyword?: string
  isProduct?: boolean
  isButton?: {
    message: string
  }
}
interface IGotogetherChatBox {
  item: ItemsType
  isType: string | null
}

const GotogetherChatBox = ({ item, isType }: IGotogetherChatBox) => {
  const { id, type, message } = item
  const navigate = useNavigate()

  const { data: searchList, isLoading } = useGetSearchListQuery(
    { keyword: item.keyword || null, sortTarget: '인기순', page: 1 },
    { refetchOnMountOrArgChange: true, skip: !item.keyword && !isType }
  )

  if (isLoading) <>Loading...</>

  const products = searchList && searchList.content
  const hasProducts = products && products.length > 0
  const randomSearchContent = hasProducts && products[Math.floor(Math.random() * products.length)]

  if (isType === type) {
    return (
      <GotogetheStyle>
        <div>
          <Image src="/images/icons/chat.png" />
          <ChatStyle>
            <span>{message}</span>
          </ChatStyle>
        </div>
        {randomSearchContent ? <ChatProductCard product={randomSearchContent} /> : <></>}
        {item.isButton ? (
          <Button margin="0 0 12px 60px" onClick={() => navigate(PATH.SURVEY)}>
            <span>{item.isButton.message}</span>
            <MdEditCalendar />
          </Button>
        ) : (
          <></>
        )}
      </GotogetheStyle>
    )
  } else {
    return null
  }
}

export default GotogetherChatBox

const GotogetheStyle = styled.div`
  & > div {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    background: #3ba1ff;
    color: ${COLORS.white};
    border: 0.5px solid #b6b5b5;
    border-radius: 999px;
    width: 205px;
    height: 39px;
    padding: 10px 16px;
    gap: 8px;
    svg {
      margin: 0;
    }
  }
`
const ChatStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 16px;
  background: #f3f6f9;
  border-radius: 0px 16px 16px 16px;
  font-size: 14px;
  line-height: 145%;
  span {
    white-space: pre-line;
  }
`

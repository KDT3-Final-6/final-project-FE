import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'
import formatDate from '@src/utils/formatDate'
import Button from '@components/common/Button'
import AnswerCard from './AnswerCard'
import { MdArrowDropDown } from 'react-icons/md'
import { IAdminPostContent } from '@src/interfaces/adminPost'

interface IPostCard {
  post: IAdminPostContent
}

const PostCard = ({ post }: IPostCard) => {
  const {
    postId,
    postTitle,
    postContent,
    inquiryType,
    qnAStatus,
    answer,
    replyDate,
    purchasedProductName,
    createdDate,
    memberName,
  } = post
  const [isAnswerOpen, setIsAnswerOpen] = useState(false)
  const [type, setType] = useState('')

  const handleAnswerClick = () => {
    setIsAnswerOpen((prev) => !prev)
    setType('')
  }
  const handleConfirmClick = () => {
    setIsAnswerOpen((prev) => !prev)
    setType('confirm')
  }
  return (
    <div>
      <PostCardStyle qnAStatus={qnAStatus}>
        <header>
          <div>
            <h2>{postTitle}</h2>
            <span>{qnAStatus}</span>
          </div>
          <div>
            {qnAStatus === '답변완료' ? (
              <></>
            ) : (
              <Button width="83px" height="32px" buttonType="black" onClick={handleAnswerClick}>
                답변달기
              </Button>
            )}
          </div>
        </header>
        <PostInfoStyle>
          <div>
            <span>{memberName}</span>
            <span>{formatDate(createdDate)}</span>
          </div>
          <span>{inquiryType}</span>
          <span>{purchasedProductName}</span>
        </PostInfoStyle>
        <ContentStyle>{postContent}</ContentStyle>
        {qnAStatus === '답변완료' ? (
          <AnswerConfirmStyle onClick={handleConfirmClick}>
            <span>답변 내용 확인하기</span>
            <MdArrowDropDown />
          </AnswerConfirmStyle>
        ) : (
          <></>
        )}
      </PostCardStyle>
      {isAnswerOpen && (
        <AnswerCard
          isAnswerOpen={isAnswerOpen}
          setIsAnswerOpen={setIsAnswerOpen}
          type={type}
          setType={setType}
          replyDate={replyDate}
          postId={postId}
          answer={answer}
        />
      )}
    </div>
  )
}

export default PostCard

const PostCardStyle = styled.div<{ qnAStatus: string }>`
  width: 925px;
  min-height: 207px;
  border: 1px solid ${COLORS.c999};
  padding: 35px 18px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      h2 {
        font-size: ${FONTSIZE.fz16};
        line-height: 19px;
      }
      span {
        font-size: ${FONTSIZE.fz14};
        line-height: 19px;
        font-weight: ${FONTWEGHT.fw600};
        color: ${({ qnAStatus }) =>
          qnAStatus === '답변완료' ? `${COLORS.c3ba1ff}` : `${COLORS.c999}`};
      }
    }
  }
`

const PostInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
    align-items: end;
    gap: 9px;
    color: ${COLORS.c999};
    span:first-child {
      color: ${COLORS.c3ba1ff};
      font-weight: ${FONTWEGHT.fw600};
    }
  }
  span:first-child {
    font-size: ${FONTSIZE.fz14};
    color: ${COLORS.c999};
  }
  span:last-child {
    font-size: ${FONTSIZE.fz14};
    color: ${COLORS.c999};
  }
`

const ContentStyle = styled.div`
  min-height: 50px;
  margin-top: 35px;
  font-size: ${FONTSIZE.fz16};
`

const AnswerConfirmStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${COLORS.c999};
  gap: 2px;
  margin-top: 20px;
  text-decoration: underline;
  svg {
    margin: 0;
  }
`

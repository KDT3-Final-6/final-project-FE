import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'
import { COLORS } from '@src/styles/root'
import Image from '../common/Image'
import GotogetherChatBox from './GotogetherChatBox'
import Button from '../common/Button'
import { FieldErrors, useForm, FieldValues } from 'react-hook-form'
import Input from '../common/Input'
import useOnClickOutside from '@src/hooks/useOnClickOutside'

const typeAnsers = [
  {
    id: 1,
    type: '5070상품추천',
    keyword: '5070끼리',
    message: '5070그룹 인기상품을 추천드립니다.',
    isProduct: true,
  },
  {
    id: 2,
    type: '골프상품추천',
    keyword: '골프',
    message: '골프 인기상품을 추천드립니다.',
    isProduct: true,
  },
  {
    id: 3,
    type: '휴양지상품',
    keyword: '휴양지',
    message: '휴양지 인기상품을 추천드립니다.',
    isProduct: true,
  },
  {
    id: 4,
    type: '여행추천',
    message: '고객님 취향에 꼭 맞는 여행 추천을 위해 간단한\n큐레이션 후 상품을 추천드릴게요.',
    isButton: {
      message: '여행 큐레이션 받으러가기',
    },
  },
  {
    id: 5,
    type: '사무실위치',
    message:
      '고투게더(더샤이니) 사무실 주소는\n서울특별시 중구 청계천로40, 한국관광공사\n서울센터 818호 입니다.',
  },
  {
    id: 6,
    type: '영업시간',
    message: '고투게더(더샤이니) 영업시간은\n09:00 ~ 18:00 입니다.',
  },
  {
    id: 7,
    type: '계좌번호',
    message:
      '고투게더(더샤이니) 입금계좌번호는\nKEB하나은행 267-910020-36604\n(주)더샤이니 입니다.',
  },
]

const types = [
  '5070상품추천',
  '골프상품추천',
  '휴양지상품',
  '여행추천',
  '사무실위치',
  '영업시간',
  '계좌번호',
]

export interface ISearchForm {
  keyword: string
}
interface IChatBot {
  isChatBotOpen: boolean
  setIsChatBotOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ChatBot = ({ isChatBotOpen, setIsChatBotOpen }: IChatBot) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false)
  const [isType, setIsType] = useState<string | null>(null)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsChatBotOpen(false))

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = event.target as HTMLLIElement
    setIsType(innerText)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowNavigation(true)
      } else {
        setShowNavigation(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { register, handleSubmit, setValue } = useForm<ISearchForm>({})

  const onValid = (data: FieldValues, event: any) => {
    if (!types.includes(data.keyword)) {
      alert('위의 키워드로만 입력이 가능합니다!')
      setValue('keyword', '')
      return
    } else {
      setIsType(data.keyword)
    }
  }

  const onInvalid = (data: FieldErrors) => {
    alert(data.keyword?.message)
  }

  return (
    <ChatBotStyle isChatBotOpen={isChatBotOpen} showNavigation={showNavigation} ref={ref}>
      <HeaderStyle>
        <span>고투게더 챗봇 서비스</span>
        <AiFillCloseCircle onClick={() => setIsChatBotOpen(false)} />
      </HeaderStyle>
      <MainStyle>
        <GotogetheStyle>
          <Image src="/images/icons/chat.png" />
          <ChatStyle>
            <span>
              고객님 안녕하세요. 고투게더입니다.
              <br />
              문의하실 내용을 선택해주세요{' '}
            </span>
          </ChatStyle>
        </GotogetheStyle>
        <SelectGroupStyle>
          <div>
            {types.slice(0, 3).map((type) => (
              <span
                key={type}
                onClick={handleClick}
                style={{
                  backgroundColor: isType === type ? '#1B1B1B' : 'inherit',
                  color: isType === type ? 'white' : '#1B1B1B',
                }}
              >
                {type}
              </span>
            ))}
          </div>
          <div>
            {types.slice(3).map((type) => (
              <span
                key={type}
                onClick={handleClick}
                style={{
                  backgroundColor: isType === type ? '#1B1B1B' : 'inherit',
                  color: isType === type ? 'white' : '#1B1B1B',
                }}
              >
                {type}
              </span>
            ))}
          </div>
        </SelectGroupStyle>
        {typeAnsers.map((item) => (
          <GotogetherChatBox key={item.id} item={item} isType={isType} />
        ))}
      </MainStyle>
      <FooterStyle onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          inputType=""
          type="text"
          width="272px"
          height="40px"
          placeholder="문의하실 내용을 위의 키워드로 입력하세요."
          borderColor="none"
          register={register('keyword', {
            required: '검색어를 입력해주세요.',
          })}
        />
        <Button type="submit" width="54px" height="43px">
          전송
        </Button>
      </FooterStyle>
    </ChatBotStyle>
  )
}

export default ChatBot

const ChatBotStyle = styled.div`
  cursor: pointer;
  bottom: 220px;
  right: 130px;
  position: fixed;
  width: 380px;
  height: 614px;
  background: #fafcff;
  border: 1px solid #bebebe;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  visibility: ${({
    showNavigation,
    isChatBotOpen,
  }: {
    showNavigation: boolean
    isChatBotOpen: boolean
  }) => (isChatBotOpen && showNavigation ? 'visible' : 'hidden')};
  opacity: ${({ isChatBotOpen, showNavigation }) => (isChatBotOpen && showNavigation ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  animation: ${({
    isChatBotOpen,
    showNavigation,
  }: {
    showNavigation: boolean
    isChatBotOpen: boolean
  }) =>
    showNavigation && isChatBotOpen
      ? css`
          ${leftSlideIn} 0.5s ease-in-out
        `
      : css`
          ${leftSlideOut} 0.5s ease-in-out
        `};
`

const leftSlideIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const leftSlideOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  width: 100%;
  height: 60px;
  background: #3ba1ff;
  border-bottom: 1px solid #bebebe;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${COLORS.white};

  svg {
    position: absolute;
    right: 0;
    padding: 12px;
    width: 48px;
    height: 48px;
    margin: 0;
  }
`

const MainStyle = styled.div`
  width: 100%;
  height: calc(614px - 60px - 80px);
  padding: 32px 24px;
  background: #fafcff;
  overflow-y: scroll;
`

const SelectGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  width: 337px;
  height: 82px;
  margin: 24px 0;
  div {
    display: flex;
    gap: 8px;
    span {
      padding: 8px 12px;
      border: 1px solid #b6b5b5;
      border-radius: 999px;
    }
  }
`
const GotogetheStyle = styled.div`
  display: flex;
  gap: 10px;
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
`
const FooterStyle = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 22px 24px 24px;
  width: 100%;
  height: 80px;
  background: #fafcff;
  border-top: 0.5px solid #bebebe;
  div {
    input {
      width: 100%;
      height: 100%;
      background: #ffffff;
      border: 0.5px solid #bebebe;
      border-radius: 8px;
      padding: 10px;
      font-size: 14px;
      line-height: 19px;
      color: ${COLORS.black};
      ::placeholder {
        color: #7c7c7c;
      }
    }
  }
  button {
    background-color: #3ba1ff;
    border-radius: 10px;
    border: none;
    color: ${COLORS.white};
  }
`

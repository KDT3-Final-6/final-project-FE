import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Select from '@components/common/Select'
import Button from '../common/Button'
import hideName from '@src/utils/hideName'
import hideEmail from '@src/utils/hideEmail'

const UserCard = () => {
  const name = '주우민'
  const nickname = 'joo'
  const email = 'test1234@gmail.com'
  const date = '2023-03-24'
  const grade = '일반회원'

  const selectOptions = ['일반회원', '관리자']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])

  return (
    <UserCardStyle>
      <span>{hideName(name)}</span>
      <span>{nickname}</span>
      <span>{hideEmail(email)}</span>
      <span>{date}</span>
      <span>글/구매평/문의</span>
      <span>
        <Select
          options={selectOptions}
          initial={grade}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          width="108px"
          height="24px"
          borderColor="transparent"
          borderRadius="0"
          fontSize="16px"
          arrowImg="/images/icons/bottom-arrow1.png"
          topPosition="44%"
        />
      </span>
      <span>
        <Button width="58px" height="32px" buttonType="black">
          삭제
        </Button>
      </span>
    </UserCardStyle>
  )
}

export default UserCard

const UserCardStyle = styled.div`
  display: grid;
  grid-template-columns: 89px 242px 180px 222px 137px 200px 110px;
  align-content: center;
  width: 100%;
  height: 60px;
  padding: 10px 0;
  border-bottom: 1px solid ${COLORS.c999};
  font-size: ${FONTSIZE.fz16};
  line-height: ${FONTSIZE.fz19};
  color: ${COLORS.c1b1b1b};
  span {
    justify-self: center;
    align-self: center;
  }
`

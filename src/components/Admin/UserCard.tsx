import React from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Select from '@components/common/Select'
import Button from '../common/Button'

const UserCard = () => {
  const name = '주우민'
  const nickname = 'joo'
  const email = 'test1234@gmail.com'
  const date = '2023-03-24'
  const grade = '일반회원'

  const maskingName = (strName: string) => {
    if (strName.length > 2) {
      let originName = strName.split('')
      originName.forEach(function (name, i) {
        if (i === 0 || i === originName.length - 1) return
        originName[i] = '*'
      })
      let joinName = originName.join()
      return joinName.replace(/,/g, '')
    } else {
      let pattern = /.$/ // 정규식
      return strName.replace(pattern, '*')
    }
  }

  function hideString(str: string) {
    if (str.length > 3) {
      const hiddenChars = str.substring(3).replace(/./g, '*')
      return str.substring(0, 3) + hiddenChars
    } else {
      return str
    }
  }

  const selectOptions = ['일반회원', '관리자']

  return (
    <UserCardStyle>
      <span>{maskingName(name)}</span>
      <span>{nickname}</span>
      <span>{hideString(email)}</span>
      <span>{date}</span>
      <span>글/구매평/문의</span>
      <span>
        <Select
          options={selectOptions}
          initial="일반회원"
          width="108px"
          height="24px"
          borderColor="transparent"
          fontSize="16px"
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
    :last-child {
      /* display: flex;
      justify-content: center;
      align-items: center;
      width: 58px;
      height: 32px;
      background-color: ${COLORS.black};
      color: ${COLORS.white}; */
    }
  }
`

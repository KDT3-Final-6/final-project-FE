import PostCard from '@src/components/Admin/PostCard'
import Input from '@src/components/common/Input'
import Pagination from '@src/components/common/Pagination'
import Select from '@src/components/common/Select'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { useState } from 'react'
import styled from 'styled-components'

const index = () => {
  const selectOptions = ['문의유형1', '문의유형2']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])

  const count = 100
  return (
    <ContainerStyle>
      <InputWrapStyle>
        <Select
          options={selectOptions}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          initial="문의유형"
          width="126px"
          height="56px"
          fontSize="16px"
          borderRadius="0"
          borderColor={`${COLORS.c999}`}
          arrowImg="/images/icons/bottom-arrow1.png"
          type="searchFilterInput"
        />
        <Input
          inputType="searchFilterInput"
          type="text"
          width="799px"
          height="56px"
          placeholder="문의 제목, 내용 검색"
          borderRadius="0"
          bgColor="transparent"
          borderColor={`${COLORS.c999}`}
        />
      </InputWrapStyle>
      <CountPostStyle>
        <span>전체 문의</span>
        <span>{count}</span>
      </CountPostStyle>
      <PostWrapStyle>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <PostCard key={index} />
        ))}
      </PostWrapStyle>
    </ContainerStyle>
  )
}

export default index

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 925px;
`

const InputWrapStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 101px;
  padding-bottom: 80px;
  & > div {
    margin-right: -1px;
  }
`

const CountPostStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${FONTSIZE.fz16};
  line-height: ${FONTSIZE.fz19};
  padding-bottom: 24px;
  span:nth-child(2) {
    margin-left: 5px;
    color: ${COLORS.primary};
    font-weight: ${FONTWEGHT.fw600};
  }
`

const PostWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

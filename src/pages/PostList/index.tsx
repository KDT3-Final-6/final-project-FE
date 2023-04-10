import PostCard from '@src/components/Admin/PostCard'
import Input from '@src/components/common/Input'
import Paginate from '@src/components/common/Paginate'
import Inner from '@src/layout/Inner'
import { useGetAdminSearchPostQuery } from '@src/reduxStore/api/adminPostApiSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { useState } from 'react'
import styled from 'styled-components'
import { ISearchForm } from '../Search'
import { FieldErrors, useForm, FieldValues } from 'react-hook-form'

const index = () => {
  const [keyword, setKeyword] = useState<string | null>(null)
  const [inquiryType, setInquiryType] = useState<string | null>(null)
  const [qnAStatus, setQnAStatus] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)

  const { data: searchList, isLoading } = useGetAdminSearchPostQuery(
    { keyword, inquiryType, qnAStatus, page },
    { refetchOnMountOrArgChange: true }
  )

  if (isLoading) <>Loading</>

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  const count = searchList?.totalElements
  const { register, handleSubmit, setValue } = useForm<ISearchForm>()

  const onValid = (data: FieldValues, event: any) => {
    setKeyword(data.search)
  }

  const onInvalid = (data: FieldErrors) => {
    alert(data.search?.message)
  }

  const handleOptionsClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.target as HTMLElement
    setInquiryType(innerText)
  }

  const handleStatusClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.target as HTMLElement
    setQnAStatus(innerText)
  }

  const handleReset = () => {
    setKeyword(null)
    setInquiryType(null)
    setQnAStatus(null)
  }

  const products = searchList && searchList.content
  const hasProducts = products && products.length > 0

  return (
    <Inner width="925px">
      <InputWrapStyle onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          inputType="searchInput"
          type="text"
          width="100%"
          height="56px"
          placeholder="문의 제목, 내용 검색"
          borderRadius="0"
          bgColor="transparent"
          borderColor={`${COLORS.c999}`}
          register={register('search', {
            required: '검색어를 입력해주세요.',
          })}
        />
      </InputWrapStyle>
      <FilterGroup qnAStatus={qnAStatus} inquiryType={inquiryType}>
        <div>
          <div onClick={handleStatusClick}>답변대기</div>
          <div onClick={handleStatusClick}>답변완료</div>
          <div onClick={handleOptionsClick}>주문/결제</div>
          <div onClick={handleOptionsClick}>환불문의</div>
          <div onClick={handleOptionsClick}>상품문의</div>
          <div onClick={handleOptionsClick}>회원정보</div>
        </div>
        <ResetBtnStyle onClick={handleReset}>리셋하기</ResetBtnStyle>
      </FilterGroup>
      <CountPostStyle>
        <span>전체 문의</span>
        <span>{count}</span>
      </CountPostStyle>
      {hasProducts ? (
        <PostWrapStyle>
          {searchList?.content.map((item) => (
            <PostCard key={item.postId} post={item} />
          ))}
        </PostWrapStyle>
      ) : (
        <ResultMsgContainerStyle>
          <p>검색 결과가 없습니다.</p>
        </ResultMsgContainerStyle>
      )}
      {hasProducts && (
        <Paginate
          totalElements={searchList?.totalPages || 0}
          changePageHandler={changePageHandler}
        />
      )}
    </Inner>
  )
}

export default index

const InputWrapStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 101px;
  padding-bottom: 11px;
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

const FilterGroup = styled.div<{ qnAStatus: string | null; inquiryType: string | null }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 39px;
  div:first-child {
    display: flex;
    gap: 10px;
    align-items: center;
    div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: 5px 7px;
      width: 77px;
      height: 26px;
      background-color: #b8b8b8;
      border-radius: 3px;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: #ffffff;
      :hover {
        box-shadow: ${COLORS.boxShowdow};
      }
      :first-child {
        background-color: ${({ qnAStatus }) => (qnAStatus === '답변대기' ? '#2195ff' : '#b8b8b8')};
      }
      :nth-child(2) {
        background-color: ${({ qnAStatus }) => (qnAStatus === '답변완료' ? '#2195ff' : '#b8b8b8')};
      }
      :nth-child(3) {
        background-color: ${({ inquiryType }) =>
          inquiryType === '주문/결제' ? '#2195ff' : '#b8b8b8'};
      }
      :nth-child(4) {
        background-color: ${({ inquiryType }) =>
          inquiryType === '환불문의' ? '#2195ff' : '#b8b8b8'};
      }
      :nth-child(5) {
        background-color: ${({ inquiryType }) =>
          inquiryType === '상품문의' ? '#2195ff' : '#b8b8b8'};
      }
      :last-child {
        background-color: ${({ inquiryType }) =>
          inquiryType === '회원정보' ? '#2195ff' : '#b8b8b8'};
      }
    }
  }
`

const ResetBtnStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 5px 7px;
  width: 77px;
  height: 26px;
  background-color: ${COLORS.black};
  border-radius: 3px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #ffffff;
  :hover {
    box-shadow: ${COLORS.boxShowdow};
  }
`

const ResultMsgContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  padding-top: 130px;
  padding-bottom: 178px;
`

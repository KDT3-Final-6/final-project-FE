import UserCard from '@src/components/Admin/UserCard'
import Input from '@src/components/common/Input'
import Paginate from '@src/components/common/Paginate'
import { useGetUsersListQuery } from '@src/reduxStore/api/adminUserApiSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { useState } from 'react'
import styled from 'styled-components'

const index = () => {
  const [page, setPage] = useState<number>(1)
  /**회원 전체리스트 get */
  const { data: userList, isLoading } = useGetUsersListQuery(page)
  if (isLoading) <>Loading</>

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  const countUser = userList?.totalElements

  return (
    <ContainerStyle>
      <CountStyle>
        <span>전체사용자</span>
        <span>{countUser}</span>
        <span>명</span>
      </CountStyle>
      <UserListStyle>
        <header>
          <span>이름</span>
          <span>닉네임</span>
          <span>이메일</span>
          <span>가입일</span>
          <span>글/구매평/문의</span>
          <span>권한</span>
          <span>권한변경</span>
          <span>계정삭제</span>
        </header>
        {userList?.content.map((user) => (
          <UserCard key={user.memberId} user={user} />
        ))}
      </UserListStyle>
      <Paginate totalElements={userList?.totalPages || 0} changePageHandler={changePageHandler} />
    </ContainerStyle>
  )
}

export default index

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CountStyle = styled.div`
  width: 1180px;
  display: flex;
  align-items: center;
  font-size: ${FONTSIZE.fz16};
  line-height: ${FONTSIZE.fz19};
  padding-bottom: 24px;
  padding-top: 80px;
  span:nth-child(2) {
    margin-left: 5px;
    color: ${COLORS.primary};
    font-weight: ${FONTWEGHT.fw600};
  }
`

const UserListStyle = styled.div`
  width: 1180px;
  header {
    display: grid;
    grid-template-columns: 89px 152px 180px 202px 137px 110px 200px 110px;
    align-content: center;
    width: 100%;
    height: 60px;
    padding: 10px 0;
    border-top: 1px solid ${COLORS.c999};
    border-bottom: 1px solid ${COLORS.c999};
    font-size: ${FONTSIZE.fz16};
    line-height: ${FONTSIZE.fz19};
    color: ${COLORS.c1b1b1b};
    span {
      justify-self: center;
    }
  }
`

export const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 101px;
  padding-bottom: 80px;
`

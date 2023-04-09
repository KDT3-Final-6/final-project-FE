import UserCard from '@src/components/Admin/UserCard'
import Input from '@src/components/common/Input'
import Pagination from '@src/components/common/Pagination'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'

const index = () => {
  const countUser = 135 // 유저 수, 패칭해 올 데이터
  return (
    <ContainerStyle>
      <InputWrapStyle>
        <Input
          inputType="searchInput"
          type="text"
          width="925px"
          height="56px"
          placeholder="검색"
          borderRadius="0"
          bgColor="transparent"
          borderColor={`${COLORS.c999}`}
        />
      </InputWrapStyle>
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
          <span>계정삭제</span>
        </header>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user, index) => (
          <UserCard key={index} />
        ))}
      </UserListStyle>
      <Pagination />
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

export const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 101px;
  padding-bottom: 80px;
`

export const CountStyle = styled.div`
  width: 1180px;
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

const UserListStyle = styled.div`
  width: 1180px;
  padding-bottom: 100px;
  header {
    display: grid;
    grid-template-columns: 89px 242px 180px 222px 137px 200px 110px;
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

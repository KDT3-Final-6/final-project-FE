import React from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE } from '@src/styles/root'
import Button from '../common/Button'
import hideName from '@src/utils/hideName'
import hideEmail from '@src/utils/hideEmail'
import { IAdminUsersContent } from '@src/interfaces/adminUsers'
import {
  useDeleteUserMutation,
  useGetUserDetailQuery,
  usePostChangeAdminMutation,
  usePostChangeGeneralMutation,
} from '@src/reduxStore/api/adminUserApiSlice'

interface IUserCard {
  user: IAdminUsersContent
}

const UserCard = ({ user }: IUserCard) => {
  const {
    memberId,
    memberName,
    memberNickname,
    memberEmail,
    createdDate,
    totalQnAs,
    totalReviews,
    total,
    roles,
  } = user
  const { data: userInfo, isLoading } = useGetUserDetailQuery(memberId)

  if (isLoading) <>Loading</>

  const grade = roles.includes('ROLE_ADMIN') ? '관리자' : '일반회원'
  const [date, time] = createdDate.split('T')

  const [deleteUser] = useDeleteUserMutation()
  const [postChangeAdmin] = usePostChangeAdminMutation()
  const [postChangeGeneral] = usePostChangeGeneralMutation()

  /**권한 수정 */
  const handleChangeRole = async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const text = target.innerText

    if (text === '일반회원') {
      await postChangeGeneral(memberId)
    } else {
      await postChangeAdmin(memberId)
    }
  }

  /**회원 탈퇴 */
  const handleDelete = async () => {
    await deleteUser(memberId)
    alert(`${memberName}님을 탈퇴시켰습니다!`)
  }

  return (
    <UserCardStyle>
      <span>{hideName(memberName)}</span>
      <span>{memberNickname}</span>
      <span>{hideEmail(memberEmail)}</span>
      <span>{date}</span>
      <TotalNumberBoxStyle>
        <span>{total}</span>
        <span>/</span>
        <span>{totalReviews}</span>
        <span>/</span>
        <span>{totalQnAs}</span>
      </TotalNumberBoxStyle>
      <span>{grade}</span>
      <ButtonGroupStyle grade={grade}>
        <div onClick={handleChangeRole}>일반회원</div>
        <span>|</span>
        <div onClick={handleChangeRole}>관리자</div>
      </ButtonGroupStyle>
      <span>
        <Button onClick={handleDelete} width="58px" height="32px" buttonType="black">
          삭제
        </Button>
      </span>
    </UserCardStyle>
  )
}

export default UserCard

const UserCardStyle = styled.div`
  display: grid;
  grid-template-columns: 89px 152px 180px 202px 137px 110px 200px 110px;
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

const TotalNumberBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const ButtonGroupStyle = styled.div<{ grade: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #a8a8a8;
  div {
    cursor: pointer;
    color: #a8a8a8;
    :hover {
      color: ${COLORS.black};
    }
    :first-child {
      color: ${({ grade }) => (grade === '일반회원' ? `${COLORS.primary}` : '#a8a8a8')};
    }
    :last-child {
      color: ${({ grade }) => (grade === '관리자' ? `${COLORS.primary}` : '#a8a8a8')};
    }
  }
`

import React from 'react'
import styled from 'styled-components'
interface Props {
  setActiveMenu: React.Dispatch<React.SetStateAction<number>>
  activeMenu: number
}

const MenuTab = ({ setActiveMenu, activeMenu }: Props) => {
  const menuList = [
    '구매 내역',
    '장바구니',
    '찜',
    '내가 쓴 리뷰',
    '1 : 1 문의 내용',
    '회원 정보 수정',
  ]
  return (
    <MenuTabStyle>
      {menuList.map((menu, index) =>
        index === activeMenu ? (
          <ActiveTabStyle key={index}>{menu}</ActiveTabStyle>
        ) : (
          <DefaultTabStyle key={index} onClick={() => setActiveMenu(index)}>
            {menu}
          </DefaultTabStyle>
        )
      )}
    </MenuTabStyle>
  )
}

const MenuTabStyle = styled.ul`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  gap: 45px;
`
const ActiveTabStyle = styled.li`
  background-color: #404040;
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`
const DefaultTabStyle = styled.li`
  padding: 10px 20px;
  cursor: pointer;
`
export default MenuTab

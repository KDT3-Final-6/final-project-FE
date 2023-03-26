import React, { useEffect } from 'react'
import { FONTWEGHT } from '@src/styles/root'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import PATH from '@src/constants/pathConst'

interface Props {
  setActiveMenu: React.Dispatch<React.SetStateAction<number>>
  activeMenu: number
}

const MenuTab = ({ setActiveMenu, activeMenu }: Props) => {
  // path 확인해서 activeMenu 활성화
  const location = useLocation()
  const pathName = location.pathname
  const pathCheck = (pathName: string) => {
    if (pathName.includes(PATH.ORDER_LIST)) {
      return setActiveMenu(0)
    } else if (pathName.includes(PATH.CART)) {
      return setActiveMenu(1)
    } else if (pathName.includes(PATH.WISHLIST)) {
      return setActiveMenu(2)
    } else if (pathName.includes(PATH.MY_REVIEW)) {
      return setActiveMenu(3)
    } else if (pathName.includes(PATH.ONE_ON_ONE)) {
      return setActiveMenu(4)
    } else if (pathName.includes(PATH.INFO_EDIT)) {
      return setActiveMenu(5)
    }
  }
  useEffect(() => pathCheck(pathName), [pathName])

  const navigate = useNavigate()
  const menuList = [
    '구매 내역',
    '장바구니',
    '찜',
    '내가 쓴 리뷰',
    '1 : 1 문의 내용',
    '회원 정보 수정',
  ]

  // 버튼 누를 때 이동
  const navigateHandler = (index: number) => {
    if (index === 0) {
      return navigate('/mypage/orderlist')
    } else if (index === 1) {
      return navigate('/mypage/cart')
    } else if (index === 2) {
      return navigate('/mypage/wishlist')
    } else if (index === 3) {
      return navigate('/mypage/myreview')
    } else if (index === 4) {
      return navigate('/mypage/oneonone')
    } else if (index === 5) {
      return navigate('/mypage/infoedit')
    }
  }

  return (
    <MenuTabStyle>
      {menuList.map((menu, index) =>
        index === activeMenu ? (
          <ActiveTabStyle key={index} onClick={() => navigateHandler(index)}>
            {menu}
          </ActiveTabStyle>
        ) : (
          <DefaultTabStyle
            key={index}
            onClick={() => {
              setActiveMenu(index), navigateHandler(index)
            }}
          >
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
  font-weight: ${FONTWEGHT.fw700};
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`
const DefaultTabStyle = styled.li`
  padding: 10px 20px;
  cursor: pointer;
`
export default MenuTab

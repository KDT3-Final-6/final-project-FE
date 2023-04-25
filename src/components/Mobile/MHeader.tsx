import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Image from '../common/Image'
import PATH from '@src/constants/pathConst'
import { FiLogIn, FiLogOut, FiSettings } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import styled from 'styled-components'
import { useLogoutMutation } from '@src/reduxStore/api/userApiSlice'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'
import { DELETE_USERINFO } from '@src/reduxStore/features/userInfoSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'

const MHeader = () => {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()
  const dispatch = useDispatch()
  const [cookies, , removeCookies] = useCookies()
  let accessToken = cookies.accessToken
  const handleLogout = async () => {
    try {
      dispatch(showLoading())
      const response = await logout().unwrap()

      if (response.data) {
        removeCookies('accessToken')
        removeCookies('role')
      }
      dispatch(showLoading())
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGOUT.complete,
          onClickOK: () => {
            dispatch(setModal({ isOpen: false }))
            dispatch(DELETE_USERINFO())
            navigate(PATH.HOME)
          },
        })
      )
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGOUT.error,
          onClickOK: () => dispatch(setModal({ isOpen: false })),
        })
      )
    } finally {
      dispatch(hideLoading())
    }
  }

  const isCurPath = (path: string) => {
    if (location.pathname.includes(path)) return true
    else return false
  }

  return (
    <HeaderWrapStyle>
      <MainHeaderStyle>
        <Image
          width="125px"
          height="20px"
          alt="고투게더 로고 홈으로 이동"
          bgImage="/images/Logo_Gotogether.png"
          onClick={() => navigate(PATH.HOME)}
        />
        <ButtonsStyle>
          {cookies.accessToken ? (
            <>
              {!isCurPath(PATH.ADMIN) && (
                <>
                  <Link to={PATH.WISHLIST}>
                    <AiOutlineHeart />
                    <span>찜상품</span>
                  </Link>
                  <Link to={PATH.CART}>
                    <AiOutlineShoppingCart />
                    <span>장바구니</span>
                  </Link>
                  <Link to={PATH.MYPAGE}>
                    <FaRegUserCircle />
                    <span>마이페이지</span>
                  </Link>
                </>
              )}
              <Link to={PATH.HOME} onClick={handleLogout}>
                <FiLogOut />
                <span>로그아웃</span>
              </Link>
              {cookies.role.includes('ROLE_ADMIN') && (
                <Link to={PATH.ADMIN}>
                  <FiSettings />
                  <span>관리자</span>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to={PATH.LOGIN}>
                <FiLogIn />
                <span>로그인</span>
              </Link>
              <Link to={PATH.SIGNUP}>
                <AiOutlineUser />
                <span>회원가입</span>
              </Link>
            </>
          )}
        </ButtonsStyle>
      </MainHeaderStyle>
      <MenuStyle>
        <li onClick={() => navigate('/survey')}>여행큐레이션</li>
        <li onClick={() => navigate('/product/group')}>그룹별</li>
        <li onClick={() => navigate('/product/district')}>지역별</li>
        <li onClick={() => navigate('/product/theme')}>테마별</li>
      </MenuStyle>
    </HeaderWrapStyle>
  )
}

const HeaderWrapStyle = styled.header`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  padding: 20px;
`

const MainHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`

const MenuStyle = styled.menu`
  display: flex;
  justify-content: space-between;
  li {
    font-size: ${FONTSIZE.fz20};
    cursor: pointer;
    font-weight: ${FONTWEGHT.fw500};
  }
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 20px;
  color: ${COLORS.c333};

  a {
    display: flex;
    flex-direction: column;
    text-align: center;

    svg {
      font-size: ${FONTSIZE.fz23};
    }

    span {
      width: 100%;
      display: block;
      font-size: ${FONTSIZE.fz14};
      margin-top: 6px;
    }
  }
`
export default MHeader

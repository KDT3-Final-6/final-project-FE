import React, { MouseEvent, useEffect } from 'react'
import PATH from '@src/constants/pathConst'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiLogIn, FiLogOut, FiSettings } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Input from './common/Input'
import Inner from '@src/layout/Inner'
import Image from './common/Image'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { logout, userInfo } from '@src/api/auth'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'
import isCurPath from '@src/utils/isCurlPath'
import { SET_USERINFO } from '@src/reduxStore/features/userInfoSlice'
import { useForm } from 'react-hook-form'
import { ISearchForm } from '@pages/Search'
import { DELETE_USERINFO } from '@src/reduxStore/features/userInfoSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cookies, , removeCookies] = useCookies()
  const location = useLocation()

  useEffect(() => {
    const userInfoFetch = async () => dispatch(SET_USERINFO(await userInfo()))
    if (cookies.accessToken) {
      userInfoFetch()
    }
  }, [cookies.accessToken])

  const handleLogout = async () => {
    try {
      dispatch(showLoading())
      const response = await logout()
      if (response.data) {
        removeCookies('accessToken', { path: '/' })
        removeCookies('role', { path: '/' })
      }
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGOUT.complete,
          onClickOK: () => {
            dispatch(setModal({ isOpem: false, route: PATH.HOME }))
            dispatch(DELETE_USERINFO())
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

  const { register, handleSubmit, setValue } = useForm<ISearchForm>()

  const onValid = (data: any) => {
    console.log('data', data)
    navigate(`/search?keyword=${data.search}`)
  }
  const onInvalid = (data: any) => {
    alert(data.search.message)
  }

  return (
    <header>
      <GnbStyle>
        <Inner height="100px" display="flex" justifyContent="space-between">
          <Link to={PATH.HOME}>
            <Image src="/images/Logo_Gotogether.png" alt="고투게더 로고 홈으로 이동" />
          </Link>
          <ButtonsStyle>
            {cookies.accessToken ? (
              <>
                {!location.pathname.includes(PATH.ADMIN) && (
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
        </Inner>
      </GnbStyle>
      <LnbStyle>
        <Inner height="90px" display="flex" justifyContent="space-between">
          <form onSubmit={handleSubmit(onValid, onInvalid)}>
            {!isCurPath(PATH.SEARCH) && (
              <Input
                inputType="searchInput"
                type="text"
                width="350px"
                height="50px"
                placeholder={
                  location.pathname.includes(PATH.ADMIN)
                    ? '게시물 검색'
                    : '여행 그룹이나 상품을 검색해보세요.'
                }
                borderColor="none"
                register={register('search', {
                  required: '검색어를 입력해주세요.',
                })}
              />
            )}
          </form>
          <LnbListStyle>
            {!location.pathname.includes(PATH.ADMIN) ? (
              <>
                <li>
                  <Link to={PATH.SURVEY}>여행 큐레이션</Link>
                </li>
                <li>
                  <Link to={PATH.PRODUCT_RECOMMEND}>추천 여행</Link>
                </li>
                <li>
                  <Link to={PATH.PRODUCT_GROUP}>그룹별 여행</Link>
                </li>
                <li>
                  <Link to={PATH.PRODUCT_DISTRICT}>지역별 여행</Link>
                </li>
                <li>
                  <Link to={PATH.PRODUCT_THEME}>테마별 여행</Link>
                </li>
                <BarStyle />
                <li>커뮤니티</li>
              </>
            ) : (
              <>
                <li className={isCurPath(PATH.ADD_PRODUCT) ? 'active' : ''}>
                  <Link to={PATH.ADD_PRODUCT}>상품 관리</Link>
                </li>
                <li className={isCurPath(PATH.TRANSACTION_LIST) ? 'active' : ''}>
                  <Link to={PATH.TRANSACTION_LIST}>거래 내역</Link>
                </li>
                <li className={isCurPath(PATH.USER_LIST) ? 'active' : ''}>
                  <Link to={PATH.USER_LIST}>회원 관리</Link>
                </li>
                <li className={isCurPath(PATH.POST_LIST) ? 'active' : ''}>
                  <Link to={PATH.POST_LIST}>게시글 관리</Link>
                </li>
              </>
            )}
          </LnbListStyle>
        </Inner>
      </LnbStyle>
    </header>
  )
}

export default Header

const GnbStyle = styled.div`
  border-bottom: 1px solid ${COLORS.cd9d8d8};
`

const LnbStyle = styled.div`
  border-bottom: 1px solid ${COLORS.cd9d8d8};
`

const LnbListStyle = styled.ul`
  display: flex;
  font-size: ${FONTSIZE.fz20};
  gap: 30px;
  color: ${COLORS.c1b1b1b};
  font-weight: ${FONTWEGHT.fw600};

  li {
    &.active {
      color: ${COLORS.primary};
    }
  }
`

const BarStyle = styled.span`
  display: inline-block;
  width: 1px;
  height: 18px;
  background: ${COLORS.black};
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

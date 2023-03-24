import React, { useState } from 'react'
import Inner from '@src/layout/Inner'
import { RiPencilLine } from 'react-icons/ri'
import styled from 'styled-components'
import RoundButton from '@src/components/common/RoundButton'
import MenuTab from '@src/components/MyPage/MenuTab'
import OrderList from './OrderList'
import Cart from './Cart'
import WishList from './WishList'
import MyReview from './MyReview'
import OneOnOne from './OneOnOne'
import InfoEdit from './InfoEdit'
import COLORS from '@src/styles/root'

type Props = {}

const MyPage = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState(0)
  return (
    <>
      <img
        src="/images/myPage_banner.png"
        alt="banner"
        style={{ height: '190px', width: '100%' }}
      />
      <ProfileStyle>
        <ImageStyle>
          <img src="/images/profile.png" alt="" />
        </ImageStyle>
        <span style={{ fontSize: '24px', fontWeight: 700 }}>김고투</span>
        <RoundButton buttonType="skyBlue" width="140px" height="42px">
          프로필 편집 <RiPencilLine />
        </RoundButton>
      </ProfileStyle>
      <InnerWrap>
        <Inner>
          <MenuTab setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
          <div>
            {
              [<OrderList />, <Cart />, <WishList />, <MyReview />, <OneOnOne />, <InfoEdit />][
                activeMenu
              ]
            }
          </div>
        </Inner>
      </InnerWrap>
    </>
  )
}

const ProfileStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  top: -65px;
`
const ImageStyle = styled.div`
  width: 130px;
  height: 130px;
  img {
    width: 100%;
    border-radius: 100px;
    border: 5px solid white;
    box-sizing: border-box;
  }
`

const InnerWrap = styled.div`
  border-top: 1px solid ${COLORS.mediumGrey};
`

export default MyPage
